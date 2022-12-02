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
          "vspecifier": "@beyond/docs@1/docs/basic/processors",
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
        hash: 3875888264,
        creator: function (require, exports) {
          exports.txt = {
            "processors": {
              "h1": ["Basic Concepts", "Processors"],
              "p1": "Many of the tools or languages used in the web environment require prior processing to be interpreted by browsers or execution environments, this work done by the processors.",
              "p2": "BeyondJS offers a series of integrated processors, which allow the use of main technologies of the web industry and provides support so that new processors to be integrated if required.",
              "p3": "BeyondJS works differently from bundlers like Webpack or Parcel. You do not need to evaluate the dependency tree of a project nor apply techniques for code separation or tree shaking. Thanks to its modular nature and through the processors, code packaging is done at the bundle level.",
              "p4": {
                "s1": "Processors are components of BeyondJS that allow interpreting, parsing, transpiling, or compiling code (as the case may be) of the languages or technologies used in a ",
                "l1": ["/bundles", "Bundle"],
                "s2": "."
              }
            },
            "types": {
              "h3#processors": "Existing processors",
              "items1": ["ts: Allows working with typescript and `tsx` files for react.", "sass: Provides support for working with SASS files with the <span class=\"inline\">.scss</span> extension", "yue: Provides support for working with vue single-file-components files.", "svelte: Allows working with svelte single-file-component files"]
            },
            "properties": {
              "h3#properties": "Properties",
              "p1": "All processors have the following features:",
              "items2": ["<strong>Path</strong> string optional: Allows defining the directory where the processor files are located. If a value is added, it's interpreted as a directory position relative to the location of the defined module.json.", "<strong>Files</strong> array optional: Allows defining the list of files or folders included in the processor. If the path property is set, the files will be searched within the specified directory, otherwise, they will be searched related to the location of the module.json. An array with an input * can be passed as property value, thus indicating that all files in the specified directory are included."]
            },
            "examples": {
              "h3#examples": "Examples",
              "p1": "The following example corresponds to the definition of a bundle of code types. Below, we explain in detail:",
              "items1": ["The bundle uses two processors: sass and ts.", "The sass processor includes all files in the /code/scss directory, which is relative to the location of the module.json file.", "The ts renderer only includes the component.ts file, which is located in the /code/ts directory relative to the location of the module.json file."],
              "c1": "modulejson"
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