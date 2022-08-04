define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react@17.0.2", "perfect-scrollbar@1.5.5"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondScrollContainer = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/scrollbar",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2], ["perfect-scrollbar", dependency_3]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui/scrollbar');
  const ims = new Map();
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
      /*bundle*/

      /**
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
  let BeyondScrollContainer; // Module exports

  _exports.BeyondScrollContainer = BeyondScrollContainer;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondScrollContainer') && (_exports.BeyondScrollContainer = BeyondScrollContainer = require ? require('./container').BeyondScrollContainer : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BRUE7TUFlTzs7TUFOUDs7Ozs7Ozs7TUFNaUIsU0FDTkEscUJBRE0sQ0FDZ0JDLEtBRGhCLEVBQzRCO1FBQzNDLE1BQU1DLEdBQUcsR0FBcUMsa0JBQU8sSUFBUCxDQUE5QztRQUVBLHFCQUFVLE1BQW1CO1VBQzNCLE1BQU1DLE9BQU8sR0FBbUJELEdBQUcsQ0FBQ0UsT0FBcEM7VUFFQSxNQUFNQyxTQUFTLEdBQXFCLElBQUlDLHlCQUFKLENBQXFCSCxPQUFyQixFQUE4QjtZQUNoRUksVUFBVSxFQUFFLENBRG9EO1lBRWhFQyxnQkFBZ0IsRUFBRSxJQUY4QztZQUdoRUMsa0JBQWtCLEVBQUU7VUFINEMsQ0FBOUIsQ0FBcEM7O1VBS0EsTUFBTUMsZUFBZSxHQUFJQyxLQUFELElBQWdCO1lBQ3RDVixLQUFLLENBQUNXLFNBQU5YLENBQWdCVSxLQUFoQlYsRUFBdUJFLE9BQXZCRixFQUFnQ0ksU0FBaENKO1VBREY7O1VBSUEsTUFBTVksZUFBZSxHQUFJRixLQUFELElBQWdCO1lBQ3RDVixLQUFLLENBQUNXLFNBQU5YLENBQWdCVSxLQUFoQlYsRUFBdUJFLE9BQXZCRixFQUFnQ0ksU0FBaENKO1VBREY7O1VBR0EsTUFBTTtZQUFFVyxTQUFGO1lBQWFFO1VBQWIsSUFBMkJiLEtBQWpDO1VBQ0EsSUFBSVcsU0FBSixFQUFlVCxPQUFPLENBQUNZLGdCQUFSWixDQUF5QixhQUF6QkEsRUFBd0NPLGVBQXhDUDtVQUNmLElBQUlXLFNBQUosRUFBZVgsT0FBTyxDQUFDWSxnQkFBUlosQ0FBeUIsYUFBekJBLEVBQXdDVSxlQUF4Q1Y7VUFDZixPQUFPLE1BQUs7WUFDVkUsU0FBUyxDQUFDVyxPQUFWWDtZQUVBLElBQUlPLFNBQUosRUFBZVYsR0FBRyxDQUFDRSxPQUFKRixDQUFZZSxtQkFBWmYsQ0FBZ0MsYUFBaENBLEVBQStDVSxTQUEvQ1Y7WUFDZixJQUFJWSxTQUFKLEVBQ0VaLEdBQUcsQ0FBQ0UsT0FBSkYsQ0FBWWUsbUJBQVpmLENBQWdDLGFBQWhDQSxFQUErQ1csZUFBL0NYO1VBTEo7UUFsQkYsR0F5QkcsRUF6Qkg7UUEyQkEsSUFBSWdCLEdBQUcsR0FBV2pCLEtBQUssQ0FBQ2tCLFNBQU5sQixHQUNkLDRCQUE0QkEsS0FBSyxDQUFDa0IsU0FBUyxFQUQ3QmxCLEdBRWQsMEJBRko7UUFHQSxPQUNFbUI7VUFBS2xCLEdBQUcsRUFBRUEsR0FBVmtCO1VBQWVELFNBQVMsRUFBRUQ7UUFBMUJFLEdBQ0duQixLQUFLLENBQUNvQixRQURURCxDQURGO01BS0Q7O01BQUEiLCJuYW1lcyI6WyJCZXlvbmRTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsInJlZiIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwiaGFuZGxlT25TY3JvbGxZIiwiZXZlbnQiLCJvblNjcm9sbFkiLCJoYW5kbGVPblNjcm9sbFgiLCJvblNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiLXVpL21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY29kZS90cy9jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19