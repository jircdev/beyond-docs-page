define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DistributionsPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/foundations/distributions",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 141804105,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DistributionsPage = DistributionsPage;

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      var React = require("react");

      const tpl = `
{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;
      const tpls = {
        tpl: {
          tpl,
          title: "beyond.json"
        }
      };
      /*bundle*/

      function DistributionsPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "distributions"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "node"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "distribution",
          nextLinks: ["/docs/distributions"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "DistributionsPage",
    "name": "DistributionsPage"
  }];
  let DistributionsPage; // Module exports

  _exports.DistributionsPage = DistributionsPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DistributionsPage') && (_exports.DistributionsPage = DistributionsPage = require ? require('./index').DistributionsPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUFHOzs7OztFQUFaO01BTUEsTUFBTUMsSUFBSSxHQUFHO1FBQ1RELEdBQUcsRUFBRTtVQUFDQSxHQUFEO1VBQU1FLEtBQUssRUFBRTtRQUFiO01BREksQ0FBYjtNQUlPOztNQUFVLFNBQVVDLGlCQUFWLEdBQTJCO1FBQ3hDLE9BQ0lDLDBDQUVJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDSCxJQUFJLEVBQUVBLElBQVA7VUFBYUssUUFBUSxFQUFFQyx1QkFBT0MsUUFBOUI7VUFBd0NDLE1BQU0sRUFBQztRQUEvQyxDQUFUTCxDQUZKQSxFQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDSCxJQUFJLEVBQUVBLElBQVA7VUFBYUssUUFBUSxFQUFFQyx1QkFBT0MsUUFBOUI7VUFBd0NDLE1BQU0sRUFBQztRQUEvQyxDQUFUTCxDQUhKQSxFQUlJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMSCxJQUFJLEVBQUVBLElBREQ7VUFFTEssUUFBUSxFQUFFQyx1QkFBT0MsUUFGWjtVQUVzQkMsTUFBTSxFQUFDLGNBRjdCO1VBR0xDLFNBQVMsRUFBRSxDQUFDLHFCQUFEO1FBSE4sQ0FBVE4sQ0FKSkEsQ0FESjtNQVlIIiwibmFtZXMiOlsidHBsIiwidHBscyIsInRpdGxlIiwiRGlzdHJpYnV0aW9uc1BhZ2UiLCJSZWFjdCIsIkRvY3VtZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInRleHRJZCIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvZm91bmRhdGlvbnMvZGlzdHJpYnV0aW9ucy9jb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==