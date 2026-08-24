import{r as N,s as M,j as i}from"./index-CsN9i2on.js";import{g as m}from"./index-CzGW6FVa.js";import{S as A}from"./ScrollTrigger-DNECHiyU.js";import V from"./lenis-niKyKZQP.js";import{ar as K,as as f,at as L,au as F,av as D,aw as j,g as _,ax as G}from"./companies-DdqSmTOz.js";import{P as W}from"./PreviewChrome-BwxNpxCJ.js";import{P as J}from"./PreviewFooter-DFsiKqMF.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-Dm5lJXPt.js";import"./createLucideIcon-D8L1x8O-.js";import"./proxy-D2cR4Sw1.js";import"./send-DSiaPeT4.js";import"./index-B02xewCz.js";import"./external-link-YfRUCLTH.js";import"./x-DhbxFnoY.js";import"./mail-DN8EDH5D.js";import"./SndrBadge-DU6HfB85.js";m.registerPlugin(A);const B=_("katrinisfeld"),O="#EFEAE2",T="#231F1B",R="#1D1B19",U="#8C3A34",C="'Sentient', Georgia, serif",I="'Archia', system-ui, sans-serif",g="'Geist Mono', ui-monospace, monospace",z="/iceland-redesigns/",o="cubic-bezier(.25,1,.5,1)",Y="0.6,0,0,1",P=()=>{var r;return typeof window<"u"&&((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},n=(r,e)=>`clamp(${e}px, calc(var(--u) * ${r}), ${+(r*1.15).toFixed(1)}px)`;function X(r){N.useEffect(()=>{if(!r)return;const e=document.querySelector(".ki-root");if(!e)return;const l=Array.from(e.querySelectorAll("[data-ki-chrome]"));let v=[];const h=()=>{const t=window.scrollY;v=Array.from(e.querySelectorAll("[data-ki-band]")).map(c=>{const p=c.getBoundingClientRect();return{top:p.top+t,bottom:p.bottom+t,dark:c.dataset.kiBand==="dark"}})},d=()=>{if(!v.length)return;const t=window.scrollY;for(const c of l){const p=c.getBoundingClientRect(),x=t+p.top+p.height/2;let y=!1;for(const w of v)if(x>=w.top&&x<w.bottom){y=w.dark;break}const k=y?"dark":"light";c.dataset.kiOn!==k&&(c.dataset.kiOn=k)}};if(P()){e.classList.add("ki-static"),h(),d();const t=()=>d(),c=()=>{h(),d()};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",c)}}e.classList.add("ki-js"),A.config({ignoreMobileResize:!0});const a=new V({duration:1.15,smoothWheel:!0}),s=new IntersectionObserver(t=>t.forEach(c=>c.isIntersecting&&c.target.classList.add("is-in")),{threshold:0,rootMargin:"0px 0px -8% 0px"});e.querySelectorAll(".ki-rv, .ki-slide, .ki-shutter").forEach(t=>{t.getBoundingClientRect().top<window.innerHeight&&t.classList.add("is-in"),s.observe(t)});const u=()=>{e.querySelectorAll(".ki-rv:not(.is-in), .ki-slide:not(.is-in), .ki-shutter:not(.is-in)").forEach(t=>{t.getBoundingClientRect().top<window.innerHeight&&t.classList.add("is-in")})},E=m.context(()=>{const t=e.querySelector(".ki-hero-media img"),c=e.querySelectorAll(".ki-hero .ki-word");if(t){m.set(t,{scale:2,transformOrigin:"50% 75%"});const k=()=>{m.to(t,{scale:1,duration:1.6,ease:`cubic-bezier(${Y})`}),c.length&&m.fromTo(c,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.2,ease:"expo.out",stagger:.06,delay:.35})};document.querySelector(".ki-loader")?window.addEventListener("ki:revealed",k,{once:!0}):m.delayedCall(.15,k)}e.querySelectorAll("[data-ki-headline]:not(.ki-hero-title)").forEach(k=>{const w=k.querySelectorAll(".ki-word");w.length&&m.fromTo(w,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.2,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:k,start:"top 86%",once:!0}})});const p=e.querySelector(".ki-dome-arch"),x=e.querySelector(".ki-dome-title");if(p&&m.fromTo(p,{yPercent:18},{yPercent:0,ease:"none",scrollTrigger:{trigger:p,start:"top bottom",end:"top 30%",scrub:.8}}),x){const k=Array.from(x.querySelectorAll(":scope > span"));if(k.length>1){const w=k.length,q=parseFloat(getComputedStyle(x).fontSize)||60;m.fromTo(k,{x:0},{x:H=>(H-(w-1)/2)*q*.42,ease:"none",scrollTrigger:{trigger:x,start:"top 95%",end:"bottom 30%",scrub:.8}})}}const y=e.querySelector(".ki-samband-in");y&&m.fromTo(y,{yPercent:5},{yPercent:0,ease:"none",scrollTrigger:{trigger:y,start:"top 95%",end:"top 45%",scrub:.8}}),A.addEventListener("refresh",h),h()},e);a.on("scroll",()=>{A.update(),d(),u()});const S=t=>{a.raf(t*1e3)};return m.ticker.add(S),m.ticker.lagSmoothing(0),h(),d(),()=>{s.disconnect(),m.ticker.remove(S),A.removeEventListener("refresh",h),E.revert(),a.destroy()}},[r])}function b({text:r,size:e,floor:l,as:v="h2",className:h="",measure:d}){return i.jsx(v,{"data-ki-headline":!0,"aria-label":r,className:`ki-headline ${h}`,style:{fontSize:n(e,l),maxWidth:d?`calc(var(--u) * ${d})`:void 0},children:r.split(" ").map((a,s,u)=>i.jsxs("span",{"aria-hidden":"true",children:[i.jsx("span",{className:"ki-line",children:i.jsx("span",{className:"ki-word",children:a})}),s<u.length-1?" ":""]},s))})}function $({photo:r,className:e="",priority:l=!1,variant:v="slide"}){return i.jsx("figure",{className:`${v==="shutter"?"ki-shutter":"ki-slide"} ${e}`,style:{aspectRatio:r.ratio},children:i.jsx("img",{src:r.src,srcSet:L(r.src),sizes:"(max-width: 991px) 100vw, 46vw",alt:r.alt,loading:l?"eager":"lazy",decoding:"async"})})}const Q=()=>{if(typeof window>"u"||P())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("ki_seen")}catch{return!0}};function Z({onDone:r}){const[e,l]=N.useState(0),[v,h]=N.useState(!1);return N.useEffect(()=>{try{sessionStorage.setItem("ki_seen","1")}catch{}const d=performance.now();let a=0,s=0;const u=document.querySelector(".ki-hero-media img");let E=u?u.complete:!0,S=!1;u&&!E&&(u.addEventListener("load",()=>{E=!0},{once:!0}),u.addEventListener("error",()=>{E=!0},{once:!0})),document.fonts.ready.then(()=>{S=!0});const t=1100,c=2400,p=()=>{const x=performance.now()-d;let y=(E?55:Math.min(50,x/24))+(S?45:0);x>=c&&(y=100),s+=(y-s)*.12;const k=Math.min(100,Math.round(s));if(l(k),k>=100&&x>=t){h(!0),window.setTimeout(r,1e3);return}a=requestAnimationFrame(p)};return a=requestAnimationFrame(p),()=>cancelAnimationFrame(a)},[r]),i.jsx("div",{className:`ki-loader ${v?"is-leaving":""}`,"aria-hidden":"true",children:i.jsxs("div",{className:"ki-loader-arch",children:[i.jsx("p",{className:"ki-loader-mark",children:"KATRÍN ÍSFELD"}),i.jsxs("p",{className:"ki-loader-pct",children:[e,"%"]})]})})}const ii=(()=>{const r=[],e=new Map;for(const l of G)e.has(l.flokkur)||(e.set(l.flokkur,[]),r.push(l.flokkur)),e.get(l.flokkur).push(l);return r.map(l=>({flokkur:l,items:e.get(l)}))})();function Ei(){const[r,e]=N.useState(!1),[l,v]=N.useState(Q),h=N.useRef(null);N.useEffect(()=>{M(R),document.title="Katrín Ísfeld innanhússarkitekt";let a=document.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.name="description",document.head.appendChild(a)),a.content="Katrín Ísfeld innanhússarkitekt hannar innanhús fyrir heimili, gistiheimili, hótel og atvinnurými í Reykjavík: 23 verk, þar á meðal ítalskar innréttingar.";const s=document.documentElement.lang;return document.documentElement.lang="is",e(!0),()=>{document.documentElement.lang=s}},[]),X(r);const d=a=>s=>{var u;s.preventDefault(),(u=document.getElementById(a))==null||u.scrollIntoView({behavior:P()?"auto":"smooth"}),history.replaceState(null,"",`#${a}`)};return i.jsxs("div",{ref:h,className:"ki-root",children:[i.jsx("style",{children:ei}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(K)}}),i.jsx(W,{company:B}),l&&i.jsx(Z,{onDone:()=>{v(!1),window.dispatchEvent(new Event("ki:revealed"))}}),i.jsxs("header",{className:"ki-nav",children:[i.jsx("a",{className:"ki-nav-mark","data-ki-chrome":!0,href:"#top",onClick:d("top"),children:"KATRÍN ÍSFELD"}),i.jsxs("nav",{className:"ki-nav-links","aria-label":"Síða",children:[i.jsx("a",{"data-ki-chrome":!0,href:"#verkefni",onClick:d("verkefni"),children:"Verkefni"}),i.jsx("a",{"data-ki-chrome":!0,href:"#skra",onClick:d("skra"),children:"Skráin"})]}),i.jsx("a",{className:"ki-nav-cta","data-ki-chrome":!0,href:"#samband",onClick:d("samband"),children:"Hafa samband"})]}),i.jsxs("main",{children:[i.jsxs("section",{className:"ki-hero",id:"top","data-ki-band":"dark",children:[i.jsx("div",{className:"ki-hero-media",children:i.jsx("img",{src:f.eldhusVitt.src,srcSet:L(f.eldhusVitt.src),sizes:"100vw",alt:f.eldhusVitt.alt,loading:"eager",decoding:"async"})}),i.jsx("div",{className:"ki-hero-scrim","aria-hidden":"true"}),i.jsxs("div",{className:"ki-hero-lockup",children:[i.jsx(b,{as:"h1",className:"ki-hero-title",text:"Innanhús, hugsað í heild.",size:100,floor:36}),i.jsx("p",{className:"ki-hero-sub",children:"Katrín Ísfeld hannar innanhús frá grunni: heimili, gistiheimili, hótel og atvinnurými."})]})]}),i.jsxs("section",{className:"ki-intro","data-ki-band":"light",children:[i.jsx("span",{className:"ki-rule ki-rv","aria-hidden":"true"}),i.jsx(b,{text:"Hvert verkefni fær sinn eigin litheim.",size:72,floor:32,measure:780}),i.jsx("p",{className:"ki-body ki-rv",children:"Vínrautt og kopar í einu húsi, hör og dagsbirta í öðru. Litirnir á þessari síðu eru ekki valdir úr litakorti heldur teknir beint úr verkefnunum sjálfum, eins og þau voru ljósmynduð."})]}),i.jsxs("section",{className:"ki-yfirlit",id:"verkefni","data-ki-band":"dark",children:[i.jsxs("div",{className:"ki-yfirlit-head",children:[i.jsx("p",{className:"ki-verk-kicker","aria-hidden":"true",children:"Verkefni"}),i.jsx(b,{text:"Heimili, gistiheimili, hótel og atvinnurými.",size:80,floor:32,measure:880}),i.jsx("p",{className:"ki-body ki-rv",children:"Sautján verk úr skránni hennar, hvert með sinni eigin ljósmynd: eldhús og baðherbergi, heil heimili, gistiherbergi og atvinnurými."})]}),ii.map(a=>i.jsxs("div",{className:"ki-yfirlit-cluster",children:[i.jsxs("p",{className:"ki-yfirlit-cat ki-rv",children:[a.flokkur,i.jsxs("span",{className:"ki-yfirlit-cat-n",children:[a.items.length," verk"]})]}),i.jsx("ul",{className:"ki-yfirlit-grid",style:{"--cluster-cols":Math.min(a.items.length,3)},children:a.items.map(s=>i.jsxs("li",{className:"ki-verk-card ki-rv",children:[i.jsx("figure",{className:"ki-verk-card-fig",children:i.jsx("img",{src:s.photo.src,srcSet:L(s.photo.src),sizes:"(max-width: 640px) 92vw, (max-width: 991px) 46vw, 30vw",alt:s.photo.alt,loading:"lazy",decoding:"async"})}),i.jsx("div",{className:"ki-verk-card-meta",children:i.jsx("span",{className:"ki-verk-card-name",children:s.name})})]},s.name))})]},a.flokkur))]}),i.jsxs("section",{className:"ki-verk ki-verk-sulu","data-ki-band":"dark",children:[i.jsxs("div",{className:"ki-verk-head",children:[i.jsx("p",{className:"ki-verk-kicker","aria-hidden":"true",children:"Eitt verk í nærmynd"}),i.jsx(b,{text:"Nýbyggt hús í Súluhöfða.",size:72,floor:32,measure:760}),i.jsx("p",{className:"ki-body ki-rv",children:"Eyjan er vínrauð, ljósin kopar og arinveggurinn ljós steinn með eldiviðarhólfum, allt teiknað inn í húsið frá grunni."})]}),i.jsxs("div",{className:"ki-verk-grid",children:[i.jsx($,{photo:f.skapur}),i.jsx($,{photo:f.arinn}),i.jsx($,{photo:f.fot}),i.jsx($,{photo:f.bad})]}),i.jsxs("dl",{className:"ki-facts ki-rv",children:[i.jsxs("div",{children:[i.jsx("dt",{children:"Hlutverk"}),i.jsx("dd",{children:"Öll innanhússhönnun"})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Staða"}),i.jsx("dd",{children:"Lokið"})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Ljósmyndað"}),i.jsx("dd",{children:"2025"})]})]})]}),i.jsxs("section",{className:"ki-dome","data-ki-band":"light",children:[i.jsx(b,{className:"ki-dome-title",text:"Efnin bera rýmið.",size:84,floor:32}),i.jsx("div",{className:"ki-dome-arch",children:i.jsx("img",{src:f.sturta.src,srcSet:L(f.sturta.src),sizes:"(max-width: 991px) 94vw, 72vw",alt:f.sturta.alt,loading:"lazy",decoding:"async"})}),i.jsx("p",{className:"ki-body ki-dome-body ki-rv",children:"Steinn sem heldur skugganum, viður sem heldur hitanum, kopar sem eldist með húsinu. Efnisvalið er helmingur hönnunarinnar; ljósið sér um hitt."})]}),i.jsxs("section",{className:"ki-italskar","data-ki-band":"dark",children:[i.jsxs("div",{className:"ki-italskar-in",children:[i.jsx(b,{text:"Ítalskar innréttingar.",size:64,floor:30,measure:560}),i.jsx("p",{className:"ki-body ki-rv",children:"Innréttingar fyrir eldhús og bað koma frá Ítalíu og eru teiknaðar inn í hvert verkefni frá grunni, hvort sem um er að ræða heimili eða gistiheimili."}),i.jsx("a",{className:"ki-cta ki-rv",href:"#samband",onClick:d("samband"),children:"Hafa samband"})]}),i.jsx($,{photo:f.fEyja,className:"ki-italskar-fig"})]}),i.jsxs("section",{className:"ki-skra",id:"skra","data-ki-band":"dark",children:[i.jsxs("div",{className:"ki-skra-head",children:[i.jsx(b,{text:"Skráin öll.",size:84,floor:34}),i.jsx("p",{className:"ki-body ki-rv",children:"Sautján verk að ofan eru ljósmynduð; hér er skráin í heild, sex til viðbótar."}),i.jsxs("p",{className:"ki-skra-count ki-rv","aria-label":`${F} verk í ${D.length} flokkum`,children:[i.jsx("span",{className:"ki-skra-n",children:F})," verk ·"," ",i.jsx("span",{className:"ki-skra-n",children:D.length})," flokkar"]})]}),i.jsx("div",{className:"ki-skra-cols",children:D.map(a=>i.jsxs("div",{className:"ki-skra-flokkur ki-rv",children:[i.jsxs("div",{className:"ki-skra-cat-row",children:[i.jsx("h3",{className:"ki-skra-cat",children:a.flokkur}),i.jsx("span",{className:"ki-skra-cat-n","aria-hidden":"true",children:String(a.verk.length).padStart(2,"0")})]}),i.jsx("ul",{className:"ki-skra-list",children:a.verk.map(s=>i.jsx("li",{className:"ki-skra-row",children:i.jsx("span",{children:s})},s))})]},a.flokkur))}),i.jsx("p",{className:"ki-stat ki-rv",children:"Verkefnaskráin eins og hún er birt á katrinisfeld.is, ágúst 2026."})]}),i.jsxs("section",{className:"ki-studio","data-ki-band":"light",children:[i.jsx($,{photo:f.fStofa,className:"ki-studio-fig",variant:"shutter"}),i.jsxs("div",{className:"ki-studio-copy",children:[i.jsx("p",{className:"ki-verk-kicker","aria-hidden":"true",children:"Bakgrunnur"}),i.jsx(b,{text:"Stúdíóið.",size:78,floor:32}),i.jsx("p",{className:"ki-body ki-rv",children:"Áður en Katrín opnaði stúdíóið sitt við Bankastræti starfaði hún á arkitektastofum í Hollandi og í Fort Lauderdale, þar sem hún hannaði glæsivillur. Sú reynsla mótar hvernig hún tekur að sér verkefni hér heima, hvort sem það er eitt herbergi eða húsið í heild."})]})]}),i.jsx("section",{className:"ki-samband",id:"samband","data-ki-band":"dark",children:i.jsxs("div",{className:"ki-samband-in",children:[i.jsx(b,{text:"Segðu Katrínu frá rýminu þínu.",size:80,floor:32,measure:720}),i.jsxs("div",{className:"ki-samband-row",children:[i.jsx("a",{className:"ki-samband-tel",href:j.phoneHref,children:j.phone}),i.jsx("a",{className:"ki-cta",href:`mailto:${j.email}?subject=${encodeURIComponent("Fyrirspurn um hönnun")}`,children:"Hafa samband"})]}),i.jsxs("p",{className:"ki-samband-addr",children:[j.address," · ",j.email]})]})}),i.jsx("div",{className:"ki-foot","data-ki-band":"dark",children:i.jsxs("div",{className:"ki-foot-grid",children:[i.jsxs("div",{children:[i.jsx("p",{className:"ki-foot-mark",children:"KATRÍN ÍSFELD"}),i.jsxs("p",{className:"ki-foot-line",children:["Innanhússarkitekt · ",j.address]})]}),i.jsx("div",{children:i.jsxs("p",{className:"ki-foot-line",children:[j.phone," · ",j.email]})}),i.jsxs("div",{children:[i.jsx("p",{className:"ki-foot-line",children:"Allar myndir eru raunveruleg verkefni af katrinisfeld.is, sótt í ágúst 2026."}),i.jsx("p",{className:"ki-foot-line",children:"Frumgerð frá SNDR."})]})]})})]}),i.jsx(J,{company:B})]})}const ei=`
@font-face { font-family: 'Sentient'; src: url('${z}fonts/sentient/Sentient-Light.woff2') format('woff2'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'Sentient'; src: url('${z}fonts/sentient/Sentient-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Sentient'; src: url('${z}fonts/sentient/Sentient-LightItalic.woff2') format('woff2'); font-weight: 300; font-style: italic; font-display: swap; }
@font-face { font-family: 'Archia'; src: url('${z}fonts/archia/Archia-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Geist Mono'; src: url('${z}fonts/geist-mono/GeistMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }

.ki-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --ki-ground: ${O};
  --ki-ink: ${T};
  --ki-wine: ${U};
  --ki-copper: #B0714B;
  background: var(--ki-ground);
  color: var(--ki-ink);
  font-family: ${I};
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.ki-root [id] { scroll-margin-top: 84px; }
.ki-root a, .ki-root button { touch-action: manipulation; }
.ki-skra-n, .ki-loader-pct { font-variant-numeric: tabular-nums; }
.ki-root ::selection { background: var(--ki-wine); color: #F4EEE6; }
.ki-root :focus-visible { outline: 2px solid var(--ki-copper); outline-offset: 3px; border-radius: 2px; }

/* section colour worlds — the semantic theme swap */
[data-ki-band] { position: relative; }
[data-ki-band='dark'] { background: ${R}; color: #EDE7DE; --ki-mute: #B9B1A5; --ki-hair: rgb(237 231 222 / .16); }
[data-ki-band='light'] { background: ${O}; color: ${T}; --ki-mute: #6E675D; --ki-hair: rgb(35 31 27 / .16); }
[data-ki-band='summer'] { background: #E9E2D5; color: #2A251E; --ki-mute: #6E675B; --ki-hair: rgb(42 37 30 / .16); }
.ki-verk-sulu { background: #241B19; }
.ki-italskar { background: #3B2320; color: #EFE6DC; }

/* chrome: fixed, each element themes itself with a 0.4s colour swap */
.ki-nav {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: calc(var(--u) * 22) calc(var(--u) * 34);
  pointer-events: none;
}
.ki-nav a { pointer-events: auto; text-decoration: none; transition: color .4s linear, opacity .25s ${o}; }
.ki-nav a[data-ki-on='dark'] { color: #EDE7DE; }
.ki-nav a[data-ki-on='light'], .ki-nav a:not([data-ki-on]) { color: ${T}; }
.ki-nav a:hover { opacity: .68; }
.ki-nav-mark { font-family: ${g}; font-size: ${n(13,12)}; letter-spacing: .14em; }
.ki-nav-links { display: flex; gap: calc(var(--u) * 26); font-size: ${n(14,13)}; }
.ki-nav-cta { font-size: ${n(14,13)}; border-bottom: 1px solid currentColor; padding-bottom: 2px; }
@media (max-width: 640px) { .ki-nav-links { display: none; } }

/* loader: the arch aperture */
.ki-loader {
  position: fixed; inset: 0; z-index: 90; display: grid; place-content: end center;
  background: ${R}; transition: opacity .7s ${o}, visibility .7s ${o};
}
.ki-loader.is-leaving { opacity: 0; visibility: hidden; }
.ki-loader-arch {
  width: min(74vw, 520px); height: min(60vh, 560px);
  border: 1px solid rgb(237 231 222 / .3); border-bottom: none;
  border-radius: calc(var(--u) * 400) calc(var(--u) * 400) 0 0;
  display: grid; place-content: center; gap: 12px; text-align: center;
  animation: ki-arch-rise 1.1s ${o} both;
}
@keyframes ki-arch-rise { from { transform: translateY(18%); opacity: 0 } to { transform: none; opacity: 1 } }
.ki-loader-mark { font-family: ${C}; font-weight: 300; font-size: ${n(38,24)}; color: #EDE7DE; letter-spacing: .06em; margin: 0; }
.ki-loader-pct { font-family: ${g}; font-size: 12px; color: #8E867A; margin: 0; }

/* hero */
.ki-hero { position: relative; height: 100svh; min-height: 560px; overflow: hidden; display: grid; align-items: end; }
.ki-hero-media { position: absolute; inset: 0; }
.ki-hero-media img { width: 100%; height: 100%; object-fit: cover; will-change: transform; }
.ki-hero-scrim {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(180deg, rgb(18 14 12 / .3), transparent 38%, rgb(18 14 12 / .58) 92%);
}
.ki-hero-lockup { position: relative; z-index: 2; padding: 0 calc(var(--u) * 34) calc(var(--u) * 52); color: #F2ECE3; }
.ki-hero-title { color: inherit; }
.ki-hero-sub { font-size: ${n(17,15)}; line-height: 1.6; max-width: 52ch; margin: calc(var(--u) * 20) 0 0; }

/* type */
.ki-headline { font-family: ${C}; font-weight: 300; line-height: 1.13; letter-spacing: .002em; margin: 0 0 calc(var(--u) * 24); }
.ki-line { display: inline-block; overflow: hidden; padding-bottom: .22em; margin-bottom: -.22em; vertical-align: bottom; }
.ki-word { display: inline-block; }
.ki-body { font-size: ${n(17,15)}; line-height: 1.68; color: var(--ki-mute, #6E675D); max-width: 60ch; margin: 0; }
.ki-stat { font-family: ${g}; font-size: ${n(12.5,11.5)}; color: var(--ki-mute, #6E675D); margin: calc(var(--u) * 30) 0 0; }

/* reveals — ERA: reveal 1.2s Out; resting state is visible without JS */
.ki-js .ki-rv { opacity: 0; transform: translateY(34px); }
.ki-js .ki-rv.is-in { opacity: 1; transform: none; transition: opacity 1.2s ${o}, transform 1.2s ${o}; }
.ki-rule { display: block; width: calc(var(--u) * 220); height: 1px; background: currentColor; opacity: .4; margin-bottom: calc(var(--u) * 34); }
.ki-js .ki-rule { transform: scaleX(0); transform-origin: left; opacity: 0; }
.ki-js .ki-rule.is-in { transform: none; opacity: .4; transition: transform 1.2s ${o}, opacity .6s linear; }

/* slide: skewed polygon + inner counter-scale */
.ki-slide { position: relative; overflow: hidden; margin: 0; background: rgb(0 0 0 / .08); }
.ki-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ki-js .ki-slide { clip-path: polygon(0 12%, 100% 0, 100% 88%, 0 100%); opacity: 0; }
.ki-js .ki-slide img { transform: scale(1.28); }
.ki-js .ki-slide.is-in { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; transition: clip-path 1.2s ${o}, opacity .5s ${o}; }
.ki-js .ki-slide.is-in img { transform: scale(1); transition: transform 1.4s ${o}; }

/* shutter: converging panels */
.ki-shutter { position: relative; overflow: hidden; margin: 0; background: rgb(0 0 0 / .12); }
.ki-shutter img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ki-js .ki-shutter { clip-path: inset(0 50% 0 50%); }
.ki-js .ki-shutter img { transform: scale(1.24); }
.ki-js .ki-shutter.is-in { clip-path: inset(0 0 0 0); transition: clip-path 1.3s ${o}; }
.ki-js .ki-shutter.is-in img { transform: scale(1); transition: transform 1.6s ${o}; }

.ki-static .ki-rv, .ki-static .ki-slide, .ki-static .ki-shutter,
.ki-root:not(.ki-js) .ki-rv, .ki-root:not(.ki-js) .ki-slide, .ki-root:not(.ki-js) .ki-shutter {
  opacity: 1; transform: none; clip-path: none;
}
.ki-static .ki-slide img, .ki-static .ki-shutter img { transform: none; }

/* group entrances: a 45ms wave instead of every item in a row popping in at
   once (each cluster/grid restarts its own count, so nothing accumulates
   into a long tail by the last item) */
.ki-js .ki-yfirlit-grid .ki-verk-card:nth-child(3n+2) { transition-delay: 45ms; }
.ki-js .ki-yfirlit-grid .ki-verk-card:nth-child(3n+3) { transition-delay: 90ms; }
.ki-js .ki-verk-grid .ki-slide:nth-child(2) { transition-delay: 45ms; }
.ki-js .ki-verk-grid .ki-slide:nth-child(3) { transition-delay: 90ms; }
.ki-js .ki-verk-grid .ki-slide:nth-child(4) { transition-delay: 135ms; }
.ki-js .ki-skra-cols .ki-skra-flokkur:nth-child(2) { transition-delay: 45ms; }
.ki-js .ki-skra-cols .ki-skra-flokkur:nth-child(3) { transition-delay: 90ms; }
.ki-js .ki-skra-cols .ki-skra-flokkur:nth-child(4) { transition-delay: 135ms; }

@media (prefers-reduced-motion: reduce) {
  .ki-hero-media img { transform: none !important; }
  .ki-word { transform: none !important; opacity: 1 !important; }
}

/* sections */
.ki-intro { padding: calc(var(--u) * 150) calc(var(--u) * 34); }
.ki-verk { padding: calc(var(--u) * 130) calc(var(--u) * 34); }

/* THE OVERVIEW — clustered by category so breadth reads as three distinct
   bodies of work (homes / hospitality / business), not one undifferentiated
   wall. One ratio, one gutter within each cluster: still no collage. */
.ki-yfirlit { padding: calc(var(--u) * 140) calc(var(--u) * 34); }
.ki-yfirlit-head { max-width: calc(var(--u) * 900); margin-bottom: calc(var(--u) * 64); }
.ki-yfirlit-cluster + .ki-yfirlit-cluster { margin-top: calc(var(--u) * 76); }
.ki-yfirlit-cat {
  display: flex; align-items: baseline; gap: calc(var(--u) * 14);
  font-family: ${g}; font-size: ${n(12.5,11.5)}; letter-spacing: .13em; text-transform: uppercase;
  color: #D9A87E; border-top: 1px solid var(--ki-hair); padding-top: calc(var(--u) * 18);
  margin: 0 0 calc(var(--u) * 28);
}
.ki-yfirlit-cat-n { font-family: ${I}; letter-spacing: 0; text-transform: none; color: var(--ki-mute); font-size: ${n(12.5,11.5)}; }
.ki-yfirlit-grid {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: repeat(var(--cluster-cols, 3), 1fr); gap: calc(var(--u) * 34) calc(var(--u) * 28);
}
.ki-verk-card-fig { margin: 0; overflow: hidden; background: rgb(0 0 0 / .18); }
.ki-verk-card-fig img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; transition: transform .6s ${o}; }
@media (hover: hover) { .ki-verk-card:hover .ki-verk-card-fig img { transform: scale(1.04); } }
.ki-verk-card-meta { padding-top: 10px; }
.ki-verk-card-name { font-size: ${n(16,14.5)}; }
.ki-verk-kicker { font-family: ${g}; font-size: ${n(12.5,11.5)}; letter-spacing: .14em; text-transform: uppercase; color: #8A5A33; margin: 0 0 calc(var(--u) * 16); }
[data-ki-band='dark'] .ki-verk-kicker, .ki-verk-sulu .ki-verk-kicker { color: #D9A87E; }
.ki-verk-head { max-width: calc(var(--u) * 860); margin-bottom: calc(var(--u) * 54); }
.ki-verk-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: calc(var(--u) * 40); }
.ki-verk-grid .ki-slide:nth-child(2) { margin-top: calc(var(--u) * 70); }
.ki-verk-grid .ki-slide:nth-child(3) { margin-top: calc(var(--u) * -50); }
.ki-facts { display: flex; flex-wrap: wrap; gap: calc(var(--u) * 60); margin: calc(var(--u) * 50) 0 0; }
.ki-facts dt { font-family: ${g}; font-size: ${n(11.5,11)}; letter-spacing: .12em; text-transform: uppercase; color: var(--ki-mute); margin-bottom: 6px; }
.ki-facts dd { margin: 0; font-size: ${n(16,14.5)}; }

/* dome */
.ki-dome { padding: calc(var(--u) * 150) calc(var(--u) * 34) calc(var(--u) * 120); text-align: center; overflow: hidden; }
.ki-dome-title { margin-inline: auto; white-space: nowrap; }
.ki-dome-arch {
  width: min(100%, calc(var(--u) * 900)); margin: calc(var(--u) * 40) auto 0;
  border-radius: calc(var(--u) * 450) calc(var(--u) * 450) 0 0; overflow: hidden;
  will-change: transform;
}
.ki-dome-arch img { width: 100%; aspect-ratio: 4 / 4.4; object-fit: cover; display: block; }
.ki-dome-body { margin: calc(var(--u) * 44) auto 0; }

/* register */
.ki-skra { padding: calc(var(--u) * 140) calc(var(--u) * 34); }
.ki-skra-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 18px; margin-bottom: calc(var(--u) * 50); }
.ki-skra-count { font-family: ${g}; font-size: ${n(14,12.5)}; color: var(--ki-mute); margin: 0; }
.ki-skra-n { font-family: ${C}; font-weight: 300; font-size: ${n(40,24)}; color: #EDE7DE; padding: 0 .1em; }
/* The register reads as a ledger, one full-width band per flokkur, because the
   old four-up layout gave every category a column of its own: 13 verk beside 6
   beside 2 beside 2 left three columns of nothing but rule and air. Here each
   band is only as tall as its own contents and the verk flow across the full
   measure, so a two-item category costs two rows instead of thirteen. */
.ki-skra-cols { display: block; }
.ki-skra-flokkur { border-top: 1px solid rgb(237 231 222 / .26); padding-top: calc(var(--u) * 26); }
.ki-skra-flokkur + .ki-skra-flokkur { margin-top: calc(var(--u) * 46); }
.ki-skra-cat-row { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; margin-bottom: calc(var(--u) * 16); }
.ki-skra-cat { font-family: ${g}; font-size: ${n(12,11)}; letter-spacing: .13em; text-transform: uppercase; font-weight: 400; color: var(--ki-copper); margin: 0; }
.ki-skra-cat-n { font-family: ${g}; font-size: ${n(12,11)}; letter-spacing: .08em; color: var(--ki-mute); font-variant-numeric: tabular-nums; }
.ki-skra-list {
  list-style: none; margin: 0; padding: 0;
  /* an absolute track floor, not a --u-scaled one: the longest title
     ("Eldhúsrými í skandinavískum stíl") needs the same ~250px whatever the
     viewport, and scaling the minimum let four tracks form at 982px and wrapped
     it onto a second line */
  display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  column-gap: calc(var(--u) * 44);
}
.ki-skra-row {
  position: relative; border-top: 1px solid var(--ki-hair);
  padding: 11px 0; font-size: ${n(15.5,14)};
  transition: color .8s ${o};
}
.ki-skra-row > span { display: inline-block; transition: transform .8s ${o}; }
.ki-skra-row::before {
  content: ''; position: absolute; left: 0; top: 50%; translate: 0 -50%;
  width: 10px; height: 1px; background: var(--ki-copper);
  transform: scaleX(0); transform-origin: left; transition: transform .8s ${o};
}
@media (hover: hover) {
  .ki-skra-row:hover { color: var(--ki-copper); }
  .ki-skra-row:hover > span { transform: translateX(18px); }
  .ki-skra-row:hover::before { transform: scaleX(1); }
}

/* Italian cabinetry */
.ki-italskar { display: grid; grid-template-columns: 1.1fr 1fr; gap: calc(var(--u) * 70); align-items: center; padding: calc(var(--u) * 120) calc(var(--u) * 34); }
.ki-italskar .ki-body { color: #C9B8AC; }
.ki-italskar-fig { max-width: calc(var(--u) * 460); justify-self: end; width: 100%; }

/* studio */
.ki-studio { display: grid; grid-template-columns: 1fr 1.2fr; gap: calc(var(--u) * 70); align-items: center; padding: calc(var(--u) * 140) calc(var(--u) * 34); }
.ki-studio-fig { max-width: calc(var(--u) * 440); width: 100%; }

/* contact */
.ki-samband { padding: calc(var(--u) * 60) 0 0; }
.ki-samband-in {
  text-align: center; padding: calc(var(--u) * 140) calc(var(--u) * 34) calc(var(--u) * 60);
  background: #16211E; color: #E9EDE8;
  /* the arch, held in CSS so no tween can drop it */
  border-radius: calc(var(--u) * 420) calc(var(--u) * 420) 0 0;
  overflow: hidden; will-change: transform;
  /* both grounds are near-black, so the dome needs its own drawn edge */
  box-shadow: inset 0 1px 0 rgb(237 231 222 / .22);
}
.ki-samband-in .ki-headline { margin-inline: auto; }
.ki-samband-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: calc(var(--u) * 34); margin-top: calc(var(--u) * 26); }
.ki-samband-tel { font-family: ${C}; font-weight: 300; font-size: ${n(56,26)}; color: inherit; text-decoration: none; transition: color .3s ${o}; }
.ki-samband-tel:hover { color: var(--ki-copper); }
.ki-samband-addr { font-family: ${g}; font-size: ${n(13,12)}; color: #9AA79F; margin-top: calc(var(--u) * 20); }
/* A ruled label rather than a filled slab: the page speaks in mono kickers and
   hairlines, and a cream block was the one heavy object in it. Hover brightens
   the rule and the label; it deliberately does not go copper, which sits at
   3.7:1 on this ground and would drop the state below AA. */
.ki-cta {
  position: relative; display: inline-block;
  font-family: ${g}; font-size: ${n(13,12)};
  letter-spacing: .14em; text-transform: uppercase;
  background: none; padding: 6px 0 10px;
  text-decoration: none; transition: color .3s ${o}, transform .16s ${o};
}
.ki-cta::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0;
  height: 1px; background: currentColor; opacity: .38;
  transition: opacity .3s ${o};
}
@media (hover: hover) and (pointer: fine) {
  .ki-cta:hover { color: #FFFDF8; }
  .ki-cta:hover::after { opacity: 1; }
}
.ki-cta:active { transform: scale(.97); }
.ki-italskar .ki-cta, .ki-samband .ki-cta { color: #EDE7DE; }
/* the slab carried its own 16px of padding as separation; a ruled label has
   none, so it needs the gap set explicitly or it crowds the paragraph above */
.ki-italskar .ki-cta { margin-top: calc(var(--u) * 30); }

/* footer */
.ki-foot { border-top: 1px solid rgb(237 231 222 / .14); padding: calc(var(--u) * 42) calc(var(--u) * 34) calc(var(--u) * 42); background: ${R}; color: #EDE7DE; }
.ki-foot-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 34); }
.ki-foot-mark { font-family: ${g}; font-size: ${n(13,12)}; letter-spacing: .14em; margin: 0 0 10px; }
.ki-foot-line { font-size: ${n(13.5,12.5)}; color: #B9B1A5; margin: 0 0 6px; line-height: 1.6; }

/* responsive */
@media (max-width: 991px) {
  .ki-verk-grid { grid-template-columns: 1fr; }
  .ki-yfirlit-grid { grid-template-columns: repeat(2, 1fr); }
  .ki-verk-grid .ki-slide:nth-child(2), .ki-verk-grid .ki-slide:nth-child(3) { margin-top: 0; }
  .ki-foot-grid { grid-template-columns: 1fr; }
  .ki-dome-title { white-space: normal; }
}
/* Text + one modest figure: these hold as two columns far below the page's
   main 991 breakpoint. Collapsing them early left the figure at its desktop
   max-width in a full-width column, i.e. a dead half-screen beside it. */
@media (max-width: 860px) {
  .ki-italskar, .ki-studio { grid-template-columns: 1fr; gap: calc(var(--u) * 40); }
  .ki-italskar-fig, .ki-studio-fig { justify-self: stretch; max-width: none; width: 100%; }
}
@media (max-width: 640px) {
  .ki-intro, .ki-verk, .ki-dome, .ki-skra, .ki-italskar, .ki-studio { padding-left: 20px; padding-right: 20px; }
  .ki-samband-in { padding: calc(var(--u) * 140) 20px 16px; }
  .ki-samband-row { margin-top: 16px; }
  .ki-samband-addr { margin-top: 10px; }
  .ki-yfirlit { padding-left: 20px; padding-right: 20px; }
  .ki-yfirlit-grid { grid-template-columns: 1fr; }
  .ki-hero-lockup { padding: 0 20px 34px; }
  /* the footer's three columns stack full-height here (single column), so
     the fixed nav needs more headroom above the final CTA than desktop */
  .ki-foot { padding: 14px 20px; }
  .ki-foot-grid { gap: 8px; }
}
`;export{Ei as default};
