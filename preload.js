System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond/docs@1/ui/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BeyondIsotype, PreloadPage, __beyond_pkg, hmr;
  _export({
    BeyondIsotype: void 0,
    PreloadPage: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1UiIcons) {
      dependency_2 = _beyondDocs1UiIcons;
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
          "vspecifier": "@beyond/docs@1/preload"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/ui/icons', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/preload');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./icon
      **********************/
      ims.set('./icon', {
        hash: 334154461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondIsotype = BeyondIsotype;
          var React = require("react");
          var _icons = require("@beyond/docs/ui/icons");
          /*bundle*/
          function BeyondIsotype() {
            return React.createElement("div", {
              className: "ds-preload__icon-container"
            }, React.createElement(_icons.AppIcon, {
              className: "ds-preload__icon",
              icon: {
                viewBox: '0 0 51.1 94.341',
                icon: `<g id="beyond-ales" transform="translate(0 58.014)">
                <path style="fill:#b6bdc7;"
                      d="M134.558,86.353c-1.639,6.215-2.471,12.1-2.192,15.5.286,3.471,1.683,3.847,3.666.984a43.137,43.137,0,0,0,4.522-10.109A28.74,28.74,0,0,1,134.558,86.353Zm35.834,9.609a28.705,28.705,0,0,1-8.381,2.521,43.14,43.14,0,0,0-1.137,11.018c.286,3.469,1.684,3.843,3.666.981C166.485,107.674,168.7,102.165,170.392,95.962Zm-23.269.565c-2.3,8.985-3.763,17.18-3.931,21.955-.184,5.224,1.214,5.6,3.666.981,2.241-4.223,5.065-12.054,7.566-20.98a25.534,25.534,0,0,1-7.3-1.956Z"
                      transform="translate(-132.313 -86.353)"/>
            </g>
            <g id="beyond-circle">
                <path style="fill:#d9684a;"
                      d="M128.259,81.117q-.921-.031-1.833.006a24.566,24.566,0,1,0,1.833-.006Zm-.2,5.473a19.516,19.516,0,0,1,4.345.658,19.238,19.238,0,1,1-5.774-.655c.475-.019.95-.021,1.429,0Zm9.44-22.429a11.85,11.85,0,0,0-4.7,1.2,17.688,17.688,0,0,0-5.318,3.917,45.527,45.527,0,0,0-6.429,8.65,28.413,28.413,0,0,1,8.056-.687,32.179,32.179,0,0,1,3.335-4.186c3.645-3.672,6.623-3.975,8.134,2.181a32.7,32.7,0,0,1,.827,5.642,28.5,28.5,0,0,1,6.6,5.1,46.806,46.806,0,0,0-1.246-11.534A17.7,17.7,0,0,0,144.1,68.4c-1.208-1.671-2.838-3.456-4.981-4.03a6.208,6.208,0,0,0-1.63-.206Zm-9.218,16.448q-.94-.032-1.87.007a25.07,25.07,0,1,0,1.87-.006Zm-.209,5.586a19.913,19.913,0,0,1,4.434.672,19.632,19.632,0,1,1-5.892-.669c.484-.019.969-.021,1.458,0Z"
                      transform="translate(-101.592 -64.162)"/>
            </g>`
              }
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 1254944910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadPage = PreloadPage;
          var React = require("react");
          var _icon = require("./icon");
          /*bundle*/
          function PreloadPage() {
            return React.createElement("div", {
              className: "preload-container"
            }, React.createElement("div", {
              className: "circle"
            }), React.createElement("div", {
              className: "page__main-content"
            }, React.createElement("div", {
              className: "center__container"
            }, React.createElement(_icon.BeyondIsotype, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icon",
        "from": "BeyondIsotype",
        "name": "BeyondIsotype"
      }, {
        "im": "./loading",
        "from": "PreloadPage",
        "name": "PreloadPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondIsotype') && _export("BeyondIsotype", BeyondIsotype = require ? require('./icon').BeyondIsotype : value);
        (require || prop === 'PreloadPage') && _export("PreloadPage", PreloadPage = require ? require('./loading').PreloadPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLGFBQWE7WUFDcEMsT0FFSUM7Y0FBS0MsU0FBUyxFQUFDO1lBQTRCLEdBQ3ZDRCxvQkFBQ0UsY0FBTztjQUFDRCxTQUFTLEVBQUMsa0JBQWtCO2NBQUNFLElBQUksRUFDdEM7Z0JBQ0lDLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCRCxJQUFJLEVBQUU7Ozs7Ozs7Ozs7O1lBVVQsRUFDRixDQUNEO1VBR2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBO1VBQ0E7VUFFTztVQUFVLFNBQVVFLFdBQVc7WUFDbEMsT0FDSUw7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQzlCRDtjQUFLQyxTQUFTLEVBQUM7WUFBUSxFQUFFLEVBQ3pCRDtjQUFLQyxTQUFTLEVBQUM7WUFBb0IsR0FDL0JEO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUM5QkQsb0JBQUNELG1CQUFhLE9BQUUsQ0FDZCxDQUNKLENBQ0o7VUFFZCIsIm5hbWVzIjpbIkJleW9uZElzb3R5cGUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwidmlld0JveCIsIlByZWxvYWRQYWdlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9pY29uLnRzeCIsInRzL2xvYWRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=