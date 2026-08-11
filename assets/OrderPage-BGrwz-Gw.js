import{r as p,j as r,c as lr,s as cr,L as Z}from"./index-CCi4s_Ao.js";import{P as pr}from"./PreviewChrome-Cuf37mDq.js";import{P as br}from"./PreviewFooter-B3aGKEI3.js";import{g as mr}from"./companies-B4GT8Mbp.js";import{e as P,q as W,O as ar,i as z,I as q,H as T,G as s,E as t,D as $,a as v,b as u,c as f,B as L,F as w,k as R,f as Y,d as G,j as D,u as xr,L as hr,T as ur}from"./useLang-CAUNEhGC.js";import"./copy-DxwxpMoA.js";import"./createLucideIcon-BvWIOAlJ.js";import"./proxy-BMbE79_j.js";import"./send-CQD6brIo.js";import"./index-DCmpkFTV.js";import"./external-link-CgA2ezbW.js";import"./x-DNNHwXm_.js";import"./mail-D4Y3Wjvu.js";import"./SndrBadge-Cd_WFPNH.js";import"./data-C8ZDiw2z.js";const fr=`
  /* layout: functional split, the slip reacts to the choices */
  .rb-ord-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:clamp(28px,4vw,64px); align-items:start; }

  .rb-ord-step { border-top:1px solid ${T}; padding-top:18px; margin-top:clamp(30px,4.5vh,46px); }
  .rb-ord-steplabel { font-size:12px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${s}; }

  /* product picker */
  .rb-ord-prods { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; margin-top:16px; }
  .rb-ord-prod { position:relative; display:flex; flex-direction:column; gap:6px; text-align:left; cursor:pointer;
    padding:16px 15px; border:1px solid ${T}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .22s ${t}, background .22s ${t}, transform .16s ${t}; }
  .rb-ord-prod:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-prod:active { transform:scale(.99); }
  .rb-ord-prod[data-on="true"] { border-color:${s}; background:rgba(200,168,119,.09); }
  .rb-ord-prod-name { font-family:${$}; font-size:19px; line-height:1.15; color:${v}; padding-right:24px; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-name { color:${u}; }
  .rb-ord-prod-from { font-size:12.5px; color:${f}; font-variant-numeric:tabular-nums; }
  .rb-ord-prod-mark { position:absolute; top:14px; right:14px; width:17px; height:17px; border-radius:50%;
    border:1px solid rgba(238,211,170,.4); display:flex; align-items:center; justify-content:center;
    transition:border-color .2s ${t}, background .2s ${t}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark { border-color:${s}; background:${s}; }
  .rb-ord-prod-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${t}, transform .18s ${t}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark svg { opacity:1; transform:none; }

  /* option groups */
  .rb-ord-group { margin:0; padding:34px 0 0; border:0; }
  .rb-ord-legend { padding:0; font-family:${$}; font-size:clamp(19px,2vw,23px); color:${v}; }
  .rb-ord-help { font-size:13.5px; color:${f}; margin:6px 0 0; line-height:1.5; }
  .rb-ord-tag { font-family:${L}; font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:${w}; margin-left:10px; vertical-align:middle; }

  .rb-ord-choices { display:grid; gap:8px; margin-top:14px; }
  .rb-ord-choice { position:relative; display:flex; align-items:baseline; gap:10px; cursor:pointer;
    min-height:48px; padding:12px 15px; border:1px solid ${R}; border-radius:4px;
    transition:border-color .2s ${t}, background .2s ${t}, transform .14s ${t}; }
  .rb-ord-choice:hover { border-color:rgba(238,211,170,.32); background:rgba(243,234,211,.03); }
  .rb-ord-choice:active { transform:scale(.995); }
  .rb-ord-choice[data-on="true"] { border-color:${s}; background:rgba(200,168,119,.08); }
  .rb-ord-choice[data-off="true"] { opacity:.42; cursor:not-allowed; }
  .rb-ord-choice[data-off="true"]:hover { border-color:${R}; background:transparent; }
  /* the real input stays in the a11y tree and drives focus, but is not painted */
  .rb-ord-choice input, .rb-ord-prod input {
    position:absolute; opacity:0; width:1px; height:1px; margin:0; pointer-events:none; }
  .rb-ord-choice:has(input:focus-visible), .rb-ord-prod:has(input:focus-visible) {
    outline:2px solid ${s}; outline-offset:3px; }
  .rb-ord-mark { flex:none; width:15px; height:15px; margin-top:3px; border:1px solid rgba(238,211,170,.45);
    display:flex; align-items:center; justify-content:center; transition:border-color .2s ${t}, background .2s ${t}; }
  .rb-ord-mark[data-shape="round"] { border-radius:50%; }
  .rb-ord-mark[data-shape="box"] { border-radius:3px; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark { border-color:${s}; background:${s}; }
  .rb-ord-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${t}, transform .18s ${t}; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark svg { opacity:1; transform:none; }
  .rb-ord-choice-label { color:${v}; font-size:15.5px; line-height:1.4; }
  .rb-ord-choice-note { display:block; font-size:12.5px; color:${f}; margin-top:4px; line-height:1.45; }
  .rb-ord-choice-price { margin-left:auto; padding-left:12px; font-size:14px; color:${s}; white-space:nowrap;
    font-variant-numeric:tabular-nums; }
  .rb-ord-choice-price[data-free="true"] { color:${w}; font-size:12.5px; }

  /* text + form fields */
  .rb-ord-field { display:block; margin-top:18px; }
  .rb-ord-label { display:block; font-size:13px; letter-spacing:.02em; color:${u}; margin-bottom:7px; }
  .rb-ord-input, .rb-ord-select, .rb-ord-textarea {
    width:100%; box-sizing:border-box; font-family:${L}; font-size:16px; color:${v};
    background:rgba(11,10,9,.5); border:1px solid ${T}; border-radius:4px; padding:13px 14px;
    transition:border-color .2s ${t}, background .2s ${t}; color-scheme:dark; }
  .rb-ord-textarea { min-height:92px; resize:vertical; line-height:1.55; }
  .rb-ord-input::placeholder, .rb-ord-textarea::placeholder { color:${f}; opacity:1; }
  .rb-ord-input:hover, .rb-ord-select:hover, .rb-ord-textarea:hover { border-color:rgba(238,211,170,.3); }
  .rb-ord-input:focus-visible, .rb-ord-select:focus-visible, .rb-ord-textarea:focus-visible {
    outline:2px solid ${s}; outline-offset:2px; border-color:${s}; }
  .rb-ord-input[aria-invalid="true"], .rb-ord-select[aria-invalid="true"] { border-color:#D98A76; }
  .rb-ord-hint { font-size:12.5px; color:${f}; margin-top:6px; line-height:1.45; }
  .rb-ord-err { font-size:12.5px; color:#E8A594; margin-top:6px; line-height:1.45; }
  .rb-ord-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* the slip */
  .rb-ord-slip { position:sticky; top:24px; border:1px solid ${T}; border-radius:6px; padding:22px 20px 20px;
    background:linear-gradient(170deg, rgba(243,234,211,.055), rgba(243,234,211,.015));
    box-shadow:0 26px 60px -30px rgba(0,0,0,.8); }
  .rb-ord-slip-title { font-family:${$}; font-size:20px; color:${u}; }
  .rb-ord-slip-rule { height:0; border-bottom:1px dashed rgba(238,211,170,.28); margin:14px 0 4px; }
  .rb-ord-slip-empty { font-size:13.5px; color:${f}; line-height:1.55; margin:12px 0 0; font-style:italic; }
  .rb-ord-slipline { display:flex; align-items:baseline; gap:4px; padding:9px 0; }
  .rb-ord-slipline-name { font-size:14px; color:${v}; }
  .rb-ord-slipline-sub { font-size:12px; color:${w}; display:block; margin-top:2px; }
  .rb-ord-slipline-dots { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.28);
    margin:0 4px; transform:translateY(2px); }
  .rb-ord-slipline-price { font-size:13.5px; color:${s}; white-space:nowrap; font-variant-numeric:tabular-nums; }
  .rb-ord-slipline-price[data-free="true"] { color:${w}; font-size:12px; }
  .rb-ord-total { display:flex; align-items:baseline; gap:4px; margin-top:6px; padding-top:14px;
    border-top:1px solid rgba(238,211,170,.22); }
  .rb-ord-total-label { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:${u}; }
  .rb-ord-total-value { margin-left:auto; font-family:${$}; font-size:27px; color:${s};
    font-variant-numeric:tabular-nums; }
  .rb-ord-slip-note { font-size:12px; color:${f}; margin:12px 0 0; line-height:1.5; }

  /* mobile running total, sticks under the page header, never at the bottom
     (a bottom-fixed bar would collide with the preview chrome) */
  .rb-ord-mobiletotal { display:none; }

  /* motion: each earns its place. line-in confirms a choice registered,
     total-bump signals the price changed, group-in covers the product swap. */
  @keyframes rb-ord-linein { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }
  .rb-ord-slipline { animation:rb-ord-linein .26s ${t} both; }
  @keyframes rb-ord-bump { 0% { transform:none; } 38% { transform:scale(1.07); } 100% { transform:none; } }
  .rb-ord-total-value[data-bump="true"] { animation:rb-ord-bump .34s ${t}; }
  @keyframes rb-ord-groupin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-ord-groups[data-key] { animation:rb-ord-groupin .38s ${t} both; }

  /* sent state */
  .rb-ord-done { border:1px solid ${s}; border-radius:6px; padding:clamp(26px,4vw,40px);
    background:rgba(200,168,119,.07); text-align:center; animation:rb-ord-groupin .4s ${t} both; }
  .rb-ord-done-title { font-family:${$}; font-size:clamp(26px,3.4vw,38px); margin:0;  }

  .rb-ord-sample { display:flex; gap:11px; align-items:flex-start; margin-top:20px; padding:12px 15px;
    border:1px dashed rgba(238,211,170,.3); border-radius:4px; background:rgba(243,234,211,.025); }
  .rb-ord-sample svg { flex:none; margin-top:1px; }
  .rb-ord-sample span { font-size:12.5px; color:${f}; line-height:1.5; }

  .rb-ord-submit { width:100%; margin-top:24px; font-family:${L}; font-weight:600; font-size:16px;
    padding:16px 28px; border-radius:4px; border:1px solid ${s}; background:${s}; color:${Y};
    cursor:pointer; transition:background .22s ${t}, border-color .22s ${t}, transform .16s ${t}; }
  .rb-ord-submit:hover:not(:disabled) { background:${u}; border-color:${u}; }
  .rb-ord-submit:active:not(:disabled) { transform:scale(.985); }
  .rb-ord-submit:disabled { opacity:.6; cursor:progress; }
  .rb-ord-submit:focus-visible { outline:2px solid ${u}; outline-offset:3px; }
  .rb-ord-errsummary { margin-top:14px; font-size:13.5px; color:#E8A594; text-align:center; }
  /* padded so the phone number clears the 44px tap target on a phone */
  .rb-ord-tel { display:inline-block; padding:13px 10px; color:${u}; text-decoration:none;
    border-bottom:1px solid rgba(238,211,170,.32); }
  .rb-ord-tel:hover { color:${v}; border-bottom-color:${s}; }
  .rb-ord-tel:focus-visible { outline:2px solid ${s}; outline-offset:2px; border-radius:3px; }

  @media (max-width:900px) {
    .rb-ord-grid { grid-template-columns:1fr; gap:0; }
    /* the slip moves below the choices; a slim sticky bar carries the total instead */
    .rb-ord-slipwrap { order:2; margin-top:clamp(28px,4vh,40px); }
    .rb-ord-slip { position:static; }
    .rb-ord-formwrap { order:1; }
    .rb-ord-mobiletotal { display:flex; position:sticky; top:0; z-index:6; align-items:baseline; gap:10px;
      margin:0 calc(clamp(20px,4.5vw,72px) * -1); padding:11px clamp(20px,4.5vw,72px);
      background:rgba(11,10,9,.94); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
      border-bottom:1px solid ${T}; }
    .rb-ord-mobiletotal-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:${w}; }
    .rb-ord-mobiletotal-value { margin-left:auto; font-family:${$}; font-size:19px; color:${s};
      font-variant-numeric:tabular-nums; }
    .rb-ord-prods { grid-template-columns:1fr; }
    /* the sticky bar already draws a divider, so the step right under it must
       not draw a second one. Adjacent-sibling, not :first-of-type, because the
       bar is itself the first div sibling. */
    .rb-ord-mobiletotal + .rb-ord-step { border-top:0; padding-top:0; margin-top:clamp(24px,3.5vh,34px); }
  }
  @media (max-width:520px) {
    .rb-ord-two { grid-template-columns:1fr; gap:0; }
    .rb-ord-choice-price { margin-left:0; padding-left:0; width:100%; }
    .rb-ord-choice { flex-wrap:wrap; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-ord-slipline, .rb-ord-groups[data-key], .rb-ord-done { animation:none; }
    .rb-ord-total-value[data-bump="true"] { animation:none; }
    .rb-ord-prod, .rb-ord-choice, .rb-ord-submit, .rb-ord-input, .rb-ord-select, .rb-ord-textarea,
    .rb-ord-mark, .rb-ord-mark svg { transition:none; }
    .rb-ord-prod:active, .rb-ord-choice:active, .rb-ord-submit:active { transform:none; }
  }
`,rr=a=>String(a).padStart(2,"0");function gr(a){const b=new Date;return b.setDate(b.getDate()+a),`${b.getFullYear()}-${rr(b.getMonth()+1)}-${rr(b.getDate())}`}const vr={is:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};function jr(a,b){const[x,o,g]=a.split("-").map(Number);if(!x||!o||!g)return a;const _=vr[b][o-1]??"";return b==="is"?`${g}. ${_}`:`${g} ${_}`}const er=()=>r.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1 3.4L3.3 5.7L8 1",stroke:"#131313",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})});function yr({lang:a,standalone:b=!1,initialProductId:x}){const o=ar[a],[g,_]=p.useState(()=>x&&P.some(e=>e.id===x)?x:P[0].id),n=p.useMemo(()=>P.find(e=>e.id===g)??P[0],[g]),[C,M]=p.useState({}),[O,A]=p.useState(""),[l,y]=p.useState({name:"",phone:"",email:"",date:"",location:W[0].id,notes:""}),[E,N]=p.useState({}),[K,V]=p.useState(!1),[I,B]=p.useState("idle"),S=p.useMemo(()=>gr(n.leadDays),[n.leadDays]);p.useEffect(()=>{M({}),A(""),N(e=>{const c={};for(const i of Object.keys(e))i.startsWith("c_")&&(c[i]=e[i]);return c})},[g]),p.useEffect(()=>{y(e=>e.date&&e.date<S?{...e,date:""}:e)},[S]);const ir=(e,c)=>{M(i=>{const m=i[e.id]??[];return e.kind==="single"?{...i,[e.id]:[c]}:m.includes(c)?{...i,[e.id]:m.filter(h=>h!==c)}:e.max&&m.length>=e.max?i:{...i,[e.id]:[...m,c]}}),N(i=>({...i,[`g_${e.id}`]:!0}))},{lines:tr,total:k}=p.useMemo(()=>{const e=[{key:"base",name:n.name[a],sub:o.slipBase,price:n.basePrice}];let c=n.basePrice;for(const m of n.groups)for(const h of C[m.id]??[]){const j=m.choices.find(F=>F.id===h);j&&(c+=j.priceDelta,e.push({key:`${m.id}_${j.id}`,name:j.label[a],sub:m.label[a],price:j.priceDelta>0?j.priceDelta:null}))}const i=O.trim();return i&&n.inscription&&e.push({key:"inscription",name:`“${i}”`,sub:n.inscription.label[a],price:null}),{lines:e,total:c}},[n,C,O,a,o.slipBase]),[J,U]=p.useState(!1),X=p.useRef(k);p.useEffect(()=>{if(X.current===k)return;X.current=k,U(!0);const e=window.setTimeout(()=>U(!1),360);return()=>window.clearTimeout(e)},[k]);const H=p.useMemo(()=>{const e={};for(const i of n.groups)i.required&&(C[i.id]??[]).length===0&&(e[`g_${i.id}`]=i.kind==="single"?o.errRequiredGroup:o.errRequiredMulti);l.name.trim()||(e.c_name=o.errName);const c=l.phone.replace(/[^\d]/g,"");return l.phone.trim()?c.length<7&&(e.c_phone=o.errPhoneFormat):e.c_phone=o.errPhone,l.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.email.trim())&&(e.c_email=o.errEmail),l.date?l.date<S&&(e.c_date=o.errDateTooSoon(jr(S,a))):e.c_date=o.errDate,e},[n,C,l,S,a,o]),d=e=>E[e]||K?H[e]:void 0,Q=p.useRef(null),sr=e=>{var c;if(e.preventDefault(),V(!0),Object.keys(H).length>0){const i=(c=Q.current)==null?void 0:c.querySelector('[data-invalid="true"]');i==null||i.scrollIntoView({block:"center",behavior:"smooth"}),i==null||i.focus({preventScroll:!0});return}B("sending"),window.setTimeout(()=>B("done"),700)},nr=()=>{M({}),A(""),y({name:"",phone:"",email:"",date:"",location:W[0].id,notes:""}),N({}),V(!1),B("idle")},dr=r.jsxs("div",{className:"rb-ord-slip",children:[r.jsx("div",{className:"rb-ord-slip-title",children:o.slipTitle}),r.jsx("div",{className:"rb-ord-slip-rule","aria-hidden":"true"}),r.jsx("div",{children:tr.map(e=>r.jsxs("div",{className:"rb-ord-slipline",children:[r.jsxs("span",{className:"rb-ord-slipline-name",children:[e.name,e.sub&&r.jsx("span",{className:"rb-ord-slipline-sub",children:e.sub})]}),r.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),r.jsx("span",{className:"rb-ord-slipline-price","data-free":e.price===null,children:e.price===null?o.included:z(e.price)})]},e.key))}),r.jsxs("div",{className:"rb-ord-total",children:[r.jsx("span",{className:"rb-ord-total-label",children:o.slipTotal}),r.jsx("span",{className:"rb-ord-total-value","data-bump":J,"aria-live":"polite",children:z(k)})]}),r.jsx("p",{className:"rb-ord-slip-note",children:o.slipNote})]});return r.jsxs("section",{id:"order",style:{background:q,padding:b?"clamp(28px,5vh,48px) clamp(20px,4.5vw,72px) clamp(80px,11vh,140px)":"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[r.jsx("style",{children:fr}),r.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[r.jsxs("div",{style:{borderTop:b?"none":`1px solid ${T}`,paddingTop:b?0:16,maxWidth:640},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:s},children:o.kicker}),b?r.jsx("h1",{style:{fontFamily:$,fontWeight:400,fontSize:"clamp(38px,5.4vw,72px)",lineHeight:1.02,margin:"18px 0 0",...G},children:o.title}):r.jsx("h2",{style:{fontFamily:$,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...G},children:o.title}),r.jsx("p",{style:{fontSize:16,color:f,margin:"16px 0 0",lineHeight:1.65},children:o.intro}),r.jsxs("div",{className:"rb-ord-sample",children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[r.jsx("circle",{cx:"7",cy:"7",r:"6.2",stroke:s,strokeWidth:"1.1"}),r.jsx("path",{d:"M7 4v3.6",stroke:s,strokeWidth:"1.4",strokeLinecap:"round"}),r.jsx("circle",{cx:"7",cy:"10.1",r:".85",fill:s})]}),r.jsx("span",{children:o.sampleNotice})]})]}),I==="done"?r.jsxs("div",{className:"rb-ord-done",style:{marginTop:"clamp(30px,4.5vh,46px)"},role:"status",children:[r.jsx("h3",{className:"rb-ord-done-title",style:{...G},children:o.doneTitle}),r.jsx("p",{style:{fontSize:16,color:v,lineHeight:1.65,margin:"14px auto 0",maxWidth:"46ch"},children:o.doneBody}),r.jsx("p",{style:{fontSize:13,color:f,margin:"14px auto 0",maxWidth:"46ch",fontStyle:"italic"},children:o.doneDemo}),r.jsxs("div",{style:{marginTop:22,fontSize:15,color:u,fontVariantNumeric:"tabular-nums"},children:[o.slipTotal,": ",z(k)]}),r.jsx("button",{type:"button",className:"rb-ord-submit",style:{width:"auto",marginTop:24},onClick:nr,children:o.doneAgain})]}):r.jsxs("form",{ref:Q,className:"rb-ord-grid",style:{marginTop:"clamp(24px,3.5vh,36px)"},onSubmit:sr,noValidate:!0,children:[r.jsxs("div",{className:"rb-ord-formwrap",children:[r.jsxs("div",{className:"rb-ord-mobiletotal",children:[r.jsx("span",{className:"rb-ord-mobiletotal-label",children:o.slipTotal}),r.jsx("span",{className:"rb-ord-mobiletotal-value","data-bump":J,"aria-live":"polite",children:z(k)})]}),r.jsxs("div",{className:"rb-ord-step",style:{marginTop:22},children:[r.jsx("div",{className:"rb-ord-steplabel",children:o.stepProduct}),r.jsx("div",{className:"rb-ord-prods",role:"radiogroup","aria-label":o.stepProduct,children:P.map(e=>r.jsxs("label",{className:"rb-ord-prod","data-on":e.id===g,children:[r.jsx("input",{type:"radio",name:"rb-ord-product",value:e.id,checked:e.id===g,onChange:()=>_(e.id)}),r.jsx("span",{className:"rb-ord-prod-mark","aria-hidden":"true",children:r.jsx(er,{})}),r.jsx("span",{className:"rb-ord-prod-name",children:e.name[a]}),r.jsxs("span",{className:"rb-ord-prod-from",children:[a==="is"?"frá":"from"," ",z(e.basePrice)]})]},e.id))}),r.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:n.blurb[a]})]}),r.jsxs("div",{className:"rb-ord-step",children:[r.jsx("div",{className:"rb-ord-steplabel",children:o.stepOptions}),r.jsxs("div",{className:"rb-ord-groups","data-key":n.id,children:[n.groups.map(e=>{const c=C[e.id]??[],i=!!e.max&&c.length>=e.max,m=d(`g_${e.id}`);return r.jsxs("fieldset",{className:"rb-ord-group",children:[r.jsxs("legend",{className:"rb-ord-legend",children:[e.label[a],r.jsx("span",{className:"rb-ord-tag",children:e.required?o.required:o.optional})]}),(e.help||e.max)&&r.jsx("p",{className:"rb-ord-help",children:e.help?e.help[a]:o.chooseUpTo(e.max)}),r.jsx("div",{className:"rb-ord-choices",children:e.choices.map(h=>{const j=c.includes(h.id),F=!j&&i;return r.jsxs("label",{className:"rb-ord-choice","data-on":j,"data-off":F,children:[r.jsx("input",{type:e.kind==="single"?"radio":"checkbox",name:`rb-ord-${e.id}`,checked:j,disabled:F,"data-invalid":m?"true":void 0,"aria-describedby":m?`err_g_${e.id}`:void 0,onChange:()=>ir(e,h.id)}),r.jsx("span",{className:"rb-ord-mark","data-shape":e.kind==="single"?"round":"box","aria-hidden":"true",children:r.jsx(er,{})}),r.jsxs("span",{className:"rb-ord-choice-label",children:[h.label[a],h.note&&r.jsx("span",{className:"rb-ord-choice-note",children:h.note[a]})]}),r.jsx("span",{className:"rb-ord-choice-price","data-free":h.priceDelta===0,children:h.priceDelta===0?o.included:`+ ${z(h.priceDelta)}`})]},h.id)})}),m&&r.jsx("p",{className:"rb-ord-err",id:`err_g_${e.id}`,role:"alert",children:m})]},e.id)}),n.inscription&&r.jsxs("div",{className:"rb-ord-field",children:[r.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-inscription",children:[n.inscription.label[a],r.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),r.jsx("input",{id:"rb-ord-inscription",className:"rb-ord-input",type:"text",maxLength:n.inscription.maxLength,placeholder:n.inscription.placeholder[a],value:O,onChange:e=>A(e.target.value)}),r.jsx("p",{className:"rb-ord-hint",children:o.charsLeft(n.inscription.maxLength-O.length)})]})]},n.id)]}),r.jsxs("div",{className:"rb-ord-step",children:[r.jsx("div",{className:"rb-ord-steplabel",children:o.stepDetails}),r.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[r.jsxs("div",{className:"rb-ord-field",children:[r.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-name",children:o.fieldName}),r.jsx("input",{id:"rb-ord-name",className:"rb-ord-input",type:"text",autoComplete:"name",value:l.name,"data-invalid":d("c_name")?"true":void 0,"aria-invalid":!!d("c_name"),"aria-describedby":d("c_name")?"err_c_name":void 0,onChange:e=>y({...l,name:e.target.value}),onBlur:()=>N({...E,c_name:!0})}),d("c_name")&&r.jsx("p",{className:"rb-ord-err",id:"err_c_name",role:"alert",children:d("c_name")})]}),r.jsxs("div",{className:"rb-ord-field",children:[r.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-phone",children:o.fieldPhone}),r.jsx("input",{id:"rb-ord-phone",className:"rb-ord-input",type:"tel",inputMode:"tel",autoComplete:"tel",value:l.phone,"data-invalid":d("c_phone")?"true":void 0,"aria-invalid":!!d("c_phone"),"aria-describedby":d("c_phone")?"err_c_phone":void 0,onChange:e=>y({...l,phone:e.target.value}),onBlur:()=>N({...E,c_phone:!0})}),d("c_phone")&&r.jsx("p",{className:"rb-ord-err",id:"err_c_phone",role:"alert",children:d("c_phone")})]})]}),r.jsxs("div",{className:"rb-ord-field",children:[r.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-email",children:o.fieldEmail}),r.jsx("input",{id:"rb-ord-email",className:"rb-ord-input",type:"email",inputMode:"email",autoComplete:"email",value:l.email,"data-invalid":d("c_email")?"true":void 0,"aria-invalid":!!d("c_email"),"aria-describedby":d("c_email")?"err_c_email":"hint_c_email",onChange:e=>y({...l,email:e.target.value}),onBlur:()=>N({...E,c_email:!0})}),d("c_email")?r.jsx("p",{className:"rb-ord-err",id:"err_c_email",role:"alert",children:d("c_email")}):r.jsx("p",{className:"rb-ord-hint",id:"hint_c_email",children:o.fieldEmailHelp})]}),r.jsxs("div",{className:"rb-ord-two",children:[r.jsxs("div",{className:"rb-ord-field",children:[r.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-date",children:o.fieldDate}),r.jsx("input",{id:"rb-ord-date",className:"rb-ord-input",type:"date",min:S,value:l.date,"data-invalid":d("c_date")?"true":void 0,"aria-invalid":!!d("c_date"),"aria-describedby":d("c_date")?"err_c_date":"hint_c_date",onChange:e=>y({...l,date:e.target.value}),onBlur:()=>N({...E,c_date:!0})}),d("c_date")?r.jsx("p",{className:"rb-ord-err",id:"err_c_date",role:"alert",children:d("c_date")}):r.jsx("p",{className:"rb-ord-hint",id:"hint_c_date",children:o.fieldDateHelp(n.leadDays)})]}),r.jsxs("div",{className:"rb-ord-field",children:[r.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location",children:o.fieldLocation}),r.jsx("select",{id:"rb-ord-location",className:"rb-ord-select",value:l.location,onChange:e=>y({...l,location:e.target.value}),children:W.map(e=>r.jsx("option",{value:e.id,style:{background:Y},children:e.label[a]},e.id))})]})]}),r.jsxs("div",{className:"rb-ord-field",children:[r.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-notes",children:[o.fieldNotes,r.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),r.jsx("textarea",{id:"rb-ord-notes",className:"rb-ord-textarea",placeholder:o.fieldNotesPlaceholder,value:l.notes,onChange:e=>y({...l,notes:e.target.value})})]}),r.jsx("button",{type:"submit",className:"rb-ord-submit",disabled:I==="sending",children:I==="sending"?`${o.submitting}...`:o.submit}),K&&Object.keys(H).length>0&&r.jsx("p",{className:"rb-ord-errsummary",role:"alert",children:o.errSummary}),r.jsxs("p",{className:"rb-ord-hint",style:{textAlign:"center",marginTop:4},children:[a==="is"?"Eða hringdu í ":"Or call us on ",r.jsx("a",{href:`tel:${D.phone}`,className:"rb-ord-tel",children:D.phoneLabel})]})]})]}),r.jsx("div",{className:"rb-ord-slipwrap",children:dr})]})]})]})}const or=mr("reynir"),$r=`
  .rb-op ::selection { background:#5C1C1F; color:${v}; }
  .rb-op a:focus-visible, .rb-op button:focus-visible {
    outline:2px solid ${s}; outline-offset:3px; border-radius:4px; }

  .rb-op-bar { display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:18px clamp(20px,4.5vw,72px); border-bottom:1px solid ${R}; }
  .rb-op-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${L}; font-size:14px; color:${f}; padding:11px 0;
    transition:color .2s ${t}; }
  .rb-op-back:hover { color:${u}; }
  .rb-op-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${L}; font-size:13px; letter-spacing:.08em; color:${w};
    transition:color .2s ${t}; border-radius:4px; }
  .rb-op-lang[aria-pressed="true"] { color:${u}; }
  .rb-op-lang:hover { color:${v}; }

  .rb-op-foot { border-top:1px solid ${R}; padding:36px clamp(20px,4.5vw,72px) 56px;
    background:${Y}; }
  .rb-op-foot-grid { max-width:1180px; margin:0 auto; display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:26px; }
  .rb-op-foot-label { font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${s}; }
  .rb-op-foot-body { font-size:14px; color:${f}; line-height:1.65; margin:9px 0 0; }
  .rb-op-foot-body a { color:${u}; text-decoration:none; }
  .rb-op-foot-body a:hover { color:${v}; }

  @media (max-width:520px) {
    .rb-op-bar { padding:14px clamp(20px,4.5vw,72px); }
    .rb-op-bar img { width:104px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-op-back, .rb-op-lang { transition:none; }
  }
`;function Mr(){const[a,b]=xr(),x=ur[a],o=ar[a],[g]=lr(),_=g.get("vara")??void 0;return p.useEffect(()=>{cr(q)},[]),r.jsxs("div",{className:"rb-op",lang:a,style:{fontFamily:L,color:v,background:q,minHeight:"100svh",overflowX:"hidden",WebkitFontSmoothing:"antialiased"},children:[r.jsx("style",{children:$r}),r.jsxs("header",{className:"rb-op-bar",children:[r.jsx(Z,{to:"/preview/reynir","aria-label":o.backToSite,children:r.jsx("img",{src:hr,alt:"Reynir bakari",width:124,height:54,decoding:"async",style:{width:124,height:"auto",display:"block"}})}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:22},children:[r.jsxs(Z,{to:"/preview/reynir",className:"rb-op-back",children:[r.jsx("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5.5 1L1 5.5L5.5 10M1 5.5H12.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),o.backToSite]}),r.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[r.jsx("button",{className:"rb-op-lang","aria-pressed":a==="en",onClick:()=>b("en"),children:"EN"}),r.jsx("span",{"aria-hidden":"true",style:{color:w,alignSelf:"center"},children:"/"}),r.jsx("button",{className:"rb-op-lang","aria-pressed":a==="is",onClick:()=>b("is"),children:"ÍS"})]})]})]}),r.jsx(yr,{lang:a,standalone:!0,initialProductId:_}),r.jsx("footer",{className:"rb-op-foot",children:r.jsxs("div",{className:"rb-op-foot-grid",children:[r.jsxs("div",{children:[r.jsx("div",{className:"rb-op-foot-label",children:x.mainLabel}),r.jsxs("p",{className:"rb-op-foot-body",children:[x.mainName,r.jsx("br",{}),x.hoursRows.join(" · ")]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"rb-op-foot-label",children:x.secondLabel}),r.jsxs("p",{className:"rb-op-foot-body",children:[x.secondName,r.jsx("br",{}),x.secondNote]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"rb-op-foot-label",children:x.rowPhone}),r.jsxs("p",{className:"rb-op-foot-body",children:[r.jsx("a",{href:`tel:${D.phone}`,children:D.phoneLabel}),r.jsx("br",{}),r.jsx("a",{href:`mailto:${D.orderEmail}`,children:D.orderEmail})]})]})]})}),r.jsx(pr,{company:or}),r.jsx(br,{company:or})]})}export{Mr as default};
