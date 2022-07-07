define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/modules",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0]]));
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