import{g as S,a as B,u as g,r as y,w as H,d as L,b as W,e as k,f as x,h as b,o as V,i as E,t as C,j as X,k as Y,l as j}from"./index-d6323fc4.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";var P;const _=typeof window<"u",R=e=>typeof e=="string",U=()=>{};_&&((P=window==null?void 0:window.navigator)!=null&&P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D(e){return typeof e=="function"?e():g(e)}function G(e){return e}function M(e){return S()?(B(e),!0):!1}function K(e){var t;const n=D(e);return(t=n==null?void 0:n.$el)!=null?t:n}const A=_?window:void 0;_&&window.document;_&&window.navigator;_&&window.location;function v(...e){let t,n,i,a;if(R(e[0])||Array.isArray(e[0])?([n,i,a]=e,t=A):[t,n,i,a]=e,!t)return U;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],c=()=>{s.forEach(l=>l()),s.length=0},r=(l,f,p)=>(l.addEventListener(f,p,a),()=>l.removeEventListener(f,p,a)),u=H(()=>K(t),l=>{c(),l&&s.push(...n.flatMap(f=>i.map(p=>r(l,f,p))))},{immediate:!0,flush:"post"}),d=()=>{u(),c()};return M(d),d}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";O[w]=O[w]||{};O[w];function $(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:a={x:0,y:0},window:s=A,eventFilter:c}=e,r=y(a.x),u=y(a.y),d=y(null),l=o=>{t==="page"?(r.value=o.pageX,u.value=o.pageY):t==="client"?(r.value=o.clientX,u.value=o.clientY):t==="movement"&&(r.value=o.movementX,u.value=o.movementY),d.value="mouse"},f=()=>{r.value=a.x,u.value=a.y},p=o=>{if(o.touches.length>0){const m=o.touches[0];t==="page"?(r.value=m.pageX,u.value=m.pageY):t==="client"&&(r.value=m.clientX,u.value=m.clientY),d.value="touch"}},h=o=>c===void 0?l(o):c(()=>l(o),{}),I=o=>c===void 0?p(o):c(()=>p(o),{});return s&&(v(s,"mousemove",h,{passive:!0}),v(s,"dragover",h,{passive:!0}),n&&t!=="movement"&&(v(s,"touchstart",I,{passive:!0}),v(s,"touchmove",I,{passive:!0}),i&&v(s,"touchend",f,{passive:!0}))),{x:r,y:u,sourceType:d}}var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));var q=Object.defineProperty,N=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&Q(e,n,t[n]);if(N)for(var n of N(t))J.call(t,n)&&Q(e,n,t[n]);return e};const ee={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Z({linear:G},ee);const te={class:"index-wrapper"},ne=L({__name:"index",setup(e){const t=j(),{x:n,y:i}=$(),a=W({creating:!0});return setTimeout(()=>{a.creating=!1},500),(s,c)=>{const r=b("a-button"),u=b("a-spin");return V(),k(u,{spinning:a.creating,tip:"Loading..."},{default:x(()=>[E("div",te,[E("div",null,"x:"+C(g(n))+", y:"+C(g(i)),1),X(r,{type:"primary",onClick:c[0]||(c[0]=()=>g(t).push("/edit"))},{default:x(()=>[Y("新建")]),_:1})])]),_:1},8,["spinning"])}}});const se=F(ne,[["__scopeId","data-v-06a2b2cd"]]);export{se as default};
