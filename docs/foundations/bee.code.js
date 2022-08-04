define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BEEPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/foundations/bee",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1104680484,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BEEPage = BEEPage;

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      var React = require("react");
      /*bundle*/


      function BEEPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "bee"
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "BEEPage",
    "name": "BEEPage"
  }];
  let BEEPage; // Module exports

  _exports.BEEPage = BEEPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BEEPage') && (_exports.BEEPage = BEEPage = require ? require('./control').BEEPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7TUFFTzs7O01BQVUsU0FBVUEsT0FBVixHQUFpQjtRQUU5QixPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsUUFBUSxFQUFFQyx1QkFBT0MsUUFBbEI7VUFBNEJDLE1BQU0sRUFBQztRQUFuQyxDQUFUTCxDQURKQSxDQURKO01BS0giLCJuYW1lcyI6WyJCRUVQYWdlIiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2ZvdW5kYXRpb25zL2JlZXMvY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==