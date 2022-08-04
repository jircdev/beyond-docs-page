define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ProjectsIntro = _exports.ProjectStructure = _exports.ProjectJson = _exports.ProjectImports = _exports.ProjectDependencies = _exports.ProjectCreate = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/projects",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /************************
  INTERNAL MODULE: ./create
  ************************/

  ims.set('./create', {
    hash: 3730624514,
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
          moduleId: _beyond_context.module.resource,
          tpls
        };
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, { ...attrs,
          textId: "create"
        }), React.createElement(_html.Document, { ...attrs,
          textId: "dashboard"
        }), React.createElement(_html.Document, { ...attrs,
          textId: "createInfo"
        }), React.createElement(_html.Document, { ...attrs,
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
    hash: 3164525774,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "dependencies",
          nextLinks: ["/docs/projects/dependencies"]
        }));
      }
    }
  });
  /************************
  INTERNAL MODULE: ./import
  ************************/

  ims.set('./import', {
    hash: 2337462919,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "imports",
          nextLinks: ["/docs/projects/dependencies"]
        }));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 1720349163,
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
          moduleId: _beyond_context.module.resource,
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
    hash: 3811012663,
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
          moduleId: _beyond_context.module.resource,
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
    hash: 1772014692,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "structure",
          tpls: tpls,
          nextLinks: ["/docs/projects/json"]
        }));
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
  let ProjectCreate, ProjectDependencies, ProjectImports, ProjectsIntro, ProjectJson, ProjectStructure; // Module exports

  _exports.ProjectStructure = ProjectStructure;
  _exports.ProjectJson = ProjectJson;
  _exports.ProjectsIntro = ProjectsIntro;
  _exports.ProjectImports = ProjectImports;
  _exports.ProjectDependencies = ProjectDependencies;
  _exports.ProjectCreate = ProjectCreate;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ProjectCreate') && (_exports.ProjectCreate = ProjectCreate = require ? require('./create').ProjectCreate : value);
    (require || prop === 'ProjectDependencies') && (_exports.ProjectDependencies = ProjectDependencies = require ? require('./dependencies').ProjectDependencies : value);
    (require || prop === 'ProjectImports') && (_exports.ProjectImports = ProjectImports = require ? require('./import').ProjectImports : value);
    (require || prop === 'ProjectsIntro') && (_exports.ProjectsIntro = ProjectsIntro = require ? require('./intro').ProjectsIntro : value);
    (require || prop === 'ProjectJson') && (_exports.ProjectJson = ProjectJson = require ? require('./project-json').ProjectJson : value);
    (require || prop === 'ProjectStructure') && (_exports.ProjectStructure = ProjectStructure = require ? require('./structure').ProjectStructure : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUUsQ0FBQyx1QkFBRDtRQUZOLENBQVRILENBREpBLENBREo7TUFRSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNkRDs7TUFDQTs7TUFDQTs7TUFFQSxNQUFNUixHQUFHLEdBQUc7OztFQUFaO01BSUEsTUFBTUgsSUFBSSxHQUFHO1FBQ1RzQixPQUFPLEVBQUU7VUFDTHBCLFFBQVEsRUFBRSxNQURMO1VBRUxDO1FBRks7TUFEQSxDQUFiO01BT087O01BQVUsU0FBVW9CLGdCQUFWLEdBQTBCO1FBQ3ZDLE9BQ0laLDBDQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMSCxRQUFRLEVBQUVDLHVCQUFPQyxRQURaO1VBQ3NCRyxNQUFNLEVBQUMsV0FEN0I7VUFFTGIsSUFBSSxFQUFFQSxJQUZEO1VBR0xjLFNBQVMsRUFBRSxDQUFDLHFCQUFEO1FBSE4sQ0FBVEgsQ0FISkEsQ0FESjtNQVdIIiwibmFtZXMiOlsidHBscyIsImJleW9uZCIsImxhbmd1YWdlIiwidHBsIiwidHBsMSIsInRwbDIiLCJQcm9qZWN0Q3JlYXRlIiwiYXR0cnMiLCJtb2R1bGVJZCIsIm1vZHVsZSIsInJlc291cmNlIiwiUmVhY3QiLCJEb2N1bWVudCIsInRleHRJZCIsIm5leHRMaW5rcyIsIlByb2plY3REZXBlbmRlbmNpZXMiLCJwcm9qZWN0IiwibGlicmFyaWVzIiwidGl0bGUiLCJQcm9qZWN0SW1wb3J0cyIsIlByb2plY3RzSW50cm8iLCJQcm9qZWN0SnNvbiIsIm1vZHVsZXMiLCJQcm9qZWN0U3RydWN0dXJlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9qZWN0cy9jb2RlL3RzL2NyZWF0ZS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9qZWN0cy9jb2RlL3RzL2RlcGVuZGVuY2llcy50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9qZWN0cy9jb2RlL3RzL2ltcG9ydC50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9qZWN0cy9jb2RlL3RzL2ludHJvLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvcHJvamVjdC1qc29uLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3Byb2plY3RzL2NvZGUvdHMvc3RydWN0dXJlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=