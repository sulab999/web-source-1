(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesActive/index/index"],{"037a":function(t,e,a){"use strict";a.r(e);var i=a("763a"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=n.a},"2e53":function(t,e,a){"use strict";var i=a("ca95"),n=a.n(i);n.a},"763a":function(t,e,a){"use strict";(function(t){function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("88e4"),c={data:function(){var t;return t={$imgurl:this.$imgurl,$host:this.$host,searchtitle:"",page:1,cateid:0,catelist:[],activeList:""},i(t,"searchtitle",""),i(t,"baseinfo",""),i(t,"page_signs","pagesActive/index/index"),i(t,"arr",[]),i(t,"activeList_length",0),t},onPullDownRefresh:function(){var e=this;e.page=1,e.activeLists(),t.stopPullDownRefresh()},onLoad:function(e){var a=this,i=0;e.fxsid&&(i=e.fxsid,this.fxsid=e.fxsid),this._baseMin(this);t.getStorageSync("suid");n.bdLogin(i,function(){a.activeLists()})},onReachBottom:function(){var e=this,a=e.cateid,i=e.page+1;t.request({url:e.$baseurl+"doPageActiveList",data:{uniacid:e.$uniacid,page:i,cateid:a,searchtitle:e.searchtitle},success:function(t){t.data.data.list.length>0&&(e.catelist=t.data.data.catelist,e.activeList=e.activeList.concat(t.data.data.list),e.page=i),e.daojishi()}})},methods:{changeTab:function(t){var e=this,a=t.currentTarget.dataset.id;e.cateid=a,e.activeLists()},redirectto:function(t){var e=t.currentTarget.dataset.link,a=t.currentTarget.dataset.linktype;app.redirectto(e,a)},activeLists:function(e){var a=this,i=a.cateid;t.request({url:a.$baseurl+"doPageActiveList",data:{uniacid:a.$uniacid,page:a.page,cateid:i,searchtitle:a.searchtitle},success:function(t){a.catelist=t.data.data.catelist,a.activeList=t.data.data.list,a.activeList_length=a.activeList.length,a.daojishi()}})},daojishi:function(){for(var t=this,e=t.activeList,a=[],i=0;i<e.length;i++){var n=new Date,c=n.getTime();if(4==e[i]["t_flag"]);else if(0==e[i]["endtime"])e[i]["t_flag"]=3;else if(1e3*e[i]["starttime"]>c)e[i]["t_flag"]=1;else if(1e3*e[i]["endtime"]<c)e[i]["t_flag"]=2;else if(e[i]["endtime"]<=0)e[i]["active_endtime"]=0;else{var s,r,o,u,l=1e3*parseInt(e[i]["endtime"]),d=l-c;d>=0&&(s=Math.floor(d/1e3/60/60/24),r=Math.floor(d/1e3/60/60%24)<10?"0"+Math.floor(d/1e3/60/60%24):Math.floor(d/1e3/60/60%24),o=Math.floor(d/1e3/60%60)<10?"0"+Math.floor(d/1e3/60%60):Math.floor(d/1e3/60%60),u=Math.floor(d/1e3%60)<10?"0"+Math.floor(d/1e3%60):Math.floor(d/1e3%60)),s>0?(e[i]["active_endtime"]=r+":"+o+":"+u,e[i]["active_enddate"]=s+"天",e[i]["active_endh"]=r,e[i]["active_endm"]=o,e[i]["active_ends"]=u,a[i]=s+"天"+r+":"+o+":"+u):(e[i]["active_endtime"]=r+":"+o+":"+u,e[i]["active_endh"]=r,e[i]["active_endm"]=o,e[i]["active_ends"]=u,a[i]=r+":"+o+":"+u)}}t.arr=a,t.activeList=e;setTimeout(function(){t.daojishi()},1e3)},serachInput:function(t){var e=this;e.searchtitle=t.detail.value},search:function(){var e=this,a=e.searchtitle;a?e.activeLists():t.showModal({title:"提示",content:"请输入搜索内容！",showCancel:!1})},goactiveinfo:function(e){var a=e.currentTarget.dataset.id;t.navigateTo({url:"/pagesActive/active_info/active_info?aid="+a})}}};e.default=c}).call(this,a("5486")["default"])},8510:function(t,e,a){"use strict";var i={copyright:()=>a.e("components/copyright/copyright").then(a.bind(null,"cb0f")),myfooter:()=>a.e("components/myfooter/myfooter").then(a.bind(null,"6bab"))},n=function(){var t=this,e=t.$createElement;t._self._c},c=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return c}),a.d(e,"a",function(){return i})},a505:function(t,e,a){"use strict";(function(t){a("d28f");i(a("66fd"));var e=i(a("cf98"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("5486")["createPage"])},ca95:function(t,e,a){},cf98:function(t,e,a){"use strict";a.r(e);var i=a("8510"),n=a("037a");for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);a("2e53");var s,r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports}},[["a505","common/runtime","common/vendor"]]]);