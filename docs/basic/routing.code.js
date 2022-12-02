System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, RoutingPage, __beyond_pkg, hmr;
  _export("RoutingPage", void 0);
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
          "vspecifier": "@beyond/docs@1/docs/basic/routing",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 380785037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoutingPage = RoutingPage;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
}`;
          const tpls = {
            tpl1: {
              tpl: `import {routing} from "@beyond-js/kernel/routing";`,
              language: "ts"
            },
            tpl2: {
              tpl: `routing.pushState('/home', [{state}]);`,
              language: "ts"
            },
            tpl3: {
              tpl: `routing.replaceState('/home', [{state}]);`,
              language: "ts"
            },
            tpl4: {
              tpl: tpl
            }
          };
          /*bundle*/
          function RoutingPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "routing"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "object"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "navigation"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "overwrite",
              nextLinks: ["/docs/modules/create"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RoutingPage",
        "name": "RoutingPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RoutingPage') && _export("RoutingPage", RoutingPage = require ? require('./index').RoutingPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUdBLE1BQU1BLEdBQUcsR0FBRzs7O0VBR1Y7VUFDRixNQUFNQyxJQUFJLEdBQUc7WUFDVEMsSUFBSSxFQUFFO2NBQUNGLEdBQUcsRUFBRSxvREFBb0Q7Y0FBRUcsUUFBUSxFQUFFO1lBQUksQ0FBQztZQUNqRkMsSUFBSSxFQUFFO2NBQUNKLEdBQUcsRUFBRSx3Q0FBd0M7Y0FBRUcsUUFBUSxFQUFFO1lBQUksQ0FBQztZQUNyRUUsSUFBSSxFQUFFO2NBQUNMLEdBQUcsRUFBRSwyQ0FBMkM7Y0FBRUcsUUFBUSxFQUFFO1lBQUksQ0FBQztZQUN4RUcsSUFBSSxFQUFFO2NBQUNOLEdBQUcsRUFBRUE7WUFBRztXQUNsQjtVQUVNO1VBQVUsU0FBVU8sV0FBVztZQUVsQyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FBQ1IsSUFBSSxFQUFFQSxJQUFJO2NBQUVTLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUM7WUFBUyxFQUFFLEVBQ3JFSixvQkFBQ0MsY0FBUTtjQUFDUixJQUFJLEVBQUVBLElBQUk7Y0FBRVMsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQztZQUFRLEVBQUUsRUFDcEVKLG9CQUFDQyxjQUFRO2NBQUNSLElBQUksRUFBRUEsSUFBSTtjQUFFUyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDO1lBQVksRUFBRSxFQUN4RUosb0JBQUNDLGNBQVE7Y0FBQ1IsSUFBSSxFQUFFQSxJQUFJO2NBQUVTLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUMsV0FBVztjQUMzREMsU0FBUyxFQUFFLENBQUMsc0JBQXNCO1lBQUMsRUFDM0MsQ0FDSDtVQUVYIiwibmFtZXMiOlsidHBsIiwidHBscyIsInRwbDEiLCJsYW5ndWFnZSIsInRwbDIiLCJ0cGwzIiwidHBsNCIsIlJvdXRpbmdQYWdlIiwiUmVhY3QiLCJEb2N1bWVudCIsInNwZWNpZmllciIsIm1vZHVsZSIsInRleHRJZCIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvcm91dGluZy9jb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==