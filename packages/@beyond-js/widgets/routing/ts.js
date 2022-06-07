define(["exports", "@beyond-js/kernel/core/ts", "@beyond-js/widgets/render/ts", "@beyond-js/kernel/routing/ts", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.manager = _exports2.hmr = _exports2.Route = _exports2.PageInstance = _exports2.Layout = void 0;
  const amd_require = require;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/routing/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./layouts/index
  *******************************/

  ims.set('./layouts/index', {
    hash: 2940970575,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      /**
       * The registry of all layouts instances registered in the session, except the main layout
       */

      class _default extends Map {
        register(layout) {
          this.set(layout.id, layout);
        }

      }

      exports.default = _default;
    }
  });
  /********************************
  INTERNAL MODULE: ./layouts/layout
  ********************************/

  ims.set('./layouts/layout', {
    hash: 2143472978,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class Layout extends _ts.Events {
        get is() {
          return 'layout';
        }

        #layouts;
        #element;

        get element() {
          return this.#element;
        }

        get id() {
          return this.#element;
        } // The active child in the layout


        #active;

        get active() {
          return this.#active;
        } // Property #parent is undefined only if it is the main layout


        #parent; // The layouts and pages that are contained in the current layout

        #children = new Map();

        get children() {
          return this.#children;
        }
        /**
         * Layout constructor
         *
         * @param {Layouts} layouts The layouts registry
         * @param {string} element The element name of the widget. Undefined if the project does not set a layout
         * and the index.html has a <beyond-layout-children/> as its main layout container
         * @param {Layout} parent The parent layout. Undefined if it is the main layout
         */


        constructor(layouts, element, parent) {
          super();
          this.#layouts = layouts;
          this.#element = element ? element : 'main';
          this.#parent = parent;
        }
        /**
         * Selects a page
         *
         * @param {PageInstance} page The page being selected (navigated)
         * @param {IWidgetSpecs[]} descending The descending layouts
         */


        select(page, descending) {
          if (descending.length && descending[0].name === this.#element) {
            console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
            return;
          }

          const child = (() => {
            if (!descending.length) return page;
            const {
              name: element
            } = descending[0];
            const found = [...this.#children.values()].find(child => child.element === element);
            if (found) return found;
            const layout = new Layout(this.#layouts, element, this);
            this.#layouts.register(layout);
            return layout;
          })();

          this.#children.set(child.id, child);
          const changed = this.#active !== child;
          this.#active = child;
          descending.shift();
          child.is === 'layout' && child.select(page, descending);
          changed && this.trigger('change');
        }

      }

      exports.Layout = Layout;
    }
  });
  /*************************
  INTERNAL MODULE: ./manager
  *************************/

  ims.set('./manager', {
    hash: 2716961058,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.manager = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      var _ts2 = require("@beyond-js/kernel/routing/ts");

      var _layout = require("./layouts/layout");

      var _pages = require("./pages");

      var _layouts = require("./layouts");

      var _route = require("./route");

      const application = globalThis.__beyond_config.application;
      /*bundle*/

      const manager = typeof window !== 'object' ? void 0 : new class Manager {
        // The registry of all layouts (except the main layout) and pages instances registered in the session
        #instances = {
          layouts: new _layouts.default(),
          pages: new _pages.default()
        };
        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        #resolve;
        #ready = new Promise(resolve => this.#resolve = resolve);

        get ready() {
          return this.#ready;
        }

        constructor() {
          const set = () => this.set(_ts2.routing.uri).catch(exc => console.log(exc.stack));

          amd_require([`${application.package}/start`], () => {
            _ts2.routing.on('change', set);

            _ts2.routing.initialised ? set() : _ts2.routing.ready.then(set);
          });
        }

        get layouts() {
          return this.#instances.layouts;
        }

        get pages() {
          return this.#instances.pages;
        } // The main layout can be the layout set in the project.json, or the beyond-layout-children
        // set when the project does not have set a layout


        #main = new _layout.Layout(this.#instances.layouts, _ts.beyond.application.layout);

        get main() {
          return this.#main;
        }

        #ct = new _ts.CancellationToken();

        async set(uri) {
          const cid = this.#ct.reset();
          const route = new _route.Route(uri.pathname);
          await route.process();
          if (!this.#ct.check(cid)) return;

          const done = () => {
            !this.#initialised && this.#resolve();
            this.#initialised = true;
          };

          const {
            page: element
          } = route;

          if (!element) {
            console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
            return done();
          }

          const page = this.#instances.pages.register(uri, route); // Property page.parents is an array that contains the descending list of layouts where the page is contained

          const {
            error,
            value: descending
          } = page.parents;

          if (error) {
            console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
            return done();
          }

          this.#main.select(page, descending);
          return done();
        }

      }();
      exports.manager = manager;
    }
  });
  /*****************************
  INTERNAL MODULE: ./pages/index
  *****************************/

  ims.set('./pages/index', {
    hash: 3487360704,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _instance = require("./instance");

      class _default extends Map {
        instance(id) {
          return [...this.values()].find(instance => instance.id === id);
        }

        register(uri, route) {
          const {
            pathname
          } = uri;
          let instance = this.has(pathname) ? this.get(pathname) : undefined;
          instance = instance ? instance : new _instance.PageInstance(uri, route);
          this.set(pathname, instance);
          return instance;
        }

      }

      exports.default = _default;
    }
  });
  /********************************
  INTERNAL MODULE: ./pages/instance
  ********************************/

  ims.set('./pages/instance', {
    hash: 434495458,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageInstance = void 0;

      var _ts = require("@beyond-js/widgets/render/ts");

      let id = 0;
      /*bundle*/

      class PageInstance {
        #uri;

        get uri() {
          return this.#uri;
        }

        #route;

        get route() {
          return this.#route;
        }

        get element() {
          return this.#route.page;
        }

        get is() {
          return 'page';
        }

        #id;

        get id() {
          return `${this.element}:${this.#id}`;
        }
        /**
         * Returns the ascending layouts
         *
         * @return {{error?: string, parents?: IWidgetSpecs[]}}
         */


        get parents() {
          // Ascending list of containers layouts of the current page
          const value = [];

          let {
            layout
          } = _ts.widgets.get(this.element);

          while (layout) {
            const found = [..._ts.widgets.values()].find(({
              name
            }) => name === layout);

            if (!found) {
              const error = `Layout "${layout}" not found`;
              return {
                error
              };
            }

            value.unshift(found);
            layout = found.layout;
          }

          return {
            value
          };
        }

        constructor(uri, route) {
          this.#uri = uri;
          this.#route = route;
          this.#id = ++id;
        }

      }

      exports.PageInstance = PageInstance;
    }
  });
  /***********************
  INTERNAL MODULE: ./route
  ***********************/

  ims.set('./route', {
    hash: 951604402,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Route = void 0;

      var _ts = require("@beyond-js/widgets/render/ts");

      var _ts2 = require("@beyond-js/kernel/routing/ts");
      /*bundle*/


      class Route {
        #pathname;

        get pathname() {
          return this.#pathname;
        }

        #page;

        get page() {
          return this.#page;
        }

        #vars;

        get vars() {
          return this.#vars;
        }

        constructor(pathname) {
          this.#pathname = pathname;
        }

        async process() {
          const pathname = this.#pathname.split('/'); // Split the routes of each page to make it easier to find the route that applies to the pathname
          // being requested

          const registered = new Map();

          _ts.widgets.forEach(({
            is,
            name,
            route
          }) => is === 'page' && registered.set(name, route.split('/'))); // The pages whose routes apply by the length of their urls


          const target = [...registered].filter(([, route]) => route.length === pathname.length);
          this.#vars = new Map();
          const found = target.find(([, route]) => {
            this.#vars.clear();

            for (let i = 0; i < pathname.length; i++) {
              const dir = route[i]; // Check if it is a route var (ex: /article/${id})

              if (dir.startsWith('${') && dir.endsWith('}')) {
                const vname = dir.slice(2, dir.length - 1);
                this.#vars.set(vname, pathname[i]);
                continue;
              }

              if (dir !== pathname[i]) return false;
            }

            return true;
          });
          this.#page = found ? found[0] : await _ts2.routing.missing?.(this.#pathname);
        }

      }

      exports.Route = Route;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.Layout = require('./layouts/layout').Layout;
    _exports.manager = require('./manager').manager;
    _exports.PageInstance = require('./pages/instance').PageInstance;
    _exports.Route = require('./route').Route;
  };

  let Layout, manager, PageInstance, Route; // Module exports

  _exports2.Route = Route;
  _exports2.PageInstance = PageInstance;
  _exports2.manager = manager;
  _exports2.Layout = Layout;

  __pkg.exports.process = function (require) {
    _exports2.Layout = Layout = require('./layouts/layout').Layout;
    _exports2.manager = manager = require('./manager').manager;
    _exports2.PageInstance = PageInstance = require('./pages/instance').PageInstance;
    _exports2.Route = Route = require('./route').Route;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});