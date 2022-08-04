define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/react-widgets/base", "@beyond-js/widgets/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.PageReactWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/react-widgets/page",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 3016655360,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageReactWidgetController = void 0;

      var _base = require("@beyond-js/react-widgets/base");

      var _routing = require("@beyond-js/widgets/routing");
      /*bundle*/


      class PageReactWidgetController extends _base.ReactWidgetController {
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

      exports.PageReactWidgetController = PageReactWidgetController;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./page",
    "from": "PageReactWidgetController",
    "name": "PageReactWidgetController"
  }];
  let PageReactWidgetController; // Module exports

  _exports.PageReactWidgetController = PageReactWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'PageReactWidgetController') && (_exports.PageReactWidgetController = PageReactWidgetController = require ? require('./page').PageReactWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNGQSx5QkFERSxTQUNnQ0MsMkJBRGhDLENBQ3FEO1FBQ2xFOztRQUNPLElBQUhDLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVEQyxLQUFLO1VBQ0QsT0FBTyxNQUFNQSxLQUFOLENBQVk7WUFBQ0QsR0FBRyxFQUFFLEtBQUs7VUFBWCxDQUFaLENBQVA7UUFDSDs7UUFFZSxNQUFWRSxVQUFVO1VBQ1osS0FBSyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBWTtZQUFDQyxNQUFNLEVBQU8sS0FBS0E7VUFBbkIsQ0FBWixDQUFaO1VBQ0EsTUFBTSxNQUFNRixVQUFOLEVBQU47UUFDSDs7TUFiaUUiLCJuYW1lcyI6WyJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwidXJpIiwibW91bnQiLCJpbml0aWFsaXNlIiwiUGFnZVVSSSIsIndpZGdldCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==