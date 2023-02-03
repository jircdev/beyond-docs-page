System.register(["@beyond-js/kernel@0.1.7/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/styles","@beyond-js/widgets@0.1.2/controller","@beyond-js/react-widgets@18.21.1/base","@beyond-js/kernel@0.1.7/routing","@beyond-js/widgets@0.1.2/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.2"],["@beyond-js/react-widgets","18.21.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/controller', dep), dep => dependencies.set('@beyond-js/react-widgets@18.21.1/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/routing', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-widgets/page.18.21.1.js
var page_18_21_1_exports = {};
__export(page_18_21_1_exports, {
  PageReactWidgetController: () => PageReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_18_21_1_exports);

// node_modules/@beyond-js/react-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/react-widgets@18.21.1/base"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.2/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.21.1/page"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/react-widgets/base", dependency_1], ["@beyond-js/widgets/routing", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 3016655360,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageReactWidgetController = void 0;
    var _base = require2("@beyond-js/react-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageReactWidgetController2 extends _base.ReactWidgetController {
      #uri;
      get uri() {
        return this.#uri;
      }
      mount() {
        return super.mount({
          uri: this.#uri
        });
      }
      async initialise() {
        this.#uri = new _routing.PageURI({
          widget: this.widget
        });
        await super.initialise();
      }
    }
    exports.PageReactWidgetController = PageReactWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageReactWidgetController",
  "name": "PageReactWidgetController"
}];
var PageReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageReactWidgetController") && (PageReactWidgetController = require2 ? require2("./page").PageReactWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvcGFnZS4xOC4yMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9wYWdlL19fc291cmNlcy9wYWdlL3BhZ2UudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwidXJpIiwibW91bnQiLCJpbml0aWFsaXNlIiwiUGFnZVVSSSIsIndpZGdldCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBRWlCLE1BQ0ZILG1DQUFrQ0ksNEJBQXFCO01BQ2xFO01BQ0EsSUFBSUMsTUFBRztRQUNILE9BQU8sS0FBSztNQUNoQjtNQUVBQyxRQUFLO1FBQ0QsT0FBTyxNQUFNQSxNQUFNO1VBQUNELEtBQUssS0FBSztRQUFJLENBQUM7TUFDdkM7TUFFQSxNQUFNRSxhQUFVO1FBQ1osS0FBSyxPQUFPLElBQUlDLGlCQUFRO1VBQUNDLFFBQWEsS0FBS0E7UUFBTSxDQUFDO1FBQ2xELE1BQU0sTUFBTUYsWUFBVTtNQUMxQjs7SUFDSEciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9kb2N1bWVudGF0aW9uL291dCJ9