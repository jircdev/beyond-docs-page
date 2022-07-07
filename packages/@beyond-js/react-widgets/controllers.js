define(["exports", "@beyond-js/kernel/bundle", "react", "react-dom", "@beyond-js/widgets/controller", "@beyond-js/widgets/render"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ReactWidgetController = _exports.PageReactWidgetController = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/react-widgets/controllers",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["react", dependency_1], ["react-dom", dependency_2], ["@beyond-js/widgets/controller", dependency_3], ["@beyond-js/widgets/render", dependency_4]]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3619523651,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactWidgetController = void 0;

      var React = require("react");

      var ReactDOM = require("react-dom");

      var _retargetEvents = require("./retarget-events");

      var _controller = require("@beyond-js/widgets/controller");

      var _widget = require("./widget");

      var _wrapper = require("./wrapper");
      /*bundle*/


      class ReactWidgetController extends _controller.WidgetClientController {
        #wrapper; // This property must be overwritten

        get Widget() {
          return null;
        }

        mount(props) {
          if (!this.Widget) {
            return {
              errors: [`Widget "${this.element}" does not export a Widget class`]
            };
          }

          props = Object.assign({
            widget: this.widget,
            attributes: this.attributes,
            component: this.widget,
            store: this.store
          }, props ? props : {});
          const holder = this.widget.holder;
          const hydrate = !!holder.children.length; // Render the widget

          try {
            const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
            const p = {
              wrapper,
              props,
              styles: this.styles,
              holder: this.widget.holder
            };
            const element = React.createElement(_widget.default, p);
            ReactDOM[hydrate ? 'hydrate' : 'render'](element, holder);
          } catch (exc) {
            console.log(`Error rendering widget "${this.widget.localName}":`);
            console.log(exc.stack);
          }
        }

        unmount() {
          ReactDOM.unmountComponentAtNode(this.widget.shadowRoot);
        }

        refresh() {
          this.#wrapper.changed();
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
    hash: 3306123120,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageReactWidgetController = void 0;

      var _controller = require("./controller");

      var _controller2 = require("@beyond-js/widgets/controller");
      /*bundle*/


      class PageReactWidgetController extends _controller.ReactWidgetController {
        #uri;

        get uri() {
          return this.#uri;
        }

        mount() {
          return super.mount({
            uri: this.#uri
          });
        }

        async initialise() {
          this.#uri = new _controller2.PageURI({
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
  INTERNAL MODULE: ./styles
  ************************/

  ims.set('./styles', {
    hash: 3125546841,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      function _default({
        styles
      }) {
        const rs = React.useState(0); // Listen for .css bundle changes

        React.useEffect(() => {
          const refresh = () => rs[1](prev => prev + 1);

          styles.on('change', refresh);
          return () => styles.off('change', refresh) && void 0;
        }, []);
        const head = [...styles.resources].map(url => {
          return React.createElement("link", {
            key: url,
            href: url,
            rel: 'stylesheet',
            onLoad: () => styles.onloaded(url)
          });
        });
        return React.createElement(React.Fragment, null, head);
      }
    }
  });
  /************************
  INTERNAL MODULE: ./widget
  ************************/

  ims.set('./widget', {
    hash: 1316246600,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      var _styles = require("./styles");

      function _default({
        wrapper,
        props,
        styles,
        holder
      }) {
        const elements = [];
        elements.push(React.createElement(_styles.default, {
          key: "styles",
          styles: styles,
          widget: props.widget
        }));
        const rs = React.useState(0);

        const refresh = () => rs[1](rs[0] + 1); // Listen for .js bundle changes


        wrapper.changed = refresh; // Check for styles to be loaded

        const loaded = (() => {
          !styles.loaded && styles.ready.then(refresh);
          holder.style.display = '';
          return styles.loaded;
        })();

        const {
          Widget
        } = wrapper;
        const widget = React.createElement(Widget, {
          key: "widgets",
          ...props
        });
        loaded && elements.push(widget);
        return React.createElement(React.Fragment, null, elements);
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./wrapper
  *************************/

  ims.set('./wrapper', {
    hash: 4175409966,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Wrapper = void 0;

      class Wrapper {
        #Widget;

        get Widget() {
          return this.#Widget.Widget;
        } // Property changed should be overwritten to get notified about HMR changes


        changed = () => void 0;

        constructor(Widget) {
          this.#Widget = Widget;
        }

      }

      exports.Wrapper = Wrapper;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "ReactWidgetController",
    "name": "ReactWidgetController"
  }, {
    "im": "./page",
    "from": "PageReactWidgetController",
    "name": "PageReactWidgetController"
  }];
  let ReactWidgetController, PageReactWidgetController; // Module exports

  _exports.PageReactWidgetController = PageReactWidgetController;
  _exports.ReactWidgetController = ReactWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ReactWidgetController') && (_exports.ReactWidgetController = ReactWidgetController = require ? require('./controller').ReactWidgetController : value);
    (require || prop === 'PageReactWidgetController') && (_exports.PageReactWidgetController = PageReactWidgetController = require ? require('./page').PageReactWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});