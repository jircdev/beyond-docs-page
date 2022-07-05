define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/menu",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2647836208,
    creator: function (require, exports) {
      exports.txt = {
        "title": "Contents",
        "/": "HOME",
        "getting-start": "Getting started",
        "fundamentals": "Fundamentals",
        "configuration": "Settings",
        "api": "API",
        "concepts": "Basic concepts",
        "tutorial": "tutorial",
        "projects": "Projects",
        "modules": "Modules",
        "bundles": "Bundles",
        "widgets": "Widgets",
        "styles": "Styles",
        "/docs/tutorial/start": "Introduction",
        "/docs/tutorial/first-module": "First module",
        "/docs/tutorial/backend": "Backend",
        "/docs/tutorial/bridge": "Bridge",
        "/docs/tutorial/routing": "Routing",
        "/docs/intro": "Introduction",
        "/docs/quick-start": "Quick start",
        "/docs/tutorial/web": "Tutorial",
        "/docs/dashboard": "Dashboard",
        "/docs/projects/intro": "Introduction",
        "/docs/projects/create": "Create a project",
        "/docs/projects/structure": "Structure",
        "/docs/projects/json": "project.json",
        "/docs/projects/import": "Import a project",
        "/docs/projects/dependencies": "Dependencies",
        "/docs/modules/introduction": "Modules in Beyond",
        "/docs/modules/create": "Create a module",
        "/docs/modules/json": "Setting",
        "/docs/bundles": "Bundles",
        "/docs/processors": "Processors",
        "/docs/template-system": "Template System",
        "/docs/widgets": "Widgets",
        "/docs/widgets/intro": "Introduction",
        "/docs/widgets/definition": "Definition",
        "/docs/widgets/controller": "Object Controller",
        "/docs/widgets/page": "Page",
        "/docs/widgets/layout": "Layout",
        "/docs/widgets/rendering": "Rendering",
        "/docs/foundations/hmr": "HMR",
        "/docs/foundations/bee": "BEEs",
        "/docs/foundations/distributions": "Distributions",
        "/docs/routing": "Routing",
        "/docs/state/management": "State Handling",
        "/docs/backend": "Backend",
        "/docs/styles/template": "Template",
        "/docs/styles/modules": "Modules",
        "/docs/styles/themes": "Light & Dark theme",
        "/docs/styles/imports": "Imports",
        "/docs/dev-server": "Development server",
        "/docs/bee": "BEE",
        "/docs/ssr": "SSR",
        "/docs/multilanguage": "Multilanguage",
        "/docs/glossary": "Glossary",
        "/docs/api/uri": "URI",
        "/docs/api/BeyondWidget": "Widget object",
        "/docs/api/IWidgetStore": "IWidgetStore"
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});