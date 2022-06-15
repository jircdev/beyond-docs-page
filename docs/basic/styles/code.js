define(["exports", "@beyond-js/kernel/styles/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Control = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/styles/code").package();

  externals.register(new Map([]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/styles/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1583137179,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Control = void 0;
      /*bundle*/

      class Control {
        constructor() {}

      }

      exports.Control = Control;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Control = require('./control').Control;
  };

  let Control; // Module exports

  _exports2.Control = Control;

  __pkg.exports.process = function (require) {
    _exports2.Control = Control = require('./control').Control;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});