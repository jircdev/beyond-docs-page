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
    "module": "@beyond/docs/docs/basic/backend",
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
    hash: 2302166858,
    creator: function (require, exports) {
      exports.txt = {
        "code": {
          "h1#Backend-code": "Backend-code",
          "p1": "BeyondJS provides a safe and efficient environment for creating backend code, whether you need to work with stand-alone services, task-specific, or looking to implement a client project connected to a backend API.",
          "p2": "For BeyondJS purposes, we can classify these code structures into two types:",
          "items1": ["<strong>Backend services</strong>:  Node code representing a service running on the backend and can only be used by modules that runs on the backend as well.", "<strong>Backend APIs</strong>: Allows the connection between the backend-code and the client-code."]
        },
        "server": {
          "h2#apiServerBundleBridge": "API Server",
          "h3#apiServerBundleBridge": "Bundle bridge",
          "p1": {
            "s1": "Server APIs in BeyondJS represent functions that execute code on the server and can be consumed from client-code. They handle the logic for connecting to a backend and returning data. It's achieved simply by creating a ",
            "l1": ["/bundles#bridge", "Bundle Bridge"]
          },
          "q1": {
            "s1": "To execute backend-code in BeyondJS, is necessary to have the needed distributions configured. If the project is created from the web-backend project type, then is already configured. You can find more information in the ",
            "l1": ["/docs/distributions", "La seccion de distribuciones"]
          },
          "c1": "tpl1",
          "p2": {
            "s1": "Like any module or bundle, it can be managed from the ",
            "l1": ["/dashboard", "Dashboard"],
            "s2": " or manually"
          },
          "p3": "As its name indicates, the bridge-type bundle function as a bridge between client-logic and server-logic. Generally, logic is associated with data management or file management implemented on the server. The bridge enables the implementation and availability of features that are required to be queried from the client and keeps encapsulate on the server those that don’t.",
          "p4": "The code for a bundle bridge looks like this:",
          "c2": "tpl2",
          "p5": "An ordinary Javascript object, right?",
          "p6": "BeyondJS generates a client object that makes the web-socket connection to the server, executes the code implemented by the developer, and makes the response available in the client code. This enables the developer to abstract from the need to worry about the connection between the client and server layers and allows the code to function as part of the same ecosystem.",
          "p7": {
            "s1": "Now all you need to do is initialize the server. To do this, it is necessary to create a module with a bundle start that is in charge of starting the ",
            "l1": ["/docs/bee", "BEE"],
            "s2": ". The code for the bundle start is as follows:"
          },
          "c3": "tpl3",
          "q2": {
            "s1": "In the ",
            "l1": ["/tutorial/web", " Web Tutorial"],
            "s2": " available, an implemented bridge allows you to see the operation of the BeyondJS <strong>backend APIs</strong> in action."
          }
        },
        "comments": {
          "h3#bundleBackend": ["Magical comments", "Bundle <span className=\"inline\">backend</span>"],
          "p1": "Backend bundles represent JavaScript code executed on the server and used only by modules that also run on the server. In other words, they are like any typical NodeJS service, with the exception that in a development environment are executed through a BEE or BeyondJS process, which increases productivity by enabling it to work with <strong>HMR</strong> in an automated way and without configuration"
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
    "module": "@beyond/docs/docs/basic/backend",
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
    hash: 2438134876,
    creator: function (require, exports) {
      exports.txt = {
        "code": {
          "h1#backendCode": ["Conceptos básicos", "Código Backend"],
          "p1": "BeyondJS disponibiliza un entorno seguro y eficiente pare crear código backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas específicas o que busque implementar una conexión de un proyecto cliente con una api backend.",
          "p2": "Para efectos de BeyondJS, podemos clasificar estas estructuras de código en dos tipos:",
          "items": ["<strong>Servicios Backend</strong>: Código node que representa un servicio en ejecución en el backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend", "<strong>Api backend</strong>: permiten la conexión entre el código backend y el código cliente."]
        },
        "server": {
          "h2#apiServerBundleBridge": "Api Servidor",
          "h3#apiServerBundleBridge": "Bundle <span class=\"inline\">bridge</span>",
          "p1": {
            "s1": "Las APIs servidor en BeyondJS representan funciones que ejecutan código en el servidor y pueden ser consumidas desde el código cliente. Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple, con la creación de un ",
            "l1": ["/bundles#bridge", "Bundle Bridge"]
          },
          "q1": {
            "s1": "Para que se pueda ejecutar código Backend en BeyondJS es necesario tener configuradas las distribuciones necesarias. Si el proyecto se creo a partir del tipo de proyecto web-backend, la misma ya se encuentra configurada. Puedes encontrar más información en ",
            "l1": ["/docs/distributions", "La seccion de distribuciones"]
          },
          "c1": "tpl1",
          "p2": {
            "s1": "Al igual que cualquier módulo o bundle, este puede ser gestionado desde el ",
            "l1": ["/dashboard", "Dashboard"],
            "s2": " o de forma manual."
          },
          "p3": "Cómo su nombre lo indica, el bundle de tipo <strong>bridge</strong>, sirve de puente entre la lógica cliente y la lógica servidor. Generalmente, en el servidor se impmenentan lógicas asociadas al manejo de datos o manipulación de archivos, el bridge Permite implementar y dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas en el servidor aquellas que no.",
          "p4": "El codigo de un bundle bridge luce asi:",
          "c2": "tpl2",
          "p5": "Un objeto Javascript común y corriente ¿Verdad?",
          "p6": "BeyondJS genera un objeto cliente que realiza la conexión web-socket al servidor, ejecuta el código implementado por el desarrollador y deja disponible la respuesta en el código cliente, abstrayendo al programador de la necesidad de procuparse por la conexión entre las capas cliente y servidor y permitiendo que el código funcione como parte de un mismo ecosistema.",
          "p7": {
            "s1": "Ahora sólo es necesario inicializar el servidor. Para ello es necesario crear un módulo con un bundle start que se encargue de iniciar el ",
            "l1": ["/docs/bee", "BEE"],
            "s2": ". El código del bundle start es el siguiente:"
          },
          "c3": "tpl3",
          "q2": {
            "s1": "En el ",
            "l1": ["/tutorial/web", "Tutorial Web"],
            "s2": "disponible, se implementa un bridge que permite ver en acción el funcionamiento de las <strong>apis backend</strong> de BeyondJS."
          }
        },
        "comments": {
          "h3#bundleBackend": ["Comentarios mágicos", "Bundle <span className=\"inline\">backend</span>"],
          "p1": "Los bundles backend representan código javascript que es ejecutado en el servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras palabras, representan cualquier servicio típico de NodeJS, con la salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso BeyondJS lo cual aumenta la productividad al poder trabajar con <strong>HMR</strong> de forma automatizada y sin configuración."
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