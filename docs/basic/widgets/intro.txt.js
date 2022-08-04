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
    "module": "@beyond/docs/docs/basic/widgets/intro",
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
    "module": "@beyond/docs/docs/basic/widgets/intro",
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
    hash: 865183428,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Widgets", "Introducción"],
          "p1": {
            "s1": "En `BeyondJS`, La arquitectura de desarrollo para aplicaciones o proyectos webs, está diseñada para trabajar con una estructura de",
            "e1": ["https://micro-frontends.org", "microfrontends"]
          },
          "s2": ", brindando la posibilidad de integrar diferentes stacks tecnológicos en un mismo proyecto, lo que permite evaluar qué tecnología es más conveniente para desarrollar funcionalidades específicas, esto se logra por medio de la creación de <strong>widgets</strong>"
        },
        "p2": {
          "s1": "Un Widget es un tipo de ",
          "l1": "bundle",
          "s2": " disponible en BeyondJS y es implementado por medio de un",
          "e1": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components", "Web Component"],
          "s3": " con ",
          "e2": ["https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM", "shadow DOM"],
          "s4": "para encapsular su contenido. Al ser un componente web, puede definir propiedades y métodos, también puede ser accedido por medio de la Api Web de JavaScript. Otra ventaja importante de los widgets, es que realizan la carga de dependencias a demanda y sólo cuando son requeridas, optimizando así los tiempos de carga de los componentes.",
          "q1": {
            "s1": "BeyondJS implementa las técnicas de renderizado sobre widgets, esto ofrece la posibilidad de integrar renderizados híbridos en un proyecto, puedes leer más sobre ello en la",
            "l1": ["/docs/rendering", " sección de renderizado"]
          },
          "p4": {
            "s1": "BeyondJS brinda soporte para trabajar con frameworks/librerías como",
            "e1": ["https://reactjs.org/", "React"],
            "s2": ", ",
            "e2": ["https://vuejs.org/", "Vue"],
            "s3": " y ",
            "e3": ["https://svelte.dev/", "Svelte"],
            "s4": " y tiene disponible la posibilidad de integrar nuevas librerías o herramientas.",
            "h2#react": "Using <span className=\"inline\">React</span> ",
            "p1": "React tiene soporte automático por medio de typescript en BeyondJS, que utiliza Babel para convertir el código. Por tanto, habiendo agregado el procesador ts y teniendo instalada la dependencia de React, tu módulo ya está listo para trabajar con ReactJS.",
            "p2": "la configuración de react se realiza por medio de los archivos .tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la documentación de typescript",
            "e4": ["https://www.typescriptlang.org/docs/handbook/jsx.html", "documentación de typescript"],
            "h2#svelte-vue": "Usando <span className=\"inline\">Svelte</span> o <span className=\"inline\">Vue</span>",
            "p3": {
              "s1": "Cada framework tiene su propio ",
              "l1": "procesador",
              "s2": "on el nombre de la libreria. para utilizarlos, solo es necesario incluir el procesador en la configuración del bundle."
            }
          }
        },
        "definition": {
          "h1": ["Widgets", "Definición"],
          "q1": {
            "s1": "Un widget es un tipo de bundle y en BeyondJS tiene una filosofía de carga modular y los bundles son la representación de código final a ser ejecutado en el entorno javascript. Si quieres leer acerca de todos los tipos de bundles existentes, puedes dirigirte a la ",
            "l1": ["/docs/bundles", "sección de bundles."]
          },
          "p1": "Los widgets exponencian las ventajas ya existentes en los componentes web gracias al encapsulamiento. Permiten integrar con una mínima configuración diferentes tecnologías y ofrecen una api simple para gestionar sus propiedades, metodos e interacción con el resto de componentes de un proyecto web. También, pueden ser disponibilizados como paquetes NPM y utilizados desde cualquier proyecto que utilice javascript <strong> sin necesidad </strong> de requerir de BeyondJS.",
          "p2": "Existen tres tipos de widgets:",
          "items": ["<strong>page:</strong> Diseñados para crear las diferentes páginas del aplicativo, recibe parametros de configruación asociados a la URL y al uso de layouts.", "<strong>layout:</strong> Representan a contenedores de páginas, permiten separar código o lógicas transversales a páginas. Un layout puede también contener otro layout.", "<strong>default:</strong> Exponen un componente web bajo el nombre definido y no requieren de ningún tratamiento adicional de parte de BeyondJS."],
          "p3": {
            "s1": "Todos los widgets implementan un objeto Controller quien es el encargado de manejar el ciclo de vida del componente web y permitir la definción de funcionalidades de renderizado, estado y navegación.",
            "l1": ["/docs/state-management", "estado y navegación"],
            "s2": "."
          },
          "h2#manual": "Creación manual",
          "p31": {
            "s1": "La configuración manual, se realiza agregando la definición del bundle de tipo widget en el",
            "l1": ["/docs/modules/json", "module.json"],
            "s2": " del módulo."
          },
          "p4": "El código anterior, define un bundle de tipo widget con el nombre del web-component como web-login y con typescript como procesador.",
          "h2#dashboard": "Usando el Dashboard",
          "p5": {
            "s1": " Todos los bundles pueden ser creados desde el formulario de creación de módulos en el",
            "l1": ["/docs/dashboard", "Dashboard"],
            "s2": "En este caso, <span class=\",beyond\">BeyondJS</span> se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definición del <span className=\"inline\">Controller</span> y los archivos <span className=\"inline\">module.json</span> y <span className=\"inline\">.tsconfig</span>"
          },
          "p6": "Cuando los bundles son creados por medio del Dashboard, los archivos son generados y módificados por el servicio de desarrollo."
        },
        "controller": {
          "h1": ["Widgets", "Objecto `Controller`"],
          "p1": "Todo widget debe exponer una clase Controller definida. El objeto Controller es el responsable de la declaración y manejo del web-component que representa al widget. El controller tiene una estructura como la siguiente:",
          "c1": "tpl",
          "p2": "En el código anterior, la clase Controller extiende del objeto ReactWidgetController que es el controlador base disponibilizado para trabajar con React. BeyondJS tiene disponible un controlador para los distintos frameworks de vista. Los objetos son:",
          "and": " and ",
          "p3": "Todos los controladores manejan la misma interfaz, pero están a su vez enfocados en integrar y funcionar con el framework de vista que se esté utilizando.",
          "h3#properties": "Propiedades",
          "items1": [{
            "s1": "Se define como un getter y debe retornar el componente de vista principal.",
            "l1": "IWidgetStore"
          }, "uri<URIObject> [optional] : Uri object with all the information associated with the current url."],
          "h3#methods": "Métodos",
          "items": [{
            "s1": "Permite agregar lógica para el manejo del Estado del widget, debe retornar un objeto con la interfaz",
            "l1": "IWidgetStore"
          }, "initialise<void> [optional] : Permite agregar lógica a ejecutarse previo al montado del componente web en el DOM HTML.", "hide<void> [optional] : Se ejecuta cuando ha sido renderizada y se oculta, esto sucede cuando se navega de una URLl a otra.", "show<void> [optional] : Se ejecuta cada vez que se accede a la URL y la página se muestra en el navegador."]
        },
        "layout": {
          "h1#layouts": ["Widgets", "Layouts"],
          "p1": "Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias páginas internas.",
          "c1": "tpl1"
        },
        "page": {
          "p1": "Los widgets de tipo page representan a una página de un sitio o aplicativo web que puede ser accedido por medio de una URL. Cuando un proyecto web recibe una solicitud por URL, BeyondJS se encarga de identificar al widget con esa URL definida para inicializar el componente y dejarlo disponible en el DOM.",
          "c1": "tpl1",
          "p2": "Las páginas requieren la misma estructura de configuración que la de cualquier widget, pero aparte recieben los siguientes parametros de configuración:",
          "items1": ["route: <string>: Define la URL o ruta de acceso al componente.\n", "layout <string> [optional]: define si se utiliza un layout en la página.", "vdir <string> [optional] : Permite definir si se quiere manejar algún valor dinámico en la URL."],
          "h2#route-pattern": "Patrón de rutas",
          "p3": "Se pueden definir URLs con valores dinámicos agregando las variables a la propiedad route con una sintaxis similar a la de template strings.",
          "p4": "Para ejemplificarlo, supongamos que se tiene una página de módificación de datos de un usuario y se necesita manejar el id por medio de la URL. La propiedad route del widget tendría el siguiente valor:\\",
          "c2": "tpl2",
          "p5": "Las siguientes urls coincirian con la ruta creada:",
          "items2.code-items": ["/user/edit/1", "/user/edit/any-identifier"],
          "p6": "Estas propiedades, quedan disponibles en el objeto `uri` disponible como propiedad en el controller del widget y podria ser accedido desde el controlador de la siguiente forma:",
          "c3": "tpl3",
          "p8": "El objeto uri es pasado también a los componentes de vista. La forma de acceder a ellos depende de la implementación de cada framework o herramienta."
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