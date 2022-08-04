define(["svelte@3.48.0/internal"], (dep_0) => {

const dependencies = new Map([['svelte@3.48.0/internal', dep_0]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/svelte.3.48.0.js


var svelte_3_48_0_exports = {};

__export(svelte_3_48_0_exports, {
  SvelteComponent: () => import_internal.SvelteComponentDev,
  SvelteComponentTyped: () => import_internal.SvelteComponentTyped,
  afterUpdate: () => import_internal.afterUpdate,
  beforeUpdate: () => import_internal.beforeUpdate,
  createEventDispatcher: () => import_internal.createEventDispatcher,
  getAllContexts: () => import_internal.getAllContexts,
  getContext: () => import_internal.getContext,
  hasContext: () => import_internal.hasContext,
  onDestroy: () => import_internal.onDestroy,
  onMount: () => import_internal.onMount,
  setContext: () => import_internal.setContext,
  tick: () => import_internal.tick
}); // node_modules/svelte/index.mjs


var import_internal = require("svelte@3.48.0/internal");

module.exports = __toCommonJS(svelte_3_48_0_exports);
};

code(module, require);
return module.exports;
});

