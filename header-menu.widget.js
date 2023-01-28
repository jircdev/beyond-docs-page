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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 2870118881,
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
            React.useEffect(() => {
              performance.mark('end');
              // Obtener informe de rendimiento
              const entries = performance.getEntriesByType('mark');
              const start = entries.find(entry => entry.name === 'start').startTime;
              const end = entries.find(entry => entry.name === 'end').startTime;
            }, []);
            (0, _store.useBinder)([_routing.routing], () => setUrl(_routing.routing.uri.uri));
            React.useEffect(() => {
              document.querySelector('body').addEventListener('scroll', () => {
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
            const isHome = url === '/';
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
            }, texts.documentation)))))));
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
        hash: 4096659803,
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
              _core.beyond.languages.current = selected;
              globalThis.location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7WUFBSSxHQUNsR2hFO2NBQU1DLFNBQVMsRUFBQztZQUFjLGFBQWUsaUJBRXpDLENBQ0QsRUFDTEQ7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsR0FDdkJEO2NBQUEsR0FBWTRFLFFBQVE7Y0FBRTFFLE9BQU8sRUFBRWlFLFNBQVM7Y0FBRWxFLFNBQVMsRUFBQztZQUFrQixhQUU3RCxDQUNKLENBQ08sQ0FDWjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUVNLFNBQVVrRCxNQUFNLENBQUM7WUFBQzFFLEtBQUssRUFBRTtjQUFDc0c7WUFBTTtVQUFDLENBQUM7WUFDcEMsT0FDSS9FO2NBQVNDLFNBQVMsRUFBQztZQUFpRSxHQUMvRThFLE1BQU0sQ0FDRDtVQUVsQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJUb3BIZWFkZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlIiwiYm9keSIsImV4cG9ydHMiLCJFdmVudHMiLCJsb2FkaW5nIiwidmFsdWUiLCJoeWRyYXRlZCIsImNvbnRhaW5lciIsInJlYWR5IiwidGV4dHMiLCJjb25zdHJ1Y3RvciIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImJpbmQiLCJ0cmlnZ2VyQ2hhbmdlIiwidHJpZ2dlciIsImZldGNoIiwiaHlkcmF0ZSIsImNhY2hlZCIsInRvSlNPTiIsIkhhbWJ1cmdlciIsInNob3dNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZW51IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJSZWFjdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsInR5cGUiLCJodG1sRm9yIiwiSGFtYnVyZ2VyTWVudSIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJmaW5kIiwiaXRlbSIsImxvY2FsTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJvcHRpb24iLCJzZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwid2lkZ2V0Iiwic3RvcmUiLCJ1cmwiLCJzZXRVcmwiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJlbnRyaWVzIiwiZ2V0RW50cmllc0J5VHlwZSIsInN0YXJ0IiwiZW50cnkiLCJuYW1lIiwic3RhcnRUaW1lIiwiZW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImFkZCIsInJlbW92ZSIsInBhcmVudCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdG9wUHJvcGFnYXRpb24iLCJocmVmIiwicHVzaFN0YXRlIiwiaXNIb21lIiwiTm90aWNlIiwiTGluayIsIkJleW9uZExvZ28iLCJhbHQiLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxhbmd1YWdlQWN0aW9uIiwidHV0b3JpYWwiLCJkb2N1bWVudGF0aW9uIiwic2V0VG9nZ2xlIiwiQXBwSWNvbiIsImljb24iLCJMYW5ndWFnZXNNb2RhbCIsIm9uQ2xvc2UiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidW5kZWZpbmVkIiwib25Db25maXJtIiwiYmV5b25kIiwibGFuZ3VhZ2VzIiwiZ2xvYmFsVGhpcyIsImxvY2F0aW9uIiwicmVsb2FkIiwibGFuZyIsImRhdGFzZXQiLCJsYW5ndWFnZSIsImRpc2FibGVkIiwiQmV5b25kTW9kYWwiLCJzaG93Iiwibm90aWNlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy9zdG9yZS50cyIsIndpZGdldC90cy92aWV3cy9oYW1idXJnZXIvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9tZW51LnRzeCIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvbGFuZ3VhZ2UtYWN0aW9uLnRzeCIsIndpZGdldC90cy92aWV3cy9tb2RhbC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvbm90aWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19