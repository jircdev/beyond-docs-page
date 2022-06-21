define(["exports", "@beyond/docs/components/html/code", "react", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BEEPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/bee/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 3207110175,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BEEPage = BEEPage;

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var React = require("react");
      /*bundle*/


      function BEEPage() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "bee"
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "BEEPage",
    "name": "BEEPage"
  }];
  let BEEPage; // Module exports

  _exports.BEEPage = BEEPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BEEPage') && (_exports.BEEPage = BEEPage = require ? require('./control').BEEPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});