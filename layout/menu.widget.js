System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/react-widgets@18.20.1/base", "@beyond-js/kernel@0.1.0/core", "@beyond/docs@1/layout/styles", "react@18.2.0", "@beyond/docs@1/store", "@beyond/ui@1.0.0/icons", "@beyond/ui@1.0.0/image", "@beyond/docs@1/components/html", "@beyond-js/kernel@0.1.0/routing", "@beyond/docs@1/ui/icons", "@beyond/ui@1.0.0/reactive-model", "@beyond-js/kernel@0.1.0/texts", "@beyond-js/kernel@0.1.0/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, WidgetMenu, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    WidgetMenu: void 0
  });
  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsReactWidgets18201Base) {
      dependency_2 = _beyondJsReactWidgets18201Base;
    }, function (_beyondJsKernel010Core) {
      dependency_3 = _beyondJsKernel010Core;
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
    }, function (_beyondJsKernel010Routing) {
      dependency_10 = _beyondJsKernel010Routing;
    }, function (_beyondDocs1UiIcons) {
      dependency_11 = _beyondDocs1UiIcons;
    }, function (_beyondUi100ReactiveModel) {
      dependency_12 = _beyondUi100ReactiveModel;
    }, function (_beyondJsKernel010Texts) {
      dependency_13 = _beyondJsKernel010Texts;
    }, function (_beyondJsKernel010Styles) {
      dependency_14 = _beyondJsKernel010Styles;
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
          "vspecifier": "@beyond/docs@1/layout/menu",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond/docs/layout/styles', dependency_4], ['react', dependency_5], ['@beyond/docs/store', dependency_6], ['@beyond/ui/icons', dependency_7], ['@beyond/ui/image', dependency_8], ['@beyond/docs/components/html', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond/docs/ui/icons', dependency_11], ['@beyond/ui/reactive-model', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
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
        hash: 514009407,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _menu = require("./menu");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _menu.WidgetMenu;
            }
            async fetch() {}
            createStore() {
              return new _store.MenuStore();
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

      /*****************************
      INTERNAL MODULE: ./data/basics
      *****************************/

      ims.set('./data/basics', {
        hash: 4130205166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basics = void 0;
          var _structureItem = require("./structure-item");
          const projects = ["projects/intro", "projects/create", "projects/structure", "projects/json", "projects/import", "projects/dependencies"];
          const modules = ['modules/introduction', 'modules/create', 'modules/json'];
          const styles = ["styles/template", "styles/modules", "styles/themes", "styles/imports"];
          const widgets = ["widgets", "widgets/definition", "widgets/controller", "widgets/page", "widgets/layout", "widgets/rendering"];
          const general = (0, _structureItem.structureItems)([['projects', (0, _structureItem.structureItems)(projects)], ['modules', (0, _structureItem.structureItems)(modules)], 'bundles', 'processors', 'template', ['widgets', (0, _structureItem.structureItems)(widgets)], 'routing', 'state/management', 'backend', ['styles', (0, _structureItem.structureItems)(styles)]]);
          const basics = {
            id: 'concepts',
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

      /***********************************
      INTERNAL MODULE: ./data/fundamentals
      ***********************************/

      ims.set('./data/fundamentals', {
        hash: 138307814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.fundamentals = void 0;
          var _structureItem = require("./structure-item");
          const fundamentals = {
            id: 'fundamentals',
            children: (0, _structureItem.structureItems)(['dev-server', 'foundations/distributions', 'foundations/hmr', 'foundations/bee'
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
        hash: 2176554652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _starting = require("./starting");
          var _basics = require("./basics");
          var _fundamentals = require("./fundamentals");
          const Menu = [_starting.starting, _basics.basics, _fundamentals.fundamentals
          // config,
          // api
          ];

          exports.Menu = Menu;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data/starting
      *******************************/

      ims.set('./data/starting', {
        hash: 3436517680,
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
          const tutorial = (0, _structureItem.structureItems)(['tutorial/start', 'tutorial/first-module', 'tutorial/backend', 'tutorial/bridge', 'tutorial/routing']);
          const items = ['intro', 'quick-start', ['tutorial', tutorial], 'dashboard'];
          const children = (0, _structureItem.structureItems)(items);
          const starting = {
            id: 'getting-start',
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
        hash: 3399818687,
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
            const cls = `docs__menu__sublist${className ? ` ${className}` : ''}`;
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
              event.currentTarget.closest('li').classList.toggle('item--opened');
            };
            const selected = item.children.find(item => `/docs/${item.id}` === current.uri);
            const cls = `menu__item--parent${!!selected ? ' item--opened' : ''}`;
            return React.createElement("li", {
              className: cls
            }, React.createElement("section", {
              onClick: onClick
            }, React.createElement("a", {
              href: ""
            }, React.createElement("span", null, texts[item.id])), React.createElement(_icons.AppIcon, {
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
              const container = event.currentTarget.closest('aside');
              const target = event.currentTarget.closest('li');
              const currentActive = container.querySelector('.active-item');
              if (currentActive) currentActive.classList.remove('active-item');
              target.classList.add('active-item');
              _routing.routing.pushState(uri);
              close();
            };
            const cls = `${uri === current.uri ? 'active-item' : ''}`;
            const link = `/docs/${item.id}`;
            return React.createElement("li", {
              className: cls
            }, React.createElement("a", {
              href: link,
              onClick: onClick
            }, texts[link]));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./menu/list/index
      *********************************/

      ims.set('./menu/list/index', {
        hash: 797765173,
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
            } = require('../items/index');
            const output = items.map((item, i) => React.createElement(MenuItem, {
              item: item,
              key: `${item.id}.${i}`
            }));
            const clsToApply = level ? 'docs__menu__sublist' : 'docs__menu__list';
            const cls = `${clsToApply}${className ? ` ${className}` : ''}`;
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 156309284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuStore = void 0;
          var _reactiveModel = require("@beyond/ui/reactive-model");
          class MenuStore extends _reactiveModel.ReactiveModel {
            constructor() {
              super();
              // this.#texts = new CurrentTexts(module.specifier);
              // this.#texts.on('change', this.#listen);
            }
          }

          exports.MenuStore = MenuStore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUM7WUFBSyxDQUFDLEdBQUcsMkJBQWMsR0FBRTtZQUNoQyxPQUNJTiwwQ0FDSUE7Y0FBSTRDLFNBQVMsRUFBQztZQUErQixHQUN6QzVDLGdDQUFJQTtjQUFHOEQsSUFBSSxFQUFDO1lBQXNCLEdBQUV4RCxLQUFLLENBQUNoQixRQUFRLENBQUssQ0FBSyxFQUM1RFUsZ0NBQUlBO2NBQUc4RCxJQUFJLEVBQUM7WUFBYSxHQUFFeEQsS0FBSyxDQUFDcUUsYUFBYSxDQUFLLENBQUssRUFDeEQzRSxnQ0FBSUE7Y0FBRzhELElBQUksRUFBQztZQUFXLEdBQUV4RCxLQUFLLENBQUNzRSxRQUFRLENBQUssQ0FBSyxDQUNoRCxDQUNOO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEE7VUFNTSxNQUFPdkcsU0FBVSxTQUFRd0csNEJBQWE7WUFFeENDO2NBQ0ksS0FBSyxFQUFFO2NBQ1A7Y0FDQTtZQUNKOzs7VUFFSHhHIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIldpZGdldE1lbnUiLCJmZXRjaCIsImNyZWF0ZVN0b3JlIiwiTWVudVN0b3JlIiwiZXhwb3J0cyIsImNoaWxkcmVuIiwiYXBpIiwiaWQiLCJsYWJlbCIsInByb2plY3RzIiwibW9kdWxlcyIsInN0eWxlcyIsIndpZGdldHMiLCJnZW5lcmFsIiwiYmFzaWNzIiwiY29uZmlnIiwiZnVuZGFtZW50YWxzIiwiTWVudSIsInN0YXJ0aW5nIiwib2JqIiwidHV0b3JpYWwiLCJpdGVtcyIsInN0cnVjdHVyZUl0ZW1zIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJkZWZhdWx0VmFsdWUiLCJNZW51Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1lbnVDb250ZXh0IiwidXNlQ29udGV4dCIsImF0dHJpYnV0ZXMiLCJyZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicGFyZW50IiwidXNlUmVmIiwib3BlbmVkTG9jYWwiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3BlbmVkIiwic2V0T3BlbmVkIiwidXNlU3RhdGUiLCJpbmNsdWRlcyIsIm9wdGlvbiIsImdldCIsImNsb3NlTWVudSIsImlzT3BlbmVkIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwic2V0SXRlbSIsIm1lbnUiLCJpbnN0YW5jZXMiLCJmaW5kIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiY2xvc2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInJvdXRpbmciLCJ1cmkiLCJyZWYiLCJjbGFzc05hbWUiLCJCZXlvbmRJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiQmV5b25kSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwiTW9iaWxlTWVudSIsIkxpc3QiLCJvdXRwdXQiLCJpIiwiTWVudUl0ZW0iLCJrZXkiLCJQYXJlbnRJdGVtIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RlZCIsImhyZWYiLCJBcHBJY29uIiwibGV2ZWwiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJjdXJyZW50QWN0aXZlIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImFkZCIsInB1c2hTdGF0ZSIsImxpbmsiLCJyZXF1aXJlIiwiY2xzVG9BcHBseSIsImRvY3VtZW50YXRpb24iLCJleGFtcGxlcyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvY29udHJvbGxlci50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2RhdGEvYXBpLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvZGF0YS9iYXNpY3MudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9kYXRhL2NvbmZpZy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2RhdGEvZnVuZGFtZW50YWxzLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvZGF0YS9pbmRleC50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2RhdGEvc3RhcnRpbmcudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9kYXRhL3N0cnVjdHVyZS1pdGVtLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvbWVudS9jb250ZXh0LnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvbWVudS9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9tZW51L2l0ZW1zL2luZGV4LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL21lbnUvbGlzdC9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9tZW51L21vYmlsZS1tZW51LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=