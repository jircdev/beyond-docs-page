define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.AppManager = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/manager/code").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
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
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});