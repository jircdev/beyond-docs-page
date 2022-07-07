define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.StateManagement = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/state",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 2264533932,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StateManagement = StateManagement;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function StateManagement() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
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