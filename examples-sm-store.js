define(["exports", "@beyond-js/kernel/bundle", "universal-model-ng-react-svelte-vue"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.store = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples-sm-store",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([["universal-model-ng-react-svelte-vue", dependency_1]]));
  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./state
  ***********************/

  ims.set('./state', {
    hash: 2535204796,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.initialCountState = void 0;
      const initialCountState = {
        count: 0
      };
      exports.initialCountState = initialCountState;
    }
  });
  /***********************
  INTERNAL MODULE: ./store
  ***********************/

  ims.set('./store', {
    hash: 697439025,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.store = void 0;

      var _state = require("./state");

      var _universalModelNgReactSvelteVue = require("universal-model-ng-react-svelte-vue");

      const initialState = {
        counter: (0, _universalModelNgReactSvelteVue.createSubState)(_state.initialCountState)
      };

      const createCountSelectors = () => ({
        selectorCount: state => state.counter.count
      });

      const counterStateSelectors = createCountSelectors();
      /*bundle*/

      const store = (0, _universalModelNgReactSvelteVue.createStore)(initialState, counterStateSelectors);
      exports.store = store;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./store",
    "from": "store",
    "name": "store"
  }];
  let store; // Module exports

  _exports.store = store;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'store') && (_exports.store = store = require ? require('./store').store : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});