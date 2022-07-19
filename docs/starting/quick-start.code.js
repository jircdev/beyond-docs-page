define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.QuickStart = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/quick-start",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 3377061913,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QuickStart = QuickStart;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const build = tpl => ({
        language: 'shell',
        tpl
      });

      const tpls = {
        npx1: build(`npx @beyond-js/create-project --type web-backend --name @testing/login`),
        npx2: build(`npx @beyond-js/create-project --type node --name  @scope/name \n`),
        npm1: build(`beyond`),
        npm2: build(`npm i -g beyond`),
        beyond: build('beyond')
      };
      /*bundle*/

      function QuickStart() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          textId: "requires",
          moduleId: _beyond_context.module.resource,
          tpls: tpls
        }), React.createElement(_html.Document, {
          textId: "global",
          moduleId: _beyond_context.module.resource,
          tpls: tpls
        }), React.createElement(_html.Document, {
          textId: "create",
          moduleId: _beyond_context.module.resource,
          tpls: tpls,
          nextLinks: ["/docs/tutorial/start"]
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