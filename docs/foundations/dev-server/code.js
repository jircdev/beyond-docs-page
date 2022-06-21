define(["exports", "@beyond-js/kernel/styles/ts", "@beyond/docs/components/html/code", "react", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DevServer = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/dev-server/code").package();

  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/foundations/dev-server/code');

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 128495096,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DevServer = DevServer;

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

      function DevServer() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "server"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "properties",
          nextLinks: ["/docs/distributions"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "DevServer",
    "name": "DevServer"
  }];
  let DevServer; // Module exports

  _exports.DevServer = DevServer;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DevServer') && (_exports.DevServer = DevServer = require ? require('./index').DevServer : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});