define(["exports", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.beyond__styles = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/layout/styles/code").package();

  externals.register(new Map([]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/layout/styles/code');

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