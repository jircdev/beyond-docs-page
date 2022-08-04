define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/base", "@beyond-js/kernel/core", "@beyond-js/kernel/texts", "react@17.0.2", "@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond/ui/link", "@beyond/docs/store", "@beyond-js/kernel/routing", "@beyond/docs/ui/icons", "@beyond/ui/modal"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/header-menu",
    "multibundle": true,
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_6]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/image", "@beyond/docs/components/theme-button", "@beyond/ui/link", "@beyond/docs/store", "@beyond/docs/ui/icons", "@beyond/ui/modal"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "docs-header-menu",
    "id": "@beyond/docs/header-menu.widget"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/header-menu.widget');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1814287886,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _base = require("@beyond-js/react-widgets/base");

      var _views = require("./views");

      var _store = require("./store");
      /*bundle*/


      class Controller extends _base.ReactWidgetController {
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
  /***************************************
  INTERNAL MODULE: ./views/hamburger/index
  ***************************************/

  ims.set('./views/hamburger/index', {
    hash: 657012813,
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
  /**************************************
  INTERNAL MODULE: ./views/hamburger/menu
  **************************************/

  ims.set('./views/hamburger/menu', {
    hash: 1973837247,
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
          console.log(12, menu.getAttribute('opened'));
          const option = menu.getAttribute('opened') === 'true' ? 'false' : 'true';
          menu.setAttribute('opened', option);
          console.log(10, option);
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
    hash: 3663676205,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TopHeader = TopHeader;

      var React = require("react");

      var _image = require("@beyond/ui/image");

      var _themeButton = require("@beyond/docs/components/theme-button");

      var _link = require("@beyond/ui/link");

      var _languageAction = require("./language-action");

      var _store = require("@beyond/docs/store");

      var _notice = require("./notice");

      var _beyond_context = require("beyond_context");

      var _menu = require("./hamburger/menu");

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
        }, React.createElement(_link.Link, {
          href: "/"
        }, React.createElement(_image.BeyondImage, {
          src: "/images/beyond-logo.png",
          alt: "beyondjs"
        })), React.createElement("div", {
          className: "header-mobile-menu"
        }, React.createElement("ul", {
          className: "header__all__menu"
        }, React.createElement("li", null, React.createElement(_themeButton.ThemeToggleButton, null)), React.createElement("li", null, React.createElement(_languageAction.LanguageAction, null)), React.createElement("li", null, React.createElement(_menu.HamburgerMenu, null))))), React.createElement("div", {
          className: "menu-list__container"
        }, React.createElement("ul", {
          className: "header__menu"
        }, React.createElement("li", null, React.createElement("a", {
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
    hash: 1534267421,
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
          className: "btn-header-menu language-icon",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0lBLG1DQUNRa0UsUUFEUmxFO1VBQ2tCRSxPQUFPLEVBQUUwRCxTQUQzQjVEO1VBQ3NDQyxTQUFTLEVBQUM7UUFEaERELEdBQ2tFLFNBRGxFQSxDQURKQSxDQWxCSkEsQ0FESkEsQ0FESjtNQThCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNuREQ7O01BRU0sU0FBVTBDLE1BQVYsQ0FBaUI7UUFBQ2pFLEtBQUssRUFBRTtVQUFDNEY7UUFBRDtNQUFSLENBQWpCLEVBQWtDO1FBQ3BDLE9BQ0lyRTtVQUFTQyxTQUFTLEVBQUM7UUFBbkJELEdBQ0txRSxNQURMckUsQ0FESjtNQUtIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlRvcEhlYWRlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmUiLCJib2R5IiwiRXZlbnRzIiwibG9hZGluZyIsInZhbHVlIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJyZWFkeSIsInRleHRzIiwiY29uc3RydWN0b3IiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJyZXNvdXJjZSIsImJpbmQiLCJ0cmlnZ2VyQ2hhbmdlIiwidHJpZ2dlciIsImZldGNoIiwiaHlkcmF0ZSIsImNhY2hlZCIsInRvSlNPTiIsIkhhbWJ1cmdlciIsInNob3dNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZW51IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsInR5cGUiLCJodG1sRm9yIiwiSGFtYnVyZ2VyTWVudSIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJmaW5kIiwiaXRlbSIsImxvY2FsTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJvcHRpb24iLCJzZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwid2lkZ2V0Iiwic3RvcmUiLCJ1cmwiLCJzZXRVcmwiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYWRkIiwicmVtb3ZlIiwicGFyZW50IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInN0b3BQcm9wYWdhdGlvbiIsImhyZWYiLCJwdXNoU3RhdGUiLCJpc0hvbWUiLCJOb3RpY2UiLCJMaW5rIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxhbmd1YWdlQWN0aW9uIiwidHV0b3JpYWwiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiLCJzZXRUb2dnbGUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlc01vZGFsIiwib25DbG9zZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJvbkNvbmZpcm0iLCJiZXlvbmQiLCJsYW5ndWFnZXMiLCJsYW5nIiwiZGF0YXNldCIsImxhbmd1YWdlIiwiZGlzYWJsZWQiLCJCZXlvbmRNb2RhbCIsInNob3ciLCJub3RpY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvc3RvcmUudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9tZW51LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2hlYWRlci1tZW51L3dpZGdldC90cy92aWV3cy9sYW5ndWFnZS1hY3Rpb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2hlYWRlci1tZW51L3dpZGdldC90cy92aWV3cy9tb2RhbC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL25vdGljZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==