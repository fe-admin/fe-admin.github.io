(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36eed0de"],{8470:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("with-header",{scopedSlots:e._u([{key:"content",fn:function(){return[e._v(" 最少选择一种用户角色类型 ")]},proxy:!0}])},[n("div",{staticClass:"directive"},[n("el-checkbox-group",{attrs:{min:1},on:{change:e.handleCheckedChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.roles,(function(t){return n("el-checkbox-button",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),n("h2",[e._v("当前用户角色为："+e._s(e.checkList))])],1)])},r=[],s=(n("96cf"),n("1da1")),a=n("a18c"),i=n("efda"),o=n("ed08"),u={name:"PermissionPage",data:function(){return{roles:["admin","user"],checkList:this.$store.getters.roles}},methods:{handleCheckedChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("user/SetRoles",e);case 2:return Object(a["c"])(),n.next=5,t.$store.dispatch("permission/GenerateRoutes",e);case 5:c=n.sent,Object(o["a"])(a["b"],Object(i["a"])(c));case 7:case"end":return n.stop()}}),n)})))()}}},h=u,d=(n("a9bd"),n("2877")),l=Object(d["a"])(h,c,r,!1,null,"489a6873",null);t["default"]=l.exports},a9bd:function(e,t,n){"use strict";var c=n("b6cf"),r=n.n(c);r.a},b6cf:function(e,t,n){}}]);
//# sourceMappingURL=chunk-36eed0de.eb44da44.js.map