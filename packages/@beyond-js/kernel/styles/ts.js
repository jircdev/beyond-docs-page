define(["exports", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/core/ts"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.V1Styles = _exports.DependenciesStyles = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/kernel/styles/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*************************************
  INTERNAL MODULE: ./dependencies-styles
  *************************************/

  ims.set('./dependencies-styles', {
    hash: 1128970937,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DependenciesStyles = void 0;

      var _ts = require("@beyond-js/kernel/bundle/ts");

      var _ts2 = require("@beyond-js/kernel/core/ts");

      var _registry = require("./registry");
      /*bundle*/


      class DependenciesStyles extends _ts2.Events {
        #bundle;
        #elements;

        get elements() {
          return this.#elements;
        }

        constructor(bundle) {
          super();
          this.#bundle = bundle;

          const change = () => this.trigger('change');

          this.#elements = new Set();

          const recursive = id => {
            if (id !== this.#bundle && id.split('/').pop() === 'widget') return;

            const bundle = _ts.instances.get(id); // Check if the bundle has styles


            const styles = _registry.styles.get(id);

            if (styles && styles.engine !== 'legacy') {
              this.#elements.add(styles);
              styles.on('change', change);
            }

            const {
              dependencies
            } = bundle.package();
            dependencies.forEach(dependency => recursive(dependency));
          };

          recursive(this.#bundle);
        }

      }

      exports.DependenciesStyles = DependenciesStyles;
    }
  });
  /************************
  INTERNAL MODULE: ./legacy
  ************************/

  ims.set('./legacy', {
    hash: 4158747787,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      class _default {
        get engine() {
          return 'legacy';
        }

        #bundle;
        #value;

        get value() {
          return this.#value;
        } // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)


        #appended = false;

        get appended() {
          return this.#appended;
        }

        constructor(bundle, value) {
          this.#bundle = bundle;

          const module = (() => {
            const module = bundle.split('/');
            module.pop();
            return module.join('/');
          })(); // Find and replace #host...


          const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
          this.#value = value.replace(regexp, (match, host, resource) => {
            if (host === 'module' || host === 'library') {
              return `${module}/${resource}`;
            } else if (host === 'application') {
              return `${_ts.beyond.baseDir}${resource}`;
            }

            console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
          });
        }
        /**
         * @deprecated Only required by legacy applications
         */


        appendToDOM(is) {
          if (this.#appended) {
            const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
            previous && document.removeChild(previous);
          }

          const css = document.createElement('style');
          css.appendChild(document.createTextNode(this.#value));
          is && css.setAttribute('is', is);
          document.getElementsByTagName('head')[0].appendChild(css);
          this.#appended = true;
        }

      }

      exports.default = _default;
    }
  });
  /**************************
  INTERNAL MODULE: ./registry
  **************************/

  ims.set('./registry', {
    hash: 2973103620,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.styles = void 0;

      var _legacy = require("./legacy");

      var _v = require("./v1");

      class Registry {
        #registry = new Map();

        register(bundle, value) {
          if (this.#registry.has(bundle)) return;
          const styles = value ? new _legacy.default(bundle, value) : new _v.V1Styles(bundle);
          this.#registry.set(bundle, styles);
          return styles;
        }

        has(bundle) {
          return this.#registry.has(bundle);
        }

        get(bundle) {
          return this.#registry.get(bundle);
        }

      }
      /*bundle*/


      const styles = new Registry(); // Just for legacy projects

      exports.styles = styles;
      globalThis.beyondLegacyStyles = styles;
    }
  });
  /********************
  INTERNAL MODULE: ./v1
  ********************/

  ims.set('./v1', {
    hash: 877273885,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.V1Styles = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class V1Styles extends _ts.Events {
        get engine() {
          return 'v1';
        }
        /**
         * The bundle id
         * @type {string}
         * @private
         */


        #bundle;

        get bundle() {
          return this.#bundle;
        }
        /**
         * The autoincremental HMR version
         * @type {number}
         * @private
         */


        #version = 0;

        get version() {
          return this.#version;
        }
        /**
         * The href without the version qs parameter
         * @type {string}
         * @private
         */


        #resource;

        get resource() {
          return this.#resource;
        }
        /**
         * The url of the stylesheet including the HMR version qs parameter
         *
         * @return {string}
         */


        get href() {
          const version = this.#version ? `?version=${this.#version}` : '';
          return `${this.#resource}${version}`;
        }

        constructor(bundle) {
          super();
          this.#bundle = bundle;
          const appPackage = `${_ts.beyond.application.package.id}/`;
          const id = bundle.startsWith(appPackage) ? bundle.slice(appPackage.length) : `packages/${bundle}`;
          const baseUrl = typeof window === 'object' ? _ts.beyond.baseUrl : '##_!baseUrl!_##';
          this.#resource = `${baseUrl}/${id}.css`;
        }
        /**
         * Called by HMR in development environment
         */


        change() {
          this.#version++;
          this.trigger('change');
        }

      }

      exports.V1Styles = V1Styles;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./dependencies-styles",
    "from": "DependenciesStyles",
    "name": "DependenciesStyles"
  }, {
    "im": "./registry",
    "from": "styles",
    "name": "styles"
  }, {
    "im": "./v1",
    "from": "V1Styles",
    "name": "V1Styles"
  }];
  let DependenciesStyles, styles, V1Styles; // Module exports

  _exports.V1Styles = V1Styles;
  _exports.styles = styles;
  _exports.DependenciesStyles = DependenciesStyles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DependenciesStyles') && (_exports.DependenciesStyles = DependenciesStyles = require ? require('./dependencies-styles').DependenciesStyles : value);
    (require || prop === 'styles') && (_exports.styles = styles = require ? require('./registry').styles : value);
    (require || prop === 'V1Styles') && (_exports.V1Styles = V1Styles = require ? require('./v1').V1Styles : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});