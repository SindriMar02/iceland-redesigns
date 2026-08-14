import{r as p,j as e,c as xe,s as ue,L as ae}from"./index-BbdpiYN5.js";import{P as ge}from"./PreviewChrome-BW67XXdn.js";import{P as fe}from"./PreviewFooter-3di_-c1A.js";import{g as ve}from"./companies-B4GT8Mbp.js";import{u as ne,O as de,i as T,I as J,H as C,G as d,E as n,D as _,a as f,b as x,c as g,B as O,F as D,j as A,f as L,d as V,S as ye,e as je,L as Ne,T as ke}from"./useLang-CLn72Hzi.js";import"./copy-BlDb0IZR.js";import"./createLucideIcon-eOY6TuZE.js";import"./proxy-BJAzFrfb.js";import"./send-BEWrXGa_.js";import"./index-CVqp83Y-.js";import"./external-link-B6q0dtPK.js";import"./x-BNRG6agA.js";import"./mail-pdklc-V0.js";import"./SndrBadge-DVhX8CbP.js";import"./data-C8ZDiw2z.js";import"./image-url.umd-BnkocEvp.js";const $e=`
  /* layout: functional split, the slip reacts to the choices */
  .rb-ord-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:clamp(28px,4vw,64px); align-items:start; }

  .rb-ord-step { border-top:1px solid ${C}; padding-top:18px; margin-top:clamp(30px,4.5vh,46px); }
  .rb-ord-steplabel { font-size:12px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${d}; }

  /* Who is ordering. Two lanes, not a dropdown: it changes which fields appear. */
  .rb-ord-who { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px; }
  .rb-ord-wholane { display:flex; flex-direction:column; gap:5px; text-align:left; cursor:pointer;
    padding:15px 16px; border:1px solid ${C}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .22s ${n}, background .22s ${n}; }
  .rb-ord-wholane:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-wholane[data-on="true"] { border-color:${d}; background:rgba(200,168,119,.09); }
  .rb-ord-wholane input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .rb-ord-wholane:has(input:focus-visible) { outline:2px solid ${d}; outline-offset:3px; }
  .rb-ord-wholane-name { font-family:${_}; font-size:18px; color:${f}; line-height:1.2; }
  .rb-ord-wholane[data-on="true"] .rb-ord-wholane-name { color:${x}; }
  .rb-ord-wholane-hint { font-size:12.5px; color:${g}; line-height:1.45; }

  /* quantity stepper */
  .rb-ord-qty { display:flex; align-items:center; gap:0; margin-top:8px;
    border:1px solid ${C}; border-radius:4px; width:max-content; }
  .rb-ord-qty button { width:46px; height:46px; background:none; border:0; cursor:pointer; color:${f};
    font-size:19px; line-height:1; transition:color .2s ${n}, background .2s ${n}; }
  .rb-ord-qty button:hover:not(:disabled) { color:${x}; background:rgba(243,234,211,.05); }
  .rb-ord-qty button:disabled { opacity:.32; cursor:not-allowed; }
  .rb-ord-qty button:focus-visible { outline:2px solid ${d}; outline-offset:-2px; }
  .rb-ord-qty-val { min-width:46px; text-align:center; font-family:${_}; font-size:19px; color:${d};
    font-variant-numeric:tabular-nums; }

  /* Product picker. FLEX, not grid, so the owner can add or remove a product in
     the CMS at any count without leaving a hole: a grid keeps empty cells in the
     last row (4 products = one stranded card beside two gaps), whereas wrapped
     flex + centred remainder reads as deliberate at 1, 2, 4, 5 or 7 products.
     max-width caps each card at a third so a short row never stretches. */
  .rb-ord-prods { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:16px; }
  .rb-ord-prods > * { flex:1 1 210px; max-width:calc(33.333% - 7px); }
  .rb-ord-prod { position:relative; display:flex; flex-direction:column; gap:6px; text-align:left; cursor:pointer;
    padding:16px 15px; border:1px solid ${C}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .22s ${n}, background .22s ${n}, transform .16s ${n}; }
  .rb-ord-prod:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-prod:active { transform:scale(.99); }
  .rb-ord-prod[data-on="true"] { border-color:${d}; background:rgba(200,168,119,.09); }
  .rb-ord-prod-name { font-family:${_}; font-size:19px; line-height:1.15; color:${f}; padding-right:24px; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-name { color:${x}; }
  .rb-ord-prod-from { font-size:12.5px; color:${g}; font-variant-numeric:tabular-nums; }
  .rb-ord-prod-mark { position:absolute; top:14px; right:14px; width:17px; height:17px; border-radius:50%;
    border:1px solid rgba(238,211,170,.4); display:flex; align-items:center; justify-content:center;
    transition:border-color .2s ${n}, background .2s ${n}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark { border-color:${d}; background:${d}; }
  .rb-ord-prod-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${n}, transform .18s ${n}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark svg { opacity:1; transform:none; }

  /* option groups */
  .rb-ord-group { margin:0; padding:34px 0 0; border:0; }
  .rb-ord-legend { padding:0; font-family:${_}; font-size:clamp(19px,2vw,23px); color:${f}; }
  .rb-ord-help { font-size:13.5px; color:${g}; margin:6px 0 0; line-height:1.5; }
  .rb-ord-tag { font-family:${O}; font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:${D}; margin-left:10px; vertical-align:middle; }

  .rb-ord-choices { display:grid; gap:8px; margin-top:14px; }
  .rb-ord-choice { position:relative; display:flex; align-items:baseline; gap:10px; cursor:pointer;
    min-height:48px; padding:12px 15px; border:1px solid ${A}; border-radius:4px;
    transition:border-color .2s ${n}, background .2s ${n}, transform .14s ${n}; }
  .rb-ord-choice:hover { border-color:rgba(238,211,170,.32); background:rgba(243,234,211,.03); }
  .rb-ord-choice:active { transform:scale(.995); }
  .rb-ord-choice[data-on="true"] { border-color:${d}; background:rgba(200,168,119,.08); }
  .rb-ord-choice[data-off="true"] { opacity:.42; cursor:not-allowed; }
  .rb-ord-choice[data-off="true"]:hover { border-color:${A}; background:transparent; }
  /* the real input stays in the a11y tree and drives focus, but is not painted */
  .rb-ord-choice input, .rb-ord-prod input {
    position:absolute; opacity:0; width:1px; height:1px; margin:0; pointer-events:none; }
  .rb-ord-choice:has(input:focus-visible), .rb-ord-prod:has(input:focus-visible) {
    outline:2px solid ${d}; outline-offset:3px; }
  .rb-ord-mark { flex:none; width:15px; height:15px; margin-top:3px; border:1px solid rgba(238,211,170,.45);
    display:flex; align-items:center; justify-content:center; transition:border-color .2s ${n}, background .2s ${n}; }
  .rb-ord-mark[data-shape="round"] { border-radius:50%; }
  .rb-ord-mark[data-shape="box"] { border-radius:3px; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark { border-color:${d}; background:${d}; }
  .rb-ord-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${n}, transform .18s ${n}; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark svg { opacity:1; transform:none; }
  .rb-ord-choice-label { color:${f}; font-size:15.5px; line-height:1.4; }
  .rb-ord-choice-note { display:block; font-size:12.5px; color:${g}; margin-top:4px; line-height:1.45; }
  .rb-ord-choice-price { margin-left:auto; padding-left:12px; font-size:14px; color:${d}; white-space:nowrap;
    font-variant-numeric:tabular-nums; }
  .rb-ord-choice-price[data-free="true"] { color:${D}; font-size:12.5px; }

  /* text + form fields */
  .rb-ord-field { display:block; margin-top:18px; }
  .rb-ord-label { display:block; font-size:13px; letter-spacing:.02em; color:${x}; margin-bottom:7px; }
  .rb-ord-input, .rb-ord-select, .rb-ord-textarea {
    width:100%; box-sizing:border-box; font-family:${O}; font-size:16px; color:${f};
    background:rgba(11,10,9,.5); border:1px solid ${C}; border-radius:4px; padding:13px 14px;
    transition:border-color .2s ${n}, background .2s ${n}; color-scheme:dark; }
  .rb-ord-textarea { min-height:92px; resize:vertical; line-height:1.55; }
  .rb-ord-input::placeholder, .rb-ord-textarea::placeholder { color:${g}; opacity:1; }
  .rb-ord-input:hover, .rb-ord-select:hover, .rb-ord-textarea:hover { border-color:rgba(238,211,170,.3); }
  .rb-ord-input:focus-visible, .rb-ord-select:focus-visible, .rb-ord-textarea:focus-visible {
    outline:2px solid ${d}; outline-offset:2px; border-color:${d}; }
  .rb-ord-input[aria-invalid="true"], .rb-ord-select[aria-invalid="true"] { border-color:#D98A76; }
  .rb-ord-hint { font-size:12.5px; color:${g}; margin-top:6px; line-height:1.45; }
  .rb-ord-err { font-size:12.5px; color:#E8A594; margin-top:6px; line-height:1.45; }
  .rb-ord-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* the slip */
  .rb-ord-slip { position:sticky; top:24px; border:1px solid ${C}; border-radius:6px; padding:22px 20px 20px;
    background:linear-gradient(170deg, rgba(243,234,211,.055), rgba(243,234,211,.015));
    box-shadow:0 26px 60px -30px rgba(0,0,0,.8); }
  .rb-ord-slip-title { font-family:${_}; font-size:20px; color:${x}; }
  .rb-ord-slip-rule { height:0; border-bottom:1px dashed rgba(238,211,170,.28); margin:14px 0 4px; }
  .rb-ord-slip-empty { font-size:13.5px; color:${g}; line-height:1.55; margin:12px 0 0; font-style:italic; }
  .rb-ord-slipline { display:flex; align-items:baseline; gap:4px; padding:9px 0; }
  .rb-ord-slipline-name { font-size:14px; color:${f}; }
  .rb-ord-slipline-sub { font-size:12px; color:${D}; display:block; margin-top:2px; }
  .rb-ord-slipline-dots { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.28);
    margin:0 4px; transform:translateY(2px); }
  .rb-ord-slipline-price { font-size:13.5px; color:${d}; white-space:nowrap; font-variant-numeric:tabular-nums; }
  .rb-ord-slipline-price[data-free="true"] { color:${D}; font-size:12px; }
  .rb-ord-total { display:flex; align-items:baseline; gap:4px; margin-top:6px; padding-top:14px;
    border-top:1px solid rgba(238,211,170,.22); }
  .rb-ord-total-label { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:${x}; }
  .rb-ord-total-value { margin-left:auto; font-family:${_}; font-size:27px; color:${d};
    font-variant-numeric:tabular-nums; }
  .rb-ord-slip-note { font-size:12px; color:${g}; margin:12px 0 0; line-height:1.5; }

  /* mobile running total, sticks under the page header, never at the bottom
     (a bottom-fixed bar would collide with the preview chrome) */
  .rb-ord-mobiletotal { display:none; }

  /* motion: each earns its place. line-in confirms a choice registered,
     total-bump signals the price changed, group-in covers the product swap. */
  @keyframes rb-ord-linein { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }
  .rb-ord-slipline { animation:rb-ord-linein .26s ${n} both; }
  @keyframes rb-ord-bump { 0% { transform:none; } 38% { transform:scale(1.07); } 100% { transform:none; } }
  .rb-ord-total-value[data-bump="true"] { animation:rb-ord-bump .34s ${n}; }
  @keyframes rb-ord-groupin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-ord-groups[data-key] { animation:rb-ord-groupin .38s ${n} both; }

  /* sent state */
  .rb-ord-done { border:1px solid ${d}; border-radius:6px; padding:clamp(26px,4vw,40px);
    background:rgba(200,168,119,.07); text-align:center; animation:rb-ord-groupin .4s ${n} both; }
  .rb-ord-done-title { font-family:${_}; font-size:clamp(26px,3.4vw,38px); margin:0;  }

  .rb-ord-sample { display:flex; gap:11px; align-items:flex-start; margin-top:20px; padding:12px 15px;
    border:1px dashed rgba(238,211,170,.3); border-radius:4px; background:rgba(243,234,211,.025); }
  .rb-ord-sample svg { flex:none; margin-top:1px; }
  .rb-ord-sample span { font-size:12.5px; color:${g}; line-height:1.5; }

  .rb-ord-submit { width:100%; margin-top:24px; font-family:${O}; font-weight:600; font-size:16px;
    padding:16px 28px; border-radius:4px; border:1px solid ${d}; background:${d}; color:${L};
    cursor:pointer; transition:background .22s ${n}, border-color .22s ${n}, transform .16s ${n}; }
  .rb-ord-submit:hover:not(:disabled) { background:${x}; border-color:${x}; }
  .rb-ord-submit:active:not(:disabled) { transform:scale(.985); }
  .rb-ord-submit:disabled { opacity:.6; cursor:progress; }
  .rb-ord-submit:focus-visible { outline:2px solid ${x}; outline-offset:3px; }
  .rb-ord-errsummary { margin-top:14px; font-size:13.5px; color:#E8A594; text-align:center; }
  /* padded so the phone number clears the 44px tap target on a phone */
  .rb-ord-tel { display:inline-block; padding:13px 10px; color:${x}; text-decoration:none;
    border-bottom:1px solid rgba(238,211,170,.32); }
  .rb-ord-tel:hover { color:${f}; border-bottom-color:${d}; }
  .rb-ord-tel:focus-visible { outline:2px solid ${d}; outline-offset:2px; border-radius:3px; }

  @media (max-width:900px) {
    .rb-ord-grid { grid-template-columns:1fr; gap:0; }
    /* the slip moves below the choices; a slim sticky bar carries the total instead */
    .rb-ord-slipwrap { order:2; margin-top:clamp(28px,4vh,40px); }
    .rb-ord-slip { position:static; }
    .rb-ord-formwrap { order:1; }
    .rb-ord-mobiletotal { display:flex; position:sticky; top:0; z-index:6; align-items:baseline; gap:10px;
      margin:0 calc(clamp(20px,4.5vw,72px) * -1); padding:11px clamp(20px,4.5vw,72px);
      background:rgba(11,10,9,.94); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
      border-bottom:1px solid ${C}; }
    .rb-ord-mobiletotal-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:${D}; }
    .rb-ord-mobiletotal-value { margin-left:auto; font-family:${_}; font-size:19px; color:${d};
      font-variant-numeric:tabular-nums; }
    .rb-ord-prods > * { max-width:100%; flex-basis:100%; }
    /* the sticky bar already draws a divider, so the step right under it must
       not draw a second one. Adjacent-sibling, not :first-of-type, because the
       bar is itself the first div sibling. */
    .rb-ord-mobiletotal + .rb-ord-step { border-top:0; padding-top:0; margin-top:clamp(24px,3.5vh,34px); }
    .rb-ord-who { grid-template-columns:1fr; }
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
`,ie=t=>String(t).padStart(2,"0");function _e(t){const m=new Date;return m.setDate(m.getDate()+t),`${m.getFullYear()}-${ie(m.getMonth()+1)}-${ie(m.getDate())}`}const we={is:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};function Se(t,m){const[w,o,y]=t.split("-").map(Number);if(!w||!o||!y)return t;const j=we[m][o-1]??"";return m==="is"?`${y}. ${j}`:`${y} ${j}`}const te=()=>e.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 3.4L3.3 5.7L8 1",stroke:"#131313",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})});function Ce({lang:t,standalone:m=!1,initialProductId:w}){const o=de[t],{LINKS:y,ORDER_PRODUCTS:j,OCCASIONS:M,PICKUP_LOCATIONS:F}=ne(),[z,I]=p.useState(()=>w&&j.some(r=>r.id===w)?w:j[0].id),l=p.useMemo(()=>j.find(r=>r.id===z)??j[0],[z,j]),[N,le]=p.useState("person"),[S,B]=p.useState(1),[H,W]=p.useState({}),[R,G]=p.useState(""),[a,b]=p.useState({name:"",phone:"",email:"",date:"",location:F[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:M[0].id,guests:"",handover:"pickup",address:""}),[k,v]=p.useState({}),[U,X]=p.useState(!1),[K,Y]=p.useState("idle"),P=p.useMemo(()=>_e(l.leadDays),[l.leadDays]);p.useEffect(()=>{W({}),G(""),v(r=>{const c={};for(const s of Object.keys(r))s.startsWith("c_")&&(c[s]=r[s]);return c})},[z]),p.useEffect(()=>{b(r=>r.date&&r.date<P?{...r,date:""}:r)},[P]);const ce=(r,c)=>{W(s=>{const h=s[r.id]??[];return r.kind==="single"?{...s,[r.id]:[c]}:h.includes(c)?{...s,[r.id]:h.filter(u=>u!==c)}:r.max&&h.length>=r.max?s:{...s,[r.id]:[...h,c]}}),v(s=>({...s,[`g_${r.id}`]:!0}))},{lines:pe,total:E}=p.useMemo(()=>{const r=[{key:"base",name:l.name[t],sub:o.slipBase,price:l.basePrice}];let c=l.basePrice;for(const h of l.groups)for(const u of H[h.id]??[]){const $=h.choices.find(q=>q.id===u);$&&(c+=$.priceDelta,r.push({key:`${h.id}_${$.id}`,name:$.label[t],sub:h.label[t],price:$.priceDelta>0?$.priceDelta:null}))}const s=R.trim();return s&&l.inscription&&r.push({key:"inscription",name:`“${s}”`,sub:l.inscription.label[t],price:null}),S>1&&r.push({key:"qty",name:o.slipQty(S),sub:`× ${T(c)}`,price:c*S}),{lines:r,total:c*S}},[l,H,R,t,S,o]),[Z,ee]=p.useState(!1),re=p.useRef(E);p.useEffect(()=>{if(re.current===E)return;re.current=E,ee(!0);const r=window.setTimeout(()=>ee(!1),360);return()=>window.clearTimeout(r)},[E]);const Q=p.useMemo(()=>{const r={};for(const s of l.groups)s.required&&(H[s.id]??[]).length===0&&(r[`g_${s.id}`]=s.kind==="single"?o.errRequiredGroup:o.errRequiredMulti);if(N==="person")a.name.trim()||(r.c_name=o.errName);else{a.company.trim()||(r.c_company=o.errCompany),a.contact.trim()||(r.c_contact=o.errContact);const s=a.kennitala.replace(/[^\d]/g,"");a.kennitala.trim()?s.length!==10&&(r.c_kennitala=o.errKennitalaFormat):r.c_kennitala=o.errKennitala,a.handover==="delivery"&&!a.address.trim()&&(r.c_address=o.errAddress),a.invoiceEmail.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.invoiceEmail.trim())&&(r.c_invoiceEmail=o.errEmail)}const c=a.phone.replace(/[^\d]/g,"");return a.phone.trim()?c.length<7&&(r.c_phone=o.errPhoneFormat):r.c_phone=o.errPhone,a.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim())&&(r.c_email=o.errEmail),a.date?a.date<P&&(r.c_date=o.errDateTooSoon(Se(P,t))):r.c_date=o.errDate,r},[l,H,a,P,t,o,N]),i=r=>k[r]||U?Q[r]:void 0,oe=p.useRef(null),be=r=>{var c;if(r.preventDefault(),X(!0),Object.keys(Q).length>0){const s=(c=oe.current)==null?void 0:c.querySelector('[data-invalid="true"]');s==null||s.scrollIntoView({block:"center",behavior:"smooth"}),s==null||s.focus({preventScroll:!0});return}Y("sending"),window.setTimeout(()=>Y("done"),700)},me=()=>{W({}),G(""),B(1),b({name:"",phone:"",email:"",date:"",location:F[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:M[0].id,guests:"",handover:"pickup",address:""}),v({}),X(!1),Y("idle")},he=e.jsxs("div",{className:"rb-ord-slip",children:[e.jsx("div",{className:"rb-ord-slip-title",children:o.slipTitle}),e.jsx("div",{className:"rb-ord-slip-rule","aria-hidden":"true"}),e.jsx("div",{children:pe.map(r=>e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.name,r.sub&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.sub})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price","data-free":r.price===null,children:r.price===null?o.included:T(r.price)})]},r.key))}),e.jsxs("div",{className:"rb-ord-total",children:[e.jsx("span",{className:"rb-ord-total-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-total-value","data-bump":Z,"aria-live":"polite",children:T(E)})]}),e.jsx("p",{className:"rb-ord-slip-note",children:o.slipNote})]});return e.jsxs("section",{id:"order",style:{background:J,padding:m?"clamp(28px,5vh,48px) clamp(20px,4.5vw,72px) clamp(80px,11vh,140px)":"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{children:$e}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsxs("div",{style:{borderTop:m?"none":`1px solid ${C}`,paddingTop:m?0:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:d},children:o.kicker}),m?e.jsx("h1",{style:{fontFamily:_,fontWeight:400,fontSize:"clamp(38px,5.4vw,72px)",lineHeight:1.02,margin:"18px 0 0",...V},children:o.title}):e.jsx("h2",{style:{fontFamily:_,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...V},children:o.title}),e.jsx("p",{style:{fontSize:16,color:g,margin:"16px 0 0",lineHeight:1.65},children:o.intro}),e.jsxs("div",{className:"rb-ord-sample",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"7",cy:"7",r:"6.2",stroke:d,strokeWidth:"1.1"}),e.jsx("path",{d:"M7 4v3.6",stroke:d,strokeWidth:"1.4",strokeLinecap:"round"}),e.jsx("circle",{cx:"7",cy:"10.1",r:".85",fill:d})]}),e.jsx("span",{children:o.sampleNotice})]})]}),K==="done"?e.jsxs("div",{className:"rb-ord-done",style:{marginTop:"clamp(30px,4.5vh,46px)"},role:"status",children:[e.jsx("h3",{className:"rb-ord-done-title",style:{...V},children:o.doneTitle}),e.jsx("p",{style:{fontSize:16,color:f,lineHeight:1.65,margin:"14px auto 0",maxWidth:"46ch"},children:o.doneBody}),e.jsx("p",{style:{fontSize:13,color:g,margin:"14px auto 0",maxWidth:"46ch",fontStyle:"italic"},children:o.doneDemo}),e.jsxs("div",{style:{marginTop:22,fontSize:15,color:x,fontVariantNumeric:"tabular-nums"},children:[o.slipTotal,": ",T(E)]}),e.jsx("button",{type:"button",className:"rb-ord-submit",style:{width:"auto",marginTop:24},onClick:me,children:o.doneAgain})]}):e.jsxs("form",{ref:oe,className:"rb-ord-grid",style:{marginTop:"clamp(24px,3.5vh,36px)"},onSubmit:be,noValidate:!0,children:[e.jsxs("div",{className:"rb-ord-formwrap",children:[e.jsxs("div",{className:"rb-ord-mobiletotal",children:[e.jsx("span",{className:"rb-ord-mobiletotal-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-mobiletotal-value","data-bump":Z,"aria-live":"polite",children:T(E)})]}),e.jsxs("div",{className:"rb-ord-step",style:{marginTop:22},children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepWho}),e.jsx("div",{className:"rb-ord-who",role:"radiogroup","aria-label":o.stepWho,children:[{id:"person",name:o.whoPerson,hint:o.whoPersonHint},{id:"company",name:o.whoCompany,hint:o.whoCompanyHint}].map(r=>e.jsxs("label",{className:"rb-ord-wholane","data-on":N===r.id,children:[e.jsx("input",{type:"radio",name:"rb-ord-who",checked:N===r.id,onChange:()=>le(r.id)}),e.jsx("span",{className:"rb-ord-wholane-name",children:r.name}),e.jsx("span",{className:"rb-ord-wholane-hint",children:r.hint})]},r.id))}),N==="company"&&e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:o.bigOrderNote})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepProduct}),e.jsx("div",{className:"rb-ord-prods",role:"radiogroup","aria-label":o.stepProduct,children:j.map(r=>e.jsxs("label",{className:"rb-ord-prod","data-on":r.id===z,children:[e.jsx("input",{type:"radio",name:"rb-ord-product",value:r.id,checked:r.id===z,onChange:()=>I(r.id)}),e.jsx("span",{className:"rb-ord-prod-mark","aria-hidden":"true",children:e.jsx(te,{})}),e.jsx("span",{className:"rb-ord-prod-name",children:r.name[t]}),e.jsxs("span",{className:"rb-ord-prod-from",children:[t==="is"?"frá":"from"," ",T(r.basePrice)]})]},r.id))}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:l.blurb[t]})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepOptions}),e.jsxs("div",{className:"rb-ord-groups","data-key":l.id,children:[l.groups.map(r=>{const c=H[r.id]??[],s=!!r.max&&c.length>=r.max,h=i(`g_${r.id}`);return e.jsxs("fieldset",{className:"rb-ord-group",children:[e.jsxs("legend",{className:"rb-ord-legend",children:[r.label[t],e.jsx("span",{className:"rb-ord-tag",children:r.required?o.required:o.optional})]}),(r.help||r.max)&&e.jsx("p",{className:"rb-ord-help",children:r.help?r.help[t]:o.chooseUpTo(r.max)}),e.jsx("div",{className:"rb-ord-choices",children:r.choices.map(u=>{const $=c.includes(u.id),q=!$&&s;return e.jsxs("label",{className:"rb-ord-choice","data-on":$,"data-off":q,children:[e.jsx("input",{type:r.kind==="single"?"radio":"checkbox",name:`rb-ord-${r.id}`,checked:$,disabled:q,"data-invalid":h?"true":void 0,"aria-describedby":h?`err_g_${r.id}`:void 0,onChange:()=>ce(r,u.id)}),e.jsx("span",{className:"rb-ord-mark","data-shape":r.kind==="single"?"round":"box","aria-hidden":"true",children:e.jsx(te,{})}),e.jsxs("span",{className:"rb-ord-choice-label",children:[u.label[t],u.note&&e.jsx("span",{className:"rb-ord-choice-note",children:u.note[t]})]}),e.jsx("span",{className:"rb-ord-choice-price","data-free":u.priceDelta===0,children:u.priceDelta===0?o.included:`+ ${T(u.priceDelta)}`})]},u.id)})}),h&&e.jsx("p",{className:"rb-ord-err",id:`err_g_${r.id}`,role:"alert",children:h})]},r.id)}),l.inscription&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-inscription",children:[l.inscription.label[t],e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-inscription",className:"rb-ord-input",type:"text",maxLength:l.inscription.maxLength,placeholder:l.inscription.placeholder[t],value:R,onChange:r=>G(r.target.value)}),e.jsx("p",{className:"rb-ord-hint",children:o.charsLeft(l.inscription.maxLength-R.length)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("span",{className:"rb-ord-label",id:"rb-ord-qty-label",children:o.fieldQty}),e.jsxs("div",{className:"rb-ord-qty",role:"group","aria-labelledby":"rb-ord-qty-label",children:[e.jsx("button",{type:"button",onClick:()=>B(r=>Math.max(1,r-1)),disabled:S<=1,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:S}),e.jsx("button",{type:"button",onClick:()=>B(r=>Math.min(99,r+1)),disabled:S>=99,"aria-label":"+",children:"+"})]}),e.jsx("p",{className:"rb-ord-hint",children:o.fieldQtyHint})]})]},l.id)]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepDetails}),N==="company"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-company",children:o.fieldCompany}),e.jsx("input",{id:"rb-ord-company",className:"rb-ord-input",type:"text",autoComplete:"organization",value:a.company,"data-invalid":i("c_company")?"true":void 0,"aria-invalid":!!i("c_company"),"aria-describedby":i("c_company")?"err_c_company":void 0,onChange:r=>b({...a,company:r.target.value}),onBlur:()=>v({...k,c_company:!0})}),i("c_company")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_company",role:"alert",children:i("c_company")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-kennitala",children:o.fieldKennitala}),e.jsx("input",{id:"rb-ord-kennitala",className:"rb-ord-input",type:"text",inputMode:"numeric",value:a.kennitala,"data-invalid":i("c_kennitala")?"true":void 0,"aria-invalid":!!i("c_kennitala"),"aria-describedby":i("c_kennitala")?"err_c_kennitala":"hint_c_kennitala",onChange:r=>b({...a,kennitala:r.target.value}),onBlur:()=>v({...k,c_kennitala:!0})}),i("c_kennitala")?e.jsx("p",{className:"rb-ord-err",id:"err_c_kennitala",role:"alert",children:i("c_kennitala")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_kennitala",children:o.fieldKennitalaHint})]})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-occasion",children:o.fieldOccasion}),e.jsx("select",{id:"rb-ord-occasion",className:"rb-ord-select",value:a.occasion,onChange:r=>b({...a,occasion:r.target.value}),children:M.map(r=>e.jsx("option",{value:r.id,style:{background:L},children:r.label[t]},r.id))})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-guests",children:o.fieldGuests}),e.jsx("input",{id:"rb-ord-guests",className:"rb-ord-input",type:"number",inputMode:"numeric",min:1,value:a.guests,"aria-describedby":"hint_c_guests",onChange:r=>b({...a,guests:r.target.value})}),e.jsx("p",{className:"rb-ord-hint",id:"hint_c_guests",children:o.fieldGuestsHint})]})]})]}),e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[N==="person"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-name",children:o.fieldName}),e.jsx("input",{id:"rb-ord-name",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.name,"data-invalid":i("c_name")?"true":void 0,"aria-invalid":!!i("c_name"),"aria-describedby":i("c_name")?"err_c_name":void 0,onChange:r=>b({...a,name:r.target.value}),onBlur:()=>v({...k,c_name:!0})}),i("c_name")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_name",role:"alert",children:i("c_name")})]}):e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-contact",children:o.fieldContact}),e.jsx("input",{id:"rb-ord-contact",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.contact,"data-invalid":i("c_contact")?"true":void 0,"aria-invalid":!!i("c_contact"),"aria-describedby":i("c_contact")?"err_c_contact":void 0,onChange:r=>b({...a,contact:r.target.value}),onBlur:()=>v({...k,c_contact:!0})}),i("c_contact")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_contact",role:"alert",children:i("c_contact")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-phone",children:o.fieldPhone}),e.jsx("input",{id:"rb-ord-phone",className:"rb-ord-input",type:"tel",inputMode:"tel",autoComplete:"tel",value:a.phone,"data-invalid":i("c_phone")?"true":void 0,"aria-invalid":!!i("c_phone"),"aria-describedby":i("c_phone")?"err_c_phone":void 0,onChange:r=>b({...a,phone:r.target.value}),onBlur:()=>v({...k,c_phone:!0})}),i("c_phone")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_phone",role:"alert",children:i("c_phone")})]})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-email",children:o.fieldEmail}),e.jsx("input",{id:"rb-ord-email",className:"rb-ord-input",type:"email",inputMode:"email",autoComplete:"email",value:a.email,"data-invalid":i("c_email")?"true":void 0,"aria-invalid":!!i("c_email"),"aria-describedby":i("c_email")?"err_c_email":"hint_c_email",onChange:r=>b({...a,email:r.target.value}),onBlur:()=>v({...k,c_email:!0})}),i("c_email")?e.jsx("p",{className:"rb-ord-err",id:"err_c_email",role:"alert",children:i("c_email")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_email",children:o.fieldEmailHelp})]}),N==="company"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-invoice-email",children:[o.fieldInvoiceEmail,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-invoice-email",className:"rb-ord-input",type:"email",inputMode:"email",value:a.invoiceEmail,"data-invalid":i("c_invoiceEmail")?"true":void 0,"aria-invalid":!!i("c_invoiceEmail"),"aria-describedby":i("c_invoiceEmail")?"err_c_invoiceEmail":"hint_c_invoiceEmail",onChange:r=>b({...a,invoiceEmail:r.target.value}),onBlur:()=>v({...k,c_invoiceEmail:!0})}),i("c_invoiceEmail")?e.jsx("p",{className:"rb-ord-err",id:"err_c_invoiceEmail",role:"alert",children:i("c_invoiceEmail")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_invoiceEmail",children:o.fieldInvoiceEmailHint})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-date",children:o.fieldDate}),e.jsx("input",{id:"rb-ord-date",className:"rb-ord-input",type:"date",min:P,value:a.date,"data-invalid":i("c_date")?"true":void 0,"aria-invalid":!!i("c_date"),"aria-describedby":i("c_date")?"err_c_date":"hint_c_date",onChange:r=>b({...a,date:r.target.value}),onBlur:()=>v({...k,c_date:!0})}),i("c_date")?e.jsx("p",{className:"rb-ord-err",id:"err_c_date",role:"alert",children:i("c_date")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_date",children:o.fieldDateHelp(l.leadDays)})]}),N==="company"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-handover",children:o.fieldHandover}),e.jsxs("select",{id:"rb-ord-handover",className:"rb-ord-select",value:a.handover,onChange:r=>b({...a,handover:r.target.value}),children:[e.jsx("option",{value:"pickup",style:{background:L},children:o.handoverPickup}),e.jsx("option",{value:"delivery",style:{background:L},children:o.handoverDelivery})]})]}):e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location",className:"rb-ord-select",value:a.location,onChange:r=>b({...a,location:r.target.value}),children:F.map(r=>e.jsx("option",{value:r.id,style:{background:L},children:r.label[t]},r.id))})]})]}),N==="company"&&a.handover==="pickup"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location-co",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location-co",className:"rb-ord-select",value:a.location,onChange:r=>b({...a,location:r.target.value}),children:F.map(r=>e.jsx("option",{value:r.id,style:{background:L},children:r.label[t]},r.id))})]}),N==="company"&&a.handover==="delivery"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-address",children:o.fieldAddress}),e.jsx("input",{id:"rb-ord-address",className:"rb-ord-input",type:"text",autoComplete:"street-address",value:a.address,"data-invalid":i("c_address")?"true":void 0,"aria-invalid":!!i("c_address"),"aria-describedby":i("c_address")?"err_c_address":"hint_c_address",onChange:r=>b({...a,address:r.target.value}),onBlur:()=>v({...k,c_address:!0})}),i("c_address")?e.jsx("p",{className:"rb-ord-err",id:"err_c_address",role:"alert",children:i("c_address")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_address",children:o.fieldAddressHint})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-notes",children:[o.fieldNotes,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("textarea",{id:"rb-ord-notes",className:"rb-ord-textarea",placeholder:o.fieldNotesPlaceholder,value:a.notes,onChange:r=>b({...a,notes:r.target.value})})]}),e.jsx("button",{type:"submit",className:"rb-ord-submit",disabled:K==="sending",children:K==="sending"?`${o.submitting}...`:o.submit}),U&&Object.keys(Q).length>0&&e.jsx("p",{className:"rb-ord-errsummary",role:"alert",children:o.errSummary}),e.jsxs("p",{className:"rb-ord-hint",style:{textAlign:"center",marginTop:4},children:[t==="is"?"Eða hringdu í ":"Or call us on ",e.jsx("a",{href:`tel:${y.phone}`,className:"rb-ord-tel",children:y.phoneLabel})]})]})]}),e.jsx("div",{className:"rb-ord-slipwrap",children:he})]})]})]})}const se=ve("reynir"),ze=`
  .rb-op ::selection { background:#5C1C1F; color:${f}; }
  .rb-op a:focus-visible, .rb-op button:focus-visible {
    outline:2px solid ${d}; outline-offset:3px; border-radius:4px; }

  .rb-op-bar { display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:18px clamp(20px,4.5vw,72px); border-bottom:1px solid ${A}; }
  .rb-op-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${O}; font-size:14px; color:${g}; padding:11px 0;
    transition:color .2s ${n}; }
  .rb-op-back:hover { color:${x}; }
  .rb-op-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${O}; font-size:13px; letter-spacing:.08em; color:${D};
    transition:color .2s ${n}; border-radius:4px; }
  .rb-op-lang[aria-pressed="true"] { color:${x}; }
  .rb-op-lang:hover { color:${f}; }

  .rb-op-foot { border-top:1px solid ${A}; padding:36px clamp(20px,4.5vw,72px) 56px;
    background:${L}; }
  .rb-op-foot-grid { max-width:1180px; margin:0 auto; display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:26px; }
  .rb-op-foot-label { font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${d}; }
  .rb-op-foot-body { font-size:14px; color:${g}; line-height:1.65; margin:9px 0 0; }
  .rb-op-foot-body a { color:${x}; text-decoration:none; }
  .rb-op-foot-body a:hover { color:${f}; }

  @media (max-width:520px) {
    .rb-op-bar { padding:14px clamp(20px,4.5vw,72px); }
    .rb-op-bar img { width:104px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-op-back, .rb-op-lang { transition:none; }
  }
`;function Ee(){const[t,m]=je(),w=ke[t],o=de[t],{LINKS:y,hoursRows:j,hamraborgNote:M,mainName:F,secondName:z}=ne(),[I]=xe(),l=I.get("vara")??void 0;return p.useEffect(()=>{ue(J)},[]),e.jsxs("div",{className:"rb-op",lang:t,style:{fontFamily:O,color:f,background:J,minHeight:"100svh",overflowX:"hidden",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{children:ze}),e.jsxs("header",{className:"rb-op-bar",children:[e.jsx(ae,{to:"/preview/reynir","aria-label":o.backToSite,children:e.jsx("img",{src:Ne,alt:"Reynir bakari",width:124,height:54,decoding:"async",style:{width:124,height:"auto",display:"block"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:22},children:[e.jsxs(ae,{to:"/preview/reynir",className:"rb-op-back",children:[e.jsx("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5.5 1L1 5.5L5.5 10M1 5.5H12.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),o.backToSite]}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-op-lang","aria-pressed":t==="en",onClick:()=>m("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:D,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-op-lang","aria-pressed":t==="is",onClick:()=>m("is"),children:"ÍS"})]})]})]}),e.jsx(Ce,{lang:t,standalone:!0,initialProductId:l}),e.jsx("footer",{className:"rb-op-foot",children:e.jsxs("div",{className:"rb-op-foot-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:w.mainLabel}),e.jsxs("p",{className:"rb-op-foot-body",children:[F,e.jsx("br",{}),j[t].join(" · ")]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:w.secondLabel}),e.jsxs("p",{className:"rb-op-foot-body",children:[z,e.jsx("br",{}),M[t]]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:w.rowPhone}),e.jsxs("p",{className:"rb-op-foot-body",children:[e.jsx("a",{href:`tel:${y.phone}`,children:y.phoneLabel}),e.jsx("br",{}),e.jsx("a",{href:`mailto:${y.orderEmail}`,children:y.orderEmail})]})]})]})}),e.jsx(ge,{company:se}),e.jsx(fe,{company:se})]})}function Ye(){return e.jsx(ye,{children:e.jsx(Ee,{})})}export{Ye as default};
