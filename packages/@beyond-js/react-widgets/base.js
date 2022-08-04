define(["exports", "module", "@beyond-js/kernel/bundle", "react@17.0.2", "react-dom@17.0.2", "@beyond-js/widgets/controller"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ReactWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/react-widgets/base",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1], ["react-dom", dependency_2]]));
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
    hash: 3975857716,
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
  }];
  let ReactWidgetController; // Module exports

  _exports.ReactWidgetController = ReactWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ReactWidgetController') && (_exports.ReactWidgetController = ReactWidgetController = require ? require('./controller').ReactWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNGQSxxQkFERSxTQUM0QkMsa0NBRDVCLENBQ2tEO1FBQy9ELFNBRCtELENBRy9EOztRQUNVLElBQU5DLE1BQU07VUFDTixPQUFPLElBQVA7UUFDSDs7UUFFREMsS0FBSyxDQUFDQyxLQUFELEVBQTRCO1VBQzdCLElBQUksQ0FBQyxLQUFLRixNQUFWLEVBQWtCO1lBQ2QsT0FBTztjQUFDRyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEtBQUtDLE9BQU8sa0NBQXhCO1lBQVQsQ0FBUDtVQUNIOztVQUVERixLQUFLLEdBQUdHLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBYztZQUNsQkUsTUFBTSxFQUFFLEtBQUtBLE1BREs7WUFFbEJDLFVBQVUsRUFBRSxLQUFLQSxVQUZDO1lBR2xCQyxTQUFTLEVBQUUsS0FBS0YsTUFIRTtZQUlsQkcsS0FBSyxFQUFFLEtBQUtBO1VBSk0sQ0FBZEwsRUFLTEgsS0FBSyxHQUFHQSxLQUFILEdBQVcsRUFMWEcsQ0FBUkg7VUFPQSxNQUFNUyxNQUFNLEdBQTBCLEtBQUtKLE1BQUwsQ0FBYUksTUFBbkQ7VUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxDQUFDRCxNQUFNLENBQUNFLFFBQVBGLENBQWdCRyxNQUFsQyxDQWI2QixDQWU3Qjs7VUFDQSxJQUFJO1lBQ0EsTUFBTUMsT0FBTyxHQUFHLEtBQUssUUFBTCxHQUFnQixJQUFJQyxnQkFBSixDQUFZLElBQVosQ0FBaEM7WUFDQSxNQUFNQyxDQUFDLEdBQUc7Y0FBQ0YsT0FBRDtjQUFVYixLQUFWO2NBQWlCZ0IsTUFBTSxFQUFFLEtBQUtBLE1BQTlCO2NBQXNDUCxNQUFNLEVBQVEsS0FBS0osTUFBTCxDQUFhSTtZQUFqRSxDQUFWO1lBQ0EsTUFBTVAsT0FBTyxHQUFHZSxLQUFLLENBQUNDLGFBQU5ELENBQW9CbkIsZUFBcEJtQixFQUE0QkYsQ0FBNUJFLENBQWhCO1lBRUFFLFFBQVEsQ0FBQ1QsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUF2QixDQUFSUyxDQUF5Q2pCLE9BQXpDaUIsRUFBa0RWLE1BQWxEVTtVQUxKLEVBTUUsT0FBT0MsR0FBUCxFQUFZO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSwyQkFBMkIsS0FBS2hCLE1BQUwsQ0FBWWtCLFNBQVMsSUFBNURGO1lBQ0FBLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWUQsR0FBRyxDQUFDSSxLQUFoQkg7VUFDSDtRQUNKOztRQUVESSxPQUFPO1VBQ0hOLFFBQVEsQ0FBQ08sc0JBQVRQLENBQWdDLEtBQUtkLE1BQUwsQ0FBWXNCLFVBQTVDUjtRQUNIOztRQUVEUyxPQUFPO1VBQ0gsS0FBSyxRQUFMLENBQWNDLE9BQWQ7UUFDSDs7UUFFZSxNQUFWQyxVQUFVO1VBQ1osS0FBS3pCLE1BQUwsQ0FBWWtCLFNBQVosS0FBMEIsYUFBMUIsSUFBMkMsb0NBQWUsS0FBS2xCLE1BQUwsQ0FBWXNCLFVBQTNCLENBQTNDO1VBQ0EsTUFBTSxNQUFNRyxVQUFOLEVBQU47UUFDSDs7TUEvQzhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNSbkUsTUFBTUMsV0FBVyxHQUFHLENBQUMsU0FBRCxFQUFZLG1CQUFaLEVBQWlDLGdCQUFqQyxFQUFtRCxzQkFBbkQsRUFBMkUsWUFBM0UsRUFBeUYsUUFBekYsRUFDaEIsVUFEZ0IsRUFDSixTQURJLEVBQ08sU0FEUCxFQUNrQixlQURsQixFQUNtQyxlQURuQyxFQUNvRCxTQURwRCxFQUMrRCxTQUQvRCxFQUMwRSxxQkFEMUUsRUFFaEIsU0FGZ0IsRUFFTCxXQUZLLEVBRVEsWUFGUixFQUVzQixTQUZ0QixFQUVpQyxRQUZqQyxFQUUyQyxXQUYzQyxFQUV3RCxhQUZ4RCxFQUV1RSxzQkFGdkUsRUFHaEIsYUFIZ0IsRUFHRCxhQUhDLEVBR2MsWUFIZCxFQUc0QixhQUg1QixFQUcyQyxXQUgzQyxFQUd3RCxpQkFIeEQsRUFHMkUsZUFIM0UsRUFJaEIsZ0JBSmdCLEVBSUUsZ0JBSkYsRUFJb0IsZUFKcEIsRUFJcUMsY0FKckMsRUFJcUQsZUFKckQsRUFJc0UsYUFKdEUsRUFJcUYsU0FKckYsRUFLaEIsVUFMZ0IsRUFLSixVQUxJLEVBS1EsVUFMUixFQUtvQixtQkFMcEIsRUFLeUMsZUFMekMsRUFLMEQsVUFMMUQsRUFLc0UsZUFMdEUsRUFNaEIsYUFOZ0IsRUFNRCxjQU5DLEVBTWUsWUFOZixFQU02QixvQkFON0IsRUFNbUQsaUJBTm5ELEVBTXNFLFFBTnRFLEVBTWdGLFdBTmhGLEVBT2hCLGFBUGdCLEVBT0QsWUFQQyxFQU9hLGFBUGIsRUFPNEIsWUFQNUIsRUFPMEMsYUFQMUMsRUFPeUQsUUFQekQsRUFPbUUsWUFQbkUsQ0FBcEI7TUFTQSxNQUFNQyxxQkFBcUIsR0FBUTtRQUFDQyxhQUFhLEVBQUU7TUFBaEIsQ0FBbkM7TUFFQSxNQUFNQyxtQkFBbUIsR0FBUTtRQUM3QkMsT0FBTyxFQUFFLFVBRG9CO1FBRTdCQyxVQUFVLEVBQUUsUUFGaUI7UUFHN0JDLGlCQUFpQixFQUFFO01BSFUsQ0FBakM7TUFLQSxNQUFNQyxhQUFhLEdBQUc7UUFDbEJDLEdBQUcsRUFBRSxVQUFVQyxNQUFWLEVBQXVCQyxJQUF2QixFQUFrQ0MsU0FBbEMsRUFBZ0Q7VUFDakQsSUFBSUQsSUFBSSxLQUFLLGVBQWIsRUFBOEI7WUFDMUIsT0FBT0QsTUFBTSxDQUFDRyxtQkFBZDtVQUNIOztVQUNELE1BQU1DLEtBQUssR0FBR0osTUFBTSxDQUFDQyxJQUFELENBQXBCO1VBQ0EsT0FBUUcsS0FBSyxZQUFZQyxRQUFqQkQsR0FBNkJBLEtBQUssQ0FBQ0UsSUFBTkYsQ0FBV0osTUFBWEksQ0FBN0JBLEdBQWtEQSxLQUExRDtRQUNIO01BUGlCLENBQXRCOztNQVVNLFNBQVVHLGNBQVYsQ0FBeUJwQixVQUF6QixFQUF3QztRQUMxQyxNQUFNcUIsb0JBQW9CLEdBQVUsRUFBcEM7UUFFQWpCLFdBQVcsQ0FBQ2tCLE9BQVpsQixDQUFvQixVQUFVbUIsY0FBVixFQUF3QjtVQUN4QyxNQUFNQyxlQUFlLEdBQUdDLGtCQUFrQixDQUFDRixjQUFELENBQTFDOztVQUVBLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQWlDO1lBQzdCLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFORCxJQUFlQSxLQUFLLENBQUNFLFlBQU5GLElBQXNCQSxLQUFLLENBQUNFLFlBQU5GLEVBQXJDQSxJQUNURSxZQUFZLENBQUNGLEtBQUssQ0FBQ2QsTUFBUCxDQURoQjtZQUVBLE1BQU1pQixLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVSixLQUFWLEVBQWlCaEIsYUFBakIsQ0FBZDs7WUFFQSxLQUFLLElBQUlxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixJQUFJLENBQUMzQyxNQUF6QixFQUFpQytDLENBQUMsRUFBbEMsRUFBc0M7Y0FDbEMsTUFBTUMsRUFBRSxHQUFHTCxJQUFJLENBQUNJLENBQUQsQ0FBZjtjQUNBLElBQUkzRCxLQUFLLEdBQUcsSUFBWjtjQUNBLE1BQU02RCxjQUFjLEdBQUdDLGtCQUFrQixDQUFDRixFQUFELENBQXpDO2NBQ0EsTUFBTUcsYUFBYSxHQUFHQyxzQkFBc0IsQ0FBQ0osRUFBRCxDQUE1QztjQUNBTixLQUFLLENBQUNYLG1CQUFOVyxHQUE0Qk0sRUFBNUJOOztjQUVBLElBQUksQ0FBQ1MsYUFBTCxFQUFvQjtnQkFDaEIvRCxLQUFLLEdBQUdpRSxjQUFjLENBQUNKLGNBQUQsQ0FBdEI3RDtjQURKLE9BRU87Z0JBQ0hBLEtBQUssR0FBRytELGFBQVIvRDtjQUNIOztjQUVELElBQUk2RCxjQUFjLElBQUk3RCxLQUF0QixFQUE2QjtnQkFDekJrRSxhQUFhLENBQUNULEtBQUQsRUFBUVAsY0FBUixFQUF3QmxELEtBQXhCLENBQWJrRTtjQUNIOztjQUNELElBQUlMLGNBQWMsSUFBSTdELEtBQWxCNkQsSUFBMkIzQixtQkFBbUIsQ0FBQ2dCLGNBQUQsQ0FBbEQsRUFBb0U7Z0JBQ2hFZ0IsYUFBYSxDQUFDVCxLQUFELEVBQVF2QixtQkFBbUIsQ0FBQ2dCLGNBQUQsQ0FBM0IsRUFBNkNsRCxLQUE3QyxDQUFia0U7Y0FDSDs7Y0FFRCxJQUFJWixLQUFLLENBQUNhLFlBQVYsRUFBd0I7Y0FDeEIsSUFBSVAsRUFBRSxLQUFLakMsVUFBWCxFQUF1QjtZQUMxQjtVQUNKOztVQUVEQSxVQUFVLENBQUN5QyxnQkFBWHpDLENBQTRCd0IsZUFBNUJ4QixFQUE2QzBCLGFBQTdDMUIsRUFBNEQsS0FBNURBO1VBRUFxQixvQkFBb0IsQ0FBQ3FCLElBQXJCckIsQ0FBMEI7WUFDdEJyQixVQUFVLENBQUMyQyxtQkFBWDNDLENBQStCd0IsZUFBL0J4QixFQUFnRDBCLGFBQWhEMUIsRUFBK0QsS0FBL0RBO1VBREo7UUFuQ0o7UUF3Q0EsT0FBTztVQUNIcUIsb0JBQW9CLENBQUNDLE9BQXJCRCxDQUE2QixVQUFVc0IsbUJBQVYsRUFBNkI7WUFDdERBLG1CQUFtQjtVQUR2QjtRQURKO01BS0g7O01BRUQsU0FBU04sc0JBQVQsQ0FBZ0NPLElBQWhDLEVBQXlDO1FBQ3JDLE9BQU9DLGlCQUFpQixDQUFDRCxJQUFELEVBQU8sc0JBQVAsQ0FBeEI7TUFDSDs7TUFFRCxTQUFTVCxrQkFBVCxDQUE0QlMsSUFBNUIsRUFBcUM7UUFDakMsT0FBT0MsaUJBQWlCLENBQUNELElBQUQsRUFBTyxnQkFBUCxDQUF4QjtNQUNIOztNQUVELFNBQVNDLGlCQUFULENBQTJCRCxJQUEzQixFQUFzQ0UsY0FBdEMsRUFBeUQ7UUFDckQsS0FBSyxNQUFNQyxHQUFYLElBQWtCSCxJQUFsQixFQUF3QjtVQUNwQixJQUFJQSxJQUFJLENBQUNJLGNBQUxKLENBQW9CRyxHQUFwQkgsS0FBNEJHLEdBQUcsQ0FBQ0UsT0FBSkYsQ0FBWUQsY0FBWkMsTUFBZ0MsQ0FBQyxDQUFqRSxFQUFvRTtZQUNoRSxPQUFPSCxJQUFJLENBQUNHLEdBQUQsQ0FBWDtVQUNIO1FBQ0o7TUFDSjs7TUFFRCxTQUFTVCxjQUFULENBQXdCMUQsU0FBeEIsRUFBc0M7UUFDbEMsSUFBSSxDQUFDQSxTQUFMLEVBQWdCLE9BQU9zRSxTQUFQO1FBQ2hCLElBQUl0RSxTQUFTLENBQUN1RSxhQUFkLEVBQTZCLE9BQU92RSxTQUFTLENBQUN1RSxhQUFqQixDQUZLLENBRTJCOztRQUM3RCxJQUFJdkUsU0FBUyxDQUFDd0UsZUFBVnhFLElBQTZCQSxTQUFTLENBQUN3RSxlQUFWeEUsQ0FBMEJQLEtBQTNELEVBQWtFLE9BQU9PLFNBQVMsQ0FBQ3dFLGVBQVZ4RSxDQUEwQlAsS0FBakMsQ0FIaEMsQ0FHd0U7TUFDN0c7O01BRUQsU0FBU2tFLGFBQVQsQ0FBdUJaLEtBQXZCLEVBQW1DMEIsU0FBbkMsRUFBbURDLGNBQW5ELEVBQXNFO1FBQ2xFM0IsS0FBSyxDQUFDNEIsT0FBTjVCLEdBQWdCO1VBQ1pBLEtBQUssQ0FBQzZCLFlBQU43QixHQUFxQjtZQUNqQixPQUFPLElBQVA7VUFESjtRQURKOztRQU1BLElBQUkyQixjQUFjLENBQUNELFNBQUQsQ0FBbEIsRUFBK0I7VUFDM0JDLGNBQWMsQ0FBQ0QsU0FBRCxDQUFkQyxDQUEwQjNCLEtBQTFCMkI7UUFDSDtNQUNKOztNQUVELFNBQVM3QixrQkFBVCxDQUE0QkYsY0FBNUIsRUFBK0M7UUFDM0MsSUFBSWxCLHFCQUFxQixDQUFDa0IsY0FBRCxDQUF6QixFQUEyQztVQUN2QyxPQUFPbEIscUJBQXFCLENBQUNrQixjQUFELENBQTVCO1FBQ0g7O1FBQ0QsT0FBT0EsY0FBYyxDQUFDa0MsT0FBZmxDLENBQXVCLEtBQXZCQSxFQUE4QixFQUE5QkEsRUFBa0NtQyxXQUFsQ25DLEVBQVA7TUFDSDs7TUFFRCxTQUFTTSxZQUFULENBQXNCSSxFQUF0QixFQUE2QjtRQUN6QixNQUFNTCxJQUFJLEdBQUcsRUFBYjs7UUFDQSxPQUFPSyxFQUFQLEVBQVc7VUFDUEwsSUFBSSxDQUFDYyxJQUFMZCxDQUFVSyxFQUFWTDs7VUFDQSxJQUFJSyxFQUFFLENBQUMwQixPQUFIMUIsS0FBZSxNQUFuQixFQUEyQjtZQUN2QkwsSUFBSSxDQUFDYyxJQUFMZCxDQUFVZ0MsUUFBVmhDO1lBQ0FBLElBQUksQ0FBQ2MsSUFBTGQsQ0FBVWlDLE1BQVZqQztZQUNBLE9BQU9BLElBQVA7VUFDSDs7VUFDREssRUFBRSxHQUFHQSxFQUFFLENBQUM2QixhQUFSN0I7UUFDSDtNQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztNQ2hJRDs7TUFRYyxrQkFBVztRQUFDNUM7TUFBRCxDQUFYLEVBQTBCO1FBQ3BDLE1BQU0wRSxFQUFFLEdBQUd6RSxLQUFLLENBQUMwRSxRQUFOMUUsQ0FBZSxDQUFmQSxDQUFYLENBRG9DLENBR3BDOztRQUNBQSxLQUFLLENBQUMyRSxTQUFOM0UsQ0FBZ0IsTUFBSztVQUNqQixNQUFNVyxPQUFPLEdBQUcsTUFBTThELEVBQUUsQ0FBQyxDQUFELENBQUZBLENBQU1HLElBQUksSUFBSUEsSUFBSSxHQUFHLENBQXJCSCxDQUF0Qjs7VUFDQTFFLE1BQU0sQ0FBQzhFLEVBQVA5RSxDQUFVLFFBQVZBLEVBQW9CWSxPQUFwQlo7VUFDQSxPQUFPLE1BQU9BLE1BQU0sQ0FBQytFLEdBQVAvRSxDQUFXLFFBQVhBLEVBQXFCWSxPQUFyQlosS0FBaUMsS0FBSyxDQUFwRDtRQUhKLEdBSUcsRUFKSEM7UUFNQSxNQUFNK0UsSUFBSSxHQUF5QixDQUFDLEdBQUdoRixNQUFNLENBQUNpRixTQUFYLEVBQXNCQyxHQUF0QixDQUEwQkMsR0FBRyxJQUFHO1VBQy9ELE9BQU9sRjtZQUFNeUQsR0FBRyxFQUFFeUIsR0FBWGxGO1lBQWdCbUYsSUFBSSxFQUFFRCxHQUF0QmxGO1lBQTJCb0YsR0FBRyxFQUFDLFlBQS9CcEY7WUFBNENxRixNQUFNLEVBQUUsTUFBTXRGLE1BQU0sQ0FBQ3VGLFFBQVB2RixDQUFnQm1GLEdBQWhCbkY7VUFBMURDLEVBQVA7UUFEK0IsRUFBbkM7UUFHQSxPQUFPQSwwQ0FBRytFLElBQUgvRSxDQUFQO01BQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O01DdEJEOztNQUNBOztNQUVjLGtCQUFXO1FBQUNKLE9BQUQ7UUFBVWIsS0FBVjtRQUFpQmdCLE1BQWpCO1FBQXlCUDtNQUF6QixDQUFYLEVBQWdEO1FBQzFELE1BQU0rRixRQUFRLEdBQXlCLEVBQXZDO1FBQ0FBLFFBQVEsQ0FBQ25DLElBQVRtQyxDQUFjdkYsb0JBQUN3RixlQUFEeEYsRUFBTztVQUFDeUQsR0FBRyxFQUFDLFFBQUw7VUFBYzFELE1BQU0sRUFBRUEsTUFBdEI7VUFBOEJYLE1BQU0sRUFBRUwsS0FBSyxDQUFDSztRQUE1QyxDQUFQWSxDQUFkdUY7UUFFQSxNQUFNZCxFQUFFLEdBQUd6RSxLQUFLLENBQUMwRSxRQUFOMUUsQ0FBZSxDQUFmQSxDQUFYOztRQUNBLE1BQU1XLE9BQU8sR0FBRyxNQUFNOEQsRUFBRSxDQUFDLENBQUQsQ0FBRkEsQ0FBTUEsRUFBRSxDQUFDLENBQUQsQ0FBRkEsR0FBUSxDQUFkQSxDQUF0QixDQUwwRCxDQU8xRDs7O1FBQ0E3RSxPQUFPLENBQUNnQixPQUFSaEIsR0FBa0JlLE9BQWxCZixDQVIwRCxDQVUxRDs7UUFDQSxNQUFNNkYsTUFBTSxHQUFZLENBQUMsTUFBSztVQUMxQixDQUFDMUYsTUFBTSxDQUFDMEYsTUFBUixJQUFrQjFGLE1BQU0sQ0FBQzJGLEtBQVAzRixDQUFhNEYsSUFBYjVGLENBQWtCWSxPQUFsQlosQ0FBbEI7VUFDQVAsTUFBTSxDQUFDb0csS0FBUHBHLENBQWFxRyxPQUFickcsR0FBdUIsRUFBdkJBO1VBQ0EsT0FBT08sTUFBTSxDQUFDMEYsTUFBZDtRQUhvQixJQUF4Qjs7UUFNQSxNQUFNO1VBQUM1RztRQUFELElBQVdlLE9BQWpCO1FBQ0EsTUFBTVIsTUFBTSxHQUFHWSxvQkFBQ25CLE1BQURtQixFQUFPO1VBQUN5RCxHQUFHLEVBQUMsU0FBTDtVQUFjLEdBQUsxRTtRQUFuQixDQUFQaUIsQ0FBZjtRQUNBeUYsTUFBTSxJQUFJRixRQUFRLENBQUNuQyxJQUFUbUMsQ0FBY25HLE1BQWRtRyxDQUFWRTtRQUVBLE9BQVF6RiwwQ0FBR3VGLFFBQUh2RixDQUFSO01BQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O01DdEJLLE1BQU9ILE9BQVAsQ0FBYztRQUNoQjs7UUFDVSxJQUFOaEIsTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFMLENBQWFBLE1BQXBCO1FBSFksRUFNaEI7OztRQUNBK0IsT0FBTyxHQUFHLE1BQVksS0FBSyxDQUFwQjs7UUFFUGtGLFlBQVlqSCxNQUFaaUgsRUFBeUM7VUFDckMsS0FBSyxPQUFMLEdBQWVqSCxNQUFmO1FBQ0g7O01BWGUiLCJuYW1lcyI6WyJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ3cmFwcGVyIiwiV3JhcHBlciIsInAiLCJzdHlsZXMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJSZWFjdERPTSIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwic2hhZG93Um9vdCIsInJlZnJlc2giLCJjaGFuZ2VkIiwiaW5pdGlhbGlzZSIsInJlYWN0RXZlbnRzIiwiZGl2ZXJnZW50TmF0aXZlRXZlbnRzIiwib25Eb3VibGVDbGljayIsIm1pbWlja2VkUmVhY3RFdmVudHMiLCJvbklucHV0Iiwib25Gb2N1c091dCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwicHJveHlIYW5kbGVycyIsImdldCIsInRhcmdldCIsInByb3AiLCJfcmVjZWl2ZXIiLCJfcmVhY3RDdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJGdW5jdGlvbiIsImJpbmQiLCJyZXRhcmdldEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsInJlYWN0RXZlbnROYW1lIiwibmF0aXZlRXZlbnROYW1lIiwiZ2V0TmF0aXZlRXZlbnROYW1lIiwicmV0YXJnZXRFdmVudCIsImV2ZW50IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInByb3h5IiwiUHJveHkiLCJpIiwiZWwiLCJyZWFjdENvbXBvbmVudCIsImZpbmRSZWFjdENvbXBvbmVudCIsImV2ZW50SGFuZGxlcnMiLCJmaW5kUmVhY3RFdmVudEhhbmRsZXJzIiwiZmluZFJlYWN0UHJvcHMiLCJkaXNwYXRjaEV2ZW50IiwiY2FuY2VsQnViYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbSIsImZpbmRSZWFjdFByb3BlcnR5IiwicHJvcGVydHlQcmVmaXgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJtZW1vaXplZFByb3BzIiwiX2N1cnJlbnRFbGVtZW50IiwiZXZlbnRUeXBlIiwiY29tcG9uZW50UHJvcHMiLCJwZXJzaXN0IiwiaXNQZXJzaXN0ZW50IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidGFnTmFtZSIsImRvY3VtZW50Iiwid2luZG93IiwicGFyZW50RWxlbWVudCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIm9ubG9hZGVkIiwiZWxlbWVudHMiLCJTdHlsZXMiLCJsb2FkZWQiLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci50cyIsInJldGFyZ2V0LWV2ZW50cy50cyIsInN0eWxlcy50c3giLCJ3aWRnZXQudHN4Iiwid3JhcHBlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19