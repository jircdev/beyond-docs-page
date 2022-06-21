define(["exports", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DocsIntro = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/starting/intro/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 1328272089,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DocsIntro = DocsIntro;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};`;
      const tpls = {
        tpl1: {
          tpl: `import {routing} from "@beyond-js/kernel/routing/ts";`
        },
        tpl2: {
          tpl: `routing.pushState('/home', [{state}]);`
        },
        tpl3: {
          tpl: `routing.replaceState('/home', [{state}]);`
        },
        tpl4: {
          tpl: tpl
        }
      };
      /*bundle*/

      function DocsIntro() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          textId: "universal",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_code.Document, {
          tpls: tpls,
          textId: "overview",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "features",
          nextLinks: ["/docs/tutorial/start"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "DocsIntro",
    "name": "DocsIntro"
  }];
  let DocsIntro; // Module exports

  _exports.DocsIntro = DocsIntro;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DocsIntro') && (_exports.DocsIntro = DocsIntro = require ? require('./index').DocsIntro : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});