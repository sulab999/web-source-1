(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesBargain/bargain_activity/bargain_activity"],{"0a5f":function(e,n,a){"use strict";(function(e){a("d28f");t(a("66fd"));var n=t(a("105f"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("5486")["createPage"])},"0ee5":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(a("37b1"));function i(e){return e&&e.__esModule?e:{default:e}}var r=a("88e4"),o={data:function(){return{$imgurl:this.$imgurl,close:0,bargain_id:0,my_receive_flag:1,userid:"",proInfo:[],countDown:"",countDown_d:"",countDown_h:"",countDown_m:"",countDown_s:"",baseinfo:[],suid:0,rules:"",needAuth:!1,needBind:!1,windowH:0,alreadyPrice:0,restPrice:0}},onPullDownRefresh:function(){var n=this;n.proId,n.bargain_id;n.bargainInfo(),e.stopPullDownRefresh()},onLoad:function(n){var a=this,t=this;e.setNavigationBarTitle({title:"砍价活动页"}),this.suid=e.getStorageSync("suid");var i=this.suid;n.id&&(t.proId=n.id);var o=0;n.fxsid&&(o=n.fxsid,e.setStorageSync("fxsid",o),t.fxsid=n.fxsid);n.userid&&(t.userid=n.userid);if(n.bargain_id&&(t.bargain_id=n.bargain_id),this._baseMin(this),i)r.bdLogin(o,function(){a.bargainInfo()});else{this.bargainInfo();var s=e.getStorageSync("baidu_userinfo");s?this.needBind=!0:this.needAuth=!0}},onShareAppMessage:function(){var n=this,a=(e.getStorageSync("openid"),this.suid),t=n.proInfo,i=n.proId,r=n.bargain_id,o="";return o="/pagesBargain/bargain_activity/bargain_activity?id="+i+"&fxsid="+a+"&userid="+a+"&bargain_id="+r,{title:t.shareTitle?t.shareTitle:t.title,path:o}},methods:{cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){console.log("closeBind"),this.needBind=!1,this.bargainInfo()},closes:function(){this.close=0},look_regular:function(){this.close=1},bargainInfo:function(){var n=this;e.request({url:n.$baseurl+"doPageBargainInfo",data:{uniacid:n.$uniacid,proId:n.proId,openid:n.openid,suid:e.getStorageSync("suid"),userid:n.userid,bargain_id:n.bargain_id,source:e.getStorageSync("source")},success:function(a){var i=e.getStorageSync("systemInfo");n.windowH=i.windowHeight,1==a.data.data.errcode?e.showModal({title:"提示",content:"商品已下架、不存在、已删除或库存不足",showCancel:!1,success:function(){return e.reLaunch({url:"/pages/index/index"}),!1}}):2==a.data.data.errcode?e.showModal({title:"提示",content:"商品砍价管理规则未设置，无法砍价",showCancel:!1,success:function(){return e.reLaunch({url:"/pages/index/index"}),!1}}):3==a.data.data.errcode?n.userid==n.openid?e.showModal({title:"提示",content:"该商品已下单，点击跳转订单列表页",showCancel:!1,success:function(){return e.navigateBack({delta:9}),e.navigateTo({url:"/pagesBargain/orderlist/orderlist"}),!1}}):e.showModal({title:"提示",content:"该商品已下单，发起我的砍价",showCancel:!1,success:function(){return e.navigateBack({delta:9}),e.navigateTo({url:"/pagesBargain/bargain/bargain"}),!1}}):4==a.data.data.errcode&&e.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}});var r=a.data.data;r["nowPrice"]=parseFloat(r["nowPrice"]).toFixed(2);var o=1e3*r.overtime-Date.parse(new Date);n.my_receive_flag=r["my_receive"]["flag"],n.proInfo=r,n.alreadyPrice=(n.proInfo.price-n.proInfo.nowPrice).toFixed(2),n.restPrice=(n.proInfo.price-n.proInfo.miniPrice-n.alreadyPrice).toFixed(2),n.bargain_id=a.data.data.id,n.rules=r.rules,n.rules&&(n.rules=n.rules.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),n.rules=(0,t.default)(n.rules)),n.activeEndTime=o,setInterval(function(){n.countDowns()},1e3)}})},countDowns:function(){var e=this,n=1e3,a=e.activeEndTime;a<=0&&(a=0);var t=this.getFormat(a);a-=n;var i="".concat(t.dd,":").concat(t.hh,":").concat(t.mm,":").concat(t.ss),r="".concat(t.dd),o="".concat(t.hh),s="".concat(t.mm),c="".concat(t.ss);this.activeEndTime=a,this.countDown=i,this.countDown_d=r,this.countDown_h=o,this.countDown_m=s,this.countDown_s=c},getFormat:function(e){var n=parseInt(e/1e3),a=0,t=0,i=0;return n>60&&(a=parseInt(n/60),n=parseInt(n%60),a>60&&(t=parseInt(a/60),a=parseInt(a%60),t>24&&(i=parseInt(t/24),t=parseInt(t%24)))),n=n>9?n:"0".concat(n),a=a>9?a:"0".concat(a),t=t>9?t:"0".concat(t),i=i>9?i:"0".concat(i),{ss:n,mm:a,hh:t,dd:i}},goOrder:function(){e.redirectTo({url:"/pagesBargain/bargain_order/bargain_order?id="+this.proId+"&bargain_id="+this.bargain_id})},changeReceiveFlag:function(n){var a=this,t=n.currentTarget.dataset.receive_id;e.request({url:a.$baseurl+"doPagechangeReceiveFlag",data:{uniacid:a.$uniacid,receive_id:t},success:function(e){a.my_receive_flag=1}})},golist:function(){e.navigateTo({url:"/pagesBargain/bargain/bargain"})},h5OnShare:function(){var n=this;e.showModal({title:"长按复制链接后分享",content:this.$host+"/h5/index.html?id="+this.$uniacid+"#/pagesBargain/bargain_activity/bargain_activity?id="+this.proId+"&fxsid="+this.suid+"&userid="+this.suid,showCancel:!1,success:function(e){n.share=0}})}}};n.default=o}).call(this,a("5486")["default"])},"105f":function(e,n,a){"use strict";a.r(n);var t=a("4a95"),i=a("8082");for(var r in i)"default"!==r&&function(e){a.d(n,e,function(){return i[e]})}(r);a("81ae");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],o);n["default"]=c.exports},"4a95":function(e,n,a){"use strict";var t={auth:()=>Promise.all([a.e("common/vendor"),a.e("components/auth/auth")]).then(a.bind(null,"a32a")),bindPhone:()=>Promise.all([a.e("common/vendor"),a.e("components/bindPhone/bindPhone")]).then(a.bind(null,"9bb9"))},i=function(){var e=this,n=e.$createElement;e._self._c},r=[];a.d(n,"b",function(){return i}),a.d(n,"c",function(){return r}),a.d(n,"a",function(){return t})},8082:function(e,n,a){"use strict";a.r(n);var t=a("0ee5"),i=a.n(t);for(var r in t)"default"!==r&&function(e){a.d(n,e,function(){return t[e]})}(r);n["default"]=i.a},"81ae":function(e,n,a){"use strict";var t=a("d3d5"),i=a.n(t);i.a},d3d5:function(e,n,a){}},[["0a5f","common/runtime","common/vendor"]]]);