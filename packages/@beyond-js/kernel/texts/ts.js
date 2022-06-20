define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Texts = _exports.CurrentTexts = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/kernel/texts/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./current
  *************************/

  ims.set('./current', {
    hash: 331090471,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CurrentTexts = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _texts = require("./texts");
      /*bundle*/

      /**
       * The texts loaded by the current language (not available in SSR environment)
       */


      class CurrentTexts extends _ts.Events {
        #texts = new Map();
        #module;

        get module() {
          return this.#module;
        }

        get bundle() {
          return 'txt';
        }

        #multilanguage;

        get multilanguage() {
          return this.#multilanguage;
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
          } = _ts.beyond.languages;
          if (this.#texts.has(language)) return this.#texts.get(language);
          const texts = new _texts.Texts(this.#module, 'txt', language);
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
         * Module texts constructor
         *
         * @param {string} module The module that holds the texts bundle
         * @param {boolean} multilanguage
         */


        constructor(module, multilanguage) {
          super();
          this.#module = module;
          this.#multilanguage = multilanguage;

          _ts.beyond.languages.on('change', this.#change);

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

          _ts.beyond.languages.off('change', this.#change);
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
    hash: 116824942,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Texts = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _ts2 = require("@beyond-js/kernel/bundle/ts");
      /*bundle*/


      class Texts extends _ts.Events {
        #module;

        get module() {
          return this.#module;
        }

        #bundle;

        get bundle() {
          return this.#bundle;
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
          this.load().catch(exc => console.log(exc.stack));
          return !this.#loading && this.#loaded;
        }
        /**
         * Module texts constructor
         *
         * @param {Module} module The module that holds the texts bundle
         * @param {string} bundle The bundle name
         * @param {string=} language
         */


        constructor(module, bundle, language) {
          super();
          this.#module = module;
          this.#bundle = bundle;
          this.#language = language;
        } // Updated the value of the texts from the exported texts of the bundle package
        // Used by HMR when packaged has been updated


        #update = () => {
          this.#value = this.#pkg.exports.values.texts;
          this.trigger('change');
        };

        async fetch() {
          if (this.#loading || this.#loaded) return;
          this.#loading = true;
          this.trigger('change');
          const id = `${this.#module}/${this.#bundle}`;

          const resource = (() => {
            const bundle = this.#bundle;
            const transversal = bundle !== 'txt';
            let pathname = transversal ? `${_ts.beyond.application.package.id}/${this.#bundle}` : id;
            pathname = pathname + (this.#language ? `.${this.#language}` : '');
            return {
              bundle,
              pathname
            };
          })();

          await _ts.beyond.import(resource.pathname);

          const bundle = _ts2.instances.get(id);

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