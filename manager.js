define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.AppManager = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/manager",
    "bundle": "manager"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1073145704,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Manager = exports.AppManager = void 0;

      var _core = require("@beyond-js/kernel/core");

      class Manager extends _core.Events {
        /**
         * The menu is closed by default.
         * @private
         */
        #menuOpened = false;

        get menuOpened() {
          return this.#menuOpened;
        }

        set menuOpened(value) {
          if (this.#menuOpened === value) return;
          this.#menuOpened = value;
          this.trigger('change');
        }

      }

      exports.Manager = Manager;
      /*bundle*/

      const AppManager = new Manager();
      exports.AppManager = AppManager;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "AppManager",
    "name": "AppManager"
  }];
  let AppManager; // Module exports

  _exports.AppManager = AppManager;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'AppManager') && (_exports.AppManager = AppManager = require ? require('./control').AppManager : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFFTSxNQUFPQSxPQUFQLFNBQXVCQyxZQUF2QixDQUE2QjtRQUUvQjs7OztRQUlBLGNBQWMsS0FBZDs7UUFDYyxJQUFWQyxVQUFVO1VBQ1YsT0FBTyxLQUFLLFdBQVo7UUFDSDs7UUFFYSxJQUFWQSxVQUFVLENBQUNDLEtBQUQsRUFBZTtVQUN6QixJQUFJLEtBQUssV0FBTCxLQUFxQkEsS0FBekIsRUFBZ0M7VUFDaEMsS0FBSyxXQUFMLEdBQW1CQSxLQUFuQjtVQUNBLEtBQUtDLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7O01BZjhCOzs7TUFtQjVCOztNQUFXLE1BQU1DLFVBQVUsR0FBRyxJQUFJTCxPQUFKLEVBQW5CIiwibmFtZXMiOlsiTWFuYWdlciIsIkV2ZW50cyIsIm1lbnVPcGVuZWQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJBcHBNYW5hZ2VyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWFuYWdlci9jb2RlL3RzL2NvbnRyb2wudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=