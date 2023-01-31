System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, BeyondSpinner, __beyond_pkg, hmr;
  _export("BeyondSpinner", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond/ui", "1.0.0"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["@cloudinary/url-gen", "1.8.7"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["@types/escape-html", "1.0.2"], ["@types/highlightjs", "9.12.2"], ["@types/is-hotkey", "0.1.7"], ["animatewithsass", "3.2.1"], ["dayjs", "1.11.7"], ["escape-html", "1.0.3"], ["is-hotkey", "0.2.0"], ["perfect-scrollbar", "1.5.5"], ["prismjs", "1.29.0"], ["prop-types", "15.8.1"], ["ripple-effects", "1.0.2"], ["sequelize", "6.28.0"], ["slate-react", "0.72.9"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["svelte", "3.55.1"], ["swiper", "8.4.6"], ["universal-model-ng-react-svelte-vue", "0.3.3"], ["vue", "3.2.45"], ["@beyond/docs", 1], ["@beyond/docs", 1]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/docs@1/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs@1/spinner');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./spiner
      ************************/
      ims.set('./spiner', {
        hash: 2921182323,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSpinner = void 0;
          var _react = require("react");
          /*bundle*/
          const BeyondSpinner = (0, _react.forwardRef)((props, ref) => {
            const {
              color,
              className,
              primary,
              secondary,
              size
            } = props;
            let stroke;
            if (primary) stroke = "var(--primary)";else if (secondary) stroke = "var(--secondary)";else if (color) stroke = color;else stroke = "var(--primary)";
            const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
            const style = {
              style: {}
            };
            if (size) {
              style.style.height = size;
              style.style.width = size;
            }
            ;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref,
              ...style
            }, _react.default.createElement("svg", {
              viewBox: "0 0 100 100"
            }, _react.default.createElement("circle", {
              cx: "50",
              cy: "50",
              r: "20",
              style: {
                stroke
              }
            })));
          });
          exports.BeyondSpinner = BeyondSpinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spiner",
        "from": "BeyondSpinner",
        "name": "BeyondSpinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondSpinner') && _export("BeyondSpinner", BeyondSpinner = require ? require('./spiner').BeyondSpinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFhTztVQUNMLE1BQU1BLGFBQWEsR0FFZixxQkFBVSxFQUNaLENBQUNDLEtBQWlCLEVBQUVDLEdBQThCLEtBQWlCO1lBQ2pFLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxTQUFTO2NBQUVDLE9BQU87Y0FBRUMsU0FBUztjQUFFQztZQUFJLENBQUUsR0FBR04sS0FBSztZQUM1RCxJQUFJTyxNQUFjO1lBQ2xCLElBQUlILE9BQU8sRUFBRUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQ2xDLElBQUlGLFNBQVMsRUFBRUUsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQzNDLElBQUlMLEtBQUssRUFBRUssTUFBTSxHQUFHTCxLQUFLLENBQUMsS0FDMUJLLE1BQU0sR0FBRyxnQkFBZ0I7WUFFOUIsTUFBTUMsR0FBRyxHQUFXTCxTQUFTLEdBQ3pCLEdBQUdBLFNBQVMseUJBQXlCLEdBQ3JDLHdCQUF3QjtZQUM1QixNQUFNTSxLQUFLLEdBQVE7Y0FBRUEsS0FBSyxFQUFFO1lBQUUsQ0FBRTtZQUNoQyxJQUFJSCxJQUFJLEVBQUU7Y0FDUkcsS0FBSyxDQUFDQSxLQUFLLENBQUNDLE1BQU0sR0FBR0osSUFBSTtjQUN6QkcsS0FBSyxDQUFDQSxLQUFLLENBQUNFLEtBQUssR0FBR0wsSUFBSTs7WUFDekI7WUFDRCxPQUNFTTtjQUFLVCxTQUFTLEVBQUVLLEdBQUc7Y0FBRVAsR0FBRyxFQUFFQSxHQUFHO2NBQUEsR0FBTVE7WUFBSyxHQUN0Q0c7Y0FBS0MsT0FBTyxFQUFDO1lBQWEsR0FDeEJEO2NBQVFFLEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBQyxJQUFJO2NBQUNQLEtBQUssRUFBRTtnQkFBRUY7Y0FBTTtZQUFFLEVBQUksQ0FDaEQsQ0FDRjtVQUVWLENBQUMsQ0FDRjtVQUFDVSIsIm5hbWVzIjpbIkJleW9uZFNwaW5uZXIiLCJwcm9wcyIsInJlZiIsImNvbG9yIiwiY2xhc3NOYW1lIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNpemUiLCJzdHJva2UiLCJjbHMiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL3NwaW5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=