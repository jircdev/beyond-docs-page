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
}), mod);

// node_modules/ripple-effects/dist/ripple.umd.min.js
var require_ripple_umd_min = __commonJS({
  "node_modules/ripple-effects/dist/ripple.umd.min.js"(exports, module2) {
    !function (e, t) {
      "object" == typeof exports && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).ripple = t();
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
          var r2 = null != arguments[o2] ? arguments[o2] : {};
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
        if ("string" == typeof t2) return getComputedStyle(e2).getPropertyValue(o(t2));
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
        return t2 = (e2 && e2.ownerDocument).documentElement, void 0 !== e2.getBoundingClientRect && (n2 = e2.getBoundingClientRect()), {
          top: n2.top + window.pageYOffset - t2.clientTop,
          left: n2.left + window.pageXOffset - t2.clientLeft
        };
      }
      function u(e2) {
        for (var t2 = [], n2 = 0; n2 < e2.length; n2++) t2.push(e2[n2]);
        return t2;
      }
      function f(e2) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
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
        var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "_",
          t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o2 = t2 = n(n({}, p), t2),
          r2 = o2.background,
          i2 = o2.opacity,
          a2 = o2.zIndex,
          s2 = o2.duration,
          c2 = o2.timing,
          u2 = o2.height,
          f2 = o2.width,
          l2 = o2.triggerOnChild,
          v2 = void 0 === l2 || l2,
          w = o2.triggerExcept,
          O = void 0 === w ? "_" : w,
          _ = o2.outDuration,
          P = ("ontouchstart" in window);
        function j(e3) {
          if (!(b(O, this).indexOf(e3.target) > -1) && (e3.target === this || v2)) {
            var t3, n2;
            "static" === m(this, "position").toLowerCase() && (this.style.position = "relative");
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
module.exports = __toCommonJS(ripple_effects_1_0_2_exports);
__reExport(ripple_effects_1_0_2_exports, __toESM(require_ripple_umd_min()), module.exports);
var import_ripple_effects = __toESM(require_ripple_umd_min());
var ripple_effects_1_0_2_default = import_ripple_effects.default;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yaXBwbGUtZWZmZWN0cy9kaXN0L3JpcHBsZS51bWQubWluLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3JpcHBsZS1lZmZlY3RzLjEuMC4yLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImdsb2JhbFRoaXMiLCJzZWxmIiwicmlwcGxlIiwibiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJmb3JFYWNoIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJ0ZXN0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJzdWJzdHIiLCJhZGRFdmVudExpc3RlbmVyIiwiaSIsImFwcGVuZENoaWxkIiwiZGF0YXNldCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIm9uIiwic3BsaXQiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicyIsImluZGV4T2YiLCJ0YWdOYW1lIiwiYyIsInRvcCIsImxlZnQiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJ1IiwiZiIsIkhUTUxDb2xsZWN0aW9uIiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibCIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsInRhZyIsInN0eWxlcyIsImVkaXQiLCJpc1NlbGZUYWciLCJvZmZzZXQiLCJlbGVtZW50VG9BcnJheSIsInAiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsInpJbmRleCIsImR1cmF0aW9uIiwidGltaW5nIiwib3V0RHVyYXRpb24iLCJkIiwiaCIsImciLCJiIiwieSIsIm0iLCJ2IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0cmlnZ2VyT25DaGlsZCIsInciLCJ0cmlnZ2VyRXhjZXB0IiwiTyIsIl8iLCJQIiwiaiIsInRhcmdldCIsInBvc2l0aW9uIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImFwcGVuZFRvIiwiY2xhc3NOYW1lIiwiYm9yZGVyUmFkaXVzIiwiY2xpcFBhdGgiLCJ0cmFuc2l0aW9uIiwiY29uY2F0IiwiTWF0aCIsIlBJIiwiYW5pbWF0aW9uIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwieCIsIkMiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXN0cm95IiwiaW5uZXJIVE1MIiwiaGVhZCIsInV0aWxzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJyaXBwbGVfZWZmZWN0c18xXzBfMl9kZWZhdWx0IiwiaW1wb3J0X3JpcHBsZV9lZmZlY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBT0EsQ0FBQyxVQUFTQSxHQUFFQyxHQUFFO01BQUMsWUFBVSxPQUFPQyxXQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBT0QsVUFBUUQsR0FBRSxHQUFFLGNBQVksT0FBT0csVUFBUUEsT0FBT0MsTUFBSUQsT0FBT0gsQ0FBQyxLQUFHRCxJQUFFLGVBQWEsT0FBT00sYUFBV0EsYUFBV04sS0FBR08sTUFBTUMsU0FBT1AsR0FBRTtJQUFDLEVBQUVDLFNBQU0sWUFBVTtNQUFDOztNQUFh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