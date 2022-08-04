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
    "module": "@beyond/docs/docs/foundations/hmr",
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
    hash: 1401750137,
    creator: function (require, exports) {
      exports.txt = {
        "hmr": {
          "h1": ["Fundamentos", "HMR"],
          "p1": "Todos los bundles exponen de forma automática un objeto hmr que le permite que el desarrollador pueda suscribirse a los cambios de código y persistir de esta forma el estado del proyecto en el que se encuentre, optimizando el proceso de desarrollo, pues se evita la necesidad de repetir nuevamente los flujos para llegar al estado actual.",
          "p2": "Para explicarlo mejor, supongamos que se está realizando una lógica de filtrado de elementos de una base de datos en un módulo backend, este módulo realiza los siguientes pasos:",
          "items": ["Realiza el login contra la base de datos.", "Realiza dos consultas a base de datos", "Retorna la información disponible para que el programador trabaje con ella.", "Genera una estructura de datos en la cual se integra toda la información consultada para que esta sea devuelta al cliente."],
          "p3": "La suscripción de cambios de parte del desarrollador con hmr, permite a este enfocarse en el último punto sin necesidad de repetir por cada cambio los primeros tres, lo cual significa una optimización en tiempo de pruebas bastante alta.",
          "p4": "La implementación de hmr se encarga de forma automática de realizar el reemplazo de contenido de un archivo en el mismo momento en el que este es cambiado, dejando disponible de manera inmediata la actualización del mismo, sin necesidad de realizar ninguna acción adicional y además, el programador puede suscribirse a estos cambios para definir que desea hacer a partir de ellos, ofreciendole la versatilidad de ejecutar funciones de manera automática ante cada cambio."
        },
        "events": {
          "h2": "Eventos",
          "items": ["change", "change: [nombre-procesador]"]
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
    "module": "@beyond/docs/docs/foundations/hmr",
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
    hash: 361293370,
    creator: function (require, exports) {
      exports.txt = {
        "hmr": {
          "h1": ["Foundations", "HMR"],
          "p1": "All bundles automatically expose an HMR object that allows the developer to subscribe to code changes and thus persist the status of the project where is located, optimizing the development process since it avoids the need to redo the flows to get to the current state.",
          "p2": "To better explain it, let's suppose that a database element filtering logic is performed in a backend module, this module performs the following steps:",
          "items": ["Perform the login against the database.", "Make two queries to the database.", "Returns the available information for the developer to work with.", "Generates a data structure, in which all the information consulted is integrated, so that's returned to the client."],
          "p3": "The subscription of changes by the developer with HMR allows the developer to focus on the last point without having to repeat changes for the the first three steps, which means a fairly high optimization in test time.",
          "p4": "The implementation of HMR is automatically responsible for replacing the content of a file at the same time it's changed, leaving the update immediately available, without the need to perform any additional action. In addition, the programmer can subscribe to these changes to define what he wants to do with them, offering him the versatility of automatically executing functions on each alteration"
        },
        "events": {
          "h2": "Events",
          "items": ["<span class=\"inline\">change</span>", "<span class=\"inline\">change: [processor-name]</span>"]
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