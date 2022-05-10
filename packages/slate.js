define(["is-plain-object"], (dep_0) => {
const dependencies = new Map([['is-plain-object', dep_0]]);
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
}), mod); // .beyond/uimport/temp/slate/0.78.0.js


var __exports = {};

__export(__exports, {
  Editor: () => Editor,
  Element: () => Element,
  Location: () => Location,
  Node: () => Node,
  Operation: () => Operation,
  Path: () => Path,
  PathRef: () => PathRef,
  Point: () => Point,
  PointRef: () => PointRef,
  Range: () => Range,
  RangeRef: () => RangeRef,
  Span: () => Span,
  Text: () => Text,
  Transforms: () => Transforms,
  createEditor: () => createEditor
});

module.exports = __toCommonJS(__exports); // node_modules/immer/dist/immer.esm.js

function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];

  if (true) {
    var i2 = Y[n2],
        o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }

  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function (n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function r(n2) {
  return !!n2 && !!n2[Q];
}

function t(n2) {
  return !!n2 && (function (n3) {
    if (!n3 || typeof n3 != "object") return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null) return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}

function e(t2) {
  return r(t2) || n(23, t2), t2[Q].t;
}

function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function (e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function (t3, e2) {
    return r2(e2, t3, n2);
  });
}

function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}

function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}

function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}

function f(n2, r2, t2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}

function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}

function s(n2) {
  return X && n2 instanceof Map;
}

function v(n2) {
  return q && n2 instanceof Set;
}

function p(n2) {
  return n2.o || n2.t;
}

function l(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];

  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2],
        o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = {
      configurable: true,
      writable: true,
      enumerable: o2.enumerable,
      value: n2[i2]
    });
  }

  return Object.create(Object.getPrototypeOf(n2), r2);
}

function d(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function (n3, r2) {
    return d(r2, true);
  }, true), n2);
}

function h() {
  n(2);
}

function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}

function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}

function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}

function _() {
  return U || n(0), U;
}

function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}

function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}

function g(n2) {
  n2 === U && (U = n2.l);
}

function w(n2) {
  return U = {
    p: [],
    l: U,
    h: n2,
    m: true,
    _: 0
  };
}

function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}

function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0],
      o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}

function M(n2, r2, t2) {
  if (y(r2)) return r2;
  var e2 = r2[Q];
  if (!e2) return i(r2, function (i2, o3) {
    return A(n2, e2, r2, i2, o3, t2);
  }, true), r2;
  if (e2.A !== n2) return r2;
  if (!e2.P) return x(n2, e2.t, true), e2.t;

  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function (r3, i2) {
      return A(n2, e2, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }

  return e2.o;
}

function A(e2, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), r(c2)) {
    var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2)) return;
    e2.m = false;
  }

  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1) return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}

function x(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}

function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}

function I(n2, r2) {
  if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2;) {
    var e2 = Object.getOwnPropertyDescriptor(t2, r2);
    if (e2) return e2;
    t2 = Object.getPrototypeOf(t2);
  }
}

function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}

function E(n2) {
  n2.o || (n2.o = l(n2.t));
}

function R(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function (n3, r3) {
    var t3 = Array.isArray(n3),
        e3 = {
      i: t3 ? 1 : 0,
      A: r3 ? r3.A : _(),
      P: false,
      I: false,
      D: {},
      l: r3,
      t: n3,
      k: null,
      o: null,
      j: null,
      C: false
    },
        i2 = e3,
        o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2),
        a2 = u2.revoke,
        f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}

function D(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2)) return r2;
    var e3,
        u2 = r2[Q],
        c2 = o(r2);

    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = F(r2, c2), u2.I = false;
    } else e3 = F(r2, c2);

    return i(e3, function (r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}

function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);

    case 3:
      return Array.from(n2);
  }

  return l(n2);
}

function N() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = {
      configurable: true,
      enumerable: r2,
      get: function () {
        var r3 = this[Q];
        return f2(r3), en.get(r3, n2);
      },
      set: function (r3) {
        var t4 = this[Q];
        f2(t4), en.set(t4, n2, r3);
      }
    }, t3;
  }

  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P) switch (t3.i) {
        case 5:
          a2(t3) && k(t3);
          break;

        case 4:
          o2(t3) && k(t3);
      }
    }
  }

  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];

      if (o3 !== Q) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u(r2, o3)) return true;
        var f3 = t3[o3],
            s3 = f3 && f3[Q];
        if (s3 ? s3.t !== a3 : !c(f3, a3)) return true;
      }
    }

    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }

  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length) return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get) return true;

    for (var e3 = 0; e3 < r2.length; e3++) if (!r2.hasOwnProperty(e3)) return true;

    return false;
  }

  function f2(r2) {
    r2.O && n(3, JSON.stringify(p(r2)));
  }

  var s2 = {};
  m("ES5", {
    J: function (n2, r2) {
      var e3 = Array.isArray(n2),
          i2 = function (n3, r3) {
        if (n3) {
          for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++) Object.defineProperty(e4, "" + i3, t2(i3, true));

          return e4;
        }

        var o4 = rn(r3);
        delete o4[Q];

        for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
          var f3 = u2[a3];
          o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
        }

        return Object.create(Object.getPrototypeOf(r3), o4);
      }(e3, n2),
          o3 = {
        i: e3 ? 5 : 4,
        A: r2 ? r2.A : _(),
        P: false,
        I: false,
        D: {},
        l: r2,
        t: n2,
        k: i2,
        o: null,
        O: false,
        C: false
      };

      return Object.defineProperty(i2, Q, {
        value: o3,
        writable: true
      }), i2;
    },
    S: function (n2, t3, o3) {
      o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
        if (r2 && typeof r2 == "object") {
          var t4 = r2[Q];

          if (t4) {
            var e3 = t4.t,
                o4 = t4.k,
                f3 = t4.D,
                c2 = t4.i;
            if (c2 === 4) i(o4, function (r3) {
              r3 !== Q && (e3[r3] !== void 0 || u(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k(t4)));
            }), i(e3, function (n4) {
              o4[n4] !== void 0 || u(o4, n4) || (f3[n4] = false, k(t4));
            });else if (c2 === 5) {
              if (a2(t4) && (k(t4), f3.length = true), o4.length < e3.length) for (var s3 = o4.length; s3 < e3.length; s3++) f3[s3] = false;else for (var v2 = e3.length; v2 < o4.length; v2++) f3[v2] = true;

              for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++) o4.hasOwnProperty(l2) || (f3[l2] = true), f3[l2] === void 0 && n3(o4[l2]);
            }
          }
        }
      }(n2.p[0]), e2(n2.p));
    },
    K: function (n2) {
      return n2.i === 4 ? o2(n2) : a2(n2);
    }
  });
}

function T() {
  function e2(n2) {
    if (!t(n2)) return n2;
    if (Array.isArray(n2)) return n2.map(e2);
    if (s(n2)) return new Map(Array.from(n2.entries()).map(function (n3) {
      return [n3[0], e2(n3[1])];
    }));
    if (v(n2)) return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));

    for (var i2 in n2) r2[i2] = e2(n2[i2]);

    return u(n2, L) && (r2[L] = n2[L]), r2;
  }

  function f2(n2) {
    return r(n2) ? e2(n2) : n2;
  }

  var c2 = "add";
  m("Patches", {
    $: function (r2, t2) {
      return t2.forEach(function (t3) {
        for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
          var v2 = o(f3),
              p2 = "" + i2[s2];
          v2 !== 0 && v2 !== 1 || p2 !== "__proto__" && p2 !== "constructor" || n(24), typeof f3 == "function" && p2 === "prototype" && n(24), typeof (f3 = a(f3, p2)) != "object" && n(15, i2.join("/"));
        }

        var l2 = o(f3),
            d2 = e2(t3.value),
            h2 = i2[i2.length - 1];

        switch (u2) {
          case "replace":
            switch (l2) {
              case 2:
                return f3.set(h2, d2);

              case 3:
                n(16);

              default:
                return f3[h2] = d2;
            }

          case c2:
            switch (l2) {
              case 1:
                return h2 === "-" ? f3.push(d2) : f3.splice(h2, 0, d2);

              case 2:
                return f3.set(h2, d2);

              case 3:
                return f3.add(d2);

              default:
                return f3[h2] = d2;
            }

          case "remove":
            switch (l2) {
              case 1:
                return f3.splice(h2, 1);

              case 2:
                return f3.delete(h2);

              case 3:
                return f3.delete(t3.value);

              default:
                return delete f3[h2];
            }

          default:
            n(17, u2);
        }
      }), r2;
    },
    R: function (n2, r2, t2, e3) {
      switch (n2.i) {
        case 0:
        case 4:
        case 2:
          return function (n3, r3, t3, e4) {
            var o2 = n3.t,
                s2 = n3.o;
            i(n3.D, function (n4, i2) {
              var v2 = a(o2, n4),
                  p2 = a(s2, n4),
                  l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";

              if (v2 !== p2 || l2 !== "replace") {
                var d2 = r3.concat(n4);
                t3.push(l2 === "remove" ? {
                  op: l2,
                  path: d2
                } : {
                  op: l2,
                  path: d2,
                  value: p2
                }), e4.push(l2 === c2 ? {
                  op: "remove",
                  path: d2
                } : l2 === "remove" ? {
                  op: c2,
                  path: d2,
                  value: f2(v2)
                } : {
                  op: "replace",
                  path: d2,
                  value: f2(v2)
                });
              }
            });
          }(n2, r2, t2, e3);

        case 5:
        case 1:
          return function (n3, r3, t3, e4) {
            var i2 = n3.t,
                o2 = n3.D,
                u2 = n3.o;

            if (u2.length < i2.length) {
              var a2 = [u2, i2];
              i2 = a2[0], u2 = a2[1];
              var s2 = [e4, t3];
              t3 = s2[0], e4 = s2[1];
            }

            for (var v2 = 0; v2 < i2.length; v2++) if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = r3.concat([v2]);
              t3.push({
                op: "replace",
                path: p2,
                value: f2(u2[v2])
              }), e4.push({
                op: "replace",
                path: p2,
                value: f2(i2[v2])
              });
            }

            for (var l2 = i2.length; l2 < u2.length; l2++) {
              var d2 = r3.concat([l2]);
              t3.push({
                op: c2,
                path: d2,
                value: f2(u2[l2])
              });
            }

            i2.length < u2.length && e4.push({
              op: "replace",
              path: r3.concat(["length"]),
              value: i2.length
            });
          }(n2, r2, t2, e3);

        case 3:
          return function (n3, r3, t3, e4) {
            var i2 = n3.t,
                o2 = n3.o,
                u2 = 0;
            i2.forEach(function (n4) {
              if (!o2.has(n4)) {
                var i3 = r3.concat([u2]);
                t3.push({
                  op: "remove",
                  path: i3,
                  value: n4
                }), e4.unshift({
                  op: c2,
                  path: i3,
                  value: n4
                });
              }

              u2++;
            }), u2 = 0, o2.forEach(function (n4) {
              if (!i2.has(n4)) {
                var o3 = r3.concat([u2]);
                t3.push({
                  op: c2,
                  path: o3,
                  value: n4
                }), e4.unshift({
                  op: "remove",
                  path: o3,
                  value: n4
                });
              }

              u2++;
            });
          }(n2, r2, t2, e3);
      }
    },
    M: function (n2, r2, t2, e3) {
      t2.push({
        op: "replace",
        path: [],
        value: r2 === H ? void 0 : r2
      }), e3.push({
        op: "replace",
        path: [],
        value: n2
      });
    }
  });
}

function C() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }

    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }

  function e2(n2) {
    n2.o || (n2.D = /* @__PURE__ */new Map(), n2.o = new Map(n2.t));
  }

  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */new Set(), n2.t.forEach(function (r3) {
      if (t(r3)) {
        var e3 = R(n2.A.h, r3, n2);
        n2.p.set(r3, e3), n2.o.add(e3);
      } else n2.o.add(r3);
    }));
  }

  function u2(r3) {
    r3.O && n(3, JSON.stringify(p(r3)));
  }

  var a2 = function (n2, r3) {
    return (a2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n3, r4) {
      n3.__proto__ = r4;
    } || function (n3, r4) {
      for (var t2 in r4) r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  },
      f2 = function () {
    function n2(n3, r3) {
      return this[Q] = {
        i: 2,
        l: r3,
        A: r3 ? r3.A : _(),
        P: false,
        I: false,
        o: void 0,
        D: void 0,
        t: n3,
        k: this,
        C: false,
        O: false
      }, this;
    }

    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o3.has = function (n3) {
      return p(this[Q]).has(n3);
    }, o3.set = function (n3, r3) {
      var t2 = this[Q];
      return u2(t2), p(t2).has(n3) && p(t2).get(n3) === r3 || (e2(t2), k(t2), t2.D.set(n3, true), t2.o.set(n3, r3), t2.D.set(n3, true)), this;
    }, o3.delete = function (n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q];
      return u2(r3), e2(r3), k(r3), r3.t.has(n3) ? r3.D.set(n3, false) : r3.D.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function () {
      var n3 = this[Q];
      u2(n3), p(n3).size && (e2(n3), k(n3), n3.D = /* @__PURE__ */new Map(), i(n3.t, function (r3) {
        n3.D.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function (n3, r3) {
      var t2 = this;
      p(this[Q]).forEach(function (e3, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function (n3) {
      var r3 = this[Q];
      u2(r3);
      var i2 = p(r3).get(n3);
      if (r3.I || !t(i2)) return i2;
      if (i2 !== r3.t.get(n3)) return i2;
      var o4 = R(r3.A.h, i2, r3);
      return e2(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function () {
      return p(this[Q]).keys();
    }, o3.values = function () {
      var n3,
          r3 = this,
          t2 = this.keys();
      return (n3 = {})[V] = function () {
        return r3.values();
      }, n3.next = function () {
        var n4 = t2.next();
        return n4.done ? n4 : {
          done: false,
          value: r3.get(n4.value)
        };
      }, n3;
    }, o3.entries = function () {
      var n3,
          r3 = this,
          t2 = this.keys();
      return (n3 = {})[V] = function () {
        return r3.entries();
      }, n3.next = function () {
        var n4 = t2.next();
        if (n4.done) return n4;
        var e3 = r3.get(n4.value);
        return {
          done: false,
          value: [n4.value, e3]
        };
      }, n3;
    }, o3[V] = function () {
      return this.entries();
    }, n2;
  }(),
      c2 = function () {
    function n2(n3, r3) {
      return this[Q] = {
        i: 3,
        l: r3,
        A: r3 ? r3.A : _(),
        P: false,
        I: false,
        o: void 0,
        t: n3,
        k: this,
        p: /* @__PURE__ */new Map(),
        O: false,
        C: false
      }, this;
    }

    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), t2.has = function (n3) {
      var r3 = this[Q];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function (n3) {
      var r3 = this[Q];
      return u2(r3), this.has(n3) || (o2(r3), k(r3), r3.o.add(n3)), this;
    }, t2.delete = function (n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q];
      return u2(r3), o2(r3), k(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function () {
      var n3 = this[Q];
      u2(n3), p(n3).size && (o2(n3), k(n3), n3.o.clear());
    }, t2.values = function () {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function () {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function () {
      return this.values();
    }, t2[V] = function () {
      return this.values();
    }, t2.forEach = function (n3, r3) {
      for (var t3 = this.values(), e3 = t3.next(); !e3.done;) n3.call(r3, e3.value, e3.value, this), e3 = t3.next();
    }, n2;
  }();

  m("MapSet", {
    N: function (n2, r3) {
      return new f2(n2, r3);
    },
    T: function (n2, r3) {
      return new c2(n2, r3);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n2) {
  return n2;
}

function $(n2) {
  return n2;
}

var G,
    U,
    W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol",
    X = typeof Map != "undefined",
    q = typeof Set != "undefined",
    B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined",
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n2) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n2) {
    return "Cannot apply patch, path doesn't resolve: " + n2;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n2) {
    return "Unsupported patch operation: " + n2;
  },
  18: function (n2) {
    return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n2) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
  },
  22: function (n2) {
    return "'current' expects a draft, got: " + n2;
  },
  23: function (n2) {
    return "'original' expects a draft, got: " + n2;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function (n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames,
    rn = Object.getOwnPropertyDescriptors || function (n2) {
  var r2 = {};
  return nn(n2).forEach(function (t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
},
    tn = {},
    en = {
  get: function (n2, r2) {
    if (r2 === Q) return n2;
    var e2 = p(n2);
    if (!u(e2, r2)) return function (n3, r3, t2) {
      var e3,
          i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
    var i2 = e2[r2];
    return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
  },
  has: function (n2, r2) {
    return r2 in p(n2);
  },
  ownKeys: function (n2) {
    return Reflect.ownKeys(p(n2));
  },
  set: function (n2, r2, t2) {
    var e2 = I(p(n2), r2);
    if (e2 == null ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;

    if (!n2.P) {
      var i2 = z(p(n2), r2),
          o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.D[r2] = false, true;
      if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2))) return true;
      E(n2), k(n2);
    }

    return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
  },
  deleteProperty: function (n2, r2) {
    return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  },
  getOwnPropertyDescriptor: function (n2, r2) {
    var t2 = p(n2),
        e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e2 ? {
      writable: true,
      configurable: n2.i !== 1 || r2 !== "length",
      enumerable: e2.enumerable,
      value: t2[r2]
    } : e2;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n2) {
    return Object.getPrototypeOf(n2.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

i(en, function (n2, r2) {
  on[n2] = function () {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function (r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function (r2, t2, e2) {
  return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e2, r2[0]);
};

var un = function () {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function (r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function (n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);

          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];

          return a2.produce(n2, function (n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }

      var f2;

      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e3),
            s2 = R(e3, r3, void 0),
            v2 = true;

        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }

        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function (n2) {
          return j(c2, o2), P(n2, c2);
        }, function (n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }

      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e3.F && d(f2, true), o2) {
          var p2 = [],
              l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }

        return f2;
      }

      n(21, r3);
    }, this.produceWithPatches = function (n2, r3) {
      if (typeof n2 == "function") return function (r4) {
        for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];

        return e3.produceWithPatches(r4, function (r5) {
          return n2.apply(void 0, [r5].concat(i4));
        });
      };
      var t2,
          i3,
          o2 = e3.produce(n2, r3, function (n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function (n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }

  var i2 = e2.prototype;
  return i2.createDraft = function (e3) {
    t(e3) || n(8), r(e3) && (e3 = D(e3));
    var i3 = w(this),
        o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function (r2, t2) {
    var e3 = r2 && r2[Q];
    e3 && e3.C || n(9), e3.I && n(10);
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function (n2) {
    this.F = n2;
  }, i2.setUseProxies = function (r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function (n2, t2) {
    var e3;

    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];

      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }

    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function (n3) {
      return o2(n3, t2);
    });
  }, e2;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

var immer_esm_default = fn; // node_modules/slate/dist/index.es.js

var import_is_plain_object = require("is-plain-object");

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

var DIRTY_PATHS = /* @__PURE__ */new WeakMap();
var DIRTY_PATH_KEYS = /* @__PURE__ */new WeakMap();
var FLUSHING = /* @__PURE__ */new WeakMap();
var NORMALIZING = /* @__PURE__ */new WeakMap();
var PATH_REFS = /* @__PURE__ */new WeakMap();
var POINT_REFS = /* @__PURE__ */new WeakMap();
var RANGE_REFS = /* @__PURE__ */new WeakMap();

function ownKeys$9(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$9(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$9(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$9(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: () => false,
    isVoid: () => false,
    onChange: () => {},
    apply: op => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }

      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }

      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || /* @__PURE__ */new Set();
      var dirtyPaths;
      var dirtyPathKeys;

      var add = path2 => {
        if (path2) {
          var key = path2.join(",");

          if (!dirtyPathKeys.has(key)) {
            dirtyPathKeys.add(key);
            dirtyPaths.push(path2);
          }
        }
      };

      if (Path.operationCanTransformPath(op)) {
        dirtyPaths = [];
        dirtyPathKeys = /* @__PURE__ */new Set();

        for (var path of oldDirtyPaths) {
          var newPath = Path.transform(path, op);
          add(newPath);
        }
      } else {
        dirtyPaths = oldDirtyPaths;
        dirtyPathKeys = oldDirtyPathKeys;
      }

      var newDirtyPaths = getDirtyPaths(op);

      for (var _path of newDirtyPaths) {
        add(_path);
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor);

      if (op.type === "set_selection") {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
            [key]: value
          });

          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: direction => {
      var {
        selection
      } = editor;

      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor, {
          reverse: direction === "backward"
        });
      }
    },
    getFragment: () => {
      var {
        selection
      } = editor;

      if (selection) {
        return Node.fragment(editor, selection);
      }

      return [];
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertSoftBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: fragment => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: node => {
      Transforms.insertNodes(editor, node);
    },
    insertText: text => {
      var {
        selection,
        marks
      } = editor;

      if (selection) {
        if (marks) {
          var node = _objectSpread$9({
            text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: entry => {
      var [node, path] = entry;

      if (Text.isText(node)) {
        return;
      }

      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ""
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      }

      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0]));
      var n2 = 0;

      for (var i2 = 0; i2 < node.children.length; i2++, n2++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i2];
        var prev = currentNode.children[n2 - 1];
        var isLast = i2 === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child);

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n2),
            voids: true
          });
          n2--;
        } else if (Element.isElement(_child)) {
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n2),
                voids: true
              });
              n2++;
            } else if (isLast) {
              var _newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n2 + 1),
                voids: true
              });
              n2++;
            }
          }
        } else {
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n2),
                voids: true
              });
              n2--;
            } else if (prev.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n2 - 1),
                voids: true
              });
              n2--;
            } else if (_child.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n2),
                voids: true
              });
              n2--;
            }
          }
        }
      }
    },
    removeMark: key => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    }
  };
  return editor;
};

var getDirtyPaths = op => {
  switch (op.type) {
    case "insert_text":
    case "remove_text":
    case "set_node":
      {
        var {
          path
        } = op;
        return Path.levels(path);
      }

    case "insert_node":
      {
        var {
          node,
          path: _path2
        } = op;
        var levels = Path.levels(_path2);
        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), _ref3 => {
          var [, p3] = _ref3;
          return _path2.concat(p3);
        });
        return [...levels, ...descendants];
      }

    case "merge_node":
      {
        var {
          path: _path3
        } = op;
        var ancestors = Path.ancestors(_path3);
        var previousPath = Path.previous(_path3);
        return [...ancestors, previousPath];
      }

    case "move_node":
      {
        var {
          path: _path4,
          newPath
        } = op;

        if (Path.equals(_path4, newPath)) {
          return [];
        }

        var oldAncestors = [];
        var newAncestors = [];

        for (var ancestor of Path.ancestors(_path4)) {
          var p2 = Path.transform(ancestor, op);
          oldAncestors.push(p2);
        }

        for (var _ancestor of Path.ancestors(newPath)) {
          var _p = Path.transform(_ancestor, op);

          newAncestors.push(_p);
        }

        var newParent = newAncestors[newAncestors.length - 1];
        var newIndex = newPath[newPath.length - 1];
        var resultPath = newParent.concat(newIndex);
        return [...oldAncestors, ...newAncestors, resultPath];
      }

    case "remove_node":
      {
        var {
          path: _path5
        } = op;

        var _ancestors = Path.ancestors(_path5);

        return [..._ancestors];
      }

    case "split_node":
      {
        var {
          path: _path6
        } = op;

        var _levels = Path.levels(_path6);

        var nextPath = Path.next(_path6);
        return [..._levels, nextPath];
      }

    default:
      {
        return [];
      }
  }
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;

  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i2;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var getCharacterDistance = function getCharacterDistance2(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0;
  var gb11 = null;
  var gb12Or13 = null;

  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code) break;
    var type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];

    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }

      if (!gb11) break;
    }

    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }

      if (!gb12Or13) break;
    }

    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }

    distance += char.length;
  }

  return distance || 1;
};

var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;

var getWordDistance = function getWordDistance2(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dist = 0;
  var started = false;

  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);

    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }

    text = remaining;
  }

  return dist;
};

var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }

  return [str.slice(0, dist), str.slice(dist)];
};

var isWordCharacter = function isWordCharacter2(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;

  if (SPACE.test(char)) {
    return false;
  }

  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);

    if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }

  if (PUNCTUATION.test(char)) {
    return false;
  }

  return true;
};

var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
  var end = str.length - 1;

  for (var i2 = 0; i2 < str.length; i2++) {
    var char1 = str.charAt(end - i2);

    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i2 - 1);

      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i2++;
        continue;
      }
    }

    yield char1;
  }
};

var isHighSurrogate = charCode => {
  return charCode >= 55296 && charCode <= 56319;
};

var isLowSurrogate = charCode => {
  return charCode >= 56320 && charCode <= 57343;
};

var CodepointType;

(function (CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));

var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;

var getCodepointType = (char, code) => {
  var type = CodepointType.Any;

  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }

  if (code === 8205) {
    type |= CodepointType.ZWJ;
  }

  if (code >= 127462 && code <= 127487) {
    type |= CodepointType.RI;
  }

  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }

  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }

  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }

  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }

  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }

  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }

  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }

  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }

  return type;
};

function intersects(x2, y2) {
  return (x2 & y2) !== 0;
}

var NonBoundaryPairs = [[CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT], [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T], [CodepointType.LVT | CodepointType.T, CodepointType.T], [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ], [CodepointType.Any, CodepointType.SpacingMark], [CodepointType.Prepend, CodepointType.Any], [CodepointType.ZWJ, CodepointType.ExtPict], [CodepointType.RI, CodepointType.RI]];

function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex(r2 => intersects(left, r2[0]) && intersects(right, r2[1])) === -1;
}

var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;

var endsWithEmojiZWJ = str => {
  return str.search(endingEmojiZWJ) !== -1;
};

var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;

var endsWithOddNumberOfRIs = str => {
  var match = str.match(endingRIs);

  if (match === null) {
    return false;
  } else {
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};

var isElement = value => {
  return (0, import_is_plain_object.isPlainObject)(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};

var Element = {
  isAncestor(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && Node.isNodeList(value.children);
  },

  isElement,

  isElementList(value) {
    return Array.isArray(value) && value.every(val => Element.isElement(val));
  },

  isElementProps(props) {
    return props.children !== void 0;
  },

  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },

  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }

};
var _excluded$4 = ["text"],
    _excluded2$3 = ["text"];

function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$8(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$8(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var IS_EDITOR_CACHE = /* @__PURE__ */new WeakMap();
var Editor = {
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      voids = false,
      mode = "lowest",
      at = editor.selection,
      match
    } = options;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === "lowest";

    for (var [n2, p2] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n2) && !Path.equals(path, p2)) {
        return [n2, p2];
      }
    }
  },

  addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: "end"
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;

    for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d2 > distance) {
        break;
      }

      if (d2 !== 0) {
        target = p2;
      }

      d2++;
    }

    return target;
  },

  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: "start"
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;

    for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d2 > distance) {
        break;
      }

      if (d2 !== 0) {
        target = p2;
      }

      d2++;
    }

    return target;
  },

  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },

  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },

  deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      direction = "forward"
    } = options;
    editor.deleteFragment(direction);
  },

  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  end(editor, at) {
    return Editor.point(editor, at, {
      edge: "end"
    });
  },

  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "start"
    });
    return Editor.node(editor, path);
  },

  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  hasBlocks(editor, element) {
    return element.children.some(n2 => Editor.isBlock(editor, n2));
  },

  hasInlines(editor, element) {
    return element.children.some(n2 => Text.isText(n2) || Editor.isInline(editor, n2));
  },

  hasTexts(editor, element) {
    return element.children.every(n2 => Text.isText(n2));
  },

  insertBreak(editor) {
    editor.insertBreak();
  },

  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },

  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  insertNode(editor, node) {
    editor.insertNode(node);
  },

  insertText(editor, text) {
    editor.insertText(text);
  },

  isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  isEditor(value) {
    if (!(0, import_is_plain_object.isPlainObject)(value)) return false;
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

    if (cachedIsEditor !== void 0) {
      return cachedIsEditor;
    }

    var isEditor = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteBackward === "function" && typeof value.deleteForward === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isInline === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && (value.marks === null || (0, import_is_plain_object.isPlainObject)(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },

  isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === "" && !editor.isVoid(element);
  },

  isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === void 0 ? true : isNormalizing;
  },

  isStart(editor, point, at) {
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "end"
    });
    return Editor.node(editor, path);
  },

  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (match == null) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    for (var [n2, p2] of Node.levels(editor, path)) {
      if (!match(n2, p2)) {
        continue;
      }

      levels.push([n2, p2]);

      if (!voids && Editor.isVoid(editor, n2)) {
        break;
      }
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  marks(editor) {
    var {
      marks,
      selection
    } = editor;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text.isText
      });

      if (match) {
        var [_node] = match;

        var _rest = _objectWithoutProperties(_node, _excluded$4);

        return _rest;
      } else {
        return {};
      }
    }

    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node] = Editor.leaf(editor, path);

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: n2 => Editor.isBlock(editor, n2)
      });

      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;

        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }

    var rest = _objectWithoutProperties(node, _excluded2$3);

    return rest;
  },

  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointAfterLocation = Editor.after(editor, at, {
      voids
    });
    if (!pointAfterLocation) return;
    var [, to] = Editor.last(editor, []);
    var span = [pointAfterLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n2 => parent.children.includes(n2);
      } else {
        match = () => true;
      }
    }

    var [next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },

  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = "all",
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (!match) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: "start"
      });
      var last = Editor.path(editor, at, {
        edge: "end"
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: _ref => {
        var [n2] = _ref;
        return voids ? false : Editor.isVoid(editor, n2);
      }
    });
    var matches = [];
    var hit;

    for (var [node, path] of nodeEntries) {
      var isLower = hit && Path.compare(path, hit[1]) === 0;

      if (mode === "highest" && isLower) {
        continue;
      }

      if (!match(node, path)) {
        if (universal && !isLower && Text.isText(node)) {
          return;
        } else {
          continue;
        }
      }

      if (mode === "lowest" && isLower) {
        hit = [node, path];
        continue;
      }

      var emit = mode === "lowest" ? hit : [node, path];

      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }

      hit = [node, path];
    }

    if (mode === "lowest" && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    }

    if (universal) {
      yield* matches;
    }
  },

  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      force = false
    } = options;

    var getDirtyPaths2 = editor2 => {
      return DIRTY_PATHS.get(editor2) || [];
    };

    var getDirtyPathKeys = editor2 => {
      return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */new Set();
    };

    var popDirtyPath = editor2 => {
      var path = getDirtyPaths2(editor2).pop();
      var key = path.join(",");
      getDirtyPathKeys(editor2).delete(key);
      return path;
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), _ref2 => {
        var [, p2] = _ref2;
        return p2;
      });
      var allPathKeys = new Set(allPaths.map(p2 => p2.join(",")));
      DIRTY_PATHS.set(editor, allPaths);
      DIRTY_PATH_KEYS.set(editor, allPathKeys);
    }

    if (getDirtyPaths2(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, () => {
      for (var dirtyPath of getDirtyPaths2(editor)) {
        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          var [node, _2] = entry;

          if (Element.isElement(node) && node.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }

      var max = getDirtyPaths2(editor).length * 42;
      var m2 = 0;

      while (getDirtyPaths2(editor).length !== 0) {
        if (m2 > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var _dirtyPath = popDirtyPath(editor);

        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);

          editor.normalizeNode(_entry);
        }

        m2++;
      }
    });
  },

  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;

    if (Path.isPath(at)) {
      if (edge === "start") {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === "start") {
        at = Range.start(at);
      } else if (edge === "end") {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },

  hasPath(editor, path) {
    return Node.has(editor, path);
  },

  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: path,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = /* @__PURE__ */new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      edge = "start"
    } = options;

    if (Path.isPath(at)) {
      var path;

      if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path,
        offset: edge === "end" ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var [start, end] = Range.edges(at);
      return edge === "start" ? start : end;
    }

    return at;
  },

  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: point,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = /* @__PURE__ */new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = "offset",
      reverse = false,
      voids = false
    } = options;

    if (!at) {
      return;
    }

    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = "";
    var distance = 0;
    var leafTextRemaining = 0;
    var leafTextOffset = 0;

    for (var [node, path] of Editor.nodes(editor, {
      at,
      reverse,
      voids
    })) {
      if (Element.isElement(node)) {
        if (!voids && editor.isVoid(node)) {
          yield Editor.start(editor, path);
          isNewBlock = false;
          continue;
        }

        if (editor.isInline(node)) continue;

        if (Editor.hasInlines(editor, node)) {
          var e2 = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s2 = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s2,
            focus: e2
          }, {
            voids
          });
          isNewBlock = true;
        }
      }

      if (Text.isText(node)) {
        var isFirst = Path.equals(path, first.path);

        if (isFirst) {
          leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
          leafTextOffset = first.offset;
        } else {
          leafTextRemaining = node.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        }

        if (isFirst || isNewBlock || unit === "offset") {
          yield {
            path,
            offset: leafTextOffset
          };
          isNewBlock = false;
        }

        while (true) {
          if (distance === 0) {
            if (blockText === "") break;
            distance = calcDistance(blockText, unit, reverse);
            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          }

          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance;

          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          }

          distance = 0;
          yield {
            path,
            offset: leafTextOffset
          };
        }
      }
    }

    function calcDistance(text, unit2, reverse2) {
      if (unit2 === "character") {
        return getCharacterDistance(text, reverse2);
      } else if (unit2 === "word") {
        return getWordDistance(text, reverse2);
      } else if (unit2 === "line" || unit2 === "block") {
        return text.length;
      }

      return 1;
    }
  },

  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointBeforeLocation = Editor.before(editor, at, {
      voids
    });

    if (!pointBeforeLocation) {
      return;
    }

    var [, to] = Editor.first(editor, []);
    var span = [pointBeforeLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n2 => parent.children.includes(n2);
      } else {
        match = () => true;
      }
    }

    var [previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },

  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: range,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = /* @__PURE__ */new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  removeMark(editor, key) {
    editor.removeMark(key);
  },

  setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },

  start(editor, at) {
    return Editor.point(editor, at, {
      edge: "start"
    });
  },

  string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var text = "";

    for (var [node, path] of Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids
    })) {
      var t2 = node.text;

      if (Path.equals(path, end.path)) {
        t2 = t2.slice(0, end.offset);
      }

      if (Path.equals(path, start.path)) {
        t2 = t2.slice(start.offset);
      }

      text += t2;
    }

    return text;
  },

  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start, end] = Range.edges(range);

    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: n2 => Editor.isBlock(editor, n2)
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, start);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    for (var [node, path] of Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }

      if (node.text !== "" || Path.isBefore(path, blockPath)) {
        end = {
          path,
          offset: node.text.length
        };
        break;
      }
    }

    return {
      anchor: start,
      focus: end
    };
  },

  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: n2 => Editor.isVoid(editor, n2)
    }));
  },

  withoutNormalizing(editor, fn2) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn2();
    } finally {
      Editor.setNormalizing(editor, value);
    }

    Editor.normalize(editor);
  }

};
var Location = {
  isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }

};
var Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }

};
var _excluded$3 = ["children"],
    _excluded2$2 = ["text"];
var IS_NODE_LIST_CACHE = /* @__PURE__ */new WeakMap();
var Node = {
  ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
    }

    return node;
  },

  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

    for (var p2 of Path.ancestors(path, options)) {
      var n2 = Node.ancestor(root, p2);
      var entry = [n2, p2];
      yield entry;
    }
  },

  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
    }

    var c2 = root.children[index];

    if (c2 == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
    }

    return c2;
  },

  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  common(root, path, another) {
    var p2 = Path.common(path, another);
    var n2 = Node.get(root, p2);
    return [n2, p2];
  },

  descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
    }

    return node;
  },

  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        yield [node, path];
      }
    }
  },

  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Element.isElement(node)) {
        yield [node, path];
      }
    }
  },

  extractProps(node) {
    if (Element.isAncestor(node)) {
      var properties = _objectWithoutProperties(node, _excluded$3);

      return properties;
    } else {
      var properties = _objectWithoutProperties(node, _excluded2$2);

      return properties;
    }
  },

  first(root, path) {
    var p2 = path.slice();
    var n2 = Node.get(root, p2);

    while (n2) {
      if (Text.isText(n2) || n2.children.length === 0) {
        break;
      } else {
        n2 = n2.children[0];
        p2.push(0);
      }
    }

    return [n2, p2];
  },

  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
    }

    var newRoot = fn({
      children: root.children
    }, r2 => {
      var [start, end] = Range.edges(range);
      var nodeEntries = Node.nodes(r2, {
        reverse: true,
        pass: _ref => {
          var [, path2] = _ref;
          return !Range.includes(range, path2);
        }
      });

      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r2, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }

        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r2, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r2, path);

          _leaf.text = _leaf.text.slice(start.offset);
        }
      }

      if (Editor.isEditor(r2)) {
        r2.selection = null;
      }
    });
    return newRoot.children;
  },

  get(root, path) {
    var node = root;

    for (var i2 = 0; i2 < path.length; i2++) {
      var p2 = path[i2];

      if (Text.isText(node) || !node.children[p2]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
      }

      node = node.children[p2];
    }

    return node;
  },

  has(root, path) {
    var node = root;

    for (var i2 = 0; i2 < path.length; i2++) {
      var p2 = path[i2];

      if (Text.isText(node) || !node.children[p2]) {
        return false;
      }

      node = node.children[p2];
    }

    return true;
  },

  isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var cachedResult = IS_NODE_LIST_CACHE.get(value);

    if (cachedResult !== void 0) {
      return cachedResult;
    }

    var isNodeList = value.every(val => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },

  last(root, path) {
    var p2 = path.slice();
    var n2 = Node.get(root, p2);

    while (n2) {
      if (Text.isText(n2) || n2.children.length === 0) {
        break;
      } else {
        var i2 = n2.children.length - 1;
        n2 = n2.children[i2];
        p2.push(i2);
      }
    }

    return [n2, p2];
  },

  leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
    }

    return node;
  },

  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

    for (var p2 of Path.levels(path, options)) {
      var n2 = Node.get(root, p2);
      yield [n2, p2];
    }
  },

  matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },

  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = /* @__PURE__ */new Set();
    var p2 = [];
    var n2 = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p2, to) : Path.isAfter(p2, to))) {
        break;
      }

      if (!visited.has(n2)) {
        yield [n2, p2];
      }

      if (!visited.has(n2) && !Text.isText(n2) && n2.children.length !== 0 && (pass == null || pass([n2, p2]) === false)) {
        visited.add(n2);
        var nextIndex = reverse ? n2.children.length - 1 : 0;

        if (Path.isAncestor(p2, from)) {
          nextIndex = from[p2.length];
        }

        p2 = p2.concat(nextIndex);
        n2 = Node.get(root, p2);
        continue;
      }

      if (p2.length === 0) {
        break;
      }

      if (!reverse) {
        var newPath = Path.next(p2);

        if (Node.has(root, newPath)) {
          p2 = newPath;
          n2 = Node.get(root, p2);
          continue;
        }
      }

      if (reverse && p2[p2.length - 1] !== 0) {
        var _newPath = Path.previous(p2);

        p2 = _newPath;
        n2 = Node.get(root, p2);
        continue;
      }

      p2 = Path.parent(p2);
      n2 = Node.get(root, p2);
      visited.add(n2);
    }
  },

  parent(root, path) {
    var parentPath = Path.parent(path);
    var p2 = Node.get(root, parentPath);

    if (Text.isText(p2)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p2;
  },

  string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join("");
    }
  },

  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Text.isText(node)) {
        yield [node, path];
      }
    }
  }

};

function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$7(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$7(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },

  isOperation(value) {
    if (!(0, import_is_plain_object.isPlainObject)(value)) {
      return false;
    }

    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);

      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);

      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && (0, import_is_plain_object.isPlainObject)(value.properties);

      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);

      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);

      case "set_node":
        return Path.isPath(value.path) && (0, import_is_plain_object.isPlainObject)(value.properties) && (0, import_is_plain_object.isPlainObject)(value.newProperties);

      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || (0, import_is_plain_object.isPlainObject)(value.properties) && (0, import_is_plain_object.isPlainObject)(value.newProperties);

      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && (0, import_is_plain_object.isPlainObject)(value.properties);

      default:
        return false;
    }
  },

  isOperationList(value) {
    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
  },

  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },

  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },

  inverse(op) {
    switch (op.type) {
      case "insert_node":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "remove_node"
          });
        }

      case "insert_text":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "remove_text"
          });
        }

      case "merge_node":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "split_node",
            path: Path.previous(op.path)
          });
        }

      case "move_node":
        {
          var {
            newPath,
            path
          } = op;

          if (Path.equals(newPath, path)) {
            return op;
          }

          if (Path.isSibling(path, newPath)) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: newPath,
              newPath: path
            });
          }

          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case "remove_node":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "insert_node"
          });
        }

      case "remove_text":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "insert_text"
          });
        }

      case "set_node":
        {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case "set_selection":
        {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;

          if (_properties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case "split_node":
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "merge_node",
            path: Path.next(op.path)
          });
        }
    }
  }

};
var Path = {
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  common(path, another) {
    var common = [];

    for (var i2 = 0; i2 < path.length && i2 < another.length; i2++) {
      var av = path[i2];
      var bv = another[i2];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i2 = 0; i2 < min; i2++) {
      if (path[i2] < another[i2]) return -1;
      if (path[i2] > another[i2]) return 1;
    }

    return 0;
  },

  endsAfter(path, another) {
    var i2 = path.length - 1;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av > bv;
  },

  endsAt(path, another) {
    var i2 = path.length;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    return Path.equals(as, bs);
  },

  endsBefore(path, another) {
    var i2 = path.length - 1;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av < bv;
  },

  equals(path, another) {
    return path.length === another.length && path.every((n2, i2) => n2 === another[i2]);
  },

  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },

  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },

  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];

    for (var i2 = 0; i2 <= path.length; i2++) {
      list.push(path.slice(0, i2));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;

      default:
        return false;
    }
  },

  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(path, p2 => {
      var {
        affinity = "forward"
      } = options;

      if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
        return;
      }

      if (p2 === null) {
        return null;
      }

      switch (operation.type) {
        case "insert_node":
          {
            var {
              path: op
            } = operation;

            if (Path.equals(op, p2) || Path.endsBefore(op, p2) || Path.isAncestor(op, p2)) {
              p2[op.length - 1] += 1;
            }

            break;
          }

        case "remove_node":
          {
            var {
              path: _op
            } = operation;

            if (Path.equals(_op, p2) || Path.isAncestor(_op, p2)) {
              return null;
            } else if (Path.endsBefore(_op, p2)) {
              p2[_op.length - 1] -= 1;
            }

            break;
          }

        case "merge_node":
          {
            var {
              path: _op2,
              position
            } = operation;

            if (Path.equals(_op2, p2) || Path.endsBefore(_op2, p2)) {
              p2[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p2)) {
              p2[_op2.length - 1] -= 1;
              p2[_op2.length] += position;
            }

            break;
          }

        case "split_node":
          {
            var {
              path: _op3,
              position: _position
            } = operation;

            if (Path.equals(_op3, p2)) {
              if (affinity === "forward") {
                p2[p2.length - 1] += 1;
              } else if (affinity === "backward") ;else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p2)) {
              p2[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p2) && path[_op3.length] >= _position) {
              p2[_op3.length - 1] += 1;
              p2[_op3.length] -= _position;
            }

            break;
          }

        case "move_node":
          {
            var {
              path: _op4,
              newPath: onp
            } = operation;

            if (Path.equals(_op4, onp)) {
              return;
            }

            if (Path.isAncestor(_op4, p2) || Path.equals(_op4, p2)) {
              var copy = onp.slice();

              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                copy[_op4.length - 1] -= 1;
              }

              return copy.concat(p2.slice(_op4.length));
            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p2) || Path.equals(onp, p2))) {
              if (Path.endsBefore(_op4, p2)) {
                p2[_op4.length - 1] -= 1;
              } else {
                p2[_op4.length - 1] += 1;
              }
            } else if (Path.endsBefore(onp, p2) || Path.equals(onp, p2) || Path.isAncestor(onp, p2)) {
              if (Path.endsBefore(_op4, p2)) {
                p2[_op4.length - 1] -= 1;
              }

              p2[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p2)) {
              if (Path.equals(onp, p2)) {
                p2[onp.length - 1] += 1;
              }

              p2[_op4.length - 1] -= 1;
            }

            break;
          }
      }
    });
  }

};
var PathRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$6(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$6(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Point = {
  compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  equals(point, another) {
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  isPoint(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },

  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(point, p2 => {
      if (p2 === null) {
        return null;
      }

      var {
        affinity = "forward"
      } = options;
      var {
        path,
        offset
      } = p2;

      switch (op.type) {
        case "insert_node":
        case "move_node":
          {
            p2.path = Path.transform(path, op, options);
            break;
          }

        case "insert_text":
          {
            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
              p2.offset += op.text.length;
            }

            break;
          }

        case "merge_node":
          {
            if (Path.equals(op.path, path)) {
              p2.offset += op.position;
            }

            p2.path = Path.transform(path, op, options);
            break;
          }

        case "remove_text":
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p2.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case "remove_node":
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p2.path = Path.transform(path, op, options);
            break;
          }

        case "split_node":
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === "forward") {
                p2.offset -= op.position;
                p2.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: "forward"
                }));
              }
            } else {
              p2.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }

};
var PointRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }

};
var _excluded$2 = ["anchor", "focus"];

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$5(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$5(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Range = {
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },

  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$2);

    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },

  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },

  isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  isForward(range) {
    return !Range.isBackward(range);
  },

  isRange(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  *points(range) {
    yield [range.anchor, "anchor"];
    yield [range.focus, "focus"];
  },

  start(range) {
    var [start] = Range.edges(range);
    return start;
  },

  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(range, r2 => {
      if (r2 === null) {
        return null;
      }

      var {
        affinity = "inward"
      } = options;
      var affinityAnchor;
      var affinityFocus;

      if (affinity === "inward") {
        var isCollapsed = Range.isCollapsed(r2);

        if (Range.isForward(r2)) {
          affinityAnchor = "forward";
          affinityFocus = isCollapsed ? affinityAnchor : "backward";
        } else {
          affinityAnchor = "backward";
          affinityFocus = isCollapsed ? affinityAnchor : "forward";
        }
      } else if (affinity === "outward") {
        if (Range.isForward(r2)) {
          affinityAnchor = "backward";
          affinityFocus = "forward";
        } else {
          affinityAnchor = "forward";
          affinityFocus = "backward";
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }

      var anchor = Point.transform(r2.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r2.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r2.anchor = anchor;
      r2.focus = focus;
    });
  }

};
var RangeRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a2 = node[key];
    var b2 = another[key];

    if ((0, import_is_plain_object.isPlainObject)(a2) && (0, import_is_plain_object.isPlainObject)(b2)) {
      if (!isDeepEqual(a2, b2)) return false;
    } else if (Array.isArray(a2) && Array.isArray(b2)) {
      if (a2.length !== b2.length) return false;

      for (var i2 = 0; i2 < a2.length; i2++) {
        if (a2[i2] !== b2[i2]) return false;
      }
    } else if (a2 !== b2) {
      return false;
    }
  }

  for (var _key in another) {
    if (node[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }

  return true;
};

var _excluded$1 = ["text"],
    _excluded2$1 = ["anchor", "focus"];

function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$4(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Text = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;

    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$1);

      return rest;
    }

    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },

  isText(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && typeof value.text === "string";
  },

  isTextList(value) {
    return Array.isArray(value) && value.every(val => Text.isText(val));
  },

  isTextProps(props) {
    return props.text !== void 0;
  },

  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  decorations(node, decorations) {
    var leaves = [_objectSpread$4({}, node)];

    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$1);

      var [start, end] = Range.edges(dec);
      var next = [];
      var o2 = 0;

      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var offset = o2;
        o2 += length;

        if (start.offset <= offset && end.offset >= o2) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        }

        if (start.offset !== end.offset && (start.offset === o2 || end.offset === offset) || start.offset > o2 || end.offset < offset || end.offset === offset && offset !== 0) {
          next.push(leaf);
          continue;
        }

        var middle = leaf;
        var before = void 0;
        var after = void 0;

        if (end.offset < o2) {
          var off = end.offset - offset;
          after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }

        if (start.offset > offset) {
          var _off = start.offset - offset;

          before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }

        Object.assign(middle, rest);

        if (before) {
          next.push(before);
        }

        next.push(middle);

        if (after) {
          next.push(after);
        }
      }

      leaves = next;
    }

    return leaves;
  }

};

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case "insert_node":
      {
        var {
          path,
          node
        } = op;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];

        if (index > parent.children.length) {
          throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
        }

        parent.children.splice(index, 0, node);

        if (selection) {
          for (var [point, key] of Range.points(selection)) {
            selection[key] = Point.transform(point, op);
          }
        }

        break;
      }

    case "insert_text":
      {
        var {
          path: _path,
          offset,
          text
        } = op;
        if (text.length === 0) break;

        var _node = Node.leaf(editor, _path);

        var before = _node.text.slice(0, offset);

        var after = _node.text.slice(offset);

        _node.text = before + text + after;

        if (selection) {
          for (var [_point, _key] of Range.points(selection)) {
            selection[_key] = Point.transform(_point, op);
          }
        }

        break;
      }

    case "merge_node":
      {
        var {
          path: _path2
        } = op;

        var _node2 = Node.get(editor, _path2);

        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);

        var _parent = Node.parent(editor, _path2);

        var _index = _path2[_path2.length - 1];

        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          prev.children.push(..._node2.children);
        } else {
          throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
        }

        _parent.children.splice(_index, 1);

        if (selection) {
          for (var [_point2, _key2] of Range.points(selection)) {
            selection[_key2] = Point.transform(_point2, op);
          }
        }

        break;
      }

    case "move_node":
      {
        var {
          path: _path3,
          newPath
        } = op;

        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }

        var _node3 = Node.get(editor, _path3);

        var _parent2 = Node.parent(editor, _path3);

        var _index2 = _path3[_path3.length - 1];

        _parent2.children.splice(_index2, 1);

        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);

        if (selection) {
          for (var [_point3, _key3] of Range.points(selection)) {
            selection[_key3] = Point.transform(_point3, op);
          }
        }

        break;
      }

    case "remove_node":
      {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];

        var _parent3 = Node.parent(editor, _path4);

        _parent3.children.splice(_index3, 1);

        if (selection) {
          for (var [_point4, _key4] of Range.points(selection)) {
            var result = Point.transform(_point4, op);

            if (selection != null && result != null) {
              selection[_key4] = result;
            } else {
              var _prev = void 0;

              var next = void 0;

              for (var [n2, p2] of Node.texts(editor)) {
                if (Path.compare(p2, _path4) === -1) {
                  _prev = [n2, p2];
                } else {
                  next = [n2, p2];
                  break;
                }
              }

              var preferNext = false;

              if (_prev && next) {
                if (Path.equals(next[1], _path4)) {
                  preferNext = !Path.hasPrevious(next[1]);
                } else {
                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                }
              }

              if (_prev && !preferNext) {
                _point4.path = _prev[1];
                _point4.offset = _prev[0].text.length;
              } else if (next) {
                _point4.path = next[1];
                _point4.offset = 0;
              } else {
                selection = null;
              }
            }
          }
        }

        break;
      }

    case "remove_text":
      {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0) break;

        var _node4 = Node.leaf(editor, _path5);

        var _before = _node4.text.slice(0, _offset);

        var _after = _node4.text.slice(_offset + _text.length);

        _node4.text = _before + _after;

        if (selection) {
          for (var [_point5, _key5] of Range.points(selection)) {
            selection[_key5] = Point.transform(_point5, op);
          }
        }

        break;
      }

    case "set_node":
      {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;

        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }

        var _node5 = Node.get(editor, _path6);

        for (var _key6 in newProperties) {
          if (_key6 === "children" || _key6 === "text") {
            throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
          }

          var value = newProperties[_key6];

          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        }

        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }

        break;
      }

    case "set_selection":
      {
        var {
          newProperties: _newProperties
        } = op;

        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(JSON.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _objectSpread$3({}, _newProperties);
          }

          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];

            if (_value == null) {
              if (_key8 === "anchor" || _key8 === "focus") {
                throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
              }

              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }

        break;
      }

    case "split_node":
      {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;

        if (_path7.length === 0) {
          throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
        }

        var _node6 = Node.get(editor, _path7);

        var _parent4 = Node.parent(editor, _path7);

        var _index4 = _path7[_path7.length - 1];
        var newNode;

        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);

          var _after2 = _node6.text.slice(position);

          _node6.text = _before2;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);

          var _after3 = _node6.children.slice(position);

          _node6.children = _before3;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            children: _after3
          });
        }

        _parent4.children.splice(_index4 + 1, 0, newNode);

        if (selection) {
          for (var [_point6, _key9] of Range.points(selection)) {
            selection[_key9] = Point.transform(_point6, op);
          }
        }

        break;
      }
  }

  return selection;
};

var GeneralTransforms = {
  transform(editor, op) {
    editor.children = ln(editor.children);
    var selection = editor.selection && ln(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = dn(editor.children);

      if (selection) {
        editor.selection = r(selection) ? dn(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }

};
var _excluded = ["text"],
    _excluded2 = ["children"];

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var NodeTransforms = {
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at,
        match,
        select
      } = options;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var [node] = nodes;

      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = n2 => Text.isText(n2);
          } else if (editor.isInline(node)) {
            match = n2 => Text.isText(n2) || Editor.isInline(editor, n2);
          } else {
            match = n2 => Editor.isBlock(editor, n2);
          }
        }

        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });

        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }

      for (var _node of nodes) {
        var _path = parentPath.concat(index);

        index++;
        editor.apply({
          type: "insert_node",
          path: _path,
          node: _node
        });
        at = Path.next(at);
      }

      at = Path.previous(at);

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n2 => Editor.isBlock(editor, n2);
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref => {
        var [, p2] = _ref;
        return Editor.pathRef(editor, p2);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var parentNodeEntry = Editor.node(editor, Path.parent(path));
        var [parent, parentPath] = parentNodeEntry;
        var index = path[path.length - 1];
        var {
          length
        } = parent.children;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },

  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n2 => parent.children.includes(n2);
        } else {
          match = n2 => Editor.isBlock(editor, n2);
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });

      if (!current || !prev) {
        return;
      }

      var [node, path] = current;
      var [prevNode, prevPath] = prev;

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), _ref2 => {
        var [n2] = _ref2;
        return n2;
      }).slice(commonPath.length).slice(0, -1);
      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: "highest",
        match: n2 => levels.includes(n2) && hasSingleChildNest(editor, n2)
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position;

      if (Text.isText(node) && Text.isText(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded2);

        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
      }

      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      }

      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      }

      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: "merge_node",
          path: newPath,
          position,
          properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n2 => Editor.isBlock(editor, n2);
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, _ref3 => {
        var [, p2] = _ref3;
        return Editor.pathRef(editor, p2);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: "move_node",
            path,
            newPath
          });
        }

        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          toRef.current = Path.next(toRef.current);
        }
      }

      toRef.unref();
    });
  },

  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n2 => Editor.isBlock(editor, n2);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, _ref4 => {
        var [, p2] = _ref4;
        return Editor.pathRef(editor, p2);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path) {
          var [node] = Editor.node(editor, path);
          editor.apply({
            type: "remove_node",
            path,
            node
          });
        }
      }
    });
  },

  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection,
        compare,
        merge
      } = options;
      var {
        hanging = false,
        mode = "lowest",
        split = false,
        voids = false
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n2 => Editor.isBlock(editor, n2);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          return;
        }

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        var [start, end] = Range.edges(at);
        var splitMode = mode === "lowest" ? "lowest" : "highest";
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match,
          mode: splitMode,
          voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match,
          mode: splitMode,
          voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      if (!compare) {
        compare = (prop, nodeProp) => prop !== nodeProp;
      }

      for (var [node, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {};

        if (path.length === 0) {
          continue;
        }

        var hasChanges = false;

        for (var k2 in props) {
          if (k2 === "children" || k2 === "text") {
            continue;
          }

          if (compare(props[k2], node[k2])) {
            hasChanges = true;
            if (node.hasOwnProperty(k2)) properties[k2] = node[k2];

            if (merge) {
              if (props[k2] != null) newProperties[k2] = merge(node[k2], props[k2]);
            } else {
              if (props[k2] != null) newProperties[k2] = props[k2];
            }
          }
        }

        if (hasChanges) {
          editor.apply({
            type: "set_node",
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },

  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;

      if (match == null) {
        match = n2 => Editor.isBlock(editor, n2);
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      }

      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);

        match = n2 => n2 === parent;

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: "backward"
      });
      var afterRef;

      try {
        var [highest] = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });

        if (!highest) {
          return;
        }

        var voidMatch = Editor.void(editor, {
          at,
          mode: "highest"
        });
        var nudge = 0;

        if (!voids && voidMatch) {
          var [voidNode, voidPath] = voidMatch;

          if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
            var after = Editor.after(editor, voidPath);

            if (!after) {
              var text = {
                text: ""
              };
              var afterPath = Path.next(voidPath);
              Transforms.insertNodes(editor, text, {
                at: afterPath,
                voids
              });
              after = Editor.point(editor, afterPath);
            }

            at = after;
            always = true;
          }

          var siblingHeight = at.path.length - voidPath.length;
          height = siblingHeight + 1;
          always = true;
        }

        afterRef = Editor.pointRef(editor, at);
        var depth = at.path.length - height;
        var [, highestPath] = highest;
        var lowestPath = at.path.slice(0, depth);
        var position = height === 0 ? at.offset : at.path[depth] + nudge;

        for (var [node, _path2] of Editor.levels(editor, {
          at: lowestPath,
          reverse: true,
          voids
        })) {
          var split = false;

          if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
            break;
          }

          var _point = beforeRef.current;
          var isEnd = Editor.isEnd(editor, _point, _path2);

          if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
            split = true;
            var properties = Node.extractProps(node);
            editor.apply({
              type: "split_node",
              path: _path2,
              position,
              properties
            });
          }

          position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
        }

        if (options.at == null) {
          var _point2 = afterRef.current || Editor.end(editor, []);

          Transforms.select(editor, _point2);
        }
      } finally {
        var _afterRef;

        beforeRef.unref();
        (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
      }
    });
  },

  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    for (var key of props) {
      obj[key] = null;
    }

    Transforms.setNodes(editor, obj, options);
  },

  unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n2 => Editor.isBlock(editor, n2);
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref5 => {
        var [, p2] = _ref5;
        return Editor.pathRef(editor, p2);
      }).reverse();

      var _loop = function _loop2(pathRef2) {
        var path = pathRef2.unref();
        var [node] = Editor.node(editor, path);
        var range = Editor.range(editor, path);

        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }

        Transforms.liftNodes(editor, {
          at: range,
          match: n2 => Element.isAncestor(node) && node.children.includes(n2),
          voids
        });
      };

      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = n2 => Editor.isInline(editor, n2) || Text.isText(n2);
        } else {
          match = n2 => Editor.isBlock(editor, n2);
        }
      }

      if (split && Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        Transforms.splitNodes(editor, {
          at: end,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? n2 => Editor.isBlock(editor, n2) : n2 => Editor.isEditor(n2),
        mode: "lowest",
        voids
      }));

      for (var [, rootPath] of roots) {
        var a2 = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a2) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a2,
          match,
          mode,
          voids
        }));

        if (matches.length > 0) {
          var _ret = function () {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;

            if (firstPath.length === 0 && lastPath.length === 0) {
              return "continue";
            }

            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);
            var [commonNode] = commonNodeEntry;
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: n2 => Element.isAncestor(commonNode) && commonNode.children.includes(n2),
              to: wrapperPath.concat(0),
              voids
            });
          }();

          if (_ret === "continue") continue;
        }
      }
    });
  }

};

var hasSingleChildNest = (editor, node) => {
  if (Element.isElement(node)) {
    var element = node;

    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};

var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = (editor, path) => {
  var [node] = Editor.node(editor, path);
  return n2 => n2 === node;
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var SelectionTransforms = {
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      edge = "anchor"
    } = options;
    var {
      selection
    } = editor;

    if (!selection) {
      return;
    } else if (edge === "anchor") {
      Transforms.select(editor, selection.anchor);
    } else if (edge === "focus") {
      Transforms.select(editor, selection.focus);
    } else if (edge === "start") {
      var [start] = Range.edges(selection);
      Transforms.select(editor, start);
    } else if (edge === "end") {
      var [, end] = Range.edges(selection);
      Transforms.select(editor, end);
    }
  },

  deselect(editor) {
    var {
      selection
    } = editor;

    if (selection) {
      editor.apply({
        type: "set_selection",
        properties: selection,
        newProperties: null
      });
    }
  },

  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = "character",
      reverse = false
    } = options;
    var {
      edge = null
    } = options;

    if (!selection) {
      return;
    }

    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }

    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }

    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};

    if (edge == null || edge === "anchor") {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === "focus") {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
    }

    editor.apply({
      type: "set_selection",
      properties: selection,
      newProperties: target
    });
  },

  setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      selection
    } = editor;
    var {
      edge = "both"
    } = options;

    if (!selection) {
      return;
    }

    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }

    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }

    var {
      anchor,
      focus
    } = selection;
    var point = edge === "anchor" ? anchor : focus;
    Transforms.setSelection(editor, {
      [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point), props)
    });
  },

  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k2 in props) {
      if (k2 === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k2 === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k2 !== "anchor" && k2 !== "focus" && props[k2] !== selection[k2]) {
        oldProps[k2] = selection[k2];
        newProps[k2] = props[k2];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: "set_selection",
        properties: oldProps,
        newProperties: newProps
      });
    }
  }

};
var TextTransforms = {
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = "character",
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;

      if (!at) {
        return;
      }

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: "highest"
        });

        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        var [, _end] = Range.edges(at);
        var endOfDoc = Editor.end(editor, []);

        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }

      var [start, end] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: n2 => Editor.isBlock(editor, n2),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: n2 => Editor.isBlock(editor, n2),
        at: end,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start,
        mode: "highest"
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end,
        mode: "highest"
      });

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      }

      var matches = [];
      var lastPath;

      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node, path] = entry;

        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }

        if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }

      var pathRefs = Array.from(matches, _ref => {
        var [, p2] = _ref;
        return Editor.pathRef(editor, p2);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset
        } = start;

        var text = _node.text.slice(offset);

        if (text.length > 0) editor.apply({
          type: "remove_text",
          path: _path,
          offset,
          text
        });
      }

      for (var pathRef of pathRefs) {
        var _path2 = pathRef.unref();

        Transforms.removeNodes(editor, {
          at: _path2,
          voids
        });
      }

      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path3
        } = _point2;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node2.text.slice(_offset, end.offset);

        if (_text.length > 0) editor.apply({
          type: "remove_text",
          path: _path3,
          offset: _offset,
          text: _text
        });
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }

      var startUnref = startRef.unref();
      var endUnref = endRef.unref();
      var point = reverse ? startUnref || endUnref : endUnref || startUnref;

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }

      var inlineElementMatch = Editor.above(editor, {
        at,
        match: n2 => Editor.isInline(editor, n2),
        mode: "highest",
        voids
      });

      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: n2 => Editor.isBlock(editor, n2),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];

      var matcher = _ref2 => {
        var [n2, p2] = _ref2;
        var isRoot = p2.length === 0;

        if (isRoot) {
          return false;
        }

        if (isBlockEmpty) {
          return true;
        }

        if (mergeStart && Path.isAncestor(p2, firstPath) && Element.isElement(n2) && !editor.isVoid(n2) && !editor.isInline(n2)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p2, lastPath) && Element.isElement(n2) && !editor.isVoid(n2) && !editor.isInline(n2)) {
          return false;
        }

        return true;
      };

      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (matcher(entry)) {
          matches.push(entry);
        }
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var [node] of matches) {
        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: n2 => Text.isText(n2) || Editor.isInline(editor, n2),
        mode: "highest",
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      var blockPathRef = Editor.pathRef(editor, blockPath);
      Transforms.splitNodes(editor, {
        at,
        match: n2 => hasBlocks ? Editor.isBlock(editor, n2) : Text.isText(n2) || Editor.isInline(editor, n2),
        mode: hasBlocks ? "lowest" : "highest",
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: n2 => Text.isText(n2) || Editor.isInline(editor, n2),
        mode: "highest",
        voids
      });

      if (isBlockEmpty && middles.length) {
        Transforms.delete(editor, {
          at: blockPathRef.unref(),
          voids
        });
      }

      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: n2 => Editor.isBlock(editor, n2),
        mode: "lowest",
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: n2 => Text.isText(n2) || Editor.isInline(editor, n2),
        mode: "highest",
        voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0) {
          path = Path.previous(middleRef.current);
        } else {
          path = Path.previous(startRef.current);
        }

        var _end2 = Editor.end(editor, path);

        Transforms.select(editor, _end2);
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          at = pointRef.unref();
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }

      var {
        path,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: "insert_text",
        path,
        offset,
        text
      });
    });
  }

};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};

    if (i2 % 2) {
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

var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);
};

code(module, require);
return module.exports;
});

