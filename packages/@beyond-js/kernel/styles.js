define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.V1Styles = _exports.DependenciesStyles = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/styles",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************************
  INTERNAL MODULE: ./dependencies-styles
  *************************************/

  ims.set('./dependencies-styles', {
    hash: 2842068258,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DependenciesStyles = void 0;

      var _bundle = require("@beyond-js/kernel/bundle");

      var _core = require("@beyond-js/kernel/core");

      var _registry = require("./registry");
      /*bundle*/


      class DependenciesStyles extends _core.Events {
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
            if (!_bundle.instances.has(id)) {
              console.log(`Bundle id "${id}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
              return;
            }

            const bundle = _bundle.instances.get(id);

            if (id !== this.#bundle && bundle.name === 'widget') return; // Check if the bundle has styles

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
    hash: 540035090,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = require("@beyond-js/kernel/core");

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
              return `${_core.beyond.baseDir}${resource}`;
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
    hash: 3449853183,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.V1Styles = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _bundle = require("@beyond-js/kernel/bundle");
      /*bundle*/


      class V1Styles extends _core.Events {
        get engine() {
          return 'v1';
        }
        /**
         * The bundle object
         *
         * @type {Bundle}
         * @private
         */


        #bundle;

        get bundle() {
          return this.#bundle;
        }
        /**
         * The autoincremental HMR version
         *
         * @type {number}
         * @private
         */


        #version = 0;

        get version() {
          return this.#version;
        }
        /**
         * The href without the version qs parameter
         *
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

        constructor(resource) {
          super();
          this.#bundle = _bundle.instances.get(resource);

          this.#resource = (() => {
            if (typeof process === 'object') {
              const split = resource.split('/');
              const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
              const subpath = split.join('/');
              return `##_!${pkg}!_##${subpath}.css`;
            }

            let {
              uri
            } = this.#bundle;
            uri = uri.slice(0, uri.length - 3); // Remove the .js extension

            return `${uri}.css`;
          })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHTyxRQUFRLENBQUNQLEtBQVRPLENBQWUsR0FBZkEsQ0FBZDtjQUNBLE1BQU0yQixHQUFHLEdBQUdsQyxLQUFLLENBQUMsQ0FBRCxDQUFMQSxDQUFTbUMsVUFBVG5DLENBQW9CLEdBQXBCQSxJQUEyQixHQUFHQSxLQUFLLENBQUNvQyxLQUFOcEMsRUFBYSxJQUFJQSxLQUFLLENBQUNvQyxLQUFOcEMsRUFBYSxFQUE1REEsR0FBaUVBLEtBQUssQ0FBQ29DLEtBQU5wQyxFQUE3RTtjQUNBLE1BQU1xQyxPQUFPLEdBQUdyQyxLQUFLLENBQUNFLElBQU5GLENBQVcsR0FBWEEsQ0FBaEI7Y0FDQSxPQUFPLE9BQU9rQyxHQUFHLE9BQU9HLE9BQU8sTUFBL0I7WUFDSDs7WUFFRCxJQUFJO2NBQUNDO1lBQUQsSUFBUSxLQUFLLE9BQWpCO1lBQ0FBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxLQUFKRCxDQUFVLENBQVZBLEVBQWFBLEdBQUcsQ0FBQ0UsTUFBSkYsR0FBYSxDQUExQkEsQ0FBTkEsQ0FUbUIsQ0FTaUI7O1lBQ3BDLE9BQU8sR0FBR0EsR0FBRyxNQUFiO1VBVmEsSUFBakI7UUFZSDtRQUVEOzs7OztRQUdBN0QsTUFBTTtVQUNGLEtBQUssUUFBTDtVQUNBLEtBQUtDLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7O01BeEV3QiIsIm5hbWVzIjpbIkRlcGVuZGVuY2llc1N0eWxlcyIsIkV2ZW50cyIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJidW5kbGUiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwiaWQiLCJidW5kbGVzIiwiaGFzIiwiY29uc29sZSIsImxvZyIsImdldCIsIm5hbWUiLCJzdHlsZXMiLCJyZWdpc3RyeSIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwidmFsdWUiLCJhcHBlbmRlZCIsIm1vZHVsZSIsInNwbGl0IiwicG9wIiwiam9pbiIsInJlZ2V4cCIsInJlcGxhY2UiLCJtYXRjaCIsImhvc3QiLCJyZXNvdXJjZSIsImJleW9uZCIsImJhc2VEaXIiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsIkxlZ2FjeVN0eWxlcyIsIlYxU3R5bGVzIiwic2V0IiwiZ2xvYmFsVGhpcyIsImJleW9uZExlZ2FjeVN0eWxlcyIsInZlcnNpb24iLCJocmVmIiwicHJvY2VzcyIsInBrZyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJ1cmkiLCJzbGljZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsImxlZ2FjeS50cyIsInJlZ2lzdHJ5LnRzIiwidjEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=