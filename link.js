define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "@beyond-js/kernel/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Link = _exports.Elink = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/link",
    "bundle": "link"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1]]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7TUFZTzs7O01BQVUsU0FDUkEsSUFEUSxDQUNIQyxLQURHLEVBQ0U7UUFDZixNQUFNQyxPQUFPLEdBQUdDLEtBQUssSUFBRztVQUNwQkEsS0FBSyxDQUFDQyxjQUFORDs7VUFDQUUsaUJBQVFDLFNBQVJELENBQWtCSixLQUFLLENBQUNNLElBQXhCRjtRQUZKOztRQUlBLE9BQ0lHO1VBQUdOLE9BQU8sRUFBRUEsT0FBWk07VUFBbUIsR0FBTVA7UUFBekJPLEdBQ0tQLEtBQUssQ0FBQ1EsUUFEWEQsQ0FESjtNQUtIO01BRU07OztNQUFVLFNBQ1JFLEtBRFEsQ0FDRlQsS0FERSxFQUNHO1FBQ2hCLE1BQU07VUFBQ007UUFBRCxJQUFTTixLQUFmO1FBQ0EsT0FDSU87VUFBR0QsSUFBSSxFQUFFQSxJQUFUQztVQUFlRyxNQUFNLEVBQUMsUUFBdEJIO1VBQThCLEdBQUtQLEtBQW5DTztVQUF3QyxhQUFZO1FBQXBEQSxHQUNLUCxLQUFLLENBQUNRLFFBRFhELENBREo7TUFLSCIsIm5hbWVzIjpbIkxpbmsiLCJwcm9wcyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImhyZWYiLCJSZWFjdCIsImNoaWxkcmVuIiwiRWxpbmsiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImItdWkvbW9kdWxlcy9saW5rL2NvZGUvdHMvbGluay50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=