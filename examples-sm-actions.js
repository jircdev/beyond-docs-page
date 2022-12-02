System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond/docs@1/examples-sm-store"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, updateCount, __beyond_pkg, hmr;
  _export("updateCount", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondDocs1ExamplesSmStore) {
      dependency_1 = _beyondDocs1ExamplesSmStore;
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
          "vspecifier": "@beyond/docs@1/examples-sm-actions"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond/docs/examples-sm-store', dependency_1]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 3887912139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.updateCount = updateCount;
          var _examplesSmStore = require("@beyond/docs/examples-sm-store");
          /*bundle*/
          function updateCount() {
            const {
              counter
            } = _examplesSmStore.store.getState();
            ++counter.count;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./actions",
        "from": "updateCount",
        "name": "updateCount"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'updateCount') && _export("updateCount", updateCount = require ? require('./actions').updateCount : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVSxTQUNSQSxXQUFXO1lBQ2hCLE1BQU07Y0FBQ0M7WUFBTyxDQUFDLEdBQUdDLHNCQUFLLENBQUNDLFFBQVEsRUFBRTtZQUNsQyxFQUFFRixPQUFPLENBQUNHLEtBQUs7VUFDbkIiLCJuYW1lcyI6WyJ1cGRhdGVDb3VudCIsImNvdW50ZXIiLCJzdG9yZSIsImdldFN0YXRlIiwiY291bnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL3N0b3JlL2FjdGlvbnMvdHMvYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==