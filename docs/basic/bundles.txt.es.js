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
          "vspecifier": "@beyond/docs@1/docs/basic/bundles",
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