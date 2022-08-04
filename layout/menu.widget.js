define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/base", "@beyond-js/kernel/core", "@beyond/docs/layout/styles", "react@17.0.2", "@beyond/docs/store", "@beyond/ui/icons", "@beyond/ui/image", "@beyond/docs/components/html", "@beyond-js/kernel/routing", "@beyond/docs/ui/icons", "@beyond/ui/reactive-model", "@beyond-js/kernel/texts", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetMenu = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/menu",
    "multibundle": true,
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_5]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles", "@beyond/docs/store", "@beyond/ui/icons", "@beyond/ui/image", "@beyond/docs/components/html", "@beyond/docs/ui/icons", "@beyond/ui/reactive-model"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "menu-layout",
    "id": "@beyond/docs/layout/menu.widget",
    "is": "layout"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/layout/menu.widget');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2850610663,
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
        children: (0, _structureItem.structureItems)(['dev-server', 'foundations/distributions', 'foundations/hmr', 'foundations/bee' // 'multilanguage',
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

      const Menu = [_starting.starting, _basics.basics, _fundamentals.fundamentals // config,
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
    hash: 683677327,
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
        const [ready, texts] = (0, _store.useTexts)(_beyond_context.module.resource);
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
    hash: 960313775,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MenuStore = void 0;

      var _reactiveModel = require("@beyond/ui/reactive-model");

      class MenuStore extends _reactiveModel.ReactiveModel {
        constructor() {
          super(); // this.#texts = new CurrentTexts(module.resource);
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
  let Controller, WidgetMenu; // Module exports

  _exports.WidgetMenu = WidgetMenu;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'WidgetMenu') && (_exports.WidgetMenu = WidgetMenu = require ? require('./menu/index').WidgetMenu : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlBLFNBQVMsRUFBaEIsR0FBcUIsRUFBRSxFQUE1RDtRQUVBLE9BQ0k1QztVQUFJNEMsU0FBUyxFQUFFTjtRQUFmdEMsR0FDS3NELE1BREx0RCxDQURKO01BS0g7Ozs7Ozs7Ozs7Ozs7Ozs7O01DNUJEOztNQUNBOztNQUVNLFNBQVVvRCxVQUFWLEdBQW9CO1FBQ3RCLE1BQU07VUFBQzlDO1FBQUQsSUFBVSw4QkFBaEI7UUFDQSxPQUNJTiwwQ0FDSUE7VUFBSTRDLFNBQVMsRUFBQztRQUFkNUMsR0FDSUEsZ0NBQUlBO1VBQUc4RCxJQUFJLEVBQUM7UUFBUjlELEdBQWdDTSxLQUFLLENBQUNoQixRQUF0Q1UsQ0FBSkEsQ0FESkEsRUFFSUEsZ0NBQUlBO1VBQUc4RCxJQUFJLEVBQUM7UUFBUjlELEdBQXVCTSxLQUFLLENBQUNxRSxhQUE3QjNFLENBQUpBLENBRkpBLEVBR0lBLGdDQUFJQTtVQUFHOEQsSUFBSSxFQUFDO1FBQVI5RCxHQUFxQk0sS0FBSyxDQUFDc0UsUUFBM0I1RSxDQUFKQSxDQUhKQSxDQURKQSxDQURKO01BU0g7Ozs7Ozs7Ozs7Ozs7Ozs7O01DZEQ7O01BTU0sTUFBTzFCLFNBQVAsU0FBeUJ1Ryw0QkFBekIsQ0FBc0M7UUFFeENDO1VBQ0ksUUFESkEsQ0FFSTtVQUNBO1FBQ0g7O01BTnVDIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIldpZGdldE1lbnUiLCJmZXRjaCIsImNyZWF0ZVN0b3JlIiwiTWVudVN0b3JlIiwiY2hpbGRyZW4iLCJhcGkiLCJpZCIsImxhYmVsIiwicHJvamVjdHMiLCJtb2R1bGVzIiwic3R5bGVzIiwid2lkZ2V0cyIsImdlbmVyYWwiLCJiYXNpY3MiLCJjb25maWciLCJmdW5kYW1lbnRhbHMiLCJNZW51Iiwic3RhcnRpbmciLCJvYmoiLCJ0dXRvcmlhbCIsIml0ZW1zIiwic3RydWN0dXJlSXRlbXMiLCJkYXRhIiwibWFwIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImRlZmF1bHRWYWx1ZSIsIk1lbnVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTWVudUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXR0cmlidXRlcyIsInJlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInBhcmVudCIsInVzZVJlZiIsIm9wZW5lZExvY2FsIiwid2luZG93IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInVzZVN0YXRlIiwiaW5jbHVkZXMiLCJvcHRpb24iLCJnZXQiLCJjbG9zZU1lbnUiLCJpc09wZW5lZCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInNldEl0ZW0iLCJtZW51IiwiaW5zdGFuY2VzIiwiZmluZCIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsb3NlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJyb3V0aW5nIiwidXJpIiwicmVmIiwiY2xhc3NOYW1lIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIkJleW9uZEljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIk1vYmlsZU1lbnUiLCJMaXN0Iiwib3V0cHV0IiwiaSIsIk1lbnVJdGVtIiwia2V5IiwiUGFyZW50SXRlbSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0Iiwic2VsZWN0ZWQiLCJocmVmIiwiQXBwSWNvbiIsImxldmVsIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiY3VycmVudEFjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJhZGQiLCJwdXNoU3RhdGUiLCJsaW5rIiwicmVxdWlyZSIsImNsc1RvQXBwbHkiLCJkb2N1bWVudGF0aW9uIiwiZXhhbXBsZXMiLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2NvbnRyb2xsZXIudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9kYXRhL2FwaS50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2RhdGEvYmFzaWNzLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvZGF0YS9jb25maWcudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9kYXRhL2Z1bmRhbWVudGFscy50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL2RhdGEvaW5kZXgudHMiLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9kYXRhL3N0YXJ0aW5nLnRzIiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvZGF0YS9zdHJ1Y3R1cmUtaXRlbS50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL21lbnUvY29udGV4dC50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9tZW51L3RzL21lbnUvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvbWVudS9pdGVtcy9pbmRleC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9tZW51L2xpc3QvaW5kZXgudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21lbnUvdHMvbWVudS9tb2JpbGUtbWVudS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvbWVudS90cy9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19