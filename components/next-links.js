define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react@17.0.2", "@beyond/ui/link", "@beyond/docs/store"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.NextLinks = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/components/next-links",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link", "@beyond/docs/store"]));

  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/components/next-links');
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 2580066343,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NextLinks = NextLinks;

      var React = require("react");

      var _link = require("@beyond/ui/link");

      var _store = require("@beyond/docs/store");

      const Item = ({
        href,
        texts
      }) => {
        return React.createElement("li", null, React.createElement(_link.Link, {
          href: href
        }, texts[href]));
      };
      /*bundle*/


      function NextLinks({
        items
      }) {
        const [ready, texts] = (0, _store.useTexts)('@beyond/docs/layout/menu');
        if (!ready) return null;
        const output = items.map((href, i) => React.createElement(Item, {
          texts: texts,
          key: `${href}.${i}`,
          href: href
        })); // items

        return React.createElement("div", {
          className: "next__content link__content"
        }, React.createElement("ul", null, output));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "NextLinks",
    "name": "NextLinks"
  }];
  let NextLinks; // Module exports

  _exports.NextLinks = NextLinks;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'NextLinks') && (_exports.NextLinks = NextLinks = require ? require('./control').NextLinks : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7O01BQ0E7O01BRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7UUFBQ0MsSUFBRDtRQUFPQztNQUFQLENBQUQsS0FBa0I7UUFDM0IsT0FBT0MsZ0NBQUlBLG9CQUFDQyxVQUFERCxFQUFLO1VBQUNGLElBQUksRUFBRUE7UUFBUCxDQUFMRSxFQUFtQkQsS0FBSyxDQUFDRCxJQUFELENBQXhCRSxDQUFKQSxDQUFQO01BREo7TUFJTzs7O01BQVUsU0FBVUUsU0FBVixDQUFvQjtRQUFDQztNQUFELENBQXBCLEVBQTJCO1FBRXhDLE1BQU0sQ0FBQ0MsS0FBRCxFQUFRTCxLQUFSLElBQWlCLHFCQUFTLDBCQUFULENBQXZCO1FBQ0EsSUFBSSxDQUFDSyxLQUFMLEVBQVksT0FBTyxJQUFQO1FBQ1osTUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNHLEdBQU5ILENBQVUsQ0FBQ0wsSUFBRCxFQUFPUyxDQUFQLEtBQWFQLG9CQUFDSCxJQUFERyxFQUFLO1VBQUNELEtBQUssRUFBRUEsS0FBUjtVQUFlUyxHQUFHLEVBQUUsR0FBR1YsSUFBSSxJQUFJUyxDQUFDLEVBQWhDO1VBQW9DVCxJQUFJLEVBQUVBO1FBQTFDLENBQUxFLENBQXZCRyxDQUFmLENBSndDLENBS3hDOztRQUNBLE9BQ0lIO1VBQUtTLFNBQVMsRUFBQztRQUFmVCxHQUNJQSxnQ0FDS0ssTUFETEwsQ0FESkEsQ0FESjtNQU9IIiwibmFtZXMiOlsiSXRlbSIsImhyZWYiLCJ0ZXh0cyIsIlJlYWN0IiwiTGluayIsIk5leHRMaW5rcyIsIml0ZW1zIiwicmVhZHkiLCJvdXRwdXQiLCJtYXAiLCJpIiwia2V5IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkb2N1bWVudGF0aW9uL21vZHVsZXMvY29tcG9uZW50cy9uZXh0LWxpbmtzL2NvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=