define(["@pksilen/reactive-js","react"], (dep_0, dep_1) => {
const dependencies = new Map([['@pksilen/reactive-js', dep_0],['react', dep_1]]);
const define = void 0;
const require = dependency => dependencies.get(dependency);
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }

  return to;
};

var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));

var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod); // node_modules/svelte/internal/index.js


var require_internal = __commonJS({
  "node_modules/svelte/internal/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function noop() {}

    var identity = x => x;

    function assign(tar, src) {
      for (const k in src) tar[k] = src[k];

      return tar;
    }

    function is_promise(value) {
      return value && typeof value === "object" && typeof value.then === "function";
    }

    function add_location(element2, file, line, column, char) {
      element2.__svelte_meta = {
        loc: {
          file,
          line,
          column,
          char
        }
      };
    }

    function run(fn) {
      return fn();
    }

    function blank_object() {
      return /* @__PURE__ */Object.create(null);
    }

    function run_all(fns) {
      fns.forEach(run);
    }

    function is_function(thing) {
      return typeof thing === "function";
    }

    function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
    }

    var src_url_equal_anchor;

    function src_url_equal(element_src, url) {
      if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement("a");
      }

      src_url_equal_anchor.href = url;
      return element_src === src_url_equal_anchor.href;
    }

    function not_equal(a, b) {
      return a != a ? b == b : a !== b;
    }

    function is_empty(obj) {
      return Object.keys(obj).length === 0;
    }

    function validate_store(store, name) {
      if (store != null && typeof store.subscribe !== "function") {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
      }
    }

    function subscribe(store, ...callbacks) {
      if (store == null) {
        return noop;
      }

      const unsub = store.subscribe(...callbacks);
      return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }

    function get_store_value(store) {
      let value;
      subscribe(store, _ => value = _)();
      return value;
    }

    function component_subscribe(component, store, callback) {
      component.$$.on_destroy.push(subscribe(store, callback));
    }

    function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
      }
    }

    function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
    }

    function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));

        if ($$scope.dirty === void 0) {
          return lets;
        }

        if (typeof lets === "object") {
          const merged = [];
          const len = Math.max($$scope.dirty.length, lets.length);

          for (let i = 0; i < len; i += 1) {
            merged[i] = $$scope.dirty[i] | lets[i];
          }

          return merged;
        }

        return $$scope.dirty | lets;
      }

      return $$scope.dirty;
    }

    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
      if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
      }
    }

    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
      const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
      update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
    }

    function get_all_dirty_from_scope($$scope) {
      if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;

        for (let i = 0; i < length; i++) {
          dirty[i] = -1;
        }

        return dirty;
      }

      return -1;
    }

    function exclude_internal_props(props) {
      const result = {};

      for (const k in props) if (k[0] !== "$") result[k] = props[k];

      return result;
    }

    function compute_rest_props(props, keys) {
      const rest = {};
      keys = new Set(keys);

      for (const k in props) if (!keys.has(k) && k[0] !== "$") rest[k] = props[k];

      return rest;
    }

    function compute_slots(slots) {
      const result = {};

      for (const key in slots) {
        result[key] = true;
      }

      return result;
    }

    function once(fn) {
      let ran = false;
      return function (...args) {
        if (ran) return;
        ran = true;
        fn.call(this, ...args);
      };
    }

    function null_to_empty(value) {
      return value == null ? "" : value;
    }

    function set_store_value(store, ret, value) {
      store.set(value);
      return ret;
    }

    var has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

    function action_destroyer(action_result) {
      return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
    }

    var is_client = typeof window !== "undefined";
    exports.now = is_client ? () => window.performance.now() : () => Date.now();
    exports.raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    function set_now(fn) {
      exports.now = fn;
    }

    function set_raf(fn) {
      exports.raf = fn;
    }

    var tasks = /* @__PURE__ */new Set();

    function run_tasks(now) {
      tasks.forEach(task => {
        if (!task.c(now)) {
          tasks.delete(task);
          task.f();
        }
      });
      if (tasks.size !== 0) exports.raf(run_tasks);
    }

    function clear_loops() {
      tasks.clear();
    }

    function loop(callback) {
      let task;
      if (tasks.size === 0) exports.raf(run_tasks);
      return {
        promise: new Promise(fulfill => {
          tasks.add(task = {
            c: callback,
            f: fulfill
          });
        }),

        abort() {
          tasks.delete(task);
        }

      };
    }

    var is_hydrating = false;

    function start_hydrating() {
      is_hydrating = true;
    }

    function end_hydrating() {
      is_hydrating = false;
    }

    function upper_bound(low, high, key, value) {
      while (low < high) {
        const mid = low + (high - low >> 1);

        if (key(mid) <= value) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      return low;
    }

    function init_hydrate(target) {
      if (target.hydrate_init) return;
      target.hydrate_init = true;
      let children2 = target.childNodes;

      if (target.nodeName === "HEAD") {
        const myChildren = [];

        for (let i = 0; i < children2.length; i++) {
          const node = children2[i];

          if (node.claim_order !== void 0) {
            myChildren.push(node);
          }
        }

        children2 = myChildren;
      }

      const m = new Int32Array(children2.length + 1);
      const p = new Int32Array(children2.length);
      m[0] = -1;
      let longest = 0;

      for (let i = 0; i < children2.length; i++) {
        const current = children2[i].claim_order;
        const seqLen = (longest > 0 && children2[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, idx => children2[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        m[newLen] = i;
        longest = Math.max(newLen, longest);
      }

      const lis = [];
      const toMove = [];
      let last = children2.length - 1;

      for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children2[cur - 1]);

        for (; last >= cur; last--) {
          toMove.push(children2[last]);
        }

        last--;
      }

      for (; last >= 0; last--) {
        toMove.push(children2[last]);
      }

      lis.reverse();
      toMove.sort((a, b) => a.claim_order - b.claim_order);

      for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
          j++;
        }

        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
      }
    }

    function append(target, node) {
      target.appendChild(node);
    }

    function append_styles(target, style_sheet_id, styles) {
      const append_styles_to = get_root_for_style(target);

      if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element("style");
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
      }
    }

    function get_root_for_style(node) {
      if (!node) return document;
      const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

      if (root && root.host) {
        return root;
      }

      return node.ownerDocument;
    }

    function append_empty_stylesheet(node) {
      const style_element = element("style");
      append_stylesheet(get_root_for_style(node), style_element);
      return style_element.sheet;
    }

    function append_stylesheet(node, style) {
      append(node.head || node, style);
    }

    function append_hydration(target, node) {
      if (is_hydrating) {
        init_hydrate(target);

        if (target.actual_end_child === void 0 || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
          target.actual_end_child = target.firstChild;
        }

        while (target.actual_end_child !== null && target.actual_end_child.claim_order === void 0) {
          target.actual_end_child = target.actual_end_child.nextSibling;
        }

        if (node !== target.actual_end_child) {
          if (node.claim_order !== void 0 || node.parentNode !== target) {
            target.insertBefore(node, target.actual_end_child);
          }
        } else {
          target.actual_end_child = node.nextSibling;
        }
      } else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
      }
    }

    function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
    }

    function insert_hydration(target, node, anchor) {
      if (is_hydrating && !anchor) {
        append_hydration(target, node);
      } else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
      }
    }

    function detach(node) {
      node.parentNode.removeChild(node);
    }

    function destroy_each(iterations, detaching) {
      for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i]) iterations[i].d(detaching);
      }
    }

    function element(name) {
      return document.createElement(name);
    }

    function element_is(name, is) {
      return document.createElement(name, {
        is
      });
    }

    function object_without_properties(obj, exclude) {
      const target = {};

      for (const k in obj) {
        if (has_prop(obj, k) && exclude.indexOf(k) === -1) {
          target[k] = obj[k];
        }
      }

      return target;
    }

    function svg_element(name) {
      return document.createElementNS("http://www.w3.org/2000/svg", name);
    }

    function text(data) {
      return document.createTextNode(data);
    }

    function space() {
      return text(" ");
    }

    function empty() {
      return text("");
    }

    function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
    }

    function prevent_default(fn) {
      return function (event) {
        event.preventDefault();
        return fn.call(this, event);
      };
    }

    function stop_propagation(fn) {
      return function (event) {
        event.stopPropagation();
        return fn.call(this, event);
      };
    }

    function self2(fn) {
      return function (event) {
        if (event.target === this) fn.call(this, event);
      };
    }

    function trusted(fn) {
      return function (event) {
        if (event.isTrusted) fn.call(this, event);
      };
    }

    function attr(node, attribute, value) {
      if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
    }

    function set_attributes(node, attributes) {
      const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

      for (const key in attributes) {
        if (attributes[key] == null) {
          node.removeAttribute(key);
        } else if (key === "style") {
          node.style.cssText = attributes[key];
        } else if (key === "__value") {
          node.value = node[key] = attributes[key];
        } else if (descriptors[key] && descriptors[key].set) {
          node[key] = attributes[key];
        } else {
          attr(node, key, attributes[key]);
        }
      }
    }

    function set_svg_attributes(node, attributes) {
      for (const key in attributes) {
        attr(node, key, attributes[key]);
      }
    }

    function set_custom_element_data(node, prop, value) {
      if (prop in node) {
        node[prop] = typeof node[prop] === "boolean" && value === "" ? true : value;
      } else {
        attr(node, prop, value);
      }
    }

    function xlink_attr(node, attribute, value) {
      node.setAttributeNS("http://www.w3.org/1999/xlink", attribute, value);
    }

    function get_binding_group_value(group, __value, checked) {
      const value = /* @__PURE__ */new Set();

      for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked) value.add(group[i].__value);
      }

      if (!checked) {
        value.delete(__value);
      }

      return Array.from(value);
    }

    function to_number(value) {
      return value === "" ? null : +value;
    }

    function time_ranges_to_array(ranges) {
      const array = [];

      for (let i = 0; i < ranges.length; i += 1) {
        array.push({
          start: ranges.start(i),
          end: ranges.end(i)
        });
      }

      return array;
    }

    function children(element2) {
      return Array.from(element2.childNodes);
    }

    function init_claim_info(nodes) {
      if (nodes.claim_info === void 0) {
        nodes.claim_info = {
          last_index: 0,
          total_claimed: 0
        };
      }
    }

    function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
      init_claim_info(nodes);

      const resultNode = (() => {
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
          const node = nodes[i];

          if (predicate(node)) {
            const replacement = processNode(node);

            if (replacement === void 0) {
              nodes.splice(i, 1);
            } else {
              nodes[i] = replacement;
            }

            if (!dontUpdateLastIndex) {
              nodes.claim_info.last_index = i;
            }

            return node;
          }
        }

        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
          const node = nodes[i];

          if (predicate(node)) {
            const replacement = processNode(node);

            if (replacement === void 0) {
              nodes.splice(i, 1);
            } else {
              nodes[i] = replacement;
            }

            if (!dontUpdateLastIndex) {
              nodes.claim_info.last_index = i;
            } else if (replacement === void 0) {
              nodes.claim_info.last_index--;
            }

            return node;
          }
        }

        return createNode();
      })();

      resultNode.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
      return resultNode;
    }

    function claim_element_base(nodes, name, attributes, create_element) {
      return claim_node(nodes, node => node.nodeName === name, node => {
        const remove = [];

        for (let j = 0; j < node.attributes.length; j++) {
          const attribute = node.attributes[j];

          if (!attributes[attribute.name]) {
            remove.push(attribute.name);
          }
        }

        remove.forEach(v => node.removeAttribute(v));
        return void 0;
      }, () => create_element(name));
    }

    function claim_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, element);
    }

    function claim_svg_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, svg_element);
    }

    function claim_text(nodes, data) {
      return claim_node(nodes, node => node.nodeType === 3, node => {
        const dataStr = "" + data;

        if (node.data.startsWith(dataStr)) {
          if (node.data.length !== dataStr.length) {
            return node.splitText(dataStr.length);
          }
        } else {
          node.data = dataStr;
        }
      }, () => text(data), true);
    }

    function claim_space(nodes) {
      return claim_text(nodes, " ");
    }

    function find_comment(nodes, text2, start) {
      for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];

        if (node.nodeType === 8 && node.textContent.trim() === text2) {
          return i;
        }
      }

      return nodes.length;
    }

    function claim_html_tag(nodes, is_svg) {
      const start_index = find_comment(nodes, "HTML_TAG_START", 0);
      const end_index = find_comment(nodes, "HTML_TAG_END", start_index);

      if (start_index === end_index) {
        return new HtmlTagHydration(void 0, is_svg);
      }

      init_claim_info(nodes);
      const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
      detach(html_tag_nodes[0]);
      detach(html_tag_nodes[html_tag_nodes.length - 1]);
      const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);

      for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
      }

      return new HtmlTagHydration(claimed_nodes, is_svg);
    }

    function set_data(text2, data) {
      data = "" + data;
      if (text2.wholeText !== data) text2.data = data;
    }

    function set_input_value(input, value) {
      input.value = value == null ? "" : value;
    }

    function set_input_type(input, type) {
      try {
        input.type = type;
      } catch (e) {}
    }

    function set_style(node, key, value, important) {
      if (value === null) {
        node.style.removeProperty(key);
      } else {
        node.style.setProperty(key, value, important ? "important" : "");
      }
    }

    function select_option(select, value) {
      for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];

        if (option.__value === value) {
          option.selected = true;
          return;
        }
      }

      select.selectedIndex = -1;
    }

    function select_options(select, value) {
      for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
      }
    }

    function select_value(select) {
      const selected_option = select.querySelector(":checked") || select.options[0];
      return selected_option && selected_option.__value;
    }

    function select_multiple_value(select) {
      return [].map.call(select.querySelectorAll(":checked"), option => option.__value);
    }

    var crossorigin;

    function is_crossorigin() {
      if (crossorigin === void 0) {
        crossorigin = false;

        try {
          if (typeof window !== "undefined" && window.parent) {
            void window.parent.document;
          }
        } catch (error) {
          crossorigin = true;
        }
      }

      return crossorigin;
    }

    function add_resize_listener(node, fn) {
      const computed_style = getComputedStyle(node);

      if (computed_style.position === "static") {
        node.style.position = "relative";
      }

      const iframe = element("iframe");
      iframe.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      const crossorigin2 = is_crossorigin();
      let unsubscribe;

      if (crossorigin2) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>";
        unsubscribe = listen(window, "message", event => {
          if (event.source === iframe.contentWindow) fn();
        });
      } else {
        iframe.src = "about:blank";

        iframe.onload = () => {
          unsubscribe = listen(iframe.contentWindow, "resize", fn);
        };
      }

      append(node, iframe);
      return () => {
        if (crossorigin2) {
          unsubscribe();
        } else if (unsubscribe && iframe.contentWindow) {
          unsubscribe();
        }

        detach(iframe);
      };
    }

    function toggle_class(element2, name, toggle) {
      element2.classList[toggle ? "add" : "remove"](name);
    }

    function custom_event(type, detail, {
      bubbles = false,
      cancelable = false
    } = {}) {
      const e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, cancelable, detail);
      return e;
    }

    function query_selector_all(selector, parent = document.body) {
      return Array.from(parent.querySelectorAll(selector));
    }

    var HtmlTag = class {
      constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
      }

      c(html) {
        this.h(html);
      }

      m(html, target, anchor = null) {
        if (!this.e) {
          if (this.is_svg) this.e = svg_element(target.nodeName);else this.e = element(target.nodeName);
          this.t = target;
          this.c(html);
        }

        this.i(anchor);
      }

      h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
      }

      i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
          insert(this.t, this.n[i], anchor);
        }
      }

      p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
      }

      d() {
        this.n.forEach(detach);
      }

    };
    var HtmlTagHydration = class extends HtmlTag {
      constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
      }

      c(html) {
        if (this.l) {
          this.n = this.l;
        } else {
          super.c(html);
        }
      }

      i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
          insert_hydration(this.t, this.n[i], anchor);
        }
      }

    };

    function attribute_to_object(attributes) {
      const result = {};

      for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
      }

      return result;
    }

    function get_custom_elements_slots(element2) {
      const result = {};
      element2.childNodes.forEach(node => {
        result[node.slot || "default"] = true;
      });
      return result;
    }

    var managed_styles = /* @__PURE__ */new Map();
    var active = 0;

    function hash(str) {
      let hash2 = 5381;
      let i = str.length;

      while (i--) hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);

      return hash2 >>> 0;
    }

    function create_style_information(doc, node) {
      const info = {
        stylesheet: append_empty_stylesheet(node),
        rules: {}
      };
      managed_styles.set(doc, info);
      return info;
    }

    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
      const step = 16.666 / duration;
      let keyframes = "{\n";

      for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
      }

      const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
      const name = `__svelte_${hash(rule)}_${uid}`;
      const doc = get_root_for_style(node);
      const {
        stylesheet,
        rules
      } = managed_styles.get(doc) || create_style_information(doc, node);

      if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
      }

      const animation = node.style.animation || "";
      node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
      active += 1;
      return name;
    }

    function delete_rule(node, name) {
      const previous = (node.style.animation || "").split(", ");
      const next = previous.filter(name ? anim => anim.indexOf(name) < 0 : anim => anim.indexOf("__svelte") === -1);
      const deleted = previous.length - next.length;

      if (deleted) {
        node.style.animation = next.join(", ");
        active -= deleted;
        if (!active) clear_rules();
      }
    }

    function clear_rules() {
      exports.raf(() => {
        if (active) return;
        managed_styles.forEach(info => {
          const {
            stylesheet
          } = info;
          let i = stylesheet.cssRules.length;

          while (i--) stylesheet.deleteRule(i);

          info.rules = {};
        });
        managed_styles.clear();
      });
    }

    function create_animation(node, from, fn, params) {
      if (!from) return noop;
      const to = node.getBoundingClientRect();
      if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
      const {
        delay = 0,
        duration = 300,
        easing = identity,
        start: start_time = exports.now() + delay,
        end = start_time + duration,
        tick: tick2 = noop,
        css
      } = fn(node, {
        from,
        to
      }, params);
      let running = true;
      let started = false;
      let name;

      function start() {
        if (css) {
          name = create_rule(node, 0, 1, duration, delay, easing, css);
        }

        if (!delay) {
          started = true;
        }
      }

      function stop() {
        if (css) delete_rule(node, name);
        running = false;
      }

      loop(now => {
        if (!started && now >= start_time) {
          started = true;
        }

        if (started && now >= end) {
          tick2(1, 0);
          stop();
        }

        if (!running) {
          return false;
        }

        if (started) {
          const p = now - start_time;
          const t = 0 + 1 * easing(p / duration);
          tick2(t, 1 - t);
        }

        return true;
      });
      start();
      tick2(0, 1);
      return stop;
    }

    function fix_position(node) {
      const style = getComputedStyle(node);

      if (style.position !== "absolute" && style.position !== "fixed") {
        const {
          width,
          height
        } = style;
        const a = node.getBoundingClientRect();
        node.style.position = "absolute";
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
      }
    }

    function add_transform(node, a) {
      const b = node.getBoundingClientRect();

      if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
      }
    }

    function set_current_component(component) {
      exports.current_component = component;
    }

    function get_current_component() {
      if (!exports.current_component) throw new Error("Function called outside component initialization");
      return exports.current_component;
    }

    function beforeUpdate(fn) {
      get_current_component().$$.before_update.push(fn);
    }

    function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
    }

    function afterUpdate(fn) {
      get_current_component().$$.after_update.push(fn);
    }

    function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
    }

    function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail, {
        cancelable = false
      } = {}) => {
        const callbacks = component.$$.callbacks[type];

        if (callbacks) {
          const event = custom_event(type, detail, {
            cancelable
          });
          callbacks.slice().forEach(fn => {
            fn.call(component, event);
          });
          return !event.defaultPrevented;
        }

        return true;
      };
    }

    function setContext(key, context) {
      get_current_component().$$.context.set(key, context);
      return context;
    }

    function getContext(key) {
      return get_current_component().$$.context.get(key);
    }

    function getAllContexts() {
      return get_current_component().$$.context;
    }

    function hasContext(key) {
      return get_current_component().$$.context.has(key);
    }

    function bubble(component, event) {
      const callbacks = component.$$.callbacks[event.type];

      if (callbacks) {
        callbacks.slice().forEach(fn => fn.call(this, event));
      }
    }

    var dirty_components = [];
    var intros = {
      enabled: false
    };
    var binding_callbacks = [];
    var render_callbacks = [];
    var flush_callbacks = [];
    var resolved_promise = Promise.resolve();
    var update_scheduled = false;

    function schedule_update() {
      if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
      }
    }

    function tick() {
      schedule_update();
      return resolved_promise;
    }

    function add_render_callback(fn) {
      render_callbacks.push(fn);
    }

    function add_flush_callback(fn) {
      flush_callbacks.push(fn);
    }

    var seen_callbacks = /* @__PURE__ */new Set();
    var flushidx = 0;

    function flush() {
      const saved_component = exports.current_component;

      do {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }

        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;

        while (binding_callbacks.length) binding_callbacks.pop()();

        for (let i = 0; i < render_callbacks.length; i += 1) {
          const callback = render_callbacks[i];

          if (!seen_callbacks.has(callback)) {
            seen_callbacks.add(callback);
            callback();
          }
        }

        render_callbacks.length = 0;
      } while (dirty_components.length);

      while (flush_callbacks.length) {
        flush_callbacks.pop()();
      }

      update_scheduled = false;
      seen_callbacks.clear();
      set_current_component(saved_component);
    }

    function update($$) {
      if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
      }
    }

    var promise;

    function wait() {
      if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
          promise = null;
        });
      }

      return promise;
    }

    function dispatch(node, direction, kind) {
      node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
    }

    var outroing = /* @__PURE__ */new Set();
    var outros;

    function group_outros() {
      outros = {
        r: 0,
        c: [],
        p: outros
      };
    }

    function check_outros() {
      if (!outros.r) {
        run_all(outros.c);
      }

      outros = outros.p;
    }

    function transition_in(block, local) {
      if (block && block.i) {
        outroing.delete(block);
        block.i(local);
      }
    }

    function transition_out(block, local, detach2, callback) {
      if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(() => {
          outroing.delete(block);

          if (callback) {
            if (detach2) block.d(1);
            callback();
          }
        });
        block.o(local);
      }
    }

    var null_transition = {
      duration: 0
    };

    function create_in_transition(node, fn, params) {
      let config = fn(node, params);
      let running = false;
      let animation_name;
      let task;
      let uid = 0;

      function cleanup() {
        if (animation_name) delete_rule(node, animation_name);
      }

      function go() {
        const {
          delay = 0,
          duration = 300,
          easing = identity,
          tick: tick2 = noop,
          css
        } = config || null_transition;
        if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick2(0, 1);
        const start_time = exports.now() + delay;
        const end_time = start_time + duration;
        if (task) task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, "start"));
        task = loop(now => {
          if (running) {
            if (now >= end_time) {
              tick2(1, 0);
              dispatch(node, true, "end");
              cleanup();
              return running = false;
            }

            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick2(t, 1 - t);
            }
          }

          return running;
        });
      }

      let started = false;
      return {
        start() {
          if (started) return;
          started = true;
          delete_rule(node);

          if (is_function(config)) {
            config = config();
            wait().then(go);
          } else {
            go();
          }
        },

        invalidate() {
          started = false;
        },

        end() {
          if (running) {
            cleanup();
            running = false;
          }
        }

      };
    }

    function create_out_transition(node, fn, params) {
      let config = fn(node, params);
      let running = true;
      let animation_name;
      const group = outros;
      group.r += 1;

      function go() {
        const {
          delay = 0,
          duration = 300,
          easing = identity,
          tick: tick2 = noop,
          css
        } = config || null_transition;
        if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = exports.now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, "start"));
        loop(now => {
          if (running) {
            if (now >= end_time) {
              tick2(0, 1);
              dispatch(node, false, "end");

              if (! --group.r) {
                run_all(group.c);
              }

              return false;
            }

            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick2(1 - t, t);
            }
          }

          return running;
        });
      }

      if (is_function(config)) {
        wait().then(() => {
          config = config();
          go();
        });
      } else {
        go();
      }

      return {
        end(reset) {
          if (reset && config.tick) {
            config.tick(1, 0);
          }

          if (running) {
            if (animation_name) delete_rule(node, animation_name);
            running = false;
          }
        }

      };
    }

    function create_bidirectional_transition(node, fn, params, intro) {
      let config = fn(node, params);
      let t = intro ? 0 : 1;
      let running_program = null;
      let pending_program = null;
      let animation_name = null;

      function clear_animation() {
        if (animation_name) delete_rule(node, animation_name);
      }

      function init2(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
          a: t,
          b: program.b,
          d,
          duration,
          start: program.start,
          end: program.start + duration,
          group: program.group
        };
      }

      function go(b) {
        const {
          delay = 0,
          duration = 300,
          easing = identity,
          tick: tick2 = noop,
          css
        } = config || null_transition;
        const program = {
          start: exports.now() + delay,
          b
        };

        if (!b) {
          program.group = outros;
          outros.r += 1;
        }

        if (running_program || pending_program) {
          pending_program = program;
        } else {
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, b, duration, delay, easing, css);
          }

          if (b) tick2(0, 1);
          running_program = init2(program, duration);
          add_render_callback(() => dispatch(node, b, "start"));
          loop(now => {
            if (pending_program && now > pending_program.start) {
              running_program = init2(pending_program, duration);
              pending_program = null;
              dispatch(node, running_program.b, "start");

              if (css) {
                clear_animation();
                animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
              }
            }

            if (running_program) {
              if (now >= running_program.end) {
                tick2(t = running_program.b, 1 - t);
                dispatch(node, running_program.b, "end");

                if (!pending_program) {
                  if (running_program.b) {
                    clear_animation();
                  } else {
                    if (! --running_program.group.r) run_all(running_program.group.c);
                  }
                }

                running_program = null;
              } else if (now >= running_program.start) {
                const p = now - running_program.start;
                t = running_program.a + running_program.d * easing(p / running_program.duration);
                tick2(t, 1 - t);
              }
            }

            return !!(running_program || pending_program);
          });
        }
      }

      return {
        run(b) {
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go(b);
            });
          } else {
            go(b);
          }
        },

        end() {
          clear_animation();
          running_program = pending_program = null;
        }

      };
    }

    function handle_promise(promise2, info) {
      const token = info.token = {};

      function update2(type, index, key, value) {
        if (info.token !== token) return;
        info.resolved = value;
        let child_ctx = info.ctx;

        if (key !== void 0) {
          child_ctx = child_ctx.slice();
          child_ctx[key] = value;
        }

        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;

        if (info.block) {
          if (info.blocks) {
            info.blocks.forEach((block2, i) => {
              if (i !== index && block2) {
                group_outros();
                transition_out(block2, 1, 1, () => {
                  if (info.blocks[i] === block2) {
                    info.blocks[i] = null;
                  }
                });
                check_outros();
              }
            });
          } else {
            info.block.d(1);
          }

          block.c();
          transition_in(block, 1);
          block.m(info.mount(), info.anchor);
          needs_flush = true;
        }

        info.block = block;
        if (info.blocks) info.blocks[index] = block;

        if (needs_flush) {
          flush();
        }
      }

      if (is_promise(promise2)) {
        const current_component = get_current_component();
        promise2.then(value => {
          set_current_component(current_component);
          update2(info.then, 1, info.value, value);
          set_current_component(null);
        }, error => {
          set_current_component(current_component);
          update2(info.catch, 2, info.error, error);
          set_current_component(null);

          if (!info.hasCatch) {
            throw error;
          }
        });

        if (info.current !== info.pending) {
          update2(info.pending, 0);
          return true;
        }
      } else {
        if (info.current !== info.then) {
          update2(info.then, 1, info.value, promise2);
          return true;
        }

        info.resolved = promise2;
      }
    }

    function update_await_block_branch(info, ctx, dirty) {
      const child_ctx = ctx.slice();
      const {
        resolved
      } = info;

      if (info.current === info.then) {
        child_ctx[info.value] = resolved;
      }

      if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
      }

      info.block.p(child_ctx, dirty);
    }

    var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;

    function destroy_block(block, lookup) {
      block.d(1);
      lookup.delete(block.key);
    }

    function outro_and_destroy_block(block, lookup) {
      transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
      });
    }

    function fix_and_destroy_block(block, lookup) {
      block.f();
      destroy_block(block, lookup);
    }

    function fix_and_outro_and_destroy_block(block, lookup) {
      block.f();
      outro_and_destroy_block(block, lookup);
    }

    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
      let o = old_blocks.length;
      let n = list.length;
      let i = o;
      const old_indexes = {};

      while (i--) old_indexes[old_blocks[i].key] = i;

      const new_blocks = [];
      const new_lookup = /* @__PURE__ */new Map();
      const deltas = /* @__PURE__ */new Map();
      i = n;

      while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);

        if (!block) {
          block = create_each_block(key, child_ctx);
          block.c();
        } else if (dynamic) {
          block.p(child_ctx, dirty);
        }

        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
      }

      const will_move = /* @__PURE__ */new Set();
      const did_move = /* @__PURE__ */new Set();

      function insert2(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
      }

      while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;

        if (new_block === old_block) {
          next = new_block.first;
          o--;
          n--;
        } else if (!new_lookup.has(old_key)) {
          destroy(old_block, lookup);
          o--;
        } else if (!lookup.has(new_key) || will_move.has(new_key)) {
          insert2(new_block);
        } else if (did_move.has(old_key)) {
          o--;
        } else if (deltas.get(new_key) > deltas.get(old_key)) {
          did_move.add(new_key);
          insert2(new_block);
        } else {
          will_move.add(old_key);
          o--;
        }
      }

      while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
      }

      while (n) insert2(new_blocks[n - 1]);

      return new_blocks;
    }

    function validate_each_keys(ctx, list, get_context, get_key) {
      const keys = /* @__PURE__ */new Set();

      for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));

        if (keys.has(key)) {
          throw new Error("Cannot have duplicate keys in a keyed each");
        }

        keys.add(key);
      }
    }

    function get_spread_update(levels, updates) {
      const update2 = {};
      const to_null_out = {};
      const accounted_for = {
        $$scope: 1
      };
      let i = levels.length;

      while (i--) {
        const o = levels[i];
        const n = updates[i];

        if (n) {
          for (const key in o) {
            if (!(key in n)) to_null_out[key] = 1;
          }

          for (const key in n) {
            if (!accounted_for[key]) {
              update2[key] = n[key];
              accounted_for[key] = 1;
            }
          }

          levels[i] = n;
        } else {
          for (const key in o) {
            accounted_for[key] = 1;
          }
        }
      }

      for (const key in to_null_out) {
        if (!(key in update2)) update2[key] = void 0;
      }

      return update2;
    }

    function get_spread_object(spread_props) {
      return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
    }

    var boolean_attributes = /* @__PURE__ */new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]);
    var void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

    function is_void(name) {
      return void_element_names.test(name) || name.toLowerCase() === "!doctype";
    }

    var invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;

    function spread(args, attrs_to_add) {
      const attributes = Object.assign({}, ...args);

      if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;

        if (classes_to_add) {
          if (attributes.class == null) {
            attributes.class = classes_to_add;
          } else {
            attributes.class += " " + classes_to_add;
          }
        }

        if (styles_to_add) {
          if (attributes.style == null) {
            attributes.style = style_object_to_string(styles_to_add);
          } else {
            attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
          }
        }
      }

      let str = "";
      Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name)) return;
        const value = attributes[name];
        if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
          if (value) str += " " + name;
        } else if (value != null) {
          str += ` ${name}="${value}"`;
        }
      });
      return str;
    }

    function merge_ssr_styles(style_attribute, style_directive) {
      const style_object = {};

      for (const individual_style of style_attribute.split(";")) {
        const colon_index = individual_style.indexOf(":");
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name) continue;
        style_object[name] = value;
      }

      for (const name in style_directive) {
        const value = style_directive[name];

        if (value) {
          style_object[name] = value;
        } else {
          delete style_object[name];
        }
      }

      return style_object;
    }

    var escaped = {
      '"': "&quot;",
      "'": "&#39;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;"
    };

    function escape(html) {
      return String(html).replace(/["'&<>]/g, match => escaped[match]);
    }

    function escape_attribute_value(value) {
      return typeof value === "string" ? escape(value) : value;
    }

    function escape_object(obj) {
      const result = {};

      for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
      }

      return result;
    }

    function each(items, fn) {
      let str = "";

      for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
      }

      return str;
    }

    var missing_component = {
      $$render: () => ""
    };

    function validate_component(component, name) {
      if (!component || !component.$$render) {
        if (name === "svelte:component") name += " this={...}";
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
      }

      return component;
    }

    function debug(file, line, column, values) {
      console.log(`{@debug} ${file ? file + " " : ""}(${line}:${column})`);
      console.log(values);
      return "";
    }

    var on_destroy;

    function create_ssr_component(fn) {
      function $$render(result, props, bindings, slots, context) {
        const parent_component = exports.current_component;
        const $$ = {
          on_destroy,
          context: new Map(context || (parent_component ? parent_component.$$.context : [])),
          on_mount: [],
          before_update: [],
          after_update: [],
          callbacks: blank_object()
        };
        set_current_component({
          $$
        });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
      }

      return {
        render: (props = {}, {
          $$slots = {},
          context = /* @__PURE__ */new Map()
        } = {}) => {
          on_destroy = [];
          const result = {
            title: "",
            head: "",
            css: /* @__PURE__ */new Set()
          };
          const html = $$render(result, props, {}, $$slots, context);
          run_all(on_destroy);
          return {
            html,
            css: {
              code: Array.from(result.css).map(css => css.code).join("\n"),
              map: null
            },
            head: result.title + result.head
          };
        },
        $$render
      };
    }

    function add_attribute(name, value, boolean) {
      if (value == null || boolean && !value) return "";
      const assignment = boolean && value === true ? "" : `="${escape_attribute_value(value.toString())}"`;
      return ` ${name}${assignment}`;
    }

    function add_classes(classes) {
      return classes ? ` class="${classes}"` : "";
    }

    function style_object_to_string(style_object) {
      return Object.keys(style_object).filter(key => style_object[key]).map(key => `${key}: ${style_object[key]};`).join(" ");
    }

    function add_styles(style_object) {
      const styles = style_object_to_string(style_object);
      return styles ? ` style="${styles}"` : "";
    }

    function bind(component, name, callback) {
      const index = component.$$.props[name];

      if (index !== void 0) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
      }
    }

    function create_component(block) {
      block && block.c();
    }

    function claim_component(block, parent_nodes) {
      block && block.l(parent_nodes);
    }

    function mount_component(component, target, anchor, customElement) {
      const {
        fragment,
        on_mount,
        on_destroy: on_destroy2,
        after_update
      } = component.$$;
      fragment && fragment.m(target, anchor);

      if (!customElement) {
        add_render_callback(() => {
          const new_on_destroy = on_mount.map(run).filter(is_function);

          if (on_destroy2) {
            on_destroy2.push(...new_on_destroy);
          } else {
            run_all(new_on_destroy);
          }

          component.$$.on_mount = [];
        });
      }

      after_update.forEach(add_render_callback);
    }

    function destroy_component(component, detaching) {
      const $$ = component.$$;

      if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
      }
    }

    function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
      }

      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }

    function init(component, options, instance, create_fragment, not_equal2, props, append_styles2, dirty = [-1]) {
      const parent_component = exports.current_component;
      set_current_component(component);
      const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        props,
        update: noop,
        not_equal: not_equal2,
        bound: blank_object(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
      };
      append_styles2 && append_styles2($$.root);
      let ready = false;
      $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;

        if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
          if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }

        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

      if (options.target) {
        if (options.hydrate) {
          start_hydrating();
          const nodes = children(options.target);
          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else {
          $$.fragment && $$.fragment.c();
        }

        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
      }

      set_current_component(parent_component);
    }

    if (typeof HTMLElement === "function") {
      exports.SvelteElement = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({
            mode: "open"
          });
        }

        connectedCallback() {
          const {
            on_mount
          } = this.$$;
          this.$$.on_disconnect = on_mount.map(run).filter(is_function);

          for (const key in this.$$.slotted) {
            this.appendChild(this.$$.slotted[key]);
          }
        }

        attributeChangedCallback(attr2, _oldValue, newValue) {
          this[attr2] = newValue;
        }

        disconnectedCallback() {
          run_all(this.$$.on_disconnect);
        }

        $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }

        $on(type, callback) {
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
          };
        }

        $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }

      };
    }

    var SvelteComponent = class {
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }

      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }

      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }

    };

    function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({
        version: "3.48.0"
      }, detail), {
        bubbles: true
      }));
    }

    function append_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", {
        target,
        node
      });
      append(target, node);
    }

    function append_hydration_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", {
        target,
        node
      });
      append_hydration(target, node);
    }

    function insert_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", {
        target,
        node,
        anchor
      });
      insert(target, node, anchor);
    }

    function insert_hydration_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", {
        target,
        node,
        anchor
      });
      insert_hydration(target, node, anchor);
    }

    function detach_dev(node) {
      dispatch_dev("SvelteDOMRemove", {
        node
      });
      detach(node);
    }

    function detach_between_dev(before, after) {
      while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
      }
    }

    function detach_before_dev(after) {
      while (after.previousSibling) {
        detach_dev(after.previousSibling);
      }
    }

    function detach_after_dev(before) {
      while (before.nextSibling) {
        detach_dev(before.nextSibling);
      }
    }

    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
      const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default) modifiers.push("preventDefault");
      if (has_stop_propagation) modifiers.push("stopPropagation");
      dispatch_dev("SvelteDOMAddEventListener", {
        node,
        event,
        handler,
        modifiers
      });
      const dispose = listen(node, event, handler, options);
      return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", {
          node,
          event,
          handler,
          modifiers
        });
        dispose();
      };
    }

    function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
        node,
        attribute
      });else dispatch_dev("SvelteDOMSetAttribute", {
        node,
        attribute,
        value
      });
    }

    function prop_dev(node, property, value) {
      node[property] = value;
      dispatch_dev("SvelteDOMSetProperty", {
        node,
        property,
        value
      });
    }

    function dataset_dev(node, property, value) {
      node.dataset[property] = value;
      dispatch_dev("SvelteDOMSetDataset", {
        node,
        property,
        value
      });
    }

    function set_data_dev(text2, data) {
      data = "" + data;
      if (text2.wholeText === data) return;
      dispatch_dev("SvelteDOMSetData", {
        node: text2,
        data
      });
      text2.data = data;
    }

    function validate_each_argument(arg) {
      if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
        let msg = "{#each} only iterates over array-like objects.";

        if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
          msg += " You can use a spread to convert this iterable into an array.";
        }

        throw new Error(msg);
      }
    }

    function validate_slots(name, slot, keys) {
      for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
          console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
      }
    }

    function validate_dynamic_element(tag) {
      const is_string = typeof tag === "string";

      if (tag && !is_string) {
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
      }
    }

    function validate_void_dynamic_element(tag) {
      if (tag && is_void(tag)) {
        throw new Error(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
      }
    }

    var SvelteComponentDev = class extends SvelteComponent {
      constructor(options) {
        if (!options || !options.target && !options.$$inline) {
          throw new Error("'target' is a required option");
        }

        super();
      }

      $destroy() {
        super.$destroy();

        this.$destroy = () => {
          console.warn("Component was already destroyed");
        };
      }

      $capture_state() {}

      $inject_state() {}

    };
    var SvelteComponentTyped = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
      }

    };

    function loop_guard(timeout) {
      const start = Date.now();
      return () => {
        if (Date.now() - start > timeout) {
          throw new Error("Infinite loop detected");
        }
      };
    }

    exports.HtmlTag = HtmlTag;
    exports.HtmlTagHydration = HtmlTagHydration;
    exports.SvelteComponent = SvelteComponent;
    exports.SvelteComponentDev = SvelteComponentDev;
    exports.SvelteComponentTyped = SvelteComponentTyped;
    exports.action_destroyer = action_destroyer;
    exports.add_attribute = add_attribute;
    exports.add_classes = add_classes;
    exports.add_flush_callback = add_flush_callback;
    exports.add_location = add_location;
    exports.add_render_callback = add_render_callback;
    exports.add_resize_listener = add_resize_listener;
    exports.add_styles = add_styles;
    exports.add_transform = add_transform;
    exports.afterUpdate = afterUpdate;
    exports.append = append;
    exports.append_dev = append_dev;
    exports.append_empty_stylesheet = append_empty_stylesheet;
    exports.append_hydration = append_hydration;
    exports.append_hydration_dev = append_hydration_dev;
    exports.append_styles = append_styles;
    exports.assign = assign;
    exports.attr = attr;
    exports.attr_dev = attr_dev;
    exports.attribute_to_object = attribute_to_object;
    exports.beforeUpdate = beforeUpdate;
    exports.bind = bind;
    exports.binding_callbacks = binding_callbacks;
    exports.blank_object = blank_object;
    exports.bubble = bubble;
    exports.check_outros = check_outros;
    exports.children = children;
    exports.claim_component = claim_component;
    exports.claim_element = claim_element;
    exports.claim_html_tag = claim_html_tag;
    exports.claim_space = claim_space;
    exports.claim_svg_element = claim_svg_element;
    exports.claim_text = claim_text;
    exports.clear_loops = clear_loops;
    exports.component_subscribe = component_subscribe;
    exports.compute_rest_props = compute_rest_props;
    exports.compute_slots = compute_slots;
    exports.createEventDispatcher = createEventDispatcher;
    exports.create_animation = create_animation;
    exports.create_bidirectional_transition = create_bidirectional_transition;
    exports.create_component = create_component;
    exports.create_in_transition = create_in_transition;
    exports.create_out_transition = create_out_transition;
    exports.create_slot = create_slot;
    exports.create_ssr_component = create_ssr_component;
    exports.custom_event = custom_event;
    exports.dataset_dev = dataset_dev;
    exports.debug = debug;
    exports.destroy_block = destroy_block;
    exports.destroy_component = destroy_component;
    exports.destroy_each = destroy_each;
    exports.detach = detach;
    exports.detach_after_dev = detach_after_dev;
    exports.detach_before_dev = detach_before_dev;
    exports.detach_between_dev = detach_between_dev;
    exports.detach_dev = detach_dev;
    exports.dirty_components = dirty_components;
    exports.dispatch_dev = dispatch_dev;
    exports.each = each;
    exports.element = element;
    exports.element_is = element_is;
    exports.empty = empty;
    exports.end_hydrating = end_hydrating;
    exports.escape = escape;
    exports.escape_attribute_value = escape_attribute_value;
    exports.escape_object = escape_object;
    exports.escaped = escaped;
    exports.exclude_internal_props = exclude_internal_props;
    exports.fix_and_destroy_block = fix_and_destroy_block;
    exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
    exports.fix_position = fix_position;
    exports.flush = flush;
    exports.getAllContexts = getAllContexts;
    exports.getContext = getContext;
    exports.get_all_dirty_from_scope = get_all_dirty_from_scope;
    exports.get_binding_group_value = get_binding_group_value;
    exports.get_current_component = get_current_component;
    exports.get_custom_elements_slots = get_custom_elements_slots;
    exports.get_root_for_style = get_root_for_style;
    exports.get_slot_changes = get_slot_changes;
    exports.get_spread_object = get_spread_object;
    exports.get_spread_update = get_spread_update;
    exports.get_store_value = get_store_value;
    exports.globals = globals;
    exports.group_outros = group_outros;
    exports.handle_promise = handle_promise;
    exports.hasContext = hasContext;
    exports.has_prop = has_prop;
    exports.identity = identity;
    exports.init = init;
    exports.insert = insert;
    exports.insert_dev = insert_dev;
    exports.insert_hydration = insert_hydration;
    exports.insert_hydration_dev = insert_hydration_dev;
    exports.intros = intros;
    exports.invalid_attribute_name_character = invalid_attribute_name_character;
    exports.is_client = is_client;
    exports.is_crossorigin = is_crossorigin;
    exports.is_empty = is_empty;
    exports.is_function = is_function;
    exports.is_promise = is_promise;
    exports.is_void = is_void;
    exports.listen = listen;
    exports.listen_dev = listen_dev;
    exports.loop = loop;
    exports.loop_guard = loop_guard;
    exports.merge_ssr_styles = merge_ssr_styles;
    exports.missing_component = missing_component;
    exports.mount_component = mount_component;
    exports.noop = noop;
    exports.not_equal = not_equal;
    exports.null_to_empty = null_to_empty;
    exports.object_without_properties = object_without_properties;
    exports.onDestroy = onDestroy;
    exports.onMount = onMount;
    exports.once = once;
    exports.outro_and_destroy_block = outro_and_destroy_block;
    exports.prevent_default = prevent_default;
    exports.prop_dev = prop_dev;
    exports.query_selector_all = query_selector_all;
    exports.run = run;
    exports.run_all = run_all;
    exports.safe_not_equal = safe_not_equal;
    exports.schedule_update = schedule_update;
    exports.select_multiple_value = select_multiple_value;
    exports.select_option = select_option;
    exports.select_options = select_options;
    exports.select_value = select_value;
    exports.self = self2;
    exports.setContext = setContext;
    exports.set_attributes = set_attributes;
    exports.set_current_component = set_current_component;
    exports.set_custom_element_data = set_custom_element_data;
    exports.set_data = set_data;
    exports.set_data_dev = set_data_dev;
    exports.set_input_type = set_input_type;
    exports.set_input_value = set_input_value;
    exports.set_now = set_now;
    exports.set_raf = set_raf;
    exports.set_store_value = set_store_value;
    exports.set_style = set_style;
    exports.set_svg_attributes = set_svg_attributes;
    exports.space = space;
    exports.spread = spread;
    exports.src_url_equal = src_url_equal;
    exports.start_hydrating = start_hydrating;
    exports.stop_propagation = stop_propagation;
    exports.subscribe = subscribe;
    exports.svg_element = svg_element;
    exports.text = text;
    exports.tick = tick;
    exports.time_ranges_to_array = time_ranges_to_array;
    exports.to_number = to_number;
    exports.toggle_class = toggle_class;
    exports.transition_in = transition_in;
    exports.transition_out = transition_out;
    exports.trusted = trusted;
    exports.update_await_block_branch = update_await_block_branch;
    exports.update_keyed_each = update_keyed_each;
    exports.update_slot = update_slot;
    exports.update_slot_base = update_slot_base;
    exports.validate_component = validate_component;
    exports.validate_dynamic_element = validate_dynamic_element;
    exports.validate_each_argument = validate_each_argument;
    exports.validate_each_keys = validate_each_keys;
    exports.validate_slots = validate_slots;
    exports.validate_store = validate_store;
    exports.validate_void_dynamic_element = validate_void_dynamic_element;
    exports.xlink_attr = xlink_attr;
  }

}); // node_modules/svelte/store/index.js


var require_store = __commonJS({
  "node_modules/svelte/store/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var internal = require_internal();
    var subscriber_queue = [];

    function readable(value, start) {
      return {
        subscribe: writable(value, start).subscribe
      };
    }

    function writable(value, start = internal.noop) {
      let stop;
      const subscribers = /* @__PURE__ */new Set();

      function set(new_value) {
        if (internal.safe_not_equal(value, new_value)) {
          value = new_value;

          if (stop) {
            const run_queue = !subscriber_queue.length;

            for (const subscriber of subscribers) {
              subscriber[1]();
              subscriber_queue.push(subscriber, value);
            }

            if (run_queue) {
              for (let i = 0; i < subscriber_queue.length; i += 2) {
                subscriber_queue[i][0](subscriber_queue[i + 1]);
              }

              subscriber_queue.length = 0;
            }
          }
        }
      }

      function update(fn) {
        set(fn(value));
      }

      function subscribe(run, invalidate = internal.noop) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          stop = start(set) || internal.noop;
        }

        run(value);
        return () => {
          subscribers.delete(subscriber);

          if (subscribers.size === 0) {
            stop();
            stop = null;
          }
        };
      }

      return {
        set,
        update,
        subscribe
      };
    }

    function derived(stores, fn, initial_value) {
      const single = !Array.isArray(stores);
      const stores_array = single ? [stores] : stores;
      const auto = fn.length < 2;
      return readable(initial_value, set => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = internal.noop;

        const sync = () => {
          if (pending) {
            return;
          }

          cleanup();
          const result = fn(single ? values[0] : values, set);

          if (auto) {
            set(result);
          } else {
            cleanup = internal.is_function(result) ? result : internal.noop;
          }
        };

        const unsubscribers = stores_array.map((store, i) => internal.subscribe(store, value => {
          values[i] = value;
          pending &= ~(1 << i);

          if (inited) {
            sync();
          }
        }, () => {
          pending |= 1 << i;
        }));
        inited = true;
        sync();
        return function stop() {
          internal.run_all(unsubscribers);
          cleanup();
        };
      });
    }

    Object.defineProperty(exports, "get", {
      enumerable: true,
      get: function () {
        return internal.get_store_value;
      }
    });
    exports.derived = derived;
    exports.readable = readable;
    exports.writable = writable;
  }

}); // node_modules/svelte/index.js


var require_svelte = __commonJS({
  "node_modules/svelte/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var internal = require_internal();
    Object.defineProperty(exports, "SvelteComponent", {
      enumerable: true,
      get: function () {
        return internal.SvelteComponentDev;
      }
    });
    Object.defineProperty(exports, "SvelteComponentTyped", {
      enumerable: true,
      get: function () {
        return internal.SvelteComponentTyped;
      }
    });
    Object.defineProperty(exports, "afterUpdate", {
      enumerable: true,
      get: function () {
        return internal.afterUpdate;
      }
    });
    Object.defineProperty(exports, "beforeUpdate", {
      enumerable: true,
      get: function () {
        return internal.beforeUpdate;
      }
    });
    Object.defineProperty(exports, "createEventDispatcher", {
      enumerable: true,
      get: function () {
        return internal.createEventDispatcher;
      }
    });
    Object.defineProperty(exports, "getAllContexts", {
      enumerable: true,
      get: function () {
        return internal.getAllContexts;
      }
    });
    Object.defineProperty(exports, "getContext", {
      enumerable: true,
      get: function () {
        return internal.getContext;
      }
    });
    Object.defineProperty(exports, "hasContext", {
      enumerable: true,
      get: function () {
        return internal.hasContext;
      }
    });
    Object.defineProperty(exports, "onDestroy", {
      enumerable: true,
      get: function () {
        return internal.onDestroy;
      }
    });
    Object.defineProperty(exports, "onMount", {
      enumerable: true,
      get: function () {
        return internal.onMount;
      }
    });
    Object.defineProperty(exports, "setContext", {
      enumerable: true,
      get: function () {
        return internal.setContext;
      }
    });
    Object.defineProperty(exports, "tick", {
      enumerable: true,
      get: function () {
        return internal.tick;
      }
    });
  }

}); // node_modules/universal-model-ng-react-svelte-vue/lib/Store.js


var require_Store = __commonJS({
  "node_modules/universal-model-ng-react-svelte-vue/lib/Store.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _reactiveJs = require("@pksilen/reactive-js");

    var _react = require("react");

    var _store = require_store();

    var _svelte = require_svelte();

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;

      var _e = void 0;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    var Store = /* @__PURE__ */function () {
      function Store2(initialState, selectors) {
        var _this = this;

        _classCallCheck(this, Store2);

        _defineProperty(this, "reactiveState", void 0);

        _defineProperty(this, "reactiveSelectors", void 0);

        _defineProperty(this, "stateStopWatches", /* @__PURE__ */new Map());

        _defineProperty(this, "selectorStopWatches", /* @__PURE__ */new Map());

        _defineProperty(this, "viewToNeedsUpdateMap", /* @__PURE__ */new Map());

        _defineProperty(this, "componentInstanceToUpdatesMap", /* @__PURE__ */new Map());

        _defineProperty(this, "stateWritables", /* @__PURE__ */new Map());

        _defineProperty(this, "selectorWritables", /* @__PURE__ */new Map());

        _defineProperty(this, "idToUpdatesMap", /* @__PURE__ */new Map());

        this.reactiveState = (0, _reactiveJs.reactive)(initialState);
        this.reactiveSelectors = {};

        if (selectors) {
          Object.keys(selectors).forEach(function (key) {
            return _this.reactiveSelectors[key] = (0, _reactiveJs.computed)(function () {
              return selectors[key](_this.reactiveState);
            });
          });
        }
      }

      _createClass(Store2, [{
        key: "getState",
        value: function getState() {
          return this.reactiveState;
        }
      }, {
        key: "getSelectors",
        value: function getSelectors() {
          return this.reactiveSelectors;
        }
      }, {
        key: "getStateAndSelectors",
        value: function getStateAndSelectors() {
          return [this.reactiveState, this.reactiveSelectors];
        }
      }, {
        key: "useStateAndSelectorsReact",
        value: function useStateAndSelectorsReact(subStates, selectors) {
          var _this2 = this;

          var _useState = (0, _react.useState)({}),
              _useState2 = _slicedToArray(_useState, 2),
              view = _useState2[0],
              updateView = _useState2[1];

          (0, _react.useEffect)(function () {
            var stopWatches = [];

            _this2.watchSubStatesAndSelectors(subStates, stopWatches, view, updateView);

            _this2.watchSubStatesAndSelectors(selectors, stopWatches, view, updateView);

            return function () {
              return stopWatches.forEach(function (stopWatch) {
                return stopWatch();
              });
            };
          }, []);
        }
      }, {
        key: "watchSubStatesAndSelectors",
        value: function watchSubStatesAndSelectors(subStates, stopWatches, view, updateView) {
          var _this3 = this;

          subStates.forEach(function (subState) {
            if (!("effect" in subState) && !subState.__isSubState__) {
              throw new Error("useState: One of given subStates is not subState");
            }

            stopWatches.push((0, _reactiveJs.watch)(function () {
              return subState;
            }, function () {
              if (!_this3.viewToNeedsUpdateMap.get(view)) {
                setTimeout(function () {
                  _this3.viewToNeedsUpdateMap.delete(view);

                  updateView({});
                }, 0);
              }

              _this3.viewToNeedsUpdateMap.set(view, true);
            }, {
              deep: true,
              flush: "sync"
            }));
          });
        }
      }, {
        key: "useStateReact",
        value: function useStateReact(subStates) {
          var _this4 = this;

          var _useState3 = (0, _react.useState)({}),
              _useState4 = _slicedToArray(_useState3, 2),
              view = _useState4[0],
              updateView = _useState4[1];

          (0, _react.useEffect)(function () {
            var stopWatches = [];

            _this4.watchSubStatesAndSelectors(subStates, stopWatches, view, updateView);

            return function () {
              return stopWatches.forEach(function (stopWatch) {
                return stopWatch();
              });
            };
          }, []);
        }
      }, {
        key: "useSelectorsReact",
        value: function useSelectorsReact(selectors) {
          var _this5 = this;

          var _useState5 = (0, _react.useState)({}),
              _useState6 = _slicedToArray(_useState5, 2),
              view = _useState6[0],
              updateView = _useState6[1];

          (0, _react.useEffect)(function () {
            var stopWatches = [];

            _this5.watchSubStatesAndSelectors(selectors, stopWatches, view, updateView);

            return function () {
              return stopWatches.forEach(function (stopWatch) {
                return stopWatch();
              });
            };
          }, []);
        }
      }, {
        key: "useStateAndSelectorsNg",
        value: function useStateAndSelectorsNg(componentInstance, subStateMap, selectorMap) {
          this.useStateNg(componentInstance, subStateMap);
          this.useSelectorsNg(componentInstance, selectorMap);
        }
      }, {
        key: "useStateNg",
        value: function useStateNg(componentInstance, subStateMap) {
          var _this6 = this;

          this.stateStopWatches.set(componentInstance, []);
          Object.entries(subStateMap).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                stateName = _ref2[0],
                subState = _ref2[1];

            if (!subState.__isSubState__) {
              throw new Error("useState: One of given subStates is not subState");
            }

            componentInstance[stateName] = subState;

            _this6.stateStopWatches.get(componentInstance).push((0, _reactiveJs.watch)(function () {
              return subState;
            }, function () {
              if (!_this6.componentInstanceToUpdatesMap.get(componentInstance)) {
                setTimeout(function () {
                  Object.entries(_this6.componentInstanceToUpdatesMap.get(componentInstance)).forEach(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        key = _ref4[0],
                        value = _ref4[1];

                    console.log(key, value);
                    componentInstance[key] = value;
                  });

                  _this6.componentInstanceToUpdatesMap.delete(componentInstance);
                }, 0);
              }

              _this6.componentInstanceToUpdatesMap.set(componentInstance, _objectSpread({}, _this6.componentInstanceToUpdatesMap.get(componentInstance), _defineProperty({}, stateName, subState)));
            }, {
              deep: true,
              flush: "sync"
            }));
          });
          var originalOnDestroy = componentInstance.ngOnDestroy;

          componentInstance.ngOnDestroy = function () {
            _this6.stateStopWatches.get(componentInstance).forEach(function (stopWatch) {
              return stopWatch();
            });

            _this6.stateStopWatches.delete(componentInstance);

            if (originalOnDestroy) {
              originalOnDestroy();
            }
          };
        }
      }, {
        key: "useSelectorsNg",
        value: function useSelectorsNg(componentInstance, selectorMap) {
          var _this7 = this;

          this.selectorStopWatches.set(componentInstance, []);
          Object.entries(selectorMap).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                selectorName = _ref6[0],
                selector = _ref6[1];

            componentInstance[selectorName] = selector.value;

            _this7.selectorStopWatches.get(componentInstance).push((0, _reactiveJs.watch)(function () {
              return selector;
            }, function () {
              if (!_this7.componentInstanceToUpdatesMap.get(componentInstance)) {
                setTimeout(function () {
                  Object.entries(_this7.componentInstanceToUpdatesMap.get(componentInstance)).forEach(function (_ref7) {
                    var _ref8 = _slicedToArray(_ref7, 2),
                        key = _ref8[0],
                        value = _ref8[1];

                    console.log(key, value);
                    componentInstance[key] = value;
                  });

                  _this7.componentInstanceToUpdatesMap.delete(componentInstance);
                }, 0);
              }

              _this7.componentInstanceToUpdatesMap.set(componentInstance, _objectSpread({}, _this7.componentInstanceToUpdatesMap.get(componentInstance), _defineProperty({}, selectorName, selector.value)));
            }, {
              deep: true,
              flush: "sync"
            }));
          });
          var originalOnDestroy = componentInstance.ngOnDestroy;

          componentInstance.ngOnDestroy = function () {
            _this7.selectorStopWatches.get(componentInstance).forEach(function (stopWatch) {
              return stopWatch();
            });

            _this7.stateStopWatches.delete(componentInstance);

            if (originalOnDestroy) {
              originalOnDestroy();
            }
          };
        }
      }, {
        key: "useStateSvelte",
        value: function useStateSvelte(id, subStates) {
          var _this8 = this;

          this.stateStopWatches.set(id, []);
          this.stateWritables.set(id, []);
          subStates.forEach(function (subState, index) {
            _this8.stateWritables.get(id).push((0, _store.writable)(subState));

            _this8.stateStopWatches.get(id).push((0, _reactiveJs.watch)(function () {
              return subState;
            }, function () {
              if (!_this8.idToUpdatesMap.get(id)) {
                setTimeout(function () {
                  Object.entries(_this8.idToUpdatesMap.get(id)).forEach(function (_ref9) {
                    var _ref10 = _slicedToArray(_ref9, 2),
                        key = _ref10[0],
                        value = _ref10[1];

                    if (key.startsWith("state")) {
                      _this8.stateWritables.get(id)[parseInt(key.slice(5))].set(value);
                    } else {
                      _this8.selectorWritables.get(id)[parseInt(key.slice(8))].set(value);
                    }
                  });

                  _this8.idToUpdatesMap.delete(id);
                }, 0);
              }

              _this8.idToUpdatesMap.set(id, _objectSpread({}, _this8.idToUpdatesMap.get(id), _defineProperty({}, "state".concat(index), subState)));
            }, {
              deep: true,
              flush: "sync"
            }));
          });
          (0, _svelte.onDestroy)(function () {
            return _this8.stateStopWatches.get(id).forEach(function (stopWatch) {
              return stopWatch();
            });
          });
          return this.stateWritables.get(id);
        }
      }, {
        key: "useSelectorsSvelte",
        value: function useSelectorsSvelte(id, selectors) {
          var _this9 = this;

          this.selectorStopWatches.set(id, []);
          this.selectorWritables.set(id, []);
          selectors.forEach(function (selector, index) {
            _this9.selectorWritables.get(id).push((0, _store.writable)(selector.value));

            _this9.selectorStopWatches.get(id).push((0, _reactiveJs.watch)(function () {
              return selector;
            }, function () {
              if (!_this9.idToUpdatesMap.get(id)) {
                setTimeout(function () {
                  Object.entries(_this9.idToUpdatesMap.get(id)).forEach(function (_ref11) {
                    var _ref12 = _slicedToArray(_ref11, 2),
                        key = _ref12[0],
                        value = _ref12[1];

                    if (key.startsWith("state")) {
                      _this9.stateWritables.get(id)[parseInt(key.slice(5))].set(value);
                    } else {
                      _this9.selectorWritables.get(id)[parseInt(key.slice(8))].set(value);
                    }
                  });

                  _this9.idToUpdatesMap.delete(id);
                }, 0);
              }

              _this9.idToUpdatesMap.set(id, _objectSpread({}, _this9.idToUpdatesMap.get(id), _defineProperty({}, "selector".concat(index), selector.value)));
            }, {
              deep: true,
              flush: "sync"
            }));
          });
          (0, _svelte.onDestroy)(function () {
            return _this9.selectorStopWatches.get(id).forEach(function (stopWatch) {
              return stopWatch();
            });
          });
          return this.selectorWritables.get(id);
        }
      }]);

      return Store2;
    }();

    exports.default = Store;
  }

}); // node_modules/universal-model-ng-react-svelte-vue/lib/createStore.js


var require_createStore = __commonJS({
  "node_modules/universal-model-ng-react-svelte-vue/lib/createStore.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createStore;

    var _Store = _interopRequireDefault(require_Store());

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;

      var _e = void 0;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function createStore(initialState, selectors) {
      Object.entries(initialState).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            subState = _ref2[1];

        if (!subState.__isSubState__) {
          throw new Error("createStore: One of given subStates is not subState. You must call createSubState(subState)");
        }
      });
      return new _Store.default(initialState, selectors);
    }
  }

}); // node_modules/lodash/_listCacheClear.js


var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    module2.exports = listCacheClear;
  }

}); // node_modules/lodash/eq.js


var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }

    module2.exports = eq;
  }

}); // node_modules/lodash/_assocIndexOf.js


var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    var eq = require_eq();

    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }

    module2.exports = assocIndexOf;
  }

}); // node_modules/lodash/_listCacheDelete.js


var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;

    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      --this.size;
      return true;
    }

    module2.exports = listCacheDelete;
  }

}); // node_modules/lodash/_listCacheGet.js


var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();

    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }

    module2.exports = listCacheGet;
  }

}); // node_modules/lodash/_listCacheHas.js


var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();

    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    module2.exports = listCacheHas;
  }

}); // node_modules/lodash/_listCacheSet.js


var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();

    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    }

    module2.exports = listCacheSet;
  }

}); // node_modules/lodash/_ListCache.js


var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module2) {
    var listCacheClear = require_listCacheClear(),
        listCacheDelete = require_listCacheDelete(),
        listCacheGet = require_listCacheGet(),
        listCacheHas = require_listCacheHas(),
        listCacheSet = require_listCacheSet();

    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }

}); // node_modules/lodash/_stackClear.js


var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module2) {
    var ListCache = require_ListCache();

    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }

    module2.exports = stackClear;
  }

}); // node_modules/lodash/_stackDelete.js


var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module2) {
    function stackDelete(key) {
      var data = this.__data__,
          result = data["delete"](key);
      this.size = data.size;
      return result;
    }

    module2.exports = stackDelete;
  }

}); // node_modules/lodash/_stackGet.js


var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }

    module2.exports = stackGet;
  }

}); // node_modules/lodash/_stackHas.js


var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }

    module2.exports = stackHas;
  }

}); // node_modules/lodash/_freeGlobal.js


var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }

}); // node_modules/lodash/_root.js


var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }

}); // node_modules/lodash/_Symbol.js


var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }

}); // node_modules/lodash/_getRawTag.js


var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;

    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }

    module2.exports = getRawTag;
  }

}); // node_modules/lodash/_objectToString.js


var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;

    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module2.exports = objectToString;
  }

}); // node_modules/lodash/_baseGetTag.js


var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol(),
        getRawTag = require_getRawTag(),
        objectToString = require_objectToString();
    var nullTag = "[object Null]",
        undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;

    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }

    module2.exports = baseGetTag;
  }

}); // node_modules/lodash/isObject.js


var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }

    module2.exports = isObject;
  }

}); // node_modules/lodash/isFunction.js


var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
        isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]",
        funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]",
        proxyTag = "[object Proxy]";

    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }

      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    module2.exports = isFunction;
  }

}); // node_modules/lodash/_coreJsData.js


var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }

}); // node_modules/lodash/_isMasked.js


var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module2) {
    var coreJsData = require_coreJsData();

    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();

    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }

    module2.exports = isMasked;
  }

}); // node_modules/lodash/_toSource.js


var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;

    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + "";
        } catch (e) {}
      }

      return "";
    }

    module2.exports = toSource;
  }

}); // node_modules/lodash/_baseIsNative.js


var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module2) {
    var isFunction = require_isFunction(),
        isMasked = require_isMasked(),
        isObject = require_isObject(),
        toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype,
        objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module2.exports = baseIsNative;
  }

}); // node_modules/lodash/_getValue.js


var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }

    module2.exports = getValue;
  }

}); // node_modules/lodash/_getNative.js


var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module2) {
    var baseIsNative = require_baseIsNative(),
        getValue = require_getValue();

    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }

    module2.exports = getNative;
  }

}); // node_modules/lodash/_Map.js


var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module2) {
    var getNative = require_getNative(),
        root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }

}); // node_modules/lodash/_nativeCreate.js


var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }

}); // node_modules/lodash/_hashClear.js


var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();

    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    module2.exports = hashClear;
  }

}); // node_modules/lodash/_hashDelete.js


var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    module2.exports = hashDelete;
  }

}); // node_modules/lodash/_hashGet.js


var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;

    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }

    module2.exports = hashGet;
  }

}); // node_modules/lodash/_hashHas.js


var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;

    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }

    module2.exports = hashHas;
  }

}); // node_modules/lodash/_hashSet.js


var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";

    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }

    module2.exports = hashSet;
  }

}); // node_modules/lodash/_Hash.js


var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module2) {
    var hashClear = require_hashClear(),
        hashDelete = require_hashDelete(),
        hashGet = require_hashGet(),
        hashHas = require_hashHas(),
        hashSet = require_hashSet();

    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }

}); // node_modules/lodash/_mapCacheClear.js


var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    var Hash = require_Hash(),
        ListCache = require_ListCache(),
        Map2 = require_Map();

    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }

    module2.exports = mapCacheClear;
  }

}); // node_modules/lodash/_isKeyable.js


var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }

    module2.exports = isKeyable;
  }

}); // node_modules/lodash/_getMapData.js


var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module2) {
    var isKeyable = require_isKeyable();

    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }

    module2.exports = getMapData;
  }

}); // node_modules/lodash/_mapCacheDelete.js


var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    var getMapData = require_getMapData();

    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    module2.exports = mapCacheDelete;
  }

}); // node_modules/lodash/_mapCacheGet.js


var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    var getMapData = require_getMapData();

    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    module2.exports = mapCacheGet;
  }

}); // node_modules/lodash/_mapCacheHas.js


var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    var getMapData = require_getMapData();

    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    module2.exports = mapCacheHas;
  }

}); // node_modules/lodash/_mapCacheSet.js


var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    var getMapData = require_getMapData();

    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    module2.exports = mapCacheSet;
  }

}); // node_modules/lodash/_MapCache.js


var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module2) {
    var mapCacheClear = require_mapCacheClear(),
        mapCacheDelete = require_mapCacheDelete(),
        mapCacheGet = require_mapCacheGet(),
        mapCacheHas = require_mapCacheHas(),
        mapCacheSet = require_mapCacheSet();

    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }

}); // node_modules/lodash/_stackSet.js


var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module2) {
    var ListCache = require_ListCache(),
        Map2 = require_Map(),
        MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;

    function stackSet(key, value) {
      var data = this.__data__;

      if (data instanceof ListCache) {
        var pairs = data.__data__;

        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }

        data = this.__data__ = new MapCache(pairs);
      }

      data.set(key, value);
      this.size = data.size;
      return this;
    }

    module2.exports = stackSet;
  }

}); // node_modules/lodash/_Stack.js


var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module2) {
    var ListCache = require_ListCache(),
        stackClear = require_stackClear(),
        stackDelete = require_stackDelete(),
        stackGet = require_stackGet(),
        stackHas = require_stackHas(),
        stackSet = require_stackSet();

    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }

}); // node_modules/lodash/_defineProperty.js


var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module2) {
    var getNative = require_getNative();

    var defineProperty = function () {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {}
    }();

    module2.exports = defineProperty;
  }

}); // node_modules/lodash/_baseAssignValue.js


var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module2) {
    var defineProperty = require_defineProperty();

    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }

    module2.exports = baseAssignValue;
  }

}); // node_modules/lodash/_assignMergeValue.js


var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue(),
        eq = require_eq();

    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }

    module2.exports = assignMergeValue;
  }

}); // node_modules/lodash/_createBaseFor.js


var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module2) {
    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];

          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }

        return object;
      };
    }

    module2.exports = createBaseFor;
  }

}); // node_modules/lodash/_baseFor.js


var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module2) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module2.exports = baseFor;
  }

}); // node_modules/lodash/_cloneBuffer.js


var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module2) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0,
        allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;

    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }

    module2.exports = cloneBuffer;
  }

}); // node_modules/lodash/_Uint8Array.js


var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }

}); // node_modules/lodash/_cloneArrayBuffer.js


var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module2) {
    var Uint8Array2 = require_Uint8Array();

    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }

    module2.exports = cloneArrayBuffer;
  }

}); // node_modules/lodash/_cloneTypedArray.js


var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();

    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    module2.exports = cloneTypedArray;
  }

}); // node_modules/lodash/_copyArray.js


var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module2) {
    function copyArray(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));

      while (++index < length) {
        array[index] = source[index];
      }

      return array;
    }

    module2.exports = copyArray;
  }

}); // node_modules/lodash/_baseCreate.js


var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module2) {
    var isObject = require_isObject();
    var objectCreate = Object.create;

    var baseCreate = function () {
      function object() {}

      return function (proto) {
        if (!isObject(proto)) {
          return {};
        }

        if (objectCreate) {
          return objectCreate(proto);
        }

        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();

    module2.exports = baseCreate;
  }

}); // node_modules/lodash/_overArg.js


var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module2) {
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }

    module2.exports = overArg;
  }

}); // node_modules/lodash/_getPrototype.js


var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module2) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }

}); // node_modules/lodash/_isPrototype.js


var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module2) {
    var objectProto = Object.prototype;

    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }

    module2.exports = isPrototype;
  }

}); // node_modules/lodash/_initCloneObject.js


var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module2) {
    var baseCreate = require_baseCreate(),
        getPrototype = require_getPrototype(),
        isPrototype = require_isPrototype();

    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }

    module2.exports = initCloneObject;
  }

}); // node_modules/lodash/isObjectLike.js


var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }

    module2.exports = isObjectLike;
  }

}); // node_modules/lodash/_baseIsArguments.js


var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
        isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";

    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    module2.exports = baseIsArguments;
  }

}); // node_modules/lodash/isArguments.js


var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module2) {
    var baseIsArguments = require_baseIsArguments(),
        isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function () {
      return arguments;
    }()) ? baseIsArguments : function (value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }

}); // node_modules/lodash/isArray.js


var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }

}); // node_modules/lodash/isLength.js


var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;

    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    module2.exports = isLength;
  }

}); // node_modules/lodash/isArrayLike.js


var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module2) {
    var isFunction = require_isFunction(),
        isLength = require_isLength();

    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    module2.exports = isArrayLike;
  }

}); // node_modules/lodash/isArrayLikeObject.js


var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module2) {
    var isArrayLike = require_isArrayLike(),
        isObjectLike = require_isObjectLike();

    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    module2.exports = isArrayLikeObject;
  }

}); // node_modules/lodash/stubFalse.js


var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module2) {
    function stubFalse() {
      return false;
    }

    module2.exports = stubFalse;
  }

}); // node_modules/lodash/isBuffer.js


var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module2) {
    var root = require_root(),
        stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }

}); // node_modules/lodash/isPlainObject.js


var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
        getPrototype = require_getPrototype(),
        isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype,
        objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);

    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }

      var proto = getPrototype(value);

      if (proto === null) {
        return true;
      }

      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }

    module2.exports = isPlainObject;
  }

}); // node_modules/lodash/_baseIsTypedArray.js


var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
        isLength = require_isLength(),
        isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]",
        arrayTag = "[object Array]",
        boolTag = "[object Boolean]",
        dateTag = "[object Date]",
        errorTag = "[object Error]",
        funcTag = "[object Function]",
        mapTag = "[object Map]",
        numberTag = "[object Number]",
        objectTag = "[object Object]",
        regexpTag = "[object RegExp]",
        setTag = "[object Set]",
        stringTag = "[object String]",
        weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]",
        dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]",
        float64Tag = "[object Float64Array]",
        int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]",
        int32Tag = "[object Int32Array]",
        uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]",
        uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    module2.exports = baseIsTypedArray;
  }

}); // node_modules/lodash/_baseUnary.js


var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module2) {
    function baseUnary(func) {
      return function (value) {
        return func(value);
      };
    }

    module2.exports = baseUnary;
  }

}); // node_modules/lodash/_nodeUtil.js


var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;

    var nodeUtil = function () {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;

        if (types) {
          return types;
        }

        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {}
    }();

    module2.exports = nodeUtil;
  }

}); // node_modules/lodash/isTypedArray.js


var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module2) {
    var baseIsTypedArray = require_baseIsTypedArray(),
        baseUnary = require_baseUnary(),
        nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }

}); // node_modules/lodash/_safeGet.js


var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module2) {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }

      if (key == "__proto__") {
        return;
      }

      return object[key];
    }

    module2.exports = safeGet;
  }

}); // node_modules/lodash/_assignValue.js


var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue(),
        eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;

    function assignValue(object, key, value) {
      var objValue = object[key];

      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }

    module2.exports = assignValue;
  }

}); // node_modules/lodash/_copyObject.js


var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module2) {
    var assignValue = require_assignValue(),
        baseAssignValue = require_baseAssignValue();

    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;

        if (newValue === void 0) {
          newValue = source[key];
        }

        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }

      return object;
    }

    module2.exports = copyObject;
  }

}); // node_modules/lodash/_baseTimes.js


var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module2) {
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    }

    module2.exports = baseTimes;
  }

}); // node_modules/lodash/_isIndex.js


var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }

    module2.exports = isIndex;
  }

}); // node_modules/lodash/_arrayLikeKeys.js


var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    var baseTimes = require_baseTimes(),
        isArguments = require_isArguments(),
        isArray = require_isArray(),
        isBuffer = require_isBuffer(),
        isIndex = require_isIndex(),
        isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;

    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }

    module2.exports = arrayLikeKeys;
  }

}); // node_modules/lodash/_nativeKeysIn.js


var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module2) {
    function nativeKeysIn(object) {
      var result = [];

      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }

      return result;
    }

    module2.exports = nativeKeysIn;
  }

}); // node_modules/lodash/_baseKeysIn.js


var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module2) {
    var isObject = require_isObject(),
        isPrototype = require_isPrototype(),
        nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;

    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }

      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }

      return result;
    }

    module2.exports = baseKeysIn;
  }

}); // node_modules/lodash/keysIn.js


var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys(),
        baseKeysIn = require_baseKeysIn(),
        isArrayLike = require_isArrayLike();

    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    module2.exports = keysIn;
  }

}); // node_modules/lodash/toPlainObject.js


var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module2) {
    var copyObject = require_copyObject(),
        keysIn = require_keysIn();

    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    module2.exports = toPlainObject;
  }

}); // node_modules/lodash/_baseMergeDeep.js


var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module2) {
    var assignMergeValue = require_assignMergeValue(),
        cloneBuffer = require_cloneBuffer(),
        cloneTypedArray = require_cloneTypedArray(),
        copyArray = require_copyArray(),
        initCloneObject = require_initCloneObject(),
        isArguments = require_isArguments(),
        isArray = require_isArray(),
        isArrayLikeObject = require_isArrayLikeObject(),
        isBuffer = require_isBuffer(),
        isFunction = require_isFunction(),
        isObject = require_isObject(),
        isPlainObject = require_isPlainObject(),
        isTypedArray = require_isTypedArray(),
        safeGet = require_safeGet(),
        toPlainObject = require_toPlainObject();

    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }

      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;

        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;

          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }

      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }

      assignMergeValue(object, key, newValue);
    }

    module2.exports = baseMergeDeep;
  }

}); // node_modules/lodash/_baseMerge.js


var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module2) {
    var Stack = require_Stack(),
        assignMergeValue = require_assignMergeValue(),
        baseFor = require_baseFor(),
        baseMergeDeep = require_baseMergeDeep(),
        isObject = require_isObject(),
        keysIn = require_keysIn(),
        safeGet = require_safeGet();

    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }

      baseFor(source, function (srcValue, key) {
        stack || (stack = new Stack());

        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;

          if (newValue === void 0) {
            newValue = srcValue;
          }

          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    module2.exports = baseMerge;
  }

}); // node_modules/lodash/identity.js


var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module2) {
    function identity(value) {
      return value;
    }

    module2.exports = identity;
  }

}); // node_modules/lodash/_apply.js


var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module2) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);

        case 1:
          return func.call(thisArg, args[0]);

        case 2:
          return func.call(thisArg, args[0], args[1]);

        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }

      return func.apply(thisArg, args);
    }

    module2.exports = apply;
  }

}); // node_modules/lodash/_overRest.js


var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module2) {
    var apply = require_apply();
    var nativeMax = Math.max;

    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function () {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }

        index = -1;
        var otherArgs = Array(start + 1);

        while (++index < start) {
          otherArgs[index] = args[index];
        }

        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    module2.exports = overRest;
  }

}); // node_modules/lodash/constant.js


var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module2) {
    function constant(value) {
      return function () {
        return value;
      };
    }

    module2.exports = constant;
  }

}); // node_modules/lodash/_baseSetToString.js


var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module2) {
    var constant = require_constant(),
        defineProperty = require_defineProperty(),
        identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function (func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module2.exports = baseSetToString;
  }

}); // node_modules/lodash/_shortOut.js


var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module2) {
    var HOT_COUNT = 800,
        HOT_SPAN = 16;
    var nativeNow = Date.now;

    function shortOut(func) {
      var count = 0,
          lastCalled = 0;
      return function () {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;

        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }

        return func.apply(void 0, arguments);
      };
    }

    module2.exports = shortOut;
  }

}); // node_modules/lodash/_setToString.js


var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module2) {
    var baseSetToString = require_baseSetToString(),
        shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module2.exports = setToString;
  }

}); // node_modules/lodash/_baseRest.js


var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module2) {
    var identity = require_identity(),
        overRest = require_overRest(),
        setToString = require_setToString();

    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }

    module2.exports = baseRest;
  }

}); // node_modules/lodash/_isIterateeCall.js


var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module2) {
    var eq = require_eq(),
        isArrayLike = require_isArrayLike(),
        isIndex = require_isIndex(),
        isObject = require_isObject();

    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }

      var type = typeof index;

      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }

      return false;
    }

    module2.exports = isIterateeCall;
  }

}); // node_modules/lodash/_createAssigner.js


var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module2) {
    var baseRest = require_baseRest(),
        isIterateeCall = require_isIterateeCall();

    function createAssigner(assigner) {
      return baseRest(function (object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : void 0,
            guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }

        object = Object(object);

        while (++index < length) {
          var source = sources[index];

          if (source) {
            assigner(object, source, index, customizer);
          }
        }

        return object;
      });
    }

    module2.exports = createAssigner;
  }

}); // node_modules/lodash/mergeWith.js


var require_mergeWith = __commonJS({
  "node_modules/lodash/mergeWith.js"(exports, module2) {
    var baseMerge = require_baseMerge(),
        createAssigner = require_createAssigner();
    var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });
    module2.exports = mergeWith;
  }

}); // node_modules/lodash/isUndefined.js


var require_isUndefined = __commonJS({
  "node_modules/lodash/isUndefined.js"(exports, module2) {
    function isUndefined(value) {
      return value === void 0;
    }

    module2.exports = isUndefined;
  }

}); // node_modules/universal-model-ng-react-svelte-vue/lib/combineSelectors.js


var require_combineSelectors = __commonJS({
  "node_modules/universal-model-ng-react-svelte-vue/lib/combineSelectors.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineSelectors = combineSelectors;

    var _mergeWith = _interopRequireDefault(require_mergeWith());

    var _isUndefined = _interopRequireDefault(require_isUndefined());

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    function combineSelectors() {
      for (var _len = arguments.length, selectorsObjects = new Array(_len), _key = 0; _key < _len; _key++) {
        selectorsObjects[_key] = arguments[_key];
      }

      return _mergeWith.default.apply(void 0, [selectorsObjects[0]].concat(_toConsumableArray(selectorsObjects.slice(1)), [function (objValue, srcValue, key) {
        if (!(0, _isUndefined.default)(objValue)) throw new Error("duplicate selector key: ".concat(key));
      }]));
    }
  }

}); // node_modules/universal-model-ng-react-svelte-vue/lib/createSubState.js


var require_createSubState = __commonJS({
  "node_modules/universal-model-ng-react-svelte-vue/lib/createSubState.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createSubState;

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function createSubState(subState) {
      if (Object.keys(subState).includes("__isSubState__")) {
        throw new Error("createSubState: subState may not contain key: __isSubState__");
      }

      return _objectSpread({}, subState, {
        __isSubState__: true
      });
    }
  }

}); // node_modules/universal-model-ng-react-svelte-vue/lib/index.js


var require_lib = __commonJS({
  "node_modules/universal-model-ng-react-svelte-vue/lib/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createStore", {
      enumerable: true,
      get: function get() {
        return _createStore.default;
      }
    });
    Object.defineProperty(exports, "combineSelectors", {
      enumerable: true,
      get: function get() {
        return _combineSelectors.combineSelectors;
      }
    });
    Object.defineProperty(exports, "createSubState", {
      enumerable: true,
      get: function get() {
        return _createSubState.default;
      }
    });
    Object.defineProperty(exports, "Store", {
      enumerable: true,
      get: function get() {
        return _Store.default;
      }
    });

    var _createStore = _interopRequireDefault(require_createStore());

    var _combineSelectors = require_combineSelectors();

    var _createSubState = _interopRequireDefault(require_createSubState());

    var _Store = _interopRequireDefault(require_Store());

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }

}); // .beyond/uimport/temp/universal-model-ng-react-svelte-vue/0.3.3.js


var __exports = {};

__export(__exports, {
  default: () => __default
});

module.exports = __toCommonJS(__exports);

__reExport(__exports, __toESM(require_lib()), module.exports);

var import_universal_model_ng_react_svelte_vue = __toESM(require_lib());

var __default = import_universal_model_ng_react_svelte_vue.default;
};

code(module, require);
return module.exports;
});

