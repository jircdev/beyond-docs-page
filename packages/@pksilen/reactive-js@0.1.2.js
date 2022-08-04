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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/@pksilen/reactive-js/lib/operations.js


var require_operations = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/operations.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TriggerOpTypes = exports.TrackOpTypes = void 0;
    var TrackOpTypes;
    exports.TrackOpTypes = TrackOpTypes;

    (function (TrackOpTypes2) {
      TrackOpTypes2["GET"] = "get";
      TrackOpTypes2["HAS"] = "has";
      TrackOpTypes2["ITERATE"] = "iterate";
    })(TrackOpTypes || (exports.TrackOpTypes = TrackOpTypes = {}));

    var TriggerOpTypes;
    exports.TriggerOpTypes = TriggerOpTypes;

    (function (TriggerOpTypes2) {
      TriggerOpTypes2["SET"] = "set";
      TriggerOpTypes2["ADD"] = "add";
      TriggerOpTypes2["DELETE"] = "delete";
      TriggerOpTypes2["CLEAR"] = "clear";
    })(TriggerOpTypes || (exports.TriggerOpTypes = TriggerOpTypes = {}));
  }

}); // node_modules/@pksilen/reactive-js/lib/utils.js


var require_utils = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/utils.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toRawType = toRawType;
    exports.makeMap = makeMap;
    exports.toTypeString = exports.objectToString = exports.extend = exports.capitalize = exports.hasOwn = exports.isSymbol = exports.isObject = exports.isFunction = exports.isArray = exports.hasChanged = exports.EMPTY_OBJ = exports.NOOP = void 0;

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }

      return _typeof(obj);
    }

    var NOOP = function NOOP2() {};

    exports.NOOP = NOOP;
    var EMPTY_OBJ = {};
    exports.EMPTY_OBJ = EMPTY_OBJ;

    var hasChanged = function hasChanged2(value, oldValue) {
      return value !== oldValue && (value === value || oldValue === oldValue);
    };

    exports.hasChanged = hasChanged;
    var isArray = Array.isArray;
    exports.isArray = isArray;

    var isFunction = function isFunction2(val) {
      return typeof val === "function";
    };

    exports.isFunction = isFunction;

    var isObject = function isObject2(val) {
      return val !== null && _typeof(val) === "object";
    };

    exports.isObject = isObject;

    var isSymbol = function isSymbol2(val) {
      return _typeof(val) === "symbol";
    };

    exports.isSymbol = isSymbol;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var hasOwn = function hasOwn2(val, key) {
      return hasOwnProperty.call(val, key);
    };

    exports.hasOwn = hasOwn;

    function cacheStringFunction(fn) {
      var cache = /* @__PURE__ */Object.create(null);
      return function (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    }

    var capitalize = cacheStringFunction(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    exports.capitalize = capitalize;

    var extend = function extend2(a, b) {
      for (var _key in b) {
        a[_key] = b[_key];
      }

      return a;
    };

    exports.extend = extend;
    var objectToString = Object.prototype.toString;
    exports.objectToString = objectToString;

    var toTypeString = function toTypeString2(value) {
      return objectToString.call(value);
    };

    exports.toTypeString = toTypeString;

    function toRawType(value) {
      return toTypeString(value).slice(8, -1);
    }

    function makeMap(str, expectsLowerCase) {
      var map = /* @__PURE__ */Object.create(null);
      var list = str.split(",");

      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }

      return expectsLowerCase ? function (val) {
        return !!map[val.toLowerCase()];
      } : function (val) {
        return !!map[val];
      };
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/effect.js


var require_effect = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/effect.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isEffect = isEffect;
    exports.effect = effect;
    exports.stop = stop;
    exports.pauseTracking = pauseTracking;
    exports.resumeTracking = resumeTracking;
    exports.track = track;
    exports.trigger = trigger;
    exports.ITERATE_KEY = exports.activeEffect = void 0;

    var _operations = require_operations();

    var _utils = require_utils();

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    var __DEV__ = false;
    var targetMap = /* @__PURE__ */new WeakMap();
    var effectStack = [];
    var activeEffect;
    exports.activeEffect = activeEffect;
    var ITERATE_KEY = Symbol("iterate");
    exports.ITERATE_KEY = ITERATE_KEY;

    function isEffect(fn) {
      return fn != null && fn._isEffect === true;
    }

    function effect(fn) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.EMPTY_OBJ;

      if (isEffect(fn)) {
        fn = fn.raw;
      }

      var effect2 = createReactiveEffect(fn, options);

      if (!options.lazy) {
        effect2();
      }

      return effect2;
    }

    function stop(effect2) {
      if (effect2.active) {
        cleanup(effect2);

        if (effect2.options.onStop) {
          effect2.options.onStop();
        }

        effect2.active = false;
      }
    }

    function createReactiveEffect(fn, options) {
      var effect2 = function reactiveEffect() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return run(effect2, fn, args);
      };

      effect2._isEffect = true;
      effect2.active = true;
      effect2.raw = fn;
      effect2.deps = [];
      effect2.options = options;
      return effect2;
    }

    function run(effect2, fn, args) {
      if (!effect2.active) {
        return fn.apply(void 0, _toConsumableArray(args));
      }

      if (!effectStack.includes(effect2)) {
        cleanup(effect2);

        try {
          effectStack.push(effect2);
          exports.activeEffect = activeEffect = effect2;
          return fn.apply(void 0, _toConsumableArray(args));
        } finally {
          effectStack.pop();
          exports.activeEffect = activeEffect = effectStack[effectStack.length - 1];
        }
      }
    }

    function cleanup(effect2) {
      var deps = effect2.deps;

      if (deps.length) {
        for (var i = 0; i < deps.length; i++) {
          deps[i]["delete"](effect2);
        }

        deps.length = 0;
      }
    }

    var shouldTrack = true;

    function pauseTracking() {
      shouldTrack = false;
    }

    function resumeTracking() {
      shouldTrack = true;
    }

    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return;
      }

      var depsMap = targetMap.get(target);

      if (depsMap === void 0) {
        targetMap.set(target, depsMap = /* @__PURE__ */new Map());
      }

      var dep = depsMap.get(key);

      if (dep === void 0) {
        depsMap.set(key, dep = /* @__PURE__ */new Set());
      }

      if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);

        if (__DEV__ && activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
          });
        }
      }
    }

    function trigger(target, type, key, extraInfo) {
      var depsMap = targetMap.get(target);

      if (depsMap === void 0) {
        return;
      }

      var effects = /* @__PURE__ */new Set();
      var computedRunners = /* @__PURE__ */new Set();

      if (type === _operations.TriggerOpTypes.CLEAR) {
        depsMap.forEach(function (dep) {
          addRunners(effects, computedRunners, dep);
        });
      } else {
        if (key !== void 0) {
          addRunners(effects, computedRunners, depsMap.get(key));
        }

        if (type === _operations.TriggerOpTypes.ADD || type === _operations.TriggerOpTypes.DELETE) {
          var iterationKey = (0, _utils.isArray)(target) ? "length" : ITERATE_KEY;
          addRunners(effects, computedRunners, depsMap.get(iterationKey));
        }
      }

      var run2 = function run3(effect2) {
        scheduleRun(effect2, target, type, key, extraInfo);
      };

      computedRunners.forEach(run2);
      effects.forEach(run2);
    }

    function addRunners(effects, computedRunners, effectsToAdd) {
      if (effectsToAdd !== void 0) {
        effectsToAdd.forEach(function (effect2) {
          if (effect2.options.computed) {
            computedRunners.add(effect2);
          } else {
            effects.add(effect2);
          }
        });
      }
    }

    function scheduleRun(effect2, target, type, key, extraInfo) {
      if (__DEV__ && effect2.options.onTrigger) {
        var _event = {
          effect: effect2,
          target,
          key,
          type
        };
        effect2.options.onTrigger(extraInfo ? (0, _utils.extend)(_event, extraInfo) : _event);
      }

      if (effect2.options.scheduler !== void 0) {
        effect2.options.scheduler(effect2);
      } else {
        effect2();
      }
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/lock.js


var require_lock = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/lock.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lock = lock;
    exports.unlock = unlock;
    exports.LOCKED = void 0;
    var LOCKED = true;
    exports.LOCKED = LOCKED;

    function lock() {
      exports.LOCKED = LOCKED = true;
    }

    function unlock() {
      exports.LOCKED = LOCKED = false;
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/baseHandlers.js


var require_baseHandlers = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/baseHandlers.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.shallowReadonlyHandlers = exports.shallowReactiveHandlers = exports.readonlyHandlers = exports.mutableHandlers = void 0;

    var _reactive = require_reactive();

    var _operations = require_operations();

    var _effect = require_effect();

    var _lock = require_lock();

    var _utils = require_utils();

    var _ref = require_ref();

    function _ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          _ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          _ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

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

    var __DEV__ = false;
    var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
      return Symbol[key];
    }).filter(_utils.isSymbol));
    var get = /* @__PURE__ */createGetter();
    var shallowReactiveGet = /* @__PURE__ */createGetter(false, true);
    var readonlyGet = /* @__PURE__ */createGetter(true);
    var shallowReadonlyGet = /* @__PURE__ */createGetter(true, true);
    var arrayIdentityInstrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach(function (key) {
      arrayIdentityInstrumentations[key] = function (value) {
        var _toRaw;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_toRaw = (0, _reactive.toRaw)(this))[key].apply(_toRaw, [(0, _reactive.toRaw)(value)].concat(args));
      };
    });

    function createGetter() {
      var isReadonly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var shallow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return function get2(target, key, receiver) {
        if ((0, _utils.isArray)(target) && (0, _utils.hasOwn)(arrayIdentityInstrumentations, key)) {
          return Reflect.get(arrayIdentityInstrumentations, key, receiver);
        }

        var res = Reflect.get(target, key, receiver);

        if ((0, _utils.isSymbol)(key) && builtInSymbols.has(key)) {
          return res;
        }

        if (shallow) {
          (0, _effect.track)(target, _operations.TrackOpTypes.GET, key);
          return res;
        }

        if ((0, _ref.isRef)(res)) {
          return res.value;
        }

        (0, _effect.track)(target, _operations.TrackOpTypes.GET, key);
        return (0, _utils.isObject)(res) ? isReadonly ? (0, _reactive.readonly)(res) : (0, _reactive.reactive)(res) : res;
      };
    }

    var set = /* @__PURE__ */createSetter();
    var shallowReactiveSet = /* @__PURE__ */createSetter(false, true);
    var readonlySet = /* @__PURE__ */createSetter(true);
    var shallowReadonlySet = /* @__PURE__ */createSetter(true, true);

    function createSetter() {
      var isReadonly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var shallow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return function set2(target, key, value, receiver) {
        if (isReadonly && _lock.LOCKED) {
          if (__DEV__) {
            console.warn('Set operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
          }

          return true;
        }

        var oldValue = target[key];

        if (!shallow) {
          value = (0, _reactive.toRaw)(value);

          if ((0, _ref.isRef)(oldValue) && !(0, _ref.isRef)(value)) {
            oldValue.value = value;
            return true;
          }
        } else {}

        var hadKey = (0, _utils.hasOwn)(target, key);
        var result = Reflect.set(target, key, value, receiver);

        if (target === (0, _reactive.toRaw)(receiver)) {
          if (__DEV__) {
            var extraInfo = {
              oldValue,
              newValue: value
            };

            if (!hadKey) {
              (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, key, extraInfo);
            } else if ((0, _utils.hasChanged)(value, oldValue)) {
              (0, _effect.trigger)(target, _operations.TriggerOpTypes.SET, key, extraInfo);
            }
          } else {
            if (!hadKey) {
              (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, key);
            } else if ((0, _utils.hasChanged)(value, oldValue)) {
              (0, _effect.trigger)(target, _operations.TriggerOpTypes.SET, key);
            }
          }
        }

        return result;
      };
    }

    function _deleteProperty(target, key) {
      var hadKey = (0, _utils.hasOwn)(target, key);
      var oldValue = target[key];
      var result = Reflect.deleteProperty(target, key);

      if (result && hadKey) {
        if (__DEV__) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.DELETE, key, {
            oldValue
          });
        } else {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.DELETE, key);
        }
      }

      return result;
    }

    function has(target, key) {
      var result = Reflect.has(target, key);
      (0, _effect.track)(target, _operations.TrackOpTypes.HAS, key);
      return result;
    }

    function ownKeys(target) {
      (0, _effect.track)(target, _operations.TrackOpTypes.ITERATE, _effect.ITERATE_KEY);
      return Reflect.ownKeys(target);
    }

    var mutableHandlers = {
      get,
      set,
      deleteProperty: _deleteProperty,
      has,
      ownKeys
    };
    exports.mutableHandlers = mutableHandlers;
    var readonlyHandlers = {
      get: readonlyGet,
      set: readonlySet,
      has,
      ownKeys,
      deleteProperty: function deleteProperty(target, key) {
        if (_lock.LOCKED) {
          if (__DEV__) {
            console.warn('Delete operation on key "'.concat(String(key), '" failed: target is readonly.'), target);
          }

          return true;
        } else {
          return _deleteProperty(target, key);
        }
      }
    };
    exports.readonlyHandlers = readonlyHandlers;

    var shallowReactiveHandlers = _objectSpread({}, mutableHandlers, {
      get: shallowReactiveGet,
      set: shallowReactiveSet
    });

    exports.shallowReactiveHandlers = shallowReactiveHandlers;

    var shallowReadonlyHandlers = _objectSpread({}, readonlyHandlers, {
      get: shallowReadonlyGet,
      set: shallowReadonlySet
    });

    exports.shallowReadonlyHandlers = shallowReadonlyHandlers;
  }

}); // node_modules/@pksilen/reactive-js/lib/collectionHandlers.js


var require_collectionHandlers = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/collectionHandlers.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.readonlyCollectionHandlers = exports.mutableCollectionHandlers = void 0;

    var _reactive = require_reactive();

    var _effect = require_effect();

    var _operations = require_operations();

    var _lock = require_lock();

    var _utils = require_utils();

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

    var __DEV__ = false;

    var toReactive = function toReactive2(value) {
      return (0, _utils.isObject)(value) ? (0, _reactive.reactive)(value) : value;
    };

    var toReadonly = function toReadonly2(value) {
      return (0, _utils.isObject)(value) ? (0, _reactive.readonly)(value) : value;
    };

    var getProto = function getProto2(v) {
      return Reflect.getPrototypeOf(v);
    };

    function _get(target, key, wrap) {
      target = (0, _reactive.toRaw)(target);
      key = (0, _reactive.toRaw)(key);
      (0, _effect.track)(target, _operations.TrackOpTypes.GET, key);
      return wrap(getProto(target).get.call(target, key));
    }

    function has(key) {
      var target = (0, _reactive.toRaw)(this);
      key = (0, _reactive.toRaw)(key);
      (0, _effect.track)(target, _operations.TrackOpTypes.HAS, key);
      return getProto(target).has.call(target, key);
    }

    function size(target) {
      target = (0, _reactive.toRaw)(target);
      (0, _effect.track)(target, _operations.TrackOpTypes.ITERATE, _effect.ITERATE_KEY);
      return Reflect.get(getProto(target), "size", target);
    }

    function add(value) {
      value = (0, _reactive.toRaw)(value);
      var target = (0, _reactive.toRaw)(this);
      var proto = getProto(target);
      var hadKey = proto.has.call(target, value);
      var result = proto.add.call(target, value);

      if (!hadKey) {
        if (__DEV__) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, value, {
            newValue: value
          });
        } else {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, value);
        }
      }

      return result;
    }

    function set(key, value) {
      value = (0, _reactive.toRaw)(value);
      key = (0, _reactive.toRaw)(key);
      var target = (0, _reactive.toRaw)(this);
      var proto = getProto(target);
      var hadKey = proto.has.call(target, key);
      var oldValue = proto.get.call(target, key);
      var result = proto.set.call(target, key, value);

      if (__DEV__) {
        var extraInfo = {
          oldValue,
          newValue: value
        };

        if (!hadKey) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, key, extraInfo);
        } else if ((0, _utils.hasChanged)(value, oldValue)) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.SET, key, extraInfo);
        }
      } else {
        if (!hadKey) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.ADD, key);
        } else if ((0, _utils.hasChanged)(value, oldValue)) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.SET, key);
        }
      }

      return result;
    }

    function deleteEntry(key) {
      key = (0, _reactive.toRaw)(key);
      var target = (0, _reactive.toRaw)(this);
      var proto = getProto(target);
      var hadKey = proto.has.call(target, key);
      var oldValue = proto.get ? proto.get.call(target, key) : void 0;
      var result = proto["delete"].call(target, key);

      if (hadKey) {
        if (__DEV__) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.DELETE, key, {
            oldValue
          });
        } else {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.DELETE, key);
        }
      }

      return result;
    }

    function clear() {
      var target = (0, _reactive.toRaw)(this);
      var hadItems = target.size !== 0;
      var oldTarget = __DEV__ ? target instanceof Map ? new Map(target) : new Set(target) : void 0;
      var result = getProto(target).clear.call(target);

      if (hadItems) {
        if (__DEV__) {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.CLEAR, void 0, {
            oldTarget
          });
        } else {
          (0, _effect.trigger)(target, _operations.TriggerOpTypes.CLEAR);
        }
      }

      return result;
    }

    function createForEach(isReadonly) {
      return function forEach(callback, thisArg) {
        var observed = this;
        var target = (0, _reactive.toRaw)(observed);
        var wrap = isReadonly ? toReadonly : toReactive;
        (0, _effect.track)(target, _operations.TrackOpTypes.ITERATE, _effect.ITERATE_KEY);

        function wrappedCallback(value, key) {
          return callback.call(observed, wrap(value), wrap(key), observed);
        }

        return getProto(target).forEach.call(target, wrappedCallback, thisArg);
      };
    }

    function createIterableMethod(method, isReadonly) {
      return function () {
        var target = (0, _reactive.toRaw)(this);
        var isPair = method === "entries" || method === Symbol.iterator && target instanceof Map;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var innerIterator = getProto(target)[method].apply(target, args);
        var wrap = isReadonly ? toReadonly : toReactive;
        (0, _effect.track)(target, _operations.TrackOpTypes.ITERATE, _effect.ITERATE_KEY);
        return _defineProperty({
          next: function next() {
            var _innerIterator$next = innerIterator.next(),
                value = _innerIterator$next.value,
                done = _innerIterator$next.done;

            return done ? {
              value,
              done
            } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          }
        }, Symbol.iterator, function () {
          return this;
        });
      };
    }

    function createReadonlyMethod(method, type) {
      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (_lock.LOCKED) {
          if (__DEV__) {
            var key = args[0] ? 'on key "'.concat(args[0], '" ') : "";
            console.warn("".concat((0, _utils.capitalize)(type), " operation ").concat(key, "failed: target is readonly."), (0, _reactive.toRaw)(this));
          }

          return type === _operations.TriggerOpTypes.DELETE ? false : this;
        } else {
          return method.apply(this, args);
        }
      };
    }

    var mutableInstrumentations = {
      get: function get(key) {
        return _get(this, key, toReactive);
      },

      get size() {
        return size(this);
      },

      has,
      add,
      set,
      "delete": deleteEntry,
      clear,
      forEach: createForEach(false)
    };
    var readonlyInstrumentations = {
      get: function get(key) {
        return _get(this, key, toReadonly);
      },

      get size() {
        return size(this);
      },

      has,
      add: createReadonlyMethod(add, _operations.TriggerOpTypes.ADD),
      set: createReadonlyMethod(set, _operations.TriggerOpTypes.SET),
      "delete": createReadonlyMethod(deleteEntry, _operations.TriggerOpTypes.DELETE),
      clear: createReadonlyMethod(clear, _operations.TriggerOpTypes.CLEAR),
      forEach: createForEach(true)
    };
    var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach(function (method) {
      mutableInstrumentations[method] = createIterableMethod(method, false);
      readonlyInstrumentations[method] = createIterableMethod(method, true);
    });

    function createInstrumentationGetter(instrumentations) {
      return function (target, key, receiver) {
        return Reflect.get((0, _utils.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
      };
    }

    var mutableCollectionHandlers = {
      get: createInstrumentationGetter(mutableInstrumentations)
    };
    exports.mutableCollectionHandlers = mutableCollectionHandlers;
    var readonlyCollectionHandlers = {
      get: createInstrumentationGetter(readonlyInstrumentations)
    };
    exports.readonlyCollectionHandlers = readonlyCollectionHandlers;
  }

}); // node_modules/@pksilen/reactive-js/lib/reactive.js


var require_reactive = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/reactive.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reactive = reactive;
    exports.readonly = readonly;
    exports.shallowReadonly = shallowReadonly;
    exports.shallowReactive = shallowReactive;
    exports.isReactive = isReactive;
    exports.isReadonly = isReadonly;
    exports.toRaw = toRaw;
    exports.markReadonly = markReadonly;
    exports.markNonReactive = markNonReactive;

    var _utils = require_utils();

    var _baseHandlers = require_baseHandlers();

    var _collectionHandlers = require_collectionHandlers();

    var __DEV__ = false;
    var rawToReactive = /* @__PURE__ */new WeakMap();
    var reactiveToRaw = /* @__PURE__ */new WeakMap();
    var rawToReadonly = /* @__PURE__ */new WeakMap();
    var readonlyToRaw = /* @__PURE__ */new WeakMap();
    var readonlyValues = /* @__PURE__ */new WeakSet();
    var nonReactiveValues = /* @__PURE__ */new WeakSet();
    var collectionTypes = /* @__PURE__ */new Set([Set, Map, WeakMap, WeakSet]);
    var isObservableType = /* @__PURE__ */(0, _utils.makeMap)("Object,Array,Map,Set,WeakMap,WeakSet");

    var canObserve = function canObserve2(value) {
      return !value._isVue && !value._isVNode && isObservableType((0, _utils.toRawType)(value)) && !nonReactiveValues.has(value);
    };

    function reactive(target) {
      if (readonlyToRaw.has(target)) {
        return target;
      }

      if (readonlyValues.has(target)) {
        return readonly(target);
      }

      return createReactiveObject(target, rawToReactive, reactiveToRaw, _baseHandlers.mutableHandlers, _collectionHandlers.mutableCollectionHandlers);
    }

    function readonly(target) {
      if (reactiveToRaw.has(target)) {
        target = reactiveToRaw.get(target);
      }

      return createReactiveObject(target, rawToReadonly, readonlyToRaw, _baseHandlers.readonlyHandlers, _collectionHandlers.readonlyCollectionHandlers);
    }

    function shallowReadonly(target) {
      return createReactiveObject(target, rawToReadonly, readonlyToRaw, _baseHandlers.shallowReadonlyHandlers, _collectionHandlers.readonlyCollectionHandlers);
    }

    function shallowReactive(target) {
      return createReactiveObject(target, rawToReactive, reactiveToRaw, _baseHandlers.shallowReactiveHandlers, _collectionHandlers.mutableCollectionHandlers);
    }

    function createReactiveObject(target, toProxy, toRaw2, baseHandlers, collectionHandlers) {
      if (!(0, _utils.isObject)(target)) {
        if (__DEV__) {
          console.warn("value cannot be made reactive: ".concat(String(target)));
        }

        return target;
      }

      var observed = toProxy.get(target);

      if (observed !== void 0) {
        return observed;
      }

      if (toRaw2.has(target)) {
        return target;
      }

      if (!canObserve(target)) {
        return target;
      }

      var handlers = collectionTypes.has(target.constructor) ? collectionHandlers : baseHandlers;
      observed = new Proxy(target, handlers);
      toProxy.set(target, observed);
      toRaw2.set(observed, target);
      return observed;
    }

    function isReactive(value) {
      return reactiveToRaw.has(value) || readonlyToRaw.has(value);
    }

    function isReadonly(value) {
      return readonlyToRaw.has(value);
    }

    function toRaw(observed) {
      return reactiveToRaw.get(observed) || readonlyToRaw.get(observed) || observed;
    }

    function markReadonly(value) {
      readonlyValues.add(value);
      return value;
    }

    function markNonReactive(value) {
      nonReactiveValues.add(value);
      return value;
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/ref.js


var require_ref = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/ref.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isRef = isRef;
    exports.ref = ref;
    exports.toRefs = toRefs;

    var _effect = require_effect();

    var _operations = require_operations();

    var _utils = require_utils();

    var _reactive = require_reactive();

    var __DEV__ = false;
    var isRefSymbol = Symbol();

    var convert = function convert2(val) {
      return (0, _utils.isObject)(val) ? (0, _reactive.reactive)(val) : val;
    };

    function isRef(r) {
      return r ? r._isRef === true : false;
    }

    function ref(value) {
      if (isRef(value)) {
        return value;
      }

      value = convert(value);
      var r = {
        _isRef: true,

        get value() {
          (0, _effect.track)(r, _operations.TrackOpTypes.GET, "value");
          return value;
        },

        set value(newVal) {
          value = convert(newVal);
          (0, _effect.trigger)(r, _operations.TriggerOpTypes.SET, "value", __DEV__ ? {
            newValue: newVal
          } : void 0);
        }

      };
      return r;
    }

    function toRefs(object) {
      if (__DEV__ && !(0, _reactive.isReactive)(object)) {
        console.warn("toRefs() expects a reactive object but received a plain one.");
      }

      var ret = {};

      for (var key in object) {
        ret[key] = toProxyRef(object, key);
      }

      return ret;
    }

    function toProxyRef(object, key) {
      return {
        _isRef: true,

        get value() {
          return object[key];
        },

        set value(newVal) {
          object[key] = newVal;
        }

      };
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/computed.js


var require_computed = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/computed.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.computed = computed;

    var _effect = require_effect();

    var _utils = require_utils();

    var __DEV__ = false;

    function computed(getterOrOptions) {
      var getter;
      var setter;

      if ((0, _utils.isFunction)(getterOrOptions)) {
        getter = getterOrOptions;
        setter = __DEV__ ? function () {
          console.warn("Write operation failed: computed value is readonly");
        } : _utils.NOOP;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }

      var dirty = true;
      var value;
      var runner = (0, _effect.effect)(getter, {
        lazy: true,
        computed: true,
        scheduler: function scheduler() {
          dirty = true;
        }
      });
      return {
        _isRef: true,
        effect: runner,

        get value() {
          if (dirty) {
            value = runner();
            dirty = false;
          }

          trackChildRun(runner);
          return value;
        },

        set value(newValue) {
          setter(newValue);
        }

      };
    }

    function trackChildRun(childRunner) {
      if (_effect.activeEffect === void 0) {
        return;
      }

      for (var i = 0; i < childRunner.deps.length; i++) {
        var dep = childRunner.deps[i];

        if (!dep.has(_effect.activeEffect)) {
          dep.add(_effect.activeEffect);

          _effect.activeEffect.deps.push(dep);
        }
      }
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/watch.js


var require_watch = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/watch.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.watch = watch;

    var _effect = require_effect();

    var _utils = require_utils();

    var invoke = function invoke2(fn) {
      return fn();
    };

    var INITIAL_WATCHER_VALUE = {};

    function watch(effectOrSource, cbOrOptions, options) {
      return doWatch(effectOrSource, cbOrOptions, options);
    }

    function doWatch(source, cb) {
      var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          deep = _ref.deep,
          onTrack = _ref.onTrack,
          onTrigger = _ref.onTrigger;

      var getter;

      getter = function getter2() {
        return source();
      };

      if (deep) {
        var baseGetter = getter;

        getter = function getter2() {
          return traverse(baseGetter());
        };
      }

      var registerCleanup = function registerCleanup2() {};

      var oldValue = (0, _utils.isArray)(source) ? [] : INITIAL_WATCHER_VALUE;

      var applyCb = function applyCb2() {
        var newValue = runner();

        if (deep || (0, _utils.hasChanged)(newValue, oldValue)) {
          cb(newValue, oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue, registerCleanup);
          oldValue = newValue;
        }
      };

      var _scheduler;

      _scheduler = invoke;
      var runner = (0, _effect.effect)(getter, {
        lazy: true,
        computed: true,
        onTrack,
        onTrigger,
        scheduler: function scheduler() {
          return _scheduler(applyCb);
        }
      });

      if (applyCb) {
        _scheduler(applyCb);
      } else {
        _scheduler(runner);
      }

      return function () {
        (0, _effect.stop)(runner);
      };
    }

    function traverse(value) {
      var seen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */new Set();

      if (!(0, _utils.isObject)(value) || seen.has(value)) {
        return;
      }

      seen.add(value);

      if ((0, _utils.isArray)(value)) {
        for (var i = 0; i < value.length; i++) {
          traverse(value[i], seen);
        }
      } else if (value instanceof Map) {
        value.forEach(function (v, key2) {
          traverse(value.get(key2), seen);
        });
      } else if (value instanceof Set) {
        value.forEach(function (v) {
          traverse(v, seen);
        });
      } else {
        for (var key in value) {
          traverse(value[key], seen);
        }
      }

      return value;
    }
  }

}); // node_modules/@pksilen/reactive-js/lib/index.js


var require_lib = __commonJS({
  "node_modules/@pksilen/reactive-js/lib/index.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ref", {
      enumerable: true,
      get: function get() {
        return _ref.ref;
      }
    });
    Object.defineProperty(exports, "isRef", {
      enumerable: true,
      get: function get() {
        return _ref.isRef;
      }
    });
    Object.defineProperty(exports, "toRefs", {
      enumerable: true,
      get: function get() {
        return _ref.toRefs;
      }
    });
    Object.defineProperty(exports, "Ref", {
      enumerable: true,
      get: function get() {
        return _ref.Ref;
      }
    });
    Object.defineProperty(exports, "UnwrapRef", {
      enumerable: true,
      get: function get() {
        return _ref.UnwrapRef;
      }
    });
    Object.defineProperty(exports, "reactive", {
      enumerable: true,
      get: function get() {
        return _reactive.reactive;
      }
    });
    Object.defineProperty(exports, "isReactive", {
      enumerable: true,
      get: function get() {
        return _reactive.isReactive;
      }
    });
    Object.defineProperty(exports, "shallowReactive", {
      enumerable: true,
      get: function get() {
        return _reactive.shallowReactive;
      }
    });
    Object.defineProperty(exports, "readonly", {
      enumerable: true,
      get: function get() {
        return _reactive.readonly;
      }
    });
    Object.defineProperty(exports, "isReadonly", {
      enumerable: true,
      get: function get() {
        return _reactive.isReadonly;
      }
    });
    Object.defineProperty(exports, "shallowReadonly", {
      enumerable: true,
      get: function get() {
        return _reactive.shallowReadonly;
      }
    });
    Object.defineProperty(exports, "toRaw", {
      enumerable: true,
      get: function get() {
        return _reactive.toRaw;
      }
    });
    Object.defineProperty(exports, "markReadonly", {
      enumerable: true,
      get: function get() {
        return _reactive.markReadonly;
      }
    });
    Object.defineProperty(exports, "markNonReactive", {
      enumerable: true,
      get: function get() {
        return _reactive.markNonReactive;
      }
    });
    Object.defineProperty(exports, "computed", {
      enumerable: true,
      get: function get() {
        return _computed.computed;
      }
    });
    Object.defineProperty(exports, "ComputedRef", {
      enumerable: true,
      get: function get() {
        return _computed.ComputedRef;
      }
    });
    Object.defineProperty(exports, "WritableComputedRef", {
      enumerable: true,
      get: function get() {
        return _computed.WritableComputedRef;
      }
    });
    Object.defineProperty(exports, "WritableComputedOptions", {
      enumerable: true,
      get: function get() {
        return _computed.WritableComputedOptions;
      }
    });
    Object.defineProperty(exports, "ComputedGetter", {
      enumerable: true,
      get: function get() {
        return _computed.ComputedGetter;
      }
    });
    Object.defineProperty(exports, "ComputedSetter", {
      enumerable: true,
      get: function get() {
        return _computed.ComputedSetter;
      }
    });
    Object.defineProperty(exports, "effect", {
      enumerable: true,
      get: function get() {
        return _effect.effect;
      }
    });
    Object.defineProperty(exports, "stop", {
      enumerable: true,
      get: function get() {
        return _effect.stop;
      }
    });
    Object.defineProperty(exports, "pauseTracking", {
      enumerable: true,
      get: function get() {
        return _effect.pauseTracking;
      }
    });
    Object.defineProperty(exports, "resumeTracking", {
      enumerable: true,
      get: function get() {
        return _effect.resumeTracking;
      }
    });
    Object.defineProperty(exports, "ITERATE_KEY", {
      enumerable: true,
      get: function get() {
        return _effect.ITERATE_KEY;
      }
    });
    Object.defineProperty(exports, "ReactiveEffect", {
      enumerable: true,
      get: function get() {
        return _effect.ReactiveEffect;
      }
    });
    Object.defineProperty(exports, "ReactiveEffectOptions", {
      enumerable: true,
      get: function get() {
        return _effect.ReactiveEffectOptions;
      }
    });
    Object.defineProperty(exports, "DebuggerEvent", {
      enumerable: true,
      get: function get() {
        return _effect.DebuggerEvent;
      }
    });
    Object.defineProperty(exports, "lock", {
      enumerable: true,
      get: function get() {
        return _lock.lock;
      }
    });
    Object.defineProperty(exports, "unlock", {
      enumerable: true,
      get: function get() {
        return _lock.unlock;
      }
    });
    Object.defineProperty(exports, "TrackOpTypes", {
      enumerable: true,
      get: function get() {
        return _operations.TrackOpTypes;
      }
    });
    Object.defineProperty(exports, "TriggerOpTypes", {
      enumerable: true,
      get: function get() {
        return _operations.TriggerOpTypes;
      }
    });
    Object.defineProperty(exports, "watch", {
      enumerable: true,
      get: function get() {
        return _watch.watch;
      }
    });
    Object.defineProperty(exports, "StopHandle", {
      enumerable: true,
      get: function get() {
        return _watch.StopHandle;
      }
    });

    var _ref = require_ref();

    var _reactive = require_reactive();

    var _computed = require_computed();

    var _effect = require_effect();

    var _lock = require_lock();

    var _operations = require_operations();

    var _watch = require_watch();
  }

}); // .beyond/uimport/@pksilen/reactive-js.0.1.2.js


var reactive_js_0_1_2_exports = {};

__export(reactive_js_0_1_2_exports, {
  default: () => reactive_js_0_1_2_default
});

__reExport(reactive_js_0_1_2_exports, __toESM(require_lib()));

var import_reactive_js = __toESM(require_lib());

var reactive_js_0_1_2_default = import_reactive_js.default;
module.exports = __toCommonJS(reactive_js_0_1_2_exports);
};

code(module, require);
return module.exports;
});

