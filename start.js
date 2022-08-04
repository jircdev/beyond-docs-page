define(["@beyond-js/kernel/bundle", "@beyond-js/kernel/transversals", "@beyond-js/widgets/render", "@beyond-js/kernel/routing"], function (dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  const {
    Transversal
  } = brequire('@beyond-js/kernel/transversals');
  const transversal = new Transversal('start', '');
  /*************
  BUNDLE: WIDGET
  *************/

  const {
    widgets
  } = brequire('@beyond-js/widgets/render');
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
    "name": "counter-react",
    "id": "@beyond/docs/examples/sm/counter-react"
  }, {
    "name": "counter-svelte",
    "id": "@beyond/docs/examples/sm/counter-svelte"
  }, {
    "name": "counter-vue",
    "id": "@beyond/docs/examples/sm/counter-vue"
  }, {
    "name": "examples-counter-page",
    "id": "@beyond/docs/examples/sm/counter",
    "is": "page",
    "route": "/examples/sm/counter",
    "layout": "main-layout"
  }, {
    "name": "examples-list-page",
    "id": "@beyond/docs/examples/list",
    "is": "page",
    "route": "/examples",
    "layout": "main-layout"
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
  }, {
    "name": "app-docs-missing",
    "id": "@beyond/docs/missing.widget",
    "is": "page",
    "route": "/not-found",
    "layout": "home-layout"
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
      hash: 1835798689,
      creator: function (require, exports) {
        "use strict";

        var _routing = require("@beyond-js/kernel/routing");

        const data = new Map();

        _routing.routing.redirect = async function redirect(uri) {};

        _routing.routing.missing = async pathname => {
          return 'app-docs-missing';
        };

        _routing.routing.setup();
      }
    });
  });
  transversal.initialise(bundles);
});