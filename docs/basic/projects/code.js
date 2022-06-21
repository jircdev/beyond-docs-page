define(["exports", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ProjectsIntro = _exports.ProjectStructure = _exports.ProjectJson = _exports.ProjectImports = _exports.ProjectDependencies = _exports.ProjectCreate = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/projects/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /************************
  INTERNAL MODULE: ./create
  ************************/

  ims.set('./create', {
    hash: 919832022,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectCreate = ProjectCreate;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");

      const tpls = {
        beyond: {
          language: 'shell',
          tpl: 'beyond'
        },
        tpl1: {
          language: 'shell',
          tpl: 'beyond'
        },
        tpl2: {
          language: 'shell',
          tpl: 'beyond'
        }
      };
      /*bundle*/

      function ProjectCreate() {
        const attrs = {
          moduleId: _beyond_context.module.resource,
          tpls
        };
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, { ...attrs,
          textId: "create"
        }), React.createElement(_code.Document, { ...attrs,
          textId: "dashboard"
        }), React.createElement(_code.Document, { ...attrs,
          textId: "createInfo"
        }), React.createElement(_code.Document, { ...attrs,
          textId: "manual",
          nextLinks: ["/docs/tutorial/bridge"]
        }));
      }
    }
  });
  /******************************
  INTERNAL MODULE: ./dependencies
  ******************************/

  ims.set('./dependencies', {
    hash: 2581430187,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectDependencies = ProjectDependencies;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function ProjectDependencies() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 854604336,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectImports = ProjectImports;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 2087752523,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectsIntro = ProjectsIntro;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function ProjectsIntro() {
        return React.createElement(_code.Document, {
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
    hash: 4173523120,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectJson = ProjectJson;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function ProjectJson() {
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 2990287120,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProjectStructure = ProjectStructure;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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