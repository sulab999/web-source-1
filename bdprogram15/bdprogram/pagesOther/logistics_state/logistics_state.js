(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesOther/logistics_state/logistics_state"],{"2eb8":function(t,i,a){"use strict";var u,e=function(){var t=this,i=t.$createElement;t._self._c},n=[];a.d(i,"b",function(){return e}),a.d(i,"c",function(){return n}),a.d(i,"a",function(){return u})},4501:function(t,i,a){"use strict";(function(t){a("d28f");u(a("66fd"));var i=u(a("d733"));function u(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,a("5486")["createPage"])},"45a3":function(t,i,a){},cab4:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var u=a("88e4"),e={data:function(){return{$imgurl:this.$imgurl,page_signs:"/pages/orderlist_dan/orderlist_dan",kuaidi:"",kuaidihao:"",flag:"",list:"",type:"",status:"",pro:""}},onLoad:function(i){var a=this;this._baseMin(this),t.setNavigationBarTitle({title:"物流信息"}),i.kuaidi&&(this.kuaidi=i.kuaidi),i.kuaidihao&&(this.kuaidihao=i.kuaidihao),i.order_id&&(this.order_item_id=i.order_id);var e=0;u.bdLogin(e,function(){a.getWuliu()})},onPullDownRefresh:function(){this.getWuliu(),t.stopPullDownRefresh()},methods:{getWuliu:function(){var i=this;i.kuaidi;t.showLoading({title:"查询中.."}),t.request({url:i.$baseurl+"dopageGetWuliu",data:{kuaidi:i.kuaidi,kuaidihao:i.kuaidihao,uniacid:i.$uniacid,order_item_id:i.order_item_id},success:function(a){i.flag=a.data.flag,i.pro=a.data.pro,i.list=a.data.list,i.type=a.data.type,i.status=a.data.status,t.hideLoading()}})},copy:function(i){var a=this.kuaidihao;t.setClipboardData({data:a,success:function(i){t.getClipboardData({success:function(t){}}),t.showToast({title:"复制成功",duration:2e3})}})}}};i.default=e}).call(this,a("5486")["default"])},d733:function(t,i,a){"use strict";a.r(i);var u=a("2eb8"),e=a("f03d");for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);a("fbb7");var o,d=a("f0c5"),r=Object(d["a"])(e["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);i["default"]=r.exports},f03d:function(t,i,a){"use strict";a.r(i);var u=a("cab4"),e=a.n(u);for(var n in u)"default"!==n&&function(t){a.d(i,t,function(){return u[t]})}(n);i["default"]=e.a},fbb7:function(t,i,a){"use strict";var u=a("45a3"),e=a.n(u);e.a}},[["4501","common/runtime","common/vendor"]]]);