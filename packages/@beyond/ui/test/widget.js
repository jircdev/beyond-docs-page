define(["exports", "@beyond-js/kernel/react-widget/ts", "react", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Page = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_0);
  dependencies.set('react', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/ui/test/widget', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 394925675,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");

      var _page = require("./page");
      /*bundle*/


      class Controller extends _ts.PageReactWidgetController {
        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  modules.set('./page', {
    hash: 3326330522,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");
      /*bundle*/


      function Page() {
        return React.createElement(React.Fragment, null, "Hi page");
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.Page = require('./page').Page;
  };

  let Controller, Page; // Module exports

  _exports2.Page = Page;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.Page = Page = require('./page').Page;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});