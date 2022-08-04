define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BackendPage = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/backend",
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
    hash: 1054173667,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BackendPage = BackendPage;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;
      const tpl2 = `
export /*actions*//*bundle*/
class Auth {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`;
      const tpl3 = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();`;
      const tpls = {
        tpl1: {
          title: "module.json",
          tpl
        },
        tpl2: {
          title: "bridge.ts",
          tpl: tpl2
        },
        tpl3: {
          title: "bridge.ts",
          tpl: tpl3
        }
      };
      /*bundle*/

      function BackendPage() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "code"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "server"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "comments",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "BackendPage",
    "name": "BackendPage"
  }];
  let BackendPage; // Module exports

  _exports.BackendPage = BackendPage;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BackendPage') && (_exports.BackendPage = BackendPage = require ? require('./control').BackendPage : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsR0FBRyxHQUFHOzs7Ozs7SUFBWjtNQU9BLE1BQU1DLElBQUksR0FBRzs7Ozs7Ozs7OztFQUFiO01BV0EsTUFBTUMsSUFBSSxHQUFHOzs7VUFBYjtNQUtBLE1BQU1DLElBQUksR0FBRztRQUNUQyxJQUFJLEVBQUU7VUFBQ0MsS0FBSyxFQUFFLGFBQVI7VUFBdUJMO1FBQXZCLENBREc7UUFFVEMsSUFBSSxFQUFFO1VBQUNJLEtBQUssRUFBRSxXQUFSO1VBQXFCTCxHQUFHLEVBQUVDO1FBQTFCLENBRkc7UUFHVEMsSUFBSSxFQUFFO1VBQUNHLEtBQUssRUFBRSxXQUFSO1VBQXFCTCxHQUFHLEVBQUVFO1FBQTFCO01BSEcsQ0FBYjtNQU1POztNQUFVLFNBQVVJLFdBQVYsR0FBcUI7UUFDbEMsT0FDSUMsMENBQ0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNKLElBQUksRUFBRUEsSUFBUDtVQUFhTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBREpBLEVBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNKLElBQUksRUFBRUEsSUFBUDtVQUFhTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUE5QjtVQUF3Q0MsTUFBTSxFQUFDO1FBQS9DLENBQVRMLENBRkpBLEVBR0lBLG9CQUFDQyxjQUFERCxFQUFTO1VBQ0xKLElBQUksRUFBRUEsSUFERDtVQUVMTSxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBRXNCQyxNQUFNLEVBQUMsVUFGN0I7VUFHTEMsU0FBUyxFQUFFLENBQUMsc0JBQUQ7UUFITixDQUFUTixDQUhKQSxDQURKO01BV0giLCJuYW1lcyI6WyJ0cGwiLCJ0cGwyIiwidHBsMyIsInRwbHMiLCJ0cGwxIiwidGl0bGUiLCJCYWNrZW5kUGFnZSIsIlJlYWN0IiwiRG9jdW1lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsInJlc291cmNlIiwidGV4dElkIiwibmV4dExpbmtzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvZG9jcy9iYXNpYy9iYWNrZW5kL2NvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=