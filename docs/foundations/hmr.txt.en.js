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
          "vspecifier": "@beyond/docs@1/docs/foundations/hmr",
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
        hash: 361293370,
        creator: function (require, exports) {
          exports.txt = {
            "hmr": {
              "h1": ["Foundations", "HMR"],
              "p1": "All bundles automatically expose an HMR object that allows the developer to subscribe to code changes and thus persist the status of the project where is located, optimizing the development process since it avoids the need to redo the flows to get to the current state.",
              "p2": "To better explain it, let's suppose that a database element filtering logic is performed in a backend module, this module performs the following steps:",
              "items": ["Perform the login against the database.", "Make two queries to the database.", "Returns the available information for the developer to work with.", "Generates a data structure, in which all the information consulted is integrated, so that's returned to the client."],
              "p3": "The subscription of changes by the developer with HMR allows the developer to focus on the last point without having to repeat changes for the the first three steps, which means a fairly high optimization in test time.",
              "p4": "The implementation of HMR is automatically responsible for replacing the content of a file at the same time it's changed, leaving the update immediately available, without the need to perform any additional action. In addition, the programmer can subscribe to these changes to define what he wants to do with them, offering him the versatility of automatically executing functions on each alteration"
            },
            "events": {
              "h2": "Events",
              "items": ["<span class=\"inline\">change</span>", "<span class=\"inline\">change: [processor-name]</span>"]
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