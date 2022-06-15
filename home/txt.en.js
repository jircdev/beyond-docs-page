define(["exports"], function (_exports2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.txt = _exports2.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/home/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3857884750,
    creator: function (require, exports) {
      exports.txt = {
        "header": {
          "pretitle": "Welcome to BeyondJS",
          "h1": "The Full Stack Universal <br/>\nTypescript Framework",
          "description": "Integrates different development stacks and works with them under the same paradigm, prioritizing the developer experience and modular loading, without the need for packagers.."
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
          "texts": "Focused on making both tools and techniques work for multiple distributions and technologies, in a simple way, creating microservices and micro frontends."
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
          "texts": "A total and integrating experience in the development of projects simultaneously, code editing, deployment, module creation and total platform and service management."
        }
      };
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.txt = require('./txt').txt;
  };

  let txt; // Module exports

  _exports2.txt = txt;

  __pkg.exports.process = function (require) {
    _exports2.txt = txt = require('./txt').txt;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});