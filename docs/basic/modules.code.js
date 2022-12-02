System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ModulesBundles, ModulesCreate, ModulesIntro, ModulesConfig, __beyond_pkg, hmr;
  _export({
    ModulesBundles: void 0,
    ModulesCreate: void 0,
    ModulesIntro: void 0,
    ModulesConfig: void 0
  });
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
          "vspecifier": "@beyond/docs@1/docs/basic/modules",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./bundles
      *************************/
      ims.set('./bundles', {
        hash: 1325252441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesBundles = ModulesBundles;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}`;
          const tpls = {
            creation: {
              language: "json",
              tpl
            }
          };
          /*bundle*/
          function ModulesBundles() {
            return React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "create",
              nextLinks: ["/docs/modules/create"]
            });
          }
        }
      });

      /************************
      INTERNAL MODULE: ./create
      ************************/

      ims.set('./create', {
        hash: 3932359293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesCreate = ModulesCreate;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}`;
          const tpls = {
            creation: {
              language: "json",
              tpl
            }
          };
          /*bundle*/
          function ModulesCreate() {
            return React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "create",
              nextLinks: ["/docs/modules/create"]
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./intro
      ***********************/

      ims.set('./intro', {
        hash: 3753443959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesIntro = ModulesIntro;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const internal = `
export /*bundle*/ class Auth {
    //.... 
}
// or
export /*bundle*/ const B = {...}; `;
          const tpls = {
            internal: {
              tpl: internal
            },
            import1: {
              tpl: `import * as Mod from 'module-identifier'`
            },
            import2: {
              tpl: "@company/project/login"
            },
            import3: {
              tpl: `import {Auth} from '@company/project/login/code'`
            }
          };
          /*bundle*/
          function ModulesIntro() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "introduction"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "internal"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "working"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "identifier",
              nextLinks: ["/docs/modules/create"]
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./settings
      **************************/

      ims.set('./settings', {
        hash: 1947715007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesConfig = ModulesConfig;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const internal = `
export /*bundle*/ class Auth {
    //.... 
}
// or
export /*bundle*/ const B = {...}; `;
          const tpls = {
            internal: {
              tpl: internal
            },
            import1: {
              tpl: `import * as Mod from 'module-identifier'`
            },
            import2: {
              tpl: "@company/project/login"
            },
            import3: {
              tpl: `import {Auth} from '@company/project/login/code'`
            }
          };
          /*bundle*/
          function ModulesConfig() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              moduleId: _beyond_context.module.resource,
              textId: "introduction"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "internal"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "working"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "identifier",
              nextLinks: ["/docs/modules/create"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./bundles",
        "from": "ModulesBundles",
        "name": "ModulesBundles"
      }, {
        "im": "./create",
        "from": "ModulesCreate",
        "name": "ModulesCreate"
      }, {
        "im": "./intro",
        "from": "ModulesIntro",
        "name": "ModulesIntro"
      }, {
        "im": "./settings",
        "from": "ModulesConfig",
        "name": "ModulesConfig"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ModulesBundles') && _export("ModulesBundles", ModulesBundles = require ? require('./bundles').ModulesBundles : value);
        (require || prop === 'ModulesCreate') && _export("ModulesCreate", ModulesCreate = require ? require('./create').ModulesCreate : value);
        (require || prop === 'ModulesIntro') && _export("ModulesIntro", ModulesIntro = require ? require('./intro').ModulesIntro : value);
        (require || prop === 'ModulesConfig') && _export("ModulesConfig", ModulesConfig = require ? require('./settings').ModulesConfig : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRUEsTUFBTUEsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CVjtVQUNGLE1BQU1DLElBQUksR0FBRztZQUFDQyxRQUFRLEVBQUU7Y0FBQ0MsUUFBUSxFQUFFLE1BQU07Y0FBRUg7WUFBRztVQUFDLENBQUM7VUFFekM7VUFBVSxTQUFVSSxjQUFjO1lBQ3JDLE9BQ0lDLG9CQUFDQyxjQUFRO2NBQ0xMLElBQUksRUFBRUEsSUFBSTtjQUFFTSxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDLFFBQVE7Y0FDeERDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQjtZQUFDLEVBQ3JDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7VUFDQTtVQUVBLE1BQU1WLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQlY7VUFDRixNQUFNQyxJQUFJLEdBQUc7WUFBQ0MsUUFBUSxFQUFFO2NBQUNDLFFBQVEsRUFBRSxNQUFNO2NBQUVIO1lBQUc7VUFBQyxDQUFDO1VBRXpDO1VBQVUsU0FBVVcsYUFBYTtZQUNwQyxPQUNJTixvQkFBQ0MsY0FBUTtjQUNMTCxJQUFJLEVBQUVBLElBQUk7Y0FDVk0sU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQyxRQUFRO2NBQzVDQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0I7WUFBQyxFQUNyQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBO1VBQ0E7VUFFQSxNQUFNRSxRQUFRLEdBQUc7Ozs7O29DQUttQjtVQUNwQyxNQUFNWCxJQUFJLEdBQUc7WUFDVFcsUUFBUSxFQUFFO2NBQ05aLEdBQUcsRUFBRVk7YUFDUjtZQUNEQyxPQUFPLEVBQUU7Y0FDTGIsR0FBRyxFQUFFO2FBQ1I7WUFDRGMsT0FBTyxFQUFFO2NBQUNkLEdBQUcsRUFBRTtZQUF3QixDQUFDO1lBQ3hDZSxPQUFPLEVBQUU7Y0FBQ2YsR0FBRyxFQUFFO1lBQWtEO1dBQ3BFO1VBRU07VUFBVSxTQUFVZ0IsWUFBWTtZQUNuQyxPQUNJWCwwQ0FDSUEsb0JBQUNDLGNBQVE7Y0FBQ0MsU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQztZQUFjLEVBQUUsRUFDOURKLG9CQUFDQyxjQUFRO2NBQUNMLElBQUksRUFBRUEsSUFBSTtjQUFFTSxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUUsTUFBTSxFQUFDO1lBQVUsRUFBRSxFQUN0RUosb0JBQUNDLGNBQVE7Y0FBQ0wsSUFBSSxFQUFFQSxJQUFJO2NBQUVNLFNBQVMsRUFBRUMsc0JBQU0sQ0FBQ0QsU0FBUztjQUFFRSxNQUFNLEVBQUM7WUFBUyxFQUFFLEVBQ3JFSixvQkFBQ0MsY0FBUTtjQUNMTCxJQUFJLEVBQUVBLElBQUk7Y0FDVk0sU0FBUyxFQUFFQyxzQkFBTSxDQUFDRCxTQUFTO2NBQUVFLE1BQU0sRUFBQyxZQUFZO2NBQ2hEQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0I7WUFBQyxFQUNyQyxDQUNIO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7VUFDQTtVQUVBLE1BQU1FLFFBQVEsR0FBRzs7Ozs7b0NBS21CO1VBQ3BDLE1BQU1YLElBQUksR0FBRztZQUNUVyxRQUFRLEVBQUU7Y0FDTlosR0FBRyxFQUFFWTthQUNSO1lBQ0RDLE9BQU8sRUFBRTtjQUNMYixHQUFHLEVBQUU7YUFDUjtZQUNEYyxPQUFPLEVBQUU7Y0FBQ2QsR0FBRyxFQUFFO1lBQXdCLENBQUM7WUFDeENlLE9BQU8sRUFBRTtjQUFDZixHQUFHLEVBQUU7WUFBa0Q7V0FDcEU7VUFFTTtVQUFVLFNBQVVpQixhQUFhO1lBQ3BDLE9BQ0laLDBDQUNJQSxvQkFBQ0MsY0FBUTtjQUFDWSxRQUFRLEVBQUVWLHNCQUFNLENBQUNXLFFBQVE7Y0FBRVYsTUFBTSxFQUFDO1lBQWMsRUFBRSxFQUM1REosb0JBQUNDLGNBQVE7Y0FBQ0wsSUFBSSxFQUFFQSxJQUFJO2NBQUVpQixRQUFRLEVBQUVWLHNCQUFNLENBQUNXLFFBQVE7Y0FBRVYsTUFBTSxFQUFDO1lBQVUsRUFBRSxFQUNwRUosb0JBQUNDLGNBQVE7Y0FBQ0wsSUFBSSxFQUFFQSxJQUFJO2NBQUVpQixRQUFRLEVBQUVWLHNCQUFNLENBQUNXLFFBQVE7Y0FBRVYsTUFBTSxFQUFDO1lBQVMsRUFBRSxFQUNuRUosb0JBQUNDLGNBQVE7Y0FDTEwsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZpQixRQUFRLEVBQUVWLHNCQUFNLENBQUNXLFFBQVE7Y0FBRVYsTUFBTSxFQUFDLFlBQVk7Y0FDOUNDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQjtZQUFDLEVBQ3JDLENBQ0g7VUFFWCIsIm5hbWVzIjpbInRwbCIsInRwbHMiLCJjcmVhdGlvbiIsImxhbmd1YWdlIiwiTW9kdWxlc0J1bmRsZXMiLCJSZWFjdCIsIkRvY3VtZW50Iiwic3BlY2lmaWVyIiwibW9kdWxlIiwidGV4dElkIiwibmV4dExpbmtzIiwiTW9kdWxlc0NyZWF0ZSIsImludGVybmFsIiwiaW1wb3J0MSIsImltcG9ydDIiLCJpbXBvcnQzIiwiTW9kdWxlc0ludHJvIiwiTW9kdWxlc0NvbmZpZyIsIm1vZHVsZUlkIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL21vZHVsZXMvY29kZS90cy9idW5kbGVzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL21vZHVsZXMvY29kZS90cy9jcmVhdGUudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvbW9kdWxlcy9jb2RlL3RzL2ludHJvLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL21vZHVsZXMvY29kZS90cy9zZXR0aW5ncy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=