define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react", "prismjs"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.CodeBox = _exports.Code = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/code",
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["prismjs", dependency_3]]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/code');

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
    hash: 4074053595,
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

        const cls = 'code-container';
        return React.createElement("div", {
          className: cls
        }, React.createElement("pre", null, React.createElement("code", {
          className: `language-${language}`,
          dangerouslySetInnerHTML: createMarkup()
        })));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./code-box",
    "from": "CodeBox",
    "name": "CodeBox"
  }, {
    "im": "./code",
    "from": "Code",
    "name": "Code"
  }];
  let CodeBox, Code; // Module exports

  _exports.Code = Code;
  _exports.CodeBox = CodeBox;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'CodeBox') && (_exports.CodeBox = CodeBox = require ? require('./code-box').CodeBox : value);
    (require || prop === 'Code') && (_exports.Code = Code = require ? require('./code').Code : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});