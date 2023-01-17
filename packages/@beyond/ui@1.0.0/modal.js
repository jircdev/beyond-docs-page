System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "react-dom@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Control, BeyondModal, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    BeyondModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_reactDom) {
      dependency_3 = _reactDom;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-dom', dependency_3]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtnQkFBS0MsU0FBUyxFQUFDLGVBQWU7Z0JBQUNDLE9BQU8sRUFBRTRCLEtBQUssSUFBRztrQkFDNUNBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUMzQjtjQUFDLEdBQ0cvQixvQkFBQ04sa0JBQVE7Z0JBQUEsR0FBSzBCLEtBQUs7Z0JBQUV4QixLQUFLLEVBQUVBLEtBQUs7Z0JBQUVPLEdBQUcsRUFBQztjQUFrQixFQUFFLENBQ3pELENBQ0osQ0FDVDs7WUFHTCxPQUFPZ0QsUUFBUSxDQUFDQyxZQUFZLENBQ3hCcEQ7Y0FBS3FELEdBQUcsRUFBRTVCLEtBQUs7Y0FBRXZCLE9BQU8sRUFBRXdDLGVBQWU7Y0FBRXpDLFNBQVMsRUFBRWlEO1lBQUcsR0FBR3BELE1BQU0sQ0FBTyxFQUN6RStDLFNBQVMsQ0FDWjtVQUVMIiwibmFtZXMiOlsiQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNsb3NlIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJSZWFjdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJrZXkiLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJzcGVjcyIsImNsb25lRWxlbWVudCIsIkJleW9uZE1vZGFsQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJleW9uZE1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb250cm9sIiwiY29uc3RydWN0b3IiLCJCZXlvbmRNb2RhbCIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwic2hvdyIsIm1vZGFsIiwidXNlUmVmIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xvc2UiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJjbG9zZUNsaWNrZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJvbkNsaWNrQmFja2Ryb3AiLCJ0YXJnZXQiLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhpZGVDbGlja2VkIiwiY2xzIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJyZWYiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY2hpbGRyZW4udHN4IiwiY29kZS90cy9jb250ZXh0LnRzeCIsImNvZGUvdHMvY29udHJvbC50cyIsImNvZGUvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19