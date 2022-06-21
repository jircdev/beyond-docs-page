define(["exports", "@beyond/docs/components/html/code", "react", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.StylesThemePage = _exports.StylesTemplatePage = _exports.StylesModulesPage = _exports.StylesImportsPage = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/basic/styles/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html/code"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./imports
  *************************/

  ims.set('./imports', {
    hash: 2423507709,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesImportsPage = StylesImportsPage;

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "importOfStyleFiles"
        }), React.createElement(_code.Document, {
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
    hash: 3709678544,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesModulesPage = StylesModulesPage;

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
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
    hash: 3710762738,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesTemplatePage = StylesTemplatePage;

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "styles"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "templateApplication"
        }), React.createElement(_code.Document, {
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
    hash: 2667688753,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesThemePage = StylesThemePage;

      var _code = require("@beyond/docs/components/html/code");

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
        return React.createElement(React.Fragment, null, React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "lightAndDarkTheme"
        }), React.createElement(_code.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "themesDefinition"
        }), React.createElement(_code.Document, {
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
  let StylesImportsPage, StylesModulesPage, StylesTemplatePage, StylesThemePage; // Module exports

  _exports.StylesThemePage = StylesThemePage;
  _exports.StylesTemplatePage = StylesTemplatePage;
  _exports.StylesModulesPage = StylesModulesPage;
  _exports.StylesImportsPage = StylesImportsPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'StylesImportsPage') && (_exports.StylesImportsPage = StylesImportsPage = require ? require('./imports').StylesImportsPage : value);
    (require || prop === 'StylesModulesPage') && (_exports.StylesModulesPage = StylesModulesPage = require ? require('./modules').StylesModulesPage : value);
    (require || prop === 'StylesTemplatePage') && (_exports.StylesTemplatePage = StylesTemplatePage = require ? require('./template').StylesTemplatePage : value);
    (require || prop === 'StylesThemePage') && (_exports.StylesThemePage = StylesThemePage = require ? require('./themes').StylesThemePage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});