define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/page", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
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
    "module": "@beyond/docs/examples/list",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_3]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "examples-list-page",
    "id": "@beyond/docs/examples/list",
    "is": "page",
    "route": "/examples",
    "layout": "main-layout"
  }]);
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 368540843,
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
          return _views.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/index
  *****************************/

  ims.set('./views/index', {
    hash: 813852795,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      function Page({
        uri,
        component,
        store
      }) {
        return React.createElement("h1", null, "Ejemplos");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BRUE7TUFHTzs7O01BQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztRQUdwQyxJQUFOQyxNQUFNO1VBQ04sT0FBT0MsV0FBUDtRQUNIOztNQUw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ05sRDs7TUFHTSxTQUFVQSxJQUFWLENBQWU7UUFBQ0MsR0FBRDtRQUFNQyxTQUFOO1FBQWlCQztNQUFqQixDQUFmLEVBQXNDO1FBRXhDLE9BQ0lDLDJDQURKO01BS0giLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJ1cmkiLCJjb21wb25lbnQiLCJzdG9yZSIsIlJlYWN0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZXhhbXBsZXMvbGlzdC90cy9jb250cm9sbGVyLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9saXN0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19