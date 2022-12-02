System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Processors, __beyond_pkg, hmr;
  _export("Processors", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_2 = _beyondDocs1ComponentsHtml;
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
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1719991156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Processors = Processors;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}`;
          const tpls = {
            modulejson: {
              language: "json",
              tpl
            }
          };
          /*bundle*/
          function Processors() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "processors"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "types"
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "properties"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "examples",
              nextLinks: ["/docs/modules/create"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Processors",
        "name": "Processors"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Processors') && _export("Processors", Processors = require ? require('./control').Processors : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBLE1BQU1BLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQlY7VUFDRixNQUFNQyxJQUFJLEdBQUc7WUFBQ0MsVUFBVSxFQUFFO2NBQUNDLFFBQVEsRUFBRSxNQUFNO2NBQUVIO1lBQUc7VUFBQyxDQUFDO1VBRTNDO1VBQVUsU0FBVUksVUFBVTtZQUNqQyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQztZQUFZLEVBQUUsRUFDNURKLG9CQUFDQyxjQUFRO2NBQUNDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUM7WUFBTyxFQUFFLEVBQ3ZESixvQkFBQ0MsY0FBUTtjQUFDQyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDO1lBQVksRUFBRSxFQUM1REosb0JBQUNDLGNBQVE7Y0FDTEwsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZNLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUMsVUFBVTtjQUM5Q0MsU0FBUyxFQUFFLENBQUMsc0JBQXNCO1lBQUMsRUFDckMsQ0FDSDtVQUVYIiwibmFtZXMiOlsidHBsIiwidHBscyIsIm1vZHVsZWpzb24iLCJsYW5ndWFnZSIsIlByb2Nlc3NvcnMiLCJSZWFjdCIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwibW9kdWxlIiwidGV4dElkIiwibmV4dExpbmtzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9jZXNzb3JzL2NvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=