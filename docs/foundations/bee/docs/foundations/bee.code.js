define(["exports", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BEEPage = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/foundations/bee",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1104680484,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BEEPage = BEEPage;

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      var React = require("react");
      /*bundle*/


      function BEEPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
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