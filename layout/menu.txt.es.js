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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.0"], ["swiper", "8.4.5"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3660534566,
        creator: function (require, exports) {
          exports.txt = {
            "/docs/intro": "Introducción",
            "/docs/quick-start": "Inicio rápido",
            "/docs/cli": "CLI",
            "/docs/workspace": "Workspace",
            "notice": "Versión beta",
            "documentation": "Documentación",
            "examples": "Ejemplos",
            "languages": "Lenguajes",
            "theme": "Tema",
            "title": "Contenidos",
            "/": "HOME",
            "getting-start": "Empezando",
            "fundamentals": "Fundamentos",
            "configuration": "Configuración",
            "projects": "Proyectos",
            "modules": "Módulos",
            "bundles": "Bundles",
            "widgets": "Widgets",
            "styles": "Estilos",
            "api": "API",
            "tutorial": "tutorial",
            "/docs/tutorial/start": "Introducción",
            "/docs/tutorial/first-module": "Primer módulo",
            "/docs/tutorial/backend": "Backend",
            "/docs/tutorial/bridge": "Bridge",
            "/docs/tutorial/routing": "Enrutamiento",
            "concepts": "Conceptos básicos",
            "/docs/projects/create": "Crear un proyecto",
            "/docs/projects/structure": "Estructura",
            "/docs/projects/json": "project.json",
            "/docs/projects/import": "Importar un proyecto",
            "/docs/projects/dependencies": "Dependencias",
            "/docs/modules/introduction": "Modulos en Beyond",
            "/docs/modules/create": "Crear un módulo",
            "/docs/modules/json": "Configuración",
            "/docs/bundles": "Bundles",
            "/docs/processors": "Processors",
            "/docs/template-system": "Sistema de Plantillas",
            "/docs/widgets": "Widgets",
            "/docs/widgets/intro": "Introducción",
            "/docs/widgets/definition": "Definición",
            "/docs/widgets/controller": "Objeto Controller",
            "/docs/widgets/page": "Page",
            "/docs/widgets/layout": "Layout",
            "/docs/widgets/rendering": "Renderizado",
            "/docs/routing": "Enrutamiento",
            "/docs/state/management": "Manejo de Estados",
            "/docs/backend": "Backend",
            "/docs/styles/template": "Template",
            "/docs/styles/modules": "Módulos",
            "/docs/styles/themes": "Light & Dark theme",
            "/docs/styles/imports": "Importación",
            "/docs/dev-server": "Servidor de desarrollo",
            "/docs/foundations/distributions": "Distribuciones",
            "/docs/bee": "BEE",
            "/docs/ssr": "SSR",
            "/docs/multilanguage": "Multilenguaje",
            "/docs/glossary": "Glosario",
            "/docs/api/uri": "URI",
            "/docs/foundations/hmr": "HMR",
            "/docs/foundations/bee": "BEEs",
            "/docs/bare-specifiers": "Bare Specifiers",
            "/docs/modular": "Diseño Modular",
            "/docs/universal": "JavaScript Universal",
            "/docs/api/BeyondWidget": "Objecto widget",
            "/docs/api/IWidgetStore": "IWidgetStore"
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