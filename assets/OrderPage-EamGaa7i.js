import{r as h,j as e,c as Ur,s as Kr,L as vr}from"./index-Dc_HgAJ6.js";import{u as Nr,v as Gr,w as Qr,x as Vr,y as Yr,z as Jr,J as Pe,O as _r,i as m,K as Xr,N as Zr,V as Z,Q as Ee,R as Be,I as $e,H as q,G as p,D,b as j,j as pe,F as C,c as z,E as c,a as _,g as A,B as ee,U as yr,d as Ue,f as eo,W as ro,X as oo,S as ao,e as to,Y as jr,L as io,T as so,t as no}from"./useLang-BwEY5Ny_.js";import"./image-url.umd-CbtHGZ2C.js";const lo=`
  /* layout: functional split, the slip reacts to the choices */
  .rb-ord-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:clamp(28px,4vw,64px); align-items:start; }
  /* The slip's column has to run the FULL height of the form, or sticky has
     nowhere to travel: with align-items:start the column hugged the slip
     (520px inside a 3000px form) and the running total scrolled away the
     moment anyone started choosing, which is the one thing it exists not to
     do. Stretch the column, not the slip. */
  .rb-ord-slipwrap { align-self:stretch; }

  .rb-ord-step { border-top:1px solid ${q}; padding-top:18px; margin-top:clamp(30px,4.5vh,46px); }
  .rb-ord-steplabel { font-size:12px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${p}; }
  /* The numbered step head — the wizard-rail idea (21st "Wizard Steps",
     checkout breadcrumbs) set in this page's own editorial language: a serif
     numeral and a hairline instead of circles and checkmarks. The number is
     what makes the form legible as a SEQUENCE at a glance. */
  .rb-ord-stephead { display:flex; align-items:baseline; gap:14px;
    border-top:1px solid ${q}; padding-top:20px; }
  .rb-ord-stepnum { font-family:${D}; font-style:italic; font-size:26px; line-height:1;
    color:${j}; min-width:36px; }
  /* ── the context bar: who + occasion, one slim row above the steps ── */
  .rb-ord-ctx { display:flex; align-items:flex-start; gap:clamp(18px,3vw,36px); flex-wrap:wrap;
    margin-top:26px; padding:16px 18px; border:1px solid ${pe}; border-radius:4px;
    background:rgba(243,234,211,.02); }
  .rb-ord-ctx-field { display:flex; flex-direction:column; gap:8px; }
  .rb-ord-ctx-label { font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
    color:${C}; }
  .rb-ord-ctx-select { min-width:200px; }
  .rb-ord-seg { display:inline-flex; border:1px solid ${q}; border-radius:4px; overflow:hidden; }
  .rb-ord-seg label { position:relative; }
  .rb-ord-seg label + label { border-left:1px solid ${q}; }
  .rb-ord-seg input { position:absolute; inset:0; opacity:0; cursor:pointer; }
  .rb-ord-seg span { display:block; padding:10px 18px; font-size:13.5px; color:${z};
    transition:background .2s ${c}, color .2s ${c}; }
  .rb-ord-seg label[data-on="true"] span { background:rgba(200,168,119,.14); color:${j}; }
  .rb-ord-seg input:focus-visible + span { outline:2px solid ${p}; outline-offset:-2px; }

  /* Who is ordering. Two lanes, not a dropdown: it changes which fields appear. */
  .rb-ord-who { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px; }
  .rb-ord-wholane { display:flex; flex-direction:column; gap:5px; text-align:left; cursor:pointer;
    padding:15px 16px; border:1px solid ${q}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .22s ${c}, background .22s ${c}; }
  .rb-ord-wholane:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-wholane[data-on="true"] { border-color:${p}; background:rgba(200,168,119,.09); }
  .rb-ord-wholane input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .rb-ord-wholane:has(input:focus-visible) { outline:2px solid ${p}; outline-offset:3px; }
  .rb-ord-wholane-name { font-family:${D}; font-size:18px; color:${_}; line-height:1.2; }
  .rb-ord-wholane[data-on="true"] .rb-ord-wholane-name { color:${j}; }
  .rb-ord-wholane-hint { font-size:12.5px; color:${z}; line-height:1.45; }

  /* quantity stepper */
  .rb-ord-qty { display:flex; align-items:center; gap:0; margin-top:8px;
    border:1px solid ${q}; border-radius:4px; width:max-content; }
  .rb-ord-qty button { width:46px; height:46px; background:none; border:0; cursor:pointer; color:${_};
    font-size:19px; line-height:1; transition:color .2s ${c}, background .2s ${c}; }
  .rb-ord-qty button:hover:not(:disabled) { color:${j}; background:rgba(243,234,211,.05); }
  .rb-ord-qty button:disabled { opacity:.32; cursor:not-allowed; }
  .rb-ord-qty button:focus-visible { outline:2px solid ${p}; outline-offset:-2px; }
  .rb-ord-qty-val { min-width:46px; text-align:center; font-family:${D}; font-size:19px; color:${p};
    font-variant-numeric:tabular-nums; }

  /* Product picker. FLEX, not grid, so the owner can add or remove a product in
     the CMS at any count without leaving a hole: a grid keeps empty cells in the
     last row (4 products = one stranded card beside two gaps), whereas wrapped
     flex + centred remainder reads as deliberate at 1, 2, 4, 5 or 7 products.
     max-width caps each card at a third so a short row never stretches. */
  .rb-ord-prods { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:16px; }
  .rb-ord-prods > * { flex:1 1 210px; max-width:calc(33.333% - 7px); }
  .rb-ord-prod { position:relative; display:flex; flex-direction:column; gap:6px; text-align:left; cursor:pointer;
    padding:16px 15px; border:1px solid ${q}; border-radius:4px; background:rgba(243,234,211,.02);
    overflow:hidden;
    transition:border-color .22s ${c}, background .22s ${c}, transform .16s ${c}; }
  /* Product photo. The card is built so this can be absent — a product added
     in the CMS before its picture exists simply renders the text card. */
  .rb-ord-prod-pic { margin:-16px -15px 10px; aspect-ratio:1 / 1; overflow:hidden; background:${A}; }
  .rb-ord-prod-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.94); transition:transform .5s ${c}, filter .35s ${c}; }
  .rb-ord-prod:hover .rb-ord-prod-pic img { transform:scale(1.04); filter:saturate(1) brightness(1); }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-pic img { filter:saturate(1) brightness(1); }
  .rb-ord-prod:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-prod:active { transform:scale(.99); }
  .rb-ord-prod[data-on="true"] { border-color:${p}; background:rgba(200,168,119,.09); }
  .rb-ord-prod-name { font-family:${D}; font-size:19px; line-height:1.15; color:${_}; padding-right:36px; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-name { color:${j}; }
  .rb-ord-prod-from { font-size:12.5px; color:${z}; font-variant-numeric:tabular-nums; }
  /* z-index is load-bearing, not decoration: the product photo carries a
     filter, which gives it its own stacking context, and a stacking context
     with z-index:auto paints in the positioned layer in DOM order — putting
     the later <img> on top of this earlier absolute mark and hiding the
     selected state entirely. The ring behind it keeps the mark legible over
     a photograph rather than only over the dark card. */
  .rb-ord-prod-mark { position:absolute; z-index:2; top:14px; right:14px; width:17px; height:17px; border-radius:50%;
    border:1px solid rgba(238,211,170,.55); display:flex; align-items:center; justify-content:center;
    background:rgba(11,10,9,.45); box-shadow:0 0 0 3px rgba(11,10,9,.35);
    transition:border-color .2s ${c}, background .2s ${c}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark { border-color:${p}; background:${p}; }
  .rb-ord-prod-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${c}, transform .18s ${c}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark svg { opacity:1; transform:none; }

  /* Option groups.
     MARGIN, never padding. A <legend> is laid out above the fieldset's content
     box, so padding-top pushes the QUESTION'S OWN help text and choices down
     while leaving the heading itself hard against the previous group. Every
     heading on the page was bound to the answer above it instead of to its own
     options, which is what made the spacing read as broken. Margin moves the
     whole fieldset, legend included. */
  .rb-ord-group { margin:32px 0 0; padding:0; border:0; }
  .rb-ord-groups > .rb-ord-group:first-child { margin-top:20px; }
  .rb-ord-legend { padding:0; width:100%; font-family:${D}; font-size:clamp(19px,2vw,23px); color:${_}; }
  /* The tag is pinned to the top RIGHT of the question, never set inline after
     it. Inline, it sat beside short headings and dropped onto its own line
     under long ones, so half the questions looked one way and half the other
     and the long ones ended with a stray word. Pinned, every question reads
     identically however the heading wraps. */
  .rb-ord-legend-row { display:flex; align-items:baseline; justify-content:space-between;
    gap:14px; width:100%; }
  .rb-ord-legend-text { flex:1 1 auto; min-width:0; }
  .rb-ord-tag { flex:none; }
  .rb-ord-help { font-size:13.5px; color:${z}; margin:6px 0 0; line-height:1.5; }
  .rb-ord-tag { font-family:${ee}; font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:${C}; white-space:nowrap; }

  .rb-ord-choices { display:grid; gap:8px; margin-top:14px; }
  .rb-ord-choice { position:relative; display:flex; align-items:baseline; gap:10px; cursor:pointer;
    min-height:48px; padding:12px 15px; border:1px solid ${pe}; border-radius:4px;
    transition:border-color .2s ${c}, background .2s ${c}, transform .14s ${c}; }
  .rb-ord-choice:hover { border-color:rgba(238,211,170,.32); background:rgba(243,234,211,.03); }
  .rb-ord-choice:active { transform:scale(.995); }
  .rb-ord-choice[data-on="true"] { border-color:${p}; background:rgba(200,168,119,.08); }
  .rb-ord-choice[data-off="true"] { opacity:.42; cursor:not-allowed; }
  .rb-ord-choice[data-off="true"]:hover { border-color:${pe}; background:transparent; }
  /* the real input stays in the a11y tree and drives focus, but is not painted */
  .rb-ord-choice input, .rb-ord-prod input {
    position:absolute; opacity:0; width:1px; height:1px; margin:0; pointer-events:none; }
  .rb-ord-choice:has(input:focus-visible), .rb-ord-prod:has(input:focus-visible) {
    outline:2px solid ${p}; outline-offset:3px; }
  .rb-ord-mark { flex:none; width:15px; height:15px; margin-top:3px; border:1px solid rgba(238,211,170,.45);
    display:flex; align-items:center; justify-content:center; transition:border-color .2s ${c}, background .2s ${c}; }
  .rb-ord-mark[data-shape="round"] { border-radius:50%; }
  .rb-ord-mark[data-shape="box"] { border-radius:3px; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark { border-color:${p}; background:${p}; }
  .rb-ord-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${c}, transform .18s ${c}; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark svg { opacity:1; transform:none; }
  .rb-ord-choice-label { color:${_}; font-size:15.5px; line-height:1.4; }
  .rb-ord-choice-note { display:block; font-size:12.5px; color:${z}; margin-top:4px; line-height:1.45; }
  .rb-ord-choice-price { margin-left:auto; padding-left:12px; font-size:14px; color:${p}; white-space:nowrap;
    font-variant-numeric:tabular-nums; }
  .rb-ord-choice-price[data-free="true"] { color:${C}; font-size:12.5px; }

  /* Size tiles. Eleven kransakaka sizes as full-width rows is a wall to scroll
     past; as tiles it is three tidy lines with every price still readable. The
     radio dot is dropped because the tile itself carries the selected state,
     and a dot inside a small tile is a bullet, not a control. */
  .rb-ord-choices[data-layout="grid"] { grid-template-columns:repeat(auto-fill, minmax(112px, 1fr)); gap:7px; }
  .rb-ord-choices[data-layout="grid"] .rb-ord-choice { flex-direction:column; align-items:flex-start;
    gap:3px; padding:12px 13px; }
  .rb-ord-choices[data-layout="grid"] .rb-ord-mark { display:none; }
  .rb-ord-choices[data-layout="grid"] .rb-ord-choice-label { font-size:15px; }
  .rb-ord-choices[data-layout="grid"] .rb-ord-choice-price { margin-left:0; padding-left:0;
    font-size:12.5px; letter-spacing:.01em; }
  /* Selection has to survive a colour-blind reader, so the tile also thickens
     its edge rather than only turning gold. */
  .rb-ord-choices[data-layout="grid"] .rb-ord-choice[data-on="true"] { box-shadow:inset 0 0 0 1px ${p}; }
  /* A tile that opens a field would trap it in a narrow column. */
  .rb-ord-choices[data-layout="grid"] > div:has(.rb-ord-extra) { grid-column:1 / -1; }

  /* Size row: one control, and the price it produces sitting beside it at the
     size a price deserves. The dropdown carries the choosing; the number
     carries the meaning. */
  .rb-ord-sizerow { display:flex; align-items:center; gap:18px; margin-top:14px; flex-wrap:wrap; }
  .rb-ord-sizeselect { flex:1 1 190px; max-width:280px; margin:0; }
  .rb-ord-sizeprice { display:flex; flex-direction:column; gap:1px; min-width:0; }
  .rb-ord-sizeprice-num { font-family:${D}; font-size:clamp(24px,3vw,31px); line-height:1.05;
    color:${p}; font-variant-numeric:tabular-nums; white-space:nowrap; }
  .rb-ord-sizeprice-num[data-bump="true"] { animation:rb-ord-bump .34s ${c}; }
  .rb-ord-sizeprice-rate { font-size:12.5px; color:${C}; letter-spacing:.02em; white-space:nowrap; }
  @media (prefers-reduced-motion: reduce) { .rb-ord-sizeprice-num[data-bump="true"] { animation:none; } }
  @media (max-width: 560px) {
    /* Stacking keeps the number full size rather than squeezing it next to a
       control that already wants the whole width. */
    .rb-ord-sizerow { gap:12px; }
    .rb-ord-sizeselect { flex:1 1 100%; max-width:none; }
  }
  /* The field a choice opens. Indented under its row and sharing the row's
     gold edge, so it reads as part of that choice rather than a new question. */
  /* Indent matches the choice above it: the rule sits under the row's own left
     padding (15px) and the text lands where the label starts (15 + 15px mark +
     10px gap), so the answer sits under the question rather than beside it. */
  .rb-ord-extra { margin:8px 0 2px 15px; padding-left:25px; border-left:2px solid rgba(200,168,119,.34);
    animation:rb-ord-extrain .32s ${c} both; }
  @keyframes rb-ord-extrain { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:none; } }

  /* Photo upload. The dashed edge says "drop something here" without pretending
     to be a drop zone the phone cannot use, and it stays clearly secondary to
     the choice it belongs to. */
  .rb-ord-photo { margin-top:12px; }
  .rb-ord-photo-pick { display:flex; align-items:center; gap:12px; cursor:pointer;
    padding:13px 15px; border:1px dashed rgba(238,211,170,.34); border-radius:4px;
    background:rgba(243,234,211,.02); transition:border-color .2s ${c}, background .2s ${c}; }
  .rb-ord-photo-pick:hover { border-color:${p}; background:rgba(200,168,119,.06); }
  .rb-ord-photo-pick input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .rb-ord-photo-pick:has(input:focus-visible) { outline:2px solid ${p}; outline-offset:3px; }
  .rb-ord-photo-cta { flex:none; font-size:13px; font-weight:600; color:${A}; background:${p};
    padding:7px 13px; border-radius:3px; white-space:nowrap; }
  .rb-ord-photo-label { font-size:13.5px; color:${z}; line-height:1.4; }
  .rb-ord-photo-has { display:flex; align-items:center; gap:13px; padding:11px 13px;
    border:1px solid ${p}; border-radius:4px; background:rgba(200,168,119,.07); }
  .rb-ord-photo-thumb { flex:none; width:46px; height:46px; object-fit:cover; border-radius:3px;
    border:1px solid rgba(238,211,170,.3); }
  .rb-ord-photo-meta { display:flex; flex-direction:column; gap:2px; min-width:0; }
  .rb-ord-photo-name { font-size:13.5px; color:${_}; overflow:hidden; text-overflow:ellipsis;
    white-space:nowrap; }
  .rb-ord-photo-size { font-size:12px; color:${C}; font-variant-numeric:tabular-nums; }
  .rb-ord-photo-clear { margin-left:auto; flex:none; background:none; border:0; cursor:pointer;
    font-family:${ee}; font-size:12.5px; color:${z}; padding:10px 6px; text-decoration:underline;
    text-underline-offset:3px; }
  .rb-ord-photo-clear:hover { color:${_}; }
  .rb-ord-photo-clear:focus-visible { outline:2px solid ${p}; outline-offset:2px; border-radius:3px; }
  @media (max-width:520px) {
    /* The button and its sentence stop fitting side by side well before this. */
    .rb-ord-photo-pick { flex-direction:column; align-items:flex-start; gap:9px; }
  }

  /* "What is in it", inside the slip. The form is where a cake is chosen and
     the slip is where it is described, so the layers live here rather than
     floating between two questions. No border of its own: it is already inside
     the slip's frame, and a box inside a box is one line too many. */
  .rb-ord-spec { margin-top:12px; padding-top:12px; border-top:1px solid ${pe}; }
  .rb-ord-spec-title { font-size:10.5px; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
    color:${C}; }
  .rb-ord-spec-list { list-style:none; margin:8px 0 0; padding:0; }
  .rb-ord-spec-row { display:flex; align-items:center; gap:9px; padding:4px 0;
    font-size:13px; color:${z}; animation:rb-ord-layerin .34s ${c} both; }
  .rb-ord-spec-dot { flex:none; width:4px; height:4px; border-radius:50%; background:${q};
    transition:background .3s ${c}; }
  .rb-ord-spec-row[data-changed="true"] { color:${_}; }
  .rb-ord-spec-row[data-changed="true"] .rb-ord-spec-dot { background:${p}; }
  @keyframes rb-ord-layerin { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:none; } }
  @media (prefers-reduced-motion: reduce) { .rb-ord-spec-row { animation:none; } }
  @media (prefers-reduced-motion: reduce) { .rb-ord-extra { animation:none; } }

  /* text + form fields */
  .rb-ord-field { display:block; margin-top:18px; }
  /* Same flex row as a legend, so the optional tag keeps its gap now that the
     tag itself no longer carries a margin, and wraps left instead of indented. */
  .rb-ord-label { display:flex; align-items:baseline; flex-wrap:wrap; gap:3px 9px;
    font-size:13px; letter-spacing:.02em; color:${j}; margin-bottom:7px; }
  .rb-ord-input, .rb-ord-select, .rb-ord-textarea {
    width:100%; box-sizing:border-box; font-family:${ee}; font-size:16px; color:${_};
    background:rgba(11,10,9,.5); border:1px solid ${q}; border-radius:4px; padding:13px 14px;
    transition:border-color .2s ${c}, background .2s ${c}; color-scheme:dark; }
  .rb-ord-textarea { min-height:92px; resize:vertical; line-height:1.55; }
  /* Date and time inputs size themselves from their own contents on iOS and
     ignore a percentage width, so the collection-date field grew past the
     right edge of the phone while every other field stopped at the margin.
     min-width:0 is the part that actually does it: without it the intrinsic
     width wins over width:100%. */
  .rb-ord-input[type="date"], .rb-ord-input[type="time"] {
    -webkit-appearance:none; appearance:none; min-width:0; max-width:100%; }
  .rb-ord-input[type="date"]::-webkit-date-and-time-value { text-align:left; margin:0; }
  .rb-ord-input[type="date"]::-webkit-calendar-picker-indicator { margin:0 0 0 auto; }
  /* Belt and braces: nothing inside the form may be wider than the form. */
  .rb-ord-formwrap input, .rb-ord-formwrap select, .rb-ord-formwrap textarea { max-width:100%; }
  .rb-ord-input::placeholder, .rb-ord-textarea::placeholder { color:${z}; opacity:1; }
  .rb-ord-input:hover, .rb-ord-select:hover, .rb-ord-textarea:hover { border-color:rgba(238,211,170,.3); }
  .rb-ord-input:focus-visible, .rb-ord-select:focus-visible, .rb-ord-textarea:focus-visible {
    outline:2px solid ${p}; outline-offset:2px; border-color:${p}; }
  .rb-ord-input[aria-invalid="true"], .rb-ord-select[aria-invalid="true"] { border-color:#D98A76; }
  .rb-ord-hint { font-size:12.5px; color:${z}; margin-top:6px; line-height:1.45; }
  .rb-ord-err { font-size:12.5px; color:#E8A594; margin-top:6px; line-height:1.45; }
  /* A settled, unchangeable value — shown instead of a pointless one-option
     dropdown when there is only one collection point. Reads as information,
     not as a control the visitor failed to notice they could change. */
  /* The label already carries its own bottom margin; another 13px on top of it
     floated the address away from the thing naming it. */
  .rb-ord-readout { font-family:${ee}; font-size:16px; color:${_}; padding:2px 0 0; line-height:1.4; }
  .rb-ord-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* the slip */
  .rb-ord-slip { position:sticky; top:24px; border:1px solid ${q}; border-radius:6px; padding:22px 20px 20px;
    background:linear-gradient(170deg, rgba(243,234,211,.055), rgba(243,234,211,.015));
    box-shadow:0 26px 60px -30px rgba(0,0,0,.8); }
  .rb-ord-slip-title { font-family:${D}; font-size:20px; color:${j}; }
  .rb-ord-slip-rule { height:0; border-bottom:1px dashed rgba(238,211,170,.28); margin:14px 0 4px; }
  .rb-ord-slip-empty { font-size:13.5px; color:${z}; line-height:1.55; margin:12px 0 0; font-style:italic; }
  .rb-ord-slipline { display:flex; align-items:baseline; gap:4px; padding:9px 0; }
  .rb-ord-slipline-name { font-size:14px; color:${_}; }
  .rb-ord-slipline-sub { font-size:12px; color:${C}; display:block; margin-top:2px; }
  .rb-ord-slipline-dots { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.28);
    margin:0 4px; transform:translateY(2px); }
  .rb-ord-slipline-price { font-size:13.5px; color:${p}; white-space:nowrap; font-variant-numeric:tabular-nums; }
  .rb-ord-slipline-price[data-free="true"] { color:${C}; font-size:12px; }
  .rb-ord-total { display:flex; align-items:baseline; gap:4px; margin-top:6px; padding-top:14px;
    border-top:1px solid rgba(238,211,170,.22); }
  .rb-ord-total-label { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:${j}; }
  .rb-ord-total-value { margin-left:auto; font-family:${D}; font-size:27px; color:${p};
    font-variant-numeric:tabular-nums; }
  .rb-ord-slip-note { font-size:12px; color:${z}; margin:12px 0 0; line-height:1.5; }
  /* ── the basket ── */
  .rb-ord-cake { border-bottom:1px dashed rgba(238,211,170,.18); padding-bottom:6px; margin-bottom:4px; }
  .rb-ord-cakebtns { display:flex; gap:14px; margin:0 0 6px; }
  .rb-ord-cakebtns button { background:none; border:0; padding:0; cursor:pointer; font-size:12px;
    color:${C}; text-decoration:underline; text-underline-offset:3px; }
  .rb-ord-cakebtns button:hover { color:${j}; }
  .rb-ord-cakebtns button:focus-visible { outline:2px solid ${p}; outline-offset:2px; }
  .rb-ord-addcake { display:flex; align-items:center; gap:18px; margin-top:20px; flex-wrap:wrap; }
  .rb-ord-addbtn { padding:12px 22px; background:none; border:1px solid ${q}; border-radius:4px;
    color:${j}; font-size:14px; cursor:pointer;
    transition:border-color .2s ${c}, background .2s ${c}; }
  .rb-ord-addbtn:hover { border-color:${p}; background:rgba(200,168,119,.08); }
  .rb-ord-addbtn:focus-visible { outline:2px solid ${p}; outline-offset:3px; }
  .rb-ord-linkbtn { background:none; border:0; padding:0; cursor:pointer; font-size:13px; color:${C};
    text-decoration:underline; text-underline-offset:3px; }
  .rb-ord-linkbtn:hover { color:${j}; }
  /* ── counter extras: photo cards, the quantity control on the thing it
     counts. Same card grammar as the product picker so the two read as one
     form: hairline border, photo bleeding to the card edge, gold when live. */
  /* min(180px,100%), not a bare 180px: a hard minimum is also the grid's
     min-content width, and inside the form's grid column that stretched the
     whole step to 560px on a 375px phone — two of the three cards sat clipped
     off the right edge. Capping the minimum at the container's own width lets
     the tracks collapse instead of the layout. */
  .rb-ord-extras { display:grid; grid-template-columns:repeat(auto-fill, minmax(min(180px, 100%), 1fr));
    gap:10px; margin-top:14px; max-width:640px; }
  .rb-ord-extra { display:flex; flex-direction:column; gap:6px; padding:0 14px 12px;
    border:1px solid ${q}; border-radius:4px; background:rgba(243,234,211,.02); overflow:hidden;
    transition:border-color .24s ${c}, background .24s ${c}; }
  .rb-ord-extra[data-on] { border-color:${p}; background:rgba(200,168,119,.07); }
  .rb-ord-extra-pic { margin:0 -14px 6px; aspect-ratio:5 / 3; overflow:hidden; background:${$e}; }
  .rb-ord-extra-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.92); transition:transform .55s ${c}, filter .4s ${c}; }
  .rb-ord-extra:hover .rb-ord-extra-pic img { transform:scale(1.045); filter:saturate(1) brightness(1); }
  .rb-ord-extra-name { font-family:${D}; font-size:17px; color:${_}; line-height:1.2; }
  .rb-ord-extra-price { font-size:12.5px; color:${C}; font-variant-numeric:tabular-nums; min-height:16px; }
  .rb-ord-extra-price s { opacity:.55; margin-right:4px; }
  .rb-ord-extra-price em { font-style:normal; color:${p}; margin-left:6px; font-size:10.5px;
    text-transform:uppercase; letter-spacing:.08em; }
  .rb-ord-extra-bulk { font-size:11.5px; color:${p}; font-variant-numeric:tabular-nums; min-height:15px; }
  .rb-ord-extra-foot { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:2px; }
  .rb-ord-extra-sum { text-align:right; font-size:13.5px; color:${p}; font-variant-numeric:tabular-nums; }
  .rb-ord-qty[data-small] { margin-top:0; }
  .rb-ord-qty[data-small] button { width:34px; height:34px; }
  .rb-ord-qty[data-small] .rb-ord-qty-val { min-width:30px; font-size:16px; }
  .rb-ord-kjornudge { font-size:12.5px; color:${j}; margin:12px 0 0; line-height:1.5;
    padding:9px 11px; border:1px dashed rgba(200,168,119,.35); border-radius:4px; }

  /* mobile running total, sticks under the page header, never at the bottom
     (a bottom-fixed bar would collide with the preview chrome) */
  .rb-ord-mobiletotal { display:none; }

  /* motion: each earns its place. line-in confirms a choice registered,
     total-bump signals the price changed, group-in covers the product swap. */
  @keyframes rb-ord-linein { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }
  .rb-ord-slipline { animation:rb-ord-linein .26s ${c} both; }
  @keyframes rb-ord-bump { 0% { transform:none; } 38% { transform:scale(1.07); } 100% { transform:none; } }
  .rb-ord-total-value[data-bump="true"] { animation:rb-ord-bump .34s ${c}; }
  /* A quote is words, not a number, so it must not sit at display size where a
     price belongs. Shrinking it is what stops it reading as an amount. */
  .rb-ord-total-value[data-quote="true"], .rb-ord-mobiletotal-value[data-quote="true"] {
    font-family:${ee}; font-size:14px; letter-spacing:.01em; color:${j}; }
  @keyframes rb-ord-groupin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-ord-groups[data-key] { animation:rb-ord-groupin .38s ${c} both; }

  /* sent state */
  .rb-ord-done { border:1px solid ${p}; border-radius:6px; padding:clamp(26px,4vw,40px);
    background:rgba(200,168,119,.07); text-align:center; animation:rb-ord-groupin .4s ${c} both; }
  .rb-ord-done-title { font-family:${D}; font-size:clamp(26px,3.4vw,38px); margin:0;  }
  /* The receipt stub. Two facts, equal weight, one hairline between them, so
     the screen has a shape instead of being five centred paragraphs. */
  .rb-ord-stub { display:flex; margin:22px auto 0; max-width:400px;
    border:1px solid rgba(238,211,170,.26); border-radius:4px; background:rgba(11,10,9,.28); }
  .rb-ord-stub-cell { flex:1 1 0; display:flex; flex-direction:column; gap:5px; align-items:center;
    padding:13px 12px; min-width:0; }
  .rb-ord-stub-cell + .rb-ord-stub-cell { border-left:1px solid rgba(238,211,170,.2); }
  .rb-ord-stub-key { font-size:10.5px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${C}; }
  .rb-ord-stub-val { font-size:15px; color:${_}; font-variant-numeric:tabular-nums;
    letter-spacing:.02em; white-space:nowrap; }
  .rb-ord-stub-val[data-price="true"] { font-family:${D}; font-size:19px; color:${p}; }
  .rb-ord-done-line { font-size:14px; color:${z}; margin:14px auto 0; max-width:44ch; line-height:1.6; }
  .rb-ord-done-line[data-good="true"] { color:${j}; }
  /* The tel link carries tap padding, which reads as a gap in a sentence; pull
     it back so the line stays a line. */
  .rb-ord-done-line .rb-ord-tel { padding:6px 2px; }

  .rb-ord-sample { display:flex; gap:11px; align-items:flex-start; margin-top:20px; padding:12px 15px;
    border:1px dashed rgba(238,211,170,.3); border-radius:4px; background:rgba(243,234,211,.025); }
  .rb-ord-sample svg { flex:none; margin-top:1px; }
  .rb-ord-sample span { font-size:12.5px; color:${z}; line-height:1.5; }

  .rb-ord-submit { width:100%; margin-top:24px; font-family:${ee}; font-weight:600; font-size:16px;
    padding:16px 28px; border-radius:4px; border:1px solid ${p}; background:${p}; color:${A};
    cursor:pointer; transition:background .22s ${c}, border-color .22s ${c}, transform .16s ${c}; }
  .rb-ord-submit:hover:not(:disabled) { background:${j}; border-color:${j}; }
  .rb-ord-submit:active:not(:disabled) { transform:scale(.985); }
  .rb-ord-submit:disabled { opacity:.6; cursor:progress; }
  .rb-ord-submit:focus-visible { outline:2px solid ${j}; outline-offset:3px; }
  .rb-ord-errsummary { margin-top:14px; font-size:13.5px; color:#E8A594; text-align:center; }
  /* padded so the phone number clears the 44px tap target on a phone */
  .rb-ord-tel { display:inline-block; padding:13px 10px; color:${j}; text-decoration:none;
    border-bottom:1px solid rgba(238,211,170,.32); }
  .rb-ord-tel:hover { color:${_}; border-bottom-color:${p}; }
  .rb-ord-tel:focus-visible { outline:2px solid ${p}; outline-offset:2px; border-radius:4px; }

  @media (max-width:900px) {
    .rb-ord-grid { grid-template-columns:1fr; gap:0; }
    /* the slip moves below the choices; a slim sticky bar carries the total instead */
    .rb-ord-slipwrap { order:2; margin-top:clamp(28px,4vh,40px); }
    .rb-ord-slip { position:static; }
    .rb-ord-formwrap { min-width:0;
    /* min-width:0 because this is a grid item, and a grid item's default
       min-width:auto lets any wide child (the extras card grid was the one
       that did it) stretch the whole form column past the phone's viewport
       instead of shrinking. The clipped result LOOKED fine in overflow checks
       because an ancestor hid the scroll — two of three cards were simply
       unreachable. */
    order:1; }
    .rb-ord-mobiletotal { display:flex; position:sticky; top:0; z-index:6; align-items:baseline; gap:10px;
      margin:0 calc(clamp(20px,4.5vw,72px) * -1); padding:11px clamp(20px,4.5vw,72px);
      background:rgba(11,10,9,.94); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
      border-bottom:1px solid ${q}; }
    .rb-ord-mobiletotal-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:${C}; }
    .rb-ord-mobiletotal-value { margin-left:auto; font-family:${D}; font-size:19px; color:${p};
      font-variant-numeric:tabular-nums; }
    .rb-ord-prods > * { max-width:100%; flex-basis:100%; }
    /* On a phone the picker becomes a LIST, not three posters.
       Full-width cards with a letterbox photo came to 849px for three
       products: more than a whole screen of pictures before the customer
       reaches the first question. A thumbnail beside the name says exactly as
       much at a quarter of the height, and choosing between three things you
       can see at once is easier than scrolling past them one at a time.
       Grid areas rather than a wrapper element, so a product with no photo
       still lays out correctly: the column simply collapses. */
    .rb-ord-prods { gap:8px; }
    .rb-ord-prod { display:grid; grid-template-columns:auto minmax(0,1fr);
      grid-template-areas:"pic name" "pic from"; align-content:center;
      column-gap:13px; row-gap:2px; padding:10px 12px; }
    .rb-ord-prod-pic { grid-area:pic; margin:0; width:62px; height:62px;
      aspect-ratio:1 / 1; border-radius:3px; align-self:center; }
    .rb-ord-prod-name { grid-area:name; align-self:end; font-size:17px; padding-right:30px; }
    .rb-ord-prod-from { grid-area:from; align-self:start; }
    .rb-ord-prod-mark { top:50%; margin-top:-9px; right:12px; }
    /* the sticky bar already draws a divider, so the step right under it must
       not draw a second one. Adjacent-sibling, not :first-of-type, because the
       bar is itself the first div sibling. */
    .rb-ord-mobiletotal + .rb-ord-step { border-top:0; padding-top:0; margin-top:clamp(24px,3.5vh,34px); }
    .rb-ord-who { grid-template-columns:1fr; }
  }
  @media (max-width:520px) {
    .rb-ord-two { grid-template-columns:1fr; gap:0; }
    /* Wrapping is right on a narrow screen, but the price then has to land
       under the LABEL, not under the radio it has nothing to do with. */
    .rb-ord-choice-price { margin-left:0; padding-left:25px; width:100%; }
    /* Two per row on a phone: three would put "18.600 kr." on two lines. */
    .rb-ord-choices[data-layout="grid"] { grid-template-columns:repeat(2, minmax(0, 1fr)); }
    .rb-ord-choices[data-layout="grid"] .rb-ord-choice-price { width:auto; padding-left:0; }
    .rb-ord-choice { flex-wrap:wrap; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-ord-slipline, .rb-ord-groups[data-key], .rb-ord-done { animation:none; }
    .rb-ord-total-value[data-bump="true"] { animation:none; }
    .rb-ord-prod, .rb-ord-choice, .rb-ord-submit, .rb-ord-input, .rb-ord-select, .rb-ord-textarea,
    .rb-ord-mark, .rb-ord-mark svg { transition:none; }
    .rb-ord-prod:active, .rb-ord-choice:active, .rb-ord-submit:active { transform:none; }
  }
`,$r=i=>String(i).padStart(2,"0");function co(i){const v=new Date;return v.setDate(v.getDate()+i),`${v.getFullYear()}-${$r(v.getMonth()+1)}-${$r(v.getDate())}`}const po={is:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};function zr(i,v){const[W,o,$]=i.split("-").map(Number);if(!W||!o||!$)return i;const O=po[v][o-1]??"";return v==="is"?`${$}. ${O}`:`${$} ${O}`}const bo={is:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};function wr(i,v){const[W,o,$]=i.split("-").map(Number);return!W||!o||!$?i:`${bo[v][new Date(Date.UTC(W,o-1,$)).getUTCDay()]??""} ${zr(i,v)}`}const ho=(()=>{const i=[];for(let v=420;v<=990;v+=30)i.push(`${String(Math.floor(v/60)).padStart(2,"0")}:${String(v%60).padStart(2,"0")}`);return i})(),kr=()=>e.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 3.4L3.3 5.7L8 1",stroke:"#131313",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})});function mo({lang:i,standalone:v=!1,initialProductId:W}){var ur;const o=_r[i],{LINKS:$,ORDER_PRODUCTS:O,OCCASIONS:be,PICKUP_LOCATIONS:H,hoursRows:he}=Nr(),[K,Ke]=h.useState(()=>W&&O.some(r=>r.id===W)?W:O[0].id),l=h.useMemo(()=>O.find(r=>r.id===K)??O[0],[K,O]),[w,Sr]=h.useState("person"),[S,we]=h.useState([]),[T,me]=h.useState(!0),[ie,Ge]=h.useState({}),[Y,ue]=h.useState(1),[E,xe]=h.useState({}),[ge,fe]=h.useState(""),[se,ve]=h.useState({}),[a,k]=h.useState({name:"",phone:"",email:"",date:"",time:"",location:H[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:"",occasionOther:"",guests:"",handover:"pickup",address:""}),[B,P]=h.useState({}),[Qe,Ve]=h.useState(!1),[Ce,ke]=h.useState("idle"),[Tr,Ye]=h.useState(!1),[Ne,Je]=h.useState(""),[Pr,Er]=h.useState(!1),[G,Xe]=h.useState(null),[_e,Ze]=h.useState(""),[er,ze]=h.useState(""),ne=h.useMemo(()=>co(l.leadDays),[l.leadDays]),rr=h.useRef(S);rr.current=S;const Oe=h.useRef(null);h.useEffect(()=>{var r;if(((r=Oe.current)==null?void 0:r.product.id)===K){Oe.current=null;return}xe({}),fe(""),ve({}),rr.current.some(t=>t.wantsPhoto)||Le(),P(t=>{const d={};for(const b of Object.keys(t))b.startsWith("c_")&&(d[b]=t[b]);return d})},[K]),h.useEffect(()=>{k(r=>r.date&&r.date<ne?{...r,date:""}:r)},[ne]);const Cr=5*1024*1024,Or=r=>{if(ze(""),!!r){if(!r.type.startsWith("image/"))return ze(o.errPhotoType);if(r.size>Cr)return ze(o.errPhotoSize);Xe(r),Ze(t=>(t&&URL.revokeObjectURL(t),URL.createObjectURL(r)))}},Le=()=>{Ze(r=>(r&&URL.revokeObjectURL(r),"")),Xe(null),ze("")};h.useEffect(()=>()=>{_e&&URL.revokeObjectURL(_e)},[_e]);const or=(r,t)=>{xe(d=>{const b=d[r.id]??[];return r.kind==="single"?{...d,[r.id]:[t]}:b.includes(t)?{...d,[r.id]:b.filter(L=>L!==t)}:r.max&&b.length>=r.max?d:{...d,[r.id]:[...b,t]}}),P(d=>({...d,[`g_${r.id}`]:!0}))},Q=h.useMemo(()=>Gr(l,E),[l,E]),qe=h.useMemo(()=>Qr(be,w),[be,w]),ye=[...S.map(r=>r.product.occasionId),...T?[l.occasionId]:[]],ar=ye.length>0&&ye[0]&&ye.every(r=>r===ye[0])?be.find(r=>r.id===ye[0]):void 0,Lr=!ar&&qe.length>0,F=ar??qe.find(r=>r.id===a.occasion),je=h.useMemo(()=>Vr(l,E),[l,E]),De=h.useMemo(()=>Yr(l,E),[l,E]),Re=S.some(r=>r.wantsPhoto)||T&&De,tr=h.useMemo(()=>Jr(l,E),[l,E]),qr=h.useMemo(()=>O.every(r=>!!r.image),[O]),{lines:Ie,total:Fe}=h.useMemo(()=>{const r=[],t=l.pricePerPerson,d=!!l.sizeGroupId;let b;d?(b=Q?Pe(l,Q)??0:0,Q&&r.push({key:"size",name:Q.label[i],sub:t?`${m(t)} ${o.perPerson}`:void 0,price:b})):(b=l.basePrice,r.push({key:"base",name:l.name[i],sub:o.slipBase,price:l.basePrice}));for(const U of l.groups)if(!(d&&U.id===l.sizeGroupId))for(const u of E[U.id]??[]){const x=U.choices.find(V=>V.id===u);if(!x)continue;b+=x.priceDelta;const I=x.freeText?(se[`${U.id}_${x.id}`]??"").trim():"";r.push({key:`${U.id}_${x.id}`,name:I?`${x.label[i]}: ${I}`:x.label[i],sub:U.label[i],price:x.priceDelta>0?x.priceDelta:null})}const L=ge.trim();return L&&l.inscription&&r.push({key:"inscription",name:`“${L}”`,sub:l.inscription.label[i],price:null}),Y>1&&r.push({key:"qty",name:o.slipQty(Y),sub:`× ${m(b)}`,price:b*Y}),{lines:r,total:b*Y}},[l,E,ge,i,Y,o,Q,se]),Me=T&&!!l.sizeGroupId&&!Q,Dr=T&&!je&&!Me&&(Q!==null||!l.sizeGroupId),J=S.reduce((r,t)=>r+(t.quote?0:t.total),0)+(Dr?Fe:0),M=S.some(r=>r.quote)||T&&je,R=!M&&J>=Z.threshold,Se=R?Math.round(J*Z.discountPct/100):0,Te=Xr(ie,R),oe=J-Se+Te,ir=M?o.quoteTotal:S.length===0&&Me&&Te===0?o.slipPickSize:m(oe),sr=M||S.length===0&&Me&&Te===0,[Ae,nr]=h.useState(!1),dr=h.useRef(oe);h.useEffect(()=>{if(dr.current===oe)return;dr.current=oe,nr(!0);const r=window.setTimeout(()=>nr(!1),360);return()=>window.clearTimeout(r)},[oe]);const de=h.useMemo(()=>{const r={};if(!T&&S.length===0&&(r.g_product=o.errNoCake),T){for(const d of l.groups)d.required&&(E[d.id]??[]).length===0&&(r[`g_${d.id}`]=d.kind==="single"?o.errRequiredGroup:o.errRequiredMulti);for(const{group:d,choice:b}of Zr(l,E))(se[`${d.id}_${b.id}`]??"").trim()||(r[`x_${d.id}_${b.id}`]=o.errFreeText)}if(F!=null&&F.freeText&&!a.occasionOther.trim()&&(r.occasionOther=o.errOccasionOther),w==="person")a.name.trim()||(r.c_name=o.errName);else{a.company.trim()||(r.c_company=o.errCompany),a.contact.trim()||(r.c_contact=o.errContact);const d=a.kennitala.replace(/[^\d]/g,"");a.kennitala.trim()?d.length!==10&&(r.c_kennitala=o.errKennitalaFormat):r.c_kennitala=o.errKennitala,a.handover==="delivery"&&!a.address.trim()&&(r.c_address=o.errAddress),a.invoiceEmail.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.invoiceEmail.trim())&&(r.c_invoiceEmail=o.errEmail)}const t=a.phone.replace(/[^\d]/g,"");return a.phone.trim()?t.length<7&&(r.c_phone=o.errPhoneFormat):r.c_phone=o.errPhone,a.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim())&&(r.c_email=o.errEmail),a.date?a.date<ne&&(r.c_date=o.errDateTooSoon(zr(ne,i))):r.c_date=o.errDate,a.time||(r.c_time=o.errTime),r},[l,E,a,ne,i,o,w,se,T,S.length]),s=r=>B[r]||Qe?de[r]:void 0,lr=h.useMemo(()=>Object.keys(de).filter(r=>r.startsWith("g_")||r.startsWith("x_")),[de]),cr=()=>({key:`${K}-${Date.now()}`,product:l,picked:E,extrasText:se,inscription:ge,qty:Y,lines:Ie,total:Fe,quote:je,wantsPhoto:De,size:Q}),pr=()=>{xe({}),fe(""),ve({}),ue(1)},br=()=>{var r;if(lr.length>0){P(d=>({...d,...Object.fromEntries(lr.map(b=>[b,!0]))}));const t=(r=We.current)==null?void 0:r.querySelector('[data-invalid="true"]');return t==null||t.scrollIntoView({block:"center",behavior:"smooth"}),!1}return we(t=>[...t,cr()]),pr(),me(!1),!0},Rr=()=>{pr(),me(!1)},Ir=r=>we(t=>t.filter(d=>d.key!==r)),Fr=r=>{const t=S.find(d=>d.key===r);t&&(T&&!br()||(we(d=>d.filter(b=>b.key!==r)),Oe.current=t,Ke(t.product.id),xe(t.picked),ve(t.extrasText),fe(t.inscription),ue(t.qty),me(!0)))},hr=(r,t)=>{const d=Ee.find(b=>b.id===r);d&&Ge(b=>{const L=Math.min(d.max,Math.max(0,(b[r]??0)+t*d.step));return{...b,[r]:L}})},We=h.useRef(null),Mr=async r=>{var xr,gr;if(r.preventDefault(),Ve(!0),Object.keys(de).length>0){const n=(xr=We.current)==null?void 0:xr.querySelector('[data-invalid="true"]');n==null||n.scrollIntoView({block:"center",behavior:"smooth"}),n==null||n.focus({preventScroll:!0});return}ke("sending"),Ye(!1);const t=`RB-${a.date.slice(5).replace("-","")}-${Math.floor(1e3+Math.random()*9e3)}`;Je(t);const d=((gr=H.find(n=>n.id===a.location))==null?void 0:gr.label.is)??a.location,b=a.occasionOther.trim(),L=F?F.freeText&&b?`${F.label.is}: ${b}`:F.label.is:"",U=w==="company"&&a.handover==="delivery",u=`${wr(a.date,"is")}, kl. ${a.time}`,x=[...S,...T?[cr()]:[]],I=x.length>1,V=n=>`${n.product.name.is}${n.size?` (${n.size.label.is})`:""}${n.qty>1?` — ${n.qty} stk.`:""}`,g={_subject:`${t} · ${wr(a.date,"is")} kl. ${a.time} — ${M?"TILBOÐ ÓSKAST — ":""}${I?`${x.length} kökur: ${x.map(n=>n.product.name.is).join(" + ")}`:V(x[0])} — ${w==="company"?a.company:a.name}`,"1. Afhending":u,"2. Vara":I?x.map(V).join(" + "):V(x[0]),"3. Sótt eða sent":U?`Sent á ${a.address}`:`Sótt í ${d}`},N=[];let f=4;g[`${f++}. Pöntunarnúmer`]=t,x.forEach((n,X)=>{if(I){const y=`Kaka ${X+1}: ${V(n)}`;g[`${f++}. ${y}`]=n.quote?"Tilboð óskast":m(n.total),N.push({label:`— ${y}`,value:n.quote?"Tilboð óskast":m(n.total),money:!0})}n.product.groups.forEach(y=>{const te=(n.picked[y.id]??[]).map(ce=>{const re=y.choices.find(Br=>Br.id===ce);if(!re)return null;const fr=re.freeText?(n.extrasText[`${y.id}_${re.id}`]??"").trim():"",He=fr?`${re.label.is}: ${fr}`:re.label.is;return re.quoteOnly?`${He} (tilboð)`:re.priceDelta>0?`${He} (+${m(re.priceDelta)})`:He}).filter(Boolean);if(te.length){g[`${f++}. ${y.label.is}`]=te.join(", ");const ce=!!n.product.pricePerPerson&&y.id===n.product.sizeGroupId;N.push({label:y.label.is,value:te.join(", "),note:ce&&n.product.pricePerPerson?`${m(n.product.pricePerPerson)} á mann`:void 0})}}),n.product.inscription&&n.inscription.trim()&&(g[`${f++}. Áletrun`]=n.inscription.trim(),N.push({label:n.product.inscription.label.is,value:n.inscription.trim()}))}),N.push({label:"Pöntunarnúmer",value:t}),I&&!M&&(g[`${f++}. Kökur samtals`]=m(J),N.push({label:"Kökur samtals",value:m(J),money:!0})),R&&(g[`${f++}. Veislukjör`]=`−${m(Se)} (${Z.discountPct}% af kökum — TIL VIÐMIÐUNAR, prósenta óstaðfest)`,N.push({label:"Veislukjör",value:`−${m(Se)} (${Z.discountPct}%)`,note:"til viðmiðunar — prósentan er ekki staðfest",money:!0}));const le=Ee.filter(n=>(ie[n.id]??0)>0);for(const n of le){const X=ie[n.id]??0,y=Be(n,X,R),te=y<n.unitPrice?R?" (veisluverð)":" (magnverð)":"",ce=`${X} stk. á ${m(y)}${te} — ${m(X*y)}`;g[`${f++}. ${n.label.is}`]=ce,N.push({label:n.label.is,value:ce,money:!0})}const ae=x[0],Hr=!I&&!R&&le.length===0&&ae.size&&ae.product.pricePerPerson&&typeof ae.size.serves=="number"?` (${ae.size.serves} manns × ${m(ae.product.pricePerPerson)})`:"";if(g[`${f++}. Áætlað verð`]=M?"Tilboð óskast, ekkert verð gefið upp á vefnum":`${m(oe)}${Hr}`,Re){const n=G?`Fylgir þessum pósti sem viðhengi (${G.name})`:`Viðskiptavinur ætlar að senda mynd og vísa í ${t}`;g[`${f++}. Mynd`]=n,N.push({label:"Mynd",value:n})}M&&N.push({label:"Verð",value:"Tilboð óskast"}),g[`${f++}. Sími`]=a.phone,g[`${f++}. Nafn`]=w==="company"?a.contact:a.name,a.email.trim()&&(g[`${f++}. Netfang`]=a.email.trim()),w==="company"&&(g[`${f++}. Fyrirtæki`]=a.company,g[`${f++}. Kennitala`]=a.kennitala,a.invoiceEmail.trim()&&(g[`${f++}. Netfang fyrir reikning`]=a.invoiceEmail.trim()),a.guests.trim()&&(g[`${f++}. Fjöldi gesta`]=a.guests.trim())),L&&(g[`${f++}. Tilefni`]=L),a.notes.trim()&&(g[`${f++}. Athugasemdir`]=a.notes.trim()),g[`${f++}. Beiðni send`]=new Date().toLocaleString("is-IS");try{const n=new FormData;n.append("order",JSON.stringify({subject:g._subject,replyTo:a.email.trim()||a.invoiceEmail.trim()||"",mail:{product:I?x.map(te=>te.product.name.is).join(" + "):x[0].product.name.is,quantity:I?1:x[0].qty,pickupWhen:u,pickupWhere:U?`Sent á ${a.address}`:d,customerName:w==="company"?a.contact:a.name,customerPhone:a.phone.trim(),customerEmail:a.email.trim(),company:w==="company"?a.company.trim():"",kennitala:w==="company"?a.kennitala.trim():"",occasion:L,message:a.notes.trim(),totalIsk:M?0:oe,provisional:yr,options:N}})),G&&Re&&n.append("mynd",G,G.name);const X=await fetch(oo,{method:"POST",body:n}),y=await X.json().catch(()=>null);if(!X.ok||!(y!=null&&y.ok)||!y.id)throw new Error(y!=null&&y.reason?String(y.reason):`http-${X.status}`);Er(!!y.attached),ke("done")}catch{Ye(!0),ke("idle")}},Ar=()=>{we([]),Ge({}),me(!0),xe({}),fe(""),ve({}),Le(),Je(""),ue(1),k({name:"",phone:"",email:"",date:"",time:"",location:H[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:"",occasionOther:"",guests:"",handover:"pickup",address:""}),P({}),Ve(!1),ke("idle")},mr=e.jsxs("div",{className:"rb-ord-photo",children:[G?e.jsxs("div",{className:"rb-ord-photo-has",children:[e.jsx("img",{className:"rb-ord-photo-thumb",src:_e,alt:""}),e.jsxs("div",{className:"rb-ord-photo-meta",children:[e.jsx("span",{className:"rb-ord-photo-name",children:G.name}),e.jsx("span",{className:"rb-ord-photo-size",children:G.size<1024*1024?`${Math.max(1,Math.round(G.size/1024))} KB`:`${(G.size/1024/1024).toFixed(1)} MB`})]}),e.jsx("button",{type:"button",className:"rb-ord-photo-clear",onClick:Le,children:o.photoRemove})]}):e.jsxs("label",{className:"rb-ord-photo-pick",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var t;return Or(((t=r.target.files)==null?void 0:t[0])??null)}}),e.jsx("span",{className:"rb-ord-photo-cta",children:o.photoCta}),e.jsx("span",{className:"rb-ord-photo-label",children:o.photoLabel})]}),er?e.jsx("p",{className:"rb-ord-err",role:"alert",children:er}):e.jsx("p",{className:"rb-ord-hint",children:o.photoHint})]}),Wr=e.jsxs("div",{className:"rb-ord-slip",children:[e.jsx("div",{className:"rb-ord-slip-title",children:o.slipTitle}),e.jsx("div",{className:"rb-ord-slip-rule","aria-hidden":"true"}),e.jsxs("div",{children:[S.length===0&&Ie.length===0&&e.jsx("p",{className:"rb-ord-slip-empty",children:o.slipEmpty}),S.map(r=>e.jsxs("div",{className:"rb-ord-cake",children:[e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.product.name[i],r.qty>1?` ×${r.qty}`:"",r.size&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.size.label[i]})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:r.quote?o.quoteTotal:m(r.total)})]}),e.jsxs("div",{className:"rb-ord-cakebtns",children:[e.jsx("button",{type:"button",onClick:()=>Fr(r.key),children:o.btnEditCake}),e.jsx("button",{type:"button",onClick:()=>Ir(r.key),children:o.btnRemoveCake})]})]},r.key)),T&&Ie.map(r=>e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.name,r.sub&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.sub})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price","data-free":r.price===null,children:r.pending?"":r.price===null?o.included:m(r.price)})]},r.key))]}),T&&tr.length>0&&e.jsxs("div",{className:"rb-ord-spec",children:[e.jsx("div",{className:"rb-ord-spec-title",children:o.specTitle}),e.jsx("ul",{className:"rb-ord-spec-list",children:tr.map(r=>e.jsxs("li",{className:"rb-ord-spec-row","data-changed":r.changed,children:[e.jsx("span",{className:"rb-ord-spec-dot","aria-hidden":"true"}),r.label[i]]},`${r.label.is}_${r.changed}`))})]}),R&&!M&&e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[o.kjorLine,e.jsx("span",{className:"rb-ord-slipline-sub",children:o.kjorSub(Z.discountPct)})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:m(-Se)})]}),Ee.filter(r=>(ie[r.id]??0)>0).map(r=>{const t=ie[r.id]??0,d=Be(r,t,R);return e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.label[i]," ×",t,d<r.unitPrice&&e.jsx("span",{className:"rb-ord-slipline-sub",children:R?o.extrasKjorTag:o.extrasBulkTag})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:m(t*d)})]},`extra_${r.id}`)}),e.jsxs("div",{className:"rb-ord-total",children:[e.jsx("span",{className:"rb-ord-total-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-total-value","data-bump":Ae,"data-quote":sr,"aria-live":"polite",children:ir})]}),!R&&!M&&J>=Z.nudgeFrom&&J<Z.threshold&&e.jsx("p",{className:"rb-ord-kjornudge",children:o.kjorNudge(m(Z.threshold-J),Z.discountPct)}),e.jsx("p",{className:"rb-ord-slip-note",children:M?o.quoteNote:o.slipNote}),M&&J+Te>0&&e.jsx("p",{className:"rb-ord-slip-note",children:o.kjorQuoteNote})]});return e.jsxs("section",{id:"order",style:{background:$e,padding:v?"clamp(28px,5vh,48px) clamp(20px,4.5vw,72px) clamp(80px,11vh,140px)":"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:lo}}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsxs("div",{style:{borderTop:v?"none":`1px solid ${q}`,paddingTop:v?0:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:p},children:o.kicker}),v?e.jsx("h1",{style:{fontFamily:D,fontWeight:400,fontSize:"clamp(38px,5.4vw,72px)",lineHeight:1.02,margin:"18px 0 0",...Ue},children:o.title}):e.jsx("h2",{style:{fontFamily:D,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...Ue},children:o.title}),e.jsx("p",{style:{fontSize:16,color:z,margin:"16px 0 0",lineHeight:1.65},children:o.intro}),yr]}),Ce==="done"?e.jsxs("div",{className:"rb-ord-done",style:{marginTop:"clamp(30px,4.5vh,46px)"},role:"status",children:[e.jsx("h3",{className:"rb-ord-done-title",style:{...Ue},children:o.doneTitle}),e.jsx("p",{style:{fontSize:16,color:_,lineHeight:1.65,margin:"14px auto 0",maxWidth:"46ch"},children:o.doneBody}),e.jsxs("div",{className:"rb-ord-stub",children:[e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:o.refLabel}),e.jsx("span",{className:"rb-ord-stub-val",children:Ne||"—"})]}),e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-stub-val","data-price":"true",children:je?o.quoteTotal:m(Fe)})]})]}),e.jsxs("p",{className:"rb-ord-done-line",children:[he[i].length===1?o.doneWhen(`${he[i][0].label.toLowerCase()} ${he[i][0].value}`):o.doneWhenGeneric," ",o.doneReach," ",e.jsx("a",{href:`tel:${$.phone}`,className:"rb-ord-tel",children:$.phoneLabel})]}),Re&&(Pr?e.jsx("p",{className:"rb-ord-done-line","data-good":"true",children:o.photoSent}):Ne&&e.jsxs("p",{className:"rb-ord-done-line",children:[o.photoHow(Ne)," ",e.jsx("a",{href:`mailto:${$.orderEmail}?subject=${encodeURIComponent(Ne)}`,className:"rb-ord-tel",children:$.orderEmail})]})),e.jsx("button",{type:"button",className:"rb-ord-submit",style:{width:"auto",marginTop:24},onClick:Ar,children:o.doneAgain})]}):e.jsxs("form",{ref:We,className:"rb-ord-grid",style:{marginTop:"clamp(24px,3.5vh,36px)"},onSubmit:Mr,noValidate:!0,children:[e.jsxs("div",{className:"rb-ord-formwrap",children:[e.jsxs("div",{className:"rb-ord-mobiletotal",children:[e.jsx("span",{className:"rb-ord-mobiletotal-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-mobiletotal-value","data-bump":Ae,"data-quote":sr,"aria-live":"polite",children:ir})]}),e.jsxs("div",{className:"rb-ord-ctx",children:[e.jsxs("div",{className:"rb-ord-ctx-field",children:[e.jsx("span",{className:"rb-ord-ctx-label",children:o.stepWho}),e.jsx("div",{className:"rb-ord-seg",role:"radiogroup","aria-label":o.stepWho,children:[{id:"person",name:o.whoPerson},{id:"company",name:o.whoCompany}].map(r=>e.jsxs("label",{"data-on":w===r.id,children:[e.jsx("input",{type:"radio",name:"rb-ord-who",checked:w===r.id,onChange:()=>Sr(r.id)}),e.jsx("span",{children:r.name})]},r.id))})]}),Lr&&e.jsxs("div",{className:"rb-ord-ctx-field",children:[e.jsxs("label",{className:"rb-ord-ctx-label",htmlFor:"rb-ord-occasion",children:[o.fieldOccasion," · ",o.optional]}),e.jsxs("select",{id:"rb-ord-occasion",className:"rb-ord-select rb-ord-ctx-select",value:a.occasion,onChange:r=>k(t=>({...t,occasion:r.target.value,occasionOther:""})),children:[e.jsx("option",{value:"",style:{background:A},children:o.occasionNone}),qe.map(r=>e.jsx("option",{value:r.id,style:{background:A},children:r.label[i]},r.id))]})]}),(F==null?void 0:F.freeText)&&e.jsxs("div",{className:"rb-ord-ctx-field",style:{flex:"1 1 220px"},children:[e.jsx("label",{className:"rb-ord-ctx-label",htmlFor:"rb-ord-occasion-other",children:o.occasionOtherLabel}),e.jsx("input",{id:"rb-ord-occasion-other",className:"rb-ord-input",type:"text",maxLength:90,placeholder:o.occasionOtherPlaceholder,value:a.occasionOther,"data-invalid":s("occasionOther")?"true":void 0,"aria-invalid":!!s("occasionOther"),onChange:r=>k(t=>({...t,occasionOther:r.target.value})),onBlur:()=>P(r=>({...r,occasionOther:!0}))}),s("occasionOther")&&e.jsx("p",{className:"rb-ord-err",role:"alert",children:o.errOccasionOther})]})]}),w==="company"&&e.jsx("p",{className:"rb-ord-help",style:{margin:"10px 0 0"},children:o.bigOrderNote}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"01"}),e.jsx("span",{className:"rb-ord-steplabel",children:o.stepProduct})]}),e.jsx("div",{className:"rb-ord-prods",role:"radiogroup","aria-label":o.stepProduct,children:O.map(r=>e.jsxs("label",{className:"rb-ord-prod","data-on":r.id===K,children:[e.jsx("input",{type:"radio",name:"rb-ord-product",value:r.id,checked:T&&r.id===K,onChange:()=>{Ke(r.id),me(!0)}}),e.jsx("span",{className:"rb-ord-prod-mark","aria-hidden":"true",children:e.jsx(kr,{})}),qr&&r.image&&e.jsx("span",{className:"rb-ord-prod-pic",children:e.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",width:1400,height:1400})}),e.jsx("span",{className:"rb-ord-prod-name",children:r.name[i]}),e.jsx("span",{className:"rb-ord-prod-from",children:r.pricePerPerson?`${m(r.pricePerPerson)} ${o.perPerson}`:`${i==="is"?"frá":"from"} ${m(eo(r))}`})]},r.id))}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:T?l.blurb[i]:o.pickNextCake}),s("g_product")&&e.jsx("p",{className:"rb-ord-err",role:"alert",children:de.g_product})]}),T&&e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepOptions}),e.jsxs("div",{className:"rb-ord-groups","data-key":l.id,children:[l.groups.map(r=>{const t=E[r.id]??[],d=!!r.max&&t.length>=r.max,b=s(`g_${r.id}`),L=!!l.sizeGroupId&&r.id===l.sizeGroupId,U=L||r.choices.some(u=>u.priceDelta>0||u.quoteOnly);return e.jsxs("fieldset",{className:"rb-ord-group",children:[e.jsx("legend",{className:"rb-ord-legend",children:e.jsxs("span",{className:"rb-ord-legend-row",children:[e.jsx("span",{className:"rb-ord-legend-text",children:r.label[i]}),e.jsx("span",{className:"rb-ord-tag",children:r.required?o.required:o.optional})]})}),(r.help||r.max)&&e.jsx("p",{className:"rb-ord-help",children:r.help?r.help[i]:o.chooseUpTo(r.max)}),r.layout==="select"?e.jsxs("div",{className:"rb-ord-sizerow",children:[e.jsxs("select",{className:"rb-ord-select rb-ord-sizeselect",value:t[0]??"","data-invalid":b?"true":void 0,"aria-invalid":!!b,"aria-label":r.label[i],"aria-describedby":b?`err_g_${r.id}`:void 0,onChange:u=>or(r,u.target.value),children:[e.jsx("option",{value:"",disabled:!0,style:{background:A},children:o.sizePrompt}),r.choices.map(u=>{const x=Pe(l,u);return e.jsxs("option",{value:u.id,style:{background:A},children:[u.label[i],x!==null?`  ·  ${m(x)}`:""]},u.id)})]}),L&&Q&&e.jsxs("div",{className:"rb-ord-sizeprice","aria-live":"polite",children:[e.jsx("span",{className:"rb-ord-sizeprice-num","data-bump":Ae,children:m(Pe(l,Q)??0)}),l.pricePerPerson&&e.jsxs("span",{className:"rb-ord-sizeprice-rate",children:[m(l.pricePerPerson)," ",o.perPerson]})]})]}):e.jsx("div",{className:"rb-ord-choices","data-layout":r.layout??"list",children:r.choices.map(u=>{const x=t.includes(u.id),I=!x&&d,V=L?Pe(l,u):null,g=u.freeText,N=`${r.id}_${u.id}`,f=s(`x_${N}`);return e.jsxs("div",{children:[e.jsxs("label",{className:"rb-ord-choice","data-on":x,"data-off":I,children:[e.jsx("input",{type:r.kind==="single"?"radio":"checkbox",name:`rb-ord-${r.id}`,checked:x,disabled:I,"data-invalid":b?"true":void 0,"aria-describedby":b?`err_g_${r.id}`:void 0,onChange:()=>or(r,u.id)}),e.jsx("span",{className:"rb-ord-mark","data-shape":r.kind==="single"?"round":"box","aria-hidden":"true",children:e.jsx(kr,{})}),e.jsxs("span",{className:"rb-ord-choice-label",children:[u.label[i],u.note&&e.jsx("span",{className:"rb-ord-choice-note",children:u.note[i]})]}),U&&e.jsx("span",{className:"rb-ord-choice-price","data-free":V===null&&u.priceDelta===0&&!u.quoteOnly,children:V!==null?m(V):u.quoteOnly?o.quoteTotal:u.priceDelta===0?o.included:`+ ${m(u.priceDelta)}`})]}),g&&x&&e.jsxs("div",{className:"rb-ord-extra",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:`rb-ord-x-${N}`,children:g.label[i]}),e.jsx("input",{id:`rb-ord-x-${N}`,className:"rb-ord-input",type:"text",maxLength:g.maxLength,placeholder:g.placeholder[i],value:se[N]??"","data-invalid":f?"true":void 0,"aria-invalid":!!f,"aria-describedby":f?`err_x_${N}`:void 0,onChange:le=>ve(ae=>({...ae,[N]:le.target.value})),onBlur:()=>P(le=>({...le,[`x_${N}`]:!0}))}),f&&e.jsx("p",{className:"rb-ord-err",id:`err_x_${N}`,role:"alert",children:f}),u.needsPhoto&&ro&&mr]})]},u.id)})}),b&&e.jsx("p",{className:"rb-ord-err",id:`err_g_${r.id}`,role:"alert",children:b})]},r.id)}),l.inscription&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-inscription",children:[l.inscription.label[i],e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-inscription",className:"rb-ord-input",type:"text",maxLength:l.inscription.maxLength,placeholder:F?((ur=F.suggests)==null?void 0:ur[i])??o.inscriptionNeutral:l.inscription.placeholder[i],value:ge,onChange:r=>fe(r.target.value)}),e.jsx("p",{className:"rb-ord-hint",children:o.charsLeft(l.inscription.maxLength-ge.length)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("span",{className:"rb-ord-label",id:"rb-ord-qty-label",children:o.fieldQty}),e.jsxs("div",{className:"rb-ord-qty",role:"group","aria-labelledby":"rb-ord-qty-label",children:[e.jsx("button",{type:"button",onClick:()=>ue(r=>Math.max(1,r-1)),disabled:Y<=1,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:Y}),e.jsx("button",{type:"button",onClick:()=>ue(r=>Math.min(99,r+1)),disabled:Y>=99,"aria-label":"+",children:"+"})]}),e.jsx("p",{className:"rb-ord-hint",children:o.fieldQtyHint})]}),e.jsxs("div",{className:"rb-ord-addcake",children:[e.jsx("button",{type:"button",className:"rb-ord-addbtn",onClick:br,children:o.addAnother}),S.length>0&&e.jsx("button",{type:"button",className:"rb-ord-linkbtn",onClick:Rr,children:o.cancelDraftCake})]})]},l.id)]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"02"}),e.jsx("span",{className:"rb-ord-steplabel",children:o.stepExtras})]}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:10},children:R?o.extrasKjorIntro:o.extrasIntro}),e.jsx("div",{className:"rb-ord-extras",children:Ee.map(r=>{const t=ie[r.id]??0,d=Be(r,t,R),b=d<r.unitPrice;return e.jsxs("div",{className:"rb-ord-extra","data-on":t>0||void 0,children:[e.jsx("span",{className:"rb-ord-extra-pic",children:e.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",width:480,height:480})}),e.jsx("span",{className:"rb-ord-extra-name",children:r.label[i]}),e.jsx("span",{className:"rb-ord-extra-price",children:b?e.jsxs(e.Fragment,{children:[e.jsx("s",{children:m(r.unitPrice)})," ",m(r.kjorPrice),e.jsx("em",{children:R?o.extrasKjorTag:o.extrasBulkTag})]}):`${m(r.unitPrice)} ${i==="is"?"stk.":"each"}`}),e.jsx("span",{className:"rb-ord-extra-bulk",children:b?" ":o.extrasBulkLine(r.bulkAt,m(r.kjorPrice))}),e.jsxs("span",{className:"rb-ord-extra-foot",children:[e.jsxs("span",{className:"rb-ord-qty","data-small":"true",role:"group","aria-label":r.label[i],children:[e.jsx("button",{type:"button",onClick:()=>hr(r.id,-1),disabled:t<=0,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:t}),e.jsx("button",{type:"button",onClick:()=>hr(r.id,1),disabled:t>=r.max,"aria-label":"+",children:"+"})]}),e.jsx("span",{className:"rb-ord-extra-sum","aria-live":"polite",children:t>0?m(t*d):""})]})]},r.id)})})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"03"}),e.jsx("span",{className:"rb-ord-steplabel",children:o.stepWhen})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-date",children:o.fieldDate}),e.jsx("input",{id:"rb-ord-date",className:"rb-ord-input",type:"date",min:ne,value:a.date,"data-invalid":s("c_date")?"true":void 0,"aria-invalid":!!s("c_date"),"aria-describedby":s("c_date")?"err_c_date":"hint_c_date",onChange:r=>k({...a,date:r.target.value}),onBlur:()=>P({...B,c_date:!0})}),s("c_date")?e.jsx("p",{className:"rb-ord-err",id:"err_c_date",role:"alert",children:s("c_date")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_date",children:o.fieldDateHelp(l.leadDays)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-time",children:o.fieldTime}),e.jsxs("select",{id:"rb-ord-time",className:"rb-ord-select",value:a.time,"data-invalid":s("c_time")?"true":void 0,"aria-invalid":!!s("c_time"),"aria-describedby":s("c_time")?"err_c_time":"hint_c_time",onChange:r=>k({...a,time:r.target.value}),onBlur:()=>P({...B,c_time:!0}),children:[e.jsx("option",{value:"",children:o.fieldTimePlaceholder}),ho.map(r=>e.jsx("option",{value:r,children:r},r))]}),s("c_time")?e.jsx("p",{className:"rb-ord-err",id:"err_c_time",role:"alert",children:s("c_time")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_time",children:o.fieldTimeHelp})]})]}),e.jsx("div",{className:"rb-ord-two",children:w==="company"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-handover",children:o.fieldHandover}),e.jsxs("select",{id:"rb-ord-handover",className:"rb-ord-select",value:a.handover,onChange:r=>k({...a,handover:r.target.value}),children:[e.jsx("option",{value:"pickup",style:{background:A},children:o.handoverPickup}),e.jsx("option",{value:"delivery",style:{background:A},children:o.handoverDelivery})]})]}):e.jsx("div",{className:"rb-ord-field",children:H.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location",className:"rb-ord-select",value:a.location,onChange:r=>k({...a,location:r.target.value}),children:H.map(r=>e.jsx("option",{value:r.id,style:{background:A},children:r.label[i]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:o.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:H[0].label[i]})]})})}),w==="company"&&a.handover==="pickup"&&e.jsx("div",{className:"rb-ord-field",children:H.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location-co",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location-co",className:"rb-ord-select",value:a.location,onChange:r=>k({...a,location:r.target.value}),children:H.map(r=>e.jsx("option",{value:r.id,style:{background:A},children:r.label[i]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:o.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:H[0].label[i]})]})}),w==="company"&&a.handover==="delivery"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-address",children:o.fieldAddress}),e.jsx("input",{id:"rb-ord-address",className:"rb-ord-input",type:"text",autoComplete:"street-address",value:a.address,"data-invalid":s("c_address")?"true":void 0,"aria-invalid":!!s("c_address"),"aria-describedby":s("c_address")?"err_c_address":"hint_c_address",onChange:r=>k({...a,address:r.target.value}),onBlur:()=>P({...B,c_address:!0})}),s("c_address")?e.jsx("p",{className:"rb-ord-err",id:"err_c_address",role:"alert",children:s("c_address")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_address",children:o.fieldAddressHint})]})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"04"}),e.jsx("span",{className:"rb-ord-steplabel",children:o.stepDetails})]}),S.some(r=>r.wantsPhoto)&&!(T&&De)&&e.jsxs("div",{className:"rb-ord-field",style:{marginTop:4},children:[e.jsx("span",{className:"rb-ord-label",children:o.photoLabel}),mr]}),w==="company"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-company",children:o.fieldCompany}),e.jsx("input",{id:"rb-ord-company",className:"rb-ord-input",type:"text",autoComplete:"organization",value:a.company,"data-invalid":s("c_company")?"true":void 0,"aria-invalid":!!s("c_company"),"aria-describedby":s("c_company")?"err_c_company":void 0,onChange:r=>k({...a,company:r.target.value}),onBlur:()=>P({...B,c_company:!0})}),s("c_company")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_company",role:"alert",children:s("c_company")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-kennitala",children:o.fieldKennitala}),e.jsx("input",{id:"rb-ord-kennitala",className:"rb-ord-input",type:"text",inputMode:"numeric",value:a.kennitala,"data-invalid":s("c_kennitala")?"true":void 0,"aria-invalid":!!s("c_kennitala"),"aria-describedby":s("c_kennitala")?"err_c_kennitala":"hint_c_kennitala",onChange:r=>k({...a,kennitala:r.target.value}),onBlur:()=>P({...B,c_kennitala:!0})}),s("c_kennitala")?e.jsx("p",{className:"rb-ord-err",id:"err_c_kennitala",role:"alert",children:s("c_kennitala")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_kennitala",children:o.fieldKennitalaHint})]})]}),e.jsx("div",{className:"rb-ord-two",children:e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-guests",children:o.fieldGuests}),e.jsx("input",{id:"rb-ord-guests",className:"rb-ord-input",type:"number",inputMode:"numeric",min:1,value:a.guests,"aria-describedby":"hint_c_guests",onChange:r=>k({...a,guests:r.target.value})}),e.jsx("p",{className:"rb-ord-hint",id:"hint_c_guests",children:o.fieldGuestsHint})]})})]}),e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[w==="person"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-name",children:o.fieldName}),e.jsx("input",{id:"rb-ord-name",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.name,"data-invalid":s("c_name")?"true":void 0,"aria-invalid":!!s("c_name"),"aria-describedby":s("c_name")?"err_c_name":void 0,onChange:r=>k({...a,name:r.target.value}),onBlur:()=>P({...B,c_name:!0})}),s("c_name")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_name",role:"alert",children:s("c_name")})]}):e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-contact",children:o.fieldContact}),e.jsx("input",{id:"rb-ord-contact",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.contact,"data-invalid":s("c_contact")?"true":void 0,"aria-invalid":!!s("c_contact"),"aria-describedby":s("c_contact")?"err_c_contact":void 0,onChange:r=>k({...a,contact:r.target.value}),onBlur:()=>P({...B,c_contact:!0})}),s("c_contact")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_contact",role:"alert",children:s("c_contact")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-phone",children:o.fieldPhone}),e.jsx("input",{id:"rb-ord-phone",className:"rb-ord-input",type:"tel",inputMode:"tel",autoComplete:"tel",value:a.phone,"data-invalid":s("c_phone")?"true":void 0,"aria-invalid":!!s("c_phone"),"aria-describedby":s("c_phone")?"err_c_phone":void 0,onChange:r=>k({...a,phone:r.target.value}),onBlur:()=>P({...B,c_phone:!0})}),s("c_phone")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_phone",role:"alert",children:s("c_phone")})]})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-email",children:o.fieldEmail}),e.jsx("input",{id:"rb-ord-email",className:"rb-ord-input",type:"email",inputMode:"email",autoComplete:"email",value:a.email,"data-invalid":s("c_email")?"true":void 0,"aria-invalid":!!s("c_email"),"aria-describedby":s("c_email")?"err_c_email":"hint_c_email",onChange:r=>k({...a,email:r.target.value}),onBlur:()=>P({...B,c_email:!0})}),s("c_email")?e.jsx("p",{className:"rb-ord-err",id:"err_c_email",role:"alert",children:s("c_email")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_email",children:o.fieldEmailHelp})]}),w==="company"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-invoice-email",children:[o.fieldInvoiceEmail,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-invoice-email",className:"rb-ord-input",type:"email",inputMode:"email",value:a.invoiceEmail,"data-invalid":s("c_invoiceEmail")?"true":void 0,"aria-invalid":!!s("c_invoiceEmail"),"aria-describedby":s("c_invoiceEmail")?"err_c_invoiceEmail":"hint_c_invoiceEmail",onChange:r=>k({...a,invoiceEmail:r.target.value}),onBlur:()=>P({...B,c_invoiceEmail:!0})}),s("c_invoiceEmail")?e.jsx("p",{className:"rb-ord-err",id:"err_c_invoiceEmail",role:"alert",children:s("c_invoiceEmail")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_invoiceEmail",children:o.fieldInvoiceEmailHint})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-notes",children:[o.fieldNotes,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("textarea",{id:"rb-ord-notes",className:"rb-ord-textarea",placeholder:o.fieldNotesPlaceholder,value:a.notes,onChange:r=>k({...a,notes:r.target.value})})]}),e.jsx("button",{type:"submit",className:"rb-ord-submit",disabled:Ce==="sending",children:Ce==="sending"?`${o.submitting}...`:je?o.submitQuote:o.submit}),Qe&&Object.keys(de).length>0&&e.jsx("p",{className:"rb-ord-errsummary",role:"alert",children:o.errSummary}),Tr&&e.jsxs("p",{className:"rb-ord-errsummary",role:"alert",children:[i==="is"?"Ekki tókst að senda pöntunina. Vinsamlegast hringdu í ":"We could not send that order. Please call us on ",e.jsx("a",{href:`tel:${$.phone}`,className:"rb-ord-tel",children:$.phoneLabel}),i==="is"?" og við klárum hana með þér.":" and we will take it down for you."]}),e.jsxs("p",{className:"rb-ord-hint",style:{textAlign:"center",marginTop:4},children:[i==="is"?"Eða hringdu í ":"Or call us on ",e.jsx("a",{href:`tel:${$.phone}`,className:"rb-ord-tel",children:$.phoneLabel})]})]})]}),e.jsx("div",{className:"rb-ord-slipwrap",children:Wr})]})]})]})}const uo=`
  /* Safari 26 tints its chrome from body's background-color (theme-color is
     ignored since Liquid Glass) — without this the status-bar strip is WHITE
     on this ink-dark page. See [[ios-safe-area-chrome-color]]. */
  html, body { background-color:${$e}; }
  .rb-op ::selection { background:#5C1C1F; color:${_}; }
  .rb-op a:focus-visible, .rb-op button:focus-visible {
    outline:2px solid ${p}; outline-offset:3px; border-radius:4px; }

  .rb-op-bar { display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:calc(18px + env(safe-area-inset-top, 0px)) clamp(20px,4.5vw,72px) 18px; border-bottom:1px solid ${pe}; }
  .rb-op-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${ee}; font-size:14px; color:${z}; padding:11px 0;
    transition:color .2s ${c}; }
  .rb-op-back:hover { color:${j}; }
  .rb-op-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${ee}; font-size:13px; letter-spacing:.08em; color:${C};
    transition:color .2s ${c}; border-radius:4px; }
  .rb-op-lang[aria-pressed="true"] { color:${j}; }
  .rb-op-lang:hover { color:${_}; }

  .rb-op-foot { border-top:1px solid ${pe}; padding:36px clamp(20px,4.5vw,72px) 56px;
    background:${A}; }
  .rb-op-foot-grid { max-width:1180px; margin:0 auto; display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:26px; }
  .rb-op-foot-label { font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${p}; }
  .rb-op-foot-body { font-size:14px; color:${z}; line-height:1.65; margin:9px 0 0; }
  .rb-op-foot-body a { color:${j}; text-decoration:none; }
  .rb-op-foot-body a:hover { color:${_}; }

  @media (max-width:520px) {
    .rb-op-bar { padding:14px clamp(20px,4.5vw,72px); }
    .rb-op-bar img { width:104px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-op-back, .rb-op-lang { transition:none; }
  }
`;function xo(){const[i,v]=to(),W=so[i],o=_r[i],{LINKS:$,hoursRows:O,mainName:be}=Nr(),[H]=Ur(),he=H.get("vara")??void 0;return h.useEffect(()=>{Kr($e)},[]),e.jsxs("div",{className:"rb-op",lang:i,style:{fontFamily:ee,color:_,background:$e,minHeight:"100svh",overflowX:"clip",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:uo}}),e.jsxs("header",{className:"rb-op-bar",children:[e.jsx(vr,{to:jr,"aria-label":o.backToSite,children:e.jsx("img",{src:io,alt:"Reynir bakari",width:124,height:54,decoding:"async",style:{width:124,height:"auto",display:"block"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:22},children:[e.jsxs(vr,{to:jr,className:"rb-op-back",children:[e.jsx("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5.5 1L1 5.5L5.5 10M1 5.5H12.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),o.backToSite]}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-op-lang","aria-pressed":i==="en",onClick:()=>v("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:C,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-op-lang","aria-pressed":i==="is",onClick:()=>v("is"),children:"ÍS"})]})]})]}),e.jsx(mo,{lang:i,standalone:!0,initialProductId:he}),e.jsx("footer",{className:"rb-op-foot",children:e.jsxs("div",{className:"rb-op-foot-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:W.mainLabel}),e.jsxs("p",{className:"rb-op-foot-body",children:[be,e.jsx("br",{}),O[i].map(K=>`${K.label} ${K.value}`).join(" · ")]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:W.rowPhone}),e.jsxs("p",{className:"rb-op-foot-body",children:[e.jsx("a",{href:`tel:${$.phone}`,children:$.phoneLabel}),e.jsx("br",{}),e.jsx("a",{href:`mailto:${$.orderEmail}`,children:$.orderEmail})]})]})]})}),e.jsx(no,{})]})}function yo(){return e.jsx(ao,{children:e.jsx(xo,{})})}export{yo as default};
