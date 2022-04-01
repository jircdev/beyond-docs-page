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
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '.flex-center{place-content:center;place-items:center;display:flex;gap:15px}.flex-center-y{display:flex;align-items:center;align-content:center;gap:15px}.flex-center-x{display:flex;justify-content:center;gap:15px}.f-container,.flex-container{display:flex}.f-container.f-space-between,.f-container.space-between,.flex-container.f-space-between,.flex-container.space-between{justify-content:space-between}.f-container.gap-5,.flex-container.gap-5{gap:5px}.f-container.gap-10,.flex-container.gap-10{gap:10px}.f-container.gap-15,.flex-container.gap-15{gap:15px}.f-container.gap-30,.flex-container.gap-30{gap:30px}.pd-15{padding:15px}.line-border-b{border-bottom:1px solid var(--primary-accent)}.aside__header{display:flex;position:relative;flex-direction:column;border-bottom:1px solid var(--separator-color);align-content:center;margin-bottom:1rem}.aside__header .menu-docs__mobile-header{display:none}.aside__header .img-logo{margin:0;width:50%;justify-content:left}.aside__header .img-logo img{width:100%;height:30px;object-fit:contain;object-position:left}.aside__header h4{display:block;margin:0;padding:0}.aside__header .mobile-only{display:none;content:"max-width: 480px"}@media (max-width:480px){.aside__header .mobile-only{display:flex}}.aside__header .docs__menu__list__btn-close{position:absolute;right:15px;height:30px;width:30px;background:0 0}.aside__header .docs__menu__list__btn-close svg{fill:var(--primary-accent)}.docs__menu__list>li,.docs__menu__sublist>li{display:grid;cursor:pointer;align-items:center}.docs__menu__list>li section:hover span,.docs__menu__sublist>li section:hover span{color:var(--primary-accent)}.docs__menu__list>li>section,.docs__menu__sublist>li>section{display:flex;gap:5px;align-items:center;accent-color:var(--text-second-color);transition:.3s all ease-in;padding:10px 0}.docs__menu__list>li>section .beyond-icon,.docs__menu__sublist>li>section .beyond-icon{fill:var(--text-color)}.docs__menu__list>li.item--opened .beyond-icon,.docs__menu__sublist>li.item--opened .beyond-icon{transform:rotate(90deg)}.docs__menu__list li>ul,.docs__menu__sublist li>ul{display:none}.docs__menu__list li.item--opened>ul,.docs__menu__sublist li.item--opened>ul{list-style:none;padding:0;display:grid;grid-gap:5px;border-left:1px solid var(--color-gray-20);margin-left:15px}.docs__menu__list li.item--opened>ul li,.docs__menu__sublist li.item--opened>ul li{padding-left:15px;margin-left:-1px}.docs__menu__list li.item--opened>ul li.active-item,.docs__menu__sublist li.item--opened>ul li.active-item{border-left:2px solid var(--text-hover-color)}aside.docs__menu{flex-direction:column;content:"max-width: 768px";border-radius:4px;z-index:12;position:sticky;top:65px;border-right:1px solid var(--element-border-color)}@media (max-width:768px){aside.docs__menu{padding:15px}}aside.docs__menu *{font-size:1rem}aside.docs__menu *{color:rgba(var(--text-color),.9)}aside.docs__menu .docs__menu__list{--item-border:var(--primary);display:grid;grid-gap:5px;list-style:none;padding:0;margin:0;position:sticky;top:0}aside.docs__menu{content:"max-width: 1200px"}@media (max-width:1200px){aside.docs__menu{position:fixed;left:0;width:0;bottom:0;top:0;transition:150ms ease-in all;overflow:hidden;padding:0;z-index:101;content:"max-width: 768px"}aside.docs__menu .menu-mobile-container{background:var(--background);height:100%;width:40%}}@media (max-width:1200px) and (max-width:768px){aside.docs__menu .menu-mobile-container{width:90%}}@media (max-width:1200px){aside.docs__menu.docs__menu--opened{width:100%;background:rgba(0,0,0,.7)}aside.docs__menu.docs__menu--opened .beyond-perfect-scrollbar{width:80%;height:100%}aside.docs__menu .menu-docs__mobile-header{display:flex;place-items:center;justify-content:space-between;gap:15px}aside.docs__menu .menu-docs__mobile-header .img-logo{height:20px;margin-top:2px}}';
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
    hash: 2566012811,
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
          id: 'modules',
          label: 'Módulos'
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
  /************************************
  INTERNAL MODULE: ./view/item-children
  ************************************/

  modules.set('./view/item-children', {
    hash: 0,
    creator: function (require, exports) {
      "use strict";
    }
  });
  /**********************************
  INTERNAL MODULE: ./view/items/index
  **********************************/

  modules.set('./view/items/index', {
    hash: 1584621010,
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
        const output = items.map(item => React.createElement(MenuItem, {
          item: item,
          key: item.id
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

          _ts.routing.pushState(`/${item.id}`);

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
    hash: 1833651499,
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

        const output = items.map(item => React.createElement(MenuItem, {
          item: item,
          key: item.id
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
    hash: 30306185,
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
          className: "aside__header pd-15"
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