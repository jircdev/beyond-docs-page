define(["exports", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;
  const amd_require = require;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/application/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./startup
  *************************/

  ims.set('./startup', {
    hash: 4085201139,
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
        const dependencies = ['@beyond-js/kernel/core/ts', '@beyond-js/kernel/routing/ts', '@beyond-js/widgets/routing/ts', '@beyond-js/widgets/layout/ts'];
        dependencies.push(`${application.package}/start`);
        amd_require(dependencies, createLayout);
      }

      (() => {
        if (!config.ssr || !application.routing?.ssr) {
          startup();
          return;
        }

        window.__ssr_fetch.then(ssr => {
          if (ssr.error) {
            console.error('Error getting ssr data:', ssr.error);
            startup();
            return;
          }

          const dependencies = ['@beyond-js/widgets/render/ts', '@beyond-js/widgets/layout/ts'];
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