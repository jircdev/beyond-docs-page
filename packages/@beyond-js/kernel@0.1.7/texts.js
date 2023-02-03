System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep)],
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

// .beyond/uimport/@beyond-js/kernel/texts.0.1.7.js
var texts_0_1_7_exports = {};
__export(texts_0_1_7_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(texts_0_1_7_exports);

// node_modules/@beyond-js/kernel/texts/texts.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.7/texts"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./current", {
  hash: 1735458173,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrentTexts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _texts = require2("./texts");
    class CurrentTexts2 extends _core.Events {
      #texts = /* @__PURE__ */new Map();
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #enabled = false;
      get enabled() {
        return this.#enabled;
      }
      set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
      }
      #last;
      get #current() {
        const {
          current: language
        } = _core.languages;
        if (this.#texts.has(language)) return this.#texts.get(language);
        const texts = new _texts.Texts(this.#bundle, {
          language
        });
        this.#texts.set(language, texts);
        return texts;
      }
      get loading() {
        return this.#current.loading;
      }
      get loaded() {
        return this.#current.loaded;
      }
      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }
      get value() {
        return this.#current.value;
      }
      constructor(bundle) {
        super();
        this.#bundle = bundle;
        if (!bundle) throw new Error(`Bundle parameter must be specified`);
        _core.languages.on("change", this.#change);
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
      }
      #triggerChange = () => {
        this.trigger("change");
      };
      #change = () => {
        this.#last.off("change", this.#triggerChange);
        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
        this.#triggerChange();
      };
      async fetch() {
        await _core.languages.ready;
        await this.#current.fetch();
      }
      async load() {
        await this.#current.fetch();
      }
      destroy() {
        this.#texts.forEach(texts => texts.destroy());
        _core.languages.off("change", this.#change);
      }
      toJSON() {
        return {};
      }
    }
    exports.CurrentTexts = CurrentTexts2;
  }
});
ims.set("./texts", {
  hash: 678111696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Texts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Texts2 extends _core.Events {
      #module;
      get module() {
        return this.#module;
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #transversal;
      get transversal() {
        return this.#transversal;
      }
      #multilanguage;
      get multilanguage() {
        return this.#multilanguage;
      }
      #language;
      get language() {
        return this.#language;
      }
      #texts;
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #loading;
      get loading() {
        return this.#loading;
      }
      get value() {
        return this.#texts?.txt;
      }
      get ready() {
        if (this.#loading) return false;
        this.fetch().catch(exc => console.log(exc.stack));
        return !this.#loading && this.#loaded;
      }
      constructor(module2, specs) {
        if (!module2) throw new Error("Invalid parameters");
        super();
        this.#module = module2;
        specs = specs ? specs : {};
        this.#language = specs.language;
        this.#multilanguage = !!specs.language;
        this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : "txt" : void 0;
        this.#transversal = specs.transversal;
      }
      #update = () => this.trigger("change");
      async fetch() {
        if (this.#loading || this.#loaded) return;
        this.#loading = true;
        this.trigger("change");
        const language = this.#language ? `.${this.#language}` : "";
        const {
          specifier,
          resource
        } = (() => {
          if (this.#transversal) {
            const specifier2 = `${this.#module}.${this.#transversal}${language}`;
            const pkg = (() => {
              const split = this.#module.split("/");
              return split[0].startsWith("@") ? `${split[0]}/${split[1]}` : split[0];
            })();
            const resource2 = `${pkg}/${this.#transversal}${language}`;
            return {
              specifier: specifier2,
              resource: resource2
            };
          } else {
            const specifier2 = `${this.#module}.${this.#bundle}${language}`;
            return {
              specifier: specifier2,
              resource: specifier2
            };
          }
        })();
        const imported = await bimport(resource);
        this.#texts = (() => {
          if (!this.#transversal) return imported;
          const {
            __beyond_transversal: transversal
          } = imported;
          return transversal.bundles.get(specifier);
        })();
        this.#texts.hmr.on("change", this.#update);
        this.#loading = false;
        this.#loaded = true;
        this.trigger("change");
      }
      async load() {
        await this.fetch();
      }
      destroy() {
        this.#texts?.hmr.off("change", this.#update);
      }
      toJSON() {
        return {};
      }
    }
    exports.Texts = Texts2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./current",
  "from": "CurrentTexts",
  "name": "CurrentTexts"
}, {
  "im": "./texts",
  "from": "Texts",
  "name": "Texts"
}];
var CurrentTexts, Texts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "CurrentTexts") && (CurrentTexts = require2 ? require2("./current").CurrentTexts : value);
  (require2 || prop === "Texts") && (Texts = require2 ? require2("./texts").Texts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy4wLjEuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvY3VycmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvdGV4dHMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJDdXJyZW50VGV4dHMiLCJUZXh0cyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsIkV2ZW50cyIsIk1hcCIsImJ1bmRsZSIsImVuYWJsZWQiLCJ2YWx1ZSIsImZldGNoIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImN1cnJlbnQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImhhcyIsImdldCIsInRleHRzIiwic2V0IiwibG9hZGluZyIsImxvYWRlZCIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsIm9uIiwidHJpZ2dlciIsIm9mZiIsImxvZyIsImxvYWQiLCJkZXN0cm95IiwiZm9yRWFjaCIsInRvSlNPTiIsImV4cG9ydHMiLCJ0cmFuc3ZlcnNhbCIsIm11bHRpbGFuZ3VhZ2UiLCJ0eHQiLCJzcGVjcyIsInNwZWNpZmllciIsInJlc291cmNlIiwicGtnIiwic3BsaXQiLCJzdGFydHNXaXRoIiwiaW1wb3J0ZWQiLCJiaW1wb3J0IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJidW5kbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBYWlCLE1BQ1hKLHNCQUF1Q0ssYUFBTTtNQUMvQyxTQUErQyxtQkFBSUMsS0FBRztN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LEdBQUcsS0FBSyxXQUFXLEtBQUssVUFBVXhCO1lBQ3BELE9BQU87Y0FBQ3dCO2NBQVdDLFVBQVVEO1lBQVM7O1FBRTlDLElBQUM7UUFFRCxNQUFNSyxXQUFXLE1BQU1DLFFBQVFMLFFBQVE7UUFFdkMsS0FBSyxVQUFVLE1BQUs7VUFDaEIsSUFBSSxDQUFDLEtBQUssY0FBYyxPQUFPSTtVQUUvQixNQUFNO1lBQUNFLHNCQUFzQlg7VUFBVyxJQUFJUztVQUM1QyxPQUFPVCxZQUFZWSxRQUFRN0IsSUFBSXFCLFNBQVM7UUFDNUMsSUFBQztRQUVELEtBQUssT0FBT3RDLElBQUl5QixHQUFHLFVBQVUsS0FBSyxPQUFPO1FBRXpDLEtBQUssV0FBVztRQUNoQixLQUFLLFVBQVU7UUFDZixLQUFLQyxRQUFRLFFBQVE7TUFDekI7TUFNQSxNQUFNRyxPQUFJO1FBQ04sTUFBTSxLQUFLdEIsT0FBSztNQUNwQjtNQUVBdUIsVUFBTztRQUNILEtBQUssUUFBUTlCLElBQUkyQixJQUFJLFVBQVUsS0FBSyxPQUFPO01BQy9DO01BRUFLLFNBQU07UUFDRixPQUFPO01BQ1g7O0lBQ0hDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZG9jdW1lbnRhdGlvbi9vdXQifQ==