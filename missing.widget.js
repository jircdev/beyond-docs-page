define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/page", "react@17.0.2", "@beyond/docs/store", "@beyond/ui/link", "@beyond/docs/preload"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
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
    "module": "@beyond/docs/missing",
    "multibundle": true,
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/store", "@beyond/ui/link", "@beyond/docs/preload"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "app-docs-missing",
    "id": "@beyond/docs/missing.widget",
    "is": "page",
    "route": "/not-found",
    "layout": "home-layout"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/missing.widget');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2988556055,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQSxVQURXLFNBQ1FDLCtCQURSLENBQ2lDO1FBQ3BDLElBQU5DLE1BQU07VUFDTixPQUFPQyxXQUFQO1FBQ0g7O01BSDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSmxEOztNQUNBOztNQUNBOztNQUNBOztNQUNBOztNQUVNLFNBQVVBLElBQVYsR0FBYztRQUVoQixNQUFNLENBQUNDLEtBQUQsRUFBUUMsS0FBUixJQUFpQixxQkFBU0MsdUJBQU9DLFFBQWhCLENBQXZCO1FBQ0EsSUFBSSxDQUFDSCxLQUFMLEVBQVksT0FBTyxJQUFQO1FBQ1osT0FDSUk7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0lBO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSxvQ0FDSUE7VUFBTUMsU0FBUyxFQUFDO1FBQWhCRCxHQUErQkgsS0FBSyxDQUFDSyxRQUFyQ0YsQ0FESkEsRUFFSUEsZ0NBQUtILEtBQUssQ0FBQ00sS0FBWEgsQ0FGSkEsRUFHSUEsK0JBQUlILEtBQUssQ0FBQ08sV0FBVkosQ0FISkEsRUFJSUEsK0JBQUlILEtBQUssQ0FBQ1EsR0FBTlIsQ0FBVVMsRUFBZE4sT0FBa0JBLG9CQUFDTyxVQUFEUCxFQUFLO1VBQUNRLElBQUksRUFBQyxHQUFOO1VBQVVQLFNBQVMsRUFBQztRQUFwQixDQUFMRCxFQUF5Q0gsS0FBSyxDQUFDUSxHQUFOUixDQUFVWSxFQUFuRFQsQ0FBbEJBLE9BQWlGSCxLQUFLLENBQUNRLEdBQU5SLENBQVVhLEVBQTNGVixDQUpKQSxDQURKQSxFQU9JQTtVQUFLQyxTQUFTLEVBQUM7UUFBZkQsR0FFSUEsc0NBRkpBLEVBR0lBLG9CQUFDVyxzQkFBRFgsRUFBYyxJQUFkQSxDQUhKQSxFQUlJQSxzQ0FKSkEsQ0FQSkEsQ0FESkEsQ0FESjtNQW1CSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsInJlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIlJlYWN0IiwiY2xhc3NOYW1lIiwicHJldGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW5kIiwiczEiLCJMaW5rIiwiaHJlZiIsImwxIiwiczIiLCJCZXlvbmRJc290eXBlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWlzc2luZy93aWRnZXQvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9taXNzaW5nL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==