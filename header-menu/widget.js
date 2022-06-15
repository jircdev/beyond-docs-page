define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/styles/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/texts/ts", "react", "@beyond/docs/manager/code", "@beyond/ui/image/code", "@beyond/docs/components/theme-button/code", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/ui/icons/code", "@beyond/ui/modal/code", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/header-menu/widget").package();

  externals.register(new Map([["react", dependency_5]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/manager/code", "@beyond/ui/image/code", "@beyond/docs/components/theme-button/code", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/ui/icons/code", "@beyond/ui/modal/code"]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "docs-header-menu",
    "id": "@beyond/docs/header-menu/widget"
  }]);

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/header-menu/widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3776050092,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _views = require("./views");

      var _store = require("./store");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        get Widget() {
          return _views.TopHeader;
        }

        createStore() {
          return new _store.Store(this.body);
        }

      }

      exports.Controller = Controller;
    }
  });
  /***********************
  INTERNAL MODULE: ./store
  ***********************/

  ims.set('./store', {
    hash: 1504520959,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Store = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _ts2 = require("@beyond-js/kernel/texts/ts");

      var _beyond_context = require("beyond_context");

      class Store extends _ts.Events {
        #loading = false;

        get loading() {
          return this.#loading;
        }

        #value = [];

        get value() {
          return this.#value;
        }

        #hydrated = false;

        get hydrated() {
          return this.#hydrated;
        }

        #container;

        get container() {
          return this.#container;
        }

        get ready() {
          return this.#texts.ready;
        }

        #texts;

        get texts() {
          return this.#texts.value;
        }

        constructor(container) {
          super();
          this.#container = container;
          this.#texts = new _ts2.CurrentTexts(_beyond_context.module.resource, true);
          this.#texts.bind('change', this.triggerChange);
        }

        triggerChange = () => {
          this.trigger('change');
        };

        async fetch() {}

        hydrate(cached) {}

        toJSON() {}

      }

      exports.Store = Store;
    }
  });
  /**************************************
  INTERNAL MODULE: ./views/hamburger-menu
  **************************************/

  ims.set('./views/hamburger-menu', {
    hash: 776676798,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HamburgerMenu = HamburgerMenu;

      var React = require("react");

      var _ts = require("@beyond-js/widgets/render/ts");

      function HamburgerMenu() {
        const showMenu = event => {
          event.preventDefault();
          const menu = [..._ts.widgets.instances].find(item => item.localName === 'menu-layout');
          const option = menu.getAttribute('opened') === 'true' ? 'false' : 'true';
          menu.setAttribute('opened', option);
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
  /*********************************
  INTERNAL MODULE: ./views/hamburger
  *********************************/

  ims.set('./views/hamburger', {
    hash: 1511364435,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hamburger = Hamburger;

      var React = require("react");

      function Hamburger() {
        const showMenu = event => {
          event.preventDefault();
          const target = event.currentTarget;
          const menu = target.closest('.top__header').querySelector('.header__menu');
          target.closest('.top__header').querySelector('.menu-list__container').classList.toggle('opened');
          menu.classList.toggle('opened');
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
  INTERNAL MODULE: ./views/index
  *****************************/

  ims.set('./views/index', {
    hash: 460627773,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TopHeader = TopHeader;

      var React = require("react");

      var _code = require("@beyond/ui/image/code");

      var _hamburger = require("./hamburger");

      var _code2 = require("@beyond/docs/components/theme-button/code");

      var _code3 = require("@beyond/ui/link/code");

      var _languageAction = require("./language-action");

      var _code4 = require("@beyond/docs/store/code");

      var _notice = require("./notice");

      var _beyond_context = require("beyond_context");

      var _hamburgerMenu = require("./hamburger-menu");

      function TopHeader({
        attributes,
        widget,
        store
      }) {
        const [ready, texts] = (0, _code4.useTexts)(_beyond_context.module.resource);
        if (!ready) return null;
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, {
          texts: texts
        }), React.createElement("section", {
          className: "top__header"
        }, React.createElement("nav", {
          className: "menu-container container flex-container flex-h-end"
        }, React.createElement("div", {
          className: "mobile__header"
        }, React.createElement(_hamburgerMenu.HamburgerMenu, null), React.createElement(_code3.Link, {
          href: "/"
        }, React.createElement(_code.BeyondImage, {
          src: "/images/beyond-logo.png",
          alt: "beyondjs"
        })), React.createElement(_hamburger.Hamburger, null)), React.createElement("div", {
          className: "menu-list__container"
        }, React.createElement("ul", {
          className: "header__menu"
        }, React.createElement("li", null, React.createElement(_code2.ThemeToggleButton, null)), React.createElement("li", null, React.createElement(_languageAction.LanguageAction, null)), React.createElement("li", null, React.createElement(_code3.Link, {
          href: "/docs/tutorial/web"
        }, texts.tutorial)), React.createElement("li", null, React.createElement(_code3.Link, {
          href: "/docs/intro"
        }, texts.documentation)), React.createElement("li", null, React.createElement(_code3.Link, {
          href: "/examples"
        }, texts.examples)))))));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./views/language-action
  ***************************************/

  ims.set('./views/language-action', {
    hash: 3291368258,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LanguageAction = LanguageAction;

      var React = require("react");

      var _code = require("@beyond/docs/ui/icons/code");

      var _modal = require("./modal");

      function LanguageAction() {
        const [toggle, setToggle] = React.useState(false);

        const onClick = event => {
          event.preventDefault();
          setToggle(!toggle);
        };

        return React.createElement(React.Fragment, null, React.createElement(_code.AppIcon, {
          className: "language-icon",
          icon: "languages",
          onClick: onClick
        }), toggle && React.createElement(_modal.LanguagesModal, {
          onClose: () => setToggle(false)
        }));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/modal
  *****************************/

  ims.set('./views/modal', {
    hash: 4148985771,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LanguagesModal = LanguagesModal;

      var React = require("react");

      var _code = require("@beyond/ui/modal/code");

      var _ts = require("@beyond-js/kernel/core/ts");

      function LanguagesModal({
        onClose
      }) {
        const [selected, setSelected] = React.useState(undefined);

        const onConfirm = event => {
          console.log(2, 'selected', selected);
          _ts.beyond.languages.current = selected;
          onClose();
        };

        const onClick = event => {
          const lang = event.currentTarget.dataset.language;
          setSelected(lang);
        };

        const disabled = {};
        if (!selected) disabled.disabled = true;
        return React.createElement(React.Fragment, null, React.createElement(_code.BeyondModal, {
          show: true,
          className: "modal-languages",
          onClose: onClose
        }, React.createElement("ul", {
          className: "languages-list"
        }, React.createElement("li", {
          onClick: onClick,
          className: `${selected === 'en' ? ' item-selected' : ''}`,
          "data-language": "en"
        }, React.createElement("span", {
          className: "current-name"
        }, "English"), "English"), React.createElement("li", {
          onClick: onClick,
          className: `${selected === 'es' ? ' item-selected' : ''}`,
          "data-language": "es"
        }, React.createElement("span", {
          className: "current-name"
        }, "Spanish"), "Espa\u00F1ol")), React.createElement("div", {
          className: "actions"
        }, React.createElement("button", { ...disabled,
          onClick: onConfirm,
          className: "btn btn-primary "
        }, "Confirm"))));
      }
    }
  });
  /******************************
  INTERNAL MODULE: ./views/notice
  ******************************/

  ims.set('./views/notice', {
    hash: 2916186733,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      function Notice({
        texts: {
          notice
        }
      }) {
        return React.createElement("section", {
          className: "flex-container flex-center header-notice bg-primary-accent pd-5"
        }, notice);
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
  };

  let Controller; // Module exports

  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});