(window.webpackJsonp=window.webpackJsonp||[]).push([[1252],{2451:function(e,t,r){},2572:function(e,t,r){"use strict";r.r(t);r(7),r(2451),r(123);var s=r(53),i=(r(197),{name:"MyPromise",props:{tag:{type:String,default:"span"},promise:{type:[Object,Promise],validator:function(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}},delay:{type:Number,default:200}},data:function(){return this.timerId=null,{resolved:!1,data:null,error:null,isDelayElapsed:!1}},computed:{classes:function(){return{"is-pending":!this.resolved,"is-error":!!this.error,"is-done":this.resolved}},combine:function(){return{pending:!this.resolved,data:this.data,error:this.error,delayOver:this.isDelayElapsed}}},watch:{promise:{immediate:!0,handler:function(e){this.handlePromise(e)}}},methods:{setupDelay:function(){var e=this;this.delay>0?(this.isDelayElapsed=!1,this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout((function(){e.isDelayElapsed=!0}),this.delay)):this.isDelayElapsed=!0},handlePromise:function(e){var t=this;if(this.resolved=!1,this.error=null,!e)return this.data=null,this.isDelayElapsed=!1,this.timerId&&clearTimeout(this.timerId),void(this.timerId=null);this.setupDelay(),e.then((function(r){t.promise===e&&(t.data=r,t.resolved=!0)})).catch((function(r){t.promise===e&&(t.error=r,t.resolved=!0)}))}},beforeDestroy:function(){this.timerId&&clearTimeout(this.timerId)}}),n=r(18),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"component",staticClass:"my-promise",class:e.classes},[e.$scopedSlots.combine?e._t("combine",null,null,e.combine):e._e(),e._v(" "),e.$scopedSlots.pending&&!e.resolved&&e.isDelayElapsed?e._t("pending",null,null,e.data):e._e(),e._v(" "),e.resolved&&!e.error?e._t("default",null,null,e.data):e._e(),e._v(" "),e.$scopedSlots.error&&e.error?e._t("error",null,{error:e.error}):e._e()],2)}),[],!1,null,null,null).exports,l=Object(s.a)(o),a={components:{MyPromise:l},methods:{createPromise:function(){return new Promise((function(e){setTimeout((function(){e({total:12324})}),2e3)}))}}};r(0).default.use(l);var u=a,d=Object(n.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n  数据总量：\n  "),r("my-promise",{attrs:{promise:e.createPromise()},scopedSlots:e._u([{key:"pending",fn:function(){return[e._v("正在拼命加载中...")]},proxy:!0},{key:"default",fn:function(t){var r=t.total;return[e._v(e._s(r)+"条")]}}])})],1)}),[],!1,null,null,null);t.default=d.exports}}]);