import{r as c,s as J,a as Y,j as e,L as W}from"./index-DR5eYulC.js";import{g as y}from"./index-CzGW6FVa.js";import{S as V}from"./ScrollTrigger-DNECHiyU.js";import Q from"./lenis-niKyKZQP.js";import{g as X}from"./companies-DhNyAQKb.js";import{P as K}from"./PreviewChrome-B6WjOeAw.js";import{P as Z}from"./PreviewFooter-xfdkjm07.js";import{d as ee}from"./demoStore-B67JhJ3S.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-BddcTKzz.js";import"./createLucideIcon-DZz5IxRw.js";import"./proxy-BFi3RUhJ.js";import"./send-IcWSiQXL.js";import"./index-DDSHXBUq.js";import"./external-link-DmZaYxpg.js";import"./x-NDKpDnGi.js";import"./mail-DBaE9Db4.js";import"./SndrBadge-CVKEHvhd.js";const D={rating:4.99,reviewCount:557,bookingCom:{score:9.7}},$="/iceland-redesigns/svartaborg/",_=s=>`${s.replace(/\.jpg$/,"-800.jpg")} 800w, ${s} 1600w`,R={viewBox:"0 0 2160 1440",path:"M 344 1334 L 344 478 L 1559 365 L 1718 931 L 1718 1334 Z"},j={houseHillside:{src:`${$}house-hillside.jpg`,alt:"The black timber house on its green hillside, the valley open below",ratio:"3 / 2"},livingWood:{src:`${$}living-wood.jpg`,alt:"The walnut-panelled living room, grey sofa under the pitched ceiling",ratio:"3 / 2"},gableTubA:{src:`${$}gable-tub-a.jpg`,alt:"The geothermal hot tub sunk into the deck against the black gable",ratio:"3 / 2"},aerialSnowA:{src:`${$}aerial-snow-a.jpg`,alt:"The house alone in the white snowfield, from above",ratio:"3 / 2"},aerialGreen:{src:`${$}aerial-green.jpg`,alt:"The house and hot tub from directly above in summer green",ratio:"3 / 2"},streamAutumn:{src:`${$}stream-autumn.jpg`,alt:"A stream cutting through the autumn moor",ratio:"3 / 2"},windowReflect:{src:`${$}window-reflect.jpg`,alt:"The big window reflecting the valley back at itself"},windowMoss:{src:`${$}window-moss.jpg`,alt:"The corner window in the black cladding, the valley in the glass and the second house small on the hill",ratio:"2 / 3"}},F=[{quote:"Completely peaceful, stunning views, and a cabin that is thoughtfully designed down to the details.",author:"Léa",when:"July 2026"},{quote:"The stand out for me was the private geothermal hot tub. Easily my favorite spot we stayed on the ring road.",author:"Valerie",when:"July 2026"},{quote:"Amazing place. Total highlight of the trip. Spacious house with dramatic views and amazing amenities.",author:"Alex",when:"July 2026"}],se=[{name:"Goðafoss",note:"The waterfall of the gods, on the Diamond Circle.",dist:"10 min"},{name:"Húsavík",note:"Whale watching and the GeoSea baths.",dist:"20 min"},{name:"Akureyri",note:"The capital of the north.",dist:"30 min"},{name:"Mývatn",note:"The lake, the craters and the nature baths.",dist:"Within reach"}],q={guests:4,built:"Built by the owners in 2020",hotTub:"Private geothermal hot tub",farm:"On the family farm Rangá"},ae={"@context":"https://schema.org","@type":"LodgingBusiness",name:"Svartaborg",description:"Two black timber houses on a hillside above the family farm Rangá, on the Diamond Circle in North Iceland. Designed and built by the owners, with a private geothermal hot tub, ten minutes from Goðafoss.",address:{"@type":"PostalAddress",addressLocality:"Húsavík",addressRegion:"Norðurland eystra",addressCountry:"IS"},aggregateRating:{"@type":"AggregateRating",ratingValue:4.99,reviewCount:557},amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Private geothermal hot tub",value:!0},{"@type":"LocationFeatureSpecification",name:"Mountain view",value:!0},{"@type":"LocationFeatureSpecification",name:"Free parking",value:!0}]};y.registerPlugin(V);const I=X("svartaborg"),A="#101112",U="#E9E6E0",B="rgba(233,230,224,.64)",O="rgba(233,230,224,.16)",C="#4FA3A5",z="#7FC4C6",te="'Familjen Grotesk', system-ui, sans-serif",G="/iceland-redesigns/",P=()=>{var s;return typeof window<"u"&&((s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},l=(s,a)=>`clamp(${a}px, calc(var(--u) * ${s}), ${+(s*1.15).toFixed(1)}px)`,M={x:1031,y:900};function ie(s){c.useEffect(()=>{if(!s||P())return;const a=document.querySelector(".sb-root");if(!a)return;const r=new Q({duration:1.1,smoothWheel:!0}),d=[];let o=null;const t=new IntersectionObserver(h=>h.forEach(p=>p.isIntersecting&&p.target.classList.add("is-in")),{threshold:.2});a.querySelectorAll(".sb-rv").forEach(h=>t.observe(h));const n=y.context(()=>{a.querySelectorAll("[data-sb-headline]").forEach(b=>{const v=b.querySelectorAll(".sb-word");v.length&&y.fromTo(v,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:b,start:"top 88%",once:!0}})});const h=a.querySelectorAll(".sb-wm-word"),p=a.querySelector(".sb-wm"),g=a.querySelector(".sb-clip-scale"),x=a.querySelector(".sb-hero"),f=a.querySelector(".sb-hero-cap");if(h.length){y.set(h,{yPercent:120,opacity:0});let b=!1;const v=()=>{b||(b=!0,y.to(h,{yPercent:0,opacity:1,duration:1.3,ease:"expo.out",stagger:.1}))};a.querySelector(".sb-loader")?window.addEventListener("sb:revealed",v,{once:!0}):y.delayedCall(.15,v),window.setTimeout(v,3600)}if(x&&g&&p){const b=y.timeline({scrollTrigger:{trigger:x,start:"top top",end:"+=140%",pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});o=b.scrollTrigger??null,b.fromTo(g,{transformOrigin:`${M.x}px ${M.y}px`,scale:1},{scale:3.4,ease:"none",duration:1},0),b.to(p,{opacity:0,y:-60,ease:"none",duration:.5},.1),f&&b.to(f,{autoAlpha:1,duration:.2,ease:"none"},.72)}const w=a.querySelector(".sb-seasons"),N=a.querySelector(".sb-season-scale");w&&N&&y.fromTo(N,{transformOrigin:`${M.x}px ${M.y}px`,scale:.8},{scale:1.9,ease:"none",scrollTrigger:{trigger:w,start:"top 85%",end:"bottom 15%",scrub:.7}});const S=b=>{var i,E;const v=(E=(i=b.target).closest)==null?void 0:E.call(i,".sb-rv");v==null||v.classList.add("is-in")};a.addEventListener("focusin",S),d.push(()=>a.removeEventListener("focusin",S))},a),m=Array.from(a.querySelectorAll(".sb-frame-in")),u=()=>{if(o!=null&&o.isActive)return;const h=window.innerHeight,p=[];for(const g of m){const x=g.parentElement;if(!x)continue;const f=x.getBoundingClientRect();if(f.bottom<-40||f.top>h+40)continue;const w=Math.max(-1,Math.min(1,1-(f.top+f.height/2)/(h/2)/2)),N=Number(g.dataset.drift||9);p.push([g,-w*N])}for(const[g,x]of p)g.style.transform=`translate3d(0, ${x}%, 0)`};r.on("scroll",V.update);const k=h=>{u(),r.raf(h*1e3)};return y.ticker.add(k),y.ticker.lagSmoothing(0),u(),()=>{y.ticker.remove(k),t.disconnect(),n.revert(),r.destroy(),d.forEach(h=>h())}},[s])}function T({text:s,size:a,floor:r,as:d="h2",className:o="",measure:t}){const n=c.useMemo(()=>s.split(" "),[s]);return e.jsx(d,{className:`sb-headline ${o}`,"data-sb-headline":"","aria-label":s,style:{fontSize:l(a,r),maxWidth:t?`calc(var(--u) * ${t})`:void 0},children:n.map((m,u)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"sb-line",children:e.jsx("span",{className:"sb-word",children:m})}),u<n.length-1?" ":""]},u))})}function L({photo:s,className:a="",priority:r=!1,drift:d=9,sizes:o}){return e.jsx("figure",{className:`sb-frame sb-rv ${a}`,style:{aspectRatio:s.ratio},children:e.jsx("div",{className:"sb-frame-in","data-drift":d,style:{"--dz":`${Math.max(9,d*1.35)}%`},children:e.jsx("img",{src:s.src,srcSet:_(s.src),sizes:o??"(max-width: 899px) 100vw, 50vw",alt:s.alt,loading:r?"eager":"lazy",decoding:"async"})})})}function H({photo:s,clipId:a,groupClass:r,full:d}){return e.jsxs("svg",{className:"sb-form-svg",viewBox:R.viewBox,preserveAspectRatio:"xMidYMid slice",role:"img","aria-label":s.alt,children:[e.jsx("defs",{children:e.jsx("clipPath",{id:a,children:e.jsx("path",{className:r,d:R.path})})}),d&&e.jsx("image",{href:d.src,width:"2160",height:"1440",preserveAspectRatio:"xMidYMid slice",opacity:"0.34"}),e.jsx("image",{href:s.src,width:"2160",height:"1440",preserveAspectRatio:"xMidYMid slice",clipPath:`url(#${a})`})]})}function re(){const[s,a]=c.useState(0),[r,d]=c.useState(!1),o=F.length;return c.useEffect(()=>{if(P()||r)return;const t=window.setInterval(()=>a(n=>(n+1)%o),6200);return()=>window.clearInterval(t)},[r,o]),e.jsxs("div",{className:"sb-stack",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocusCapture:()=>d(!0),onBlurCapture:()=>d(!1),children:[e.jsx("div",{className:"sb-stack-cards",children:F.map((t,n)=>{const m=(n-s+o)%o;return e.jsxs("blockquote",{className:"sb-card","data-pos":m,"aria-hidden":m!==0,children:[e.jsxs("p",{children:["“",t.quote,"”"]}),e.jsxs("cite",{children:[t.author,", ",t.when]})]},t.author)})}),e.jsx("div",{className:"sb-stack-dots",role:"tablist","aria-label":"Guest quotes",children:F.map((t,n)=>e.jsx("button",{type:"button",role:"tab","aria-selected":n===s,"aria-label":`Quote by ${t.author}`,className:`sb-dot ${n===s?"is-on":""}`,onClick:()=>a(n)},t.author))})]})}const oe=(s,a)=>{const r=new Date(`${s}T12:00:00`);return r.setDate(r.getDate()+a),r.toISOString().slice(0,10)};function ne(){const[s,a]=c.useState(""),[r,d]=c.useState(""),[o,t]=c.useState(""),[n,m]=c.useState(""),[u,k]=c.useState(2),[h,p]=c.useState(2),[g,x]=c.useState(""),[f,w]=c.useState(null),[N,S]=c.useState(null),b=c.useMemo(()=>new Date().toISOString().slice(0,10),[]);function v(i){if(i.preventDefault(),!s.trim()||!r.trim()||!n){w("Name, email and an arrival date are needed to send a request.");return}w(null);const E={id:`sb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,resourceId:"svartaborg",date:n,endDate:oe(n,u),people:h,customer:{name:s.trim(),phone:o.trim(),email:r.trim()},note:g.trim()||void 0,quote:{lines:[],total:0,deposit:0,units:u,estimate:!0},status:"REQUESTED",createdAt:new Date().toISOString()};ee.add(E),S(E)}return N?e.jsxs("div",{className:"sb-book-done",role:"status",children:[e.jsx("p",{className:"sb-book-done-title",children:"Your request is on its way."}),e.jsx("p",{className:"sb-body",children:"In the finished site this lands with Rósa and Snæbjörn directly, and the nightly price for your dates comes with the reply."}),e.jsxs("p",{className:"sb-body",children:[e.jsx(W,{className:"sb-a",to:"/preview/svartaborg/stjornbord",children:"View the owner’s dashboard"})," ","to see where the request arrives, or"," ",e.jsx("button",{type:"button",className:"sb-ghost",onClick:()=>S(null),children:"make another request"})]})]}):e.jsxs("form",{className:"sb-book-form",onSubmit:v,noValidate:!0,children:[e.jsxs("div",{className:"sb-fields",children:[e.jsxs("label",{className:"sb-field",children:[e.jsx("span",{className:"sb-field-label",children:"Arrival"}),e.jsx("input",{type:"date",name:"date",min:b,value:n,required:!0,onChange:i=>m(i.target.value)})]}),e.jsxs("label",{className:"sb-field",children:[e.jsx("span",{className:"sb-field-label",children:"Nights"}),e.jsx("select",{name:"nights",value:u,onChange:i=>k(Number(i.target.value)),children:[1,2,3,4,5,6,7].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:"sb-field",children:[e.jsx("span",{className:"sb-field-label",children:"Guests"}),e.jsx("select",{name:"people",value:h,onChange:i=>p(Number(i.target.value)),children:[1,2,3,4].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:"sb-field sb-field-wide",children:[e.jsx("span",{className:"sb-field-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",value:s,required:!0,onChange:i=>a(i.target.value)})]}),e.jsxs("label",{className:"sb-field sb-field-wide",children:[e.jsx("span",{className:"sb-field-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",inputMode:"email",value:r,required:!0,onChange:i=>d(i.target.value)})]}),e.jsxs("label",{className:"sb-field sb-field-wide",children:[e.jsxs("span",{className:"sb-field-label",children:["Phone ",e.jsx("span",{className:"sb-optional",children:"(optional)"})]}),e.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",inputMode:"tel",value:o,onChange:i=>t(i.target.value)})]}),e.jsxs("label",{className:"sb-field sb-field-wide",children:[e.jsxs("span",{className:"sb-field-label",children:["Anything the hosts should know ",e.jsx("span",{className:"sb-optional",children:"(optional)"})]}),e.jsx("textarea",{rows:3,name:"note",value:g,onChange:i=>x(i.target.value)})]})]}),f&&e.jsx("p",{className:"sb-field-error",role:"alert",children:f}),e.jsx("button",{type:"submit",className:"sb-cta",children:"Enquire about your stay"}),e.jsx("p",{className:"sb-book-note",children:"No card, no charge. The request goes straight to the hosts, and the nightly price for your dates comes with the reply."})]})}const le=()=>{if(typeof window>"u"||P())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("sb_seen")}catch{return!0}};function ce({onDone:s}){const[a,r]=c.useState(0),[d,o]=c.useState(!1);return c.useEffect(()=>{try{sessionStorage.setItem("sb_seen","1")}catch{}const t=performance.now();let n=0,m=0,u=!1;const k=new Image;k.decoding="async";const h=()=>{u=!0};k.addEventListener("load",h,{once:!0}),k.addEventListener("error",h,{once:!0}),k.src=j.houseHillside.src,k.complete&&(u=!0);let p=!1;document.fonts.ready.then(()=>{p=!0});const g=1100,x=2400,f=()=>{const w=performance.now()-t;let N=(u?55:Math.min(50,w/24))+(p?45:0);w>=x&&(N=100),m+=(N-m)*.12;const S=Math.min(100,Math.round(m));if(r(S),S>=100&&w>=g){o(!0),window.setTimeout(s,900);return}n=requestAnimationFrame(f)};return n=requestAnimationFrame(f),()=>cancelAnimationFrame(n)},[s]),e.jsxs("div",{className:`sb-loader ${d?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsxs("svg",{className:"sb-loader-form",viewBox:R.viewBox,preserveAspectRatio:"xMidYMid meet",children:[e.jsx("path",{d:R.path,fill:"none",stroke:B,strokeWidth:"3"}),e.jsx("clipPath",{id:"sb-loader-clip",children:e.jsx("rect",{x:"0",y:1440-11*a,width:"2160",height:11*a})}),e.jsx("path",{d:R.path,fill:U,clipPath:"url(#sb-loader-clip)"})]}),e.jsxs("p",{className:"sb-loader-pct",children:[a,"%"]})]})}function Le(){const[s,a]=c.useState(!1),[r,d]=c.useState(le);c.useEffect(()=>{J(A),document.title="Svartaborg",a(!0)},[]),c.useEffect(()=>Y(),[]),ie(s);const o=t=>n=>{var m;n.preventDefault(),(m=document.getElementById(t))==null||m.scrollIntoView({behavior:P()?"auto":"smooth"}),history.replaceState(null,"",`#${t}`)};return e.jsxs("div",{className:"sb-root",children:[e.jsx("style",{children:de}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ae)}}),e.jsx(K,{company:I}),r&&e.jsx(ce,{onDone:()=>{d(!1),window.dispatchEvent(new Event("sb:revealed"))}}),e.jsxs("header",{className:"sb-nav",children:[e.jsx("a",{className:"sb-nav-mark",href:"#top",onClick:o("top"),children:"SVARTABORG"}),e.jsxs("nav",{className:"sb-nav-links","aria-label":"Page",children:[e.jsx("a",{href:"#husin",onClick:o("husin"),children:"The houses"}),e.jsx("a",{href:"#potturinn",onClick:o("potturinn"),children:"The hot tub"}),e.jsx("a",{href:"#gestir",onClick:o("gestir"),children:"Guests"})]}),e.jsx("a",{className:"sb-nav-cta",href:"#boka",onClick:o("boka"),children:"Enquire about your stay"})]}),e.jsx("section",{className:"sb-hero",id:"top",children:e.jsxs("div",{className:"sb-hero-stage",children:[e.jsx(H,{photo:j.houseHillside,clipId:"sb-hero-clip",groupClass:"sb-clip-scale"}),e.jsxs("div",{className:"sb-wm","aria-hidden":"false",children:[e.jsxs("h1",{className:"sb-wm-h","aria-label":"Svartaborg",children:[e.jsx("span",{className:"sb-wm-line","aria-hidden":"true",children:e.jsx("span",{className:"sb-wm-word",children:"SVARTA"})}),e.jsx("span",{className:"sb-wm-line","aria-hidden":"true",children:e.jsx("span",{className:"sb-wm-word",children:"BORG"})})]}),e.jsx("p",{className:"sb-wm-sub",children:"Two black houses on the hillside above the family farm, built by the designers who own them. The Diamond Circle starts at the door."})]}),e.jsx("p",{className:"sb-hero-cap","aria-hidden":"true",children:"The view the house was built to hold."})]})}),e.jsxs("section",{className:"sb-manifesto",id:"husin",children:[e.jsxs("div",{className:"sb-manifesto-copy",children:[e.jsx(T,{text:"Designed here, built here.",size:72,floor:34,measure:620}),e.jsx("p",{className:"sb-body sb-rv",children:"Rósa and Snæbjörn are both designers. In 2018 they took over Rangá, the farm her grandparents built; in 2020 they raised these houses on its hillside with their own hands. Everything down to the joinery was a decision, and it shows in the reviews."}),e.jsxs("p",{className:"sb-stat sb-rv",children:["Rated ",D.rating," of 5 across ",D.reviewCount," reviews on Airbnb ·"," ",D.bookingCom.score," on Booking.com"]})]}),e.jsx(L,{photo:j.livingWood,drift:10,className:"sb-manifesto-fig",priority:!0})]}),e.jsxs("section",{className:"sb-view",children:[e.jsx("figure",{className:"sb-view-stage sb-rv",children:e.jsx("div",{className:"sb-frame-in","data-drift":12,style:{"--dz":`${(12*1.35).toFixed(2)}%`},children:e.jsx("img",{src:j.windowReflect.src,srcSet:_(j.windowReflect.src),sizes:"100vw",alt:j.windowReflect.alt,loading:"lazy",decoding:"async"})})}),e.jsxs("div",{className:"sb-view-copy sb-rv",children:[e.jsx(T,{text:"The picture window earns its name.",size:54,floor:30,measure:560}),e.jsx("p",{className:"sb-body",children:"Every room faces the valley. The glass is sized so the moor reads like a painting hung on the timber wall, and in winter the horses cross the snow below it."})]})]}),e.jsxs("section",{className:"sb-geo",id:"potturinn",children:[e.jsxs("div",{className:"sb-geo-head sb-rv",children:[e.jsx(T,{text:"My favorite spot we stayed on the ring road.",size:54,floor:30,measure:640}),e.jsx("p",{className:"sb-body",children:"Valerie’s words about the geothermal hot tub, sunk into the deck against the black gable. Hot water from the ground, cold air off the moor, and nobody else for miles."})]}),e.jsxs("div",{className:"sb-geo-row",children:[e.jsx(L,{photo:j.gableTubA,drift:11,sizes:"(max-width: 899px) 100vw, 60vw",className:"sb-geo-main"}),e.jsx(L,{photo:j.windowMoss,drift:8,sizes:"(max-width: 899px) 100vw, 36vw",className:"sb-geo-side"})]})]}),e.jsxs("section",{className:"sb-circle",children:[e.jsxs("div",{className:"sb-circle-copy sb-rv",children:[e.jsx(T,{text:"The Diamond Circle at the door.",size:54,floor:30,measure:560}),e.jsx("ul",{className:"sb-circle-list",children:se.map(t=>e.jsxs("li",{children:[e.jsx("span",{className:"sb-circle-name",children:t.name}),e.jsx("span",{className:"sb-circle-note",children:t.note}),e.jsx("span",{className:"sb-circle-dist",children:t.dist})]},t.name))})]}),e.jsx(L,{photo:j.streamAutumn,drift:9,className:"sb-circle-fig"})]}),e.jsx("section",{className:"sb-seasons",children:e.jsxs("div",{className:"sb-seasons-stage",children:[e.jsx(H,{photo:j.aerialSnowA,full:j.aerialGreen,clipId:"sb-season-clip",groupClass:"sb-season-scale"}),e.jsx("p",{className:"sb-seasons-cap sb-rv",children:"The same hillside, both seasons at once: winter lives inside the form, summer around it."})]})}),e.jsxs("section",{className:"sb-guests",id:"gestir",children:[e.jsx("div",{className:"sb-guests-head sb-rv",children:e.jsx(T,{text:"What guests keep saying.",size:54,floor:30,measure:560})}),e.jsx(re,{})]}),e.jsxs("section",{className:"sb-book",id:"boka",children:[e.jsxs("div",{className:"sb-book-copy sb-rv",children:[e.jsx(T,{text:"Ask for your nights on the hill.",size:62,floor:32,measure:600}),e.jsx("p",{className:"sb-body",children:"Send your dates and the request goes straight to Rósa and Snæbjörn on the farm below."}),e.jsxs("dl",{className:"sb-facts",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Guests"}),e.jsxs("dd",{children:["Up to ",q.guests," per house"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Hot tub"}),e.jsx("dd",{children:q.hotTub})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Built"}),e.jsx("dd",{children:q.built})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"The farm"}),e.jsx("dd",{children:q.farm})]})]}),e.jsxs("div",{className:"sb-owner-note sb-rv",children:[e.jsx("p",{className:"sb-owner-note-label",children:"The owner’s dashboard"}),e.jsxs("p",{className:"sb-owner-note-body",children:["Requests land in a private dashboard the hosts run."," ",e.jsx(W,{className:"sb-a",to:"/preview/svartaborg/stjornbord",children:"See how direct bookings would work"})]})]})]}),e.jsx(ne,{})]}),e.jsx("footer",{className:"sb-foot",children:e.jsxs("div",{className:"sb-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sb-foot-mark",children:"SVARTABORG"}),e.jsx("p",{className:"sb-foot-line",children:"Rangá, Þingeyjarsveit · North Iceland"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"sb-foot-line",children:"Hosts: Rósa and Snæbjörn, designers"}),e.jsx("p",{className:"sb-foot-line",children:"Goðafoss 10 min · Húsavík 20 min · Akureyri 30 min"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"sb-foot-line",children:"Photography: the owners’ own photos from svartaborg.com and their listing, retrieved August 2026."}),e.jsx("p",{className:"sb-foot-line",children:"Prototype by SNDR. Booking requests here are a demo and stay in this browser."})]})]})}),e.jsx(Z,{company:I})]})}const de=`
@font-face { font-family: 'Familjen Grotesk'; src: url('${G}svartaborg/fonts/FamiljenGrotesk-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Familjen Grotesk'; src: url('${G}svartaborg/fonts/FamiljenGrotesk-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }

.sb-root {
  --u: clamp(0.58px, 0.0695vw, 1px);
  --sb-black: ${A};
  --sb-bone: ${U};
  --sb-mute: ${B};
  --sb-hair: ${O};
  background: var(--sb-black); color: var(--sb-bone);
  font-family: ${te}; font-weight: 400;
  overflow-x: clip;
  color-scheme: dark;
}
.sb-root section[id] { scroll-margin-top: clamp(88px, calc(var(--u) * 116), 136px); }
.sb-root ::selection { background: ${C}; color: ${A}; }
.sb-root :focus-visible { outline: 2px solid ${z}; outline-offset: 2px; }
.sb-root img { max-width: 100%; }

/* reveals slide laterally — the long low building */
.sb-rv { opacity: 0; transform: translateX(-14px);
  transition: opacity .9s cubic-bezier(.23,1,.32,1), transform .9s cubic-bezier(.23,1,.32,1); }
.sb-rv.is-in { opacity: 1; transform: none; }

/* nav */
.sb-nav {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; align-items: center; gap: calc(var(--u) * 36);
  padding: calc(var(--u) * 18) calc(var(--u) * 40);
  color: var(--sb-bone);
}
.sb-nav a { color: inherit; text-decoration: none; }
.sb-nav-mark { font-weight: 500; letter-spacing: .18em; font-size: ${l(14,13)}; }
.sb-nav-links { display: flex; gap: calc(var(--u) * 26); margin-left: auto; }
.sb-nav-links a { font-size: ${l(14,13)}; opacity: .8; }
.sb-nav-links a:hover { opacity: 1; }
.sb-nav-cta {
  font-size: ${l(14,13)}; font-weight: 500;
  padding: calc(var(--u) * 10) calc(var(--u) * 20);
  border: 1px solid ${O}; border-radius: 0;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}

/* hero */
.sb-hero { position: relative; }
.sb-hero-stage { position: relative; height: 100svh; overflow: hidden; }
.sb-form-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.sb-hero .sb-form-svg { background: var(--sb-black); }
.sb-wm {
  position: absolute; inset: 0; z-index: 2;
  display: flex; flex-direction: column; align-items: flex-start;
  justify-content: flex-end; pointer-events: none;
  padding: 0 calc(var(--u) * 44) calc(calc(var(--u) * 64) + env(safe-area-inset-bottom, 0px));
}
.sb-wm-h { margin: 0; font-weight: 500; letter-spacing: -.03em;
  font-size: clamp(46px, 10.5vw, 164px); line-height: .94; color: var(--sb-bone); }
.sb-wm-line { display: block; overflow: hidden;
  padding: .16em .04em .1em; margin: -.16em -.04em -.1em; }
.sb-wm-word { display: inline-block; }
.sb-wm-sub { margin: calc(var(--u) * 20) 0 0; max-width: 44ch;
  font-size: ${l(17,15)}; line-height: 1.55; color: var(--sb-mute); }
.sb-hero-cap { position: absolute; right: calc(var(--u) * 44); bottom: calc(var(--u) * 40);
  z-index: 2; margin: 0; font-size: ${l(14,13)}; color: var(--sb-mute);
  opacity: 0; visibility: hidden; }

/* headline word masks */
.sb-headline { margin: 0; font-weight: 500; letter-spacing: -.015em; line-height: 1.08; text-wrap: balance; }
.sb-line { display: inline-block; overflow: hidden; vertical-align: bottom;
  padding: .2em .04em .1em; margin: -.2em -.04em -.1em; }
.sb-word { display: inline-block; }
.sb-body { font-size: ${l(17,15)}; line-height: 1.62; color: var(--sb-mute);
  max-width: 58ch; margin: calc(var(--u) * 22) 0 0; }
.sb-stat { margin: calc(var(--u) * 18) 0 0; font-size: ${l(14,13)};
  letter-spacing: .04em; color: var(--sb-mute); }
.sb-a { color: ${z}; }
.sb-a:hover { color: var(--sb-bone); }

/* frames + drift */
.sb-frame { position: relative; overflow: hidden; margin: 0;
  background: color-mix(in srgb, var(--sb-bone) 6%, transparent); }
.sb-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; }
@media (min-width: 992px) { .sb-frame-in { will-change: transform; } }
.sb-frame-in img { width: 100%; height: 100%; max-width: none; object-fit: cover; display: block; }

/* manifesto */
.sb-manifesto {
  display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 72);
  align-items: center; max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 150) calc(var(--u) * 44) calc(var(--u) * 110);
}
/* width:100% is load-bearing: every child of the frame is absolute, so
   justify-self:end shrinks the figure's fit-content width to 0 and
   aspect-ratio takes the height with it ([[frame-zero-width-flex-collapse]]). */
.sb-manifesto-fig { width: 100%; max-width: calc(var(--u) * 560); justify-self: end; }

/* view */
.sb-view { padding: calc(var(--u) * 40) 0 calc(var(--u) * 110); }
.sb-view-stage { position: relative; overflow: hidden; margin: 0;
  height: min(84svh, calc(var(--u) * 720)); }
.sb-view-copy { max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 56) calc(var(--u) * 44) 0; }

/* geothermal */
.sb-geo { max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 110) calc(var(--u) * 44) calc(var(--u) * 60); }
.sb-geo-row { display: grid; grid-template-columns: 3fr 2fr; gap: calc(var(--u) * 24);
  margin-top: calc(var(--u) * 48); align-items: start; }
.sb-geo-main { aspect-ratio: 3 / 2 !important; }
.sb-geo-side { aspect-ratio: 2 / 3 !important; margin-top: calc(var(--u) * 90); }

/* diamond circle */
.sb-circle {
  display: grid; grid-template-columns: 1.1fr 1fr; gap: calc(var(--u) * 72);
  align-items: center; max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 110) calc(var(--u) * 44);
}
.sb-circle-list { list-style: none; margin: calc(var(--u) * 40) 0 0; padding: 0; }
.sb-circle-list li { display: grid; grid-template-columns: 12ch 1fr auto;
  gap: 16px; align-items: baseline; border-top: 1px solid var(--sb-hair);
  padding: calc(var(--u) * 16) 0; }
.sb-circle-name { font-weight: 500; font-size: ${l(17,15)}; }
.sb-circle-note { font-size: ${l(15,14)}; color: var(--sb-mute); }
.sb-circle-dist { font-size: ${l(14,13)}; color: ${z}; white-space: nowrap; }

/* seasons */
.sb-seasons { padding: calc(var(--u) * 60) 0 calc(var(--u) * 110); }
.sb-seasons-stage { position: relative; height: min(88svh, calc(var(--u) * 760)); overflow: hidden; }
.sb-seasons-cap { position: absolute; left: calc(var(--u) * 44); bottom: calc(var(--u) * 36);
  margin: 0; z-index: 2; font-size: ${l(16,14)}; color: var(--sb-bone);
  text-shadow: 0 1px 18px rgba(16,17,18,.6); max-width: 40ch; }

/* guests */
.sb-guests { max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 110) calc(var(--u) * 44) calc(var(--u) * 40); }
/* the quote stack */
.sb-stack { margin: calc(var(--u) * 56) 0 0; }
.sb-stack-cards { position: relative; height: calc(var(--u) * 300); max-width: calc(var(--u) * 720); }
.sb-card {
  position: absolute; inset: 0 auto auto 0; width: 100%; margin: 0;
  background: #17191B; border: 1px solid var(--sb-hair);
  padding: calc(var(--u) * 40) calc(var(--u) * 44);
  transform-origin: 0% 100%; will-change: transform, opacity;
  transition: transform .8s cubic-bezier(.23,1,.32,1), opacity .8s cubic-bezier(.23,1,.32,1);
}
.sb-card p { margin: 0; font-size: ${l(21,17)}; line-height: 1.5; }
.sb-card cite { display: block; margin-top: calc(var(--u) * 20); font-style: normal;
  font-size: ${l(13,12)}; letter-spacing: .04em; color: var(--sb-mute); }
.sb-card[data-pos="0"] { transform: none; opacity: 1; z-index: 3; }
.sb-card[data-pos="1"] { transform: translate3d(calc(var(--u) * 34), calc(var(--u) * 22), 0) rotate(1.6deg) scale(.955); opacity: .5; z-index: 2; }
.sb-card[data-pos="2"] { transform: translate3d(calc(var(--u) * 66), calc(var(--u) * 44), 0) rotate(3.2deg) scale(.91); opacity: .26; z-index: 1; }
.sb-stack-dots { display: flex; gap: 10px; margin: calc(var(--u) * 34) 0 0; }
.sb-dot { width: 30px; height: 30px; padding: 0; border: 0; background: none; cursor: pointer;
  position: relative; }
.sb-dot::after { content: ''; position: absolute; left: 0; top: 50%; width: 26px; height: 1px;
  background: var(--sb-hair); transition: background .4s ease; }
.sb-dot.is-on::after { background: ${z}; }

/* the enquire CTA: an animated gradient that travels on hover, with a glow
   that lifts off the black. Mechanism adapted from a 21st.dev gradient
   button; the palette and geometry are this build's own. */
.sb-nav-cta {
  position: relative; isolation: isolate; border: 0 !important;
  color: ${A} !important; font-weight: 500;
  background-image: linear-gradient(100deg, ${C} 0%, #7FD3D5 26%, ${C} 50%, #2E7D80 76%, ${C} 100%);
  background-size: 300% 100%; background-position: 0% 50%;
  box-shadow: 0 6px 26px -10px rgba(79,163,165,.75);
  transition: background-position 1s cubic-bezier(.23,1,.32,1),
              box-shadow .45s ease, transform .15s ease;
}
.sb-nav-cta::before {
  content: ''; position: absolute; inset: -1px; z-index: -1; opacity: 0;
  background: inherit; filter: blur(11px);
  transition: opacity .45s ease;
}
.sb-nav-cta:hover {
  background-position: 100% 50%;
  box-shadow: 0 10px 34px -10px rgba(79,163,165,.9);
}
.sb-nav-cta:hover::before { opacity: .75; }
.sb-nav-cta:active { transform: scale(.98); }

/* booking */
.sb-book {
  display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 80);
  max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 90) calc(var(--u) * 44) calc(var(--u) * 150);
}
.sb-facts { margin: calc(var(--u) * 36) 0 0; display: grid; gap: calc(var(--u) * 14); padding: 0; }
.sb-facts div { display: flex; gap: 16px; border-top: 1px solid var(--sb-hair);
  padding-top: calc(var(--u) * 12); }
.sb-facts dt { min-width: 10ch; font-size: ${l(13,12)}; letter-spacing: .06em;
  text-transform: uppercase; color: var(--sb-mute); padding-top: 2px; }
.sb-facts dd { margin: 0; font-size: ${l(15,14)}; }
.sb-owner-note { margin-top: calc(var(--u) * 40); }
.sb-owner-note-label { margin: 0; font-size: ${l(12,12)}; font-weight: 500;
  letter-spacing: .14em; text-transform: uppercase; color: var(--sb-mute); }
.sb-owner-note-body { margin: calc(var(--u) * 10) 0 0; font-size: ${l(15,14)};
  line-height: 1.6; color: var(--sb-mute); }

.sb-book-form { align-self: start; }
.sb-fields { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 16); }
.sb-field { display: grid; gap: 8px; }
.sb-field-wide { grid-column: 1 / -1; }
.sb-field-label { font-size: 12.5px; font-weight: 500; letter-spacing: .05em; }
.sb-optional { font-weight: 400; color: var(--sb-mute); }
.sb-field input, .sb-field select, .sb-field textarea {
  font: inherit; font-size: 15px; color: var(--sb-bone);
  background: #1B1D1F; border: 1px solid var(--sb-hair); border-radius: 0;
  padding: 12px 12px; min-height: 44px; width: 100%;
}
.sb-field textarea { resize: vertical; }
.sb-field input:focus, .sb-field select:focus, .sb-field textarea:focus {
  outline: 2px solid ${z}; outline-offset: 1px;
}
.sb-field-error { color: #E08A70; font-size: 14px; margin: 14px 0 0; }
.sb-cta {
  font: inherit; font-weight: 500; font-size: ${l(15,14)}; cursor: pointer;
  margin-top: calc(var(--u) * 24); width: 100%; min-height: 48px;
  background: ${C}; color: ${A}; border: 0; border-radius: 0;
  padding: 13px 22px; transition: filter .25s ease, transform .15s ease;
}
.sb-cta:hover { filter: brightness(1.08); }
.sb-cta:active { transform: scale(.98); }
.sb-ghost {
  font: inherit; font-size: inherit; cursor: pointer; background: none;
  border: 0; padding: 0; color: ${z}; text-decoration: underline;
  text-underline-offset: 2px; min-height: 44px;
}
.sb-ghost:hover { color: var(--sb-bone); }
.sb-book-note { margin: calc(var(--u) * 16) 0 0; font-size: ${l(13,12.5)};
  color: var(--sb-mute); line-height: 1.6; }
.sb-book-done { border: 1px solid var(--sb-hair); background: #17191B;
  padding: calc(var(--u) * 36); align-self: start; }
.sb-book-done-title { margin: 0; font-weight: 500; font-size: ${l(24,19)}; }

/* footer */
.sb-foot { border-top: 1px solid var(--sb-hair); }
.sb-foot-grid { display: grid; grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 44); max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 52) calc(var(--u) * 44) calc(var(--u) * 68); }
.sb-foot-mark { font-weight: 500; letter-spacing: .2em; font-size: ${l(13,13)};
  margin: 0 0 calc(var(--u) * 12); }
.sb-foot-line { font-size: ${l(13,13)}; line-height: 1.6; color: var(--sb-mute);
  margin: 0 0 calc(var(--u) * 8); }

/* loader */
.sb-loader { position: fixed; inset: 0; z-index: 60; background: ${A};
  display: grid; place-content: center;
  transition: opacity .55s ease .3s; }
.sb-loader-form { width: min(60vw, 520px); height: auto;
  transition: transform .9s cubic-bezier(.76, 0, .24, 1); }
.sb-loader.is-leaving { opacity: 0; pointer-events: none; }
.sb-loader.is-leaving .sb-loader-form { transform: scale(7); }
.sb-loader-pct { position: fixed; left: calc(var(--u) * 44); bottom: calc(var(--u) * 38);
  margin: 0; font-size: 12px; letter-spacing: .16em; color: ${B}; }

/* responsive */
@media (max-width: 991px) {
  .sb-nav { padding: 10px 20px; gap: 16px; }
  .sb-nav-links { display: none; }
  .sb-nav-cta { margin-left: auto; min-height: 44px; display: inline-flex; align-items: center; }
  .sb-manifesto, .sb-book, .sb-circle { grid-template-columns: 1fr; gap: 48px;
    padding-left: 20px; padding-right: 20px; }
  .sb-manifesto-fig { justify-self: stretch; max-width: none; }
  .sb-geo, .sb-guests { padding-left: 20px; padding-right: 20px; }
  .sb-geo-row { grid-template-columns: 1fr; }
  .sb-geo-side { margin-top: 0; }
  .sb-stack-cards { height: calc(var(--u) * 380); }
  .sb-foot-grid { grid-template-columns: 1fr; padding-left: 20px; padding-right: 20px; }
  .sb-fields { grid-template-columns: 1fr 1fr; }
  .sb-view-copy { padding-left: 20px; padding-right: 20px; }
  .sb-seasons-cap { left: 20px; right: 20px; }
  .sb-circle-list li { grid-template-columns: 1fr auto; }
  .sb-circle-note { grid-column: 1 / -1; }
}
@media (max-width: 767px) {
  .sb-fields { grid-template-columns: 1fr; }
  .sb-wm-h { font-size: clamp(40px, 14vw, 72px); }
}

@media (prefers-reduced-motion: reduce) {
  .sb-root * { transition: none !important; animation: none !important; }
  .sb-rv { opacity: 1 !important; transform: none !important; }
  .sb-word, .sb-wm-word { transform: none !important; opacity: 1 !important; }
  .sb-frame-in { inset: 0; transform: none !important; }
  .sb-hero-cap { opacity: 1 !important; visibility: visible !important; }
  /* the stack becomes a plain readable list */
  .sb-stack-cards { height: auto; }
  .sb-card { position: relative; transform: none !important; opacity: 1 !important;
    margin-bottom: 14px; }
  .sb-stack-dots { display: none; }
}
`;export{Le as default};
