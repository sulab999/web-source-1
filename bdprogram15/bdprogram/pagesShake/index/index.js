(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesShake/index/index"],{"0ae2":function(e,i,t){},"3f70":function(e,i,t){"use strict";var a={auth:()=>Promise.all([t.e("common/vendor"),t.e("components/auth/auth")]).then(t.bind(null,"a32a")),bindPhone:()=>Promise.all([t.e("common/vendor"),t.e("components/bindPhone/bindPhone")]).then(t.bind(null,"9bb9"))},n=function(){var e=this,i=e.$createElement;e._self._c},s=[];t.d(i,"b",function(){return n}),t.d(i,"c",function(){return s}),t.d(i,"a",function(){return a})},"431e":function(e,i,t){"use strict";t.r(i);var a=t("7982"),n=t.n(a);for(var s in a)"default"!==s&&function(e){t.d(i,e,function(){return a[e]})}(s);i["default"]=n.a},7982:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("37b1"));function n(e){return e&&e.__esModule?e:{default:e}}var s=t("88e4");function o(e,i){var t=r(i);e.day=t[0],e.hour=t[1],e.min=t[2],e.sec=t[3],i<=0?e.clock="已经截止":setTimeout(function(){i-=1e3,o(e,i)},1e3)}function r(e){var i=Math.floor(e/1e3),t=Math.floor(i/3600),a=Math.floor(t/24),n=d(t%24),s=d(Math.floor((i-3600*t)/60)),o=d(i-3600*t-60*s),r=(d(Math.floor(e%1e3/10)),new Array);return r[0]=a,r[1]=n,r[2]=s,r[3]=o,r}function d(e){return e<10?"0"+e:e}var u={data:function(){return{$imgurl:this.$imgurl,last_index:0,amplification_index:0,roll_flag:!0,max_number:8,speed:300,finalindex:0,myInterval:"",max_speed:40,minturns:12,runs_now:0,flag:!1,is_button:!1,isShow:!1,need_fillinfo:!1,is_show:!0,times:1,close:0,prize_text:"",prize_img:"",sj_mb:0,hr:"",min:"",sec:"",share_open:1,activity:{userinfo:[]},day:"",hour:"",threeRecord:"",prizes:{1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]},is_rolling:!1,remain_times:"",base:[],rule:"",id:"",userinfo_name:"",userinfo_mobile:"",userinfo_address:"",needAuth:!1,needBind:!1,is_vip:!0}},onShareAppMessage:function(){var i=this,t=e.getStorageSync("suid");if("1"==i.base.share_type)var a="/pagesShake/index/index?id="+i.id;else a="/pagesShake/index/index?id="+i.id+"&suid="+t;return{title:i.activity.title,path:a,success:function(a){i.activity.share_num>=parseInt(i.base.everyday_share)?e.showModal({title:"注意",content:"分享获赠次数已达每日上限！",showCancel:!1}):i.activity.total_share_num>=parseInt(i.base.total_share)?e.showModal({title:"注意",content:"分享获赠次数已达本次活动上限！",showCancel:!1}):(e.request({url:i.$baseurl+"dopageaddsharenum",data:{uniacid:i.$uniacid,id:i.id},success:function(e){var t=i.activity;t.share+=1,i.activity=t}}),"1"==i.base.share_type?e.request({url:i.$baseurl+"dopageshareSuccess",data:{uniacid:i.$uniacid,id:i.id,suid:t},success:function(t){if(t.data.data){var a=i.activity;a.share_num+=1,a.total_share_num+=1,i.sactivity=a,e.showModal({title:"分享成功！",content:"恭喜您获得"+i.base.share_add+"次抽奖机会！",showCancel:!1,success:function(){i.sclose=0,i.ssj_mb=0}})}}}):e.showModal({title:"分享成功！",content:"分享被点进您可获得"+i.base.share_add+"次抽奖机会！",showCancel:!1,success:function(){i.close=0,i.sj_mb=0}}))}}},onPullDownRefresh:function(){this.times=1,this.getConfig(this.id),e.stopPullDownRefresh()},onShow:function(){var i=this;0==i.is_button&&(i.isShow=!0,e.onAccelerometerChange(function(t){if(i.isShow&&t.x>1&&t.y>1){var a=e.getStorageSync("suid");a?i.startrolling():e.showModal({title:"抽奖失败",content:"请先登录/注册",showCancel:!1,success:function(i){e.navigateTo({url:"/pages/usercenter/usercenter"})}})}}))},onHide:function(){this.isShow=!1},onLoad:function(i){var t=this;i.id&&(t.id=i.id),i.times&&(t.times=i.times);var a=0;i.fxsid&&(a=i.fxsid,e.setStorageSync("fxsid",a),t.fxsid=a),i.suid&&e.request({url:t.$baseurl+"dopageshareSuccess",data:{uniacid:t.$uniacid,id:t.id,suid:i.suid},success:function(e){}}),t.showThreeLucky(i.id),t.getPrizes(i.id),t.getConfig(i.id),this._baseMin(this);var n=e.getStorageSync("suid");if(n)s.bdLogin(a,function(){});else{var o=e.getStorageSync("baidu_userinfo");o?this.needBind=!0:this.needAuth=!0}},methods:{getConfig:function(i){var t=this,n=e.getStorageSync("suid");e.request({url:t.$baseurl+"dopagegetConfig",data:{uniacid:t.$uniacid,suid:n,id:i,source:e.getStorageSync("source")},success:function(i){0==i.data.data.flag&&t.showModal("进入失败","活动未开启"),1==i.data.data.flag&&t.showModal("进入失败","活动尚未开始！"),2==i.data.data.flag&&t.showModal("进入失败","活动已结束！"),e.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:i.data.data.nav_color?i.data.data.nav_color:"#FEA049"}),t.is_button="1"==i.data.data.base.means,t.remain_times=parseInt(i.data.data.base.every_join)+i.data.data.share_num*parseInt(i.data.data.base.share_add)-i.data.data.record_num+i.data.data.prizescount,t.base=i.data.data.base,t.activity=i.data.data,t.is_vip=i.data.data.is_vip;var n=i.data.data.descp.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:block" ');n=(0,a.default)(n),t.rule=n,console.log(t.rule),1==t.times&&(o(t,i.data.data.remaintime),t.userinfo_mobile=t.activity.userinfo.mobile,"0"==t.base.fill_time&&(1==t.activity.is_vip?(t.userinfo_name=t.activity.userinfo.realname,t.userinfo_address=t.activity.userinfo.address,t.close=8):"0"==t.base.users_type&&1==t.activity.fill_info&&(t.userinfo_name=t.activity.userinfo.realname,t.userinfo_address=t.activity.userinfo.address,t.close=8)))}})},showModal:function(i,t){e.showModal({title:i,content:t,showCancel:!1,success:function(i){i.confirm&&e.navigateBack({delta:1})}})},getPrizes:function(i){var t=this;e.request({url:t.$baseurl+"dopagegetPrizes",data:{uniacid:t.$uniacid,id:i},success:function(e){t.prizes=e.data.data}})},startrolling:function(){var i=this,t=e.getStorageSync("suid");if(!this.getSuid())return!1;var a=!1;if(i.close=0,i.sj_mb=1,i.activity.record_num>=parseInt(i.base.every_join)+i.activity.share_num*parseInt(i.base.share_add))this.close=2;else if("1"==i.base.just_one&&i.activity.win_num>=1)e.showModal({title:"很抱歉",content:"您已中过奖",showCancel:!1});else if(i.activity.user_jifen<parseInt(i.base.jifen))this.close=1;else if(0==i.is_vip?"1"==i.base.users_type?e.showModal({title:"很抱歉",content:"参与活动需要开通会员",success:function(i){i.confirm&&e.navigateTo({url:"/pages/register/register?from=lottery"})}}):"0"==i.base.fill_time&&0==i.activity.fill_info?e.showModal({title:"提示",content:"抽奖需要您的信息",cancelText:"填信息",confirmText:"开会员",success:function(t){t.confirm&&(i.sj_mb=0,e.navigateTo({url:"/pages/register/register?from=lottery"})),t.cancel&&(i.close=8)}}):a=!0:a=!0,a){var n=i.activity;n.user_jifen-=i.base.jifen,i.activity=n,i.isShow=!1;t=e.getStorageSync("suid");e.request({url:i.$baseurl+"dopagedrawLottery",data:{uniacid:i.$uniacid,id:i.id,suid:t},success:function(e){e.data.data.flag?(i.finalindex=e.data.data.index,i.flag=e.data.data.flag):(i.finalindex=e.data.data.empty,i.flag=e.data.data.flag)}}),i.runs_now=0,i.roll_flag&&(i.roll_flag=!1,i.is_rolling=!0,i.last_index=0,i.amplification_index=0,i.max_number=8,i.speed=300,i.finalindex=0,i.myInterval="",i.max_speed=40,i.minturns=12,i.runs_now=0,i.flag=!1,i.rolling())}},rolling:function(e){var i=this;i.myInterval=setTimeout(function(){i.rolling()},i.speed),i.runs_now++,i.amplification_index++;var t=i.minturns*i.max_number+i.finalindex-i.last_index;i.runs_now<=t/3*2?(i.speed-=30,i.speed<=i.max_speed&&(i.speed=i.max_speed)):i.runs_now>=t?(i.is_rolling=!1,i.times=2,i.getConfig(i.id),clearInterval(i.myInterval),i.roll_flag=!0,i.flag&&i.prizes[i.finalindex]?setTimeout(function(){"1"==i.base.fill_time?0==i.activity.is_vip&&0==i.activity.fill_info?(i.prizes[i.finalindex].detail,i.close=9,i.prize_text=i.prizes[i.finalindex].detail,i.prize_img=i.prizes[i.finalindex].thumb):(i.prizes[i.finalindex].detail,i.close=10,i.prize_text=i.prizes[i.finalindex].detail,i.prize_img=i.prizes[i.finalindex].thumb):(i.prizes[i.finalindex].detail,i.close=6,i.prize_text=i.prizes[i.finalindex].detail,i.prize_img=i.prizes[i.finalindex].thumb),i.showThreeLucky(i.id)},800):setTimeout(function(){i.close=5},800),i.is_button||(i.isShow=!0)):t-i.runs_now<=10?i.speed+=20:(i.speed+=10,i.speed>=100&&(i.speed=100)),i.amplification_index>i.max_number&&(i.amplification_index=1),i.data=i.data},addus1:function(){var e=this;e.close=8},addus2:function(){var i=this;i.sj_mb=0,e.redirectTo({url:"/pages/register/register?from=lottery"})},addus3:function(){var e=this;e.userinfo_name=e.activity.userinfo.realname,e.userinfo_mobile=e.activity.userinfo.mobile,e.userinfo_address=e.activity.userinfo.address,e.close=8},changeName:function(e){this.userinfo_name=e.detail.value},changeMobile:function(e){this.userinfo_mobile=e.detail.value},changeAddress:function(e){this.userinfo_address=e.detail.value},changeUserinfo:function(){var i=this,t=e.getStorageSync("suid");if(!this.getSuid())return!1;i.userinfo_name?i.userinfo_mobile?i.userinfo_address?e.request({url:i.$baseurl+"dopagechangeUserinfo",data:{uniacid:i.$uniacid,suid:t,name:i.userinfo_name,mobile:i.userinfo_mobile,address:i.userinfo_address},success:function(t){1==i.activity.fill_info?0!=i.finalindex?(i.prizes[i.finalindex].detail,i.close=6,i.prize_text=i.prizes[i.finalindex].detail,i.prize_img=i.prizes[i.finalindex].thumb):i.close=0:e.showToast({title:"提交成功！",icon:"success",success:function(){setTimeout(function(){var e=i.activity;e.fill_info=!0,0!=i.finalindex?(i.prizes[i.finalindex].detail,i.close=6,i.prize_text=i.prizes[i.finalindex].detail,i.prize_img=i.prizes[i.finalindex].thumb):i.close=0},1500)}})}}):e.showModal({title:"地址不能为空",content:"请重新填写",showCancel:!1}):e.showModal({title:"手机号不能为空",content:"请重新填写",showCancel:!1}):e.showModal({title:"姓名不能为空",content:"请重新填写",showCancel:!1})},checkUserinfo:function(){var e=this;0!=e.finalindex?(e.prizes[e.finalindex].detail,e.close=6,e.prize_text=e.prizes[e.finalindex].detail,e.prize_img=e.prizes[e.finalindex].thumb):e.close=0},toRegisterSuccess:function(){e.navigateTo({url:"/pagesShake/register_success/register_success?from=lottery"})},setUserinfo:function(e,i,t){this.userinfo_name=e,this.userinfo_mobile=i,this.userinfo_address=t},setTrueIsvip:function(){var e=this.activity;e.is_vip=!0,this.activity=e},closeBox:function(){this.close=0,this.sj_mb=0},share:function(){this.close=3},look_regular:function(){this.close=7},chooseAdress:function(){var i=this;e.chooseAddress({success:function(e){console.log(e),i.userinfo_name=e.userName,i.userinfo_address=e.provinceName+e.cityName+e.countyName+e.detailInfo},fail:function(){e.showModal({title:"提示",content:"一键获取需要您的授权",showCancel:!1})}})},showThreeLucky:function(i){var t=this;e.request({url:t.$baseurl+"dopageshowThreeLucky",data:{uniacid:t.$uniacid,id:i,source:e.getStorageSync("source")},success:function(e){t.threeRecord=e.data.data}})},toPrizelist:function(){e.navigateTo({url:"/pagesShake/prize/prize?id="+this.id+"&nav_color="+this.activity.nav_color})},toRecordlist:function(){e.getStorageSync("suid");if(!this.getSuid())return!1;e.navigateTo({url:"/pagesShake/win_prize/win_prize?id="+this.id+"&nav_color="+this.activity.nav_color})},toGetscore:function(){e.navigateTo({url:"/pagesShake/integral_collect/integral_collect"})},h5ShareAppMessage:function(){var i=e.getStorageSync("suid");e.showModal({title:"长按复制链接后分享",content:this.$host+"/h5/index.html?id="+this.$uniacid+"#/pagesShake/index/index?id="+this.id+"&fxsid="+i+"&userid="+i,showCancel:!1})},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var i=e.getStorageSync("suid");if(i)return!0;var t="";return t=e.getStorageSync("baidu_userinfo"),t?this.needBind=!0:this.needAuth=!0,!1}}};i.default=u}).call(this,t("5486")["default"])},"8c2e":function(e,i,t){"use strict";t.r(i);var a=t("3f70"),n=t("431e");for(var s in n)"default"!==s&&function(e){t.d(i,e,function(){return n[e]})}(s);t("f994");var o,r=t("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);i["default"]=d.exports},eec6:function(e,i,t){"use strict";(function(e){t("d28f");a(t("66fd"));var i=a(t("8c2e"));function a(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,t("5486")["createPage"])},f994:function(e,i,t){"use strict";var a=t("0ae2"),n=t.n(a);n.a}},[["eec6","common/runtime","common/vendor"]]]);