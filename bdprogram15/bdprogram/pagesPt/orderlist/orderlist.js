(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesPt/orderlist/orderlist"],{"006c":function(t,e,i){"use strict";i.r(e);var a=i("d018"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"1b81":function(t,e,i){"use strict";var a={copyright:()=>i.e("components/copyright/copyright").then(i.bind(null,"cb0f")),myfooter:()=>i.e("components/myfooter/myfooter").then(i.bind(null,"6bab"))},s=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",function(){return s}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"7c25":function(t,e,i){},"8a1c":function(t,e,i){"use strict";(function(t){i("d28f");a(i("66fd"));var e=a(i("b583"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("5486")["createPage"])},b583:function(t,e,i){"use strict";i.r(e);var a=i("1b81"),s=i("006c");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("c46b");var r,n=i("f0c5"),u=Object(n["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},c46b:function(t,e,i){"use strict";var a=i("7c25"),s=i.n(a);s.a},d018:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("88e4"),s={data:function(){return{$imgurl:this.$imgurl,page_sign:"order",page:1,morePro:!1,baseinfo:"",orderinfo:[{pt_tx:""}],orderinfo_length:0,type:9,showhx:"",hxmm:"",hxmm_list:[{val:"",fs:!0},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1}],is_tuikuan:2,hx_choose:0,hx_ewm:"",flag:10,showPay:0,choosepayf:0,mymoney:0,mymoney_pay:1,is_submit:1,order_id:0,h5_wxpay:0,h5_alipay:0,pay_type:1,pay_money:0}},onLoad:function(e){var i=this;e.type&&(this.type=e.type),this._baseMin(this);var s=0;e.fxsid&&(s=e.fxsid,this.fxsid=s),t.setNavigationBarTitle({title:"我的拼团订单"}),a.bdLogin(s,function(){i.getList()})},onPullDownRefresh:function(){this.getList(),t.stopPullDownRefresh()},methods:{paybox:function(t){var e=0,i=this.orderinfo,a=t.currentTarget.dataset.order;this.order_id=a;for(var s=0;s<i.length;s++)i[s]["order_id"]==a&&(e=i[s]["price"]);this.pay_money=e;var o=this.mymoney;e>o&&(this.mymoney_pay=2,this.pay_type=2,this.choosepayf=4),0==this.showPay&&(this.showPay=1)},payboxclose:function(){1==this.showPay&&(this.showPay=0)},choosepay:function(t){this.pay_type=t.currentTarget.dataset.pay_type,this.choosepayf=t.currentTarget.dataset.type},pay:function(t){var e=this.is_submit;if(2==e)return!1;this.is_submit=2;this.$uniacid,this.suid,this.source;var i=this.pay_type,a=this.pay_money,s=this.order_id;t.detail.formId;1==i?this.pay1(s):this._baidupay(this,a,"pt",s,"/pagesPt/orderlist/orderlist")},pay1:function(e){var i=this,a=e;t.showModal({title:"请注意",content:"您将使用余额支付"+i.pay_money+"元",success:function(e){e.confirm?(i.payover_do(a),t.showLoading({title:"下单中...",mask:!0})):t.redirectTo({url:"/pagesPt/orderlist/orderlist"})}})},payover_do:function(e){var i=this,a=(i.order_id,i.shareid),s=(i.mymoney,i.pay_money),o=i.pay_money,r=s,n=t.getStorageSync("openid");t.request({url:i.$baseurl+"doPageptorderchange",data:{uniacid:i.$uniacid,order_id:e,openid:n,true_price:r,dkscore:0,couponid:0,shareid:a,formid:i.formId,yue_price:o,wx_price:0,suid:i.suid,source:t.getStorageSync("source")},success:function(a){i.sendMail_order(e),0==a.data.data?t.redirectTo({url:"/pagesPt/orderlist/orderlist"}):t.redirectTo({url:"/pagesPt/pt/pt?shareid="+a.data.data})}})},sendMail_order:function(e){var i=this;t.request({url:i.$baseurl+"doPagesendMail_order",data:{uniacid:i.$uniacid,order_id:e},success:function(t){},fail:function(t){}})},getList:function(e){var i=this,a=t.getStorageSync("suid");t.request({url:i.$baseurl+"dopageptorderlist",data:{uniacid:i.$uniacid,suid:a},success:function(t){i.orderinfo=t.data.data.orders,i.orderinfo_length=t.data.data.orders.length,i.is_tuikuan=t.data.data.is_tuikuan,i.mymoney=t.data.data.mymoney}})},tuikuan:function(e){var i=this,a=e.target.dataset.order,s=e.detail.formId;t.showModal({title:"提示",content:"确认申请退款？",success:function(e){e.confirm?t.request({url:i.$baseurl+"doPagepttk",data:{uniacid:i.$uniacid,orderid:a,formId:s},success:function(e){1==e.data.data?t.showModal({title:"提示",content:"退款申请成功",showCancel:!1,success:function(t){i.getList()}}):t.showModal({title:"提示",content:"该订单已申请或不存在",showCancel:!1,success:function(t){i.getList()}})}}):e.cancel}})},hxshow:function(t){this.showhx=1,this.order=t.currentTarget.dataset.order},hxhide:function(){this.showhx=0,this.hxmm=""},hxmmInput:function(t){for(var e=t.target.value.length,i=0;i<this.hxmm_list.length;i++)this.hxmm_list[i].fs=!1,this.hxmm_list[i].val=t.target.value[i];e&&(this.hxmm_list[e-1].fs=!0),this.hxmm=t.target.value},hxmmpass:function(){var e=this,i=e.hxmm,a=e.order;i?t.request({url:e.$baseurl+"Hxmm",data:{uniacid:e.$uniacid,hxmm:i,order_id:a,is_more:3,suid:t.getStorageSync("suid")},success:function(i){var a=i.data.data;if(0==a){t.showModal({title:"提示",content:"核销密码不正确！",showCancel:!1}),e.hxmm="";for(var s=0;s<e.hxmm_list.length;s++)e.hxmm_list[s].fs=!1,e.hxmm_list[s].val=""}else t.showToast({title:"消费成功",icon:"success",duration:2e3,success:function(i){e.showhx=0,e.hxmm="",t.startPullDownRefresh(),e.page=1,e.getList(),t.stopPullDownRefresh()}})}}):t.showModal({title:"提示",content:"请输入核销密码！",showCancel:!1})},wlinfo:function(e){var i=e.currentTarget.dataset.kuaidi,a=e.currentTarget.dataset.kuaidihao;t.navigateTo({url:"/pagesOther/logistics_state/logistics_state?kuaidi="+i+"&kuaidihao="+a})},qrshouh:function(e){var i=this,a=e.currentTarget.dataset.orderid;console.log(a);var s=t.getStorageSync("suid");t.showModal({title:"提示",content:"确认收货吗？",success:function(e){e.confirm&&t.request({url:i.$baseurl+"doPageptshouhuo",data:{uniacid:i.$uniacid,suid:s,orderid:a},success:function(e){t.showToast({title:"收货成功！",success:function(t){setTimeout(function(){i.page=1,i.getList()},1500)}})}})}})},gethxmima:function(){this.hx_choose=1},gethxImg:function(){var e=this;t.request({url:this.$baseurl+"doPageHxEwm",data:{uniacid:this.$uniacid,suid:t.getStorageSync("suid"),pageUrl:"products",orderid:this.order},success:function(t){e.hx_ewm=t.data.data,e.hx_choose=2}})},hxhide1:function(){this.hx_choose=0,this.hxmm="";for(var t=0;t<this.hxmm_list.length;t++)this.hxmm_list[t].fs=!1,this.hxmm_list[t].val=""},changflag:function(e){var i=this,a=e.currentTarget.dataset.flag;this.flag=a;var s=t.getStorageSync("suid");t.request({url:i.$baseurl+"dopageptorderlist",data:{uniacid:i.$uniacid,suid:s,flag:a},success:function(t){i.orderinfo=t.data.data.orders,i.orderinfo_length=t.data.data.orders.length,i.is_tuikuan=t.data.data.is_tuikuan,i.mymoney=t.data.data.mymoney}})}}};e.default=s}).call(this,i("5486")["default"])}},[["8a1c","common/runtime","common/vendor"]]]);