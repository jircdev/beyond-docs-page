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
    "module": "@beyond/docs/docs/foundations/bee",
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
    hash: 3873468050,
    creator: function (require, exports) {
      exports.txt = {
        "bee": {
          "h1#bee": ["Beyond Execution Environment", "BEE "],
          "p1": "BEEs are processes managed by BeyondJS. They behave like a Node service, with the distinctive characteristic of being handled by the main Beyond service. The beyond service analyzes, reviews, and compiles the changes in real-time to make a new version of the bundles available in memory with the code changes applied through HMR, providing the opportunity to have access to updated code capabilities without the need to restart the node process.",
          "p2": {
            "s1": "The real-time update in the Node process offers runtime advantages because it avoids carrying out all the load at the resource time level, which implies stopping the entire process and starting it again. This can also apply to values in memory or connections to databases, to mention some examples. BeyondJS detects changes at an internal file or ",
            "l1": ["/docs/modules#internal-modules", "Module"],
            "s2": ", updates changes, performs a fresh build of the bundle on the fly, and makes the new version available for consumption."
          },
          "p3": "<strong>The operating flow of the Bee looks like the description as follows:</strong>",
          "items": ["Beyond picks up the service.", "A revision of the bundle dependency tree is performed (note that it is at the level of bundles and not internal modules).", "The processed code loads into the memory and whatchers are added to be able to detect changes.", "If there is a change in a file, this is detected, and that code segment is replaced."],
          "q1": {
            "s1": "Dynamic imports are not loaded when the BEE picks up, but are requested on demand."
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