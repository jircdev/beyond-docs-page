System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/react-widgets@18.20.1/page", "react@18.2.0", "@beyond/docs@1/examples-sm-store"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, legacyStyles, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_2 = _beyondJsReactWidgets18201Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondDocs1ExamplesSmStore) {
      dependency_4 = _beyondDocs1ExamplesSmStore;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/examples/sm/counter"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/docs/examples-sm-store', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "examples-counter-page",
        "vspecifier": "@beyond/docs@1/examples/sm/counter",
        "is": "page",
        "route": "/examples/sm/counter",
        "layout": "main-layout"
      }]);

      /**********
      SCSS STYLES
      **********/
      legacyStyles = beyondLegacyStyles.register('@beyond/docs/examples/sm/counter', 'undefined.section{background:var(--gray-light);padding:2rem}undefined.section .items{display:grid;flex-grow:2;grid-template-columns:1fr 1fr 1fr}');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1073942782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _page2 = require("./views/page");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _page2.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/page
      ****************************/

      ims.set('./views/page', {
        hash: 445809471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _examplesSmStore = require("@beyond/docs/examples-sm-store");
          /*bundle*/
          function Page() {
            const [state, {
              selectorCount
            }] = _examplesSmStore.store.getStateAndSelectors();
            _examplesSmStore.store.useStateAndSelectorsReact([state.counter], [selectorCount]);
            return React.createElement("div", {
              className: "section"
            }, React.createElement("h2", null, "Click counter ", selectorCount.value), React.createElement("div", {
              className: "items"
            }, React.createElement("counter-react", null), React.createElement("counter-vue", null), React.createElement("counter-svelte", null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/page",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/page').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFFTztVQUFVLFNBQ1JELElBQUk7WUFDVCxNQUFNLENBQUNFLEtBQUssRUFBRTtjQUFDQztZQUFhLENBQUMsQ0FBQyxHQUFHQyxzQkFBSyxDQUFDQyxvQkFBb0IsRUFBRTtZQUM3REQsc0JBQUssQ0FBQ0UseUJBQXlCLENBQUMsQ0FBQ0osS0FBSyxDQUFDSyxPQUFPLENBQUMsRUFBRSxDQUFDSixhQUFhLENBQUMsQ0FBQztZQUVqRSxPQUNJSztjQUFLQyxTQUFTLEVBQUM7WUFBUyxHQUNwQkQsa0RBQW1CTCxhQUFhLENBQUNPLEtBQUssQ0FBTSxFQUM1Q0Y7Y0FBS0MsU0FBUyxFQUFDO1lBQU8sR0FDbEJELDBDQUFnQixFQUNoQkEsd0NBQWMsRUFDZEEsMkNBQWlCLENBQ2YsQ0FDSjtVQUVkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsInN0YXRlIiwic2VsZWN0b3JDb3VudCIsInN0b3JlIiwiZ2V0U3RhdGVBbmRTZWxlY3RvcnMiLCJ1c2VTdGF0ZUFuZFNlbGVjdG9yc1JlYWN0IiwiY291bnRlciIsIlJlYWN0IiwiY2xhc3NOYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL3BhZ2Uvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZXhhbXBsZXMvY291bnRlci9wYWdlL3dpZGdldC90cy92aWV3cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19