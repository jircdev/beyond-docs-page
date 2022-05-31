define(["exports", "@beyond-js/kernel/bundle/ts"], function (_exports2, dependency_0) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.widgets = _exports2.prerender = _exports2.hmr = _exports2.attributes = _exports2.WidgetCSR = _exports2.NodeWidget = _exports2.ListenerFunction = _exports2.IWidgetSpecs = _exports2.IBeyondWidgetController = _exports2.Events = _exports2.BeyondWidget = void 0;
  const amd_require = require;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond-js/widgets/render/ts").package();

  externals.register(new Map([]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 3388193045,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.attributes = void 0;

      var _events = require("./events");
      /*bundle*/


      const attributes = new class extends _events.Events {
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
  /******************************
  INTERNAL MODULE: ./events/index
  ******************************/

  ims.set('./events/index', {
    hash: 417988138,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Events = void 0;
      /*bundle*/

      class Events {
        #specs;
        #listeners = new Map();
        #destroyed = false;

        get destroyed() {
          return this.#destroyed;
        }

        constructor(specs) {
          specs = specs ? specs : {};
          if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
          this.#specs = specs;

          if (specs.bind) {
            specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);

            specs.bind.unbind = (event, listener) => this.off(event, listener);
          }
        }
        /**
         * Binds an event handler to an event name
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} priority
         * @returns {this}
         */


        on(event, listener, priority) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (typeof listener !== 'function') {
            throw new Error('Listener is not a function');
          }

          this.off(event, listener); // Just in case the listener is already registered

          const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
          this.#listeners.set(event, l);
          l.push({
            listener: listener,
            priority: priority ? priority : 0
          });
          return this;
        }

        bind = (event, listener, priority) => this.on(event, listener, priority);
        /**
         * Unbind an event listener
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} force
         * @returns {this}
         */

        off(event, listener, force) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (!event) {
            throw new Error(`Event name not specified`);
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (!listener) {
            if (!force) throw new Error('Listener function not set');
            this.#listeners.delete(event);
            return this;
          }

          if (!this.#listeners.has(event)) {
            return this;
          }

          const e = this.#listeners.get(event);
          const filtered = e.filter(item => item.listener !== listener);
          this.#listeners.set(event, filtered);
          return this;
        }

        unbind = (event, listener, force) => this.off(event, listener, force);
        /**
         * Triggers an event
         *
         * @param {Trigger} event
         * @param {*} rest
         * @returns {Promise<*>}
         */

        trigger(event, ...rest) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          event = typeof event === 'string' ? {
            'name': event
          } : event;
          if (typeof event !== 'object') throw new Error('Invalid parameters');
          if (typeof event.name !== 'string') throw new Error('Invalid event name');

          if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
            throw new Error(`Event "${event.name}" is not defined`);
          }

          let args = [...arguments];
          args.shift(); // Remove the event name from the list of arguments

          if (!this.#listeners.has(event.name)) return;
          let l = this.#listeners.get(event.name); // Sort by priority

          l.sort((a, b) => b.priority - a.priority);

          if (event.async) {
            const trigger = async function () {
              const promises = [];

              for (let listener of l) {
                promises.push(listener.listener(...args));
              }

              await Promise.all(promises);
            };

            return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
          } else {
            for (let listener of l) {
              listener.listener(...args);
            }
          }
        }

        destroy() {
          this.#destroyed = true;
          this.#listeners.clear();
        }

      }

      exports.Events = Events;
    }
  });
  /******************************
  INTERNAL MODULE: ./events/types
  ******************************/

  ims.set('./events/types', {
    hash: 1632705009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
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
    hash: 3513076231,
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
            const iattrs = new Map(item.attrs);
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
    hash: 2318048750,
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
        #widget;

        get widget() {
          return this.#widget;
        }

        #set = (name, value) => {
          this.#widget.setAttribute(name, value);
        };
        #remove = name => {
          this.#widget.removeAttribute(name);
        };

        constructor(widget) {
          this.#widget = widget;
        }

        initialise() {
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
    hash: 1650913790,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetCSR = void 0;

      var _events = require("../events");
      /*bundle*/


      class WidgetCSR extends _events.Events {
        #widget;
        #specs;

        get specs() {
          return this.#specs;
        }

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
          amd_require(['@beyond-js/kernel/core/ts'], mod => {
            const beyond = mod.beyond;
            beyond.import(url).then(bundle => {
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

        attributeChangedCallback(name, old, value) {
          this.#controller?.attributeChangedCallback(name, old, value);
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
    hash: 1921531597,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondWidget = void 0;

      var _instances = require("../instances");

      var _sr = require("./sr");

      var _csr = require("./csr");

      var _ssr = require("./ssr");

      var _identifier = require("./identifier");

      var _attributes = require("./attributes"); // In SSR environment HTMLElement is not defined


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

        #identifier;

        get identifier() {
          return this.#identifier;
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

        #attributes; // To identify where the widget is in the widgets tree

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
          this.#attributes = new _attributes.WidgetGlobalAttributes(this);
          this.#identifier = new _identifier.WidgetIdentifier(this);
          this.#sr = new _sr.WidgetSR(this);
          this.#ssr = new _ssr.WidgetSSR(this);
          this.#csr = new _csr.WidgetCSR(this);
          this.#csr?.on('controller.initialised', this.#oncontroller);
        }

        connectedCallback() {
          // Register the widget in the instances registry after connectedCallback is done
          this.#wnode = _instances.instances.register(this);
          this.#attributes.initialise();
          this.#ssr.initialise();
          this.#sr.initialise().catch(exc => console.error(exc.stack));
          this.#csr.initialise();
        }

        attributeChangedCallback(name, old, value) {
          this.#csr.attributeChangedCallback(name, old, value);
        }

      }

      exports.BeyondWidget = BeyondWidget;
    }
  });
  /***************************
  INTERNAL MODULE: ./widget/sr
  ***************************/

  ims.set('./widget/sr', {
    hash: 295951095,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSR = void 0;

      var _checksum = require("./checksum");

      class WidgetSR {
        #widget;

        constructor(widget) {
          this.#widget = widget;
        }

        #initialised = false;

        async initialise() {
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const {
            specs
          } = this.#widget; // Check if SR is enabled for this widget

          if (!specs.render.sr) return;
          void this;

          try {
            let language = (() => {
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
              specs.attrs.forEach(attr => {
                const value = this.#widget.getAttribute(attr);
                value && compute.set(attr, value);
              });
              let key = language;
              [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
              resource = (0, _checksum.default)(key);
            }

            const baseUrl = window.baseUrl;
            const url = `${baseUrl}/__sr_widgets__/${specs.name}.${resource}.js`;
            const response = await fetch(url);

            if (response.status !== 200) {
              console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
              return;
            }

            const sr = await response.json();

            if (sr.errors) {
              console.error(`Error fetching static rendered widget "${specs.name}":`, sr.errors);
              return;
            }

            this.#widget.shadowRoot.innerHTML = (() => {
              if (!sr.html) return '';
              return sr.html.replace('##_!baseUrl!_##', window.baseUrl);
            })();
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
    hash: 3177629896,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSSR = void 0;

      var _prerendered = require("../prerendered");

      class WidgetSSR {
        #widget;
        #prerender;

        get prerender() {
          return this.#prerender;
        }

        constructor(widget) {
          this.#widget = widget;
        }

        #initialised = false;
        /**
         * Check if widget is already pre-rendered (index.html makes a page ssr fetch)
         */

        initialise() {
          // Check if SSR is enabled for this widget
          if (!this.#widget.specs.render.ssr) return;
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const widget = this.#widget;
          const {
            specs
          } = widget;
          const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);

          const found = _prerendered.prerender.find(specs.name, attrs);

          if (!found) return;
          this.#prerender = found;

          if (found.errors?.length) {
            console.log(`Error found on widget ssr "${widget.localName}"`, found.errors);
            return;
          }

          widget.shadowRoot.innerHTML = (() => {
            if (!found.html) return '';
            return found.html.replace('##_!baseUrl!_##', window.baseUrl);
          })();
        }

        #resolve;
        #promise = new Promise(resolve => this.#resolve = resolve);

        render() {
          if (!this.#promise) return this.#promise;
          const xhr = new XMLHttpRequest();
          const url = 'http://localhost:5000/widget?widget=hello-world';
          xhr.open("GET", url, true); // function execute after request is successful

          const widget = this.#widget;
          const resolve = this.#resolve;

          xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              widget.shadowRoot.innerHTML = this.responseText;
              resolve();
            }
          }; // Sending our request


          xhr.send();
          return this.#promise;
        }

      }

      exports.WidgetSSR = WidgetSSR;
    }
  });
  /*************************
  INTERNAL MODULE: ./widgets
  *************************/

  ims.set('./widgets', {
    hash: 3771563911,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.widgets = void 0;

      var _widget = require("./widget");

      var _instances = require("./instances");

      var _attributes = require("./attributes");
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

            if (typeof window !== 'object') return; // In SSR mode the custom elements required by the page are created by the hydrator

            if (customElements.get(name)) return;
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
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.attributes = require('./attributes').attributes;
    _exports.Events = require('./events/index').Events;
    _exports.ListenerFunction = require('./events/types').ListenerFunction;
    _exports.NodeWidget = require('./instances/node').NodeWidget;
    _exports.prerender = require('./prerendered/index').prerender;
    _exports.IBeyondWidgetController = require('./widget/csr').IBeyondWidgetController;
    _exports.WidgetCSR = require('./widget/csr').WidgetCSR;
    _exports.IWidgetSpecs = require('./widget/index').IWidgetSpecs;
    _exports.BeyondWidget = require('./widget/index').BeyondWidget;
    _exports.widgets = require('./widgets').widgets;
  };

  let attributes, Events, ListenerFunction, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, widgets; // Module exports

  _exports2.widgets = widgets;
  _exports2.BeyondWidget = BeyondWidget;
  _exports2.IWidgetSpecs = IWidgetSpecs;
  _exports2.WidgetCSR = WidgetCSR;
  _exports2.IBeyondWidgetController = IBeyondWidgetController;
  _exports2.prerender = prerender;
  _exports2.NodeWidget = NodeWidget;
  _exports2.ListenerFunction = ListenerFunction;
  _exports2.Events = Events;
  _exports2.attributes = attributes;

  __pkg.exports.process = function (require) {
    _exports2.attributes = attributes = require('./attributes').attributes;
    _exports2.Events = Events = require('./events/index').Events;
    _exports2.ListenerFunction = ListenerFunction = require('./events/types').ListenerFunction;
    _exports2.NodeWidget = NodeWidget = require('./instances/node').NodeWidget;
    _exports2.prerender = prerender = require('./prerendered/index').prerender;
    _exports2.IBeyondWidgetController = IBeyondWidgetController = require('./widget/csr').IBeyondWidgetController;
    _exports2.WidgetCSR = WidgetCSR = require('./widget/csr').WidgetCSR;
    _exports2.IWidgetSpecs = IWidgetSpecs = require('./widget/index').IWidgetSpecs;
    _exports2.BeyondWidget = BeyondWidget = require('./widget/index').BeyondWidget;
    _exports2.widgets = widgets = require('./widgets').widgets;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});