(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghupingjia/add-or-update"],{"239e":function(n,e,i){"use strict";i.r(e);var a=i("c591"),t=i("2611");for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);i("5bdb");var u,o=i("f0c5"),s=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"fa61eee4",null,!1,a["a"],u);e["default"]=s.exports},2611:function(n,e,i){"use strict";i.r(e);var a=i("68b2"),t=i.n(a);for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);e["default"]=t.a},"5bdb":function(n,e,i){"use strict";var a=i("c777"),t=i.n(a);t.a},"68b2":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(i("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,a,t,r,u){try{var o=n[r](u),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(a,t)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(a,t){var u=n.apply(e,i);function o(n){r(u,a,t,o,s,"next",n)}function s(n){r(u,a,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("3de8"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{pingjiabianhao:this.getUUID(),shangpinmingcheng:"",shangpinzhiliang:"",fuwutaidu:"",manyidu:"",pingyu:"",pingjiashijian:"",zhanghao:"",xingming:"",zhaopian:"",userid:""},shangpinzhiliangOptions:[],shangpinzhiliangIndex:0,fuwutaiduOptions:[],fuwutaiduIndex:0,manyiduOptions:[],manyiduIndex:0,user:{},ro:{pingjiabianhao:!1,shangpinmingcheng:!1,shangpinzhiliang:!1,fuwutaidu:!1,manyidu:!1,pingyu:!1,pingjiashijian:!1,zhanghao:!1,xingming:!1,zhaopian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(a.default.mark((function t(){var r,u,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,i.$api.session(r);case 3:if(u=t.sent,i.user=u.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ruleForm.xingming=i.user.xingming,i.ruleForm.zhaopian=i.user.zhaopian,i.shangpinzhiliangOptions="★,★★,★★★,★★★★,★★★★★".split(","),i.fuwutaiduOptions="★,★★,★★★,★★★★,★★★★★".split(","),i.manyiduOptions="满意,一般,不满意".split(","),i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=19;break}return i.ruleForm.id=e.id,t.next=17,i.$api.info("yonghupingjia",i.ruleForm.id);case 17:u=t.sent,i.ruleForm=u.data;case 19:if(!e.cross){t.next=70;break}o=n.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=70;break}if(s=t.t1.value,"pingjiabianhao"!=s){t.next=28;break}return i.ruleForm.pingjiabianhao=o[s],i.ro.pingjiabianhao=!0,t.abrupt("continue",22);case 28:if("shangpinmingcheng"!=s){t.next=32;break}return i.ruleForm.shangpinmingcheng=o[s],i.ro.shangpinmingcheng=!0,t.abrupt("continue",22);case 32:if("shangpinzhiliang"!=s){t.next=36;break}return i.ruleForm.shangpinzhiliang=o[s],i.ro.shangpinzhiliang=!0,t.abrupt("continue",22);case 36:if("fuwutaidu"!=s){t.next=40;break}return i.ruleForm.fuwutaidu=o[s],i.ro.fuwutaidu=!0,t.abrupt("continue",22);case 40:if("manyidu"!=s){t.next=44;break}return i.ruleForm.manyidu=o[s],i.ro.manyidu=!0,t.abrupt("continue",22);case 44:if("pingyu"!=s){t.next=48;break}return i.ruleForm.pingyu=o[s],i.ro.pingyu=!0,t.abrupt("continue",22);case 48:if("pingjiashijian"!=s){t.next=52;break}return i.ruleForm.pingjiashijian=o[s],i.ro.pingjiashijian=!0,t.abrupt("continue",22);case 52:if("zhanghao"!=s){t.next=56;break}return i.ruleForm.zhanghao=o[s],i.ro.zhanghao=!0,t.abrupt("continue",22);case 56:if("xingming"!=s){t.next=60;break}return i.ruleForm.xingming=o[s],i.ro.xingming=!0,t.abrupt("continue",22);case 60:if("zhaopian"!=s){t.next=64;break}return i.ruleForm.zhaopian=o[s],i.ro.zhaopian=!0,t.abrupt("continue",22);case 64:if("userid"!=s){t.next=68;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,t.abrupt("continue",22);case 68:t.next=22;break;case 70:i.styleChange();case 71:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pingjiashijianConfirm:function(n){console.log(n),this.ruleForm.pingjiashijian=n.result,this.$forceUpdate()},shangpinzhiliangChange:function(n){this.shangpinzhiliangIndex=n.target.value,this.ruleForm.shangpinzhiliang=this.shangpinzhiliangOptions[this.shangpinzhiliangIndex]},fuwutaiduChange:function(n){this.fuwutaiduIndex=n.target.value,this.ruleForm.fuwutaidu=this.fuwutaiduOptions[this.fuwutaiduIndex]},manyiduChange:function(n){this.manyiduIndex=n.target.value,this.ruleForm.manyidu=this.manyiduOptions[this.manyiduIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.id){e.next=5;break}return e.next=3,n.$api.update("yonghupingjia",n.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,n.$api.add("yonghupingjia",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},b870:function(n,e,i){"use strict";(function(n){i("4d63");a(i("66fd"));var e=a(i("239e"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},c591:function(n,e,i){"use strict";i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"3de8"))}},t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},c777:function(n,e,i){}},[["b870","common/runtime","common/vendor"]]]);