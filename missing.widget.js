define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/controllers", "react", "@beyond/docs/store", "@beyond/ui/link", "@beyond/docs/preload"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
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
    "module": "@beyond/docs/missing",
    "multibundle": true,
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/store", "@beyond/ui/link", "@beyond/docs/preload"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "app-docs-missing",
    "id": "@beyond/docs/missing.widget",
    "is": "page",
    "route": "/not-found",
    "layout": "home-layout"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/missing.widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 360607780,
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
          return _views.View;
        }

      }

      exports.Controller = Controller;
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/index
  *****************************/

  ims.set('./views/index', {
    hash: 1360793431,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.View = View;

      var React = require("react");

      var _store = require("@beyond/docs/store");

      var _beyond_context = require("beyond_context");

      var _link = require("@beyond/ui/link");

      var _preload = require("@beyond/docs/preload");

      function View() {
        const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.resource);
        if (!ready) return null;
        return React.createElement("div", {
          className: "container-404"
        }, React.createElement("div", {
          className: "content-container two-columns"
        }, React.createElement("header", null, React.createElement("span", {
          className: "pretitle-h1"
        }, texts.pretitle), React.createElement("h1", null, texts.title), React.createElement("p", null, texts.description), React.createElement("p", null, texts.end.s1, " ", React.createElement(_link.Link, {
          href: "/",
          className: "link primary"
        }, texts.end.l1), " ", texts.end.s2)), React.createElement("div", {
          className: "isotype-404 "
        }, React.createElement("span", null, "4"), React.createElement(_preload.BeyondIsotype, null), React.createElement("span", null, "4"))));
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