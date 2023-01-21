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
        hash: 4122565919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("../structure-item");
          const packages = ["packages/create", "packages/types", "packages/distributions", "packages/json", "packages/publish", "packages/beyondjs", "deployment"];
          const modules = ["modules/introduction", "modules/creation", "modules/bundles", "modules/processors"];
          const general = (0, _structureItem.structureItems)([["packages", (0, _structureItem.structureItems)(packages)], ["modules", (0, _structureItem.structureItems)(modules)]]);
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
        hash: 2677592146,
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
          const widgets = ["widgets", "widgets/definition", "widgets/controller", "widgets/page", "widgets/layout", "widgets/rendering", "/widgets/add-rendering-engine"];
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
        hash: 3235225712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("../structure-item");
          const fundamentals = {
            id: "fundamentals",
            children: (0, _structureItem.structureItems)(["cli", "bare-specifiers", "modular", "universal", "dev-server", "distributions", "foundations/hmr", "foundations/bee", "foundations/extend"
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
        hash: 3810987416,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBSUE7VUFHTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsMkJBQXFCO1lBQzFDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxnQkFBVTtZQUNyQjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkQ7VUFDQTtVQUNBO1VBSU8sTUFBTUMsSUFBSSxHQUFHLENBQ2hCQyxrQkFBUSxFQUNSQyxjQUFNLEVBQ05DO1VBQ0E7VUFDQTtVQUFBLENBQ0g7O1VBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pGO1VBRUEsTUFBTUssUUFBUSxHQUFHLENBQ2IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQ2xCLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLEVBQ3JDLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQ3ZDO1VBQ00sTUFBTUMsR0FBRyxHQUFHO1lBQ2ZDLEVBQUUsRUFBRSxXQUFXO1lBQ2ZDLEtBQUssRUFBRSxLQUFLO1lBQ1pILFFBQVEsRUFBRSxpQ0FBYyxFQUFDQSxRQUFRO1dBQ3BDO1VBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hGO1VBRUEsTUFBTVMsT0FBTyxHQUFHLGlDQUFjLEVBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztVQUN2QyxNQUFNQyxPQUFPLEdBQUc7WUFDbkJILEVBQUUsRUFBRSxTQUFTO1lBQ2JGLFFBQVEsRUFBRUk7V0FDYjtVQUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNORjtVQUVBLE1BQU1XLFFBQVEsR0FBRyxDQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLFlBQVksQ0FDZjtVQUNELE1BQU1DLE9BQU8sR0FBRyxDQUFDLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDO1VBRXJHLE1BQU1ILE9BQU8sR0FBRyxpQ0FBYyxFQUFDLENBQzNCLENBQUMsVUFBVSxFQUFFLGlDQUFjLEVBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQ3RDLENBQUMsU0FBUyxFQUFFLGlDQUFjLEVBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQ3ZDLENBQUM7VUFDSyxNQUFNVCxNQUFNLEdBQUc7WUFDbEJJLEVBQUUsRUFBRSxVQUFVO1lBQ2RGLFFBQVEsRUFBRUk7V0FDYjtVQUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkssTUFBTWEsTUFBTSxHQUFHO1lBQ2xCTixFQUFFLEVBQUUsZUFBZTtZQUNuQkYsUUFBUSxFQUFFLENBQ04sVUFBVTtXQUVqQjtVQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMRjtVQUVBLE1BQU1jLFFBQVEsR0FBRyxDQUNiLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsdUJBQXVCLENBQzFCO1VBQ0QsTUFBTUYsT0FBTyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO1VBRTFFLE1BQU1HLE1BQU0sR0FBRyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztVQUN2RixNQUFNQyxPQUFPLEdBQUcsQ0FDWixTQUFTLEVBQ1Qsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQiwrQkFBK0IsQ0FDbEM7VUFFRCxNQUFNUCxPQUFPLEdBQUcsaUNBQWMsRUFBQyxDQUMzQixDQUFDLFVBQVUsRUFBRSxpQ0FBYyxFQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUN0QyxDQUFDLFNBQVMsRUFBRSxpQ0FBYyxFQUFDRixPQUFPLENBQUMsQ0FBQyxFQUVwQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixDQUFDLFNBQVMsRUFBRSxpQ0FBYyxFQUFDSSxPQUFPLENBQUMsQ0FBQyxFQUNwQyxTQUFTLEVBQ1Qsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDVCxDQUFDLFFBQVEsRUFBRSxpQ0FBYyxFQUFDRCxNQUFNLENBQUMsQ0FBQyxDQUNyQyxDQUFDO1VBQ0ssTUFBTUUsUUFBUSxHQUFHO1lBQ3BCVixFQUFFLEVBQUUsVUFBVTtZQUNkRixRQUFRLEVBQUVJO1dBQ2I7VUFBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNGO1VBRU8sTUFBTUksWUFBWSxHQUFHO1lBQ3hCRyxFQUFFLEVBQUUsY0FBYztZQUNsQkYsUUFBUSxFQUFFLGlDQUFjLEVBQUMsQ0FDckIsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQjtZQUNBO1lBQ0E7WUFBQSxDQUNIO1dBQ0o7O1VBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRjtVQUVBLE1BQU1rQixHQUFHLEdBQUcsQ0FBQyxDQUFDWCxFQUFFLEVBQUVDLEtBQUssQ0FBQyxNQUFNO1lBQUVELEVBQUU7WUFBRUM7VUFBSyxDQUFFLENBQUM7VUFFNUMsTUFBTVcsUUFBUSxHQUFHLGlDQUFjLEVBQUMsQ0FDNUIsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGtCQUFrQixDQUNyQixDQUFDO1VBRUYsTUFBTUMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7VUFDOUMsTUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBR0QsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFRCxRQUFRLENBQUMsQ0FBQztVQUMvQyxNQUFNZCxRQUFRLEdBQUcsaUNBQWMsRUFBQ2dCLEtBQUssQ0FBQztVQUMvQixNQUFNbkIsUUFBUSxHQUFHO1lBQ3BCSyxFQUFFLEVBQUUsZUFBZTtZQUNuQkY7V0FDSDtVQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkY7Ozs7Ozs7OztVQWNPLE1BQU1zQixjQUFjLEdBQUlDLElBQWMsSUFBaUI7WUFDMUQsTUFBTUMsUUFBUSxHQUFnQkQsSUFBSSxDQUFDRSxHQUFHLENBQUVDLElBQUksSUFBSTtjQUM1QyxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sQ0FBQ25CLEVBQUUsRUFBRUYsUUFBUSxDQUFDLEdBQUdxQixJQUFJO2dCQUMzQixPQUFPO2tCQUFFbkIsRUFBRTtrQkFBRUY7Z0JBQVEsQ0FBRTs7Y0FHM0IsT0FBTztnQkFBRUUsRUFBRSxFQUFFbUI7Y0FBSSxDQUFFO1lBQ3ZCLENBQUMsQ0FBQztZQUdGLE9BQU9GLFFBQVE7VUFDbkIsQ0FBQztVQUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJGO1VBWUEsTUFBTTZCLFlBQVksR0FBVyxFQUFFO1VBQ3hCLE1BQU1DLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxhQUFhLENBQUNILFlBQVksQ0FBQztVQUFDN0I7VUFDdEQsTUFBTWlDLGNBQWMsR0FBRyxNQUFNRixLQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkbEU7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFQTtVQUVBO1VBQ0E7VUFDQTtVQU1PO1VBQVUsU0FDUkQsVUFBVSxDQUFDO1lBQUNvQztVQUFVLENBQUM7WUFDNUIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUNDLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUNqRCxNQUFNQyxNQUFNLEdBQUdULEtBQUssQ0FBQ1UsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQyxNQUFNQyxXQUFXLEdBQ2IsT0FBT0MsTUFBTSxLQUFLQyxTQUFTLEdBQ3JCRCxNQUFNLEVBQUVFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUM3QyxJQUFJO1lBQ2QsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHakIsS0FBSyxDQUFDa0IsUUFBUSxDQUN0QyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQ0MsUUFBUSxDQUFDUixXQUFXLENBQUMsQ0FDdkM7WUFFRCxvQkFBUyxFQUFDLENBQUNQLFVBQVUsQ0FBQyxFQUFFLE1BQUs7Y0FDekIsTUFBTWdCLE1BQU0sR0FBR2hCLFVBQVUsQ0FBQ2lCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxNQUFNO2NBQ2xELElBQUlELE1BQU0sS0FBS0osTUFBTSxFQUFFQyxTQUFTLENBQUNHLE1BQU0sQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFHRixNQUFNRSxTQUFTLEdBQUcsTUFBSztjQUNuQixNQUFNQyxRQUFRLEdBQUdkLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztjQUN4RWpCLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztjQUNyRGYsTUFBTSxDQUFDRSxZQUFZLENBQUNjLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDTCxRQUFRLEVBQUUsQ0FBQztjQUM1RCxNQUFNTSxJQUFJLEdBQUcsQ0FBQyxHQUFHNUMsZUFBTyxDQUFDNkMsU0FBUyxDQUFDLENBQUNDLElBQUksQ0FBQ3BDLElBQUksSUFBSUEsSUFBSSxDQUFDcUMsU0FBUyxLQUFLLGFBQWEsQ0FBQztjQUNsRixNQUFNWixNQUFNLEdBQUdTLElBQUksQ0FBQ0ksWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN4RUosSUFBSSxDQUFDSyxZQUFZLENBQUMsUUFBUSxFQUFFZCxNQUFNLENBQUM7WUFFdkMsQ0FBQztZQUNELE1BQU1lLEtBQUssR0FBSUMsS0FBSyxJQUFJO2NBQ3BCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QmYsU0FBUyxFQUFFO1lBQ2YsQ0FBQztZQUNELElBQUlnQixHQUFHLEdBQUcsYUFBYXRCLE1BQU0sR0FBRyxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7WUFDNUQsSUFBSVosVUFBVSxDQUFDaUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFaUIsR0FBRyxJQUFJLFVBQVU7WUFDN0MsSUFBSSxDQUFDakMsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUd2QixPQUNJTCxvQkFBQ0Qsb0JBQVcsQ0FBQ3dDLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFO2dCQUN6Qm5DLEtBQUs7Z0JBQUVDLEtBQUs7Z0JBQ1prQixPQUFPLEVBQUVpQixnQkFBTyxDQUFDQyxHQUFHO2dCQUNwQlAsS0FBSyxFQUFFYjs7WUFDVixHQUNHdEI7Y0FBTzJDLEdBQUcsRUFBRWxDLE1BQU07Y0FBRW1DLFNBQVMsRUFBRU47WUFBRyxHQUM5QnRDO2NBQUs0QyxTQUFTLEVBQUM7WUFBdUIsR0FDbEM1QztjQUFRNEMsU0FBUyxFQUFDO1lBQWUsR0FDN0I1QyxpQ0FDSUEsb0JBQUM2QyxrQkFBVztjQUNSQyxHQUFHLEVBQUMseUJBQXlCO2NBQzdCRixTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDRyxHQUFHLEVBQUM7WUFBcUMsRUFDM0MsRUFDRi9DLGdDQUFLTSxLQUFLLENBQUMwQyxLQUFLLENBQU0sQ0FDcEIsRUFDTmhELG9CQUFDaUQsdUJBQWdCO2NBQ2JDLE9BQU8sRUFBRWYsS0FBSztjQUNkUyxTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDTyxJQUFJLEVBQUM7WUFBTyxFQUNkLENBQ0csRUFDVG5ELG9CQUFDb0Qsc0JBQVUsT0FBRSxFQUNicEQsb0JBQUNxRCxVQUFJO2NBQUMvRCxLQUFLLEVBQUVwQjtZQUFJLEVBQUcsQ0FDbEIsQ0FDRixDQUNXO1VBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEZBO1VBQ0E7VUFDQTtVQUNBO1VBY00sU0FBVW1GLElBQUksQ0FBQztZQUFFL0QsS0FBSztZQUFFc0Q7VUFBUyxDQUFVO1lBQzdDLE1BQU1VLE1BQU0sR0FBR2hFLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRTRELENBQUMsS0FBS3ZELG9CQUFDd0QsUUFBUTtjQUFDN0QsSUFBSSxFQUFFQSxJQUFJO2NBQUU4RCxHQUFHLEVBQUUsR0FBRzlELElBQUksQ0FBQ25CLEVBQUUsSUFBSStFLENBQUM7WUFBRSxFQUFJLENBQUM7WUFDdkYsTUFBTWpCLEdBQUcsR0FBRyxzQkFBc0JNLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEUsT0FBTzVDO2NBQUk0QyxTQUFTLEVBQUVOO1lBQUcsR0FBR2dCLE1BQU0sQ0FBTTtVQUM1QztVQUVNLFNBQVVJLFVBQVUsQ0FBQztZQUFFL0Q7VUFBSSxDQUFFO1lBQy9CLE1BQU07Y0FBRVcsS0FBSztjQUFFa0I7WUFBTyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUMzQyxNQUFNMEIsT0FBTyxHQUFJZCxLQUFLLElBQUk7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCRCxLQUFLLENBQUN1QixhQUFhLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ25DLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUN0RSxDQUFDO1lBRUQsTUFBTWxELEtBQUssR0FBRzZCLEtBQUssQ0FBQ1gsSUFBSSxDQUFDbkIsRUFBRSxDQUFDLElBQUltQixJQUFJLENBQUNuQixFQUFFO1lBQ3ZDLE1BQU1xRixRQUFRLEdBQUdsRSxJQUFJLENBQUNyQixRQUFRLENBQUN5RCxJQUFJLENBQUVwQyxJQUFJLElBQUssU0FBU0EsSUFBSSxDQUFDbkIsRUFBRSxFQUFFLEtBQUtnRCxPQUFPLENBQUNrQixHQUFHLENBQUM7WUFDakYsTUFBTUosR0FBRyxHQUFHLHFCQUFxQixDQUFDLENBQUN1QixRQUFRLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUNwRSxPQUNJN0Q7Y0FBSTRDLFNBQVMsRUFBRU47WUFBRyxHQUNkdEM7Y0FBU2tELE9BQU8sRUFBRUE7WUFBTyxHQUNyQmxEO2NBQUc4RCxJQUFJLEVBQUM7WUFBRSxHQUNOOUQsa0NBQU92QixLQUFLLENBQVEsQ0FDcEIsRUFDSnVCLG9CQUFDK0QsY0FBTztjQUFDWixJQUFJLEVBQUM7WUFBYyxFQUFHLENBQ3pCLEVBQ1ZuRCxvQkFBQ3FELElBQUk7Y0FBQy9ELEtBQUssRUFBRUssSUFBSSxDQUFDckIsUUFBUTtjQUFFMEYsS0FBSyxFQUFFO1lBQUMsRUFBSSxDQUN2QztVQUViO1VBRU0sU0FBVVIsUUFBUSxDQUFDO1lBQUU3RDtVQUFJLENBQUU7WUFDN0IsTUFBTTtjQUFFd0MsS0FBSztjQUFFN0IsS0FBSztjQUFFa0I7WUFBTyxDQUFFLEdBQUcsMkJBQWMsR0FBRTtZQUNsRCxJQUFJN0IsSUFBSSxDQUFDckIsUUFBUSxFQUFFLE9BQU8wQixvQkFBQzBELFVBQVU7Y0FBQy9ELElBQUksRUFBRUE7WUFBSSxFQUFJO1lBRXBELE1BQU0rQyxHQUFHLEdBQUcsU0FBUy9DLElBQUksQ0FBQ25CLEVBQUUsRUFBRTtZQUM5QixNQUFNMEUsT0FBTyxHQUFJZCxLQUFLLElBQUk7Y0FDdEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU00QixTQUFTLEdBQUc3QixLQUFLLENBQUN1QixhQUFhLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Y0FDdEQsTUFBTU0sTUFBTSxHQUFHOUIsS0FBSyxDQUFDdUIsYUFBYSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDO2NBQ2hELE1BQU1PLGFBQWEsR0FBR0YsU0FBUyxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO2NBQzdELElBQUlELGFBQWEsRUFBRUEsYUFBYSxDQUFDMUMsU0FBUyxDQUFDNEMsTUFBTSxDQUFDLGFBQWEsQ0FBQztjQUNoRUgsTUFBTSxDQUFDekMsU0FBUyxDQUFDNkMsR0FBRyxDQUFDLGFBQWEsQ0FBQztjQUVuQzdCLGdCQUFPLENBQUM4QixTQUFTLENBQUM3QixHQUFHLENBQUM7Y0FDdEJQLEtBQUssRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNRyxHQUFHLEdBQUcsR0FBR0ksR0FBRyxLQUFLbEIsT0FBTyxDQUFDa0IsR0FBRyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDekQsTUFBTThCLElBQUksR0FBRyxTQUFTN0UsSUFBSSxDQUFDbkIsRUFBRSxFQUFFO1lBRS9CLE1BQU1DLEtBQUssR0FBRzZCLEtBQUssQ0FBQ2tFLElBQUksQ0FBQyxJQUFJQSxJQUFJO1lBQ2pDLE9BQ0l4RTtjQUFJNEMsU0FBUyxFQUFFTjtZQUFHLEdBQ2R0QztjQUFHOEQsSUFBSSxFQUFFVSxJQUFJO2NBQUV0QixPQUFPLEVBQUVBO1lBQU8sR0FDMUJ6RSxLQUFLLENBQ04sQ0FDSDtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFQTtVQWVNLFNBQVU0RSxJQUFJLENBQUM7WUFBRS9ELEtBQUs7WUFBRXNELFNBQVM7WUFBRW9CO1VBQUssQ0FBVTtZQUNwRCxNQUFNO2NBQUVSO1lBQVEsQ0FBRSxHQUFHaUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLE1BQU1uQixNQUFNLEdBQUdoRSxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUU0RCxDQUFDLEtBQUt2RCxvQkFBQ3dELFFBQVE7Y0FBQzdELElBQUksRUFBRUEsSUFBSTtjQUFFOEQsR0FBRyxFQUFFLEdBQUc5RCxJQUFJLENBQUNuQixFQUFFLElBQUkrRSxDQUFDO1lBQUUsRUFBSSxDQUFDO1lBQ3ZGLE1BQU1tQixVQUFVLEdBQUdWLEtBQUssR0FBRyxxQkFBcUIsR0FBRyxrQkFBa0I7WUFDckUsTUFBTTFCLEdBQUcsR0FBRyxHQUFHb0MsVUFBVSxHQUFHOUIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUU5RCxPQUFPNUM7Y0FBSTRDLFNBQVMsRUFBRU47WUFBRyxHQUFHZ0IsTUFBTSxDQUFNO1VBQzVDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBO1VBRU0sU0FBVUYsVUFBVTtZQUN0QixNQUFNO2NBQUM5QztZQUFLLENBQUMsR0FBRywyQkFBYyxHQUFFO1lBQ2hDLE9BQ0lOLDBDQUNJQTtjQUFJNEMsU0FBUyxFQUFDO1lBQStCLEdBQ3pDNUMsZ0NBQUlBO2NBQUc4RCxJQUFJLEVBQUM7WUFBc0IsR0FBRXhELEtBQUssQ0FBQ2xCLFFBQVEsQ0FBSyxDQUFLLEVBQzVEWSxnQ0FBSUE7Y0FBRzhELElBQUksRUFBQztZQUFhLEdBQUV4RCxLQUFLLENBQUNxRSxhQUFhLENBQUssQ0FBSyxFQUN4RDNFLGdDQUFJQTtjQUFHOEQsSUFBSSxFQUFDO1lBQVcsR0FBRXhELEtBQUssQ0FBQ3NFLFFBQVEsQ0FBSyxDQUFLLENBQ2hELENBQ047VUFFWCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJXaWRnZXRNZW51IiwiZXhwb3J0cyIsIk1lbnUiLCJzdGFydGluZyIsImJhc2ljcyIsImZ1bmRhbWVudGFscyIsImNoaWxkcmVuIiwiYXBpIiwiaWQiLCJsYWJlbCIsImdlbmVyYWwiLCJiYWNrZW5kIiwicGFja2FnZXMiLCJtb2R1bGVzIiwiY29uZmlnIiwicHJvamVjdHMiLCJzdHlsZXMiLCJ3aWRnZXRzIiwiZnJvbnRlbmQiLCJvYmoiLCJ0dXRvcmlhbCIsImJhc2UiLCJpdGVtcyIsInN0cnVjdHVyZUl0ZW1zIiwiZGF0YSIsInJlc3BvbnNlIiwibWFwIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImRlZmF1bHRWYWx1ZSIsIk1lbnVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTWVudUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXR0cmlidXRlcyIsInJlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwYXJlbnQiLCJ1c2VSZWYiLCJvcGVuZWRMb2NhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJ1c2VTdGF0ZSIsImluY2x1ZGVzIiwib3B0aW9uIiwiZ2V0IiwiY2xvc2VNZW51IiwiaXNPcGVuZWQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJzZXRJdGVtIiwibWVudSIsImluc3RhbmNlcyIsImZpbmQiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjbG9zZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbHMiLCJQcm92aWRlciIsInZhbHVlIiwicm91dGluZyIsInVyaSIsInJlZiIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJCZXlvbmRJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJNb2JpbGVNZW51IiwiTGlzdCIsIm91dHB1dCIsImkiLCJNZW51SXRlbSIsImtleSIsIlBhcmVudEl0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsInNlbGVjdGVkIiwiaHJlZiIsIkFwcEljb24iLCJsZXZlbCIsImNvbnRhaW5lciIsInRhcmdldCIsImN1cnJlbnRBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiYWRkIiwicHVzaFN0YXRlIiwibGluayIsInJlcXVpcmUiLCJjbHNUb0FwcGx5IiwiZG9jdW1lbnRhdGlvbiIsImV4YW1wbGVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvZGF0YS9pbmRleC50cyIsInRzL2RhdGEvc2VjdGlvbnMvYXBpLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9iYWNrZW5kLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9iYXNpY3MudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2NvbmZpZy50cyIsInRzL2RhdGEvc2VjdGlvbnMvZnJvbnRlbmQudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2Z1bmRhbWVudGFscy50cyIsInRzL2RhdGEvc2VjdGlvbnMvc3RhcnRpbmcudHMiLCJ0cy9kYXRhL3N0cnVjdHVyZS1pdGVtLnRzIiwidHMvbWVudS9jb250ZXh0LnRzIiwidHMvbWVudS9pbmRleC50c3giLCJ0cy9tZW51L2l0ZW1zL2luZGV4LnRzeCIsInRzL21lbnUvbGlzdC9pbmRleC50c3giLCJ0cy9tZW51L21vYmlsZS1tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=