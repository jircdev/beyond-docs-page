define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/base", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/home",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "home-layout",
    "id": "@beyond/docs/layout/home",
    "is": "layout"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/layout/home');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2072653922,
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
    hash: 4283015315,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      function _default() {
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
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQSxVQURXLFNBQ1FDLDJCQURSLENBQzZCO1FBQ2hDLElBQU5DLE1BQU07VUFDTixPQUFPQyxlQUFQO1FBQ0g7O01BSHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSjlDOztNQVljO1FBQ1YsT0FDSUM7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0lBO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSw2Q0FESkEsRUFFSUE7VUFBYUUsSUFBSSxFQUFDO1FBQWxCRixFQUZKQSxFQUdJQSxrQ0FDSUEsbURBREpBLENBSEpBLENBREpBLENBREo7TUFXSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJSZWFjdCIsImNsYXNzTmFtZSIsImhvbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9sYXlvdXRzL2hvbWUvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9sYXlvdXRzL2hvbWUvdHMvbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19