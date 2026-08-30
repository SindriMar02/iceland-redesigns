import{r as l,s as Ce,j as e}from"./index-DBe737o8.js";import{a4 as ue,a5 as Le,a6 as I,a7 as Ie,a8 as ze,a9 as Me,aa as W,ab as Oe,ac as De,ad as B,ae as xe,af as We,ag as Be,g as He,ah as Pe}from"./companies-DOEqWmuu.js";import{P as Ge}from"./PreviewChrome-DjtZ3VEk.js";import{P as _e}from"./PreviewFooter-BSvlFNQG.js";import{M as be}from"./map-pin-DA5nmHU8.js";import{M as we}from"./mail-BwFXwZK4.js";import{A as Z}from"./arrow-up-right-FM2tjwqP.js";import{I as Ye}from"./instagram-D3r0wPza.js";import{F as Ve}from"./facebook-DYcIoeis.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-yF4Gfc2v.js";import"./createLucideIcon-Dky5mqUe.js";import"./proxy-d0WAF33B.js";import"./send-CRF-DusT.js";import"./index-wLEHzTwS.js";import"./external-link-CPxngJiv.js";import"./x-DU4s40WT.js";import"./SndrBadge-BzcePIGe.js";const ge=He("minjasafn"),F="#16130F",ce="#1D1710",d="#EDE6DA",y="rgba(237,230,218,.62)",h="#9C6346",z="#793E2E",T="rgba(156,99,70,.32)",D="rgba(156,99,70,.55)",Xe="#7CA26B",Ue="#C0584A",$="cubic-bezier(0.22, 1, 0.36, 1)",ve="/iceland-redesigns/",_=`${ve}fonts/cabinet-grotesk/fonts`,je=`${ve}fonts/sentient`,m="'Cabinet Grotesk Var', 'Cabinet Grotesk Static', 'Cabinet Grotesk', ui-sans-serif, system-ui, sans-serif",ye="'Sentient', ui-serif, Georgia, serif",le=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,qe=["linear-gradient(180deg, #1A1610 0%, #16130F 52%, #1E1811 100%)","linear-gradient(180deg, #221A11 0%, #281E13 55%, #2F2115 100%)","linear-gradient(180deg, #2F2013 0%, #3B2717 50%, #4C2F1D 100%)"],Ke=[8,4,0],Je=`
  @font-face {
    font-family: 'Cabinet Grotesk Static';
    src: url('${_}/CabinetGrotesk-Regular.woff2') format('woff2'),
         url('${_}/CabinetGrotesk-Regular.woff') format('woff');
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Cabinet Grotesk Static';
    src: url('${_}/CabinetGrotesk-Medium.woff2') format('woff2'),
         url('${_}/CabinetGrotesk-Medium.woff') format('woff');
    font-weight: 500; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Cabinet Grotesk Static';
    src: url('${_}/CabinetGrotesk-Extrabold.woff2') format('woff2'),
         url('${_}/CabinetGrotesk-Extrabold.woff') format('woff');
    font-weight: 800; font-style: normal; font-display: swap;
  }
  /* ── the variable axis (wght 100..900) — the whole excavated-weight device
     lives here, so it MUST be the face that actually gets selected, and it
     CANNOT be called 'Cabinet Grotesk'.
     MEASURED, not assumed: index.html (a shared file, not ours to touch)
     already pulls cabinet-grotesk@400,500,700,800 from the Fontshare CDN
     under exactly that family name. Whenever a static face matches the
     requested weight EXACTLY, Chrome picks it over a variable range in the
     same family, and font-variation-settings on a static face is a silent
     no-op. Probed on the real heading at 64.8px: font-weight 800 rendered
     683.72px wide at 'wght' 100 AND at 'wght' 900 (dead axis), while
     font-weight 900 — the one weight the CDN does not ship — correctly moved
     641.16px to 693.86px. Hence a private family name here: this face is the
     only member of 'Cabinet Grotesk Var', so nothing can outrank it, and the
     self-hosted statics plus the CDN family stay behind it in the stack as a
     real fallback if this file ever fails to load. ── */
  @font-face {
    font-family: 'Cabinet Grotesk Var';
    src: url('${_}/CabinetGrotesk-Variable.woff2') format('woff2');
    font-weight: 100 900; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Sentient';
    src: url('${je}/Sentient-Light.woff2') format('woff2');
    font-weight: 300; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Sentient';
    src: url('${je}/Sentient-Regular.woff2') format('woff2');
    font-weight: 400; font-style: normal; font-display: swap;
  }

  /* registered custom property: --mj-clip is the ONLY thing a peel ever
     animates (never a translated duplicate) */
  @property --mj-clip { syntax: '<percentage>'; inherits: false; initial-value: 0%; }

  .mj-page { overflow-x: clip; }
  .mj-page ::selection { background: ${z}; color: ${d}; }
  .mj-page a:focus-visible, .mj-page button:focus-visible, .mj-page [tabindex]:focus-visible {
    outline: 2px solid ${h}; outline-offset: 2px;
  }
  @media (prefers-reduced-motion: no-preference) {
    html:has(.mj-page) { scroll-behavior: smooth; }
  }

  .mj-skip {
    position: absolute; left: 12px; top: -60px; z-index: 100;
    background: ${z}; color: ${d}; padding: 12px 20px;
    font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
    transition: top .2s ease;
  }
  .mj-skip:focus-visible { top: 12px; }

  /* ── drift frames (Heklusýn engine): image drifts INSIDE a fixed frame.
     --dz is DERIVED from the drift value, never hardcoded. ── */
  .mj-frame { position: relative; overflow: hidden; width: 100%; }
  .mj-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; will-change: transform; }
  .mj-frame-in > img { width: 100%; height: 100%; object-fit: cover; }

  /* ── text mask reveal. Resting state is VISIBLE: the hidden start exists
     only under .mj-js, so dead scripts can never strand the copy.
     .22em headroom is load-bearing BOTH WAYS: g/j/þ descenders clip below,
     and the acute tips of Ó Á Ý Ú clip above at display scale without it
     (the descender-clip trap, shipped once — and its ascender mirror). ── */
  .mj-mask {
    display: block; overflow: hidden;
    padding-bottom: 0.22em; margin-bottom: -0.22em;
    padding-top: 0.22em; margin-top: -0.22em;
  }
  .mj-js .mj-mask > .mj-mask-in { transform: translateY(132%); }
  .mj-js .mj-mask.is-in > .mj-mask-in {
    transform: translateY(0);
    transition: transform 1.05s ${$};
  }

  @keyframes mj-rise {
    from { opacity: 0; transform: translateY(26px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .mj-js .mj-reveal { opacity: 0; transform: translateY(26px); }
  .mj-js .mj-reveal.is-in { animation: mj-rise 0.9s ${$} both; }

  /* ── the strata bands: full-cover layers whose clip-path bottom inset is
     driven 0% → 100% by the shared rAF job. Visible only under .mj-js;
     the resting state is always the fully excavated photo. ── */
  .mj-stratum {
    position: absolute; inset: 0; visibility: hidden;
    will-change: clip-path; clip-path: inset(0 0 0 0);
  }
  .mj-js .mj-stratum { visibility: visible; }
  .mj-stratum::before {
    content: ''; position: absolute; inset: 0;
    background-image: ${le}; opacity: .16; pointer-events: none;
  }
  .mj-stratum::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: repeating-linear-gradient(180deg,
      rgba(237,230,218,.022) 0 1px, transparent 1px 16px);
  }
  /* the year slot: one anchor for all three bands, measured off the wordmark
     at runtime (--mj-strata-top). The percentage is only the pre-measure
     fallback for the frame before the effect runs. */
  .mj-strata-label {
    left: clamp(1.25rem, 5vw, 4rem);
    top: var(--mj-strata-top, 22%);
  }
  .mj-strata-edge {
    position: absolute; left: 0; right: 0; top: 100%; height: 2px;
    background: ${D};
    box-shadow: 0 3px 14px rgba(0,0,0,.55);
    opacity: 0; will-change: top, opacity;
  }

  /* ── hero wordmark: the Búðir hue-heading recipe. The photo beneath is
     pre-filtered so the difference-invert stays a controlled tonal hue. ── */
  .mj-hero-photo img { filter: saturate(.5) contrast(1.03) brightness(.89); }
  .mj-hero-title { mix-blend-mode: difference; color: ${d}; }

  /* eyebrow + CTAs resolve as the strata clear; without JS they rest visible.
     visibility rides the same scrub as opacity so the hidden CTAs are never
     clickable or focusable before the dig reveals them */
  .mj-js .mj-hero-late { opacity: 0; visibility: hidden; transform: translateY(16px); will-change: opacity, transform; }
  .mj-hero-cue { will-change: opacity; }

  .mj-hero-outer { height: 100svh; }
  @media (prefers-reduced-motion: no-preference) {
    .mj-js .mj-hero-outer { height: 250svh; }
  }

  /* ── section peel: the hero's motion echoed quietly. A tinted stratum
     overlay clips away (clip-path only, never a moved duplicate) when the
     frame enters the viewport. Exists only under .mj-js. ── */
  .mj-peel {
    display: none; position: absolute; inset: 0; z-index: 3; pointer-events: none;
    background: linear-gradient(180deg,
      #241A12 0%, #241A12 calc(5% - 1px),
      rgba(156,99,70,.55) calc(5% - 1px), rgba(156,99,70,.55) 5%,
      #2F2115 60%, #3B2717 100%);
    clip-path: inset(0 0 var(--mj-clip) 0); will-change: clip-path;
  }
  .mj-peel::before {
    content: ''; position: absolute; inset: 0;
    background-image: ${le}; opacity: .15;
  }
  .mj-js .mj-peel { display: block; }
  /* the dig STOPS at 95%: a 5% soil ledge with a sienna face line is left
     resting on the top edge of every photograph. Hover brushes the last of
     it off (see the hover gate). Nothing here ever moves a duplicate. */
  .mj-js .mj-peel.is-dug {
    --mj-clip: 95%;
    transition: --mj-clip 1.2s ${$} .12s;
  }
  /* a coarse pointer has no hover to brush the last of it off, so the ledge
     would sit on the top 5% of every photograph forever (it hid the printed
     header of the exhibition poster). There, the dig simply finishes. */
  @media (hover: none), (pointer: coarse) {
    .mj-js .mj-peel.is-dug { --mj-clip: 100%; }
  }

  /* ── timeline rule as a CORE SAMPLE: not a hairline but an extracted
     column. It draws downward (scaleY) AND widens out of the ground
     (scaleX) as the reader descends, and it is banded with the sampled
     strata tints at the real vertical position of each dated stop, so the
     bands are the years. Band boundaries are measured from the rendered
     stops, never guessed. ── */
  /* the column has to be wide enough to READ as strata: at 5px the measured
     banding and its 3.5px boundary ticks were invisible sophistication and
     the whole thing read as one sienna hairline. 11px is exactly the width
     of the year markers, so the core runs behind them like a real sample. */
  .mj-tl-base, .mj-tl-rule { width: 7px; left: 2px; }
  @media (min-width: 768px) { .mj-tl-base, .mj-tl-rule { width: 11px; left: 0; } }
  .mj-tl-base { background: rgba(156,99,70,.14); }
  /* the draw is a CLIP, not a scaleY: a scaled column would squash its own
     bands and the tints would stop lining up with the years they belong to.
     scaleX is the only transform, so the core widens as it is pulled. */
  .mj-tl-rule {
    transform-origin: top center; transform: scaleX(1); clip-path: inset(0 0 0 0);
    will-change: transform, clip-path; background: ${h};
  }
  .mj-js .mj-tl-rule { transform: scaleX(.34); clip-path: inset(0 0 100% 0); }
  .mj-tl-dot { background: ${h}; transition: background .45s ease; }
  .mj-js .mj-tl-dot { background: ${F}; }

  /* ── footer aperture (ERA Phase 14): the clipping wrapper closes toward
     inset(8% 22%) as the page ends. Resting/no-JS state: open. ── */
  .mj-ap { will-change: clip-path; }

  /* ── gripur strip: native horizontal scroll, snap, styled scrollbar ── */
  .mj-strip {
    overflow-x: auto; scroll-snap-type: x mandatory;
    /* snap aligns to the scrollport edge, not the padding box — without this
       the first card snaps flush to x:0 and swallows the inline padding */
    scroll-padding-inline: 1.25rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-color: ${z} rgba(237,230,218,.08);
    scrollbar-width: thin;
  }
  @media (min-width: 768px) { .mj-strip { scroll-padding-inline: 2.5rem; } }
  .mj-strip::-webkit-scrollbar { height: 6px; }
  .mj-strip::-webkit-scrollbar-track { background: rgba(237,230,218,.08); }
  .mj-strip::-webkit-scrollbar-thumb { background: ${z}; }

  /* ── link vocabulary: sienna underline wipes in from the left ── */
  .mj-ul { position: relative; text-decoration: none; }
  .mj-ul::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 1px;
    background: ${h}; transform: scaleX(0); transform-origin: left center;
  }
  /* focus-visible ONLY out here. The :hover branch lives in the pointer gate
     below, or a touch tap leaves this underline drawn permanently. */
  .mj-ul:focus-visible::after { transform: scaleX(1); }

  /* ── link rows: a sienna hairline wipes in from the left under the row,
     the label steps right, the arrow slides. Focus gets the same wipe so a
     keyboard user is never worse off than a mouse. ── */
  .mj-row { position: relative; transition: background .35s ease; }
  .mj-row::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 1px;
    background: ${h}; transform: scaleX(0); transform-origin: left center;
    transition: transform .55s ${$};
  }
  .mj-row:focus-visible::after { transform: scaleX(1); }
  .mj-row-label { transition: transform .45s ${$}; }

  /* no letter-spacing on hover: tracking is a LAYOUT property, and in a
     right-aligned row it slid the pill's left edge 4px out from under a
     stationary cursor. Background + brightness carry the state on the
     compositor, like every other hover on this page. */
  .mj-cta { transition: background .3s ease, filter .3s ease, border-color .3s ease; }

  /* ── credits line: resting state is the full muted register (never dimmed
     below readable), hover lifts it into the off-white and draws a hairline
     under it ── */
  .mj-panel-credits { position: relative; transition: color .4s ease, transform .4s ${$}; }
  .mj-panel-credits::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -6px; height: 1px;
    background: ${D}; transform: scaleX(0); transform-origin: left center;
    transition: transform .55s ${$};
  }

  /* ── gripur strip: the hovered object is picked up off the shelf ── */
  .mj-gripcard { transition: opacity .45s ease; }
  .mj-gripmedia { transition: transform .55s ${$}; }
  .mj-gripshelf {
    position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: ${h};
    transform: scaleX(0); transform-origin: left center; transition: transform .55s ${$};
  }
  .mj-chip { transition: background .35s ease, color .35s ease, border-color .35s ease; }

  /* ── EVERY hover effect on this page lives behind this gate, so a touch
     device can never get stranded in a hover state ── */
  @media (hover: hover) and (pointer: fine) {
    .mj-ul:hover::after { transform: scaleX(1); }
    /* !important for the same reason as the chip below: every CTA carries its
       resting background as an INLINE token, so a stylesheet rule loses. The
       outlined pills fill sienna, the filled ones brighten. No layout. */
    .mj-cta:hover { filter: brightness(1.18); background: ${z} !important; }
    .mj-row:hover { background: rgba(156,99,70,.10); }
    .mj-row:hover::after { transform: scaleX(1); }
    .mj-row:hover .mj-row-label { transform: translateX(6px); }
    .mj-row:hover .mj-row-arrow { transform: translate(6px, -6px); }

    /* brushing the last soil off a photograph */
    .mj-js .mj-peelwrap:hover .mj-peel.is-dug,
    .mj-js .mj-panel:hover .mj-peel.is-dug { --mj-clip: 100%; }
    /* !important is load-bearing here and on the chip below: both carry
       their resting colour as an INLINE token (Pill / the credits line), and
       an inline declaration outranks a stylesheet rule */
    .mj-panel:hover .mj-panel-credits { color: ${d} !important; transform: translateY(-3px); }
    .mj-panel:hover .mj-panel-credits::after { transform: scaleX(1); }

    /* picking one object up: it lifts off its shelf line, its month chip
       fills sienna, and the rest of the row steps back a stop */
    .mj-strip:hover .mj-gripcard { opacity: .42; }
    .mj-strip .mj-gripcard:hover { opacity: 1; }
    .mj-gripcard:hover .mj-gripmedia { transform: translateY(-12px); }
    .mj-gripcard:hover .mj-gripshelf { transform: scaleX(1); }
    .mj-gripcard:hover .mj-chip {
      background: ${z} !important;
      border-color: ${z} !important;
      color: ${d} !important;
    }
  }

  /* ── 80.000 MYNDIR: the archive contact sheet. A physical sheet of frames
     on a light table: sheet edge, header strip, an even block of frames
     separated by sienna hairlines, a sequence number under every frame, and
     a foot that carries the honesty line. NOTHING is ever hidden — every
     frame is legible at rest, on every device, with scripts dead. Hover or
     keyboard focus lifts exactly ONE frame off the sheet and clears its
     desaturation; the other ten do not dim. ── */
  .mj-cs { border: 1px solid ${T}; background: ${F}; }
  .mj-cs-head, .mj-cs-foot {
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px 24px; flex-wrap: wrap;
    padding: 13px clamp(14px, 2vw, 22px);
  }
  .mj-cs-head { border-bottom: 1px solid ${T}; }
  .mj-cs-foot { border-top: 1px solid ${T}; }
  /* the frame block. The 1px grid gaps ARE the sheet's separations: the
     hairline tint sits on the container and the cells paint over it. */
  .mj-cs-grid {
    display: grid; gap: 1px; background: ${D};
    border: 1px solid ${D};
    grid-template-columns: repeat(2, 1fr);
    margin: clamp(14px, 2vw, 22px);
  }
  @media (min-width: 640px) { .mj-cs-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1024px) { .mj-cs-grid { grid-template-columns: repeat(4, 1fr); } }
  .mj-cs-cell {
    position: relative; margin: 0; background: ${F};
    padding: 10px 10px 9px;
  }
  .mj-cs-frame {
    transition: transform .5s ${$}, background .35s ease;
    outline-offset: 2px;
  }
  .mj-cs-media { position: relative; overflow: hidden; aspect-ratio: 4 / 3; }
  .mj-cs-media img {
    display: block; width: 100%; height: 100%; object-fit: cover;
    filter: saturate(.55) contrast(1.03) brightness(.92);
    transition: filter .5s ease;
  }
  .mj-cs-no { display: block; margin-top: 9px; transition: color .35s ease; }
  /* a real sheet runs out of exposures before it runs out of grid: the last
     rebate stays empty rather than being padded with a repeated picture */
  /* opaque on purpose: the grid's hairline tint is the CONTAINER background,
     so a translucent fill here would let the full sienna through and the
     empty rebate would read as a painted block */
  .mj-cs-blank {
    background-color: ${F};
    background-image: linear-gradient(rgba(156,99,70,.05), rgba(156,99,70,.05));
  }

  /* the single-state lift. No shadow anywhere: this page separates with
     hairlines and scale alone. */
  .mj-cs-frame:focus-visible { transform: scale(1.05); z-index: 2; }
  .mj-cs-frame:focus-visible .mj-cs-media img { filter: saturate(.92) contrast(1.03) brightness(1); }
  .mj-cs-frame:focus-visible .mj-cs-no { color: ${d} !important; }
  @media (hover: hover) and (pointer: fine) {
    .mj-cs-frame:hover { transform: scale(1.05); z-index: 2; }
    .mj-cs-frame:hover .mj-cs-media img { filter: saturate(.92) contrast(1.03) brightness(1); }
    .mj-cs-frame:hover .mj-cs-no { color: ${d} !important; }
  }

  @keyframes mj-cue-drop {
    0%   { transform: scaleY(0); transform-origin: top center; }
    45%  { transform: scaleY(1); transform-origin: top center; }
    55%  { transform: scaleY(1); transform-origin: bottom center; }
    100% { transform: scaleY(0); transform-origin: bottom center; }
  }
  /* finite on purpose: the no-auto-loop hero rule — three cycles, then rest */
  .mj-cue-line { animation: mj-cue-drop 2.2s ${$} 3; }

  /* ── LOADER · KJARNASÝNI (the core sample) ───────────────────────────────
     The page's organising idea is a dig, so the loader is the instrument
     reading that precedes it: a narrow column of ground drawn DOWNWARD, past
     the three real dates of the museum's own time, while the page's images
     actually decode. Deliberately NOT the hero's move: the hero clips wide
     strata off a photograph; this fills a 13px tube and reads a number.
     No invented depths, metres or soil horizons — the graduations are
     unlabelled instrument marks and the only words are real years.

     Never mounts under reduced motion, never mounts twice in a session, and
     never exists at all without JS (it is created in an effect-guarded
     client render). pointer-events: none is load-bearing: the gesture that
     dismisses the loader must still reach the page underneath. ── */
  .mj-load {
    position: fixed; inset: 0; z-index: 200;
    display: flex; align-items: center; justify-content: center;
    padding: 0 clamp(1.25rem, 6vw, 4rem);
    background: ${F};
    pointer-events: none;
    opacity: 1;
    transition: opacity .42s ${$} .2s;
  }
  .mj-load::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: ${le}; opacity: .1;
  }
  .mj-load-mod {
    position: relative; width: 100%; max-width: 560px;
    transition: transform .46s ${$}, opacity .22s linear;
  }
  .mj-load-meta {
    display: flex; align-items: baseline; justify-content: space-between; gap: 1rem;
    font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: ${y};
  }
  .mj-load-pct {
    color: ${d}; letter-spacing: .14em;
    font-variant-numeric: tabular-nums;
    font-variation-settings: "wght" 300;
  }
  .mj-load-mark {
    margin: 0 0 22px; font-weight: 800;
    font-size: clamp(24px, 5.2vw, 44px); line-height: 1.02;
    letter-spacing: -0.02em; text-transform: uppercase; color: ${d};
  }
  .mj-load-mark span { display: block; }

  /* the strip: one hairline track, one sienna fill driven by real progress */
  .mj-load-track {
    position: relative; height: 2px; overflow: hidden;
    background: rgba(156,99,70,.22);
  }
  .mj-load-bar {
    position: absolute; inset: 0; background: ${h};
    transform: scaleX(0); transform-origin: 0 50%;
    transition: transform .34s ${$};
  }

  /* exit — the module lifts, then the ground goes. The hero beneath is never
     touched, so it hands off at its own resting state. */
  .mj-load.is-out { opacity: 0; }
  .mj-load.is-out .mj-load-mod { opacity: 0; transform: translateY(-22px); }
  .mj-load.is-skip { transition: opacity .26s ${$} .12s; }
  .mj-load.is-skip .mj-load-mod { transition: transform .3s ${$}, opacity .14s linear; }

  .mj-load-sr {
    position: fixed; width: 1px; height: 1px; overflow: hidden;
    clip-path: inset(50%); white-space: nowrap;
  }

  @media (max-width: 640px) {
    .mj-load-meta { font-size: 12px; letter-spacing: .16em; }
  }
  /* belt and braces: the component already never mounts here */
  @media (prefers-reduced-motion: reduce) { .mj-load { display: none !important; } }

  @media (prefers-reduced-motion: no-preference) {
    .mj-ul::after { transition: transform .4s ${$}; }
  }

  @media (max-width: 640px) {
    .mj-page a[href^="mailto:"], .mj-page a[href^="http"], .mj-page a[href^="#"] {
      min-height: 44px; display: inline-flex; align-items: center;
    }
    /* micro-caps floor on small screens: the wide tracking carries the
       hierarchy, 12px carries the legibility */
    .mj-page .text-\\[11px\\] { font-size: 12px; }
  }

  /* ── resting state = final excavated state, everywhere ── */
  @media (prefers-reduced-motion: reduce) {
    .mj-stratum, .mj-strata-edge, .mj-peel { display: none !important; }
    .mj-hero-cue { display: none !important; }
    .mj-js .mj-hero-late { opacity: 1 !important; visibility: visible !important; transform: none !important; }
    .mj-hero-outer, .mj-js .mj-hero-outer { height: 100svh !important; }
    .mj-frame-in { inset: 0; transform: none !important; }
    .mj-hero-photo-in { transform: none !important; }
    .mj-js .mj-mask > .mj-mask-in { transform: none !important; transition: none !important; }
    .mj-js .mj-reveal { opacity: 1 !important; transform: none !important; animation: none !important; }
    .mj-js .mj-tl-rule, .mj-tl-rule { transform: none !important; clip-path: none !important; }
    .mj-ap { clip-path: none !important; }
    .mj-cue-line { animation: none !important; }
    /* the contact sheet already rests fully resolved: every frame visible,
       every number legible. Only the lift stops travelling to its end state. */
    .mj-cs-frame, .mj-cs-media img, .mj-cs-no { transition: none !important; }
    /* the core sample rests fully drawn, every band and every stop set */
    .mj-js .mj-tl-dot { background: ${h} !important; }
    /* hover vocabulary keeps its end states but stops travelling to them */
    .mj-gripmedia, .mj-gripshelf, .mj-gripcard, .mj-chip,
    .mj-row, .mj-row::after, .mj-row-label, .mj-row-arrow,
    .mj-panel-credits, .mj-panel-credits::after, .mj-ul::after {
      transition: none !important;
    }
    /* the variable axis rests at its heaviest: fully excavated type. Each
       node carries its own rest weight in --mj-w, so the giant numeral rests
       at 900 and the section heads at 800. */
    .mj-wght { font-variation-settings: 'wght' var(--mj-w, 800) !important; }
  }
`,ae=new Set;let U=0;function ke(){const t=window.innerHeight,a=window.innerWidth,s=[];ae.forEach(n=>{const r=n(t,a);r&&s.push(r)});for(let n=0;n<s.length;n++)s[n]();U=requestAnimationFrame(ke)}function q(t){return ae.add(t),U||(U=requestAnimationFrame(ke)),()=>{ae.delete(t),!ae.size&&U&&(cancelAnimationFrame(U),U=0)}}const H=t=>t<0?0:t>1?1:t,Ne=t=>1-(1-t)*(1-t),Qe=t=>t*t*(3-2*t),Se=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function $e(t,a,s,n=.55,r=!1){l.useEffect(()=>{var R;const i=t.current;if(!i||Se())return;let c=0;const o=()=>{if(!r)return;i.style.minHeight="";const v=i.style.fontVariationSettings;i.style.fontVariationSettings=`"wght" ${s}`;const g=i.getBoundingClientRect().height;i.style.fontVariationSettings=v,i.style.minHeight=`${Math.ceil(g)}px`};o(),typeof document<"u"&&((R=document.fonts)!=null&&R.ready)&&document.fonts.ready.then(o).catch(()=>{});const x=()=>{window.clearTimeout(c),c=window.setTimeout(o,180)};window.addEventListener("resize",x);let p=-1;const w=q(v=>{const g=i.getBoundingClientRect();if(g.top>v+60||g.bottom<-60)return;const k=H((v-g.top)/(v*n)),j=Math.round(a+(s-a)*Ne(k));if(j!==p)return()=>{p=j,i.style.fontVariationSettings=`"wght" ${j}`}});return()=>{w(),window.clearTimeout(c),window.removeEventListener("resize",x)}},[t,a,s,n,r])}function Ze(t){l.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=t.current;if(a)return q(s=>{const n=a.parentElement;if(!n)return;const r=n.getBoundingClientRect();if(r.bottom<-240||r.top>s+240)return;const i=(r.top+r.height/2-s/2)/(s/2+r.height/2),c=Number(a.dataset.drift)||9,o=(-i*c).toFixed(3);return()=>{a.style.transform=`translate3d(0, ${o}%, 0)`}})},[t])}function Ee({src:t,alt:a,drift:s=9,className:n="",style:r,eager:i=!1,position:c,srcSet:o,sizes:x}){const p=l.useRef(null);return Ze(p),e.jsx("div",{className:`mj-frame ${n}`,style:r,children:e.jsx("div",{ref:p,className:"mj-frame-in","data-drift":s,style:{"--dz":`${Math.max(9,s*1.35).toFixed(2)}%`},children:e.jsx("img",{src:t,srcSet:o,sizes:o?x:void 0,alt:a,loading:i?"eager":"lazy",decoding:"async",style:c?{objectPosition:c}:void 0})})})}function de(t=.2){const a=l.useRef(null),[s,n]=l.useState(!1);return l.useEffect(()=>{const r=a.current;if(!r)return;if(typeof IntersectionObserver>"u"){n(!0);return}const i=new IntersectionObserver(c=>{c.forEach(o=>{o.isIntersecting&&(n(!0),i.unobserve(o.target))})},{threshold:t,rootMargin:"0px 0px -8% 0px"});return i.observe(r),()=>i.disconnect()},[t]),{ref:a,inView:s}}function Q({children:t,className:a="",delay:s=0,mounted:n}){const{ref:r,inView:i}=de(),c=n??i;return e.jsx("span",{ref:n===void 0?r:void 0,className:`mj-mask ${c?"is-in":""} ${a}`,children:e.jsx("span",{className:"mj-mask-in block",style:s?{transitionDelay:`${s}ms`}:void 0,children:t})})}function b({children:t,className:a="",delay:s=0}){const{ref:n,inView:r}=de();return e.jsx("div",{ref:n,className:`mj-reveal ${r?"is-in":""} ${a}`,style:r?{animationDelay:`${s}ms`}:void 0,children:t})}function re({children:t,tone:a="line",className:s=""}){const n=a==="fill"?z:a==="soot"?"rgba(22,19,15,.82)":"transparent";return e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] ${s}`,style:{fontFamily:m,fontWeight:500,border:`1px solid ${a==="fill"?z:D}`,background:n,color:a==="line"?h:d},children:t})}function et({n:t}){return e.jsx("span",{className:"hidden items-end gap-[5px] sm:inline-flex","aria-hidden":!0,children:Array.from({length:t},(a,s)=>e.jsx("span",{className:"inline-block w-px",style:{height:`${8+s*4}px`,background:D}},s))})}function Y({layer:t,depth:a,kicker:s,title:n}){const r=l.useRef(null);return $e(r,220,800,.55,!0),e.jsxs("div",{children:[e.jsx(b,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(re,{children:t}),e.jsx(et,{n:a}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.14em] md:text-[12px]",style:{fontFamily:m,fontWeight:500,color:y},children:s}),e.jsx("span",{className:"h-px flex-1",style:{background:T},"aria-hidden":!0})]})}),e.jsx("h2",{ref:r,className:"mj-wght mt-6 uppercase leading-[0.98] tracking-[-0.015em] text-[clamp(2rem,4.5vw,3.6rem)]",style:{fontFamily:m,fontWeight:800,color:d,"--mj-w":800},children:e.jsx(Q,{children:n})})]})}function ne(t){const{ref:a,inView:s}=de(.3);return e.jsxs("div",{ref:a,className:`mj-peelwrap relative overflow-hidden ${t.className??""}`,children:[e.jsx(Ee,{src:t.src,alt:t.alt,drift:t.drift??9,className:"h-full",position:t.position,srcSet:t.srcSet,sizes:t.sizes}),e.jsx("div",{className:`mj-peel ${s?"is-dug":""}`,"aria-hidden":!0})]})}function X({href:t,children:a,external:s=!0,sub:n}){return e.jsxs("a",{href:t,target:s?"_blank":void 0,rel:s?"noreferrer":void 0,className:"mj-row flex min-h-[56px] items-center justify-between gap-4 px-1 py-3",style:{borderTop:`1px solid ${T}`,color:d},children:[e.jsxs("span",{className:"mj-row-label flex flex-col",children:[e.jsx("span",{className:"text-[16px]",style:{fontFamily:m,fontWeight:500},children:a}),n&&e.jsx("span",{className:"mt-0.5 text-[12.5px]",style:{color:y},children:n})]}),e.jsx(Z,{size:17,className:"mj-row-arrow shrink-0 transition-transform duration-300",style:{color:h},"aria-hidden":!0})]})}const tt=[{id:"syningar",label:"Sýningarnar"},{id:"gripur",label:"Gripur mánaðarins"},{id:"sagan",label:"Sagan"}];function J(t){var a;(a=document.getElementById(t))==null||a.scrollIntoView({block:"start"})}function st(){const[t,a]=l.useState(!1);return l.useEffect(()=>{const s=document.getElementById("mj-hero-sentinel");if(!s||typeof IntersectionObserver>"u")return;const n=new IntersectionObserver(r=>{r.forEach(i=>a(!i.isIntersecting))});return n.observe(s),()=>n.disconnect()},[]),e.jsx("header",{className:"fixed inset-x-0 top-0 z-40 transition-colors duration-500",style:{background:t?"rgba(22,19,15,0.92)":"transparent",backdropFilter:t?"blur(12px)":"none",WebkitBackdropFilter:t?"blur(12px)":"none",borderBottom:t?`1px solid ${T}`:"1px solid transparent"},children:e.jsxs("div",{className:"mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[76px] md:px-10",children:[e.jsx("button",{onClick:()=>J("efst"),className:"text-left text-[13px] uppercase leading-tight tracking-[0.04em] md:text-[15px]",style:{fontFamily:m,fontWeight:800,color:d,minHeight:44,display:"inline-flex",alignItems:"center"},"aria-label":"Minjasafn Austurlands, efst á síðu",children:"Minjasafn Austurlands"}),e.jsxs("nav",{className:"flex items-center gap-6","aria-label":"Aðalvalmynd",children:[tt.map(s=>e.jsx("button",{onClick:()=>J(s.id),className:"hidden text-[12px] uppercase tracking-[0.14em] transition-opacity duration-300 hover:opacity-70 lg:block",style:{fontFamily:m,fontWeight:500,color:y},children:s.label},s.id)),e.jsx("button",{onClick:()=>J("heimsokn"),className:"mj-cta rounded-full px-5 text-[12px] uppercase tracking-[0.08em]",style:{fontFamily:m,fontWeight:500,background:z,color:d,minHeight:44,display:"inline-flex",alignItems:"center"},children:"Heimsókn"})]})]})})}function at(){const[t,a]=l.useState(!1),s=l.useRef(null),n=l.useRef(null),r=l.useRef(null),i=l.useRef(null),c=l.useRef(null),o=l.useRef(null),x=l.useRef(null);return l.useEffect(()=>{const p=setTimeout(()=>a(!0),90);return()=>clearTimeout(p)},[]),l.useEffect(()=>{var v;const p=()=>{const g=n.current,k=x.current;if(!g||!k)return;const j=g.getBoundingClientRect(),A=k.getBoundingClientRect(),E=g.querySelector(".mj-strata-label"),C=E&&E.getBoundingClientRect().height||18,f=document.querySelector("header"),N=(f?f.getBoundingClientRect().height:76)+10,S=A.top-j.top-12-C,L=S>=N?Math.min(S,Math.max(N,A.top-j.top-46)):A.bottom-j.top+20;g.style.setProperty("--mj-strata-top",`${Math.round(L)}px`)};p();let w=0;const R=()=>{window.clearTimeout(w),w=window.setTimeout(p,160)};return window.addEventListener("resize",R),typeof document<"u"&&((v=document.fonts)!=null&&v.ready)&&document.fonts.ready.then(p).catch(()=>{}),()=>{window.clearTimeout(w),window.removeEventListener("resize",R)}},[]),l.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const p=s.current;if(!p)return;const w=Array.from(p.querySelectorAll(".mj-stratum")),R=Array.from(p.querySelectorAll(".mj-strata-edge"));return q(v=>{const g=p.getBoundingClientRect();if(g.bottom<-120)return;const k=Math.max(1,g.height-v),j=H(-g.top/k),A=w.map((S,L)=>Math.max(Ke[L]??0,Qe(H((j-L*.26)/.44))*100)),E=Ne(j),C=H((j-.22)/.24),f=H((j-.6)/.28),u=H(1-j*4),N=Math.round(300+520*E);return()=>{for(let S=0;S<w.length;S++){w[S].style.clipPath=`inset(0 0 ${A[S].toFixed(2)}% 0)`;const L=R[S];L&&(L.style.top=`calc(${(100-A[S]).toFixed(2)}% - 2px)`,L.style.opacity=A[S]>.5&&A[S]<99?"1":"0")}r.current&&(r.current.style.transform=`scale(${(1.09-.09*E).toFixed(4)})`),i.current&&(i.current.style.opacity=C.toFixed(3),i.current.style.visibility=C<.05?"hidden":"visible",i.current.style.transform=`translateY(${((1-C)*16).toFixed(2)}px)`),c.current&&(c.current.style.opacity=f.toFixed(3),c.current.style.visibility=f<.05?"hidden":"visible",c.current.style.transform=`translateY(${((1-f)*16).toFixed(2)}px)`),o.current&&(o.current.style.opacity=u.toFixed(3)),x.current&&(x.current.style.fontVariationSettings=`"wght" ${N}`)}})},[]),e.jsxs("section",{ref:s,id:"efst",className:"mj-hero-outer relative","aria-label":"Jarðlög, upphafskafli",children:[e.jsxs("div",{ref:n,className:"sticky top-0 h-[100svh] overflow-hidden",style:{background:F},children:[e.jsx("div",{className:"mj-hero-photo absolute inset-0",children:e.jsx("div",{ref:r,className:"mj-hero-photo-in absolute inset-0 will-change-transform",children:e.jsx("img",{src:I.sjalfbaer.src,srcSet:I.sjalfbaer.srcSet,sizes:"100vw",alt:I.sjalfbaer.alt,className:"h-full w-full object-cover",loading:"eager",decoding:"async"})})}),e.jsx("div",{className:"absolute inset-0 z-[6]","aria-hidden":!0,style:{background:"linear-gradient(to top, rgba(22,19,15,0.92) 0%, rgba(22,19,15,0.55) 22%, rgba(22,19,15,0) 44%)"}}),Ie.map((p,w)=>e.jsxs("div",{className:"mj-stratum","data-stratum":w,"aria-hidden":!0,style:{zIndex:13-w,background:qe[w]},children:[e.jsxs("span",{className:"mj-strata-label absolute flex items-center gap-3 text-[12px] uppercase tracking-[0.16em]",style:{fontFamily:m,fontWeight:500,color:"rgba(237,230,218,.78)"},children:[e.jsx("span",{className:"inline-block h-px w-10",style:{background:D}}),p.label]}),e.jsx("span",{className:"mj-strata-edge"})]},p.label)),e.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center px-4",children:e.jsxs("h1",{ref:x,className:"mj-hero-title mj-wght text-center uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(3.1rem,13.5vw,12rem)]",style:{fontFamily:m,fontWeight:800,"--mj-w":820},"aria-label":"Minjasafn Austurlands",children:[e.jsx(Q,{mounted:t,children:"Minjasafn "}),e.jsx(Q,{mounted:t,delay:120,children:"Austurlands"})]})}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 z-30 px-5 pb-8 md:px-10 md:pb-10",children:e.jsxs("div",{className:"mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6",children:[e.jsxs("div",{ref:i,className:"mj-hero-late",children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.14em] md:text-[13px]",style:{fontFamily:m,fontWeight:500,color:d},children:"Byggðasafn Austurlands · Egilsstöðum · stofnað 1943"}),e.jsx("p",{className:"mt-2 text-[15px]",style:{color:y},children:"Lag fyrir lag."})]}),e.jsxs("div",{ref:c,className:"mj-hero-late flex flex-wrap items-center gap-3",children:[e.jsx("button",{onClick:()=>J("heimsokn"),className:"mj-cta rounded-full px-6 text-[13px] uppercase tracking-[0.08em]",style:{fontFamily:m,fontWeight:500,background:z,color:d,minHeight:46,display:"inline-flex",alignItems:"center"},children:"Heimsókn"}),e.jsx("button",{onClick:()=>J("syningar"),className:"mj-cta rounded-full px-6 text-[13px] uppercase tracking-[0.08em]",style:{fontFamily:m,fontWeight:500,border:`1px solid ${D}`,background:"rgba(22,19,15,0.5)",color:d,minHeight:46,display:"inline-flex",alignItems:"center"},children:"Sýningarnar"})]})]})}),e.jsx("div",{ref:o,className:"mj-hero-cue absolute bottom-8 left-1/2 z-[24] -translate-x-1/2 md:bottom-10","aria-hidden":!0,children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("span",{className:"text-[12px] uppercase tracking-[0.22em]",style:{fontFamily:m,fontWeight:500,color:y},children:"Skrunaðu til að grafa"}),e.jsx("span",{className:"mj-cue-line block h-9 w-px",style:{background:h}})]})})]}),e.jsx("div",{id:"mj-hero-sentinel","aria-hidden":!0,className:"pointer-events-none absolute left-0 h-px w-px",style:{top:"calc(100svh - 120px)"}})]})}function rt(){const[t,a]=l.useState(null);l.useEffect(()=>{a(ze(new Date))},[]);const s=(t==null?void 0:t.season)??"vetur",n=(r,i)=>{const c=Pe[r];return e.jsxs("div",{className:"mt-5",children:[e.jsxs("p",{className:"text-[11px] uppercase tracking-[0.14em]",style:{fontFamily:m,fontWeight:500,color:i?h:y},children:[c.label,i?" · nú":""]}),e.jsx("dl",{className:"mt-2",children:c.rows.map(([o,x])=>e.jsxs("div",{className:"flex items-baseline justify-between gap-4 py-1.5",style:{borderTop:`1px solid ${T}`},children:[e.jsx("dt",{className:"text-[14px]",style:{color:y},children:o}),e.jsx("dd",{className:"text-[14px] tabular-nums",style:{color:d,fontFamily:m,fontWeight:500},children:x})]},o))})]})};return e.jsx("section",{id:"heimsokn",className:"py-20 md:py-28",style:{background:F},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Yfirborð",depth:0,kicker:"Staðan í dag",title:"Heimsóknin"}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-3",style:{borderTop:`1px solid ${T}`,borderBottom:`1px solid ${T}`},children:[e.jsxs(b,{className:"py-8 pr-0 md:pr-10",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{id:"mj-open-dot",className:"inline-block h-2.5 w-2.5 rounded-full","data-open":t?String(t.open):"pending",style:{background:t!=null&&t.open?Xe:Ue},"aria-hidden":!0}),e.jsx("h3",{className:"text-[13px] uppercase tracking-[0.14em]",style:{fontFamily:m,fontWeight:500,color:d},children:t===null?"Opnunartímar":t.open?"Opið núna":"Lokað núna"})]}),e.jsx("p",{className:"mt-4 text-[26px] leading-none",style:{fontFamily:m,fontWeight:800,color:d},children:t!=null&&t.todays?`Í dag ${t.todays}`:"Lokað í dag"}),n("winter",s==="vetur"),n("summer",s==="sumar")]}),e.jsxs(b,{delay:90,className:"border-t py-8 md:border-l md:border-t-0 md:px-10",children:[e.jsx("h3",{className:"text-[13px] uppercase tracking-[0.14em]",style:{fontFamily:m,fontWeight:500,color:d},children:"Aðgangur"}),e.jsx("dl",{className:"mt-4",children:Me.map(([r,i])=>e.jsxs("div",{className:"flex items-baseline justify-between gap-4 py-2.5",style:{borderTop:`1px solid ${T}`},children:[e.jsx("dt",{className:"text-[14.5px]",style:{color:y},children:r}),e.jsx("dd",{className:"whitespace-nowrap text-[14.5px] tabular-nums",style:{color:d,fontFamily:m,fontWeight:500},children:i})]},r))})]}),e.jsxs(b,{delay:160,className:"border-t py-8 md:border-l md:border-t-0 md:pl-10",children:[e.jsx("h3",{className:"text-[13px] uppercase tracking-[0.14em]",style:{fontFamily:m,fontWeight:500,color:d},children:"Hvar erum við"}),e.jsxs("div",{className:"mt-4 flex flex-col gap-3",children:[e.jsxs("p",{className:"flex items-start gap-3 text-[16px]",style:{color:d},children:[e.jsx(be,{size:17,style:{color:h,marginTop:3},"aria-hidden":!0}),W.address]}),e.jsxs("a",{href:W.emailHref,className:"mj-ul flex items-center gap-3 text-[16px]",style:{color:d},children:[e.jsx(we,{size:17,style:{color:h},"aria-hidden":!0}),W.email]}),e.jsxs("a",{href:W.website,target:"_blank",rel:"noreferrer",className:"mj-ul flex items-center gap-3 text-[16px]",style:{color:d},children:[e.jsx(Z,{size:17,style:{color:h},"aria-hidden":!0}),W.websiteDisplay]}),e.jsx("p",{className:"mt-2 max-w-[34ch] text-[13.5px] leading-relaxed",style:{color:y},children:"Safnið er að Laufskógum 1 á Egilsstöðum. Sendu okkur línu, við svörum."})]})]})]})]})})}function nt(){return e.jsx("section",{id:"syningar",className:"py-20 md:py-28",style:{background:F},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 01",depth:1,kicker:"Grunnsýningarnar tvær",title:"Það sem stendur uppúr"}),e.jsx("div",{className:"mt-12 flex flex-col gap-16 md:mt-16 md:gap-24",children:Oe.map((t,a)=>e.jsxs("article",{className:"mj-panel grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",children:[e.jsx(b,{className:`lg:col-span-7 ${a%2===1?"lg:order-2":""}`,children:e.jsx(ne,{src:t.img.src,alt:t.img.alt,srcSet:t.img.srcSet,sizes:"(min-width: 1024px) 58vw, 100vw",drift:11,className:"aspect-[4/3] md:aspect-[16/10]",position:"imgPosition"in t?t.imgPosition:void 0})}),e.jsxs("div",{className:`lg:col-span-5 ${a%2===1?"lg:order-1":""}`,children:[e.jsx(b,{children:e.jsx(re,{children:"Varanleg sýning"})}),e.jsx("h3",{className:"mt-5 uppercase leading-[0.98] tracking-[-0.015em] text-[clamp(1.8rem,3.6vw,2.9rem)]",style:{fontFamily:m,fontWeight:800,color:d},children:e.jsx(Q,{children:t.title})}),e.jsx(b,{delay:110,children:e.jsx("p",{className:"mt-5 max-w-[52ch] text-[16px] leading-relaxed md:text-[16.5px]",style:{color:y},children:t.body})}),t.credits&&e.jsx(b,{delay:170,children:e.jsx("p",{className:"mj-panel-credits mt-4 inline-block text-[12px] uppercase tracking-[0.1em]",style:{fontFamily:m,fontWeight:500,color:y},children:t.credits})}),e.jsx(b,{delay:220,children:e.jsxs("a",{href:t.href,target:"_blank",rel:"noreferrer",className:"mj-ul mt-6 inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.1em]",style:{fontFamily:m,fontWeight:500,color:h},children:["Sýningin á minjasafn.is",e.jsx(Z,{size:15,"aria-hidden":!0})]})})]})]},t.id))})]})})}function it(){return e.jsxs("section",{id:"gripur",className:"py-20 md:py-28",style:{background:F},children:[e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 02",depth:2,kicker:"Lifandi röð á minjasafn.is",title:"Gripur mánaðarins"}),e.jsx(b,{delay:90,children:e.jsx("p",{className:"mt-6 max-w-[56ch] text-[16px] leading-relaxed md:text-[16.5px]",style:{color:y},children:"Safnkosturinn dreginn fram, einn gripur í einu. Í hverjum mánuði velur safnið einn grip úr geymslunum og segir sögu hans."})})]}),e.jsx("div",{className:"mj-strip mt-10 flex gap-4 px-5 pb-4 md:mt-12 md:gap-6 md:px-10",tabIndex:0,role:"region","aria-label":"Gripur mánaðarins, myndaröð, skrunaðu til hliðar",children:De.map(t=>e.jsxs("figure",{className:"mj-gripcard w-[clamp(240px,64vw,320px)] shrink-0 snap-start",children:[e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"mj-gripshelf","aria-hidden":!0}),e.jsxs("div",{className:"mj-gripmedia relative",children:[e.jsx(Ee,{src:t.src,alt:t.alt,drift:6,className:"aspect-[4/3]"}),e.jsx("span",{className:"absolute left-3 top-3 z-[4]",children:e.jsx(re,{tone:"soot",className:"mj-chip",children:t.month})})]})]}),e.jsx("figcaption",{className:"mt-3 text-[12px] uppercase tracking-[0.14em]",style:{fontFamily:m,fontWeight:500,color:y},children:"Úr safnkostinum"})]},t.month))}),e.jsx("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:e.jsx(b,{children:e.jsxs("a",{href:B.gripur,target:"_blank",rel:"noreferrer",className:"mj-ul mt-6 inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.1em]",style:{fontFamily:m,fontWeight:500,color:h},children:["Allir gripir mánaðarins á minjasafn.is",e.jsx(Z,{size:15,"aria-hidden":!0})]})})})]})}function ot(){const t=l.useRef(null);return $e(t,150,900,.5),e.jsx("section",{id:"ljosmyndasafn",className:"py-20 md:py-28",style:{background:ce},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 03",depth:3,kicker:"Ljósmyndasafn Austurlands",title:"Myndlagið"}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12",children:[e.jsxs("div",{className:"lg:col-span-8",children:[e.jsx("p",{ref:t,className:"mj-wght leading-[0.9] tracking-[-0.02em] text-[clamp(4.4rem,14vw,12.5rem)]",style:{fontFamily:m,fontWeight:900,color:h,"--mj-w":900},children:e.jsxs(Q,{children:[e.jsx("span",{"aria-hidden":!0,style:{fontSize:".42em",verticalAlign:"0.5em",letterSpacing:0},children:"~"}),e.jsx("span",{className:"sr-only",children:"um "}),"80.000"]})}),e.jsx(b,{delay:100,children:e.jsx("p",{className:"mt-4 max-w-[46ch] text-[17px] leading-relaxed md:text-[19px]",style:{color:d},children:"myndir í Ljósmyndasafni Austurlands, sérstakri deild innan Héraðsskjalasafns Austfirðinga."})})]}),e.jsx(b,{delay:140,className:"lg:col-span-4",children:e.jsx(ne,{src:I.spjold.src,alt:I.spjold.alt,srcSet:I.spjold.srcSet,sizes:"(min-width: 1024px) 33vw, 100vw",drift:8,className:"aspect-[4/3]"})})]}),e.jsxs("div",{className:"mt-12",children:[e.jsx(X,{href:B.ljosmyndasafn,sub:"Nánar um deildina og aðgang að myndunum",children:"Ljósmyndasafn Austurlands á minjasafn.is"}),e.jsx(X,{href:B.sarpur,sub:"Menningarsögulegt gagnasafn íslenskra safna",children:"Safnkosturinn er skráður í Sarp"}),e.jsx("div",{style:{borderTop:`1px solid ${T}`},"aria-hidden":!0})]})]})})}function lt(){const t={fontFamily:m,fontWeight:500,color:y};return e.jsx("section",{id:"undir-yfirbordinu",className:"pb-20 md:pb-28",style:{background:ce},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 03",depth:3,kicker:"Sama lagið, myndirnar sjálfar",title:"Undir yfirborðinu"}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12",children:[e.jsx(b,{className:"lg:col-span-7",children:e.jsx("p",{className:"max-w-[54ch] text-[16px] leading-relaxed md:text-[16.5px]",style:{color:y},children:"Ljósmyndasafn Austurlands geymir um 80.000 myndir og er sérstök deild innan Héraðsskjalasafns Austfirðinga. Sá myndakostur er ekki birtur á vefnum."})}),e.jsx(b,{delay:90,className:"lg:col-span-5",children:e.jsx("p",{className:"max-w-[48ch] text-[16px] leading-relaxed md:text-[16.5px]",style:{color:y},children:"Myndirnar hér að neðan eru úr starfi safnsins, viðburðum þess og sýningum. Þetta er boð um að leita í ljósmyndasafnið, ekki ljósmyndasafnið sjálft."})})]}),e.jsx(b,{className:"mt-9 md:mt-12",children:e.jsxs("div",{className:"mj-cs",children:[e.jsxs("div",{className:"mj-cs-head",children:[e.jsx("span",{className:"text-[11px] uppercase tracking-[0.16em]",style:t,children:"Myndaörk · Starf, viðburðir og sýningar"}),e.jsxs("span",{className:"text-[11px] uppercase tracking-[0.16em]",style:{...t,color:h},children:[xe.length," myndir"]})]}),e.jsxs("div",{className:"mj-cs-grid",role:"group","aria-label":"Myndaörk með ellefu ljósmyndum úr starfi Minjasafns Austurlands",children:[xe.map((a,s)=>e.jsxs("figure",{className:"mj-cs-cell mj-cs-frame",tabIndex:0,children:[e.jsx("div",{className:"mj-cs-media",children:e.jsx("img",{src:a.src,alt:a.alt,loading:"lazy",decoding:"async"})}),e.jsx("figcaption",{className:"mj-cs-no text-[11px] uppercase tracking-[0.16em]",style:t,children:String(s+1).padStart(2,"0")})]},a.src)),e.jsx("div",{className:"mj-cs-cell mj-cs-blank","aria-hidden":!0})]}),e.jsxs("div",{className:"mj-cs-foot",children:[e.jsx("span",{className:"text-[11px] uppercase tracking-[0.16em]",style:t,children:"Myndir: Minjasafn Austurlands"}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.16em]",style:t,children:"Ekki úr Ljósmyndasafni Austurlands"})]})]})})]})})}const se=["#3B2717","#5C3823","#7B4A31",h];function ct(){const t=l.useRef(null),a=l.useRef(null),s=l.useRef([]);return l.useEffect(()=>{var v;const n=t.current,r=a.current;if(!n||!r)return;const i=()=>{const g=n.getBoundingClientRect(),k=s.current.map(u=>{if(!u)return 0;const N=u.getBoundingClientRect();return N.top+N.height/2-g.top}),j=Math.max(1,g.height-16),A=u=>H((u-8)/j)*100,E=Math.min(3,3/j*100),C=[];let f=0;for(let u=0;u<se.length;u++){const N=u===se.length-1?100:A(k[u+1]??0);if(C.push(`${se[u]} ${f.toFixed(2)}% ${Math.max(f,N).toFixed(2)}%`),u<se.length-1){const S=Math.min(100,N+E);C.push(`rgba(237,230,218,.58) ${N.toFixed(2)}% ${S.toFixed(2)}%`),f=S}}return r.style.backgroundImage=`linear-gradient(180deg, ${C.join(", ")})`,k};let c=i(),o=0;const x=()=>{window.clearTimeout(o),o=window.setTimeout(()=>{c=i()},180)};window.addEventListener("resize",x),typeof document<"u"&&((v=document.fonts)!=null&&v.ready)&&document.fonts.ready.then(()=>{c=i()}).catch(()=>{});const p=typeof ResizeObserver<"u"?new ResizeObserver(x):null;if(p==null||p.observe(n),Se())return()=>{window.clearTimeout(o),window.removeEventListener("resize",x),p==null||p.disconnect()};const w=s.current.map(()=>!1),R=q(g=>{const k=n.getBoundingClientRect();if(k.bottom<-120||k.top>g+120)return;const j=H((g*.88-k.top)/k.height),A=8+j*Math.max(1,k.height-16),E=c.map(f=>A>=f),C=E.some((f,u)=>f!==w[u]);return()=>{if(r.style.clipPath=`inset(0 0 ${((1-j)*100).toFixed(2)}% 0)`,r.style.transform=`scaleX(${(.34+.66*j).toFixed(3)})`,C)for(let f=0;f<E.length;f++){w[f]=E[f];const u=s.current[f];u&&(u.style.background=E[f]?h:F)}}});return()=>{R(),window.clearTimeout(o),window.removeEventListener("resize",x),p==null||p.disconnect()}},[]),e.jsx("section",{id:"sagan",className:"py-20 md:py-28",style:{background:F},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 04",depth:4,kicker:"Sagan · 1942 til dagsins í dag",title:"Neðsta lagið"}),e.jsx(b,{delay:90,children:e.jsx("p",{className:"mt-6 max-w-[52ch] text-[19px] leading-relaxed md:text-[21px]",style:{fontFamily:ye,fontWeight:300,color:d},children:"Safnkosturinn varð til eins og jarðlög verða til: heimili fyrir heimili, gripur fyrir grip, lag ofan á lag."})}),e.jsxs("div",{ref:t,className:"relative mt-12 md:mt-16",children:[e.jsx("div",{className:"mj-tl-base absolute bottom-2 top-2","aria-hidden":!0}),e.jsx("div",{ref:a,className:"mj-tl-rule absolute bottom-2 top-2","aria-hidden":!0}),e.jsx("ol",{className:"flex flex-col gap-10 md:gap-12",children:We.map((n,r)=>e.jsxs("li",{className:"relative pl-9 md:pl-12",children:[e.jsx("span",{ref:i=>{s.current[r]=i},className:"mj-tl-dot absolute left-0 top-[6px] inline-block h-[11px] w-[11px] rounded-full",style:{border:`2px solid ${h}`},"aria-hidden":!0}),e.jsxs(b,{delay:r*60,children:[e.jsx("p",{className:"text-[13px] uppercase tracking-[0.14em] tabular-nums",style:{fontFamily:m,fontWeight:500,color:h},children:n.year}),e.jsx("p",{className:"mt-2 max-w-[58ch] text-[17px] leading-relaxed md:text-[18px]",style:{fontFamily:ye,fontWeight:400,color:"rgba(237,230,218,.86)"},children:n.text})]})]},n.year))})]})]})})}function dt(){return e.jsx("section",{id:"lindarbakki",className:"py-20 md:py-28",style:{background:F},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Lag 05",depth:5,kicker:"Út fyrir húsið",title:"Lindarbakki og fleiri verkefni"}),e.jsx(b,{className:"mt-12",children:e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx(ne,{src:I.lindarbakki.src,alt:I.lindarbakki.alt,srcSet:I.lindarbakki.srcSet,sizes:"100vw",drift:12,className:"aspect-[4/3] md:aspect-[21/9]"}),e.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-2/5","aria-hidden":!0,style:{background:"linear-gradient(to top, rgba(22,19,15,0.85), rgba(22,19,15,0))"}}),e.jsx("span",{className:"absolute left-4 top-4 z-[5] md:left-6 md:top-6",children:e.jsx(re,{tone:"fill",children:"Gestastaður"})}),e.jsx("p",{className:"absolute bottom-4 left-4 z-[5] max-w-[44ch] text-[15px] leading-relaxed md:bottom-6 md:left-6 md:text-[16px]",style:{color:d},children:"Lindarbakki á Borgarfirði eystra er meðal verkefna safnsins."})]})}),e.jsxs("div",{className:"mt-10",children:[e.jsx(X,{href:B.lindarbakki,children:"Lindarbakki"}),Be.map(t=>e.jsx(X,{href:t.href,children:t.name},t.name)),e.jsx("div",{style:{borderTop:`1px solid ${T}`},"aria-hidden":!0})]})]})})}function mt(){return e.jsx("section",{id:"fraedsla",className:"py-20 md:py-28",style:{background:F},children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 md:px-10",children:[e.jsx(Y,{layer:"Upp aftur",depth:5,kicker:"Fræðsla og miðlun",title:"Næsta kynslóð"}),e.jsxs("div",{className:"mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12",children:[e.jsx(b,{className:"lg:col-span-7",children:e.jsx(ne,{src:I.hreindyrKrakkar.src,alt:I.hreindyrKrakkar.alt,srcSet:I.hreindyrKrakkar.srcSet,sizes:"(min-width: 1024px) 58vw, 100vw",drift:11,className:"aspect-[4/3] md:aspect-[16/10]"})}),e.jsxs("div",{className:"lg:col-span-5",children:[e.jsx(b,{children:e.jsx("p",{className:"max-w-[48ch] text-[16px] leading-relaxed md:text-[16.5px]",style:{color:y},children:"Skólaheimsóknir eru fastur liður í starfi safnsins: nemendur vinna með alvöru gripi, alvöru hreindýrahorn og alvöru sögu."})}),e.jsxs("div",{className:"mt-8",children:[e.jsx(X,{href:B.skolaheimsoknir,children:"Skólaheimsóknir"}),e.jsx(X,{href:B.joladagatal,children:"Jóladagatal safnsins"}),e.jsx(X,{href:B.frodleikur,children:"Fróðleikur"}),e.jsx("div",{style:{borderTop:`1px solid ${T}`},"aria-hidden":!0})]}),e.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[e.jsxs("a",{href:B.instagram,target:"_blank",rel:"noreferrer",className:"mj-cta inline-flex items-center gap-2.5 rounded-full px-5 text-[13px] uppercase tracking-[0.08em]",style:{fontFamily:m,fontWeight:500,border:`1px solid ${D}`,color:d,minHeight:46},children:[e.jsx(Ye,{size:16,style:{color:h},"aria-hidden":!0}),"@minjasafnausturlands"]}),e.jsxs("a",{href:B.facebook,target:"_blank",rel:"noreferrer",className:"mj-cta inline-flex items-center gap-2.5 rounded-full px-5 text-[13px] uppercase tracking-[0.08em]",style:{fontFamily:m,fontWeight:500,border:`1px solid ${D}`,color:d,minHeight:46},children:[e.jsx(Ve,{size:16,style:{color:h},"aria-hidden":!0}),"Facebook"]})]})]})]})]})})}function pt(){const t=l.useRef(null);return l.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=t.current;if(a)return q((s,n)=>{const r=a.getBoundingClientRect();if(r.top>s+60)return;const i=H((s-r.top)/r.height),c=Math.pow(i,1.5),o=n>=768?22:10,x=n>=768?26:18,p=Math.min(r.height*.08,52),w=(c*p).toFixed(1),R=(c*o).toFixed(2),v=(c*x).toFixed(1);return()=>{a.style.clipPath=`inset(${w}px ${R}% round ${v}px)`}})},[]),e.jsx("footer",{"aria-label":"Neðanmál",children:e.jsx("div",{ref:t,className:"mj-ap",style:{background:ce},children:e.jsxs("div",{className:"mx-auto flex min-h-[78svh] w-full max-w-[560px] flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:min-h-[84svh]",style:{maxWidth:"min(560px, 52vw + 120px)"},children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.2em]",style:{fontFamily:m,fontWeight:500,color:h},children:"Lag fyrir lag"}),e.jsx("p",{className:"mt-4 uppercase leading-[0.98] tracking-[-0.015em] text-[clamp(1.6rem,4vw,2.8rem)]",style:{fontFamily:m,fontWeight:800,color:d},children:"Minjasafn Austurlands"}),e.jsxs("div",{className:"mt-8 flex flex-col items-center gap-2.5",children:[e.jsxs("p",{className:"flex items-center gap-2 text-[15px]",style:{color:y},children:[e.jsx(be,{size:15,style:{color:h},"aria-hidden":!0}),W.address]}),e.jsxs("a",{href:W.emailHref,className:"mj-ul flex items-center gap-2 text-[15px]",style:{color:d},children:[e.jsx(we,{size:15,style:{color:h},"aria-hidden":!0}),W.email]})]}),e.jsx("div",{className:"mt-8 w-full",style:{borderTop:`1px solid ${T}`},children:e.jsxs("p",{className:"mt-5 text-[13px] leading-relaxed",style:{color:y},children:["Vetur, 1. sept til 31. maí: þri til fös 11:00–16:00.",e.jsx("br",{}),"Sumar, 1. júní til 31. ágúst: mán til fös 10:00–17:00, lau 11:00–17:00."]})}),e.jsx("p",{className:"mt-6 text-[13px]",style:{color:y},children:"Opinbert byggðasafn Austurlands, stofnað 1943."}),e.jsxs("a",{href:W.website,target:"_blank",rel:"noreferrer",className:"mj-ul mt-5 inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.1em]",style:{fontFamily:m,fontWeight:500,color:h},children:["minjasafn.is",e.jsx(Z,{size:15,"aria-hidden":!0})]})]})})})}const Ae="mj-kjarnasyni-seen",ht=1100,ft=1250,ut=220,xt=70,gt=620,jt=380,yt=2240;function bt(){if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return!1;try{if(new URLSearchParams(window.location.search).has("loader"))return!0}catch{}try{if(sessionStorage.getItem(Ae)==="1")return!1}catch{}return!0}function wt(){const[t,a]=l.useState(bt),s=l.useRef(null),n=l.useRef(null),r=l.useRef(null);return l.useEffect(()=>{var fe;if(!t)return;const i=s.current,c=n.current;if(!i||!c)return;try{sessionStorage.setItem(Ae,"1")}catch{}const o=document.documentElement,x=document.body,p=o.style.overflow,w=x.style.overflow;o.style.overflow="hidden",x.style.overflow="hidden";let R=!1;const v=()=>{R||(R=!0,o.style.overflow=p,x.style.overflow=w)},g=window.innerHeight,k=Array.from(document.images).filter(G=>{if(G.loading==="lazy")return!1;const V=G.getBoundingClientRect();return V.width>0&&V.height>0&&V.top<g*1.15&&V.bottom>-1}),j=k.length+1;let A=!1;const E=()=>{A=!0};(fe=document.fonts)!=null&&fe.ready?document.fonts.ready.then(E).catch(E):E();const C=performance.now();let f=0,u=0,N=0,S=-1,L=!1,M,me=0,ee=0;const pe=window.setTimeout(()=>{f=performance.now(),u=N},ft),ie=()=>{window.removeEventListener("pointerdown",P,!0),window.removeEventListener("touchmove",P,!0),window.removeEventListener("wheel",P,!0),window.removeEventListener("keydown",P,!0)},he=G=>{L||(L=!0,window.clearTimeout(pe),window.clearTimeout(ee),M==null||M(),ie(),v(),i.classList.add("is-out"),G&&i.classList.add("is-skip"),me=window.setTimeout(()=>a(!1),(G?jt:gt)+30))};function P(){he(!0)}const te={passive:!0,capture:!0};window.addEventListener("pointerdown",P,te),window.addEventListener("touchmove",P,te),window.addEventListener("wheel",P,te),window.addEventListener("keydown",P,te),M=q(()=>{if(L)return;const G=performance.now();let V=A?1:0;for(let O=0;O<k.length;O++)k[O].complete&&V++;const Te=V/j,Re=(G-C)/ht;if(f)N=Math.min(1,u+(1-u)*((G-f)/ut));else{const O=Math.min(Te,Re,1),K=O-N;N=K<.006?O:N+K*.28}const oe=N;return()=>{c.style.transform=`scaleX(${oe.toFixed(4)})`;const O=Math.round(oe*100);if(O!==S){S=O;const K=r.current;K&&(K.textContent=`${String(O).padStart(3,"0")}%`)}oe>=.9995&&!ee&&(ee=window.setTimeout(()=>he(!1),xt))}});const Fe=window.setTimeout(()=>{M==null||M(),ie(),v(),a(!1)},yt);return()=>{window.clearTimeout(pe),window.clearTimeout(Fe),window.clearTimeout(me),window.clearTimeout(ee),M==null||M(),ie(),v()}},[t]),t?e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:s,className:"mj-load","aria-hidden":"true",children:e.jsxs("div",{className:"mj-load-mod",style:{fontFamily:m},children:[e.jsxs("p",{className:"mj-load-mark",children:[e.jsx("span",{children:"Minjasafn"}),e.jsx("span",{children:"Austurlands"})]}),e.jsx("div",{className:"mj-load-track",children:e.jsx("div",{ref:n,className:"mj-load-bar"})}),e.jsxs("div",{className:"mj-load-meta",style:{marginTop:12},children:[e.jsx("span",{children:"Laufskógar 1, Egilsstöðum"}),e.jsx("span",{ref:r,className:"mj-load-pct",children:"000%"})]})]})}),e.jsx("p",{className:"mj-load-sr",role:"status",children:"Síðan er að hlaðast."})]}):null}function Vt(){const[t,a]=l.useState(!1);return l.useEffect(()=>{a(!0)},[]),l.useEffect(()=>{document.title=ue.title,Ce(F),document.documentElement.lang="is";const s=document.querySelector('meta[name="description"]'),n=(s==null?void 0:s.getAttribute("content"))??"";s==null||s.setAttribute("content",ue.description);const r=document.createElement("script");r.type="application/ld+json",r.textContent=JSON.stringify(Le),document.head.appendChild(r);const i=[`${_}/CabinetGrotesk-Variable.woff2`].map(c=>{const o=document.createElement("link");return o.rel="preload",o.as="font",o.type="font/woff2",o.href=c,o.crossOrigin="anonymous",document.head.appendChild(o),o});return()=>{s==null||s.setAttribute("content",n),r.remove(),i.forEach(c=>c.remove())}},[]),e.jsxs("div",{className:`mj-page ${t?"mj-js":""} min-h-[100svh] antialiased`,style:{background:F,color:d,fontFamily:m,fontWeight:400},children:[e.jsx("style",{children:Je}),e.jsx(wt,{}),e.jsx("a",{href:"#efni",className:"mj-skip",children:"Beint í efnið"}),e.jsx(st,{}),e.jsxs("main",{id:"efni",children:[e.jsx(at,{}),e.jsx(rt,{}),e.jsx(nt,{}),e.jsx(it,{}),e.jsx(ot,{}),e.jsx(lt,{}),e.jsx(ct,{}),e.jsx(dt,{}),e.jsx(mt,{})]}),e.jsx(pt,{}),e.jsx("div",{className:"px-5 py-5 text-center text-[11px] tracking-[0.16em]",style:{color:y,borderTop:`1px solid ${T}`},children:"FRUMGERÐ · SNDR STUDIO"}),e.jsx(_e,{company:ge}),e.jsx(Ge,{company:ge})]})}export{Vt as default};
