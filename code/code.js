define(["exports", "react", "prismjs", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Code = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('prismjs', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/code/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /**********************
  INTERNAL MODULE: ./code
  **********************/

  modules.set('./code', {
    hash: 1094602998,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Code = Code;

      var React = require("react");

      var Prism = require("prismjs");
      /*bundle*/


      function Code({
        language = 'typescript',
        children
      }) {
        const createMarkup = () => {
          const html = Prism.highlight(children, Prism.languages.javascript, language);
          return {
            __html: html
          };
        };

        return React.createElement("pre", null, React.createElement("code", {
          className: `language-${language}`,
          dangerouslySetInnerHTML: createMarkup()
        }));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Code = require('./code').Code;
  };

  let Code; // Module exports

  _exports2.Code = Code;

  __pkg.exports.process = function (require) {
    _exports2.Code = Code = require('./code').Code;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});