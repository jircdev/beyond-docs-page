define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond/docs/components/html"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.QuickStart = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/starting/quick-start",
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
    hash: 3377061913,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QuickStart = QuickStart;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const build = tpl => ({
        language: 'shell',
        tpl
      });

      const tpls = {
        npx1: build(`npx @beyond-js/create-project --type web-backend --name @testing/login`),
        npx2: build(`npx @beyond-js/create-project --type node --name  @scope/name \n`),
        npm1: build(`beyond`),
        npm2: build(`npm i -g beyond`),
        beyond: build('beyond')
      };
      /*bundle*/

      function QuickStart() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          textId: "requires",
          moduleId: _beyond_context.module.resource,
          tpls: tpls
        }), React.createElement(_html.Document, {
          textId: "global",
          moduleId: _beyond_context.module.resource,
          tpls: tpls
        }), React.createElement(_html.Document, {
          textId: "create",
          moduleId: _beyond_context.module.resource,
          tpls: tpls,
          nextLinks: ["/docs/tutorial/start"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "QuickStart",
    "name": "QuickStart"
  }];
  let QuickStart; // Module exports

  _exports.QuickStart = QuickStart;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'QuickStart') && (_exports.QuickStart = QuickStart = require ? require('./control').QuickStart : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BR0EsTUFBTUEsS0FBSyxHQUFJQyxHQUFELEtBQVU7UUFBQ0MsUUFBUSxFQUFFLE9BQVg7UUFBb0JEO01BQXBCLENBQVYsQ0FBZDs7TUFDQSxNQUFNRSxJQUFJLEdBQUc7UUFDVEMsSUFBSSxFQUFFSixLQUFLLENBQUMsd0VBQUQsQ0FERjtRQUVUSyxJQUFJLEVBQUVMLEtBQUssQ0FBQyxrRUFBRCxDQUZGO1FBR1RNLElBQUksRUFBRU4sS0FBSyxDQUFDLFFBQUQsQ0FIRjtRQUlUTyxJQUFJLEVBQUVQLEtBQUssQ0FBQyxpQkFBRCxDQUpGO1FBS1RRLE1BQU0sRUFBRVIsS0FBSyxDQUFDLFFBQUQ7TUFMSixDQUFiO01BUU87O01BQVUsU0FBVVMsVUFBVixHQUFvQjtRQUNqQyxPQUNJQywwQ0FDSUEsb0JBQUNDLGNBQURELEVBQVM7VUFBQ0UsTUFBTSxFQUFDLFVBQVI7VUFBbUJDLFFBQVEsRUFBRUMsdUJBQU9DLFFBQXBDO1VBQThDWixJQUFJLEVBQUVBO1FBQXBELENBQVRPLENBREpBLEVBRUlBLG9CQUFDQyxjQUFERCxFQUFTO1VBQUNFLE1BQU0sRUFBQyxRQUFSO1VBQWlCQyxRQUFRLEVBQUVDLHVCQUFPQyxRQUFsQztVQUE0Q1osSUFBSSxFQUFFQTtRQUFsRCxDQUFUTyxDQUZKQSxFQUdJQSxvQkFBQ0MsY0FBREQsRUFBUztVQUNMRSxNQUFNLEVBQUMsUUFERjtVQUVMQyxRQUFRLEVBQUVDLHVCQUFPQyxRQUZaO1VBR0xaLElBQUksRUFBRUEsSUFIRDtVQUlMYSxTQUFTLEVBQUUsQ0FDUCxzQkFETztRQUpOLENBQVROLENBSEpBLENBREo7TUFjSCIsIm5hbWVzIjpbImJ1aWxkIiwidHBsIiwibGFuZ3VhZ2UiLCJ0cGxzIiwibnB4MSIsIm5weDIiLCJucG0xIiwibnBtMiIsImJleW9uZCIsIlF1aWNrU3RhcnQiLCJSZWFjdCIsIkRvY3VtZW50IiwidGV4dElkIiwibW9kdWxlSWQiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm5leHRMaW5rcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2RvY3Mvc3RhcnRpbmcvcXVpY2stc3RhcnQvY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==