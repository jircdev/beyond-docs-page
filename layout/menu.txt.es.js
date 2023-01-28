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
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
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
        hash: 1994596182,
        creator: function (require, exports) {
          exports.txt = {
            "/docs/backend": "Crear paquetes Backend",
            "/docs/backend/intro": "Introducción",
            "/docs/backend/bridges": "Bridges",
            "/docs/backend/ssr": "Servidor SSR",
            "/docs/backend/bee": "BEE",
            "/docs/backend/debug": "Depuración de código",
            "/docs/backend/hmr": "hmr",
            "/": "HOME",
            "getting-start": "Getting started",
            "fundamentals": "Fundamentals",
            "packages": "Packages",
            "configuration": "Configuration",
            "projects": "Projects",
            "modules": "Modules",
            "bundles": "Bundles",
            "widgets": "Widgets",
            "frontend": "Frontend",
            "backend": "Backend",
            "/docs/intro": "Introducción",
            "/docs/quick-start": "Inicio rápido",
            "/docs/cli": "CLI",
            "/docs/workspace": "Workspace",
            "/docs/tutorial/start": "Introducción",
            "/docs/tutorial/first-module": "Primer módulo",
            "/docs/tutorial/backend": "Backend",
            "/docs/tutorial/bridge": "Bridge",
            "/docs/tutorial/routing": "Enrutamiento",
            "concepts": "Basic concepts",
            "/docs/packages/create": "Crear un proyecto",
            "/docs/packages/json": "package.json",
            "/docs/packages/import": "Importar un proyecto",
            "/docs/packages/dependencies": "Dependencias",
            "/docs/packages/types": "Tipos de paquetes",
            "/docs/packages/distributions": "Distribuciones",
            "/docs/packages/publish": "Publicar en NPM",
            "/docs/packages/beyondjs": "De BeyondJS",
            "/docs/modules/introduction": "Introduccion",
            "/docs/modules/creation": "Crear un módulo",
            "/docs/modules/config": "Configuración",
            "/docs/modules/bundles": "Bundles",
            "/docs/modules/processors": "Procesadores",
            "/docs/deployment": "Despliegue",
            "/docs/frontend": "Crear paquetes de Front",
            "/docs/styles/template": "Plantilla",
            "/docs/styles/modules": "Módulos",
            "/docs/styles/themes": "Tema claro y oscuro",
            "/docs/styles/imports": "Importando",
            "/docs/template": "Sistema de Plantilla",
            "/docs/widgets": "Introducción",
            "/docs/widgets/controllers": "Controladores",
            "/docs/widgets/page": "Páginas",
            "/docs/widgets/layout": "Diseños",
            "/docs/widgets/rendering": "Renderizado",
            "/docs/routing": "Enrutamiento",
            "/docs/state/management": "Gestión de Estado",
            "/docs/dev-server": "Servidor de desarrollo",
            "/docs/ssr": "SSR",
            "/docs/multilanguage": "Multilenguaje",
            "/docs/glossary": "Glosario",
            "/docs/api/uri": "URI",
            "/docs/foundations/hmr": "HMR",
            "/docs/bare-specifiers": "Bare Specifiers",
            "/docs/modular": "Diseño Modular",
            "/docs/universal": "JavaScript Universal",
            "/docs/api/BeyondWidget": "Objecto widget",
            "/docs/api/IWidgetStore": "IWidgetStore",
            "/docs/frontend/intro": "Paquetes de Frontend"
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