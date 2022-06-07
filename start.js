define(["@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/transversals/ts", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/routing/ts"], function (dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  const {
    Transversal
  } = require('@beyond-js/kernel/transversals/ts');

  const transversal = new Transversal('start', '');
  /*************
  BUNDLE: WIDGET
  *************/

  const {
    widgets
  } = require('@beyond-js/widgets/render/ts');

  widgets.register([{
    "name": "contents-subpage-page",
    "id": "@beyond/docs/contents-subpage-page/widget",
    "is": "page",
    "route": "/docs/${content}",
    "layout": "main-layout"
  }, {
    "name": "contents-page",
    "id": "@beyond/docs/contents/widget",
    "is": "page",
    "route": "/docs/${content}/${sub}",
    "layout": "main-layout"
  }, {
    "name": "editor-page",
    "id": "@beyond/docs/editor/widget",
    "is": "page",
    "route": "/editor"
  }, {
    "name": "header-animation",
    "id": "@beyond/docs/header-animation/widget"
  }, {
    "name": "home-page",
    "id": "@beyond/docs/home/widget",
    "is": "page",
    "route": "/",
    "layout": "home-layout"
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
  }, {
    "name": "home-layout",
    "id": "@beyond/docs/layout/home/widget",
    "is": "layout"
  }]);
  const bundles = new Map();
  /**********************
  MODULE: unnamed/routing
  **********************/

  bundles.set('@beyond/docs/unnamed/routing/start', function (ims, exports) {
    /*************************
    INTERNAL MODULE: ./routing
    *************************/
    ims.set('./routing', {
      hash: 4122764329,
      creator: function (require, exports) {
        "use strict";

        var _ts = require("@beyond-js/kernel/routing/ts");

        const data = new Map();

        _ts.routing.redirect = async function redirect(uri) {};
      }
    });
  });
  transversal.initialise(bundles);
});