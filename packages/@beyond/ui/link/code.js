define(["exports", "react", "@beyond-js/kernel/routing/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Link = _exports2.Elink = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/ui/link/code").package();

  externals.register(new Map([["react", dependency_0]]));
  const ims = new Map();
  /**********************
  INTERNAL MODULE: ./link
  **********************/

  ims.set('./link', {
    hash: 994480835,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Elink = Elink;
      exports.Link = Link;

      var React = require("react");

      var _ts = require("@beyond-js/kernel/routing/ts");
      /*bundle*/


      function Link(props) {
        const onClick = event => {
          event.preventDefault();

          _ts.routing.pushState(props.href);
        };

        return React.createElement("a", {
          onClick: onClick,
          ...props
        }, props.children);
      }
      /*bundle*/


      function Elink(props) {
        const {
          href
        } = props;
        return React.createElement("a", {
          href: href,
          target: "_blank",
          ...props,
          "data-algo": "algo"
        }, props.children);
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Link = require('./link').Link;
    _exports.Elink = require('./link').Elink;
  };

  let Link, Elink; // Module exports

  _exports2.Elink = Elink;
  _exports2.Link = Link;

  __pkg.exports.process = function (require) {
    _exports2.Link = Link = require('./link').Link;
    _exports2.Elink = Elink = require('./link').Elink;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});