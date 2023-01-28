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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 382613428,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLE9BQU8sQ0FBQztZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUM7VUFBUSxDQUFFO1lBQzVELE9BQ0lDO2NBQUtDLFNBQVMsRUFBQztZQUFXLEdBQ3RCRCxvQ0FDSUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVksR0FBRUosS0FBSyxDQUFPLENBQ3BDLEVBQ1RHO2NBQVNDLFNBQVMsRUFBQztZQUFXLEdBQzFCRCxvQkFBQ0UsVUFBSTtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FBR0MsUUFBUSxDQUFRLENBQ3JDLENBQ1I7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQTtVQUNBO1VBRU87VUFBVSxTQUFVRyxJQUFJLENBQUM7WUFBRUosUUFBUSxHQUFHLFlBQVk7WUFBRUM7VUFBUSxDQUFFO1lBQ3BFLE1BQU1JLFlBQVksR0FBRyxNQUFLO2NBQ3pCLElBQUksQ0FBQ0osUUFBUSxFQUFFO2dCQUNkLE9BQU87a0JBQUVLLE1BQU0sRUFBRTtnQkFBRSxDQUFFOztjQUV0QixNQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUixRQUFRLEVBQUVPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxVQUFVLEVBQUVYLFFBQVEsQ0FBQztjQUM1RSxPQUFPO2dCQUFFTSxNQUFNLEVBQUVDO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBQ0QsTUFBTUssR0FBRyxHQUFHLGdCQUFnQjtZQUM1QixPQUNDVjtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDbEJWLGlDQUNDQTtjQUFNQyxTQUFTLEVBQUUsMEJBQTBCSCxRQUFRLEVBQUU7Y0FBRWEsdUJBQXVCLEVBQUVSLFlBQVk7WUFBRSxFQUFJLENBQzdGLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkE7VUFFTztVQUFVLFNBQVVTLFVBQVUsQ0FBQztZQUFFYjtVQUFRLENBQUU7WUFDakQsT0FBT0M7Y0FBTUMsU0FBUyxFQUFDO1lBQWMsR0FBRUYsUUFBUSxDQUFRO1VBQ3hEIiwibmFtZXMiOlsiQ29kZUJveCIsInRpdGxlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiQ29kZSIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIklubGluZUNvZGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvZGUtYm94LnRzeCIsInRzL2NvZGUudHN4IiwidHMvaW5saW5lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=