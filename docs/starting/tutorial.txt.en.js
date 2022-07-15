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
    hash: 588928215,
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
              "l1": ["/projects/json", "Project Confirguration chapter"]
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
});