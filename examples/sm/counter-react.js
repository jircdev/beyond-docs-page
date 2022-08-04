define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/base", "react@17.0.2", "@beyond/docs/examples-sm-actions"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter-react",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-actions"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "counter-react",
    "id": "@beyond/docs/examples/sm/counter-react"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/examples/sm/counter-react');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 735102544,
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
  let Controller, Widget; // Module exports

  _exports.Widget = Widget;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Widget') && (_exports.Widget = Widget = require ? require('./views/widget').Widget : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBOztNQUNBO01BRU87OztNQUFVLE1BQ1hBLFVBRFcsU0FDUUMsMkJBRFIsQ0FDNkI7UUFDaEMsSUFBTkMsTUFBTTtVQUNOLE9BQU9BLGNBQVA7UUFDSDs7TUFIeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKOUM7O01BQ0E7TUFFTzs7O01BQVUsU0FDUkEsTUFEUSxHQUNGO1FBQ1gsTUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLEtBQUssQ0FBQ0MsUUFBTkQsQ0FBZSxDQUFmQSxDQUExQjs7UUFDQSxNQUFNRSxHQUFHLEdBQUcsTUFBSztVQUNiSCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVJDO1VBQ0E7UUFGSjs7UUFLQSxPQUNJQztVQUFLRyxTQUFTLEVBQUM7UUFBZkgsR0FDSUE7VUFBS0csU0FBUyxFQUFDLE1BQWZIO1VBQXNCSSxPQUFPLEVBQUVGO1FBQS9CRixHQUNJQSxnREFESkEsRUFFSUEsbURBQW9CRixLQUFwQkUsQ0FGSkEsQ0FESkEsQ0FESjtNQVFIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsImNvdW50Iiwic2V0Q291bnQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRkIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvY29tcG9uZW50cy9yZWFjdC93aWRnZXQvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL2NvbXBvbmVudHMvcmVhY3Qvd2lkZ2V0L3RzL3ZpZXdzL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==