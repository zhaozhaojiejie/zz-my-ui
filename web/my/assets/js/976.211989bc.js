(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2681:function(r,t,e){"use strict";e.r(t);e(986),e(355);var n=e(516),a=e.n(n),o=(e(987),e(517)),i=e.n(o),u=e(0);u.default.use(i.a),u.default.use(a.a);var c={},l=e(18),f=Object(l.a)(c,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-date"}),r._v(" 我的行程")]),r._v("\n      我的行程\n    ")]),r._v(" "),e("el-tab-pane",{attrs:{label:"消息中心"}},[r._v("消息中心")]),r._v(" "),e("el-tab-pane",{attrs:{label:"角色管理"}},[r._v("角色管理")]),r._v(" "),e("el-tab-pane",{attrs:{label:"定时任务补偿"}},[r._v("定时任务补偿")])],1)],1)}),[],!1,null,null,null);t.default=f.exports},355:function(r,t,e){},357:function(r,t,e){"use strict";t.__esModule=!0,t.isEmpty=t.isEqual=t.arrayEquals=t.looseEqual=t.capitalize=t.kebabCase=t.autoprefixer=t.isFirefox=t.isEdge=t.isIE=t.coerceTruthyValueToArray=t.arrayFind=t.arrayFindIndex=t.escapeRegexpString=t.valueEquals=t.generateId=t.getValueByPath=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};t.noop=function(){},t.hasOwn=function(r,t){return c.call(r,t)},t.toObject=function(r){for(var t={},e=0;e<r.length;e++)r[e]&&l(t,r[e]);return t},t.getPropByPath=function(r,t,e){for(var n=r,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,i=a.length;o<i-1&&(n||e);++o){var u=a[o];if(!(u in n)){if(e)throw new Error("please transfer a valid prop path to form item!");break}n=n[u]}return{o:n,k:a[o],v:n?n[a[o]]:null}},t.rafThrottle=function(r){var t=!1;return function(){for(var e=this,n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];t||(t=!0,window.requestAnimationFrame((function(n){r.apply(e,a),t=!1})))}},t.objToArray=function(r){if(Array.isArray(r))return r;return y(r)?[]:[r]};var a,o=e(0),i=(a=o)&&a.__esModule?a:{default:a},u=e(397);var c=Object.prototype.hasOwnProperty;function l(r,t){for(var e in t)r[e]=t[e];return r}t.getValueByPath=function(r,t){for(var e=(t=t||"").split("."),n=r,a=null,o=0,i=e.length;o<i;o++){var u=e[o];if(!n)break;if(o===i-1){a=n[u];break}n=n[u]}return a};t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(r,t){if(r===t)return!0;if(!(r instanceof Array))return!1;if(!(t instanceof Array))return!1;if(r.length!==t.length)return!1;for(var e=0;e!==r.length;++e)if(r[e]!==t[e])return!1;return!0},t.escapeRegexpString=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(r).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var f=t.arrayFindIndex=function(r,t){for(var e=0;e!==r.length;++e)if(t(r[e]))return e;return-1},s=(t.arrayFind=function(r,t){var e=f(r,t);return-1!==e?r[e]:void 0},t.coerceTruthyValueToArray=function(r){return Array.isArray(r)?r:r?[r]:[]},t.isIE=function(){return!i.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},t.isEdge=function(){return!i.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},t.isFirefox=function(){return!i.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},t.autoprefixer=function(r){if("object"!==(void 0===r?"undefined":n(r)))return r;var t=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(e){var n=r[e];e&&n&&t.forEach((function(t){r[t+e]=n}))})),r},t.kebabCase=function(r){var t=/([^-])([A-Z])/g;return r.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()},t.capitalize=function(r){return(0,u.isString)(r)?r.charAt(0).toUpperCase()+r.slice(1):r},t.looseEqual=function(r,t){var e=(0,u.isObject)(r),n=(0,u.isObject)(t);return e&&n?JSON.stringify(r)===JSON.stringify(t):!e&&!n&&String(r)===String(t)}),p=t.arrayEquals=function(r,t){if(t=t||[],(r=r||[]).length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!s(r[e],t[e]))return!1;return!0},y=(t.isEqual=function(r,t){return Array.isArray(r)&&Array.isArray(t)?p(r,t):s(r,t)},t.isEmpty=function(r){if(null==r)return!0;if("boolean"==typeof r)return!1;if("number"==typeof r)return!r;if(r instanceof Error)return""===r.message;switch(Object.prototype.toString.call(r)){case"[object String]":case"[object Array]":return!r.length;case"[object File]":case"[object Map]":case"[object Set]":return!r.size;case"[object Object]":return!Object.keys(r).length}return!1})},397:function(r,t,e){"use strict";t.__esModule=!0,t.isString=function(r){return"[object String]"===Object.prototype.toString.call(r)},t.isObject=function(r){return"[object Object]"===Object.prototype.toString.call(r)},t.isHtmlElement=function(r){return r&&r.nodeType===Node.ELEMENT_NODE};t.isFunction=function(r){return r&&"[object Function]"==={}.toString.call(r)},t.isUndefined=function(r){return void 0===r},t.isDefined=function(r){return null!=r}},986:function(r,t,e){},987:function(r,t,e){}}]);