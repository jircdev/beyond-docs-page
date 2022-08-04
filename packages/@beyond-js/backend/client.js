define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.backends = _exports.Backend = _exports.ActionsBridge = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/backend/client",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./action/bridge
  *******************************/

  ims.set('./action/bridge', {
    hash: 2957109108,
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
        #bundle;
        #backend;

        constructor(distribution, bundle) {
          this.#distribution = distribution;
          this.#bundle = bundle.id;
          this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
        }

        async execute(action, ...params) {
          const a = new _.default(this.#backend, this.#bundle, action, ...params);
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
    hash: 2047620412,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _backends = require("../backends");

      var _executionError = require("./execution-error");

      let autoincrement = 0;

      class _default extends _core.Events {
        #pkg;
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
          const id = this.#id;

          const pkg = this.#pkg = (() => {
            const split = backend.split('/');
            split.pop(); // Remove the distribution name

            return split.join('/');
          })();

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
        #promise = new _core.PendingPromise();
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
          const backend = await _backends.backends.get(this.#pkg);
          if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);

          try {
            const socket = await backend.socket;

            if (!socket) {
              const message = `Error getting socket on "${backend.pkg}" backend. `;
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
    hash: 486330626,
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
        #pkg;

        get pkg() {
          return this.#pkg;
        }

        #host;

        get host() {
          return this.#host;
        }

        #local;

        get local() {
          return this.#local;
        }

        #socket;
        #io = new _io.ServiceIOConfiguration();

        get io() {
          return this.#io;
        }

        constructor(pkg, host, local) {
          this.#pkg = pkg;
          this.#host = host;
          this.#local = local;
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
    hash: 1705909413,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.backends = void 0;

      var _backend = require("./backend");
      /*bundle*/


      const backends = new class {
        #hosts = new Map();

        register(pkg, host) {
          !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
        }

        async get(pkg) {
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);

          try {
            const {
              backend: config
            } = (await bimport(`${pkg}/config`)).default;

            if (!config) {
              console.log(`Backend configuration not set on package "${pkg}"`);
              this.#hosts.set(pkg, void 0);
              return;
            }

            const {
              host,
              local
            } = config; // Due to the get method is asynchronous, check if host is already set

            if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
            const backend = new _backend.Backend(pkg, host, local);
            this.#hosts.set(pkg, backend);
            return this.#hosts.get(pkg);
          } catch (exc) {
            console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
            this.#hosts.set(pkg, void 0);
          }
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
    hash: 1218486296,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = require("@beyond-js/kernel/core");

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
            pkg
          } = backend; // Check if the service is running. Start it if it is not

          pkg !== '@beyond-js/local' && (await this.#initiator.check());
          const {
            io
          } = await bimport('socket.io-client@4.5.1');
          let query = backend.io.querystring && (await backend.io.querystring());
          const {
            host
          } = this.#backend;
          return this.#socket = io(host, {
            transports: ['websocket'],
            'query': query
          });
        }

      }

      exports.default = default_1;

      __decorate([_core.SingleCall], default_1.prototype, "get", null);
    }
  });
  /**********************************
  INTERNAL MODULE: ./socket/initiator
  **********************************/

  ims.set('./socket/initiator', {
    hash: 2764942770,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = require("@beyond-js/kernel/core");
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

          this.#promise = new _core.PendingPromise();
          if (!this.#backend.local || this.#local) return;
          this.#local = (await bimport('@beyond-js/local/main')).local;
          this.#promise.resolve();
        };

        async check() {
          await this.#initialise();
          if (!this.#local) return;
          const {
            pkg,
            local
          } = this.#backend;
          const id = `${pkg}/${local}`;
          const service = this.#local.bees.get(id);
          const status = await service.status;
          if (status === 'running') return;
          await service.start();
          await new Promise(resolve => setTimeout(resolve, 2000));
        }

      }

      exports.default = _default;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./action/bridge",
    "from": "ActionsBridge",
    "name": "ActionsBridge"
  }, {
    "im": "./backend",
    "from": "Backend",
    "name": "Backend"
  }, {
    "im": "./backends",
    "from": "backends",
    "name": "backends"
  }];
  let ActionsBridge, Backend, backends; // Module exports

  _exports.backends = backends;
  _exports.Backend = Backend;
  _exports.ActionsBridge = ActionsBridge;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ActionsBridge') && (_exports.ActionsBridge = ActionsBridge = require ? require('./action/bridge').ActionsBridge : value);
    (require || prop === 'Backend') && (_exports.Backend = Backend = require ? require('./backend').Backend : value);
    (require || prop === 'backends') && (_exports.backends = backends = require ? require('./backends').backends : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBSyxRQUFMLENBQWNtQixLQUFmLElBQXdCLEtBQUssTUFBakMsRUFBeUM7VUFDekMsS0FBSyxNQUFMLEdBQTJCLENBQUMsTUFBTVMsT0FBTyxDQUFDLHVCQUFELENBQWQsRUFBeUNULEtBQXBFO1VBQ0EsS0FBSyxRQUFMLENBQWNKLE9BQWQ7UUFUSjs7UUFZVyxNQUFMb0IsS0FBSztVQUNQLE1BQU0sS0FBSyxXQUFMLEVBQU47VUFDQSxJQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO1VBRWxCLE1BQU07WUFBQ3RELEdBQUQ7WUFBTXNDO1VBQU4sSUFBZSxLQUFLLFFBQTFCO1VBQ0EsTUFBTXhDLEVBQUUsR0FBRyxHQUFHRSxHQUFHLElBQUlzQyxLQUFLLEVBQTFCO1VBQ0EsTUFBTXFCLE9BQU8sR0FBRyxLQUFLLE1BQUwsQ0FBWUMsSUFBWixDQUFpQmxDLEdBQWpCLENBQXFCNUIsRUFBckIsQ0FBaEI7VUFDQSxNQUFNK0QsTUFBTSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0UsTUFBN0I7VUFDQSxJQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtVQUUxQixNQUFNRixPQUFPLENBQUNHLEtBQVJILEVBQU47VUFDQSxNQUFNLElBQUlJLE9BQUosQ0FBWTdCLE9BQU8sSUFBSThCLFVBQVUsQ0FBQzlCLE9BQUQsRUFBVSxJQUFWLENBQWpDLENBQU47UUFDSDs7TUFqQ1MiLCJuYW1lcyI6WyJBY3Rpb25zQnJpZGdlIiwiY29uc3RydWN0b3IiLCJkaXN0cmlidXRpb24iLCJidW5kbGUiLCJpZCIsIm1vZHVsZSIsInBrZyIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJhIiwiQWN0aW9uIiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJhdXRvaW5jcmVtZW50IiwiRXZlbnRzIiwiYmFja2VuZCIsInNwbGl0IiwicG9wIiwiam9pbiIsImNoYW5uZWwiLCJleGVjdXRlZCIsImV4ZWN1dGluZyIsImVycm9yIiwiUGVuZGluZ1Byb21pc2UiLCJzb2NrZXQiLCJ0cmlnZ2VyIiwiZW1pdCIsImV4YyIsInJlamVjdCIsImJhY2tlbmRzIiwiZ2V0IiwiRXJyb3IiLCJvbnJlc3BvbnNlIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvZmYiLCJzb3VyY2UiLCJwcm9jZXNzaW5nVGltZSIsInJlc29sdmUiLCJvbiIsIkJhY2tlbmQiLCJob3N0IiwibG9jYWwiLCJTZXJ2aWNlSU9Db25maWd1cmF0aW9uIiwiaW8iLCJTb2NrZXQiLCJNYXAiLCJyZWdpc3RlciIsImhhcyIsInNldCIsImNvbmZpZyIsImJpbXBvcnQiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmUiLCJxdWVyeXN0cmluZyIsIkluaXRpYXRvciIsImNoZWNrIiwicXVlcnkiLCJ0cmFuc3BvcnRzIiwiX19kZWNvcmF0ZSIsIlNpbmdsZUNhbGwiLCJzZXJ2aWNlIiwiYmVlcyIsInN0YXR1cyIsInN0YXJ0IiwiUHJvbWlzZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImJyaWRnZS50cyIsImV4ZWN1dGlvbi1lcnJvci50cyIsImluZGV4LnRzIiwiYmFja2VuZC50cyIsImJhY2tlbmRzLnRzIiwiaW8udHMiLCJpbml0aWF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=