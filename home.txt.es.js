System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/home",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 1992588442,
        creator: function (require, exports) {
          exports.txt = {
            "header": {
              "notice": "Versión beta",
              "pretitle": "Welcome to BeyondJS",
              "h1": "PAQUETES UNIVERSALES",
              "description": "Programa lo que deseas, ejecutalo donde quieras.",
              "copied": "Copiado al portapapeles"
            },
            "solution": {
              "universalTs": {
                "title": "Typescript first",
                "description": {
                  "one": "Diseñado para trabajar con typescript por defecto, con generación de tipos (.d.ts) y chequeo de tipado de forma automática y optimizada, sin necesidad de configruaciones.",
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
              "texts": "Enfocado en establecer una forma consistente para el desarrollo de módulos/paquetes universales y con super poderes, siguiendo el ecosistema de NPM + NodeJS."
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
              "texts": "BeyondJS provee un workspace para mejorar la experiencia de desarrollo, que te permite, gestionar proyectos en simultáneo, detectar y corregir errores de forma eficiente y gestionar el proceso de deployment y publicación de paquetes."
            }
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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