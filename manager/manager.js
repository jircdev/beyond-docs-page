define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.AppManager = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/manager",
    "bundle": "manager"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/core", dependency_1]]));
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