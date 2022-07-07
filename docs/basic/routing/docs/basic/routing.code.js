define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.RoutingPage = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/routing",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2075387734,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RoutingPage = RoutingPage;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
}`;
      const tpls = {
        tpl1: {
          tpl: `routing.pushState('/home', [{state}]);`,
          language: "ts"
        },
        tpl2: {
          tpl: `routing.replaceState('/home', [{state}]);`,
          language: "ts"
        },
        tpl3: {
          tpl: tpl
        }
      };
      /*bundle*/

      function RoutingPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "routing"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "object"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "navigation"
        }), React.createElement(_html.Document, {
          tpls: tpls,
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