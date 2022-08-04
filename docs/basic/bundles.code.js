define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Bundles = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/bundles",
    "multibundle": true,
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./bundles
  *************************/

  ims.set('./bundles', {
    hash: 2558675145,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundles = Bundles;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}`;
      const tpls = {
        modulejson: {
          title: "module.json",
          language: "json",
          tpl
        }
      };
      /*bundle*/

      function Bundles() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "bundles"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "transversal"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "types",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./bundles",
    "from": "Bundles",
    "name": "Bundles"
  }];
  let Bundles; // Module exports

  _exports.Bundles = Bundles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Bundles') && (_exports.Bundles = Bundles = require ? require('./bundles').Bundles : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFaO01BcUJBLE1BQU1DLElBQUksR0FBRztRQUFDQyxVQUFVLEVBQUU7VUFBQ0MsS0FBSyxFQUFFLGFBQVI7VUFBdUJDLFFBQVEsRUFBRSxNQUFqQztVQUF5Q0o7UUFBekM7TUFBYixDQUFiO01BRU87O01BQVUsU0FBVUssT0FBVixHQUFpQjtRQUM5QixPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0wsSUFBSSxFQUFFQSxJQUFQO1VBQWFPLFFBQVEsRUFBRUMsdUJBQU9DLFFBQTlCO1VBQXdDQyxNQUFNLEVBQUM7UUFBL0MsQ0FBVEwsQ0FESkEsRUFFSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0wsSUFBSSxFQUFFQSxJQUFQO1VBQWFPLFFBQVEsRUFBRUMsdUJBQU9DLFFBQTlCO1VBQXdDQyxNQUFNLEVBQUM7UUFBL0MsQ0FBVEwsQ0FGSkEsRUFHSUEsb0JBQUNDLGNBQURELEVBQVM7VUFDTEwsSUFBSSxFQUFFQSxJQUREO1VBRUxPLFFBQVEsRUFBRUMsdUJBQU9DLFFBRlo7VUFFc0JDLE1BQU0sRUFBQyxPQUY3QjtVQUdMQyxTQUFTLEVBQUUsQ0FBQyxzQkFBRDtRQUhOLENBQVROLENBSEpBLENBREo7TUFXSCIsIm5hbWVzIjpbInRwbCIsInRwbHMiLCJtb2R1bGVqc29uIiwidGl0bGUiLCJsYW5ndWFnZSIsIkJ1bmRsZXMiLCJSZWFjdCIsIkRvY3VtZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsInRleHRJZCIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3MvYmFzaWMvYnVuZGxlcy9jb2RlL3RzL2J1bmRsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19