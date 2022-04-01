define(["exports", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.AppManager = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/manager/code', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  modules.set('./control', {
    hash: 456826631,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Manager = exports.AppManager = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      class Manager extends _ts.Events {
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.AppManager = require('./control').AppManager;
  };

  let AppManager; // Module exports

  _exports2.AppManager = AppManager;

  __pkg.exports.process = function (require) {
    _exports2.AppManager = AppManager = require('./control').AppManager;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});