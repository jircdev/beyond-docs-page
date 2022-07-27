define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/controllers", "react", "@beyond/docs/examples-sm-actions"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter-react",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-actions"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "counter-react",
    "id": "@beyond/docs/examples/sm/counter-react"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/examples/sm/counter-react');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1505874523,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _widget = require("./views/widget");
      /*bundle*/


      class Controller extends _controllers.ReactWidgetController {
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