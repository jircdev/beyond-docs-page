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
    "module": "@beyond/docs/docs/foundations/dev-server",
    "multibundle": true,
    "bundle": "txt"
  }).package('es');

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0]]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1594036599,
    creator: function (require, exports) {
      exports.txt = {
        "server": {
          "h1#devServer": ["Fundamentos", "Servidor de desarrollo"],
          "p1": "El servidor de desarrollo de BeyondJS se inicia cuando se ejecuta el comando beyond y puede leer determinadas configuraciones a partir del archivo beyond.json, pero no es necesario para crearlo. BeyondJS está creado para que el programador trabaje haciendo uso del Dashboard y este gestiona la mayoría de las configuraciones habituales, que suelen tener que ver con el poder levantar algún proyecto.",
          "p2": {
            "s1": "Cuando el servidor de desarrollo se levanta, el Dashboard queda disponible para ser accedido desde ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": " y este genera y edita el archivo beyond.json cuando se crea, edita o elimina algún proyecto."
          }
        },
        "properties": {
          "h2#properties": "Propiedades",
          "items": [{
            "s1": "<strong>Applications</strong> ",
            "l1": ["/aoc", "AOC"],
            "s2": ": Recibe un arreglo con la lista de proyectos o aplicaciones configuradas para que BeyondJS pueda leearlas y levantarlas. Este archivo, es gestionado por BeyondJS si se hace uso del dashboard."
          }, "<strong>Bundles</strong> object: Permite configurar la inclusión de bundles creados por el programador.", {
            "s1": "<strong>Libraries</strong> ",
            "l1": ["/aoc", "AOC"],
            "s2": ": Arreglo de configuración de librerias BeyondJS a utilizar."
          }]
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