define(["exports", "@beyond-js/kernel/bundle/ts"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/hydrator/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /******************************
  INTERNAL MODULE: ./base/package
  ******************************/

  ims.set('./base/package', {
    hash: 2479360700,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondPackage = void 0;
      exports.resolve = resolve;
      /**
       * Resolve the id of a module considering relatives paths to the source that is requiring it
       *
       * @param source {string} The module from where the require is being requested
       * @param id {string} The module being requested
       * @returns {string} The module processed with relative paths
       */

      function resolve(source, id) {
        if (!id.startsWith('.')) throw new Error(`Module id must be a relative resource "${id}"`);
        const split = {};
        split.source = source.split('/');
        split.source.pop();
        split.target = (id.startsWith('./') ? id.substr(2) : id).split('../');

        while (split.target[0] === '') {
          split.target.shift();
          split.source.pop();
        }

        return split.source.join('/') + '/' + split.target.join('/');
      }
      /**
       * This class is used only by beyond/core
       */


      class BeyondPackage {
        #ims;
        #cached = new Map();
        #exports;

        constructor(exports) {
          this.#exports = exports;
        }

        initialise(ims) {
          this.#ims = ims;
          this.#exports.process?.((id, source) => this.require(id, source), {});

          this.require('./hydrator');
        }
        /**
         * Solve the require function
         *
         * @param source {string} The module from where the require is being triggered
         * @param id {string} The module id being requested
         * @returns {*}
         */


        require(id, source) {
          id = source ? resolve(source, id) : id;
          const module = this.#ims.has(id) ? id : `${id}/index`;
          if (this.#cached.has(module)) return this.#cached.get(module);
          if (!this.#ims.has(module)) throw new Error(`Internal module "${id}" not found`);
          const fn = this.#ims.get(module).creator;

          const require = required => this.require(required, module); // Here the id is the source of the require


          const exports = {};
          fn(require, exports);
          this.#cached.set(module, exports);
          return exports;
        }

      }

      exports.BeyondPackage = BeyondPackage;
    }
  });
  /************************
  INTERNAL MODULE: ./config
  ************************/

  ims.set('./config', {
    hash: 2678588931,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.config = void 0;
      const config = new class {
        #errors;

        get errors() {
          return this.#errors;
        }

        #warnings;

        get warnings() {
          return this.#warnings;
        }

        #redirected;

        get redirected() {
          return this.#redirected;
        }
        /**
         * The main layout defined in the project.json
         *
         * @type {string}
         * @private
         */


        #main;

        get main() {
          return this.#main;
        }
        /**
         * The page element, and its parents layouts
         *
         * @type {{element: string, parents: string[]}}
         * @private
         */


        #page;

        get page() {
          return this.#page;
        }

        #widgets;

        get widgets() {
          return this.#widgets;
        }

        #resolve;
        #promise = new Promise(resolve => this.#resolve = resolve);

        get ready() {
          return this.#promise;
        }

        #initialise() {
          this.#errors = __beyond_ssr.errors;
          this.#warnings = __beyond_ssr.warnings;
          this.#redirected = __beyond_ssr.redirected;
          this.#main = __beyond_ssr.main;
          this.#page = __beyond_ssr.page;
          this.#widgets = new Map(__beyond_ssr.widgets);
          this.#widgets.forEach(widget => widget.attributes = new Map(widget.attributes));
          this.#resolve();
        }

        constructor() {
          setTimeout(() => {
            this.#initialise();
          }, 5000);
        }

      }();
      exports.config = config;
    }
  });
  /**************************
  INTERNAL MODULE: ./hydrator
  **************************/

  ims.set('./hydrator', {
    hash: 2804271268,
    creator: function (require, exports) {
      "use strict";

      var _widgets = require("./widgets/widgets");

      var _config = require("./config");

      class Hydrator {
        getCachedStore(id) {
          return _config.config.widgets.get(id)?.store;
        }
        /* Give up the power of the widgets to the controllers */


        hydrate(WidgetControllerLoader, BeyondLayoutChildrenRenderer) {
          _widgets.widgets.hydrate(WidgetControllerLoader, BeyondLayoutChildrenRenderer);
        }

      }

      const hydrator = new Hydrator();
      window.__beyond_hydrator = hydrator;

      window.onload = () => {
        // Append the main layout
        const main = _config.config.main ? _config.config.main : 'beyond-layout-children';
        const el = document.createElement(main);
        el.setAttribute('data-main', '1');
        document.body.append(el);
      };
    }
  });
  /**************************************
  INTERNAL MODULE: ./widgets/widget/index
  **************************************/

  ims.set('./widgets/widget/index', {
    hash: 3265748960,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = void 0;
      exports.hydrate = hydrate;

      var _pending = require("./pending");

      let Loader;

      function hydrate(_Loader) {
        Loader = _Loader;

        _pending.pending.hydrate();
      }

      class Widget extends HTMLElement {
        #ssrId;

        get ssrId() {
          return this.#ssrId;
        }

        #loader;

        get loader() {
          return this.#loader;
        }

        get controller() {
          return this.#loader.controller;
        } // To identify where the widget is in the widgets tree


        #wnode;

        get wnode() {
          return this.#wnode;
        }

        get wparent() {
          return this.#wnode.parent.widget;
        }

        get wchildren() {
          return [...this.#wnode.children].map(({
            widget
          }) => widget);
        }

        #specs;

        get specs() {
          return this.#specs;
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

        #oncontroller = () => {
          const event = new CustomEvent('controller.initialised', {
            bubbles: false,
            composed: false
          });
          this.dispatchEvent(event);
        };
        #attrs;
        #render = {
          csr: () => {
            if (!beyond.widgets.has(this.localName)) throw new Error(`Widget "${this.localName}" is not registered`);
            this.#specs = beyond.widgets.get(this.localName); // Register the widget in the instances registry after connectedCallback is done

            const This = this;
            this.#wnode = beyond.widgets.instances.register(This);
            this.#loader = new Loader(this);
            this.#loader.connectedCallback();
            this.#loader.on('controller.initialised', this.#oncontroller);
          }
        };

        constructor(attrs) {
          super();
          this.#attrs = attrs;
          this.attachShadow({
            mode: 'open'
          });
        }

        hydrate() {
          this.#render.csr();
        }

        connectedCallback() {
          if (Loader) {
            this.#render.csr();
            return;
          }

          _pending.pending.register(this);

          this.#render.ssr();
        }

      }

      exports.Widget = Widget;
    }
  });
  /****************************************
  INTERNAL MODULE: ./widgets/widget/pending
  ****************************************/

  ims.set('./widgets/widget/pending', {
    hash: 3382665724,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pending = void 0;
      /**
       * Pending instances waiting for the core/routing and beyond-layout-children renderer objects be loaded
       */

      const pending = class {
        static #hydrated = false;
        static #instances = new Set();
        /**
         * Required by beyond-layout-children to get its container
         *
         * @type {Map<Node, Widget>}
         * @private
         */

        static #roots = new Map();

        static get roots() {
          return this.#roots;
        }

        static register(instance) {
          if (!instance.shadowRoot) throw new Error(`shadowRoot on instance was expected`);
          if (this.#hydrated) throw new Error('Application is hydrated, no pending elements should be registered');
          this.#instances.add(instance);
          this.#roots.set(instance.shadowRoot, instance);
        }

        static hydrate() {
          this.#hydrated = true;
          this.#instances.forEach(instance => instance.hydrate());
        }

      };
      exports.pending = pending;
    }
  });
  /*********************************
  INTERNAL MODULE: ./widgets/widgets
  *********************************/

  ims.set('./widgets/widgets', {
    hash: 799014492,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.widgets = void 0;

      require("./layout-children");

      var _config = require("../config");

      var _widget = require("./widget");

      const widgets = new class {
        #hydrated = false;
        #initialise = () => {
          // Register the widgets required by the initial navigated page
          const {
            widgets
          } = _config.config;
          const elements = [...widgets.values()].map(({
            element
          }) => element);
          elements.forEach(element => {
            if (customElements.get(element)) return; // Element is already registered

            const WidgetElement = class extends _widget.Widget {
              static #props;

              static get observedAttributes() {
                if (this.#props) return this.#props;
                const {
                  attributes
                } = [...widgets.values()].find(({
                  element: e
                }) => e === element);
                return this.#props = [...new Map(attributes).keys()];
              }

              constructor() {
                super(WidgetElement.observedAttributes);
              }

            };
            customElements.define(element, WidgetElement);
          });
        };

        constructor() {
          _config.config.ready.then(this.#initialise);
        }

        hydrate(WidgetControllerLoader, BeyondLayoutChildrenRenderer) {
          if (this.#hydrated) throw new Error('Widgets already hydrated');
          this.#hydrated = true;

          require('./widget').hydrate(WidgetControllerLoader);

          require('./layout-children').hydrate(BeyondLayoutChildrenRenderer);
        }

      }();
      exports.widgets = widgets;
    }
  }); // Module exports

  __pkg.exports.process = function (require) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});