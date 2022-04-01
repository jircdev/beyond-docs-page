define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/routing/ts"], function (_exports2, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.SvelteWidgetController = _exports2.PageSvelteWidgetController = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  dependencies.set('@beyond-js/kernel/routing/ts', dependency_1);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond-js/kernel/svelte-widget/ts', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  modules.set('./controller', {
    hash: 3478298819,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SvelteWidgetController = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class SvelteWidgetController extends _ts.BeyondWidgetController {
        _mount(props) {
          const hydrate = this.hydratable;
          new this.Widget({
            target: this.body,
            hydrate,
            props
          });
        }

        mount() {
          this._mount({
            component: this.component,
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

  modules.set('./page', {
    hash: 2731159955,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageSvelteWidgetController = void 0;

      var _ts = require("@beyond-js/kernel/routing/ts");

      var _controller = require("./controller");
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
            component: this.component,
            store: this.store
          });
        }

        unmount() {}

        initialise() {
          const child = this.component.getAttribute('data-child-id');
          this.#uri = child ? _ts.routing.manager.pages.find(child).uri : void 0;
          super.initialise();
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
    this.on = (event, listener) => void 0;

    this.off = (event, listener) => void 0;
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(modules);
});