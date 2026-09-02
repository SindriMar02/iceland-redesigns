import{r as b,j as e,c as Gr,s as Qr,L as yr}from"./index-Ch78y0J9.js";import{u as zr,w as Vr,x as Yr,y as Jr,z as Xr,J as Zr,K as Ce,O as Tr,i as m,N as et,Q as rt,V as B,R as $e,U as Ue,I as me,H as q,G as p,D,b as j,k as be,F as P,d as _,E as c,a as N,h as I,B as re,W as wr,e as Ke,f as tt,c as jr,X as ot,Y as at,S as it,g as st,Z as kr,L as nt,T as dt,v as lt}from"./useLang-5sb_3jiD.js";import"./image-url.umd-KHPwOYRK.js";const ct=`
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
    margin-top:26px; padding:16px 18px; border:1px solid ${be}; border-radius:4px;
    background:rgba(243,234,211,.02); }
  .rb-ord-ctx-field { display:flex; flex-direction:column; gap:8px; }
  .rb-ord-ctx-label { font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
    color:${P}; }
  /* The bar is a slimmer register than the form below it, so both of its
     controls sit at 44px — previously the select was 52 and the toggle 42,
     side by side, which is most of why it read as broken. */
  /* The height comes from PADDING, never from a fixed height.
     Two goes at this were wrong. line-height:44px made Chrome render the
     closed value as sliced fragments — the "dots". Replacing it with
     height:44px + zero vertical padding still clipped the ascenders, because
     an appearance:none select does not centre its text inside a forced box;
     it lays the text out from the top of the content area and the fixed
     height crops it. Letting padding define the height removes the box that
     was doing the cropping: 9 + 24 line + 9 + 2 border lands at 44px, the
     same height as the toggle beside it, with the text sitting naturally. */
  /* Two classes deep on purpose: this block sits ABOVE the shared
     .rb-ord-input/.rb-ord-select rule in the stylesheet, so a single class
     loses the cascade to it and the padding here was being ignored. */
  .rb-ord-select.rb-ord-ctx-select { min-width:210px; height:auto; padding:9px 38px 9px 14px; }
  .rb-ord-seg { display:inline-flex; border:1px solid ${q}; border-radius:4px; overflow:hidden; }
  .rb-ord-seg label { position:relative; }
  .rb-ord-seg label + label { border-left:1px solid ${q}; }
  .rb-ord-seg input { position:absolute; inset:0; opacity:0; cursor:pointer; }
  .rb-ord-seg span { display:flex; align-items:center; height:42px; padding:0 18px; font-size:13.5px;
    color:${_}; transition:background .2s ${c}, color .2s ${c}; }
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
  .rb-ord-wholane-name { font-family:${D}; font-size:18px; color:${N}; line-height:1.2; }
  .rb-ord-wholane[data-on="true"] .rb-ord-wholane-name { color:${j}; }
  .rb-ord-wholane-hint { font-size:12.5px; color:${_}; line-height:1.45; }

  /* quantity stepper */
  .rb-ord-qty { display:flex; align-items:center; gap:0; margin-top:8px;
    border:1px solid ${q}; border-radius:4px; width:max-content; }
  .rb-ord-qty button { width:46px; height:46px; background:none; border:0; cursor:pointer; color:${N};
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
  /* A compact dock of cards side by side — not four posters.
     These were square-photo cards at a third of the row: in the order form's
     column four of them stacked 2x2 and ran close to a thousand pixels, a
     whole screen of pictures before the first question. The photo is now a
     shallow 5:3 band capped in height, the padding is tighter and the type a
     step down, so all four sit in one row and stay comparable at a glance. */
  .rb-ord-prods { display:grid; gap:10px; margin-top:16px;
    grid-template-columns:repeat(var(--prod-cols,4), minmax(0,1fr)); }
  /* The photograph IS the card. Name and price used to sit in a dark block
     beneath a letterboxed photo, which gave the picture a third of the card
     and a hard edge across the middle of it. Now the image fills the whole
     tile and the text rides on a scrim over its foot, so the cake is what you
     see and the words stay legible on top of it. */
  .rb-ord-prod { position:relative; display:block; aspect-ratio:4 / 5; text-align:left; cursor:pointer;
    padding:0; border:1px solid ${q}; border-radius:4px; background:${I};
    overflow:hidden;
    transition:border-color .22s ${c}, transform .16s ${c}; }
  /* Product photo. The card is built so this can be absent — a product added
     in the CMS before its picture exists simply renders the text card. */
  .rb-ord-prod-pic { position:absolute; inset:0; margin:0; overflow:hidden; background:${I}; }
  /* The scrim lives on the picture, so a product with no photo simply has no
     scrim and its text still reads on the card's own ground. */
  .rb-ord-prod-pic::after { content:''; position:absolute; inset:0; pointer-events:none;
    background:linear-gradient(180deg, rgba(11,10,9,0) 38%, rgba(11,10,9,.62) 68%, rgba(11,10,9,.93) 100%); }
  .rb-ord-prod-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.94); transition:transform .5s ${c}, filter .35s ${c}; }
  .rb-ord-prod:hover .rb-ord-prod-pic img { transform:scale(1.04); filter:saturate(1) brightness(1); }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-pic img { filter:saturate(1) brightness(1); }
  .rb-ord-prod:hover { border-color:rgba(238,211,170,.4); }
  .rb-ord-prod:active { transform:scale(.99); }
  .rb-ord-prod[data-on="true"] { border-color:${p}; }
  .rb-ord-prod-name { position:absolute; z-index:2; left:12px; right:12px; bottom:26px;
    font-family:${D}; font-size:16.5px; line-height:1.15; color:${N}; }
  .rb-ord-prod[data-on="true"] .rb-ord-prod-name { color:${j}; }
  .rb-ord-prod-from { position:absolute; z-index:2; left:12px; right:12px; bottom:9px;
    font-size:12.5px; color:${_}; font-variant-numeric:tabular-nums; }
  /* z-index is load-bearing, not decoration: the product photo carries a
     filter, which gives it its own stacking context, and a stacking context
     with z-index:auto paints in the positioned layer in DOM order — putting
     the later <img> on top of this earlier absolute mark and hiding the
     selected state entirely. The ring behind it keeps the mark legible over
     a photograph rather than only over the dark card. */
  .rb-ord-prod-mark { position:absolute; z-index:2; top:10px; right:10px; width:17px; height:17px; border-radius:50%;
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
  .rb-ord-legend { padding:0; width:100%; font-family:${D}; font-size:clamp(19px,2vw,23px); color:${N}; }
  /* The tag is pinned to the top RIGHT of the question, never set inline after
     it. Inline, it sat beside short headings and dropped onto its own line
     under long ones, so half the questions looked one way and half the other
     and the long ones ended with a stray word. Pinned, every question reads
     identically however the heading wraps. */
  .rb-ord-legend-row { display:flex; align-items:baseline; justify-content:space-between;
    gap:14px; width:100%; }
  .rb-ord-legend-text { flex:1 1 auto; min-width:0; }
  .rb-ord-tag { flex:none; }
  .rb-ord-help { font-size:13.5px; color:${_}; margin:6px 0 0; line-height:1.5; }
  .rb-ord-tag { font-family:${re}; font-size:10.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:${P}; white-space:nowrap; }

  .rb-ord-choices { display:grid; gap:8px; margin-top:14px; }
  .rb-ord-choice { position:relative; display:flex; align-items:baseline; gap:10px; cursor:pointer;
    min-height:48px; padding:12px 15px; border:1px solid ${be}; border-radius:4px;
    transition:border-color .2s ${c}, background .2s ${c}, transform .14s ${c}; }
  .rb-ord-choice:hover { border-color:rgba(238,211,170,.32); background:rgba(243,234,211,.03); }
  .rb-ord-choice:active { transform:scale(.995); }
  .rb-ord-choice[data-on="true"] { border-color:${p}; background:rgba(200,168,119,.08); }
  .rb-ord-choice[data-off="true"] { opacity:.42; cursor:not-allowed; }
  .rb-ord-choice[data-off="true"]:hover { border-color:${be}; background:transparent; }
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
  .rb-ord-choice-label { color:${N}; font-size:15.5px; line-height:1.4; }
  .rb-ord-choice-note { display:block; font-size:12.5px; color:${_}; margin-top:4px; line-height:1.45; }
  .rb-ord-choice-price { margin-left:auto; padding-left:12px; font-size:14px; color:${p}; white-space:nowrap;
    font-variant-numeric:tabular-nums; }
  .rb-ord-choice-price[data-free="true"] { color:${P}; font-size:12.5px; }

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
  .rb-ord-sizeprice-rate { font-size:12.5px; color:${P}; letter-spacing:.02em; white-space:nowrap; }
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
  .rb-ord-photo-cta { flex:none; font-size:13px; font-weight:600; color:${I}; background:${p};
    padding:7px 13px; border-radius:3px; white-space:nowrap; }
  .rb-ord-photo-label { font-size:13.5px; color:${_}; line-height:1.4; }
  .rb-ord-photo-has { display:flex; align-items:center; gap:13px; padding:11px 13px;
    border:1px solid ${p}; border-radius:4px; background:rgba(200,168,119,.07); }
  .rb-ord-photo-thumb { flex:none; width:46px; height:46px; object-fit:cover; border-radius:3px;
    border:1px solid rgba(238,211,170,.3); }
  .rb-ord-photo-meta { display:flex; flex-direction:column; gap:2px; min-width:0; }
  .rb-ord-photo-name { font-size:13.5px; color:${N}; overflow:hidden; text-overflow:ellipsis;
    white-space:nowrap; }
  .rb-ord-photo-size { font-size:12px; color:${P}; font-variant-numeric:tabular-nums; }
  .rb-ord-photo-clear { margin-left:auto; flex:none; background:none; border:0; cursor:pointer;
    font-family:${re}; font-size:12.5px; color:${_}; padding:10px 6px; text-decoration:underline;
    text-underline-offset:3px; }
  .rb-ord-photo-clear:hover { color:${N}; }
  .rb-ord-photo-clear:focus-visible { outline:2px solid ${p}; outline-offset:2px; border-radius:3px; }
  @media (max-width:520px) {
    /* The button and its sentence stop fitting side by side well before this. */
    .rb-ord-photo-pick { flex-direction:column; align-items:flex-start; gap:9px; }
  }

  /* "What is in it", inside the slip. The form is where a cake is chosen and
     the slip is where it is described, so the layers live here rather than
     floating between two questions. No border of its own: it is already inside
     the slip's frame, and a box inside a box is one line too many. */
  .rb-ord-spec { margin-top:12px; padding-top:12px; border-top:1px solid ${be}; }
  .rb-ord-spec-title { font-size:10.5px; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
    color:${P}; }
  .rb-ord-spec-list { list-style:none; margin:8px 0 0; padding:0; }
  .rb-ord-spec-row { display:flex; align-items:center; gap:9px; padding:4px 0;
    font-size:13px; color:${_}; animation:rb-ord-layerin .34s ${c} both; }
  .rb-ord-spec-dot { flex:none; width:4px; height:4px; border-radius:50%; background:${q};
    transition:background .3s ${c}; }
  .rb-ord-spec-row[data-changed="true"] { color:${N}; }
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
    width:100%; box-sizing:border-box; font-family:${re}; font-size:16px; color:${N};
    background:rgba(11,10,9,.5); border:1px solid ${q}; border-radius:4px; padding:13px 14px;
    transition:border-color .2s ${c}, background .2s ${c}; color-scheme:dark; }
  .rb-ord-textarea { min-height:92px; resize:vertical; line-height:1.55; }
  /* Every <select> on this form was rendering the OS's own control — native
     arrow, native chip, none of it this page's language, and glaringly so on
     a near-black ground beside hand-styled inputs and the segmented toggle.
     appearance:none strips it; the chevron is drawn here in the page's gold
     so all three selects (occasion, size, pickup time) match the rest of the
     form. padding-right keeps the longest option off the chevron. */
  .rb-ord-select {
    -webkit-appearance:none; appearance:none; padding-right:38px;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1.25 1.25L5.5 5.5l4.25-4.25' fill='none' stroke='%23C8A877' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat:no-repeat; background-position:right 14px center; }
  .rb-ord-select::-ms-expand { display:none; }
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
  .rb-ord-input::placeholder, .rb-ord-textarea::placeholder { color:${_}; opacity:1; }
  .rb-ord-input:hover, .rb-ord-select:hover, .rb-ord-textarea:hover { border-color:rgba(238,211,170,.3); }
  .rb-ord-input:focus-visible, .rb-ord-select:focus-visible, .rb-ord-textarea:focus-visible {
    outline:2px solid ${p}; outline-offset:2px; border-color:${p}; }
  .rb-ord-input[aria-invalid="true"], .rb-ord-select[aria-invalid="true"] { border-color:#D98A76; }
  .rb-ord-hint { font-size:12.5px; color:${_}; margin-top:6px; line-height:1.45; }
  .rb-ord-err { font-size:12.5px; color:#E8A594; margin-top:6px; line-height:1.45; }
  /* A settled, unchangeable value — shown instead of a pointless one-option
     dropdown when there is only one collection point. Reads as information,
     not as a control the visitor failed to notice they could change. */
  /* The label already carries its own bottom margin; another 13px on top of it
     floated the address away from the thing naming it. */
  .rb-ord-readout { font-family:${re}; font-size:16px; color:${N}; padding:2px 0 0; line-height:1.4; }
  .rb-ord-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* the slip */
  .rb-ord-slip { position:sticky; top:24px; border:1px solid ${q}; border-radius:6px; padding:22px 20px 20px;
    background:linear-gradient(170deg, rgba(243,234,211,.055), rgba(243,234,211,.015));
    box-shadow:0 26px 60px -30px rgba(0,0,0,.8); }
  .rb-ord-slip-title { font-family:${D}; font-size:20px; color:${j}; }
  .rb-ord-slip-rule { height:0; border-bottom:1px dashed rgba(238,211,170,.28); margin:14px 0 4px; }
  .rb-ord-slip-empty { font-size:13.5px; color:${_}; line-height:1.55; margin:12px 0 0; font-style:italic; }
  .rb-ord-slipline { display:flex; align-items:baseline; gap:4px; padding:9px 0; }
  .rb-ord-slipline-name { font-size:14px; color:${N}; }
  .rb-ord-slipline-sub { font-size:12px; color:${P}; display:block; margin-top:2px; }
  .rb-ord-slipline-dots { flex:1; align-self:center; height:0; border-bottom:1.5px dotted rgba(238,211,170,.28);
    margin:0 4px; transform:translateY(2px); }
  .rb-ord-slipline-price { font-size:13.5px; color:${p}; white-space:nowrap; font-variant-numeric:tabular-nums; }
  .rb-ord-slipline-price[data-free="true"] { color:${P}; font-size:12px; }
  .rb-ord-total { display:flex; align-items:baseline; gap:4px; margin-top:6px; padding-top:14px;
    border-top:1px solid rgba(238,211,170,.22); }
  .rb-ord-total-label { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:${j}; }
  .rb-ord-total-value { margin-left:auto; font-family:${D}; font-size:27px; color:${p};
    font-variant-numeric:tabular-nums; }
  .rb-ord-slip-note { font-size:12px; color:${_}; margin:12px 0 0; line-height:1.5; }
  /* ── the basket ── */
  .rb-ord-cake { border-bottom:1px dashed rgba(238,211,170,.18); padding-bottom:6px; margin-bottom:4px; }
  .rb-ord-cakebtns { display:flex; gap:14px; margin:0 0 6px; }
  .rb-ord-cakebtns button { background:none; border:0; padding:0; cursor:pointer; font-size:12px;
    color:${P}; text-decoration:underline; text-underline-offset:3px; }
  .rb-ord-cakebtns button:hover { color:${j}; }
  .rb-ord-cakebtns button:focus-visible { outline:2px solid ${p}; outline-offset:2px; }
  .rb-ord-addcake { display:flex; align-items:center; gap:18px; margin-top:20px; flex-wrap:wrap; }
  .rb-ord-addbtn { padding:12px 22px; background:none; border:1px solid ${q}; border-radius:4px;
    color:${j}; font-size:14px; cursor:pointer;
    transition:border-color .2s ${c}, background .2s ${c}; }
  .rb-ord-addbtn:hover { border-color:${p}; background:rgba(200,168,119,.08); }
  .rb-ord-addbtn:focus-visible { outline:2px solid ${p}; outline-offset:3px; }
  .rb-ord-linkbtn { background:none; border:0; padding:0; cursor:pointer; font-size:13px; color:${P};
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
  /* Same rule as the picker. auto-fill stranded a fourth extra the moment
     the owner adds one, and minmax(0,…) keeps the min-content blow-out fixed
     without needing the min() guard. */
  .rb-ord-extras { display:grid; justify-content:start; gap:10px; margin-top:14px; max-width:640px;
    grid-template-columns:repeat(var(--extra-cols,3), minmax(0,200px)); }
  /* Same rule as the cake cards: the photograph IS the card. The picture used
     to be a shallow band with a dark block of text and a stepper beneath it;
     now it fills the tile and the whole body — name, price, the bulk line and
     the stepper — rides a scrim over its foot. */
  .rb-ord-extra { position:relative; display:block; aspect-ratio:3 / 4; padding:0;
    border:1px solid ${q}; border-radius:4px; background:${me}; overflow:hidden;
    transition:border-color .24s ${c}; }
  .rb-ord-extra[data-on] { border-color:${p}; }
  .rb-ord-extra-pic { position:absolute; inset:0; margin:0; overflow:hidden; background:${me}; }
  .rb-ord-extra-pic::after { content:''; position:absolute; inset:0; pointer-events:none;
    background:linear-gradient(180deg, rgba(11,10,9,0) 26%, rgba(11,10,9,.68) 56%, rgba(11,10,9,.95) 100%); }
  .rb-ord-extra-body { position:absolute; z-index:2; left:12px; right:12px; bottom:10px;
    display:flex; flex-direction:column; gap:3px; }
  .rb-ord-extra-pic img { width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(.96) brightness(.92); transition:transform .55s ${c}, filter .4s ${c}; }
  .rb-ord-extra:hover .rb-ord-extra-pic img { transform:scale(1.045); filter:saturate(1) brightness(1); }
  .rb-ord-extra-name { font-family:${D}; font-size:16.5px; color:${N}; line-height:1.15;
    overflow-wrap:anywhere; }
  .rb-ord-extra-price { font-size:12.5px; color:${P}; font-variant-numeric:tabular-nums; min-height:16px; }
  .rb-ord-extra-price s { opacity:.55; margin-right:4px; }
  .rb-ord-extra-price em { font-style:normal; color:${p}; margin-left:6px; font-size:10.5px;
    text-transform:uppercase; letter-spacing:.08em; }
  .rb-ord-extra-bulk { font-size:11.5px; color:${p}; font-variant-numeric:tabular-nums; min-height:15px; }
  .rb-ord-extra-foot { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:6px; }
  .rb-ord-extra-sum { text-align:right; font-size:13.5px; color:${p}; font-variant-numeric:tabular-nums; }
  .rb-ord-qty[data-small] { margin-top:0; }
  .rb-ord-qty[data-small] button { width:34px; height:34px; }
  .rb-ord-qty[data-small] .rb-ord-qty-val { min-width:30px; font-size:16px; }
  .rb-ord-kjornudge { font-size:12.5px; color:${j}; margin:12px 0 0; line-height:1.5;
    padding:9px 11px; border:1px dashed rgba(200,168,119,.35); border-radius:4px; }
  /* Quieter than the nudge: a standing fact, not a prompt. */
  .rb-ord-kjorinfo { font-size:12px; color:${P}; margin:12px 0 0; line-height:1.5; }

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
    font-family:${re}; font-size:14px; letter-spacing:.01em; color:${j}; }
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
    color:${P}; }
  .rb-ord-stub-val { font-size:15px; color:${N}; font-variant-numeric:tabular-nums;
    letter-spacing:.02em; white-space:nowrap; }
  .rb-ord-stub-val[data-price="true"] { font-family:${D}; font-size:19px; color:${p}; }
  .rb-ord-done-line { font-size:14px; color:${_}; margin:14px auto 0; max-width:44ch; line-height:1.6; }
  .rb-ord-done-line[data-good="true"] { color:${j}; }
  /* The tel link carries tap padding, which reads as a gap in a sentence; pull
     it back so the line stays a line. */
  .rb-ord-done-line .rb-ord-tel { padding:6px 2px; }

  .rb-ord-sample { display:flex; gap:11px; align-items:flex-start; margin-top:20px; padding:12px 15px;
    border:1px dashed rgba(238,211,170,.3); border-radius:4px; background:rgba(243,234,211,.025); }
  .rb-ord-sample svg { flex:none; margin-top:1px; }
  .rb-ord-sample span { font-size:12.5px; color:${_}; line-height:1.5; }

  .rb-ord-submit { width:100%; margin-top:24px; font-family:${re}; font-weight:600; font-size:16px;
    padding:16px 28px; border-radius:4px; border:1px solid ${p}; background:${p}; color:${I};
    cursor:pointer; transition:background .22s ${c}, border-color .22s ${c}, transform .16s ${c}; }
  .rb-ord-submit:hover:not(:disabled) { background:${j}; border-color:${j}; }
  .rb-ord-submit:active:not(:disabled) { transform:scale(.985); }
  .rb-ord-submit:disabled { opacity:.6; cursor:progress; }
  .rb-ord-submit:focus-visible { outline:2px solid ${j}; outline-offset:3px; }
  .rb-ord-errsummary { margin-top:14px; font-size:13.5px; color:#E8A594; text-align:center; }
  /* padded so the phone number clears the 44px tap target on a phone */
  .rb-ord-tel { display:inline-block; padding:13px 10px; color:${j}; text-decoration:none;
    border-bottom:1px solid rgba(238,211,170,.32); }
  .rb-ord-tel:hover { color:${N}; border-bottom-color:${p}; }
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
    .rb-ord-mobiletotal-label { font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:${P}; }
    .rb-ord-mobiletotal-value { margin-left:auto; font-family:${D}; font-size:19px; color:${p};
      font-variant-numeric:tabular-nums; }
    /* Below the dock's usable width the picker becomes a list: a thumbnail
       beside the name says as much at a quarter of the height. */
    .rb-ord-prods { grid-template-columns:minmax(0,1fr); }
    .rb-ord-prod { display:grid; grid-template-columns:auto minmax(0,1fr);
      grid-template-areas:"pic name" "pic from"; align-content:center; row-gap:2px;
      aspect-ratio:auto; }
    .rb-ord-prod-pic { position:static; grid-area:pic; aspect-ratio:1 / 1;
      align-self:center; border-radius:3px; }
    /* No scrim on a 62px thumbnail — the text sits beside it, not on it. */
    .rb-ord-prod-pic::after { display:none; }
    .rb-ord-prod-name { position:static; grid-area:name; align-self:end; }
    .rb-ord-prod-from { position:static; grid-area:from; align-self:start; }
    /* One per row on a phone: two 3:4 tiles side by side left the longer
       names wrapping into a sliver and the steppers cramped. Full width with
       a shallower crop gives the photograph more of the screen, not less. */
    .rb-ord-extras { grid-template-columns:minmax(0,1fr); max-width:none; }
    .rb-ord-extra { aspect-ratio:16 / 10; }
    .rb-ord-extra-body { left:14px; right:14px; bottom:12px; }
    /* On a phone the picker becomes a LIST, not three posters.
       Full-width cards with a letterbox photo came to 849px for three
       products: more than a whole screen of pictures before the customer
       reaches the first question. A thumbnail beside the name says exactly as
       much at a quarter of the height, and choosing between three things you
       can see at once is easier than scrolling past them one at a time.
       Grid areas rather than a wrapper element, so a product with no photo
       still lays out correctly: the column simply collapses. */
    .rb-ord-prod { column-gap:13px; padding:10px 12px; }
    .rb-ord-prod-pic { margin:0; width:62px; height:62px; }
    .rb-ord-prod-name { font-size:17px; padding-right:30px; }
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
`,$r=i=>String(i).padStart(2,"0");function pt(i){const v=new Date;return v.setDate(v.getDate()+i),`${v.getFullYear()}-${$r(v.getMonth()+1)}-${$r(v.getDate())}`}const ht={is:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};function Sr(i,v){const[W,M,t]=i.split("-").map(Number);if(!W||!M||!t)return i;const C=ht[v][M-1]??"";return v==="is"?`${t}. ${C}`:`${t} ${C}`}const bt={is:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};function Nr(i,v){const[W,M,t]=i.split("-").map(Number);return!W||!M||!t?i:`${bt[v][new Date(Date.UTC(W,M-1,t)).getUTCDay()]??""} ${Sr(i,v)}`}const mt=(()=>{const i=[];for(let v=420;v<=990;v+=30)i.push(`${String(Math.floor(v/60)).padStart(2,"0")}:${String(v%60).padStart(2,"0")}`);return i})(),_r=()=>e.jsx("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 3.4L3.3 5.7L8 1",stroke:"#131313",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})});function ut({lang:i,standalone:v=!1,initialProductId:W,initialOccasionId:M}){var xr;const t=Tr[i],{LINKS:C,ORDER_PRODUCTS:H,OCCASIONS:oe,PICKUP_LOCATIONS:U,hoursRows:ue}=zr(),[Q,Ge]=b.useState(()=>W&&H.some(r=>r.id===W)?W:H[0].id),l=b.useMemo(()=>H.find(r=>r.id===Q)??H[0],[Q,H]),[k,Pr]=b.useState("person"),[z,Ne]=b.useState([]),[T,xe]=b.useState(!0),[ne,Qe]=b.useState({}),[Z,ge]=b.useState(1),[E,fe]=b.useState({}),[ve,ye]=b.useState(""),[de,we]=b.useState({}),[o,$]=b.useState({name:"",phone:"",email:"",date:"",time:"",location:U[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:M&&oe.some(r=>r.id===M)?M:"",occasionOther:"",guests:"",handover:"pickup",address:""}),[K,S]=b.useState({}),[Ve,Ye]=b.useState(!1),[Oe,_e]=b.useState("idle"),[Er,Je]=b.useState(!1),[ze,Xe]=b.useState(""),[Cr,Or]=b.useState(!1),[V,Ze]=b.useState(null),[Te,er]=b.useState(""),[rr,Se]=b.useState(""),le=b.useMemo(()=>pt(l.leadDays),[l.leadDays]),tr=b.useRef(z);tr.current=z;const Le=b.useRef(null);b.useEffect(()=>{var r;if(((r=Le.current)==null?void 0:r.product.id)===Q){Le.current=null;return}fe({}),ye(""),we({}),tr.current.some(a=>a.wantsPhoto)||qe(),S(a=>{const d={};for(const h of Object.keys(a))h.startsWith("c_")&&(d[h]=a[h]);return d})},[Q]),b.useEffect(()=>{$(r=>r.date&&r.date<le?{...r,date:""}:r)},[le]);const Lr=5*1024*1024,qr=r=>{if(Se(""),!!r){if(!r.type.startsWith("image/"))return Se(t.errPhotoType);if(r.size>Lr)return Se(t.errPhotoSize);Ze(r),er(a=>(a&&URL.revokeObjectURL(a),URL.createObjectURL(r)))}},qe=()=>{er(r=>(r&&URL.revokeObjectURL(r),"")),Ze(null),Se("")};b.useEffect(()=>()=>{Te&&URL.revokeObjectURL(Te)},[Te]);const or=(r,a)=>{fe(d=>{const h=d[r.id]??[];return r.kind==="single"?{...d,[r.id]:[a]}:h.includes(a)?{...d,[r.id]:h.filter(L=>L!==a)}:r.max&&h.length>=r.max?d:{...d,[r.id]:[...h,a]}}),S(d=>({...d,[`g_${r.id}`]:!0}))},Y=b.useMemo(()=>Vr(l,E),[l,E]),De=b.useMemo(()=>Yr(oe,k),[oe,k]),je=[...z.map(r=>r.product.occasionId),...T?[l.occasionId]:[]],ar=je.length>0&&je[0]&&je.every(r=>r===je[0])?oe.find(r=>r.id===je[0]):void 0,Dr=!ar&&De.length>0,A=ar??De.find(r=>r.id===o.occasion),ke=b.useMemo(()=>Jr(l,E),[l,E]),Re=b.useMemo(()=>Xr(l,E),[l,E]),Fe=z.some(r=>r.wantsPhoto)||T&&Re,ir=b.useMemo(()=>Zr(l,E),[l,E]),Rr=b.useMemo(()=>H.every(r=>!!r.image),[H]),{lines:Ie,total:Me}=b.useMemo(()=>{const r=[],a=l.pricePerPerson,d=!!l.sizeGroupId;let h;d?(h=Y?Ce(l,Y)??0:0,Y&&r.push({key:"size",name:Y.label[i],sub:a?`${m(a)} ${t.perPerson}`:void 0,price:h})):(h=l.basePrice,r.push({key:"base",name:l.name[i],sub:t.slipBase,price:l.basePrice}));for(const G of l.groups)if(!(d&&G.id===l.sizeGroupId))for(const u of E[G.id]??[]){const x=G.choices.find(X=>X.id===u);if(!x)continue;h+=x.priceDelta;const F=x.freeText?(de[`${G.id}_${x.id}`]??"").trim():"";r.push({key:`${G.id}_${x.id}`,name:F?`${x.label[i]}: ${F}`:x.label[i],sub:G.label[i],price:x.priceDelta>0?x.priceDelta:null})}const L=ve.trim();return L&&l.inscription&&r.push({key:"inscription",name:`“${L}”`,sub:l.inscription.label[i],price:null}),Z>1&&r.push({key:"qty",name:t.slipQty(Z),sub:`× ${m(h)}`,price:h*Z}),{lines:r,total:h*Z}},[l,E,ve,i,Z,t,Y,de]),Ae=T&&!!l.sizeGroupId&&!Y,Fr=T&&!ke&&!Ae&&(Y!==null||!l.sizeGroupId),J=z.reduce((r,a)=>r+(a.quote?0:a.total),0)+(Fr?Me:0),R=z.some(r=>r.quote)||T&&ke,O=!R&&J>=B.threshold,Pe=O?Math.round(J*B.discountPct/100):0,Ee=et(ne,O),ae=J-Pe+Ee,sr=R?t.quoteTotal:z.length===0&&Ae&&Ee===0?t.slipPickSize:m(ae),nr=R||z.length===0&&Ae&&Ee===0,[Be,dr]=b.useState(!1),lr=b.useRef(ae);b.useEffect(()=>{if(lr.current===ae)return;lr.current=ae,dr(!0);const r=window.setTimeout(()=>dr(!1),360);return()=>window.clearTimeout(r)},[ae]);const ce=b.useMemo(()=>{const r={};if(!T&&z.length===0&&(r.g_product=t.errNoCake),T){for(const d of l.groups)d.required&&(E[d.id]??[]).length===0&&(r[`g_${d.id}`]=d.kind==="single"?t.errRequiredGroup:t.errRequiredMulti);for(const{group:d,choice:h}of rt(l,E))(de[`${d.id}_${h.id}`]??"").trim()||(r[`x_${d.id}_${h.id}`]=t.errFreeText)}if(A!=null&&A.freeText&&!o.occasionOther.trim()&&(r.occasionOther=t.errOccasionOther),k==="person")o.name.trim()||(r.c_name=t.errName);else{o.company.trim()||(r.c_company=t.errCompany),o.contact.trim()||(r.c_contact=t.errContact);const d=o.kennitala.replace(/[^\d]/g,"");o.kennitala.trim()?d.length!==10&&(r.c_kennitala=t.errKennitalaFormat):r.c_kennitala=t.errKennitala,o.handover==="delivery"&&!o.address.trim()&&(r.c_address=t.errAddress),o.invoiceEmail.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.invoiceEmail.trim())&&(r.c_invoiceEmail=t.errEmail)}const a=o.phone.replace(/[^\d]/g,"");return o.phone.trim()?a.length<7&&(r.c_phone=t.errPhoneFormat):r.c_phone=t.errPhone,o.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email.trim())&&(r.c_email=t.errEmail),o.date?o.date<le&&(r.c_date=t.errDateTooSoon(Sr(le,i))):r.c_date=t.errDate,o.time||(r.c_time=t.errTime),r},[l,E,o,le,i,t,k,de,T,z.length]),s=r=>K[r]||Ve?ce[r]:void 0,cr=b.useMemo(()=>Object.keys(ce).filter(r=>r.startsWith("g_")||r.startsWith("x_")),[ce]),pr=()=>({key:`${Q}-${Date.now()}`,product:l,picked:E,extrasText:de,inscription:ve,qty:Z,lines:Ie,total:Me,quote:ke,wantsPhoto:Re,size:Y}),hr=()=>{fe({}),ye(""),we({}),ge(1)},br=()=>{var r;if(cr.length>0){S(d=>({...d,...Object.fromEntries(cr.map(h=>[h,!0]))}));const a=(r=We.current)==null?void 0:r.querySelector('[data-invalid="true"]');return a==null||a.scrollIntoView({block:"center",behavior:"smooth"}),!1}return Ne(a=>[...a,pr()]),hr(),xe(!1),!0},Ir=()=>{hr(),xe(!1)},Mr=r=>Ne(a=>a.filter(d=>d.key!==r)),Ar=r=>{const a=z.find(d=>d.key===r);a&&(T&&!br()||(Ne(d=>d.filter(h=>h.key!==r)),Le.current=a,Ge(a.product.id),fe(a.picked),we(a.extrasText),ye(a.inscription),ge(a.qty),xe(!0)))},mr=(r,a)=>{const d=$e.find(h=>h.id===r);d&&Qe(h=>{const L=Math.min(d.max,Math.max(0,(h[r]??0)+a*d.step));return{...h,[r]:L}})},We=b.useRef(null),Br=async r=>{var gr,fr;if(r.preventDefault(),Ye(!0),Object.keys(ce).length>0){const n=(gr=We.current)==null?void 0:gr.querySelector('[data-invalid="true"]');n==null||n.scrollIntoView({block:"center",behavior:"smooth"}),n==null||n.focus({preventScroll:!0});return}_e("sending"),Je(!1);const a=`RB-${o.date.slice(5).replace("-","")}-${Math.floor(1e3+Math.random()*9e3)}`;Xe(a);const d=((fr=U.find(n=>n.id===o.location))==null?void 0:fr.label.is)??o.location,h=o.occasionOther.trim(),L=A?A.freeText&&h?`${A.label.is}: ${h}`:A.label.is:"",G=k==="company"&&o.handover==="delivery",u=`${Nr(o.date,"is")}, kl. ${o.time}`,x=[...z,...T?[pr()]:[]],F=x.length>1,X=n=>`${n.product.name.is}${n.size?` (${n.size.label.is})`:""}${n.qty>1?` — ${n.qty} stk.`:""}`,g={_subject:`${a} · ${Nr(o.date,"is")} kl. ${o.time} — ${R?"TILBOÐ ÓSKAST — ":""}${F?`${x.length} kökur: ${x.map(n=>n.product.name.is).join(" + ")}`:X(x[0])} — ${k==="company"?o.company:o.name}`,"1. Afhending":u,"2. Vara":F?x.map(X).join(" + "):X(x[0]),"3. Sótt eða sent":G?`Sent á ${o.address}`:`Sótt í ${d}`},w=[];let f=4;g[`${f++}. Pöntunarnúmer`]=a,x.forEach((n,ee)=>{if(F){const y=`Kaka ${ee+1}: ${X(n)}`;g[`${f++}. ${y}`]=n.quote?"Tilboð óskast":m(n.total),w.push({label:`— ${y}`,value:n.quote?"Tilboð óskast":m(n.total),money:!0})}n.product.groups.forEach(y=>{const se=(n.picked[y.id]??[]).map(he=>{const te=y.choices.find(Kr=>Kr.id===he);if(!te)return null;const vr=te.freeText?(n.extrasText[`${y.id}_${te.id}`]??"").trim():"",He=vr?`${te.label.is}: ${vr}`:te.label.is;return te.quoteOnly?`${He} (tilboð)`:te.priceDelta>0?`${He} (+${m(te.priceDelta)})`:He}).filter(Boolean);if(se.length){g[`${f++}. ${y.label.is}`]=se.join(", ");const he=!!n.product.pricePerPerson&&y.id===n.product.sizeGroupId;w.push({label:y.label.is,value:se.join(", "),note:he&&n.product.pricePerPerson?`${m(n.product.pricePerPerson)} á mann`:void 0})}}),n.product.inscription&&n.inscription.trim()&&(g[`${f++}. Áletrun`]=n.inscription.trim(),w.push({label:n.product.inscription.label.is,value:n.inscription.trim()}))}),w.push({label:"Pöntunarnúmer",value:a}),F&&!R&&(g[`${f++}. Kökur samtals`]=m(J),w.push({label:"Kökur samtals",value:m(J),money:!0})),O&&(g[`${f++}. Veislukjör`]=`−${m(Pe)} (${B.discountPct}% af kökum — TIL VIÐMIÐUNAR, prósenta óstaðfest)`,w.push({label:"Veislukjör",value:`−${m(Pe)} (${B.discountPct}%)`,note:"til viðmiðunar — prósentan er ekki staðfest",money:!0}));const pe=$e.filter(n=>(ne[n.id]??0)>0);for(const n of pe){const ee=ne[n.id]??0,y=Ue(n,ee,O),se=y<n.unitPrice?O?" (veisluverð)":" (magnverð)":"",he=`${ee} stk. á ${m(y)}${se} — ${m(ee*y)}`;g[`${f++}. ${n.label.is}`]=he,w.push({label:n.label.is,value:he,money:!0})}const ie=x[0],Ur=!F&&!O&&pe.length===0&&ie.size&&ie.product.pricePerPerson&&typeof ie.size.serves=="number"?` (${ie.size.serves} manns × ${m(ie.product.pricePerPerson)})`:"";if(g[`${f++}. Áætlað verð`]=R?"Tilboð óskast, ekkert verð gefið upp á vefnum":`${m(ae)}${Ur}`,Fe){const n=V?`Fylgir þessum pósti sem viðhengi (${V.name})`:`Viðskiptavinur ætlar að senda mynd og vísa í ${a}`;g[`${f++}. Mynd`]=n,w.push({label:"Mynd",value:n})}R&&w.push({label:"Verð",value:"Tilboð óskast"}),g[`${f++}. Sími`]=o.phone,g[`${f++}. Nafn`]=k==="company"?o.contact:o.name,o.email.trim()&&(g[`${f++}. Netfang`]=o.email.trim()),k==="company"&&(g[`${f++}. Fyrirtæki`]=o.company,g[`${f++}. Kennitala`]=o.kennitala,o.invoiceEmail.trim()&&(g[`${f++}. Netfang fyrir reikning`]=o.invoiceEmail.trim()),o.guests.trim()&&(g[`${f++}. Fjöldi gesta`]=o.guests.trim()),o.invoiceEmail.trim()&&w.push({label:"Netfang fyrir reikning",value:o.invoiceEmail.trim()}),o.guests.trim()&&w.push({label:"Fjöldi gesta",value:o.guests.trim()})),L&&(g[`${f++}. Tilefni`]=L),o.notes.trim()&&(g[`${f++}. Athugasemdir`]=o.notes.trim()),g[`${f++}. Beiðni send`]=new Date().toLocaleString("is-IS");try{const n=new FormData;n.append("order",JSON.stringify({subject:g._subject,replyTo:o.email.trim()||o.invoiceEmail.trim()||"",mail:{product:F?x.map(se=>se.product.name.is).join(" + "):x[0].product.name.is,quantity:F?1:x[0].qty,pickupWhen:u,pickupWhere:G?`Sent á ${o.address}`:d,customerName:k==="company"?o.contact:o.name,customerPhone:o.phone.trim(),customerEmail:o.email.trim(),company:k==="company"?o.company.trim():"",kennitala:k==="company"?o.kennitala.trim():"",occasion:L,message:o.notes.trim(),totalIsk:R?0:ae,provisional:wr,options:w}})),V&&Fe&&n.append("mynd",V,V.name);const ee=await fetch(at,{method:"POST",body:n}),y=await ee.json().catch(()=>null);if(!ee.ok||!(y!=null&&y.ok)||!y.id)throw new Error(y!=null&&y.reason?String(y.reason):`http-${ee.status}`);Or(!!y.attached),_e("done")}catch{Je(!0),_e("idle")}},Wr=()=>{Ne([]),Qe({}),xe(!0),fe({}),ye(""),we({}),qe(),Xe(""),ge(1),$({name:"",phone:"",email:"",date:"",time:"",location:U[0].id,notes:"",company:"",kennitala:"",contact:"",invoiceEmail:"",occasion:"",occasionOther:"",guests:"",handover:"pickup",address:""}),S({}),Ye(!1),_e("idle")},ur=e.jsxs("div",{className:"rb-ord-photo",children:[V?e.jsxs("div",{className:"rb-ord-photo-has",children:[e.jsx("img",{className:"rb-ord-photo-thumb",src:Te,alt:""}),e.jsxs("div",{className:"rb-ord-photo-meta",children:[e.jsx("span",{className:"rb-ord-photo-name",children:V.name}),e.jsx("span",{className:"rb-ord-photo-size",children:V.size<1024*1024?`${Math.max(1,Math.round(V.size/1024))} KB`:`${(V.size/1024/1024).toFixed(1)} MB`})]}),e.jsx("button",{type:"button",className:"rb-ord-photo-clear",onClick:qe,children:t.photoRemove})]}):e.jsxs("label",{className:"rb-ord-photo-pick",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:r=>{var a;return qr(((a=r.target.files)==null?void 0:a[0])??null)}}),e.jsx("span",{className:"rb-ord-photo-cta",children:t.photoCta}),e.jsx("span",{className:"rb-ord-photo-label",children:t.photoLabel})]}),rr?e.jsx("p",{className:"rb-ord-err",role:"alert",children:rr}):e.jsx("p",{className:"rb-ord-hint",children:t.photoHint})]}),Hr=e.jsxs("div",{className:"rb-ord-slip",children:[e.jsx("div",{className:"rb-ord-slip-title",children:t.slipTitle}),e.jsx("div",{className:"rb-ord-slip-rule","aria-hidden":"true"}),e.jsxs("div",{children:[z.length===0&&Ie.length===0&&e.jsx("p",{className:"rb-ord-slip-empty",children:t.slipEmpty}),z.map(r=>e.jsxs("div",{className:"rb-ord-cake",children:[e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.product.name[i],r.qty>1?` ×${r.qty}`:"",r.size&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.size.label[i]})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:r.quote?t.quoteTotal:m(r.total)})]}),e.jsxs("div",{className:"rb-ord-cakebtns",children:[e.jsx("button",{type:"button",onClick:()=>Ar(r.key),children:t.btnEditCake}),e.jsx("button",{type:"button",onClick:()=>Mr(r.key),children:t.btnRemoveCake})]})]},r.key)),T&&Ie.map(r=>e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.name,r.sub&&e.jsx("span",{className:"rb-ord-slipline-sub",children:r.sub})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price","data-free":r.price===null,children:r.pending?"":r.price===null?t.included:m(r.price)})]},r.key))]}),T&&ir.length>0&&e.jsxs("div",{className:"rb-ord-spec",children:[e.jsx("div",{className:"rb-ord-spec-title",children:t.specTitle}),e.jsx("ul",{className:"rb-ord-spec-list",children:ir.map(r=>e.jsxs("li",{className:"rb-ord-spec-row","data-changed":r.changed,children:[e.jsx("span",{className:"rb-ord-spec-dot","aria-hidden":"true"}),r.label[i]]},`${r.label.is}_${r.changed}`))})]}),O&&!R&&e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[t.kjorLine,e.jsx("span",{className:"rb-ord-slipline-sub",children:t.kjorSub(B.discountPct)})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:m(-Pe)})]}),$e.filter(r=>(ne[r.id]??0)>0).map(r=>{const a=ne[r.id]??0,d=Ue(r,a,O);return e.jsxs("div",{className:"rb-ord-slipline",children:[e.jsxs("span",{className:"rb-ord-slipline-name",children:[r.label[i]," ×",a,d<r.unitPrice&&e.jsx("span",{className:"rb-ord-slipline-sub",children:O?t.extrasKjorTag:t.extrasBulkTag})]}),e.jsx("span",{className:"rb-ord-slipline-dots","aria-hidden":"true"}),e.jsx("span",{className:"rb-ord-slipline-price",children:m(a*d)})]},`extra_${r.id}`)}),e.jsxs("div",{className:"rb-ord-total",children:[e.jsx("span",{className:"rb-ord-total-label",children:t.slipTotal}),e.jsx("span",{className:"rb-ord-total-value","data-bump":Be,"data-quote":nr,"aria-live":"polite",children:sr})]}),!O&&!R&&J>=B.nudgeFrom&&J<B.threshold&&e.jsx("p",{className:"rb-ord-kjornudge",children:t.kjorNudge(m(B.threshold-J),B.discountPct)}),!O&&!R&&J<B.nudgeFrom&&e.jsx("p",{className:"rb-ord-kjorinfo",children:t.kjorRule(m(B.threshold),B.discountPct)}),e.jsx("p",{className:"rb-ord-slip-note",children:R?t.quoteNote:t.slipNote}),R&&J+Ee>0&&e.jsx("p",{className:"rb-ord-slip-note",children:t.kjorQuoteNote})]});return e.jsxs("section",{id:"order",style:{background:me,padding:v?"clamp(28px,5vh,48px) clamp(20px,4.5vw,72px) clamp(80px,11vh,140px)":"clamp(80px,11vh,140px) clamp(20px,4.5vw,72px)"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:ct}}),e.jsxs("div",{style:{maxWidth:1180,margin:"0 auto"},children:[e.jsxs("div",{style:{borderTop:v?"none":`1px solid ${q}`,paddingTop:v?0:16,maxWidth:640},children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,letterSpacing:".24em",textTransform:"uppercase",color:p},children:t.kicker}),v?e.jsx("h1",{style:{fontFamily:D,fontWeight:400,fontSize:"clamp(38px,5.4vw,72px)",lineHeight:1.02,margin:"18px 0 0",...Ke},children:t.title}):e.jsx("h2",{style:{fontFamily:D,fontWeight:400,fontSize:"clamp(34px,4.6vw,62px)",lineHeight:1.03,margin:"18px 0 0",...Ke},children:t.title}),e.jsx("p",{style:{fontSize:16,color:_,margin:"16px 0 0",lineHeight:1.65},children:t.intro}),wr]}),Oe==="done"?e.jsxs("div",{className:"rb-ord-done",style:{marginTop:"clamp(30px,4.5vh,46px)"},role:"status",children:[e.jsx("h3",{className:"rb-ord-done-title",style:{...Ke},children:t.doneTitle}),e.jsx("p",{style:{fontSize:16,color:N,lineHeight:1.65,margin:"14px auto 0",maxWidth:"46ch"},children:t.doneBody}),e.jsxs("div",{className:"rb-ord-stub",children:[e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:t.refLabel}),e.jsx("span",{className:"rb-ord-stub-val",children:ze||"—"})]}),e.jsxs("div",{className:"rb-ord-stub-cell",children:[e.jsx("span",{className:"rb-ord-stub-key",children:t.slipTotal}),e.jsx("span",{className:"rb-ord-stub-val","data-price":"true",children:ke?t.quoteTotal:m(Me)})]})]}),e.jsxs("p",{className:"rb-ord-done-line",children:[ue[i].length===1?t.doneWhen(`${ue[i][0].label.toLowerCase()} ${ue[i][0].value}`):t.doneWhenGeneric," ",t.doneReach," ",e.jsx("a",{href:`tel:${C.phone}`,className:"rb-ord-tel",children:C.phoneLabel})]}),Fe&&(Cr?e.jsx("p",{className:"rb-ord-done-line","data-good":"true",children:t.photoSent}):ze&&e.jsxs("p",{className:"rb-ord-done-line",children:[t.photoHow(ze)," ",e.jsx("a",{href:`mailto:${C.orderEmail}?subject=${encodeURIComponent(ze)}`,className:"rb-ord-tel",children:C.orderEmail})]})),e.jsx("button",{type:"button",className:"rb-ord-submit",style:{width:"auto",marginTop:24},onClick:Wr,children:t.doneAgain})]}):e.jsxs("form",{ref:We,className:"rb-ord-grid",style:{marginTop:"clamp(24px,3.5vh,36px)"},onSubmit:Br,noValidate:!0,children:[e.jsxs("div",{className:"rb-ord-formwrap",children:[e.jsxs("div",{className:"rb-ord-mobiletotal",children:[e.jsx("span",{className:"rb-ord-mobiletotal-label",children:t.slipTotal}),e.jsx("span",{className:"rb-ord-mobiletotal-value","data-bump":Be,"data-quote":nr,"aria-live":"polite",children:sr})]}),e.jsxs("div",{className:"rb-ord-ctx",children:[e.jsxs("div",{className:"rb-ord-ctx-field",children:[e.jsx("span",{className:"rb-ord-ctx-label",children:t.stepWho}),e.jsx("div",{className:"rb-ord-seg",role:"radiogroup","aria-label":t.stepWho,children:[{id:"person",name:t.whoPerson},{id:"company",name:t.whoCompany}].map(r=>e.jsxs("label",{"data-on":k===r.id,children:[e.jsx("input",{type:"radio",name:"rb-ord-who",checked:k===r.id,onChange:()=>Pr(r.id)}),e.jsx("span",{children:r.name})]},r.id))})]}),Dr&&e.jsxs("div",{className:"rb-ord-ctx-field",children:[e.jsxs("label",{className:"rb-ord-ctx-label",htmlFor:"rb-ord-occasion",children:[t.fieldOccasion," · ",t.optional]}),e.jsxs("select",{id:"rb-ord-occasion",className:"rb-ord-select rb-ord-ctx-select",value:o.occasion,onChange:r=>$(a=>({...a,occasion:r.target.value,occasionOther:""})),children:[e.jsx("option",{value:"",style:{background:I},children:t.occasionNone}),De.map(r=>e.jsx("option",{value:r.id,style:{background:I},children:r.label[i]},r.id))]})]}),(A==null?void 0:A.freeText)&&e.jsxs("div",{className:"rb-ord-ctx-field",style:{flex:"1 1 220px"},children:[e.jsx("label",{className:"rb-ord-ctx-label",htmlFor:"rb-ord-occasion-other",children:t.occasionOtherLabel}),e.jsx("input",{id:"rb-ord-occasion-other",className:"rb-ord-input",type:"text",maxLength:90,placeholder:t.occasionOtherPlaceholder,value:o.occasionOther,"data-invalid":s("occasionOther")?"true":void 0,"aria-invalid":!!s("occasionOther"),onChange:r=>$(a=>({...a,occasionOther:r.target.value})),onBlur:()=>S(r=>({...r,occasionOther:!0}))}),s("occasionOther")&&e.jsx("p",{className:"rb-ord-err",role:"alert",children:t.errOccasionOther})]})]}),k==="company"&&e.jsx("p",{className:"rb-ord-help",style:{margin:"10px 0 0"},children:t.bigOrderNote}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"01"}),e.jsx("span",{className:"rb-ord-steplabel",children:t.stepProduct})]}),e.jsx("div",{className:"rb-ord-prods",role:"radiogroup","aria-label":t.stepProduct,style:{"--prod-cols":String(jr(H.length,4))},children:H.map(r=>e.jsxs("label",{className:"rb-ord-prod","data-on":r.id===Q,children:[e.jsx("input",{type:"radio",name:"rb-ord-product",value:r.id,checked:T&&r.id===Q,onChange:()=>{Ge(r.id),xe(!0)}}),e.jsx("span",{className:"rb-ord-prod-mark","aria-hidden":"true",children:e.jsx(_r,{})}),Rr&&r.image&&e.jsx("span",{className:"rb-ord-prod-pic",children:e.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",width:1400,height:1400})}),e.jsx("span",{className:"rb-ord-prod-name",children:r.name[i]}),e.jsx("span",{className:"rb-ord-prod-from",children:r.pricePerPerson?`${m(r.pricePerPerson)} ${t.perPerson}`:`${i==="is"?"frá":"from"} ${m(tt(r))}`})]},r.id))}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:12},children:T?l.blurb[i]:t.pickNextCake}),s("g_product")&&e.jsx("p",{className:"rb-ord-err",role:"alert",children:ce.g_product})]}),T&&e.jsxs("div",{className:"rb-ord-step",children:[e.jsx("div",{className:"rb-ord-steplabel",children:t.stepOptions}),e.jsxs("div",{className:"rb-ord-groups","data-key":l.id,children:[l.groups.map(r=>{const a=E[r.id]??[],d=!!r.max&&a.length>=r.max,h=s(`g_${r.id}`),L=!!l.sizeGroupId&&r.id===l.sizeGroupId,G=L||r.choices.some(u=>u.priceDelta>0||u.quoteOnly);return e.jsxs("fieldset",{className:"rb-ord-group",children:[e.jsx("legend",{className:"rb-ord-legend",children:e.jsxs("span",{className:"rb-ord-legend-row",children:[e.jsx("span",{className:"rb-ord-legend-text",children:r.label[i]}),e.jsx("span",{className:"rb-ord-tag",children:r.required?t.required:t.optional})]})}),(r.help||r.max)&&e.jsx("p",{className:"rb-ord-help",children:r.help?r.help[i]:t.chooseUpTo(r.max)}),r.layout==="select"?e.jsxs("div",{className:"rb-ord-sizerow",children:[e.jsxs("select",{className:"rb-ord-select rb-ord-sizeselect",value:a[0]??"","data-invalid":h?"true":void 0,"aria-invalid":!!h,"aria-label":r.label[i],"aria-describedby":h?`err_g_${r.id}`:void 0,onChange:u=>or(r,u.target.value),children:[e.jsx("option",{value:"",disabled:!0,style:{background:I},children:t.sizePrompt}),r.choices.map(u=>{const x=Ce(l,u);return e.jsxs("option",{value:u.id,style:{background:I},children:[u.label[i],x!==null?`  ·  ${m(x)}`:""]},u.id)})]}),L&&Y&&e.jsxs("div",{className:"rb-ord-sizeprice","aria-live":"polite",children:[e.jsx("span",{className:"rb-ord-sizeprice-num","data-bump":Be,children:m(Ce(l,Y)??0)}),l.pricePerPerson&&e.jsxs("span",{className:"rb-ord-sizeprice-rate",children:[m(l.pricePerPerson)," ",t.perPerson]})]})]}):e.jsx("div",{className:"rb-ord-choices","data-layout":r.layout??"list",children:r.choices.map(u=>{const x=a.includes(u.id),F=!x&&d,X=L?Ce(l,u):null,g=u.freeText,w=`${r.id}_${u.id}`,f=s(`x_${w}`);return e.jsxs("div",{children:[e.jsxs("label",{className:"rb-ord-choice","data-on":x,"data-off":F,children:[e.jsx("input",{type:r.kind==="single"?"radio":"checkbox",name:`rb-ord-${r.id}`,checked:x,disabled:F,"data-invalid":h?"true":void 0,"aria-describedby":h?`err_g_${r.id}`:void 0,onChange:()=>or(r,u.id)}),e.jsx("span",{className:"rb-ord-mark","data-shape":r.kind==="single"?"round":"box","aria-hidden":"true",children:e.jsx(_r,{})}),e.jsxs("span",{className:"rb-ord-choice-label",children:[u.label[i],u.note&&e.jsx("span",{className:"rb-ord-choice-note",children:u.note[i]})]}),G&&e.jsx("span",{className:"rb-ord-choice-price","data-free":X===null&&u.priceDelta===0&&!u.quoteOnly,children:X!==null?m(X):u.quoteOnly?t.quoteTotal:u.priceDelta===0?t.included:`+ ${m(u.priceDelta)}`})]}),g&&x&&e.jsxs("div",{className:"rb-ord-extra",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:`rb-ord-x-${w}`,children:g.label[i]}),e.jsx("input",{id:`rb-ord-x-${w}`,className:"rb-ord-input",type:"text",maxLength:g.maxLength,placeholder:g.placeholder[i],value:de[w]??"","data-invalid":f?"true":void 0,"aria-invalid":!!f,"aria-describedby":f?`err_x_${w}`:void 0,onChange:pe=>we(ie=>({...ie,[w]:pe.target.value})),onBlur:()=>S(pe=>({...pe,[`x_${w}`]:!0}))}),f&&e.jsx("p",{className:"rb-ord-err",id:`err_x_${w}`,role:"alert",children:f}),u.needsPhoto&&ot&&ur]})]},u.id)})}),h&&e.jsx("p",{className:"rb-ord-err",id:`err_g_${r.id}`,role:"alert",children:h})]},r.id)}),l.inscription&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-inscription",children:[l.inscription.label[i],e.jsx("span",{className:"rb-ord-tag",children:t.optional})]}),e.jsx("input",{id:"rb-ord-inscription",className:"rb-ord-input",type:"text",maxLength:l.inscription.maxLength,placeholder:A?((xr=A.suggests)==null?void 0:xr[i])??t.inscriptionNeutral:l.inscription.placeholder[i],value:ve,onChange:r=>ye(r.target.value)}),e.jsx("p",{className:"rb-ord-hint",children:t.charsLeft(l.inscription.maxLength-ve.length)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("span",{className:"rb-ord-label",id:"rb-ord-qty-label",children:t.fieldQty}),e.jsxs("div",{className:"rb-ord-qty",role:"group","aria-labelledby":"rb-ord-qty-label",children:[e.jsx("button",{type:"button",onClick:()=>ge(r=>Math.max(1,r-1)),disabled:Z<=1,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:Z}),e.jsx("button",{type:"button",onClick:()=>ge(r=>Math.min(99,r+1)),disabled:Z>=99,"aria-label":"+",children:"+"})]}),e.jsx("p",{className:"rb-ord-hint",children:t.fieldQtyHint})]}),e.jsxs("div",{className:"rb-ord-addcake",children:[e.jsx("button",{type:"button",className:"rb-ord-addbtn",onClick:br,children:t.addAnother}),z.length>0&&e.jsx("button",{type:"button",className:"rb-ord-linkbtn",onClick:Ir,children:t.cancelDraftCake})]})]},l.id)]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"02"}),e.jsx("span",{className:"rb-ord-steplabel",children:t.stepExtras})]}),e.jsx("p",{className:"rb-ord-help",style:{marginTop:10},children:O?t.extrasKjorIntro:t.extrasIntro}),e.jsx("div",{className:"rb-ord-extras",style:{"--extra-cols":String(jr($e.length))},children:$e.map(r=>{const a=ne[r.id]??0,d=Ue(r,a,O),h=d<r.unitPrice;return e.jsxs("div",{className:"rb-ord-extra","data-on":a>0||void 0,children:[e.jsx("span",{className:"rb-ord-extra-pic",children:e.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",width:480,height:480})}),e.jsxs("span",{className:"rb-ord-extra-body",children:[e.jsx("span",{className:"rb-ord-extra-name",children:r.label[i]}),e.jsx("span",{className:"rb-ord-extra-price",children:h?e.jsxs(e.Fragment,{children:[e.jsx("s",{children:m(r.unitPrice)})," ",m(r.kjorPrice),e.jsx("em",{children:O?t.extrasKjorTag:t.extrasBulkTag})]}):`${m(r.unitPrice)} ${i==="is"?"stk.":"each"}`}),e.jsx("span",{className:"rb-ord-extra-bulk",children:h?" ":t.extrasBulkLine(r.bulkAt,m(r.kjorPrice))}),e.jsxs("span",{className:"rb-ord-extra-foot",children:[e.jsxs("span",{className:"rb-ord-qty","data-small":"true",role:"group","aria-label":r.label[i],children:[e.jsx("button",{type:"button",onClick:()=>mr(r.id,-1),disabled:a<=0,"aria-label":"−",children:"−"}),e.jsx("span",{className:"rb-ord-qty-val","aria-live":"polite",children:a}),e.jsx("button",{type:"button",onClick:()=>mr(r.id,1),disabled:a>=r.max,"aria-label":"+",children:"+"})]}),e.jsx("span",{className:"rb-ord-extra-sum","aria-live":"polite",children:a>0?m(a*d):""})]})]})]},r.id)})})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"03"}),e.jsx("span",{className:"rb-ord-steplabel",children:t.stepWhen})]}),e.jsxs("div",{className:"rb-ord-two",children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-date",children:t.fieldDate}),e.jsx("input",{id:"rb-ord-date",className:"rb-ord-input",type:"date",min:le,value:o.date,"data-invalid":s("c_date")?"true":void 0,"aria-invalid":!!s("c_date"),"aria-describedby":s("c_date")?"err_c_date":"hint_c_date",onChange:r=>$({...o,date:r.target.value}),onBlur:()=>S({...K,c_date:!0})}),s("c_date")?e.jsx("p",{className:"rb-ord-err",id:"err_c_date",role:"alert",children:s("c_date")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_date",children:t.fieldDateHelp(l.leadDays)})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-time",children:t.fieldTime}),e.jsxs("select",{id:"rb-ord-time",className:"rb-ord-select",value:o.time,"data-invalid":s("c_time")?"true":void 0,"aria-invalid":!!s("c_time"),"aria-describedby":s("c_time")?"err_c_time":"hint_c_time",onChange:r=>$({...o,time:r.target.value}),onBlur:()=>S({...K,c_time:!0}),children:[e.jsx("option",{value:"",children:t.fieldTimePlaceholder}),mt.map(r=>e.jsx("option",{value:r,children:r},r))]}),s("c_time")?e.jsx("p",{className:"rb-ord-err",id:"err_c_time",role:"alert",children:s("c_time")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_time",children:t.fieldTimeHelp})]})]}),e.jsx("div",{className:"rb-ord-two",children:k==="company"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-handover",children:t.fieldHandover}),e.jsxs("select",{id:"rb-ord-handover",className:"rb-ord-select",value:o.handover,onChange:r=>$({...o,handover:r.target.value}),children:[e.jsx("option",{value:"pickup",style:{background:I},children:t.handoverPickup}),e.jsx("option",{value:"delivery",style:{background:I},children:t.handoverDelivery})]})]}):e.jsx("div",{className:"rb-ord-field",children:U.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location",children:t.fieldLocation}),e.jsx("select",{id:"rb-ord-location",className:"rb-ord-select",value:o.location,onChange:r=>$({...o,location:r.target.value}),children:U.map(r=>e.jsx("option",{value:r.id,style:{background:I},children:r.label[i]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:t.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:U[0].label[i]})]})})}),k==="company"&&o.handover==="pickup"&&e.jsx("div",{className:"rb-ord-field",children:U.length>1?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-location-co",children:t.fieldLocation}),e.jsx("select",{id:"rb-ord-location-co",className:"rb-ord-select",value:o.location,onChange:r=>$({...o,location:r.target.value}),children:U.map(r=>e.jsx("option",{value:r.id,style:{background:I},children:r.label[i]},r.id))})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rb-ord-label",children:t.fieldLocation}),e.jsx("div",{className:"rb-ord-readout",children:U[0].label[i]})]})}),k==="company"&&o.handover==="delivery"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-address",children:t.fieldAddress}),e.jsx("input",{id:"rb-ord-address",className:"rb-ord-input",type:"text",autoComplete:"street-address",value:o.address,"data-invalid":s("c_address")?"true":void 0,"aria-invalid":!!s("c_address"),"aria-describedby":s("c_address")?"err_c_address":"hint_c_address",onChange:r=>$({...o,address:r.target.value}),onBlur:()=>S({...K,c_address:!0})}),s("c_address")?e.jsx("p",{className:"rb-ord-err",id:"err_c_address",role:"alert",children:s("c_address")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_address",children:t.fieldAddressHint})]})]}),e.jsxs("div",{className:"rb-ord-step",children:[e.jsxs("div",{className:"rb-ord-stephead",children:[e.jsx("span",{className:"rb-ord-stepnum","aria-hidden":"true",children:"04"}),e.jsx("span",{className:"rb-ord-steplabel",children:t.stepDetails})]}),z.some(r=>r.wantsPhoto)&&!(T&&Re)&&e.jsxs("div",{className:"rb-ord-field",style:{marginTop:4},children:[e.jsx("span",{className:"rb-ord-label",children:t.photoLabel}),ur]}),k==="company"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-company",children:t.fieldCompany}),e.jsx("input",{id:"rb-ord-company",className:"rb-ord-input",type:"text",autoComplete:"organization",value:o.company,"data-invalid":s("c_company")?"true":void 0,"aria-invalid":!!s("c_company"),"aria-describedby":s("c_company")?"err_c_company":void 0,onChange:r=>$({...o,company:r.target.value}),onBlur:()=>S({...K,c_company:!0})}),s("c_company")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_company",role:"alert",children:s("c_company")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-kennitala",children:t.fieldKennitala}),e.jsx("input",{id:"rb-ord-kennitala",className:"rb-ord-input",type:"text",inputMode:"numeric",value:o.kennitala,"data-invalid":s("c_kennitala")?"true":void 0,"aria-invalid":!!s("c_kennitala"),"aria-describedby":s("c_kennitala")?"err_c_kennitala":"hint_c_kennitala",onChange:r=>$({...o,kennitala:r.target.value}),onBlur:()=>S({...K,c_kennitala:!0})}),s("c_kennitala")?e.jsx("p",{className:"rb-ord-err",id:"err_c_kennitala",role:"alert",children:s("c_kennitala")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_kennitala",children:t.fieldKennitalaHint})]})]}),e.jsx("div",{className:"rb-ord-two",children:e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-guests",children:t.fieldGuests}),e.jsx("input",{id:"rb-ord-guests",className:"rb-ord-input",type:"number",inputMode:"numeric",min:1,value:o.guests,"aria-describedby":"hint_c_guests",onChange:r=>$({...o,guests:r.target.value})}),e.jsx("p",{className:"rb-ord-hint",id:"hint_c_guests",children:t.fieldGuestsHint})]})})]}),e.jsxs("div",{className:"rb-ord-two",style:{marginTop:4},children:[k==="person"?e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-name",children:t.fieldName}),e.jsx("input",{id:"rb-ord-name",className:"rb-ord-input",type:"text",autoComplete:"name",value:o.name,"data-invalid":s("c_name")?"true":void 0,"aria-invalid":!!s("c_name"),"aria-describedby":s("c_name")?"err_c_name":void 0,onChange:r=>$({...o,name:r.target.value}),onBlur:()=>S({...K,c_name:!0})}),s("c_name")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_name",role:"alert",children:s("c_name")})]}):e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-contact",children:t.fieldContact}),e.jsx("input",{id:"rb-ord-contact",className:"rb-ord-input",type:"text",autoComplete:"name",value:o.contact,"data-invalid":s("c_contact")?"true":void 0,"aria-invalid":!!s("c_contact"),"aria-describedby":s("c_contact")?"err_c_contact":void 0,onChange:r=>$({...o,contact:r.target.value}),onBlur:()=>S({...K,c_contact:!0})}),s("c_contact")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_contact",role:"alert",children:s("c_contact")})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-phone",children:t.fieldPhone}),e.jsx("input",{id:"rb-ord-phone",className:"rb-ord-input",type:"tel",inputMode:"tel",autoComplete:"tel",value:o.phone,"data-invalid":s("c_phone")?"true":void 0,"aria-invalid":!!s("c_phone"),"aria-describedby":s("c_phone")?"err_c_phone":void 0,onChange:r=>$({...o,phone:r.target.value}),onBlur:()=>S({...K,c_phone:!0})}),s("c_phone")&&e.jsx("p",{className:"rb-ord-err",id:"err_c_phone",role:"alert",children:s("c_phone")})]})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsx("label",{className:"rb-ord-label",htmlFor:"rb-ord-email",children:t.fieldEmail}),e.jsx("input",{id:"rb-ord-email",className:"rb-ord-input",type:"email",inputMode:"email",autoComplete:"email",value:o.email,"data-invalid":s("c_email")?"true":void 0,"aria-invalid":!!s("c_email"),"aria-describedby":s("c_email")?"err_c_email":"hint_c_email",onChange:r=>$({...o,email:r.target.value}),onBlur:()=>S({...K,c_email:!0})}),s("c_email")?e.jsx("p",{className:"rb-ord-err",id:"err_c_email",role:"alert",children:s("c_email")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_email",children:t.fieldEmailHelp})]}),k==="company"&&e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-invoice-email",children:[t.fieldInvoiceEmail,e.jsx("span",{className:"rb-ord-tag",children:t.optional})]}),e.jsx("input",{id:"rb-ord-invoice-email",className:"rb-ord-input",type:"email",inputMode:"email",value:o.invoiceEmail,"data-invalid":s("c_invoiceEmail")?"true":void 0,"aria-invalid":!!s("c_invoiceEmail"),"aria-describedby":s("c_invoiceEmail")?"err_c_invoiceEmail":"hint_c_invoiceEmail",onChange:r=>$({...o,invoiceEmail:r.target.value}),onBlur:()=>S({...K,c_invoiceEmail:!0})}),s("c_invoiceEmail")?e.jsx("p",{className:"rb-ord-err",id:"err_c_invoiceEmail",role:"alert",children:s("c_invoiceEmail")}):e.jsx("p",{className:"rb-ord-hint",id:"hint_c_invoiceEmail",children:t.fieldInvoiceEmailHint})]}),e.jsxs("div",{className:"rb-ord-field",children:[e.jsxs("label",{className:"rb-ord-label",htmlFor:"rb-ord-notes",children:[t.fieldNotes,e.jsx("span",{className:"rb-ord-tag",children:t.optional})]}),e.jsx("textarea",{id:"rb-ord-notes",className:"rb-ord-textarea",placeholder:t.fieldNotesPlaceholder,value:o.notes,onChange:r=>$({...o,notes:r.target.value})})]}),e.jsx("button",{type:"submit",className:"rb-ord-submit",disabled:Oe==="sending",children:Oe==="sending"?`${t.submitting}...`:ke?t.submitQuote:t.submit}),Ve&&Object.keys(ce).length>0&&e.jsx("p",{className:"rb-ord-errsummary",role:"alert",children:t.errSummary}),Er&&e.jsxs("p",{className:"rb-ord-errsummary",role:"alert",children:[i==="is"?"Ekki tókst að senda pöntunina. Vinsamlegast hringdu í ":"We could not send that order. Please call us on ",e.jsx("a",{href:`tel:${C.phone}`,className:"rb-ord-tel",children:C.phoneLabel}),i==="is"?" og við klárum hana með þér.":" and we will take it down for you."]}),e.jsxs("p",{className:"rb-ord-hint",style:{textAlign:"center",marginTop:4},children:[i==="is"?"Eða hringdu í ":"Or call us on ",e.jsx("a",{href:`tel:${C.phone}`,className:"rb-ord-tel",children:C.phoneLabel})]})]})]}),e.jsx("div",{className:"rb-ord-slipwrap",children:Hr})]})]})]})}const xt=`
  /* Safari 26 tints its chrome from body's background-color (theme-color is
     ignored since Liquid Glass) — without this the status-bar strip is WHITE
     on this ink-dark page. See [[ios-safe-area-chrome-color]]. */
  html, body { background-color:${me}; }
  .rb-op ::selection { background:#5C1C1F; color:${N}; }
  .rb-op a:focus-visible, .rb-op button:focus-visible {
    outline:2px solid ${p}; outline-offset:3px; border-radius:4px; }

  .rb-op-bar { display:flex; align-items:center; justify-content:space-between; gap:20px;
    padding:calc(18px + env(safe-area-inset-top, 0px)) clamp(20px,4.5vw,72px) 18px; border-bottom:1px solid ${be}; }
  .rb-op-back { display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    font-family:${re}; font-size:14px; color:${_}; padding:11px 0;
    transition:color .2s ${c}; }
  .rb-op-back:hover { color:${j}; }
  .rb-op-lang { background:none; border:none; cursor:pointer; padding:14px 13px; margin:-14px -13px;
    font-family:${re}; font-size:13px; letter-spacing:.08em; color:${P};
    transition:color .2s ${c}; border-radius:4px; }
  .rb-op-lang[aria-pressed="true"] { color:${j}; }
  .rb-op-lang:hover { color:${N}; }

  .rb-op-foot { border-top:1px solid ${be}; padding:36px clamp(20px,4.5vw,72px) 56px;
    background:${I}; }
  .rb-op-foot-grid { max-width:1180px; margin:0 auto; display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:26px; }
  .rb-op-foot-label { font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
    color:${p}; }
  .rb-op-foot-body { font-size:14px; color:${_}; line-height:1.65; margin:9px 0 0; }
  .rb-op-foot-body a { color:${j}; text-decoration:none; }
  .rb-op-foot-body a:hover { color:${N}; }

  @media (max-width:520px) {
    .rb-op-bar { padding:14px clamp(20px,4.5vw,72px); }
    .rb-op-bar img { width:104px !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rb-op-back, .rb-op-lang { transition:none; }
  }
`;function gt(){const[i,v]=st(),W=dt[i],M=Tr[i],{LINKS:t,hoursRows:C,mainName:H}=zr(),[oe]=Gr(),U=oe.get("vara")??void 0,ue=oe.get("tilefni")??void 0;return b.useEffect(()=>{Qr(me)},[]),e.jsxs("div",{className:"rb-op",lang:i,style:{fontFamily:re,color:N,background:me,minHeight:"100svh",overflowX:"clip",WebkitFontSmoothing:"antialiased"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:xt}}),e.jsxs("header",{className:"rb-op-bar",children:[e.jsx(yr,{to:kr,"aria-label":M.backToSite,children:e.jsx("img",{src:nt,alt:"Reynir bakari",width:124,height:54,decoding:"async",style:{width:124,height:"auto",display:"block"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:22},children:[e.jsxs(yr,{to:kr,className:"rb-op-back",children:[e.jsx("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5.5 1L1 5.5L5.5 10M1 5.5H12.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),M.backToSite]}),e.jsxs("div",{role:"group","aria-label":"Language",style:{display:"flex",gap:2},children:[e.jsx("button",{className:"rb-op-lang","aria-pressed":i==="en",onClick:()=>v("en"),children:"EN"}),e.jsx("span",{"aria-hidden":"true",style:{color:P,alignSelf:"center"},children:"/"}),e.jsx("button",{className:"rb-op-lang","aria-pressed":i==="is",onClick:()=>v("is"),children:"ÍS"})]})]})]}),e.jsx(ut,{lang:i,standalone:!0,initialProductId:U,initialOccasionId:ue}),e.jsx("footer",{className:"rb-op-foot",children:e.jsxs("div",{className:"rb-op-foot-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:W.mainLabel}),e.jsxs("p",{className:"rb-op-foot-body",children:[H,e.jsx("br",{}),C[i].map(Q=>`${Q.label} ${Q.value}`).join(" · ")]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"rb-op-foot-label",children:W.rowPhone}),e.jsxs("p",{className:"rb-op-foot-body",children:[e.jsx("a",{href:`tel:${t.phone}`,children:t.phoneLabel}),e.jsx("br",{}),e.jsx("a",{href:`mailto:${t.orderEmail}`,children:t.orderEmail})]})]})]})}),e.jsx(lt,{})]})}function wt(){return e.jsx(it,{children:e.jsx(gt,{})})}export{wt as default};
