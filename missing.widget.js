System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/link", "@beyond/docs@1/preload"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_3 = _beyondJsReactWidgets18211Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondDocs1Store) {
      dependency_5 = _beyondDocs1Store;
    }, function (_beyondUi100Link) {
      dependency_6 = _beyondUi100Link;
    }, function (_beyondDocs1Preload) {
      dependency_7 = _beyondDocs1Preload;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@bgroup/ui", "0.0.29"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/missing",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['react', dependency_4], ['@beyond/docs/store', dependency_5], ['@beyond/ui/link', dependency_6], ['@beyond/docs/preload', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-docs-missing",
        "vspecifier": "@beyond/docs@1/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "home-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/missing.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2988556055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2590127334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _store = require("@beyond/docs/store");
          var _beyond_context = require("beyond_context");
          var _link = require("@beyond/ui/link");
          var _preload = require("@beyond/docs/preload");
          /*bundle*/
          function View() {
            const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.specifier);
            if (!ready) return null;
            return React.createElement("div", {
              className: "container-404"
            }, React.createElement("div", {
              className: "content-container two-columns"
            }, React.createElement("header", null, React.createElement("span", {
              className: "pretitle-h1"
            }, texts.pretitle), React.createElement("h1", null, texts.title), React.createElement("p", null, texts.description), React.createElement("p", null, texts.end.s1, " ", React.createElement(_link.Link, {
              href: "/",
              className: "link primary"
            }, texts.end.l1), " ", texts.end.s2)), React.createElement("div", {
              className: "isotype-404 "
            }, React.createElement("span", null, "4"), React.createElement(_preload.BeyondIsotype, null), React.createElement("span", null, "4"))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQVVELElBQUk7WUFDM0IsTUFBTSxDQUFDRSxLQUFLLEVBQUVDLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUNDLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUNILEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsT0FDSUk7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDMUJEO2NBQUtDLFNBQVMsRUFBQztZQUErQixHQUMxQ0Qsb0NBQ0lBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQUVKLEtBQUssQ0FBQ0ssUUFBUSxDQUFRLEVBQ3JERixnQ0FBS0gsS0FBSyxDQUFDTSxLQUFLLENBQU0sRUFDdEJILCtCQUFJSCxLQUFLLENBQUNPLFdBQVcsQ0FBSyxFQUMxQkosK0JBQ0tILEtBQUssQ0FBQ1EsR0FBRyxDQUFDQyxFQUFFLEVBQUUsR0FBRyxFQUNsQk4sb0JBQUNPLFVBQUk7Y0FBQ0MsSUFBSSxFQUFDLEdBQUc7Y0FBQ1AsU0FBUyxFQUFDO1lBQWMsR0FDbENKLEtBQUssQ0FBQ1EsR0FBRyxDQUFDSSxFQUFFLENBQ1YsRUFBQyxHQUFHLEVBQ1ZaLEtBQUssQ0FBQ1EsR0FBRyxDQUFDSyxFQUFFLENBQ2IsQ0FDQyxFQUNUVjtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUN6QkQsc0NBQWMsRUFDZEEsb0JBQUNXLHNCQUFhLE9BQUcsRUFDakJYLHNDQUFjLENBQ1osQ0FDSixDQUNKO1VBRWQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwicmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlJlYWN0IiwiY2xhc3NOYW1lIiwicHJldGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW5kIiwiczEiLCJMaW5rIiwiaHJlZiIsImwxIiwiczIiLCJCZXlvbmRJc290eXBlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==