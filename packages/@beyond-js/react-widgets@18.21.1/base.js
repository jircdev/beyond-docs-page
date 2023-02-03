System.register(["@beyond-js/kernel@0.1.7/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/styles","@beyond-js/widgets@0.1.2/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.2"],["@beyond-js/react-widgets","18.21.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/controller', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-widgets/base.18.21.1.js
var base_18_21_1_exports = {};
__export(base_18_21_1_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_18_21_1_exports);

// node_modules/@beyond-js/react-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.2/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.21.1/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2569255018,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
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
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 90867181,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
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
var ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS4xOC4yMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ3cmFwcGVyIiwiV3JhcHBlciIsInN0eWxlcyIsInAiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJyb290IiwicmVuZGVyIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsInJlZnJlc2giLCJjaGFuZ2VkIiwiZXhwb3J0cyIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsImVsZW1lbnRzIiwicHVzaCIsIlN0eWxlcyIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFaUIsTUFDRkgsK0JBQThCSSxtQ0FBc0I7TUFDL0Q7TUFDQTtNQUdBLElBQUlDLFNBQU07UUFDTixPQUFPO01BQ1g7TUFFQUMsTUFBTUMsT0FBMkI7UUFDN0IsSUFBSSxDQUFDLEtBQUtGLFFBQVE7VUFDZCxPQUFPO1lBQUNHLFFBQVEsQ0FBQyxXQUFXLEtBQUtDLHlDQUF5QztVQUFDOztRQUcvRUYsUUFBUUcsT0FBT0MsT0FBTztVQUNsQkMsUUFBUSxLQUFLQTtVQUNiQyxZQUFZLEtBQUtBO1VBQ2pCQyxXQUFXLEtBQUtGO1VBQ2hCRyxPQUFPLEtBQUtBO1dBQ2JSLFFBQVFBLFFBQVEsRUFBRTtRQUVyQixNQUFNUyxTQUFnQyxLQUFLSixPQUFRSTtRQUNuRCxNQUFNQyxVQUFVLENBQUMsQ0FBQ0QsT0FBT0UsU0FBU0M7UUFHbEMsSUFBSTtVQUNBLE1BQU1DLFVBQVUsS0FBSyxXQUFXLElBQUlDLGlCQUFRLElBQUk7VUFDaEQsTUFBTTtZQUFDQztZQUFRVjtVQUFNLElBQUk7VUFDekIsTUFBTTtZQUFDSTtVQUFNLElBQVVKO1VBQ3ZCLE1BQU1XLElBQUk7WUFBQ0g7WUFBU2I7WUFBT2U7WUFBUU47WUFBUUM7VUFBTztVQUNsRCxNQUFNUixVQUFVZSxNQUFNQyxjQUFjcEIsaUJBQVFrQixDQUFDO1VBRTdDLElBQUlOLFNBQVM7WUFDVCxLQUFLLFNBQVEsd0JBQVlELFNBQVFQLE9BQU87aUJBQ3JDO1lBQ0gsTUFBTWlCLE9BQU8sS0FBSyxTQUFRLHVCQUFXVixPQUFNO1lBQzNDVSxLQUFLQyxPQUFPbEIsT0FBTzs7aUJBRWxCbUIsS0FBUDtVQUNFQyxRQUFRQyxJQUFJLDJCQUEyQixLQUFLbEIsT0FBT21CLGFBQWE7VUFDaEVGLFFBQVFDLElBQUlGLElBQUlJLEtBQUs7O01BRTdCO01BRUFDLFVBQU87UUFDSCxLQUFLLE1BQU1BLFNBQU87TUFDdEI7TUFFQUMsVUFBTztRQUNILEtBQUssU0FBU0MsU0FBTztNQUN6Qjs7SUFDSEM7Ozs7Ozs7Ozs7OztJQzFERDtJQVFjLGtCQUFXO01BQUNkO0lBQU0sR0FBUTtNQUNwQyxNQUFNZSxLQUFLYixNQUFNYyxTQUFTLENBQUM7TUFHM0JkLE1BQU1lLFVBQVUsTUFBSztRQUNqQixNQUFNTCxVQUFVLE1BQU1HLEdBQUcsR0FBR0csUUFBUUEsT0FBTyxDQUFDO1FBQzVDbEIsT0FBT21CLEdBQUcsVUFBVVAsT0FBTztRQUMzQixPQUFPLE1BQU9aLE9BQU9vQixJQUFJLFVBQVVSLE9BQU8sS0FBSztNQUNuRCxHQUFHLEVBQUU7TUFFTCxNQUFNUyxPQUE2QixDQUFDLEdBQUdyQixPQUFPc0IsU0FBUyxFQUFFQyxJQUFJQyxPQUFNO1FBQy9ELE1BQU1DLFNBQVMsTUFBTXpCLE9BQU8wQixTQUFTRixHQUFHO1FBQ3hDLE9BQU90QjtVQUFNeUIsS0FBS0g7VUFBS0ksTUFBTUo7VUFBS0ssS0FBSTtVQUFhQyxRQUFRTDtVQUFRTSxTQUFTTjtRQUFNO01BQ3RGLENBQUM7TUFDRCxPQUFPdkIsMENBQUdtQixJQUFJO0lBQ2xCOzs7Ozs7Ozs7Ozs7SUN2QkE7SUFDQTtJQUVjLGtCQUFXO01BQUN2QjtNQUFTYjtNQUFPZTtNQUFRTjtNQUFRQztJQUFPLEdBQU07TUFDbkUsTUFBTXFDLFdBQWlDO01BQ3ZDQSxTQUFTQyxLQUFLL0Isb0JBQUNnQyxpQkFBTTtRQUFDUCxLQUFJO1FBQVMzQjtRQUFnQlYsUUFBUUwsTUFBTUs7TUFBTSxFQUFHO01BRTFFLE1BQU15QixLQUFLYixNQUFNYyxTQUFTLENBQUM7TUFDM0IsTUFBTUosVUFBVSxNQUFNRyxHQUFHLEdBQUdBLEdBQUcsS0FBSyxDQUFDO01BR3JDakIsUUFBUWUsVUFBVUQ7TUFHbEIsTUFBTWEsVUFBbUIsTUFBSztRQUMxQixDQUFDekIsT0FBT3lCLFVBQVV6QixPQUFPbUMsTUFBTUMsS0FBS3hCLE9BQU87UUFDM0NsQixPQUFPMkMsTUFBTUMsVUFBVTtRQUN2QixPQUFPdEMsT0FBT3lCO01BQ2xCLElBQUM7TUFFRCxNQUFNO1FBQUMxQztNQUFNLElBQUllO01BQ2pCLE1BQU1SLFNBQVNZLG9CQUFDbkIsUUFBTTtRQUFDNEMsS0FBSTtRQUFRLEdBQUsxQztNQUFLO01BQzdDLENBQUNVLFdBQVc4QixXQUFXTyxTQUFTQyxLQUFLM0MsTUFBTTtNQUUzQyxPQUFRWSwwQ0FBRzhCLFFBQVE7SUFDdkI7Ozs7Ozs7Ozs7OztJQ3RCTSxNQUFPakMsUUFBTztNQUNoQjtNQUNBLElBQUloQixTQUFNO1FBQ04sT0FBTyxLQUFLLFFBQVFBO01BQ3hCO01BR0E4QixVQUFVLE1BQVk7TUFFdEIwQixZQUFZeEQsUUFBNkI7UUFDckMsS0FBSyxVQUFVQTtNQUNuQjs7SUFDSCtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZG9jdW1lbnRhdGlvbi9vdXQifQ==