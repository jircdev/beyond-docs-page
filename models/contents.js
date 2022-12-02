System.register(["@beyond-js/backend@0.1.0/client", "@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, BridgeModel, __beyond_pkg, hmr;
  _export("BridgeModel", void 0);
  return {
    setters: [function (_beyondJsBackend010Client) {
      dependency_0 = _beyondJsBackend010Client;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/models/contents"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2289465725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BridgeModel = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class BridgeModel extends ActionsBridge {
            async get() {
              return await this.execute("index//BridgeModel//get", ...arguments);
            }
            async list() {
              return await this.execute("index//BridgeModel//list", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.BridgeModel = BridgeModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BridgeModel",
        "name": "BridgeModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BridgeModel') && _export("BridgeModel", BridgeModel = require ? require('./index').BridgeModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBRU8sWUFBWTtVQUFVLE1BQU9BLFdBQVksU0FBUUMsYUFBYTtZQUNqRSxNQUFNQyxHQUFHO2NBQ0wsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN0RTtZQUVBLE1BQU1DLElBQUk7Y0FDTixPQUFPLE1BQU0sSUFBSSxDQUFDRixPQUFPLENBQUMsMEJBQTBCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3ZFO1lBQ0FFO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQztZQUM1Qjs7VUFDSEMiLCJuYW1lcyI6WyJCcmlkZ2VNb2RlbCIsIkFjdGlvbnNCcmlkZ2UiLCJnZXQiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwibGlzdCIsImNvbnN0cnVjdG9yIiwiYnVuZGxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL21vZGVscy9jb250ZW50cy9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=