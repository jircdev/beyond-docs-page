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
          "vspecifier": "@beyond/docs@1/docs/basic/backend",
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
        hash: 2438134876,
        creator: function (require, exports) {
          exports.txt = {
            "code": {
              "h1#backendCode": ["Conceptos básicos", "Código Backend"],
              "p1": "BeyondJS disponibiliza un entorno seguro y eficiente pare crear código backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas específicas o que busque implementar una conexión de un proyecto cliente con una api backend.",
              "p2": "Para efectos de BeyondJS, podemos clasificar estas estructuras de código en dos tipos:",
              "items": ["<strong>Servicios Backend</strong>: Código node que representa un servicio en ejecución en el backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend", "<strong>Api backend</strong>: permiten la conexión entre el código backend y el código cliente."]
            },
            "server": {
              "h2#apiServerBundleBridge": "Api Servidor",
              "h3#apiServerBundleBridge": "Bundle <span class=\"inline\">bridge</span>",
              "p1": {
                "s1": "Las APIs servidor en BeyondJS representan funciones que ejecutan código en el servidor y pueden ser consumidas desde el código cliente. Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple, con la creación de un ",
                "l1": ["/bundles#bridge", "Bundle Bridge"]
              },
              "q1": {
                "s1": "Para que se pueda ejecutar código Backend en BeyondJS es necesario tener configuradas las distribuciones necesarias. Si el proyecto se creo a partir del tipo de proyecto web-backend, la misma ya se encuentra configurada. Puedes encontrar más información en ",
                "l1": ["/docs/distributions", "La seccion de distribuciones"]
              },
              "c1": "tpl1",
              "p2": {
                "s1": "Al igual que cualquier módulo o bundle, este puede ser gestionado desde el ",
                "l1": ["/dashboard", "Dashboard"],
                "s2": " o de forma manual."
              },
              "p3": "Cómo su nombre lo indica, el bundle de tipo <strong>bridge</strong>, sirve de puente entre la lógica cliente y la lógica servidor. Generalmente, en el servidor se impmenentan lógicas asociadas al manejo de datos o manipulación de archivos, el bridge Permite implementar y dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas en el servidor aquellas que no.",
              "p4": "El codigo de un bundle bridge luce asi:",
              "c2": "tpl2",
              "p5": "Un objeto Javascript común y corriente ¿Verdad?",
              "p6": "BeyondJS genera un objeto cliente que realiza la conexión web-socket al servidor, ejecuta el código implementado por el desarrollador y deja disponible la respuesta en el código cliente, abstrayendo al programador de la necesidad de procuparse por la conexión entre las capas cliente y servidor y permitiendo que el código funcione como parte de un mismo ecosistema.",
              "p7": {
                "s1": "Ahora sólo es necesario inicializar el servidor. Para ello es necesario crear un módulo con un bundle start que se encargue de iniciar el ",
                "l1": ["/docs/bee", "BEE"],
                "s2": ". El código del bundle start es el siguiente:"
              },
              "c3": "tpl3",
              "q2": {
                "s1": "En el ",
                "l1": ["/tutorial/web", "Tutorial Web"],
                "s2": "disponible, se implementa un bridge que permite ver en acción el funcionamiento de las <strong>apis backend</strong> de BeyondJS."
              }
            },
            "comments": {
              "h3#bundleBackend": ["Comentarios mágicos", "Bundle <span className=\"inline\">backend</span>"],
              "p1": "Los bundles backend representan código javascript que es ejecutado en el servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras palabras, representan cualquier servicio típico de NodeJS, con la salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso BeyondJS lo cual aumenta la productividad al poder trabajar con <strong>HMR</strong> de forma automatizada y sin configuración."
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