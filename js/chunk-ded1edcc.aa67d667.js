(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ded1edcc"],{"2b3c":function(t,e,a){"use strict";function s(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}a.d(e,"a",(function(){return s}))},"2e8d":function(t,e,a){"use strict";var s=a("3f21"),n=a.n(s);n.a},"3f21":function(t,e,a){},"8b37":function(t,e,a){},"95cf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"letters"}},[a("v-container",[a("v-row",{staticClass:"grey lighten-4"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline text-center font-weight-bold"},[t._v(" Rangkuman Huruf ")])])],1),a("v-divider",{staticClass:"my-8"}),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline"},[t._v(" Vocal ")]),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("td",[t._v("Huruf")]),a("td",[t._v("Jumlah")])])]),a("tbody",t._l(t.vocals,(function(e,s){return a("tr",{key:"vocal-row-"+(s+1)},[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.letter))]),a("td",[t._v(t._s(t.thousand(e.total)))])])})),0)]},proxy:!0}])})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline"},[t._v(" Konsonan ")]),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("td",[t._v("Huruf")]),a("td",[t._v("Onset")]),a("td",[t._v("Coda")]),a("td",[t._v("Total")])])]),a("tbody",t._l(t.consonants,(function(e){return a("tr",{key:"consonant-row-"+e._id},[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.letter))]),a("td",[t._v(t._s(t.thousand(e.syll_detail.onset)))]),a("td",[t._v(t._s(t.thousand(e.syll_detail.coda)))]),a("td",[t._v(t._s(t.thousand(e.total)))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)},n=[],o=a("9ab4"),r=a("2b0e"),i=a("f06e");function d(t){return o["a"](this,void 0,Promise,(function(){var e;return o["b"](this,(function(a){switch(a.label){case 0:return[4,i["a"].get("letters/"+t)];case 1:return e=a.sent(),[2,e.data]}}))}))}var l=a("2b3c"),c=r["a"].extend({data:function(){return{vocals:[],consonants:[],thousand:l["a"]}},methods:{loadData:function(){return o["a"](this,void 0,void 0,(function(){var t,e;return o["b"](this,(function(a){switch(a.label){case 0:return t=this,[4,d("vocal")];case 1:return t.vocals=a.sent(),e=this,[4,d("konsonan")];case 2:return e.consonants=a.sent(),[2]}}))}))}},mounted:function(){this.loadData()}}),u=c,h=(a("2e8d"),a("2877")),v=a("6544"),f=a.n(v),b=a("62ad"),_=a("a523"),p=a("ce7e"),m=a("0fd9"),w=(a("8b37"),a("80d2")),g=a("7560"),y=a("58df"),C=Object(y["a"])(g["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(w["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),x=Object(h["a"])(u,s,n,!1,null,null,null);e["default"]=x.exports;f()(x,{VCol:b["a"],VContainer:_["a"],VDivider:p["a"],VRow:m["a"],VSimpleTable:C})}}]);
//# sourceMappingURL=chunk-ded1edcc.aa67d667.js.map