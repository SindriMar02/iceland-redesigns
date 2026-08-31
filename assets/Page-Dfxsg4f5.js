import{r as f,s as se,j as e,L as le}from"./index-BEO59UOR.js";import{g as b}from"./index-CzGW6FVa.js";import{S as D}from"./ScrollTrigger-DNECHiyU.js";import ce from"./lenis-niKyKZQP.js";import{g as he}from"./companies-DOEqWmuu.js";import{P as me}from"./PreviewChrome-jPXod_1e.js";import{P as de}from"./PreviewFooter-BmkYLO91.js";import{d as ue}from"./demoStore-C-nCL8UN.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-ijGMOpHY.js";import"./createLucideIcon-jpyNcO2U.js";import"./proxy-av3wSjjV.js";import"./send-b_o7bHPK.js";import"./index-mo6TOnVf.js";import"./external-link-DrRKfGTf.js";import"./x-C95izqC4.js";import"./mail-BL1XgNu6.js";import"./SndrBadge-BiR7BlmE.js";const U={yearsHosting:10,rating:4.94,reviewCount:412,licenceNr:"REK-2026-035830"},T="/iceland-redesigns/mirrorhouse/",_=a=>`${a.replace(/\.jpg$/,"-800.jpg")} 800w, ${a} 1440w`,N={arrivalWide:{src:`${T}unrev-07.jpg`,alt:"The mirror cabin on a green slope beneath a basalt cliff, a gravel path leading up to it",ratio:"3 / 2"},heroSymmetrical:{src:`${T}hero-symmetrical.jpg`,alt:"The mirror cabin straight on, its two glass panels reflecting a pale sky",ratio:"4 / 5"},autumnPortrait:{src:`${T}unrev-06.jpg`,alt:"The cabin in autumn, mirror walls holding a white sky against an ochre hillside",ratio:"3 / 4"},mirrorEdge:{src:`${T}unrev-09.jpg`,alt:"The mirrored corner of the cabin, a snow-capped mountain visible only in the reflection",ratio:"4 / 5"},door:{src:`${T}unrev-08.jpg`,alt:"The timber-clad entrance, a key lockbox on the wall, the hills reflected in the door glass",ratio:"4 / 5"},bedGlassRoof:{src:`${T}unrev-05.jpg`,alt:"The double bed under a glass roof and glass walls, an orange sunset over the water beyond",ratio:"3 / 2"},interiorTable:{src:`${T}unrev-04.jpg`,alt:"The small table by the glass wall, sunset over the estuary beyond",ratio:"3 / 2"},hotTubWide:{src:`${T}hottub-sunset-wide.jpg`,alt:"The private hot tub at sunset, the mirror wall carrying the same orange sky",ratio:"3 / 2"},auroraWide:{src:`${T}unrev-01.jpg`,alt:"Green and violet northern lights over the snowbound cabin, the aurora repeated in its mirror walls",ratio:"3 / 2"}},S={day:N.arrivalWide,night:N.auroraWide,frameCount:121,frameSrc:(a,t=!1)=>`${T}${t?"frames-828":"frames"}/f${String(a+1).padStart(3,"0")}.jpg`},pe=[{quote:"It feels like you’re floating above nature.",author:"Monica",when:"April 2026"},{quote:"We were lucky enough to see Aurora Borealis from the hot tub and whilst lying in bed!",author:"Charlotte",when:"March 2026"},{quote:"Rarely do pictures of places look like how they do in person, but the Mirror House somehow looked even better in person!",author:"Dylan",when:"July 2026"}],ge=[{theme:"The view",mentions:180},{theme:"The hot tub",mentions:116},{theme:"The location",mentions:96},{theme:"The hospitality",mentions:79}],fe=[{name:"Borgarnes",note:"The nearest town. The Settlement Centre, Kaffi Kyrrð, a supermarket and a petrol station.",dist:"10 min"},{name:"Krauma",note:"Geothermal baths fed by Deildartunguhver, the most powerful hot spring in Europe.",dist:"35 min"},{name:"Hraunfossar",note:"A spectacular series of waterfalls out of the lava field.",dist:"40 min"},{name:"Glanni",note:"A waterfall beside the Paradísarlaut walking trail.",dist:"30 min"},{name:"Snorrastofa",note:"The medieval centre at Reykholt, named for the historian Snorri Sturluson.",dist:"30 min"}],G={guests:2,sleeps:"1 double bed",checkIn:"After 3 PM, self check-in with a lockbox",checkOut:"Before 11 AM"},ve={"@context":"https://schema.org","@type":"LodgingBusiness",name:"Mirror House Iceland",description:"A one of a kind mirror glass house in Borgarbyggð, West Iceland, reflecting the surrounding landscape. Sleeps two, with floor heating and a private hot tub open all year.",address:{"@type":"PostalAddress",addressLocality:"Ytri-Skeljabrekka, Borgarbyggð",addressRegion:"Vesturland",addressCountry:"IS"},aggregateRating:{"@type":"AggregateRating",ratingValue:4.94,reviewCount:412},amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Private hot tub",value:!0},{"@type":"LocationFeatureSpecification",name:"Floor heating",value:!0},{"@type":"LocationFeatureSpecification",name:"Free parking",value:!0},{"@type":"LocationFeatureSpecification",name:"Mountain view",value:!0},{"@type":"LocationFeatureSpecification",name:"Sea view",value:!0}]};b.registerPlugin(D);const ae=he("mirrorhouse"),Z="#E9EFF3",B="#0A121B",xe="#37424E",re="#57BE8C",be="'Switzer', system-ui, sans-serif",E="'Fragment Mono', ui-monospace, monospace",W="/iceland-redesigns/",Y=[{at:0,c:"#E9EFF3",ink:"#37424E",soft:"#DDE6EC"},{at:.56,c:"#E9EFF3",ink:"#37424E",soft:"#DDE6EC"},{at:.6,c:"#C2CFD9",ink:"#202A34",soft:"#B6C5D1"},{at:.645,c:"#16202C",ink:"#E4ECF1",soft:"#1D2937"},{at:.7,c:"#0A121B",ink:"#EDF2F5",soft:"#111C28"},{at:1,c:"#0A121B",ink:"#EDF2F5",soft:"#111C28"}],ie=a=>[1,3,5].map(t=>parseInt(a.slice(t,t+2),16)),J=(a,t,o)=>{const m=ie(a),s=ie(t);return`rgb(${m.map((u,r)=>Math.round(u+(s[r]-u)*o)).join(",")})`},oe=a=>{let t=0;for(;t<Y.length-2&&a>Y[t+1].at;)t++;const o=Y[t],m=Y[t+1],s=Math.max(0,Math.min(1,(a-o.at)/(m.at-o.at||1)));return{c:J(o.c,m.c,s),ink:J(o.ink,m.ink,s),soft:J(o.soft,m.soft,s)}},F=new Array(S.frameCount).fill(null);let ne=!1;const we=typeof window<"u"&&window.innerWidth<768;function ye(a){if(ne)return;ne=!0;let t=0;const o=()=>{if(t>=S.frameCount)return;const m=t++,s=new Image;s.decoding="async",s.onload=()=>{const u=()=>{F[m]=s,m===0&&(a==null||a()),o()};s.decode?s.decode().then(u,u):u()},s.onerror=o,s.src=S.frameSrc(m,we)};for(let m=0;m<14;m++)o()}const V=()=>{var a;return typeof window<"u"&&((a=window.matchMedia)==null?void 0:a.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},je=()=>typeof window<"u"&&!V(),i=(a,t)=>`clamp(${t}px, calc(var(--u) * ${a}), ${+(a*1.15).toFixed(1)}px)`;function ke(a){f.useEffect(()=>{if(!a)return;const t=document.querySelector(".mh-root");if(!t)return;if(V()){t.classList.add("mh-static");const{c,ink:d,soft:l}=oe(0);t.style.setProperty("--mh-c",c),t.style.setProperty("--mh-ink",d),t.style.setProperty("--mh-soft",l);return}t.classList.add("mh-js"),D.config({ignoreMobileResize:!0});const o=new ce({duration:1.1,smoothWheel:!0}),m=Array.from(t.querySelectorAll(".mh-frame-in"));let s=null;const u=()=>{if(s!=null&&s.isActive)return;const c=window.innerHeight,d=[];for(const l of m){const w=l.parentElement;if(!w)continue;const j=w.getBoundingClientRect();if(j.bottom<-240||j.top>c+240)continue;const $=Number(l.dataset.drift||9),n=(j.top+j.height/2-c/2)/(c/2+j.height/2);d.push([l,`translate3d(0,${(-n*$).toFixed(2)}%,0)`])}for(const[l,w]of d)l.style.transform=w};let r="",y="",v="";const R=c=>{const{c:d,ink:l,soft:w}=oe(c);d!==r&&(t.style.setProperty("--mh-c",d),r=d),l!==y&&(t.style.setProperty("--mh-ink",l),y=l),w!==v&&(t.style.setProperty("--mh-soft",w),v=w);const $=d.match(/\d+/g).map(Number).map(M=>{const p=M/255;return p<=.03928?p/12.92:Math.pow((p+.055)/1.055,2.4)}),n=.2126*$[0]+.7152*$[1]+.0722*$[2]<.18;t.classList.contains("mh-night")!==n&&(t.classList.toggle("mh-night",n),se(n?B:Z))};R(0);const z=new IntersectionObserver(c=>c.forEach(d=>d.isIntersecting&&d.target.classList.add("is-in")),{threshold:.22});t.querySelectorAll(".mh-rv").forEach(c=>z.observe(c));const C=[],I=b.context(()=>{D.create({start:0,end:()=>document.documentElement.scrollHeight-window.innerHeight,onUpdate:g=>R(g.progress),invalidateOnRefresh:!0});const c=t.querySelector(".mh-wm-seam"),d=t.querySelector(".mh-wm-mirror"),l=t.querySelector(".mh-wm-house"),w=t.querySelector(".mh-hero");if(c&&d&&l&&w){b.set(c,{scaleY:0}),b.set(d,{clipPath:"inset(0% 0% 0% 100%)"}),b.set(l,{clipPath:"inset(0% 100% 0% 0%)"});const g=()=>{b.timeline().to(c,{scaleY:1,duration:.85,ease:"expo.out"}).to([d,l],{clipPath:"inset(0% 0% 0% 0%)",duration:1.5,ease:"expo.out"},"-=0.42").from([d,l],{x:k=>k===0?26:-26,duration:1.5,ease:"expo.out"},"<")};document.querySelector(".mh-loader")?window.addEventListener("mh:revealed",g,{once:!0}):b.delayedCall(.12,g);const h={trigger:w,start:"top top",end:"bottom top",scrub:.6};b.to(d,{xPercent:-14,opacity:.08,ease:"none",scrollTrigger:h}),b.to(l,{xPercent:14,opacity:.08,ease:"none",scrollTrigger:h}),b.to(c,{scaleY:3.4,opacity:0,ease:"none",scrollTrigger:h})}t.querySelectorAll("[data-mh-headline]").forEach(g=>{const h=g.querySelectorAll(".mh-word");h.length&&b.fromTo(h,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:g,start:"top 88%",once:!0}})});const j=t.querySelector(".mh-scrub"),$=t.querySelector(".mh-scrub-day img"),n=t.querySelector(".mh-scrub-cap-day"),M=t.querySelector(".mh-scrub-cap-night"),p=t.querySelector(".mh-scrub-canvas"),K=(p==null?void 0:p.getContext("2d"))??null;let O=-1;const ee=g=>{if(!p||!K)return;const h=p.width,k=p.height,x=Math.max(h/g.naturalWidth,k/g.naturalHeight),q=g.naturalWidth*x,te=g.naturalHeight*x;K.drawImage(g,(h-q)/2,(k-te)/2,q,te)},X=g=>{if(!p||!K||!p.width)return;if(!F.some(Boolean)){const x=t.querySelector(".mh-scrub-day img");x!=null&&x.complete&&x.naturalWidth&&ee(x);return}let h=g;if(!F[h]){let x=h,q=h;for(;x>=0||q<F.length;){if(x>=0&&F[x]){h=x;break}if(q<F.length&&F[q]){h=q;break}x--,q++}}const k=F[h];!k||h===O||(O=h,p.dataset.frame=String(h),ee(k))},H=()=>{if(!p||!p.clientWidth||!p.clientHeight)return;const g=Math.min(window.devicePixelRatio||1,1.5),h=Math.round(p.clientWidth*g),k=Math.round(p.clientHeight*g);if(h===p.width&&k===p.height)return;p.width=h,p.height=k;const x=O;O=-1,X(Math.max(0,x))};if(j&&$&&p&&je()){const g=b.timeline({scrollTrigger:{trigger:j,start:"top top",end:"+=300%",pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:k=>{X(Math.min(S.frameCount-1,Math.round(k.progress*(S.frameCount-1))))}}});s=g.scrollTrigger??null,b.fromTo($,{scale:1},{scale:1.06,ease:"none",duration:1,scrollTrigger:{trigger:j,start:"top top",end:"+=300%",scrub:!0}});const h=()=>{O=-1,X(0)};window.addEventListener("mh:firstframe",h),C.push(()=>window.removeEventListener("mh:firstframe",h)),F[0]&&h(),D.addEventListener("refresh",H),C.push(()=>D.removeEventListener("refresh",H)),H(),window.addEventListener("resize",H,{passive:!0}),C.push(()=>window.removeEventListener("resize",H)),n&&M&&g.to(n,{opacity:0,duration:.12},.18).fromTo(M,{opacity:0},{opacity:1,duration:.14},.4)}},t);o.on("scroll",D.update);const L=c=>{u(),o.raf(c*1e3)};return b.ticker.add(L),b.ticker.lagSmoothing(0),u(),()=>{b.ticker.remove(L),z.disconnect(),C.forEach(c=>c()),I.revert(),o.destroy()}},[a])}function A({text:a,size:t,floor:o,as:m="h2",className:s="",measure:u}){return e.jsx(m,{"data-mh-headline":!0,"aria-label":a,className:`mh-headline ${s}`,style:{fontSize:i(t,o),maxWidth:u?`calc(var(--u) * ${u})`:void 0},children:a.split(" ").map((r,y,v)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"mh-line",children:e.jsx("span",{className:"mh-word",children:r})}),y<v.length-1?" ":""]},y))})}function Q({is:a,en:t}){return e.jsxs("p",{className:"mh-phase",children:[e.jsx("span",{className:"mh-phase-is",children:a}),e.jsx("span",{"aria-hidden":"true",children:" · "}),e.jsx("span",{children:t})]})}function P({photo:a,drift:t=9,priority:o=!1,className:m=""}){return e.jsx("figure",{className:`mh-frame mh-rv ${m}`,style:{aspectRatio:a.ratio},children:e.jsx("div",{className:"mh-frame-in","data-drift":t,style:{"--dz":`${Math.max(9,t*1.35)}%`},children:e.jsx("img",{src:a.src,srcSet:_(a.src),sizes:"(max-width: 991px) 100vw, 60vw",alt:a.alt,loading:o?"eager":"lazy",decoding:"async"})})})}const Ne=864e5,Se=(a,t)=>{const o=new Date(`${a}T12:00:00`);return new Date(o.getTime()+t*Ne).toISOString().slice(0,10)};function ze(){const[a,t]=f.useState(""),[o,m]=f.useState(""),[s,u]=f.useState(""),[r,y]=f.useState(""),[v,R]=f.useState(1),[z,C]=f.useState(2),[I,L]=f.useState(""),[c,d]=f.useState(null),[l,w]=f.useState(null),j=f.useMemo(()=>new Date().toISOString().slice(0,10),[]);function $(n){if(n.preventDefault(),!a.trim()||!o.trim()||!r){d("Name, email and an arrival date are needed to send a request.");return}d(null);const M={id:`mh-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,resourceId:"mirrorhouse",date:r,endDate:Se(r,v),people:z,customer:{name:a.trim(),phone:s.trim(),email:o.trim()},note:I.trim()||void 0,quote:{lines:[],total:0,deposit:0,units:v,estimate:!0},status:"REQUESTED",createdAt:new Date().toISOString()};ue.add(M),w(M)}return l?e.jsxs("div",{className:"mh-book-done",role:"status",children:[e.jsx("p",{className:"mh-book-done-title",children:"Your request is on its way."}),e.jsxs("p",{className:"mh-book-done-body",children:[l.date," to ",l.endDate,", ",l.people," ",l.people===1?"guest":"guests",". Ingibjörg confirms each request personally. The price for your dates comes with her reply to ",l.customer.email,"."]}),e.jsxs("p",{className:"mh-book-note",children:["This is a prototype. The request lives only in this browser."," ",e.jsx(le,{className:"mh-a",to:"/preview/mirrorhouse/stjornbord",children:"View the owner's dashboard"})," ","to watch it arrive."]}),e.jsx("button",{type:"button",className:"mh-ghost",onClick:()=>w(null),children:"Make another request"})]}):e.jsxs("form",{className:"mh-book-form",onSubmit:$,noValidate:!0,children:[e.jsxs("div",{className:"mh-book-grid",children:[e.jsxs("label",{className:"mh-field",children:[e.jsx("span",{className:"mh-field-label",children:"Arrival"}),e.jsx("input",{type:"date",name:"arrival",min:j,value:r,required:!0,onChange:n=>y(n.target.value)})]}),e.jsxs("label",{className:"mh-field",children:[e.jsx("span",{className:"mh-field-label",children:"Nights"}),e.jsx("select",{name:"nights",value:v,onChange:n=>R(Number(n.target.value)),children:[1,2,3,4,5].map(n=>e.jsx("option",{value:n,children:n},n))})]}),e.jsxs("label",{className:"mh-field",children:[e.jsx("span",{className:"mh-field-label",children:"Guests"}),e.jsxs("select",{name:"guests",value:z,onChange:n=>C(Number(n.target.value)),children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"})]})]}),e.jsxs("label",{className:"mh-field mh-field-wide",children:[e.jsx("span",{className:"mh-field-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",value:a,required:!0,onChange:n=>t(n.target.value)})]}),e.jsxs("label",{className:"mh-field mh-field-wide",children:[e.jsx("span",{className:"mh-field-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",inputMode:"email",value:o,required:!0,onChange:n=>m(n.target.value)})]}),e.jsxs("label",{className:"mh-field mh-field-wide",children:[e.jsxs("span",{className:"mh-field-label",children:["Phone ",e.jsx("span",{className:"mh-optional",children:"(optional)"})]}),e.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",inputMode:"tel",value:s,onChange:n=>u(n.target.value)})]}),e.jsxs("label",{className:"mh-field mh-field-wide",children:[e.jsxs("span",{className:"mh-field-label",children:["Anything Ingibjörg should know ",e.jsx("span",{className:"mh-optional",children:"(optional)"})]}),e.jsx("textarea",{rows:3,name:"note",value:I,onChange:n=>L(n.target.value)})]})]}),c&&e.jsx("p",{className:"mh-field-error",role:"alert",children:c}),e.jsx("button",{type:"submit",className:"mh-cta",children:"Enquire about your stay"}),e.jsx("p",{className:"mh-book-note",children:"No card, no charge. The guest asks, the owner confirms, and payment is settled on arrival. The nightly price for your dates comes with the reply."})]})}const $e=()=>{if(typeof window>"u"||V())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("mh_seen")}catch{return!0}};function Ee({onDone:a}){const[t,o]=f.useState(0),[m,s]=f.useState(!1);return f.useEffect(()=>{try{sessionStorage.setItem("mh_seen","1")}catch{}const u=performance.now();let r=0,y=0;const v=document.querySelector(".mh-hero-media img");let R=0,z=v?v.complete:!0,C=!1;v&&!z&&(v.addEventListener("load",()=>{z=!0},{once:!0}),v.addEventListener("error",()=>{z=!0},{once:!0})),document.fonts.ready.then(()=>{C=!0});const I=1100,L=2400,c=()=>{const d=performance.now()-u;R=(z?55:Math.min(50,d/24))+(C?45:0),d>=L&&(R=100),y+=(R-y)*.12;const l=Math.min(100,Math.round(y));if(o(l),l>=100&&d>=I){s(!0),window.setTimeout(a,950);return}r=requestAnimationFrame(c)};return r=requestAnimationFrame(c),()=>cancelAnimationFrame(r)},[a]),e.jsxs("div",{className:`mh-loader ${m?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsx("p",{className:"mh-loader-mark",style:{backgroundPositionX:`${100-t}%`},children:"MIRROR HOUSE"}),e.jsxs("p",{className:"mh-loader-pct",children:[t,"%"]})]})}function et(){const[a,t]=f.useState(!1),[o,m]=f.useState($e),s=f.useRef(null);f.useEffect(()=>{se(Z),document.title="Mirror House Iceland",t(!0);const r=window.setTimeout(()=>{ye(()=>{window.dispatchEvent(new Event("mh:firstframe"))})},700);return()=>window.clearTimeout(r)},[]),ke(a);const u=r=>y=>{var v;y.preventDefault(),(v=document.getElementById(r))==null||v.scrollIntoView({behavior:V()?"auto":"smooth"}),history.replaceState(null,"",`#${r}`)};return e.jsxs("div",{ref:s,className:"mh-root",children:[e.jsx("style",{children:Te}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ve)}}),e.jsx(me,{company:ae}),o&&e.jsx(Ee,{onDone:()=>{m(!1),window.dispatchEvent(new Event("mh:revealed"))}}),e.jsxs("header",{className:"mh-nav",children:[e.jsx("a",{className:"mh-nav-mark",href:"#top",onClick:u("top"),children:"MIRROR HOUSE"}),e.jsxs("nav",{className:"mh-nav-links","aria-label":"Page",children:[e.jsx("a",{href:"#husid",onClick:u("husid"),children:"The house"}),e.jsx("a",{href:"#nottin",onClick:u("nottin"),children:"The night"}),e.jsx("a",{href:"#gestir",onClick:u("gestir"),children:"Guests"})]}),e.jsx("a",{className:"mh-nav-cta",href:"#boka",onClick:u("boka"),children:"Enquire about your stay"})]}),e.jsxs("section",{className:"mh-hero",id:"top",children:[e.jsx("div",{className:"mh-hero-media mh-rv",children:e.jsx("div",{className:"mh-frame-in","data-drift":13,style:{"--dz":`${(13*1.35).toFixed(2)}%`},children:e.jsx("img",{src:N.arrivalWide.src,srcSet:_(N.arrivalWide.src),sizes:"100vw",alt:N.arrivalWide.alt,loading:"eager",decoding:"async"})})}),e.jsxs("h1",{className:"mh-wordmark","aria-label":"Mirror House Iceland",children:[e.jsx("span",{className:"mh-wm-word mh-wm-mirror","aria-hidden":"true",children:"MIRROR"}),e.jsx("span",{className:"mh-wm-seam","aria-hidden":"true"}),e.jsx("span",{className:"mh-wm-word mh-wm-house","aria-hidden":"true",children:"HOUSE"})]}),e.jsxs("div",{className:"mh-hero-block",children:[e.jsx("p",{className:"mh-hero-sub",children:"Mirror House sits quietly under the cliffs of Borgarbyggð, reflecting the mountains, sky and weather that surround it. From a distance it almost disappears. From inside, every pane becomes a window onto Iceland. Sleeps two."}),e.jsx("a",{className:"mh-hero-link",href:"#boka",onClick:u("boka"),children:"Enquire about your stay"})]})]}),e.jsxs("section",{className:"mh-manifesto",id:"husid",children:[e.jsxs("div",{className:"mh-manifesto-copy",children:[e.jsx(A,{text:"The house gives the landscape back.",size:92,floor:40,measure:620}),e.jsx("p",{className:"mh-body mh-rv",children:"The mirrored exterior reflects whatever the day brings. Morning light, drifting cloud, autumn colour or winter snow. Rather than drawing attention to itself, the building allows the landscape to remain uninterrupted."})]}),e.jsx(P,{photo:N.mirrorEdge,drift:9,className:"mh-manifesto-fig"})]}),e.jsxs("section",{className:"mh-arrival",children:[e.jsxs("div",{className:"mh-arrival-copy",children:[e.jsx(Q,{is:"Síðdegi",en:"Afternoon"}),e.jsx(A,{text:"The road ends. The stay begins.",size:64,floor:32,measure:560}),e.jsx("p",{className:"mh-body mh-rv",children:"The final stretch is simple. A good main road runs almost to the door; the last few metres are gravel, with parking just below the hill. Collect your key from the lockbox and step inside. No reception desk. No queue. Just your own code and the sound of the wind."}),e.jsxs("dl",{className:"mh-facts mh-rv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Check-in"}),e.jsx("dd",{children:G.checkIn})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Check-out"}),e.jsx("dd",{children:G.checkOut})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Winter"}),e.jsx("dd",{children:"A 4x4 is recommended"})]})]})]}),e.jsxs("div",{className:"mh-arrival-figs",children:[e.jsx(P,{photo:N.heroSymmetrical,drift:9}),e.jsx(P,{photo:N.door,drift:7,className:"mh-arrival-door"})]})]}),e.jsxs("section",{className:"mh-interior",children:[e.jsx(P,{photo:N.bedGlassRoof,drift:12,className:"mh-interior-hero"}),e.jsxs("div",{className:"mh-interior-row",children:[e.jsxs("div",{className:"mh-interior-copy",children:[e.jsx(A,{text:"Every direction becomes the view.",size:56,floor:30,measure:520}),e.jsx("p",{className:"mh-body mh-rv",children:"Glass surrounds the room so the landscape is never treated as scenery. It becomes part of the room, from sunrise until the last light leaves the mountains. The floor is heated throughout and the kitchenette makes a slow morning easy."})]}),e.jsx(P,{photo:N.interiorTable,drift:8,className:"mh-interior-side"})]})]}),e.jsxs("section",{className:"mh-evening",children:[e.jsxs("div",{className:"mh-evening-head",children:[e.jsx(Q,{is:"Kvöld",en:"Evening"}),e.jsx(A,{text:"The water is already hot.",size:64,floor:32,measure:560})]}),e.jsx(P,{photo:N.hotTubWide,drift:12,className:"mh-evening-bleed"}),e.jsxs("div",{className:"mh-evening-foot",children:[e.jsx("p",{className:"mh-body mh-rv",children:"The private hot tub sits on the deck, open all year, day and night."}),e.jsx("p",{className:"mh-stat mh-rv",children:"116 of 412 reviews mention it"})]})]}),e.jsxs("section",{className:"mh-scrub",id:"nottin",children:[e.jsxs("div",{className:"mh-scrub-inner",children:[e.jsx("div",{className:"mh-scrub-day",children:e.jsx("img",{src:S.day.src,srcSet:_(S.day.src),sizes:"100vw",alt:S.day.alt,loading:"lazy",decoding:"async"})}),e.jsx("canvas",{className:"mh-scrub-canvas","aria-hidden":"true"}),e.jsxs("div",{className:"mh-scrub-caps",children:[e.jsx(Q,{is:"Nótt",en:"Night"}),e.jsxs("div",{className:"mh-scrub-captext",children:[e.jsx("p",{className:"mh-scrub-cap mh-scrub-cap-day",children:"Stay one night."}),e.jsx("p",{className:"mh-scrub-cap mh-scrub-cap-night",children:"Clear nights are never promised. Guests have described watching the sky change from bed."})]})]})]}),e.jsxs("figure",{className:"mh-scrub-fallback",children:[e.jsx("img",{src:S.night.src,srcSet:_(S.night.src),sizes:"100vw",alt:S.night.alt,loading:"lazy",decoding:"async"}),e.jsx("figcaption",{className:"mh-stat",children:"Both photographs are of this cabin, from Ingibjörg's own listing."})]})]}),e.jsxs("section",{className:"mh-guests",id:"gestir",children:[e.jsx(A,{text:"What guests keep saying.",size:64,floor:32,measure:620}),e.jsxs("p",{className:"mh-guests-meta mh-rv",children:[U.rating," of 5 across ",U.reviewCount," reviews · Superhost ·"," ",U.yearsHosting," years hosting"]}),e.jsx("ul",{className:"mh-quotes",children:pe.map(r=>e.jsxs("li",{className:"mh-quote mh-rv",children:[e.jsx("blockquote",{children:e.jsxs("p",{children:["“",r.quote,"”"]})}),e.jsxs("p",{className:"mh-quote-by",children:[r.author,", ",r.when]})]},r.author))}),e.jsx("dl",{className:"mh-themes mh-rv","aria-label":"What reviews mention most",children:ge.map(r=>e.jsxs("div",{children:[e.jsx("dt",{children:r.theme}),e.jsx("dd",{children:r.mentions})]},r.theme))}),e.jsx("p",{className:"mh-stat mh-rv",children:"Counts from the listing's own review index, August 2026."})]}),e.jsxs("section",{className:"mh-place",children:[e.jsxs("div",{className:"mh-place-copy",children:[e.jsx(A,{text:"West Iceland, from a quiet hill.",size:56,floor:30,measure:540}),e.jsx("ul",{className:"mh-place-list mh-rv",children:fe.map(r=>e.jsxs("li",{children:[e.jsx("span",{className:"mh-place-name",children:r.name}),e.jsx("span",{className:"mh-place-note",children:r.note}),e.jsx("span",{className:"mh-place-dist",children:r.dist})]},r.name))})]}),e.jsx(P,{photo:N.autumnPortrait,drift:8,className:"mh-place-fig"})]}),e.jsxs("section",{className:"mh-book",id:"boka",children:[e.jsxs("div",{className:"mh-book-intro",children:[e.jsx(A,{text:"Ask for your night.",size:72,floor:34,measure:560}),e.jsx("p",{className:"mh-body mh-rv",children:"Requests go straight to Ingibjörg, who has hosted this hill for ten years and answers within the hour."}),e.jsxs("div",{className:"mh-owner-note mh-rv",children:[e.jsx("p",{className:"mh-owner-note-label",children:"The owner's dashboard"}),e.jsxs("p",{className:"mh-owner-note-body",children:["Every request lands in a dashboard built for this house: confirm or decline in one tap, watch the week fill up."," ",e.jsx(le,{className:"mh-a",to:"/preview/mirrorhouse/stjornbord",children:"See how direct bookings would work"})," ","beside this tab and send yourself a request."]})]})]}),e.jsx(ze,{})]}),e.jsx("footer",{className:"mh-foot",children:e.jsxs("div",{className:"mh-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mh-foot-mark",children:"MIRROR HOUSE"}),e.jsx("p",{className:"mh-foot-line",children:"Ytri-Skeljabrekka, Borgarbyggð, West Iceland"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mh-foot-line",children:["Licence nr. ",U.licenceNr]}),e.jsxs("p",{className:"mh-foot-line",children:["Guests: ",G.guests," · ",G.sleeps]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mh-foot-line",children:"Photography: Ingibjörg's own listing photos, retrieved August 2026."}),e.jsx("p",{className:"mh-foot-line",children:"Prototype by SNDR. Booking requests here are a demo and stay in this browser."})]})]})}),e.jsx(de,{company:ae})]})}const Te=`
@font-face { font-family: 'Switzer'; src: url('${W}fonts/switzer/Switzer-Extralight.woff2') format('woff2'); font-weight: 200; font-display: swap; }
@font-face { font-family: 'Switzer'; src: url('${W}fonts/switzer/Switzer-Light.woff2') format('woff2'); font-weight: 300; font-display: swap; }
@font-face { font-family: 'Switzer'; src: url('${W}fonts/switzer/Switzer-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Switzer'; src: url('${W}fonts/switzer/Switzer-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Fragment Mono'; src: url('${W}fonts/fragment-mono/FragmentMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }

.mh-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --mh-c: ${Z};
  --mh-ink: ${xe};
  --mh-soft: #DDE6EC;
  --mh-aurora: ${re};
  /* the aurora green reads at 1.66:1 on the ice canvas; text that uses the
     accent needs a deeper version of the same hue while the page is light */
  --mh-accent-text: #1F6647;
  --mh-mute: color-mix(in srgb, var(--mh-ink) 78%, transparent);
  --mh-hair: color-mix(in srgb, var(--mh-ink) 17%, transparent);
  background: var(--mh-c);
  color: var(--mh-ink);
  font-family: ${be};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.mh-root ::selection { background: var(--mh-aurora); color: ${B}; }
.mh-root a { color: inherit; }
.mh-root :focus-visible {
  outline: 2px solid var(--mh-aurora);
  outline-offset: 2px;
  border-radius: 2px;
}
.mh-root a, .mh-root button, .mh-root input, .mh-root select, .mh-root textarea {
  touch-action: manipulation;
}
.mh-a:hover { color: var(--mh-aurora); }

/* nav: borderless, no fill, painted near-white under mix-blend difference —
   it inverts against whatever passes beneath it (bright sky -> dark ink, rock
   and night -> light), so it never needs a bar to stay legible */
.mh-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 40;
  display: flex; align-items: center; gap: calc(var(--u) * 40);
  padding: calc(var(--u) * 22) calc(var(--u) * 48);
  color: #F2F6F8;
  mix-blend-mode: difference;
}
.mh-nav-mark {
  font-weight: 300; letter-spacing: .22em; text-decoration: none;
  font-size: ${i(15,15)};
}
.mh-nav-links { display: flex; gap: calc(var(--u) * 28); margin-left: auto; }
.mh-nav-links a {
  text-decoration: none; font-size: ${i(14,15)}; color: inherit;
  opacity: .68; transition: opacity .25s ease;
}
.mh-nav-links a:hover { opacity: 1; }
.mh-nav-cta {
  text-decoration: none; font-size: ${i(14,15)}; font-weight: 500;
  padding: calc(var(--u) * 10) calc(var(--u) * 18);
  border: 1px solid color-mix(in srgb, currentColor 38%, transparent);
  border-radius: 2px;
  transition: border-color .25s ease;
}
.mh-nav-cta:hover { border-color: currentColor; }

/* hero: the nav is FIXED and out of flow, so the image starts at true y=0 with
   no canvas strip above it. The wordmark sits dead centre and takes its hues
   from whatever each letter happens to cover — mix-blend difference over a
   gently desaturated photo (Búðir §6: the desat is what keeps the invert a
   controlled hue instead of psychedelic). */
.mh-hero { position: relative; min-height: 100svh; display: grid; }
/* The photograph lives in a fixed box and drifts inside it (Heklusyn):
   overflow hidden, an oversized inner wrapper, --dz derived from the drift
   so the image can never run out of overhang at the extremes of travel. */
.mh-hero-media { position: absolute; inset: 0; overflow: hidden; }
.mh-hero-media img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: saturate(.78) contrast(1.02);
}
.mh-js .mh-hero-media:not(.is-in) img { filter: saturate(.55) blur(10px); }
.mh-hero-media::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(200deg, transparent 42%, rgba(10,18,27,.55) 100%);
}
/* MIRROR | HOUSE, parted by a hairline. The row is centred on the seam, so
   the two words are exactly mirrored about it. */
.mh-wordmark {
  position: absolute; inset: 0; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  margin: 0; pointer-events: none;
  color: #F2F6F8;
  mix-blend-mode: difference;
  font-size: clamp(38px, 8.6vw, 132px);
  line-height: 1.02;
}
.mh-wm-word {
  display: block; font-weight: 200; letter-spacing: .1em;
  white-space: nowrap; will-change: clip-path, transform;
}
/* the trailing letter-space would otherwise push MIRROR off the seam */
.mh-wm-mirror { padding-right: .34em; margin-right: -.1em; text-align: right; }
.mh-wm-house { padding-left: .34em; text-align: left; }
.mh-wm-seam {
  flex: none; width: 1px; height: .96em; background: currentColor;
  opacity: .85; transform-origin: 50% 50%;
}
.mh-hero-block {
  position: relative; align-self: end; z-index: 1;
  padding: 0 calc(var(--u) * 48) calc(calc(var(--u) * 64) + env(safe-area-inset-bottom, 0px));
  color: #F2F6F8;
  max-width: calc(var(--u) * 900);
}
.mh-hero-sub {
  margin: 0;
  font-size: ${i(19,15)}; line-height: 1.55; font-weight: 300;
  max-width: 44ch; color: rgba(242,246,248,.92);
}
/* the hero asks quietly: a rule that draws itself in from the left on hover,
   never a filled chip sitting on the photograph */
.mh-hero-link {
  display: inline-block; margin-top: calc(var(--u) * 24);
  font-size: ${i(16,14)}; font-weight: 300; letter-spacing: .01em;
  color: #F2F6F8; text-decoration: none; position: relative;
  padding-bottom: 3px;
}
.mh-hero-link::after {
  content: ''; position: absolute; left: 0; bottom: 0; height: 1px; width: 100%;
  background: currentColor; transform: scaleX(0); transform-origin: left;
  transition: transform .45s cubic-bezier(.23,1,.32,1);
}
@media (hover: hover) and (pointer: fine) {
  .mh-hero-link:hover::after { transform: scaleX(1); }
}
.mh-hero-link:focus-visible::after { transform: scaleX(1); }

.mh-cta {
  display: inline-block; margin-top: calc(var(--u) * 26);
  background: var(--mh-aurora); color: ${B};
  font-weight: 500; font-size: ${i(15,13)}; text-decoration: none;
  padding: calc(var(--u) * 14) calc(var(--u) * 26);
  border: 0; border-radius: 2px; cursor: pointer;
  transition: transform .15s ease, filter .25s ease;
}
.mh-cta:hover { filter: brightness(1.06); }
.mh-cta:active { transform: translateY(1px); }

/* shared text */
.mh-headline {
  margin: 0; font-weight: 200; letter-spacing: -.01em; line-height: 1.12;
  text-wrap: balance;
}
.mh-line {
  display: inline-block; overflow: hidden; vertical-align: bottom;
  padding: .2em .04em .12em; margin: -.2em -.04em -.12em;
}
.mh-word { display: inline-block; }
.mh-body {
  font-size: ${i(17,15)}; line-height: 1.62; font-weight: 300;
  color: var(--mh-mute); max-width: 58ch; margin: calc(var(--u) * 26) 0 0;
  transition: color .4s ease;
}
.mh-phase {
  font-family: ${E}; font-size: ${i(12,12)}; letter-spacing: .16em;
  text-transform: uppercase; color: var(--mh-mute); margin: 0 0 calc(var(--u) * 18);
}
.mh-scrub-caps .mh-phase { margin-bottom: calc(var(--u) * 14); }
.mh-phase-is { color: var(--mh-accent-text); }
.mh-stat {
  font-family: ${E}; font-size: ${i(12,12)};
  color: var(--mh-mute); margin: calc(var(--u) * 14) 0 0;
}
.mh-a { color: inherit; }

/* frames: drift + condensation-clear */
.mh-frame {
  position: relative; overflow: hidden; margin: 0; background: var(--mh-soft);
}
.mh-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; }
/* translate3d already promotes these; the extra hint is only worth its memory
   where there is memory to spare */
@media (min-width: 992px) { .mh-frame-in { will-change: transform; } }
.mh-frame-in img {
  width: 100%; height: 100%; max-width: none; object-fit: cover; display: block;
}
/* condensation-clear: a blur/saturate resolve, like breath fading off glass.
   No clip/mask on the frames: a resting clip-path on a box whose child
   transforms every frame de-optimizes compositing (measured: 60fps -> 30fps),
   and mask-image gradients don't interpolate at all. The wipe vocabulary
   lives in the night scrub, where scroll drives it. */
.mh-js .mh-rv img {
  transition: filter 1.15s cubic-bezier(.25,1,.5,1), opacity 1.15s cubic-bezier(.25,1,.5,1);
}
.mh-js .mh-rv:not(.is-in) img {
  filter: blur(10px) saturate(.55);
  opacity: .35;
}
/* the hero media is a full-bleed backdrop, never a rising block */
.mh-js .mh-rv:not(.mh-frame):not(.mh-hero-media):not(.is-in) { opacity: 0; transform: translateY(26px); }
.mh-js .mh-rv:not(.mh-frame):not(.mh-hero-media) {
  transition: opacity .9s cubic-bezier(.25,1,.5,1), transform .9s cubic-bezier(.25,1,.5,1);
}

/* sections */
.mh-manifesto {
  display: grid; grid-template-columns: 7fr 4fr; align-items: end;
  gap: calc(var(--u) * 96);
  padding: calc(var(--u) * 190) calc(var(--u) * 48) calc(var(--u) * 150);
  max-width: calc(var(--u) * 1440); margin: 0 auto;
}
.mh-manifesto-fig { width: 100%; }

.mh-arrival {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 96);
  padding: calc(var(--u) * 60) calc(var(--u) * 48) calc(var(--u) * 150);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.mh-facts { margin: calc(var(--u) * 40) 0 0; }
.mh-facts div {
  display: grid; grid-template-columns: calc(var(--u) * 160) 1fr;
  gap: calc(var(--u) * 24);
  padding: calc(var(--u) * 14) 0; border-top: 1px solid var(--mh-hair);
}
.mh-facts dt {
  font-family: ${E}; font-size: ${i(12,12)}; text-transform: uppercase;
  letter-spacing: .14em; color: var(--mh-mute); padding-top: 2px;
}
.mh-facts dd { margin: 0; font-size: ${i(15,14)}; font-weight: 300; line-height: 1.5; }
.mh-arrival-figs {
  display: grid; grid-template-columns: 3fr 2fr; gap: calc(var(--u) * 24);
  align-items: start;
}
.mh-arrival-door { margin-top: calc(var(--u) * 96); }

.mh-interior { padding: calc(var(--u) * 60) 0 calc(var(--u) * 150); }
.mh-interior-hero {
  width: min(100%, calc(var(--u) * 1240)); margin: 0 auto;
}
.mh-interior-row {
  display: grid; grid-template-columns: 6fr 4fr; gap: calc(var(--u) * 96);
  align-items: start; max-width: calc(var(--u) * 1240);
  margin: calc(var(--u) * 90) auto 0; padding: 0 calc(var(--u) * 48);
}
.mh-interior-side { margin-top: calc(var(--u) * 40); }

.mh-evening { padding: calc(var(--u) * 60) 0 calc(var(--u) * 170); }
.mh-evening-head {
  max-width: calc(var(--u) * 1440); margin: 0 auto calc(var(--u) * 64);
  padding: 0 calc(var(--u) * 48);
}
.mh-evening-bleed { width: 100%; aspect-ratio: 21 / 9 !important; }
.mh-evening-foot {
  display: flex; flex-wrap: wrap; gap: calc(var(--u) * 40); align-items: baseline;
  justify-content: space-between;
  max-width: calc(var(--u) * 1440); margin: calc(var(--u) * 40) auto 0;
  padding: 0 calc(var(--u) * 48);
}
.mh-evening-foot .mh-body {
  margin: 0; color: var(--mh-ink); font-weight: 300;
  font-size: ${i(23,17)}; max-width: 30ch;
}
.mh-evening-foot .mh-stat {
  margin: 0; color: var(--mh-accent-text); font-size: ${i(16,14)};
  letter-spacing: .04em;
}

/* the night scrub */
.mh-scrub-inner {
  position: relative; height: 100svh; overflow: hidden; background: ${B};
}
.mh-scrub-day, .mh-scrub-day img, .mh-scrub-canvas {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
}
.mh-scrub-day img { display: block; }
/* the film sits over the daylight still, which stays up until frames land */
.mh-scrub-canvas { display: block; z-index: 1; }
.mh-scrub-caps {
  position: absolute; left: calc(var(--u) * 48); bottom: calc(var(--u) * 56);
  z-index: 3; color: #F2F6F8;
}
.mh-scrub-caps .mh-phase { color: rgba(242,246,248,.72); }
/* Both captions occupy the SAME grid cell, so they crossfade in place and the
   box is always as tall as the taller of the two. Absolute positioning with a
   fixed min-height was wrong: on a narrow screen the night line wraps to three
   lines, overflows its box upward and collides with the phase label above. */
.mh-scrub-captext { display: grid; align-items: end; }
.mh-scrub-cap {
  grid-area: 1 / 1; margin: 0;
  font-weight: 200; font-size: ${i(44,23)}; line-height: 1.18;
  letter-spacing: -.01em; max-width: 32ch;
}
.mh-scrub-cap-night { opacity: 0; }
.mh-scrub-inner::after {
  content: ''; position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(200deg, transparent 55%, rgba(10,18,27,.5) 100%);
}
.mh-scrub-fallback { display: none; margin: 0; }
.mh-scrub-fallback img { width: 100%; display: block; aspect-ratio: 3 / 2; object-fit: cover; }
.mh-scrub-fallback figcaption { padding: calc(var(--u) * 14) calc(var(--u) * 48) 0; }

/* guests */
.mh-guests {
  padding: calc(var(--u) * 170) calc(var(--u) * 48);
  max-width: calc(var(--u) * 1240); margin: 0 auto;
}
.mh-guests-meta {
  font-family: ${E}; font-size: ${i(13,12)}; color: var(--mh-mute);
  margin: calc(var(--u) * 20) 0 0;
}
.mh-quotes {
  list-style: none; margin: calc(var(--u) * 72) 0 0; padding: 0;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 56);
}
.mh-quote blockquote { margin: 0; }
.mh-quote blockquote p {
  margin: 0; font-size: ${i(21,16)}; line-height: 1.45; font-weight: 300;
}
.mh-quote-by {
  font-family: ${E}; font-size: ${i(12,12)}; color: var(--mh-mute);
  margin: calc(var(--u) * 18) 0 0;
}
.mh-themes {
  display: flex; flex-wrap: wrap; gap: calc(var(--u) * 56) calc(var(--u) * 72);
  margin: calc(var(--u) * 88) 0 0; padding: calc(var(--u) * 28) 0 0;
  border-top: 1px solid var(--mh-hair);
}
.mh-themes div { display: flex; align-items: baseline; gap: calc(var(--u) * 14); }
.mh-themes dt { font-size: ${i(15,13)}; font-weight: 300; color: var(--mh-mute); }
.mh-themes dd {
  margin: 0; font-family: ${E}; font-size: ${i(28,20)}; color: var(--mh-ink);
}

/* the place */
.mh-place {
  display: grid; grid-template-columns: 7fr 4fr; gap: calc(var(--u) * 96);
  padding: calc(var(--u) * 40) calc(var(--u) * 48) calc(var(--u) * 170);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.mh-place-list { list-style: none; margin: calc(var(--u) * 56) 0 0; padding: 0; }
.mh-place-list li {
  display: grid; grid-template-columns: calc(var(--u) * 190) 1fr auto;
  gap: calc(var(--u) * 28); align-items: baseline;
  padding: calc(var(--u) * 18) 0; border-top: 1px solid var(--mh-hair);
}
.mh-place-name { font-weight: 400; font-size: ${i(17,15)}; }
.mh-place-note { font-weight: 300; font-size: ${i(15,13)}; color: var(--mh-mute); line-height: 1.5; }
.mh-place-dist { font-family: ${E}; font-size: ${i(12,12)}; color: var(--mh-mute); }

/* booking */
.mh-book {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 96);
  padding: calc(var(--u) * 40) calc(var(--u) * 48) calc(var(--u) * 190);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.mh-book-form, .mh-book-done {
  background: var(--mh-soft);
  border: 1px solid var(--mh-hair); border-radius: 2px;
  padding: calc(var(--u) * 40);
  transition: background .4s ease;
}
.mh-book-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 22); }
.mh-field { display: flex; flex-direction: column; gap: 6px; }
.mh-field-wide { grid-column: 1 / -1; }
.mh-field-label {
  font-family: ${E}; font-size: ${i(11,12)}; letter-spacing: .12em;
  text-transform: uppercase; color: var(--mh-mute);
}
.mh-optional { text-transform: none; letter-spacing: 0; }
.mh-field input, .mh-field select, .mh-field textarea {
  font: inherit; font-size: 16px; font-weight: 300;
  color: var(--mh-ink); background: color-mix(in srgb, var(--mh-c) 55%, transparent);
  border: 1px solid var(--mh-hair); border-radius: 2px;
  padding: 10px 12px; min-height: 44px;
}
.mh-field textarea { min-height: 0; resize: vertical; }
.mh-night { --mh-accent-text: ${re}; }
.mh-night .mh-field input, .mh-night .mh-field select, .mh-night .mh-field textarea { color-scheme: dark; }
.mh-owner-note {
  margin-top: calc(var(--u) * 48); padding-top: calc(var(--u) * 24);
  border-top: 1px solid var(--mh-hair);
}
.mh-owner-note-label {
  font-family: ${E}; font-size: ${i(11,12)}; letter-spacing: .14em;
  text-transform: uppercase; color: var(--mh-accent-text); margin: 0 0 calc(var(--u) * 10);
}
.mh-owner-note-body {
  font-size: ${i(14,13)}; font-weight: 300; line-height: 1.65;
  color: var(--mh-mute); margin: 0; max-width: 44ch;
}
.mh-field-error { color: #C86A5A; font-size: ${i(14,13)}; margin: calc(var(--u) * 18) 0 0; }
.mh-book-form .mh-cta { margin-top: calc(var(--u) * 28); width: 100%; text-align: center; }
.mh-book-note {
  font-size: ${i(13,12)}; font-weight: 300; line-height: 1.6;
  color: var(--mh-mute); margin: calc(var(--u) * 18) 0 0;
}
.mh-book-done-title { margin: 0; font-weight: 200; font-size: ${i(34,22)}; }
.mh-book-done-body {
  margin: calc(var(--u) * 18) 0 0; font-weight: 300; line-height: 1.6;
  font-size: ${i(16,14)};
}
.mh-ghost {
  margin-top: calc(var(--u) * 24);
  font: inherit; font-size: ${i(14,13)}; font-weight: 400; cursor: pointer;
  background: none; color: var(--mh-ink);
  border: 1px solid var(--mh-hair); border-radius: 2px;
  padding: calc(var(--u) * 10) calc(var(--u) * 18);
}
.mh-ghost:hover { border-color: var(--mh-aurora); }

/* preloader: basalt sheet, wordmark filling with real load progress, then
   the sheet lifts to reveal the day. */
.mh-loader {
  position: fixed; inset: 0; z-index: 60;
  background: ${B};
  display: grid; place-content: center;
  transition: transform .95s cubic-bezier(.76, 0, .24, 1);
}
.mh-loader.is-leaving { transform: translateY(-100%); }
.mh-loader-mark {
  margin: 0; font-weight: 200; letter-spacing: .1em; margin-right: -.1em;
  font-size: clamp(34px, 7.6vw, 120px); white-space: nowrap; line-height: 1;
  background-image: linear-gradient(90deg, #EDF2F5 50%, rgba(237,242,245,.16) 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
}
.mh-loader-pct {
  position: fixed; left: calc(var(--u) * 48); bottom: calc(var(--u) * 40);
  margin: 0; font-family: ${E}; font-size: 12px; letter-spacing: .16em;
  color: rgba(159,176,189,.85);
}

/* footer */
.mh-foot { border-top: 1px solid var(--mh-hair); }
.mh-foot-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 48);
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 56) calc(var(--u) * 48) calc(var(--u) * 72);
}
.mh-foot-mark { font-weight: 300; letter-spacing: .22em; font-size: ${i(14,15)}; margin: 0 0 calc(var(--u) * 12); }
.mh-foot-line {
  font-size: ${i(13,15)}; font-weight: 300; line-height: 1.6;
  color: var(--mh-mute); margin: 0 0 calc(var(--u) * 8);
}

/* ── responsive ── */
@media (max-width: 991px) {
  .mh-nav { padding: 10px 20px; gap: 16px; }
  /* 44px minimum on everything touchable: the fluid unit pins at its floor
     here, so calc()-based padding collapses and these measured 18-32px tall */
  .mh-nav-mark, .mh-nav-cta, .mh-nav-links a, .mh-hero-link {
    display: inline-flex; align-items: center; min-height: 44px;
  }
  .mh-nav-cta { padding: 0 16px; }
  .mh-hero-link { padding-bottom: 0; }
  .mh-hero-link::after { bottom: 10px; }
  .mh-cta { min-height: 44px; padding: 12px 22px; }
  .mh-ghost { min-height: 44px; padding: 10px 18px; }
  .mh-nav-links { display: none; }
  .mh-nav-cta { margin-left: auto; }
  .mh-hero-block { padding: 0 20px 40px; }
  /* the seam and both words stay on one line; the clamp already shrinks it */
  .mh-wordmark { font-size: clamp(30px, 11vw, 62px); }
  .mh-manifesto, .mh-arrival, .mh-place, .mh-book,
  .mh-interior-row { grid-template-columns: 1fr; gap: 48px; padding-left: 20px; padding-right: 20px; }
  .mh-manifesto { padding-top: 96px; padding-bottom: 80px; }
  .mh-arrival, .mh-place, .mh-book { padding-bottom: 80px; }
  .mh-arrival-figs { grid-template-columns: 1fr; }
  .mh-arrival-door { margin-top: 0; }
  .mh-interior-side { margin-top: 0; }
  .mh-evening-head, .mh-evening-foot, .mh-guests { padding-left: 20px; padding-right: 20px; }
  .mh-evening-bleed { aspect-ratio: 4 / 3 !important; }
  .mh-quotes { grid-template-columns: 1fr; gap: 36px; }
  .mh-book-grid { grid-template-columns: 1fr; }
  .mh-place-list li { grid-template-columns: 1fr; gap: 6px; }
  .mh-foot-grid { grid-template-columns: 1fr; gap: 24px; padding: 40px 20px; }
}

/* Phone only: no pin, so the film is replaced by its two stills. Tablets and
   up keep the scrubbed clip even though their grids have collapsed. */
/* The film plays on phones too, so the section stays pinned and the two-still
   fallback stays out of the way. Only reduced motion falls back now. */
@media (max-width: 767px) {
  .mh-scrub-caps { left: 20px; bottom: 32px; }
  .mh-scrub-cap { font-size: clamp(22px, 6.4vw, 30px); max-width: 20ch; }
}

/* ── reduced motion: every device collapses to its resting state ── */
@media (prefers-reduced-motion: reduce) {
  .mh-root * { transition: none !important; animation: none !important; }
  .mh-frame-in { inset: 0; transform: none !important; }
  .mh-word { transform: none !important; opacity: 1 !important; }
  /* the name is simply open, the line already drawn */
  .mh-wm-word { clip-path: none !important; transform: none !important; opacity: 1 !important; }
  .mh-wm-seam { transform: none !important; opacity: .85 !important; }
  .mh-scrub-inner { height: auto; }
  .mh-scrub-day { position: relative; inset: auto; }
  .mh-scrub-day img { position: relative; aspect-ratio: 3 / 2; }
  .mh-scrub-canvas { display: none; }
  .mh-scrub-cap-night { display: none; }
  .mh-scrub-fallback { display: block; }
}
.mh-static .mh-frame-in { inset: 0; }
`;export{et as default};
