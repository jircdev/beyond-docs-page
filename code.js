System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "react@18.2.0", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CodeBox, Code, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_1 = _beyondJsKernel010Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_prismjs) {
      dependency_3 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsU0FBVUEsT0FBTyxDQUFDO1lBQUNDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFRLENBQUM7WUFFMUQsT0FDSUM7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDdEJELG9DQUNJQTtjQUFLQyxTQUFTLEVBQUM7WUFBWSxHQUN0QkosS0FBSyxDQUNKLENBQ0QsRUFDVEc7Y0FBU0MsU0FBUyxFQUFDO1lBQVcsR0FDMUJELG9CQUFDRSxVQUFJO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQkMsUUFBUSxDQUNOLENBQ0QsQ0FHUjtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQTtVQUNBO1VBR087VUFBVSxTQUFVRyxJQUFJLENBQUM7WUFBQ0osUUFBUSxHQUFHLFlBQVk7WUFBRUM7VUFBUSxDQUFDO1lBQy9ELE1BQU1JLFlBQVksR0FBRyxNQUFLO2NBRXRCLElBQUksQ0FBQ0osUUFBUSxFQUFFO2dCQUNYLE9BQU87a0JBQUNLLE1BQU0sRUFBRTtnQkFBRSxDQUFDOztjQUV2QixNQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUixRQUFRLEVBQUVPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxVQUFVLEVBQUVYLFFBQVEsQ0FBQztjQUM1RSxPQUFPO2dCQUFDTSxNQUFNLEVBQUVDO2NBQUksQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTUssR0FBRyxHQUFHLGdCQUFnQjtZQUM1QixPQUNJVjtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDbkJWLGlDQUNJQTtjQUFNQyxTQUFTLEVBQUUsWUFBWUgsUUFBUSxFQUFFO2NBQUVhLHVCQUF1QixFQUFFUixZQUFZO1lBQUUsRUFBRyxDQUNqRixDQUNBO1VBRWQiLCJuYW1lcyI6WyJDb2RlQm94IiwidGl0bGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJDb2RlIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9jb2RlL3RzL2NvZGUtYm94LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL2NvZGUvdHMvY29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==