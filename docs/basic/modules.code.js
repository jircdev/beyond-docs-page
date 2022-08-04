define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ModulesIntro = _exports.ModulesCreate = _exports.ModulesConfig = _exports.ModulesBundles = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/modules",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./bundles
  *************************/

  ims.set('./bundles', {
    hash: 1935060961,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "create",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  /************************
  INTERNAL MODULE: ./create
  ************************/

  ims.set('./create', {
    hash: 1664776402,
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
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "create",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 2960065175,
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
  let ModulesBundles, ModulesCreate, ModulesIntro, ModulesConfig; // Module exports

  _exports.ModulesConfig = ModulesConfig;
  _exports.ModulesIntro = ModulesIntro;
  _exports.ModulesCreate = ModulesCreate;
  _exports.ModulesBundles = ModulesBundles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ModulesBundles') && (_exports.ModulesBundles = ModulesBundles = require ? require('./bundles').ModulesBundles : value);
    (require || prop === 'ModulesCreate') && (_exports.ModulesCreate = ModulesCreate = require ? require('./create').ModulesCreate : value);
    (require || prop === 'ModulesIntro') && (_exports.ModulesIntro = ModulesIntro = require ? require('./intro').ModulesIntro : value);
    (require || prop === 'ModulesConfig') && (_exports.ModulesConfig = ModulesConfig = require ? require('./settings').ModulesConfig : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVVrQixhQUFWLEdBQXVCO1FBQ3BDLE9BQ0liLDBDQUNJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDRSxRQUFRLEVBQUVDLHVCQUFPQyxRQUFsQjtVQUE0QkMsTUFBTSxFQUFDO1FBQW5DLENBQVRMLENBREpBLEVBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNKLElBQUksRUFBRUEsSUFBUDtVQUFhTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBRkpBLEVBR0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNKLElBQUksRUFBRUEsSUFBUDtVQUFhTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBSEpBLEVBSUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xKLElBQUksRUFBRUEsSUFERDtVQUVMTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBRXNCQyxNQUFNLEVBQUMsWUFGN0I7VUFHTEMsU0FBUyxFQUFFLENBQUMsc0JBQUQ7UUFITixDQUFUTixDQUpKQSxDQURKO01BWUgiLCJuYW1lcyI6WyJ0cGwiLCJ0cGxzIiwiY3JlYXRpb24iLCJsYW5ndWFnZSIsIk1vZHVsZXNCdW5kbGVzIiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiLCJuZXh0TGlua3MiLCJNb2R1bGVzQ3JlYXRlIiwiaW50ZXJuYWwiLCJpbXBvcnQxIiwiaW1wb3J0MiIsImltcG9ydDMiLCJNb2R1bGVzSW50cm8iLCJNb2R1bGVzQ29uZmlnIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9tb2R1bGVzL2NvZGUvdHMvYnVuZGxlcy50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9tb2R1bGVzL2NvZGUvdHMvY3JlYXRlLnRzeCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL21vZHVsZXMvY29kZS90cy9pbnRyby50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9tb2R1bGVzL2NvZGUvdHMvc2V0dGluZ3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19