define(["engine.io-parser","engine.io-client"], (dep_0, dep_1) => {
const dependencies = new Map([['engine.io-parser', dep_0],['engine.io-client', dep_1]]);
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
}), mod); // .beyond/uimport/temp/socket.io-client/4.5.1.js


var __exports = {};

__export(__exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => __default,
  io: () => lookup,
  protocol: () => protocol
});

module.exports = __toCommonJS(__exports); // node_modules/socket.io-client/build/esm/url.js

var import_engine = require("engine.io-client");

function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (uri == null) uri = loc.protocol + "//" + loc.host;

  if (typeof uri === "string") {
    if (uri.charAt(0) === "/") {
      if (uri.charAt(1) === "/") {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      if (typeof loc !== "undefined") {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }

    obj = (0, import_engine.parse)(uri);
  }

  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
} // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js


var esm_exports = {};

__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
}); // node_modules/@socket.io/component-emitter/index.mjs


function Emitter(obj) {
  if (obj) return mixin(obj);
}

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
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }

  on2.fn = fn;
  this.on(event, on2);
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

Emitter.prototype.emitReserved = Emitter.prototype.emit;

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
}; // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js


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
} // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js


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

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBinary(data)) {
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
      if (Object.prototype.hasOwnProperty.call(data, key)) {
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
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
} // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js


var protocol = 5;
var PacketType;

(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));

var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }

  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
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
      str += JSON.stringify(obj.data, this.replacer);
    }

    return str;
  }

  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }

};
var Decoder = class extends Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
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
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);

        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
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
      const payload = this.tryParse(str.substr(i));

      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }

    return p;
  }

  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
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
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }

  takeBinaryData(binData) {
    this.buffers.push(binData);

    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }

    return null;
  }

  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }

}; // node_modules/socket.io-client/build/esm/on.js

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
} // node_modules/socket.io-client/build/esm/socket.js


var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;

    if (opts && opts.auth) {
      this.auth = opts.auth;
    }

    if (this.io._autoConnect) this.open();
  }

  get disconnected() {
    return !this.connected;
  }

  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }

  get active() {
    return !!this.subs;
  }

  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if (this.io._readyState === "open") this.onopen();
    return this;
  }

  open() {
    return this.connect();
  }

  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }

  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev + '" is a reserved event name');
    }

    args.unshift(ev);
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;

    if (typeof args[args.length - 1] === "function") {
      const id = this.ids++;
      const ack = args.pop();

      this._registerAckCallback(id, ack);

      packet.id = id;
    }

    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }

    this.flags = {};
    return this;
  }

  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;

    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }

    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];

      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }

      ack.call(this, new Error("operation has timed out"));
    }, timeout);

    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }

  packet(packet) {
    packet.nsp = this.nsp;

    this.io._packet(packet);
  }

  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: PacketType.CONNECT,
        data: this.auth
      });
    }
  }

  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }

  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }

  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;

    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }

        break;

      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;

      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;

      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;

      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }

  onevent(packet) {
    const args = packet.data || [];

    if (packet.id != null) {
      args.push(this.ack(packet.id));
    }

    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }

  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }

    super.emit.apply(this, args);
  }

  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }

  onack(packet) {
    const ack = this.acks[packet.id];

    if (typeof ack === "function") {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }

  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }

  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }

  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }

  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }

    this.io["_destroy"](this);
  }

  disconnect() {
    if (this.connected) {
      this.packet({
        type: PacketType.DISCONNECT
      });
    }

    this.destroy();

    if (this.connected) {
      this.onclose("io client disconnect");
    }

    return this;
  }

  close() {
    return this.disconnect();
  }

  compress(compress) {
    this.flags.compress = compress;
    return this;
  }

  get volatile() {
    this.flags.volatile = true;
    return this;
  }

  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }

  onAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.push(listener);

    return this;
  }

  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];

    this._anyListeners.unshift(listener);

    return this;
  }

  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }

    return this;
  }

  listenersAny() {
    return this._anyListeners || [];
  }

  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.push(listener);

    return this;
  }

  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];

    this._anyOutgoingListeners.unshift(listener);

    return this;
  }

  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }

    if (listener) {
      const listeners = this._anyOutgoingListeners;

      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }

    return this;
  }

  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }

  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();

      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }

}; // node_modules/socket.io-client/build/esm/contrib/backo2.js

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};

Backoff.prototype.reset = function () {
  this.attempts = 0;
};

Backoff.prototype.setMin = function (min) {
  this.ms = min;
};

Backoff.prototype.setMax = function (max) {
  this.max = max;
};

Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
}; // node_modules/socket.io-client/build/esm/manager.js


var import_engine2 = require("engine.io-client");

var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;

    super();
    this.nsps = {};
    this.subs = [];

    if (uri && typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;

    const _parser = opts.parser || esm_exports;

    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }

  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }

  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }

  reconnectionDelay(v) {
    var _a;

    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }

  randomizationFactor(v) {
    var _a;

    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }

  reconnectionDelayMax(v) {
    var _a;

    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }

  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }

  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }

  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);

      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });

    if (this._timeout !== false) {
      const timeout = this._timeout;

      if (timeout === 0) {
        openSubDestroy();
      }

      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }

    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }

  connect(fn) {
    return this.open(fn);
  }

  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }

  onping() {
    this.emitReserved("ping");
  }

  ondata(data) {
    this.decoder.add(data);
  }

  ondecoded(packet) {
    this.emitReserved("packet", packet);
  }

  onerror(err) {
    this.emitReserved("error", err);
  }

  socket(nsp, opts) {
    let socket = this.nsps[nsp];

    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }

    return socket;
  }

  _destroy(socket) {
    const nsps = Object.keys(this.nsps);

    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];

      if (socket2.active) {
        return;
      }
    }

    this._close();
  }

  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);

    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }

  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }

  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }

  disconnect() {
    return this._close();
  }

  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);

    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }

  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;

    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);

      if (this.opts.autoUnref) {
        timer.unref();
      }

      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }

  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }

}; // node_modules/socket.io-client/build/esm/index.js

var cache = {};

function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }

  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
  let io;

  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
}

Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
}); // .beyond/uimport/temp/socket.io-client/4.5.1.js

var __default = lookup;
};

code(module, require);
return module.exports;
});

