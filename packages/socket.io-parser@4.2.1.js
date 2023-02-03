System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.1.js
var socket_io_parser_4_2_1_exports = {};
__export(socket_io_parser_4_2_1_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_1_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
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
}

// node_modules/socket.io-parser/build/esm/binary.js
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
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
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
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
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
var Decoder = class extends import_component_emitter.Emitter {
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
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
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
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJyZXF1aXJlIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsIkJJTkFSWV9FVkVOVCIsIkJJTkFSWV9BQ0siLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwic3RyIiwibnNwIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwiZW1pdFJlc2VydmVkIiwiYmFzZTY0IiwidGFrZUJpbmFyeURhdGEiLCJwIiwiTnVtYmVyIiwiY2hhckF0Iiwic3RhcnQiLCJidWYiLCJzdWJzdHJpbmciLCJjIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsInN1YnN0ciIsImlzUGF5bG9hZFZhbGlkIiwicGFyc2UiLCJlIiwiQ09OTkVDVCIsIkRJU0NPTk5FQ1QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFNQyx3QkFBd0IsT0FBT0MsZ0JBQWdCO0FBQ3JELElBQU1DLFNBQVVDLE9BQVE7RUFDcEIsT0FBTyxPQUFPRixZQUFZQyxXQUFXLGFBQy9CRCxZQUFZQyxPQUFPQyxHQUFHLElBQ3RCQSxJQUFJQyxrQkFBa0JIO0FBQ2hDO0FBQ0EsSUFBTUksV0FBV0MsT0FBT0MsVUFBVUY7QUFDbEMsSUFBTUcsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiSixTQUFTSyxLQUFLRCxJQUFJLE1BQU07QUFDaEMsSUFBTUUsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiUCxTQUFTSyxLQUFLRSxJQUFJLE1BQU07QUFNekIsU0FBU0MsU0FBU1YsS0FBSztFQUMxQixPQUFTSCwwQkFBMEJHLGVBQWVGLGVBQWVDLE9B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