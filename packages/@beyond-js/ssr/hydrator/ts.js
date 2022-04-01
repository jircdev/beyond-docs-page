let __pkg = {exports: {}};
const modules = new Map();

/******************************
INTERNAL MODULE: ./base/package
******************************/

modules.set('./base/package', {hash: 1737385652, creator: function (require, exports) {
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
    if (this.#cached.has(id)) return this.#cached.get(id);
    if (!this.#ims.has(id)) throw new Error(`Internal module "${id}" not found`);
    const fn = this.#ims.get(id).creator;

    const require = required => this.require(required, id); // Here the id is the source of the require


    const exports = {};
    fn(require, exports);
    this.#cached.set(id, exports);
    return exports;
  }

}

exports.BeyondPackage = BeyondPackage;
}});

/************************
INTERNAL MODULE: ./config
************************/

modules.set('./config', {hash: 605659058, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = new class {
  #hierarchy;

  get hierarchy() {
    return this.#hierarchy;
  }

  #widgets;

  get widgets() {
    return this.#widgets;
  }

  constructor() {
    this.#hierarchy = __beyond_ssr.hierarchy;
    this.#widgets = new Map(__beyond_ssr.widgets);
  }

}();
exports.config = config;
}});

/**************************
INTERNAL MODULE: ./hydrator
**************************/

modules.set('./hydrator', {hash: 979596099, creator: function (require, exports) {
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
  const {
    hierarchy
  } = _config.config;
  const el = document.createElement(hierarchy[0]);
  document.body.append(el);
};
}});

/*****************************************
INTERNAL MODULE: ./widgets/layout-children
*****************************************/

modules.set('./widgets/layout-children', {hash: 2598113192, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instances = void 0;

var _config = require("../config");

const instances = new class {
  #BeyondLayoutChildrenRenderer;
  #instances = new Set();

  register(instance) {
    this.#instances.add(instance);
    if (!this.#BeyondLayoutChildrenRenderer) return;
    instance.hydrate(this.#BeyondLayoutChildrenRenderer);
  }

  hydrate(BeyondLayoutChildrenRenderer) {
    this.#BeyondLayoutChildrenRenderer = BeyondLayoutChildrenRenderer;
    this.#instances.forEach(instance => instance.hydrate(this.#BeyondLayoutChildrenRenderer));
  }

}();
exports.instances = instances;

class BeyondLayoutChildren extends HTMLElement {
  #renderer;

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback() {
    if (this.#renderer) return;

    const {
      roots
    } = require('./widgets').widgets;

    const {
      hierarchy
    } = _config.config; // Create the child element

    const parent = roots.get(this.getRootNode());
    const child = hierarchy[hierarchy.indexOf(parent.localName) + 1];
    const el = document.createElement(child);
    this.shadowRoot.appendChild(el);
  }

  hydrate(Renderer) {
    this.#renderer = new Renderer(this);
  }

}

customElements.define('beyond-layout-children', BeyondLayoutChildren);
}});

/********************************
INTERNAL MODULE: ./widgets/widget
********************************/

modules.set('./widgets/widget', {hash: 1779661803, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;

var _config = require("../config");

class Widget extends HTMLElement {
  #id;
  #loader;
  #connected = false;

  #appendStyle(bundle) {
    const style = document.createElement('link');
    const baseUrl = '/';
    style.type = 'text/css';
    style.href = `${baseUrl}${bundle}.css`;
    style.rel = 'stylesheet';
    bundle !== 'global' && style.setAttribute('bundle', bundle);
    this.shadowRoot.appendChild(style);
  }

  constructor(id) {
    super();
    this.#id = id;
    this.attachShadow({
      mode: 'open'
    });

    const {
      widgets
    } = require('./widgets');

    widgets.registerInstance(this);

    const {
      html,
      css
    } = _config.config.widgets.get(id); // Append global and bundle styles


    css && this.#appendStyle(css);
    this.#appendStyle('global'); // Append the widget html

    const root = this.shadowRoot;
    const span = document.createElement('span');
    span.innerHTML = html;
    root.appendChild(span);
  }

  hydrate(WidgetControllerLoader) {
    this.#loader = new WidgetControllerLoader(this);
    this.#connected && this.#loader.connectedCallback();
  }

  connectedCallback() {
    const id = this.#id;
    this.setAttribute('ssr-widget-id', id.toString());
    this.#connected = true;
    this.#loader?.connectedCallback();
  }

}

exports.Widget = Widget;
}});

/*********************************
INTERNAL MODULE: ./widgets/widgets
*********************************/

modules.set('./widgets/widgets', {hash: 2550769118, creator: function (require, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgets = void 0;

require("./layout-children");

var _config = require("../config");

var _widget = require("./widget");

const widgets = new class {
  #WidgetControllerLoader;
  #instances = new Set();
  #initialised = false;
  #roots = new Map();

  get roots() {
    return this.#roots;
  }

  constructor() {
    // Register the widgets required by the initial navigated page
    const {
      hierarchy
    } = _config.config;
    hierarchy.forEach((element, index) => {
      if (customElements.get(element)) return; // Element is already registered

      customElements.define(element, class extends _widget.Widget {
        constructor() {
          super(index);
        }

      });
    });
  }

  registerInstance(instance) {
    this.#instances.add(instance);
    this.#roots.set(instance.shadowRoot, instance);
    if (!this.#WidgetControllerLoader) return;
    instance.hydrate(this.#WidgetControllerLoader);
  }

  hydrate(WidgetControllerLoader, BeyondLayoutChildrenRenderer) {
    if (this.#initialised) throw new Error('Widgets already initialised');
    this.#WidgetControllerLoader = WidgetControllerLoader;
    this.#initialised = true;
    this.#instances.forEach(instance => instance.hydrate(WidgetControllerLoader));

    require('./layout-children').instances.hydrate(BeyondLayoutChildrenRenderer);
  }

}();
exports.widgets = widgets;
}});

// Module exports
__pkg.exports.process = function(require) {
};
export const hmr = new (function () {
    this.on = (event, listener) => void 0;
    this.off = (event, listener) => void 0;
});


const __bp = {};
modules.get('./base/package').creator(() => 0, __bp);
__pkg = new __bp.BeyondPackage(__pkg.exports);
__pkg.initialise(modules);