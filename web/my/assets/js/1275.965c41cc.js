(window.webpackJsonp=window.webpackJsonp||[]).push([[1275],{3086:function(e,i,t){"use strict";t.r(i);t(1723),t(123);var n=t(1858);t(0).default.use(n.a);var l={data:function(){return{visible:!1,position:null,items:[{id:1,label:"编辑"},{id:2,label:"删除"},{id:3,label:"复制"},{id:4,label:"导入"},{id:5,label:"导出"},{id:6,label:"新增"}]}},methods:{handleContextmenu:function(e){this.position=[e.pageX,e.pageY],this.visible=!0,e.preventDefault()}}},a=t(18),o=Object(a.a)(l,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticStyle:{height:"200px",position:"relative"},on:{contextmenu:e.handleContextmenu}},[t("my-radial-menu",{attrs:{items:e.items,visible:e.visible,position:e.position,"append-to-body":""},on:{"update:visible":function(i){e.visible=i}}})],1)}),[],!1,null,null,null);i.default=o.exports}}]);