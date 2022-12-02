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
          "vspecifier": "@beyond/docs@1/docs/starting/quick-start",
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
        hash: 171987702,
        creator: function (require, exports) {
          exports.txt = {
            "requires": {
              "h1#quick-start": ["Conceptos básicos", "Inicio rápido"],
              "h4": "Prerequisitos",
              "items1": ["Node ^14.17.4.", "Estar familiarizado con manejadores de dependencias como npm o yarn."]
            },
            "global": {
              "h2": "Instalación global",
              "p7": "Para instalar BeyondJS globalmente, se debe correr el siguiente comando:",
              "c4": "npm2",
              "p8": "A partir de la instalación, sólo es necesario ir a la carpeta en donde se desee crear el o los proyectos e inicializar BeyondJS desde la línea de comandos de la siguiente forma:",
              "c5": "beyond",
              "p9": {
                "s1": "Si todo sale bien, aparecerá un mensaje diciendo que BeyondJS se está ejecutando y que puedes acceder al dashboard en ",
                "l1": ["http://localhost:4000", "http://localhost:4000"],
                "s2": ", desde donde se podrá crear un proyecto por medio de la interfaz gráfica del dashboard.\n"
              },
              "p10": {
                "s1": "Ya en el Dashboard, puedes crear un proyecto desde la interfaz gráfica, puedes ver cómo hacerlo ",
                "l1": ["/docs/projects/create", "aqui"],
                "s2": "."
              }
            },
            "create": {
              "h2#create-project": "`@beyond-js/create-project`",
              "p1": "Para empezar, posiblemente la manera más sencilla de arrancar un proyecto en BeyondJS sea por medio del `@beyond-js/create-project`.",
              "c1": "npx1",
              "h4#command": "Opciones del comando",
              "p2": "A continuación, se listan las banderas que pueden ser utilizadas al instalar  `@beyond-js/create-project`.",
              "items2": [{
                "s1": "-name: Permite definir el scope y nombre del proyecto. Los proyectos, siguen el estándar de NPM, puedes leer más sobre ello",
                "e1": ["https://docs.npmjs.com/cli/v8/using-npm/scope", "here"],
                "s2": "."
              }, {
                "s1": "-type: Permite definir el tipo de proyecto a crear, es opcional, sino se pasa se crea un proyecto de tipo web por defecto. Los valores aceptados son",
                "items": ["web", "node", "backend", "library", "web-backend"],
                "p1": {
                  "s1": "YPuedes leer más información sobre los tipos de proyecto ",
                  "l1": ["/docs/projects/create#type-projects", "here"],
                  "s2": "."
                }
              }, "-container: Permite especificar si se desea agregar una carpeta contenedora de proyectos. Recuerde que BeyondJS soporta la posibilidad de manejar múltiples proyectos en simultáneo."],
              "p3": "Para ejemplificar, se puede imaginar que se necesita crear un proyecto login de tipo node, lo podríamos crear con el siguiente comando:",
              "c2": "npx2",
              "p4": "Al finalizar la ejecución del comando, se debió crear la estructura del proyecto y ya estaría listo para ser ejecutado.",
              "p5": "Para levantar el servidor de desarrollo, se ejecuta el siguiente comando:",
              "c3": "npm1",
              "p6": {
                "s1": "¡Listo! Ya se puede comenzar a programar y probar el proyecto. Se puede acceder al dashboard desde ",
                "l1": ["http://localhost:4000", "http://localhost:4000"],
                "s2": "y el proyecto creado se encuentra disponible en ",
                "l2": ["http://localhost:6500", "http://localhost:6500"]
              },
              "q1": {
                "s1": "El dashboard es un sistema que BeyondJS provee para brindar al desarrollador una mejor experiencia de usuario. Puedes leer más sobre el ",
                "l1": ["/docs/dashboard", "aquí"],
                "s2": "."
              }
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