(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesExternal/pddGoods/pddGoods"],{"0f64":function(t,n,e){"use strict";(function(t){e("d28f");o(e("66fd"));var n=o(e("549bb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("5486")["createPage"])},"549bb":function(t,n,e){"use strict";e.r(n);var o=e("a10c"),a=e("a2c5");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("d036");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);n["default"]=c.exports},a10c:function(t,n,e){"use strict";var o={copyright:()=>e.e("components/copyright/copyright").then(e.bind(null,"cb0f")),myfooter:()=>e.e("components/myfooter/myfooter").then(e.bind(null,"6bab"))},a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},a2c5:function(t,n,e){"use strict";e.r(n);var o=e("d0c0"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},d036:function(t,n,e){"use strict";var o=e("eb28"),a=e.n(o);a.a},d0c0:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("88e4"),a={data:function(){return{$imgurl:this.$imgurl,baseinfo:"",page:1,minHeight:180,morePro:!1,goods:[],flag:0,sort:1}},onLoad:function(t){var n=this;this.page_signs="/pagesExternal/pddGoods/pddGoods",this._baseMin(this);var e=0;t.fxsid&&(e=t.fxsid),this.fxsid=e,o.bdLogin(e,function(){n.getList()})},onReachBottom:function(){var n=this;this.page=this.page+1,t.request({url:n.$baseurl+"doPageGetExternalGoods",data:{page:n.page,type:"pdd",flag:n.flag,sort:n.sort,uniacid:n.$uniacid},success:function(e){e.data.data.length>0?n.goods=n.goods.concat(e.data.data):t.showToast({title:"已经到底了",icon:"none"})}})},methods:{getList:function(){var n=this;t.request({url:n.$baseurl+"doPageGetExternalGoods",data:{page:n.page,type:"pdd",flag:n.flag,sort:n.sort,uniacid:n.$uniacid},success:function(t){n.goods=t.data.data}})},redirectto:function(n){t.showToast({title:"请前往微信小程序中打开",icon:"none"})},changflag:function(t){this.flag=t.currentTarget.dataset.flag,2==this.flag&&(1==this.sort?this.sort=2:this.sort=1),this.page=1,this.getList()}}};n.default=a}).call(this,e("5486")["default"])},eb28:function(t,n,e){}},[["0f64","common/runtime","common/vendor"]]]);