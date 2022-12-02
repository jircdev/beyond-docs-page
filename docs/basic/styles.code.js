System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond/docs@1/components/html", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, StylesImportsPage, StylesModulesPage, StylesTemplatePage, StylesThemePage, __beyond_pkg, hmr;
  _export({
    StylesImportsPage: void 0,
    StylesModulesPage: void 0,
    StylesTemplatePage: void 0,
    StylesThemePage: void 0
  });
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
          "vspecifier": "@beyond/docs@1/docs/basic/styles",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond/docs/components/html', dependency_1], ['react', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./imports
      *************************/
      ims.set('./imports', {
        hash: 1760997005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StylesImportsPage = StylesImportsPage;
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          const tpl1 = `@import ~bootstrap/sass/bootstrap.scss;`;
          const tpl2 = `@import ~bootstrap/sass/variables.scss;`;
          const tpl3 = `@import ~@scope/project-name/form/sass/scss/label.scss;`;
          const tpls = {
            tpl1: {
              tpl: tpl1,
              language: "scss"
            },
            tpl2: {
              tpl: tpl2,
              language: "scss"
            },
            tpl3: {
              tpl: tpl3,
              language: "scss"
            }
          };
          /*bundle*/
          function StylesImportsPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "importOfStyleFiles"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "importingStylesFromABundle",
              nextLinks: ["/docs/styles/modules"]
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./modules
      *************************/

      ims.set('./modules', {
        hash: 1513991797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StylesModulesPage = StylesModulesPage;
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          const tpl1 = `
{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}`;
          const tpls = {
            tpl1: {
              tpl: tpl1,
              title: "module.json",
              "language": "json"
            }
          };
          /*bundle*/
          function StylesModulesPage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "modules",
              nextLinks: ["/docs/styles/imports"]
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./template
      **************************/

      ims.set('./template', {
        hash: 1694487387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StylesTemplatePage = StylesTemplatePage;
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          const tpl1 = `
{
  "application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  },
  "global": {
    "processor": "sass",
    "path": "global",
    "files": [
      "*"
    ]
  }
}`;
          const tpls = {
            tpl1: {
              tpl: tpl1,
              title: "module.json",
              "language": "json"
            }
          };
          /*bundle*/
          function StylesTemplatePage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "styles"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "templateApplication"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "templateGlobal",
              nextLinks: ["/docs/styles/modules"]
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./themes
      ************************/

      ims.set('./themes', {
        hash: 2278311205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StylesThemePage = StylesThemePage;
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          const tpl1 = `
@use 'dark';
@use 'light';
:root {
  @include light.properties();
  @media(prefers-color-scheme: dark) {
    @include dark.properties();
  }
}

html[data-beyond-mode="light"] {
  @include light.properties();
}

html[data-beyond-mode="dark"] {
  @include dark.properties();
}

`;
          const tpl2 = `
:host-context(html[data-beyond-mode]) {
    //styles here...
}`;
          const tpl3 = `
:host-context(html[data-beyond-mode]) {
    //styles here...
}
`;
          const tpls = {
            tpl1: {
              tpl: tpl1,
              title: "definition.scss",
              "language": "scss"
            },
            tpl2: {
              tpl: tpl2,
              "language": "scss"
            },
            tpl3: {
              tpl: tpl3,
              "language": "scss"
            }
          };
          /*bundle*/
          function StylesThemePage() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "lightAndDarkTheme"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "themesDefinition"
            }), React.createElement(_html.Document, {
              tpls: tpls,
              moduleId: _beyond_context.module.resource,
              textId: "code",
              nextLinks: ["/docs/styles/modules"]
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./imports",
        "from": "StylesImportsPage",
        "name": "StylesImportsPage"
      }, {
        "im": "./modules",
        "from": "StylesModulesPage",
        "name": "StylesModulesPage"
      }, {
        "im": "./template",
        "from": "StylesTemplatePage",
        "name": "StylesTemplatePage"
      }, {
        "im": "./themes",
        "from": "StylesThemePage",
        "name": "StylesThemePage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StylesImportsPage') && _export("StylesImportsPage", StylesImportsPage = require ? require('./imports').StylesImportsPage : value);
        (require || prop === 'StylesModulesPage') && _export("StylesModulesPage", StylesModulesPage = require ? require('./modules').StylesModulesPage : value);
        (require || prop === 'StylesTemplatePage') && _export("StylesTemplatePage", StylesTemplatePage = require ? require('./template').StylesTemplatePage : value);
        (require || prop === 'StylesThemePage') && _export("StylesThemePage", StylesThemePage = require ? require('./themes').StylesThemePage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxpQkFBaUI7Y0FBRSxVQUFVLEVBQUU7WUFBTSxDQUFDO1lBQy9EYixJQUFJLEVBQUU7Y0FBQ0csR0FBRyxFQUFFSCxJQUFJO2NBQUUsVUFBVSxFQUFFO1lBQU0sQ0FBQztZQUNyQ0MsSUFBSSxFQUFFO2NBQUNFLEdBQUcsRUFBRUYsSUFBSTtjQUFFLFVBQVUsRUFBRTtZQUFNO1dBQ3ZDO1VBRU07VUFBVSxTQUFVZSxlQUFlO1lBQ3RDLE9BQ0lWLDBDQUVJQSxvQkFBQ0MsY0FBUTtjQUFDTCxJQUFJLEVBQUVBLElBQUk7Y0FBRU0sUUFBUSxFQUFFQyxzQkFBTSxDQUFDQyxRQUFRO2NBQUVDLE1BQU0sRUFBQztZQUFtQixFQUFFLEVBQzdFTCxvQkFBQ0MsY0FBUTtjQUFDTCxJQUFJLEVBQUVBLElBQUk7Y0FBRU0sUUFBUSxFQUFFQyxzQkFBTSxDQUFDQyxRQUFRO2NBQUVDLE1BQU0sRUFBQztZQUFrQixFQUFFLEVBQzVFTCxvQkFBQ0MsY0FBUTtjQUNMTCxJQUFJLEVBQUVBLElBQUk7Y0FDVk0sUUFBUSxFQUFFQyxzQkFBTSxDQUFDQyxRQUFRO2NBQUVDLE1BQU0sRUFBQyxNQUFNO2NBQ3hDQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0I7WUFBQyxFQUNyQyxDQUNIO1VBRVgiLCJuYW1lcyI6WyJ0cGwxIiwidHBsMiIsInRwbDMiLCJ0cGxzIiwidHBsIiwibGFuZ3VhZ2UiLCJTdHlsZXNJbXBvcnRzUGFnZSIsIlJlYWN0IiwiRG9jdW1lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsInJlc291cmNlIiwidGV4dElkIiwibmV4dExpbmtzIiwidGl0bGUiLCJTdHlsZXNNb2R1bGVzUGFnZSIsIlN0eWxlc1RlbXBsYXRlUGFnZSIsIlN0eWxlc1RoZW1lUGFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvc3R5bGVzL2NvZGUvdHMvaW1wb3J0cy50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9zdHlsZXMvY29kZS90cy9tb2R1bGVzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3N0eWxlcy9jb2RlL3RzL3RlbXBsYXRlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3N0eWxlcy9jb2RlL3RzL3RoZW1lcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=