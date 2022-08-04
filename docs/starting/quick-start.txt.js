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
    "module": "@beyond/docs/docs/starting/quick-start",
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
    hash: 171987702,
    creator: function (require, exports) {
      exports.txt = {
        "requires": {
          "h1#quick-start": ["Conceptos básicos", "Inicio rápido"],
          "h4": "Prerequisitos",
          "items1": ["Node ^14.17.4.", "Estar familiarizado con manejadores de dependencias como npm o yarn."]
        },
        "global": {
          "h2": "Instalación global",
          "p7": "Para instalar BeyondJS globalmente, se debe correr el siguiente comando:",
          "c4": "npm2",
          "p8": "A partir de la instalación, sólo es necesario ir a la carpeta en donde se desee crear el o los proyectos e inicializar BeyondJS desde la línea de comandos de la siguiente forma:",
          "c5": "beyond",
          "p9": {
            "s1": "Si todo sale bien, aparecerá un mensaje diciendo que BeyondJS se está ejecutando y que puedes acceder al dashboard en ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": ", desde donde se podrá crear un proyecto por medio de la interfaz gráfica del dashboard.\n"
          },
          "p10": {
            "s1": "Ya en el Dashboard, puedes crear un proyecto desde la interfaz gráfica, puedes ver cómo hacerlo ",
            "l1": ["/docs/projects/create", "aqui"],
            "s2": "."
          }
        },
        "create": {
          "h2#create-project": "`@beyond-js/create-project`",
          "p1": "Para empezar, posiblemente la manera más sencilla de arrancar un proyecto en BeyondJS sea por medio del `@beyond-js/create-project`.",
          "c1": "npx1",
          "h4#command": "Opciones del comando",
          "p2": "A continuación, se listan las banderas que pueden ser utilizadas al instalar  `@beyond-js/create-project`.",
          "items2": [{
            "s1": "-name: Permite definir el scope y nombre del proyecto. Los proyectos, siguen el estándar de NPM, puedes leer más sobre ello",
            "e1": ["https://docs.npmjs.com/cli/v8/using-npm/scope", "here"],
            "s2": "."
          }, {
            "s1": "-type: Permite definir el tipo de proyecto a crear, es opcional, sino se pasa se crea un proyecto de tipo web por defecto. Los valores aceptados son",
            "items": ["web", "node", "backend", "library", "web-backend"],
            "p1": {
              "s1": "YPuedes leer más información sobre los tipos de proyecto ",
              "l1": ["/docs/projects/create#type-projects", "here"],
              "s2": "."
            }
          }, "-container: Permite especificar si se desea agregar una carpeta contenedora de proyectos. Recuerde que BeyondJS soporta la posibilidad de manejar múltiples proyectos en simultáneo."],
          "p3": "Para ejemplificar, se puede imaginar que se necesita crear un proyecto login de tipo node, lo podríamos crear con el siguiente comando:",
          "c2": "npx2",
          "p4": "Al finalizar la ejecución del comando, se debió crear la estructura del proyecto y ya estaría listo para ser ejecutado.",
          "p5": "Para levantar el servidor de desarrollo, se ejecuta el siguiente comando:",
          "c3": "npm1",
          "p6": {
            "s1": "¡Listo! Ya se puede comenzar a programar y probar el proyecto. Se puede acceder al dashboard desde ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "y el proyecto creado se encuentra disponible en ",
            "l2": ["http://localhost:6500", "http://localhost:6500"]
          },
          "q1": {
            "s1": "El dashboard es un sistema que BeyondJS provee para brindar al desarrollador una mejor experiencia de usuario. Puedes leer más sobre el ",
            "l1": ["/docs/dashboard", "aquí"],
            "s2": "."
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
    "module": "@beyond/docs/docs/starting/quick-start",
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
    hash: 618072457,
    creator: function (require, exports) {
      exports.txt = {
        "requires": {
          "h1#quick-start": ["Basics", "Quick Start"],
          "h4": "Pre-requirements",
          "items1": ["Node ^14.17.4.", "Be familiar with dependency managers like npm or yarn."]
        },
        "global": {
          "h2": "Global installation",
          "p7": "To install BeyondJS globally, run the following command:\n",
          "c4": "npm2",
          "p8": "From the installation, it is only necessary to go to the folder where you want to create the project(s) and initialize BeyondJS from the command line as follows:\n",
          "c5": "beyond",
          "p9": {
            "s1": "If everything goes smothly, a message will appear saying that BeyondJS is running and that you can access the dashboard at ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": ", from where a project is created through the dashboard graphical interface."
          },
          "p10": {
            "s1": "Also at the dashboard, you can create a project from the graphical interface. See how you can  do it",
            "l1": ["/docs/projects/create", "here"],
            "s2": "."
          }
        },
        "create": {
          "h2#create-project": "`@beyond-js/create-project`",
          "p1": "To begin with, possibly the easiest way to start a project in BeyondJS is through the `@beyond-js/create-project`.",
          "c1": "npx1",
          "h4#command": "Command options",
          "p2": "Listed below are the flags that can be selected when installing @beyond-js/create-project:",
          "items2": [{
            "s1": "-name: This allows you to define the scope and naming of the project. Projects follow the NPM standard. Read read more about it",
            "e1": ["https://docs.npmjs.com/cli/v8/using-npm/scope", "here"],
            "s2": "."
          }, {
            "s1": "-type: This allows you to define the type of project to create (this is optional), if not, a web-type project will be set by default. Accepted values ​​are:\n",
            "items": ["web", "node", "backend", "library", "web-backend"],
            "p1": {
              "s1": "You can read more about project types ",
              "l1": ["/docs/projects/create#type-projects", "here"],
              "s2": "."
            }
          }, "-container: This allows you to specify if you want to add a project container folder. Remember that BeyondJS supports the ability to handle multiple projects simultaneously.\n"],
          "p3": "To exemplify, you can imagine that you need to create a login project of type node, that could be create it with the following command:\n",
          "c2": "npx2",
          "p4": "When the command execution finishes, the project structure is created and is ready to be executed.",
          "p5": "To start the development server, the following command needs execution:",
          "c3": "npm1",
          "p6": {
            "s1": "Done! Now you can start programming and testing the project. The dashboard is accessed through: ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": ", and the project created is available at ",
            "l2": ["http://localhost:6500", "http://localhost:6500"]
          },
          "q1": {
            "s1": " The dashboard is a system that BeyondJS provides the developer with a better user experience. You can read more about him ",
            "l1": ["/docs/dashboard", "here"],
            "s2": "."
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