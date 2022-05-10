define(["exports", "react", "@beyond/ui/link/code", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.NextLinks = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('@beyond/ui/link/code', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/docs/components/next-links/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  modules.set('./control', {
    hash: 1044210324,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NextLinks = NextLinks;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      const Item = ({
        label,
        href
      }) => {
        return React.createElement("li", null, React.createElement(_code.Link, {
          href: href
        }, label));
      };
      /*bundle*/


      function NextLinks({
        items
      }) {
        const output = items.map(([label, href], i) => React.createElement(Item, {
          key: `${label}.${i}`,
          href: href,
          label: label
        })); // items

        return React.createElement("div", {
          className: "next__content link__content"
        }, React.createElement("ul", null, output));
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.NextLinks = require('./control').NextLinks;
  };

  let NextLinks; // Module exports

  _exports2.NextLinks = NextLinks;

  __pkg.exports.process = function (require) {
    _exports2.NextLinks = NextLinks = require('./control').NextLinks;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});