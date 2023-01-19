System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/transversals", "@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Transversals) {
      dependency_1 = _beyondJsKernel017Transversals;
    }, function (_beyondJsWidgets012Render) {
      dependency_2 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Routing) {
      dependency_3 = _beyondJsKernel017Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "menu-layout",
        "attrs": ["opened", "home"],
        "vspecifier": "@beyond/docs@1/layout/menu.widget",
        "is": "layout"
      }, {
        "name": "contents-page",
        "vspecifier": "@beyond/docs@1/contents-page",
        "is": "page",
        "route": "/docs/${content}",
        "layout": "main-layout"
      }, {
        "name": "contents-subpage",
        "vspecifier": "@beyond/docs@1/contents-subpage",
        "is": "page",
        "route": "/docs/${content}/${sub}",
        "layout": "main-layout"
      }, {
        "name": "app-home-header",
        "vspecifier": "@beyond/docs@1/home-header"
      }, {
        "name": "home-page",
        "vspecifier": "@beyond/docs@1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "home-layout"
      }, {
        "name": "icons-view",
        "vspecifier": "@beyond/docs@1/icons/page",
        "is": "page",
        "route": "/icons"
      }, {
        "name": "beyond-docs-header",
        "vspecifier": "@beyond/docs@1/header"
      }, {
        "name": "main-layout",
        "vspecifier": "@beyond/docs@1/layout/main",
        "is": "layout"
      }, {
        "name": "docs-header-menu",
        "vspecifier": "@beyond/docs@1/header-menu.widget"
      }, {
        "name": "home-layout",
        "vspecifier": "@beyond/docs@1/layout/home",
        "is": "layout"
      }, {
        "name": "app-docs-missing",
        "vspecifier": "@beyond/docs@1/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "home-layout"
      }, {
        "name": "app-test",
        "vspecifier": "@beyond/docs@1/test",
        "is": "page",
        "route": "/test"
      }, {
        "name": "app-under-construction",
        "vspecifier": "@beyond/docs@1/under-construction.widget"
      }]);
      bundles = [];
      /***********************************
      MODULE: @beyond/docs/unnamed/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@beyond/docs@1/unnamed/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 507395067,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            _routing.routing.missing = async pathname => {
              return 'app-docs-missing';
            };
          }
        });
        return {
          dependencies: ['@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});