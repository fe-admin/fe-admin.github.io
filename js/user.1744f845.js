(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"1b62":function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));n("99af"),n("ac1f"),n("5319");var i=n("5530"),o=n("3835"),a=(n("96cf"),n("1da1")),r=n("2f62"),s=n("ed08"),c=n("365c"),l=(s["d"],{data:function(){return{pageSizes:[10,20,50,100],pageSize:10,total:1,currentPage:1}}});Object(i["a"])(Object(i["a"])({},Object(r["b"])(["update"])),{},{hideDialog:function(e){this["".concat(e,"Visible")]=!1,this.currentIndex=null,this.currentRow=null},showDialog:function(e,t){this["".concat(e,"Visible")]=!0,t&&(this.currentIndex=t.$index,this.currentRow=t.row)}});t["a"]={data:function(){return{screenLoading:!1}},methods:{go:function(e){this.$router.go(e)},push:function(e){this.$router.push(e)},replace:function(e){this.$router.replace(e)},locationPush:function(e,t){var n=location.origin;window.microConfig&&(n=t?window.microConfig[t]:location.origin),location.replace("".concat(n).concat(e))},locationReplace:function(e,t){var n=location.origin;window.microConfig&&(n=t?window.microConfig[t]:location.origin),location.replace("".concat(n).concat(e))},$push:function(e,t,n){var i=localStorage.getItem("microId");"portal"===Object(s["microId"])()?this.locationPush(e):n?i===n?this.push(t):this.locationPush(t,n):this.push(t)}}}},be1e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-head"},[n("div",{staticClass:"login-logo"},[n("img",{staticClass:"img",attrs:{src:"/favicon.png"}}),n("svg-icon",{attrs:{iconName:"fe-logo-text"}})],1),n("div",{staticClass:"desc"},[e._v("Fe Admin 只为一款简单好用的前端中台系统")])]),n("div",{staticClass:"login-form"},[n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"账户密码登录",name:"password"}},[e.pwdAlert?n("el-alert",{attrs:{closable:!1,title:e.alertMsg,type:"error","show-icon":""}}):e._e(),n("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.formRule,size:"medium"}},[n("el-form-item",{attrs:{prop:"accountName"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-input",{attrs:{maxlength:11,placeholder:"用户名: admin or user",clearable:""},on:{change:function(t){return e.validate("accountName")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.accountName,callback:function(t){e.$set(e.userForm,"accountName","string"===typeof t?t.trim():t)},expression:"userForm.accountName"}},[n("i",{staticClass:"el-input__icon fe-admin fe-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{maxlength:12,type:e.pwdType?"password":"",placeholder:"密码: fe-admin",clearable:""},on:{change:function(t){return e.validate("password")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password","string"===typeof t?t.trim():t)},expression:"userForm.password"}},[n("i",{staticClass:"el-input__icon fe-admin fe-lock",attrs:{slot:"prefix"},slot:"prefix"}),n("i",{class:"el-input__icon fe-admin fe-visible "+(e.pwdType?"fe-invisible":"fe-visible"),attrs:{slot:"suffix"},on:{click:e.changePwdType},slot:"suffix"})])],1)],1)],1),n("el-tab-pane",{attrs:{label:"手机号登录",name:"phone"}},[n("el-form",{ref:"phoneForm",attrs:{model:e.phoneForm,rules:e.formRule,size:"medium"}},[n("el-form-item",{attrs:{prop:"phone"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-input",{attrs:{maxlength:11,placeholder:"请输入手机号！"},on:{change:function(t){return e.validate("phone")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.phoneForm.phone,callback:function(t){e.$set(e.phoneForm,"phone","string"===typeof t?t.trim():t)},expression:"phoneForm.phone"}},[n("i",{staticClass:"el-input__icon fe-admin fe-phone",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-form-item",{staticClass:"sms-item",attrs:{prop:"smsNumber"}},[n("el-input",{attrs:{maxlength:6,placeholder:"请输入验证码！"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.phoneForm.smsNumber,callback:function(t){e.$set(e.phoneForm,"smsNumber","string"===typeof t?t.trim():t)},expression:"phoneForm.smsNumber"}},[n("i",{staticClass:"el-input__icon fe-admin fe-message",attrs:{slot:"prefix"},slot:"prefix"})]),n("el-button",{on:{click:e.getSmsNumber}},[e._v("获取验证码")])],1)],1)],1)],1),n("div",{staticClass:"remember"},[n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("自动登录")]),n("a",[e._v("忘记密码？")])],1),n("div",{staticClass:"login-item"},[n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v("提 交")])],1),n("div",{staticClass:"other-type"},[e._v(" 其他登录方式 : "),n("svg-icon",{attrs:{iconName:"fe-zhifubao"}}),n("svg-icon",{attrs:{iconName:"fe-taobao"}}),n("svg-icon",{attrs:{iconName:"fe-weixin"}}),n("svg-icon",{attrs:{iconName:"fe-talk"}})],1)],1),n("fe-footer")],1)},o=[],a=n("3835"),r=(n("96cf"),n("1da1")),s=n("5530"),c=n("2f62"),l=n("365c"),u=n("ed08"),m=n("5f87"),p=n("1b62"),d={name:"Login",mixins:[p["a"]],data:function(){return{pwdAlert:!1,alertMsg:"",activeName:"password",pwdType:!0,checked:!0,loading:!1,userForm:{accountName:"",password:""},phoneForm:{phone:"",smsNumber:""},formRule:{accountName:[{required:!0,message:"请输入用户名",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:["change","blur"]}],phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{len:11,message:"请输入手机号",trigger:["change","blur"]}],smsNumber:[{required:!0,message:"请输入验证码",trigger:"blur"},{len:6,message:"请输入6位验证码",trigger:"blur"}]},smsText:"获取验证码",smsNum:0,waiting:!1}},computed:{getSmsText:function(){return"ss"}},created:function(){this.handleLogin=Object(u["b"])(this.handleLogin)},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["user/Login"])),{},{login:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i,o,r,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.activeName,i="password"===n?"userForm":"phoneForm",t.next=5,Object(l["f"])(e[i]);case 5:if(o=t.sent,r=Object(a["a"])(o,2),s=r[0],c=r[1],!s){t.next=14;break}e.pwdAlert=!0,e.alertMsg=s.message,t.next=19;break;case 14:return e["user/Login"](c),Object(m["c"])(c.token),t.next=18,Object(u["e"])(1e3);case 18:e.loginSuccess();case 19:e.loading=!1;case 20:case"end":return t.stop()}}),t)})))()},loginSuccess:function(){this.$router.push("/dashboard")},handleLogin:function(){var e=this,t=this.activeName,n="password"===t?"userForm":"phoneForm";this.$refs[n].validate((function(t){t&&e.login()}))},validate:function(e,t){},getSmsNumber:function(){},changePwdType:function(){this.pwdType=!this.pwdType},handleClick:function(){var e="password"===this.activeName?"userForm":"phoneForm";this.$refs[e].resetFields()}})},f=d,g=f,h=(n("cd91"),n("2877")),b=Object(h["a"])(g,i,o,!1,null,"45681808",null);t["default"]=b.exports},cd91:function(e,t,n){"use strict";var i=n("e151"),o=n.n(i);o.a},e151:function(e,t,n){}}]);
//# sourceMappingURL=user.1744f845.js.map