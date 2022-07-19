define(["exports", "@beyond-js/kernel/bundle", "@beyond/docs/examples/sm/store"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.updateCount = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/actions",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples/sm/store"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./actions
  *************************/

  ims.set('./actions', {
    hash: 4028755770,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.updateCount = updateCount;

      var _store = require("@beyond/docs/examples/sm/store");
      /*bundle*/


      function updateCount() {
        const {
          counter
        } = _store.store.getState();

        ++counter.count;
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./actions",
    "from": "updateCount",
    "name": "updateCount"
  }];
  let updateCount; // Module exports

  _exports.updateCount = updateCount;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'updateCount') && (_exports.updateCount = updateCount = require ? require('./actions').updateCount : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});