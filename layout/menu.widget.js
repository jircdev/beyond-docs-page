System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/base", "@beyond-js/kernel@0.1.7/core", "@beyond/docs@1/layout/styles", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/icons", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/html", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/ui/icons", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, WidgetMenu, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    WidgetMenu: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_2 = _beyondJsReactWidgets18211Base;
    }, function (_beyondJsKernel017Core) {
      dependency_3 = _beyondJsKernel017Core;
    }, function (_beyondDocs1LayoutStyles) {
      dependency_4 = _beyondDocs1LayoutStyles;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_beyondDocs1Store) {
      dependency_6 = _beyondDocs1Store;
    }, function (_beyondUi100Icons) {
      dependency_7 = _beyondUi100Icons;
    }, function (_beyondUi100Image) {
      dependency_8 = _beyondUi100Image;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_9 = _beyondDocs1ComponentsHtml;
    }, function (_beyondJsKernel017Routing) {
      dependency_10 = _beyondJsKernel017Routing;
    }, function (_beyondDocs1UiIcons) {
      dependency_11 = _beyondDocs1UiIcons;
    }, function (_beyondJsKernel017Styles) {
      dependency_12 = _beyondJsKernel017Styles;
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
          "vspecifier": "@beyond/docs@1/layout/menu",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond/docs/layout/styles', dependency_4], ['react', dependency_5], ['@beyond/docs/store', dependency_6], ['@beyond/ui/icons', dependency_7], ['@beyond/ui/image', dependency_8], ['@beyond/docs/components/html', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond/docs/ui/icons', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "menu-layout",
        "attrs": ["opened", "home"],
        "vspecifier": "@beyond/docs@1/layout/menu.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/layout/menu.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 628870728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _menu = require("./menu");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _menu.WidgetMenu;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./data/index
      ****************************/

      ims.set('./data/index', {
        hash: 1861193362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _starting = require("./sections/starting");
          var _basics = require("./sections/basics");
          var _fundamentals = require("./sections/fundamentals");
          const Menu = [_starting.starting, _basics.basics, _fundamentals.fundamentals
          // config,
          // api
          ];

          exports.Menu = Menu;
        }
      });

      /***********************************
      INTERNAL MODULE: ./data/sections/api
      ***********************************/

      ims.set('./data/sections/api', {
        hash: 3221484725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.api = void 0;
          var _structureItem = require("../structure-item");
          const children = [["api/uri", "URI"], ["api/BeyondWidget", "Objeto widget"], ["api/IWidgetStore", "IWidgetStore"]];
          const api = {
            id: "reference",
            label: "API",
            children: (0, _structureItem.structureItems)(children)
          };
          exports.api = api;
        }
      });

      /***************************************
      INTERNAL MODULE: ./data/sections/backend
      ***************************************/

      ims.set('./data/sections/backend', {
        hash: 2855389027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.backend = void 0;
          var _structureItem = require("../structure-item");
          const general = (0, _structureItem.structureItems)(["prueba/uno"]);
          const backend = {
            id: "backend",
            children: general
          };
          exports.backend = backend;
        }
      });

      /**************************************
      INTERNAL MODULE: ./data/sections/basics
      **************************************/

      ims.set('./data/sections/basics', {
        hash: 397875757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("../structure-item");
          const packages = ["packages/create", "packages/types", "packages/distributions", "packages/json", "packages/publish"];
          const modules = ["modules/introduction", "modules/create", "modules/json"];
          const general = (0, _structureItem.structureItems)([["packages", (0, _structureItem.structureItems)(packages)], ["modules", (0, _structureItem.structureItems)(modules)], "bundles", "processors"]);
          const basics = {
            id: "concepts",
            children: general
          };
          exports.basics = basics;
        }
      });

      /**************************************
      INTERNAL MODULE: ./data/sections/config
      **************************************/

      ims.set('./data/sections/config', {
        hash: 18647715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.config = void 0;
          const config = {
            id: 'configuration',
            children: ['template']
          };
          exports.config = config;
        }
      });

      /****************************************
      INTERNAL MODULE: ./data/sections/frontend
      ****************************************/

      ims.set('./data/sections/frontend', {
        hash: 2927824338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.frontend = void 0;
          var _structureItem = require("../structure-item");
          const projects = ["projects/intro", "projects/create", "projects/structure", "projects/json", "projects/import", "projects/dependencies"];
          const modules = ["modules/introduction", "modules/create", "modules/json"];
          const styles = ["styles/template", "styles/modules", "styles/themes", "styles/imports"];
          const widgets = ["widgets", "widgets/definition", "widgets/controller", "widgets/page", "widgets/layout", "widgets/rendering"];
          const general = (0, _structureItem.structureItems)([["projects", (0, _structureItem.structureItems)(projects)], ["modules", (0, _structureItem.structureItems)(modules)], "bundles", "processors", "template", ["widgets", (0, _structureItem.structureItems)(widgets)], "routing", "state/management", "backend", ["styles", (0, _structureItem.structureItems)(styles)]]);
          const frontend = {
            id: "frontend",
            children: general
          };
          exports.frontend = frontend;
        }
      });

      /********************************************
      INTERNAL MODULE: ./data/sections/fundamentals
      ********************************************/

      ims.set('./data/sections/fundamentals', {
        hash: 4016415725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("../structure-item");
          const fundamentals = {
            id: "fundamentals",
            children: (0, _structureItem.structureItems)(["cli", "bare-specifiers", "modular", "universal", "dev-server", "distributions", "foundations/hmr", "foundations/bee"
            // 'multilanguage',
            // 'glossary',
            ])
          };

          exports.fundamentals = fundamentals;
        }
      });

      /****************************************
      INTERNAL MODULE: ./data/sections/starting
      ****************************************/

      ims.set('./data/sections/starting', {
        hash: 3011490539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.starting = void 0;
          var _structureItem = require("../structure-item");
          const obj = ([id, label]) => ({
            id,
            label
          });
          const tutorial = (0, _structureItem.structureItems)(["tutorial/start", "tutorial/first-module", "tutorial/backend", "tutorial/bridge", "tutorial/routing"]);
          const base = ["intro", "quick-start", "steps"];
          const items = [...base, ["tutorial", tutorial], "workspace"];
          const children = (0, _structureItem.structureItems)(items);
          const starting = {
            id: "getting-start",
            children
          };
          exports.starting = starting;
        }
      });

      /*************************************
      INTERNAL MODULE: ./data/structure-item
      *************************************/

      ims.set('./data/structure-item', {
        hash: 2735831202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.structureItems = void 0;
          /**
           * Generates the structure required to build the main menu
           *
           * The structure mus be an array of objects that can have two
           * keys: id and children if applies.
           *
           * @param {array} data
           * @returns
           */
          const structureItems = data => {
            const response = data.map(item => {
              if (Array.isArray(item)) {
                const [id, children] = item;
                return {
                  id,
                  children
                };
              }
              return {
                id: item
              };
            });
            return response;
          };
          exports.structureItems = structureItems;
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/context
      ******************************/

      ims.set('./menu/context', {
        hash: 1594199103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMenuContext = exports.MenuContext = void 0;
          var React = require("react");
          const defaultValue = {};
          const MenuContext = React.createContext(defaultValue);
          exports.MenuContext = MenuContext;
          const useMenuContext = () => React.useContext(MenuContext);
          exports.useMenuContext = useMenuContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 3849384344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetMenu = WidgetMenu;
          var React = require("react");
          var _data = require("../data");
          var _list = require("./list");
          var _context = require("./context");
          var _store = require("@beyond/docs/store");
          var _icons = require("@beyond/ui/icons");
          var _image = require("@beyond/ui/image");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _mobileMenu = require("./mobile-menu");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function WidgetMenu({
            attributes
          }) {
            const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.specifier);
            const parent = React.useRef(null);
            const openedLocal = typeof window !== undefined ? window?.localStorage.getItem("__menu_opened") : true;
            const [opened, setOpened] = React.useState([true, "true"].includes(openedLocal));
            (0, _store.useBinder)([attributes], () => {
              const option = attributes.get("opened") === "true";
              if (option !== opened) setOpened(option);
            });
            const closeMenu = () => {
              const isOpened = parent.current.classList.contains("docs__menu--opened");
              parent.current.classList.toggle("docs__menu--opened");
              window.localStorage.setItem("__menu_opened", `${!isOpened}`);
              const menu = [..._render.widgets.instances].find(item => item.localName === 'menu-layout');
              const option = menu.getAttribute('opened') === 'true' ? 'false' : 'true';
              menu.setAttribute('opened', option);
            };
            const close = event => {
              event.preventDefault();
              closeMenu();
            };
            let cls = `docs__menu${opened ? ` docs__menu--opened` : ""}`;
            if (attributes.get('home')) cls += " on-home";
            if (!ready) return null;
            return React.createElement(_context.MenuContext.Provider, {
              value: {
                ready,
                texts,
                current: _routing.routing.uri,
                close: closeMenu
              }
            }, React.createElement("aside", {
              ref: parent,
              className: cls
            }, React.createElement("div", {
              className: "menu-mobile-container"
            }, React.createElement("header", {
              className: "aside__header"
            }, React.createElement("div", null, React.createElement(_image.BeyondImage, {
              src: "/images/beyond-logo.png",
              className: "img-logo mobile-only",
              alt: "Beyond the universal meta framework"
            }), React.createElement("h4", null, texts.title)), React.createElement(_icons.BeyondIconButton, {
              onClick: close,
              className: "docs__menu__list__btn-close",
              icon: "close"
            })), React.createElement(_mobileMenu.MobileMenu, null), React.createElement(_list.List, {
              items: _data.Menu
            }))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./menu/items/index
      **********************************/

      ims.set('./menu/items/index', {
        hash: 3683576848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          exports.MenuItem = MenuItem;
          exports.ParentItem = ParentItem;
          var React = require("react");
          var _context = require("../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@beyond/docs/ui/icons");
          function List({
            items,
            className
          }) {
            const output = items.map((item, i) => React.createElement(MenuItem, {
              item: item,
              key: `${item.id}.${i}`
            }));
            const cls = `docs__menu__sublist${className ? ` ${className}` : ""}`;
            return React.createElement("ul", {
              className: cls
            }, output);
          }
          function ParentItem({
            item
          }) {
            const {
              texts,
              current
            } = (0, _context.useMenuContext)();
            const onClick = event => {
              event.preventDefault();
              event.currentTarget.closest("li").classList.toggle("item--opened");
            };
            const label = texts[item.id] ?? item.id;
            const selected = item.children.find(item => `/docs/${item.id}` === current.uri);
            const cls = `menu__item--parent${!!selected ? " item--opened" : ""}`;
            return React.createElement("li", {
              className: cls
            }, React.createElement("section", {
              onClick: onClick
            }, React.createElement("a", {
              href: ""
            }, React.createElement("span", null, label)), React.createElement(_icons.AppIcon, {
              icon: "chevronRight"
            })), React.createElement(List, {
              items: item.children,
              level: 1
            }));
          }
          function MenuItem({
            item
          }) {
            const {
              close,
              texts,
              current
            } = (0, _context.useMenuContext)();
            if (item.children) return React.createElement(ParentItem, {
              item: item
            });
            const uri = `/docs/${item.id}`;
            const onClick = event => {
              event.preventDefault();
              const container = event.currentTarget.closest("aside");
              const target = event.currentTarget.closest("li");
              const currentActive = container.querySelector(".active-item");
              if (currentActive) currentActive.classList.remove("active-item");
              target.classList.add("active-item");
              _routing.routing.pushState(uri);
              close();
            };
            const cls = `${uri === current.uri ? "active-item" : ""}`;
            const link = `/docs/${item.id}`;
            const label = texts[link] ?? link;
            return React.createElement("li", {
              className: cls
            }, React.createElement("a", {
              href: link,
              onClick: onClick
            }, label));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./menu/list/index
      *********************************/

      ims.set('./menu/list/index', {
        hash: 2985210341,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          function List({
            items,
            className,
            level
          }) {
            const {
              MenuItem
            } = require("../items/index");
            const output = items.map((item, i) => React.createElement(MenuItem, {
              item: item,
              key: `${item.id}.${i}`
            }));
            const clsToApply = level ? "docs__menu__sublist" : "docs__menu__list";
            const cls = `${clsToApply}${className ? ` ${className}` : ""}`;
            return React.createElement("ul", {
              className: cls
            }, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./menu/mobile-menu
      **********************************/

      ims.set('./menu/mobile-menu', {
        hash: 3970286532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMenu = MobileMenu;
          var React = require("react");
          var _context = require("./context");
          function MobileMenu() {
            const {
              texts
            } = (0, _context.useMenuContext)();
            return React.createElement(React.Fragment, null, React.createElement("ul", {
              className: "docs__menu__list mobile__menu"
            }, React.createElement("li", null, React.createElement("a", {
              href: "/docs/tutorial/start"
            }, texts.tutorial)), React.createElement("li", null, React.createElement("a", {
              href: "/docs/intro"
            }, texts.documentation)), React.createElement("li", null, React.createElement("a", {
              href: "/examples"
            }, texts.examples))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./menu/index",
        "from": "WidgetMenu",
        "name": "WidgetMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'WidgetMenu') && _export("WidgetMenu", WidgetMenu = require ? require('./menu/index').WidgetMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsQ0FBSyxDQUFLLEVBQ3hEM0UsZ0NBQUlBO2NBQUc4RCxJQUFJLEVBQUM7WUFBVyxHQUFFeEQsS0FBSyxDQUFDc0UsUUFBUSxDQUFLLENBQUssQ0FDaEQsQ0FDTjtVQUVYIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIldpZGdldE1lbnUiLCJleHBvcnRzIiwiTWVudSIsInN0YXJ0aW5nIiwiYmFzaWNzIiwiZnVuZGFtZW50YWxzIiwiY2hpbGRyZW4iLCJhcGkiLCJpZCIsImxhYmVsIiwiZ2VuZXJhbCIsImJhY2tlbmQiLCJwYWNrYWdlcyIsIm1vZHVsZXMiLCJjb25maWciLCJwcm9qZWN0cyIsInN0eWxlcyIsIndpZGdldHMiLCJmcm9udGVuZCIsIm9iaiIsInR1dG9yaWFsIiwiYmFzZSIsIml0ZW1zIiwic3RydWN0dXJlSXRlbXMiLCJkYXRhIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdFZhbHVlIiwiTWVudUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW51Q29udGV4dCIsInVzZUNvbnRleHQiLCJhdHRyaWJ1dGVzIiwicmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInBhcmVudCIsInVzZVJlZiIsIm9wZW5lZExvY2FsIiwid2luZG93IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInVzZVN0YXRlIiwiaW5jbHVkZXMiLCJvcHRpb24iLCJnZXQiLCJjbG9zZU1lbnUiLCJpc09wZW5lZCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInNldEl0ZW0iLCJtZW51IiwiaW5zdGFuY2VzIiwiZmluZCIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsb3NlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJyb3V0aW5nIiwidXJpIiwicmVmIiwiY2xhc3NOYW1lIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIkJleW9uZEljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIk1vYmlsZU1lbnUiLCJMaXN0Iiwib3V0cHV0IiwiaSIsIk1lbnVJdGVtIiwia2V5IiwiUGFyZW50SXRlbSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0Iiwic2VsZWN0ZWQiLCJocmVmIiwiQXBwSWNvbiIsImxldmVsIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiY3VycmVudEFjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJhZGQiLCJwdXNoU3RhdGUiLCJsaW5rIiwicmVxdWlyZSIsImNsc1RvQXBwbHkiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9kYXRhL2luZGV4LnRzIiwidHMvZGF0YS9zZWN0aW9ucy9hcGkudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2JhY2tlbmQudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2Jhc2ljcy50cyIsInRzL2RhdGEvc2VjdGlvbnMvY29uZmlnLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9mcm9udGVuZC50cyIsInRzL2RhdGEvc2VjdGlvbnMvZnVuZGFtZW50YWxzLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9zdGFydGluZy50cyIsInRzL2RhdGEvc3RydWN0dXJlLWl0ZW0udHMiLCJ0cy9tZW51L2NvbnRleHQudHMiLCJ0cy9tZW51L2luZGV4LnRzeCIsInRzL21lbnUvaXRlbXMvaW5kZXgudHN4IiwidHMvbWVudS9saXN0L2luZGV4LnRzeCIsInRzL21lbnUvbW9iaWxlLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==