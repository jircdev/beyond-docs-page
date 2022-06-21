define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.StateManagement = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/state/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/state/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1565709263,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StateManagement = StateManagement;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function StateManagement() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "handling",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "StateManagement",
    "name": "StateManagement"
  }];
  let StateManagement; // Module exports

  _exports.StateManagement = StateManagement;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'StateManagement') && (_exports.StateManagement = StateManagement = require ? require('./control').StateManagement : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});