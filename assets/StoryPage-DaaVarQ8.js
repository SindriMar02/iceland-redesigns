import{j as e,r as u,s as I,L}from"./index-Gy0SVDIv.js";import{S as R,e as W,u as O,f as p,B as x,a as h,g as T,G as m,h as z,c as b,E as c,b as S,F as y,I as v,A as w,j as D,T as B,K as $,L as F,o,m as C,d as E,D as f,H as G,C as _}from"./useLang-BFryOA1E.js";import"./image-url.umd-BrQV_kvM.js";const M=`
  /* Safari 26 tints its chrome from body's background-color (theme-color is
     ignored since Liquid Glass) — without this the status-bar strip is WHITE
     on this ink-dark page. See [[ios-safe-area-chrome-color]]. */
  html, body { background-color:${p}; }
  .rb-st ::selection { background:${T}; color:${h}; }
  .rb-st a:focus-visible, .rb-st button:focus-visible { outline:2px solid ${m}; outline-offset:3px; border-radius:4px; }

  /* the same paper grain as the landing page, so the two feel like one site */
  .rb-st::after { content:''; position:fixed; inset:0; z-index:200; pointer-events:none;
    opacity:.055; mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
    background-size:200px 200px; }

  .rb-st-bar { position:sticky; top:0; z-index:150; display:flex; align-items:center;
    justify-content:space-between; gap:20px; padding:calc(14px + env(safe-area-inset-top, 0px)) clamp(20px,4.5vw,72px) 14px;
    background-color:${p}; border-bottom:1px solid ${z}; }
  .rb-st-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${x}; font-size:14px; color:${b}; padding:10px 0; transition:color .2s ${c}; }
  .rb-st-back:hover { color:${S}; font-style:italic; }
  .rb-st-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${x}; font-size:13px; letter-spacing:.08em; color:${y};
    transition:color .2s ${c}; border-radius:4px; }
  .rb-st-lang[aria-pressed="true"] { color:${S}; }

  /* ── the archive wall ───────────────────────────────────────────────────
     CSS columns rather than grid: the frames are a mix of portrait and
     landscape, and columns let each keep its own height instead of being
     cropped into a uniform cell. */
  .rb-st-wall { column-count:3; column-gap:14px; }
  .rb-st-item { break-inside:avoid; margin:0 0 14px; padding:0; border:0; display:block; width:100%;
    position:relative; overflow:hidden; border-radius:3px; cursor:zoom-in; background:${v}; }
  .rb-st-item img { width:100%; height:auto; display:block; filter:${w};
    transition:transform .6s ${c}, filter .6s ${c}; }
  .rb-st-item:hover img, .rb-st-item:focus-visible img { transform:scale(1.03); filter:${D}; }
  .rb-st-item::after { content:''; position:absolute; inset:0; border-radius:3px;
    border:1px solid rgba(238,211,170,0); transition:border-color .3s ${c}; pointer-events:none; }
  .rb-st-item:hover::after, .rb-st-item:focus-visible::after { border-color:rgba(238,211,170,.4); }
  @media (max-width:900px) { .rb-st-wall { column-count:2; } }
  @media (max-width:560px) { .rb-st-wall { column-count:1; } }

  .rb-st-chapter { display:grid; grid-template-columns:1fr 1fr; gap:clamp(28px,5vw,72px); align-items:center; }
  .rb-st-chapter img { width:100%; height:auto; display:block; border-radius:3px; filter:${w}; }
  @media (max-width:820px) { .rb-st-chapter { grid-template-columns:1fr; } }

  .rb-lightbox { position:fixed; inset:0; z-index:300; background:rgba(11,10,9,.94);
    padding-top:env(safe-area-inset-top, 0px);
    display:flex; align-items:center; justify-content:center; padding:clamp(16px,5vh,56px);
    animation:rb-st-lb-in .28s ${c} both; }
  @keyframes rb-st-lb-in { from { opacity:0; } to { opacity:1; } }
  .rb-lightbox-fig { margin:0; max-width:min(92vw,1100px); max-height:88vh; display:flex;
    flex-direction:column; align-items:center; gap:14px; }
  .rb-lightbox-fig img { max-width:100%; max-height:74vh; width:auto; height:auto; display:block;
    border-radius:3px; box-shadow:0 40px 90px -20px rgba(0,0,0,.7); }
  .rb-lightbox-cap { font-family:${x}; font-style:italic; font-size:15px; color:${h}; text-align:center; }
  .rb-lb-btn { position:absolute; background:rgba(19,19,19,.55); border:1px solid rgba(238,211,170,.22);
    color:${h}; width:44px; height:44px; border-radius:50%; display:flex; align-items:center;
    justify-content:center; cursor:pointer; transition:background .2s ${c}, border-color .2s ${c}; }
  .rb-lb-btn:hover { background:rgba(200,168,119,.16); border-color:${m}; }
  .rb-lb-close { top:clamp(10px,2vh,28px); right:clamp(10px,2vw,28px); }
  .rb-lb-prev { left:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }
  .rb-lb-next { right:clamp(6px,1.5vw,20px); top:50%; transform:translateY(-50%); }

  @media (prefers-reduced-motion: reduce) {
    .rb-st-item img { transition:none; }
    .rb-st-item:hover img { transform:none; }
    .rb-lightbox { animation:none; }
  }
`;function Y(){const[s,j]=W(),n=B[s],{GALLERY:i,statementQuote:N,statementWho:H,storyP1:P,storyP2:A}=O(),[a,l]=u.useState(null);u.useEffect(()=>{I(p)},[]),u.useEffect(()=>{if(a===null)return;const t=r=>{r.key==="Escape"&&l(null),r.key==="ArrowRight"&&l(d=>d===null?d:(d+1)%i.length),r.key==="ArrowLeft"&&l(d=>d===null?d:(d-1+i.length)%i.length)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a,i]);const g={maxWidth:1180,margin:"0 auto"},k="clamp(64px,9vh,110px) clamp(20px,4.5vw,72px)";return e.jsxs("div",{className:"rb-st",style:{background:p,color:h,fontFamily:x,minHeight:"100svh"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:M}}),e.jsxs("div",{className:"rb-st-bar",children:[e.jsxs(L,{to:$,className:"rb-st-back",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M10 3L5 8L10 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n.storyBack]}),e.jsx("img",{src:F,alt:"Reynir bakari",width:132,height:57,decoding:"async",style:{width:92,height:"auto"}}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-st-lang","aria-pressed":s==="en",onClick:()=>j("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:y,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-st-lang","aria-pressed":s==="is",onClick:()=>j("is"),children:"ÍS"})]})]}),e.jsxs("section",{style:{position:"relative",height:"clamp(300px,52vh,560px)",overflow:"hidden",background:v},children:[e.jsx("img",{src:o.open.src,alt:"","aria-hidden":"true",width:o.open.w,height:o.open.h,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:w}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(0deg, rgba(11,10,9,.92) 0%, rgba(11,10,9,.2) 55%, rgba(11,10,9,.5) 100%)"}}),e.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"clamp(24px,4vw,56px) clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{...g},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:m},children:n.storyPageKicker}),e.jsx("h1",{style:{fontFamily:f,fontWeight:400,fontSize:"clamp(32px,5vw,68px)",lineHeight:1.04,margin:"14px 0 0",...E,...C},children:n.storyPageTitle})]})})]}),e.jsx("section",{style:{background:p,padding:k},children:e.jsxs("div",{style:g,children:[e.jsx("p",{style:{fontSize:"clamp(17px,1.9vw,21px)",lineHeight:1.7,color:"rgba(243,234,211,.86)",margin:0,maxWidth:"62ch"},children:n.storyPageLead}),e.jsxs("div",{className:"rb-st-chapter",style:{marginTop:"clamp(48px,7vh,88px)"},children:[e.jsx("div",{children:e.jsx("p",{style:{fontSize:16.5,lineHeight:1.75,color:b,margin:0},children:P[s]})}),e.jsx("img",{src:o.founding.src,alt:"",width:o.founding.w,height:o.founding.h,loading:"lazy",decoding:"async"})]}),e.jsxs("div",{className:"rb-st-chapter",style:{marginTop:"clamp(40px,6vh,72px)"},children:[e.jsx("img",{src:o.today.src,alt:"",width:o.today.w,height:o.today.h,loading:"lazy",decoding:"async",style:{order:-1}}),e.jsx("div",{children:e.jsx("p",{style:{fontSize:16.5,lineHeight:1.75,color:b,margin:0},children:A[s]})})]})]})}),e.jsx("section",{style:{background:T,padding:"clamp(72px,11vh,140px) clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{maxWidth:980,margin:"0 auto"},children:[e.jsxs("blockquote",{style:{fontFamily:f,fontWeight:400,fontSize:"clamp(30px,4.8vw,64px)",lineHeight:1.14,color:h,margin:0},children:["“",N[s],"”"]}),e.jsx("div",{style:{fontSize:14,color:"rgba(243,234,211,.7)",marginTop:20},children:H[s]})]})}),e.jsx("section",{style:{background:p,padding:k},children:e.jsxs("div",{style:g,children:[e.jsx("div",{style:{borderTop:`1px solid ${G}`,paddingTop:16},children:e.jsxs("div",{style:{maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:m},children:n.storyPageArchive}),e.jsx("h2",{style:{fontFamily:f,fontWeight:400,fontSize:"clamp(30px,4vw,52px)",lineHeight:1.03,margin:"18px 0 0",...E,...C},children:n.galleryTitle}),e.jsx("p",{style:{fontSize:16,color:b,margin:"16px 0 0",lineHeight:1.65},children:n.storyPageArchiveIntro})]})}),e.jsx("div",{className:"rb-st-wall",style:{marginTop:"clamp(32px,5vh,52px)"},children:i.map((t,r)=>e.jsx("button",{type:"button",className:"rb-st-item",onClick:()=>l(r),"aria-label":t.caption[s],children:e.jsx("img",{src:t.srcSm,srcSet:`${t.srcSm} 800w, ${t.src} 2000w`,sizes:"(max-width:560px) 92vw, (max-width:900px) 46vw, 384px",alt:t.caption[s],loading:"lazy",decoding:"async",style:{aspectRatio:`${t.w} / ${t.h}`}})},t.src))})]})}),e.jsx("footer",{style:{background:v,borderTop:`1px solid ${z}`,padding:"48px clamp(20px,4.5vw,72px)"},children:e.jsxs("div",{style:{...g,display:"flex",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[e.jsx(L,{to:$,className:"rb-st-back",children:n.storyBack}),e.jsx("div",{style:{fontSize:13,color:y},children:"Dalvegur 4, 201 Kópavogur"})]})}),a!==null&&i[a]&&e.jsxs("div",{className:"rb-lightbox",role:"dialog","aria-modal":"true","aria-label":i[a].caption[s],onClick:()=>l(null),children:[e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-close",onClick:()=>l(null),"aria-label":n.galleryClose,children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2 2L16 16M16 2L2 16",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-prev","aria-label":n.galleryPrev,onClick:t=>{t.stopPropagation(),l(r=>r===null?r:(r-1+i.length)%i.length)},children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M11 3L5 9L11 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{type:"button",className:"rb-lb-btn rb-lb-next","aria-label":n.galleryNext,onClick:t=>{t.stopPropagation(),l(r=>r===null?r:(r+1)%i.length)},children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M7 3L13 9L7 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("figure",{className:"rb-lightbox-fig",onClick:t=>t.stopPropagation(),children:[e.jsx("img",{src:i[a].src,alt:i[a].caption[s],decoding:"async"},i[a].src),e.jsx("figcaption",{className:"rb-lightbox-cap",children:i[a].caption[s]})]})]}),e.jsx(_,{})]})}function U(){return e.jsx(R,{children:e.jsx(Y,{})})}export{U as default};
