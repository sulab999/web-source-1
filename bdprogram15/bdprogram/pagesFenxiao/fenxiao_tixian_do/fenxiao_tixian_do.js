(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do"],{"0b09":function(t,n,i){"use strict";var a=i("3356"),e=i.n(a);e.a},3356:function(t,n,i){},7176:function(t,n,i){"use strict";var a,e=function(){var t=this,n=t.$createElement;t._self._c},u=[];i.d(n,"b",function(){return e}),i.d(n,"c",function(){return u}),i.d(n,"a",function(){return a})},bdba:function(t,n,i){"use strict";(function(t){i("d28f");a(i("66fd"));var n=a(i("e947"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("5486")["createPage"])},c02c:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i("88e4"),e={data:function(){return{baseinfo:"",tixsq:[],nav:1}},onLoad:function(t){var n=this;this._baseMin(this);var i=0;t.fxsid&&(i=t.fxsid),this.fxsid=i,a.bdLogin(i,function(){n.tixianjl(1)})},methods:{navchange:function(t){var n=t.currentTarget.dataset.id;this.nav=n,this.tixianjl(n)},tixianjl:function(n){var i=this;t.request({url:this.$baseurl+"doPagefxstxjl",data:{uniacid:this.$uniacid,suid:t.getStorageSync("suid"),val:n},success:function(t){console.log(t),i.tixsq=t.data.data}})}}};n.default=e}).call(this,i("5486")["default"])},e947:function(t,n,i){"use strict";i.r(n);var a=i("7176"),e=i("f4dc");for(var u in e)"default"!==u&&function(t){i.d(n,t,function(){return e[t]})}(u);i("0b09");var c,o=i("f0c5"),r=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},f4dc:function(t,n,i){"use strict";i.r(n);var a=i("c02c"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(n,t,function(){return a[t]})}(u);n["default"]=e.a}},[["bdba","common/runtime","common/vendor"]]]);