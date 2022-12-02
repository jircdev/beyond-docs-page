System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond/docs@1/components/html"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ProjectCreate, ProjectDependencies, ProjectImports, ProjectsIntro, ProjectJson, ProjectStructure, __beyond_pkg, hmr;
  _export({
    ProjectCreate: void 0,
    ProjectDependencies: void 0,
    ProjectImports: void 0,
    ProjectsIntro: void 0,
    ProjectJson: void 0,
    ProjectStructure: void 0
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
          "vspecifier": "@beyond/docs@1/docs/basic/projects",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/docs/components/html', dependency_2]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./create
      ************************/
      ims.set('./create', {
        hash: 3975688206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectCreate = ProjectCreate;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpls = {
            beyond: {
              language: 'shell',
              tpl: 'beyond'
            },
            tpl1: {
              language: 'json',
              tpl: `
{
  "name": "project-name",
  "version": "1.0.0",
  "title": "Project title",
  "description": "Description"
  "languages": {
    "default": "en",
    "supported": [
      "en"
    ]
  },,
  "modules": {
    "path": "modules"
  }
}
`
            },
            tpl2: {
              language: 'json',
              tpl: '' + `

{
  "applications": [
    "path-to-project/project.json"
  ]
}

`
            }
          };
          /*bundle*/
          function ProjectCreate() {
            const attrs = {
              specifier: _beyond_context.module.specifier,
              tpls
            };
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              ...attrs,
              textId: "create"
            }), React.createElement(_html.Document, {
              ...attrs,
              textId: "dashboard"
            }), React.createElement(_html.Document, {
              ...attrs,
              textId: "createInfo"
            }), React.createElement(_html.Document, {
              ...attrs,
              textId: "manual",
              nextLinks: ["/docs/projects/structure", "/docs/projects/json"]
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./dependencies
      ******************************/

      ims.set('./dependencies', {
        hash: 4245330827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectDependencies = ProjectDependencies;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function ProjectDependencies() {
            return React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "dependencies",
              nextLinks: ["/docs/projects/dependencies"]
            });
          }
        }
      });

      /************************
      INTERNAL MODULE: ./import
      ************************/

      ims.set('./import', {
        hash: 3437494384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectImports = ProjectImports;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const project = `
"libraries": {
    "imports": [
      "@project/models"
    ]
}`;
          const libraries = `
"libraries": {
    "imports": [
      "@project/models"
    ]
}`;
          const tpls = {
            project: {
              title: "project.json",
              "language": "json",
              tpl: project
            },
            libraries: {
              tpl: libraries,
              language: "json"
            }
          };
          /*bundle*/
          function ProjectImports() {
            return React.createElement(_html.Document, {
              tpls: tpls,
              specifier: _beyond_context.module.specifier,
              textId: "imports",
              nextLinks: ["/docs/projects/dependencies"]
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./intro
      ***********************/

      ims.set('./intro', {
        hash: 772637469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectsIntro = ProjectsIntro;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function ProjectsIntro() {
            return React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "intro",
              nextLinks: ["/docs/projects/create"]
            });
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./project-json
      ******************************/

      ims.set('./project-json', {
        hash: 852883278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectJson = ProjectJson;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function ProjectJson() {
            return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "json",
              nextLinks: ["/docs/projects/create"]
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./structure
      ***************************/

      ims.set('./structure', {
        hash: 1013144073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectStructure = ProjectStructure;
          var React = require("react");
          var _html = require("@beyond/docs/components/html");
          var _beyond_context = require("beyond_context");
          const tpl = `
"modules": {
    "path": "modules"
}`;
          const tpls = {
            modules: {
              language: "json",
              tpl
            }
          };
          /*bundle*/
          function ProjectStructure() {
            return React.createElement(_html.Document, {
              specifier: _beyond_context.module.specifier,
              textId: "structure",
              tpls: tpls,
              nextLinks: ["/docs/projects/json"]
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./create",
        "from": "ProjectCreate",
        "name": "ProjectCreate"
      }, {
        "im": "./dependencies",
        "from": "ProjectDependencies",
        "name": "ProjectDependencies"
      }, {
        "im": "./import",
        "from": "ProjectImports",
        "name": "ProjectImports"
      }, {
        "im": "./intro",
        "from": "ProjectsIntro",
        "name": "ProjectsIntro"
      }, {
        "im": "./project-json",
        "from": "ProjectJson",
        "name": "ProjectJson"
      }, {
        "im": "./structure",
        "from": "ProjectStructure",
        "name": "ProjectStructure"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ProjectCreate') && _export("ProjectCreate", ProjectCreate = require ? require('./create').ProjectCreate : value);
        (require || prop === 'ProjectDependencies') && _export("ProjectDependencies", ProjectDependencies = require ? require('./dependencies').ProjectDependencies : value);
        (require || prop === 'ProjectImports') && _export("ProjectImports", ProjectImports = require ? require('./import').ProjectImports : value);
        (require || prop === 'ProjectsIntro') && _export("ProjectsIntro", ProjectsIntro = require ? require('./intro').ProjectsIntro : value);
        (require || prop === 'ProjectJson') && _export("ProjectJson", ProjectJson = require ? require('./project-json').ProjectJson : value);
        (require || prop === 'ProjectStructure') && _export("ProjectStructure", ProjectStructure = require ? require('./structure').ProjectStructure : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLEVBQUU7Y0FDTG5CLFFBQVEsRUFBRSxNQUFNO2NBQ2hCQzs7V0FFUDtVQUVNO1VBQVUsU0FBVW1CLGdCQUFnQjtZQUN2QyxPQUNJWixvQkFBQ0MsY0FBUTtjQUNMSCxTQUFTLEVBQUVDLHNCQUFNLENBQUNELFNBQVM7Y0FBRUksTUFBTSxFQUFDLFdBQVc7Y0FDL0NaLElBQUksRUFBRUEsSUFBSTtjQUNWYSxTQUFTLEVBQUUsQ0FBQyxxQkFBcUI7WUFBQyxFQUNwQztVQUVWIiwibmFtZXMiOlsidHBscyIsImJleW9uZCIsImxhbmd1YWdlIiwidHBsIiwidHBsMSIsInRwbDIiLCJQcm9qZWN0Q3JlYXRlIiwiYXR0cnMiLCJzcGVjaWZpZXIiLCJtb2R1bGUiLCJSZWFjdCIsIkRvY3VtZW50IiwidGV4dElkIiwibmV4dExpbmtzIiwiUHJvamVjdERlcGVuZGVuY2llcyIsInByb2plY3QiLCJsaWJyYXJpZXMiLCJ0aXRsZSIsIlByb2plY3RJbXBvcnRzIiwiUHJvamVjdHNJbnRybyIsIlByb2plY3RKc29uIiwibW9kdWxlcyIsIlByb2plY3RTdHJ1Y3R1cmUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvY3JlYXRlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvZGVwZW5kZW5jaWVzLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvaW1wb3J0LnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvaW50cm8udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvcHJvamVjdHMvY29kZS90cy9wcm9qZWN0LWpzb24udHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvcHJvamVjdHMvY29kZS90cy9zdHJ1Y3R1cmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==