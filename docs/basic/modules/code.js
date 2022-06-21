define(["exports", "react", "@beyond/docs/components/html/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ModulesIntro = _exports.ModulesCreate = _exports.ModulesConfig = _exports.ModulesBundles = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/modules/code").package();

  externals.register(new Map([["react", dependency_0]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./bundles
  *************************/

  ims.set('./bundles', {
    hash: 4151959298,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModulesBundles = ModulesBundles;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 4060825025,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModulesCreate = ModulesCreate;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 444529768,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModulesIntro = ModulesIntro;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "introduction"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "internal"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "working"
        }), React.createElement(_code.Document, {
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
    hash: 1505704908,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModulesConfig = ModulesConfig;

      var React = require("react");

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "introduction"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "internal"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "working"
        }), React.createElement(_code.Document, {
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