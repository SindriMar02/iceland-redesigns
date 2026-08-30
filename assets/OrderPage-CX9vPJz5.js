import{r as p,j as e,c as or,s as ar,L as De}from"./index-DBe737o8.js";import{u as Ae,s as tr,t as ir,v as sr,w as nr,O as He,i as $,x as dr,I as se,H,G as l,E as d,D as C,a as w,b as z,c as k,f as M,B,F,h as re,y as qe,d as xe,z as lr,J as cr,S as pr,e as br,K as Fe,L as hr,T as mr,C as ur}from"./useLang-ZM9TY6e8.js";import"./image-url.umd-B5pYqDl7.js";const xr=`
  /* layout: functional split, the slip reacts to the choices */
  .rb-ord-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:clamp(28px,4vw,64px); align-items:start; }
  /* The slip's column has to run the FULL height of the form, or sticky has
     nowhere to travel: with align-items:start the column hugged the slip
     (520px inside a 3000px form) and the running total scrolled away the
     moment anyone started choosing, which is the one thing it exists not to
     do. Stretch the column, not the slip. */
  .rb-ord-slipwrap { align-self:stretch; }

  .rb-ord-step { border-top:1px solid ${H}; padding-top:18px; margin-top:clamp(30px,4.5vh,46px); }
  .rb-ord-steplabel { font-size:12px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${l}; }

  /* Who is ordering. Two lanes, not a dropdown: it changes which fields appear. */
  .rb-ord-who { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px; }
  .rb-ord-wholane { display:flex; flex-direction:column; gap:5px; text-align:left; cursor:pointer;
    padding:15px 16px; border:1px solid ${H}; border-radius:4px; background:rgba(243,234,211,.02);
    transition:border-color .22s ${d}, background .22s ${d}; }
  .rb-ord-wholane:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-wholane[data-on="true"] { border-color:${l}; background:rgba(200,168,119,.09); }
  .rb-ord-wholane input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .rb-ord-wholane:has(input:focus-visible) { outline:2px solid ${l}; outline-offset:3px; }
  .rb-ord-wholane-name { font-family:${C}; font-size:18px; color:${w}; line-height:1.2; }
  .rb-ord-wholane[data-on="true"] .rb-ord-wholane-name { color:${z}; }
  .rb-ord-wholane-hint { font-size:12.5px; color:${k}; line-height:1.45; }

  /* quantity stepper */
  .rb-ord-qty { display:flex; align-items:center; gap:0; margin-top:8px;
    border:1px solid ${H}; border-radius:4px; width:max-content; }
  .rb-ord-qty button { width:46px; height:46px; background:none; border:0; cursor:pointer; color:${w};
    font-size:19px; line-height:1; transition:color .2s ${d}, background .2s ${d}; }
  .rb-ord-qty button:hover:not(:disabled) { color:${z}; background:rgba(243,234,211,.05); }
  .rb-ord-qty button:disabled { opacity:.32; cursor:not-allowed; }
  .rb-ord-qty button:focus-visible { outline:2px solid ${l}; outline-offset:-2px; }
  .rb-ord-qty-val { min-width:46px; text-align:center; font-family:${C}; font-size:19px; color:${l};
    font-variant-numeric:tabular-nums; }

  /* Product picker. FLEX, not grid, so the owner can add or remove a product in
     the CMS at any count without leaving a hole: a grid keeps empty cells in the
     last row (4 products = one stranded card beside two gaps), whereas wrapped
     flex + centred remainder reads as deliberate at 1, 2, 4, 5 or 7 products.
     max-width caps each card at a third so a short row never stretches. */
  .rb-ord-prods { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:16px; }
  .rb-ord-prods > * { flex:1 1 210px; max-width:calc(33.333% - 7px); }
  .rb-ord-prod { position:relative; display:flex; flex-direction:column; gap:6px; text-align:left; cursor:pointer;
    padding:16px 15px; border:1px solid ${H}; border-radius:4px; background:rgba(243,234,211,.02);
    overflow:hidden;
    transition:border-color .22s ${d}, background .22s ${d}, transform .16s ${d}; }
  /* Product photo. The card is built so this can be absent — a product added
     in the CMS before its picture exists simply renders the text card. */
  .rb-ord-prod-pic { margin:-16px -15px 10px; aspect-ratio:1 / 1; overflow:hidden; background:${M}; }
  .rb-ord-prod-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.94); transition:transform .5s ${d}, filter .35s ${d}; }
  .rb-ord-prod:hover .rb-ord-prod-pic img { transform:scale(1.04); filter:saturate(1) brightness(1); }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-pic img { filter:saturate(1) brightness(1); }
  .rb-ord-prod:hover { border-color:rgba(238,211,170,.4); background:rgba(243,234,211,.05); }
  .rb-ord-prod:active { transform:scale(.99); }
  .rb-ord-prod[data-on="true"] { border-color:${l}; background:rgba(200,168,119,.09); }
  .rb-ord-prod-name { font-family:${C}; font-size:19px; line-height:1.15; color:${w}; padding-right:36px; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-name { color:${z}; }
  .rb-ord-prod-from { font-size:12.5px; color:${k}; font-variant-numeric:tabular-nums; }
  /* z-index is load-bearing, not decoration: the product photo carries a
     filter, which gives it its own stacking context, and a stacking context
     with z-index:auto paints in the positioned layer in DOM order — putting
     the later <img> on top of this earlier absolute mark and hiding the
     selected state entirely. The ring behind it keeps the mark legible over
     a photograph rather than only over the dark card. */
  .rb-ord-prod-mark { position:absolute; z-index:2; top:14px; right:14px; width:17px; height:17px; border-radius:50%;
    border:1px solid rgba(238,211,170,.55); display:flex; align-items:center; justify-content:center;
    background:rgba(11,10,9,.45); box-shadow:0 0 0 3px rgba(11,10,9,.35);
    transition:border-color .2s ${d}, background .2s ${d}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-mark { border-color:${l}; background:${l}; }
  .rb-ord-prod-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${d}, transform .18s ${d}; }
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
  .rb-ord-legend { padding:0; width:100%; font-family:${C}; font-size:clamp(19px,2vw,23px); color:${w}; }
  /* The tag is pinned to the top RIGHT of the question, never set inline after
     it. Inline, it sat beside short headings and dropped onto its own line
     under long ones, so half the questions looked one way and half the other
     and the long ones ended with a stray word. Pinned, every question reads
     identically however the heading wraps. */
  .rb-ord-legend-row { display:flex; align-items:baseline; justify-content:space-between;
    gap:14px; width:100%; }
  .rb-ord-legend-text { flex:1 1 auto; min-width:0; }
  .rb-ord-tag { flex:none; }
  .rb-ord-help { font-size:13.5px; color:${k}; margin:6px 0 0; line-height:1.5; }
  .rb-ord-tag { font-family:${B}; font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:${F}; white-space:nowrap; }

  .rb-ord-choices { display:grid; gap:8px; margin-top:14px; }
  .rb-ord-choice { position:relative; display:flex; align-items:baseline; gap:10px; cursor:pointer;
    min-height:48px; padding:12px 15px; border:1px solid ${re}; border-radius:4px;
    transition:border-color .2s ${d}, background .2s ${d}, transform .14s ${d}; }
  .rb-ord-choice:hover { border-color:rgba(238,211,170,.32); background:rgba(243,234,211,.03); }
  .rb-ord-choice:active { transform:scale(.995); }
  .rb-ord-choice[data-on="true"] { border-color:${l}; background:rgba(200,168,119,.08); }
  .rb-ord-choice[data-off="true"] { opacity:.42; cursor:not-allowed; }
  .rb-ord-choice[data-off="true"]:hover { border-color:${re}; background:transparent; }
  /* the real input stays in the a11y tree and drives focus, but is not painted */
  .rb-ord-choice input, .rb-ord-prod input {
    position:absolute; opacity:0; width:1px; height:1px; margin:0; pointer-events:none; }
  .rb-ord-choice:has(input:focus-visible), .rb-ord-prod:has(input:focus-visible) {
    outline:2px solid ${l}; outline-offset:3px; }
  .rb-ord-mark { flex:none; width:15px; height:15px; margin-top:3px; border:1px solid rgba(238,211,170,.45);
    display:flex; align-items:center; justify-content:center; transition:border-color .2s ${d}, background .2s ${d}; }
  .rb-ord-mark[data-shape="round"] { border-radius:50%; }
  .rb-ord-mark[data-shape="box"] { border-radius:3px; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark { border-color:${l}; background:${l}; }
  .rb-ord-mark svg { opacity:0; transform:scale(.6); transition:opacity .18s ${d}, transform .18s ${d}; }
  .rb-ord-choice[data-on="true"] .rb-ord-mark svg { opacity:1; transform:none; }
  .rb-ord-choice-label { color:${w}; font-size:15.5px; line-height:1.4; }
  .rb-ord-choice-note { display:block; font-size:12.5px; color:${k}; margin-top:4px; line-height:1.45; }
  .rb-ord-choice-price { margin-left:auto; padding-left:12px; font-size:14px; color:${l}; white-space:nowrap;
    font-variant-numeric:tabular-nums; }
  .rb-ord-choice-price[data-free="true"] { color:${F}; font-size:12.5px; }

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
  .rb-ord-choices[data-layout="grid"] .rb-ord-choice[data-on="true"] { box-shadow:inset 0 0 0 1px ${l}; }
  /* A tile that opens a field would trap it in a narrow column. */
  .rb-ord-choices[data-layout="grid"] > div:has(.rb-ord-extra) { grid-column:1 / -1; }

  /* Size row: one control, and the price it produces sitting beside it at the
     size a price deserves. The dropdown carries the choosing; the number
     carries the meaning. */
  .rb-ord-sizerow { display:flex; align-items:center; gap:18px; margin-top:14px; flex-wrap:wrap; }
  .rb-ord-sizeselect { flex:1 1 190px; max-width:280px; margin:0; }
  .rb-ord-sizeprice { display:flex; flex-direction:column; gap:1px; min-width:0; }
  .rb-ord-sizeprice-num { font-family:${C}; font-size:clamp(24px,3vw,31px); line-height:1.05;
    color:${l}; font-variant-numeric:tabular-nums; white-space:nowrap; }
  .rb-ord-sizeprice-num[data-bump="true"] { animation:rb-ord-bump .34s ${d}; }
  .rb-ord-sizeprice-rate { font-size:12.5px; color:${F}; letter-spacing:.02em; white-space:nowrap; }
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
    animation:rb-ord-extrain .32s ${d} both; }
  @keyframes rb-ord-extrain { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:none; } }

  /* Photo upload. The dashed edge says "drop something here" without pretending
     to be a drop zone the phone cannot use, and it stays clearly secondary to
     the choice it belongs to. */
  .rb-ord-photo { margin-top:12px; }
  .rb-ord-photo-pick { display:flex; align-items:center; gap:12px; cursor:pointer;
    padding:13px 15px; border:1px dashed rgba(238,211,170,.34); border-radius:4px;
    background:rgba(243,234,211,.02); transition:border-color .2s ${d}, background .2s ${d}; }
  .rb-ord-photo-pick:hover { border-color:${l}; background:rgba(200,168,119,.06); }
  .rb-ord-photo-pick input { position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .rb-ord-photo-pick:has(input:focus-visible) { outline:2px solid ${l}; outline-offset:3px; }
  .rb-ord-photo-cta { flex:none; font-size:13px; font-weight:600; color:${M}; background:${l};
    padding:7px 13px; border-radius:3px; white-space:nowrap; }
  .rb-ord-photo-label { font-size:13.5px; color:${k}; line-height:1.4; }
  .rb-ord-photo-has { display:flex; align-items:center; gap:13px; padding:11px 13px;
    border:1px solid ${l}; border-radius:4px; background:rgba(200,168,119,.07); }
  .rb-ord-photo-thumb { flex:none; width:46px; height:46px; object-fit:cover; border-radius:3px;
    border:1px solid rgba(238,211,170,.3); }
  .rb-ord-photo-meta { display:flex; flex-direction:column; gap:2px; min-width:0; }
  .rb-ord-photo-name { font-size:13.5px; color:${w}; overflow:hidden; text-overflow:ellipsis;
    white-space:nowrap; }
  .rb-ord-photo-size { font-size:12px; color:${F}; font-variant-numeric:tabular-nums; }
  .rb-ord-photo-clear { margin-left:auto; flex:none; background:none; border:0; cursor:pointer;
    font-family:${B}; font-size:12.5px; color:${k}; padding:10px 6px; text-decoration:underline;
    text-underline-offset:3px; }
  .rb-ord-photo-clear:hover { color:${w}; }
  .rb-ord-photo-clear:focus-visible { outline:2px solid ${l}; outline-offset:2px; border-radius:3px; }
  @media (max-width:520px) {
    /* The button and its sentence stop fitting side by side well before this. */
    .rb-ord-photo-pick { flex-direction:column; align-items:flex-start; gap:9px; }
  }

  /* "What is in it", inside the slip. The form is where a cake is chosen and
     the slip is where it is described, so the layers live here rather than
     floating between two questions. No border of its own: it is already inside
     the slip's frame, and a box inside a box is one line too many. */
  .rb-ord-spec { margin-top:12px; padding-top:12px; border-top:1px solid ${re}; }
  .rb-ord-spec-title { font-size:10.5px; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
    color:${F}; }
  .rb-ord-spec-list { list-style:none; margin:8px 0 0; padding:0; }
  .rb-ord-spec-row { display:flex; align-items:center; gap:9px; padding:4px 0;
    font-size:13px; color:${k}; animation:rb-ord-layerin .34s ${d} both; }
  .rb-ord-spec-dot { flex:none; width:4px; height:4px; border-radius:50%; background:${H};
    transition:background .3s ${d}; }
  .rb-ord-spec-row[data-changed="true"] { color:${w}; }
  .rb-ord-spec-row[data-changed="true"] .rb-ord-spec-dot { background:${l}; }
  @keyframes rb-ord-layerin { from { opacity:0; transform:translateY(-5px); } to { opacity:1; transform:none; } }
  @media (prefers-reduced-motion: reduce) { .rb-ord-spec-row { animation:none; } }
  @media (prefers-reduced-motion: reduce) { .rb-ord-extra { animation:none; } }

  /* text + form fields */
  .rb-ord-field { display:block; margin-top:18px; }
  /* Same flex row as a legend, so the optional tag keeps its gap now that the
     tag itself no longer carries a margin, and wraps left instead of indented. */
  .rb-ord-label { display:flex; align-items:baseline; flex-wrap:wrap; gap:3px 9px;
    font-size:13px; letter-spacing:.02em; color:${z}; margin-bottom:7px; }
  .rb-ord-input, .rb-ord-select, .rb-ord-textarea {
    width:100%; box-sizing:border-box; font-family:${B}; font-size:16px; color:${w};
    background:rgba(11,10,9,.5); border:1px solid ${H}; border-radius:4px; padding:13px 14px;
    transition:border-color .2s ${d}, background .2s ${d}; color-scheme:dark; }
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
  .rb-ord-input::placeholder, .rb-ord-textarea::placeholder { color:${k}; opacity:1; }
  .rb-ord-input:hover, .rb-ord-select:hover, .rb-ord-textarea:hover { border-color:rgba(238,211,170,.3); }
  .rb-ord-input:focus-visible, .rb-ord-select:focus-visible, .rb-ord-textarea:focus-visible {
    outline:2px solid ${l}; outline-offset:2px; border-color:${l}; }
  .rb-ord-input[aria-invalid="true"], .rb-ord-select[aria-invalid="true"] { border-color:#D98A76; }
  .rb-ord-hint { font-size:12.5px; color:${k}; margin-top:6px; line-height:1.45; }
  .rb-ord-err { font-size:12.5px; color:#E8A594; margin-top:6px; line-height:1.45; }
  /* A settled, unchangeable value — shown instead of a pointless one-option
     dropdown when there is only one collection point. Reads as information,
     not as a control the visitor failed to notice they could change. */
  /* The label already carries its own bottom margin; another 13px on top of it
     floated the address away from the thing naming it. */
  .rb-ord-readout { font-family:${B}; font-size:16px; color:${w}; padding:2px 0 0; line-height:1.4; }
  .rb-ord-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* the slip */
  .rb-ord-slip { position:sticky; top:24px; border:1px solid ${H}; border-radius:6px; padding:22px 20px 20px;
    background:linear-gradient(170deg, rgba(243,234,211,.055), rgba(243,234,211,.015));
    box-shadow:0 26px 60px -30px rgba(0,0,0,.8); }
  .rb-ord-slip-title { font-family:${C}; font-size:20px; color:${z}; }
  .rb-ord-slip-rule { height:0; border-bottom:1px dashed rgba(238,211,170,.28); margin:14px 0 4px; }
  .rb-ord-slip-empty { font-size:13.5px; color:${k}; line-height:1.55; margin:12px 0 0; font-style:italic; }
  .rb-ord-slipline { display:flex; align-items:baseline; gap:4px; padding:9px 0; }
  .rb-ord-slipline-name { font-size:14px; color:${w}; }
  .rb-ord-slipline-sub { font-size:12px; color:${F}; display:block; margin-top:2px; }
  .rb-ord-slipline-dots { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.28);
    margin:0 4px; transform:translateY(2px); }
  .rb-ord-slipline-price { font-size:13.5px; color:${l}; white-space:nowrap; font-variant-numeric:tabular-nums; }
  .rb-ord-slipline-price[data-free="true"] { color:${F}; font-size:12px; }
  .rb-ord-total { display:flex; align-items:baseline; gap:4px; margin-top:6px; padding-top:14px;
    border-top:1px solid rgba(238,211,170,.22); }
  .rb-ord-total-label { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:${z}; }
  .rb-ord-total-value { margin-left:auto; font-family:${C}; font-size:27px; color:${l};
    font-variant-numeric:tabular-nums; }
  .rb-ord-slip-note { font-size:12px; color:${k}; margin:12px 0 0; line-height:1.5; }

  /* mobile running total, sticks under the page header, never at the bottom
     (a bottom-fixed bar would collide with the preview chrome) */
  .rb-ord-mobiletotal { display:none; }

  /* motion: each earns its place. line-in confirms a choice registered,
     total-bump signals the price changed, group-in covers the product swap. */
  @keyframes rb-ord-linein { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }
  .rb-ord-slipline { animation:rb-ord-linein .26s ${d} both; }
  @keyframes rb-ord-bump { 0% { transform:none; } 38% { transform:scale(1.07); } 100% { transform:none; } }
  .rb-ord-total-value[data-bump="true"] { animation:rb-ord-bump .34s ${d}; }
  /* A quote is words, not a number, so it must not sit at display size where a
     price belongs. Shrinking it is what stops it reading as an amount. */
  .rb-ord-total-value[data-quote="true"], .rb-ord-mobiletotal-value[data-quote="true"] {
    font-family:${B}; font-size:14px; letter-spacing:.01em; color:${z}; }
  @keyframes rb-ord-groupin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .rb-ord-groups[data-key] { animation:rb-ord-groupin .38s ${d} both; }

  /* sent state */
  .rb-ord-done { border:1px solid ${l}; border-radius:6px; padding:clamp(26px,4vw,40px);
    background:rgba(200,168,119,.07); text-align:center; animation:rb-ord-groupin .4s ${d} both; }
  .rb-ord-done-title { font-family:${C}; font-size:clamp(26px,3.4vw,38px); margin:0;  }
  /* The receipt stub. Two facts, equal weight, one hairline between them, so
     the screen has a shape instead of being five centred paragraphs. */
  .rb-ord-stub { display:flex; margin:22px auto 0; max-width:400px;
    border:1px solid rgba(238,211,170,.26); border-radius:4px; background:rgba(11,10,9,.28); }
  .rb-ord-stub-cell { flex:1 1 0; display:flex; flex-direction:column; gap:5px; align-items:center;
    padding:13px 12px; min-width:0; }
  .rb-ord-stub-cell + .rb-ord-stub-cell { border-left:1px solid rgba(238,211,170,.2); }
  .rb-ord-stub-key { font-size:10.5px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${F}; }
  .rb-ord-stub-val { font-size:15px; color:${w}; font-variant-numeric:tabular-nums;
    letter-spacing:.02em; white-space:nowrap; }
  .rb-ord-stub-val[data-price="true"] { font-family:${C}; font-size:19px; color:${l}; }
  .rb-ord-done-line { font-size:14px; color:${k}; margin:14px auto 0; max-width:44ch; line-height:1.6; }
  .rb-ord-done-line[data-good="true"] { color:${z}; }
  /* The tel link carries tap padding, which reads as a gap in a sentence; pull
     it back so the line stays a line. */
  .rb-ord-done-line .rb-ord-tel { padding:6px 2px; }

  .rb-ord-sample { display:flex; gap:11px; align-items:flex-start; margin-top:20px; padding:12px 15px;
    border:1px dashed rgba(238,211,170,.3); border-radius:4px; background:rgba(243,234,211,.025); }
  .rb-ord-sample svg { flex:none; margin-top:1px; }
  .rb-ord-sample span { font-size:12.5px; color:${k}; line-height:1.5; }

  .rb-ord-submit { width:100%; margin-top:24px; font-family:${B}; font-weight:600; font-size:16px;
    padding:16px 28px; border-radius:4px; border:1px solid ${l}; background:${l}; color:${M};
    cursor:pointer; transition:background .22s ${d}, border-color .22s ${d}, transform .16s ${d}; }
  .rb-ord-submit:hover:not(:disabled) { background:${z}; border-color:${z}; }
  .rb-ord-submit:active:not(:disabled) { transform:scale(.985); }
  .rb-ord-submit:disabled { opacity:.6; cursor:progress; }
  .rb-ord-submit:focus-visible { outline:2px solid ${z}; outline-offset:3px; }
  .rb-ord-errsummary { margin-top:14px; font-size:13.5px; color:#E8A594; text-align:center; }
  /* padded so the phone number clears the 44px tap target on a phone */
  .rb-ord-tel { display:inline-block; padding:13px 10px; color:${z}; text-decoration:none;
    border-bottom:1px solid rgba(238,211,170,.32); }
  .rb-ord-tel:hover { color:${w}; border-bottom-color:${l}; }
  .rb-ord-tel:focus-visible { outline:2px solid ${l}; outline-offset:2px; border-radius:4px; }

  @media (max-width:900px) {
    .rb-ord-grid { grid-template-columns:1fr; gap:0; }
    /* the slip moves below the choices; a slim sticky bar carries the total instead */
    .rb-ord-slipwrap { order:2; margin-top:clamp(28px,4vh,40px); }
    .rb-ord-slip { position:static; }
    .rb-ord-formwrap { order:1; }
    .rb-ord-mobiletotal { display:flex; position:sticky; top:0; z-index:6; align-items:baseline; gap:10px;
      margin:0 calc(clamp(20px,4.5vw,72px) * -1); padding:11px clamp(20px,4.5vw,72px);
      background:rgba(11,10,9,.94); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
      border-bottom:1px solid ${H}; }
    .rb-ord-mobiletotal-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:${F}; }
    .rb-ord-mobiletotal-value { margin-left:auto; font-family:${C}; font-size:19px; color:${l};
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
`,Me=t=>String(t).padStart(2,"0");function gr(t){const m=new Date;return m.setDate(m.getDate()+t),`${m.getFullYear()}-${Me(m.getMonth()+1)}-${Me(m.getDate())}`}const fr={is:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};function Be(t,m){const[L,o,x]=t.split("-").map(Number);if(!L||!o||!x)return t;const S=fr[m][o-1]??"";return m==="is"?`${x}. ${S}`:`${x} ${S}`}const vr={is:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};function Re(t,m){const[L,o,x]=t.split("-").map(Number);return!L||!o||!x?t:`${vr[m][new Date(Date.UTC(L,o-1,x)).getUTCDay()]??""} ${Be(t,m)}`}const yr=(()=>{const t=[];for(let m=420;m<=990;m+=30)t.push(`${String(Math.floor(m/60)).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`);return t})(),Ie=()=>e.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 3.4L3.3 5.7L8 1",stroke:"#131313",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})});function wr({lang:t,standalone:m=!1,initialProductId:L}){const o=He[t],{LINKS:x,ORDER_PRODUCTS:S,OCCASIONS:Q,PICKUP_LOCATIONS:O,hoursRows:ee}=Ae(),[W,We]=p.useState(()=>L&&S.some(r=>r.id===L)?L:S[0].id),s=p.useMemo(()=>S.find(r=>r.id===W)??S[0],[W,S]),[f,Ue]=p.useState("person"),[T,ne]=p.useState(1),[N,de]=p.useState({}),[K,le]=p.useState(""),[V,ce]=p.useState({}),[a,v]=p.useState({name:"",phone:"",email:"",date:"",time:"",location:O[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:Q[0].id,guests:"",handover:"pickup",address:""}),[D,P]=p.useState({}),[ge,fe]=p.useState(!1),[pe,oe]=p.useState("idle"),[Ge,ve]=p.useState(!1),[ae,ye]=p.useState(""),[Ke,Ye]=p.useState(!1),[R,we]=p.useState(null),[te,je]=p.useState(""),[$e,ie]=p.useState(""),J=p.useMemo(()=>gr(s.leadDays),[s.leadDays]);p.useEffect(()=>{de({}),le(""),ce({}),be(),P(r=>{const h={};for(const c of Object.keys(r))c.startsWith("c_")&&(h[c]=r[c]);return h})},[W]),p.useEffect(()=>{v(r=>r.date&&r.date<J?{...r,date:""}:r)},[J]);const Qe=5*1024*1024,Ve=r=>{if(ie(""),!!r){if(!r.type.startsWith("image/"))return ie(o.errPhotoType);if(r.size>Qe)return ie(o.errPhotoSize);we(r),je(h=>(h&&URL.revokeObjectURL(h),URL.createObjectURL(r)))}},be=()=>{je(r=>(r&&URL.revokeObjectURL(r),"")),we(null),ie("")};p.useEffect(()=>()=>{te&&URL.revokeObjectURL(te)},[te]);const ke=(r,h)=>{de(c=>{const u=c[r.id]??[];return r.kind==="single"?{...c,[r.id]:[h]}:u.includes(h)?{...c,[r.id]:u.filter(_=>_!==h)}:r.max&&u.length>=r.max?c:{...c,[r.id]:[...u,h]}}),P(c=>({...c,[`g_${r.id}`]:!0}))},I=p.useMemo(()=>tr(s,N),[s,N]),A=p.useMemo(()=>ir(s,N),[s,N]),Ne=p.useMemo(()=>sr(s,N),[s,N]),_e=p.useMemo(()=>nr(s,N),[s,N]),Je=p.useMemo(()=>S.every(r=>!!r.image),[S]),{lines:ze,total:U}=p.useMemo(()=>{const r=[],h=s.pricePerPerson;let c;h?(c=I?h*I.serves:0,I&&r.push({key:"size",name:I.label[t],sub:`${$(h)} ${o.perPerson}`,price:c})):(c=s.basePrice,r.push({key:"base",name:s.name[t],sub:o.slipBase,price:s.basePrice}));for(const _ of s.groups)if(!(h&&_.id===s.sizeGroupId))for(const X of N[_.id]??[]){const i=_.choices.find(g=>g.id===X);if(!i)continue;c+=i.priceDelta;const j=i.freeText?(V[`${_.id}_${i.id}`]??"").trim():"";r.push({key:`${_.id}_${i.id}`,name:j?`${i.label[t]}: ${j}`:i.label[t],sub:_.label[t],price:i.priceDelta>0?i.priceDelta:null})}const u=K.trim();return u&&s.inscription&&r.push({key:"inscription",name:`“${u}”`,sub:s.inscription.label[t],price:null}),T>1&&r.push({key:"qty",name:o.slipQty(T),sub:`× ${$(c)}`,price:c*T}),{lines:r,total:c*T}},[s,N,K,t,T,o,I,V]),Se=!!s.pricePerPerson&&!I,Pe=A?o.quoteTotal:Se?o.slipPickSize:$(U),Te=A||Se,[he,Ee]=p.useState(!1),Ce=p.useRef(U);p.useEffect(()=>{if(Ce.current===U)return;Ce.current=U,Ee(!0);const r=window.setTimeout(()=>Ee(!1),360);return()=>window.clearTimeout(r)},[U]);const me=p.useMemo(()=>{const r={};for(const c of s.groups)c.required&&(N[c.id]??[]).length===0&&(r[`g_${c.id}`]=c.kind==="single"?o.errRequiredGroup:o.errRequiredMulti);for(const{group:c,choice:u}of dr(s,N))(V[`${c.id}_${u.id}`]??"").trim()||(r[`x_${c.id}_${u.id}`]=o.errFreeText);if(f==="person")a.name.trim()||(r.c_name=o.errName);else{a.company.trim()||(r.c_company=o.errCompany),a.contact.trim()||(r.c_contact=o.errContact);const c=a.kennitala.replace(/[^\d]/g,"");a.kennitala.trim()?c.length!==10&&(r.c_kennitala=o.errKennitalaFormat):r.c_kennitala=o.errKennitala,a.handover==="delivery"&&!a.address.trim()&&(r.c_address=o.errAddress),a.invoiceEmail.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.invoiceEmail.trim())&&(r.c_invoiceEmail=o.errEmail)}const h=a.phone.replace(/[^\d]/g,"");return a.phone.trim()?h.length<7&&(r.c_phone=o.errPhoneFormat):r.c_phone=o.errPhone,a.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim())&&(r.c_email=o.errEmail),a.date?a.date<J&&(r.c_date=o.errDateTooSoon(Be(J,t))):r.c_date=o.errDate,a.time||(r.c_time=o.errTime),r},[s,N,a,J,t,o,f,V]),n=r=>D[r]||ge?me[r]:void 0,Le=p.useRef(null),Xe=async r=>{var Z,Y,q;if(r.preventDefault(),fe(!0),Object.keys(me).length>0){const b=(Z=Le.current)==null?void 0:Z.querySelector('[data-invalid="true"]');b==null||b.scrollIntoView({block:"center",behavior:"smooth"}),b==null||b.focus({preventScroll:!0});return}oe("sending"),ve(!1);const h=`RB-${a.date.slice(5).replace("-","")}-${Math.floor(1e3+Math.random()*9e3)}`;ye(h);const c=((Y=O.find(b=>b.id===a.location))==null?void 0:Y.label.is)??a.location,u=((q=Q.find(b=>b.id===a.occasion))==null?void 0:q.label.is)??a.occasion,_=f==="company"&&a.handover==="delivery",X=`${Re(a.date,"is")}, kl. ${a.time}`,i={_subject:`${h} · ${Re(a.date,"is")} kl. ${a.time} — ${A?"TILBOÐ ÓSKAST — ":""}${s.name.is}${T>1?` (${T} stk.)`:""} — ${f==="company"?a.company:a.name}`,"1. Afhending":X,"2. Vara":`${s.name.is}${T>1?` — ${T} stk.`:""}`,"3. Sótt eða sent":_?`Sent á ${a.address}`:`Sótt í ${c}`},j=[];let g=4;if(i[`${g++}. Pöntunarnúmer`]=h,s.groups.forEach(b=>{const E=(N[b.id]??[]).map(y=>{const G=b.choices.find(rr=>rr.id===y);if(!G)return null;const Oe=G.freeText?(V[`${b.id}_${G.id}`]??"").trim():"",ue=Oe?`${G.label.is}: ${Oe}`:G.label.is;return G.quoteOnly?`${ue} (tilboð)`:G.priceDelta>0?`${ue} (+${$(G.priceDelta)})`:ue}).filter(Boolean);if(E.length){i[`${g++}. ${b.label.is}`]=E.join(", ");const y=!!s.pricePerPerson&&b.id===s.sizeGroupId;j.push({label:b.label.is,value:E.join(", "),note:y&&s.pricePerPerson?`${$(s.pricePerPerson)} á mann`:void 0})}}),s.inscription&&K.trim()&&(i[`${g++}. Áletrun`]=K.trim(),j.push({label:s.inscription.label.is,value:K.trim()})),j.push({label:"Pöntunarnúmer",value:h}),i[`${g++}. Áætlað verð`]=A?"Tilboð óskast, ekkert verð gefið upp á vefnum":`${$(U)}${I?` (${I.serves} manns × ${$(s.pricePerPerson)})`:""}`,Ne){const b=R?`Fylgir þessum pósti sem viðhengi (${R.name})`:`Viðskiptavinur ætlar að senda mynd og vísa í ${h}`;i[`${g++}. Mynd`]=b,j.push({label:"Mynd",value:b})}A&&j.push({label:"Verð",value:"Tilboð óskast"}),i[`${g++}. Sími`]=a.phone,i[`${g++}. Nafn`]=f==="company"?a.contact:a.name,a.email.trim()&&(i[`${g++}. Netfang`]=a.email.trim()),f==="company"&&(i[`${g++}. Fyrirtæki`]=a.company,i[`${g++}. Kennitala`]=a.kennitala,a.invoiceEmail.trim()&&(i[`${g++}. Netfang fyrir reikning`]=a.invoiceEmail.trim()),i[`${g++}. Tilefni`]=u,a.guests.trim()&&(i[`${g++}. Fjöldi gesta`]=a.guests.trim())),a.notes.trim()&&(i[`${g++}. Athugasemdir`]=a.notes.trim()),i[`${g++}. Beiðni send`]=new Date().toLocaleString("is-IS");try{const b=new FormData;b.append("order",JSON.stringify({subject:i._subject,replyTo:a.email.trim()||a.invoiceEmail.trim()||"",mail:{product:s.name.is,quantity:T,pickupWhen:X,pickupWhere:_?`Sent á ${a.address}`:c,customerName:f==="company"?a.contact:a.name,customerPhone:a.phone.trim(),customerEmail:a.email.trim(),company:f==="company"?a.company.trim():"",kennitala:f==="company"?a.kennitala.trim():"",occasion:f==="company"?u:"",message:a.notes.trim(),totalIsk:A?0:U,provisional:qe,options:j}})),R&&b.append("mynd",R,R.name);const E=await fetch(cr,{method:"POST",body:b}),y=await E.json().catch(()=>null);if(!E.ok||!(y!=null&&y.ok)||!y.id)throw new Error(y!=null&&y.reason?String(y.reason):`http-${E.status}`);Ye(!!y.attached),oe("done")}catch{ve(!0),oe("idle")}},Ze=()=>{de({}),le(""),ce({}),be(),ye(""),ne(1),v({name:"",phone:"",email:"",date:"",time:"",location:O[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:Q[0].id,guests:"",handover:"pickup",address:""}),P({}),fe(!1),oe("idle")},er=e.jsxs("div",{className:"rb-ord-slip",children:[e.jsx("div",{className:"rb-ord-slip-title",children:o.slipTitle}),e.jsx("div",{className:"rb-ord-slip-rule","aria-hidden":"true"}),e.jsxs("div",{children:[ze.length===0&&e.jsx("p",{className:"rb-ord-slip-empty",children:o.slipEmpty}),ze.map(r=>e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.name,r.sub&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.sub})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price","data-free":r.price===null,children:r.pending?"":r.price===null?o.included:$(r.price)})]},r.key))]}),_e.length>0&&e.jsxs("div",{className:"rb-ord-spec",children:[e.jsx("div",{className:"rb-ord-spec-title",children:o.specTitle}),e.jsx("ul",{className:"rb-ord-spec-list",children:_e.map(r=>e.jsxs("li",{className:"rb-ord-spec-row","data-changed":r.changed,children:[e.jsx("span",{className:"rb-ord-spec-dot","aria-hidden":"true"}),r.label[t]]},`${r.label.is}_${r.changed}`))})]}),e.jsxs("div",{className:"rb-ord-total",children:[e.jsx("span",{className:"rb-ord-total-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-total-value","data-bump":he,"data-quote":Te,"aria-live":"polite",children:Pe})]}),e.jsx("p",{className:"rb-ord-slip-note",children:A?o.quoteNote:o.slipNote})]});return e.jsxs("section",{id:"order",style:{background:se,padding:m?"clamp(28px,5vh,48px) clamp(20px,4.5vw,72px) clamp(80px,11vh,140px)":"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:xr}}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsxs("div",{style:{borderTop:m?"none":`1px solid ${H}`,paddingTop:m?0:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:l},children:o.kicker}),m?e.jsx("h1",{style:{fontFamily:C,fontWeight:400,fontSize:"clamp(38px,5.4vw,72px)",lineHeight:1.02,margin:"18px 0 0",...xe},children:o.title}):e.jsx("h2",{style:{fontFamily:C,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...xe},children:o.title}),e.jsx("p",{style:{fontSize:16,color:k,margin:"16px 0 0",lineHeight:1.65},children:o.intro}),qe]}),pe==="done"?e.jsxs("div",{className:"rb-ord-done",style:{marginTop:"clamp(30px,4.5vh,46px)"},role:"status",children:[e.jsx("h3",{className:"rb-ord-done-title",style:{...xe},children:o.doneTitle}),e.jsx("p",{style:{fontSize:16,color:w,lineHeight:1.65,margin:"14px auto 0",maxWidth:"46ch"},children:o.doneBody}),e.jsxs("div",{className:"rb-ord-stub",children:[e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:o.refLabel}),e.jsx("span",{className:"rb-ord-stub-val",children:ae||"—"})]}),e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-stub-val","data-price":"true",children:A?o.quoteTotal:$(U)})]})]}),e.jsxs("p",{className:"rb-ord-done-line",children:[ee[t].length===1?o.doneWhen(`${ee[t][0].label.toLowerCase()} ${ee[t][0].value}`):o.doneWhenGeneric," ",o.doneReach," ",e.jsx("a",{href:`tel:${x.phone}`,className:"rb-ord-tel",children:x.phoneLabel})]}),Ne&&(Ke?e.jsx("p",{className:"rb-ord-done-line","data-good":"true",children:o.photoSent}):ae&&e.jsxs("p",{className:"rb-ord-done-line",children:[o.photoHow(ae)," ",e.jsx("a",{href:`mailto:${x.orderEmail}?subject=${encodeURIComponent(ae)}`,className:"rb-ord-tel",children:x.orderEmail})]})),e.jsx("button",{type:"button",className:"rb-ord-submit",style:{width:"auto",marginTop:24},onClick:Ze,children:o.doneAgain})]}):e.jsxs("form",{ref:Le,className:"rb-ord-grid",style:{marginTop:"clamp(24px,3.5vh,36px)"},onSubmit:Xe,noValidate:!0,children:[e.jsxs("div",{className:"rb-ord-formwrap",children:[e.jsxs("div",{className:"rb-ord-mobiletotal",children:[e.jsx("span",{className:"rb-ord-mobiletotal-label",children:o.slipTotal}),e.jsx("span",{className:"rb-ord-mobiletotal-value","data-bump":he,"data-quote":Te,"aria-live":"polite",children:Pe})]}),e.jsxs("div",{className:"rb-ord-step",style:{marginTop:22},children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepWho}),e.jsx("div",{className:"rb-ord-who",role:"radiogroup","aria-label":o.stepWho,children:[{id:"person",name:o.whoPerson,hint:o.whoPersonHint},{id:"company",name:o.whoCompany,hint:o.whoCompanyHint}].map(r=>e.jsxs("label",{className:"rb-ord-wholane","data-on":f===r.id,children:[e.jsx("input",{type:"radio",name:"rb-ord-who",checked:f===r.id,onChange:()=>Ue(r.id)}),e.jsx("span",{className:"rb-ord-wholane-name",children:r.name}),e.jsx("span",{className:"rb-ord-wholane-hint",children:r.hint})]},r.id))}),f==="company"&&e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:o.bigOrderNote})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepProduct}),e.jsx("div",{className:"rb-ord-prods",role:"radiogroup","aria-label":o.stepProduct,children:S.map(r=>e.jsxs("label",{className:"rb-ord-prod","data-on":r.id===W,children:[e.jsx("input",{type:"radio",name:"rb-ord-product",value:r.id,checked:r.id===W,onChange:()=>We(r.id)}),e.jsx("span",{className:"rb-ord-prod-mark","aria-hidden":"true",children:e.jsx(Ie,{})}),Je&&r.image&&e.jsx("span",{className:"rb-ord-prod-pic",children:e.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",width:1400,height:1400})}),e.jsx("span",{className:"rb-ord-prod-name",children:r.name[t]}),e.jsx("span",{className:"rb-ord-prod-from",children:r.pricePerPerson?`${$(r.pricePerPerson)} ${o.perPerson}`:`${t==="is"?"frá":"from"} ${$(r.basePrice)}`})]},r.id))}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:s.blurb[t]})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepOptions}),e.jsxs("div",{className:"rb-ord-groups","data-key":s.id,children:[s.groups.map(r=>{const h=N[r.id]??[],c=!!r.max&&h.length>=r.max,u=n(`g_${r.id}`),_=!!s.pricePerPerson&&r.id===s.sizeGroupId,X=_||r.choices.some(i=>i.priceDelta>0||i.quoteOnly);return e.jsxs("fieldset",{className:"rb-ord-group",children:[e.jsx("legend",{className:"rb-ord-legend",children:e.jsxs("span",{className:"rb-ord-legend-row",children:[e.jsx("span",{className:"rb-ord-legend-text",children:r.label[t]}),e.jsx("span",{className:"rb-ord-tag",children:r.required?o.required:o.optional})]})}),(r.help||r.max)&&e.jsx("p",{className:"rb-ord-help",children:r.help?r.help[t]:o.chooseUpTo(r.max)}),r.layout==="select"?e.jsxs("div",{className:"rb-ord-sizerow",children:[e.jsxs("select",{className:"rb-ord-select rb-ord-sizeselect",value:h[0]??"","data-invalid":u?"true":void 0,"aria-invalid":!!u,"aria-label":r.label[t],"aria-describedby":u?`err_g_${r.id}`:void 0,onChange:i=>ke(r,i.target.value),children:[e.jsx("option",{value:"",disabled:!0,style:{background:M},children:o.sizePrompt}),r.choices.map(i=>{const j=typeof i.serves=="number"&&s.pricePerPerson?s.pricePerPerson*i.serves:null;return e.jsxs("option",{value:i.id,style:{background:M},children:[i.label[t],j!==null?`  ·  ${$(j)}`:""]},i.id)})]}),_&&I&&e.jsxs("div",{className:"rb-ord-sizeprice","aria-live":"polite",children:[e.jsx("span",{className:"rb-ord-sizeprice-num","data-bump":he,children:$(s.pricePerPerson*I.serves)}),e.jsxs("span",{className:"rb-ord-sizeprice-rate",children:[$(s.pricePerPerson)," ",o.perPerson]})]})]}):e.jsx("div",{className:"rb-ord-choices","data-layout":r.layout??"list",children:r.choices.map(i=>{const j=h.includes(i.id),g=!j&&c,Z=_&&typeof i.serves=="number"&&s.pricePerPerson?s.pricePerPerson*i.serves:null,Y=i.freeText,q=`${r.id}_${i.id}`,b=n(`x_${q}`);return e.jsxs("div",{children:[e.jsxs("label",{className:"rb-ord-choice","data-on":j,"data-off":g,children:[e.jsx("input",{type:r.kind==="single"?"radio":"checkbox",name:`rb-ord-${r.id}`,checked:j,disabled:g,"data-invalid":u?"true":void 0,"aria-describedby":u?`err_g_${r.id}`:void 0,onChange:()=>ke(r,i.id)}),e.jsx("span",{className:"rb-ord-mark","data-shape":r.kind==="single"?"round":"box","aria-hidden":"true",children:e.jsx(Ie,{})}),e.jsxs("span",{className:"rb-ord-choice-label",children:[i.label[t],i.note&&e.jsx("span",{className:"rb-ord-choice-note",children:i.note[t]})]}),X&&e.jsx("span",{className:"rb-ord-choice-price","data-free":Z===null&&i.priceDelta===0&&!i.quoteOnly,children:Z!==null?$(Z):i.quoteOnly?o.quoteTotal:i.priceDelta===0?o.included:`+ ${$(i.priceDelta)}`})]}),Y&&j&&e.jsxs("div",{className:"rb-ord-extra",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:`rb-ord-x-${q}`,children:Y.label[t]}),e.jsx("input",{id:`rb-ord-x-${q}`,className:"rb-ord-input",type:"text",maxLength:Y.maxLength,placeholder:Y.placeholder[t],value:V[q]??"","data-invalid":b?"true":void 0,"aria-invalid":!!b,"aria-describedby":b?`err_x_${q}`:void 0,onChange:E=>ce(y=>({...y,[q]:E.target.value})),onBlur:()=>P(E=>({...E,[`x_${q}`]:!0}))}),b&&e.jsx("p",{className:"rb-ord-err",id:`err_x_${q}`,role:"alert",children:b}),i.needsPhoto&&lr&&e.jsxs("div",{className:"rb-ord-photo",children:[R?e.jsxs("div",{className:"rb-ord-photo-has",children:[e.jsx("img",{className:"rb-ord-photo-thumb",src:te,alt:""}),e.jsxs("div",{className:"rb-ord-photo-meta",children:[e.jsx("span",{className:"rb-ord-photo-name",children:R.name}),e.jsx("span",{className:"rb-ord-photo-size",children:R.size<1024*1024?`${Math.max(1,Math.round(R.size/1024))} KB`:`${(R.size/1024/1024).toFixed(1)} MB`})]}),e.jsx("button",{type:"button",className:"rb-ord-photo-clear",onClick:be,children:o.photoRemove})]}):e.jsxs("label",{className:"rb-ord-photo-pick",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:E=>{var y;return Ve(((y=E.target.files)==null?void 0:y[0])??null)}}),e.jsx("span",{className:"rb-ord-photo-cta",children:o.photoCta}),e.jsx("span",{className:"rb-ord-photo-label",children:o.photoLabel})]}),$e?e.jsx("p",{className:"rb-ord-err",role:"alert",children:$e}):e.jsx("p",{className:"rb-ord-hint",children:o.photoHint})]})]})]},i.id)})}),u&&e.jsx("p",{className:"rb-ord-err",id:`err_g_${r.id}`,role:"alert",children:u})]},r.id)}),s.inscription&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-inscription",children:[s.inscription.label[t],e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-inscription",className:"rb-ord-input",type:"text",maxLength:s.inscription.maxLength,placeholder:s.inscription.placeholder[t],value:K,onChange:r=>le(r.target.value)}),e.jsx("p",{className:"rb-ord-hint",children:o.charsLeft(s.inscription.maxLength-K.length)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("span",{className:"rb-ord-label",id:"rb-ord-qty-label",children:o.fieldQty}),e.jsxs("div",{className:"rb-ord-qty",role:"group","aria-labelledby":"rb-ord-qty-label",children:[e.jsx("button",{type:"button",onClick:()=>ne(r=>Math.max(1,r-1)),disabled:T<=1,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:T}),e.jsx("button",{type:"button",onClick:()=>ne(r=>Math.min(99,r+1)),disabled:T>=99,"aria-label":"+",children:"+"})]}),e.jsx("p",{className:"rb-ord-hint",children:o.fieldQtyHint})]})]},s.id)]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:o.stepDetails}),f==="company"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-company",children:o.fieldCompany}),e.jsx("input",{id:"rb-ord-company",className:"rb-ord-input",type:"text",autoComplete:"organization",value:a.company,"data-invalid":n("c_company")?"true":void 0,"aria-invalid":!!n("c_company"),"aria-describedby":n("c_company")?"err_c_company":void 0,onChange:r=>v({...a,company:r.target.value}),onBlur:()=>P({...D,c_company:!0})}),n("c_company")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_company",role:"alert",children:n("c_company")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-kennitala",children:o.fieldKennitala}),e.jsx("input",{id:"rb-ord-kennitala",className:"rb-ord-input",type:"text",inputMode:"numeric",value:a.kennitala,"data-invalid":n("c_kennitala")?"true":void 0,"aria-invalid":!!n("c_kennitala"),"aria-describedby":n("c_kennitala")?"err_c_kennitala":"hint_c_kennitala",onChange:r=>v({...a,kennitala:r.target.value}),onBlur:()=>P({...D,c_kennitala:!0})}),n("c_kennitala")?e.jsx("p",{className:"rb-ord-err",id:"err_c_kennitala",role:"alert",children:n("c_kennitala")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_kennitala",children:o.fieldKennitalaHint})]})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-occasion",children:o.fieldOccasion}),e.jsx("select",{id:"rb-ord-occasion",className:"rb-ord-select",value:a.occasion,onChange:r=>v({...a,occasion:r.target.value}),children:Q.map(r=>e.jsx("option",{value:r.id,style:{background:M},children:r.label[t]},r.id))})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-guests",children:o.fieldGuests}),e.jsx("input",{id:"rb-ord-guests",className:"rb-ord-input",type:"number",inputMode:"numeric",min:1,value:a.guests,"aria-describedby":"hint_c_guests",onChange:r=>v({...a,guests:r.target.value})}),e.jsx("p",{className:"rb-ord-hint",id:"hint_c_guests",children:o.fieldGuestsHint})]})]})]}),e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[f==="person"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-name",children:o.fieldName}),e.jsx("input",{id:"rb-ord-name",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.name,"data-invalid":n("c_name")?"true":void 0,"aria-invalid":!!n("c_name"),"aria-describedby":n("c_name")?"err_c_name":void 0,onChange:r=>v({...a,name:r.target.value}),onBlur:()=>P({...D,c_name:!0})}),n("c_name")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_name",role:"alert",children:n("c_name")})]}):e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-contact",children:o.fieldContact}),e.jsx("input",{id:"rb-ord-contact",className:"rb-ord-input",type:"text",autoComplete:"name",value:a.contact,"data-invalid":n("c_contact")?"true":void 0,"aria-invalid":!!n("c_contact"),"aria-describedby":n("c_contact")?"err_c_contact":void 0,onChange:r=>v({...a,contact:r.target.value}),onBlur:()=>P({...D,c_contact:!0})}),n("c_contact")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_contact",role:"alert",children:n("c_contact")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-phone",children:o.fieldPhone}),e.jsx("input",{id:"rb-ord-phone",className:"rb-ord-input",type:"tel",inputMode:"tel",autoComplete:"tel",value:a.phone,"data-invalid":n("c_phone")?"true":void 0,"aria-invalid":!!n("c_phone"),"aria-describedby":n("c_phone")?"err_c_phone":void 0,onChange:r=>v({...a,phone:r.target.value}),onBlur:()=>P({...D,c_phone:!0})}),n("c_phone")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_phone",role:"alert",children:n("c_phone")})]})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-email",children:o.fieldEmail}),e.jsx("input",{id:"rb-ord-email",className:"rb-ord-input",type:"email",inputMode:"email",autoComplete:"email",value:a.email,"data-invalid":n("c_email")?"true":void 0,"aria-invalid":!!n("c_email"),"aria-describedby":n("c_email")?"err_c_email":"hint_c_email",onChange:r=>v({...a,email:r.target.value}),onBlur:()=>P({...D,c_email:!0})}),n("c_email")?e.jsx("p",{className:"rb-ord-err",id:"err_c_email",role:"alert",children:n("c_email")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_email",children:o.fieldEmailHelp})]}),f==="company"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-invoice-email",children:[o.fieldInvoiceEmail,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("input",{id:"rb-ord-invoice-email",className:"rb-ord-input",type:"email",inputMode:"email",value:a.invoiceEmail,"data-invalid":n("c_invoiceEmail")?"true":void 0,"aria-invalid":!!n("c_invoiceEmail"),"aria-describedby":n("c_invoiceEmail")?"err_c_invoiceEmail":"hint_c_invoiceEmail",onChange:r=>v({...a,invoiceEmail:r.target.value}),onBlur:()=>P({...D,c_invoiceEmail:!0})}),n("c_invoiceEmail")?e.jsx("p",{className:"rb-ord-err",id:"err_c_invoiceEmail",role:"alert",children:n("c_invoiceEmail")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_invoiceEmail",children:o.fieldInvoiceEmailHint})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-date",children:o.fieldDate}),e.jsx("input",{id:"rb-ord-date",className:"rb-ord-input",type:"date",min:J,value:a.date,"data-invalid":n("c_date")?"true":void 0,"aria-invalid":!!n("c_date"),"aria-describedby":n("c_date")?"err_c_date":"hint_c_date",onChange:r=>v({...a,date:r.target.value}),onBlur:()=>P({...D,c_date:!0})}),n("c_date")?e.jsx("p",{className:"rb-ord-err",id:"err_c_date",role:"alert",children:n("c_date")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_date",children:o.fieldDateHelp(s.leadDays)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-time",children:o.fieldTime}),e.jsxs("select",{id:"rb-ord-time",className:"rb-ord-select",value:a.time,"data-invalid":n("c_time")?"true":void 0,"aria-invalid":!!n("c_time"),"aria-describedby":n("c_time")?"err_c_time":"hint_c_time",onChange:r=>v({...a,time:r.target.value}),onBlur:()=>P({...D,c_time:!0}),children:[e.jsx("option",{value:"",children:o.fieldTimePlaceholder}),yr.map(r=>e.jsx("option",{value:r,children:r},r))]}),n("c_time")?e.jsx("p",{className:"rb-ord-err",id:"err_c_time",role:"alert",children:n("c_time")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_time",children:o.fieldTimeHelp})]})]}),e.jsx("div",{className:"rb-ord-two",children:f==="company"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-handover",children:o.fieldHandover}),e.jsxs("select",{id:"rb-ord-handover",className:"rb-ord-select",value:a.handover,onChange:r=>v({...a,handover:r.target.value}),children:[e.jsx("option",{value:"pickup",style:{background:M},children:o.handoverPickup}),e.jsx("option",{value:"delivery",style:{background:M},children:o.handoverDelivery})]})]}):e.jsx("div",{className:"rb-ord-field",children:O.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location",className:"rb-ord-select",value:a.location,onChange:r=>v({...a,location:r.target.value}),children:O.map(r=>e.jsx("option",{value:r.id,style:{background:M},children:r.label[t]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:o.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:O[0].label[t]})]})})}),f==="company"&&a.handover==="pickup"&&e.jsx("div",{className:"rb-ord-field",children:O.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location-co",children:o.fieldLocation}),e.jsx("select",{id:"rb-ord-location-co",className:"rb-ord-select",value:a.location,onChange:r=>v({...a,location:r.target.value}),children:O.map(r=>e.jsx("option",{value:r.id,style:{background:M},children:r.label[t]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:o.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:O[0].label[t]})]})}),f==="company"&&a.handover==="delivery"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-address",children:o.fieldAddress}),e.jsx("input",{id:"rb-ord-address",className:"rb-ord-input",type:"text",autoComplete:"street-address",value:a.address,"data-invalid":n("c_address")?"true":void 0,"aria-invalid":!!n("c_address"),"aria-describedby":n("c_address")?"err_c_address":"hint_c_address",onChange:r=>v({...a,address:r.target.value}),onBlur:()=>P({...D,c_address:!0})}),n("c_address")?e.jsx("p",{className:"rb-ord-err",id:"err_c_address",role:"alert",children:n("c_address")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_address",children:o.fieldAddressHint})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-notes",children:[o.fieldNotes,e.jsx("span",{className:"rb-ord-tag",children:o.optional})]}),e.jsx("textarea",{id:"rb-ord-notes",className:"rb-ord-textarea",placeholder:o.fieldNotesPlaceholder,value:a.notes,onChange:r=>v({...a,notes:r.target.value})})]}),e.jsx("button",{type:"submit",className:"rb-ord-submit",disabled:pe==="sending",children:pe==="sending"?`${o.submitting}...`:A?o.submitQuote:o.submit}),ge&&Object.keys(me).length>0&&e.jsx("p",{className:"rb-ord-errsummary",role:"alert",children:o.errSummary}),Ge&&e.jsxs("p",{className:"rb-ord-errsummary",role:"alert",children:[t==="is"?"Ekki tókst að senda pöntunina. Vinsamlegast hringdu í ":"We could not send that order. Please call us on ",e.jsx("a",{href:`tel:${x.phone}`,className:"rb-ord-tel",children:x.phoneLabel}),t==="is"?" og við klárum hana með þér.":" and we will take it down for you."]}),e.jsxs("p",{className:"rb-ord-hint",style:{textAlign:"center",marginTop:4},children:[t==="is"?"Eða hringdu í ":"Or call us on ",e.jsx("a",{href:`tel:${x.phone}`,className:"rb-ord-tel",children:x.phoneLabel})]})]})]}),e.jsx("div",{className:"rb-ord-slipwrap",children:er})]})]})]})}const jr=`
  /* Safari 26 tints its chrome from body's background-color (theme-color is
     ignored since Liquid Glass) — without this the status-bar strip is WHITE
     on this ink-dark page. See [[ios-safe-area-chrome-color]]. */
  html, body { background-color:${se}; }
  .rb-op ::selection { background:#5C1C1F; color:${w}; }
  .rb-op a:focus-visible, .rb-op button:focus-visible {
    outline:2px solid ${l}; outline-offset:3px; border-radius:4px; }

  .rb-op-bar { display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:calc(18px + env(safe-area-inset-top, 0px)) clamp(20px,4.5vw,72px) 18px; border-bottom:1px solid ${re}; }
  .rb-op-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${B}; font-size:14px; color:${k}; padding:11px 0;
    transition:color .2s ${d}; }
  .rb-op-back:hover { color:${z}; }
  .rb-op-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${B}; font-size:13px; letter-spacing:.08em; color:${F};
    transition:color .2s ${d}; border-radius:4px; }
  .rb-op-lang[aria-pressed="true"] { color:${z}; }
  .rb-op-lang:hover { color:${w}; }

  .rb-op-foot { border-top:1px solid ${re}; padding:36px clamp(20px,4.5vw,72px) 56px;
    background:${M}; }
  .rb-op-foot-grid { max-width:1180px; margin:0 auto; display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:26px; }
  .rb-op-foot-label { font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${l}; }
  .rb-op-foot-body { font-size:14px; color:${k}; line-height:1.65; margin:9px 0 0; }
  .rb-op-foot-body a { color:${z}; text-decoration:none; }
  .rb-op-foot-body a:hover { color:${w}; }

  @media (max-width:520px) {
    .rb-op-bar { padding:14px clamp(20px,4.5vw,72px); }
    .rb-op-bar img { width:104px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-op-back, .rb-op-lang { transition:none; }
  }
`;function $r(){const[t,m]=br(),L=mr[t],o=He[t],{LINKS:x,hoursRows:S,mainName:Q}=Ae(),[O]=or(),ee=O.get("vara")??void 0;return p.useEffect(()=>{ar(se)},[]),e.jsxs("div",{className:"rb-op",lang:t,style:{fontFamily:B,color:w,background:se,minHeight:"100svh",overflowX:"clip",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:jr}}),e.jsxs("header",{className:"rb-op-bar",children:[e.jsx(De,{to:Fe,"aria-label":o.backToSite,children:e.jsx("img",{src:hr,alt:"Reynir bakari",width:124,height:54,decoding:"async",style:{width:124,height:"auto",display:"block"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:22},children:[e.jsxs(De,{to:Fe,className:"rb-op-back",children:[e.jsx("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5.5 1L1 5.5L5.5 10M1 5.5H12.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),o.backToSite]}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-op-lang","aria-pressed":t==="en",onClick:()=>m("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:F,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-op-lang","aria-pressed":t==="is",onClick:()=>m("is"),children:"ÍS"})]})]})]}),e.jsx(wr,{lang:t,standalone:!0,initialProductId:ee}),e.jsx("footer",{className:"rb-op-foot",children:e.jsxs("div",{className:"rb-op-foot-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:L.mainLabel}),e.jsxs("p",{className:"rb-op-foot-body",children:[Q,e.jsx("br",{}),S[t].map(W=>`${W.label} ${W.value}`).join(" · ")]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:L.rowPhone}),e.jsxs("p",{className:"rb-op-foot-body",children:[e.jsx("a",{href:`tel:${x.phone}`,children:x.phoneLabel}),e.jsx("br",{}),e.jsx("a",{href:`mailto:${x.orderEmail}`,children:x.orderEmail})]})]})]})}),e.jsx(ur,{})]})}function zr(){return e.jsx(pr,{children:e.jsx($r,{})})}export{zr as default};
