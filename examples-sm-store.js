define(["exports", "module", "@beyond-js/kernel/bundle", "universal-model-ng-react-svelte-vue@0.3.3"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.store = _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples-sm-store",
    "bundle": "ts"
  }, __url).package();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFPLE1BQU1BLGlCQUFpQixHQUFHO1FBQzdCQyxLQUFLLEVBQUU7TUFEc0IsQ0FBMUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FQOztNQUNBOztNQUVBLE1BQU1DLFlBQVksR0FBRztRQUNqQkMsT0FBTyxFQUFFLG9EQUFlSCx3QkFBZjtNQURRLENBQXJCOztNQUtBLE1BQU1JLG9CQUFvQixHQUFHLE9BQXdCO1FBQ2pEQyxhQUFhLEVBQUdDLEtBQUQsSUFBa0JBLEtBQUssQ0FBQ0gsT0FBTkcsQ0FBY0w7TUFERSxDQUF4QixDQUE3Qjs7TUFHQSxNQUFNTSxxQkFBcUIsR0FBR0gsb0JBQW9CLEVBQWxEO01BRU87O01BQ1AsTUFBTUksS0FBSyxHQUFHLGlEQUFpRE4sWUFBakQsRUFBK0RLLHFCQUEvRCxDQUFkIiwibmFtZXMiOlsiaW5pdGlhbENvdW50U3RhdGUiLCJjb3VudCIsImluaXRpYWxTdGF0ZSIsImNvdW50ZXIiLCJjcmVhdGVDb3VudFNlbGVjdG9ycyIsInNlbGVjdG9yQ291bnQiLCJzdGF0ZSIsImNvdW50ZXJTdGF0ZVNlbGVjdG9ycyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZXhhbXBsZXMvY291bnRlci9zdG9yZS90cy9zdGF0ZS50cyIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL3N0b3JlL3RzL3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=