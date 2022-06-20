define(["exports", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Transversal = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/kernel/transversals/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*****************************
  INTERNAL MODULE: ./transversal
  *****************************/

  ims.set('./transversal', {
    hash: 1673198772,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Transversal = void 0;

      var _ts = require("@beyond-js/kernel/bundle/ts");
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

          bundles.forEach((bcreator, id) => {
            const pkg = new _ts.Bundle(id).package(this.#language);
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