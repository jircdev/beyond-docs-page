define(["exports", "module", "@beyond-js/kernel/bundle", "vue@3.2.37", "@beyond-js/vue-widgets/base", "@beyond-js/widgets/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.PageVueWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/vue-widgets/page",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["vue", dependency_1]]));
  const ims = new Map();
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 1160942583,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageVueWidgetController = void 0;

      var _base = require("@beyond-js/vue-widgets/base");

      var _routing = require("@beyond-js/widgets/routing");
      /*bundle*/


      class PageVueWidgetController extends _base.VueWidgetController {
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

      exports.PageVueWidgetController = PageVueWidgetController;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./page",
    "from": "PageVueWidgetController",
    "name": "PageVueWidgetController"
  }];
  let PageVueWidgetController; // Module exports

  _exports.PageVueWidgetController = PageVueWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'PageVueWidgetController') && (_exports.PageVueWidgetController = PageVueWidgetController = require ? require('./page').PageVueWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNGQSx1QkFERSxTQUM4QkMseUJBRDlCLENBQ2lEO1FBQzlEOztRQUNPLElBQUhDLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVEQyxLQUFLO1VBQ0QsT0FBTyxNQUFNQSxLQUFOLENBQVk7WUFBQ0QsR0FBRyxFQUFFLEtBQUs7VUFBWCxDQUFaLENBQVA7UUFDSDs7UUFFZSxNQUFWRSxVQUFVO1VBQ1osS0FBSyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBWTtZQUFDQyxNQUFNLEVBQU8sS0FBS0E7VUFBbkIsQ0FBWixDQUFaO1VBQ0EsTUFBTSxNQUFNRixVQUFOLEVBQU47UUFDSDs7TUFiNkQiLCJuYW1lcyI6WyJQYWdlVnVlV2lkZ2V0Q29udHJvbGxlciIsIlZ1ZVdpZGdldENvbnRyb2xsZXIiLCJ1cmkiLCJtb3VudCIsImluaXRpYWxpc2UiLCJQYWdlVVJJIiwid2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19