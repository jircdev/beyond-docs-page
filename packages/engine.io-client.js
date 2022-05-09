define(["has-cors","@socket.io/component-emitter","engine.io-parser","yeast"], (dep_0, dep_1, dep_2, dep_3) => {
const dependencies = new Map([['has-cors', dep_0],['@socket.io/component-emitter', dep_1],['engine.io-parser', dep_2],['yeast', dep_3]]);
const define = void 0;
const require = dependency => dependencies.get(dependency);
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

var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));

var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod); // node_modules/parseqs/index.js


var require_parseqs = __commonJS({
  "node_modules/parseqs/index.js"(exports) {
    exports.encode = function (obj) {
      var str = "";

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length) str += "&";
          str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
      }

      return str;
    };

    exports.decode = function (qs) {
      var qry = {};
      var pairs = qs.split("&");

      for (var i = 0, l = pairs.length; i < l; i++) {
        var pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }

      return qry;
    };
  }

}); // node_modules/parseuri/index.js


var require_parseuri = __commonJS({
  "node_modules/parseuri/index.js"(exports, module2) {
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    module2.exports = function parseuri2(str) {
      var src = str,
          b = str.indexOf("["),
          e = str.indexOf("]");

      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
      }

      var m = re.exec(str || ""),
          uri = {},
          i = 14;

      while (i--) {
        uri[parts[i]] = m[i] || "";
      }

      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }

      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    };

    function pathNames(obj, path) {
      var regx = /\/{2,9}/g,
          names = path.replace(regx, "/").split("/");

      if (path.substr(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }

      if (path.substr(path.length - 1, 1) == "/") {
        names.splice(names.length - 1, 1);
      }

      return names;
    }

    function queryKey(uri, query) {
      var data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  }

}); // .beyond/uimport/temp/engine.io-client/6.1.1.js


var __exports = {};

__export(__exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  protocol: () => protocol2,
  transports: () => transports
});

module.exports = __toCommonJS(__exports); // node_modules/engine.io-client/build/esm/globalThis.browser.js

var globalThis_browser_default = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})(); // node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js


var import_has_cors = __toESM(require("has-cors"), 0);

function xmlhttprequest_browser_default(opts) {
  const xdomain = opts.xdomain;

  try {
    if (typeof XMLHttpRequest !== "undefined" && (!xdomain || import_has_cors.default)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis_browser_default[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
} // node_modules/engine.io-client/build/esm/util.js


function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
}

var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;

function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_browser_default);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_browser_default);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThis_browser_default);
    obj.clearTimeoutFn = clearTimeout.bind(globalThis_browser_default);
  }
} // node_modules/engine.io-client/build/esm/transport.js


var import_engine = require("engine.io-parser");

var import_component_emitter = require("@socket.io/component-emitter");

var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }

  onError(msg, desc) {
    const err = new Error(msg);
    err.type = "TransportError";
    err.description = desc;
    super.emit("error", err);
    return this;
  }

  open() {
    if (this.readyState === "closed" || this.readyState === "") {
      this.readyState = "opening";
      this.doOpen();
    }

    return this;
  }

  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }

    return this;
  }

  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }

  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emit("open");
  }

  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }

  onPacket(packet) {
    super.emit("packet", packet);
  }

  onClose() {
    this.readyState = "closed";
    super.emit("close");
  }

}; // node_modules/engine.io-client/build/esm/transports/polling.js

var import_yeast = __toESM(require("yeast"), 0);

var import_parseqs = __toESM(require_parseqs(), 1);

var import_engine2 = require("engine.io-parser");

var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this.polling = false;
  }

  get name() {
    return "polling";
  }

  doOpen() {
    this.poll();
  }

  pause(onPause) {
    this.readyState = "pausing";

    const pause = () => {
      this.readyState = "paused";
      onPause();
    };

    if (this.polling || !this.writable) {
      let total = 0;

      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }

      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }

  poll() {
    this.polling = true;
    this.doPoll();
    this.emit("poll");
  }

  onData(data) {
    const callback = packet => {
      if (this.readyState === "opening" && packet.type === "open") {
        this.onOpen();
      }

      if (packet.type === "close") {
        this.onClose();
        return false;
      }

      this.onPacket(packet);
    };

    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);

    if (this.readyState !== "closed") {
      this.polling = false;
      this.emit("pollComplete");

      if (this.readyState === "open") {
        this.poll();
      } else {}
    }
  }

  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };

    if (this.readyState === "open") {
      close();
    } else {
      this.once("open", close);
    }
  }

  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emit("drain");
      });
    });
  }

  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";

    if (this.opts.timestampRequests !== false) {
      query[this.opts.timestampParam] = (0, import_yeast.default)();
    }

    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }

    if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }

    const encodedQuery = import_parseqs.default.encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }

}; // node_modules/engine.io-client/build/esm/transports/polling-xhr.js

var import_component_emitter2 = require("@socket.io/component-emitter");

function empty() {}

var hasXHR2 = function () {
  const xhr = new xmlhttprequest_browser_default({
    xdomain: false
  });
  return xhr.responseType != null;
}();

var XHR = class extends Polling {
  constructor(opts) {
    super(opts);

    if (typeof location !== "undefined") {
      const isSSL = location.protocol === "https:";
      let port = location.port;

      if (!port) {
        port = isSSL ? "443" : "80";
      }

      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }

    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }

  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }

  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", err => {
      this.onError("xhr post error", err);
    });
  }

  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", err => {
      this.onError("xhr poll error", err);
    });
    this.pollXhr = req;
  }

};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = opts.async !== false;
    this.data = opts.data !== void 0 ? opts.data : null;
    this.create();
  }

  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new xmlhttprequest_browser_default(opts);

    try {
      xhr.open(this.method, this.uri, this.async);

      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}

      if (this.method === "POST") {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }

      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}

      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }

      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status === 200 || xhr.status === 1223) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };

      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }

    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }

  onSuccess() {
    this.emit("success");
    this.cleanup();
  }

  onData(data) {
    this.emit("data", data);
    this.onSuccess();
  }

  onError(err) {
    this.emit("error", err);
    this.cleanup(true);
  }

  cleanup(fromError) {
    if (typeof this.xhr === "undefined" || this.xhr === null) {
      return;
    }

    this.xhr.onreadystatechange = empty;

    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }

    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }

    this.xhr = null;
  }

  onLoad() {
    const data = this.xhr.responseText;

    if (data !== null) {
      this.onData(data);
    }
  }

  abort() {
    this.cleanup();
  }

};
Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThis_browser_default ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
} // node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js


var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();

var WebSocket = globalThis_browser_default.WebSocket || globalThis_browser_default.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer"; // node_modules/engine.io-client/build/esm/transports/websocket.js

var import_parseqs2 = __toESM(require_parseqs(), 1);

var import_yeast2 = __toESM(require("yeast"), 0);

var import_engine3 = require("engine.io-parser");

var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }

  get name() {
    return "websocket";
  }

  doOpen() {
    if (!this.check()) {
      return;
    }

    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emit("error", err);
    }

    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }

  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }

      this.onOpen();
    };

    this.ws.onclose = this.onClose.bind(this);

    this.ws.onmessage = ev => this.onData(ev.data);

    this.ws.onerror = e => this.onError("websocket error", e);
  }

  write(packets) {
    this.writable = false;

    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};

        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (this.opts.perMessageDeflate) {
            const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;

            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}

        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emit("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }

  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }

  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";

    if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }

    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0, import_yeast2.default)();
    }

    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    const encodedQuery = import_parseqs2.default.encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }

  check() {
    return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
  }

}; // node_modules/engine.io-client/build/esm/transports/index.js

var transports = {
  websocket: WS,
  polling: XHR
}; // node_modules/engine.io-client/build/esm/socket.js

var import_parseqs3 = __toESM(require_parseqs(), 1);

var import_parseuri = __toESM(require_parseuri(), 1);

var import_component_emitter3 = require("@socket.io/component-emitter");

var import_engine4 = require("engine.io-parser");

var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();

    if (uri && typeof uri === "object") {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = (0, import_parseuri.default)(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = (0, import_parseuri.default)(opts.host).host;
    }

    installTimerFunctions(this, opts);
    this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";

    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }

    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";

    if (typeof this.opts.query === "string") {
      this.opts.query = import_parseqs3.default.decode(this.opts.query);
    }

    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        addEventListener("beforeunload", () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        }, false);
      }

      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close");
        };

        addEventListener("offline", this.offlineEventListener, false);
      }
    }

    this.open();
  }

  createTransport(name) {
    const query = clone(this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }

  open() {
    let transport;

    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }

    this.readyState = "opening";

    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }

    transport.open();
    this.setTransport(transport);
  }

  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }

    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", () => {
      this.onClose("transport close");
    });
  }

  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;

    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;

        if (msg.type === "pong" && msg.data === "probe") {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = transport.name === "websocket";
          this.transport.pause(() => {
            if (failed) return;
            if (this.readyState === "closed") return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };

    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }

    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };

    function onTransportClose() {
      onerror("transport closed");
    }

    function onclose() {
      onerror("socket closed");
    }

    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }

    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };

    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }

  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = this.transport.name === "websocket";
    this.emitReserved("open");
    this.flush();

    if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
      let i = 0;
      const l = this.upgrades.length;

      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }

  onPacket(packet) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");

      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;

        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;

        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;

        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }

  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    if (this.readyState === "closed") return;
    this.resetPingTimeout();
  }

  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);

    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }

  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;

    if (this.writeBuffer.length === 0) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }

  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      this.transport.send(this.writeBuffer);
      this.prevBufferLen = this.writeBuffer.length;
      this.emitReserved("flush");
    }
  }

  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }

  sendPacket(type, data, options, fn) {
    if (typeof data === "function") {
      fn = data;
      data = void 0;
    }

    if (typeof options === "function") {
      fn = options;
      options = null;
    }

    if (this.readyState === "closing" || this.readyState === "closed") {
      return;
    }

    options = options || {};
    options.compress = options.compress !== false;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }

  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };

    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };

    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };

    if (this.readyState === "opening" || this.readyState === "open") {
      this.readyState = "closing";

      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }

    return this;
  }

  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }

  onClose(reason, desc) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();

      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      }

      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, desc);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }

  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;

    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }

    return filteredUpgrades;
  }

};
Socket.protocol = import_engine4.protocol;

function clone(obj) {
  const o = {};

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
} // node_modules/engine.io-client/build/esm/index.js


var protocol2 = Socket.protocol;
};

code(module, require);
return module.exports;
});

