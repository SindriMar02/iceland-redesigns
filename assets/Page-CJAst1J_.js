import{r as s,j as e}from"./index-Ch78y0J9.js";import le from"./lenis-niKyKZQP.js";import{P as he}from"./PreviewChrome-D6FiZ317.js";import{P as ce}from"./PreviewFooter-m-90-2F0.js";import{g as de}from"./companies-DOEqWmuu.js";import{m as me}from"./react-w32ocm7W.js";import{u as X,b as pe,a as J}from"./use-spring-CfIsFPF_.js";import{u as ue,a as fe,b as ke}from"./use-velocity-BEdQVMXq.js";import"./copy-pCgtOs_g.js";import"./createLucideIcon-HGn5Pbp_.js";import"./proxy-DFeVD4hz.js";import"./index-DnweWyhD.js";import"./send-UVMS819B.js";import"./index-CWfT6kl2.js";import"./external-link-BsB13OYF.js";import"./x-VaxchblO.js";import"./check-D_kpaMAV.js";import"./mail-CGyCkSJJ.js";import"./SndrBadge-DvmUjdoo.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";const ge="/iceland-redesigns/",q=l=>`${ge}heklusyn/${l}`,Q="heklusyn@heklusyn.is",xe="mailto:heklusyn@heklusyn.is",be="+354 822 8080",ve="tel:+3548228080",we="Heklusýn ehf. · kt. 490221-0690",ye="Furubyggð 21, 270 Mosfellsbær",$={heroEstate:{file:"hero-estate.jpg",alt:"Loftmynd af landinu í Rangárslétta: húsið í sléttunni, áin og fjöllin í baksýn."},landRiver:{file:"land-river.jpg",alt:"Dalurinn, Ytri-Rangá liðast um sléttuna, fjöllin fyrir aftan."},houseAutumn:{file:"house-autumn.jpg",alt:"Dökkt hús með palli á þýfðum bakka, haustlitir."},houseBuilt:{file:"house-built.jpg",alt:"Fullbúið hús, svartur málmur og timbur, malarinnkeyrsla."},construction:{file:"construction.jpg",alt:"Timburgrind rís á rýmdu byggingarsvæði."}},_={living:{file:"vis-living.jpg",alt:"Tölvumynd af stofu."},exterior:{file:"vis-exterior.jpg",alt:"Tölvumynd af húsi að utan."}},je=[{name:"Búrfell",pos:6},{name:"Hekla",pos:19},{name:"Bjólfell",pos:31},{name:"Vatnafjöll",pos:43},{name:"Tindfjöll",pos:55},{name:"Selsundsfjall",pos:67},{name:"Eyjafjallajökull",pos:80},{name:"Þríhyrningur",pos:93}],G=[{name:"Rangárslétta 2",size:"147 m²",plot:"2,1 ha",price:"109.000.000 kr.",statuses:["til-solu","i-byggingu"],note:"Heilsárshús, um 147 fermetrar að stærð, á lóð sem er um 2,1 hektari. Verð 109.000.000 kr. Nú í byggingu og auglýst til sölu."},{name:"Rangárslétta 3",size:"168 m²",plot:"4,8 ha",price:"Selt",statuses:["selt"],note:"Hús um 168 fermetrar að stærð, á lóð sem er um 4,8 hektarar. Selt."},{name:"Rangárslétta 9",size:null,plot:null,price:"Selt",statuses:["selt"],note:"Selt. Stærð og lóðarmál ekki gefin upp opinberlega."},{name:"Rangárslétta 10",size:null,plot:null,price:null,statuses:["til-solu","i-byggingu"],note:"Nú í byggingu og auglýst til sölu. Stærð, lóðarmál og verð ekki gefin upp opinberlega."},{name:"Rangárslétta 11",size:null,plot:null,price:"Selt",statuses:["selt","i-byggingu"],note:"Selt og nú í byggingu fyrir eiganda. Stærð og lóðarmál ekki gefin upp opinberlega."}],Ne={selt:"Selt","til-solu":"Til sölu","i-byggingu":"Í byggingu"},Se=[{count:"11",label:"lóðablöð",note:"Eitt blað á hverja skráða lóð."},{count:"1",label:"skipulagsgátt",note:"Deiliskipulag svæðisins."},{count:"1",label:"hönnunargögn",note:"Teikningar frá þróunaraðila."}],Z=["Almenn fyrirspurn",...G.map(l=>l.name)],V=[{id:"hk-thesis",label:"Fágætið"},{id:"hk-horizon",label:"Fjöllin"},{id:"hk-houses",label:"Húsin"},{id:"hk-docs",label:"Gögnin"},{id:"hk-enquiry",label:"Fyrirspurn"}],ee="#111111",te="#767676",W="#e2e2e2";function Ee({shots:l}){const[c,a]=s.useState(null),[o,u]=s.useState(!1),f=s.useRef(null),i=s.useRef(null),g=s.useRef({x:0,y:0}),x=s.useRef({x:0,y:0}),w=s.useRef(0);s.useEffect(()=>{const t=window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;u(t&&!n)},[]),s.useEffect(()=>{if(!o)return;const t=()=>{x.current.x+=(g.current.x-x.current.x)*.14,x.current.y+=(g.current.y-x.current.y)*.14;const n=i.current;n&&(n.style.transform=`translate3d(${x.current.x+24}px, ${x.current.y-110}px, 0)`),w.current=requestAnimationFrame(t)};return w.current=requestAnimationFrame(t),()=>cancelAnimationFrame(w.current)},[o]);const k=t=>{var d;const n=(d=f.current)==null?void 0:d.getBoundingClientRect();n&&(g.current={x:t.clientX-n.left,y:t.clientY-n.top})};return e.jsxs("div",{ref:f,onMouseMove:o?k:void 0,style:{position:"relative"},children:[o?e.jsx("div",{ref:i,"aria-hidden":!0,className:"hk-preview",style:{opacity:c===null?0:1,scale:c===null?"0.86":"1"},children:l.map((t,n)=>e.jsx("img",{src:q(t.file),alt:"",loading:"lazy",decoding:"async",style:{opacity:c===n?1:0,transform:c===n?"scale(1)":"scale(1.08)",filter:c===n?"none":"blur(8px)"}},t.file))}):null,e.jsx("ul",{className:"hk-hlist",children:G.map((t,n)=>{const d=l[n];return e.jsx("li",{children:e.jsxs("a",{href:"#hk-enquiry",className:"hk-hrow",onMouseEnter:o?()=>a(n):void 0,onMouseLeave:o?()=>a(null):void 0,onFocus:o?()=>a(n):void 0,onBlur:o?()=>a(null):void 0,children:[!o&&d?e.jsxs("span",{className:"hk-hthumb",children:[e.jsx("img",{src:q(d.file),alt:d.alt,loading:"lazy",decoding:"async"}),d.chip?e.jsx("span",{className:"hk-chip",children:d.chip}):null]}):null,e.jsx("span",{className:"hk-hname",children:t.name}),e.jsxs("span",{className:"hk-hmeta",children:[[t.size,t.plot].filter(Boolean).join(" · "),d!=null&&d.chip?e.jsxs("em",{className:"hk-hvis",children:[[t.size,t.plot].some(Boolean)?" · ":"",d.chip]}):null]}),e.jsx("span",{className:"hk-hstate",children:t.price??t.statuses.map(j=>Ne[j]).join(", ")})]})},t.name)})})]})}const ze=`
.hk-preview{position:absolute;left:0;top:0;z-index:30;pointer-events:none;width:300px;height:200px;
  overflow:hidden;background:${W};transition:opacity .34s cubic-bezier(.17,.84,.44,1),scale .34s cubic-bezier(.17,.84,.44,1)}
.hk-preview img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
  transition:opacity .45s cubic-bezier(.17,.84,.44,1),transform .6s cubic-bezier(.17,.84,.44,1),filter .45s cubic-bezier(.17,.84,.44,1)}

.hk-hlist{list-style:none;margin:0;padding:0;border-top:1px solid ${W}}
.hk-hrow{display:grid;grid-template-columns:1fr auto;gap:.4rem 1.5rem;align-items:baseline;
  padding-block:clamp(16px,2vw,26px);border-bottom:1px solid ${W};text-decoration:none;color:${ee};
  position:relative;transition:padding-left .4s cubic-bezier(.17,.84,.44,1)}
@media (hover:hover) and (pointer:fine){.hk-hrow:hover{padding-left:.9rem}}
.hk-hname{font-size:clamp(1.5rem,4.2vw,3.4rem);letter-spacing:-.026em;line-height:1.02;grid-column:1}
.hk-hmeta{grid-column:1;color:${te};font-size:clamp(.86rem,1.05vw,1rem)}
.hk-hvis{font-style:normal;text-transform:uppercase;letter-spacing:.1em;font-size:.82em}
.hk-hstate{grid-column:2;grid-row:1/3;text-align:right;color:${te};font-size:clamp(.9rem,1.15vw,1.06rem);white-space:nowrap}
.hk-hrow:focus-visible{outline:2px solid ${ee};outline-offset:4px}

/* coarse pointer / reduced motion: every row carries its own image */
.hk-hthumb{grid-column:1;grid-row:1;display:block;position:relative;width:100%;aspect-ratio:3/2;
  overflow:hidden;margin-bottom:.9rem}
.hk-hthumb img{width:100%;height:100%;object-fit:cover}
@media (prefers-reduced-motion:reduce){.hk-preview{display:none}}
`,Re=2400,ne=1100,se="hk-preloader-seen";function $e({ink:l="#111111",ground:c="#ffffff"}){const[a,o]=s.useState(!1),[u,f]=s.useState(0),[i,g]=s.useState(!1),x=s.useRef(!1);return s.useEffect(()=>{if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const w=new URLSearchParams(window.location.search).has("loader");try{if(!w&&sessionStorage.getItem(se))return}catch{}o(!0);const k=performance.now(),t=Array.from(document.images),n=Math.max(t.length,1);let d=t.filter(m=>m.complete).length;const j=()=>{if(x.current)return;x.current=!0;try{sessionStorage.setItem(se,"1")}catch{}const m=Math.max(0,ne-(performance.now()-k));window.setTimeout(()=>f(100),m),window.setTimeout(()=>g(!0),m+320),window.setTimeout(()=>o(!1),m+320+900)},E=()=>{d+=1;const m=Math.min(99,Math.round(d/n*100));f(r=>m>r?m:r),d>=n&&j()};t.forEach(m=>{m.complete||(m.addEventListener("load",E,{once:!0}),m.addEventListener("error",E,{once:!0}))});const F=window.setInterval(()=>{const m=Math.round((performance.now()-k)/ne*92);f(r=>r<92?Math.max(r,Math.min(92,m)):r)},24),I=window.setTimeout(j,Re);return d>=n&&j(),()=>{window.clearInterval(F),window.clearTimeout(I),t.forEach(m=>{m.removeEventListener("load",E),m.removeEventListener("error",E)})}},[]),a?e.jsxs("div",{className:`hk-pre${i?" is-out":""}`,"aria-hidden":!0,style:{background:c,color:l},children:[e.jsx("span",{className:"hk-pre-bar",style:{background:l,transform:`scaleX(${u/100})`}}),e.jsxs("div",{className:"hk-pre-foot",children:[e.jsx("span",{className:"hk-pre-mark",style:{backgroundPositionX:`${100-u}%`},children:"Heklusýn"}),e.jsx("span",{className:"hk-pre-num",children:u})]})]}):null}const He=`
.hk-pre{position:fixed;inset:0;z-index:90;pointer-events:none;
  transform:translateY(0);transition:transform .9s cubic-bezier(.17,.84,.44,1)}
.hk-pre.is-out{transform:translateY(-100%)}
.hk-pre-bar{position:absolute;top:0;left:0;right:0;height:2px;transform-origin:left center;
  transition:transform .18s linear}

/* the foot sits exactly where the hero lockup does, so the handoff is seamless */
.hk-pre-foot{position:absolute;left:clamp(18px,3.4vw,52px);right:clamp(18px,3.4vw,52px);
  bottom:clamp(16px,2.6vw,40px);display:flex;align-items:baseline;justify-content:space-between;gap:1.5rem}

/* 21st.dev "Text Scroll Read" sweep: a hard two-stop gradient at 200% width,
   clipped to the glyphs, its x position driven by the percentage. */
.hk-pre-mark{
  font-size:clamp(2.5rem,10.6vw,10.4rem);line-height:.9;letter-spacing:-.03em;font-weight:400;
  background-image:linear-gradient(-90deg,rgba(17,17,17,.12) 50%,rgb(17,17,17) 50%);
  background-size:200% 100%;background-repeat:no-repeat;background-attachment:scroll;
  -webkit-background-clip:text;background-clip:text;color:transparent;
  transition:background-position-x .34s cubic-bezier(.17,.84,.44,1)}

.hk-pre-num{font-size:clamp(.9rem,1.4vw,1.15rem);font-variant-numeric:tabular-nums;
  letter-spacing:.02em;flex:none}

@media (prefers-reduced-motion:reduce){
  .hk-pre-mark{background:none;-webkit-background-clip:border-box;background-clip:border-box;
    color:inherit;transition:none}
}
`,Y="#111111",P="#767676",ie="#e2e2e2",Ae=Math.sqrt(5e4)/100,K=l=>Math.sqrt(l)/Ae,A=K(5e4),C=K(1e4),B=K(3e3),D=K(147);function Me(){const l=s.useRef(null),[c,a]=s.useState(!1);return s.useEffect(()=>{const o=l.current;if(!o)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0);return}const u=new IntersectionObserver(i=>i.forEach(g=>{g.isIntersecting&&(a(!0),u.disconnect())}),{rootMargin:"0px 0px -18% 0px",threshold:.01});u.observe(o);const f=window.setTimeout(()=>a(!0),2e3);return()=>{u.disconnect(),window.clearTimeout(f)}},[]),e.jsxs("div",{ref:l,className:`hk-herra${c?" is-in":""}`,children:[e.jsxs("svg",{viewBox:"-4 -4 108 108",role:"img","aria-label":"Skýringarmynd: fimm hektara spilda, dæmigerð sumarhúsalóð og 147 fermetra hús, öll teiknuð í sama kvarða.",children:[e.jsx("rect",{className:"hk-h5",x:0,y:0,width:A,height:A}),e.jsx("rect",{className:"hk-h1",x:0,y:A-C,width:C,height:C}),e.jsx("rect",{className:"hk-h03",x:0,y:A-B,width:B,height:B}),e.jsx("rect",{className:"hk-hh",x:0,y:A-D,width:D,height:D}),e.jsx("text",{className:"hk-ht hk-ht5",x:A,y:-1.4,textAnchor:"end",children:"5 ha"}),e.jsx("text",{className:"hk-ht",x:C+1.6,y:A-C+4.4,children:"1 ha"}),e.jsx("text",{className:"hk-ht",x:B+1.6,y:A-B+4,children:"0,3 ha"}),e.jsx("text",{className:"hk-ht hk-hthouse",x:D+1.8,y:A-1.4,children:"147 m²"})]}),e.jsxs("dl",{className:"hk-herra-key",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Spildan"}),e.jsx("dd",{children:"allt að 5 hektarar"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Dæmigerð sumarhúsalóð"}),e.jsx("dd",{children:"0,3 til 1 hektari"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Húsið af spildunni"}),e.jsx("dd",{children:"0,3%"})]})]})]})}const Le=`
.hk-herra{display:grid;gap:clamp(28px,4vw,64px);align-items:end}
@media (min-width:880px){.hk-herra{grid-template-columns:minmax(0,1fr) minmax(0,.85fr)}}
.hk-herra svg{width:100%;height:auto;overflow:visible}

.hk-herra rect{transform-box:fill-box;transform-origin:bottom left}
.hk-h5{fill:none;stroke:${Y};stroke-width:.55}
.hk-h1{fill:none;stroke:${P};stroke-width:.4;stroke-dasharray:2.2 1.8}
.hk-h03{fill:none;stroke:${P};stroke-width:.4;stroke-dasharray:2.2 1.8}
.hk-hh{fill:${Y};stroke:none}

/* the five hectares grow around the ordinary plot, which is already there */
.hk-herra .hk-h5{transform:scale(.245);opacity:0;
  transition:transform 1.5s cubic-bezier(.17,.84,.44,1),opacity .6s cubic-bezier(.17,.84,.44,1)}
.hk-herra.is-in .hk-h5{transform:scale(1);opacity:1}
.hk-herra .hk-h1,.hk-herra .hk-h03,.hk-herra .hk-hh{opacity:0;transition:opacity .7s cubic-bezier(.17,.84,.44,1)}
.hk-herra.is-in .hk-h1{opacity:1;transition-delay:.15s}
.hk-herra.is-in .hk-h03{opacity:1;transition-delay:.28s}
.hk-herra.is-in .hk-hh{opacity:1;transition-delay:1.05s}

/* SVG user units, so the rendered size is this times (width / 108). At a
   354px-wide phone that is ~3.3x, so 3.1 renders near 10px — too small.
   Bumped on narrow viewports where the scale factor is lowest. */
.hk-ht{font-size:3.1px;fill:${P};letter-spacing:.02em}
.hk-ht5{fill:${Y};font-size:3.6px}
@media (max-width:700px){
  .hk-ht{font-size:4.4px}
  .hk-ht5{font-size:5px}
}
.hk-hthouse{fill:${Y}}
.hk-herra text{opacity:0;transition:opacity .7s cubic-bezier(.17,.84,.44,1) .9s}
.hk-herra.is-in text{opacity:1}

.hk-herra-key{margin:0;display:grid;gap:0;border-top:1px solid ${ie}}
.hk-herra-key>div{display:flex;justify-content:space-between;gap:1.4rem;align-items:baseline;
  padding-block:clamp(12px,1.4vw,18px);border-bottom:1px solid ${ie}}
.hk-herra-key dt{margin:0;color:${P};font-size:clamp(.86rem,1.05vw,1rem)}
.hk-herra-key dd{margin:0;font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:-.02em;text-align:right}
@media (prefers-reduced-motion:reduce){
  .hk-herra .hk-h5,.hk-herra .hk-h1,.hk-herra .hk-h03,.hk-herra .hk-hh,.hk-herra text{
    opacity:1!important;transform:none!important;transition:none!important}
}
`,Te=(l,c,a)=>{const o=c-l;return((a-l)%o+o)%o+l};function Fe({peaks:l,label:c}){const a=s.useRef(null),o=s.useRef(null),[u,f]=s.useState(1),[i,g]=s.useState(!1),x=X(0),w=X(0),k=s.useRef(-1),t=s.useRef(!0),n=s.useRef(!0),{scrollY:d}=ue(),j=fe(d),E=pe(j,{damping:50,stiffness:400}),F=J(E,r=>(r<0?-1:1)*Math.min(5,Math.abs(r)/1e3*5));s.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),h=()=>g(r.matches);return h(),r.addEventListener("change",h),()=>r.removeEventListener("change",h)},[]),s.useEffect(()=>{const r=a.current,h=o.current;if(!r||!h||i)return;const H=()=>{const b=r.offsetWidth||0,N=h.scrollWidth||0;w.set(N),f(z=>{const L=N>0?Math.max(3,Math.ceil(b/N)+2):1;return z===L?z:L})};H();const p=new ResizeObserver(H);p.observe(r),p.observe(h);const y=new IntersectionObserver(([b])=>{b&&(t.current=b.isIntersecting)});y.observe(r);const M=()=>{n.current=document.visibilityState==="visible"};return document.addEventListener("visibilitychange",M,{passive:!0}),M(),()=>{p.disconnect(),y.disconnect(),document.removeEventListener("visibilitychange",M)}},[i,w]);const I=J([x,w],([r,h])=>`${-Te(0,Number(h)||1,Number(r)||0)}px`);ke((r,h)=>{if(i||!t.current||!n.current)return;const H=w.get();if(H<=0)return;const p=F.get(),y=Math.min(5,Math.abs(p));y>.1&&(k.current=p>=0?-1:1),x.set(x.get()+k.current*(H*3)/100*(1+y)*(h/1e3))});const m=r=>e.jsx("ul",{className:"hk-sky",ref:r===0?o:null,...r===0?{"aria-label":c}:{"aria-hidden":!0},children:l.map(h=>e.jsx("li",{style:{"--r":h.rise},children:h.name},h.name))},r);return i?e.jsx("div",{className:"hk-skyline is-static",children:m(0)}):e.jsx("div",{className:"hk-skyline",ref:a,children:e.jsx(me.div,{className:"hk-skyline-track",style:{x:I},children:Array.from({length:u},(r,h)=>m(h))})})}function Ie({items:l,lenisRef:c}){const[a,o]=s.useState(!1),u=s.useRef(null),f=s.useRef(null);return s.useEffect(()=>{var w;const i=c.current;if(a?i==null||i.stop():i==null||i.start(),!a)return;const g=(w=u.current)==null?void 0:w.querySelector("a");g==null||g.focus();const x=k=>{var j,E;if(k.key==="Escape"){o(!1),(j=f.current)==null||j.focus();return}if(k.key!=="Tab")return;const t=(E=u.current)==null?void 0:E.querySelectorAll("a,button");if(!t||!t.length)return;const n=Array.from(t),d=n.indexOf(document.activeElement);k.shiftKey&&d<=0?(k.preventDefault(),n[n.length-1].focus()):!k.shiftKey&&d===n.length-1&&(k.preventDefault(),n[0].focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[a,c]),s.useEffect(()=>()=>{var i;(i=c.current)==null||i.start()},[c]),e.jsxs(e.Fragment,{children:[e.jsxs("button",{ref:f,type:"button",className:`hk-burger${a?" is-open":""}`,"aria-expanded":a,"aria-controls":"hk-menu","aria-label":a?"Loka valmynd":"Opna valmynd",onClick:()=>o(i=>!i),children:[e.jsx("span",{"aria-hidden":!0}),e.jsx("span",{"aria-hidden":!0})]}),e.jsx("div",{id:"hk-menu",ref:u,className:`hk-menu${a?" is-open":""}`,"aria-hidden":!a,...a?{}:{inert:""},children:e.jsx("nav",{"aria-label":"Valmynd",children:e.jsx("ul",{children:l.map((i,g)=>e.jsx("li",{style:{"--i":g},children:e.jsx("a",{href:`#${i.id}`,onClick:()=>o(!1),children:e.jsx("span",{children:i.label})})},i.id))})})})]})}const Ce=`
.hk-burger{display:none}
.hk-menu{display:none}

@media (max-width:759px){
  .hk-nav{display:none}

  /* two hairlines that cross. 44px box, 22px marks, so the target is real
     while the mark stays light. currentColor so it inherits the chrome's
     white-over-hero / ink-over-page flip for free. */
  .hk-burger{
    display:block;position:relative;width:44px;height:44px;margin:-11px -12px -11px 0;
    padding:0;border:0;background:none;color:inherit;cursor:pointer;pointer-events:auto;z-index:60}
  .hk-burger span{
    position:absolute;left:11px;width:22px;height:1px;background:currentColor;
    transition:transform .5s cubic-bezier(.17,.84,.44,1),opacity .3s linear}
  .hk-burger span:nth-child(1){top:20px}
  .hk-burger span:nth-child(2){top:26px}
  .hk-burger.is-open span:nth-child(1){transform:translateY(3px) rotate(45deg)}
  .hk-burger.is-open span:nth-child(2){transform:translateY(-3px) rotate(-45deg)}
  .hk-burger.is-open{color:#111}

  /* the field wipes down from the top edge, the page never moves */
  .hk-menu{
    display:block;position:fixed;inset:0;z-index:50;background:#fff;
    clip-path:inset(0 0 100% 0);transition:clip-path .68s cubic-bezier(.17,.84,.44,1);
    visibility:hidden}
  .hk-menu.is-open{clip-path:inset(0 0 0 0);visibility:visible}

  .hk-menu nav{position:absolute;left:clamp(18px,3.4vw,52px);right:clamp(18px,3.4vw,52px);
    bottom:clamp(28px,9vw,64px)}
  .hk-menu ul{list-style:none;margin:0;padding:0}
  .hk-menu li{overflow:hidden}
  .hk-menu a{display:block;min-height:44px;padding:.22em 0;color:#111;text-decoration:none;
    font-size:clamp(2rem,11vw,3.2rem);line-height:1.14;letter-spacing:-.028em}
  /* the same masked rise the page uses, staggered by index */
  .hk-menu a>span{display:block;transform:translateY(110%);
    transition:transform .72s cubic-bezier(.17,.84,.44,1)}
  .hk-menu.is-open a>span{transform:none;transition-delay:calc(.14s + var(--i) * .055s)}
  .hk-menu a:focus-visible{outline:2px solid #111;outline-offset:4px}
}

@media (max-width:759px) and (prefers-reduced-motion:reduce){
  .hk-menu,.hk-menu.is-open{transition:none}
  .hk-menu a>span{transform:none;transition:none}
  .hk-burger span{transition:none}
}
`,U="/iceland-redesigns/",ae="#ffffff",R="#111111",S="#767676",T="#e2e2e2",Be="#f0f0f0",Ue="'HK Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",Oe="'HK Hedvig', Georgia, 'Times New Roman', serif",O="cubic-bezier(.17,.84,.44,1)",_e=[{file:$.houseBuilt.file,alt:$.houseBuilt.alt},{file:_.exterior.file,alt:_.exterior.alt,chip:"Tölvumynd"},{file:$.construction.file,alt:$.construction.alt},{file:_.living.file,alt:_.living.alt,chip:"Tölvumynd"},{file:$.houseAutumn.file,alt:$.houseAutumn.alt}],re=["0em","-0.28em","-0.1em","-0.42em","-0.18em","-0.5em","-0.12em","-0.3em"],Ye=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pe=`
@font-face{font-family:'HK Switzer';src:url('${U}fonts/switzer/Switzer-Regular.woff2') format('woff2');font-weight:400;font-display:swap}
@font-face{font-family:'HK Switzer';src:url('${U}fonts/switzer/Switzer-Medium.woff2') format('woff2');font-weight:500;font-display:swap}
@font-face{font-family:'HK Switzer';src:url('${U}fonts/switzer/Switzer-Semibold.woff2') format('woff2');font-weight:600;font-display:swap}
@font-face{font-family:'HK Hedvig';src:url('${U}fonts/hedvig/hedvig-latin.woff2') format('woff2');font-weight:400;font-display:swap}
@font-face{font-family:'HK Hedvig';src:url('${U}fonts/hedvig/hedvig-latin-ext.woff2') format('woff2');font-weight:400;font-display:swap;unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+2C60-2C7F,U+A720-A7FF}

.hk-root{background:${ae};color:${R};font-family:${Ue};-webkit-font-smoothing:antialiased;overflow-x:clip}
.hk-root *,.hk-root *::before,.hk-root *::after{box-sizing:border-box}
.hk-root h1,.hk-root h2,.hk-root p,.hk-root figure{margin:0}
.hk-root img{display:block;max-width:100%}
.hk-serif{font-family:${Oe};font-weight:400;font-style:normal}
.hk-root :focus-visible{outline:2px solid currentColor;outline-offset:3px}

.hk-pad{padding-inline:clamp(18px,3.4vw,52px)}
.hk-sec{padding-block:clamp(72px,11vh,148px)}
/* The chrome is fixed with no background, so an anchor jump lands the target
   at y=0, underneath it. Every nav target is a section id, and the mobile
   menu is entirely anchors, so without this each menu tap hides the heading
   it just scrolled to. */
main > section[id]{scroll-margin-top:clamp(56px,9vh,96px)}

/* rule wipe — measured scaleX(0) → scaleX(1) */
.hk-rule{height:1px;background:${T};transform-origin:left center}
.hk-js .hk-rule{transform:scaleX(0);transition:transform 1.1s ${O}}
.hk-js .hk-rule.is-in{transform:scaleX(1)}

/* THE text device — translateY inside a mask.
   Resting state is VISIBLE: the hidden start only exists while .hk-js is on
   the root, so a crawler, a paused rAF or a JS failure can never strand copy. */
/* padding-bottom/margin-bottom give the mask headroom for descenders (the
   serif's g/y/þ drop well below the line box) without adding visible gap
   between stacked lines — the negative margin cancels the padding's height. */
.hk-m{display:block;overflow:hidden;padding-bottom:.22em;margin-bottom:-.22em}
.hk-m>span{display:block;transform:none}
.hk-js .hk-m>span{transform:translateY(108%);transition:transform 1.05s ${O}}
.hk-js .hk-m.is-in>span{transform:none}

/* Continuous scroll drift for type. The mask reveal above handles ARRIVAL;
   this handles the whole time a block is on screen, so headlines and body
   travel at slightly different rates from the page and from each other.
   Kept on a separate wrapper element so the two never share a transform. */
.hk-d{display:block;will-change:transform}
@media (prefers-reduced-motion:reduce){.hk-d{will-change:auto;transform:none!important}}

/* soft rise for blocks that are not display type */
.hk-r{opacity:1;transform:none}
.hk-js .hk-r{opacity:0;transform:translateY(24px);transition:opacity .9s ${O},transform .9s ${O}}
.hk-js .hk-r.is-in{opacity:1;transform:none}

/* THE image device — masked frame, inner wrapper drifts */
.hk-frame{position:relative;overflow:hidden;width:100%}
.hk-frame-in{position:absolute;inset:-9% 0;will-change:transform}
.hk-frame-in img,.hk-frame-in video{width:100%;height:100%;object-fit:cover}
@media (prefers-reduced-motion:reduce){.hk-frame-in{inset:0;will-change:auto;transform:none!important}}

/* fixed chrome */
.hk-chrome{position:fixed;top:0;left:0;right:0;z-index:40;display:flex;align-items:flex-start;
  justify-content:space-between;gap:2rem;padding:clamp(14px,2vw,26px) clamp(18px,3.4vw,52px);
  pointer-events:none;color:#fff;transition:color .45s ${O}}
.hk-chrome.is-ink{color:${R}}
.hk-chrome a{pointer-events:auto;color:inherit;text-decoration:none}
.hk-wordmark{font-size:clamp(12px,1vw,15px);line-height:1.2;font-weight:400}
/* The chrome is fixed and has no background, so on a phone its three-line
   wordmark sat directly on top of section headings as they scrolled past.
   One line on narrow screens, and sections get enough top padding to clear it. */
@media (max-width:759px){
  .hk-wordmark{line-height:1.2;font-size:12px}
  .hk-wordmark br{display:none}
  .hk-wordmark span{display:none}
  .hk-sec{padding-block:clamp(84px,14vh,148px) clamp(72px,11vh,148px)}
}
.hk-nav{display:flex;gap:.3em;flex-wrap:wrap;justify-content:flex-end;max-width:62vw;
  font-size:clamp(12px,1vw,15px);font-weight:400}
.hk-nav a{white-space:nowrap}
.hk-nav a:hover{opacity:.55}

/* hero — full bleed, colossal lockup bottom left */
.hk-hero{position:relative;height:100svh;min-height:540px;overflow:hidden}
.hk-hero>.hk-frame{position:absolute;inset:0}
.hk-hero-scrim{position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(180deg,rgba(0,0,0,.34) 0%,rgba(0,0,0,.05) 32%,rgba(0,0,0,.28) 70%,rgba(0,0,0,.66) 100%)}
.hk-hero-lock{position:absolute;left:0;right:0;bottom:clamp(16px,2.6vw,40px);color:#fff}
/* line-height .9 was tight enough on its own to compress the line box below
   the serif's descender extent (g/y/þ). .98 keeps the same tight display
   rhythm but stops it fighting the mask's own headroom above. */
.hk-lock{display:block;font-weight:400;letter-spacing:-.03em;line-height:.98;
  font-size:clamp(2.5rem,10.6vw,10.4rem)}

/* statement — the page's opening line. Set LEFT on the same edge as every
   other heading and with its rule ABOVE it, like hk-land/hk-houses: centred
   with the rule underneath, it read as a detached box floating in its own
   frame rather than as the first beat of the page. Larger than an h2 because
   it is the thesis, but it obeys the same grammar as the rest. */
.hk-statement{max-width:22ch;color:${S};
  font-size:clamp(1.35rem,3.6vw,3rem);line-height:1.14;letter-spacing:-.022em;font-weight:400}
.hk-statement .hk-serif{color:${R}}

/* ledger */
.hk-intro{display:grid;gap:clamp(30px,4.5vw,72px);margin-top:clamp(30px,4vw,60px)}
@media (min-width:900px){.hk-intro{grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);align-items:start}}
.hk-spec{margin:0;border-top:1px solid ${T}}
.hk-spec>div{display:flex;justify-content:space-between;gap:1.2rem;align-items:baseline;
  padding-block:clamp(11px,1.3vw,16px);border-bottom:1px solid ${T}}
.hk-spec dt{margin:0;color:${S};font-size:clamp(.84rem,1vw,.96rem)}
.hk-spec dd{margin:0;text-align:right;font-size:clamp(.95rem,1.15vw,1.08rem)}

.hk-ledger{border-top:1px solid ${T}}
.hk-led{display:grid;grid-template-columns:1fr auto;gap:1.4rem;align-items:baseline;
  padding-block:clamp(13px,1.5vw,21px);border-bottom:1px solid ${T}}
.hk-led-k,.hk-led-v{font-size:clamp(1.15rem,2.8vw,2.3rem);letter-spacing:-.02em;line-height:1.08}
.hk-led-v{text-align:right}

/* the horizon row. Full-bleed on purpose — it is a sightline, so it runs
   past both edges rather than stopping at the text column. */
/* Font size lives on the container so the padding below can be expressed in
   em and is therefore guaranteed to clear the tallest --r offset at every
   viewport. Without that top padding, overflow:hidden slices the raised
   names clean through the middle. */
.hk-skyline{width:100%;overflow:hidden;font-size:clamp(1.6rem,5.4vw,4.2rem);
  padding-block:.72em .28em}
.hk-skyline-track{display:inline-flex;align-items:flex-end;will-change:transform}
.hk-skyline.is-static{overflow-x:auto;-webkit-overflow-scrolling:touch}
.hk-skyline.is-static .hk-sky{padding-inline:clamp(18px,3.4vw,52px)}
.hk-sky{list-style:none;margin:0;padding:0;display:inline-flex;flex:0 0 auto;
  align-items:flex-end;gap:0;font-size:inherit;
  letter-spacing:-.028em;line-height:1.06;white-space:nowrap}
.hk-sky li{transform:translateY(var(--r,0));white-space:nowrap;padding-inline:.42em}
.hk-sky li:nth-child(even){color:${S}}
@media (prefers-reduced-motion:reduce){.hk-sky li{transform:none}}


/* enquiry */
/* min-height:44px is the real tap-target floor (measured 21.5-24px before this,
   on a mobile audit — the underline look stays, the box just gets tall enough
   to tap reliably). */
.hk-field{display:block;box-sizing:border-box;min-height:44px;border:0;border-bottom:1px solid ${T};
  background:none;width:100%;padding:.85rem 0;font:inherit;font-size:1.05rem;color:${R};border-radius:0}
.hk-field:focus{outline:none;border-bottom-color:${R}}
.hk-lab{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:${S}}
/* .hk-send measured 29px tall — an invisible hit-slop grows the tap target to
   44px without visually bulking up a text link that's supposed to read light. */
.hk-send{display:inline-block;position:relative;margin-top:1.8rem;font-size:clamp(1.1rem,2vw,1.5rem);
  color:${R};text-decoration:none;border-bottom:1px solid ${R};padding-bottom:.1em}
.hk-send::before{content:'';position:absolute;inset:-10px -6px}
/* Same trick for the contact links: they measured 24px, and inline links in a
   flex row cannot take a min-height without breaking the baseline row. */
.hk-contact{position:relative}
.hk-contact::before{content:'';position:absolute;inset:-11px -4px}
.hk-send:hover{opacity:.6}
${ze}
${He}
${Le}
${Ce}
`;function v({children:l,className:c,style:a}){return e.jsx("span",{className:`hk-m ${c??""}`,style:a,children:e.jsx("span",{children:l})})}function De({file:l,alt:c,ratio:a="3 / 2",drift:o=10,chip:u,priority:f=!1}){return e.jsxs("div",{className:"hk-frame",style:{aspectRatio:a},children:[u?e.jsx("span",{className:"hk-chip",children:u}):null,e.jsx("div",{className:"hk-frame-in","data-hk-drift":o,children:e.jsx("img",{src:q(l),alt:c,loading:f?"eager":"lazy",decoding:"async",...f?{fetchpriority:"high"}:{}})})]})}function gt(){const l=de("heklusyn"),c=s.useRef(null),[a,o]=s.useState(!1),u=s.useRef(!1),f=s.useRef(null),[i,g]=s.useState({name:"",email:"",house:Z[0]});s.useEffect(()=>{document.title="Heklusýn · Tólf hús á fimmtíu hekturum"},[]),s.useEffect(()=>{const t=c.current;if(!t)return;const n=Ye();n||t.classList.add("hk-js");const d=Array.from(t.querySelectorAll(".hk-m,.hk-r,.hk-rule")),j=new IntersectionObserver(p=>p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("is-in"),j.unobserve(y.target))}),{rootMargin:"0px 0px -10% 0px",threshold:.01});n||d.forEach(p=>j.observe(p));const E=window.setTimeout(()=>d.forEach(p=>p.classList.add("is-in")),2e3),F=Array.from(t.querySelectorAll(".hk-frame-in")),I=n?[]:Array.from(t.querySelectorAll("[data-hk-tdrift]")),m=t.querySelector(".hk-hero"),r=()=>{const p=window.innerHeight,y=[];for(const b of F){const N=b.parentElement;if(!N)continue;const z=N.getBoundingClientRect();if(z.bottom<-240||z.top>p+240)continue;const L=Number(b.dataset.hkDrift||10),oe=(z.top+z.height/2-p/2)/(p/2+z.height/2);y.push([b,`translate3d(0,${(-oe*L).toFixed(2)}%,0)`])}for(const b of I){const N=b.getBoundingClientRect();if(N.bottom<-240||N.top>p+240)continue;const z=Number(b.dataset.hkTdrift||4),L=(N.top+N.height/2-p/2)/(p/2+N.height/2);y.push([b,`translate3d(0,${(-L*z).toFixed(2)}px,0)`])}const M=m?m.getBoundingClientRect():null;for(const[b,N]of y)b.style.transform=N;if(M){const b=M.bottom<88;b!==u.current&&(u.current=b,o(b))}};let h=null,H=0;if(n)window.addEventListener("scroll",r,{passive:!0});else{h=new le({lerp:.09,smoothWheel:!0}),f.current=h;const p=y=>{h==null||h.raf(y),r(),H=requestAnimationFrame(p)};H=requestAnimationFrame(p)}return r(),window.addEventListener("resize",r,{passive:!0}),()=>{window.clearTimeout(E),j.disconnect(),cancelAnimationFrame(H),h==null||h.destroy(),f.current=null,window.removeEventListener("scroll",r),window.removeEventListener("resize",r),t.classList.remove("hk-js")}},[]);const x=s.useMemo(()=>G.filter(t=>t.statuses.includes("selt")).length,[]),w=s.useMemo(()=>{const t=`Nafn: ${i.name}
Netfang: ${i.email}
Hús: ${i.house}
`;return`mailto:${Q}?subject=${encodeURIComponent("Fyrirspurn um Rangárslétta")}&body=${encodeURIComponent(t)}`},[i]),k={fontSize:"clamp(1.5rem,3.6vw,3rem)",letterSpacing:"-.022em",lineHeight:1.08,fontWeight:400};return e.jsxs("div",{ref:c,className:"hk-root",children:[e.jsx("style",{children:Pe}),e.jsx($e,{ink:R,ground:ae}),e.jsx(he,{company:l}),e.jsxs("header",{className:`hk-chrome${a?" is-ink":""}`,children:[e.jsxs("a",{href:"#hk-top",className:"hk-wordmark",children:["Heklusýn",e.jsx("br",{}),e.jsxs("span",{children:["Rangárslétta",e.jsx("br",{}),"Ytri-Rangá"]})]}),e.jsx("nav",{className:"hk-nav","aria-label":"Efnisyfirlit",children:V.map((t,n)=>e.jsxs("a",{href:`#${t.id}`,children:[t.label,n<V.length-1?",":""]},t.id))}),e.jsx(Ie,{items:V,lenisRef:f})]}),e.jsxs("main",{id:"hk-top",children:[e.jsxs("section",{className:"hk-hero",children:[e.jsx("div",{className:"hk-frame",style:{aspectRatio:"auto",height:"100%"},children:e.jsx("div",{className:"hk-frame-in","data-hk-drift":"6",children:e.jsx("img",{src:q($.heroEstate.file),alt:$.heroEstate.alt,loading:"eager",decoding:"async",fetchpriority:"high"})})}),e.jsx("div",{className:"hk-hero-scrim","aria-hidden":!0}),e.jsx("div",{className:"hk-hero-lock hk-pad",children:e.jsxs("h1",{style:{fontWeight:400},children:[e.jsx(v,{className:"hk-lock",children:"Heklusýn"}),e.jsx(v,{className:"hk-lock hk-serif",children:"við Ytri-Rangá"})]})})]}),e.jsxs("section",{id:"hk-thesis",className:"hk-sec hk-pad",children:[e.jsx("div",{className:"hk-rule"}),e.jsxs("p",{className:"hk-statement hk-d","data-hk-tdrift":"34",style:{margin:"clamp(26px,3.6vw,48px) 0 0"},children:[e.jsx(v,{children:"Ekki sumarhús."}),e.jsx(v,{className:"hk-serif",children:"Þinn eigin herragarður."})]}),e.jsxs("div",{className:"hk-intro",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"14",style:{fontSize:"clamp(1.05rem,1.5vw,1.32rem)",lineHeight:1.5,letterSpacing:"-.01em"},children:"Heklusýn byggir hús á Rangársléttu, fimmtíu hektara landi á vesturbakka Ytri-Rangár. Nálgunin er önnur en gengur og gerist. Í stað þess að skipta landinu í sem flestar lóðir verða húsin aðeins tólf til fjórtán, hvert á spildu sem getur orðið allt að fimm hektarar."}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,lineHeight:1.62,marginTop:"1.5rem",maxWidth:"46ch"},children:"Húsin eru teiknuð af Studio Halla Friðgeirs og afhent tilbúin til innréttingar, eða fullbúin ef þess er óskað. Landið fylgir húsinu í kaupunum."})]}),e.jsx("dl",{className:"hk-spec",children:[["Landið","Fylgir húsinu"],["Hönnun","Studio Halla Friðgeirs"],["Afhending","Tilbúið til innréttingar"],["Hitun","Gólfhiti með varmadælu"]].map(([t,n])=>e.jsxs("div",{children:[e.jsx("dt",{children:t}),e.jsx("dd",{children:n})]},t))})]})]}),e.jsxs("section",{id:"hk-land",className:"hk-sec hk-pad",children:[e.jsx("div",{className:"hk-rule"}),e.jsxs("h2",{className:"hk-d","data-hk-tdrift":"26",style:{...k,margin:"clamp(26px,3.6vw,48px) 0 .7rem"},children:[e.jsx(v,{children:"Fimm hektarar,"}),e.jsx(v,{className:"hk-serif",children:"ekki þrjú þúsund fermetrar."})]}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,maxWidth:"46ch",lineHeight:1.62,marginBottom:"clamp(30px,4vw,58px)"},children:"Dæmigerð sumarhúsalóð á Íslandi er 0,3 til 1 hektari. Spildurnar á Rangársléttu eru allt að fimm hektarar. Húsið sjálft stendur á um 0,3 prósentum af landinu sem fylgir því."}),e.jsx(Me,{}),e.jsx("p",{className:"hk-r",style:{color:S,fontSize:".86rem",marginTop:"1.6rem"},children:"Skýringarmynd af flatarmáli, ekki mæld lóðablöð."})]}),e.jsx(De,{file:$.landRiver.file,alt:$.landRiver.alt,ratio:"16 / 8",drift:13}),e.jsxs("section",{className:"hk-sec hk-pad",children:[e.jsx("div",{className:"hk-rule"}),e.jsxs("h2",{className:"hk-d","data-hk-tdrift":"26",style:{...k,marginTop:"clamp(26px,3.6vw,52px)"},children:[e.jsx(v,{children:"Landinu var skammtað,"}),e.jsx(v,{className:"hk-serif",children:"ekki skipt."})]}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,fontSize:"clamp(1rem,1.2vw,1.1rem)",lineHeight:1.62,maxWidth:"46ch",marginTop:"1.4rem"},children:"Landið var áður hluti af bújörðinni Leirubakka og varð sjálfstæð eign við Ytri-Rangá árið 2020. Á svæðinu er þess gætt að raska sem minnst hraunmyndunum, mosa og gróðri sem fyrir er."})]}),e.jsx("section",{className:"hk-sec hk-pad",children:e.jsx("div",{className:"hk-ledger",children:[["Landið","50 hektarar"],["Húsafjöldi","12 til 14"],["Sjálfstæð eign","2020"],["Seld hús",String(x)]].map(([t,n])=>e.jsxs("div",{className:"hk-led",children:[e.jsx("span",{className:"hk-led-k",children:e.jsx(v,{children:t})}),e.jsx("span",{className:"hk-led-v hk-serif",children:e.jsx(v,{children:n})})]},t))})}),e.jsxs("section",{id:"hk-houses",className:"hk-sec hk-pad",children:[e.jsx("h2",{className:"hk-d","data-hk-tdrift":"26",style:{...k,marginBottom:".7rem"},children:e.jsx(v,{children:"Húsin"})}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,maxWidth:"42ch",lineHeight:1.6,marginBottom:"clamp(24px,3.4vw,48px)"},children:"Fimm skráð hús af tólf til fjórtán sem munu rísa."}),e.jsx(Ee,{shots:_e})]}),e.jsxs("section",{id:"hk-horizon",className:"hk-sec hk-pad",children:[e.jsx("div",{className:"hk-rule"}),e.jsxs("h2",{className:"hk-d","data-hk-tdrift":"26",style:{...k,margin:"clamp(26px,3.6vw,48px) 0 .7rem"},children:[e.jsx(v,{children:"Átta fjöll"}),e.jsx(v,{className:"hk-serif",children:"í sjónlínu"})]}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,maxWidth:"44ch",lineHeight:1.6},children:"Af sömu spildu sérðu Heklu, Eyjafjallajökul og Þríhyrning. Öll átta í einni sjónlínu."})]}),e.jsx(Fe,{label:"Fjöllin átta sem sjást frá Rangársléttu",peaks:je.map((t,n)=>({name:t.name,rise:re[n%re.length]}))}),e.jsxs("section",{id:"hk-docs",className:"hk-sec hk-pad",style:{background:Be},children:[e.jsx("h2",{className:"hk-d","data-hk-tdrift":"26",style:{...k,marginBottom:"1.4rem"},children:e.jsx(v,{children:"Gögnin"})}),e.jsx("div",{className:"hk-ledger",children:Se.map(t=>e.jsxs("div",{className:"hk-led",children:[e.jsx("span",{className:"hk-led-k",children:e.jsx(v,{children:t.label})}),e.jsx("span",{className:"hk-led-v hk-serif",children:e.jsx(v,{children:t.count})})]},t.label))}),e.jsx("p",{className:"hk-r hk-d","data-hk-tdrift":"12",style:{color:S,marginTop:"1.3rem",maxWidth:"46ch",lineHeight:1.6},children:"Gögnin eru gefin út af Heklusýn sjálfri."})]}),e.jsxs("section",{id:"hk-enquiry",className:"hk-sec hk-pad",children:[e.jsx("h2",{className:"hk-d","data-hk-tdrift":"40",style:{fontSize:"clamp(1.9rem,5.2vw,4.6rem)",letterSpacing:"-.028em",lineHeight:1.02,fontWeight:400,marginBottom:"clamp(28px,4vw,56px)"},children:e.jsx(v,{children:"Fyrirspurn"})}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem",maxWidth:"44rem"},children:[e.jsxs("label",{children:[e.jsx("span",{className:"hk-lab",children:"Nafn"}),e.jsx("input",{className:"hk-field",value:i.name,onChange:t=>g({...i,name:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"hk-lab",children:"Netfang"}),e.jsx("input",{className:"hk-field",type:"email",value:i.email,onChange:t=>g({...i,email:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"hk-lab",children:"Hús"}),e.jsx("select",{className:"hk-field",value:i.house,onChange:t=>g({...i,house:t.target.value}),children:Z.map(t=>e.jsx("option",{children:t},t))})]}),e.jsx("a",{className:"hk-send",href:w,children:"Senda fyrirspurn"})]}),e.jsx("div",{className:"hk-rule",style:{margin:"clamp(48px,7vw,96px) 0 1.5rem"}}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:".5rem 2.2rem",color:S,fontSize:".98rem"},children:[e.jsx("a",{className:"hk-contact",href:xe,style:{color:R},children:Q}),e.jsx("a",{className:"hk-contact",href:ve,style:{color:R},children:be}),e.jsx("span",{children:we}),e.jsx("span",{children:ye})]})]})]}),e.jsx(ce,{company:l})]})}export{gt as default};
