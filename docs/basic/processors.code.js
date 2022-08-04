define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Processors = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/processors",
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
    hash: 115906820,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Processors = Processors;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}`;
      const tpls = {
        modulejson: {
          language: "json",
          tpl
        }
      };
      /*bundle*/

      function Processors() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "processors"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "types"
        }), React.createElement(_html.Document, {
          moduleId: _beyond_context.module.resource,
          textId: "properties"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "examples",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "Processors",
    "name": "Processors"
  }];
  let Processors; // Module exports

  _exports.Processors = Processors;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Processors') && (_exports.Processors = Processors = require ? require('./control').Processors : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztFQUFaO01Ba0JBLE1BQU1DLElBQUksR0FBRztRQUFDQyxVQUFVLEVBQUU7VUFBQ0MsUUFBUSxFQUFFLE1BQVg7VUFBbUJIO1FBQW5CO01BQWIsQ0FBYjtNQUVPOztNQUFVLFNBQVVJLFVBQVYsR0FBb0I7UUFDakMsT0FDSUMsMENBQ0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNFLFFBQVEsRUFBRUMsdUJBQU9DLFFBQWxCO1VBQTRCQyxNQUFNLEVBQUM7UUFBbkMsQ0FBVEwsQ0FESkEsRUFFSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsUUFBUSxFQUFFQyx1QkFBT0MsUUFBbEI7VUFBNEJDLE1BQU0sRUFBQztRQUFuQyxDQUFUTCxDQUZKQSxFQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUFFRSxRQUFRLEVBQUVDLHVCQUFPQyxRQUFuQjtVQUE2QkMsTUFBTSxFQUFDO1FBQXBDLENBQVRMLENBSEpBLEVBSUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xKLElBQUksRUFBRUEsSUFERDtVQUVMTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBRXNCQyxNQUFNLEVBQUMsVUFGN0I7VUFHTEMsU0FBUyxFQUFFLENBQUMsc0JBQUQ7UUFITixDQUFUTixDQUpKQSxDQURKO01BWUgiLCJuYW1lcyI6WyJ0cGwiLCJ0cGxzIiwibW9kdWxlanNvbiIsImxhbmd1YWdlIiwiUHJvY2Vzc29ycyIsIlJlYWN0IiwiRG9jdW1lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsInJlc291cmNlIiwidGV4dElkIiwibmV4dExpbmtzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9wcm9jZXNzb3JzL2NvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=