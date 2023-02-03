System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@beyond/docs@1/ui/icons", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
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
    }, function (_beyondDocs1UiIcons) {
      dependency_3 = _beyondDocs1UiIcons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@bgroup/ui", "0.0.29"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond/docs/ui/icons', dependency_3], ['prismjs', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUvQyxPQUFPLEVBQUM7WUFBRSxFQUFHLENBQ2pEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBO1VBRU87VUFBVSxTQUFVMEQsVUFBVSxDQUFDO1lBQUVYO1VBQVEsQ0FBRTtZQUNqRCxPQUFPN0M7Y0FBTXVDLFNBQVMsRUFBQztZQUFjLEdBQUVNLFFBQVEsQ0FBUTtVQUN4RCIsIm5hbWVzIjpbIkNsaXBib2FyZCIsInRleHQiLCJtZXNzYWdlIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJwb2x5ZmlsbCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwibXNnIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwib25DbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZSIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiQ29kZUJveCIsInRpdGxlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsIkNvZGUiLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJodG1sIiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJJbmxpbmVDb2RlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jbGlwYm9hcmQudHN4IiwidHMvY29kZS1ib3gudHN4IiwidHMvY29kZS50c3giLCJ0cy9pbmxpbmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19