define(["exports", "react", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.ThemeToggleButton = _exports2.Control = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_1);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/components/theme-button/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  modules.set('./control', {
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

  modules.set('./svg', {
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

  modules.set('./switch', {
    hash: 2588030458,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ThemeToggleButton = ThemeToggleButton;

      var React = require("react");

      var _svg = require("./svg");

      var _ts = require("@beyond-js/kernel/core/ts");

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

          _ts.beyond.widgets.attributes.add('data-beyond-mode', theme);

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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Control = require('./control').Control;
    _exports.ThemeToggleButton = require('./switch').ThemeToggleButton;
  };

  let Control, ThemeToggleButton; // Module exports

  _exports2.ThemeToggleButton = ThemeToggleButton;
  _exports2.Control = Control;

  __pkg.exports.process = function (require) {
    _exports2.Control = Control = require('./control').Control;
    _exports2.ThemeToggleButton = ThemeToggleButton = require('./switch').ThemeToggleButton;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});