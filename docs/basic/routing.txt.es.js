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
          "vspecifier": "@beyond/docs@1/docs/basic/routing",
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
        hash: 1958736318,
        creator: function (require, exports) {
          exports.txt = {
            "routing": {
              "h1": "Enrutamiento",
              "p1": {
                "s1": "BeyondJS tiene un manejo de rutas simple y potente al mismo tiempo. Para la mayoría de los casos, las URLs pueden ser definidas en la configuración de los ",
                "l1": ["/widgets/pages", "widgets de tipo page"],
                "s2": ", por medio de la propiedad URL, pero pueden existir casos donde se requiera alguna configuración más avanzada."
              }
            },
            "object": {
              "h2#object-routing": "Objecto \"routing\"",
              "p1": "El objeto  routing gestiona el histórico del navegador y se encarga de manejar la compatibilidad para proyectos web y móviles. Ofrece una API que permite trabajar con el histórico y manipularlo.",
              "p2": "Es disponibilizado por el kernel y se importa de la siguiente forma:",
              "c1": "tpl1",
              "p3": "El objeto routing de BeyondJS existe para cubrir los siguientes escenarios:",
              "items": ["Disponibilizar al programador una API simple para hacer tratamientos complejos de las URLs, como validaciones, redireccionamientos y manejo de variables.", "Identificar el flujo e histórico de navegación del usuario adentro del aplicativo. El objeto `history` del navegador tiene un tratamiento muy limitado del mismo y sólo permite acceder al número de navegaciones existentes. BeyondJS por su parte, maneja un histórico detallado.", "Debido a que las aplicaciones híbridas realizadas con JavaScript, resuelven el manejo de archivos por medio de un protocolo distinto a las aplicaciones accedidas desde un navegador, BeyondJS realiza un tratamiento  del mismo para abstraer al programador de ello y garantizar el mismo comportamiento sin importar la plataforma en que se trabaje."]
            },
            "navigation": {
              "h2": "Navegación",
              "p1": "Con la finalidad de mantener compatibilidad con las APIs Conocidas, el objeto Routing tiene métodos homólogos a los métodos de la API del historial del navegador y básicamente cubren las mismas necesidades, pero a la vez, se encargan de unificar los comportamientos entre las plataformas y actualizar los elementos del histórico de BeyondJS.",
              "p2": "Los métodos disponibles son:",
              "h4#pushState.inline": "`routing.pushState`",
              "p3": "Registra un nuevo elemento en el histórico",
              "c2": "tpl2",
              "h4#replaceState0.inline": "`routing.replaceState`",
              "p4": "Modifica la URL actual sin agregar nuevos elementos en el histórico.",
              "c3": "tpl3",
              "p5": "Tiene la misma interfaz que el método pushState del objeto history de la API Web y adicional se encarga de actualizar el histórico de BeyondJS."
            },
            "overwrite": {
              "h2": "Sobreescrituras de rutas",
              "p2": "Generalmente, aunque puede haber más, existen dos contextos típicos en los cuales es necesario darle tratamiento a las URLs:",
              "items": ["Cuando se requiere manejar URLs amigables.", "Cuando es necesario validar permisos de acceso y definir alguna redirección en base a ello."],
              "p3": {
                "s1": "Para este tipo de casos, se puede definir una función asincrona `redirect` como  propiedad del objeto routing. Esta función recibe un objeto de tipo",
                "l1": ["/api/uri", "<URI>"],
                "s2": " que tiene una propiedad pathname la cual representa la ruta actual."
              },
              "c4": "tpl4",
              "p4": "La función redirect puede retornar undefined o un string. Si retorna undefined el flujo de navegación seguirá sin interrupción. Si se devuelve un string el mismo será tomado como la url final y BeyondJS realizará la redirección a la url retornada.",
              "p5": "En el ejemplo anterior, cualquier ruta recibida es redireccionada a /. "
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