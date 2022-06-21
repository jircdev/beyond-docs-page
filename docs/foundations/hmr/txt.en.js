define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/hmr/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 361293370,
    creator: function (require, exports) {
      exports.txt = {
        "hmr": {
          "h1": ["Foundations", "HMR"],
          "p1": "All bundles automatically expose an HMR object that allows the developer to subscribe to code changes and thus persist the status of the project where is located, optimizing the development process since it avoids the need to redo the flows to get to the current state.",
          "p2": "To better explain it, let's suppose that a database element filtering logic is performed in a backend module, this module performs the following steps:",
          "items": ["Perform the login against the database.", "Make two queries to the database.", "Returns the available information for the developer to work with.", "Generates a data structure, in which all the information consulted is integrated, so that's returned to the client."],
          "p3": "The subscription of changes by the developer with HMR allows the developer to focus on the last point without having to repeat changes for the the first three steps, which means a fairly high optimization in test time.",
          "p4": "The implementation of HMR is automatically responsible for replacing the content of a file at the same time it's changed, leaving the update immediately available, without the need to perform any additional action. In addition, the programmer can subscribe to these changes to define what he wants to do with them, offering him the versatility of automatically executing functions on each alteration"
        },
        "events": {
          "h2": "Events",
          "items": ["<span class=\"inline\">change</span>", "<span class=\"inline\">change: [processor-name]</span>"]
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