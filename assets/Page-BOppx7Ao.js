import{r as c,j as e,L as z,s as Ce}from"./index-A_JGhuQ-.js";import{u as fe,I as E,H as I,E as i,G as l,D as g,a as y,b as x,c as m,O as le,d as T,i as Ee,B as C,S as Re,e as Le,f as N,g as X,F as S,h as j,A as ne,j as We,L as q,T as ce,k as U,l as se,m as M,n as Me,P as Ae,M as K,o as B,p as He,q as Fe,r as Oe,C as _e}from"./useLang-B0XO4Vb5.js";import"./image-url.umd-SLWVhX7V.js";const Pe=typeof window>"u"?c.useEffect:c.useLayoutEffect,De=`
  /* Flex + centred remainder, not a 3-col grid: the owner can add or remove a
     product in the CMS and the row never leaves an empty cell. See OrderSection. */
  .rb-tease-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:10px;
    margin-top:clamp(26px,4vh,38px); }
  .rb-tease-grid > * { flex:1 1 240px; max-width:calc(33.333% - 7px); }
  .rb-tease-card { display:flex; flex-direction:column; gap:7px; text-decoration:none;
    padding:20px 18px; border:1px solid ${I}; border-radius:4px; background:rgba(243,234,211,.02);
    overflow:hidden;
    transition:border-color .24s ${i}, background .24s ${i}, transform .2s ${i}; }
  /* Optional product photo — a product without one still renders a full card. */
  .rb-tease-pic { margin:-20px -18px 12px; aspect-ratio:4 / 3; overflow:hidden; background:#0B0A09; }
  .rb-tease-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.92); transition:transform .55s ${i}, filter .4s ${i}; }
  .rb-tease-card:hover .rb-tease-pic img { transform:scale(1.045); filter:saturate(1) brightness(1); }
  .rb-tease-card:hover { border-color:${l}; background:rgba(200,168,119,.08); transform:translateY(-2px); }
  .rb-tease-card:focus-visible { outline:2px solid ${l}; outline-offset:3px; }
  .rb-tease-name { font-family:${g}; font-size:clamp(20px,2.1vw,25px); color:${y}; line-height:1.15;
    transition:color .24s ${i}; }
  .rb-tease-card:hover .rb-tease-name { color:${x}; }
  .rb-tease-from { font-size:12.5px; color:${m}; font-variant-numeric:tabular-nums; }
  .rb-tease-blurb { font-size:13.5px; color:${m}; line-height:1.5; margin-top:2px; }

  .rb-tease-foot { display:flex; align-items:center; gap:18px; flex-wrap:wrap;
    margin-top:clamp(26px,4vh,36px); }
  .rb-tease-note { font-size:13.5px; color:${m}; line-height:1.55; max-width:44ch; }

  @media (max-width:860px) { .rb-tease-grid > * { max-width:100%; flex-basis:100%; } }
  @media (prefers-reduced-motion: reduce) {
    .rb-tease-card { transition:none; }
    .rb-tease-card:hover { transform:none; }
  }
`;function Be({lang:t,orderPath:o}){const r=le[t],{ORDER_PRODUCTS:n}=fe();return e.jsxs("section",{id:"order",style:{background:E,padding:"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:De}}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsx("div",{"data-reveal":!0,style:{borderTop:`1px solid ${I}`,paddingTop:16},children:e.jsxs("div",{style:{maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:r.kicker}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...T},children:r.title}),e.jsx("p",{style:{fontSize:16,color:m,margin:"16px 0 0",lineHeight:1.65},children:r.intro})]})}),e.jsx("div",{className:"rb-tease-grid",children:n.map(d=>e.jsxs(z,{to:`${o}?vara=${d.id}`,className:"rb-tease-card",children:[d.image&&e.jsx("span",{className:"rb-tease-pic",children:e.jsx("img",{src:d.image,alt:"",loading:"lazy",decoding:"async",width:1400,height:1050})}),e.jsx("span",{className:"rb-tease-name",children:d.name[t]}),e.jsxs("span",{className:"rb-tease-from",children:[t==="is"?"frá":"from"," ",Ee(d.basePrice)]}),e.jsx("span",{className:"rb-tease-blurb",children:d.blurb[t]})]},d.id))}),e.jsxs("div",{className:"rb-tease-foot",children:[e.jsx(z,{to:o,className:"rb-cta rb-cta-gold",children:r.teaseCta}),e.jsx("span",{className:"rb-tease-note",children:r.teaseNote})]})]})]})}const Ge=`
  .rb-map { margin-top:clamp(26px,4vh,38px); }
  .rb-map-switch { display:flex; gap:6px; margin-bottom:12px; }
  .rb-map-tab { flex:1; min-height:44px; padding:10px 12px; cursor:pointer; font-family:${C};
    font-size:13px; letter-spacing:.04em; color:${m}; background:transparent;
    border:1px solid rgba(238,211,170,.16); border-radius:4px;
    transition:color .22s ${i}, border-color .22s ${i}, background .22s ${i}; }
  .rb-map-tab:hover { color:${y}; border-color:rgba(238,211,170,.36); }
  .rb-map-tab[aria-selected="true"] { color:${x}; border-color:${l}; background:rgba(200,168,119,.09); }
  .rb-map-tab:focus-visible { outline:2px solid ${l}; outline-offset:2px; }

  /* the plate: gold hairline, thin mat, concentric radii, soft lift */
  .rb-map-frame { position:relative; border:1px solid rgba(238,211,170,.22); border-radius:10px; padding:5px;
    background:linear-gradient(160deg, rgba(243,234,211,.06), rgba(243,234,211,.02));
    box-shadow:0 26px 56px -28px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.05); }
  .rb-map-inner { position:relative; border-radius:6px; overflow:hidden; background:${E}; aspect-ratio:4 / 3; }
  /* Inverting flips Google's warm POI pins to vivid blue, which fights the gold
     palette, so saturation is pulled almost out: the map reads as a monochrome
     printed plate instead of a colour widget parked on the page. */
  .rb-map-inner iframe { position:absolute; inset:0; width:100%; height:100%; border:0; display:block;
    filter:invert(1) hue-rotate(180deg) saturate(.14) brightness(.86) contrast(1.08); }
  /* tints the neutral tiles back toward the page's gold */
  .rb-map-inner::after { content:''; position:absolute; inset:0; pointer-events:none;
    background:rgba(200,168,119,.16); mix-blend-mode:soft-light; }

  .rb-map-meta { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; margin-top:12px; }
  .rb-map-addr { font-size:13.5px; color:${m}; line-height:1.5; }
  .rb-map-open { margin-left:auto; font-size:13.5px; color:${x}; text-decoration:none;
    display:inline-flex; align-items:center; gap:6px; padding:12.5px 2px;
    border-bottom:1px solid rgba(238,211,170,.32); transition:color .2s ${i}, border-color .2s ${i}; }
  .rb-map-open:hover { color:${y}; border-bottom-color:${l}; }
  .rb-map-open:focus-visible { outline:2px solid ${l}; outline-offset:3px; border-radius:3px; }

  @media (max-width:620px) {
    .rb-map-meta { flex-direction:column; align-items:flex-start; gap:2px; }
    .rb-map-open { margin-left:0; }
    .rb-map-inner { aspect-ratio:3 / 2; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-map-tab, .rb-map-open { transition:none; }
  }
`;function Ye({lang:t,locations:o}){const[r,n]=c.useState(0),d=o[r]??o[0];if(!d)return null;const u=`https://maps.google.com/maps?q=${encodeURIComponent(d.query)}&z=15&output=embed&hl=${t}`,b=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.query)}`;return e.jsxs("div",{className:"rb-map",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:Ge}}),o.length>1&&e.jsx("div",{className:"rb-map-switch",role:"tablist","aria-label":t==="is"?"Veldu stað":"Choose a location",children:o.map((k,A)=>e.jsx("button",{type:"button",role:"tab","aria-selected":A===r,className:"rb-map-tab",onClick:()=>n(A),children:k.address.split(",")[0]},k.address))}),e.jsx("div",{className:"rb-map-frame",children:e.jsx("div",{className:"rb-map-inner",children:e.jsx("iframe",{src:u,title:`${t==="is"?"Kort":"Map"}: ${d.address}`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0},d.query)})}),e.jsxs("div",{className:"rb-map-meta",children:[e.jsx("span",{className:"rb-map-addr",children:d.address}),e.jsxs("a",{className:"rb-map-open",href:b,target:"_blank",rel:"noreferrer",children:[t==="is"?"Opna í Google kortum":"Open in Google Maps",e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 1h7v7M10 1L1 10",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})}const qe=440,Ue=`
  /* ── paper grain ────────────────────────────────────────────────────────
     The single cheapest thing that separates "dark website" from "printed on
     something". A fixed, non-interactive noise plate over the whole page, at
     an opacity low enough that you read it as paper tooth rather than as
     texture. Fixed rather than attached to a scrolling container on purpose:
     a noise layer inside the scroll flow repaints on every frame and drops
     mobile framerate, and it would also swim against the page instead of
     sitting still like a surface. z-index sits under the lightbox (300) and
     the intro curtain (9999) so neither picks up grain. */
  .rb-page::after { content:''; position:fixed; inset:0; z-index:200; pointer-events:none;
    opacity:.055; mix-blend-mode:overlay; will-change:auto;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
    background-size:200px 200px; }

  .rb-page ::selection { background:${X}; color:${y}; }
  .rb-page a:focus-visible, .rb-page button:focus-visible {
    outline:2px solid ${l}; outline-offset:3px; border-radius:4px;
  }

  /* iOS chrome colour. Safari 26 stopped reading the theme-color meta; it
     samples fixed edge elements' background-color and falls back to BODY's.
     html and body had none, so the status-bar strip and the band under the
     bottom URL bar rendered WHITE on a page that is ink-dark everywhere —
     see [[ios-safe-area-chrome-color]] before touching any of this. */
  html, body { background-color:${N}; }

  .rb-cover { min-height:100svh; }

  @keyframes rb-rise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
  .rb-enter  { animation:rb-rise .9s ${i} both; }
  .rb-enter-2 { animation:rb-rise .9s ${i} .14s both; }
  .rb-enter-3 { animation:rb-rise .9s ${i} .26s both; }
  .rb-enter-4 { animation:rb-rise .9s ${i} .38s both; }

  @keyframes rb-marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  .rb-marquee-track { display:flex; width:max-content; animation:rb-marquee 36s linear infinite; }

  /* the hero pistachio turns slowly and smoothly, in place — a true cutout on
     transparency, so the ground shows through and nothing frames it. */
  @keyframes rb-hero-spin { to { transform:rotate(360deg); } }
  .rb-hero-spin { animation:rb-hero-spin 44s linear infinite; will-change:transform; transform-origin:50% 50%;
    filter:drop-shadow(0 30px 45px rgba(0,0,0,.6)); }

  /* the one full-bleed break: a slow, held breath rather than a static plate */
  @keyframes rb-break-zoom { from { transform:scale(1.08); } to { transform:scale(1); } }
  .rb-break-img { animation:rb-break-zoom 12s ${i} both; }
  @media (prefers-reduced-motion: reduce) { .rb-break-img { animation:none; } }

  /* ── intro loader: the gold script writes itself on, as if piped ──────────── */
  .rb-intro { position:fixed; inset:0; z-index:9999; background:${N};
    display:flex; align-items:center; justify-content:center; cursor:pointer;
    animation:rb-intro-out .6s cubic-bezier(.7,0,.2,1) 1.55s forwards; }
  .rb-intro-logo { position:relative; width:min(74vw,400px); }
  .rb-intro-logo img { width:100%; height:auto; display:block; }
  .rb-intro-draw { clip-path:inset(0 100% 0 0);
    animation:rb-draw 1.3s cubic-bezier(.5,.05,.2,1) .2s forwards; }
  .rb-intro-tip { position:absolute; top:50%; left:0; width:11px; height:11px; margin:-5.5px 0 0 -5.5px;
    border-radius:50%; opacity:0; pointer-events:none;
    background:radial-gradient(circle, ${x} 0%, ${l} 52%, transparent 74%);
    box-shadow:0 0 18px 5px rgba(200,168,119,.5);
    animation:rb-tip 1.3s cubic-bezier(.5,.05,.2,1) .2s forwards; }
  @keyframes rb-draw { to { clip-path:inset(0 0 0 0); } }
  @keyframes rb-tip { 0% { left:0%; opacity:0; } 9% { opacity:1; } 86% { opacity:1; } 100% { left:100%; opacity:0; } }
  @keyframes rb-intro-out { to { opacity:0; visibility:hidden; } }

  /* Italic on hover, not a colour-only shift: on a serif identity the type
     itself can carry the state, and Lusitana's italic is a real cut. */
  .rb-navlink { color:${m}; text-decoration:none; font-size:14.5px;
    transition:color .2s ${i}; }
  .rb-navlink:hover, .rb-navlink:focus-visible { color:${x}; font-style:italic; }

  /* ── sticky bar ─────────────────────────────────────────────────────────
     The masthead is position:relative and scrolls away with the hero, which
     left the entire rest of the page with no navigation and — more costly —
     no way to order without scrolling back. This bar materialises once the
     cover has left the viewport and keeps one action permanently reachable.
     Driven by IntersectionObserver on the cover rather than a scroll
     listener, so nothing runs per-frame. backdrop-filter is safe here
     because the element is fixed; on a scrolling container it would repaint
     continuously and cost real frames on mobile. */
  /* THE AWNING — the only thing that can own the Dynamic Island strip.
     Measured twice in the simulator: a fixed element paints NOTHING above the
     layout viewport (a 120px red cap: zero pixels), but that strip renders
     the SCROLLING document — and position:sticky lives in the scrolling
     layer. Stuck at top:-100px it rests inside the strip itself and paints
     solid ink where the page used to show through (red-awning test: the
     strip filled edge to edge). Negative margin cancels its height, so
     layout is untouched. Requires the page root to use overflow-x:clip —
     overflow-x:hidden silently kills sticky in every descendant. Gated on
     the same state as the bar so the hero keeps its clean opening. */
  /* PERMANENT, from first paint — the strip nothing can leak into. At rest it
     is a real 70px band at the top of the flow, so the masthead starts below
     the Dynamic Island zone instead of sliding under it; once scrolling
     collapses the chrome it sticks 64px above the viewport top and keeps the
     strip solid ink at every scroll position. No opacity gate: gating it on
     scroll state is what let the masthead leak into the island at rest. */
  /* content scrolls under a permanent bar, so anchor jumps must stop short */
  #menu, #bread, #gallery, #visit { scroll-margin-top: 76px; }

  .rb-awning { position:sticky; top:-100px; height:106px; flex:none;
    z-index:140; background:${N}; pointer-events:none; }

  /* SNDR's .bar, verbatim in mechanism (Sindri's own site, the reference he
     named): fixed at top:0 from FIRST PAINT, always visible, never hides,
     never transforms — 88% ink glass over blur with a hairline underneath.
     No observer, no scroll state, no reveal: a header that never moves is a
     header that can never detach, split, or arrive over content. Present at
     first paint also means Safari's chrome sampler sees it immediately. */
  .rb-stickybar { position:fixed; inset:0 0 auto 0; z-index:150;
    display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:10px clamp(16px,4.5vw,72px);
    background-color:rgba(11,10,9,.88);
    -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px);
    border-bottom:1px solid rgba(238,211,170,.14); }
  .rb-sticky-nav { display:flex; gap:22px; align-items:center; }
  .rb-sticky-cta { display:inline-flex; align-items:center; gap:9px; text-decoration:none;
    background:${l}; color:${E}; font-family:${C}; font-size:13.5px; font-weight:600;
    letter-spacing:.02em; padding:9px 17px; border-radius:2px; white-space:nowrap;
    transition:background .2s ${i}, transform .15s ${i}; }
  .rb-sticky-cta:hover { background:${x}; }
  .rb-sticky-cta:active { transform:scale(.98); }
  /* the open/closed dot, carried into the bar so the status stays visible */
  .rb-sticky-dot { width:6px; height:6px; border-radius:50%; flex:0 0 auto; }
  @media (max-width:820px) { .rb-sticky-nav { display:none; } .rb-bar-lang { display:none !important; } }
  
  /* "Closed, we open at 7:00 today" will not fit beside a CTA on a phone —
     the dot alone still carries open/closed, so only the words go. */
  @media (max-width:560px) { .rb-sticky-status { display:none; } }


  .rb-cta {
    display:inline-block; text-decoration:none; font-weight:600; font-size:15.5px;
    padding:14px 30px; border-radius:4px; white-space:nowrap;
    transition:background .25s ${i}, color .25s ${i}, border-color .25s ${i}, transform .18s ${i};
  }
  .rb-cta:active { transform:scale(.98); }
  .rb-cta-gold { background:${l}; color:${N}; border:1px solid ${l}; }
  .rb-cta-gold:hover { background:${x}; border-color:${x}; }
  .rb-cta-ghost { background:transparent; color:${y}; border:1px solid rgba(238,211,170,.34); }
  .rb-cta-ghost:hover { border-color:${l}; background:rgba(238,211,170,.05); }

  .rb-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px; font-family:${C};
    font-size:13px; letter-spacing:.08em; color:${S}; transition:color .2s ${i}; border-radius:4px; }
  .rb-lang[aria-pressed="true"] { color:${x}; }
  .rb-lang:hover { color:${y}; }

  /* ── mobile menu ─────────────────────────────────────────────────────────
     Below 620px the masthead nav is hidden, and below 820px the sticky bar's
     nav goes too — which left a phone with a logo, a status dot and one CTA,
     and no way to reach the menu, the gallery or the story at all. This is
     that navigation, not a shrunken copy of the desktop one: six destinations
     set as a printed list, because the page's whole identity is a serif on
     paper and a phone is where that reads best.

     The button appears in whichever bar is on screen. They are never both
     visible: the sticky bar only materialises once the masthead has scrolled
     away. */
  .rb-burger { display:none; position:relative; width:44px; height:44px; margin-right:-10px;
    align-items:center; justify-content:center; background:none; border:none; cursor:pointer;
    -webkit-tap-highlight-color:transparent; }
  .rb-burger-line { position:absolute; left:12px; width:20px; height:1.5px; background:${y};
    border-radius:2px; transition:transform .4s ${i}, opacity .2s ${i}, background .2s ${i}; }
  .rb-burger-line:nth-child(1) { transform:translateY(-6px); }
  .rb-burger-line:nth-child(3) { transform:translateY(6px); }
  .rb-burger[aria-expanded="true"] .rb-burger-line { background:${x}; }
  .rb-burger[aria-expanded="true"] .rb-burger-line:nth-child(1) { transform:rotate(45deg); }
  .rb-burger[aria-expanded="true"] .rb-burger-line:nth-child(2) { opacity:0; transform:scaleX(.4); }
  .rb-burger[aria-expanded="true"] .rb-burger-line:nth-child(3) { transform:rotate(-45deg); }
  .rb-burger-close { display:inline-flex; }
  @media (max-width:820px) { .rb-burger-bar { display:inline-flex; } }

  /* visibility, not display, so the panel can animate out rather than vanish */
  .rb-menu { position:fixed; inset:0; z-index:300; display:flex; flex-direction:column;
    background:${N};
    background-image:radial-gradient(120% 70% at 50% -10%, rgba(200,168,119,.13), transparent 62%);
    opacity:0; visibility:hidden;
    transition:opacity .42s ${i}, visibility 0s linear .42s; }
  .rb-menu[data-open="true"] { opacity:1; visibility:visible; transition:opacity .42s ${i}, visibility 0s; }
  .rb-menu-top { display:flex; align-items:center; justify-content:space-between;
    padding:calc(10px + env(safe-area-inset-top, 0px)) clamp(16px,4.5vw,72px) 10px; min-height:64px; }
  .rb-menu-nav { flex:1; display:flex; flex-direction:column; justify-content:center;
    padding:0 clamp(22px,6vw,72px); gap:2px; }
  .rb-menu-link { position:relative; display:block; text-decoration:none;
    font-family:${g}; font-size:clamp(30px,8.6vw,44px); line-height:1.18; letter-spacing:.01em;
    padding:clamp(9px,1.5vh,14px) 0; border-bottom:1px solid ${j};
    opacity:0; transform:translateY(16px);
    transition:opacity .5s ${i}, transform .5s ${i}; }
  .rb-menu-link:last-of-type { border-bottom:none; }
  /* the stagger: each line arrives just after the one above, the way a list
     is read rather than the way a grid appears */
  .rb-menu[data-open="true"] .rb-menu-link { opacity:1; transform:none; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(1) { transition-delay:.10s; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(2) { transition-delay:.155s; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(3) { transition-delay:.21s; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(4) { transition-delay:.265s; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(5) { transition-delay:.32s; }
  .rb-menu[data-open="true"] .rb-menu-link:nth-of-type(6) { transition-delay:.375s; }
  /* index, not decoration: it numbers the list like a printed menu card */
  .rb-menu-num { font-family:${C}; font-size:11px; letter-spacing:.16em; color:${S};
    vertical-align:super; margin-right:12px; }
  .rb-menu-link:active { opacity:.72; }

  .rb-menu-foot { padding:clamp(18px,3vh,26px) clamp(22px,6vw,72px) calc(clamp(20px,3vh,30px) + env(safe-area-inset-bottom));
    border-top:1px solid ${j}; display:flex; flex-direction:column; gap:16px;
    opacity:0; transform:translateY(10px); transition:opacity .45s ${i} .34s, transform .45s ${i} .34s; }
  .rb-menu[data-open="true"] .rb-menu-foot { opacity:1; transform:none; }
  .rb-menu-footrow { display:flex; align-items:center; justify-content:space-between; gap:18px; }
  .rb-menu-status { display:flex; align-items:center; gap:8px; font-size:12px; letter-spacing:.08em;
    text-transform:uppercase; }
  .rb-menu-cta { display:block; text-align:center; text-decoration:none; background:${l};
    color:${E}; font-family:${C}; font-size:16px; font-weight:600; letter-spacing:.02em;
    padding:15px 24px; border-radius:3px; transition:background .2s ${i}, transform .15s ${i}; }
  .rb-menu-cta:active { transform:scale(.985); }

  /* Nothing moves, but nothing disappears either: the panel still opens and
     closes, it simply arrives at once. */
  @media (prefers-reduced-motion: reduce) {
    .rb-menu, .rb-menu-link, .rb-menu-foot, .rb-burger-line {
      transition-duration:.01ms !important; transition-delay:0s !important; }
    .rb-menu-link, .rb-menu-foot { opacity:1; transform:none; }
  }

  .rb-row { transition:color .2s ${i}; }
  .rb-row:hover .rb-row-name { color:${x}; }
  .rb-leader { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.32); margin:0 4px; transform:translateY(2px); }

  .rb-foot-link { color:${m}; text-decoration:none; transition:color .2s ${i}; }
  .rb-foot-link:hover { color:${x}; }

  .rb-cover-art { position:absolute; top:50%; right:clamp(-30px,0vw,20px); transform:translateY(-50%);
    width:clamp(300px,40vw,${qe}px); z-index:1; pointer-events:none; display:flex; align-items:center; justify-content:center; }

  /* ── photo gallery: one horizontal strip, scroll-snapped ───────────────── */
  .rb-gallery-strip { display:flex; gap:14px; overflow-x:auto; overflow-y:hidden;
    scroll-snap-type:x mandatory; scroll-padding-left:max(20px,calc((100vw - 1180px) / 2 + 20px));
    padding:4px max(20px,calc((100vw - 1180px) / 2 + 20px)) 18px;
    -webkit-overflow-scrolling:touch; scrollbar-width:thin;
    scrollbar-color:rgba(238,211,170,.28) transparent; }
  .rb-gallery-strip::-webkit-scrollbar { height:6px; }
  .rb-gallery-strip::-webkit-scrollbar-track { background:transparent; }
  .rb-gallery-strip::-webkit-scrollbar-thumb { background:rgba(238,211,170,.28); border-radius:3px; }
  .rb-gallery-strip::-webkit-scrollbar-thumb:hover { background:rgba(238,211,170,.45); }
  /* fixed HEIGHT, auto width: mixed portrait/landscape frames keep their own
     aspect ratios and simply occupy more or less of the strip, which is what
     makes a filmstrip read as a filmstrip rather than as cropped tiles. */
  .rb-gallery-strip .rb-gallery-item { flex:0 0 auto; width:auto; height:clamp(300px,46vh,440px);
    margin:0; scroll-snap-align:start; }
  .rb-gallery-strip .rb-gallery-item img { height:100%; width:auto; }

  /* ── the story: two mirrored chapters over a full-bleed opening plate ──── */
  @keyframes rb-story-zoom { from { transform:scale(1.07); } to { transform:scale(1); } }
  .rb-story-img { animation:rb-story-zoom 14s ${i} both; filter:${ne}; }
  .rb-story-chapter > img { filter:${ne}; }

  .rb-gallery-item { break-inside:avoid; margin:0 0 14px; padding:0; border:0; display:block; width:100%;
    position:relative; overflow:hidden; border-radius:3px; cursor:zoom-in; background:${E};
    box-shadow:0 1px 0 rgba(238,211,170,.06); }
  .rb-gallery-item::after { content:''; position:absolute; inset:0; border-radius:3px;
    border:1px solid rgba(238,211,170,0); transition:border-color .3s ${i}; pointer-events:none; }
  .rb-gallery-item:hover::after, .rb-gallery-item:focus-visible::after { border-color:rgba(238,211,170,.4); }
  .rb-gallery-item img { width:100%; height:auto; display:block; filter:${ne};
    transition:transform .6s ${i}, filter .6s ${i}; }
  .rb-gallery-item:hover img, .rb-gallery-item:focus-visible img { transform:scale(1.045); filter:${We}; }
  /* Anchor targets must clear the sticky bar (63px) or a jumped-to heading
     lands underneath it. */
  .rb-page section[id] { scroll-margin-top:78px; }

  .rb-lightbox { position:fixed; inset:0; z-index:300; background:rgba(11,10,9,.94);
    padding-top:env(safe-area-inset-top, 0px);
    display:flex; align-items:center; justify-content:center; padding:clamp(16px,5vh,56px);
    animation:rb-lb-in .28s ${i} both; }
  @keyframes rb-lb-in { from { opacity:0; } to { opacity:1; } }
  .rb-lightbox-fig { margin:0; max-width:min(92vw,1100px); max-height:88vh; display:flex; flex-direction:column; align-items:center; gap:14px; }
  .rb-lightbox-fig img { max-width:100%; max-height:74vh; width:auto; height:auto; display:block; border-radius:3px;
    box-shadow:0 40px 90px -20px rgba(0,0,0,.7); animation:rb-lb-zoom .32s ${i} both; }
  @keyframes rb-lb-zoom { from { opacity:0; transform:scale(.97); } to { opacity:1; transform:none; } }
  .rb-lightbox-cap { font-family:${C}; font-style:italic; font-size:15px; color:${y}; text-align:center; }
  .rb-lb-btn { position:absolute; background:rgba(19,19,19,.55); border:1px solid rgba(238,211,170,.22); color:${y};
    width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;
    transition:background .2s ${i}, border-color .2s ${i}, transform .15s ${i}; }
  .rb-lb-btn:hover { background:rgba(200,168,119,.16); border-color:${l}; }
  .rb-lb-btn:active { transform:scale(.94); }
  .rb-lb-close { top:clamp(10px,2vh,28px); right:clamp(10px,2vw,28px); }
  .rb-lb-prev { left:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }
  .rb-lb-next { right:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }

  /* ── rotating testimonial: soft crossfade on each key-remount ─────────── */
  @keyframes rb-testi-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-testi-fade { animation:rb-testi-in .7s ${i} both; }
  /* 44px tap target with a small 7px visible dot centered inside (WCAG target size) */
  .rb-testi-dot { width:44px; height:44px; padding:0; border:0; background:transparent; cursor:pointer;
    display:flex; align-items:center; justify-content:center; }
  .rb-testi-dot::after { content:''; width:7px; height:7px; border-radius:50%; border:1px solid rgba(238,211,170,.4);
    transition:background .25s ${i}, border-color .25s ${i}, transform .2s ${i}; }
  .rb-testi-dot:hover::after { border-color:${l}; transform:scale(1.15); }
  .rb-testi-dot[data-active="true"]::after { background:${l}; border-color:${l}; }

  @media (max-width:820px) {
    .rb-gallery-strip { gap:10px; }
    .rb-gallery-item { margin-bottom:10px; }
    .rb-lb-prev { left:4px; } .rb-lb-next { right:4px; }
  }

  @media (max-width:980px) {
    .rb-cover-grid { grid-template-columns:1fr !important; }
    .rb-cover-art { position:static !important; transform:none !important; width:min(62vw,300px) !important; order:-1; margin:0 auto 8px; }
    .rb-cover-copy { text-align:center; align-items:center !important; }
    .rb-cover-meta { justify-content:center !important; }
    .rb-cover-ctas { justify-content:center !important; }
    .rb-menu-cols { grid-template-columns:1fr !important; }
    .rb-feature { grid-template-columns:1fr !important; }
    .rb-feature-art { order:-1; }
    .rb-feature-art > div { width:min(62vw,280px) !important; }
    .rb-bread-grid { grid-template-columns:1fr !important; }
    .rb-catering-grid { grid-template-columns:1fr !important; }
    .rb-visit-grid { grid-template-columns:1fr !important; }
    /* Once the grids are a single column, a frame with its own max-width sits
       in a much wider column and reads as pushed to one side. Auto margins
       centre it. Frames that fill their cell are already 100% wide, so this
       does nothing to them. !important because the width cap and the top
       margin arrive as inline style. */
    .rb-menu-art { margin-left:auto !important; margin-right:auto !important; }
    /* the story's two chapters stack, photo always above its paragraph —
       explicit grid-row/column overrides because the flipped chapter pins
       its image to column 2, which would otherwise survive the collapse. */
    .rb-story-chapter { grid-template-columns:1fr !important; }
    .rb-story-chapter > img { grid-column:1 !important; grid-row:1 !important; }
    .rb-story-chapter > p { grid-column:1 !important; grid-row:2 !important; }
  }
  @media (max-width:620px) {
    .rb-nav-links { display:none !important; }
    .rb-cover-ctas { flex-direction:column; align-items:stretch; }
    .rb-cover-meta { flex-direction:column; gap:6px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-enter, .rb-enter-2, .rb-enter-3, .rb-enter-4 { animation:none; }
    .rb-marquee-track { animation:none; }
    .rb-hero-spin { animation:none; }
    .rb-cta { transition:none; }
    .rb-cta:active { transform:none; }
    .rb-gallery-item img { transition:none; }
    .rb-gallery-item:hover img { transform:none; }
    .rb-lightbox, .rb-lightbox-fig img { animation:none; }
    .rb-testi-fade { animation:none; }
    .rb-story-img { animation:none; }
    .rb-gallery-strip { scroll-snap-type:none; }
  }
`,de=t=>String(t).padStart(2,"0"),oe=t=>`${Math.floor(t/60)}:${de(t%60)}`,xe=t=>`${de(Math.floor(t/60))}:${de(t%60)}`;function Ke(t,o){const r=ce[t],n=o.filter(u=>!u.closed);return{open:!1,label:n.length===o.length&&n.every(u=>u.open===n[0].open&&u.close===n[0].close)?r.statusHours(xe(n[0].open),xe(n[0].close)):r.statusHoursVaried}}function Ve(t,o,r){const n=new Date(t),d=n.getUTCDay(),u=n.getUTCHours()*60+n.getUTCMinutes(),b=r[d],k=ce[o];return!b.closed&&u>=b.open&&u<b.close?{open:!0,label:k.statusOpen(oe(b.close))}:b.closed||u<b.open?{open:!1,label:k.statusOpensToday(oe(b.open))}:{open:!1,label:k.statusOpensTomorrow(oe(r[(d+1)%7].open))}}const v=(t,o=0)=>t?{}:{opacity:0,transform:"translateY(26px)",transition:`opacity .95s ${i} ${o}s, transform .95s ${i} ${o}s`};function ge({item:t,lang:o}){return e.jsxs("div",{className:"rb-row",style:{padding:"20px 0",borderBottom:`1px solid ${j}`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[e.jsxs("span",{className:"rb-row-name",style:{fontFamily:g,fontSize:"clamp(19px,1.9vw,24px)",color:y,transition:`color .2s ${i}`},children:[t.name,t.tag&&e.jsx("span",{style:{fontFamily:C,fontSize:10.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:x,background:X,padding:"3px 8px",borderRadius:4,marginLeft:12,verticalAlign:"middle"},children:t.tag[o]})]}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:16,fontWeight:600,color:l,whiteSpace:"nowrap"},children:t.price})]}),t.desc[o]&&e.jsx("p",{style:{fontSize:14,lineHeight:1.55,color:m,margin:"8px 0 0",maxWidth:"46ch"},children:t.desc[o]})]})}function V({art:t,lang:o,fill:r,style:n}){return e.jsxs("figure",{className:"rb-menu-art",style:{margin:0,display:"flex",flexDirection:"column",height:r?"100%":void 0,...n},children:[e.jsx("div",{style:{overflow:"hidden",borderRadius:3,flex:r?"1 1 auto":void 0,aspectRatio:r?void 0:`${t.w} / ${t.h}`},children:e.jsx("img",{src:t.src,alt:t.cap[o],loading:"lazy",decoding:"async",width:t.w,height:t.h,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),e.jsxs("figcaption",{style:{display:"flex",alignItems:"baseline",gap:4,padding:"16px 0 14px",borderBottom:`1px solid ${j}`},children:[e.jsx("span",{style:{fontFamily:g,fontStyle:"italic",fontSize:"clamp(15px,1.5vw,17px)",color:S},children:t.cap[o]}),t.price&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:14,fontWeight:600,color:l,whiteSpace:"nowrap"},children:t.price})]})]})]})}function ue({art:t,text:o,reduced:r,flip:n}){return e.jsxs("div",{"data-reveal":!0,className:"rb-story-chapter",style:{...v(r,.08),display:"grid",gridTemplateColumns:n?"minmax(280px,420px) minmax(0,480px)":"minmax(0,480px) minmax(280px,420px)",gap:"clamp(28px,5vw,72px)",justifyContent:"center",alignItems:"center"},children:[e.jsx("img",{src:t.src,alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",width:t.w,height:t.h,style:{gridColumn:n?2:1,gridRow:1,width:"100%",height:"auto",display:"block",borderRadius:3}}),e.jsx("p",{style:{gridColumn:n?1:2,gridRow:1,margin:0,borderLeft:`2px solid ${X}`,paddingLeft:"clamp(18px,2.4vw,32px)",fontSize:"clamp(17px,1.9vw,21px)",lineHeight:1.72,color:"rgba(243,234,211,.86)"},children:o})]})}function Xe({photo:t,lang:o,onOpen:r,style:n}){return e.jsx("button",{type:"button",className:"rb-gallery-item","data-reveal":!0,style:n,onClick:r,"aria-label":t.caption[o],children:e.jsx("img",{src:t.srcSm,srcSet:`${t.srcSm} 800w, ${t.src} 2000w`,sizes:"(max-width:480px) 92vw, (max-width:820px) 46vw, (max-width:1239px) 31vw, 384px",alt:t.caption[o],loading:"lazy",decoding:"async",style:{aspectRatio:`${t.w} / ${t.h}`}})})}function Qe({lang:t,reduced:o,reviews:r}){const[n,d]=c.useState(0),[u,b]=c.useState(!1);c.useEffect(()=>{if(o||u||r.length<=1)return;const A=window.setInterval(()=>d(f=>(f+1)%r.length),6500);return()=>window.clearInterval(A)},[o,u,r]),c.useEffect(()=>{n>=r.length&&d(0)},[r,n]);const k=r[n]??r[0];return e.jsxs("div",{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onFocus:()=>b(!0),onBlur:()=>b(!1),children:[e.jsxs("blockquote",{className:o?void 0:"rb-testi-fade",style:{margin:"0 auto",maxWidth:"38ch",fontFamily:g,fontWeight:400,fontSize:"clamp(26px,3.6vw,46px)",lineHeight:1.25,color:y},children:["“",k.quote[t],"”"]},n),e.jsx("figcaption",{className:o?void 0:"rb-testi-fade",style:{fontSize:14,color:S,marginTop:16},children:k.who},`w-${n}`),r.length>1&&e.jsx("div",{role:"tablist","aria-label":t==="en"?"Reviews":"Umsagnir",style:{display:"flex",gap:0,justifyContent:"center",marginTop:4},children:r.map((A,f)=>e.jsx("button",{type:"button",role:"tab","aria-selected":f===n,"aria-label":`${t==="en"?"Review":"Umsögn"} ${f+1}`,"data-active":f===n,className:"rb-testi-dot",onClick:()=>d(f)},f))})]})}function Je(){const[t,o]=Le(),r=ce[t],{LINKS:n,HOURS_BY_DAY:d,FEATURE:u,MENU:b,BREAD:k,CAKES:A,GALLERY:f,REVIEWS:ye,hoursRows:ve,mainName:Q,trustLine:we,heroTitle:je,heroSub:ke,heroLine:$e,statementQuote:Se,statementWho:Ne,storyP1:Te,storyP2:ze}=fe(),pe=Math.min(b.length,Math.ceil(b.length/2)+1),he=c.useRef(null),[h,me]=c.useState(!1);c.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)");me(a.matches);const s=p=>me(p.matches);return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[]);const[J,be]=c.useState(null);c.useEffect(()=>{be(Date.now());const a=window.setInterval(()=>be(Date.now()),3e4);return()=>window.clearInterval(a)},[]);const R=c.useMemo(()=>J===null?Ke(t,d):Ve(J,t,d),[J,t,d]);c.useEffect(()=>{Ce(N)},[]);const[_,Z]=c.useState(!1);Pe(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let a=!0;try{a=window.sessionStorage.getItem("rb-intro-seen")!=="1"}catch{}a&&Z(!0)},[]),c.useEffect(()=>{if(!_)return;const a=window.setTimeout(()=>Z(!1),2150);return()=>window.clearTimeout(a)},[_]);const[w,H]=c.useState(!1),ee=c.useRef(null);c.useEffect(()=>{if(w)return;const a=ee.current;if(!a)return;ee.current=null;const s=document.querySelector(a);s&&s.scrollIntoView({behavior:h?"auto":"smooth",block:"start"})},[w,h]),c.useEffect(()=>{if(!w)return;const a=window.scrollY,s=document.body.style,p={position:s.position,top:s.top,left:s.left,right:s.right,width:s.width,overflow:s.overflow};s.position="fixed",s.top=`-${a}px`,s.left="0",s.right="0",s.width="100%",s.overflow="hidden";const W=D=>{D.key==="Escape"&&H(!1)};window.addEventListener("keydown",W);const O=window.matchMedia("(min-width:821px)"),P=D=>{D.matches&&H(!1)};return O.addEventListener("change",P),()=>{s.position=p.position,s.top=p.top,s.left=p.left,s.right=p.right,s.width=p.width,s.overflow=p.overflow,window.scrollTo({top:a,left:0,behavior:"instant"}),window.removeEventListener("keydown",W),O.removeEventListener("change",P)}},[w]);const te=c.useRef(!1);c.useEffect(()=>{if(_){te.current=!0;return}if(!te.current){te.current=!0;return}try{window.sessionStorage.setItem("rb-intro-seen","1")}catch{}},[_]),c.useEffect(()=>{if(h)return;const a=he.current;if(!a||!("IntersectionObserver"in window))return;const s=$=>{$.style.opacity="1",$.style.transform="none"},p=new IntersectionObserver($=>{$.forEach(ie=>{ie.isIntersecting&&(s(ie.target),p.unobserve(ie.target))})},{threshold:.1,rootMargin:"0px 0px -6% 0px"}),W=Array.from(a.querySelectorAll("[data-reveal]"));W.forEach($=>p.observe($));const O=()=>{W.forEach($=>{$.style.opacity!=="1"&&$.getBoundingClientRect().top<window.innerHeight&&(s($),p.unobserve($))})},P=()=>{document.visibilityState==="visible"&&O()},D=window.setTimeout(O,2500);return document.addEventListener("visibilitychange",P),()=>{p.disconnect(),window.clearTimeout(D),document.removeEventListener("visibilitychange",P)}},[h,t,f]);const Ie=c.useMemo(()=>["Vínarbrauð","Súrdeigsbrauð","Snúður","Kanillengja","Pistasíusnúður","Kleina","Rúgbrauð","Skúffukaka"],[]),[L,re]=c.useState(null),ae=()=>re(null),G=a=>re(s=>s===null?s:(s+a+f.length)%f.length);c.useEffect(()=>{if(L===null)return;const a=document.body.style.overflow;document.body.style.overflow="hidden";const s=p=>{p.key==="Escape"&&ae(),p.key==="ArrowRight"&&G(1),p.key==="ArrowLeft"&&G(-1)};return window.addEventListener("keydown",s),()=>{document.body.style.overflow=a,window.removeEventListener("keydown",s)}},[L]);const Y="clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)",F={maxWidth:1180,margin:"0 auto"};return e.jsxs("div",{ref:he,className:"rb-page",lang:t,style:{fontFamily:C,color:y,background:N,overflowX:"clip",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:Ue}}),_&&e.jsx("div",{className:"rb-intro",onClick:()=>Z(!1),"aria-hidden":"true",children:e.jsxs("div",{className:"rb-intro-logo",children:[e.jsx("img",{className:"rb-intro-draw",src:q,alt:"",decoding:"async"}),e.jsx("span",{className:"rb-intro-tip"})]})}),e.jsx("div",{className:"rb-awning",id:"top","aria-hidden":"true"}),e.jsxs("div",{className:"rb-stickybar",children:[e.jsx("a",{href:"#top",className:"rb-sticky-logo","aria-label":"Reynir bakari",style:{display:"flex",alignItems:"center"},children:e.jsx("img",{src:q,alt:"",width:132,height:57,decoding:"async",style:{width:96,height:"auto",display:"block"}})}),e.jsxs("nav",{className:"rb-sticky-nav",children:[e.jsx("a",{href:"#menu",className:"rb-navlink",children:r.navMenu}),e.jsx("a",{href:"#bread",className:"rb-navlink",children:r.navBread}),e.jsx("a",{href:"#gallery",className:"rb-navlink",children:r.navGallery}),e.jsx(z,{to:U,className:"rb-navlink",children:r.navStory}),e.jsx("a",{href:"#visit",className:"rb-navlink",children:r.navVisit})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"clamp(10px,1.6vw,20px)"},children:[e.jsxs("div",{className:"rb-bar-lang",role:"group","aria-label":"Language",style:{display:"flex",gap:2,alignItems:"center"},children:[e.jsx("button",{className:"rb-lang","aria-pressed":t==="en",onClick:()=>o("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:S},children:"/"}),e.jsx("button",{className:"rb-lang","aria-pressed":t==="is",onClick:()=>o("is"),children:"ÍS"})]}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:12,letterSpacing:".08em",textTransform:"uppercase",color:R.open?x:S,whiteSpace:"nowrap"},children:[e.jsx("span",{className:"rb-sticky-dot",style:{background:R.open?l:"rgba(243,234,211,.4)"}}),e.jsx("span",{className:"rb-sticky-status",children:R.label})]}),e.jsx(z,{to:se,className:"rb-sticky-cta",children:le[t].navOrder}),e.jsxs("button",{type:"button",className:"rb-burger rb-burger-bar","aria-expanded":w,"aria-controls":"rb-mobile-menu","aria-label":t==="is"?"Valmynd":"Menu",onClick:()=>H(a=>!a),children:[e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"}),e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"}),e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"})]})]})]}),e.jsxs("div",{className:"rb-menu",id:"rb-mobile-menu","data-open":w,"aria-hidden":!w,children:[e.jsxs("div",{className:"rb-menu-top",children:[e.jsx("img",{src:q,alt:"",width:132,height:57,decoding:"async",style:{width:104,height:"auto",display:"block"}}),e.jsxs("button",{type:"button",className:"rb-burger rb-burger-close","aria-expanded":w,"aria-controls":"rb-mobile-menu","aria-label":t==="is"?"Loka valmynd":"Close menu",onClick:()=>H(!1),children:[e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"}),e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"}),e.jsx("span",{className:"rb-burger-line","aria-hidden":"true"})]})]}),e.jsx("nav",{className:"rb-menu-nav","aria-label":t==="is"?"Valmynd":"Menu",children:[{href:"#menu",label:r.navMenu},{href:"#bread",label:r.navBread},{href:"#gallery",label:r.navGallery},{to:U,label:r.navStory},{href:"#visit",label:r.navVisit}].map((a,s)=>{const p=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-menu-num","aria-hidden":"true",children:String(s+1).padStart(2,"0")}),a.label]}),W={...T,...M};return a.to?e.jsx(z,{to:a.to,className:"rb-menu-link",style:W,onClick:()=>H(!1),tabIndex:w?0:-1,children:p},a.label):e.jsx("a",{href:a.href,className:"rb-menu-link",style:W,onClick:O=>{O.preventDefault(),ee.current=a.href,H(!1)},tabIndex:w?0:-1,children:p},a.label)})}),e.jsxs("div",{className:"rb-menu-foot",children:[e.jsxs("div",{className:"rb-menu-footrow",children:[e.jsxs("span",{className:"rb-menu-status",style:{color:R.open?x:S},children:[e.jsx("span",{className:"rb-sticky-dot",style:{background:R.open?l:"rgba(243,234,211,.4)"}}),R.label]}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2,alignItems:"center"},children:[e.jsx("button",{className:"rb-lang","aria-pressed":t==="en",onClick:()=>o("en"),tabIndex:w?0:-1,children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:S},children:"/"}),e.jsx("button",{className:"rb-lang","aria-pressed":t==="is",onClick:()=>o("is"),tabIndex:w?0:-1,children:"ÍS"})]})]}),e.jsx(z,{to:se,className:"rb-menu-cta",onClick:()=>H(!1),tabIndex:w?0:-1,children:le[t].navOrder})]})]}),e.jsxs("section",{className:"rb-cover",style:{position:"relative",display:"flex",flexDirection:"column",padding:"0 clamp(20px,4.5vw,72px)"},children:[e.jsxs("div",{className:"rb-cover-grid",style:{...F,flex:1,width:"100%",display:"grid",gridTemplateColumns:"1fr",alignItems:"center",position:"relative",padding:"clamp(24px,5vh,56px) 0"},children:[e.jsx("div",{className:"rb-cover-art rb-enter-3",children:e.jsx("img",{className:"rb-hero-spin",src:Me,alt:t==="en"?"A Reynir pistachio snúður, glazed and topped with pistachios":"Pistasíusnúður frá Reyni, gljáður og toppaður með pistasíum",style:{width:"100%",height:"auto",display:"block"}})}),e.jsxs("div",{className:"rb-cover-copy",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:640,position:"relative",zIndex:2},children:[e.jsx("div",{className:"rb-cover-meta rb-enter",style:{display:"flex",gap:18,alignItems:"center",fontSize:12.5,letterSpacing:".14em",textTransform:"uppercase",flexWrap:"wrap"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,color:l},children:[e.jsx("span",{"aria-hidden":"true",style:{width:6,height:6,borderRadius:"50%",background:R.open?"#8FA876":l}}),R.label]})}),e.jsx("h1",{className:"rb-enter-2",style:{fontFamily:g,fontWeight:700,fontSize:"clamp(46px, 9.5vw, 134px)",lineHeight:.98,letterSpacing:".02em",margin:"clamp(16px,3vh,30px) 0 0",...T,...M},children:je[t]}),e.jsx("p",{className:"rb-enter-3",style:{fontStyle:"italic",fontSize:"clamp(17px,1.9vw,23px)",color:y,margin:"clamp(16px,2.5vh,24px) 0 0",lineHeight:1.5,maxWidth:"30ch"},children:ke[t]}),e.jsx("p",{className:"rb-enter-3",style:{fontSize:"clamp(14.5px,1.2vw,16px)",color:m,margin:"12px 0 0",maxWidth:"40ch",lineHeight:1.6},children:$e[t]}),e.jsxs("div",{className:"rb-cover-ctas rb-enter-4",style:{display:"flex",gap:14,marginTop:"clamp(24px,3.5vh,36px)"},children:[e.jsx("a",{href:n.order,target:"_blank",rel:"noreferrer",className:"rb-cta rb-cta-gold",children:r.ctaDelivery}),e.jsx("a",{href:"#menu",className:"rb-cta rb-cta-ghost",children:r.ctaMenu})]})]})]}),e.jsx("div",{style:{borderTop:`1px solid ${I}`,borderBottom:`1px solid ${I}`,padding:"18px 0",overflow:"hidden",position:"relative",zIndex:2},children:e.jsx("div",{className:"rb-marquee-track","aria-hidden":"true",children:[0,1].map(a=>e.jsx("div",{style:{display:"flex",alignItems:"center"},children:Ie.map((s,p)=>e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:g,fontSize:"clamp(20px,2.4vw,30px)",color:p%2?l:x,padding:"0 26px"},children:s}),e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:l,opacity:.6}})]},`${a}-${p}`))},a))})})]}),e.jsx("section",{id:"menu",style:{background:N,borderTop:`1px solid ${j}`,padding:Y},children:e.jsxs("div",{style:F,children:[e.jsxs("div",{"data-reveal":!0,style:v(h),children:[e.jsx("div",{style:{borderTop:`1px solid ${I}`,paddingTop:16,fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:r.menuMasthead}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...T,...M},children:r.ovenTitle}),e.jsx("p",{style:{fontSize:16,color:m,margin:"16px 0 0",maxWidth:"52ch",lineHeight:1.65},children:r.ovenIntro})]}),e.jsxs("div",{"data-reveal":!0,className:"rb-feature",style:{...v(h,.1),marginTop:"clamp(40px,6vh,68px)",borderTop:`1px solid ${j}`,borderBottom:`1px solid ${j}`,padding:"clamp(32px,5vh,52px) 0",display:"grid",gridTemplateColumns:"1fr 0.85fr",gap:"clamp(24px,4vw,64px)",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:l},children:r.featuredLabel}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:20,flexWrap:"wrap",marginTop:14},children:[e.jsx("h3",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(34px,5vw,64px)",margin:0,...T,...M},children:u.name}),e.jsx("span",{style:{fontSize:22,fontWeight:600,color:l},children:u.price})]}),e.jsx("p",{style:{fontSize:17,lineHeight:1.7,color:m,margin:"16px 0 0",maxWidth:"46ch"},children:u.desc[t]})]}),e.jsx("div",{className:"rb-feature-art",style:{display:"flex",justifyContent:"center"},children:e.jsx("figure",{className:"rb-frame",style:{margin:0,width:"min(100%, 420px)",borderRadius:16,padding:6,border:"1px solid rgba(238,211,170,.22)",background:"linear-gradient(160deg, rgba(243,234,211,.06), rgba(243,234,211,.02))",boxShadow:"0 34px 70px -24px rgba(0,0,0,.75), inset 0 1px 0 rgba(255,255,255,.06)"},children:e.jsxs("div",{style:{position:"relative",borderRadius:10,overflow:"hidden",aspectRatio:"1 / 1"},children:[e.jsx("img",{src:Ae,alt:t==="en"?"A Reynir pistachio snúður torn open, gooey pistachio glaze stretching between the halves":"Pistasíusnúður frá Reyni rifinn í sundur, pistasíugljái teygist á milli helminganna",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),e.jsx("span",{style:{position:"absolute",top:14,left:14,fontFamily:C,fontSize:10.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:x,background:X,padding:"4px 9px",borderRadius:4,boxShadow:"0 6px 16px -6px rgba(0,0,0,.6)"},children:r.featuredLabel})]})})})]}),e.jsxs("div",{className:"rb-menu-cols","data-reveal":!0,style:{...v(h,.12),display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"clamp(40px,6vw,88px)",rowGap:0,marginTop:"clamp(36px,5vh,56px)"},children:[e.jsxs("div",{style:{display:"grid",alignContent:"start"},children:[e.jsx(V,{art:K.lengjur,lang:t,style:{marginBottom:14}}),b.slice(0,pe).map(a=>e.jsx(ge,{item:a,lang:t},a.name))]}),e.jsxs("div",{style:{display:"grid",alignContent:"start"},children:[b.slice(pe).map(a=>e.jsx(ge,{item:a,lang:t},a.name)),e.jsx(V,{art:K.bordid,lang:t,style:{marginTop:26}})]})]})]})}),e.jsxs("section",{id:"story",style:{background:E},children:[e.jsxs("div",{className:"rb-story-open",style:{position:"relative",height:"clamp(380px,72vh,760px)",overflow:"hidden"},children:[e.jsx("img",{src:B.open.src,alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",width:B.open.w,height:B.open.h,className:"rb-story-img",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(0deg, ${E} 0%, rgba(11,10,9,.78) 22%, rgba(92,28,31,.28) 62%, rgba(11,10,9,.45) 100%)`}}),e.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"clamp(28px,5vw,72px)"},children:e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsx("div",{"data-reveal":!0,style:{...v(h),fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:x},children:r.statementKicker}),e.jsxs("blockquote",{"data-reveal":!0,style:{...v(h,.08),fontFamily:g,fontWeight:400,fontSize:"clamp(32px,5.4vw,76px)",lineHeight:1.1,letterSpacing:".005em",color:y,margin:"18px 0 0",maxWidth:"18ch"},children:["“",Se[t],"”"]}),e.jsx("div",{"data-reveal":!0,style:{...v(h,.14),fontSize:14,color:"rgba(243,234,211,.72)",marginTop:18},children:Ne[t]})]})})]}),e.jsx("div",{style:{padding:"clamp(56px,9vh,110px) clamp(20px,4.5vw,72px) clamp(72px,11vh,140px)"},children:e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto",display:"grid",gap:"clamp(48px,8vh,96px)"},children:[e.jsx(ue,{art:B.founding,text:Te[t],reduced:h}),e.jsx(ue,{art:B.today,text:ze[t],reduced:h,flip:!0}),e.jsx("div",{"data-reveal":!0,style:{...v(h,.1)},children:e.jsx(z,{to:U,className:"rb-cta rb-cta-ghost",children:r.storyMore})})]})})]}),e.jsx("section",{id:"bread",style:{background:E,padding:Y},children:e.jsxs("div",{style:F,children:[e.jsxs("div",{"data-reveal":!0,style:{...v(h),display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:24,flexWrap:"wrap",borderTop:`1px solid ${I}`,paddingTop:16},children:[e.jsxs("div",{style:{maxWidth:620},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:r.breadKicker}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(34px,4.8vw,64px)",lineHeight:1.03,margin:"16px 0 0",...T,...M},children:r.breadTitle}),e.jsx("p",{style:{fontSize:16,lineHeight:1.7,color:m,margin:"16px 0 0"},children:r.breadIntro})]}),e.jsx("div",{style:{fontSize:13.5,color:S,fontStyle:"italic"},children:r.breadNote})]}),e.jsxs("div",{className:"rb-bread-grid","data-reveal":!0,style:{...v(h,.12),display:"grid",gridTemplateColumns:"minmax(260px,400px) minmax(0,1fr)",columnGap:"clamp(40px,6vw,88px)",alignItems:"stretch",marginTop:"clamp(36px,5vh,56px)"},children:[e.jsx(V,{art:K.braud,lang:t,fill:!0}),e.jsx("div",{children:k.map(a=>e.jsxs("div",{style:{padding:"16px 0",borderBottom:"1px solid rgba(243,234,211,.1)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[e.jsx("span",{style:{fontFamily:g,fontSize:"clamp(18px,1.8vw,22px)",color:x,lineHeight:1.3},children:a.name}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:15,fontWeight:600,color:l,whiteSpace:"nowrap"},children:a.price})]}),e.jsx("div",{style:{fontSize:13.5,color:m,marginTop:5,lineHeight:1.5},children:a.desc[t]})]},a.name))})]})]})}),e.jsx("section",{style:{background:He,padding:Y},children:e.jsxs("div",{style:F,children:[e.jsxs("div",{className:"rb-catering-grid","data-reveal":!0,style:{...v(h),display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,80px)",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:r.cateringKicker}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(30px,3.6vw,50px)",margin:"16px 0 0",...T,...M},children:r.cateringTitle}),e.jsx("p",{style:{fontSize:16,lineHeight:1.7,color:m,margin:"16px 0 0",maxWidth:"46ch"},children:r.cateringBody}),e.jsx("a",{href:`mailto:${n.orderEmail}`,className:"rb-cta rb-cta-ghost",style:{marginTop:"clamp(20px,3vh,28px)"},children:r.cateringCta}),e.jsx(V,{art:K.kaka,lang:t,style:{marginTop:"clamp(28px,4vh,40px)",maxWidth:480}})]}),e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:0},children:A.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4,padding:"13px 0",borderBottom:`1px solid ${j}`},children:[e.jsx("span",{style:{fontFamily:g,fontSize:"clamp(18px,1.8vw,22px)",color:y},children:a.name}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:15,fontWeight:600,color:l,whiteSpace:"nowrap"},children:a.price})]},a.name))})})]}),e.jsxs("figure",{"data-reveal":!0,style:{...v(h,.14),margin:"0",marginTop:"clamp(48px,7vh,84px)",borderTop:`1px solid ${j}`,paddingTop:"clamp(36px,5vh,52px)",textAlign:"center"},children:[e.jsx(Qe,{lang:t,reduced:h,reviews:ye}),e.jsx("div",{style:{fontSize:13.5,color:m,marginTop:18},children:we[t]})]})]})}),e.jsx(Be,{lang:t,orderPath:se}),e.jsxs("section",{id:"gallery",style:{background:N,padding:"clamp(56px,9vh,110px) 0 clamp(64px,10vh,120px)"},children:[e.jsx("div",{style:{padding:"0 max(20px, calc((100vw - 1180px) / 2 + 20px))"},children:e.jsx("div",{"data-reveal":!0,style:{...v(h),borderTop:`1px solid ${I}`,paddingTop:16},children:e.jsxs("div",{style:{maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:r.galleryKicker}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(30px,4vw,52px)",lineHeight:1.03,margin:"18px 0 0",...T,...M},children:r.galleryTitle}),e.jsx("p",{style:{fontSize:16,color:m,margin:"16px 0 0",lineHeight:1.65},children:r.galleryIntro})]})})}),e.jsx("div",{className:"rb-gallery-strip",style:{marginTop:"clamp(28px,4vh,44px)"},children:f.map((a,s)=>e.jsx(Xe,{photo:a,lang:t,onOpen:()=>re(s),style:v(h,Math.min(s,5)*.05)},a.src))}),e.jsx("div",{style:{...F,padding:"0 clamp(20px,4.5vw,72px)",marginTop:"clamp(24px,3.5vh,36px)"},children:e.jsx(z,{to:U,className:"rb-cta rb-cta-ghost",children:r.galleryMore})})]}),e.jsx("section",{id:"visit",style:{background:N,padding:Y},children:e.jsx("div",{style:F,children:e.jsxs("div",{className:"rb-visit-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,5vw,80px)",alignItems:"start"},children:[e.jsxs("div",{"data-reveal":!0,style:v(h),children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l,borderTop:`1px solid ${I}`,paddingTop:16},children:r.visitKicker}),e.jsx("h2",{style:{fontFamily:g,fontWeight:400,fontSize:"clamp(38px,5vw,72px)",lineHeight:1.02,margin:"18px 0 0",...T,...M},children:r.visitTitle}),e.jsx("div",{style:{fontFamily:g,fontSize:"clamp(22px,2.4vw,28px)",color:y,marginTop:"clamp(20px,3vh,28px)"},children:Q}),e.jsxs("div",{style:{marginTop:18,display:"grid",gap:12,maxWidth:420},children:[ve[t].map(a=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,borderBottom:`1px solid ${j}`,paddingBottom:10,fontSize:14.5,color:m},children:[e.jsx("span",{children:a.label}),e.jsx("span",{style:{color:y},children:a.value})]},a.label)),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,borderBottom:`1px solid ${j}`,paddingBottom:10},children:[e.jsx("span",{style:{fontSize:14.5,color:m},children:r.rowPhone}),e.jsx("a",{href:`tel:${n.phone}`,className:"rb-foot-link",style:{fontSize:14.5,fontWeight:600},children:n.phoneLabel})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16},children:[e.jsx("span",{style:{fontSize:14.5,color:m},children:r.rowEmail}),e.jsx("a",{href:`mailto:${n.email}`,className:"rb-foot-link",style:{fontSize:14.5,fontWeight:600,wordBreak:"break-all"},children:n.email})]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,marginTop:"clamp(26px,4vh,36px)"},children:[e.jsx("a",{href:n.order,target:"_blank",rel:"noreferrer",className:"rb-cta rb-cta-gold",children:r.orderPrimary}),e.jsx("a",{href:n.wolt,target:"_blank",rel:"noreferrer",className:"rb-cta rb-cta-ghost",children:r.orderWolt})]}),e.jsx("p",{style:{fontSize:14.5,color:m,margin:"18px 0 0",lineHeight:1.6,maxWidth:"34ch"},children:r.deliveryNote})]}),e.jsxs("div",{"data-reveal":!0,style:{...v(h,.1)},children:[e.jsx("figure",{style:{margin:0,borderRadius:4,overflow:"hidden",border:`1px solid ${I}`},children:e.jsx("img",{src:Fe,alt:t==="en"?"Inside Reynir bakari on Dalvegur: a wall of framed black-and-white bakery photographs above the tables":"Inni í Reyni bakara á Dalvegi: veggur með innrömmuðum svarthvítum myndum úr bakaríinu fyrir ofan borðin",width:1900,height:1400,loading:"lazy",decoding:"async",style:{width:"100%",height:"auto",display:"block"}})}),e.jsx(Ye,{lang:t,locations:[{label:r.mainLabel,address:Q,query:"Reynir bakari, Dalvegur 4, 201 Kópavogur"}]})]})]})})}),e.jsx("footer",{style:{background:E,borderTop:`1px solid ${j}`,padding:"52px clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{...F,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:22},children:[e.jsxs("div",{children:[e.jsx("img",{src:q,alt:"","aria-hidden":"true",width:120,height:52,loading:"lazy",decoding:"async",style:{width:120,height:"auto",display:"block"}}),e.jsx("div",{style:{fontSize:13,color:S,marginTop:12},children:r.footerTag})]}),e.jsxs("div",{style:{fontSize:13.5,color:m,lineHeight:1.8,textAlign:"right"},children:[e.jsxs("div",{children:[Q," · ",n.phoneLabel]}),e.jsxs("div",{style:{display:"flex",gap:18,justifyContent:"flex-end",marginTop:6,flexWrap:"wrap"},children:[e.jsx("a",{href:n.instagram,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"Instagram"}),e.jsx("a",{href:n.facebook,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"Facebook"}),e.jsx("a",{href:n.order,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"aha.is"}),e.jsx("a",{href:n.wolt,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"Wolt"}),e.jsx(z,{to:Oe,className:"rb-foot-link",children:r.legalLink})]}),e.jsx("div",{style:{fontSize:12,color:S,marginTop:10},children:r.legalLine})]})]})}),L!==null&&e.jsxs("div",{className:"rb-lightbox",role:"dialog","aria-modal":"true","aria-label":f[L].caption[t],onClick:ae,children:[e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-close",onClick:ae,"aria-label":r.galleryClose,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 2L16 16M16 2L2 16",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-prev",onClick:a=>{a.stopPropagation(),G(-1)},"aria-label":r.galleryPrev,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M11 3L5 9L11 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-next",onClick:a=>{a.stopPropagation(),G(1)},"aria-label":r.galleryNext,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M7 3L13 9L7 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("figure",{className:"rb-lightbox-fig",onClick:a=>a.stopPropagation(),children:[e.jsx("img",{src:f[L].src,alt:f[L].caption[t],decoding:"async"},f[L].src),e.jsx("figcaption",{className:"rb-lightbox-cap",children:f[L].caption[t]})]})]}),e.jsx(_e,{})]})}function rt(){return e.jsx(Re,{children:e.jsx(Je,{})})}export{rt as default};
