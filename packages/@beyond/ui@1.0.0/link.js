System.register(["@beyond-js/kernel@0.1.0/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.0/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Link, Elink, __beyond_pkg, hmr;
  _export({
    Link: void 0,
    Elink: void 0
  });
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel010Routing) {
      dependency_2 = _beyondJsKernel010Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/link"
        },
        "type": "code",
        "name": "link"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2]]);
      ims = new Map();
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'Elink') && _export("Elink", Elink = require ? require('./link').Elink : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBWU87VUFBVSxTQUNSQSxJQUFJLENBQUNDLEtBQUs7WUFDZixNQUFNQyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUNwQkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUM7WUFDakMsQ0FBQztZQUNELE9BQ0lDO2NBQUdOLE9BQU8sRUFBRUEsT0FBTztjQUFBLEdBQU1EO1lBQUssR0FDekJBLEtBQUssQ0FBQ1EsUUFBUSxDQUNmO1VBRVo7VUFFTztVQUFVLFNBQ1JDLEtBQUssQ0FBQ1QsS0FBSztZQUNoQixNQUFNO2NBQUNNO1lBQUksQ0FBQyxHQUFHTixLQUFLO1lBQ3BCLE9BQ0lPO2NBQUdELElBQUksRUFBRUEsSUFBSTtjQUFFSSxNQUFNLEVBQUMsUUFBUTtjQUFBLEdBQUtWLEtBQUs7Y0FBQSxhQUFZO1lBQU0sR0FDckRBLEtBQUssQ0FBQ1EsUUFBUSxDQUNmO1VBRVoiLCJuYW1lcyI6WyJMaW5rIiwicHJvcHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJocmVmIiwiUmVhY3QiLCJjaGlsZHJlbiIsIkVsaW5rIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiLXVpL21vZHVsZXMvbGluay9jb2RlL3RzL2xpbmsudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19