System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/transversals", "@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Transversals) {
      dependency_1 = _beyondJsKernel010Transversals;
    }, function (_beyondJsWidgets010Render) {
      dependency_2 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Routing) {
      dependency_3 = _beyondJsKernel010Routing;
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
        "name": "counter-react",
        "vspecifier": "@beyond/docs@1/examples/sm/counter-react"
      }, {
        "name": "counter-svelte",
        "vspecifier": "@beyond/docs@1/examples/sm/counter-svelte"
      }, {
        "name": "counter-vue",
        "vspecifier": "@beyond/docs@1/examples/sm/counter-vue"
      }, {
        "name": "examples-counter-page",
        "vspecifier": "@beyond/docs@1/examples/sm/counter",
        "is": "page",
        "route": "/examples/sm/counter",
        "layout": "main-layout"
      }, {
        "name": "examples-list-page",
        "vspecifier": "@beyond/docs@1/examples/list",
        "is": "page",
        "route": "/examples",
        "layout": "main-layout"
      }, {
        "name": "docs-header-menu",
        "vspecifier": "@beyond/docs@1/header-menu.widget"
      }, {
        "name": "home-page",
        "vspecifier": "@beyond/docs@1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "home-layout"
      }, {
        "name": "beyond-docs-header",
        "vspecifier": "@beyond/docs@1/header"
      }, {
        "name": "main-layout",
        "vspecifier": "@beyond/docs@1/layout/main",
        "is": "layout"
      }, {
        "name": "home-layout",
        "vspecifier": "@beyond/docs@1/layout/home",
        "is": "layout"
      }, {
        "name": "menu-layout",
        "attrs": ["opened", "home"],
        "vspecifier": "@beyond/docs@1/layout/menu.widget",
        "is": "layout"
      }, {
        "name": "app-docs-missing",
        "vspecifier": "@beyond/docs@1/missing.widget",
        "is": "page",
        "route": "/not-found",
        "layout": "home-layout"
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
          const dependencies = new Map([["@beyond/ui", "1.0.0"], ["animatewithsass", "3.2.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@cloudinary/url-gen", "1.8.6"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["dayjs", "1.11.6"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["sequelize", "6.25.5"], ["slate-react", "0.72.9"], ["svelte", "3.52.0"], ["swiper", "8.4.4"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.43"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 4059257992,
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