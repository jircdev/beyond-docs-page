System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BackendPage, __beyond_pkg, hmr;
  _export("BackendPage", void 0);
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
          "vspecifier": "@beyond/docs@1/docs/basic/backend",
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
        hash: 1054173667,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackendPage = BackendPage;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;
          const tpl2 = `
export /*actions*//*bundle*/
class Auth {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`;
          const tpl3 = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();`;
          const tpls = {
            tpl1: {
              title: "module.json",
              tpl
            },
            tpl2: {
              title: "bridge.ts",
              tpl: tpl2
            },
            tpl3: {
              title: "bridge.ts",
              tpl: tpl3
            }
          };
          /*bundle*/
          function BackendPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "code"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "server"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "comments",
              nextLinks: ["/docs/modules/create"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "BackendPage",
        "name": "BackendPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BackendPage') && _export("BackendPage", BackendPage = require ? require('./control').BackendPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVBLE1BQU1BLEdBQUcsR0FBRzs7Ozs7O0lBTVI7VUFDSixNQUFNQyxJQUFJLEdBQUc7Ozs7Ozs7Ozs7RUFVWDtVQUNGLE1BQU1DLElBQUksR0FBRzs7O1VBR0g7VUFFVixNQUFNQyxJQUFJLEdBQUc7WUFDVEMsSUFBSSxFQUFFO2NBQUNDLEtBQUssRUFBRSxhQUFhO2NBQUVMO1lBQUcsQ0FBQztZQUNqQ0MsSUFBSSxFQUFFO2NBQUNJLEtBQUssRUFBRSxXQUFXO2NBQUVMLEdBQUcsRUFBRUM7WUFBSSxDQUFDO1lBQ3JDQyxJQUFJLEVBQUU7Y0FBQ0csS0FBSyxFQUFFLFdBQVc7Y0FBRUwsR0FBRyxFQUFFRTtZQUFJO1dBQ3ZDO1VBRU07VUFBVSxTQUFVSSxXQUFXO1lBQ2xDLE9BQ0lDLDBDQUNJQSxvQkFBQ0MsY0FBUTtjQUFDTCxJQUFJLEVBQUVBLElBQUk7Y0FBRU0sUUFBUSxFQUFFQyxzQkFBTSxDQUFDQyxRQUFRO2NBQUVDLE1BQU0sRUFBQztZQUFNLEVBQUUsRUFDaEVMLG9CQUFDQyxjQUFRO2NBQUNMLElBQUksRUFBRUEsSUFBSTtjQUFFTSxRQUFRLEVBQUVDLHNCQUFNLENBQUNDLFFBQVE7Y0FBRUMsTUFBTSxFQUFDO1lBQVEsRUFBRSxFQUNsRUwsb0JBQUNDLGNBQVE7Y0FDTEwsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZNLFFBQVEsRUFBRUMsc0JBQU0sQ0FBQ0MsUUFBUTtjQUFFQyxNQUFNLEVBQUMsVUFBVTtjQUM1Q0MsU0FBUyxFQUFFLENBQUMsc0JBQXNCO1lBQUMsRUFDckMsQ0FDSDtVQUVYIiwibmFtZXMiOlsidHBsIiwidHBsMiIsInRwbDMiLCJ0cGxzIiwidHBsMSIsInRpdGxlIiwiQmFja2VuZFBhZ2UiLCJSZWFjdCIsIkRvY3VtZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInRleHRJZCIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvYmFja2VuZC9jb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19