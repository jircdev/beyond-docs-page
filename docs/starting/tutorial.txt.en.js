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
    "module": "@beyond/docs/docs/starting/tutorial",
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
    hash: 1842438303,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1#start": ["Tutorial", "Web Project"],
          "h2#before": "Before beginning",
          "p1": "This tutorial walks through the main flow of development with Beyond and clearly shows the benefits it offers in its use. The purpose of this development is for end-users/developers who want to learn while practicing, therefore the concepts that define the structure of Beyond are addressed in a general approach, focusing on making a quick, concise, and clear exercise out of it. We strongly suggest accessing the corresponding chapters in the documentation to understand some concepts better.",
          "p2": "The tutorial is structures as follows:",
          "items": ["Dashboard.", "Creation of the first module.", "Back-end integration.", "Navigation."],
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
              "q1": {
                "s1": "<strong>/modules</strong>: Folder where the default project modules are created. This value is configurable. Reed more about it in the ",
                "l1": ["/projects/json", "Project Confirguration chapter"]
              }
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
        "firstModule": {
          "h1#first-module": ["Tutorial", "First module"],
          "p0": "As can be observed, the project has two modules created, the Home, which is a response to the base URL of the project, and the “server-start” module, which will be addressed later.",
          "p1": "From the dashboard, we can also see the content of these modules. For this, we can click on the project icon at the PreAside. Then you can select the module you want, and then you can see its structure.\n",
          "i1": ["/images/tutorial/navigate-module.png", "BeyondJS - Navigating module"],
          "p11": "The dashboard allows us to",
          "items1": ["See the bundles of a module.", "View the bundle files.", "Add files.", "Edit the source code of the files."],
          "p3": "The structure of the module is as follows",
          "items": ["widget: Folder where the page component code is located.", {
            "s1": "ts: ",
            "items": ["controller.ts: Component controller object, required to mount the WebComponent in the browser.", "views/index.tsx: React component that renders the page."]
          }, "scss: Folder for adding styles to the module", "module.json: Module configuration file (Place to define the type of bundles and processors to use)."],
          "p4": "Let's get down to business!",
          "p5": "Having a clear idea on the structure, what's next is creating the login form and adding some styles, and then continuing with the connection to the backend node."
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
          "c4": "platforms2"
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