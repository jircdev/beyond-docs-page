System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "@beyond-js/react-widgets@18.21.1/base", "@beyond-js/kernel@0.1.7/core", "@beyond-js/kernel@0.1.7/texts", "react@18.2.0", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/html", "@beyond/docs@1/components/theme-button", "@beyond/ui@1.0.0/link", "@beyond/docs@1/store", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/modal"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_3 = _beyondJsReactWidgets18211Base;
    }, function (_beyondJsKernel017Core) {
      dependency_4 = _beyondJsKernel017Core;
    }, function (_beyondJsKernel017Texts) {
      dependency_5 = _beyondJsKernel017Texts;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_beyondUi100Image) {
      dependency_7 = _beyondUi100Image;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_8 = _beyondDocs1ComponentsHtml;
    }, function (_beyondDocs1ComponentsThemeButton) {
      dependency_9 = _beyondDocs1ComponentsThemeButton;
    }, function (_beyondUi100Link) {
      dependency_10 = _beyondUi100Link;
    }, function (_beyondDocs1Store) {
      dependency_11 = _beyondDocs1Store;
    }, function (_beyondJsKernel017Routing) {
      dependency_12 = _beyondJsKernel017Routing;
    }, function (_beyondDocs1UiIcons) {
      dependency_13 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Modal) {
      dependency_14 = _beyondUi100Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/header-menu",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@beyond/ui/image', dependency_7], ['@beyond/docs/components/html', dependency_8], ['@beyond/docs/components/theme-button', dependency_9], ['@beyond/ui/link', dependency_10], ['@beyond/docs/store', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond/docs/ui/icons', dependency_13], ['@beyond/ui/modal', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "docs-header-menu",
        "vspecifier": "@beyond/docs@1/header-menu.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/header-menu.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 280435798,
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
        hash: 1202725988,
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
              this.#texts = new _texts.CurrentTexts(_beyond_context.module.specifier, true);
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
        hash: 2403695170,
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
              const menu = [..._render.widgets.instances].find(item => item.localName === "menu-layout");
              console.log(12, menu.getAttribute("opened"));
              const option = menu.getAttribute("opened") === "true" ? "false" : "true";
              menu.setAttribute("opened", option);
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
        hash: 4160690013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopHeader = TopHeader;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
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
            const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.specifier);
            const [url, setUrl] = React.useState(_routing.routing.uri?.uri);
            const ref = React.useRef(null);
            (0, _store.useBinder)([_routing.routing], () => setUrl(_routing.routing.uri.uri));
            React.useEffect(() => {
              document.querySelector("body").addEventListener("scroll", () => {
                if (!ref?.current) return;
                if (ref.current.offsetTop > 50) ref.current.classList.add("is-sticky");else ref.current.classList.remove("is-sticky");
              });
              if (!ref?.current) return;
              const parent = ref.current;
              const items = [...parent.querySelectorAll("a")];
              const menu = parent.querySelector(".menu-list__container");
              menu.classList.toggle("opened");
              items.forEach(item => {
                const onClick = event => {
                  event.preventDefault();
                  event.stopPropagation();
                  if (event.currentTarget.href) {
                    _routing.routing.pushState(event.currentTarget.href);
                  }
                  menu.classList.toggle("opened");
                };
                item.addEventListener("click", onClick);
              });
            }, [ref?.current]);
            if (!ready) return null;
            const isHome = url === "/";
            return React.createElement(React.Fragment, null, React.createElement(_notice.Notice, {
              texts: texts
            }), React.createElement("section", {
              ref: ref,
              className: `top__header${isHome ? " home--header" : ""}`
            }, React.createElement("nav", {
              className: "menu-container flex-container flex-h-end"
            }, React.createElement("div", {
              className: "mobile__header"
            }, React.createElement(_link.Link, {
              href: "/"
            }, React.createElement(_html.BeyondLogo, {
              className: "header__logo",
              alt: "BeyondJS univesal modules framework"
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
            }, React.createElement("button", {
              ...disabled,
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQ0lwRTtjQUFTQyxTQUFTLEVBQUM7WUFBaUUsR0FDL0VtRSxNQUFNLENBQ0Q7VUFFbEIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVG9wSGVhZGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsImJvZHkiLCJleHBvcnRzIiwiRXZlbnRzIiwibG9hZGluZyIsInZhbHVlIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJyZWFkeSIsInRleHRzIiwiY29uc3RydWN0b3IiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJiaW5kIiwidHJpZ2dlckNoYW5nZSIsInRyaWdnZXIiLCJmZXRjaCIsImh5ZHJhdGUiLCJjYWNoZWQiLCJ0b0pTT04iLCJIYW1idXJnZXIiLCJzaG93TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWVudSIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJ0eXBlIiwiaHRtbEZvciIsIkhhbWJ1cmdlck1lbnUiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiZmluZCIsIml0ZW0iLCJsb2NhbE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwib3B0aW9uIiwic2V0QXR0cmlidXRlIiwiYXR0cmlidXRlcyIsIndpZGdldCIsInN0b3JlIiwidXJsIiwic2V0VXJsIiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImFkZCIsInJlbW92ZSIsInBhcmVudCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdG9wUHJvcGFnYXRpb24iLCJocmVmIiwicHVzaFN0YXRlIiwiaXNIb21lIiwiTm90aWNlIiwiTGluayIsIkJleW9uZExvZ28iLCJhbHQiLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxhbmd1YWdlQWN0aW9uIiwidHV0b3JpYWwiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiLCJzZXRUb2dnbGUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlc01vZGFsIiwib25DbG9zZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJvbkNvbmZpcm0iLCJiZXlvbmQiLCJsYW5ndWFnZXMiLCJsYW5nIiwiZGF0YXNldCIsImxhbmd1YWdlIiwiZGlzYWJsZWQiLCJCZXlvbmRNb2RhbCIsInNob3ciLCJub3RpY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGFtYnVyZ2VyL21lbnUudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9sYW5ndWFnZS1hY3Rpb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL21vZGFsLnRzeCIsIndpZGdldC90cy92aWV3cy9ub3RpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=