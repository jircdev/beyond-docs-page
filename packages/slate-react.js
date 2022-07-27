define(["react","is-plain-object","immer","react-dom"], (dep_0, dep_1, dep_2, dep_3) => {
const dependencies = new Map([['react', dep_0],['is-plain-object', dep_1],['immer', dep_2],['react-dom', dep_3]]);
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
}), mod); // node_modules/direction/index.js


var require_direction = __commonJS({
  "node_modules/direction/index.js"(exports, module2) {
    "use strict";

    module2.exports = direction;
    var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
    var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");

    function direction(value) {
      value = String(value || "");

      if (rtl.test(value)) {
        return "rtl";
      }

      if (ltr.test(value)) {
        return "ltr";
      }

      return "neutral";
    }
  }

}); // node_modules/lodash/isObject.js


var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }

    module2.exports = isObject;
  }

}); // node_modules/lodash/_freeGlobal.js


var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }

}); // node_modules/lodash/_root.js


var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }

}); // node_modules/lodash/now.js


var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module2) {
    var root = require_root();

    var now = function () {
      return root.Date.now();
    };

    module2.exports = now;
  }

}); // node_modules/lodash/_trimmedEndIndex.js


var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module2) {
    var reWhitespace = /\s/;

    function trimmedEndIndex(string) {
      var index = string.length;

      while (index-- && reWhitespace.test(string.charAt(index))) {}

      return index;
    }

    module2.exports = trimmedEndIndex;
  }

}); // node_modules/lodash/_baseTrim.js


var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module2) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;

    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }

    module2.exports = baseTrim;
  }

}); // node_modules/lodash/_Symbol.js


var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }

}); // node_modules/lodash/_getRawTag.js


var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;

    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }

    module2.exports = getRawTag;
  }

}); // node_modules/lodash/_objectToString.js


var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;

    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module2.exports = objectToString;
  }

}); // node_modules/lodash/_baseGetTag.js


var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol(),
        getRawTag = require_getRawTag(),
        objectToString = require_objectToString();
    var nullTag = "[object Null]",
        undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;

    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }

    module2.exports = baseGetTag;
  }

}); // node_modules/lodash/isObjectLike.js


var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }

    module2.exports = isObjectLike;
  }

}); // node_modules/lodash/isSymbol.js


var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
        isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";

    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }

    module2.exports = isSymbol;
  }

}); // node_modules/lodash/toNumber.js


var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module2) {
    var baseTrim = require_baseTrim(),
        isObject = require_isObject(),
        isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;

    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }

      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }

      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    module2.exports = toNumber;
  }

}); // node_modules/lodash/debounce.js


var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module2) {
    var isObject = require_isObject(),
        now = require_now(),
        toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max,
        nativeMin = Math.min;

    function debounce2(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      wait = toNumber(wait) || 0;

      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }

        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = void 0;

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = void 0;
        return result;
      }

      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }

      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    module2.exports = debounce2;
  }

}); // node_modules/lodash/throttle.js


var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module2) {
    var debounce2 = require_debounce(),
        isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";

    function throttle2(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }

      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }

    module2.exports = throttle2;
  }

}); // node_modules/slate-react/node_modules/is-hotkey/lib/index.js


var require_lib = __commonJS({
  "node_modules/slate-react/node_modules/is-hotkey/lib/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    var MODIFIERS = {
      alt: "altKey",
      control: "ctrlKey",
      meta: "metaKey",
      shift: "shiftKey"
    };
    var ALIASES = {
      add: "+",
      break: "pause",
      cmd: "meta",
      command: "meta",
      ctl: "control",
      ctrl: "control",
      del: "delete",
      down: "arrowdown",
      esc: "escape",
      ins: "insert",
      left: "arrowleft",
      mod: IS_MAC ? "meta" : "control",
      opt: "alt",
      option: "alt",
      return: "enter",
      right: "arrowright",
      space: " ",
      spacebar: " ",
      up: "arrowup",
      win: "meta",
      windows: "meta"
    };
    var CODES = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      delete: 46,
      meta: 91,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };

    for (f = 1; f < 20; f++) {
      CODES["f" + f] = 111 + f;
    }

    function isHotkey(hotkey, options, event) {
      if (options && !("byKey" in options)) {
        event = options;
        options = null;
      }

      if (!Array.isArray(hotkey)) {
        hotkey = [hotkey];
      }

      var array = hotkey.map(function (string) {
        return parseHotkey(string, options);
      });

      var check = function check2(e2) {
        return array.some(function (object) {
          return compareHotkey(object, e2);
        });
      };

      var ret = event == null ? check : check(event);
      return ret;
    }

    function isCodeHotkey(hotkey, event) {
      return isHotkey(hotkey, event);
    }

    function isKeyHotkey2(hotkey, event) {
      return isHotkey(hotkey, {
        byKey: true
      }, event);
    }

    function parseHotkey(hotkey, options) {
      var byKey = options && options.byKey;
      var ret = {};
      hotkey = hotkey.replace("++", "+add");
      var values = hotkey.split("+");
      var length = values.length;

      for (var k in MODIFIERS) {
        ret[MODIFIERS[k]] = false;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError = void 0;

      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var optional = value.endsWith("?") && value.length > 1;

          if (optional) {
            value = value.slice(0, -1);
          }

          var name = toKeyName(value);
          var modifier = MODIFIERS[name];

          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }

          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ret;
    }

    function compareHotkey(object, event) {
      for (var key in object) {
        var expected = object[key];
        var actual = void 0;

        if (expected == null) {
          continue;
        }

        if (key === "key" && event.key != null) {
          actual = event.key.toLowerCase();
        } else if (key === "which") {
          actual = expected === 91 && event.which === 93 ? 91 : event.which;
        } else {
          actual = event[key];
        }

        if (actual == null && expected === false) {
          continue;
        }

        if (actual !== expected) {
          return false;
        }
      }

      return true;
    }

    function toKeyCode(name) {
      name = toKeyName(name);
      var code = CODES[name] || name.toUpperCase().charCodeAt(0);
      return code;
    }

    function toKeyName(name) {
      name = name.toLowerCase();
      name = ALIASES[name] || name;
      return name;
    }

    exports.default = isHotkey;
    exports.isHotkey = isHotkey;
    exports.isCodeHotkey = isCodeHotkey;
    exports.isKeyHotkey = isKeyHotkey2;
    exports.parseHotkey = parseHotkey;
    exports.compareHotkey = compareHotkey;
    exports.toKeyCode = toKeyCode;
    exports.toKeyName = toKeyName;
    var f;
  }

}); // .beyond/uimport/temp/slate-react/0.72.9.js


var __exports = {};

__export(__exports, {
  AndroidEditable: () => AndroidEditable,
  DefaultEditable: () => Editable$1,
  DefaultElement: () => DefaultElement,
  DefaultLeaf: () => DefaultLeaf,
  DefaultPlaceholder: () => DefaultPlaceholder,
  Editable: () => Editable,
  ReactEditor: () => ReactEditor,
  Slate: () => Slate,
  useEditor: () => useEditor,
  useFocused: () => useFocused,
  useReadOnly: () => useReadOnly,
  useSelected: () => useSelected,
  useSlate: () => useSlate,
  useSlateStatic: () => useSlateStatic,
  withReact: () => withReact
});

module.exports = __toCommonJS(__exports); // node_modules/slate/dist/index.es.js

var import_is_plain_object = require("is-plain-object");

var import_immer = require("immer");

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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
      var n3 = 0;

      for (var i = 0; i < node.children.length; i++, n3++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i];
        var prev = currentNode.children[n3 - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child);

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n3),
            voids: true
          });
          n3--;
        } else if (Element.isElement(_child)) {
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n3),
                voids: true
              });
              n3++;
            } else if (isLast) {
              var _newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n3 + 1),
                voids: true
              });
              n3++;
            }
          }
        } else {
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n3),
                voids: true
              });
              n3--;
            } else if (prev.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n3 - 1),
                voids: true
              });
              n3--;
            } else if (_child.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n3),
                voids: true
              });
              n3--;
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
          var [, p2] = _ref3;
          return _path2.concat(p2);
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
          var p = Path.transform(ancestor, op);
          oldAncestors.push(p);
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
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
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

  for (var i = 0; i < str.length; i++) {
    var char1 = str.charAt(end - i);

    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i - 1);

      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
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

function intersects(x, y) {
  return (x & y) !== 0;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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

    for (var [n3, p] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n3) && !Path.equals(path, p)) {
        return [n3, p];
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
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
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
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
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
    return element.children.some(n3 => Editor.isBlock(editor, n3));
  },

  hasInlines(editor, element) {
    return element.children.some(n3 => Text.isText(n3) || Editor.isInline(editor, n3));
  },

  hasTexts(editor, element) {
    return element.children.every(n3 => Text.isText(n3));
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

    for (var [n3, p] of Node.levels(editor, path)) {
      if (!match(n3, p)) {
        continue;
      }

      levels.push([n3, p]);

      if (!voids && Editor.isVoid(editor, n3)) {
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
        match: n3 => Editor.isBlock(editor, n3)
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

        match = n3 => parent.children.includes(n3);
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
        var [n3] = _ref;
        return voids ? false : Editor.isVoid(editor, n3);
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
        var [, p] = _ref2;
        return p;
      });
      var allPathKeys = new Set(allPaths.map(p => p.join(",")));
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
          var [node, _] = entry;

          if (Element.isElement(node) && node.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }

      var max = getDirtyPaths2(editor).length * 42;
      var m = 0;

      while (getDirtyPaths2(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var _dirtyPath = popDirtyPath(editor);

        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);

          editor.normalizeNode(_entry);
        }

        m++;
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
          continue;
        }

        if (editor.isInline(node)) continue;

        if (Editor.hasInlines(editor, node)) {
          var e2 = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s,
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

        match = n3 => parent.children.includes(n3);
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
      match: n3 => Editor.isBlock(editor, n3)
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
      match: n3 => Editor.isVoid(editor, n3)
    }));
  },

  withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn();
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
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

    for (var p of Path.ancestors(path, options)) {
      var n3 = Node.ancestor(root, p);
      var entry = [n3, p];
      yield entry;
    }
  },

  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }

    return c;
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
    var p = Path.common(path, another);
    var n3 = Node.get(root, p);
    return [n3, p];
  },

  descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
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
    var p = path.slice();
    var n3 = Node.get(root, p);

    while (n3) {
      if (Text.isText(n3) || n3.children.length === 0) {
        break;
      } else {
        n3 = n3.children[0];
        p.push(0);
      }
    }

    return [n3, p];
  },

  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }

    var newRoot = (0, import_immer.produce)({
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

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
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
    var p = path.slice();
    var n3 = Node.get(root, p);

    while (n3) {
      if (Text.isText(n3) || n3.children.length === 0) {
        break;
      } else {
        var i = n3.children.length - 1;
        n3 = n3.children[i];
        p.push(i);
      }
    }

    return [n3, p];
  },

  leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

    for (var p of Path.levels(path, options)) {
      var n3 = Node.get(root, p);
      yield [n3, p];
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
    var p = [];
    var n3 = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n3)) {
        yield [n3, p];
      }

      if (!visited.has(n3) && !Text.isText(n3) && n3.children.length !== 0 && (pass == null || pass([n3, p]) === false)) {
        visited.add(n3);
        var nextIndex = reverse ? n3.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n3 = Node.get(root, p);
        continue;
      }

      if (p.length === 0) {
        break;
      }

      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n3 = Node.get(root, p);
          continue;
        }
      }

      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n3 = Node.get(root, p);
        continue;
      }

      p = Path.parent(p);
      n3 = Node.get(root, p);
      visited.add(n3);
    }
  },

  parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  equals(path, another) {
    return path.length === another.length && path.every((n3, i) => n3 === another[i]);
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

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
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
    return (0, import_immer.produce)(path, p => {
      var {
        affinity = "forward"
      } = options;

      if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
        return;
      }

      if (p === null) {
        return null;
      }

      switch (operation.type) {
        case "insert_node":
          {
            var {
              path: op
            } = operation;

            if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
              p[op.length - 1] += 1;
            }

            break;
          }

        case "remove_node":
          {
            var {
              path: _op
            } = operation;

            if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
              return null;
            } else if (Path.endsBefore(_op, p)) {
              p[_op.length - 1] -= 1;
            }

            break;
          }

        case "merge_node":
          {
            var {
              path: _op2,
              position
            } = operation;

            if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
              p[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p)) {
              p[_op2.length - 1] -= 1;
              p[_op2.length] += position;
            }

            break;
          }

        case "split_node":
          {
            var {
              path: _op3,
              position: _position
            } = operation;

            if (Path.equals(_op3, p)) {
              if (affinity === "forward") {
                p[p.length - 1] += 1;
              } else if (affinity === "backward") ;else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p)) {
              p[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
              p[_op3.length - 1] += 1;
              p[_op3.length] -= _position;
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

            if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
              var copy = onp.slice();

              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                copy[_op4.length - 1] -= 1;
              }

              return copy.concat(p.slice(_op4.length));
            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              } else {
                p[_op4.length - 1] += 1;
              }
            } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              }

              p[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p)) {
              if (Path.equals(onp, p)) {
                p[onp.length - 1] += 1;
              }

              p[_op4.length - 1] -= 1;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
    return (0, import_immer.produce)(point, p => {
      if (p === null) {
        return null;
      }

      var {
        affinity = "forward"
      } = options;
      var {
        path,
        offset
      } = p;

      switch (op.type) {
        case "insert_node":
        case "move_node":
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case "insert_text":
          {
            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
              p.offset += op.text.length;
            }

            break;
          }

        case "merge_node":
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case "remove_text":
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case "remove_node":
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case "split_node":
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === "forward") {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: "forward"
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
    return (0, import_immer.produce)(range, r2 => {
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

var _scrubber = void 0;

var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },

  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }

};

var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a = node[key];
    var b = another[key];

    if ((0, import_is_plain_object.isPlainObject)(a) && (0, import_is_plain_object.isPlainObject)(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
    } else if (a !== b) {
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
      var o = 0;

      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var offset = o;
        o += length;

        if (start.offset <= offset && end.offset >= o) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        }

        if (start.offset !== end.offset && (start.offset === o || end.offset === offset) || start.offset > o || end.offset < offset || end.offset === offset && offset !== 0) {
          next.push(leaf);
          continue;
        }

        var middle = leaf;
        var before = void 0;
        var after = void 0;

        if (end.offset < o) {
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
          throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
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

              for (var [n3, p] of Node.texts(editor)) {
                if (Path.compare(p, _path4) === -1) {
                  _prev = [n3, p];
                } else {
                  next = [n3, p];
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
              throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
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
    editor.children = (0, import_immer.createDraft)(editor.children);
    var selection = editor.selection && (0, import_immer.createDraft)(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = (0, import_immer.finishDraft)(editor.children);

      if (selection) {
        editor.selection = (0, import_immer.isDraft)(selection) ? (0, import_immer.finishDraft)(selection) : selection;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
            match = n3 => Text.isText(n3);
          } else if (editor.isInline(node)) {
            match = n3 => Text.isText(n3) || Editor.isInline(editor, n3);
          } else {
            match = n3 => Editor.isBlock(editor, n3);
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
        match = Path.isPath(at) ? matchPath(editor, at) : n3 => Editor.isBlock(editor, n3);
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
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
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

          match = n3 => parent.children.includes(n3);
        } else {
          match = n3 => Editor.isBlock(editor, n3);
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
        var [n3] = _ref2;
        return n3;
      }).slice(commonPath.length).slice(0, -1);
      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: "highest",
        match: n3 => levels.includes(n3) && hasSingleChildNest(editor, n3)
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
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
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
        match = Path.isPath(at) ? matchPath(editor, at) : n3 => Editor.isBlock(editor, n3);
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, _ref3 => {
        var [, p] = _ref3;
        return Editor.pathRef(editor, p);
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
        match = Path.isPath(at) ? matchPath(editor, at) : n3 => Editor.isBlock(editor, n3);
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
        var [, p] = _ref4;
        return Editor.pathRef(editor, p);
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
        match = Path.isPath(at) ? matchPath(editor, at) : n3 => Editor.isBlock(editor, n3);
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

        for (var k in props) {
          if (k === "children" || k === "text") {
            continue;
          }

          if (compare(props[k], node[k])) {
            hasChanges = true;
            if (node.hasOwnProperty(k)) properties[k] = node[k];

            if (merge) {
              if (props[k] != null) newProperties[k] = merge(node[k], props[k]);
            } else {
              if (props[k] != null) newProperties[k] = props[k];
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
        match = n3 => Editor.isBlock(editor, n3);
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      }

      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);

        match = n3 => n3 === parent;

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
        match = Path.isPath(at) ? matchPath(editor, at) : n3 => Editor.isBlock(editor, n3);
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
        var [, p] = _ref5;
        return Editor.pathRef(editor, p);
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
          match: n3 => Element.isAncestor(node) && node.children.includes(n3),
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
          match = n3 => Editor.isInline(editor, n3) || Text.isText(n3);
        } else {
          match = n3 => Editor.isBlock(editor, n3);
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
        match: editor.isInline(element) ? n3 => Editor.isBlock(editor, n3) : n3 => Editor.isEditor(n3),
        mode: "lowest",
        voids
      }));

      for (var [, rootPath] of roots) {
        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
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
              match: n3 => Element.isAncestor(commonNode) && commonNode.children.includes(n3),
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
  return n3 => n3 === node;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
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

    for (var k in props) {
      if (k === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== "anchor" && k !== "focus" && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
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

      var isCollapsed = false;

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        isCollapsed = true;
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
        match: n3 => Editor.isBlock(editor, n3),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: n3 => Editor.isBlock(editor, n3),
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
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);
      var removedText = "";

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

        if (text.length > 0) {
          editor.apply({
            type: "remove_text",
            path: _path,
            offset,
            text
          });
          removedText = text;
        }
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

        if (_text.length > 0) {
          editor.apply({
            type: "remove_text",
            path: _path3,
            offset: _offset,
            text: _text
          });
          removedText = _text;
        }
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }

      if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
        Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
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
        match: n3 => Editor.isInline(editor, n3),
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
        match: n3 => Editor.isBlock(editor, n3),
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
        var [n3, p] = _ref2;
        var isRoot = p.length === 0;

        if (isRoot) {
          return false;
        }

        if (isBlockEmpty) {
          return true;
        }

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n3) && !editor.isVoid(n3) && !editor.isInline(n3)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n3) && !editor.isVoid(n3) && !editor.isInline(n3)) {
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
        match: n3 => Text.isText(n3) || Editor.isInline(editor, n3),
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
        match: n3 => hasBlocks ? Editor.isBlock(editor, n3) : Text.isText(n3) || Editor.isInline(editor, n3),
        mode: hasBlocks ? "lowest" : "highest",
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: n3 => Text.isText(n3) || Editor.isInline(editor, n3),
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
        match: n3 => Editor.isBlock(editor, n3),
        mode: "lowest",
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: n3 => Text.isText(n3) || Editor.isInline(editor, n3),
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

          var start = Range.start(at);
          var startRef = Editor.pointRef(editor, start);
          var endRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
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

var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms); // node_modules/compute-scroll-into-view/dist/index.module.js


function t(t2) {
  return typeof t2 == "object" && t2 != null && t2.nodeType === 1;
}

function e(t2, e2) {
  return (!e2 || t2 !== "hidden") && t2 !== "visible" && t2 !== "clip";
}

function n(t2, n3) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n3) || e(r2.overflowX, n3) || function (t3) {
      var e2 = function (t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView) return null;

        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);

      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }

  return false;
}

function r(t2, e2, n3, r2, i, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n3 || l >= e2 && d >= n3 ? o - t2 - r2 : l > e2 && d < n3 || o < t2 && d > n3 ? l - e2 + i : 0;
}

function index_module_default(e2, i) {
  var o = window,
      l = i.scrollMode,
      d = i.block,
      u = i.inline,
      h = i.boundary,
      a = i.skipOverflowHiddenElements,
      c = typeof h == "function" ? h : function (t2) {
    return t2 !== h;
  };
  if (!t(e2)) throw new TypeError("Invalid target");

  for (var f = document.scrollingElement || document.documentElement, s = [], p = e2; t(p) && c(p);) {
    if ((p = p.parentElement) === f) {
      s.push(p);
      break;
    }

    p != null && p === document.body && n(p) && !n(document.documentElement) || p != null && n(p, a) && s.push(p);
  }

  for (var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e2.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, E = W.right, M = W.bottom, V = W.left, x = d === "start" || d === "nearest" ? y : d === "end" ? M : y + b / 2, I = u === "center" ? V + H / 2 : u === "end" ? E : V, C = [], T = 0; T < s.length; T++) {
    var k = s[T],
        B = k.getBoundingClientRect(),
        D = B.height,
        O = B.width,
        R = B.top,
        X = B.right,
        Y = B.bottom,
        L = B.left;
    if (l === "if-needed" && y >= 0 && V >= 0 && M <= g && E <= m && y >= R && M <= Y && V >= L && E <= X) return C;
    var S = getComputedStyle(k),
        j = parseInt(S.borderLeftWidth, 10),
        q = parseInt(S.borderTopWidth, 10),
        z = parseInt(S.borderRightWidth, 10),
        A = parseInt(S.borderBottomWidth, 10),
        F = 0,
        G = 0,
        J = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - z : 0,
        K = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - q - A : 0;
    if (f === k) F = d === "start" ? x : d === "end" ? x - g : d === "nearest" ? r(v, v + g, g, q, A, v + x, v + x + b, b) : x - g / 2, G = u === "start" ? I : u === "center" ? I - m / 2 : u === "end" ? I - m : r(w, w + m, m, j, z, w + I, w + I + H, H), F = Math.max(0, F + v), G = Math.max(0, G + w);else {
      F = d === "start" ? x - R - q : d === "end" ? x - Y + A + K : d === "nearest" ? r(R, Y, D, q, A + K, x, x + b, b) : x - (R + D / 2) + K / 2, G = u === "start" ? I - L - j : u === "center" ? I - (L + O / 2) + J / 2 : u === "end" ? I - X + z + J : r(L, X, O, j, z + J, I, I + H, H);
      var N = k.scrollLeft,
          P = k.scrollTop;
      x += P - (F = Math.max(0, Math.min(P + F, k.scrollHeight - D + K))), I += N - (G = Math.max(0, Math.min(N + G, k.scrollWidth - O + J)));
    }
    C.push({
      el: k,
      top: F,
      left: G
    });
  }

  return C;
} // node_modules/scroll-into-view-if-needed/es/index.js


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }

  var canSmoothScroll = ("scrollBehavior" in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: "start",
    inline: "nearest"
  };
}

function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? index_module_default(target, options) : []);
  }

  if (!isTargetAttached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(index_module_default(target, computeOptions), computeOptions.behavior);
}

var es_default = scrollIntoView; // node_modules/slate-react/dist/index.es.js

var import_react = __toESM(require("react"));

var import_direction = __toESM(require_direction());

var import_debounce = __toESM(require_debounce());

var import_throttle = __toESM(require_throttle());

var import_is_hotkey = __toESM(require_lib());

var import_react_dom = __toESM(require("react-dom"));

function _defineProperty2(obj, key, value) {
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

function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose2(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var IS_IOS = typeof navigator !== "undefined" && typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== "undefined" && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== "undefined" && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
var IS_EDGE_LEGACY = typeof navigator !== "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== "undefined" && /Chrome/i.test(navigator.userAgent);
var IS_CHROME_LEGACY = typeof navigator !== "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent);
var IS_FIREFOX_LEGACY = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent);
var IS_QQBROWSER = typeof navigator !== "undefined" && /.*QQBrowser/.test(navigator.userAgent);
var IS_UC_MOBILE = typeof navigator !== "undefined" && /.*UCBrowser/.test(navigator.userAgent);
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent);
var CAN_USE_DOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && typeof globalThis !== "undefined" && globalThis.InputEvent && typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
var useIsomorphicLayoutEffect = CAN_USE_DOM ? import_react.useLayoutEffect : import_react.useEffect;

var String2 = props => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = Path.parent(path);

  if (editor.isVoid(parent)) {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, {
      length: Node.string(parent).length
    });
  }

  if (leaf.text === "" && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && Editor.string(editor, parentPath) === "") {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, {
      isLineBreak: true
    });
  }

  if (leaf.text === "") {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, null);
  }

  if (isLast && leaf.text.slice(-1) === "\n") {
    return /* @__PURE__ */import_react.default.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }

  return /* @__PURE__ */import_react.default.createElement(TextString, {
    text: leaf.text
  });
};

var TextString = props => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = (0, import_react.useRef)(null);

  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : "").concat(isTrailing ? "\n" : "");
  };

  useIsomorphicLayoutEffect(() => {
    var textWithTrailing = getTextContent();

    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
  });

  if (!ref.current) {
    return /* @__PURE__ */import_react.default.createElement("span", {
      "data-slate-string": true,
      ref
    }, getTextContent());
  }

  return /* @__PURE__ */import_react.default.createElement("span", {
    "data-slate-string": true,
    ref
  });
};

var ZeroWidthString = props => {
  var {
    length = 0,
    isLineBreak: isLineBreak2 = false
  } = props;
  return /* @__PURE__ */import_react.default.createElement("span", {
    "data-slate-zero-width": isLineBreak2 ? "n" : "z",
    "data-slate-length": length
  }, "\uFEFF", isLineBreak2 ? /* @__PURE__ */import_react.default.createElement("br", null) : null);
};

var NODE_TO_INDEX = /* @__PURE__ */new WeakMap();
var NODE_TO_PARENT = /* @__PURE__ */new WeakMap();
var EDITOR_TO_WINDOW = /* @__PURE__ */new WeakMap();
var EDITOR_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var ELEMENT_TO_NODE = /* @__PURE__ */new WeakMap();
var NODE_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var NODE_TO_KEY = /* @__PURE__ */new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var IS_READ_ONLY = /* @__PURE__ */new WeakMap();
var IS_FOCUSED = /* @__PURE__ */new WeakMap();
var IS_COMPOSING = /* @__PURE__ */new WeakMap();
var IS_ON_COMPOSITION_END = /* @__PURE__ */new WeakMap();
var EDITOR_ON_COMPOSITION_TEXT = /* @__PURE__ */new WeakMap();
var EDITOR_TO_ON_CHANGE = /* @__PURE__ */new WeakMap();
var NODE_TO_RESTORE_DOM = /* @__PURE__ */new WeakMap();
var PLACEHOLDER_SYMBOL = Symbol("placeholder");

var Leaf = props => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = props2 => /* @__PURE__ */import_react.default.createElement(DefaultLeaf, Object.assign({}, props2))
  } = props;
  var placeholderRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    var editorEl = document.querySelector('[data-slate-editor="true"]');

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = "".concat(placeholderEl.clientHeight, "px");
    return () => {
      editorEl.style.minHeight = "auto";
    };
  }, [placeholderRef, leaf]);
  var children = /* @__PURE__ */import_react.default.createElement(String2, {
    isLast,
    leaf,
    parent,
    text
  });

  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        "data-slate-placeholder": true,
        style: {
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none"
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /* @__PURE__ */import_react.default.createElement(import_react.default.Fragment, null, renderPlaceholder(placeholderProps), children);
  }

  var attributes = {
    "data-slate-leaf": true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};

var MemoizedLeaf = /* @__PURE__ */import_react.default.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && Text.equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});

var DefaultLeaf = props => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */import_react.default.createElement("span", Object.assign({}, attributes), children);
};

var _excluded$32 = ["anchor", "focus"],
    _excluded22 = ["anchor", "focus"];

var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);

var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];

    var rangeOwnProps = _objectWithoutProperties2(range, _excluded$32);

    var otherOwnProps = _objectWithoutProperties2(other, _excluded22);

    if (!Range.equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }

  return true;
};

function useContentKey(node) {
  var contentKeyRef = (0, import_react.useRef)(0);
  var updateAnimationFrameRef = (0, import_react.useRef)(null);
  var [, setForceRerenderCounter] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    NODE_TO_RESTORE_DOM.set(node, () => {
      if (updateAnimationFrameRef.current) {
        return;
      }

      updateAnimationFrameRef.current = requestAnimationFrame(() => {
        setForceRerenderCounter(state => state + 1);
        updateAnimationFrameRef.current = null;
      });
      contentKeyRef.current++;
    });
    return () => {
      NODE_TO_RESTORE_DOM.delete(node);
    };
  }, [node]);

  if (updateAnimationFrameRef.current) {
    cancelAnimationFrame(updateAnimationFrameRef.current);
    updateAnimationFrameRef.current = null;
  }

  return contentKeyRef.current;
}

var Text2 = props => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = (0, import_react.useRef)(null);
  var leaves = Text.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];

  for (var i = 0; i < leaves.length; i++) {
    var leaf = leaves[i];
    children.push( /* @__PURE__ */import_react.default.createElement(MemoizedLeaf, {
      isLast: isLast && i === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder,
      leaf,
      text,
      parent,
      renderLeaf
    }));
  }

  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  var contentKey = IS_ANDROID ? useContentKey(text) : void 0;
  return /* @__PURE__ */import_react.default.createElement("span", {
    "data-slate-node": "text",
    ref,
    key: contentKey
  }, children);
};

var MemoizedText = /* @__PURE__ */import_react.default.memo(Text2, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});

var Element2 = props => {
  var {
    decorations,
    element,
    renderElement = p => /* @__PURE__ */import_react.default.createElement(DefaultElement, Object.assign({}, p)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var ref = (0, import_react.useRef)(null);
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  });
  var attributes = {
    "data-slate-node": "element",
    ref
  };

  if (isInline) {
    attributes["data-slate-inline"] = true;
  }

  if (!isInline && Editor.hasInlines(editor, element)) {
    var text = Node.string(element);
    var dir = (0, import_direction.default)(text);

    if (dir === "rtl") {
      attributes.dir = dir;
    }
  }

  if (Editor.isVoid(editor, element)) {
    attributes["data-slate-void"] = true;

    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }

    var Tag = isInline ? "span" : "div";
    var [[_text]] = Node.texts(element);
    children = readOnly ? null : /* @__PURE__ */import_react.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */import_react.default.createElement(MemoizedText, {
      renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  }

  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);

    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(element, ref.current);
      ELEMENT_TO_NODE.set(ref.current, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  });
  var content = renderElement({
    attributes,
    children,
    element
  });

  if (IS_ANDROID) {
    var contentKey = useContentKey(element);
    return /* @__PURE__ */import_react.default.createElement(import_react.Fragment, {
      key: contentKey
    }, content);
  }

  return content;
};

var MemoizedElement = /* @__PURE__ */import_react.default.memo(Element2, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && Range.equals(prev.selection, next.selection));
});

var DefaultElement = props => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? "span" : "div";
  return /* @__PURE__ */import_react.default.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: "relative"
    }
  }), children);
};

var EditorContext = /* @__PURE__ */(0, import_react.createContext)(null);

var useSlateStatic = () => {
  var editor = (0, import_react.useContext)(EditorContext);

  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

var DecorateContext = /* @__PURE__ */(0, import_react.createContext)(() => []);

var useDecorate = () => {
  return (0, import_react.useContext)(DecorateContext);
};

var SelectedContext = /* @__PURE__ */(0, import_react.createContext)(false);

var useSelected = () => {
  return (0, import_react.useContext)(SelectedContext);
};

var useChildren = props => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = Element.isElement(node) && !editor.isInline(node) && Editor.hasInlines(editor, node);

  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n3 = node.children[i];
    var key = ReactEditor.findKey(editor, n3);
    var range = Editor.range(editor, p);
    var sel = selection && Range.intersection(range, selection);
    var ds = decorate([n3, p]);

    for (var dec of decorations) {
      var d = Range.intersection(dec, range);

      if (d) {
        ds.push(d);
      }
    }

    if (Element.isElement(n3)) {
      children.push( /* @__PURE__ */import_react.default.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /* @__PURE__ */import_react.default.createElement(MemoizedElement, {
        decorations: ds,
        element: n3,
        key: key.id,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        selection: sel
      })));
    } else {
      children.push( /* @__PURE__ */import_react.default.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder,
        renderLeaf,
        text: n3
      }));
    }

    NODE_TO_INDEX.set(n3, i);
    NODE_TO_PARENT.set(n3, node);
  }

  return children;
};

var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  splitBlock: "shift?+enter",
  undo: "mod+z"
};
var APPLE_HOTKEYS = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};

var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && (0, import_is_hotkey.isKeyHotkey)(generic);
  var isApple = apple && (0, import_is_hotkey.isKeyHotkey)(apple);
  var isWindows = windows && (0, import_is_hotkey.isKeyHotkey)(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};

var Hotkeys = {
  isBold: create("bold"),
  isCompose: create("compose"),
  isMoveBackward: create("moveBackward"),
  isMoveForward: create("moveForward"),
  isDeleteBackward: create("deleteBackward"),
  isDeleteForward: create("deleteForward"),
  isDeleteLineBackward: create("deleteLineBackward"),
  isDeleteLineForward: create("deleteLineForward"),
  isDeleteWordBackward: create("deleteWordBackward"),
  isDeleteWordForward: create("deleteWordForward"),
  isExtendBackward: create("extendBackward"),
  isExtendForward: create("extendForward"),
  isExtendLineBackward: create("extendLineBackward"),
  isExtendLineForward: create("extendLineForward"),
  isItalic: create("italic"),
  isMoveLineBackward: create("moveLineBackward"),
  isMoveLineForward: create("moveLineForward"),
  isMoveWordBackward: create("moveWordBackward"),
  isMoveWordForward: create("moveWordForward"),
  isRedo: create("redo"),
  isSplitBlock: create("splitBlock"),
  isTransposeCharacter: create("transposeCharacter"),
  isUndo: create("undo")
};
var ReadOnlyContext = /* @__PURE__ */(0, import_react.createContext)(false);

var useReadOnly = () => {
  return (0, import_react.useContext)(ReadOnlyContext);
};

var SlateContext = /* @__PURE__ */(0, import_react.createContext)(null);

var useSlate = () => {
  var context = (0, import_react.useContext)(SlateContext);

  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }

  var [editor] = context;
  return editor;
};

var getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};

var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};

var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};

var isDOMNode = value => {
  var window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};

var isDOMSelection = value => {
  var window2 = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window2 && value instanceof window2.Selection;
};

var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};

var isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData("text/plain") !== "" && event.clipboardData.types.length === 1;
};

var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint;

  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? "backward" : "forward");
    isLast = index < offset;

    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? "backward" : "forward");
    }

    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  }

  return [node, offset];
};

var hasShadowRoot = () => {
  return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};

var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false;

  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute("contenteditable") === "false") {
    if (triedForward && triedBackward) {
      break;
    }

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = "backward";
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = "forward";
      continue;
    }

    child = childNodes[i];
    index = i;
    i += direction === "forward" ? 1 : -1;
  }

  return [child, index];
};

var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};

var getPlainText = domNode => {
  var text = "";

  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }

  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }

    var display = getComputedStyle(domNode).getPropertyValue("display");

    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }

  return text;
};

var catchSlateFragment = /data-slate-fragment="(.+?)"/m;

var getSlateFragmentAttribute = dataTransfer => {
  var htmlData = dataTransfer.getData("text/html");
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};

var getClipboardData = dataTransfer => {
  if (!dataTransfer.getData("application/x-slate-fragment")) {
    var fragment = getSlateFragmentAttribute(dataTransfer);

    if (fragment) {
      var clipboardData = new DataTransfer();
      dataTransfer.types.forEach(type => {
        clipboardData.setData(type, dataTransfer.getData(type));
      });
      clipboardData.setData("application/x-slate-fragment", fragment);
      return clipboardData;
    }
  }

  return dataTransfer;
};

var _excluded$22 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"];

function ownKeys$12(object, enumerableOnly) {
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

function _objectSpread$12(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$12(Object(source), true).forEach(function (key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$12(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Children = props => /* @__PURE__ */import_react.default.createElement(import_react.default.Fragment, null, useChildren(props));

var Editable$1 = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props2 => /* @__PURE__ */import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component = "div"
  } = props,
      attributes = _objectWithoutProperties2(props, _excluded$22);

  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var deferredOperations = (0, import_react.useRef)([]);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isComposing: false,
    hasInsertPrefixInCompositon: false,
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  useIsomorphicLayoutEffect(() => {
    var window2;

    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }

    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
      return;
    }

    var hasDomSelection = domSelection.type !== "None";

    if (!selection && !hasDomSelection) {
      return;
    }

    var editorElement = EDITOR_TO_ELEMENT.get(editor);
    var hasDomSelectionInEditor = false;

    if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
      hasDomSelectionInEditor = true;
    }

    if (hasDomSelection && hasDomSelectionInEditor && selection) {
      var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: true,
        suppressThrow: true
      });

      if (slateRange && Range.equals(slateRange, selection)) {
        return;
      }
    }

    if (selection && !ReactEditor.hasRange(editor, selection)) {
      editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: false
      });
      return;
    }

    state.isUpdatingSelection = true;
    var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

    if (newDomRange) {
      if (Range.isBackward(selection)) {
        domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
      } else {
        domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
      }

      scrollSelectionIntoView(editor, newDomRange);
    } else {
      domSelection.removeAllRanges();
    }

    setTimeout(() => {
      if (newDomRange && IS_FIREFOX) {
        var el = ReactEditor.toDOMNode(editor, editor);
        el.focus();
      }

      state.isUpdatingSelection = false;
    });
  });
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    if (!state.isComposing && !state.isUpdatingSelection && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();

      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }

      if (!domSelection) {
        return Transforms.deselect(editor);
      }

      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);

      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        Transforms.select(editor, range);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var onDOMBeforeInput = (0, import_react.useCallback)(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || void 0;

      if (type === "insertCompositionText" || type === "deleteCompositionText") {
        return;
      }

      var native = false;

      if (type === "insertText" && selection && Range.isCollapsed(selection) && event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && selection.anchor.offset !== 0) {
        native = true;

        if (editor.marks) {
          native = false;
        }

        var {
          anchor
        } = selection;
        var inline = Editor.above(editor, {
          at: anchor,
          match: n3 => Editor.isInline(editor, n3),
          mode: "highest"
        });

        if (inline) {
          var [, inlinePath] = inline;

          if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
            native = false;
          }
        }
      }

      if (!native) {
        event.preventDefault();
      }

      if (!type.startsWith("delete") || type.startsWith("deleteBy")) {
        var [targetRange] = event.getTargetRanges();

        if (targetRange) {
          var range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: false
          });

          if (!selection || !Range.equals(selection, range)) {
            Transforms.select(editor, range);
          }
        }
      }

      if (selection && Range.isExpanded(selection) && type.startsWith("delete")) {
        var direction = type.endsWith("Backward") ? "backward" : "forward";
        Editor.deleteFragment(editor, {
          direction
        });
        return;
      }

      switch (type) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          {
            Editor.deleteFragment(editor);
            break;
          }

        case "deleteContent":
        case "deleteContentForward":
          {
            Editor.deleteForward(editor);
            break;
          }

        case "deleteContentBackward":
          {
            Editor.deleteBackward(editor);
            break;
          }

        case "deleteEntireSoftLine":
          {
            Editor.deleteBackward(editor, {
              unit: "line"
            });
            Editor.deleteForward(editor, {
              unit: "line"
            });
            break;
          }

        case "deleteHardLineBackward":
          {
            Editor.deleteBackward(editor, {
              unit: "block"
            });
            break;
          }

        case "deleteSoftLineBackward":
          {
            Editor.deleteBackward(editor, {
              unit: "line"
            });
            break;
          }

        case "deleteHardLineForward":
          {
            Editor.deleteForward(editor, {
              unit: "block"
            });
            break;
          }

        case "deleteSoftLineForward":
          {
            Editor.deleteForward(editor, {
              unit: "line"
            });
            break;
          }

        case "deleteWordBackward":
          {
            Editor.deleteBackward(editor, {
              unit: "word"
            });
            break;
          }

        case "deleteWordForward":
          {
            Editor.deleteForward(editor, {
              unit: "word"
            });
            break;
          }

        case "insertLineBreak":
        case "insertParagraph":
          {
            Editor.insertBreak(editor);
            break;
          }

        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText":
          {
            if (type === "insertFromComposition") {
              state.isComposing && setIsComposing(false);
              state.isComposing = false;
            }

            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === "string") {
              if (native) {
                deferredOperations.current.push(() => Editor.insertText(editor, data));
              } else {
                Editor.insertText(editor, data);
              }
            }

            break;
          }
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      ref.current.addEventListener("beforeinput", onDOMBeforeInput);
    }

    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        ref.current.removeEventListener("beforeinput", onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /* @__PURE__ */import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */import_react.default.createElement(Component, Object.assign({
    role: readOnly ? void 0 : "textbox"
  }, attributes, {
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : "false",
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : "false",
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: !readOnly,
    zindex: -1,
    suppressContentEditableWarning: true,
    ref,
    style: _objectSpread$12({
      position: "relative",
      outline: "none",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    }, style),
    onBeforeInput: (0, import_react.useCallback)(event => {
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && hasEditableTarget(editor, event.target)) {
        event.preventDefault();

        if (!state.isComposing) {
          var text = event.data;
          Editor.insertText(editor, text);
        }
      }
    }, [readOnly]),
    onInput: (0, import_react.useCallback)(event => {
      for (var op of deferredOperations.current) {
        op();
      }

      deferredOperations.current = [];
    }, []),
    onBlur: (0, import_react.useCallback)(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }

      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);

      if (relatedTarget === el) {
        return;
      }

      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }

      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (Element.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }

      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);

        if (Editor.hasPath(editor, path)) {
          var lookupNode = Node.get(editor, path);

          if (lookupNode === node) {
            var _start = Editor.start(editor, path);

            var end = Editor.end(editor, path);
            var startVoid = Editor.void(editor, {
              at: _start
            });
            var endVoid = Editor.void(editor, {
              at: end
            });

            if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
              var range = Editor.range(editor, _start);
              Transforms.select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        state.isComposing && setIsComposing(false);
        state.isComposing = false;

        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_QQBROWSER && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          Editor.insertText(editor, event.data);
        }

        if (editor.selection && Range.isCollapsed(editor.selection)) {
          var leafPath = editor.selection.anchor.path;
          var currentTextNode = Node.leaf(editor, leafPath);

          if (state.hasInsertPrefixInCompositon) {
            state.hasInsertPrefixInCompositon = false;
            Editor.withoutNormalizing(editor, () => {
              var text = currentTextNode.text.replace(/^\uFEFF/, "");
              Transforms.delete(editor, {
                distance: currentTextNode.text.length,
                reverse: true
              });
              Editor.insertText(editor, text);
            });
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        var {
          selection,
          marks
        } = editor;

        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
            return;
          }

          var inline = Editor.above(editor, {
            match: n3 => Editor.isInline(editor, n3),
            mode: "highest"
          });

          if (inline) {
            var [, inlinePath] = inline;

            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }

          if (marks) {
            state.hasInsertPrefixInCompositon = true;
            Transforms.insertNodes(editor, _objectSpread$12({
              text: "\uFEFF"
            }, marks), {
              select: true
            });
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;

        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node = Node.parent(editor, selection.anchor.path);

            if (Editor.isVoid(editor, node)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: (0, import_react.useCallback)(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        var node = ReactEditor.toSlateNode(editor, event.target);

        if (Editor.isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: (0, import_react.useCallback)(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = Editor.isVoid(editor, node) || Editor.void(editor, {
          at: path,
          voids: true
        });

        if (voidMatch) {
          var range = Editor.range(editor, path);
          Transforms.select(editor, range);
        }

        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, "drag");
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: (0, import_react.useCallback)(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        var draggedRange = editor.selection;
        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        Transforms.select(editor, range);

        if (state.isDraggingInternally) {
          if (draggedRange && !Range.equals(draggedRange, range) && !Editor.void(editor, {
            at: range,
            voids: true
          })) {
            Transforms.delete(editor, {
              at: draggedRange
            });
          }
        }

        ReactEditor.insertData(editor, data);

        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }

      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDrop]),
    onDragEnd: (0, import_react.useCallback)(event => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }

      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDragEnd]),
    onFocus: (0, import_react.useCallback)(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;

        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }

        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: (0, import_react.useCallback)(event => {
      if (!readOnly && !state.isComposing && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onKeyDown)) {
        var {
          nativeEvent
        } = event;
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = (0, import_direction.default)(Node.string(element)) === "rtl";

        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;

          if (typeof maybeHistoryEditor.redo === "function") {
            maybeHistoryEditor.redo();
          }

          return;
        }

        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;

          if (typeof _maybeHistoryEditor.undo === "function") {
            _maybeHistoryEditor.undo();
          }

          return;
        }

        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            reverse: true
          });
          return;
        }

        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line"
          });
          return;
        }

        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus",
            reverse: true
          });
          return;
        }

        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus"
          });
          return;
        }

        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "start"
            });
          }

          return;
        }

        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "end"
            });
          }

          return;
        }

        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }

          Transforms.move(editor, {
            unit: "word",
            reverse: !isRTL
          });
          return;
        }

        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }

          Transforms.move(editor, {
            unit: "word",
            reverse: isRTL
          });
          return;
        }

        if (!HAS_BEFORE_INPUT_SUPPORT) {
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }

          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            Editor.insertBreak(editor);
            return;
          }

          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "line"
              });
            }

            return;
          }

          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "line"
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "word"
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();

            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "word"
              });
            }

            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && Range.isCollapsed(selection)) {
              var currentNode = Node.parent(editor, selection.anchor.path);

              if (Element.isElement(currentNode) && Editor.isVoid(editor, currentNode) && Editor.isInline(editor, currentNode)) {
                event.preventDefault();
                Editor.deleteBackward(editor, {
                  unit: "block"
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: (0, import_react.useCallback)(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /* @__PURE__ */import_react.default.createElement(Children, {
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};

var DefaultPlaceholder = _ref => {
  var {
    attributes,
    children
  } = _ref;
  return /* @__PURE__ */import_react.default.createElement("span", Object.assign({}, attributes), children);
};

var defaultDecorate = () => [];

var defaultScrollSelectionIntoView = (editor, domRange) => {
  if (!editor.selection || editor.selection && Range.isCollapsed(editor.selection)) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    es_default(leafEl, {
      scrollMode: "if-needed"
    });
    delete leafEl.getBoundingClientRect;
  }
};

var hasTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};

var hasEditableTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
    editable: true
  });
};

var isTargetInsideNonReadonlyVoid = (editor, target) => {
  if (IS_READ_ONLY.get(editor)) return false;
  var slateNode = hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
  return Editor.isVoid(editor, slateNode);
};

var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }

  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.isDefaultPrevented() || event.isPropagationStopped();
};

var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }

  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.defaultPrevented;
};

function getDiffStart(prev, next) {
  var length = Math.min(prev.length, next.length);

  for (var i = 0; i < length; i++) {
    if (prev.charAt(i) !== next.charAt(i)) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}

function getDiffEnd(prev, next, max) {
  var prevLength = prev.length;
  var nextLength = next.length;
  var length = Math.min(prevLength, nextLength, max);

  for (var i = 0; i < length; i++) {
    var prevChar = prev.charAt(prevLength - i - 1);
    var nextChar = next.charAt(nextLength - i - 1);
    if (prevChar !== nextChar) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}

function getDiffOffsets(prev, next) {
  if (prev === next) return null;
  var start = getDiffStart(prev, next);
  if (start === null) return null;
  var maxEnd = Math.min(prev.length - start, next.length - start);
  var end = getDiffEnd(prev, next, maxEnd);
  if (end === null) return null;
  return {
    start,
    end
  };
}

function sliceText(text, offsets) {
  return text.slice(offsets.start, text.length - offsets.end);
}

function diffText(prev, next) {
  if (prev === void 0 || next === void 0) return null;
  var offsets = getDiffOffsets(prev, next);
  if (offsets == null) return null;
  var insertText = sliceText(next, offsets);
  var removeText = sliceText(prev, offsets);
  return {
    start: offsets.start,
    end: prev.length - offsets.end,
    insertText,
    removeText
  };
}

function combineInsertedText(insertedText) {
  return insertedText.reduce((acc, _ref) => {
    var {
      text
    } = _ref;
    return "".concat(acc).concat(text.insertText);
  }, "");
}

function getTextInsertion(editor, domNode) {
  var node = ReactEditor.toSlateNode(editor, domNode);

  if (!Text.isText(node)) {
    return void 0;
  }

  var prevText = node.text;
  var nextText = domNode.textContent;

  if (nextText.endsWith("\n")) {
    nextText = nextText.slice(0, nextText.length - 1);
  }

  if (nextText !== prevText) {
    var textDiff = diffText(prevText, nextText);

    if (textDiff !== null) {
      var textPath = ReactEditor.findPath(editor, node);
      return {
        text: textDiff,
        path: textPath
      };
    }
  }

  return void 0;
}

function normalizeTextInsertionRange(editor, range, _ref2) {
  var {
    path,
    text
  } = _ref2;
  var insertionRange = {
    anchor: {
      path,
      offset: text.start
    },
    focus: {
      path,
      offset: text.end
    }
  };

  if (!range || !Range.isCollapsed(range)) {
    return insertionRange;
  }

  var {
    insertText,
    removeText
  } = text;
  var isSingleCharacterInsertion = insertText.length === 1 || removeText.length === 1;

  if (isSingleCharacterInsertion && Path.equals(range.anchor.path, path)) {
    var [_text] = Array.from(Editor.nodes(editor, {
      at: range,
      match: Text.isText
    }));

    if (_text) {
      var [node] = _text;
      var {
        anchor
      } = range;
      var characterBeforeAnchor = node.text[anchor.offset - 1];
      var characterAfterAnchor = node.text[anchor.offset];

      if (insertText.length === 1 && insertText === characterAfterAnchor) {
        return range;
      }

      if (removeText.length === 1 && removeText === characterBeforeAnchor) {
        return {
          anchor: {
            path,
            offset: anchor.offset - 1
          },
          focus: {
            path,
            offset: anchor.offset
          }
        };
      }
    }
  }

  return insertionRange;
}

var n2 = 0;
var Key = class {
  constructor() {
    this.id = "".concat(n2++);
  }

};
var ReactEditor = {
  getWindow(editor) {
    var window2 = EDITOR_TO_WINDOW.get(editor);

    if (!window2) {
      throw new Error("Unable to find a host window element for this editor");
    }

    return window2;
  },

  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);

    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }

    return key;
  },

  findPath(editor, node) {
    var path = [];
    var child = node;

    while (true) {
      var parent = NODE_TO_PARENT.get(child);

      if (parent == null) {
        if (Editor.isEditor(child)) {
          return path;
        } else {
          break;
        }
      }

      var i = NODE_TO_INDEX.get(child);

      if (i == null) {
        break;
      }

      path.unshift(i);
      child = parent;
    }

    throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(node)));
  },

  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();

    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }

    return el.ownerDocument;
  },

  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },

  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },

  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);

    if (root.activeElement === el) {
      el.blur();
    }
  },

  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);

    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },

  deselect(editor) {
    ReactEditor.toDOMNode(editor, editor);
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }

    if (selection) {
      Transforms.deselect(editor);
    }
  },

  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl;

    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }

    if (!targetEl) {
      return false;
    }

    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === "boolean" && targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute("data-slate-zero-width"));
  },

  insertData(editor, data) {
    editor.insertData(data);
  },

  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },

  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },

  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },

  toDOMNode(editor, node) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = Editor.isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));

    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(node)));
    }

    return domNode;
  },

  toDOMPoint(editor, point) {
    var [node] = Editor.node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint;

    if (Editor.void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    }

    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;

    for (var text of texts) {
      var domNode = text.childNodes[0];

      if (domNode == null || domNode.textContent == null) {
        continue;
      }

      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute("data-slate-length");
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;

      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }

      start = end;
    }

    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(point)));
    }

    return domPoint;
  },

  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = Range.isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = Range.isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window2 = ReactEditor.getWindow(editor);
    var domRange = window2.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute("data-slate-zero-width");
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute("data-slate-zero-width");
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },

  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

    if (domEl && !domEl.hasAttribute("data-slate-node")) {
      domEl = domEl.closest("[data-slate-node]");
    }

    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;

    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }

    return node;
  },

  findEventRange(editor, event) {
    if ("nativeEvent" in event) {
      event = event.nativeEvent;
    }

    var {
      clientX: x,
      clientY: y,
      target
    } = event;

    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node);

    if (Editor.isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = Editor.point(editor, path, {
        edge: isPrev ? "start" : "end"
      });
      var point = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);

      if (point) {
        var _range = Editor.range(editor, point);

        return _range;
      }
    }

    var domRange;
    var {
      document: document2
    } = ReactEditor.getWindow(editor);

    if (document2.caretRangeFromPoint) {
      domRange = document2.caretRangeFromPoint(x, y);
    } else {
      var position = document2.caretPositionFromPoint(x, y);

      if (position) {
        domRange = document2.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }

    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },

  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;

    if (parentNode) {
      var _domNode$textContent;

      var voidNode = parentNode.closest('[data-slate-void="true"]');
      var leafNode = parentNode.closest("[data-slate-leaf]");
      var domNode = null;

      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');

        if (textNode) {
          var window2 = ReactEditor.getWindow(editor);
          var range = window2.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(contents.querySelectorAll("[contenteditable=false]"))];
          removals.forEach(el => {
            el.parentNode.removeChild(el);
          });
          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        leafNode = voidNode.querySelector("[data-slate-leaf]");

        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll("[data-slate-zero-width]").forEach(el => {
            offset -= el.textContent.length;
          });
        }
      }

      if (domNode && offset === domNode.textContent.length && (parentNode.hasAttribute("data-slate-zero-width") || IS_FIREFOX && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.endsWith("\n\n"))) {
        offset--;
      }
    }

    if (!textNode) {
      if (suppressThrow) {
        return null;
      }

      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    }

    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },

  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;

    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset;

        if (IS_CHROME && hasShadowRoot()) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }

    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }

    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });

    if (!anchor) {
      return null;
    }

    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });

    if (!focus) {
      return null;
    }

    var range = {
      anchor,
      focus
    };

    if (Range.isExpanded(range) && Range.isForward(range) && isDOMElement(focusNode) && Editor.void(editor, {
      at: range.focus,
      mode: "highest"
    })) {
      range = Editor.unhangRange(editor, range, {
        voids: true
      });
    }

    return range;
  },

  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
  }

};

function gatherMutationData(editor, mutations) {
  var addedNodes = [];
  var removedNodes = [];
  var insertedText = [];
  var characterDataMutations = [];
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case "childList":
        {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(addedNode => {
              addedNodes.push(addedNode);
            });
          }

          mutation.removedNodes.forEach(removedNode => {
            removedNodes.push(removedNode);
          });
          break;
        }

      case "characterData":
        {
          characterDataMutations.push(mutation);
          var {
            parentNode
          } = mutation.target;

          if (!parentNode) {
            return;
          }

          var textInsertion = getTextInsertion(editor, parentNode);

          if (!textInsertion) {
            return;
          }

          if (insertedText.some(_ref => {
            var {
              path
            } = _ref;
            return Path.equals(path, textInsertion.path);
          })) {
            return;
          }

          insertedText.push(textInsertion);
        }
    }
  });
  return {
    addedNodes,
    removedNodes,
    insertedText,
    characterDataMutations
  };
}

var isLineBreak = (editor, _ref2) => {
  var {
    addedNodes
  } = _ref2;
  var {
    selection
  } = editor;
  var parentNode = selection ? Node.parent(editor, selection.anchor.path) : null;
  var parentDOMNode = parentNode ? ReactEditor.toDOMNode(editor, parentNode) : null;

  if (!parentDOMNode) {
    return false;
  }

  return addedNodes.some(addedNode => addedNode instanceof HTMLElement && addedNode.tagName === (parentDOMNode === null || parentDOMNode === void 0 ? void 0 : parentDOMNode.tagName));
};

var isDeletion = (_, _ref3) => {
  var {
    removedNodes
  } = _ref3;
  return removedNodes.length > 0;
};

var isReplaceExpandedSelection = (_ref4, _ref5) => {
  var {
    selection
  } = _ref4;
  var {
    removedNodes
  } = _ref5;
  return selection ? Range.isExpanded(selection) && removedNodes.length > 0 : false;
};

var isTextInsertion = (_, _ref6) => {
  var {
    insertedText
  } = _ref6;
  return insertedText.length > 0;
};

var isRemoveLeafNodes = (_, _ref7) => {
  var {
    addedNodes,
    characterDataMutations,
    removedNodes
  } = _ref7;
  return removedNodes.length > 0 && addedNodes.length === 0 && characterDataMutations.length > 0;
};

var AndroidInputManager = class {
  constructor(editor, restoreDOM) {
    this.editor = editor;
    this.restoreDOM = restoreDOM;

    this.flush = mutations => {
      try {
        this.reconcileMutations(mutations);
      } catch (err) {
        console.error(err);
        this.restoreDOM();
      }
    };

    this.reconcileMutations = mutations => {
      var mutationData = gatherMutationData(this.editor, mutations);
      var {
        insertedText,
        removedNodes
      } = mutationData;

      if (isReplaceExpandedSelection(this.editor, mutationData)) {
        var text = combineInsertedText(insertedText);
        this.replaceExpandedSelection(text);
      } else if (isLineBreak(this.editor, mutationData)) {
        this.insertBreak();
      } else if (isRemoveLeafNodes(this.editor, mutationData)) {
        this.removeLeafNodes(removedNodes);
      } else if (isDeletion(this.editor, mutationData)) {
        this.deleteBackward();
      } else if (isTextInsertion(this.editor, mutationData)) {
        this.insertText(insertedText);
      }
    };

    this.insertText = insertedText => {
      var {
        selection
      } = this.editor;

      if (IS_COMPOSING.get(this.editor) || IS_ON_COMPOSITION_END.get(this.editor)) {
        EDITOR_ON_COMPOSITION_TEXT.set(this.editor, insertedText);
        IS_ON_COMPOSITION_END.set(this.editor, false);
        return;
      }

      insertedText.forEach(insertion => {
        var text = insertion.text.insertText;
        var at = normalizeTextInsertionRange(this.editor, selection, insertion);
        Transforms.setSelection(this.editor, at);
        Editor.insertText(this.editor, text);
      });
    };

    this.insertBreak = () => {
      var {
        selection
      } = this.editor;
      Editor.insertBreak(this.editor);
      this.restoreDOM();

      if (selection) {
        setTimeout(() => {
          if (this.editor.selection && Range.equals(selection, this.editor.selection)) {
            Transforms.move(this.editor);
          }
        }, 100);
      }
    };

    this.replaceExpandedSelection = text => {
      Editor.deleteFragment(this.editor);

      if (text.length) {
        Editor.insertText(this.editor, text);
      }

      this.restoreDOM();
    };

    this.deleteBackward = () => {
      Editor.deleteBackward(this.editor);
      ReactEditor.focus(this.editor);
      this.restoreDOM();
    };

    this.removeLeafNodes = nodes => {
      for (var node of nodes) {
        var slateNode = ReactEditor.toSlateNode(this.editor, node);

        if (slateNode) {
          var path = ReactEditor.findPath(this.editor, slateNode);
          Transforms.delete(this.editor, {
            at: path
          });
          this.restoreDOM();
        }
      }
    };

    this.editor = editor;
    this.restoreDOM = restoreDOM;
  }

};

function useMutationObserver(node, callback, options) {
  var [mutationObserver] = (0, import_react.useState)(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    mutationObserver.disconnect();
  });
  (0, import_react.useEffect)(() => {
    if (!node.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }

    mutationObserver.observe(node.current, options);
    return mutationObserver.disconnect.bind(mutationObserver);
  });
}

var MUTATION_OBSERVER_CONFIG$1 = {
  childList: true,
  characterData: true,
  subtree: true
};

function findClosestKnowSlateNode(domNode) {
  var _domEl;

  var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

  if (domEl && !domEl.hasAttribute("data-slate-node")) {
    domEl = domEl.closest("[data-slate-node]");
  }

  var slateNode = domEl && ELEMENT_TO_NODE.get(domEl);

  if (slateNode) {
    return slateNode;
  }

  return (_domEl = domEl) !== null && _domEl !== void 0 && _domEl.parentElement ? findClosestKnowSlateNode(domEl.parentElement) : null;
}

function useRestoreDom(node, receivedUserInput) {
  var editor = useSlateStatic();
  var mutatedNodes = (0, import_react.useRef)( /* @__PURE__ */new Set());
  var handleDOMMutation = (0, import_react.useCallback)(mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    mutations.forEach(_ref => {
      var {
        target
      } = _ref;
      var slateNode = findClosestKnowSlateNode(target);

      if (!slateNode) {
        return;
      }

      return mutatedNodes.current.add(slateNode);
    });
  }, []);
  useMutationObserver(node, handleDOMMutation, MUTATION_OBSERVER_CONFIG$1);
  mutatedNodes.current.clear();
  var restore = (0, import_react.useCallback)(() => {
    var mutated = Array.from(mutatedNodes.current.values());
    var nodesToRestore = mutated.filter(n3 => !mutated.some(m => Path.isParent(ReactEditor.findPath(editor, m), ReactEditor.findPath(editor, n3))));
    nodesToRestore.forEach(n3 => {
      var _NODE_TO_RESTORE_DOM$;

      (_NODE_TO_RESTORE_DOM$ = NODE_TO_RESTORE_DOM.get(n3)) === null || _NODE_TO_RESTORE_DOM$ === void 0 ? void 0 : _NODE_TO_RESTORE_DOM$();
    });
    mutatedNodes.current.clear();
  }, []);
  return restore;
}

function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = (0, import_react.useRef)(false);
  var animationFrameRef = (0, import_react.useRef)(null);
  var onUserInput = (0, import_react.useCallback)(() => {
    if (receivedUserInput.current === false) {
      var window2 = ReactEditor.getWindow(editor);
      receivedUserInput.current = true;

      if (animationFrameRef.current) {
        window2.cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = window2.requestAnimationFrame(() => {
        receivedUserInput.current = false;
        animationFrameRef.current = null;
      });
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (receivedUserInput.current) {
      receivedUserInput.current = false;
    }
  });
  return {
    receivedUserInput,
    onUserInput
  };
}

var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  subtree: true
};

function useAndroidInputManager(node) {
  var editor = useSlateStatic();
  var {
    receivedUserInput,
    onUserInput
  } = useTrackUserInput();
  var restoreDom = useRestoreDom(node, receivedUserInput);
  var inputManager = (0, import_react.useMemo)(() => new AndroidInputManager(editor, restoreDom), [restoreDom, editor]);
  var timeoutId = (0, import_react.useRef)(null);
  var isReconciling = (0, import_react.useRef)(false);
  var flush = (0, import_react.useCallback)(mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    isReconciling.current = true;
    inputManager.flush(mutations);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      isReconciling.current = false;
      timeoutId.current = null;
    }, 250);
  }, []);
  useMutationObserver(node, flush, MUTATION_OBSERVER_CONFIG);
  return {
    isReconciling,
    onUserInput
  };
}

var _excluded$12 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "style", "as"];

function ownKeys2(object, enumerableOnly) {
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

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function (key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var RESOLVE_DELAY = 20;

var AndroidEditable = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props2 => /* @__PURE__ */import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    style = {},
    as: Component = "div"
  } = props,
      attributes = _objectWithoutProperties2(props, _excluded$12);

  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var inputManager = useAndroidInputManager(ref);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isComposing: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  var contentKey = useContentKey(editor);
  useIsomorphicLayoutEffect(() => {
    var window2;

    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }

    try {
      var {
        selection
      } = editor;
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var domSelection = root.getSelection();

      if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
        return;
      }

      var hasDomSelection = domSelection.type !== "None";

      if (!selection && !hasDomSelection) {
        return;
      }

      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;

      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      }

      if (hasDomSelection && hasDomSelectionInEditor && selection) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          suppressThrow: true
        });

        if (slateRange && Range.equals(slateRange, selection)) {
          return;
        }
      }

      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        return;
      }

      var el = ReactEditor.toDOMNode(editor, editor);
      state.isUpdatingSelection = true;
      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

      if (newDomRange) {
        if (Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }

        var leafEl = newDomRange.startContainer.parentElement;
        leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(newDomRange);
        es_default(leafEl, {
          scrollMode: "if-needed",
          boundary: el
        });
        delete leafEl.getBoundingClientRect;
      } else {
        domSelection.removeAllRanges();
      }

      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
    } catch (_unused) {
      state.isUpdatingSelection = false;
    }
  });
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    try {
      if (!state.isComposing && !state.isUpdatingSelection && !inputManager.isReconciling.current) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        var {
          activeElement
        } = root;
        var el = ReactEditor.toDOMNode(editor, editor);
        var domSelection = root.getSelection();

        if (activeElement === el) {
          state.latestElement = activeElement;
          IS_FOCUSED.set(editor, true);
        } else {
          IS_FOCUSED.delete(editor);
        }

        if (!domSelection) {
          return Transforms.deselect(editor);
        }

        var {
          anchorNode,
          focusNode
        } = domSelection;
        var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
        var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);

        if (anchorNodeSelectable && focusNodeSelectable) {
          var range = ReactEditor.toSlateRange(editor, domSelection, {
            exactMatch: false,
            suppressThrow: false
          });
          Transforms.select(editor, range);
        } else {
          Transforms.deselect(editor);
        }
      }
    } catch (_unused2) {}
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var onDOMBeforeInput = (0, import_react.useCallback)(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      scheduleOnDOMSelectionChange.flush();
      inputManager.onUserInput();
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var node = ref.current;
    node === null || node === void 0 ? void 0 : node.addEventListener("beforeinput", onDOMBeforeInput);
    return () => node === null || node === void 0 ? void 0 : node.removeEventListener("beforeinput", onDOMBeforeInput);
  }, [contentKey, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /* @__PURE__ */import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */import_react.default.createElement(Component, Object.assign({
    key: contentKey,
    role: readOnly ? void 0 : "textbox"
  }, attributes, {
    spellCheck: attributes.spellCheck,
    autoCorrect: attributes.autoCorrect,
    autoCapitalize: attributes.autoCapitalize,
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: readOnly ? void 0 : true,
    suppressContentEditableWarning: true,
    ref,
    style: _objectSpread2({
      position: "relative",
      outline: "none",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    }, style),
    onCopy: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;

        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node = Node.parent(editor, selection.anchor.path);

            if (Editor.isVoid(editor, node)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onFocus: (0, import_react.useCallback)(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onBlur: (0, import_react.useCallback)(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }

      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);

      if (relatedTarget === el) {
        return;
      }

      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }

      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (Element.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);

        if (Editor.hasPath(editor, path)) {
          var lookupNode = Node.get(editor, path);

          if (lookupNode === node) {
            var _start = Editor.start(editor, path);

            var end = Editor.end(editor, path);
            var startVoid = Editor.void(editor, {
              at: _start
            });
            var endVoid = Editor.void(editor, {
              at: end
            });

            if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
              var range = Editor.range(editor, _start);
              Transforms.select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        scheduleOnDOMSelectionChange.flush();
        setTimeout(() => {
          state.isComposing && setIsComposing(false);
          state.isComposing = false;
          IS_COMPOSING.set(editor, false);
          IS_ON_COMPOSITION_END.set(editor, true);
          var insertedText = EDITOR_ON_COMPOSITION_TEXT.get(editor) || [];

          if (!insertedText.length) {
            return;
          }

          EDITOR_ON_COMPOSITION_TEXT.set(editor, []);
          var {
            selection
          } = editor;
          insertedText.forEach(insertion => {
            var text = insertion.text.insertText;
            var at = normalizeTextInsertionRange(editor, selection, insertion);
            Transforms.setSelection(editor, at);
            Editor.insertText(editor, text);
          });
        }, RESOLVE_DELAY);
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionStart]),
    onPaste: (0, import_react.useCallback)(event => {
      event.clipboardData = getClipboardData(event.clipboardData);

      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste) && !readOnly) {
        event.preventDefault();
        ReactEditor.insertData(editor, event.clipboardData);
      }
    }, [readOnly, attributes.onPaste])
  }), useChildren({
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};

var FocusedContext = /* @__PURE__ */(0, import_react.createContext)(false);

var useFocused = () => {
  return (0, import_react.useContext)(FocusedContext);
};

var _excluded3 = ["editor", "children", "onChange", "value"];

var Slate = props => {
  var {
    editor,
    children,
    onChange,
    value
  } = props,
      rest = _objectWithoutProperties2(props, _excluded3);

  var unmountRef = (0, import_react.useRef)(false);
  var [context, setContext] = import_react.default.useState(() => {
    if (!Node.isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements" + "but got: ".concat(JSON.stringify(value)));
    }

    if (!Editor.isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! you passed:" + "".concat(JSON.stringify(editor)));
    }

    editor.children = value;
    Object.assign(editor, rest);
    return [editor];
  });
  var onContextChange = (0, import_react.useCallback)(() => {
    onChange(editor.children);
    setContext([editor]);
  }, [onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  (0, import_react.useEffect)(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {});
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = (0, import_react.useState)(ReactEditor.isFocused(editor));
  (0, import_react.useEffect)(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn = () => {
      setTimeout(() => {
        if (unmountRef.current) {
          return;
        }

        setIsFocused(ReactEditor.isFocused(editor));
      }, 0);
    };

    document.addEventListener("focus", fn, true);
    document.addEventListener("blur", fn, true);
    return () => {
      document.removeEventListener("focus", fn, true);
      document.removeEventListener("blur", fn, true);
    };
  }, []);
  return /* @__PURE__ */import_react.default.createElement(SlateContext.Provider, {
    value: context
  }, /* @__PURE__ */import_react.default.createElement(EditorContext.Provider, {
    value: editor
  }, /* @__PURE__ */import_react.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children)));
};

var useEditor = () => {
  var editor = (0, import_react.useContext)(EditorContext);

  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};

var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};

var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
  var positions = Array.from(Editor.positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);

  if (areRangesSameLine(editor, Editor.range(editor, positions[left]), parentRangeBoundary)) {
    return Editor.range(editor, positions[left], parentRangeBoundary);
  }

  if (positions.length < 2) {
    return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
  }

  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }

    middle = Math.floor((left + right) / 2);
  }

  return Editor.range(editor, positions[right], parentRangeBoundary);
};

var withReact = editor => {
  var e2 = editor;
  var {
    apply,
    onChange,
    deleteBackward
  } = e2;
  EDITOR_TO_KEY_TO_ELEMENT.set(e2, /* @__PURE__ */new WeakMap());

  e2.deleteBackward = unit => {
    if (unit !== "line") {
      return deleteBackward(unit);
    }

    if (editor.selection && Range.isCollapsed(editor.selection)) {
      var parentBlockEntry = Editor.above(editor, {
        match: n3 => Editor.isBlock(editor, n3),
        at: editor.selection
      });

      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = Editor.range(editor, parentBlockPath, editor.selection.anchor);
        var currentLineRange = findCurrentLineRange(e2, parentElementRange);

        if (!Range.isCollapsed(currentLineRange)) {
          Transforms.delete(editor, {
            at: currentLineRange
          });
        }
      }
    }
  };

  e2.apply = op => {
    var matches = [];

    switch (op.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
        {
          for (var [node, path] of Editor.levels(e2, {
            at: op.path
          })) {
            var key = ReactEditor.findKey(e2, node);
            matches.push([path, key]);
          }

          break;
        }

      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
        {
          for (var [_node, _path] of Editor.levels(e2, {
            at: Path.parent(op.path)
          })) {
            var _key = ReactEditor.findKey(e2, _node);

            matches.push([_path, _key]);
          }

          break;
        }

      case "move_node":
        {
          for (var [_node2, _path2] of Editor.levels(e2, {
            at: Path.common(Path.parent(op.path), Path.parent(op.newPath))
          })) {
            var _key2 = ReactEditor.findKey(e2, _node2);

            matches.push([_path2, _key2]);
          }

          break;
        }
    }

    apply(op);

    for (var [_path3, _key3] of matches) {
      var [_node3] = Editor.node(e2, _path3);
      NODE_TO_KEY.set(_node3, _key3);
    }
  };

  e2.setFragmentData = data => {
    var {
      selection
    } = e2;

    if (!selection) {
      return;
    }

    var [start, end] = Range.edges(selection);
    var startVoid = Editor.void(e2, {
      at: start.path
    });
    var endVoid = Editor.void(e2, {
      at: end.path
    });

    if (Range.isCollapsed(selection) && !startVoid) {
      return;
    }

    var domRange = ReactEditor.toDOMRange(e2, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0];
    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== "") {
        attach = node;
      }
    });

    if (endVoid) {
      var [voidNode] = endVoid;
      var r2 = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e2, voidNode);
      r2.setEndAfter(domNode);
      contents = r2.cloneContents();
    }

    if (startVoid) {
      attach = contents.querySelector("[data-slate-spacer]");
    }

    Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach(zw => {
      var isNewline = zw.getAttribute("data-slate-zero-width") === "n";
      zw.textContent = isNewline ? "\n" : "";
    });

    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement("span");
      span.style.whiteSpace = "pre";
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }

    var fragment = e2.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute("data-slate-fragment", encoded);
    data.setData("application/x-slate-fragment", encoded);
    var div = contents.ownerDocument.createElement("div");
    div.appendChild(contents);
    div.setAttribute("hidden", "true");
    contents.ownerDocument.body.appendChild(div);
    data.setData("text/html", div.innerHTML);
    data.setData("text/plain", getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };

  e2.insertData = data => {
    if (!e2.insertFragmentData(data)) {
      e2.insertTextData(data);
    }
  };

  e2.insertFragmentData = data => {
    var fragment = data.getData("application/x-slate-fragment") || getSlateFragmentAttribute(data);

    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e2.insertFragment(parsed);
      return true;
    }

    return false;
  };

  e2.insertTextData = data => {
    var text = data.getData("text/plain");

    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;

      for (var line of lines) {
        if (split) {
          Transforms.splitNodes(e2, {
            always: true
          });
        }

        e2.insertText(line);
        split = true;
      }

      return true;
    }

    return false;
  };

  e2.onChange = () => {
    import_react_dom.default.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e2);

      if (onContextChange) {
        onContextChange();
      }

      onChange();
    });
  };

  return e2;
};

var Editable = IS_ANDROID ? AndroidEditable : Editable$1;
};

code(module, require);
return module.exports;
});

