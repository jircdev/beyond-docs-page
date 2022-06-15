define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond-js/kernel/core/ts", "@beyond/docs/layout/styles/code", "react", "@beyond/docs/manager/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/components/html/code", "@beyond-js/kernel/routing/ts", "@beyond/docs/ui/icons/code", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.WidgetMenu = _exports2.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/layout/menu/widget").package();

  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles/code", "@beyond/docs/manager/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/components/html/code", "@beyond/docs/ui/icons/code"]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "menu-layout",
    "id": "@beyond/docs/layout/menu/widget",
    "is": "layout"
  }]);

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/layout/menu/widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 935680079,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _menu = require("./menu");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        get Widget() {
          return _menu.WidgetMenu;
        }

        async fetch() {}

        createStore() {
          return undefined;
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
    hash: 163841201,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.basics = void 0;

      var _structureItem = require("./structure-item");

      const projects = [["projects/intro", 'Introducción'], ["projects/create", 'Crear un proyecto'], ["projects/structure", 'Estructura'], ["projects/json", 'project.json'], ["projects/import", 'Importar un proyecto'], ["projects/dependencies", 'Dependencias']];
      const modules = [['modules/introduction', 'Modulos en Beyond'], ['modules/create', 'Crear un módulo'], ['modules/json', 'Configuración']];
      const styles = [["styles/template", "Template"], ["styles/modules", "Modulos"], ["styles/themes", "Light & Dark theme"], ["styles/imports", "Importación"]];
      const widgets = [["widgets", "Intro"], ["widgets/definition", "Definición"], ["widgets/controller", "Objeto Controller"], ["widgets/page", "Page"], ["widgets/layout", "Layout"]];
      const general = (0, _structureItem.structureItems)([['projects', 'Proyectos', (0, _structureItem.structureItems)(projects)], [undefined, 'Módulos', (0, _structureItem.structureItems)(modules)], ['bundles', 'Bundles'], ['processors', 'Processors'], ['template', 'Sistema de Plantillas'], ['widgets', 'Widgets', (0, _structureItem.structureItems)(widgets)], ['routing', 'Enrutamiento'], ['state/management', 'Manejo de Estados'], ['backend', 'Backend'], ['styles', 'Estilos', (0, _structureItem.structureItems)(styles)]]);
      const basics = {
        id: 'concepts',
        label: 'Conceptos Básicos',
        children: general
      };
      exports.basics = basics;
    }
  });
  /*****************************
  INTERNAL MODULE: ./data/config
  *****************************/

  ims.set('./data/config', {
    hash: 4150105189,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.config = void 0;
      const config = {
        id: 'configuration',
        label: 'Configuracion',
        children: [{
          id: 'template',
          label: 'Plantilla'
        }]
      };
      exports.config = config;
    }
  });
  /***********************************
  INTERNAL MODULE: ./data/fundamentals
  ***********************************/

  ims.set('./data/fundamentals', {
    hash: 2993847269,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.fundamentals = void 0;

      var _structureItem = require("./structure-item");

      const fundamentals = {
        id: 'fundamentals',
        label: 'Fundamentos',
        children: (0, _structureItem.structureItems)([['dev-server', "Servidor de desarrollo"], ['distributions', 'Distribuciones'], ["processors", "Procesadores"], ['hmr', 'HMR'], ['bee', 'BEE'], ['ssr', 'SSR'], ['multilanguage', 'Multilenguaje'], ['glossary', 'Glosario']])
      };
      exports.fundamentals = fundamentals;
    }
  });
  /****************************
  INTERNAL MODULE: ./data/index
  ****************************/

  ims.set('./data/index', {
    hash: 882885426,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Menu = void 0;

      var _starting = require("./starting");

      var _basics = require("./basics");

      var _fundamentals = require("./fundamentals");

      var _config = require("./config");

      var _api = require("./api");

      const Menu = [_starting.starting, _basics.basics, _fundamentals.fundamentals, _config.config, _api.api];
      exports.Menu = Menu;
    }
  });
  /*******************************
  INTERNAL MODULE: ./data/starting
  *******************************/

  ims.set('./data/starting', {
    hash: 965962719,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.starting = void 0;

      const obj = ([id, label]) => ({
        id,
        label
      });

      const items = [['intro', 'Introducción'], ['quick-start', 'Inicio rápido'], ['tutorial/web', 'Tutorial'], ['dashboard', 'Dashboard']];
      const children = items.map(obj);
      const starting = {
        id: 'getting-start',
        label: 'Empezando',
        children
      };
      exports.starting = starting;
    }
  });
  /*************************************
  INTERNAL MODULE: ./data/structure-item
  *************************************/

  ims.set('./data/structure-item', {
    hash: 2146397657,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.structureItems = void 0;

      const structureItems = data => data.map(([id, label, children = undefined]) => ({
        id,
        label,
        children
      }));

      exports.structureItems = structureItems;
    }
  });
  /******************************
  INTERNAL MODULE: ./menu/context
  ******************************/

  ims.set('./menu/context', {
    hash: 2111041036,
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
    hash: 2687607315,
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

      var _code = require("@beyond/docs/store/code");

      var _code2 = require("@beyond/ui/icons/code");

      var _code3 = require("@beyond/ui/image/code");

      var _beyond_context = require("beyond_context");

      var _code4 = require("@beyond/docs/components/html/code");
      /*bundle*/


      function WidgetMenu({
        attributes
      }) {
        const [ready, texts] = (0, _code.useTexts)(_beyond_context.module.resource);
        const parent = React.useRef(null);
        const openedLocal = typeof window !== undefined ? window?.localStorage.getItem('__menu_opened') : true;
        const [opened, setOpened] = React.useState([true, 'true'].includes(openedLocal));
        (0, _code.useBinder)([attributes], () => {
          const option = attributes.get('opened') === 'true';
          if (option !== opened) setOpened(option);
        });

        const closeMenu = () => {
          const isOpened = parent.current.classList.contains('docs__menu--opened');
          parent.current.classList.toggle('docs__menu--opened');
          window.localStorage.setItem('__menu_opened', `${!isOpened}`);
        };

        const close = event => {
          event.preventDefault();
          closeMenu();
        };

        const cls = `docs__menu${opened ? ` docs__menu--opened` : ''}`;
        if (!ready) return React.createElement(_code4.Loading, null);
        return React.createElement(_context.MenuContext.Provider, {
          value: {
            ready,
            texts,
            close: closeMenu
          }
        }, React.createElement("aside", {
          ref: parent,
          className: cls
        }, React.createElement("div", {
          className: "menu-mobile-container"
        }, React.createElement("header", {
          className: "aside__header"
        }, React.createElement("div", null, React.createElement(_code3.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo mobile-only",
          alt: "Beyond the universal meta framework"
        }), React.createElement("h4", null, "Contents")), React.createElement(_code2.BeyondIconButton, {
          onClick: close,
          className: "docs__menu__list__btn-close",
          icon: "close"
        })), React.createElement(_list.List, {
          items: _data.Menu
        }))));
      }
    }
  });
  /**********************************
  INTERNAL MODULE: ./menu/items/index
  **********************************/

  ims.set('./menu/items/index', {
    hash: 2902800005,
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

      var _ts = require("@beyond-js/kernel/routing/ts");

      var _code = require("@beyond/docs/ui/icons/code");

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
        const onClick = event => {
          event.preventDefault();
          event.currentTarget.closest('li').classList.toggle('item--opened');
        };

        return React.createElement("li", {
          className: "menu__item--parent"
        }, React.createElement("section", {
          onClick: onClick
        }, React.createElement("a", {
          href: ""
        }, React.createElement("span", null, item.label)), React.createElement(_code.AppIcon, {
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
          container,
          close
        } = (0, _context.useMenuContext)();
        if (item.children) return React.createElement(ParentItem, {
          item: item
        });

        const onClick = event => {
          event.preventDefault();
          const container = event.currentTarget.closest('aside');
          const target = event.currentTarget.closest('li');
          const currentActive = container.querySelector('.active-item');
          if (currentActive) currentActive.classList.remove('active-item');
          target.classList.add('active-item');

          _ts.routing.pushState(`/docs/${item.id}`);

          close();
        };

        const cls = ``;
        return React.createElement("li", {
          className: cls
        }, React.createElement("a", {
          href: `/docs/${item.id}`,
          onClick: onClick
        }, item.label));
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./menu/list
  ***************************/

  ims.set('./menu/list', {
    hash: 3013158509,
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
        } = require('./items/index');

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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.WidgetMenu = require('./menu/index').WidgetMenu;
  };

  let Controller, WidgetMenu; // Module exports

  _exports2.WidgetMenu = WidgetMenu;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.WidgetMenu = WidgetMenu = require('./menu/index').WidgetMenu;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});