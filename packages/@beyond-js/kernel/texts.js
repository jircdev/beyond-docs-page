define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Texts = _exports.CurrentTexts = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/texts",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./current
  *************************/

  ims.set('./current', {
    hash: 1661764813,
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
          } = _core.beyond.languages;
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
          !this.loaded && !this.loading && this.load().catch(exc => console.error(exc.stack));
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

          _core.beyond.languages.on('change', this.#change);

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

          _core.beyond.languages.off('change', this.#change);
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
    hash: 2487712204,
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
          let resource = this.#transversal ? `${_core.beyond.application.package.id}/${this.#transversal}` : bid;
          resource = resource + (this.#language ? `.${this.#language}` : '');
          await _core.beyond.import(resource);

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