define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/kernel/bundle/ts", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/styles/ts", "@beyond-js/kernel/routing/ts", "@beyond-js/widgets/routing/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetServerController = _exports.WidgetControllerBase = _exports.WidgetClientController = _exports.WidgetAttributes = _exports.PageURI = _exports.IWidgetStore = _exports.IWidgetRendered = void 0;

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
    hash: 1863105372,
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

        change(name, old, value) {
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
    hash: 1989965791,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetClientController = void 0;

      var _controller = require("./controller");

      var _attributes = require("./attributes");

      var _ts = require("@beyond-js/kernel/bundle/ts");

      var _ts2 = require("@beyond-js/kernel/core/ts");

      var _ts3 = require("@beyond-js/kernel/styles/ts");
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

        attributeChanged(name, old, value) {
          this.#attributes.change(name, old, value);
        }

        get styles() {
          const styles = this.#widget.styles;
          return styles;
        }

        constructor(widget) {
          super({
            widget
          });
          this.#widget = widget;
          this.#attributes = new _attributes.WidgetAttributes(widget);

          (() => {
            const styles = new _ts3.DependenciesStyles(this.specs.id);

            const links = () => {
              const links = [...styles.elements].map(style => style.href);
              links.unshift(`${_ts2.beyond.baseUrl}/global.css`);
              return links;
            };

            !this.styles.initialised && this.styles.initialise(links());
            styles.on('change', () => this.styles.update(links()));
          })();
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
        /**
         * Comes from the web component disconnectedCallback method call
         */

        disconnect() {
          this.unmount();
        }

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

      }

      exports.WidgetClientController = WidgetClientController;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 1978229391,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetControllerBase = void 0;

      var _ts = require("@beyond-js/widgets/render/ts");
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
        }

      }

      exports.WidgetControllerBase = WidgetControllerBase;
    }
  });
  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 4098901324,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetServerController = void 0;

      var _controller = require("./controller");

      var _ts = require("@beyond-js/kernel/core/ts");

      var _ts2 = require("@beyond-js/kernel/styles/ts");
      /*bundle*/

      /**
       * The SSR widget react controller
       */


      class WidgetServerController extends _controller.WidgetControllerBase {
        #styles = [];

        get styles() {
          return this.#styles;
        }

        constructor(params) {
          super(params);
          const styles = new _ts2.DependenciesStyles(this.specs.id);
          styles.elements.forEach(({
            href
          }) => this.#styles.push(href));
          const baseUrl = typeof window === 'object' ? _ts.beyond.baseUrl : '##_!baseUrl!_##';
          this.#styles.unshift(`${baseUrl}/global.css`);
        }

      }

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
  });
  __pkg.exports.descriptor = [{
    "im": "./attributes",
    "from": "WidgetAttributes",
    "name": "WidgetAttributes"
  }, {
    "im": "./client",
    "from": "WidgetClientController",
    "name": "WidgetClientController"
  }, {
    "im": "./controller",
    "from": "IWidgetStore",
    "name": "IWidgetStore"
  }, {
    "im": "./controller",
    "from": "WidgetControllerBase",
    "name": "WidgetControllerBase"
  }, {
    "im": "./ssr",
    "from": "IWidgetRendered",
    "name": "IWidgetRendered"
  }, {
    "im": "./ssr",
    "from": "WidgetServerController",
    "name": "WidgetServerController"
  }, {
    "im": "./uri",
    "from": "PageURI",
    "name": "PageURI"
  }];
  let WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController, PageURI; // Module exports

  _exports.PageURI = PageURI;
  _exports.WidgetServerController = WidgetServerController;
  _exports.IWidgetRendered = IWidgetRendered;
  _exports.WidgetControllerBase = WidgetControllerBase;
  _exports.IWidgetStore = IWidgetStore;
  _exports.WidgetClientController = WidgetClientController;
  _exports.WidgetAttributes = WidgetAttributes;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'WidgetAttributes') && (_exports.WidgetAttributes = WidgetAttributes = require ? require('./attributes').WidgetAttributes : value);
    (require || prop === 'WidgetClientController') && (_exports.WidgetClientController = WidgetClientController = require ? require('./client').WidgetClientController : value);
    (require || prop === 'IWidgetStore') && (_exports.IWidgetStore = IWidgetStore = require ? require('./controller').IWidgetStore : value);
    (require || prop === 'WidgetControllerBase') && (_exports.WidgetControllerBase = WidgetControllerBase = require ? require('./controller').WidgetControllerBase : value);
    (require || prop === 'IWidgetRendered') && (_exports.IWidgetRendered = IWidgetRendered = require ? require('./ssr').IWidgetRendered : value);
    (require || prop === 'WidgetServerController') && (_exports.WidgetServerController = WidgetServerController = require ? require('./ssr').WidgetServerController : value);
    (require || prop === 'PageURI') && (_exports.PageURI = PageURI = require ? require('./uri').PageURI : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});