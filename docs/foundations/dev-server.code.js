define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond/docs/components/html", "react@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.DevServer = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/foundations/dev-server",
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
    hash: 1413224782,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DevServer = DevServer;

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

      function DevServer() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          nextLinks: ["/docs/foundations/distributions"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "DevServer",
    "name": "DevServer"
  }];
  let DevServer; // Module exports

  _exports.DevServer = DevServer;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DevServer') && (_exports.DevServer = DevServer = require ? require('./index').DevServer : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUFHOzs7OztFQUFaO01BTUEsTUFBTUMsSUFBSSxHQUFHO1FBQ1RELEdBQUcsRUFBRTtVQUFDQSxHQUFEO1VBQU1FLEtBQUssRUFBRTtRQUFiO01BREksQ0FBYjtNQUlPOztNQUFVLFNBQVVDLFNBQVYsR0FBbUI7UUFFaEMsT0FDSUMsMENBQ0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xILElBQUksRUFBRUEsSUFERDtVQUVMSyxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBR0xDLFNBQVMsRUFBRSxDQUFDLGlDQUFEO1FBSE4sQ0FBVEwsQ0FESkEsQ0FESjtNQVNIIiwibmFtZXMiOlsidHBsIiwidHBscyIsInRpdGxlIiwiRGV2U2VydmVyIiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJuZXh0TGlua3MiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2ZvdW5kYXRpb25zL2Rldi1zZXJ2ZXIvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=