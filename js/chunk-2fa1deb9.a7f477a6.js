(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fa1deb9"],{"6a77":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"matriks"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"display-2 text-center"},[t._v(" Rangkuman Bunyi ")])])],1),a("v-divider",{staticClass:"my-8"}),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline"},[t._v(" Vocal ")]),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("td",[t._v("Huruf")]),a("td",[t._v("Jumlah")])])]),a("tbody",t._l(t.vocals,(function(e,s){return a("tr",{key:"vocal-row-"+(s+1)},[a("td",{staticClass:"font-weight-bold",staticStyle:{"font-size":"20px"}},[t._v(t._s(e.char))]),a("td",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(e.count))])])})),0)]},proxy:!0}])})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"headline"},[t._v(" Konsonan ")]),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("td",[t._v("Huruf")]),a("td",[t._v("Jumlah")])])]),a("tbody",t._l(t.consonants,(function(e,s){return a("tr",{key:"consonant-row-"+(s+1)},[a("td",{staticClass:"font-weight-bold",staticStyle:{"font-size":"20px"}},[t._v(t._s(e.char))]),a("td",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(e.count))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)},n=[],i=a("9ab4"),o=a("2b0e"),r=a("f06e");function l(t){return i["a"](this,void 0,void 0,(function(){var e;return i["b"](this,(function(a){switch(a.label){case 0:return[4,r["a"].get("chars?tag="+t)];case 1:return e=a.sent(),[2,e.data]}}))}))}var d=o["a"].extend({data:function(){return{vocals:[],consonants:[]}},methods:{loadData:function(){return i["a"](this,void 0,void 0,(function(){var t,e;return i["b"](this,(function(a){switch(a.label){case 0:return t=this,[4,l("vocal")];case 1:return t.vocals=a.sent(),e=this,[4,l("konsonan")];case 2:return e.consonants=a.sent(),[2]}}))}))}},mounted:function(){this.loadData()}}),c=d,u=a("2877"),h=a("6544"),v=a.n(h),f=a("62ad"),b=a("a523"),p=a("ce7e"),_=a("0fd9"),m=(a("8b37"),a("80d2")),w=a("7560"),y=a("58df"),g=Object(y["a"])(w["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(m["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),x=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=x.exports;v()(x,{VCol:f["a"],VContainer:b["a"],VDivider:p["a"],VRow:_["a"],VSimpleTable:g})},"8b37":function(t,e,a){}}]);
//# sourceMappingURL=chunk-2fa1deb9.a7f477a6.js.map