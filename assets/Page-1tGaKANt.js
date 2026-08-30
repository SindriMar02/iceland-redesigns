import{r as $,s as Pe,j as e}from"./index-D6qpt0oT.js";import{g as G}from"./index-CzGW6FVa.js";import{S as H}from"./ScrollTrigger-DNECHiyU.js";import Me from"./lenis-niKyKZQP.js";import{y as Fe,z as He,A as De,D as de,G as me,K as Re,N as We,O as ye,Q as fe,U as ne,V as Ke,W as le,X as Z,Y as Ve,Z as Be,_ as Ge,$ as Ye,a0 as Xe,a1 as qe,a2 as Je,a3 as Qe,g as Ze}from"./companies-DOEqWmuu.js";import{P as et}from"./PreviewChrome-BcEWr2a9.js";import{P as tt}from"./PreviewFooter-Dt5wL07s.js";import{A as W}from"./arrow-up-right-BlunpPZo.js";import{c as rt}from"./createLucideIcon-Dsh_j6XE.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-BGIlwFZY.js";import"./proxy-jG6Ia-xg.js";import"./send-Du6fFmcv.js";import"./index-D9gJMZFy.js";import"./external-link-CAVtg94Z.js";import"./x-Cg60cx1S.js";import"./mail-B49Ifeux.js";import"./SndrBadge-BNZyCrpP.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);G.registerPlugin(H);const $e=Ze("listak"),X="#F0EFE8",N="#14140F",f="#C03E31",v="#A83428",y="rgba(20,20,15,0.64)",J="#F0EFE8",Y="rgba(240,239,232,0.66)",he="rgba(240,239,232,0.24)",Te="#1E7B34",a="'Familjen Grotesk Var', 'Familjen Grotesk', ui-sans-serif, system-ui, sans-serif",at="'Sentient', Georgia, 'Times New Roman', serif",ze="/iceland-redesigns/",I=t=>`${ze}listak/${t}`,M=`${ze}fonts/`,k="cubic-bezier(0.22, 1, 0.36, 1)",ee=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,nt=()=>typeof window<"u"&&window.matchMedia("(hover: hover) and (pointer: fine)").matches,lt=()=>!ee(),we=()=>lt()&&nt();let pe=null,te=null;const re=new Set,se=new Set;let Q=0;const Se=new WeakMap,q=new Set;let ue=-1e5,xe=-1e5,ae=!1;function ie(t){ue=t.clientX,xe=t.clientY,ae=!0}function oe(){ae=!1}let ce=!1;function it(){ce||!we()||(ce=!0,window.addEventListener("pointermove",ie,{passive:!0}),window.addEventListener("pointerdown",ie,{passive:!0}),document.addEventListener("pointerleave",oe),window.addEventListener("blur",oe))}function ot(){!ce||q.size||(ce=!1,ae=!1,window.removeEventListener("pointermove",ie),window.removeEventListener("pointerdown",ie),document.removeEventListener("pointerleave",oe),window.removeEventListener("blur",oe))}function Ce(){const t=window.innerHeight,s=window.innerWidth,x=[];re.forEach(i=>{const r=i.parentElement;if(!r)return;const m=r.getBoundingClientRect();m.bottom<-240||m.top>t+240||x.push([i,(m.top+m.height/2-t/2)/(t/2+m.height/2),r])});const o=[];se.forEach(i=>{const r=i.getBoundingClientRect();r.right<-s*.6||r.left>s*1.6||o.push([i,(r.left+r.width/2-s/2)/(s/2+r.width/2)])});const d=[];q.forEach(i=>{const r=i.host.getBoundingClientRect();if(r.bottom<0||r.top>t){i.amp>.001&&d.push([i,r.left,r.top]);return}d.push([i,r.left,r.top])});for(let i=0;i<x.length;i++){const[r,m,w]=x[i],b=Number(r.dataset.drift)||9,n=w.dataset.lkHover==="1"?1:0,c=Se.get(r)??0,p=c+(n-c)*.09;Se.set(r,p);const g=-m*b*(1-.55*p);r.style.transform=`translate3d(0px, ${g.toFixed(3)}%, 0)`+(p>.001?` scale(${(1+.036*p).toFixed(4)})`:"")}for(let i=0;i<d.length;i++){const[r,m,w]=d[i];let b=1/0;if(ae)for(let p=0;p<r.ox.length;p++){const g=ue-(m+r.ox[p]),E=xe-(w+r.oy[p]),T=g*g+E*E;T<b&&(b=T)}const n=r.radius*1.15,c=ae&&b<=n*n;r.amp+=((c?1:0)-r.amp)*.12,r.amp<.002&&!c&&(r.amp=0);for(let p=0;p<r.letters.length;p++){let g=r.rest;if(r.amp>0){const T=ue-(m+r.ox[p]),S=xe-(w+r.oy[p]);let R=1-Math.sqrt(T*T+S*S)/r.radius;R=R<0?0:R>1?1:R,R=R*R*(3-2*R);const _=r.lo+(r.hi-r.lo)*R;g=r.rest+(_-r.rest)*r.amp}const E=Math.round(g/20)*20;if(r.last[p]!==E){r.last[p]=E;const T=`'wght' ${E}`;r.letters[p].style.fontVariationSettings=T,r.mirror&&(r.mirror[p].style.fontVariationSettings=T)}}}for(let i=0;i<o.length;i++){const[r,m]=o[i],w=Math.min(1,Math.abs(m)),b=Math.max(0,w-.28),n=Math.round(Math.min(6,b*9)*4)/4,c=(1-Math.min(.05,b*.083)).toFixed(4),p=`${n}|${c}`;r.dataset.lkDof!==p&&(r.dataset.lkDof=p,r.style.filter=n>0?`blur(${n}px)`:"",r.style.transform=`scale(${c})`)}Q=requestAnimationFrame(Ce)}function ve(){!Q&&(re.size||se.size||q.size)&&(Q=requestAnimationFrame(Ce))}function be(){!re.size&&!se.size&&!q.size&&Q&&(cancelAnimationFrame(Q),Q=0)}function ct(t){$.useEffect(()=>{if(ee())return;const s=t.current;if(s)return re.add(s),ve(),()=>{re.delete(s),be()}},[t])}function Oe(t,s){const x=$.useRef(s);x.current=s,$.useEffect(()=>{const o=t.current;if(!o||!we())return;let d=null,i=!1;const r=()=>{if(i)return;const c=x.current,p=(l,j)=>Array.from(o.querySelectorAll(j?`${j} ${l}`:l)),g=p(".lk-vf-ch",c.measureSel),E=c.mirrorSel?p(".lk-vf-ch",c.mirrorSel):[];if(!g.length)return;g.concat(E).forEach(l=>{l.style.fontVariationSettings=`'wght' ${c.rest}`,c.fixWidths&&(l.style.width="")});const S=c.pinSvgLines?p(".lk-vf-line",c.measureSel):[],z=c.pinSvgLines&&c.mirrorSel?p(".lk-vf-line",c.mirrorSel):[];S.concat(z).forEach(l=>{l.removeAttribute("textLength"),l.removeAttribute("lengthAdjust"),Array.from(l.children).forEach(j=>j.removeAttribute("x"))});const R=S.map(l=>{if(typeof l.getNumberOfChars!="function")return null;try{const j=l.getNumberOfChars(),O=[];for(let U=0;U<j;U++){const h=l.getStartPositionOfChar(U),F=l.getEndPositionOfChar(U);O.push((h.x+F.x)/2)}return O}catch{return null}}),_=S.map(l=>typeof l.getComputedTextLength=="function"?l.getComputedTextLength():0),C=o.getBoundingClientRect(),L=[],A=[],D=[];for(let l=0;l<g.length;l++){const j=g[l].getBoundingClientRect();L.push(j.left+j.width/2-C.left),A.push(j.top+j.height/2-C.top),D.push(j.width)}for(let l=0;l<S.length;l++){const j=R[l];if(j&&j.length){const O=U=>{let h=0;Array.from(U.children).forEach(F=>{const P=(F.textContent||"").length;F.classList.contains("lk-vf-ch")&&j[h]!==void 0&&F.setAttribute("x",j[h].toFixed(2)),h+=P})};O(S[l]),z[l]&&O(z[l])}else if(_[l]>0){const O=String(_[l]);S[l].setAttribute("textLength",O),S[l].setAttribute("lengthAdjust","spacing"),z[l]&&(z[l].setAttribute("textLength",O),z[l].setAttribute("lengthAdjust","spacing"))}}if(c.fixWidths)for(let l=0;l<g.length;l++)g[l].style.width=`${D[l].toFixed(2)}px`;d&&q.delete(d),d={host:o,letters:g,mirror:E.length===g.length?E:null,ox:L,oy:A,rest:c.rest,lo:c.lo,hi:c.hi,radius:Math.max(200,window.innerWidth*c.radiusVw),amp:0,last:g.map(()=>-1)},q.add(d),it(),ve()};let m=0;const w=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(r)};document.fonts&&document.fonts.ready?document.fonts.ready.then(w).catch(w):w();let b=0;const n=()=>{window.clearTimeout(b),b=window.setTimeout(r,180)};return window.addEventListener("resize",n),()=>{i=!0,cancelAnimationFrame(m),window.clearTimeout(b),window.removeEventListener("resize",n),d&&(d.letters.concat(d.mirror??[]).forEach(c=>{c.style.fontVariationSettings="",c.style.width=""}),q.delete(d),d=null),ot(),be()}},[t])}function ge(t,s){if(s==="tspan")return Array.from(t).map((d,i)=>d===" "?e.jsx("tspan",{xmlSpace:"preserve",children:" "},i):e.jsx("tspan",{className:"lk-vf-ch",children:d},i));const x=t.split(" "),o=[];return x.forEach((d,i)=>{i>0&&o.push(e.jsx("span",{children:" "},`s${i}`)),o.push(e.jsx("span",{className:"lk-vf-w",children:Array.from(d).map((r,m)=>e.jsx("span",{className:"lk-vf-ch lk-vf-ch-dom",children:r},m))},`w${i}`))}),o}function dt(t){$.useEffect(()=>{const s=t.current;if(!s||!we())return;const x=s.querySelector(".lk-frame"),o=()=>{x&&(x.dataset.lkHover="1")},d=()=>{x&&(x.dataset.lkHover="0")};return s.addEventListener("pointerenter",o),s.addEventListener("pointerleave",d),s.addEventListener("focusin",o),s.addEventListener("focusout",d),()=>{s.removeEventListener("pointerenter",o),s.removeEventListener("pointerleave",d),s.removeEventListener("focusin",o),s.removeEventListener("focusout",d),x&&delete x.dataset.lkHover}},[t])}function je({src:t,srcSet:s,sizes:x,alt:o,drift:d=9,className:i="",style:r,eager:m=!1,w,h:b}){const n=$.useRef(null);return ct(n),e.jsx("div",{className:`lk-frame ${i}`,style:r,children:e.jsx("div",{ref:n,className:"lk-frame-in","data-drift":d,style:{"--dz":`${Math.max(9,d*1.35).toFixed(2)}%`},children:e.jsx("img",{src:t,srcSet:s,sizes:x,width:w,height:b,alt:o,loading:m?"eager":"lazy",decoding:"async",...m?{fetchpriority:"high"}:{}})})})}function mt(t=.18){const s=$.useRef(null),[x,o]=$.useState(!1);return $.useEffect(()=>{const d=s.current;if(!d)return;if(typeof IntersectionObserver>"u"){o(!0);return}const i=new IntersectionObserver(r=>{r.forEach(m=>{m.isIntersecting&&(o(!0),i.unobserve(m.target))})},{threshold:t,rootMargin:"0px 0px -8% 0px"});return i.observe(d),()=>i.disconnect()},[t]),{ref:s,inView:x}}function u({children:t,className:s="",delay:x=0,soft:o=!1}){const{ref:d,inView:i}=mt();return e.jsx("div",{ref:d,className:`${o?"lk-reveal-soft":"lk-reveal"} ${i?"is-in":""} ${s}`,style:i&&x?{animationDelay:`${x}ms`}:void 0,children:t})}const pt=`
  @font-face {
    font-family: 'Familjen Grotesk';
    src: url('${M}familjen-grotesk/familjen-grotesk-v11-latin_latin-ext-regular.woff2') format('woff2');
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Familjen Grotesk';
    src: url('${M}familjen-grotesk/familjen-grotesk-v11-latin_latin-ext-500.woff2') format('woff2');
    font-weight: 500; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Familjen Grotesk';
    src: url('${M}familjen-grotesk/familjen-grotesk-v11-latin_latin-ext-600.woff2') format('woff2');
    font-weight: 600; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Familjen Grotesk';
    src: url('${M}familjen-grotesk/familjen-grotesk-v11-latin_latin-ext-700.woff2') format('woff2');
    font-weight: 700; font-style: normal; font-display: swap;
  }
  /* the VARIABLE face — wght 400..700, its own family so it wins outright.
     Latin-ext first, then Latin: Icelandic (Á Ð Í Ó Ú Ý Þ Æ Ö) lives in
     U+00C0..U+00FF, inside the Latin subset. Any glyph outside both ranges
     falls back to the static faces above, which cover the same design. */
  @font-face {
    font-family: 'Familjen Grotesk Var';
    src: url('${M}familjen-grotesk/familjen-grotesk-variable-latin-ext.woff2') format('woff2');
    font-weight: 400 700; font-style: normal; font-display: swap;
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Familjen Grotesk Var';
    src: url('${M}familjen-grotesk/familjen-grotesk-variable-latin.woff2') format('woff2');
    font-weight: 400 700; font-style: normal; font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Sentient';
    src: url('${M}sentient/Sentient-Light.woff2') format('woff2');
    font-weight: 300; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Sentient';
    src: url('${M}sentient/Sentient-Regular.woff2') format('woff2');
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Sentient';
    src: url('${M}sentient/Sentient-Medium.woff2') format('woff2');
    font-weight: 500; font-style: normal; font-display: swap;
  }

  .lk-root { background: ${X}; color: ${N}; }
  .lk-root ::selection { background: ${f}; color: ${X}; }
  .lk-root a:focus-visible, .lk-root button:focus-visible, .lk-root [tabindex]:focus-visible {
    outline: 2px solid ${f}; outline-offset: 2px;
  }

  .lk-sr {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
  }
  .lk-skip {
    position: fixed; left: 12px; top: -60px; z-index: 90;
    display: inline-flex; align-items: center; min-height: 44px;
    background: ${N}; color: ${X}; padding: 12px 18px;
    font-family: ${a}; font-size: 12px; letter-spacing: 0.14em;
    text-transform: uppercase; transition: top .25s ease;
  }
  .lk-skip:focus-visible { top: 12px; }

  /* ── drift frames (Heklusýn device) ── */
  .lk-frame { position: relative; overflow: hidden; width: 100%; }
  .lk-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; will-change: transform; }
  .lk-frame-in > img { width: 100%; height: 100%; object-fit: cover; }
  /* A drift frame paints its image at ~1.42x its own box width: the --dz
     overhang makes the cover box 1.243x taller than the frame, and the
     corridor parallax scales the <img> a further 1.14x. --lk-fh is the frame
     height at which that product lands exactly on the file's intrinsic width,
     so a tall screen can never make the big panels outrun their own pixels. */
  .lk-stop-frame { max-height: var(--lk-fh, none); max-width: var(--lk-fw, none); }

  /* ── reveals: resting state under reduced motion is fully visible ── */
  @keyframes lk-rise {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lk-rise-soft {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .lk-reveal { opacity: 0; transform: translateY(26px); }
  .lk-reveal.is-in { animation: lk-rise 0.9s ${k} both; }
  .lk-reveal-soft { opacity: 0; transform: translateY(12px); }
  .lk-reveal-soft.is-in { animation: lk-rise-soft 0.7s ${k} both; }

  /* hairline rule that draws in with its reveal (Búðir .bu-rule-draw idea) */
  .lk-rule-draw { transform: scaleX(0); transform-origin: left center; }
  .is-in .lk-rule-draw {
    transform: scaleX(1); transition: transform 1s ${k} 0.08s;
  }

  /* ── metadata pill chips — the ONLY rounded surfaces on the page ── */
  .lk-chip {
    display: inline-flex; align-items: center; gap: 7px;
    border-radius: 999px; padding: 6px 13px;
    font-family: ${a}; font-size: 12px; font-weight: 500;
    letter-spacing: 0.14em; text-transform: uppercase; white-space: nowrap;
  }
  .lk-chip-accent { border: 1px solid ${f}; color: ${v}; }
  .lk-chip-ink { border: 1px solid rgba(20,20,15,0.34); color: ${y}; }
  .lk-chip-paper { border: 1px solid ${he}; color: ${Y}; }

  /* ── buttons — laxa micro-caps DNA, sharp corners (pills are metadata) ── */
  .lk-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    min-height: 46px; border-radius: 2px; padding: 12px 26px;
    font-family: ${a}; font-size: 12px; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase; white-space: nowrap;
    transition: color .4s ${k}, border-color .4s ${k}, background-color .4s ${k};
  }
  .lk-btn-solid { background: ${f}; color: #FFFFFF; border: 1px solid ${f}; }
  .lk-btn-ghost { background: transparent; color: ${N}; border: 1px solid ${f}; }

  /* text link rows — hairline separations carried by the single accent */
  .lk-row {
    position: relative; display: flex; align-items: center; justify-content: space-between;
    gap: 16px; min-height: 56px; padding: 14px 2px; text-decoration: none; color: ${N};
    border-bottom: 1px solid ${f};
  }
  .lk-row .lk-row-arrow { color: ${v}; transition: transform .45s ${k}; }

  /* real N4 press video — sharp corners, hairline border, no shadow */
  .lk-video-frame { overflow: hidden; border-radius: 4px; border: 1px solid ${f}; }
  .lk-video-frame:focus-visible { outline: 2px solid ${v}; outline-offset: 2px; }

  /* ── HERO — wordmark-as-window, permanent ───────────────────────────────
     The photo is visible ONLY through the letter-shaped cutouts in the
     veil; everywhere else is solid stone ground. There is no full-bleed
     reveal state: this is the resting look on every viewport, every input
     mode, with or without JS. .lk-hero-solid exists purely as an invisible,
     measurable twin of the veil's text (elements inside an SVG <mask> have
     no box and cannot be measured directly — see useWeightGroup) and is
     never shown. */
  .lk-hero { position: relative; height: 100svh; overflow: hidden; background: ${N}; }
  .lk-hero-photo { position: absolute; inset: 0; }
  .lk-hero-photo img { filter: saturate(1.05) contrast(1.02); object-position: 50% 28%; }
  .lk-hero-veil { position: absolute; inset: 0; opacity: 1; }
  .lk-hero-solid { position: absolute; inset: 0; opacity: 0; }
  .lk-hero-veil svg, .lk-hero-solid svg { display: block; width: 100%; height: 100%; }
  .lk-hero-type {
    font-family: ${a}; font-weight: 700; letter-spacing: -0.02em;
    font-size: clamp(44px, 17vw, 284px); text-anchor: middle;
  }

  /* ground-toned scrim under the hero's bottom content, always present */
  .lk-hero-foot {
    position: absolute; inset: auto 0 0 0; z-index: 6;
    padding: 120px 20px 26px;
    background: linear-gradient(to top, rgba(240,239,232,0.97) 0%, rgba(240,239,232,0.9) 46%, rgba(240,239,232,0) 100%);
  }
  .lk-hero-credit {
    position: absolute; right: 20px; top: 84px; z-index: 6;
    font-family: ${a}; font-size: 12px; letter-spacing: 0.14em;
    text-transform: uppercase; color: ${N};
    background: rgba(240,239,232,0.85); padding: 6px 10px;
  }

  /* header wordmark waits for the dock */
  .lk-mark { opacity: 1; }

  /* ── corridor — vertical stacked list by default (phones, coarse pointer,
     reduced motion). The horizontal journey CSS exists ONLY inside the
     desktop fine-pointer motion-ok query below. ── */
  .lk-journey { position: relative; background: ${X}; }
  .lk-stop { position: relative; }
  .lk-stop-core { width: 100%; }
  .lk-hud { display: none; }
  /* the corridor scroll hint and the centering tail exist ONLY where the
     horizontal journey itself exists — never in the stacked fallback */
  .lk-hint { display: none; }
  .lk-track-tail { display: none; }

  /* ── MOUNTED PLATES — the resolution rule, expressed in CSS ─────────────
     Six of the nine exhibition images the museum publishes are small; several
     are screenshots they uploaded to their own site and nothing larger exists
     anywhere. So a plate is sized from the FILE, never from the panel:
       --lk-pw  0.8x the file's true intrinsic width  (the outer ceiling)
       --lk-ar  the file's aspect ratio               (w / h, unitless)
     and on the desktop corridor a viewport-height term keeps the whole
     wall-label composition inside one 100svh panel. Nothing may raise these:
     an image is never drawn wider than its own pixels. */
  .lk-platefig {
    margin: 0; display: flex; flex-direction: column; align-items: flex-start;
    gap: 10px; order: -1;
  }
  .lk-plate {
    width: min(var(--lk-pw), 100%);
    padding: 10px; background: #FFFFFF; border: 1px solid ${f};
  }
  .lk-plate > img { display: block; width: 100%; height: auto; }
  .lk-platecap {
    margin: 0; font-family: ${a}; font-size: 12px; letter-spacing: 0.14em;
    text-transform: uppercase; color: ${y};
  }
  .lk-labelgrid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .lk-labelcol { display: flex; flex-direction: column; gap: 8px; }
  .lk-labelrule { height: 1px; width: 100%; background: ${f}; }

  @media (min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    .lk-journey { height: 100svh; overflow: hidden; }
    .lk-track {
      display: flex; width: max-content; height: 100svh; align-items: stretch;
      will-change: transform; backface-visibility: hidden;
    }
    .lk-stop { flex: none; height: 100svh; display: flex; align-items: center; overflow: hidden; }
    /* the pinned journey zeroes the stacked rhythm HERE, not via md: utility
       classes — tablets and reduced-motion desktops get the stacked fallback
       at >=768px and must keep the mobile padding */
    .lk-journey .lk-stop { padding: 0; }
    .lk-hint { display: block; }
    /* trailing spacer so the LAST stop (56vw) lands dead-centre at x=-maxX:
       (100vw - 56vw) / 2 — the walk must end on a sharp, centred frame */
    .lk-track-tail { display: block; flex: none; width: 22vw; height: 100svh; }
    .lk-stop-core {
      display: flex; flex-direction: column; justify-content: center;
      gap: 2.4svh; padding: 10svh 4vw 12svh; will-change: transform, filter;
    }
    .lk-stop-intro { width: 46vw; }
    .lk-stop-std { width: 56vw; }
    .lk-stop-wide { width: 76vw; }
    .lk-stop-plate { width: 56vw; }
    /* the wall-label panels are the WIDEST stops and carry the SMALLEST
       images: the ground around a modest reproduction is the composition */
    .lk-stop-small { width: 66vw; }
    .lk-labelgrid { grid-template-columns: minmax(180px, 1fr) auto; gap: 3vw; align-items: end; }
    .lk-platefig { order: 0; }
    .lk-plate { width: min(var(--lk-pw), 36vw, calc(46svh * var(--lk-ar))); }
    .lk-stop-frame { height: 50svh; width: auto; }
    .lk-stop-wide .lk-stop-frame { height: 56svh; }
    .lk-stop-frame > .lk-frame-in > img { will-change: transform; }
    .lk-hud {
      display: flex; align-items: center; gap: 18px;
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 8;
      padding: 0 32px 18px;
    }
    .lk-hud-rail { position: relative; flex: 1; height: 2px; background: rgba(20,20,15,0.14); }
    .lk-hud-fill {
      position: absolute; inset: 0; background: ${f};
      transform: scaleX(0); transform-origin: left center;
    }
    /* inside the pinned journey the IO reveals would fire oddly — panels are
       laid out horizontally, so rest them visible and let the DOF carry it */
    .lk-journey .lk-reveal, .lk-journey .lk-reveal-soft {
      opacity: 1; transform: none; animation: none;
    }
    .lk-journey .lk-rule-draw { transform: scaleX(1); }
  }
  @media (max-width: 1023.9px) {
    .lk-stop-frame { width: 100%; height: auto; }
  }

  /* ── mobile type floor: nothing customer-facing below 12px ── */
  .lk-eyebrow {
    font-family: ${a}; font-size: 12px; font-weight: 500;
    letter-spacing: 0.14em; text-transform: uppercase;
  }

  /* every link family carries the SAME accent hairline wipe: header nav,
     Fræðsla cards, footer links. One grammar, no opacity fades, no lifts. */
  .lk-nav, .lk-card, .lk-flink { position: relative; }
  .lk-play { border-radius: 2px; background: ${f}; color: #FFFFFF; }

  /* status dot */
  .lk-dot { width: 9px; height: 9px; border-radius: 999px; display: inline-block; flex: none; }

  /* serif register — Um safnið ONLY */
  .lk-serif { font-family: ${at}; }

  /* ── variable-font letter boxes ──
     Inline-block so the measured width can pin them; the pin is what stops a
     letter gaining weight from reflowing the whole line. */
  .lk-vf-w { display: inline-block; white-space: nowrap; }
  .lk-vf-ch-dom { display: inline-block; text-align: center; }

  /* ══ HOVER VOCABULARY ══════════════════════════════════════════════════
     Every hover state on this page lives inside this one query. On a touch
     screen the rules do not exist at all, so a tap can never strand an
     element in a hover state that nothing will clear. One accent, one
     hairline, house easing, 0.4s to 0.6s. */
  @media (hover: hover) and (pointer: fine) {
    /* buttons stay calm: exactly one state change, no lift, no fade */
    .lk-btn-ghost:hover { background: ${f}; color: #FFFFFF; }
    .lk-btn-solid:hover { background: ${v}; border-color: ${v}; }

    /* link rows: the accent hairline WIPES in from the left */
    .lk-row::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
      background: ${v}; transform: scaleX(0); transform-origin: left center;
      transition: transform .55s ${k};
    }
    .lk-row:hover::after, .lk-row:focus-visible::after { transform: scaleX(1); }
    .lk-row:hover .lk-row-arrow, .lk-row:focus-visible .lk-row-arrow {
      transform: translate(4px, -4px);
    }

    /* corridor stops: chip fills, artist line lifts, image scales and
       counter-drifts (the scale + counter-drift are written by the shared
       rAF loop on .lk-frame-in, never by a second animation) */
    .lk-stop-hov .lk-chip-accent {
      transition: background-color .5s ${k}, color .5s ${k}, border-color .5s ${k};
    }
    .lk-stop-hov:hover .lk-chip-accent,
    .lk-stop-hov:focus-within .lk-chip-accent { background: ${f}; color: #FFFFFF; }
    .lk-stop-artist { transition: transform .5s ${k}, color .5s ${k}; }
    .lk-stop-hov:hover .lk-stop-artist,
    .lk-stop-hov:focus-within .lk-stop-artist { transform: translateY(-5px); color: ${N}; }
    /* the 250x313 plate has no drift frame, so it gets the same read in CSS */
    .lk-stop-plate figure img { transition: transform .55s ${k}; }
    .lk-stop-plate:hover figure img,
    .lk-stop-plate:focus-within figure img { transform: scale(1.03); }
    /* the wall-label plates get NO image transform: a reproduction sized to
       its own pixels must not be scaled past them by a hover. The catalogue
       caption carries the state instead. */
    .lk-stop-small .lk-platecap { transition: color .5s ${k}; }
    .lk-stop-small:hover .lk-platecap,
    .lk-stop-small:focus-within .lk-platecap { color: ${v}; }

    .lk-hall:hover { border-color: ${f}; }

    /* header nav + footer links: the hairline wipes in under the text */
    .lk-nav::after, .lk-flink::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: calc(50% - 0.9em);
      height: 2px; background: ${f}; transform: scaleX(0);
      transform-origin: left center; transition: transform .55s ${k};
    }
    .lk-nav:hover::after, .lk-nav:focus-visible::after,
    .lk-flink:hover::after, .lk-flink:focus-visible::after { transform: scaleX(1); }

    /* Fræðsla cards: the same wipe along the card's own bottom hairline */
    .lk-card::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
      background: ${v}; transform: scaleX(0); transform-origin: left center;
      transition: transform .55s ${k};
    }
    .lk-card:hover::after, .lk-card:focus-visible::after { transform: scaleX(1); }
    .lk-card .lk-row-arrow { transition: transform .5s ${k}; }
    .lk-card:hover .lk-row-arrow, .lk-card:focus-visible .lk-row-arrow {
      transform: translate(4px, -4px);
    }

    /* the video trigger joins the accent-fill family: no scale lift */
    .lk-play { transition: background-color .4s ${k}; }
    .lk-video-frame:hover .lk-play, .lk-video-frame:focus-visible .lk-play {
      background: ${v};
    }
  }

  /* ══ §HÚSIÐ — schematic hall index + the museum's own floor plan ══════ */
  .lk-halls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
  @media (min-width: 560px) { .lk-halls { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
  .lk-hall {
    position: relative; display: flex; flex-direction: column; align-items: stretch;
    gap: 5px; min-height: 96px; padding: 10px 11px; text-align: left; cursor: pointer;
    border: 1px solid rgba(20,20,15,0.26); border-radius: 2px;
    background: transparent; color: ${N};
    transition: background-color .4s ${k}, border-color .4s ${k}, color .4s ${k};
  }
  .lk-hall-n {
    font-family: ${a}; font-size: 12px; font-weight: 500; letter-spacing: 0.14em;
    text-transform: uppercase; color: ${y}; transition: color .4s ${k};
  }
  .lk-hall-t {
    font-family: ${a}; font-size: 12px; line-height: 1.32; color: ${y};
    transition: color .4s ${k};
  }
  .lk-hall.is-lit { background: ${f}; border-color: ${f}; color: #FFFFFF; }
  .lk-hall.is-lit .lk-hall-n, .lk-hall.is-lit .lk-hall-t { color: #FFFFFF; }

  .lk-showrow {
    position: relative; display: flex; align-items: baseline; justify-content: space-between;
    gap: 14px; width: 100%; min-height: 56px; padding: 12px 8px; text-align: left;
    border-top: 1px solid rgba(20,20,15,0.26); background: transparent; color: ${N};
    cursor: pointer; transition: background-color .4s ${k}, border-color .4s ${k};
  }
  .lk-showrow:last-child { border-bottom: 1px solid rgba(20,20,15,0.26); }
  .lk-showrow-halls {
    font-family: ${a}; font-size: 12px; font-weight: 500; letter-spacing: 0.14em;
    text-transform: uppercase; white-space: nowrap; color: ${v};
    transition: color .4s ${k};
  }
  .lk-showrow.is-lit { background: rgba(192,62,49,0.08); border-color: ${f}; }
  .lk-showrow.is-lit + .lk-showrow { border-top-color: ${f}; }
  .lk-showrow::after {
    content: ''; position: absolute; left: 0; right: 0; top: -1px; height: 2px;
    background: ${f}; transform: scaleX(0); transform-origin: left center;
    transition: transform .55s ${k};
  }
  .lk-showrow.is-lit::after { transform: scaleX(1); }

  .lk-plan { position: relative; border: 1px solid ${f}; background: #FFFFFF; }
  .lk-plan img { display: block; width: 100%; height: auto; }
  .lk-planpin {
    position: absolute; width: 34px; height: 34px; margin: -17px 0 0 -17px;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid ${f}; border-radius: 999px;
    background: rgba(240,239,232,0.55);
    font-family: ${a}; font-size: 12px; font-weight: 600; letter-spacing: 0.04em;
    color: ${v};
    transition: background-color .4s ${k}, color .4s ${k}, transform .4s ${k};
  }
  .lk-planpin.is-lit { background: ${f}; color: #FFFFFF; transform: scale(1.2); }

  /* ══ LOADER — "húsið opnast, salur fyrir sal" ════════════════════════════
     The twelve-cell hall schematic of §Húsið, switched on. Same grid rhythm
     (3 cols under 560px, 4 above, 8px gap, 1px hairline, 2px radius, the
     same ~1.6 cell ratio) so the page rhymes with itself: the progress meter
     IS the museum's floor plan, not a bar bolted on top of it.

     Motion budget: transform + colour only. Twelve discrete steps over the
     whole life of the sheet, so there is no per-frame work of any kind and
     no second rAF loop — the fills are CSS transitions, driven by a class
     that changes at most twelve times.

     The sheet NEVER touches document/body overflow. That is deliberate: a
     loader that locks scroll is one bad code path away from a permanently
     frozen page, and on a phone it eats the first swipe. Instead the sheet
     is opaque and capped, and any input lands it at once. ══════════════ */
  .lk-load {
    position: fixed; inset: 0; z-index: 200; background: ${X};
    display: flex; align-items: center; justify-content: center;
    padding: 28px 20px;
    transform: translateY(0);
  }
  .lk-load-in { width: min(560px, 100%); }
  /* exit — one composed gesture: the sheet lifts, the plate leaves slightly
     ahead of it, and the hero is simply there underneath in its own resting
     state (the loader never touches .lk-js / .lk-done). */
  .lk-load.is-out { transform: translateY(-101%); transition: transform .7s ${k}; }
  .lk-load.is-out .lk-load-in {
    opacity: 0; transform: translateY(-7%);
    transition: opacity .24s ease-in, transform .7s ${k};
  }

  .lk-load-mark {
    margin: 0; font-family: ${a}; font-weight: 500;
    font-size: clamp(24px, 5.2vw, 44px); line-height: 1.02;
    letter-spacing: -0.02em; text-transform: uppercase; color: ${N};
  }
  .lk-load-mark span { display: block; }

  /* the strip: one hairline track, one accent fill driven by real progress */
  .lk-load-track {
    position: relative; height: 2px; margin-top: 22px;
    background: rgba(20,20,15,0.16); overflow: hidden;
  }
  .lk-load-bar {
    position: absolute; inset: 0; background: ${f};
    transform: scaleX(0); transform-origin: 0 50%;
    transition: transform .34s ${k};
  }
  .lk-load-meta {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 14px; margin-top: 12px;
  }
  .lk-load-count { font-variant-numeric: tabular-nums; color: ${v}; }

  @media (prefers-reduced-motion: reduce) {
    /* belt and braces: the component already never mounts here */
    .lk-load { display: none !important; }
    .lk-frame-in { inset: 0; transform: none !important; }
    .lk-reveal, .lk-reveal-soft {
      opacity: 1 !important; transform: none !important; animation: none !important;
    }
    .lk-rule-draw { transform: scaleX(1) !important; transition: none !important; }
    .lk-btn, .lk-btn:hover, .lk-btn:active { transition: none; transform: none; }
    .lk-row .lk-row-arrow { transition: none; }
    /* the whole hover vocabulary collapses to instant, readable state changes */
    .lk-row::after, .lk-showrow::after,
    .lk-nav::after, .lk-flink::after, .lk-card::after { transition: none !important; }
    .lk-card .lk-row-arrow, .lk-play { transition: none !important; }
    .lk-stop-artist, .lk-stop-hov .lk-chip-accent, .lk-stop-plate figure img,
    .lk-platecap, .lk-hall, .lk-hall-n, .lk-hall-t, .lk-showrow, .lk-planpin {
      transition: none !important;
    }
    .lk-stop-hov:hover .lk-stop-artist,
    .lk-stop-hov:focus-within .lk-stop-artist { transform: none !important; }
    .lk-stop-plate:hover figure img,
    .lk-stop-plate:focus-within figure img { transform: none !important; }
    .lk-planpin.is-lit { transform: none !important; }
  }
`,Ie="LISTASAFNIÐ",Ue="Á AKUREYRI";function Ee({mode:t}){const s=x=>e.jsxs(e.Fragment,{children:[e.jsx("text",{className:"lk-hero-type lk-vf-line",x:"50%",y:"36%",fill:x,children:ge(Ie,"tspan")}),e.jsx("text",{className:"lk-hero-type lk-vf-line",x:"50%",y:"36%",dy:"0.98em",fill:x,children:ge(Ue,"tspan")})]});return t==="solid"?e.jsx("svg",{"aria-hidden":"true",focusable:"false",children:s(N)}):e.jsxs("svg",{"aria-hidden":"true",focusable:"false",children:[e.jsx("defs",{children:e.jsxs("mask",{id:"lk-wordmark-cut",children:[e.jsx("rect",{width:"100%",height:"100%",fill:"#FFFFFF"}),s("#000000")]})}),e.jsx("rect",{width:"100%",height:"100%",fill:X,mask:"url(#lk-wordmark-cut)"})]})}const ft=[{id:"syningar",label:"Sýningarnar"},{id:"husid",label:"Húsið"},{id:"framundan",label:"Framundan"},{id:"fraedsla",label:"Fræðsla"},{id:"ketilhus",label:"Ketilhús"},{id:"um",label:"Um safnið"}];function ke(t){const s=document.getElementById(t);s&&(te?te.scrollTo(s,{offset:0,immediate:ee()}):s.scrollIntoView({behavior:ee()?"auto":"smooth",block:"start"}))}function ht(){return e.jsx("header",{className:"fixed inset-x-0 top-0 z-40",style:{background:"rgba(240,239,232,0.92)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",borderBottom:`1px solid ${f}`},children:e.jsxs("div",{className:"mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8",children:[e.jsx("button",{onClick:()=>te?te.scrollTo(0,{}):window.scrollTo({top:0,behavior:ee()?"auto":"smooth"}),className:"lk-mark flex min-h-[44px] items-center","aria-label":"Listasafnið á Akureyri, efst á síðu",children:e.jsx("img",{src:I("logo.png"),alt:"Listasafnið á Akureyri",className:"h-6 w-auto md:h-7"})}),e.jsxs("nav",{"aria-label":"Aðalvalmynd",className:"hidden items-center gap-7 lg:flex",children:[ft.map(t=>e.jsx("button",{onClick:()=>ke(t.id),className:"lk-nav lk-eyebrow min-h-[44px]",style:{color:N},children:t.label},t.id)),e.jsx("a",{href:me,className:"lk-nav lk-eyebrow flex min-h-[44px] items-center",style:{color:v},children:de})]}),e.jsx("button",{onClick:()=>ke("syningar"),className:"lk-eyebrow flex min-h-[44px] items-center border px-4 lg:hidden",style:{borderColor:f,color:v,borderRadius:2},children:"Sýningarnar"})]})})}function ut({status:t}){const s=$.useRef(null);return Oe(s,{rest:700,lo:400,hi:700,radiusVw:.26,pinSvgLines:!0,measureSel:".lk-hero-solid",mirrorSel:".lk-hero-veil"}),e.jsxs("section",{ref:s,className:"lk-hero",id:"efst","aria-label":"Listasafnið á Akureyri",children:[e.jsx("h1",{className:"lk-sr",children:"Listasafnið á Akureyri"}),e.jsx("div",{className:"lk-hero-photo",children:e.jsx(je,{src:I("show-kristin.jpg"),w:2e3,h:1650,alt:"Kristín Gunnlaugsdóttir í vinnustofu sinni með málningarbakka",drift:13,className:"h-full",eager:!0})}),e.jsx("div",{className:"lk-hero-veil","aria-hidden":"true",children:e.jsx(Ee,{mode:"cut"})}),e.jsx("div",{className:"lk-hero-solid","aria-hidden":"true",children:e.jsx(Ee,{mode:"solid"})}),e.jsx("p",{className:"lk-hero-credit m-0",children:"Kristín Gunnlaugsdóttir í vinnustofu sinni"}),e.jsx("div",{className:"lk-hero-foot",children:e.jsxs("div",{className:"mx-auto flex max-w-[1440px] flex-col gap-4 px-0 md:px-3",children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Listasafnið á Akureyri · Kaupvangsstræti 8"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-3",children:[e.jsx("p",{className:"m-0 flex items-center gap-2.5 text-[16px]",style:{fontFamily:a,color:N},"aria-live":"polite",children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lk-dot","aria-hidden":"true",style:{background:t.open?Te:v}}),t.closedDay?"Lokað í dag":t.open?`Opið núna · í dag ${t.hoursLabel}`:`Lokað núna · opið í dag ${t.hoursLabel}`]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lk-dot","aria-hidden":"true",style:{background:y}}),"Opið alla daga"]})}),e.jsxs("button",{onClick:()=>ke("syningar"),className:"lk-btn lk-btn-ghost",children:["Sýningarnar",e.jsx(W,{size:15,"aria-hidden":!0})]})]}),e.jsxs("p",{className:"m-0 max-w-xl text-[16px] leading-relaxed",style:{fontFamily:a,color:y},children:[Re," Níu sýningar í tólf sölum, undir einu þaki."]})]})})]})}function xt({status:t}){return e.jsxs("section",{id:"stada",className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20","aria-label":"Staðan í dag",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Staðan í dag"})}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-5 md:grid-cols-3",children:[e.jsx(u,{className:"h-full",children:e.jsxs("div",{className:"flex h-full flex-col gap-3 p-6",style:{border:`1px solid ${f}`},children:[e.jsx("h2",{className:"m-0 text-[19px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Opið í dag"}),e.jsx("p",{className:"m-0 flex items-center gap-2.5 text-[16px]",style:{fontFamily:a,color:N},children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lk-dot","aria-hidden":"true",style:{background:t.open?Te:v}}),t.closedDay?"Lokað í dag":`${t.hoursLabel}${t.open?" · opið núna":""}`]}):"Opið alla daga"}),e.jsx("p",{className:"m-0 text-[14px] leading-relaxed",style:{fontFamily:a,color:y},children:"Sumar 10:00–17:00 · vetur 12:00–17:00, alla daga. Lokað 24., 25. og 31. desember og 1. janúar."})]})}),e.jsx(u,{delay:80,className:"h-full",children:e.jsxs("div",{className:"flex h-full flex-col gap-3 p-6",style:{border:`1px solid ${f}`},children:[e.jsx("h2",{className:"m-0 text-[19px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Aðgangur"}),e.jsx("dl",{className:"m-0 flex flex-col gap-1.5",children:We.map(s=>e.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[e.jsx("dt",{className:"text-[14px]",style:{fontFamily:a,color:y},children:s.label}),e.jsx("dd",{className:"m-0 whitespace-nowrap text-[14px] font-medium",style:{fontFamily:a,color:N},children:s.value})]},s.label))})]})}),e.jsx(u,{delay:160,className:"h-full",children:e.jsxs("div",{className:"flex h-full flex-col gap-3 p-6",style:{border:`1px solid ${f}`},children:[e.jsx("h2",{className:"m-0 text-[19px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Ketilkaffi"}),e.jsx("p",{className:"m-0 text-[15px] leading-relaxed",style:{fontFamily:a,color:N},children:"Kaffihús í Ketilhúsi, opið alla daga 08:00–17:00."}),e.jsxs("p",{className:"m-0 mt-auto text-[14px] leading-relaxed",style:{fontFamily:a,color:y},children:[ye," ·"," ",e.jsx("a",{href:me,className:"inline-flex min-h-[44px] items-center",style:{color:v},children:de})]})]})})]})]})}function gt({show:t}){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[e.jsx("span",{className:"lk-chip lk-chip-accent",children:t.chip}),t.dates?e.jsx("span",{className:"lk-chip lk-chip-ink",children:t.dates}):null]})}function kt(t){return{"--lk-pw":`${Math.round(t.natW*.8)}px`,"--lk-ar":String(+(t.natW/t.natH).toFixed(4))}}function yt({show:t,index:s}){const x=$.useRef(null);dt(x);const o=String(s+1).padStart(2,"0"),d=t.plate==="full"?t.layout==="wide"?"lk-stop-wide":"lk-stop-std":t.plate==="mini"?"lk-stop-plate":"lk-stop-small",i=t.natW/t.natH;return e.jsx("article",{ref:x,"data-stop":t.key,className:`lk-stop lk-stop-hov ${d} px-5 py-10`,tabIndex:0,"aria-label":`Sýning ${o} af 09: ${t.title}${t.artist&&t.artist!==t.title?`, ${t.artist}`:""}, ${t.chip}`,children:e.jsxs("div",{className:"lk-stop-core",children:[e.jsx(u,{soft:!0,children:e.jsx("div",{className:"flex items-baseline justify-between gap-4",children:e.jsx(gt,{show:t})})}),t.plate==="mini"?e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("h3",{className:"m-0 mt-4 max-w-[16em] uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.7rem, 5vw, 4.6rem)",lineHeight:1.02,paddingBottom:"0.12em"},children:t.title})}),e.jsxs(u,{delay:60,children:[e.jsx("p",{className:"lk-stop-artist m-0 text-[16px] font-medium",style:{fontFamily:a,color:N},children:t.artist}),e.jsx("p",{className:"lk-stop-artist m-0 mt-1 text-[15px]",style:{fontFamily:a,color:y},children:t.fact})]}),e.jsx(u,{delay:110,children:e.jsxs("figure",{className:"m-0 mt-4 flex items-end gap-4",children:[e.jsx("div",{className:"p-2",style:{border:`1px solid ${f}`,width:`min(${t.natW}px, 56vw)`},children:e.jsx("img",{src:I(t.img),width:t.natW,height:t.natH,alt:t.alt,loading:"lazy",decoding:"async",className:"block h-auto w-full"})}),e.jsx("figcaption",{className:"pb-1 text-[12px] uppercase tracking-[0.14em]",style:{fontFamily:a,color:y},children:"Verk á sýningunni"})]})})]}):t.plate==="small"?e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("h3",{className:"m-0 mt-3 max-w-[13em] uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.5rem, 3vw, 2.9rem)",lineHeight:1.04,paddingBottom:"0.12em"},children:t.title})}),e.jsx(u,{delay:70,children:e.jsxs("div",{className:"lk-labelgrid mt-3",children:[e.jsxs("div",{className:"lk-labelcol",children:[e.jsx("div",{className:"lk-rule-draw lk-labelrule","aria-hidden":"true"}),t.artist&&t.artist!==t.title?e.jsx("p",{className:"lk-stop-artist m-0 text-[16px] font-medium",style:{fontFamily:a,color:N},children:t.artist}):null,e.jsx("p",{className:"lk-stop-artist m-0 text-[15px] leading-relaxed",style:{fontFamily:a,color:y},children:t.fact}),t.datesNote?e.jsx("p",{className:"m-0 text-[14px] leading-relaxed",style:{fontFamily:a,color:y},children:t.datesNote}):null]}),e.jsxs("figure",{className:"lk-platefig",children:[e.jsx("div",{className:"lk-plate",style:kt(t),children:e.jsx("img",{src:I(t.img),width:t.natW,height:t.natH,alt:t.alt,loading:"lazy",decoding:"async"})}),e.jsxs("figcaption",{className:"lk-platecap",children:["Verk úr sýningunni · ",t.chip]})]})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(je,{src:I(t.img),w:t.natW,h:t.natH,srcSet:t.img800?`${I(t.img800)} 800w, ${I(t.img)} ${t.natW}w`:void 0,sizes:t.img800?t.layout==="wide"?"(min-width: 1024px) 88vw, 100vw":"(min-width: 1024px) 56vw, 100vw":void 0,alt:t.alt,drift:9,className:"lk-stop-frame",style:{aspectRatio:String(i),"--lk-fh":`${Math.floor(t.natW/(1.42*i))}px`,"--lk-fw":`${t.natW}px`}})}),e.jsx(u,{delay:60,children:e.jsx("h3",{className:"m-0 mt-2 uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.6rem, 5vw, 4.2rem)",lineHeight:1.02,paddingBottom:"0.12em"},children:t.title})}),e.jsx(u,{delay:100,children:e.jsxs("p",{className:"lk-stop-artist m-0 text-[16px]",style:{fontFamily:a,color:y},children:[t.artist&&t.artist!==t.title?e.jsxs("span",{className:"font-medium",style:{color:N},children:[t.artist," · "]}):null,t.fact,t.datesNote?e.jsxs("span",{children:[" · ",t.datesNote]}):null]})})]})]})})}function wt(){return e.jsxs("section",{id:"syningar",className:"lk-journey","aria-label":"Sýningargangurinn, níu sýningar í gangi",children:[e.jsxs("div",{className:"lk-track",children:[e.jsx("div",{className:"lk-stop lk-stop-intro px-5 py-16",children:e.jsxs("div",{className:"lk-stop-core md:pl-[6vw]",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Sýningargangurinn"})}),e.jsx(u,{delay:70,children:e.jsx("h2",{className:"m-0 mt-3 uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(2rem, 5.4vw, 5rem)",lineHeight:1,paddingBottom:"0.12em"},children:"Níu sýningar, tólf salir"})}),e.jsx(u,{delay:130,children:e.jsxs("p",{className:"m-0 mt-2 max-w-md text-[16px] leading-relaxed",style:{fontFamily:a,color:y},children:[Re," Gengið er í salaröð, frá Sal 01 að Sal 12."]})}),e.jsx(u,{delay:180,children:e.jsx("p",{className:"lk-eyebrow lk-hint m-0 mt-2",style:{color:y},children:"Skrunaðu · gangurinn liggur til hægri"})})]})}),fe.map((t,s)=>e.jsx(yt,{show:t,index:s},t.key)),e.jsx("div",{className:"lk-track-tail","aria-hidden":"true"})]}),e.jsxs("div",{className:"lk-hud","aria-hidden":"true",children:[e.jsx("div",{className:"lk-hud-rail",children:e.jsx("div",{className:"lk-hud-fill"})}),e.jsx("span",{className:"lk-eyebrow lk-hud-count",style:{color:N},children:"01/09"})]})]})}function vt(){var b;const[t,s]=$.useState(null),x=$.useRef(null);Oe(x,{rest:600,lo:420,hi:700,radiusVw:.16,fixWidths:!0});const o=n=>n?fe.find(c=>c.key===n)??null:null,d=t?((b=ne.find(n=>n.id===t))==null?void 0:b.showKey)??null:null,i=n=>ne.filter(c=>c.showKey===n).map(c=>c.id),r=n=>s(n),m=(n,c)=>{n.pointerType==="mouse"&&s(c)},w=n=>s(n||null);return e.jsxs("section",{id:"husid",className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24","aria-label":"Húsið, hvaða sýning er í hvaða sal",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Húsið"})}),e.jsx(u,{delay:60,children:e.jsx("h2",{ref:x,className:"m-0 mt-3 uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.8rem, 4vw, 3.4rem)",lineHeight:1.02,paddingBottom:"0.12em"},children:ge("Hvaða sýning er í hvaða sal","span")})}),e.jsx(u,{delay:110,children:e.jsx("p",{className:"m-0 mt-3 max-w-[42em] text-[16px] leading-relaxed",style:{fontFamily:a,color:y},children:"Níu sýningar standa yfir í tólf sölum. Veldu sal eða sýningu, þá lýsist hitt upp á móti."})}),e.jsxs("div",{className:"mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12",children:[e.jsxs(u,{delay:60,children:[e.jsx("h3",{className:"lk-eyebrow m-0",style:{color:y},children:"Salirnir tólf · skýringarmynd"}),e.jsx("div",{className:"lk-halls mt-3",role:"group","aria-label":"Salir safnsins",children:ne.map(n=>{const c=o(n.showKey),p=n.id===t||d!==null&&n.showKey===d;return e.jsxs("button",{type:"button",className:`lk-hall ${p?"is-lit":""}`,"aria-pressed":p,onPointerEnter:g=>m(g,n.id),onPointerLeave:g=>m(g,null),onFocus:()=>r(n.id),onBlur:()=>r(null),onClick:()=>w(n.id),children:[e.jsxs("span",{className:"lk-hall-n",children:["Salur ",n.id]}),e.jsx("span",{className:"lk-hall-t",children:c?c.title:Ke})]},n.id)})}),e.jsx("p",{className:"m-0 mt-3 text-[13px] leading-relaxed",style:{fontFamily:a,color:y},children:"Skýringarmyndin sýnir röð salanna, ekki lögun hússins eða stærð þeirra."})]}),e.jsxs(u,{delay:120,children:[e.jsx("h3",{className:"lk-eyebrow m-0",style:{color:y},children:"Sýningarnar níu"}),e.jsx("div",{className:"mt-3",children:fe.map(n=>{const c=i(n.key),p=d===n.key;return e.jsxs("button",{type:"button",className:`lk-showrow ${p?"is-lit":""}`,"aria-pressed":p,onPointerEnter:g=>m(g,c[0]??null),onPointerLeave:g=>m(g,null),onFocus:()=>r(c[0]??null),onBlur:()=>r(null),onClick:()=>w(c[0]??""),children:[e.jsxs("span",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-[16px] font-medium uppercase tracking-[-0.01em] md:text-[18px]",style:{fontFamily:a},children:n.title}),e.jsx("span",{className:"text-[13px]",style:{fontFamily:a,color:y},children:n.artist&&n.artist!==n.title?n.artist:n.fact})]}),e.jsx("span",{className:"lk-showrow-halls",children:n.chip})]},n.key)})})]})]}),e.jsx(u,{delay:80,children:e.jsxs("figure",{className:"m-0 mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-12",children:[e.jsxs("div",{className:"lk-plan",children:[e.jsx("img",{src:I(le.src),width:le.w,height:le.h,loading:"lazy",decoding:"async",alt:"Grunnteikning Listasafnsins á Akureyri. Á teikningunni eru salir 01 til 05 tölusettir með rauðu."}),le.marks.map(n=>{var p;const c=n.id===t||d!==null&&((p=ne.find(g=>g.id===n.id))==null?void 0:p.showKey)===d;return e.jsx("span",{className:`lk-planpin ${c?"is-lit":""}`,style:{left:`${n.x}%`,top:`${n.y}%`},"aria-hidden":"true",children:n.id},n.id)})]}),e.jsxs("figcaption",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Grunnteikning"}),e.jsx("p",{className:"m-0 text-[15px] leading-relaxed",style:{fontFamily:a,color:N},children:"Safnið birtir sjálft grunnteikningar af húsinu. Þetta er teikning þeirra, óbreytt."}),e.jsx("p",{className:"m-0 text-[14px] leading-relaxed",style:{fontFamily:a,color:y},children:"Á þessari teikningu eru fimm salir tölusettir, salir 01 til 05, og hringirnir sitja á þeim tölum. Salir 06 til 12 eru ekki á þessu blaði og eru því ekki merktir hér."}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-row",style:{borderTop:`1px solid ${f}`,borderBottom:"none"},children:[e.jsx("span",{className:"text-[15px] font-medium uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Grunnteikningar á listak.is"}),e.jsx(W,{size:16,className:"lk-row-arrow","aria-hidden":!0})]})]})]})})]})}function bt(){return e.jsxs("section",{id:"framundan",className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24","aria-label":"Framundan",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Framundan"})}),e.jsx(u,{delay:60,children:e.jsx("h2",{className:"m-0 mt-3 uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.8rem, 4vw, 3.4rem)",lineHeight:1.02,paddingBottom:"0.12em"},children:"Á dagskrá safnsins"})}),e.jsxs("div",{className:"mt-8",children:[Ve.map((t,s)=>e.jsxs(u,{soft:!0,delay:s*40,children:[e.jsx("div",{className:"lk-rule-draw h-px w-full",style:{background:f},"aria-hidden":"true"}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-row",style:{borderBottom:"none"},children:[e.jsxs("span",{className:"flex items-baseline gap-5",children:[e.jsx("span",{className:"lk-eyebrow",style:{color:y},"aria-hidden":"true",children:String(s+1).padStart(2,"0")}),e.jsx("span",{className:"text-[17px] font-medium uppercase tracking-[-0.01em] md:text-[20px]",style:{fontFamily:a},children:t})]}),e.jsx(W,{size:17,className:"lk-row-arrow","aria-hidden":!0})]})]},t)),e.jsx(u,{soft:!0,children:e.jsx("div",{className:"lk-rule-draw h-px w-full",style:{background:f},"aria-hidden":"true"})})]}),e.jsx(u,{delay:80,children:e.jsx("p",{className:"m-0 mt-5 text-[14px]",style:{fontFamily:a,color:y},children:"Dagsetningar birtast á listak.is þegar nær dregur."})})]})}function jt(){return e.jsxs("section",{id:"fraedsla",className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24","aria-label":"Fræðsla og fyrirlestrar",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Fræðsla og fyrirlestrar"})}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-5 md:grid-cols-3",children:Be.map((t,s)=>e.jsx(u,{delay:s*80,className:"h-full",children:e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-card flex h-full flex-col gap-3 p-6 no-underline",style:{border:`1px solid ${f}`,color:N},children:[e.jsx("h3",{className:"m-0 text-[19px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:t.title}),e.jsx("p",{className:"m-0 text-[15px]",style:{fontFamily:a,color:y},children:t.line}),e.jsxs("span",{className:"lk-eyebrow mt-auto flex items-center gap-2",style:{color:v},children:["Nánar á listak.is",e.jsx(W,{size:14,className:"lk-row-arrow","aria-hidden":!0})]})]})},t.title))})]})}function Nt(){return e.jsx("section",{id:"ketilhus",className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24","aria-label":"Ketilhús og Ketilkaffi",children:e.jsxs("div",{className:"grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",children:[e.jsxs("div",{children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Í húsinu"})}),e.jsx(u,{delay:60,children:e.jsx("h2",{className:"m-0 mt-3 uppercase",style:{fontFamily:a,fontWeight:600,letterSpacing:"-0.015em",fontSize:"clamp(1.8rem, 4vw, 3.4rem)",lineHeight:1.02,paddingBottom:"0.12em"},children:"Ketilhús og Ketilkaffi"})}),e.jsx(u,{delay:120,children:e.jsxs("div",{className:"mt-6 flex flex-col",children:[e.jsxs("div",{className:"py-4",style:{borderTop:`1px solid ${f}`},children:[e.jsx("h3",{className:"m-0 text-[17px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Ketilhús"}),e.jsx("p",{className:"m-0 mt-1.5 text-[15px] leading-relaxed",style:{fontFamily:a,color:y},children:"Viðburðahús safnsins: sýningarrými og útleiga fyrir viðburði."})]}),e.jsxs("div",{className:"py-4",style:{borderTop:`1px solid ${f}`},children:[e.jsx("h3",{className:"m-0 text-[17px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Ketilkaffi"}),e.jsx("p",{className:"m-0 mt-1.5 text-[15px] leading-relaxed",style:{fontFamily:a,color:y},children:"Kaffihús í Ketilhúsi, opið alla daga 08:00–17:00."})]}),e.jsxs("div",{className:"py-4",style:{borderTop:`1px solid ${f}`,borderBottom:`1px solid ${f}`},children:[e.jsx("h3",{className:"m-0 text-[17px] font-semibold uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Safnbúðin"}),e.jsx("p",{className:"m-0 mt-1.5 text-[15px] leading-relaxed",style:{fontFamily:a,color:y},children:"Safnbúð með völdum vörum, sjá myndina hér til hliðar."})]}),e.jsxs("p",{className:"m-0 mt-4 text-[14px]",style:{fontFamily:a,color:y},children:[ye," · ",e.jsx("a",{href:me,className:"inline-flex min-h-[44px] items-center",style:{color:v},children:de})]})]})})]}),e.jsx(u,{delay:100,children:e.jsxs("figure",{className:"m-0",children:[e.jsx(je,{src:I("samsett-mynd-1400.jpg"),w:1400,h:736,srcSet:`${I("samsett-mynd-800.jpg")} 800w, ${I("samsett-mynd-1400.jpg")} 1400w`,sizes:"(min-width: 1024px) 82vw, 100vw",alt:"Samsett mynd úr safnbúð Listasafnsins á Akureyri: vörur og varningur búðarinnar",drift:9,className:"aspect-[4/3]"}),e.jsx("figcaption",{className:"mt-2.5 text-[12px] uppercase tracking-[0.14em]",style:{fontFamily:a,color:y},children:"Safnbúðin"})]})})]})})}const Le="CXHdAGkYNIQ",Ae="Að norðan: Listasafnið á Akureyri — N4";function Ft(){const[t,s]=$.useState(!1);return t?e.jsx("div",{className:"lk-video-frame",style:{aspectRatio:"16/9",background:"#000"},children:e.jsx("iframe",{className:"h-full w-full",src:`https://www.youtube-nocookie.com/embed/${Le}?autoplay=1`,title:Ae,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}):e.jsxs("button",{type:"button",onClick:()=>s(!0),className:"lk-video-frame group relative block w-full cursor-pointer border-0 p-0",style:{aspectRatio:"16/9"},"aria-label":`Spila myndband: ${Ae}`,children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${Le}/hqdefault.jpg`,alt:"",loading:"lazy",className:"h-full w-full object-cover"}),e.jsx("span",{className:"absolute inset-0",style:{background:"rgba(20,20,15,0.28)"},"aria-hidden":!0}),e.jsx("span",{className:"lk-play absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center","aria-hidden":!0,children:e.jsx(st,{size:22,fill:"currentColor",style:{marginLeft:3}})}),e.jsx("span",{className:"absolute bottom-3 left-3 right-3 text-left text-[12px] font-medium uppercase tracking-[0.08em]",style:{fontFamily:a,color:"#fff"},children:"N4 · Að norðan"})]})}function $t(){return e.jsx("section",{id:"um",className:"mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-16","aria-label":"Um safnið",children:e.jsxs("div",{className:"grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-20",children:[e.jsxs("div",{children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Um safnið"})}),e.jsx(u,{delay:70,children:e.jsx("p",{className:"lk-serif m-0 mt-6 max-w-[34em] text-[20px] font-light leading-[1.75] md:text-[23px]",style:{color:N},children:"Listasafnið á Akureyri er opinbert safn sem Akureyrarbær rekur, til húsa við Kaupvangsstræti 8. Í húsinu eru tólf sýningarsalir ásamt Ketilhúsi, viðburðahúsi safnsins, og þar standa níu sýningar yfir samtímis. Safnið er viðurkennt safn."})}),e.jsx(u,{delay:140,children:e.jsxs("div",{className:"mt-8 flex items-center gap-4",children:[e.jsx("img",{src:I("vidurkennt.png"),alt:"Viðurkennt safn, viðurkenningarmerki",width:56,height:56,loading:"lazy",className:"h-14 w-14"}),e.jsx("p",{className:"m-0 text-[14px]",style:{fontFamily:a,color:y},children:"Viðurkennt safn · Rekið af Akureyrarbæ"})]})})]}),e.jsx(u,{delay:120,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(Ft,{}),e.jsx("p",{className:"m-0 mb-6 mt-2 text-[12px]",style:{color:y},children:"Að norðan, N4 sjónvarp: sjónvarpsþáttur um safnið."}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-row",style:{borderTop:`1px solid ${f}`},children:[e.jsx("span",{className:"text-[16px] font-medium uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Vinir Listasafnsins"}),e.jsx(W,{size:16,className:"lk-row-arrow","aria-hidden":!0})]}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-row",children:[e.jsx("span",{className:"text-[16px] font-medium uppercase tracking-[-0.01em]",style:{fontFamily:a},children:"Útleiga á Ketilhúsi"}),e.jsx(W,{size:16,className:"lk-row-arrow","aria-hidden":!0})]})]})})]})})}function St(){const t=[{label:"Instagram · @listak.is",href:Ge},{label:"Facebook",href:Ye},{label:"Póstlisti · skráning á listak.is",href:Xe}];return e.jsxs("section",{id:"fylgstu",className:"mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-14","aria-label":"Fylgstu með",children:[e.jsx(u,{children:e.jsx("p",{className:"lk-eyebrow m-0",style:{color:v},children:"Fylgstu með"})}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-x-10 md:grid-cols-3",children:t.map((s,x)=>e.jsx(u,{soft:!0,delay:x*60,children:e.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"lk-row",style:{borderTop:`1px solid ${f}`,borderBottom:"none"},children:[e.jsx("span",{className:"text-[15px] font-medium",style:{fontFamily:a},children:s.label}),e.jsx(W,{size:16,className:"lk-row-arrow","aria-hidden":!0})]})},s.label))})]})}function Et(){return e.jsxs("footer",{id:"samband",className:"mt-2",style:{background:N,color:J},"aria-label":"Hafðu samband",children:[e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20",children:[e.jsx("p",{className:"m-0 uppercase",style:{fontFamily:a,fontWeight:700,letterSpacing:"-0.02em",fontSize:"clamp(1.7rem, 4.6vw, 4rem)",lineHeight:1,color:J,paddingBottom:"0.22em",marginBottom:"-0.1em"},children:"Listasafnið á Akureyri"}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-10 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:Y},children:"Heimsókn"}),e.jsxs("address",{className:"mt-4 flex flex-col gap-2 not-italic",style:{fontFamily:a},children:[e.jsx("span",{className:"text-[15px]",children:ye}),e.jsx("a",{href:me,className:"lk-flink inline-flex min-h-[44px] w-fit max-w-full items-center text-[15px]",style:{color:J},children:de}),e.jsx("a",{href:Je,className:"lk-flink inline-flex min-h-[44px] w-fit max-w-full items-center break-all text-[15px]",style:{color:J},children:qe})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:Y},children:"Opnunartímar"}),e.jsx("dl",{className:"m-0 mt-4 flex flex-col",children:Qe.map(t=>e.jsxs("div",{className:"flex flex-col gap-0.5 py-2.5",style:{borderTop:`1px solid ${he}`},children:[e.jsx("dt",{className:"text-[13px]",style:{fontFamily:a,color:Y},children:t.label}),e.jsx("dd",{className:"m-0 text-[15px]",style:{fontFamily:a},children:t.value})]},t.label))})]}),e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:Y},children:"Safnið"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:I("vidurkennt.png"),alt:"Viðurkennt safn, viðurkenningarmerki",width:48,height:48,loading:"lazy",className:"h-12 w-12",style:{background:J,padding:4}}),e.jsxs("p",{className:"m-0 text-[14px] leading-relaxed",style:{fontFamily:a,color:Y},children:["Viðurkennt safn",e.jsx("br",{}),"Rekið af Akureyrarbæ"]})]}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"lk-flink lk-eyebrow inline-flex min-h-[44px] w-fit max-w-full items-center gap-2",style:{color:J},children:["listak.is",e.jsx(W,{size:14,"aria-hidden":!0})]})]})]})]}),e.jsx("div",{className:"px-5 py-5 text-center text-[12px] tracking-[0.16em]",style:{fontFamily:a,color:Y,borderTop:`1px solid ${he}`},children:"FRUMGERÐ · SNDR STUDIO"})]})}const Lt=1100,At=180,Rt=700,Tt=1700,zt=.13,_e="lk-loader-seen";function Ct(){if(typeof window>"u"||ee())return!1;try{if(new URLSearchParams(window.location.search).has("loader"))return!0}catch{}try{if(sessionStorage.getItem(_e)==="1")return!1}catch{}return!0}function Ot(){const[t,s]=$.useState(Ct),x=$.useRef(null);return $.useEffect(()=>{if(!t)return;const o=x.current;if(!o)return;try{sessionStorage.setItem(_e,"1")}catch{}const d=o.querySelector(".lk-load-bar"),i=o.querySelector(".lk-load-count"),r=Array.from(document.images).filter(l=>l.loading!=="lazy"||l.complete);let m=r.filter(l=>l.complete).length,w=!1;const b=r.length+1,n=[];r.forEach(l=>{if(l.complete)return;const j=()=>{m+=1};l.addEventListener("load",j,{once:!0}),l.addEventListener("error",j,{once:!0}),n.push(()=>{l.removeEventListener("load",j),l.removeEventListener("error",j)})});try{document.fonts.ready.then(()=>{w=!0})}catch{w=!0}const c=performance.now();let p=0,g=-1,E=0,T=!1,S=0,z=0,R=0;const _=l=>{l!==g&&(d&&(d.style.transform=`scaleX(${l/100})`),i&&(i.textContent=`${String(l).padStart(3,"0")}%`),g=l)},C=()=>{T||(T=!0,window.clearInterval(S),window.clearTimeout(z),n.forEach(l=>l()),window.removeEventListener("pointerdown",A,L),window.removeEventListener("touchmove",A,L),window.removeEventListener("wheel",A,L),window.removeEventListener("keydown",A,L),o.classList.add("is-out"),R=window.setTimeout(()=>s(!1),Rt))},L={passive:!0,capture:!0};function A(){C()}window.addEventListener("pointerdown",A,L),window.addEventListener("touchmove",A,L),window.addEventListener("wheel",A,L),window.addEventListener("keydown",A,L);const D=()=>{const l=performance.now(),j=(m+(w?1:0))/b,O=Math.min(j,(l-c)/Lt);p=Math.min(O,p+zt);const U=p>=1?100:Math.max(0,Math.floor(p*100));_(U),U===100&&(E||(E=l),l-E>=At&&C())};return _(0),S=window.setInterval(D,50),z=window.setTimeout(C,Tt),()=>{window.clearInterval(S),window.clearTimeout(z),window.clearTimeout(R),n.forEach(l=>l()),window.removeEventListener("pointerdown",A,L),window.removeEventListener("touchmove",A,L),window.removeEventListener("wheel",A,L),window.removeEventListener("keydown",A,L)}},[t]),t?e.jsx("div",{ref:x,className:"lk-load","aria-hidden":"true",children:e.jsxs("div",{className:"lk-load-in",children:[e.jsxs("p",{className:"lk-load-mark",children:[e.jsx("span",{children:Ie}),e.jsx("span",{children:Ue})]}),e.jsx("div",{className:"lk-load-track",children:e.jsx("div",{className:"lk-load-bar"})}),e.jsxs("div",{className:"lk-load-meta",children:[e.jsx("p",{className:"lk-eyebrow m-0",style:{color:y},children:"Kaupvangsstræti 8, Akureyri"}),e.jsx("p",{className:"lk-eyebrow lk-load-count m-0",children:"000%"})]})]})}):null}function lr(){const t=$.useRef(null),[s,x]=$.useState(null);return $.useEffect(()=>{document.title=Fe.title,Pe(X),document.documentElement.lang="is";const o=document.querySelector('meta[name="description"]'),d=(o==null?void 0:o.getAttribute("content"))??"";o==null||o.setAttribute("content",Fe.description);const i=document.createElement("script");i.type="application/ld+json",i.textContent=JSON.stringify(He),document.head.appendChild(i);const r=["familjen-grotesk-v11-latin_latin-ext-700.woff2","familjen-grotesk-v11-latin_latin-ext-600.woff2"].map(m=>{const w=document.createElement("link");return w.rel="preload",w.as="font",w.type="font/woff2",w.crossOrigin="anonymous",w.href=`${M}familjen-grotesk/${m}`,document.head.appendChild(w),w});return()=>{o==null||o.setAttribute("content",d),i.remove(),r.forEach(m=>m.remove())}},[]),$.useEffect(()=>{x(De())},[]),$.useEffect(()=>{const o=t.current;if(!o)return;const d=G.matchMedia();return d.add({motion:"(prefers-reduced-motion: no-preference)",desktop:"(min-width: 1024px)",fine:"(pointer: fine)"},i=>{const r=i.conditions;if(!r.motion||!r.desktop||!r.fine)return;const m=new Me({lerp:.1,wheelMultiplier:1,smoothWheel:!0});m.on("scroll",H.update),te=m,window.__lkLenis=m;const w=h=>m.raf(h*1e3);G.ticker.add(w),G.ticker.lagSmoothing(0);const b=o.querySelector(".lk-journey"),n=o.querySelector(".lk-track"),c=o.querySelector(".lk-hud-fill"),p=o.querySelector(".lk-hud-count");if(!b||!n)return;const g=()=>Math.max(1,n.scrollWidth-window.innerWidth),E=G.to(n,{x:()=>-g(),ease:"none",force3D:!0}),T=Array.from(n.querySelectorAll(".lk-stop:not(.lk-stop-intro)"));let S=[],z=1;const R=()=>{z=g(),S=T.map(h=>h.offsetLeft+h.offsetWidth/2)};R();let _=-1;const C=H.create({animation:E,trigger:b,pin:b,scrub:1,start:"top top",end:()=>"+="+g(),anticipatePin:1,invalidateOnRefresh:!0,onRefresh:R,onUpdate:h=>{if(c&&(c.style.transform=`scaleX(${h.progress})`),p&&S.length){const F=z*h.progress+window.innerWidth/2;let P=0,K=1/0;for(let V=0;V<S.length;V++){const B=Math.abs(S[V]-F);B<K&&(K=B,P=V)}P!==_&&(_=P,p.textContent=`${String(P+1).padStart(2,"0")}/09`)}}});pe={master:C,track:n,lenis:m};const L=Array.from(n.querySelectorAll(".lk-stop:not(.lk-stop-intro) .lk-stop-core"));L.forEach(h=>se.add(h)),ve();const A=[];Array.from(n.querySelectorAll(".lk-stop-frame > .lk-frame-in > img")).forEach(h=>{A.push(G.fromTo(h,{xPercent:5.5,scale:1.14},{xPercent:-5.5,scale:1.14,ease:"none",scrollTrigger:{trigger:h.closest(".lk-stop"),containerAnimation:E,start:"left 100%",end:"right 0%",scrub:!0}}))});let D=null;const l=()=>{const h=document.activeElement;D=h&&h!==document.body&&b.contains(h)?h:null},j=()=>{const h=D;D=null,h&&h.isConnected&&document.activeElement!==h&&h.focus({preventScroll:!0})};H.addEventListener("refreshInit",l),H.addEventListener("refresh",j);const O=h=>{var B,Ne;const F=(Ne=(B=h.target)==null?void 0:B.closest)==null?void 0:Ne.call(B,".lk-stop");if(!F||!pe)return;b.scrollLeft=0,b.scrollTop=0;const P=g(),K=Math.min(Math.max(0,F.offsetLeft-(window.innerWidth-F.offsetWidth)/2),P),V=Math.min(C.end,C.start+K/P*(C.end-C.start));Math.abs(window.scrollY-V)<2||m.scrollTo(V,{})};b.addEventListener("focusin",O),document.fonts.ready.then(()=>H.refresh());const U=Array.from(n.querySelectorAll("img"));return Promise.all(U.map(h=>{const F=h;return F.complete&&F.naturalWidth>0?Promise.resolve():(F.decode?F.decode().catch(()=>{}):void 0)??new Promise(K=>{F.addEventListener("load",()=>K(),{once:!0}),F.addEventListener("error",()=>K(),{once:!0})})})).then(()=>{C.progress>0||H.refresh()}),()=>{H.removeEventListener("refreshInit",l),H.removeEventListener("refresh",j),b.removeEventListener("focusin",O),A.forEach(h=>{var F;(F=h.scrollTrigger)==null||F.kill(),h.kill()}),C.kill(),E.kill(),L.forEach(h=>{se.delete(h),h.style.filter="",h.style.transform="",delete h.dataset.lkDof}),be(),G.ticker.remove(w),m.destroy(),delete window.__lkLenis,pe=null,te=null}}),()=>{d.revert()}},[]),e.jsxs("div",{ref:t,lang:"is",className:"lk-root min-h-[100svh] antialiased",style:{fontFamily:a},children:[e.jsx("style",{children:pt}),e.jsx("a",{href:"#meginmal",className:"lk-skip",children:"Beint í efni"}),e.jsx(ht,{}),e.jsxs("main",{id:"meginmal",children:[e.jsx(ut,{status:s}),e.jsx(xt,{status:s}),e.jsx(wt,{}),e.jsx(vt,{}),e.jsx(bt,{}),e.jsx(jt,{}),e.jsx(Nt,{}),e.jsx($t,{}),e.jsx(St,{})]}),e.jsx(Et,{}),e.jsx(tt,{company:$e}),e.jsx(et,{company:$e}),e.jsx(Ot,{})]})}export{lr as default};
