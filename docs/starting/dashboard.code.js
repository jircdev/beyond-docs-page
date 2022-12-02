System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, DashboardPage, __beyond_pkg, hmr;
  _export("DashboardPage", void 0);
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
          "vspecifier": "@beyond/docs@1/docs/starting/dashboard",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./intro
      ***********************/
      ims.set('./intro', {
        hash: 20219940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardPage = DashboardPage;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function DashboardPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              textId: "dashboard",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              textId: "features",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              textId: "structure",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              textId: "ts",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              textId: "editor",
              specifier: _beyond_context.module.specifier
            }), React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "deploy",
              nextLinks: [["Tutorial", "/docs/tutorial/bridge"]]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./intro",
        "from": "DashboardPage",
        "name": "DashboardPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DashboardPage') && _export("DashboardPage", DashboardPage = require ? require('./intro').DashboardPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUdPO1VBQVUsU0FBVUEsYUFBYTtZQUNwQyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FBQ0MsTUFBTSxFQUFDLFdBQVc7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRDtZQUFTLEVBQUcsRUFDM0RILG9CQUFDQyxjQUFRO2NBQUNDLE1BQU0sRUFBQyxVQUFVO2NBQUNDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0Q7WUFBUyxFQUFHLEVBQzFESCxvQkFBQ0MsY0FBUTtjQUFDQyxNQUFNLEVBQUMsV0FBVztjQUFDQyxTQUFTLEVBQUVDLHNCQUFNLENBQUNEO1lBQVMsRUFBRyxFQUMzREgsb0JBQUNDLGNBQVE7Y0FBQ0MsTUFBTSxFQUFDLElBQUk7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRDtZQUFTLEVBQUcsRUFDcERILG9CQUFDQyxjQUFRO2NBQUNDLE1BQU0sRUFBQyxRQUFRO2NBQUNDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0Q7WUFBUyxFQUFHLEVBQ3hESCxvQkFBQ0MsY0FBUTtjQUNMRSxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUQsTUFBTSxFQUFDLFFBQVE7Y0FDNUNHLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLHVCQUF1QixDQUFDO1lBQUMsRUFDcEQsQ0FDSDtVQUVYIiwibmFtZXMiOlsiRGFzaGJvYXJkUGFnZSIsIlJlYWN0IiwiRG9jdW1lbnQiLCJ0ZXh0SWQiLCJzcGVjaWZpZXIiLCJtb2R1bGUiLCJuZXh0TGlua3MiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL3N0YXJ0aW5nL2Rhc2hib2FyZC9jb2RlL3RzL2ludHJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==