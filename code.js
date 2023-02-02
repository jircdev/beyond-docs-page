System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond/docs@1/ui/icons", "prismjs@1.29.0"], function (_export, _context) {
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
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1UiIcons) {
      dependency_2 = _beyondDocs1UiIcons;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/ui/icons', dependency_2], ['prismjs', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 3537854650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("@beyond/docs/ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                window.setTimeout(() => {
                  span.classList.add('hide');
                  window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.log('some error', e);
              }
            };
            return React.createElement("div", null, React.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_icons.AppIconButton, {
              icon: "copy"
            }), React.createElement("span", {
              className: "action-copied"
            }, "Copied")));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 1475501222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var React = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
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
            }, title), React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            })), React.createElement("section", {
              className: "box__code"
            }, React.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 3186956624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
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
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", null, React.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0MsT0FBTyxFQUFDO1lBQUUsRUFBRyxDQUNqRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQTtVQUVPO1VBQVUsU0FBVTBELFVBQVUsQ0FBQztZQUFFWDtVQUFRLENBQUU7WUFDakQsT0FBTzdDO2NBQU11QyxTQUFTLEVBQUM7WUFBYyxHQUFFTSxRQUFRLENBQVE7VUFDeEQiLCJuYW1lcyI6WyJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm9uQ2xpY2siLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJjbGFzc05hbWUiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsIkNvZGVCb3giLCJ0aXRsZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJDb2RlIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiSW5saW5lQ29kZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY2xpcGJvYXJkLnRzeCIsInRzL2NvZGUtYm94LnRzeCIsInRzL2NvZGUudHN4IiwidHMvaW5saW5lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==