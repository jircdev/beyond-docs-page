System.register(["@beyond-js/kernel@0.1.7/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/layout/menu",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2017888394,
        creator: function (require, exports) {
          exports.txt = {
            "notice": "Beta version",
            "documentation": "Documentation",
            "examples": "Examples",
            "languages": "Languages",
            "theme": "Theme",
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
            "/docs/api/IWidgetStore": "IWidgetStore",
            "/docs/introduction": "Introducción",
            "/docs/bare-specifiers": "Bare Specifiers",
            "/docs/modular": "Diseño Modular",
            "/docs/universal": "JavaScript Universal"
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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