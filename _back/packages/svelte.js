define(["svelte/internal"], (dep_0) => {
const dependencies = new Map([['svelte/internal', dep_0]]);
const define = void 0;
const require = dependency => dependencies.get(dependency);
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

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

var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod); // .beyond/uimport/temp/svelte/3.47.0.js


var __exports = {};

__export(__exports, {
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
});

module.exports = __toCommonJS(__exports); // node_modules/svelte/index.mjs

var import_internal = require("svelte/internal");
};

code(module, require);
return module.exports;
});

