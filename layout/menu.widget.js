System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/base", "@beyond-js/kernel@0.1.7/core", "@beyond/docs@1/layout/styles", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/icons", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/html", "@beyond-js/kernel@0.1.7/routing", "@beyond/docs@1/ui/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, WidgetMenu, __beyond_pkg, hmr;
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
          "vspecifier": "@beyond/docs@1/layout/menu",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond/docs/layout/styles', dependency_4], ['react', dependency_5], ['@beyond/docs/store', dependency_6], ['@beyond/ui/icons', dependency_7], ['@beyond/ui/image', dependency_8], ['@beyond/docs/components/html', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond/docs/ui/icons', dependency_11]]);
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
        hash: 2237856889,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _starting = require("./sections/starting");
          var _basics = require("./sections/basics");
          var _fundamentals = require("./sections/fundamentals");
          var _backend = require("./sections/backend");
          var _frontend = require("./sections/frontend");
          const Menu = [_starting.starting, _basics.basics, _backend.backend, _frontend.frontend, _fundamentals.fundamentals
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
        hash: 3026169622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.backend = void 0;
          var _structureItem = require("../structure-item");
          const general = (0, _structureItem.structureItems)(['backend/intro', 'backend/bridges', 'backend/bee', 'backend/ssr']);
          const backend = {
            id: 'backend',
            children: general
          };
          exports.backend = backend;
        }
      });

      /**************************************
      INTERNAL MODULE: ./data/sections/basics
      **************************************/

      ims.set('./data/sections/basics', {
        hash: 1972125132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("../structure-item");
          const packages = ['packages/create', 'packages/types', 'packages/distributions', 'packages/json', 'packages/publish', 'packages/beyondjs', 'deployment'];
          const modules = ['modules/introduction', 'modules/creation', 'modules/bundles', 'modules/processors'];
          const general = (0, _structureItem.structureItems)([['packages', (0, _structureItem.structureItems)(packages)], ['modules', (0, _structureItem.structureItems)(modules)]]);
          const basics = {
            id: 'concepts',
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
        hash: 3542591765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.frontend = void 0;
          var _structureItem = require("../structure-item");
          const styles = ['styles/template', 'styles/themes', 'styles/modules', 'styles/imports'];
          const widgets = ['widgets', 'widgets/controllers', 'widgets/page', 'widgets/layout', 'widgets/rendering', 'widgets/add-rendering-engine'];
          const general = (0, _structureItem.structureItems)([['widgets', (0, _structureItem.structureItems)(widgets)], 'routing', 'backend', ['styles', (0, _structureItem.structureItems)(styles)]]);
          const frontend = {
            id: 'frontend',
            children: general
          };
          exports.frontend = frontend;
        }
      });

      /********************************************
      INTERNAL MODULE: ./data/sections/fundamentals
      ********************************************/

      ims.set('./data/sections/fundamentals', {
        hash: 1965702427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("../structure-item");
          const fundamentals = {
            id: "fundamentals",
            children: (0, _structureItem.structureItems)(["cli", "bare-specifiers", "modular", "universal", "dev-server", "foundations/hmr"])
          };
          exports.fundamentals = fundamentals;
        }
      });

      /****************************************
      INTERNAL MODULE: ./data/sections/starting
      ****************************************/

      ims.set('./data/sections/starting', {
        hash: 2492545130,
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
          const tutorial = (0, _structureItem.structureItems)(["tutorial/start", "tutorial/first-module", "tutorial/backend", "tutorial/routing"]);
          const base = ["intro", "quick-start"];
          const items = [...base, ["tutorial", tutorial]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHaEUsS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFNEQsQ0FBQyxLQUFLdkQsb0JBQUN3RCxRQUFRO2NBQUM3RCxJQUFJLEVBQUVBLElBQUk7Y0FBRThELEdBQUcsRUFBRSxHQUFHOUQsSUFBSSxDQUFDaEIsRUFBRSxJQUFJNEUsQ0FBQztZQUFFLEVBQUksQ0FBQztZQUN2RixNQUFNbUIsVUFBVSxHQUFHVixLQUFLLEdBQUcscUJBQXFCLEdBQUcsa0JBQWtCO1lBQ3JFLE1BQU0xQixHQUFHLEdBQUcsR0FBR29DLFVBQVUsR0FBRzlCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFOUQsT0FBTzVDO2NBQUk0QyxTQUFTLEVBQUVOO1lBQUcsR0FBR2dCLE1BQU0sQ0FBTTtVQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkE7VUFDQTtVQUVNLFNBQVVGLFVBQVU7WUFDdEIsTUFBTTtjQUFDOUM7WUFBSyxDQUFDLEdBQUcsMkJBQWMsR0FBRTtZQUNoQyxPQUNJTiwwQ0FDSUE7Y0FBSTRDLFNBQVMsRUFBQztZQUErQixHQUN6QzVDLGdDQUFJQTtjQUFHOEQsSUFBSSxFQUFDO1lBQXNCLEdBQUV4RCxLQUFLLENBQUNsQixRQUFRLENBQUssQ0FBSyxFQUM1RFksZ0NBQUlBO2NBQUc4RCxJQUFJLEVBQUM7WUFBYSxHQUFFeEQsS0FBSyxDQUFDcUUsYUFBYSxDQUFLLENBQUssRUFDeEQzRSxnQ0FBSUE7Y0FBRzhELElBQUksRUFBQztZQUFXLEdBQUV4RCxLQUFLLENBQUNzRSxRQUFRLENBQUssQ0FBSyxDQUNoRCxDQUNOO1VBRVgiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiV2lkZ2V0TWVudSIsImV4cG9ydHMiLCJNZW51Iiwic3RhcnRpbmciLCJiYXNpY3MiLCJiYWNrZW5kIiwiZnJvbnRlbmQiLCJmdW5kYW1lbnRhbHMiLCJjaGlsZHJlbiIsImFwaSIsImlkIiwibGFiZWwiLCJnZW5lcmFsIiwicGFja2FnZXMiLCJtb2R1bGVzIiwiY29uZmlnIiwic3R5bGVzIiwid2lkZ2V0cyIsIm9iaiIsInR1dG9yaWFsIiwiYmFzZSIsIml0ZW1zIiwic3RydWN0dXJlSXRlbXMiLCJkYXRhIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdFZhbHVlIiwiTWVudUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW51Q29udGV4dCIsInVzZUNvbnRleHQiLCJhdHRyaWJ1dGVzIiwicmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInBhcmVudCIsInVzZVJlZiIsIm9wZW5lZExvY2FsIiwid2luZG93IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInVzZVN0YXRlIiwiaW5jbHVkZXMiLCJvcHRpb24iLCJnZXQiLCJjbG9zZU1lbnUiLCJpc09wZW5lZCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInNldEl0ZW0iLCJtZW51IiwiaW5zdGFuY2VzIiwiZmluZCIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsb3NlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJyb3V0aW5nIiwidXJpIiwicmVmIiwiY2xhc3NOYW1lIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIkJleW9uZEljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIk1vYmlsZU1lbnUiLCJMaXN0Iiwib3V0cHV0IiwiaSIsIk1lbnVJdGVtIiwia2V5IiwiUGFyZW50SXRlbSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0Iiwic2VsZWN0ZWQiLCJocmVmIiwiQXBwSWNvbiIsImxldmVsIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiY3VycmVudEFjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJhZGQiLCJwdXNoU3RhdGUiLCJsaW5rIiwicmVxdWlyZSIsImNsc1RvQXBwbHkiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9kYXRhL2luZGV4LnRzIiwidHMvZGF0YS9zZWN0aW9ucy9hcGkudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2JhY2tlbmQudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2Jhc2ljcy50cyIsInRzL2RhdGEvc2VjdGlvbnMvY29uZmlnLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9mcm9udGVuZC50cyIsInRzL2RhdGEvc2VjdGlvbnMvZnVuZGFtZW50YWxzLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9zdGFydGluZy50cyIsInRzL2RhdGEvc3RydWN0dXJlLWl0ZW0udHMiLCJ0cy9tZW51L2NvbnRleHQudHMiLCJ0cy9tZW51L2luZGV4LnRzeCIsInRzL21lbnUvaXRlbXMvaW5kZXgudHN4IiwidHMvbWVudS9saXN0L2luZGV4LnRzeCIsInRzL21lbnUvbW9iaWxlLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==