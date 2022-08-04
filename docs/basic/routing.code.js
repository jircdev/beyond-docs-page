define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.RoutingPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/routing",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 67938829,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RoutingPage = RoutingPage;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
}`;
      const tpls = {
        tpl1: {
          tpl: `import {routing} from "@beyond-js/kernel/routing";`,
          language: "ts"
        },
        tpl2: {
          tpl: `routing.pushState('/home', [{state}]);`,
          language: "ts"
        },
        tpl3: {
          tpl: `routing.replaceState('/home', [{state}]);`,
          language: "ts"
        },
        tpl4: {
          tpl: tpl
        }
      };
      /*bundle*/

      function RoutingPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "routing"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "object"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "navigation"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "overwrite",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "RoutingPage",
    "name": "RoutingPage"
  }];
  let RoutingPage; // Module exports

  _exports.RoutingPage = RoutingPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'RoutingPage') && (_exports.RoutingPage = RoutingPage = require ? require('./index').RoutingPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BR0EsTUFBTUEsR0FBRyxHQUFHOzs7RUFBWjtNQUlBLE1BQU1DLElBQUksR0FBRztRQUNUQyxJQUFJLEVBQUU7VUFBQ0YsR0FBRyxFQUFFLG9EQUFOO1VBQTRERyxRQUFRLEVBQUU7UUFBdEUsQ0FERztRQUVUQyxJQUFJLEVBQUU7VUFBQ0osR0FBRyxFQUFFLHdDQUFOO1VBQWdERyxRQUFRLEVBQUU7UUFBMUQsQ0FGRztRQUdURSxJQUFJLEVBQUU7VUFBQ0wsR0FBRyxFQUFFLDJDQUFOO1VBQW1ERyxRQUFRLEVBQUU7UUFBN0QsQ0FIRztRQUlURyxJQUFJLEVBQUU7VUFBQ04sR0FBRyxFQUFFQTtRQUFOO01BSkcsQ0FBYjtNQU9POztNQUFVLFNBQVVPLFdBQVYsR0FBcUI7UUFFbEMsT0FDSUMsMENBQ0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNQLElBQUksRUFBRUEsSUFBUDtVQUFhUyxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBREpBLEVBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNQLElBQUksRUFBRUEsSUFBUDtVQUFhUyxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBRkpBLEVBR0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNQLElBQUksRUFBRUEsSUFBUDtVQUFhUyxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBSEpBLEVBSUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNQLElBQUksRUFBRUEsSUFBUDtVQUFhUyxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDLFdBQS9DO1VBQ0NDLFNBQVMsRUFBRSxDQUFDLHNCQUFEO1FBRFosQ0FBVE4sQ0FKSkEsQ0FESjtNQVVIIiwibmFtZXMiOlsidHBsIiwidHBscyIsInRwbDEiLCJsYW5ndWFnZSIsInRwbDIiLCJ0cGwzIiwidHBsNCIsIlJvdXRpbmdQYWdlIiwiUmVhY3QiLCJEb2N1bWVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwicmVzb3VyY2UiLCJ0ZXh0SWQiLCJuZXh0TGlua3MiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24vbW9kdWxlcy9kb2NzL2Jhc2ljL3JvdXRpbmcvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=