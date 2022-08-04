define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.HMRPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/foundations/hmr",
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
    hash: 4203880825,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HMRPage = HMRPage;

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      var React = require("react");
      /*bundle*/


      function HMRPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "hmr"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "events",
          nextLinks: ["/docs/foundations/bee"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "HMRPage",
    "name": "HMRPage"
  }];
  let HMRPage; // Module exports

  _exports.HMRPage = HMRPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'HMRPage') && (_exports.HMRPage = HMRPage = require ? require('./control').HMRPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7TUFHTzs7O01BQVUsU0FBVUEsT0FBVixHQUFpQjtRQUU5QixPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsUUFBUSxFQUFFQyx1QkFBT0MsUUFBbEI7VUFBNEJDLE1BQU0sRUFBQztRQUFuQyxDQUFUTCxDQURKQSxFQUVJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMRSxRQUFRLEVBQUVDLHVCQUFPQyxRQURaO1VBQ3NCQyxNQUFNLEVBQUMsUUFEN0I7VUFFTEMsU0FBUyxFQUFFLENBQUMsdUJBQUQ7UUFGTixDQUFUTixDQUZKQSxDQURKO01BU0giLCJuYW1lcyI6WyJITVJQYWdlIiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiLCJuZXh0TGlua3MiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2ZvdW5kYXRpb25zL2htci9jb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19