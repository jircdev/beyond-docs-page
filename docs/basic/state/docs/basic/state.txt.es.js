define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/state",
    "multibundle": true,
    "bundle": "txt"
  }).package('es');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 70664020,
    creator: function (require, exports) {
      exports.txt = {
        "handling": {
          "h1#State-handling": "Manejo de Estados",
          "p1": "El estado es la representación de los valores renderizados de un componente o widget en pantalla. Este puede mutar y variar por diversos factores, tales como la actualización de datos desde un servidor o la interacción del usuario.",
          "p2": {
            "s1": "Existen numerosas librerias para la gestión de estado de un proyecto, generalmente asociadas al ",
            "l1": ["/docs/widgets", "Framework de vista"],
            "s2": " que se esté utilizando. BeyondJS permite integrar la herramienta para manejo de estados que se desee, siempre que esta este preparada para el funcionamiento modular."
          },
          "q1": {
            "s1": "Puedes ver un ejemplo funcional de un contador que comparte el manejo de estado entre un componente creado con <strong>React</strong>, uno creado con <strong>Svelte</strong> y otro con <strong>Vue</strong> en ",
            "l1": ["/examples/sm/counter", " Este ejemplo"]
          },
          "p3": {
            "t1": "Asimismo, BeyondJS Define una estructura para el manejo de estado. El objeto que maneja el estado, debe ser disponibilizado por medio del método createWidgetStore del controlador del widget. Este método debe retornar un objeto que implemente la interfaz",
            "l1": ["/api/IWidgetStore", "IWidgetStore"],
            "t2": " esencialmente si se espera trabajar con ssr."
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