define([], () => {
const define = void 0;
const require = () => void 0;
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
}), mod); // .beyond/uimport/temp/@cloudinary/url-gen/internal/utils/dataStructureUtils/1.8.0.js


var __exports = {};

__export(__exports, {
  isString: () => isString,
  mapToSortedArray: () => mapToSortedArray
});

module.exports = __toCommonJS(__exports); // node_modules/@cloudinary/url-gen/internal/utils/dataStructureUtils.js

function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach(flag => {
    array.push(["fl", flag]);
  });
  return array.sort().map(v => v[1]);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}
};

code(module, require);
return module.exports;
});

