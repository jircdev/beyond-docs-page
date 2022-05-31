define(["exports", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.backends = _exports2.Backend = _exports2.ActionsBridge = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/backend/client/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./action/bridge
  *******************************/

  ims.set('./action/bridge', {
    hash: 1886551535,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ActionsBridge = void 0;

      var _ = require("./");
      /*bundle*/


      class ActionsBridge {
        #distribution;
        #module;
        #backend;

        constructor(distribution, module) {
          this.#distribution = distribution;
          this.#module = `${module.pkg}/${module.name}`;
          this.#backend = `${module.pkg}/${this.#distribution}`;
        }

        async execute(action, ...params) {
          const a = new _.default(this.#backend, this.#module, action, ...params);
          return await a.execute();
        }

      }

      exports.ActionsBridge = ActionsBridge;
    }
  });
  /****************************************
  INTERNAL MODULE: ./action/execution-error
  ****************************************/

  ims.set('./action/execution-error', {
    hash: 3368390780,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExecutionError = void 0;
      const ExecutionError = class {
        #message;

        get message() {
          return this.#message;
        }

        #stack;

        get stack() {
          return this.#stack;
        }

        constructor(message, stack) {
          this.#message = message;
          this.#stack = stack;
        }

      };
      exports.ExecutionError = ExecutionError;
    }
  });
  /******************************
  INTERNAL MODULE: ./action/index
  ******************************/

  ims.set('./action/index', {
    hash: 3265063170,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _executionError = require("./execution-error");

      var _backends = require("../backends");

      let autoincrement = 0;

      class _default extends _ts.Events {
        #backend;
        #request;
        #module;

        get module() {
          return this.#module;
        }

        #action;

        get action() {
          return this.#action;
        }

        #params;

        get params() {
          return this.#params;
        }

        constructor(backend, module, action, ...params) {
          super();
          if (!_backends.backends.has(backend)) throw new Error(`Backend "${backend}" not found`);
          this.#backend = _backends.backends.get(backend);
          const id = this.#id;
          const {
            pkg
          } = this.#backend;
          this.#module = module;
          this.#action = action;
          this.#params = params;
          this.#request = {
            id,
            pkg,
            module,
            action,
            params
          };
        }

        #id = ++autoincrement;

        get id() {
          return this.#id;
        }

        #channel = `response-v2-${this.#id}`;

        get channel() {
          return this.#channel;
        }

        #executed = false;

        get executed() {
          return this.#executed;
        }

        #executing = false;

        get executing() {
          return this.#executing;
        }

        #error = false;

        get error() {
          return this.#error;
        }

        #timer;
        #attempts = 0;
        #promise = new _ts.PendingPromise();
        #send = socket => {
          this.#attempts && this.trigger('retrying', this.#attempts);
          this.#attempts++;

          try {
            socket.emit('rpc-v2', this.#request);
          } catch (exc) {
            this.#executing = false;
            this.#executed = true;
            this.#error = true;
            this.#promise.reject(exc);
          }
        };

        async execute() {
          if (this.#executing || this.#executed) return this.#promise;
          this.#executing = true;

          try {
            const socket = await this.#backend.socket;

            if (!socket) {
              const message = `Error getting socket on "${this.#backend.id}" backend. `;
              this.#promise.reject(new Error(message));
              return;
            }

            const onresponse = response => {
              this.#executed = true;
              this.#executing = false;
              clearTimeout(this.#timer);
              socket.off(this.#channel, onresponse);
              const {
                error,
                message,
                source,
                processingTime
              } = response;
              void source; // source can be 'server' or 'cache'

              void processingTime;
              error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
            };

            socket.on(this.#channel, onresponse);
            this.#send(socket);
          } catch (exc) {
            this.#promise.reject(exc);
            return;
          }

          return this.#promise;
        }

      }

      exports.default = _default;
    }
  });
  /*************************
  INTERNAL MODULE: ./backend
  *************************/

  ims.set('./backend', {
    hash: 343882787,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Backend = void 0;

      var _io = require("./io");

      var _socket = require("./socket");
      /*bundle*/


      class Backend {
        #id;

        get id() {
          return this.#id;
        }

        #pkg;

        get pkg() {
          return this.#pkg;
        }

        #host;

        get host() {
          return this.#host;
        }

        #socket;
        #io = new _io.ServiceIOConfiguration();

        get io() {
          return this.#io;
        }

        constructor(config) {
          this.#id = config.id;
          this.#pkg = config.id.split('/')[0];
          this.#host = config.host;
          this.#socket = new _socket.default(this);
        }

        get socket() {
          return this.#socket.get();
        }

      }

      exports.Backend = Backend;
    }
  });
  /**************************
  INTERNAL MODULE: ./backends
  **************************/

  ims.set('./backends', {
    hash: 1913330468,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.backends = void 0;

      var _backend = require("./backend");
      /*bundle*/


      const backends = new class {
        #backends = new Map();

        constructor() {
          const config = globalThis.__beyond_config;
          const backends = config?.backends;
          backends?.forEach(([id, host]) => {
            this.register({
              id,
              host
            });
          });
        }

        register(config) {
          if (this.#backends.has(config.id)) return;
          this.#backends.set(config.id, new _backend.Backend(config));
        }

        has(pkg) {
          return this.#backends.has(pkg);
        }

        get(pkg) {
          return this.#backends.get(pkg);
        }
        /**
         * @deprecated Actually used by the legacy module.execute(...)
         *
         * @param {string} pkg
         * @param {string} distribution
         * @param {string} module
         * @param {string} action
         * @param params
         * @return {Promise<*>}
         */


        async execute(pkg, distribution, module, action, ...params) {
          const a = new (require('./action').default)(`${pkg}/${distribution}`, module, action, ...params);
          return await a.execute();
        }

      }();
      exports.backends = backends;
    }
  });
  /********************
  INTERNAL MODULE: ./io
  ********************/

  ims.set('./io', {
    hash: 2941830475,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ServiceIOConfiguration = void 0;

      class ServiceIOConfiguration {
        querystring;
      }

      exports.ServiceIOConfiguration = ServiceIOConfiguration;
    }
  });
  /******************************
  INTERNAL MODULE: ./socket/index
  ******************************/

  ims.set('./socket/index', {
    hash: 2509215701,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _initiator = require("./initiator");

      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      class default_1 {
        #backend;
        #initiator;
        #socket;

        constructor(backend) {
          this.#backend = backend;
          this.#initiator = new _initiator.default(backend);
        }

        async get() {
          if (this.#socket) return this.#socket;
          const backend = this.#backend;
          const {
            id
          } = backend; // Check that the service is running, and initiate it if it is not

          id !== '@beyond-js/local/legacy' && (await this.#initiator.check());
          const {
            io
          } = await _ts.beyond.require('socket.io-client');
          let query = backend.io.querystring && (await backend.io.querystring());
          const {
            host
          } = this.#backend;
          this.#socket = io(host, {
            transports: ['websocket'],
            'query': query
          });
          this.#socket.on('error', error => console.error('Socket error:', id, host, error));
          this.#socket.on('connect_error', error => console.error('Socket connection error:', id, host, error));
          this.#socket.on('connect_timeout', error => console.error('Socket connection timeout:', id, host, error));
          return this.#socket;
        }

      }

      exports.default = default_1;

      __decorate([_ts.SingleCall], default_1.prototype, "get", null);
    }
  });
  /**********************************
  INTERNAL MODULE: ./socket/initiator
  **********************************/

  ims.set('./socket/initiator', {
    hash: 470407340,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /**
       * Service launcher required only in local development environment
       */


      class _default {
        #backend;
        #local;

        constructor(backend) {
          this.#backend = backend;
        }

        #promise;
        #initialise = async () => {
          if (this.#promise) {
            await this.#promise;
            return;
          }

          this.#promise = new _ts.PendingPromise();
          if (!_ts.beyond.local || this.#local) return;
          this.#local = (await _ts.beyond.import('@beyond-js/local/main/ts')).local;
          this.#promise.resolve();
        };

        async check() {
          await this.#initialise();
          if (!this.#local) return;
          const {
            id
          } = this.#backend;
          const service = this.#local.bees.get(id);
          const status = await service.status;
          if (status === 'running') return;
          await service.start();
          await new Promise(resolve => setTimeout(resolve, 2000));
        }

      }

      exports.default = _default;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.ActionsBridge = require('./action/bridge').ActionsBridge;
    _exports.Backend = require('./backend').Backend;
    _exports.backends = require('./backends').backends;
  };

  let ActionsBridge, Backend, backends; // Module exports

  _exports2.backends = backends;
  _exports2.Backend = Backend;
  _exports2.ActionsBridge = ActionsBridge;

  __pkg.exports.process = function (require) {
    _exports2.ActionsBridge = ActionsBridge = require('./action/bridge').ActionsBridge;
    _exports2.Backend = Backend = require('./backend').Backend;
    _exports2.backends = backends = require('./backends').backends;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});