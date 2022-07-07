define(["@beyond-js/kernel/bundle", "@beyond-js/kernel/transversals", "@beyond-js/widgets/render", "@beyond-js/kernel/routing"], function (dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  const {
    externals
  } = dependency_0;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/transversals", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]));

  const {
    Transversal
  } = require('@beyond-js/kernel/transversals');

  const transversal = new Transversal('start', '');
  /*************
  BUNDLE: WIDGET
  *************/

  const {
    widgets
  } = require('@beyond-js/widgets/render');

  widgets.register([{
    "name": "contents-page",
    "id": "@beyond/docs/contents-page",
    "is": "page",
    "route": "/docs/${content}",
    "layout": "main-layout"
  }, {
    "name": "contents-subpage",
    "id": "@beyond/docs/contents-subpage",
    "is": "page",
    "route": "/docs/${content}/${sub}",
    "layout": "main-layout"
  }, {
    "name": "editor-page",
    "id": "@beyond/docs/editor",
    "is": "page",
    "route": "/editor"
  }, {
    "name": "docs-header-menu",
    "id": "@beyond/docs/header-menu.widget"
  }, {
    "name": "home-page",
    "id": "@beyond/docs/home.widget",
    "is": "page",
    "route": "/",
    "layout": "home-layout"
  }, {
    "name": "beyond-docs-header",
    "id": "@beyond/docs/header"
  }, {
    "name": "main-layout",
    "id": "@beyond/docs/layout/main",
    "is": "layout"
  }, {
    "name": "home-layout",
    "id": "@beyond/docs/layout/home",
    "is": "layout"
  }, {
    "name": "menu-layout",
    "attrs": ["opened", "home"],
    "id": "@beyond/docs/layout/menu.widget",
    "is": "layout"
  }]);
  const bundles = new Map();
  /**********************
  MODULE: unnamed/routing
  **********************/

  bundles.set({
    "module": "@beyond/docs/unnamed/routing",
    "bundle": "start"
  }, function (ims, exports) {
    /*************************
    INTERNAL MODULE: ./routing
    *************************/
    ims.set('./routing', {
      hash: 2451986782,
      creator: function (require, exports) {
        "use strict";

        var _routing = require("@beyond-js/kernel/routing");

        const data = new Map();

        _routing.routing.redirect = async function redirect(uri) {};
      }
    });
  });
  transversal.initialise(bundles);
});