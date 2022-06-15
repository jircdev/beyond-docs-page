define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/styles/ts", "@beyond-js/react-widgets/controllers/ts", "react", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Layout = _exports2.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/layout/main/widget").package();

  externals.register(new Map([["react", dependency_3]]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "main-layout",
    "id": "@beyond/docs/layout/main/widget",
    "is": "layout"
  }]);

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/layout/main/widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2078184725,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _layout = require("./layout");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.Layout = require('./layout').Layout;
  };

  let Controller, Layout; // Module exports

  _exports2.Layout = Layout;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.Layout = Layout = require('./layout').Layout;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});