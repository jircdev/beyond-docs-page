requirejs.config({baseUrl: '/packages'});


define(["@beyond-js/kernel/core/ts", "@beyond-js/kernel/routing/ts"], function (dependency_0, dependency_1) {
  "use strict";

  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  dependencies.set('@beyond-js/kernel/routing/ts', dependency_1);
  const transversal = beyond.transversals.obtain('start', '', dependencies);
  /*************
  BUNDLE: WIDGET
  *************/

  beyond.widgets.register([{
    "name": "beyond-ui-test-page",
    "id": "@beyond/ui/test/widget",
    "is": "page",
    "route": "/test"
  }, {
    "name": "contents-page",
    "id": "@beyond/docs/contents/widget",
    "is": "page",
    "route": "/${content}/${sub}"
  }, {
    "name": "editor-page",
    "id": "@beyond/docs/editor/widget",
    "is": "page",
    "route": "/editor"
  }, {
    "name": "home-page",
    "id": "@beyond/docs/home/widget",
    "is": "page",
    "route": "/${content}"
  }, {
    "name": "beyond-docs-header",
    "id": "@beyond/docs/header/widget"
  }, {
    "name": "main-layout",
    "id": "@beyond/docs/layout/main/widget",
    "is": "layout"
  }, {
    "name": "menu-layout",
    "id": "@beyond/docs/layout/menu/widget",
    "is": "layout"
  }]);
  const bundles = new Map();
  /**********************
  MODULE: unnamed/routing
  **********************/

  bundles.set('@beyond/docs/unnamed/routing/start', {
    hash: 4050346668,
    specs: {},
    creator: function (transversal, bundle, __pkg) {
      const modules = new Map();
      /*************************
      INTERNAL MODULE: ./routing
      *************************/

      modules.set('./routing', {
        hash: 4122764329,
        creator: function (require, exports) {
          "use strict";

          var _ts = require("@beyond-js/kernel/routing/ts");

          const data = new Map();

          _ts.routing.redirect = async function redirect(uri) {};
        }
      }); // Exports managed by beyond bundle objects

      __pkg.exports.managed = function (require, _exports) {};

      return modules;
    }
  });
  transversal.initialise(bundles);
  routing.setUp(
  /*routing mode is by "pathname"*/
  1);
});