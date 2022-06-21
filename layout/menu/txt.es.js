define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/layout/menu/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3095310164,
    creator: function (require, exports) {
      exports.txt = {
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
        "/docs/intro": "Introducción",
        "/docs/quick-start": "Inicio rápido",
        "/docs/dashboard": "Dashboard",
        "/docs/projects/intro": "Introducción",
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