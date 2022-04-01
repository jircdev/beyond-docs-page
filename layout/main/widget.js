define(["exports", "@beyond-js/kernel/react-widget/ts", "react", "@beyond/docs/layout/styles/code", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Widget = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_0);
  dependencies.set('react', dependency_1);
  dependencies.set('@beyond/docs/layout/styles/code', dependency_2);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_3);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/layout/main/widget', false, {}, dependencies);

  const __pkg = bundle.package();
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '.layout-container{height:100vh;overflow:hidden}.main-widget{height:100%}.docs-page{padding:1.5rem}@media (min-width:1200px){.docs-page{display:grid;grid-template-columns:250px 1fr;min-height:100%}}';
  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 2355814033,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        async fetch() {}

      }

      exports.Controller = Controller;
    }
  });
  /************************
  INTERNAL MODULE: ./layout
  ************************/

  modules.set('./layout', {
    hash: 4189678012,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = Layout;
      exports.Widget = void 0;

      var React = require("react");

      function Layout() {
        return React.createElement("div", {
          className: "main-widget"
        }, React.createElement("beyond-docs-header", null), React.createElement("div", {
          className: "docs-page container"
        }, React.createElement("menu-layout", null), React.createElement("main", null, React.createElement("beyond-layout-children", null))));
      }
      /*bundle*/


      const Widget = Layout;
      exports.Widget = Widget;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.Widget = require('./layout').Widget;
  };

  let Controller, Widget; // Module exports

  _exports2.Widget = Widget;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.Widget = Widget = require('./layout').Widget;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});