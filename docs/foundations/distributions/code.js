define(["exports", "@beyond/docs/components/html/code", "react", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DistributionsPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/distributions/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 1858470650,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DistributionsPage = DistributionsPage;

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var React = require("react");

      const tpl = `
{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;
      const tpls = {
        tpl: {
          tpl,
          title: "beyond.json"
        }
      };
      /*bundle*/

      function DistributionsPage() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "distributions"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "node"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "distribution",
          nextLinks: ["/docs/distributions"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "DistributionsPage",
    "name": "DistributionsPage"
  }];
  let DistributionsPage; // Module exports

  _exports.DistributionsPage = DistributionsPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DistributionsPage') && (_exports.DistributionsPage = DistributionsPage = require ? require('./index').DistributionsPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});