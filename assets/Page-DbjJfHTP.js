const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Grainient-CHqyLxrf.js","assets/index-ED6ZIh1Q.js","assets/index-CZxiti_Y.css","assets/Triangle-GlFcswsc.js","assets/Grainient-BdwqdHbZ.css"])))=>i.map(i=>d[i]);
import{r as n,x as Pe,s as se,j as e,y as co,z as mo,B as b,C as L,D as po,G as fo,J as Me,Q as Te,R as Ce,U as ie,V as le,W as ho,X as Le,Y as _e,Z as Fe,$ as xo,a0 as go,_ as uo,a1 as ce,a2 as De}from"./index-ED6ZIh1Q.js";import bo from"./lenis-niKyKZQP.js";import{D as wo,T as Ie,P as yo}from"./Dock-3bz5h2Tc.js";import{S as vo}from"./SndrBadge-7kCsFvgA.js";import{c as jo}from"./createLucideIcon-DF6A7IDh.js";import{C as ko}from"./cup-soda-DjW3NuIQ.js";import{C as $o}from"./coffee-DsFf0Fjs.js";import{U as No}from"./utensils-crossed-g4qpkXOG.js";import"./react-DvwthoLL.js";import"./use-spring-DMcSzdRh.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=jo("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]),zo=n.lazy(()=>uo(()=>import("./Grainient-CHqyLxrf.js"),__vite__mapDeps([0,1,2,3,4]))),Ro={Pizzur:e.jsx(yo,{size:20,strokeWidth:1.8}),Meðlæti:e.jsx(No,{size:20,strokeWidth:1.8}),Álegg:e.jsx(Ie,{size:20,strokeWidth:1.8}),Kaffi:e.jsx($o,{size:20,strokeWidth:1.8}),Drykkir:e.jsx(ko,{size:20,strokeWidth:1.8}),Vín:e.jsx(Eo,{size:20,strokeWidth:1.8})},C="/iceland-redesigns/",Z="#F3EBD8",t="#1C1712",l="#FCF5E7",f="#C8371C",j="rgba(28,23,18,0.6)",So="#443C34",O=co,w="'Tanker-Regular', Georgia, serif",y="'Satoshi', system-ui, sans-serif";function p({children:k,className:S="",delay:$=0,y:A=26}){const N=n.useRef(null);return n.useEffect(()=>{const u=N.current;if(!u)return;const h=()=>{u.style.opacity="1",u.style.transform="none"},x=new IntersectionObserver(J=>J.forEach(Q=>{Q.isIntersecting&&(h(),x.disconnect())}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});x.observe(u);const _=window.setTimeout(h,1600);return()=>{x.disconnect(),window.clearTimeout(_)}},[]),e.jsx("div",{ref:N,className:S,style:{opacity:0,transform:`translateY(${A}px)`,transition:`opacity 1.1s ease ${$}ms, transform 1.1s cubic-bezier(.16,.7,.2,1) ${$}ms`},children:k})}function q({children:k,href:S=L,active:$=!1,ext:A=!0,solid:N=!1}){const u=$||N;return e.jsx("a",{href:S,...A?{target:"_blank",rel:"noreferrer"}:{},className:"eo-pill",style:{background:u?So:"rgba(252,245,231,.9)",color:u?l:t,borderColor:t},children:k})}function Yo(){const k=n.useRef(null),S=n.useRef(null),$=n.useRef(null),A=n.useRef(null),N=n.useRef(null),u=n.useRef(null),[h,x]=n.useState(!1);n.useEffect(()=>{document.title="Eldofninn — Ítölsk eldbökuð pizza í Reykjavík"},[]),n.useEffect(()=>{if(!h)return;const r=a=>{a.key==="Escape"&&x(!1)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[h]);const _=n.useMemo(()=>["fonts","hero","bg","logo","grain"],[]),[J,Q]=n.useState({}),[de,Oe]=n.useState(!1),ee=n.useCallback(r=>Q(a=>a[r]?a:{...a,[r]:!0}),[]),me=_.reduce((r,a)=>r+(J[a]?1:0),0),P=de||me===_.length,Be=de?1:me/_.length;n.useEffect(()=>{let r=!0;const a=g=>{r&&ee(g)},s=(g,i)=>{const m=new Image;m.src=g,m.decode().catch(()=>{}).finally(()=>{i&&a(i)})};(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>a("fonts")),s(b.whole,"hero"),s(b.ingredientsBg,"bg"),s(b.logoBadge,"logo"),Pe.forEach(g=>s(g.img)),s(b.slice);const d=window.setTimeout(()=>{r&&Oe(!0)},4500);return()=>{r=!1,window.clearTimeout(d)}},[ee]);const[Ue,Ye]=n.useState(!0);return n.useEffect(()=>{if(!P)return;const r=window.setTimeout(()=>Ye(!1),780);return()=>window.clearTimeout(r)},[P]),n.useEffect(()=>{var s;if(!P){se("#ffffff");return}se(O);const r=(s=k.current)==null?void 0:s.querySelector(".eo-frame");if(!r)return;const a=new IntersectionObserver(([d])=>se(d.isIntersecting?Z:O),{rootMargin:"0px 0px -92% 0px"});return a.observe(r),()=>a.disconnect()},[P]),n.useEffect(()=>{const r=u.current;if(!r||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;const a=18,s={x:0,y:0},d={x:0,y:0},g=D=>{s.x=(D.clientX/window.innerWidth-.5)*2,s.y=(D.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",g,{passive:!0});let i=0,m=!document.hidden;const E=()=>{d.x+=(s.x-d.x)*.05,d.y+=(s.y-d.y)*.05,r.style.transform=`translate3d(${(-d.x*a).toFixed(1)}px, ${(-d.y*a).toFixed(1)}px, 0)`,i=requestAnimationFrame(E)},M=()=>{m&&i===0&&(i=requestAnimationFrame(E))},F=()=>{i!==0&&(cancelAnimationFrame(i),i=0)},B=()=>{m=!document.hidden,m?M():F()};return document.addEventListener("visibilitychange",B),M(),()=>{F(),window.removeEventListener("mousemove",g),document.removeEventListener("visibilitychange",B)}},[]),n.useEffect(()=>{const r=k.current,a=S.current,s=$.current,d=A.current,g=N.current;if(!r||!a||!s||!d||!g)return;const i=r.style,m=o=>Math.min(1,Math.max(0,o)),E=(o,c,v)=>o+(c-o)*v,M=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,F=o=>1-Math.pow(1-o,3),B=window.matchMedia("(prefers-reduced-motion:reduce)").matches,D=.06,He=.52,pe=.12,We=.3,fe=.3,oe=.54,he=.56,Ke=.94,Ge=360,Ve=.1,Xe=.06;let xe=0,I=0,ge=0,ue=0,be=0,we=0;const U=()=>{xe=window.innerHeight||800,a.offsetTop,Math.max(1,a.offsetHeight-xe);const o=d.getBoundingClientRect(),c=s.getBoundingClientRect(),v=g.getBoundingClientRect();I=d.offsetWidth,ge=(o.left+o.right)/2-c.left,ue=(o.top+o.bottom)/2-c.top,be=v.left+v.width/2,we=v.top};U();const Y=o=>{const c=M(m((o-D)/(He-D)))*Ge,v=m((o-pe)/(We-pe)),oo=F(m((o-fe)/(oe-fe))),ro=m((o-oe)/(1-oe)),V=M(m((o-he)/(Ke-he))),ne=(oo*Ve+ro*Xe)*I;i.setProperty("--spin",c.toFixed(2)),i.setProperty("--cut",v.toFixed(3)),i.setProperty("--spread",ne.toFixed(1)+"px");const X=c*Math.PI/180,ze=ce.cx*I+De.ux*ne,Re=ce.cy*I+De.uy*ne,to=ge+(ze*Math.cos(X)-Re*Math.sin(X)),ao=ue+(ze*Math.sin(X)+Re*Math.cos(X)),no=ce.w*I,Se=56,so=Se/.689,io=we+14-so/2;i.setProperty("--slx",E(to,be,V).toFixed(1)+"px"),i.setProperty("--sly",E(ao,io,V).toFixed(1)+"px"),i.setProperty("--slw",E(no,Se,V).toFixed(1)+"px"),i.setProperty("--slr",E(c,-6,V).toFixed(1)+"deg");const Ae=.85,lo=M(m((o-Ae)/(.97-Ae)));i.setProperty("--armed",lo.toFixed(3))};if(B){a.style.height="100svh",Y(0);return}Y(0),i.setProperty("--seq","0.000");let H="idle";const ye=()=>{U()},W=new bo({duration:1.15,easing:o=>Math.min(1,1.001-Math.pow(2,-10*o)),smoothWheel:!0});let re=0;const ve=o=>{W.raf(o),re=requestAnimationFrame(ve)};re=requestAnimationFrame(ve);const je=3400;let K=0,T=0,G=0,z=1,te=0;const qe=300,Ze=2.1,ke=6,Je=o=>{const c=o-te;if(te=o,c<qe||z>=ke)return;const v=(o-T)*z;z=Math.min(ke,z*Ze),T=o-v/z},$e=()=>{H!=="released"&&(H="released",window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",ae),window.clearTimeout(G),a.style.height="100svh",Y(1),i.setProperty("--seq","1.000"),W.start())},Ne=o=>{T||(T=o);const c=F(m((o-T)*z/je));if(i.setProperty("--seq",c.toFixed(3)),Y(c),c<1){K=requestAnimationFrame(Ne);return}$e()},R=o=>{if(o.type!=="touchmove"&&o.cancelable&&o.preventDefault(),H!=="idle"){Je(performance.now());return}U(),H="playing",T=0,z=1,te=performance.now(),K=requestAnimationFrame(Ne),window.clearTimeout(G),G=window.setTimeout($e,je*2)},Qe=new Set([" ","Spacebar","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"]),eo=o=>{if(!(o instanceof HTMLElement))return!1;const c=o.tagName;return c==="INPUT"||c==="TEXTAREA"||c==="SELECT"||o.isContentEditable},ae=o=>{o.defaultPrevented||o.metaKey||o.ctrlKey||o.altKey||!Qe.has(o.key)||eo(o.target)||R(o)};W.stop(),window.addEventListener("wheel",R,{passive:!1}),window.addEventListener("touchmove",R,{passive:!0}),window.addEventListener("keydown",ae),window.addEventListener("resize",ye);let Ee=!1;return document.fonts.ready.then(()=>{Ee||U()}),()=>{Ee=!0,window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",ae),window.removeEventListener("resize",ye),window.clearTimeout(G),K&&cancelAnimationFrame(K),cancelAnimationFrame(re),W.destroy()}},[]),e.jsxs("div",{ref:k,className:"eo-root","data-revealed":P?"":void 0,style:{background:Z,color:t,fontFamily:y},children:[e.jsx("style",{children:Ao}),Ue&&e.jsx(mo,{visible:!P,progress:Be}),e.jsx("div",{className:"eo-bgwrap","aria-hidden":!0,children:e.jsx("img",{ref:u,src:b.ingredientsBg,alt:"",className:"eo-bgimg",draggable:!1})}),e.jsx("div",{ref:S,className:"eo-track",children:e.jsxs("div",{ref:$,className:"eo-stage-pin",children:[e.jsx(n.Suspense,{fallback:null,children:e.jsx(zo,{className:"eo-grain-hero",color1:"#F6B663",color2:O,color3:"#C17D23",contrast:.9,saturation:.85,grainAmount:.05,grainScale:2.2,warpAmplitude:20,warpFrequency:3,timeSpeed:.08,zoom:1.1,maxDpr:1,fps:30,onReady:()=>ee("grain")})}),e.jsxs("header",{className:"eo-nav",children:[e.jsxs("div",{className:"eo-nav-grp",children:[e.jsx(q,{href:"#top",ext:!1,active:!0,children:"Heim"}),e.jsx(q,{href:"#sagan",ext:!1,children:"Um okkur"})]}),e.jsx("a",{href:"#top",className:"eo-badge",children:e.jsx("img",{src:b.logoBadge,alt:"Eldofninn"})}),e.jsxs("div",{className:"eo-nav-grp",children:[e.jsx(q,{href:"#matsedill",ext:!1,children:"Matseðill"}),e.jsx(q,{href:L,solid:!0,children:"Panta"})]}),e.jsx("button",{type:"button",className:"eo-burger","data-open":h,"aria-expanded":h,"aria-controls":"eo-mmenu","aria-label":h?"Loka valmynd":"Opna valmynd",onClick:()=>x(r=>!r),children:e.jsxs("span",{className:"eo-burger-lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]}),e.jsx("div",{className:"eo-mbackdrop","data-open":h,"aria-hidden":!0,onClick:()=>x(!1)}),e.jsxs("nav",{id:"eo-mmenu",className:"eo-mmenu","data-open":h,"aria-label":"Aðalvalmynd","aria-hidden":!h,children:[e.jsx("a",{href:"#top",onClick:()=>x(!1),children:"Heim"}),e.jsx("a",{href:"#sagan",onClick:()=>x(!1),children:"Um okkur"}),e.jsx("a",{href:"#matsedill",onClick:()=>x(!1),children:"Matseðill"}),e.jsx("a",{href:L,target:"_blank",rel:"noreferrer",className:"eo-mmenu-cta",onClick:()=>x(!1),children:"Panta núna"})]}),e.jsxs("div",{className:"eo-hero-mid",children:[e.jsx("div",{className:"eo-hero-word","aria-hidden":!0,children:"ELDOFNINN"}),e.jsxs("div",{className:"eo-hero-copy",children:[e.jsxs("h1",{className:"eo-h1",children:["Fáðu þér ",e.jsx("span",{className:"eo-sneid",children:"sneið"})]}),e.jsx("p",{className:"eo-lede",children:"Ítölsk eldbökuð pizza í Grímsbæ."}),e.jsxs("div",{className:"eo-claim",children:[e.jsx("span",{className:"eo-claim-star",children:"★"}),"Best geymda leyndarmál Reykjavíkur"]})]}),e.jsxs("div",{ref:A,className:"eo-pizza","aria-hidden":!0,children:[e.jsx("div",{className:"eo-glow"}),e.jsx("img",{src:b.whole,alt:"",className:"eo-layer eo-whole",draggable:!1}),Pe.filter(r=>!r.traveller).map(r=>e.jsx("img",{src:r.img,alt:"",className:"eo-layer eo-sl",draggable:!1,style:{"--ux":r.ux,"--uy":r.uy}},r.img))]})]}),e.jsxs("div",{className:"eo-scrollcue","aria-hidden":!0,children:[e.jsx("span",{children:"Skrunaðu"}),e.jsx("i",{})]})]})}),e.jsxs("div",{className:"eo-frame",children:[e.jsxs("section",{id:"matsedill",className:"eo-sec",children:[e.jsxs("div",{className:"eo-sec-head",children:[e.jsx(p,{children:e.jsx("h2",{className:"eo-h2",children:"Vinsælustu pizzurnar"})}),e.jsx(p,{delay:80,children:e.jsx("a",{href:L,target:"_blank",rel:"noreferrer",className:"eo-btn",children:"Allur matseðillinn"})})]}),e.jsx("div",{className:"eo-cards",children:po.map((r,a)=>e.jsx(p,{delay:a*60,children:e.jsxs("article",{className:"eo-card",children:[e.jsxs("div",{className:"eo-card-img",children:[e.jsx("img",{src:r.img,alt:r.name,loading:"lazy",width:520,height:390}),r.best&&e.jsx("span",{className:"eo-tag",children:"Best seller"})]}),e.jsxs("div",{className:"eo-card-body",children:[e.jsxs("div",{className:"eo-card-top",children:[e.jsx("h3",{children:r.name}),e.jsxs("span",{className:"eo-price",children:[r.price,e.jsx("em",{children:" kr"})]})]}),e.jsx("p",{children:r.desc})]})]})},r.name))}),e.jsx("div",{className:"eo-cat eo-dock-wrap",children:e.jsx(wo,{items:fo.map(r=>({icon:Ro[r.label]??e.jsx(Ie,{size:20,strokeWidth:1.8}),label:r.label,onClick:()=>window.open(L,"_blank","noreferrer")})),magnification:62,distance:130,panelHeight:84,dockHeight:84,baseItemSize:44})})]}),e.jsx("section",{id:"sagan",className:"eo-sec eo-band",children:e.jsxs("div",{className:"eo-story",children:[e.jsx(p,{children:e.jsx("h2",{className:"eo-h2",children:Me.heading})}),e.jsx(p,{delay:70,children:e.jsx("p",{className:"eo-body",children:Me.body})}),e.jsx(p,{delay:130,children:e.jsxs("div",{className:"eo-award",children:[e.jsxs("span",{className:"eo-award-t",children:["★ ",Te.title]}),e.jsx("span",{className:"eo-award-s",children:Te.sub})]})})]})}),e.jsxs("section",{id:"kaffi",className:"eo-sec eo-truck",children:[e.jsxs("div",{className:"eo-truck-head",children:[e.jsx(p,{children:e.jsx("h2",{className:"eo-h2",style:{color:l},children:"Ítalskt kaffi"})}),e.jsx(p,{delay:70,children:e.jsx("p",{className:"eo-truck-lede",children:Ce.intro})}),e.jsx(p,{delay:120,children:e.jsx("a",{href:`mailto:${ie}?subject=Fyrirspurn um kaffi`,className:"eo-btn eo-btn-cream",children:"Senda fyrirspurn"})})]}),e.jsx("div",{className:"eo-pkgs",children:Ce.packages.map((r,a)=>e.jsx(p,{delay:a*70,children:e.jsxs("div",{className:"eo-pkg",children:[e.jsx("h3",{children:r.name}),e.jsx("p",{children:r.line}),r.rates.map(s=>e.jsxs("div",{className:"eo-rate",children:[e.jsxs("span",{children:[s.label," ",e.jsx("em",{children:s.sub})]}),e.jsxs("span",{className:"eo-rate-p",children:[s.price," kr"]})]},s.label))]})},r.name))})]}),e.jsx("section",{id:"stadur",className:"eo-sec",children:e.jsxs("div",{className:"eo-visit",children:[e.jsxs("div",{children:[e.jsx(p,{children:e.jsx("h2",{className:"eo-h2",children:le.street})}),e.jsx(p,{delay:60,children:e.jsxs("p",{className:"eo-body",style:{marginTop:".3rem"},children:[le.town,". ",ho.body]})}),e.jsx(p,{delay:120,children:e.jsxs("div",{className:"eo-visit-cta",children:[e.jsx("a",{href:Le,target:"_blank",rel:"noreferrer",className:"eo-btn",children:"Sjá á korti"}),e.jsx("a",{href:Fe,className:"eo-chip",children:_e})]})})]}),e.jsx(p,{delay:60,children:e.jsx("div",{className:"eo-hours",children:xo.map(r=>e.jsxs("div",{className:"eo-hour",children:[e.jsx("span",{children:r.day}),e.jsx("span",{children:r.time})]},r.day))})})]})}),e.jsxs("footer",{className:"eo-footer",children:[e.jsxs("div",{className:"eo-foot-top",children:[e.jsx("a",{href:"#top",className:"eo-badge eo-badge-sm",children:e.jsx("img",{src:b.logoBadge,alt:"Eldofninn"})}),e.jsxs("div",{className:"eo-foot-links",children:[e.jsx("a",{href:Le,target:"_blank",rel:"noreferrer",children:le.street}),e.jsx("a",{href:Fe,children:_e}),e.jsx("a",{href:`mailto:${ie}`,children:ie}),e.jsx("a",{href:go.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),e.jsxs("div",{className:"eo-foot-bottom",children:[e.jsx("span",{children:"Frumgerð í hönnun, sýnishorn, ekki opinber vefur Eldofninn."}),e.jsx("span",{children:"Pantanir keyra á eldofninn.is"})]}),e.jsx("div",{className:"eo-foot-bottom",children:e.jsx(vo,{dark:!0})})]})]}),e.jsx("img",{src:b.slice,alt:"",className:"eo-slice",draggable:!1,"aria-hidden":!0}),e.jsxs("a",{ref:N,href:L,target:"_blank",rel:"noreferrer",className:"eo-sticky-panta","aria-label":"Panta núna",children:[e.jsx("span",{children:"Panta núna"}),e.jsx("img",{src:b.slice,alt:"",className:"eo-corner-slice",draggable:!1,"aria-hidden":!0})]})]})}const Ao=`
@font-face{font-family:'Tanker-Regular';font-weight:400;font-style:normal;font-display:swap;
  src:url('${C}fonts/tanker/fonts/Tanker-Regular.woff2') format('woff2'),
      url('${C}fonts/tanker/fonts/Tanker-Regular.woff') format('woff'),
      url('${C}fonts/tanker/fonts/Tanker-Regular.ttf') format('truetype')}
@font-face{font-family:'Satoshi';font-weight:400;font-style:normal;font-display:swap;
  src:url('${C}fonts/satoshi/Satoshi-Regular.woff2') format('woff2')}
@font-face{font-family:'Satoshi';font-weight:500;font-style:normal;font-display:swap;
  src:url('${C}fonts/satoshi/Satoshi-Medium.woff2') format('woff2')}
@font-face{font-family:'Satoshi';font-weight:700;font-style:normal;font-display:swap;
  src:url('${C}fonts/satoshi/Satoshi-Bold.woff2') format('woff2')}
.eo-root{position:relative;min-height:100vh;overflow-x:clip}

.eo-bgwrap{position:fixed;inset:-24px;z-index:0;overflow:hidden;pointer-events:none}
.eo-bgimg{width:100%;height:100%;object-fit:cover;display:block;will-change:transform}

/* ---- hero opener (NORMAL FLOW) - same architecture as flatbakan's fixed version: relative, not
   sticky, so it can never re-trigger iOS's URL-bar dead-band bug. ---- */
.eo-track{position:relative;z-index:2;height:100svh}
.eo-stage-pin{position:relative;height:100svh;overflow:hidden;background:${O};
  display:flex;flex-direction:column;padding:clamp(1rem,2.4vw,1.8rem) clamp(1rem,3vw,2.4rem) clamp(1.4rem,3vw,2.2rem)}
.eo-grain-hero{position:absolute;inset:0;z-index:0;pointer-events:none}

.eo-nav{position:relative;z-index:6;width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.eo-nav-grp{display:flex;gap:.6rem}
.eo-badge{width:64px;height:64px;border-radius:50%;background:${t};display:flex;align-items:center;justify-content:center;
  flex:0 0 auto;box-shadow:0 8px 20px -8px rgba(28,18,8,.55)}
.eo-badge img{width:80%;height:80%;object-fit:contain;filter:brightness(0) invert(1)}
.eo-nav .eo-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}

.eo-burger{display:none;position:relative;z-index:8;width:44px;height:44px;flex:0 0 auto;padding:0;
  align-items:center;justify-content:center;background:${l};border:1.5px solid ${t};
  border-radius:50%;box-shadow:2px 2px 0 ${t};cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
.eo-burger:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${t}}
.eo-burger:active{transform:translate(0,0);box-shadow:1px 1px 0 ${t}}
.eo-burger-lines{position:relative;width:18px;height:13px}
.eo-burger-lines span{position:absolute;left:0;width:100%;height:2px;border-radius:2px;background:${t};
  transition:top .3s cubic-bezier(.65,0,.35,1),transform .3s cubic-bezier(.65,0,.35,1),opacity .2s ease}
.eo-burger-lines span:nth-child(1){top:0}
.eo-burger-lines span:nth-child(2){top:5.5px}
.eo-burger-lines span:nth-child(3){top:11px}
.eo-burger[data-open="true"] .eo-burger-lines span:nth-child(1){top:5.5px;transform:rotate(45deg)}
.eo-burger[data-open="true"] .eo-burger-lines span:nth-child(2){opacity:0;transform:scaleX(0)}
.eo-burger[data-open="true"] .eo-burger-lines span:nth-child(3){top:5.5px;transform:rotate(-45deg)}

.eo-mbackdrop{display:none;position:fixed;inset:0;z-index:59;background:rgba(28,18,8,.28);
  opacity:0;pointer-events:none;transition:opacity .3s ease}
.eo-mbackdrop[data-open="true"]{opacity:1;pointer-events:auto}

.eo-mmenu{display:none;position:fixed;left:clamp(1rem,3vw,2.4rem);right:clamp(1rem,3vw,2.4rem);
  top:calc(clamp(1rem,2.4vw,1.8rem) + 64px + .6rem);z-index:60;flex-direction:column;gap:.35rem;
  padding:.7rem;background:${l};border:2px solid ${t};border-radius:20px;box-shadow:5px 5px 0 ${t};
  clip-path:inset(0 0 100% 0 round 20px);transform:translateY(-6px);opacity:0;pointer-events:none;
  transition:clip-path .42s cubic-bezier(.22,1,.36,1),transform .42s cubic-bezier(.22,1,.36,1),opacity .28s ease}
.eo-mmenu[data-open="true"]{clip-path:inset(0 0 0% 0 round 20px);transform:none;opacity:1;pointer-events:auto}
.eo-mmenu a{font-family:${y};font-weight:700;font-size:1.05rem;color:${t};text-decoration:none;
  padding:.75rem .9rem;border-radius:12px;opacity:0;transform:translateY(-8px);
  transition:background .15s ease,opacity .38s ease .1s,transform .38s cubic-bezier(.22,1,.36,1) .1s}
.eo-mmenu a:active{background:rgba(28,18,8,.07)}
.eo-mmenu[data-open="true"] a{opacity:1;transform:none}
.eo-mmenu[data-open="true"] a:nth-child(1){transition-delay:.06s}
.eo-mmenu[data-open="true"] a:nth-child(2){transition-delay:.11s}
.eo-mmenu[data-open="true"] a:nth-child(3){transition-delay:.16s}
.eo-mmenu[data-open="true"] a:nth-child(4){transition-delay:.21s}
.eo-mmenu a.eo-mmenu-cta{background:${f};color:${l};text-align:center;margin-top:.15rem;
  font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:.92rem}

.eo-hero-mid{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:0;
  transform:scale(1.05);transform-origin:50% 42%;transition:transform 1.05s cubic-bezier(.16,.72,.12,1);will-change:transform}
.eo-root[data-revealed] .eo-hero-mid{transform:none}
.eo-hero-word{position:absolute;top:58%;left:50%;transform:translate(-50%,-50%);z-index:0;pointer-events:none;
  font-family:${w};font-weight:400;font-size:clamp(5.5rem,21vw,19rem);line-height:1;color:rgba(150,80,6,.20);
  letter-spacing:.01em;white-space:nowrap;text-transform:uppercase}
.eo-hero-copy{position:relative;z-index:3;text-align:center;pointer-events:none;margin-top:clamp(.6rem,3vh,2.4rem)}
.eo-h1{font-family:${w};font-weight:400;font-size:clamp(2.4rem,6vw,4.6rem);line-height:.92;letter-spacing:-.02em;margin:0;color:${t}}
.eo-sneid{font-family:${w};font-style:italic;font-weight:400;font-size:1.15em;line-height:1.3;
  display:inline-block;transform:rotate(-3deg);color:${f};
  text-shadow:0 1px 0 rgba(28,17,8,.55),0 3px 16px rgba(28,17,8,.3)}
.eo-lede{font-size:clamp(1rem,1.4vw,1.16rem);line-height:1.5;color:rgba(28,18,8,.82);max-width:40ch;margin:.85rem auto 0}
.eo-claim{display:inline-flex;align-items:center;gap:.4rem;margin-top:.9rem;padding:.5rem 1.15rem;
  background:${l};border:1.5px dashed ${f};border-radius:999px;transform:rotate(-1.5deg);
  font-family:${w};font-weight:400;font-size:.82rem;letter-spacing:.03em;text-transform:uppercase;
  color:${f};box-shadow:0 8px 18px -10px rgba(28,18,8,.45)}
.eo-claim-star{font-size:.85em;line-height:1}

.eo-pizza{position:relative;width:min(60vw,465px,max(220px,calc(100svh - 26rem)));aspect-ratio:1;margin:auto;
  transform:rotate(calc(var(--spin,0)*1deg));transform-origin:50% 50%;z-index:2;will-change:transform}
.eo-glow{position:absolute;left:50%;top:52%;width:82%;height:82%;transform:translate(-50%,-50%);border-radius:50%;
  background:radial-gradient(circle,rgba(120,60,0,.26),rgba(120,60,0,0) 66%);filter:blur(4px)}
.eo-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 18px rgba(90,45,0,.30))}
.eo-whole{opacity:calc(1 - var(--cut,0))}
.eo-sl{opacity:var(--cut,0);will-change:transform;
  transform:translate(calc(var(--ux,0) * var(--spread,0px)),calc(var(--uy,0) * var(--spread,0px)))}

.eo-slice{position:fixed;left:0;top:0;z-index:55;width:var(--slw,180px);height:auto;pointer-events:none;
  opacity:calc(var(--cut,0) * (1 - var(--armed,0)));will-change:transform;
  transform:translate(var(--slx,0),var(--sly,0)) translate(-50%,-50%) rotate(var(--slr,0));
  filter:drop-shadow(0 16px 24px rgba(90,45,0,.42))}

.eo-scrollcue{position:absolute;left:clamp(1rem,3vw,2.4rem);bottom:clamp(1rem,2.4vw,1.6rem);z-index:4;display:flex;flex-direction:column;
  align-items:flex-start;gap:.4rem;color:rgba(28,18,8,.5);font-family:${y};font-weight:600;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.14em;opacity:calc(1 - var(--seq,0)*6);pointer-events:none}
.eo-scrollcue i{width:1px;height:26px;background:rgba(28,18,8,.4);animation:eocue 1.7s ease-in-out infinite}
@keyframes eocue{0%,100%{transform:scaleY(.4);transform-origin:top;opacity:.3}50%{transform:scaleY(1);opacity:.8}}

.eo-pill{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.86rem;
  padding:.5rem 1.05rem;border:1.5px solid ${t};border-radius:999px;text-decoration:none;white-space:nowrap;
  box-shadow:2px 2px 0 ${t};transition:transform .15s ease,box-shadow .15s ease}
.eo-pill:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${t}}
.eo-btn{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.92rem;
  padding:.8rem 1.5rem;border:2px solid ${t};border-radius:999px;background:${f};color:${l};
  text-decoration:none;box-shadow:3px 3px 0 ${t};transition:transform .15s ease,box-shadow .15s ease}
.eo-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 ${t}}
.eo-btn-cream{background:${l};color:${t}}
.eo-chip{display:inline-flex;align-items:center;font-family:${y};font-weight:600;font-size:.9rem;
  padding:.6rem 1.15rem;border:1.5px solid ${t};border-radius:999px;background:transparent;color:${t};
  text-decoration:none;transition:background .15s,color .15s}
.eo-chip:hover{background:${t};color:${l}}

.eo-sticky-panta{position:fixed;z-index:50;right:clamp(.9rem,2.4vw,1.6rem);bottom:clamp(.9rem,2.4vw,1.5rem);
  display:inline-flex;align-items:center;justify-content:center;
  background:${f};color:${l};font-family:${y};font-weight:700;text-transform:uppercase;letter-spacing:.05em;
  font-size:.82rem;padding:.85rem 1.4rem;border-radius:14px;border:2px solid ${t};box-shadow:3px 3px 0 ${t};
  text-decoration:none;transition:box-shadow .18s ease,transform .18s ease}
.eo-sticky-panta:hover{box-shadow:5px 5px 0 ${t};transform:translate(-2px,-2px)}
.eo-corner-slice{position:absolute;left:50%;top:-67px;width:56px;height:auto;pointer-events:none;
  opacity:var(--armed,0);filter:drop-shadow(0 8px 14px rgba(90,45,0,.4));
  animation:eoCornerIdle 6s ease-in-out infinite}
@keyframes eoCornerIdle{
  0%,100%{transform:translateX(-50%) rotate(-6deg) translateY(0)}
  50%{transform:translateX(-50%) rotate(3deg) translateY(-3px)}
}

.eo-frame{position:relative;z-index:1;max-width:min(1360px,90vw);margin:0 auto clamp(.9rem,2vw,1.6rem);background:${Z};
  border:9px solid ${t};border-radius:clamp(24px,3vw,40px);overflow:clip;box-shadow:0 40px 90px -50px rgba(28,18,8,.6)}
.eo-h2{font-family:${w};font-weight:400;font-size:clamp(1.9rem,3.6vw,3rem);line-height:.98;letter-spacing:-.015em;margin:0}
.eo-body{font-size:1.04rem;line-height:1.6;color:${j};max-width:56ch}

.eo-sec{padding:clamp(3rem,6vw,5.5rem) clamp(1.2rem,4vw,3.5rem)}
.eo-sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:1.5rem;flex-wrap:wrap;margin-bottom:2.2rem}
.eo-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem}
.eo-cards>div{display:flex}
.eo-card{display:flex;flex-direction:column;width:100%;background:${l};border:2px solid ${t};border-radius:22px;overflow:clip;box-shadow:5px 5px 0 ${t};
  transition:transform .18s ease,box-shadow .18s ease}
.eo-card:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 ${t}}
.eo-card-img{position:relative;aspect-ratio:4/3;overflow:hidden;background:${Z};flex:none}
.eo-card-img img{width:100%;height:100%;object-fit:cover;display:block}
.eo-tag{position:absolute;top:.8rem;left:.8rem;background:${f};color:${l};font-family:${y};font-weight:700;
  font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;padding:.32rem .7rem;border-radius:999px;border:1.5px solid ${t}}
.eo-card-body{display:flex;flex-direction:column;flex:1;padding:1.2rem 1.3rem 1.4rem}
.eo-card-top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
.eo-card-top h3{font-family:${w};font-weight:400;font-size:1.4rem;margin:0;letter-spacing:-.01em}
.eo-price{font-family:${w};font-weight:400;font-size:1.3rem;color:${f};white-space:nowrap}
.eo-price em{font-family:${y};font-size:.62em;font-style:normal;color:${j}}
.eo-card-body p{font-size:.9rem;line-height:1.45;color:${j};margin:.5rem 0 0;min-height:2.9em;
  display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}
.eo-cat{display:flex;justify-content:center;margin-top:2.4rem}

.eo-dock-wrap{position:relative;height:100px;width:100%;max-width:520px;margin:0 auto}
.eo-dock-wrap .dock-outer{margin:0;width:100%;justify-content:center}
.eo-dock-wrap .dock-panel{background:transparent;border:none;padding:0 .5rem;gap:.6rem}
.eo-dock-wrap .dock-item{background:${l};border:1.5px solid ${t};color:${t};box-shadow:2px 2px 0 ${t}}
.eo-dock-wrap .dock-item:hover,.eo-dock-wrap .dock-item:focus-visible{background:${f};color:${l}}
.eo-dock-wrap .dock-caption{color:${j};font-family:${y};font-weight:600;font-size:.68rem}

.eo-band{background:${l};border-top:2px solid ${t};border-bottom:2px solid ${t}}
.eo-story{max-width:760px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.2rem}
.eo-award{display:inline-flex;flex-direction:column;padding:.7rem 1.3rem;border:1.5px dashed ${f};border-radius:14px}
.eo-award-t{font-family:${w};font-weight:400;color:${f}}
.eo-award-s{font-size:.82rem;color:${j}}

.eo-truck{background:${O};border-top:2px solid ${t};border-bottom:2px solid ${t};
  display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(1.5rem,4vw,3rem);align-items:start}
.eo-truck-lede{font-size:1.05rem;line-height:1.5;color:rgba(28,18,8,.82);margin:1rem 0 1.6rem;max-width:32ch}
.eo-pkgs{display:grid;gap:1.2rem}
.eo-pkg{background:${l};border:2px solid ${t};border-radius:18px;padding:1.3rem 1.4rem;box-shadow:4px 4px 0 ${t}}
.eo-pkg h3{font-family:${w};font-weight:400;font-size:1.5rem;margin:0}
.eo-pkg p{font-size:.9rem;line-height:1.4;color:${j};margin:.4rem 0 .9rem}
.eo-rate{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-top:1px solid rgba(28,23,18,.14);font-size:.95rem}
.eo-rate em{font-style:normal;color:${j};font-size:.8rem}
.eo-rate-p{font-family:${w};font-weight:400;color:${f};white-space:nowrap}

.eo-visit{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3rem);align-items:center}
.eo-visit-cta{display:flex;gap:.8rem;margin-top:1.4rem;flex-wrap:wrap}
.eo-hours{border:2px solid ${t};border-radius:18px;overflow:clip}
.eo-hour{display:flex;justify-content:space-between;gap:1rem;padding:.85rem 1.2rem;font-size:.98rem;border-bottom:1px solid rgba(28,23,18,.12)}
.eo-hour:last-child{border-bottom:none}
.eo-hour span:first-child{color:${j}}
.eo-hour span:last-child{font-weight:700}

.eo-footer{background:${t};color:${l};padding:clamp(2.2rem,4vw,3rem) clamp(1.2rem,4vw,3.5rem)}
.eo-foot-top{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap}
.eo-badge-sm{width:54px;height:54px;background:${l}}
.eo-badge-sm img{filter:none}
.eo-foot-links{display:flex;gap:1.4rem;flex-wrap:wrap}
.eo-foot-links a{color:rgba(252,245,231,.72);text-decoration:none;font-size:.95rem}
.eo-foot-links a:hover{color:${l}}
.eo-foot-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-top:1.8rem;padding-top:1.3rem;
  border-top:1px solid rgba(252,245,231,.16);color:rgba(252,245,231,.5);font-size:.78rem}

/* ---- responsive ---- */
@media (max-width:860px){
  .eo-frame{max-width:calc(100vw - 1.2rem);margin:0 auto .6rem;border-width:6px}
  .eo-bgwrap{display:none}
  .eo-cards,.eo-truck,.eo-visit{grid-template-columns:1fr}
  .eo-nav{gap:.5rem}
  .eo-pizza{width:min(85vw,385px)}
  .eo-sec-head{flex-direction:column;align-items:flex-start}
}
@media (max-width:520px){
  .eo-nav-grp{display:none}
  .eo-burger{display:flex}
  .eo-mbackdrop{display:block}
  .eo-mmenu{display:flex}
}
@media (prefers-reduced-motion:reduce){
  .eo-track{height:100svh}
  .eo-scrollcue{display:none}
  .eo-corner-slice{animation:none}
  .eo-hero-mid{transform:none;transition:none}
}
`;export{Yo as default};
