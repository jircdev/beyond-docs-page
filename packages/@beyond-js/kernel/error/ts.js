define(["exports", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/kernel/error/ts").package();

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

  __pkg.exports.process = function (require) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});