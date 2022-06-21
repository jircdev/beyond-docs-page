define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/routing/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 124726531,
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
          "h2": "Objecto \"routing\"",
          "p1": "El objeto  routing gestiona el histórico del navegador y se encarga de manejar la compatibilidad para proyectos web y móviles. Ofrece una API que permite trabajar con el histórico y manipularlo.",
          "p2": "Es disponibilizado por el kernel y se importa de la siguiente forma:",
          "p3": "El objeto routing de BeyondJS existe para cubrir los siguientes escenarios:",
          "items": ["Disponibilizar al programador una API simple para hacer tratamientos complejos de las URLs, como validaciones, redireccionamientos y manejo de variables.", "Identificar el flujo e histórico de navegación del usuario adentro del aplicativo. El objeto history  del navegador tiene un tratamiento muy limitado del mismo y sólo permite acceder al número de navegaciones existentes. BeyondJS por su parte, maneja un histórico detallado.", "Debido a que las aplicaciones híbridas realizadas con JavaScript, resuelven el manejo de archivos por medio de un protocolo distinto a las aplicaciones accedidas desde un navegador, BeyondJS realiza un tratamiento  del mismo para abstraer al programador de ello y garantizar el mismo comportamiento sin importar la plataforma en que se trabaje."]
        },
        "navigation": {
          "h2": "Navigacion",
          "p1": "Con la finalidad de mantener compatibilidad con las APIs Conocidas, el objeto Routing tiene métodos homólogos a los métodos de la API del historial del navegador y básicamente cubren las mismas necesidades, pero a la vez, se encargan de unificar los comportamientos entre las plataformas y actualizar los elementos del histórico de BeyondJS.",
          "p2": "Los métodos disponibles son:",
          "p3": "Registra un nuevo elemento en el histórico",
          "p4": "Modifica la URL actual sin agregar nuevos elementos en el histórico.",
          "p5": "Tiene la misma interfaz que el método pushState del objeto history de la API Web y adicional se encarga de actualizar el histórico de BeyondJS."
        },
        "overwrite": {
          "h2": "Sobreescrituras de rutas",
          "p2": "Generalmente, aunque puede haber más, existen dos contextos típicos en los cuales es necesario darle tratamiento a las URLs:",
          "items": ["Cuando se requiere manejar URLs amigables.", "Cuando es necesario validar permisos de acceso y, en caso de que quien intenta entrar a la URL no los tenga, se pretenda hacer una redirección a un flujo determinado."],
          "p3": {
            "s1": "Para este tipo de casos, se puede definir una función asincronaredirect como  propiedad del objeto routing. Esta función recibe un objeto de tipo",
            "l1": ["/api/uri", "<URI>"],
            "s2": " que tiene una propiedad pathname la cual representa la ruta actual."
          },
          "p4": "La función redirect puede retornar una ruta diferente, en cuyo caso BeyondJS realizará la redirección a la URL devuelta o, puede no devolver nada, en cuyo caso se interpreta que el usuario tiene acceso a la ruta, el cual es el comportamiento por defecto.",
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