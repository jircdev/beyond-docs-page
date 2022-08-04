define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/application",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./startup
  *************************/

  ims.set('./startup', {
    hash: 2705813006,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      const pkg = globalThis.__app_package;

      function createLayout(config) {
        const {
          layout
        } = config;
        const element = document.createElement(layout ? layout : 'beyond-layout-children');
        document.body.append(element);
      }

      function startup() {
        const promises = [];
        promises.push(bimport(`${pkg}/config`));
        promises.push(bimport(`${pkg}/start`));
        promises.push(bimport('@beyond-js/kernel/core'));
        promises.push(bimport('@beyond-js/kernel/routing'));
        promises.push(bimport('@beyond-js/widgets/routing'));
        promises.push(bimport('@beyond-js/widgets/layout'));
        Promise.all(promises).then(([{
          default: config
        }]) => createLayout(config)).catch(exc => console.log(exc.stack));
      }

      (() => {
        if (!globalThis.__ssr_fetch) {
          startup();
          return;
        }
        /**
         * window.__ssr_fetch is injected in the index.html when routing.ssr is on
         */


        window.__ssr_fetch.then(ssr => {
          if (!ssr.json || ssr.json.errors?.length) {
            console.error('Error getting ssr data:', ssr.json.errors);
            startup();
            return;
          }

          const promises = [];
          promises.push(bimport(`${pkg}/config`));
          promises.push(bimport(`${pkg}/start`));
          promises.push(bimport('@beyond-js/widgets/render'));
          promises.push(bimport('@beyond-js/widgets/layout'));
          Promise.all(promises).then(([{
            default: config
          }]) => {
            const render = require('@beyond-js/widgets/render');

            const layout = require('@beyond-js/widgets/layout'); // Register the widgets


            const specs = new Map(ssr.json.widgets.specs);
            render.widgets.register([...specs.values()]); // Register the ssr widgets

            const instances = ssr.json.widgets.instances;
            const prerender = render.prerender;
            instances.forEach(instance => prerender.ssr.push(instance)); // Register the ssr page and layout structure

            const lssr = layout.ssr;
            lssr.data(ssr.json.main, ssr.json.page);
            createLayout(config);
          }).catch(exc => console.log(exc.stack));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0IsQ0FBQyxHQUFHRSxLQUFLLENBQUNJLE1BQU5KLEVBQUosQ0FBeEJGLEVBTitDLENBUS9DOztZQUNBLE1BQU1PLFNBQVMsR0FBR1osR0FBRyxDQUFDQyxJQUFKRCxDQUFTUyxPQUFUVCxDQUFpQlksU0FBbkM7WUFDQSxNQUFNQyxTQUFTLEdBQWFSLE1BQU0sQ0FBQ1EsU0FBbkM7WUFDQUQsU0FBUyxDQUFDRSxPQUFWRixDQUFtQkcsUUFBRCxJQUFtQkYsU0FBUyxDQUFDYixHQUFWYSxDQUFjMUIsSUFBZDBCLENBQW1CRSxRQUFuQkYsQ0FBckNELEVBWCtDLENBYS9DOztZQUNBLE1BQU1JLElBQUksR0FBYXJDLE1BQU0sQ0FBQ3FCLEdBQTlCO1lBQ0FnQixJQUFJLENBQUNDLElBQUxELENBQVVoQixHQUFHLENBQUNDLElBQUpELENBQVNrQixJQUFuQkYsRUFBeUJoQixHQUFHLENBQUNDLElBQUpELENBQVNtQixJQUFsQ0g7WUFDQXZDLFlBQVksQ0FBQ0MsTUFBRCxDQUFaRDtVQWhCSixHQWlCR2dCLEtBakJISixDQWlCU0ssR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVJELENBQVlELEdBQUcsQ0FBQ0csS0FBaEJGLENBakJoQk47UUFiRTtNQVRWIiwibmFtZXMiOlsicGtnIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJkZWZhdWx0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJfX3Nzcl9mZXRjaCIsIndpbmRvdyIsInNzciIsImpzb24iLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsInJlbmRlciIsInJlcXVpcmUiLCJzcGVjcyIsIk1hcCIsIndpZGdldHMiLCJyZWdpc3RlciIsInZhbHVlcyIsImluc3RhbmNlcyIsInByZXJlbmRlciIsImZvckVhY2giLCJpbnN0YW5jZSIsImxzc3IiLCJkYXRhIiwibWFpbiIsInBhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInN0YXJ0dXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=