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
    "module": "@beyond/docs/docs/basic/state",
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
    hash: 3343491085,
    creator: function (require, exports) {
      exports.txt = {
        "handling": {
          "h1#State-handling": "State Handling",
          "p1": "The state is the representation of the rendered values of a component or widget on the screen. It migth mutate and vary due to various factors, such as data updates from a server or user interaction.",
          "p2": {
            "s1": "There are numerous libraries for managing the state of a project, generally associated with the ",
            "l1": ["/docs/widgets", "View Framework"],
            "s2": " at use. BeyondJS allows the integration of the state management tool you want, as long as is prepared for modular operation."
          },
          "q1": {
            "s1": "You can see a working example of a counter that shares state handling between a component built with <strong>React</strong>, one built in with <strong>Svelte</strong>, and one built in with <strong>Vue</strong> in This example.",
            "l1": ["/examples/sm/counter", " This example"]
          },
          "p3": {
            "s1": "Also, BeyondJS defines a structure for state handling. The object that handles the state must be made available via the widget controller's createWidgetStore method. This method must return an object that implements the ",
            "l1": ["/api/IWidgetStore", "IWidgetStore"],
            "s2": " interface, especially if is expected to work along with SSR."
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