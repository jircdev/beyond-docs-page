define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond-js/kernel/core/ts", "@beyond/docs/layout/styles/code", "react", "@beyond/docs/manager/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond-js/kernel/routing/ts", "@beyond/docs/ui/icons/code", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12) {
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

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles/code", "@beyond/docs/manager/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/ui/icons/code"]));

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
    hash: 291579804,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.api = void 0;
      const api = {
        id: 'reference',
        label: 'API',
        children: [{
          id: 'server',
          label: 'Server'
        }, {
          id: '/api/uri',
          label: 'URI'
        }, {
          id: "/api/BeyondWidget",
          label: "Objeto widget"
        }, {
          id: 'projects',
          label: 'Configuración de proyectos'
        }, {
          id: 'modules',
          label: 'Modules'
        }, {
          id: 'bundles',
          label: 'Bundles'
        }, {
          id: 'processors',
          label: 'Processors'
        }]
      };
      exports.api = api;
    }
  });
  /*****************************
  INTERNAL MODULE: ./data/basics
  *****************************/

  ims.set('./data/basics', {
    hash: 1154674465,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.basics = void 0;

      var _structureItem = require("./structure-item");

      const projects = [["projects/intro", 'Introducción'], ["projects/create", 'Crear un proyecto'], ["projects/structure", 'Estructura'], ["projects/json", 'project.json'], ["projects/import", 'Importar un proyecto']];
      const basics = {
        id: 'concepts',
        label: 'Conceptos Básicos',
        children: [{
          id: 'projects',
          label: 'Proyectos',
          children: (0, _structureItem.structureItems)(projects)
        }, {
          label: 'Módulos',
          children: [{
            id: 'modules/introduction',
            label: 'Modulos en Beyond'
          }, {
            id: 'modules/config',
            label: 'Configuración'
          }]
        }, {
          id: 'bundles',
          label: 'Bundles'
        }, {
          id: 'widgets',
          label: 'Widgets',
          children: [{
            id: "widgets",
            label: "Intro"
          }, {
            id: "widgets/definition",
            label: "Definición"
          }, {
            id: "widgets/controller",
            label: "Objeto Controller"
          }, {
            id: "widgets/page",
            label: "Page"
          }, {
            id: "widgets/layout",
            label: "Layout"
          }]
        }, {
          id: 'routing',
          label: 'Enrutamiento'
        }, {
          id: 'state/management',
          label: 'Manejo de Estados'
        }, {
          id: 'styles',
          label: 'Estilos'
        }, {
          id: 'themes',
          label: 'Light & Dark Theme'
        }, {
          id: 'backend',
          label: 'Backend'
        }, {
          id: 'ssr',
          label: 'Server side rendering'
        }]
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
    hash: 737615441,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.fundamentals = void 0;
      const fundamentals = {
        id: 'fundamentals',
        label: 'Fundamentos',
        children: [{
          id: 'why-beyond',
          label: '¿Porque Beyond?'
        }, {
          id: 'npm-packages',
          label: 'Paquetes Npm'
        }, {
          id: 'hmr',
          label: 'HMR'
        }, {
          id: "processors",
          label: "Procesadores"
        }, {
          id: 'bee',
          label: 'BEE'
        }]
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
    hash: 1856001319,
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

      const items = [['intro', 'Introducción'], ['quick-start', 'Inicio rápido'], ['install', 'Instalación'], ['tutorial/web', 'Tutorial'], ['dashboard', 'Dashboard']];
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
    hash: 4019233650,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.structureItems = void 0;

      const structureItems = data => data.map(([id, label]) => ({
        id,
        label
      }));

      exports.structureItems = structureItems;
    }
  });
  /******************************
  INTERNAL MODULE: ./menu/context
  ******************************/

  ims.set('./menu/context', {
    hash: 313557389,
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
    hash: 4228547397,
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

      var _code = require("@beyond/docs/manager/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/ui/icons/code");

      var _code4 = require("@beyond/ui/image/code");
      /*bundle*/


      function WidgetMenu() {
        const [selected, setSelected] = React.useState();
        const [value, setValue] = React.useState({
          selected,
          setSelected
        });
        const parent = React.useRef(null);
        const openedLocal = typeof window !== undefined ? window?.localStorage.getItem('__menu_opened') : true;
        const [opened] = React.useState([true, 'true'].includes(openedLocal));
        React.useEffect(() => setValue({ ...value,
          container: parent?.current
        }), []);
        (0, _code2.useBinder)([_code.AppManager], () => parent.current.classList.toggle('docs__menu--opened'));

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
        return React.createElement(_context.MenuContext.Provider, {
          value: {
            container: value.container,
            close: closeMenu
          }
        }, React.createElement("aside", {
          ref: parent,
          className: cls
        }, React.createElement("div", {
          className: "menu-mobile-container"
        }, React.createElement("header", {
          className: "aside__header"
        }, React.createElement("div", null, React.createElement(_code4.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo mobile-only",
          alt: "Beyond the universal meta framework"
        }), React.createElement("h4", null, "Contents")), React.createElement(_code3.BeyondIconButton, {
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
    hash: 1922908051,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.List = List;
      exports.MenuItem = MenuItem;
      exports.ParentItem = ParentItem;

      var React = require("react");

      var _ts = require("@beyond-js/kernel/routing/ts");

      var _context = require("../context");

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

        return React.createElement("li", null, React.createElement("section", {
          onClick: onClick
        }, React.createElement(_code.AppIcon, {
          icon: "chevronRight"
        }), " ", React.createElement("span", null, item.label)), React.createElement(List, {
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
          const target = event.currentTarget;
          const currentActive = container.querySelector('.active-item');
          if (currentActive) currentActive.classList.remove('active-item');
          target.classList.toggle('active-item');

          _ts.routing.pushState(`/docs/${item.id}`);

          close();
        };

        const cls = `item--opened`;
        return React.createElement("li", {
          onClick: onClick,
          className: cls
        }, React.createElement("section", null, React.createElement("span", null, item.label)));
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./menu/list
  ***************************/

  ims.set('./menu/list', {
    hash: 2630424517,
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