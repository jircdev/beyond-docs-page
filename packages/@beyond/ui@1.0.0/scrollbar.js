System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "react@18.2.0", "perfect-scrollbar@1.5.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondScrollContainer, __beyond_pkg, hmr;
  _export("BeyondScrollContainer", void 0);
  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_1 = _beyondJsKernel010Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_perfectScrollbar2) {
      dependency_3 = _perfectScrollbar2;
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
          "vspecifier": "@beyond/ui@1.0.0/scrollbar"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['perfect-scrollbar', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/scrollbar');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 565268422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondScrollContainer = BeyondScrollContainer;
          var React = require("react");
          var _perfectScrollbar = require("perfect-scrollbar");
          /*bundle*/ /**
                      * It's a React component that uses the PerfectScrollbar library to create a scrollbar that can be
                      * customized with CSS.
                      * @param {props} props - props
                      * @returns A function that returns a JSX.Element
                      */
          function BeyondScrollContainer(props) {
            const ref = (0, React.useRef)(null);
            (0, React.useEffect)(() => {
              const control = ref.current;
              const scrollbar = new _perfectScrollbar.default(control, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
              });
              const handleOnScrollY = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const handleOnScrollX = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const {
                onScrollY,
                onScrollX
              } = props;
              if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
              if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
              return () => {
                scrollbar.destroy();
                if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
                if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
              };
            }, []);
            let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
            return React.createElement("div", {
              ref: ref,
              className: cls
            }, props.children);
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "BeyondScrollContainer",
        "name": "BeyondScrollContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondScrollContainer') && _export("BeyondScrollContainer", BeyondScrollContainer = require ? require('./container').BeyondScrollContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFFQTtVQWVPLFdBTlA7Ozs7OztVQU1pQixTQUNOQSxxQkFBcUIsQ0FBQ0MsS0FBWTtZQUMzQyxNQUFNQyxHQUFHLEdBQXFDLGdCQUFNLEVBQUMsSUFBSSxDQUFDO1lBRTFELG1CQUFTLEVBQUMsTUFBbUI7Y0FDM0IsTUFBTUMsT0FBTyxHQUFtQkQsR0FBRyxDQUFDRSxPQUFPO2NBRTNDLE1BQU1DLFNBQVMsR0FBcUIsSUFBSUMseUJBQWdCLENBQUNILE9BQU8sRUFBRTtnQkFDaEVJLFVBQVUsRUFBRSxDQUFDO2dCQUNiQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsa0JBQWtCLEVBQUU7ZUFDckIsQ0FBQztjQUNGLE1BQU1DLGVBQWUsR0FBSUMsS0FBSyxJQUFVO2dCQUN0Q1YsS0FBSyxDQUFDVyxTQUFTLENBQUNELEtBQUssRUFBRVIsT0FBTyxFQUFFRSxTQUFTLENBQUM7Y0FDNUMsQ0FBQztjQUVELE1BQU1RLGVBQWUsR0FBSUYsS0FBSyxJQUFVO2dCQUN0Q1YsS0FBSyxDQUFDVyxTQUFTLENBQUNELEtBQUssRUFBRVIsT0FBTyxFQUFFRSxTQUFTLENBQUM7Y0FDNUMsQ0FBQztjQUNELE1BQU07Z0JBQUVPLFNBQVM7Z0JBQUVFO2NBQVMsQ0FBRSxHQUFHYixLQUFLO2NBQ3RDLElBQUlXLFNBQVMsRUFBRVQsT0FBTyxDQUFDWSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUVMLGVBQWUsQ0FBQztjQUN2RSxJQUFJSSxTQUFTLEVBQUVYLE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFRixlQUFlLENBQUM7Y0FDdkUsT0FBTyxNQUFLO2dCQUNWUixTQUFTLENBQUNXLE9BQU8sRUFBRTtnQkFFbkIsSUFBSUosU0FBUyxFQUFFVixHQUFHLENBQUNFLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsYUFBYSxFQUFFTCxTQUFTLENBQUM7Z0JBQ3hFLElBQUlFLFNBQVMsRUFDWFosR0FBRyxDQUFDRSxPQUFPLENBQUNhLG1CQUFtQixDQUFDLGFBQWEsRUFBRUosZUFBZSxDQUFDO2NBQ25FLENBQUM7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUssR0FBRyxHQUFXakIsS0FBSyxDQUFDa0IsU0FBUyxHQUM3Qiw0QkFBNEJsQixLQUFLLENBQUNrQixTQUFTLEVBQUUsR0FDN0MsMEJBQTBCO1lBQzlCLE9BQ0VDO2NBQUtsQixHQUFHLEVBQUVBLEdBQUc7Y0FBRWlCLFNBQVMsRUFBRUQ7WUFBRyxHQUMxQmpCLEtBQUssQ0FBQ29CLFFBQVEsQ0FDWDtVQUVWO1VBQUMiLCJuYW1lcyI6WyJCZXlvbmRTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsInJlZiIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwiaGFuZGxlT25TY3JvbGxZIiwiZXZlbnQiLCJvblNjcm9sbFkiLCJoYW5kbGVPblNjcm9sbFgiLCJvblNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiLXVpL21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY29kZS90cy9jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19