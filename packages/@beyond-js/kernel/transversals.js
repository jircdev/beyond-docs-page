define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Transversal = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/transversals",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*****************************
  INTERNAL MODULE: ./transversal
  *****************************/

  ims.set('./transversal', {
    hash: 3744541888,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Transversal = void 0;

      var _bundle = require("@beyond-js/kernel/bundle");
      /*bundle*/


      class Transversal {
        #name;

        get name() {
          return this.#name;
        }

        #language;

        get language() {
          return this.#language;
        }

        constructor(name, language) {
          this.#name = name;
          this.#language = language;
        }

        #initialised = false;

        initialise(bundles) {
          if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
          this.#initialised = true;
          const created = new Set(); // First create the bundles and then initialize them,
          // to allow dependencies among bundles of the same traversal

          bundles.forEach((bcreator, definition) => {
            const pkg = new _bundle.Bundle(definition).package(this.#language);
            const ims = new Map(); // The internal modules map

            const exports = {}; // The exports.managed function

            const response = bcreator(ims, exports);
            pkg.exports.descriptor = exports.descriptor; // Set the dependencies of the package

            const {
              dependencies
            } = response ? response : {
              dependencies: void 0
            };
            dependencies && pkg.dependencies.update(dependencies); // Register the ims, but do not initialise them until all bundles of the transversal are set
            // To allow dependencies among bundles

            pkg.ims.register(ims);
            created.add({
              pkg
            });
          });
          created.forEach(({
            pkg
          }) => !pkg.initialised && pkg.initialise());
        }

      }

      exports.Transversal = Transversal;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./transversal",
    "from": "Transversal",
    "name": "Transversal"
  }];
  let Transversal; // Module exports

  _exports.Transversal = Transversal;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Transversal') && (_exports.Transversal = Transversal = require ? require('./transversal').Transversal : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTtNQVlPOzs7TUFBVSxNQUNYQSxXQURXLENBQ0E7UUFDSjs7UUFDRCxJQUFKQyxJQUFJO1VBQ0osT0FBTyxLQUFLLEtBQVo7UUFDSDs7UUFFUTs7UUFDRyxJQUFSQyxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFREMsWUFBWUYsSUFBWkUsRUFBMEJELFFBQTFCQyxFQUEyQztVQUN2QyxLQUFLLEtBQUwsR0FBYUYsSUFBYjtVQUNBLEtBQUssU0FBTCxHQUFpQkMsUUFBakI7UUFDSDs7UUFFRCxlQUFlLEtBQWY7O1FBRUFFLFVBQVUsQ0FBQ0MsT0FBRCxFQUE4QztVQUNwRCxJQUFJLEtBQUssWUFBVCxFQUF1QixNQUFNLElBQUlDLEtBQUosQ0FBVSxnQkFBZ0IsS0FBSyxLQUFLLHVCQUFwQyxDQUFOO1VBQ3ZCLEtBQUssWUFBTCxHQUFvQixJQUFwQjtVQUVBLE1BQU1DLE9BQU8sR0FBMEIsSUFBSUMsR0FBSixFQUF2QyxDQUpvRCxDQU1wRDtVQUNBOztVQUNBSCxPQUFPLENBQUNJLE9BQVJKLENBQWdCLENBQUNLLFFBQUQsRUFBV0MsVUFBWCxLQUF5QjtZQUNyQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixDQUFXRixVQUFYLEVBQXVCRyxPQUF2QixDQUErQixLQUFLLFNBQXBDLENBQVo7WUFFQSxNQUFNQyxHQUFHLEdBQWUsSUFBSUMsR0FBSixFQUF4QixDQUhxQyxDQUdEOztZQUNwQyxNQUFNQyxPQUFPLEdBQTBDLEVBQXZELENBSnFDLENBSXNCOztZQUMzRCxNQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0ssR0FBRCxFQUFNRSxPQUFOLENBQXpCO1lBRUFMLEdBQUcsQ0FBQ0ssT0FBSkwsQ0FBWU8sVUFBWlAsR0FBeUJLLE9BQU8sQ0FBQ0UsVUFBakNQLENBUHFDLENBU3JDOztZQUNBLE1BQU07Y0FBQ1E7WUFBRCxJQUFpQkYsUUFBUSxHQUFHQSxRQUFILEdBQWM7Y0FBQ0UsWUFBWSxFQUFFLEtBQUs7WUFBcEIsQ0FBN0M7WUFDQUEsWUFBWSxJQUFJUixHQUFHLENBQUNRLFlBQUpSLENBQWlCUyxNQUFqQlQsQ0FBd0JRLFlBQXhCUixDQUFoQlEsQ0FYcUMsQ0FhckM7WUFDQTs7WUFDQVIsR0FBRyxDQUFDRyxHQUFKSCxDQUFRVSxRQUFSVixDQUFpQkcsR0FBakJIO1lBRUFMLE9BQU8sQ0FBQ2dCLEdBQVJoQixDQUFZO2NBQUNLO1lBQUQsQ0FBWkw7VUFqQko7VUFvQkFBLE9BQU8sQ0FBQ0UsT0FBUkYsQ0FBZ0IsQ0FBQztZQUFDSztVQUFELENBQUQsS0FBVyxDQUFDQSxHQUFHLENBQUNZLFdBQUwsSUFBb0JaLEdBQUcsQ0FBQ1IsVUFBSlEsRUFBL0NMO1FBQ0g7O01BL0NZIiwibmFtZXMiOlsiVHJhbnN2ZXJzYWwiLCJuYW1lIiwibGFuZ3VhZ2UiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2UiLCJidW5kbGVzIiwiRXJyb3IiLCJjcmVhdGVkIiwiU2V0IiwiZm9yRWFjaCIsImJjcmVhdG9yIiwiZGVmaW5pdGlvbiIsInBrZyIsIkJ1bmRsZSIsInBhY2thZ2UiLCJpbXMiLCJNYXAiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJkZXNjcmlwdG9yIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwicmVnaXN0ZXIiLCJhZGQiLCJpbml0aWFsaXNlZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHJhbnN2ZXJzYWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=