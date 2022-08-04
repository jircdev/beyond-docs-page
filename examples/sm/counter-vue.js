define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "vue@3.2.37", "@beyond-js/vue-widgets/base", "@beyond/docs/examples-sm-actions"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/examples/sm/counter-vue",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["vue", dependency_3]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-actions"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "counter-vue",
    "id": "@beyond/docs/examples/sm/counter-vue"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond/docs/examples/sm/counter-vue');
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
    hash: 1637426789,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _base = require("@beyond-js/vue-widgets/base");

      var _widget = require("./widget.vue");
      /*bundle*/


      class Controller extends _base.VueWidgetController {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUNPQSxLQUFLLEVBQUM7OztzQ0FFUCw2QkFBcUIsSUFBckIsRUFBcUIsSUFBckIsRUFBSSxjQUFKLEVBQWdCO01BQUE7TUFBaEI7OztzQ0FGSiw2QkFLTSxLQUxOLGNBS00sQ0FKSiw2QkFHTSxLQUhOLEVBR007VUFIREEsS0FBSyxFQUFDLE1BR0w7VUFIYUMsT0FBSyx5Q0FBRUMsNkJBQUY7UUFHbEIsQ0FITixHQUNFQyxVQURGLEVBRUUsNkJBQXNDLE1BQXRDLEVBQXNDLElBQXRDLEVBQU0sa0JBQWEsMEJBQUdDLFdBQUgsQ0FBbkIsRUFBNEI7UUFBQTtRQUE1QixDQUZGLEVBSUksQ0FMTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUY7O3FCQUVlO1FBQ2JDLElBQUk7VUFDRixPQUFPO1lBQ0xELE1BQU0sRUFBRTtVQURILENBQVA7UUFGVzs7UUFNYkUsT0FBTyxFQUFFO1VBQ1BDLFVBQVU7WUFDUixFQUFFLEtBQUtILE1BQVA7WUFDQSxLQUFLSSxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLSixNQUF6QjtVQUhLOztVQUtQSyxHQUFHO1lBQ0QsS0FBS0YsVUFBTDtZQUNBO1VBQ0Q7O1FBUk07TUFOSSxHOzs7Ozs7Ozs7Ozs7TUFIZjs7TUFDQTtRQUFBRztNQUFBOztNQUNBQztNQUNBQTtNQUNBQTtNQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNMQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYQyxVQURXLFNBQ1FDLHlCQURSLENBQzJCO1FBQzlCLElBQU5DLE1BQU07VUFDTixPQUFPQSxlQUFQO1FBQ0g7O01BSHVDIiwibmFtZXMiOlsiY2xhc3MiLCJvbkNsaWNrIiwiX2N0eCIsIl9ob2lzdGVkXzIiLCJyZXN1bHQiLCJkYXRhIiwibWV0aG9kcyIsImVtaXRSZXN1bHQiLCIkZW1pdCIsImFkZCIsInJlbmRlciIsInNjcmlwdCIsImV4cG9ydHMiLCJDb250cm9sbGVyIiwiVnVlV2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi9tb2R1bGVzL2V4YW1wbGVzL2NvdW50ZXIvY29tcG9uZW50cy92dWUvd2lkZ2V0L3Z1ZS90ZW1wbGF0ZS52dWUuaHRtbCIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL2NvbXBvbmVudHMvdnVlL3dpZGdldC92dWUvd2lkZ2V0LnZ1ZSIsImRvY3VtZW50YXRpb24vbW9kdWxlcy9leGFtcGxlcy9jb3VudGVyL2NvbXBvbmVudHMvdnVlL3dpZGdldC92dWUvY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBAY2xpY2s9J2FkZCc+XHJcbiAgICAgIDxoMz5WdWUgY291bnRlciA8L2gzPlxyXG4gICAgICA8c3Bhbj5jbGlja3MgaGVyZToge3sgcmVzdWx0IH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiIsbnVsbCxudWxsXX0=