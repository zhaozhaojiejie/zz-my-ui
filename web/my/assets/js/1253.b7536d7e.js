(window.webpackJsonp=window.webpackJsonp||[]).push([[1253],{2302:function(e,n,t){var o={"./dashboard-analysis.vue":[3304,0,1,2,3,434],"./dashboard-monitor.vue":[3305,0,1,2,6,491],"./dashboard-workplace.vue":[3306,0,1,2,3,433],"./form-advance.vue":[3307,0,1,2,3,449],"./form-basic.vue":[2582,0,1,2,3,451],"./form-step.vue":[3308,0,1,3,10,507],"./layout.vue":[3309,0,1,2,6,465],"./list-basic.vue":[3310,0,1,2,3,439],"./list-card.vue":[3311,0,1,2,3,462],"./list-crud.vue":[3312,0,1,2,3,437],"./list-query.vue":[3313,0,1,2,3,440],"./list-tree.vue":[3314,0,1,2,3,453],"./login.vue":[3315,0,1,3,10,569],"./profile-advanced.vue":[3316,0,1,2,3,450],"./profile-basic.vue":[3317,0,1,2,3,454],"./search-list-app.vue":[3318,0,1,2,3,441],"./search-list-article.vue":[3319,0,1,2,3,443],"./search-list-project.vue":[3320,0,1,2,3,442]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2302,e.exports=a},3574:function(e,n,t){"use strict";t.r(n);t(7);var o={name:"PageLoader",props:{page:String,local:String},data:function(){return{component:null}},mounted:function(){var e=this;t(2302)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(18),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,{tag:"component"}):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"87446620",null);n.default=r.exports}}]);