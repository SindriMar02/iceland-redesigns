const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Grainient-BKygX4LU.js","assets/index-D6qpt0oT.js","assets/index-DyXeFLk8.css","assets/Triangle-GlFcswsc.js","assets/Grainient-BdwqdHbZ.css"])))=>i.map(i=>d[i]);
import{r as s,S as Te,s as oe,j as e,H as it,F as lt,I as x,O as C,i as ct,k as dt,l as ft,A as Le,T as Pe,E as ie,n as le,K as pt,o as Ce,P as Fe,p as Me,q as mt,t as ht,_ as bt,v as ce,w as Oe}from"./index-D6qpt0oT.js";import gt from"./lenis-niKyKZQP.js";import{D as ut,T as xt,P as wt}from"./Dock-C6sCbWM-.js";import{S as yt}from"./SndrBadge-BNZyCrpP.js";import{G as vt}from"./gift-BbVc2cDS.js";import{C as kt}from"./cup-soda-Cqy4FRsP.js";import{U as jt}from"./utensils-crossed-DyvuJ492.js";import{L as zt}from"./leaf-DklTtVyw.js";import{c as $t}from"./createLucideIcon-Dsh_j6XE.js";import"./react-XYrVHnDO.js";import"./use-spring-Dp6Lks_u.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=$t("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),Et=s.lazy(()=>bt(()=>import("./Grainient-BKygX4LU.js"),__vite__mapDeps([0,1,2,3,4]))),St={Tilboð:e.jsx(Nt,{size:20,strokeWidth:1.8}),Bökur:e.jsx(wt,{size:20,strokeWidth:1.8}),Vegan:e.jsx(zt,{size:20,strokeWidth:1.8}),Meðlæti:e.jsx(jt,{size:20,strokeWidth:1.8}),Drykkir:e.jsx(kt,{size:20,strokeWidth:1.8}),Gjafabréf:e.jsx(vt,{size:20,strokeWidth:1.8})},F="/iceland-redesigns/",J="#F3EBD8",r="#1C1712",l="#FCF5E7",m="#C8371C",k="rgba(28,23,18,0.6)",At="#443C34",I=it,w="'HorndonBecker', Georgia, serif",y="'CabinetGrotesk-Variable', 'CabinetGrotesk-Regular', system-ui, sans-serif";function p({children:j,className:A="",delay:z=0,y:R=26}){const $=s.useRef(null);return s.useEffect(()=>{const u=$.current;if(!u)return;const h=()=>{u.style.opacity="1",u.style.transform="none"},b=new IntersectionObserver(Z=>Z.forEach(Q=>{Q.isIntersecting&&(h(),b.disconnect())}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});b.observe(u);const M=window.setTimeout(h,1600);return()=>{b.disconnect(),window.clearTimeout(M)}},[]),e.jsx("div",{ref:$,className:A,style:{opacity:0,transform:`translateY(${R}px)`,transition:`opacity 1.1s ease ${z}ms, transform 1.1s cubic-bezier(.16,.7,.2,1) ${z}ms`},children:j})}function X({children:j,href:A=C,active:z=!1,ext:R=!0,solid:$=!1}){const u=z||$;return e.jsx("a",{href:A,...R?{target:"_blank",rel:"noreferrer"}:{},className:"fb-pill",style:{background:u?At:"rgba(252,245,231,.9)",color:u?l:r,borderColor:r},children:j})}function Gt(){const j=s.useRef(null),A=s.useRef(null),z=s.useRef(null),R=s.useRef(null),$=s.useRef(null),u=s.useRef(null),[h,b]=s.useState(!1);s.useEffect(()=>{document.title="Flatbakan — Steinbökuð súrdeigspizza í Kópavogi"},[]),s.useEffect(()=>{if(!h)return;const a=n=>{n.key==="Escape"&&b(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[h]);const M=s.useMemo(()=>["fonts","hero","bg","logo","grain"],[]),[Z,Q]=s.useState({}),[de,_e]=s.useState(!1),ee=s.useCallback(a=>Q(n=>n[a]?n:{...n,[a]:!0}),[]),fe=M.reduce((a,n)=>a+(Z[n]?1:0),0),T=de||fe===M.length,De=de?1:fe/M.length;s.useEffect(()=>{let a=!0;const n=g=>{a&&ee(g)},o=(g,i)=>{const f=new Image;f.src=g,f.decode().catch(()=>{}).finally(()=>{i&&n(i)})};(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>n("fonts")),o(x.whole,"hero"),o(x.ingredientsBg,"bg"),o(x.logoBadge,"logo"),Te.forEach(g=>o(g.img)),o(x.slice);const d=window.setTimeout(()=>{a&&_e(!0)},4500);return()=>{a=!1,window.clearTimeout(d)}},[ee]);const[Ie,Be]=s.useState(!0);return s.useEffect(()=>{if(!T)return;const a=window.setTimeout(()=>Be(!1),780);return()=>window.clearTimeout(a)},[T]),s.useEffect(()=>{var o;if(!T){oe("#ffffff");return}oe(I);const a=(o=j.current)==null?void 0:o.querySelector(".fb-frame");if(!a)return;const n=new IntersectionObserver(([d])=>oe(d.isIntersecting?J:I),{rootMargin:"0px 0px -92% 0px"});return n.observe(a),()=>n.disconnect()},[T]),s.useEffect(()=>{const a=u.current;if(!a||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;const n=18,o={x:0,y:0},d={x:0,y:0},g=_=>{o.x=(_.clientX/window.innerWidth-.5)*2,o.y=(_.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",g,{passive:!0});let i=0,f=!document.hidden;const N=()=>{d.x+=(o.x-d.x)*.05,d.y+=(o.y-d.y)*.05,a.style.transform=`translate3d(${(-d.x*n).toFixed(1)}px, ${(-d.y*n).toFixed(1)}px, 0)`,i=requestAnimationFrame(N)},L=()=>{f&&i===0&&(i=requestAnimationFrame(N))},O=()=>{i!==0&&(cancelAnimationFrame(i),i=0)},B=()=>{f=!document.hidden,f?L():O()};return document.addEventListener("visibilitychange",B),L(),()=>{O(),window.removeEventListener("mousemove",g),document.removeEventListener("visibilitychange",B)}},[]),s.useEffect(()=>{const a=j.current,n=A.current,o=z.current,d=R.current,g=$.current;if(!a||!n||!o||!d||!g)return;const i=a.style,f=t=>Math.min(1,Math.max(0,t)),N=(t,c,v)=>t+(c-t)*v,L=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,O=t=>1-Math.pow(1-t,3),B=window.matchMedia("(prefers-reduced-motion:reduce)").matches,_=.06,Ue=.52,pe=.12,Ke=.3,me=.3,te=.54,he=.56,Ge=.94,He=360,Ye=.1,qe=.06;let be=0,D=0,ge=0,ue=0,xe=0,we=0;const U=()=>{be=window.innerHeight||800,n.offsetTop,Math.max(1,n.offsetHeight-be);const t=d.getBoundingClientRect(),c=o.getBoundingClientRect(),v=g.getBoundingClientRect();D=d.offsetWidth,ge=(t.left+t.right)/2-c.left,ue=(t.top+t.bottom)/2-c.top,xe=v.left+v.width/2,we=v.top};U();const K=t=>{const c=L(f((t-_)/(Ue-_)))*He,v=f((t-pe)/(Ke-pe)),Qe=O(f((t-me)/(te-me))),et=f((t-te)/(1-te)),W=L(f((t-he)/(Ge-he))),se=(Qe*Ye+et*qe)*D;i.setProperty("--spin",c.toFixed(2)),i.setProperty("--cut",v.toFixed(3)),i.setProperty("--spread",se.toFixed(1)+"px");const V=c*Math.PI/180,Ee=ce.cx*D+Oe.ux*se,Se=ce.cy*D+Oe.uy*se,tt=ge+(Ee*Math.cos(V)-Se*Math.sin(V)),at=ue+(Ee*Math.sin(V)+Se*Math.cos(V)),rt=ce.w*D,Ae=56,nt=Ae/.689,st=we+14-nt/2;i.setProperty("--slx",N(tt,xe,W).toFixed(1)+"px"),i.setProperty("--sly",N(at,st,W).toFixed(1)+"px"),i.setProperty("--slw",N(rt,Ae,W).toFixed(1)+"px"),i.setProperty("--slr",N(c,-6,W).toFixed(1)+"deg");const Re=.85,ot=L(f((t-Re)/(.97-Re)));i.setProperty("--armed",ot.toFixed(3))};if(B){n.style.height="100svh",K(0);return}K(0),i.setProperty("--seq","0.000");let G="idle";const ye=()=>{U()},H=new gt({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:!0});let ae=0;const ve=t=>{H.raf(t),ae=requestAnimationFrame(ve)};ae=requestAnimationFrame(ve);const ke=3400;let Y=0,P=0,q=0,E=1,re=0;const We=300,Ve=2.1,je=6,Xe=t=>{const c=t-re;if(re=t,c<We||E>=je)return;const v=(t-P)*E;E=Math.min(je,E*Ve),P=t-v/E},ze=()=>{G!=="released"&&(G="released",window.removeEventListener("wheel",S),window.removeEventListener("touchmove",S),window.removeEventListener("keydown",ne),window.clearTimeout(q),n.style.height="100svh",K(1),i.setProperty("--seq","1.000"),H.start())},$e=t=>{P||(P=t);const c=O(f((t-P)*E/ke));if(i.setProperty("--seq",c.toFixed(3)),K(c),c<1){Y=requestAnimationFrame($e);return}ze()},S=t=>{if(t.type!=="touchmove"&&t.cancelable&&t.preventDefault(),G!=="idle"){Xe(performance.now());return}U(),G="playing",P=0,E=1,re=performance.now(),Y=requestAnimationFrame($e),window.clearTimeout(q),q=window.setTimeout(ze,ke*2)},Je=new Set([" ","Spacebar","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"]),Ze=t=>{if(!(t instanceof HTMLElement))return!1;const c=t.tagName;return c==="INPUT"||c==="TEXTAREA"||c==="SELECT"||t.isContentEditable},ne=t=>{t.defaultPrevented||t.metaKey||t.ctrlKey||t.altKey||!Je.has(t.key)||Ze(t.target)||S(t)};H.stop(),window.addEventListener("wheel",S,{passive:!1}),window.addEventListener("touchmove",S,{passive:!0}),window.addEventListener("keydown",ne),window.addEventListener("resize",ye);let Ne=!1;return document.fonts.ready.then(()=>{Ne||U()}),()=>{Ne=!0,window.removeEventListener("wheel",S),window.removeEventListener("touchmove",S),window.removeEventListener("keydown",ne),window.removeEventListener("resize",ye),window.clearTimeout(q),Y&&cancelAnimationFrame(Y),cancelAnimationFrame(ae),H.destroy()}},[]),e.jsxs("div",{ref:j,className:"fb-root","data-revealed":T?"":void 0,style:{background:J,color:r,fontFamily:y},children:[e.jsx("link",{rel:"stylesheet",href:`${F}fonts/flatbakan/css/flatbakan.css`}),e.jsx("link",{rel:"stylesheet",href:`${F}fonts/cabinet-grotesk/css/cabinet-grotesk.css`}),e.jsx("style",{children:Rt}),Ie&&e.jsx(lt,{visible:!T,progress:De}),e.jsx("div",{className:"fb-bgwrap","aria-hidden":!0,children:e.jsx("img",{ref:u,src:x.ingredientsBg,alt:"",className:"fb-bgimg",draggable:!1})}),e.jsx("div",{ref:A,className:"fb-track",children:e.jsxs("div",{ref:z,className:"fb-stage-pin",children:[e.jsx(s.Suspense,{fallback:null,children:e.jsx(Et,{className:"fb-grain-hero",color1:"#F6B663",color2:I,color3:"#C17D23",contrast:.9,saturation:.85,grainAmount:.05,grainScale:2.2,warpAmplitude:20,warpFrequency:3,timeSpeed:.08,zoom:1.1,maxDpr:1,fps:30,onReady:()=>ee("grain")})}),e.jsxs("header",{className:"fb-nav",children:[e.jsxs("div",{className:"fb-nav-grp",children:[e.jsx(X,{href:"#top",ext:!1,active:!0,children:"Heim"}),e.jsx(X,{href:"#sagan",ext:!1,children:"Um okkur"})]}),e.jsx("a",{href:"#top",className:"fb-badge",children:e.jsx("img",{src:x.logoBadge,alt:"Flatbakan"})}),e.jsxs("div",{className:"fb-nav-grp",children:[e.jsx(X,{href:"#matsedill",ext:!1,children:"Matseðill"}),e.jsx(X,{href:C,solid:!0,children:"Panta"})]}),e.jsx("button",{type:"button",className:"fb-burger","data-open":h,"aria-expanded":h,"aria-controls":"fb-mmenu","aria-label":h?"Loka valmynd":"Opna valmynd",onClick:()=>b(a=>!a),children:e.jsxs("span",{className:"fb-burger-lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]}),e.jsx("div",{className:"fb-mbackdrop","data-open":h,"aria-hidden":!0,onClick:()=>b(!1)}),e.jsxs("nav",{id:"fb-mmenu",className:"fb-mmenu","data-open":h,"aria-label":"Aðalvalmynd","aria-hidden":!h,children:[e.jsx("a",{href:"#top",onClick:()=>b(!1),children:"Heim"}),e.jsx("a",{href:"#sagan",onClick:()=>b(!1),children:"Um okkur"}),e.jsx("a",{href:"#matsedill",onClick:()=>b(!1),children:"Matseðill"}),e.jsx("a",{href:C,target:"_blank",rel:"noreferrer",className:"fb-mmenu-cta",onClick:()=>b(!1),children:"Panta núna"})]}),e.jsxs("div",{className:"fb-hero-mid",children:[e.jsx("div",{className:"fb-hero-word","aria-hidden":!0,children:"FLATBAKAN"}),e.jsxs("div",{className:"fb-hero-copy",children:[e.jsxs("h1",{className:"fb-h1",children:["Fáðu þér ",e.jsx("span",{className:"fb-sneid",children:"sneið"})]}),e.jsx("p",{className:"fb-lede",children:"Steinbökuð súrdeigspizza í Bæjarlind 2."}),e.jsxs("div",{className:"fb-claim",children:[e.jsx("span",{className:"fb-claim-star",children:"★"}),"Besta pizza í Kópavogi"]})]}),e.jsxs("div",{ref:R,className:"fb-pizza","aria-hidden":!0,children:[e.jsx("div",{className:"fb-glow"}),e.jsx("img",{src:x.whole,alt:"",className:"fb-layer fb-whole",draggable:!1}),Te.filter(a=>!a.traveller).map(a=>e.jsx("img",{src:a.img,alt:"",className:"fb-layer fb-sl",draggable:!1,style:{"--ux":a.ux,"--uy":a.uy}},a.img))]})]}),e.jsxs("div",{className:"fb-scrollcue","aria-hidden":!0,children:[e.jsx("span",{children:"Skrunaðu"}),e.jsx("i",{})]})]})}),e.jsxs("div",{className:"fb-frame",children:[e.jsxs("section",{id:"matsedill",className:"fb-sec",children:[e.jsxs("div",{className:"fb-sec-head",children:[e.jsx(p,{children:e.jsx("h2",{className:"fb-h2",children:"Vinsælustu bökurnar"})}),e.jsx(p,{delay:80,children:e.jsx("a",{href:C,target:"_blank",rel:"noreferrer",className:"fb-btn",children:"Allur matseðillinn"})})]}),e.jsx("div",{className:"fb-cards",children:ct.map((a,n)=>e.jsx(p,{delay:n*60,children:e.jsxs("article",{className:"fb-card",children:[e.jsxs("div",{className:"fb-card-img",children:[e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",width:520,height:390}),a.best&&e.jsx("span",{className:"fb-tag",children:"Best seller"})]}),e.jsxs("div",{className:"fb-card-body",children:[e.jsxs("div",{className:"fb-card-top",children:[e.jsx("h3",{children:a.name}),e.jsxs("span",{className:"fb-price",children:[a.price,e.jsx("em",{children:" kr"})]})]}),e.jsx("p",{children:a.desc})]})]})},a.name))}),e.jsx("div",{className:"fb-cat fb-dock-wrap",children:e.jsx(ut,{items:dt.map(a=>({icon:St[a.label]??e.jsx(xt,{size:20,strokeWidth:1.8}),label:a.label,onClick:()=>window.open(C,"_blank","noreferrer")})),magnification:62,distance:130,panelHeight:84,dockHeight:84,baseItemSize:44})})]}),e.jsx("section",{id:"sagan",className:"fb-sec fb-band",children:e.jsxs("div",{className:"fb-story",children:[e.jsx(p,{children:e.jsx("h2",{className:"fb-h2",children:"Frá 2015, í hjarta Kópavogs"})}),e.jsx(p,{delay:70,children:e.jsx("p",{className:"fb-body",children:ft.body})}),e.jsx(p,{delay:130,children:e.jsxs("div",{className:"fb-award",children:[e.jsxs("span",{className:"fb-award-t",children:["★ ",Le.title]}),e.jsx("span",{className:"fb-award-s",children:Le.sub})]})})]})}),e.jsxs("section",{id:"truck",className:"fb-sec fb-truck",children:[e.jsxs("div",{className:"fb-truck-head",children:[e.jsx(p,{children:e.jsx("h2",{className:"fb-h2",style:{color:l},children:"Pizza Truck"})}),e.jsx(p,{delay:70,children:e.jsx("p",{className:"fb-truck-lede",children:Pe.intro})}),e.jsx(p,{delay:120,children:e.jsx("a",{href:`mailto:${ie}?subject=Fyrirspurn um Pizza Truck`,className:"fb-btn fb-btn-cream",children:"Senda fyrirspurn"})})]}),e.jsx("div",{className:"fb-pkgs",children:Pe.packages.map((a,n)=>e.jsx(p,{delay:n*70,children:e.jsxs("div",{className:"fb-pkg",children:[e.jsx("h3",{children:a.name}),e.jsx("p",{children:a.line}),a.rates.map(o=>e.jsxs("div",{className:"fb-rate",children:[e.jsxs("span",{children:[o.label," ",e.jsx("em",{children:o.sub})]}),e.jsxs("span",{className:"fb-rate-p",children:[o.price," kr"]})]},o.label))]})},a.name))})]}),e.jsx("section",{id:"stadur",className:"fb-sec",children:e.jsxs("div",{className:"fb-visit",children:[e.jsxs("div",{children:[e.jsx(p,{children:e.jsx("h2",{className:"fb-h2",children:le.street})}),e.jsx(p,{delay:60,children:e.jsxs("p",{className:"fb-body",style:{marginTop:".3rem"},children:[le.town,". ",pt.heading," og allur ágóði í Sollusjóðinn."]})}),e.jsx(p,{delay:120,children:e.jsxs("div",{className:"fb-visit-cta",children:[e.jsx("a",{href:Ce,target:"_blank",rel:"noreferrer",className:"fb-btn",children:"Sjá á korti"}),e.jsx("a",{href:Me,className:"fb-chip",children:Fe})]})})]}),e.jsx(p,{delay:60,children:e.jsx("div",{className:"fb-hours",children:mt.map(a=>e.jsxs("div",{className:"fb-hour",children:[e.jsx("span",{children:a.day}),e.jsx("span",{children:a.time})]},a.day))})})]})}),e.jsxs("footer",{className:"fb-footer",children:[e.jsxs("div",{className:"fb-foot-top",children:[e.jsx("a",{href:"#top",className:"fb-badge fb-badge-sm",children:e.jsx("img",{src:x.logoBadge,alt:"Flatbakan"})}),e.jsxs("div",{className:"fb-foot-links",children:[e.jsx("a",{href:Ce,target:"_blank",rel:"noreferrer",children:le.street}),e.jsx("a",{href:Me,children:Fe}),e.jsx("a",{href:`mailto:${ie}`,children:ie}),e.jsx("a",{href:ht.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),e.jsxs("div",{className:"fb-foot-bottom",children:[e.jsx("span",{children:"Frumgerð í hönnun, sýnishorn, ekki opinber vefur Flatbökunnar."}),e.jsx("span",{children:"Keyrir á upsell.is"})]}),e.jsx("div",{className:"fb-foot-bottom",children:e.jsx(yt,{dark:!0})})]})]}),e.jsx("img",{src:x.slice,alt:"",className:"fb-slice",draggable:!1,"aria-hidden":!0}),e.jsxs("a",{ref:$,href:C,target:"_blank",rel:"noreferrer",className:"fb-sticky-panta","aria-label":"Panta núna",children:[e.jsx("span",{children:"Panta núna"}),e.jsx("img",{src:x.slice,alt:"",className:"fb-corner-slice",draggable:!1,"aria-hidden":!0})]})]})}const Rt=`
@font-face{font-family:'Fontjek';font-weight:400;font-style:normal;font-display:swap;
  src:url('${F}fonts/flatbakan/fonts/FontJek.woff2') format('woff2'),
      url('${F}fonts/flatbakan/fonts/FontJek.woff') format('woff'),
      url('${F}fonts/flatbakan/fonts/FontJek.otf') format('opentype')}
@font-face{font-family:'Arkipelago';font-weight:400;font-style:normal;font-display:swap;
  src:url('${F}fonts/flatbakan/fonts/Arkipelago.otf') format('opentype')}
.fb-root{position:relative;min-height:100vh;overflow-x:clip}

/* fixed ingredients backdrop - sits behind the frame + hero, drifts with the pointer (JS).
   This position:fixed, opaque, orange plane was the entire "persistent orange bottom strip" bug on
   iOS: a fixed backdrop doesn't scroll, so it shows a CONSTANT orange behind the compact iOS URL bar
   / home indicator, and Safari, finding an opaque fixed element pinned to the bottom edge, paints the
   toolbar as an opaque tinted bar instead of the normal translucent-over-scrolling-content. No
   ordinary site has a fixed full-screen backdrop there - which is exactly why this happened on no
   other website. It is hidden entirely on phones (see the max-width:860px block below) so the page is
   structurally a NORMAL page at the bottom edge: the cream scrolling .fb-root/.fb-frame sits under the
   URL bar and the bar goes translucent, matching the original site. The cost on mobile is nil - the
   frame's side gutters there are only ~0.6rem, so this subtle texture was barely visible anyway; the
   hero is unaffected (the orange .fb-stage-pin + grain shader paint over this backdrop regardless). */
.fb-bgwrap{position:fixed;inset:-24px;z-index:0;overflow:hidden;pointer-events:none}
.fb-bgimg{width:100%;height:100%;object-fit:cover;display:block;will-change:transform}

/* ---- hero opener (NORMAL FLOW - no longer pinned) ---- */
/* ROOT-CAUSE FIX (2026-07-09): the hero is now a plain normal-flow block, exactly like every other
   redesign's hero (cf. saudarkroksbakari, a normal-flow section at min-height:100vh, position
   relative). It used to be a position:sticky stage inside a track - the LAST surviving piece of an
   old scroll-SCRUBBED intro (the 240svh scroll-jack runway was the other piece, already removed).
   The current intro is a time-driven autoplay that LOCKS scrolling and plays IN PLACE at scroll 0,
   so it never uses scroll position and never needed a sticky/pin at all: measured, the sticky had
   ZERO travel (track height == stage height) and released the instant you scrolled - functionally
   inert on desktop. But it was the ONE structural thing unique to flatbakan among all redesigns that
   stayed position:sticky on MOBILE (brunastadir disables its sticky hero on phones; cavesofhella's
   sticky has a real 220vh spacer). On iOS Safari a position:sticky viewport-height element is
   re-evaluated against the viewport on every URL-bar show/hide, so the hero box kept being recomputed
   as the toolbar animated during scroll - which is what made this page (and only this page) fail to
   scroll seamlessly into the next section and leave a dead band, where normal-flow pages never do.
   release()'s track.style.height='100svh' never fixed this because it only re-asserted a height that
   was already set - it never took the hero OUT of the sticky scaffold. Making .fb-stage-pin
   position:relative returns it to normal document flow while keeping the containing block for its
   absolutely-positioned children (grain/badge/hero-word/scrollcue). The intro is byte-identical:
   scroll-locked at 0, a relative box and a zero-travel sticky box render at the exact same place. */
.fb-track{position:relative;z-index:2;height:100svh}
.fb-stage-pin{position:relative;height:100svh;overflow:hidden;background:${I};
  display:flex;flex-direction:column;padding:clamp(1rem,2.4vw,1.8rem) clamp(1rem,3vw,2.4rem) clamp(1.4rem,3vw,2.2rem)}
/* sits on the flat orange fallback (kept as a safety net if the canvas fails), behind everything
   else in the stage - z-index:0 first in DOM so nav/copy/pizza (all z-index>=2) paint above it */
.fb-grain-hero{position:absolute;inset:0;z-index:0;pointer-events:none}

.fb-nav{position:relative;z-index:6;width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.fb-nav-grp{display:flex;gap:.6rem}
.fb-badge{width:64px;height:64px;border-radius:50%;background:${r};display:flex;align-items:center;justify-content:center;
  flex:0 0 auto;box-shadow:0 8px 20px -8px rgba(28,18,8,.55)}
.fb-badge img{width:80%;height:80%;object-fit:contain;filter:brightness(0) invert(1)}
/* Logo is pulled out of the flex flow and centred on the header itself, not on the two flanking
   pill groups - so it stays dead-centre even when those groups don't hold equal weight (e.g. one
   group loses a pill at a breakpoint, or the mobile burger button sits alone on one side). */
.fb-nav .fb-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}

/* ---- mobile hamburger + dropdown (replaces the pill nav below 520px) ---- */
.fb-burger{display:none;position:relative;z-index:8;width:44px;height:44px;flex:0 0 auto;padding:0;
  align-items:center;justify-content:center;background:${l};border:1.5px solid ${r};
  border-radius:50%;box-shadow:2px 2px 0 ${r};cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
.fb-burger:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${r}}
.fb-burger:active{transform:translate(0,0);box-shadow:1px 1px 0 ${r}}
.fb-burger-lines{position:relative;width:18px;height:13px}
.fb-burger-lines span{position:absolute;left:0;width:100%;height:2px;border-radius:2px;background:${r};
  transition:top .3s cubic-bezier(.65,0,.35,1),transform .3s cubic-bezier(.65,0,.35,1),opacity .2s ease}
.fb-burger-lines span:nth-child(1){top:0}
.fb-burger-lines span:nth-child(2){top:5.5px}
.fb-burger-lines span:nth-child(3){top:11px}
.fb-burger[data-open="true"] .fb-burger-lines span:nth-child(1){top:5.5px;transform:rotate(45deg)}
.fb-burger[data-open="true"] .fb-burger-lines span:nth-child(2){opacity:0;transform:scaleX(0)}
.fb-burger[data-open="true"] .fb-burger-lines span:nth-child(3){top:5.5px;transform:rotate(-45deg)}

.fb-mbackdrop{display:none;position:fixed;inset:0;z-index:59;background:rgba(28,18,8,.28);
  opacity:0;pointer-events:none;transition:opacity .3s ease}
.fb-mbackdrop[data-open="true"]{opacity:1;pointer-events:auto}

/* dropdown reveal is a clip-path wipe (not scaleY) so the border/shadow never distorts mid-transition -
   it genuinely unrolls from the header like a menu flap, each link cascading in a beat after the last */
.fb-mmenu{display:none;position:fixed;left:clamp(1rem,3vw,2.4rem);right:clamp(1rem,3vw,2.4rem);
  top:calc(clamp(1rem,2.4vw,1.8rem) + 64px + .6rem);z-index:60;flex-direction:column;gap:.35rem;
  padding:.7rem;background:${l};border:2px solid ${r};border-radius:20px;box-shadow:5px 5px 0 ${r};
  clip-path:inset(0 0 100% 0 round 20px);transform:translateY(-6px);opacity:0;pointer-events:none;
  transition:clip-path .42s cubic-bezier(.22,1,.36,1),transform .42s cubic-bezier(.22,1,.36,1),opacity .28s ease}
.fb-mmenu[data-open="true"]{clip-path:inset(0 0 0% 0 round 20px);transform:none;opacity:1;pointer-events:auto}
.fb-mmenu a{font-family:${y};font-weight:700;font-size:1.05rem;color:${r};text-decoration:none;
  padding:.75rem .9rem;border-radius:12px;opacity:0;transform:translateY(-8px);
  transition:background .15s ease,opacity .38s ease .1s,transform .38s cubic-bezier(.22,1,.36,1) .1s}
.fb-mmenu a:active{background:rgba(28,18,8,.07)}
.fb-mmenu[data-open="true"] a{opacity:1;transform:none}
.fb-mmenu[data-open="true"] a:nth-child(1){transition-delay:.06s}
.fb-mmenu[data-open="true"] a:nth-child(2){transition-delay:.11s}
.fb-mmenu[data-open="true"] a:nth-child(3){transition-delay:.16s}
.fb-mmenu[data-open="true"] a:nth-child(4){transition-delay:.21s}
.fb-mmenu a.fb-mmenu-cta{background:${m};color:${l};text-align:center;margin-top:.15rem;
  font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:.92rem}

/* the hero content's half of the "arrive": it sits very slightly enlarged behind the orange
   loading screen and eases down to rest as that screen lifts away, so the hero reads as settling
   into focus rather than hard-cutting in. Pure transform (GPU compositor) - and the scroll
   sequence re-measures on its own trigger (see onTrigger), so this transient scale never poisons
   the pinned-pizza geometry. Longer than the overlay's own fade so you see it finish settling. */
.fb-hero-mid{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:0;
  transform:scale(1.05);transform-origin:50% 42%;transition:transform 1.05s cubic-bezier(.16,.72,.12,1);will-change:transform}
.fb-root[data-revealed] .fb-hero-mid{transform:none}
.fb-hero-word{position:absolute;top:58%;left:50%;transform:translate(-50%,-50%);z-index:0;pointer-events:none;
  font-family:${w};font-weight:400;font-size:clamp(5.5rem,21vw,19rem);line-height:1;color:rgba(150,80,6,.20);
  letter-spacing:.01em;white-space:nowrap;text-transform:uppercase}
.fb-hero-copy{position:relative;z-index:3;text-align:center;pointer-events:none;margin-top:clamp(.6rem,3vh,2.4rem)}
.fb-h1{font-family:${w};font-weight:400;font-size:clamp(2.4rem,6vw,4.6rem);line-height:.92;letter-spacing:-.02em;margin:0;color:${r}}
/* "sneið" - accent word set in the same HorndonBecker headline face as .fb-h1, just italicised
   (synthetic slant - the face only ships one upright style) and rotated a touch, so it reads as
   a flourish off the headline rather than a second typeface. Same RED as the CTA buttons
   (.fb-sticky-panta / "Allur matseðillinn"), not a separate accent color, no gradient. */
.fb-sneid{font-family:${w};font-style:italic;font-weight:400;font-size:1.15em;line-height:1.3;
  display:inline-block;transform:rotate(-3deg);color:${m};
  text-shadow:0 1px 0 rgba(28,17,8,.55),0 3px 16px rgba(28,17,8,.3)}
.fb-lede{font-size:clamp(1rem,1.4vw,1.16rem);line-height:1.5;color:rgba(28,18,8,.82);max-width:40ch;margin:.85rem auto 0}
/* "Besta pizza í Kópavogi" - pulled out of the lede sentence into its own stamped claim badge,
   echoing the dashed award-stamp motif used later at .fb-award (promise here, proof there). */
.fb-claim{display:inline-flex;align-items:center;gap:.4rem;margin-top:.9rem;padding:.5rem 1.15rem;
  background:${l};border:1.5px dashed ${m};border-radius:999px;transform:rotate(-1.5deg);
  font-family:${w};font-weight:400;font-size:.82rem;letter-spacing:.03em;text-transform:uppercase;
  color:${m};box-shadow:0 8px 18px -10px rgba(28,18,8,.45)}
.fb-claim-star{font-size:.85em;line-height:1}

/* pizza layers - whole cross-fades into the spaced cut body, both spinning together.
   A normal (non-absolute) flex child with margin:auto, NOT a fixed top:60% anchor - the old fixed
   percentage was tuned for a 2-line hero-copy block and silently started overlapping the claim
   badge once a 3rd line was added, since it never accounted for the copy block's real height.
   margin:auto in a column flex container centers the pizza in whatever space is left BELOW
   hero-copy, however tall that content happens to be - correct by construction, not tuning. */
/* the 3rd min() term bounds pizza height by whatever's actually left in the 100svh stage after
   nav + hero-copy + padding + a real gap - without it, on shorter/wider viewports hero-copy plus
   a full 465px pizza can simply exceed the available box, leaving margin:auto nothing to
   distribute (auto margins can't invent space that isn't there). The max(220px, ...) floor matters
   on genuinely short viewports (e.g. phones in landscape, ~400px tall): the calc() term alone goes
   NEGATIVE there, and min() picking a negative width clamps to 0 - the pizza vanished entirely
   until this floor was added. 220px keeps it a real, clearly visible hero image even then. */
.fb-pizza{position:relative;width:min(60vw,465px,max(220px,calc(100svh - 26rem)));aspect-ratio:1;margin:auto;
  transform:rotate(calc(var(--spin,0)*1deg));transform-origin:50% 50%;z-index:2;will-change:transform}
.fb-glow{position:absolute;left:50%;top:52%;width:82%;height:82%;transform:translate(-50%,-50%);border-radius:50%;
  background:radial-gradient(circle,rgba(120,60,0,.26),rgba(120,60,0,0) 66%);filter:blur(4px)}
.fb-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 18px rgba(90,45,0,.30))}
.fb-whole{opacity:calc(1 - var(--cut,0))}
/* will-change:transform promotes each of the 7 slices to its own compositor layer, so the
   per-frame --spread transform is a cheap GPU move instead of re-rasterizing the drop-shadow
   filter from .fb-layer on every tick (filter+transform together are expensive to redo). */
.fb-sl{opacity:var(--cut,0);will-change:transform;
  transform:translate(calc(var(--ux,0) * var(--spread,0px)),calc(var(--uy,0) * var(--spread,0px)))}

/* the travelling slice - position:fixed (viewport px, JS-driven), rendered as a root sibling of
   .fb-sticky-panta so z-index:55 is compared DIRECTLY against its z-index:50 and always wins - it
   can never end up trapped inside a lower stacking context and disappear behind the button
   mid-flight. Fades out as it hands off to the static landed garnish on the corner button. */
.fb-slice{position:fixed;left:0;top:0;z-index:55;width:var(--slw,180px);height:auto;pointer-events:none;
  opacity:calc(var(--cut,0) * (1 - var(--armed,0)));will-change:transform;
  transform:translate(var(--slx,0),var(--sly,0)) translate(-50%,-50%) rotate(var(--slr,0));
  filter:drop-shadow(0 16px 24px rgba(90,45,0,.42))}

.fb-scrollcue{position:absolute;left:clamp(1rem,3vw,2.4rem);bottom:clamp(1rem,2.4vw,1.6rem);z-index:4;display:flex;flex-direction:column;
  align-items:flex-start;gap:.4rem;color:rgba(28,18,8,.5);font-family:${y};font-weight:600;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.14em;opacity:calc(1 - var(--seq,0)*6);pointer-events:none}
.fb-scrollcue i{width:1px;height:26px;background:rgba(28,18,8,.4);animation:fbcue 1.7s ease-in-out infinite}
@keyframes fbcue{0%,100%{transform:scaleY(.4);transform-origin:top;opacity:.3}50%{transform:scaleY(1);opacity:.8}}

/* ---- pills / buttons (magazine style) ---- */
.fb-pill{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.86rem;
  padding:.5rem 1.05rem;border:1.5px solid ${r};border-radius:999px;text-decoration:none;white-space:nowrap;
  box-shadow:2px 2px 0 ${r};transition:transform .15s ease,box-shadow .15s ease}
.fb-pill:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${r}}
.fb-btn{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.92rem;
  padding:.8rem 1.5rem;border:2px solid ${r};border-radius:999px;background:${m};color:${l};
  text-decoration:none;box-shadow:3px 3px 0 ${r};transition:transform .15s ease,box-shadow .15s ease}
.fb-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 ${r}}
.fb-btn-cream{background:${l};color:${r}}
.fb-chip{display:inline-flex;align-items:center;font-family:${y};font-weight:600;font-size:.9rem;
  padding:.6rem 1.15rem;border:1.5px solid ${r};border-radius:999px;background:transparent;color:${r};
  text-decoration:none;transition:background .15s,color .15s}
.fb-chip:hover{background:${r};color:${l}}

/* fixed corner order CTA - always visible; the flying slice's landing target. Once it lands,
   a static garnish crossfades in on top and idles there gently for the rest of the scroll. */
.fb-sticky-panta{position:fixed;z-index:50;right:clamp(.9rem,2.4vw,1.6rem);bottom:clamp(.9rem,2.4vw,1.5rem);
  display:inline-flex;align-items:center;justify-content:center;
  background:${m};color:${l};font-family:${y};font-weight:700;text-transform:uppercase;letter-spacing:.05em;
  font-size:.82rem;padding:.85rem 1.4rem;border-radius:14px;border:2px solid ${r};box-shadow:3px 3px 0 ${r};
  text-decoration:none;transition:box-shadow .18s ease,transform .18s ease}
.fb-sticky-panta:hover{box-shadow:5px 5px 0 ${r};transform:translate(-2px,-2px)}
/* width/top here MUST match the JS wDrop/OVERLAP math exactly (see place()) so the flying slice's
   landing spot and this static garnish's rest spot are pixel-identical - the crossfade is then a
   pure dissolve in place, not a jump. --armed is a continuous JS value each frame, no CSS transition
   here (one would fight the constantly-updating value and reintroduce lag/mismatch). */
.fb-corner-slice{position:absolute;left:50%;top:-67px;width:56px;height:auto;pointer-events:none;
  opacity:var(--armed,0);filter:drop-shadow(0 8px 14px rgba(90,45,0,.4));
  animation:fbCornerIdle 6s ease-in-out infinite}
@keyframes fbCornerIdle{
  0%,100%{transform:translateX(-50%) rotate(-6deg) translateY(0)}
  50%{transform:translateX(-50%) rotate(3deg) translateY(-3px)}
}

/* ---- framed website ---- */
.fb-frame{position:relative;z-index:1;max-width:min(1360px,90vw);margin:0 auto clamp(.9rem,2vw,1.6rem);background:${J};
  border:9px solid ${r};border-radius:clamp(24px,3vw,40px);overflow:clip;box-shadow:0 40px 90px -50px rgba(28,18,8,.6)}
.fb-h2{font-family:${w};font-weight:400;font-size:clamp(1.9rem,3.6vw,3rem);line-height:.98;letter-spacing:-.015em;margin:0}
.fb-body{font-size:1.04rem;line-height:1.6;color:${k};max-width:56ch}

.fb-sec{padding:clamp(3rem,6vw,5.5rem) clamp(1.2rem,4vw,3.5rem)}
.fb-sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:1.5rem;flex-wrap:wrap;margin-bottom:2.2rem}
.fb-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem}
.fb-cards>div{display:flex}
.fb-card{display:flex;flex-direction:column;width:100%;background:${l};border:2px solid ${r};border-radius:22px;overflow:clip;box-shadow:5px 5px 0 ${r};
  transition:transform .18s ease,box-shadow .18s ease}
.fb-card:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 ${r}}
.fb-card-img{position:relative;aspect-ratio:4/3;overflow:hidden;background:${J};flex:none}
.fb-card-img img{width:100%;height:100%;object-fit:cover;display:block}
.fb-tag{position:absolute;top:.8rem;left:.8rem;background:${m};color:${l};font-family:${y};font-weight:700;
  font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;padding:.32rem .7rem;border-radius:999px;border:1.5px solid ${r}}
.fb-card-body{display:flex;flex-direction:column;flex:1;padding:1.2rem 1.3rem 1.4rem}
.fb-card-top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
.fb-card-top h3{font-family:${w};font-weight:400;font-size:1.4rem;margin:0;letter-spacing:-.01em}
.fb-price{font-family:${w};font-weight:400;font-size:1.3rem;color:${m};white-space:nowrap}
.fb-price em{font-family:${y};font-size:.62em;font-style:normal;color:${k}}
.fb-card-body p{font-size:.9rem;line-height:1.45;color:${k};margin:.5rem 0 0;min-height:2.9em;
  display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}
.fb-cat{display:flex;justify-content:center;margin-top:2.4rem}

/* Dock-style category row - recoloured to the brand (cream/ink) instead of the default dark glass */
.fb-dock-wrap{position:relative;height:100px;width:100%;max-width:520px;margin:0 auto}
.fb-dock-wrap .dock-outer{margin:0;width:100%;justify-content:center}
.fb-dock-wrap .dock-panel{background:transparent;border:none;padding:0 .5rem;gap:.6rem}
.fb-dock-wrap .dock-item{background:${l};border:1.5px solid ${r};color:${r};box-shadow:2px 2px 0 ${r}}
.fb-dock-wrap .dock-item:hover,.fb-dock-wrap .dock-item:focus-visible{background:${m};color:${l}}
.fb-dock-wrap .dock-caption{color:${k};font-family:${y};font-weight:600;font-size:.68rem}

/* Grainient - a subtle animated grain+gradient texture behind the story section, brand-toned */
.fb-band{background:${l};border-top:2px solid ${r};border-bottom:2px solid ${r}}
.fb-story{max-width:760px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.2rem}
.fb-award{display:inline-flex;flex-direction:column;padding:.7rem 1.3rem;border:1.5px dashed ${m};border-radius:14px}
.fb-award-t{font-family:${w};font-weight:400;color:${m}}
.fb-award-s{font-size:.82rem;color:${k}}

.fb-truck{background:${I};border-top:2px solid ${r};border-bottom:2px solid ${r};
  display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(1.5rem,4vw,3rem);align-items:start}
.fb-truck-lede{font-size:1.05rem;line-height:1.5;color:rgba(28,18,8,.82);margin:1rem 0 1.6rem;max-width:32ch}
.fb-pkgs{display:grid;gap:1.2rem}
.fb-pkg{background:${l};border:2px solid ${r};border-radius:18px;padding:1.3rem 1.4rem;box-shadow:4px 4px 0 ${r}}
.fb-pkg h3{font-family:${w};font-weight:400;font-size:1.5rem;margin:0}
.fb-pkg p{font-size:.9rem;line-height:1.4;color:${k};margin:.4rem 0 .9rem}
.fb-rate{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-top:1px solid rgba(28,23,18,.14);font-size:.95rem}
.fb-rate em{font-style:normal;color:${k};font-size:.8rem}
.fb-rate-p{font-family:${w};font-weight:400;color:${m};white-space:nowrap}

.fb-visit{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3rem);align-items:center}
.fb-visit-cta{display:flex;gap:.8rem;margin-top:1.4rem;flex-wrap:wrap}
.fb-hours{border:2px solid ${r};border-radius:18px;overflow:clip}
.fb-hour{display:flex;justify-content:space-between;gap:1rem;padding:.85rem 1.2rem;font-size:.98rem;border-bottom:1px solid rgba(28,23,18,.12)}
.fb-hour:last-child{border-bottom:none}
.fb-hour span:first-child{color:${k}}
.fb-hour span:last-child{font-weight:700}

.fb-footer{background:${r};color:${l};padding:clamp(2.2rem,4vw,3rem) clamp(1.2rem,4vw,3.5rem)}
.fb-foot-top{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap}
.fb-badge-sm{width:54px;height:54px;background:${l}}
.fb-badge-sm img{filter:none}
.fb-foot-links{display:flex;gap:1.4rem;flex-wrap:wrap}
.fb-foot-links a{color:rgba(252,245,231,.72);text-decoration:none;font-size:.95rem}
.fb-foot-links a:hover{color:${l}}
.fb-foot-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-top:1.8rem;padding-top:1.3rem;
  border-top:1px solid rgba(252,245,231,.16);color:rgba(252,245,231,.5);font-size:.78rem}

/* ---- responsive ---- */
@media (max-width:860px){
  /* fill the width minus a tight gutter and CENTER (auto margins). The base rule's max-width:90vw
     left slack that a fixed .6rem left margin pushed off-centre, so override max-width here too. */
  .fb-frame{max-width:calc(100vw - 1.2rem);margin:0 auto .6rem;border-width:6px}
  /* kill the fixed orange backdrop on phones - it was the opaque fixed plane under the iOS URL bar
     that produced the persistent orange bottom strip (see .fb-bgwrap note above). With it gone the
     bottom edge is the normal cream scrolling page, so the URL bar goes translucent like any site.
     Barely visible at these gutter widths anyway; the hero's own orange stage/grain still paint. */
  .fb-bgwrap{display:none}
  .fb-cards,.fb-truck,.fb-visit{grid-template-columns:1fr}
  .fb-nav{gap:.5rem}
  .fb-pizza{width:min(85vw,385px)}
  .fb-sec-head{flex-direction:column;align-items:flex-start}
}
@media (max-width:520px){
  .fb-nav-grp{display:none}
  .fb-burger{display:flex}
  .fb-mbackdrop{display:block}
  .fb-mmenu{display:flex}
}
@media (prefers-reduced-motion:reduce){
  .fb-track{height:100svh}
  /* pizza is a flow layout child now (margin:auto), not translate-anchored - --spin already
     resolves to 0 here (place(0) never enters the spin window), so no override is needed to
     hold it still; forcing the OLD translate(-50%,-50%) would now shift it by half its own
     size and break the layout. */
  .fb-scrollcue{display:none}
  .fb-corner-slice{animation:none}
  /* no scale-settle reveal for reduced-motion - hero is simply at rest */
  .fb-hero-mid{transform:none;transition:none}
}
`;export{Gt as default};
