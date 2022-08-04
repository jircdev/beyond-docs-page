define(["exports", "module", "@beyond-js/kernel/bundle", "vue@3.2.37", "@beyond-js/widgets/controller"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.VueWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/vue-widgets/base",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["vue", dependency_1]]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./styles.render
  *******************************/

  ims.set('./styles.render', {
    hash: 3498848839,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.render = render;

      var _vue = require("vue");

      const _hoisted_1 = ["href"];

      function render(_ctx, _cache) {
        return (0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(_ctx.resources, url => {
          return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("link", {
            href: url,
            rel: "stylesheet",
            onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onloaded && _ctx.onloaded(...args))
          }, null, 40
          /* PROPS, HYDRATE_EVENTS */
          , _hoisted_1);
        }), 256
        /* UNKEYED_FRAGMENT */
        );
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./styles.script
  *******************************/

  ims.set('./styles.script', {
    hash: 3498848839,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = {
        props: ['styles'],
        methods: {
          onloaded(url) {
            this.styles.onloaded(url);
          }

        },

        data() {
          const data = {
            resources: this.styles.resources
          };
          this.styles.on('change', () => {
            this.resources = this.styles.resources;
          });
          return data;
        }

      }; //# sourceMappingURL=styles.vue.js.map

      exports.default = _default;
    }
  });
  /****************************
  INTERNAL MODULE: ./styles.vue
  ****************************/

  ims.set('./styles.vue', {
    hash: 3498848839,
    creator: function (require, exports) {
      const script = require('./styles.script').default;

      const {
        render
      } = require('./styles.render');

      script.render = render;
      script.__file = 'styles.vue';
      script.__scopeId = 'styles';
      exports.default = script;
    }
  });
  /*******************************
  INTERNAL MODULE: ./widget.render
  *******************************/

  ims.set('./widget.render', {
    hash: 4238036114,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.render = render;

      var _vue = require("vue");

      function render(_ctx, _cache) {
        const _component_Styles = (0, _vue.resolveComponent)("Styles");

        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, null, [(0, _vue.createVNode)(_component_Styles, {
          styles: _ctx.styles
        }, null, 8
        /* PROPS */
        , ["styles"]), _ctx.ready ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.widget()), (0, _vue.mergeProps)({
          key: 0,
          key: _ctx.version
        }, this.props), null, 16
        /* FULL_PROPS */
        )) : (0, _vue.createCommentVNode)("v-if", true)], 64
        /* STABLE_FRAGMENT */
        );
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./widget.script
  *******************************/

  ims.set('./widget.script', {
    hash: 4238036114,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _styles = require("./styles.vue");

      var _default = {
        props: ['wrapper', 'holder', 'props', 'styles'],
        components: {
          Styles: _styles.default
        },
        methods: {
          widget() {
            return this.wrapper.Widget;
          }

        },

        data() {
          const {
            styles
          } = this;
          !styles.loaded && styles.ready.then(() => {
            this.holder.style.display = '';
            this.ready = true;
          });
          const data = {
            version: this.wrapper.version,
            ready: styles.loaded
          };

          this.wrapper.changed = () => this.version = this.wrapper.version;

          return data;
        }

      }; //# sourceMappingURL=widget.vue.js.map

      exports.default = _default;
    }
  });
  /****************************
  INTERNAL MODULE: ./widget.vue
  ****************************/

  ims.set('./widget.vue', {
    hash: 4238036114,
    creator: function (require, exports) {
      const script = require('./widget.script').default;

      const {
        render
      } = require('./widget.render');

      script.render = render;
      script.__file = 'widget.vue';
      script.__scopeId = 'widget';
      exports.default = script;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2023529447,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.VueWidgetController = void 0;

      var _controller = require("@beyond-js/widgets/controller");

      var _vue = require("vue");

      var _wrapper = require("./wrapper");
      /*bundle*/


      class VueWidgetController extends _controller.WidgetClientController {
        #wrapper;

        mount(props) {
          if (!this.Widget) {
            return {
              errors: [`Widget "${this.element}" does not export a Widget class`]
            };
          }

          props = Object.assign({
            widget: this.widget,
            attributes: this.attributes,
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

            const Widget = require('./widget.vue').default;

            const app = hydrate ? (0, _vue.createSSRApp)(Widget, p) : (0, _vue.createApp)(Widget, p);
            app.mount(holder);
          } catch (exc) {
            console.log(`Error rendering widget "${this.widget.localName}":`);
            console.log(exc.stack);
          }
        }

        unmount() {}

        refresh() {
          this.#wrapper.change();
        }

      }

      exports.VueWidgetController = VueWidgetController;
    }
  });
  /*************************
  INTERNAL MODULE: ./wrapper
  *************************/

  ims.set('./wrapper', {
    hash: 82277827,
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
        } // Property changed is overwritten by widget.vue to get notified about HMR changes


        changed = () => void 0;

        change() {
          this.#version++;
          this.changed();
        }

        #version = 0;

        get version() {
          return this.#version;
        }

        constructor(Widget) {
          this.#Widget = Widget;
        }

      }

      exports.Wrapper = Wrapper;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "VueWidgetController",
    "name": "VueWidgetController"
  }];
  let VueWidgetController; // Module exports

  _exports.VueWidgetController = VueWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'VueWidgetController') && (_exports.VueWidgetController = VueWidgetController = require ? require('./controller').VueWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFkO1FBQ0g7O01BcEM0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0gzRCxNQUFPWixPQUFQLENBQWM7UUFDaEI7O1FBQ1UsSUFBTm5CLE1BQU07VUFDTixPQUFPLEtBQUssT0FBTCxDQUFhQSxNQUFwQjtRQUhZLEVBTWhCOzs7UUFDQU0sT0FBTyxHQUFHLE1BQVksS0FBSyxDQUFwQjs7UUFFUHlCLE1BQU07VUFDRixLQUFLLFFBQUw7VUFDQSxLQUFLekIsT0FBTDtRQUNIOztRQUVELFdBQVcsQ0FBWDs7UUFDVyxJQUFQVixPQUFPO1VBQ1AsT0FBTyxLQUFLLFFBQVo7UUFDSDs7UUFFRG9DLFlBQVloQyxNQUFaZ0MsRUFBdUM7VUFDbkMsS0FBSyxPQUFMLEdBQWVoQyxNQUFmO1FBQ0g7O01BckJlIiwibmFtZXMiOlsiX0ZyYWdtZW50IiwicmVzb3VyY2VzIiwidXJsIiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIl9jdHgiLCJfaG9pc3RlZF8xIiwicHJvcHMiLCJtZXRob2RzIiwib25sb2FkZWQiLCJzdHlsZXMiLCJkYXRhIiwib24iLCJfY29tcG9uZW50X1N0eWxlcyIsInJlYWR5Iiwid2lkZ2V0Iiwia2V5IiwidmVyc2lvbiIsImNvbXBvbmVudHMiLCJTdHlsZXMiLCJ3cmFwcGVyIiwiV2lkZ2V0IiwibG9hZGVkIiwidGhlbiIsImhvbGRlciIsInN0eWxlIiwiZGlzcGxheSIsImNoYW5nZWQiLCJWdWVXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIm1vdW50IiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImF0dHJpYnV0ZXMiLCJzdG9yZSIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIldyYXBwZXIiLCJwIiwicmVxdWlyZSIsImRlZmF1bHQiLCJhcHAiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS52dWUuaHRtbCIsInN0eWxlcy52dWUiLCJ3aWRnZXQudnVlIiwiY29udHJvbGxlci50cyIsIndyYXBwZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgPFN0eWxlcyA6c3R5bGVzPVwic3R5bGVzXCIvPlxyXG4gIDxjb21wb25lbnQgdi1pZj1cInJlYWR5XCIgOmtleT1cInZlcnNpb25cIiA6aXM9XCJ3aWRnZXQoKVwiIHYtYmluZD1cInRoaXMucHJvcHNcIi8+XHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbF19