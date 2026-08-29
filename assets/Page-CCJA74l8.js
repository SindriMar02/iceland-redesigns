const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Grainient-VyUzYurZ.js","assets/index-A_JGhuQ-.js","assets/index-DJm4_fKw.css","assets/Triangle-GlFcswsc.js","assets/Grainient-BdwqdHbZ.css"])))=>i.map(i=>d[i]);
import{r as n,a3 as Pe,s as ie,j as e,a4 as cs,a5 as ds,a6 as w,a7 as X,a8 as Le,a9 as ms,aa as fs,ab as Me,ac as Te,ad as _e,ae as oe,af as le,ag as hs,ah as Ce,ai as Fe,aj as Ie,ak as xs,al as gs,_ as us,am as pe,an as De}from"./index-A_JGhuQ-.js";import ws from"./lenis-niKyKZQP.js";import{D as bs,T as Oe,P as ys}from"./Dock-B7UQudI8.js";import{S as vs}from"./SndrBadge-BP9MMoHg.js";import{c as js}from"./createLucideIcon-DalFDvRP.js";import{B as ks}from"./baby-Z_Dj_CSm.js";import{U as $s}from"./utensils-crossed-ChooUF7c.js";import"./react-DhMEuJc_.js";import"./use-spring-CGI1wVY4.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=js("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Ns=n.lazy(()=>us(()=>import("./Grainient-VyUzYurZ.js"),__vite__mapDeps([0,1,2,3,4]))),Es={Pizzur:e.jsx(ys,{size:20,strokeWidth:1.8}),Brauðstangir:e.jsx($s,{size:20,strokeWidth:1.8}),Álegg:e.jsx(Oe,{size:20,strokeWidth:1.8}),Barnamatseðill:e.jsx(ks,{size:20,strokeWidth:1.8}),Glútenlaus:e.jsx(zs,{size:20,strokeWidth:1.8})},T="/iceland-redesigns/",Z="#F3EBD8",r="#1C1712",l="#FCF5E7",f="#C8371C",j="rgba(28,23,18,0.6)",Rs="#443C34",D=cs,b="'Tanker-Regular', Georgia, serif",y="'Satoshi', system-ui, sans-serif";function m({children:k,className:A="",delay:$=0,y:S=26}){const z=n.useRef(null);return n.useEffect(()=>{const u=z.current;if(!u)return;const h=()=>{u.style.opacity="1",u.style.transform="none"},x=new IntersectionObserver(J=>J.forEach(Q=>{Q.isIntersecting&&(h(),x.disconnect())}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});x.observe(u);const _=window.setTimeout(h,1600);return()=>{x.disconnect(),window.clearTimeout(_)}},[]),e.jsx("div",{ref:z,className:A,style:{opacity:0,transform:`translateY(${S}px)`,transition:`opacity 1.1s ease ${$}ms, transform 1.1s cubic-bezier(.16,.7,.2,1) ${$}ms`},children:k})}function V({children:k,href:A=X,active:$=!1,ext:S=!0,solid:z=!1}){const u=$||z;return e.jsx("a",{href:A,...S?{target:"_blank",rel:"noreferrer"}:{},className:"ps-pill",style:{background:u?Rs:"rgba(252,245,231,.9)",color:u?l:r,borderColor:r},children:k})}function Bs(){const k=n.useRef(null),A=n.useRef(null),$=n.useRef(null),S=n.useRef(null),z=n.useRef(null),u=n.useRef(null),[h,x]=n.useState(!1);n.useEffect(()=>{document.title="Pizzasmiðjan — Eldbakaðar pizzur í hjarta Akureyrar"},[]),n.useEffect(()=>{if(!h)return;const a=t=>{t.key==="Escape"&&x(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[h]);const _=n.useMemo(()=>["fonts","hero","bg","logo","grain"],[]),[J,Q]=n.useState({}),[ce,Be]=n.useState(!1),ee=n.useCallback(a=>Q(t=>t[a]?t:{...t,[a]:!0}),[]),de=_.reduce((a,t)=>a+(J[t]?1:0),0),P=ce||de===_.length,He=ce?1:de/_.length;n.useEffect(()=>{let a=!0;const t=g=>{a&&ee(g)},i=(g,o)=>{const d=new Image;d.src=g,d.decode().catch(()=>{}).finally(()=>{o&&t(o)})};(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>t("fonts")),i(w.whole,"hero"),i(w.ingredientsBg,"bg"),i(w.logoBadge,"logo"),Pe.forEach(g=>i(g.img)),i(w.slice);const c=window.setTimeout(()=>{a&&Be(!0)},4500);return()=>{a=!1,window.clearTimeout(c)}},[ee]);const[Ue,Ye]=n.useState(!0);return n.useEffect(()=>{if(!P)return;const a=window.setTimeout(()=>Ye(!1),780);return()=>window.clearTimeout(a)},[P]),n.useEffect(()=>{var i;if(!P){ie("#ffffff");return}ie(D);const a=(i=k.current)==null?void 0:i.querySelector(".ps-frame");if(!a)return;const t=new IntersectionObserver(([c])=>ie(c.isIntersecting?Z:D),{rootMargin:"0px 0px -92% 0px"});return t.observe(a),()=>t.disconnect()},[P]),n.useEffect(()=>{const a=u.current;if(!a||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;const t=18,i={x:0,y:0},c={x:0,y:0},g=F=>{i.x=(F.clientX/window.innerWidth-.5)*2,i.y=(F.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",g,{passive:!0});let o=0,d=!document.hidden;const N=()=>{c.x+=(i.x-c.x)*.05,c.y+=(i.y-c.y)*.05,a.style.transform=`translate3d(${(-c.x*t).toFixed(1)}px, ${(-c.y*t).toFixed(1)}px, 0)`,o=requestAnimationFrame(N)},L=()=>{d&&o===0&&(o=requestAnimationFrame(N))},C=()=>{o!==0&&(cancelAnimationFrame(o),o=0)},O=()=>{d=!document.hidden,d?L():C()};return document.addEventListener("visibilitychange",O),L(),()=>{C(),window.removeEventListener("mousemove",g),document.removeEventListener("visibilitychange",O)}},[]),n.useEffect(()=>{const a=k.current,t=A.current,i=$.current,c=S.current,g=z.current;if(!a||!t||!i||!c||!g)return;const o=a.style,d=s=>Math.min(1,Math.max(0,s)),N=(s,p,v)=>s+(p-s)*v,L=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,C=s=>1-Math.pow(1-s,3),O=window.matchMedia("(prefers-reduced-motion:reduce)").matches,F=.06,We=.52,me=.12,Ke=.3,fe=.3,se=.54,he=.56,Ge=.94,qe=360,Ve=.1,Xe=.06;let xe=0,I=0,ge=0,ue=0,we=0,be=0;const B=()=>{xe=window.innerHeight||800,t.offsetTop,Math.max(1,t.offsetHeight-xe);const s=c.getBoundingClientRect(),p=i.getBoundingClientRect(),v=g.getBoundingClientRect();I=c.offsetWidth,ge=(s.left+s.right)/2-p.left,ue=(s.top+s.bottom)/2-p.top,we=v.left+v.width/2,be=v.top};B();const H=s=>{const p=L(d((s-F)/(We-F)))*qe,v=d((s-me)/(Ke-me)),as=C(d((s-fe)/(se-fe))),rs=d((s-se)/(1-se)),G=L(d((s-he)/(Ge-he))),ne=(as*Ve+rs*Xe)*I;o.setProperty("--spin",p.toFixed(2)),o.setProperty("--cut",v.toFixed(3)),o.setProperty("--spread",ne.toFixed(1)+"px");const q=p*Math.PI/180,Ee=pe.cx*I+De.ux*ne,Re=pe.cy*I+De.uy*ne,ts=ge+(Ee*Math.cos(q)-Re*Math.sin(q)),ns=ue+(Ee*Math.sin(q)+Re*Math.cos(q)),is=pe.w*I,Ae=56,os=Ae/.689,ls=be+14-os/2;o.setProperty("--slx",N(ts,we,G).toFixed(1)+"px"),o.setProperty("--sly",N(ns,ls,G).toFixed(1)+"px"),o.setProperty("--slw",N(is,Ae,G).toFixed(1)+"px"),o.setProperty("--slr",N(p,-6,G).toFixed(1)+"deg");const Se=.85,ps=L(d((s-Se)/(.97-Se)));o.setProperty("--armed",ps.toFixed(3))};if(O){t.style.height="100svh",H(0);return}H(0),o.setProperty("--seq","0.000");let U="idle";const ye=()=>{B()},Y=new ws({duration:1.15,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0});let ae=0;const ve=s=>{Y.raf(s),ae=requestAnimationFrame(ve)};ae=requestAnimationFrame(ve);const je=3400;let W=0,M=0,K=0,E=1,re=0;const Ze=300,Je=2.1,ke=6,Qe=s=>{const p=s-re;if(re=s,p<Ze||E>=ke)return;const v=(s-M)*E;E=Math.min(ke,E*Je),M=s-v/E},$e=()=>{U!=="released"&&(U="released",window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",te),window.clearTimeout(K),t.style.height="100svh",H(1),o.setProperty("--seq","1.000"),Y.start())},ze=s=>{M||(M=s);const p=C(d((s-M)*E/je));if(o.setProperty("--seq",p.toFixed(3)),H(p),p<1){W=requestAnimationFrame(ze);return}$e()},R=s=>{if(s.type!=="touchmove"&&s.cancelable&&s.preventDefault(),U!=="idle"){Qe(performance.now());return}B(),U="playing",M=0,E=1,re=performance.now(),W=requestAnimationFrame(ze),window.clearTimeout(K),K=window.setTimeout($e,je*2)},es=new Set([" ","Spacebar","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"]),ss=s=>{if(!(s instanceof HTMLElement))return!1;const p=s.tagName;return p==="INPUT"||p==="TEXTAREA"||p==="SELECT"||s.isContentEditable},te=s=>{s.defaultPrevented||s.metaKey||s.ctrlKey||s.altKey||!es.has(s.key)||ss(s.target)||R(s)};Y.stop(),window.addEventListener("wheel",R,{passive:!1}),window.addEventListener("touchmove",R,{passive:!0}),window.addEventListener("keydown",te),window.addEventListener("resize",ye);let Ne=!1;return document.fonts.ready.then(()=>{Ne||B()}),()=>{Ne=!0,window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",te),window.removeEventListener("resize",ye),window.clearTimeout(K),W&&cancelAnimationFrame(W),cancelAnimationFrame(ae),Y.destroy()}},[]),e.jsxs("div",{ref:k,className:"ps-root","data-revealed":P?"":void 0,style:{background:Z,color:r,fontFamily:y},children:[e.jsx("style",{children:As}),Ue&&e.jsx(ds,{visible:!P,progress:He}),e.jsx("div",{className:"ps-bgwrap","aria-hidden":!0,children:e.jsx("img",{ref:u,src:w.ingredientsBg,alt:"",className:"ps-bgimg",draggable:!1})}),e.jsx("div",{ref:A,className:"ps-track",children:e.jsxs("div",{ref:$,className:"ps-stage-pin",children:[e.jsx(n.Suspense,{fallback:null,children:e.jsx(Ns,{className:"ps-grain-hero",color1:"#F6B663",color2:D,color3:"#C17D23",contrast:.9,saturation:.85,grainAmount:.05,grainScale:2.2,warpAmplitude:20,warpFrequency:3,timeSpeed:.08,zoom:1.1,maxDpr:1,fps:30,onReady:()=>ee("grain")})}),e.jsxs("header",{className:"ps-nav",children:[e.jsxs("div",{className:"ps-nav-grp",children:[e.jsx(V,{href:"#top",ext:!1,active:!0,children:"Heim"}),e.jsx(V,{href:"#sagan",ext:!1,children:"Um okkur"})]}),e.jsx("a",{href:"#top",className:"ps-badge",children:e.jsx("img",{src:w.logoBadge,alt:"Pizzasmiðjan"})}),e.jsxs("div",{className:"ps-nav-grp",children:[e.jsx(V,{href:"#matsedill",ext:!1,children:"Matseðill"}),e.jsx(V,{href:X,solid:!0,children:"Hringja"})]}),e.jsx("button",{type:"button",className:"ps-burger","data-open":h,"aria-expanded":h,"aria-controls":"ps-mmenu","aria-label":h?"Loka valmynd":"Opna valmynd",onClick:()=>x(a=>!a),children:e.jsxs("span",{className:"ps-burger-lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]}),e.jsx("div",{className:"ps-mbackdrop","data-open":h,"aria-hidden":!0,onClick:()=>x(!1)}),e.jsxs("nav",{id:"ps-mmenu",className:"ps-mmenu","data-open":h,"aria-label":"Aðalvalmynd","aria-hidden":!h,children:[e.jsx("a",{href:"#top",onClick:()=>x(!1),children:"Heim"}),e.jsx("a",{href:"#sagan",onClick:()=>x(!1),children:"Um okkur"}),e.jsx("a",{href:"#matsedill",onClick:()=>x(!1),children:"Matseðill"}),e.jsx("a",{href:X,className:"ps-mmenu-cta",onClick:()=>x(!1),children:"Hringja núna"})]}),e.jsxs("div",{className:"ps-hero-mid",children:[e.jsx("div",{className:"ps-hero-word","aria-hidden":!0,children:"PIZZASMIÐJAN"}),e.jsxs("div",{className:"ps-hero-copy",children:[e.jsxs("h1",{className:"ps-h1",children:["Fáðu þér ",e.jsx("span",{className:"ps-sneid",children:"sneið"})]}),e.jsx("p",{className:"ps-lede",children:"Eldbakaðar og stökkar pizzur í Hafnarstræti."}),e.jsxs("div",{className:"ps-claim",children:[e.jsx("span",{className:"ps-claim-star",children:"★"}),"Í hjarta Akureyrar"]})]}),e.jsxs("div",{ref:S,className:"ps-pizza","aria-hidden":!0,children:[e.jsx("div",{className:"ps-glow"}),e.jsx("img",{src:w.whole,alt:"",className:"ps-layer ps-whole",draggable:!1}),Pe.filter(a=>!a.traveller).map(a=>e.jsx("img",{src:a.img,alt:"",className:"ps-layer ps-sl",draggable:!1,style:{"--ux":a.ux,"--uy":a.uy}},a.img))]})]}),e.jsxs("div",{className:"ps-scrollcue","aria-hidden":!0,children:[e.jsx("span",{children:"Skrunaðu"}),e.jsx("i",{})]})]})}),e.jsxs("div",{className:"ps-frame",children:[e.jsxs("section",{id:"matsedill",className:"ps-sec",children:[e.jsxs("div",{className:"ps-sec-head",children:[e.jsx(m,{children:e.jsx("h2",{className:"ps-h2",children:"Vinsælustu pizzurnar"})}),e.jsx(m,{delay:80,children:e.jsx("a",{href:Le,target:"_blank",rel:"noreferrer",className:"ps-btn",children:"Allur matseðillinn"})})]}),e.jsx("div",{className:"ps-cards",children:ms.map((a,t)=>e.jsx(m,{delay:t*60,children:e.jsxs("article",{className:"ps-card",children:[e.jsxs("div",{className:"ps-card-img",children:[e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",width:520,height:390}),a.best&&e.jsx("span",{className:"ps-tag",children:"Best seller"})]}),e.jsxs("div",{className:"ps-card-body",children:[e.jsxs("div",{className:"ps-card-top",children:[e.jsx("h3",{children:a.name}),e.jsxs("span",{className:"ps-price",children:[a.price,e.jsx("em",{children:" kr"})]})]}),e.jsx("p",{children:a.desc})]})]})},a.name))}),e.jsx("div",{className:"ps-cat ps-dock-wrap",children:e.jsx(bs,{items:fs.map(a=>({icon:Es[a.label]??e.jsx(Oe,{size:20,strokeWidth:1.8}),label:a.label,onClick:()=>window.open(Le,"_blank","noreferrer")})),magnification:62,distance:130,panelHeight:84,dockHeight:84,baseItemSize:44})})]}),e.jsx("section",{id:"sagan",className:"ps-sec ps-band",children:e.jsxs("div",{className:"ps-story",children:[e.jsx(m,{children:e.jsx("h2",{className:"ps-h2",children:Me.heading})}),e.jsx(m,{delay:70,children:e.jsx("p",{className:"ps-body",children:Me.body})}),e.jsx(m,{delay:130,children:e.jsxs("div",{className:"ps-award",children:[e.jsxs("span",{className:"ps-award-t",children:["★ ",Te.title]}),e.jsx("span",{className:"ps-award-s",children:Te.sub})]})})]})}),e.jsxs("section",{id:"alegg",className:"ps-sec ps-truck",children:[e.jsxs("div",{className:"ps-truck-head",children:[e.jsx(m,{children:e.jsx("h2",{className:"ps-h2",style:{color:l},children:"Gerðu hana að þinni"})}),e.jsx(m,{delay:70,children:e.jsx("p",{className:"ps-truck-lede",children:_e.intro})}),e.jsx(m,{delay:120,children:e.jsx("a",{href:`mailto:${oe}?subject=Fyrirspurn um pizzur`,className:"ps-btn ps-btn-cream",children:"Senda fyrirspurn"})})]}),e.jsx("div",{className:"ps-pkgs",children:_e.packages.map((a,t)=>e.jsx(m,{delay:t*70,children:e.jsxs("div",{className:"ps-pkg",children:[e.jsx("h3",{children:a.name}),e.jsx("p",{children:a.line}),a.rates.map(i=>e.jsxs("div",{className:"ps-rate",children:[e.jsxs("span",{children:[i.label," ",e.jsx("em",{children:i.sub})]}),e.jsxs("span",{className:"ps-rate-p",children:[i.price," kr"]})]},i.label))]})},a.name))})]}),e.jsx("section",{id:"stadur",className:"ps-sec",children:e.jsxs("div",{className:"ps-visit",children:[e.jsxs("div",{children:[e.jsx(m,{children:e.jsx("h2",{className:"ps-h2",children:le.street})}),e.jsx(m,{delay:60,children:e.jsxs("p",{className:"ps-body",style:{marginTop:".3rem"},children:[le.town,". ",hs.body]})}),e.jsx(m,{delay:120,children:e.jsxs("div",{className:"ps-visit-cta",children:[e.jsx("a",{href:Ce,target:"_blank",rel:"noreferrer",className:"ps-btn",children:"Sjá á korti"}),e.jsx("a",{href:Ie,className:"ps-chip",children:Fe})]})})]}),e.jsx(m,{delay:60,children:e.jsx("div",{className:"ps-hours",children:xs.map(a=>e.jsxs("div",{className:"ps-hour",children:[e.jsx("span",{children:a.day}),e.jsx("span",{children:a.time})]},a.day))})})]})}),e.jsxs("footer",{className:"ps-footer",children:[e.jsxs("div",{className:"ps-foot-top",children:[e.jsx("a",{href:"#top",className:"ps-badge ps-badge-sm",children:e.jsx("img",{src:w.logoBadge,alt:"Pizzasmiðjan"})}),e.jsxs("div",{className:"ps-foot-links",children:[e.jsx("a",{href:Ce,target:"_blank",rel:"noreferrer",children:le.street}),e.jsx("a",{href:Ie,children:Fe}),e.jsx("a",{href:`mailto:${oe}`,children:oe}),e.jsx("a",{href:gs.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),e.jsxs("div",{className:"ps-foot-bottom",children:[e.jsx("span",{children:"Frumgerð í hönnun, sýnishorn, ekki opinber vefur Pizzasmiðjunnar."}),e.jsx("span",{children:"Hringið til að panta"})]}),e.jsx("div",{className:"ps-foot-bottom",children:e.jsx(vs,{dark:!0})})]})]}),e.jsx("img",{src:w.slice,alt:"",className:"ps-slice",draggable:!1,"aria-hidden":!0}),e.jsxs("a",{ref:z,href:X,className:"ps-sticky-panta","aria-label":"Hringja núna",children:[e.jsx("span",{children:"Hringja núna"}),e.jsx("img",{src:w.slice,alt:"",className:"ps-corner-slice",draggable:!1,"aria-hidden":!0})]})]})}const As=`
@font-face{font-family:'Tanker-Regular';font-weight:400;font-style:normal;font-display:swap;
  src:url('${T}fonts/tanker/fonts/Tanker-Regular.woff2') format('woff2'),
      url('${T}fonts/tanker/fonts/Tanker-Regular.woff') format('woff'),
      url('${T}fonts/tanker/fonts/Tanker-Regular.ttf') format('truetype')}
@font-face{font-family:'Satoshi';font-weight:400;font-style:normal;font-display:swap;
  src:url('${T}fonts/satoshi/Satoshi-Regular.woff2') format('woff2')}
@font-face{font-family:'Satoshi';font-weight:500;font-style:normal;font-display:swap;
  src:url('${T}fonts/satoshi/Satoshi-Medium.woff2') format('woff2')}
@font-face{font-family:'Satoshi';font-weight:700;font-style:normal;font-display:swap;
  src:url('${T}fonts/satoshi/Satoshi-Bold.woff2') format('woff2')}
.ps-root{position:relative;min-height:100vh;overflow-x:clip}

.ps-bgwrap{position:fixed;inset:-24px;z-index:0;overflow:hidden;pointer-events:none}
.ps-bgimg{width:100%;height:100%;object-fit:cover;display:block;will-change:transform}

/* ---- hero opener (NORMAL FLOW) - same architecture as flatbakan/eldofninn's fixed version. ---- */
.ps-track{position:relative;z-index:2;height:100svh}
.ps-stage-pin{position:relative;height:100svh;overflow:hidden;background:${D};
  display:flex;flex-direction:column;padding:clamp(1rem,2.4vw,1.8rem) clamp(1rem,3vw,2.4rem) clamp(1.4rem,3vw,2.2rem)}
.ps-grain-hero{position:absolute;inset:0;z-index:0;pointer-events:none}

.ps-nav{position:relative;z-index:6;width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.ps-nav-grp{display:flex;gap:.6rem}
.ps-badge{width:64px;height:64px;border-radius:50%;background:${r};display:flex;align-items:center;justify-content:center;
  flex:0 0 auto;box-shadow:0 8px 20px -8px rgba(28,18,8,.55)}
.ps-badge img{width:80%;height:80%;object-fit:contain;filter:brightness(0) invert(1)}
.ps-nav .ps-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}

.ps-burger{display:none;position:relative;z-index:8;width:44px;height:44px;flex:0 0 auto;padding:0;
  align-items:center;justify-content:center;background:${l};border:1.5px solid ${r};
  border-radius:50%;box-shadow:2px 2px 0 ${r};cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
.ps-burger:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${r}}
.ps-burger:active{transform:translate(0,0);box-shadow:1px 1px 0 ${r}}
.ps-burger-lines{position:relative;width:18px;height:13px}
.ps-burger-lines span{position:absolute;left:0;width:100%;height:2px;border-radius:2px;background:${r};
  transition:top .3s cubic-bezier(.65,0,.35,1),transform .3s cubic-bezier(.65,0,.35,1),opacity .2s ease}
.ps-burger-lines span:nth-child(1){top:0}
.ps-burger-lines span:nth-child(2){top:5.5px}
.ps-burger-lines span:nth-child(3){top:11px}
.ps-burger[data-open="true"] .ps-burger-lines span:nth-child(1){top:5.5px;transform:rotate(45deg)}
.ps-burger[data-open="true"] .ps-burger-lines span:nth-child(2){opacity:0;transform:scaleX(0)}
.ps-burger[data-open="true"] .ps-burger-lines span:nth-child(3){top:5.5px;transform:rotate(-45deg)}

.ps-mbackdrop{display:none;position:fixed;inset:0;z-index:59;background:rgba(28,18,8,.28);
  opacity:0;pointer-events:none;transition:opacity .3s ease}
.ps-mbackdrop[data-open="true"]{opacity:1;pointer-events:auto}

.ps-mmenu{display:none;position:fixed;left:clamp(1rem,3vw,2.4rem);right:clamp(1rem,3vw,2.4rem);
  top:calc(clamp(1rem,2.4vw,1.8rem) + 64px + .6rem);z-index:60;flex-direction:column;gap:.35rem;
  padding:.7rem;background:${l};border:2px solid ${r};border-radius:20px;box-shadow:5px 5px 0 ${r};
  clip-path:inset(0 0 100% 0 round 20px);transform:translateY(-6px);opacity:0;pointer-events:none;
  transition:clip-path .42s cubic-bezier(.22,1,.36,1),transform .42s cubic-bezier(.22,1,.36,1),opacity .28s ease}
.ps-mmenu[data-open="true"]{clip-path:inset(0 0 0% 0 round 20px);transform:none;opacity:1;pointer-events:auto}
.ps-mmenu a{font-family:${y};font-weight:700;font-size:1.05rem;color:${r};text-decoration:none;
  padding:.75rem .9rem;border-radius:12px;opacity:0;transform:translateY(-8px);
  transition:background .15s ease,opacity .38s ease .1s,transform .38s cubic-bezier(.22,1,.36,1) .1s}
.ps-mmenu a:active{background:rgba(28,18,8,.07)}
.ps-mmenu[data-open="true"] a{opacity:1;transform:none}
.ps-mmenu[data-open="true"] a:nth-child(1){transition-delay:.06s}
.ps-mmenu[data-open="true"] a:nth-child(2){transition-delay:.11s}
.ps-mmenu[data-open="true"] a:nth-child(3){transition-delay:.16s}
.ps-mmenu[data-open="true"] a:nth-child(4){transition-delay:.21s}
.ps-mmenu a.ps-mmenu-cta{background:${f};color:${l};text-align:center;margin-top:.15rem;
  font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:.92rem}

.ps-hero-mid{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:0;
  transform:scale(1.05);transform-origin:50% 42%;transition:transform 1.05s cubic-bezier(.16,.72,.12,1);will-change:transform}
.ps-root[data-revealed] .ps-hero-mid{transform:none}
.ps-hero-word{position:absolute;top:58%;left:50%;transform:translate(-50%,-50%);z-index:0;pointer-events:none;
  font-family:${b};font-weight:400;font-size:clamp(5.5rem,21vw,19rem);line-height:1;color:rgba(150,80,6,.20);
  letter-spacing:.01em;white-space:nowrap;text-transform:uppercase}
.ps-hero-copy{position:relative;z-index:3;text-align:center;pointer-events:none;margin-top:clamp(.6rem,3vh,2.4rem)}
.ps-h1{font-family:${b};font-weight:400;font-size:clamp(2.4rem,6vw,4.6rem);line-height:.92;letter-spacing:-.02em;margin:0;color:${r}}
.ps-sneid{font-family:${b};font-style:italic;font-weight:400;font-size:1.15em;line-height:1.3;
  display:inline-block;transform:rotate(-3deg);color:${f};
  text-shadow:0 1px 0 rgba(28,17,8,.55),0 3px 16px rgba(28,17,8,.3)}
.ps-lede{font-size:clamp(1rem,1.4vw,1.16rem);line-height:1.5;color:rgba(28,18,8,.82);max-width:40ch;margin:.85rem auto 0}
.ps-claim{display:inline-flex;align-items:center;gap:.4rem;margin-top:.9rem;padding:.5rem 1.15rem;
  background:${l};border:1.5px dashed ${f};border-radius:999px;transform:rotate(-1.5deg);
  font-family:${b};font-weight:400;font-size:.82rem;letter-spacing:.03em;text-transform:uppercase;
  color:${f};box-shadow:0 8px 18px -10px rgba(28,18,8,.45)}
.ps-claim-star{font-size:.85em;line-height:1}

.ps-pizza{position:relative;width:min(60vw,465px,max(220px,calc(100svh - 26rem)));aspect-ratio:1;margin:auto;
  transform:rotate(calc(var(--spin,0)*1deg));transform-origin:50% 50%;z-index:2;will-change:transform}
.ps-glow{position:absolute;left:50%;top:52%;width:82%;height:82%;transform:translate(-50%,-50%);border-radius:50%;
  background:radial-gradient(circle,rgba(120,60,0,.26),rgba(120,60,0,0) 66%);filter:blur(4px)}
.ps-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 18px rgba(90,45,0,.30))}
.ps-whole{opacity:calc(1 - var(--cut,0))}
.ps-sl{opacity:var(--cut,0);will-change:transform;
  transform:translate(calc(var(--ux,0) * var(--spread,0px)),calc(var(--uy,0) * var(--spread,0px)))}

.ps-slice{position:fixed;left:0;top:0;z-index:55;width:var(--slw,180px);height:auto;pointer-events:none;
  opacity:calc(var(--cut,0) * (1 - var(--armed,0)));will-change:transform;
  transform:translate(var(--slx,0),var(--sly,0)) translate(-50%,-50%) rotate(var(--slr,0));
  filter:drop-shadow(0 16px 24px rgba(90,45,0,.42))}

.ps-scrollcue{position:absolute;left:clamp(1rem,3vw,2.4rem);bottom:clamp(1rem,2.4vw,1.6rem);z-index:4;display:flex;flex-direction:column;
  align-items:flex-start;gap:.4rem;color:rgba(28,18,8,.5);font-family:${y};font-weight:600;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.14em;opacity:calc(1 - var(--seq,0)*6);pointer-events:none}
.ps-scrollcue i{width:1px;height:26px;background:rgba(28,18,8,.4);animation:pscue 1.7s ease-in-out infinite}
@keyframes pscue{0%,100%{transform:scaleY(.4);transform-origin:top;opacity:.3}50%{transform:scaleY(1);opacity:.8}}

.ps-pill{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.86rem;
  padding:.5rem 1.05rem;border:1.5px solid ${r};border-radius:999px;text-decoration:none;white-space:nowrap;
  box-shadow:2px 2px 0 ${r};transition:transform .15s ease,box-shadow .15s ease}
.ps-pill:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${r}}
.ps-btn{display:inline-flex;align-items:center;font-family:${y};font-weight:700;font-size:.92rem;
  padding:.8rem 1.5rem;border:2px solid ${r};border-radius:999px;background:${f};color:${l};
  text-decoration:none;box-shadow:3px 3px 0 ${r};transition:transform .15s ease,box-shadow .15s ease}
.ps-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 ${r}}
.ps-btn-cream{background:${l};color:${r}}
.ps-chip{display:inline-flex;align-items:center;font-family:${y};font-weight:600;font-size:.9rem;
  padding:.6rem 1.15rem;border:1.5px solid ${r};border-radius:999px;background:transparent;color:${r};
  text-decoration:none;transition:background .15s,color .15s}
.ps-chip:hover{background:${r};color:${l}}

.ps-sticky-panta{position:fixed;z-index:50;right:clamp(.9rem,2.4vw,1.6rem);bottom:clamp(.9rem,2.4vw,1.5rem);
  display:inline-flex;align-items:center;justify-content:center;
  background:${f};color:${l};font-family:${y};font-weight:700;text-transform:uppercase;letter-spacing:.05em;
  font-size:.82rem;padding:.85rem 1.4rem;border-radius:14px;border:2px solid ${r};box-shadow:3px 3px 0 ${r};
  text-decoration:none;transition:box-shadow .18s ease,transform .18s ease}
.ps-sticky-panta:hover{box-shadow:5px 5px 0 ${r};transform:translate(-2px,-2px)}
.ps-corner-slice{position:absolute;left:50%;top:-67px;width:56px;height:auto;pointer-events:none;
  opacity:var(--armed,0);filter:drop-shadow(0 8px 14px rgba(90,45,0,.4));
  animation:psCornerIdle 6s ease-in-out infinite}
@keyframes psCornerIdle{
  0%,100%{transform:translateX(-50%) rotate(-6deg) translateY(0)}
  50%{transform:translateX(-50%) rotate(3deg) translateY(-3px)}
}

.ps-frame{position:relative;z-index:1;max-width:min(1360px,90vw);margin:0 auto clamp(.9rem,2vw,1.6rem);background:${Z};
  border:9px solid ${r};border-radius:clamp(24px,3vw,40px);overflow:clip;box-shadow:0 40px 90px -50px rgba(28,18,8,.6)}
.ps-h2{font-family:${b};font-weight:400;font-size:clamp(1.9rem,3.6vw,3rem);line-height:.98;letter-spacing:-.015em;margin:0}
.ps-body{font-size:1.04rem;line-height:1.6;color:${j};max-width:56ch}

.ps-sec{padding:clamp(3rem,6vw,5.5rem) clamp(1.2rem,4vw,3.5rem)}
.ps-sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:1.5rem;flex-wrap:wrap;margin-bottom:2.2rem}
.ps-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem}
.ps-cards>div{display:flex}
.ps-card{display:flex;flex-direction:column;width:100%;background:${l};border:2px solid ${r};border-radius:22px;overflow:clip;box-shadow:5px 5px 0 ${r};
  transition:transform .18s ease,box-shadow .18s ease}
.ps-card:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 ${r}}
.ps-card-img{position:relative;aspect-ratio:4/3;overflow:hidden;background:${Z};flex:none}
.ps-card-img img{width:100%;height:100%;object-fit:cover;display:block}
.ps-tag{position:absolute;top:.8rem;left:.8rem;background:${f};color:${l};font-family:${y};font-weight:700;
  font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;padding:.32rem .7rem;border-radius:999px;border:1.5px solid ${r}}
.ps-card-body{display:flex;flex-direction:column;flex:1;padding:1.2rem 1.3rem 1.4rem}
.ps-card-top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
.ps-card-top h3{font-family:${b};font-weight:400;font-size:1.4rem;margin:0;letter-spacing:-.01em}
.ps-price{font-family:${b};font-weight:400;font-size:1.3rem;color:${f};white-space:nowrap}
.ps-price em{font-family:${y};font-size:.62em;font-style:normal;color:${j}}
.ps-card-body p{font-size:.9rem;line-height:1.45;color:${j};margin:.5rem 0 0;min-height:2.9em;
  display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}
.ps-cat{display:flex;justify-content:center;margin-top:2.4rem}

.ps-dock-wrap{position:relative;height:100px;width:100%;max-width:520px;margin:0 auto}
.ps-dock-wrap .dock-outer{margin:0;width:100%;justify-content:center}
.ps-dock-wrap .dock-panel{background:transparent;border:none;padding:0 .5rem;gap:.6rem}
.ps-dock-wrap .dock-item{background:${l};border:1.5px solid ${r};color:${r};box-shadow:2px 2px 0 ${r}}
.ps-dock-wrap .dock-item:hover,.ps-dock-wrap .dock-item:focus-visible{background:${f};color:${l}}
.ps-dock-wrap .dock-caption{color:${j};font-family:${y};font-weight:600;font-size:.68rem}

.ps-band{background:${l};border-top:2px solid ${r};border-bottom:2px solid ${r}}
.ps-story{max-width:760px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.2rem}
.ps-award{display:inline-flex;flex-direction:column;padding:.7rem 1.3rem;border:1.5px dashed ${f};border-radius:14px}
.ps-award-t{font-family:${b};font-weight:400;color:${f}}
.ps-award-s{font-size:.82rem;color:${j}}

.ps-truck{background:${D};border-top:2px solid ${r};border-bottom:2px solid ${r};
  display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(1.5rem,4vw,3rem);align-items:start}
.ps-truck-lede{font-size:1.05rem;line-height:1.5;color:rgba(28,18,8,.82);margin:1rem 0 1.6rem;max-width:32ch}
.ps-pkgs{display:grid;gap:1.2rem}
.ps-pkg{background:${l};border:2px solid ${r};border-radius:18px;padding:1.3rem 1.4rem;box-shadow:4px 4px 0 ${r}}
.ps-pkg h3{font-family:${b};font-weight:400;font-size:1.5rem;margin:0}
.ps-pkg p{font-size:.9rem;line-height:1.4;color:${j};margin:.4rem 0 .9rem}
.ps-rate{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-top:1px solid rgba(28,23,18,.14);font-size:.95rem}
.ps-rate em{font-style:normal;color:${j};font-size:.8rem}
.ps-rate-p{font-family:${b};font-weight:400;color:${f};white-space:nowrap}

.ps-visit{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3rem);align-items:center}
.ps-visit-cta{display:flex;gap:.8rem;margin-top:1.4rem;flex-wrap:wrap}
.ps-hours{border:2px solid ${r};border-radius:18px;overflow:clip}
.ps-hour{display:flex;justify-content:space-between;gap:1rem;padding:.85rem 1.2rem;font-size:.98rem;border-bottom:1px solid rgba(28,23,18,.12)}
.ps-hour:last-child{border-bottom:none}
.ps-hour span:first-child{color:${j}}
.ps-hour span:last-child{font-weight:700}

.ps-footer{background:${r};color:${l};padding:clamp(2.2rem,4vw,3rem) clamp(1.2rem,4vw,3.5rem)}
.ps-foot-top{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap}
.ps-badge-sm{width:54px;height:54px;background:${l}}
.ps-badge-sm img{filter:none}
.ps-foot-links{display:flex;gap:1.4rem;flex-wrap:wrap}
.ps-foot-links a{color:rgba(252,245,231,.72);text-decoration:none;font-size:.95rem}
.ps-foot-links a:hover{color:${l}}
.ps-foot-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-top:1.8rem;padding-top:1.3rem;
  border-top:1px solid rgba(252,245,231,.16);color:rgba(252,245,231,.5);font-size:.78rem}

/* ---- responsive ---- */
@media (max-width:860px){
  .ps-frame{max-width:calc(100vw - 1.2rem);margin:0 auto .6rem;border-width:6px}
  .ps-bgwrap{display:none}
  .ps-cards,.ps-truck,.ps-visit{grid-template-columns:1fr}
  .ps-nav{gap:.5rem}
  .ps-pizza{width:min(85vw,385px)}
  .ps-sec-head{flex-direction:column;align-items:flex-start}
}
@media (max-width:520px){
  .ps-nav-grp{display:none}
  .ps-burger{display:flex}
  .ps-mbackdrop{display:block}
  .ps-mmenu{display:flex}
}
@media (prefers-reduced-motion:reduce){
  .ps-track{height:100svh}
  .ps-scrollcue{display:none}
  .ps-corner-slice{animation:none}
  .ps-hero-mid{transform:none;transition:none}
}
`;export{Bs as default};
