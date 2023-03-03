import{j as S,A as T,m as Z,d as W,n as K,o as w,c as C,i as m,F as J,p as q,u,k as ee,t as Y,b as G,q as te,s as ne,f as k,v as D,x as B,y as E,z as oe,e as P,B as z,h as M,C as re,D as se,E as ce,w as ae}from"./index-f13268ba.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};const le=ie;function V(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},c=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),c.forEach(function(t){de(e,t,o[t])})}return e}function de(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var H=function(n,o){var c=V({},n,o.attrs);return S(T,V({},c,{icon:le}),null)};H.displayName="ArrowDownOutlined";H.inheritAttrs=!1;const ue=H;var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};const me=pe;function U(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},c=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),c.forEach(function(t){fe(e,t,o[t])})}return e}function fe(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var j=function(n,o){var c=U({},n,o.attrs);return S(T,U({},c,{icon:me}),null)};j.displayName="ArrowUpOutlined";j.inheritAttrs=!1;const ge=j;var he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const ve=he;function F(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},c=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),c.forEach(function(t){ye(e,t,o[t])})}return e}function ye(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var L=function(n,o){var c=F({},n,o.attrs);return S(T,F({},c,{icon:ve}),null)};L.displayName="HolderOutlined";L.inheritAttrs=!1;const _e=L,R=Z({id:"dragState",state:()=>({dragStart:!1}),actions:{update(e){this.dragStart=e}}}),we={class:"select-menu"},Se={class:"component-preview"},be={class:"list-view"},Oe=["onDragstart"],Ce={class:"preview-item"},Ie=W({__name:"componentsSelect",setup(e){const n=K(),o=R();console.log("components:",n.components);const c=(t,b,l=void 0)=>{console.log("setDragStart:",{ev:t,v:b,data:l}),o.update(b),l&&t.dataTransfer.setData("text/plain",JSON.stringify(l))};return(t,b)=>(w(),C("div",we,[m("div",Se,[m("div",be,[(w(!0),C(J,null,q(u(n).components,(l,i)=>(w(),C("div",{class:"co-item",key:i,onDragstart:s=>c(s,!0,l),onDragend:b[0]||(b[0]=s=>c(s,!1)),draggable:"true"},[m("div",Ce,[S(u(_e)),ee(" "+Y(l.description),1)])],40,Oe))),128))])])]))}});const Ne=Q(Ie,[["__scopeId","data-v-bcbdee68"]]);function $(e){let n=e.offsetTop,o=e.offsetParent;for(;o!==null;)n+=o.offsetTop,o=o.offsetParent;return n}const De=()=>{const e=G({toolStyle:{},activeStyle:{},hoverStyle:{},isBottom:!1,isTop:!1,current:0,containerHeight:667,dragableComponents:[]}),n=(l,i,s)=>{e[s]={height:l,top:`${i}px`},te(()=>{if(s==="activeStyle"){const d=document.getElementById("se-view-tools"),r=parseInt(getComputedStyle(d).height,10);e.toolStyle={top:`${i+10+r>e.containerHeight?i-r+parseInt(l,10):i+10}px`}}})};return{init:l=>{console.log("init============>");const i=document.getElementById("frame");console.log("eventInit:",i.contentWindow.document);const s=i.contentWindow.document.getElementById("slider-view");if(!s)return;const d=i.contentWindow.document.getElementsByTagName("html")[0],r=Math.ceil(parseFloat(getComputedStyle(d).height)+s.offsetTop);if(e.containerHeight=r>667?r:667,l===-1)return;const a=s.childNodes[l];if(console.log("node:",l,s.childNodes),a.nodeName==="#text")return;let g=(a==null?void 0:a.getAttribute("id"))||"";const _=$(a),{height:y}=getComputedStyle(a);n(y,_,"activeStyle");const v=Array.from(s.childNodes).map(f=>{if(f.nodeName!=="#text")return f.getAttribute("id")});v.forEach((f,I)=>{f===g&&(e.isTop=I===0,e.isBottom=I===v.length-1,e.current=I)})},eventInit:l=>{const i=document.getElementById("frame");console.log("eventInit:",i.contentWindow.document);const s=i.contentWindow.document.getElementById("slider-view");console.log("componentsPND:",s),s.addEventListener("click",d=>{let r=d.target;for(;r.tagName!=="HTML";){let a=(r==null?void 0:r.getAttribute("id"))||"";if(a.indexOf("coco-render-id-_component_")>=0){const g=$(r),{height:_}=getComputedStyle(r,null);n(_,g,"activeStyle"),console.log("childNodes:",Array.from(s.childNodes));const y=Array.from(s.childNodes).map(v=>v.id&&v.getAttribute("id"));y.forEach((v,f)=>{v===a&&(e.isTop=f===0,e.isBottom=f===y.length-1,e.current=f,l(f))})}r=r.parentNode}}),s.addEventListener("mouseover",d=>{let r=d.target;for(;r.tagName!=="HTML";){let a=(r==null?void 0:r.getAttribute("id"))||"";if(a.indexOf("coco-render-id-_component_")>=0)try{const g=$(r),{height:_}=getComputedStyle(r,null);n(_,g,"hoverStyle");const y=Array.from(s.childNodes).map(v=>v.getAttribute("id"));y.forEach((v,f)=>{v===a&&(e.isTop=f===0,e.isBottom=f===y.length-1,e.current=f)})}catch{}r=r.parentNode}})},getIndex:l=>{const i=document.getElementById("frame");console.log("eventInit:",i.contentWindow.document);const s=i.contentWindow.document.getElementById("slider-view");let d=40,r=0;return Array.from(s.childNodes).some((a,g)=>{try{if(d=d+parseInt(getComputedStyle(a).height,10),d>l)return r=g,!0}catch{}return r=g,!1}),r},editorState:e,setFixedStyle:l=>{const i=document.getElementById("frame");console.log("eventInit:",i.contentWindow.document);const s=i.contentWindow.document.getElementById("slider-view");e.dragableComponents=[],Array.from((s==null?void 0:s.childNodes)||[]).forEach(d=>{if(d&&d.nodeName!=="#text"&&(d==null?void 0:d.getAttribute("data-layout"))==="fixed")try{const r=d.childNodes[0],{left:a,top:g,width:_,height:y}=getComputedStyle(r);e.dragableComponents.push({x:parseInt(a),y:parseInt(g),width:parseInt(_,10),height:parseInt(y,10),index:l})}catch{}})}}},Ae={class:"edit-container"},xe={class:"component-container"},Be={class:"editor-view"},Ee={class:"main-container"},Pe={class:"preview-container"},$e=["src"],Te={class:"sev-tools-copy"},He={class:"sev-tools-copy"},je={class:"formbox"},Le={wrap:""},ke=W({__name:"edit",setup(e){const n="production";console.log("host:",n);const o=R(),{eventInit:c,editorState:t,getIndex:b,setFixedStyle:l,init:i}=De(),s=G({spinning:!0}),d=p=>{console.log("register:",p);const h=[...r.userSelectComponents];console.log("watch:",h[t.current-1]),a({type:"changeProps",data:{item:JSON.stringify(h[t.current-1]),index:t.current}})},r=ne(),a=p=>{window.frames[0]&&window.frames[0].postMessage(p,"*")},g=p=>{a({type:"sortComponent",data:{op:p,index:t.current}});const h=t.current+p;t.current=h},_=()=>{a({type:"copyComponent",data:t.current})},y=(p=void 0)=>{a({type:"deleteComponent",data:p!==void 0?p:t.current}),t.current===1&&(t.hoverStyle={},t.activeStyle={},t.toolStyle.top=0)},v=p=>{p.preventDefault()},f=p=>{p.preventDefault();const h=p.dataTransfer.getData("text/plain"),{layerY:A}=p,N=b(A);console.log("addComponent:",h,N),a({type:"addComponent",data:JSON.parse(JSON.stringify({data:h,index:N}))})},I=()=>{console.log("loading..."),s.spinning=!1,c(p=>{t.current=p,a({type:"changeIndex",data:t.current})}),ae([()=>r.userSelectComponents,()=>t.current],()=>{i(t.current)})};return(p,h)=>{const A=M("a-spin"),N=M("FormKit");return w(),C("div",Ae,[m("div",xe,[S(Ne)]),m("div",Be,[m("div",Ee,[m("div",Pe,[S(A,{spinning:s.spinning},{default:k(()=>[m("iframe",{referrerpolicy:"unsafe-url",id:"frame",onLoad:I,frameborder:"0",class:"pre-view",src:u(n)==="development"?"http://localhost:8080/":"https://winter1993.github.io/kaka-template/",style:D({height:u(t).containerHeight+"px"})},null,44,$e),B(m("div",{onDrop:f,onDragover:v,class:"drag-hover"},null,544),[[E,u(o).dragStart]])]),_:1},8,["spinning"])]),m("div",{style:D(u(t).hoverStyle),class:"se-view-hover-tip"},null,4),m("div",{style:D(u(t).activeStyle),class:"se-view-active-tip"},null,4),B(m("div",{style:D({top:u(t).toolStyle.top}),class:"se-view-tools",id:"se-view-tools"},[m("div",{class:oe(["sev-tools-move",(u(t).isTop||u(t).isBottom)&&"sev-tools-move-single"])},[u(t).isTop?z("",!0):(w(),P(u(ge),{key:0,onClick:h[0]||(h[0]=O=>g(-1)),class:"fd-iconfont"})),u(t).isBottom?z("",!0):(w(),P(u(ue),{key:1,onClick:h[1]||(h[1]=O=>g(1)),class:"fd-iconfont"}))],2),m("div",Te,[S(u(re),{onClick:_,class:"fd-iconfont"})]),m("div",He,[S(u(se),{onClick:h[2]||(h[2]=()=>y()),class:"fd-iconfont"})])],4),[[E,u(t).toolStyle.top]])])]),m("div",je,[(w(!0),C(J,null,q(u(r).userSelectComponents,(O,x)=>B((w(),C("div",{key:O.name+x},[(w(),P(N,{type:"form",key:O.name+x,id:"myform",modelValue:O.props,"onUpdate:modelValue":X=>O.props=X,onSubmit:d},{default:k(()=>[S(u(ce),{schema:O.formKit},null,8,["schema"]),m("pre",Le,Y(O.props),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),[[E,u(t).current-1===x]])),128))])])}}});const Ve=Q(ke,[["__scopeId","data-v-5f5d135c"]]);export{Ve as default};
