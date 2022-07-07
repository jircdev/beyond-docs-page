define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Processors = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/processors",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 115906820,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Processors = Processors;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}`;
      const tpls = {
        modulejson: {
          language: "json",
          tpl
        }
      };
      /*bundle*/

      function Processors() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "processors"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "types"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "properties"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "examples",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "Processors",
    "name": "Processors"
  }];
  let Processors; // Module exports

  _exports.Processors = Processors;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Processors') && (_exports.Processors = Processors = require ? require('./control').Processors : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});