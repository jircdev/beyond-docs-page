define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/controllers", "react", "@beyond/docs/examples-sm-store"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Page = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_3]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-store"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "examples-counter-page",
    "id": "@beyond/docs/examples/sm/counter",
    "is": "page",
    "route": "/examples/sm/counter",
    "layout": "main-layout"
  }]);
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond/docs/examples/sm/counter', 'undefined.section{background:var(--gray-light);padding:2rem}undefined.section .items{display:grid;flex-grow:2;grid-template-columns:1fr 1fr 1fr}');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2992203461,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _page = require("./views/page");
      /*bundle*/


      class Controller extends _controllers.PageReactWidgetController {
        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  ims.set('./views/page', {
    hash: 445809471,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      var _examplesSmStore = require("@beyond/docs/examples-sm-store");
      /*bundle*/


      function Page() {
        const [state, {
          selectorCount
        }] = _examplesSmStore.store.getStateAndSelectors();

        _examplesSmStore.store.useStateAndSelectorsReact([state.counter], [selectorCount]);

        return React.createElement("div", {
          className: "section"
        }, React.createElement("h2", null, "Click counter ", selectorCount.value), React.createElement("div", {
          className: "items"
        }, React.createElement("counter-react", null), React.createElement("counter-vue", null), React.createElement("counter-svelte", null)));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./views/page",
    "from": "Page",
    "name": "Page"
  }];
  let Controller, Page; // Module exports

  _exports.Page = Page;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Page') && (_exports.Page = Page = require ? require('./views/page').Page : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});