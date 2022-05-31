define(["exports", "react", "react-dom", "@beyond-js/widgets/controller/ts", "@beyond-js/kernel/styles/ts", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.ReactWidgetController = _exports2.PageReactWidgetController = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/react-widgets/controllers/ts").package();

  externals.register(new Map([["react", dependency_0], ["react-dom", dependency_1]]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 4113868022,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactWidgetController = void 0;

      var React = require("react");

      var ReactDOM = require("react-dom");

      var _retargetEvents = require("./retarget-events");

      var _ts = require("@beyond-js/widgets/controller/ts");

      var _widget = require("./widget");
      /*bundle*/


      class ReactWidgetController extends _ts.WidgetClientController {
        _mount(props) {
          if (!this.Widget) {
            return {
              errors: [`Widget "${this.element}" does not export a Widget class`]
            };
          }

          const root = this.widget.shadowRoot;
          const method = root.children.length ? 'hydrate' : 'render'; // Render the widget

          try {
            const p = {
              Widget: this.Widget,
              props,
              styles: this.styles
            };
            ReactDOM[method](React.createElement(_widget.default, p), root);
          } catch (exc) {
            console.log(`Error rendering widget "${this.widget.localName}":`);
            console.log(exc.stack);
          }
        }

        mount() {
          this._mount({
            widget: this.widget,
            attributes: this.attributes,
            component: this.widget,
            store: this.store
          });
        }

        unmount() {
          ReactDOM.unmountComponentAtNode(this.widget.shadowRoot);
        }

        async initialise() {
          this.widget.localName === 'main-layout' && (0, _retargetEvents.retargetEvents)(this.widget.shadowRoot);
          await super.initialise();
        }

      }

      exports.ReactWidgetController = ReactWidgetController;
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 2401805357,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageReactWidgetController = void 0;

      var _controller = require("./controller");

      var _ts = require("@beyond-js/widgets/controller/ts");
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
            widget: this.widget,
            attributes: this.attributes,
            component: this.widget,
            store: this.store
          });
        }

        async initialise() {
          this.#uri = new _ts.PageURI({
            widget: this.widget
          });
          await super.initialise();
        }

      }

      exports.PageReactWidgetController = PageReactWidgetController;
    }
  });
  /*********************************
  INTERNAL MODULE: ./retarget-events
  *********************************/

  ims.set('./retarget-events', {
    hash: 223808602,
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
  });
  /************************
  INTERNAL MODULE: ./widget
  ************************/

  ims.set('./widget', {
    hash: 3471932044,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      var _ts = require("@beyond-js/kernel/core/ts");

      function _default({
        Widget,
        props,
        styles
      }) {
        const {
          elements
        } = styles;

        const head = (() => {
          const head = [];
          elements.forEach(styles => {
            head.push(React.createElement("link", {
              key: styles.href,
              href: styles.href,
              rel: 'stylesheet'
            }));
          });
          return head;
        })();

        head.unshift(React.createElement("link", {
          key: "global-styles",
          href: `${_ts.beyond.baseUrl}/global.css`,
          rel: 'stylesheet'
        }));
        return React.createElement(React.Fragment, null, head, React.createElement(Widget, { ...props
        }));
      }
      /*
          // @TODO: Remove this method as it is not required anymore
          css(): HTMLStyleElement {
              if (this.#mode !== 'external') {
                  throw new Error(`Styles of bundle "${this.#bundle}" are not defined as external`);
              }
      
              const css = document.createElement('link');
              css.rel = 'stylesheet';
              css.type = 'text/css';
              css.href = `${beyond.baseDir}${this.#bundle}.css`;
      
              css.setAttribute('bundle', this.#bundle);
      
              return css;
          }
       */

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
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});