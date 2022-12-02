System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, QuickStart, __beyond_pkg, hmr;
  _export("QuickStart", void 0);
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
          "vspecifier": "@beyond/docs@1/docs/starting/quick-start",
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
        hash: 1362093665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuickStart = QuickStart;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const build = tpl => ({
            language: 'shell',
            tpl
          });
          const tpls = {
            npx1: build(`npx @beyond-js/create-project --type web-backend --name @testing/login`),
            npx2: build(`npx @beyond-js/create-project --type node --name  @scope/name \n`),
            npm1: build(`beyond`),
            npm2: build(`npm i -g beyond`),
            beyond: build('beyond')
          };
          /*bundle*/
          function QuickStart() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              textId: "requires",
              specifier: _beyond_context.module.specifier,
              tpls: tpls
            }), React.createElement(_html.Document, {
              textId: "global",
              specifier: _beyond_context.module.specifier,
              tpls: tpls
            }), React.createElement(_html.Document, {
              textId: "create",
              specifier: _beyond_context.module.specifier,
              tpls: tpls,
              nextLinks: ["/docs/tutorial/start"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "QuickStart",
        "name": "QuickStart"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'QuickStart') && _export("QuickStart", QuickStart = require ? require('./control').QuickStart : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUdBLE1BQU1BLEtBQUssR0FBSUMsR0FBRyxLQUFNO1lBQUNDLFFBQVEsRUFBRSxPQUFPO1lBQUVEO1VBQUcsQ0FBQyxDQUFDO1VBQ2pELE1BQU1FLElBQUksR0FBRztZQUNUQyxJQUFJLEVBQUVKLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQztZQUNyRkssSUFBSSxFQUFFTCxLQUFLLENBQUMsa0VBQWtFLENBQUM7WUFDL0VNLElBQUksRUFBRU4sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNyQk8sSUFBSSxFQUFFUCxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDOUJRLE1BQU0sRUFBRVIsS0FBSyxDQUFDLFFBQVE7V0FDekI7VUFFTTtVQUFVLFNBQVVTLFVBQVU7WUFDakMsT0FDSUMsMENBQ0lBLG9CQUFDQyxjQUFRO2NBQUNDLE1BQU0sRUFBQyxVQUFVO2NBQUNDLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFVixJQUFJLEVBQUVBO1lBQUksRUFBRyxFQUN0RU8sb0JBQUNDLGNBQVE7Y0FBQ0MsTUFBTSxFQUFDLFFBQVE7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVWLElBQUksRUFBRUE7WUFBSSxFQUFHLEVBQ3BFTyxvQkFBQ0MsY0FBUTtjQUNMQyxNQUFNLEVBQUMsUUFBUTtjQUNmQyxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FDM0JWLElBQUksRUFBRUEsSUFBSTtjQUNWWSxTQUFTLEVBQUUsQ0FDUCxzQkFBc0I7WUFDekIsRUFDSCxDQUNIO1VBRVgiLCJuYW1lcyI6WyJidWlsZCIsInRwbCIsImxhbmd1YWdlIiwidHBscyIsIm5weDEiLCJucHgyIiwibnBtMSIsIm5wbTIiLCJiZXlvbmQiLCJRdWlja1N0YXJ0IiwiUmVhY3QiLCJEb2N1bWVudCIsInRleHRJZCIsInNwZWNpZmllciIsIm1vZHVsZSIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvcXVpY2stc3RhcnQvY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==