define(["exports", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.RoutingPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/routing/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 185247865,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RoutingPage = RoutingPage;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function RoutingPage() {
        console.log(2, "ak");
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "routing"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "object"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "navigation"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "overwrite",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "RoutingPage",
    "name": "RoutingPage"
  }];
  let RoutingPage; // Module exports

  _exports.RoutingPage = RoutingPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'RoutingPage') && (_exports.RoutingPage = RoutingPage = require ? require('./index').RoutingPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});