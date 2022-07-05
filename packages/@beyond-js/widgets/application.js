define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;
  const amd_require = require;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/application",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./startup
  *************************/

  ims.set('./startup', {
    hash: 3891866801,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      const config = globalThis.__beyond_config;
      const {
        application
      } = config;

      function createLayout() {
        const {
          layout
        } = application;
        const element = document.createElement(layout ? layout : 'beyond-layout-children');
        document.body.append(element);
      }

      function startup() {
        const dependencies = ['@beyond-js/kernel/core', '@beyond-js/kernel/routing', '@beyond-js/widgets/routing', '@beyond-js/widgets/layout'];
        dependencies.push(`${application.package}/start`);
        amd_require(dependencies, createLayout);
      }

      (() => {
        if (!config.ssr || !application.routing?.ssr) {
          startup();
          return;
        }

        window.__ssr_fetch.then(ssr => {
          if (!ssr.json || ssr.json.errors?.length) {
            console.error('Error getting ssr data:', ssr.json.errors);
            startup();
            return;
          }

          const dependencies = ['@beyond-js/widgets/render', '@beyond-js/widgets/layout'];
          dependencies.push(`${application.package}/start`);
          amd_require(dependencies, (render, layout) => {
            // Register the widgets
            const specs = new Map(ssr.json.widgets.specs);
            render.widgets.register([...specs.values()]); // Register the ssr widgets

            const instances = ssr.json.widgets.instances;
            const prerender = render.prerender;
            instances.forEach(instance => prerender.ssr.push(instance)); // Register the ssr page and layout structure

            const lssr = layout.ssr;
            lssr.data(ssr.json.main, ssr.json.page);
            createLayout();
          });
        });
      })();
    }
  }); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});