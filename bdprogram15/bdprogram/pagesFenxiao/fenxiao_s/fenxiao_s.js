(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFenxiao/fenxiao_s/fenxiao_s"],{"0026":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{$imgurl:this.$imgurl,str:""}},onLoad:function(n){var e=this;this._baseMin(this);var u=n.type,a="";t.request({url:this.$baseurl+"doPagehuoqfxsgz",data:{uniacid:this.$uniacid},success:function(t){var n=t.data.data;1==u&&(a="感谢您的支持，请等待审核"),2==u&&(a="审核提交成功，请等待审核"),3==u&&(a="消费金额达到"+n["fxs_sz_val"]+"元额度后将自动成为分销商"),4==u&&(a="消费次数达到"+n["fxs_sz_val"]+"次后将自动成为分销商"),e.str=a}})},methods:{return_index:function(){t.redirectTo({url:"/pages/index/index"})}}};n.default=e}).call(this,e("5486")["default"])},"073a":function(t,n,e){"use strict";e.r(n);var u=e("ae67"),a=e("f067");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("8eb2");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=o.exports},"7e56":function(t,n,e){},"8dbb":function(t,n,e){"use strict";(function(t){e("d28f");u(e("66fd"));var n=u(e("073a"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("5486")["createPage"])},"8eb2":function(t,n,e){"use strict";var u=e("7e56"),a=e.n(u);a.a},ae67:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})},f067:function(t,n,e){"use strict";e.r(n);var u=e("0026"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a}},[["8dbb","common/runtime","common/vendor"]]]);