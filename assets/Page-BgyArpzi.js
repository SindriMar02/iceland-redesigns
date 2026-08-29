const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Grainient-BAPjzHxi.js","assets/index-BQacMFbV.js","assets/index-BDjVxxPe.css","assets/Triangle-GlFcswsc.js","assets/Grainient-BdwqdHbZ.css"])))=>i.map(i=>d[i]);
import{r as n,ao as Re,s as oe,j as e,ap as pa,aq as fa,ar as b,as as P,at as ha,au as xa,av as Pe,aw as Te,ax as Le,ay as Me,az as ga,aA as le,aB as ka,aC as _e,aD as Fe,aE as Ce,aF as ua,aG as De,aH as ba,_ as wa,aI as ce,aJ as Oe}from"./index-BQacMFbV.js";import ya from"./lenis-niKyKZQP.js";import{D as va,T as ja,P as $a}from"./Dock-B6jZPnce.js";import{S as Na}from"./SndrBadge-BnasWyjt.js";import{C as za}from"./cup-soda-CMO7yQGh.js";import{B as Ea}from"./baby-BjgUZwdD.js";import{L as Aa}from"./leaf-BAZrIEAQ.js";import{F as Sa}from"./flame-CtU0aslf.js";import{S as Ra}from"./star-DsKvrXxE.js";import"./createLucideIcon-VrOa7SU3.js";import"./react-Cjklg90W.js";import"./use-spring-s_IgtCo7.js";const Ie=n.lazy(()=>wa(()=>import("./Grainient-BAPjzHxi.js"),__vite__mapDeps([0,1,2,3,4]))),Pa={Pizzur:e.jsx($a,{size:20,strokeWidth:1.8}),Vinsælar:e.jsx(Ra,{size:20,strokeWidth:1.8}),Sterkar:e.jsx(Sa,{size:20,strokeWidth:1.8}),Vegan:e.jsx(Aa,{size:20,strokeWidth:1.8}),Barnamatseðill:e.jsx(Ea,{size:20,strokeWidth:1.8}),Drykkir:e.jsx(za,{size:20,strokeWidth:1.8})},C="/iceland-redesigns/",m="#141210",D="#1F1B18",Be="#26211C",d="#F4EEE4",j="rgba(244,238,228,0.6)",l="rgba(244,238,228,0.14)",qe="#2E2823",h="#E64A2C",$=pa,x="'Tanker-Regular', Georgia, serif",w="'Satoshi', system-ui, sans-serif";function c({children:N,className:T="",delay:z=0,y:L=26}){const E=n.useRef(null);return n.useEffect(()=>{const y=E.current;if(!y)return;const g=()=>{y.style.opacity="1",y.style.transform="none"},k=new IntersectionObserver(Z=>Z.forEach(ee=>{ee.isIntersecting&&(g(),k.disconnect())}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});k.observe(y);const O=window.setTimeout(g,1600);return()=>{k.disconnect(),window.clearTimeout(O)}},[]),e.jsx("div",{ref:E,className:T,style:{opacity:0,transform:`translateY(${L}px)`,transition:`opacity 1.1s ease ${z}ms, transform 1.1s cubic-bezier(.16,.7,.2,1) ${z}ms`},children:N})}function Q({children:N,href:T=P,active:z=!1,ext:L=!0,solid:E=!1}){const y=z||E;return e.jsx("a",{href:T,...L?{target:"_blank",rel:"noreferrer"}:{},className:"ak-pill",style:{background:y?qe:"rgba(20,18,16,.14)",color:y?d:m,borderColor:m},children:N})}function Va(){const N=n.useRef(null),T=n.useRef(null),z=n.useRef(null),L=n.useRef(null),E=n.useRef(null),y=n.useRef(null),[g,k]=n.useState(!1);n.useEffect(()=>{document.title="Askur Pizzeria — Eldbakað á súrdeigsbotni á Egilsstöðum"},[]),n.useEffect(()=>{if(!g)return;const a=t=>{t.key==="Escape"&&k(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[g]);const O=n.useMemo(()=>["fonts","hero","logo","grain"],[]),[Z,ee]=n.useState({}),[de,Ye]=n.useState(!1),ae=n.useCallback(a=>ee(t=>t[a]?t:{...t,[a]:!0}),[]),me=O.reduce((a,t)=>a+(Z[t]?1:0),0),M=de||me===O.length,Ke=de?1:me/O.length;n.useEffect(()=>{let a=!0;const t=u=>{a&&ae(u)},s=(u,i)=>{const f=new Image;f.src=u,f.decode().catch(()=>{}).finally(()=>{i&&t(i)})};(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>t("fonts")),s(b.whole,"hero"),s(b.logo,"logo"),Re.forEach(u=>s(u.img)),s(b.slice),s(b.grid);const p=window.setTimeout(()=>{a&&Ye(!0)},4500);return()=>{a=!1,window.clearTimeout(p)}},[ae]);const[Ue,He]=n.useState(!0);return n.useEffect(()=>{if(!M)return;const a=window.setTimeout(()=>He(!1),780);return()=>window.clearTimeout(a)},[M]),n.useEffect(()=>{var s;if(!M){oe("#141210");return}oe($);const a=(s=N.current)==null?void 0:s.querySelector(".ak-frame");if(!a)return;const t=new IntersectionObserver(([p])=>oe(p.isIntersecting?m:$),{rootMargin:"0px 0px -92% 0px"});return t.observe(a),()=>t.disconnect()},[M]),n.useEffect(()=>{const a=y.current;if(!a||window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;const t=18,s={x:0,y:0},p={x:0,y:0},u=B=>{s.x=(B.clientX/window.innerWidth-.5)*2,s.y=(B.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",u,{passive:!0});let i=0,f=!document.hidden;const A=()=>{p.x+=(s.x-p.x)*.05,p.y+=(s.y-p.y)*.05,a.style.transform=`translate3d(${(-p.x*t).toFixed(1)}px, ${(-p.y*t).toFixed(1)}px, 0)`,i=requestAnimationFrame(A)},_=()=>{f&&i===0&&(i=requestAnimationFrame(A))},I=()=>{i!==0&&(cancelAnimationFrame(i),i=0)},Y=()=>{f=!document.hidden,f?_():I()};return document.addEventListener("visibilitychange",Y),_(),()=>{I(),window.removeEventListener("mousemove",u),document.removeEventListener("visibilitychange",Y)}},[]),n.useEffect(()=>{const a=N.current,t=T.current,s=z.current,p=L.current,u=E.current;if(!a||!t||!s||!p||!u)return;const i=a.style,f=r=>Math.min(1,Math.max(0,r)),A=(r,o,v)=>r+(o-r)*v,_=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,I=r=>1-Math.pow(1-r,3),Y=window.matchMedia("(prefers-reduced-motion:reduce)").matches,B=.06,Ve=.52,pe=.12,We=.3,fe=.3,re=.54,he=.56,Xe=.94,Ge=360,Je=.1,Qe=.06;let q=0,xe=0,ge=0,ke=0,ue=0;const K=()=>{const r=p.getBoundingClientRect(),o=s.getBoundingClientRect(),v=u.getBoundingClientRect();q=p.offsetWidth,xe=(r.left+r.right)/2-o.left,ge=(r.top+r.bottom)/2-o.top,ke=v.left+v.width/2,ue=v.top};K();const U=r=>{const o=_(f((r-B)/(Ve-B)))*Ge,v=f((r-pe)/(We-pe)),na=I(f((r-fe)/(re-fe))),sa=f((r-re)/(1-re)),G=_(f((r-he)/(Xe-he))),ie=(na*Je+sa*Qe)*q;i.setProperty("--spin",o.toFixed(2)),i.setProperty("--cut",v.toFixed(3)),i.setProperty("--spread",ie.toFixed(1)+"px");const J=o*Math.PI/180,ze=ce.cx*q+Oe.ux*ie,Ee=ce.cy*q+Oe.uy*ie,ia=xe+(ze*Math.cos(J)-Ee*Math.sin(J)),oa=ge+(ze*Math.sin(J)+Ee*Math.cos(J)),la=ce.w*q,Ae=56,ca=Ae/.689,da=ue+14-ca/2;i.setProperty("--slx",A(ia,ke,G).toFixed(1)+"px"),i.setProperty("--sly",A(oa,da,G).toFixed(1)+"px"),i.setProperty("--slw",A(la,Ae,G).toFixed(1)+"px"),i.setProperty("--slr",A(o,-6,G).toFixed(1)+"deg");const Se=.85,ma=_(f((r-Se)/(.97-Se)));i.setProperty("--armed",ma.toFixed(3))};if(Y){t.style.height="100svh",U(0);return}U(0),i.setProperty("--seq","0.000");let H="idle";const be=()=>{K()},V=new ya({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!0});let te=0;const we=r=>{V.raf(r),te=requestAnimationFrame(we)};te=requestAnimationFrame(we);const ye=3400;let W=0,F=0,X=0,S=1,ne=0;const Ze=300,ea=2.1,ve=6,aa=r=>{const o=r-ne;if(ne=r,o<Ze||S>=ve)return;const v=(r-F)*S;S=Math.min(ve,S*ea),F=r-v/S},je=()=>{H!=="released"&&(H="released",window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",se),window.clearTimeout(X),t.style.height="100svh",U(1),i.setProperty("--seq","1.000"),V.start())},$e=r=>{F||(F=r);const o=I(f((r-F)*S/ye));if(i.setProperty("--seq",o.toFixed(3)),U(o),o<1){W=requestAnimationFrame($e);return}je()},R=r=>{if(r.type!=="touchmove"&&r.cancelable&&r.preventDefault(),H!=="idle"){aa(performance.now());return}K(),H="playing",F=0,S=1,ne=performance.now(),W=requestAnimationFrame($e),window.clearTimeout(X),X=window.setTimeout(je,ye*2)},ra=new Set([" ","Spacebar","PageDown","PageUp","ArrowDown","ArrowUp","End","Home"]),ta=r=>{if(!(r instanceof HTMLElement))return!1;const o=r.tagName;return o==="INPUT"||o==="TEXTAREA"||o==="SELECT"||r.isContentEditable},se=r=>{r.defaultPrevented||r.metaKey||r.ctrlKey||r.altKey||!ra.has(r.key)||ta(r.target)||R(r)};V.stop(),window.addEventListener("wheel",R,{passive:!1}),window.addEventListener("touchmove",R,{passive:!0}),window.addEventListener("keydown",se),window.addEventListener("resize",be);let Ne=!1;return document.fonts.ready.then(()=>{Ne||K()}),()=>{Ne=!0,window.removeEventListener("wheel",R),window.removeEventListener("touchmove",R),window.removeEventListener("keydown",se),window.removeEventListener("resize",be),window.clearTimeout(X),W&&cancelAnimationFrame(W),cancelAnimationFrame(te),V.destroy()}},[]),e.jsxs("div",{ref:N,className:"ak-root","data-revealed":M?"":void 0,style:{background:m,color:d,fontFamily:w},children:[e.jsx("style",{children:Ta}),Ue&&e.jsx(fa,{visible:!M,progress:Ke}),e.jsx("div",{ref:y,className:"ak-bgwrap","aria-hidden":!0,children:e.jsx(n.Suspense,{fallback:null,children:e.jsx(Ie,{className:"ak-bg-grain",color1:"#0D0B09",color2:"#3A1A06",color3:$,contrast:.7,saturation:.65,grainAmount:.09,grainScale:2.8,warpAmplitude:26,warpFrequency:2.1,timeSpeed:.045,zoom:1.35,maxDpr:1,fps:24,onReady:()=>{}})})}),e.jsx("div",{ref:T,className:"ak-track",children:e.jsxs("div",{ref:z,className:"ak-stage-pin",children:[e.jsx(n.Suspense,{fallback:null,children:e.jsx(Ie,{className:"ak-grain-hero",color1:"#F6B663",color2:$,color3:"#C17D23",contrast:.9,saturation:.85,grainAmount:.05,grainScale:2.2,warpAmplitude:20,warpFrequency:3,timeSpeed:.08,zoom:1.1,maxDpr:1,fps:30,onReady:()=>ae("grain")})}),e.jsxs("header",{className:"ak-nav",children:[e.jsxs("div",{className:"ak-nav-grp",children:[e.jsx(Q,{href:"#top",ext:!1,active:!0,children:"Heim"}),e.jsx(Q,{href:"#sagan",ext:!1,children:"Um okkur"})]}),e.jsx("a",{href:"#top",className:"ak-badge",children:e.jsx("img",{src:b.logo,alt:"Askur Pizzeria"})}),e.jsxs("div",{className:"ak-nav-grp",children:[e.jsx(Q,{href:"#matsedill",ext:!1,children:"Matseðill"}),e.jsx(Q,{href:P,solid:!0,children:"Panta"})]}),e.jsx("button",{type:"button",className:"ak-burger","data-open":g,"aria-expanded":g,"aria-controls":"ak-mmenu","aria-label":g?"Loka valmynd":"Opna valmynd",onClick:()=>k(a=>!a),children:e.jsxs("span",{className:"ak-burger-lines",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]}),e.jsx("div",{className:"ak-mbackdrop","data-open":g,"aria-hidden":!0,onClick:()=>k(!1)}),e.jsxs("nav",{id:"ak-mmenu",className:"ak-mmenu","data-open":g,"aria-label":"Aðalvalmynd","aria-hidden":!g,children:[e.jsx("a",{href:"#top",onClick:()=>k(!1),children:"Heim"}),e.jsx("a",{href:"#sagan",onClick:()=>k(!1),children:"Um okkur"}),e.jsx("a",{href:"#matsedill",onClick:()=>k(!1),children:"Matseðill"}),e.jsx("a",{href:P,target:"_blank",rel:"noreferrer",className:"ak-mmenu-cta",onClick:()=>k(!1),children:"Panta núna"})]}),e.jsxs("div",{className:"ak-hero-mid",children:[e.jsx("div",{className:"ak-hero-word","aria-hidden":!0,children:"ASKUR"}),e.jsxs("div",{className:"ak-hero-copy",children:[e.jsxs("h1",{className:"ak-h1",children:["Fáðu þér ",e.jsx("span",{className:"ak-sneid",children:"sneið"})]}),e.jsx("p",{className:"ak-lede",children:"Eldbakað á súrdeigsbotni í hjarta Egilsstaða."}),e.jsxs("div",{className:"ak-claim",children:[e.jsx("span",{className:"ak-claim-star",children:"★"}),"Má bjóða þér eina glóðvolga?"]})]}),e.jsxs("div",{ref:L,className:"ak-pizza","aria-hidden":!0,children:[e.jsx("div",{className:"ak-glow"}),e.jsx("img",{src:b.whole,alt:"",className:"ak-layer ak-whole",draggable:!1}),Re.filter(a=>!a.traveller).map(a=>e.jsx("img",{src:a.img,alt:"",className:"ak-layer ak-sl",draggable:!1,style:{"--ux":a.ux,"--uy":a.uy}},a.img))]})]}),e.jsxs("div",{className:"ak-scrollcue","aria-hidden":!0,children:[e.jsx("span",{children:"Skrunaðu"}),e.jsx("i",{})]})]})}),e.jsxs("div",{className:"ak-frame",children:[e.jsxs("section",{id:"matsedill",className:"ak-sec",children:[e.jsxs("div",{className:"ak-sec-head",children:[e.jsx(c,{children:e.jsx("h2",{className:"ak-h2",children:"Vinsælustu pizzurnar"})}),e.jsx(c,{delay:80,children:e.jsx("a",{href:P,target:"_blank",rel:"noreferrer",className:"ak-btn",children:"Allur matseðillinn"})})]}),e.jsx("div",{className:"ak-cards",children:ha.map((a,t)=>e.jsx(c,{delay:t*60,children:e.jsxs("article",{className:"ak-card",children:[e.jsxs("div",{className:"ak-card-img",children:[e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",width:520,height:390}),a.best&&e.jsx("span",{className:"ak-tag",children:"Vinsæl"})]}),e.jsxs("div",{className:"ak-card-body",children:[e.jsxs("div",{className:"ak-card-top",children:[e.jsx("h3",{children:a.name}),e.jsxs("span",{className:"ak-price",children:[a.price,e.jsx("em",{children:" kr"})]})]}),e.jsx("p",{children:a.desc})]})]})},a.name))}),e.jsx("div",{className:"ak-cat ak-dock-wrap",children:e.jsx(va,{items:xa.map(a=>({icon:Pa[a.label]??e.jsx(ja,{size:20,strokeWidth:1.8}),label:a.label,onClick:()=>window.open(P,"_blank","noreferrer")})),magnification:62,distance:130,panelHeight:84,dockHeight:84,baseItemSize:44})})]}),e.jsx("div",{className:"ak-marquee","aria-hidden":!0,children:e.jsx("div",{className:"ak-marquee-track",children:[...Pe,...Pe].map((a,t)=>e.jsxs("span",{className:"ak-marquee-item",children:[a,e.jsx("i",{children:"◆"})]},t))})}),e.jsxs("section",{className:"ak-cinema","aria-label":"Borðið dekkað",children:[e.jsx("div",{className:"ak-cinema-media",style:{backgroundImage:`url(${b.grid})`}}),e.jsx("div",{className:"ak-cinema-veil"}),e.jsxs("div",{className:"ak-cinema-copy",children:[e.jsx(c,{y:18,children:e.jsx("p",{className:"ak-kicker",children:"Beint úr ofninum"})}),e.jsx(c,{delay:90,y:22,children:e.jsxs("h2",{className:"ak-cinema-h",children:["Borðið",e.jsx("br",{}),"dekkað"]})}),e.jsx(c,{delay:180,y:18,children:e.jsx("a",{href:P,target:"_blank",rel:"noreferrer",className:"ak-btn",children:"Sjá matseðilinn"})})]})]}),e.jsx("section",{id:"sagan",className:"ak-sec ak-band",children:e.jsxs("div",{className:"ak-story",children:[e.jsx(c,{className:"ak-story-media",children:e.jsx("img",{src:b.interior,alt:"Veitingasalur Asks á Egilsstöðum",loading:"lazy"})}),e.jsxs("div",{className:"ak-story-copy",children:[e.jsx(c,{children:e.jsx("h2",{className:"ak-h2",children:Te.heading})}),e.jsx(c,{delay:70,children:e.jsx("p",{className:"ak-body",children:Te.body})}),e.jsx(c,{delay:130,children:e.jsxs("div",{className:"ak-award",children:[e.jsxs("span",{className:"ak-award-t",children:["◆ ",Le.title]}),e.jsx("span",{className:"ak-award-s",children:Le.sub})]})})]})]})}),e.jsxs("section",{id:"taproom",className:"ak-sec ak-taproom",children:[e.jsxs("div",{className:"ak-taproom-head",children:[e.jsx(c,{children:e.jsx("h2",{className:"ak-h2",style:{color:d},children:"Askur Taproom"})}),e.jsx(c,{delay:70,children:e.jsx("p",{className:"ak-taproom-lede",children:Me.intro})}),e.jsx(c,{delay:120,children:e.jsx("a",{href:ga,target:"_blank",rel:"noreferrer",className:"ak-btn",children:"Kíktu á Taproom"})})]}),e.jsx("div",{className:"ak-pkgs",children:Me.packages.map((a,t)=>e.jsx(c,{delay:t*70,children:e.jsxs("div",{className:"ak-pkg",children:[e.jsx("h3",{children:a.name}),e.jsx("p",{children:a.line}),a.rates.map(s=>e.jsxs("div",{className:"ak-rate",children:[e.jsxs("span",{children:[s.label," ",e.jsx("em",{children:s.sub})]}),e.jsx("span",{className:"ak-rate-p",children:s.price})]},s.label))]})},a.name))})]}),e.jsx("section",{id:"stadur",className:"ak-sec",children:e.jsxs("div",{className:"ak-visit",children:[e.jsxs("div",{children:[e.jsx(c,{children:e.jsx("h2",{className:"ak-h2",children:le.street})}),e.jsx(c,{delay:60,children:e.jsxs("p",{className:"ak-body",style:{marginTop:".3rem"},children:[le.town,". ",ka.body]})}),e.jsx(c,{delay:120,children:e.jsxs("div",{className:"ak-visit-cta",children:[e.jsx("a",{href:_e,target:"_blank",rel:"noreferrer",className:"ak-btn",children:"Sjá á korti"}),e.jsx("a",{href:Ce,className:"ak-chip",children:Fe})]})})]}),e.jsx(c,{delay:60,children:e.jsx("div",{className:"ak-hours",children:ua.map(a=>e.jsxs("div",{className:"ak-hour",children:[e.jsx("span",{children:a.day}),e.jsx("span",{children:a.time})]},a.day))})})]})}),e.jsxs("footer",{className:"ak-footer",children:[e.jsxs("div",{className:"ak-foot-top",children:[e.jsx("a",{href:"#top",className:"ak-foot-logo",children:e.jsx("img",{src:b.logo,alt:"Askur Pizzeria"})}),e.jsxs("div",{className:"ak-foot-links",children:[e.jsx("a",{href:_e,target:"_blank",rel:"noreferrer",children:le.street}),e.jsx("a",{href:Ce,children:Fe}),e.jsx("a",{href:`mailto:${De}`,children:De}),e.jsx("a",{href:ba.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),e.jsxs("div",{className:"ak-foot-bottom",children:[e.jsx("span",{children:"Frumgerð í hönnun, sýnishorn, ekki opinber vefur Asks Pizzeria."}),e.jsx("span",{children:"Pantanir keyra á askurpizzeria.is"})]}),e.jsx("div",{className:"ak-foot-bottom",children:e.jsx(Na,{dark:!0})})]})]}),e.jsx("img",{src:b.slice,alt:"",className:"ak-slice",draggable:!1,"aria-hidden":!0}),e.jsxs("a",{ref:E,href:P,target:"_blank",rel:"noreferrer",className:"ak-sticky-panta","aria-label":"Panta núna",children:[e.jsx("span",{children:"Panta núna"}),e.jsx("img",{src:b.slice,alt:"",className:"ak-corner-slice",draggable:!1,"aria-hidden":!0})]})]})}const Ta=`
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
.ak-root{position:relative;min-height:100vh;overflow-x:clip}

.ak-bgwrap{position:fixed;inset:-24px;z-index:0;overflow:hidden;pointer-events:none;opacity:.4;will-change:transform}
.ak-bg-grain{width:100%;height:100%;display:block}

/* ---- hero opener (NORMAL FLOW) — same architecture as the fixed sibling pages ---- */
.ak-track{position:relative;z-index:2;height:100svh}
.ak-stage-pin{position:relative;height:100svh;overflow:hidden;background:${$};
  display:flex;flex-direction:column;padding:clamp(1rem,2.4vw,1.8rem) clamp(1rem,3vw,2.4rem) clamp(1.4rem,3vw,2.2rem)}
.ak-grain-hero{position:absolute;inset:0;z-index:0;pointer-events:none}

.ak-nav{position:relative;z-index:6;width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.ak-nav-grp{display:flex;gap:.6rem}
/* their REAL wide monoline wordmark, centred on the header. On the amber hero it is filtered to a
   near-black ink so the thin white strokes read against the orange (white-on-amber would wash out);
   the footer uses the raw white version on dark. */
.ak-badge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:44px;display:flex;align-items:center}
.ak-badge img{height:100%;width:auto;object-fit:contain;filter:brightness(0);opacity:.82}

.ak-burger{display:none;position:relative;z-index:8;width:44px;height:44px;flex:0 0 auto;padding:0;
  align-items:center;justify-content:center;background:${qe};border:1.5px solid ${m};
  border-radius:50%;box-shadow:2px 2px 0 ${m};cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
.ak-burger:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${m}}
.ak-burger:active{transform:translate(0,0);box-shadow:1px 1px 0 ${m}}
.ak-burger-lines{position:relative;width:18px;height:13px}
.ak-burger-lines span{position:absolute;left:0;width:100%;height:2px;border-radius:2px;background:${d};
  transition:top .3s cubic-bezier(.65,0,.35,1),transform .3s cubic-bezier(.65,0,.35,1),opacity .2s ease}
.ak-burger-lines span:nth-child(1){top:0}
.ak-burger-lines span:nth-child(2){top:5.5px}
.ak-burger-lines span:nth-child(3){top:11px}
.ak-burger[data-open="true"] .ak-burger-lines span:nth-child(1){top:5.5px;transform:rotate(45deg)}
.ak-burger[data-open="true"] .ak-burger-lines span:nth-child(2){opacity:0;transform:scaleX(0)}
.ak-burger[data-open="true"] .ak-burger-lines span:nth-child(3){top:5.5px;transform:rotate(-45deg)}

.ak-mbackdrop{display:none;position:fixed;inset:0;z-index:59;background:rgba(0,0,0,.5);
  opacity:0;pointer-events:none;transition:opacity .3s ease}
.ak-mbackdrop[data-open="true"]{opacity:1;pointer-events:auto}

.ak-mmenu{display:none;position:fixed;left:clamp(1rem,3vw,2.4rem);right:clamp(1rem,3vw,2.4rem);
  top:calc(clamp(1rem,2.4vw,1.8rem) + 60px);z-index:60;flex-direction:column;gap:.35rem;
  padding:.7rem;background:${D};border:1.5px solid ${l};border-radius:20px;box-shadow:0 20px 50px -20px #000;
  clip-path:inset(0 0 100% 0 round 20px);transform:translateY(-6px);opacity:0;pointer-events:none;
  transition:clip-path .42s cubic-bezier(.22,1,.36,1),transform .42s cubic-bezier(.22,1,.36,1),opacity .28s ease}
.ak-mmenu[data-open="true"]{clip-path:inset(0 0 0% 0 round 20px);transform:none;opacity:1;pointer-events:auto}
.ak-mmenu a{font-family:${w};font-weight:700;font-size:1.05rem;color:${d};text-decoration:none;
  padding:.75rem .9rem;border-radius:12px;opacity:0;transform:translateY(-8px);
  transition:background .15s ease,opacity .38s ease .1s,transform .38s cubic-bezier(.22,1,.36,1) .1s}
.ak-mmenu a:active{background:rgba(244,238,228,.07)}
.ak-mmenu[data-open="true"] a{opacity:1;transform:none}
.ak-mmenu[data-open="true"] a:nth-child(1){transition-delay:.06s}
.ak-mmenu[data-open="true"] a:nth-child(2){transition-delay:.11s}
.ak-mmenu[data-open="true"] a:nth-child(3){transition-delay:.16s}
.ak-mmenu[data-open="true"] a:nth-child(4){transition-delay:.21s}
.ak-mmenu a.ak-mmenu-cta{background:${h};color:#fff;text-align:center;margin-top:.15rem;
  font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:.92rem}

.ak-hero-mid{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:0;
  transform:scale(1.05);transform-origin:50% 42%;transition:transform 1.05s cubic-bezier(.16,.72,.12,1);will-change:transform}
.ak-root[data-revealed] .ak-hero-mid{transform:none}
.ak-hero-word{position:absolute;top:58%;left:50%;transform:translate(-50%,-50%);z-index:0;pointer-events:none;
  font-family:${x};font-weight:400;font-size:clamp(7rem,33vw,30rem);line-height:1;color:rgba(60,30,0,.22);
  letter-spacing:.02em;white-space:nowrap;text-transform:uppercase}
.ak-hero-copy{position:relative;z-index:3;text-align:center;pointer-events:none;margin-top:clamp(.6rem,3vh,2.4rem)}
.ak-h1{font-family:${x};font-weight:400;font-size:clamp(2.4rem,6vw,4.6rem);line-height:.92;letter-spacing:-.02em;margin:0;color:${m}}
.ak-sneid{font-family:${x};font-style:italic;font-weight:400;font-size:1.15em;line-height:1.3;
  display:inline-block;transform:rotate(-3deg);color:#7A1F0C;
  text-shadow:0 1px 0 rgba(255,240,220,.35),0 3px 16px rgba(60,20,0,.28)}
.ak-lede{font-size:clamp(1rem,1.4vw,1.16rem);line-height:1.5;color:rgba(30,18,8,.86);max-width:40ch;margin:.85rem auto 0}
.ak-claim{display:inline-flex;align-items:center;gap:.4rem;margin-top:.9rem;padding:.5rem 1.15rem;
  background:rgba(20,14,8,.9);border:1.5px dashed rgba(255,230,200,.5);border-radius:999px;transform:rotate(-1.5deg);
  font-family:${x};font-weight:400;font-size:.82rem;letter-spacing:.03em;text-transform:uppercase;
  color:#FFE7C8;box-shadow:0 8px 18px -10px rgba(0,0,0,.5)}
.ak-claim-star{font-size:.85em;line-height:1;color:${$}}

.ak-pizza{position:relative;width:min(60vw,465px,max(220px,calc(100svh - 26rem)));aspect-ratio:1;margin:auto;
  transform:rotate(calc(var(--spin,0)*1deg));transform-origin:50% 50%;z-index:2;will-change:transform}
.ak-glow{position:absolute;left:50%;top:52%;width:82%;height:82%;transform:translate(-50%,-50%);border-radius:50%;
  background:radial-gradient(circle,rgba(90,45,0,.32),rgba(90,45,0,0) 66%);filter:blur(4px)}
.ak-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 14px 22px rgba(50,25,0,.42))}
.ak-whole{opacity:calc(1 - var(--cut,0))}
.ak-sl{opacity:var(--cut,0);will-change:transform;
  transform:translate(calc(var(--ux,0) * var(--spread,0px)),calc(var(--uy,0) * var(--spread,0px)))}

.ak-slice{position:fixed;left:0;top:0;z-index:55;width:var(--slw,180px);height:auto;pointer-events:none;
  opacity:calc(var(--cut,0) * (1 - var(--armed,0)));will-change:transform;
  transform:translate(var(--slx,0),var(--sly,0)) translate(-50%,-50%) rotate(var(--slr,0));
  filter:drop-shadow(0 16px 24px rgba(0,0,0,.55))}

.ak-scrollcue{position:absolute;left:clamp(1rem,3vw,2.4rem);bottom:clamp(1rem,2.4vw,1.6rem);z-index:4;display:flex;flex-direction:column;
  align-items:flex-start;gap:.4rem;color:rgba(30,18,8,.55);font-family:${w};font-weight:600;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.14em;opacity:calc(1 - var(--seq,0)*6);pointer-events:none}
.ak-scrollcue i{width:1px;height:26px;background:rgba(30,18,8,.45);animation:akcue 1.7s ease-in-out infinite}
@keyframes akcue{0%,100%{transform:scaleY(.4);transform-origin:top;opacity:.3}50%{transform:scaleY(1);opacity:.8}}

/* ---- pills / buttons ---- */
.ak-pill{display:inline-flex;align-items:center;font-family:${w};font-weight:700;font-size:.86rem;
  padding:.5rem 1.05rem;border:1.5px solid ${m};border-radius:999px;text-decoration:none;white-space:nowrap;
  box-shadow:2px 2px 0 ${m};transition:transform .15s ease,box-shadow .15s ease}
.ak-pill:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 ${m}}
.ak-btn{display:inline-flex;align-items:center;font-family:${w};font-weight:700;font-size:.92rem;
  padding:.8rem 1.5rem;border:2px solid ${h};border-radius:999px;background:${h};color:#fff;
  text-decoration:none;box-shadow:0 10px 26px -10px ${h};transition:transform .15s ease,box-shadow .15s ease}
.ak-btn:hover{transform:translateY(-2px);box-shadow:0 16px 34px -12px ${h}}
.ak-chip{display:inline-flex;align-items:center;font-family:${w};font-weight:600;font-size:.9rem;
  padding:.6rem 1.15rem;border:1.5px solid ${l};border-radius:999px;background:transparent;color:${d};
  text-decoration:none;transition:background .15s,color .15s,border-color .15s}
.ak-chip:hover{background:${d};color:${m};border-color:${d}}

.ak-sticky-panta{position:fixed;z-index:50;right:clamp(.9rem,2.4vw,1.6rem);bottom:clamp(.9rem,2.4vw,1.5rem);
  display:inline-flex;align-items:center;justify-content:center;
  background:${h};color:#fff;font-family:${w};font-weight:700;text-transform:uppercase;letter-spacing:.05em;
  font-size:.82rem;padding:.85rem 1.4rem;border-radius:14px;border:2px solid #000;box-shadow:0 12px 30px -10px rgba(0,0,0,.7);
  text-decoration:none;transition:box-shadow .18s ease,transform .18s ease}
.ak-sticky-panta:hover{box-shadow:0 18px 40px -12px ${h};transform:translateY(-2px)}
.ak-corner-slice{position:absolute;left:50%;top:-67px;width:56px;height:auto;pointer-events:none;
  opacity:var(--armed,0);filter:drop-shadow(0 8px 14px rgba(0,0,0,.6));
  animation:akCornerIdle 6s ease-in-out infinite}
@keyframes akCornerIdle{
  0%,100%{transform:translateX(-50%) rotate(-6deg) translateY(0)}
  50%{transform:translateX(-50%) rotate(3deg) translateY(-3px)}
}

/* ---- framed website (DARK) ---- */
.ak-frame{position:relative;z-index:1;max-width:min(1360px,90vw);margin:0 auto clamp(.9rem,2vw,1.6rem);background:${m};
  border:1.5px solid ${l};border-radius:clamp(24px,3vw,40px);overflow:clip;box-shadow:0 50px 110px -50px rgba(0,0,0,.9)}
.ak-h2{font-family:${x};font-weight:400;font-size:clamp(1.9rem,3.6vw,3rem);line-height:.98;letter-spacing:-.015em;margin:0;color:${d}}
.ak-body{font-size:1.04rem;line-height:1.6;color:${j};max-width:56ch}

.ak-sec{padding:clamp(3rem,6vw,5.5rem) clamp(1.2rem,4vw,3.5rem)}
.ak-sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:1.5rem;flex-wrap:wrap;margin-bottom:2.2rem}
.ak-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem}
.ak-cards>div{display:flex}
.ak-card{display:flex;flex-direction:column;width:100%;background:${D};border:1.5px solid ${l};border-radius:22px;overflow:clip;
  box-shadow:0 18px 40px -24px #000;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.ak-card:hover{transform:translateY(-4px);box-shadow:0 30px 60px -28px rgba(0,0,0,.9),0 0 0 1px rgba(230,74,44,.4);border-color:rgba(230,74,44,.4)}
.ak-card-img{position:relative;aspect-ratio:4/3;overflow:hidden;background:#0d0b09;flex:none}
.ak-card-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.ak-card:hover .ak-card-img img{transform:scale(1.06)}
.ak-tag{position:absolute;top:.8rem;left:.8rem;background:${h};color:#fff;font-family:${w};font-weight:700;
  font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;padding:.32rem .7rem;border-radius:999px}
.ak-card-body{display:flex;flex-direction:column;flex:1;padding:1.2rem 1.3rem 1.4rem}
.ak-card-top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
.ak-card-top h3{font-family:${x};font-weight:400;font-size:1.4rem;margin:0;letter-spacing:-.01em;color:${d}}
.ak-price{font-family:${x};font-weight:400;font-size:1.3rem;color:${$};white-space:nowrap}
.ak-price em{font-family:${w};font-size:.62em;font-style:normal;color:${j}}
.ak-card-body p{font-size:.9rem;line-height:1.45;color:${j};margin:.5rem 0 0;min-height:2.9em;
  display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}
.ak-cat{display:flex;justify-content:center;margin-top:2.4rem}

.ak-dock-wrap{position:relative;height:100px;width:100%;max-width:560px;margin:0 auto}
.ak-dock-wrap .dock-outer{margin:0;width:100%;justify-content:center}
.ak-dock-wrap .dock-panel{background:transparent;border:none;padding:0 .5rem;gap:.6rem}
.ak-dock-wrap .dock-item{background:${D};border:1.5px solid ${l};color:${d};box-shadow:0 8px 18px -10px #000}
.ak-dock-wrap .dock-item:hover,.ak-dock-wrap .dock-item:focus-visible{background:${h};color:#fff;border-color:${h}}
.ak-dock-wrap .dock-caption{color:${j};font-family:${w};font-weight:600;font-size:.68rem;background:${D};border:1px solid ${l}}

/* ---- name marquee (Askur's playful voice) ---- */
.ak-marquee{position:relative;overflow:hidden;border-top:1.5px solid ${l};border-bottom:1.5px solid ${l};
  background:${Be};padding:1.1rem 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.ak-marquee-track{display:inline-flex;white-space:nowrap;will-change:transform;animation:akMarq 34s linear infinite}
.ak-marquee-item{display:inline-flex;align-items:center;font-family:${x};font-weight:400;
  font-size:clamp(1.6rem,3.6vw,2.6rem);line-height:1;letter-spacing:.01em;color:transparent;
  -webkit-text-stroke:1px rgba(244,238,228,.55);text-transform:uppercase;padding:0 .2rem}
.ak-marquee-item i{font-style:normal;color:${h};-webkit-text-stroke:0;margin:0 1.4rem;font-size:.7em}
@keyframes akMarq{to{transform:translateX(-50%)}}

/* ---- cinematic overhead grid (Ken Burns) ---- */
.ak-cinema{position:relative;height:min(80vh,760px);overflow:hidden;display:grid;place-items:center;isolation:isolate}
.ak-cinema-media{position:absolute;inset:-8%;z-index:-2;background-size:cover;background-position:center;
  will-change:transform;animation:akKen 26s ease-in-out infinite alternate}
@keyframes akKen{0%{transform:scale(1.06) translate3d(0,0,0)}100%{transform:scale(1.18) translate3d(-2.5%,-2.5%,0)}}
.ak-cinema-veil{position:absolute;inset:0;z-index:-1;
  background:radial-gradient(120% 90% at 50% 40%,rgba(20,18,16,.32),rgba(20,18,16,.86) 78%),linear-gradient(180deg,rgba(20,18,16,.5),rgba(20,18,16,.2) 40%,rgba(20,18,16,.9))}
.ak-cinema-copy{position:relative;text-align:center;padding:2rem;display:flex;flex-direction:column;align-items:center;gap:1.2rem}
.ak-kicker{font-family:${w};font-weight:700;font-size:.78rem;letter-spacing:.28em;text-transform:uppercase;color:${$};margin:0}
.ak-cinema-h{font-family:${x};font-weight:400;font-size:clamp(3rem,9vw,7rem);line-height:.9;letter-spacing:-.02em;margin:0;color:#fff;
  text-shadow:0 10px 40px rgba(0,0,0,.6)}

/* ---- story band ---- */
.ak-band{background:${Be};border-top:1.5px solid ${l};border-bottom:1.5px solid ${l}}
.ak-story{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(1.5rem,4vw,3.2rem);align-items:center}
.ak-story-media{display:block;overflow:hidden;border-radius:22px;border:1.5px solid ${l};box-shadow:0 24px 60px -30px #000}
.ak-story-media img{width:100%;height:100%;max-height:420px;object-fit:cover;display:block}
.ak-story-copy{display:flex;flex-direction:column;gap:1.1rem;align-items:flex-start}
.ak-award{display:inline-flex;flex-direction:column;padding:.7rem 1.3rem;border:1.5px dashed rgba(230,74,44,.55);border-radius:14px}
.ak-award-t{font-family:${x};font-weight:400;color:${h}}
.ak-award-s{font-size:.82rem;color:${j}}

/* ---- taproom band ---- */
.ak-taproom{background:${m};display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(1.5rem,4vw,3rem);align-items:start;
  border-top:1.5px solid ${l}}
.ak-taproom-lede{font-size:1.05rem;line-height:1.55;color:${j};margin:1rem 0 1.6rem;max-width:34ch}
.ak-pkgs{display:grid;gap:1.2rem}
.ak-pkg{background:${D};border:1.5px solid ${l};border-radius:18px;padding:1.3rem 1.4rem;box-shadow:0 18px 40px -26px #000}
.ak-pkg h3{font-family:${x};font-weight:400;font-size:1.5rem;margin:0;color:${d}}
.ak-pkg p{font-size:.9rem;line-height:1.45;color:${j};margin:.4rem 0 .9rem}
.ak-rate{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-top:1px solid ${l};font-size:.95rem;color:${d}}
.ak-rate em{font-style:normal;color:${j};font-size:.8rem}
.ak-rate-p{font-family:${x};font-weight:400;color:${$};white-space:nowrap}

.ak-visit{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3rem);align-items:center}
.ak-visit-cta{display:flex;gap:.8rem;margin-top:1.4rem;flex-wrap:wrap}
.ak-hours{border:1.5px solid ${l};border-radius:18px;overflow:clip;background:${D}}
.ak-hour{display:flex;justify-content:space-between;gap:1rem;padding:.95rem 1.2rem;font-size:.98rem;border-bottom:1px solid ${l};color:${d}}
.ak-hour:last-child{border-bottom:none}
.ak-hour span:first-child{color:${j}}
.ak-hour span:last-child{font-weight:700}

.ak-footer{background:#0d0b09;color:${d};padding:clamp(2.2rem,4vw,3rem) clamp(1.2rem,4vw,3.5rem);border-top:1.5px solid ${l}}
.ak-foot-top{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap}
.ak-foot-logo{display:flex;align-items:center;height:46px}
.ak-foot-logo img{height:100%;width:auto;object-fit:contain}
.ak-foot-links{display:flex;gap:1.4rem;flex-wrap:wrap}
.ak-foot-links a{color:rgba(244,238,228,.68);text-decoration:none;font-size:.95rem}
.ak-foot-links a:hover{color:${d}}
.ak-foot-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-top:1.8rem;padding-top:1.3rem;
  border-top:1px solid ${l};color:rgba(244,238,228,.42);font-size:.78rem}

/* ---- responsive ---- */
@media (max-width:860px){
  .ak-frame{max-width:calc(100vw - 1.2rem);margin:0 auto .6rem}
  .ak-bgwrap{display:none}
  .ak-cards,.ak-taproom,.ak-visit,.ak-story{grid-template-columns:1fr}
  .ak-story-media{order:-1}
  .ak-nav{gap:.5rem}
  .ak-pizza{width:min(85vw,385px)}
  .ak-sec-head{flex-direction:column;align-items:flex-start}
  .ak-cinema{height:min(70vh,560px)}
}
@media (max-width:520px){
  .ak-nav-grp{display:none}
  .ak-burger{display:flex}
  .ak-mbackdrop{display:block}
  .ak-mmenu{display:flex}
  .ak-badge{height:38px}
}
@media (prefers-reduced-motion:reduce){
  .ak-track{height:100svh}
  .ak-scrollcue,.ak-corner-slice{display:none}
  .ak-marquee-track,.ak-cinema-media{animation:none}
  .ak-hero-mid{transform:none;transition:none}
}
`;export{Va as default};
