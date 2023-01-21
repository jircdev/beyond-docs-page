System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ripple-effects","1.0.2"]]);
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
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

// node_modules/ripple-effects/dist/ripple.umd.min.js
var require_ripple_umd_min = __commonJS({
  "node_modules/ripple-effects/dist/ripple.umd.min.js"(exports, module2) {
    !function (e, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? module2.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).ripple = t();
    }(exports, function () {
      "use strict";

      function e(e2, t2, n2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e2[t2] = n2, e2;
      }
      function t(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e2);
          t2 && (o2 = o2.filter(function (t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, o2);
        }
        return n2;
      }
      function n(n2) {
        for (var o2 = 1; o2 < arguments.length; o2++) {
          var r2 = arguments[o2] != null ? arguments[o2] : {};
          o2 % 2 ? t(Object(r2), true).forEach(function (t2) {
            e(n2, t2, r2[t2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n2, Object.getOwnPropertyDescriptors(r2)) : t(Object(r2)).forEach(function (e2) {
            Object.defineProperty(n2, e2, Object.getOwnPropertyDescriptor(r2, e2));
          });
        }
        return n2;
      }
      function o(e2) {
        return /^-+/.test(e2) ? e2 : /([^\-]+)([A-Z])/g.test(e2) ? e2.replace(/[A-Z]/g, function (e3) {
          return "-" + e3.toLowerCase();
        }) : e2.toLowerCase();
      }
      function r(e2, t2) {
        var n2 = e2 instanceof Element ? e2 : document.createElement(e2);
        if (!t2) return n2;
        for (var o2 in t2) {
          var r2 = t2[o2];
          if (/^on([A-Z][a-z A-Z])+/.test(o2)) {
            var a2 = o2.toLowerCase().substr(2);
            n2.addEventListener(a2, r2);
          } else switch (o2) {
            case "style":
              i(n2, r2);
              break;
            case "appendTo":
              if (!r2) break;
              r2.appendChild(n2);
              break;
            case "appendChild":
              n2.appendChild(r2);
              break;
            case "dataset":
              n2.dataset[r2[0]] = r2[1] || "";
              break;
            default:
              n2[o2] = r2;
          }
        }
        return n2;
      }
      function i(e2, t2) {
        if (typeof t2 == "string") return getComputedStyle(e2).getPropertyValue(o(t2));
        for (var n2 in t2) e2.style.setProperty(o(n2), t2[n2]);
      }
      function a(e2, t2) {
        return r(e2, t2), {
          on: function (t3, n2, o2) {
            t3.split(" ").forEach(function (t4) {
              e2.addEventListener(t4, n2, o2);
            });
          },
          off: function (t3, n2) {
            t3.split(" ").forEach(function (t4) {
              e2.removeEventListener(t4, n2);
            });
          }
        };
      }
      function s(e2) {
        return ["hr", "br", "img", "col", "input", "embed", "area", "base", "keygen", "source", "track", "wbr"].indexOf(e2.tagName.toLowerCase()) > -1;
      }
      function c(e2) {
        var t2,
          n2 = {
            top: 0,
            left: 0
          };
        return t2 = (e2 && e2.ownerDocument).documentElement, e2.getBoundingClientRect !== void 0 && (n2 = e2.getBoundingClientRect()), {
          top: n2.top + window.pageYOffset - t2.clientTop,
          left: n2.left + window.pageXOffset - t2.clientLeft
        };
      }
      function u(e2) {
        for (var t2 = [], n2 = 0; n2 < e2.length; n2++) t2.push(e2[n2]);
        return t2;
      }
      function f(e2) {
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document,
          n2 = e2 instanceof HTMLCollection || e2 instanceof NodeList;
        return n2 ? u(e2) : e2 instanceof Element ? [e2] : u(t2.querySelectorAll(e2));
      }
      var l = Object.freeze({
          __proto__: null,
          tag: r,
          styles: i,
          edit: a,
          isSelfTag: s,
          offset: c,
          elementToArray: f
        }),
        p = {
          background: "rgb(150,150,150)",
          opacity: 0.5,
          zIndex: 99,
          duration: 700,
          timing: "ease",
          outDuration: 800
        },
        d = r,
        h = a,
        g = c,
        b = f,
        y = s,
        m = i;
      function v() {
        var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "_",
          t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o2 = t2 = n(n({}, p), t2),
          r2 = o2.background,
          i2 = o2.opacity,
          a2 = o2.zIndex,
          s2 = o2.duration,
          c2 = o2.timing,
          u2 = o2.height,
          f2 = o2.width,
          l2 = o2.triggerOnChild,
          v2 = l2 === void 0 || l2,
          w = o2.triggerExcept,
          O = w === void 0 ? "_" : w,
          _ = o2.outDuration,
          P = ("ontouchstart" in window);
        function j(e3) {
          if (!(b(O, this).indexOf(e3.target) > -1) && (e3.target === this || v2)) {
            var t3, n2;
            m(this, "position").toLowerCase() === "static" && (this.style.position = "relative");
            var o3 = g(this).top,
              l3 = g(this).left;
            try {
              if (e3.touches[1]) return;
              n2 = e3.touches[0].pageX - l3, t3 = e3.touches[0].pageY - o3;
            } catch (r3) {
              n2 = e3.pageX - l3, t3 = e3.pageY - o3;
            }
            var p2 = this.offsetWidth,
              y2 = this.offsetHeight,
              w2 = d("div", {
                appendTo: this,
                className: "ripleParent__",
                style: {
                  zIndex: a2,
                  height: y2 + "px",
                  width: p2 + "px",
                  borderRadius: m(this, "borderRadius"),
                  clipPath: m(this, "clipPath"),
                  transition: "opacity ".concat(_, "ms linear")
                }
              });
            d("div", {
              appendTo: w2,
              className: "riple__",
              style: {
                top: t3 + "px",
                left: n2 + "px",
                opacity: i2,
                width: f2 || p2 * Math.PI + "px",
                height: u2 || p2 * Math.PI + "px",
                background: r2,
                animation: "ripple__ ".concat(s2, "ms ").concat(c2, " both")
              }
            });
            var j2 = P ? "touchend touchcancel" : "mouseleave mouseup";
            h(this).on(j2, function e4() {
              var t4 = this;
              w2.style.opacity = 0, setTimeout(function () {
                return t4.removeChild(w2);
              }, _), h(this).off(j2, e4);
            });
          }
        }
        var x = b(e2),
          C = P ? "touchstart" : "mousedown";
        return x.forEach(function (e3) {
          if (y(e3)) return console.error("Ripple is not allowed on self closing tag you need to wrap it");
          h(e3).on(C, j);
        }), {
          destroy: function () {
            x.forEach(function (e3) {
              return h(e3).off(C, j);
            });
          }
        };
      }
      return d("style", {
        innerHTML: ".ripleParent__{pointer-events:none;overflow:hidden;background:transparent;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.riple__{border-radius:50%;position: absolute;will-change:transform; pointer-events:none;}@keyframes ripple__{0%{transform: translate(-50%,-50%) scale(0);}100%{transform: translate(-50%,-50%) scale(1);}}",
        appendTo: document.head
      }), v.utils = l, v;
    });
  }
});

// .beyond/uimport/ripple-effects.1.0.2.js
var ripple_effects_1_0_2_exports = {};
__export(ripple_effects_1_0_2_exports, {
  default: () => ripple_effects_1_0_2_default
});
__reExport(ripple_effects_1_0_2_exports, __toESM(require_ripple_umd_min()));
var import_ripple_effects = __toESM(require_ripple_umd_min());
var ripple_effects_1_0_2_default = import_ripple_effects.default;
module.exports = __toCommonJS(ripple_effects_1_0_2_exports);
/*!
 * ripple-effects
 * customizable ripple effect with one line of code
 *
 * @version v1.0.2
 * @author Cris Fandiño <sircnujnuj@gmail.com>
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yaXBwbGUtZWZmZWN0cy9kaXN0L3JpcHBsZS51bWQubWluLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3JpcHBsZS1lZmZlY3RzLjEuMC4yLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWxUaGlzIiwic2VsZiIsInJpcHBsZSIsImUyIiwidDIiLCJuMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibzIiLCJmaWx0ZXIiLCJ0MyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIyIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGVzdCIsInJlcGxhY2UiLCJlMyIsInRvTG93ZXJDYXNlIiwiRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEyIiwic3Vic3RyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJhcHBlbmRDaGlsZCIsImRhdGFzZXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm8iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiciIsIm9uIiwic3BsaXQiLCJ0NCIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleE9mIiwidGFnTmFtZSIsInRvcCIsImxlZnQiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJIVE1MQ29sbGVjdGlvbiIsIk5vZGVMaXN0IiwidSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsIiwiZnJlZXplIiwiX19wcm90b19fIiwidGFnIiwic3R5bGVzIiwiZWRpdCIsImEiLCJpc1NlbGZUYWciLCJzIiwib2Zmc2V0IiwiYyIsImVsZW1lbnRUb0FycmF5IiwiZiIsInAiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsInpJbmRleCIsImR1cmF0aW9uIiwidGltaW5nIiwib3V0RHVyYXRpb24iLCJkIiwiaCIsImciLCJiIiwieSIsIm0iLCJuIiwiaTIiLCJzMiIsImMyIiwidTIiLCJoZWlnaHQiLCJmMiIsIndpZHRoIiwibDIiLCJ0cmlnZ2VyT25DaGlsZCIsInYyIiwidyIsInRyaWdnZXJFeGNlcHQiLCJPIiwiXyIsIlAiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsIm8zIiwibDMiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInIzIiwicDIiLCJvZmZzZXRXaWR0aCIsInkyIiwib2Zmc2V0SGVpZ2h0IiwidzIiLCJhcHBlbmRUbyIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsImNvbmNhdCIsIk1hdGgiLCJQSSIsImFuaW1hdGlvbiIsImoyIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiZTQiLCJ4IiwiQyIsImNvbnNvbGUiLCJlcnJvciIsImoiLCJkZXN0cm95IiwiaW5uZXJIVE1MIiwiaGVhZCIsInYiLCJ1dGlscyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwicmlwcGxlX2VmZmVjdHNfMV8wXzJfZGVmYXVsdCIsImltcG9ydF9yaXBwbGVfZWZmZWN0cyJdLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9kb2N1bWVudGF0aW9uL291dCJ9