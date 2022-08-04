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
    "module": "@beyond/docs/docs/basic/modules",
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
    hash: 4248491972,
    creator: function (require, exports) {
      exports.txt = {
        "create": {
          "h1": ["Modules", "Crear un módulo"],
          "q1": {
            "s1": "Esta página asume que ya se leyó la ",
            "l1": ["/docs/modules/introduction", "introducción de módulos"],
            "s2": "."
          },
          "h2#dashboard": "Creación desde el Dashboard",
          "q2": "Para crear un módulo debe haberse creado previamente un proyecto y estar activo en el Dashboard.",
          "p1": "La opción de crear proyectos es una funcionalidad disponible cuando un proyecto se encuentra activo en el Dashboard. Para poder verlas, es necesario abrir el proyecto accediendo al board de detalle del mismo.",
          "p2": {
            "s1": "Cuando el proyecto se encuentra activo, se puede ver la opción ",
            "bi": "plus",
            "s2": "en el PreAside, al hacer click en ella, aparecce un modal que da la opción de crear un módulo en blanco o seleccionar una plantilla."
          },
          "i1": ["/images/dashboard/v1/create-module-1.png", "BeyondJS - create module form"],
          "p3": "Posteriormente, aparece un formulario que solicita el resto de datos necesarios, asociados al tipo de bundle que se agregará en el módulo y los procesadores que contendrá.",
          "i2": ["/images/dashboard/v1/create-module-2.png", "BeyondJS - create module form 2"],
          "h3#data": "Datos del módulo",
          "items1": ["<strong> Nombre del Módulo </strong> string : Corresponde al nombre con el cual podra ser importado o utilizado el módulo a crear.", "<strong> Nombre Web Component </strong> string : Aplica para los bundles de tipo widget. Debe seguir el estandar de nombres de componentes web, todo en minusculas y con un guión.", "<strong> Url url </strong> optional : Aplica a módulos con un bundle de tipo widget page. Define la url de acceso.", "<strong> Vue </strong> boolean : Agrega el procesador Vue.", "<strong> Svelte </strong> boolean : Agrega el procesador Svelte."],
          "h2#manual": "Creación manual",
          "p4": "La configuración de módulos sigue el mismo principio que el resto de elementos configurativos en BeyondJS y debe crearse en un archivo de nombre module.json.",
          "p5": "El module.json recibe cómo mínimo dos propiedades: El nombre del módulo y la configuración de un bundle.",
          "c1": "creation",
          "p6": "En el ejemplo anterior, se está creando un módulo de nombre first-module, con un bundle code que contiene un procesador sass y un procesador ts que procesan código Sass y Typescript respectivamente y que será empaquetado para plataforma web.",
          "p7": {
            "s1": "Un módulo puede contener varios bundles, estos se definen como propiedades del objeto de configuración del módulo y un módulo pureciben como valor un objeto de configuración que aparte de los procesadores, puede recibir algunas propiedades adicionales según el tipo de bundle. Puedes leer más en detalle sobre esto en ",
            "l1": ["/docs/bundles", "La sección de bundles"],
            "s2": "."
          }
        },
        "introduction": {
          "h1": ["Módulos", "Introducción"],
          "p1": "En BeyondJS los módulos representan la unidad básica de desarrollo y tienen características que es necesario tener presente. Para poder entender bien las diferencias y ventajas del ecosistema de módulos de BeyondJS, es necesario antes repasar cómo funcionan los módulos de JavaScript y cómo se integran en el proceso de desarrollo en la actualidad.",
          "p2": "Para entender bien las diferencias y ventajas del ecosistema de módulos, es necesario antes repasar como funcionan los módulos de Javascript y como se integran en el proceso de desarrollo en la actualidad.",
          "h2#ecmascript": "Módulos EcmaScript",
          "p3": {
            "s1": "Un ",
            "e1": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules", "modulo JavaScript"],
            "s2": "hoy es representado por un único archivo, con tareas independientes y un scope propio. Este módulo puede exportar elementos y ser importado por otros módulos que consumen las variables, objetos o funciones que este provee."
          },
          "p4": "Los empaquetadores por su parte, suelen utilizar una sintaxis compatible con las imports incluidos en EcmaScript 6, pero son ellos quienes se encargan de analizar el árbol de dependencias, quitando aquellos elementos que no son utilizados en el código y generando un “bundle” que es a su vez, un contenedor de todos los módulos utilizados por el equipo de desarrollo.",
          "h2#beyondjs": "Módulos en <span class=\"inline\">BeyondJs</span>",
          "p5": "En BeyondJS, el concepto de módulo es un poco más abarcativo y se divide en dos: Módulos y Módulos Internos.",
          "items": ["<strong>Bundle</strong>: Representa el o los archivos finales de código disponibles para ser leídos por el entorno en el cúal se ejecuten.", "<strong>Procesadores</strong>: son los encargados de interpretar, transpila o compilar (según sea el caso) el código de los lenguajes que pueden no ser soportados directamente por los entornos de ejecución. Tambien se encargan de hacer tareas de optimización para el despliegue productivo."],
          "p6": "La estructura mencionada permite que el concepto de módulos utilizado en BeyondJS se acerque más a la definición usada en la informática en general, donde este representa a una funcionalidad dentro de un programa o sistema. Aunque los módulos javascript son compatibles con este concepto, en la práctica un módulo de un proyecto, aplicación o libreria contiene una serie de módulos javascript (módulos internos en BeyondJS), en conjunto con el resto de herramientas y tecnologías que se requieran para componerlo, como estilos, imagenes o texto.",
          "p7": "En otras palabras, en BeyondJS un módulo es el contenedor de todas las herramientas y tecnologías necesarias para garantizar el funcionamiento completo de un proceso."
        },
        "internal": {
          "h2#internal": "Modulos internos",
          "p1": "Funcionan como los modulos javascript conocidos, pueden ser importados por medio de rutas relativas entre archivos, <strong>pero sólo dentro de un mismo bundle.</strong>",
          "p2": "El programador puede definir si desea que algún elemento pueda ser importado desde otro bundle, lo que se logra por medio del comentario mágico /*bundle*/ agregado en la línea de exportación. Aquellos archivos que exporten variables u objetos y no contengan el comentario mágico, pueden ser importados por módulos internos pertenecientes al mismo bundle, pero no desde bundles externos.|",
          "c1": "internal"
        },
        "working": {
          "h2#working": "Trabajando con modulos",
          "p1": "Los módulos deben estar contenidos en un proyecto y son consumidos por este, pero también pueden ser consumidos por otros proyectos que los importen como bibliotecas.",
          "p2": {
            "s1": "BeyondJS gestiona la importación de módulos a través de la especificación npm que permite definir la estructura@scope/nombre-proyecto/nombre-módulo. El scope es un valor opcional y en conjunto con el nombre del proyecto son propiedades definidas en la configuración del proyecto y se encuentran en el ",
            "l1": ["/projects/json", "project.json"]
          },
          "p3": "La definición de nombre de módulos es una característica vital en BeyondJS ya que ayuda al mantenimiento futuro del proyecto, permitiendo que los módulos y carpetas puedan reestructurarse sin que el comportamiento del mismo sea puesto en riesgo a causa de las importaciones.",
          "p4": "Cuando BeyondJS levanta el entorno de desarrollo, realiza un mapeo de los módulos existentes e interpreta las rutas de cada módulo para poder referenciarlas correctamente cuando estos son importados. Posteriormente, en la fase de despliegue, se encarga de armar la estructura necesaria y convertir las importaciones."
        },
        "identifier": {
          "h2#identifier": "Identificador de un modulo",
          "p1": "El identificador de un módulo es el que se utiliza para importarlo",
          "c1": "import1",
          "p2": "En BeyondJS los identificadores se definen por medio del identificador del paquete (proyecto) y el nombre del módulo.",
          "p3": "Para ejemplificarlo, supongamos se crea un proyecto \"project\" bajo el scope @company, luego agregamos un módulo de nombre login, la ruta para importar este módulo sería:",
          "c2": "import2",
          "p4": "Ahora bien, los módulos, son contenedores de bundles y los bundles, representan el archivo final incluido. Por tanto, para poder hacer una importación de unbundle, es necesario especificar el bundle a consumir.",
          "p5": "Para ejemplificarlo, supongamos que tenemos un bundlecode que disponibiliza un objeto Auth adentro del módulo login que hemos creado. Nuestra importación quedaría de la siguiente manera:",
          "c3": "import3"
        },
        "settings": {
          "h1#settings": ["Módulos", "Configuración"],
          "p1": "El archivo de configuración de módulos es el module.json",
          "p2": "Las propiedades de configuración son:",
          "items": ["<strong>name</strong> <string>: Define el nombre del módulo, necesario para que los elementos puedan ser importados.", "<strong>platforms</strong> <array>: Define las plataformas soportadas por el módulo. Los valores soportados son los identificadores de las plataformas existentes.", "<strong>[bundle]</strong> <bundle>: Refiere al nombre identificador del tipo de bundle que se desea agregar en el módulo. Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuración con los procesadores que utiliza y alguna variación inherita del tipo de bundle agregado.", "Bundles", "Widgets"]
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
    "module": "@beyond/docs/docs/basic/modules",
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
    hash: 1712768728,
    creator: function (require, exports) {
      exports.txt = {
        "create": {
          "h1": ["Modules", "Crear un módulo"],
          "q1": {
            "s1": "Esta página asume que ya se leyó la ",
            "l1": ["/docs/modules/introduction", "introducción de módulos"],
            "s2": "."
          },
          "h2#dashboard": "Creación desde el Dashboard",
          "q2": "Para crear un módulo debe haberse creado previamente un proyecto y estar activo en el Dashboard.",
          "p1": "La opción de crear proyectos es una funcionalidad disponible cuando un proyecto se encuentra activo en el Dashboard. Para poder verlas, es necesario abrir el proyecto accediendo al board de detalle del mismo.",
          "p2": {
            "s1": "Cuando el proyecto se encuentra activo, se puede ver la opción ",
            "bi": "plus",
            "s2": "en el PreAside, al hacer click en ella, aparecce un modal que da la opción de crear un módulo en blanco o seleccionar una plantilla."
          },
          "i1": ["/images/dashboard/v1/create-module-1.png", "BeyondJS - create module form"],
          "p3": "Posteriormente, aparece un formulario que solicita el resto de datos necesarios, asociados al tipo de bundle que se agregará en el módulo y los procesadores que contendrá.",
          "i2": ["/images/dashboard/v1/create-module-2.png", "BeyondJS - create module form 2"],
          "h3#data": "Datos del módulo",
          "items1": ["<strong> Nombre del Módulo </strong> string : Corresponde al nombre con el cual podra ser importado o utilizado el módulo a crear.", "<strong> Nombre Web Component </strong> string : Aplica para los bundles de tipo widget. Debe seguir el estandar de nombres de componentes web, todo en minusculas y con un guión.", "<strong> Url url </strong> optional : Aplica a módulos con un bundle de tipo widget page. Define la url de acceso.", "<strong> Vue </strong> boolean : Agrega el procesador Vue.", "<strong> Svelte </strong> boolean : Agrega el procesador Svelte."],
          "h2#manual": "Creación manual",
          "p4": "La configuración de módulos sigue el mismo principio que el resto de elementos configurativos en BeyondJS y debe crearse en un archivo de nombre module.json.",
          "p5": "El module.json recibe cómo mínimo dos propiedades: El nombre del módulo y la configuración de un bundle.",
          "c1": "creation",
          "p6": "En el ejemplo anterior, se está creando un módulo de nombre first-module, con un bundle code que contiene un procesador sass y un procesador ts que procesan código Sass y Typescript respectivamente y que será empaquetado para plataforma web.",
          "p7": {
            "s1": "Un módulo puede contener varios bundles, estos se definen como propiedades del objeto de configuración del módulo y un módulo pureciben como valor un objeto de configuración que aparte de los procesadores, puede recibir algunas propiedades adicionales según el tipo de bundle. Puedes leer más en detalle sobre esto en ",
            "l1": ["/docs/bundles", "La sección de bundles"],
            "s2": "."
          }
        },
        "introduction": {
          "h1#intro": ["Modules", "Introduction"],
          "p1": "In BeyondJS, modules represent the basic unit of development and have features that need to be kept in mind. To fully understand the differences and advantages of the BeyondJS module ecosystem, it is first necessary to review how JavaScript modules work and how they are integrated into the development process today.",
          "p2": "To fully understand the differences and advantages of the module ecosystem, it is first necessary to review how Javascript modules work and how they are integrated into the development process today.",
          "h2#ecmascript": "EcmaScript modules ",
          "p3": {
            "s1": "A ",
            "e1": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules", "JavaScript module"],
            "s2": " is represented by a single file, with independent tasks and its own scope. This module can export elements and be imported by other modules that consume the variables, objects, or functions it provides."
          },
          "p4": "The bundle modules, for their part, usually use a syntax compatible with the imports included in EcmaScript 6. They are the ones who are in charge of analyzing the dependency tree, removing those elements that are not in the code, and generating a \"bundle\" that is in turn, a container of all the modules used by the development team.",
          "p5": "In BeyondJS, the module concept is more encompassing and split into: Modules and Internal Modules.",
          "items": ["<strong>Bundle</strong>: Represents the final code file(s) available to be read by the environment in which they are executed.", "<strong>Processors</strong>: they are in charge of interpreting, transpiling or compiling (as the case may be) the code of the languages that may not be directly supported by the execution environments. They are also in charge of doing optimization tasks for productive deployment."],
          "p6": "The aforementioned structure allows the concept of modules used in BeyondJS to be closer to the definition used in computing in general, where it represents a functionality within a program or system. Although javascript modules are compatible with this concept, in practice a module of a project, application or library contains a series of javascript modules (internal modules in BeyondJS), together with the rest of the tools and technologies that are required to compose it, such as styles, images or text.",
          "p7": "In other words, in BeyondJS a module is the container of all the necessary tools and technologies to guarantee the complete functioning of a process."
        },
        "internal": {
          "h2#internal": "Internal Modules",
          "p1": "They represent the known concept of javascript modules, with the difference that the programmer can define whether they are available to be consumed from an external module or not. That is achieved using the /*bundle*/ magic comment placed on the export.",
          "p2": "Internal modules can be imported by any other internal module, thriough the relative file path.",
          "c1": "internal"
        },
        "working": {
          "h2#working": "Working with modules",
          "p1": "Modules must be contained in a project and are consumed by it, but they can also be used by other projects that import them as libraries.",
          "p2": {
            "s1": "BeyondJS handles the import of modules via the <strong>npm</strong> spec, allows you to define the structure@scope/project-name/module-name. The scope is an optional value, and along with the project name are properties defined in the project configuration and are found in the ",
            "l1": ["/projects/json", "project.json"]
          },
          "p3": "The module name definition is a vital feature in BeyondJS. It helps with future maintenance of the project, allowing modules and folders for restructiring without the behavior of the module being compromissed by imports.",
          "p4": "When BeyondJS brings up the development environment, it performs a mapping of the existing modules, and interprets the paths of each module to be able to reference them correctly when imported. Later on, in the deployment phase, it is in charge of assembling the necessary structure and converting the imports."
        },
        "identifier": {
          "h2#identifier": "Indentifier of a module",
          "p1": "The identifier of a module is the one used to import it",
          "c1": "import1",
          "p2": "In BeyondJS, identifiers are defined by the bundle (project) identifier, and the module name.",
          "p3": "To exemplify it, suppose a \"project\" project is created under the @company scope, then we add a module named login the path to import this module would be:",
          "c2": "import2",
          "p4": "Now, modules are containers for bundles and bundles represent the final included file. Therefore, to import an unbundle, it is necessary to specify the bundle to consume.",
          "p5": "To exemplify it, suppose we have a bundle code that makes an Auth object available inside the login module that we have created. Our import would be as follows:",
          "c3": "import3"
        },
        "settings": {
          "12#settings": ["Modules", "Configuration"],
          "p1": "The module configuration file is the module.json",
          "p2": "The configuration properties are:",
          "items": ["<strong>name</strong> <string>: Defines the name of the module, necessary so that the elements can be imported.", "<strong>platforms</strong> <array>: Defines the platforms supported by the module. The supported values are the identifiers of the existing platforms.", "<strong>[bundle]</strong> <bundle>: Refers to the identifier name of the type of bundle that you want to add to the module. A module can have one or more bundles. Each bundle receives a configuration object with the processors it uses and some inherent variation of the bundle type added.", "Bundles", "Widgets"]
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