System.register(["@beyond-js/kernel@0.1.0/bundle", "universal-model-ng-react-svelte-vue@0.3.3"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, store, __beyond_pkg, hmr;
  _export("store", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_universalModelNgReactSvelteVue2) {
      dependency_1 = _universalModelNgReactSvelteVue2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/examples-sm-store"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['universal-model-ng-react-svelte-vue', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./state
      ***********************/
      ims.set('./state', {
        hash: 2535204796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.initialCountState = void 0;
          const initialCountState = {
            count: 0
          };
          exports.initialCountState = initialCountState;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 697439025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = void 0;
          var _state = require("./state");
          var _universalModelNgReactSvelteVue = require("universal-model-ng-react-svelte-vue");
          const initialState = {
            counter: (0, _universalModelNgReactSvelteVue.createSubState)(_state.initialCountState)
          };
          const createCountSelectors = () => ({
            selectorCount: state => state.counter.count
          });
          const counterStateSelectors = createCountSelectors();
          /*bundle*/
          const store = (0, _universalModelNgReactSvelteVue.createStore)(initialState, counterStateSelectors);
          exports.store = store;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store",
        "from": "store",
        "name": "store"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'store') && _export("store", store = require ? require('./store').store : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGlCQUFpQixHQUFHO1lBQzdCQyxLQUFLLEVBQUU7V0FDVjtVQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNGRjtVQUNBO1VBRUEsTUFBTUMsWUFBWSxHQUFHO1lBQ2pCQyxPQUFPLEVBQUUsa0RBQWMsRUFBQ0osd0JBQWlCO1dBQzVDO1VBR0QsTUFBTUssb0JBQW9CLEdBQUcsT0FBd0I7WUFDakRDLGFBQWEsRUFBR0MsS0FBWSxJQUFLQSxLQUFLLENBQUNILE9BQU8sQ0FBQ0g7V0FDbEQsQ0FBQztVQUNGLE1BQU1PLHFCQUFxQixHQUFHSCxvQkFBb0IsRUFBUztVQUVwRDtVQUNQLE1BQU1JLEtBQUssR0FBRywrQ0FBVyxFQUFzQ04sWUFBWSxFQUFFSyxxQkFBcUIsQ0FBQztVQUFDTiIsIm5hbWVzIjpbImluaXRpYWxDb3VudFN0YXRlIiwiY291bnQiLCJleHBvcnRzIiwiaW5pdGlhbFN0YXRlIiwiY291bnRlciIsImNyZWF0ZUNvdW50U2VsZWN0b3JzIiwic2VsZWN0b3JDb3VudCIsInN0YXRlIiwiY291bnRlclN0YXRlU2VsZWN0b3JzIiwic3RvcmUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL3N0b3JlL3RzL3N0YXRlLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvc3RvcmUvdHMvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==