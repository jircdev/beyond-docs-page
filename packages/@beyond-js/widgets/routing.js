define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core", "@beyond-js/widgets/render", "@beyond-js/kernel/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.manager = _exports.hmr = _exports.Route = _exports.PageURI = _exports.PageInstance = _exports.Layout = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/routing",
    "bundle": "ts"
  }, __url).package();

  ;
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
    hash: 2602064878,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class Layout extends _core.Events {
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
    hash: 371030630,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.manager = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _routing = require("@beyond-js/kernel/routing");

      var _layout = require("./layouts/layout");

      var _pages = require("./pages");

      var _layouts = require("./layouts");

      var _route = require("./route");

      const pkg = globalThis.__app_package;
      /*bundle*/

      const manager = typeof process === 'object' ? void 0 : new class Manager {
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
          const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack)); // @TODO: move to the setup method


          Promise.all([bimport(`${pkg}/config`), bimport(`${pkg}/start`)]).then(([{
            default: config
          }]) => {
            this.#main = new _layout.Layout(this.#instances.layouts, config.layout);

            _routing.routing.on('change', set);

            _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
          });
        }

        get layouts() {
          return this.#instances.layouts;
        }

        get pages() {
          return this.#instances.pages;
        } // The main layout can be the layout set in the project.json, or the beyond-layout-children
        // set when the project does not have set a layout


        #main;

        get main() {
          return this.#main;
        }

        #ct = new _core.CancellationToken();

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
    hash: 635174642,
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
    hash: 2192565275,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageInstance = void 0;

      var _render = require("@beyond-js/widgets/render");

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
          } = _render.widgets.get(this.element);

          while (layout) {
            const found = [..._render.widgets.values()].find(({
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
    hash: 408835594,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Route = void 0;

      var _render = require("@beyond-js/widgets/render");

      var _routing = require("@beyond-js/kernel/routing");
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

          _render.widgets.forEach(({
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
          this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
        }

      }

      exports.Route = Route;
    }
  });
  /*********************
  INTERNAL MODULE: ./uri
  *********************/

  ims.set('./uri', {
    hash: 130043211,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageURI = void 0;

      var _manager = require("./manager");
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

            const page = _manager.manager.pages.instance(child);

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
    "im": "./layouts/layout",
    "from": "Layout",
    "name": "Layout"
  }, {
    "im": "./manager",
    "from": "manager",
    "name": "manager"
  }, {
    "im": "./pages/instance",
    "from": "PageInstance",
    "name": "PageInstance"
  }, {
    "im": "./route",
    "from": "Route",
    "name": "Route"
  }, {
    "im": "./uri",
    "from": "PageURI",
    "name": "PageURI"
  }];
  let Layout, manager, PageInstance, Route, PageURI; // Module exports

  _exports.PageURI = PageURI;
  _exports.Route = Route;
  _exports.PageInstance = PageInstance;
  _exports.manager = manager;
  _exports.Layout = Layout;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Layout') && (_exports.Layout = Layout = require ? require('./layouts/layout').Layout : value);
    (require || prop === 'manager') && (_exports.manager = manager = require ? require('./manager').manager : value);
    (require || prop === 'PageInstance') && (_exports.PageInstance = PageInstance = require ? require('./pages/instance').PageInstance : value);
    (require || prop === 'Route') && (_exports.Route = Route = require ? require('./route').Route : value);
    (require || prop === 'PageURI') && (_exports.PageURI = PageURI = require ? require('./uri').PageURI : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVENUQsWUFBWTtVQUFDOEUsTUFBRDtVQUFTL0MsR0FBVDtVQUFjYztRQUFkLENBQVo3QyxFQUFxRjtVQUNqRixJQUFJOEUsTUFBSixFQUFZO1lBQ1IsTUFBTXBFLEtBQUssR0FBR29FLE1BQU0sQ0FBQ0MsWUFBUEQsQ0FBb0IsZUFBcEJBLENBQWQ7O1lBQ0EsTUFBTTFFLElBQUksR0FBR2dCLGlCQUFRSSxLQUFSSixDQUFjaUMsUUFBZGpDLENBQXVCVixLQUF2QlUsQ0FBYjs7WUFDQSxJQUFJLENBQUNoQixJQUFMLEVBQVc7Y0FDUCxNQUFNLElBQUk0RSxLQUFKLENBQVUsWUFBWUYsTUFBTSxDQUFDRyxTQUFTLG9DQUF0QyxDQUFOO1lBQ0g7O1lBRUQsQ0FBQztjQUFDbEQsR0FBRDtjQUFNYztZQUFOLElBQWV6QyxJQUFoQjtVQUNIOztVQUVELEtBQUssSUFBTCxHQUFZMkIsR0FBWjtVQUNBLEtBQUssTUFBTCxHQUFjYyxLQUFkO1FBQ0g7O01BekNRIiwibmFtZXMiOlsiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsIkxheW91dCIsIkV2ZW50cyIsImlzIiwiZWxlbWVudCIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJsYXlvdXRzIiwicGFyZW50Iiwic2VsZWN0IiwicGFnZSIsImRlc2NlbmRpbmciLCJsZW5ndGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNoaWxkIiwiZm91bmQiLCJ2YWx1ZXMiLCJmaW5kIiwiY2hhbmdlZCIsInNoaWZ0IiwidHJpZ2dlciIsInBrZyIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwibWFuYWdlciIsInByb2Nlc3MiLCJNYW5hZ2VyIiwiTGF5b3V0cyIsInBhZ2VzIiwiUGFnZXMiLCJpbml0aWFsaXNlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJzdGFjayIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIm9uIiwibWFpbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwidW5kZWZpbmVkIiwiUGFnZUluc3RhbmNlIiwid2lkZ2V0cyIsInVuc2hpZnQiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiUGFnZVVSSSIsInNlYXJjaCIsInFzIiwiaGFzaCIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsIkVycm9yIiwibG9jYWxOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyIsImxheW91dC50cyIsIm1hbmFnZXIudHMiLCJpbnN0YW5jZS50cyIsInJvdXRlLnRzIiwidXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==