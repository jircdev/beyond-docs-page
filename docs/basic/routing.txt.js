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
    "module": "@beyond/docs/docs/basic/routing",
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
    hash: 1171010366,
    creator: function (require, exports) {
      exports.txt = {
        "routing": {
          "h1": ["Basics", "Routing"],
          "p1": {
            "s1": "BeyondJS has simple and powerful route handling at the same time. For most cases, the URLs are defined in the configuration of ",
            "l1": ["/widgets/pages", "page type widgets"],
            "s2": ", through the URL property, but there may be cases where some more advanced configuration is required."
          }
        },
        "object": {
          "h2#routing-object": "Routing Object",
          "p1": "The routing object manages the history of the browser and handles compatibility for web and mobile projects. It offers an API that allows you to work with the history and manipulate it.",
          "p2": "It is made available by the kernel and is imported as follows:",
          "c1": "tpl1",
          "p3": "The BeyondJS routing object exists to cover the following scenarios:",
          "items": ["Provide the developer with a simple API to perform complex URL treatments, such as validations, redirections, and variable management.", "Identify the flow and history of user navigation within the applicative. The `history` object of the browser has a very limited treatment of it, and only allows access to the number of existing navigations. BeyondJS on the other hand manages a detailed history.", "Since hybrid applications made with JavaScript resolve file handlingutilizing a different protocol than applications accessed from a browser, BeyondJS treats it to abstract the developer from it and ensure the same behavior regardless of the platform they are working."]
        },
        "navigation": {
          "h2#navigation": "Navigation",
          "p1": "To maintain compatibility with the known APIs, the Routing object has methods homologous to the ones of the browser history API. They cover equal needs, but at the same time, they are in charge of unifying the behaviors between the platforms and updating the elements of the history of BeyondJS.",
          "p2": "The available methods are:",
          "h4#pushState.inline": "`routing.pushState`",
          "p3": "Record a new item in the history",
          "c2": "tpl2",
          "h4#replaceState0.inline": "`routing.replaceState`",
          "p4": "Modify the current URL without adding new items to the history.",
          "c3": "tpl3",
          "p5": "It has the same interface as the pushState method of the history object of the Web API, and additionally, it is in charge of updating the history of BeyondJS."
        },
        "overwrite": {
          "h2#route-override": "Route Override",
          "p2": "Generally, although there may be more, there are two typical contexts in which it is necessary to treat URLs:",
          "items": ["When it is required to manage friendly URLs.", "When it is necessary to validate access permissions and, if the person trying to access the URL does not have them, it is intended to redirect to a specific flow."],
          "p3": {
            "s1": "For this type of case, an asyncronaredirect function can be defined as a property of the routing object. This function receives an object of type",
            "l1": ["/api/uri", "<URI>"],
            "s2": " that has a property pathname that represents the current path."
          },
          "p4": "The redirect function can return a different route, in which case BeyondJS will redirect to the returned URL, or it can return nothing, in which case the user has access to the route, which is the default behavior.",
          "p5": "In the example above, any route received is redirected to /."
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
    "module": "@beyond/docs/docs/basic/routing",
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