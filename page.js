define(["exports", "module", "@beyond-js/kernel/bundle", "svelte@3.48.0/internal", "@beyond-js/svelte-widgets/base", "@beyond-js/widgets/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.PageSvelteWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/svelte-widgets/page",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["svelte/internal", dependency_1]]));
  const ims = new Map();
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 2856264170,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageSvelteWidgetController = void 0;

      var _base = require("@beyond-js/svelte-widgets/base");

      var _routing = require("@beyond-js/widgets/routing");
      /*bundle*/


      class PageSvelteWidgetController extends _base.SvelteWidgetController {
        #uri;

        get uri() {
          return this.#uri;
        }

        mount() {
          return super.mount({
            uri: this.#uri
          });
        }

        async initialise() {
          this.#uri = new _routing.PageURI({
            widget: this.widget
          });
          await super.initialise();
        }

      }

      exports.PageSvelteWidgetController = PageSvelteWidgetController;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./page",
    "from": "PageSvelteWidgetController",
    "name": "PageSvelteWidgetController"
  }];
  let PageSvelteWidgetController; // Module exports

  _exports.PageSvelteWidgetController = PageSvelteWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'PageSvelteWidgetController') && (_exports.PageSvelteWidgetController = PageSvelteWidgetController = require ? require('./page').PageSvelteWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNGQSwwQkFERSxTQUNpQ0MsNEJBRGpDLENBQ3VEO1FBQ3BFOztRQUNPLElBQUhDLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVEQyxLQUFLO1VBQ0QsT0FBTyxNQUFNQSxLQUFOLENBQVk7WUFBQ0QsR0FBRyxFQUFFLEtBQUs7VUFBWCxDQUFaLENBQVA7UUFDSDs7UUFFZSxNQUFWRSxVQUFVO1VBQ1osS0FBSyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBWTtZQUFDQyxNQUFNLEVBQU8sS0FBS0E7VUFBbkIsQ0FBWixDQUFaO1VBQ0EsTUFBTSxNQUFNRixVQUFOLEVBQU47UUFDSDs7TUFibUUiLCJuYW1lcyI6WyJQYWdlU3ZlbHRlV2lkZ2V0Q29udHJvbGxlciIsIlN2ZWx0ZVdpZGdldENvbnRyb2xsZXIiLCJ1cmkiLCJtb3VudCIsImluaXRpYWxpc2UiLCJQYWdlVVJJIiwid2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19