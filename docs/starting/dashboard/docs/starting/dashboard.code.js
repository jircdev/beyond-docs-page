define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DashboardPage = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/dashboard",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 3654838705,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DashboardPage = DashboardPage;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function DashboardPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          textId: "dashboard",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "features",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "structure",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "ts",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "editor",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "deploy",
          nextLinks: [["Tutorial", "/docs/tutorial/bridge"]]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./intro",
    "from": "DashboardPage",
    "name": "DashboardPage"
  }];
  let DashboardPage; // Module exports

  _exports.DashboardPage = DashboardPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DashboardPage') && (_exports.DashboardPage = DashboardPage = require ? require('./intro').DashboardPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});