System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_prismjs) {
      dependency_3 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['prismjs', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/code');
      ims = new Map();
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
        hash: 1438902608,
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
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 2676581642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var React = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return React.createElement("code", {
              className: "inline__code"
            }, children);
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
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLE9BQU8sQ0FBQztZQUFDQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUM7VUFBUSxDQUFDO1lBRTFELE9BQ0lDO2NBQUtDLFNBQVMsRUFBQztZQUFXLEdBQ3RCRCxvQ0FDSUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVksR0FDdEJKLEtBQUssQ0FDSixDQUNELEVBQ1RHO2NBQVNDLFNBQVMsRUFBQztZQUFXLEdBQzFCRCxvQkFBQ0UsVUFBSTtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FDbkJDLFFBQVEsQ0FDTixDQUNELENBR1I7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFDQTtVQUVPO1VBQVUsU0FBVUcsSUFBSSxDQUFDO1lBQUVKLFFBQVEsR0FBRyxZQUFZO1lBQUVDO1VBQVEsQ0FBRTtZQUNwRSxNQUFNSSxZQUFZLEdBQUcsTUFBSztjQUN6QixJQUFJLENBQUNKLFFBQVEsRUFBRTtnQkFDZCxPQUFPO2tCQUFFSyxNQUFNLEVBQUU7Z0JBQUUsQ0FBRTs7Y0FFdEIsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxFQUFFTyxLQUFLLENBQUNFLFNBQVMsQ0FBQ0MsVUFBVSxFQUFFWCxRQUFRLENBQUM7Y0FDNUUsT0FBTztnQkFBRU0sTUFBTSxFQUFFQztjQUFJLENBQUU7WUFDeEIsQ0FBQztZQUNELE1BQU1LLEdBQUcsR0FBRyxnQkFBZ0I7WUFDNUIsT0FDQ1Y7Y0FBS0MsU0FBUyxFQUFFUztZQUFHLEdBQ2xCVixpQ0FDQ0E7Y0FBTUMsU0FBUyxFQUFFLDBCQUEwQkgsUUFBUSxFQUFFO2NBQUVhLHVCQUF1QixFQUFFUixZQUFZO1lBQUUsRUFBSSxDQUM3RixDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBO1VBRU87VUFBVSxTQUFVUyxVQUFVLENBQUM7WUFBRWI7VUFBUSxDQUFFO1lBQ2pELE9BQU9DO2NBQU1DLFNBQVMsRUFBQztZQUFjLEdBQUVGLFFBQVEsQ0FBUTtVQUN4RCIsIm5hbWVzIjpbIkNvZGVCb3giLCJ0aXRsZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJSZWFjdCIsImNsYXNzTmFtZSIsIkNvZGUiLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJodG1sIiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJJbmxpbmVDb2RlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb2RlLWJveC50c3giLCJ0cy9jb2RlLnRzeCIsInRzL2lubGluZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19