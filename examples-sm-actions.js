define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/examples-sm-store"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.updateCount = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples-sm-actions",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-store"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./actions
  *************************/

  ims.set('./actions', {
    hash: 3887912139,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.updateCount = updateCount;

      var _examplesSmStore = require("@beyond/docs/examples-sm-store");
      /*bundle*/


      function updateCount() {
        const {
          counter
        } = _examplesSmStore.store.getState();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTtNQUVPOzs7TUFBVSxTQUNSQSxXQURRLEdBQ0c7UUFDaEIsTUFBTTtVQUFDQztRQUFELElBQVlDLHVCQUFNQyxRQUFORCxFQUFsQjs7UUFDQSxFQUFFRCxPQUFPLENBQUNHLEtBQVY7TUFDSCIsIm5hbWVzIjpbInVwZGF0ZUNvdW50IiwiY291bnRlciIsInN0b3JlIiwiZ2V0U3RhdGUiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvc3RvcmUvYWN0aW9ucy90cy9hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19