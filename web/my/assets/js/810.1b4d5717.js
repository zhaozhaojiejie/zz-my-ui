(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{2647:function(t,e,i){"use strict";i.r(e);var o=i(956),r=i(418),n=i(0);n.default.use(r.a),n.default.use(o.a);var s={data:function(){return{ripple1:{color:"red",period:2,scale:5,type:"fill"},ripple2:{period:1,scale:8,strokeColor:"red",strokeWidth:5,type:"stroke"}}}},a=i(18),l=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-scatter",{attrs:{coordinate:[113.161999,23.130592],ripple:this.ripple1,fill:"red"}}),this._v(" "),e("my-map-scatter",{attrs:{coordinate:[113.361999,23.130592],ripple:this.ripple2,fill:"red"}})],1)}),[],!1,null,null,null);e.default=l.exports},401:function(t,e,i){"use strict";i(54),i(124),i(365),i(199),i(55);var o=i(86),r=i(57),n=i(764),s=i(839),a=i(1185),l=i(1186),c=i(1866),u=i(1187),f=i(838),p={fill:n.a,text:s.a,stroke:a.a,circle:l.a,icon:c.a,regularShape:u.a,backgroundFill:n.a,backgroundStroke:a.a},h=[l.a,c.a,u.a];function d(t){return"object"===Object(r.a)(t)}function y(t,e,i){var o,r;if(null!=i)return t?["fill","backgroundFill"].includes(e)?(r=d(o=i)?o:{color:o},new n.a(r)):"text"===e?d(i)?g(i,t):i:g(i,t):i}function g(t,e){var i={};return Object.entries(t).forEach((function(t){var e=Object(o.a)(t,2),r=e[0],n=e[1],s=p[r];"font"===r&&(n="".concat(n," sans-serif")),i[h.includes(s)?"image":r]=y(s,r,n)})),new(e||f.c)(i)}e.a=g},419:function(t,e,i){var o=i(1),r=i(546),n=i(126);o({target:"Array",proto:!0},{fill:r}),n("fill")},467:function(t,e,i){"use strict";var o,r=i(495),n=i(422),s=i(473),a=i(476),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t){function e(e){var i=t.call(this)||this;if(i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addEventListener(Object(r.b)(i.geometryName_),i.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var o=e;i.setGeometry(o)}else{var n=e;i.setProperties(n)}return i}return l(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,n.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(r.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(r.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(r.a);e.a=c},496:function(t,e,i){"use strict";i(197);e.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},511:function(t,e,i){"use strict";i(419);var o=i(52),r=i(467),n=i(496),s=i(401);e.a={mixins:[n.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(t){},draw:function(){var t=this.drawHandler();t&&(this.feature=new r.a({geometry:t}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(o.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("featureDraw"))},setStyle:function(){if(this.feature){var t=this.styleFunction?this.styleFunction(this):Object(s.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(t)}},modify:function(){if(this.feature){var t=this.feature.getGeometry();this.modifyHandler(t),this.setStyle(),this.props&&this.feature.setProperties(Object(o.a)({},this.props))}}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}},546:function(t,e,i){"use strict";var o=i(16),r=i(128),n=i(19);t.exports=function(t){for(var e=o(this),i=n(e.length),s=arguments.length,a=r(s>1?arguments[1]:void 0,i),l=s>2?arguments[2]:void 0,c=void 0===l?i:r(l,i);c>a;)e[a++]=t;return e}},839:function(t,e,i){"use strict";var o=i(764),r=i(763),n=i(481),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(n.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new o.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:r.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(n.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s},956:function(t,e,i){"use strict";var o=i(53),r=(i(198),i(419),i(197),i(86)),n=i(52),s=i(477),a=i(659),l=i(511),c=i(401),u={color:null,period:1.5,scale:5,strokeColor:null,strokeWidth:2,type:"fill"},f={name:"MyMapScatter",mixins:[l.a],props:{coordinate:Array,radius:{type:Number,default:10},effect:{type:Boolean,default:!0},fill:{type:String,default:"#409eff"},stroke:{type:Object},ripple:{type:Object,default:function(){return u}},delay:{type:Number,default:0},loop:{type:Boolean,default:!0}},computed:{rippleOptions:function(){var t=this.ripple.color||this.fill,e=this.ripple.strokeColor||this.fill;return Object(n.a)(Object(n.a)(Object(n.a)({},u),this.ripple),{},{color:t,strokeColor:e})}},methods:{drawHandler:function(){return new s.a(this.coordinate)},modifyHandler:function(t){t.setCoordinates(this.coordinate)},delayStart:function(t){this.delay?(clearTimeout(this.delayId),this.delayId=setTimeout(t,this.delay)):t()},setStyle:function(){var t=this;if(this.feature){var e=[Object(c.a)({zIndex:this.zIndex,circle:{fill:this.fill,radius:this.radius,stroke:this.stroke},text:this.styleText})];if(this.effect){var i=this.getRipple(this.rippleOptions),o=this.getRippleStroke(this.rippleOptions);e=[o,i].concat(e),this.delayStart((function(){t.rippleEffect(e,t.rippleOptions)}))}this.feature.setStyle(e)}},getRipple:function(t){var e=t.color,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)({zIndex:this.zIndex,circle:Object(n.a)({fill:e,radius:this.radius},i)})},getRippleStroke:function(t){var e=t.strokeColor,i=t.strokeWidth,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)({zIndex:this.zIndex,circle:Object(n.a)({fill:"transparent",radius:this.radius,stroke:{color:e,width:i}},o)})},rippleEffect:function(t,e){var i=this,o=e.scale,n=e.period,s=e.type,l=Object(r.a)(t,3),c=l[0],u=l[1],f=l[2],p=(new Date).getTime();!function r(){var l=((new Date).getTime()-p)/(1e3*n);if(l>1)i.loop&&i.rippleEffect(t,e);else{var h=Object(a.b)(l),d=i.radius*o*h,y=1-h;"fill"===s?(u=i.getRipple(i.rippleOptions,{radius:d})).getImage().setOpacity(y):(c=i.getRippleStroke(i.rippleOptions,{radius:d})).getImage().setOpacity(y),i.feature.setStyle([c,u,f]),i.aId=window.requestAnimationFrame(r)}}()}},beforeDestroy:function(){this.aId&&window.cancelAnimationFrame(this.aId)}};e.a=Object(o.a)(f)}}]);