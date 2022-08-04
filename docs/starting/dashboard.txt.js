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
    "module": "@beyond/docs/docs/starting/dashboard",
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
    hash: 1848737231,
    creator: function (require, exports) {
      exports.txt = {
        "dashboard": {
          "h1#dashboard": "Dashboard",
          "p1": "BeyondJS provides an integrated Dashboard, which seeks to improve the development experience in several ways, all focused on giving support to the developer in daily tasks that are often time-consuming. These tasks span the entire development loop, from creating a new project to deploying it.",
          "p2": {
            "s1": "It is available whenever the development server is started at ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "and allows creating a new project or obtaining relevant information from the existing project, as will be seen later."
          },
          "i1": ["/images/dashboard/empty.png", "BeyondJS Dashboard workspace"]
        },
        "features": {
          "h2#features": "Features",
          "items": ["Creation of projects anew or from templates.", "Module creation.", "Informative detail of the projects and modules.", "General real-time error detection in projects, modules, dependencies, and consuming modules.", "Typescript error detection.", "Detection of runtime errors.", "Handle errors in real-time in Node processes through HMR.", "Setting up development environments.", "code editing", "Project navigation", "Dependency handling.", "Management of static files and project templates", "Project deployment management"]
        },
        "structure": {
          "h2#structure": "Structure",
          "i1": ["/images/dashboard/dashboard-structure.png", "BeyondJS Dashboard structure"],
          "p1": "The Dashboard works as a framework (Workspace), and each component that integrates it has a defined name that allows its identification. These are:",
          "items": ["<strong>PreAside</strong>: First left panel, iconography of general access to actions which vary depending on whether or not you have a project open", "<strong>Aside</strong>: Secondary menu that displays additional features associated with the option selected in the preview.", "<strong>Boards</strong>: Each open panel on the main screen is called a board. The application list is a board. The application detail or the configuration screen are also boards.", "<strong>Panels</strong>: Each screen division generated in the workspace"]
        },
        "ts": {
          "h2#integrationWithTypeScript": "Integration with TypeScript",
          "p1": "<strong>Typescript</strong> is a typed language, and type checking is a heavy task. The Dashboard utilizes the typescript compiler to detect errors that may exist in the code in real-time and provide information about them to the developer at three different levels:",
          "i1": ["/images/dashboard/errors.png", "BeyondJS Dashboard structure"],
          "items": ["<strong>Module in development</strong>: The module which is being worked on.", "<strong>Dependencies</strong>: The modules imported by the module under development.", "<strong>Consumers</strong>: The modules that consume the module on which we are working."],
          "p2": "The developer can access a module/bundle and see the existing errors in it or a consumer or dependency. Easyly identify the file and directly access the line where you must correct.",
          "q1": {
            "h3#typescriptTimes": "Typescript times",
            "p1": "Because the typescript compiler's parsing times are long when doing type checking, BeyondJS implements a hybrid approach that simultaneously handles type checking by the compiler and updating files with HMR by the transpiler. It offers the possibility to see the changes at the moment and receive the information of errors in parallel. It is possible that the first time the type validation of a project that is taking place, this process takes an extended time, which is then minimized with the cache management that BeyondJS integrates."
          }
        },
        "editor": {
          "h2#editorAndBrowserIncluded": "Editor and Browser included",
          "p1": "The dashboard has a built-in code editor that can be extremely useful for quickly accessing files and correcting detected errors, working with styles or bridges. Likewise, it also has a Board that allows you to navigate the projects.",
          "q1": {
            "s1": "El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno."
          },
          "i1": ["/images/dashboard/editor.png", "Beyond Dashboard with editor and iframe navigator"]
        },
        "deploy": {
          "p1": {
            "s1": "The Dashboard generates the necessary and optimized code to deploy the projects. Read in detail how it works in the ",
            "l1": ["/docs/deployment", "Despliegue de proyectos"],
            "s2": " chapter."
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
    "module": "@beyond/docs/docs/starting/dashboard",
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
    hash: 3972027414,
    creator: function (require, exports) {
      exports.txt = {
        "dashboard": {
          "h1#dashboard": "Dashboard",
          "p1": "BeyondJS provee un Dashboard integrado, que busca mejorar la experiencia de desarrollo de varias maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo hasta el despliegue del mismo.",
          "p2": {
            "s1": "Se encuentra disponible siempre que el servidor de desarrollo se levanta en ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "y permite realizar la creación de un nuevo proyecto u obtener información relevante del proyecto existente, como se verá más adelante."
          },
          "i1": ["/images/dashboard/empty.png", "BeyondJS Dashboard workspace"]
        },
        "features": {
          "h2#features": "Funcionalidades",
          "items": ["Creación de proyectos en blanco o desde plantillas.", "Creación de módulos.", "Detalle informativo de los proyectos y módulos", "Detección de errores en tiempo real generales en proyectos, módulos, las dependencias y en los módulos consumidores", "Detección de errores de tipado con typescript.", "Detección de errores de runtime.", "Manejo de errores en real time en procesos Nodepor medio de HMR.", "Configuración de entornos de desarrollo.", "Edición de código", "Navegación de proyectos.", "Manejo de dependencias.", "Gestión de archivos estáticos y plantilla del proyecto.", "Gestión de despligue de proyectos."]
        },
        "structure": {
          "h2#structure": "Estructura",
          "i1": ["/images/dashboard/dashboard-structure.png", "BeyondJS Dashboard structure"],
          "p1": "El Dashboard funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:",
          "items": ["<strong>PreAside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Aside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Boards</strong>: Cada panel abierto en la pantalla principal es denominado board, la lista de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo son.", "<strong>Panels</strong>: Cada división de pantalla generada en el workspace"]
        },
        "ts": {
          "h2#integrationWithTypeScript": "Integracion con TypeScript",
          "p1": "<strong>Typescript</strong> es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El Dashboard hace uso del compilador de typescript para detectar en tiempo real los errores que pueden existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:",
          "i1": ["/images/dashboard/errors.png", "BeyondJS Dashboard structure"],
          "items": ["<strong>Módulo en desarrollo</strong>: El módulo en el cual se está trabajando", "<strong>Dependencias</strong>: Los módulos importados por el módulo en desarrollo.", "<strong>Consumidores</strong>: Los módulos que consumen el módulo sobre el cual estamos trabajando."],
          "p2": "El programador puede acceder a un módulo/bundle y ver los errores existentes en el o en un consumidor o dependencia. Identificar de forma simple el archivo y acceder directamente a la línea donde debe realizar la corrección.",
          "q1": {
            "h3#typescriptTimes": "Tiempos de typescript",
            "s1": "Debido a que los tiempos de análisis del compilador de typescript son extensos cuando hace el chequeo de tipos, BeyondJS implementa una estrategía hibrida que gestiona en simultáneo el chequeo de tipos por medio del compilador y la actualización de archivos con HMR por medio del transpilador, esto ofrece la posibilidad de ver los cambios al momento y recibir la información de errores en paralelo. Es posible que la primera vez que se realice la validacion de tipos de un proyecto, este proceso tome un tiempo extendido el cual luego se minimiza con la gestión de cache que integra BeyondJS"
          }
        },
        "editor": {
          "h2#editorAndBrowserIncluded": "Editor y Navegador incluidos",
          "p1": "El Dashboard cuenta con un editor de código integrado que puede resultar sumamente útil para acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos.",
          "q1": {
            "s1": "El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno."
          },
          "i1": ["/images/dashboard/editor.png", "Beyond Dashboard with editor and iframe navigator"]
        },
        "deploy": {
          "p1": {
            "s1": "El Dashboard genera el código necesario y optimizado para desplegar los proyectos. Puedes leer en detalle el funcionamiento en la sección de",
            "l1": ["/docs/deployment", "Despliegue de proyectos"],
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