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
          "vspecifier": "@beyond/docs@1/docs/basic/state",
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
        hash: 3523339500,
        creator: function (require, exports) {
          exports.txt = {
            "handling": {
              "h1#State-handling": "Manejo de Estados",
              "p1": "El estado es la representación de los valores renderizados de un componente o widget en pantalla. Este puede mutar y variar por diversos factores, tales como la actualización de datos desde un servidor o la interacción del usuario.",
              "p2": {
                "s1": "Existen numerosas librerias para la gestión de estado de un proyecto, generalmente asociadas al ",
                "l1": ["/docs/widgets", "Framework de vista"],
                "s2": " que se esté utilizando. BeyondJS permite integrar la herramienta para manejo de estados que se desee, siempre que esta se encuentre preparada para el funcionamiento modular."
              },
              "q1": {
                "s1": "Puedes ver un ejemplo funcional de un contador que comparte el manejo de estado entre un componente creado con <strong>React</strong>, uno creado con <strong>Svelte</strong> y otro con <strong>Vue</strong> en ",
                "l1": ["/examples/sm/counter", " Este ejemplo."]
              },
              "p3": {
                "s1": "Asimismo, BeyondJS Define una estructura para el manejo de estado. El objeto que maneja el estado, debe ser disponibilizado por medio del método createWidgetStore del controlador del widget. Este método debe retornar un objeto que implemente la interfaz ",
                "l1": ["/api/IWidgetStore", "IWidgetStore"],
                "s2": " esencialmente si se espera trabajar con ssr."
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