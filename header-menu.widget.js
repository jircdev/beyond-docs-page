define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/controllers", "@beyond-js/kernel/core", "@beyond-js/kernel/texts", "react", "@beyond/docs/manager", "@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond/ui/link", "@beyond/docs/store", "@beyond-js/kernel/routing", "@beyond/docs/ui/icons", "@beyond/ui/modal"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/header-menu",
    "multibundle": true,
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_6]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/manager", "@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond/ui/link", "@beyond/docs/store", "@beyond/docs/ui/icons", "@beyond/ui/modal"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "docs-header-menu",
    "id": "@beyond/docs/header-menu.widget"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/header-menu.widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3466249307,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _views = require("./views");

      var _store = require("./store");
      /*bundle*/


      class Controller extends _controllers.ReactWidgetController {
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
    hash: 3067965660,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Store = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _texts = require("@beyond-js/kernel/texts");

      var _beyond_context = require("beyond_context");

      class Store extends _core.Events {
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
          this.#texts = new _texts.CurrentTexts(_beyond_context.module.resource, true);
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
    hash: 1186676486,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HamburgerMenu = HamburgerMenu;

      var React = require("react");

      var _render = require("@beyond-js/widgets/render");

      function HamburgerMenu() {
        const showMenu = event => {
          event.preventDefault();
          const menu = [..._render.widgets.instances].find(item => item.localName === 'menu-layout');
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
    hash: 2069213763,
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
    hash: 1944484019,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TopHeader = TopHeader;

      var React = require("react");

      var _image = require("@beyond/ui/image");

      var _hamburger = require("./hamburger");

      var _themeButton = require("@beyond/docs/components/theme-button");

      var _link = require("@beyond/ui/link");

      var _languageAction = require("./language-action");

      var _store = require("@beyond/docs/store");

      var _notice = require("./notice");

      var _beyond_context = require("beyond_context");

      var _hamburgerMenu = require("./hamburger-menu");

      var _routing = require("@beyond-js/kernel/routing");

      function TopHeader({
        attributes,
        widget,
        store
      }) {
        const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.resource);
        const [url, setUrl] = React.useState(_routing.routing.uri?.uri);
        const ref = React.useRef(null);
        (0, _store.useBinder)([_routing.routing], () => setUrl(_routing.routing.uri.uri));
        React.useEffect(() => {
          document.querySelector("body").addEventListener('scroll', () => {
            if (!ref?.current) return;
            if (ref.current.offsetTop > 50) ref.current.classList.add('is-sticky');else ref.current.classList.remove('is-sticky');
          });
          if (!ref?.current) return;
          const parent = ref.current;
          const items = [...parent.querySelectorAll('a')];
          const menu = parent.querySelector('.menu-list__container');
          menu.classList.toggle('opened');
          items.forEach(item => {
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();

              if (event.currentTarget.href) {
                _routing.routing.pushState(event.currentTarget.href);
              }

              menu.classList.toggle('opened');
            };

            item.addEventListener('click', onClick);
          });
        }, [ref?.current]);
        if (!ready) return null;
        const isHome = url === "/";
        return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, {
          texts: texts
        }), React.createElement("section", {
          ref: ref,
          className: `top__header${isHome ? ' home--header' : ''}`
        }, React.createElement("nav", {
          className: "menu-container flex-container flex-h-end"
        }, React.createElement("div", {
          className: "mobile__header"
        }, !isHome && React.createElement(_hamburgerMenu.HamburgerMenu, null), React.createElement(_link.Link, {
          href: "/"
        }, React.createElement(_image.BeyondImage, {
          src: "/images/beyond-logo.png",
          alt: "beyondjs"
        })), React.createElement(_hamburger.Hamburger, null)), React.createElement("div", {
          className: "menu-list__container"
        }, React.createElement("ul", {
          className: "header__menu"
        }, React.createElement("li", null, React.createElement(_themeButton.ThemeToggleButton, null)), React.createElement("li", null, React.createElement(_languageAction.LanguageAction, null)), React.createElement("li", null, React.createElement("a", {
          href: "/docs/tutorial/start"
        }, texts.tutorial)), React.createElement("li", null, React.createElement("a", {
          href: "/docs/intro"
        }, texts.documentation)), React.createElement("li", null, React.createElement("a", {
          href: "/examples"
        }, texts.examples)))))));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./views/language-action
  ***************************************/

  ims.set('./views/language-action', {
    hash: 2424714184,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LanguageAction = LanguageAction;

      var React = require("react");

      var _icons = require("@beyond/docs/ui/icons");

      var _modal = require("./modal");

      function LanguageAction() {
        const [toggle, setToggle] = React.useState(false);

        const onClick = event => {
          event.preventDefault();
          setToggle(!toggle);
        };

        return React.createElement(React.Fragment, null, React.createElement(_icons.AppIcon, {
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
    hash: 2053518718,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LanguagesModal = LanguagesModal;

      var React = require("react");

      var _modal = require("@beyond/ui/modal");

      var _core = require("@beyond-js/kernel/core");

      function LanguagesModal({
        onClose
      }) {
        const [selected, setSelected] = React.useState(undefined);

        const onConfirm = event => {
          console.log(2, 'selected', selected);
          _core.beyond.languages.current = selected;
          onClose();
        };

        const onClick = event => {
          const lang = event.currentTarget.dataset.language;
          setSelected(lang);
        };

        const disabled = {};
        if (!selected) disabled.disabled = true;
        return React.createElement(React.Fragment, null, React.createElement(_modal.BeyondModal, {
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
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});