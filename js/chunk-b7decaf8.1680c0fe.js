(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7decaf8"],{"1d1b":function(t,n,a){"use strict";var e=a("69e2"),s=a.n(e);s.a},"2b3c":function(t,n,a){"use strict";function e(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}a.d(n,"a",(function(){return e}))},"69e2":function(t,n,a){},cb03:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"fiturs-wrapper"}},[a("v-container",[a("v-row",{staticClass:"grey lighten-4"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline text-center font-weight-bold"},[t._v(" Rangkuman Fitur ")])])],1),a("f-row",{attrs:{label:"Vocal",fiturs:t.vocals}}),a("f-row",{attrs:{label:"Konsonan",fiturs:t.consonants}})],1)],1)},s=[],r=a("9ab4"),o=a("2b0e"),i=a("f06e");function c(t){return r["a"](this,void 0,Promise,(function(){var n;return r["b"](this,(function(a){switch(a.label){case 0:return[4,i["a"].get("fiturs/"+t)];case 1:return n=a.sent(),[2,n.data]}}))}))}var l=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("v-row",{staticClass:"mt-4"},[a("v-col",{attrs:{sm:"12"}},[a("div",{staticClass:"headline"},[t._v(" "+t._s(t.label)+" ")])])],1),t._l(t.fiturs,(function(n){return[a("v-row",{key:"fit_"+n._id,staticClass:"fitur"},[a("v-col",{attrs:{cols:"5","align-self":"center"}},[a("div",{staticClass:"body-1 text-uppercase"},[t._v(" "+t._s(n.fitur)+" ")])]),a("v-col",{attrs:{cols:"7"}},[t._l(n.letters,(function(e){return[a("v-row",{key:"fit_"+n._id+"_"+e.letter,attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"2"}},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.letter))])]),a("v-col",[a("span",[t._v(t._s(t.thousand(e.total)))])])],1)],1)],1)]}))],2)],1),a("v-divider",{key:"div_fit_"+n._id})]}))],2)},u=[],d=a("2b3c"),v=o["a"].extend({name:"FRow",props:{label:String,fiturs:[]},data:function(){return{thousand:d["a"]}}}),f=v,b=a("2877"),_=a("6544"),w=a.n(_),h=a("62ad"),p=a("ce7e"),g=a("0fd9"),m=Object(b["a"])(f,l,u,!1,null,null,null),C=m.exports;w()(m,{VCol:h["a"],VDivider:p["a"],VRow:g["a"]});var k=o["a"].extend({name:"Fitur",components:{FRow:C},data:function(){return{vocals:[],consonants:[]}},methods:{loadData:function(){return r["a"](this,void 0,void 0,(function(){var t,n;return r["b"](this,(function(a){switch(a.label){case 0:return t=this,[4,c("vocal")];case 1:return t.vocals=a.sent(),n=this,[4,c("konsonan")];case 2:return n.consonants=a.sent(),[2]}}))}))}},mounted:function(){this.loadData()}}),V=k,x=(a("1d1b"),a("a523")),y=Object(b["a"])(V,e,s,!1,null,null,null);n["default"]=y.exports;w()(y,{VCol:h["a"],VContainer:x["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=chunk-b7decaf8.1680c0fe.js.map