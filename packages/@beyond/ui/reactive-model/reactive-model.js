define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ReactiveModel = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/reactive-model",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/core", dependency_1]]));
  const ims = new Map();
  /********************************
  INTERNAL MODULE: ./reactive-model
  ********************************/

  ims.set('./reactive-model', {
    hash: 2422581598,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactiveModel = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class ReactiveModel extends _core.Events {
        _ready;

        get ready() {
          return this._ready;
        }

        _fetching;

        get fetching() {
          return this._fetching;
        }

        set fetching(value) {
          if (value === this._fetching) return;
          this._fetching = value;
          this.triggerEvent();
        }

        _fetched;

        get fetched() {
          return this._fetched;
        }

        _processing;

        get processing() {
          return this._processing;
        }

        _processed;

        get processed() {
          return this._processed;
        }

        _loaded;

        get loaded() {
          return this._loaded;
        }

        triggerEvent = (event = 'change') => this.trigger(event);
        /**
         * set value in a private property
         * @param property
         * @param value
         */

        _set(property, value) {
          let props = {};
          if (property && value !== 'undefined') props[property] = value;else props = property;
          let updated = false;

          for (const prop in props) {
            const key = `_${prop}`;
            if (!this.hasOwnProperty(key)) continue; //same value on store

            if (this[key] === props[prop]) continue;
            this[key] = props[prop];
            updated = true;
          }

          if (updated) this.triggerEvent();
        }

        getProperties() {
          const props = {};
          Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
          return props;
        }

      }

      exports.ReactiveModel = ReactiveModel;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./reactive-model",
    "from": "ReactiveModel",
    "name": "ReactiveModel"
  }];
  let ReactiveModel; // Module exports

  _exports.ReactiveModel = ReactiveModel;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ReactiveModel') && (_exports.ReactiveModel = ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});