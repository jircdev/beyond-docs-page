System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/base", "@beyond-js/kernel@0.1.7/core", "@beyond-js/kernel@0.1.7/texts", "react@18.2.0", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/html", "@beyond/docs@1/components/theme-button", "@beyond/ui@1.0.0/link", "@beyond/docs@1/store", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/modal"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_2 = _beyondJsReactWidgets18211Base;
    }, function (_beyondJsKernel017Core) {
      dependency_3 = _beyondJsKernel017Core;
    }, function (_beyondJsKernel017Texts) {
      dependency_4 = _beyondJsKernel017Texts;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_beyondUi100Image) {
      dependency_6 = _beyondUi100Image;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_7 = _beyondDocs1ComponentsHtml;
    }, function (_beyondDocs1ComponentsThemeButton) {
      dependency_8 = _beyondDocs1ComponentsThemeButton;
    }, function (_beyondUi100Link) {
      dependency_9 = _beyondUi100Link;
    }, function (_beyondDocs1Store) {
      dependency_10 = _beyondDocs1Store;
    }, function (_beyondJsKernel017Routing) {
      dependency_11 = _beyondJsKernel017Routing;
    }, function (_beyondDocs1UiIcons) {
      dependency_12 = _beyondDocs1UiIcons;
    }, function (_beyondUi100Modal) {
      dependency_13 = _beyondUi100Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['react', dependency_5], ['@beyond/ui/image', dependency_6], ['@beyond/docs/components/html', dependency_7], ['@beyond/docs/components/theme-button', dependency_8], ['@beyond/ui/link', dependency_9], ['@beyond/docs/store', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond/docs/ui/icons', dependency_12], ['@beyond/ui/modal', dependency_13]]);
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
        hash: 3912007839,
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
              window.setTimeout(() => globalThis.location.reload(), 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFO2NBQUEsaUJBQWdCO1lBQUksR0FDbEdoRTtjQUFNQyxTQUFTLEVBQUM7WUFBYyxhQUFlLGlCQUV6QyxDQUNELEVBQ0xEO2NBQUtDLFNBQVMsRUFBQztZQUFTLEdBQ3ZCRDtjQUFBLEdBQVk4RSxRQUFRO2NBQUU1RSxPQUFPLEVBQUVpRSxTQUFTO2NBQUVsRSxTQUFTLEVBQUM7WUFBa0IsYUFFN0QsQ0FDSixDQUNPLENBQ1o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0E7VUFFTSxTQUFVa0QsTUFBTSxDQUFDO1lBQUMxRSxLQUFLLEVBQUU7Y0FBQ3dHO1lBQU07VUFBQyxDQUFDO1lBQ3BDLE9BQ0lqRjtjQUFTQyxTQUFTLEVBQUM7WUFBaUUsR0FDL0VnRixNQUFNLENBQ0Q7VUFFbEIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVG9wSGVhZGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsImJvZHkiLCJleHBvcnRzIiwiRXZlbnRzIiwibG9hZGluZyIsInZhbHVlIiwiaHlkcmF0ZWQiLCJjb250YWluZXIiLCJyZWFkeSIsInRleHRzIiwiY29uc3RydWN0b3IiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJiaW5kIiwidHJpZ2dlckNoYW5nZSIsInRyaWdnZXIiLCJmZXRjaCIsImh5ZHJhdGUiLCJjYWNoZWQiLCJ0b0pTT04iLCJIYW1idXJnZXIiLCJzaG93TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWVudSIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJ0eXBlIiwiaHRtbEZvciIsIkhhbWJ1cmdlck1lbnUiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiZmluZCIsIml0ZW0iLCJsb2NhbE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwib3B0aW9uIiwic2V0QXR0cmlidXRlIiwiYXR0cmlidXRlcyIsIndpZGdldCIsInN0b3JlIiwidXJsIiwic2V0VXJsIiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiZW50cmllcyIsImdldEVudHJpZXNCeVR5cGUiLCJzdGFydCIsImVudHJ5IiwibmFtZSIsInN0YXJ0VGltZSIsImVuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJhZGQiLCJyZW1vdmUiLCJwYXJlbnQiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3RvcFByb3BhZ2F0aW9uIiwiaHJlZiIsInB1c2hTdGF0ZSIsImlzSG9tZSIsIk5vdGljZSIsIkxpbmsiLCJCZXlvbmRMb2dvIiwiYWx0IiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMYW5ndWFnZUFjdGlvbiIsInR1dG9yaWFsIiwiZG9jdW1lbnRhdGlvbiIsInNldFRvZ2dsZSIsIkFwcEljb24iLCJpY29uIiwiTGFuZ3VhZ2VzTW9kYWwiLCJvbkNsb3NlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9uQ29uZmlybSIsImJleW9uZCIsImxhbmd1YWdlcyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJnbG9iYWxUaGlzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJsYW5nIiwiZGF0YXNldCIsImxhbmd1YWdlIiwiZGlzYWJsZWQiLCJCZXlvbmRNb2RhbCIsInNob3ciLCJub3RpY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2hhbWJ1cmdlci9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvaGFtYnVyZ2VyL21lbnUudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9sYW5ndWFnZS1hY3Rpb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL21vZGFsLnRzeCIsIndpZGdldC90cy92aWV3cy9ub3RpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=