define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Texts = _exports.CurrentTexts = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/texts",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./current
  *************************/

  ims.set('./current', {
    hash: 170893344,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CurrentTexts = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _texts = require("./texts");
      /*bundle*/

      /**
       * The texts loaded by the current language (not available in SSR environment)
       */


      class CurrentTexts extends _core.Events {
        #texts = new Map();
        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #enabled = false;

        get enabled() {
          return this.#enabled;
        }

        set enabled(value) {
          this.#enabled = !!value;
          value && this.fetch().catch(exc => console.error(exc.stack));
        }

        #last;

        get #current() {
          const {
            current: language
          } = _core.languages;
          if (this.#texts.has(language)) return this.#texts.get(language);
          const texts = new _texts.Texts(this.#bundle, {
            language
          });
          this.#texts.set(language, texts);
          return texts;
        }

        get loading() {
          return this.#current.loading;
        }

        get loaded() {
          return this.#current.loaded;
        }
        /*
        @deprecated
        old versions
         */


        get ready() {
          !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
          return this.loaded;
        }

        get value() {
          return this.#current.value;
        }
        /**
         * Current texts constructor
         *
         * @param {string} bundle
         */


        constructor(bundle) {
          super();
          this.#bundle = bundle;

          _core.languages.on('change', this.#change);

          this.#current.on('change', this.#triggerChange);
          this.#last = this.#current;
        }

        #triggerChange = () => {
          this.trigger('change');
        };
        #change = () => {
          this.#last.off('change', this.#triggerChange);
          this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
          this.#current.on('change', this.#triggerChange);
          this.#last = this.#current;
          this.#triggerChange();
        };

        async fetch() {
          await _core.languages.ready;
          await this.#current.fetch();
        }
        /**
         * @deprecated Deprecated method. Use .fetch instead
         * @return {Promise<void>}
         */


        async load() {
          await this.#current.fetch();
        }

        destroy() {
          this.#texts.forEach(texts => texts.destroy());

          _core.languages.off('change', this.#change);
        }

        toJSON() {
          return {};
        }

      }

      exports.CurrentTexts = CurrentTexts;
    }
  });
  /***********************
  INTERNAL MODULE: ./texts
  ***********************/

  ims.set('./texts', {
    hash: 913420271,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Texts = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _bundle = require("@beyond-js/kernel/bundle");
      /*bundle*/


      class Texts extends _core.Events {
        /**
         * The module resource
         * @type {string}
         * @private
         */
        #module;

        get module() {
          return this.#module;
        }
        /**
         * The bundle name. Ex: 'txt'
         * @type {string}
         * @private
         */


        #bundle;

        get bundle() {
          return this.#bundle;
        }
        /**
         * The transversal bundle name. Ex: 'txt-menu'
         * @type {string}
         * @private
         */


        #transversal;

        get transversal() {
          return this.#transversal;
        }

        #multilanguage;

        get multilanguage() {
          return this.#multilanguage;
        }

        #language;

        get language() {
          return this.#language;
        } // The bundle package


        #pkg;
        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #loading;

        get loading() {
          return this.#loading;
        }

        #value;

        get value() {
          return this.#value;
        }

        get ready() {
          if (this.#loading) return false;
          this.fetch().catch(exc => console.log(exc.stack));
          return !this.#loading && this.#loaded;
        }
        /**
         * Module texts constructor
         *
         * @param {string} module The module resource
         * @param {{transversal: string, language: string}} specs
         */


        constructor(module, specs) {
          if (!module) throw new Error('Invalid parameters');
          super();
          this.#module = module;
          specs = specs ? specs : {};
          this.#language = specs.language;
          this.#multilanguage = !!specs.language;
          this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : 'txt' : void 0;
          this.#transversal = specs.transversal;
        } // Updated the value of the texts from the exported texts of the bundle package
        // Used by HMR when packaged has been updated


        #update = () => {
          this.#value = this.#pkg.exports.values.txt;
          this.trigger('change');
        };

        async fetch() {
          if (this.#loading || this.#loaded) return;
          this.#loading = true;
          this.trigger('change'); // The bundle id and bundle name

          const bid = this.#module + '.' + (this.#transversal ? this.#transversal : this.#bundle);
          let resource = this.#transversal ? `${globalThis.__app_package}/${this.#transversal}` : bid;
          resource = resource + (this.#language ? `.${this.#language}` : '');
          await bimport(resource);

          const bundle = _bundle.instances.get(bid);

          const pkg = this.#pkg = bundle.package(this.#language);
          pkg.hmr.on('change', this.#update);
          this.#value = pkg.exports.values.txt;
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }
        /**
         * @deprecated Deprecated method. Use .fetch instead
         * @return {Promise<void>}
         */


        async load() {
          await this.fetch();
        }

        destroy() {
          this.#pkg?.hmr.off('change', this.#update);
        }

        toJSON() {
          return {};
        }

      }

      exports.Texts = Texts;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./current",
    "from": "CurrentTexts",
    "name": "CurrentTexts"
  }, {
    "im": "./texts",
    "from": "Texts",
    "name": "Texts"
  }];
  let CurrentTexts, Texts; // Module exports

  _exports.Texts = Texts;
  _exports.CurrentTexts = CurrentTexts;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'CurrentTexts') && (_exports.CurrentTexts = CurrentTexts = require ? require('./current').CurrentTexts : value);
    (require || prop === 'Texts') && (_exports.Texts = Texts = require ? require('./texts').Texts : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQyxRQUFRLEdBQUdBLFFBQVEsSUFBSSxLQUFLLFNBQUwsR0FBaUIsSUFBSSxLQUFLLFNBQVMsRUFBbkMsR0FBd0MsRUFBNUMsQ0FBbkJBO1VBRUEsTUFBTUcsT0FBTyxDQUFDSCxRQUFELENBQWI7O1VBQ0EsTUFBTXRDLE1BQU0sR0FBRzBDLGtCQUFRN0IsR0FBUjZCLENBQVlMLEdBQVpLLENBQWY7O1VBQ0EsTUFBTUMsR0FBRyxHQUFZLEtBQUssSUFBTCxHQUFZM0MsTUFBTSxDQUFDNEMsT0FBUDVDLENBQWUsS0FBSyxTQUFwQkEsQ0FBakM7VUFFQTJDLEdBQUcsQ0FBQ0UsR0FBSkYsQ0FBUXRCLEVBQVJzQixDQUFXLFFBQVhBLEVBQXFCLEtBQUssT0FBMUJBO1VBQ0EsS0FBSyxNQUFMLEdBQWNBLEdBQUcsQ0FBQ1QsT0FBSlMsQ0FBWVIsTUFBWlEsQ0FBbUJQLEdBQWpDO1VBRUEsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO1VBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtVQUNBLEtBQUtkLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7UUFFRDs7Ozs7O1FBSVUsTUFBSkcsSUFBSTtVQUNOLE1BQU0sS0FBS3RCLEtBQUwsRUFBTjtRQUNIOztRQUVEdUIsT0FBTztVQUNILEtBQUssSUFBTCxFQUFXbUIsR0FBWCxDQUFldEIsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLE9BQWxDO1FBQ0g7O1FBRURLLE1BQU07VUFDRixPQUFPLEVBQVA7UUFDSDs7TUFoSXVDIiwibmFtZXMiOlsiQ3VycmVudFRleHRzIiwiRXZlbnRzIiwiTWFwIiwiYnVuZGxlIiwiZW5hYmxlZCIsInZhbHVlIiwiZmV0Y2giLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiY3VycmVudCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaGFzIiwiZ2V0IiwidGV4dHMiLCJUZXh0cyIsInNldCIsImxvYWRpbmciLCJsb2FkZWQiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyIiwib2ZmIiwibG9nIiwibG9hZCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwidG9KU09OIiwibW9kdWxlIiwidHJhbnN2ZXJzYWwiLCJtdWx0aWxhbmd1YWdlIiwic3BlY3MiLCJFcnJvciIsImV4cG9ydHMiLCJ2YWx1ZXMiLCJ0eHQiLCJiaWQiLCJyZXNvdXJjZSIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsImJ1bmRsZXMiLCJwa2ciLCJwYWNrYWdlIiwiaG1yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjdXJyZW50LnRzIiwidGV4dHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==