(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/listPic/listPic"],{"03b2":function(t,i,o){"use strict";o.r(i);var e=o("5f25"),a=o.n(e);for(var n in e)"default"!==n&&function(t){o.d(i,t,function(){return e[t]})}(n);i["default"]=a.a},4955:function(t,i,o){"use strict";o.r(i);var e=o("7c04"),a=o("03b2");for(var n in a)"default"!==n&&function(t){o.d(i,t,function(){return a[t]})}(n);o("88af");var s,r=o("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);i["default"]=c.exports},"5f25":function(t,i,o){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o("88e4"),n=function(){return o.e("components/plugins/list_pic").then(o.bind(null,"e50b"))},s=function(){return o.e("components/plugins/list_pic_td0").then(o.bind(null,"e6a6"))},r=function(){return o.e("components/plugins/list_pic_td1").then(o.bind(null,"fd84"))},c=function(){return o.e("components/plugins/list_pic_td2").then(o.bind(null,"7f33"))},d=function(){return o.e("components/plugins/list_text").then(o.bind(null,"90d9"))},l={components:{list_pic:n,list_pic_td0:s,list_pic_td1:r,list_pic_td2:c,list_text:d},data:function(){return{$imgurl:this.$imgurl,page_signs:"",baseinfo:{},cateinfo:{},cid:0,page:1,morePro:!1,ProductsList:[],orderOrBusiness:"order",block:!1,logs:[],goodsH:0,scrollToGoodsView:0,toView:"",toViewType:"",GOODVIEWID:"catGood_",animation:!0,goodsNumArr:[0],shoppingCart:{},shoppingCartGoodsId:[],goodMap:{},chooseGoodArr:[],totalNum:0,totalPay:0,showShopCart:!1,fromClickScroll:!1,timeStart:"",timeEnd:"",hideCount:!0,count:0,needAni:!1,hide_good_box:!0,url:"",protype:1,minHeight:180,heighthave:0,from_top:0,cate_list:"",chessRoomDetail:{},catHighLightIndex:0,cateslide:[],type:"",vip_show:1,is_vipBox:0,vip_name:"",to_login:0}},onLoad:function(i){var o=this;this.page_signs="/pages/listPic/listPic?type="+i.type+"&cid="+i.cid,this.cid=i.cid,this._baseMin(this);var e=0;i.fxsid&&(e=i.fxsid),this.fxsid=e,i.type&&(this.type=i.type);t.getStorageSync("suid");a.bdLogin(e,function(){o.getList()})},onReachBottom:function(){var i=this,o=i.page+1,a=i.cid;e.request({url:i.$baseurl+"doPagelistPic",data:{cid:a,page:o,uniacid:i.$uniacid,type:i.type,suid:t.getStorageSync("suid")},success:function(e){if(2==e.data.data.this.vip_show){i.vip_show=2,i.is_vipBox=1,i.vip_name=e.data.data.this.vip_name;var a=t.getStorageSync("suid");return a||(i.to_login=1),console.log(a),console.log(i.to_login),!1}i.vip_show=1,""!=e.data.data.list?(i.cate_list=i.cate_list.concat(e.data.data.list),i.page=o):i.morePro=!1}})},onPullDownRefresh:function(){this.page=1,this.getList(),t.stopPullDownRefresh()},onShareAppMessage:function(){var t=this;return{title:t.cateinfo.name+"-"+t.baseinfo.name}},methods:{handleTap:function(t){console.log(t);var i=t.currentTarget.id.slice(1);i&&(this.cid=i,this.page=1,this.from_top=1,this.getList(i))},getList:function(i){var o=this;void 0==i&&(i=o.cid),t.request({url:o.$baseurl+"dopagelistPic",data:{cid:i,uniacid:o.$uniacid,type:o.type,suid:t.getStorageSync("suid")},success:function(i){if(2==i.data.data.this.vip_show){o.vip_show=2,o.is_vipBox=1,o.vip_name=i.data.data.this.vip_name;var e=t.getStorageSync("suid");return e||(o.to_login=1),!1}o.vip_show=1;var a=i.data.data.num;a.length>10?o.morePro=!0:o.morePro=!1,o.cateinfo=i.data.data,o.cate_list=i.data.data.list,o.cateslide=i.data.data.cateslide,0==o.cateinfo.is_top?t.setNavigationBarTitle({title:o.cateinfo.name}):t.setNavigationBarTitle({title:o.cateinfo.this.name}),t.setStorageSync("isShowLoading",!1),t.hideNavigationBarLoading(),t.stopPullDownRefresh();var n=o.cateinfo.topcid,s=o.cateinfo.list_style_more;if(2==s&&0==n){var r=t.getStorageSync("systemInfo");o.goodsH=r.windowHeight-55,o.minHeight=200,o.goodsRh=r.windowHeight-55+200;var c={};c["catList"]=i.data.data.newlist;for(var d=[],l=0;l<i.data.data.length;l++)for(var u=0;u<i.data.data[l].goodsList.length;u++)d.push(i.data.data[l].goodsList[u]);o.chessRoomDetail=c,o.allpro=d,o.toView=o.GOODVIEWID+o.chessRoomDetail.catList[0].id,o.catHighLightIndex=0;for(var g=0;g<o.chessRoomDetail.catList.length;g++){o.goodsNumArr.push(o.chessRoomDetail.catList[g].goodsList.length);var h=o.chessRoomDetail.catList[g].goodsList;if(h.length>0)for(var p=0;p<h.length;p++)o.goodMap[h[p].id]=h[p]}for(var f=[],v=0;v<o.goodsNumArr.length;v++)0==v?f.push(0):f.push(98*o.goodsNumArr[v]+f[v-1]);o.goodsNumArr=f}},fail:function(t){console.log(t)}})},swiperLoad:function(i){var o=this;t.getSystemInfo({success:function(t){var e=i.detail.width,a=i.detail.height,n=e/a,s=t.windowWidth/n;o.heighthave||(o.minHeight=s,o.heighthave=1)}})},goodsViewScrollFn:function(t){this.getIndexFromHArr(t.detail.scrollTop)},getIndexFromHArr:function(t){for(var i=0;i<this.goodsNumArr.length;i++){var o=t-40*i;o>=this.goodsNumArr[i]&&o<this.goodsNumArr[i+1]&&(this.fromClickScroll||(this.catHighLightIndex=i))}this.fromClickScroll=!1},catClickFn:function(t){var i=this,o=t.target.id.split("_")[1],e=t.target.id.split("_")[2];i.fromClickScroll=!0,i.catHighLightIndex=o,i.toView=i.GOODVIEWID+e},tabChange:function(t){var i=t.currentTarget.dataset.id;this.orderOrBusiness=i},tiaozhuang:function(i){var o=i.currentTarget.dataset.id,e=i.currentTarget.dataset.types,a=i.currentTarget.dataset.ismore,n="";"showPro"==e?(0==a&&(n="/pages/showPro/showPro?id="+o),1==a&&(n="/pages/showPro_lv/showPro_lv?id="+o)):n="/pages/"+e+"/"+e+"?id="+o,t.navigateTo({url:n})},closeVipTip:function(){var t=this;t.is_vipBox=0},toBeVip:function(){var i="/pages/equity_show/equity_show";t.navigateTo({url:i})},toBeVipUp:function(){var i="/pages/open1/open1";t.navigateTo({url:i})},toLogin:function(){var i="/pages/usercenter/usercenter";t.navigateTo({url:i})}}};i.default=l}).call(this,o("5486")["default"],o("5486")["default"])},"7aba":function(t,i,o){"use strict";(function(t){o("d28f");e(o("66fd"));var i=e(o("4955"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,o("5486")["createPage"])},"7c04":function(t,i,o){"use strict";var e={copyright:()=>o.e("components/copyright/copyright").then(o.bind(null,"cb0f")),myfooter:()=>o.e("components/myfooter/myfooter").then(o.bind(null,"6bab"))},a=function(){var t=this,i=t.$createElement;t._self._c},n=[];o.d(i,"b",function(){return a}),o.d(i,"c",function(){return n}),o.d(i,"a",function(){return e})},"88af":function(t,i,o){"use strict";var e=o("d448"),a=o.n(e);a.a},d448:function(t,i,o){}},[["7aba","common/runtime","common/vendor"]]]);