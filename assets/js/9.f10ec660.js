(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{116:function(t,e,n){"use strict";var a=n(39);n.n(a).a},117:function(t,e,n){},149:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:function(){return{rawPopupConfig:{"/de/":{message:"Neuer Content ist verfügbar.",buttonText:"Aktualisieren"},"/en/":{message:"New content is available.",buttonText:"Refresh"}},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/de/":{message:"Neuer Content ist verfügbar.",buttonText:"Aktualisieren"},"/en/":{message:"New content is available.",buttonText:"Refresh"}}&&(this.rawPopupConfig=o)},computed:{popupConfig:function(){return Object(s.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(116),n(2)),r=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=r.exports},265:function(t,e,n){"use strict";var a=n(117);n.n(a).a},271:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(149).default}},s=(n(265),n(2)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var a=e.reload,s=e.message,o=e.buttonText;return n("div",{staticClass:"grad-pwa-update"},[n("span",[t._v(t._s(s))]),t._v(" "),n("button",{on:{click:a}},[t._v(t._s(o))])])}}])})}),[],!1,null,"8a2c8b72",null);e.default=o.exports},39:function(t,e,n){}}]);