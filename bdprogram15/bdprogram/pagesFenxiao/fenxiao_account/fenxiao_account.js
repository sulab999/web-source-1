(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFenxiao/fenxiao_account/fenxiao_account"],{3935:function(n,t,a){"use strict";(function(n){a("d28f");i(a("66fd"));var t=i(a("5731"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,a("5486")["createPage"])},"3b70":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("88e4"),e={data:function(){return{$imgurl:this.$imgurl,yj:0,myzh:{}}},onLoad:function(n){var t=this;this._baseMin(this);var a=0;n.fxsid&&(a=n.fxsid),this.fxsid=a,i.bdLogin(a,function(){t.getmzh()})},methods:{account_tixian:function(){n.navigateTo({url:"/pagesFenxiao/fenxiao_tixian/fenxiao_tixian"})},fenxiao_order:function(){n.navigateTo({url:"/pagesFenxiao/fenxiao_order/fenxiao_order"})},tixian_record:function(){n.navigateTo({url:"/pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do"})},getmzh:function(){var t=this;n.request({url:this.$baseurl+"doPagegetmzh",data:{uniacid:this.$uniacid,suid:n.getStorageSync("suid")},success:function(n){t.myzh=n.data.data.userinfo,t.yj=n.data.data.wfmoney}})}}};t.default=e}).call(this,a("5486")["default"])},"3f59":function(n,t,a){"use strict";a.r(t);var i=a("3b70"),e=a.n(i);for(var o in i)"default"!==o&&function(n){a.d(t,n,function(){return i[n]})}(o);t["default"]=e.a},5731:function(n,t,a){"use strict";a.r(t);var i=a("a399"),e=a("3f59");for(var o in e)"default"!==o&&function(n){a.d(t,n,function(){return e[n]})}(o);a("9afe");var u,r=a("f0c5"),f=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=f.exports},"9afe":function(n,t,a){"use strict";var i=a("d172"),e=a.n(i);e.a},a399:function(n,t,a){"use strict";var i,e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"b",function(){return e}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return i})},d172:function(n,t,a){}},[["3935","common/runtime","common/vendor"]]]);