System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/docs/foundations/bee",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3873468050,
        creator: function (require, exports) {
          exports.txt = {
            "bee": {
              "h1#bee": ["Beyond Execution Environment", "BEE "],
              "p1": "BEEs are processes managed by BeyondJS. They behave like a Node service, with the distinctive characteristic of being handled by the main Beyond service. The beyond service analyzes, reviews, and compiles the changes in real-time to make a new version of the bundles available in memory with the code changes applied through HMR, providing the opportunity to have access to updated code capabilities without the need to restart the node process.",
              "p2": {
                "s1": "The real-time update in the Node process offers runtime advantages because it avoids carrying out all the load at the resource time level, which implies stopping the entire process and starting it again. This can also apply to values in memory or connections to databases, to mention some examples. BeyondJS detects changes at an internal file or ",
                "l1": ["/docs/modules#internal-modules", "Module"],
                "s2": ", updates changes, performs a fresh build of the bundle on the fly, and makes the new version available for consumption."
              },
              "p3": "<strong>The operating flow of the Bee looks like the description as follows:</strong>",
              "items": ["Beyond picks up the service.", "A revision of the bundle dependency tree is performed (note that it is at the level of bundles and not internal modules).", "The processed code loads into the memory and whatchers are added to be able to detect changes.", "If there is a change in a file, this is detected, and that code segment is replaced."],
              "q1": {
                "s1": "Dynamic imports are not loaded when the BEE picks up, but are requested on demand."
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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