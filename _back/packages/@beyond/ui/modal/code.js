define(["exports", "react", "react-dom", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.Control = _exports2.BeyondModal = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('react-dom', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond/ui/modal/code', false, {}, dependencies);

  const __pkg = bundle.package();

  bundle.styles.mode = 'external';
  const modules = new Map();
  /**************************
  INTERNAL MODULE: ./children
  **************************/

  modules.set('./children', {
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

  modules.set('./context', {
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

  modules.set('./control', {
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

  modules.set('./modal', {
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Control = require('./control').Control;
    _exports.BeyondModal = require('./modal').BeyondModal;
  };

  let Control, BeyondModal; // Module exports

  _exports2.BeyondModal = BeyondModal;
  _exports2.Control = Control;

  __pkg.exports.process = function (require) {
    _exports2.Control = Control = require('./control').Control;
    _exports2.BeyondModal = BeyondModal = require('./modal').BeyondModal;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});