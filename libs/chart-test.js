define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/libs/chart-test",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2333637008,
    creator: function (require, exports) {
      //your code here
      "use strict";
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