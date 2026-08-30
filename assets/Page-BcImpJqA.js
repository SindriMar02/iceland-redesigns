import{r as c,s as $e,a as Ae,j as e,L as ze,_ as Fe}from"./index-Ddcq50XK.js";import{g as A}from"./index-CzGW6FVa.js";import{S as pe}from"./ScrollTrigger-DNECHiyU.js";import{g as Le}from"./companies-DOEqWmuu.js";import{P as Oe}from"./PreviewChrome-COsFRkPa.js";import{P as Ie}from"./PreviewFooter-Cffge9mW.js";import{d as Me}from"./demoStore-Cl8pI4vE.js";import{m as qe}from"./proxy-B_zpuZHf.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-CD_c8I67.js";import"./createLucideIcon-BAmWTyse.js";import"./send-CoWO0LVh.js";import"./index-QQiTPw2f.js";import"./external-link-D0gVFKPX.js";import"./x-DSti3SRW.js";import"./mail-UOt09qpJ.js";import"./SndrBadge-D0Mn6tLR.js";const Se="",Ce="https://property.godo.is/booking2.php";function be(t){const[n,i,u]=t.split("-").map(Number);return`${n}-${i}-${u}`}function xe(){return Se.trim().length>0}function Re(t){const n=new URLSearchParams;return n.set("propid",Se),t.checkin&&n.set("checkin",be(t.checkin)),t.checkout&&n.set("checkout",be(t.checkout)),n.set("numadult",String(Math.max(1,t.adults??2))),n.set("numchild","0"),n.set("lang",t.lang??"en"),n.set("referer","villanorth-web"),`${Ce}?${n.toString()}`}const f="/iceland-redesigns/villanorth/",De={"tub-night-small.jpg":520,"winter-river.jpg":800},oe=t=>{const n=De[t.split("/").pop()??""]??1200,i=`${t.replace(/\.jpg$/,"-800.jpg")} 800w`;return n<=800&&n!==520?i:`${i}, ${t} ${n}w`},X={name:"the owner",responseRate:"100%",respondsWithin:"within an hour",rating:5,reviewCount:58,badges:["Guest favorite","Top 5% of homes"]},l={glassGrid:{src:`${f}glass-grid.jpg`,alt:"The two-storey glass gable of Villa North against a pale blue sky, dark timber cladding at its edges"},gridSunset:{src:`${f}grid-sunset.jpg`,alt:"The gable end of Villa North in silhouette against an orange sunset, its roofline the source of this page's drawing",ratio:"3 / 2"},aerialSunset:{src:`${f}aerial-sunset.jpg`,alt:"Aerial view of Villa North at sunset, cut into the hillside above Fnjóskadalur with the hot tub on its deck"},aerialSunsetB:{src:`${f}aerial-sunset-b.jpg`,alt:"A wider aerial view of Villa North at dusk, the valley and dark fells behind it",ratio:"4 / 3"},aerialRiver:{src:`${f}aerial-river.jpg`,alt:"Aerial daylight view of Villa North above Fnjóskadalur, the river Fnjóská winding through the valley below",ratio:"4 / 3"},aerialMist:{src:`${f}aerial-mist.jpg`,alt:"Aerial view of Villa North with morning mist low in the valley and fog on the fells behind",ratio:"4 / 3"},mezzanine:{src:`${f}mezzanine.jpg`,alt:"Looking down from the upstairs gallery into the double-height sitting room, glass wall onto the valley",ratio:"3 / 2"},dining:{src:`${f}dining.jpg`,alt:"The round dining table for six, glass walls open to the deck and the valley beyond",ratio:"3 / 2"},bedroom:{src:`${f}bedroom.jpg`,alt:"A bedroom with a dark upholstered bed, folded towels, and a wall sconce either side of the headboard",ratio:"16 / 9"},bedroomAttic:{src:`${f}bedroom-attic.jpg`,alt:"The upstairs bedroom under the sloped roof, a bed against the low wall and a balcony door beyond",ratio:"16 / 9"},living:{src:`${f}living.jpg`,alt:"The sitting room, a grey sectional sofa facing a floor to ceiling glass wall onto the valley",ratio:"3 / 2"},livingSofa:{src:`${f}living-sofa.jpg`,alt:"The sitting room in the evening, a throw blanket over the sofa arm, the valley through the glass behind it",ratio:"3 / 2"},kitchenRun:{src:`${f}kitchen-run.jpg`,alt:"The kitchen counter run, a warm light strip glowing under the shelf above the worktop",ratio:"3 / 2"},kitchenPendants:{src:`${f}kitchen-pendants.jpg`,alt:"The kitchen island under three pendant lights, a vase of fresh flowers and a bowl of fruit on the counter",ratio:"3 / 2"},kitchenDining:{src:`${f}kitchen-dining.jpg`,alt:"The kitchen island under pendant lights, the dining table and valley view visible beyond it",ratio:"3 / 2"},bath:{src:`${f}bath.jpg`,alt:"A bathroom with dark tile, a round backlit mirror, and a black oval basin",ratio:"3 / 2"},concreteDetail:{src:`${f}concrete-detail.jpg`,alt:"A steel wall light set into board-formed concrete, the timber cladding continuing beyond it",ratio:"3 / 2"},claddingDetail:{src:`${f}cladding-detail.jpg`,alt:"A black steel light fixture mounted on dark vertical timber cladding",ratio:"2 / 3"},walkway:{src:`${f}walkway.jpg`,alt:"The concrete walkway along the house, a steel handrail edge in the foreground and timber cladding beyond",ratio:"2 / 3"},winterNight:{alt:"Villa North lit up at dusk in winter, snow patches on the ground and the hot tub visible on its deck"},tourWhales:{src:`${f}tour-whales.jpg`,alt:"A whale surfacing in open water off the north coast",ratio:"3 / 2"},tourGodafoss:{src:`${f}tour-godafoss.jpg`,alt:"A wide waterfall breaking over a dark basalt lip",ratio:"3 / 2"},tourHorses:{src:`${f}tour-horses.jpg`,alt:"Icelandic horses grazing below a mountain ridge",ratio:"3 / 2"},winterRiver:{src:`${f}winter-river.jpg`,alt:"An aerial dusk view in winter, the river system tracing through the valley beyond the lit house",ratio:"3 / 2"},wineGlasses:{src:`${f}wine-glasses.jpg`,alt:"Two wine glasses on the deck rail at golden hour, an amber light strip glowing beneath the rail",ratio:"3 / 2"},tubNightSmall:{src:`${f}tub-night-small.jpg`,alt:"The hot tub at night, warm light glowing under its rim, bare snow-dusted birch trees behind it",ratio:"520 / 546"},livingTall:{src:`${f}living-tall.jpg`,alt:"A portrait view inside the sitting room, the angled timber ceiling and a black steel wall brace above the sofa",ratio:"2 / 3"}},V=[{id:"br1",level:"efri",label:"Bedroom 1",fact:"1 king + 2 single beds",note:"Upstairs. No bathroom on this floor.",photo:l.bedroomAttic},{id:"br2",level:"nedri",label:"Bedroom 2",fact:"1 queen bed",photo:l.bedroom},{id:"br3",level:"nedri",label:"Bedroom 3",fact:"1 queen bed",photo:l.bedroom,photoNote:"Same room type as Bedroom 2; the photo is shared."},{id:"br4",level:"nedri",label:"Bedroom 4",fact:"1 single bed",photo:l.bedroom,photoNote:"The smallest room; the photo is shared with the two queen rooms."},{id:"stofa",level:"nedri",label:"Sitting room",fact:"The sitting room",note:"Floor to ceiling glass on the valley side.",photo:l.living},{id:"eldhus",level:"nedri",label:"Kitchen",fact:"The kitchen",note:"Miele appliances, very well stocked, open to the dining table.",photo:l.kitchenRun},{id:"pallur",level:"nedri",label:"Sundeck",fact:"The sundeck",note:"The hot tub sits at its edge: trees on one side, the valley on the other.",photo:l.wineGlasses}],he={fact:"1.5 bathrooms, both on the main level",detail:"The upstairs bedroom (Bedroom 1) has no bathroom of its own; both bathrooms are downstairs.",photo:l.bath},we={intro:"Below the house, the river Fnjóská curves past the farm at Steinkirkja, with Vaglaskógur, one of Iceland's largest forests, a short walk away.",draws:[{name:"Vaglaskógur",note:"One of Iceland's largest forests, a short walk from the house."},{name:"Fnjóská",note:"A rod-fishing river, right below the hillside."},{name:"Akureyri",note:"Fifteen to twenty minutes through the toll tunnel, Vaðlaheiðargöng. Guests recommend buying the 10-pass."},{name:"9-hole golf course",note:"Nearby, in the same valley."},{name:"Hiking trails",note:"Starting from the forest edge."}]},Q={intro:"Board-formed concrete outside, dark timber cladding, and steel fixtures set flush into both. Inside, the furniture is the real thing.",names:["Minotti","Miele","Stelton"],quote:{quote:"Where other design houses are filled with Ikea products and furniture, this home is the real deal.",author:"Harold",when:"April 2026"}},ee={intro:"The hot tub sits on the edge of the sundeck, trees on one side, the valley on the other, open through the winter.",auroraFact:"Guests have watched the northern lights from the tub, mentioned in three or more reviews.",quote:{quote:"Just wait until you see the view from the hot tub on your first evening there!",author:"Katie",when:"September 2025"}},ae={src:`${f}glow-film.mp4`,poster:`${f}glow-poster.jpg`,posterSmall:`${f}glow-poster-800.jpg`},ye={intro:"Recurring across many guest reviews, the same small ritual greets every arrival.",items:["Fresh flowers","Champagne or sparkling wine","Chocolate","Fruit"]},Pe=[{quote:"Probably the best Airbnb experience I have ever had.",author:"Eric",when:"June 2026"},{quote:"Thoughtful design, unparalleled views. 11/10!",author:"Naomi",when:"July 2026"},{quote:"It was squeaky clean and the epitome of luxury. The house was designed and engineered perfectly.",author:"Kris",when:"August 2025"}],_={guests:7,bedrooms:4,beds:6,baths:"1.5",checkIn:"After 4:00 PM, self check-in with a lockbox",checkOut:"Before 11:00 AM",security:"Exterior security cameras are in use",water:"The hot tub has no gate or lock; a river runs nearby"},se=[{place:"Akureyri",name:"Whale watching",note:"From Akureyri harbour, twenty minutes away",photo:l.tourWhales},{place:"Mývatn",name:"Goðafoss and Mývatn",note:"A day east along the Ring Road",photo:l.tourGodafoss},{place:"Fnjóskadalur",name:"Riding in the valley",note:"Icelandic horses, an hour or an afternoon",photo:l.tourHorses}],te={src:`${f}aerial-film.mp4`,poster:`${f}aerial-film-poster.jpg`,posterSmall:`${f}aerial-film-poster-800.jpg`},Ge={"@context":"https://schema.org","@type":"LodgingBusiness",name:"Villa North",description:"A villa in Fnjóskadalur valley, Þingeyjarsveit, North Iceland, with a view over the river Fnjóská and the farm Steinkirkja. Sleeps seven across four bedrooms, with a private hot tub on the sundeck.",address:{"@type":"PostalAddress",addressLocality:"Fnjóskadalur, Þingeyjarsveit",addressRegion:"Norðurland",addressCountry:"IS"},aggregateRating:{"@type":"AggregateRating",ratingValue:5,reviewCount:58},amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Private hot tub",value:!0},{"@type":"LocationFeatureSpecification",name:"River view",value:!0},{"@type":"LocationFeatureSpecification",name:"Valley view",value:!0},{"@type":"LocationFeatureSpecification",name:"Free parking",value:!0},{"@type":"LocationFeatureSpecification",name:"Kitchen",value:!0}]};A.registerPlugin(pe);const ke=Le("villanorth"),W="#F0F1F2",Z="#17181A",K="#101216",I="'Apfel Grotezk', system-ui, sans-serif",Be="'Onest', system-ui, sans-serif",d="'Azeret Mono', ui-monospace, monospace",ve="(min-width: 1440px) 432px, (min-width: 992px) 30vw, 100vw",me="3 / 2",Ve="(min-width: 1200px) 300px, (min-width: 700px) 44vw, 90vw",je=4600,P="/iceland-redesigns/",ue=()=>typeof matchMedia<"u"&&matchMedia("(hover: none) and (pointer: coarse)").matches,_e=ue()?.35:!0,U=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},o=(t,n)=>`clamp(${n}px, calc(var(--u) * ${t}), ${+(t*1.15).toFixed(1)}px)`;function We(t){c.useEffect(()=>{if(!t)return;const n=document.querySelector(".vn-root");if(!n)return;if(U()){n.classList.add("vn-static");return}n.classList.add("vn-js"),pe.config({ignoreMobileResize:!0});let i=null,u=!1;ue()||Fe(async()=>{const{default:r}=await import("./lenis-niKyKZQP.js");return{default:r}},[]).then(({default:r})=>{u||(i=new r({duration:1.1,smoothWheel:!0}),i.on("scroll",pe.update))});const h=n.querySelector(".vn-nav"),j=new Set,x=new IntersectionObserver(r=>{r.forEach(s=>s.isIntersecting?j.add(s.target):j.delete(s.target)),h==null||h.classList.toggle("is-ink",j.size===0)},{rootMargin:"0px 0px -94% 0px"});n.querySelectorAll("[data-nav-light]").forEach(r=>x.observe(r));const O=new IntersectionObserver(r=>r.forEach(s=>s.isIntersecting&&s.target.classList.add("is-in")),{threshold:.2});n.querySelectorAll(".vn-rv").forEach(r=>O.observe(r));const F=Array.from(n.querySelectorAll(".vn-frame-in"));let E=null;const L=()=>{if(E!=null&&E.isActive)return;const r=window.innerHeight,s=window.innerWidth<992,v=[];for(const z of F){const a=z.parentElement;if(!a)continue;const m=a.getBoundingClientRect();if(m.bottom<-240||m.top>r+240)continue;const p=Number(z.dataset.drift||9),b=s?p*.5:p,y=(m.top+m.height/2-r/2)/(r/2+m.height/2);v.push([z,`translate3d(0,${(-y*b).toFixed(2)}%,0)`])}for(const[z,a]of v)z.style.transform=a},k=[],M=A.context(()=>{const r=n.querySelectorAll(".vn-wm-word"),s=n.querySelector(".vn-wm-rule"),v=n.querySelector(".vn-measure-text");if(r.length){A.set(r,{yPercent:120,opacity:0}),s&&A.set(s,{scaleX:0}),v&&A.set(v,{opacity:0,y:8});const T=A.timeline({paused:!0,delay:.25}).to(s,{scaleX:1,duration:.9,ease:"expo.out"}).to(r,{yPercent:0,opacity:1,duration:1.35,ease:"expo.out",stagger:.1},"-=0.55").to(v,{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.7"),N=()=>{!T.isActive()&&T.progress()===0&&T.play()},H=()=>{document.visibilityState==="visible"&&N()};document.querySelector(".vn-loader")?window.addEventListener("vn:revealed",H,{once:!0}):H();const ie=()=>{document.visibilityState==="visible"&&N()};document.addEventListener("visibilitychange",ie);const B=window.setTimeout(()=>{T.progress()===0&&T.progress(1)},6e3);k.push(()=>{document.removeEventListener("visibilitychange",ie),window.clearTimeout(B)});const ge=n.querySelector(".vn-hero"),fe=n.querySelector(".vn-wordmark");if(ge&&fe){const de={trigger:ge,start:"top top",end:"bottom top",scrub:.6};A.to(r,{y:84,ease:"none",stagger:.04,scrollTrigger:de}),s&&A.to(s,{scaleX:2.8,opacity:0,ease:"none",scrollTrigger:de}),A.to(fe,{opacity:.1,ease:"none",scrollTrigger:de})}}const z=!ue();n.querySelectorAll("[data-vn-headline]").forEach(T=>{const N=T.querySelectorAll(".vn-char");N.length&&A.fromTo(N,{opacity:0,y:10,...z?{filter:"blur(12px)"}:null},{opacity:1,y:0,...z?{filter:"blur(0px)"}:null,duration:.6,ease:"power2.out",stagger:.02,clearProps:z?"filter":"",scrollTrigger:{trigger:T,start:"top 88%",once:!0}})});const a=n.querySelector(".vn-drawing-inner"),m=n.querySelector(".vn-elev-line"),p=n.querySelector(".vn-elev-secondary"),b=n.querySelector(".vn-elev-mullions"),y=n.querySelector(".vn-elev-hatch"),D=n.querySelector(".vn-elev-svg"),Y=n.querySelector(".vn-elev-photo"),re=n.querySelector(".vn-elev-cap-sketch"),J=n.querySelector(".vn-elev-cap-photo"),le=T=>{if(!T||!("getTotalLength"in T))return;const N=T.getTotalLength();A.set(T,{strokeDasharray:N,strokeDashoffset:N})};if(le(m),le(p),le(b),y&&A.set(y,{opacity:0}),Y&&A.set(Y,{opacity:0}),J&&A.set(J,{opacity:0}),a&&m&&Y&&D){const T=[m,p].filter(Boolean);if(window.innerWidth>=768){const N=A.timeline({scrollTrigger:{trigger:a,start:"top top",end:"+=220%",pin:!0,scrub:_e,anticipatePin:1,invalidateOnRefresh:!0}});E=N.scrollTrigger??null,N.to(T,{strokeDashoffset:0,ease:"none",duration:.4},0),b&&N.to(b,{strokeDashoffset:0,ease:"none",duration:.22},.16),y&&N.to(y,{opacity:.3,ease:"none",duration:.14},.38),re&&N.to(re,{opacity:0,ease:"none",duration:.08},.58),N.to(D,{opacity:0,ease:"none",duration:.2},.6),N.to(Y,{opacity:1,ease:"none",duration:.2},.6),J&&N.to(J,{opacity:1,ease:"none",duration:.1},.68)}else{const N=new IntersectionObserver(H=>{H.forEach(ie=>{if(!ie.isIntersecting)return;N.disconnect();const B=A.timeline();B.to(T,{strokeDashoffset:0,ease:"power1.inOut",duration:1.1}),b&&B.to(b,{strokeDashoffset:0,ease:"power1.inOut",duration:.6},"-=0.35"),y&&B.to(y,{opacity:.3,duration:.5},"-=0.2"),re&&B.to(re,{opacity:0,duration:.3}),B.to(D,{opacity:0,duration:.6},"<"),B.to(Y,{opacity:1,duration:.6},"<"),J&&B.to(J,{opacity:1,duration:.4},"-=0.3")})},{threshold:.35});N.observe(a),k.push(()=>N.disconnect())}}const ce=n.querySelector(".vn-glow");if(ce){const T=new IntersectionObserver(N=>N.forEach(H=>{ce.classList.toggle("is-dark",H.isIntersecting),$e(H.isIntersecting?K:W)}),{threshold:.3});T.observe(ce),k.push(()=>T.disconnect())}},n),w=n.querySelector(".vn-drawing"),$=()=>w==null?void 0:w.classList.add("vn-force-resolved"),q=()=>w==null?void 0:w.classList.remove("vn-force-resolved");w==null||w.addEventListener("focusin",$),w==null||w.addEventListener("focusout",q),k.push(()=>{w==null||w.removeEventListener("focusin",$),w==null||w.removeEventListener("focusout",q)});let C=-1;const R=r=>{const s=window.scrollY;s!==C&&(C=s,L()),i==null||i.raf(r*1e3)},g=()=>{C=-1};return window.addEventListener("resize",g),window.addEventListener("orientationchange",g),k.push(()=>{window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g)}),A.ticker.add(R),A.ticker.lagSmoothing(0),L(),()=>{A.ticker.remove(R),O.disconnect(),x.disconnect(),k.forEach(r=>r()),M.revert(),u=!0,i==null||i.destroy()}},[t])}function G({text:t,size:n,floor:i,as:u="h2",className:h="",measure:j}){return e.jsx(u,{"data-vn-headline":!0,"aria-label":t,className:`vn-headline ${h}`,style:{fontSize:o(n,i),maxWidth:j?`calc(var(--u) * ${j})`:void 0},children:t.split(" ").map((x,O,F)=>e.jsxs("span",{className:"vn-word","aria-hidden":"true",children:[Array.from(x).map((E,L)=>e.jsx("span",{className:"vn-char",children:E},L)),O<F.length-1?e.jsx("span",{className:"vn-char",children:" "}):null]},O))})}function S({photo:t,className:n="",priority:i=!1,maxWidth:u,sizes:h,drift:j=9,ratio:x}){return e.jsxs("figure",{className:`vn-frame vn-rv ${n}`,style:{"--vn-ar":x??t.ratio,...u?{"--vn-fw":`${u}px`}:null},children:[e.jsx("svg",{className:"vn-frame-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("rect",{x:"0.6",y:"0.6",width:"98.8",height:"98.8"})}),e.jsx("div",{className:"vn-frame-in","data-drift":j,style:{"--dz":`${Math.max(9,j*1.35)}%`},children:e.jsx("img",{src:t.src,srcSet:oe(t.src),sizes:h??"(max-width: 899px) 100vw, 50vw",alt:t.alt,loading:i?"eager":"lazy",decoding:"async"})})]})}function Ue({tour:t}){const n=e.jsxs(e.Fragment,{children:[e.jsx(S,{photo:t.photo,className:"vn-tour-shot",ratio:"4 / 5",sizes:Ve,drift:5}),e.jsx("span",{className:"vn-tour-veil","aria-hidden":"true"}),e.jsxs("span",{className:"vn-tour-over",children:[e.jsx("span",{className:"vn-tour-place",children:t.place}),e.jsx("span",{className:"vn-tour-name",children:t.name}),e.jsx("span",{className:"vn-tour-cta","aria-hidden":"true",children:"→"})]})]});return e.jsx("article",{className:"vn-tour-plate",tabIndex:0,children:n})}const Ye=[{photo:l.concreteDetail,label:"Board-formed concrete"},{photo:l.claddingDetail,label:"Dark timber cladding"},{photo:l.walkway,label:"The walkway"}];function He(){const[t,n]=c.useState(null),i=U();return e.jsx("div",{className:"vn-mat-expand",role:"group","aria-label":"Materials",children:Ye.map((u,h)=>e.jsxs(qe.button,{type:"button",className:"vn-mat-panel","aria-expanded":t===h,"aria-current":t===h?"true":void 0,onMouseEnter:()=>n(h),onFocus:()=>n(h),onClick:()=>n(h),animate:{flexGrow:t===h?2.2:1},transition:{duration:i?0:.5,ease:[.25,1,.5,1]},children:[e.jsx("img",{src:u.photo.src,srcSet:oe(u.photo.src),sizes:"(max-width: 767px) 100vw, 33vw",alt:u.photo.alt,loading:"lazy",decoding:"async"}),e.jsx("span",{className:`vn-mat-scrim ${t===h?"is-active":""}`,"aria-hidden":"true"}),e.jsx("span",{className:`vn-mat-label ${t===h?"is-active":""}`,children:u.label})]},u.label))})}const Ke=()=>{if(typeof window>"u"||U())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("vn_seen")}catch{return!0}};function Je({onDone:t}){const[n,i]=c.useState(0),[u,h]=c.useState(!1);return c.useEffect(()=>{try{sessionStorage.setItem("vn_seen","1")}catch{}const j=performance.now();let x=0,O=0,F=!1;const E=new Image;E.decoding="async";const L=()=>{F=!0};E.addEventListener("load",L,{once:!0}),E.addEventListener("error",L,{once:!0}),E.src=l.aerialSunset.src,E.complete&&(F=!0);let k=!1;document.fonts.ready.then(()=>{k=!0});const M=1100,w=2400,$=()=>{const q=performance.now()-j;let C=(F?55:Math.min(50,q/24))+(k?45:0);q>=w&&(C=100),O+=(C-O)*.12;const R=Math.min(100,Math.round(O));if(i(R),R>=100&&q>=M){h(!0),window.setTimeout(t,950);return}x=requestAnimationFrame($)};return x=requestAnimationFrame($),()=>cancelAnimationFrame(x)},[t]),e.jsxs("div",{className:`vn-loader ${u?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsx("p",{className:"vn-loader-mark",style:{backgroundPositionX:`${100-n}%`},children:"VILLA NORTH"}),e.jsxs("p",{className:"vn-loader-pct",children:[n,"%"]})]})}const Ee=864e5,Xe=(t,n)=>{const i=new Date(`${t}T12:00:00`);return new Date(i.getTime()+n*Ee).toISOString().slice(0,10)},Ne=t=>String(t).padStart(2,"0"),Ze=(t,n,i)=>`${t}-${Ne(n+1)}-${Ne(i)}`,Qe=(t,n)=>new Date(t,n+1,0).getDate(),ea=(t,n)=>(new Date(t,n,1).getDay()+6)%7,Te=(t,n)=>Math.round((new Date(`${n}T12:00:00`).getTime()-new Date(`${t}T12:00:00`).getTime())/Ee),aa=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ta=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ne=t=>{const n=new Date(`${t}T12:00:00`);return`${ta[n.getDay()]} ${n.getDate()} ${aa[n.getMonth()]}`},na=(t,n)=>new Date(t,n,1).toLocaleDateString("en-GB",{month:"long",year:"numeric"}),oa=["M","T","W","T","F","S","S"];function ra({stay:t,onChange:n,minDate:i}){const u=c.useMemo(()=>{const g=new Date(`${i}T12:00:00`);return{y:g.getFullYear(),m:g.getMonth()}},[i]),[h,j]=c.useState(u),[x,O]=c.useState(null),[F,E]=c.useState(t.from||i),L=c.useRef(!1),k=t.to??(t.from&&x&&x>t.from?x:null),M=g=>j(r=>{const s=new Date(r.y,r.m+g,1),v={y:s.getFullYear(),m:s.getMonth()};return v.y*12+v.m<u.y*12+u.m?r:v}),w=h.y*12+h.m<=u.y*12+u.m,$=g=>{!t.from||t.to||g<=t.from?n({from:g,to:null}):n({from:t.from,to:g})},q=g=>{var y;const s={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7,PageUp:-28,PageDown:28}[g.key];if(s===void 0)return;g.preventDefault();const v=((y=g.target.dataset)==null?void 0:y.vnDay)||F,z=Xe(v,s);if(z<i)return;L.current=!0,E(z);const[a,m]=[Number(z.slice(0,4)),Number(z.slice(5,7))-1],p=a*12+m,b=h.y*12+h.m;if(p<b)j({y:a,m});else if(p>b+1){const D=new Date(a,m-1,1);j({y:D.getFullYear(),m:D.getMonth()})}};c.useEffect(()=>{if(!L.current)return;L.current=!1;const g=document.querySelector(`[data-vn-day="${F}"]`);g==null||g.focus()},[F]);const C=g=>{const r=new Date(h.y,h.m+g,1),s=r.getFullYear(),v=r.getMonth(),z=Array.from({length:ea(s,v)},()=>null);for(let a=1;a<=Qe(s,v);a++)z.push(Ze(s,v,a));for(;z.length%7;)z.push(null);return e.jsxs("div",{className:"vn-cal-month",children:[e.jsx("p",{className:"vn-cal-title",children:na(s,v)}),e.jsx("div",{className:"vn-cal-dows","aria-hidden":"true",children:oa.map((a,m)=>e.jsx("span",{className:"vn-cal-dow",children:a},m))}),e.jsx("div",{className:"vn-cal-grid",role:"grid",onKeyDown:q,children:z.map((a,m)=>{if(!a)return e.jsx("span",{className:"vn-cal-cell is-blank"},`b${m}`);const p=a<i,b=a===t.from,y=!!k&&a===k,D=!!t.from&&!!k&&a>t.from&&a<k,Y=["vn-cal-cell",b?"is-from":"",y?"is-to":"",D?"is-in":""].filter(Boolean).join(" ");return e.jsx("span",{className:Y,children:e.jsx("button",{type:"button","data-vn-day":a,className:`vn-cal-day ${b||y?"is-end":""}`,disabled:p,tabIndex:a===F?0:-1,"aria-label":ne(a),"aria-pressed":b||y,onFocus:()=>E(a),onMouseEnter:()=>O(a),onMouseLeave:()=>O(null),onClick:()=>$(a),children:Number(a.slice(8))})},a)})})]},`${s}-${v}`)},R=t.from&&k?Te(t.from,k):0;return e.jsxs("div",{className:"vn-cal",children:[e.jsxs("div",{className:"vn-cal-head",children:[e.jsx("span",{className:"vn-field-label",children:"Your dates"}),e.jsxs("span",{className:"vn-cal-nav",children:[e.jsx("button",{type:"button",onClick:()=>M(-1),disabled:w,"aria-label":"Previous month",children:"←"}),e.jsx("button",{type:"button",onClick:()=>M(1),"aria-label":"Next month",children:"→"})]})]}),e.jsxs("div",{className:"vn-cal-months",children:[C(0),C(1)]}),e.jsx("div",{className:"vn-cal-dim","aria-live":"polite",children:t.from&&k?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"vn-cal-dim-end",children:[e.jsx("em",{children:"Arrival"}),ne(t.from)]}),e.jsx("span",{className:"vn-cal-dim-rule is-left"}),e.jsxs("span",{className:"vn-cal-dim-figure",children:[R," ",R===1?"night":"nights"]}),e.jsx("span",{className:"vn-cal-dim-rule is-right"}),e.jsxs("span",{className:"vn-cal-dim-end is-right",children:[e.jsx("em",{children:"Departure"}),ne(k)]})]}):e.jsx("p",{className:"vn-cal-dim-empty",children:t.from?"Now choose the day you leave.":"Choose the day you arrive."})})]})}function ia({onOpen:t}){const[n,i]=c.useState(0);c.useEffect(()=>{if(U())return;const h=window.setInterval(()=>i(j=>(j+1)%se.length),je);return()=>window.clearInterval(h)},[]);const u=se[n];return e.jsx("a",{className:"vn-hero-tours",href:"#tours",onClick:t,"aria-label":"See example tours",children:e.jsxs("span",{className:"vn-ht-stack",children:[se.map((h,j)=>e.jsx("img",{className:`vn-ht-img ${j===n?"is-on":""}`,src:h.photo.src,srcSet:oe(h.photo.src),sizes:"260px",alt:"",loading:"eager",decoding:"async"},h.name)),e.jsx("span",{className:"vn-ht-veil"}),e.jsx("span",{className:"vn-ht-marks","aria-hidden":"true"}),e.jsx("span",{className:"vn-ht-mat","aria-hidden":"true"}),e.jsx("span",{className:"vn-ht-prog","aria-hidden":"true",children:e.jsx("span",{className:"vn-ht-prog-fill",style:{animationDuration:`${je}ms`}},n)}),e.jsxs("span",{className:"vn-ht-stamp",children:["Tours · examples",e.jsx("span",{className:"vn-ht-count",children:String(n+1).padStart(2,"0")})]}),e.jsxs("span",{className:"vn-ht-body",children:[e.jsx("span",{className:"vn-ht-place",children:u.place}),e.jsx("span",{className:"vn-ht-name",children:u.name})]},u.name),e.jsx("span",{className:"vn-ht-cta","aria-hidden":"true",children:"→"})]})})}function sa(){const[t,n]=c.useState(""),[i,u]=c.useState(""),[h,j]=c.useState(""),[x,O]=c.useState({from:null,to:null}),[F,E]=c.useState(7),[L,k]=c.useState(""),[M,w]=c.useState(null),[$,q]=c.useState(null),C=c.useMemo(()=>new Date().toISOString().slice(0,10),[]),R=x.from&&x.to?Te(x.from,x.to):0;function g(r){if(r.preventDefault(),!x.from||!x.to){w("Choose the day you arrive and the day you leave.");return}if(!t.trim()||!i.trim()){w("A name and an email are needed so the owner can reply.");return}w(null);const s={id:`vn-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,resourceId:"villanorth",date:x.from,endDate:x.to,people:F,customer:{name:t.trim(),phone:h.trim(),email:i.trim()},note:L.trim()||void 0,quote:{lines:[],total:0,deposit:0,units:R,estimate:!0},status:"REQUESTED",createdAt:new Date().toISOString()};Me.add(s),q(s)}if($){const r=$.endDate??$.date;return e.jsxs("div",{className:"vn-book-done",role:"status",children:[e.jsx("p",{className:"vn-book-done-title",children:"Your request is on its way."}),e.jsxs("p",{className:"vn-book-done-body",children:[ne($.date)," to ",ne(r),", ",$.quote.units," ",$.quote.units===1?"night":"nights",", ",$.people," ",$.people===1?"guest":"guests",". The owner confirms each request personally. The price for your dates comes with the reply to ",$.customer.email,"."]}),e.jsxs("p",{className:"vn-book-note",children:["This is a prototype. The request lives only in this browser."," ",e.jsx(ze,{className:"vn-a",to:"/preview/villanorth/stjornbord",children:"See the owner's side"})," ","to watch it arrive."]}),e.jsx("button",{type:"button",className:"vn-ghost",onClick:()=>q(null),children:"Make another request"})]})}return e.jsxs("form",{className:"vn-book-form",onSubmit:g,noValidate:!0,children:[e.jsxs("div",{className:"vn-book-grid",children:[e.jsx(ra,{stay:x,onChange:O,minDate:C}),e.jsxs("label",{className:"vn-field vn-field-guests",children:[e.jsx("span",{className:"vn-field-label",children:"Guests"}),e.jsx("select",{name:"guests",value:F,onChange:r=>E(Number(r.target.value)),children:[1,2,3,4,5,6,7].map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsx("span",{className:"vn-field-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",value:t,required:!0,onChange:r=>n(r.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsx("span",{className:"vn-field-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",inputMode:"email",value:i,required:!0,onChange:r=>u(r.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsxs("span",{className:"vn-field-label",children:["Phone ",e.jsx("span",{className:"vn-optional",children:"(optional)"})]}),e.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",inputMode:"tel",value:h,onChange:r=>j(r.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsxs("span",{className:"vn-field-label",children:["Anything you would like the owner to know ",e.jsx("span",{className:"vn-optional",children:"(optional)"})]}),e.jsx("textarea",{rows:3,name:"note",value:L,onChange:r=>k(r.target.value)})]})]}),M&&e.jsx("p",{className:"vn-field-error",role:"alert",children:M}),xe()?e.jsx("a",{className:"vn-cta vn-cta-block",href:Re({checkin:x.from,checkout:x.to,adults:F}),children:"Continue to secure booking"}):e.jsx("button",{type:"submit",className:"vn-cta vn-cta-block",children:"Enquire about your stay"}),e.jsx("p",{className:"vn-book-note",children:xe()?"Your dates carry over. Availability, the exact price and payment are all handled on the secure booking page.":"No payment today. Send your preferred dates and the owner replies with availability and the nightly price. Payment is settled on arrival."})]})}function La(){const[t,n]=c.useState(!1),[i,u]=c.useState(V[0].id),[h,j]=c.useState(!1),[x,O]=c.useState(!1),F=c.useRef(null),E=c.useRef([]),L=c.useRef(null),k=c.useRef(null),[M,w]=c.useState(!1),[$,q]=c.useState(!1);c.useEffect(()=>{$e(W),document.title="Villa North",n(!0)},[]),c.useEffect(()=>Ae(),[]),We(t),c.useEffect(()=>{const a=[[k,w],[L,q]],m=new IntersectionObserver(p=>{for(const b of p){if(!b.isIntersecting)continue;const y=a.find(([D])=>D.current===b.target);y==null||y[1](!0),m.unobserve(b.target)}},{rootMargin:"150% 0px"});for(const[p]of a)p.current&&m.observe(p.current);return()=>m.disconnect()},[]),c.useEffect(()=>{if(U())return;const a=[];for(const m of[L,k]){const p=m.current;if(!p)continue;p.muted=!0;const b=()=>{var y;p.muted=!0,(y=p.play())==null||y.catch(()=>{})};p.addEventListener("canplay",b),p.addEventListener("loadeddata",b),b(),a.push(()=>{p.removeEventListener("canplay",b),p.removeEventListener("loadeddata",b)})}return()=>a.forEach(m=>m())},[M,$]);const[C,R]=c.useState(Ke),[g,r]=c.useState(!1),s=V.find(a=>a.id===i)??V[0],v=a=>m=>{m.preventDefault();const p=()=>{var b;(b=document.getElementById(a))==null||b.scrollIntoView({behavior:U()?"auto":"smooth"}),history.replaceState(null,"",`#${a}`)};if(!g){p();return}r(!1),requestAnimationFrame(()=>requestAnimationFrame(p))};c.useEffect(()=>{if(!g)return;const a=p=>{p.key==="Escape"&&r(!1)},m=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",a),()=>{document.body.style.overflow=m,window.removeEventListener("keydown",a)}},[g]);const z=(a,m)=>{var y;if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"].includes(a.key))return;a.preventDefault();const p=a.key==="ArrowDown"||a.key==="ArrowRight"?1:-1,b=(m+p+V.length)%V.length;(y=E.current[b])==null||y.focus()};return e.jsxs("div",{ref:F,className:"vn-root",children:[e.jsx("style",{children:la}),C&&e.jsx(Je,{onDone:()=>{R(!1),window.dispatchEvent(new Event("vn:revealed"))}}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Ge)}}),e.jsx(Oe,{company:ke}),e.jsxs("header",{className:"vn-nav",children:[e.jsxs("a",{className:"vn-nav-mark",href:"#top",onClick:v("top"),children:[e.jsx("span",{className:"vn-logo-mark","aria-hidden":"true"}),"VILLA NORTH"]}),e.jsxs("nav",{className:"vn-nav-links","aria-label":"Page",children:[e.jsx("a",{href:"#drawing",onClick:v("drawing"),children:"The house"}),e.jsx("a",{href:"#rooms",onClick:v("rooms"),children:"Rooms"}),e.jsx("a",{href:"#gallery",onClick:v("gallery"),children:"Gallery"}),e.jsx("a",{href:"#tours",onClick:v("tours"),children:"Tours"}),e.jsx("a",{href:"#guests",onClick:v("guests"),children:"Guests"})]}),e.jsx("a",{className:"vn-nav-cta",href:"#booking",onClick:v("booking"),children:"Book now"}),e.jsxs("button",{type:"button",className:`vn-burger ${g?"is-open":""}`,"aria-label":g?"Close menu":"Open menu","aria-expanded":g,"aria-controls":"vn-menu",onClick:()=>r(a=>!a),children:[e.jsx("span",{"aria-hidden":"true"}),e.jsx("span",{"aria-hidden":"true"})]})]}),e.jsxs("div",{id:"vn-menu",className:`vn-menu ${g?"is-open":""}`,"aria-hidden":!g,children:[e.jsxs("nav",{className:"vn-menu-links","aria-label":"Sections",children:[e.jsx("a",{href:"#drawing",onClick:v("drawing"),children:"The house"}),e.jsx("a",{href:"#rooms",onClick:v("rooms"),children:"Rooms"}),e.jsx("a",{href:"#gallery",onClick:v("gallery"),children:"Gallery"}),e.jsx("a",{href:"#tours",onClick:v("tours"),children:"Tours"}),e.jsx("a",{href:"#guests",onClick:v("guests"),children:"Guests"}),e.jsx("a",{href:"#contact",onClick:v("contact"),children:"Finding the house"})]}),e.jsx("a",{className:"vn-menu-cta",href:"#booking",onClick:v("booking"),children:"Book now"}),e.jsxs("p",{className:"vn-menu-foot",children:[e.jsx("a",{href:"tel:+3548449808",children:"+354 844 9808"}),e.jsx("a",{href:"mailto:villanorthiceland@gmail.com",children:"villanorthiceland@gmail.com"})]})]}),e.jsxs("section",{className:"vn-hero",id:"top","data-nav-light":!0,children:[e.jsx("div",{className:"vn-hero-media vn-rv",children:e.jsx("img",{src:l.aerialSunset.src,srcSet:oe(l.aerialSunset.src),sizes:"100vw",alt:l.aerialSunset.alt,loading:"eager",decoding:"async"})}),e.jsxs("h1",{className:"vn-wordmark","aria-label":"Villa North",children:[e.jsx("span",{className:"vn-wm-rule","aria-hidden":"true"}),e.jsxs("span",{className:"vn-wm-row","aria-hidden":"true",children:[e.jsx("span",{className:"vn-wm-line",children:e.jsx("span",{className:"vn-wm-word",children:"VILLA"})})," ",e.jsx("span",{className:"vn-wm-line",children:e.jsx("span",{className:"vn-wm-word",children:"NORTH"})})]})]}),e.jsxs("div",{className:"vn-hero-block",children:[e.jsx("p",{className:"vn-measure-text",children:"Sleeps 7 · four bedrooms"}),e.jsx("p",{className:"vn-hero-sub",children:"Designed with precision, built for gathering. An engineer's house of glass and dark timber above Fnjóskadalur, made for seven."}),e.jsx("a",{className:"vn-cta",href:"#booking",onClick:v("booking"),children:"Book now"})]}),e.jsx(ia,{onOpen:v("tours")})]}),e.jsxs("section",{className:"vn-drawing",id:"drawing",children:[e.jsxs("div",{className:"vn-drawing-copy",children:[e.jsx(G,{text:"Every angle, decided first.",size:64,floor:32,measure:600}),e.jsx("p",{className:"vn-body vn-rv",children:"The owner trained as an engineer, and every line feels intentional: an asymmetric roofline, long glass on one side and dark timber cladding on the other, cut into a hillside above Fnjóskadalur."})]}),e.jsxs("div",{className:"vn-drawing-inner",children:[e.jsx("div",{className:"vn-elev-svg",children:e.jsxs("svg",{className:"vn-elev",viewBox:"0 0 1200 802",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[e.jsxs("defs",{children:[e.jsx("pattern",{id:"vnHatch",width:"9",height:"9",patternTransform:"rotate(45)",patternUnits:"userSpaceOnUse",children:e.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"9",stroke:Z,strokeWidth:"1"})}),e.jsx("clipPath",{id:"vnGableClip",children:e.jsx("path",{d:"M572,272 L290,384 L289,660 L607,663 L607,204 Z"})})]}),e.jsx("rect",{className:"vn-elev-hatch",x:"289",y:"204",width:"318",height:"459",fill:"url(#vnHatch)",clipPath:"url(#vnGableClip)"}),e.jsx("path",{className:"vn-elev-secondary",d:"M572,272 L290,384 L289,660 L607,663"}),e.jsx("path",{className:"vn-elev-mullions",d:"M604,459 L983,459 M702,271 L714,660 M877,350 L885,660 M976,390 L989,660"}),e.jsx("path",{className:"vn-elev-line",d:"M570,151 L1030,368 L1033,525 M607,204 L607,663 L983,660"})]})}),e.jsx("div",{className:"vn-elev-photo",children:e.jsx("img",{src:l.glassGrid.src,srcSet:oe(l.glassGrid.src),sizes:"100vw",alt:l.glassGrid.alt,loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"vn-elev-caps",children:[e.jsx("p",{className:"vn-elev-cap vn-elev-cap-sketch",children:"The elevation, traced from the photograph line for line."}),e.jsx("p",{className:"vn-elev-cap vn-elev-cap-photo",children:"Villa North, Fnjóskadalur valley."})]})]}),e.jsx("p",{className:"vn-elev-credit vn-rv",children:"Traced to the pixel from this exact photograph, the owner's own: the roofline, both posts, the window grid and the ground it stands on."}),e.jsxs("div",{className:"vn-drawing-inside",children:[e.jsxs("div",{className:"vn-drawing-inside-copy",children:[e.jsx("p",{className:"vn-drawing-inside-kicker",children:"The same roof, from inside"}),e.jsx("p",{className:"vn-drawing-inside-line",children:"The angle drawn above is the same angle overhead in here. The roofline traced outside is the ceiling line inside."})]}),e.jsx(S,{photo:l.livingTall,className:"vn-drawing-inside-fig",drift:7})]})]}),e.jsxs("section",{className:"vn-valley",id:"valley",children:[e.jsxs("div",{className:"vn-valley-copy",children:[e.jsx(G,{text:"The valley below.",size:56,floor:30,measure:520}),e.jsx("p",{className:"vn-body vn-rv",children:we.intro}),e.jsx("dl",{className:"vn-draws vn-rv",children:we.draws.map(a=>e.jsxs("div",{children:[e.jsx("dt",{children:a.name}),e.jsx("dd",{children:a.note})]},a.name))})]}),e.jsxs("div",{className:"vn-valley-figs",children:[e.jsx(S,{photo:l.aerialRiver,className:"vn-valley-main",drift:11}),e.jsxs("div",{className:"vn-valley-duo",children:[e.jsx(S,{photo:l.aerialMist,className:"vn-valley-duo-a",drift:8}),e.jsx(S,{photo:l.aerialSunsetB,className:"vn-valley-duo-b",drift:8})]})]})]}),e.jsx("section",{className:"vn-film",id:"film","aria-label":"Aerial film of the house",children:e.jsxs("div",{className:"vn-film-bleed","data-nav-light":!0,children:[e.jsx("img",{src:te.poster,srcSet:`${te.posterSmall} 800w, ${te.poster} 1600w`,sizes:"100vw",alt:l.aerialSunset.alt,loading:"lazy",decoding:"async",className:"vn-film-poster"}),e.jsx("video",{ref:k,className:`vn-film-video ${x?"is-errored":""}`,poster:te.poster,autoPlay:!U(),muted:!0,loop:!0,playsInline:!0,preload:M?"metadata":"none","aria-hidden":"true",onError:()=>O(!0),children:M?e.jsx("source",{src:te.src,type:"video/mp4"}):null}),e.jsx("div",{className:"vn-film-caps",children:e.jsx("p",{className:"vn-film-label",children:"From the air"})})]})}),e.jsxs("section",{className:"vn-rooms",id:"rooms",children:[e.jsx(G,{text:"Plan who sleeps where.",size:64,floor:32,measure:620}),e.jsx("p",{className:"vn-body vn-rv",children:"A simple guide to how the villa flows: four bedrooms, the sitting room, the kitchen and the sundeck. A schematic, not to scale."}),e.jsx(S,{photo:l.mezzanine,className:"vn-rooms-lead",drift:11}),e.jsxs("div",{className:"vn-rooms-explorer",children:[e.jsx("div",{className:"vn-rooms-index",role:"group","aria-label":"Rooms",children:V.map((a,m)=>e.jsxs("div",{className:"vn-rooms-index-item",children:[(m===0||V[m-1].level!==a.level)&&e.jsx("p",{className:"vn-rooms-zone-label",children:a.level==="efri"?"Upstairs":"Main level"}),e.jsxs("button",{type:"button",ref:p=>{E.current[m]=p},className:`vn-room-btn ${i===a.id?"is-active":""}`,onMouseEnter:()=>u(a.id),onFocus:()=>u(a.id),onClick:()=>u(a.id),onKeyDown:p=>z(p,m),"aria-pressed":i===a.id,children:[e.jsx("span",{className:"vn-room-btn-label",children:a.label}),e.jsx("span",{className:"vn-room-btn-fact",children:a.fact})]})]},a.id))}),e.jsxs("div",{className:"vn-rooms-pane","aria-live":"polite",children:[e.jsx(S,{photo:s.photo,className:"vn-rooms-pane-frame",sizes:"(max-width: 899px) 100vw, 46vw",drift:8}),e.jsx("p",{className:"vn-rooms-pane-label",children:s.label}),e.jsxs("p",{className:"vn-rooms-pane-fact",children:[s.fact,s.note?` · ${s.note}`:""]}),s.photoNote&&e.jsx("p",{className:"vn-rooms-pane-note",children:s.photoNote})]}),e.jsx("div",{className:"vn-rooms-acc",children:V.map(a=>e.jsxs("div",{className:"vn-rooms-acc-item",children:[e.jsxs("button",{type:"button",className:`vn-rooms-acc-btn ${i===a.id?"is-open":""}`,onClick:()=>u(a.id),"aria-expanded":i===a.id,children:[e.jsx("span",{children:a.label}),e.jsx("span",{className:"vn-rooms-acc-fact",children:a.fact})]}),e.jsx("div",{className:`vn-rooms-acc-panel ${i===a.id?"is-open":""}`,children:e.jsxs("div",{className:"vn-rooms-acc-panel-in",children:[e.jsx(S,{photo:a.photo}),a.note&&e.jsx("p",{className:"vn-rooms-acc-note",children:a.note}),a.photoNote&&e.jsx("p",{className:"vn-rooms-acc-note",children:a.photoNote})]})})]},a.id))})]}),e.jsxs("div",{className:"vn-rooms-bath vn-rv",children:[e.jsx(S,{photo:he.photo,className:"vn-rooms-bath-frame",drift:6}),e.jsxs("div",{children:[e.jsx("p",{className:"vn-rooms-bath-fact",children:he.fact}),e.jsxs("p",{className:"vn-rooms-bath-detail",children:["Note: ",he.detail]})]})]})]}),e.jsxs("section",{className:"vn-materials",id:"materials",children:[e.jsx(G,{text:"Furnished like the real thing.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:Q.intro}),e.jsx("ul",{className:"vn-materials-names vn-rv",children:Q.names.map(a=>e.jsx("li",{children:a},a))}),e.jsx(He,{}),e.jsxs("blockquote",{className:"vn-quote-block vn-rv",children:[e.jsxs("p",{children:["“",Q.quote.quote,"”"]}),e.jsxs("cite",{children:[Q.quote.author,", ",Q.quote.when]})]})]}),e.jsxs("section",{className:"vn-glow",id:"glow","data-nav-light":!0,children:[e.jsxs("div",{className:"vn-glow-bleed","data-nav-light":!0,children:[e.jsx("img",{src:ae.poster,srcSet:`${ae.posterSmall} 800w, ${ae.poster} 1200w`,sizes:"100vw",alt:l.winterNight.alt,loading:"lazy",decoding:"async",className:"vn-glow-poster"}),e.jsx("video",{ref:L,className:`vn-glow-video ${h?"is-errored":""}`,poster:ae.poster,autoPlay:!U(),muted:!0,loop:!0,playsInline:!0,preload:$?"metadata":"none","aria-hidden":"true",onError:()=>j(!0),children:$?e.jsx("source",{src:ae.src,type:"video/mp4"}):null}),e.jsxs("div",{className:"vn-glow-caps",children:[e.jsx("p",{className:"vn-glow-label",children:"After dark"}),e.jsx("p",{className:"vn-glow-cap",children:ee.intro})]})]}),e.jsxs("div",{className:"vn-glow-row",children:[e.jsx(S,{photo:l.wineGlasses,className:"vn-glow-wine",ratio:me,sizes:ve,drift:9}),e.jsxs("div",{className:"vn-glow-tub-col",children:[e.jsx(S,{photo:l.tubNightSmall,className:"vn-glow-tub",ratio:me,sizes:ve,drift:6}),e.jsx("p",{className:"vn-glow-fact",children:ee.auroraFact})]}),e.jsx(S,{photo:l.winterRiver,className:"vn-glow-river",ratio:me,sizes:ve,drift:7})]}),e.jsxs("blockquote",{className:"vn-quote-block vn-glow-quote vn-rv",children:[e.jsxs("p",{children:["“",ee.quote.quote,"”"]}),e.jsxs("cite",{children:[ee.quote.author,", ",ee.quote.when]})]})]}),e.jsxs("section",{className:"vn-welcome",id:"welcome",children:[e.jsxs("div",{className:"vn-welcome-copy",children:[e.jsx(G,{text:"Ready before you arrive.",size:56,floor:30,measure:520}),e.jsx("p",{className:"vn-body vn-rv",children:ye.intro}),e.jsx("ul",{className:"vn-ritual-list vn-rv",children:ye.items.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs("div",{className:"vn-welcome-figs",children:[e.jsx(S,{photo:l.kitchenPendants,className:"vn-welcome-main"}),e.jsxs("div",{className:"vn-welcome-duo",children:[e.jsx(S,{photo:l.dining,className:"vn-welcome-duo-a"}),e.jsx(S,{photo:l.livingSofa,className:"vn-welcome-duo-b"})]})]})]}),e.jsxs("section",{className:"vn-gallery",id:"gallery",children:[e.jsxs("div",{className:"vn-gallery-head",children:[e.jsx(G,{text:"The house in pictures.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:"Glass, dark timber and the valley, room by room."})]}),e.jsxs("div",{className:"vn-gallery-grid",children:[e.jsx(S,{photo:l.living,className:"vn-g-a",drift:7,ratio:"16 / 10",sizes:"(max-width: 899px) 100vw, 62vw"}),e.jsx(S,{photo:l.bedroom,className:"vn-g-b",drift:6,ratio:"4 / 5",sizes:"(max-width: 899px) 100vw, 31vw"}),e.jsx(S,{photo:l.kitchenDining,className:"vn-g-c",drift:6,ratio:"1 / 1",sizes:"(max-width: 899px) 100vw, 31vw"}),e.jsx(S,{photo:l.bath,className:"vn-g-d",drift:6,ratio:"1 / 1",sizes:"(max-width: 899px) 100vw, 31vw"}),e.jsx(S,{photo:l.bedroomAttic,className:"vn-g-e",drift:6,ratio:"1 / 1",sizes:"(max-width: 899px) 100vw, 31vw"}),e.jsx(S,{photo:l.gridSunset,className:"vn-g-f",drift:9,ratio:"21 / 9",sizes:"100vw"})]})]}),e.jsx("section",{className:"vn-tours",id:"tours",children:e.jsxs("div",{className:"vn-tours-sheet",children:[e.jsxs("p",{className:"vn-tours-stamp","aria-label":"Example section",children:[e.jsx("span",{className:"vn-tours-stamp-a",children:"Example section"}),e.jsx("span",{className:"vn-tours-stamp-b",children:"Tour booking connects here"})]}),e.jsxs("div",{className:"vn-tours-head",children:[e.jsx(G,{text:"Trips from the door.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:"The valley is a base as much as a destination. Guests will browse and book tours right here, without leaving the page."})]}),e.jsxs("div",{className:"vn-tours-grid vn-rv",children:[se.map(a=>e.jsx(Ue,{tour:a},a.name)),e.jsxs("div",{className:"vn-tour-plate vn-tour-ghost",children:[e.jsx("span",{className:"vn-tour-ghost-plus","aria-hidden":"true",children:"+"}),e.jsx("p",{className:"vn-tour-ghost-note",children:"The rest land here"})]})]}),e.jsx("p",{className:"vn-tours-foot",children:"The live tours come from TourDesk or Bókun, whichever is chosen. Guests book on the spot and the house earns a commission on every seat."})]})}),e.jsxs("section",{className:"vn-guests",id:"guests",children:[e.jsx(G,{text:"What guests keep saying.",size:64,floor:32,measure:620}),e.jsxs("p",{className:"vn-guests-meta vn-rv",children:[X.rating.toFixed(1)," of 5 across ",X.reviewCount," reviews · ",X.badges.join(" · ")]}),e.jsx("div",{className:"vn-reviews vn-rv",children:Pe.map(a=>e.jsxs("figure",{className:"vn-review",children:[e.jsx("span",{className:"vn-review-rule","aria-hidden":"true"}),e.jsx("blockquote",{className:"vn-review-quote",children:e.jsxs("p",{children:["“",a.quote,"”"]})}),e.jsxs("figcaption",{className:"vn-review-by",children:[e.jsx("span",{className:"vn-review-name",children:a.author}),e.jsx("span",{className:"vn-review-when",children:a.when})]})]},a.author))})]}),e.jsxs("section",{className:"vn-book",id:"booking",children:[e.jsxs("div",{className:"vn-book-intro",children:[e.jsx(G,{text:"Ask for your dates.",size:72,floor:34,measure:560}),e.jsxs("p",{className:"vn-body vn-rv",children:["Requests go straight to ",X.name,", who responds to ",X.responseRate," of messages, usually ",X.respondsWithin,"."]}),e.jsxs("div",{className:"vn-owner-note vn-rv",children:[e.jsx("p",{className:"vn-owner-note-label",children:"The owner's dashboard"}),e.jsxs("p",{className:"vn-owner-note-body",children:["Every request lands in a dashboard built for this house: confirm or decline in one tap, watch requests arrive."," ",e.jsx(ze,{className:"vn-a",to:"/preview/villanorth/stjornbord",children:"See how direct bookings could work"})," ","beside this tab and send yourself a request."]})]})]}),e.jsx(sa,{})]}),e.jsxs("section",{className:"vn-contact",id:"contact",children:[e.jsxs("div",{className:"vn-contact-copy",children:[e.jsx(G,{text:"Finding the house.",size:56,floor:30,measure:520}),e.jsxs("dl",{className:"vn-contact-list vn-rv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Where"}),e.jsx("dd",{children:"Fnjóskadalur, Þingeyjarsveit, North Iceland"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"From Akureyri"}),e.jsx("dd",{children:"Fifteen to twenty minutes through Vaðlaheiðargöng"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Phone"}),e.jsx("dd",{children:e.jsx("a",{className:"vn-a",href:"tel:+3548449808",children:"+354 844 9808"})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Email"}),e.jsx("dd",{children:e.jsx("a",{className:"vn-a",href:"mailto:villanorthiceland@gmail.com",children:"villanorthiceland@gmail.com"})})]})]})]}),e.jsxs("div",{className:"vn-contact-map vn-rv",children:[e.jsx("iframe",{title:"Map of Fnjóskadalur, North Iceland",src:"https://www.google.com/maps?q=Fnj%C3%B3skadalur%2C%20%C3%9Eingeyjarsveit&z=10&output=embed",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0}),e.jsx("p",{className:"vn-map-cap",children:"Fnjóskadalur — the valley east of Akureyri."})]})]}),e.jsxs("footer",{className:"vn-foot","data-nav-light":!0,children:[e.jsxs("div",{className:"vn-foot-hero",children:[e.jsx("p",{className:"vn-foot-wordmark","aria-hidden":"true",children:"VILLA NORTH"}),e.jsx("a",{className:"vn-cta",href:"#booking",onClick:v("booking"),children:"Book now"})]}),e.jsxs("div",{className:"vn-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"vn-foot-label",children:"Find us"}),e.jsx("p",{className:"vn-foot-line",children:"Fnjóskadalur, Þingeyjarsveit, North Iceland"}),e.jsx("p",{className:"vn-foot-line",children:e.jsx("a",{className:"vn-foot-a",href:"tel:+3548449808",children:"+354 844 9808"})}),e.jsx("p",{className:"vn-foot-line",children:e.jsx("a",{className:"vn-foot-a",href:"mailto:villanorthiceland@gmail.com",children:"villanorthiceland@gmail.com"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"vn-foot-label",children:"The house"}),e.jsxs("p",{className:"vn-foot-line",children:["Guests ",_.guests," · ",_.bedrooms," bedrooms · ",_.beds," beds · ",_.baths," bathrooms"]}),e.jsxs("p",{className:"vn-foot-line",children:["Check-in ",_.checkIn]}),e.jsxs("p",{className:"vn-foot-line",children:["Check-out ",_.checkOut]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"vn-foot-label",children:"Good to know"}),e.jsx("p",{className:"vn-foot-line",children:_.security}),e.jsx("p",{className:"vn-foot-line",children:_.water}),e.jsx("p",{className:"vn-foot-line",children:"Washer and dryer are outside the main house"})]})]}),e.jsxs("div",{className:"vn-foot-base",children:[e.jsx("p",{className:"vn-foot-line",children:"© 2026 Villa North"}),e.jsx("a",{className:"vn-foot-a vn-foot-sndr",href:"https://sndr-studio.pages.dev",target:"_blank",rel:"noopener",children:"Designed by SNDR Studio"})]})]}),e.jsx(Ie,{company:ke})]})}const la=`
@font-face { font-family: 'Apfel Grotezk'; src: url('${P}fonts/apfel-grotezk/ApfelGrotezk-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Apfel Grotezk'; src: url('${P}fonts/apfel-grotezk/ApfelGrotezk-Mittel.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Apfel Grotezk'; src: url('${P}fonts/apfel-grotezk/ApfelGrotezk-Fett.woff2') format('woff2'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${P}fonts/onest/Onest-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${P}fonts/onest/Onest-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${P}fonts/onest/Onest-Bold.woff2') format('woff2'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Azeret Mono'; src: url('${P}fonts/azeret-mono/AzeretMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Azeret Mono'; src: url('${P}fonts/azeret-mono/AzeretMono-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }

/* Safari 26 tints the status and home-indicator strips from a qualifying fixed
   element's background-color, and falls back to BODY when none qualifies. This
   page's fixed bar is a transparent difference-blend, so it never qualifies -
   painting the ground on .vn-root alone left both strips on the browser
   default. See [[ios-safe-area-chrome-color]]. */
html, body { background-color: ${W}; }

.vn-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --vn-c: ${W};
  --vn-ink: ${Z};
  --vn-line: #62656A;
  --vn-amber: #C29049;
  --vn-amber-text: #8A5F1E;
  --vn-night: ${K};
  --vn-mute: color-mix(in srgb, var(--vn-ink) 66%, transparent);
  --vn-hair: color-mix(in srgb, var(--vn-ink) 16%, transparent);
  background: var(--vn-c);
  color: var(--vn-ink);
  font-family: ${Be};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.vn-root ::selection { background: var(--vn-amber); color: ${Z}; }
.vn-root a { color: inherit; }
.vn-root :focus-visible { outline: 2px solid var(--vn-amber); outline-offset: 2px; border-radius: 2px; }
.vn-root a, .vn-root button, .vn-root input, .vn-root select, .vn-root textarea {
  touch-action: manipulation;
}
.vn-a:hover { color: var(--vn-amber-text); }

/* nav */
/* No bar, no fill, no hairline: the header floats straight on the full-bleed
   hero. Painted near-white under mix-blend difference so it inverts against
   whatever passes beneath it (bright sky -> dark ink, dark timber and the
   night glow section -> light). Everything inside must be currentColor based;
   a fixed accent inverts to something ugly under difference. */
.vn-root section[id] {
  /* The header is fixed, so an anchor jump would otherwise park the
     section's first line underneath it (measured: 69px swallowed). */
  scroll-margin-top: clamp(88px, calc(var(--u) * 116), 136px);
}
.vn-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 40;
  display: flex; align-items: center; gap: calc(var(--u) * 36);
  /* A fixed top bar slides under the notch without this. */
  padding: calc(calc(var(--u) * 18) + env(safe-area-inset-top, 0px)) calc(var(--u) * 44) calc(var(--u) * 18);
  color: #F2F1EE;
  transition: color .35s ease;
}
/*
 * This bar used to be mix-blend-mode: difference, which self-inverts against
 * dark and light backdrops but collapses to ~1:1 on MID-TONES. The hero sky
 * under the bar measures 138-211 brightness - the dead zone. Measured worst
 * case across the band was 1.76:1, and NO scrim rescues it: darkening pushes a
 * bright sky INTO the dead zone (0.35 alpha measured 1.00:1), and clearing it
 * needs ~0.8 alpha, a near-solid black band across the hero.
 *
 * So the colour is deterministic instead of computed: light by default, ink
 * once the bar is over a light section. An IntersectionObserver watches
 * [data-nav-light] surfaces through a band the height of the bar itself. Light
 * is the default precisely because it is what the top of the page needs, so
 * the no-JS .vn-static path is correct without running anything.
 */
.vn-nav.is-ink { color: var(--vn-ink); }
/*
 * The bar brings its own ground rather than trusting whatever scrolls beneath
 * it. Section-switching alone still leaves one hole: a DARK photograph inside a
 * light section (a mosaic cell, a glow frame) can pass under the bar while it
 * is in ink mode, and ink on a dark photo is the same failure in reverse. The
 * scrim is dark under light type and paper under ink type, so contrast holds
 * over anything. Over the cream sections the paper scrim is invisible, being
 * the ground colour already. Fades out rather than ending on a hard edge.
 */
.vn-nav::before {
  /* Extends past the bar so the fade is gentle rather than a hard edge, and so
     the strong end of it sits behind the type rather than above it. Alpha is
     solved from the measured worst case: the brightest sky under the bar is
     211, and #F2F1EE needs the backdrop at or under ~107 for 4.5:1. */
  content: ''; position: absolute; inset: 0 0 -28px 0; z-index: -1; pointer-events: none;
  background: linear-gradient(180deg, rgba(16,18,22,.74) 0%, rgba(16,18,22,.62) 45%, rgba(16,18,22,.22) 78%, rgba(16,18,22,0) 100%);
  transition: background .35s ease;
}
.vn-nav.is-ink::before {
  background: linear-gradient(180deg, ${W} 0%, color-mix(in srgb, ${W} 88%, transparent) 45%, color-mix(in srgb, ${W} 34%, transparent) 78%, transparent 100%);
}
.vn-nav-mark {
  font-family: ${I}; font-weight: 700; letter-spacing: .06em; text-decoration: none;
  font-size: ${o(16,15)}; color: inherit;
}
.vn-nav-links { display: flex; gap: calc(var(--u) * 28); margin-left: auto; }
.vn-nav-links a {
  text-decoration: none; font-size: ${o(14,15)}; color: inherit;
  opacity: .72; transition: opacity .25s ease;
}
.vn-nav-links a:hover { opacity: 1; }
.vn-nav-cta {
  text-decoration: none; font-size: ${o(14,15)}; font-weight: 500;
  padding: calc(var(--u) * 10) calc(var(--u) * 18);
  border: 1px solid color-mix(in srgb, currentColor 40%, transparent);
  border-radius: 2px; color: inherit;
  transition: border-color .25s ease;
}
.vn-nav-cta:hover { border-color: currentColor; }

/* ── the phone menu ────────────────────────────────────────────────────────
   Desktop never sees any of this. The trigger is two rules drawn in
   currentColor so it inherits the header's difference blend exactly like the
   wordmark does, and becomes an X by rotating the same two rules. */
.vn-burger {
  display: none; margin-left: auto; position: relative;
  width: 44px; height: 44px; padding: 0;
  background: none; border: 0; color: inherit; cursor: pointer;
}
.vn-burger span {
  position: absolute; left: 11px; width: 22px; height: 1.5px;
  background: currentColor;
  transition: transform .38s cubic-bezier(.76,0,.24,1), opacity .2s ease;
}
.vn-burger span:nth-child(1) { top: 19px; }
.vn-burger span:nth-child(2) { top: 25px; }
.vn-burger.is-open span:nth-child(1) { transform: translateY(3px) rotate(45deg); }
.vn-burger.is-open span:nth-child(2) { transform: translateY(-3px) rotate(-45deg); }

/* svh, never dvh: dvh re-lays out every frame while the iOS URL bar moves,
   which is a full-screen relayout during a scroll. */
.vn-menu {
  position: fixed; inset: 0; z-index: 39;
  display: flex; flex-direction: column; justify-content: center;
  gap: calc(var(--u) * 34);
  padding: 96px 24px calc(40px + env(safe-area-inset-bottom, 0px));
  min-height: 100svh;
  background: var(--vn-night); color: #F2F1EE;
  /* visibility, not the hidden attribute: toggling display in the same frame
     as the class kills the transition, and visibility still takes the links
     out of the tab order while closed. */
  opacity: 0; visibility: hidden;
  transition: opacity .34s ease, visibility 0s linear .34s;
}
.vn-menu.is-open {
  opacity: 1; visibility: visible;
  transition: opacity .34s ease, visibility 0s linear 0s;
}
.vn-menu-links { display: flex; flex-direction: column; gap: calc(var(--u) * 8); }
.vn-menu-links a {
  display: inline-flex; align-items: center; min-height: 52px;
  font-family: ${I}; font-weight: 700; letter-spacing: -.01em;
  font-size: clamp(28px, 8.5vw, 40px); line-height: 1.05;
  color: inherit; text-decoration: none;
}
.vn-menu-links a:active { color: var(--vn-amber); }
.vn-menu-cta {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 56px; padding: 0 calc(var(--u) * 26);
  background: var(--vn-amber); color: ${Z};
  font-weight: 500; font-size: 16px; text-decoration: none; border-radius: 2px;
}
.vn-menu-foot {
  margin: 0; display: flex; flex-direction: column; gap: 8px;
  font-family: ${d}; font-size: 12px; letter-spacing: .04em;
}
.vn-menu-foot a { color: rgba(242, 241, 238, .62); text-decoration: none; }

/* hero */
.vn-hero { position: relative; min-height: 100svh; display: grid; }
.vn-hero-media { position: absolute; inset: 0; overflow: hidden; }
.vn-hero-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vn-hero-media::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  /*
   * Two scrims. The 200deg one is the composition's own, weighting the lower
   * right. The vertical one exists for the fixed bar: .vn-nav is a
   * difference-blend, which inverts cleanly against dark and light backdrops
   * but collapses toward 1:1 on MID-TONES - and the hero's sunset sky is
   * exactly that. Measured at 375px before this scrim, the VILLA NORTH
   * wordmark failed AA in 7 of 10 samples across its own box, worst 2.40:1.
   * Darkening the top band puts the blend back in its light-text range.
   * The bar needs no scrim over the cream sections (difference gives ~18:1)
   * or the night footer, which is why this lives on the hero, not on .vn-nav.
   */
  background: linear-gradient(200deg, transparent 46%, rgba(16,18,22,.62) 100%);
}
.vn-hero-block {
  position: relative; align-self: end; z-index: 1;
  padding: 0 calc(var(--u) * 48) calc(calc(var(--u) * 64) + env(safe-area-inset-bottom, 0px));
  color: #F2F1EE; max-width: calc(var(--u) * 760);
}
/* The wordmark sits dead centre of the hero and opens the site: each word
   rises out of its own mask. The mask box carries .18em of headroom (and a
   matching negative margin) so nothing clips. */
.vn-wordmark {
  position: absolute; inset: 0; z-index: 2;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 0; margin: 0; pointer-events: none;
  color: #F5F4F1;
  font-family: ${I}; font-weight: 700; letter-spacing: .05em;
  font-size: clamp(30px, 8vw, 116px); line-height: 1.08;
  text-shadow: 0 2px 44px rgba(16, 18, 22, .42);
}
.vn-wm-row { display: flex; align-items: center; gap: .3em; }
/* the drafting guide the name is set against */
.vn-wm-rule {
  display: block; width: min(40vw, 520px); height: 1px; background: currentColor;
  opacity: .55; margin-bottom: .3em; transform-origin: 0 50%;
  will-change: transform, opacity;
}
.vn-wm-line {
  display: inline-block; overflow: hidden;
  padding: .18em .05em .14em; margin: -.18em -.05em -.14em;
}
.vn-wm-word { display: inline-block; }
.vn-measure-text {
  margin: 0; font-family: ${d}; font-weight: 500; font-size: ${o(15,13)};
  letter-spacing: .04em; color: #F2F1EE;
}
.vn-hero-sub {
  margin: calc(var(--u) * 22) 0 0; font-size: ${o(18,15)}; line-height: 1.55;
  font-weight: 400; max-width: 42ch; color: rgba(242,241,238,.9);
}
.vn-cta {
  display: inline-block; margin-top: calc(var(--u) * 26);
  background: var(--vn-amber); color: ${Z};
  font-weight: 500; font-size: ${o(15,13)}; text-decoration: none;
  padding: calc(var(--u) * 14) calc(var(--u) * 26);
  border: 0; border-radius: 2px; cursor: pointer;
  transition: transform .15s ease, filter .25s ease;
}
.vn-cta:hover { filter: brightness(1.06); }
.vn-cta:active { transform: translateY(1px); }
.vn-cta-block { width: 100%; text-align: center; }

/* shared text */
.vn-headline {
  margin: 0; font-family: ${I}; font-weight: 700; letter-spacing: -.01em;
  line-height: 1.14; text-wrap: balance;
}
/* The word is the unbreakable unit; the character is what animates. No
   overflow clip any more: the reveal is a blur and a lift, not a mask, and a
   clip would cut the blur radius off at the line box. */
.vn-word { display: inline-block; white-space: nowrap; }
.vn-char { display: inline-block; will-change: opacity, transform; }
.vn-body {
  font-size: ${o(17,15)}; line-height: 1.6; font-weight: 400;
  color: var(--vn-mute); max-width: 58ch; margin: calc(var(--u) * 24) 0 0;
}
.vn-stat { font-family: ${d}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: calc(var(--u) * 14) 0 0; }
.vn-a { color: inherit; }
.vn-quote-block { max-width: 60ch; margin: calc(var(--u) * 40) 0 0; }
.vn-quote-block p { margin: 0; font-size: ${o(20,16)}; line-height: 1.45; font-weight: 400; }
.vn-quote-block cite {
  display: block; font-style: normal; font-family: ${d}; font-size: ${o(12,12)};
  color: var(--vn-mute); margin-top: calc(var(--u) * 14);
}

/* drafted frames: the hairline draws (unchanged below), then the photo itself
   sweeps in under an off-axis mask, resolving out of a soft blur as it
   uncovers. Mask POSITION is what transitions (mask-image gradient stops
   never interpolate); the mask is oversize (300% 300%) so its edge falls
   off-axis rather than closing symmetrically. Once the sweep finishes,
   mask-image is cleared to none - now that .vn-frame-in transforms every
   tick, a resting mask on top of that would be a real compositing cost.

   .vn-frame-in is the Heklusýn drift device's wrapper (see drift() in
   useMotion): position absolute, oversized on both axes by --dz (derived
   from the frame's drift amount), so the image can never run out of
   overhang at the extremes of scroll travel. It is the ONLY thing that ever
   sets a transform here. The <img> inside it fills the wrapper at 100%/100%
   and owns the mask sweep + blur/saturate reveal only - no transform, no
   oversize of its own. */
.vn-frame {
  position: relative; overflow: hidden; margin: 0;
  background: color-mix(in srgb, var(--vn-ink) 6%, transparent);
  aspect-ratio: var(--vn-ar);
  max-width: var(--vn-fw, none);
}
.vn-frame-in { position: absolute; inset: calc(var(--dz, 9%) * -1) 0; }
@media (min-width: 992px) { .vn-frame-in { will-change: transform; } }
.vn-frame-in img {
  width: 100%; height: 100%; max-width: none; object-fit: cover; display: block;
}
.vn-js .vn-frame-in img {
  -webkit-mask-image: linear-gradient(168deg, transparent 0%, #000 42%, #000 100%);
  mask-image: linear-gradient(168deg, transparent 0%, #000 42%, #000 100%);
  -webkit-mask-size: 300% 300%;
  mask-size: 300% 300%;
  -webkit-mask-position: 72% 72%;
  mask-position: 72% 72%;
  filter: blur(18px) saturate(.72);
  transition:
    -webkit-mask-position 1.15s cubic-bezier(.25,1,.5,1) .45s,
    mask-position 1.15s cubic-bezier(.25,1,.5,1) .45s,
    filter 1.15s cubic-bezier(.25,1,.5,1) .45s,
    -webkit-mask-image 0s linear 1.65s,
    mask-image 0s linear 1.65s;
}
.vn-js .vn-frame.is-in .vn-frame-in img {
  -webkit-mask-position: 0% 0%;
  mask-position: 0% 0%;
  filter: blur(0) saturate(1);
  -webkit-mask-image: none;
  mask-image: none;
}
.vn-frame-svg { position: absolute; inset: 0; pointer-events: none; z-index: 2; }
.vn-frame-svg rect {
  fill: none; stroke: var(--vn-line); stroke-width: 1; vector-effect: non-scaling-stroke;
  stroke-dasharray: 396; stroke-dashoffset: 396;
}
.vn-js .vn-frame-svg rect {
  transition: stroke-dashoffset .95s cubic-bezier(.65,0,.35,1), opacity .8s ease .95s;
}
.vn-js .vn-frame.is-in .vn-frame-svg rect { stroke-dashoffset: 0; opacity: .1; }
.vn-static .vn-frame-in { inset: 0; }
.vn-static .vn-frame-in img {
  -webkit-mask-image: none; mask-image: none; filter: none;
}
.vn-static .vn-frame-svg rect { stroke-dashoffset: 0; opacity: .1; }

/* the drawing */
.vn-drawing { padding: calc(var(--u) * 170) 0 calc(var(--u) * 60); }
.vn-drawing-copy {
  max-width: calc(var(--u) * 1240); margin: 0 auto calc(var(--u) * 56);
  padding: 0 calc(var(--u) * 48);
}
.vn-drawing-inner {
  position: relative; overflow: hidden; background: var(--vn-c);
  aspect-ratio: 4 / 3;
}
@media (min-width: 768px) {
  .vn-drawing-inner { height: 100svh; aspect-ratio: auto; }
}
.vn-elev-svg, .vn-elev-photo { position: absolute; inset: 0; }
.vn-elev { width: 100%; height: 100%; }
.vn-elev-line { fill: none; stroke: var(--vn-ink); stroke-width: 2.2; vector-effect: non-scaling-stroke; stroke-linecap: round; stroke-linejoin: round; }
.vn-elev-secondary, .vn-elev-mullions { fill: none; stroke: var(--vn-line); stroke-width: 1.3; vector-effect: non-scaling-stroke; stroke-linecap: round; }
.vn-elev-hatch { opacity: 0; }
.vn-elev-photo { z-index: 1; }
.vn-elev-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vn-elev-caps {
  position: absolute; left: calc(var(--u) * 48); bottom: calc(var(--u) * 48); z-index: 3;
  display: grid; align-items: end; max-width: 30ch;
}
.vn-elev-cap { grid-area: 1 / 1; margin: 0; font-family: ${I}; font-weight: 500; font-size: ${o(22,16)}; }
.vn-elev-cap-sketch { color: var(--vn-ink); }
.vn-elev-cap-photo { color: #F2F1EE; opacity: 0; }
.vn-force-resolved .vn-elev-svg { opacity: 0 !important; }
.vn-force-resolved .vn-elev-photo { opacity: 1 !important; }
.vn-elev-credit {
  font-family: ${d}; font-size: ${o(12,12)}; color: var(--vn-mute); line-height: 1.6;
  max-width: calc(var(--u) * 1240); margin: calc(var(--u) * 24) auto 0; padding: 0 calc(var(--u) * 48);
}
/* "the same gable, from inside": an asymmetric copy+image pairing distinct
   from the duo-grids (valley/welcome) and the interactive rooms explorer -
   a kicker + one editorial line reading the ceiling angle as a rhyme with
   the traced roofline above, the portrait photo taking the wider column. */
.vn-drawing-inside {
  display: grid; grid-template-columns: 1fr calc(var(--u) * 380);
  align-items: center; gap: calc(var(--u) * 48);
  max-width: calc(var(--u) * 1240); margin: calc(var(--u) * 72) auto 0;
  padding: calc(var(--u) * 40) calc(var(--u) * 48) 0; border-top: 1px solid var(--vn-hair);
}
.vn-drawing-inside-copy { max-width: 34ch; }
.vn-drawing-inside-kicker {
  font-family: ${d}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase;
  color: var(--vn-amber-text); margin: 0 0 calc(var(--u) * 14);
}
.vn-drawing-inside-line {
  font-family: ${I}; font-weight: 500; font-size: ${o(23,18)}; line-height: 1.4; margin: 0;
}
.vn-drawing-inside-fig { width: 100%; }

/* the valley */
.vn-valley {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 88);
  padding: calc(var(--u) * 60) calc(var(--u) * 48) calc(var(--u) * 150);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.vn-draws { margin: calc(var(--u) * 36) 0 0; }
.vn-draws div {
  display: grid; grid-template-columns: calc(var(--u) * 190) 1fr; gap: calc(var(--u) * 24);
  padding: calc(var(--u) * 14) 0; border-top: 1px solid var(--vn-hair);
}
.vn-draws dt { font-weight: 500; font-size: ${o(15,14)}; }
.vn-draws dd { margin: 0; font-size: ${o(14,13)}; color: var(--vn-mute); line-height: 1.5; }
.vn-valley-figs { display: grid; gap: calc(var(--u) * 20); }
.vn-valley-duo { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 20); }

/* rooms */
.vn-rooms { padding: calc(var(--u) * 60) calc(var(--u) * 48) calc(var(--u) * 150); max-width: calc(var(--u) * 1440); margin: 0 auto; }
.vn-rooms-lead { width: min(100%, calc(var(--u) * 1000)); margin: calc(var(--u) * 44) auto 0; }
.vn-rooms-explorer {
  display: grid; grid-template-columns: 5fr 7fr; gap: calc(var(--u) * 64);
  margin-top: calc(var(--u) * 64);
}
.vn-rooms-index { display: flex; flex-direction: column; gap: calc(var(--u) * 6); }
.vn-rooms-zone-label {
  font-family: ${d}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase;
  color: var(--vn-amber-text); margin: calc(var(--u) * 20) 0 calc(var(--u) * 6);
}
.vn-rooms-index-item:first-child .vn-rooms-zone-label { margin-top: 0; }
.vn-room-btn {
  display: flex; justify-content: space-between; align-items: baseline; gap: calc(var(--u) * 16);
  width: 100%; text-align: left; font: inherit; cursor: pointer; min-height: 44px;
  background: none; border: 0; border-top: 1px solid var(--vn-hair);
  padding: calc(var(--u) * 14) calc(var(--u) * 4);
}
.vn-room-btn-label { font-weight: 500; font-size: ${o(16,15)}; }
.vn-room-btn-fact { font-family: ${d}; font-size: ${o(12,12)}; color: var(--vn-mute); }
.vn-room-btn.is-active .vn-room-btn-label { color: var(--vn-amber-text); }
.vn-rooms-pane { display: block; }
.vn-rooms-pane-frame { width: 100%; }
.vn-rooms-pane-label { font-family: ${I}; font-weight: 500; font-size: ${o(20,17)}; margin: calc(var(--u) * 20) 0 0; }
.vn-rooms-pane-fact { font-size: ${o(15,14)}; color: var(--vn-mute); margin: calc(var(--u) * 8) 0 0; line-height: 1.5; }
.vn-rooms-pane-note { font-family: ${d}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: calc(var(--u) * 10) 0 0; }
.vn-rooms-acc { display: none; }
.vn-rooms-bath {
  display: flex; align-items: center; gap: calc(var(--u) * 24);
  margin-top: calc(var(--u) * 64); padding-top: calc(var(--u) * 32); border-top: 1px solid var(--vn-hair);
}
.vn-rooms-bath-frame { width: calc(var(--u) * 220); flex: none; }
.vn-rooms-bath-fact { font-weight: 500; font-size: ${o(16,15)}; margin: 0; }
.vn-rooms-bath-detail { font-size: ${o(14,13)}; color: var(--vn-mute); margin: calc(var(--u) * 8) 0 0; line-height: 1.5; max-width: 46ch; }

/* materials */
.vn-materials { padding: calc(var(--u) * 60) calc(var(--u) * 48) calc(var(--u) * 150); max-width: calc(var(--u) * 1240); margin: 0 auto; }
.vn-materials-names {
  display: flex; gap: calc(var(--u) * 32); list-style: none; margin: calc(var(--u) * 32) 0 0; padding: calc(var(--u) * 20) 0 0;
  border-top: 1px solid var(--vn-hair); font-family: ${d}; font-size: ${o(15,13)}; letter-spacing: .04em;
}
/* hover-expand accordion, ported from a 21st.dev reference (larsen66/expand-
   on-hover): one activeIndex, flex-grow (not width) so container resizes
   never desync the ratios, one shared height across all three tiles. Tuned
   restrained per the brief: equal thirds at rest, ~1.6x on the active tile,
   never a sliver. Reduced motion forces flex-grow back to 1 (below). */
.vn-mat-expand {
  display: flex; gap: calc(var(--u) * 12);
  height: calc(var(--u) * 420);
  margin-top: calc(var(--u) * 48);
}
.vn-mat-panel {
  position: relative; overflow: hidden; flex: 1 1 0%; min-width: 0;
  height: 100%; padding: 0; margin: 0; border: 0; border-radius: 2px;
  cursor: pointer; background: color-mix(in srgb, var(--vn-ink) 6%, transparent);
  -webkit-tap-highlight-color: transparent;
}
.vn-mat-panel:focus-visible { outline: 2px solid var(--vn-amber); outline-offset: 3px; }
.vn-mat-panel img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block;
}
.vn-mat-scrim {
  position: absolute; inset: 0; z-index: 1; pointer-events: none; opacity: 0;
  background: linear-gradient(0deg, rgba(16,18,22,.66) 0%, rgba(16,18,22,.1) 55%, transparent 75%);
  transition: opacity .3s ease;
}
.vn-mat-scrim.is-active { opacity: 1; }
.vn-mat-label {
  position: absolute; left: calc(var(--u) * 16); bottom: calc(var(--u) * 14); z-index: 2;
  font-family: ${d}; font-size: ${o(13,12)}; color: #F2F1EE; white-space: nowrap;
  opacity: 0; transform: translateY(6px);
  transition: opacity .3s ease .1s, transform .3s ease .1s;
}
.vn-mat-label.is-active { opacity: 1; transform: translateY(0); }

/* the glow */
.vn-glow { padding: calc(var(--u) * 90) 0; transition: background .5s ease, color .5s ease; }
.vn-glow.is-dark, .vn-static .vn-glow { background: var(--vn-night); color: #EFEEEA; }
.vn-glow.is-dark, .vn-static .vn-glow { --vn-mute: rgba(239,238,234,.62); --vn-amber-text: #D9A968; }
.vn-glow-bleed { position: relative; aspect-ratio: 21 / 9; overflow: hidden; background: ${K}; }
.vn-glow-poster, .vn-glow-video {
  position: absolute; inset: 0; z-index: 0;
  width: 100%; height: 100%; object-fit: cover; display: block;
}
/* the still is the permanent base layer; the film plays on top of it and, if
   it errors, simply removes itself (opacity 0) to reveal the still beneath -
   the section never depends on the video succeeding to look complete. */
.vn-glow-video { z-index: 1; transition: opacity .4s ease; }
.vn-glow-video.is-errored { opacity: 0; }
/* Scrim strengthened over a real pixel read: the drafted still had a bright
   patch (aurora/steam) sitting under the label's right edge, measured at
   1.27:1 against the amber label and 2.73:1 against the white caption -
   both fail WCAG AA. A radial pool anchored under the caption block (it
   moves with the section, not the video's shifting light) plus a steeper
   diagonal fixes every corner sampled to >=4.5:1 at both mobile and desktop
   widths, without touching the type colours. */
.vn-glow-bleed::after {
  content: ''; position: absolute; inset: 0; z-index: 2;
  background:
    radial-gradient(135% 120% at 2% 98%, rgba(10,11,15,.92) 0%, rgba(10,11,15,.68) 42%, rgba(10,11,15,0) 82%),
    linear-gradient(198deg, transparent 30%, rgba(10,11,15,.7) 100%);
}
.vn-glow-caps { position: absolute; left: calc(var(--u) * 48); bottom: calc(var(--u) * 40); z-index: 3; color: #F2F1EE; max-width: 38ch; }
.vn-glow-label { font-family: ${d}; font-size: ${o(12,12)}; letter-spacing: .16em; text-transform: uppercase; color: #D9A968; margin: 0 0 calc(var(--u) * 10); }
.vn-glow-cap { margin: 0; font-family: ${I}; font-weight: 500; font-size: ${o(24,17)}; line-height: 1.3; }
.vn-glow-row {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 24); align-items: start;
  max-width: calc(var(--u) * 1440); margin: calc(var(--u) * 48) auto 0; padding: 0 calc(var(--u) * 48);
}
/* Custom properties obey the cascade, so a rule here could not beat Frame's
   inline --vn-ar; the crop is equalised through the ratio prop instead
   (GLOW_RATIO). This only has to fill the cell. */
.vn-glow-row .vn-frame { width: 100%; }
.vn-glow-tub-col { display: flex; flex-direction: column; gap: calc(var(--u) * 14); align-items: start; }
/* Every child of .vn-frame is position:absolute, so the figure has no in-flow
   content and its fit-content width is 0. In .vn-glow-row (a grid) align-items
   is the BLOCK axis and items still stretch inline, so the other two frames are
   fine. In this flex COLUMN align-items is the INLINE axis, so start = shrink
   to fit = width 0, aspect-ratio then took height to 0, and the photo loaded
   but never painted. Give width so the maxWidth prop has something to cap. */
.vn-glow-tub-col > .vn-frame { width: 100%; }
.vn-glow-fact { font-family: ${d}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: 0; max-width: 26ch; }
.vn-glow-quote { max-width: calc(var(--u) * 1440); margin: calc(var(--u) * 56) auto 0; padding: 0 calc(var(--u) * 48); color: inherit; }
.vn-glow-quote cite { color: var(--vn-mute); }

/* welcome ritual */
.vn-welcome {
  display: grid; grid-template-columns: 5fr 7fr; gap: calc(var(--u) * 88);
  padding: calc(var(--u) * 90) calc(var(--u) * 48) calc(var(--u) * 150);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.vn-ritual-list { list-style: none; margin: calc(var(--u) * 32) 0 0; padding: 0; display: flex; flex-direction: column; gap: calc(var(--u) * 10); }
.vn-ritual-list li {
  font-family: ${d}; font-size: ${o(14,13)}; padding: calc(var(--u) * 10) 0; border-top: 1px solid var(--vn-hair);
}
.vn-welcome-figs { display: grid; gap: calc(var(--u) * 20); }
.vn-welcome-duo { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 20); }

/* guests */
.vn-guests { padding: calc(var(--u) * 150) calc(var(--u) * 48); max-width: calc(var(--u) * 1240); margin: 0 auto; }
.vn-guests-meta { font-family: ${d}; font-size: ${o(13,12)}; color: var(--vn-mute); margin: calc(var(--u) * 20) 0 0; }
/* the review marquee: duplicated track at -50%, pause on hover, edge fades
   to the page ground. width: max-content is what makes -50% exact. */
/* Three written reviews, standing still. The quote leads at a size meant to be
   read; the name and month sit under a hairline, so the card is a page from a
   guest book rather than a tile in a carousel. */
.vn-reviews {
  margin-top: calc(var(--u) * 56);
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 28);
  align-items: start;
}
.vn-review {
  margin: 0; display: flex; flex-direction: column;
  padding-top: calc(var(--u) * 22);
}
.vn-review-rule { display: block; width: calc(var(--u) * 34); height: 1px; background: var(--vn-amber-text); margin-bottom: calc(var(--u) * 20); }
.vn-review-quote { margin: 0; }
.vn-review-quote p {
  margin: 0; font-family: ${I}; font-weight: 500;
  font-size: ${o(21,17)}; line-height: 1.42; text-wrap: pretty;
}
.vn-review-by {
  margin-top: calc(var(--u) * 22); padding-top: calc(var(--u) * 14);
  border-top: 1px solid var(--vn-hair);
  display: flex; justify-content: space-between; gap: calc(var(--u) * 12);
  font-family: ${d}; font-size: 11px; letter-spacing: .06em;
}
.vn-review-name { color: var(--vn-ink); }
.vn-review-when { color: var(--vn-mute); }

.vn-themes {
  display: flex; flex-wrap: wrap; gap: calc(var(--u) * 48) calc(var(--u) * 64);
  margin: calc(var(--u) * 72) 0 0; padding: calc(var(--u) * 24) 0 0; border-top: 1px solid var(--vn-hair);
}
.vn-themes div { display: flex; align-items: baseline; gap: calc(var(--u) * 12); }
.vn-themes dt { font-size: ${o(14,13)}; color: var(--vn-mute); }
.vn-themes dd { margin: 0; font-variant-numeric: tabular-nums; font-family: ${d}; font-size: ${o(26,19)}; }

/* booking */
.vn-book {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 88);
  padding: calc(var(--u) * 40) calc(var(--u) * 48) calc(var(--u) * 170);
  max-width: calc(var(--u) * 1440); margin: 0 auto; align-items: start;
}
.vn-book-form, .vn-book-done {
  background: color-mix(in srgb, var(--vn-ink) 4%, var(--vn-c));
  border: 1px solid var(--vn-hair); border-radius: 2px; padding: calc(var(--u) * 40);
}
.vn-book-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 20); }
.vn-field { display: flex; flex-direction: column; gap: 6px; }
.vn-field-wide { grid-column: 1 / -1; }
.vn-field-label { font-family: ${d}; font-size: ${o(11,12)}; letter-spacing: .1em; text-transform: uppercase; color: var(--vn-mute); }
.vn-optional { text-transform: none; letter-spacing: 0; }
.vn-field input, .vn-field select, .vn-field textarea {
  font: inherit; font-size: 16px; font-weight: 400; color: var(--vn-ink);
  background: var(--vn-c); border: 1px solid var(--vn-hair); border-radius: 2px;
  padding: 10px 12px; min-height: 44px;
}
.vn-field textarea { min-height: 0; resize: vertical; }
.vn-field-error { color: #A5462F; font-size: ${o(14,13)}; margin: calc(var(--u) * 16) 0 0; }

/* the stay calendar — a drafting sheet, not a date picker. The chosen nights
   are a measured span: an amber band through the grid, ink squares on the two
   endpoints, and a dimension line beneath with the figure breaking the rule. */
.vn-cal { grid-column: 1 / -1; }
.vn-cal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: calc(var(--u) * 14); }
.vn-cal-nav { display: flex; gap: 6px; }
.vn-cal-nav button {
  width: 32px; height: 32px; display: grid; place-items: center; cursor: pointer;
  font: inherit; font-size: 14px; line-height: 1; color: var(--vn-ink);
  background: var(--vn-c); border: 1px solid var(--vn-hair); border-radius: 2px;
  transition: border-color .2s ease, opacity .2s ease;
}
.vn-cal-nav button:disabled { opacity: .3; cursor: default; }
.vn-cal-nav button:not(:disabled):hover { border-color: var(--vn-amber); }
.vn-cal-months { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 34); }
.vn-cal-title {
  font-family: ${d}; font-size: ${o(11,11)}; letter-spacing: .1em; text-transform: uppercase;
  color: var(--vn-ink); margin: 0 0 calc(var(--u) * 10);
}
.vn-cal-dows, .vn-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
.vn-cal-dow {
  font-family: ${d}; font-size: 10px; letter-spacing: .06em; text-align: center;
  color: var(--vn-mute); padding-bottom: 7px; border-bottom: 1px solid var(--vn-hair);
}
.vn-cal-cell { position: relative; }
/* the band sits behind the numerals and runs edge to edge, so consecutive
   cells read as one continuous span rather than seven separate chips */
.vn-cal-cell.is-in::before, .vn-cal-cell.is-from::before, .vn-cal-cell.is-to::before {
  content: ''; position: absolute; top: 3px; bottom: 3px; left: 0; right: 0;
  background: color-mix(in srgb, var(--vn-amber) 20%, transparent);
}
.vn-cal-cell.is-from::before { left: 50%; }
.vn-cal-cell.is-to::before { right: 50%; }
.vn-cal-day {
  position: relative; width: 100%; min-height: 38px; cursor: pointer;
  font-family: ${d}; font-size: ${o(13,13)}; font-variant-numeric: tabular-nums;
  color: var(--vn-ink); background: none; border: 0; border-radius: 2px; padding: 0;
  transition: box-shadow .15s ease, background-color .15s ease, color .15s ease;
}
.vn-cal-day:disabled { color: color-mix(in srgb, var(--vn-ink) 24%, transparent); cursor: default; }
.vn-cal-day:not(:disabled):hover { box-shadow: inset 0 0 0 1px var(--vn-line); }
.vn-cal-day.is-end { background: var(--vn-ink); color: var(--vn-c); font-weight: 500; }
.vn-cal-day.is-end:hover { box-shadow: none; }

.vn-cal-dim {
  display: grid; grid-template-columns: auto 1fr auto 1fr auto; align-items: center;
  gap: calc(var(--u) * 12); min-height: 46px;
  margin-top: calc(var(--u) * 20); padding-top: calc(var(--u) * 18);
  border-top: 1px solid var(--vn-hair);
}
.vn-cal-dim-end { font-family: ${d}; font-size: ${o(13,12)}; font-variant-numeric: tabular-nums; }
.vn-cal-dim-end.is-right { text-align: right; }
.vn-cal-dim-end em {
  display: block; font-style: normal; font-size: 10px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--vn-mute); margin-bottom: 3px;
}
/* terminal ticks, drawn only on the outer ends the way a dimension is */
.vn-cal-dim-rule { position: relative; height: 1px; background: var(--vn-line); }
.vn-cal-dim-rule::before { content: ''; position: absolute; top: -4px; width: 1px; height: 9px; background: var(--vn-line); }
.vn-cal-dim-rule.is-left::before { left: 0; }
.vn-cal-dim-rule.is-right::before { right: 0; }
.vn-cal-dim-figure {
  font-family: ${d}; font-size: ${o(12,12)}; letter-spacing: .06em;
  text-transform: uppercase; color: var(--vn-amber-text); white-space: nowrap;
}
.vn-cal-dim-empty { margin: 0; grid-column: 1 / -1; font-size: ${o(13,13)}; color: var(--vn-mute); }

.vn-owner-note { margin-top: calc(var(--u) * 44); padding-top: calc(var(--u) * 22); border-top: 1px solid var(--vn-hair); }
.vn-owner-note-label { font-family: ${d}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase; color: var(--vn-amber-text); margin: 0 0 calc(var(--u) * 10); }
.vn-owner-note-body { font-size: ${o(14,13)}; line-height: 1.6; color: var(--vn-mute); margin: 0; max-width: 44ch; }
.vn-book-note { font-size: ${o(13,12)}; line-height: 1.6; color: var(--vn-mute); margin: calc(var(--u) * 16) 0 0; }
.vn-book-done-title { margin: 0; font-family: ${I}; font-weight: 700; font-size: ${o(30,21)}; }
.vn-book-done-body { margin: calc(var(--u) * 16) 0 0; line-height: 1.6; font-size: ${o(16,14)}; }
.vn-ghost {
  margin-top: calc(var(--u) * 22); font: inherit; font-size: ${o(14,13)}; font-weight: 500; cursor: pointer;
  min-height: 44px; background: none; color: var(--vn-ink);
  border: 1px solid var(--vn-hair); border-radius: 2px; padding: calc(var(--u) * 10) calc(var(--u) * 18);
}
.vn-ghost:hover { border-color: var(--vn-amber); }

/* the aerial film — full bleed, same fallback contract as the glow */
.vn-film { margin: calc(var(--u) * 140) 0 calc(var(--u) * 40); }
.vn-film-bleed { position: relative; aspect-ratio: 21 / 9; overflow: hidden; background: ${K}; }
.vn-film-poster, .vn-film-video {
  position: absolute; inset: 0; z-index: 0;
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.vn-film-video { z-index: 1; transition: opacity .4s ease; }
.vn-film-video.is-errored { opacity: 0; }
/* A low scrim across the film's foot, not a filled chip behind the words: a
   box floating on a photograph reads as a UI sticker, and its width tracks
   the text so it never sits right. The scrim spans the frame, so the label
   is legible on any frame of a bright daytime pass.
   Amber is deliberately NOT used here the way it is on the night film — this
   footage is pale sky and sunlit hillside, and near-white is the only value
   that holds against it. */
.vn-film-bleed::after {
  content: ''; position: absolute; z-index: 2; inset: auto 0 0 0; height: 38%;
  pointer-events: none;
  background: linear-gradient(to top, rgba(16, 18, 22, .58), rgba(16, 18, 22, .22) 46%, transparent);
}
.vn-film-caps { position: absolute; z-index: 3; left: calc(var(--u) * 48); bottom: calc(var(--u) * 30); }
.vn-film-label { margin: 0; font-family: ${d}; font-size: ${o(11,11)}; letter-spacing: .14em; text-transform: uppercase; color: #F2F1EE; }

/* gallery — three columns, ratios as shot, drift everywhere */
.vn-gallery { max-width: calc(var(--u) * 1440); margin: 0 auto; padding: calc(var(--u) * 120) calc(var(--u) * 48) 0; }
.vn-gallery-head { max-width: 56ch; }
.vn-gallery-grid {
  margin-top: calc(var(--u) * 48);
  display: grid; grid-template-columns: repeat(6, 1fr); gap: calc(var(--u) * 20);
  align-items: stretch;
}
/* the mosaic: 4+2 over 2+2+2 over a full-width band */
.vn-g-a { grid-column: span 4; }
.vn-g-b { grid-column: span 2; }
.vn-g-c, .vn-g-d, .vn-g-e { grid-column: span 2; }
.vn-g-f { grid-column: 1 / -1; }
/* cells stretch to their row, so the crop fills whatever the row resolves to */
.vn-gallery-grid .vn-frame { height: 100%; }

/* the logo mark — their monogram as an alpha mask painted with currentColor,
   so it inverts with the difference-blend nav and sits as ink in the footer */
.vn-logo-mark {
  display: inline-block; width: 30px; height: 21px; vertical-align: -3px; margin-right: 10px;
  background: currentColor;
  -webkit-mask: url('${P}villanorth/logo-mark.png') center / contain no-repeat;
  mask: url('${P}villanorth/logo-mark.png') center / contain no-repeat;
}
.vn-logo-mark-foot { width: 34px; height: 24px; vertical-align: -4px; }

/* the hero's tour window */
.vn-hero-tours {
  position: absolute; right: calc(var(--u) * 44); bottom: calc(var(--u) * 40); z-index: 3;
  display: block; width: calc(var(--u) * 268); overflow: hidden;
  border: 1px solid rgba(242, 241, 238, .34); border-radius: 2px;
  background: rgba(16, 18, 22, .44); color: #F2F1EE; text-decoration: none;
  box-shadow: 0 26px 60px -30px rgba(16, 18, 22, .85);
  transition: border-color .35s ease, transform .55s cubic-bezier(.25,1,.5,1), box-shadow .55s ease;
}
.vn-hero-tours:hover {
  border-color: rgba(242, 241, 238, .82);
  /* Grows rather than lifts, for the same reason the plates do. */
  transform: scale(1.015);
  box-shadow: 0 34px 74px -30px rgba(16, 18, 22, .95);
}
.vn-ht-stack { position: relative; display: block; aspect-ratio: 4 / 5; overflow: hidden; background: ${K}; }
/* Every tour photograph is mounted; only opacity and a hair of scale move, so
   the flip is one image dissolving into the next. The outgoing frame eases
   BACK rather than forward, which keeps the incoming one reading as the
   subject instead of two images fighting. */
.vn-ht-img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  opacity: 0; transform: scale(1.045);
  transition: opacity 1.1s cubic-bezier(.33,1,.68,1), transform 1.6s cubic-bezier(.33,1,.68,1);
}
.vn-ht-img.is-on { opacity: 1; transform: scale(1); }
/* Same anatomy as the plates in the tours section: everything is drawn ON the
   photograph, overline then title then button, bottom left. */
.vn-ht-veil {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(180deg, rgba(16,18,22,.62) 0%, rgba(16,18,22,.12) 30%, rgba(16,18,22,.46) 54%, rgba(16,18,22,.92) 100%);
}
/* The dwell drawn as a rule along the top edge, so the window is visibly
   counting down to the next photograph rather than just cycling. */
.vn-ht-prog { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(242, 241, 238, .26); z-index: 4; }
.vn-ht-prog-fill { display: block; height: 100%; width: 0; background: var(--vn-amber); animation: vn-ht-fill linear forwards; }
@keyframes vn-ht-fill { from { width: 0; } to { width: 100%; } }
/* A mat-board hairline, the way a photograph is framed rather than printed to
   the edge, and registration marks at the sheet's head. Both belong to the
   drawing vocabulary the rest of the page is built on. */
.vn-ht-mat { position: absolute; inset: calc(var(--u) * 9); z-index: 4; pointer-events: none; border: 1px solid rgba(242, 241, 238, .26); }
.vn-ht-marks {
  position: absolute; inset: calc(var(--u) * 9); z-index: 4; pointer-events: none;
  --m: rgba(242, 241, 238, .85); --len: calc(var(--u) * 11);
  background:
    linear-gradient(var(--m), var(--m)) left top / 1px var(--len) no-repeat,
    linear-gradient(var(--m), var(--m)) left top / var(--len) 1px no-repeat,
    linear-gradient(var(--m), var(--m)) right top / 1px var(--len) no-repeat,
    linear-gradient(var(--m), var(--m)) right top / var(--len) 1px no-repeat;
}
.vn-ht-stamp {
  position: absolute; top: calc(var(--u) * 24); left: calc(var(--u) * 22); right: calc(var(--u) * 22);
  display: flex; justify-content: space-between; align-items: baseline; gap: calc(var(--u) * 10);
  font-family: ${d}; font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
  color: #F2F1EE;
}
.vn-ht-count { color: var(--vn-amber); letter-spacing: .1em; }
.vn-ht-body {
  position: absolute; left: calc(var(--u) * 22); right: calc(var(--u) * 74); bottom: calc(var(--u) * 24);
  display: flex; flex-direction: column;
  animation: vn-ht-in .55s cubic-bezier(.25,1,.5,1) both;
}
@keyframes vn-ht-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
.vn-ht-place { font-family: ${d}; font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: #F2F1EE; margin-bottom: calc(var(--u) * 6); }
.vn-ht-name { display: block; font-family: ${I}; font-weight: 700; font-size: ${o(17,15)}; line-height: 1.15; color: #F2F1EE; }
.vn-ht-cta {
  position: absolute; right: calc(var(--u) * 22); bottom: calc(var(--u) * 22);
  display: inline-flex; align-items: center; justify-content: center;
  width: calc(var(--u) * 34); height: calc(var(--u) * 34);
  border: 1px solid rgba(242, 241, 238, .65); border-radius: 999px;
  font-size: 13px; line-height: 1; color: #F2F1EE;
  transition: background-color .32s ease, color .32s ease, border-color .32s ease, transform .32s cubic-bezier(.25,1,.5,1);
}
.vn-hero-tours:hover .vn-ht-cta {
  background: #F2F1EE; border-color: #F2F1EE; color: ${K}; transform: translateX(3px);
}

/* tours — one dashed example sheet with a title stamp; the cards inside feel real */
.vn-tours { max-width: calc(var(--u) * 1440); margin: 0 auto; padding: calc(var(--u) * 120) calc(var(--u) * 48) 0; }
.vn-tours-sheet {
  position: relative; border: 1px dashed color-mix(in srgb, var(--vn-ink) 38%, transparent);
  border-radius: 2px; padding: calc(var(--u) * 48) calc(var(--u) * 44) calc(var(--u) * 44);
}
.vn-tours-stamp {
  position: absolute; top: 0; right: 0; margin: 0;
  display: flex; flex-direction: column; gap: 3px; text-align: right;
  border-left: 1px dashed color-mix(in srgb, var(--vn-ink) 38%, transparent);
  border-bottom: 1px dashed color-mix(in srgb, var(--vn-ink) 38%, transparent);
  padding: calc(var(--u) * 14) calc(var(--u) * 18);
}
.vn-tours-stamp-a { font-family: ${d}; font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--vn-amber-text); }
.vn-tours-stamp-b { font-family: ${d}; font-size: 10px; letter-spacing: .06em; color: var(--vn-mute); }
.vn-tours-head { max-width: 56ch; }
.vn-tours-grid { margin-top: calc(var(--u) * 40); display: grid; grid-template-columns: repeat(4, 1fr); gap: calc(var(--u) * 20); align-items: stretch; }
/* The plate: photograph edge to edge, everything else drawn ON it. */
.vn-tour-plate {
  position: relative; display: block; overflow: hidden; border-radius: 2px;
  color: #F2F1EE; text-decoration: none; isolation: isolate;
  transition: transform .5s cubic-bezier(.25,1,.5,1), filter .5s ease, opacity .5s ease, box-shadow .5s ease;
}
.vn-tour-plate:focus-visible { outline: 1px solid var(--vn-amber); outline-offset: 3px; }
/*
 * The reveal, after a 21st.dev reference (lavikatiyar/cards): the plate under
 * the pointer comes forward and every OTHER plate falls back behind a blur, so
 * attention is taken away from the rest of the row rather than merely added to
 * one card. :focus-within gives a keyboard user the identical reveal.
 *
 * Gated on a real pointer. On a touch screen :hover latches after a tap and
 * would leave three cards permanently blurred, and blurring a filter over a
 * photograph that is still drifting on scroll is expensive on a phone for an
 * effect no one there can trigger on purpose.
 */
@media (hover: hover) and (pointer: fine) {
  /*
   * :has, NOT :hover, on the grid. A plain .vn-tours-grid:hover is true whenever the
   * pointer is anywhere in the grid INCLUDING the gutters between cards, so
   * sweeping along the row blurred all four for the moment the pointer crossed
   * each gap. Gated on a plate actually being hovered, the gutters do nothing.
   *
   * The ghost carries .vn-tour-plate too, so it is already covered here; the
   * separate rule it used to have was gated differently and blurred it alone
   * in the gutter, which is its own flicker.
   */
  .vn-tours-grid:has(.vn-tour-plate:hover) .vn-tour-plate:not(:hover),
  .vn-tours-grid:focus-within .vn-tour-plate:not(:focus-within) {
    filter: blur(3px) saturate(.72); opacity: .5; transform: scale(.99);
  }
  /*
   * Scale UP, never translate. A hover transform moves the element's hit box as
   * well as its paint: lifting the card 5px slid its lower edge out from under
   * a pointer resting near the bottom, which dropped the hover, which dropped
   * the lift, which restored the hover - an oscillation for as long as the
   * pointer sat there. Growing from the centre moves every edge AWAY from the
   * pointer, so hover can never be lost to the effect itself.
   */
  .vn-tour-plate:hover, .vn-tour-plate:focus-within {
    transform: scale(1.02);
    box-shadow: 0 22px 44px -20px rgba(16, 18, 22, .6);
  }
}
.vn-tour-shot { width: 100%; }
.vn-tour-veil {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background: linear-gradient(180deg, rgba(16,18,22,.40) 0%, rgba(16,18,22,0) 34%, rgba(16,18,22,.24) 56%, rgba(16,18,22,.82) 100%);
  transition: opacity .55s cubic-bezier(.25,1,.5,1);
}
.vn-tour-plate:hover .vn-tour-veil { opacity: .88; }
.vn-tour-over {
  position: absolute; z-index: 3; left: calc(var(--u) * 16); right: calc(var(--u) * 16); bottom: calc(var(--u) * 15);
  display: flex; flex-direction: column; align-items: start;
}
.vn-tour-place {
  font-family: ${d}; font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
  color: var(--vn-amber); margin-bottom: calc(var(--u) * 6);
}
.vn-tour-name { display: block; font-family: ${I}; font-weight: 700; font-size: ${o(19,16)}; line-height: 1.15; }
/* The control is an arrow and nothing else. A labelled pill on a photograph
   this size was more chrome than the card could carry, and the plate is
   already the click target - the disc only has to say which way it goes. */
.vn-tour-cta {
  margin-top: calc(var(--u) * 13);
  display: inline-flex; align-items: center; justify-content: center;
  width: calc(var(--u) * 34); height: calc(var(--u) * 34);
  border: 1px solid rgba(242, 241, 238, .55); border-radius: 999px;
  font-size: 13px; line-height: 1; color: #F2F1EE;
  transition: background-color .32s ease, color .32s ease, border-color .32s ease, transform .32s cubic-bezier(.25,1,.5,1);
}
.vn-tour-plate:hover .vn-tour-cta {
  background: #F2F1EE; border-color: #F2F1EE; color: ${K}; transform: translateX(3px);
}
/* The ghost keeps the plates' proportion so the row stays one rhythm. */
.vn-tour-ghost {
  aspect-ratio: 4 / 5; color: var(--vn-ink);
  transition: filter .5s ease, opacity .5s ease, transform .5s cubic-bezier(.25,1,.5,1);
  border: 1px dashed color-mix(in srgb, var(--vn-ink) 30%, transparent);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: calc(var(--u) * 8);
}
.vn-tour-ghost-plus { font-family: ${d}; font-size: ${o(22,20)}; line-height: 1; color: var(--vn-mute); }
.vn-tour-ghost-note { margin: 0; font-family: ${d}; font-size: 11px; letter-spacing: .04em; color: var(--vn-mute); }
.vn-tours-foot { margin: calc(var(--u) * 26) 0 0; max-width: 62ch; font-size: ${o(13.5,13)}; line-height: 1.6; color: var(--vn-mute); }

/* contact — the drawing plate with a live map */
.vn-contact {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 88); align-items: start;
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 40) calc(var(--u) * 48) calc(var(--u) * 150);
}
.vn-contact-list { margin: calc(var(--u) * 36) 0 0; display: grid; gap: calc(var(--u) * 18); }
.vn-contact-list div { display: grid; grid-template-columns: calc(var(--u) * 150) 1fr; gap: calc(var(--u) * 16); align-items: baseline; }
.vn-contact-list dt { font-family: ${d}; font-size: ${o(11,11)}; letter-spacing: .12em; text-transform: uppercase; color: var(--vn-mute); }
.vn-contact-list dd { margin: 0; font-size: ${o(16,15)}; line-height: 1.55; }
.vn-contact-map { border: 1px solid var(--vn-hair); border-radius: 2px; padding: calc(var(--u) * 14); background: color-mix(in srgb, var(--vn-ink) 4%, var(--vn-c)); }
.vn-contact-map iframe { display: block; width: 100%; aspect-ratio: 4 / 3; border: 0; filter: grayscale(1) contrast(1.02); }
.vn-map-cap { margin: calc(var(--u) * 12) 0 0; font-family: ${d}; font-size: ${o(11,11)}; color: var(--vn-mute); letter-spacing: .04em; }

/* footer — the night close */
.vn-foot { background: var(--vn-night); color: #F2F1EE; }
.vn-foot-hero {
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 96) calc(var(--u) * 48) calc(var(--u) * 64);
  display: flex; flex-direction: column; align-items: flex-start; gap: calc(var(--u) * 22);
}
.vn-logo-mark-big { width: calc(var(--u) * 64); height: calc(var(--u) * 44); }
.vn-foot-wordmark {
  margin: 0; font-family: ${I}; font-weight: 700; line-height: .96;
  font-size: clamp(44px, calc(var(--u) * 124), 142px); letter-spacing: .015em;
}
.vn-foot-hero .vn-cta { margin-top: calc(var(--u) * 10); }
.vn-foot-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 44);
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 44) calc(var(--u) * 48) calc(var(--u) * 52);
  border-top: 1px solid rgba(242, 241, 238, .14);
}
.vn-foot-label {
  margin: 0 0 calc(var(--u) * 14); font-family: ${d}; font-size: ${o(11,11)};
  letter-spacing: .14em; text-transform: uppercase; color: var(--vn-amber);
}
.vn-foot-line { font-size: ${o(13.5,14)}; line-height: 1.65; color: rgba(242, 241, 238, .66); margin: 0 0 calc(var(--u) * 6); }
.vn-foot-a { color: rgba(242, 241, 238, .84); text-decoration: none; }
.vn-foot-a:hover { color: #FFFFFF; }
.vn-foot-base {
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 20) calc(var(--u) * 48) calc(var(--u) * 34);
  border-top: 1px solid rgba(242, 241, 238, .1);
  display: flex; justify-content: space-between; align-items: baseline; gap: 20px; flex-wrap: wrap;
}
.vn-foot-base .vn-foot-line { margin: 0; }
.vn-foot-sndr { font-size: ${o(12.5,13)}; }

/* ── responsive ── */
@media (max-width: 991px) {
  .vn-nav { padding: 10px 12px 10px 20px; gap: 16px; }
  .vn-nav-mark, .vn-nav-links a { display: inline-flex; align-items: center; min-height: 44px; }
  .vn-nav-links { display: none; }
  /* Book now moves INTO the sheet on a phone, so the header carries the
     wordmark and one control instead of two competing ones. */
  .vn-nav-cta { display: none; }
  .vn-burger { display: block; }
  .vn-hero-block { padding: 0 20px 40px; }
  /* The corner window is 260px wide over a 375px hero, so at phone widths it
     sat straight on top of the intro copy. Narrow tablets get a smaller one;
     phones lose it entirely below, because a card squeezed next to the
     headline is worse than no card and the tour plates are one screen down. */
  .vn-hero-tours { right: 20px; bottom: calc(var(--u) * 30); width: calc(var(--u) * 200); }
  .vn-wordmark { font-size: clamp(28px, 10vw, 52px); }
  .vn-valley, .vn-rooms-explorer, .vn-welcome, .vn-book, .vn-drawing-inside {
    grid-template-columns: 1fr; gap: 40px;
  }
  .vn-valley, .vn-rooms, .vn-materials, .vn-welcome, .vn-book, .vn-drawing-copy, .vn-glow-row, .vn-elev-credit, .vn-drawing-inside {
    padding-left: 20px; padding-right: 20px;
  }
  .vn-mat-expand { height: calc(var(--u) * 340); }
  .vn-reviews { grid-template-columns: 1fr; gap: calc(var(--u) * 34); }
  .vn-foot-hero { padding: 56px 20px 40px; }
  .vn-foot-base { padding-left: 20px; padding-right: 20px; }
  .vn-book-grid { grid-template-columns: 1fr; }
  .vn-gallery, .vn-tours { padding-left: 20px; padding-right: 20px; }
  .vn-gallery-grid { grid-template-columns: 1fr 1fr; }
  .vn-g-a, .vn-g-b, .vn-g-c, .vn-g-d, .vn-g-e { grid-column: auto; }
  .vn-g-f { grid-column: 1 / -1; }
  .vn-tours-grid { grid-template-columns: 1fr 1fr; }
  .vn-contact { grid-template-columns: 1fr; gap: 40px; padding-left: 20px; padding-right: 20px; }
  .vn-film-caps { left: 20px; bottom: 20px; }
  .vn-film-bleed { aspect-ratio: 16 / 10; }
  .vn-film-credit { padding: 0 20px; }
  /* one month at a time below the desktop column width: two would squeeze the
     cells under a usable tap target. The arrows still reach every month. */
  .vn-cal-months { grid-template-columns: 1fr; }
  .vn-cal-month + .vn-cal-month { display: none; }
  .vn-cal-day { min-height: 44px; }
  /* Stacked, the three glow frames read as three different sizes: two of them
     carry desktop width caps and all three crop differently. One width, one
     ratio, for all of them. */
  .vn-glow-row { grid-template-columns: 1fr; gap: 16px; }
  .vn-foot-grid { grid-template-columns: 1fr; gap: 24px; padding: 36px 20px; }
}

@media (max-width: 767px) {
  /*
   * Tap targets. Every padding on this page is expressed in --u, and --u clamps
   * to its .44px floor below 1440px wide, so a control sized generously on a
   * desktop collapses to ~32px on a phone. Measured at 375px: both Book now
   * buttons and the enquiry submit came out 32px tall and the calendar's month
   * arrows 32x32, all under the 44px floor - on a page whose entire job is
   * taking a booking. Floors are set in px here precisely BECAUSE --u cannot be
   * trusted to carry them at this width.
   */
  .vn-cta { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; padding-inline: 20px; }
  .vn-cal-nav button { width: 44px; height: 44px; }
  .vn-cal-nav { gap: 8px; }
  /* Standalone contact links are 18-19px of text in a stack. Padding alone is
     the wrong tool: on an INLINE box it grows the hit area without growing the
     layout box, so stacked links end up with overlapping targets - a worse bug
     than small ones, and one this audit created before catching it. inline-flex
     makes the hit box a real layout box, so the list's own gap keeps them
     apart by construction. */
  .vn-contact-list dd a, .vn-foot-a, .vn-menu-foot a, .vn-a {
    display: inline-flex; align-items: center; min-height: 44px;
  }
  .vn-hero-tours { display: none; }
  .vn-rooms-index, .vn-rooms-pane { display: none; }
  .vn-rooms-acc { display: block; }
  .vn-rooms-acc-item + .vn-rooms-acc-item { margin-top: 10px; }
  .vn-rooms-acc-btn {
    display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
    width: 100%; text-align: left; font: inherit; cursor: pointer; min-height: 44px;
    background: none; border: 0; border-top: 1px solid var(--vn-hair); padding: 12px 4px;
  }
  .vn-rooms-acc-btn.is-open span:first-child { color: var(--vn-amber-text); font-weight: 500; }
  .vn-rooms-acc-fact { font-family: ${d}; font-size: 12px; color: var(--vn-mute); }
  .vn-rooms-acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
  .vn-rooms-acc-panel.is-open { grid-template-rows: 1fr; }
  .vn-rooms-acc-panel-in { overflow: hidden; }
  .vn-rooms-acc-panel-in > .vn-frame { margin-top: 12px; }
  .vn-rooms-acc-note { font-size: 13px; color: var(--vn-mute); margin: 10px 0 0; line-height: 1.5; }
  .vn-rooms-bath { flex-direction: column; align-items: flex-start; }
  .vn-rooms-bath-frame { width: 100%; }
  .vn-mat-expand { flex-direction: column; height: auto; }
  /* flex-basis:0% (from the base "flex: 1 1 0%") wins over "height" as the
     main-axis size in a COLUMN flex container, so an auto-height stack with
     only a height override collapses to 0 - override the whole shorthand
     with a real basis instead. */
  .vn-mat-panel { flex: 0 0 160px !important; }
  /* the dimension line loses its rules rather than its figures: three columns
     of real information beat five columns of squeezed hairline */
  .vn-cal-dim { grid-template-columns: 1fr auto 1fr; gap: 12px; }
  .vn-cal-dim-rule { display: none; }
  .vn-gallery-grid { grid-template-columns: 1fr; }
  .vn-contact-list div { grid-template-columns: 1fr; gap: 4px; }
}

/* reduced motion: everything renders visible statically */
/* preloader: a paper sheet wiped off the board, left to right */
.vn-loader {
  position: fixed; inset: 0; z-index: 60; background: ${W};
  display: grid; place-content: center;
  clip-path: inset(0 0 0 0);
  transition: clip-path 1s cubic-bezier(.76, 0, .24, 1);
}
.vn-loader.is-leaving { clip-path: inset(0 0 0 100%); }
.vn-loader-mark {
  margin: 0; font-family: ${I}; font-weight: 700; letter-spacing: .05em;
  font-size: clamp(30px, 7.2vw, 108px); white-space: nowrap; line-height: 1;
  background-image: linear-gradient(90deg, ${Z} 50%, rgba(23,24,26,.14) 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.vn-loader-pct {
  position: fixed; left: calc(var(--u) * 48); bottom: calc(var(--u) * 40);
  margin: 0; font-family: ${d}; font-size: 12px; letter-spacing: .16em;
  color: rgba(23,24,26,.5);
}

@media (prefers-reduced-motion: reduce) {
  /* No interval runs under reduced motion, so a rule creeping to a flip that
     never comes would be a lie. Show it filled and still. */
  .vn-ht-prog-fill { animation: none; width: 100%; }
  .vn-root * { transition: none !important; animation: none !important; }
  .vn-word { transform: none !important; opacity: 1 !important; }
  .vn-wm-word { transform: none !important; opacity: 1 !important; }
  .vn-wm-rule { transform: none !important; opacity: .55 !important; }
  .vn-measure-text { opacity: 1 !important; transform: none !important; }
  .vn-elev-svg { opacity: .12; }
  .vn-elev-photo { opacity: 1; }
  .vn-elev-hatch { opacity: .3; }
  .vn-elev-line, .vn-elev-secondary, .vn-elev-mullions { stroke-dashoffset: 0 !important; }
  .vn-elev-cap-sketch { opacity: 0; }
  .vn-elev-cap-photo { opacity: 1; }
  .vn-frame-in { inset: 0; transform: none !important; }
  .vn-frame-in img {
    -webkit-mask-image: none !important; mask-image: none !important; filter: none !important;
  }
  /* framer-motion drives .vn-mat-panel's flex-grow from JS, not a CSS
     transition, so the blanket "transition: none" above cannot stop it -
     force every tile back to equal thirds and show every label at rest. */
  .vn-mat-panel { flex-grow: 1 !important; }
  .vn-mat-scrim { opacity: 1 !important; }
  .vn-mat-label { opacity: 1 !important; transform: none !important; }
}
`;export{La as default};
