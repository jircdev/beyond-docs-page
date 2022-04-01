define(["exports", "@beyond-js/kernel/react-widget/ts", "@beyond-js/kernel/core/ts", "react", "@beyond/docs/manager/code", "@beyond/docs/ui/icons/code", "@beyond/ui/link/code", "@beyond/docs/layout/styles/code"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Widget = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_0);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_1);
  dependencies.set('react', dependency_2);
  dependencies.set('@beyond/docs/manager/code', dependency_3);
  dependencies.set('@beyond/docs/ui/icons/code', dependency_4);
  dependencies.set('@beyond/ui/link/code', dependency_5);
  dependencies.set('@beyond/docs/layout/styles/code', dependency_6);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/header/widget', false, {}, dependencies);

  const __pkg = bundle.package();
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '.container{margin:auto;width:100%;max-width:1376px;padding:15px;content:"max-width: 768px"}@media (max-width:768px){.container{padding:15px;width:calc(100% - 30px)}}.flex-center{place-content:center;place-items:center;display:flex;gap:15px}.flex-center-y{display:flex;align-items:center;align-content:center;gap:15px}.flex-center-x{display:flex;justify-content:center;gap:15px}.f-container,.flex-container{display:flex}.f-container.f-space-between,.f-container.space-between,.flex-container.f-space-between,.flex-container.space-between{justify-content:space-between}:where(html){--ease-1:cubic-bezier(.25,0,.5,1);--ease-2:cubic-bezier(.25,0,.4,1);--ease-3:cubic-bezier(.25,0,.3,1);--ease-4:cubic-bezier(.25,0,.2,1);--ease-5:cubic-bezier(.25,0,.1,1);--ease-in-1:cubic-bezier(.25,0,1,1);--ease-in-2:cubic-bezier(.50,0,1,1);--ease-in-3:cubic-bezier(.70,0,1,1);--ease-in-4:cubic-bezier(.90,0,1,1);--ease-in-5:cubic-bezier(1,0,1,1);--ease-out-1:cubic-bezier(0,0,.75,1);--ease-out-2:cubic-bezier(0,0,.50,1);--ease-out-3:cubic-bezier(0,0,.3,1);--ease-out-4:cubic-bezier(0,0,.1,1);--ease-out-5:cubic-bezier(0,0,0,1);--ease-in-out-1:cubic-bezier(.1,0,.9,1);--ease-in-out-2:cubic-bezier(.3,0,.7,1);--ease-in-out-3:cubic-bezier(.5,0,.5,1);--ease-in-out-4:cubic-bezier(.7,0,.3,1);--ease-in-out-5:cubic-bezier(.9,0,.1,1);--ease-elastic-1:cubic-bezier(.5,.75,.75,1.25);--ease-elastic-2:cubic-bezier(.5,1,.75,1.25);--ease-elastic-3:cubic-bezier(.5,1.25,.75,1.25);--ease-elastic-4:cubic-bezier(.5,1.5,.75,1.25);--ease-elastic-5:cubic-bezier(.5,1.75,.75,1.25);--ease-squish-1:cubic-bezier(.5,-.1,.1,1.5);--ease-squish-2:cubic-bezier(.5,-.3,.1,1.5);--ease-squish-3:cubic-bezier(.5,-.5,.1,1.5);--ease-squish-4:cubic-bezier(.5,-.7,.1,1.5);--ease-squish-5:cubic-bezier(.5,-.9,.1,1.5);--ease-step-1:steps(2);--ease-step-2:steps(3);--ease-step-3:steps(4);--ease-step-4:steps(7);--ease-step-5:steps(10)}.hamburger-icon-container{background:0 0;border:none;content:"min-width: 1025px"}@media (min-width:1025px){.hamburger-icon-container{display:none}}.hamburger-icon-container .hamburger-icon{display:none}.hamburger-icon-container .hamburger-icon+label{user-select:none;position:relative;display:inline-block;width:32px;height:23px;box-sizing:content-box;border:0 solid transparent;z-index:1050;line-height:23px;white-space:nowrap;background:0 0;border-radius:0}.hamburger-icon-container .hamburger-icon+label span{display:inline-block;position:absolute;left:100%;margin-top:1px;transition:color .25s;margin-left:0}.hamburger-icon-container .hamburger-icon+label span::after,.hamburger-icon-container .hamburger-icon+label span::before{content:"";display:inline-block;min-width:10px;width:6.4px}.hamburger-icon-container .hamburger-icon+label i,.hamburger-icon-container .hamburger-icon+label::after,.hamburger-icon-container .hamburger-icon+label::before{position:absolute;left:0;display:block;will-change:transform,background-color;width:32px;height:3px;border-radius:0;transition:transform .25s,background-color .25s;backface-visibility:hidden;outline:1px solid transparent}.hamburger-icon-container .hamburger-icon+label i{top:10px;font-size:0;color:transparent;line-height:0}.hamburger-icon-container .hamburger-icon+label::after,.hamburger-icon-container .hamburger-icon+label::before{content:""}.hamburger-icon-container .hamburger-icon+label::before{top:0}.hamburger-icon-container .hamburger-icon+label::after{bottom:0}.hamburger-icon-container .hamburger-icon+label:hover{cursor:pointer}.hamburger-icon-container .hamburger-icon:checked+label i{transform:scaleX(.001)}.hamburger-icon-container .hamburger-icon:checked+label::before{transform:translateY(10px) rotate(45deg)}.hamburger-icon-container .hamburger-icon:checked+label::after{transform:translateY(-10px) rotate(-45deg)}.hamburger-icon-container .hamburger-icon+label i,.hamburger-icon-container .hamburger-icon+label::after,.hamburger-icon-container .hamburger-icon+label::before{background-color:var(--primary-accent)}.docs-header{display:flex;padding:15px;border-bottom:1px solid var(--accent-color);justify-content:space-between;position:sticky;top:0;z-index:100;background:var(--background)}.docs-header *{padding:0;margin:0}.docs-header .docs-header__link-icon{display:flex;align-content:center}.docs-header .docs-header__link-icon .beyond-icon{height:20px;width:20px}.docs-header .header-logo{display:flex;gap:15px;align-items:center}.docs-header .header-logo .img-logo{height:25px}[data-beyond-mode=dark] .docs-header .beyond-icon{fill:var(--primary);stroke:var(--primary)}.btn-theme-toggle{--size:24px;--icon-fill:#FFF;--icon-fill-hover:hsl(210 10% 15%);background:0 0;border:none;padding:0;inline-size:var(--size);block-size:var(--size);aspect-ratio:1;border-radius:50%;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;outline-offset:5px}.btn-theme-toggle>svg{inline-size:100%;block-size:100%;stroke-linecap:round;transition:.2s all var(--ease-out-5)}.btn-theme-toggle>svg *{transition:.2s all var(--ease-out-5)}.btn-theme-toggle.btn-theme--dark svg{fill:rgba(var(--text-color),0.8);stroke:rgba(var(--text-color),0.8)}.btn-theme-toggle.btn-theme--dark svg>circle{fill:var(--text-color);stroke:var(--text-color)}.btn-theme-toggle.btn-theme--dark svg .moon>circle{transform:translate(-7px);transition:all .3s var(--ease-out-5)}.btn-theme-toggle.btn-theme--dark svg .sun-beams{display:none}@keyframes rotate{from{transform:rotate(0)}to{opacity:.1}}';
  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 400998086,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");

      var _ts2 = require("@beyond-js/kernel/core/ts");

      class Store extends _ts2.Events {
        async fetch() {//code
        }

        #value;

        get value() {
          return this.#value;
        }

        toJSON() {
          return this.#value;
        }

        hydrate(cached) {}

      }
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        async fetch() {}

        createStore() {
          return new Store();
        }

      }

      exports.Controller = Controller;
    }
  });
  /*****************************
  INTERNAL MODULE: ./view/finder
  *****************************/

  modules.set('./view/finder', {
    hash: 3667376226,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.finder = finder;

      function finder() {// const selectors = [];
        // const notFound = [];
        // const finder = (item, container, deeper) => {
        //     const selector = container.querySelector(item.name);
        //     if (selector) {
        //         selectors.push(selector);
        //         return
        //     }
        //     notFound.push(item);
        //     if (!deeper) return;
        //
        // }
        // const childrenLayout = document.querySelector('main-layout')
        //     .shadowRoot.querySelector('beyond-layout-children').shadowRoot;
        //
        // window?.beyond.widgets.forEach((item) => finder(item, document, true));
        // if (notFound.length) {
        //     selectors.forEach(selector => {
        //         notFound.forEach(item => {
        //             const child = selector.shadowRoot.querySelector(item.name) || childrenLayout.querySelector(item.name);
        //             if (!child) return;
        //             selectors.push(child);
        //             notFound.slice(notFound.findIndex(i => i.name === item.name), 1);
        //         });
        //     });
        // }
        //
        // selectors.forEach(selector => {
        //     const span = selector.shadowRoot.querySelector('span');
        //     span.setAttribute('data-beyond-mode', localStorage.getItem('__beyond-mode'));
        // });
      }
    }
  });
  /********************************
  INTERNAL MODULE: ./view/hamburger
  ********************************/

  modules.set('./view/hamburger', {
    hash: 2056600686,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hamburger = Hamburger;

      var React = require("react");

      var _code = require("@beyond/docs/manager/code");

      function Hamburger({
        onClick
      }) {
        const showMenu = event => {
          event.preventDefault();
          _code.AppManager.menuOpened = !_code.AppManager.menuOpened;
          console.log(1, _code.AppManager.menuOpened);
        };

        return React.createElement("button", {
          className: "hamburger-icon-container",
          onClick: showMenu
        }, React.createElement("input", {
          id: "hamburger__input",
          type: "checkbox",
          className: "hamburger-icon"
        }), React.createElement("label", {
          htmlFor: "hamburger__input"
        }, React.createElement("i", null), React.createElement("span", null)), React.createElement("em", null));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./view/notice
  *****************************/

  modules.set('./view/notice', {
    hash: 2514501766,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      function Notice() {
        return React.createElement("section", {
          className: "flex-container flex-center header-notice bg-primary-accent pd-5"
        }, "Beta version");
      }
    }
  });
  /**************************
  INTERNAL MODULE: ./view/svg
  **************************/

  modules.set('./view/svg', {
    hash: 3481339,
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
  /*****************************
  INTERNAL MODULE: ./view/switch
  *****************************/

  modules.set('./view/switch', {
    hash: 284389258,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Switch = Switch;

      var React = require("react");

      var _svg = require("./svg");

      var _finder = require("./finder");

      var _ts = require("@beyond-js/kernel/core/ts");

      const key = '__beyond-mode';

      function Switch() {
        const ref = React.useRef(null);
        const defaultTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        let userTheme = window?.localStorage.getItem(key) ?? defaultTheme;
        const cls = `btn-theme-toggle btn-theme--${userTheme}`;

        const setTheme = theme => {
          const container = document.querySelector('html');
          container.setAttribute('data-beyond-mode', theme);
          const current = `btn-theme--${theme}`;
          const another = `btn-theme--${theme === 'dark' ? 'light' : 'dark'}`;
          ref?.current.classList.add(current);

          _ts.beyond.widgets.attributes.add('data-beyond-mode', theme);

          if (ref?.current.classList.contains(another)) ref?.current.classList.remove(another);
          (0, _finder.finder)();
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
  /*****************************
  INTERNAL MODULE: ./view/widget
  *****************************/

  modules.set('./view/widget', {
    hash: 4220869312,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _switch = require("./switch");

      var _code = require("@beyond/docs/ui/icons/code");

      var _hamburger = require("./hamburger");

      var _notice = require("./notice");
      /*bundle*/


      function Widget() {
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, null), React.createElement("header", {
          className: "docs-header"
        }, React.createElement("div", {
          className: "container flex-container space-between ph-15"
        }, React.createElement(_hamburger.Hamburger, null), React.createElement("section", {
          className: "header-logo"
        }, React.createElement("div", {
          className: "flex-center-y right-col"
        }, React.createElement("img", {
          src: "/images/beyond-logo.png",
          className: "img-logo",
          alt: "Beyond the universal meta framework"
        }))), React.createElement("div", {
          className: "flex-center-y right-content"
        }, React.createElement("span", {
          className: "version"
        }, "1.0.0"), React.createElement(_switch.Switch, null), React.createElement("a", {
          className: "docs-header__link-icon",
          target: "_blank",
          href: "http://github.com"
        }, React.createElement(_code.AppIcon, {
          icon: "github"
        }))))));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.Widget = require('./view/widget').Widget;
  };

  let Controller, Widget; // Module exports

  _exports2.Widget = Widget;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.Widget = Widget = require('./view/widget').Widget;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});