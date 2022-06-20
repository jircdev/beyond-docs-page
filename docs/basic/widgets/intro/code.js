define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/next-links/code", "@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widgets = _exports.WidgetCreation = _exports.WidgetController = _exports.ViewFrameworks = _exports.PageWidget = _exports.LayoutWidget = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/intro/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/next-links/code", "@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code", "@beyond/docs/store/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/basic/widgets/intro/code');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3780607880,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetController = WidgetController;

      var React = require("react");

      var _code = require("@beyond/docs/components/next-links/code");

      var _code2 = require("@beyond/docs/components/html/code");

      var _code3 = require("@beyond/docs/code/code");

      var _code4 = require("@beyond/ui/link/code");

      const tplController = `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`;
      /*bundle*/

      function WidgetController() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "controller"
        }, "Definici\u00F3n del ", React.createElement("span", {
          className: "inline"
        }, "Controller")), React.createElement("p", null, "Todo widget debe exponer una clase ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " definida. El objeto Controller es el responsable de la declaraci\u00F3n y manejo del web-component que representa al widget y tiene una estructura como la siguiente:"), React.createElement(_code3.Code, {
          language: "ts"
        }, tplController), React.createElement("p", null, "En el c\u00F3digo anterior, la clase ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " extiende del objeto ", React.createElement("span", {
          className: "inline"
        }, "ReactWidgetController"), " que es el controlador base disponibilizado para trabajar con React. ", React.createElement(_code2.BeyondName, null), " tiene disponible un controlador para los distintos frameworks de vista. Los objetos son:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "ReactWidgetController"), ", ", React.createElement("span", {
          className: "inline"
        }, "PageReactWidgetController"), "."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "SvelteWidgetController"), " y ", React.createElement("span", {
          className: "inline"
        }, "PageSvelteWidgetController"), "."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "VueWidgetController"), " y ", React.createElement("span", {
          className: "inline"
        }, "PageVueWidgetController"), ".")), React.createElement("p", null, "Todos los controladores manejan la misma interfaz, pero estan a su vez enfocados en integrar y funcionar con el framework de vista que se est\u00E9 utilizando."), React.createElement("h3", {
          id: "controller-properties"
        }, React.createElement("small", null, "Propiedades")), React.createElement("ul", null, React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "getter"
        }, "Widget"), "Se define como un getter y debe retornar el componente de vista principal."), React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "URIObject",
          optional: true,
          href: "/docs/api/uri"
        }, "uri"), " Objeto Uri con toda la informaci\u00F3n asociada a la url actual."), React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "String",
          href: "/docs/api/uri"
        }, "layout"), "Nombre del objeto Layout contenedor.")), React.createElement("h3", {
          id: "controller-methods"
        }, React.createElement("small", null, "M\u00E9todos")), React.createElement("ul", null, React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "function",
          optional: true
        }, "createStore"), "Permite agregar l\u00F3gica para el manejo del Estado del widget, debe retornar un objeto con la interfaz ", React.createElement(_code4.Link, {
          href: "/docs/api/IwidgetStore"
        }, React.createElement("span", {
          className: "inline"
        }, "IWidgetStore"))), React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "void"
        }, "initialise"), "Permite agregar l\u00F3gica a ejecutarse previo al montado del componente web en el DOM HTML."), React.createElement("li", null, React.createElement(_code2.ObjectProperty, {
          type: "void"
        }, "hide"), "Se ejecuta cuando ha sido renderizada y se oculta, esto sucede cuando se navega de una url a otra."), React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "show")), React.createElement(_code2.TypeProperty, {
          type: "void",
          optional: true
        }), ": Se ejecuta cada vez que se accede a la url y la p\u00E1gina se muestra en el navegador.")), React.createElement(_code.NextLinks, {
          items: [['Creación de widgets', '/docs/widgets/creation'], ['Widgets de tipo Page', '/docs/widgets/page']]
        }));
      }
    }
  });
  /**************************
  INTERNAL MODULE: ./creation
  **************************/

  ims.set('./creation', {
    hash: 3005060782,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetCreation = WidgetCreation;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      var _code3 = require("@beyond/docs/components/html/code");

      var _code4 = require("@beyond/docs/components/next-links/code");

      const tpl = `"widget": {
    "element": {
      "name": "web-login"
    },
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }`;
      /*bundle*/

      function WidgetCreation() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "creation"
        }, "Creaci\u00F3n de widgets"), React.createElement("div", {
          className: "block__note"
        }, "Un widget es un tipo de ", React.createElement("span", {
          className: "inline"
        }, "bundle"), " y en ", React.createElement(_code3.BeyondName, null), " tiene una filosof\u00EDa de carga modular y los bundles son la representaci\u00F3n de c\u00F3digo final a ser ejecutado en el entorno javascript. Si quieres leer acerca de todos los tipos de bundles existentes, puedes dirigirte a la ", React.createElement(_code.Link, {
          href: "/docs/bundle"
        }, "secci\u00F3n de bundles"), "."), React.createElement("p", null, "Los ", React.createElement("strong", null, "widgets"), " exponencian las ventajas ya existentes en los componentes web gracias al encapsulamiento. Permiten integrar con una ", React.createElement("i", null, "m\u00EDnima configuraci\u00F3n"), " diferentes tecnolog\u00EDas y ofrecen una api simple para gestionar sus propiedades, metodos e interacci\u00F3n con el resto de componentes de un proyecto web. Tambi\u00E9n, pueden ser disponibilizados como paquetes NPM y utilizados desde cualquier proyecto que utilice javascript ", React.createElement("strong", null, "sin necesidad de requerir"), " de ", React.createElement(_code3.BeyondName, null), "."), React.createElement("p", null, "Existen tres tipos de widgets:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "page"), ": Dise\u00F1ados para crear las diferentes p\u00E1ginas del aplicativo, recibe parametros de configruaci\u00F3n asociados a la URL y al uso de layouts."), React.createElement("li", null, React.createElement("strong", null, "layout"), ": Representan a contenedores de p\u00E1ginas, permiten separar c\u00F3digo o l\u00F3gicas transversales a p\u00E1ginas. Un layout puede tambi\u00E9n contener otro layout."), React.createElement("li", null, React.createElement("strong", null, "default"), ": Exponen un componente web bajo el nombre definido y no requieren de ning\u00FAn tratamiento adicional de parte de ", React.createElement(_code3.BeyondName, null), ".")), React.createElement("p", null, "Todos los widgets implementan un objeto ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " quien es el encargado de manejar el ciclo de vida del componente web y permitir la definci\u00F3n de funcionalidades ", React.createElement(_code.Link, {
          href: "docs/rendering"
        }, "de renderizado"), ", estado y navegaci\u00F3n."), React.createElement("h3", null, React.createElement("small", null, "Creaci\u00F3n manual")), React.createElement("p", null, "La configuraci\u00F3n manual, se realiza agregando la definici\u00F3n del bundle de tipo widget en el ", React.createElement(_code.Link, {
          href: "/module/config"
        }, "module.json"), " del m\u00F3dulo."), React.createElement(_code2.Code, {
          language: "json"
        }, tpl), React.createElement("p", null, "El c\u00F3digo anterior, define un bundle de tipo ", React.createElement("span", {
          className: "inline"
        }, "widget"), " con el nombre del web-component como ", React.createElement("span", {
          className: "inline"
        }, "web-login"), " y con typescript como procesador."), React.createElement("h3", {
          id: "widget-dashboard"
        }, "Creaci\u00F3n con el dashboard"), React.createElement(_code3.ModalImage, {
          src: "/contents/static/create-module-widget.png",
          alt: "create widget module beyond"
        }), React.createElement("p", null, "Todos los bundles pueden ser creados desde el formulario de creaci\u00F3n de m\u00F3dulos del ", React.createElement(_code.Link, {
          href: "/docs/dashboard"
        }, "Dashboard"), ". En este caso, ", React.createElement(_code3.BeyondName, null), " se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definici\u00F3n del ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " y los archivos ", React.createElement("span", {
          className: "inline"
        }, "module.json"), " y ", React.createElement("span", {
          className: "inline"
        }, ".tsconfig"), "."), React.createElement("p", null, "Cuando los bundles son creados por medio del Dashboard, los archivos son generados y m\u00F3dificados por el servicio de desarrollo."), React.createElement(_code4.NextLinks, {
          items: [['Widget Page', '/docs/widgets/page'], ['Widget Layout', '/docs/widgets/layout']]
        }));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2594570979,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widgets = Widgets;

      var React = require("react");

      var _intro = require("./intro");

      var _viewFrameworks = require("./view-frameworks");

      var _code = require("@beyond/docs/components/next-links/code");

      var _code2 = require("@beyond/docs/store/code");

      var _beyond_context = require("beyond_context");

      var _code3 = require("@beyond/docs/components/html/code");
      /*bundle*/


      function Widgets() {
        const [ready, texts] = (0, _code2.useTexts)(_beyond_context.module.resource);
        if (!ready) return React.createElement(_code3.Loading, null);
        return React.createElement(_code2.DocsContext.Provider, {
          value: {
            ready,
            texts
          }
        }, React.createElement(_intro.Intro, null), React.createElement(_viewFrameworks.ViewFrameworks, null), React.createElement(_code.NextLinks, {
          items: [['Crear un Widget', '/docs/widgets/creation'], ['Objeto Controller', '/docs/widgets/controller']]
        }));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 2703296171,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Intro = Intro;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/store/code");

      var _code3 = require("@beyond/docs/components/html/code");

      function Intro() {
        const {
          texts: {
            intro: {
              h1,
              p1,
              p2,
              n1
            }
          }
        } = (0, _code2.useDocsContext)();
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "intro"
        }, h1), React.createElement("p", null, p1.t1, " ", React.createElement(_code.Elink, {
          href: p1.e1.href
        }, p1.e1.label), ", ", p1.t2, "."), React.createElement("p", null, p2.t1, React.createElement(_code.Link, {
          href: "/docs/bundles"
        }, p2.l1), " ", p2.t2, " ", React.createElement(_code.Elink, {
          href: p2.e1.href
        }, p2.e1.label), " ", p2.t3, " ", React.createElement(_code.Elink, {
          href: p2.e2.href
        }, p2.e2.label), " ", p2.t4, "."), React.createElement(_code3.Notice, {
          text: n1.t1,
          link: n1.l1
        }));
      }
    }
  });
  /******************************
  INTERNAL MODULE: ./types/layout
  ******************************/

  ims.set('./types/layout', {
    hash: 902204111,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutWidget = LayoutWidget;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _code2 = require("@beyond/docs/code/code");

      const tplLayout = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`;
      /*bundle*/

      function LayoutWidget() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "layouts"
        }, "Layouts"), React.createElement("p", null, "Un layout es un widget que tiene la capacidad de servir como contenedor de otros widgets de tipo ", React.createElement("span", {
          className: "inline"
        }, "page"), " y ", React.createElement("span", {
          className: "inline"
        }, "layout"), ". A diferencia del resto de widgets, que son expuestos como componentes web y pueden ser consumidos como un selector HTML cualquiera, los ", React.createElement("span", {
          className: "inline"
        }, "layouts"), " suministran a ", React.createElement(_code.BeyondName, null), " informaci\u00F3n que define el comportamiento del enrutamiento de un proyecto."), React.createElement("p", null, "Los widget de tipo layout y de tipo page funcionan muy similar, ambos influyen en el enrutamiento y comparten el mismo proceso de renderizado. Sin embargo, tienen una diferencia importante al momento de ser usados: un widget de tipo page solo puede ser incluido una vez por URL, mientras que el widget de tipo layout puede ser utilizado en m\u00FAltiples urls."), React.createElement("p", null, React.createElement(_code.BeyondName, null), " internamente maneja una estructura jerarquica de los layouts y p\u00E1ginas renderizados y las acciones de navegaci\u00F3n del usuario, en base a ello y a las propiedades definidas en la creaci\u00F3n del widget, se determina en que momento debe ser incluido un objeto de tipo ", React.createElement("span", {
          className: "span"
        }, "layout"), " en el DOM."), React.createElement("h3", {
          id: "use-ways"
        }, "\u00BFCu\u00E1ndo usarlos?"), React.createElement("p", null, "Si se necesita implementar l\u00F3gica de interfaz gr\u00E1fica o que deba encontrarse funcional en diversas pantallas. A continuaci\u00F3n se listan algunos ejemplos de uso:"), React.createElement("ul", null, React.createElement("li", null, "Definici\u00F3n de componentes gr\u00E1ficos que se puedan compartir entre pantallas, tales c\u00F3mo encabezados, pies de p\u00E1gina o un men\u00FA."), React.createElement("li", null, "Inclusi\u00F3n de funcionalidades generales como un gestor de mensajes y notificaciones."), React.createElement("li", null, "Scripts de terceros para manejo de m\u00E9tricas o un bot\u00F3n de contacto.")), React.createElement("h3", {
          id: "definition"
        }, "Definici\u00F3n"), React.createElement("p", null, "para definir un widget de tipo layout, debe especificarse la propiedad ", React.createElement("span", {
          className: "inline"
        }, "is"), " con el valor ", React.createElement("span", {
          className: "inline"
        }, "layout"), "."), React.createElement(_code2.Code, {
          language: "json"
        }, tplLayout), React.createElement("h3", {
          id: "implementation"
        }, "Implementaci\u00F3n"), React.createElement("p", null, React.createElement(_code.BeyondName, null), " maneja la posibilidad de definir un layout general para el proyecto y un layout para cada widget de tipo ", React.createElement("span", {
          className: "inline"
        }, "page"), " o ", React.createElement("span", {
          className: "inline"
        }, "layout"), " existente. En ambos casos, debe definirse una propiedad ", React.createElement("span", {
          className: "inline"
        }, "layout"), " cuyo valor debe ser el nombre del layout que se desea utilizar."), React.createElement("p", null, "Para ejemplificar, imaginando que se tiene un bundle layout definido, cuyo nombre es ", React.createElement("span", {
          className: "inline"
        }, "main-layout"), ", se deberia agregar la siguiente propiedad y valor en el objeto del archivo ", React.createElement("span", {
          className: "inlin"
        }, "project.json"), " si espera definirse a nivel de proyecto, o en el archivo ", React.createElement("span", {
          className: "inline"
        }, "module.json"), " si desea agregarse en un m\u00F3dulo."), React.createElement(_code2.Code, {
          language: "json"
        }, "\"layout\": \"main-layout\""));
      }
    }
  });
  /****************************
  INTERNAL MODULE: ./types/page
  ****************************/

  ims.set('./types/page', {
    hash: 2259952982,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageWidget = PageWidget;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/docs/components/html/code");

      var _code3 = require("@beyond/docs/components/next-links/code");

      const tplPage = `
"widget": {
    "route": "login"
    "layout: "main",
    "element": {
      "name": "login-page"
    },
....
}`;
      /*bundle*/

      function PageWidget() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "widget.page"
        }, "Widgets page"), React.createElement("p", null, "Los widgets de tipo ", React.createElement("span", {
          className: "inlin"
        }, "page"), " representan a una p\u00E1gina de un sitio o aplicativo web que puede ser accedido por medio de una URL. Cuando un proyecto web recibe una solicitud por url, ", React.createElement(_code2.BeyondName, null), " se encarga de identificar al widget con esa url definida para inicializar el componente y dejarlo disponible en el DOM."), React.createElement(_code.Code, {
          language: "json"
        }, tplPage), React.createElement("p", null, "Las p\u00E1ginas requieren la misma estructura de configuraci\u00F3n que la de cualquier widget, pero aparte recieben los siguientes parametros de configuraci\u00F3n:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "route:"), " ", React.createElement(_code2.TypeProperty, {
          type: "string"
        }), ": Define la url o ruta de acceso al componente."), React.createElement("li", null, React.createElement("strong", null, "layout"), " ", React.createElement(_code2.TypeProperty, {
          type: "string",
          optional: true
        }), ": y define si quieres usar un layout o no en tu p\u00E1gina."), React.createElement("li", null, React.createElement("strong", null, "vdir"), " ", React.createElement(_code2.TypeProperty, {
          type: "string",
          optional: true
        }), ": Permite definir si quieres manejar alg\u00FAn valor din\u00E1mico en la url.")), React.createElement("h2", {
          id: "route-pattern"
        }, "Patr\u00F3n de rutas"), React.createElement("p", null, "Se pueden definir urls con valores din\u00E1micos agregando las variables a la propiedad ", React.createElement("span", {
          className: "inline"
        }, "route"), " con una sintaxis similar a la de template strings."), React.createElement("p", null, "Para ejemplificarlo, supongamos que se tiene una p\u00E1gina de m\u00F3dificaci\u00F3n de datos de un usuario y se necesita manejar el id por medio de la url. La propiedad ", React.createElement("span", {
          className: "inline"
        }, "route"), " del widget tendr\u00EDa el siguiente valor:\\"), React.createElement(_code.Code, {
          language: "json"
        }, '/user/edit/${userId}'), React.createElement("p", null, "Las siguientes urls coincirian con la ruta creada:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "/user/edit/1")), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "/user/edit/any-identifier"))), React.createElement("p", null, "Estas propiedades, quedan disponibles en el objeto `uri` disponible como propiedad en el ", React.createElement("span", {
          className: "inline"
        }, "controller"), " del widget y podria ser accedido desde el controlador de la siguiente forma:"), React.createElement(_code.Code, null, " this.uri.vars.get('userId');"), React.createElement("div", {
          className: "block__note"
        }, "El objeto uri es pasado tambien a los componentes de vista. la forma de acceder a ellos depende de la implementaci\u00F3n de cada framework o herramienta."), React.createElement(_code3.NextLinks, {
          items: [['Layouts', '/docs/widgets/layouts'], ['Enrutamiento', '/docs/routing']]
        }));
      }
    }
  });
  /*********************************
  INTERNAL MODULE: ./view-frameworks
  *********************************/

  ims.set('./view-frameworks', {
    hash: 2069137863,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ViewFrameworks = ViewFrameworks;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _code2 = require("@beyond/ui/link/code");

      var _code3 = require("@beyond/docs/store/code");
      /*bundle*/


      function ViewFrameworks() {
        const {
          texts: {
            intro: {
              p4: {
                t1,
                links,
                t2,
                using,
                and
              }
            }
          }
        } = (0, _code3.useDocsContext)();
        return React.createElement(React.Fragment, null, React.createElement("p", null, t1, React.createElement(_code2.Elink, {
          href: "https://reactjs.org"
        }, "React"), ",\u00A0", React.createElement(_code2.Elink, {
          href: "https://vuejs.org/"
        }, "Vue"), " ", and, " ", React.createElement(_code2.Elink, {
          href: "https://svelte.dev/"
        }, "Svelte"), t2), React.createElement("h3", {
          id: "widget-react"
        }, React.createElement(_code.CHtml, {
          content: using.react.title
        })), React.createElement("p", null, using.react.p1), React.createElement("div", {
          className: "block__note"
        }, using.react.p2, React.createElement(_code2.Elink, {
          href: using.react.e1.href
        }, using.react.e1.label)), React.createElement("h3", null, React.createElement(_code.CHtml, {
          content: using.vueSvelte.title
        })), React.createElement("p", null, using.vueSvelte.p1.t1, " ", React.createElement(_code2.Link, {
          href: "/docs/processors"
        }, using.vueSvelte.p1.l1), " ", using.vueSvelte.p1.t2));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "WidgetController",
    "name": "WidgetController"
  }, {
    "im": "./creation",
    "from": "WidgetCreation",
    "name": "WidgetCreation"
  }, {
    "im": "./index",
    "from": "Widgets",
    "name": "Widgets"
  }, {
    "im": "./types/layout",
    "from": "LayoutWidget",
    "name": "LayoutWidget"
  }, {
    "im": "./types/page",
    "from": "PageWidget",
    "name": "PageWidget"
  }, {
    "im": "./view-frameworks",
    "from": "ViewFrameworks",
    "name": "ViewFrameworks"
  }];
  let WidgetController, WidgetCreation, Widgets, LayoutWidget, PageWidget, ViewFrameworks; // Module exports

  _exports.ViewFrameworks = ViewFrameworks;
  _exports.PageWidget = PageWidget;
  _exports.LayoutWidget = LayoutWidget;
  _exports.Widgets = Widgets;
  _exports.WidgetCreation = WidgetCreation;
  _exports.WidgetController = WidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'WidgetController') && (_exports.WidgetController = WidgetController = require ? require('./controller').WidgetController : value);
    (require || prop === 'WidgetCreation') && (_exports.WidgetCreation = WidgetCreation = require ? require('./creation').WidgetCreation : value);
    (require || prop === 'Widgets') && (_exports.Widgets = Widgets = require ? require('./index').Widgets : value);
    (require || prop === 'LayoutWidget') && (_exports.LayoutWidget = LayoutWidget = require ? require('./types/layout').LayoutWidget : value);
    (require || prop === 'PageWidget') && (_exports.PageWidget = PageWidget = require ? require('./types/page').PageWidget : value);
    (require || prop === 'ViewFrameworks') && (_exports.ViewFrameworks = ViewFrameworks = require ? require('./view-frameworks').ViewFrameworks : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});