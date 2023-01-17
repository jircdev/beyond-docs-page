System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, __beyond_pkg, hmr;
  _export("ReactiveModel", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Core) {
      dependency_1 = _beyondJsKernel017Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/reactive-model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU87VUFBVSxNQUNYQSxhQUFjLFNBQVFDLFlBQU07WUFFOUJDLE1BQU07WUFDTixJQUFJQyxLQUFLO2NBQ0wsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDdEI7WUFFQUUsU0FBUztZQUNULElBQUlDLFFBQVE7Y0FDUixPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN6QjtZQUVBLElBQUlDLFFBQVEsQ0FBQ0MsS0FBSztjQUNkLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUNGLFNBQVMsRUFBRTtjQUM5QixJQUFJLENBQUNBLFNBQVMsR0FBR0UsS0FBSztjQUN0QixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUN2QjtZQUVBQyxRQUFRO1lBQ1IsSUFBSUMsT0FBTztjQUNQLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3hCO1lBRUFFLFdBQVc7WUFDWCxJQUFJQyxVQUFVO2NBQ1YsT0FBTyxJQUFJLENBQUNELFdBQVc7WUFDM0I7WUFFQUUsVUFBVTtZQUNWLElBQUlDLFNBQVM7Y0FDVCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUMxQjtZQUVBRSxPQUFPO1lBQ1AsSUFBSUMsTUFBTTtjQUNOLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3ZCO1lBRUFQLFlBQVksR0FBRyxDQUFDUyxLQUFLLEdBQUcsUUFBUSxLQUFXLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxLQUFLLENBQUM7WUFFOUQ7Ozs7O1lBS0FFLElBQUksQ0FBQ0MsUUFBUSxFQUFFYixLQUFLO2NBQ2hCLElBQUljLEtBQUssR0FBRyxFQUFFO2NBQ2QsSUFBSUQsUUFBUSxJQUFJYixLQUFLLEtBQUssV0FBVyxFQUFFYyxLQUFLLENBQUNELFFBQVEsQ0FBQyxHQUFHYixLQUFLLENBQUMsS0FBTWMsS0FBSyxHQUFHRCxRQUFRO2NBQ3JGLElBQUlFLE9BQU8sR0FBRyxLQUFLO2NBRW5CLEtBQUssTUFBTUMsSUFBSSxJQUFJRixLQUFLLEVBQUU7Z0JBQ3RCLE1BQU1HLEdBQUcsR0FBRyxJQUFJRCxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUNFLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDO2dCQUV6QyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxDQUFDLEtBQUtILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEdBQUdILEtBQUssQ0FBQ0UsSUFBSSxDQUFDO2dCQUN2QkQsT0FBTyxHQUFHLElBQUk7O2NBR2xCLElBQUlBLE9BQU8sRUFBRSxJQUFJLENBQUNkLFlBQVksRUFBRTtZQUNwQztZQUVBa0IsYUFBYTtjQUNULE1BQU1MLEtBQUssR0FBRyxFQUFFO2NBQ2hCTSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxDQUFDVCxRQUFRLElBQUlDLEtBQUssQ0FBQ0QsUUFBUSxDQUFDVSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDVixRQUFRLENBQUMsQ0FBQztjQUN4RixPQUFPQyxLQUFLO1lBQ2hCOztVQUVIVSIsIm5hbWVzIjpbIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJfcmVhZHkiLCJyZWFkeSIsIl9mZXRjaGluZyIsImZldGNoaW5nIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJfZmV0Y2hlZCIsImZldGNoZWQiLCJfcHJvY2Vzc2luZyIsInByb2Nlc3NpbmciLCJfcHJvY2Vzc2VkIiwicHJvY2Vzc2VkIiwiX2xvYWRlZCIsImxvYWRlZCIsImV2ZW50IiwidHJpZ2dlciIsIl9zZXQiLCJwcm9wZXJ0eSIsInByb3BzIiwidXBkYXRlZCIsInByb3AiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJlcGxhY2UiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJyZWFjdGl2ZS1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==