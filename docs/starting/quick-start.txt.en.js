System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/docs/starting/quick-start",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});