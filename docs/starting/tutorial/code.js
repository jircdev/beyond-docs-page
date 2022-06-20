define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/ui/icons/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TutorialRouting = _exports.TutorialIntro = _exports.TutorialFirstModule = _exports.TutorialBridge = _exports.TutorialBackend = _exports.Original = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/starting/tutorial/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code", "@beyond/docs/code/code", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond/docs/ui/icons/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/docs/starting/tutorial/code');

  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./backend/index
  *******************************/

  ims.set('./backend/index', {
    hash: 2386894949,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialBackend = TutorialBackend;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var _templates = require("../templates");
      /*bundle*/


      function TutorialBackend() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "backendLogic"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "backendInitialization",
          tpls: _templates.tpls.backend,
          nextLinks: [["Bridge", "/docs/tutorial/bridge"]]
        }));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./bridge/index copy 2
  *************************************/

  ims.set('./bridge/index copy 2', {
    hash: 374072105,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialBridge = TutorialBridge;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _bridge = require("../templates/bridge");

      var _code2 = require("@beyond/ui/link/code");

      var _code3 = require("@beyond/docs/components/html/code");

      var _pageCode = require("../templates/page-code");
      /*bundle*/


      function TutorialBridge() {
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
        }, " Dashboard"), " y darle al bot\u00F3n de ejecuci\u00F3n, que podemos encontrar en la pantalla de detalle del proyecto."), React.createElement("p", null, "y otro en el detalle del proyecto:"), React.createElement(_code3.ModalImage, {
          src: "/images/dashboard/v1/bee.png",
          alt: "bee service"
        }), React.createElement("div", {
          className: "block__note"
        }, React.createElement("strong", null, "El Dashboard"), " es una herramienta muy potente provista por BeyondJS. Puedes aprender m\u00E1s acerca de esto en ", React.createElement(_code2.Link, {
          href: "/docs/dashboard"
        }, "la secci\u00F3n de detalle"), "."), React.createElement("p", null, "Para poder implementar la funcionalidad de login con nuestro servidor, debemos importar nuestro objeto auth en el c\u00F3digo cliente y asociar el evento ", React.createElement("span", {
          className: "inline-code"
        }, "onSubmit"), " a nuestro formulario."), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "En beyondJS"), " los proyectos siguen las mismas directrices para espacificaci\u00F3n y resoluci\u00F3n de nombres y paquetes que npm, de la misma forma que lo hace typescript. Deben tener ", React.createElement("strong", null, "nombre"), " de m\u00F3dulo y pueden manejar un", React.createElement("strong", null, "scope"), " tambien. En nuestro caso, definimos ambos al momento de crear nuestro proyecto y m\u00F3dulo respectivamente."), React.createElement("p", null, "A continuaci\u00F3n, en nuestro componente ", React.createElement("span", {
          className: "inline_code"
        }, "Page"), " importamos el objeto ", React.createElement("span", {
          className: "inline_code"
        }, "Auth")), React.createElement(_code.Code, {
          language: "typescript"
        }, `import {Auth} from "@testing/login/home/bridge";`), React.createElement("p", null, "Agregamos nuestra funci\u00F3n ", React.createElement("span", {
          className: "inline-code"
        }, "onSubmit"), "y la asociamos al formulario, nuestro c\u00F3digo debe quedar de la siguiente forma:"), React.createElement(_code.Code, {
          language: "typescript"
        }, _pageCode.PageCode), React.createElement("p", null, "Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que indica que los datos fueron validados y se puede iniciar sesi\u00F3n, si por el contrario, agregamos datos incorrectos, podremos ver como aparece el mensaje de error \"Invalid data\" el cual actualizamos en la variable de estado del componente."), React.createElement("h4", null, "Resumen"), React.createElement("ul", null, React.createElement("li", null, "Creamos un m\u00F3dulo con un widget de tipo page"), React.createElement("li", null, "Creamos una conexi\u00F3n con un backend node por medio del bundle bridge"), React.createElement("li", null, "Repasamos la estructura de resoluci\u00F3n de m\u00F3dulos para importar el bridge Auth y poder agregar la validaci\u00F3n de inicio de sesi\u00F3n")), React.createElement("p", null, "Ahora s\u00F3lo nos falta redireccionar al usuario a una pantalla de bienvenida."));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./bridge/index copy
  ***********************************/

  ims.set('./bridge/index copy', {
    hash: 3737890251,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialBridge = TutorialBridge;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function TutorialBridge() {
        return React.createElement(_code.Document, {
          nextLinks: [['First Module', '/docs/tutorial/first-module'], ['Backend', '/docs/tutorial/backend']],
          moduleId: _beyond_context.module.resource,
          textId: "bridge"
        });
      }
    }
  });
  /******************************
  INTERNAL MODULE: ./bridge/index
  ******************************/

  ims.set('./bridge/index', {
    hash: 3708234636,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialBridge = TutorialBridge;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var _templates = require("../templates");
      /*bundle*/


      function TutorialBridge() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "bridgeCode",
          tpls: _templates.tpls.bridge
        }), React.createElement(_code.Document, {
          nextLinks: [['Routing', '/docs/tutorial/routing']],
          tpls: _templates.tpls.bridge,
          moduleId: _beyond_context.module.resource,
          textId: "connectClientAndServer"
        }));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./first-module/form
  ***********************************/

  ims.set('./first-module/form', {
    hash: 1611565448,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialHomeForm = TutorialHomeForm;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _pageCodeStarted = require("../templates/page-code-started");

      var _code2 = require("@beyond/ui/link/code");

      function TutorialHomeForm() {
        return React.createElement(React.Fragment, null, React.createElement("h3", null, "Creaci\u00F3n del Formulario"), React.createElement("p", null, "Si has trabajado con React, lo que viene es la parte que seguramente conoces mejor, con algunas sutilezas seguramente. A continuaci\u00F3n, editaremos nuestro archivo ", React.createElement("span", {
          className: "inline"
        }, "page.tsx"), " para crear un formulario de inicio de sesi\u00F3n y la funcionalidad b\u00E1sica para actualizar el estado."), React.createElement("h4", null, "Page.tsx"), React.createElement(_code.Code, {
          language: "tsx"
        }, _pageCodeStarted.PageCodeStarted), React.createElement("h3", {
          id: "styles"
        }, "Estilos"), React.createElement("p", null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " maneja los estilos por defecto con el preprocesador SASS, ahora vamos a nuestro archivo", React.createElement("span", {
          className: "inline-code"
        }, " styles.scss"), " y agreguemos un poco de estilo al formulario."), React.createElement("div", {
          className: "block__note"
        }, "SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podr\u00E1s encontrar los detalles en ", React.createElement(_code2.Link, {
          href: "/processors"
        }, "La secci\u00F3n de procesadores.")));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./first-module/index
  ************************************/

  ims.set('./first-module/index', {
    hash: 2973489056,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialFirstModule = TutorialFirstModule;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var _templates = require("../templates");
      /*bundle*/


      function TutorialFirstModule() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: _templates.tpls.module,
          moduleId: _beyond_context.module.resource,
          textId: "firstModule"
        }), React.createElement(_code.Document, {
          tpls: _templates.tpls.module,
          moduleId: _beyond_context.module.resource,
          textId: "formCreation"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "styles",
          tpls: _templates.tpls.module,
          nextLinks: [['Backend', '/docs/tutorial/backend']]
        }));
      }
    }
  });
  /************************************
  INTERNAL MODULE: ./first-module/intro
  ************************************/

  ims.set('./first-module/intro', {
    hash: 4093004341,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialFirstModuleIntro = TutorialFirstModuleIntro;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      function TutorialFirstModuleIntro() {
        return React.createElement(React.Fragment, null, React.createElement("h2", {
          id: "create-module"
        }, "M\u00F3dulo Inicial"), React.createElement("p", null, "El proyecto trae un m\u00F3dulo ", React.createElement("span", {
          className: "inline"
        }, "home"), " creado por defecto. Puedes verlo accediendo desde el navegador a ", React.createElement(_code.Elink, {
          href: "http://localhost:6500",
          target: "_blank"
        }, "localhost:6500 ")), React.createElement("div", {
          className: "block__note"
        }, "El puerto se define en el archivo ", React.createElement("span", {
          className: "inline"
        }, "project.json"), ", puedes leer m\u00E1s sobre ello en la secci\u00F3n de ", React.createElement(_code.Link, {
          href: "/docs/projects/json"
        }, "Configuraci\u00F3n de Proyectos"), "."), React.createElement("p", null, "La estructura del m\u00F3dulo es la siguiente: "), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "widget"), ": Carpeta en donde se encuentra el c\u00F3digo del componente ", React.createElement("span", {
          className: "inline"
        }, "page")), React.createElement("li", null, React.createElement("strong", null, "ts"), ":", React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "controller.tsx"), ": Objeto controlador del componente, requerido para poder montar el WebComponent en el navegador."), React.createElement("li", null, React.createElement("strong", null, "views/page.tsx"), ": Componente react que renderiza la p\u00E1gina"))), React.createElement("li", null, React.createElement("strong", null, "scss"), ": Carpeta para agregar estilos al m\u00F3dulo."), React.createElement("li", null, React.createElement("strong", null, "module.json"), ": Archivo de configuraci\u00F3n del m\u00F3dulo (Lugar para definir tipo de bundles y procesadores a utilizar).")), React.createElement("h4", null, "\u00A1Manos a la obra!"), React.createElement("p", null, "Teniendo clara la estructura, lo que procede a continuaci\u00F3n es crear el formulario de inicio de sesi\u00F3n y agregar algo de estilos, para luego continuar con la conexi\u00F3n al backend node."));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./first-module/styles
  *************************************/

  ims.set('./first-module/styles', {
    hash: 2063187084,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialHomeStyles = TutorialHomeStyles;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _pageStyles = require("../templates/page-styles");

      var _code2 = require("@beyond/ui/link/code");

      function TutorialHomeStyles() {
        return React.createElement(React.Fragment, null, React.createElement("h4", null, "styles.scss"), React.createElement(_code.Code, {
          language: "scss"
        }, _pageStyles.pageStyles), React.createElement("h4", null, "Expliquemos un poco el c\u00F3digo anterior"), React.createElement("ul", null, React.createElement("li", null, "Agregamos estilo b\u00E1sico al formulario, los inputs, el bot\u00F3n de env\u00EDo y para manejar un mensaje de error."), React.createElement("li", null, React.createElement("strong", null, "Custom properties:"), " las custom properties utilizadas, son una estructura b\u00E1sica para manejo de variables incluidas por beyond en el ", React.createElement(_code2.Link, {
          href: "/template"
        }, "Template del proyecto"))));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./intro/content
  *******************************/

  ims.set('./intro/content', {
    hash: 2252595082,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Content = Content;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _code2 = require("@beyond/docs/code/code");

      var _code3 = require("@beyond/ui/link/code");

      function Content() {
        return React.createElement(React.Fragment, null, React.createElement("h1", null, "Tutorial: Proyecto Web "), React.createElement(_code.Render, {
          content: texts
        }), React.createElement("h2", {
          id: "before-start"
        }, "Antes de Empezar"), React.createElement("p", null, "Este tutorial busca el flujo principal de desarrollo con ", React.createElement(_code.BeyondName, null), " y demostrar de manera clara los beneficios que este ofrece. Est\u00E1 creado para personas que deseen aprender mientras practican, por tanto, los conceptos que definen la estructura de ", React.createElement(_code.BeyondName, null), " son abordados de forma general, focalizando en hacer un ejercicio r\u00E1pido, conciso y claro. Para mayor detalle los conceptos estar\u00E1n disponbiles en la documentaci\u00F3n cuando sea requerida."), React.createElement("p", null, "El tutorial se divide en las siguientes partes:"), React.createElement("ul", null, React.createElement("li", null, "El dashboard."), React.createElement("li", null, "Creaci\u00F3n de primer m\u00F3dulo."), React.createElement("li", null, "Integraci\u00F3n con backend."), React.createElement("li", null, "Enrutamiento.")), React.createElement("p", null, "Sugerimos que este sea completado para demostrar como en poco tiempo se logra integrar c\u00F3digo cliente y servidor, utilizando la misma estructura JavaScript."), React.createElement("p", null, "Antes de empezar, recomendamos la revisi\u00F3n de los siguientes conceptos para que est\u00E9n presentes a medida que se avanza."), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Bundle:"), " Representa un conjunto de archivos fuentes que generan un \u00FAnico archivo final, el cual es incluido en el navegador."), React.createElement("li", null, React.createElement("strong", null, "M\u00F3dulo:"), " Representa uno o m\u00FAltiples bundles."), React.createElement("li", null, React.createElement("strong", null, "Processor:"), " Representa el procesador, compilador o transpilador de c\u00F3digo de la tecnolog\u00EDa que se est\u00E1 utilizando.")), React.createElement("section", null, React.createElement("h2", {
          id: "starting"
        }, "Empezando"), React.createElement("p", null, "Lo primero que debe hacerse es crear el proyecto, para ello usaremos el paquete ", React.createElement("span", {
          className: "inline"
        }, "@beyond-js/create-project"), " se encarga de instalar BeyondJS de manera local y generar la estructura inicial de nuestro proyecto."), React.createElement(_code2.Code, {
          language: "shell"
        }, `> npx @beyond-js/create-project --name @testing/login --type web-backend --container beyond`), React.createElement("div", {
          className: "block__note"
        }, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), " est\u00E1 realizado para funcionar como dependencia global y correr varios proyectos en simult\u00E1neo, puedes aprender m\u00E1s sobre esto ", React.createElement(_code3.Link, {
          href: "/docs/quick-start"
        }, "aqui"), "."), React.createElement("p", null, "En el comando anterior, se solicit\u00F3 crear un proyecto de tipo web con backend y se le agreg\u00F3 como scope ", React.createElement("strong", null, "testing"), " y como nombre ", React.createElement("strong", null, "login"), "."), React.createElement("div", {
          className: "block__note"
        }, "El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma manual, el dashboard s\u00F3lo simplifica el proceso. Puedes ver la explicaci\u00F3n de ello en", React.createElement(_code3.Link, {
          href: "/project/config"
        }, " la secci\u00F3n de Configuraci\u00F3n de proyecto.")), React.createElement("p", null, "Al finalizar el comando, podremos ver que se crearon los siguientes archivos, podremos ver que se cre\u00F3 la carpeta ", React.createElement("span", {
          className: "inline"
        }, "beyond"), " que definimos como container y adentro de ella tendremos la siguiente estructura:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "beyond.json"), ": Archivo para manejar el servidor de desarrollo, gestionado por BeyondJS."), React.createElement("li", null, React.createElement("strong", null, "package.json"), ": Archivo de dependencias del proyecto"), React.createElement("li", null, React.createElement("strong", null, "projects.json"), ": Archivo de configuraci\u00F3n de proyectos, permite a BeyondJS identificar los proyectos a levantar."), React.createElement("li", null, React.createElement("strong", null, "login"), " Carpeta del proyecto.", React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "project.json:"), " Contiene la configuraci\u00F3n b\u00E1sica del proyecto (puede variar seg\u00FAn el tipo y las necesidades del mismo)."), React.createElement("li", null, React.createElement("strong", null, "/modules"), ": Carpeta en donde se crean los m\u00F3dulos del proyecto por defecto. Este valor es configurable, puedes leer m\u00E1s de ello en la secci\u00F3n de ", React.createElement(_code3.Link, {
          href: "/docs/projects/json"
        }, "Configuraci\u00F3n de Proyectos"), "."), React.createElement("li", null, React.createElement("strong", null, "template:"), " Esta carpeta contiene todos los elementos necesarios para definir el template general del proyecto.", React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "template.json:"), " Archivo que permite realizar ajustes en la configuraci\u00F3n del template del proyecto.")))))), React.createElement("div", {
          className: "block__note"
        }, "Puedes aprender m\u00E1s acerca de los tipos de proyecto disponibles en la secci\u00F3n de ", React.createElement(_code3.Link, {
          href: "/docs/quick-start"
        }, "Inicio R\u00E1pido"), "."), React.createElement("p", null, "Luego de haber ejecutado el comando, ya estamos listos para empezar nuestro proyecto, para ello ejecutamos lo siguiente."), React.createElement(_code2.Code, {
          language: "shell"
        }, `> npm start`)));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./intro/index
  *****************************/

  ims.set('./intro/index', {
    hash: 3024188823,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialIntro = TutorialIntro;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var _templates = require("../templates");
      /*bundle*/


      function TutorialIntro() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "intro"
        }), React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "starting",
          tpls: _templates.tpls.starting,
          nextLinks: [["First Module", "/docs/tutorial/first-module"], ["Backend", "/docs/tutorial/backend"]]
        }));
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./routing/_original
  ***********************************/

  ims.set('./routing/_original', {
    hash: 3316782695,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Original = Original;

      var React = require("react");

      var _code = require("@beyond/docs/code/code");

      var _code2 = require("@beyond/ui/link/code");

      var _code3 = require("@beyond/docs/ui/icons/code");

      var _code4 = require("@beyond/docs/components/html/code");
      /*bundle*/


      function Original() {
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
        }), "Gestionar Template")), React.createElement("p", null, "Hacemos click en el icono para agregar m\u00F3dulos y se abrir\u00E1 un modal como el siguiente:"), React.createElement(_code4.ModalImage, {
          src: "/images/contents/create-module-1.png",
          alt: "Create module on beyond project"
        }), React.createElement("p", null, "Seleccionamos ", React.createElement("span", {
          className: "inline"
        }, "m\u00F3dulo en blanco"), ". y en la siguiente pantalla, nos pide el bundle, seleccionamos page: "), React.createElement(_code4.ModalImage, {
          src: "/images/contents/create-module-2.png",
          alt: "Create module on beyond project"
        }), React.createElement("p", null, "En la pantalla final, nos pedir\u00E1 algunos datos, a continuaci\u00F3n se explica que colocar:"), React.createElement(_code4.ModalImage, {
          src: "/images/contents/create-module-3.png",
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
        }, "pushState"), " que proveey y navegar a la p\u00E1gina de bienvenida que creamos."), React.createElement("h4", null, "Importaci\u00F3n"), React.createElement(_code.Code, {
          language: "ts"
        }, `import {routing} from "@beyond-js/kernel/routing/ts";`), React.createElement("h4", null, " Navegaci\u00F3n en metodo onSubmit"), React.createElement(_code.Code, {
          language: "ts"
        }, `routing.pushState('/welcome');`), React.createElement("p", null, "\u00A1Listo! Si volvemos a probar nuestro formulario, podremos iniciar sesi\u00F3n y ver como nos dirigimos a la p\u00E1gina de bienvenida."));
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./routing/index
  *******************************/

  ims.set('./routing/index', {
    hash: 1442551368,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TutorialRouting = TutorialRouting;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      var _templates = require("../templates");
      /*bundle*/


      function TutorialRouting() {
        return React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          tpls: _templates.tpls.routing,
          textId: "routing"
        });
      }
    }
  });
  /***********************************
  INTERNAL MODULE: ./templates/backend
  ***********************************/

  ims.set('./templates/backend', {
    hash: 3367338770,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.connection = void 0;

      var _pageCode = require("./page-code");

      var _bridge = require("./bridge");

      const tpl1 = `
import {Auth} from "@testing/login/home/bridge";
`;
      const connection = {
        view1: {
          title: 'view.tsx',
          tpl: tpl1
        },
        view2: {
          title: 'view.tsx',
          tpl: _pageCode.PageCode
        },
        bridge: {
          title: "bridge.ts",
          tpl: _bridge.bridgeCode
        }
      };
      exports.connection = connection;
    }
  });
  /**********************************
  INTERNAL MODULE: ./templates/bridge
  **********************************/

  ims.set('./templates/bridge', {
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
  /*********************************
  INTERNAL MODULE: ./templates/index
  *********************************/

  ims.set('./templates/index', {
    hash: 2929841451,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.tpls = void 0;

      var _pageStyles = require("./page-styles");

      var _start = require("./start");

      var _pageCodeStarted = require("./page-code-started");

      var _backend = require("./backend");

      var _routing = require("./routing");

      var _starting = require("./starting");

      const tpls = {
        starting: _starting.starting,
        module: {
          page: {
            title: "page.tsx",
            tpl: _pageCodeStarted.PageCodeStarted
          },
          styles: {
            title: "styles.scss",
            language: "css",
            tpl: _pageStyles.pageStyles
          }
        },
        backend: {
          module1: _start.backend.module1,
          module2: _start.backend.module2,
          platforms1: _start.backend.platform1,
          platforms2: _start.backend.platform2
        },
        routing: _routing.routing,
        bridge: _backend.connection
      };
      exports.tpls = tpls;
    }
  });
  /***************************************
  INTERNAL MODULE: ./templates/module.json
  ***************************************/

  ims.set('./templates/module.json', {
    hash: 1686211011,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.moduleJson = void 0;
      const moduleJson = {
        bridge: `
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
   "widget": ...    
    `,
        module: `
{
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
  /*********************************************
  INTERNAL MODULE: ./templates/page-code-started
  *********************************************/

  ims.set('./templates/page-code-started', {
    hash: 1239631844,
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

export /*page*/
function View(): JSX.Element {
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
  /*************************************
  INTERNAL MODULE: ./templates/page-code
  *************************************/

  ims.set('./templates/page-code', {
    hash: 2785092639,
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
export /*page*/
function View(): JSX.Element {
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
  /***************************************
  INTERNAL MODULE: ./templates/page-styles
  ***************************************/

  ims.set('./templates/page-styles', {
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
  /***********************************
  INTERNAL MODULE: ./templates/routing
  ***********************************/

  ims.set('./templates/routing', {
    hash: 2544939078,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.routing = void 0;
      const tpl1 = `
import {routing} from "@beyond-js/kernel/routing/ts";`;
      const tpl2 = `
routing.pushState('/welcome');`;
      const routing = {
        importing: {
          tpl: tpl1
        },
        pushState: {
          tpl: tpl2,
          title: 'view.tsx'
        }
      };
      exports.routing = routing;
    }
  });
  /*********************************
  INTERNAL MODULE: ./templates/start
  *********************************/

  ims.set('./templates/start', {
    hash: 1673004955,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.backend = void 0;
      const ts = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();
`;
      const tpl1 = `
{
  "bundle": "start",
  "platforms": "backend",
  "ts": {
    "files": "*"
  }
}`;
      const tpl2 = `
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
   "widget": ...    
    `;
      const tpl3 = `
{
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
}`;
      const backend = {
        module1: {
          title: "module.json",
          "language": "json",
          "tpl": tpl1
        },
        module2: {
          title: "start.ts",
          tpl: ts
        },
        platform1: {
          tpl: tpl2
        },
        platform2: {
          tpl: tpl3,
          title: "module.json",
          language: "json"
        }
      };
      exports.backend = backend;
    }
  });
  /************************************
  INTERNAL MODULE: ./templates/starting
  ************************************/

  ims.set('./templates/starting', {
    hash: 532617307,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.starting = void 0;
      const starting = {
        npx: {
          language: "shell",
          tpl: `npx @beyond-js/create-project --type web-backend --name @testing/login`
        }
      };
      exports.starting = starting;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./backend/index",
    "from": "TutorialBackend",
    "name": "TutorialBackend"
  }, {
    "im": "./bridge/index copy 2",
    "from": "TutorialBridge",
    "name": "TutorialBridge"
  }, {
    "im": "./bridge/index copy",
    "from": "TutorialBridge",
    "name": "TutorialBridge"
  }, {
    "im": "./bridge/index",
    "from": "TutorialBridge",
    "name": "TutorialBridge"
  }, {
    "im": "./first-module/index",
    "from": "TutorialFirstModule",
    "name": "TutorialFirstModule"
  }, {
    "im": "./intro/index",
    "from": "TutorialIntro",
    "name": "TutorialIntro"
  }, {
    "im": "./routing/_original",
    "from": "Original",
    "name": "Original"
  }, {
    "im": "./routing/index",
    "from": "TutorialRouting",
    "name": "TutorialRouting"
  }];
  let TutorialBackend, TutorialBridge, TutorialFirstModule, TutorialIntro, Original, TutorialRouting; // Module exports

  _exports.TutorialRouting = TutorialRouting;
  _exports.Original = Original;
  _exports.TutorialIntro = TutorialIntro;
  _exports.TutorialFirstModule = TutorialFirstModule;
  _exports.TutorialBridge = TutorialBridge;
  _exports.TutorialBackend = TutorialBackend;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'TutorialBackend') && (_exports.TutorialBackend = TutorialBackend = require ? require('./backend/index').TutorialBackend : value);
    (require || prop === 'TutorialBridge') && (_exports.TutorialBridge = TutorialBridge = require ? require('./bridge/index copy 2').TutorialBridge : value);
    (require || prop === 'TutorialBridge') && (_exports.TutorialBridge = TutorialBridge = require ? require('./bridge/index copy').TutorialBridge : value);
    (require || prop === 'TutorialBridge') && (_exports.TutorialBridge = TutorialBridge = require ? require('./bridge/index').TutorialBridge : value);
    (require || prop === 'TutorialFirstModule') && (_exports.TutorialFirstModule = TutorialFirstModule = require ? require('./first-module/index').TutorialFirstModule : value);
    (require || prop === 'TutorialIntro') && (_exports.TutorialIntro = TutorialIntro = require ? require('./intro/index').TutorialIntro : value);
    (require || prop === 'Original') && (_exports.Original = Original = require ? require('./routing/_original').Original : value);
    (require || prop === 'TutorialRouting') && (_exports.TutorialRouting = TutorialRouting = require ? require('./routing/index').TutorialRouting : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});