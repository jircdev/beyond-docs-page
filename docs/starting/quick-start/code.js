define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.QuickStart = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/starting/quick-start/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/starting/quick-start/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 4047944576,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QuickStart = QuickStart;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      const build = tpl => ({
        language: 'shell',
        tpl
      });

      const tpls = {
        npx1: build(`npx @beyond-js/create-project --type web-backend --name @testing/login`),
        npx2: build(`npx @beyond-js/create-project --type node -name  @scope/name \n`),
        npm1: build(`beyond`),
        npm2: build(`npm i -g beyond`),
        beyond: build('beyond')
      };
      /*bundle*/

      function QuickStart() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          tpls: tpls,
          nextLinks: [["Bridge", "/docs/tutorial/bridge"]]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "QuickStart",
    "name": "QuickStart"
  }];
  let QuickStart; // Module exports

  _exports.QuickStart = QuickStart;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'QuickStart') && (_exports.QuickStart = QuickStart = require ? require('./control').QuickStart : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});