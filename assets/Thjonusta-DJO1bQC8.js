import{r as p,s as N,j as e,L as C}from"./index-DI08i-ph.js";import{g as n}from"./index-CzGW6FVa.js";import{S}from"./ScrollTrigger-DNECHiyU.js";import{aL as f,ay as E,aA as $,aG as z,aC as x,g as L}from"./companies-DdqSmTOz.js";import{P as R}from"./PreviewChrome-D9wFybxh.js";import{P as q}from"./PreviewFooter-CO3A-l8l.js";import{r as k,o as T,S as P,C as M,a as A,B as G,b as y,H as b,R as j,c as I,d as F,e as H,f as O,g as c}from"./shared-DjgGnM9_.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-CmE1bkHM.js";import"./createLucideIcon-qCKcy8y4.js";import"./proxy-Bh5ZkZD-.js";import"./send-iTPG1I6I.js";import"./index-DuuJECQ6.js";import"./external-link-BZsZYOEi.js";import"./x-DTlfv9hz.js";import"./mail-DdvqhZJp.js";import"./SndrBadge-COVdZAHd.js";n.registerPlugin(S);const w=L("chrislund");function D(v,a,g){p.useEffect(()=>{if(!v)return;const l=a.current;if(!l)return;if(k()){l.classList.add("cl-static"),l.classList.remove("cl-pre");return}l.classList.add("cl-js");const d=new IntersectionObserver(r=>r.forEach(i=>i.isIntersecting&&i.target.classList.add("is-in")),{threshold:0,rootMargin:"0px 0px -8% 0px"});l.querySelectorAll(".cl-rv").forEach(r=>{r.getBoundingClientRect().top<window.innerHeight&&r.classList.add("is-in"),d.observe(r)});const u=n.context(()=>{g?F(l):l.classList.remove("cl-pre"),l.querySelectorAll("[data-cl-headline]").forEach(r=>{if(r.dataset.clEnter==="word")return;const i=r.querySelectorAll(".cl-word");i.length&&n.fromTo(i,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:r,start:"top 88%",once:!0}})})},l),h=H(l),m=()=>{S.update(),h.tick()};window.addEventListener("scroll",m,{passive:!0});let s=null,t=null,o=!1;return O().then(r=>{if(r){if(o){r.destroy();return}s=r,r.on("scroll",m),t=i=>{r.raf(i*1e3)},n.ticker.add(t),n.ticker.lagSmoothing(0)}}),()=>{o=!0,d.disconnect(),t&&n.ticker.remove(t),window.removeEventListener("scroll",m),u.revert(),s==null||s.destroy()}},[v,a,g])}function ve({slug:v}){const a=f.find(s=>s.slug===v)??f[0],[g,l]=p.useState(!1),d=p.useRef(null),u=p.useRef(!k()&&!T()),h=u;p.useEffect(()=>{N("#F5F4F1"),document.title=`${a.name} · Christopher Lund`;let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.name="description",document.head.appendChild(s));const t=s.content;s.content=`${a.name} hjá Christopher Lund ljósmyndara: ${a.intro.slice(0,130)}`;const o=document.documentElement.lang;return document.documentElement.lang="is",l(!0),()=>{s.content=t,document.documentElement.lang=o}},[a]),D(g,d,u.current);const m=f.filter(s=>s.slug!==a.slug);return e.jsxs("div",{ref:d,className:`cl-root ${h.current?"cl-pre":""}`,children:[e.jsx("style",{children:P+_}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(E)}}),e.jsx(R,{company:w}),e.jsx(M,{}),e.jsx(A,{home:!1,tone:"ink"}),e.jsxs("main",{children:[e.jsxs("section",{className:"cl-sv-head",children:[e.jsx("div",{className:"cl-sv-back",children:e.jsx(G,{fallback:`${y}#thjonusta`,label:"Til baka"})}),e.jsxs("p",{className:"cl-sv-kicker","data-cl-enter":"item",children:["Frá töku að prenti · ",a.nr," af ",String(f.length).padStart(2,"0")]}),e.jsx(b,{as:"h1",text:a.title,size:96,floor:36,measure:880,enter:!0}),e.jsx("p",{className:"cl-body cl-sv-intro","data-cl-enter":"item",children:a.intro})]}),e.jsxs("section",{className:"cl-sv-craft",children:[e.jsx("div",{className:`cl-sv-figs ${a.photos.length>1?"is-two":""}`,children:a.photos.map((s,t)=>e.jsxs("figure",{className:"cl-sv-fig cl-rv",children:[e.jsx("img",{src:s.photo.src,srcSet:$(s.photo.src),sizes:a.photos.length>1?"(max-width: 991px) 46vw, 22vw":"(max-width: 991px) 92vw, 42vw",style:{aspectRatio:s.photo.ratio},alt:s.photo.alt,loading:"lazy",decoding:"async"}),e.jsx("figcaption",{className:"cl-fig-cap",children:s.cap})]},t))}),e.jsxs("div",{className:"cl-sv-side",children:[e.jsx(j,{label:"Tækin og aðferðin"}),e.jsx("dl",{className:"cl-sv-facts",children:a.facts.map(([s,t])=>e.jsxs("div",{className:"cl-rv",children:[e.jsx("dt",{children:s}),e.jsx("dd",{children:t})]},s))}),a.blocks.map(s=>e.jsxs("div",{className:"cl-sv-block cl-rv",children:[e.jsx("h2",{className:"cl-sv-block-h",children:s.h}),s.body.map((t,o)=>e.jsx("p",{className:"cl-body cl-sv-block-p",children:t},o))]},s.h))]})]}),a.steps&&e.jsxs("section",{className:"cl-sv-steps","aria-label":"Ferlið",children:[e.jsx(j,{label:"Svona gengur það fyrir sig"}),e.jsx("ol",{className:"cl-sv-steps-list",children:a.steps.map((s,t)=>e.jsxs("li",{className:"cl-rv",children:[e.jsx("span",{className:"cl-sv-step-nr",children:t+1}),e.jsx("span",{className:"cl-sv-step-h",children:s.h}),e.jsx("span",{className:"cl-sv-step-b",children:s.b})]},s.h))})]}),a.register&&e.jsxs("section",{className:"cl-sv-reg","aria-label":a.register.h,children:[e.jsx(j,{label:a.register.h}),e.jsx("p",{className:"cl-body cl-rv",children:a.register.note}),e.jsx("ul",{className:"cl-sv-reg-list",children:a.register.items.map(s=>e.jsxs("li",{className:"cl-rv",children:[e.jsx("span",{className:"cl-sv-reg-name",children:s.name}),e.jsx("span",{className:"cl-sv-reg-note",children:s.note})]},s.name))}),e.jsx("p",{className:"cl-sv-reg-foot cl-rv",children:a.register.foot})]}),e.jsx("section",{className:"cl-sv-quotes","aria-label":"Umsagnir",children:a.quotes.map(s=>{const t=z[s];return e.jsxs("blockquote",{className:"cl-sv-quote cl-rv",children:[e.jsxs("p",{children:["„",t.quote,"“"]}),e.jsxs("footer",{children:[t.name,", ",t.org]})]},s)})}),e.jsxs("section",{className:"cl-sv-close",children:[e.jsx(b,{text:"Sendu myndirnar eða hringdu.",size:72,floor:30,measure:760}),e.jsx("a",{className:"cl-sv-close-tel cl-rv",href:x.phoneHref,children:x.phone}),e.jsx("p",{className:"cl-sv-close-addr cl-rv",children:x.address}),e.jsxs("div",{className:"cl-sv-others cl-rv",children:[e.jsx("span",{className:"cl-sv-others-label",children:"Önnur þjónusta"}),m.map(s=>e.jsxs(C,{className:"cl-sv-other",to:`${y}/${s.slug}`,children:[s.name," →"]},s.slug))]})]}),e.jsx(I,{})]}),e.jsx(q,{company:w})]})}const _=`
.cl-sv-head { padding: calc(var(--u) * 130) calc(var(--u) * 34) calc(var(--u) * 40); }
.cl-sv-back { margin-bottom: calc(var(--u) * 40); }
.cl-sv-kicker { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(12,12)}; letter-spacing: .16em; text-transform: uppercase; color: var(--cl-gold-text); margin: 0 0 calc(var(--u) * 20); }
.cl-sv-intro { max-width: 62ch; font-size: ${c(19,16)}; }

.cl-sv-craft {
  display: grid; grid-template-columns: 1fr 1.05fr; gap: calc(var(--u) * 80);
  align-items: start; padding: calc(var(--u) * 60) calc(var(--u) * 34) calc(var(--u) * 110);
}
.cl-sv-figs { display: grid; gap: calc(var(--u) * 44); align-content: start; }
/* Two photographs sit SIDE BY SIDE, not stacked. Stacked, two portraits in
   this column ran 1653px tall against a 557px column of specs beside them,
   which read as an empty page. The slight drop on the second keeps the pair
   from looking like a rigid diptych. */
.cl-sv-figs.is-two { grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 26); align-items: start; }
.cl-sv-figs.is-two .cl-sv-fig:nth-child(2) { margin-top: calc(var(--u) * 40); }
.cl-sv-fig { margin: 0; }
.cl-sv-fig img { width: 100%; height: auto; object-fit: cover; display: block; }
.cl-sv-facts { margin: 0 0 calc(var(--u) * 44); }
.cl-sv-facts div { display: grid; grid-template-columns: minmax(120px, 32%) 1fr; gap: 18px; padding: 13px 0; border-top: 1px solid var(--cl-hair); }
.cl-sv-facts dt { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(11.5,11.5)}; letter-spacing: .13em; text-transform: uppercase; color: var(--cl-mute); padding-top: 2px; }
.cl-sv-facts dd { margin: 0; font-size: ${c(15.5,14)}; line-height: 1.55; }
.cl-sv-block { margin-top: calc(var(--u) * 36); }
.cl-sv-block-h { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(26,19)}; margin: 0 0 calc(var(--u) * 14); }
.cl-sv-block-p { margin-bottom: calc(var(--u) * 14); }

.cl-sv-steps { padding: 0 calc(var(--u) * 34) calc(var(--u) * 110); }
.cl-sv-steps-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 44); }
.cl-sv-steps-list li { display: grid; gap: 8px; align-content: start; padding-top: 16px; border-top: 1px solid var(--cl-hair); }
.cl-sv-step-nr { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(44,28)}; line-height: 1; color: var(--cl-gold-text); font-variant-numeric: tabular-nums; }
.cl-sv-step-h { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(21,17)}; }
.cl-sv-step-b { font-size: ${c(14.5,13)}; line-height: 1.6; color: var(--cl-mute); }

.cl-sv-reg { background: #ECEAE4; padding: calc(var(--u) * 110) calc(var(--u) * 34); }
.cl-sv-reg-list { list-style: none; margin: calc(var(--u) * 40) 0 0; padding: 0; }
.cl-sv-reg-list li { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; padding: 14px 0; border-top: 1px solid var(--cl-hair); }
.cl-sv-reg-name { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(34,21)}; letter-spacing: -.01em; }
.cl-sv-reg-note { flex: none; font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(11.5,11.5)}; letter-spacing: .13em; text-transform: uppercase; color: var(--cl-mute); }
.cl-sv-reg-foot { max-width: 68ch; margin: calc(var(--u) * 36) 0 0; font-size: ${c(14.5,13)}; line-height: 1.65; color: var(--cl-mute); }

.cl-sv-quotes { padding: calc(var(--u) * 110) calc(var(--u) * 34) calc(var(--u) * 40); display: grid; gap: calc(var(--u) * 70); }
.cl-sv-quote { margin: 0 auto; max-width: calc(var(--u) * 880); text-align: center; }
.cl-sv-quote p { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(30,19)}; line-height: 1.34; letter-spacing: -.01em; margin: 0 0 calc(var(--u) * 20); }
.cl-sv-quote footer { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(12.5,12)}; letter-spacing: .14em; text-transform: uppercase; color: var(--cl-mute); }

.cl-sv-close { text-align: center; padding: calc(var(--u) * 110) calc(var(--u) * 34) calc(var(--u) * 120); }
.cl-sv-close .cl-headline { margin-inline: auto; }
.cl-sv-close-tel {
  display: inline-block; font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(96,42)};
  letter-spacing: -.02em; color: inherit; text-decoration: none; margin-top: calc(var(--u) * 14);
  transition: color .3s cubic-bezier(.16,1,.3,1); font-variant-numeric: tabular-nums;
}
.cl-sv-close-tel:hover { color: var(--cl-gold-text); }
.cl-sv-close-addr { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(13,12.5)}; color: var(--cl-mute); margin-top: calc(var(--u) * 18); }
.cl-sv-others { display: flex; justify-content: center; align-items: baseline; gap: calc(var(--u) * 36); flex-wrap: wrap; margin-top: calc(var(--u) * 54); }
.cl-sv-others-label { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${c(11.5,11.5)}; letter-spacing: .16em; text-transform: uppercase; color: var(--cl-mute); }
.cl-sv-other {
  font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${c(19,16)};
  color: var(--cl-ink); text-decoration: none; border-bottom: 1px solid var(--cl-hair); padding-bottom: 2px;
  transition: color .3s cubic-bezier(.16,1,.3,1), border-color .3s;
}
.cl-sv-other:hover { color: var(--cl-gold-text); border-color: currentColor; }

@media (max-width: 991px) {
  .cl-sv-craft { grid-template-columns: 1fr; gap: calc(var(--u) * 44); }
  .cl-sv-figs.is-two .cl-sv-fig:nth-child(2) { margin-top: 0; }
  .cl-sv-steps-list { grid-template-columns: 1fr; gap: 26px; }
}
@media (max-width: 640px) {
  .cl-sv-head, .cl-sv-craft, .cl-sv-steps, .cl-sv-reg, .cl-sv-quotes, .cl-sv-close { padding-left: 20px; padding-right: 20px; }
  .cl-sv-head { padding-top: calc(var(--u) * 150); }
}
`;export{ve as default};
