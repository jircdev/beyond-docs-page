System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/base", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/link", "@beyond/docs@1/preload"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_2 = _beyondJsReactWidgets18211Base;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondDocs1Store) {
      dependency_4 = _beyondDocs1Store;
    }, function (_beyondUi100Link) {
      dependency_5 = _beyondUi100Link;
    }, function (_beyondDocs1Preload) {
      dependency_6 = _beyondDocs1Preload;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/under-construction",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['react', dependency_3], ['@beyond/docs/store', dependency_4], ['@beyond/ui/link', dependency_5], ['@beyond/docs/preload', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-under-construction",
        "vspecifier": "@beyond/docs@1/under-construction.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/under-construction.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 613038294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
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
        hash: 1422760779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _store = require("@beyond/docs/store");
          var _beyond_context = require("beyond_context");
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
            }, texts.pretitle), React.createElement("h1", null, texts.title), React.createElement("p", null, texts.description)), React.createElement("div", {
              className: "isotype-404 "
            }, React.createElement(_preload.BeyondIsotype, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUMxQyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsV0FBSTtZQUNmOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRDtVQUNBO1VBQ0E7VUFFQTtVQUVPO1VBQVUsU0FBVUQsSUFBSTtZQUMzQixNQUFNLENBQUNFLEtBQUssRUFBRUMsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ0Msc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ2pELElBQUksQ0FBQ0gsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixPQUNJSTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUMxQkQ7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzFDRCxvQ0FDSUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWEsR0FBRUosS0FBSyxDQUFDSyxRQUFRLENBQVEsRUFDckRGLGdDQUFLSCxLQUFLLENBQUNNLEtBQUssQ0FBTSxFQUN0QkgsK0JBQUlILEtBQUssQ0FBQ08sV0FBVyxDQUFLLENBQ3JCLEVBQ1RKO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQ3pCRCxvQkFBQ0ssc0JBQWEsT0FBRyxDQUNmLENBQ0osQ0FDSjtVQUVkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwicmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlJlYWN0IiwiY2xhc3NOYW1lIiwicHJldGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQmV5b25kSXNvdHlwZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=