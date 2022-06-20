define(["exports", "@beyond-js/kernel/styles/ts", "react", "perfect-scrollbar", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondScrollContainer = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/ui/scrollbar/code").package();

  externals.register(new Map([["react", dependency_1], ["perfect-scrollbar", dependency_2]]));

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/ui/scrollbar/code');

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