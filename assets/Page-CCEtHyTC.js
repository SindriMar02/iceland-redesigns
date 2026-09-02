import{r as c,s as ce,a as de,j as e,L as le}from"./index-CYkigCbj.js";import{g as j}from"./index-CzGW6FVa.js";import{S as he}from"./ScrollTrigger-DNECHiyU.js";import ge from"./lenis-niKyKZQP.js";import{g as ue}from"./companies-DOEqWmuu.js";import{P as pe}from"./PreviewChrome-C1Wtla8x.js";import{P as me}from"./PreviewFooter-DvBOQJv0.js";import{d as fe}from"./demoStore-DX7ttCyL.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-C7_1aP-a.js";import"./createLucideIcon-CfKWMQ9l.js";import"./proxy-CNAlm4EX.js";import"./index-Cr2_b_7w.js";import"./send-YXoEzB_j.js";import"./index-CFQYWTTj.js";import"./external-link-Bk1qr-DW.js";import"./x-DJVRURuk.js";import"./check-DMGq8Tgj.js";import"./mail-CYTNeLo2.js";import"./SndrBadge-BvAgYvFk.js";const T={names:"Agla and Haffi",yearsHosting:12,rating:4.99,reviewCount:70},z="/iceland-redesigns/glasshouse/",I=a=>`${a.replace(/\.jpg$/,"-800.jpg")} 800w, ${a} 1600w`,p={skylight:{src:`${z}skylight.jpg`,alt:"The square skylight set directly over the bed, glass walls opening onto birch scrub"},bedSkylight:{src:`${z}bed-skylight.jpg`,alt:"The bed beneath the skylight, morning light falling across the linen",ratio:"3 / 2"},bedCurtains:{src:`${z}bed-curtains.jpg`},bedWinter:{src:`${z}bed-winter.jpg`,alt:"The same glass wall in winter, snow on the birches beyond the bed"},houseSauna:{src:`${z}house-sauna.jpg`,alt:"The house with the barrel sauna beside it in the scrub",ratio:"3 / 2"},hottubSnow:{src:`${z}hottub-snow.jpg`,alt:"The wooden hot tub steaming in the snow",ratio:"3 / 2"},poolMoss:{src:`${z}pool-moss.jpg`,alt:"The small plunge pool set into the moss",ratio:"3 / 2"},auroraHouse:{src:`${z}aurora-house.jpg`,alt:"The aurora over the house and barrel sauna at night, their photograph"}},ve=[{quote:"We enjoyed the views, the seclusion, the sunsets, the comfortable bed, the wake-up sauna, the goodnight bathe in the hot tub. Everything.",author:"Toby",when:"July 2026"},{quote:"The view out those big windows was stunning, and it was just the calm, relaxing trip we needed.",author:"Richard",when:"July 2026"},{quote:"Surrounded by beautiful nature, great hot tub and sauna. Around 20 minutes to town. Was a great base for the Golden Circle as well.",author:"Goldie",when:"August 2026"}],C={guests:2,sauna:"Barrel sauna in the birches",hotTub:"Wood-fired hot tub, open all year",distance:"About 20 minutes from Reykjavík",base:"Mosfellsbær, at the edge of the heath"},xe={"@context":"https://schema.org","@type":"LodgingBusiness",name:"The Glass House",description:"A one-bedroom glass house on the heath at Mosfellsbær, about twenty minutes from Reykjavík. A skylight sits directly over the bed; a barrel sauna and wood-fired hot tub stand in the birch scrub.",address:{"@type":"PostalAddress",addressLocality:"Mosfellsbær",addressRegion:"Höfuðborgarsvæðið",addressCountry:"IS"},aggregateRating:{"@type":"AggregateRating",ratingValue:4.99,reviewCount:70},amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Private sauna",value:!0},{"@type":"LocationFeatureSpecification",name:"Private hot tub",value:!0},{"@type":"LocationFeatureSpecification",name:"Skylight over the bed",value:!0},{"@type":"LocationFeatureSpecification",name:"Free parking",value:!0}]};j.registerPlugin(he);const ie=ue("glasshouse"),K="#DFE7EE",Y="#1C2228",J="#0B1016",F="#E6ECF2",ne="#C97B4A",W="#96521F",we="'Alpino', system-ui, sans-serif",_="/iceland-redesigns/",P=121,be=(a,t=!1)=>`${_}glasshouse/${t?"skyseq-828":"skyseq"}/${String(a+1).padStart(3,"0")}.jpg`,L=new Array(P).fill(null);let re=!1;function ye(a){if(re)return;re=!0;let t=0;const o=()=>{const d=t++;if(d>=P)return;const s=new Image;s.decoding="async";const r=()=>{L[d]=s,s.decode().then(o).catch(o)};s.addEventListener("load",r,{once:!0}),s.addEventListener("error",o,{once:!0}),s.src=be(d,a)};o(),o(),o()}const X=()=>{var a;return typeof window<"u"&&((a=window.matchMedia)==null?void 0:a.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},l=(a,t)=>`clamp(${t}px, calc(var(--u) * ${a}), ${+(a*1.15).toFixed(1)}px)`;function je(a){c.useEffect(()=>{if(!a||X())return;const t=document.querySelector(".gh-root");if(!t)return;const o=new ge({duration:1.1,smoothWheel:!0}),d=[];let s=null;const r=new IntersectionObserver(n=>n.forEach(m=>m.isIntersecting&&m.target.classList.add("is-in")),{threshold:.2});t.querySelectorAll(".gh-rv").forEach(n=>r.observe(n));const g=t.querySelector(".gh-nav"),b=new IntersectionObserver(n=>g==null?void 0:g.classList.toggle("is-dark",n.some(m=>m.isIntersecting)),{rootMargin:"-2% 0px -94% 0px"});t.querySelectorAll("[data-gh-dark]").forEach(n=>b.observe(n));const k=j.context(()=>{t.querySelectorAll("[data-gh-headline]").forEach(y=>{const w=y.querySelectorAll(".gh-word");w.length&&j.fromTo(w,{yPercent:-116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:y,start:"top 88%",once:!0}})});const n=t.querySelector(".gh-wm-in"),m=t.querySelector(".gh-wm"),f=t.querySelector(".gh-hero");if(n){j.set(n,{autoAlpha:0,scale:1.14,filter:"blur(14px)"});let y=!1;const w=()=>{y||(y=!0,j.to(n,{autoAlpha:1,scale:1,filter:"blur(0px)",duration:1.5,ease:"expo.out"}))};t.querySelector(".gh-loader")?window.addEventListener("gh:revealed",w,{once:!0}):j.delayedCall(.15,w),window.setTimeout(w,3600)}f&&m&&j.to(m,{y:-110,opacity:.06,ease:"none",scrollTrigger:{trigger:f,start:"top top",end:"bottom top",scrub:.6}});const v=t.querySelector(".gh-window"),u=t.querySelector(".gh-sky"),x=t.querySelectorAll(".gh-pane-cap");if(v&&u&&x.length===4){const y=u.getContext("2d");let w=-1,q=1;const M=()=>{const N=u.getBoundingClientRect(),h=Math.min(2,window.devicePixelRatio||1);u.width=Math.max(1,Math.round(N.width*h)),u.height=Math.max(1,Math.round(N.height*h)),w=-1},U=N=>{if(!y)return;let h=L[N];if(!h)for(let O=1;O<P&&(h=L[N-O]||L[N+O]||null,!h);O++);if(!h||!h.complete||!h.naturalWidth)return;const ee=u.width,te=u.height,ae=Math.max(ee/h.naturalWidth,te/h.naturalHeight)*q,se=h.naturalWidth*ae,oe=h.naturalHeight*ae;y.drawImage(h,(ee-se)/2,(te-oe)*.32,se,oe),w=N};ye(window.innerWidth<768),M();const Q=window.setInterval(()=>{L[0]&&(U(0),window.clearInterval(Q))},60);d.push(()=>window.clearInterval(Q)),j.set(x,{autoAlpha:0,y:-22});const H=j.timeline({scrollTrigger:{trigger:v,start:"top top",end:"+=320%",pin:!0,scrub:.9,anticipatePin:1,invalidateOnRefresh:!0,onRefresh:()=>{M(),U(Math.max(0,w))}}});s=H.scrollTrigger??null;const V={t:0};H.to(V,{t:1,ease:"none",duration:1,onUpdate:()=>{q=1+.1*V.t;const N=Math.max(0,Math.min(P-1,Math.round(V.t*(P-1))));U(N)}},0);const Z=x.length,D=1/Z;x.forEach((N,h)=>{H.to(x[h],{autoAlpha:1,y:0,duration:D*.18,ease:"power2.out"},D*(h-.02)),h<Z-1&&H.to(x[h],{autoAlpha:0,y:16,duration:D*.18,ease:"power2.in"},D*(h+.8))})}const A=t.querySelector(".gh-seasons"),R=t.querySelector(".gh-season-top");A&&R&&j.fromTo(R,{clipPath:"inset(0% 0% 0% 0%)"},{clipPath:"inset(0% 0% 100% 0%)",ease:"none",scrollTrigger:{trigger:A,start:"top 80%",end:"bottom 30%",scrub:.7}});const i=y=>{var q,M;const w=(M=(q=y.target).closest)==null?void 0:M.call(q,".gh-rv");w==null||w.classList.add("is-in")};t.addEventListener("focusin",i),d.push(()=>t.removeEventListener("focusin",i))},t),S=Array.from(t.querySelectorAll(".gh-frame-in")),$=()=>{if(s!=null&&s.isActive)return;const n=window.innerHeight,m=[];for(const f of S){const v=f.parentElement;if(!v)continue;const u=v.getBoundingClientRect();if(u.bottom<-40||u.top>n+40)continue;const x=Math.max(-1,Math.min(1,1-(u.top+u.height/2)/(n/2)/2)),A=Number(f.dataset.drift||9);m.push([f,x*A])}for(const[f,v]of m)f.style.transform=`translate3d(0, ${v}%, 0)`};o.on("scroll",he.update);const E=n=>{$(),o.raf(n*1e3)};return j.ticker.add(E),j.ticker.lagSmoothing(0),$(),()=>{j.ticker.remove(E),r.disconnect(),b.disconnect(),k.revert(),o.destroy(),d.forEach(n=>n())}},[a])}function B({text:a,size:t,floor:o,as:d="h2",className:s="",measure:r}){const g=c.useMemo(()=>a.split(" "),[a]);return e.jsx(d,{className:`gh-headline ${s}`,"data-gh-headline":"","aria-label":a,style:{fontSize:l(t,o),maxWidth:r?`calc(var(--u) * ${r})`:void 0},children:g.map((b,k)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"gh-line",children:e.jsx("span",{className:"gh-word",children:b})}),k<g.length-1?" ":""]},k))})}function G({photo:a,className:t="",priority:o=!1,drift:d=9,sizes:s,focus:r}){return e.jsx("figure",{className:`gh-frame gh-rv ${t}`,style:{aspectRatio:a.ratio},children:e.jsx("div",{className:"gh-frame-in","data-drift":d,style:{"--dz":`${Math.max(9,d*1.35)}%`},children:e.jsx("img",{src:a.src,srcSet:I(a.src),sizes:s??"(max-width: 899px) 100vw, 50vw",alt:a.alt,loading:o?"eager":"lazy",decoding:"async",style:r?{objectPosition:r}:void 0})})})}const ke=(a,t)=>{const o=new Date(`${a}T12:00:00`);return o.setDate(o.getDate()+t),o.toISOString().slice(0,10)};function Ne(){const[a,t]=c.useState(""),[o,d]=c.useState(""),[s,r]=c.useState(""),[g,b]=c.useState(""),[k,S]=c.useState(2),[$,E]=c.useState(2),[n,m]=c.useState(""),[f,v]=c.useState(null),[u,x]=c.useState(null),A=c.useMemo(()=>new Date().toISOString().slice(0,10),[]);function R(i){if(i.preventDefault(),!a.trim()||!o.trim()||!g){v("Name, email and an arrival date are needed to send a request.");return}v(null);const y={id:`gh-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,resourceId:"glasshouse",date:g,endDate:ke(g,k),people:$,customer:{name:a.trim(),phone:s.trim(),email:o.trim()},note:n.trim()||void 0,quote:{lines:[],total:0,deposit:0,units:k,estimate:!0},status:"REQUESTED",createdAt:new Date().toISOString()};fe.add(y),x(y)}return u?e.jsxs("div",{className:"gh-book-done",role:"status",children:[e.jsx("p",{className:"gh-book-done-title",children:"Your request is on its way."}),e.jsx("p",{className:"gh-body",children:"In the finished site this lands with Agla and Haffi directly, and the nightly price for your dates comes with the reply."}),e.jsxs("p",{className:"gh-body",children:[e.jsx(le,{className:"gh-a",to:"/preview/glasshouse/stjornbord",children:"View the owner’s dashboard"})," ","to see where the request arrives, or"," ",e.jsx("button",{type:"button",className:"gh-ghost",onClick:()=>x(null),children:"make another request"})]})]}):e.jsxs("form",{className:"gh-book-form",onSubmit:R,noValidate:!0,children:[e.jsxs("div",{className:"gh-fields",children:[e.jsxs("label",{className:"gh-field",children:[e.jsx("span",{className:"gh-field-label",children:"Arrival"}),e.jsx("input",{type:"date",name:"date",min:A,value:g,required:!0,onChange:i=>b(i.target.value)})]}),e.jsxs("label",{className:"gh-field",children:[e.jsx("span",{className:"gh-field-label",children:"Nights"}),e.jsx("select",{name:"nights",value:k,onChange:i=>S(Number(i.target.value)),children:[1,2,3,4,5,6,7].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:"gh-field",children:[e.jsx("span",{className:"gh-field-label",children:"Guests"}),e.jsx("select",{name:"people",value:$,onChange:i=>E(Number(i.target.value)),children:[1,2].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:"gh-field gh-field-wide",children:[e.jsx("span",{className:"gh-field-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",value:a,required:!0,onChange:i=>t(i.target.value)})]}),e.jsxs("label",{className:"gh-field gh-field-wide",children:[e.jsx("span",{className:"gh-field-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",inputMode:"email",value:o,required:!0,onChange:i=>d(i.target.value)})]}),e.jsxs("label",{className:"gh-field gh-field-wide",children:[e.jsxs("span",{className:"gh-field-label",children:["Phone ",e.jsx("span",{className:"gh-optional",children:"(optional)"})]}),e.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",inputMode:"tel",value:s,onChange:i=>r(i.target.value)})]}),e.jsxs("label",{className:"gh-field gh-field-wide",children:[e.jsxs("span",{className:"gh-field-label",children:["Anything the hosts should know ",e.jsx("span",{className:"gh-optional",children:"(optional)"})]}),e.jsx("textarea",{rows:3,name:"note",value:n,onChange:i=>m(i.target.value)})]})]}),f&&e.jsx("p",{className:"gh-field-error",role:"alert",children:f}),e.jsx("button",{type:"submit",className:"gh-cta",children:"Enquire about your stay"}),e.jsx("p",{className:"gh-book-note",children:"No card, no charge. The request goes straight to the hosts, and the nightly price for your dates comes with the reply."})]})}const Se=()=>{if(typeof window>"u"||X())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("gh_seen")}catch{return!0}};function $e({onDone:a}){const[t,o]=c.useState(0),[d,s]=c.useState(!1);return c.useEffect(()=>{try{sessionStorage.setItem("gh_seen","1")}catch{}const r=performance.now();let g=0,b=0,k=!1;const S=new Image;S.decoding="async";const $=()=>{k=!0};S.addEventListener("load",$,{once:!0}),S.addEventListener("error",$,{once:!0}),S.src=p.skylight.src,S.complete&&(k=!0);let E=!1;document.fonts.ready.then(()=>{E=!0});const n=1100,m=2400,f=()=>{const v=performance.now()-r;let u=(k?55:Math.min(50,v/24))+(E?45:0);v>=m&&(u=100),b+=(u-b)*.12;const x=Math.min(100,Math.round(b));if(o(x),x>=100&&v>=n){s(!0),window.setTimeout(a,900);return}g=requestAnimationFrame(f)};return g=requestAnimationFrame(f),()=>cancelAnimationFrame(g)},[a]),e.jsxs("div",{className:`gh-loader ${d?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsxs("div",{className:"gh-loader-sky",style:{"--p":t/100},children:[e.jsx("span",{className:"gh-loader-fill"}),e.jsx("span",{className:"gh-loader-ring"})]}),e.jsxs("p",{className:"gh-loader-pct",children:[t,"%"]})]})}function et(){const[a,t]=c.useState(!1),[o,d]=c.useState(Se);c.useEffect(()=>{ce(K),document.title="The Glass House",t(!0)},[]),c.useEffect(()=>de(),[]),je(a);const s=r=>g=>{var b;g.preventDefault(),(b=document.getElementById(r))==null||b.scrollIntoView({behavior:X()?"auto":"smooth"}),history.replaceState(null,"",`#${r}`)};return e.jsxs("div",{className:"gh-root",children:[e.jsx("style",{children:ze}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(xe)}}),e.jsx(pe,{company:ie}),o&&e.jsx($e,{onDone:()=>{d(!1),window.dispatchEvent(new Event("gh:revealed"))}}),e.jsxs("header",{className:"gh-nav",children:[e.jsx("a",{className:"gh-nav-mark",href:"#top",onClick:s("top"),children:"GLASS HOUSE"}),e.jsxs("nav",{className:"gh-nav-links","aria-label":"Page",children:[e.jsx("a",{href:"#husid",onClick:s("husid"),children:"The house"}),e.jsx("a",{href:"#glugginn",onClick:s("glugginn"),children:"The window"}),e.jsx("a",{href:"#gestir",onClick:s("gestir"),children:"Guests"})]}),e.jsx("a",{className:"gh-nav-cta",href:"#boka",onClick:s("boka"),children:"Enquire about your stay"})]}),e.jsxs("section",{className:"gh-hero",id:"top",children:[e.jsx("div",{className:"gh-hero-media",children:e.jsx("div",{className:"gh-frame-in","data-drift":12,style:{"--dz":`${(12*1.35).toFixed(2)}%`},children:e.jsx("img",{src:p.skylight.src,srcSet:I(p.skylight.src),sizes:"100vw",alt:p.skylight.alt,loading:"eager",decoding:"async"})})}),e.jsx("div",{className:"gh-wm","aria-hidden":"false",children:e.jsxs("h1",{className:"gh-wm-in","aria-label":"The Glass House",children:[e.jsx("span",{"aria-hidden":"true",children:"GLASS"})," ",e.jsx("span",{"aria-hidden":"true",className:"gh-wm-thin",children:"HOUSE"})]})}),e.jsxs("div",{className:"gh-hero-block",children:[e.jsx("p",{className:"gh-hero-sub",children:"A one-bedroom glass house on the heath at Mosfellsbær, about twenty minutes from Reykjavík. The skylight sits directly over the bed."}),e.jsx("a",{className:"gh-hero-link",href:"#boka",onClick:s("boka"),children:"Enquire about your stay"})]})]}),e.jsxs("section",{className:"gh-manifesto",id:"husid",children:[e.jsxs("div",{className:"gh-manifesto-copy",children:[e.jsx(B,{text:"Built for lying down and looking up.",size:78,floor:36,measure:640}),e.jsx("p",{className:"gh-body gh-rv",children:"Most houses put their best window on the horizon. This one puts it overhead. Glass walls hold the birch scrub, the floor is warm, and the roof opens straight onto the sky, so the last thing you see at night is whatever Iceland decides to do with it."})]}),e.jsx(G,{photo:p.bedSkylight,drift:10,className:"gh-manifesto-fig",priority:!0})]}),e.jsx("section",{className:"gh-window",id:"glugginn","data-gh-dark":"",children:e.jsxs("div",{className:"gh-window-inner",children:[e.jsx("canvas",{className:"gh-sky","aria-hidden":"true"}),e.jsxs("div",{className:"gh-pane-caps",children:[e.jsx("p",{className:"gh-pane-cap",children:"Midday. The turf roof, the sauna, the tub, and nothing else for a while."}),e.jsx("p",{className:"gh-pane-cap",children:"Evening. The light goes long, and the glass starts giving it back."}),e.jsx("p",{className:"gh-pane-cap",children:"Then the sky does the thing you came for."}),e.jsx("p",{className:"gh-pane-cap",children:"Rendered, not photographed. Clear nights are never promised."})]}),e.jsxs("figure",{className:"gh-window-static",children:[e.jsx("img",{src:p.auroraHouse.src,srcSet:I(p.auroraHouse.src),sizes:"100vw",alt:p.auroraHouse.alt,loading:"lazy",decoding:"async"}),e.jsx("figcaption",{className:"gh-caption",children:"The aurora over the house and sauna. Clear nights are never promised; this is what waits when they come."})]})]})}),e.jsxs("section",{className:"gh-water",children:[e.jsxs("div",{className:"gh-water-head gh-rv",children:[e.jsx(B,{text:"The wake-up sauna, the goodnight bathe.",size:54,floor:30,measure:620}),e.jsx("p",{className:"gh-body",children:"Toby’s words, not ours. The barrel sauna stands in the birches and the wood-fired hot tub steams beside the deck, both yours alone, all year."})]}),e.jsxs("div",{className:"gh-water-row",children:[e.jsx(G,{photo:p.houseSauna,drift:9,focus:"76% 50%",sizes:"(max-width: 899px) 100vw, 33vw"}),e.jsx(G,{photo:p.hottubSnow,drift:11,sizes:"(max-width: 899px) 100vw, 33vw"}),e.jsx(G,{photo:p.poolMoss,drift:8,sizes:"(max-width: 899px) 100vw, 33vw"})]})]}),e.jsx("section",{className:"gh-seasons",children:e.jsxs("div",{className:"gh-seasons-stage",children:[e.jsx("figure",{className:"gh-season gh-season-under",children:e.jsx("img",{src:p.bedWinter.src,srcSet:I(p.bedWinter.src),sizes:"100vw",alt:p.bedWinter.alt,loading:"lazy",decoding:"async"})}),e.jsx("figure",{className:"gh-season gh-season-top","aria-hidden":"true",children:e.jsx("img",{src:p.bedCurtains.src,srcSet:I(p.bedCurtains.src),sizes:"100vw",alt:"",loading:"lazy",decoding:"async"})}),e.jsx("p",{className:"gh-seasons-cap gh-rv",children:"The same bed, the same glass. Only the season changes."})]})}),e.jsxs("section",{className:"gh-guests",id:"gestir",children:[e.jsxs("div",{className:"gh-guests-head gh-rv",children:[e.jsx(B,{text:"What guests keep saying.",size:54,floor:30,measure:560}),e.jsxs("p",{className:"gh-stat",children:["Rated ",T.rating," of 5 across ",T.reviewCount," reviews · Superhost ·"," ",T.yearsHosting," years hosting"]})]}),e.jsx("ul",{className:"gh-quotes",children:ve.map(r=>e.jsxs("li",{className:"gh-quote gh-rv",children:[e.jsxs("p",{children:["“",r.quote,"”"]}),e.jsxs("cite",{children:[r.author,", ",r.when]})]},r.author))})]}),e.jsxs("section",{className:"gh-book",id:"boka",children:[e.jsxs("div",{className:"gh-book-copy gh-rv",children:[e.jsx(B,{text:"Ask for your night under the glass.",size:62,floor:32,measure:600}),e.jsxs("p",{className:"gh-body",children:["Send your dates and the request goes straight to ",T.names,", who host the house themselves."]}),e.jsxs("dl",{className:"gh-facts",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Guests"}),e.jsxs("dd",{children:[C.guests," · one bedroom"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Sauna"}),e.jsx("dd",{children:C.sauna})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Hot tub"}),e.jsx("dd",{children:C.hotTub})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"From Reykjavík"}),e.jsx("dd",{children:C.distance})]})]}),e.jsxs("div",{className:"gh-owner-note gh-rv",children:[e.jsx("p",{className:"gh-owner-note-label",children:"The owner’s dashboard"}),e.jsxs("p",{className:"gh-owner-note-body",children:["Requests land in a private dashboard the hosts run."," ",e.jsx(le,{className:"gh-a",to:"/preview/glasshouse/stjornbord",children:"See how direct bookings would work"})]})]})]}),e.jsx(Ne,{})]}),e.jsx("footer",{className:"gh-foot",children:e.jsxs("div",{className:"gh-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"gh-foot-mark",children:"GLASS HOUSE"}),e.jsx("p",{className:"gh-foot-line",children:C.base})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"gh-foot-line",children:["Hosts: ",T.names," · Superhost, ",T.yearsHosting," years"]}),e.jsxs("p",{className:"gh-foot-line",children:["Guests: ",C.guests," · 1 bedroom"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"gh-foot-line",children:"Photography: the hosts’ own listing photos, retrieved August 2026."}),e.jsx("p",{className:"gh-foot-line",children:"Prototype by SNDR. Booking requests here are a demo and stay in this browser."})]})]})}),e.jsx(me,{company:ie})]})}const ze=`
@font-face { font-family: 'Alpino'; src: url('${_}glasshouse/fonts/Alpino-Light.woff2') format('woff2'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'Alpino'; src: url('${_}glasshouse/fonts/Alpino-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Alpino'; src: url('${_}glasshouse/fonts/Alpino-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }

.gh-root {
  --u: clamp(0.58px, 0.0695vw, 1px);
  --gh-sky: ${K};
  --gh-ink: ${Y};
  --gh-mute: rgba(28,34,40,.68);
  --gh-hair: rgba(28,34,40,.16);
  background: var(--gh-sky); color: var(--gh-ink);
  font-family: ${we}; font-weight: 400;
  overflow-x: clip;
}
.gh-root section[id] { scroll-margin-top: clamp(88px, calc(var(--u) * 116), 136px); }
.gh-root ::selection { background: ${ne}; color: #fff; }
.gh-root :focus-visible { outline: 2px solid ${W}; outline-offset: 2px; }
.gh-root img { max-width: 100%; }

/* reveals arrive FROM ABOVE — the page's inverted gravity */
.gh-rv { opacity: 0; transform: translateY(-16px);
  transition: opacity .9s cubic-bezier(.23,1,.32,1), transform .9s cubic-bezier(.23,1,.32,1); }
.gh-rv.is-in { opacity: 1; transform: none; }

/* nav */
.gh-nav {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; align-items: center; gap: calc(var(--u) * 36);
  padding: calc(var(--u) * 18) calc(var(--u) * 40);
  color: var(--gh-ink);
  transition: color .45s ease;
}
.gh-nav.is-dark { color: ${F}; }
.gh-nav a { color: inherit; text-decoration: none; }
.gh-nav-mark { font-weight: 500; letter-spacing: .18em; font-size: ${l(14,13)}; }
.gh-nav-links { display: flex; gap: calc(var(--u) * 26); margin-left: auto; }
.gh-nav-links a { font-size: ${l(14,13)}; opacity: .82; }
.gh-nav-links a:hover { opacity: 1; }
/* the enquire CTA: an animated gradient that travels on hover, with a glow
   under it. Mechanism adapted from a 21st.dev gradient button; the palette,
   geometry and the ink-on-ember contrast are this build's own. Ink text is
   deliberate — white would fall under AA at the light end of the ramp. */
/* The outlined original, restored. The gradient fill read as a stock SaaS
   button dropped onto a page whose whole logic is glass and hairlines, and it
   carried an ember glow the palette never asked for. An outline that inverts
   on hover inherits the nav's own colour, so it stays correct over both the
   light chrome and the dark chrome without a second rule fighting it. */
.gh-nav-cta {
  font-size: ${l(14,13)}; font-weight: 500;
  padding: calc(var(--u) * 10) calc(var(--u) * 20);
  border: 1px solid currentColor; border-radius: 12px;
  transition: background .25s ease, color .25s ease;
}
.gh-nav-cta:hover { background: var(--gh-ink); color: var(--gh-sky); }
.gh-nav.is-dark .gh-nav-cta:hover { background: ${F}; color: ${J}; }

/* hero */
.gh-hero { position: relative; min-height: 100svh; display: grid; overflow: hidden; }
.gh-hero-media { position: absolute; inset: 0; overflow: hidden; background: var(--gh-ink); }
.gh-hero-media::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(196deg, rgba(28,34,40,.08) 40%, rgba(28,34,40,.56) 100%);
}
.gh-wm {
  position: absolute; inset: 0; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  margin: 0; pointer-events: none; color: #F4F7FA;
}
.gh-wm-in {
  margin: 0; font-weight: 500; letter-spacing: -.03em;
  font-size: clamp(40px, 9.4vw, 148px); line-height: 1;
  text-align: center; will-change: transform, filter, opacity;
  text-shadow: 0 2px 40px rgba(11,16,22,.35);
}
.gh-wm-thin { font-weight: 400; }
.gh-hero-block {
  position: relative; align-self: end; z-index: 1;
  padding: 0 calc(var(--u) * 44) calc(calc(var(--u) * 60) + env(safe-area-inset-bottom, 0px));
  color: #F4F7FA; max-width: calc(var(--u) * 860);
}
.gh-hero-sub { margin: 0; font-size: ${l(18,15)}; line-height: 1.55; max-width: 46ch; }
.gh-hero-link {
  display: inline-flex; align-items: center; min-height: 44px;
  margin-top: calc(var(--u) * 18); color: inherit; font-weight: 500;
  font-size: ${l(15,14)}; text-decoration: none; position: relative;
  padding-bottom: 4px;
}
.gh-hero-link::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
  background: currentColor; transform-origin: 0 50%; transform: scaleX(.35);
  transition: transform .5s cubic-bezier(.23,1,.32,1);
}
@media (hover: hover) and (pointer: fine) {
  .gh-hero-link:hover::after { transform: scaleX(1); }
}
.gh-hero-link:focus-visible::after { transform: scaleX(1); }

/* headline word masks */
.gh-headline { margin: 0; font-weight: 500; letter-spacing: -.015em; line-height: 1.08; text-wrap: balance; }
.gh-line { display: inline-block; overflow: hidden; vertical-align: bottom;
  padding: .2em .04em .1em; margin: -.2em -.04em -.1em; }
.gh-word { display: inline-block; }
.gh-body { font-size: ${l(17,15)}; line-height: 1.62; color: var(--gh-mute);
  max-width: 58ch; margin: calc(var(--u) * 22) 0 0; }
.gh-a { color: ${W}; }
.gh-a:hover { color: var(--gh-ink); }

/* manifesto */
.gh-manifesto {
  display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 72);
  align-items: center; max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 150) calc(var(--u) * 44) calc(var(--u) * 120);
}
/* width:100% is load-bearing: every child of the frame is absolute, so
   justify-self:end shrinks the figure's fit-content width to 0 and
   aspect-ratio takes the height with it ([[frame-zero-width-flex-collapse]]). */
.gh-manifesto-fig { width: 100%; max-width: calc(var(--u) * 560); justify-self: end; }

/* frames + drift */
.gh-frame { position: relative; overflow: hidden; margin: 0;
  background: color-mix(in srgb, var(--gh-ink) 8%, transparent); }
.gh-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; }
@media (min-width: 992px) { .gh-frame-in { will-change: transform; } }
.gh-frame-in img { width: 100%; height: 100%; max-width: none; object-fit: cover; display: block; }

/* THE WINDOW */
.gh-window { position: relative; min-height: 100svh; background: ${J}; color: ${F}; }
.gh-window-inner { position: relative; height: 100svh; overflow: hidden; }
.gh-aperture {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: min(68vw, calc(var(--u) * 900)); height: min(52svh, calc(var(--u) * 560));
  display: none;                      /* the aperture is gone: see .gh-sky */
}
.gh-sky {
  position: absolute; inset: 0; width: 100%; height: 100%; display: block;
  background: ${J};
}
/* the film is dark at the end and the captions sit on it, so the bottom
   third gets a scrim rather than trusting a text-shadow alone */
.gh-window-inner::after {
  content: ''; position: absolute; inset: auto 0 0 0; height: 46%;
  pointer-events: none; z-index: 1;
  background: linear-gradient(to top, rgba(11,16,22,.72), rgba(11,16,22,0));
}
.gh-pane-caps { position: absolute; left: 0; right: 0; bottom: calc(var(--u) * 64);
  display: grid; place-items: center; z-index: 20; pointer-events: none; }
.gh-pane-cap {
  grid-area: 1 / 1; margin: 0; font-size: ${l(18,15)}; font-weight: 400;
  letter-spacing: .01em; color: ${F}; text-align: center; max-width: 46ch;
  padding: 0 20px; text-shadow: 0 1px 20px rgba(11,16,22,.75);
}
.gh-window-static { display: none; margin: 0; }
.gh-caption { font-size: ${l(14,13)}; color: ${F}; opacity: .82;
  padding: calc(var(--u) * 18) calc(var(--u) * 44); line-height: 1.6; }

/* water */
.gh-water { max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 150) calc(var(--u) * 44) calc(var(--u) * 60); }
.gh-water-row { display: grid; grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 24); margin-top: calc(var(--u) * 48); align-items: start; }
.gh-water-row .gh-frame { aspect-ratio: 3 / 4 !important; }

/* seasons */
.gh-seasons { padding: calc(var(--u) * 120) 0; }
.gh-seasons-stage { position: relative; height: min(88svh, calc(var(--u) * 760)); overflow: hidden; }
.gh-season { position: absolute; inset: 0; margin: 0; }
.gh-season img { width: 100%; height: 100%; object-fit: cover; display: block; }
.gh-season-top { will-change: clip-path; }
.gh-seasons-cap {
  position: absolute; left: calc(var(--u) * 44); bottom: calc(var(--u) * 36);
  margin: 0; z-index: 2; color: #F4F7FA; font-size: ${l(16,14)};
  text-shadow: 0 1px 18px rgba(11,16,22,.5); max-width: 40ch;
}

/* guests */
.gh-guests { max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 130) calc(var(--u) * 44) calc(var(--u) * 60); }
.gh-stat { margin: calc(var(--u) * 16) 0 0; font-size: ${l(14,13)};
  letter-spacing: .04em; color: var(--gh-mute); }
.gh-quotes { list-style: none; display: grid; grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 40); margin: calc(var(--u) * 52) 0 0; padding: 0; }
.gh-quote { border-top: 1px solid var(--gh-hair); padding-top: calc(var(--u) * 22); }
.gh-quote p { margin: 0; font-size: ${l(17,15)}; line-height: 1.58; }
.gh-quote cite { display: block; margin-top: calc(var(--u) * 14); font-style: normal;
  font-size: ${l(13,12)}; color: var(--gh-mute); }

/* booking */
.gh-book {
  display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 80);
  max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 130) calc(var(--u) * 44) calc(var(--u) * 150);
}
.gh-facts { margin: calc(var(--u) * 36) 0 0; display: grid; gap: calc(var(--u) * 14); padding: 0; }
.gh-facts div { display: flex; gap: 16px; border-top: 1px solid var(--gh-hair);
  padding-top: calc(var(--u) * 12); }
.gh-facts dt { min-width: 12ch; font-size: ${l(13,12)}; letter-spacing: .06em;
  text-transform: uppercase; color: var(--gh-mute); padding-top: 2px; }
.gh-facts dd { margin: 0; font-size: ${l(15,14)}; }
.gh-owner-note { margin-top: calc(var(--u) * 40); }
.gh-owner-note-label { margin: 0; font-size: ${l(12,12)}; font-weight: 500;
  letter-spacing: .14em; text-transform: uppercase; color: var(--gh-mute); }
.gh-owner-note-body { margin: calc(var(--u) * 10) 0 0; font-size: ${l(15,14)};
  line-height: 1.6; color: var(--gh-mute); }

.gh-book-form { align-self: start; }
.gh-fields { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 16); }
.gh-field { display: grid; gap: 8px; }
.gh-field-wide { grid-column: 1 / -1; }
.gh-field-label { font-size: 12.5px; font-weight: 500; letter-spacing: .05em; }
.gh-optional { font-weight: 400; color: var(--gh-mute); }
.gh-field input, .gh-field select, .gh-field textarea {
  font: inherit; font-size: 15px; color: var(--gh-ink);
  background: #fff; border: 1px solid var(--gh-hair); border-radius: 2px;
  padding: 12px 12px; min-height: 44px; width: 100%;
}
.gh-field textarea { resize: vertical; }
.gh-field input:focus, .gh-field select:focus, .gh-field textarea:focus {
  outline: 2px solid ${W}; outline-offset: 1px;
}
.gh-field-error { color: #9E3A20; font-size: 14px; margin: 14px 0 0; }
.gh-cta {
  font: inherit; font-weight: 500; font-size: ${l(15,14)}; cursor: pointer;
  margin-top: calc(var(--u) * 24); width: 100%; min-height: 48px;
  background: ${ne}; color: ${Y}; border: 0; border-radius: 2px;
  padding: 13px 22px; transition: filter .25s ease, transform .15s ease;
}
.gh-cta:hover { filter: brightness(1.06); }
.gh-cta:active { transform: scale(.98); }
.gh-ghost {
  font: inherit; font-size: inherit; cursor: pointer; background: none;
  border: 0; padding: 0; color: ${W}; text-decoration: underline;
  text-underline-offset: 2px; min-height: 44px;
}
.gh-ghost:hover { color: var(--gh-ink); }
.gh-book-note { margin: calc(var(--u) * 16) 0 0; font-size: ${l(13,12.5)};
  color: var(--gh-mute); line-height: 1.6; }
.gh-book-done { border: 1px solid var(--gh-hair); background: #fff;
  padding: calc(var(--u) * 36); align-self: start; }
.gh-book-done-title { margin: 0; font-weight: 500; font-size: ${l(24,19)}; }

/* footer */
.gh-foot { border-top: 1px solid var(--gh-hair); }
.gh-foot-grid { display: grid; grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 44); max-width: calc(var(--u) * 1360); margin: 0 auto;
  padding: calc(var(--u) * 52) calc(var(--u) * 44) calc(var(--u) * 68); }
.gh-foot-mark { font-weight: 500; letter-spacing: .2em; font-size: ${l(13,13)};
  margin: 0 0 calc(var(--u) * 12); }
.gh-foot-line { font-size: ${l(13,13)}; line-height: 1.6; color: var(--gh-mute);
  margin: 0 0 calc(var(--u) * 8); }

/* loader — the skylight */
.gh-loader { position: fixed; inset: 0; z-index: 60; background: ${Y};
  display: grid; place-content: center;
  transition: opacity .55s ease .35s; }
.gh-loader-sky { position: relative; width: min(46vw, 340px); aspect-ratio: 4 / 3;
  transition: transform .9s cubic-bezier(.76, 0, .24, 1); }
.gh-loader-fill { position: absolute; inset: 0; background:
  linear-gradient(to top, #B9CCDC, ${K});
  transform-origin: 50% 100%; transform: scaleY(var(--p, 0));
  transition: transform .2s linear; }
.gh-loader-ring { position: absolute; inset: -14px; border-radius: 2px;
  background: conic-gradient(rgba(244,247,250,.9) calc(var(--p, 0) * 360deg), rgba(244,247,250,.14) 0);
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; padding: 2px; }
.gh-loader.is-leaving { opacity: 0; pointer-events: none; }
.gh-loader.is-leaving .gh-loader-sky { transform: scale(9); }
.gh-loader-pct { position: fixed; left: calc(var(--u) * 44); bottom: calc(var(--u) * 38);
  margin: 0; font-size: 12px; letter-spacing: .16em; color: rgba(244,247,250,.72); }

/* responsive */
@media (max-width: 991px) {
  .gh-nav { padding: 10px 20px; gap: 16px; }
  .gh-nav-links { display: none; }
  .gh-nav-cta { margin-left: auto; min-height: 44px; display: inline-flex; align-items: center; }
  .gh-manifesto, .gh-book { grid-template-columns: 1fr; gap: 48px;
    padding-left: 20px; padding-right: 20px; }
  .gh-manifesto-fig { justify-self: stretch; max-width: none; }
  .gh-water, .gh-guests { padding-left: 20px; padding-right: 20px; }
  .gh-water-row, .gh-quotes { grid-template-columns: 1fr; }
  .gh-foot-grid { grid-template-columns: 1fr; padding-left: 20px; padding-right: 20px; }
  .gh-fields { grid-template-columns: 1fr 1fr; }
  .gh-seasons-cap { left: 20px; right: 20px; }
}
@media (max-width: 767px) {
  /* The phone keeps the FILM. It used to drop to a single static aurora
     photograph, which is the most generic thing this page could do on the
     device an owner is most likely to open the link on.
     It does not full-bleed, though: cover-fitting a 16:9 film into a portrait
     viewport shows a narrow vertical slice of it. The film runs as a centred
     cinema band at its own aspect with the caption beneath, which reads as
     deliberate rather than cropped. Same 121 frames, 828w set. */
  .gh-window { min-height: 0; }
  .gh-window-inner {
    height: 100svh; overflow: hidden;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 24px; padding: 0 18px;
  }
  .gh-sky {
    position: relative; inset: auto;
    width: 100%; height: auto; aspect-ratio: 16 / 9; border-radius: 3px;
  }
  .gh-window-inner::after { display: none; }   /* no scrim: caption is off-image */
  .gh-pane-caps { position: static; }
  .gh-pane-cap { font-size: 16px; max-width: 30ch; line-height: 1.45; text-shadow: none; }
  .gh-window-static { display: none; }
  .gh-fields { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .gh-root * { transition: none !important; animation: none !important; }
  .gh-rv { opacity: 1 !important; transform: none !important; }
  .gh-word { transform: none !important; opacity: 1 !important; }
  .gh-wm-in { opacity: 1 !important; transform: none !important; filter: none !important; visibility: visible !important; }
  .gh-frame-in { inset: 0; transform: none !important; }
  /* the one place the film does not run: no canvas is ever painted here,
     so the static figure must take over completely */
  .gh-sky, .gh-pane-caps { display: none; }
  .gh-window-inner { height: auto; overflow: visible; }
  .gh-window-inner::after { display: none; }
  .gh-window-static { display: block; }
  .gh-window-static img { width: 100%; height: auto; display: block; }
  .gh-season-top { clip-path: inset(0 0 100% 0) !important; }
}
`;export{et as default};
