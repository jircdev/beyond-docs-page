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
    "module": "@beyond/docs/docs/basic/projects",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 657710318,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Projects", "Introduction"],
          "p1": "BeyondJS, offers an architecture focused on providing an efficient way to implement solutions, based on microservices interconnected with other microservices in the backend and with applications with micro-frontend structures if we talk about the client, without neglecting the possibility of creating simpler projects in fewer steps.",
          "p2": "To better explain the concept, one can think of a service that offers authentication management in applications. It is natural to believe that there may be developers who need to use the service from a web project with client code, and developers who are working on the backend and can also use the service to validate the session before certain actions.",
          "p3": "From the perspective of BeyondJS, the Auth service could be seen as a project that contains two distributions, one to generate the client code and another to generate the backend code, both with a single source code. The code deployed from the distributions could be made available in both distributions as an NPM package and made available for use by any developer in projects made or not with BeyondJS.",
          "p4": "Likewise, if the projects consuming ´Auth´ are BeyondJS projects, they could also import into ´Auth´ via the BeyondJS module import system"
        },
        "create": {
          "h1#create": ["Projects", "Managing a project"],
          "p1": {
            "s1": "projects, like all other BeyondJS elements, are configured using objects in .json files. Project configuration files are generally named ",
            "l1": ["/docs/projects/json", "project.json"],
            "s2": " as a convention and allow a wide range of configurations.\n"
          },
          "p2": "Projects can be configured in two ways: through the Dashboard interface and manually."
        },
        "dashboard": {
          "h2#dashboard": "Using the Dashboard\n",
          "p1": "To create a project from the dashboard, you first need to make sure BeyondJS is running in the folder where you want to work on your projects. As explained in the introduction, BeyondJS, is developed to handle projects simultaneously, so keep in mind that the run directory may be one where you want to add \"multiple\" projects.\n",
          "p2": "Let's start BeyondJS:",
          "c1": "beyond",
          "p3": {
            "s1": "Then, we access the dashboard, which will be available at ",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "."
          },
          "p4": "The dashboard has three ways to access the project creation process:",
          "i1": ["/images/dashboard/empty.png", "beyond creating projects"],
          "items1": ["In the Preaside, by using the icon.", "In the Project Board, at the top right, the option \"create project.\"", "When no project created, a message is displayed inviting you to create a project, as seen in the above reference image."],
          "p5": "Clicking on any of the mentioned alternatives, a modal is displayed, allowing you to select the type of project to create. This function enables you to start with a blank project or using an already created template. Current choices are:\n",
          "h4": "Blank Project Types",
          "i2": ["/images/dashboard/new-project.png", "BeyondJS - Project types"],
          "items2": ["Web: Ready to start a web project that can be distributed on the internet or as a mobile application.", "Node: Ready to distribute as a project to run in a node environment.", "Backend: Node project that makes available interfaces that could be consumed in real-time with web sockets from another node project or a client project.", "Library: Ideal for creating projects intended to be distributed as NPM packages.,", "Web - backend: Generates a web project with a backend distribution."],
          "h4#templates": "Template types",
          "items4": ["React, Vue, and Svelte apps: Projects to start working with the preferred framework library.", "Express: Project with an initial structure to create an express server.", "Web Template: Project with a client and backend structure communicated through a web socket."],
          "p6": {
            "s1": "It is possible to work with different view libraries/Frameworks in the same project, thanks to the micro-frontend structure offered by BeyondJS. Read more about it in ",
            "l1": ["/docs/widgets", "the Widgets chapter"],
            "s2": "."
          }
        },
        "createInfo": {
          "p1": "After seleting the project type, a form appears requesting the scope and name of the project, the port on which it will run, and additionally, an optional title and description. After filling in the necessary data, the dashboard is responsible for creating the project with the file structure, and the project is available to be accessed on the configured port.",
          "i1": ["/images/dashboard/create-form-project.png", "BeyondJS - new project form"]
        },
        "manual": {
          "h2#create": "Manual creation",
          "p1": "The definition of a project is done through the project.json file.",
          "p2": "The minimum structure required to create a project is as follows:",
          "c1": "tpl1",
          "p3": "Having created the project.json file, it only left creating the BeyondJS server configuration file, which is called beyond.json and whose basic structure is as follows:",
          "c2": "tpl2",
          "p4": "The `applications` input is an array that can contain a list of paths relative to project configuration files.",
          "q2": {
            "s1": "Read more about BeyondJS configuration options in the development environment in the ",
            "l1": ["/docs/dev-server", "Development Server chapter"],
            "s2": "."
          }
        },
        "dependencies": {
          "h1#dependencies": ["Projects", "BeyondJS Dependencies"],
          "p1": "BeyondJS offers a list of required dependencies according to the type of project that you want to carry out.\n",
          "h3#kernel": "@beyond/kernel",
          "p2": "It is the main library of BeyondJS. It contains modules to cover the basic functionalities of the Framework. Portraits the following packages:\n",
          "items1": ["Bundle: used by any bundle and common functions for them.", "Core: manages package import handling universally.", "Routing: Contains all the functionalities associated with the history and navigation of the project.", "Styles: Used to work style sheets reactively.", "Texts: required for handling multilanguage features."],
          "h3#backend": "@beyond/backend",
          "p3": "A library that manages the client and server part of real-time connection, and bridges. It is required in node and backend type projects.\n",
          "h3#ssr": "@beyond/ssr",
          "p4": "It is responsible for providing the APIs the ability to access the rendering information of the widgets and make the server rendering available.\n",
          "h3#widgets": "Librerias para Widgets",
          "p5": "To work with widgets, it is necessary to have the @beyond/widgets dependency installed, and additionally, depending on the framework that you wish to use, BeyondJS offers the following libraries:\n",
          "items2": ["@beyond/react-widget", "@beyond/vue-widget", "@beyond/svelte-widget"],
          "q6": "All the mentioned libraries, can be installed through the `npm i library` command, where \"library\" would be the library name to install.\n"
        },
        "imports": {
          "h1": ["projects", "Import of projects"],
          "c1": "project",
          "p1": "In BeyondJS, a project can be imported by another, and function as a library, giving the main project access to its modules. This functionality is key to thinking of solutions with interconnected microservice structures or libraries that contain reusable code.",
          "p2": "To exemplify it, we can mention a solution that manages a web page, a mobile application, and an administrative panel, all as independent projects that feed from the same data source. The importation of projects allows all the data logic, to be handled as independent projects, and used by the three applications, thus allowing the re-use of the code.",
          "p3": "The importation of projects is performed from the project.json, and the projects must be added to the project's entry of beyond.json.",
          "p4": "If the projects are created through the Dashboard, the file beyond.json is modified automatically.",
          "p5": "Following the mentioned example, the project with the modules that manage the data and connects to the database, could be called models, and in ordet to be  imported into the other projects, the following code should have to be added to the project.json.",
          "c2": "libraries",
          "p6": "The importation property receives an array of items, which enables multiple projects being imported if required."
        },
        "json": {
          "h1": ["Projects", "Project settings"],
          "items1": ["Optional name string: string is the name to identify the project. It follows the npm standard, so it can only contain safe characters for URLs, without periods or underscores.", "Optional scope string: The same as npm, is used to group packages. And since projects can be published as npm packages, if a scope is added, it must be unique and can only be managed by the organization or user that uses it. Scope uniqueness validation is done by npm, only if the programmer intends to publish their project as a package.", "Optional title string: Descriptive title of the project. It shouldn’t have more than 100 characters.", "Optional description string: Space to briefly explain which are the characteristics of the project.", "Optional template EOC optional: Space to briefly explain the characteristics of the project.", "Optional layout EOC: Space to briefly explain the characteristics of the project.", "Optional params EOC: Object that allows adding general parameters that are required to be used throughout the project. It has the possibility of defining values ​​by environment. To understand more, you can refer to the Project Parameters chapter.", "Optional modules EOC: Receives an object with a path input that allows defining the modules directory, by default is \"module\"", "Optional deployment EOC: Object that allows the configuration of the development environments, which are defined through the deployment entry.", "Optional deployment EAC: Object that allows configuration of development environments, which are defined through the distributions entry. Distributions can be added from the dashboard functionality for it or manually. To understand how they work, you can go to the Distribution chapter.", "Optional libraries object: Defines the import of projects used as libraries in the defined project.", "Optional imports string option: Each entry represents an imported project. The import is done by adding the scope and name of the imported project."]
        },
        "structure": {
          "h1": ["Projects", "Structure of a project"],
          "p1": "`BeyondJS has a configurable architecture that allows for flexible project structures. However, when creating a project through the Dashboard or ´@beyond-js/create-project´, the initial structure is created as follows:\n",
          "h4": "Structure",
          "p2": "This command creates the following structure:",
          "items1": [{
            "s1": "A ",
            "l1": ["docs/projects/json", "project.json"],
            "s2": " file, with the project settings."
          }, {
            "s1": "A ",
            "l1": ["/docs/dev-server", "beyond.json "],
            "s2": " file that allows you to manage configurations for the development server.\n."
          }, {
            "s1": "template/Carpeta con la estructura de la plantilla del proyecto. Esta carpeta aplica para los proyectos web y móvil. Puedes leer más en detalle sobre el sistema de plantillas",
            "l1": ["/docs/template-system", "aqui"],
            "s2": "."
          }],
          "p3": "\nLa estructura de carpetas puede variar y extenderse según las consideraciones del proyecto.",
          "h2": "Gestión de directorios",
          "p4": "BeyondJS sigue una estructura de directorios basada en mantener una semántica simple y concisa que permita al programador ubicarse a partir de los nombres de carpeta. Sin embargo, el programador puede tener un estandar de estructura que desee seguir, para lo cual se permite hacer cambios en la configuración de directorios.",
          "p5": "La ubicación de los módulos de un proyecto, suele estar por convención en la carpeta modules, esto se define en el project.json, en la propiedad module",
          "c1": "modules",
          "p6": "Al igual que todas las propiedades configurativas de directorios. la propiedad module.path evalúa el valor recibido de forma relativa al directorio en donde se encuentra, dicho en otras palabras, la carpeta modules debe encontrarse, según el ejemplo a la misma altura que el archivo project.json, si esta propiedad se remueve, BeyondJS intentará encontrar los módulos en el directorio raíz del proyecto, el cúal corresponde a el lugar en donde se encuentra el module.json"
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