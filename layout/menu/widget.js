define(["exports", "@beyond-js/kernel/react-widget/ts", "@beyond-js/kernel/core/ts", "@beyond/docs/layout/styles/code", "react", "@beyond-js/kernel/routing/ts", "@beyond/docs/ui/icons/code", "@beyond/docs/manager/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Widget = _exports2.Controller = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_0);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_1);
  dependencies.set('@beyond/docs/layout/styles/code', dependency_2);
  dependencies.set('react', dependency_3);
  dependencies.set('@beyond-js/kernel/routing/ts', dependency_4);
  dependencies.set('@beyond/docs/ui/icons/code', dependency_5);
  dependencies.set('@beyond/docs/manager/code', dependency_6);
  dependencies.set('@beyond/docs/store/code', dependency_7);
  dependencies.set('@beyond/ui/icons/code', dependency_8);
  dependencies.set('@beyond/ui/image/code', dependency_9);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/layout/menu/widget', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 280007429,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        async fetch() {}

        createStore() {
          return undefined;
        }

      }

      exports.Controller = Controller;
    }
  });
  /**********************
  INTERNAL MODULE: ./data
  **********************/

  modules.set('./data', {
    hash: 2129689643,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Menu = void 0;
      const Menu = [{
        id: 'getting-start',
        label: 'Empezando',
        children: [{
          id: '',
          label: 'Introducción'
        }, {
          id: 'install',
          label: 'Instalación'
        }, {
          id: 'tutorial/web',
          label: "Tutorial"
        }, {
          id: 'dashboard',
          label: 'Dashboard'
        }]
      }, {
        id: 'concepts',
        label: 'Conceptos Básicos',
        children: [{
          id: 'projects',
          label: 'Projectos'
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
          label: 'Páginas, layouts y widgets'
        }, {
          id: 'routing',
          label: 'Enrutamiento'
        }, {
          id: 'state-management',
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
      }, {
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
      }, {
        id: 'configuration',
        label: 'Configuracion',
        children: [{
          id: 'template',
          label: 'Plantilla'
        }]
      }, {
        id: 'reference',
        label: 'API',
        children: [{
          id: 'server',
          label: 'Server'
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
      }];
      exports.Menu = Menu;
    }
  });
  /******************************
  INTERNAL MODULE: ./view/context
  ******************************/

  modules.set('./view/context', {
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
  /**********************************
  INTERNAL MODULE: ./view/items/index
  **********************************/

  modules.set('./view/items/index', {
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
  INTERNAL MODULE: ./view/list
  ***************************/

  modules.set('./view/list', {
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
  });
  /***************************
  INTERNAL MODULE: ./view/menu
  ***************************/

  modules.set('./view/menu', {
    hash: 3814178887,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");

      var _data = require("../data");

      var _list = require("./list");

      var _context = require("./context");

      var _code = require("@beyond/docs/manager/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/ui/icons/code");

      var _code4 = require("@beyond/ui/image/code");
      /*bundle*/


      function Widget() {
        const [selected, setSelected] = React.useState();
        const [value, setValue] = React.useState({
          selected,
          setSelected
        });
        const parent = React.useRef(null);
        const openedLocal = typeof window !== undefined ? window.localStorage.getItem('__menu_opened') : true;
        const [opened] = React.useState([true, 'true'].includes(openedLocal));
        React.useEffect(() => {
          setValue({ ...value,
            container: parent?.current
          });
        }, []);
        (0, _code2.useBinder)([_code.AppManager], () => {
          parent.current.classList.toggle('docs__menu--opened'); // toggleMenu(!opened);
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
        }, React.createElement("div", {
          className: ""
        }, React.createElement("div", {
          className: "mobile-only"
        }, React.createElement(_code4.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo",
          alt: "Beyond the universal meta framework"
        })), React.createElement("h4", null, "Contents")), React.createElement(_code3.BeyondIconButton, {
          onClick: close,
          className: "docs__menu__list__btn-close",
          icon: "close"
        })), React.createElement(_list.List, {
          items: _data.Menu
        }))));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Controller = require('./controller').Controller;
    _exports.Widget = require('./view/menu').Widget;
  };

  let Controller, Widget; // Module exports

  _exports2.Widget = Widget;
  _exports2.Controller = Controller;

  __pkg.exports.process = function (require) {
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.Widget = Widget = require('./view/menu').Widget;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});