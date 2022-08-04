define(["@vue/shared@3.2.37","@vue/reactivity@3.2.37","@vue/runtime-core@3.2.37"], (dep_0, dep_1, dep_2) => {

const dependencies = new Map([['@vue/shared@3.2.37', dep_0],['@vue/reactivity@3.2.37', dep_1],['@vue/runtime-core@3.2.37', dep_2]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }

  return target;
};

var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/@vue/runtime-dom.3.2.37.js


var runtime_dom_3_2_37_exports = {};

__export(runtime_dom_3_2_37_exports, {
  Transition: () => Transition,
  TransitionGroup: () => TransitionGroup,
  VueElement: () => VueElement,
  createApp: () => createApp,
  createSSRApp: () => createSSRApp,
  defineCustomElement: () => defineCustomElement,
  defineSSRCustomElement: () => defineSSRCustomElement,
  hydrate: () => hydrate,
  initDirectivesForSSR: () => initDirectivesForSSR,
  render: () => render,
  useCssModule: () => useCssModule,
  useCssVars: () => useCssVars,
  vModelCheckbox: () => vModelCheckbox,
  vModelDynamic: () => vModelDynamic,
  vModelRadio: () => vModelRadio,
  vModelSelect: () => vModelSelect,
  vModelText: () => vModelText,
  vShow: () => vShow,
  withKeys: () => withKeys,
  withModifiers: () => withModifiers
}); // node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js


var runtime_dom_esm_bundler_exports = {};

__export(runtime_dom_esm_bundler_exports, {
  Transition: () => Transition,
  TransitionGroup: () => TransitionGroup,
  VueElement: () => VueElement,
  createApp: () => createApp,
  createSSRApp: () => createSSRApp,
  defineCustomElement: () => defineCustomElement,
  defineSSRCustomElement: () => defineSSRCustomElement,
  hydrate: () => hydrate,
  initDirectivesForSSR: () => initDirectivesForSSR,
  render: () => render,
  useCssModule: () => useCssModule,
  useCssVars: () => useCssVars,
  vModelCheckbox: () => vModelCheckbox,
  vModelDynamic: () => vModelDynamic,
  vModelRadio: () => vModelRadio,
  vModelSelect: () => vModelSelect,
  vModelText: () => vModelText,
  vShow: () => vShow,
  withKeys: () => withKeys,
  withModifiers: () => withModifiers
});

var import_runtime_core = require("@vue/runtime-core@3.2.37");

__reExport(runtime_dom_esm_bundler_exports, require("@vue/runtime-core@3.2.37"));

var import_shared = require("@vue/shared@3.2.37");

var svgNS = "http://www.w3.org/2000/svg";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */doc.createElement("template");
var nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: child => {
    const parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is
    } : void 0);

    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }

    return el;
  },
  createText: text => doc.createTextNode(text),
  createComment: text => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: node => node.parentNode,
  nextSibling: node => node.nextSibling,
  querySelector: selector => doc.querySelector(selector),

  setScopeId(el, id) {
    el.setAttribute(id, "");
  },

  cloneNode(el) {
    const cloned = el.cloneNode(true);

    if (`_value` in el) {
      cloned._value = el._value;
    }

    return cloned;
  },

  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;

    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;

      if (isSVG) {
        const wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      parent.insertBefore(template, anchor);
    }

    return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
  }

};

function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }

  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = (0, import_shared.isString)(next);

  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !(0, import_shared.isString)(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;

    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }

    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if ((0, import_shared.isArray)(val)) {
    val.forEach(v => setStyle(style, name, v));
  } else {
    if (val == null) val = "";

    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        style.setProperty((0, import_shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ["Webkit", "Moz", "ms"];
var prefixCache = {};

function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  let name = (0, import_runtime_core.camelize)(rawName);

  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }

  name = (0, import_shared.capitalize)(name);

  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = "http://www.w3.org/1999/xlink";

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = (0, import_shared.isSpecialBooleanAttr)(key);

    if (value == null || isBoolean && !(0, import_shared.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}

function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? "" : value;
    return;
  }

  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;

    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  let needRemove = false;

  if (value === "" || value == null) {
    const type = typeof el[key];

    if (type === "boolean") {
      value = (0, import_shared.includeBooleanAttr)(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }

  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      (0, import_runtime_core.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }

  needRemove && el.removeAttribute(key);
}

var [_getNow, skipTimestampCheck] = /* @__PURE__ */(() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;

  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = performance.now.bind(performance);
    }

    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }

  return [_getNow2, skipTimestampCheck2];
})();

var cachedNow = 0;
var p = /* @__PURE__ */Promise.resolve();

var reset = () => {
  cachedNow = 0;
};

var getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);

    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  let options;

  if (optionsModifierRE.test(name)) {
    options = {};
    let m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [(0, import_shared.hyphenate)(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  const invoker = e => {
    const timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      (0, import_runtime_core.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if ((0, import_shared.isArray)(value)) {
    const originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(fn => e2 => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if ((0, import_shared.isOn)(key)) {
    if (!(0, import_shared.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }

    if (key in el && nativeOnRE.test(key) && (0, import_shared.isFunction)(value)) {
      return true;
    }

    return false;
  }

  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }

  if (key === "form") {
    return false;
  }

  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }

  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }

  if (nativeOnRE.test(key) && (0, import_shared.isString)(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydrate2) {
  const Comp = (0, import_runtime_core.defineComponent)(options);

  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, hydrate2);
    }

  }

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = options => {
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var VueElement = class extends BaseClass {
  constructor(_def, _props = {}, hydrate2) {
    super();
    this._def = _def;
    this._props = _props;
    this._instance = null;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;

    if (this.shadowRoot && hydrate2) {
      hydrate2(this._createVNode(), this.shadowRoot);
    } else {
      if (this.shadowRoot) {
        (0, import_runtime_core.warn)(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
      }

      this.attachShadow({
        mode: "open"
      });
    }
  }

  connectedCallback() {
    this._connected = true;

    if (!this._instance) {
      this._resolveDef();
    }
  }

  disconnectedCallback() {
    this._connected = false;
    (0, import_runtime_core.nextTick)(() => {
      if (!this._connected) {
        render(null, this.shadowRoot);
        this._instance = null;
      }
    });
  }

  _resolveDef() {
    if (this._resolved) {
      return;
    }

    this._resolved = true;

    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }

    new MutationObserver(mutations => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    }).observe(this, {
      attributes: true
    });

    const resolve = def => {
      const {
        props,
        styles
      } = def;
      const hasOptions = !(0, import_shared.isArray)(props);
      const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
      let numberProps;

      if (hasOptions) {
        for (const key in this._props) {
          const opt = props[key];

          if (opt === Number || opt && opt.type === Number) {
            this._props[key] = (0, import_shared.toNumber)(this._props[key]);
            (numberProps || (numberProps = /* @__PURE__ */Object.create(null)))[key] = true;
          }
        }
      }

      this._numberProps = numberProps;

      for (const key of Object.keys(this)) {
        if (key[0] !== "_") {
          this._setProp(key, this[key], true, false);
        }
      }

      for (const key of rawKeys.map(import_shared.camelize)) {
        Object.defineProperty(this, key, {
          get() {
            return this._getProp(key);
          },

          set(val) {
            this._setProp(key, val);
          }

        });
      }

      this._applyStyles(styles);

      this._update();
    };

    const asyncDef = this._def.__asyncLoader;

    if (asyncDef) {
      asyncDef().then(resolve);
    } else {
      resolve(this._def);
    }
  }

  _setAttr(key) {
    let value = this.getAttribute(key);

    if (this._numberProps && this._numberProps[key]) {
      value = (0, import_shared.toNumber)(value);
    }

    this._setProp((0, import_shared.camelize)(key), value, false);
  }

  _getProp(key) {
    return this._props[key];
  }

  _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
    if (val !== this._props[key]) {
      this._props[key] = val;

      if (shouldUpdate && this._instance) {
        this._update();
      }

      if (shouldReflect) {
        if (val === true) {
          this.setAttribute((0, import_shared.hyphenate)(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute((0, import_shared.hyphenate)(key), val + "");
        } else if (!val) {
          this.removeAttribute((0, import_shared.hyphenate)(key));
        }
      }
    }
  }

  _update() {
    render(this._createVNode(), this.shadowRoot);
  }

  _createVNode() {
    const vnode = (0, import_runtime_core.createVNode)(this._def, (0, import_shared.extend)({}, this._props));

    if (!this._instance) {
      vnode.ce = instance => {
        this._instance = instance;
        instance.isCE = true;

        if (true) {
          instance.ceReload = newStyles => {
            if (this._styles) {
              this._styles.forEach(s => this.shadowRoot.removeChild(s));

              this._styles.length = 0;
            }

            this._applyStyles(newStyles);

            if (!this._def.__asyncLoader) {
              this._instance = null;

              this._update();
            }
          };
        }

        instance.emit = (event, ...args) => {
          this.dispatchEvent(new CustomEvent(event, {
            detail: args
          }));
        };

        let parent = this;

        while (parent = parent && (parent.parentNode || parent.host)) {
          if (parent instanceof VueElement) {
            instance.parent = parent._instance;
            break;
          }
        }
      };
    }

    return vnode;
  }

  _applyStyles(styles) {
    if (styles) {
      styles.forEach(css => {
        const s = document.createElement("style");
        s.textContent = css;
        this.shadowRoot.appendChild(s);

        if (true) {
          (this._styles || (this._styles = [])).push(s);
        }
      });
    }
  }

};

function useCssModule(name = "$style") {
  {
    const instance = (0, import_runtime_core.getCurrentInstance)();

    if (!instance) {
      (0, import_runtime_core.warn)(`useCssModule must be called inside setup()`);
      return import_shared.EMPTY_OBJ;
    }

    const modules = instance.type.__cssModules;

    if (!modules) {
      (0, import_runtime_core.warn)(`Current instance does not have CSS modules injected.`);
      return import_shared.EMPTY_OBJ;
    }

    const mod = modules[name];

    if (!mod) {
      (0, import_runtime_core.warn)(`Current instance does not have CSS module named "${name}".`);
      return import_shared.EMPTY_OBJ;
    }

    return mod;
  }
}

function useCssVars(getter) {
  const instance = (0, import_runtime_core.getCurrentInstance)();

  if (!instance) {
    (0, import_runtime_core.warn)(`useCssVars is called without current active component instance.`);
    return;
  }

  const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));

  (0, import_runtime_core.watchPostEffect)(setVars);
  (0, import_runtime_core.onMounted)(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    (0, import_runtime_core.onUnmounted)(() => ob.disconnect());
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }

  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === import_runtime_core.Fragment) {
    vnode.children.forEach(c => setVarsOnVNode(c, vars));
  } else if (vnode.type === import_runtime_core.Static) {
    let {
      el,
      anchor
    } = vnode;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;

    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}

var TRANSITION = "transition";
var ANIMATION = "animation";

var Transition = (props, {
  slots
}) => (0, import_runtime_core.h)(import_runtime_core.BaseTransition, resolveTransitionProps(props), slots);

Transition.displayName = "Transition";
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /* @__PURE__ */(0, import_shared.extend)({}, import_runtime_core.BaseTransition.props, DOMTransitionPropsValidators);

var callHook = (hook, args = []) => {
  if ((0, import_shared.isArray)(hook)) {
    hook.forEach(h2 => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};

var hasExplicitCallback = hook => {
  return hook ? (0, import_shared.isArray)(hook) ? hook.some(h2 => h2.length > 1) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  const baseProps = {};

  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;

  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  const makeEnterHook = isAppear => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;

      const resolve = () => finishEnter(el, isAppear, done);

      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return (0, import_shared.extend)(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },

    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },

    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),

    onLeave(el, done) {
      el._isLeaving = true;

      const resolve = () => finishLeave(el, done);

      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }

        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },

    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },

    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },

    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }

  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0, import_shared.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  const res = (0, import_shared.toNumber)(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== "number") {
    (0, import_runtime_core.warn)(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    (0, import_runtime_core.warn)(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(c => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
  const {
    _vtc
  } = el;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;

  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  const {
    type,
    timeout,
    propCount
  } = getTransitionInfo(el, expectedType);

  if (!type) {
    return resolve();
  }

  const endEvent = type + "end";
  let ended = 0;

  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  const onEnd = e => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);

  const getStyleProperties = key => (styles[key] || "").split(", ");

  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}

function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}

function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = /* @__PURE__ */new WeakMap();
var newPositionMap = /* @__PURE__ */new WeakMap();
var TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */(0, import_shared.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),

  setup(props, {
    slots
  }) {
    const instance = (0, import_runtime_core.getCurrentInstance)();
    const state = (0, import_runtime_core.useTransitionState)();
    let prevChildren;
    let children;
    (0, import_runtime_core.onUpdated)(() => {
      if (!prevChildren.length) {
        return;
      }

      const moveClass = props.moveClass || `${props.name || "v"}-move`;

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }

      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach(c => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";

        const cb = el._moveCb = e => {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = (0, import_runtime_core.toRaw)(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || import_runtime_core.Fragment;
      prevChildren = children;
      children = slots.default ? (0, import_runtime_core.getTransitionRawChildren)(slots.default()) : [];

      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (child.key != null) {
          (0, import_runtime_core.setTransitionHooks)(child, (0, import_runtime_core.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
        } else if (true) {
          (0, import_runtime_core.warn)(`<TransitionGroup> children must be keyed.`);
        }
      }

      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          (0, import_runtime_core.setTransitionHooks)(child, (0, import_runtime_core.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }

      return (0, import_runtime_core.createVNode)(tag, null, children);
    };
  }

};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  const el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;

  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(cls => {
      cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
    });
  }

  moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const {
    hasTransform
  } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = vnode => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return (0, import_shared.isArray)(fn) ? value => (0, import_shared.invokeArrayFns)(fn, value) : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  const target = e.target;

  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}

var vModelText = {
  created(el, {
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", e => {
      if (e.target.composing) return;
      let domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      }

      if (castToNumber) {
        domValue = (0, import_shared.toNumber)(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },

  mounted(el, {
    value
  }) {
    el.value = value == null ? "" : value;
  },

  beforeUpdate(el, {
    value,
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing) return;

    if (document.activeElement === el && el.type !== "range") {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === "number") && (0, import_shared.toNumber)(el.value) === value) {
        return;
      }
    }

    const newValue = value == null ? "" : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }

};
var vModelCheckbox = {
  deep: true,

  created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el._assign;

      if ((0, import_shared.isArray)(modelValue)) {
        const index = (0, import_shared.looseIndexOf)(modelValue, elementValue);
        const found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0, import_shared.isSet)(modelValue)) {
        const cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },

  mounted: setChecked,

  beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }

};

function setChecked(el, {
  value,
  oldValue
}, vnode) {
  el._modelValue = value;

  if ((0, import_shared.isArray)(value)) {
    el.checked = (0, import_shared.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0, import_shared.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0, import_shared.looseEqual)(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created(el, {
    value
  }, vnode) {
    el.checked = (0, import_shared.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el._assign(getValue(el));
    });
  },

  beforeUpdate(el, {
    value,
    oldValue
  }, vnode) {
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = (0, import_shared.looseEqual)(value, vnode.props.value);
    }
  }

};
var vModelSelect = {
  deep: true,

  created(el, {
    value,
    modifiers: {
      number
    }
  }, vnode) {
    const isSetModel = (0, import_shared.isSet)(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, o => o.selected).map(o => number ? (0, import_shared.toNumber)(getValue(o)) : getValue(o));

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },

  mounted(el, {
    value
  }) {
    setSelected(el, value);
  },

  beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },

  updated(el, {
    value
  }) {
    setSelected(el, value);
  }

};

function setSelected(el, value) {
  const isMultiple = el.multiple;

  if (isMultiple && !(0, import_shared.isArray)(value) && !(0, import_shared.isSet)(value)) {
    (0, import_runtime_core.warn)(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
    return;
  }

  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);

    if (isMultiple) {
      if ((0, import_shared.isArray)(value)) {
        option.selected = (0, import_shared.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0, import_shared.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}

function getValue(el) {
  return "_value" in el ? el._value : el.value;
}

function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },

  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },

  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },

  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }

};

function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;

    case "TEXTAREA":
      return vModelText;

    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;

        case "radio":
          return vModelRadio;

        default:
          return vModelText;
      }

  }
}

function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

function initVModelForSSR() {
  vModelText.getSSRProps = ({
    value
  }) => ({
    value
  });

  vModelRadio.getSSRProps = ({
    value
  }, vnode) => {
    if (vnode.props && (0, import_shared.looseEqual)(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = ({
    value
  }, vnode) => {
    if ((0, import_shared.isArray)(value)) {
      if (vnode.props && (0, import_shared.looseIndexOf)(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if ((0, import_shared.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };

  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }

    const modelToUse = resolveDynamicModel(vnode.type.toUpperCase(), vnode.props && vnode.props.type);

    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

var systemModifiers = ["ctrl", "shift", "alt", "meta"];
var modifierGuards = {
  stop: e => e.stopPropagation(),
  prevent: e => e.preventDefault(),
  self: e => e.target !== e.currentTarget,
  ctrl: e => !e.ctrlKey,
  shift: e => !e.shiftKey,
  alt: e => !e.altKey,
  meta: e => !e.metaKey,
  left: e => "button" in e && e.button !== 0,
  middle: e => "button" in e && e.button !== 1,
  right: e => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};

var withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    return fn(event, ...args);
  };
};

var keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};

var withKeys = (fn, modifiers) => {
  return event => {
    if (!("key" in event)) {
      return;
    }

    const eventKey = (0, import_shared.hyphenate)(event.key);

    if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount(el, {
    value
  }, {
    transition
  }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },

  mounted(el, {
    value
  }, {
    transition
  }) {
    if (transition && value) {
      transition.enter(el);
    }
  },

  updated(el, {
    value,
    oldValue
  }, {
    transition
  }) {
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },

  beforeUnmount(el, {
    value
  }) {
    setDisplay(el, value);
  }

};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}

function initVShowForSSR() {
  vShow.getSSRProps = ({
    value
  }) => {
    if (!value) {
      return {
        style: {
          display: "none"
        }
      };
    }
  };
}

var rendererOptions = /* @__PURE__ */(0, import_shared.extend)({
  patchProp
}, nodeOps);
var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = (0, import_runtime_core.createRenderer)(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0, import_runtime_core.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
}

var render = (...args) => {
  ensureRenderer().render(...args);
};

var hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};

var createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  const {
    mount
  } = app;

  app.mount = containerOrSelector => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;

    if (!(0, import_shared.isFunction)(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }

    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }

    return proxy;
  };

  return app;
};

var createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  const {
    mount
  } = app;

  app.mount = containerOrSelector => {
    const container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: tag => (0, import_shared.isHTMLTag)(tag) || (0, import_shared.isSVGTag)(tag),
    writable: false
  });
}

function injectCompilerOptionsCheck(app) {
  if ((0, import_runtime_core.isRuntimeOnly)()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },

      set() {
        (0, import_runtime_core.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }

    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        (0, import_runtime_core.warn)(msg);
        return compilerOptions;
      },

      set() {
        (0, import_runtime_core.warn)(msg);
      }

    });
  }
}

function normalizeContainer(container) {
  if ((0, import_shared.isString)(container)) {
    const res = document.querySelector(container);

    if (!res) {
      (0, import_runtime_core.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
    }

    return res;
  }

  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    (0, import_runtime_core.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }

  return container;
}

var ssrDirectiveInitialized = false;

var initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
}; // .beyond/uimport/@vue/runtime-dom.3.2.37.js


__reExport(runtime_dom_3_2_37_exports, runtime_dom_esm_bundler_exports);

module.exports = __toCommonJS(runtime_dom_3_2_37_exports);
};

code(module, require);
return module.exports;
});

