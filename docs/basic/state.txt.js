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
    "module": "@beyond/docs/docs/basic/state",
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
    "module": "@beyond/docs/docs/basic/state",
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
    hash: 3343491085,
    creator: function (require, exports) {
      exports.txt = {
        "handling": {
          "h1#State-handling": "State Handling",
          "p1": "The state is the representation of the rendered values of a component or widget on the screen. It migth mutate and vary due to various factors, such as data updates from a server or user interaction.",
          "p2": {
            "s1": "There are numerous libraries for managing the state of a project, generally associated with the ",
            "l1": ["/docs/widgets", "View Framework"],
            "s2": " at use. BeyondJS allows the integration of the state management tool you want, as long as is prepared for modular operation."
          },
          "q1": {
            "s1": "You can see a working example of a counter that shares state handling between a component built with <strong>React</strong>, one built in with <strong>Svelte</strong>, and one built in with <strong>Vue</strong> in This example.",
            "l1": ["/examples/sm/counter", " This example"]
          },
          "p3": {
            "s1": "Also, BeyondJS defines a structure for state handling. The object that handles the state must be made available via the widget controller's createWidgetStore method. This method must return an object that implements the ",
            "l1": ["/api/IWidgetStore", "IWidgetStore"],
            "s2": " interface, especially if is expected to work along with SSR."
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