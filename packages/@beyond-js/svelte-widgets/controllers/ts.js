define(["exports", "@beyond-js/widgets/controller/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.SvelteWidgetController = _exports2.PageSvelteWidgetController = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/svelte-widgets/controllers/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1451036233,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SvelteWidgetController = void 0;

      var _ts = require("@beyond-js/widgets/controller/ts");
      /*bundle*/


      class SvelteWidgetController extends _ts.WidgetClientController {
        _mount(props) {
          const root = this.widget.shadowRoot;
          const hydrate = !!root.children.length;
          new this.Widget({
            target: root,
            hydrate,
            props
          });
        }

        mount() {
          this._mount({
            widget: this.widget,
            attributes: this.attributes,
            component: this.widget,
            store: this.store
          });
        }

        unmount() {}

      }

      exports.SvelteWidgetController = SvelteWidgetController;
    }
  });
  /**********************
  INTERNAL MODULE: ./page
  **********************/

  ims.set('./page', {
    hash: 523105472,
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

        unmount() {}

        async initialise() {
          this.#uri = new _ts.PageURI({
            widget: this.widget
          });
          await super.initialise();
        }

      }

      exports.PageSvelteWidgetController = PageSvelteWidgetController;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.SvelteWidgetController = require('./controller').SvelteWidgetController;
    _exports.PageSvelteWidgetController = require('./page').PageSvelteWidgetController;
  };

  let SvelteWidgetController, PageSvelteWidgetController; // Module exports

  _exports2.PageSvelteWidgetController = PageSvelteWidgetController;
  _exports2.SvelteWidgetController = SvelteWidgetController;

  __pkg.exports.process = function (require) {
    _exports2.SvelteWidgetController = SvelteWidgetController = require('./controller').SvelteWidgetController;
    _exports2.PageSvelteWidgetController = PageSvelteWidgetController = require('./page').PageSvelteWidgetController;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});