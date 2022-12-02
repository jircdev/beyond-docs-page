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
          "vspecifier": "@beyond/docs@1/docs/foundations/hmr",
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
        hash: 1401750137,
        creator: function (require, exports) {
          exports.txt = {
            "hmr": {
              "h1": ["Fundamentos", "HMR"],
              "p1": "Todos los bundles exponen de forma automática un objeto hmr que le permite que el desarrollador pueda suscribirse a los cambios de código y persistir de esta forma el estado del proyecto en el que se encuentre, optimizando el proceso de desarrollo, pues se evita la necesidad de repetir nuevamente los flujos para llegar al estado actual.",
              "p2": "Para explicarlo mejor, supongamos que se está realizando una lógica de filtrado de elementos de una base de datos en un módulo backend, este módulo realiza los siguientes pasos:",
              "items": ["Realiza el login contra la base de datos.", "Realiza dos consultas a base de datos", "Retorna la información disponible para que el programador trabaje con ella.", "Genera una estructura de datos en la cual se integra toda la información consultada para que esta sea devuelta al cliente."],
              "p3": "La suscripción de cambios de parte del desarrollador con hmr, permite a este enfocarse en el último punto sin necesidad de repetir por cada cambio los primeros tres, lo cual significa una optimización en tiempo de pruebas bastante alta.",
              "p4": "La implementación de hmr se encarga de forma automática de realizar el reemplazo de contenido de un archivo en el mismo momento en el que este es cambiado, dejando disponible de manera inmediata la actualización del mismo, sin necesidad de realizar ninguna acción adicional y además, el programador puede suscribirse a estos cambios para definir que desea hacer a partir de ellos, ofreciendole la versatilidad de ejecutar funciones de manera automática ante cada cambio."
            },
            "events": {
              "h2": "Eventos",
              "items": ["change", "change: [nombre-procesador]"]
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