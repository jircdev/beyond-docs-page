System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/widgets@0.1.2/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Control, ThemeToggleButton, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    ThemeToggleButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsWidgets012Render) {
      dependency_2 = _beyondJsWidgets012Render;
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
          "vspecifier": "@beyond/docs@1/components/theme-button"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);
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
        hash: 768655297,
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
              window.widgets = _render.widgets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVUsTUFDWEEsT0FBTztZQUVUQyxlQUVBOztVQUVIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQRDtVQUVNLFNBQVVDLEdBQUc7WUFDZixPQUNJQztjQUFLQyxTQUFTLEVBQUMsY0FBYztjQUFBLGVBQWEsTUFBTTtjQUFDQyxLQUFLLEVBQUMsSUFBSTtjQUFDQyxNQUFNLEVBQUMsSUFBSTtjQUFDQyxPQUFPLEVBQUM7WUFBVyxHQUN2Rko7Y0FBUUMsU0FBUyxFQUFDLEtBQUs7Y0FBQ0ksRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLEdBQUc7Y0FBQ0MsSUFBSSxFQUFDLGlCQUFpQjtjQUFDQyxJQUFJLEVBQUM7WUFBYyxFQUFFLEVBQzFGVDtjQUFHQyxTQUFTLEVBQUMsV0FBVztjQUFDUyxNQUFNLEVBQUM7WUFBYyxHQUMxQ1Y7Y0FBTVcsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLEdBQUc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDO1lBQUcsRUFBRSxFQUNyQ2Q7Y0FBTVcsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDO1lBQUksRUFBRSxFQUN2Q2Q7Y0FBTVcsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDO1lBQU0sRUFBRSxFQUMvQ2Q7Y0FBTVcsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDO1lBQU8sRUFBRSxFQUNuRGQ7Y0FBTVcsRUFBRSxFQUFDLEdBQUc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLEdBQUc7Y0FBQ0MsRUFBRSxFQUFDO1lBQUksRUFBRSxFQUNyQ2Q7Y0FBTVcsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDO1lBQUksRUFBRSxFQUN2Q2Q7Y0FBTVcsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDO1lBQU8sRUFBRSxFQUNqRGQ7Y0FBTVcsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDLE1BQU07Y0FBQ0MsRUFBRSxFQUFDLE9BQU87Y0FBQ0MsRUFBRSxFQUFDO1lBQU0sRUFBRSxDQUNqRCxFQUNKZDtjQUFNQyxTQUFTLEVBQUMsTUFBTTtjQUFDYyxFQUFFLEVBQUM7WUFBVyxHQUNqQ2Y7Y0FBTWdCLENBQUMsRUFBQyxHQUFHO2NBQUNDLENBQUMsRUFBQyxHQUFHO2NBQUNmLEtBQUssRUFBQyxNQUFNO2NBQUNDLE1BQU0sRUFBQyxNQUFNO2NBQUNNLElBQUksRUFBQztZQUFPLEVBQUUsRUFDM0RUO2NBQVFLLEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBQyxHQUFHO2NBQUNFLElBQUksRUFBQztZQUFPLEVBQUUsQ0FDekMsQ0FDTDtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFFQSxNQUFNUyxHQUFHLEdBQUcsZUFBZTtVQUVwQjtVQUFVLFNBQVVDLGlCQUFpQjtZQUMzQyxNQUFNQyxHQUFHLEdBQUdwQixLQUFLLENBQUNxQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxFQUFFQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFPO1lBQ2xHLE1BQU1DLFNBQVMsR0FBR0gsTUFBTSxFQUFFSSxZQUFZLENBQUNDLE9BQU8sQ0FBQ1YsR0FBRyxDQUFDLElBQUlJLFlBQVk7WUFDbkUsTUFBTU8sR0FBRyxHQUFHLCtCQUErQkgsU0FBUyxFQUFFO1lBRXRELE1BQU1JLFFBQVEsR0FBSUMsS0FBSyxJQUFJO2NBQzFCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hERixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRUosS0FBSyxDQUFDO2NBQ2pELE1BQU1LLE9BQU8sR0FBRyxjQUFjTCxLQUFLLEVBQUU7Y0FDckMsTUFBTU0sT0FBTyxHQUFHLGNBQWNOLEtBQUssS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRTtjQUNuRVgsR0FBRyxFQUFFZ0IsT0FBTyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDO2NBQ25DSSxlQUFPLENBQUNDLFVBQVUsQ0FBQ0YsR0FBRyxDQUFDLGtCQUFrQixFQUFFUixLQUFLLENBQUM7Y0FDakRSLE1BQU0sQ0FBQ2lCLE9BQU8sR0FBR0EsZUFBTztjQUN4QixJQUFJcEIsR0FBRyxFQUFFZ0IsT0FBTyxDQUFDRSxTQUFTLENBQUNJLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDLEVBQUVqQixHQUFHLEVBQUVnQixPQUFPLENBQUNFLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDTixPQUFPLENBQUM7WUFDckYsQ0FBQztZQUVEckMsS0FBSyxDQUFDNEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXRCLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFPO2NBQ2pHLE1BQU1DLFNBQVMsR0FBR0gsTUFBTSxFQUFFSSxZQUFZLENBQUNDLE9BQU8sQ0FBQ1YsR0FBRyxDQUFDO2NBQ25ELElBQUksQ0FBQ1EsU0FBUyxFQUFFO2dCQUNmSCxNQUFNLEVBQUVJLFlBQVksQ0FBQ2tCLE9BQU8sQ0FBQzNCLEdBQUcsRUFBRUksWUFBWSxDQUFDOztjQUVoRFEsUUFBUSxDQUFDUCxNQUFNLEVBQUVJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDVixHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTTRCLE9BQU8sR0FBSUMsS0FBSyxJQUFJO2NBQ3pCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNakIsS0FBSyxHQUFHSixZQUFZLENBQUNDLE9BQU8sQ0FBQ1YsR0FBRyxDQUFDLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQ3JFUyxZQUFZLENBQUNrQixPQUFPLENBQUMzQixHQUFHLEVBQUVhLEtBQUssQ0FBQztjQUNoQ0QsUUFBUSxDQUFDQyxLQUFLLENBQUM7WUFDaEIsQ0FBQztZQUNELE9BQ0MvQjtjQUNDb0IsR0FBRyxFQUFFQSxHQUFHO2NBQ1IwQixPQUFPLEVBQUVBLE9BQU87Y0FDaEI3QyxTQUFTLEVBQUU0QixHQUFHO2NBQ2RvQixLQUFLLEVBQUMsc0JBQXNCO2NBQUEsY0FDakIsTUFBTTtjQUFBLGFBQ1A7WUFBUSxHQUVsQmpELG9CQUFDRCxRQUFHLE9BQUcsQ0FDQztVQUVYIiwibmFtZXMiOlsiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsIlN2ZyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJtYXNrIiwiZmlsbCIsInN0cm9rZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiaWQiLCJ4IiwieSIsImtleSIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwicmVmIiwidXNlUmVmIiwiZGVmYXVsdFRoZW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ1c2VyVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xzIiwic2V0VGhlbWUiLCJ0aGVtZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnQiLCJhbm90aGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJjb250YWlucyIsInJlbW92ZSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NvbnRyb2wudHMiLCJjb2RlL3RzL3N2Zy50c3giLCJjb2RlL3RzL3N3aXRjaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19