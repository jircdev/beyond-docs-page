define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond-js/kernel/core/ts", "react", "@beyond/docs/manager/code", "@beyond/docs/ui/icons/code", "@beyond/ui/link/code", "@beyond/ui/image/code", "@beyond/docs/components/theme-button/code", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Widget = _exports2.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/header/widget").package();

  externals.register(new Map([["react", dependency_3]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/manager/code", "@beyond/docs/ui/icons/code", "@beyond/ui/link/code", "@beyond/ui/image/code", "@beyond/docs/components/theme-button/code"]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "beyond-docs-header",
    "id": "@beyond/docs/header/widget"
  }]);

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/header/widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1079634450,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _ts2 = require("@beyond-js/kernel/core/ts");

      var _widget = require("./view/widget");

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
        get Widget() {
          return _widget.Widget;
        }

        async fetch() {}

        createStore() {
          return new Store();
        }

      }

      exports.Controller = Controller;
    }
  });
  /********************************
  INTERNAL MODULE: ./view/hamburger
  ********************************/

  ims.set('./view/hamburger', {
    hash: 4264092710,
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

  ims.set('./view/notice', {
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
  /*****************************
  INTERNAL MODULE: ./view/widget
  *****************************/

  ims.set('./view/widget', {
    hash: 2347806452,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _code = require("@beyond/docs/ui/icons/code");

      var _code2 = require("@beyond/ui/link/code");

      var _hamburger = require("./hamburger");

      var _notice = require("./notice");

      var _code3 = require("@beyond/ui/image/code");

      var _code4 = require("@beyond/docs/components/theme-button/code");
      /*bundle*/


      function Widget() {
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, null), React.createElement("header", {
          className: "docs-header"
        }, React.createElement("div", {
          className: "container flex-container space-between ph-15"
        }, React.createElement("section", {
          className: "header-logo"
        }, React.createElement("div", null, React.createElement(_hamburger.Hamburger, null), React.createElement(_code2.Link, {
          href: "/"
        }, React.createElement(_code3.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo",
          alt: "Beyond the universal meta framework"
        })))), React.createElement("div", {
          className: "flex-center-y right-content"
        }, React.createElement("span", {
          className: "version"
        }, "1.0.0"), React.createElement(_code4.ThemeToggleButton, null), React.createElement(_code2.Elink, {
          className: "docs-header__link-icon",
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
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});