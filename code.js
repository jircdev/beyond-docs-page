define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react@17.0.2", "prismjs@1.28.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.CodeBox = _exports.Code = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/code",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2], ["prismjs", dependency_3]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7TUFFTzs7O01BQVUsU0FBVUEsT0FBVixDQUFrQjtRQUFDQyxLQUFEO1FBQVFDLFFBQVI7UUFBa0JDO01BQWxCLENBQWxCLEVBQTZDO1FBRTFELE9BQ0lDO1VBQUtDLFNBQVMsRUFBQztRQUFmRCxHQUNJQSxvQ0FDSUE7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0tILEtBRExHLENBREpBLENBREpBLEVBTUlBO1VBQVNDLFNBQVMsRUFBQztRQUFuQkQsR0FDSUEsb0JBQUNFLFVBQURGLEVBQUs7VUFBQ0YsUUFBUSxFQUFFQTtRQUFYLENBQUxFLEVBQ0tELFFBRExDLENBREpBLENBTkpBLENBREo7TUFnQkg7Ozs7Ozs7Ozs7Ozs7Ozs7O01DckJEOztNQUNBO01BR087OztNQUFVLFNBQVVFLElBQVYsQ0FBZTtRQUFDSixRQUFRLEdBQUcsWUFBWjtRQUEwQkM7TUFBMUIsQ0FBZixFQUFrRDtRQUMvRCxNQUFNSSxZQUFZLEdBQUcsTUFBSztVQUV0QixJQUFJLENBQUNKLFFBQUwsRUFBZTtZQUNYLE9BQU87Y0FBQ0ssTUFBTSxFQUFFO1lBQVQsQ0FBUDtVQUNIOztVQUNELE1BQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxTQUFORCxDQUFnQlAsUUFBaEJPLEVBQTBCQSxLQUFLLENBQUNFLFNBQU5GLENBQWdCRyxVQUExQ0gsRUFBc0RSLFFBQXREUSxDQUFiO1VBQ0EsT0FBTztZQUFDRixNQUFNLEVBQUVDO1VBQVQsQ0FBUDtRQU5KOztRQVFBLE1BQU1LLEdBQUcsR0FBRyxnQkFBWjtRQUNBLE9BQ0lWO1VBQUtDLFNBQVMsRUFBRVM7UUFBaEJWLEdBQ0FBLGlDQUNJQTtVQUFNQyxTQUFTLEVBQUUsWUFBWUgsUUFBUSxFQUFyQ0U7VUFBeUNXLHVCQUF1QixFQUFFUixZQUFZO1FBQTlFSCxFQURKQSxDQURBQSxDQURKO01BT0giLCJuYW1lcyI6WyJDb2RlQm94IiwidGl0bGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJDb2RlIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9jb2RlL3RzL2NvZGUtYm94LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2NvZGUvdHMvY29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==