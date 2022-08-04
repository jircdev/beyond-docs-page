define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/styles", "react@17.0.2", "react-dom@17.0.2"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Control = _exports.BeyondModal = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/ui/modal",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_2], ["react-dom", dependency_3]]));
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui/modal');
  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./children
  **************************/

  ims.set('./children', {
    hash: 363183501,
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
            const specs = {}; //TODO: check a official way to check the children type

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
    hash: 1625331510,
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
          setState(state => ({ ...state,
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
          }, React.createElement(_children.Children, { ...props,
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
  let Control, BeyondModal; // Module exports

  _exports.BeyondModal = BeyondModal;
  _exports.Control = Control;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Control') && (_exports.Control = Control = require ? require('./control').Control : value);
    (require || prop === 'BeyondModal') && (_exports.BeyondModal = BeyondModal = require ? require('./modal').BeyondModal : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBQyx1QkFBVEg7WUFBaUNDLFNBQVMsRUFBQztVQUEzQ0QsR0FDSUE7WUFBS0MsU0FBUyxFQUFDLGVBQWZEO1lBQStCRSxPQUFPLEVBQUUyQixLQUFLLElBQUc7Y0FDNUNBLEtBQUssQ0FBQ0MsZUFBTkQ7WUFDSDtVQUZEN0IsR0FHSUEsb0JBQUNOLGtCQUFETSxFQUFTLEtBQUttQixLQUFMO1lBQVl2QixLQUFLLEVBQUVBLEtBQW5CO1lBQTBCTyxHQUFHLEVBQUM7VUFBOUIsQ0FBVEgsQ0FISkEsQ0FESkEsQ0FESkY7UUFTSDs7UUFFRCxPQUFPb0QsUUFBUSxDQUFDQyxZQUFURCxDQUNIbEQ7VUFBS29ELEdBQUcsRUFBRTVCLEtBQVZ4QjtVQUFpQkUsT0FBTyxFQUFFdUMsZUFBMUJ6QztVQUEyQ0MsU0FBUyxFQUFFZ0Q7UUFBdERqRCxHQUE0REYsTUFBNURFLENBREdrRCxFQUVITixTQUZHTSxDQUFQO01BS0giLCJuYW1lcyI6WyJDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2xvc2UiLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwib25DbGljayIsImtleSIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwiQmV5b25kTW9kYWxDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VCZXlvbmRNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbCIsImNvbnN0cnVjdG9yIiwiQmV5b25kTW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInNob3ciLCJtb2RhbCIsInVzZVJlZiIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsb3NlIiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY2xvc2VDbGlja2VkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJoaWRlQ2xpY2tlZCIsImNscyIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwicmVmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiLXVpL21vZHVsZXMvbW9kYWwvY29kZS90cy9jaGlsZHJlbi50c3giLCJiLXVpL21vZHVsZXMvbW9kYWwvY29kZS90cy9jb250ZXh0LnRzeCIsImItdWkvbW9kdWxlcy9tb2RhbC9jb2RlL3RzL2NvbnRyb2wudHMiLCJiLXVpL21vZHVsZXMvbW9kYWwvY29kZS90cy9tb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=