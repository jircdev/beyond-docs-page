System.register(["@beyond-js/kernel@0.1.7/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 3829111871,
        creator: function (require, exports) {
          exports.txt = {
            "copyMessage": "Comando copiado",
            "header": {
              "notice": "Versión beta",
              "title": "Crea módulos pensando en el futuro",
              "subtitle": "El único framework compatible con todos los entornos JavaScript."
            },
            "whatIs": {
              "title": "Por qué elegir BeyondJS",
              "links": {
                "why": "Conocer mas",
                "github": "Github"
              },
              "what": "BeyondJS es un meta-framework que provee un Dev Server para desarrollo y un CDN en producción, para consumir módulos desde cualquier entorno de ejecución de forma directa.",
              "startNow": "Comienza ahora"
            },
            "whatsIsItFor": {
              "title": "Programación módular basada en paquetes universales",
              "pretitle": "¿PARA QUÉ SIRVE?",
              "features": [{
                "title": "Librerías y paquetes",
                "description": "Que esperan ser consumidos por otros equipos de desarrolladores.",
                "icon": "libraries"
              }, {
                "title": " Micro Frontends / Microservices",
                "description": "De forma directa y sin configuraciones.",
                "icon": "microservices"
              }, {
                "title": "SPA / WPA / Hybrid APPs",
                "description": "Para móviles, de escritorio y webs.",
                "icon": "spa"
              }, {
                "title": "Widgets",
                "description": "Pudiendo elegir el renderizado que desees para cada componente.",
                "icon": "jamstack"
              }]
            },
            "technologies": {
              "title": "DESAROLLO UNIVERSAL"
            },
            "universalDevelopment": {
              "pretitle": "JAVASCRIPT ESTA EN TODOS LADOS",
              "title": "Desarollo Universal",
              "subTitle": "La misma experiencia para todo",
              "concept": "Misma base de código, misma experiencia de desarrollo y con poca curva de aprendizaje. Lleva la experiencia del desarrollo web a todos los ámbitos donde JavaScript tiene alcance.",
              "startNow": "Comenzar Ahora",
              "moreInfo": "Mas informacion"
            },
            "doYouWantMore": {
              "preTitle": "¿QUIERES CONOCER MÁS?",
              "title": "Más que un Framework,<br/> es BeyondJS",
              "features": [{
                "icon": "unification",
                "title": "Unificación",
                "description": "Permite consumir paquetes desde cualquier entorno."
              }, {
                "icon": "typescript",
                "title": "Typescript First",
                "description": "Posibilita la generación automática de tipos (archivos .d.ts) y realiza chequeo de tipos optimizados y sin necesidad de configuración."
              }, {
                "icon": "deployment",
                "title": "Deployment",
                "description": "Cuenta con <a href=\"https://workspace.beyondjs.com/\">BeyondJS Workspace</a> que gestiona el manejo de dependencias, el proceso de deployment y la gestión de errores."
              }, {
                "icon": "hmr",
                "title": "HMR",
                "description": "Se encuentra integrado automáticamente para Frontend y Backend."
              }, {
                "icon": "websocket",
                "title": "Web Socket",
                "description": "Está completamente listo para usar con generación de tipado para el código de interacción entre frontend y backend."
              }, {
                "icon": "esm",
                "title": "ESM estándar",
                "description": "Permite el desarrollo modular basado en Módulos ES, con generación automática de importmaps y SystemJS para proyectos en el Browser.",
                "moreInfo": {
                  "to": "",
                  "text": "Leer más"
                }
              }, {
                "icon": "checkmark",
                "title": "Todo lo que necesitas",
                "description": "BeyondJS es todo lo que necesitas: CSS, SASS, VUE, REACT, SVELTE compatibles entre sí y de forma natural."
              }, {
                "icon": "npm",
                "title": "Estándar NPM",
                "description": "Posee una optimización de paquetes npm que erradica el  “dependency hell” y asegurar la compatibilidad con las distintas formas de consumo de paquetes."
              }, {
                "icon": "rocket",
                "title": "Listo para el futuro",
                "description": "Está diseñado para agregar tecnologías y librerías emergentes."
              }]
            },
            "codepen": {
              "preTitle": "Y HAY MUCHO MÁS….",
              "title": "Widgets out-of-the-box",
              "subTitle": "Listos para usar",
              "description": "Integramos un widget con carga a demanda de React que inicialmente renderiza con SSR y te permite modificar los tipos de renderizado al instante (inspeccionalo).",
              "checkItOut": "¡Échale un vistazo al siguiente ejemplo!"
            },
            "gettingStarted": {
              "ready": "¿Listo para empezar?",
              "description": "¡Crea ahora tu propio proyecto y haz la diferencia!",
              "links": {
                "why": "¿Por que BeyondJS?",
                "github": "Ver en Github",
                "startNow": "Comience ahora"
              },
              "creatingAProject": "O creando un proyecto de forma directa"
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