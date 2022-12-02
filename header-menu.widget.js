System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "@beyond-js/react-widgets@18.20.1/base", "@beyond-js/kernel@0.1.0/core", "@beyond-js/kernel@0.1.0/texts", "react@18.2.0", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/theme-button", "@beyond/ui@1.0.0/link", "@beyond/docs@1/store", "@beyond-js/kernel@0.1.0/routing", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/modal"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_2 = _beyondJsKernel010Styles;
    }, function (_beyondJsReactWidgets18201Base) {
      dependency_3 = _beyondJsReactWidgets18201Base;
    }, function (_beyondJsKernel010Core) {
      dependency_4 = _beyondJsKernel010Core;
    }, function (_beyondJsKernel010Texts) {
      dependency_5 = _beyondJsKernel010Texts;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_beyondUi100Image) {
      dependency_7 = _beyondUi100Image;
    }, function (_beyondDocs1ComponentsThemeButton) {
      dependency_8 = _beyondDocs1ComponentsThemeButton;
    }, function (_beyondUi100Link) {
      dependency_9 = _beyondUi100Link;
    }, function (_beyondDocs1Store) {
      dependency_10 = _beyondDocs1Store;
    }, function (_beyondJsKernel010Routing) {
      dependency_11 = _beyondJsKernel010Routing;
    }, function (_beyondDocs1UiIcons) {
      dependency_12 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Modal) {
      dependency_13 = _beyondUi100Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@beyond/ui/image', dependency_7], ['@beyond/docs/components/theme-button', dependency_8], ['@beyond/ui/link', dependency_9], ['@beyond/docs/store', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond/docs/ui/icons', dependency_12], ['@beyond/ui/modal', dependency_13]]);
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
        hash: 243993717,
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
            const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.specifier);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7WUFBQ2pFLEtBQUssRUFBRTtjQUFDNEY7WUFBTTtVQUFDLENBQUM7WUFDcEMsT0FDSXJFO2NBQVNDLFNBQVMsRUFBQztZQUFpRSxHQUMvRW9FLE1BQU0sQ0FDRDtVQUVsQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJUb3BIZWFkZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlIiwiYm9keSIsImV4cG9ydHMiLCJFdmVudHMiLCJsb2FkaW5nIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsInJlYWR5IiwidGV4dHMiLCJjb25zdHJ1Y3RvciIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImJpbmQiLCJ0cmlnZ2VyQ2hhbmdlIiwidHJpZ2dlciIsImZldGNoIiwiaHlkcmF0ZSIsImNhY2hlZCIsInRvSlNPTiIsIkhhbWJ1cmdlciIsInNob3dNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZW51IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsInR5cGUiLCJodG1sRm9yIiwiSGFtYnVyZ2VyTWVudSIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJmaW5kIiwiaXRlbSIsImxvY2FsTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJvcHRpb24iLCJzZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwid2lkZ2V0Iiwic3RvcmUiLCJ1cmwiLCJzZXRVcmwiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYWRkIiwicmVtb3ZlIiwicGFyZW50IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInN0b3BQcm9wYWdhdGlvbiIsImhyZWYiLCJwdXNoU3RhdGUiLCJpc0hvbWUiLCJOb3RpY2UiLCJMaW5rIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxhbmd1YWdlQWN0aW9uIiwidHV0b3JpYWwiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiLCJzZXRUb2dnbGUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlc01vZGFsIiwib25DbG9zZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJvbkNvbmZpcm0iLCJiZXlvbmQiLCJsYW5ndWFnZXMiLCJsYW5nIiwiZGF0YXNldCIsImxhbmd1YWdlIiwiZGlzYWJsZWQiLCJCZXlvbmRNb2RhbCIsInNob3ciLCJub3RpY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvc3RvcmUudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9tZW51LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9oZWFkZXItbWVudS93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2hlYWRlci1tZW51L3dpZGdldC90cy92aWV3cy9sYW5ndWFnZS1hY3Rpb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2hlYWRlci1tZW51L3dpZGdldC90cy92aWV3cy9tb2RhbC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvaGVhZGVyLW1lbnUvd2lkZ2V0L3RzL3ZpZXdzL25vdGljZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==