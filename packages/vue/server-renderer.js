define(["vue"], (dep_0) => {
const dependencies = new Map([['vue', dep_0]]);
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
}), mod); // .beyond/uimport/temp/vue/server-renderer/3.2.37.js


var __exports = {};

__export(__exports, {
  pipeToNodeWritable: () => pipeToNodeWritable,
  pipeToWebWritable: () => pipeToWebWritable,
  renderToNodeStream: () => renderToNodeStream,
  renderToSimpleStream: () => renderToSimpleStream,
  renderToStream: () => renderToStream,
  renderToString: () => renderToString,
  renderToWebStream: () => renderToWebStream,
  ssrGetDirectiveProps: () => ssrGetDirectiveProps,
  ssrGetDynamicModelProps: () => ssrGetDynamicModelProps,
  ssrIncludeBooleanAttr: () => includeBooleanAttr,
  ssrInterpolate: () => ssrInterpolate,
  ssrLooseContain: () => ssrLooseContain,
  ssrLooseEqual: () => ssrLooseEqual,
  ssrRenderAttr: () => ssrRenderAttr,
  ssrRenderAttrs: () => ssrRenderAttrs,
  ssrRenderClass: () => ssrRenderClass,
  ssrRenderComponent: () => ssrRenderComponent,
  ssrRenderDynamicAttr: () => ssrRenderDynamicAttr,
  ssrRenderDynamicModel: () => ssrRenderDynamicModel,
  ssrRenderList: () => ssrRenderList,
  ssrRenderSlot: () => ssrRenderSlot,
  ssrRenderSlotInner: () => ssrRenderSlotInner,
  ssrRenderStyle: () => ssrRenderStyle,
  ssrRenderSuspense: () => ssrRenderSuspense,
  ssrRenderTeleport: () => ssrRenderTeleport,
  ssrRenderVNode: () => renderVNode
});

module.exports = __toCommonJS(__exports); // node_modules/@vue/shared/dist/shared.esm-bundler.js

function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */Object.create(null);
  const list = str.split(",");

  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

var PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
var slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
var isGloballyWhitelisted = /* @__PURE__ */makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];

  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join("\n");
}

var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
var isBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);

function includeBooleanAttr(value) {
  return !!value || value === "";
}

var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  const isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
var isNoUnitNumericStyleProp = /* @__PURE__ */makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
var isKnownHtmlAttr = /* @__PURE__ */makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
var isKnownSvgAttr = /* @__PURE__ */makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  let ret = "";

  if (!styles || isString(styles)) {
    return ret;
  }

  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);

    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }

  return ret;
}

function normalizeClass(value) {
  let res = "";

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  let {
    class: klass,
    style
  } = props;

  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
}

var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
var isHTMLTag = /* @__PURE__ */makeMap(HTML_TAGS);
var isSVGTag = /* @__PURE__ */makeMap(SVG_TAGS);
var isVoidTag = /* @__PURE__ */makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;

      case 38:
        escaped = "&amp;";
        break;

      case 39:
        escaped = "&#39;";
        break;

      case 60:
        escaped = "&lt;";
        break;

      case 62:
        escaped = "&gt;";
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}

var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;

  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isSymbol(a);
  bValidType = isSymbol(b);

  if (aValidType || bValidType) {
    return a === b;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }

    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(item => looseEqual(item, val));
}

var toDisplayString = val => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];

var NOOP = () => {};

var NO = () => false;

var onRE = /^on[^a-z]/;

var isOn = key => onRE.test(key);

var isModelListener = key => key.startsWith("onUpdate:");

var extend = Object.assign;

var remove = (arr, el) => {
  const i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = (val, key) => hasOwnProperty.call(val, key);

var isArray = Array.isArray;

var isMap = val => toTypeString(val) === "[object Map]";

var isSet = val => toTypeString(val) === "[object Set]";

var isDate = val => toTypeString(val) === "[object Date]";

var isFunction = val => typeof val === "function";

var isString = val => typeof val === "string";

var isSymbol = val => typeof val === "symbol";

var isObject = val => val !== null && typeof val === "object";

var isPromise = val => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

var objectToString = Object.prototype.toString;

var toTypeString = value => objectToString.call(value);

var toRawType = value => {
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = val => toTypeString(val) === "[object Object]";

var isIntegerKey = key => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;

var isReservedProp = /* @__PURE__ */makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var isBuiltInDirective = /* @__PURE__ */makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");

var cacheStringFunction = fn => {
  const cache = /* @__PURE__ */Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``);

var hasChanged = (value, oldValue) => !Object.is(value, oldValue);

var invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};

var toNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};

var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
} // node_modules/@vue/server-renderer/dist/server-renderer.esm-bundler.js


var import_vue = require("vue");

var shouldIgnoreProp = makeMap(`,key,ref,innerHTML,textContent,ref_key,ref_for`);

function ssrRenderAttrs(props, tag) {
  let ret = "";

  for (const key in props) {
    if (shouldIgnoreProp(key) || isOn(key) || tag === "textarea" && key === "value") {
      continue;
    }

    const value = props[key];

    if (key === "class") {
      ret += ` class="${ssrRenderClass(value)}"`;
    } else if (key === "style") {
      ret += ` style="${ssrRenderStyle(value)}"`;
    } else {
      ret += ssrRenderDynamicAttr(key, value, tag);
    }
  }

  return ret;
}

function ssrRenderDynamicAttr(key, value, tag) {
  if (!isRenderableValue(value)) {
    return ``;
  }

  const attrKey = tag && tag.indexOf("-") > 0 ? key : propsToAttrMap[key] || key.toLowerCase();

  if (isBooleanAttr(attrKey)) {
    return includeBooleanAttr(value) ? ` ${attrKey}` : ``;
  } else if (isSSRSafeAttrName(attrKey)) {
    return value === "" ? ` ${attrKey}` : ` ${attrKey}="${escapeHtml(value)}"`;
  } else {
    console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`);
    return ``;
  }
}

function ssrRenderAttr(key, value) {
  if (!isRenderableValue(value)) {
    return ``;
  }

  return ` ${key}="${escapeHtml(value)}"`;
}

function isRenderableValue(value) {
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}

function ssrRenderClass(raw) {
  return escapeHtml(normalizeClass(raw));
}

function ssrRenderStyle(raw) {
  if (!raw) {
    return "";
  }

  if (isString(raw)) {
    return escapeHtml(raw);
  }

  const styles = normalizeStyle(raw);
  return escapeHtml(stringifyStyle(styles));
}

function ssrCompile(template, instance) {
  {
    throw new Error(`On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.`);
  }
}

function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
  parentPush("<!--teleport start-->");
  const context = parentComponent.appContext.provides[import_vue.ssrContextKey];
  const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
  const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
  const bufferIndex = targetBuffer.length;
  let teleportContent;

  if (disabled) {
    contentRenderFn(parentPush);
    teleportContent = `<!--teleport anchor-->`;
  } else {
    const {
      getBuffer,
      push
    } = createBuffer();
    contentRenderFn(push);
    push(`<!--teleport anchor-->`);
    teleportContent = getBuffer();
  }

  targetBuffer.splice(bufferIndex, 0, teleportContent);
  parentPush("<!--teleport end-->");
}

var {
  createComponentInstance,
  setCurrentRenderingInstance,
  setupComponent,
  renderComponentRoot,
  normalizeVNode
} = import_vue.ssrUtils;

function createBuffer() {
  let appendable = false;
  const buffer = [];
  return {
    getBuffer() {
      return buffer;
    },

    push(item) {
      const isStringItem = isString(item);

      if (appendable && isStringItem) {
        buffer[buffer.length - 1] += item;
      } else {
        buffer.push(item);
      }

      appendable = isStringItem;

      if (isPromise(item) || isArray(item) && item.hasAsync) {
        buffer.hasAsync = true;
      }
    }

  };
}

function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
  const instance = createComponentInstance(vnode, parentComponent, null);
  const res = setupComponent(instance, true);
  const hasAsyncSetup = isPromise(res);
  const prefetches = instance.sp;

  if (hasAsyncSetup || prefetches) {
    let p = hasAsyncSetup ? res : Promise.resolve();

    if (prefetches) {
      p = p.then(() => Promise.all(prefetches.map(prefetch => prefetch.call(instance.proxy)))).catch(() => {});
    }

    return p.then(() => renderComponentSubTree(instance, slotScopeId));
  } else {
    return renderComponentSubTree(instance, slotScopeId);
  }
}

function renderComponentSubTree(instance, slotScopeId) {
  const comp = instance.type;
  const {
    getBuffer,
    push
  } = createBuffer();

  if (isFunction(comp)) {
    let root = renderComponentRoot(instance);

    if (!comp.props) {
      for (const key in instance.attrs) {
        if (key.startsWith(`data-v-`)) {
          (root.props || (root.props = {}))[key] = ``;
        }
      }
    }

    renderVNode(push, instance.subTree = root, instance, slotScopeId);
  } else {
    if ((!instance.render || instance.render === NOOP) && !instance.ssrRender && !comp.ssrRender && isString(comp.template)) {
      comp.ssrRender = ssrCompile(comp.template);
    }

    for (const e of instance.scope.effects) {
      if (e.computed) e.computed._cacheable = true;
    }

    const ssrRender = instance.ssrRender || comp.ssrRender;

    if (ssrRender) {
      let attrs = instance.inheritAttrs !== false ? instance.attrs : void 0;
      let hasCloned = false;
      let cur = instance;

      while (true) {
        const scopeId = cur.vnode.scopeId;

        if (scopeId) {
          if (!hasCloned) {
            attrs = { ...attrs
            };
            hasCloned = true;
          }

          attrs[scopeId] = "";
        }

        const parent = cur.parent;

        if (parent && parent.subTree && parent.subTree === cur.vnode) {
          cur = parent;
        } else {
          break;
        }
      }

      if (slotScopeId) {
        if (!hasCloned) attrs = { ...attrs
        };
        attrs[slotScopeId.trim()] = "";
      }

      const prev = setCurrentRenderingInstance(instance);
      ssrRender(instance.proxy, push, instance, attrs, instance.props, instance.setupState, instance.data, instance.ctx);
      setCurrentRenderingInstance(prev);
    } else if (instance.render && instance.render !== NOOP) {
      renderVNode(push, instance.subTree = renderComponentRoot(instance), instance, slotScopeId);
    } else {
      const componentName = comp.name || comp.__file || `<Anonymous>`;
      (0, import_vue.warn)(`Component ${componentName} is missing template or render function.`);
      push(`<!---->`);
    }
  }

  return getBuffer();
}

function renderVNode(push, vnode, parentComponent, slotScopeId) {
  const {
    type,
    shapeFlag,
    children
  } = vnode;

  switch (type) {
    case import_vue.Text:
      push(escapeHtml(children));
      break;

    case import_vue.Comment:
      push(children ? `<!--${escapeHtmlComment(children)}-->` : `<!---->`);
      break;

    case import_vue.Static:
      push(children);
      break;

    case import_vue.Fragment:
      if (vnode.slotScopeIds) {
        slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
      }

      push(`<!--[-->`);
      renderVNodeChildren(push, children, parentComponent, slotScopeId);
      push(`<!--]-->`);
      break;

    default:
      if (shapeFlag & 1) {
        renderElementVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 6) {
        push(renderComponentVNode(vnode, parentComponent, slotScopeId));
      } else if (shapeFlag & 64) {
        renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 128) {
        renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
      } else {
        (0, import_vue.warn)("[@vue/server-renderer] Invalid VNode type:", type, `(${typeof type})`);
      }

  }
}

function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
  for (let i = 0; i < children.length; i++) {
    renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
  }
}

function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
  const tag = vnode.type;
  let {
    props,
    children,
    shapeFlag,
    scopeId,
    dirs
  } = vnode;
  let openTag = `<${tag}`;

  if (dirs) {
    props = applySSRDirectives(vnode, props, dirs);
  }

  if (props) {
    openTag += ssrRenderAttrs(props, tag);
  }

  if (scopeId) {
    openTag += ` ${scopeId}`;
  }

  let curParent = parentComponent;
  let curVnode = vnode;

  while (curParent && curVnode === curParent.subTree) {
    curVnode = curParent.vnode;

    if (curVnode.scopeId) {
      openTag += ` ${curVnode.scopeId}`;
    }

    curParent = curParent.parent;
  }

  if (slotScopeId) {
    openTag += ` ${slotScopeId}`;
  }

  push(openTag + `>`);

  if (!isVoidTag(tag)) {
    let hasChildrenOverride = false;

    if (props) {
      if (props.innerHTML) {
        hasChildrenOverride = true;
        push(props.innerHTML);
      } else if (props.textContent) {
        hasChildrenOverride = true;
        push(escapeHtml(props.textContent));
      } else if (tag === "textarea" && props.value) {
        hasChildrenOverride = true;
        push(escapeHtml(props.value));
      }
    }

    if (!hasChildrenOverride) {
      if (shapeFlag & 8) {
        push(escapeHtml(children));
      } else if (shapeFlag & 16) {
        renderVNodeChildren(push, children, parentComponent, slotScopeId);
      }
    }

    push(`</${tag}>`);
  }
}

function applySSRDirectives(vnode, rawProps, dirs) {
  const toMerge = [];

  for (let i = 0; i < dirs.length; i++) {
    const binding = dirs[i];
    const {
      dir: {
        getSSRProps
      }
    } = binding;

    if (getSSRProps) {
      const props = getSSRProps(binding, vnode);
      if (props) toMerge.push(props);
    }
  }

  return (0, import_vue.mergeProps)(rawProps || {}, ...toMerge);
}

function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
  const target = vnode.props && vnode.props.to;
  const disabled = vnode.props && vnode.props.disabled;

  if (!target) {
    if (!disabled) {
      (0, import_vue.warn)(`[@vue/server-renderer] Teleport is missing target prop.`);
    }

    return [];
  }

  if (!isString(target)) {
    (0, import_vue.warn)(`[@vue/server-renderer] Teleport target must be a query selector string.`);
    return [];
  }

  ssrRenderTeleport(push, push2 => {
    renderVNodeChildren(push2, vnode.children, parentComponent, slotScopeId);
  }, target, disabled || disabled === "", parentComponent);
}

var {
  isVNode
} = import_vue.ssrUtils;

async function unrollBuffer(buffer) {
  if (buffer.hasAsync) {
    let ret = "";

    for (let i = 0; i < buffer.length; i++) {
      let item = buffer[i];

      if (isPromise(item)) {
        item = await item;
      }

      if (isString(item)) {
        ret += item;
      } else {
        ret += await unrollBuffer(item);
      }
    }

    return ret;
  } else {
    return unrollBufferSync(buffer);
  }
}

function unrollBufferSync(buffer) {
  let ret = "";

  for (let i = 0; i < buffer.length; i++) {
    let item = buffer[i];

    if (isString(item)) {
      ret += item;
    } else {
      ret += unrollBufferSync(item);
    }
  }

  return ret;
}

async function renderToString(input, context = {}) {
  if (isVNode(input)) {
    return renderToString((0, import_vue.createApp)({
      render: () => input
    }), context);
  }

  const vnode = (0, import_vue.createVNode)(input._component, input._props);
  vnode.appContext = input._context;
  input.provide(import_vue.ssrContextKey, context);
  const buffer = await renderComponentVNode(vnode);
  const result = await unrollBuffer(buffer);
  await resolveTeleports(context);
  return result;
}

async function resolveTeleports(context) {
  if (context.__teleportBuffers) {
    context.teleports = context.teleports || {};

    for (const key in context.__teleportBuffers) {
      context.teleports[key] = await unrollBuffer(await Promise.all(context.__teleportBuffers[key]));
    }
  }
}

var {
  isVNode: isVNode$1
} = import_vue.ssrUtils;

async function unrollBuffer$1(buffer, stream) {
  if (buffer.hasAsync) {
    for (let i = 0; i < buffer.length; i++) {
      let item = buffer[i];

      if (isPromise(item)) {
        item = await item;
      }

      if (isString(item)) {
        stream.push(item);
      } else {
        await unrollBuffer$1(item, stream);
      }
    }
  } else {
    unrollBufferSync$1(buffer, stream);
  }
}

function unrollBufferSync$1(buffer, stream) {
  for (let i = 0; i < buffer.length; i++) {
    let item = buffer[i];

    if (isString(item)) {
      stream.push(item);
    } else {
      unrollBufferSync$1(item, stream);
    }
  }
}

function renderToSimpleStream(input, context, stream) {
  if (isVNode$1(input)) {
    return renderToSimpleStream((0, import_vue.createApp)({
      render: () => input
    }), context, stream);
  }

  const vnode = (0, import_vue.createVNode)(input._component, input._props);
  vnode.appContext = input._context;
  input.provide(import_vue.ssrContextKey, context);
  Promise.resolve(renderComponentVNode(vnode)).then(buffer => unrollBuffer$1(buffer, stream)).then(() => resolveTeleports(context)).then(() => stream.push(null)).catch(error => {
    stream.destroy(error);
  });
  return stream;
}

function renderToStream(input, context = {}) {
  console.warn(`[@vue/server-renderer] renderToStream is deprecated - use renderToNodeStream instead.`);
  return renderToNodeStream(input, context);
}

function renderToNodeStream(input, context = {}) {
  const stream = null;
  {
    throw new Error(`ESM build of renderToStream() does not support renderToNodeStream(). Use pipeToNodeWritable() with an existing Node.js Writable stream instance instead.`);
  }
}

function pipeToNodeWritable(input, context = {}, writable) {
  renderToSimpleStream(input, context, {
    push(content) {
      if (content != null) {
        writable.write(content);
      } else {
        writable.end();
      }
    },

    destroy(err) {
      writable.destroy(err);
    }

  });
}

function renderToWebStream(input, context = {}) {
  if (typeof ReadableStream !== "function") {
    throw new Error(`ReadableStream constructor is not available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead.`);
  }

  const encoder = new TextEncoder();
  let cancelled = false;
  return new ReadableStream({
    start(controller) {
      renderToSimpleStream(input, context, {
        push(content) {
          if (cancelled) return;

          if (content != null) {
            controller.enqueue(encoder.encode(content));
          } else {
            controller.close();
          }
        },

        destroy(err) {
          controller.error(err);
        }

      });
    },

    cancel() {
      cancelled = true;
    }

  });
}

function pipeToWebWritable(input, context = {}, writable) {
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  let hasReady = false;

  try {
    hasReady = isPromise(writer.ready);
  } catch (e) {}

  renderToSimpleStream(input, context, {
    async push(content) {
      if (hasReady) {
        await writer.ready;
      }

      if (content != null) {
        return writer.write(encoder.encode(content));
      } else {
        return writer.close();
      }
    },

    destroy(err) {
      console.log(err);
      writer.close();
    }

  });
}

function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
  return renderComponentVNode((0, import_vue.createVNode)(comp, props, children), parentComponent, slotScopeId);
}

function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
  push(`<!--[-->`);
  ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId);
  push(`<!--]-->`);
}

function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
  const slotFn = slots[slotName];

  if (slotFn) {
    const slotBuffer = [];

    const bufferedPush = item => {
      slotBuffer.push(item);
    };

    const ret = slotFn(slotProps, bufferedPush, parentComponent, slotScopeId ? " " + slotScopeId : "");

    if (isArray(ret)) {
      renderVNodeChildren(push, ret, parentComponent, slotScopeId);
    } else {
      let isEmptySlot = true;

      if (transition) {
        isEmptySlot = false;
      } else {
        for (let i = 0; i < slotBuffer.length; i++) {
          if (!isComment(slotBuffer[i])) {
            isEmptySlot = false;
            break;
          }
        }
      }

      if (isEmptySlot) {
        if (fallbackRenderFn) {
          fallbackRenderFn();
        }
      } else {
        for (let i = 0; i < slotBuffer.length; i++) {
          push(slotBuffer[i]);
        }
      }
    }
  } else if (fallbackRenderFn) {
    fallbackRenderFn();
  }
}

var commentRE = /<!--[^]*?-->/gm;

function isComment(item) {
  return typeof item === "string" && commentRE.test(item) && !item.replace(commentRE, "").trim();
}

function ssrInterpolate(value) {
  return escapeHtml(toDisplayString(value));
}

function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg, ...args) {
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [msg + args.join(""), instance && instance.proxy, trace.map(({
      vnode
    }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"), trace]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];

    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }

    console.warn(...warnArgs);
  }
}

function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  }

  const normalizedStack = [];

  while (currentVNode) {
    const last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}

function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...(i === 0 ? [] : [`
`]), ...formatTraceEntry(entry));
  });
  return logs;
}

function formatTraceEntry({
  vnode,
  recurseCount
}) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}

function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach(key => {
    res.push(...formatProp(key, props[key]));
  });

  if (keys.length > 3) {
    res.push(` ...`);
  }

  return res;
}

function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}

var ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};

function callWithErrorHandling(fn, instance, type, args) {
  let res;

  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;

  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = true ? ErrorTypeStrings[type] : type;

    while (cur) {
      const errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    }

    const appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode, throwInDev = true) {
  if (true) {
    const info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);

    if (contextVNode) {
      popWarningContext();
    }

    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {
    console.error(err);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, "");

function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}

function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);

  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    const inferFromRegistry = registry => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}

function ssrRenderList(source, renderItem) {
  if (isArray(source) || isString(source)) {
    for (let i = 0, l = source.length; i < l; i++) {
      renderItem(source[i], i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn(`The v-for range expect an integer value but got ${source}.`);
      return;
    }

    for (let i = 0; i < source; i++) {
      renderItem(i + 1, i);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      const arr = Array.from(source);

      for (let i = 0, l = arr.length; i < l; i++) {
        renderItem(arr[i], i);
      }
    } else {
      const keys = Object.keys(source);

      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        renderItem(source[key], key, i);
      }
    }
  }
}

async function ssrRenderSuspense(push, {
  default: renderContent
}) {
  if (renderContent) {
    renderContent();
  } else {
    push(`<!---->`);
  }
}

function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
  if (typeof dir !== "function" && dir.getSSRProps) {
    return dir.getSSRProps({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    }, null) || {};
  }

  return {};
}

var ssrLooseEqual = looseEqual;

function ssrLooseContain(arr, value) {
  return looseIndexOf(arr, value) > -1;
}

function ssrRenderDynamicModel(type, model, value) {
  switch (type) {
    case "radio":
      return looseEqual(model, value) ? " checked" : "";

    case "checkbox":
      return (isArray(model) ? ssrLooseContain(model, value) : model) ? " checked" : "";

    default:
      return ssrRenderAttr("value", model);
  }
}

function ssrGetDynamicModelProps(existingProps = {}, model) {
  const {
    type,
    value
  } = existingProps;

  switch (type) {
    case "radio":
      return looseEqual(model, value) ? {
        checked: true
      } : null;

    case "checkbox":
      return (isArray(model) ? ssrLooseContain(model, value) : model) ? {
        checked: true
      } : null;

    default:
      return {
        value: model
      };
  }
}

(0, import_vue.initDirectivesForSSR)();
};

code(module, require);
return module.exports;
});

