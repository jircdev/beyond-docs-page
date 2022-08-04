define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.beyond__styles = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/styles",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/layout/styles');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3774170322,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.beyond__styles = void 0;
      /*bundle*/

      const beyond__styles = '';
      exports.beyond__styles = beyond__styles;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "beyond__styles",
    "name": "beyond__styles"
  }];
  let beyond__styles; // Module exports

  _exports.beyond__styles = beyond__styles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'beyond__styles') && (_exports.beyond__styles = beyond__styles = require ? require('./controller').beyond__styles : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBTzs7TUFBVyxNQUFNQSxjQUFjLEdBQUcsRUFBdkIiLCJuYW1lcyI6WyJiZXlvbmRfX3N0eWxlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2xheW91dHMvc3R5bGVzL3RzL2NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=