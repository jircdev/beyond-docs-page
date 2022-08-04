define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DashboardPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/dashboard",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./intro
  ***********************/

  ims.set('./intro', {
    hash: 3654838705,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DashboardPage = DashboardPage;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      function DashboardPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          textId: "dashboard",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "features",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "structure",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "ts",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          textId: "editor",
          moduleId: _beyond_context.module.resource
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "deploy",
          nextLinks: [["Tutorial", "/docs/tutorial/bridge"]]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./intro",
    "from": "DashboardPage",
    "name": "DashboardPage"
  }];
  let DashboardPage; // Module exports

  _exports.DashboardPage = DashboardPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DashboardPage') && (_exports.DashboardPage = DashboardPage = require ? require('./intro').DashboardPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7TUFHTzs7O01BQVUsU0FBVUEsYUFBVixHQUF1QjtRQUNwQyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsTUFBTSxFQUFDLFdBQVI7VUFBb0JDLFFBQVEsRUFBRUMsdUJBQU9DO1FBQXJDLENBQVRMLENBREpBLEVBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNFLE1BQU0sRUFBQyxVQUFSO1VBQW1CQyxRQUFRLEVBQUVDLHVCQUFPQztRQUFwQyxDQUFUTCxDQUZKQSxFQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFDRSxNQUFNLEVBQUMsV0FBUjtVQUFvQkMsUUFBUSxFQUFFQyx1QkFBT0M7UUFBckMsQ0FBVEwsQ0FISkEsRUFJSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsTUFBTSxFQUFDLElBQVI7VUFBYUMsUUFBUSxFQUFFQyx1QkFBT0M7UUFBOUIsQ0FBVEwsQ0FKSkEsRUFLSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsTUFBTSxFQUFDLFFBQVI7VUFBaUJDLFFBQVEsRUFBRUMsdUJBQU9DO1FBQWxDLENBQVRMLENBTEpBLEVBTUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xHLFFBQVEsRUFBRUMsdUJBQU9DLFFBRFo7VUFDc0JILE1BQU0sRUFBQyxRQUQ3QjtVQUVMSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQUQsRUFBYSx1QkFBYixDQUFEO1FBRk4sQ0FBVE4sQ0FOSkEsQ0FESjtNQWFIIiwibmFtZXMiOlsiRGFzaGJvYXJkUGFnZSIsIlJlYWN0IiwiRG9jdW1lbnQiLCJ0ZXh0SWQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsInJlc291cmNlIiwibmV4dExpbmtzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9zdGFydGluZy9kYXNoYm9hcmQvY29kZS90cy9pbnRyby50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=