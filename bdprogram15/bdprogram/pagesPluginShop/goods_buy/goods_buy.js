(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesPluginShop/goods_buy/goods_buy"],{"0d8f":function(e,a,t){"use strict";var i=t("682f"),n=t.n(i);n.a},"20d8":function(e,a,t){"use strict";t.r(a);var i=t("8cca"),n=t("efba");for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);t("0d8f");var s,d=t("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);a["default"]=r.exports},"2d98":function(e,a,t){"use strict";(function(e){t("d28f");i(t("66fd"));var a=i(t("20d8"));function i(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("5486")["createPage"])},"682f":function(e,a,t){},"8cca":function(e,a,t){"use strict";var i={auth:()=>Promise.all([t.e("common/vendor"),t.e("components/auth/auth")]).then(t.bind(null,"a32a")),bindPhone:()=>Promise.all([t.e("common/vendor"),t.e("components/bindPhone/bindPhone")]).then(t.bind(null,"9bb9"))},n=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"b",function(){return n}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return i})},efba:function(e,a,t){"use strict";t.r(a);var i=t("f0b4"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);a["default"]=n.a},f0b4:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;t("2f62");var i=t("88e4"),n={data:function(){return{$imgurl:this.$imgurl,baseinfo:"",needAuth:!1,needBind:!1,id:"",bg:"",couponlist:[],picList:[],datas:"",autoplay:!1,comment:"",jhsl:1,dprice:"",yhje:0,hjjg:"",sfje:"",zfje:"",order:"",pro_name:"",pro_tel:"",pro_address:"",pro_txt:"",my_num:"",xg_num:"",shengyu:"",userInfo:"",chuydate:"",chuytime:"",couponprice:0,jqdjg:"请选择",yhqid:"0",kuaidi:0,nav:0,globaluser:"",money:0,showModalStatus:"",suid:"",pay_type:1,show_pay_type:0,alipay:1,wxpay:1,pagedata:[],formdescs:"",again:0,orderid:"",buy_name:"",buy_tel:"",buy_address:"",payprice:0,order_id:"",pd_val:[],is_submit:1}},onLoad:function(e){var a=this,t=e.id;this.id=t,this._baseMin(this);var n=0;e.fxsid&&(n=e.fxsid),this.fxsid=n,e.again&&(this.again=e.again),e.orderid&&(this.order_id=e.orderid),i.bdLogin(n,function(){a.getShowPic(t)})},methods:{closeAuth:function(){this.needAuth=!1,this._checkBindPhone(this),this.getShowPic(this.id)},closeBind:function(){console.log("closeBind"),this.needBind=!1,this.getShowPic(this.id)},refreshSessionkey:function(){var a=this;e.login({success:function(t){e.request({url:a.$baseurl+"doPagegetNewSessionkey",data:{uniacid:a.$uniacid,code:t.code},success:function(e){a.newSessionKey=e.data.data}})}})},getShowPic:function(a){var t=this;e.request({url:t.$baseurl+"doPageMymoneyD",data:{uniacid:t.$uniacid,suid:e.getStorageSync("suid")},success:function(a){t.money=parseFloat(a.data.data.money),t.order_id?e.request({url:t.$baseurl+"doPageGetShopOrderInfo",data:{uniacid:t.$uniacid,orderid:t.order_id},success:function(a){0==a.data.error?(t.datas=a.data.data.datas,t.hjjg=t.datas.hjjg,t.jqdjg=0==a.data.data.coupon?"未使用优惠券":"减"+t.datas.cou_price,t.sfje=a.data.data.price,t.nav=a.data.data.nav,t.buy_name=a.data.data.m_address.name,t.buy_tel=a.data.data.m_address.mobile,t.buy_address=a.data.data.m_address.address,t.pro_txt=a.data.data.liuyan,t.zfje=t.money>=t.sfje?t.sfje:((100*t.sfje-100*t.money)/100).toFixed(2),t.payprice=a.data.data.payprice):(e.showModal({title:"提醒",content:a.data.msg,showCancel:!1}),e.redirectTo({url:"/pages/order_more_list/order_more_list"}))}}):e.getStorage({key:"suid",success:function(a){t.suid=a.data,e.request({url:t.$baseurl+"doPagemycoupon",data:{uniacid:t.$uniacid,suid:t.suid,flag:0,id:t.id,type:"duoshop"},success:function(e){t.couponlist=e.data.data},fail:function(e){console.log(e)}}),e.request({url:t.$baseurl+"doPageshowPro_W",data:{uniacid:t.$uniacid,suid:t.suid,id:t.id},success:function(a){var i=t.yhje;0==a.data.data.kuaidi?t.nav=1:t.nav=2,t.picList=a.data.data.images,t.title=a.data.data.title,t.datas=a.data.data,t.hjjg=a.data.data.sellprice,t.dprice=a.data.data.sellprice,t.kuaidi=a.data.data.kuaidi,t.sfje=a.data.data.sellprice-i,t.shengyu=a.data.data.storage,t.pagedata=a.data.data.forms,t.formdescs=a.data.data.formdescs,e.setNavigationBarTitle({title:t.title}),e.setStorageSync("isShowLoading",!1),e.hideNavigationBarLoading(),e.stopPullDownRefresh(),t.zfje=t.money>=t.sfje?t.sfje:((100*t.sfje-100*t.money)/100).toFixed(2)}})}})}})},jian:function(){var e=this,a=e.jhsl,t=e.dprice,i=e.yhje;a--,a<=0&&(a=1);var n=100*t*a/100;n=n.toFixed(2);var o=n-i;e.jhsl=a,e.hjjg=n,e.sfje=o,e.zfje=e.money>=e.sfje?e.sfje:((100*e.sfje-100*e.money)/100).toFixed(2),e.jqdjg="请选择",e.yhqid=0},jia:function(){var a=this,t=a.jhsl,i=a.my_num,n=a.xg_num,o=a.shengyu,s=a.dprice,d=a.yhje;t++,t>o&&-1!=o&&(t--,e.showModal({title:"提醒",content:"库存量不足！",showCancel:!1})),t+i>n&&0!=n&&(1==t?t=1:t-=1,e.showModal({title:"提醒",content:"该商品为限购产品，您总购买数已超过限额！",showCancel:!1}));var r=100*s*t/100;r=r.toFixed(2);var u=r-d;a.jhsl=t,a.hjjg=r,a.sfje=u,a.zfje=a.money>=a.sfje?a.sfje:((100*a.sfje-100*a.money)/100).toFixed(2),a.jqdjg="请选择",a.yhqid=0},showModal:function(){this.showModalStatus=!0;var a=e.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=a,a.translateY(300).step(),this.animationData=a.export(),setTimeout(function(){a.translateY(0).step(),this.animationData=a.export()}.bind(this),200)},hideModal:function(){this.showModalStatus=!1;var a=e.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=a,a.translateY(300).step(),this.animationData=a.export(),setTimeout(function(){a.translateY(0).step(),this.animationData=a.export()}.bind(this),200)},makePhoneCallC:function(a){var t=a.currentTarget.dataset.tel;e.makePhoneCall({phoneNumber:t})},qxyh:function(){var e=this,a=e.jqdjg;"请选择"==a&&(a=0);var t=e.sfje,i=(100*t+100*a)/100;e.hideModal(),e.jqdjg=0,e.yhqid=0,e.sfje=i,e.zfje=e.money>=e.sfje?e.sfje:((100*e.sfje-100*e.money)/100).toFixed(2),e.jqdjg="请选择"},getmoney:function(a){var t=this,i=a.currentTarget.id,n=a.currentTarget.dataset.index,o=n["pay_money"],s=t.hjjg;if(1*s<1*o)e.showModal({title:"提示",content:"价格未满"+o+"元，不可使用该优惠券！",showCancel:!1});else{var d=(100*s-100*i)/100,r=parseFloat(d.toPrecision(12));r<0&&(r=0),t.jqdjg=i,t.yhqid=n["id"],t.sfje=r,t.zfje=t.money>=t.sfje?t.sfje:(t.sfje-t.money).toFixed(2),t.hideModal()}},nav_f:function(e){var a=parseInt(e.detail.value);this.nav=a},userNameInput:function(e){this.pro_name=e.detail.value},userTelInput:function(e){this.pro_tel=e.detail.value},userAddInput:function(e){this.pro_address=e.detail.value},userTextInput:function(e){this.pro_txt=e.detail.value},save:function(a){var t=this,i=this.is_submit;if(2==i)return!1;var n=t.pro_name,o=t.pro_tel,s=t.pro_address,d=(t.pro_txt,t.nav),r=a.detail.formId;if(t.form_id=r,!n&&2!=d)return l=!1,e.showModal({title:"提醒",content:"姓名为必填！",showCancel:!1}),!1;var u=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;if(!o&&2!=d)return l=!1,e.showModal({title:"提醒",content:"手机号为必填！",showCancel:!1}),!1;if(!u.test(o)&&2!=d)return e.showModal({title:"提醒",content:"请输入有效的手机号码！",showCancel:!1}),!1;if(!s&&2!=d)return l=!1,e.showModal({title:"提醒",content:"地址为必填！",showCancel:!1}),!1;if(t.datas.formset>0){t=this,t.datas;for(var c=t.id,l=!0,h=t.pagedata,f=0;f<h.length;f++)if(1==h[f].ismust)if(5==h[f].type){if(""==h[f].z_val)return l=!1,e.showModal({title:"提醒",content:h[f].name+"为必填项！",showCancel:!1}),!1}else{if(""==h[f].val)return l=!1,e.showModal({title:"提醒",content:h[f].name+"为必填项！",showCancel:!1}),!1;if(0==h[f].type&&1==h[f]["tp_text"][0]["yval"]){var g=/^1[3456789]{1}\d{9}$/;if(!g.test(h[f].val))return e.showModal({title:"提醒",content:"请您输入正确的手机号码",showCancel:!1}),!1}else if(0==h[f].type&&7==h[f]["tp_text"][0]["yval"]){var p=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;if(!p.test(h[f].val))return e.showModal({title:"提醒",content:"请您输入正确的身份证号",showCancel:!1}),!1}}if(l){this.is_submit=2;var y=e.getStorageSync("openid");e.request({url:t.$baseurl+"doPageFormval",data:{id:c,pagedata:JSON.stringify(h),types:"duoShop",uniacid:t.$uniacid,fid:t.fid?t.fid:0,openid:y,suid:e.getStorageSync("suid"),source:e.getStorageSync("source")},cachetime:"30",success:function(a){t.formid=a.data.data.id,e.showModal({title:"提示",content:a.data.data.con,showCancel:!1,success:function(e){t.save_order()}})}})}}else t.save_order()},save_order:function(a){var t=this,i=t.jhsl,n=t.shengyu;if(i>n&&-1!=n)return i--,e.showModal({title:"提醒",content:"库存量不足！",showCancel:!1}),!1;var o=t.sfje,s=e.getStorageSync("openid"),d=e.getStorageSync("suid"),r=e.getStorageSync("source"),u=t.jhsl,c=t.dprice,l=t.yhje,h=t.id,f=t.order,g=t.pro_name,p=t.pro_tel,y=t.pro_address,m=t.pro_txt,_=(t.id,t.yhqid);t.nav;this.is_submit=2,e.request({url:t.$baseurl+"doPageDingd_W",data:{suid:d,source:r,uniacid:t.$uniacid,openid:s,id:h,price:c,count:u,youhui:l,zhifu:o,order:f,pro_name:g,pro_tel:p,pro_address:y,pro_txt:m,yhqid:_,nav:t.nav,formid:t.formid},success:function(a){var i=a.data.data.order_id;if(0==a.data.data.success&&0==a.data.data.syl)return e.showModal({title:"提醒",content:"很遗憾！商品售完了！",showCancel:!1,success:function(){e.reLaunch({url:"../goods_detail/goods_detail?id="+h})}}),!1;if(0==a.data.data.success&&a.data.data.syl>0)return e.showModal({title:"提醒",content:"很遗憾！商品只剩下"+a.data.data.syl+"个",showCancel:!1,success:function(){e.reLaunch({url:"../goods_detail/goods_detail?id="+h})}}),!1;if(1==a.data.data.success)if(t.order_id=a.data.data.order_id,o<=t.money)e.showModal({title:"提醒",content:"您将使用余额支付"+o+"元",success:function(a){a.confirm?e.request({url:t.$baseurl+"doPageyuzhifu_w",data:{uniacid:t.$uniacid,suid:d,openid:s,source:r,money:o,order_id:i,form_id:t.form_id},success:function(a){1==a.data.data&&e.showToast({icon:"success",title:"支付成功！",duration:3e3,success:function(a){e.redirectTo({url:"/pages/order_more_list/order_more_list"})}})},fail:function(a){e.redirectTo({url:"/pages/order_more_list/order_more_list"})}}):a.cancel&&e.redirectTo({url:"/pages/order_more_list/order_more_list"})}});else{var n="";n=t.money>0?(100*o-100*t.money)/100:o,t._baidupay(t,n,"duo",i,"/pages/order_more_list/order_more_list")}}})},pay1:function(a,t){var i=this,n=e.getStorageSync("openid"),o=e.getStorageSync("suid"),s=e.getStorageSync("source");e.showModal({title:"提醒",content:"您将微信支付"+a+"元",success:function(d){d.confirm&&e.request({url:i.$baseurl+"doPagezhifu_W",data:{uniacid:i.$uniacid,suid:o,openid:n,source:s,money:a,types:1,order_id:t,form_id:i.form_id},success:function(a){a.data.data.order_id&&e.requestPayment({timeStamp:a.data.data.timeStamp,nonceStr:a.data.data.nonceStr,package:a.data.data.package,signType:"MD5",paySign:a.data.data.paySign,success:function(a){e.showToast({title:"支付成功",icon:"success",duration:3e3,success:function(a){e.redirectTo({url:"/pages/order_more_list/order_more_list"})},fail:function(a){e.showToast({icon:"loading",title:"支付失败！",duration:2e3})},complete:function(a){console.log(888444),e.navigateBack({delta:9}),e.navigateTo({url:"/pages/order_more_list/order_more_list"})}})}})}})}})},pay2:function(a,t){e.request({url:this.$baseurl+"doPageAlipay",data:{uniacid:this.$uniacid,order_id:t,suid:e.getStorageSync("suid"),types:"duo"},success:function(a){a&&e.tradePay({tradeNO:a.data.trade_no,success:function(a){e.navigateTo({url:"/pages/order_more_list/order_more_list"})},fail:function(a){e.navigateTo({url:"/pages/order_more_list/order_more_list"})}})}})},showpay:function(){var a=this;e.request({url:this.$baseurl+"doPageGetH5payshow",data:{uniacid:this.$uniacid,suid:e.getStorageSync("suid")},success:function(t){0==t.data.data.ali&&0==t.data.data.wx?e.showModal({title:"提示",content:"请联系管理员设置支付参数",showCancel:!1,success:function(e){return!1}}):(0==t.data.data.ali?(a.alipay=0,a.pay_type=2):(a.alipay=1,a.pay_type=1),0==t.data.data.wx?a.wxpay=0:a.wxpay=1,a.show_pay_type=1)}})},changealipay:function(){this.pay_type=1},changewxpay:function(){this.pay_type=2},close_pay_type:function(){this.show_pay_type=0},h5topay:function(){var e=this.pay_type;1==e?this._alih5pay(this,this.zfje,1,this.order_id):2==e&&this._wxh5pay(this,this.zfje,"duo",this.order_id),this.show_pay_type=0},againPay:function(a){console.log("再次支付");var t=this,i=a.detail.formId;t.form_id=i;var n=t.order_id;if(n)if(0==t.payprice)e.showModal({title:"提醒",content:"您将使用余额支付"+t.sfje+"元",success:function(a){a.confirm?e.request({url:t.$baseurl+"doPageyuzhifu_w",data:{uniacid:t.$uniacid,suid:e.getStorageSync("suid"),openid:e.getStorageSync("openid"),source:e.getStorageSync("source"),money:t.sfje,order_id:n,form_id:t.form_id},success:function(a){1==a.data.data&&e.showToast({icon:"success",title:"支付成功！",duration:3e3,success:function(a){e.redirectTo({url:"/pages/order_more_list/order_more_list"})}})},fail:function(a){e.redirectTo({url:"/pages/order_more_list/order_more_list"})}}):a.cancel&&e.redirectTo({url:"/pages/order_more_list/order_more_list"})}});else{var o="";o=t.money>0?(100*t.sfje-100*t.money)/100:t.sfje,t._baidupay(t,o,"duo",n,"/pages/order_more_list/order_more_list")}},bindInputChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata;i[t].val=a,this.pagedata=i},weixinadd:function(){var a=this;e.chooseAddress({success:function(e){for(var t=e.provinceName+" "+e.cityName+" "+e.countyName+" "+e.detailInfo,i=e.userName,n=e.telNumber,o=a.pagedata,s=0;s<o.length;s++)0==o[s].type&&2==o[s].tp_text[0].yval&&(o[s].val=i),0==o[s].type&&3==o[s].tp_text[0].yval&&(o[s].val=n),0==o[s].type&&4==o[s].tp_text[0].yval&&(o[s].val=t);a.myname=i,a.mymobile=n,a.myaddress=t,a.pagedata=o}})},getPhoneNumber:function(a){var t=this,i=a.detail.iv,n=a.detail.encryptedData;"getPhoneNumber:ok"==a.detail.errMsg?e.checkSession({success:function(){e.request({url:t.$baseurl+"doPagejiemiNew",data:{uniacid:t.$uniacid,newSessionKey:t.newSessionKey,iv:i,encryptedData:n},success:function(a){if(a.data.data){for(var i=t.pagedata,n=0;n<i.length;n++)0==i[n].type&&5==i[n].tp_text[0]&&(i[n].val=a.data.data);t.wxmobile=a.data.data,t.pagedata=i}else e.showModal({title:"提示",content:"sessionKey已过期，请下拉刷新！"})},fail:function(e){console.log(e)}})},fail:function(){e.showModal({title:"提示",content:"sessionKey已过期，请下拉刷新！"})}}):e.showModal({title:"提示",content:"请先授权获取您的手机号！",showCancel:!1})},checkboxChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata;i[t].val=a,this.pagedata=i},radioChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata;i[t].val=a,this.pagedata=i},delimg:function(e){var a=e.currentTarget.dataset.index,t=e.currentTarget.dataset.id,i=this.pagedata,n=i[a].z_val;n.splice(t,1),0==n.length&&(n=""),i[a].z_val=n,this.pagedata=i},choiceimg:function(a){var t=this,i=0,n=t.zhixin,o=a.currentTarget.dataset.index,s=t.pagedata,d=s[o].val,r=s[o].tp_text[0];d?i=d.length:(i=0,d=[]);var u=r-i;t.pd_val;e.chooseImage({count:u,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){n=!0,t.zhixin=n,e.showLoading({title:"图片上传中"});var i=a.tempFilePaths,d=0,r=i.length,u=function a(){e.uploadFile({url:t.$baseurl+"wxupimg",formData:{uniacid:t.$uniacid},filePath:i[d],name:"file",success:function(i){s[o].z_val.push(i.data),t.pagedata=s,d++,d<r?a():(n=!1,t.zhixin=n,e.hideLoading())}})};u()}})},bindPickerChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata,n=i[t].tp_text,o=n[a];i[t].val=o,this.pagedata=i},bindDateChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata;i[t].val=a,this.pagedata=i},bindTimeChange:function(e){var a=e.detail.value,t=e.currentTarget.dataset.index,i=this.pagedata;i[t].val=a,this.pagedata=i},namexz:function(e){for(var a=this,t=e.currentTarget.dataset.index,i=a.pagedata,n=i[t],o=[],s=0;s<n.tp_text.length;s++){var d={};d["keys"]=n.tp_text[s]["yval"],d["val"]=1,o.push(d)}a.ttcxs=1,a.formindex=t,a.xx=o,a.xuanz=0,a.lixuanz=-1,a.riqi()},riqi:function(){for(var e=this,a=new Date,t=new Date(a.getTime()),i=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),s=i+"-"+n+"-"+o,d=e.xx,r=0;r<d.length;r++)d[r].val=1;e.xx=d,e.gettoday(s);for(var u=[],c=[],l=new Date,h=0;h<5;h++){var f=new Date(l.getTime()+24*h*3600*1e3),g=f.getFullYear(),p=f.getMonth()+1,y=f.getDate(),m=p+"月"+y+"日",_=g+"-"+p+"-"+y;u.push(m),c.push(_)}e.arrs=u,e.fallarrs=c,e.today=s},gettoday:function(a){var t=this,i=0,n="showOrder",o=t.formindex,s=t.xx;e.request({url:t.$baseurl+"dopageDuzhan",data:{uniacid:t.$uniacid,id:i,types:n,days:a,pagedatekey:o},success:function(e){for(var a=e.data.data,i=0;i<a.length;i++)s[a[i]].val=2;var n=0;a.length==s.length&&(n=1),t.xx=s,t.isover=n}})},goux:function(e){this.lixuanz=e.currentTarget.dataset.index},xuanzd:function(e){for(var a=e.currentTarget.dataset.index,t=this.fallarrs,i=t[a],n=this.xx,o=0;o<n.length;o++)n[o].val=1;this.xuanz=a,this.today=i,this.lixuanz=-1,this.xx=n,this.gettoday(i)},quxiao:function(){this.ttcxs=0},qdsave:function(){var a=this.today,t=this.xx,i=this.lixuanz;if(-1==i)return e.showModal({title:"提现",content:"请选择预约的选项",showCancel:!1}),!1;var n=t[i].keys,o="已选择"+a+"，"+n,s=this.pagedata,d=this.formindex;s[d].val=o,s[d].days=a,s[d].indexkey=d,s[d].xuanx=i,this.ttcxs=0,this.pagedata=s}}};a.default=n}).call(this,t("5486")["default"])}},[["2d98","common/runtime","common/vendor"]]]);