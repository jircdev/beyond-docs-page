define(["exports", "@beyond-js/kernel/bundle", "vue", "@beyond-js/widgets/controller"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.VueWidgetController = _exports.PageVueWidgetController = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/vue-widgets/controllers",
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["vue", dependency_1], ["@beyond-js/widgets/controller", dependency_2]]));
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
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 2151545984,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageVueWidgetController = void 0;

      var _controller = require("./controller");

      var _controller2 = require("@beyond-js/widgets/controller");
      /*bundle*/


      class PageVueWidgetController extends _controller.VueWidgetController {
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

      exports.PageVueWidgetController = PageVueWidgetController;
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
  }, {
    "im": "./page",
    "from": "PageVueWidgetController",
    "name": "PageVueWidgetController"
  }];
  let VueWidgetController, PageVueWidgetController; // Module exports

  _exports.PageVueWidgetController = PageVueWidgetController;
  _exports.VueWidgetController = VueWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'VueWidgetController') && (_exports.VueWidgetController = VueWidgetController = require ? require('./controller').VueWidgetController : value);
    (require || prop === 'PageVueWidgetController') && (_exports.PageVueWidgetController = PageVueWidgetController = require ? require('./page').PageVueWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});