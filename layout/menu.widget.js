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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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

      /**************************
      INTERNAL MODULE: ./data/api
      **************************/

      ims.set('./data/api', {
        hash: 3470403212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.api = void 0;
          var _structureItem = require("./structure-item");
          const children = [['api/uri', 'URI'], ["api/BeyondWidget", "Objeto widget"], ["api/IWidgetStore", "IWidgetStore"]];
          const api = {
            id: 'reference',
            label: 'API',
            children: (0, _structureItem.structureItems)(children)
          };
          exports.api = api;
        }
      });

      /******************************
      INTERNAL MODULE: ./data/backend
      ******************************/

      ims.set('./data/backend', {
        hash: 2742335679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.backend = void 0;
          var _structureItem = require("./structure-item");
          const general = (0, _structureItem.structureItems)(["prueba/uno"]);
          const backend = {
            id: "backend",
            children: general
          };
          exports.backend = backend;
        }
      });

      /*****************************
      INTERNAL MODULE: ./data/basics
      *****************************/

      ims.set('./data/basics', {
        hash: 1819149145,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("./structure-item");
          const projects = ["projects/intro", "projects/create", "projects/structure", "projects/json", "projects/import", "projects/dependencies"];
          const modules = ["modules/introduction", "modules/create", "modules/json"];
          const styles = ["styles/template", "styles/modules", "styles/themes", "styles/imports"];
          const widgets = ["widgets", "widgets/definition", "widgets/controller", "widgets/page", "widgets/layout", "widgets/rendering"];
          const general = (0, _structureItem.structureItems)([["projects", (0, _structureItem.structureItems)(projects)], ["modules", (0, _structureItem.structureItems)(modules)], "bundles", "processors", "template", ["widgets", (0, _structureItem.structureItems)(widgets)], "routing", "state/management", ["styles", (0, _structureItem.structureItems)(styles)]]);
          const basics = {
            id: "concepts",
            children: general
          };
          exports.basics = basics;
        }
      });

      /*****************************
      INTERNAL MODULE: ./data/config
      *****************************/

      ims.set('./data/config', {
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

      /*******************************
      INTERNAL MODULE: ./data/frontend
      *******************************/

      ims.set('./data/frontend', {
        hash: 1084980475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.frontend = void 0;
          var _structureItem = require("./structure-item");
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

      /***********************************
      INTERNAL MODULE: ./data/fundamentals
      ***********************************/

      ims.set('./data/fundamentals', {
        hash: 2908504275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("./structure-item");
          const fundamentals = {
            id: "fundamentals",
            children: (0, _structureItem.structureItems)(["bare-specifiers", "modular", "universal", "dev-server", "distributions", "foundations/hmr", "foundations/bee"
            // 'multilanguage',
            // 'glossary',
            ])
          };

          exports.fundamentals = fundamentals;
        }
      });

      /****************************
      INTERNAL MODULE: ./data/index
      ****************************/

      ims.set('./data/index', {
        hash: 1121256905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.api = exports.Menu = void 0;
          var _starting = require("./starting");
          var _fundamentals = require("./fundamentals");
          var _backend = require("./backend");
          var _frontend = require("./frontend");
          const Menu = [_starting.starting, _backend.backend, _frontend.frontend, _fundamentals.fundamentals
          // config,
          // api
          ];

          exports.Menu = Menu;
          /* action */
          const api = event => {
            const item = new debug();
          };
          exports.api = api;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data/starting
      *******************************/

      ims.set('./data/starting', {
        hash: 1238045197,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.starting = void 0;
          var _structureItem = require("./structure-item");
          const obj = ([id, label]) => ({
            id,
            label
          });
          const tutorial = (0, _structureItem.structureItems)(["tutorial/start", "tutorial/first-module", "tutorial/backend", "tutorial/bridge", "tutorial/routing"]);
          const base = ["intro", "quick-start", "cli"];
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
        hash: 2375272371,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.structureItems = void 0;
          const structureItems = data => {
            return data.map(item => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVLEdBQUc5QixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRTlELE9BQU8zQztjQUFJMkMsU0FBUyxFQUFFTjtZQUFHLEdBQUdnQixNQUFNLENBQU07VUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBO1VBQ0E7VUFFTSxTQUFVRixVQUFVO1lBQ3RCLE1BQU07Y0FBQzdDO1lBQUssQ0FBQyxHQUFHLDJCQUFjLEdBQUU7WUFDaEMsT0FDSU4sMENBQ0lBO2NBQUkyQyxTQUFTLEVBQUM7WUFBK0IsR0FDekMzQyxnQ0FBSUE7Y0FBRzZELElBQUksRUFBQztZQUFzQixHQUFFdkQsS0FBSyxDQUFDaEIsUUFBUSxDQUFLLENBQUssRUFDNURVLGdDQUFJQTtjQUFHNkQsSUFBSSxFQUFDO1lBQWEsR0FBRXZELEtBQUssQ0FBQ29FLGFBQWEsQ0FBSyxDQUFLLEVBQ3hEMUUsZ0NBQUlBO2NBQUc2RCxJQUFJLEVBQUM7WUFBVyxHQUFFdkQsS0FBSyxDQUFDcUUsUUFBUSxDQUFLLENBQUssQ0FDaEQsQ0FDTjtVQUVYIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIldpZGdldE1lbnUiLCJleHBvcnRzIiwiY2hpbGRyZW4iLCJhcGkiLCJpZCIsImxhYmVsIiwiZ2VuZXJhbCIsImJhY2tlbmQiLCJwcm9qZWN0cyIsIm1vZHVsZXMiLCJzdHlsZXMiLCJ3aWRnZXRzIiwiYmFzaWNzIiwiY29uZmlnIiwiZnJvbnRlbmQiLCJmdW5kYW1lbnRhbHMiLCJNZW51Iiwic3RhcnRpbmciLCJldmVudCIsIml0ZW0iLCJkZWJ1ZyIsIm9iaiIsInR1dG9yaWFsIiwiYmFzZSIsIml0ZW1zIiwic3RydWN0dXJlSXRlbXMiLCJkYXRhIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdFZhbHVlIiwiTWVudUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW51Q29udGV4dCIsInVzZUNvbnRleHQiLCJhdHRyaWJ1dGVzIiwicmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInBhcmVudCIsInVzZVJlZiIsIm9wZW5lZExvY2FsIiwid2luZG93IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInVzZVN0YXRlIiwiaW5jbHVkZXMiLCJvcHRpb24iLCJnZXQiLCJjbG9zZU1lbnUiLCJpc09wZW5lZCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInNldEl0ZW0iLCJtZW51IiwiaW5zdGFuY2VzIiwiZmluZCIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsb3NlIiwicHJldmVudERlZmF1bHQiLCJjbHMiLCJQcm92aWRlciIsInZhbHVlIiwicm91dGluZyIsInVyaSIsInJlZiIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJCZXlvbmRJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJNb2JpbGVNZW51IiwiTGlzdCIsIm91dHB1dCIsImkiLCJNZW51SXRlbSIsImtleSIsIlBhcmVudEl0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsInNlbGVjdGVkIiwiaHJlZiIsIkFwcEljb24iLCJsZXZlbCIsImNvbnRhaW5lciIsInRhcmdldCIsImN1cnJlbnRBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiYWRkIiwicHVzaFN0YXRlIiwibGluayIsInJlcXVpcmUiLCJjbHNUb0FwcGx5IiwiZG9jdW1lbnRhdGlvbiIsImV4YW1wbGVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvZGF0YS9hcGkudHMiLCJ0cy9kYXRhL2JhY2tlbmQudHMiLCJ0cy9kYXRhL2Jhc2ljcy50cyIsInRzL2RhdGEvY29uZmlnLnRzIiwidHMvZGF0YS9mcm9udGVuZC50cyIsInRzL2RhdGEvZnVuZGFtZW50YWxzLnRzIiwidHMvZGF0YS9pbmRleC50cyIsInRzL2RhdGEvc3RhcnRpbmcudHMiLCJ0cy9kYXRhL3N0cnVjdHVyZS1pdGVtLnRzIiwidHMvbWVudS9jb250ZXh0LnRzIiwidHMvbWVudS9pbmRleC50c3giLCJ0cy9tZW51L2l0ZW1zL2luZGV4LnRzeCIsInRzL21lbnUvbGlzdC9pbmRleC50c3giLCJ0cy9tZW51L21vYmlsZS1tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=