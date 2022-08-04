define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.StateManagement = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/state",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 2264533932,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StateManagement = StateManagement;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function StateManagement() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "handling",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "StateManagement",
    "name": "StateManagement"
  }];
  let StateManagement; // Module exports

  _exports.StateManagement = StateManagement;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'StateManagement') && (_exports.StateManagement = StateManagement = require ? require('./control').StateManagement : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7TUFHTzs7O01BQVUsU0FBVUEsZUFBVixHQUF5QjtRQUN0QyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFDTEUsUUFBUSxFQUFFQyx1QkFBT0MsUUFEWjtVQUNzQkMsTUFBTSxFQUFDLFVBRDdCO1VBRUxDLFNBQVMsRUFBRSxDQUFDLHNCQUFEO1FBRk4sQ0FBVE4sQ0FESkEsQ0FESjtNQVFIIiwibmFtZXMiOlsiU3RhdGVNYW5hZ2VtZW50IiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiLCJuZXh0TGlua3MiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3N0YXRlLW1hbmFnbWVudC9jb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19