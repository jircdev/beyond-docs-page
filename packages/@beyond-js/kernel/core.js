define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.projects = _exports.languages = _exports.hmr = _exports.beyond = _exports.SingleCall = _exports.PendingPromise = _exports.ListenerFunction = _exports.Languages = _exports.Events = _exports.CancellationToken = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/core",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /************************
  INTERNAL MODULE: ./beyond
  ************************/

  ims.set('./beyond', {
    hash: 480070727,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.beyond = exports.Beyond = void 0;

      var _languages = require("./languages");

      class Beyond {
        /**
         * @deprecated
         * Use import {languages} from '@beyond-js/kernel/core';
         */
        get languages() {
          return _languages.languages;
        }
        /**
         * @deprecated
         * Use bimport instead of beyond.import
         *
         * @param {string} resource
         * @param {number} version
         * @return {Promise<*>}
         */


        async import(resource, version) {
          return await bimport(resource, version);
        }
        /**
         * @deprecated
         * Use breload instead of beyond.reload
         *
         * @param {string} resource
         * @param {number} version
         * @return {Promise<*>}
         */


        async reload(resource, version) {
          return await breload(resource, version);
        }

      }

      exports.Beyond = Beyond;
      /*bundle*/

      const beyond = new Beyond();
      exports.beyond = beyond;
      globalThis.beyond = beyond;
    }
  });
  /*********************************
  INTERNAL MODULE: ./languages/index
  *********************************/

  ims.set('./languages/index', {
    hash: 2074773487,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.languages = exports.Languages = void 0;

      var _events = require("../utils/events/events");
      /*bundle*/


      class Languages extends _events.Events {
        #project;
        #specs;
        #storage = typeof localStorage === 'object' ? localStorage : void 0;
        #supported;

        get supported() {
          return this.#supported;
        }

        get default() {
          return this.#specs?.default;
        }

        #current;

        get current() {
          return this.#current;
        }

        #resolve;
        #ready = new Promise(resolve => this.#resolve = resolve);

        get ready() {
          return this.#ready;
        }

        #fetched = false;

        get fetched() {
          return this.#fetched;
        }

        constructor(project) {
          super();
          this.#project = project;
          bimport(`${project}/config`).then(({
            default: config
          }) => {
            this.#setup(config.languages);
            this.#fetched = true;
            this.#resolve();
          });
        }

        #configure(value) {
          if (this.#current === value) return true;

          if (typeof value !== 'string' || value.length !== 2) {
            console.warn(`Configured language "${value}" is invalid`);
            return false;
          }

          if (value && !this.#supported.has(value)) {
            console.log(`Language "${value}" is not supported`);
            return false;
          }

          const previous = this.#current;
          this.#current = value;
          previous && this.trigger('change');
          return true;
        }

        set current(value) {
          if (!this.#configure(value)) return;
          this.#storage?.setItem('__beyond_language', value);
        }

        #setup(specs) {
          // Check if the default language is valid
          if (specs.default && typeof specs.default !== 'string' || specs.default.length !== 2) {
            console.log(`Default language "${specs.default}" is invalid`);
            specs.default = undefined;
          } // Check the supported languages, if not set, default will be english


          const def = specs.default ? specs.default : 'en';
          specs.supported = specs.supported instanceof Array ? specs.supported : [def];
          !specs.supported.length && specs.supported.push(def);
          this.#supported = new Set(specs.supported); // If default language not set or was invalid, take the first supported language

          specs.default = specs.default ? specs.default : [...this.#supported][0]; // If default language was configured, but not set in the supported list, warn it

          if (!this.#supported.has(specs.default)) {
            console.warn(`Default language "${specs.default}" is not supported by current application`);
            specs.default = [...this.#supported][0];
          }

          this.#specs = specs;
          const configured = this.#storage?.getItem('__beyond_language'); // Try to configure the locally previously configured language

          if (configured && this.#configure(configured)) return; // Try to configure the language configured in the device

          const device = typeof location === 'object' ? navigator.language.split('-')[0] : void 0;
          if (device && this.#configure(device)) return;
          this.#configure(specs.default);
        }

      }

      exports.Languages = Languages;
      /*bundle*/

      const languages = new Languages(globalThis.__app_package);
      exports.languages = languages;
    }
  });
  /********************************
  INTERNAL MODULE: ./projects/index
  ********************************/

  ims.set('./projects/index', {
    hash: 2722437218,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.projects = void 0;
      const pkg = globalThis.__app_package;

      class Projects extends Map {
        constructor() {
          super();
          typeof baseUrl === 'string' && this.register(pkg, baseUrl);
        }

        register(name, host) {
          this.set(name, {
            host
          });
        }

      }
      /*bundle*/


      const projects = typeof process !== 'object' ? new Projects() : void 0;
      exports.projects = projects;
    }
  });
  /*************************************
  INTERNAL MODULE: ./utils/events/events
  *************************************/

  ims.set('./utils/events/events', {
    hash: 3993267980,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Events = void 0;
      /*bundle*/

      class Events {
        #specs;
        #listeners = new Map();
        #destroyed = false;

        get destroyed() {
          return this.#destroyed;
        }

        constructor(specs) {
          specs = specs ? specs : {};
          if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
          this.#specs = specs;

          if (specs.bind) {
            specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);

            specs.bind.unbind = (event, listener) => this.off(event, listener);
          }
        }
        /**
         * Binds an event handler to an event name
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} priority
         * @returns {this}
         */


        on(event, listener, priority) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (typeof listener !== 'function') {
            throw new Error('Listener is not a function');
          }

          this.off(event, listener); // Just in case the listener is already registered

          const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
          this.#listeners.set(event, l);
          l.push({
            listener: listener,
            priority: priority ? priority : 0
          });
          return this;
        }

        bind = (event, listener, priority) => this.on(event, listener, priority);
        /**
         * Unbind an event listener
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} force
         * @returns {this}
         */

        off(event, listener, force) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (!event) {
            throw new Error(`Event name not specified`);
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (!listener) {
            if (!force) throw new Error('Listener function not set');
            this.#listeners.delete(event);
            return this;
          }

          if (!this.#listeners.has(event)) {
            return this;
          }

          const e = this.#listeners.get(event);
          const filtered = e.filter(item => item.listener !== listener);
          this.#listeners.set(event, filtered);
          return this;
        }

        unbind = (event, listener, force) => this.off(event, listener, force);
        /**
         * Triggers an event
         *
         * @param {Trigger} event
         * @param {*} rest
         * @returns {Promise<*>}
         */

        trigger(event, ...rest) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          event = typeof event === 'string' ? {
            'name': event
          } : event;
          if (typeof event !== 'object') throw new Error('Invalid parameters');
          if (typeof event.name !== 'string') throw new Error('Invalid event name');

          if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
            throw new Error(`Event "${event.name}" is not defined`);
          }

          let args = [...arguments];
          args.shift(); // Remove the event name from the list of arguments

          if (!this.#listeners.has(event.name)) return;
          let l = this.#listeners.get(event.name); // Sort by priority

          l.sort((a, b) => b.priority - a.priority);

          if (event.async) {
            const trigger = async function () {
              const promises = [];

              for (let listener of l) {
                promises.push(listener.listener(...args));
              }

              await Promise.all(promises);
            };

            return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
          } else {
            for (let listener of l) {
              listener.listener(...args);
            }
          }
        }

        destroy() {
          this.#destroyed = true;
          this.#listeners.clear();
        }

      }

      exports.Events = Events;
      globalThis.Events = Events;
    }
  });
  /************************************
  INTERNAL MODULE: ./utils/events/types
  ************************************/

  ims.set('./utils/events/types', {
    hash: 1632705009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /*******************************************************************************
  INTERNAL MODULE: ./utils/execution-control/cancellation-token/cancellation-token
  *******************************************************************************/

  ims.set('./utils/execution-control/cancellation-token/cancellation-token', {
    hash: 4200323006,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CancellationToken = void 0;
      /*bundle*/

      class CancellationToken {
        #id = 0;

        get current() {
          return this.#id;
        }

        reset = () => ++this.#id;
        check = id => id === this.#id;
      }

      exports.CancellationToken = CancellationToken;
    }
  });
  /*****************************************************************
  INTERNAL MODULE: ./utils/execution-control/single-call/single-call
  *****************************************************************/

  ims.set('./utils/execution-control/single-call/single-call', {
    hash: 783668127,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SingleCall = SingleCall;
      /*bundle*/

      function SingleCall(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        let promises = new WeakMap();

        descriptor.value = function (...args) {
          if (promises.has(this)) return promises.get(this);
          const promise = originalMethod.apply(this, args);
          promises.set(this, promise);

          const clean = () => promises.delete(this);

          promise.then(clean).catch(clean);
          return promise;
        };

        return descriptor;
      }
    }
  });
  /*******************************************************
  INTERNAL MODULE: ./utils/pending-promise/pending-promise
  *******************************************************/

  ims.set('./utils/pending-promise/pending-promise', {
    hash: 3746827130,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PendingPromise = void 0;
      /*bundle*/

      class PendingPromise extends Promise {
        resolve;
        reject;

        constructor(executor) {
          // needed for PendingPromise.race/all ecc
          if (executor instanceof Function) {
            super(executor);
            return;
          }

          let resolve = undefined;
          let reject = undefined;
          super((a, b) => {
            resolve = a;
            reject = b;
          });
          this.resolve = resolve;
          this.reject = reject;
        }

      } // For backward compatibility


      exports.PendingPromise = PendingPromise;
      typeof process !== 'object' && (window.PendingPromise = PendingPromise);
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./beyond",
    "from": "beyond",
    "name": "beyond"
  }, {
    "im": "./languages/index",
    "from": "Languages",
    "name": "Languages"
  }, {
    "im": "./languages/index",
    "from": "languages",
    "name": "languages"
  }, {
    "im": "./projects/index",
    "from": "projects",
    "name": "projects"
  }, {
    "im": "./utils/events/events",
    "from": "Events",
    "name": "Events"
  }, {
    "im": "./utils/events/types",
    "from": "ListenerFunction",
    "name": "ListenerFunction"
  }, {
    "im": "./utils/execution-control/cancellation-token/cancellation-token",
    "from": "CancellationToken",
    "name": "CancellationToken"
  }, {
    "im": "./utils/execution-control/single-call/single-call",
    "from": "SingleCall",
    "name": "SingleCall"
  }, {
    "im": "./utils/pending-promise/pending-promise",
    "from": "PendingPromise",
    "name": "PendingPromise"
  }];
  let beyond, Languages, languages, projects, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise; // Module exports

  _exports.PendingPromise = PendingPromise;
  _exports.SingleCall = SingleCall;
  _exports.CancellationToken = CancellationToken;
  _exports.ListenerFunction = ListenerFunction;
  _exports.Events = Events;
  _exports.projects = projects;
  _exports.languages = languages;
  _exports.Languages = Languages;
  _exports.beyond = beyond;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'beyond') && (_exports.beyond = beyond = require ? require('./beyond').beyond : value);
    (require || prop === 'Languages') && (_exports.Languages = Languages = require ? require('./languages/index').Languages : value);
    (require || prop === 'languages') && (_exports.languages = languages = require ? require('./languages/index').languages : value);
    (require || prop === 'projects') && (_exports.projects = projects = require ? require('./projects/index').projects : value);
    (require || prop === 'Events') && (_exports.Events = Events = require ? require('./utils/events/events').Events : value);
    (require || prop === 'ListenerFunction') && (_exports.ListenerFunction = ListenerFunction = require ? require('./utils/events/types').ListenerFunction : value);
    (require || prop === 'CancellationToken') && (_exports.CancellationToken = CancellationToken = require ? require('./utils/execution-control/cancellation-token/cancellation-token').CancellationToken : value);
    (require || prop === 'SingleCall') && (_exports.SingleCall = SingleCall = require ? require('./utils/execution-control/single-call/single-call').SingleCall : value);
    (require || prop === 'PendingPromise') && (_exports.PendingPromise = PendingPromise = require ? require('./utils/pending-promise/pending-promise').PendingPromise : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYmltcG9ydCIsInJlbG9hZCIsImJyZWxvYWQiLCJiZXlvbmQiLCJnbG9iYWxUaGlzIiwiTGFuZ3VhZ2VzIiwiRXZlbnRzIiwibG9jYWxTdG9yYWdlIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5IiwiZmV0Y2hlZCIsImNvbnN0cnVjdG9yIiwicHJvamVjdCIsInRoZW4iLCJjb25maWciLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzIiwibG9nIiwicHJldmlvdXMiLCJ0cmlnZ2VyIiwic2V0SXRlbSIsInNwZWNzIiwidW5kZWZpbmVkIiwiZGVmIiwiQXJyYXkiLCJwdXNoIiwiU2V0IiwiY29uZmlndXJlZCIsImdldEl0ZW0iLCJkZXZpY2UiLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3BsaXQiLCJfX2FwcF9wYWNrYWdlIiwicGtnIiwiUHJvamVjdHMiLCJNYXAiLCJiYXNlVXJsIiwicmVnaXN0ZXIiLCJuYW1lIiwiaG9zdCIsInNldCIsInByb2plY3RzIiwicHJvY2VzcyIsImRlc3Ryb3llZCIsIkVycm9yIiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwiZ2V0IiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwicmVzdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzaGlmdCIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJleGMiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJyZXNldCIsImNoZWNrIiwiaWQiLCJTaW5nbGVDYWxsIiwidGFyZ2V0IiwicHJvcGVydHlLZXkiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJXZWFrTWFwIiwicHJvbWlzZSIsImFwcGx5IiwiY2xlYW4iLCJQZW5kaW5nUHJvbWlzZSIsInJlamVjdCIsImV4ZWN1dG9yIiwiRnVuY3Rpb24iLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImJleW9uZC50cyIsImluZGV4LnRzIiwiZXZlbnRzLnRzIiwiY2FuY2VsbGF0aW9uLXRva2VuLnRzIiwic2luZ2xlLWNhbGwudHMiLCJwZW5kaW5nLXByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19