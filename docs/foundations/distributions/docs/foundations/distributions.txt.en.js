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
    "module": "@beyond/docs/docs/foundations/distributions",
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
    hash: 3203425492,
    creator: function (require, exports) {
      exports.txt = {
        "distributions": {
          "h1#distributions": ["Foundations", "Distributions"],
          "p1": "Distributions represent the execution environment of a project. It's necessary to set up a distribution for each environment you want to work in. BeyondJS creates a <strong>Beyond Execution Environment (BEE)</strong> for each distribution being used. It will be explained later what exactly is a BEE and the offered advantages of its use."
        },
        "node": {
          "h2#node": "Node",
          "p1": {
            "s1": "BeyondJS allows for scalable and efficient projects with ",
            "l1": ["https://nodejs.org/", "NodeJS"],
            "s2": ", built directly with typescript and seeking to improve the development experience by integrating HMR."
          },
          "p2": "To work with Node, you need to create a Node-type distribution. From there, BeyondJS will take care of raising the execution environment (BEE) and making available all the project modules configured for the platforms that handle Node."
        },
        "distribution": {
          "h3#distribution": "Distribution",
          "p1": "The configuration of Node modules in BeyondJS, is done through distributions. The developer sets up a distribution.",
          "p2": "As explained before in this documentation, a module in BeyondJS is a bundle container, where one or more bundles can exist. Each of these bundles contains a set of internal modules. When the BeyondJS project uses the BEE (Beyond Execution Environment), which is explained later, it optimizes development times and offers better results in the experience."
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