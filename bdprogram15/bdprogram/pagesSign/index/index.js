(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesSign/index/index"],{"149e":function(e,t,n){},"4b13":function(e,t,n){"use strict";var i=n("149e"),a=n.n(i);a.a},6358:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("88e4"),a={data:function(){return{bg:"",userinfo:"",hasEmptyGrid:!1,showPicker:!1,jilu:"",page_signs:"/pagesSign/index/index",tongj:{score:{}},choose_year:null,choose_month:null,weeks_ch:[],cur_year:"",cur_month:"",empytGrids:[],days:{},picker_value:[],picker_year:[],picker_month:[],needBind:!1,needAuth:!1,baseinfo:{},$imgurl:this.$imgurl,signsuccess:0,is_today:0}},onShareAppMessage:function(){return{title:"积分签到"}},onPullDownRefresh:function(){this.getsign(),e.stopPullDownRefresh()},onLoad:function(t){var n=this;e.setNavigationBarTitle({title:"积分签到"});var a=0;t.fxsid&&(a=t.fxsid),this.fxsid=a;var s=new Date,r=s.getFullYear(),u=s.getMonth()+1,c=["日","一","二","三","四","五","六"];this.calculateEmptyGrids(r,u),this.calculateDays(r,u),this.cur_year=r,this.cur_month=u,this.weeks_ch=c,this._baseMin(this);var o=e.getStorageSync("suid");if(o)i.bdLogin(a,function(){n.getsign()});else{n.getsign();var d=e.getStorageSync("baidu_userinfo");d?this.needBind=!0:this.needAuth=!0}},methods:{pulls:function(t){e.redirectTo({url:"/pagesSign/index/index"})},redirectto:function(e){var t=e.currentTarget.dataset.link,n=e.currentTarget.dataset.linktype;this._redirectto(t,n)},checkvip:function(){var t=this,n=e.getStorageSync("openid");e.request({url:t.$baseurl+"doPagecheckvip",data:{uniacid:t.$uniacid,kwd:"sign",openid:n},success:function(n){n.data.data||(t.needvip=!0,e.showModal({title:"进入失败",content:"使用本功能需先开通vip!",showCancel:!1,success:function(t){t.confirm&&e.redirectTo({url:"/pages/register/register"})}}))},fail:function(e){}})},getThisMonthDays:function(e,t){return new Date(e,t,0).getDate()},getFirstDayOfWeek:function(e,t){return new Date(Date.UTC(e,t-1,1)).getDay()},calculateEmptyGrids:function(e,t){var n=this.getFirstDayOfWeek(e,t),i=[];if(n>0){for(var a=0;a<n;a++)i.push(a);this.hasEmptyGrid=!0,this.empytGrids=i}else this.hasEmptyGrid=!1,this.empytGrids=[]},calculateDays:function(t,n){var i=this,a=(this.getThisMonthDays(t,n),e.getStorageSync("openid"));e.request({url:i.$baseurl+"doPageMysign",data:{uniacid:i.$uniacid,openid:a,year:t,month:n},success:function(e){e.data.data}})},handleCalendar:function(e){var t=e.currentTarget.dataset.handle,n=this.cur_year,i=this.cur_month;if("prev"===t){var a=i-1,s=n;a<1&&(s=n-1,a=12),this.calculateDays(s,a),this.calculateEmptyGrids(s,a),this.cur_year=s,this.cur_month=a}else{var r=i+1,u=n;r>12&&(u=n+1,r=1),this.calculateDays(u,r),this.calculateEmptyGrids(u,r),this.cur_year=u,this.cur_month=r}},tapDayItem:function(e){var t=e.currentTarget.dataset.idx,n=this.days;n[t].choosed=!n[t].choosed,that.days=n},chooseYearAndMonth:function(){for(var e=this.cur_year,t=this.cur_month,n=[],i=[],a=1900;a<=2100;a++)n.push(a);for(var s=1;s<=12;s++)i.push(s);var r=n.indexOf(e),u=i.indexOf(t);this.picker_value=[r,u],this.picker_year=n,this.picker_month=i,this.showPicker=!0},pickerChange:function(e){var t=e.detail.value;choose_year=this.picker_year[t[0]],choose_month=this.picker_month[t[1]]},tapPickerBtn:function(e){var t=e.currentTarget.dataset.type,n={showPicker:!1};"confirm"===t&&(n.cur_year=choose_year,n.cur_month=choose_month,this.calculateEmptyGrids(choose_year,choose_month),this.calculateDays(choose_year,choose_month)),this.o=n},getsign:function(){var t=this,n=e.getStorageSync("suid");e.request({url:t.$baseurl+"doPageMysign",data:{uniacid:t.$uniacid,suid:n},success:function(e){var n=e.data.data;t.days=n}}),e.request({url:t.$baseurl+"doPageMysignjl",data:{uniacid:t.$uniacid,suid:n,source:e.getStorageSync("source")},success:function(e){var n=e.data.data;t.userinfo=n.userinfo,t.jilu=n.alls}}),e.request({url:t.$baseurl+"doPagemysigntj",data:{uniacid:t.$uniacid,suid:n,source:e.getStorageSync("source")},success:function(e){var n=e.data.data;t.tongj=n,t.is_today=n.is_today}})},qiandao:function(){var t=this,n=e.getStorageSync("suid");if(!this.getSuid())return!1;e.request({url:t.$baseurl+"doPageQiandao",data:{uniacid:t.$uniacid,suid:n,source:e.getStorageSync("source")},success:function(n){var i=n.data.data;1==i?e.showModal({title:"提醒",content:"您今天已经签过到了！",showCancel:!1}):(t.signsuccess=1,t.is_today=1)}})},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var t=e.getStorageSync("suid");if(t)return!0;var n="";return n=e.getStorageSync("baidu_userinfo"),n?this.needBind=!0:this.needAuth=!0,!1}}};t.default=a}).call(this,n("5486")["default"])},"7bb3":function(e,t,n){"use strict";(function(e){n("d28f");i(n("66fd"));var t=i(n("f5b0"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("5486")["createPage"])},8128:function(e,t,n){"use strict";var i={auth:()=>Promise.all([n.e("common/vendor"),n.e("components/auth/auth")]).then(n.bind(null,"a32a")),bindPhone:()=>Promise.all([n.e("common/vendor"),n.e("components/bindPhone/bindPhone")]).then(n.bind(null,"9bb9"))},a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i})},be3b:function(e,t,n){"use strict";n.r(t);var i=n("6358"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},f5b0:function(e,t,n){"use strict";n.r(t);var i=n("8128"),a=n("be3b");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("4b13");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports}},[["7bb3","common/runtime","common/vendor"]]]);