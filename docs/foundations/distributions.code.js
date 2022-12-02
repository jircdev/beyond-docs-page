System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond/docs@1/components/html", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, DistributionsPage, __beyond_pkg, hmr;
  _export("DistributionsPage", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondDocs1ComponentsHtml) {
      dependency_1 = _beyondDocs1ComponentsHtml;
    }, function (_react) {
      dependency_2 = _react;
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
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond/docs/components/html', dependency_1], ['react', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 797806425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DistributionsPage = DistributionsPage;
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          const tpl = `
{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;
          const tpls = {
            tpl: {
              tpl,
              title: "beyond.json"
            }
          };
          /*bundle*/
          function DistributionsPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "distributions"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "node"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "distribution",
              nextLinks: ["/docs/distributions"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DistributionsPage",
        "name": "DistributionsPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DistributionsPage') && _export("DistributionsPage", DistributionsPage = require ? require('./index').DistributionsPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBLE1BQU1BLEdBQUcsR0FBRzs7Ozs7RUFLVjtVQUNGLE1BQU1DLElBQUksR0FBRztZQUNURCxHQUFHLEVBQUU7Y0FBQ0EsR0FBRztjQUFFRSxLQUFLLEVBQUU7WUFBYTtXQUNsQztVQUVNO1VBQVUsU0FBVUMsaUJBQWlCO1lBQ3hDLE9BQ0lDLDBDQUVJQSxvQkFBQ0MsY0FBUTtjQUFDSixJQUFJLEVBQUVBLElBQUk7Y0FBRUssU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQztZQUFlLEVBQUUsRUFDM0VKLG9CQUFDQyxjQUFRO2NBQUNKLElBQUksRUFBRUEsSUFBSTtjQUFFSyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDO1lBQU0sRUFBRSxFQUNsRUosb0JBQUNDLGNBQVE7Y0FDTEosSUFBSSxFQUFFQSxJQUFJO2NBQ1ZLLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUMsY0FBYztjQUNsREMsU0FBUyxFQUFFLENBQUMscUJBQXFCO1lBQUMsRUFDcEMsQ0FDSDtVQUVYIiwibmFtZXMiOlsidHBsIiwidHBscyIsInRpdGxlIiwiRGlzdHJpYnV0aW9uc1BhZ2UiLCJSZWFjdCIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwibW9kdWxlIiwidGV4dElkIiwibmV4dExpbmtzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9mb3VuZGF0aW9ucy9kaXN0cmlidXRpb25zL2NvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19