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
    "module": "@beyond/docs/docs/starting/tutorial",
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
    hash: 278690393,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1#start": ["Tutorial", "Web Project"],
          "h2#before": "Before beginning",
          "p1": "This tutorial walks through the main flow of development with Beyond and clearly shows the benefits it offers in its use. The purpose of this development is for end-users/developers who want to learn while practicing, therefore the concepts that define the structure of Beyond are addressed in a general approach, focusing on making a quick, concise, and clear exercise out of it. We strongly suggest accessing the corresponding chapters in the documentation to understand some concepts better.",
          "p2": "The tutorial is structures as follows:",
          "items": ["Install BeyondJS.", "Dashboard.", "Creation of the first module.", "Back-end integration.", "Navigation."],
          "p3": "We suggest completing the tutorial, to prove how in a short amount of time you´ll be able to integrate client and server-code using the same JavaScript structure.",
          "p4": "Before you start, we recommend revising these concepts to have a clear concept about them, while you go through the tutorial.",
          "items2": ["<strong>Bundle</strong>: Represents a set of source files that generates a single final file, included in the browser.", "<strong>Module</strong>: Represents one or multiple bundles.", "<strong>Processor</strong>: Represents the code processor, compiler, or transpiler of the technology being used."]
        },
        "starting": {
          "h2#starting": "Starting",
          "p1": "The first thing to do is create the project, for this, we will use the bundle @beyond-js/create-project. It is responsible for installing BeyondJS locally and generating the initial structure of our project.",
          "q1": {
            "s1": "BeyondJS, is developed to work as a global dependency and run multiple projects simultaneously. Learn more about it ",
            "l1": ["/quick-start", "here"]
          },
          "c1": "npx",
          "p3": "In the previous command, you can see a requisition to create a web-type project with a backend, and it was added as a scope <strong>testing</strong> and as a name <strong>login</strong>.",
          "q2": {
            "s1": "The scope and name, are data that allow the project to be identified and be ready to be published as an npm bundle, or to be imported from another project. These settings can be done manually, but the dashboard just makes the process much simpler. You can see the explanation of it in the ",
            "l1": ["/project/config", "Project Settings chapter"]
          },
          "p5": "At the end of the command, we can see that the following files were created, the beyond folder that we defined as container was created, and inside it, we will have the following structure:",
          "items": ["<strong>beyond.json</strong>: File for managing the development server, managed by BeyondJS", "<strong>package.json</strong>: Project dependencies file", "<strong>projects.json</strong>: Projects configuration file, allows BeyondJS to identify the projects for launch.", {
            "s1": "<strong>login</strong>: Project folder",
            "items": ["<strong>project.json</strong>: Contains the basic configuration of the project (may vary depending on the type and needs of the project).", {
              "s1": "<strong>/modules</strong>: Folder where the default project modules are created. This value is configurable. Reed more about it in the ",
              "l1": ["/docs/projects/json", "Project Confirguration chapter"],
              "items": ["<strong>backend</strong>: it starts the backend platform", "<strong>home</strong>: basic page module with a default route", "<strong>layouts</strong>: Folder with default layout of the web project"]
            }, {
              "s1": "<strong>template</strong>: This folder contains all the needed elements to define the general project template.",
              "items": ["<strong>template.json</strong>: File that allows adjustments to be done to the project template setting."]
            }]
          }],
          "q3": {
            "s1": "Learn more about the available project types in the ",
            "l1": ["/quick-start", "Quick Start chapter"]
          },
          "p7": "After having executed the command, we are ready to start our project.  Execute the following:",
          "c2": "beyond",
          "p8": {
            "s1": "After executing the command, a message will appear indicating that the dashboard is available at ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": ". While navigating it, you will be able to see the Dashboard interface with the project list board, where the created project appears with the link to navigate it below the title. If we click on it, the screen will split into two, and we will be able to navigate the project from the dashboard."
          },
          "i1": ["/images/tutorial/projects-list.png", "BeyondJS - Module List view"],
          "q4": {
            "s1": " The project port is defined in the project.json file. Read more about it in the ",
            "l1": ["/projects/json", " Project Configuration chapter."]
          },
          "q5": {
            "s1": "The navigation functionality is a feature of the dashboard and is optional. The project has the ability of being navigated independently in any browser.\n"
          },
          "p9": "Now, you are ready to start working on the first module."
        },
        "backendLogic": {
          "h1": ["Tutorial", "Backend Logic"],
          "p1": "Login forms, by nature, require validating data against a backend that connects to some data handler. Next, we are emulating the connection to the database, creating our integration with a node service, which will have a predefined username and password against which we will validate if the session is valid or not. To achieve this, we will make use of WebSockets.",
          "p2": "To create a BRIDGE bundle, it is necessary basically to create a node service and achieve integration with client code. Bundle bridges, as their name implies, develop a connection bridge between the client and server code, allowing the code to be handled uniformly."
        },
        "backendInitialization": {
          "h2#backend": "Backend Initialization",
          "q1": "BeyondJS provides the @beyond-js/backend library to create the of backend code. This library is optional to avoid its unnecessary inclusion in those projects that do not require it.",
          "p1": "The project comes with a `start-backend` module that contains a bundle of type `start` that is responsible for initializing the Backend through the following code:",
          "c2": "module2",
          "p2": {
            "s1": "The initialization of the backend is necessary for executing the ",
            "l1": ["/docs/bee", "BEE"],
            "s2": "  that manages the JavaScript code on the server-side of our project.\n"
          },
          "q4": " Los `bridges` son un feature central y muy poderoso en <span class=\"inline\">BeyondJS</span> y en este tutorial solo se muestran de forma superficial. Si quieres conocer más y entender cómo funcionan, dirígete a la sección de bridges.",
          "h3#bridge": "Creation of bundle bridge\n",
          "q5": {
            "s1": "If you want to know more about managing bundles and modules, you can go to the ",
            "l1": ["/modules/introduction", "Modules section."]
          },
          "p6": "You will create the Bridge bundle from the Dashboard module creation form, which can be accessed from the + icon on the Aside. A modal will appear similar to the bolow image:",
          "i2": ["/images/tutorial/create-module.png", "Creating module on BeyondJS Dashboard"],
          "p61": "Select blank module and on the next screen, select Bridge module.\n",
          "i3": ["/images/tutorial/bundle-type.png", "Creating module on BeyondJS Dashboard"],
          "p62": "You add the module name, which we will be called `auth`, and confirm. When the form finishes executing, BeyondJS will have created a folder with the module structure. This includes a structure similar to the home module, but with a bundle of a bridge type instead of a page one.\n.",
          "i4": ["/images/tutorial/bridge-form.png", "Creating module on BeyondJS Dashboard"],
          "p7": "\nYou add the module name, which we will be called `auth`, and confirm. When the form finishes executing, BeyondJS will have created a folder with the module structure. This includes a structure similar to the home module, but with a bundle of a bridge type instead of a page one.\n",
          "p8": "Our final module.json should have the following structure:",
          "c4": "platforms2",
          "q2": "module.json are currently not visible from the dashboard, you can see them from your preferred IDE"
        },
        "bridgeCode": {
          "h1": ["Tutorial", "Bridge Code"],
          "p1": "As we mentioned before, in this moment, usually, each project has its logic for session validation. The intention today is not to focus on how should this be handled. What you will do, is create a basic code that allows you to connect our client code with the backend node. You'll add this to the existing bridge.ts file in the module you just created.\n",
          "c1": "bridge",
          "p2": "The code is quite simple, but there are several interesting points to highlight: ",
          "items": [{
            "s1": "The magic comment /*bundle*/, is used by Beyond to identify that the code below should be considered as a code to be exported in the final bundle. If you want to read more about how bundles and modules work, we recommend you go to the ",
            "l1": ["/modules/introduction", "modules chapter"],
            "s2": " of the documentation."
          }, "The magic comment /*actions*/ is used by BeyondJS to identify which segments of the bundle bridge should be made available as actions that can be consumed by the client.", "The response of the login method is a flat object that arrives with the defined structure to the client."]
        },
        "connectClientAndServer": {
          "h2": "Connect client and server",
          "p1": {
            "s1": "The bridge we created is a node service. Generally, to run a node service, it is necessary to go to a console. However, in BeyondJS, these services work as a ",
            "l1": ["/bee", "BEE (Beyond Environment Service)"],
            "s2": "and to execute it, we must go to the",
            "l2": ["/docs/dashboard", "Dashboard"],
            "s3": " and click on the execution button, which we can find on the project detail screen"
          },
          "p2": "And another in the project detail:",
          "i1": ["/images/dashboard/v1/bee.png", "Beyond Environment Execution - Dashboard - BeyondJs"],
          "p4": "To implement the login functionality with our server, we must import our auth object in the client code and associate the onSubmit event to our form.",
          "p5": "Projects in BeyondJS follow the same guidelines for specification and resolution of names and packages, as npm, in the same way that typescript does. They must have a module name and can handle a scope as well. In our case, we define both when creating our project and module respectively.",
          "p6": "Next, in our Page component we import the Auth object",
          "c1": "view1",
          "p7": "We add our onSubmity function and associate it to the form, our code should be as follows:",
          "c2": "view2",
          "p8": "Time to test our form. If we add the correct data, we can see a message appearing in the browser console indicating that the data was validated, and you can log in. If, on the contrary, we add incorrect data, we can see how the error message \"Invalid data\" appears. Which we update in the component's state variable.",
          "p9": "Summary:",
          "items": ["We create a module with a page type widget", "We create a connection with a backend node through the bundle bridge.", "We review the module resolution structure to import the Auth bridge and be able to add the login validation."],
          "p10": "Now we just need to redirect the user to a welcome screen."
        },
        "firstModule": {
          "h1#first-module": ["Tutorial", "First module"],
          "p0": "From the dashboard, we can also see the content of these modules. For this, we can click on the project icon at the PreAside. Then you can select the module you want, and then you can see its structure.\n",
          "i1": ["/images/tutorial/project-view.png", "BeyondJS - Navigating module"],
          "p1": "As can be observed, the project has two modules created, the Home, which is a response to the base URL of the project, and the “start-backend” module, which will be addressed later.",
          "p2": "The dashboard allows us to",
          "items1": ["See and manage modules.", "Add files.", "Edit source code.", "Generate declarations of code.", "Errors handling.", "Manage general settings of the module", "Manage Templates."],
          "p3": "From the Dashboard, we can also navigate the module by accessing the PreAside at the Active project icon. You click on the home module, and it will display the list of bundles contained in the module.",
          "i2": ["/images/tutorial/navigate-module.png", "BeyondJS - Navigating module"],
          "p4": "The structure of the module is as follows",
          "items": ["widget: Folder where the page component code is located.", {
            "s1": "ts: ",
            "items": ["controller.ts: Component controller object, required to mount the WebComponent in the browser.", {
              "s1": "views",
              "items": ["index.tsx: React component that renders the page."]
            }]
          }, "scss: Folder for adding styles to the module", "module.json: Module configuration file (Place to define the type of bundles and processors to use)."],
          "p5": "Let's get down to business!",
          "p6": "Having a clear idea on the structure, what's next is creating the login form and adding some styles, and then continuing with the connection to the backend node."
        },
        "formCreation": {
          "h2#form-creation": "Form Creation",
          "p1": "If you have previously worked with React, what follows is the part you will probably know best, for sure, with some subtleties. Next, you will edit our page.tsx file to create a login form and a basic functionality to update status.\n",
          "p2": "IDE or from the integrated Dashboard Editor, which speciallty is providing help to the developer for specific cases. But for the purposes of the tutorial, we recommend using it by clicking on the required file from the side.\n\n",
          "c1": "page"
        },
        "styles": {
          "h2": "Styles",
          "p1": "BeyondJS handles styling by default with the SASS preprocessor. Let's go to our styles.scss file and add some styling to the form.",
          "q2": {
            "s1": "SASS is a processor in BeyondJS. To read in-depth about the processor's mechanism, you can find further details in the",
            "l1": ["/processors", "processor's chapter"]
          },
          "c1": "styles",
          "p3": "Let's explain a bit the above code.",
          "items": ["We add basic styling to the form, the inputs, the submit button, and for handling an error message.", {
            "s1": "Custom properties: the custom properties used are a simple structure for handling variables included by beyond in the ",
            "l1": ["/template", "Project Template."]
          }]
        },
        "p3": {
          "s1": "<strong>The Dashboard</strong> is a powerful tool provided by BeyondJS. You can learn more about this in ",
          "l1": ["/dashboard", "detail section"]
        },
        "routing": {
          "h1": ["tutorial", "Routing"],
          "p1": "The first thing we must do is create a new module with a bundle of type Page. For this, we going to repeat the process that we used to create our Bridge bundle.",
          "p2": "We click on the icon to add modules and a modal like the following will open:",
          "i1": ["/images/dashboard/v1/create-module-1.png", "Create module on beyond project 1"],
          "p3": "We select blank module. On the next screen, it request the bundle, we then select “page”:",
          "i2": ["/images/dashboard/v1/create-module-2.png", "Create module on beyond project 2"],
          "p4": "On the final screen, it will require us for some information, below it is explained what to place on it:",
          "i3": ["/images/dashboard/v1/create-module-3.png", "Create module on beyond project 3"],
          "items2": ["Module name: welcome", "Web component name: welcome-page.", "Url: \"/welcome\""],
          "p5": "Pages and layouts in Beyond are resolved using Web components. If you want to know in detail how they work and why, go to the Web Components Section.",
          "p6": "We then open the Page object created in the module and add a simple message that says: Welcome!",
          "p7": "Next, we will make the necessary adjustments to redirect to our welcome module after logging in. What we need to do after is import the \"routing\" object from Beyond, use the pushState method as it provides, and navigate to the welcome page.",
          "h4#imports": "Imports",
          "c1": "importing",
          "h4#pushState": "Navigation",
          "c2": "pushState",
          "q1": {
            "s1": "BeyondJS provides a routing object to interact with the navigation api, you can learn more about it in the section on ",
            "l1": ["/docs/routing", " Routing "],
            "s2": " page."
          },
          "p8": "We are done! now we only need to refresh our form page to let BeyondJS register the new URL. If we retest our form, we'll be able to log in and see how we've been redirected to the welcome page."
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
    "module": "@beyond/docs/docs/starting/tutorial",
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
    hash: 2580267764,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Tutorial", "Proyecto Web"],
          "h2": "Antes de Empezar",
          "p1": "Este tutorial busca el flujo principal de desarrollo con BeyondJS y demostrar de manera clara los beneficios que este ofrece. El propósito de este tutorial es que los usuarios/programadores puedan  aprender mientras practican, por tanto, los conceptos que definen la estructura de BeyondJS son abordados de forma general, focalizando en hacer un ejercicio rápido, conciso y claro. Para mayor entendimiento de los algunos conceptos, es necesario acceder a las secciones correspondientes en la documentación.",
          "p2": "El tutorial se divide de la siguiente forma: ",
          "items": ["Instalar BeyondJS", "Dashboard.", "Creación de primer módulo.", "Integración con el backend.", "Navegación."],
          "p3": "Sugerimos que este sea completado, para demostrar cómo en poco tiempo logras integrar código de cliente y servidor, utilizando la misma estructura JavaScript.",
          "p4": "Antes de empezar, recomendamos la revisión de los siguientes conceptos para que los tengas presente a medida que avanzas",
          "items2": ["<strong>Bundle</strong>: Representa un conjunto de archivos fuentes que generan un único archivo final, el cual es incluido en el navegador.", "<strong>Module</strong>: Representa uno o múltiples bundles.", "<strong>Processor</strong>: Representa el procesador, compilador o transpilador de código de la tecnología que se está utilizando."]
        },
        "starting": {
          "h2": "Empezando",
          "p1": "Lo primero que debe hacerse es crear el proyecto, para ello usaremos el paquete <span  class=\"inline\">@beyond-js/create-project</span> se encarga de instalar BeyondJS de manera local y generar la estructura inicial de nuestro proyecto.",
          "q1": {
            "s1": "BeyondJS está realizado para funcionar como dependencia global y correr varios proyectos en simultáneo, puedes aprender más sobre esto ",
            "l1": ["/quick-start", "aqui"]
          },
          "c1": "npx",
          "p3": "En el comando anterior, se solicitó crear un proyecto de tipo web con backend y se le agregó como scope <strong>testing</strong> y como nombre <strong>login</strong>.",
          "q6": {
            "s1": "Puedes aprender más acerca de los tipos de proyecto disponibles en la sección de ",
            "l1": ["/quick-start", "Inicio Rapido."]
          },
          "q2": {
            "s1": "El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma manual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello en ",
            "l1": ["/project/config", "La seccion de Configuracion de proyecto"]
          },
          "p5": "Al finalizar el comando, podemos validar la estructura creada adentro del directorio, es la siguiente:",
          "items": ["<strong>beyond.json</strong>: Archivo para manejar el servidor de desarrollo, gestionado por BeyondJS.", "<strong>package.json</strong>: Archivo de dependencias del proyecto", "<strong>projects.json</strong>: Archivo de configuración de proyectos, permite a BeyondJS identificar los proyectos a levantar.", {
            "s1": "<strong>login</strong>: Carpeta del proyecto.",
            "items": ["<strong>project.json</strong>: Contiene la configuración básica del proyecto (puede variar según el tipo y las necesidades del mismo).", {
              "s1": "<strong>/modules</strong>:  Carpeta en donde se crean los módulos del proyecto por defecto. Este valor es configurable, puedes leer más de ello en la sección de ",
              "l1": ["/projects/json", "Configuracion de Proyectos"],
              "items": ["<strong>backend</strong>: it starts the backend platform", "<strong>home</strong>: basic page module with a default route", "<strong>layouts</strong>: Folder with default layout of the web project"]
            }, {
              "s1": "<strong>template</strong>: Esta carpeta contiene todos los elementos necesarios para definir el template general del proyecto.",
              "items": ["<strong>template.json</strong>: Archivo que permite realizar ajustes en la configuración del template del proyecto."]
            }]
          }],
          "p7": "Luego de haber ejecutado el comando, ya estamos listos para empezar nuestro proyecto, para ello ejecutamos lo siguiente.",
          "c2": "beyond",
          "p8": {
            "s1": "Luego de ejecutar el comando puede verse un mensaje que indica que el Dashboard está disponible en ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": ", lo navegamos y podemos ver la interfaz del Dashboard con el board del listado de proyectos, donde aparece el proyecto creado con el link para navegarlo debajo del titulo, si hacemos click en el, la pantalla se dividirá en dos y podremos navegar el proyecto desde el dashboard."
          },
          "i1": ["/images/tutorial/projects-list.png", "BeyondJS - Module List view"],
          "q4": {
            "s1": " El puerto del proyecto se define en el archivo project.json, puedes leer más sobre ello en la sección de ",
            "l1": ["/projects/json", "Configuracion de Proyectos"]
          },
          "q5": {
            "s1": "La funcionalidad de navegación es un feature del dashboard y es opcional, el proyecto puede navegarse de forma independiente en cualquier navegador.\n"
          },
          "p9": "Ahora estamos listos para empezar a trabajar en el primer módulo."
        },
        "backendLogic": {
          "h1": ["Tutorial", "Logica Backend"],
          "p1": "Por su naturaleza, Los formularios de inicio de sesión requieren validar los datos contra un backend que se conecte a algún manejador de datos. A continuación, vamos a emular la conexión a la base de datos, creando nuestra integración con un servicio node, que tendrá un usuario y clave predefinidos y así, podremos revisar si la sesión es válida o no. Para lograrlo, haremos uso de websockets.",
          "p2": "Para realizar la integración cliente/servidor, es necesario crear un bundle de tipo BRIDGE, que cómo su nombre indica, nos permitirá integrar la lógica entre ellos. Para crearlo, haremos uso del formulario de creación de módulos del Dashboard, que se puede acceder desde el ícono de + en el Aside."
        },
        "backendInitialization": {
          "h2#backend": "Inicializacion del Backend",
          "q1": "BeyondJS provee la libreria @beyond-js/backend para la creación de código backend, esta libreria es opcional para evitar su inclusión innecesaria en aquellos proyectos que no la requieran.",
          "p1": "El proyecto trae un módulo `start-backend` que contiene un bundle de tipo `start` que se encarga de la inicialización del Backend, por medio del siguiente código:",
          "c2": "module2",
          "p2": {
            "s1": "La inicialización del backend es necesaria para que se ejecute el ",
            "l1": ["/docs/bee", "BEE"],
            "s2": " que gestiona el código javascript del lado servidor de nuestro proyecto."
          },
          "q4": " Los `bridges` son un feature central y muy poderoso en <span class=\"inline\">BeyondJS</span> y en este tutorial solo se muestran de forma superficial. Si quieres conocer más y entender cómo funcionan, dirígete a la sección de bridges.",
          "h3#bridge": "Creación del Bridge",
          "q5": {
            "s1": "Si quieres conocer más acerca del manejo de bundles y módulos, puedes ir a la ",
            "l1": ["/modules/introduction", "seccion de módulos"]
          },
          "p6": "El bundle Bridge, lo crearemos desde el formulario de creación de módulos del Dashboard, al cual se puede acceder desde el ícono + en el Aside. Aparecerá un formulario como el siguiente: ",
          "i2": ["/images/tutorial/create-module.png", "Creating module on BeyondJS Dashboard"],
          "p61": "Seleccionamos módulo en blanco y en la siguiente pantalla, seleccionaremos módulo Bridge",
          "i3": ["/images/tutorial/bundle-type.png", "Creating module on BeyondJS Dashboard"],
          "p62": "A continuación, se mostrará un formulario para agregar el nombre del módulo, al cual llamaremos `auth`.",
          "i4": ["/images/tutorial/bridge-form.png", "Creating module on BeyondJS Dashboard"],
          "p7": "A continuación agregamos el nombre del módulo, al cúal llamaremos `auth` y confirmamos.  Cúando el formulario termine la ejecución, BeyondJS habrá  creado una carpeta con la estructura del módulo, que incluye una estructura similar a la del módulo home, pero con un bundle de tipo bridge en vez de page. ",
          "p8": "Nuestro module.json final, debería quedar con la siguiente estructura:",
          "c4": "platforms2",
          "q2": "los module.json actualmente no son visibles desde el dashboard, puedes verlos desde tu IDE de preferencia"
        },
        "bridgeCode": {
          "h1": ["Tutorial", "Código Bridge"],
          "p1": "\nComo mencionamos antes, en esta parte generalmente cada proyecto tiene su propia lógica para la validación de sesión. La intención hoy no es enfocarse en cómo debe manejarse esto, lo que haremos será crear un código básico que nos permita conectar nuestro código cliente con el backend node. Esto lo agregaremos en el archivo bridge.ts existente en el módulo que acabamos de crear.",
          "c1": "bridge",
          "p2": "El código es bastante simple, pero hay varios puntos interesantes a destacar",
          "items": [{
            "s1": "El comentario mágico /*bundle*/es utilizado por Beyond para identificar que el código a continuación debe ser considerado como código a exportar en el bundle final. Si quieres leer más acerca del funcionamiento de bundles y módulos, te recomendamos ir a La ",
            "l1": ["/modules/introduction", "seccion de módulos"],
            "s2": " de la documentacion."
          }, "El comentario mágico /*actions*/es utilizado por Beyond para identificar que segmentos del bundle bridge deben quedar disponibles como acciones que puedan ser consumidas por el cliente.", "La respuesta del método login es un objeto plano que llega con la estructura definida al cliente."]
        },
        "connectClientAndServer": {
          "h2": "Conectar cliente y servidor",
          "p1": {
            "s1": "El bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario ir a una consola. Sin embargo, en BeyondJS estos servicios funcionan como un ",
            "l1": ["/bee", "BEE (Beyond Environment Service)"],
            "s2": " y para ejecutarlo debemos ir al ",
            "l2": ["/dashboard", "Dashboard"],
            "s3": " y darle al botón de ejecución, que podemos encontrar en la pantalla de detalle del proyecto."
          },
          "p2": "Y otro en el detalle del proyecto:",
          "i1": ["/images/dashboard/v1/bee.png", "Beyond Environment Execution - Dashboard - BeyondJs"],
          "p4": "Para poder implementar la funcionalidad de login con nuestro servidor, debemos importar nuestro objeto auth en el código cliente y asociar el evento onSubmit a nuestro formulario.",
          "p5": "En BeyondJS los proyectos siguen las mismas directrices para especificación y resolución de nombres y paquetes que npm, de la misma forma que lo hace typescript. Deben tener nombre de módulo y pueden manejar un scope también. En nuestro caso, definimos ambos al momento de crear nuestro proyecto y módulo respectivamente.",
          "p6": "A continuación, en nuestro componente Page importamos el objeto Auth",
          "c1": "view1",
          "p7": "Agregamos nuestra función onSubmity la asociamos al formulario, nuestro código debe quedar de la siguiente forma:",
          "c2": "view2",
          "p8": "Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que indica que los datos fueron validados y se puede iniciar sesión, si por el contrario, agregamos datos incorrectos, podremos ver como aparece el mensaje de error \"Invalid data\" el cual actualizamos en la variable de estado del componente.",
          "p9": "Resumen:",
          "items": ["Creamos un módulo con un widget de tipo page.", "Creamos una conexión con un backend node por medio del bundle bridge.", "Repasamos la estructura de resolución de módulos para importar el bridge Auth y poder agregar la validación de inicio de sesión."],
          "p10": "Ahora solo nos falta redireccionar al usuario a una pantalla de bienvenida."
        },
        "p3": {
          "s1": "<strong>El Dashboard</strong> es una herramienta muy potente provista por BeyondJS. Puedes aprender más acerca de esto en",
          "l1": ["/dashboard", "La seccion de detalle"]
        },
        "firstModule": {
          "h1": ["Tutorial", "Primer módulo"],
          "p0": "En el dashboard, también podemos hacer click sobre el proyecto y esto abrirá un nuevo tab con el listado de módulos del mismo.",
          "i1": ["/images/tutorial/project-view.png", "BeyondJS - Project view"],
          "p1": "Como puede verse, el proyecto trae dos módulos creados, el Home, que responde a la URL base del proyecto y el módulo “start-backend” del cúal se hablará más adelante.",
          "p2": "El Dashboard nos permite hacer las siguientes acciones sobre un módulo",
          "items1": ["Ver y gestionar módulos.", "Agregar archivos.", "Editar el código fuente de los archivos.", "Generar declaraciones.", "Visualizar errores de código.", "Gestionar configuraciones generales del proyecto", "Gestionar Templates"],
          "p3": "Desde el Dashboard, podemos también navegar el módulo accediendo desde el menu lateral (PreAside), en el icono del proyecto Activo, que desplegará el aside con el listado de módulos del proyecto,  hacemos click sobre el módulo home y se mostrará la lista de bundles contenidos en el módulo y el contenido de estos, procesadores y archivos.",
          "i2": ["/images/tutorial/navigate-module.png", "BeyondJS - Navigating module"],
          "p4": "La estructura del módulo `home` es la siguiente:",
          "items": ["widget: Carpeta en donde se encuentra el código del componente page", {
            "s1": "ts: ",
            "items": ["`controller.ts`: Objeto controlador del componente, requerido para poder montar el WebComponent en el navegador.", {
              "s1": "`views",
              "items": ["`index.tsx`: Componente react que renderiza la página.\""]
            }]
          }, "scss: Carpeta para agregar estilos al módulo.", "module.json: Archivo de configuración del módulo (Lugar para definir tipo de bundles y procesadores a utilizar)."],
          "p5": "¡Manos a la obra!",
          "p6": "Teniendo clara la estructura, lo que procede a continuación es crear el formulario de inicio de sesión y agregar algo de estilos, para luego continuar con la conexión al backend node"
        },
        "formCreation": {
          "h2#creating-module": "Creación del Formulario",
          "p1": "Si has trabajado con React, lo que viene es la parte que seguramente conoces mejor, con algunas sutilezas seguramente. A continuación, editaremos nuestro archivo page.tsx para crear un formulario de inicio de sesión y la funcionalidad básica para actualizar el estado.",
          "p2": " La edición puede hacerse desde tu IDE de preferencia y también desde el Editor integrado del Dashboard, el cual tiene como finalidad brindar ayuda para casos especificos al desarrollador, pero para efectos del tutorial recomendamos usarlo, basta con hacer click en el archivo requerido desde el aside.",
          "c1": "page"
        },
        "styles": {
          "h2": "Estilos",
          "p1": "BeyondJS maneja los estilos por defecto con el preprocesador SASS, ahora vamos a nuestro archivo styles.scss y agreguemos un poco de estilo al formulario.",
          "q2": {
            "s1": "SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podrás encontrar los detalles en ",
            "l1": ["/docs/processors", "La seccion de procesadores"]
          },
          "c1": "styles",
          "p3": "Expliquemos un poco el código anterior:",
          "items": ["Agregamos estilo básico al formulario, los inputs, el botón de envío y para manejar un mensaje de error.", {
            "s1": "Custom properties: las custom properties utilizadas, son una estructura básica para manejo de variables incluidas por beyond en el ",
            "l1": ["/template", "Template del proyecto"],
            "s2": "."
          }]
        },
        "routing": {
          "h1": ["Tutorial", "Routing"],
          "p1": "Lo primero que debemos hacer, es crear un nuevo módulo con un bundle de tipo Page, esta vez lo haremos desde el Dashboard. Accedemos al Dashboard y seleccionamos el proyecto (si no lo hemos hecho). Esto habilitará en el PreAside las acciones que podemos realizar sobre el proyecto.",
          "p2": "Hacemos clic en el ícono para agregar módulos y se abrirá un modal como el siguiente:",
          "i1": ["/images/dashboard/v1/create-module-1.png", "Create module on beyond project 1"],
          "p3": "Seleccionamos módulo en blanco. Y en la siguiente pantalla, nos pide el bundle, seleccionamos \"page\":",
          "i2": ["/images/dashboard/v1/create-module-2.png", "Create module on beyond project 2"],
          "p4": "En la pantalla final, nos pedirá algunos datos, a continuación, se explica que colocar:",
          "i3": ["/images/dashboard/v1/create-module-3.png", "Create module on beyond project 3"],
          "items2": ["Module name: welcome", "Web component name: welcome-page.", "Url: \"/welcome\""],
          "p5": "Las páginas y layouts en Beyond se resuelven haciendo uso de Web components. Si quieres saber en detalle cómo funcionan y porqué, dirígete a la sección de Web Components.",
          "p6": "Abrimos el objeto Page creado en el módulo y agregaremos un mensaje simple que diga: ¡Bienvenido!",
          "p7": "A continuación, Haremos los ajustes necesarios, para redireccionar a nuestro módulo de bienvenida, luego de iniciar sesión. Lo que debemos hacer a continuación, es importar el objeto \"routing\" de Beyond, para usar el método pushState que provee y navegar a la página de Bienvenida.",
          "h4#imports": "Importación",
          "c1": "importing",
          "h4#pushState": "Navegación",
          "c2": "pushState",
          "q1": {
            "s1": "BeyondJS provee un objeto routing para interactuar con la api de navegación, puedes aprender más al respecto en la sección de ",
            "l1": ["/docs/routing", " Enrutamiento."]
          },
          "p8": "Ahora sólo debemos refrescar la página del formulario para que BeyondJS registre la ruta nueva creada y  Si volvemos a probar nuestro formulario, podremos iniciar sesión y ver cómo nos dirigimos a la página de bienvenida."
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