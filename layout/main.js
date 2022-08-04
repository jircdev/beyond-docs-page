define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/base", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Layout = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/main",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "main-layout",
    "id": "@beyond/docs/layout/main",
    "is": "layout"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/layout/main');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 339867026,
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
          return _layout.Layout;
        }

        async fetch() {}

      }

      exports.Controller = Controller;
    }
  });
  /************************
  INTERNAL MODULE: ./layout
  ************************/

  ims.set('./layout', {
    hash: 3480775152,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = Layout;

      var React = require("react");
      /*bundle*/


      function Layout() {
        return React.createElement("div", {
          className: "main-widget"
        }, React.createElement("docs-header-menu", null), React.createElement("div", {
          className: "docs-page container"
        }, React.createElement("menu-layout", null), React.createElement("main", null, React.createElement("beyond-layout-children", null))));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./layout",
    "from": "Layout",
    "name": "Layout"
  }];
  let Controller, Layout; // Module exports

  _exports.Layout = Layout;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Layout') && (_exports.Layout = Layout = require ? require('./layout').Layout : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQSxVQURXLFNBQ1FDLDJCQURSLENBQzZCO1FBRWhDLElBQU5DLE1BQU07VUFDTixPQUFPQyxjQUFQO1FBQ0g7O1FBRVUsTUFBTEMsS0FBSyxJQUNWOztNQVB5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0o5QztNQVlROzs7TUFBVSxTQUFXRCxNQUFYLEdBQWlCO1FBQy9CLE9BRUlFO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSw2Q0FESkEsRUFFSUE7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0lBLHdDQURKQSxFQUVJQSxrQ0FDSUEsbURBREpBLENBRkpBLENBRkpBLENBRko7TUFhSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJmZXRjaCIsIlJlYWN0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvbGF5b3V0cy9kb2NzL21haW4vdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9sYXlvdXRzL2RvY3MvbWFpbi90cy9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=