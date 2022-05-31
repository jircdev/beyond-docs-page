define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/bundle/ts", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/styles/ts", "@beyond-js/kernel/routing/ts", "@beyond-js/widgets/routing/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.hmr = _exports2.WidgetServerController = _exports2.WidgetControllerBase = _exports2.WidgetClientController = _exports2.WidgetAttributes = _exports2.PageURI = _exports2.IWidgetStore = _exports2.IWidgetRendered = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/controller/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 1170075058,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetAttributes = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class WidgetAttributes extends Map {
        // The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
        #widget;
        #events = new _ts.Events();
        on = (event, listener) => this.#events.on(event, listener);
        off = (event, listener) => this.#events.off(event, listener);

        constructor(widget) {
          super();
          this.#widget = widget;
          let attrs = widget.specs.attrs;
          attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
        }

        attributeChangedCallback(name, old, value) {
          this.set(name, value);
          this.#events.trigger('change');
          this.#events.trigger(`${name}:change`, value);
        }

      }

      exports.WidgetAttributes = WidgetAttributes;
    }
  });
  /************************
  INTERNAL MODULE: ./client
  ************************/

  ims.set('./client', {
    hash: 3699754731,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetClientController = void 0;

      var _controller = require("./controller");

      var _attributes = require("./attributes");

      var _ts = require("@beyond-js/kernel/bundle/ts");
      /*bundle*/

      /**
       * The client widget react controller
       */


      class WidgetClientController extends _controller.WidgetControllerBase {
        /**
         * The beyond widget.
         * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
         *
         * @type {HTMLElement} The beyond widget
         * @private
         */
        #widget;

        get widget() {
          return this.#widget;
        }

        #store;

        get store() {
          return this.#store;
        }

        #attributes;

        get attributes() {
          return this.#attributes;
        }

        constructor(widget) {
          super({
            widget
          });
          this.#widget = widget;
          this.#attributes = new _attributes.WidgetAttributes(widget);
        }

        render() {
          try {
            this.mount();
          } catch (exc) {
            console.log(`Error mounting widget controller "${this.#widget.localName}":`);
            console.log(exc.stack);
          }
        }

        refresh() {
          this.unmount();
          this.render();
        }

        #refresh = () => this.refresh();

        async initialise() {
          if (!this.Widget) {
            throw new Error(`Widget "${this.#widget.localName}" does not expose a Widget property`);
          }

          this.#store = this.createStore?.(); // Type check in widget is disabled due to the cyclical reference between controller and widget

          const prerender = this.#widget.ssr.prerender;

          if (prerender) {
            const cached = prerender?.store;
            await this.#store?.hydrate(cached);
          }

          this.#store?.fetch?.();
          this.render(); // Attach to hmr changes of bundle of the widget controller

          const pkg = _ts.instances.get(this.specs.id).package();

          pkg.hmr.on('change', this.#refresh);
        }

        attributeChangedCallback(name, old, value) {
          this.#attributes.attributeChangedCallback(name, old, value);
        }

      }

      exports.WidgetClientController = WidgetClientController;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2338512748,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetControllerBase = void 0;

      var _ts = require("@beyond-js/widgets/render/ts");

      var _ts2 = require("@beyond-js/kernel/styles/ts");
      /*bundle*/


      class WidgetControllerBase {
        #specs;

        get specs() {
          return this.#specs;
        }

        get element() {
          return this.#specs.name;
        }

        get is() {
          return this.#specs.is;
        }

        get route() {
          return this.#specs.route;
        }

        get layout() {
          return this.#specs.layout;
        }

        #styles;

        get styles() {
          return this.#styles;
        } // The widget component to be mounted should be specified by the module
        // (can be a React, Svelte, Vue, ... component)


        get Widget() {
          return;
        }

        createStore(language) {
          return void language;
        }
        /**
         * Controller base constructor
         *
         * @param {} specs
         * @param {HTMLElement} widget
         * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
         * @protected
         */


        constructor({
          specs,
          widget
        }) {
          if (!specs) {
            const {
              localName
            } = widget;
            if (!_ts.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
            specs = _ts.widgets.get(localName);
          }

          this.#specs = specs;
          this.#styles = new _ts2.DependenciesStyles(this.specs.id);
        }

      }

      exports.WidgetControllerBase = WidgetControllerBase;
    }
  });
  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 2534748560,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetServerController = void 0;

      var _controller = require("./controller");
      /*bundle*/

      /**
       * The SSR widget react controller
       */


      class WidgetServerController extends _controller.WidgetControllerBase {}

      exports.WidgetServerController = WidgetServerController;
    }
  });
  /*********************
  INTERNAL MODULE: ./uri
  *********************/

  ims.set('./uri', {
    hash: 4207160154,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageURI = void 0;

      var _ts = require("@beyond-js/widgets/routing/ts");
      /*bundle*/


      class PageURI {
        #uri;
        #route;

        get uri() {
          return this.#uri;
        }

        get pathname() {
          return this.#uri.pathname;
        }

        get search() {
          return this.#uri.search;
        }

        get qs() {
          return this.#uri.qs;
        }

        get hash() {
          return this.#uri.hash;
        }

        get vars() {
          return this.#route.vars;
        }

        constructor({
          widget,
          uri,
          route
        }) {
          if (widget) {
            const child = widget.getAttribute('data-child-id');

            const page = _ts.manager.pages.instance(child);

            if (!page) {
              throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
            }

            ({
              uri,
              route
            } = page);
          }

          this.#uri = uri;
          this.#route = route;
        }

      }

      exports.PageURI = PageURI;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.WidgetAttributes = require('./attributes').WidgetAttributes;
    _exports.WidgetClientController = require('./client').WidgetClientController;
    _exports.IWidgetStore = require('./controller').IWidgetStore;
    _exports.WidgetControllerBase = require('./controller').WidgetControllerBase;
    _exports.IWidgetRendered = require('./ssr').IWidgetRendered;
    _exports.WidgetServerController = require('./ssr').WidgetServerController;
    _exports.PageURI = require('./uri').PageURI;
  };

  let WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController, PageURI; // Module exports

  _exports2.PageURI = PageURI;
  _exports2.WidgetServerController = WidgetServerController;
  _exports2.IWidgetRendered = IWidgetRendered;
  _exports2.WidgetControllerBase = WidgetControllerBase;
  _exports2.IWidgetStore = IWidgetStore;
  _exports2.WidgetClientController = WidgetClientController;
  _exports2.WidgetAttributes = WidgetAttributes;

  __pkg.exports.process = function (require) {
    _exports2.WidgetAttributes = WidgetAttributes = require('./attributes').WidgetAttributes;
    _exports2.WidgetClientController = WidgetClientController = require('./client').WidgetClientController;
    _exports2.IWidgetStore = IWidgetStore = require('./controller').IWidgetStore;
    _exports2.WidgetControllerBase = WidgetControllerBase = require('./controller').WidgetControllerBase;
    _exports2.IWidgetRendered = IWidgetRendered = require('./ssr').IWidgetRendered;
    _exports2.WidgetServerController = WidgetServerController = require('./ssr').WidgetServerController;
    _exports2.PageURI = PageURI = require('./uri').PageURI;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});