define([], () => {
const require = () => void 0;
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // ../component-emitter/index.js


var require_component_emitter = __commonJS({
  "../component-emitter/index.js"(exports, module2) {
    if (typeof module2 !== "undefined") {
      module2.exports = Emitter;
    }

    function Emitter(obj) {
      if (obj) return mixin(obj);
    }

    ;

    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }

      return obj;
    }

    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };

    Emitter.prototype.once = function (event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }

      on.fn = fn;
      this.on(event, on);
      return this;
    };

    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
      this._callbacks = this._callbacks || {};

      if (arguments.length == 0) {
        this._callbacks = {};
        return this;
      }

      var callbacks = this._callbacks["$" + event];
      if (!callbacks) return this;

      if (arguments.length == 1) {
        delete this._callbacks["$" + event];
        return this;
      }

      var cb;

      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];

        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }

      return this;
    };

    Emitter.prototype.emit = function (event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1),
          callbacks = this._callbacks["$" + event];

      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }

      if (callbacks) {
        callbacks = callbacks.slice(0);

        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }

      return this;
    };

    Emitter.prototype.listeners = function (event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };

    Emitter.prototype.hasListeners = function (event) {
      return !!this.listeners(event).length;
    };
  }

}); // ../socket.io-parser/dist/is-binary.js


var require_is_binary = __commonJS({
  "../socket.io-parser/dist/is-binary.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasBinary = exports.isBinary = void 0;
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";

    var isView = obj => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };

    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";

    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }

    exports.isBinary = isBinary;

    function hasBinary(obj, toJSON) {
      if (!obj || typeof obj !== "object") {
        return false;
      }

      if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
          if (hasBinary(obj[i])) {
            return true;
          }
        }

        return false;
      }

      if (isBinary(obj)) {
        return true;
      }

      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }

      return false;
    }

    exports.hasBinary = hasBinary;
  }

}); // ../socket.io-parser/dist/binary.js


var require_binary = __commonJS({
  "../socket.io-parser/dist/binary.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reconstructPacket = exports.deconstructPacket = void 0;
    var is_binary_1 = require_is_binary();

    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return {
        packet: pack,
        buffers
      };
    }

    exports.deconstructPacket = deconstructPacket;

    function _deconstructPacket(data, buffers) {
      if (!data) return data;

      if (is_binary_1.isBinary(data)) {
        const placeholder = {
          _placeholder: true,
          num: buffers.length
        };
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        const newData = new Array(data.length);

        for (let i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i], buffers);
        }

        return newData;
      } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            newData[key] = _deconstructPacket(data[key], buffers);
          }
        }

        return newData;
      }

      return data;
    }

    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      packet.attachments = void 0;
      return packet;
    }

    exports.reconstructPacket = reconstructPacket;

    function _reconstructPacket(data, buffers) {
      if (!data) return data;

      if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;

        if (isIndexValid) {
          return buffers[data.num];
        } else {
          throw new Error("illegal attachments");
        }
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i], buffers);
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }

      return data;
    }
  }

}); // ../ms/index.js


var require_ms = __commonJS({
  "../ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    module2.exports = function (val, options) {
      options = options || {};
      var type = typeof val;

      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }

      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };

    function parse(str) {
      str = String(str);

      if (str.length > 100) {
        return;
      }

      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

      if (!match) {
        return;
      }

      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();

      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;

        case "weeks":
        case "week":
        case "w":
          return n * w;

        case "days":
        case "day":
        case "d":
          return n * d;

        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;

        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;

        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;

        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;

        default:
          return void 0;
      }
    }

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }

      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }

      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }

      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }

      return ms + "ms";
    }

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }

      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }

      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }

      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }

      return ms + " ms";
    }

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }

}); // ../debug/src/common.js


var require_common = __commonJS({
  "../debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach(key => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};

      function selectColor(namespace) {
        let hash = 0;

        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }

        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }

      createDebug.selectColor = selectColor;

      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;

        function debug(...args) {
          if (!debug.enabled) {
            return;
          }

          const self = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);

          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }

          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }

            index++;
            const formatter = createDebug.formatters[format];

            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }

            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }

            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }

            return enabledCache;
          },
          set: v => {
            enableOverride = v;
          }
        });

        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }

        return debug;
      }

      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }

      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;

        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }

          namespaces = split[i].replace(/\*/g, ".*?");

          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }

      function disable() {
        const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => "-" + namespace)].join(",");
        createDebug.enable("");
        return namespaces;
      }

      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }

        let i;
        let len;

        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }

        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }

        return false;
      }

      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }

      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }

        return val;
      }

      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }

      createDebug.enable(createDebug.load());
      return createDebug;
    }

    module2.exports = setup;
  }

}); // ../debug/src/browser.js


var require_browser = __commonJS({
  "../debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();

    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();

    exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }

      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }

      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);

      if (!this.useColors) {
        return;
      }

      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, match => {
        if (match === "%%") {
          return;
        }

        index++;

        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    exports.log = console.debug || console.log || (() => {});

    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {}
    }

    function load() {
      let r;

      try {
        r = exports.storage.getItem("debug");
      } catch (error) {}

      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }

      return r;
    }

    function localstorage() {
      try {
        return localStorage;
      } catch (error) {}
    }

    module2.exports = require_common()(exports);
    var {
      formatters
    } = module2.exports;

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }

}); // ../socket.io-parser/dist/index.js


var require_dist = __commonJS({
  "../socket.io-parser/dist/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
    var Emitter = require_component_emitter();
    var binary_1 = require_binary();
    var is_binary_1 = require_is_binary();
    var debug = require_browser()("socket.io-parser");
    exports.protocol = 5;
    var PacketType;

    (function (PacketType2) {
      PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
      PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
      PacketType2[PacketType2["ACK"] = 3] = "ACK";
      PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));

    var Encoder = class {
      encode(obj) {
        debug("encoding packet %j", obj);

        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if (is_binary_1.hasBinary(obj)) {
            obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
            return this.encodeAsBinary(obj);
          }
        }

        return [this.encodeAsString(obj)];
      }

      encodeAsString(obj) {
        let str = "" + obj.type;

        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }

        if (obj.nsp && obj.nsp !== "/") {
          str += obj.nsp + ",";
        }

        if (obj.id != null) {
          str += obj.id;
        }

        if (obj.data != null) {
          str += JSON.stringify(obj.data);
        }

        debug("encoded %j as %s", obj, str);
        return str;
      }

      encodeAsBinary(obj) {
        const deconstruction = binary_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }

    };
    exports.Encoder = Encoder;
    var Decoder = class extends Emitter {
      constructor() {
        super();
      }

      add(obj) {
        let packet;

        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }

          packet = this.decodeString(obj);

          if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
            this.reconstructor = new BinaryReconstructor(packet);

            if (packet.attachments === 0) {
              super.emit("decoded", packet);
            }
          } else {
            super.emit("decoded", packet);
          }
        } else if (is_binary_1.isBinary(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);

            if (packet) {
              this.reconstructor = null;
              super.emit("decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }

      decodeString(str) {
        let i = 0;
        const p = {
          type: Number(str.charAt(0))
        };

        if (PacketType[p.type] === void 0) {
          throw new Error("unknown packet type " + p.type);
        }

        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          const start = i + 1;

          while (str.charAt(++i) !== "-" && i != str.length) {}

          const buf = str.substring(start, i);

          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }

          p.attachments = Number(buf);
        }

        if (str.charAt(i + 1) === "/") {
          const start = i + 1;

          while (++i) {
            const c = str.charAt(i);
            if (c === ",") break;
            if (i === str.length) break;
          }

          p.nsp = str.substring(start, i);
        } else {
          p.nsp = "/";
        }

        const next = str.charAt(i + 1);

        if (next !== "" && Number(next) == next) {
          const start = i + 1;

          while (++i) {
            const c = str.charAt(i);

            if (c == null || Number(c) != c) {
              --i;
              break;
            }

            if (i === str.length) break;
          }

          p.id = Number(str.substring(start, i + 1));
        }

        if (str.charAt(++i)) {
          const payload = tryParse(str.substr(i));

          if (Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }

        debug("decoded %s as %j", str, p);
        return p;
      }

      static isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return typeof payload === "object";

          case PacketType.DISCONNECT:
            return payload === void 0;

          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || typeof payload === "object";

          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && payload.length > 0;

          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }

      destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      }

    };
    exports.Decoder = Decoder;

    function tryParse(str) {
      try {
        return JSON.parse(str);
      } catch (e) {
        return false;
      }
    }

    var BinaryReconstructor = class {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }

      takeBinaryData(binData) {
        this.buffers.push(binData);

        if (this.buffers.length === this.reconPack.attachments) {
          const packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }

        return null;
      }

      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }

    };
  }

}); // ../../.beyond/uimport/socket.io-parser.4.2.1.js


var socket_io_parser_4_2_1_exports = {};

__export(socket_io_parser_4_2_1_exports, {
  default: () => socket_io_parser_4_2_1_default
});

__reExport(socket_io_parser_4_2_1_exports, __toESM(require_dist()));

var import_socket = __toESM(require_dist());

var socket_io_parser_4_2_1_default = import_socket.default;
module.exports = __toCommonJS(socket_io_parser_4_2_1_exports);
};

code(module, require);
return module.exports;
});

