define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/backend/client"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BridgeModel = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/models/contents",
    "bundle": "bridge"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const {
    ActionsBridge
  } = brequire('@beyond-js/backend/client');
  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2289465725,
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
          super("backend", _beyond_context.bundle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTtNQUVPOztNQUFZOzs7TUFBVSxNQUFPQSxXQUFQLFNBQTJCQyxhQUEzQixDQUF3QztRQUN4RCxNQUFIQyxHQUFHO1VBQ0wsT0FBTyxNQUFNLEtBQUtDLE9BQUwsQ0FBYSx5QkFBYixFQUF3QyxHQUFHQyxTQUEzQyxDQUFiO1FBQ0g7O1FBRVMsTUFBSkMsSUFBSTtVQUNOLE9BQU8sTUFBTSxLQUFLRixPQUFMLENBQWEsMEJBQWIsRUFBeUMsR0FBR0MsU0FBNUMsQ0FBYjtRQUNIOztRQUNERTtVQUNJLE1BQU0sU0FBTixFQUFpQkMsc0JBQWpCO1FBQ0g7O01BVmdFIiwibmFtZXMiOlsiQnJpZGdlTW9kZWwiLCJBY3Rpb25zQnJpZGdlIiwiZ2V0IiwiZXhlY3V0ZSIsImFyZ3VtZW50cyIsImxpc3QiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21vZGVscy9jb250ZW50cy9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=