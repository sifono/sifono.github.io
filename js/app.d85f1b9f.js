(function(t){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5b73ef7","chunk-3b26f25d":"4f458e9f","chunk-3cab2689":"614dd8b3","chunk-b7decaf8":"e2a67b09","chunk-ded1edcc":"aa67d667"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-3cab2689":1,"chunk-b7decaf8":1,"chunk-ded1edcc":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-3b26f25d":"31d6cfe0","chunk-3cab2689":"f7f92f25","chunk-b7decaf8":"05e6fbaa","chunk-ded1edcc":"5b280531"}[t]+".css",i=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"21bb":function(t,e,n){"use strict";var a=n("d63f"),r=n.n(a);r.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"/img/logo_2.png",transition:"scale-transition",width:"50"},on:{click:function(e){return t.$router.push("/")}}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("About Me")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-content",{staticClass:"white"},[n("router-view")],1),n("v-footer",{attrs:{padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e,staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),n("v-col",{staticClass:"indigo lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Helwin Edon")])])],2)],1),n("v-bottom-navigation",{attrs:{app:"",fixed:"",dark:"","hide-on-scroll":""}},[n("v-btn",{attrs:{to:"/parser"}},[n("span",[t._v("Parser")]),n("v-icon",[t._v("spellcheck")])],1),n("v-btn",{attrs:{to:"/letters"}},[n("span",[t._v("Rangkuman Huruf")]),n("v-icon",[t._v("subject")])],1),n("v-btn",{attrs:{to:"/fiturs"}},[n("span",[t._v("Rangkuman Fitur")]),n("v-icon",[t._v("list")])],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},s=[],u=a["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),c=u,l=n("2877"),d=n("6544"),f=n.n(d),m=n("a523"),p=n("0e8f"),v=n("adda"),h=n("a722"),b=Object(l["a"])(c,o,s,!1,null,null,null),g=b.exports;f()(b,{VContainer:m["a"],VFlex:p["a"],VImg:v["a"],VLayout:h["a"]});var y=a["a"].extend({name:"App",components:{HelloWorld:g},data:function(){return{links:["About Me","Contact"],foo:"bar"}}}),x=y,_=n("7496"),k=n("40dc"),w=n("b81c"),C=n("8336"),j=n("62ad"),V=n("a75b"),q=n("553a"),A=n("132d"),E=n("0fd9"),P=n("2fa4"),O=Object(l["a"])(x,r,i,!1,null,null,null),S=O.exports;f()(O,{VApp:_["a"],VAppBar:k["a"],VBottomNavigation:w["a"],VBtn:C["a"],VCol:j["a"],VContent:V["a"],VFooter:q["a"],VIcon:A["a"],VImg:v["a"],VRow:E["a"],VSpacer:P["a"]});var L=n("9483");Object(L["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var T=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"hero"},[n("v-slide-y-transition",[n("div",{staticClass:"font-weight-bold lead"},[t._v("S I F O N O")])]),n("div",{staticClass:"font-weight-bold second"},[t._v("Applikasi Fonemik")])],1),n("v-container",[n("v-row",{staticStyle:{"margin-bottom":"84px"}},t._l(t.menus,(function(e,a){return n("v-col",{key:"app-menu-"+(a+1),attrs:{cols:"12"}},[n("v-card",{staticClass:"text-center",attrs:{to:e.to}},[n("v-card-text",{staticClass:"white--text",class:e.color},[n("v-icon",{attrs:{dark:"",size:"100"}},[t._v(t._s(e.icon))])],1),n("v-card-title",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"text-center"},[t._v(t._s(e.title))])]),n("v-card-text",[t._v(" "+t._s(e.desc)+" ")])],1)],1)})),1),n("v-divider"),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"headline font-weight-bold text-center my-4"},[t._v(" Tentang Applikasi Ini ")]),n("div",{staticClass:"px-8"},[n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Eu sem integer vitae justo eget. Arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Lectus sit amet est placerat in. ")]),n("p",[t._v(" Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vestibulum lorem sed risus ultricies tristique nulla. Gravida in fermentum et sollicitudin ac orci. Quis commodo odio aenean sed adipiscing diam donec. Rutrum tellus pellentesque eu tincidunt. Arcu bibendum at varius vel pharetra. Ut consequat semper viverra nam. Dolor purus non enim praesent elementum facilisis leo vel. Sagittis purus sit amet volutpat consequat. Lectus sit amet est placerat. ")])])])],1)],1)],1)},N=[],I=a["a"].extend({name:"home",data:()=>({menus:[{title:"Parser",to:"/parser",desc:"\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n          Etiam erat velit scelerisque in dictum non consectetur a erat. \n          Pellentesque dignissim enim sit amet venenatis urna cursus.\n        ",color:"indigo",icon:"spellcheck"},{title:"Rangkuman Huruf",to:"/letters",desc:"\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n          Etiam erat velit scelerisque in dictum non consectetur a erat. \n          Pellentesque dignissim enim sit amet venenatis urna cursus.\n        ",color:"pink",icon:"subject"},{title:"Rangkuman Fitur",to:"/fiturs",desc:"\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n          Etiam erat velit scelerisque in dictum non consectetur a erat. \n          Pellentesque dignissim enim sit amet venenatis urna cursus.\n        ",color:"teal",icon:"list"}]})}),B=I,D=(n("21bb"),n("b0af")),M=n("99d9"),R=n("ce7e"),H=n("0789"),$=Object(l["a"])(B,F,N,!1,null,null,null),W=$.exports;f()($,{VCard:D["a"],VCardText:M["a"],VCardTitle:M["b"],VCol:j["a"],VContainer:m["a"],VDivider:R["a"],VIcon:A["a"],VRow:E["a"],VSlideYTransition:H["e"]}),a["a"].use(T["a"]);var J=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/parser",component:function(){return Promise.all([n.e("chunk-3b26f25d"),n.e("chunk-3cab2689")]).then(n.bind(null,"59b3"))}},{path:"/letters",component:function(){return Promise.all([n.e("chunk-3b26f25d"),n.e("chunk-ded1edcc")]).then(n.bind(null,"95cf"))}},{path:"/fiturs",component:function(){return Promise.all([n.e("chunk-3b26f25d"),n.e("chunk-b7decaf8")]).then(n.bind(null,"cb03"))}}],Q=new T["a"]({routes:J}),U=Q,Y=n("f309");a["a"].use(Y["a"]);var z=new Y["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,new a["a"]({router:U,vuetify:z,render:function(t){return t(S)}}).$mount("#app")},d63f:function(t,e,n){}});
//# sourceMappingURL=app.d85f1b9f.js.map