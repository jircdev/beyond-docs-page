define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.StylesThemePage = _exports.StylesTemplatePage = _exports.StylesModulesPage = _exports.StylesImportsPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/styles",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0EsTUFBTUMsSUFBSSxHQUFHO1FBQ1RILElBQUksRUFBRTtVQUFDSSxHQUFHLEVBQUVKLElBQU47VUFBWWMsS0FBSyxFQUFFLGlCQUFuQjtVQUFzQyxZQUFZO1FBQWxELENBREc7UUFFVGIsSUFBSSxFQUFFO1VBQUNHLEdBQUcsRUFBRUgsSUFBTjtVQUFZLFlBQVk7UUFBeEIsQ0FGRztRQUdUQyxJQUFJLEVBQUU7VUFBQ0UsR0FBRyxFQUFFRixJQUFOO1VBQVksWUFBWTtRQUF4QjtNQUhHLENBQWI7TUFNTzs7TUFBVSxTQUFVZSxlQUFWLEdBQXlCO1FBQ3RDLE9BQ0lWLDBDQUVJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDSixJQUFJLEVBQUVBLElBQVA7VUFBYU0sUUFBUSxFQUFFQyx1QkFBT0MsUUFBOUI7VUFBd0NDLE1BQU0sRUFBQztRQUEvQyxDQUFUTCxDQUZKQSxFQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDSixJQUFJLEVBQUVBLElBQVA7VUFBYU0sUUFBUSxFQUFFQyx1QkFBT0MsUUFBOUI7VUFBd0NDLE1BQU0sRUFBQztRQUEvQyxDQUFUTCxDQUhKQSxFQUlJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMSixJQUFJLEVBQUVBLElBREQ7VUFFTE0sUUFBUSxFQUFFQyx1QkFBT0MsUUFGWjtVQUVzQkMsTUFBTSxFQUFDLE1BRjdCO1VBR0xDLFNBQVMsRUFBRSxDQUFDLHNCQUFEO1FBSE4sQ0FBVE4sQ0FKSkEsQ0FESjtNQVlIIiwibmFtZXMiOlsidHBsMSIsInRwbDIiLCJ0cGwzIiwidHBscyIsInRwbCIsImxhbmd1YWdlIiwiU3R5bGVzSW1wb3J0c1BhZ2UiLCJSZWFjdCIsIkRvY3VtZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInRleHRJZCIsIm5leHRMaW5rcyIsInRpdGxlIiwiU3R5bGVzTW9kdWxlc1BhZ2UiLCJTdHlsZXNUZW1wbGF0ZVBhZ2UiLCJTdHlsZXNUaGVtZVBhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3N0eWxlcy9jb2RlL3RzL2ltcG9ydHMudHN4IiwiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvc3R5bGVzL2NvZGUvdHMvbW9kdWxlcy50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9zdHlsZXMvY29kZS90cy90ZW1wbGF0ZS50c3giLCJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9zdHlsZXMvY29kZS90cy90aGVtZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19