System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@beyond-js/widgets@0.1.2/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Control, ThemeToggleButton, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    ThemeToggleButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsWidgets012Render) {
      dependency_3 = _beyondJsWidgets012Render;
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
          "vspecifier": "@beyond/docs@1/components/theme-button"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/widgets/render', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/components/theme-button');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1583137179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /*********************
      INTERNAL MODULE: ./svg
      *********************/

      ims.set('./svg', {
        hash: 3948986861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Svg = Svg;
          var React = require("react");
          function Svg() {
            return React.createElement("svg", {
              className: "sun-and-moon",
              "aria-hidden": "true",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, React.createElement("circle", {
              className: "sun",
              cx: "12",
              cy: "12",
              r: "6",
              mask: "url(#moon-mask)",
              fill: "currentColor"
            }), React.createElement("g", {
              className: "sun-beams",
              stroke: "currentColor"
            }, React.createElement("line", {
              x1: "12",
              y1: "1",
              x2: "12",
              y2: "3"
            }), React.createElement("line", {
              x1: "12",
              y1: "21",
              x2: "12",
              y2: "23"
            }), React.createElement("line", {
              x1: "4.22",
              y1: "4.22",
              x2: "5.64",
              y2: "5.64"
            }), React.createElement("line", {
              x1: "18.36",
              y1: "18.36",
              x2: "19.78",
              y2: "19.78"
            }), React.createElement("line", {
              x1: "1",
              y1: "12",
              x2: "3",
              y2: "12"
            }), React.createElement("line", {
              x1: "21",
              y1: "12",
              x2: "23",
              y2: "12"
            }), React.createElement("line", {
              x1: "4.22",
              y1: "19.78",
              x2: "5.64",
              y2: "18.36"
            }), React.createElement("line", {
              x1: "18.36",
              y1: "5.64",
              x2: "19.78",
              y2: "4.22"
            })), React.createElement("mask", {
              className: "moon",
              id: "moon-mask"
            }, React.createElement("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: "white"
            }), React.createElement("circle", {
              cx: "24",
              cy: "10",
              r: "6",
              fill: "black"
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 753185445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeToggleButton = ThemeToggleButton;
          var React = require("react");
          var _svg = require("./svg");
          var _render = require("@beyond-js/widgets/render");
          const key = '__beyond-mode';
          /*bundle*/
          function ThemeToggleButton() {
            const ref = React.useRef(null);
            const defaultTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const userTheme = window?.localStorage.getItem(key) ?? defaultTheme;
            const cls = `btn-theme-toggle btn-theme--${userTheme}`;
            const setTheme = theme => {
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', theme);
              const current = `btn-theme--${theme}`;
              const another = `btn-theme--${theme === 'dark' ? 'light' : 'dark'}`;
              ref?.current.classList.add(current);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              if (ref?.current.classList.contains(another)) ref?.current.classList.remove(another);
            };
            React.useEffect(() => {
              const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const userTheme = window?.localStorage.getItem(key);
              if (!userTheme) {
                window?.localStorage.setItem(key, defaultTheme);
              }
              setTheme(window?.localStorage.getItem(key));
            }, []);
            const onClick = event => {
              event.preventDefault();
              const theme = localStorage.getItem(key) === 'dark' ? 'light' : 'dark';
              localStorage.setItem(key, theme);
              setTheme(theme);
            };
            return React.createElement("button", {
              ref: ref,
              onClick: onClick,
              className: cls,
              title: "Toggles light & dark",
              "aria-label": "auto",
              "aria-live": "polite"
            }, React.createElement(_svg.Svg, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./switch",
        "from": "ThemeToggleButton",
        "name": "ThemeToggleButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'ThemeToggleButton') && _export("ThemeToggleButton", ThemeToggleButton = require ? require('./switch').ThemeToggleButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNNEIsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU1qQixLQUFLLEdBQUdKLFlBQVksQ0FBQ0MsT0FBTyxDQUFDVixHQUFHLENBQUMsS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07Y0FDckVTLFlBQVksQ0FBQ2tCLE9BQU8sQ0FBQzNCLEdBQUcsRUFBRWEsS0FBSyxDQUFDO2NBQ2hDRCxRQUFRLENBQUNDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FDSS9CO2NBQ0lvQixHQUFHLEVBQUVBLEdBQUc7Y0FDUjBCLE9BQU8sRUFBRUEsT0FBTztjQUNoQjdDLFNBQVMsRUFBRTRCLEdBQUc7Y0FDZG9CLEtBQUssRUFBQyxzQkFBc0I7Y0FBQSxjQUNqQixNQUFNO2NBQUEsYUFDUDtZQUFRLEdBRWxCakQsb0JBQUNELFFBQUcsT0FBRSxDQUNEO1VBRWpCIiwibmFtZXMiOlsiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsIlN2ZyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJtYXNrIiwiZmlsbCIsInN0cm9rZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiaWQiLCJ4IiwieSIsImtleSIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwicmVmIiwidXNlUmVmIiwiZGVmYXVsdFRoZW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ1c2VyVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xzIiwic2V0VGhlbWUiLCJ0aGVtZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnQiLCJhbm90aGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJjb250YWlucyIsInJlbW92ZSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRyb2wudHMiLCJjb2RlL3RzL3N2Zy50c3giLCJjb2RlL3RzL3N3aXRjaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19