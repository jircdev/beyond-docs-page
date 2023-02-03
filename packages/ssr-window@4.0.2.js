System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
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
}), mod);

// .beyond/uimport/temp/ssr-window.4.0.2.js
var ssr_window_4_0_2_exports = {};
__export(ssr_window_4_0_2_exports, {
  extend: () => extend,
  getDocument: () => getDocument,
  getWindow: () => getWindow,
  ssrDocument: () => ssrDocument,
  ssrWindow: () => ssrWindow
});
module.exports = __toCommonJS(ssr_window_4_0_2_exports);

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Nzci13aW5kb3cuNC4wLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImV4dGVuZCIsImdldERvY3VtZW50IiwiZ2V0V2luZG93Iiwic3NyRG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJtb2R1bGUiLCJpc09iamVjdCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwidGFyZ2V0Iiwic3JjIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJsZW5ndGgiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsIm5vZGVOYW1lIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsInN0eWxlIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJpbXBvcnROb2RlIiwibG9jYXRpb24iLCJoYXNoIiwiaG9zdCIsImhvc3RuYW1lIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwicHJvdG9jb2wiLCJzZWFyY2giLCJkb2MiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJ3aW4iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ1lBLFNBQVNDLFNBQVNDLEtBQUs7RUFDbkIsT0FBUUEsUUFBUSxRQUNaLE9BQU9BLFFBQVEsWUFDZixpQkFBaUJBLE9BQ2pCQSxJQUFJQyxnQkFBZ0JDO0FBQzVCO0FBQ0EsU0FBU1QsT0FBT1UsU0FBUyxDQUFDLEdBQUdDLE1BQU0sQ0FBQyxHQUFHO0VBQ25DRixPQUFPRyxLQUFLRCxHQUFHLEVBQUVFLFFBQVNDLE9BQVE7SUFDOUIsSUFBSSxPQUFPSixPQUFPSSxTQUFTLGFBQ3ZCSixPQUFPSSxPQUFPSCxJQUFJRyxjQUNiUixTQUFTSyxJQUFJRyxJQUFJLEtBQ3RCUixTQUFTSSxPQUFPSSxJQUFJLEtBQ3BCTCxPQUFPRyxLQUFLRCxJQUFJRyxJQUFJLEVBQUVDLFNBQVMsR0FBRztNQUNsQ2YsT0FBT1UsT0FBT0ksTUFBTUgsSUFBSUcsSUFBSTtJQUNoQztFQUNKLENBQUM7QUFDTDtBQUVBLElBQU1YLGNBQWM7RUFDaEJhLE1BQU0sQ0FBQztFQUNQQyxtQkFBbUIsQ0FBRTtFQUNyQkMsc0JBQXNCLENBQUU7RUFDeEJDLGVBQWU7SUFDWEMsT0FBTyxDQUFFO0lBQ1RDLFVBQVU7RUFDZDtFQUNBQyxnQkFBZ0I7SUFDWixPQUFPO0VBQ1g7RUFDQUMsbUJBQW1CO0lBQ2YsT0FBTyxFQUFDO0VBQ1o7RUFDQUMsaUJBQWlCO0lBQ2IsT0FBTztFQUNYO0VBQ0FDLGNBQWM7SUFDVixPQUFPO01BQ0hDLFlBQVksQ0FBRTtJQUNsQjtFQUNKO0VBQ0FDLGdCQUFnQjtJQUNaLE9BQU87TUFDSEMsVUFBVSxFQUFDO01BQ1hDLFlBQVksRUFBQztNQUNiQyxPQUFPLENBQUM7TUFDUkMsZUFBZSxDQUFFO01BQ2pCQyx1QkFBdUI7UUFDbkIsT0FBTyxFQUFDO01BQ1o7SUFDSjtFQUNKO0VBQ0FDLGtCQUFrQjtJQUNkLE9BQU8sQ0FBQztFQUNaO0VBQ0FDLGFBQWE7SUFDVCxPQUFPO0VBQ1g7RUFDQUMsVUFBVTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLFFBQVE7RUFDWjtBQUNKO0FBQ0EsU0FBUzFDLGNBQWM7RUFDbkIsTUFBTTJDLE1BQU0sT0FBT0MsYUFBYSxjQUFjQSxXQUFXLENBQUM7RUFDMUQ3QyxPQUFPNEMsS0FBS3pDLFdBQVc7RUFDdkIsT0FBT3lDO0FBQ1g7QUFFQSxJQUFNeEMsWUFBWTtFQUNkeUMsVUFBVTFDO0VBQ1YyQyxXQUFXO0lBQ1BDLFdBQVc7RUFDZjtFQUNBWixVQUFVO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLE1BQU07SUFDTkMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsUUFBUTtFQUNaO0VBQ0FLLFNBQVM7SUFDTEMsZUFBZSxDQUFFO0lBQ2pCQyxZQUFZLENBQUU7SUFDZEMsS0FBSyxDQUFFO0lBQ1BDLE9BQU8sQ0FBRTtFQUNiO0VBQ0FDLGFBQWEsU0FBU0EsY0FBYztJQUNoQyxPQUFPO0VBQ1g7RUFDQXBDLG1CQUFtQixDQUFFO0VBQ3JCQyxzQkFBc0IsQ0FBRTtFQUN4Qm9DLG1CQUFtQjtJQUNmLE9BQU87TUFDSEMsbUJBQW1CO1FBQ2YsT0FBTztNQUNYO0lBQ0o7RUFDSjtFQUNBQyxRQUFRLENBQUU7RUFDVkMsT0FBTyxDQUFFO0VBQ1RDLFFBQVEsQ0FBQztFQUNUQyxhQUFhLENBQUU7RUFDZkMsZUFBZSxDQUFFO0VBQ2pCQyxhQUFhO0lBQ1QsT0FBTyxDQUFDO0VBQ1o7RUFDQUMsc0JBQXNCQyxVQUFVO0lBQzVCLElBQUksT0FBT0osZUFBZSxhQUFhO01BQ25DSSxVQUFTO01BQ1QsT0FBTztJQUNYO0lBQ0EsT0FBT0osV0FBV0ksVUFBVSxDQUFDO0VBQ2pDO0VBQ0FDLHFCQUFxQkMsSUFBSTtJQUNyQixJQUFJLE9BQU9OLGVBQWUsYUFBYTtNQUNuQztJQUNKO0lBQ0FDLGFBQWFLLEVBQUU7RUFDbkI7QUFDSjtBQUNBLFNBQVMvRCxZQUFZO0VBQ2pCLE1BQU1nRSxNQUFNLE9BQU9DLFdBQVcsY0FBY0EsU0FBUyxDQUFDO0VBQ3REbkUsT0FBT2tFLEtBQUs5RCxTQUFTO0VBQ3JCLE9BQU84RDtBQUNYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvZG9jdW1lbnRhdGlvbi9vdXQifQ==