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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/scheduler/cjs/scheduler.development.js


var require_scheduler_development = __commonJS({
  "node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";

    if (true) {
      (function () {
        "use strict";

        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var requestHostCallback;
        var requestHostTimeout;
        var cancelHostTimeout;
        var requestPaint;
        var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";

        if (hasPerformanceNow) {
          var localPerformance = performance;

          exports.unstable_now = function () {
            return localPerformance.now();
          };
        } else {
          var localDate = Date;
          var initialTime = localDate.now();

          exports.unstable_now = function () {
            return localDate.now() - initialTime;
          };
        }

        if (typeof window === "undefined" || typeof MessageChannel !== "function") {
          var _callback = null;
          var _timeoutID = null;

          var _flushCallback = function () {
            if (_callback !== null) {
              try {
                var currentTime = exports.unstable_now();
                var hasRemainingTime = true;

                _callback(hasRemainingTime, currentTime);

                _callback = null;
              } catch (e) {
                setTimeout(_flushCallback, 0);
                throw e;
              }
            }
          };

          requestHostCallback = function (cb) {
            if (_callback !== null) {
              setTimeout(requestHostCallback, 0, cb);
            } else {
              _callback = cb;
              setTimeout(_flushCallback, 0);
            }
          };

          requestHostTimeout = function (cb, ms) {
            _timeoutID = setTimeout(cb, ms);
          };

          cancelHostTimeout = function () {
            clearTimeout(_timeoutID);
          };

          exports.unstable_shouldYield = function () {
            return false;
          };

          requestPaint = exports.unstable_forceFrameRate = function () {};
        } else {
          var _setTimeout = window.setTimeout;
          var _clearTimeout = window.clearTimeout;

          if (typeof console !== "undefined") {
            var requestAnimationFrame = window.requestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame;

            if (typeof requestAnimationFrame !== "function") {
              console["error"]("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }

            if (typeof cancelAnimationFrame !== "function") {
              console["error"]("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
          }

          var isMessageLoopRunning = false;
          var scheduledHostCallback = null;
          var taskTimeoutID = -1;
          var yieldInterval = 5;
          var deadline = 0;
          {
            exports.unstable_shouldYield = function () {
              return exports.unstable_now() >= deadline;
            };

            requestPaint = function () {};
          }

          exports.unstable_forceFrameRate = function (fps) {
            if (fps < 0 || fps > 125) {
              console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
              return;
            }

            if (fps > 0) {
              yieldInterval = Math.floor(1e3 / fps);
            } else {
              yieldInterval = 5;
            }
          };

          var performWorkUntilDeadline = function () {
            if (scheduledHostCallback !== null) {
              var currentTime = exports.unstable_now();
              deadline = currentTime + yieldInterval;
              var hasTimeRemaining = true;

              try {
                var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

                if (!hasMoreWork) {
                  isMessageLoopRunning = false;
                  scheduledHostCallback = null;
                } else {
                  port.postMessage(null);
                }
              } catch (error) {
                port.postMessage(null);
                throw error;
              }
            } else {
              isMessageLoopRunning = false;
            }
          };

          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = performWorkUntilDeadline;

          requestHostCallback = function (callback) {
            scheduledHostCallback = callback;

            if (!isMessageLoopRunning) {
              isMessageLoopRunning = true;
              port.postMessage(null);
            }
          };

          requestHostTimeout = function (callback, ms) {
            taskTimeoutID = _setTimeout(function () {
              callback(exports.unstable_now());
            }, ms);
          };

          cancelHostTimeout = function () {
            _clearTimeout(taskTimeoutID);

            taskTimeoutID = -1;
          };
        }

        function push(heap, node) {
          var index = heap.length;
          heap.push(node);
          siftUp(heap, node, index);
        }

        function peek(heap) {
          var first = heap[0];
          return first === void 0 ? null : first;
        }

        function pop(heap) {
          var first = heap[0];

          if (first !== void 0) {
            var last = heap.pop();

            if (last !== first) {
              heap[0] = last;
              siftDown(heap, last, 0);
            }

            return first;
          } else {
            return null;
          }
        }

        function siftUp(heap, node, i) {
          var index = i;

          while (true) {
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];

            if (parent !== void 0 && compare(parent, node) > 0) {
              heap[parentIndex] = node;
              heap[index] = parent;
              index = parentIndex;
            } else {
              return;
            }
          }
        }

        function siftDown(heap, node, i) {
          var index = i;
          var length = heap.length;

          while (index < length) {
            var leftIndex = (index + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];

            if (left !== void 0 && compare(left, node) < 0) {
              if (right !== void 0 && compare(right, left) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
              } else {
                heap[index] = left;
                heap[leftIndex] = node;
                index = leftIndex;
              }
            } else if (right !== void 0 && compare(right, node) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              return;
            }
          }
        }

        function compare(a, b) {
          var diff = a.sortIndex - b.sortIndex;
          return diff !== 0 ? diff : a.id - b.id;
        }

        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;

        function markTaskErrored(task, ms) {}

        var maxSigned31BitInt = 1073741823;
        var IMMEDIATE_PRIORITY_TIMEOUT = -1;
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5e3;
        var LOW_PRIORITY_TIMEOUT = 1e4;
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
        var taskQueue = [];
        var timerQueue = [];
        var taskIdCounter = 1;
        var currentTask = null;
        var currentPriorityLevel = NormalPriority;
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;

        function advanceTimers(currentTime) {
          var timer = peek(timerQueue);

          while (timer !== null) {
            if (timer.callback === null) {
              pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
              pop(timerQueue);
              timer.sortIndex = timer.expirationTime;
              push(taskQueue, timer);
            } else {
              return;
            }

            timer = peek(timerQueue);
          }
        }

        function handleTimeout(currentTime) {
          isHostTimeoutScheduled = false;
          advanceTimers(currentTime);

          if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            } else {
              var firstTimer = peek(timerQueue);

              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
            }
          }
        }

        function flushWork(hasTimeRemaining, initialTime2) {
          isHostCallbackScheduled = false;

          if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
          }

          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;

          try {
            if (enableProfiling) {
              try {
                return workLoop(hasTimeRemaining, initialTime2);
              } catch (error) {
                if (currentTask !== null) {
                  var currentTime = exports.unstable_now();
                  markTaskErrored(currentTask, currentTime);
                  currentTask.isQueued = false;
                }

                throw error;
              }
            } else {
              return workLoop(hasTimeRemaining, initialTime2);
            }
          } finally {
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
          }
        }

        function workLoop(hasTimeRemaining, initialTime2) {
          var currentTime = initialTime2;
          advanceTimers(currentTime);
          currentTask = peek(taskQueue);

          while (currentTask !== null && !enableSchedulerDebugging) {
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
              break;
            }

            var callback = currentTask.callback;

            if (typeof callback === "function") {
              currentTask.callback = null;
              currentPriorityLevel = currentTask.priorityLevel;
              var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
              var continuationCallback = callback(didUserCallbackTimeout);
              currentTime = exports.unstable_now();

              if (typeof continuationCallback === "function") {
                currentTask.callback = continuationCallback;
              } else {
                if (currentTask === peek(taskQueue)) {
                  pop(taskQueue);
                }
              }

              advanceTimers(currentTime);
            } else {
              pop(taskQueue);
            }

            currentTask = peek(taskQueue);
          }

          if (currentTask !== null) {
            return true;
          } else {
            var firstTimer = peek(timerQueue);

            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }

            return false;
          }
        }

        function unstable_runWithPriority(priorityLevel, eventHandler) {
          switch (priorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
              break;

            default:
              priorityLevel = NormalPriority;
          }

          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;

          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }

        function unstable_next(eventHandler) {
          var priorityLevel;

          switch (currentPriorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
              priorityLevel = NormalPriority;
              break;

            default:
              priorityLevel = currentPriorityLevel;
              break;
          }

          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;

          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }

        function unstable_wrapCallback(callback) {
          var parentPriorityLevel = currentPriorityLevel;
          return function () {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;

            try {
              return callback.apply(this, arguments);
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          };
        }

        function unstable_scheduleCallback(priorityLevel, callback, options) {
          var currentTime = exports.unstable_now();
          var startTime;

          if (typeof options === "object" && options !== null) {
            var delay = options.delay;

            if (typeof delay === "number" && delay > 0) {
              startTime = currentTime + delay;
            } else {
              startTime = currentTime;
            }
          } else {
            startTime = currentTime;
          }

          var timeout;

          switch (priorityLevel) {
            case ImmediatePriority:
              timeout = IMMEDIATE_PRIORITY_TIMEOUT;
              break;

            case UserBlockingPriority:
              timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
              break;

            case IdlePriority:
              timeout = IDLE_PRIORITY_TIMEOUT;
              break;

            case LowPriority:
              timeout = LOW_PRIORITY_TIMEOUT;
              break;

            case NormalPriority:
            default:
              timeout = NORMAL_PRIORITY_TIMEOUT;
              break;
          }

          var expirationTime = startTime + timeout;
          var newTask = {
            id: taskIdCounter++,
            callback,
            priorityLevel,
            startTime,
            expirationTime,
            sortIndex: -1
          };

          if (startTime > currentTime) {
            newTask.sortIndex = startTime;
            push(timerQueue, newTask);

            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
              if (isHostTimeoutScheduled) {
                cancelHostTimeout();
              } else {
                isHostTimeoutScheduled = true;
              }

              requestHostTimeout(handleTimeout, startTime - currentTime);
            }
          } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);

            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }

          return newTask;
        }

        function unstable_pauseExecution() {}

        function unstable_continueExecution() {
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }

        function unstable_getFirstCallbackNode() {
          return peek(taskQueue);
        }

        function unstable_cancelCallback(task) {
          task.callback = null;
        }

        function unstable_getCurrentPriorityLevel() {
          return currentPriorityLevel;
        }

        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_wrapCallback = unstable_wrapCallback;
      })();
    }
  }

}); // node_modules/scheduler/index.js


var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_scheduler_development();
    }
  }

}); // .beyond/uimport/temp/scheduler.0.20.2.js


var scheduler_0_20_2_exports = {};

__export(scheduler_0_20_2_exports, {
  default: () => scheduler_0_20_2_default
});

__reExport(scheduler_0_20_2_exports, __toESM(require_scheduler()));

var import_scheduler = __toESM(require_scheduler());

var scheduler_0_20_2_default = import_scheduler.default;
module.exports = __toCommonJS(scheduler_0_20_2_exports);
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
};

code(module, require);
return module.exports;
});

