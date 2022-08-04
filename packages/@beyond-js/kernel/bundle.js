define(["exports", "module"], function (_exports2, _amd_module) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.instances = _exports2.externals = _exports2.brequire = _exports2.breload = _exports2.bimport = _exports2.Package = _exports2.Module = _exports2.ListenerFunction = _exports2.IMSpecs = _exports2.IMCreators = _exports2.IExportsDescriptor = _exports2.IDependencies = _exports2.Events = _exports2.Bundle = void 0;
  const __url = _amd_module.uri;
  const amd_require = require;
  let __pkg = {
    exports: {}
  };
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./base/index
  ****************************/

  ims.set('./base/index', {
    hash: 3069514728,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondPackage = void 0;
      exports.resolve = resolve;

      function resolve(source, id) {
        if (!id.startsWith('.')) throw new Error(`Module id must be a relative resource "${id}"`);
        const split = {};
        split.source = source.split('/');
        split.source.pop();
        split.target = (id.startsWith('./') ? id.slice(2) : id).split('../');

        while (split.target[0] === '' && split.target.length > 1) {
          split.target.shift();
          split.source.pop();
        }

        return split.source.join('/') + '/' + split.target.join('/');
      }
      /**
       * This class is used only by beyond/core
       */


      class BeyondPackage {
        #ims;
        #cached = new Map();
        #exports;

        constructor(exports) {
          this.#exports = exports;
        }

        initialise(ims) {
          this.#ims = ims;
          this.#exports.process((id, source) => this.require(id, source), {});
        }
        /**
         * Solve the require function
         *
         * @param source {string} The module from where the require is being triggered
         * @param id {string} The module id being requested
         * @returns {*}
         */


        require(id, source) {
          id = source ? resolve(source, id) : id;

          const module = (() => {
            if (this.#ims.has(id)) return id;
            return id.endsWith('/') ? `${id}index` : `${id}/index`;
          })();

          if (this.#cached.has(module)) return this.#cached.get(module);
          if (!this.#ims.has(module)) throw new Error(`Internal module "${id}" not found`);
          const fn = this.#ims.get(module).creator;

          const require = required => this.require(required, module); // Here the id is the source of the require


          const exports = {};
          fn(require, exports);
          this.#cached.set(module, exports);
          return exports;
        }

      }

      exports.BeyondPackage = BeyondPackage;
    }
  });
  /*********************************
  INTERNAL MODULE: ./bimport/bimport
  *********************************/

  ims.set('./bimport/bimport', {
    hash: 1704675750,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bimport = bimport;
      exports.breload = breload;

      require("./brequire");
      /*bundle*/

      /**
       * Used only in local environment to support HMR
       * Note: in AMD mode, the querystring is not allowed, so it is require to undef the bundle and import it again.
       *
       * @param {string} resource
       * @param {number} version
       * @return {Promise<*>}
       */


      async function breload(resource, version) {
        typeof amd_require === 'function' && amd_require.undef(resource);
        return await bimport(resource, version);
      }
      /**
       * Import a module, solving internally the module format (amd, esm).
       *
       * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
       *
       * @param resource {string} The resource identifier of the bundle
       * @param version {number} The version required by hmr to update a bundle's processor
       * @returns {Promise<*>}
       */

      /*bundle*/


      function bimport(resource, version) {
        if (typeof amd_require === 'function') {
          return new Promise((resolve, reject) => {
            if (typeof resource !== "string") throw 'Invalid module parameter';
            resource = resource.endsWith('.js') ? resource.slice(0, resource.length - 3) : resource;
            const error = new Error(`Error loading or processing module "${resource}"`);
            amd_require([resource], returned => resolve(returned), exc => {
              console.error(`Error loading resource "${resource}."`, exc.stack);
              reject(error);
            });
          });
        } else {
          return import(resource + (version ? `?version=${version}` : ''));
        }
      }

      bimport.mode = (() => {
        if (typeof amd_require === 'function') return 'amd';
        const {
          System
        } = globalThis;
        if (typeof System === 'object' && typeof System.import === 'function') return 'sjs';
        return 'esm';
      })();
    }
  });
  /**********************************
  INTERNAL MODULE: ./bimport/brequire
  **********************************/

  ims.set('./bimport/brequire', {
    hash: 854296253,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.brequire = brequire;

      var _externals = require("../externals");

      var _instances = require("../package/instances");
      /*bundle*/

      /**
       * Require a previously loaded bundle synchronously:
       * (can be a project bundle or library bundle, or an external bundle).
       *
       * brequire is implemented for internal use, as the require function available in the internal modules
       * exposes this functionality.
       * In fact the require of the internal modules internally makes use of brequire.
       *
       * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
       *
       * @param {string} resource
       * @return {*}
       */


      function brequire(resource) {
        if (_externals.default.has(resource)) return _externals.default.get(resource);

        if (_instances.default.has(resource)) {
          const pkg = _instances.default.get(resource);

          !pkg.initialised && pkg.initialise();
          return pkg.exports.values;
        }
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./bimport/index
  *******************************/

  ims.set('./bimport/index', {
    hash: 1650910402,
    creator: function (require, exports) {
      "use strict";

      var _bimport = require("./bimport");

      var _brequire = require("./brequire");
      /**
       * When running in a BEE, bimport, brequire and breload are implemented by it
       */


      globalThis.breload === void 0 && (globalThis.breload = _bimport.breload);
      globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
      globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
    }
  });
  /***********************************
  INTERNAL MODULE: ./bimport/requirejs
  ***********************************/

  ims.set('./bimport/requirejs', {
    hash: 2243979856,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /************************
  INTERNAL MODULE: ./bundle
  ************************/

  ims.set('./bundle', {
    hash: 3291284715,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundle = void 0;

      var _package = require("./package");

      var _instances = require("./instances");

      var _module = require("./module");

      require("./bimport");
      /*bundle*/


      class Bundle extends Map {
        #id;

        get id() {
          return this.#id;
        }

        #module;

        get module() {
          return this.#module;
        }

        #name;

        get name() {
          return this.#name;
        }

        #multibundle;

        get multibundle() {
          return this.#multibundle;
        }

        #uri;

        get uri() {
          return this.#uri;
        }

        constructor(params, uri) {
          super();
          const {
            module,
            multibundle,
            bundle
          } = params;
          if (!module || !bundle) throw new Error('Invalid bundle creation parameters');
          this.#id = multibundle ? `${module}.${bundle}` : module;
          this.#name = bundle;
          this.#multibundle = multibundle;
          this.#module = new _module.Module(module);
          this.#uri = uri;

          _instances.instances.register(this);
        }

        package(language) {
          if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
          language = !language ? '' : language;
          if (this.has(language)) return this.get(language);
          const pkg = new _package.Package(this, language);
          this.set(language, pkg);
          return pkg;
        }

      }

      exports.Bundle = Bundle;
    }
  });
  /******************************
  INTERNAL MODULE: ./events/index
  ******************************/

  ims.set('./events/index', {
    hash: 1779469688,
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
    }
  });
  /******************************
  INTERNAL MODULE: ./events/types
  ******************************/

  ims.set('./events/types', {
    hash: 1632705009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /*******************************
  INTERNAL MODULE: ./exports/index
  *******************************/

  ims.set('./exports/index', {
    hash: 3692244612,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _trace = require("../ims/require/trace");

      class _default {
        #require;
        #values = {};

        get values() {
          return this.#values;
        }
        /**
         * Property is set by the bundle file, or by the transversal
         * @type {{im: string, from: string, name: string}[]}
         */


        descriptor;
        /**
         * Property is set by the bundle file to process the module exports (es6, cjs, amd)
         * @type {(require: (id: string) => any) => {void(require)}}
         */

        process;

        constructor(require) {
          this.#require = require;
          this.#values.hmr = {
            on: (event, listener) => require.pkg.hmr.on(event, listener),
            off: (event, listener) => require.pkg.hmr.off(event, listener)
          };
        } // Used by the IM exports proxy to update the value of the bundle exported property when
        // the property is changed in the IM


        set(key, value) {
          this.#values[key] = value;
        }

        update() {
          const require = id => {
            const trace = new _trace.Trace();
            trace.register('exports.update', id);
            return this.#require.solve(id, trace);
          };

          this.process?.({
            require
          }); // Clean all previous values

          Object.keys(this.#values).forEach(p => p !== 'hmr' && delete this.#values[p]);
          this.descriptor?.forEach(({
            im,
            from,
            name
          }) => {
            const trace = new _trace.Trace();
            this.#values[name] = this.#require.solve(im, trace)[from];
          });
        }

      }

      exports.default = _default;
    }
  });
  /***************************
  INTERNAL MODULE: ./externals
  ***************************/

  ims.set('./externals', {
    hash: 3199904818,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.externals = exports.default = void 0;
      /*bundle*/

      /**
       * Collection of dependencies of all the created bundles
       */

      const externals = new class extends Map {
        register(externals) {
          externals.forEach((value, key) => this.set(key, value));
        }

      }();
      exports.externals = externals;
      var _default = externals;
      exports.default = _default;
    }
  });
  /*****************************
  INTERNAL MODULE: ./ims/exports
  *****************************/

  ims.set('./ims/exports', {
    hash: 1011172992,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IMExports = void 0;

      class IMExports {
        constructor(im, bexports) {
          return new Proxy(this, {
            set: (self, name, value) => {
              // Set the exported property
              self[name] = value; // Check if it is a bundle exported property

              const prop = bexports.descriptor?.find(({
                im: id,
                from
              }) => {
                return im.id === id && name === from;
              });
              prop && bexports.set(prop.name, value);
              prop && bexports.process?.({
                prop: prop.name,
                value
              });
              return true;
            }
          });
        }

      }

      exports.IMExports = IMExports;
    }
  });
  /************************
  INTERNAL MODULE: ./ims/im
  ************************/

  ims.set('./ims/im', {
    hash: 1995154566,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InternalModule = void 0;

      var _trace = require("./require/trace");

      var _exports = require("./exports"); // Bundle internal module


      class InternalModule {
        #pkg;

        get package() {
          return this.#pkg;
        }

        #id;

        get id() {
          return this.#id;
        }

        #hash;

        get hash() {
          return this.#hash;
        }

        #require;
        #exports;
        #creator;
        #creating = false;
        #created = false;

        get created() {
          return this.#created;
        }

        #create = trace => {
          if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
          if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
          this.#creating = true;

          const require = id => this.#require.solve(id, trace, this);

          Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
          this.#creator(require, this.#exports);
          this.#created = true;
          this.#creating = false;
        };

        require(trace, source) {
          if (!this.#created) {
            source && trace.register(source.id, this.#id);
            this.#create(trace);
            trace.pop();
          }

          return this.#exports;
        }

        initialise() {
          if (this.#created) return;
          const trace = new _trace.Trace();
          trace.register('initialisation', this.#id);
          this.#create(trace);
        }

        update(creator, hash) {
          this.#created = false;
          this.#creator = creator;
          this.#hash = hash;
        }

        constructor(pkg, id, hash, creator, require) {
          this.#pkg = pkg;
          this.#id = id;
          this.#hash = hash;
          this.#creator = creator;
          this.#require = require;
          this.#exports = new _exports.IMExports(this, pkg.exports);
        }

      }

      exports.InternalModule = InternalModule;
    }
  });
  /***************************
  INTERNAL MODULE: ./ims/index
  ***************************/

  ims.set('./ims/index', {
    hash: 2108227262,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InternalModules = void 0;

      var _im = require("./im");

      class InternalModules {
        #pkg;
        #ims = new Map();
        #require;

        constructor(pkg) {
          this.#pkg = pkg;
        }

        set _require(value) {
          this.#require = value;
        }

        #register = (id, hash, creator) => {
          if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
          const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
          this.#ims.set(im.id, im);
        };

        register(ims) {
          ims.forEach(({
            creator,
            hash
          }, id) => this.#register(id, hash, creator));
        }

        require(id, trace, source) {
          const module = (() => {
            if (this.#ims.has(id)) return id;
            return id.endsWith('/') ? `${id}index` : `${id}/index`;
          })();

          if (!this.#ims.has(module)) {
            throw new Error(`Internal module "${id}" not found`);
          }

          const im = this.#ims.get(module);
          return im.require(trace, source);
        }

        initialise() {
          this.#ims.forEach(im => im.initialise());
        }

        update(ims) {
          ims.forEach(({
            creator,
            hash
          }, id) => {
            if (!this.#ims.has(id)) {
              this.#register(id, hash, creator);
              return;
            }

            const im = this.#ims.get(id);
            if (im.hash === hash) return;
            im.update(creator, hash);
            this.#pkg.hmr.trigger(`${id}:change`);
          });
        }

      }

      exports.InternalModules = InternalModules;
    }
  });
  /***********************************
  INTERNAL MODULE: ./ims/require/index
  ***********************************/

  ims.set('./ims/require/index', {
    hash: 2870196409,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Require = void 0;

      var _base = require("../../base");

      class Require {
        #pkg;

        get pkg() {
          return this.#pkg;
        }

        constructor(pkg) {
          this.#pkg = pkg;
        }
        /**
         * Solve a cjs require function
         *
         * @param {string} id The id of the internal module being required
         * @param {Trace} trace {object} The internal trace to find cyclical dependencies of internal modules
         * @param {InternalModule=} im The internal module that is making the call
         * @return {*}
         */


        solve(id, trace, im) {
          if (id.startsWith('.')) {
            // Relative require (internal module)
            id = im ? (0, _base.resolve)(im.id, id) : id;
            return this.#pkg.ims.require(id, trace, im);
          }
          /**
           * It is a non-relative require
           */


          if (id === 'beyond_context') {
            const {
              bundle
            } = this.#pkg;
            return {
              module: bundle.module,
              bundle,
              pkg: this.#pkg
            };
          } // @beyond-js/kernel/transversals requires the Bundle object


          if (id === '@beyond-js/kernel/bundle') {
            const {
              Bundle
            } = require('../../bundle');

            const {
              instances
            } = require('../../instances');

            return {
              Bundle,
              instances
            };
          }

          const brequired = brequire(id);
          if (brequired) return brequired;
          throw new Error(`Bundle "${id}" not found`);
        }

      }

      exports.Require = Require;
    }
  });
  /***********************************
  INTERNAL MODULE: ./ims/require/trace
  ***********************************/

  ims.set('./ims/require/trace', {
    hash: 1932027471,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Trace = void 0; // Used to find cyclical requires of internal modules
      // Key is the id being required and the value is the source

      class Trace extends Array {
        has = id => this.find(rt => rt.id === id);

        register(source, id) {
          // Check for cyclical module require
          if (this.has(id)) {
            let traced = '';
            this.forEach(({
              id,
              source
            }) => {
              const s = ['initialisation', 'exports.update'].includes(source) ? 'Cycle initiates with source' : `then "${source}" requires`;
              traced += `\t${s} "${id}"\n`;
            });
            traced += `\tthat finally requires "${id}" again.\n`;
            throw new Error(`Recursive module load found.\n` + `Internal module "${source}" is requiring another internal module that was previously required: "${id}"\n` + `Trace of required modules:\n${traced}`);
          }

          this.push({
            id,
            source
          });
        }

      }

      exports.Trace = Trace;
    }
  });
  /***************************
  INTERNAL MODULE: ./instances
  ***************************/

  ims.set('./instances', {
    hash: 999322031,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.instances = void 0;
      /*bundle*/

      const instances = new class extends Map {
        register(bundle) {
          this.set(bundle.id, bundle);
        }

      }();
      exports.instances = instances;
    }
  });
  /******************************
  INTERNAL MODULE: ./module/index
  ******************************/

  ims.set('./module/index', {
    hash: 1248372116,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Module = void 0;
      /*bundle*/

      class Module {
        #pkg;

        get pkg() {
          return this.#pkg;
        }

        #name;

        get name() {
          return this.#name;
        }

        get resource() {
          return `${this.pkg}/${this.name}`;
        }

        constructor(module) {
          const split = module.split('/');
          this.#pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
          this.#name = split.join('/');
        }
        /**
         * @deprecated
         *
         * @param {string} action
         * @param {Record<string, *>} params
         * @return {Promise<*>}
         */


        async execute(action, params) {
          if (typeof globalThis.beyond !== 'object') return;
          const {
            backends
          } = await beyond.import('@beyond-js/backend/client');
          return await backends.execute(this.#pkg, 'legacy', this.#name, action, params);
        }

      }

      exports.Module = Module;
    }
  });
  /**************************************
  INTERNAL MODULE: ./package/dependencies
  **************************************/

  ims.set('./package/dependencies', {
    hash: 4131918580,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      class _default extends Set {
        update(deps) {
          this.clear();
          deps?.forEach(resource => this.add(resource));
        }

      }

      exports.default = _default;
    }
  });
  /*******************************
  INTERNAL MODULE: ./package/index
  *******************************/

  ims.set('./package/index', {
    hash: 3359803568,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Package = void 0;

      var _ims = require("../ims");

      var _require = require("../ims/require");

      var _exports = require("../exports");

      var _dependencies = require("./dependencies");

      var _instances = require("./instances");

      var _events = require("../events");
      /*bundle*/


      class Package {
        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #language;

        get language() {
          return this.#language;
        }

        get id() {
          return this.#language ? `${this.#bundle.id}.${this.#language}` : this.#bundle.id;
        }

        #require;
        #ims;

        get ims() {
          return this.#ims;
        }

        #exports;

        get exports() {
          return this.#exports;
        } // The beyond dependencies that are required by the bundle


        #dependencies = new _dependencies.default();

        get dependencies() {
          return this.#dependencies;
        }

        #hmr = new _events.Events();

        get hmr() {
          return this.#hmr;
        }

        constructor(bundle, language) {
          this.#bundle = bundle;
          this.#language = language ? language : '';
          this.#ims = new _ims.InternalModules(this);
          this.#require = new _require.Require(this);
          this.#ims._require = this.#require;
          this.#exports = new _exports.default(this.#require);

          _instances.default.register(this);
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        initialise(ims) {
          if (this.#initialised) throw new Error('Package already initialised');
          this.#initialised = true;
          ims && this.#ims.register(ims);
          this.exports.update();
          this.#ims.initialise();
        }

        update(ims) {
          this.#ims.update(ims);
          this.exports.update();
          this.#ims.initialise();
          this.#hmr.trigger('change');
        }

      }

      exports.Package = Package;
    }
  });
  /***********************************
  INTERNAL MODULE: ./package/instances
  ***********************************/

  ims.set('./package/instances', {
    hash: 4282111117,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _default = new class extends Map {
        register(pkg) {
          this.set(pkg.id, pkg);
        }

      }();

      exports.default = _default;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./bimport/bimport",
    "from": "breload",
    "name": "breload"
  }, {
    "im": "./bimport/bimport",
    "from": "bimport",
    "name": "bimport"
  }, {
    "im": "./bimport/brequire",
    "from": "brequire",
    "name": "brequire"
  }, {
    "im": "./bundle",
    "from": "Bundle",
    "name": "Bundle"
  }, {
    "im": "./events/index",
    "from": "Events",
    "name": "Events"
  }, {
    "im": "./events/types",
    "from": "ListenerFunction",
    "name": "ListenerFunction"
  }, {
    "im": "./exports/index",
    "from": "IExportsDescriptor",
    "name": "IExportsDescriptor"
  }, {
    "im": "./externals",
    "from": "IDependencies",
    "name": "IDependencies"
  }, {
    "im": "./externals",
    "from": "externals",
    "name": "externals"
  }, {
    "im": "./ims/im",
    "from": "IMSpecs",
    "name": "IMSpecs"
  }, {
    "im": "./ims/index",
    "from": "IMCreators",
    "name": "IMCreators"
  }, {
    "im": "./instances",
    "from": "instances",
    "name": "instances"
  }, {
    "im": "./module/index",
    "from": "Module",
    "name": "Module"
  }, {
    "im": "./package/index",
    "from": "Package",
    "name": "Package"
  }];
  let breload, bimport, brequire, Bundle, Events, ListenerFunction, IExportsDescriptor, IDependencies, externals, IMSpecs, IMCreators, instances, Module, Package; // Module exports

  _exports2.Package = Package;
  _exports2.Module = Module;
  _exports2.instances = instances;
  _exports2.IMCreators = IMCreators;
  _exports2.IMSpecs = IMSpecs;
  _exports2.externals = externals;
  _exports2.IDependencies = IDependencies;
  _exports2.IExportsDescriptor = IExportsDescriptor;
  _exports2.ListenerFunction = ListenerFunction;
  _exports2.Events = Events;
  _exports2.Bundle = Bundle;
  _exports2.brequire = brequire;
  _exports2.bimport = bimport;
  _exports2.breload = breload;

  __pkg.exports.process = function (require) {
    _exports2.breload = breload = require('./bimport/bimport').breload;
    _exports2.bimport = bimport = require('./bimport/bimport').bimport;
    _exports2.brequire = brequire = require('./bimport/brequire').brequire;
    _exports2.Bundle = Bundle = require('./bundle').Bundle;
    _exports2.Events = Events = require('./events/index').Events;
    _exports2.ListenerFunction = ListenerFunction = require('./events/types').ListenerFunction;
    _exports2.IExportsDescriptor = IExportsDescriptor = require('./exports/index').IExportsDescriptor;
    _exports2.IDependencies = IDependencies = require('./externals').IDependencies;
    _exports2.externals = externals = require('./externals').externals;
    _exports2.IMSpecs = IMSpecs = require('./ims/im').IMSpecs;
    _exports2.IMCreators = IMCreators = require('./ims/index').IMCreators;
    _exports2.instances = instances = require('./instances').instances;
    _exports2.Module = Module = require('./module/index').Module;
    _exports2.Package = Package = require('./package/index').Package;
  };

  const __bp = {};
  ims.get('./base/index').creator(() => 0, __bp);
  __pkg = new __bp.BeyondPackage(__pkg.exports);

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pCLEtBQUtyQixHQUFMLENBQVNxQixHQUFHLENBQUM5QyxFQUFiLEVBQWlCOEMsR0FBakI7UUFDSDs7TUFIK0IsQ0FBckIiLCJuYW1lcyI6WyJyZXNvbHZlIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsImluaXRpYWxpc2UiLCJpbXMiLCJwcm9jZXNzIiwicmVxdWlyZSIsIm1vZHVsZSIsImhhcyIsImVuZHNXaXRoIiwiZ2V0IiwiZm4iLCJjcmVhdG9yIiwicmVxdWlyZWQiLCJzZXQiLCJicmVsb2FkIiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYW1kX3JlcXVpcmUiLCJ1bmRlZiIsImJpbXBvcnQiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJyZXR1cm5lZCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1vZGUiLCJTeXN0ZW0iLCJnbG9iYWxUaGlzIiwiaW1wb3J0IiwiYnJlcXVpcmUiLCJleHRlcm5hbHMiLCJpbnN0YW5jZXMiLCJwa2ciLCJpbml0aWFsaXNlZCIsInZhbHVlcyIsIkJ1bmRsZSIsIm5hbWUiLCJtdWx0aWJ1bmRsZSIsInVyaSIsInBhcmFtcyIsImJ1bmRsZSIsIk1vZHVsZSIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiUGFja2FnZSIsIkV2ZW50cyIsImRlc3Ryb3llZCIsInNwZWNzIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImRlc3Ryb3kiLCJjbGVhciIsImRlc2NyaXB0b3IiLCJobXIiLCJrZXkiLCJ2YWx1ZSIsInVwZGF0ZSIsInRyYWNlIiwiVHJhY2UiLCJzb2x2ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsImZpbmQiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGVkIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCJSZXF1aXJlIiwiYnJlcXVpcmVkIiwicnQiLCJ0cmFjZWQiLCJzIiwiZXhlY3V0ZSIsImFjdGlvbiIsImJleW9uZCIsImJhY2tlbmRzIiwiU2V0IiwiZGVwcyIsImFkZCIsIkRlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsIkV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwiYmltcG9ydC50cyIsImJyZXF1aXJlLnRzIiwiYnVuZGxlLnRzIiwiZXh0ZXJuYWxzLnRzIiwiZXhwb3J0cy50cyIsImltLnRzIiwidHJhY2UudHMiLCJpbnN0YW5jZXMudHMiLCJkZXBlbmRlbmNpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=