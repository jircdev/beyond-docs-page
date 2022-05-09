define(["exports", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.BridgeModel = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/models/contents/bridge', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  modules.set('./index', {
    hash: 545566116,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BridgeModel = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/


      class BridgeModel extends _ts.ActionsBridge {
        async get() {
          return await this.execute("index//BridgeModel//get", ...arguments);
        }

        async list() {
          return await this.execute("index//BridgeModel//list", ...arguments);
        }

        constructor() {
          super(_beyond_context.module);
        }

      }

      exports.BridgeModel = BridgeModel;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BridgeModel = require('./index').BridgeModel;
  };

  let BridgeModel; // Module exports

  _exports2.BridgeModel = BridgeModel;

  __pkg.exports.process = function (require) {
    _exports2.BridgeModel = BridgeModel = require('./index').BridgeModel;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});