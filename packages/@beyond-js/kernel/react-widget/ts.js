define(["exports", "react", "react-dom", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/routing/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.ReactWidgetController = _exports2.PageReactWidgetController = void 0;
  const dependencies = new Map();
  dependencies.set('react', dependency_0);
  dependencies.set('react-dom', dependency_1);
  dependencies.set('@beyond-js/kernel/core/ts', dependency_2);
  dependencies.set('@beyond-js/kernel/routing/ts', dependency_3);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond-js/kernel/react-widget/ts', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 1662714630,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactWidgetController = void 0;

      var React = require("react");

      var ReactDOM = require("react-dom");

      var _retargetEvents = require("./retarget-events");

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class ReactWidgetController extends _ts.BeyondWidgetController {
        _mount(props) {
          const method = this.hydratable ? 'hydrate' : 'render'; // Render the widget

          ReactDOM[method](React.createElement(this.Widget, props), this.body);
        }

        mount() {
          this._mount({
            component: this.component,
            store: this.store
          });
        }

        unmount() {
          ReactDOM.unmountComponentAtNode(this.body);
        }

        initialise() {
          this.component.localName === 'main-layout' && (0, _retargetEvents.retargetEvents)(this.component.shadowRoot);
          super.initialise();
        }

      }

      exports.ReactWidgetController = ReactWidgetController;
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  modules.set('./page', {
    hash: 3352408644,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageReactWidgetController = void 0;

      var _ts = require("@beyond-js/kernel/routing/ts");

      var _controller = require("./controller");

      var ReactDOM = require("react-dom");
      /*bundle*/


      class PageReactWidgetController extends _controller.ReactWidgetController {
        #uri;

        get uri() {
          return this.#uri;
        }

        show() {}

        hide() {}

        mount() {
          this._mount({
            uri: this.uri,
            component: this.component,
            store: this.store
          });
        }

        unmount() {
          ReactDOM.unmountComponentAtNode(this.body);
        }

        initialise() {
          const child = this.component.getAttribute('data-child-id');
          this.#uri = child ? _ts.routing.manager.pages.find(child).uri : void 0;
          super.initialise();
        }

      }

      exports.PageReactWidgetController = PageReactWidgetController;
    }
  });
  /*********************************
  INTERNAL MODULE: ./retarget-events
  *********************************/

  modules.set('./retarget-events', {
    hash: 2415263902,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.retargetEvents = retargetEvents;
      const reactEvents = ['onAbort', 'onAnimationCancel', 'onAnimationEnd', 'onAnimationIteration', 'onAuxClick', 'onBlur', 'onChange', 'onClick', 'onClose', 'onContextMenu', 'onDoubleClick', 'onError', 'onFocus', 'onGotPointerCapture', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoad', 'onLoadEnd', 'onLoadStart', 'onLostPointerCapture', 'onMouseDown', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onPointerCancel', 'onPointerDown', 'onPointerEnter', 'onPointerLeave', 'onPointerMove', 'onPointerOut', 'onPointerOver', 'onPointerUp', 'onReset', 'onResize', 'onScroll', 'onSelect', 'onSelectionChange', 'onSelectStart', 'onSubmit', 'onTouchCancel', 'onTouchMove', 'onTouchStart', 'onTouchEnd', 'onTransitionCancel', 'onTransitionEnd', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onFocusOut'];
      const divergentNativeEvents = {
        onDoubleClick: 'dblclick'
      };
      const mimickedReactEvents = {
        onInput: 'onChange',
        onFocusOut: 'onBlur',
        onSelectionChange: 'onSelect'
      };
      const proxyHandlers = {
        get: function (target, prop, _receiver) {
          if (prop === "currentTarget") {
            return target._reactCurrentTarget;
          }

          const value = target[prop];
          return value instanceof Function ? value.bind(target) : value;
        }
      };

      function retargetEvents(shadowRoot) {
        const removeEventListeners = [];
        reactEvents.forEach(function (reactEventName) {
          const nativeEventName = getNativeEventName(reactEventName);

          function retargetEvent(event) {
            const path = event.path || event.composedPath && event.composedPath() || composedPath(event.target);
            const proxy = new Proxy(event, proxyHandlers);

            for (let i = 0; i < path.length; i++) {
              const el = path[i];
              let props = null;
              const reactComponent = findReactComponent(el);
              const eventHandlers = findReactEventHandlers(el);
              event._reactCurrentTarget = el;

              if (!eventHandlers) {
                props = findReactProps(reactComponent);
              } else {
                props = eventHandlers;
              }

              if (reactComponent && props) {
                dispatchEvent(proxy, reactEventName, props);
              }

              if (reactComponent && props && mimickedReactEvents[reactEventName]) {
                dispatchEvent(proxy, mimickedReactEvents[reactEventName], props);
              }

              if (event.cancelBubble) break;
              if (el === shadowRoot) break;
            }
          }

          shadowRoot.addEventListener(nativeEventName, retargetEvent, false);
          removeEventListeners.push(function () {
            shadowRoot.removeEventListener(nativeEventName, retargetEvent, false);
          });
        });
        return function () {
          removeEventListeners.forEach(function (removeEventListener) {
            removeEventListener();
          });
        };
      }

      function findReactEventHandlers(item) {
        return findReactProperty(item, '__reactEventHandlers');
      }

      function findReactComponent(item) {
        return findReactProperty(item, '_reactInternal');
      }

      function findReactProperty(item, propertyPrefix) {
        for (const key in item) {
          if (item.hasOwnProperty(key) && key.indexOf(propertyPrefix) !== -1) {
            return item[key];
          }
        }
      }

      function findReactProps(component) {
        if (!component) return undefined;
        if (component.memoizedProps) return component.memoizedProps; // React 16 Fiber

        if (component._currentElement && component._currentElement.props) return component._currentElement.props; // React <=15
      }

      function dispatchEvent(event, eventType, componentProps) {
        event.persist = function () {
          event.isPersistent = function () {
            return true;
          };
        };

        if (componentProps[eventType]) {
          componentProps[eventType](event);
        }
      }

      function getNativeEventName(reactEventName) {
        if (divergentNativeEvents[reactEventName]) {
          return divergentNativeEvents[reactEventName];
        }

        return reactEventName.replace(/^on/, '').toLowerCase();
      }

      function composedPath(el) {
        const path = [];

        while (el) {
          path.push(el);

          if (el.tagName === 'HTML') {
            path.push(document);
            path.push(window);
            return path;
          }

          el = el.parentElement;
        }
      }
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.ReactWidgetController = require('./controller').ReactWidgetController;
    _exports.PageReactWidgetController = require('./page').PageReactWidgetController;
  };

  let ReactWidgetController, PageReactWidgetController; // Module exports

  _exports2.PageReactWidgetController = PageReactWidgetController;
  _exports2.ReactWidgetController = ReactWidgetController;

  __pkg.exports.process = function (require) {
    _exports2.ReactWidgetController = ReactWidgetController = require('./controller').ReactWidgetController;
    _exports2.PageReactWidgetController = PageReactWidgetController = require('./page').PageReactWidgetController;
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});