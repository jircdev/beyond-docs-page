System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "@beyond-js/react-widgets@18.21.1/base", "react@18.2.0", "@beyond/docs@1/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_3 = _beyondJsReactWidgets18211Base;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondDocs1Spinner) {
      dependency_5 = _beyondDocs1Spinner;
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
          "vspecifier": "@beyond/docs@1/layout/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4], ['@beyond/docs/spinner', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-layout",
        "vspecifier": "@beyond/docs@1/layout/home",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/layout/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1742863250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _layout = require("./layout");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _layout.default;
            }
          }
          exports.Controller = Controller;
        }
      });

      /************************
      INTERNAL MODULE: ./layout
      ************************/

      ims.set('./layout', {
        hash: 570793535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = _default;
          var React = require("react");
          function _default() {
            const ref = React.useRef(null);
            // React.useEffect(() => {
            // 	const target = ref.current;
            // 	globalThis.setTimeout(() => {
            // 		target.classList.add('hide');
            // 		target.remove();
            // 	}, 1500);
            // }, []);
            return React.createElement("div", {
              className: "main-widget"
            }, React.createElement("div", {
              className: "home-page"
            }, React.createElement("docs-header-menu", null), React.createElement("menu-layout", {
              home: "true"
            }), React.createElement("main", null, React.createElement("beyond-layout-children", null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFHQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywyQkFBcUI7WUFDMUMsSUFBSUMsTUFBTTtjQUNOLE9BQU9DLGVBQU07WUFDakI7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZEO1VBYWM7WUFDYixNQUFNQyxHQUFHLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBLE9BQ0NEO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBSTNCRjtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUN6QkYsNkNBQW9CLEVBRXBCQTtjQUFhRyxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQzNCSCxrQ0FDQ0EsbURBQTBCLENBQ3BCLENBQ0YsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJyZWYiLCJSZWFjdCIsInVzZVJlZiIsImNsYXNzTmFtZSIsImhvbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=