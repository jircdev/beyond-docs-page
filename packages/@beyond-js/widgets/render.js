define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.widgets = _exports.prerender = _exports.hmr = _exports.attributes = _exports.WidgetCSR = _exports.StylesManager = _exports.NodeWidget = _exports.IWidgetSpecs = _exports.IBeyondWidgetController = _exports.GlobalCSS = _exports.BeyondWidget = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/widgets/render",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /************************
  INTERNAL MODULE: ./anchor
  ************************/

  ims.set('./anchor', {
    hash: 2586566452,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      typeof process !== 'object' && customElements.define('beyond-link', class extends HTMLElement {
        #routing;

        constructor() {
          super();
          bimport('@beyond-js/kernel/routing').then(({
            routing
          }) => this.#routing = routing);
        }

        connectedCallback() {
          this.addEventListener('click', () => {
            if (!this.hasAttribute('data-url')) return;
            const url = this.getAttribute('data-url');
            this.#routing?.pushState(url);
          });
        }

      });
    }
  });
  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 4138553981,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.attributes = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      const attributes = new class extends _core.Events {
        #values = new Map();

        get values() {
          return this.#values;
        }

        add(name, value) {
          this.#values.set(name, value);
          this.trigger('add', name, value);
          this.trigger('change');
        }

        remove(name) {
          this.#values.delete(name);
          this.trigger('remove', name);
          this.trigger('change');
        }

      }();
      exports.attributes = attributes;
    }
  });
  /*********************************
  INTERNAL MODULE: ./instances/index
  *********************************/

  ims.set('./instances/index', {
    hash: 2022060609,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.instances = void 0;

      var _node = require("./node"); // Maintains a tree of widget instances
      // NodeWidget is an object with a tree structure (parent, children)


      const instances = new class extends Set {
        register(widget) {
          this.add(widget); // Find parent widget

          const parent = (() => {
            let parent = widget;

            while (true) {
              const root = parent.getRootNode();
              if (root === document) return;
              parent = root.host;
              if (this.has(parent)) return parent;
            }
          })();

          const node = new _node.NodeWidget(widget, parent);
          parent?.wnode.children.add(widget);
          this.add(widget);
          return node;
        }

      }();
      exports.instances = instances;
    }
  });
  /********************************
  INTERNAL MODULE: ./instances/node
  ********************************/

  ims.set('./instances/node', {
    hash: 3167083658,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NodeWidget = void 0;
      /*bundle*/

      class NodeWidget {
        #widget;

        get widget() {
          return this.#widget;
        }

        #parent;

        get parent() {
          return this.#parent;
        }

        #children = new Set();

        get children() {
          return this.#children;
        }

        constructor(widget, parent) {
          this.#widget = widget;
          this.#parent = parent;
        }

      }

      exports.NodeWidget = NodeWidget;
    }
  });
  /***********************************
  INTERNAL MODULE: ./prerendered/index
  ***********************************/

  ims.set('./prerendered/index', {
    hash: 483738484,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.prerender = void 0;
      /*bundle*/

      const prerender = new class {
        #ssr = [];

        get ssr() {
          return this.#ssr;
        }

        find(element, attrs) {
          return this.#ssr.find(item => {
            if (item.element !== element) return false;
            const iattrs = new Map(item.attributes);
            return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
          });
        }

      }();
      exports.prerender = prerender;
    }
  });
  /***********************************
  INTERNAL MODULE: ./widget/attributes
  ***********************************/

  ims.set('./widget/attributes', {
    hash: 1029410984,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetGlobalAttributes = void 0;

      var _attributes = require("../attributes");
      /**
       * The global attributes specified in widgets.attributes that apply to all the widgets in the application
       */


      class WidgetGlobalAttributes {
        #holder;

        get holder() {
          return this.#holder;
        }

        #set = (name, value) => {
          this.#holder.setAttribute(name, value);
        };
        #remove = name => {
          this.#holder.removeAttribute(name);
        };

        initialise(holder) {
          this.#holder = holder;

          _attributes.attributes.values.forEach((value, name) => this.#set(name, value));

          _attributes.attributes.on('add', this.#set);

          _attributes.attributes.on('remove', this.#remove);
        }

        destroy() {
          _attributes.attributes.off('add', this.#set);

          _attributes.attributes.off('remove', this.#remove);
        }

      }

      exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
    }
  });
  /*********************************
  INTERNAL MODULE: ./widget/checksum
  *********************************/

  ims.set('./widget/checksum', {
    hash: 1702419318,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      function _default(s) {
        let hash = 0,
            i,
            c;
        const length = s.length;

        if (length === 0) {
          return hash;
        }

        for (i = 0; i < length; i++) {
          c = s.charCodeAt(i);
          hash = (hash << 5) - hash + c;
          hash = hash & hash; // Convert to 32bit integer
        }

        return hash.toString().replace('-', 'n');
      }

      ;
    }
  });
  /****************************
  INTERNAL MODULE: ./widget/csr
  ****************************/

  ims.set('./widget/csr', {
    hash: 3321378481,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetCSR = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class WidgetCSR extends _core.Events {
        #widget;
        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #controller;

        get controller() {
          return this.#controller;
        }

        #error;

        get error() {
          return this.#error;
        }

        #loading = false;

        get loading() {
          return this.#loading;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #holders = new Set(['initialised', 'loaded']);

        initialise() {
          // Check if CSR is enabled (default) for this widget
          if (!this.#widget.specs.render.csr) return;
          if (!this.#holders.has('initialised')) throw new Error('Widget CSR already initialised');
          this.#holders.delete('initialised');
          this.#render();
        }

        constructor(widget) {
          super();
          this.#widget = widget; // Check if CSR is enabled (default) for this widget

          if (!this.#widget.specs.render.csr) return;
          const url = this.#widget.specs.id;
          bimport(url).then(bundle => {
            this.#bundle = bundle;
            this.#loading = false;
            this.#loaded = true;
            this.#holders.delete('loaded');
            this.#render();
          }).catch(exc => {
            console.error(`Error loading widget "${url}"`, exc.stack);
            this.#error = exc.message;
            this.#loading = false;
          });
        }

        #render = () => {
          // Render the widget once the connectedCallback is called and the bundle was imported
          if (this.#holders.size) return;
          const {
            Controller
          } = this.#bundle;

          if (!Controller || typeof Controller !== 'function') {
            const message = `Widget "${this.#widget.localName}" does not export its Controller`;
            console.error(message);
            this.#error = message;
            return;
          }

          this.#controller = new Controller(this.#widget);
          this.#controller.initialise().then(() => this.trigger('controller.initialised')).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
        };

        disconnect() {
          this.#controller?.disconnect?.();
        }

        attributeChanged(name, old, value) {
          this.#controller?.attributeChanged(name, old, value);
        }

      }

      exports.WidgetCSR = WidgetCSR;
    }
  });
  /***********************************
  INTERNAL MODULE: ./widget/identifier
  ***********************************/

  ims.set('./widget/identifier', {
    hash: 408441166,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetIdentifier = void 0;
      /**
       * The widget identifier relies on its initial attributes to uniquely identify it
       * in ssr and static generated environments.
       *
       */

      class WidgetIdentifier {
        #widget;
        #initial;

        get initial() {
          return this.#initial;
        }

        constructor(widget) {
          this.#widget = widget;
        }

      }

      exports.WidgetIdentifier = WidgetIdentifier;
    }
  });
  /******************************
  INTERNAL MODULE: ./widget/index
  ******************************/

  ims.set('./widget/index', {
    hash: 2095098378,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondWidget = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _instances = require("../instances");

      var _sr = require("./sr");

      var _csr = require("./csr");

      var _ssr = require("./ssr");

      var _identifier = require("./identifier");

      var _attributes = require("./attributes");

      var _styles = require("./styles"); // In SSR environment HTMLElement is not defined


      const Element = typeof HTMLElement === 'undefined' ? null : HTMLElement;
      /*bundle*/

      class BeyondWidget extends Element {
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

        #host;

        get host() {
          return this.#host;
        }

        #identifier;

        get identifier() {
          return this.#identifier;
        }

        #holder;

        get holder() {
          return this.#holder;
        }

        #sr;

        get sr() {
          return this.#sr;
        }

        #csr;

        get csr() {
          return this.#csr;
        }

        get controller() {
          return this.#csr.controller;
        }

        #ssr;

        get ssr() {
          return this.#ssr;
        }

        #attributes;
        #styles;

        get styles() {
          return this.#styles;
        } // To identify where the widget is in the widgets tree


        #wnode;

        get wnode() {
          return this.#wnode;
        }

        get wparent() {
          return this.#wnode.parent;
        }

        get wchildren() {
          return [...this.#wnode.children];
        }
        /**
         * Actually required by routing to call the .show & .hide methods once the controller is initialised
         */


        #oncontroller = () => {
          const event = new CustomEvent('controller.initialised', {
            bubbles: false,
            composed: false
          });
          this.dispatchEvent(event);
        };

        constructor(specs) {
          super();
          this.#specs = specs;
          this.attachShadow({
            mode: 'open'
          });

          this.#host = (() => {
            const split = specs.id.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            if (!_core.projects.has(pkg)) throw new Error(`Project "${pkg}" is not registered`);
            return _core.projects.get(pkg).host;
          })();

          this.#attributes = new _attributes.WidgetGlobalAttributes();
          this.#identifier = new _identifier.WidgetIdentifier(this);
          this.#sr = new _sr.WidgetSR(this);
          this.#ssr = new _ssr.WidgetSSR(this);
          this.#csr = new _csr.WidgetCSR(this);
          this.#csr?.on('controller.initialised', this.#oncontroller);
          this.#styles = new _styles.StylesManager(this);
        }

        connectedCallback() {
          // Register the widget in the instances registry after connectedCallback is done
          this.#wnode = _instances.instances.register(this);
          this.#holder = document.createElement('span');
          this.#holder.style.display = 'none';
          this.shadowRoot.append(this.#holder);
          this.#attributes.initialise(this.#holder);
          this.#ssr.initialise().catch(exc => console.error(exc.stack));
          this.#sr.initialise().catch(exc => console.error(exc.stack));
          this.#csr.initialise();
        }

        disconnectedCallback() {
          this.#csr.disconnect();
        }

        attributeChangedCallback(name, old, value) {
          this.#csr.attributeChanged(name, old, value);
        }

      }

      exports.BeyondWidget = BeyondWidget;
    }
  });
  /*********************************
  INTERNAL MODULE: ./widget/renderer
  *********************************/

  ims.set('./widget/renderer', {
    hash: 1619497812,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Renderer = void 0;

      var _core = require("@beyond-js/kernel/core");

      class Renderer {
        #widget;

        constructor(widget) {
          this.#widget = widget;
        } // Cancellation token


        #ct = 0;

        async render(sr) {
          const ct = ++this.#ct;
          const widget = this.#widget;
          const {
            specs
          } = widget;

          if (sr.errors?.length) {
            console.error(`Error fetching static rendered widget "${specs.name}":`, sr.errors);
            return;
          } // Append css code


          const {
            holder,
            styles
          } = widget; // Check if already rendered by CSR

          if (holder.children.length) return;
          if (!sr.html) return '';

          holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, (str, pkg) => {
            if (!_core.projects.has(pkg)) {
              const {
                id
              } = this.#widget;
              console.warn(`Project "${pkg}" is a dependency of widget "${id}" not registered`);
              return `##_!${pkg}_!##`;
            }

            return _core.projects.get(pkg).host;
          }))(); // Set the widget styles to be able to know when they are loaded to avoid FOUC (flash of unstyled content)


          const links = [];
          const resources = holder.querySelectorAll('link');
          resources.forEach(node => links.push(node.href));
          links.length && styles.initialise(links);
          resources.forEach(node => node.localName === 'link' && node.addEventListener('load', styles.onloaded)); // Wait for style sheets be ready

          await styles?.ready;
          if (this.#ct !== ct) return; // Once the styles are loaded, show the content of the widget

          holder.style.display = '';
        }

      }

      exports.Renderer = Renderer;
    }
  });
  /***************************
  INTERNAL MODULE: ./widget/sr
  ***************************/

  ims.set('./widget/sr', {
    hash: 34491550,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSR = void 0;

      var _checksum = require("./checksum");

      var _renderer = require("./renderer");

      class WidgetSR {
        #widget;
        #renderer;

        constructor(widget) {
          this.#widget = widget;
          this.#renderer = new _renderer.Renderer(widget);
        }

        #initialised = false;

        async initialise() {
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const {
            specs
          } = this.#widget; // Check if SR is enabled for this widget

          if (!specs.render.sr) return;

          const language = (() => {
            const {
              multilanguage
            } = specs.render;
            if (!multilanguage) return '';
            let language = localStorage.__beyond_language;
            language = language ? language : navigator.language;
            language = language.slice(0, 2);
            return `${language}:`;
          })();

          let resource;

          if (specs.is === 'page') {
            let key = `${language}${specs.name}//${location.pathname}${location.search}`;
            resource = (0, _checksum.default)(key);
          } else if (specs.is === 'layout') {
            resource = (0, _checksum.default)(`${language}${specs.name}`);
          } else {
            const compute = new Map();
            specs.attrs?.forEach(attr => {
              const value = this.#widget.getAttribute(attr);
              value && compute.set(attr, value);
            });
            let key = language;
            [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
            resource = (0, _checksum.default)(key);
          }

          const {
            host
          } = this.#widget;
          const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;

          try {
            const response = await fetch(url);

            if (response.status !== 200) {
              console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
              return;
            }

            const sr = await response.json(); // Finally render the widget

            await this.#renderer.render(sr);
          } catch (exc) {
            console.error('Widget static content fetch error:', exc.message);
          }
        }

      }

      exports.WidgetSR = WidgetSR;
    }
  });
  /****************************
  INTERNAL MODULE: ./widget/ssr
  ****************************/

  ims.set('./widget/ssr', {
    hash: 3216547572,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSSR = void 0;

      var _prerendered = require("../prerendered");

      var _renderer = require("./renderer");

      class WidgetSSR {
        #widget;
        #renderer;
        #prerender;

        get prerender() {
          return this.#prerender;
        }

        constructor(widget) {
          this.#widget = widget;
          this.#renderer = new _renderer.Renderer(widget);
        }

        #initialised = false;
        /**
         * Check if widget is already pre-rendered (index.html makes a page ssr fetch)
         */

        async initialise() {
          // Check if SSR is enabled for this widget
          if (!this.#widget.specs.render.ssr) return;
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const widget = this.#widget;
          const {
            specs
          } = widget;
          const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);

          const found = _prerendered.prerender.find(specs.name, attrs); // If the widget has not been loaded by routing SSR, then load the widget alone


          if (!found) {
            return await this.#load();
          }

          this.#prerender = found; // Finally render the widget

          await this.#renderer.render(found);
        }

        async #load() {
          const {
            specs
          } = this.#widget;
          const {
            id,
            name
          } = specs;
          const host = await (async () => {
            const split = id.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            const {
              ssr: config
            } = (await bimport(`${pkg}/config`)).default;

            if (!config || !config.host) {
              console.error(`Project "${pkg}" does not support SSR (host not configured). ` + `Required by "${name}" widget.`);
              return;
            }

            return config.host;
          })();
          if (!host) return;

          const language = (() => {
            const {
              multilanguage
            } = specs.render;
            if (!multilanguage) return '';
            let language = localStorage.__beyond_language;
            language = language ? language : navigator.language;
            language = language.slice(0, 2);
            return `&language=${language}`;
          })();

          let attrs = (() => {
            if (!specs.attrs?.length) return '';
            let attrs = '&attrs=' + specs.attrs.join(',');
            specs.attrs.forEach(attr => {
              const value = this.#widget.getAttribute(attr);
              if (!value) return;
              attrs += `&attr.${attr}=${value}`;
            });
          })();

          const url = `${host}/widget?name=${name}${language}${attrs}`;

          try {
            const response = await fetch(url);

            if (response.status !== 200) {
              console.error(`Error fetching SSR of widget "${specs.name}". Status code: ${response.status}`);
              return;
            }

            const sr = await response.json(); // Finally render the widget

            await this.#renderer.render(sr);
          } catch (exc) {
            console.error(exc.stack);
          }
        }

      }

      exports.WidgetSSR = WidgetSSR;
    }
  });
  /**************************************
  INTERNAL MODULE: ./widget/styles/global
  **************************************/

  ims.set('./widget/styles/global', {
    hash: 2064651698,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GlobalCSS = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class GlobalCSS extends _core.Events {
        #host;
        #version = 0;

        constructor(host) {
          super();
          this.#host = host;
        }

        get link() {
          const version = this.#version !== 0 ? `?version=${this.#version}` : '';
          return `${this.#host}global.css${version}`;
        }

        update() {
          this.#version++;
          this.trigger('change');
        }

      }

      exports.GlobalCSS = GlobalCSS;
    }
  });
  /*************************************
  INTERNAL MODULE: ./widget/styles/index
  *************************************/

  ims.set('./widget/styles/index', {
    hash: 1473599546,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesManager = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _link = require("./link");

      var _global = require("./global");
      /*bundle*/


      class StylesManager extends Set {
        #events = new _core.Events();
        on = (event, listener) => this.#events.on(event, listener);
        off = (event, listener) => this.#events.off(event, listener);
        #loaded = new Map();
        #globalcss;
        #version = 0;

        get version() {
          return this.#version;
        }

        #changed() {
          this.#version++;
          this.#resolved && this.#events.trigger('change');
        }

        get resources() {
          return new Set([...this.#loaded.keys()]);
        }

        get loaded() {
          this.#check();
          return this.#resolved;
        }

        #promise;
        #resolved = false;
        #resolve;

        get ready() {
          this.#check();
          return this.#promise;
        }

        onloaded = event => {
          const href = typeof event === 'string' ? event : event.currentTarget.href;

          if (!this.#loaded.has(href)) {
            console.warn(`Stylesheet href="${href}" not registered`);
            return;
          }

          this.#loaded.set(href, true);
          this.#check();
          const changed = this.#purge();
          changed && this.#changed();
          return true;
        };

        #check() {
          if (this.#resolved) return true; // Check if all links are loaded

          const loaded = [...this.#loaded.values()].reduce((prev, loaded) => prev && loaded, true);
          loaded && this.#resolve();
          return this.#resolved = loaded;
        }
        /**
         * Remove style sheets that have been supplanted by newer hmr versions
         * @private
         */


        #purge() {
          const versions = {
            last: new Map(),
            values: new Map(),
            lastLoaded: new Map()
          };
          [...this.#loaded.keys()].forEach(href => {
            const link = new _link.default(href);
            const prevLast = versions.last.get(link.resource);
            const last = prevLast && prevLast > link.version ? prevLast : link.version;
            versions.last.set(link.resource, last);

            if (this.#loaded.get(link.href)) {
              const prevLastLoaded = versions.lastLoaded.get(link.resource);
              const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
              versions.lastLoaded.set(link.resource, lastLoaded);
            }

            const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : new Set();
            values.add(link.version);
            versions.values.set(link.resource, values);
          }); // Just keep the last loaded version and the loading versions

          const purge = [];
          [...this.#loaded.keys()].forEach(href => {
            const link = new _link.default(href);
            const lastLoaded = versions.lastLoaded.get(link.resource);
            link.version < lastLoaded && purge.push(link);
          });
          purge.forEach(link => this.#loaded.delete(link.href));
          return !!purge.length;
        }
        /**
         * Required to support global.css HMR
         *
         * @type {string[]}
         * @private
         */


        #last;
        #refresh = () => {
          if (!this.#last) return;
          const changed = this.#update(this.#last);
          changed && this.#changed();
        };

        #update(_links) {
          this.#last = _links;

          _links.unshift(this.#globalcss.link);

          const links = _links.map(link => new _link.default(link)); // Add the new style sheets


          let changed = false;
          links.forEach(link => {
            if (this.#loaded.has(link.href)) return;
            this.#loaded.set(link.href, false);
            changed = true;
          });
          return changed;
        }

        update(links) {
          const changed = this.#update(links);
          changed && this.#changed();
        }

        constructor(widget) {
          super();
          this.#globalcss = new _global.GlobalCSS(widget.host);
          this.#promise = new Promise(resolve => this.#resolve = resolve);
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        initialise(links) {
          if (this.#initialised) throw new Error(`Widget styles already initialised`);
          this.#initialised = true;
          this.#update(links);
          this.#globalcss.on('change', this.#refresh);
        }

        destroy() {
          this.#globalcss.off('change', this.#refresh);
        }

      }

      exports.StylesManager = StylesManager;
    }
  });
  /************************************
  INTERNAL MODULE: ./widget/styles/link
  ************************************/

  ims.set('./widget/styles/link', {
    hash: 3219871066,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      class _default {
        #href;

        get href() {
          return this.#href;
        }

        #resource;

        get resource() {
          return this.#resource;
        }

        #version;

        get version() {
          return this.#version;
        }

        constructor(href) {
          this.#href = href;
          const iv = href.split('?version=');
          this.#resource = iv[0];
          this.#version = iv[1] ? parseInt(iv[1]) : 0;
        }

      }

      exports.default = _default;
    }
  });
  /*************************
  INTERNAL MODULE: ./widgets
  *************************/

  ims.set('./widgets', {
    hash: 279691596,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.widgets = void 0;

      var _widget = require("./widget");

      var _instances = require("./instances");

      var _attributes = require("./attributes");

      require("./anchor");
      /*bundle*/


      const widgets = new class BeyondWidgets extends Map {
        #ssr = true;

        get ssr() {
          return this.#ssr;
        }

        constructor() {
          super();
        }

        setup(config) {
          this.#ssr = typeof config?.ssr === 'boolean' ? config.ssr : true;
        }

        get instances() {
          return _instances.instances;
        }

        get attributes() {
          return _attributes.attributes;
        }

        register(specs) {
          specs.forEach(specs => {
            // Widgets can be registered at application start, and later by the widget bundle
            if (this.has(specs.name)) return;
            specs.render = specs.render ? specs.render : {
              csr: true,
              ssr: false,
              sr: false
            };
            const {
              name,
              render
            } = specs;
            render.csr = typeof render.csr === 'boolean' ? render.csr : true;
            this.set(name, specs); // Do not register the custom elements when rendering in the server

            if (typeof process === 'object') return;
            customElements.define(name, class extends _widget.BeyondWidget {
              static get observedAttributes() {
                return specs.attrs ? specs.attrs : [];
              }

              constructor() {
                super(specs);
              }

            });
          });
        }

      }();
      exports.widgets = widgets;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./attributes",
    "from": "attributes",
    "name": "attributes"
  }, {
    "im": "./instances/node",
    "from": "NodeWidget",
    "name": "NodeWidget"
  }, {
    "im": "./prerendered/index",
    "from": "prerender",
    "name": "prerender"
  }, {
    "im": "./widget/csr",
    "from": "IBeyondWidgetController",
    "name": "IBeyondWidgetController"
  }, {
    "im": "./widget/csr",
    "from": "WidgetCSR",
    "name": "WidgetCSR"
  }, {
    "im": "./widget/index",
    "from": "IWidgetSpecs",
    "name": "IWidgetSpecs"
  }, {
    "im": "./widget/index",
    "from": "BeyondWidget",
    "name": "BeyondWidget"
  }, {
    "im": "./widget/styles/global",
    "from": "GlobalCSS",
    "name": "GlobalCSS"
  }, {
    "im": "./widget/styles/index",
    "from": "StylesManager",
    "name": "StylesManager"
  }, {
    "im": "./widgets",
    "from": "widgets",
    "name": "widgets"
  }];
  let attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets; // Module exports

  _exports.widgets = widgets;
  _exports.StylesManager = StylesManager;
  _exports.GlobalCSS = GlobalCSS;
  _exports.BeyondWidget = BeyondWidget;
  _exports.IWidgetSpecs = IWidgetSpecs;
  _exports.WidgetCSR = WidgetCSR;
  _exports.IBeyondWidgetController = IBeyondWidgetController;
  _exports.prerender = prerender;
  _exports.NodeWidget = NodeWidget;
  _exports.attributes = attributes;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'attributes') && (_exports.attributes = attributes = require ? require('./attributes').attributes : value);
    (require || prop === 'NodeWidget') && (_exports.NodeWidget = NodeWidget = require ? require('./instances/node').NodeWidget : value);
    (require || prop === 'prerender') && (_exports.prerender = prerender = require ? require('./prerendered/index').prerender : value);
    (require || prop === 'IBeyondWidgetController') && (_exports.IBeyondWidgetController = IBeyondWidgetController = require ? require('./widget/csr').IBeyondWidgetController : value);
    (require || prop === 'WidgetCSR') && (_exports.WidgetCSR = WidgetCSR = require ? require('./widget/csr').WidgetCSR : value);
    (require || prop === 'IWidgetSpecs') && (_exports.IWidgetSpecs = IWidgetSpecs = require ? require('./widget/index').IWidgetSpecs : value);
    (require || prop === 'BeyondWidget') && (_exports.BeyondWidget = BeyondWidget = require ? require('./widget/index').BeyondWidget : value);
    (require || prop === 'GlobalCSS') && (_exports.GlobalCSS = GlobalCSS = require ? require('./widget/styles/global').GlobalCSS : value);
    (require || prop === 'StylesManager') && (_exports.StylesManager = StylesManager = require ? require('./widget/styles/index').StylesManager : value);
    (require || prop === 'widgets') && (_exports.widgets = widgets = require ? require('./widgets').widgets : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BSUEsT0FBT0EsT0FBUCxLQUFtQixRQUFuQixJQUErQkMsY0FBYyxDQUFDQyxNQUFmRCxDQUFzQixhQUF0QkEsRUFBcUMsY0FBY0UsV0FBZCxDQUF5QjtRQUN6Rjs7UUFFQUM7VUFDSTtVQUNBQyxPQUFPLENBQUMsMkJBQUQsQ0FBUEEsQ0FBcUNDLElBQXJDRCxDQUEwQyxDQUFDO1lBQUNFO1VBQUQsQ0FBRCxLQUFlLEtBQUssUUFBTCxHQUFnQkEsT0FBekVGO1FBQ0g7O1FBRURHLGlCQUFpQjtVQUNiLEtBQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLE1BQUs7WUFDaEMsSUFBSSxDQUFDLEtBQUtDLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBTCxFQUFvQztZQUVwQyxNQUFNQyxHQUFHLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixVQUFsQixDQUFaO1lBQ0EsS0FBSyxRQUFMLEVBQWVDLFNBQWYsQ0FBeUJGLEdBQXpCO1VBSko7UUFNSDs7TUFmd0YsQ0FBOURWLENBQS9COzs7Ozs7Ozs7Ozs7Ozs7OztNQ0pBO01BRU87OztNQUNQLE1BQU1hLFVBQVUsR0FBRyxJQUFJLGNBQWNDLFlBQWQsQ0FBb0I7UUFDdkMsVUFBK0IsSUFBSUMsR0FBSixFQUEvQjs7UUFDVSxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFREMsR0FBRyxDQUFDQyxJQUFELEVBQWVDLEtBQWYsRUFBNEI7VUFDM0IsS0FBSyxPQUFMLENBQWFDLEdBQWIsQ0FBaUJGLElBQWpCLEVBQXVCQyxLQUF2QjtVQUNBLEtBQUtFLE9BQUwsQ0FBYSxLQUFiLEVBQW9CSCxJQUFwQixFQUEwQkMsS0FBMUI7VUFDQSxLQUFLRSxPQUFMLENBQWEsUUFBYjtRQUNIOztRQUVEQyxNQUFNLENBQUNKLElBQUQsRUFBYTtVQUNmLEtBQUssT0FBTCxDQUFhSyxNQUFiLENBQW9CTCxJQUFwQjtVQUNBLEtBQUtHLE9BQUwsQ0FBYSxRQUFiLEVBQXVCSCxJQUF2QjtVQUNBLEtBQUtHLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7O01BaEJzQyxDQUF4QixFQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DRkEsK0JBRUE7TUFDQTs7O01BQ08sTUFBTUcsU0FBUyxHQUFHLElBQUksY0FBY0MsR0FBZCxDQUErQjtRQUN4REMsUUFBUSxDQUFDQyxNQUFELEVBQXFCO1VBQ3pCLEtBQUtWLEdBQUwsQ0FBU1UsTUFBVCxFQUR5QixDQUd6Qjs7VUFDQSxNQUFNQyxNQUFNLEdBQWlCLENBQUMsTUFBbUI7WUFDN0MsSUFBSUEsTUFBTSxHQUFTRCxNQUFuQjs7WUFDQSxPQUFPLElBQVAsRUFBYTtjQUNULE1BQU1FLElBQUksR0FBU0QsTUFBTSxDQUFDRSxXQUFQRixFQUFuQjtjQUNBLElBQUlDLElBQUksS0FBS0UsUUFBYixFQUF1QjtjQUV2QkgsTUFBTSxHQUFnQkMsSUFBSyxDQUFDRyxJQUE1Qko7Y0FDQSxJQUFJLEtBQUtLLEdBQUwsQ0FBdUJMLE1BQXZCLENBQUosRUFBb0MsT0FBcUJBLE1BQXJCO1lBQ3ZDO1VBUndCLElBQTdCOztVQVdBLE1BQU1NLElBQUksR0FBRyxJQUFJQyxnQkFBSixDQUFlUixNQUFmLEVBQXVCQyxNQUF2QixDQUFiO1VBQ0FBLE1BQU0sRUFBRVEsS0FBUlIsQ0FBY1MsUUFBZFQsQ0FBdUJYLEdBQXZCVyxDQUEyQkQsTUFBM0JDO1VBRUEsS0FBS1gsR0FBTCxDQUFTVSxNQUFUO1VBQ0EsT0FBT08sSUFBUDtRQUNIOztNQXJCdUQsQ0FBbkMsRUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSEE7O01BQVUsTUFDWEMsVUFEVyxDQUNEO1FBQ0g7O1FBQ0MsSUFBTlIsTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFaO1FBQ0g7O1FBRVE7O1FBQ0MsSUFBTkMsTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFaO1FBQ0g7O1FBRVEsWUFBK0IsSUFBSUgsR0FBSixFQUEvQjs7UUFDRyxJQUFSWSxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFRGxDLFlBQVl3QixNQUFaeEIsRUFBa0N5QixNQUFsQ3pCLEVBQXVEO1VBQ25ELEtBQUssT0FBTCxHQUFld0IsTUFBZjtVQUNBLEtBQUssT0FBTCxHQUFlQyxNQUFmO1FBQ0g7O01BbkJXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUREVDs7TUFDUCxNQUFNVSxTQUFTLEdBQUcsSUFBSTtRQUNULE9BQTBCLEVBQTFCOztRQUNGLElBQUhDLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVEQyxJQUFJLENBQUNDLE9BQUQsRUFBa0JDLEtBQWxCLEVBQTRDO1VBQzVDLE9BQU8sS0FBSyxJQUFMLENBQVVGLElBQVYsQ0FBZUcsSUFBSSxJQUFHO1lBQ3pCLElBQUlBLElBQUksQ0FBQ0YsT0FBTEUsS0FBaUJGLE9BQXJCLEVBQThCLE9BQU8sS0FBUDtZQUM5QixNQUFNRyxNQUFNLEdBQUcsSUFBSTdCLEdBQUosQ0FBUTRCLElBQUksQ0FBQzlCLFVBQWIsQ0FBZjtZQUNBLE9BQU8sQ0FBQyxHQUFHNkIsS0FBSixFQUFXRyxNQUFYLENBQWtCLENBQUNDLElBQUQsRUFBTyxDQUFDNUIsSUFBRCxFQUFPQyxLQUFQLENBQVAsS0FBeUIyQixJQUFJLElBQUlGLE1BQU0sQ0FBQ0csR0FBUEgsQ0FBVzFCLElBQVgwQixNQUFxQnpCLEtBQXhFLEVBQStFLElBQS9FLENBQVA7VUFIRyxFQUFQO1FBS0g7O01BWmlCLENBQUosRUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztNREhBO01BRUE7Ozs7O01BR00sTUFBTzZCLHNCQUFQLENBQTZCO1FBQy9COztRQUNVLElBQU5DLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIOztRQUVELE9BQU8sQ0FBQy9CLElBQUQsRUFBZUMsS0FBZixLQUFnQztVQUNuQyxLQUFLLE9BQUwsQ0FBYStCLFlBQWIsQ0FBMEJoQyxJQUExQixFQUFnQ0MsS0FBaEM7UUFESjtRQUlBLFVBQVdELElBQUQsSUFBaUI7VUFDdkIsS0FBSyxPQUFMLENBQWFpQyxlQUFiLENBQTZCakMsSUFBN0I7UUFESjs7UUFJQWtDLFVBQVUsQ0FBQ0gsTUFBRCxFQUF3QjtVQUM5QixLQUFLLE9BQUwsR0FBZUEsTUFBZjs7VUFFQXBDLHVCQUFXRyxNQUFYSCxDQUFrQndDLE9BQWxCeEMsQ0FBMEIsQ0FBQ00sS0FBRCxFQUFRRCxJQUFSLEtBQWlCLEtBQUssSUFBTCxDQUFVQSxJQUFWLEVBQWdCQyxLQUFoQixDQUEzQ047O1VBQ0FBLHVCQUFXeUMsRUFBWHpDLENBQWMsS0FBZEEsRUFBcUIsS0FBSyxJQUExQkE7O1VBQ0FBLHVCQUFXeUMsRUFBWHpDLENBQWMsUUFBZEEsRUFBd0IsS0FBSyxPQUE3QkE7UUFDSDs7UUFFRDBDLE9BQU87VUFDSDFDLHVCQUFXMkMsR0FBWDNDLENBQWUsS0FBZkEsRUFBc0IsS0FBSyxJQUEzQkE7O1VBQ0FBLHVCQUFXMkMsR0FBWDNDLENBQWUsUUFBZkEsRUFBeUIsS0FBSyxPQUE5QkE7UUFDSDs7TUF6QjhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01HTHJCLGtCQUFXNEMsQ0FBWCxFQUFvQjtRQUM5QixJQUFJQyxJQUFJLEdBQUcsQ0FBWDtRQUFBLElBQWNDLENBQWQ7UUFBQSxJQUFpQkMsQ0FBakI7UUFDQSxNQUFNQyxNQUFNLEdBQUdKLENBQUMsQ0FBQ0ksTUFBakI7O1FBRUEsSUFBSUEsTUFBTSxLQUFLLENBQWYsRUFBa0I7VUFDZCxPQUFPSCxJQUFQO1FBQ0g7O1FBQ0QsS0FBS0MsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRSxNQUFoQixFQUF3QkYsQ0FBQyxFQUF6QixFQUE2QjtVQUN6QkMsQ0FBQyxHQUFHSCxDQUFDLENBQUNLLFVBQUZMLENBQWFFLENBQWJGLENBQUpHO1VBQ0FGLElBQUksR0FBSSxDQUFDQSxJQUFJLElBQUksQ0FBVCxJQUFjQSxJQUFkLEdBQXNCRSxDQUE5QkY7VUFDQUEsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQWRBLENBSHlCLENBR0w7UUFDdkI7O1FBRUQsT0FBT0EsSUFBSSxDQUFDSyxRQUFMTCxHQUFnQk0sT0FBaEJOLENBQXdCLEdBQXhCQSxFQUE2QixHQUE3QkEsQ0FBUDtNQUNIOztNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztNQ2REO01BWU87OztNQUFVLE1BQ1hPLFNBRFcsU0FDT25ELFlBRFAsQ0FDYTtRQUNqQjtRQUVUOztRQUNVLElBQU5vRCxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRDs7UUFDYyxJQUFWQyxVQUFVO1VBQ1YsT0FBTyxLQUFLLFdBQVo7UUFDSDs7UUFFRDs7UUFDUyxJQUFMQyxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFRCxXQUFvQixLQUFwQjs7UUFDVyxJQUFQQyxPQUFPO1VBQ1AsT0FBTyxLQUFLLFFBQVo7UUFDSDs7UUFFRCxVQUFtQixLQUFuQjs7UUFDVSxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRCxXQUFXLElBQUk3QyxHQUFKLENBQVEsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLENBQVIsQ0FBWDs7UUFFQTJCLFVBQVU7VUFDTjtVQUNBLElBQUksQ0FBQyxLQUFLLE9BQUwsQ0FBYW1CLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxHQUEvQixFQUFvQztVQUVwQyxJQUFJLENBQUMsS0FBSyxRQUFMLENBQWN4QyxHQUFkLENBQWtCLGFBQWxCLENBQUwsRUFBdUMsTUFBTSxJQUFJeUMsS0FBSixDQUFVLGdDQUFWLENBQU47VUFDdkMsS0FBSyxRQUFMLENBQWNuRCxNQUFkLENBQXFCLGFBQXJCO1VBQ0EsS0FBSyxPQUFMO1FBQ0g7O1FBRURwQixZQUFZd0IsTUFBWnhCLEVBQWdDO1VBQzVCO1VBQ0EsS0FBSyxPQUFMLEdBQWV3QixNQUFmLENBRjRCLENBSTVCOztVQUNBLElBQUksQ0FBQyxLQUFLLE9BQUwsQ0FBYTRDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxHQUEvQixFQUFvQztVQUVwQyxNQUFNL0QsR0FBRyxHQUFHLEtBQUssT0FBTCxDQUFhNkQsS0FBYixDQUFtQkksRUFBL0I7VUFDQXZFLE9BQU8sQ0FBQ00sR0FBRCxDQUFQTixDQUFhQyxJQUFiRCxDQUFtQjhELE1BQUQsSUFBZ0I7WUFDOUIsS0FBSyxPQUFMLEdBQWVBLE1BQWY7WUFDQSxLQUFLLFFBQUwsR0FBZ0IsS0FBaEI7WUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFmO1lBQ0EsS0FBSyxRQUFMLENBQWMzQyxNQUFkLENBQXFCLFFBQXJCO1lBQ0EsS0FBSyxPQUFMO1VBTEosR0FNR3FELEtBTkh4RSxDQU1VeUUsR0FBRCxJQUFlO1lBQ3BCQyxPQUFPLENBQUNWLEtBQVJVLENBQWMseUJBQXlCcEUsR0FBRyxHQUExQ29FLEVBQStDRCxHQUFHLENBQUNFLEtBQW5ERDtZQUNBLEtBQUssTUFBTCxHQUFjRCxHQUFHLENBQUNHLE9BQWxCO1lBQ0EsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO1VBVEo7UUFXSDs7UUFFRCxVQUFVLE1BQUs7VUFDWDtVQUNBLElBQUksS0FBSyxRQUFMLENBQWNDLElBQWxCLEVBQXdCO1VBRXhCLE1BQU07WUFBQ0M7VUFBRCxJQUFlLEtBQUssT0FBMUI7O1VBQ0EsSUFBSSxDQUFDQSxVQUFELElBQWUsT0FBT0EsVUFBUCxLQUFzQixVQUF6QyxFQUFxRDtZQUNqRCxNQUFNRixPQUFPLEdBQUcsV0FBVyxLQUFLLE9BQUwsQ0FBYUcsU0FBUyxrQ0FBakQ7WUFDQUwsT0FBTyxDQUFDVixLQUFSVSxDQUFjRSxPQUFkRjtZQUNBLEtBQUssTUFBTCxHQUFjRSxPQUFkO1lBQ0E7VUFDSDs7VUFFRCxLQUFLLFdBQUwsR0FBbUIsSUFBSUUsVUFBSixDQUFlLEtBQUssT0FBcEIsQ0FBbkI7VUFDQSxLQUFLLFdBQUwsQ0FBaUI5QixVQUFqQixHQUNLL0MsSUFETCxDQUNVLE1BQU0sS0FBS2dCLE9BQUwsQ0FBYSx3QkFBYixDQURoQixFQUVLdUQsS0FGTCxDQUVZQyxHQUFELElBQWdCQyxPQUFPLENBQUNNLEdBQVJOLENBQVlELEdBQUcsWUFBWUgsS0FBZkcsR0FBdUJBLEdBQUcsQ0FBQ0UsS0FBM0JGLEdBQW1DQSxHQUEvQ0MsQ0FGM0I7UUFiSjs7UUFrQkFPLFVBQVU7VUFDTixLQUFLLFdBQUwsRUFBa0JBLFVBQWxCO1FBQ0g7O1FBRURDLGdCQUFnQixDQUFDcEUsSUFBRCxFQUFlcUUsR0FBZixFQUE0QnBFLEtBQTVCLEVBQXlDO1VBQ3JELEtBQUssV0FBTCxFQUFrQm1FLGdCQUFsQixDQUFtQ3BFLElBQW5DLEVBQXlDcUUsR0FBekMsRUFBOENwRSxLQUE5QztRQUNIOztNQXBGeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1g5Qjs7Ozs7O01BS00sTUFBT3FFLGdCQUFQLENBQXVCO1FBQ2hCO1FBRUE7O1FBQ0UsSUFBUEMsT0FBTztVQUNQLE9BQU8sS0FBSyxRQUFaO1FBQ0g7O1FBRUR0RixZQUFZd0IsTUFBWnhCLEVBQWdDO1VBQzVCLEtBQUssT0FBTCxHQUFld0IsTUFBZjtRQUNIOztNQVZ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNSlA3Qjs7TUFDQTs7TUFFQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQSxtQ0FrQkE7OztNQUNBLE1BQU0rRCxPQUFPLEdBQUcsT0FBT3hGLFdBQVAsS0FBdUIsV0FBdkIsR0FBcUMsSUFBckMsR0FBNENBLFdBQTVEO01BRU87O01BQVUsTUFDWHlGLFlBRFcsU0FDVUQsT0FEVixDQUNpQjtRQUNyQjs7UUFDQSxJQUFMbkIsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O1FBRUssSUFBRnFCLEVBQUU7VUFDRixPQUFPLEtBQUssTUFBTCxDQUFZQSxFQUFuQjtRQUNIOztRQUVRLElBQUxDLEtBQUs7VUFDTCxPQUFPLEtBQUssTUFBTCxDQUFZQSxLQUFuQjtRQUNIOztRQUVTLElBQU5DLE1BQU07VUFDTixPQUFPLEtBQUssTUFBTCxDQUFZQSxNQUFuQjtRQUNIOztRQUVEOztRQUNRLElBQUo5RCxJQUFJO1VBQ0osT0FBTyxLQUFLLEtBQVo7UUFDSDs7UUFFUTs7UUFDSyxJQUFWK0QsVUFBVTtVQUNWLE9BQU8sS0FBSyxXQUFaO1FBQ0g7O1FBRUQ7O1FBQ1UsSUFBTjlDLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIOztRQUVROztRQUNILElBQUYrQyxFQUFFO1VBQ0YsT0FBTyxLQUFLLEdBQVo7UUFDSDs7UUFFUTs7UUFDRixJQUFIdkIsR0FBRztVQUNILE9BQU8sS0FBSyxJQUFaO1FBQ0g7O1FBRWEsSUFBVk4sVUFBVTtVQUNWLE9BQU8sS0FBSyxJQUFMLENBQVVBLFVBQWpCO1FBQ0g7O1FBRVE7O1FBQ0YsSUFBSDVCLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVRO1FBRUE7O1FBQ0MsSUFBTjBELE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQXhEMEIsRUEyRDlCOzs7UUFDQTs7UUFDUyxJQUFMN0QsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O1FBRVUsSUFBUDhELE9BQU87VUFDUCxPQUFPLEtBQUssTUFBTCxDQUFZdEUsTUFBbkI7UUFDSDs7UUFFWSxJQUFUdUUsU0FBUztVQUNULE9BQU8sQ0FBQyxHQUFHLEtBQUssTUFBTCxDQUFZOUQsUUFBaEIsQ0FBUDtRQUNIO1FBRUQ7Ozs7O1FBR0EsZ0JBQWdCLE1BQUs7VUFDakIsTUFBTStELEtBQUssR0FBRyxJQUFJQyxXQUFKLENBQWdCLHdCQUFoQixFQUEwQztZQUFDQyxPQUFPLEVBQUUsS0FBVjtZQUFpQkMsUUFBUSxFQUFFO1VBQTNCLENBQTFDLENBQWQ7VUFDQSxLQUFLQyxhQUFMLENBQW1CSixLQUFuQjtRQUZKOztRQUtBakcsWUFBWW9FLEtBQVpwRSxFQUErQjtVQUMzQjtVQUNBLEtBQUssTUFBTCxHQUFjb0UsS0FBZDtVQUVBLEtBQUtrQyxZQUFMLENBQWtCO1lBQUNDLElBQUksRUFBRTtVQUFQLENBQWxCOztVQUVBLEtBQUssS0FBTCxHQUFhLENBQUMsTUFBSztZQUNmLE1BQU1DLEtBQUssR0FBR3BDLEtBQUssQ0FBQ0ksRUFBTkosQ0FBU29DLEtBQVRwQyxDQUFlLEdBQWZBLENBQWQ7WUFDQSxNQUFNcUMsR0FBRyxHQUFHRCxLQUFLLENBQUMsQ0FBRCxDQUFMQSxDQUFTRSxVQUFURixDQUFvQixHQUFwQkEsSUFBMkIsR0FBR0EsS0FBSyxDQUFDRyxLQUFOSCxFQUFhLElBQUlBLEtBQUssQ0FBQ0csS0FBTkgsRUFBYSxFQUE1REEsR0FBaUVBLEtBQUssQ0FBQ0csS0FBTkgsRUFBN0U7WUFDQSxJQUFJLENBQUNJLGVBQVM5RSxHQUFUOEUsQ0FBYUgsR0FBYkcsQ0FBTCxFQUF3QixNQUFNLElBQUlyQyxLQUFKLENBQVUsWUFBWWtDLEdBQUcscUJBQXpCLENBQU47WUFDeEIsT0FBT0csZUFBU2hFLEdBQVRnRSxDQUFhSCxHQUFiRyxFQUFrQi9FLElBQXpCO1VBSlMsSUFBYjs7VUFPQSxLQUFLLFdBQUwsR0FBbUIsSUFBSWdCLGtDQUFKLEVBQW5CO1VBQ0EsS0FBSyxXQUFMLEdBQW1CLElBQUl3Qyw0QkFBSixDQUFxQixJQUFyQixDQUFuQjtVQUNBLEtBQUssR0FBTCxHQUFXLElBQUl3QixZQUFKLENBQWEsSUFBYixDQUFYO1VBQ0EsS0FBSyxJQUFMLEdBQVksSUFBSUMsY0FBSixDQUFjLElBQWQsQ0FBWjtVQUNBLEtBQUssSUFBTCxHQUFZLElBQUloRCxjQUFKLENBQWMsSUFBZCxDQUFaO1VBQ0EsS0FBSyxJQUFMLEVBQVdYLEVBQVgsQ0FBYyx3QkFBZCxFQUF3QyxLQUFLLGFBQTdDO1VBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBSTRELHFCQUFKLENBQWtCLElBQWxCLENBQWY7UUFDSDs7UUFFRDNHLGlCQUFpQjtVQUNiO1VBQ0EsS0FBSyxNQUFMLEdBQWNpQixxQkFBVUUsUUFBVkYsQ0FBbUIsSUFBbkJBLENBQWQ7VUFFQSxLQUFLLE9BQUwsR0FBZU8sUUFBUSxDQUFDb0YsYUFBVHBGLENBQXVCLE1BQXZCQSxDQUFmO1VBQ0EsS0FBSyxPQUFMLENBQWFxRixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtVQUNBLEtBQUtDLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCLEtBQUssT0FBNUI7VUFFQSxLQUFLLFdBQUwsQ0FBaUJuRSxVQUFqQixDQUE0QixLQUFLLE9BQWpDO1VBRUEsS0FBSyxJQUFMLENBQVVBLFVBQVYsR0FBdUJ3QixLQUF2QixDQUE4QkMsR0FBRCxJQUFnQkMsT0FBTyxDQUFDVixLQUFSVSxDQUFjRCxHQUFHLENBQUNFLEtBQWxCRCxDQUE3QztVQUNBLEtBQUssR0FBTCxDQUFTMUIsVUFBVCxHQUFzQndCLEtBQXRCLENBQTZCQyxHQUFELElBQWdCQyxPQUFPLENBQUNWLEtBQVJVLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEJELENBQTVDO1VBQ0EsS0FBSyxJQUFMLENBQVUxQixVQUFWO1FBQ0g7O1FBRURvRSxvQkFBb0I7VUFDaEIsS0FBSyxJQUFMLENBQVVuQyxVQUFWO1FBQ0g7O1FBRURvQyx3QkFBd0IsQ0FBQ3ZHLElBQUQsRUFBZXFFLEdBQWYsRUFBNEJwRSxLQUE1QixFQUF5QztVQUM3RCxLQUFLLElBQUwsQ0FBVW1FLGdCQUFWLENBQTJCcEUsSUFBM0IsRUFBaUNxRSxHQUFqQyxFQUFzQ3BFLEtBQXRDO1FBQ0g7O01BNUg2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNSzdCbEM7O01BWU0sTUFBT3VHLFFBQVAsQ0FBZTtRQUNSOztRQUVUdkgsWUFBWXdCLE1BQVp4QixFQUFnQztVQUM1QixLQUFLLE9BQUwsR0FBZXdCLE1BQWY7UUFKYSxFQU9qQjs7O1FBQ0EsTUFBTSxDQUFOOztRQUVZLE1BQU42QyxNQUFNLENBQUN3QixFQUFELEVBQW9CO1VBQzVCLE1BQU0yQixFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQWxCO1VBRUEsTUFBTWhHLE1BQU0sR0FBRyxLQUFLLE9BQXBCO1VBQ0EsTUFBTTtZQUFDNEM7VUFBRCxJQUFVNUMsTUFBaEI7O1VBQ0EsSUFBSXFFLEVBQUUsQ0FBQzRCLE1BQUg1QixFQUFXbkMsTUFBZixFQUF1QjtZQUNuQmlCLE9BQU8sQ0FBQ1YsS0FBUlUsQ0FBYywwQ0FBMENQLEtBQUssQ0FBQ3JELElBQUksSUFBbEU0RCxFQUF3RWtCLEVBQUUsQ0FBQzRCLE1BQTNFOUM7WUFDQTtVQVB3QixFQVU1Qjs7O1VBQ0EsTUFBTTtZQUFDN0IsTUFBRDtZQUFTZ0Q7VUFBVCxJQUFtQnRFLE1BQXpCLENBWDRCLENBYTVCOztVQUNBLElBQUlzQixNQUFNLENBQUNaLFFBQVBZLENBQWdCWSxNQUFwQixFQUE0QjtVQUU1QixJQUFJLENBQUNtQyxFQUFFLENBQUM2QixJQUFSLEVBQWMsT0FBTyxFQUFQOztVQUNkNUUsTUFBTSxDQUFDNkUsU0FBUDdFLEdBQW1CLENBQUMsTUFBTStDLEVBQUUsQ0FBQzZCLElBQUg3QixDQUFRaEMsT0FBUmdDLENBQWdCLGdCQUFoQkEsRUFBa0MsQ0FBQytCLEdBQUQsRUFBTW5CLEdBQU4sS0FBYTtZQUNyRSxJQUFJLENBQUNHLGVBQVM5RSxHQUFUOEUsQ0FBYUgsR0FBYkcsQ0FBTCxFQUF3QjtjQUNwQixNQUFNO2dCQUFDcEM7Y0FBRCxJQUFPLEtBQUssT0FBbEI7Y0FDQUcsT0FBTyxDQUFDa0QsSUFBUmxELENBQWEsWUFBWThCLEdBQUcsZ0NBQWdDakMsRUFBRSxrQkFBOURHO2NBQ0EsT0FBTyxPQUFPOEIsR0FBRyxNQUFqQjtZQUNIOztZQUNELE9BQU9HLGVBQVNoRSxHQUFUZ0UsQ0FBYUgsR0FBYkcsRUFBa0IvRSxJQUF6QjtVQU5zQixFQUFQLEdBQW5CaUIsQ0FqQjRCLENBMEI1Qjs7O1VBQ0EsTUFBTWdGLEtBQUssR0FBYSxFQUF4QjtVQUNBLE1BQU1DLFNBQVMsR0FBR2pGLE1BQU0sQ0FBQ2tGLGdCQUFQbEYsQ0FBd0IsTUFBeEJBLENBQWxCO1VBQ0FpRixTQUFTLENBQUM3RSxPQUFWNkUsQ0FBa0JoRyxJQUFJLElBQUkrRixLQUFLLENBQUNHLElBQU5ILENBQVcvRixJQUFJLENBQUNtRyxJQUFoQkosQ0FBMUJDO1VBQ0FELEtBQUssQ0FBQ3BFLE1BQU5vRSxJQUFnQmhDLE1BQU0sQ0FBQzdDLFVBQVA2QyxDQUFrQmdDLEtBQWxCaEMsQ0FBaEJnQztVQUVBQyxTQUFTLENBQUM3RSxPQUFWNkUsQ0FBbUJoRyxJQUFELElBQ2RBLElBQUksQ0FBQ2lELFNBQUxqRCxLQUFtQixNQUFuQkEsSUFBNkJBLElBQUksQ0FBQzFCLGdCQUFMMEIsQ0FBc0IsTUFBdEJBLEVBQThCK0QsTUFBTSxDQUFDcUMsUUFBckNwRyxDQURqQ2dHLEVBaEM0QixDQW1DNUI7O1VBQ0EsTUFBTWpDLE1BQU0sRUFBRXNDLEtBQWQ7VUFDQSxJQUFJLEtBQUssR0FBTCxLQUFhWixFQUFqQixFQUFxQixPQXJDTyxDQXVDNUI7O1VBQ0ExRSxNQUFNLENBQUNtRSxLQUFQbkUsQ0FBYW9FLE9BQWJwRSxHQUF1QixFQUF2QkE7UUFDSDs7TUFuRGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DWnJCOztNQUNBOztNQUVNLE1BQU8rRCxRQUFQLENBQWU7UUFDUjtRQUNBOztRQUVUN0csWUFBWXdCLE1BQVp4QixFQUFnQztVQUM1QixLQUFLLE9BQUwsR0FBZXdCLE1BQWY7VUFDQSxLQUFLLFNBQUwsR0FBaUIsSUFBSStGLGtCQUFKLENBQWEvRixNQUFiLENBQWpCO1FBQ0g7O1FBRUQsZUFBZSxLQUFmOztRQUVnQixNQUFWeUIsVUFBVTtVQUNaLElBQUksS0FBSyxZQUFULEVBQXVCLE1BQU0sSUFBSXNCLEtBQUosQ0FBVSxnQ0FBVixDQUFOO1VBQ3ZCLEtBQUssWUFBTCxHQUFvQixJQUFwQjtVQUVBLE1BQU07WUFBQ0g7VUFBRCxJQUFVLEtBQUssT0FBckIsQ0FKWSxDQUtaOztVQUNBLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxNQUFORCxDQUFheUIsRUFBbEIsRUFBc0I7O1VBRXRCLE1BQU13QyxRQUFRLEdBQUcsQ0FBQyxNQUFLO1lBQ25CLE1BQU07Y0FBQ0M7WUFBRCxJQUFrQmxFLEtBQUssQ0FBQ0MsTUFBOUI7WUFDQSxJQUFJLENBQUNpRSxhQUFMLEVBQW9CLE9BQU8sRUFBUDtZQUVwQixJQUFJRCxRQUFRLEdBQUdFLFlBQVksQ0FBQ0MsaUJBQTVCO1lBQ0FILFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFILEdBQWNJLFNBQVMsQ0FBQ0osUUFBM0NBO1lBQ0FBLFFBQVEsR0FBR0EsUUFBUSxDQUFDSyxLQUFUTCxDQUFlLENBQWZBLEVBQWtCLENBQWxCQSxDQUFYQTtZQUNBLE9BQU8sR0FBR0EsUUFBUSxHQUFsQjtVQVBhLElBQWpCOztVQVVBLElBQUlNLFFBQUo7O1VBQ0EsSUFBSXZFLEtBQUssQ0FBQ3FCLEVBQU5yQixLQUFhLE1BQWpCLEVBQXlCO1lBQ3JCLElBQUl3RSxHQUFHLEdBQUcsR0FBR1AsUUFBUSxHQUFHakUsS0FBSyxDQUFDckQsSUFBSSxLQUFLOEgsUUFBUSxDQUFDQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxFQUExRTtZQUNBSixRQUFRLEdBQUcsdUJBQVNDLEdBQVQsQ0FBWEQ7VUFGSixPQUdPLElBQUl2RSxLQUFLLENBQUNxQixFQUFOckIsS0FBYSxRQUFqQixFQUEyQjtZQUM5QnVFLFFBQVEsR0FBRyx1QkFBUyxHQUFHTixRQUFRLEdBQUdqRSxLQUFLLENBQUNyRCxJQUFJLEVBQWpDLENBQVg0SDtVQURHLE9BRUE7WUFDSCxNQUFNSyxPQUFPLEdBQUcsSUFBSXBJLEdBQUosRUFBaEI7WUFDQXdELEtBQUssQ0FBQzdCLEtBQU42QixFQUFhbEIsT0FBYmtCLENBQXFCNkUsSUFBSSxJQUFHO2NBQ3hCLE1BQU1qSSxLQUFLLEdBQUcsS0FBSyxPQUFMLENBQWFSLFlBQWIsQ0FBMEJ5SSxJQUExQixDQUFkO2NBQ0FqSSxLQUFLLElBQUlnSSxPQUFPLENBQUMvSCxHQUFSK0gsQ0FBWUMsSUFBWkQsRUFBa0JoSSxLQUFsQmdJLENBQVRoSTtZQUZKO1lBS0EsSUFBSTRILEdBQUcsR0FBR1AsUUFBVjtZQUNBLENBQUMsR0FBR1csT0FBSixFQUNLRSxJQURMLENBQ1UsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsQ0FBQyxDQUFELENBQURBLEdBQU9DLENBQUMsQ0FBQyxDQUFELENBQVJELEdBQWMsQ0FBZEEsR0FBa0IsQ0FEdEMsRUFFS2pHLE9BRkwsQ0FFYSxDQUFDLENBQUNtRyxDQUFELEVBQUlDLENBQUosQ0FBRCxLQUFZVixHQUFHLElBQUksR0FBR1MsQ0FBQyxLQUFLQyxDQUFDLEtBRjFDO1lBR0FYLFFBQVEsR0FBRyx1QkFBU0MsR0FBVCxDQUFYRDtVQUNIOztVQUVELE1BQU07WUFBQzlHO1VBQUQsSUFBUyxLQUFLLE9BQXBCO1VBQ0EsTUFBTXRCLEdBQUcsR0FBRyxHQUFHc0IsSUFBSSxrQkFBa0J1QyxLQUFLLENBQUNyRCxJQUFJLElBQUk0SCxRQUFRLEtBQTNEOztVQUVBLElBQUk7WUFDQSxNQUFNWSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDakosR0FBRCxDQUE1Qjs7WUFDQSxJQUFJZ0osUUFBUSxDQUFDRSxNQUFURixLQUFvQixHQUF4QixFQUE2QjtjQUN6QjVFLE9BQU8sQ0FBQ1YsS0FBUlUsQ0FBYywwQ0FBMENQLEtBQUssQ0FBQ3JELElBQUksbUJBQW1Cd0ksUUFBUSxDQUFDRSxNQUFNLEVBQXBHOUU7Y0FDQTtZQUNIOztZQUNELE1BQU1rQixFQUFFLEdBQUcsTUFBTTBELFFBQVEsQ0FBQ0csSUFBVEgsRUFBakIsQ0FOQSxDQVFBOztZQUNBLE1BQU0sS0FBSyxTQUFMLENBQWVsRixNQUFmLENBQXNCd0IsRUFBdEIsQ0FBTjtVQVRKLEVBVUUsT0FBT25CLEdBQVAsRUFBWTtZQUNWQyxPQUFPLENBQUNWLEtBQVJVLENBQWMsb0NBQWRBLEVBQW9ERCxHQUFHLENBQUNHLE9BQXhERjtVQUNIO1FBQ0o7O01BakVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0hyQjs7TUFDQTs7TUFJTSxNQUFPbUMsU0FBUCxDQUFnQjtRQUNUO1FBQ0E7UUFFVDs7UUFDYSxJQUFUM0UsU0FBUztVQUNULE9BQU8sS0FBSyxVQUFaO1FBQ0g7O1FBRURuQyxZQUFZd0IsTUFBWnhCLEVBQWdDO1VBQzVCLEtBQUssT0FBTCxHQUFld0IsTUFBZjtVQUNBLEtBQUssU0FBTCxHQUFpQixJQUFJK0Ysa0JBQUosQ0FBYS9GLE1BQWIsQ0FBakI7UUFDSDs7UUFFRCxlQUFlLEtBQWY7UUFFQTs7OztRQUdnQixNQUFWeUIsVUFBVTtVQUNaO1VBQ0EsSUFBSSxDQUFDLEtBQUssT0FBTCxDQUFhbUIsS0FBYixDQUFtQkMsTUFBbkIsQ0FBMEJqQyxHQUEvQixFQUFvQztVQUVwQyxJQUFJLEtBQUssWUFBVCxFQUF1QixNQUFNLElBQUltQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtVQUN2QixLQUFLLFlBQUwsR0FBb0IsSUFBcEI7VUFFQSxNQUFNL0MsTUFBTSxHQUFHLEtBQUssT0FBcEI7VUFDQSxNQUFNO1lBQUM0QztVQUFELElBQVU1QyxNQUFoQjtVQUNBLE1BQU1lLEtBQUssR0FBRyxJQUFJM0IsR0FBSixDQUFRd0QsS0FBSyxDQUFDN0IsS0FBTjZCLEdBQWNBLEtBQUssQ0FBQzdCLEtBQU42QixDQUFZdUYsR0FBWnZGLENBQWdCNkUsSUFBSSxJQUFJLENBQUNBLElBQUQsRUFBT3pILE1BQU0sQ0FBQ2hCLFlBQVBnQixDQUFvQnlILElBQXBCekgsQ0FBUCxDQUF4QjRDLENBQWRBLEdBQTJFLEtBQUssQ0FBeEYsQ0FBZDs7VUFDQSxNQUFNd0YsS0FBSyxHQUFHekgsdUJBQVVFLElBQVZGLENBQWVpQyxLQUFLLENBQUNyRCxJQUFyQm9CLEVBQTJCSSxLQUEzQkosQ0FBZCxDQVZZLENBWVo7OztVQUNBLElBQUksQ0FBQ3lILEtBQUwsRUFBWTtZQUNSLE9BQU8sTUFBTSxLQUFLLEtBQUwsRUFBYjtVQUNIOztVQUNELEtBQUssVUFBTCxHQUFrQkEsS0FBbEIsQ0FoQlksQ0FrQlo7O1VBQ0EsTUFBTSxLQUFLLFNBQUwsQ0FBZXZGLE1BQWYsQ0FBc0J1RixLQUF0QixDQUFOO1FBQ0g7O1FBRVUsTUFBTCxLQUFLO1VBQ1AsTUFBTTtZQUFDeEY7VUFBRCxJQUFVLEtBQUssT0FBckI7VUFDQSxNQUFNO1lBQUNJLEVBQUQ7WUFBS3pEO1VBQUwsSUFBYXFELEtBQW5CO1VBRUEsTUFBTXZDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBVztZQUMzQixNQUFNMkUsS0FBSyxHQUFHaEMsRUFBRSxDQUFDZ0MsS0FBSGhDLENBQVMsR0FBVEEsQ0FBZDtZQUNBLE1BQU1pQyxHQUFHLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQUxBLENBQVNFLFVBQVRGLENBQW9CLEdBQXBCQSxJQUEyQixHQUFHQSxLQUFLLENBQUNHLEtBQU5ILEVBQWEsSUFBSUEsS0FBSyxDQUFDRyxLQUFOSCxFQUFhLEVBQTVEQSxHQUFpRUEsS0FBSyxDQUFDRyxLQUFOSCxFQUE3RTtZQUNBLE1BQU07Y0FBQ3BFLEdBQUcsRUFBRXlIO1lBQU4sSUFBZ0IsQ0FBQyxNQUFNNUosT0FBTyxDQUFDLEdBQUd3RyxHQUFHLFNBQVAsQ0FBZCxFQUFpQ3FELE9BQXZEOztZQUNBLElBQUksQ0FBQ0QsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ2hJLElBQXZCLEVBQTZCO2NBQ3pCOEMsT0FBTyxDQUFDVixLQUFSVSxDQUFjLFlBQVk4QixHQUFHLGdEQUFmLEdBQ1YsZ0JBQWdCMUYsSUFBSSxXQUR4QjREO2NBRUE7WUFDSDs7WUFFRCxPQUFPa0YsTUFBTSxDQUFDaEksSUFBZDtVQVZlLElBQW5CO1VBWUEsSUFBSSxDQUFDQSxJQUFMLEVBQVc7O1VBRVgsTUFBTXdHLFFBQVEsR0FBRyxDQUFDLE1BQUs7WUFDbkIsTUFBTTtjQUFDQztZQUFELElBQWtCbEUsS0FBSyxDQUFDQyxNQUE5QjtZQUNBLElBQUksQ0FBQ2lFLGFBQUwsRUFBb0IsT0FBTyxFQUFQO1lBRXBCLElBQUlELFFBQVEsR0FBR0UsWUFBWSxDQUFDQyxpQkFBNUI7WUFDQUgsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQUgsR0FBY0ksU0FBUyxDQUFDSixRQUEzQ0E7WUFDQUEsUUFBUSxHQUFHQSxRQUFRLENBQUNLLEtBQVRMLENBQWUsQ0FBZkEsRUFBa0IsQ0FBbEJBLENBQVhBO1lBQ0EsT0FBTyxhQUFhQSxRQUFRLEVBQTVCO1VBUGEsSUFBakI7O1VBVUEsSUFBSTlGLEtBQUssR0FBRyxDQUFDLE1BQUs7WUFDZCxJQUFJLENBQUM2QixLQUFLLENBQUM3QixLQUFONkIsRUFBYVYsTUFBbEIsRUFBMEIsT0FBTyxFQUFQO1lBRTFCLElBQUluQixLQUFLLEdBQUcsWUFBWTZCLEtBQUssQ0FBQzdCLEtBQU42QixDQUFZMkYsSUFBWjNGLENBQWlCLEdBQWpCQSxDQUF4QjtZQUNBQSxLQUFLLENBQUM3QixLQUFONkIsQ0FBWWxCLE9BQVprQixDQUFvQjZFLElBQUksSUFBRztjQUN2QixNQUFNakksS0FBSyxHQUFHLEtBQUssT0FBTCxDQUFhUixZQUFiLENBQTBCeUksSUFBMUIsQ0FBZDtjQUNBLElBQUksQ0FBQ2pJLEtBQUwsRUFBWTtjQUNadUIsS0FBSyxJQUFJLFNBQVMwRyxJQUFJLElBQUlqSSxLQUFLLEVBQS9CdUI7WUFISjtVQUpRLElBQVo7O1VBV0EsTUFBTWhDLEdBQUcsR0FBRyxHQUFHc0IsSUFBSSxnQkFBZ0JkLElBQUksR0FBR3NILFFBQVEsR0FBRzlGLEtBQUssRUFBMUQ7O1VBRUEsSUFBSTtZQUNBLE1BQU1nSCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDakosR0FBRCxDQUE1Qjs7WUFDQSxJQUFJZ0osUUFBUSxDQUFDRSxNQUFURixLQUFvQixHQUF4QixFQUE2QjtjQUN6QjVFLE9BQU8sQ0FBQ1YsS0FBUlUsQ0FBYyxpQ0FBaUNQLEtBQUssQ0FBQ3JELElBQUksbUJBQW1Cd0ksUUFBUSxDQUFDRSxNQUFNLEVBQTNGOUU7Y0FDQTtZQUNIOztZQUNELE1BQU1rQixFQUFFLEdBQUcsTUFBTTBELFFBQVEsQ0FBQ0csSUFBVEgsRUFBakIsQ0FOQSxDQVFBOztZQUNBLE1BQU0sS0FBSyxTQUFMLENBQWVsRixNQUFmLENBQXNCd0IsRUFBdEIsQ0FBTjtVQVRKLEVBVUUsT0FBT25CLEdBQVAsRUFBWTtZQUNWQyxPQUFPLENBQUNWLEtBQVJVLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEJEO1VBQ0g7UUFDSjs7TUEvRmlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DTnRCO01BRU87OztNQUFVLE1BQ1hxRixTQURXLFNBQ09ySixZQURQLENBQ2E7UUFDMUI7UUFDQSxXQUFXLENBQVg7O1FBRUFYLFlBQVk2QixJQUFaN0IsRUFBd0I7VUFDcEI7VUFDQSxLQUFLLEtBQUwsR0FBYTZCLElBQWI7UUFDSDs7UUFFTyxJQUFKb0ksSUFBSTtVQUNKLE1BQU1DLE9BQU8sR0FBRyxLQUFLLFFBQUwsS0FBa0IsQ0FBbEIsR0FBc0IsWUFBWSxLQUFLLFFBQVEsRUFBL0MsR0FBb0QsRUFBcEU7VUFDQSxPQUFPLEdBQUcsS0FBSyxLQUFLLGFBQWFBLE9BQU8sRUFBeEM7UUFDSDs7UUFFREMsTUFBTTtVQUNGLEtBQUssUUFBTDtVQUNBLEtBQUtqSixPQUFMLENBQWEsUUFBYjtRQUNIOztNQWpCeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TVJIOUI7O01BRUE7O01BQ0E7TUFFTzs7O01BQVUsTUFDWDZGLGFBRFcsU0FDV3pGLEdBRFgsQ0FDc0I7UUFDMUIsVUFBa0IsSUFBSVgsWUFBSixFQUFsQjtRQUNUd0MsRUFBRSxHQUFHLENBQUM4QyxLQUFELEVBQWdCbUUsUUFBaEIsS0FBeUMsS0FBSyxPQUFMLENBQWFqSCxFQUFiLENBQWdCOEMsS0FBaEIsRUFBdUJtRSxRQUF2QixDQUE1QztRQUNGL0csR0FBRyxHQUFHLENBQUM0QyxLQUFELEVBQWdCbUUsUUFBaEIsS0FBeUMsS0FBSyxPQUFMLENBQWEvRyxHQUFiLENBQWlCNEMsS0FBakIsRUFBd0JtRSxRQUF4QixDQUE1QztRQUVNLFVBQWdDLElBQUl4SixHQUFKLEVBQWhDO1FBQ0E7UUFFVCxXQUFXLENBQVg7O1FBQ1csSUFBUHNKLE9BQU87VUFDUCxPQUFPLEtBQUssUUFBWjtRQUNIOztRQUVELFFBQVE7VUFDSixLQUFLLFFBQUw7VUFDQSxLQUFLLFNBQUwsSUFBa0IsS0FBSyxPQUFMLENBQWFoSixPQUFiLENBQXFCLFFBQXJCLENBQWxCO1FBQ0g7O1FBRVksSUFBVDZHLFNBQVM7VUFDVCxPQUFPLElBQUl6RyxHQUFKLENBQVEsQ0FBQyxHQUFHLEtBQUssT0FBTCxDQUFhK0ksSUFBYixFQUFKLENBQVIsQ0FBUDtRQUNIOztRQUVTLElBQU5sRyxNQUFNO1VBQ04sS0FBSyxNQUFMO1VBQ0EsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFUTtRQUNULFlBQVksS0FBWjtRQUNBOztRQUVTLElBQUxpRSxLQUFLO1VBQ0wsS0FBSyxNQUFMO1VBQ0EsT0FBTyxLQUFLLFFBQVo7UUFDSDs7UUFFREQsUUFBUSxHQUFJbEMsS0FBRCxJQUFtQztVQUMxQyxNQUFNaUMsSUFBSSxHQUFHLE9BQU9qQyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFzREEsS0FBSyxDQUFDcUUsYUFBTnJFLENBQXFCaUMsSUFBeEY7O1VBQ0EsSUFBSSxDQUFDLEtBQUssT0FBTCxDQUFhcEcsR0FBYixDQUFpQm9HLElBQWpCLENBQUwsRUFBNkI7WUFDekJ2RCxPQUFPLENBQUNrRCxJQUFSbEQsQ0FBYSxvQkFBb0J1RCxJQUFJLGtCQUFyQ3ZEO1lBQ0E7VUFDSDs7VUFFRCxLQUFLLE9BQUwsQ0FBYTFELEdBQWIsQ0FBaUJpSCxJQUFqQixFQUF1QixJQUF2QjtVQUNBLEtBQUssTUFBTDtVQUNBLE1BQU1xQyxPQUFPLEdBQUcsS0FBSyxNQUFMLEVBQWhCO1VBQ0FBLE9BQU8sSUFBSSxLQUFLLFFBQUwsRUFBWEE7VUFFQSxPQUFPLElBQVA7UUFaSTs7UUFlUixNQUFNO1VBQ0YsSUFBSSxLQUFLLFNBQVQsRUFBb0IsT0FBTyxJQUFQLENBRGxCLENBR0Y7O1VBQ0EsTUFBTXBHLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFMLENBQWF0RCxNQUFiLEVBQUosRUFBMkI2QixNQUEzQixDQUFrQyxDQUFDQyxJQUFELEVBQU93QixNQUFQLEtBQWtCeEIsSUFBSSxJQUFJd0IsTUFBNUQsRUFBb0UsSUFBcEUsQ0FBZjtVQUNBQSxNQUFNLElBQUksS0FBSyxRQUFMLEVBQVZBO1VBRUEsT0FBTyxLQUFLLFNBQUwsR0FBaUJBLE1BQXhCO1FBQ0g7UUFFRDs7Ozs7O1FBSUEsTUFBTTtVQUNGLE1BQU1xRyxRQUFRLEdBQ1Y7WUFBQ0MsSUFBSSxFQUFFLElBQUk3SixHQUFKLEVBQVA7WUFBa0JDLE1BQU0sRUFBRSxJQUFJRCxHQUFKLEVBQTFCO1lBQXFDOEosVUFBVSxFQUFFLElBQUk5SixHQUFKO1VBQWpELENBREo7VUFHQSxDQUFDLEdBQUcsS0FBSyxPQUFMLENBQWF5SixJQUFiLEVBQUosRUFBeUJuSCxPQUF6QixDQUFpQ2dGLElBQUksSUFBRztZQUNwQyxNQUFNK0IsSUFBSSxHQUFHLElBQUlVLGFBQUosQ0FBU3pDLElBQVQsQ0FBYjtZQUNBLE1BQU0wQyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsSUFBVEQsQ0FBYzVILEdBQWQ0SCxDQUFrQlAsSUFBSSxDQUFDdEIsUUFBdkI2QixDQUFqQjtZQUNBLE1BQU1DLElBQUksR0FBR0csUUFBUSxJQUFJQSxRQUFRLEdBQUdYLElBQUksQ0FBQ0MsT0FBNUJVLEdBQXNDQSxRQUF0Q0EsR0FBaURYLElBQUksQ0FBQ0MsT0FBbkU7WUFDQU0sUUFBUSxDQUFDQyxJQUFURCxDQUFjdkosR0FBZHVKLENBQWtCUCxJQUFJLENBQUN0QixRQUF2QjZCLEVBQWlDQyxJQUFqQ0Q7O1lBRUEsSUFBSSxLQUFLLE9BQUwsQ0FBYTVILEdBQWIsQ0FBaUJxSCxJQUFJLENBQUMvQixJQUF0QixDQUFKLEVBQWlDO2NBQzdCLE1BQU0yQyxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0UsVUFBVEYsQ0FBb0I1SCxHQUFwQjRILENBQXdCUCxJQUFJLENBQUN0QixRQUE3QjZCLENBQXZCO2NBQ0EsTUFBTUUsVUFBVSxHQUFHRyxjQUFjLElBQUlBLGNBQWMsR0FBR1osSUFBSSxDQUFDQyxPQUF4Q1csR0FBa0RBLGNBQWxEQSxHQUFtRVosSUFBSSxDQUFDQyxPQUEzRjtjQUNBTSxRQUFRLENBQUNFLFVBQVRGLENBQW9CdkosR0FBcEJ1SixDQUF3QlAsSUFBSSxDQUFDdEIsUUFBN0I2QixFQUF1Q0UsVUFBdkNGO1lBQ0g7O1lBRUQsTUFBTTNKLE1BQU0sR0FBZ0IySixRQUFRLENBQUMzSixNQUFUMkosQ0FBZ0IxSSxHQUFoQjBJLENBQW9CUCxJQUFJLENBQUN0QixRQUF6QjZCLElBQXFDQSxRQUFRLENBQUMzSixNQUFUMkosQ0FBZ0I1SCxHQUFoQjRILENBQW9CUCxJQUFJLENBQUN0QixRQUF6QjZCLENBQXJDQSxHQUEwRSxJQUFJbEosR0FBSixFQUF0RztZQUNBVCxNQUFNLENBQUNDLEdBQVBELENBQVdvSixJQUFJLENBQUNDLE9BQWhCcko7WUFDQTJKLFFBQVEsQ0FBQzNKLE1BQVQySixDQUFnQnZKLEdBQWhCdUosQ0FBb0JQLElBQUksQ0FBQ3RCLFFBQXpCNkIsRUFBbUMzSixNQUFuQzJKO1VBZEosR0FKRSxDQXFCRjs7VUFDQSxNQUFNTSxLQUFLLEdBQVcsRUFBdEI7VUFDQSxDQUFDLEdBQUcsS0FBSyxPQUFMLENBQWFULElBQWIsRUFBSixFQUF5Qm5ILE9BQXpCLENBQWlDZ0YsSUFBSSxJQUFHO1lBQ3BDLE1BQU0rQixJQUFJLEdBQUcsSUFBSVUsYUFBSixDQUFTekMsSUFBVCxDQUFiO1lBQ0EsTUFBTXdDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUFURixDQUFvQjVILEdBQXBCNEgsQ0FBd0JQLElBQUksQ0FBQ3RCLFFBQTdCNkIsQ0FBbkI7WUFDQVAsSUFBSSxDQUFDQyxPQUFMRCxHQUFlUyxVQUFmVCxJQUE2QmEsS0FBSyxDQUFDN0MsSUFBTjZDLENBQVdiLElBQVhhLENBQTdCYjtVQUhKO1VBTUFhLEtBQUssQ0FBQzVILE9BQU40SCxDQUFjYixJQUFJLElBQUksS0FBSyxPQUFMLENBQWE3SSxNQUFiLENBQW9CNkksSUFBSSxDQUFDL0IsSUFBekIsQ0FBdEI0QztVQUNBLE9BQU8sQ0FBQyxDQUFDQSxLQUFLLENBQUNwSCxNQUFmO1FBQ0g7UUFFRDs7Ozs7Ozs7UUFNQTtRQUNBLFdBQVcsTUFBSztVQUNaLElBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7VUFDakIsTUFBTTZHLE9BQU8sR0FBRyxLQUFLLE9BQUwsQ0FBYSxLQUFLLEtBQWxCLENBQWhCO1VBQ0FBLE9BQU8sSUFBSSxLQUFLLFFBQUwsRUFBWEE7UUFISjs7UUFNQSxPQUFPLENBQUNRLE1BQUQsRUFBa0I7VUFDckIsS0FBSyxLQUFMLEdBQWFBLE1BQWI7O1VBRUFBLE1BQU0sQ0FBQ0MsT0FBUEQsQ0FBZSxLQUFLLFVBQUwsQ0FBZ0JkLElBQS9CYzs7VUFDQSxNQUFNakQsS0FBSyxHQUFXaUQsTUFBTSxDQUFDcEIsR0FBUG9CLENBQVdkLElBQUksSUFBSSxJQUFJVSxhQUFKLENBQVNWLElBQVQsQ0FBbkJjLENBQXRCLENBSnFCLENBTXJCOzs7VUFDQSxJQUFJUixPQUFPLEdBQUcsS0FBZDtVQUNBekMsS0FBSyxDQUFDNUUsT0FBTjRFLENBQWNtQyxJQUFJLElBQUc7WUFDakIsSUFBSSxLQUFLLE9BQUwsQ0FBYW5JLEdBQWIsQ0FBaUJtSSxJQUFJLENBQUMvQixJQUF0QixDQUFKLEVBQWlDO1lBQ2pDLEtBQUssT0FBTCxDQUFhakgsR0FBYixDQUFpQmdKLElBQUksQ0FBQy9CLElBQXRCLEVBQTRCLEtBQTVCO1lBQ0FxQyxPQUFPLEdBQUcsSUFBVkE7VUFISjtVQUtBLE9BQU9BLE9BQVA7UUFDSDs7UUFFREosTUFBTSxDQUFDckMsS0FBRCxFQUFnQjtVQUNsQixNQUFNeUMsT0FBTyxHQUFHLEtBQUssT0FBTCxDQUFhekMsS0FBYixDQUFoQjtVQUNBeUMsT0FBTyxJQUFJLEtBQUssUUFBTCxFQUFYQTtRQUNIOztRQUVEdkssWUFBWXdCLE1BQVp4QixFQUFnQztVQUM1QjtVQUNBLEtBQUssVUFBTCxHQUFrQixJQUFJZ0ssaUJBQUosQ0FBY3hJLE1BQU0sQ0FBQ0ssSUFBckIsQ0FBbEI7VUFDQSxLQUFLLFFBQUwsR0FBZ0IsSUFBSW9KLE9BQUosQ0FBWUMsT0FBTyxJQUFJLEtBQUssUUFBTCxHQUFnQkEsT0FBdkMsQ0FBaEI7UUFDSDs7UUFFRCxlQUFlLEtBQWY7O1FBQ2UsSUFBWEMsV0FBVztVQUNYLE9BQU8sS0FBSyxZQUFaO1FBQ0g7O1FBRURsSSxVQUFVLENBQUM2RSxLQUFELEVBQWdCO1VBQ3RCLElBQUksS0FBSyxZQUFULEVBQXVCLE1BQU0sSUFBSXZELEtBQUosQ0FBVSxtQ0FBVixDQUFOO1VBQ3ZCLEtBQUssWUFBTCxHQUFvQixJQUFwQjtVQUVBLEtBQUssT0FBTCxDQUFhdUQsS0FBYjtVQUNBLEtBQUssVUFBTCxDQUFnQjNFLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssUUFBbEM7UUFDSDs7UUFFREMsT0FBTztVQUNILEtBQUssVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEIsRUFBOEIsS0FBSyxRQUFuQztRQUNIOztNQXpKa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TVNOekI7UUFDRDs7UUFDRCxJQUFKNkUsSUFBSTtVQUNKLE9BQU8sS0FBSyxLQUFaO1FBQ0g7O1FBRVE7O1FBQ0csSUFBUlMsUUFBUTtVQUNSLE9BQU8sS0FBSyxTQUFaO1FBQ0g7O1FBRVE7O1FBQ0UsSUFBUHVCLE9BQU87VUFDUCxPQUFPLEtBQUssUUFBWjtRQUNIOztRQUVEbEssWUFBWWtJLElBQVpsSSxFQUF3QjtVQUNwQixLQUFLLEtBQUwsR0FBYWtJLElBQWI7VUFFQSxNQUFNa0QsRUFBRSxHQUFHbEQsSUFBSSxDQUFDMUIsS0FBTDBCLENBQVcsV0FBWEEsQ0FBWDtVQUNBLEtBQUssU0FBTCxHQUFpQmtELEVBQUUsQ0FBQyxDQUFELENBQW5CO1VBQ0EsS0FBSyxRQUFMLEdBQWdCQSxFQUFFLENBQUMsQ0FBRCxDQUFGQSxHQUFRQyxRQUFRLENBQUNELEVBQUUsQ0FBQyxDQUFELENBQUgsQ0FBaEJBLEdBQTBCLENBQTFDO1FBQ0g7O01BdEJTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQWQ7O01BQ0E7O01BQ0E7O01BQ0FFO01BRU87OztNQUNQLE1BQU1DLE9BQU8sR0FBRyxJQUFJLE1BQU1DLGFBQU4sU0FBNEI1SyxHQUE1QixDQUFxRDtRQUNyRSxPQUFPLElBQVA7O1FBQ08sSUFBSHdCLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBWjtRQUNIOztRQUVEcEM7VUFDSTtRQUNIOztRQUVEeUwsS0FBSyxDQUFDNUIsTUFBRCxFQUEwQjtVQUMzQixLQUFLLElBQUwsR0FBWSxPQUFPQSxNQUFNLEVBQUV6SCxHQUFmLEtBQXVCLFNBQXZCLEdBQW1DeUgsTUFBTSxDQUFDekgsR0FBMUMsR0FBZ0QsSUFBNUQ7UUFDSDs7UUFFWSxJQUFUZixTQUFTO1VBQ1QsT0FBT0Esb0JBQVA7UUFDSDs7UUFFYSxJQUFWWCxVQUFVO1VBQ1YsT0FBT0Esc0JBQVA7UUFDSDs7UUFFRGEsUUFBUSxDQUFDNkMsS0FBRCxFQUFzQjtVQUMxQkEsS0FBSyxDQUFDbEIsT0FBTmtCLENBQWVBLEtBQUQsSUFBVTtZQUNwQjtZQUNBLElBQUksS0FBS3RDLEdBQUwsQ0FBU3NDLEtBQUssQ0FBQ3JELElBQWYsQ0FBSixFQUEwQjtZQUUxQnFELEtBQUssQ0FBQ0MsTUFBTkQsR0FBZUEsS0FBSyxDQUFDQyxNQUFORCxHQUFlQSxLQUFLLENBQUNDLE1BQXJCRCxHQUE4QjtjQUFDRSxHQUFHLEVBQUUsSUFBTjtjQUFZbEMsR0FBRyxFQUFFLEtBQWpCO2NBQXdCeUQsRUFBRSxFQUFFO1lBQTVCLENBQTdDekI7WUFDQSxNQUFNO2NBQUNyRCxJQUFEO2NBQU9zRDtZQUFQLElBQWlCRCxLQUF2QjtZQUNBQyxNQUFNLENBQUNDLEdBQVBELEdBQWEsT0FBT0EsTUFBTSxDQUFDQyxHQUFkLEtBQXNCLFNBQXRCLEdBQWtDRCxNQUFNLENBQUNDLEdBQXpDLEdBQStDLElBQTVERDtZQUVBLEtBQUtwRCxHQUFMLENBQVNGLElBQVQsRUFBZXFELEtBQWYsRUFSb0IsQ0FVcEI7O1lBQ0EsSUFBSSxPQUFPeEUsT0FBUCxLQUFtQixRQUF2QixFQUFpQztZQUVqQ0MsY0FBYyxDQUFDQyxNQUFmRCxDQUFzQmtCLElBQXRCbEIsRUFBNEIsY0FBYzJGLG9CQUFkLENBQTBCO2NBQ3JCLFdBQWxCa0csa0JBQWtCO2dCQUN6QixPQUFPdEgsS0FBSyxDQUFDN0IsS0FBTjZCLEdBQWNBLEtBQUssQ0FBQzdCLEtBQXBCNkIsR0FBNEIsRUFBbkM7Y0FDSDs7Y0FFRHBFO2dCQUNJLE1BQU1vRSxLQUFOO2NBQ0g7O1lBUGlELENBQXREdkU7VUFiSjtRQXVCSDs7TUE5Q29FLENBQXpELEVBQWhCIiwibmFtZXMiOlsicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwicm91dGluZyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsImF0dHJpYnV0ZXMiLCJFdmVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwiTm9kZVdpZGdldCIsIndub2RlIiwiY2hpbGRyZW4iLCJwcmVyZW5kZXIiLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIldpZGdldENTUiIsImJ1bmRsZSIsImNvbnRyb2xsZXIiLCJlcnJvciIsImxvYWRpbmciLCJsb2FkZWQiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwiaWQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiV2lkZ2V0SWRlbnRpZmllciIsImluaXRpYWwiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0IiwiaXMiLCJyb3V0ZSIsImxheW91dCIsImlkZW50aWZpZXIiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInBrZyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInByb2plY3RzIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJTdHlsZXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwic3RyIiwid2FybiIsImxpbmtzIiwicmVzb3VyY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInB1c2giLCJocmVmIiwib25sb2FkZWQiLCJyZWFkeSIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJjb21wdXRlIiwiYXR0ciIsInNvcnQiLCJhIiwiYiIsImsiLCJ2IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJtYXAiLCJmb3VuZCIsImNvbmZpZyIsImRlZmF1bHQiLCJqb2luIiwiR2xvYmFsQ1NTIiwibGluayIsInZlcnNpb24iLCJ1cGRhdGUiLCJsaXN0ZW5lciIsImtleXMiLCJjdXJyZW50VGFyZ2V0IiwiY2hhbmdlZCIsInZlcnNpb25zIiwibGFzdCIsImxhc3RMb2FkZWQiLCJMaW5rIiwicHJldkxhc3QiLCJwcmV2TGFzdExvYWRlZCIsInB1cmdlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5pdGlhbGlzZWQiLCJpdiIsInBhcnNlSW50IiwicmVxdWlyZSIsIndpZGdldHMiLCJCZXlvbmRXaWRnZXRzIiwic2V0dXAiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFuY2hvci50cyIsImF0dHJpYnV0ZXMudHMiLCJpbmRleC50cyIsIm5vZGUudHMiLCJjaGVja3N1bS50cyIsImNzci50cyIsImlkZW50aWZpZXIudHMiLCJyZW5kZXJlci50cyIsInNyLnRzIiwic3NyLnRzIiwiZ2xvYmFsLnRzIiwibGluay50cyIsIndpZGdldHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=