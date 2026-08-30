import{r as d,c as T,s as A,j as e}from"./index-hZNpox4W.js";import{g as j}from"./index-CzGW6FVa.js";import{S as $}from"./ScrollTrigger-DNECHiyU.js";import{aI as o,aB as v,ay as M,aA as R,aC as k,aK as D,g as B}from"./companies-DOEqWmuu.js";import{P as F}from"./PreviewChrome-BC5yYE0P.js";import{P as I}from"./PreviewFooter-CF_G7BkF.js";import{r as x,o as P,S as _,C as H,a as O,B as G,b as q,H as S,R as z,c as J,d as K,e as V,f as W,g as n}from"./shared-BxL-h5jV.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-BtRMsXKI.js";import"./createLucideIcon-DD4odd3a.js";import"./proxy-BM-DM9zA.js";import"./send-CFVBaahN.js";import"./index-eomRMEot.js";import"./external-link-_65ZYyip.js";import"./x-B2cI6vLf.js";import"./mail-Bph6kbsE.js";import"./SndrBadge-C5wcfMcU.js";j.registerPlugin($);const C=B("chrislund");function U(l,h,m){d.useEffect(()=>{if(!l)return;const r=h.current;if(!r)return;if(x()){r.classList.add("cl-static"),r.classList.remove("cl-pre");return}r.classList.add("cl-js");const w=new IntersectionObserver(i=>i.forEach(f=>f.isIntersecting&&f.target.classList.add("is-in")),{threshold:0,rootMargin:"0px 0px -8% 0px"});r.querySelectorAll(".cl-rv:not(.is-in)").forEach(i=>{i.getBoundingClientRect().top<window.innerHeight&&i.classList.add("is-in"),w.observe(i)});const b=m?K(r):(r.classList.remove("cl-pre"),null),y=V(r),a=()=>{$.update(),y.tick()};window.addEventListener("scroll",a,{passive:!0});let p=null,u=null,g=!1;return W().then(i=>{if(i){if(g){i.destroy();return}p=i,window.__clLenis=i,i.on("scroll",a),u=f=>{i.raf(f*1e3)},j.ticker.add(u),j.ticker.lagSmoothing(0)}}),()=>{g=!0,w.disconnect(),b==null||b.kill(),u&&j.ticker.remove(u),window.removeEventListener("scroll",a),p==null||p.destroy(),window.__clLenis=null}},[l,h,m])}function L({w:l,active:h,onPick:m,sizes:r}){return e.jsxs("button",{type:"button",className:`cl-thumb ${h?"is-selected":""}`,onClick:()=>m(l.id),"data-cursor":"Skoða","aria-label":`${l.title}, ${v(l.series)}`,"aria-current":h?"true":void 0,children:[e.jsx("span",{className:"cl-thumb-media",children:e.jsx("img",{src:l.photo.src,srcSet:R(l.photo.src),sizes:r,alt:l.photo.alt,loading:"lazy",decoding:"async"})}),e.jsx("span",{className:"cl-thumb-cap",children:e.jsx("span",{className:"cl-thumb-title",children:l.title})})]})}function we(){const[l,h]=d.useState(!1),m=d.useRef(null),[r,w]=T(),b=d.useRef(!x()&&!P()),y=b,a=d.useMemo(()=>{const t=r.get("verk");return o.find(s=>s.id===t)??o.find(s=>s.id==="thoka")??o[0]},[r]),p=d.useMemo(()=>o.filter(t=>t.series===a.series&&t.id!==a.id),[a]);d.useEffect(()=>{A("#131311"),document.title=`${a.title} · Safnið · Christopher Lund`;let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t));const s=t.content;t.content=`Safn Christophers Lund: ${o.length} verk úr myndaröðunum sex. ${a.title}, úr röðinni ${v(a.series)}.`;const c=document.documentElement.lang;return document.documentElement.lang="is",h(!0),()=>{t.content=s,document.documentElement.lang=c}},[a]),U(l,m,b.current),d.useEffect(()=>{const t=r.get("rod");if(!t||r.get("verk"))return;const s=document.getElementById(`rod-${t}`);s&&s.scrollIntoView({behavior:"auto",block:"start"})},[l]);const u=()=>window.__clLenis,g=t=>{w({verk:t},{replace:!1});const s=u();s&&!x()?s.scrollTo(0):window.scrollTo({top:0,behavior:x()?"auto":"smooth"})},i=t=>{const s=document.getElementById(`rod-${t}`);if(!s)return;const c=u();c&&!x()?c.scrollTo(s):s.scrollIntoView({behavior:x()?"auto":"smooth"})};d.useEffect(()=>{if(x())return;const t=m.current;if(!t)return;const s=window.setTimeout(()=>{t.querySelectorAll(".cl-rv:not(.is-in)").forEach(c=>{c.getBoundingClientRect().top<window.innerHeight*1.2&&c.classList.add("is-in")})},80);return()=>window.clearTimeout(s)},[a]);const f=o.findIndex(t=>t.id===a.id),E=o[(f-1+o.length)%o.length],N=o[(f+1)%o.length];return e.jsxs("div",{ref:m,className:`cl-root cl-safn-root ${y.current?"cl-pre":""}`,children:[e.jsx("style",{children:_+X}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(M)}}),e.jsx(F,{company:C}),e.jsx(H,{}),e.jsx(O,{home:!1}),e.jsxs("main",{children:[e.jsxs("section",{className:"cl-stage","aria-label":"Valið verk",children:[e.jsx("div",{className:"cl-stage-back",children:e.jsx(G,{light:!0,fallback:q,label:"Til baka á vegginn"})}),e.jsx("div",{className:"cl-stage-media","data-cl-enter":"media",children:e.jsx("figure",{className:"cl-stage-fig",children:e.jsx("img",{src:a.photo.src,srcSet:R(a.photo.src),sizes:"(max-width: 991px) 100vw, 62vw",alt:a.photo.alt,decoding:"async",fetchpriority:"high"})},a.id)}),e.jsxs("div",{className:"cl-stage-rail",children:[e.jsxs("p",{className:"cl-stage-kicker","data-cl-enter":"item",children:["Safnið · ",v(a.series)]}),e.jsx(S,{as:"h1",text:a.title,size:64,floor:30,enter:!0},`t-${a.id}`),e.jsx("p",{className:"cl-body cl-stage-note","data-cl-enter":"item",children:a.note}),e.jsxs("dl",{className:"cl-stage-facts","data-cl-enter":"item",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Myndaröð"}),e.jsx("dd",{children:v(a.series)})]}),a.print&&e.jsxs("div",{children:[e.jsx("dt",{children:"Prent"}),e.jsx("dd",{children:"Fáanleg sem FineArt prent eða til birtinga"})]})]}),e.jsx("div",{className:"cl-stage-ctas","data-cl-enter":"item",children:e.jsxs("a",{className:"cl-stage-tel",href:k.phoneHref,children:["Spyrja um verkið · ",k.phone]})}),e.jsxs("div",{className:"cl-stage-steps","data-cl-enter":"item","aria-label":"Fletta verkum",children:[e.jsxs("button",{type:"button",className:"cl-step",onClick:()=>g(E.id),children:["← ",E.title]}),e.jsxs("button",{type:"button",className:"cl-step cl-step-next",onClick:()=>g(N.id),children:[N.title," →"]})]})]})]}),p.length>0&&e.jsxs("section",{className:"cl-sibl","aria-label":"Svipuð verk",children:[e.jsx(z,{label:"Meira úr sömu röð",right:e.jsxs("button",{type:"button",className:"cl-rulehead-jump",onClick:()=>i(a.series),children:[v(a.series),", öll röðin (",p.length+1,") ↓"]})}),e.jsx("div",{className:"cl-jrow cl-jrow-sibl",children:p.map(t=>e.jsx(L,{w:t,active:!1,onPick:g,sizes:"(max-width: 560px) 92vw, (max-width: 860px) 46vw, 30vw"},t.id))})]}),e.jsxs("section",{className:"cl-cat","aria-label":"Allt safnið",children:[e.jsxs("div",{className:"cl-cat-head",children:[e.jsx(z,{label:"Allt safnið"}),e.jsx(S,{text:"Sex raðir, öll verkin.",size:64,floor:28,measure:640})]}),D.map(t=>{const s=o.filter(c=>c.series===t.key);return s.length?e.jsxs("div",{id:`rod-${t.key}`,className:"cl-cat-series",children:[e.jsxs("div",{className:"cl-cat-series-head cl-rv",children:[e.jsx("h3",{className:"cl-cat-series-name",children:t.name}),e.jsx("span",{className:"cl-cat-series-note",children:t.note})]}),e.jsx("div",{className:"cl-jrow cl-jrow-cat",children:s.map(c=>e.jsx(L,{w:c,active:c.id===a.id,onPick:g,sizes:"(max-width: 560px) 92vw, (max-width: 860px) 46vw, (max-width: 1100px) 31vw, 23vw"},c.id))})]},t.key):null})]}),e.jsxs("section",{className:"cl-safn-close",children:[e.jsx(S,{text:"Næsta mynd byrjar á símtali.",size:72,floor:30,measure:720}),e.jsx("a",{className:"cl-safn-close-tel cl-rv",href:k.phoneHref,children:"822 7601"})]}),e.jsx(J,{})]}),e.jsx(I,{company:C})]})}const X=`
.cl-safn-root { background: #131311; }

/* the stage */
.cl-stage {
  display: grid; grid-template-columns: 1.6fr 1fr;
  column-gap: calc(var(--u) * 60); row-gap: calc(var(--u) * 24);
  grid-template-rows: auto 1fr;
  align-items: center; min-height: 100svh; background: #131311; color: #EFEDE7;
  padding: calc(var(--u) * 96) calc(var(--u) * 34) calc(var(--u) * 70);
}
.cl-stage-back { grid-column: 1 / -1; grid-row: 1; align-self: start; }
.cl-stage-media { grid-row: 2; }
.cl-stage-rail { grid-row: 2; }
.cl-stage-media { display: grid; place-items: center; min-height: 0; }
.cl-stage-fig { margin: 0; width: 100%; display: grid; place-items: center; }
.cl-stage-fig img {
  max-width: 100%; max-height: min(76svh, 900px); width: auto; height: auto;
  display: block; background: #1D1D1A;
  box-shadow: 0 30px 80px rgb(0 0 0 / .45);
}
.cl-js .cl-stage-fig {
  opacity: 1; transform: none;
  transition: opacity 200ms cubic-bezier(.23,1,.32,1), transform 200ms cubic-bezier(.23,1,.32,1);
}
/* A swap starts at 0.38, not 0. Selecting a work replaces the element, so a
   0 start means the stage is BLANK for a frame on every click while browsing;
   dipping instead reads as the print being changed, and at 200ms the dip is
   barely a blink. The full fade-from-nothing belongs to the page entrance,
   which lives on the parent .cl-stage-media. */
@starting-style { .cl-js .cl-stage-fig { opacity: .38; transform: translateY(6px) scale(.995); } }
@media (prefers-reduced-motion: reduce) {
  .cl-js .cl-stage-fig { transition: none; opacity: 1; transform: none; }
}
.cl-stage-kicker { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${n(12,12)}; letter-spacing: .16em; text-transform: uppercase; color: var(--cl-gold); margin: 0 0 calc(var(--u) * 18); }
.cl-stage-rail .cl-headline { color: #F4F1EA; }
.cl-stage-note { color: #B9B7AE; }
.cl-stage-facts { margin: calc(var(--u) * 34) 0 0; display: grid; gap: 14px; }
.cl-stage-facts div { display: grid; grid-template-columns: minmax(88px, auto) 1fr; gap: 18px; padding-top: 12px; border-top: 1px solid rgb(239 237 231 / .16); }
.cl-stage-facts dt { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${n(11.5,11.5)}; letter-spacing: .13em; text-transform: uppercase; color: #8F8D84; }
.cl-stage-facts dd { margin: 0; font-size: ${n(15,13.5)}; color: #D9D7CE; }
.cl-stage-ctas { margin-top: calc(var(--u) * 30); }
.cl-stage-tel {
  display: inline-block; font-family: 'Space Mono', ui-monospace, monospace; font-size: ${n(14,12.5)};
  letter-spacing: .04em; color: var(--cl-gold); text-decoration: none;
  border-bottom: 1px solid currentColor; padding-bottom: 2px;
  transition: color .3s cubic-bezier(.16,1,.3,1);
}
.cl-stage-tel:hover { color: #EFEDE7; }
.cl-stage-steps { display: flex; justify-content: space-between; gap: 16px; margin-top: calc(var(--u) * 44); }
.cl-step {
  background: none; border: none; padding: 0; cursor: pointer; font-family: 'Space Mono', ui-monospace, monospace;
  font-size: ${n(12.5,12)}; letter-spacing: .06em; color: #B9B7AE;
  transition: color .25s cubic-bezier(.16,1,.3,1); text-align: left;
}
.cl-step-next { text-align: right; }
.cl-step:hover { color: #EFEDE7; }

/* siblings + catalogue share the paper ground */
.cl-sibl { background: var(--cl-paper); padding: calc(var(--u) * 76) calc(var(--u) * 34) calc(var(--u) * 30); }

/* UNIFORM GRID — an index wants regularity, not a bespoke row shape.
   Justified rows sized every image from its own ratio, which aligned the
   captions but made each ROW a different height: a trailing row of two ran
   21% taller than the three above it, and a single leftover work sat 29%
   taller while filling a fifth of the width. Measured, that reads as an
   accident rather than a composition.
   Fixed cells remove the whole problem class: every work is the same size,
   every caption lands on the same line, and a short last row is simply a
   row with fewer cells. The crop is only ever on the INDEX -- the stage
   above and the wall on the front page both show the work uncropped. */
.cl-jrow { display: grid; gap: calc(var(--u) * 34) calc(var(--u) * 26); align-items: start; }
.cl-jrow-sibl { grid-template-columns: repeat(3, 1fr); }
.cl-jrow-cat { grid-template-columns: repeat(4, 1fr); }

.cl-cat { background: var(--cl-paper); padding: calc(var(--u) * 90) calc(var(--u) * 34) calc(var(--u) * 60); }
.cl-cat-head { margin-bottom: calc(var(--u) * 40); }
.cl-cat-series { padding: calc(var(--u) * 30) 0 calc(var(--u) * 20); }
.cl-cat-series { scroll-margin-top: calc(var(--u) * 70 + 24px); }
.cl-cat-series-head { display: flex; align-items: baseline; gap: 18px; flex-wrap: wrap; margin-bottom: calc(var(--u) * 24); padding-top: 14px; border-top: 1px solid var(--cl-hair); }
.cl-cat-series-name { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${n(30,21)}; margin: 0; }
.cl-cat-series-note { font-size: ${n(13.5,12.5)}; color: var(--cl-mute); }

/* thumbnails */
.cl-thumb {
  display: block; padding: 0; margin: 0; background: none; border: none;
  text-align: left; color: inherit; cursor: pointer; font-family: inherit;
}
.cl-thumb-media { display: block; overflow: hidden; background: #E4E2DB; aspect-ratio: 4 / 3; }
.cl-thumb-media img { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; transition: transform 200ms cubic-bezier(.23,1,.32,1); }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .cl-thumb:hover .cl-thumb-media img { transform: scale(1.035); }
}
/* press feedback: on touch there is no hover, so without this a tap on a
   thumbnail gives nothing back until the route changes */
.cl-thumb { transition: transform 160ms cubic-bezier(.23,1,.32,1); }
.cl-thumb:active { transform: scale(.98); }
@media (prefers-reduced-motion: reduce) { .cl-thumb:active { transform: none; } }
.cl-thumb-cap { display: block; padding-top: 10px; }
.cl-thumb-title { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${n(16.5,14.5)}; transition: color .3s cubic-bezier(.16,1,.3,1); }
.cl-thumb:hover .cl-thumb-title { color: var(--cl-gold-text); }

/* the jump from a work's siblings to that whole series in the catalogue */
.cl-rulehead-jump {
  background: none; border: none; padding: 0; cursor: pointer; color: var(--cl-gold-text);
  font: inherit; letter-spacing: inherit; text-transform: inherit;
  transition: color .3s cubic-bezier(.16,1,.3,1);
}
.cl-rulehead-jump:hover { color: var(--cl-ink); }
.cl-thumb.is-selected .cl-thumb-media { outline: 2px solid var(--cl-gold); outline-offset: 4px; }
.cl-thumb.is-selected .cl-thumb-title::after { content: ' · valið'; font-family: 'Space Mono', ui-monospace, monospace; font-size: .72em; letter-spacing: .1em; text-transform: uppercase; color: var(--cl-gold-text); }

/* close */
.cl-safn-close { background: var(--cl-paper); text-align: center; padding: calc(var(--u) * 120) calc(var(--u) * 34) calc(var(--u) * 130); }
.cl-safn-close .cl-headline { margin-inline: auto; }
.cl-safn-close-tel {
  display: inline-block; font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${n(90,40)};
  letter-spacing: -.02em; color: var(--cl-ink); text-decoration: none; margin-top: calc(var(--u) * 12);
  transition: color .3s cubic-bezier(.16,1,.3,1); font-variant-numeric: tabular-nums;
}
.cl-safn-close-tel:hover { color: var(--cl-gold-text); }

/* responsive */
@media (max-width: 991px) {
  .cl-stage {
    grid-template-columns: 1fr; grid-template-rows: auto auto auto;
    row-gap: calc(var(--u) * 26); min-height: 0; padding-top: calc(var(--u) * 84);
  }
  .cl-stage-media { grid-row: 2; }
  .cl-stage-rail { grid-row: 3; }
  .cl-stage-fig img { max-height: 62svh; }
}
@media (max-width: 1100px) { .cl-jrow-cat { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 860px) {
  .cl-jrow-sibl, .cl-jrow-cat { grid-template-columns: repeat(2, 1fr); }
}
/* one per row on a phone: two thumbnails at 375px are smaller than the work
   deserves, and a single column keeps the tap targets full width */
@media (max-width: 560px) {
  .cl-jrow { gap: 26px; }
  .cl-jrow-sibl, .cl-jrow-cat { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .cl-stage, .cl-sibl, .cl-cat, .cl-safn-close { padding-left: 20px; padding-right: 20px; }
}
`;export{we as default};
