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
    "module": "@beyond/docs/docs/basic/bundles",
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
    hash: 1639663102,
    creator: function (require, exports) {
      exports.txt = {
        "bundles": {
          "h1#bundles": "Bundles",
          "p0": "Un bundle representa el o los archivos compilados ya listos para ser incluidos en el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la configuración y son definidos como propiedades del objeto de configuración de un módulo, el cúal se encuentra en el archivo `module.json` de cada módulo creado.",
          "c1": "modulejson",
          "p01": "El código anterior, define un bundle de tipo code. Un modulo puede contener más de un bundle, para ello solo es necesario agregar otra propiedad con el nombre del bundle adicional. Es importante tener en cuenta que un módulo no puede contener dos bundles de un mismo tipo.",
          "p1": "Imagina que necesitas realizar la interfaz de un formulario de registro. El formulario de registro podría dividirse en dos capas:",
          "items": ["la interfaz de usuario basada en el código HTML y los estilos de la pantalla.", "La lógica asociada a validaciones y funcionalidades."],
          "p2": "Para poder llevar a cabo el desarrollo, es necesario crear algunos archivos en Typescript, que incluyan la lógica y elementos de la interfaz y otros archivos de estilo. En BeyondJS esto implica trabajar con al menos, dos procesadores básicos:ts y sass, el primero genera código javascript, el segundo genera código css.",
          "p3": "Un <strong>bundle</strong> representa el o los archivos compilados ya listos para ser incluidos en el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la configuración.",
          "p4": "Como se explicó anteriormente, la posibilidad de que un bundle genere uno o varios archivos finales, depende básicamente de los procesadores incluidos para su empaquetamiento, si es necesario crear sólo código JavaScript se genera un único archivo, si por el contrario se necesita tambien código CSS se generan dos archivos.",
          "p5": "Los bundles están compuestos por procesadores y BeyondJS ofrece la posibilidad a los desarrolladores de poder crear sus propios bundles."
        },
        "transversal": {
          "h2#transversalBundles": "Bundles Transversales",
          "p1": "Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que ofrece ventajas productivas: el código de un bundle transversal es compilado en un archivo único.",
          "p2": "BeyondJS los ubica, integra y unifica en un único bundle o archivo final. Los bundle de tipo start son un ejemplo claro de ello, permiten al programador definir la lógica que desea sea ejecutada en el arranque de la aplicación."
        },
        "types": {
          "h2#types": "Tipos",
          "items": [{
            "s1": "<strong>Widget</strong>: ontienen el código de un web-component. Las páginas y los layouts son manejados como widgets. Puedes leer más acerca de este tipo de bundle en la sección de ",
            "l1": ["/docs/widgets", "Widgets."]
          }, "<strong>Code</strong>: Bundle que permite crear funcionalidades diversas para ser consumidas desde otro bundle o módulo. Soporta la integración de múltiples procesadores.", "<strong>TS (TypeScript)</strong>: Sólo soporta el procesador para manejo de archivos typescript.", "<strong>Bridge</strong>: Bundle de código backend, que genera código cliente y disponibiliza la conexión websocket para conectar el cliente y el backend..", "<strong>Backend</strong>: Sólo soporta código que va a ser ejecutado en entornos de ejecución cómo <strong>Node</strong> o <strong>Rhino</strong>.", "<strong>Vue</strong>:Bundle específico para manejo de módulos con el Framework Vue.", "<strong>Svelte</strong>: Svelte y su estructura de single file component.", "<strong>Start</strong>: Bundle transversal, útil si se requiere ejecutar lógica en el arranque del aplicativo.", "<strong>Txt-start</strong>: Bundle transversal, que permite manejar textos multilenguajes requeridos en el arranque del aplicativo."]
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