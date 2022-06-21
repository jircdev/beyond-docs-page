define(["exports", "@beyond/docs/components/html/code", "react", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.HMRPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/hmr/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 218155407,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HMRPage = HMRPage;

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var React = require("react");
      /*bundle*/


      function HMRPage() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "hmr"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "events",
          nextLinks: ["/docs/foundations/bee"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "HMRPage",
    "name": "HMRPage"
  }];
  let HMRPage; // Module exports

  _exports.HMRPage = HMRPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'HMRPage') && (_exports.HMRPage = HMRPage = require ? require('./control').HMRPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});