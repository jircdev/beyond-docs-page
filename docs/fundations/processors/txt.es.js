define(["exports"], function (_exports2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.txt = _exports2.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/fundations/processors/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 4137727207,
    creator: function (require, exports) {
      exports.txt = {
        "processors": {
          "t1": "Procesadores",
          "p1": "Muchas de las herramientas o lenguajes utilizados en el entorno web requieren un procesamiento previo para ser interpretados por los navegadores o entornos de ejecución, este es el trabajo que realizan los procesadores.",
          "p2": "BeyondJS ofrece una serie de procesadores integrados, que permiten utilizar las principales tecnologías de la industria web y brinda soporte para que puedan integrarse nuevos procesadores en caso de que se requiera.",
          "p3": "BeyondJS trabaja distinto a empaquetadores como Webpack o Parcel. No necesita evaluar el arbol de dependencias de un proyecto, ni aplicar técnicas para separación de código o tree shaking. Gracias a su naturaleza módular y por medio de los procesadores, el empaquetado de código se hace a nivel de bundles.",
          "p4": {
            "t": "Los procesadores son componentes de BeyondJS que permiten interpretar, parsear, transpilar o compilar código (según sea el caso) de los lenguajes o tecnologías utilizadas en un",
            "link": ["/bundles", "Bundle"]
          }
        },
        "existingProcessors": {
          "t1": "Procesadores existentes",
          "items": ["ts: Permite trabajar con typescript y archivos `tsx` para react.", "sass: Brinda soporte para trabajar con archivos SASS de extensión <span class=\"inline\">.scss</span>", "vue: Brinda soporte para trabajar con archivos single-file-components de vue.", "svelte: Permite trabajar con archivos single-file-component de svelte."]
        },
        "properties": {
          "t1": "Propiedades",
          "p1": "Todos los procesadores cuentan con las siguientes propiedades:",
          "items": ["<strong>Path</strong> string opcional: Permite definir el directorio en donde se encuentran los archivos del procesador. Si se agrega un valor, el mismo es interpretado como un directorio de posición relativa a la ubicación del module.json definido.", "<strong>Files</strong> array opcional: Permite definir la lista de archivos o carpetas incluidos en el procesador. Si la propiedad path se encuentra definida, los archivos serán buscados adentro del directorio especificado, caso contrario, serán buscados de forma relativa a la ubicación del module.json. Se puede pasar como valor de la propiedad un arreglo con una entrada *, de esta forma se estaría indicando que se incluyen todos los archivos en el directorio especificado."]
        },
        "examples": {
          "t1": "Ejemplos",
          "p1": "El siguiente ejemplo, corresponde a la definición de un bundle de tipo code, a continuación explicamos el detalle:",
          "items": ["El bundle hace uso de dos procesadores: sass y ts.", "El procesador sass incluye todos los archivos en el directorio /code/scss el cual es relativo a la ubicación del archivo module.json.", "El procesador ts sólo incluye el archivo component.ts el cúal se encuentra en el directorio /code/ts relativo a la ubicación del archivo module.json."]
        }
      };
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.txt = require('./txt').txt;
  };

  let txt; // Module exports

  _exports2.txt = txt;

  __pkg.exports.process = function (require) {
    _exports2.txt = txt = require('./txt').txt;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});