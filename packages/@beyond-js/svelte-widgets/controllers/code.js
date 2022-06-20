define(["exports", "svelte/internal", "@beyond-js/widgets/controller/ts", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.SvelteWidgetController = _exports.PageSvelteWidgetController = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/svelte-widgets/controllers/code").package();

  externals.register(new Map([["svelte/internal", dependency_0]]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./styles.svelte
  *******************************/

  ims.set('./styles.svelte', {
    hash: 3411366809,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _internal = require("svelte/internal");

      var _ts = require("@beyond-js/widgets/render/ts");
      /* generated by Svelte v3.48.0 */


      function get_each_context(ctx, list, i) {
        const child_ctx = ctx.slice();
        child_ctx[2] = list[i];
        return child_ctx;
      } // (6:0) {#each [...styles.resources] as url}


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
    hash: 3371164969,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _internal = require("svelte/internal");

      var _styles = require("./styles.svelte");
      /* generated by Svelte v3.48.0 */


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
    hash: 3595844385,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SvelteWidgetController = void 0;

      var _ts = require("@beyond-js/widgets/controller/ts");

      var _wrapper = require("./wrapper");
      /*bundle*/


      class SvelteWidgetController extends _ts.WidgetClientController {
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
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 2812416059,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageSvelteWidgetController = void 0;

      var _controller = require("./controller");

      var _ts = require("@beyond-js/widgets/controller/ts");
      /*bundle*/


      class PageSvelteWidgetController extends _controller.SvelteWidgetController {
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
          this.#uri = new _ts.PageURI({
            widget: this.widget
          });
          await super.initialise();
        }

      }

      exports.PageSvelteWidgetController = PageSvelteWidgetController;
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
  }, {
    "im": "./page",
    "from": "PageSvelteWidgetController",
    "name": "PageSvelteWidgetController"
  }];
  let SvelteWidgetController, PageSvelteWidgetController; // Module exports

  _exports.PageSvelteWidgetController = PageSvelteWidgetController;
  _exports.SvelteWidgetController = SvelteWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'SvelteWidgetController') && (_exports.SvelteWidgetController = SvelteWidgetController = require ? require('./controller').SvelteWidgetController : value);
    (require || prop === 'PageSvelteWidgetController') && (_exports.PageSvelteWidgetController = PageSvelteWidgetController = require ? require('./page').PageSvelteWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});