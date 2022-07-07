define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react", "@beyond-js/widgets/render"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ThemeToggleButton = _exports.Control = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/components/theme-button",
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["@beyond-js/widgets/render", dependency_3]]));

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/components/theme-button');

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