System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, AppManager, __beyond_pkg, hmr;
  _export("AppManager", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Core) {
      dependency_1 = _beyondJsKernel017Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/manager"
        },
        "type": "code",
        "name": "manager"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1073145704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = exports.AppManager = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Manager extends _core.Events {
            /**
             * The menu is closed by default.
             * @private
             */
            #menuOpened = false;
            get menuOpened() {
              return this.#menuOpened;
            }
            set menuOpened(value) {
              if (this.#menuOpened === value) return;
              this.#menuOpened = value;
              this.trigger('change');
            }
          }
          exports.Manager = Manager;
          /*bundle*/
          const AppManager = new Manager();
          exports.AppManager = AppManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AppManager",
        "name": "AppManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppManager') && _export("AppManager", AppManager = require ? require('./control').AppManager : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUVNLE1BQU9BLE9BQVEsU0FBUUMsWUFBTTtZQUUvQjs7OztZQUlBLFdBQVcsR0FBRyxLQUFLO1lBQ25CLElBQUlDLFVBQVU7Y0FDVixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQzNCO1lBRUEsSUFBSUEsVUFBVSxDQUFDQyxLQUFjO2NBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBS0EsS0FBSyxFQUFFO2NBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUdBLEtBQUs7Y0FDeEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFCOztVQUVIQztVQUVNO1VBQVcsTUFBTUMsVUFBVSxHQUFHLElBQUlOLE9BQU8sRUFBRTtVQUFDSyIsIm5hbWVzIjpbIk1hbmFnZXIiLCJFdmVudHMiLCJtZW51T3BlbmVkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZXhwb3J0cyIsIkFwcE1hbmFnZXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29udHJvbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==