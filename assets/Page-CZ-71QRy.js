import{r as f,aO as Y,s as U,j as e,L as C}from"./index-Dc_HgAJ6.js";import{g as o}from"./index-CzGW6FVa.js";import{S as z}from"./ScrollTrigger-DNECHiyU.js";import{ay as J,az as b,aA as y,aB as K,aC as S,aD as X,aE as _,aF as Q,aG as O,aH as B,g as Z,aI as ee,aJ as W}from"./companies-DOEqWmuu.js";import{P as ae}from"./PreviewChrome-CkA6jr9u.js";import{P as te}from"./PreviewFooter-BwZL1Q_q.js";import{r as A,o as re,S as ie,C as se,a as le,H as j,R as $,b as L,c as ce,d as ne,e as oe,f as de,g as i,h as pe}from"./shared-4A_fUwgL.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-BENw_Vsu.js";import"./createLucideIcon-CDCAZQTs.js";import"./proxy-Jr-HjXDl.js";import"./send-BoxgQv0j.js";import"./index-3mK223Ts.js";import"./external-link-BNeX5H3H.js";import"./x-Bsdy_ypF.js";import"./mail-NBBMjiMs.js";import"./SndrBadge-BalcCTR3.js";const R="cl-wall-y",M=()=>{try{sessionStorage.setItem(R,String(Math.round(window.scrollY)))}catch{}};o.registerPlugin(z);const V=Z("chrislund"),me=["thoka","blalys","halendi","timburhus","sjor","landrover","vitni"],E=me.map(m=>ee.find(h=>h.id===m&&h.wall)).filter(m=>!!m);function ue(m,h,k){f.useEffect(()=>{if(!m)return;const r=document.querySelector(".cl-root");if(!r)return;if(A()){r.classList.add("cl-static"),r.classList.remove("cl-pre");return}r.classList.add("cl-js"),z.config({ignoreMobileResize:!0});const x=new IntersectionObserver(s=>s.forEach(w=>w.isIntersecting&&w.target.classList.add("is-in")),{threshold:0,rootMargin:"0px 0px -8% 0px"});r.querySelectorAll(".cl-rv").forEach(s=>{s.getBoundingClientRect().top<window.innerHeight&&s.classList.add("is-in"),x.observe(s)});const v=window.matchMedia("(min-width: 992px)").matches,u=o.context(()=>{k?ne(r):r.classList.remove("cl-pre"),r.querySelectorAll("[data-cl-headline]").forEach(l=>{if(l.closest(".cl-wall")&&v||l.dataset.clEnter==="word")return;const g=l.querySelectorAll(".cl-word");g.length&&o.fromTo(g,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:l,start:"top 88%",once:!0}})});const s=r.querySelector(".cl-hero img");s&&o.to(s,{yPercent:8,ease:"none",scrollTrigger:{trigger:".cl-hero",start:"top top",end:"bottom top",scrub:.6}});const w=r.querySelector(".cl-wall"),q=r.querySelector(".cl-wall-track"),D=r.querySelector(".cl-wall-progress"),P=r.querySelector(".cl-wall-count"),G=()=>q?Math.max(1,q.scrollWidth-window.innerWidth):1;if(w&&q&&v){const l=o.to(q,{x:()=>-G(),ease:"none",force3D:!0});z.create({animation:l,trigger:w,pin:w,scrub:1,start:"top top",end:()=>"+="+G(),anticipatePin:1,invalidateOnRefresh:!0,onUpdate:n=>{if(D&&(D.style.transform=`scaleX(${n.progress})`),P){const F=Math.min(E.length,Math.max(1,Math.round(n.progress*E.length+.5))),H=`${String(F).padStart(2,"0")} / ${String(E.length).padStart(2,"0")}`;P.textContent!==H&&(P.textContent=H)}}}),r.querySelectorAll(".cl-plate-media img").forEach(n=>{o.fromTo(n,{xPercent:7.5,scale:1.16},{xPercent:-7.5,scale:1.16,ease:"none",scrollTrigger:{trigger:n.closest(".cl-plate"),containerAnimation:l,start:"left 100%",end:"right 0%",scrub:!0}})}),r.querySelectorAll(".cl-plate-cap").forEach(n=>{o.fromTo(n,{y:26,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:n.closest(".cl-plate"),containerAnimation:l,start:"left 72%",once:!0}})});const g=r.querySelector(".cl-vitni-title");g&&o.fromTo(g.querySelectorAll(".cl-word"),{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:g.closest(".cl-plate"),containerAnimation:l,start:"left 62%",once:!0}})}v&&r.querySelectorAll(".cl-bok-pair").forEach(l=>{const g=l.querySelector(".cl-bok-fig-a"),n=l.querySelector(".cl-bok-fig-b");if(!g||!n)return;const F={trigger:l,start:"top 90%",end:"bottom 10%",scrub:.6};o.fromTo(g,{y:34},{y:-34,ease:"none",scrollTrigger:F}),o.fromTo(n,{y:-34},{y:34,ease:"none",scrollTrigger:{...F}})}),r.querySelectorAll("[data-cl-count]").forEach(l=>{const g=Number(l.dataset.clCount||0),n={v:0};l.textContent="0",o.to(n,{v:g,duration:1.6,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 85%",once:!0},onUpdate:()=>{l.textContent=String(Math.round(n.v))}})})},r),a=oe(r),c=()=>{z.update(),a.tick()};window.addEventListener("scroll",c,{passive:!0});let d=!1;const t=()=>{if(z.refresh(),a.refresh(),d||!h)return;d=!0;const s=Number(sessionStorage.getItem(R)||0);s>0&&(window.scrollTo({top:s,behavior:"instant"}),z.update()),sessionStorage.removeItem(R)},p=window.setTimeout(t,260);window.addEventListener("load",t);let N=null,T=null,I=!1;return de().then(s=>{if(s){if(I){s.destroy();return}N=s,window.__clLenis=s,s.on("scroll",c),T=w=>{s.raf(w*1e3)},o.ticker.add(T),o.ticker.lagSmoothing(0)}}),()=>{I=!0,x.disconnect(),T&&o.ticker.remove(T),window.clearTimeout(p),window.removeEventListener("scroll",c),window.removeEventListener("load",t),u.revert(),N==null||N.destroy(),window.__clLenis=null}},[m,h,k])}function ge(){const[m,h]=f.useState(0),[k,r]=f.useState(!1),x=f.useRef(null),v=f.useRef({x:0,y:0}),u=f.useRef({x:0,y:0}),a=W[m],c=()=>pe()&&!A();f.useEffect(()=>{if(!k)return;let t=0;const p=()=>{u.current.x+=(v.current.x-u.current.x)*.14,u.current.y+=(v.current.y-u.current.y)*.14;const N=x.current;N&&(N.style.transform=`translate3d(${u.current.x.toFixed(1)}px, ${u.current.y.toFixed(1)}px, 0) translate(-50%, -50%)`),t=requestAnimationFrame(p)};return t=requestAnimationFrame(p),()=>cancelAnimationFrame(t)},[k]);const d=t=>{v.current={x:t.clientX,y:t.clientY}};return e.jsxs("div",{className:`cl-series ${k?"is-floating":""}`,children:[e.jsx("ul",{className:"cl-series-list","aria-label":"Myndaraðir",onPointerEnter:t=>{if(!c())return;v.current={x:t.clientX,y:t.clientY},u.current={x:t.clientX,y:t.clientY};const p=x.current;p&&(p.style.transform=`translate3d(${t.clientX}px, ${t.clientY}px, 0) translate(-50%, -50%)`),r(!0)},onPointerMove:d,onPointerLeave:()=>r(!1),children:W.map((t,p)=>e.jsx("li",{children:e.jsx(C,{className:`cl-series-row ${p===m?"is-active":""}`,to:`${L}/safn?rod=${t.key}`,onClick:M,onMouseEnter:()=>h(p),onFocus:()=>h(p),children:e.jsxs("span",{className:"cl-series-row-inner",children:[e.jsxs("span",{className:"cl-series-top",children:[e.jsx("span",{className:"cl-series-name",children:t.name}),e.jsx("span",{className:"cl-series-arrow","aria-hidden":"true",children:"→"})]}),e.jsx("span",{className:"cl-series-note",children:t.note})]})})},t.key))}),e.jsxs("figure",{className:"cl-series-preview","aria-live":"polite",children:[e.jsx("img",{src:a.photo.src,srcSet:y(a.photo.src),sizes:"(max-width: 991px) 92vw, 40vw",alt:a.photo.alt,loading:"lazy",decoding:"async"},a.photo.src),e.jsx("figcaption",{children:a.name})]}),e.jsx("figure",{className:"cl-series-float",ref:x,"aria-hidden":"true",children:e.jsx("img",{src:a.photo.src,srcSet:y(a.photo.src),sizes:"340px",alt:"",loading:"lazy",decoding:"async"})})]})}function De(){const[m,h]=f.useState(!1),k=f.useRef(null),r=Y()==="POP"&&!!sessionStorage.getItem(R),x=f.useRef(!A()&&!r&&!re()),v=x;f.useEffect(()=>{U("#F5F4F1"),document.title="Christopher Lund ljósmyndari";let a=document.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.name="description",document.head.appendChild(a));const c=a.content;a.content="Christopher Lund, ljósmyndari í yfir 20 ár á Íslandi. Landslag, fyrirtæki, arkitektúr og brúðkaup, auk FineArt prentunar og skönnunar. Sími 822 7601.";const d=document.documentElement.lang;return document.documentElement.lang="is",h(!0),()=>{a.content=c,document.documentElement.lang=d}},[]),ue(m,r,x.current);const u=a=>c=>{c.preventDefault();const d=document.getElementById(a);if(!d)return;const t=window.__clLenis;t&&!A()?t.scrollTo(d):d.scrollIntoView({behavior:A()?"auto":"smooth"}),history.replaceState(null,"",`#${a}`)};return e.jsxs("div",{ref:k,className:`cl-root ${v.current?"cl-pre":""}`,children:[e.jsx("style",{children:ie+fe}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(J)}}),e.jsx(ae,{company:V}),e.jsx(se,{}),e.jsx(le,{home:!0,onAnchor:u}),e.jsxs("main",{children:[e.jsxs("section",{className:"cl-hero",id:"top",children:[e.jsx("img",{"data-cl-enter":"media",src:b.vestrahorn.src,srcSet:y(b.vestrahorn.src),sizes:"100vw",alt:b.vestrahorn.alt,loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx(j,{as:"h1",className:"cl-hero-title",text:"Christopher Lund",size:120,floor:40,enter:!0}),e.jsx("div",{className:"cl-hero-block",children:e.jsx("p",{className:"cl-hero-sub","data-cl-enter":"item",children:"Ljósmyndari í yfir tuttugu ár: landslag, fyrirtæki og arkitektúr, ásamt FineArt prentun."})})]}),e.jsxs("section",{className:"cl-edit",children:[e.jsx($,{label:"Úrvalið"}),e.jsxs("div",{className:"cl-edit-nums",role:"group","aria-label":"130 myndir í bókinni, 12 á veggnum",children:[e.jsxs("div",{className:"cl-edit-num",children:[e.jsx("span",{className:"cl-edit-n","data-cl-count":"130","aria-hidden":"true",children:"130"}),e.jsx("span",{className:"cl-edit-l",children:"myndir í bókinni"})]}),e.jsx("span",{className:"cl-edit-slash","aria-hidden":"true"}),e.jsxs("div",{className:"cl-edit-num",children:[e.jsx("span",{className:"cl-edit-n","data-cl-count":"12","aria-hidden":"true",children:"12"}),e.jsx("span",{className:"cl-edit-l",children:"á veggnum í Gallery Grásteini"})]})]}),e.jsx("p",{className:"cl-body cl-rv",children:"Bókin geymir 130 landslagsmyndir af tíu ára ferðum um landið. Á sýningunni héngu tólf. Ljósmyndun er ekki söfnun heldur úrval, og vefur ljósmyndara á að hanga eins og veggur, ekki eins og geymsla."})]}),e.jsxs("section",{className:"cl-wall",id:"veggurinn","aria-label":"Sýningarveggurinn",children:[e.jsx("div",{className:"cl-wall-progressbar","aria-hidden":"true",children:e.jsx("span",{className:"cl-wall-progress"})}),e.jsxs("span",{className:"cl-wall-count","aria-hidden":"true",children:["01 / ",String(E.length).padStart(2,"0")]}),e.jsxs("div",{className:"cl-wall-track",children:[e.jsxs("div",{className:"cl-plate cl-plate-intro",children:[e.jsx("p",{className:"cl-plate-kicker",children:"Veggurinn"}),e.jsx(j,{text:"Gakktu með veggnum.",size:92,floor:34}),e.jsxs("p",{className:"cl-body",children:[E.length," verk í fullri stærð, hvert með vegginn út af fyrir sig. Veldu verk til að skoða það nánar."]})]}),E.map((a,c)=>a.series==="vitni"?e.jsxs(C,{className:"cl-plate cl-plate-full cl-plate-vitni",to:`${L}/safn?verk=${a.id}`,onClick:M,"data-cursor":"Skoða","aria-label":`${a.title}: skoða í safninu`,children:[e.jsx("div",{className:"cl-plate-media",children:e.jsx("img",{src:a.photo.src,srcSet:y(a.photo.src),sizes:"100vw",alt:a.photo.alt,loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"cl-vitni-lockup",children:[e.jsx("p",{className:"cl-vitni-eyebrow",children:"Ljósmyndasafn Reykjavíkur · 2020"}),e.jsx(j,{className:"cl-vitni-title",text:"VITNI",size:150,floor:54})]}),e.jsx("div",{className:"cl-plate-scrim","aria-hidden":"true"}),e.jsxs("div",{className:"cl-plate-cap",children:[e.jsx("span",{className:"cl-plate-title",children:"Sýningin í heild"}),e.jsx("span",{className:"cl-plate-meta",children:String(c+1).padStart(2,"0")})]})]},a.id):e.jsxs(C,{className:"cl-plate cl-plate-full",to:`${L}/safn?verk=${a.id}`,onClick:M,"data-cursor":"Skoða","aria-label":`${a.title}: skoða í safninu`,children:[e.jsx("div",{className:"cl-plate-media",children:e.jsx("img",{src:a.photo.src,srcSet:y(a.photo.src),sizes:"100vw",alt:a.photo.alt,loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"cl-plate-scrim","aria-hidden":"true"}),e.jsxs("div",{className:"cl-plate-cap",children:[e.jsx("span",{className:"cl-plate-title",children:a.title}),e.jsxs("span",{className:"cl-plate-meta",children:[K(a.series)," · ",String(c+1).padStart(2,"0")]})]})]},a.id))]})]}),e.jsxs("section",{className:"cl-bridge",children:[e.jsx("p",{className:"cl-bridge-text cl-rv",children:"Verkin á veggnum eru sönnunin. Sama natni fer í fyrirtækja-, brúðkaups- og portrettmyndir."}),e.jsxs("div",{className:"cl-bridge-row cl-rv",children:[e.jsx(C,{className:"cl-bridge-safn",to:`${L}/safn`,children:"Skoða allt safnið"}),e.jsx("a",{className:"cl-bridge-tel",href:S.phoneHref,children:S.phone})]})]}),e.jsxs("section",{className:"cl-safn",children:[e.jsx($,{label:"Myndaraðirnar"}),e.jsx(j,{text:"Sex raðir, eitt auga.",size:80,floor:32,measure:640}),e.jsx(ge,{})]}),e.jsxs("section",{className:"cl-bok",id:"bokin",children:[e.jsxs("div",{className:"cl-bok-head",children:[e.jsx($,{label:"Bókin"}),e.jsx(j,{text:"Iceland, Contrasts in Nature.",size:80,floor:32,measure:760}),e.jsx("p",{className:"cl-body cl-rv",children:"Andstæður landsins á opnum sem svara hver annarri: ís á móti jarðhita, stuðlaberg á móti mosa. Hver mynd fær rými til að anda."})]}),X.pairs.map((a,c)=>{const d=_(a.a.ratio),t=_(a.b.ratio),p=d<1;return e.jsxs("figure",{className:`cl-bok-pair ${c%2?"is-flip":""} ${p?"is-port":""}`,children:[e.jsx("div",{className:"cl-bok-fig cl-bok-fig-a cl-rv",style:{"--ar":d},children:e.jsx("img",{src:a.a.src,srcSet:y(a.a.src),sizes:"(max-width: 991px) 92vw, 52vw",style:{aspectRatio:a.a.ratio},alt:a.a.alt,loading:"lazy",decoding:"async"})}),e.jsx("figcaption",{className:"cl-bok-cap cl-rv",children:a.cap}),e.jsx("div",{className:"cl-bok-fig cl-bok-fig-b cl-rv",style:{"--ar":t},children:e.jsx("img",{src:a.b.src,srcSet:y(a.b.src),sizes:"(max-width: 991px) 78vw, 34vw",style:{aspectRatio:a.b.ratio},alt:a.b.alt,loading:"lazy",decoding:"async"})})]},c)}),e.jsx("p",{className:"cl-bok-specline cl-rv",children:X.specLine})]}),e.jsxs("section",{className:"cl-thjonusta",id:"thjonusta",children:[e.jsxs("div",{className:"cl-thjonusta-copy",children:[e.jsx($,{label:"Þjónusta"}),e.jsx(j,{text:"Frá töku að prenti.",size:72,floor:30,measure:560}),e.jsx("p",{className:"cl-body cl-rv",children:"Ekki bara fyrir eigin verk: ljósmyndarar, listamenn og forlög fá sömu prentun, skönnun og litgreiningu hér."}),e.jsx("ul",{className:"cl-services",children:Q.map(a=>e.jsx("li",{className:"cl-rv",children:e.jsxs(C,{className:"cl-service",to:`${L}/${a.slug}`,onClick:M,"data-cursor":"Opna",children:[e.jsxs("span",{className:"cl-service-top",children:[e.jsx("span",{className:"cl-service-name",children:a.name}),e.jsx("span",{className:"cl-service-arrow","aria-hidden":"true",children:"→"})]}),e.jsxs("span",{className:"cl-service-note",children:[a.slug==="prentun"&&"Pigment-blek á sýrufrían pappír, Epson SC-P9500",a.slug==="skonnun"&&'Filmur í allt að 4×5" stærð, listaverk stór og smá',a.slug==="litgreining"&&"Samræmt litróf fyrir bækur og prent"]})]})},a.slug))}),e.jsxs("a",{className:"cl-thjonusta-cta cl-rv",href:S.phoneHref,children:["Spurning um verk? Hringdu í ",S.phone,"."]})]}),e.jsxs("figure",{className:"cl-thjonusta-fig cl-rv",children:[e.jsx("img",{src:b.filmur.src,srcSet:y(b.filmur.src),sizes:"(max-width: 991px) 92vw, 40vw",alt:b.filmur.alt,loading:"lazy",decoding:"async"}),e.jsx("figcaption",{className:"cl-fig-cap",children:"Öll verk fara í gegnum sömu vinnslu: litgreiningu, frágang, prentun."})]})]}),e.jsx("section",{className:"cl-quote","aria-label":"Umsögn",children:e.jsxs("blockquote",{className:"cl-quote-block cl-rv",children:[e.jsxs("p",{children:["„",O.rax.quote,"“"]}),e.jsxs("footer",{children:[O.rax.name,", ",O.rax.org]})]})}),e.jsxs("section",{className:"cl-um",children:[e.jsx("figure",{className:"cl-um-fig cl-rv",children:e.jsx("img",{src:b.christopher.src,srcSet:y(b.christopher.src),sizes:"(max-width: 991px) 92vw, 48vw",alt:b.christopher.alt,loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"cl-um-copy",children:[e.jsx($,{label:"Um Christopher"}),e.jsx(j,{text:"Tuttugu ár á bak við vélina.",size:64,floor:30,measure:560}),e.jsx("p",{className:"cl-body cl-rv",children:"Christopher lýsir sér sjálfur sem ljósmyndara, eiginmanni, föður, stjúpföður, afa og nörd. Hann hefur starfað í yfir tuttugu ár á Íslandi, í Noregi og Danmörku, talar fjögur tungumál og sinnir auk myndatöku hágæða prentun, myndvinnslu og undirbúningi bóka."}),e.jsxs("div",{className:"cl-um-marks cl-rv",children:[e.jsx("img",{className:"cl-um-logo",src:B.lockup,alt:"Merki Christophers Lund",loading:"lazy",decoding:"async"}),e.jsx("img",{className:"cl-um-op",src:B.onePercent,alt:"1% For The Planet, aðili",loading:"lazy",decoding:"async"})]})]})]}),e.jsxs("section",{className:"cl-samband",id:"samband",children:[e.jsx(j,{text:"Næsta mynd byrjar á símtali.",size:84,floor:34,measure:760}),e.jsx("a",{className:"cl-samband-tel cl-rv",href:S.phoneHref,children:"822 7601"}),e.jsx("p",{className:"cl-samband-addr cl-rv",children:S.address})]}),e.jsx(ce,{})]}),e.jsx(te,{company:V})]})}const fe=`
/* hero */
.cl-hero { position: relative; height: 100svh; min-height: 560px; overflow: hidden; display: grid; align-items: end; }
.cl-hero img { position: absolute; inset: -6% 0; width: 100%; height: 112%; object-fit: cover; will-change: transform; }
.cl-hero-title {
  position: absolute; left: calc(var(--u) * 30); bottom: calc(var(--u) * 110);
  z-index: 2; color: #F4F1EA; mix-blend-mode: difference; margin: 0;
  font-weight: 500; letter-spacing: -.015em;
}
.cl-hero-block {
  position: relative; z-index: 2; padding: 0 calc(var(--u) * 34) calc(var(--u) * 40);
  color: #F6F4EE;
}
.cl-hero-block::before {
  content: ''; position: absolute; inset: auto 0 0 0; height: 220%; z-index: -1;
  background: linear-gradient(180deg, transparent, rgb(15 14 12 / .5));
  pointer-events: none;
}
.cl-hero-sub { max-width: 44ch; font-size: ${i(17,15)}; line-height: 1.6; margin: 0; }
@media (prefers-reduced-motion: reduce) {
  .cl-hero img { transform: none !important; inset: 0; height: 100%; }
}

/* the edit */
.cl-edit { padding: calc(var(--u) * 150) calc(var(--u) * 34); }
.cl-edit-nums { display: flex; align-items: baseline; gap: calc(var(--u) * 44); flex-wrap: wrap; margin-bottom: calc(var(--u) * 36); }
.cl-edit-n { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(190,72)}; line-height: 1; letter-spacing: -.03em; display: block; font-variant-numeric: tabular-nums; }
.cl-edit-l { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12.5,12)}; letter-spacing: .12em; text-transform: uppercase; color: var(--cl-mute); display: block; margin-top: 10px; }
.cl-edit-slash { width: 1px; align-self: stretch; background: var(--cl-hair); }

/* the wall: full-bleed plates */
.cl-wall { position: relative; background: #131311; color: #EFEDE7; }
.cl-wall-progressbar { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: rgb(239 237 231 / .14); z-index: 5; }
.cl-wall-progress { display: block; height: 100%; background: var(--cl-gold); transform: scaleX(0); transform-origin: left; }
.cl-wall-count {
  position: absolute; top: calc(var(--u) * 74); right: calc(var(--u) * 34); z-index: 5;
  font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)};
  letter-spacing: .18em; color: rgb(239 237 231 / .75); font-variant-numeric: tabular-nums;
}
.cl-wall-track { display: flex; align-items: stretch; width: max-content; will-change: transform; }
.cl-plate { flex: 0 0 auto; margin: 0; }
.cl-plate-intro {
  width: 62vw; height: 100svh; display: grid; align-content: center;
  padding: calc(var(--u) * 70) calc(var(--u) * 44);
}
.cl-plate-kicker { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)}; letter-spacing: .16em; text-transform: uppercase; color: var(--cl-gold); margin: 0 0 calc(var(--u) * 18); }
.cl-plate-intro .cl-body { color: #B9B7AE; }
.cl-plate-full {
  position: relative; display: block; width: 100vw; height: 100svh;
  color: inherit; text-decoration: none; overflow: hidden;
}
.cl-plate-media { position: absolute; inset: 0; overflow: hidden; background: #1D1D1A; transition: transform 200ms cubic-bezier(.23,1,.32,1); }
.cl-plate-media img { width: 100%; height: 100%; object-fit: cover; will-change: transform; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .cl-plate-full:hover .cl-plate-media { transform: scale(1.015); }
}
/* the wall plates are the primary control and had no press state at all */
.cl-plate-full { transition: transform 160ms cubic-bezier(.23,1,.32,1); }
.cl-plate-full:active { transform: scale(.99); }
@media (prefers-reduced-motion: reduce) { .cl-plate-full:active { transform: none; } }
.cl-plate-scrim {
  position: absolute; inset: auto 0 0 0; height: 34%; z-index: 1; pointer-events: none;
  background: linear-gradient(180deg, transparent, rgb(10 10 8 / .62));
}
.cl-plate-cap {
  position: absolute; inset: auto 0 0 0; z-index: 2;
  display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  padding: 0 calc(var(--u) * 44) calc(var(--u) * 34);
}
.cl-plate-title { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(30,20)}; letter-spacing: -.01em; color: #F4F1EA; }
.cl-plate-meta { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)}; letter-spacing: .14em; text-transform: uppercase; color: rgb(244 241 234 / .82); flex: none; }
.cl-plate-vitni .cl-vitni-lockup {
  position: absolute; inset: 0; z-index: 2; display: grid; place-content: center; text-align: center;
  padding: calc(var(--u) * 60); pointer-events: none;
}
.cl-vitni-eyebrow { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)}; letter-spacing: .18em; text-transform: uppercase; color: #EFEDE7; margin: 0 0 14px; }
.cl-vitni-title { color: #F4F1EA; mix-blend-mode: difference; font-weight: 500; letter-spacing: .04em; margin: 0; }
@media (max-width: 991px) {
  .cl-wall-track { display: block; width: auto; }
  .cl-plate-intro { width: auto; height: auto; padding: 44px 20px 28px; }
  .cl-plate-full { width: auto; height: auto; }
  .cl-plate-media { position: static; aspect-ratio: 4 / 3; }
  .cl-plate-media img { aspect-ratio: 4 / 3; }
  .cl-plate-cap { position: static; padding: 10px 20px 26px; }
  .cl-plate-title { color: #EFEDE7; font-size: ${i(22,17)}; }
  .cl-plate-meta { color: rgb(239 237 231 / .7); }
  .cl-plate-scrim { display: none; }
  .cl-wall-progressbar, .cl-wall-count { display: none; }
}

/* bridge */
.cl-bridge { text-align: center; padding: calc(var(--u) * 60) calc(var(--u) * 34); border-bottom: 1px solid var(--cl-hair); }
.cl-bridge-text { max-width: calc(var(--u) * 560); margin: 0 auto calc(var(--u) * 22); font-size: ${i(17,15)}; line-height: 1.6; color: var(--cl-ink); }
.cl-bridge-row { display: flex; justify-content: center; align-items: baseline; gap: calc(var(--u) * 40); flex-wrap: wrap; }
.cl-bridge-safn, .cl-bridge-tel {
  display: inline-block; font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(15,13.5)};
  letter-spacing: .04em; text-decoration: none; border-bottom: 1px solid currentColor;
  padding-bottom: 2px; transition: color .3s cubic-bezier(.16,1,.3,1);
}
.cl-bridge-safn { color: var(--cl-ink); }
.cl-bridge-safn:hover { color: var(--cl-gold-text); }
.cl-bridge-tel { color: var(--cl-gold-text); }
.cl-bridge-tel:hover { color: var(--cl-ink); }

/* series picker */
.cl-safn { padding: calc(var(--u) * 150) calc(var(--u) * 34); }
.cl-series { display: grid; grid-template-columns: 1.15fr 1fr; gap: calc(var(--u) * 70); align-items: start; margin-top: calc(var(--u) * 30); }
.cl-series-list { list-style: none; margin: 0; padding: 0; }
.cl-series-row {
  --on: 0; display: block; width: 100%; text-align: left;
  padding: 16px 0; border-top: 1px solid var(--cl-hair); color: inherit;
  text-decoration: none;
}
.cl-series-row.is-active { --on: 1; }
.cl-series-row:active .cl-series-row-inner { transform: translateX(calc(var(--on) * 18px)) scale(.985); }
.cl-series-row-inner {
  display: grid; gap: 4px;
  transform: translateX(calc(var(--on) * 18px));
  transition: transform 260ms cubic-bezier(.16,1,.3,1);
}
.cl-series-top { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; }
.cl-series-name { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(34,22)}; line-height: 1.15; transition: color .3s cubic-bezier(.16,1,.3,1); }
.cl-series-arrow { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-size: ${i(22,17)}; opacity: 0; transform: translateX(-8px); transition: opacity 200ms, transform 200ms cubic-bezier(.16,1,.3,1); color: var(--cl-gold-text); }
.cl-series-row.is-active .cl-series-name { color: var(--cl-gold-text); }
.cl-series-row.is-active .cl-series-arrow, .cl-series-row:focus-visible .cl-series-arrow { opacity: 1; transform: none; }
.cl-series-note { font-size: ${i(14,13)}; color: var(--cl-mute); }
.cl-series-preview { position: sticky; top: calc(var(--u) * 80); margin: 0; }
.cl-series-preview img { width: 100%; aspect-ratio: 4 / 3.4; object-fit: cover; background: #E4E2DB; }
.cl-series-preview figcaption { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)}; letter-spacing: .14em; text-transform: uppercase; color: var(--cl-mute); padding-top: 10px; }
/* the float never exists for touch or reduced motion */
.cl-series-float { display: none; }

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  /* the image comes to the cursor, so the list takes the whole measure and
     nothing sits in a reserved column waiting to be filled */
  .cl-series { display: block; position: relative; margin-top: calc(var(--u) * 30); }
  .cl-series-preview {
    position: absolute; top: 0; right: 0; width: clamp(240px, 26%, 360px);
    opacity: 0; pointer-events: none;
    transition: opacity .3s cubic-bezier(.16,1,.3,1);
  }
  /* keyboard has no pointer, so focus anchors the preview instead */
  .cl-series:focus-within .cl-series-preview { opacity: 1; }
  .cl-series-float {
    display: block; position: fixed; top: 0; left: 0; z-index: 30; margin: 0;
    width: clamp(220px, 22vw, 340px); pointer-events: none; will-change: transform;
    opacity: 0; transition: opacity .35s cubic-bezier(.16,1,.3,1);
  }
  .cl-series.is-floating .cl-series-float { opacity: 1; }
  .cl-series-float img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; background: #E4E2DB; }
}

/* the book: photographs hung in pairs, no frames */
.cl-bok { padding: calc(var(--u) * 140) calc(var(--u) * 34); background: #ECEAE4; }
.cl-bok-head { max-width: calc(var(--u) * 860); margin-bottom: calc(var(--u) * 70); }
/* Each photograph is sized from its OWN aspect ratio against a shared
   height budget, so a landscape spread fills its track and a portrait one
   stays inside the viewport instead of either overrunning it or shrinking
   to its natural pixel size and stranding the column. The caption hangs
   under the large print like a wall label; the second print sits low in the
   facing column so the pair reads as two works answering each other. */
.cl-bok-pair {
  --bokh: min(72vh, calc(var(--u) * 660));
  display: grid; grid-template-columns: 7fr 5fr;
  column-gap: calc(var(--u) * 64); row-gap: 16px;
  align-items: start; margin: 0 0 calc(var(--u) * 108);
}
.cl-bok-fig-a { grid-column: 1; grid-row: 1; width: min(100%, calc(var(--bokh) * var(--ar))); }
.cl-bok-cap   { grid-column: 1; grid-row: 2; align-self: start; }
.cl-bok-fig-b {
  grid-column: 2; grid-row: 1 / span 2; align-self: end;
  width: min(100%, calc(var(--bokh) * .72 * var(--ar)));
}
.cl-bok-pair.is-flip { grid-template-columns: 5fr 7fr; }
.cl-bok-pair.is-flip .cl-bok-fig-a,
.cl-bok-pair.is-flip .cl-bok-cap { grid-column: 2; }
.cl-bok-pair.is-flip .cl-bok-fig-b { grid-column: 1; justify-self: start; }
.cl-bok-pair.is-flip .cl-bok-cap { text-align: right; }
/* two portraits: content-sized tracks pushed apart, so the pair sits as a
   duo rather than as two islands in half-empty columns */
.cl-bok-pair.is-port {
  grid-template-columns: max-content max-content; justify-content: space-between;
  max-width: calc(var(--u) * 1040); margin-inline: auto;
}
.cl-bok-pair.is-port .cl-bok-fig-a { width: calc(var(--bokh) * var(--ar)); }
.cl-bok-pair.is-port .cl-bok-fig-b { width: calc(var(--bokh) * .72 * var(--ar)); }
.cl-bok-fig img { width: 100%; height: auto; object-fit: cover; display: block; }
.cl-bok-cap {
  font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)};
  letter-spacing: .14em; text-transform: uppercase; color: var(--cl-mute);
}
.cl-bok-specline {
  margin: calc(var(--u) * 40) 0 0; font-family: 'Space Mono', ui-monospace, monospace;
  font-size: ${i(12.5,12)}; letter-spacing: .1em; color: var(--cl-mute);
}

/* services */
.cl-thjonusta { display: grid; grid-template-columns: 1.1fr 1fr; gap: calc(var(--u) * 70); align-items: start; padding: calc(var(--u) * 150) calc(var(--u) * 34); }
.cl-services { list-style: none; margin: calc(var(--u) * 10) 0 0; padding: 0; }
.cl-service { display: grid; gap: 6px; padding: 18px 0; border-top: 1px solid var(--cl-hair); color: inherit; text-decoration: none; }
.cl-service-top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.cl-service-name { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(26,19)}; transition: color .3s cubic-bezier(.16,1,.3,1); }
.cl-service-arrow { flex: none; font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-size: ${i(20,16)}; color: var(--cl-gold-text); opacity: 0; transform: translateX(-8px); transition: opacity 200ms, transform 200ms cubic-bezier(.16,1,.3,1); }
.cl-service:hover .cl-service-name, .cl-service:focus-visible .cl-service-name { color: var(--cl-gold-text); }
.cl-service:hover .cl-service-arrow, .cl-service:focus-visible .cl-service-arrow { opacity: 1; transform: none; }
.cl-service-note { font-size: ${i(14,13)}; color: var(--cl-mute); }
.cl-thjonusta-cta {
  display: inline-block; margin-top: calc(var(--u) * 28); font-family: 'Space Mono', ui-monospace, monospace;
  font-size: ${i(13.5,12.5)}; letter-spacing: .04em; color: var(--cl-gold-text);
  text-decoration: none; border-bottom: 1px solid currentColor; padding-bottom: 2px;
  transition: color .3s cubic-bezier(.16,1,.3,1);
}
.cl-thjonusta-cta:hover { color: var(--cl-ink); }
.cl-thjonusta-fig { margin: 0; max-width: calc(var(--u) * 460); justify-self: end; }
.cl-thjonusta-fig img { width: 100%; aspect-ratio: 5 / 7; object-fit: cover; }
.cl-fig-cap { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12,12)}; letter-spacing: .14em; text-transform: uppercase; color: var(--cl-mute); padding-top: 10px; }

/* the RAX quote */
.cl-quote { padding: calc(var(--u) * 40) calc(var(--u) * 34) calc(var(--u) * 120); }
.cl-quote-block { margin: 0 auto; max-width: calc(var(--u) * 880); text-align: center; }
.cl-quote-block p { font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(34,21)}; line-height: 1.32; letter-spacing: -.01em; margin: 0 0 calc(var(--u) * 22); }
.cl-quote-block footer { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(12.5,12)}; letter-spacing: .14em; text-transform: uppercase; color: var(--cl-mute); }

/* about: his own portrait from his own About page */
.cl-um { display: grid; grid-template-columns: 1.15fr 1fr; gap: calc(var(--u) * 70); align-items: center; padding: calc(var(--u) * 40) calc(var(--u) * 34) calc(var(--u) * 130); }
.cl-um-fig { margin: 0; }
.cl-um-fig img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
.cl-um-marks { display: flex; align-items: center; gap: calc(var(--u) * 30); margin-top: calc(var(--u) * 36); }
.cl-um-logo { height: calc(var(--u) * 74); width: auto; mix-blend-mode: multiply; }
.cl-um-op { height: calc(var(--u) * 64); width: auto; mix-blend-mode: multiply; }

/* contact */
.cl-samband { text-align: center; padding: calc(var(--u) * 150) calc(var(--u) * 34); }
.cl-samband .cl-headline { margin-inline: auto; }
.cl-samband-tel {
  display: inline-block; font-family: 'Cabinet Grotesk', system-ui, sans-serif; font-weight: 500; font-size: ${i(110,44)};
  letter-spacing: -.02em; color: inherit; text-decoration: none; margin-top: calc(var(--u) * 16);
  transition: color .3s cubic-bezier(.16,1,.3,1); font-variant-numeric: tabular-nums;
}
.cl-samband-tel:hover { color: var(--cl-gold-text); }
.cl-samband-addr { font-family: 'Space Mono', ui-monospace, monospace; font-size: ${i(13,12.5)}; color: var(--cl-mute); margin-top: calc(var(--u) * 20); }

/* responsive */
@media (max-width: 991px) {
  .cl-thjonusta { grid-template-columns: 1fr; }
  .cl-thjonusta-fig { justify-self: start; max-width: 100%; }
  .cl-um { grid-template-columns: 1fr; }
  .cl-bok-pair, .cl-bok-pair.is-flip, .cl-bok-pair.is-port {
    grid-template-columns: 1fr; column-gap: 0; row-gap: calc(var(--u) * 26);
    margin: 0 0 calc(var(--u) * 80); max-width: none; justify-content: start;
  }
  .cl-bok-pair .cl-bok-fig-a, .cl-bok-pair.is-flip .cl-bok-fig-a, .cl-bok-pair.is-port .cl-bok-fig-a {
    grid-column: 1; grid-row: 1; width: 100%;
  }
  .cl-bok-pair .cl-bok-fig-b, .cl-bok-pair.is-flip .cl-bok-fig-b, .cl-bok-pair.is-port .cl-bok-fig-b {
    grid-column: 1; grid-row: 2; width: 76%; justify-self: end; align-self: auto;
  }
  .cl-bok-pair .cl-bok-cap, .cl-bok-pair.is-flip .cl-bok-cap {
    grid-column: 1; grid-row: 3; text-align: left; padding-top: 2px;
  }
}
@media (max-width: 760px) {
  .cl-series { grid-template-columns: 1fr; gap: calc(var(--u) * 26); }
  .cl-series-preview { position: static; order: -1; }
  .cl-series-preview img { aspect-ratio: 3 / 2; }
}
@media (max-width: 640px) {
  .cl-edit, .cl-bridge, .cl-safn, .cl-bok, .cl-thjonusta, .cl-quote, .cl-um, .cl-samband { padding-left: 20px; padding-right: 20px; }
  .cl-hero-title { left: 20px; bottom: 96px; }
  .cl-hero-block { padding: 0 20px 30px; }
}
`;export{De as default};
