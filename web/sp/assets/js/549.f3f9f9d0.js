(window.webpackJsonp=window.webpackJsonp||[]).push([[549,38],{3113:function(t,e,n){"use strict";n.r(e);n(381),n(355);var i=n(361),o=n.n(i),r=(n(866),n(123),n(874)),s=(n(819),n(828)),a=(n(216),n(138)),l=n(0),c={components:{spSkeleton:a.a,spTitle:s.a,spParagraph:r.a},data:function(){return{loading:!1}},methods:{show:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),3e3)}}};l.default.use(o.a),l.default.use(r.a),l.default.use(a.a),l.default.use(s.a);var u=c,d=n(18),f=Object(d.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("sp-skeleton",{attrs:{active:"",loading:this.loading}},[e("sp-title",{attrs:{level:"3"}},[this._v("前端框架 spWeb 4.0")]),this._v(" "),e("sp-paragraph",[this._v("spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。")])],1),this._v(" "),e("el-button",{staticStyle:{"margin-top":"20px"},on:{click:this.show}},[this._v("显示骨架屏")])],1)}),[],!1,null,null,null);e.default=f.exports},355:function(t,e,n){},361:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},97:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};i._withStripped=!0;var o={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n(0),s=Object(r.a)(o,i,[],!1,null,null,null);s.options.__file="packages/button/src/button.vue";var a=s.exports;a.install=function(t){t.component(a.name,a)};e.default=a}})},367:function(t,e,n){var i=n(372);t.exports=function(t,e,n){return void 0===n?i(t,e,!1):i(t,n,!1!==e)}},372:function(t,e){t.exports=function(t,e,n,i){var o,r=0;return"boolean"!=typeof e&&(i=n,n=e,e=void 0),function(){var s=this,a=Number(new Date)-r,l=arguments;function c(){r=Number(new Date),n.apply(s,l)}function u(){o=void 0}i&&!o&&c(),o&&clearTimeout(o),void 0===i&&a>t?c():!0!==e&&(o=setTimeout(i?u:c,void 0===i?t-a:t))}}},375:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=131)}({131:function(t,e,n){"use strict";n.r(e);var i=n(5),o=n.n(i),r=n(17),s=n.n(r),a=n(2),l=n(3),c=n(7),u=n.n(c),d={name:"ElTooltip",mixins:[o.a],props:{openDelay:{type:Number,default:0},disabled:Boolean,manual:Boolean,effect:{type:String,default:"dark"},arrowOffset:{type:Number,default:0},popperClass:String,content:String,visibleArrow:{default:!0},transition:{type:String,default:"el-fade-in-linear"},popperOptions:{default:function(){return{boundariesPadding:10,gpuAcceleration:!1}}},enterable:{type:Boolean,default:!0},hideAfter:{type:Number,default:0},tabindex:{type:Number,default:0}},data:function(){return{tooltipId:"el-tooltip-"+Object(l.generateId)(),timeoutPending:null,focusing:!1}},beforeCreate:function(){var t=this;this.$isServer||(this.popperVM=new u.a({data:{node:""},render:function(t){return this.node}}).$mount(),this.debounceClose=s()(200,(function(){return t.handleClosePopper()})))},render:function(t){var e=this;this.popperVM&&(this.popperVM.node=t("transition",{attrs:{name:this.transition},on:{afterLeave:this.doDestroy}},[t("div",{on:{mouseleave:function(){e.setExpectedState(!1),e.debounceClose()},mouseenter:function(){e.setExpectedState(!0)}},ref:"popper",attrs:{role:"tooltip",id:this.tooltipId,"aria-hidden":this.disabled||!this.showPopper?"true":"false"},directives:[{name:"show",value:!this.disabled&&this.showPopper}],class:["el-tooltip__popper","is-"+this.effect,this.popperClass]},[this.$slots.content||this.content])]));var n=this.getFirstElement();if(!n)return null;var i=n.data=n.data||{};return i.staticClass=this.addTooltipClass(i.staticClass),n},mounted:function(){var t=this;this.referenceElm=this.$el,1===this.$el.nodeType&&(this.$el.setAttribute("aria-describedby",this.tooltipId),this.$el.setAttribute("tabindex",this.tabindex),Object(a.on)(this.referenceElm,"mouseenter",this.show),Object(a.on)(this.referenceElm,"mouseleave",this.hide),Object(a.on)(this.referenceElm,"focus",(function(){if(t.$slots.default&&t.$slots.default.length){var e=t.$slots.default[0].componentInstance;e&&e.focus?e.focus():t.handleFocus()}else t.handleFocus()})),Object(a.on)(this.referenceElm,"blur",this.handleBlur),Object(a.on)(this.referenceElm,"click",this.removeFocusing)),this.value&&this.popperVM&&this.popperVM.$nextTick((function(){t.value&&t.updatePopper()}))},watch:{focusing:function(t){t?Object(a.addClass)(this.referenceElm,"focusing"):Object(a.removeClass)(this.referenceElm,"focusing")}},methods:{show:function(){this.setExpectedState(!0),this.handleShowPopper()},hide:function(){this.setExpectedState(!1),this.debounceClose()},handleFocus:function(){this.focusing=!0,this.show()},handleBlur:function(){this.focusing=!1,this.hide()},removeFocusing:function(){this.focusing=!1},addTooltipClass:function(t){return t?"el-tooltip "+t.replace("el-tooltip",""):"el-tooltip"},handleShowPopper:function(){var t=this;this.expectedState&&!this.manual&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.showPopper=!0}),this.openDelay),this.hideAfter>0&&(this.timeoutPending=setTimeout((function(){t.showPopper=!1}),this.hideAfter)))},handleClosePopper:function(){this.enterable&&this.expectedState||this.manual||(clearTimeout(this.timeout),this.timeoutPending&&clearTimeout(this.timeoutPending),this.showPopper=!1,this.disabled&&this.doDestroy())},setExpectedState:function(t){!1===t&&clearTimeout(this.timeoutPending),this.expectedState=t},getFirstElement:function(){var t=this.$slots.default;if(!Array.isArray(t))return null;for(var e=null,n=0;n<t.length;n++)t[n]&&t[n].tag&&(e=t[n]);return e}},beforeDestroy:function(){this.popperVM&&this.popperVM.$destroy()},destroyed:function(){var t=this.referenceElm;1===t.nodeType&&(Object(a.off)(t,"mouseenter",this.show),Object(a.off)(t,"mouseleave",this.hide),Object(a.off)(t,"focus",this.handleFocus),Object(a.off)(t,"blur",this.handleBlur),Object(a.off)(t,"click",this.removeFocusing))},install:function(t){t.component(d.name,d)}};e.default=d},17:function(t,e){t.exports=n(367)},2:function(t,e){t.exports=n(358)},3:function(t,e){t.exports=n(357)},5:function(t,e){t.exports=n(378)},7:function(t,e){t.exports=n(0)}})},376:function(t,e,n){},377:function(t,e,n){"use strict";var i=n(53),o=(n(124),n(32),n(386),n(199),n(31)),r={DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"},s={Theme:r,name:"spIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(r).includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(o.a)(t,"sp-icon--".concat(this.theme),!!this.theme),Object(o.a)(t,"is-pointer",!!this.$listeners.click),Object(o.a)(t,"is-svg",this.svg),t),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},a=n(18),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"sp-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?n(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},381:function(t,e,n){},386:function(t,e,n){var i=n(1),o=n(388).values;i({target:"Object",stat:!0},{values:function(t){return o(t)}})},388:function(t,e,n){var i=n(8),o=n(90),r=n(13),s=n(127).f,a=function(t){return function(e){for(var n,a=r(e),l=o(a),c=l.length,u=0,d=[];c>u;)n=l[u++],i&&!s.call(a,n)||d.push(t?[n,a[n]]:a[n]);return d}};t.exports={entries:a(!0),values:a(!1)}},430:function(t,e,n){"use strict";var i=n(202),o=n(10),r=n(19),s=n(22),a=n(204),l=n(203);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=o(t),c=String(this);if(!s.global)return l(s,c);var u=s.unicode;s.lastIndex=0;for(var d,f=[],p=0;null!==(d=l(s,c));){var h=String(d[0]);f[p]=h,""===h&&(s.lastIndex=a(c,r(s.lastIndex),u)),p++}return 0===p?null:f}]}))},478:function(t,e,n){var i=n(22),o=/"/g;t.exports=function(t,e,n,r){var s=String(i(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),a+">"+s+"</"+e+">"}},479:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},609:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(209);var i=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1},o=i(["flex","webkitFlex","Flex","msFlex"]);e.a=i},637:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var i=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(i.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(5);function o(t,e,n,i,o){var s=r.apply(this,arguments);return t.addEventListener(n,s,o),{destroy:function(){t.removeEventListener(n,s,o)}}}function r(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,i,r){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,i,r)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return s(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),l=n(1),c=n.n(l),u=n(2),d=n.n(u),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(c.a);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=h}]).default},t.exports=i()},657:function(t,e,n){"use strict";n(198),n(21),n(54),n(124),n(87),n(197),n(732),n(55);var i=n(52),o=n(31),r=n(364),s=n.n(r),a=n(375),l=n.n(a),c=(n(376),n(123),n(377)),u=(n(663),n(666)),d=n(609),f=n(360),p=n(0),h=(n(721),{components:{spIcon:c.a,ElInput:s.a},props:{value:String},data:function(){return{currentValue:this.value||""}},watch:{value:function(t){this.currentValue=t||""},currentValue:function(t){this.$emit("change",t)}},methods:{handleEnter:function(){this.$emit("save",this.currentValue)}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.input.focus()}))}});p.default.use(c.a);var m=h,y=n(18),v=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"sp-typography__editor"},[n("ElInput",{ref:"input",attrs:{rows:1,autosize:"",type:"textarea"},on:{blur:t.handleEnter},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),t.handleEnter(e))}},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}}),t._v(" "),n("sp-icon",{staticClass:"sp-typography__enter",attrs:{name:"icon-enter",svg:""}})],1)}),[],!1,null,null,null).exports,b=(n(85),n(34),n(209),n(33),n(430),n(358)),g={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function x(t){if(!t)return 0;var e=t.match(/^\d*(\.\d*)?/);return e?Number(e[0]):0}function E(t){var e=document.createElement("div"),n=function(t){return Array.prototype.slice.apply(t).map((function(e){return"".concat(e,": ").concat(t.getPropertyValue(e),";")})).join("")}(t);return e.setAttribute("style",n),Object(b.setStyle)(e,{position:"fixed",left:"0",height:"auto",minHeight:"auto",maxHeight:"auto",top:"-999999px",zIndex:"-1000",textOverflow:"clip",whiteSpace:"normal",webkitLineClamp:"none"}),document.body.appendChild(e),e}function S(t){t.parentNode.removeChild(t)}function T(t,e,n){var i=new(p.default.extend({functional:!0,render:function(){var t=arguments[0];return t("div",{style:g},[t("span",{style:g},[e]),t("span",{style:g},[n])])}}));return i.$mount(),t.appendChild(i.$el),i}function O(t){t.$destroy(),t.$el.parentNode.removeChild(t.$el)}function _(t,e){return t.offsetHeight<e}function w(t,e){t.innerHTML="";var n=document.createElement("span");return t.appendChild(n),n.appendChild(e),n}function k(t,e,n){t.insertBefore(e,n)}var j=Object(d.a)("webkitLineClamp"),C=Object(d.a)("textOverflow");e.a={components:{spClipboard:u.a,spIcon:c.a,Tooltip:l.a,Input:s.a,Editable:v},props:{tag:{type:String,default:"article"},children:{type:Array},copyable:Boolean,copyText:String,delete:Boolean,disabled:Boolean,editable:Boolean,ellipsis:Boolean,rows:{type:Number,default:1},expandable:Boolean,tooltip:[Boolean,Object],mark:Boolean,underline:Boolean,code:Boolean,strong:Boolean,pre:Boolean,small:Boolean,type:{type:String,default:"",validator:function(t){return["","primary","secondary","warning","danger"].includes(t)}}},data:function(){return this.copyTimerId=null,{copied:!1,editing:!1,ellipsisContent:null,isEllipsis:!1,expanded:!1}},computed:{classes:function(){var t,e=this.canUseCSSEllipsis(),n=1===this.rows&&e,i=this.rows&&this.rows>1&&e;return t={"sp-typography":!0},Object(o.a)(t,"is-".concat(this.type),!!this.type),Object(o.a)(t,"is-disabled",this.disabled),Object(o.a)(t,"is-editing",this.editing),Object(o.a)(t,"is-ellipsis-single-line",this.ellipsis&&n),Object(o.a)(t,"is-ellipsis",this.ellipsis&&i),Object(o.a)(t,"is-pointer",!!this.$listeners.click),Object(o.a)(t,"is-small",this.small),t},styles:function(){var t=this.canUseCSSEllipsis();return this.rows&&this.rows>1&&t?{"-webkit-line-clamp":this.rows}:null},copyIcon:function(){return this.copied?"el-icon-check":"el-icon-document-copy"}},watch:{children:function(){this.resizeOnNextFrame()}},methods:{canUseCSSEllipsis:function(){return!(this.editable||this.copyable||this.expandable||this.tooltip)&&(1===this.rows?C:j)},getText:function(){return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];return e.forEach((function(e){e.children&&(n=n.concat(t(e.children))),e.text&&n.push(e.text)})),n.join("")}(this.children)},setText:function(t){this.children&&this.children[0]&&(this.children[0].text=t)},getCopyText:function(){return this.copyText?this.copyText:this.getText()},handleCopy:function(t){var e=this;this.copied=!0,clearTimeout(this.copyTimerId),this.copyTimerId=setTimeout((function(){e.copied=!1}),3e3),this.$emit("copy",t)},handleEdit:function(){this.editing=!0,this.$emit("editing")},toggleExpand:function(){this.expanded=!this.expanded,this.$emit("expand",this.expanded)},handleEditorSave:function(t){this.editing=!1,this.setText(t),this.$emit("edited",t),this.resizeOnNextFrame()},handleTextChange:function(t){this.$emit("change",t)},resizeOnNextFrame:function(){var t=this;!this.editing&&this.ellipsis&&this.$nextTick((function(){t.syncEllipsis()}))},syncEllipsis:function(){if(this.children&&0!==this.children.length&&this.rows&&!(this.rows<0)&&!this.canUseCSSEllipsis()){var t=function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"...",r=window.getComputedStyle(t),s=E(r),a=x(r.lineHeight)||16,l=a*(e+1)+x(r.paddingTop)+x(r.paddingBottom);if(0===l)return S(s),{content:n,ellipsis:!1};var c=T(s,n,i);if(_(s,l))return O(c),S(s),{content:n,ellipsis:!1};var u=Array.prototype.slice.apply(s.childNodes[0].childNodes[0].cloneNode(!0).childNodes),d=u.filter((function(t){return 8!==t})),f=Array.prototype.slice.apply(s.childNodes[0].childNodes[1].cloneNode(!0).childNodes);O(c);var p=[],h=document.createTextNode(o),m=w(s,h);function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=Math.floor((n+i)/2);if(t.textContent=e.slice(0,r),n>=i-1)for(var a=i;a>=n;a-=1){var c=e.slice(0,a);if(t.textContent=c,_(s,l))return a===e.length?{finished:!1,vnode:e}:{finished:!0,vnode:c}}return _(s,l)?y(t,e,r,i,r):y(t,e,n,r,o)}function v(t,e){var i=t.nodeType;if(1===i)return k(m,t,h),_(s,l)?{finished:!1,vnode:n[e]}:(m.removeChild(t),{finished:!0,vnode:null});if(3===i){var o=t.textContent||"",r=document.createTextNode(o);return k(m,r,h),y(r,o)}return{finished:!1,vnode:null}}return f.forEach((function(t){s.appendChild(t)})),d.some((function(t,e){var n=v(t,e),i=n.finished,o=n.vnode;return o&&p.push(o),i})),S(s),{content:p,ellipsis:!0}}(this.$el,this.rows,this.children,this.renderOperations()),e=t.content,n=t.ellipsis;this.ellipsisContent=e,this.isEllipsis=n}},renderCopy:function(){var t=this.$createElement;if(this.copyable)return t("sp-clipboard",{class:"sp-typography__copy",attrs:{tooltip:!0,text:this.getCopyText},on:{success:this.handleCopy}},[t("sp-icon",{attrs:{name:this.copyIcon},class:{"sp-typography__copy-icon":!0,"is-copied":this.copied}})])},renderEdit:function(){var t=this.$createElement;if(this.editable)return t("Tooltip",{class:"sp-typography__edit",attrs:{content:"编辑",placement:"top"}},[t("span",[t("sp-icon",{class:"sp-typography__edit-icon",attrs:{name:"el-icon-edit"},on:{click:this.handleEdit}})])])},renderExpand:function(){var t=this.$createElement;if(this.ellipsis&&this.expandable&&!this.tooltip&&this.isEllipsis)return t("a",{class:"sp-typography__expand",on:{click:this.toggleExpand}},[this.expanded?"收起":"展开"])},renderEditInput:function(){return(0,this.$createElement)(v,{attrs:{value:this.getText()},on:{change:this.handleTextChange,save:this.handleEditorSave}})},renderOperations:function(){return[this.renderExpand(),this.renderEdit(),this.renderCopy()].filter((function(t){return t}))},renderTooltip:function(t,e){if(!this.ellipsis||!this.tooltip)return e;if(!this.isEllipsis)return e;var n=Object(i.a)({content:this.getText(),placement:"top"},this.tooltip);return t("Tooltip",{props:Object(i.a)({},n)},[e])}},render:function(t){if(this.editing)return t(this.tag,{class:this.classes},[this.renderEditInput()]);var e=[];e=this.isEllipsis&&!this.expanded?this.ellipsisContent.concat("...",this.renderOperations()):[].concat(function(t,e,n){var i=n,o=e.mark,r=e.code,s=e.underline,a=e.del,l=e.strong;function c(e,n){e&&(i=t(n,{},[].concat(i)))}return c(e.pre,"pre"),c(l,"strong"),c(s,"u"),c(a,"del"),c(r,"code"),c(o,"mark"),i}(t,{strong:this.strong,mark:this.mark,underline:this.underline,del:this.delete,code:this.code,pre:this.pre},this.children),this.renderOperations());var n=t(this.tag,{class:this.classes,style:this.styles},e);return this.renderTooltip(t,n)},mounted:function(){this.ellipsis&&(Object(f.addResizeListener)(this.tooltip?this.$el.parentNode:this.$el,this.resizeOnNextFrame),this.resizeOnNextFrame())},beforeDestroy:function(){clearTimeout(this.copyTimerId),this.ellipsis&&Object(f.removeResizeListener)(this.tooltip?this.$el.parentNode:this.$el,this.resizeOnNextFrame)}}},663:function(t,e,n){},666:function(t,e,n){"use strict";var i=n(53),o=n(52),r=n(375),s=n.n(r),a=n(637),l=n.n(a),c={name:"spClipboard",components:{Tooltip:s.a},props:{tag:{type:String,default:"span"},text:{type:[String,Function]},target:{type:[String,Function]},action:{type:[String,Function]},message:[Boolean,Object],tooltip:[Object,Boolean],defaultTip:{type:String,default:"复制"},successTip:{type:String,default:"复制成功"},disabled:Boolean},data:function(){return{tip:this.defaultTip}},computed:{clipboardText:function(){return"string"==typeof this.text?this.text:null},clipboardTarget:function(){return"string"==typeof this.target?this.target:null},clipboardAction:function(){return"string"==typeof this.action?this.action:null},options:function(){var t={};return"function"==typeof this.text&&(t.text=this.text),"function"==typeof this.action&&(t.action=this.action),"function"==typeof this.target&&(t.action=this.target),t},tooltipOptions:function(){return Object(o.a)(Object(o.a)({content:this.tip,placement:"top"},this.tooltip||{}),{},{disabled:this.disabled||!this.tooltip})},messageOptions:function(){return Object(o.a)({message:this.successTip,type:"success"},this.message||{})}},watch:{options:function(){var t=this;this.dispose(),this.$nextTick((function(){t.instance()}))},disabled:function(t){var e=this;this.dispose(),t&&this.$nextTick((function(){e.instance()}))}},methods:{instance:function(){var t=this;this.clipboard=new l.a(this.$el,this.options),this.clipboard.on("success",(function(e){t.tooltipHandler(),t.messageHandler(),t.$emit("success",e),e.clearSelection()})),this.clipboard.on("error",(function(e){t.$emit("error",e)}))},dispose:function(){clearTimeout(this.timerId),this.clipboard&&this.clipboard.destroy(),this.clipboard=null},tooltipHandler:function(){var t=this;this.tip=this.successTip,clearTimeout(this.timerId),this.timerId=setTimeout((function(){t.tip=t.defaultTip}),3e3)},messageHandler:function(){this.message&&this.$message(Object(o.a)({},this.messageOptions))},copy:function(){this.$el.click()}},mounted:function(){!this.disabled&&this.instance()},beforeDestroy:function(){this.dispose()}},u=n(18),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tooltip",t._b({},"Tooltip",t.tooltipOptions,!1),[n(t.tag,{tag:"component",staticClass:"sp-clipboard",class:{"is-disabled":t.disabled},attrs:{"data-clipboard-text":t.clipboardText,"data-clipboard-target":t.clipboardTarget,"data-clipboard-action":t.clipboardAction}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(d)},721:function(t,e,n){"use strict";var i=n(52),o=n(0),r=n(56),s={functional:!0,render:function(t,e){var n=e.props,o=Object(i.a)(Object(i.a)({},r.a.svg),n);return t("svg",{attrs:Object(i.a)({},o)},[t("path",{attrs:{d:"M51.87109428 665.3763019h766.88150955c61.35052074 0 115.03222645-53.68170565 115.03222641-115.03222644v-460.1289057c0-23.00644525 15.33763018-38.34407546 38.34407548-38.34407548s38.34407546 15.33763018 38.34407546 38.34407548v460.1289057c0 107.36341134-84.35696609 191.72037738-191.72037735 191.72037736H51.87109428v-76.68815092z"}}),t("path",{attrs:{d:"M281.93554718 972.12890572c-7.66881507 0-23.00644525 0-30.67526045-7.66881513l-230.06445283-230.06445283c-15.33763018-15.33763018-15.33763018-38.34407546 0-53.68170564l230.06445283-230.06445286c15.33763018-15.33763018 38.34407546-15.33763018 53.68170572 0s15.33763018 38.34407546 0 53.68170567l-199.3891925 199.38919245 199.3891925 199.38919252c15.33763018 15.33763018 15.33763018 38.34407546 0 53.68170562 0 15.33763018-15.33763018 15.33763018-23.00644527 15.3376302z"}})])}};o.default.component("icon-enter",s)},732:function(t,e,n){"use strict";var i=n(1),o=n(478);i({target:"String",proto:!0,forced:n(479)("small")},{small:function(){return o(this,"small","","")}})},819:function(t,e,n){},828:function(t,e,n){"use strict";var i=n(53),o=(n(197),n(31)),r=n(52),s=n(657),a={name:"spTitle",components:{spBase:s.a},props:Object(r.a)(Object(r.a)({},s.a.props),{},{level:{type:[Number,String],default:1,validator:function(t){return Number(t)>=1&&Number(t)<=4}}}),computed:{tagName:function(){return"h".concat(this.level)},classes:function(){return Object(o.a)({},"sp-title--h".concat(this.level),!0)}}},l=n(18),c=Object(l.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("spBase",this._g(this._b({staticClass:"sp-title",class:this.classes,attrs:{tag:this.tagName,children:this.$slots.default}},"spBase",this.$props,!1),this.$listeners))}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},866:function(t,e,n){},874:function(t,e,n){"use strict";var i=n(53),o=n(52),r=n(657),s={name:"spParagraph",components:{spBase:r.a},props:Object(o.a)({},r.a.props)},a=n(18),l=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("spBase",this._g(this._b({staticClass:"sp-paragraph",attrs:{tag:"div",children:this.$slots.default}},"spBase",this.$props,!1),this.$listeners))}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)}}]);