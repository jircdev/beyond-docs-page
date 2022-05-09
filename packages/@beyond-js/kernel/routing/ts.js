define(["exports", "@beyond-js/kernel/core/ts"], function (_exports2, dependency_0) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.routing = _exports2.URI = _exports2.Layout = _exports2.BeyondLayoutChildrenRenderer = void 0;
  const dependencies = new Map();
  dependencies.set('@beyond-js/kernel/core/ts', dependency_0);
  const {
    beyond
  } = globalThis;
  const bundle = beyond.bundles.obtain('@beyond-js/kernel/routing/ts', false, {}, dependencies);

  const __pkg = bundle.package();

  const modules = new Map();
  /***************************************************************
  INTERNAL MODULE: ./beyond-layout-children/beyond-layout-children
  ***************************************************************/

  modules.set('./beyond-layout-children/beyond-layout-children', {
    hash: 2002849390,
    creator: function (require, exports) {
      "use strict";

      var _renderer = require("./renderer");

      typeof window === 'object' && !customElements.get('beyond-layout-children') && customElements.define('beyond-layout-children', class extends HTMLElement {
        #renderer;

        connectedCallback() {
          // Wait for routing to be created, otherwise a cyclical import occurs
          setTimeout(() => this.#renderer = new _renderer.BeyondLayoutChildrenRenderer(this), 0);
        }

      });
    }
  });
  /*************************************************
  INTERNAL MODULE: ./beyond-layout-children/renderer
  *************************************************/

  modules.set('./beyond-layout-children/renderer', {
    hash: 1396988951,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondLayoutChildrenRenderer = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");
      /*bundle*/


      class BeyondLayoutChildrenRenderer {
        #element;

        get element() {
          return this.#element;
        }

        #layout;

        get layout() {
          return this.#layout;
        }

        #active;
        #mounted = new Map();

        constructor(element) {
          this.#element = element;
          this.#identify();
          if (!this.#layout) return;

          if (element.shadowRoot) {
            // The shadow root is already created in ssr distributions
            this.#layout.children.forEach(child => {
              // Check which of the children were created in by ssr
              const childElement = element.shadowRoot.querySelector(child.element);
              if (!childElement) return;
              childElement.setAttribute('data-child-id', child.id);
              this.#mounted.set(child.id, childElement);
            });
          } else {
            element.attachShadow({
              mode: 'open'
            });
          }

          this.#layout.on('change', this.render);
          this.render();
        } // Identify the layout of the current widget


        #identify = () => this.#layout = (() => {
          const {
            routing
          } = require('../routing');

          const root = this.#element.getRootNode();
          if (root === document) return routing.manager.main;

          const widget = _ts.widgets.instances.getWidgetByShadowRoot(root);

          if (!widget) {
            throw new Error(`Widget container of beyond-layout-children not found`);
          }

          return widget.getAttribute('data-main') === '1' ? routing.manager.main : routing.manager.layouts.get(widget.getAttribute('data-child-id'));
        })(); // Render the layouts and pages of this container

        render = () => {
          this.#layout.children.forEach(child => {
            // Create the HTMLElement of the child if it was not already created
            if (!this.#mounted.has(child.id)) {
              const element = document.createElement(child.element);
              element.setAttribute('data-child-id', child.id);
              this.#element.shadowRoot.append(element);
              this.#mounted.set(child.id, element);
            }

            const element = this.#mounted.get(child.id);
            const page = element; // The show and hide methods are defined in the page controller

            const active = this.#layout.active === child;

            if (active && element !== this.#active) {
              this.#active = element;

              const show = () => {
                page.removeEventListener('controller.initialised', show);

                if (!page.controller) {
                  throw new Error(`Controller of page widget "${child.element}" is undefined`);
                }

                this.#active === element && page.controller.show?.();
              };

              page.controller ? page.controller.show?.() : page.addEventListener('controller.initialised', show);
            } else if (!element.hidden && !active) {
              page.controller?.hide?.();
            }

            element.hidden = !active;
          });
        };
      }

      exports.BeyondLayoutChildrenRenderer = BeyondLayoutChildrenRenderer;
    }
  });
  /*******************************
  INTERNAL MODULE: ./config/config
  *******************************/

  modules.set('./config/config', {
    hash: 4136395398,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.config = void 0;

      var _pages = require("./pages/pages");

      var _layouts = require("./layouts/layouts");

      const config = new class RoutingConfig {
        #layouts = new _layouts.LayoutsConfig();

        get layouts() {
          return this.#layouts;
        }

        #pages = new _pages.PagesConfig();

        get pages() {
          return this.#pages;
        }

      }();
      exports.config = config;
    }
  });
  /***************************************
  INTERNAL MODULE: ./config/layouts/layout
  ***************************************/

  modules.set('./config/layouts/layout', {
    hash: 4253914410,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutConfig = void 0;

      class LayoutConfig {
        get is() {
          return 'layout';
        }

        #element;

        get element() {
          return this.#element;
        } // Since there cannot be more than the same layout in the same container,
        // the identifier can simply be the name


        get id() {
          return this.#element;
        }

        #layout;

        get layout() {
          return this.#layout;
        }

        constructor(config) {
          this.#element = config.name;
          this.#layout = config.layout;
        }

      }

      exports.LayoutConfig = LayoutConfig;
    }
  });
  /****************************************
  INTERNAL MODULE: ./config/layouts/layouts
  ****************************************/

  modules.set('./config/layouts/layouts', {
    hash: 1101660460,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutsConfig = void 0;

      var _layout = require("./layout");

      class LayoutsConfig extends Map {
        register(layouts) {
          for (const layout of layouts) {
            this.set(layout.name, new _layout.LayoutConfig(layout));
          }
        }

      }

      exports.LayoutsConfig = LayoutsConfig;
    }
  });
  /***********************************
  INTERNAL MODULE: ./config/pages/page
  ***********************************/

  modules.set('./config/pages/page', {
    hash: 1424233750,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageConfig = void 0;

      class PageConfig {
        get is() {
          return 'page';
        }

        #element;

        get element() {
          return this.#element;
        }

        #route;

        get route() {
          return this.#route;
        }

        #layout;

        get layout() {
          return this.#layout;
        }

        constructor(page) {
          this.#element = page.name;
          this.#route = page.route;
          this.#layout = page.layout;
        }
        /**
         * Returns the ascending layouts
         *
         * @return {{error?: string, parents?: LayoutConfig[]}}
         */


        get parents() {
          const config = require('../config').config; // Ascending list of containers layouts of the current page


          const value = [];
          let layoutName = this.layout;

          while (layoutName) {
            if (!config.layouts.has(layoutName)) {
              const error = `Layout "${layoutName}" not found`;
              return {
                error
              };
            }

            const layout = config.layouts.get(layoutName);
            value.unshift(layout);
            layoutName = layout.layout;
          }

          return {
            value
          };
        }

      }

      exports.PageConfig = PageConfig;
    }
  });
  /************************************
  INTERNAL MODULE: ./config/pages/pages
  ************************************/

  modules.set('./config/pages/pages', {
    hash: 2673316257,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PagesConfig = void 0;

      var _page = require("./page");

      class PagesConfig extends Map {
        #splits = new Map();
        /**
         * Search for a route (with its vars)
         *
         * @param {string} pathname
         * @return {{element: *, vars: Map<string, string>} | {}}
         */

        find(pathname) {
          const spathname = pathname.split('/');
          const splits = [...this.#splits].filter(([, split]) => split.length === spathname.length);
          let vars = new Map();
          const found = splits.find(([, split]) => {
            vars.clear();

            for (let i = 0; i < spathname.length; i++) {
              const dir = split[i]; // Check if it is a route var (ex: /article/${id})

              if (dir.startsWith('${') && dir.endsWith('}')) {
                const vname = dir.slice(2, dir.length - 1);
                vars.set(vname, spathname[i]);
                continue;
              }

              if (dir !== spathname[i]) return false;
            }

            return true;
          });
          return found ? {
            element: found[0],
            vars
          } : {};
        }

        register(pages) {
          for (const page of pages) {
            const config = new _page.PageConfig(page);
            this.set(page.name, config);
            this.#splits.set(page.name, page.route.split('/'));
          }
        }

      }

      exports.PagesConfig = PagesConfig;
    }
  });
  /*********************************
  INTERNAL MODULE: ./history/history
  *********************************/

  modules.set('./history/history', {
    hash: 2957503106,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondHistory = void 0;

      var _position = require("./position");

      var _records = require("./records");
      /**
       * Beyond keeps its own history list
       * @constructor
       */


      class BeyondHistory {
        #position;

        get position() {
          return this.#position;
        }

        #records;

        get records() {
          return this.#records;
        }

        get current() {
          return this.#records.current.uri;
        }

        #initial = history.length;

        get initial() {
          return this.#initial;
        }
        /**
         * Process the browser URI that takes into consideration the routing mode
         *
         * @param {string} uri The internal URI (always starts with '/')
         * @return {string} The URI to be pushed or replaced in the browser considering the routing mode
         * @private
         */


        #processBrowserURI(uri) {
          void this;
          if (uri === void 0) return;

          const {
            routing
          } = require('../routing');

          const RoutingModeEnum = require('../routing').RoutingMode;

          return routing.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
        }

        #push(uri) {
          this.#records.reset();
          this.#records.push(uri);
          this.#position.save(this.#records.length);
        }

        replaceState(state, title, uri) {
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          this.#records.updateCurrentURI(uri); // The uri in the browser considering the routing mode

          const position = this.#position.value;
          history.replaceState(state, title, this.#processBrowserURI(uri));
          this.#position.save(position);
        }

        pushState(uri, state) {
          if (uri === `${location.pathname}${location.search}${location.hash}`) return;
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          history.pushState(state, null, this.#processBrowserURI(uri));
          this.#push(uri);
        }

        back() {
          const previous = this.#records.previous?.position;
          const current = this.#records.current?.position;
          if (!previous) return;
          history.go(previous - current);
        }

        forward() {
          const following = this.#records.following?.position;
          const current = this.#records.current?.position;
          if (!following) return;
          history.go(following - current);
        }

        constructor(routing, Mode) {
          this.#position = new _position.HistoryPosition();
          this.#records = new _records.HistoryRecords(this.#position);

          if (this.#position.value === void 0) {
            // It is not a refresh of a previously navigated page
            let uri = routing.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
            this.#push(uri);
          }
        }

      }

      exports.BeyondHistory = BeyondHistory;
    }
  });
  /**********************************
  INTERNAL MODULE: ./history/position
  **********************************/

  modules.set('./history/position', {
    hash: 3613484025,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryPosition = void 0;
      /**
       * The position of the navigation is stored this way:
       *      1. In the state of each page (the history.state object), it is stored the position
       *         in which the page is located. To achieve this, the __beyond_navigation_position property
       *         is added to the state object.
       *      2. In the sessionStorage is stored the current position (__beyond_navigation_position)
       */

      class HistoryPosition {
        check() {
          if (this.value) return true;
          console.error('History state is not defined. ' + 'This happen when state is changed outside the beyond defined navigation flows.');
          return false;
        }
        /**
         * Returns the position from the history.state
         * @returns {number | undefined}
         */


        get value() {
          return history.state?.__beyond_navigation_position;
        }

        save(position) {
          const state = history.state ? history.state : {};
          state.__beyond_navigation_position = position;
          history.replaceState(state, null);
        }

      }

      exports.HistoryPosition = HistoryPosition;
    }
  });
  /*********************************
  INTERNAL MODULE: ./history/records
  *********************************/

  modules.set('./history/records', {
    hash: 3276675750,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryRecords = void 0;

      class HistoryRecords {
        #position;
        #entries = [];

        get entries() {
          return this.#entries.slice();
        }

        get length() {
          return this.#entries.length;
        }

        get current() {
          return this.#entries[this.#position.value - 1];
        }

        get previous() {
          const previous = this.#position.value - 2;
          if (previous < 0) return;
          return this.#entries[previous];
        }

        get following() {
          const following = this.#position.value;
          if (following >= this.#entries.length) return;
          return this.#entries[following];
        }

        constructor(position) {
          this.#position = position;
          let parsed;

          try {
            const stored = sessionStorage.getItem('__beyond_navigation_records');
            parsed = stored ? JSON.parse(stored) : [];
          } catch (exc) {
            console.error('Error loading beyond navigation state', exc instanceof Error ? exc.stack : exc);
            this.#entries = [];
          }

          if (!(parsed instanceof Array)) {
            const warning = 'The beyond navigation data, stored in session store is invalid.';
            console.warn(warning, parsed);
          }

          this.#entries = parsed;
        }
        /**
         * Set the URI always starting with '/' no matter the routing mode (hash or pathname)
         *
         * @param {string} uri
         * @return {string}
         */


        #sanitizeURI(uri) {
          void this;
          if (uri === void 0) return;
          return uri.startsWith('/') ? uri : `/${uri}`;
        }

        get(index) {
          return this.#entries[index];
        }
        /**
         * Push a uri to the records stored in the sessionStorage
         * @param {string} uri
         */


        push(uri) {
          uri = this.#sanitizeURI(uri);
          this.#entries.push({
            uri,
            position: history.length
          });
          this.save();
        }
        /**
         * Reset the list of records from the current position
         * This is required when:
         *      1. The list of browsed pages is greater than one (ex: page1 and page2)
         *      2. The user goes back in the history (ex: to position 1: page1)
         *      3. The user navigates another page (ex: page3)
         *
         * This method is required in step 3, to clean the records from position 1, and after this
         * execution, the navigation flow can push page3
         */


        reset() {
          const position = this.#position.value;
          if (position) return;
          this.#entries = this.#entries.filter(entry => entry.position < history.length);
        }

        updateCurrentURI(uri) {
          const position = this.#position.value;
          uri = this.#sanitizeURI(uri);
          this.#entries[position - 1] = {
            uri,
            position: history.length
          };
          this.save();
        }

        save() {
          sessionStorage.setItem('__beyond_navigation_records', JSON.stringify(this.#entries));
        }

      }

      exports.HistoryRecords = HistoryRecords;
    }
  });
  /********************************
  INTERNAL MODULE: ./layouts/layout
  ********************************/

  modules.set('./layouts/layout', {
    hash: 3907903496,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = void 0;

      var _ts = require("@beyond-js/kernel/core/ts");

      let id = 0;
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

        #id;

        get id() {
          return `${this.#element}:${this.#id}`;
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
          this.#id = ++id;
          this.#parent = parent;
        }
        /**
         * Selects a page
         *
         * @param {PageInstanceData} page The page being selected (navigated)
         * @param {LayoutConfig[]} descending The descending layouts
         */


        select(page, descending) {
          if (descending.length && descending[0].element === this.#element) {
            console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
            return;
          }

          const child = (() => {
            if (!descending.length) return page;
            const {
              element
            } = descending[0];
            let layout = [...this.#children.values()].find(child => child.element === element);

            if (!layout) {
              layout = new Layout(this.#layouts, element, this);
              this.#layouts.register(layout);
            }

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
  /*********************************
  INTERNAL MODULE: ./layouts/layouts
  *********************************/

  modules.set('./layouts/layouts', {
    hash: 2337437683,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layouts = void 0;
      /**
       * The registry of all layouts instances registered in the session, except the main layout
       */

      class Layouts extends Map {
        register(layout) {
          this.set(layout.id, layout);
        }

      }

      exports.Layouts = Layouts;
    }
  });
  /*************************
  INTERNAL MODULE: ./manager
  *************************/

  modules.set('./manager', {
    hash: 1353394538,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Manager = void 0;

      var _layout = require("./layouts/layout");

      var _pages = require("./pages/pages");

      var _layouts = require("./layouts/layouts");

      class Manager {
        // The registry of all layouts instances registered in the session, except the main layout
        #layouts = new _layouts.Layouts();

        get layouts() {
          return this.#layouts;
        } // The main layout can be the layout set in the project.json, or the beyond-layout-children
        // set when the project does not have set a layout


        #main = new _layout.Layout(this.#layouts);

        get main() {
          return this.#main;
        } // The registry of all the pages that were navigated in the application


        #pages = new _pages.Pages();

        get pages() {
          return this.#pages;
        }

        set(uri) {
          const {
            element
          } = uri.route;

          if (!element) {
            console.error(`Pathname "${uri.pathname}" does not have a page associated to it`);
            return;
          }

          const page = this.#pages.register(uri, element); // Property page.parents is an array that contains the descending list of layouts where the page is contained

          const {
            error,
            value: descending
          } = page.parents;

          if (error) {
            console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
            return;
          }

          this.#main.select(page, descending);
        }

      }

      exports.Manager = Manager;
    }
  });
  /****************************
  INTERNAL MODULE: ./pages/data
  ****************************/

  modules.set('./pages/data', {
    hash: 2701832719,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageInstanceData = void 0;
      let id = 0;

      class PageInstanceData {
        get is() {
          return 'page';
        }

        #element;

        get element() {
          return this.#element;
        }

        #id;

        get id() {
          return `${this.#element}:${this.#id}`;
        }

        #config() {
          const {
            routing
          } = require('../routing');

          return routing.config.pages.get(this.#element);
        }

        get parents() {
          return this.#config().parents;
        } // The uri property is updated on navigation as the query string of the page can change


        uri;

        constructor(element) {
          this.#element = element;
          this.#id = ++id;
        }

      }

      exports.PageInstanceData = PageInstanceData;
    }
  });
  /*****************************
  INTERNAL MODULE: ./pages/pages
  *****************************/

  modules.set('./pages/pages', {
    hash: 1920929591,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Pages = void 0;

      var _data = require("./data");

      class Pages extends Map {
        // Find a page by instance id
        find(id) {
          return [...this.values()].find(instance => instance.id === id);
        }

        register(uri, element) {
          const {
            pathname
          } = uri;
          let data = this.has(pathname) ? this.get(pathname) : undefined;
          data = data ? data : new _data.PageInstanceData(element);
          data.uri = uri;
          this.set(pathname, data);
          return data;
        }

      }

      exports.Pages = Pages;
    }
  });
  /*************************
  INTERNAL MODULE: ./routing
  *************************/

  modules.set('./routing', {
    hash: 3301894040,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.routing = exports.RoutingMode = exports.Routing = void 0;

      var _uri2 = require("./uri/uri");

      var _config = require("./config/config");

      var _manager = require("./manager");

      var _ts = require("@beyond-js/kernel/core/ts");

      var _history = require("./history/history");

      require("./beyond-layout-children/beyond-layout-children");

      var _renderer = require("./beyond-layout-children/renderer");

      var RoutingMode;
      exports.RoutingMode = RoutingMode;

      (function (RoutingMode) {
        RoutingMode[RoutingMode["Hash"] = 0] = "Hash";
        RoutingMode[RoutingMode["Pathname"] = 1] = "Pathname";
      })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));

      const ssr = typeof window !== 'object';

      class Routing {
        #mode;

        get mode() {
          return this.#mode;
        }

        get config() {
          return _config.config;
        }

        #manager = new _manager.Manager();

        get manager() {
          return this.#manager;
        }

        #uri;

        get uri() {
          return this.#uri;
        }

        missing;
        redirect;
        #history;

        get history() {
          return this.#history;
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }
        /**
         * Returns page configuration from an href address
         *
         * @param {string} _uri The uri in string format previous to be parsed
         * @return {Promise<{error?: string, redirected?: string, page?: PageConfig, uri?: URI}>}
         */


        async page(_uri) {
          const uri = new _uri2.URI(_uri); // Check if uri has to be redirected

          const redirected = typeof this.redirect === 'function' && (await this.redirect(uri));
          if (redirected && redirected !== _uri) return {
            redirected
          };
          await uri.initialise(); // Parse the uri and check the missing function if the route is not found

          const {
            element
          } = uri.route;

          if (!_config.config.pages.has(element)) {
            const error = `Pathname "${uri.pathname}" does not have a page associated to it`;
            return {
              error
            };
          }

          const page = _config.config.pages.get(element);

          return {
            page,
            uri
          };
        }

        #hydrate() {
          void this;

          if (typeof __beyond_hydrator === 'object') {
            __beyond_hydrator.hydrate(_ts.WidgetControllerLoader, _renderer.BeyondLayoutChildrenRenderer);
          }
        }

        setUp(routingMode) {
          if (this.#initialised) throw new Error('Routing setUp method can only be called once');

          if (!ssr && location.protocol === 'file:' && routingMode === RoutingMode.Pathname) {
            routingMode = RoutingMode.Hash;
            console.warn('Routing mode was set as "pathname" but it was changed to ' + '"hash" because the protocol used is "file:"');
          }

          if (!ssr && ![0, 1].includes(routingMode)) {
            console.warn(`Routing mode ${routingMode} is invalid`);
            routingMode = location.protocol === 'file:' ? RoutingMode.Hash : RoutingMode.Pathname;
          }

          this.#mode = routingMode;
          this.#initialised = true;
          this.#history = !ssr && new _history.BeyondHistory(this, RoutingMode);
          let layouts = [],
              pages = [];

          _ts.widgets.forEach(specs => {
            specs.is === 'layout' && layouts.push(specs);
            specs.is === 'page' && pages.push(specs);
          });

          _config.config.layouts.register(layouts);

          _config.config.pages.register(pages);

          !ssr && this.update().then(() => this.#hydrate()).catch(exc => console.error(exc.stack));
        }

        #redirect = async uri => {
          if (typeof this.redirect !== 'function') return;
          const redirected = await this.redirect(uri);
          if (!redirected) return;

          if (typeof redirected !== 'string') {
            console.error(`Invalid route value set by custom routing function`, redirected);
            return;
          }

          if (uri.pathname === redirected) return; // Routing function returned the actual route

          this.pushState(redirected);
          return true;
        };

        pushState(uri, state) {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        }

        replaceState(state, title, uri) {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        } // Avoid to continue the execution on asynchronous calls, when a newest call's been made


        #cancellationToken = new _ts.CancellationToken();
        update = async () => {
          if (!this.#initialised) return;
          const cancellationTokenId = this.#cancellationToken.reset();
          const {
            hash,
            pathname,
            search
          } = location;

          const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;

          if (this.#uri?.uri === _uri) return;
          const uri = new _uri2.URI(_uri);
          this.#uri = uri;
          const redirected = await this.#redirect(uri);
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (redirected) return; // The page was redirected to another uri

          await uri.initialise(); // Parse the uri and check the missing function if the route is not found

          if (!this.#cancellationToken.check(cancellationTokenId)) return; // Verify the state of the history registry to check for possible errors

          if (this.#history && uri.uri !== this.#history.current) {
            console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
            return;
          }

          this.#manager.set(uri);
        };

        back() {
          this.#history.back();
        }

        forward() {
          this.#history.forward();
        }

      }

      exports.Routing = Routing;
      /*bundle*/

      const routing = new Routing();
      exports.routing = routing;
      globalThis.routing = routing;
      !ssr && (beyond.navigate = (uri, state) => routing.pushState(uri, state));
      !ssr && (beyond.pushState = (uri, state) => routing.pushState(uri, state));
      !ssr && (beyond.back = () => routing.back());
      !ssr && (beyond.forward = () => routing.forward()); // Only on client side

      !ssr && window.addEventListener('popstate', () => routing.update().catch(exc => console.error(exc.stack)));
    }
  });
  /*********************************
  INTERNAL MODULE: ./uri/querystring
  *********************************/

  modules.set('./uri/querystring', {
    hash: 341598707,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QueryString = void 0;

      class QueryString extends Map {
        constructor(search) {
          super();
          if (search.trim() === '') return;
          search = search.substr(0, 1) === '?' ? search.substr(1) : search;
          const split = search.split('&');

          for (let i = 0; i < split.length; ++i) {
            const param = split[i].split('=', 2);
            const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, ' ')) : undefined;
            this.set(param[0], value);
          }
        }

      }

      exports.QueryString = QueryString;
    }
  });
  /***************************
  INTERNAL MODULE: ./uri/route
  ***************************/

  modules.set('./uri/route', {
    hash: 2471685210,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Route = void 0;

      class Route {
        #uri;
        #element;

        get element() {
          return this.#element;
        }

        #vars;

        get vars() {
          return this.#vars;
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        constructor(uri) {
          this.#uri = uri;
        }

        async initialise() {
          if (this.#initialised) return;
          this.#initialised = true;
          const {
            pathname
          } = this.#uri;

          const {
            routing
          } = require('../routing');

          let found = routing.config.pages.find(pathname);

          if (!found.element && typeof routing.missing === 'function') {
            found = await routing.missing(this.#uri);
          }

          this.#element = found.element;
          this.#vars = found.vars;
        }

      }

      exports.Route = Route;
    }
  });
  /*************************
  INTERNAL MODULE: ./uri/uri
  *************************/

  modules.set('./uri/uri', {
    hash: 661944598,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URI = void 0;

      var _route = require("./route");

      var _querystring = require("./querystring");
      /*bundle*/

      /**
       * Uri parser
       *
       * @param href {string} The href to be parsed
       * @constructor
       */


      class URI {
        #uri;

        get uri() {
          return this.#uri;
        }

        #route;

        get route() {
          return this.#route;
        }

        get vars() {
          return this.#route.vars;
        }

        #pathname;

        get pathname() {
          return this.#pathname;
        }

        #search;

        get search() {
          return this.#search;
        }

        #qs;

        get qs() {
          return this.#qs;
        }

        #hash;

        get hash() {
          return this.#hash;
        }

        constructor(uri) {
          this.#uri = uri;
          const [u, hash] = uri.split('#');
          const [pathname, search] = u.split('?');
          this.#pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
          this.#search = search ? search : '';
          this.#qs = new _querystring.QueryString(this.#search);
          this.#hash = hash;
          this.#route = new _route.Route(this);
        }

        initialise = async () => await this.#route.initialise();
      }

      exports.URI = URI;
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.BeyondLayoutChildrenRenderer = require('./beyond-layout-children/renderer').BeyondLayoutChildrenRenderer;
    _exports.Layout = require('./layouts/layout').Layout;
    _exports.routing = require('./routing').routing;
    _exports.URI = require('./uri/uri').URI;
  };

  let BeyondLayoutChildrenRenderer, Layout, routing, URI; // Module exports

  _exports2.URI = URI;
  _exports2.routing = routing;
  _exports2.Layout = Layout;
  _exports2.BeyondLayoutChildrenRenderer = BeyondLayoutChildrenRenderer;

  __pkg.exports.process = function (require) {
    _exports2.BeyondLayoutChildrenRenderer = BeyondLayoutChildrenRenderer = require('./beyond-layout-children/renderer').BeyondLayoutChildrenRenderer;
    _exports2.Layout = Layout = require('./layouts/layout').Layout;
    _exports2.routing = routing = require('./routing').routing;
    _exports2.URI = URI = require('./uri/uri').URI;
  };

  __pkg.initialise(modules);
});