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
    "module": "@beyond/docs/docs/starting/intro",
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
    hash: 1631559990,
    creator: function (require, exports) {
      exports.txt = {
        "features": {
          "h2#modular": "Modular Design",
          "p1": "The modular architecture is everything in BeyondJS. It allows the programmer to develop decoupled projects by dividing them into smaller parts that receive minimal configuration and are not affected by the growth of the project.\n",
          "p2": "The module structure is defined by `module.json` configuration files, with a structure like the following:\n",
          "c1": "modulejson",
          "p3": "The `module.json` allows the developer to define the bundles, files, and file types included.",
          "q1": {
            "s1": "You can learn more about module handling in BeyondJS in ",
            "l1": ["/docs/modules/introduction", "the Modules chapter."]
          },
          "h2#dev-server": "Dev Server",
          "p4": "BeyondJS provides the development server to make bundles available on demand. The browser can make requests in the usual way, and Deno supports HTTP imports, so it works the same way since the node does not support HTTP imports. BeyondJS provides a BEE that serves as a proxy to interface with the development server so that everyone keeps the same programming logic.",
          "q2": {
            "s1": "You can learn more about the behavior of the development environment in ",
            "l1": ["/docs/dev-server", "the DevServer chapter\n"],
            "s2": "."
          },
          "i1": ["/images/graphs/beyond-js-flow.png", "Beyond dev server flow"],
          "h2#on-demand": "On-demand loading",
          "p7": "Thanks to the modular design, which segments projects into small pieces or modules, they are only loaded when required, allowing fast and efficient loading of projects.",
          "p8": "The modular behavior works equally well in development and production environments.",
          "p9": "It is desirable to use one distribution optimized for development and another one for production in both cases, BeyondJS will work by building the bundles, but it will generate them based on the \nconfiguration of each distribution.\n",
          "h2#distributions": "Distributions",
          "p10": "Due to some incompatibilities still existing in the JavaScript execution environments, BeyondJS allows the developer to make his code available for different platforms through distributions.",
          "h2#hmr": "HMR",
          "p11": "Hot Module Replacement is an essential feature in today's development, commonly used in frontEnd tools. BeyondJS has it enabled by default in the DevServer and without additional configuration. It also provides a basic API to the developer that allows you to define when and what you want to update.",
          "q3": {
            "s1": "You can learn more about this in the ",
            "l1": ["/docs/foundations/hmr", " HMR chapter"],
            "s2": "."
          }
        },
        "universal": {
          "h1#intro": ["Universal Typescript", "What is BeyondJS?"],
          "cc1": "about",
          "p1": "BeyondJS is a new generation meta-framework based on Typescript, designed to create universal code and focused on the modular development of projects compatible with different Javascript runtime environments. \n",
          "p2": "The BeyondJS architecture allows you to work efficiently in large or small projects without affecting productivity as the project grows. Moreover, it guarantees the developer a homogeneous development experience.\n",
          "h2#why": "Why Modular+Universal?",
          "p3": "Deno, NodeJS, and modern browsers like Chrome or Edge are all based on the same Javascript technology. ",
          "p4": {
            "s1": "<strong>Same engine, but not the same coding techniques.</strong>"
          },
          "p5": "Bundle consumption in NodeJS is based on NPM and the node_modules folder, Deno directly consumes the dependencies as HTTP imports.\n",
          "p6": "Modern browsers have the ability to consume modules (ES, SJS, or AMD), but if you are coding for the web, unlike when coding for NodeJS or Deno, you will probably be using a bundler such as webpack, parcel, rollup, esbuild, etc.",
          "p7": "Bundlers consume the bundles published in NPM to generate a final .js file, called a 'bundle' that includes dependencies such as react or Vue.\n",
          "p8": "You can also use bundlers to program in Deno or NodeJS, something that is becoming popular due to Isomorphism or used by frameworks such as Nest or NextJS",
          "p9": "BeyondJS implements a modular design that adheres to the same rules for any platform. Projects are composed of small code units called bundles which are bundled separately and made available through a DevServer in a development environment and as compiled files in a production environment."
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