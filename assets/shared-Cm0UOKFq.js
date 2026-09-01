import{r as x,j as e,L as y,aN as T,e as F,_ as P}from"./index-1dycCaMA.js";import{g as b}from"./index-CzGW6FVa.js";import{aC as h}from"./companies-DOEqWmuu.js";const C="#F5F4F1",D="#191917",H="#A98147",O="'Cabinet Grotesk', system-ui, sans-serif",_="'Geist', system-ui, sans-serif",m="'Space Mono', ui-monospace, monospace",v="/iceland-redesigns/",w="/preview/chrislund",L=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},R=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(hover: hover) and (pointer: fine)").matches)===!0},c=(t,a)=>`clamp(${a}px, calc(var(--u) * ${t}), ${+(t*1.15).toFixed(1)}px)`,q=async()=>{if(!R()||L())return null;const{default:t}=await P(async()=>{const{default:a}=await import("./lenis-niKyKZQP.js");return{default:a}},[]);return new t({duration:1.1,smoothWheel:!0})};function M(t){let a=[],o=0;const n=()=>{a=Array.from(t.querySelectorAll(".cl-rv:not(.is-in)"))};return n(),{refresh:n,tick(){if(!a.length)return;const r=performance.now();if(r-o<200)return;o=r;const l=window.innerHeight,d=[];for(const i of a)i.getBoundingClientRect().top<l?i.classList.add("is-in"):d.push(i);a=d}}}const z="cl-opening-played",Y=()=>{try{return sessionStorage.getItem(z)==="1"}catch{return!1}};function U(t){const a=b.timeline(),o=t.querySelector('[data-cl-enter="media"]'),n=t.querySelector(".cl-nav"),r=t.querySelectorAll('[data-cl-enter="word"] .cl-word'),l=t.querySelectorAll('[data-cl-enter="item"]');o&&a.fromTo(o,{autoAlpha:0,scale:1.06},{autoAlpha:1,scale:1,duration:1.7,ease:"expo.out"},0),n&&a.fromTo(n,{autoAlpha:0,y:-18},{autoAlpha:1,y:0,duration:1,ease:"expo.out"},.1),r.length&&a.fromTo(r,{yPercent:118,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1.15,ease:"expo.out",stagger:.07},.34),l.length&&a.fromTo(l,{y:22,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,ease:"expo.out",stagger:.06},.56),t.classList.remove("cl-pre");try{sessionStorage.setItem(z,"1")}catch{}return a}function V({text:t,size:a,floor:o,as:n="h2",className:r="",measure:l,enter:d}){return e.jsx(n,{"data-cl-headline":!0,"data-cl-enter":d?"word":void 0,"aria-label":t,className:`cl-headline ${r}`,style:{fontSize:c(a,o),maxWidth:l?`calc(var(--u) * ${l})`:void 0},children:t.split(" ").map((i,u,f)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"cl-line",children:e.jsx("span",{className:"cl-word",children:i})}),u<f.length-1?" ":""]},u))})}function W({label:t,right:a}){return e.jsxs("div",{className:"cl-rulehead cl-rv",children:[e.jsx("span",{className:"cl-rule","aria-hidden":"true"}),e.jsxs("span",{className:"cl-rulehead-row",children:[e.jsx("span",{className:"cl-rulehead-label",children:t}),a?e.jsx("span",{className:"cl-rulehead-right",children:a}):null]})]})}function X({fallback:t,label:a="Til baka",light:o=!1}){const n=T(),{key:r}=F(),l=()=>{n(r!=="default"?-1:t)};return e.jsxs("button",{type:"button",className:`cl-back ${o?"is-light":""}`,onClick:l,children:[e.jsx("span",{className:"cl-back-arrow","aria-hidden":"true",children:"←"}),e.jsx("span",{children:a})]})}function K({home:t,onAnchor:a,tone:o="blend"}){const n=[["veggurinn","Veggurinn"],["bokin","Bókin"],["thjonusta","Þjónusta"]];return e.jsxs("header",{className:`cl-nav ${o==="ink"?"is-ink":""}`,children:[t?e.jsx("a",{className:"cl-nav-mark",href:"#top",onClick:a==null?void 0:a("top"),children:"CHRISTOPHER LUND"}):e.jsx(y,{className:"cl-nav-mark",to:w,children:"CHRISTOPHER LUND"}),e.jsxs("nav",{className:"cl-nav-links","aria-label":"Síða",children:[n.map(([r,l])=>t?e.jsx("a",{href:`#${r}`,onClick:a==null?void 0:a(r),children:l},r):e.jsx(y,{to:`${w}#${r}`,children:l},r)),e.jsx(y,{to:`${w}/safn`,children:"Safnið"})]}),e.jsx("a",{className:"cl-nav-cta",href:h.phoneHref,children:h.phone})]})}function J(){const t=x.useRef(null),a=x.useRef(null);return x.useEffect(()=>{if(!R()||L())return;const o=t.current,n=a.current;if(!o||!n)return;let r=0,l=0,d=0,i=0,u=!1,f=!1;const A=b.quickSetter(o,"css"),k=()=>{const p=d-r,s=i-l;p*p+s*s<.02||(r+=p*.18,l+=s*.18,A({x:r-52,y:l-52}))};b.ticker.add(k);const j=p=>{d=p.clientX,i=p.clientY,u||(u=!0,r=d,l=i,o.classList.add("is-live"))},N=p=>{var g,$;const s=($=(g=p.target)==null?void 0:g.closest)==null?void 0:$.call(g,"[data-cursor]");if(s&&!f)f=!0,n.textContent=s.getAttribute("data-cursor")||"",o.classList.add("is-grown");else if(s&&f){const S=s.getAttribute("data-cursor")||"";n.textContent!==S&&(n.textContent=S)}else!s&&f&&(f=!1,o.classList.remove("is-grown"))},E=()=>{u=!1,f=!1,o.classList.remove("is-live"),o.classList.remove("is-grown")};return window.addEventListener("pointermove",j,{passive:!0}),document.addEventListener("pointerover",N,!0),document.documentElement.addEventListener("pointerleave",E),()=>{b.ticker.remove(k),window.removeEventListener("pointermove",j),document.removeEventListener("pointerover",N,!0),document.documentElement.removeEventListener("pointerleave",E)}},[]),e.jsx("div",{className:"cl-cursor",ref:t,"aria-hidden":"true",children:e.jsx("span",{className:"cl-cursor-label",ref:a})})}function Q(){return e.jsx("div",{className:"cl-foot",children:e.jsxs("div",{className:"cl-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cl-foot-mark",children:"CHRISTOPHER LUND"}),e.jsxs("p",{className:"cl-foot-line",children:["Ljósmyndari · ",h.address]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"cl-foot-line",children:["Sími ",e.jsx("a",{className:"cl-foot-tel",href:h.phoneHref,children:h.phone})]}),e.jsx("p",{className:"cl-foot-line",children:"Aðili að 1% For The Planet"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cl-foot-line",children:"Allar myndir og merki eru af chris.is, sótt í ágúst 2026."}),e.jsx("p",{className:"cl-foot-line",children:"Frumgerð frá SNDR."})]})]})})}const Z=`
@font-face { font-family: 'Cabinet Grotesk'; src: url('${v}fonts/cabinet-grotesk/CabinetGrotesk-Variable.woff2') format('woff2'); font-weight: 100 900; font-display: swap; }
@font-face { font-family: 'Geist'; src: url('${v}fonts/geist/Geist-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Geist'; src: url('${v}fonts/geist/Geist-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Space Mono'; src: url('${v}fonts/space-mono/SpaceMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }

/* Safari samples html/body background-color for the status-bar and
   home-indicator strips; it must match the end of the document. */
html, body { background-color: ${C}; }

.cl-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --cl-paper: ${C};
  --cl-ink: ${D};
  --cl-gold: ${H};
  --cl-gold-text: #7C5C2B;
  --cl-mute: #5C5B55;
  --cl-hair: rgb(25 25 23 / .16);
  background: var(--cl-paper);
  color: var(--cl-ink);
  font-family: ${_};
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.cl-root [id] { scroll-margin-top: calc(var(--u) * 50 + 24px); }
.cl-root a, .cl-root button { touch-action: manipulation; }
.cl-root ::selection { background: var(--cl-gold); color: #FFFDF8; }
.cl-root :focus-visible { outline: 2px solid var(--cl-gold-text); outline-offset: 3px; border-radius: 2px; }

/* opening sequence: holding state only, the resting state is visible */
.cl-pre .cl-nav,
.cl-pre [data-cl-enter="media"],
.cl-pre [data-cl-enter="item"] { opacity: 0; visibility: hidden; }
.cl-pre [data-cl-enter="word"] .cl-word { opacity: 0; visibility: hidden; }

/* nav: difference-blend, no bar */
.cl-nav {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: calc(var(--u) * 22) calc(var(--u) * 34);
  padding-top: calc(var(--u) * 22 + env(safe-area-inset-top, 0px));
  mix-blend-mode: difference; color: #EEECE6; pointer-events: none;
}
.cl-nav a { pointer-events: auto; color: inherit; text-decoration: none; transition: opacity .2s cubic-bezier(.16,1,.3,1); }
.cl-nav a:hover { opacity: .7; }
.cl-nav-mark { font-family: ${m}; font-size: ${c(13,12.5)}; letter-spacing: .13em; }
.cl-nav-links { display: flex; gap: calc(var(--u) * 26); font-size: ${c(14,13)}; }
.cl-nav-cta { font-family: ${m}; font-size: ${c(14,13)}; border-bottom: 1px solid currentColor; padding-bottom: 2px; }
.cl-nav.is-ink { mix-blend-mode: normal; color: var(--cl-ink); }
@media (max-width: 640px) { .cl-nav-links { display: none; } }

/* type */
.cl-headline { font-family: ${O}; font-weight: 500; line-height: 1.12; letter-spacing: -.012em; margin: 0 0 calc(var(--u) * 24); }
.cl-line { display: inline-block; overflow: hidden; padding-bottom: .22em; margin-bottom: -.22em; vertical-align: bottom; }
.cl-word { display: inline-block; }
.cl-body { font-size: ${c(17,15)}; line-height: 1.66; color: var(--cl-mute); max-width: 58ch; margin: 0; }

/* drawn rule heads */
.cl-rulehead { margin-bottom: calc(var(--u) * 30); }
.cl-rule { display: block; height: 1px; background: var(--cl-ink); opacity: .5; transform-origin: left; }
.cl-js .cl-rulehead .cl-rule { transform: scaleX(0); }
.cl-js .cl-rulehead.is-in .cl-rule { transform: none; transition: transform 1.1s cubic-bezier(.16,1,.3,1); }
.cl-rulehead-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 20px;
  padding-top: 10px;
}
.cl-rulehead-label, .cl-rulehead-right {
  font-family: ${m}; font-size: ${c(12,12)}; letter-spacing: .16em;
  text-transform: uppercase; color: var(--cl-mute);
}
.cl-rulehead-right { flex: none; }

/* backtracking control */
.cl-back {
  display: inline-flex; align-items: center; gap: 10px; background: none; border: none;
  padding: 4px 0; margin: 0; cursor: pointer; font-family: ${m};
  font-size: ${c(12,12)}; letter-spacing: .16em; text-transform: uppercase;
  color: var(--cl-mute); transition: color .3s cubic-bezier(.16,1,.3,1);
}
.cl-back:hover { color: var(--cl-ink); }
.cl-back-arrow { display: inline-block; transition: transform 180ms cubic-bezier(.16,1,.3,1); }
.cl-back:hover .cl-back-arrow { transform: translateX(-5px); }
.cl-back.is-light { color: #8F8D84; }
.cl-back.is-light:hover { color: #EFEDE7; }

/* reveals */
.cl-js .cl-rv { opacity: 0; transform: translateY(26px); }
.cl-js .cl-rv.is-in { opacity: 1; transform: none; transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1); }
.cl-static .cl-rv, .cl-root:not(.cl-js) .cl-rv { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .cl-word { transform: none !important; opacity: 1 !important; }
}

/* the circle cursor: gold dot at rest, hairline circle over [data-cursor]
   targets. No backdrop-filter: it re-samples the backdrop every frame on an
   element that moves every frame, and a flat tint is indistinguishable over
   photography ([[sandholt-wordmark-lag-purge]]). */
.cl-cursor {
  position: fixed; top: 0; left: 0; width: 104px; height: 104px; z-index: 70;
  pointer-events: none; display: grid; place-items: center;
  opacity: 0; transform: translate3d(-300px, -300px, 0);
  transition: opacity .25s; will-change: transform;
}
.cl-cursor::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  background: var(--cl-gold); border: 1px solid transparent;
  transform: scale(.105);
  transition: transform 240ms cubic-bezier(.23,1,.32,1), background-color .24s, border-color .24s;
}
.cl-cursor.is-live { opacity: 1; }
.cl-cursor.is-grown::before {
  transform: scale(1);
  background: rgb(17 17 15 / .34); border-color: rgb(255 255 255 / .6);
}
.cl-cursor-label {
  position: relative; font-family: ${m}; font-size: 11px; letter-spacing: .2em;
  text-transform: uppercase; color: #F4F1EA; opacity: 0; transform: translateY(8px);
  transition: opacity .24s .04s, transform 240ms cubic-bezier(.23,1,.32,1);
  text-shadow: 0 1px 8px rgb(0 0 0 / .45);
}
.cl-cursor.is-grown .cl-cursor-label { opacity: 1; transform: none; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .cl-root [data-cursor] { cursor: none; }
}
@media (pointer: coarse), (prefers-reduced-motion: reduce) {
  .cl-cursor { display: none; }
}

/* TOUCH TARGETS — a text-scale control on a phone is only as tappable as its
   line box, which put the nav mark at 18px and most links at 22-27px. Expand
   the hit area to the 44px minimum with an overlay rather than padding, so
   nothing in the layout moves, and vertically only, so a control can never
   steal a tap from its neighbour. */
@media (pointer: coarse) {
  .cl-nav-mark, .cl-nav-cta, .cl-nav-links a, .cl-back,
  .cl-bridge-safn, .cl-bridge-tel, .cl-stage-tel, .cl-step,
  .cl-sv-other, .cl-thjonusta-cta, .cl-foot-tel, .cl-rulehead-jump {
    position: relative;
  }
  .cl-nav-mark::after, .cl-nav-cta::after, .cl-nav-links a::after, .cl-back::after,
  .cl-bridge-safn::after, .cl-bridge-tel::after, .cl-stage-tel::after, .cl-step::after,
  .cl-sv-other::after, .cl-thjonusta-cta::after, .cl-foot-tel::after, .cl-rulehead-jump::after {
    content: ''; position: absolute; left: 0; right: 0; top: 50%;
    height: 44px; transform: translateY(-50%);
  }
}

/* footer */
.cl-foot { border-top: 1px solid var(--cl-hair); padding: calc(var(--u) * 54) calc(var(--u) * 34) calc(var(--u) * 70); background: var(--cl-paper); }
.cl-foot-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 34); }
.cl-foot-mark { font-family: ${m}; font-size: ${c(13,12.5)}; letter-spacing: .14em; margin: 0 0 10px; }
.cl-foot-line { font-size: ${c(13.5,12.5)}; color: var(--cl-mute); margin: 0 0 6px; line-height: 1.6; }
.cl-foot-tel { color: inherit; text-decoration: none; border-bottom: 1px solid currentColor; }
@media (max-width: 991px) { .cl-foot-grid { grid-template-columns: 1fr; } }
`;export{X as B,J as C,V as H,W as R,Z as S,K as a,w as b,Q as c,U as d,M as e,q as f,c as g,R as h,Y as o,L as r};
