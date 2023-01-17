System.register(["react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["@mdx-js/react","2.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/@mdx-js/react.2.2.1.js
var react_2_2_1_exports = {};
__export(react_2_2_1_exports, {
  MDXContext: () => MDXContext,
  MDXProvider: () => MDXProvider,
  useMDXComponents: () => useMDXComponents,
  withMDXComponents: () => withMDXComponents
});

// node_modules/@mdx-js/react/lib/index.js
var import_react = __toESM(require("react@18.2.0"), 0);
var MDXContext = import_react.default.createContext({});
function withMDXComponents(Component) {
  return boundMDXComponent;
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components);
    return import_react.default.createElement(Component, {
      ...props,
      allComponents
    });
  }
}
function useMDXComponents(components) {
  const contextComponents = import_react.default.useContext(MDXContext);
  return import_react.default.useMemo(() => {
    if (typeof components === "function") {
      return components(contextComponents);
    }
    return {
      ...contextComponents,
      ...components
    };
  }, [contextComponents, components]);
}
var emptyObject = {};
function MDXProvider({
  components,
  children,
  disableParentContext
}) {
  let allComponents = useMDXComponents(components);
  if (disableParentContext) {
    allComponents = components || emptyObject;
  }
  return import_react.default.createElement(MDXContext.Provider, {
    value: allComponents
  }, children);
}
module.exports = __toCommonJS(react_2_2_1_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AbWR4LWpzL3JlYWN0LjIuMi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTURYQ29udGV4dCIsIk1EWFByb3ZpZGVyIiwidXNlTURYQ29tcG9uZW50cyIsIndpdGhNRFhDb21wb25lbnRzIiwiX190b0VTTSIsImltcG9ydF9yZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDb21wb25lbnQiLCJib3VuZE1EWENvbXBvbmVudCIsInByb3BzIiwiYWxsQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dENvbXBvbmVudHMiLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsImVtcHR5T2JqZWN0IiwiY2hpbGRyZW4iLCJkaXNhYmxlUGFyZW50Q29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZG9jdW1lbnRhdGlvbi9vdXQifQ==