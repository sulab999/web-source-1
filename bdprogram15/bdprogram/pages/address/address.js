(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"3a13":function(e,i,d){"use strict";d.r(i);var s=d("eb3c"),t=d("d5f2");for(var n in t)"default"!==n&&function(e){d.d(i,e,function(){return t[e]})}(n);d("686b");var a,r=d("f0c5"),o=Object(r["a"])(t["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);i["default"]=o.exports},"686b":function(e,i,d){"use strict";var s=d("8617"),t=d.n(s);t.a},8617:function(e,i,d){},d1ed:function(e,i,d){"use strict";(function(e){d("d28f");s(d("66fd"));var i=s(d("3a13"));function s(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,d("5486")["createPage"])},d5f2:function(e,i,d){"use strict";d.r(i);var s=d("ee5d"),t=d.n(s);for(var n in s)"default"!==n&&function(e){d.d(i,e,function(){return s[e]})}(n);i["default"]=t.a},eb3c:function(e,i,d){"use strict";var s={auth:()=>Promise.all([d.e("common/vendor"),d.e("components/auth/auth")]).then(d.bind(null,"a32a")),bindPhone:()=>Promise.all([d.e("common/vendor"),d.e("components/bindPhone/bindPhone")]).then(d.bind(null,"9bb9")),"w-picker":()=>Promise.all([d.e("common/vendor"),d.e("components/w-picker/w-picker")]).then(d.bind(null,"7d1d2"))},t=function(){var e=this,i=e.$createElement;e._self._c},n=[];d.d(i,"b",function(){return t}),d.d(i,"c",function(){return n}),d.d(i,"a",function(){return s})},ee5d:function(e,i,d){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(){return Promise.all([d.e("common/vendor"),d.e("components/w-picker/w-picker")]).then(d.bind(null,"7d1d2"))},t=d("88e4"),n=d("a5d8"),a=d("a867"),r=d("9e79"),o={components:{wPicker:s},data:function(){return{$imgurl:this.$imgurl,baseinfo:"",address_is:1,moren:0,choose:0,id:0,choose_h:0,h:0,addressinfo:{},myaddress:"",needAuth:!1,needBind:!1,region:["北京市","北京市","东城区"],tabList:[{mode:"region",name:"省市区",value:[0,0,0]}],defaultVal:[0,0,0],add_id:0,shop_id:0,from_gwc:0,nav:1,changeAdd:0,is_checked:"",kuaidi:"",use_more:""}},onLoad:function(i){var d=this,s=i.shareid;void 0!=s&&"undefined"!=s&&(this.shareid=s);var n=i.use_more;void 0!=n&&"undefined"!=n&&(this.use_more=n);var a=i.orderid;void 0!=a&&"undefined"!=a&&(this.orderid=a);var r=i.pid;void 0!=r&&"undefined"!=r&&(this.pid=r);var o=i.add_id;void 0!=o&&"undefined"!=o&&(this.add_id=o);var u=i.from_gwc;void 0!=u&&"undefined"!=u&&(this.from_gwc=u);var c=i.shop_id;c&&(this.shop_id=c);var h=i.nav;h&&(this.nav=h);var l=i.discounts;void 0!=l&&(this.discounts=l);var f=0;i.fxsid&&(f=i.fxsid,this.fxsid=f);var m=i.kuaidi;void 0!=m&&(this.kuaidi=m);var g=i.order_id;void 0!=g&&(this.order_id=g);var v=i.pro_type;void 0!=v&&(this.pro_type=v);var _=this;e.getSystemInfo({success:function(e){_.choose_h=e.windowHeight,_.h=e.windowHeight-60}}),this._baseMin(this);var b=e.getStorageSync("suid");b&&t.bdLogin(f,function(){d.getMyAddress()})},computed:{mode:function(){return this.tabList[0].mode}},methods:{input_name:function(e){var i=e.detail.value,d=this.addressinfo;d["name"]=i,this.addressinfo=d},input_mobile:function(e){var i=e.detail.value,d=this.addressinfo;d["mobile"]=i,this.addressinfo=d},input_address:function(e){var i=e.detail.value,d=this.addressinfo;d["more_address"]=i,this.addressinfo=d},toggleTab:function(){this.$refs.picker.show()},onConfirm:function(e){var i=e.checkArr;this.region=[i[0],i[1],i[2]]},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1,this.getMyAddress()},getSuid:function(){var i=e.getStorageSync("suid");if(i)return!0;var d="";return d=e.getStorageSync("baidu_userinfo"),d?this.needBind=!0:this.needAuth=!0,!1},getMyAddress:function(){var i=this,d=e.getStorageSync("suid");e.request({url:this.$baseurl+"doPagegetallmyaddress",data:{uniacid:this.$uniacid,suid:d},success:function(e){i.myaddress=e.data.data,i.myaddress.length>0?i.address_is=1:i.address_is=0}})},add_address:function(i){var d=this;if(!this.getSuid())return!1;var s=i.currentTarget.dataset.id;if(this.id=s,s){var t=e.getStorageSync("suid");e.request({url:this.$baseurl+"doPagegetaddressdetail",data:{uniacid:this.$uniacid,suid:t,id:s},success:function(e){if(e.data.data){d.addressinfo=e.data.data;var i=e.data.data.region;d.region=e.data.data.region;for(var s=n.default,t=a.default,o=r.default,u=[],c=0;c<s.length;c++)if(s[c]["label"]==i[0]){u.push(c);break}t=t[u[0]];for(c=0;c<t.length;c++)if(t[c]["label"]==i[1]){u.push(c);break}o=o[u[0]][u[1]];for(c=0;c<o.length;c++)if(o[c]["label"]==i[2]){u.push(c);break}d.defaultVal=u,d.changeAdd=1,d.choose=1,d.is_mo=e.data.data.is_mo,1==d.is_mo?d.is_checked=!1:d.is_checked=!0}}})}else this.addressinfo={},this.region=["北京市","北京市","东城区"],this.changeAdd=0,this.choose=1,this.is_mo=1},switchChange:function(){0==this.is_checked?this.is_checked=!0:this.is_checked=!1},choose_close:function(){this.choose=0,this.is_checked=!1},formSubmit:function(i){var d=this,s=this.id,t=i.detail.value,n=this.region,a=t.realname,r=t.mobile,o=t.postalcode,u=n[0]+" "+n[1]+" "+n[2],c=t.more_address,h=this.is_checked?1:0,l=e.getStorageSync("suid"),f=/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;if(!f.test(r))return e.showModal({title:"提醒",content:"请输入有效的手机号码！",showCancel:!1}),!1;e.request({url:this.$baseurl+"doPageaddmyaddress",data:{uniacid:this.$uniacid,id:s,suid:l,name:a,mobile:r,address:u,more_address:c,postalcode:o,froms:"selfadd",is_checked:h},success:function(i){d.id=0,e.showToast({title:"更新/新建成功",icon:"success"}),d.getMyAddress(),d.choose_close()}})},deladdress:function(i){var d=i.currentTarget.dataset.id,s=this;e.showModal({content:"确定要删除吗",success:function(i){i.confirm&&e.request({url:s.$baseurl+"doPagedelmyaddress",data:{uniacid:s.$uniacid,id:d},success:function(i){e.showToast({title:"删除成功",icon:"success"}),s.getMyAddress()}})}})},moren_set:function(i){var d=this,s=i.currentTarget.dataset.id,t=e.getStorageSync("suid");e.request({url:this.$baseurl+"doPagesetdefaultaddress",data:{suid:t,id:s},success:function(e){d.getMyAddress()}})},bindRegionChange:function(e){this.region=e.detail.value},xuanzaddress:function(i){var d=this,s=i.currentTarget.dataset.id,t=getCurrentPages();if(t.length>1){var n=t[t.length-2].route,a=this.pro_type;"giftcard"!=a?e.redirectTo({url:"/"+n+"?addressid="+s+"&shareid="+d.shareid+"&id="+d.pid+"&orderid="+d.orderid+"&use_more="+d.use_more+"&discounts="+d.discounts+"&add_id="+s+"&nav="+this.nav+"&from_gwc="+this.from_gwc+"&shop_id="+this.shop_id+"&kuaidi="+d.kuaidi}):e.redirectTo({url:"/"+n+"?order_id="+d.order_id+"&add_id="+s+"&nav="+this.nav+"&shop_id="+this.shop_id})}},wx_address:function(){var i=this,d=e.getStorageSync("suid");e.chooseAddress({success:function(s){var t=s.provinceName+" "+s.cityName+" "+s.countyName,n=s.detailInfo,a=s.userName,r=s.telNumber,o=s.postalCode;e.request({url:i.$baseurl+"doPageaddmyaddress",data:{uniacid:i.$uniacid,suid:d,name:a,mobile:r,address:t,more_address:n,postalcode:o,froms:"weixin"},success:function(e){i.getMyAddress()}})}})}}};i.default=o}).call(this,d("5486")["default"])}},[["d1ed","common/runtime","common/vendor"]]]);