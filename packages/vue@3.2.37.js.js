define(["@vue/shared@3.2.37","@vue/reactivity@3.2.37","@vue/runtime-core@3.2.37","@vue/runtime-dom@3.2.37"], (dep_0, dep_1, dep_2, dep_3) => {

const dependencies = new Map([['@vue/shared@3.2.37', dep_0],['@vue/reactivity@3.2.37', dep_1],['@vue/runtime-core@3.2.37', dep_2],['@vue/runtime-dom@3.2.37', dep_3]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/vue.3.2.37.js


var vue_3_2_37_exports = {};

__export(vue_3_2_37_exports, {
  compile: () => compile
}); // node_modules/vue/dist/vue.runtime.esm-bundler.js


var vue_runtime_esm_bundler_exports = {};

__export(vue_runtime_esm_bundler_exports, {
  compile: () => compile
});

var import_runtime_dom = require("@vue/runtime-dom@3.2.37");

__reExport(vue_runtime_esm_bundler_exports, require("@vue/runtime-dom@3.2.37"));

function initDev() {
  {
    (0, import_runtime_dom.initCustomFormatter)();
  }
}

if (true) {
  initDev();
}

var compile = () => {
  if (true) {
    (0, import_runtime_dom.warn)(`Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
  }
}; // .beyond/uimport/temp/vue.3.2.37.js


__reExport(vue_3_2_37_exports, vue_runtime_esm_bundler_exports);

module.exports = __toCommonJS(vue_3_2_37_exports);
};

code(module, require);
return module.exports;
});

