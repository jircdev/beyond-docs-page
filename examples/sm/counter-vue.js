define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "vue", "@beyond-js/vue-widgets/controllers", "@beyond/docs/examples-sm-actions"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter-vue",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["vue", dependency_3], ["@beyond-js/vue-widgets/controllers", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-actions"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "counter-vue",
    "id": "@beyond/docs/examples/sm/counter-vue"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/examples/sm/counter-vue');

  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./widget.render
  *******************************/

  ims.set('./widget.render', {
    hash: 3149916302,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.render = render;

      var _vue = require("vue");

      const _hoisted_1 = {
        class: "list"
      };

      const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("h3", null, "Vue counter ", -1
      /* HOISTED */
      );

      function render(_ctx, _cache) {
        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [(0, _vue.createElementVNode)("div", {
          class: "item",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.add && _ctx.add(...args))
        }, [_hoisted_2, (0, _vue.createElementVNode)("span", null, "clicks here: " + (0, _vue.toDisplayString)(_ctx.result), 1
        /* TEXT */
        )])]);
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./widget.script
  *******************************/

  ims.set('./widget.script', {
    hash: 3149916302,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _examplesSmActions = require("@beyond/docs/examples-sm-actions");

      var _default = {
        data() {
          return {
            result: 0
          };
        },

        methods: {
          emitResult() {
            ++this.result;
            this.$emit('input', this.result);
          },

          add() {
            this.emitResult();
            (0, _examplesSmActions.updateCount)();
          }

        }
      }; //# sourceMappingURL=widget.vue.js.map

      exports.default = _default;
    }
  });
  /****************************
  INTERNAL MODULE: ./widget.vue
  ****************************/

  ims.set('./widget.vue', {
    hash: 3149916302,
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
    hash: 921187741,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/vue-widgets/controllers");

      var _widget = require("./widget.vue");
      /*bundle*/


      class Controller extends _controllers.VueWidgetController {
        get Widget() {
          return _widget.default;
        }

      }

      exports.Controller = Controller;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});