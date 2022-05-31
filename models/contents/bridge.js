define(["exports", "@beyond-js/backend/client/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.BridgeModel = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/models/contents/bridge").package();

  externals.register(new Map([]));

  const {
    ActionsBridge
  } = require('@beyond-js/backend/client/ts');

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 545566116,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BridgeModel = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/


      class BridgeModel extends ActionsBridge {
        async get() {
          return await this.execute("index//BridgeModel//get", ...arguments);
        }

        async list() {
          return await this.execute("index//BridgeModel//list", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.module);
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
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});