import{r as k,s as B,j as e}from"./index-1dycCaMA.js";import{g as m}from"./index-CzGW6FVa.js";import{S as F}from"./ScrollTrigger-DNECHiyU.js";import D from"./lenis-niKyKZQP.js";import{ak as R,al as I,am as c,an as C,ao as P,ap as G,aq as $,g as V}from"./companies-DOEqWmuu.js";import{P as Y}from"./PreviewChrome-DusT0I2e.js";import{P as U}from"./PreviewFooter-CbjIqYWX.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-DNripaLc.js";import"./createLucideIcon-Dc0OS5kp.js";import"./proxy-Dpun1NiQ.js";import"./index-BlIShCzr.js";import"./send-DB06yxtj.js";import"./index-BLIQUsUM.js";import"./external-link-DhNndr0-.js";import"./x-D6SDbFPo.js";import"./check-rYjWk7iZ.js";import"./mail-IIT93YQP.js";import"./SndrBadge-B7em2Npg.js";m.registerPlugin(F);const H=V("huldamargret"),L="#F1EFEA",T="#2C2823",_="#B98A45",E="'Erode', Georgia, serif",W="'Supreme', system-ui, sans-serif",y="'Azeret Mono', ui-monospace, monospace",S="/iceland-redesigns/",M=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},n=(t,r)=>`clamp(${r}px, calc(var(--u) * ${t}), ${+(t*1.15).toFixed(1)}px)`;function K(t){k.useEffect(()=>{if(!t)return;const r=document.querySelector(".hm-root");if(!r)return;if(M()){r.classList.add("hm-static");return}r.classList.add("hm-js"),F.config({ignoreMobileResize:!0});const u=new D({duration:1.1,smoothWheel:!0}),x=Array.from(r.querySelectorAll(".hm-frame-in"));let f=null;const o=()=>{if(f!=null&&f.isActive)return;const i=window.innerHeight,d=[];for(const h of x){const g=h.parentElement;if(!g)continue;const p=g.getBoundingClientRect();if(p.bottom<-240||p.top>i+240)continue;const b=Number(h.dataset.drift||9),v=(p.top+p.height/2-i/2)/(i/2+p.height/2);d.push([h,`translate3d(0,${(-v*b).toFixed(2)}%,0)`])}for(const[h,g]of d)h.style.transform=g},a=new IntersectionObserver(i=>i.forEach(d=>d.isIntersecting&&d.target.classList.add("is-in")),{threshold:0,rootMargin:"0px 0px -8% 0px"});r.querySelectorAll(".hm-rv").forEach(i=>{i.getBoundingClientRect().top<window.innerHeight&&i.classList.add("is-in"),a.observe(i)});const s=()=>{r.querySelectorAll(".hm-rv:not(.is-in)").forEach(i=>{i.getBoundingClientRect().top<window.innerHeight&&i.classList.add("is-in")})},l=m.context(()=>{const i=r.querySelector(".hm-wm-seam"),d=r.querySelector(".hm-wm-a"),h=r.querySelector(".hm-wm-b"),g=r.querySelector(".hm-hero");if(i&&d&&h&&g){m.set(i,{scaleY:0}),m.set(d,{clipPath:"inset(0% 0% 0% 100%)"}),m.set(h,{clipPath:"inset(0% 100% 0% 0%)"});const v=()=>{m.timeline().to(i,{scaleY:1,duration:.85,ease:"expo.out"}).to([d,h],{clipPath:"inset(0% 0% 0% 0%)",duration:1.5,ease:"expo.out"},"-=0.42").from([d,h],{x:O=>O===0?26:-26,duration:1.5,ease:"expo.out"},"<")};document.querySelector(".hm-loader")?window.addEventListener("hm:revealed",v,{once:!0}):m.delayedCall(.12,v);const N={trigger:g,start:"top top",end:"bottom top",scrub:.6};m.to(d,{xPercent:-12,opacity:.08,ease:"none",scrollTrigger:N}),m.to(h,{xPercent:12,opacity:.08,ease:"none",scrollTrigger:N}),m.to(i,{scaleY:3.2,opacity:0,ease:"none",scrollTrigger:N})}r.querySelectorAll("[data-hm-headline]").forEach(v=>{const N=v.querySelectorAll(".hm-word");N.length&&m.fromTo(N,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:v,start:"top 88%",once:!0}})});const p=r.querySelector(".hm-sheet"),b=r.querySelector(".hm-sheet-track");if(p&&b&&window.matchMedia("(min-width: 768px)").matches){const v=()=>Math.max(0,b.scrollWidth-window.innerWidth);f=m.to(b,{x:()=>-v(),ease:"none",scrollTrigger:{trigger:p,start:"top top",end:()=>`+=${v()+window.innerHeight*.5}`,pin:!0,scrub:1,anticipatePin:1,invalidateOnRefresh:!0}}).scrollTrigger??null}},r);u.on("scroll",()=>{F.update(),o(),s()});const z=i=>{u.raf(i*1e3)};m.ticker.add(z),m.ticker.lagSmoothing(0),o();const j=()=>o();return window.addEventListener("resize",j,{passive:!0}),()=>{a.disconnect(),window.removeEventListener("resize",j),m.ticker.remove(z),l.revert(),u.destroy()}},[t])}function w({text:t,size:r,floor:u,as:x="h2",className:f="",measure:o}){return e.jsx(x,{"data-hm-headline":!0,"aria-label":t,className:`hm-headline ${f}`,style:{fontSize:n(r,u),maxWidth:o?`calc(var(--u) * ${o})`:void 0},children:t.split(" ").map((a,s,l)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"hm-line",children:e.jsx("span",{className:"hm-word",children:a})}),s<l.length-1?" ":""]},s))})}function q({children:t}){return e.jsx("p",{className:"hm-kicker",children:t})}function A({photo:t,drift:r=9,priority:u=!1,className:x=""}){return e.jsx("figure",{className:`hm-frame hm-rv ${x}`,style:{aspectRatio:t.ratio},children:e.jsx("div",{className:"hm-frame-in","data-drift":r,style:{"--dz":`${Math.max(9,r*1.35)}%`},children:e.jsx("img",{src:t.src,srcSet:C(t.src),sizes:"(max-width: 991px) 100vw, 60vw",alt:t.alt,loading:u?"eager":"lazy",decoding:"async"})})})}const J=()=>{if(typeof window>"u"||M())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("hm_seen")}catch{return!0}};function X({onDone:t}){const[r,u]=k.useState(0),[x,f]=k.useState(!1);return k.useEffect(()=>{try{sessionStorage.setItem("hm_seen","1")}catch{}const o=performance.now();let a=0,s=0;const l=document.querySelector(".hm-hero-media img");let z=0,j=l?l.complete:!0,i=!1;l&&!j&&(l.addEventListener("load",()=>{j=!0},{once:!0}),l.addEventListener("error",()=>{j=!0},{once:!0})),document.fonts.ready.then(()=>{i=!0});const d=1100,h=2400,g=()=>{const p=performance.now()-o;z=(j?55:Math.min(50,p/24))+(i?45:0),p>=h&&(z=100),s+=(z-s)*.12;const b=Math.min(100,Math.round(s));if(u(b),b>=100&&p>=d){f(!0),window.setTimeout(t,950);return}a=requestAnimationFrame(g)};return a=requestAnimationFrame(g),()=>cancelAnimationFrame(a)},[t]),e.jsxs("div",{className:`hm-loader ${x?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsx("p",{className:"hm-loader-mark",style:{backgroundPositionX:`${100-r}%`},children:"HULDA MARGRÉT"}),e.jsxs("p",{className:"hm-loader-pct",children:[r,"%"]})]})}const Q=[{photo:c.portrettA,label:"Portrett"},{photo:c.vollur,label:"Íþróttir"},{photo:c.ferming,label:"Fermingar"},{photo:c.brudkaup,label:"Brúðkaup"},{photo:c.svid,label:"Viðburðir"}];function ze(){const[t,r]=k.useState(!1),[u,x]=k.useState(J),f=k.useRef(null);k.useEffect(()=>{B(L),document.title=R.title;let a=document.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.name="description",document.head.appendChild(a));const s=a.content;a.content=R.description;const l=document.documentElement.lang;return document.documentElement.lang="is",r(!0),()=>{a.content=s,document.documentElement.lang=l}},[]),K(t);const o=a=>s=>{var l;s.preventDefault(),(l=document.getElementById(a))==null||l.scrollIntoView({behavior:M()?"auto":"smooth"}),history.replaceState(null,"",`#${a}`)};return e.jsxs("div",{ref:f,className:"hm-root",children:[e.jsx("style",{children:Z}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(I)}}),e.jsx(Y,{company:H}),u&&e.jsx(X,{onDone:()=>{x(!1),window.dispatchEvent(new Event("hm:revealed"))}}),e.jsxs("header",{className:"hm-nav",children:[e.jsx("a",{className:"hm-nav-mark",href:"#top",onClick:o("top"),children:"HULDA MARGRÉT"}),e.jsxs("nav",{className:"hm-nav-links","aria-label":"Síða",children:[e.jsx("a",{href:"#verkin",onClick:o("verkin"),children:"Verkin"}),e.jsx("a",{href:"#verdskra",onClick:o("verdskra"),children:"Verðskrá"})]}),e.jsx("a",{className:"hm-nav-cta",href:"#samband",onClick:o("samband"),children:"Bóka myndatöku"})]}),e.jsxs("main",{children:[e.jsxs("section",{className:"hm-hero",id:"top",children:[e.jsx("div",{className:"hm-hero-media hm-rv",children:e.jsx("div",{className:"hm-frame-in","data-drift":13,style:{"--dz":`${(13*1.35).toFixed(2)}%`},children:e.jsx("img",{src:c.brudkaup.src,srcSet:C(c.brudkaup.src),sizes:"100vw",alt:c.brudkaup.alt,loading:"eager",decoding:"async"})})}),e.jsxs("h1",{className:"hm-wordmark","aria-label":"Hulda Margrét ljósmyndari",children:[e.jsx("span",{className:"hm-wm-word hm-wm-a","aria-hidden":"true",children:"HULDA"}),e.jsx("span",{className:"hm-wm-seam","aria-hidden":"true"}),e.jsx("span",{className:"hm-wm-word hm-wm-b","aria-hidden":"true",children:"MARGRÉT"})]}),e.jsxs("div",{className:"hm-hero-block",children:[e.jsx("p",{className:"hm-hero-sub",children:"Stjórnendaportrett, brúðkaup, íþróttir og viðburðir. Yfir þrjátíu fyrirtæki og félög eru meðal viðskiptavina."}),e.jsx("a",{className:"hm-hero-link",href:"#samband",onClick:o("samband"),children:"Bóka myndatöku"})]})]}),e.jsxs("section",{className:"hm-manifesto",children:[e.jsxs("div",{className:"hm-manifesto-copy",children:[e.jsx(w,{text:"Augnablikið gerist einu sinni.",size:96,floor:40,measure:700}),e.jsx("p",{className:"hm-body hm-rv",children:"Það verður ekki endurtekið: markið, jáið, fyrsti hljómurinn. Vinnan er að standa á réttum stað þegar það gerist, með ljósið lesið fyrirfram. Hvert verk hér er raunverulegt."})]}),e.jsx(A,{photo:c.studio,drift:9,className:"hm-manifesto-fig"})]}),e.jsxs("section",{className:"hm-morgunn",id:"verkin",children:[e.jsxs("div",{className:"hm-morgunn-copy",children:[e.jsx(q,{children:"Portrett"}),e.jsx(w,{text:"Portrett í augnhæð.",size:64,floor:32,measure:560}),e.jsx("p",{className:"hm-body hm-rv",children:"Vönduð og traustvekjandi portrett fyrir stjórnendur og starfsfólk, tekin fyrir heimasíður, ársskýrslur, fréttir og viðburði. Hálftími fyrir manneskju sem á að þekkjast á myndinni sinni."}),e.jsxs("p",{className:"hm-inline-cta hm-rv",children:["Fyrirtæki og stofnanir:"," ",e.jsx("a",{href:"#samband",onClick:o("samband"),children:"Óska eftir tilboði"})]})]}),e.jsxs("div",{className:"hm-morgunn-figs",children:[e.jsx(A,{photo:c.portrettA,drift:9}),e.jsx(A,{photo:c.portrettB,drift:7,className:"hm-morgunn-b"})]})]}),e.jsxs("section",{className:"hm-dagur",children:[e.jsxs("div",{className:"hm-dagur-head",children:[e.jsx(q,{children:"Íþróttir og viðburðir"}),e.jsx(w,{text:"Þegar dómarinn flautar.",size:64,floor:32,measure:560})]}),e.jsx(A,{photo:c.vollur,drift:12,className:"hm-dagur-bleed"}),e.jsxs("div",{className:"hm-dagur-foot",children:[e.jsx("p",{className:"hm-body hm-rv",children:"Íþróttir, viðburðir og vörur: hraðar aðstæður þar sem augnablikið vinnst með viðbragði, ekki uppstillingu."}),e.jsx(A,{photo:c.vara,drift:8,className:"hm-dagur-vara"})]})]}),e.jsxs("section",{className:"hm-sidegi",children:[e.jsx("div",{className:"hm-sidegi-figs",children:e.jsx(A,{photo:c.ferming,drift:9})}),e.jsxs("div",{className:"hm-sidegi-copy",children:[e.jsx(q,{children:"Fjölskyldur"}),e.jsx(w,{text:"Í næði, ekki flýti.",size:56,floor:30,measure:520}),e.jsx("p",{className:"hm-body hm-rv",children:"Fermingar, fjölskyldur og hópar. Myndir sem hanga uppi árum saman eiga skilið dagsljós og tíma."})]})]}),e.jsxs("section",{className:"hm-sheet","aria-label":"Snertiörk úr safninu",children:[e.jsxs("div",{className:"hm-sheet-head",children:[e.jsx(q,{children:"Brúðkaup"}),e.jsx(w,{text:"Fimm myndir úr safninu.",size:64,floor:30,measure:620})]}),e.jsx("div",{className:"hm-sheet-track",children:Q.map(a=>e.jsxs("figure",{className:"hm-sheet-cell",children:[e.jsx("img",{src:a.photo.src,srcSet:C(a.photo.src),sizes:"(max-width: 767px) 86vw, 44vw",alt:a.photo.alt,loading:"lazy",decoding:"async"}),e.jsx("figcaption",{children:e.jsx("span",{className:"hm-sheet-cat",children:a.label})})]},a.label))})]}),e.jsxs("section",{className:"hm-vidskipta",children:[e.jsx(q,{children:"Viðskiptavinir"}),e.jsx(w,{text:"Þeir sem hringja aftur.",size:64,floor:32,measure:620}),e.jsx("p",{className:"hm-body hm-rv",children:"Yfir þrjátíu fyrirtæki, félög og fjölmiðlar sýna merkin sín á vef Huldu. Hér eru tólf."}),e.jsx("div",{className:"hm-marquee hm-rv","data-hm-marquee":!0,children:e.jsxs("div",{className:"hm-marquee-track",children:[e.jsx("ul",{className:"hm-marquee-run","aria-label":"Meðal viðskiptavina",children:P.map(a=>e.jsx("li",{className:"hm-logo-chip",children:e.jsx("img",{src:a.src,alt:a.name,loading:"lazy",decoding:"async"})},a.name))}),e.jsx("ul",{className:"hm-marquee-run","aria-hidden":"true",children:P.map(a=>e.jsx("li",{className:"hm-logo-chip",children:e.jsx("img",{src:a.src,alt:"",loading:"lazy",decoding:"async"})},`${a.name}-2`))})]})})]}),e.jsxs("section",{className:"hm-verd",id:"verdskra",children:[e.jsx(w,{text:"Verðskrá brúðkaupa.",size:72,floor:34,measure:560}),e.jsx("ul",{className:"hm-verd-grid",children:G.map(a=>e.jsxs("li",{className:"hm-verd-card hm-rv",children:[e.jsx("p",{className:"hm-verd-name",children:a.name}),e.jsx("p",{className:"hm-verd-price",children:a.price}),e.jsx("ul",{className:"hm-verd-inc",children:a.includes.map(s=>e.jsx("li",{children:s},s))})]},a.name))}),e.jsx("p",{className:"hm-stat hm-rv",children:"Verð af vef Huldu, ágúst 2026. Innifalinn er allt að 60 mínútna akstur."}),e.jsxs("p",{className:"hm-inline-cta hm-rv",children:["Aðrar myndatökur (portrett, fermingar, viðburðir):"," ",e.jsx("a",{href:"#samband",onClick:o("samband"),children:"Hafðu samband"})]})]}),e.jsxs("section",{className:"hm-samband",id:"samband",children:[e.jsx(w,{text:"Segðu Huldu frá myndatökunni.",size:80,floor:36,measure:640}),e.jsxs("div",{className:"hm-samband-row hm-rv",children:[e.jsx("a",{className:"hm-samband-tel",href:$.phoneHref,children:$.phone}),e.jsx("a",{className:"hm-cta",href:`mailto:${$.email}?subject=${encodeURIComponent("Fyrirspurn um myndatöku")}`,children:"Bóka myndatöku"})]}),e.jsx("p",{className:"hm-samband-mail hm-rv",children:$.email})]}),e.jsx("div",{className:"hm-foot",children:e.jsxs("div",{className:"hm-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hm-foot-mark",children:"HULDA MARGRÉT"}),e.jsx("p",{className:"hm-foot-line",children:"Ljósmyndastúdíó Huldu Margrétar"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"hm-foot-line",children:$.phone}),e.jsx("p",{className:"hm-foot-line",children:$.email})]}),e.jsxs("div",{children:[e.jsx("p",{className:"hm-foot-line",children:"Allar myndir og öll verð eru af vef Huldu, huldamargret.is, ágúst 2026."}),e.jsx("p",{className:"hm-foot-line",children:"Frumgerð frá SNDR."})]})]})})]}),e.jsx(U,{company:H})]})}const Z=`
@font-face { font-family: 'Erode'; src: url('${S}fonts/erode/Erode-Light.woff2') format('woff2'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'Erode'; src: url('${S}fonts/erode/Erode-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Erode'; src: url('${S}fonts/erode/Erode-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Supreme'; src: url('${S}fonts/supreme/Supreme-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Supreme'; src: url('${S}fonts/supreme/Supreme-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Azeret Mono'; src: url('${S}fonts/azeret-mono/AzeretMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }

.hm-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --hm-c: ${L};
  --hm-ink: ${T};
  --hm-soft: #E7E3DA;
  --hm-gold: ${_};
  /* gold reads too pale on the morning canvas; text uses a deeper cut */
  --hm-accent-text: #7A5A26;
  --hm-mute: color-mix(in srgb, var(--hm-ink) 76%, transparent);
  --hm-hair: color-mix(in srgb, var(--hm-ink) 16%, transparent);
  background: var(--hm-c);
  color: var(--hm-ink);
  font-family: ${W};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.hm-root [id] { scroll-margin-top: 84px; }
.hm-root a, .hm-root button { touch-action: manipulation; }
.hm-loader-pct, .hm-verd-price { font-variant-numeric: tabular-nums; }
.hm-root ::selection { background: var(--hm-gold); color: #1B150C; }
.hm-root :focus-visible { outline: 2px solid var(--hm-accent-text); outline-offset: 3px; border-radius: 2px; }

/* nav — fixed, borderless, difference-blend so no bar is ever needed */
.hm-nav {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: calc(var(--u) * 22) calc(var(--u) * 34);
  mix-blend-mode: difference; color: #F2EFE8; pointer-events: none;
}
.hm-nav a { pointer-events: auto; color: inherit; text-decoration: none; transition: opacity .2s cubic-bezier(.4,0,.2,1); }
.hm-nav-mark { font-family: ${y}; font-size: ${n(13,12)}; letter-spacing: .14em; }
.hm-nav-links { display: flex; gap: calc(var(--u) * 26); font-size: ${n(14,13)}; }
.hm-nav-links a:hover, .hm-nav-cta:hover { opacity: .72; }
.hm-nav-cta { font-size: ${n(14,13)}; border-bottom: 1px solid currentColor; padding-bottom: 2px; }
@media (max-width: 640px) { .hm-nav-links { display: none; } }

/* loader */
.hm-loader {
  position: fixed; inset: 0; z-index: 90; display: grid; place-content: center; gap: 10px;
  background: ${L}; transition: opacity .8s cubic-bezier(.16,1,.3,1), visibility .8s cubic-bezier(.16,1,.3,1);
}
.hm-loader.is-leaving { opacity: 0; visibility: hidden; }
.hm-loader-mark {
  font-family: ${E}; font-weight: 300; font-size: ${n(54,30)}; letter-spacing: .04em;
  background-image: linear-gradient(90deg, ${T} 50%, #C9C2B4 50%);
  background-size: 200% 100%; -webkit-background-clip: text; background-clip: text;
  color: transparent;
}
.hm-loader-pct { font-family: ${y}; font-size: 12px; color: #8A8375; text-align: center; }

/* hero */
.hm-hero { position: relative; height: 100svh; min-height: 560px; display: grid; }
.hm-hero-media { position: absolute; inset: 0; overflow: hidden; }
.hm-hero-media .hm-frame-in { position: absolute; inset: calc(-1 * var(--dz)) 0; will-change: transform; }
.hm-hero-media img { width: 100%; height: 100%; object-fit: cover; }
.hm-hero::after {
  content: ''; position: absolute; inset: 0;
  /* the wordmark sits at 44%, which on a bright frame (white dress, sky,
     sunlit grass) is exactly where the old gradient was fully transparent.
     A soft radial scrim sits under the lockup so the name holds at any crop. */
  background:
    radial-gradient(118% 58% at 50% 44%, rgb(16 12 8 / .46), transparent 72%),
    linear-gradient(180deg, rgb(20 16 10 / .22), transparent 42%, rgb(20 16 10 / .40) 88%);
  pointer-events: none;
}
.hm-wordmark {
  position: absolute; left: 50%; top: 44%; transform: translate(-50%, -50%);
  display: flex; align-items: center; gap: calc(var(--u) * 26); z-index: 2;
  font-family: ${E}; font-weight: 400; color: #FFFDF8;
  font-size: ${n(108,40)}; letter-spacing: .02em; line-height: 1.12;
  margin: 0; white-space: nowrap;
  text-shadow: 0 1px 3px rgb(15 12 8 / .55), 0 6px 34px rgb(15 12 8 / .45);
}
.hm-wm-word { display: inline-block; }
.hm-wm-seam { width: 1px; align-self: stretch; background: #F6F3EC; transform-origin: center; }
.hm-hero-block {
  position: absolute; left: calc(var(--u) * 34); right: calc(var(--u) * 34);
  bottom: calc(var(--u) * 44); z-index: 2; color: #F6F3EC;
  display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 18px;
}
.hm-hero-sub { max-width: 46ch; font-size: ${n(17,15)}; line-height: 1.6; margin: 0; }
.hm-hero-link {
  color: inherit; font-size: ${n(15,14)}; text-decoration: none;
  border-bottom: 1px solid currentColor; padding-bottom: 3px;
  transition: opacity .2s cubic-bezier(.4,0,.2,1);
}
.hm-hero-link:hover { opacity: .75; }

/* shared type */
.hm-headline {
  font-family: ${E}; font-weight: 300; line-height: 1.14; letter-spacing: .005em;
  margin: 0 0 calc(var(--u) * 26);
}
.hm-line { display: inline-block; overflow: hidden; padding-bottom: .22em; margin-bottom: -.22em; vertical-align: bottom; }
.hm-word { display: inline-block; }
.hm-body { font-size: ${n(17,15)}; line-height: 1.66; color: var(--hm-mute); max-width: 58ch; margin: 0; }
.hm-stat { font-family: ${y}; font-size: ${n(12.5,11.5)}; color: var(--hm-mute); margin: calc(var(--u) * 22) 0 0; }
/* secondary, segment-aware CTA line: a named path for readers the primary
   "Bóka myndatöku" CTA doesn't obviously speak to (corporate, other shoots) */
.hm-inline-cta { font-size: ${n(15,14)}; color: var(--hm-mute); margin: calc(var(--u) * 20) 0 0; }
.hm-inline-cta a {
  color: var(--hm-accent-text); text-decoration: none;
  border-bottom: 1px solid currentColor; padding-bottom: 1px;
  transition: opacity .2s cubic-bezier(.4,0,.2,1);
}
.hm-inline-cta a:hover { opacity: .7; }
.hm-kicker {
  font-family: ${y}; font-size: ${n(12.5,11.5)}; letter-spacing: .12em;
  text-transform: uppercase; color: var(--hm-accent-text);
  margin: 0 0 calc(var(--u) * 18);
}

/* frames + shutter reveal */
.hm-frame { position: relative; overflow: hidden; margin: 0; background: var(--hm-soft); }
.hm-frame-in { position: absolute; inset: calc(-1 * var(--dz)) 0; will-change: transform; }
.hm-frame img { width: 100%; height: 100%; object-fit: cover; }
.hm-js .hm-rv { clip-path: inset(12% 0 12% 0); opacity: 0; filter: brightness(1.3); transform: translateY(14px); }
.hm-js .hm-rv.is-in {
  clip-path: inset(0 0 0 0); opacity: 1; filter: brightness(1); transform: none;
  transition: clip-path .9s cubic-bezier(.16,1,.3,1), opacity .7s cubic-bezier(.16,1,.3,1), filter 1.1s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
}
.hm-static .hm-rv, .hm-root:not(.hm-js) .hm-rv { clip-path: none; opacity: 1; filter: none; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .hm-frame-in { inset: 0; transform: none !important; }
  .hm-line .hm-word { transform: none !important; opacity: 1 !important; }
}

/* sections */
/* One vertical rhythm. Neighbouring sections each contributing 104u stacked
   into a dead band, so the step is smaller and the section owns its own air. */
.hm-manifesto, .hm-morgunn, .hm-sidegi, .hm-vidskipta, .hm-verd, .hm-samband {
  padding: calc(var(--u) * 104) calc(var(--u) * 34);
}
/* ONE image rhythm for the whole page: every figure fills its grid cell, one
   shared gutter, one shared ratio per role (3:2 standing, 21:9 for the two
   full-bleed bands). No negative margins, no percentage widths, no per-figure
   max-widths — those read as arbitrary rather than composed. */
.hm-manifesto { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 48); align-items: center; }
.hm-manifesto-fig { width: 100%; aspect-ratio: 3 / 2 !important; }

.hm-morgunn { display: grid; grid-template-columns: 0.9fr 1.3fr; gap: calc(var(--u) * 48); align-items: center; }
.hm-morgunn-figs { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 24); }
.hm-morgunn-figs .hm-frame { width: 100%; aspect-ratio: 4 / 5 !important; }

.hm-dagur { padding: calc(var(--u) * 110) 0; }
.hm-dagur-head { padding: 0 calc(var(--u) * 34) calc(var(--u) * 44); }
.hm-dagur-bleed { aspect-ratio: 21 / 9 !important; }
.hm-dagur-bleed img { object-position: 50% 30%; }
.hm-dagur-foot {
  /* start-aligned, not centered: a single short paragraph centered against a
     taller image left large dead gaps above and below it (accidental, not a
     considered quiet moment). Starting both columns at the same top line
     reads as a deliberate pairing instead. */
  display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 48);
  align-items: start; padding: calc(var(--u) * 48) calc(var(--u) * 34) 0;
}
.hm-dagur-vara { width: 100%; aspect-ratio: 3 / 2 !important; }

.hm-sidegi { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 48); align-items: center; }
.hm-sidegi-figs .hm-frame { width: 100%; aspect-ratio: 3 / 2 !important; }

/* the contact sheet */
.hm-sheet { position: relative; padding: calc(var(--u) * 120) 0 calc(var(--u) * 80); }
.hm-sheet-head { padding: 0 calc(var(--u) * 34) calc(var(--u) * 40); }
.hm-sheet-track { display: flex; gap: calc(var(--u) * 40); padding: 0 calc(var(--u) * 34); will-change: transform; }
.hm-sheet-cell { flex: 0 0 auto; width: min(44vw, 720px); margin: 0; }
.hm-sheet-cell img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; background: var(--hm-soft); }
.hm-sheet-cell figcaption {
  font-family: ${y}; font-size: ${n(12.5,11.5)};
  padding-top: 10px; color: var(--hm-mute);
}
.hm-sheet-cat { text-transform: uppercase; letter-spacing: .12em; color: var(--hm-accent-text); }
@media (max-width: 767px) {
  .hm-sheet-track { overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
  .hm-sheet-cell { width: 86vw; scroll-snap-align: center; }
}

/* clients */
.hm-vidskipta { text-align: left; padding-bottom: calc(var(--u) * 74); }
/* the client band: one continuous run, edges faded into the canvas */
.hm-marquee {
  margin: calc(var(--u) * 44) calc(var(--u) * -34) 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.hm-marquee-track { display: flex; width: max-content; }
.hm-js .hm-marquee-track { animation: hm-logo-run 42s linear infinite; }
/* hover-pause only where hover is real: on touch a tap fires :hover and
   sticks, stalling the band with no visible way to start it again */
@media (hover: hover) and (pointer: fine) {
  .hm-marquee:hover .hm-marquee-track { animation-play-state: paused; }
}
.hm-marquee:focus-within .hm-marquee-track { animation-play-state: paused; }
@keyframes hm-logo-run { from { transform: translate3d(0,0,0) } to { transform: translate3d(-50%,0,0) } }
.hm-marquee-run {
  list-style: none; display: flex; align-items: center;
  gap: calc(var(--u) * 16); padding: 0 calc(var(--u) * 8); margin: 0;
}
.hm-logo-chip {
  flex: 0 0 auto; width: calc(var(--u) * 190); height: calc(var(--u) * 104);
  background: #FFFFFF; border: 1px solid var(--hm-hair);
  display: grid; place-content: center; padding: calc(var(--u) * 20);
}
.hm-logo-chip img { max-width: 100%; max-height: calc(var(--u) * 56); object-fit: contain; }
@media (prefers-reduced-motion: reduce) {
  .hm-marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
  .hm-marquee-track { animation: none !important; }
  .hm-marquee-run:nth-child(2) { display: none; }
}

/* price list */
.hm-verd-grid {
  list-style: none; display: grid; grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 26); padding: 0; margin: calc(var(--u) * 20) 0 0;
}
.hm-verd-card { border: 1px solid var(--hm-hair); padding: calc(var(--u) * 34); background: color-mix(in srgb, var(--hm-soft) 55%, transparent); }
.hm-verd-name { font-family: ${y}; font-size: ${n(12.5,11.5)}; letter-spacing: .12em; text-transform: uppercase; color: var(--hm-accent-text); margin: 0 0 calc(var(--u) * 16); }
.hm-verd-price { font-family: ${E}; font-weight: 300; font-size: ${n(44,28)}; margin: 0 0 calc(var(--u) * 18); }
.hm-verd-inc { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; font-size: ${n(15,14)}; color: var(--hm-mute); }
.hm-verd-inc li { border-top: 1px solid var(--hm-hair); padding-top: 8px; }

/* contact */
.hm-samband { text-align: center; }
.hm-samband .hm-headline { margin-inline: auto; }
.hm-samband-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: calc(var(--u) * 34); margin-top: calc(var(--u) * 30); }
.hm-samband-tel {
  font-family: ${E}; font-weight: 300; font-size: ${n(56,26)};
  color: inherit; text-decoration: none; transition: color .2s cubic-bezier(.4,0,.2,1);
}
.hm-samband-tel:hover { color: var(--hm-accent-text); }
.hm-cta {
  display: inline-block; font-size: ${n(16,15)}; color: var(--hm-c);
  background: var(--hm-ink); padding: calc(var(--u) * 16) calc(var(--u) * 30);
  text-decoration: none; transition: opacity .25s cubic-bezier(.4,0,.2,1), transform .16s cubic-bezier(.4,0,.2,1);
}
.hm-cta:hover { opacity: .88; }
.hm-cta:active { transform: scale(.97); }
.hm-samband-mail { font-family: ${y}; font-size: ${n(13,12)}; color: var(--hm-mute); margin-top: calc(var(--u) * 22); }

/* footer */
.hm-foot { border-top: 1px solid var(--hm-hair); padding: calc(var(--u) * 54) calc(var(--u) * 34) calc(var(--u) * 70); }
.hm-foot-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 34); }
.hm-foot-mark { font-family: ${y}; font-size: ${n(13,12)}; letter-spacing: .14em; margin: 0 0 10px; }
.hm-foot-line { font-size: ${n(13.5,12.5)}; color: var(--hm-mute); margin: 0 0 6px; line-height: 1.6; }

/* responsive collapse */
@media (max-width: 991px) {
  /* Stacked: one column, every figure fills it — a figure keeping a desktop
     width leaves a dead column beside it. */
  .hm-manifesto, .hm-morgunn, .hm-sidegi, .hm-dagur-foot { grid-template-columns: 1fr; gap: calc(var(--u) * 34); }
  .hm-manifesto-fig, .hm-dagur-vara, .hm-sidegi-figs .hm-frame { width: 100%; aspect-ratio: 16 / 9 !important; }
  .hm-morgunn-figs { grid-template-columns: 1fr 1fr; }
  .hm-logos { grid-template-columns: repeat(3, 1fr); }
  .hm-verd-grid { grid-template-columns: 1fr; }
  .hm-foot-grid { grid-template-columns: 1fr; }
  .hm-wordmark { gap: calc(var(--u) * 14); font-size: clamp(30px, 9.4vw, 64px); }
}
@media (max-width: 640px) {
  .hm-manifesto, .hm-morgunn, .hm-sidegi, .hm-vidskipta, .hm-verd, .hm-samband { padding: 88px 20px; }
  .hm-dagur-head { padding: 0 20px 28px; }
  .hm-dagur-foot { padding: 34px 20px 0; }
  .hm-sheet-head { padding: 0 20px 24px; }
  .hm-sheet-track { padding: 0 20px; }
  .hm-hero-block { left: 20px; right: 20px; bottom: 30px; }
  .hm-logos { grid-template-columns: repeat(2, 1fr); }
  .hm-dagur-bleed { aspect-ratio: 4 / 3 !important; }
  /* the couple sit left-of-centre in the source frame; a narrow crop centred
     on the full 3:2 image loses the bride entirely and keeps only the groom */
  .hm-hero-media img { object-position: 28% center; }
}
`;export{ze as default};
