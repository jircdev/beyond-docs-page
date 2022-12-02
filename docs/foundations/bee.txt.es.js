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
          "vspecifier": "@beyond/docs@1/docs/foundations/bee",
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
        hash: 2199235079,
        creator: function (require, exports) {
          exports.txt = {
            "bee": {
              "h1#bee": ["Beyond Execution Environment", "BEE"],
              "p1": "Los BEE son procesos gestionados por BeyondJS. Se comportan como un servicio node, con la diferencia de que son gestionados por el servicio principal de Beyond, el cual analiza, revisa y compila los cambios en tiempo real para dejar disponible en memoria una nueva versión de los bundles con los cambios de código aplicados por medio de HMR, brindando la oportunidad de temer acceso a las funcionalidades de código actualizadas, sin necesidad de reiniciar el proceso node.",
              "p2": {
                "s1": "La actualización en tiempo real en el proceso Node ofrece ventajas en tiempo de ejecución pues evita realizar toda la carga a nivel de tiempo recursos que implica detener el proceso completo y volver a levantarlo, esto puede aplicar para valores en memoria o conexiones a bases de datos, por mencionar ejemplos. BeyondJS detecta los cambios en un archivo o ",
                "l1": ["/docs/modules#internal-modules", "Modulo interno"],
                "s2": "actualiza el cambio, realiza una compilación nueva del bundle en el momento y deja la nueva versión disponible para ser consumida."
              },
              "p3": "<strong>El flujo de funcionamiento del Bee es el siguiente:</strong>",
              "items": ["Beyond levanta el servicio.", "Se realiza un repaso del arbol de dependencias de los bundles (notar que es a nivel de bundles y no módulos internos).", "Se carga en memoria el código procesado y se agregan whatchers para poder detectar cambios.", "Si existe un cambio en un archivo, el mismo es detectado y se reemplaza ese segmento de código."],
              "q1": {
                "s1": "Los imports dinámicos no son cargados cuando el BEE levanta, sino que se solicitan a demanda."
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