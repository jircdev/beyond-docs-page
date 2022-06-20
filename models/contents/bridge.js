define(["exports", "@beyond-js/backend/client/ts", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BridgeModel = void 0;

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
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "BridgeModel",
    "name": "BridgeModel"
  }];
  let BridgeModel; // Module exports

  _exports.BridgeModel = BridgeModel;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BridgeModel') && (_exports.BridgeModel = BridgeModel = require ? require('./index').BridgeModel : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});