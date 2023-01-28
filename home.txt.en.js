System.register(["@beyond-js/kernel@0.1.7/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 7499781,
        creator: function (require, exports) {
          exports.txt = {
            "header": {
              "notice": "Beta version",
              "title": "Create modules thinking about the future",
              "subtitle": "The only framework compatible with all JavaScript environments."
            },
            "whatIs": {
              "title": "Why choose BeyondJS",
              "links": {
                "why": "Learn more",
                "github": "Github"
              },
              "what": "BeyondJS is a meta-framework that provides a Dev Server for development and a CDN in production, to consume modules from any execution environment directly.",
              "startNow": "Start now"
            },
            "whatsIsItFor": {
              "title": "Module-based programming <br/> based on universal packages",
              "pretitle": "WHAT IS IT FOR?",
              "features": [{
                "title": "Libraries and packages",
                "description": "That are expected to be consumed by other development teams.",
                "icon": "libraries"
              }, {
                "title": " Micro Frontends / Microservices",
                "description": "Directly and without configurations.",
                "icon": "microservices"
              }, {
                "title": "SPA / WPA / Hybrid APPs",
                "description": "For mobile, desktop, and web.",
                "icon": "spa"
              }, {
                "title": "Widgets",
                "description": "With rendering on the server, on the client or hybrid in each component.",
                "icon": "widgets"
              }]
            },
            "technologies": {
              "title": "UNIVERSAL DEVELOPMENT"
            },
            "universalDevelopment": {
              "pretitle": "JAVASCRIPT IS EVERYWHERE",
              "title": "Universal Development",
              "subTitle": "The same experience for all",
              "concept": "Same code base, same development experience, and with a low learning curve. Bring the web development experience to all areas where JavaScript has reach.",
              "startNow": "Start Now",
              "moreInfo": "More information"
            },
            "doYouWantMore": {
              "preTitle": "Do you want to know more?",
              "title": "More than a Framework, <br/>it's BeyondJS",
              "features": [{
                "icon": "unification",
                "title": "Unification",
                "description": "Allows consuming packages from any environment."
              }, {
                "icon": "typescript",
                "title": "Typescript First",
                "description": "Enables automatic generation of types ( .d.ts files) and performs optimized type checking without the need for configuration."
              }, {
                "icon": "deployment",
                "title": "Deployment",
                "description": "Features <a href=\"https://workspace.beyondjs.com/\">BeyondJS Workspace</a> which manages dependency management, deployment process, and error management."
              }, {
                "icon": "hmr",
                "title": "HMR",
                "description": "Is automatically integrated for Frontend and Backend."
              }, {
                "icon": "websockets",
                "title": "Web Socket",
                "description": "Is fully ready to use with type generation for frontend-backend interaction code."
              }, {
                "icon": "esm",
                "title": "Standard ESM",
                "description": "Allows modular development based on ES Modules, with automatic generation of importmaps and SystemJS for browser projects.",
                "moreInfo": {
                  "to": "",
                  "text": "Read more"
                }
              }, {
                "icon": "checkmark",
                "title": "Everything you need",
                "description": "BeyondJS is everything you need: CSS, SASS, VUE, REACT, SVELTE are compatible with each other and naturally."
              }, {
                "icon": "npm",
                "title": "Standard NPM",
                "description": "Has an npm package optimization that eradicates “dependency hell” and ensures compatibility with different ways of consuming packages."
              }, {
                "icon": "rocket",
                "title": "Ready for the future",
                "description": "Is designed to add emerging technologies and libraries."
              }]
            },
            "codepen": {
              "preTitle": "AND THERE'S MORE...,",
              "title": "Widgets <i>out-of-the-box</i>",
              "subTitle": "Ready to use",
              "description": "We integrate a React on-demand loading widget that initially renders with SSR and allows you to instantly change rendering types (inspect it).",
              "checkItOut": "Check out the next example!"
            },
            "gettingStarted": {
              "ready": "Ready to get started?",
              "description": "Create your own project now and make a difference!",
              "links": {
                "why": "Why BeyondJS?",
                "github": "View on Github",
                "startNow": "Start now"
              },
              "creatingAProject": "Or creating a project directly"
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