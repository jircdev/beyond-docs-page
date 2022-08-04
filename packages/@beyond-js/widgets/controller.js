define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core", "@beyond-js/widgets/render", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetServerController = _exports.WidgetControllerBase = _exports.WidgetClientController = _exports.WidgetAttributes = _exports.IWidgetStore = _exports.IWidgetRendered = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/controller",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 3176328789,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetAttributes = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class WidgetAttributes extends Map {
        // The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
        #widget;
        #events = new _core.Events();
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
    hash: 2717555154,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetClientController = void 0;

      var _controller = require("./controller");

      var _attributes = require("./attributes");

      var _bundle = require("@beyond-js/kernel/bundle");

      var _styles = require("@beyond-js/kernel/styles");
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
          const styles = new _styles.DependenciesStyles(this.specs.id);

          const links = () => [...styles.elements].map(style => style.href);

          !this.styles.initialised && this.styles.initialise(links());
          styles.on('change', () => this.styles.update(links()));
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

          if (!_bundle.instances.has(this.specs.id)) {
            console.log(`Bundle id "${this.specs.id}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }

          const pkg = _bundle.instances.get(this.specs.id).package();

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
    hash: 2549009237,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetControllerBase = void 0;

      var _render = require("@beyond-js/widgets/render");
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

        #pkg;

        get pkg() {
          return this.#pkg;
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
            if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
            specs = _render.widgets.get(localName);
          }

          this.#pkg = (() => {
            const split = specs.id.split('/');
            return split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
          })();

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
    hash: 2569284063,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetServerController = void 0;

      var _controller = require("./controller");

      var _styles = require("@beyond-js/kernel/styles");
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
          const styles = new _styles.DependenciesStyles(this.specs.id);
          styles.elements.forEach(({
            href
          }) => this.#styles.push(href));
          this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
        }

      }

      exports.WidgetServerController = WidgetServerController;
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
  }];
  let WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController; // Module exports

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
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQWZBLENBQWQ7WUFDQSxPQUFPd0QsS0FBSyxDQUFDLENBQUQsQ0FBTEEsQ0FBU0MsVUFBVEQsQ0FBb0IsR0FBcEJBLElBQTJCLEdBQUdBLEtBQUssQ0FBQ0UsS0FBTkYsRUFBYSxJQUFJQSxLQUFLLENBQUNFLEtBQU5GLEVBQWEsRUFBNURBLEdBQWlFQSxLQUFLLENBQUNFLEtBQU5GLEVBQXhFO1VBRlEsSUFBWjs7VUFLQSxLQUFLLE1BQUwsR0FBY3hELEtBQWQ7UUFDSDs7TUExRDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DWm5DOztNQUNBO01BZ0JPOztNQUhQOzs7OztNQUdpQixNQUNGMkQsc0JBREUsU0FDNkJoRCxnQ0FEN0IsQ0FDaUQ7UUFDckQsVUFBb0IsRUFBcEI7O1FBQ0MsSUFBTkksTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFaO1FBQ0g7O1FBRURsQixZQUFzQitELE1BQXRCL0QsRUFBNEU7VUFDeEUsTUFBTStELE1BQU47VUFDQSxNQUFNN0MsTUFBTSxHQUFHLElBQUlDLDBCQUFKLENBQXVCLEtBQUtoQixLQUFMLENBQVdpQixFQUFsQyxDQUFmO1VBQ0FGLE1BQU0sQ0FBQ0ksUUFBUEosQ0FBZ0JkLE9BQWhCYyxDQUF3QixDQUFDO1lBQUNPO1VBQUQsQ0FBRCxLQUFZLEtBQUssT0FBTCxDQUFhdUMsSUFBYixDQUFrQnZDLElBQWxCLENBQXBDUDtVQUVBLEtBQUssT0FBTCxDQUFhK0MsT0FBYixDQUFxQixPQUFPLEtBQUtoQixHQUFHLGdCQUFwQztRQUNIOztNQVo2RCIsIm5hbWVzIjpbIldpZGdldEF0dHJpYnV0ZXMiLCJNYXAiLCJFdmVudHMiLCJvbiIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJjb25zdHJ1Y3RvciIsIndpZGdldCIsImF0dHJzIiwic3BlY3MiLCJmb3JFYWNoIiwiYXR0ciIsInNldCIsImdldEF0dHJpYnV0ZSIsImNoYW5nZSIsIm5hbWUiLCJvbGQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJzdG9yZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwic3R5bGVzIiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwiaWQiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsImRpc2Nvbm5lY3QiLCJXaWRnZXQiLCJFcnJvciIsImNyZWF0ZVN0b3JlIiwicHJlcmVuZGVyIiwic3NyIiwiY2FjaGVkIiwiaHlkcmF0ZSIsImZldGNoIiwiYnVuZGxlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJobXIiLCJlbGVtZW50IiwiaXMiLCJyb3V0ZSIsImxheW91dCIsImxhbmd1YWdlIiwid2lkZ2V0cyIsInNwbGl0Iiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlciIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdHRyaWJ1dGVzLnRzIiwiY2xpZW50LnRzIiwiY29udHJvbGxlci50cyIsInNzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==