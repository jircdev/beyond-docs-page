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
  /**********
  SCSS STYLES
  **********/


  bundle.styles.processor = 'scss';
  bundle.styles.value = '@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-moz-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-ms-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-o-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}@-moz-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}@-ms-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}@-o-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-moz-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);-o-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}.beyond-alert-dialog.beyond-alert-dialog-centered .actions,.beyond-alert-dialog.beyond-alert-dialog-centered .alert-dialog-content{display:grid;justify-content:center}.beyond-alert-dialog .alert-dialog-content{padding-top:20px}.beyond-alert-dialog .actions{border-top:1px solid #f0f0f0;margin-top:15px;display:grid;justify-content:end;padding:15px 0 0}.beyond-alert-dialog .actions .beyond-button{margin:0}.beyond-element-modal .close-icon{position:absolute;top:20px;right:20px;border:none;background:0 0;display:inline-block;fill:#82837F;color:#82837f;transition:all .1s ease-in;outline:0;cursor:pointer}.beyond-element-modal .close-icon:focus,.beyond-element-modal .close-icon:hover{fill:#333333;color:#82837f;transition:all .1s ease-in}.beyond-element-modal .close-icon svg{height:10px;width:10px}.beyond-confirm-dialog.beyond-confirm-dialog-centered{justify-content:center;text-align:center}.beyond-confirm-dialog.beyond-confirm-dialog-centered .actions,.beyond-confirm-dialog.beyond-confirm-dialog-centered .confirm-dialog-content{display:grid;justify-content:center}.beyond-confirm-dialog .confirm-dialog-content{padding-top:20px}.beyond-confirm-dialog .actions{border-top:1px solid #f0f0f0;padding:15px 0 0;margin-top:15px;display:grid;grid-auto-flow:column;grid-gap:8px;justify-content:end}.beyond-confirm-dialog .actions .beyond-button{margin:0}.beyond-element-modal.md .modal-content{width:70%}.beyond-element-modal.lg .modal-content{width:90%}@media (max-width:600px){.beyond-element-modal .modal-content,.beyond-element-modal.lg .modal-content,.beyond-element-modal.md .modal-content{width:90%}}@media (max-width:900px){.beyond-element-modal.md{min-width:80%}.beyond-element-modal.lg{width:90%}}body.body-beyond-modal-opened{height:100vh;overflow-y:hidden;padding-right:15px}.beyond-element-modal{display:none;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;overflow:auto;background-color:rgba(0,0,0,.4)}.beyond-element-modal.show-modal{display:block;z-index:99999;height:100vh;width:100vw;padding:20px}.beyond-element-modal .modal-wrapper{width:100%;margin:auto;display:flex;align-items:center;justify-content:center;min-height:80vh;-webkit-animation-name:zoomIn;-moz-animation-name:zoomIn;-ms-animation-name:zoomIn;-o-animation-name:zoomIn;animation-name:zoomIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;-moz-animation-duration:.3s;-ms-animation-duration:300ms;-o-animation-duration:.3s;animation-duration:.3s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}.beyond-element-modal.modal-hidden .modal-wrapper{-webkit-animation-name:zoomOut;-moz-animation-name:zoomOut;-ms-animation-name:zoomOut;-o-animation-name:zoomOut;animation-name:zoomOut;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.2s;-moz-animation-duration:.2s;-ms-animation-duration:200ms;-o-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}.beyond-element-modal .modal-content{position:relative;color:#000;background:#fff}';
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
    hash: 1504194283,
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