System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "@beyond-js/react-widgets@18.20.1/base", "react@18.2.0", "@beyond/docs@1/examples-sm-actions"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_2 = _beyondJsKernel010Styles;
    }, function (_beyondJsReactWidgets18201Base) {
      dependency_3 = _beyondJsReactWidgets18201Base;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondDocs1ExamplesSmActions) {
      dependency_5 = _beyondDocs1ExamplesSmActions;
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
          "vspecifier": "@beyond/docs@1/examples/sm/counter-react"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4], ['@beyond/docs/examples-sm-actions', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "counter-react",
        "vspecifier": "@beyond/docs@1/examples/sm/counter-react"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/examples/sm/counter-react');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3716324465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _widget = require("./views/widget");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _widget.Widget;
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/widget
      ******************************/

      ims.set('./views/widget', {
        hash: 2937330524,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var React = require("react");
          var _examplesSmActions = require("@beyond/docs/examples-sm-actions");
          /*bundle*/
          function Widget() {
            const [count, setCount] = React.useState(0);
            const add = () => {
              setCount(count + 1);
              (0, _examplesSmActions.updateCount)();
            };
            return React.createElement("div", {
              className: "list"
            }, React.createElement("div", {
              className: "item",
              onClick: add
            }, React.createElement("h3", null, "React counter"), React.createElement("span", null, "clicks here: ", count)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/widget",
        "from": "Widget",
        "name": "Widget"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./views/widget').Widget : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUdBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUMxQyxJQUFJQyxNQUFNO2NBQ04sT0FBT0EsY0FBTTtZQUNqQjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQ7VUFDQTtVQUVPO1VBQVUsU0FDUkQsTUFBTTtZQUNYLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU1DLEdBQUcsR0FBRyxNQUFLO2NBQ2JILFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztjQUNuQixrQ0FBVyxHQUFFO1lBQ2pCLENBQUM7WUFFRCxPQUNJRTtjQUFLRyxTQUFTLEVBQUM7WUFBTSxHQUNqQkg7Y0FBS0csU0FBUyxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFRjtZQUFHLEdBQzlCRixnREFBc0IsRUFDdEJBLG1EQUFvQkYsS0FBSyxDQUFRLENBQy9CLENBQ0o7VUFFZCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJleHBvcnRzIiwiY291bnQiLCJzZXRDb3VudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhZGQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZXhhbXBsZXMvY291bnRlci9jb21wb25lbnRzL3JlYWN0L3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvY29tcG9uZW50cy9yZWFjdC93aWRnZXQvdHMvdmlld3Mvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19