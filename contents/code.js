define(["exports", "react", "@beyond/ui/link/code", "@beyond/docs/code/code", "@beyond/docs/components/next-links/code", "@beyond/ui/image/code", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/react-widget/ts", "@beyond/docs/ui/icons/code", "@beyond/ui/modal/code"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.useContent = _exports2.hmr = _exports2.SR = _exports2.RightAside = _exports2.RenderingPage = _exports2.Page = _exports2.Controller = _exports2.ContentsPage = _exports2.CSR = _exports2.BeyondName = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('@beyond/ui/link/code', dependency_1);
  dependencies.set('@beyond/docs/code/code', dependency_2);
  dependencies.set('@beyond/docs/components/next-links/code', dependency_3);
  dependencies.set('@beyond/ui/image/code', dependency_4);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_5);
  dependencies.set('@beyond-js/kernel/react-widget/ts', dependency_6);
  dependencies.set('@beyond/docs/ui/icons/code', dependency_7);
  dependencies.set('@beyond/ui/modal/code', dependency_8);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/contents/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /*******************************
  INTERNAL MODULE: ./basic/backend
  *******************************/

  modules.set('./basic/backend', {
    hash: 973429991,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Backend = Backend;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      const tpl = `\r"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;
      const tplBridge = `\rexport /*actions*//*bundle*/
class Auth {

    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`;

      function Backend() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "C\u00F3digo ", React.createElement("strong", null, "Backend")), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " disponibiliza un entorno seguro y eficiente pare crear c\u00F3digo backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas espec\u00EDficas o que busque implementar una conexi\u00F3n de un proyecto cliente con una api backend."), React.createElement("p", null, "Para efectos de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ", podemos clasificar estas estructuras de c\u00F3digo en dos tipos:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Servicios Backend:"), " C\u00F3digo node que representa un servicio en ejecuci\u00F3n en el backend y s\u00F3lo puede ser utilizado por m\u00F3dulos que tambien se ejecuten en el backend."), React.createElement("li", null, React.createElement("strong", null, "Api backend"), ": permiten la conexi\u00F3n entre el c\u00F3digo backend y el c\u00F3digo cliente.")), React.createElement("h2", null, "Api ", React.createElement("strong", null, "Servidor"), " ", React.createElement("br", null), "Bundle ", React.createElement("code", {
          className: "inline"
        }, "bridge")), React.createElement("p", null, "Las APIs servidor en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " representan funciones que ejecutan c\u00F3digo en el servidor y pueden ser consumidas desde el c\u00F3digo cliente. Manejan la l\u00F3gica para conectarse a un backend y retornar data. Esto se l\u00F3gra de forma simple, con la creaci\u00F3n de un ", React.createElement(_code.Link, {
          href: "/bundles#bridge"
        }, "Bundle Bridge"), "."), React.createElement(_code2.Code, null, tpl), React.createElement("p", null, "Al igual que cualquier m\u00F3dulo o bundle, este puede ser gestionado desde el ", React.createElement(_code.Link, {
          href: "/dashboard"
        }, "Dashboard"), " o de forma manual."), React.createElement("p", null, "C\u00F3mo su nombre lo indica, el bundle de tipo ", React.createElement("strong", null, "bridge"), ", sirve de puente entre la l\u00F3gica cliente y la l\u00F3gica servidor. Generalmente, en el servidor se impmenentan l\u00F3gicas asociadas al manejo de datos o manipulaci\u00F3n de archivos, el ", React.createElement("span", {
          className: "inline"
        }, "bridge"), " Permite implementar y dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas en el servidor aquellas que no."), React.createElement("p", null, "El c\u00F3digo de un bundle ", React.createElement("code", {
          className: "inline"
        }, "bridge"), " luce as\u00ED: "), React.createElement(_code2.Code, null, tplBridge), React.createElement("p", null, "Un objeto Javascript com\u00FAn y corriente \u00BFVerdad?"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " genera un objeto cliente que realiza la conexi\u00F3n ", React.createElement("code", {
          className: "inline"
        }, "web-socket"), " al servidor, ejecuta el c\u00F3digo implementado por el desarrollador y deja disponible la respuesta en el c\u00F3digo cliente, abstrayendo al programador de la necesidad de procuparse por la conexi\u00F3n entre las capas cliente y servidor y permitiendo que el c\u00F3digo funcione como parte de un mismo ecosistema."), React.createElement("div", {
          className: "block__note"
        }, "En el ", React.createElement(_code.Link, {
          href: "/tutorial/web"
        }, "Tutorial Web"), " disponible, se implementa un bridge que permite ver en acci\u00F3n el funcionamiento de las ", React.createElement("strong", null, "apis backend"), " de ", React.createElement("div", {
          className: "beyond"
        }, "BeyondJS.")), React.createElement("h3", null, "Comentarios m\u00E1gicos"), React.createElement("h2", null, "bundle ", React.createElement("code", {
          className: "inline"
        }, "backend")), React.createElement("p", null, "Los bundles ", React.createElement("code", {
          className: "inline"
        }, "backend"), " representan c\u00F3digo javascript que es ejecutado en el servidor y s\u00F3lo pueden ser utilizados por m\u00F3dulos que tambien funcionen en el servidor. Dicho en otras palabras, representan cualquier servicio t\u00EDpico de ", React.createElement("span", {
          className: "inline"
        }, "NodeJS"), ", con la salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " lo cual aumenta la productividad al poder trabajar con ", React.createElement("strong", null, "HMR"), " de forma automatizada ", React.createElement("i", null, "y sin configuraci\u00F3n"), "."));
      }
    }
  });
  /**********************************
  INTERNAL MODULE: ./basic/deployment
  **********************************/

  modules.set('./basic/deployment', {
    hash: 3579229949,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DeploymentPage = DeploymentPage;

      var React = require("react");

      function DeploymentPage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Despliegue de un Proyecto"));
      }
    }
  });
  /********************************
  INTERNAL MODULE: ./basic/fetching
  ********************************/

  modules.set('./basic/fetching', {
    hash: 232764040,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FetchingDAtaPage = FetchingDAtaPage;

      var React = require("react");

      function FetchingDAtaPage() {
        return React.createElement("div", {
          className: "content"
        });
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./basic/install
  *******************************/

  modules.set('./basic/install', {
    hash: 584830888,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Install = Install;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/docs/components/next-links/code");

      function Install() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "install"
        }, "Instalaci\u00F3n"), React.createElement("h4", {
          id: "requirement"
        }, "Prerequisitos"), React.createElement("ul", null, React.createElement("li", null, "Node ", React.createElement("span", {
          className: "inline"
        }, "^14.17.4"), "."), React.createElement("li", null, "Estar familiarizado con manejadores de dependencias como npm o yarn.")), React.createElement("p", null, "Instalamos Beyond:"), React.createElement(_code.Code, {
          language: "bash"
        }, `> npm i -g  beyond`), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " se instala de forma global y puede ser ejecutado en cualquier directorio. Para utilizarlo, s\u00F3lo necesitas ir a la carpeta en la cual desees trabajar, abrir la consola de comandos y ejecutar \"beyond\"."), React.createElement(_code.Code, {
          language: "bash"
        }, ` > beyond`), React.createElement("p", null, "Si todo sale bien, aparecer\u00E1 un mensaje diciendote que beyond se est\u00E1 ejecutando y el puerto de acceso para ir al Dashboard."), React.createElement("p", null, "\u00A1Y ya est\u00E1! \u00BFSimple verdad? Puedes empezar con tu proyecto utilizando el dashboard y tu IDE de preferencia."), React.createElement(_code2.NextLinks, {
          items: [['Dashboard', '/docs/dashboard'], ['Tutorial', '/docs/tutorial/web']]
        }));
      }
    }
  });
  /**************************************
  INTERNAL MODULE: ./basic/intro/features
  **************************************/

  modules.set('./basic/intro/features', {
    hash: 2707795296,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Features = Features;

      var React = require("react");

      function Features() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "features"
        }, "Features"), React.createElement("p", null, " A continuaci\u00F3n, listamos algunas de las caracteristicas m\u00E1s relevantes de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS.")), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Despliegue universal"), ": Un mismo c\u00F3digo, cualquier entorno."), React.createElement("li", null, React.createElement("strong", null, "Carga modular"), " y a demanda. Esto quiere decir que el c\u00F3digo s\u00F3lo carga una vez, cuando es requerido."), React.createElement("li", null, React.createElement("strong", null, "Dashboard"), " o panel de control muy poderoso para desarrolladores."), React.createElement("li", null, React.createElement("strong", null, "Plug & play"), " de m\u00F3dulos."), React.createElement("li", null, React.createElement("strong", null, "Ecosistema \u00FAnico"), " de desarrollo entre ", React.createElement("strong", null, "Backend"), " y ", React.createElement("strong", null, "Frontend"), "."), React.createElement("li", null, React.createElement("strong", null, "Real Time"), " listo para implementar con websockets."), React.createElement("li", null, React.createElement("strong", null, "Integraci\u00F3n"), " autom\u00E1tica con frameworks de vistas como\u00A0", React.createElement("a", {
          href: "http://reactjs.org",
          target: "_blank"
        }, "React"), ",\u00A0", React.createElement("a", {
          href: "https://vuejs.org/",
          target: "_blank"
        }, "Vue"), ",\u00A0", React.createElement("a", {
          href: "https://svelte.dev/",
          target: "_blank"
        }, "Svelte"), "."), React.createElement("li", null, React.createElement("strong", null, "Typescript m\u00E1s inteligente"), ": transpilado y chequeo de tipos en paralelo, para mejor productividad y rendimiento."), React.createElement("li", null, React.createElement("strong", null, "HMR"), " modular y en el c\u00F3digo backend de forma autom\u00E1tica."), React.createElement("li", null, React.createElement("strong", null, "Sin \u00E1rbol de dependencias"), " Beyond trabaja bajo un paradigma distinto al que usan empaquetadores como ", React.createElement("strong", null, "webpack"), "."), React.createElement("li", null, React.createElement("strong", null, "Jamstack + SSR"), "."), React.createElement("li", null, "Integraci\u00F3n estandarizada con NPM, listo para publicar."), React.createElement("li", null, React.createElement("strong", null, "Entorno de ejecuci\u00F3n "), " de servicios gestionados por beyond."), React.createElement("li", null, React.createElement("strong", null, "Web Components"), " integrados."), React.createElement("li", null, React.createElement("strong", null, "Multilenguaje"), " manejado por medio de bundles."), React.createElement("li", null, "Manejo de plantillas y sobreescritura.")));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./basic/intro/index
  ***********************************/

  modules.set('./basic/intro/index', {
    hash: 3768975187,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Intro = Intro;

      var React = require("react");

      var _overview = require("./overview");

      var _universal = require("./universal");

      var _code = require("@beyond/docs/components/next-links/code");

      var _features = require("./features");

      function Intro() {
        return React.createElement(React.Fragment, null, React.createElement(_universal.Universal, null), React.createElement(_overview.Overview, null), React.createElement(_features.Features, null), React.createElement(_code.NextLinks, {
          items: [['Instalación', '/docs/install'], ['Widgets', '/docs/widgets']]
        }));
      }
    }
  });
  /**************************************
  INTERNAL MODULE: ./basic/intro/overview
  **************************************/

  modules.set('./basic/intro/overview', {
    hash: 2754075598,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Overview = Overview;

      var React = require("react");

      var _beyond = require("../../views/beyond");

      var _code = require("@beyond/ui/link/code");

      function Overview() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "projects"
        }, "Manejo de proyectos"), React.createElement("p", null, "Los proyectos en ", React.createElement(_beyond.BeyondName, null), ", tienen un enfoque de compatibilidad con NPM, lo cual les permite ser pensados como paquetes que podr\u00EDan eventualmente, ser publicados directamente en NPM y posteriormente utilizados en cualquier otro proyecto, tanto de Beyond como externo."), React.createElement("p", null, " Un proyecto es definido por medio de la especificaci\u00F3n de su scope, nombre y de al menos una distribuci\u00F3n. Las distribuciones permiten identificar el entorno de ejecuci\u00F3n sobre el cual se espera funcione el proyecto y algunos datos adicionales que pueden resultar relevantes para el proceso de compilaci\u00F3n y deployment. Asimismo,se puede configurar m\u00FAltiples distribuciones en simult\u00E1neo, brindandole al desarrollador la flexibilidad de validar el comportamiento de su proyecto en los diferentes ecosistemas configurados."), React.createElement("p", null, "Los proyectos contienen ", React.createElement(_code.Link, {
          href: "/docs/modules"
        }, "m\u00F3dulos"), ", estos representan la unidad m\u00EDnima de desarrollo en Beyond y tienen la capacidad de definir sobre que plataforma funcionan. dato que es interpretado por las ", React.createElement(_code.Link, {
          href: "/docs/distributions"
        }, "distribuciones"), " configuradas en el entorno de desarrollo y al momento de realizar deploy de un proyecto."));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./basic/intro/universal
  ***************************************/

  modules.set('./basic/intro/universal', {
    hash: 1418103305,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Universal = Universal;

      var React = require("react");

      var _beyond = require("../../views/beyond");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/ui/image/code");

      const tpl = `
{
    "platforms": [
        "node",
        "web",
        "ios"
    ]
}`;

      function Universal() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "\u00BFQue es ", React.createElement(_beyond.BeyondName, null), "?"), React.createElement(_code2.BeyondImage, {
          src: "/images/tutorials/beyond-environments.png",
          alt: "Beyond environments"
        }), React.createElement("p", null, React.createElement(_beyond.BeyondName, null), " es un ", React.createElement("strong", null, "meta-framework"), " basado en typescript, dise\u00F1ado para crear proyectos que funcionen en diferentes entornos de ejecuci\u00F3n Javascript, manteniendo el foco en garantizar al programador una experiencia universal de desarrollo. Lo hace manteniendose agn\u00F3stico a las librerias y tecnolog\u00EDas existentes, buscando dejar un camino estandarizado que permita su integraci\u00F3n."), React.createElement("p", null, "Los factores que garantizan una experiencia de desarrollo homog\u00E9nea, sin importar el entorno para el que se trabaje son:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "HMR en c\u00F3digo cliente y c\u00F3digo Node"), ": de forma autom\u00E1tica, sin configuraciones adicionales. Adem\u00E1s, brinda una api al desarrollador que permite definir cuando y que desea actualizar."), React.createElement("li", null, React.createElement("strong", null, "Desarrollo modular"), ": ", React.createElement(_beyond.BeyondName, null), " tiene una filosofia de generaci\u00F3n de bundles peque\u00F1os que son cargados a demanda en el momento en que son requeridos. No trabaja con un arbol de dependencias y por tanto ", React.createElement("strong", null, "no requiere de empaquetadores"), " c\u00F3mo webpack o parcel."), React.createElement("li", null, React.createElement("strong", null, "Gesti\u00F3n de distribuciones"), ": ", React.createElement(_beyond.BeyondName, null), " permite definir distribuciones para las plataformas de desarrollo que desean utilizarse y gestiona la disponibilizaci\u00F3n del c\u00F3digo final en base a ello.")), React.createElement("div", {
          className: "block__note"
        }, "Puedes leer m\u00E1s sobre los features de beyond ", React.createElement(_code.Link, {
          href: "/docs"
        }, "aqu\u00ED")));
      }
    }
  });
  /*********************************************
  INTERNAL MODULE: ./basic/rendering/controllers
  *********************************************/

  modules.set('./basic/rendering/controllers', {
    hash: 2033296105,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Name = Name;

      var React = require("react");

      function Name() {
        return React.createElement(React.Fragment, null, React.createElement("h2", null, "BeyondWidgetController"), React.createElement("p", null, "El controlador puede variar seg\u00FAn si est\u00E1s usando una libreria o no"), React.createElement("h2", null, "Ciclo de vida"));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/rendering/csr
  *************************************/

  modules.set('./basic/rendering/csr', {
    hash: 3197281268,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CSR = CSR;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");
      /*bundle*/


      function CSR() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "csr-render"
        }, "Renderizado Cliente (CSR)"), React.createElement("p", null, "El renderizado cliente, es el funcionamiento natural de las SPA. Su ciclo de vida puede plantearse de la siguiente forma:"), React.createElement("ul", null, React.createElement("li", null, "Se realiza una solicitud a un servidor o CDN, el cual retorna un ", React.createElement("span", {
          className: "inline"
        }, "index.html"), " con archivos de estilos y javascript."), React.createElement("li", null, "El navegador interpreta el ", React.createElement("span", {
          className: "inline"
        }, "index.html"), "y sol\u00EDcita al servidor los recursos necesarios para poder finalizar el renderizado del contenido."), React.createElement("li", null, "Cuando los recursos son recibidos en el navegador, se ejecuta el proceso de renderizado del contenido html final por medio de javascript y la p\u00E1gina queda disponible para su uso."), React.createElement("li", null, "Eventualmente, el cliente consulta APIs que retornan data y vuelven a ser renderizadas en el sitio web actualizando su contenido.")), React.createElement("h3", {
          id: "store-server-rendering"
        }, React.createElement("small", null, "Store Server Rendering")), React.createElement("p", null, "Como se expresa en el ciclo de vida CSR, es com\u00FAn la necesidad de realizar consultas a una api para actualizar la informaci\u00F3n del sitio por medio de ", React.createElement("span", {
          className: "inline"
        }, "http"), " o ", React.createElement("span", {
          className: "inline"
        }, "web sockets"), ", esto suele requerir la construcci\u00F3n de APIs que retornan la informaci\u00F3n.", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " maneja la posibilidad de que esta informaci\u00F3n sea definida en el estado del widget y que se actualice de forma directa desde el servidor sin necesidad de una API adicional."), React.createElement("p", null, "Puedes leer m\u00E1s sobre este t\u00F3pico en la secci\u00F3n de ", React.createElement(_code.Link, {
          href: "/doccs/state-management"
        }, "Manejo de estados"), "."));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./basic/rendering/index
  ***************************************/

  modules.set('./basic/rendering/index', {
    hash: 763092214,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderingPage = RenderingPage;

      var React = require("react");

      var _ssr = require("./ssr");

      var _csr = require("./csr");

      var _sr = require("./sr");

      var _code = require("@beyond/docs/components/next-links/code");

      var _intro = require("./intro");
      /*bundle*/


      function RenderingPage() {
        return React.createElement(React.Fragment, null, React.createElement(_intro.RenderingIntro, null), React.createElement(_ssr.SSR, null), React.createElement(_csr.CSR, null), React.createElement(_sr.SR, null), React.createElement(_code.NextLinks, {
          items: [['Renderización', '/docs/rendering'], ['Widgets', '/docs/widgets']]
        }));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./basic/rendering/intro
  ***************************************/

  modules.set('./basic/rendering/intro', {
    hash: 558845526,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderingIntro = RenderingIntro;

      var React = require("react");

      var _beyond = require("../../views/beyond");

      var _code = require("@beyond/ui/link/code");

      function RenderingIntro() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "intro"
        }, "Renderizaci\u00F3n de Widgets."), React.createElement("p", null, "Uno de los factores m\u00E1s relevantes de ", React.createElement(_beyond.BeyondName, null), ", es el motor hibrido de renderizado que implementa. En primer lugar, es importante tener presente que las p\u00E1ginas webs son Widgets y el renderizado se efect\u00FAa a nivel de widgets. Esto ofrece al desarrollador la versatilidad de poder trabajar con diferentes estrategias de renderizado, incluso en una misma p\u00E1gina web."), React.createElement("div", {
          className: "block__note"
        }, "Las p\u00E1ginas y Layouts en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " son manejados c\u00F3mo ", React.createElement(_code.Link, {
          href: "/docs/widgets"
        }, "Widgets"), ", los cuales son implementados por medio de ", React.createElement(_code.Elink, {
          href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components"
        }, "web components"), " con ", React.createElement(_code.Elink, {
          href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"
        }, "shadow DOM"), ", por tanto, las estrategias de renderizado en ", React.createElement(_beyond.BeyondName, null), " son hibridas y siempre requieren de ejecuci\u00F3n de c\u00F3digo javascript en el cliente. Este c\u00F3digo es \u00FAnicamente para la utilizaci\u00F3n de los componentes web y no afecta la posibilidad de implementar SSR."), React.createElement("p", null, "El programador puede entonces, definir para ", React.createElement("strong", null, "cada widget"), " el tipo de renderizaci\u00F3n que considere m\u00E1s conveniente. A continuaci\u00F3n se listan las formas de renderizaci\u00F3n disponibles:"), React.createElement("ul", null, React.createElement("li", null, React.createElement(_code.Link, {
          href: "/docs/rendering#ssr-rendering"
        }, "Server Side Rendering")), React.createElement("li", null, React.createElement(_code.Link, {
          href: "/docs/rendering#csr-rendering"
        }, "Client Side Rendering")), React.createElement("li", null, React.createElement(_code.Link, {
          href: "/docs/rendering#sr-rendering"
        }, "Static Rendering"))));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./basic/rendering/sr
  ************************************/

  modules.set('./basic/rendering/sr', {
    hash: 2053681406,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SR = SR;

      var React = require("react");

      var _beyond = require("../../views/beyond");
      /*bundle*/


      function SR() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "sr-rendering"
        }, "Renderizado est\u00E1tico"), React.createElement("p", null, "El renderizado est\u00E1tico, como su nombre lo indica, es especialmente \u00FAtil cuando el contenido no varia y se puede prescindir de la existencia de un servidor que procese las peticiones y basta con un CDN que retorne toda la informaci\u00F3n."), React.createElement("p", null, React.createElement(_beyond.BeyondName, null), " permite generar el c\u00F3digo est\u00E1tico final en el proceso de deployment. en entorno de desarrollo los archivos siguen siendo servidor por el servidor de desarrollo del framework."));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/rendering/ssr
  *************************************/

  modules.set('./basic/rendering/ssr', {
    hash: 1540005932,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SSR = SSR;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function SSR() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h2", {
          id: "ssr-rendering"
        }, "Server Side Rendering ", React.createElement("small", null, "(SSR)")), React.createElement("div", {
          className: "block__note"
        }, "Hoy en d\u00EDa ", React.createElement(_code.Elink, {
          href: "https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics"
        }, "los rastreadores web interpretan c\u00F3digo javascript"), " y pueden entender el contenido que genera. Se recomienda siempre evaluar c\u00FAal estrateg\u00EDa es m\u00E1s conveniente en cada caso."), React.createElement("p", null, "La renderizaci\u00F3n del lado de Servidor o SSR (por sus siglas en ingles), es una t\u00E9cnica que permite que el contenido de una url sea parseado en el servidor, generando el c\u00F3digo HTML final y devolviendo este al cliente, de esta forma, se evita el procesamiento posterior en el navegador cliente y se acelera la carga del contenido."), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " permite implementar SSR de forma simple, para ello, es necesario que se entienda el ciclo de vida del motor de renderizado de los ", React.createElement(_code.Link, {
          href: "/docs/widgets/"
        }, "widgets"), " y seguir la l\u00F3gica asociada a este."), React.createElement("p", null, "A continuaci\u00F3n, se detalla el circuito de renderizaci\u00F3n de widgets y p\u00E1ginas"), React.createElement("ul", null, React.createElement("li", null, "Se realiza la solicitud de la url al servidor, este retorna el archivo ", React.createElement("span", {
          className: "inline"
        }, "index.html"), "."), React.createElement("li", null, "Cuando el cliente recibe el archivo ", React.createElement("span", {
          className: "inline"
        }, "index.html"), ", se dispara una segunda solicitud consultando por la informacion necesaria para renderizar toda la p\u00E1gina, lo cual incluye el  c\u00F3digo html y css de los widgets existentes en la p\u00E1gina y los layouts."), React.createElement("li", null, "Cuando el cliente recibe la informaci\u00F3n solicitada, se ejecuta el javascript para registrar los ", React.createElement("span", {
          className: "inline"
        }, "web components"), " en el documento HTML y cargar todo el contenido de la p\u00E1gina."), React.createElement("li", null, "En el momento en que se hace la carga del contenido inicial, se dispara la ", React.createElement("i", null, "hidrataci\u00F3n"), " del contenido. La hidrataci\u00F3n representa la capa CSR, que implica disponibilizar en el cliente, todo el c\u00F3digo javascript utilizado en el servidor para procesar la solicitud, de esta forma el sitio puede empezar a funcionar como una SPA y habilitar las funcionalidades de interacci\u00F3n que puedan existir.")));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./basic/routing
  *******************************/

  modules.set('./basic/routing', {
    hash: 3849058520,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RoutingPage = RoutingPage;

      var React = require("react");

      var _typeProperty = require("../views/type-property");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      const tpl = `routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};
`;

      function RoutingPage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", {
          id: "routing"
        }, "Enrutamiento"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " tiene un manejo de rutas bastante simple y potente. Para la mayoria de los casos, las urls de acceso pueden ser definidas en la configuraci\u00F3n de los ", React.createElement(_code.Link, {
          href: "/widgets#pages"
        }, "widgets de tipo page"), ", por medio de la propiedad ", React.createElement("span", {
          className: "inline-code"
        }, "url"), "."), React.createElement("p", null, "Asimismo, ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " provee un objeto ", React.createElement("span", {
          className: "inline-code"
        }, "routing"), " que sirve para trabajar con todo lo asociado a la navegaci\u00F3n cliente y ofrece algunas mejoras con respecto a la api web de los navegadores."), React.createElement("h2", {
          id: "object-routing"
        }, " Objeto ", React.createElement("div", {
          className: "inline-code"
        }, "routing")), React.createElement("p", null, "El objeto", React.createElement("span", {
          className: "inline-code"
        }, "routing"), " gestiona el historico del navegador y se encarga de manejar la compatibilidad para proyectos web y moviles. Ofrece una api que permite trabajar con el historico y manipularlo."), React.createElement("p", null, "Es disponibilizado por el ", React.createElement("span", {
          className: "inline-code"
        }, "kernel"), " y se importa de la siguiente forma:"), React.createElement(_code2.Code, {
          language: "ts"
        }, `import {routing} from "@beyond-js/kernel/routing/ts";`), React.createElement("p", null, "El objeto ", React.createElement("span", {
          className: "inline-code"
        }, "routing"), " de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " existe para cubrir los siguientes escenarios:"), React.createElement("ul", null, React.createElement("li", null, "Disponibilizar al programador una api simple para hacer tratamientos complejos de las urls, como validaciones, redireccionamientos y manejo de variables."), React.createElement("li", null, "Identificar el flujo e historico de navegaci\u00F3n del usuario adentro del aplicativo. El objeto", React.createElement("span", {
          className: "inline-code"
        }, "history"), " del navegador tiene un tratamiento muy limitado del mismo y s\u00F3lo permite acceder al n\u00FAmero de navegaciones existentes. ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " por su parte, maneja un historico detallado."), React.createElement("li", null, "Debido a que las aplicaciones hibridas realizadas con javascript, resuelven el manejo de archivos por meido de un protocolo distinto a las aplicaciones accedidas desde un navegador, ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " realiza un tratamiento del mismo para abstraer al programador de ello y garantizar el mismo comportamiento sin importar la plataforma en que se trabaje.")), React.createElement("h2", null, "Navegaci\u00F3n"), React.createElement("p", null, "Con la finalidad de mantener compatibilidad con las APIs Conocidas, beyond tiene m\u00E9todos homologos a los de la API del historial del navegador, los cuales cubren las mismas funcionalidades con el plus de unificar los comportamientos entre las plataformas y actualizar los elementos del historico de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS.")), React.createElement("p", null, "Los m\u00E9todos disponible son:"), React.createElement("h4", null, React.createElement("span", {
          className: "inline-code"
        }, "routing.pushState")), React.createElement("p", null, " Registra un nuevo elemento en el historico"), React.createElement(_code2.Code, {
          language: "ts"
        }, `routing.pushState('/home', [{state}]);`), React.createElement("h4", null, React.createElement("span", {
          className: "inline-code"
        }, "routing.replaceState")), React.createElement("p", null, "Modifica la url actual sin agregar nuevos elementos en el historico."), React.createElement(_code2.Code, {
          language: "ts"
        }, `routing.replaceState('/home', [{state}]);`), React.createElement("p", null, "tiene la misma interfaz que el m\u00E9todo pushState del objeto ", React.createElement("span", {
          className: "inline-code"
        }, "history"), " de la Api Web y adicional se encarga de actualizar el historico de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS.")), React.createElement("h2", {
          id: "rewrite"
        }, "Sobreescritura de rutas ", React.createElement("br", null), React.createElement("div", {
          className: "inline-code"
        }, "routing.redirect")), React.createElement("p", null, "Generalmente, aunque pueden haber m\u00E1s, existen dos contextos t\u00EDpicos en los cuales es necesario darle tratamiento a las urls:"), React.createElement("ul", null, React.createElement("li", null, "Cuando se requiere manejar urls amigables."), React.createElement("li", null, "Cuando es necesario validar permisos de acceso y, en caso de que quien intenta entrar a la url no los tenga, se pretenda hacer una redirecci\u00F3n a un flujo determinado.")), React.createElement("p", null, "Para este tipo de casos, se puede definir una funci\u00F3n asincrona", React.createElement("span", {
          className: "inline-code"
        }, "redirect"), "como propiedad del objeto routing. Esta funci\u00F3n recibe un ubjeto de tipo", React.createElement(_typeProperty.TypeProperty, {
          type: "URI",
          href: "/api/uri"
        }), " que tiene una propiedad ", React.createElement("span", {
          className: "inline-code"
        }, "pathname"), " la cual representa la ruta actual."), React.createElement("p", null, "La funci\u00F3n redirect puede retornar una ruta diferente, en cuyo caso ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " realizar\u00E1 la redirecci\u00F3n a la url devuelta o, puede no devolver nada, en cuyo caso se interpreta que el usuario tiene acceso a la ruta, el cual es el comportamiento por defecto."), React.createElement(_code2.Code, {
          language: "ts"
        }, tpl), React.createElement("p", null, "En el ejemplo anterior, cualquier ruta recibida es redireccionada a ", React.createElement("span", {
          className: "inline-code"
        }, "/"), "."), React.createElement("h2", {
          id: "routing-uri"
        }, "URI ", React.createElement("div", {
          className: "inline-code"
        }, "rounting.uri")), React.createElement("p", null, "Debido a que el comportamiento del objeto ", React.createElement("span", {
          className: "inline-code"
        }, "window.location"), " var\u00EDa cuando se est\u00E1 trabajando con aplicaciones m\u00F3viles, ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " agrega el objeto ", React.createElement("span", {
          className: "inline-code"
        }, "URI")), React.createElement("p", null, "Es una instancia de un objeto", React.createElement(_typeProperty.TypeProperty, {
          type: "URI",
          href: "/api/uri"
        }), " y representa a la URL actual. Tiene propiedades similares a las del objeto ", React.createElement("span", {
          className: "inline-code"
        }, "location"), " de la Api Web de ", React.createElement("span", {
          className: "inline-code"
        }, "Javascript"), ", pero agrega un tratamiento a las propiedades para unificar la manera de trabajar con javascript cuando se est\u00E1 desarrollando un proyecto m\u00F3vil."), React.createElement("h3", {
          id: "uri-properties"
        }, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "pathname"), React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), ": url actual, sin querystring ni hash"), React.createElement("li", null, React.createElement("strong", null, "uri"), React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), ": url completa."), React.createElement("li", null, React.createElement("strong", null, "qs"), React.createElement(_typeProperty.TypeProperty, {
          type: "Map"
        }), ": Mapa con la lista de variables pasadas por querystring."), React.createElement("li", null, React.createElement("strong", null, "hashtag"), React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), ": contiene el fragmento de la url posterior al '#'. Es equivalente a la propiedad ", React.createElement("div", {
          className: "inline-code"
        }, "hash"), " del objeto ", React.createElement("div", {
          className: "inline-code"
        }, "location"), " de la API Web."), React.createElement("li", null, React.createElement("strong", null, "vars"), React.createElement(_typeProperty.TypeProperty, {
          type: "Map"
        }), ": Mapa contenedor de las variables dinamicas agregadas en la definici\u00F3n de la url del ", React.createElement(_code.Link, {
          href: "/widgets#page"
        }, "Widget Page."))), React.createElement("h3", {
          id: "routing-history"
        }, React.createElement("div", {
          className: "inline-code"
        }, "routing.history ", React.createElement(_typeProperty.TypeProperty, {
          type: "BeyondHistory"
        }))), React.createElement("p", null, "El objeto ", React.createElement("span", {
          className: "inline-code"
        }, "BeyondHistory"), " maneja toda la informaci\u00F3n asociada a la navegaci\u00F3n del usuario en la sesi\u00F3n actual."), React.createElement("h4", null, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "current:"), React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), " url de navegacion actual."), React.createElement("li", null, React.createElement("strong", null, "initial:"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "number"
        }), " Hace referencia al indice asociado al historico de la api web del navegador sobre el cual comienza la navegacion adentro del proyecto ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ". Para este manejo, beyond hace uso del objeto ", React.createElement("span", {
          className: "inline-code"
        }, "SessionStorage"), " de la api web, donde registra dos propiedades:", React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
          className: "inline-code"
        }, "__beyond_navigation_position")), React.createElement("li", null, React.createElement("span", {
          className: "inline-code"
        }, "__beyond_navigation_records")))), React.createElement("li", null, React.createElement("strong", null, "position"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "HistoryPosition"
        }), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "value"), React.createElement(_typeProperty.TypeProperty, {
          type: "number"
        }), "valor de la posici\u00F3n actual de navegaci\u00F3n en el historico propio de", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "."))), React.createElement("li", null, React.createElement("strong", null, "records"), React.createElement(_typeProperty.TypeProperty, {
          type: "HistoryRecords"
        }), ": Objeto de tipo Map que contiene todas las entradas de navegaci\u00F3n del usuario en la sesi\u00F3n actual.")));
      }
    }
  });
  /****************************************
  INTERNAL MODULE: ./basic/state-management
  ****************************************/

  modules.set('./basic/state-management', {
    hash: 3055829169,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StateManagement = StateManagement;

      var React = require("react");

      function StateManagement() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Manejo de Estados"));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/styles/styles
  *************************************/

  modules.set('./basic/styles/styles', {
    hash: 4264514980,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesPage = StylesPage;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/ui/link/code");

      var _variables = require("./tpl/variables");

      const tplProcessor = `\r{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}
`;

      function StylesPage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Manejo de estilos"), React.createElement("p", null, "El manejo de estilos es parte esencial de todo proyecto con tecnolog\u00EDa web. ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " maneja varias definiciones a nivel de estructura, que pueden resultar interesantes para el desarrollador. A continuaci\u00F3n y c\u00F3mo introducci\u00F3n, se mencionan los puntos a tener en cuenta."), React.createElement("h2", {
          id: "module-styles"
        }, "Estilos en el m\u00F3dulo"), React.createElement("p", null, "Se puede definir estilos en cada m\u00F3dulo/bundle creado. Para esto debe agregarse el procesador de estilo ", React.createElement("code", {
          className: "inline"
        }, "SASS"), ", el cual viene incluido por defecto en los bundles de tipo ", React.createElement(_code2.Link, {
          href: "/bundles#page"
        }, React.createElement("span", {
          className: "inline"
        }, "widget")), " y", React.createElement(_code2.Link, {
          href: "/bundles#code"
        }, React.createElement("span", {
          className: "inline"
        }, "code")), " si son creados desde el", React.createElement(_code2.Link, {
          href: "/dashboard"
        }, "Dashboard"), "."), React.createElement("p", null, "Si la configuraci\u00F3n del bundle se hace de forma manual, el programador debe asegurarse de agregar el procesador en el ", React.createElement(_code2.Link, {
          href: "/module/config"
        }, "archivo de configuraci\u00F3n"), ", con una estructura como la siguiente:"), React.createElement(_code.Code, null, tplProcessor), React.createElement("p", null, "En la configuraci\u00F3n anterior, se est\u00E1 definiendo que en el m\u00F3dulo existe una carpeta sass, con ubicaci\u00F3n relativa al archivo ", React.createElement("span", {
          className: "inline"
        }, "module.json"), " y que todos los archivos de esta carpeta deben ser tomados en cuenta como archivos de estilo. De esta forma, ", React.createElement("strong", null, "no es requerido hacer imports con sem\u00E1ntica de javascript de archivos externos en nuestro c\u00F3digo"), "."), React.createElement("h2", {
          id: "template-styles"
        }, "Estilos en el ", React.createElement("span", {
          className: "inline"
        }, "template")), React.createElement("p", null, "las ", React.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
          target: "_blank"
        }, " custom properties"), ", son el \u00FAnico medio para compartir valores css entre componentes web y beyond recomienda agregar estas en la estructura de archivos que generan el ", React.createElement("span", {
          className: "inline"
        }, "styles.css"), " general del proyecto, de hecho incorpora una serie de variables por defecto."), React.createElement("p", null, "La configuraci\u00F3n de la plantilla al igual que los m\u00F3dulos, funciona por medio de procesadores, pero b\u00E1sicamente permite configurar estilos para tres niveles:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "\"application\""), ": Estilos generales de la aplicaci\u00F3n"), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "\"global\""), ": Estilos que son incluidos y quedan disponibles en cualquier bundle que tenga el mismo procesador de estilos."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "\"processors\""), ": Dise\u00F1ado para agregar funcionalidades de preprocesadores que no impriman c\u00F3digo, como ", React.createElement("span", {
          className: "inline"
        }, "mixins"), ", ", React.createElement("span", {
          className: "inline"
        }, "funciones"), " o ", React.createElement("span", {
          className: "inline"
        }, "variables"))), React.createElement("p", null, "Los proyectos en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ", vienen con una estructura de plantilla por defecto, la misma se puede encontrar en la carpeta ", React.createElement("span", {
          className: "inline"
        }, "template"), " en la raiz del mismo y que internamente tiene la siguiente estructura:"), React.createElement("ul", {
          className: "filelist-path"
        }, React.createElement("li", null, React.createElement("strong", null, "application/"), ": carpeta con archivos de estilos a incluir en la hoja de estilos general del proyecto."), React.createElement("li", null, React.createElement("strong", null, "global"), ": Estilaaos globales definidos para ser incluidos en los m\u00F3dulos."), React.createElement("li", null, React.createElement("strong", null, "overwrites"), ": M\u00E1s informaci\u00F3n de esto puede encontrarse en la secci\u00F3n dedicada a ", React.createElement(_code2.Link, {
          href: "/template/overwrites"
        }, "sobreescritura de m\u00F3dulos")), React.createElement("li", null, React.createElement("strong", null, "sass"), ": Archivos de estilos manejados con sass y de extensi\u00F3n ", React.createElement("span", {
          className: "inline"
        }, ".scss"), "."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "template.json"), ": Archivo de configuraci\u00F3n de la plantilla.")), React.createElement("h2", {
          id: "custom-properties"
        }, "Propiedades ", React.createElement("span", {
          className: "inline"
        }, "CSS")), React.createElement("p", null, "Las propiedades css incluidas por defecto son:"), React.createElement(_code.Code, {
          language: "css"
        }, _variables.variablesTPL), React.createElement("h2", {
          id: "sass-variables"
        }, "Variables ", React.createElement("span", {
          className: "inline"
        }, "SASS / SCSS")), React.createElement("p", null, "Se provee la misma lista de variables definidas como ", React.createElement("strong", null, "custom properties"), " como variables para sass. Estas por defecto, se encuentran disponibles a nivel de procesadores y no requieren ser importadas."), React.createElement("h3", {
          id: "libraries-css"
        }, "Node Modules"), React.createElement("p", null, "Si se requiere incluir un archivo de estilos de alguna libreria instalada en ", React.createElement("span", {
          className: "path"
        }, "node_modules"), ", se puede importar de forma no relativa, desde el archivo del m\u00F3dulo en el que se requiera, haciendo uso del caracter ", React.createElement("span", {
          className: "inline"
        }, "~"), " seguido de la ruta del paquete en la carpeta ", React.createElement("span", {
          className: "path"
        }, "node_modules")), React.createElement("p", null, "De esta forma, supongamos que se desea trabajar con ", React.createElement("span", {
          className: "path"
        }, "bootstrap"), ", podriamos importarlo de la siguiente forma:"), React.createElement(_code.Code, {
          language: "scss"
        }, "@import ~bootstrap/sass/bootstrap.scss;"), React.createElement("p", null, "De la misma forma, si se requiere importar un archivo especifico dentro de la libreria, como el de", React.createElement("span", {
          className: "inline"
        }, "_variables.scss"), ", puede importarse de forma directa:"), React.createElement(_code.Code, {
          language: "scss"
        }, "@import ~bootstrap/sass/variables.scss;"), React.createElement("h3", null, "Importaci\u00F3n de estilos de un ", React.createElement("span", {
          className: "inline"
        }, "bundle")), React.createElement("p", null, "la importaci\u00F3n de m\u00F3dulos de estilo es considerada en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " como una importaci\u00F3n no relativa, por tanto sigue las mismas reglas de importaci\u00F3n de un archivo existente en una libreria de npm, pero la ruta de inclusi\u00F3n en este caso, sigue la estructura de nombres de los m\u00F3dulos realizados con el framework, que como hemos visto antes, puede estar compuesta por ", React.createElement("span", {
          className: "inline"
        }, "@scope/name"), ", donde el scope es opcional."), React.createElement("p", null, "Para ejemplificarlo, imaginemos que se tiene un ", React.createElement("strong", null, "m\u00F3dulo"), " llamado ", React.createElement("i", null, "form"), ", que incluye un bundle ", React.createElement("span", {
          className: "inline"
        }, "code"), ", el c\u00FAal define componentes de un formulario y se requiere importar los estilos desde otro m\u00F3dulo. en el m\u00F3dulo, se creo un archivo", React.createElement("span", {
          className: "inline"
        }, "sass"), " que define estilos para los labels, cuyo nombre es ", React.createElement("span", {
          className: "inline"
        }, "labels.scss"), "La l\u00EDnea de importaci\u00F3n ser\u00EDa:"), React.createElement(_code.Code, {
          language: "scss"
        }, "@import ~@scope/project-name/form/sass/scss/label.scss;"));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./basic/styles/template
  ***************************************/

  modules.set('./basic/styles/template', {
    hash: 3833229047,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplatePage = TemplatePage;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/ui/link/code");

      var _variables = require("./tpl/variables");

      function TemplatePage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Plantilla de un protecto"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " brinda una arquitectura robusta para el manejo de plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Estilos: "), " Soporte integrado de preprocesadores LESS y SASS."), React.createElement("li", null, React.createElement("strong", null, "Propiedades CSS"), ": estructura b\u00E1sica de variables que permite trabajar con los componentes web eficientemente."), React.createElement("li", null, React.createElement("strong", null, "Estilo global"), ": Hoja de estilo global para el proyecto."), React.createElement("li", null, React.createElement("strong", null, "Sobreescritura"), ": Esto es una caracter\u00EDstica especial que permite redefinir estilos y textos de m\u00F3dulos existentes sin necesidad de tocar el c\u00F3digo original."), React.createElement("li", null, React.createElement("strong", null, "Separaci\u00F3n de c\u00F3digo"), ": Manejo independiente de los archivos de estilos con proceso automatizado para la generaci\u00F3n de archivos finales independientes y optimizados."), React.createElement("li", null, React.createElement("strong", null, "Light & Dark Theme"), " integrados.")), React.createElement("h2", {
          id: "config"
        }, "Configuraci\u00F3n"), React.createElement("p", null, "Los ", React.createElement("strong", null, "componentes web"), " proveen un modelo de encapsulamiento de estilos que hace que estos no tengan un alcance global y por tanto, no afecten otros componentes ni se vean afectadoss por estilos globales. Asimismo, todos comparten el acceso a las ", React.createElement("strong", null, "custom properties"), "."), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS")), React.createElement("p", null, "La configuraci\u00F3n de la plantilla, al igual que todos los elementos en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ", se maneja por medio de un archivo de configuraci\u00F3n, cuyo nombre y ubicaci\u00F3n es definido en el ", React.createElement(_code2.Link, {
          href: "/project/config"
        }, "project.json"), ". En general, por convenci\u00F3n el nombre suele ser ", React.createElement("span", {
          className: "inline-code"
        }, "template.json")), React.createElement("p", null, "La plantilla puede ser manejada desde el ", React.createElement("strong", null, "Dashboard"), " y cuando se crea un proyecto, ya viene configurada la estructura por defecto para su manejo."), React.createElement("h2", {
          id: "template-application"
        }, "template.project"), React.createElement("p", null, "Las ", React.createElement("strong", null, "custom properties"), " juegan un papel importante en el manejo de los componentes web. Por naturaleza, los componentes webs no se ven afectados por los estilos generales del sitio web. Sin embargo, las propiedades css si pueden ser accedidas y utilizadas. Esta estructura permite realizar componentes web que compartan los colores que necesiten de la aplicaci\u00F3n y puedan al mismo tiempo tener estilos propios sin preocuparse porque estos generen colisi\u00F3n con el c\u00F3digo de otros componentes."), React.createElement("p", null, "Es la configuraci\u00F3n para elementos de estilo generales que apliquen a todo el proyecto. Teniendo en cuenta que ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " trabaja con ", React.createElement("strong", null, "Componentes Web"), ", el uso de ", React.createElement("i", null, "custom properties"), " es esencial y este suele ser el lugar apropiado para definirlas, de hecho, por defecto vienen definidas algunas con soporte b\u00E1sico para definir el tema de un proyecto y su impplementaci\u00F3n en modo oscuro."), React.createElement(_code.Code, null, _variables.variablesTPL));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/styles/themes
  *************************************/

  modules.set('./basic/styles/themes', {
    hash: 1007160550,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ThemesPage = ThemesPage;

      var React = require("react");

      var _tbd = require("../../views/tbd");

      function ThemesPage() {
        return React.createElement(React.Fragment, null, React.createElement(_tbd.TBD, null));
      }
    }
  });
  /*************************************************
  INTERNAL MODULE: ./basic/styles/tpl/sass-variables
  *************************************************/

  modules.set('./basic/styles/tpl/sass-variables', {
    hash: 3165851846,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SASSVAriables = void 0;
      const SASSVAriables = `\r$font-family: 'Roboto', sans-serif;
$secondary-font-family: 'Roboto', sans-serif;
$title-font: 'Roboto', sans-serif;

$gray-base: #000000;
$gray-darker: #333333;
$gray-dark: #5E5F5C;
$gray: #82837F;
$gray-light: #E4E5DC;
$gray-lighter: #F0F0F0;

$primary: #FF8056;
$primary-dark: #E36152;
$primary-light: #FFA789;
$primary-accent: #E36152;
$text-on-primary: #fff;

$secondary: lighten(#121F36, 5%);
$secondary-dark: #121F36;
$secondary-light: #313C50;
$secondary-accent: #F7C700;
$text-on-secondary: #FFFFFF;

$background: $secondary;
$background-variant: #fff;
$border: #DDDDDD;
$border-variant: #eeeeee;
$text: #fff;

$success: #6AAC7D;
$warning: #F7C700;
$error: #f04141;
$chat-online: #43fc22;
$preload: $secondary;

$border-radius: 4px;

$media-mobile: 480px;
$media-sm: 481px and 768px;
$media-medium: 769px and 1024px;
$media-large: 1025px;
`;
      exports.SASSVAriables = SASSVAriables;
    }
  });
  /********************************************
  INTERNAL MODULE: ./basic/styles/tpl/variables
  ********************************************/

  modules.set('./basic/styles/tpl/variables', {
    hash: 4216222769,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.variablesTPL = void 0;
      const variablesTPL = `\r--primary: #FF8056;
  --primary-dark: #E36152;
  --primary-light: #FFA789;
  --primary-accent: #FFA789;
  --text-on-primary: #fff;
  //--accent-color: #67AAF9;
  --accent-color: #FFA385;
  //secondary colors
  --secondary: #121F36;
  --secondary-dark: #121F36;
  --secondary-darker: #0C1525;
  --secondary-light: #313C50;
  --secondary-accent: #F7C700;
  --text-on-secondary: #FFFFFF;

  --secondary-background: #{$secondary-bg};
  //background
  --background: linear-gradient(#{ darken(#121F36, 0%)}, #{ darken(#121F36, 10%)});
  --text-color: rgba(255, 255, 255, .6);
  --text-title-color: var(--text-on-primary);
  --text-second-color: var(--gray-dark);
  --text-hover-color: var(--primary);
  --bg-element: var(--secondary-dark);
  --element-border-color: var(--gray-light);
  --separator-color: var(--gray-lighter);`;
      exports.variablesTPL = variablesTPL;
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/widgets/index
  *************************************/

  modules.set('./basic/widgets/index', {
    hash: 3883993119,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Name = Name;

      var React = require("react");

      function Name() {
        return React.createElement(React.Fragment, null);
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./basic/widgets/intro
  *************************************/

  modules.set('./basic/widgets/intro', {
    hash: 3988826666,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Intro = Intro;

      var React = require("react");

      var _beyond = require("../../views/beyond");

      var _code = require("@beyond/ui/link/code");

      function Intro() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "intro"
        }, "Widgets"), React.createElement("p", null, "La arquitectura de desarrollo de ", React.createElement(_beyond.BeyondName, null), " en aplicaciones o proyectos webs, est\u00E1 dise\u00F1ada para trabajar con una estructura de ", React.createElement(_code.Elink, {
          href: "https://micro-frontends.org/"
        }, "Micro frontends"), ", brindando la posibilidad de poder integrar diferentes stacks tecnol\u00F3gicos en un mismo proyecto, lo que permite al desarrollador tener la posibilidad de evaluar que tecnolog\u00EDa es m\u00E1s conveniente para un modulo especifico, esto se logra por medio de la creaci\u00F3n de ", React.createElement("strong", null, "widgets"), "."), React.createElement("p", null, "Un ", React.createElement("strong", null, "Widget"), " es un tipo de ", React.createElement(_code.Link, {
          href: "/docs/bundles"
        }, "bundle"), " disponible en ", React.createElement(_beyond.BeyondName, null), " y es implementado por medio de un ", React.createElement(_code.Elink, {
          href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components"
        }, "Componente Web"), " con shadow DOM para encapsular su contenido. Al ser un componente web, puede definir propiedades y m\u00E9todos, tambien ser accedido por medio de la Api Web de Javascript. Otra ventaja importante de los widgets, basado en la filosof\u00EDa de ", React.createElement(_beyond.BeyondName, null), ", es que realizan la carga de las dependencias a demanda, s\u00F3lo en el momento en que son requeridas, optimizando los tiempos de carga de los proyectos."), React.createElement("div", {
          className: "block__note"
        }, React.createElement(_beyond.BeyondName, null), " implementa las t\u00E9cnicas de renderizado sobre widgets, esto ofrece la posibilidad de integrar renderizados hibridos en un proyecto, puedes leer m\u00E1s sobre ello en la ", React.createElement(_code.Link, {
          href: "/docs/rendering"
        }, "secci\u00F3n de renderizado.")), React.createElement("p", null, React.createElement(_beyond.BeyondName, null), " brinda soporte para trabajar con frameworks/librerias como ", React.createElement(_code.Elink, {
          href: "https://reactjs.org"
        }, "React"), ",\u00A0", React.createElement(_code.Elink, {
          href: "https://vuejs.org/"
        }, "Vue"), " y ", React.createElement(_code.Elink, {
          href: "https://svelte.dev/"
        }, "Svelte"), " y tiene disponible la posibilidad de integrar nuevas librerias o herramientas."));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./basic/widgets/widgets
  ***************************************/

  modules.set('./basic/widgets/widgets', {
    hash: 2521637460,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetsPage = WidgetsPage;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      var _modalImage = require("../../views/modal-image");

      var _beyond = require("../../views/beyond");

      var _intro = require("./intro");

      var _typeProperty = require("../../views/type-property");

      const tpl = `"widget": {
    "hmr": true,
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
      const tplPage = `
"widget": {
    "hmr": true,
    "route": "login"
    "element": {
      "name": "login-page"
    },
....
}`;
      const tplLayout = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`;
      const tplController = `\rimport {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`;

      function WidgetsPage() {
        return React.createElement(React.Fragment, null, React.createElement(_intro.Intro, null), React.createElement("h2", {
          id: "creation"
        }, "Creaci\u00F3n de widgets"), React.createElement("div", {
          className: "block__note"
        }, "Los widgets son un tipo de bundle, si quieres leer acerca de todos los tipos de bundles existentes, puedes dirigirte a la ", React.createElement(_code.Link, {
          href: "/docs/bundle"
        }, "secci\u00F3n de bundles"), "."), React.createElement("p", null, "Existen tres tipos de widgets:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "page"), ": representan p\u00E1ginas web"), React.createElement("li", null, React.createElement("strong", null, "layout"), ": son contenedores de p\u00E1ginas, permiten definir contenido que deba mantenerse en varias p\u00E1ginas."), React.createElement("li", null, React.createElement("strong", null, "default"), ": widgets generales que no requieren una especificaci\u00F3n de tipo, son manejados como web components igual.")), React.createElement("p", null, "Asimismo, requieren de caracter obligatorio disponibilizar una clase ", React.createElement("span", {
          className: "inline"
        }, "Controller"), ", la cual es descrita m\u00E1s adelante."), React.createElement("p", null, "Los widgets, siguen los l\u00EDnReamientos de cualquier bundle y pueden ser creados desde el dashboard o manualmente."), React.createElement("h3", null, React.createElement("small", null, "Creaci\u00F3n manual")), React.createElement("p", null, "La configuraci\u00F3n manual, se realiza agregando la definici\u00F3n del bundle de tipo widget en el ", React.createElement(_code.Link, {
          href: "/module/config"
        }, "module.json"), " del m\u00F3dulo."), React.createElement(_code2.Code, {
          language: "json"
        }, tpl), React.createElement("p", null, "El c\u00F3digo anterior, define un bundle de tipo ", React.createElement("span", {
          className: "inline"
        }, "widget"), " con el nombre del web-component como ", React.createElement("span", {
          className: "inline"
        }, "web-login"), " y con typescript como procesador."), React.createElement("h3", {
          id: "widget-dashboard"
        }, "Creaci\u00F3n con el dashboard"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/create-module-widget.png",
          alt: "create widget module beyond"
        }), React.createElement("div", {
          className: "block__note"
        }, "En el dashboard, todos los bundles se crean desde el formulario de m\u00F3dulos, y los archivos son actualizados autom\u00E1ticamente por ", React.createElement(_beyond.BeyondName, null), ". se puede conseguir m\u00E1s informaci\u00F3n al respecto en la secci\u00F3n del dashboard."), React.createElement("h3", {
          id: "widget-react"
        }, "Usando ", React.createElement("span", {
          className: "inline"
        }, "React")), React.createElement("p", null, React.createElement("span", {
          className: "inline"
        }, "React"), " tiene soporte autom\u00E1tico por medio de typescript en ", React.createElement(_beyond.BeyondName, null), ", que utiliza ", React.createElement(_code.Elink, {
          href: "https://babeljs.io/"
        }, "Babel"), " para convertir el c\u00F3digo. Por tanto, habiendo agregado el procesador ", React.createElement("span", {
          className: "inline"
        }, "ts"), " y teniendo instalada la dependencia de ", React.createElement("span", {
          className: "inline"
        }, "react"), ", tu modulo ya est\u00E1 listo para trabajar con ", React.createElement(_code.Elink, {
          href: "https://reactjs.org"
        }, " ReactJS"), "."), React.createElement("h3", null, "Usando ", React.createElement("span", {
          className: "inline"
        }, "Svelte"), " o ", React.createElement("span", {
          className: "inline"
        }, "Vue")), React.createElement("p", null, "Cada framework tiene su propio ", React.createElement(_code.Link, {
          href: "/docs/processors"
        }, "procesador"), ". Si deseas integrar vue debes agregar en la configuraci\u00F3n del bundle el procesador ", React.createElement("span", {
          className: "inline"
        }, "vue"), ", si en cambio, deseas trabajar con svelte, debes agregar en la configuraci\u00F3n del bundle el procesador ", React.createElement("span", {
          className: "inline"
        }, "svelte"), "."), React.createElement("h2", {
          id: "controller"
        }, "Definici\u00F3n del ", React.createElement("span", {
          className: "inline"
        }, "Controller")), React.createElement("p", null, "Todo widget debe exponer una clase ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " definida. El objeto Controller es el responsable de la declaraci\u00F3n y manejo del web-component que representa al widget. El controller tiene una estructura como la siguiente:"), React.createElement(_code2.Code, {
          language: "ts"
        }, tplController), React.createElement("p", null, "En el c\u00F3digo anterior, la clase ", React.createElement("span", {
          className: "inline"
        }, "Controller"), " extiende del objeto ", React.createElement("span", {
          className: "inline"
        }, "ReactWidgetController"), " que es el controlador base disponibilizado para trabajar con React. ", React.createElement(_beyond.BeyondName, null), " tiene disponible un controlador para los distintos frameworks de vista. Los objetos son:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "ReactWidgetController"), " y ", React.createElement("span", {
          className: "inline"
        }, "ReactPageWidgetController"), "."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "SvelteWidgetController"), " y ", React.createElement("span", {
          className: "inline"
        }, "SveltePageWidgetController"), "."), React.createElement("li", null, React.createElement("span", {
          className: "inline"
        }, "VueWidgetController"), " y ", React.createElement("span", {
          className: "inline"
        }, "VuePageWidgetController"), ".")), React.createElement("p", null, "Todos los controladores manejan la misma interfaz, pero estan a su vez enfocados en integrar y funcionar con el framework de vista que se est\u00E9 utilizando."), React.createElement("h3", {
          id: "controller-properties"
        }, React.createElement("small", null, "Propiedades")), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "get Widget")), React.createElement(_typeProperty.TypeProperty, {
          type: "object",
          optional: true
        }), ": Se define como un getter y debe retornar el componente de vista principal.")), React.createElement("h3", {
          id: "controller-methods"
        }, React.createElement("small", null, "M\u00E9todos")), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "createStore")), React.createElement(_typeProperty.TypeProperty, {
          type: "function",
          optional: true
        }), " Permite agregar l\u00F3gica para el manejo del Estado del widget, debe retornar un objeto con la interfaz ", React.createElement(_code.Link, {
          href: "/docs/api/IwidgetStore"
        }, React.createElement("span", {
          className: "inline"
        }, "IWidgetStore")))), React.createElement("h2", null, "P\u00E1ginas"), React.createElement(_code2.Code, {
          language: "json"
        }, tplPage), React.createElement("p", null, "Las p\u00E1ginas se configuran igual que cualquier widget, pero tienen los siguientes parametros adicionales para su configuraci\u00F3n:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "route:"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), ": Representa la ruta con la que deseas poder acceder a tu componente"), React.createElement("li", null, React.createElement("strong", null, "layout"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": y define si quieres usar un layout o no en tu p\u00E1gina."), React.createElement("li", null, React.createElement("strong", null, "vdir"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": Permite definir si quieres manejar alg\u00FAn valor din\u00E1mico en la url")), React.createElement("h3", {
          id: "route-pattern"
        }, "Patr\u00F3n de rutas"), React.createElement("p", null, " Se pueden definir urls con valores din\u00E1micos agregando las variables a la propiedad ", React.createElement("span", {
          className: "inline"
        }, "route"), " utilizando una sintaxis similar a la de las template strings."), React.createElement("p", null, "Para ejemplificarlo, supongamos que se tiene una p\u00E1gina de m\u00F3dificaci\u00F3n de datos de un usuario y se necesita manejar el id por medio de la url. La propiedad ", React.createElement("span", {
          className: "inline"
        }, "route"), " del widget tendr\u00EDa el siguiente valor"), React.createElement(_code2.Code, {
          language: "json"
        }, '/user/edit/${userId}'), React.createElement("p", null, "Con esto, podremos acceder a nuestra variable userId desde nuestro widget accediendo al mapa ", React.createElement("span", {
          className: "inline-code"
        }, "vars"), " disponible en el objeto uri que recibe nuestro widget."), React.createElement("h2", {
          id: "layouts"
        }, "Layouts"), React.createElement("p", null, "Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias p\u00E1ginas internas."), React.createElement(_code2.Code, {
          language: "json"
        }, tplLayout));
      }
    }
  });
  /**************************
  INTERNAL MODULE: ./contents
  **************************/

  modules.set('./contents', {
    hash: 3942993331,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Contents = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      class Contents extends _ts.Events {
        #loading = false;

        get loading() {
          return this.#loading;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #value = [];

        get value() {
          return this.#value;
        }

        #hydrated = false;

        get hydrated() {
          return this.#hydrated;
        }

        #container;

        get container() {
          return this.#container;
        }

        constructor(container) {
          super();
          this.#container = container;
        }

        async fetch() {
          this.#loading = true;
          this.trigger('change');
          await new Promise(resolve => setTimeout(resolve, 4000));
          this.#value.push({
            id: 1,
            name: 'Pepsi'
          });
          this.#value.push({
            id: 2,
            name: 'Coca Cola'
          });
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }

        hydrate(cached) {
          console.log(cached);
          this.#loading = false;
          this.#loaded = true;
          cached.forEach(company => this.#value.push(company));
          this.#hydrated = true;
        }

        toJSON() {
          return this.#value;
        }

      }

      exports.Contents = Contents;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 3395732354,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/kernel/react-widget/ts");

      var _contents = require("./contents");

      var _page = require("./views/page");
      /*bundle*/


      class Controller extends _ts.PageReactWidgetController {
        createStore() {
          return new _contents.Contents(this.body);
        }

        get Widget() {
          return _page.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /********************
  INTERNAL MODULE: ./db
  ********************/

  modules.set('./db', {
    hash: 1954408587,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getContent = void 0;

      var _whatIs = require("./views/what-is/what-is");

      var _why = require("./fundamentals/why");

      var _dashboard = require("./views/dashboard/dashboard");

      var _example = require("./views/example");

      var _starting = require("./views/starting/starting");

      var _tutorialPage = require("./views/tutorial/tutorial-page");

      var _concepts = require("./views/concepts/concepts");

      var _install = require("./basic/install");

      var _error = require("./views/error-404");

      var _config = require("./views/concepts/module/config");

      var _projectJson = require("./views/concepts/projects/project-json");

      var _npmPackages = require("./fundamentals/npm-packages");

      var _moduleIntro = require("./views/concepts/module/module-intro");

      var _index = require("./views/concepts/server/index");

      var _widgets = require("./basic/widgets/widgets");

      var _fetching = require("./basic/fetching");

      var _routing = require("./basic/routing");

      var _backend = require("./basic/backend");

      var _bundle = require("./views/concepts/module/bundle");

      var _bee = require("./fundamentals/bee");

      var _hmr = require("./fundamentals/hmr");

      var _deployment = require("./basic/deployment");

      var _template = require("./basic/styles/template");

      var _styles = require("./basic/styles/styles");

      var _themes = require("./basic/styles/themes");

      var _stateManagement = require("./basic/state-management");

      var _rendering = require("./basic/rendering");

      var _intro = require("./basic/intro");

      var _processors = require("./fundamentals/processors");

      const getContent = (contentId, sub = undefined) => {
        const starting = {
          intro: _intro.Intro,
          install: _install.Install,
          dashboard: _dashboard.DashboardPage,
          tutorial: {
            web: _tutorialPage.TutorialPage
          }
        };
        const basics = {
          projects: _intro.Projects,
          modules: _moduleIntro.ModuleIntro,
          bundles: _bundle.Bundle,
          widgets: _widgets.WidgetsPage,
          stateManagement: _stateManagement.StateManagement,
          routing: _routing.RoutingPage,
          styles: _styles.StylesPage,
          themes: _themes.ThemesPage,
          backend: _backend.Backend,
          rendering: _rendering.RenderingPage,
          deployment: _deployment.DeploymentPage
        };
        const foundations = {
          bee: _bee.BEE,
          hmr: _hmr.HMR,
          processors: _processors.Processors
        };
        const contents = { ...starting,
          ...basics,
          ...foundations,
          template: _template.TemplatePage,
          fetching: _fetching.FetchingDAtaPage,
          'what-is-beyond': _whatIs.WhatIs,
          'why-beyond': _why.WhyBeyond,
          default: _example.Example,
          Starting: _starting.Starting,
          'npm-packages': _npmPackages.NpmPackages,
          concepts: {
            basics: _concepts.Concepts
          },
          error404: _error.Error404,
          modules: {
            introduction: _moduleIntro.ModuleIntro,
            config: _config.ModuleConfig
          },
          project: {
            config: _projectJson.ProjectJson
          },
          server: _index.Server
        };
        let Control = contents.hasOwnProperty(contentId) ? contents[contentId] : contents.error404;

        if (sub) {
          Control = Control.hasOwnProperty(sub) ? Control[sub] : contents.error404;
        }

        return {
          id: contentId,
          control: Control
        };
      };

      exports.getContent = getContent;
    }
  });
  /**********************************
  INTERNAL MODULE: ./fundamentals/bee
  **********************************/

  modules.set('./fundamentals/bee', {
    hash: 955064689,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BEE = BEE;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function BEE() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Distribuciones"), React.createElement("p", null, "Las distribuciones representan el entorno de ejecuci\u00F3n de un proyecto. Es necesario configurar una distribuci\u00F3n por cada entorno en el que se desee trabajar.", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " crea un ", React.createElement("strong", null, "Entorno de Ejecuci\u00F3n de Beyond (BEE)"), " por cada distribuci\u00F3n creada. M\u00E1s adelante se explicar\u00E1 que es exactamente un BEE y las ventajas que ofrece."), React.createElement("h1", null, "Node"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " permite realizar proyectos escalables y eficientes con", React.createElement(_code.Elink, {
          href: "https://nodejs.org"
        }, "Node.js"), " construidos directamente con typescript y buscando mejorar la experiencia de desarrollo, por medio de la integraci\u00F3n de HMR."), React.createElement("p", null, "Para trabajar con node, es necesario crear una distribuci\u00F3n de tipo node. A partir de all\u00ED, ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " se encargar\u00E1 de levantar el entorno de ejecuci\u00F3n (BEE) y dejar disponible todos los modulos del proyecto que esten configurados para las plataformas que manejan node."), React.createElement("h3", null, "Distribuci\u00F3n"), React.createElement("p", null, "La configuraci\u00F3n de modulos node en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " se hace por medio de las distribuciones. El desarrollador configura una distribuci\u00F3n"), React.createElement("p", null, "Como se explica en otras partes de esta documentaci\u00F3n, un modulo en BeyondJS es un contenedor de bundles, donde puede existir uno o varios ", React.createElement("code", {
          className: "inline-code"
        }, "bundles"), ".A su vez, cada uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto . ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " hace uso de los BEE(Beyond Execution Environment) sobre lo cual se explicar\u00E1 m\u00E1s adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la experiencia."), React.createElement("h2", null, "BEE\u00A0", React.createElement("small", null, "(Beyond Execution Environment)")), React.createElement("p", null, "Los bee son procesos gestionados por ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ". Se comportan como un servicio node, con la diferencia de que son gestionados por el servicio principal de ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), ", el cual analiza, revisa y compila los cambios en tiempo real para dejar disponible en memoria una nueva versi\u00F3n de los bundles con los cambios de c\u00F3digo aplicados por medio de ", React.createElement("strong", {
          className: "highlight"
        }, "HMR"), ", brindando la oportunidad de temer acceso a las funcionalidades de c\u00F3digo actualizadas, sin necesidad de reiniciar el proceso node."), React.createElement("p", null, "La actualizaci\u00F3n en tiempo real en el proceso ", React.createElement("span", {
          className: "highlight"
        }, "Node"), " ofrece ventajas en tiempo de ejecuci\u00F3n pues evita realizar toda la carga a nivel de tiempo recursos que implica detener el proceso completo y volver a levantarlo, esto puede aplicar para valores en memoria o conexiones a bases de datos, por mencionar ejemplos. ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " detecta los cambios en un archivo o ", React.createElement(_code.Link, {
          href: "/docs/modules#internal-modules"
        }, "Modulo interno"), ", actualiza el cambio, realiza una compilaci\u00F3n nueva del bundle en el momento y deja la nueva versi\u00F3n disponible para ser consumida."), React.createElement("h5", null, "El flujo de funcionamiento del Bee es el siguiente:"), React.createElement("ul", null, React.createElement("li", null, "Beyond levanta el servicio."), React.createElement("li", null, "Se realiza un repaso del arbol de dependencias de los bundles (notar que es a nivel de bundles y no m\u00F3dulos internos)."), React.createElement("li", null, " Se carga en memoria el c\u00F3digo procesado y se agregan whatchers para poder detectar cambios."), React.createElement("li", null, "Si existe un cambio en un archivo, el mismo es detectado y se reemplaza ese segmento de c\u00F3digo.")), React.createElement("div", {
          className: "block__note"
        }, "Los imports dinamicos no son cargados cuando el BEE levanta, sino que se solicitan a demanda."));
      }
    }
  });
  /**********************************
  INTERNAL MODULE: ./fundamentals/hmr
  **********************************/

  modules.set('./fundamentals/hmr', {
    hash: 942990439,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HMR = HMR;

      var React = require("react");

      function HMR() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "HMR"), React.createElement("p", null, "Todos los bundles exponen de forma autom\u00E1tica un objeto hmr que le permite al desarrollador suscribirse a los cambios de c\u00F3digo y persistir de esta forma el estado de la aplicaci\u00F3n en el cual se encuentra la misma, optimizando as\u00ED el proceso de desarrollo al evitar tener que realizar un flujo completo nuevamente para volver al estadio en el proyecto sobre el cual se est\u00E1 desarrollando."), React.createElement("p", null, "Para explicarlo mejor, supongamos que se est\u00E1 realizando una l\u00F3gica de filtrado de elementos de una base de datos en un m\u00F3dulo backend, este m\u00F3dulo realiza los siguientes pasos:"), React.createElement("ul", null, React.createElement("li", null, "Realiza el login contra la base de datos."), React.createElement("li", null, "Realiza dos consultas a base de datos."), React.createElement("li", null, "Retorna la informaci\u00F3n disponible para que el programador trabaje con ella."), React.createElement("li", null, "Genera una estructura de datos en la cual se integra toda la informaci\u00F3n consultada para que esta sea devuelta al cliente.")), React.createElement("p", null, "La suscripci\u00F3n de cambios de parte del desarrollador con hmr, permite a este enfocarse en el \u00FAltimo punto sin necesidad de repetir por cada cambio los primeros tres, lo cual significa una optimizaci\u00F3n en tiempo de pruebas bastante alta."), React.createElement("p", null, "La implementaci\u00F3n de hmr se encarga de forma autom\u00E1tica de realizar el reemplazo de contenido de un archivo en el mismo momento en el que este es cambiado, dejando disponible de manera inmediata la actualizaci\u00F3n del mismo, sin necesidad de realizar ninguna acci\u00F3n adicional y adem\u00E1s, el programador puede suscribirse a estos cambios para definir que desea hacer a partir de ellos, ofreciendole la versatilidad de ejecutar funciones de manera autom\u00E1tica ante cada cambio."), React.createElement("h2", null, "Eventos"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "change")), React.createElement("li", null, React.createElement("strong", null, "change:[nombre-procesador]"))));
      }
    }
  });
  /*******************************************
  INTERNAL MODULE: ./fundamentals/npm-packages
  *******************************************/

  modules.set('./fundamentals/npm-packages', {
    hash: 1697666332,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NpmPackages = NpmPackages;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function NpmPackages() {
        return React.createElement("div", {
          className: "contents"
        }, React.createElement("h1", null, "Paquetes NPM"), React.createElement("p", null, "El desarrollo web se fundamenta principalmente sobre Javascript y las tecnolog\u00EDas que giran a su alrededor, siendo ", React.createElement("code", {
          className: "inline-code"
        }, React.createElement("a", {
          href: "https://www.npmjs.com/",
          target: "_blank"
        }, "NPM")), "el epicentro en el cual se encuentran la mayoria de paquetes, frameworks y librerias utilizadas por la industria y por supuesto, quien define el estandar para la creaci\u00F3n de estos paquetes. Sin embargo, aunque el estandar est\u00E1 definido, existe una variedad de configuraciones seg\u00FAn el tipo de paquete publicado y la forma en que se espera sea consumido. "), React.createElement("p", null, "En la practica, no todos los programadores conocen, manejan o se rigen por los estandares de NPM y esto sugiere dos problem\u00E1ticas muy claras y sin embargo, imperceptibles para muchos desarrolladores. La primera es la generaci\u00F3n de bundles y la forma de consumir javascript, existen librerias que se han abocado completamente a esperar que sean manejadas por empaquetadores como webpack, dejando de lado aquellos proyectos que no esperen manejar este nivel de configuraci\u00F3n, bien sea porque no lo requieren o desean. La segunda y m\u00E1s importante, es que en el ecosistema de Javascript, existen diferentes formas de integrar las dependencias: CommonJS, AMD, UMD, SystemJS y EcmaScript Modules, si un proyecto no brinda soporte a una de estas, el equipo de programaci\u00F3n que desee integrarlo y lo requiera, puede verse complicado. En la mayoria de los casos las librerias que ofrecen ES6 Modules, realmente son paquetes que solo pueden ser integrados si existe un empaquetador de por medio"), React.createElement("p", null, "Beyond Busca estandarizar el manejo de paquetes y genera de forma autom\u00E1tica la estructura del package.json correcta para ser manejada desde cualquier tipo de proyecto, sin importar entorno o forma de uso, esta tarea puede hacerse desde el", React.createElement(_code.Link, {
          href: "/dashboard"
        }, "Dashboard")));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./fundamentals/processors
  *****************************************/

  modules.set('./fundamentals/processors', {
    hash: 3144798096,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Processors = Processors;

      var React = require("react");

      var _beyond = require("../views/beyond");

      var _code = require("@beyond/ui/link/code");

      var _typeProperty = require("../views/type-property");

      var _code2 = require("@beyond/docs/code/code");

      const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}

`;

      function Processors() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", {
          id: "processors"
        }, "Procesadores"), React.createElement("p", null, "Muchas de las herramientas o lenguajes utilizados en el entorno web no son soportados de forma directa en los navegadores y requieren ser procesadas para poder ser integradas en un sitio web, este es el trabajo que realizan los procesadores. ", React.createElement(_beyond.BeyondName, null), " ofrece una serie de procesadores integrados, que permiten utilizar las principales tecnolog\u00EDas de la industria web. Asimismo, ofrece la posibilidad de crear nuevos procesadores, en caso de que se desee integrar una herramienta que no este soportada por los procesadores existentes."), React.createElement("div", {
          className: "block__note"
        }, React.createElement(_beyond.BeyondName, null), " no funciona como los empaquetadores como Webpack o parcel. No necesita evaluar grafo de dependencias ni aplicar t\u00E9cnicas para separaci\u00F3n de c\u00F3digo o tree shaking. Gracias a su naturaleza m\u00F3dular y por medio de los procesadores, el empaquetado de c\u00F3digo se hace a nivel de bundles."), React.createElement("p", null, " Los procesadores son componentes de ", React.createElement(_beyond.BeyondName, null), " que permiten interpretar, parsear, transpilar o compilar c\u00F3digo (seg\u00FAn sea el caso) de los lenguajes o tecnolog\u00EDas utilizadas en un", React.createElement(_code.Link, {
          href: "/docs/bundles"
        }, "Bundle"), "."), React.createElement("h2", {
          id: "processors-list"
        }, "Procesadores existentes"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "ts")), ": permite trabajar con typescript y archivos `tsx` para react."), React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "sass")), ": brinda soporte para trabajar con archivos SASS de extensi\u00F3n ", React.createElement("span", {
          className: "inline"
        }, ".scss")), React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "vue")), ": Brinda soporte para trabajar con archivos single-file-components de vue."), React.createElement("li", null, React.createElement("strong", null, React.createElement("span", {
          className: "inline"
        }, "svelte")), ": Permite trabajar con archivos single-file-component de ", React.createElement("span", {
          className: "inline"
        }, "svelte"))), React.createElement("h3", {
          id: "properties"
        }, "Propiedades"), React.createElement("p", null, "Todos los procesadores cuentan con las siguientes propiedades:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "path: "), React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": Permite definir el ", React.createElement("span", {
          className: "inline"
        }, "directorio"), " en donde se encuentran los archivos del procesador. Si se agrega un valor, el mismo es interpretado como un directorio de posici\u00F3n relativa a la ubicaci\u00F3n del ", React.createElement("span", {
          className: "inline"
        }, "module.json"), " definido."), React.createElement("li", null, React.createElement("strong", null, "files: "), React.createElement(_typeProperty.TypeProperty, {
          type: "array",
          optional: true
        }), ": Permite definir la lista de archivos o carpetas incluidos en el procesador. Si la propiedad ", React.createElement("span", {
          className: "inline"
        }, "path"), " se encuentra definida, los archivos ser\u00E1n buscados adentro del directorio especificado, caso contrario, ser\u00E1n buscados de forma relativa a la ubicaci\u00F3n del ", React.createElement("span", {
          className: "inline"
        }, "module.json"), ". Se puede pasar como valor de la propiedad un arreglo con una entrada ", React.createElement("span", {
          className: "inline"
        }, "*"), ", de esta forma se estar\u00EDa indicando que se incluyen todos los archivos en el directorio especificado.")), React.createElement("h3", {
          id: "example"
        }, "Ejemplos"), React.createElement("div", {
          className: "content-container two-columns"
        }, React.createElement("div", {
          className: "content"
        }, React.createElement("p", null, "El siguiente ejemplo, corresponde a la definici\u00F3n de un bundle de tipo code, a continuaci\u00F3n explicamos el detalle:"), React.createElement("ul", null, React.createElement("li", null, "El bundle hace uso de dos procesadores: ", React.createElement("span", {
          className: "inline"
        }, "sass"), " y ", React.createElement("span", {
          className: "inline"
        }, "ts"), "."), React.createElement("li", null, "El procesador sass incluye todos los archivos en el directorio ", React.createElement("span", {
          className: "inline"
        }, "/code/scss"), " el cual es relativo a la ubicaci\u00F3n del archivo ", React.createElement("span", {
          className: "inline"
        }, "module.json")), React.createElement("li", null, "El procesador ", React.createElement("span", {
          className: "inline"
        }, "ts"), " s\u00F3lo incluye el archivo ", React.createElement("span", {
          className: "inline-code"
        }, "component.ts"), " el c\u00FAal se encuentra en el directorio ", React.createElement("span", {
          className: "inline"
        }, "/code/ts"), " relativo a la ubicaci\u00F3n del archivo ", React.createElement("span", {
          className: "inline"
        }, "module.json")))), React.createElement(_code2.CodeBox, {
          language: "json",
          title: "module.json"
        }, tpl)));
      }
    }
  });
  /**********************************
  INTERNAL MODULE: ./fundamentals/why
  **********************************/

  modules.set('./fundamentals/why', {
    hash: 966932364,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WhyBeyond = WhyBeyond;

      var React = require("react");

      function WhyBeyond() {
        return React.createElement("section", {
          className: "content"
        }, React.createElement("h1", null, "\u00BFPor qu\u00E9 ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "?"));
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./loading
  *************************/

  modules.set('./loading', {
    hash: 1741376517,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PreloadPage = PreloadPage;

      var React = require("react");

      function PreloadPage() {
        return React.createElement("div", {
          className: "page__main-container"
        }, React.createElement("div", {
          className: "page__main-content"
        }, React.createElement("h1", null, "Cargando...")));
      }
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  modules.set('./page', {
    hash: 1603913855,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ContentsPage = ContentsPage;

      var React = require("react");

      var _rightAside = require("./views/right-aside");

      var _useContent = require("./use-content");

      var _loading = require("./loading");
      /*bundle*/


      function ContentsPage({
        component,
        contentId,
        sub,
        hmrChanged
      }) {
        const [titles, setTitles] = React.useState([]);
        const [content, fetching] = (0, _useContent.useContent)(contentId, sub, hmrChanged);
        React.useEffect(() => {
          window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h1,h2,h3'));
            setTitles(titles);
          }, 50);
        }, []);
        React.useEffect(() => {
          const body = document.querySelector('body');
          body.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
        if (fetching) return React.createElement(_loading.PreloadPage, null);
        const Control = content.control;
        return React.createElement("div", {
          className: "page__main-container"
        }, React.createElement("section", {
          className: "page__main-content"
        }, React.createElement(Control, null)), !!titles.length && React.createElement(_rightAside.RightAside, {
          container: component.shadowRoot,
          titles: titles
        }));
      }
    }
  });
  /**********************
  INTERNAL MODULE: ./quiz
  **********************/

  modules.set('./quiz', {
    hash: 1769948551,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Quiz = Quiz;

      var React = require("react");

      var _code = require("@beyond/docs/ui/icons/code");

      function Quiz({
        id
      }) {
        return React.createElement("div", {
          className: "content__quiz"
        }, React.createElement("h4", null, "\u00BFTe result\u00F3 \u00FAtil este art\u00EDculo?"), React.createElement("div", {
          className: "quiz__actions"
        }, React.createElement(_code.AppIconButton, {
          icon: "beyond",
          className: "border-icon"
        }), React.createElement(_code.AppIconButton, {
          icon: "beyond",
          className: "border-icon to-bottom"
        })));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./use-content
  *****************************/

  modules.set('./use-content', {
    hash: 2451320018,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useContent = useContent;

      var React = require("react");

      var _db = require("./db");
      /*bundle*/


      function useContent(contentId, sub, hmrChanged) {
        const [content, setContent] = React.useState((0, _db.getContent)(contentId, sub));
        const [fetching, setFetching] = React.useState(true);
        const [updated, setUpdated] = React.useState(hmrChanged);
        React.useEffect(() => {
          setFetching(true);
          setContent((0, _db.getContent)(contentId, sub));

          if (updated === hmrChanged) {
            setFetching(false);
            return;
          }

          window.setTimeout(() => {
            setUpdated(hmrChanged);
            setFetching(false);
          }, 30);
        }, [contentId, hmrChanged]);
        return [content, fetching];
      }
    }
  });
  /******************************
  INTERNAL MODULE: ./views/beyond
  ******************************/

  modules.set('./views/beyond', {
    hash: 3491118623,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondName = BeyondName;

      var React = require("react");
      /*bundle*/


      function BeyondName() {
        return React.createElement(React.Fragment, null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/concepts/concepts
  *****************************************/

  modules.set('./views/concepts/concepts', {
    hash: 2461234051,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Concepts = Concepts;

      var React = require("react");

      function Concepts() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Concepts"));
      }
    }
  });
  /***********************************************
  INTERNAL MODULE: ./views/concepts/features/index
  ***********************************************/

  modules.set('./views/concepts/features/index', {
    hash: 3380790336,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Features = Features;

      var React = require("react");

      function Features() {
        return React.createElement(React.Fragment, null);
      }
    }
  });
  /**************************************************
  INTERNAL MODULE: ./views/concepts/glossary/glossary
  **************************************************/

  modules.set('./views/concepts/glossary/glossary', {
    hash: 2205492520,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Glossary = Glossary;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function Glossary() {
        return React.createElement("section", {
          className: "content content__glossary"
        }, React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "EAC "), "(\"External Array Configuration\") Los objetos cuyas propiedades son EAC pueden esperar dos valores, Un arreglo o una cadena de texto. Si se pasa una cadena de texto, ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " toma el valor como una ruta relativa para la ubicaci\u00F3n del archivo externo de configuraci\u00F3n. Arreglo de configuraci\u00F3n que puede encontrarse en un archivo independiente y cuyos elementos son de tipo", React.createElement(_code.Link, {
          href: "/glossary#eoc"
        }, "EOC.")), React.createElement("li", null, React.createElement("strong", null, "EOC "), "(\"External Object Configuration\") Objeto de configuraci\u00F3n que puede ser includo de forma directa como valor o ser referenciado como un archivo externo. Los objetos cuyas propiedades son EOC pueden esperar dos valores: un objeto o una cadena de texto. Si la propiedad tiene definido como valor una cadena de texto, ", React.createElement("span", {
          className: "beyond"
        }, " Beyond"), "toma el valor como una ruta relativa para la ubicaci\u00F3n del archivo externo de configuraci\u00F3n.")));
      }
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/concepts/module/bundle
  **********************************************/

  modules.set('./views/concepts/module/bundle', {
    hash: 1267176536,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundle = Bundle;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _beyond = require("../../beyond");

      function Bundle() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Bundles"), React.createElement("p", null, "Imagina que necesitas realizar la interfaz de un formulario de registro. El formulario de registro podr\u00EDa dividirse en dos capas:"), React.createElement("ul", null, React.createElement("li", null, "la interfaz de usuario basada en el c\u00F3digo HTML y los estilos de la pantalla."), React.createElement("li", null, "La l\u00F3gica asociada a validaciones y funcionalidades.")), React.createElement("p", null, " Para poder llevar a cabo el desarrollo, es necesario crear algunos archivos en Typescript, que incluyan la l\u00F3gica y elementos de la interfaz y otros archivos de estilo. En ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " esto implica trabajar con al menos, dos procesadores b\u00E1sicos:", React.createElement("code", {
          className: "inline"
        }, "ts"), " y ", React.createElement("code", {
          className: "inline"
        }, "sass"), ", el primero genera c\u00F3digo javascript, el segundo genera c\u00F3digo css."), React.createElement("p", null, React.createElement("strong", null, "Un bundle"), " representa el o los archivos compilados ya listos para ser incluidos en el navegador. Estos archivos se componen por c\u00F3digo generado por los procesadores incluidos en la configuraci\u00F3n"), ".", React.createElement("p", null, "Como se explic\u00F3 anteriormente, la posibilidad de que un bundle genere uno o varios archivos finales, depende b\u00E1sicamente de los procesadores incluidos para su empaquetamiento, si es necesarario crear s\u00F3lo c\u00F3digo Javascript se genera un \u00FAnico archivo, si por el contrario se necesita tambien c\u00F3digo CSS se generan dos archivos."), React.createElement("p", null, "Los bundles estan compuestos por procesadores y ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " ofrece la posibilidad a los desarrolladores de poder crear sus propios bundles."), React.createElement("h2", {
          id: "transversal"
        }, "Bundles Transversales"), React.createElement("p", null, "Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que ofrece ventajas productivas: el c\u00F3digo de un bundle transversal es compilado en un archivo \u00FAnico."), React.createElement("p", null, React.createElement(_beyond.BeyondName, null), " los ubica, integra y unifica en un \u00FAnico bundle o archivo final. Los bundle de tipo ", React.createElement("span", {
          className: "inline-code"
        }, "start"), " son un ejemplo claro de ello, permiten al programador definir l\u00F3gica que desea sea ejecutada en el arranque de la aplicaci\u00F3n."), React.createElement("h2", {
          id: "id"
        }, "Tipos"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Widget"), ": Contienen el c\u00F3digo de un ", React.createElement("code", {
          className: "inline"
        }, "web-component"), ". Las p\u00E1ginas y los layouts son manejados como widgets. Puedes leer m\u00E1s acerca de este tipo de bundle en la secci\u00F3n de ", React.createElement(_code.Link, {
          href: "/widgets"
        }, " Widgets.")), React.createElement("li", null, React.createElement("strong", null, "Code:"), " Bundle que permite crear funcionalidades diversas para ser consumidas desde otro bundle o m\u00F3dulo. Soporta la integraci\u00F3n de m\u00FAltiples procesadores."), React.createElement("li", null, React.createElement("strong", null, "TS(Typescript):"), " s\u00F3lo soporta el procesador para manejo de archivos ", React.createElement("span", {
          className: "inline"
        }, "typescript")), React.createElement("li", null, React.createElement("strong", null, "Bridge:"), " bundle de c\u00F3digo backend, que genera c\u00F3digo cliente y disponibiliza la conexi\u00F3n ", React.createElement("code", {
          className: "inline"
        }, "websocket"), " para conectar el cliente y el backend."), React.createElement("li", null, React.createElement("strong", null, "backend"), ": s\u00F3lo soporta c\u00F3digo que va a ser ejecutado en entornos de ejecuci\u00F3n c\u00F3mo ", React.createElement("strong", null, "Node"), " o ", React.createElement("strong", null, "Rhino"), "."), React.createElement("li", null, React.createElement("strong", null, "Vue:"), " Bundle especifico para manejo de m\u00F3dulos con el Framework Vue."), React.createElement("li", null, React.createElement("strong", null, "Svelte:"), " especifico para manejo de c\u00F3digo svelte y su estructura de single file component."), React.createElement("li", null, React.createElement("strong", null, "start:"), " Bundle transversal, \u00FAtil si se requiere ejecutar l\u00F3gica en el arranque del aplicativo."), React.createElement("li", null, React.createElement("strong", null, "txt-start:"), " Bundle transversal, que permite manejar textos m\u00FAltilenguajes requeridos en el arranque del aplicativo.")));
      }
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/concepts/module/config
  **********************************************/

  modules.set('./views/concepts/module/config', {
    hash: 1516985785,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleConfig = ModuleConfig;

      var React = require("react");

      var _typeProperty = require("../../type-property");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      const tpl = `"platforms": [
    "backend",
    "web"
 ]`;
      const jsonTpl = `\r{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "widget": {
    "hmr": true,
    "element": {
      "name": "home-page"
    },
    "name": "home",
    "route": "/\${content}",
    "is": "page",
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }
}
`;

      function ModuleConfig() {
        return React.createElement(React.Fragment, null, React.createElement("h2", null, "Configuracion de m\u00F3dulos "), React.createElement("p", null, "El archivo de configuracion de m\u00F3dulos es el ", React.createElement("code", {
          className: "inline-code"
        }, "module.json")), React.createElement(_code2.Code, {
          language: "json"
        }, jsonTpl), React.createElement("p", null, "Las propiedades de configuraci\u00F3n son:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "name"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "string"
        }), ": Define el nombre del m\u00F3dulo, necesario para que los elementos puedan ser importados."), React.createElement("li", null, React.createElement("strong", null, "platforms"), React.createElement(_typeProperty.TypeProperty, {
          type: "array"
        }), ": Define las", React.createElement(_code.Link, {
          href: "/concepts/platforms"
        }, " plataformas"), " soportadas por el m\u00F3dulo. Los valores soportados son los identificadores de las plataformas existentes.", React.createElement(_code2.Code, {
          language: "json"
        }, tpl)), React.createElement("li", null, React.createElement("strong", null, "[bundle]"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "bundle",
          href: "/module#bundle"
        }), ": Refiere al nombre identificador del tipo de bundle que se desea agregar en el m\u00F3dulo. Un m\u00F3dulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configurac\u00ED\u00F3n con los procesadores que utiliza y alguna variaci\u00F3n inherita del tipo de bundle agregado.")));
      }
    }
  });
  /****************************************************
  INTERNAL MODULE: ./views/concepts/module/module-intro
  ****************************************************/

  modules.set('./views/concepts/module/module-intro', {
    hash: 2931588705,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleIntro = ModuleIntro;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/ui/link/code");

      var _code3 = require("@beyond/docs/components/next-links/code");

      const exportTpl = `
export /*bundle*/ class Auth {
    //....
}`;

      function ModuleIntro() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "intro"
        }, "Introducci\u00F3n"), React.createElement("p", null, " En ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " los m\u00F3dulos representan la unidad b\u00E1sica de desarrollo y tienen ", React.createElement("strong", null, "caracter\u00EDsticas"), " que es necesario tener presente. Para poder entender bien las diferencias y ventajas del ecosistema de m\u00F3dulos de Beyond, es necesario antes repasar como funcionan los m\u00F3dulos de Javascript y como se integran en el proceso de desarrollo en la actualidad."), React.createElement("p", null, "Un", React.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          target: "_blank"
        }, "m\u00F3dulo javascript"), "hoy es representado por un \u00FAnico archivo, con tareas independientes y un scope propio, Este m\u00F3dulo puede exportar elementos y ser importado por otros m\u00F3dulos que consumen las variables, objetos o funciones que este provee."), React.createElement("p", null, "Los empaquetadores por su parte, suelen utilizar una sintaxis compatible con las imports de ecmascript 6, pero son ellos quienes se encargan de analizar el arbol de dependencias, quitando aquellos elementos que no son utilizados en el codigo y", React.createElement("strong", null, " generando un \u201Cbundle\u201D"), " que es a su vez, un contenedor de todos los m\u00F3dulos utilizados por el equipo de desarrollo."), React.createElement("p", null, "En ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ", el concepto de m\u00F3dulo es un poco m\u00E1s abarcativo y se divide en dos: M\u00F3dulos y M\u00F3dulos Internos. "), React.createElement("h2", {
          id: "internal-modules"
        }, "M\u00F3dulos Internos"), React.createElement("p", null, "Representan el concepto de m\u00F3dulos javascript conocido, con la diferencia de que el programador puede definir si estos quedan disponbiles para ser consumidos desde un m\u00F3dulo externo o no. Esto se logra por medio del comentario m\u00E1gico ", React.createElement("span", {
          className: "inline-code"
        }, "/*bundle*/"), " que se coloca en la exportaci\u00F3n."), React.createElement(_code.Code, {
          language: "typescript"
        }, exportTpl), React.createElement("p", null, "Los m\u00F3dulos internos, pueden ser importados por cualquier otro m\u00F3dulo interno por medio de la ruta relativa del archivo."), React.createElement("h2", {
          id: "modules"
        }, "M\u00F3dulos"), React.createElement("p", null, "Como se coment\u00F3 antes, representan la unidad minima de desarrollo de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " y est\u00E1 compuesto por todos los m\u00F3dulos internos que requiera"), React.createElement("p", null, "Esto permite que el concepto de m\u00F3dulo en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " se acerque m\u00E1s a la definici\u00F3n de un m\u00F3dulo en la inform\u00E1tica general, donde este representa una funcionalidad dentro de un programa o sistema. Aunque los m\u00F3dulos javascript son compatibles con este concepto, en la practica un m\u00F3dulo (bajo e concepto inform\u00E1tico) de un proyecto, aplicaci\u00F3n o libreria contiene todo un conjunto de m\u00F3dulos javascript (m\u00F3dulos internos en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "), en conjunto con el resto de herramientas y tecnolog\u00EDas que se requieran para componerlo, como estilos, imagenes o texto."), React.createElement("p", null, "En otras palabras, en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " es el contenedor de todas las herramientas y tecnolog\u00EDas necesarias para garantizar el funcionamiento completo de una funcionalidadrepresenta una funcionalidad desarrollada y donde el programador tiene la capacidad de definir que desea exportar para que pueda ser consumido de forma externa y que no."), React.createElement("h2", {
          id: "work-in"
        }, "Trabajando con m\u00F3dulos"), React.createElement("p", null, "Los m\u00F3dulos deben estar contenidos en un proyecto y son consumidos por este, pero tambien pueden ser consumidos por otros proyectos que los importen como bibliotecas."), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " gestiona la importaci\u00F3n de m\u00F3dulos a trav\u00E9s de la especificaci\u00F3n ", React.createElement("strong", null, "npm"), " que permite definir la estructura", React.createElement("code", {
          className: "inline-code"
        }, "@scope/nombre-proyecto/nombre-m\u00F3dulo"), ". El ", React.createElement("span", {
          className: "inline-code"
        }, "scope"), " es un valor opcional y en conjunto con el ", React.createElement("span", {
          className: "inline-code"
        }, "nombre del proyecto"), " son propiedades definidas en la configuraci\u00F3n del proyecto y se encuentran en el ", React.createElement(_code2.Link, {
          href: "/project#properties"
        }, "project.json"), "."), React.createElement("p", null, "La definici\u00F3n de nombre de m\u00F3dulos es una caracter\u00EDstica vital en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "ya que ayuda al mantenimiento futuro del proyecto, permitiendo que los m\u00F3dulos y carpetas puedan reestructurarse sin que el comportamiento del mismo sea puesto en risgo a causa de las importaciones."), React.createElement("p", null, "Cuando", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " levanta el entorno de desarrollo, realiza un mapeo de los m\u00F3dulos existentes e interpreta las rutas de cada m\u00F3dulo para poder referenciarlas correctamente cuando estos son importados. Posteriormente, en la fase de despliegue, se encarga de armar la estructura necesaria y convertir las importaciones."), React.createElement("h2", {
          id: "module-identifier"
        }, "Identificador de un m\u00F3dulo"), "El identificador de un m\u00F3dulo es el que se utiliza para importarlo", React.createElement(_code.Code, {
          language: "ts"
        }, `import * as Mod from 'module-identifier'`), React.createElement("p", null, "En ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " los identificadores se definen por medio del identificador del paquete (proyecto) y el nombre del m\u00F3dulo. "), React.createElement("p", null, "Para ejemplificarlo, supongamos se crea un proyecto ", React.createElement("span", {
          className: "inline-code"
        }, "\"project\""), " bajo el scope ", React.createElement("span", {
          className: "inline-code"
        }, "@company"), ", luego agregamos un m\u00F3dulo de nombre ", React.createElement("span", {
          className: "inline-code"
        }, "login"), ", la ruta para importar este m\u00F3dulo ser\u00EDa:"), React.createElement(_code.Code, {
          language: "ts"
        }, `@company/project/login`), React.createElement("p", null, "Ahora bien, los m\u00F3dulos, son contenedores de ", React.createElement("span", {
          className: "inline-code"
        }, "bundles"), " y los bundles, representan el archivo final incluido. Por tanto, para poder hacer una importaci\u00F3n de un", React.createElement("span", {
          className: "inline-code"
        }, "bundle"), ", es necesario especificar el bundle a consumir."), React.createElement("p", null, "Para ejemplificarlo, supongamos que tenemos un bundle", React.createElement("span", {
          className: "inline-code"
        }, "code"), " que disponibiliza un objeto ", React.createElement("span", {
          className: "inline-code"
        }, "Auth"), "adentro del m\u00F3dulo ", React.createElement("span", {
          className: "inline-code"
        }, "login"), " que hemos creado. Nuestra importaci\u00F3n quedar\u00EDa de la siguiente manera:"), React.createElement(_code.Code, {
          language: "ts"
        }, `import {Auth} from '@company/project/login/code'`), React.createElement(_code3.NextLinks, {
          items: [['Configuración de modulos', '/docs/modules/config'], ['Bundles', '/docs/bundles']]
        }));
      }
    }
  });
  /******************************************************
  INTERNAL MODULE: ./views/concepts/projects/project-json
  ******************************************************/

  modules.set('./views/concepts/projects/project-json', {
    hash: 3827378280,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectJson = ProjectJson;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _typeProperty = require("../../type-property");

      function ProjectJson() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "distributions"
        }, "Distribuciones"), React.createElement("h2", {
          id: "properties"
        }, "Propiedades ", React.createElement("span", {
          className: "file__element"
        }, "project.json")), React.createElement("ul", {
          className: "list__elements-doc"
        }, React.createElement("li", null, React.createElement("strong", null, "name"), React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": string Es el nombre para identificar el proyecto, sigue el estandar de npm, por tanto s\u00F3lo puede contener caracteres seguros para urls, sin puntos o guiones bajos."), React.createElement("li", null, React.createElement("strong", null, "scope: "), React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como paquetes npm, en caso de agregarse un scope, este debe ser \u00FAnico y s\u00F3lo puede ser manejado por la organizaci\u00F3n o usuario que lo utiliza. La validaci\u00F3n de unicidad del scope es hecha por npm, s\u00F3lo si el programador intenta publicar su proyecto como paquete."), React.createElement("li", null, React.createElement("strong", null, "title"), React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": Titulo descriptivo del proyecto, no debe poseer m\u00E1s de 100 caracteres."), React.createElement("li", null, React.createElement("strong", null, "description"), React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), ": Espacio para explicar de forma resumida cuales son las caracter\u00EDsticas del proyecto."), React.createElement("li", null, React.createElement("strong", null, "template"), ":", React.createElement(_typeProperty.TypeProperty, {
          type: "EOC",
          href: "/glossary#eoc"
        }), ": Espacio para explicar de forma resumida cuales son las caracter\u00EDsticas del proyecto."), React.createElement("li", null, React.createElement("strong", null, "layout"), ":", React.createElement(_typeProperty.TypeProperty, {
          type: "EOC",
          href: "/glossary#eoc"
        }), ": Espacio para explicar de forma resumida cuales son las caracter\u00EDsticas del proyecto."), React.createElement("li", null, React.createElement("strong", null, "params"), ":", React.createElement(_typeProperty.TypeProperty, {
          type: "EOC",
          href: "/glossary#eoc"
        }), ": Objeto que permite agregar parametros generales que se requieran utilizar en todo el proyecto, tiene la posibilidad de definir valores por entorno. Para entender m\u00E1s, puedes dirigirte a la", React.createElement(_code.Link, {
          href: "/project/params"
        }, "secci\u00F3n Parametros del proyecto.")), React.createElement("li", null, React.createElement("strong", null, "modules"), React.createElement(_typeProperty.TypeProperty, {
          type: "EOC",
          href: "/glossary#eoc"
        }), ": Recibe un objeto con una entrada ", React.createElement("span", {
          className: "inline-code"
        }, "path"), "que permite definir el directorio de los m\u00F3dulos, por defecto es \"module\""), React.createElement("li", null, React.createElement("strong", null, "deployment "), React.createElement(_typeProperty.TypeProperty, {
          type: "EOC",
          href: "/glossary#eoc"
        }), ": Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada deployment"), React.createElement("li", null, React.createElement("strong", null, "Deployment: "), React.createElement(_typeProperty.TypeProperty, {
          type: "EAC",
          href: "/glossary#eac"
        }), "Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son definidas por medio de la entrada ", React.createElement("strong", null, "distributions"), ". Las distribuciones pueden agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender como funcionan pudes dirigirte a la ", React.createElement(_code.Link, {
          href: "/project/distributions"
        }, "Secci\u00F3n de distribuciones"), "."), React.createElement("li", null, React.createElement("strong", null, "libraries "), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "object",
          optional: true
        }), ": Define la importacion de proyectos a ser usados como librerias en el proyecto definido.", React.createElement("ul", null, React.createElement("li", null, "imports: ", React.createElement(_typeProperty.TypeProperty, {
          type: "string",
          optional: true
        }), "Cada entrada representa un proyecto importado, la importaci\u00F3n se hace agregando el scope y nombre del proyecto importado.")))));
      }
    }
  });
  /*********************************************
  INTERNAL MODULE: ./views/concepts/server/index
  *********************************************/

  modules.set('./views/concepts/server/index', {
    hash: 1323402758,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Server = Server;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _typeProperty = require("../../type-property");

      const tpl1 = `{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;

      function Server() {
        return React.createElement(React.Fragment, null, React.createElement("h1", {
          id: "dev-server"
        }, "Servidor de desarrollo"), React.createElement("p", null, "El servidor de desarrollo de ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " se configura por medio de un archivo json de configuraci\u00F3n cuyo nombre debe ser ", React.createElement("code", {
          className: "inline-code"
        }, "beyond.json"), ". Este documento es gestionado de forma autom\u00E1tica por el dashboard de beyond, por tanto no es necesario configurarlo para empezar a trabajar en un proyecto, la presente documentaci\u00F3n es para comprender como hacer configuraciones de forma manual en caso que se desee."), React.createElement("h2", null, React.createElement("code", {
          className: "inline-code"
        }, "beyond.json")), React.createElement(_code.Code, {
          language: "json"
        }, tpl1), React.createElement("h3", null, "Propiedades"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "applications"), React.createElement(_typeProperty.TypeProperty, {
          type: "AOC",
          href: "/aoc"
        }), ": Recibe un arreglo con la lista de proyectos o aplicaciones configuradas para que ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " pueda leearlas y levantarlas. Este archivo, es gestionado por ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " si se hace uso del dashboard."), React.createElement("li", null, React.createElement("strong", null, "bundles"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "object"
        }), ": Permite configurar la inclusi\u00F3n de bundles creados por el programador."), React.createElement("li", null, React.createElement("strong", null, "libraries"), " ", React.createElement(_typeProperty.TypeProperty, {
          type: "AOC",
          href: "/aoc"
        }), ": Arreglo de configuraci\u00F3n de librerias ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " a utilizar.")));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./views/content/content
  ***************************************/

  modules.set('./views/content/content', {
    hash: 3068395046,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Content = Content;

      function Content({
        id
      }) {}
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/content/highlight-code
  **********************************************/

  modules.set('./views/content/highlight-code', {
    hash: 3356208120,
    creator: function (require, exports) {
      // import * as React from 'react';
      // import {
      //     Options, registerLanguages, htmlRender, init, process,
      //     Highlighter, JavaScript, SCSS, Markdown
      // } from "highlight-ts";
      //
      // registerLanguages(JavaScript, SCSS, Markdown)
      //
      //
      // export function HCode({language, code}) {
      //
      //     // @ts-ignore
      //     const [highlighter, setHighlighter] = React.useState<Highlighter>();
      //     React.useEffect(() => {
      //         const options: Options = {classPrefix: ''};
      //         const instance: Highlighter<string> = init(htmlRender, options);
      //         setHighlighter(instance);
      //     }, [])
      //
      //     if (!highlighter) return;
      //     const html = process(highlighter, code, [language]);
      //     return (
      //         <pre>
      //             {html}
      //         </pre>
      //     )
      // }
      "use strict";
    }
  });
  /************************************
  INTERNAL MODULE: ./views/content/note
  ************************************/

  modules.set('./views/content/note', {
    hash: 3233131723,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Note = Note;

      var React = require("react");

      function Note({
        children
      }) {
        return React.createElement("div", {
          className: "block__note"
        }, children);
      }
    }
  });
  /*******************************************
  INTERNAL MODULE: ./views/dashboard/dashboard
  *******************************************/

  modules.set('./views/dashboard/dashboard', {
    hash: 2187614819,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DashboardPage = DashboardPage;

      var React = require("react");

      var _code = require("@beyond/docs/ui/icons/code");

      var _modalImage = require("../modal-image");

      var _beyond = require("../beyond");

      function DashboardPage() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Dashboard"), React.createElement("p", null, "\u00BFUn panel de control para programar? \u00BFEs necesario? ", React.createElement("strong", null, "\u00A1SI!")), React.createElement("p", null, "Pero para profundizar en ello, es necesario tener un poco de contexto."), React.createElement("h3", {
          id: "typescript"
        }, "Typescript"), React.createElement("p", null, "Typescript es un lenguaje que lleg\u00F3 a Javascript y que ha generado opiniones positivas y negativas. Generalmente las positivas est\u00E1n asociadas a la utilidad del tipado de datos y manejo de errores, mientras que las negativas a ", React.createElement("strong", null, "su lentitud en el procesamiento"), ". En este sentido, ", React.createElement(_beyond.BeyondName, null), " busca optimizar el trabajo con typescript haciendo uso de su transpilador y su compilador en simult\u00E1neo para brindar una experiencia m\u00E1s eficiente al desarrollador. Adem\u00E1s, interpreta los errores, analiza las dependencias de un m\u00F3dulo y quienes lo consumen para identificar los posibles errores de c\u00F3digo y notificarlos en tiempo real."), React.createElement("h3", {
          id: "time-dev"
        }, "Tiempo invertido en el desarrollo"), React.createElement("p", null, "Los programadores invertimos mucho tiempo analizando y detectando errores, y el efecto de los cambios aplicados en determinada secci\u00F3n en el resto del c\u00F3digo. Tambien es muy com\u00FAn cometer errores humanos, de typo o de l\u00F3gica. El dashboard tiene como foco colaborar con ello suministrando informaci\u00F3n oportuna en relaci\u00F3n con los errores y warnings de un proyecto, pero va m\u00E1s all\u00E1, tiene la capacidad de evaluar el c\u00F3digo desde la \u00F3ptica de desarrollo en tres niveles distintos:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "M\u00F3dulo en desarrollo"), ": El m\u00F3dulo en el cual se est\u00E1 trabajando"), React.createElement("li", null, React.createElement("strong", null, "Dependencias"), ": Los m\u00F3dulos importados por el m\u00F3dulo en desarrollo."), React.createElement("li", null, React.createElement("strong", null, "Consumidores"), ": Los m\u00F3dulos que consumen el m\u00F3dulo sobre el cual estamos trabajando.")), React.createElement("p", null, "Manejo"), React.createElement("ul", null), React.createElement("h2", {
          id: "functionalities"
        }, "Funcionalidades"), React.createElement("p", null, "El ", React.createElement("span", {
          className: "beyond"
        }, "Dashboard de Beyond "), "suministra al programador las siguientes funcionalidades:"), React.createElement("ul", {
          className: "icon__list"
        }, React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "apps"
        }), React.createElement("span", null, "Generaci\u00F3n de proyectos y m\u00F3dulos.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "apps"
        }), React.createElement("span", null, " Detalle informativo de los proyectos y m\u00F3dulos ")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "apps"
        }), React.createElement("span", null, "Brinda un ecosistema inteligente que colabora con la detecci\u00F3n de errores en los m\u00F3dulos, las dependencias y en los m\u00F3dulos que consumen otros m\u00F3dulos si el c\u00F3digo cambia.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "bell"
        }), React.createElement("span", null, "Detecci\u00F3n de errores de tipado con ", React.createElement("code", {
          className: "inline-code"
        }, "typescript"), ".")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "bell"
        }), React.createElement("span", null, "Detecci\u00F3n de errores de runtime.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "bell"
        }), React.createElement("span", null, "Manejo de errores en real time en procesos ", React.createElement("code", {
          className: "inline-code"
        }, "Node"), "por medio de HMR.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "setting"
        }), React.createElement("span", null, "Configuraci\u00F3n de entornos de desarrollo.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "code"
        }), React.createElement("span", null, "Edici\u00F3n de c\u00F3digo")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "page"
        }), React.createElement("span", null, "Navegaci\u00F3n de proyectos.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "dependency"
        }), React.createElement("span", null, "Manejo de dependencias.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "photoSize"
        }), React.createElement("span", null, "Gesti\u00F3n de archivos est\u00E1ticos y plantilla del proyecto.")), React.createElement("li", null, React.createElement(_code.AppIcon, {
          icon: "compile"
        }), React.createElement("span", null, "Deployment."))), React.createElement("h2", null, "Estructura"), React.createElement("p", null, "El ", React.createElement("span", {
          className: "beyond"
        }, "Dashboard"), " funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "PreAside:"), " Primer panel izquierdo, iconogr\u00E1fico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto"), React.createElement("li", null, React.createElement("strong", null, "Aside:"), " Menu secundario que despliega funcionalidades adicionales asociadas a la opci\u00F3n seleccionada en el preaside."), React.createElement("li", null, React.createElement("strong", null, "Boards"), ": Cada panel abierto en la pantalla principal es denominado board, la lista de aplicaciones es un board, el detalle de la aplicaci\u00F3n o la pantalla de configuraci\u00F3n tambien lo son."), React.createElement("li", null, React.createElement("strong", null, "Panels:"), " Cada divisi\u00F3n de pantalla generada en el workspace")), React.createElement("h2", {
          id: "generate-projects"
        }, "Generaci\u00F3n de proyectos"), React.createElement("p", null, "El formulario para crear proyectos, ofrece m\u00FAltiples posibilidades para crear proyectos en blanco o a partir de una plantilla existente para empezar con el framework o libreria de interfaz de tu preferencia. Puede ser accedido desde el preaside, en la opci\u00F3n con el icono ", React.createElement(_code.AppIcon, {
          icon: "newProject"
        }), " o en el header del listado de aplicaciones en las opciones de la derecha."), React.createElement("p", null, "El formulario luce de la siguiente forma:"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/new-project.png",
          alt: "Beyond's form to create projects"
        }), React.createElement("h2", {
          id: "project-manger"
        }, "Manejo de proyectos"), React.createElement("p", null, "Cada proyecto tiene un panel informativo en el cual se puede visualizar el directorio en el cual se encuentra, el listado de m\u00F3dulos, los errores generales y el estatus de an\u00E1lisis. Asimismo, el board del proyecto ofrece las siguientes acciones:"), React.createElement("ul", null, React.createElement("li", null, "Actualizar dependencias."), React.createElement("li", null, "Validar errores."), React.createElement("li", null, "Compilar proyecto."), React.createElement("li", null, "Acceder al board de un m\u00F3dulo.")));
      }
    }
  });
  /*********************************
  INTERNAL MODULE: ./views/error-404
  *********************************/

  modules.set('./views/error-404', {
    hash: 2553778734,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Error404 = Error404;

      var React = require("react");

      function Error404() {
        return React.createElement(React.Fragment, null, React.createElement("svg", {
          version: "1.1",
          id: "Capa_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 1080 1080"
        }, React.createElement("line", {
          className: "svg_404_st0",
          x1: "132.1",
          y1: "824.46",
          x2: "532.33",
          y2: "824.46"
        }), React.createElement("line", {
          className: "svg_404_st0",
          x1: "688.89",
          y1: "824.46",
          x2: "954.49",
          y2: "824.46"
        }), React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M666.35,740.64c-1.17,0.64-2.38,1.25-3.68,1.81c-0.05,0.81-0.16,1.61-0.37,2.4\r\n\t\t\tc4.83-1.01,10.19-1.58,15.84-1.58c0.26,0,0.52,0.01,0.78,0.01c0.09-0.34,0.17-0.68,0.25-1.03\r\n\t\t\tC674.64,742.12,670.31,741.58,666.35,740.64z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M677.16,646.08c0,0.72-0.07,1.43-0.18,2.13c3.07-0.45,6.23-0.81,9.46-1.08c-3.2-0.46-6.31-1.05-9.32-1.74\r\n\t\t\tC677.13,645.62,677.16,645.85,677.16,646.08z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M810.85,577.99c1.03,0.03,2.06,0.05,3.1,0.05c40.38,0,73.11-21.46,73.11-47.93\r\n\t\t\tc0-25.99-31.57-47.14-70.94-47.89c-2.82-24.45-40.72-43.82-87.08-43.82c-48.19,0-87.26,20.93-87.26,46.74\r\n\t\t\tc0,19.45,22.18,36.11,53.73,43.15c-1.42,1.14-2.58,2.36-3.4,3.67c-34.22,5.46-58.59,19.52-58.59,36.02\r\n\t\t\tc0,7.4,4.92,14.31,13.42,20.18c-8.27,6.24-13.15,13.86-13.15,22.09c0,3.71,1,7.3,2.84,10.69c-2.36-0.19-4.78-0.3-7.24-0.3\r\n\t\t\tc-26.38,0-47.76,11.39-47.76,25.44c0,11.32,13.88,20.91,33.07,24.21c-4.44,4.53-7.12,10.36-7.12,16.71\r\n\t\t\tc0,6.02,2.42,11.55,6.45,15.97c-11.01,4.37-18.24,11.71-18.24,20.03c0,1.35,0.2,2.67,0.56,3.96c-7.23,3.77-11.72,9.03-11.72,14.85\r\n\t\t\tc0,9.25,11.35,17.09,27.03,19.79c-3.63,3.7-5.82,8.47-5.82,13.66c0,4.92,1.98,9.44,5.27,13.05c-9,3.57-14.91,9.57-14.91,16.37\r\n\t\t\tc0,10.42,13.88,18.96,31.51,19.76c-2.67-8.18-7.86-26.27-4.28-33.61c4.69-9.62,8.52-10.76,8.52-10.76s-5.74,13.23,1.42,13.55\r\n\t\t\tc7.16,0.32,4.64-10.91,7.9-19.17c3.25-8.25,15.37-10.75,15.37-10.75s-12.42,17.75-6.22,23.95c1.65,1.65,3.68,2.17,5.79,1.75\r\n\t\t\tl0.07-0.24c0.24-0.77,1-1.19,1.71-0.93c0.2,0.07,0.38,0.2,0.52,0.35c5.08-2.59,9.96-10.24,10.51-20.59\r\n\t\t\tc0.86-16.25-1.47-22.63-1.47-22.63s4.92,11.77,10.17,1.16c0.52-1.05,0.92-2.15,1.22-3.27c-0.26,0-0.52-0.01-0.78-0.01\r\n\t\t\tc-5.65,0-11.01,0.57-15.84,1.58c0.22-0.78,0.33-1.59,0.37-2.4c1.29-0.56,2.51-1.17,3.68-1.81c3.97,0.93,8.29,1.48,12.82,1.61\r\n\t\t\tc2.13-10-3.06-21.56-3.06-21.56s6.96,7.41,10.9,21.35c17.92-1.58,31.62-10.17,31.62-20.53c0-0.17-0.02-0.34-0.03-0.51\r\n\t\t\tc1.19-0.92,2.29-1.89,3.28-2.91c5.28,1.85,11.61,2.94,18.44,2.94c18.37,0,33.26-7.8,33.26-17.41c0-4.18-2.81-8.01-7.5-11.01\r\n\t\t\tc2.5-2.03,4.5-4.18,5.93-6.44c0.84,0.02,1.69,0.04,2.54,0.04c33.01,0,59.77-17.54,59.77-39.18c0-14.72-12.38-27.52-30.69-34.22\r\n\t\t\tc5.72-3.67,9.15-8.35,9.15-13.45c0-5.11-3.44-9.8-9.17-13.47C806.66,583.39,809.1,580.75,810.85,577.99z M628.77,770.22\r\n\t\t\tc-0.5,0.6-1.36,0.64-1.91,0.1l-2.66-2.64c-0.55-0.55-0.59-1.48-0.09-2.08c0.5-0.6,1.36-0.64,1.91-0.1l2.66,2.64\r\n\t\t\tC629.24,768.69,629.28,769.62,628.77,770.22z M656.95,755.95l-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93\r\n\t\t\tc-0.71-0.26-1.09-1.09-0.85-1.86l1.14-3.72c0.24-0.77,1-1.19,1.71-0.93C656.81,754.35,657.19,755.18,656.95,755.95z\r\n\t\t\t M685.15,721.42l-3.5,0.89c-0.73,0.19-1.45-0.31-1.62-1.1c-0.17-0.79,0.28-1.58,1.01-1.77l3.5-0.89c0.73-0.19,1.45,0.31,1.62,1.1\r\n\t\t\tC686.33,720.45,685.88,721.24,685.15,721.42z M680.46,691.06l1.14-3.72c0.24-0.77,1-1.19,1.71-0.93c0.71,0.26,1.09,1.09,0.85,1.86\r\n\t\t\tl-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93C680.6,692.67,680.22,691.83,680.46,691.06z M676.97,648.21c0.11-0.7,0.18-1.41,0.18-2.13\r\n\t\t\tc0-0.23-0.02-0.46-0.04-0.7c3.01,0.69,6.11,1.28,9.32,1.74C683.2,647.4,680.04,647.77,676.97,648.21z M697.53,737.64\r\n\t\t\tc-0.5,0.6-1.36,0.64-1.91,0.1l-2.66-2.64c-0.55-0.55-0.59-1.48-0.09-2.08s1.36-0.64,1.91-0.1l2.66,2.64\r\n\t\t\tC697.99,736.11,698.03,737.04,697.53,737.64z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M687.66,766.34c0.48,0.13,0.88,0.53,1,1.09c0.17,0.79-0.28,1.58-1.01,1.77l-1.25,0.32\r\n\t\t\tc-2.6,5.8-5.64,9.5-3.07,14.7c0.57,1.16,1.2,1.98,1.86,2.52l1.07-3.5c0.24-0.77,1-1.19,1.71-0.93c0.71,0.26,1.09,1.09,0.85,1.86\r\n\t\t\tl-1.05,3.45c2.95-0.15,5.97-3.56,7.4-5.41c0.51-0.73,0.84-1.16,0.84-1.16s-0.31,0.47-0.84,1.16c-2.44,3.49-8.95,14.03-2.84,19.11\r\n\t\t\tc1.3,1.08,2.67,1.67,4.03,1.92c4.88-3.68,7.81-8.39,7.81-13.53c0-4.88-2.64-9.36-7.08-12.95c11.7-3.07,19.61-8.9,19.61-15.58\r\n\t\t\tc0-8.39-12.44-15.43-29.22-17.36c0.56,2.22,1.04,4.58,1.41,7.1C689.84,757.51,689.01,762.41,687.66,766.34z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M679.16,742.25c-0.07,0.35-0.16,0.69-0.25,1.03c2.95,0.03,5.81,0.2,8.56,0.52c-0.15-0.6-0.31-1.19-0.47-1.76\r\n\t\t\tc-1.95,0.17-3.94,0.26-5.97,0.26C680.4,742.3,679.79,742.26,679.16,742.25z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M709.14,797.98c0.02-0.02,0.03-0.03,0.03-0.03S709.16,797.96,709.14,797.98z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M695.16,782.21c0.53-0.69,0.84-1.16,0.84-1.16S695.67,781.47,695.16,782.21z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M679.16,742.25c0.62,0.02,1.24,0.05,1.87,0.05c2.03,0,4.03-0.09,5.97-0.26c-3.94-13.94-10.9-21.35-10.9-21.35\r\n\t\t\tS681.29,732.25,679.16,742.25z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M677.7,746.55c-5.25,10.61-10.17-1.16-10.17-1.16s2.33,6.38,1.47,22.63c-0.55,10.36-5.44,18.01-10.51,20.59\r\n\t\t\tc0.35,0.38,0.5,0.96,0.33,1.5l-1.14,3.72c-0.24,0.77-1,1.19-1.71,0.93c-0.71-0.26-1.09-1.09-0.85-1.86l1.06-3.48\r\n\t\t\tc-2.11,0.42-4.14-0.1-5.79-1.75c-6.2-6.2,6.22-23.95,6.22-23.95s-12.11,2.5-15.37,10.75c-3.25,8.25-0.74,19.49-7.9,19.17\r\n\t\t\tc-7.16-0.32-1.42-13.55-1.42-13.55s-3.83,1.15-8.52,10.76c-3.58,7.33,1.61,25.42,4.28,33.61c0.9,0.04,1.8,0.07,2.72,0.07\r\n\t\t\tc15.38,0,28.38-5.88,32.7-13.97c2.21,0.28,4.49,0.42,6.82,0.42c10.63,0,20.14-3.02,26.41-7.75c-1.37-0.25-2.73-0.84-4.03-1.92\r\n\t\t\tc-6.11-5.08,0.4-15.62,2.84-19.11c-1.43,1.85-4.45,5.26-7.4,5.41l-0.08,0.27c-0.24,0.77-1,1.19-1.71,0.93\r\n\t\t\tc-0.71-0.26-1.09-1.09-0.85-1.86l0.07-0.22c-0.66-0.54-1.29-1.36-1.86-2.52c-2.56-5.21,0.47-8.91,3.07-14.7l-2.25,0.57\r\n\t\t\tc-0.73,0.19-1.45-0.31-1.62-1.1c-0.17-0.79,0.28-1.58,1.01-1.77l3.5-0.89c0.21-0.05,0.43-0.04,0.63,0.01\r\n\t\t\tc1.35-3.94,2.19-8.83,1.23-15.45c-0.36-2.52-0.85-4.88-1.41-7.1c-2.75-0.32-5.62-0.5-8.56-0.52\r\n\t\t\tC678.62,744.4,678.22,745.5,677.7,746.55z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M694.78,732.92c-0.55-0.55-1.4-0.5-1.91,0.1s-0.46,1.53,0.09,2.08l2.66,2.64c0.55,0.55,1.4,0.5,1.91-0.1\r\n\t\t\tc0.5-0.6,0.46-1.53-0.09-2.08L694.78,732.92z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M626.02,765.51c-0.55-0.55-1.4-0.5-1.91,0.1c-0.5,0.6-0.46,1.53,0.09,2.08l2.66,2.64\r\n\t\t\tc0.55,0.55,1.4,0.5,1.91-0.1c0.5-0.6,0.46-1.53-0.09-2.08L626.02,765.51z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M684.54,718.56l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l3.5-0.89\r\n\t\t\tc0.73-0.19,1.18-0.98,1.01-1.77C685.99,718.87,685.26,718.38,684.54,718.56z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M709.36,772.73l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l3.5-0.89\r\n\t\t\tc0.73-0.19,1.18-0.98,1.01-1.77S710.09,772.55,709.36,772.73z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M688.66,767.43c-0.12-0.56-0.52-0.96-1-1.09c-0.39,1.13-0.82,2.18-1.26,3.17l1.25-0.32\r\n\t\t\tC688.37,769.01,688.83,768.22,688.66,767.43z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M687.03,766.34l-3.5,0.89c-0.73,0.19-1.18,0.98-1.01,1.77c0.17,0.79,0.9,1.28,1.62,1.1l2.25-0.57\r\n\t\t\tc0.44-0.99,0.87-2.04,1.26-3.17C687.46,766.29,687.25,766.28,687.03,766.34z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M683.02,691.99l1.14-3.72c0.24-0.77-0.15-1.6-0.85-1.86c-0.71-0.26-1.47,0.16-1.71,0.93l-1.14,3.72\r\n\t\t\tc-0.24,0.77,0.15,1.6,0.85,1.86C682.02,693.18,682.78,692.76,683.02,691.99z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M687.96,782.3c-0.71-0.26-1.47,0.16-1.71,0.93l-1.07,3.5c0.82,0.67,1.7,0.92,2.58,0.88l1.05-3.45\r\n\t\t\tC689.05,783.39,688.67,782.56,687.96,782.3z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M685.19,786.74l-0.07,0.22c-0.24,0.77,0.15,1.6,0.85,1.86c0.71,0.26,1.47-0.16,1.71-0.93l0.08-0.27\r\n\t\t\tC686.88,787.66,686.01,787.41,685.19,786.74z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M656.1,754.09c-0.71-0.26-1.47,0.16-1.71,0.93l-1.14,3.72c-0.24,0.77,0.15,1.6,0.85,1.86\r\n\t\t\tc0.71,0.26,1.47-0.16,1.71-0.93l1.14-3.72C657.19,755.18,656.81,754.35,656.1,754.09z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M657.97,788.26c-0.71-0.26-1.47,0.16-1.71,0.93l-0.07,0.24c0.76-0.15,1.53-0.43,2.3-0.82\r\n\t\t\tC658.34,788.46,658.17,788.33,657.97,788.26z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M655.98,794.76c0.71,0.26,1.47-0.16,1.71-0.93l1.14-3.72c0.17-0.55,0.02-1.12-0.33-1.5\r\n\t\t\tc-0.77,0.39-1.54,0.67-2.3,0.82l-1.06,3.48C654.89,793.67,655.27,794.51,655.98,794.76z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st4",
          d: "M816.12,482.23c-2.82-24.45-40.72-43.82-87.08-43.82c-48.19,0-87.26,20.93-87.26,46.74\r\n\t\t\tc0,19.45,22.18,36.11,53.73,43.15c-1.42,1.14-2.58,2.36-3.4,3.67c-34.22,5.46-58.59,19.52-58.59,36.02c0,1.89,0.33,3.76,0.95,5.58\r\n\t\t\tc8.86-6.69,21.76-10.91,36.13-10.91c6.79,0,13.26,0.95,19.12,2.65c-0.44-1.84-0.68-3.73-0.68-5.65\r\n\t\t\tc0-19.89,24.55-36.02,54.84-36.02c30.29,0,54.84,16.13,54.84,36.02c0,1.56-0.17,3.1-0.46,4.61c8.1,2.42,14.62,7.42,17.96,13.75\r\n\t\t\tc39.32-0.79,70.84-21.92,70.84-47.89C887.06,504.12,855.49,482.98,816.12,482.23z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M737.9,508.62c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C705.7,518.17,720.53,508.62,737.9,508.62z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M796.14,534.31c7.8,0,14.46,4.29,17.12,10.33c0.8-1.81,1.24-3.78,1.24-5.84c0-8.93-8.22-16.17-18.35-16.17\r\n\t\t\tc-10.14,0-18.35,7.24-18.35,16.17c0,2.06,0.44,4.03,1.24,5.84C781.69,538.59,788.34,534.31,796.14,534.31z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M803.62,612.8c4.39-2.82,7.42-6.24,8.59-9.99c-4.72,4.91-11.65,8.4-19.64,9.49\r\n\t\t\tc11.67,8.44,19.4,23.08,19.4,39.73c0,11.19-3.49,21.46-9.32,29.56c18.83-6.6,31.65-19.6,31.65-34.57\r\n\t\t\tC834.31,632.3,821.93,619.49,803.62,612.8z"
        })), React.createElement("path", {
          className: "svg_404_st4",
          d: "M758.84,559.65c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C726.64,569.2,741.47,559.65,758.84,559.65z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M703.93,624.32c17.37,0,32.2,9.55,38.12,23.01c1.78-4.04,2.76-8.42,2.76-13.01c0-19.89-18.3-36.02-40.88-36.02\r\n\t\tc-22.58,0-40.88,16.13-40.88,36.02c0,4.59,0.98,8.97,2.76,13.01C671.73,633.87,686.56,624.32,703.93,624.32z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M730.87,659.27c11.14,0,20.66,6.13,24.46,14.76c1.14-2.59,1.77-5.4,1.77-8.35c0-12.76-11.74-23.11-26.23-23.11\r\n\t\tc-14.49,0-26.23,10.35-26.23,23.11c0,2.94,0.63,5.76,1.77,8.35C710.21,665.4,719.73,659.27,730.87,659.27z"
        })), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "-7.59",
          cy: "1159.91",
          rx: "9.89",
          ry: "4.95"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M603.25,700.5c2-1.83,3.9-3.75,5.72-5.72c32.37-34.97,38.26-86.91,14.55-128.25\r\n\t\tc-29.95-52.2-96.54-70.25-148.75-40.3c-52.2,29.95-70.25,96.54-40.3,148.75c29.95,52.2,96.54,70.25,148.75,40.3\r\n\t\tc7.21-4.15,13.94-9.11,20.04-14.77L603.25,700.5z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M508.19,459.44c16.5-2.03,33.21-1.51,49.55,1.52c-18.33-31.46-38.57-58.36-53.3-70.86\r\n\t\tc-15.05-12.76-22.15-8.67-18.62,10.74C490.72,421.25,498.25,440.95,508.19,459.44z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M359.62,473.65c-15.04-12.75-22.14-8.65-18.61,10.75c3.46,19.04,16.65,49.98,34.72,81.6\r\n\t\tc5.55-15.67,13.46-30.4,23.47-43.67C388.15,504.47,374.85,488.11,359.62,473.65z"
        }), React.createElement("path", {
          className: "svg_404_st5",
          d: "M429.59,491.95c11.23-8.93,23.72-16.15,37.07-21.4l0,0c-26.78-45.2-53.74-83.88-72.19-103.68\r\n\t\tc-20.19-21.66-27.29-17.57-18.61,10.75C383.8,403.5,403.85,446.18,429.59,491.95z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M604.79,702.15l-0.01-0.01c2.04-1.87,3.98-3.83,5.84-5.84c33.03-35.68,39.05-88.69,14.86-130.87\r\n\t\tc-30.56-53.28-98.51-71.69-151.79-41.14c-53.28,30.56-71.69,98.51-41.14,151.79c30.56,53.28,98.51,71.69,151.79,41.14\r\n\t\tC591.7,712.98,598.56,707.92,604.79,702.15z M434.47,674.98c-29.95-52.2-11.91-118.8,40.3-148.75\r\n\t\tc52.2-29.95,118.8-11.91,148.75,40.3c23.71,41.33,17.82,93.27-14.55,128.25c-1.83,1.98-3.72,3.89-5.72,5.72l0.01,0.01\r\n\t\tc-6.1,5.66-12.82,10.62-20.04,14.77C531.02,745.23,464.42,727.19,434.47,674.98z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M590.26,821.92c9.09,0.63,21.22-1.3,25.46,3.12c4.24,4.42,11.52,10.07,11.52,10.07s22.43-13.91,32.13-13.24\r\n\t\tc0.29,0.02,0.6,0.04,0.94,0.06c3.82-5.33,6.87-11.18,8.99-17.41c4.18-11.87,6.08-24.42,5.61-36.99c-0.56-20.41-3.55-40.69-8.9-60.4\r\n\t\tc-8.12,13.02-18.06,24.81-29.52,35.02c1.97,9.93,3.11,20.01,3.41,30.12c0.11,29.31-10.61,42.45-41.32,23.84\r\n\t\tc-9.18-5.66-17.85-12.12-25.91-19.29c-15.24,4.29-31.03,6.31-46.86,6.01c14.85,15.35,31.5,28.83,49.58,40.18\r\n\t\tC581.88,822.24,587.49,821.73,590.26,821.92z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M624.38,723.24c2.54-2.38,4.98-4.83,7.32-7.37c52.09-56.5,48.52-144.54-7.99-196.63\r\n\t\tc-56.5-52.09-144.54-48.52-196.63,7.99c-52.09,56.5-48.52,144.54,7.99,196.63C488.61,773.22,571.16,772.95,624.38,723.24z\r\n\t\t M432.55,676.08c-30.56-53.28-12.14-121.24,41.14-151.79c53.28-30.56,121.24-12.14,151.79,41.14\r\n\t\tc24.19,42.18,18.17,95.19-14.86,130.87c-1.86,2.01-3.8,3.97-5.84,5.84l0.01,0.01c-6.23,5.78-13.09,10.83-20.45,15.07\r\n\t\tC531.06,747.77,463.1,729.35,432.55,676.08z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M626.32,725.35L626.32,725.35c2.6-2.42,5.09-4.93,7.47-7.51c53.17-57.66,49.52-147.5-8.13-200.66\r\n\t\tc-57.66-53.17-147.5-49.52-200.66,8.13c-53.17,57.66-49.52,147.5,8.13,200.66C487.76,776.36,572.01,776.09,626.32,725.35z\r\n\t\t M427.08,527.23c52.09-56.5,140.13-60.08,196.63-7.99c56.5,52.09,60.08,140.13,7.99,196.63c-2.34,2.53-4.78,4.99-7.32,7.37\r\n\t\tc-53.22,49.71-135.77,49.98-189.31,0.62C378.56,671.76,374.99,583.73,427.08,527.23z"
        })), React.createElement("path", {
          className: "svg_404_st6",
          d: "M172.86,958.83c0.11,0.07,0.22,0.14,0.33,0.21c0.12-0.1,0.25-0.2,0.37-0.29\r\n\tC173.33,958.77,173.1,958.8,172.86,958.83z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M810.02,378.52c-6.15-2.4-12.56-3.97-18.97-1.64c-19.15,6.96-12.19,19.15-24.38,24.38s-40.05-22.64-50.5-13.93\r\n\t\tc-10.45,8.71-13.93,22.64-20.89,26.12c-6.96,3.48-20.9-8.71-27.86,0c-6.96,8.71-6.96,8.71-6.96,8.71h201.88"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M921.03,347.38c-11.59-9.82-24.31-17-35.95-15.77c-33.08,3.48-31.34,27.86-43.53,47.01\r\n\t\tc-2.03,3.19-4.25,5.07-6.63,6.03"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M881.67,422.15h120.08c0,0,5.22-19.15-8.71-27.86c-13.93-8.71-17.41,1.74-33.08-1.74\r\n\t\tc0,0-10.66-16.43-25.47-32.25"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M125.86,411.26h230.82c0,0,4.76-17.45-7.93-25.38c-12.69-7.93-15.86,1.59-30.14-1.59\r\n\t\tc0,0-38.07-58.7-68.21-55.52c-4.8,0.51-8.8,1.49-12.16,2.87"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M224.99,342.36c-5.87,8.53-8.13,19.61-14.26,29.25c-11.1,17.45-28.55-7.93-46.01-1.59\r\n\t\tc-17.45,6.35-11.11,17.45-22.21,22.21c-11.1,4.76-36.49-20.62-46.01-12.69c-9.52,7.93-12.69,20.62-19.04,23.8\r\n\t\tc-6.35,3.17-19.04-7.93-25.38,0c-6.35,7.93-6.35,7.93-6.35,7.93h64.46"
        })), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "846.88",
          cy: "462.13",
          rx: "15.3",
          ry: "7.65"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M904.74,534.53c6.63,0,12.01-2.69,12.01-6.01c0-3.32-5.38-6.01-12.01-6.01c-6.63,0-12.01,2.69-12.01,6.01\r\n\tC892.73,531.84,898.11,534.53,904.74,534.53z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st6",
          d: "M122.43,697.13v-26.67L258.11,482.6h42.13v184h38.65v30.54h-38.65v62.23h-34.79v-62.23H122.43z M267,519.32\r\n\t\tL163.02,666.6H267V519.32z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st6",
          d: "M714.74,697.13v-26.67L850.42,482.6h42.13v184h38.65v30.54h-38.65v62.23h-34.79v-62.23H714.74z M859.31,519.32\r\n\t\tL755.33,666.6h103.98V519.32z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st0",
          d: "M489.26,198.52c-8.35-2.38-16.9-3.16-25.45-0.05c-34.19,12.43-21.76,34.19-43.52,43.52\r\n\t\tc-21.76,9.33-71.5-40.41-90.15-24.87c-18.65,15.54-24.87,40.41-37.3,46.63c-12.43,6.22-37.3-15.54-49.74,0\r\n\t\tc-12.43,15.54-12.43,15.54-12.43,15.54h367.18"
        }), React.createElement("path", {
          className: "svg_404_st0",
          d: "M619.14,279.29h220.79c0,0,9.33-34.19-15.54-49.74c-24.87-15.54-31.09,3.11-59.06-3.11\r\n\t\tc0,0-74.6-115.01-133.67-108.8c-59.06,6.22-55.95,49.74-77.71,83.93c-12.04,18.92-27.89,12.14-45.44,4.42"
        })), React.createElement("path", {
          className: "svg_404_st6",
          d: "M684.3,824.74c-0.34-0.05-0.65-0.1-0.93-0.14c-8.88-1.41-29.67,8.62-32.77,10.14\r\n\tc-0.57,1.36-1.46,2.63-2.63,3.78c7.79,0.79,15.82,0.28,22.99-3.05c2.82-1.32,5.45-3.01,7.83-5.03l-0.03,0.05\r\n\tC680.71,828.69,682.56,826.76,684.3,824.74z"
        }), React.createElement("path", {
          className: "svg_404_st6",
          d: "M618.69,841.12c0,0-8.01-4.56-12.84-8.32c-4.83-3.77-16.56-0.12-25.65,0.56c-2.66,0.2-7.85,1.42-13.86,3.04\r\n\tc-0.11,0.11-0.22,0.23-0.32,0.34c0.46,0.21,0.92,0.43,1.38,0.63c11.51,5.07,23.87,7.93,36.44,8.43c4.33,0.07,8.93-0.08,13.51-0.68\r\n\tc0.88-1.39,1.45-2.83,1.69-4.29C618.82,841.02,618.69,841.12,618.69,841.12z"
        }), React.createElement("g", null, React.createElement("path", {
          className: "svg_404_st1",
          d: "M526.27,768.72c-0.2-0.72-0.31-1.47-0.31-2.22c0-0.55,0.06-1.09,0.17-1.63c-1.39,0.44-2.86,0.8-4.39,1.1\r\n\t\tc-0.12,0.56-0.25,1.22-0.38,1.98C523.05,768.15,524.7,768.4,526.27,768.72z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M563.88,800.56c0.12,0.05,0.23,0.1,0.34,0.14c-0.05-0.13-0.1-0.26-0.14-0.38\r\n\t\tC564.01,800.4,563.95,800.48,563.88,800.56z"
        }), React.createElement("path", {
          className: "svg_404_st1",
          d: "M513.1,767.58c0.5-0.01,1.01-0.02,1.52-0.02c1.54,0,3.05,0.08,4.52,0.19c0.58-0.47,1.1-1.03,1.54-1.58\r\n\t\tc-2.59,0.44-5.33,0.69-8.19,0.69c-0.03,0-0.06,0-0.09,0C512.65,767.13,512.87,767.37,513.1,767.58z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M574.74,813.76c0.06-0.4,0.09-0.81,0.09-1.21c0-3.42-2.05-6.56-5.47-9.04c1.08,1.4,2.26,3.15,3.49,5.35\r\n\t\tC573.85,810.65,574.44,812.28,574.74,813.76z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M513.1,767.58c2.28,2.14,4.4,1.51,6.05,0.17c-1.48-0.11-2.98-0.19-4.52-0.19\r\n\t\tC514.11,767.57,513.61,767.57,513.1,767.58z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M498.13,802.17c-0.27-0.77,0.17-1.6,0.98-1.86c0.81-0.26,1.68,0.16,1.95,0.93l1.22,3.5\r\n\t\tc0.76-0.54,1.48-1.36,2.13-2.52c2.93-5.21-0.54-8.91-3.51-14.7l-1.43-0.32c-0.83-0.19-1.34-0.98-1.15-1.77\r\n\t\tc0.14-0.56,0.59-0.96,1.14-1.09c-1.45-3.69-2.37-8.24-1.57-14.25c-7.03,2.38-11.6,6.23-11.6,10.57c0,4.9,5.81,9.16,14.41,11.41\r\n\t\tc-3.26,2.63-5.2,5.92-5.2,9.49c0,1.01,0.16,2,0.46,2.96c1.09,0.61,2.24,1.04,3.38,1.09L498.13,802.17z"
        }), React.createElement("path", {
          className: "svg_404_st2",
          d: "M583.34,766.5c0-8.41-12.84-15.23-28.69-15.23c-5.38,0-10.42,0.79-14.72,2.16c0.13-0.59,0.2-1.19,0.2-1.8\r\n\t\tc0-5.28-4.88-9.94-12.29-12.67c14.66-4.12,24.33-11.18,24.33-19.21c0-11.18-18.76-20.5-43.64-22.58\r\n\t\tc22.29-3.22,38.68-14.09,38.68-27c0-15.45-23.47-27.98-52.42-27.98c-27.85,0-50.61,11.59-52.31,26.23\r\n\t\tc-23.65,0.45-42.61,13.11-42.61,28.67c0,15.84,19.66,28.69,43.92,28.69c0.63,0,1.25-0.01,1.86-0.03c1.05,1.65,2.52,3.23,4.36,4.72\r\n\t\tc-3.44,2.2-5.51,5-5.51,8.06c0,7.04,10.94,12.75,24.44,12.75c6.53,0,12.46-1.34,16.84-3.52c-0.59,1.24-0.9,2.53-0.9,3.87\r\n\t\tc0,5.68,5.64,10.62,13.99,13.24c4-17.05,13.8-26.18,13.8-26.18s-7.82,15.25-1.82,25.86c0.53,0.94,1.06,1.69,1.58,2.31\r\n\t\tc0.03,0,0.06,0,0.09,0c2.85,0,5.6-0.25,8.19-0.69c1.11-1.39,1.77-2.77,1.77-2.77s-0.34,0.81-0.73,2.58c1.53-0.3,3-0.67,4.39-1.1\r\n\t\tc-0.11,0.54-0.17,1.08-0.17,1.63c0,0.75,0.11,1.5,0.31,2.22c-1.56-0.33-3.21-0.58-4.91-0.77c-0.59,3.58-1.1,9.43-0.58,18.07\r\n\t\tc0.63,10.36,6.21,18.01,12.01,20.59c0.16-0.15,0.36-0.28,0.59-0.35c0.81-0.26,1.68,0.16,1.95,0.93l0.08,0.24\r\n\t\tc2.41,0.42,4.73-0.1,6.61-1.75c7.08-6.2-7.11-23.95-7.11-23.95s13.84,2.5,17.56,10.75c3.72,8.25,0.84,19.49,9.02,19.17\r\n\t\tc5.85-0.23,4.16-7.07,2.72-10.94c-0.12-0.05-0.23-0.1-0.34-0.14c0.07-0.08,0.13-0.16,0.2-0.24c-0.51-1.33-0.96-2.23-0.96-2.23\r\n\t\ts0.71,0.2,1.91,1.04c1.72-2.37,2.73-5.15,2.73-8.13c0-0.8-0.09-1.59-0.23-2.36c-0.29-0.07-0.57-0.19-0.79-0.41\r\n\t\tc-0.57-0.6-0.53-1.52,0.09-2.07c-0.73-1.91-1.87-3.66-3.36-5.16C575,779.02,583.34,773.28,583.34,766.5z M493.4,753.1l-3.04,2.64\r\n\t\tc-0.63,0.55-1.61,0.5-2.18-0.1c-0.57-0.6-0.53-1.53,0.1-2.08l3.04-2.64c0.63-0.55,1.61-0.5,2.18,0.1\r\n\t\tC494.07,751.63,494.03,752.55,493.4,753.1z M504.44,704.42c0.81-0.26,1.68,0.16,1.95,0.93l1.3,3.72c0.27,0.77-0.17,1.6-0.98,1.86\r\n\t\tc-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72C503.2,705.51,503.63,704.68,504.44,704.42z M508.18,739.22\r\n\t\tc-0.19,0.79-1.02,1.28-1.85,1.1l-4-0.89c-0.83-0.19-1.34-0.98-1.15-1.77c0.19-0.79,1.02-1.28,1.85-1.1l4,0.89\r\n\t\tC507.86,737.64,508.37,738.43,508.18,739.22z M537.79,778.6c-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72\r\n\t\tc-0.27-0.77,0.17-1.6,0.98-1.86c0.81-0.26,1.68,0.16,1.95,0.93l1.3,3.72C539.03,777.51,538.6,778.35,537.79,778.6z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M490.88,800.21c-0.58-0.73-0.97-1.16-0.97-1.16S490.28,799.52,490.88,800.21z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M474.92,815.98c-0.02-0.02-0.04-0.03-0.04-0.03S474.89,815.96,474.92,815.98z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M512.42,766.86c-4.93-0.01-9.55-0.73-13.55-1.99c-0.3,1.3-0.58,2.64-0.81,4.03c-0.07,0.41-0.12,0.8-0.17,1.2\r\n\t\tc4.31-1.46,9.54-2.37,15.22-2.51C512.87,767.37,512.65,767.13,512.42,766.86z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M564.22,800.7c1.93,0.79,3.67,1.73,5.14,2.8c-1.75-2.26-3.25-3.6-4.34-4.37c-0.3,0.41-0.61,0.81-0.95,1.19\r\n\t\tC564.13,800.45,564.17,800.57,564.22,800.7z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M519.15,767.75c0.74,0.06,1.48,0.12,2.21,0.2c0.13-0.76,0.25-1.41,0.38-1.98c-0.34,0.07-0.69,0.13-1.04,0.19\r\n\t\tC520.24,766.72,519.72,767.28,519.15,767.75z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M561.5,811.64c-8.18,0.32-5.3-10.91-9.02-19.17c-3.72-8.25-17.56-10.75-17.56-10.75s14.19,17.75,7.11,23.95\r\n\t\tc-1.89,1.65-4.21,2.17-6.61,1.75l1.21,3.48c0.27,0.77-0.17,1.6-0.98,1.86c-0.81,0.26-1.68-0.16-1.95-0.93l-1.3-3.72\r\n\t\tc-0.19-0.55-0.02-1.12,0.38-1.5c-5.8-2.59-11.38-10.24-12.01-20.59c-0.52-8.64-0.02-14.48,0.58-18.07\r\n\t\tc-0.72-0.08-1.46-0.15-2.21-0.2c-1.64,1.35-3.76,1.98-6.05-0.17c-5.68,0.14-10.91,1.05-15.22,2.51c-0.8,6.01,0.12,10.56,1.57,14.25\r\n\t\tc0.23-0.05,0.47-0.06,0.71-0.01l4,0.89c0.83,0.19,1.34,0.98,1.15,1.77c-0.19,0.79-1.02,1.28-1.85,1.1l-2.57-0.57\r\n\t\tc2.97,5.8,6.44,9.5,3.51,14.7c-0.65,1.16-1.37,1.98-2.13,2.52l0.08,0.22c0.27,0.77-0.17,1.6-0.98,1.86\r\n\t\tc-0.81,0.26-1.68-0.16-1.95-0.93l-0.09-0.27c-1.14-0.05-2.29-0.48-3.38-1.09c2.23,7.19,12.43,12.63,24.69,12.63\r\n\t\tc1.72,0,3.39-0.11,5.01-0.31c3.17,5.92,12.73,10.23,24.03,10.23c13.18,0,23.98-5.86,25.05-13.31c-0.3-1.48-0.89-3.12-1.89-4.9\r\n\t\tc-1.23-2.21-2.4-3.95-3.49-5.35c-1.48-1.07-3.21-2.01-5.14-2.8C565.66,804.58,567.36,811.42,561.5,811.64z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M564.08,800.32c0.34-0.38,0.65-0.78,0.95-1.19c-1.19-0.84-1.91-1.04-1.91-1.04S563.57,798.99,564.08,800.32z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M522.46,763.39c0,0-0.66,1.38-1.77,2.77c0.35-0.06,0.7-0.12,1.04-0.19\r\n\t\tC522.12,764.21,522.46,763.39,522.46,763.39z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M510.84,764.55c-6-10.61,1.82-25.86,1.82-25.86s-9.8,9.13-13.8,26.18c4,1.25,8.62,1.98,13.55,1.99\r\n\t\tC511.9,766.24,511.37,765.49,510.84,764.55z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M491.32,750.93l-3.04,2.64c-0.63,0.55-0.68,1.48-0.1,2.08c0.57,0.6,1.55,0.64,2.18,0.1l3.04-2.64\r\n\t\tc0.63-0.55,0.68-1.48,0.1-2.08C492.93,750.43,491.95,750.38,491.32,750.93z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M568.92,788.32l3.04-2.64c0.63-0.55,0.68-1.48,0.1-2.08c-0.57-0.6-1.55-0.64-2.18-0.1l-3.04,2.64\r\n\t\tc0,0-0.01,0.01-0.01,0.01c0.31,0.8,0.54,1.63,0.7,2.48C568.01,788.75,568.53,788.66,568.92,788.32z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M566.74,788.22c0.22,0.23,0.5,0.35,0.79,0.41c-0.15-0.85-0.39-1.68-0.7-2.48\r\n\t\tC566.21,786.71,566.17,787.63,566.74,788.22z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M507.03,737.46l-4-0.89c-0.83-0.19-1.66,0.31-1.85,1.1c-0.19,0.79,0.32,1.58,1.15,1.77l4,0.89\r\n\t\tc0.83,0.19,1.66-0.31,1.85-1.1S507.86,737.64,507.03,737.46z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M473.96,793.6l4,0.89c0.83,0.19,1.66-0.31,1.85-1.1c0.19-0.79-0.32-1.58-1.15-1.77l-4-0.89\r\n\t\tc-0.83-0.19-1.66,0.31-1.85,1.1S473.13,793.41,473.96,793.6z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M498.32,785.43c-0.19,0.79,0.32,1.58,1.15,1.77l1.43,0.32c-0.51-0.99-1-2.04-1.44-3.17\r\n\t\tC498.91,784.48,498.46,784.88,498.32,785.43z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M503.47,788.09c0.83,0.19,1.66-0.31,1.85-1.1c0.19-0.79-0.32-1.58-1.15-1.77l-4-0.89\r\n\t\tc-0.24-0.05-0.49-0.04-0.71,0.01c0.44,1.13,0.93,2.18,1.44,3.17L503.47,788.09z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M504.76,709.99c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-1.3-3.72\r\n\t\tc-0.27-0.77-1.14-1.19-1.95-0.93c-0.81,0.26-1.25,1.09-0.98,1.86L504.76,709.99z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M499.11,800.31c-0.81,0.26-1.25,1.09-0.98,1.86l1.2,3.45c1.01,0.04,2.01-0.21,2.94-0.88l-1.22-3.5\r\n\t\tC500.79,800.47,499.92,800.05,499.11,800.31z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M499.34,805.62l0.09,0.27c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-0.08-0.22\r\n\t\tC501.34,805.41,500.34,805.66,499.34,805.62z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M537.47,773.03c-0.27-0.77-1.14-1.19-1.95-0.93c-0.81,0.26-1.25,1.09-0.98,1.86l1.3,3.72\r\n\t\tc0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86L537.47,773.03z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M535.33,807.19c-0.27-0.77-1.14-1.19-1.95-0.93c-0.23,0.07-0.43,0.2-0.59,0.35c0.88,0.39,1.76,0.67,2.63,0.82\r\n\t\tL535.33,807.19z"
        }), React.createElement("path", {
          className: "svg_404_st3",
          d: "M532.41,808.12l1.3,3.72c0.27,0.77,1.14,1.19,1.95,0.93c0.81-0.26,1.25-1.09,0.98-1.86l-1.21-3.48\r\n\t\tc-0.87-0.15-1.75-0.43-2.63-0.82C532.39,806.99,532.22,807.57,532.41,808.12z"
        }), React.createElement("ellipse", {
          className: "svg_404_st4",
          cx: "482.04",
          cy: "616.33",
          rx: "23.38",
          ry: "11.69"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M438,608.39c-6.27,0-11.36-2.54-11.36-5.68c0-3.14,5.09-5.68,11.36-5.68c6.27,0,11.36,2.54,11.36,5.68\r\n\t\tC449.36,605.85,444.27,608.39,438,608.39z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M438.35,654.64c-6.27,0-11.36-2.54-11.36-5.68c0-3.14,5.09-5.68,11.36-5.68s11.36,2.54,11.36,5.68\r\n\t\tC449.71,652.1,444.63,654.64,438.35,654.64z"
        }), React.createElement("path", {
          className: "svg_404_st4",
          d: "M449.09,670.58c6.73,0,13.06,1.49,18.6,4.1c2.3-14.78,16.73-26.17,34.2-26.17c19.07,0,34.52,13.57,34.52,30.31\r\n\t\tc0,3.86-0.83,7.55-2.33,10.95c-5-11.33-17.52-19.37-32.19-19.37c-10.09,0-19.17,3.81-25.48,9.87c7.41,6.28,12.03,15.09,12.03,24.85\r\n\t\tc0,4.4-0.95,8.6-2.66,12.47c-5.7-12.91-19.97-22.07-36.69-22.07c-16.72,0-30.99,9.16-36.69,22.07c-1.71-3.87-2.66-8.07-2.66-12.47\r\n\t\tC409.74,686.05,427.36,670.58,449.09,670.58z"
        }))));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/error
  *****************************/

  modules.set('./views/error', {
    hash: 1897032991,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ErrorPage = ErrorPage;

      var React = require("react");

      function ErrorPage() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Error"), React.createElement("p", null, "Contenido no conseguido..."));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./views/example
  *******************************/

  modules.set('./views/example', {
    hash: 2531964526,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Example = Example;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      const exampleCode = `
function A() {
console.log(1, 'ejemplo');
}
`;

      function Example() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Un framework universal"), React.createElement("p", null, "La tecnolog\u00EDa web se encuentra presente hoy en todas las \u00E1reas. Sin embargo, los. Programadores que usan estas tecnolog\u00EDas no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a la gran v"), React.createElement("h2", null, "Subtitulo"), React.createElement("p", null, "Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el codigo que realiza."), React.createElement("h3", null, "Subtitulo menor"), React.createElement("p", null, "No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas deber\u00EDan permitirnos crear c\u00F3digo universal, entiendo por universal, no solo hablar de el frontend y el backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier paquete npm."), React.createElement(_code.Code, {
          language: "js"
        }, exampleCode), React.createElement("p", null, "La tecnolog\u00EDa web se encuentra presente hoy en todas las \u00E1reas. Sin embargo, los. Programadores que usan estas tecnolog\u00EDas no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a la gran v"), React.createElement("h2", null, "Subtitulo"), React.createElement("p", null, "Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el codigo que realiza."), React.createElement("h3", null, "Subtitulo menor"), React.createElement("p", null, "No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas deber\u00EDan permitirnos crear c\u00F3digo universal, entiendo por universal, no solo hablar de el frontend y el backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier paquete npm."), React.createElement(_code.Code, {
          language: "js"
        }, exampleCode));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/intro
  *****************************/

  modules.set('./views/intro', {
    hash: 2953808781,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.__Intro = __Intro;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/ui/image/code");

      var _beyond = require("./beyond");

      function __Intro() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "intro"
        }, "Bienvenido"), React.createElement("p", null, "Bienvenido a la documentaci\u00F3n de ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), ". En este documento se realiza un repaso sobre que es ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " y cuales son sus caracter\u00EDsticas princiales. Si deseas ver c\u00F3mo funciona en cuesti\u00F3n de minutos, te recomendamos realices nuestro ", React.createElement(_code.Link, {
          href: "/tutorial/web"
        }, "tutorial b\u00E1sico.")), React.createElement("h3", {
          id: "what-is"
        }, " \u00BFQu\u00E9 es ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "?"), React.createElement("p", null, "Es un ", React.createElement("strong", null, "meta-framework"), " para trabajar con proyectos ", React.createElement("span", {
          className: "inline"
        }, "JavaScript"), " de forma universal, esto quiere decir que se puede usar para realizar proyectos en cualquier entorno en el que ", React.createElement("span", {
          className: "accent"
        }, "Javascript"), " se encuentra disponible; a saber: Sistemas operativos, servicios o backend con Node, soluciones web y aplicaciones m\u00F3viles."), React.createElement(_code2.BeyondImage, {
          src: "/images/tutorials/beyond-environments.png",
          alt: "Beyond environments"
        }), React.createElement("h3", null, "\u00BFPor qu\u00E9 usar ", React.createElement(_beyond.BeyondName, null), "?"), React.createElement("p", null, "El desarrollo con tecnolog\u00EDas web es bastante complejo, por diversos motivos que, podriamos sintetizar a grandes rasgos en tres items generales:"), React.createElement("ul", null, React.createElement("li", null, "Javascript es un lenguaje sofisticado y en constante evoluci\u00F3n."), React.createElement("li", null, "Si bien Javascript es un lenguaje universal, las APIs provistas para los entornos en donde puede ser usado son diferentes entre s\u00ED."), React.createElement("li", null, "Existe un gran n\u00FAmero de librerias y frameworks para cada entorno donde el lenguaje existe, en muchas ocasiones incompatibles entre s\u00ED. Esto ha logrado que la comunidad de desarrollo web se mantenga separada en burbujas de stacks tecnol\u00F3gicos que, en muchas ocasiones ", React.createElement("i", null, "complican"), " la posibilidad de un programador de aprender nuevas herramientas.")), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " tiene c\u00F3mo foco ofrecer una estructura base y estandarizada que permita trabajar en cualquier ecosistema en el que ", React.createElement("strong", null, "JavaScript"), " se encuentre disponible, simplificando el proceso y garantizando la compatibilidad entre entornos. Asimismo, es compatible con la mayoria de frameworks de vista y suministra medios para integrar nuevas librerias."));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./views/modal-image
  ***********************************/

  modules.set('./views/modal-image', {
    hash: 2633656181,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModalImage = ModalImage;

      var React = require("react");

      var _code = require("@beyond/ui/image/code");

      var _code2 = require("@beyond/ui/modal/code");

      function ModalImage({
        src,
        alt
      }) {
        const [open, toggle] = React.useState(false);
        return React.createElement(React.Fragment, null, React.createElement(_code.BeyondImage, {
          alt: alt,
          src: src,
          onClick: () => {
            toggle(!open);
          }
        }), open && React.createElement(_code2.BeyondModal, {
          className: "image__modal",
          show: true
        }, React.createElement(_code.BeyondImage, {
          alt: alt,
          src: src
        })));
      }
    }
  });
  /****************************
  INTERNAL MODULE: ./views/page
  ****************************/

  modules.set('./views/page', {
    hash: 1672448433,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");
      /*bundle*/


      function Page() {
        return React.createElement(React.Fragment, null, "Page");
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/right-aside/index
  *****************************************/

  modules.set('./views/right-aside/index', {
    hash: 438530438,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RightAside = void 0;

      var React = require("react");

      var _item = require("./item");
      /*bundle*/


      const RightAside = React.memo(({
        container,
        titles
      }) => {
        const output = titles.map((item, i) => {
          return React.createElement(_item.RightAsideItem, {
            key: `${item.id}.${i}`,
            item: item,
            container: container
          });
        });
        const ref = React.useRef(null);
        React.useEffect(() => {
          const items = Array.from(ref.current.querySelectorAll('li'));

          const callback = entries => {
            const check = item => {
              const {
                top
              } = item.boundingClientRect;

              if (top < 500) {
                const {
                  target
                } = item;
                const listItem = items.find(item => item.dataset.id === target.id);
                const active = items.find(item => item.classList.contains('item--active'));
                if (active) active.classList.remove('item--active');
                listItem.classList.add('item--active');
              }
            };

            entries.forEach(check);
          };

          const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '-50% 0% -50% 0%',
            threshold: 0
          });
          titles.forEach(item => observer.observe(item));
        });
        return React.createElement("aside", {
          className: "docs__aside-navbar",
          ref: ref
        }, React.createElement("div", {
          className: "aside__container"
        }, React.createElement("h4", null, "En esta p\u00E1gina"), React.createElement("ol", null, output)));
      });
      exports.RightAside = RightAside;
    }
  });
  /****************************************
  INTERNAL MODULE: ./views/right-aside/item
  ****************************************/

  modules.set('./views/right-aside/item', {
    hash: 231098808,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RightAsideItem = RightAsideItem;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function RightAsideItem({
        item,
        container
      }) {
        const onClick = event => {
          event.preventDefault();
          const target = container.getElementById(item.id);

          if (!target) {
            console.log('no se consigue...', item.id);
            return;
          }

          const body = document.querySelector('body');
          body.scroll({
            top: target.offsetTop,
            left: 0,
            behavior: "smooth"
          });
        };

        return React.createElement("li", {
          onClick: onClick,
          key: item.innerText,
          "data-id": item.id
        }, React.createElement(_code.Link, {
          href: `#${item.id}`
        }, item.innerText));
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./views/ssr
  ***************************/

  modules.set('./views/ssr', {
    hash: 3280070000,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SSRPage = SSRPage;

      var React = require("react");

      function SSRPage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement("h1", null, "Objeto History"), React.createElement("ul", null, React.createElement("li", null, "current: url de navegacion actual"), React.createElement("li", null, "initial: Hace referencia al indice asociado al historico de la api web del navegador sobre el cual comienza la navegacion adentro del proyecto beyond. beyond hace uso del session_storage", React.createElement("ul", null, React.createElement("li", null, "__beyond_navigation_position"), React.createElement("li", null, "__beyond_navigation_records"))), React.createElement("li", null, "History state", React.createElement("ul", null, React.createElement("li", null, "__beyond_navigation_position: posicion del stado del navegador que registra el indice del elemento en el cual la navegaci\u00F3n queda registrada en el history de beyond."))), React.createElement("li", null, "position: HistoryPosition:"), React.createElement("li", null, "value: posicion en la cual se encuentra la navegaci\u00F3n adentro de los registros de beyond."), React.createElement("li", null, "following: proxima navegaci\u00F3n dentro del historico de beyond."), React.createElement("li", null, "previous: navegacion previa adentro de los registros de beyond.")));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./views/starting/before
  ***************************************/

  modules.set('./views/starting/before', {
    hash: 3019937656,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Before = Before;

      var React = require("react");

      function Before() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "before"
        }, "Antes de empezar"), React.createElement("p", null, "Este tutorial busca principalmente poder mostrar todo el flujo de desarrollo con beyond y mostrar de manera clara los beneficios que permite. Esta creado para las personas que deseen aprender mientras practican, por lo que no se adentrar\u00E1 a fondo en todos los conceptos que definen la estructura de beyond pero que seguro podr\u00E1s conseguir en la documentaci\u00F3n cuando requieras."), React.createElement("p", null, "El tutorial se divide en las siguientes partes:"), React.createElement("ul", null, React.createElement("li", null, "El dashboard."), React.createElement("li", null, "Creaci\u00F3n de primer m\u00F3dulo."), React.createElement("li", null, "Integraci\u00F3n con backend")), React.createElement("p", null, "Es ideal lo completes para que veas como en poco tiempo logras integrar back y front utilizando la misma estructura, utilizando javascript de forma universal."));
      }
    }
  });
  /****************************************
  INTERNAL MODULE: ./views/starting/project
  ****************************************/

  modules.set('./views/starting/project', {
    hash: 587958769,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Project = Project;

      var React = require("react");

      function Project() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "create-project"
        }, "Crear un proyecto"), React.createElement("div", {
          className: "block__note"
        }, "Nota: Este tutorial propone hacer uso del dashboard de beyond, que es una herramienta muy potente y que se encuentra en version beta. Si deseas crear un proyecto de manera manual, puedes seguir este tutorial"), React.createElement("h3", null, "El dashboard"), React.createElement("p", null, " El dashboard se levanta por defecto en el puerto 4000, para acceder a el debes ingresar a localhost:4000. Beyond analiza el directorio en donde ha sido ejecutado para validar si existe alg\u00FAn proyecto. Si existen proyectos beyond en el directorio, el dashboard mostrar\u00E1 una lista, como es primera vez que lo usamos, aparecer\u00E1 vacio brindando opci\u00F3n para crear un proyecto nuevo."), React.createElement("div", {
          className: "block__note info"
        }, "El dashboard es uno de los features m\u00E1s potentes de beyond y en el tutorial s\u00F3lo se hace un repaso superficial, si quieres saber un poco m\u00E1s al respecto, puedes leer todos los detalles en", React.createElement("a", {
          href: "#"
        }, "su secci\u00F3n dentro de la documentaci\u00F3n")));
      }
    }
  });
  /*****************************************
  INTERNAL MODULE: ./views/starting/starting
  *****************************************/

  modules.set('./views/starting/starting', {
    hash: 4143092697,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Starting = Starting;

      var React = require("react");

      var _before = require("./before");

      var _project = require("./project");

      function Starting() {
        return React.createElement(React.Fragment, null, React.createElement("section", {
          className: "content",
          id: "beyond"
        }, React.createElement("h2", {
          id: "que-es-beyond"
        }, "\u00BFQue es BeyondJS?"), React.createElement("p", null, "BeyondJS es un meta-framework para el desarrollo de aplicaciones con tecnolog\u00EDa web, focalizado en permitir de una manera sencilla la posibilidad de utilizar Javascript como un lenguaje universal, que es en definitiva, su comportamiento por naturaleza pero que, debido a la diversidad de usos y herramientas existentes no existe hoy una forma sencilla de crear proyectos que si sean universales."), React.createElement("h3", null, "Goals"), React.createElement("ul", null, React.createElement("li", null, "Crear proyectos compatibles con cualquier entorno, utilizando el mismo criterio de desarrollo."), React.createElement("li", null, "Permitir que los paquetes, proyectos, librerias puedan ser consumidos de forma directa desde cualquier otro proyecto una vez realizada su publicaci\u00F3n, sin necesidad de pasar por alg\u00FAn proceso de transpilaci\u00F3n."), React.createElement("li", null, "Foco en la productividad: Integrar todas las herramientas necesarias para el desarrollo de manera eficiente. (Desarrollar)"))), React.createElement(_before.Before, null), React.createElement(_project.Project, null));
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./views/tbd
  ***************************/

  modules.set('./views/tbd', {
    hash: 830915190,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TBD = TBD;

      var React = require("react");

      function TBD() {
        return React.createElement("div", {
          className: "content svg--content"
        }, React.createElement("svg", {
          className: "tbd_content",
          version: "1.1",
          viewBox: "0 0 1210.42 535.25"
        }, React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M1179.17,397.09c0-0.67-36.3-1.29-98.08-1.8c-0.43,0.9-2.43,1.15-3.28,1.77c-0.68,0.49-2.16,1.37-2.86,1.77\r\n\tC1139.17,398.31,1179.17,397.77,1179.17,397.09z"
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M79.19,395.79c-30.8,0.39-47.96,0.83-47.96,1.29c0,0.48,18.27,0.93,50.94,1.33\r\n\tC81.15,397.61,80.15,396.74,79.19,395.79z"
        }), React.createElement("g", {
          id: "left-boxes"
        }, React.createElement("polygon", {
          className: "svg_tbd_st1",
          points: "131.09,283.54 112.34,291.17 112.34,313.13 93.46,304.66 93.46,281.93 110.8,276.21 "
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M273.19,267.15c0-0.05-0.01-0.1-0.01-0.15c0-0.05,0-0.1-0.01-0.15c0,0,0-0.01,0-0.01\r\n\tc-0.01-0.04-0.03-0.07-0.04-0.11c-0.02-0.05-0.03-0.11-0.06-0.16c-0.02-0.04-0.05-0.08-0.08-0.12c-0.03-0.04-0.05-0.09-0.09-0.13\r\n\tc-0.04-0.04-0.08-0.07-0.12-0.11c-0.03-0.03-0.05-0.06-0.09-0.08c0,0-0.01,0-0.01-0.01c-0.04-0.03-0.09-0.05-0.14-0.07\r\n\tc-0.04-0.02-0.08-0.05-0.12-0.06c-0.01,0-0.01-0.01-0.02-0.01l-25.33-8.35c-0.05,0.78-0.24,1.55-0.54,2.26l22.32,7.36l-103.71,46.53\r\n\tl-98.6-47.06l27.52-8.77c0.04-0.92,0.3-1.84,0.81-2.69l-31.82,10.14c-0.01,0-0.01,0.01-0.02,0.01c-0.03,0.01-0.06,0.03-0.09,0.04\r\n\tc-0.06,0.03-0.12,0.05-0.18,0.09c-0.01,0-0.01,0-0.02,0.01c-0.03,0.02-0.05,0.04-0.07,0.06c-0.05,0.04-0.09,0.07-0.13,0.12\r\n\tc-0.03,0.03-0.05,0.07-0.08,0.11c-0.03,0.04-0.06,0.08-0.09,0.13c-0.02,0.04-0.04,0.09-0.05,0.13c-0.01,0.04-0.03,0.07-0.04,0.11\r\n\tc0,0.01,0,0.02,0,0.04c-0.01,0.04-0.01,0.09-0.02,0.14c-0.01,0.05-0.01,0.11-0.01,0.16c0,0.01,0,0.02,0,0.04l8.67,123.68\r\n\tc0.02,0.36,0.21,0.68,0.51,0.88l93.62,62.42c0.1,0.07,0.21,0.11,0.32,0.15c0,0,0.01,0,0.01,0c0.1,0.03,0.21,0.04,0.31,0.04\r\n\tc0.1,0,0.2-0.02,0.3-0.04c0.03-0.01,0.06-0.02,0.09-0.04c0.05-0.02,0.11-0.03,0.16-0.06c0.01-0.01,0.02-0.02,0.03-0.02\r\n\tc0.01-0.01,0.02-0.01,0.03-0.01l98.83-61.26c0.32-0.2,0.52-0.54,0.54-0.91L273.19,267.15C273.19,267.16,273.19,267.16,273.19,267.15\r\n\tz M73.19,389.54L64.7,268.41l99.27,47.38l0.57,134.65L73.19,389.54z M263.41,390.68l-96.56,59.86l-0.57-134.73l104.49-46.88\r\n\tL263.41,390.68z"
        }), React.createElement("polygon", {
          className: "svg_tbd_st1",
          points: "112.72,395.59 95.39,384.8 95.54,404.45 112.34,415.62 "
        }), React.createElement("path", {
          className: "svg_tbd_st1",
          d: "M133.93,200.76c-1.34-1.05-4.89-0.97-6.7-1.3c-2.16-0.39-4.23-1.14-6.03-2.34v13.63l14.16,4.62l0.79-13.38\r\n\tC135.37,201.71,134.62,201.29,133.93,200.76z"
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M251.41,185.48c0-0.02,0-0.04,0-0.06c0-0.01-0.01-0.01-0.01-0.02c-0.02-0.11-0.05-0.21-0.1-0.31\r\n\tc-0.01-0.02-0.02-0.04-0.03-0.05c-0.04-0.07-0.09-0.14-0.15-0.21c-0.02-0.03-0.05-0.05-0.08-0.07c-0.03-0.02-0.05-0.05-0.08-0.07\r\n\tc-0.03-0.02-0.07-0.04-0.1-0.06c-0.03-0.02-0.06-0.04-0.09-0.05c-0.09-0.04-0.19-0.08-0.28-0.1c-0.01,0-0.01-0.01-0.02-0.01\r\n\tl-11.39-1.93c-0.06,0.38-0.13,0.77-0.25,1.18c-0.11,0.38-0.24,0.73-0.4,1.05l7.06,1.2l-68.85,22.71l-22.39-5.52\r\n\tc-0.84,0.81-2,1.35-3.46,1.43c-0.04,0.02-0.08,0.05-0.13,0.07l24.86,6.13l-0.37,86.45l-79.03-28.84L92,190.18l45.71,11.27\r\n\tc-0.31-0.18-0.62-0.36-0.93-0.53c-0.05-0.02-0.17-0.08-0.29-0.14c0,0,0,0,0,0c-0.05,0-0.11,0.01-0.19,0.02\r\n\tc-2.32,0.19-4.22-1.37-5.15-3.35l-35.39-8.73l15.79-3.63c-0.75-0.5-1.33-1.19-1.72-1.98l-19.32,4.44c-0.17,0.04-0.33,0.12-0.46,0.23\r\n\tc0,0-0.01,0-0.02,0.01c0,0,0,0,0,0.01c-0.13,0.11-0.23,0.24-0.3,0.4c-0.01,0.01-0.01,0.02-0.02,0.04c0,0.01-0.01,0.02-0.01,0.02\r\n\tc-0.06,0.15-0.08,0.3-0.07,0.45c0,0.01-0.01,0.02-0.01,0.03l4.24,80.52c0.02,0.46,0.32,0.87,0.76,1.03l81.29,29.67\r\n\tc0.13,0.05,0.26,0.07,0.4,0.07h0c0,0,0,0,0,0c0.15,0,0.3-0.04,0.44-0.1c0.02-0.01,0.04,0,0.06-0.01l71.28-33.9\r\n\tc0.39-0.19,0.64-0.57,0.66-1l2.7-79.37C251.43,185.59,251.42,185.54,251.41,185.48z M246.44,264.23l-68.98,32.81l0.37-86.33\r\n\tl71.22-23.49L246.44,264.23z"
        }), React.createElement("polygon", {
          className: "svg_tbd_st1",
          points: "119.76,277.02 133.99,282.21 134.01,267.96 119.76,263.34 "
        }), React.createElement("polygon", {
          className: "svg_tbd_st1",
          points: "217.14,116.83 130.06,128.2 129.68,143.8 117.35,138.02 117.54,123.19 204.04,112.21 "
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M241.41,124.58c-0.01-0.13-0.04-0.26-0.08-0.38c-0.01-0.03-0.03-0.05-0.04-0.08c-0.05-0.11-0.12-0.21-0.21-0.3\r\n\tc-0.02-0.02-0.02-0.04-0.04-0.06c-0.01-0.01-0.03-0.02-0.05-0.03c-0.11-0.09-0.23-0.17-0.37-0.22l-0.01,0h0L188.46,106\r\n\tc-0.16-0.05-0.32-0.07-0.48-0.05l-90.78,9.14c0,0,0,0-0.01,0c-0.1,0.01-0.2,0.04-0.3,0.07c-0.03,0.01-0.05,0.03-0.08,0.04\r\n\tc-0.05,0.03-0.11,0.05-0.16,0.08c-0.01,0.01-0.02,0.02-0.03,0.02c-0.03,0.02-0.06,0.05-0.09,0.08c-0.05,0.04-0.09,0.09-0.13,0.14\r\n\tc-0.02,0.03-0.04,0.06-0.07,0.1c-0.03,0.05-0.06,0.11-0.09,0.17c-0.01,0.02-0.02,0.04-0.03,0.06c-0.01,0.02-0.01,0.04-0.01,0.06\r\n\tc-0.02,0.06-0.03,0.12-0.04,0.19c0,0.04-0.01,0.08-0.01,0.12c0,0.02-0.01,0.03-0.01,0.05l1.19,60.96c0.01,0.4,0.22,0.76,0.56,0.97\r\n\tl46.98,28.57c0.04,0.03,0.09,0.04,0.14,0.06c0.03,0.02,0.07,0.03,0.1,0.04c0.12,0.04,0.24,0.06,0.36,0.06c0.07,0,0.13-0.01,0.2-0.02\r\n\tl92.37-16.38c0.54-0.1,0.93-0.55,0.95-1.1l2.39-64.77c0-0.01-0.01-0.02-0.01-0.03C241.4,124.61,241.41,124.6,241.41,124.58z\r\n\t M145.65,134.11l-43.49-17.2l85.8-8.64l46.98,15.79L145.65,134.11z M98.5,117.95l45.83,18.12v67.64l-44.68-27.18L98.5,117.95z\r\n\t M146.65,204.39v-68.07l92.4-10.4l-2.31,62.49L146.65,204.39z"
        })), React.createElement("polygon", {
          className: "svg_tbd_st1",
          points: "115.33,186.07 127.63,193.56 127.65,179.92 115.33,174.14 "
        }), React.createElement("rect", {
          x: "-12.23",
          y: "-3021.96",
          width: "1298.72",
          height: "146.05"
        }), React.createElement("text", {
          transform: "matrix(1 0 0 1 -12.2265 -2877.6646)"
        }, "to be defined"), React.createElement("g", {
          id: "right-boxes"
        }, React.createElement("polygon", {
          className: "svg_tbd_st2",
          points: "1042.61,411.33 1042.61,396.99 1058.78,390.83 1058.61,404.33 \t"
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M1090.43,333.43c0-0.01,0-0.02,0-0.04c0-0.01-0.01-0.02-0.01-0.03c-0.02-0.13-0.06-0.25-0.12-0.36\r\n\t\tc-0.01-0.02-0.02-0.04-0.03-0.05c-0.06-0.09-0.13-0.18-0.23-0.25c-0.01-0.01-0.03-0.01-0.04-0.02c-0.01,0-0.01-0.01-0.02-0.02\r\n\t\tl-6.42-4.19c-0.34,0.58-0.8,1.1-1.33,1.52l4.89,3.2l-8.17,2.6c-0.06,0.36-0.16,0.73-0.32,1.12c-0.18,0.46-0.38,0.87-0.58,1.26\r\n\t\tl10.33-3.29l-1.93,57.26l-82.72,32.57l-1.29-62.48l34.57-11c-1.12-0.31-2.26-0.62-3.48-0.86c-0.08-0.02-0.15-0.04-0.23-0.06\r\n\t\tl-31.62,10.06l-24.97-23.5c-0.77,0.34-1.61,0.5-2.44,0.45l26.15,24.61l1.27,61.39l-44.61-53.53v-48.66l1.27,1.2\r\n\t\tc-0.28-0.59-0.44-1.17-0.49-1.73c-0.34-1.01-0.38-2.13-0.12-3.16l-1.87,0.4c-0.02,0-0.04,0.02-0.06,0.03\r\n\t\tc-0.04,0.01-0.09,0.02-0.13,0.03c-0.05,0.02-0.09,0.06-0.14,0.08c-0.02,0.02-0.05,0.03-0.07,0.04c-0.1,0.08-0.18,0.17-0.24,0.27\r\n\t\tc0,0.01-0.01,0.01-0.01,0.01c-0.01,0.01-0.01,0.03-0.02,0.05c-0.05,0.09-0.08,0.19-0.1,0.29c0,0.03-0.01,0.06-0.01,0.1\r\n\t\tc0,0.02-0.01,0.05-0.01,0.07v51.33c0,0.23,0.08,0.46,0.23,0.64l46.67,56c0,0,0,0,0,0c0.09,0.11,0.2,0.19,0.33,0.26\r\n\t\tc0,0,0.01,0,0.01,0c0.13,0.06,0.28,0.1,0.43,0.1c0.12,0,0.24-0.02,0.35-0.06c0,0,0,0,0.01,0c0,0,0.01,0,0.01,0l84.67-33.33\r\n\t\tc0.37-0.15,0.62-0.5,0.63-0.9l2-59.33C1090.44,333.49,1090.44,333.46,1090.43,333.43z"
        }), React.createElement("polygon", {
          className: "svg_tbd_st2",
          points: "1089.28,304.99 1088.61,321.49 1082.94,330.49 1082.94,310.33 \t"
        }), React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M1151.86,213.67c-0.29-0.33-0.76-0.43-1.16-0.25l-45.89,20.55l11.24-32.31c0.1-0.29,0.06-0.61-0.1-0.86\r\n\t\tc-0.16-0.26-0.44-0.43-0.74-0.46l-95.5-10c-0.41-0.04-0.79,0.16-0.98,0.52l-17.34,31.78l-33.55-35.99\r\n\t\tc-0.31-0.33-0.79-0.41-1.19-0.21l-53.5,27.5c-0.28,0.14-0.47,0.41-0.53,0.71c-0.06,0.31,0.04,0.62,0.24,0.85l26.88,29.51\r\n\t\tl-20.52-2.67c-0.47-0.06-0.93,0.22-1.08,0.68c-0.15,0.46,0.05,0.96,0.47,1.19l31.22,17.25l8.61,72.82\r\n\t\tc0.05,0.42,0.36,0.77,0.78,0.86l106,23.33c0.07,0.02,0.14,0.02,0.21,0.02c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0\r\n\t\tc0.1,0,0.19-0.02,0.29-0.05c0.03-0.01,0.05-0.02,0.08-0.03c0.07-0.03,0.13-0.06,0.2-0.11c0.01-0.01,0.03-0.01,0.05-0.03\r\n\t\tc0.01,0,0.01-0.01,0.02-0.02c0.08-0.06,0.15-0.14,0.21-0.23l32.67-50.17c0.1-0.15,0.16-0.33,0.16-0.52l1.27-43.02l28.13-12.09\r\n\t\tc0.19-0.08,0.35-0.22,0.46-0.39l23-37C1152.19,214.48,1152.15,214,1151.86,213.67z M966.89,188.56l33.19,35.6l-35.16,24.13\r\n\t\tl-22.1-2.88l-27.6-30.29L966.89,188.56z M1113.75,202.19l-11.32,32.55l-99.23-11.24l16.97-31.11L1113.75,202.19z M1101.15,236.61\r\n\t\tl-32.42,38.72l-14.56-15.19c-0.16-0.16-0.37-0.27-0.59-0.3l-85.67-11.16l33.97-23.31L1101.15,236.61z M1052.97,261.77l13.11,13.68\r\n\t\tL951.1,259.86L924.2,245L1052.97,261.77z M951.92,261.99l115.82,15.7l-3.25,78.57l-104.14-22.92L951.92,261.99z M1066.59,353.89\r\n\t\tl3.16-76.4l28.6-12.29l-1.23,41.81L1066.59,353.89z M1072.24,274.25l31.49-37.61l44.8-20.07l-21.11,33.96L1072.24,274.25z"
        }), React.createElement("g", null, React.createElement("rect", {
          x: "1000.72",
          y: "224.33",
          className: "svg_tbd_st0",
          width: "2",
          height: "30.25"
        }))), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M575.17,306.49v14.43h-59.09v45.82h47.97v14.43h-47.97v61.23h-17.74V306.49H575.17z"
        }), React.createElement("g", null, React.createElement("path", {
          d: "M1471.52-3141.8v6.88h-17.67v57.93h-8.46v-57.93h-17.76v-6.88H1471.52z"
        }), React.createElement("path", {
          d: "M1494.85-3080.57c-4.96-2.82-8.88-6.76-11.76-11.81c-2.88-5.05-4.32-10.74-4.32-17.06c0-6.32,1.44-12.01,4.32-17.06\r\n\t\tc2.88-5.05,6.8-8.99,11.76-11.81c4.96-2.82,10.44-4.23,16.46-4.23c6.07,0,11.59,1.41,16.55,4.23c4.96,2.82,8.86,6.74,11.72,11.76\r\n\t\tc2.85,5.02,4.28,10.72,4.28,17.11c0,6.39-1.43,12.09-4.28,17.11c-2.85,5.02-6.76,8.94-11.72,11.76\r\n\t\tc-4.96,2.82-10.48,4.23-16.55,4.23C1505.3-3076.34,1499.81-3077.75,1494.85-3080.57z M1523.54-3086.85\r\n\t\tc3.63-2.11,6.48-5.11,8.55-9.02c2.08-3.91,3.11-8.43,3.11-13.58c0-5.21-1.04-9.75-3.11-13.62c-2.08-3.87-4.91-6.86-8.51-8.97\r\n\t\tc-3.6-2.11-7.69-3.16-12.27-3.16c-4.59,0-8.68,1.05-12.27,3.16c-3.6,2.11-6.43,5.1-8.51,8.97c-2.08,3.87-3.11,8.41-3.11,13.62\r\n\t\tc0,5.15,1.04,9.67,3.11,13.58c2.08,3.91,4.93,6.91,8.55,9.02c3.63,2.11,7.7,3.16,12.23,3.16\r\n\t\tC1515.83-3083.69,1519.91-3084.74,1523.54-3086.85z"
        }), React.createElement("path", {
          d: "M1618.75-3107.49c1.95,1.55,3.5,3.47,4.65,5.76c1.15,2.29,1.72,4.74,1.72,7.35c0,3.29-0.84,6.25-2.51,8.88\r\n\t\tc-1.67,2.64-4.11,4.71-7.3,6.23c-3.19,1.52-6.96,2.28-11.3,2.28h-24.17v-64.81h23.24c4.4,0,8.15,0.73,11.25,2.19\r\n\t\tc3.1,1.46,5.42,3.43,6.97,5.9c1.55,2.48,2.32,5.27,2.32,8.37c0,3.84-1.04,7.02-3.11,9.53c-2.08,2.51-4.82,4.32-8.23,5.44\r\n\t\tC1614.64-3110,1616.79-3109.04,1618.75-3107.49z M1588.3-3113.81h14.23c3.97,0,7.03-0.93,9.2-2.79c2.17-1.86,3.25-4.43,3.25-7.72\r\n\t\tc0-3.28-1.09-5.86-3.25-7.72c-2.17-1.86-5.3-2.79-9.39-2.79h-14.04V-3113.81z M1613.12-3086.94c2.35-1.98,3.53-4.74,3.53-8.28\r\n\t\tc0-3.59-1.24-6.43-3.72-8.51c-2.48-2.08-5.8-3.11-9.95-3.11h-14.69v22.87h14.97C1607.48-3083.97,1610.76-3084.96,1613.12-3086.94z"
        }), React.createElement("path", {
          d: "M1645.29-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1645.29z"
        }), React.createElement("path", {
          d: "M1747.89-3137.85c5.17,2.64,9.14,6.4,11.9,11.3c2.76,4.9,4.14,10.66,4.14,17.29c0,6.63-1.38,12.38-4.14,17.25\r\n\t\tc-2.76,4.87-6.73,8.59-11.9,11.16c-5.18,2.57-11.3,3.86-18.36,3.86h-20.18v-64.81h20.18\r\n\t\tC1736.6-3141.8,1742.72-3140.48,1747.89-3137.85z M1748.68-3090.61c4.4-4.43,6.6-10.65,6.6-18.64c0-8.06-2.22-14.35-6.65-18.87\r\n\t\tc-4.43-4.52-10.8-6.79-19.11-6.79h-11.72v50.95h11.72C1737.9-3083.97,1744.28-3086.18,1748.68-3090.61z"
        }), React.createElement("path", {
          d: "M1783.55-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1783.55z"
        }), React.createElement("path", {
          d: "M1859.42-3141.8v6.88h-28.17v21.85h22.87v6.88h-22.87v29.2h-8.46v-64.81H1859.42z"
        }), React.createElement("path", {
          d: "M1878.11-3141.8v64.81h-8.46v-64.81H1878.11z"
        }), React.createElement("path", {
          d: "M1943.47-3076.99h-8.46l-34.03-51.6v51.6h-8.46v-64.9h8.46l34.03,51.51v-51.51h8.46V-3076.99z"
        }), React.createElement("path", {
          d: "M1966.34-3134.92v21.66h23.62v6.97h-23.62v22.31h26.41v6.97h-34.87v-64.9h34.87v6.97H1966.34z"
        }), React.createElement("path", {
          d: "M2044.12-3137.85c5.17,2.64,9.14,6.4,11.9,11.3c2.76,4.9,4.14,10.66,4.14,17.29c0,6.63-1.38,12.38-4.14,17.25\r\n\t\tc-2.76,4.87-6.73,8.59-11.9,11.16c-5.18,2.57-11.3,3.86-18.36,3.86h-20.18v-64.81h20.18\r\n\t\tC2032.82-3141.8,2038.94-3140.48,2044.12-3137.85z M2044.91-3090.61c4.4-4.43,6.6-10.65,6.6-18.64c0-8.06-2.22-14.35-6.65-18.87\r\n\t\tc-4.43-4.52-10.8-6.79-19.11-6.79h-11.72v50.95h11.72C2034.12-3083.97,2040.51-3086.18,2044.91-3090.61z"
        })), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M345.53,312.78c10.85,5.53,19.17,13.42,24.96,23.69c5.78,10.27,8.68,22.36,8.68,36.27\r\n\tc0,13.91-2.89,25.97-8.68,36.17c-5.79,10.21-14.11,18.01-24.96,23.4c-10.86,5.4-23.69,8.09-38.51,8.09H264.7V304.49h42.31\r\n\tC321.84,304.49,334.68,307.25,345.53,312.78z M347.19,411.84c9.23-9.29,13.85-22.33,13.85-39.1c0-16.9-4.65-30.09-13.94-39.58\r\n\tc-9.3-9.49-22.65-14.23-40.07-14.23h-24.57v106.86h24.57C324.57,425.78,337.96,421.13,347.19,411.84z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M966.05,315.03c10.85,5.53,19.17,13.42,24.96,23.69c5.78,10.27,8.68,22.36,8.68,36.27\r\n\tc0,13.91-2.89,25.97-8.68,36.17c-5.79,10.21-14.11,18.01-24.96,23.4c-10.86,5.4-23.69,8.09-38.51,8.09h-42.31V306.74h42.31\r\n\tC942.36,306.74,955.2,309.51,966.05,315.03z M967.71,414.09c9.23-9.29,13.85-22.33,13.85-39.1c0-16.9-4.65-30.09-13.94-39.58\r\n\tc-9.3-9.49-22.65-14.23-40.07-14.23h-24.57v106.86h24.57C945.09,428.03,958.48,423.39,967.71,414.09z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M614.47,306.32v135.92h-17.74V306.32H614.47z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M751.55,442.24h-17.75l-71.37-108.23v108.23h-17.74V306.13h17.74l71.37,108.03V306.13h17.75V442.24z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M799.52,320.75v45.44h49.53v14.62h-49.53v46.8h55.38v14.62h-73.12V306.13h73.12v14.62H799.52z"
        }), React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M665.22,205.58c4.09,3.25,7.34,7.28,9.75,12.09c2.4,4.81,3.61,9.95,3.61,15.41c0,6.89-1.75,13.1-5.27,18.62\r\n\t\t\tc-3.51,5.53-8.61,9.88-15.31,13.06c-6.7,3.19-14.59,4.78-23.69,4.78h-50.7V133.63h48.75c9.23,0,17.09,1.53,23.59,4.58\r\n\t\t\tc6.5,3.06,11.37,7.18,14.62,12.38c3.25,5.2,4.88,11.05,4.88,17.55c0,8.06-2.18,14.72-6.53,19.99\r\n\t\t\tc-4.36,5.27-10.11,9.07-17.26,11.41C656.6,200.32,661.12,202.34,665.22,205.58z M601.35,192.32h29.84c8.32,0,14.75-1.95,19.3-5.85\r\n\t\t\tc4.55-3.9,6.83-9.29,6.83-16.19c0-6.89-2.28-12.29-6.83-16.19c-4.55-3.9-11.11-5.85-19.69-5.85h-29.45V192.32z M653.42,248.68\r\n\t\t\tc4.94-4.16,7.41-9.94,7.41-17.35c0-7.54-2.6-13.49-7.8-17.84c-5.2-4.35-12.16-6.53-20.87-6.53h-30.81v47.97h31.4\r\n\t\t\tC641.59,254.92,648.48,252.84,653.42,248.68z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M720.89,148.06v45.44h49.53v14.62h-49.53v46.8h55.38v14.62h-73.12V133.43h73.12v14.62H720.89z"
        })), React.createElement("g", null, React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M352.97,133.53v14.43h-37.05v121.48h-17.75V147.96h-37.25v-14.43H352.97z"
        }), React.createElement("g", {
          id: "beyond-ales_00000081611499284930357290000003878594640094021544_",
          transform: "translate(0 58.014)"
        }, React.createElement("path", {
          className: "svg_tbd_st0",
          d: "M370.35,187.76c-4.6,17.43-6.93,33.93-6.15,43.47c0.8,9.73,4.72,10.79,10.28,2.76\r\n\t\t\t\tc5.43-8.87,9.69-18.39,12.68-28.35C380.68,200.57,375.01,194.55,370.35,187.76z M470.84,214.71c-7.43,3.54-15.35,5.93-23.5,7.07\r\n\t\t\t\tc-2.39,10.12-3.46,20.5-3.19,30.9c0.8,9.73,4.72,10.78,10.28,2.75C459.88,247.55,466.09,232.1,470.84,214.71z M405.59,216.29\r\n\t\t\t\tc-6.45,25.2-10.55,48.18-11.02,61.57c-0.52,14.65,3.4,15.7,10.28,2.75c6.28-11.84,14.2-33.8,21.22-58.83\r\n\t\t\t\tC419,220.98,412.1,219.13,405.59,216.29L405.59,216.29z"
        })), React.createElement("g", {
          id: "beyond-circle_00000092432898804943095760000001475727222873014433_"
        }, React.createElement("path", {
          className: "svg_tbd_st4",
          d: "M438.84,130.64c-1.72-0.06-3.44-0.05-5.14,0.02c-38.02,1.54-67.58,33.61-66.04,71.63\r\n\t\t\t\tc1.54,38.02,33.61,67.58,71.63,66.04c38.02-1.54,67.58-33.61,66.04-71.63C503.86,160.67,474.87,131.86,438.84,130.64z\r\n\t\t\t\t M438.28,145.98c4.12,0.15,8.21,0.77,12.18,1.85c28.76,7.79,45.76,37.42,37.96,66.18s-37.42,45.76-66.18,37.96\r\n\t\t\t\tc-28.76-7.79-45.76-37.42-37.96-66.18c6.17-22.77,26.41-38.89,49.99-39.8C435.6,145.94,436.93,145.93,438.28,145.98\r\n\t\t\t\tL438.28,145.98z M464.75,83.09c-4.58,0.2-9.07,1.35-13.18,3.37c-5.62,2.69-10.68,6.42-14.91,10.98\r\n\t\t\t\tc-6.95,7.34-13,15.49-18.03,24.26c7.4-1.72,15.01-2.36,22.59-1.93c2.79-4.17,5.91-8.09,9.35-11.74\r\n\t\t\t\tc10.22-10.3,18.57-11.15,22.81,6.12c1.23,5.2,2.01,10.49,2.32,15.82c6.84,3.83,13.07,8.65,18.51,14.3\r\n\t\t\t\tc0.18-10.88-0.99-21.75-3.49-32.34c-1.4-6.07-3.93-11.82-7.45-16.95c-3.39-4.69-7.96-9.69-13.97-11.3\r\n\t\t\t\tc-1.49-0.39-3.03-0.59-4.57-0.58L464.75,83.09z M438.9,129.21c-1.76-0.06-3.51-0.05-5.24,0.02c-38.8,1.57-68.97,34.3-67.4,73.09\r\n\t\t\t\ts34.3,68.97,73.09,67.4s68.97-34.3,67.4-73.09C505.26,159.87,475.67,130.47,438.9,129.21L438.9,129.21z M438.31,144.88\r\n\t\t\t\tc4.2,0.16,8.37,0.79,12.43,1.88c29.35,7.95,46.69,38.19,38.74,67.54c-7.95,29.35-38.19,46.69-67.54,38.74\r\n\t\t\t\tc-29.35-7.95-46.69-38.19-38.74-67.54c6.3-23.23,26.96-39.68,51.01-40.61C435.58,144.83,436.94,144.83,438.31,144.88\r\n\t\t\t\tL438.31,144.88z"
        })))), React.createElement("g", null, React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M439.93,306.13h-16.84c-1.69,5.18-3.41,10.07-5.13,14.62H442c-0.56-1.32-1.02-2.93-1.38-4.83\r\n\t\tC440.25,312.66,440.03,309.4,439.93,306.13z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M398.41,354.2v88.03h73.12v-14.62h-55.38v-46.8h49.53v-14.62h-49.53v-40.81c-2.71,6.78-5.42,12.64-8.02,17.31\r\n\t\tC404.39,349.41,401.09,353.23,398.41,354.2z"
        }), React.createElement("path", {
          className: "svg_tbd_st3",
          d: "M456.62,317.96c-0.78,1.04-1.53,1.97-2.28,2.79h17.19v-14.62h-7.9C461.32,310.81,458.95,314.82,456.62,317.96z\r\n\t\t"
        }))));
      }
    }
  });
  /***********************************************
  INTERNAL MODULE: ./views/tutorial/bridge-section
  ***********************************************/

  modules.set('./views/tutorial/bridge-section', {
    hash: 2579859327,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BridgeSection = BridgeSection;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _bridge = require("./templates/bridge");

      var _code2 = require("@beyond/ui/link/code");

      var _pageCode = require("./templates/page-code");

      var _modalImage = require("../modal-image");

      function BridgeSection() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "bridge-code"
        }, "C\u00F3digo Bridge"), React.createElement("p", null, "Como mencionamos antes, en esta parte generalmente cada proyecto tiene su propia l\u00F3gica para la validaci\u00F3n de sesi\u00F3n. La intenci\u00F3n hoy no es enfocarse en c\u00F3mo debe manejarse esto, lo que haremos ser\u00E1 crear un c\u00F3digo b\u00E1sico que nos permita conectar nuestro c\u00F3digo cliente con el backend node."), React.createElement(_code.Code, {
          language: "ts"
        }, _bridge.bridgeCode), React.createElement("p", null, "El c\u00F3digo es bastante simple, pero hay varios puntos interesantes a destacar."), React.createElement("ul", null, React.createElement("li", null, "El comentario m\u00E1gico ", React.createElement("span", {
          className: "inline-code"
        }, "/*bundle*/"), "es utilizado por ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " para identificar que el c\u00F3digo a continuaci\u00F3n debe ser considerado como c\u00F3digo a exportar en el bundle final. Si quieres leer m\u00E1s acerca del funcionamiento de bundles y m\u00F3dulos, te recomendamos ir a ", React.createElement(_code2.Link, {
          href: "/modules"
        }, "La secci\u00F3n de m\u00F3dulos"), " de la documentaci\u00F3n."), React.createElement("li", null, "El comentario m\u00E1gico ", React.createElement("span", {
          className: "inline-code"
        }, "/*actions*/"), "es utilizado por beyond para identificar que segmentos del bundle bridge deben quedar disponibles como acciones que puedan ser consumidas por el cliente."), React.createElement("li", null, "La respuesta del m\u00E9todo ", React.createElement("span", {
          className: "inline-code"
        }, "login"), "es un objeto plano que llega con la estructura definida al cliente.")), React.createElement("h2", {
          id: "back-client-connection"
        }, "Conectar cliente y servidor"), React.createElement("p", null, "El bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario ir a una consola. Sin embargo, en ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS "), " estos servicios funcionan como un ", React.createElement(_code2.Link, {
          href: "/bee"
        }, "BEE (Beyond Environment Service)"), " y para ejecutarlo podemos debemos ir al ", React.createElement(_code2.Link, {
          href: "/dashboard"
        }, " Dashboard"), " y darle al bot\u00F3n de ejecuci\u00F3n, hay uno en el listado de proyectos:"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/bee-button.png",
          alt: "bee service"
        }), React.createElement("p", null, "y otro en el detalle del proyecto:"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/bee-button-project.png",
          alt: "bee service"
        }), React.createElement("p", null, "Para poder implementar la funcionalidad de login con nuestro servidor, debemos importar nuestro objeto auth en el c\u00F3digo cliente y asociar el evento ", React.createElement("span", {
          className: "inline-code"
        }, "onSubmit"), " a nuestro formulario."), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "En beyondJS"), "los proyectos siguen las mismas directrices para espacificaci\u00F3n y resoluci\u00F3n de nombres y paquetes que npm, de la misma forma que lo hace typescript. Deben tener ", React.createElement("strong", null, "nombre"), " de m\u00F3dulo y pueden manejar un", React.createElement("strong", null, "scope"), " tambien. En nuestro caso, definimos ambos al momento de crear nuestro proyecto y m\u00F3dulo respectivamente."), React.createElement("div", {
          className: "block__note"
        }, "Si quieres saber m\u00E1s acerca del estandar de resoluci\u00F3n de nombres, dirigete a la secci\u00F3n ", React.createElement(_code2.Link, {
          href: "/module-resolution"
        }, "Resoluci\u00F3n de m\u00F3dulos"), "."), React.createElement("p", null, "A continuaci\u00F3n, en nuestro componente ", React.createElement("span", {
          className: "inline_code"
        }, "Page"), " importamos el objeto ", React.createElement("span", {
          className: "inline_code"
        }, "Auth")), React.createElement(_code.Code, {
          language: "typescript"
        }, `import {Auth} from "@testing/login/home/bridge";`), React.createElement("p", null, "Agregamos nuestra funci\u00F3n ", React.createElement("span", {
          className: "inline-code"
        }, "onSubmit"), "y la asociamos al formulario, nuestro c\u00F3digo debe quedar de la siguiente forma:"), React.createElement(_code.Code, {
          language: "typescript"
        }, _pageCode.PageCode), React.createElement("p", null, "Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que indica que los datos fueron validados y se puede iniciar sesi\u00F3n, si por el contrario, agregamos datos incorrectos, podremos ver como aparece el mensaje de error \"Invalid data\" el cual actualizamos en la variable de estado del componente."), React.createElement("h4", null, "Hagamos un resumen de lo que hemos visto"), React.createElement("ul", null, React.createElement("li", null, "Creamos un m\u00F3dulo con un widget de tipo page"), React.createElement("li", null, "Creamos una conexi\u00F3n con un backend node por medio del bundle bridge"), React.createElement("li", null, "Repasamos la estructura de resoluci\u00F3n de m\u00F3dulos para importar el bridge Auth y poder agregar la validaci\u00F3n de inicio de sesi\u00F3n")), React.createElement("p", null, "Ahora s\u00F3lo nos falta redireccionar al usuario a una pantalla de bienvenida."));
      }
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/tutorial/create-module
  **********************************************/

  modules.set('./views/tutorial/create-module', {
    hash: 2254811738,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CreateModule = CreateModule;

      var React = require("react");

      function CreateModule() {
        return React.createElement("section", {
          className: "content"
        });
      }
    }
  });
  /***********************************************
  INTERNAL MODULE: ./views/tutorial/create-project
  ***********************************************/

  modules.set('./views/tutorial/create-project', {
    hash: 254780513,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CreateProject = CreateProject;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _modalImage = require("../modal-image");

      function CreateProject() {
        return React.createElement("section", {
          className: "content"
        }, React.createElement("h2", {
          id: "create-project-section"
        }, "Crear el proyecto"), React.createElement("p", null, "En el formulario de creaci\u00F3n de proyectos, vamos a seleccionar proyecto ", React.createElement("strong", null, "Web"), ". Esto nos llevar\u00E1 a un formulario donde se solicitan los siguientes datos:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Scope:"), " colocamos \u201Ctesting\u201D."), React.createElement("li", null, React.createElement("strong", null, "Name "), ": colocamos \u201Clogin\u201D."), React.createElement("li", null, React.createElement("strong", null, "Title:"), " Tutorial beyond."), React.createElement("li", null, React.createElement("strong", null, "Port:"), " coloquemos el puerto: 6500. Es el puerto que se utilizar\u00E1 para acceder al proyecto. ", React.createElement("div", {
          className: "beyond"
        }, "BeyondJS"), " propone un puerto por defecto y puede ser modificado si se requiere.")), React.createElement("p", null, "Y presionamos crear."), React.createElement("div", {
          className: "block__note"
        }, "El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma manual, el dashboard s\u00F3lo simplifica el proceso. Puedes ver la explicaci\u00F3n de ello en", React.createElement(_code.Link, {
          href: "/project/config"
        }, " la secci\u00F3n de Configuraci\u00F3n de proyecto.")), React.createElement("p", null, "Este formulario simplifica el proceso de creacion. Internamente lo que sucede es que se crea el archivo de configuraci\u00F3n de beyond (beyond.json), el cual registra las aplicaciones en el directorio. Tambi\u00E9n se crea la estructura base de la aplicaci\u00F3n, la cual esta conformada de la siguiente forma:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "package.json:"), " Incluye las dependencias del proyecto creado."), React.createElement("li", null, React.createElement("strong", null, "project.json:"), " Contiene la configuraci\u00F3n b\u00E1sica del proyecto (puede variar seg\u00FAn el tipo y las necesidades del mismo)."), React.createElement("li", null, React.createElement("strong", null, "template:"), " Esta carpeta contiene todos los elementos necesarios para definir el template general del proyecto.", React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "template.json:"), " Archivo que permite realizar ajustes en la configuraci\u00F3n del template del proyecto.")))), React.createElement("p", null, "En el dashboard, tenemos dos lugares para ver el m\u00F3dulo. El ", React.createElement("i", null, "Board"), " del proyecto, que lista los m\u00F3dulos existentes y El ", React.createElement("i", null, "Aside"), " del proyecto que permite navegar los archivos del mismo. Como vemos en la siguiente imagen."), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/project-view.png",
          alt: "Beyond module view"
        }), React.createElement("p", null, "La pantalla de detalle del proyecto nos permite realizar las siguientes acciones:"), React.createElement("ul", null, React.createElement("li", null, "Listar m\u00F3dulos del proyecto."), React.createElement("li", null, "Crear nuevos m\u00F3dulos."), React.createElement("li", null, "Visualizar errores de c\u00F3digo en real time."), React.createElement("li", null, "Editar c\u00F3digo fuente."), React.createElement("li", null, "Agregar archivos est\u00E1ticos y de template."), React.createElement("li", null, "Realizar configuraciones generales sobre el proyecto."), React.createElement("li", null, "Realizar deployment.")));
      }
    }
  });
  /******************************************
  INTERNAL MODULE: ./views/tutorial/dashboard
  ******************************************/

  modules.set('./views/tutorial/dashboard', {
    hash: 1845012465,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TDashboard = TDashboard;

      var React = require("react");

      var _modalImage = require("../modal-image");

      function TDashboard() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "dashboard"
        }, "El Dashboard"), React.createElement("p", null, "El dashboard se levanta por defecto en el puerto 4000, para acceder a el debes ingresar a", React.createElement("a", {
          href: "http://localhost:4000",
          target: "_blank"
        }, " localhost:4000"), "."), React.createElement("p", null, "Como comentamos antes, ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "analiza el directorio validando si existe alg\u00FAn proyecto beyond ya configurado. Caso contrario, como se ve en la imagen a continuaci\u00F3n, indicar\u00E1 que no existe ninguno y brinda la opci\u00F3n de crearlo."), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/empty.png",
          alt: "beyond dashboard empty folder"
        }));
      }
    }
  });
  /********************************************
  INTERNAL MODULE: ./views/tutorial/home-module
  ********************************************/

  modules.set('./views/tutorial/home-module', {
    hash: 2793847854,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HomeModule = HomeModule;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      var _pageCodeStarted = require("./templates/page-code-started");

      var _pageStyles = require("./templates/page-styles");

      function HomeModule() {
        return React.createElement("section", {
          className: "content"
        }, React.createElement("h2", {
          id: "create-module"
        }, "M\u00F3dulo Inicial"), React.createElement("p", null, "El proyecto trae un m\u00F3dulo ", React.createElement("span", {
          className: "inline"
        }, "home"), " creado por defecto. Puedes verlo accediendo desde el navegador a", React.createElement("a", {
          href: "http://localhost:6500",
          target: "_blank"
        }, "localhost:6500 "), " (Si colocaste otro puerto, debes cambiarlo)."), React.createElement("p", null, "El m\u00F3dulo podemos verlo desde el Dashboard, en el listado de m\u00F3dulos del proyecto. Al hacer click en el, se abrir\u00E1 el Board de detalle del m\u00F3dulo, que nos permite ver la informaci\u00F3n general del mismo."), React.createElement("p", null, "La estructura del m\u00F3dulo es la siguiente: "), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "widget"), ": Carpeta en donde se encuentra el c\u00F3digo del componente ", React.createElement("span", {
          className: "inline"
        }, "page")), React.createElement("li", null, React.createElement("strong", null, "ts"), ":", React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "controller.tsx"), ": Objeto controlador del componente, requerido para poder montar el WebComponent en el navegador."), React.createElement("li", null, React.createElement("strong", null, "views/page.tsx"), ": Componente react que renderiza la p\u00E1gina"))), React.createElement("li", null, React.createElement("strong", null, "scss"), ": Carpeta para agregar estilos al m\u00F3dulo."), React.createElement("li", null, React.createElement("strong", null, "module.json"), ": Archivo de configuraci\u00F3n del m\u00F3dulo (Lugar para definir tipo de bundles y procesadores a utilizar).")), React.createElement("h4", null, "\u00A1Manos a la obra!"), React.createElement("p", null, "Teniendo clara la estructura, lo que procede a continuaci\u00F3n es crear el formulario de inicio de sesi\u00F3n y agregar algo de estilos, para luego continuar con la conexi\u00F3n al backend node."), React.createElement("h3", null, "Creemos el Formulario"), React.createElement("p", null, "Si has trabajado con React, lo que viene es la parte que seguramente conoces mejor, con algunas sutilezas seguramente. A continuaci\u00F3n, editaremos nuestro archivo ", React.createElement("span", {
          className: "inline"
        }, "page.tsx"), " para crear un formulario de inicio de sesi\u00F3n y la funcionalidad b\u00E1sica para actualizar el estado."), React.createElement("h4", null, "Page.tsx"), React.createElement(_code2.Code, {
          language: "tsx"
        }, _pageCodeStarted.PageCodeStarted), React.createElement("h3", null, "Agreguemos el estilo"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " maneja los estilos por defecto con el preprocesador SASS, ahora vamos a nuestro archivo", React.createElement("span", {
          className: "inline-code"
        }, " styles.scss"), " y agreguemos un poco de estilo al formulario."), React.createElement("div", {
          className: "block__note"
        }, "SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podr\u00E1s encontrar los detalles en ", React.createElement(_code.Link, {
          href: "/processors"
        }, "La secci\u00F3n de procesadores.")), React.createElement("h4", null, "styles.scss"), React.createElement(_code2.Code, {
          language: "scss"
        }, _pageStyles.pageStyles), React.createElement("h4", null, "Expliquemos un poco el c\u00F3digo anterior"), React.createElement("ul", null, React.createElement("li", null, "Agregamos estilo b\u00E1sico al formulario, los inputs, el bot\u00F3n de env\u00EDo y para manejar un mensaje de error."), React.createElement("li", null, React.createElement("strong", null, "Custom properties:"), " las custom properties utilizadas, son una estructura b\u00E1sica para manejo de variables incluidas por beyond en el ", React.createElement(_code.Link, {
          href: "/template"
        }, "Template del proyecto"))));
      }
    }
  });
  /**************************************
  INTERNAL MODULE: ./views/tutorial/intro
  **************************************/

  modules.set('./views/tutorial/intro', {
    hash: 2609424321,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialIntro = TutorialIntro;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/code/code");

      function TutorialIntro() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Tutorial: Proyecto Web "), React.createElement("h2", {
          id: "before-start"
        }, "Antes de Empezar"), React.createElement("p", null, "Este tutorial busca el flujo principal de desarrollo con ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " y demostrar de manera clara los beneficios que este ofrece. Est\u00E1 creado para personas que deseen aprender mientras practican, por tanto, los conceptos que definen la estructura de ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " son abordados de forma general, focalizando en hacer un ejercicio r\u00E1pido, conciso y claro. Para mayor detalle los conceptos estar\u00E1n disponbiles en la documentaci\u00F3n cuando sea requerida."), React.createElement("p", null, "El tutorial se divide en las siguientes partes:"), React.createElement("ul", null, React.createElement("li", null, "El dashboard."), React.createElement("li", null, "Creaci\u00F3n de primer m\u00F3dulo."), React.createElement("li", null, "Integraci\u00F3n con backend."), React.createElement("li", null, "Enrutamiento.")), React.createElement("p", null, "Sugerimos que este sea completado para demostrar como en poco tiempo se logra integrar c\u00F3digo cliente y servidor, utilizando la misma estructura JavaScript."), React.createElement("p", null, "Antes de empezar, recomendamos la revisi\u00F3n de los siguientes conceptos para que est\u00E9n presentes a medida que se avanza."), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Bundle:"), " Representa un conjunto de archivos fuentes que generan un \u00FAnico archivo final, el cual es incluido en el navegador."), React.createElement("li", null, React.createElement("strong", null, "M\u00F3dulo:"), " Representa uno o m\u00FAltiples bundles."), React.createElement("li", null, React.createElement("strong", null, "Processor:"), " Representa el procesador, compilador o transpilador de c\u00F3digo de la tecnolog\u00EDa que se est\u00E1 utilizando.")), React.createElement("section", null, React.createElement("h2", {
          id: "starting"
        }, "Empezando"), React.createElement("p", null, "Lo primero que debes hacer es inicializar ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), ". S\u00ED lo instalaste de forma global, s\u00F3lo debes ejecutar el comando ", React.createElement("span", {
          className: "inline"
        }, "beyond"), " desde la consola, ubicado en la carpeta que definas c\u00F3mo raiz de tus proyectos. Ten en cuenta que al crear un proyecto desde el dashboard, deber\u00E1s definirle un nombre y ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "crear\u00E1 en tu directorio raiz una carpeta para tu proyecto con el nombre que hayas definido."), React.createElement("p", null, "Al estar con la l\u00EDnea de comandos, ubicado en tu workspace, s\u00F3lo tienes que ejecutar el siguiente comando: "), React.createElement(_code2.Code, {
          language: "shell"
        }, `> beyond`), React.createElement("p", null, "Listo, ahora ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " se encuentra iniciado y estamos listos para empezar utilizando el dashboard."), React.createElement("div", {
          className: "block__note"
        }, React.createElement("div", {
          className: "beyond"
        }, "BeyondJS"), "cuenta con un dashboard (actualmente en versi\u00F3n beta), que es una herramienta muy potente, creada con la intenci\u00F3n de agilizar el proceso de creaci\u00F3n y desarrollo del programador y ser\u00E1 usado durante el ejemplo a continuaci\u00F3n. El Dashboard se encuentra en versi\u00F3n Beta. Por supuesto, puedes hacer la configuraci\u00F3n de proyectos, modules y cualquier cosa necesaria a trav\u00E9s de c\u00F3digo. Puedes encontrar como en ", React.createElement(_code.Link, {
          href: "/project/config"
        }, " La documentaci\u00F3n."))));
      }
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/tutorial/module-review
  **********************************************/

  modules.set('./views/tutorial/module-review', {
    hash: 173597333,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleReview = ModuleReview;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _module = require("./templates/module.json");

      function ModuleReview() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "bundle-bridge"
        }, "L\u00F3gica ", React.createElement("strong", null, "Backend")), React.createElement("p", null, "Por su naturaleza, Los formularios de inicio de sesi\u00F3n requieren validar los datos contra un backend que se conecte a alg\u00FAn manejador de datos. A continuaci\u00F3n, vamos a emular la conexi\u00F3n a la base de datos, creando nuestra integraci\u00F3n con un servicio node, que tendr\u00E1 un usuario y clave predefinidos y as\u00ED, podremos revisar si la sesi\u00F3n es v\u00E1lida o no. Para lograrlo, haremos uso de websockets."), React.createElement("p", null, "Es necesario crear un bundle BRIDGE para crear de forma simple un servicio node y lograr la integraci\u00F3n con el c\u00F3digo cliente. Los bundles bridges, como su nombre lo indica, crean un puente de conexi\u00F3n entre el c\u00F3digo cliente y servidor permitiendo manejar el c\u00F3digo de manera uniforme."), React.createElement("div", {
          className: "block__note"
        }, "NOTA: Los bridges son un feature central y muy poderoso en ", React.createElement("div", {
          className: "beyond"
        }, "BeyondJS"), " y en este tutorial solo se muestran de forma superficial. Si quieres conocer m\u00E1s y entender c\u00F3mo funcionan, dir\u00EDgite a la seccion de bridges."), React.createElement("div", {
          className: "block__note"
        }, "Tip: La definici\u00F3n de bundles en el module.json se cubre completamente en la secci\u00F3n module.json de la documentaci\u00F3n."), React.createElement("p", null, "Para agregar un bundle bridge al m\u00F3dulo, debemos dirigirnos al archivo de configuraci\u00F3n (module.json), ubicado dentro de la carpeta home. La ruta deber\u00EDa ser", React.createElement("span", {
          className: "inline-code"
        }, "\u201Cproyecto/modules/home/module.json\u201D")), React.createElement("p", null, "All\u00ED, debemos agregar la siguiente estructura:"), React.createElement(_code.Code, {
          language: "json"
        }, _module.moduleJson.bridge), React.createElement("p", null, "Nuestro ", React.createElement("span", {
          className: "inline"
        }, "module.json"), " final deberia quedar con la siguiente estructura:"), React.createElement(_code.Code, {
          language: "json"
        }, _module.moduleJson.module), React.createElement("h4", null, "Explicamos lo que acabamos de hacer"), React.createElement("ul", null, React.createElement("li", null, "Como ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " es un framework que garantiza el funcionamiento universal, cada m\u00F3dulo creado puede especificar que plataformas estan soportadas por el mismo. Con la entrada", React.createElement("span", {
          className: "inline-code"
        }, " platforms"), " le especificamos que queremos que nuestro m\u00F3dulo soporte las plataformas", React.createElement("span", {
          className: "inline-code"
        }, " web"), " y ", React.createElement("span", {
          className: "inline-code"
        }, "backend"), "."), React.createElement("li", null, "Agregamos la configuraci\u00F3n de un bundle de tipo bridge para manejar las acciones en un servicio node y la interconexi\u00F3n con el c\u00F3digo cliente."), React.createElement("li", null, "En la entrada ", React.createElement("span", {
          className: "inline-code"
        }, "Bridge"), ", agregamos la propiedad \"path\" que define el directorio relativo en donde se encontrar\u00E1 el c\u00F3digo del bundle.")), React.createElement("p", null, "A cotinuaci\u00F3n, creamos una carpeta con el nombre \"bridge\" para que ", React.createElement("span", {
          className: "beyond"
        }, "Beyond"), " consiga el path definido en module.json y, adentro de la carpeta bridge, creamos un archivo ", React.createElement("span", {
          className: "inline-code"
        }, "index.ts"), " en el cual se agregar\u00E1 la l\u00F3gica servidor."));
      }
    }
  });
  /******************************************
  INTERNAL MODULE: ./views/tutorial/t-routing
  ******************************************/

  modules.set('./views/tutorial/t-routing', {
    hash: 3193990699,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TRouting = TRouting;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/ui/link/code");

      var _code3 = require("@beyond/docs/ui/icons/code");

      var _modalImage = require("../modal-image");

      function TRouting() {
        return React.createElement("div", {
          className: "section"
        }, React.createElement("h2", {
          id: "routing"
        }, "Routing"), React.createElement("p", null, "Lo primero que debemos hacer, es crear un nuevo m\u00F3dulo con un bundle de tipo Page, esta vez lo haremos desde el ", React.createElement("span", {
          className: "beyond"
        }, "Dashboard"), ". Para eso, debemos acceder a nuestro dashboard y seleccionar el proyecto que estamos trabajando, sino lo hemos hecho. Esto habilitar\u00E1 en el", React.createElement(_code2.Link, {
          rel: "stylesheet",
          href: "/dashboard"
        }, "Preaside"), " las acciones que podemos realizar sobre el proyecto, Las listamos a continuaci\u00F3n:"), React.createElement("ul", {
          className: "content__list list-icons list-icons--left"
        }, React.createElement("li", null, React.createElement(_code3.AppIcon, {
          icon: "add"
        }), "Agregar m\u00F3dulos"), React.createElement("li", null, React.createElement(_code3.AppIcon, {
          icon: "settings"
        }), " Configuraci\u00F3n general del proyecto"), React.createElement("li", null, React.createElement(_code3.AppIcon, {
          icon: "static"
        }), "Gestionar archivos est\u00E1ticos"), React.createElement("li", null, React.createElement(_code3.AppIcon, {
          icon: "folder"
        }), "Gestionar Template")), React.createElement("p", null, "Hacemos click en el icono para agregar m\u00F3dulos y se abrir\u00E1 un modal como el siguiente:"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/create-module-1.png",
          alt: "Create module on beyond project"
        }), React.createElement("p", null, "Seleccionamos ", React.createElement("span", {
          className: "inline"
        }, "m\u00F3dulo en blanco"), ". y en la siguiente pantalla, nos pide el bundle, seleccionamos page: "), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/create-module-2.png",
          alt: "Create module on beyond project"
        }), React.createElement("p", null, "En la pantalla final, nos pedir\u00E1 algunos datos, a continuaci\u00F3n se explica que colocar:"), React.createElement(_modalImage.ModalImage, {
          src: "/contents/static/create-module-3.png",
          alt: "Create module on beyond project"
        }), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Module name:"), " welcome"), React.createElement("li", null, React.createElement("strong", null, "Web component name:"), " welcome-page."), React.createElement("li", null, React.createElement("strong", null, "Url:"), " \"/welcome\"")), React.createElement("div", {
          className: "block__note"
        }, "Las p\u00E1ginas y layouts en beyond se resuelven haciendo uso de", React.createElement("a", {
          href: "/https://developer.mozilla.org/en-US/docs/Web/Web_Components",
          target: "_blank"
        }, "Web components"), ". Si quieres saber en detalle como funcionan y porque, dirigete a la", React.createElement(_code2.Link, {
          href: "/web-components"
        }, " Secci\u00F3n de Web Components.")), React.createElement("p", null, "Abrimos el objeto Page creado en el m\u00F3dulo y agregaremos un mensaje simple que diga: ", React.createElement("strong", null, "Bienvenido!")), React.createElement("p", null, "A continuaci\u00F3n, haremos los ajustes necesarios para redireccionar a nuestro m\u00F3dulo de bienvenida, luego de iniciar sesion. Lo que debemos hacer, es importar el objeto \"routing\" de", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " para usar el m\u00E9todo", React.createElement("span", {
          className: "code-inline"
        }, "pushState"), " que proveey  y navegar a la p\u00E1gina de bienvenida que creamos."), React.createElement("h4", null, "Importaci\u00F3n"), React.createElement(_code.Code, {
          language: "ts"
        }, `import {routing} from "@beyond-js/kernel/routing/ts";`), React.createElement("h4", null, " Navegaci\u00F3n en metodo onSubmit"), React.createElement(_code.Code, {
          language: "ts"
        }, `routing.pushState('/welcome');`), React.createElement("p", null, "\u00A1Listo! Si volvemos a probar nuestro formulario, podremos iniciar sesi\u00F3n y ver como nos dirigimos a la p\u00E1gina de bienvenida."));
      }
    }
  });
  /*************************************************
  INTERNAL MODULE: ./views/tutorial/templates/bridge
  *************************************************/

  modules.set('./views/tutorial/templates/bridge', {
    hash: 2772175095,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bridgeCode = void 0;
      const bridgeCode = `
const data = {
    user: 'admin',
    password: '123456.'
}

export /*actions*//*bundle*/
class Auth {

    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}
`;
      exports.bridgeCode = bridgeCode;
    }
  });
  /******************************************************
  INTERNAL MODULE: ./views/tutorial/templates/module.json
  ******************************************************/

  modules.set('./views/tutorial/templates/module.json', {
    hash: 4229489752,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.moduleJson = void 0;
      const moduleJson = {
        bridge: `  "platforms": [
    "backend",
    "web"
  ],
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
   "widget": ...    
    `,
        module: `{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  },
  "widget": {
    "is": "page",
    "route": "/",
    "element": {
      "name": "home-page"
    },
    "scss": {
      "path": "scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}
`
      };
      exports.moduleJson = moduleJson;
    }
  });
  /************************************************************
  INTERNAL MODULE: ./views/tutorial/templates/page-code-started
  ************************************************************/

  modules.set('./views/tutorial/templates/page-code-started', {
    hash: 2302254350,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageCodeStarted = void 0;
      const PageCodeStarted = `
import * as React from "react";

interface IForm {
    disabled?: boolean;
}

export /*bridge*/
function Page(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }
     return (
        <div className="page__container">
            <form>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}`;
      exports.PageCodeStarted = PageCodeStarted;
    }
  });
  /****************************************************
  INTERNAL MODULE: ./views/tutorial/templates/page-code
  ****************************************************/

  modules.set('./views/tutorial/templates/page-code', {
    hash: 2100269388,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageCode = void 0;
      const PageCode = `
import * as React from "react";
import {Auth} from "@testing/login/home/bridge";

interface IForm {
    disabled?: boolean;
}
const model = new Auth();
export /*bridge*/
function Page(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }
      const onSubmit = async event => {
        try {
            event.preventDefault();
            const response = await model.login(username, password);
            if (response.data?.valid) {
                console.log('iniciamos sesion');
                return;
            }
            setError(response.error);
        } catch (e) {
            console.log(e)
        }
    }

     return (
        <div className="page__container">
            <form onSubmit={onSubmit}>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
`;
      exports.PageCode = PageCode;
    }
  });
  /******************************************************
  INTERNAL MODULE: ./views/tutorial/templates/page-styles
  ******************************************************/

  modules.set('./views/tutorial/templates/page-styles', {
    hash: 2057643850,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pageStyles = void 0;
      const pageStyles = `
.page__container {
  display: flex;
  padding: 20px;
  height: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  .form__error {
    padding: 15px;
    display: grid;
    background: var(--error);
    color: var(--text-on-primary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: var(--element-bg);
    padding: 30px;
    width: 100%;
    max-width: 500px;

    input {
      padding: 8px;
      border: 1px solid var(--gray-light);
      transition: all 300ms ease-in;

      &:hover, &:focus {
        outline: none;
        border-color: var(--primary);
      }
    }

    .form__actions {
      display: flex;
      justify-content: end;

      button {
        background: var(--primary);
        cursor: pointer;
        border: 1px solid var(--primary-dark);
        color: var(--text-on-primary);
        padding: .5rem 2rem;
        transition: all 300ms ease-in;

        &:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        &:hover {
          background: var(--primary-dark);
        }
      }
    }
  }

}

`;
      exports.pageStyles = pageStyles;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./views/tutorial/tutorial-page
  **********************************************/

  modules.set('./views/tutorial/tutorial-page', {
    hash: 1717046378,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialPage = TutorialPage;

      var React = require("react");

      var _createProject = require("./create-project");

      var _moduleReview = require("./module-review");

      var _bridgeSection = require("./bridge-section");

      var _intro = require("./intro");

      var _dashboard = require("./dashboard");

      var _homeModule = require("./home-module");

      var _tRouting = require("./t-routing");

      function TutorialPage() {
        return React.createElement("div", {
          className: "content"
        }, React.createElement(_intro.TutorialIntro, null), React.createElement(_dashboard.TDashboard, null), React.createElement(_createProject.CreateProject, null), React.createElement(_homeModule.HomeModule, null), React.createElement(_moduleReview.ModuleReview, null), React.createElement(_bridgeSection.BridgeSection, null), React.createElement(_tRouting.TRouting, null));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./views/type-property
  *************************************/

  modules.set('./views/type-property', {
    hash: 130317734,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TypeProperty = TypeProperty;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function TypeProperty({
        type,
        href = false,
        optional = false
      }) {
        const output = href ? React.createElement(_code.Link, {
          href: href
        }, `<${type}>`, " ") : `<${type}> `;
        return React.createElement("span", {
          className: "type__property"
        }, output, optional && React.createElement("span", {
          className: "type__optional"
        }, "[optional] ", " "));
      }
    }
  });
  /***************************************
  INTERNAL MODULE: ./views/what-is/what-is
  ***************************************/

  modules.set('./views/what-is/what-is', {
    hash: 1657592843,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WhatIs = WhatIs;

      var React = require("react");

      function WhatIs() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "\u00BFQue es Beyond?"), React.createElement("p", null, "BeyondJS es un meta-framework para el desarrollo de aplicaciones con tecnolog\u00EDa web, focalizado en permitir de una manera sencilla la posibilidad de utilizar Javascript como un lenguaje universal, que es en definitiva, su comportamiento por naturaleza pero que, debido a la diversidad de usos y herramientas existentes no existe hoy una forma sencilla de crear proyectos que si sean universales."), React.createElement("h2", {
          id: "goals"
        }, "Goals"), React.createElement("ul", null, React.createElement("li", null, "Crear proyectos compatibles con cualquier entorno, utilizando el mismo criterio de desarrollo."), React.createElement("li", null, " Permitir que los paquetes, proyectos, librerias puedan ser consumidos de forma directa desde cualquier otro proyecto una vez realizada su publicaci\u00F3n, sin necesidad de pasar por alg\u00FAn proceso de transpilaci\u00F3n."), React.createElement("li", null, "Foco en la productividad: Integrar todas las herramientas necesarias para el desarrollo de manera eficiente. (Desarrollar)")));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.CSR = require('./basic/rendering/csr').CSR;
    _exports.RenderingPage = require('./basic/rendering/index').RenderingPage;
    _exports.SR = require('./basic/rendering/sr').SR;
    _exports.Controller = require('./controller').Controller;
    _exports.ContentsPage = require('./page').ContentsPage;
    _exports.useContent = require('./use-content').useContent;
    _exports.BeyondName = require('./views/beyond').BeyondName;
    _exports.Page = require('./views/page').Page;
    _exports.RightAside = require('./views/right-aside/index').RightAside;
  };

  let CSR, RenderingPage, SR, Controller, ContentsPage, useContent, BeyondName, Page, RightAside; // Module exports

  _exports2.RightAside = RightAside;
  _exports2.Page = Page;
  _exports2.BeyondName = BeyondName;
  _exports2.useContent = useContent;
  _exports2.ContentsPage = ContentsPage;
  _exports2.Controller = Controller;
  _exports2.SR = SR;
  _exports2.RenderingPage = RenderingPage;
  _exports2.CSR = CSR;

  __pkg.exports.process = function (require) {
    _exports2.CSR = CSR = require('./basic/rendering/csr').CSR;
    _exports2.RenderingPage = RenderingPage = require('./basic/rendering/index').RenderingPage;
    _exports2.SR = SR = require('./basic/rendering/sr').SR;
    _exports2.Controller = Controller = require('./controller').Controller;
    _exports2.ContentsPage = ContentsPage = require('./page').ContentsPage;
    _exports2.useContent = useContent = require('./use-content').useContent;
    _exports2.BeyondName = BeyondName = require('./views/beyond').BeyondName;
    _exports2.Page = Page = require('./views/page').Page;
    _exports2.RightAside = RightAside = require('./views/right-aside/index').RightAside;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});