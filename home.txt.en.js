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
          "vspecifier": "@beyond/docs@1/home",
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
        hash: 2139197393,
        creator: function (require, exports) {
          exports.txt = {
            "header": {
              "pretitle": "Welcome to BeyondJS",
              "h1": "UNIVERSAL PACKAGES",
              "description": "Code what you want and run it wherever you want.",
              "copied": "Copied to clipboard"
            },
            "solution": {
              "universalTs": {
                "title": "Typescript Universal",
                "description": {
                  "one": "Designed to create from the same project, multiple distributions such as websites, web",
                  "cordova": "Cordova applications",
                  "npm": "NPM packages",
                  "two": " and ",
                  "node": "Node projects"
                }
              },
              "jamStack": {
                "title": "Jamstack y SSR",
                "one": "Ready to publish static sites, <strong>SSR</strong>, <strong>CSR</strong> or ",
                "jamStack": "Jamstack architecture,",
                "two": " with the possibility of using them together through  ",
                "microfrontends": "micro frontends"
              },
              "frameworks": {
                "title": "Frameworks Views",
                "start": "Compatible with ",
                "and": " and ",
                "end": "Prepared to include other frameworks or view management libraries."
              }
            },
            "universal": {
              "title": "Universal Development",
              "texts": "Focused on establishing a consistent way for the development of universal and superpowered modules/packages, following the ecosystem of NPM + NodeJS."
            },
            "config": {
              "preTitle": "Easy integration",
              "title": "Minimum configuration and modular load",
              "texts": "Without module bundle and in a modular structure that ensures on-demand loading without adding complexities as the project grows."
            },
            "plugAndPlay": {
              "title": "Plug & Play",
              "texts": "Modules can be restructured and moved from one project to another without the need for additional configuration."
            },
            "hmr": {
              "pretitle": "Service Management",
              "title": "HMR in Browser and Node",
              "texts": "Runtime update of client code and Node. BeyondJS manages Node services, to avoid restarting them when changes are made and to ensure the best possible development experience."
            },
            "realtime": {
              "pretitle": "REALTIME Conection",
              "title": "Real-time connection client & server/ server & server",
              "link": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
              "startText": "Automatically supported",
              "endText": "communication to connect the client code of a mobile or web project, with a node server or service."
            },
            "readMore": "Find out more",
            "learnMore": "Learn more",
            "experience": {
              "title": "Development expertise",
              "texts": "BeyondJS provides a workspace to enhance the development experience, allowing you to simultaneously manage projects, efficiently detect and fix bugs, and manage the package deployment and release process."
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