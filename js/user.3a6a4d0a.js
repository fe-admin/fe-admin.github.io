(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"12ed":function(e,t,r){},"594e":function(e,t,r){"use strict";var n=r("bc63"),a=r.n(n);a.a},"6f38":function(e,t,r){"use strict";var n=r("12ed"),a=r.n(n);a.a},bc63:function(e,t,r){},be1e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("div",{staticClass:"login-content"},[r("div",{staticClass:"login-form"},[r("el-form",{ref:"formData",attrs:{model:e.formData,rules:e.formRule,size:"medium"}},[r("div",{staticClass:"tit"},[e._v("帐号登录")]),r("el-form-item",{staticClass:"el-form-line",attrs:{prop:"accountName"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-input",{attrs:{maxlength:11,clearable:"",placeholder:"账户名"},on:{change:function(t){return e.change("accountName")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.formData.accountName,callback:function(t){e.$set(e.formData,"accountName","string"===typeof t?t.trim():t)},expression:"formData.accountName"}})],1),r("el-form-item",{staticClass:"el-form-line",attrs:{prop:"password"}},[r("el-input",{attrs:{maxlength:12,clearable:"",placeholder:"密码",type:"password"},on:{change:function(t){e.errCode=3}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password","string"===typeof t?t.trim():t)},expression:"formData.password"}})],1),r("el-form-item",{staticClass:"login-item"},[r("el-button",{attrs:{loading:e.loading,type:"violet"},on:{click:e.handleLogin}},[e._v("登录")])],1),r("el-form-item",{staticClass:"rememberpwd"},[r("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住登录名")]),r("el-divider",{attrs:{direction:"vertical"}}),r("router-link",{attrs:{to:"/user/register"}},[e._v("免费注册")]),r("el-divider",{attrs:{direction:"vertical"}}),r("router-link",{attrs:{to:"/user/register"}},[e._v("忘记密码")])],1)],1)],1)])])},a=[],i=(r("4160"),r("b64b"),r("159b"),r("5530")),s=(r("96cf"),r("1da1")),o=r("2f62"),c=(r("365c"),r("ed08")),u=r("5f87"),l=r("1b62"),m={name:"Login",mixins:[l["a"]],data:function(){return{checked:!1,loading:!1,formData:{accountName:localStorage.getItem("_userName")||"",password:""},formRule:{accountName:[{required:!0,message:"请输入账户名",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:["change","blur"]}],smsNumber:[{required:!0,message:"请输入验证码",trigger:"blur"},{len:6,message:"请输入6位验证码",trigger:"blur"}]},smsText:"获取验证码",smsNum:0,waiting:!1}},created:function(){this.debounceSetFullBackground=Object(c["b"])((function(){Object(c["e"])(".login")})),this.handleLogin=Object(c["b"])(this.handleLogin)},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["e"])(".login"),window.addEventListener("resize",e.debounceSetFullBackground);case 2:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["Login"])),{},{login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,r=Object.assign(e.formData,{token:1}),e.Login(r),Object.keys(r).forEach((function(e){localStorage.setItem(e,r[e])})),Object(u["c"])(r.token),t.next=7,Object(c["g"])(1e3);case 7:e.loginSuccess(),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},loginSuccess:function(){this.$router.push("/dashboard")},handleLogin:function(){var e=this;this.$refs.formData.validate((function(t){t&&e.login()}))},change:function(e){this.$refs.formData.validateField(e)}}),beforeDestroy:function(){window.removeEventListener("resize",this.debounceSetFullBackground)}},d=m,g=(r("6f38"),r("2877")),f=Object(g["a"])(d,n,a,!1,null,"2fd1fcce",null);t["default"]=f.exports},d819:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("div",{staticClass:"register-content"},[r("div",{staticClass:"register-form"},[r("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.formRule,size:"medium"}},[r("div",{staticClass:"tit"},[e._v("帐号注册")]),r("el-form-item",{attrs:{prop:"userName"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-input",{attrs:{maxlength:11,clearable:"",placeholder:"请输入用户名"},on:{input:function(t){return e.change("userName")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.userName,callback:function(t){e.$set(e.userForm,"userName","string"===typeof t?t.trim():t)},expression:"userForm.userName"}},[r("svg",{staticClass:"icon",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"},[r("use",{attrs:{"xlink:href":"#iconzhanghu"}})])])],1),r("el-form-item",{attrs:{prop:"phoneNo"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-input",{attrs:{maxlength:11,clearable:"",placeholder:"请输入手机号"},on:{input:function(t){return e.change("phoneNo")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.phoneNo,callback:function(t){e.$set(e.userForm,"phoneNo","string"===typeof t?t.trim():t)},expression:"userForm.phoneNo"}},[r("svg",{staticClass:"icon",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"},[r("use",{attrs:{"xlink:href":"#iconzhanghu"}})])])],1),r("el-form-item",{attrs:{prop:"email"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-input",{attrs:{maxlength:50,clearable:"",placeholder:"请输入邮箱"},on:{input:function(t){return e.change("email")}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email","string"===typeof t?t.trim():t)},expression:"userForm.email"}},[r("svg",{staticClass:"icon",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"},[r("use",{attrs:{"xlink:href":"#iconzhanghu"}})])])],1),r("el-form-item",{attrs:{prop:"userPwd"}},[r("el-input",{attrs:{maxlength:12,clearable:"",placeholder:"请设置您的密码",type:"password"},on:{change:function(t){e.errCode=3}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.userPwd,callback:function(t){e.$set(e.userForm,"userPwd","string"===typeof t?t.trim():t)},expression:"userForm.userPwd"}},[r("svg",{staticClass:"icon",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"},[r("use",{attrs:{"xlink:href":"#iconmima"}})])])],1),r("el-form-item",{attrs:{prop:"userPwdRepeat"}},[r("el-input",{attrs:{maxlength:12,clearable:"",placeholder:"再次设置您的密码",type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.userForm.userPwdRepeat,callback:function(t){e.$set(e.userForm,"userPwdRepeat","string"===typeof t?t.trim():t)},expression:"userForm.userPwdRepeat"}},[r("svg",{staticClass:"icon",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"},[r("use",{attrs:{"xlink:href":"#iconmima"}})])])],1),r("el-form-item",{staticClass:"login-item",attrs:{prop:"checked"}},[r("el-checkbox",{staticClass:"check",model:{value:e.userForm.checked,callback:function(t){e.$set(e.userForm,"checked",t)},expression:"userForm.checked"}},[e._v(" 我已阅读并同意 "),r("router-link",{staticClass:"link",attrs:{to:""}},[e._v("《隐私政策声明》")])],1)],1),r("el-form-item",{staticClass:"login-item checked-item"},[r("el-button",{attrs:{type:"violet"},on:{click:e.handleLogin}},[e._v("同意协议并注册")])],1)],1)],1)])])},a=[],i=(r("ac1f"),r("5319"),r("3835")),s=(r("96cf"),r("1da1")),o=r("365c"),c=r("ed08"),u={name:"Register",data:function(){var e=this,t=function(e,t,r){t?r():r(new Error("请勾选服务协议"))},r=function(t,r,n){e.userForm.userPwd!==r?n(new Error("两次密码输入不一致")):n()};return{userForm:{phoneNo:"",email:"",userName:"",userPwd:"",userPwdRepeat:"",bsflag:0,checked:!1},formRule:{userName:[{required:!0,message:"请输入用户名",trigger:["blur","change"]}],email:[{required:!0,message:"请输入邮箱",trigger:["blur","change"]}],phoneNo:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{min:11,max:11,message:"请输入手机号",trigger:["blur","change"]}],userPwd:[{required:!0,message:"请输入密码",trigger:["blur","change"]},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:["blur","change"]}],userPwdRepeat:[{required:!0,message:"请输入密码",trigger:["blur","change"]},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:["blur","change"]},{required:!0,validator:r,trigger:["blur","change"]}],checked:[{required:!0,validator:t,trigger:["blur","change"]}]},smsText:"获取验证码",smsNum:0,waiting:!1}},created:function(){this.debounceSetFullBackground=Object(c["b"])((function(){Object(c["e"])(".register")})),this.handleLogin=Object(c["b"])(this.handleLogin)},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["e"])(".register"),window.addEventListener("resize",e.debounceSetFullBackground);case 2:case"end":return t.stop()}}),t)})))()},methods:{register:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.userForm,n=Object.assign({},r),delete n.userPwdRepeat,delete n.checked,t.next=6,Object(o["d"])(n);case 6:a=t.sent,s=Object(i["a"])(a,1),c=s[0],c||(e.$message({message:"注册成功，请登录",type:"success"}),e.registerSuccess());case 10:case"end":return t.stop()}}),t)})))()},registerSuccess:function(){this.$router.replace("/login")},handleLogin:function(){var e=this;this.$refs.userForm.validate((function(t){t&&e.register()}))},change:function(e){this.$refs.userForm.validateField(e)}},beforeDestroy:function(){window.removeEventListener("resize",this.debounceSetFullBackground)}},l=u,m=(r("594e"),r("2877")),d=Object(m["a"])(l,n,a,!1,null,"dd9db746",null);t["default"]=d.exports}}]);
//# sourceMappingURL=user.3a6a4d0a.js.map