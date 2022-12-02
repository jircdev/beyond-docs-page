System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "@beyond-js/react-widgets@18.20.1/page", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/link", "@beyond/docs@1/preload"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_2 = _beyondJsKernel010Styles;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_3 = _beyondJsReactWidgets18201Page;
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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 631192819,
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVRCxJQUFJO1lBQ2hCLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFQyxLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDQyxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFDakQsSUFBSSxDQUFDSCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE9BQ0lJO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzFCRDtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDMUNELG9DQUNJQTtjQUFNQyxTQUFTLEVBQUM7WUFBYSxHQUFFSixLQUFLLENBQUNLLFFBQVEsQ0FBUSxFQUNyREYsZ0NBQUtILEtBQUssQ0FBQ00sS0FBSyxDQUFNLEVBQ3RCSCwrQkFBSUgsS0FBSyxDQUFDTyxXQUFXLENBQUssRUFDMUJKLCtCQUFJSCxLQUFLLENBQUNRLEdBQUcsQ0FBQ0MsRUFBRSxPQUFFTixvQkFBQ08sVUFBSTtjQUFDQyxJQUFJLEVBQUMsR0FBRztjQUFDUCxTQUFTLEVBQUM7WUFBYyxHQUFFSixLQUFLLENBQUNRLEdBQUcsQ0FBQ0ksRUFBRSxDQUFRLE9BQUVaLEtBQUssQ0FBQ1EsR0FBRyxDQUFDSyxFQUFFLENBQUssQ0FDN0YsRUFDVFY7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FFekJELHNDQUFjLEVBQ2RBLG9CQUFDVyxzQkFBYSxPQUFFLEVBQ2hCWCxzQ0FBYyxDQUNaLENBQ0osQ0FFSjtVQUVkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsInJlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJSZWFjdCIsImNsYXNzTmFtZSIsInByZXRpdGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVuZCIsInMxIiwiTGluayIsImhyZWYiLCJsMSIsInMyIiwiQmV5b25kSXNvdHlwZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21pc3Npbmcvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWlzc2luZy93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=