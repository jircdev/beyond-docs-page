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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@bgroup/ui", "0.0.29"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 2610987312,
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
        hash: 743494814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("../structure-item");
          const packages = ['packages/create', 'packages/types', 'packages/distributions', 'packages/json', 'packages/publish', 'packages/beyondjs', 'packages/dependencies', 'deployment'];
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
        hash: 3226782451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("../structure-item");
          const fundamentals = {
            id: 'fundamentals',
            children: (0, _structureItem.structureItems)(['cli', 'bare-specifiers', 'modular', 'universal', 'dev-server', 'fundamentals/hmr'])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDOUMsTUFBTW5CLE1BQU0sR0FBR2hFLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRTRELENBQUMsS0FBS3ZELG9CQUFDd0QsUUFBUTtjQUFDN0QsSUFBSSxFQUFFQSxJQUFJO2NBQUU4RCxHQUFHLEVBQUUsR0FBRzlELElBQUksQ0FBQ2hCLEVBQUUsSUFBSTRFLENBQUM7WUFBRSxFQUFJLENBQUM7WUFDdkYsTUFBTW1CLFVBQVUsR0FBR1YsS0FBSyxHQUFHLHFCQUFxQixHQUFHLGtCQUFrQjtZQUNyRSxNQUFNMUIsR0FBRyxHQUFHLEdBQUdvQyxVQUFVLEdBQUc5QixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRTlELE9BQU81QztjQUFJNEMsU0FBUyxFQUFFTjtZQUFHLEdBQUdnQixNQUFNLENBQU07VUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBO1VBQ0E7VUFFTSxTQUFVRixVQUFVO1lBQ3RCLE1BQU07Y0FBQzlDO1lBQUssQ0FBQyxHQUFHLDJCQUFjLEdBQUU7WUFDaEMsT0FDSU4sMENBQ0lBO2NBQUk0QyxTQUFTLEVBQUM7WUFBK0IsR0FDekM1QyxnQ0FBSUE7Y0FBRzhELElBQUksRUFBQztZQUFzQixHQUFFeEQsS0FBSyxDQUFDbEIsUUFBUSxDQUFLLENBQUssRUFDNURZLGdDQUFJQTtjQUFHOEQsSUFBSSxFQUFDO1lBQWEsR0FBRXhELEtBQUssQ0FBQ3FFLGFBQWEsQ0FBSyxDQUFLLEVBQ3hEM0UsZ0NBQUlBO2NBQUc4RCxJQUFJLEVBQUM7WUFBVyxHQUFFeEQsS0FBSyxDQUFDc0UsUUFBUSxDQUFLLENBQUssQ0FDaEQsQ0FDTjtVQUVYIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIldpZGdldE1lbnUiLCJleHBvcnRzIiwiTWVudSIsInN0YXJ0aW5nIiwiYmFzaWNzIiwiYmFja2VuZCIsImZyb250ZW5kIiwiZnVuZGFtZW50YWxzIiwiY2hpbGRyZW4iLCJhcGkiLCJpZCIsImxhYmVsIiwiZ2VuZXJhbCIsInBhY2thZ2VzIiwibW9kdWxlcyIsImNvbmZpZyIsInN0eWxlcyIsIndpZGdldHMiLCJvYmoiLCJ0dXRvcmlhbCIsImJhc2UiLCJpdGVtcyIsInN0cnVjdHVyZUl0ZW1zIiwiZGF0YSIsInJlc3BvbnNlIiwibWFwIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImRlZmF1bHRWYWx1ZSIsIk1lbnVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTWVudUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXR0cmlidXRlcyIsInJlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwYXJlbnQiLCJ1c2VSZWYiLCJvcGVuZWRMb2NhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJ1c2VTdGF0ZSIsImluY2x1ZGVzIiwib3B0aW9uIiwiZ2V0IiwiY2xvc2VNZW51IiwiaXNPcGVuZWQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJzZXRJdGVtIiwibWVudSIsImluc3RhbmNlcyIsImZpbmQiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjbG9zZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbHMiLCJQcm92aWRlciIsInZhbHVlIiwicm91dGluZyIsInVyaSIsInJlZiIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJCZXlvbmRJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJNb2JpbGVNZW51IiwiTGlzdCIsIm91dHB1dCIsImkiLCJNZW51SXRlbSIsImtleSIsIlBhcmVudEl0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsInNlbGVjdGVkIiwiaHJlZiIsIkFwcEljb24iLCJsZXZlbCIsImNvbnRhaW5lciIsInRhcmdldCIsImN1cnJlbnRBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiYWRkIiwicHVzaFN0YXRlIiwibGluayIsInJlcXVpcmUiLCJjbHNUb0FwcGx5IiwiZG9jdW1lbnRhdGlvbiIsImV4YW1wbGVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvZGF0YS9pbmRleC50cyIsInRzL2RhdGEvc2VjdGlvbnMvYXBpLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9iYWNrZW5kLnRzIiwidHMvZGF0YS9zZWN0aW9ucy9iYXNpY3MudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2NvbmZpZy50cyIsInRzL2RhdGEvc2VjdGlvbnMvZnJvbnRlbmQudHMiLCJ0cy9kYXRhL3NlY3Rpb25zL2Z1bmRhbWVudGFscy50cyIsInRzL2RhdGEvc2VjdGlvbnMvc3RhcnRpbmcudHMiLCJ0cy9kYXRhL3N0cnVjdHVyZS1pdGVtLnRzIiwidHMvbWVudS9jb250ZXh0LnRzIiwidHMvbWVudS9pbmRleC50c3giLCJ0cy9tZW51L2l0ZW1zL2luZGV4LnRzeCIsInRzL21lbnUvbGlzdC9pbmRleC50c3giLCJ0cy9tZW51L21vYmlsZS1tZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=