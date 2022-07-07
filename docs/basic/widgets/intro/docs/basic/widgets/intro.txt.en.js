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
    "module": "@beyond/docs/docs/basic/widgets/intro",
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
    hash: 3124540399,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1#widgets": ["Basic concepts", "Widgets"],
          "p1": {
            "s1": "The BeyondJS development architecture in  web applications or web projects is designed to work with a ",
            "e1": ["https://micro-frontends.org", "microfrontends"],
            "s2": " structure, enabling the integration of different technological stacks in the same project and allowing the developer to have the possibility of evaluate which technology is more convenient for a specific functionality, this is achieved by creating widgets."
          },
          "p2": {
            "s1": "A Widget is a type of ",
            "l1": ["/docs/bundles", "bundle"],
            "s2": " available in BeyondJS and is implemented through a ",
            "e1": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components", "Web Component"],
            "s3": " width a ",
            "e2": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM", "shadow DOM"],
            "s4": " to encapsulate its content. Being a web component, it can define properties, and methods, and it can also be accessed through the JavaScript Web API. Another important advantage of widgets, is that they load dependencies on demand, and only  when they are required, optimizing project loading times."
          },
          "q1": {
            "s1": "BeyondJS implements widget rendering techniques, this offers the possibility to integrate hybrid renders in a project, you can read more about it in the ",
            "l1": ["/docs/rendering", "rendering chapter."]
          },
          "p4": {
            "s1": "BeyondJS provides support for working with frameworks/libraries such as ",
            "e1": ["https://reactjs.org/", "React"],
            "s2": ", ",
            "e2": ["https://vuejs.org/", "Vue"],
            "s3": " and ",
            "e3": ["https://svelte.dev/", "Svelte"],
            "s4": " and has the possibility of integrating new libraries or tools available."
          },
          "h2#react": "Using <span className=\"inline\">React</span> ",
          "p5": "React is automatically supported via typescript in BeyondJS, which uses Babel to convert the code. Hence, with the ts processor added and the React dependency installed, your module is now ready to work with ReactJS.",
          "p6": {
            "s1": "la configuración de react se realiza por medio de los archivos .tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la ",
            "e1": ["https://www.typescriptlang.org/docs/handbook/jsx.html", "Typescript documentation"],
            "s2": "."
          },
          "h2#vue-svelte": "Usando <span className=\"inline\">Svelte</span> o <span className=\"inline\">Vue</span>",
          "p8": {
            "s1": "Each framework has its own ",
            "l1": ["/docs/processors", "processors"],
            "s2": " If you want to integrate Vue, you must add the Vue processor in the bundle configuration. If instead you want to work with Svelte, you must add the svelte processor in the bundle configuration.\n"
          }
        },
        "definition": {
          "h1": ["Widgets", "Definition"],
          "q1": {
            "s1": "Widgets are a type of bundle, if you want to read about all the existing bundle types, you can go to the",
            "l1": ["/docs/bundles", " bundles chapter."]
          },
          "p1": "Widgets exponentiate the advantages already existing in web components thanks to encapsulation. They allow the integration of different technologies with minimal configuration and offer a simple API to manage their properties, methods, and interaction with the rest of the components of a web project. Also, they can be made available as NPM packages and used from any project that uses javascript without requiring BeyondJS.",
          "p2": "There are three types of widgets:\n",
          "items": ["<strong>page:</strong>Designed to create the different pages of the application, it receives configuration parameters associated with the URL and the use of layouts.", "<strong>layout:</strong> They represent page containers, that allow splitting code or logic that crosses pages. A layout can also contain another layout.\n", "<strong>default:</strong> They expose a web component under the defined name and do not require any additional treatment from BeyondJS."],
          "p3": {
            "s1": "All widgets implement a Controller object which is in charge of managing the lifecycle of the web component and allowing the definition of ",
            "l1": ["/docs/rendering", "rendering and navigation"],
            "s2": "."
          },
          "h2#manual": "Manual creation",
          "p4": {
            "s1": "The manual configuration is done by adding the definition of the widget type bundle in the",
            "l1": ["/docs/modules/json", "module.json"],
            "s2": " of the module"
          },
          "p5": "The code above defines a bundle of type widget with the name of the web component as web login and with typescript as renderer.",
          "h2#dashboard": "Creation with the Dashboard",
          "p6": {
            "s1": " Todos los bundles pueden ser creados desde el formulario de creación de módulos en el",
            "l1": ["/docs/dashboard", "Dashboard"],
            "s2": "En este caso, <span class=\",beyond\">BeyondJS</span> se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definición del <span className=\"inline\">Controller</span> y los archivos <span className=\"inline\">module.json</span> y <span className=\"inline\">.tsconfig</span>"
          },
          "p7": "Cuando los bundles son creados por medio del Dashboard, los archivos son generados y módificados por el servicio de desarrollo."
        },
        "controller": {
          "h1": ["Widgets", "Controller Definition"],
          "p1": "Every widget must expose a defined Controller class. The Controller object is responsible for the declaration and handling of the web-component that represents the widget. The controller has a structure like the following:",
          "c1": "tpl",
          "p2": "n the code above, the Controller class extends the ReactWidgetController object which is the base controller made available to work with React. BeyondJS has a controller available for the various view frameworks. The objects are:",
          "and": " and ",
          "p3": "All controllers handle the same interface, but are focused on integrating and working with the view framework that is being used.",
          "h3#properties": "Properties",
          "items1": [{
            "s1": "Defined as a getter and should return the main view component ",
            "l1": ["/docs/api/IWidgetStore", "IWidgetStore"],
            "s2": "."
          }, "uri<URIObject> [optional] : Objeto Uri con toda la información asociada a la url actual.\n"],
          "h3#methods": "Methods",
          "items2": [{
            "s1": "Allows adding logic for handling the widget State, it must return an object with the IWidgetStore interface",
            "l1": "IWidgetStore"
          }, "initialise<void> [optional]: Allows you to add logic to be executed before mounting the web component in the HTML DOM.", "hide<void> [optional]: Executed when it has been rendered and it is hidden. This happens when navigating from one URL to another.", " show<void> [optional]: Runs every time the URL is accessed and the page is displayed in the browser."]
        },
        "layout": {
          "h1#layouts": ["Widgets", "Layouts"],
          "p1": "Layouts represent the general structure of a website, which can be shared between various internal pages.",
          "c1": "tpl1"
        },
        "page": {
          "p1": "Page type widgets represent a page from a website or web application accessed through a URL. When a web project receives a request by URL, BeyondJS takes care of identifying the widget with that defined URL to initialize the component and make it available in the DOM.",
          "c1": "tpl1",
          "p2": "Pages require the same configuration structure as any widget, but they also receive the following configuration parameters:",
          "items1": ["route: <string>: Defines the URL or path to the component.", "layout <string> [optional]: y defines whether you want to use a layout or not on your page.", "vdir <string> [optional] : This allows you to define if you want to handle any dynamic value in the URL."],
          "h2#route-pattern": "Route pattern",
          "p3": "URLs with dynamic values can be defined by adding variables to the route property with a syntax similar to template strings.",
          "p4": "To exemplify it, let's suppose that you have a page where you need modifying a user's data, and you also need to manage the id through the URL. The widget's route property would have the following value:",
          "c2": "tpl2",
          "p5": "The following URLs would match the created route:",
          "items2.code-items": ["/user/edit/1", "/user/edit/any-identifier"],
          "p6": "These properties are available in the `uri` object available as a property in the widget controller and could be accessed from the controller as follows:",
          "c3": "tpl3",
          "p8": "The uri object passed to view components as well. The way to access them depends on the implementation of each framework or tool."
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