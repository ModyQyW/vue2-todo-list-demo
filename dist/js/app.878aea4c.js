(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d221c57":"3c35b2c4"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vuetify","chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=(n("b0c0"),{name:"resize",inserted:function(t,e){var n=e.value,i=200,o=!0;"function"!==typeof e.value&&(n=e.value.value,i=e.value.debounce||i,o=null===e.value.quiet&&o);var a=null,r=function(){clearTimeout(a),a=setTimeout(n,i)};window.addEventListener("resize",r,{passive:!0}),t._onResize=r,o&&r()},unbind:function(t,e){window.removeEventListener("resize",t._onResize)}});i["default"].directive(o.name,o);var a=n("a6f4");i["default"].use(a["a"]),i["default"].prototype.$bus=new i["default"];var r=n("f309");n("d5e8"),n("5363");i["default"].use(r["a"]);var s=new r["a"]({theme:{options:{customProperties:!0}}}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],u={name:"App"},d=u,m=(n("034f"),n("2877")),v=Object(m["a"])(d,l,c,!1,null,null,null),f=v.exports,p=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("layout-bar",{attrs:{drawer:t.drawer},on:{"update:drawer":function(e){t.drawer=e}}}),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" vue2-todo-list-demo ")]),n("v-list-item-subtitle",[t._v(" author: "),n("v-btn",{attrs:{href:"https://github.com/ModyQyW/",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("ModyQyW")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("v-main",[n("router-view")],1)],1)},b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vue Logo",contain:"",src:"https://vuejs.org/images/logo.png",transition:"scale-transition",width:"36"}}),n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"36"}}),n("div",{staticClass:"text-h6 d-md-block d-none"},[t._v(" vue2-todo-list-demo ")])],1),n("v-app-bar-nav-icon",{staticClass:"d-lg-none",on:{click:function(e){return e.stopPropagation(),t.handleToggleDrawer(e)}}}),n("v-spacer"),n("v-menu",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),i),[n("v-icon",[t._v("mdi-palette")])],1)]}}])},[n("v-list",t._l(t.items,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.handleSetTheme(e)}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),n("v-btn",{attrs:{href:"https://github.com/ModyQyW/vue2-todo-list-demo/",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Repo")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1)},_=[],y={name:"LayoutBar",props:{drawer:{required:!0,validator:function(t){return null===t||"boolean"===typeof t}}},data:function(){return{items:["light","dark"]}},methods:{handleToggleDrawer:function(){this.$emit("update:drawer",!this.drawer)},handleSetTheme:function(t){this.$store.commit("setTheme",t),this.$vuetify.theme.dark="dark"===t}}},w=y,L=n("6544"),V=n.n(L),k=n("40dc"),x=n("5bc1"),C=n("8336"),I=n("132d"),T=n("adda"),S=n("8860"),O=n("da13"),j=n("5d23"),R=n("e449"),P=n("2fa4"),E=Object(m["a"])(w,g,_,!1,null,null,null),$=E.exports;V()(E,{VAppBar:k["a"],VAppBarNavIcon:x["a"],VBtn:C["a"],VIcon:I["a"],VImg:T["a"],VList:S["a"],VListItem:O["a"],VListItemTitle:j["c"],VMenu:R["a"],VSpacer:P["a"]});var M={name:"Layout",components:{LayoutBar:$},data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-view-dashboard",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},A=M,B=n("7496"),D=n("ce7e"),z=n("1baa"),J=n("34c3"),N=n("f6c4"),q=n("f774"),Q=Object(m["a"])(A,h,b,!1,null,null,null),W=Q.exports;V()(Q,{VApp:B["a"],VBtn:C["a"],VDivider:D["a"],VIcon:I["a"],VList:S["a"],VListItem:O["a"],VListItemContent:j["a"],VListItemGroup:z["a"],VListItemIcon:J["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VMain:N["a"],VNavigationDrawer:q["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:12,md:4,sm:12}},[n("p",{staticClass:"text-body-1"},[t._v(" Add Todo ")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{counter:20,rules:t.titleRules,label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-row",{staticClass:"mt-2",attrs:{justify:"space-around"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.handleConfirm}},[t._v(" OK ")]),n("v-btn",{on:{click:t.handleReset}},[t._v(" Reset ")])],1)],1)],1),n("v-col",{attrs:{cols:12,md:4,sm:12}},[n("p",{staticClass:"text-body-1"},[t._v(" Todo List ")]),n("v-card",{staticClass:"overflow-y-auto",attrs:{"max-height":"600px"}},[n("v-list",{attrs:{dense:""}},[0===t.todoList.length?n("v-subheader",[t._v(" Empty ")]):t._e(),t._l(t.todoList,(function(e){return[n("v-list-item",{key:e.timestamp},[n("v-list-item-content",[n("v-list-item-title",{attrs:{title:e.title},domProps:{textContent:t._s(e.title)}}),n("v-list-item-subtitle",[t._v(" "+t._s(t._f("filterTimestamp")(e.timestamp))+" ")])],1),n("v-list-item-action",{staticClass:"flex-row"},[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.handleRemove("todo",e.timestamp)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{on:{click:function(n){return t.handleComplete(e.timestamp)}}},[t._v(" mdi-check ")])],1)],1)],1)]}))],2)],1)],1),n("v-col",{attrs:{cols:12,md:4,sm:12}},[n("p",{staticClass:"text-body-1"},[t._v(" Done List ")]),n("v-card",{staticClass:"overflow-y-auto",attrs:{"max-height":"600px"}},[n("v-list",{attrs:{dense:""}},[0===t.doneList.length?n("v-subheader",[t._v(" Empty ")]):t._e(),t._l(t.doneList,(function(e){return[n("v-list-item",{key:e.timestamp},[n("v-list-item-content",[n("v-list-item-title",{attrs:{title:e.title},domProps:{textContent:t._s(e.title)}}),n("v-list-item-subtitle",[t._v(" "+t._s(t._f("filterTimestamp")(e.timestamp))+" ")])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.handleRemove("done",e.timestamp)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)]}))],2)],1)],1)],1)],1)},H=[],G=(n("a434"),n("3835")),K="todoList",U=function(){return JSON.parse(localStorage.getItem(K))||[]},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];localStorage.setItem(K,JSON.stringify(t))},Y="doneList",Z=function(){return JSON.parse(localStorage.getItem(Y))||[]},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];localStorage.setItem(Y,JSON.stringify(t))},et="theme",nt=function(){return localStorage.getItem(Y)||"light"},it=function(t){localStorage.setItem(et,t)},ot={filters:{filterTimestamp:function(t){return new Date(t).toLocaleString()}},data:function(){return{title:"",titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=20||"Title must be less than 20 characters"}],todoList:U(),doneList:Z()}},methods:{handleReset:function(){this.$refs.form.reset()},handleConfirm:function(){this.$refs.form.validate()&&(this.todoList.unshift({title:this.title,timestamp:+new Date}),X(this.todoList),this.handleReset())},handleRemove:function(t,e){if("todo"===t){for(var n=0,i=this.todoList.length;n<i;n+=1)if(this.todoList[n].timestamp===e){this.todoList.splice(n,1),X(this.todoList);break}}else for(var o=0,a=this.doneList.length;o<a;o+=1)if(this.doneList[o].timestamp===e){this.doneList.splice(o,1),tt(this.doneList);break}},handleComplete:function(t){for(var e={},n=0,i=this.todoList.length;n<i;n+=1)if(this.todoList[n].timestamp===t){var o=this.todoList.splice(n,1),a=Object(G["a"])(o,1);e=a[0],X(this.todoList);break}this.doneList.unshift(e),tt(this.doneList)}}},at=ot,rt=n("b0af"),st=n("62ad"),lt=n("a523"),ct=n("4bd4"),ut=n("1800"),dt=n("0fd9"),mt=n("e0c7"),vt=n("8654"),ft=Object(m["a"])(at,F,H,!1,null,null,null),pt=ft.exports;V()(ft,{VBtn:C["a"],VCard:rt["a"],VCol:st["a"],VContainer:lt["a"],VForm:ct["a"],VIcon:I["a"],VList:S["a"],VListItem:O["a"],VListItemAction:ut["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VRow:dt["a"],VSubheader:mt["a"],VTextField:vt["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-responsive",{staticClass:"overflow-visible"},[n("p",[t._v("built with vue 2, vue-router 3, vuex 3 and vuetify 2")])])],1)},bt=[],gt={},_t=gt,yt=n("6b53"),wt=Object(m["a"])(_t,ht,bt,!1,null,null,null),Lt=wt.exports;V()(wt,{VContainer:lt["a"],VResponsive:yt["a"]}),i["default"].use(p["a"]);var Vt=[{path:"/",component:W,children:[{path:"",name:"Home",component:pt}]},{path:"/about",component:W,children:[{path:"",name:Lt,component:Lt}]},{path:"/404",component:W,children:[{path:"",name:"404",component:function(){return n.e("chunk-2d221c57").then(n.bind(null,"cc89"))}}]},{path:"*",component:W,children:[{path:"",component:function(){return n.e("chunk-2d221c57").then(n.bind(null,"cc89"))}}]}],kt=function(){return new p["a"]({scrollBehavior:function(){return{y:0}},routes:Vt})},xt=kt();var Ct=xt,It=n("2f62");i["default"].use(It["a"]);var Tt=new It["a"].Store({strict:!1,state:{theme:nt()},getters:{},mutations:{setTheme:function(t,e){t.theme="light"===e||"dark"===e?e:"light",it(t.theme)}},actions:{},modules:{}});i["default"].config.productionTip=!1,new i["default"]({router:Ct,store:Tt,vuetify:s,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.878aea4c.js.map