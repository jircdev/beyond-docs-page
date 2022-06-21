define(["exports", "@beyond-js/kernel/styles/ts", "react", "@beyond/ui/link/code", "@beyond/docs/store/code", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.NextLinks = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/components/next-links/code").package();

  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link/code", "@beyond/docs/store/code"]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/components/next-links/code');

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 33843683,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NextLinks = NextLinks;

      var React = require("react");

      var _code = require("@beyond/ui/link/code");

      var _code2 = require("@beyond/docs/store/code");

      const Item = ({
        href,
        texts
      }) => {
        return React.createElement("li", null, React.createElement(_code.Link, {
          href: href
        }, texts[href]));
      };
      /*bundle*/


      function NextLinks({
        items
      }) {
        const [ready, texts] = (0, _code2.useTexts)('@beyond/docs/layout/menu');
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