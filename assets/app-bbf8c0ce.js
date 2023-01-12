import{d as n,r as g,a as S,b as w,c as P,i as h,e as H,f as $,g as C,o as T,h as _,j as E,k as A,l as N,m as M,n as j,R as x,p as F,q as U,S as B,u as q,w as z,s as G,t as W,v as J}from"./framework-3f51f5be.js";const K="modulepreload",Y=function(e){return"/"+e},R={},a=function(t,r,o){if(!r||r.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=Y(s),s in R)return;R[s]=!0;const l=s.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!o)for(let m=i.length-1;m>=0;m--){const f=i[m];if(f.href===s&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":K,l||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),l)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Z={"v-8daa1a0e":()=>a(()=>import("./index.html-45d11b46.js"),[]).then(({data:e})=>e),"v-f78e7d50":()=>a(()=>import("./index.html-dc7538c3.js"),[]).then(({data:e})=>e),"v-0fb83be6":()=>a(()=>import("./ace3-medical-loadouts.html-1f4c82ff.js"),[]).then(({data:e})=>e),"v-25543993":()=>a(()=>import("./cba-settings.html-b3986200.js"),[]).then(({data:e})=>e),"v-44bc135b":()=>a(()=>import("./erste-hilfe-missionsbau.html-6e0349dd.js"),[]).then(({data:e})=>e),"v-d13e0730":()=>a(()=>import("./gruppe-adler-mod.html-6601fd7f.js"),[]).then(({data:e})=>e),"v-efd68e82":()=>a(()=>import("./missionstemplates.html-45ab224b.js"),[]).then(({data:e})=>e),"v-a8a3ac2c":()=>a(()=>import("./scriptmodule.html-1b1730fb.js"),[]).then(({data:e})=>e),"v-1f55aaf8":()=>a(()=>import("./slotting-tool.html-48250d10.js"),[]).then(({data:e})=>e),"v-ee7351fa":()=>a(()=>import("./special-effects.html-96a831a1.js"),[]).then(({data:e})=>e),"v-3d5c08d0":()=>a(()=>import("./symlinks-mit-a3s.html-6ae97257.js"),[]).then(({data:e})=>e),"v-504b8cae":()=>a(()=>import("./index.html-31152cc5.js"),[]).then(({data:e})=>e),"v-683f011e":()=>a(()=>import("./gruppe-adler-modset.html-7e5bc404.js"),[]).then(({data:e})=>e),"v-de2dadb2":()=>a(()=>import("./styleguide-design.html-45d89e96.js"),[]).then(({data:e})=>e),"v-a3894e5c":()=>a(()=>import("./wiki-how-to.html-9545cc9e.js"),[]).then(({data:e})=>e),"v-0c8d2a9a":()=>a(()=>import("./index.html-549a59ba.js"),[]).then(({data:e})=>e),"v-435e4967":()=>a(()=>import("./adlerung.html-349058bc.js"),[]).then(({data:e})=>e),"v-12ce2c9b":()=>a(()=>import("./bek-checkliste.html-837d80e7.js"),[]).then(({data:e})=>e),"v-d6ec5c80":()=>a(()=>import("./gruppen.html-e80a59ed.js"),[]).then(({data:e})=>e),"v-5a282b08":()=>a(()=>import("./ASOP.html-a2b9971b.js"),[]).then(({data:e})=>e),"v-0df885de":()=>a(()=>import("./index.html-59c86544.js"),[]).then(({data:e})=>e),"v-8fb7c052":()=>a(()=>import("./at-effectiveness.html-27e62457.js"),[]).then(({data:e})=>e),"v-0070e098":()=>a(()=>import("./taktische-zeichen.html-74a0053f.js"),[]).then(({data:e})=>e),"v-3706649a":()=>a(()=>import("./404.html-507ddad2.js"),[]).then(({data:e})=>e)},Q=JSON.parse('{"base":"/","lang":"de","title":"Wiki - Gruppe Adler","description":"Hier dokumentieren wir alles, was keiner liest, aber nicht verloren gehen soll. Unter anderem findest du Anleitung zu Missionsbau, Taktik und Infrastruktur.","head":[["link",{"rel":"manifest","href":"/manifest.webmanifest"}],["meta",{"name":"theme-color","content":"#000000"}]],"locales":{}}'),y={"v-8daa1a0e":n(()=>a(()=>import("./index.html-3038a44e.js"),["assets/index.html-3038a44e.js","assets/framework-3f51f5be.js"])),"v-f78e7d50":n(()=>a(()=>import("./index.html-729b0981.js"),["assets/index.html-729b0981.js","assets/framework-3f51f5be.js"])),"v-0fb83be6":n(()=>a(()=>import("./ace3-medical-loadouts.html-466c805b.js"),["assets/ace3-medical-loadouts.html-466c805b.js","assets/framework-3f51f5be.js"])),"v-25543993":n(()=>a(()=>import("./cba-settings.html-04e152a1.js"),["assets/cba-settings.html-04e152a1.js","assets/framework-3f51f5be.js"])),"v-44bc135b":n(()=>a(()=>import("./erste-hilfe-missionsbau.html-e2b561b9.js"),["assets/erste-hilfe-missionsbau.html-e2b561b9.js","assets/framework-3f51f5be.js"])),"v-d13e0730":n(()=>a(()=>import("./gruppe-adler-mod.html-d8a055fa.js"),["assets/gruppe-adler-mod.html-d8a055fa.js","assets/framework-3f51f5be.js"])),"v-efd68e82":n(()=>a(()=>import("./missionstemplates.html-f8744655.js"),["assets/missionstemplates.html-f8744655.js","assets/framework-3f51f5be.js"])),"v-a8a3ac2c":n(()=>a(()=>import("./scriptmodule.html-94cb6fab.js"),["assets/scriptmodule.html-94cb6fab.js","assets/framework-3f51f5be.js"])),"v-1f55aaf8":n(()=>a(()=>import("./slotting-tool.html-2c4e2f5d.js"),["assets/slotting-tool.html-2c4e2f5d.js","assets/framework-3f51f5be.js"])),"v-ee7351fa":n(()=>a(()=>import("./special-effects.html-feb9f0d2.js"),["assets/special-effects.html-feb9f0d2.js","assets/framework-3f51f5be.js"])),"v-3d5c08d0":n(()=>a(()=>import("./symlinks-mit-a3s.html-5f608bd6.js"),["assets/symlinks-mit-a3s.html-5f608bd6.js","assets/framework-3f51f5be.js"])),"v-504b8cae":n(()=>a(()=>import("./index.html-4b841657.js"),["assets/index.html-4b841657.js","assets/framework-3f51f5be.js"])),"v-683f011e":n(()=>a(()=>import("./gruppe-adler-modset.html-93b086a2.js"),["assets/gruppe-adler-modset.html-93b086a2.js","assets/framework-3f51f5be.js"])),"v-de2dadb2":n(()=>a(()=>import("./styleguide-design.html-22134007.js"),["assets/styleguide-design.html-22134007.js","assets/framework-3f51f5be.js"])),"v-a3894e5c":n(()=>a(()=>import("./wiki-how-to.html-38334de0.js"),["assets/wiki-how-to.html-38334de0.js","assets/framework-3f51f5be.js"])),"v-0c8d2a9a":n(()=>a(()=>import("./index.html-5192bd23.js"),["assets/index.html-5192bd23.js","assets/framework-3f51f5be.js"])),"v-435e4967":n(()=>a(()=>import("./adlerung.html-fb93bbe3.js"),["assets/adlerung.html-fb93bbe3.js","assets/framework-3f51f5be.js"])),"v-12ce2c9b":n(()=>a(()=>import("./bek-checkliste.html-a4b3dca1.js"),["assets/bek-checkliste.html-a4b3dca1.js","assets/framework-3f51f5be.js"])),"v-d6ec5c80":n(()=>a(()=>import("./gruppen.html-8de76605.js"),["assets/gruppen.html-8de76605.js","assets/framework-3f51f5be.js"])),"v-5a282b08":n(()=>a(()=>import("./ASOP.html-60c9d7e0.js"),["assets/ASOP.html-60c9d7e0.js","assets/framework-3f51f5be.js"])),"v-0df885de":n(()=>a(()=>import("./index.html-877bbb5b.js"),["assets/index.html-877bbb5b.js","assets/framework-3f51f5be.js"])),"v-8fb7c052":n(()=>a(()=>import("./at-effectiveness.html-8de45290.js"),["assets/at-effectiveness.html-8de45290.js","assets/framework-3f51f5be.js"])),"v-0070e098":n(()=>a(()=>import("./taktische-zeichen.html-72faf215.js"),["assets/taktische-zeichen.html-72faf215.js","assets/framework-3f51f5be.js"])),"v-3706649a":n(()=>a(()=>import("./404.html-c9158944.js"),["assets/404.html-c9158944.js","assets/framework-3f51f5be.js"]))};var X=Symbol(""),ee=g(Z),O=S({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),p=g(O),te=()=>p,ae=Symbol(""),k=Symbol(""),re=()=>{const e=A(k);if(!e)throw new Error("usePageHead() is called without provider.");return e},oe=Symbol(""),V=Symbol(""),se=()=>{const e=A(V);if(!e)throw new Error("usePageLang() is called without provider.");return e},I=Symbol(""),ie=()=>{const e=A(I);if(!e)throw new Error("usePageLayout() is called without provider.");return e},ne=Symbol(""),b=g(Q),le=Symbol(""),ue=Symbol(""),de="Layout",_e="NotFound",v=w({resolveLayouts:e=>e.reduce((t,r)=>({...t,...r.layouts}),{}),resolvePageData:async e=>{const t=ee.value[e];return await(t==null?void 0:t())??O},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,r)=>{const o=h(t.description)?t.description:r.description,i=[...H(t.head)?t.head:[],...r.head,["title",{},e],["meta",{name:"description",content:o}]];return $(i)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(r=>!!r).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let r;if(e.path){const o=e.frontmatter.layout;h(o)?r=o:r=de}else r=_e;return t[r]},resolveRouteLocale:(e,t)=>C(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),ve=P({name:"ClientOnly",setup(e,t){const r=g(!1);return T(()=>{r.value=!0}),()=>{var o,i;return r.value?(i=(o=t.slots).default)==null?void 0:i.call(o):null}}}),ce=P({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=te(),r=_(()=>y[e.pageKey||t.value.key]);return()=>r.value?E(r.value):E("div","404 Not Found")}}),me=e=>N(e)?e:`/${M(e)}`;const L=[],pe=[["v-8daa1a0e","/",{},["/index.html","/README.md"]],["v-f78e7d50","/bastelstube/",{},["/bastelstube/index.html","/bastelstube/README.md"]],["v-0fb83be6","/bastelstube/ace3-medical-loadouts.html",{},["/bastelstube/ace3-medical-loadouts","/bastelstube/ace3-medical-loadouts.md"]],["v-25543993","/bastelstube/cba-settings.html",{},["/bastelstube/cba-settings","/bastelstube/cba-settings.md"]],["v-44bc135b","/bastelstube/erste-hilfe-missionsbau.html",{},["/bastelstube/erste-hilfe-missionsbau","/bastelstube/erste-hilfe-missionsbau.md"]],["v-d13e0730","/bastelstube/gruppe-adler-mod.html",{},["/bastelstube/gruppe-adler-mod","/bastelstube/gruppe-adler-mod.md"]],["v-efd68e82","/bastelstube/missionstemplates.html",{},["/bastelstube/missionstemplates","/bastelstube/missionstemplates.md"]],["v-a8a3ac2c","/bastelstube/scriptmodule.html",{},["/bastelstube/scriptmodule","/bastelstube/scriptmodule.md"]],["v-1f55aaf8","/bastelstube/slotting-tool.html",{},["/bastelstube/slotting-tool","/bastelstube/slotting-tool.md"]],["v-ee7351fa","/bastelstube/special-effects.html",{},["/bastelstube/special-effects","/bastelstube/special-effects.md"]],["v-3d5c08d0","/bastelstube/symlinks-mit-a3s.html",{},["/bastelstube/symlinks-mit-a3s","/bastelstube/symlinks-mit-a3s.md"]],["v-504b8cae","/infrastruktur/",{},["/infrastruktur/index.html","/infrastruktur/README.md"]],["v-683f011e","/infrastruktur/gruppe-adler-modset.html",{},["/infrastruktur/gruppe-adler-modset","/infrastruktur/gruppe-adler-modset.md"]],["v-de2dadb2","/infrastruktur/styleguide-design.html",{},["/infrastruktur/styleguide-design","/infrastruktur/styleguide-design.md"]],["v-a3894e5c","/infrastruktur/wiki-how-to.html",{},["/infrastruktur/wiki-how-to","/infrastruktur/wiki-how-to.md"]],["v-0c8d2a9a","/organisatorisches/",{},["/organisatorisches/index.html","/organisatorisches/README.md"]],["v-435e4967","/organisatorisches/adlerung.html",{},["/organisatorisches/adlerung","/organisatorisches/adlerung.md"]],["v-12ce2c9b","/organisatorisches/bek-checkliste.html",{},["/organisatorisches/bek-checkliste","/organisatorisches/bek-checkliste.md"]],["v-d6ec5c80","/organisatorisches/gruppen.html",{},["/organisatorisches/gruppen","/organisatorisches/gruppen.md"]],["v-5a282b08","/taktik/ASOP.html",{},["/taktik/ASOP","/taktik/ASOP.md"]],["v-0df885de","/taktik/",{},["/taktik/index.html","/taktik/README.md"]],["v-8fb7c052","/taktik/at-effectiveness.html",{},["/taktik/at-effectiveness","/taktik/at-effectiveness.md"]],["v-0070e098","/taktik/taktische-zeichen.html",{},["/taktik/taktische-zeichen","/taktik/taktische-zeichen.md"]],["v-3706649a","/404.html",{},["/404"]]];var D=P({name:"Vuepress",setup(){const e=ie();return()=>E(e.value)}}),he=()=>pe.reduce((e,[t,r,o,i])=>(e.push({name:t,path:r,component:D,meta:o},...i.map(s=>({path:s,redirect:r}))),e),[{name:"404",path:"/:catchAll(.*)",component:D}]),be=G,Ee=()=>{const e=F({history:be(U("/")),routes:he(),scrollBehavior:(t,r,o)=>o||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,r)=>{var o;(t.path!==r.path||r===B)&&([p.value]=await Promise.all([v.resolvePageData(t.name),(o=y[t.name])==null?void 0:o.__asyncLoader()]))}),e},ge=e=>{e.component("ClientOnly",ve),e.component("Content",ce)},fe=(e,t,r)=>{const o=_(()=>v.resolveLayouts(r)),i=_(()=>v.resolveRouteLocale(b.value.locales,t.currentRoute.value.path)),s=_(()=>v.resolveSiteLocaleData(b.value,i.value)),l=_(()=>v.resolvePageFrontmatter(p.value)),u=_(()=>v.resolvePageHeadTitle(p.value,s.value)),c=_(()=>v.resolvePageHead(u.value,l.value,s.value)),d=_(()=>v.resolvePageLang(p.value)),m=_(()=>v.resolvePageLayout(p.value,o.value));return e.provide(X,o),e.provide(ae,l),e.provide(oe,u),e.provide(k,c),e.provide(V,d),e.provide(I,m),e.provide(ne,i),e.provide(le,s),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>l.value},$head:{get:()=>c.value},$headTitle:{get:()=>u.value},$lang:{get:()=>d.value},$page:{get:()=>p.value},$routeLocale:{get:()=>i.value},$site:{get:()=>b.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>me}}),{layouts:o,pageData:p,pageFrontmatter:l,pageHead:c,pageHeadTitle:u,pageLang:d,pageLayout:m,routeLocale:i,siteData:b,siteLocaleData:s}},Le=()=>{const e=q(),t=re(),r=se(),o=g([]),i=()=>{t.value.forEach(l=>{const u=Pe(l);u&&o.value.push(u)})},s=()=>{document.documentElement.lang=r.value,o.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),o.value.splice(0,o.value.length),t.value.forEach(l=>{const u=Ae(l);u!==null&&(document.head.appendChild(u),o.value.push(u))})};J(ue,s),T(()=>{i(),s(),z(()=>e.path,()=>s())})},Pe=([e,t,r=""])=>{const o=Object.entries(t).map(([u,c])=>h(c)?`[${u}=${JSON.stringify(c)}]`:c===!0?`[${u}]`:"").join(""),i=`head > ${e}${o}`;return Array.from(document.querySelectorAll(i)).find(u=>u.innerText===r)||null},Ae=([e,t,r])=>{if(!h(e))return null;const o=document.createElement(e);return W(t)&&Object.entries(t).forEach(([i,s])=>{h(s)?o.setAttribute(i,s):s===!0&&o.setAttribute(i,"")}),h(r)&&o.appendChild(document.createTextNode(r)),o},Re=j,De=async()=>{var r;const e=Re({name:"VuepressApp",setup(){var o;Le();for(const i of L)(o=i.setup)==null||o.call(i);return()=>[E(x),...L.flatMap(({rootComponents:i=[]})=>i.map(s=>E(s)))]}}),t=Ee();ge(e),fe(e,t,L);for(const o of L)await((r=o.enhance)==null?void 0:r.call(o,{app:e,router:t,siteData:b}));return e.use(t),{app:e,router:t}};De().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{De as createVueApp};
