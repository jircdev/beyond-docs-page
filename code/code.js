define(["exports", "@beyond-js/kernel/styles/ts", "react", "prismjs", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.CodeBox = _exports2.Code = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/code/code").package();

  externals.register(new Map([["react", dependency_1], ["prismjs", dependency_2]]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/code/code');

  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./code-box
  **************************/

  ims.set('./code-box', {
    hash: 3586710754,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CodeBox = CodeBox;

      var React = require("react");

      var _code = require("./code");
      /*bundle*/


      function CodeBox({
        title,
        language,
        children
      }) {
        return React.createElement("div", {
          className: "code__box"
        }, React.createElement("header", null, React.createElement("div", {
          className: "tab active"
        }, title)), React.createElement("section", {
          className: "box__code"
        }, React.createElement(_code.Code, {
          language: language
        }, children)));
      }
    }
  });
  /**********************
  INTERNAL MODULE: ./code
  **********************/

  ims.set('./code', {
    hash: 225097830,
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
          if (!children) {
            return {
              __html: ''
            };
          }

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
    _exports.CodeBox = require('./code-box').CodeBox;
    _exports.Code = require('./code').Code;
  };

  let CodeBox, Code; // Module exports

  _exports2.Code = Code;
  _exports2.CodeBox = CodeBox;

  __pkg.exports.process = function (require) {
    _exports2.CodeBox = CodeBox = require('./code-box').CodeBox;
    _exports2.Code = Code = require('./code').Code;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});