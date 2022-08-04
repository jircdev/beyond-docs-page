define(["exports", "module", "@beyond-js/kernel/bundle", "svelte@3.48.0/internal", "@beyond-js/widgets/controller"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.SvelteWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/svelte-widgets/base",
    "bundle": "code"
  }, __url).package();

  ;
  externals.register(new Map([["svelte/internal", dependency_1]]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./styles.svelte
  *******************************/

  ims.set('./styles.svelte', {
    hash: 2078021496,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _internal = require("svelte/internal");
      /* generated by Svelte v3.49.0 */


      function get_each_context(ctx, list, i) {
        const child_ctx = ctx.slice();
        child_ctx[2] = list[i];
        return child_ctx;
      } // (5:0) {#each [...styles.resources] as url}


      function create_each_block(ctx) {
        let link;
        let link_href_value;
        let mounted;
        let dispose;
        return {
          c() {
            link = (0, _internal.element)("link");
            (0, _internal.attr)(link, "href", link_href_value =
            /*url*/
            ctx[2]);
            (0, _internal.attr)(link, "rel", "stylesheet");
          },

          m(target, anchor) {
            (0, _internal.insert)(target, link, anchor);

            if (!mounted) {
              dispose = (0, _internal.listen)(link, "load",
              /*load_handler*/
              ctx[1]);
              mounted = true;
            }
          },

          p(ctx, dirty) {
            if (dirty &
            /*styles*/
            1 && link_href_value !== (link_href_value =
            /*url*/
            ctx[2])) {
              (0, _internal.attr)(link, "href", link_href_value);
            }
          },

          d(detaching) {
            if (detaching) (0, _internal.detach)(link);
            mounted = false;
            dispose();
          }

        };
      }

      function create_fragment(ctx) {
        let each_1_anchor;
        let each_value = [...
        /*styles*/
        ctx[0].resources];
        let each_blocks = [];

        for (let i = 0; i < each_value.length; i += 1) {
          each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
        }

        return {
          c() {
            for (let i = 0; i < each_blocks.length; i += 1) {
              each_blocks[i].c();
            }

            each_1_anchor = (0, _internal.empty)();
          },

          m(target, anchor) {
            for (let i = 0; i < each_blocks.length; i += 1) {
              each_blocks[i].m(target, anchor);
            }

            (0, _internal.insert)(target, each_1_anchor, anchor);
          },

          p(ctx, [dirty]) {
            if (dirty &
            /*styles*/
            1) {
              each_value = [...
              /*styles*/
              ctx[0].resources];
              let i;

              for (i = 0; i < each_value.length; i += 1) {
                const child_ctx = get_each_context(ctx, each_value, i);

                if (each_blocks[i]) {
                  each_blocks[i].p(child_ctx, dirty);
                } else {
                  each_blocks[i] = create_each_block(child_ctx);
                  each_blocks[i].c();
                  each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                }
              }

              for (; i < each_blocks.length; i += 1) {
                each_blocks[i].d(1);
              }

              each_blocks.length = each_value.length;
            }
          },

          i: _internal.noop,
          o: _internal.noop,

          d(detaching) {
            (0, _internal.destroy_each)(each_blocks, detaching);
            if (detaching) (0, _internal.detach)(each_1_anchor);
          }

        };
      }

      function instance($$self, $$props, $$invalidate) {
        let {
          styles
        } = $$props;

        const load_handler = url => {
          styles.onloaded(url);
        };

        $$self.$$set = $$props => {
          if ('styles' in $$props) $$invalidate(0, styles = $$props.styles);
        };

        return [styles, load_handler];
      }

      class Component extends _internal.SvelteComponent {
        constructor(options) {
          super();
          (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
            styles: 0
          });
        }

      }

      var _default = Component;
      exports.default = _default;
    }
  });
  /*******************************
  INTERNAL MODULE: ./widget.svelte
  *******************************/

  ims.set('./widget.svelte', {
    hash: 3039970783,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _internal = require("svelte/internal");

      var _styles = require("./styles.svelte");
      /* generated by Svelte v3.49.0 */


      function create_if_block(ctx) {
        let switch_instance;
        let switch_instance_anchor;
        let current;
        const switch_instance_spread_levels = [
        /*props*/
        ctx[1]];
        var switch_value =
        /*Widget*/
        ctx[3];

        function switch_props(ctx) {
          let switch_instance_props = {};

          for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
            switch_instance_props = (0, _internal.assign)(switch_instance_props, switch_instance_spread_levels[i]);
          }

          return {
            props: switch_instance_props
          };
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
        }

        return {
          c() {
            if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
            switch_instance_anchor = (0, _internal.empty)();
          },

          m(target, anchor) {
            if (switch_instance) {
              (0, _internal.mount_component)(switch_instance, target, anchor);
            }

            (0, _internal.insert)(target, switch_instance_anchor, anchor);
            current = true;
          },

          p(ctx, dirty) {
            const switch_instance_changes = dirty &
            /*props*/
            2 ? (0, _internal.get_spread_update)(switch_instance_spread_levels, [(0, _internal.get_spread_object)(
            /*props*/
            ctx[1])]) : {};

            if (switch_value !== (switch_value =
            /*Widget*/
            ctx[3])) {
              if (switch_instance) {
                (0, _internal.group_outros)();
                const old_component = switch_instance;
                (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
                  (0, _internal.destroy_component)(old_component, 1);
                });
                (0, _internal.check_outros)();
              }

              if (switch_value) {
                switch_instance = new switch_value(switch_props(ctx));
                (0, _internal.create_component)(switch_instance.$$.fragment);
                (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
                (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
              } else {
                switch_instance = null;
              }
            } else if (switch_value) {
              switch_instance.$set(switch_instance_changes);
            }
          },

          i(local) {
            if (current) return;
            if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
            current = true;
          },

          o(local) {
            if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
            current = false;
          },

          d(detaching) {
            if (detaching) (0, _internal.detach)(switch_instance_anchor);
            if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
          }

        };
      }

      function create_fragment(ctx) {
        let styles_1;
        let t;
        let if_block_anchor;
        let current;
        styles_1 = new _styles.default({
          props: {
            styles:
            /*styles*/
            ctx[0]
          }
        });
        let if_block =
        /*loaded*/
        ctx[2] && create_if_block(ctx);
        return {
          c() {
            (0, _internal.create_component)(styles_1.$$.fragment);
            t = (0, _internal.space)();
            if (if_block) if_block.c();
            if_block_anchor = (0, _internal.empty)();
          },

          m(target, anchor) {
            (0, _internal.mount_component)(styles_1, target, anchor);
            (0, _internal.insert)(target, t, anchor);
            if (if_block) if_block.m(target, anchor);
            (0, _internal.insert)(target, if_block_anchor, anchor);
            current = true;
          },

          p(ctx, [dirty]) {
            const styles_1_changes = {};
            if (dirty &
            /*styles*/
            1) styles_1_changes.styles =
            /*styles*/
            ctx[0];
            styles_1.$set(styles_1_changes);

            if (
            /*loaded*/
            ctx[2]) {
              if (if_block) {
                if_block.p(ctx, dirty);

                if (dirty &
                /*loaded*/
                4) {
                  (0, _internal.transition_in)(if_block, 1);
                }
              } else {
                if_block = create_if_block(ctx);
                if_block.c();
                (0, _internal.transition_in)(if_block, 1);
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
              }
            } else if (if_block) {
              (0, _internal.group_outros)();
              (0, _internal.transition_out)(if_block, 1, 1, () => {
                if_block = null;
              });
              (0, _internal.check_outros)();
            }
          },

          i(local) {
            if (current) return;
            (0, _internal.transition_in)(styles_1.$$.fragment, local);
            (0, _internal.transition_in)(if_block);
            current = true;
          },

          o(local) {
            (0, _internal.transition_out)(styles_1.$$.fragment, local);
            (0, _internal.transition_out)(if_block);
            current = false;
          },

          d(detaching) {
            (0, _internal.destroy_component)(styles_1, detaching);
            if (detaching) (0, _internal.detach)(t);
            if (if_block) if_block.d(detaching);
            if (detaching) (0, _internal.detach)(if_block_anchor);
          }

        };
      }

      function instance($$self, $$props, $$invalidate) {
        let {
          styles
        } = $$props;
        let {
          wrapper
        } = $$props;
        let {
          holder
        } = $$props;
        let {
          props
        } = $$props; // Check for styles to be loaded

        let {
          loaded
        } = styles;
        !styles.loaded && styles.ready.then(() => {
          $$invalidate(4, holder.style.display = '', holder);
          $$invalidate(2, loaded = true);
        });
        const {
          Widget
        } = wrapper;

        $$self.$$set = $$props => {
          if ('styles' in $$props) $$invalidate(0, styles = $$props.styles);
          if ('wrapper' in $$props) $$invalidate(5, wrapper = $$props.wrapper);
          if ('holder' in $$props) $$invalidate(4, holder = $$props.holder);
          if ('props' in $$props) $$invalidate(1, props = $$props.props);
        };

        return [styles, props, loaded, Widget, holder, wrapper];
      }

      class Component extends _internal.SvelteComponent {
        constructor(options) {
          super();
          (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
            styles: 0,
            wrapper: 5,
            holder: 4,
            props: 1
          });
        }

      }

      var _default = Component;
      exports.default = _default;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2626473437,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SvelteWidgetController = void 0;

      var _controller = require("@beyond-js/widgets/controller");

      var _wrapper = require("./wrapper");
      /*bundle*/


      class SvelteWidgetController extends _controller.WidgetClientController {
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
          const hydrate = !!holder.children.length;

          try {
            const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
            const p = {
              wrapper,
              props,
              styles: this.styles,
              holder: this.widget.holder
            };

            const Widget = require('./widget.svelte').default;

            new Widget({
              target: holder,
              hydrate,
              props: p
            });
          } catch (exc) {
            console.log(`Error rendering widget "${this.widget.localName}":`);
            console.log(exc.stack);
          }
        }

        unmount() {}

        refresh() {
          this.#wrapper.changed();
        }

      }

      exports.SvelteWidgetController = SvelteWidgetController;
    }
  });
  /*************************
  INTERNAL MODULE: ./wrapper
  *************************/

  ims.set('./wrapper', {
    hash: 747229565,
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
    "from": "SvelteWidgetController",
    "name": "SvelteWidgetController"
  }];
  let SvelteWidgetController; // Module exports

  _exports.SvelteWidgetController = SvelteWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'SvelteWidgetController') && (_exports.SvelteWidgetController = SvelteWidgetController = require ? require('./controller').SvelteWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBUCxFQUFZO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSwyQkFBMkIsS0FBS1YsTUFBTCxDQUFZWSxTQUFTLElBQTVERjtZQUNBQSxPQUFPLENBQUNDLEdBQVJELENBQVlELEdBQUcsQ0FBQ0ksS0FBaEJIO1VBQ0g7UUFDSjs7UUFFREksT0FBTyxJQUNOOztRQUVEQyxPQUFPO1VBQ0gsS0FBSyxRQUFMLENBQWNDLE9BQWQ7UUFDSDs7TUFqQytEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DRjlELE1BQU9YLE9BQVAsQ0FBYztRQUNoQjs7UUFDVSxJQUFOYixNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQUwsQ0FBYUEsTUFBcEI7UUFIWSxFQU1oQjs7O1FBQ0F3QixPQUFPLEdBQUcsTUFBWSxLQUFLLENBQXBCOztRQUVQQyxZQUFZekIsTUFBWnlCLEVBQTBDO1VBQ3RDLEtBQUssT0FBTCxHQUFlekIsTUFBZjtRQUNIOztNQVhlIiwibmFtZXMiOlsiY3R4IiwidGFyZ2V0IiwibGluayIsImFuY2hvciIsInJlc291cmNlcyIsImxlbmd0aCIsImkiLCJzdHlsZXMiLCIkJHByb3BzIiwidXJsIiwib25sb2FkZWQiLCJjcmVhdGVfaWZfYmxvY2siLCJ3cmFwcGVyIiwiaG9sZGVyIiwicHJvcHMiLCJsb2FkZWQiLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJXaWRnZXQiLCJTdmVsdGVXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIm1vdW50IiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJzdG9yZSIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsIldyYXBwZXIiLCJwIiwicmVxdWlyZSIsImRlZmF1bHQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiLiIsImNvbnRyb2xsZXIudHMiLCJ3cmFwcGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+aW1wb3J0IFN0eWxlcyBmcm9tICcuL3N0eWxlcy5zdmVsdGUnO1xyXG5leHBvcnQgbGV0IHN0eWxlcztcclxuZXhwb3J0IGxldCB3cmFwcGVyO1xyXG5leHBvcnQgbGV0IGhvbGRlcjtcclxuZXhwb3J0IGxldCBwcm9wcztcclxuLy8gQ2hlY2sgZm9yIHN0eWxlcyB0byBiZSBsb2FkZWRcclxubGV0IHsgbG9hZGVkIH0gPSBzdHlsZXM7XHJcbiFzdHlsZXMubG9hZGVkICYmIHN0eWxlcy5yZWFkeS50aGVuKCgpID0+IHtcclxuICAgIGhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBsb2FkZWQgPSB0cnVlO1xyXG59KTtcclxuY29uc3QgeyBXaWRnZXQgfSA9IHdyYXBwZXI7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuPC9zY3JpcHQ+XHJcblxyXG48U3R5bGVzIHN0eWxlcz17c3R5bGVzfS8+XHJcblxyXG57I2lmIGxvYWRlZH1cclxuICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e1dpZGdldH0gey4uLnByb3BzfS8+XHJcbnsvaWZ9XHJcbiIsbnVsbCxudWxsXX0=