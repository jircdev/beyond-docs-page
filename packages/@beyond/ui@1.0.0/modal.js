System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "react-dom@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Control, BeyondModal, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    BeyondModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_reactDom) {
      dependency_2 = _reactDom;
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
          "vspecifier": "@beyond/ui@1.0.0/modal"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/modal');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./children
      **************************/
      ims.set('./children', {
        hash: 3743649937,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Children = Children;
          var React = require("react");
          var _context = require("./context");
          function Children({
            children,
            close,
            dismiss
          }) {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement("button", {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button"
              }, "x"));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if (React.isValidElement(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return React.cloneElement(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(_context.BeyondModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3675623577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBeyondModalContext = exports.BeyondModalContext = void 0;
          var React = require("react");
          const value = {};
          const BeyondModalContext = React.createContext(value);
          exports.BeyondModalContext = BeyondModalContext;
          const useBeyondModalContext = () => React.useContext(BeyondModalContext);
          exports.useBeyondModalContext = useBeyondModalContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./control
      *************************/

      ims.set('./control', {
        hash: 1583137179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 4022191343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondModal = BeyondModal;
          var React = require("react");
          var ReactDOM = require("react-dom");
          var _children = require("./children");
          /*bundle*/
          function BeyondModal(props) {
            const [state, setState] = React.useState({
              show: props?.show
            });
            const modal = React.useRef(null);
            const body = document.getElementsByTagName('body')[0];
            const close = async event => {
              if (event) event.stopPropagation();
              const {
                onClose
              } = props;
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              window.setTimeout(async () => {
                if (typeof onClose === 'function' && !(await onClose())) return;
                setState({
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
              }, 300);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              if (event.target !== modal.current) return;
              close(event);
            };
            React.useEffect(() => {
              const container = document.createElement('div');
              setState(state => ({
                ...state,
                container
              }));
              body.appendChild(container);
              return () => {
                body.removeChild(container);
              };
            }, []);
            const {
              container
            } = state;
            if (!container) return null;
            const show = state.show && !state.hideClicked;
            let cls = 'beyond-element-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, React.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
              }))));
            }
            return ReactDOM.createPortal(React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output), container);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./modal",
        "from": "BeyondModal",
        "name": "BeyondModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'BeyondModal') && _export("BeyondModal", BeyondModal = require ? require('./modal').BeyondModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUtDLFNBQVMsRUFBQyxlQUFlO2dCQUFDQyxPQUFPLEVBQUU0QixLQUFLLElBQUc7a0JBQzVDQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDM0I7Y0FBQyxHQUNHL0Isb0JBQUNOLGtCQUFRO2dCQUFBLEdBQUswQixLQUFLO2dCQUFFeEIsS0FBSyxFQUFFQSxLQUFLO2dCQUFFTyxHQUFHLEVBQUM7Y0FBa0IsRUFBRSxDQUN6RCxDQUNKLENBQ1Q7O1lBR0wsT0FBT2dELFFBQVEsQ0FBQ0MsWUFBWSxDQUN4QnBEO2NBQUtxRCxHQUFHLEVBQUU1QixLQUFLO2NBQUV2QixPQUFPLEVBQUV3QyxlQUFlO2NBQUV6QyxTQUFTLEVBQUVpRDtZQUFHLEdBQUdwRCxNQUFNLENBQU8sRUFDekUrQyxTQUFTLENBQ1o7VUFFTCIsIm5hbWVzIjpbIkNoaWxkcmVuIiwiY2hpbGRyZW4iLCJjbG9zZSIsImRpc21pc3MiLCJvdXRwdXQiLCJwdXNoIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwia2V5IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJCZXlvbmRNb2RhbENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VCZXlvbmRNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiQmV5b25kTW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInNob3ciLCJtb2RhbCIsInVzZVJlZiIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsb3NlIiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY2xvc2VDbGlja2VkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJoaWRlQ2xpY2tlZCIsImNscyIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwicmVmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2NoaWxkcmVuLnRzeCIsImNvZGUvdHMvY29udGV4dC50c3giLCJjb2RlL3RzL2NvbnRyb2wudHMiLCJjb2RlL3RzL21vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==