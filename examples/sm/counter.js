define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/page", "react@17.0.2", "@beyond/docs/examples-sm-store"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Page = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_3]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-store"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
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
    hash: 1073942782,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _page = require("@beyond-js/react-widgets/page");

      var _page2 = require("./views/page");
      /*bundle*/


      class Controller extends _page.PageReactWidgetController {
        get Widget() {
          return _page2.Page;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQSxVQURXLFNBQ1FDLCtCQURSLENBQ2lDO1FBQ3BDLElBQU5DLE1BQU07VUFDTixPQUFPQyxXQUFQO1FBQ0g7O01BSDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSmxEOztNQUNBO01BRU87OztNQUFVLFNBQ1JBLElBRFEsR0FDSjtRQUNULE1BQU0sQ0FBQ0MsS0FBRCxFQUFRO1VBQUNDO1FBQUQsQ0FBUixJQUEyQkMsdUJBQU1DLG9CQUFORCxFQUFqQzs7UUFDQUEsdUJBQU1FLHlCQUFORixDQUFnQyxDQUFDRixLQUFLLENBQUNLLE9BQVAsQ0FBaENILEVBQWlELENBQUNELGFBQUQsQ0FBakRDOztRQUVBLE9BQ0lJO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSxrREFBbUJMLGFBQWEsQ0FBQ08sS0FBakNGLENBREpBLEVBRUlBO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSwwQ0FESkEsRUFFSUEsd0NBRkpBLEVBR0lBLDJDQUhKQSxDQUZKQSxDQURKO01BVUgiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdGF0ZSIsInNlbGVjdG9yQ291bnQiLCJzdG9yZSIsImdldFN0YXRlQW5kU2VsZWN0b3JzIiwidXNlU3RhdGVBbmRTZWxlY3RvcnNSZWFjdCIsImNvdW50ZXIiLCJSZWFjdCIsImNsYXNzTmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZXhhbXBsZXMvY291bnRlci9wYWdlL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvcGFnZS93aWRnZXQvdHMvdmlld3MvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==