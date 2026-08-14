import{j as e,L as D,r as p,s as ue}from"./index-BbdpiYN5.js";import{P as ye}from"./PreviewChrome-BW67XXdn.js";import{P as ve}from"./PreviewFooter-3di_-c1A.js";import{g as je}from"./companies-B4GT8Mbp.js";import{u as re,I as R,H as z,E as a,G as n,D as x,a as g,b as u,c as l,O as te,d as N,i as we,B as W,S as ke,e as $e,f as I,g as _,F as L,L as O,T as ie,h as Se,j as k,P as Ne,k as ze}from"./useLang-CLn72Hzi.js";import"./copy-BlDb0IZR.js";import"./createLucideIcon-eOY6TuZE.js";import"./proxy-BJAzFrfb.js";import"./send-BEWrXGa_.js";import"./index-CVqp83Y-.js";import"./external-link-B6q0dtPK.js";import"./x-BNRG6agA.js";import"./mail-pdklc-V0.js";import"./SndrBadge-DVhX8CbP.js";import"./data-C8ZDiw2z.js";import"./image-url.umd-BnkocEvp.js";const Te=`
  /* Flex + centred remainder, not a 3-col grid: the owner can add or remove a
     product in the CMS and the row never leaves an empty cell. See OrderSection. */
  .rb-tease-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:10px;
    margin-top:clamp(26px,4vh,38px); }
  .rb-tease-grid > * { flex:1 1 240px; max-width:calc(33.333% - 7px); }
  .rb-tease-card { display:flex; flex-direction:column; gap:7px; text-decoration:none;
    padding:20px 18px; border:1px solid ${z}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .24s ${a}, background .24s ${a}, transform .2s ${a}; }
  .rb-tease-card:hover { border-color:${n}; background:rgba(200,168,119,.08); transform:translateY(-2px); }
  .rb-tease-card:focus-visible { outline:2px solid ${n}; outline-offset:3px; }
  .rb-tease-name { font-family:${x}; font-size:clamp(20px,2.1vw,25px); color:${g}; line-height:1.15;
    transition:color .24s ${a}; }
  .rb-tease-card:hover .rb-tease-name { color:${u}; }
  .rb-tease-from { font-size:12.5px; color:${l}; font-variant-numeric:tabular-nums; }
  .rb-tease-blurb { font-size:13.5px; color:${l}; line-height:1.5; margin-top:2px; }

  .rb-tease-foot { display:flex; align-items:center; gap:18px; flex-wrap:wrap;
    margin-top:clamp(26px,4vh,36px); }
  .rb-tease-note { font-size:13.5px; color:${l}; line-height:1.55; max-width:44ch; }

  @media (max-width:860px) { .rb-tease-grid > * { max-width:100%; flex-basis:100%; } }
  @media (prefers-reduced-motion: reduce) {
    .rb-tease-card { transition:none; }
    .rb-tease-card:hover { transform:none; }
  }
`;function Ie({lang:r,orderPath:s}){const t=te[r],{ORDER_PRODUCTS:o}=re();return e.jsxs("section",{id:"order",style:{background:R,padding:"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{children:Te}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsxs("div",{"data-reveal":!0,style:{borderTop:`1px solid ${z}`,paddingTop:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n},children:t.kicker}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...N},children:t.title}),e.jsx("p",{style:{fontSize:16,color:l,margin:"16px 0 0",lineHeight:1.65},children:t.intro})]}),e.jsx("div",{className:"rb-tease-grid",children:o.map(d=>e.jsxs(D,{to:`${s}?vara=${d.id}`,className:"rb-tease-card",children:[e.jsx("span",{className:"rb-tease-name",children:d.name[r]}),e.jsxs("span",{className:"rb-tease-from",children:[r==="is"?"frá":"from"," ",we(d.basePrice)]}),e.jsx("span",{className:"rb-tease-blurb",children:d.blurb[r]})]},d.id))}),e.jsxs("div",{className:"rb-tease-foot",children:[e.jsx(D,{to:s,className:"rb-cta rb-cta-gold",children:t.teaseCta}),e.jsx("span",{className:"rb-tease-note",children:t.teaseNote})]})]})]})}const We=`
  .rb-map { margin-top:clamp(26px,4vh,38px); }
  .rb-map-switch { display:flex; gap:6px; margin-bottom:12px; }
  .rb-map-tab { flex:1; min-height:44px; padding:10px 12px; cursor:pointer; font-family:${W};
    font-size:13px; letter-spacing:.04em; color:${l}; background:transparent;
    border:1px solid rgba(238,211,170,.16); border-radius:4px;
    transition:color .22s ${a}, border-color .22s ${a}, background .22s ${a}; }
  .rb-map-tab:hover { color:${g}; border-color:rgba(238,211,170,.36); }
  .rb-map-tab[aria-selected="true"] { color:${u}; border-color:${n}; background:rgba(200,168,119,.09); }
  .rb-map-tab:focus-visible { outline:2px solid ${n}; outline-offset:2px; }

  /* the plate: gold hairline, thin mat, concentric radii, soft lift */
  .rb-map-frame { position:relative; border:1px solid rgba(238,211,170,.22); border-radius:10px; padding:5px;
    background:linear-gradient(160deg, rgba(243,234,211,.06), rgba(243,234,211,.02));
    box-shadow:0 26px 56px -28px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.05); }
  .rb-map-inner { position:relative; border-radius:6px; overflow:hidden; background:${R}; aspect-ratio:4 / 3; }
  /* Inverting flips Google's warm POI pins to vivid blue, which fights the gold
     palette, so saturation is pulled almost out: the map reads as a monochrome
     printed plate instead of a colour widget parked on the page. */
  .rb-map-inner iframe { position:absolute; inset:0; width:100%; height:100%; border:0; display:block;
    filter:invert(1) hue-rotate(180deg) saturate(.14) brightness(.86) contrast(1.08); }
  /* tints the neutral tiles back toward the page's gold */
  .rb-map-inner::after { content:''; position:absolute; inset:0; pointer-events:none;
    background:rgba(200,168,119,.16); mix-blend-mode:soft-light; }

  .rb-map-meta { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; margin-top:12px; }
  .rb-map-addr { font-size:13.5px; color:${l}; line-height:1.5; }
  .rb-map-open { margin-left:auto; font-size:13.5px; color:${u}; text-decoration:none;
    display:inline-flex; align-items:center; gap:6px; padding:12.5px 2px;
    border-bottom:1px solid rgba(238,211,170,.32); transition:color .2s ${a}, border-color .2s ${a}; }
  .rb-map-open:hover { color:${g}; border-bottom-color:${n}; }
  .rb-map-open:focus-visible { outline:2px solid ${n}; outline-offset:3px; border-radius:3px; }

  @media (max-width:620px) {
    .rb-map-meta { flex-direction:column; align-items:flex-start; gap:2px; }
    .rb-map-open { margin-left:0; }
    .rb-map-inner { aspect-ratio:3 / 2; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-map-tab, .rb-map-open { transition:none; }
  }
`;function Ce({lang:r,locations:s}){const[t,o]=p.useState(0),d=s[t]??s[0];if(!d)return null;const v=`https://maps.google.com/maps?q=${encodeURIComponent(d.query)}&z=15&output=embed&hl=${r}`,b=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.query)}`;return e.jsxs("div",{className:"rb-map",children:[e.jsx("style",{children:We}),s.length>1&&e.jsx("div",{className:"rb-map-switch",role:"tablist","aria-label":r==="is"?"Veldu stað":"Choose a location",children:s.map((j,T)=>e.jsx("button",{type:"button",role:"tab","aria-selected":T===t,className:"rb-map-tab",onClick:()=>o(T),children:j.address.split(",")[0]},j.address))}),e.jsx("div",{className:"rb-map-frame",children:e.jsx("div",{className:"rb-map-inner",children:e.jsx("iframe",{src:v,title:`${r==="is"?"Kort":"Map"}: ${d.address}`,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0},d.query)})}),e.jsxs("div",{className:"rb-map-meta",children:[e.jsx("span",{className:"rb-map-addr",children:d.address}),e.jsxs("a",{className:"rb-map-open",href:b,target:"_blank",rel:"noreferrer",children:[r==="is"?"Opna í Google kortum":"Open in Google Maps",e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 1h7v7M10 1L1 10",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})}const Z="/preview/reynir/panta",ee=je("reynir"),Le=440,Re=`
  .rb-page ::selection { background:${_}; color:${g}; }
  .rb-page a:focus-visible, .rb-page button:focus-visible {
    outline:2px solid ${n}; outline-offset:3px; border-radius:4px;
  }

  .rb-cover { min-height:100svh; }

  @keyframes rb-rise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
  .rb-enter  { animation:rb-rise .9s ${a} both; }
  .rb-enter-2 { animation:rb-rise .9s ${a} .14s both; }
  .rb-enter-3 { animation:rb-rise .9s ${a} .26s both; }
  .rb-enter-4 { animation:rb-rise .9s ${a} .38s both; }

  @keyframes rb-marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  .rb-marquee-track { display:flex; width:max-content; animation:rb-marquee 36s linear infinite; }

  /* the hero pistachio turns slowly and smoothly, in place */
  @keyframes rb-hero-spin { to { transform:rotate(360deg); } }
  .rb-hero-spin { animation:rb-hero-spin 44s linear infinite; will-change:transform; transform-origin:50% 50%; }

  /* ── intro loader: the gold script writes itself on, as if piped ──────────── */
  .rb-intro { position:fixed; inset:0; z-index:9999; background:${I};
    display:flex; align-items:center; justify-content:center; cursor:pointer;
    animation:rb-intro-out .6s cubic-bezier(.7,0,.2,1) 1.55s forwards; }
  .rb-intro-logo { position:relative; width:min(74vw,400px); }
  .rb-intro-logo img { width:100%; height:auto; display:block; }
  .rb-intro-draw { clip-path:inset(0 100% 0 0);
    animation:rb-draw 1.3s cubic-bezier(.5,.05,.2,1) .2s forwards; }
  .rb-intro-tip { position:absolute; top:50%; left:0; width:11px; height:11px; margin:-5.5px 0 0 -5.5px;
    border-radius:50%; opacity:0; pointer-events:none;
    background:radial-gradient(circle, ${u} 0%, ${n} 52%, transparent 74%);
    box-shadow:0 0 18px 5px rgba(200,168,119,.5);
    animation:rb-tip 1.3s cubic-bezier(.5,.05,.2,1) .2s forwards; }
  @keyframes rb-draw { to { clip-path:inset(0 0 0 0); } }
  @keyframes rb-tip { 0% { left:0%; opacity:0; } 9% { opacity:1; } 86% { opacity:1; } 100% { left:100%; opacity:0; } }
  @keyframes rb-intro-out { to { opacity:0; visibility:hidden; } }

  .rb-navlink { color:${l}; text-decoration:none; font-size:14.5px; transition:color .2s ${a}; }
  .rb-navlink:hover { color:${u}; }

  .rb-cta {
    display:inline-block; text-decoration:none; font-weight:600; font-size:15.5px;
    padding:14px 30px; border-radius:4px; white-space:nowrap;
    transition:background .25s ${a}, color .25s ${a}, border-color .25s ${a}, transform .18s ${a};
  }
  .rb-cta:active { transform:scale(.98); }
  .rb-cta-gold { background:${n}; color:${I}; border:1px solid ${n}; }
  .rb-cta-gold:hover { background:${u}; border-color:${u}; }
  .rb-cta-ghost { background:transparent; color:${g}; border:1px solid rgba(238,211,170,.34); }
  .rb-cta-ghost:hover { border-color:${n}; background:rgba(238,211,170,.05); }

  .rb-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px; font-family:${W};
    font-size:13px; letter-spacing:.08em; color:${L}; transition:color .2s ${a}; border-radius:4px; }
  .rb-lang[aria-pressed="true"] { color:${u}; }
  .rb-lang:hover { color:${g}; }

  .rb-row { transition:color .2s ${a}; }
  .rb-row:hover .rb-row-name { color:${u}; }
  .rb-leader { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.32); margin:0 4px; transform:translateY(2px); }

  .rb-foot-link { color:${l}; text-decoration:none; transition:color .2s ${a}; }
  .rb-foot-link:hover { color:${u}; }

  .rb-cover-art { position:absolute; top:50%; right:clamp(-30px,0vw,20px); transform:translateY(-50%);
    width:clamp(300px,40vw,${Le}px); z-index:1; pointer-events:none; display:flex; align-items:center; justify-content:center; }

  /* ── photo gallery: print-style contact sheet, columns masonry ─────────── */
  .rb-gallery-grid { column-count:3; column-gap:14px; }
  .rb-gallery-item { break-inside:avoid; margin:0 0 14px; padding:0; border:0; display:block; width:100%;
    position:relative; overflow:hidden; border-radius:3px; cursor:zoom-in; background:${R};
    box-shadow:0 1px 0 rgba(238,211,170,.06); }
  .rb-gallery-item::after { content:''; position:absolute; inset:0; border-radius:3px;
    border:1px solid rgba(238,211,170,0); transition:border-color .3s ${a}; pointer-events:none; }
  .rb-gallery-item:hover::after, .rb-gallery-item:focus-visible::after { border-color:rgba(238,211,170,.4); }
  .rb-gallery-item img { width:100%; height:auto; display:block; transition:transform .6s ${a}, filter .6s ${a}; }
  .rb-gallery-item:hover img, .rb-gallery-item:focus-visible img { transform:scale(1.045); }
  .rb-gallery-cap { position:absolute; left:0; right:0; bottom:0; padding:26px 14px 12px;
    background:linear-gradient(0deg, rgba(11,10,9,.88) 0%, rgba(11,10,9,0) 100%);
    opacity:0; transform:translateY(6px); transition:opacity .35s ${a}, transform .35s ${a};
    text-align:left; font-family:${W}; font-size:12.5px; color:${u}; letter-spacing:.01em; }
  .rb-gallery-item:hover .rb-gallery-cap, .rb-gallery-item:focus-visible .rb-gallery-cap { opacity:1; transform:none; }

  .rb-lightbox { position:fixed; inset:0; z-index:300; background:rgba(11,10,9,.94);
    display:flex; align-items:center; justify-content:center; padding:clamp(16px,5vh,56px);
    animation:rb-lb-in .28s ${a} both; }
  @keyframes rb-lb-in { from { opacity:0; } to { opacity:1; } }
  .rb-lightbox-fig { margin:0; max-width:min(92vw,1100px); max-height:88vh; display:flex; flex-direction:column; align-items:center; gap:14px; }
  .rb-lightbox-fig img { max-width:100%; max-height:74vh; width:auto; height:auto; display:block; border-radius:3px;
    box-shadow:0 40px 90px -20px rgba(0,0,0,.7); animation:rb-lb-zoom .32s ${a} both; }
  @keyframes rb-lb-zoom { from { opacity:0; transform:scale(.97); } to { opacity:1; transform:none; } }
  .rb-lightbox-cap { font-family:${W}; font-style:italic; font-size:15px; color:${g}; text-align:center; }
  .rb-lb-btn { position:absolute; background:rgba(19,19,19,.55); border:1px solid rgba(238,211,170,.22); color:${g};
    width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;
    transition:background .2s ${a}, border-color .2s ${a}, transform .15s ${a}; }
  .rb-lb-btn:hover { background:rgba(200,168,119,.16); border-color:${n}; }
  .rb-lb-btn:active { transform:scale(.94); }
  .rb-lb-close { top:clamp(10px,2vh,28px); right:clamp(10px,2vw,28px); }
  .rb-lb-prev { left:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }
  .rb-lb-next { right:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }

  /* ── rotating testimonial: soft crossfade on each key-remount ─────────── */
  @keyframes rb-testi-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-testi-fade { animation:rb-testi-in .7s ${a} both; }
  /* 44px tap target with a small 7px visible dot centered inside (WCAG target size) */
  .rb-testi-dot { width:44px; height:44px; padding:0; border:0; background:transparent; cursor:pointer;
    display:flex; align-items:center; justify-content:center; }
  .rb-testi-dot::after { content:''; width:7px; height:7px; border-radius:50%; border:1px solid rgba(238,211,170,.4);
    transition:background .25s ${a}, border-color .25s ${a}, transform .2s ${a}; }
  .rb-testi-dot:hover::after { border-color:${n}; transform:scale(1.15); }
  .rb-testi-dot[data-active="true"]::after { background:${n}; border-color:${n}; }

  @media (max-width:820px) {
    .rb-gallery-grid { column-count:2; column-gap:10px; }
    .rb-gallery-item { margin-bottom:10px; }
    .rb-lb-prev { left:4px; } .rb-lb-next { right:4px; }
  }
  @media (max-width:480px) {
    .rb-gallery-cap { opacity:1; transform:none; padding:18px 10px 9px; font-size:11.5px; }
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
  }
`,Ee=r=>String(r).padStart(2,"0"),B=r=>`${Math.floor(r/60)}:${Ee(r%60)}`;function He(r,s,t){const o=new Date(r),d=o.getUTCDay(),v=o.getUTCHours()*60+o.getUTCMinutes(),b=t[d],j=ie[s];return!b.closed&&v>=b.open&&v<b.close?{open:!0,label:j.statusOpen(B(b.close))}:b.closed||v<b.open?{open:!1,label:j.statusOpensToday(B(b.open))}:{open:!1,label:j.statusOpensTomorrow(B(t[(d+1)%7].open))}}const f=(r,s=0)=>r?{}:{opacity:0,transform:"translateY(26px)",transition:`opacity .95s ${a} ${s}s, transform .95s ${a} ${s}s`};function Pe({item:r,lang:s}){return e.jsxs("div",{className:"rb-row",style:{padding:"20px 0",borderBottom:`1px solid ${k}`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[e.jsxs("span",{className:"rb-row-name",style:{fontFamily:x,fontSize:"clamp(19px,1.9vw,24px)",color:g,transition:`color .2s ${a}`},children:[r.name,r.tag&&e.jsx("span",{style:{fontFamily:W,fontSize:10.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:u,background:_,padding:"3px 8px",borderRadius:4,marginLeft:12,verticalAlign:"middle"},children:r.tag[s]})]}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:16,fontWeight:600,color:n,whiteSpace:"nowrap"},children:r.price})]}),r.desc[s]&&e.jsx("p",{style:{fontSize:14,lineHeight:1.55,color:l,margin:"8px 0 0",maxWidth:"46ch"},children:r.desc[s]})]})}function Fe({photo:r,lang:s,onOpen:t,style:o}){return e.jsxs("button",{type:"button",className:"rb-gallery-item","data-reveal":!0,style:o,onClick:t,"aria-label":r.caption[s],children:[e.jsx("img",{src:r.src,alt:r.caption[s],loading:"lazy",decoding:"async",style:{aspectRatio:`${r.w} / ${r.h}`}}),e.jsx("span",{className:"rb-gallery-cap","aria-hidden":"true",children:r.caption[s]})]})}function Me({lang:r,reduced:s,reviews:t}){const[o,d]=p.useState(0),[v,b]=p.useState(!1);p.useEffect(()=>{if(s||v||t.length<=1)return;const T=window.setInterval(()=>d(h=>(h+1)%t.length),6500);return()=>window.clearInterval(T)},[s,v,t]),p.useEffect(()=>{o>=t.length&&d(0)},[t,o]);const j=t[o]??t[0];return e.jsxs("div",{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onFocus:()=>b(!0),onBlur:()=>b(!1),children:[e.jsxs("blockquote",{className:s?void 0:"rb-testi-fade",style:{margin:"0 auto",maxWidth:"38ch",fontFamily:x,fontWeight:400,fontSize:"clamp(26px,3.6vw,46px)",lineHeight:1.25,color:g},children:["“",j.quote[r],"”"]},o),e.jsx("figcaption",{className:s?void 0:"rb-testi-fade",style:{fontSize:14,color:L,marginTop:16},children:j.who},`w-${o}`),t.length>1&&e.jsx("div",{role:"tablist","aria-label":r==="en"?"Reviews":"Umsagnir",style:{display:"flex",gap:0,justifyContent:"center",marginTop:4},children:t.map((T,h)=>e.jsx("button",{type:"button",role:"tab","aria-selected":h===o,"aria-label":`${r==="en"?"Review":"Umsögn"} ${h+1}`,"data-active":h===o,className:"rb-testi-dot",onClick:()=>d(h)},h))})]})}function Ae(){const[r,s]=$e(),t=ie[r],{LINKS:o,HOURS_BY_DAY:d,FEATURE:v,MENU:b,BREAD:j,CAKES:T,GALLERY:h,REVIEWS:ae,hoursRows:ne,hamraborgNote:oe,mainName:H,secondName:G,trustLine:se,heroTitle:le,heroSub:de,heroLine:ce,statementQuote:pe,statementWho:me,storyP1:xe,storyP2:ge}=re(),q=p.useRef(null),[c,U]=p.useState(!1);p.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)");U(i.matches);const m=y=>U(y.matches);return i.addEventListener("change",m),()=>i.removeEventListener("change",m)},[]);const[K,be]=p.useState(()=>Date.now());p.useEffect(()=>{const i=window.setInterval(()=>be(Date.now()),3e4);return()=>window.clearInterval(i)},[]);const Y=p.useMemo(()=>He(K,r,d),[K,r,d]);p.useEffect(()=>{ue(I)},[]);const[P,V]=p.useState(()=>!(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches));p.useEffect(()=>{if(!P)return;const i=window.setTimeout(()=>V(!1),2150);return()=>window.clearTimeout(i)},[P]),p.useEffect(()=>{if(c)return;const i=q.current;if(!i||!("IntersectionObserver"in window))return;const m=w=>{w.style.opacity="1",w.style.transform="none"},y=new IntersectionObserver(w=>{w.forEach(A=>{A.isIntersecting&&(m(A.target),y.unobserve(A.target))})},{threshold:.1,rootMargin:"0px 0px -6% 0px"}),X=Array.from(i.querySelectorAll("[data-reveal]"));X.forEach(w=>y.observe(w));const Q=()=>{X.forEach(w=>{w.style.opacity!=="1"&&w.getBoundingClientRect().top<window.innerHeight&&(m(w),y.unobserve(w))})},J=()=>{document.visibilityState==="visible"&&Q()},fe=window.setTimeout(Q,2500);return document.addEventListener("visibilitychange",J),()=>{y.disconnect(),window.clearTimeout(fe),document.removeEventListener("visibilitychange",J)}},[c,r]);const he=p.useMemo(()=>["Vínarbrauð","Súrdeigsbrauð","Snúður","Kanillengja","Pistasíusnúður","Kleina","Rúgbrauð","Skúffukaka"],[]),[$,F]=p.useState(null),M=()=>F(null),E=i=>F(m=>m===null?m:(m+i+h.length)%h.length);p.useEffect(()=>{if($===null)return;const i=document.body.style.overflow;document.body.style.overflow="hidden";const m=y=>{y.key==="Escape"&&M(),y.key==="ArrowRight"&&E(1),y.key==="ArrowLeft"&&E(-1)};return window.addEventListener("keydown",m),()=>{document.body.style.overflow=i,window.removeEventListener("keydown",m)}},[$]);const C="clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)",S={maxWidth:1180,margin:"0 auto"};return e.jsxs("div",{ref:q,className:"rb-page",lang:r,style:{fontFamily:W,color:g,background:I,overflowX:"hidden",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{children:Re}),P&&e.jsx("div",{className:"rb-intro",onClick:()=>V(!1),"aria-hidden":"true",children:e.jsxs("div",{className:"rb-intro-logo",children:[e.jsx("img",{className:"rb-intro-draw",src:O,alt:"",decoding:"async"}),e.jsx("span",{className:"rb-intro-tip"})]})}),e.jsx("header",{style:{position:"relative",zIndex:5,padding:"20px clamp(20px,4.5vw,72px) 0"},children:e.jsxs("div",{style:{...S,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20},children:[e.jsx("img",{src:O,alt:"Reynir bakari",width:132,height:57,decoding:"async",style:{width:132,height:"auto",display:"block"}}),e.jsxs("nav",{className:"rb-nav-links",style:{display:"flex",gap:26,alignItems:"center"},children:[e.jsx("a",{href:"#menu",className:"rb-navlink",children:t.navMenu}),e.jsx("a",{href:"#bread",className:"rb-navlink",children:t.navBread}),e.jsx("a",{href:"#gallery",className:"rb-navlink",children:t.navGallery}),e.jsx(D,{to:Z,className:"rb-navlink",children:te[r].navOrder}),e.jsx("a",{href:"#story",className:"rb-navlink",children:t.navStory}),e.jsx("a",{href:"#visit",className:"rb-navlink",children:t.navVisit})]}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-lang","aria-pressed":r==="en",onClick:()=>s("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:L,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-lang","aria-pressed":r==="is",onClick:()=>s("is"),children:"ÍS"})]})})]})}),e.jsxs("section",{className:"rb-cover",style:{position:"relative",display:"flex",flexDirection:"column",padding:"0 clamp(20px,4.5vw,72px)"},children:[e.jsxs("div",{className:"rb-cover-grid",style:{...S,flex:1,width:"100%",display:"grid",gridTemplateColumns:"1fr",alignItems:"center",position:"relative",padding:"clamp(24px,5vh,56px) 0"},children:[e.jsx("div",{className:"rb-cover-art rb-enter-3",children:e.jsx("img",{className:"rb-hero-spin",src:Se,alt:r==="en"?"A Reynir pistachio snúður, glazed and topped with pistachios":"Pistasíusnúður frá Reyni, gljáður og toppaður með pistasíum",style:{width:"100%",height:"auto",display:"block"}})}),e.jsxs("div",{className:"rb-cover-copy",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:640,position:"relative",zIndex:2},children:[e.jsx("div",{className:"rb-cover-meta rb-enter",style:{display:"flex",gap:18,alignItems:"center",fontSize:12.5,letterSpacing:".14em",textTransform:"uppercase",flexWrap:"wrap"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,color:n},children:[e.jsx("span",{"aria-hidden":"true",style:{width:6,height:6,borderRadius:"50%",background:Y.open?"#8FA876":n}}),Y.label]})}),e.jsx("h1",{className:"rb-enter-2",style:{fontFamily:x,fontWeight:700,fontSize:"clamp(46px, 9.5vw, 134px)",lineHeight:.98,letterSpacing:".02em",margin:"clamp(16px,3vh,30px) 0 0",...N},children:le[r]}),e.jsx("p",{className:"rb-enter-3",style:{fontStyle:"italic",fontSize:"clamp(17px,1.9vw,23px)",color:g,margin:"clamp(16px,2.5vh,24px) 0 0",lineHeight:1.5,maxWidth:"30ch"},children:de[r]}),e.jsx("p",{className:"rb-enter-3",style:{fontSize:"clamp(14.5px,1.2vw,16px)",color:l,margin:"12px 0 0",maxWidth:"40ch",lineHeight:1.6},children:ce[r]}),e.jsxs("div",{className:"rb-cover-ctas rb-enter-4",style:{display:"flex",gap:14,marginTop:"clamp(24px,3.5vh,36px)"},children:[e.jsx("a",{href:o.order,target:"_blank",rel:"noreferrer",className:"rb-cta rb-cta-gold",children:t.orderPrimary}),e.jsx("a",{href:"#menu",className:"rb-cta rb-cta-ghost",children:t.ctaMenu})]})]})]}),e.jsx("div",{style:{borderTop:`1px solid ${z}`,borderBottom:`1px solid ${z}`,padding:"18px 0",overflow:"hidden",position:"relative",zIndex:2},children:e.jsx("div",{className:"rb-marquee-track","aria-hidden":"true",children:[0,1].map(i=>e.jsx("div",{style:{display:"flex",alignItems:"center"},children:he.map((m,y)=>e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:x,fontSize:"clamp(20px,2.4vw,30px)",color:y%2?n:u,padding:"0 26px"},children:m}),e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:n,opacity:.6}})]},`${i}-${y}`))},i))})})]}),e.jsx("section",{id:"menu",style:{background:I,borderTop:`1px solid ${k}`,padding:C},children:e.jsxs("div",{style:S,children:[e.jsxs("div",{"data-reveal":!0,style:f(c),children:[e.jsx("div",{style:{borderTop:`1px solid ${z}`,paddingTop:16,fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n},children:t.menuMasthead}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...N},children:t.ovenTitle}),e.jsx("p",{style:{fontSize:16,color:l,margin:"16px 0 0",maxWidth:"52ch",lineHeight:1.65},children:t.ovenIntro})]}),e.jsxs("div",{"data-reveal":!0,className:"rb-feature",style:{...f(c,.1),marginTop:"clamp(40px,6vh,68px)",borderTop:`1px solid ${k}`,borderBottom:`1px solid ${k}`,padding:"clamp(32px,5vh,52px) 0",display:"grid",gridTemplateColumns:"1fr 0.85fr",gap:"clamp(24px,4vw,64px)",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:n},children:t.featuredLabel}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:20,flexWrap:"wrap",marginTop:14},children:[e.jsx("h3",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(34px,5vw,64px)",margin:0,...N},children:v.name}),e.jsx("span",{style:{fontSize:22,fontWeight:600,color:n},children:v.price})]}),e.jsx("p",{style:{fontSize:17,lineHeight:1.7,color:l,margin:"16px 0 0",maxWidth:"46ch"},children:v.desc[r]})]}),e.jsx("div",{className:"rb-feature-art",style:{display:"flex",justifyContent:"center"},children:e.jsx("figure",{className:"rb-frame",style:{margin:0,width:"min(100%, 420px)",borderRadius:16,padding:6,border:"1px solid rgba(238,211,170,.22)",background:"linear-gradient(160deg, rgba(243,234,211,.06), rgba(243,234,211,.02))",boxShadow:"0 34px 70px -24px rgba(0,0,0,.75), inset 0 1px 0 rgba(255,255,255,.06)"},children:e.jsx("div",{style:{borderRadius:10,overflow:"hidden",aspectRatio:"1 / 1"},children:e.jsx("img",{src:Ne,alt:r==="en"?"A Reynir pistachio snúður torn open, gooey pistachio glaze stretching between the halves":"Pistasíusnúður frá Reyni rifinn í sundur, pistasíugljái teygist á milli helminganna",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})})]}),e.jsx("div",{className:"rb-menu-cols","data-reveal":!0,style:{...f(c,.12),display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"clamp(40px,6vw,88px)",rowGap:0,marginTop:"clamp(36px,5vh,56px)"},children:b.map(i=>e.jsx(Pe,{item:i,lang:r},i.name))})]})}),e.jsx("section",{id:"story",style:{background:_,padding:"clamp(96px,15vh,180px) clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{maxWidth:980,margin:"0 auto"},children:[e.jsx("div",{"data-reveal":!0,style:{...f(c),fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:u},children:t.statementKicker}),e.jsxs("blockquote",{"data-reveal":!0,style:{...f(c,.08),fontFamily:x,fontWeight:400,fontSize:"clamp(34px,5.4vw,76px)",lineHeight:1.12,letterSpacing:".005em",color:g,margin:"24px 0 0"},children:["“",pe[r],"”"]}),e.jsx("div",{"data-reveal":!0,style:{...f(c,.14),fontSize:14,color:"rgba(243,234,211,.7)",marginTop:22},children:me[r]}),e.jsxs("div",{"data-reveal":!0,style:{...f(c,.2),display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(24px,4vw,64px)",marginTop:"clamp(48px,7vh,88px)",maxWidth:820},className:"rb-catering-grid",children:[e.jsx("p",{style:{fontSize:16.5,lineHeight:1.75,color:"rgba(243,234,211,.86)",margin:0},children:xe[r]}),e.jsx("p",{style:{fontSize:16.5,lineHeight:1.75,color:"rgba(243,234,211,.86)",margin:0},children:ge[r]})]})]})}),e.jsx("section",{id:"bread",style:{background:R,padding:C},children:e.jsxs("div",{style:S,children:[e.jsxs("div",{"data-reveal":!0,style:{...f(c),display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:24,flexWrap:"wrap",borderTop:`1px solid ${z}`,paddingTop:16},children:[e.jsxs("div",{style:{maxWidth:620},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n},children:t.breadKicker}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(34px,4.8vw,64px)",lineHeight:1.03,margin:"16px 0 0",...N},children:t.breadTitle}),e.jsx("p",{style:{fontSize:16,lineHeight:1.7,color:l,margin:"16px 0 0"},children:t.breadIntro})]}),e.jsx("div",{style:{fontSize:13.5,color:L,fontStyle:"italic"},children:t.breadNote})]}),e.jsx("div",{className:"rb-bread-grid","data-reveal":!0,style:{...f(c,.12),display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"clamp(40px,6vw,88px)",marginTop:"clamp(36px,5vh,56px)"},children:j.map(i=>e.jsxs("div",{style:{padding:"16px 0",borderBottom:"1px solid rgba(243,234,211,.1)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[e.jsx("span",{style:{fontFamily:x,fontSize:"clamp(18px,1.8vw,22px)",color:u,lineHeight:1.3},children:i.name}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:15,fontWeight:600,color:n,whiteSpace:"nowrap"},children:i.price})]}),e.jsx("div",{style:{fontSize:13.5,color:l,marginTop:5,lineHeight:1.5},children:i.desc[r]})]},i.name))})]})}),e.jsx("section",{id:"gallery",style:{background:I,padding:C},children:e.jsxs("div",{style:S,children:[e.jsxs("div",{"data-reveal":!0,style:{...f(c),borderTop:`1px solid ${z}`,paddingTop:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n},children:t.galleryKicker}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...N},children:t.galleryTitle}),e.jsx("p",{style:{fontSize:16,color:l,margin:"16px 0 0",lineHeight:1.65},children:t.galleryIntro})]}),e.jsx("div",{className:"rb-gallery-grid",style:{marginTop:"clamp(32px,5vh,52px)"},children:h.map((i,m)=>e.jsx(Fe,{photo:i,lang:r,onOpen:()=>F(m),style:f(c,m%4*.07)},i.src))})]})}),e.jsx("section",{style:{background:ze,padding:C},children:e.jsxs("div",{style:S,children:[e.jsxs("div",{className:"rb-catering-grid","data-reveal":!0,style:{...f(c),display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,80px)",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n},children:t.cateringKicker}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(30px,3.6vw,50px)",margin:"16px 0 0",...N},children:t.cateringTitle}),e.jsx("p",{style:{fontSize:16,lineHeight:1.7,color:l,margin:"16px 0 0",maxWidth:"46ch"},children:t.cateringBody}),e.jsx("a",{href:`mailto:${o.orderEmail}`,className:"rb-cta rb-cta-ghost",style:{marginTop:"clamp(20px,3vh,28px)"},children:t.cateringCta})]}),e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:0},children:T.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4,padding:"13px 0",borderBottom:`1px solid ${k}`},children:[e.jsx("span",{style:{fontFamily:x,fontSize:"clamp(18px,1.8vw,22px)",color:g},children:i.name}),e.jsx("span",{className:"rb-leader","aria-hidden":"true"}),e.jsx("span",{style:{fontSize:15,fontWeight:600,color:n,whiteSpace:"nowrap"},children:i.price})]},i.name))})})]}),e.jsxs("figure",{"data-reveal":!0,style:{...f(c,.14),margin:"0",marginTop:"clamp(48px,7vh,84px)",borderTop:`1px solid ${k}`,paddingTop:"clamp(36px,5vh,52px)",textAlign:"center"},children:[e.jsx(Me,{lang:r,reduced:c,reviews:ae}),e.jsx("div",{style:{fontSize:13.5,color:l,marginTop:18},children:se[r]})]})]})}),e.jsx(Ie,{lang:r,orderPath:Z}),e.jsx("section",{id:"visit",style:{background:I,padding:C},children:e.jsx("div",{style:S,children:e.jsxs("div",{className:"rb-visit-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,5vw,80px)",alignItems:"start"},children:[e.jsxs("div",{"data-reveal":!0,style:f(c),children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:n,borderTop:`1px solid ${z}`,paddingTop:16},children:t.visitKicker}),e.jsx("h2",{style:{fontFamily:x,fontWeight:400,fontSize:"clamp(38px,5vw,72px)",lineHeight:1.02,margin:"18px 0 0",...N},children:t.visitTitle}),e.jsx("a",{href:o.order,target:"_blank",rel:"noreferrer",className:"rb-cta rb-cta-gold",style:{marginTop:"clamp(24px,4vh,36px)"},children:t.orderPrimary}),e.jsx("p",{style:{fontSize:14.5,color:l,margin:"18px 0 0",lineHeight:1.6,maxWidth:"34ch"},children:t.deliveryNote}),e.jsx(Ce,{lang:r,locations:[{label:t.mainLabel,address:H,query:"Reynir bakari, Dalvegur 4, 201 Kópavogur"},{label:t.secondLabel,address:G,query:"Reynir bakari, Hamraborg 14, 200 Kópavogur"}]})]}),e.jsxs("div",{"data-reveal":!0,style:{...f(c,.1),display:"grid",gap:26},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:n},children:t.mainLabel}),e.jsx("div",{style:{fontFamily:x,fontSize:"clamp(22px,2.4vw,28px)",color:g,marginTop:8},children:H}),e.jsxs("div",{style:{marginTop:16,display:"grid",gap:12},children:[ne[r].map(i=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,borderBottom:`1px solid ${k}`,paddingBottom:10,fontSize:14.5,color:l},children:[e.jsx("span",{children:i.split(/\s(.+)/)[0]}),e.jsx("span",{style:{color:g},children:i.split(/\s(.+)/)[1]})]},i)),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,borderBottom:`1px solid ${k}`,paddingBottom:10},children:[e.jsx("span",{style:{fontSize:14.5,color:l},children:t.rowPhone}),e.jsx("a",{href:`tel:${o.phone}`,className:"rb-foot-link",style:{fontSize:14.5,fontWeight:600},children:o.phoneLabel})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16},children:[e.jsx("span",{style:{fontSize:14.5,color:l},children:t.rowEmail}),e.jsx("a",{href:`mailto:${o.email}`,className:"rb-foot-link",style:{fontSize:14.5,fontWeight:600,wordBreak:"break-all"},children:o.email})]})]})]}),e.jsxs("div",{style:{borderTop:`1px solid ${k}`,paddingTop:20},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:n},children:t.secondLabel}),e.jsx("div",{style:{fontFamily:x,fontSize:"clamp(20px,2vw,24px)",color:g,marginTop:8},children:G}),e.jsx("p",{style:{fontSize:14,color:l,margin:"8px 0 0",lineHeight:1.6},children:oe[r]})]})]})]})})}),e.jsx("footer",{style:{background:R,borderTop:`1px solid ${k}`,padding:"52px clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{...S,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:22},children:[e.jsxs("div",{children:[e.jsx("img",{src:O,alt:"","aria-hidden":"true",width:120,height:52,loading:"lazy",decoding:"async",style:{width:120,height:"auto",display:"block"}}),e.jsx("div",{style:{fontSize:13,color:L,marginTop:12},children:t.footerTag})]}),e.jsxs("div",{style:{fontSize:13.5,color:l,lineHeight:1.8,textAlign:"right"},children:[e.jsxs("div",{children:[H," · ",o.phoneLabel]}),e.jsxs("div",{style:{display:"flex",gap:18,justifyContent:"flex-end",marginTop:6},children:[e.jsx("a",{href:o.instagram,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"Instagram"}),e.jsx("a",{href:o.facebook,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"Facebook"}),e.jsx("a",{href:o.order,target:"_blank",rel:"noreferrer",className:"rb-foot-link",children:"aha.is"})]})]})]})}),$!==null&&e.jsxs("div",{className:"rb-lightbox",role:"dialog","aria-modal":"true","aria-label":h[$].caption[r],onClick:M,children:[e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-close",onClick:M,"aria-label":t.galleryClose,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 2L16 16M16 2L2 16",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-prev",onClick:i=>{i.stopPropagation(),E(-1)},"aria-label":t.galleryPrev,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M11 3L5 9L11 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-next",onClick:i=>{i.stopPropagation(),E(1)},"aria-label":t.galleryNext,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M7 3L13 9L7 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("figure",{className:"rb-lightbox-fig",onClick:i=>i.stopPropagation(),children:[e.jsx("img",{src:h[$].src,alt:h[$].caption[r],decoding:"async"},h[$].src),e.jsx("figcaption",{className:"rb-lightbox-cap",children:h[$].caption[r]})]})]}),e.jsx(ye,{company:ee}),e.jsx(ve,{company:ee})]})}function tr(){return e.jsx(ke,{children:e.jsx(Ae,{})})}export{tr as default};
