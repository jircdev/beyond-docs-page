define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond-js/kernel/routing"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Link = _exports.Elink = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/link",
    "bundle": "link"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2]]));
  const ims = new Map();
  /**********************
  INTERNAL MODULE: ./link
  **********************/

  ims.set('./link', {
    hash: 390584972,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Elink = Elink;
      exports.Link = Link;

      var React = require("react");

      var _routing = require("@beyond-js/kernel/routing");
      /*bundle*/


      function Link(props) {
        const onClick = event => {
          event.preventDefault();

          _routing.routing.pushState(props.href);
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
  });
  __pkg.exports.descriptor = [{
    "im": "./link",
    "from": "Link",
    "name": "Link"
  }, {
    "im": "./link",
    "from": "Elink",
    "name": "Elink"
  }];
  let Link, Elink; // Module exports

  _exports.Elink = Elink;
  _exports.Link = Link;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Link') && (_exports.Link = Link = require ? require('./link').Link : value);
    (require || prop === 'Elink') && (_exports.Elink = Elink = require ? require('./link').Elink : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});