define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ReactiveModel = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/reactive-model",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTtNQUVPOzs7TUFBVSxNQUNYQSxhQURXLFNBQ1dDLFlBRFgsQ0FDaUI7UUFFOUJDLE1BQU07O1FBQ0csSUFBTEMsS0FBSztVQUNMLE9BQU8sS0FBS0QsTUFBWjtRQUNIOztRQUVERSxTQUFTOztRQUNHLElBQVJDLFFBQVE7VUFDUixPQUFPLEtBQUtELFNBQVo7UUFDSDs7UUFFVyxJQUFSQyxRQUFRLENBQUNDLEtBQUQsRUFBTTtVQUNkLElBQUlBLEtBQUssS0FBSyxLQUFLRixTQUFuQixFQUE4QjtVQUM5QixLQUFLQSxTQUFMLEdBQWlCRSxLQUFqQjtVQUNBLEtBQUtDLFlBQUw7UUFDSDs7UUFFREMsUUFBUTs7UUFDRyxJQUFQQyxPQUFPO1VBQ1AsT0FBTyxLQUFLRCxRQUFaO1FBQ0g7O1FBRURFLFdBQVc7O1FBQ0csSUFBVkMsVUFBVTtVQUNWLE9BQU8sS0FBS0QsV0FBWjtRQUNIOztRQUVERSxVQUFVOztRQUNHLElBQVRDLFNBQVM7VUFDVCxPQUFPLEtBQUtELFVBQVo7UUFDSDs7UUFFREUsT0FBTzs7UUFDRyxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLRCxPQUFaO1FBQ0g7O1FBRURQLFlBQVksR0FBRyxDQUFDUyxLQUFLLEdBQUcsUUFBVCxLQUE0QixLQUFLQyxPQUFMLENBQWFELEtBQWIsQ0FBL0I7UUFFWjs7Ozs7O1FBS0FFLElBQUksQ0FBQ0MsUUFBRCxFQUFXYixLQUFYLEVBQWdCO1VBQ2hCLElBQUljLEtBQUssR0FBRyxFQUFaO1VBQ0EsSUFBSUQsUUFBUSxJQUFJYixLQUFLLEtBQUssV0FBMUIsRUFBdUNjLEtBQUssQ0FBQ0QsUUFBRCxDQUFMQyxHQUFrQmQsS0FBbEJjLENBQXZDLEtBQXFFQSxLQUFLLEdBQUdELFFBQVJDO1VBQ3JFLElBQUlDLE9BQU8sR0FBRyxLQUFkOztVQUVBLEtBQUssTUFBTUMsSUFBWCxJQUFtQkYsS0FBbkIsRUFBMEI7WUFDdEIsTUFBTUcsR0FBRyxHQUFHLElBQUlELElBQUksRUFBcEI7WUFDQSxJQUFJLENBQUMsS0FBS0UsY0FBTCxDQUFvQkQsR0FBcEIsQ0FBTCxFQUErQixTQUZULENBRW1COztZQUV6QyxJQUFJLEtBQUtBLEdBQUwsTUFBY0gsS0FBSyxDQUFDRSxJQUFELENBQXZCLEVBQStCO1lBQy9CLEtBQUtDLEdBQUwsSUFBWUgsS0FBSyxDQUFDRSxJQUFELENBQWpCO1lBQ0FELE9BQU8sR0FBRyxJQUFWQTtVQUNIOztVQUVELElBQUlBLE9BQUosRUFBYSxLQUFLZCxZQUFMO1FBQ2hCOztRQUVEa0IsYUFBYTtVQUNULE1BQU1MLEtBQUssR0FBRyxFQUFkO1VBQ0FNLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWSxJQUFaQSxFQUFrQkUsT0FBbEJGLENBQTBCUCxRQUFRLElBQUlDLEtBQUssQ0FBQ0QsUUFBUSxDQUFDVSxPQUFUVixDQUFpQixHQUFqQkEsRUFBc0IsRUFBdEJBLENBQUQsQ0FBTEMsR0FBbUMsS0FBS0QsUUFBTCxDQUF6RU87VUFDQSxPQUFPTixLQUFQO1FBQ0g7O01BbEU2QiIsIm5hbWVzIjpbIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJfcmVhZHkiLCJyZWFkeSIsIl9mZXRjaGluZyIsImZldGNoaW5nIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJfZmV0Y2hlZCIsImZldGNoZWQiLCJfcHJvY2Vzc2luZyIsInByb2Nlc3NpbmciLCJfcHJvY2Vzc2VkIiwicHJvY2Vzc2VkIiwiX2xvYWRlZCIsImxvYWRlZCIsImV2ZW50IiwidHJpZ2dlciIsIl9zZXQiLCJwcm9wZXJ0eSIsInByb3BzIiwidXBkYXRlZCIsInByb3AiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImItdWkvbW9kdWxlcy9tb2RlbHMvcmVhY3RpdmUvdHMvcmVhY3RpdmUtbW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=