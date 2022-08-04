define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react@17.0.2", "@beyond-js/widgets/render"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ThemeToggleButton = _exports.Control = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/components/theme-button",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/components/theme-button');
  const ims = new Map();
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
  let Control, ThemeToggleButton; // Module exports

  _exports.ThemeToggleButton = ThemeToggleButton;
  _exports.Control = Control;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Control') && (_exports.Control = Control = require ? require('./control').Control : value);
    (require || prop === 'ThemeToggleButton') && (_exports.ThemeToggleButton = ThemeToggleButton = require ? require('./switch').ThemeToggleButton : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdILE1BQU0sRUFBRUksWUFBUkosQ0FBcUJLLE9BQXJCTCxDQUE2QkwsR0FBN0JLLENBQWxCOztVQUNBLElBQUksQ0FBQ0csU0FBTCxFQUFnQjtZQUNaSCxNQUFNLEVBQUVJLFlBQVJKLENBQXFCc0IsT0FBckJ0QixDQUE2QkwsR0FBN0JLLEVBQWtDRCxZQUFsQ0M7VUFDSDs7VUFDRE8sUUFBUSxDQUFDUCxNQUFNLEVBQUVJLFlBQVJKLENBQXFCSyxPQUFyQkwsQ0FBNkJMLEdBQTdCSyxDQUFELENBQVJPO1FBTkosR0FPRyxFQVBIOUI7O1FBU0EsTUFBTThDLE9BQU8sR0FBR0MsS0FBSyxJQUFHO1VBQ3BCQSxLQUFLLENBQUNDLGNBQU5EO1VBQ0EsTUFBTWhCLEtBQUssR0FBR0osWUFBWSxDQUFDQyxPQUFiRCxDQUFxQlQsR0FBckJTLE1BQThCLE1BQTlCQSxHQUF1QyxPQUF2Q0EsR0FBaUQsTUFBL0Q7VUFDQUEsWUFBWSxDQUFDa0IsT0FBYmxCLENBQXFCVCxHQUFyQlMsRUFBMEJJLEtBQTFCSjtVQUNBRyxRQUFRLENBQUNDLEtBQUQsQ0FBUkQ7UUFKSjs7UUFNQSxPQUNJOUI7VUFDSW9CLEdBQUcsRUFBRUEsR0FEVHBCO1VBRUk4QyxPQUFPLEVBQUVBLE9BRmI5QztVQUdJQyxTQUFTLEVBQUU0QixHQUhmN0I7VUFJSWlELEtBQUssRUFBQyxzQkFKVmpEO1VBSWdDLGNBQ2pCLE1BTGZBO1VBS3FCLGFBQ1A7UUFOZEEsR0FRSUEsb0JBQUNELFFBQURDLEVBQUksSUFBSkEsQ0FSSkEsQ0FESjtNQVlIIiwibmFtZXMiOlsiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiU3ZnIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsIm1hc2siLCJmaWxsIiwic3Ryb2tlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJpZCIsIngiLCJ5Iiwia2V5IiwiVGhlbWVUb2dnbGVCdXR0b24iLCJyZWYiLCJ1c2VSZWYiLCJkZWZhdWx0VGhlbWUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInVzZXJUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbHMiLCJzZXRUaGVtZSIsInRoZW1lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY3VycmVudCIsImFub3RoZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImNvbnRhaW5zIiwicmVtb3ZlIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9jb21wb25lbnRzL3RoZW1lLWJ1dHRvbi9jb2RlL3RzL2NvbnRyb2wudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy90aGVtZS1idXR0b24vY29kZS90cy9zdmcudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2NvbXBvbmVudHMvdGhlbWUtYnV0dG9uL2NvZGUvdHMvc3dpdGNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=