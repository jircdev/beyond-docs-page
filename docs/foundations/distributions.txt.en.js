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
          "vspecifier": "@beyond/docs@1/docs/foundations/distributions",
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
        hash: 3203425492,
        creator: function (require, exports) {
          exports.txt = {
            "distributions": {
              "h1#distributions": ["Foundations", "Distributions"],
              "p1": "Distributions represent the execution environment of a project. It's necessary to set up a distribution for each environment you want to work in. BeyondJS creates a <strong>Beyond Execution Environment (BEE)</strong> for each distribution being used. It will be explained later what exactly is a BEE and the offered advantages of its use."
            },
            "node": {
              "h2#node": "Node",
              "p1": {
                "s1": "BeyondJS allows for scalable and efficient projects with ",
                "l1": ["https://nodejs.org/", "NodeJS"],
                "s2": ", built directly with typescript and seeking to improve the development experience by integrating HMR."
              },
              "p2": "To work with Node, you need to create a Node-type distribution. From there, BeyondJS will take care of raising the execution environment (BEE) and making available all the project modules configured for the platforms that handle Node."
            },
            "distribution": {
              "h3#distribution": "Distribution",
              "p1": "The configuration of Node modules in BeyondJS, is done through distributions. The developer sets up a distribution.",
              "p2": "As explained before in this documentation, a module in BeyondJS is a bundle container, where one or more bundles can exist. Each of these bundles contains a set of internal modules. When the BeyondJS project uses the BEE (Beyond Execution Environment), which is explained later, it optimizes development times and offers better results in the experience."
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