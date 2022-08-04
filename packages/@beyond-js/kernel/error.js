define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/error",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./error
  ***********************/

  ims.set('./error', {
    hash: 1344789388,
    creator: function (require, exports) {
      "use strict";

      const prepareStackTrace = Error => {
        Error.prepareStackTrace = (err, frames) => {
          for (const frame of frames) {
            if (frame.isNative()) continue;
            const file = frame.getFileName();
            const line = frame.getLineNumber();
            const column = frame.getColumnNumber();
            console.log(file, line, column);
          }

          return err.stack;
        };
      };

      Error.prepareStackTrace && prepareStackTrace(Error);
    }
  }); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BT0EsTUFBTUEsaUJBQWlCLEdBQUlDLEtBQUQsSUFBcUI7UUFDM0NBLEtBQUssQ0FBQ0QsaUJBQU5DLEdBQTBCLENBQUNDLEdBQUQsRUFBYUMsTUFBYixLQUFtQztVQUN6RCxLQUFLLE1BQU1DLEtBQVgsSUFBb0JELE1BQXBCLEVBQTRCO1lBQ3hCLElBQUlDLEtBQUssQ0FBQ0MsUUFBTkQsRUFBSixFQUFzQjtZQUV0QixNQUFNRSxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csV0FBTkgsRUFBYjtZQUNBLE1BQU1JLElBQUksR0FBR0osS0FBSyxDQUFDSyxhQUFOTCxFQUFiO1lBQ0EsTUFBTU0sTUFBTSxHQUFHTixLQUFLLENBQUNPLGVBQU5QLEVBQWY7WUFFQVEsT0FBTyxDQUFDQyxHQUFSRCxDQUFZTixJQUFaTSxFQUFrQkosSUFBbEJJLEVBQXdCRixNQUF4QkU7VUFDSDs7VUFFRCxPQUFPVixHQUFHLENBQUNZLEtBQVg7UUFYSjtNQURKOztNQWdCQ2IsS0FBYSxDQUFDRCxpQkFBZEMsSUFBbUNELGlCQUFpQixDQUFDQyxLQUFELENBQXBEQSIsIm5hbWVzIjpbInByZXBhcmVTdGFja1RyYWNlIiwiRXJyb3IiLCJlcnIiLCJmcmFtZXMiLCJmcmFtZSIsImlzTmF0aXZlIiwiZmlsZSIsImdldEZpbGVOYW1lIiwibGluZSIsImdldExpbmVOdW1iZXIiLCJjb2x1bW4iLCJnZXRDb2x1bW5OdW1iZXIiLCJjb25zb2xlIiwibG9nIiwic3RhY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19