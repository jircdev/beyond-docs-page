define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/controllers", "@beyond-js/kernel/core", "react", "@beyond/docs/manager", "@beyond/docs/ui/icons", "@beyond/ui/link", "@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond-js/kernel/styles"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/header",
    "bundle": "header"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/widgets/render", dependency_1], ["@beyond-js/react-widgets/controllers", dependency_2], ["@beyond-js/kernel/core", dependency_3], ["react", dependency_4], ["@beyond-js/kernel/styles", dependency_10]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/manager", "@beyond/docs/ui/icons", "@beyond/ui/link", "@beyond/ui/image", "@beyond/docs/components/theme-button"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "beyond-docs-header",
    "id": "@beyond/docs/header"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/header');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3945956969,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _core = require("@beyond-js/kernel/core");

      var _widget = require("./view/widget");

      class Store extends _core.Events {
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


      class Controller extends _controllers.ReactWidgetController {
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
    hash: 3551581010,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hamburger = Hamburger;

      var React = require("react");

      var _manager = require("@beyond/docs/manager");

      function Hamburger({
        onClick
      }) {
        const showMenu = event => {
          event.preventDefault();
          _manager.AppManager.menuOpened = !_manager.AppManager.menuOpened;
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
    hash: 149152790,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _icons = require("@beyond/docs/ui/icons");

      var _link = require("@beyond/ui/link");

      var _hamburger = require("./hamburger");

      var _notice = require("./notice");

      var _image = require("@beyond/ui/image");

      var _themeButton = require("@beyond/docs/components/theme-button");
      /*bundle*/


      function Widget() {
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, null), React.createElement("header", {
          className: "docs-header"
        }, React.createElement("div", {
          className: "container flex-container space-between ph-15"
        }, React.createElement("section", {
          className: "header-logo"
        }, React.createElement("div", null, React.createElement(_hamburger.Hamburger, null), React.createElement(_link.Link, {
          href: "/"
        }, React.createElement(_image.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo",
          alt: "Beyond the universal meta framework"
        })))), React.createElement("div", {
          className: "flex-center-y right-content"
        }, React.createElement("span", {
          className: "version"
        }, "1.0.0"), React.createElement(_themeButton.ThemeToggleButton, null), React.createElement(_link.Elink, {
          className: "docs-header__link-icon",
          href: "http://github.com"
        }, React.createElement(_icons.AppIcon, {
          icon: "github"
        }))))));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./view/widget",
    "from": "Widget",
    "name": "Widget"
  }];
  let Controller, Widget; // Module exports

  _exports.Widget = Widget;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Widget') && (_exports.Widget = Widget = require ? require('./view/widget').Widget : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});