define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Processors = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/processors/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/processors/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 2895571658,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Processors = Processors;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "processors"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "types"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "properties"
        }), React.createElement(_code.Document, {
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