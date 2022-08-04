define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/home",
    "multibundle": true,
    "bundle": "txt"
  }, __url).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2755411902,
    creator: function (require, exports) {
      exports.txt = {
        "header": {
          "pretitle": "Welcome to BeyondJS",
          "h1": "The Full Stack Modular + <br/>Universal \nTypescript Framework",
          "description": "Integrates different development stacks and works with them under the same paradigm, prioritizing the developer experience and modular loading, without the need for packagers..",
          "copied": "Copied to clipboard"
        },
        "solution": {
          "universalTs": {
            "title": "Typescript Universal",
            "description": {
              "one": "Designed to create from the same project, multiple distributions such as websites, web",
              "cordova": "Cordova applications",
              "npm": "NPM packages",
              "two": " and ",
              "node": "Node projects"
            }
          },
          "jamStack": {
            "title": "Jamstack y SSR",
            "one": "Ready to publish static sites, <strong>SSR</strong>, <strong>CSR</strong> or ",
            "jamStack": "Jamstack architecture,",
            "two": " with the possibility of using them together through  ",
            "microfrontends": "micro frontends"
          },
          "frameworks": {
            "title": "Frameworks Views",
            "start": "Compatible with ",
            "and": " and ",
            "end": "Prepared to include other frameworks or view management libraries."
          }
        },
        "universal": {
          "title": "Universal Development",
          "texts": "Focused on making both tools and techniques work for multiple distributions and technologies, in a simple way, creating microservices and micro frontends."
        },
        "config": {
          "preTitle": "Easy integration",
          "title": "Minimum configuration and modular load",
          "texts": "Without module bundle and in a modular structure that ensures on-demand loading without adding complexities as the project grows."
        },
        "plugAndPlay": {
          "title": "Plug & Play",
          "texts": "Modules can be restructured and moved from one project to another without the need for additional configuration."
        },
        "hmr": {
          "pretitle": "Service Management",
          "title": "HMR in Browser and Node",
          "texts": "Runtime update of client code and Node. BeyondJS manages Node services, to avoid restarting them when changes are made and to ensure the best possible development experience."
        },
        "realtime": {
          "pretitle": "REALTIME Conection",
          "title": "Real-time connection client & server/ server & server",
          "link": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
          "startText": "Automatically supported",
          "endText": "communication to connect the client code of a mobile or web project, with a node server or service."
        },
        "readMore": "Find out more",
        "learnMore": "Learn more",
        "experience": {
          "title": "Development expertise",
          "texts": "A total and integrating experience in the development of projects simultaneously, code editing, deployment, module creation and total platform and service management."
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/home",
    "multibundle": true,
    "bundle": "txt"
  }, __url).package('es');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2531504143,
    creator: function (require, exports) {
      exports.txt = {
        "header": {
          "notice": "Versión beta",
          "pretitle": "Welcome to BeyondJS",
          "h1": "The Full Stack Modular + <br/> universal \nTypescript Framework",
          "description": "Integra diferentes stacks de desarrollo y trabaja con ellos bajo el mismo paradigma, priorizando\n                            la experiencia de desarrollo y la carga modular, sin necesidad de empaquetadores.",
          "copied": "Copiado al portapapeles"
        },
        "solution": {
          "universalTs": {
            "title": "Typescript Universal",
            "description": {
              "one": "Diseñado para crear desde un mismo proyecto, múltiples distribuciones como sitios web, aplicaciones ",
              "cordova": "Cordova",
              "npm": "paquetes NPM",
              "two": " y proyectos ",
              "node": "Node"
            }
          },
          "jamStack": {
            "title": "Jamstack y SSR",
            "one": "Listo para publicar sitios estáticos, <strong>SSR</strong>, <strong>CSR</strong> o arquitecturas",
            "jamStack": "Jamstack",
            "two": " y con posibilidad de usarlas en conjunto por medio de ",
            "microfrontends": "micro frontends",
            "description": "  Listo para publicar sitios estáticos, <strong>SSR</strong>, <strong>CSR</strong> o arquitecturas <Elink href=\"https://jamstack.org/\">Jamstack</Elink> y con posibilidad de\n                usarlas en conjunto por medio de <Elink href=\"https://micro-frontends.org/\">micro frontends</Elink>"
          },
          "frameworks": {
            "title": "Frameworks de vistas",
            "start": "Compatible con ",
            "and": " and ",
            "end": "Preparado para incluir otros frameworks o librerías  de gestión de vistas."
          }
        },
        "universal": {
          "title": "Desarollo universal",
          "texts": "Enfocado en hacer que las mismas herramientas y técnicas funcionen para múltiples distribuciones y tecnologías de manera simple y en la creación de micro servicios y micro frontends."
        },
        "config": {
          "preTitle": "Integración simple",
          "title": "Mínima Configuración y carga modular",
          "texts": "Sin empaquetadores y en una estructura modular que asegura la carga a demanda sin agregar complejidades a medida que el proyecto crece."
        },
        "plugAndPlay": {
          "title": "Plug & Play",
          "texts": "Los módulos  pueden reestructurarse y moverse de un proyecto a otro sin necesidad de configuraciones adicionales."
        },
        "hmr": {
          "pretitle": "Gestión de servicios",
          "title": "HMR en Navegador y Node",
          "texts": "Actualización en tiempo de ejecución del código cliente y Node. BeyondJS gestiona los servicios Node para evitar el reinicio de los mismos cuando se realizan cambios y garantizar la mejor experiencia de desarrollo posibl"
        },
        "realtime": {
          "pretitle": "Conexión en tiempo real",
          "title": "Conexión Real-time cliente y servidor/ servidor y servidor",
          "link": "https://developer.mozilla.org/es/docs/Web/API/WebSockets_API",
          "startText": "Comunicación de ",
          "endText": "soportada de forma automática para conectar el código cliente de un proyecto móvil o web con un servidor o servicio node."
        },
        "readMore": "Leer más",
        "learnMore": "Aprender más",
        "experience": {
          "title": "Experiencia de desarrollo",
          "texts": "Una experiencia total e integradora en el desarrollo de proyectos en simultáneo, edición de código, deployment, creación de módulos y gestión total de plataformas y servicio."
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});