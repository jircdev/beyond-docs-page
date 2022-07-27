define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/controllers", "react"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/list",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_3]]));

  require('@beyond-js/widgets/render').widgets.register([{
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
    hash: 3474067634,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _views = require("./views");
      /*bundle*/


      class Controller extends _controllers.PageReactWidgetController {
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