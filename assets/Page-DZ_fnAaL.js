import{r as p,s as he,a as xe,j as e,L as pe}from"./index-OAAEQ3E1.js";import{g as z}from"./index-CzGW6FVa.js";import{S as oe}from"./ScrollTrigger-DNECHiyU.js";import be from"./lenis-niKyKZQP.js";import{g as we}from"./companies-DhNyAQKb.js";import{P as ye}from"./PreviewChrome-AWB7g1Mq.js";import{P as ke}from"./PreviewFooter-BzljhlE8.js";import{d as je}from"./demoStore-Cl8pI4vE.js";import{m as Ne}from"./proxy-CLVQCWFH.js";import"./data-C8ZDiw2z.js";import"./company-D-rC5gQU.js";import"./company-B3ttGpBR.js";import"./company-Dj0FZhSK.js";import"./company-CWG9yyz-.js";import"./outreach-sign-BcNtFClO.js";import"./company-gNW5QTrS.js";import"./copy-DvP7NNHG.js";import"./createLucideIcon-CObyTctj.js";import"./send-DVmRflRI.js";import"./index-qBaGUhog.js";import"./external-link-omDx3eFu.js";import"./x-CQ4qGOXw.js";import"./mail-CQuAIuDi.js";import"./SndrBadge-BzVTXTDE.js";const ue="",$e="https://property.godo.is/booking2.php";function se(t){const[n,l,u]=t.split("-").map(Number);return`${n}-${l}-${u}`}function le(){return ue.trim().length>0}function ze(t){const n=new URLSearchParams;return n.set("propid",ue),t.checkin&&n.set("checkin",se(t.checkin)),t.checkout&&n.set("checkout",se(t.checkout)),n.set("numadult",String(Math.max(1,t.adults??2))),n.set("numchild","0"),n.set("lang",t.lang??"en"),n.set("referer","villanorth-web"),`${$e}?${n.toString()}`}const b="/iceland-redesigns/villanorth/",ee=t=>`${t.replace(/\.jpg$/,"-800.jpg")} 800w, ${t} 1200w`,G={name:"the owner",yearsHosting:3,profession:"Engineer, by the host profile",responseRate:"100%",respondsWithin:"within an hour",rating:5,reviewCount:54,badges:["Guest favorite","Top 10% of homes"]},i={glassGrid:{src:`${b}glass-grid.jpg`,alt:"The two-storey glass gable of Villa North against a pale blue sky, dark timber cladding at its edges",ratio:"3 / 2"},gridSunset:{src:`${b}grid-sunset.jpg`,alt:"The gable end of Villa North in silhouette against an orange sunset, its roofline the source of this page's drawing",ratio:"3 / 2"},aerialSunset:{src:`${b}aerial-sunset.jpg`,alt:"Aerial view of Villa North at sunset, cut into the hillside above Fnjóskadalur with the hot tub on its deck"},aerialSunsetB:{src:`${b}aerial-sunset-b.jpg`,alt:"A wider aerial view of Villa North at dusk, the valley and dark fells behind it",ratio:"4 / 3"},aerialRiver:{src:`${b}aerial-river.jpg`,alt:"Aerial daylight view of Villa North above Fnjóskadalur, the river Fnjóská winding through the valley below",ratio:"4 / 3"},aerialMist:{src:`${b}aerial-mist.jpg`,alt:"Aerial view of Villa North with morning mist low in the valley and fog on the fells behind",ratio:"4 / 3"},mezzanine:{src:`${b}mezzanine.jpg`,alt:"Looking down from the upstairs gallery into the double-height sitting room, glass wall onto the valley",ratio:"3 / 2"},dining:{src:`${b}dining.jpg`,alt:"The round dining table for six, glass walls open to the deck and the valley beyond",ratio:"3 / 2"},bedroom:{src:`${b}bedroom.jpg`,alt:"A bedroom with a dark upholstered bed, folded towels, and a wall sconce either side of the headboard",ratio:"16 / 9"},bedroomAttic:{src:`${b}bedroom-attic.jpg`,alt:"The upstairs bedroom under the sloped roof, a bed against the low wall and a balcony door beyond",ratio:"16 / 9"},living:{src:`${b}living.jpg`,alt:"The sitting room, a grey sectional sofa facing a floor to ceiling glass wall onto the valley",ratio:"3 / 2"},livingSofa:{src:`${b}living-sofa.jpg`,alt:"The sitting room in the evening, a throw blanket over the sofa arm, the valley through the glass behind it",ratio:"3 / 2"},kitchenRun:{src:`${b}kitchen-run.jpg`,alt:"The kitchen counter run, a warm light strip glowing under the shelf above the worktop",ratio:"3 / 2"},kitchenPendants:{src:`${b}kitchen-pendants.jpg`,alt:"The kitchen island under three pendant lights, a vase of fresh flowers and a bowl of fruit on the counter",ratio:"3 / 2"},bath:{src:`${b}bath.jpg`,alt:"A bathroom with dark tile, a round backlit mirror, and a black oval basin",ratio:"3 / 2"},concreteDetail:{src:`${b}concrete-detail.jpg`,alt:"A steel wall light set into board-formed concrete, the timber cladding continuing beyond it",ratio:"3 / 2"},claddingDetail:{src:`${b}cladding-detail.jpg`,alt:"A black steel light fixture mounted on dark vertical timber cladding",ratio:"2 / 3"},walkway:{src:`${b}walkway.jpg`,alt:"The concrete walkway along the house, a steel handrail edge in the foreground and timber cladding beyond",ratio:"2 / 3"},winterNight:{alt:"Villa North lit up at dusk in winter, snow patches on the ground and the hot tub visible on its deck"},winterRiver:{src:`${b}winter-river.jpg`,alt:"An aerial dusk view in winter, the river system tracing through the valley beyond the lit house",ratio:"3 / 2"},wineGlasses:{src:`${b}wine-glasses.jpg`,alt:"Two wine glasses on the deck rail at golden hour, an amber light strip glowing beneath the rail",ratio:"3 / 2"},tubNightSmall:{src:`${b}tub-night-small.jpg`,alt:"The hot tub at night, warm light glowing under its rim, bare snow-dusted birch trees behind it",ratio:"520 / 546"},livingTall:{src:`${b}living-tall.jpg`,alt:"A portrait view inside the sitting room, the angled timber ceiling and a black steel wall brace above the sofa",ratio:"2 / 3"}},V=[{id:"br1",level:"efri",label:"Svefnherbergi 1",fact:"1 king + 2 single beds",note:"Upstairs. No bathroom on this floor.",photo:i.bedroomAttic},{id:"br2",level:"nedri",label:"Svefnherbergi 2",fact:"1 queen bed",photo:i.bedroom},{id:"br3",level:"nedri",label:"Svefnherbergi 3",fact:"1 queen bed",photo:i.bedroom,photoNote:"Same room type as Svefnherbergi 2; the photo is shared."},{id:"br4",level:"nedri",label:"Svefnherbergi 4",fact:"1 single bed",photo:i.bedroom,photoNote:"The smallest room; the photo is shared with the two queen rooms."},{id:"stofa",level:"nedri",label:"Stofa",fact:"The sitting room",note:"Floor to ceiling glass on the valley side.",photo:i.living},{id:"eldhus",level:"nedri",label:"Eldhús",fact:"The kitchen",note:"Miele appliances, very well stocked, open to the dining table.",photo:i.kitchenRun},{id:"pallur",level:"nedri",label:"Pallurinn",fact:"The sundeck",note:"The hot tub sits at its edge: trees on one side, the valley on the other.",photo:i.wineGlasses}],ne={fact:"1.5 bathrooms, both on the main level",detail:"The upstairs bedroom (Svefnherbergi 1) has no bathroom of its own; both bathrooms are downstairs.",photo:i.bath},ce={intro:"Below the house, the river Fnjóská curves past the farm at Steinkirkja, with Vaglaskógur, one of Iceland's largest forests, a short walk away.",draws:[{name:"Vaglaskógur",note:"One of Iceland's largest forests, a short walk from the house."},{name:"Fnjóská",note:"A rod-fishing river, right below the hillside."},{name:"Akureyri",note:"Fifteen to twenty minutes through the toll tunnel, Vaðlaheiðargöng. Guests recommend buying the 10-pass."},{name:"9-hole golf course",note:"Nearby, in the same valley."},{name:"Hiking trails",note:"Starting from the forest edge."}]},U={intro:"Board-formed concrete outside, dark timber cladding, and steel fixtures set flush into both. Inside, the furniture is the real thing.",names:["Minotti","Miele","Stelton"],quote:{quote:"Where other design houses are filled with Ikea products and furniture, this home is the real deal.",author:"Harold",when:"April 2026"}},Y={intro:"The hot tub sits on the edge of the sundeck, trees on one side, the valley on the other, open through the winter.",auroraFact:"Guests have watched the northern lights from the tub, mentioned in three or more reviews.",quote:{quote:"Just wait until you see the view from the hot tub on your first evening there!",author:"Katie",when:"September 2025"},filmCredit:"The loop above is generated, made from one of the owner's own winter-night photographs: the house itself is locked frame to frame, and only the steam, a faint aurora and the falling snow move."},J={src:`${b}glow-film.mp4`,poster:`${b}glow-poster.jpg`,posterSmall:`${b}glow-poster-800.jpg`},de={intro:"Recurring across many guest reviews, the same small ritual greets every arrival.",items:["Fresh flowers","Champagne or sparkling wine","Chocolate","Fruit"]},Se=[{theme:"Location",mentions:24},{theme:"View",mentions:21},{theme:"Hospitality",mentions:20}],Ae=[{quote:"Probably the best Airbnb experience I have ever had.",author:"Eric",when:"June 2026"},{quote:"Thoughtful design, unparalleled views. 11/10!",author:"Naomi",when:"July 2026"},{quote:"It was squeaky clean and the epitome of luxury. The house was designed and engineered perfectly.",author:"Kris",when:"August 2025"}],B={guests:7,bedrooms:4,beds:6,baths:"1.5",checkIn:"After 4:00 PM, self check-in with a lockbox",checkOut:"Before 11:00 AM",security:"Exterior security cameras are in use",water:"The hot tub has no gate or lock; a river runs nearby"},_={src:`${b}aerial-film.mp4`,poster:`${b}aerial-film-poster.jpg`,posterSmall:`${b}aerial-film-poster-800.jpg`,credit:"Villa North's own aerial film, from their current site."},Ee={"@context":"https://schema.org","@type":"LodgingBusiness",name:"Villa North",description:"A villa in Fnjóskadalur valley, Þingeyjarsveit, North Iceland, with a view over the river Fnjóská and the farm Steinkirkja. Sleeps seven across four bedrooms, with a private hot tub on the sundeck.",address:{"@type":"PostalAddress",addressLocality:"Fnjóskadalur, Þingeyjarsveit",addressRegion:"Norðurland",addressCountry:"IS"},aggregateRating:{"@type":"AggregateRating",ratingValue:5,reviewCount:54},amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Private hot tub",value:!0},{"@type":"LocationFeatureSpecification",name:"River view",value:!0},{"@type":"LocationFeatureSpecification",name:"Valley view",value:!0},{"@type":"LocationFeatureSpecification",name:"Free parking",value:!0},{"@type":"LocationFeatureSpecification",name:"Kitchen",value:!0}]};z.registerPlugin(oe);const ve=we("villanorth"),ae="#F0F1F2",K="#17181A",Z="#101216",D="'Apfel Grotezk', system-ui, sans-serif",Te="'Onest', system-ui, sans-serif",h="'Azeret Mono', ui-monospace, monospace",W="/iceland-redesigns/",H=()=>{var t;return typeof window<"u"&&((t=window.matchMedia)==null?void 0:t.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},o=(t,n)=>`clamp(${n}px, calc(var(--u) * ${t}), ${+(t*1.15).toFixed(1)}px)`;function Le(t){p.useEffect(()=>{if(!t)return;const n=document.querySelector(".vn-root");if(!n)return;if(H()){n.classList.add("vn-static");return}n.classList.add("vn-js"),oe.config({ignoreMobileResize:!0});const l=new be({duration:1.1,smoothWheel:!0}),u=new IntersectionObserver(v=>v.forEach(c=>c.isIntersecting&&c.target.classList.add("is-in")),{threshold:.2});n.querySelectorAll(".vn-rv").forEach(v=>u.observe(v));const f=Array.from(n.querySelectorAll(".vn-frame-in"));let N=null;const w=()=>{if(N!=null&&N.isActive)return;const v=window.innerHeight,c=window.innerWidth<992,E=[];for(const a of f){const m=a.parentElement;if(!m)continue;const r=m.getBoundingClientRect();if(r.bottom<-240||r.top>v+240)continue;const s=Number(a.dataset.drift||9),y=c?s*.5:s,T=(r.top+r.height/2-v/2)/(v/2+r.height/2);E.push([a,`translate3d(0,${(-T*y).toFixed(2)}%,0)`])}for(const[a,m]of E)a.style.transform=m},$=[],S=z.context(()=>{const v=n.querySelectorAll(".vn-wm-word"),c=n.querySelector(".vn-wm-rule"),E=n.querySelector(".vn-measure-text");if(v.length){z.set(v,{yPercent:120,opacity:0}),c&&z.set(c,{scaleX:0}),E&&z.set(E,{opacity:0,y:8});const k=z.timeline({paused:!0,delay:.25}).to(c,{scaleX:1,duration:.9,ease:"expo.out"}).to(v,{yPercent:0,opacity:1,duration:1.35,ease:"expo.out",stagger:.1},"-=0.55").to(E,{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.7"),x=()=>{!k.isActive()&&k.progress()===0&&k.play()},I=()=>{document.visibilityState==="visible"&&x()};document.querySelector(".vn-loader")?window.addEventListener("vn:revealed",I,{once:!0}):I();const Q=()=>{document.visibilityState==="visible"&&x()};document.addEventListener("visibilitychange",Q);const O=window.setTimeout(()=>{k.progress()===0&&k.progress(1)},6e3);$.push(()=>{document.removeEventListener("visibilitychange",Q),window.clearTimeout(O)});const re=n.querySelector(".vn-hero"),ie=n.querySelector(".vn-wordmark");if(re&&ie){const te={trigger:re,start:"top top",end:"bottom top",scrub:.6};z.to(v,{y:84,ease:"none",stagger:.04,scrollTrigger:te}),c&&z.to(c,{scaleX:2.8,opacity:0,ease:"none",scrollTrigger:te}),z.to(ie,{opacity:.1,ease:"none",scrollTrigger:te})}}n.querySelectorAll("[data-vn-headline]").forEach(k=>{const x=k.querySelectorAll(".vn-word");x.length&&z.fromTo(x,{yPercent:116,opacity:0},{yPercent:0,opacity:1,duration:1,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:k,start:"top 88%",once:!0}})});const a=n.querySelector(".vn-drawing-inner"),m=n.querySelector(".vn-elev-line"),r=n.querySelector(".vn-elev-secondary"),s=n.querySelector(".vn-elev-mullions"),y=n.querySelector(".vn-elev-hatch"),T=n.querySelector(".vn-elev-svg"),F=n.querySelector(".vn-elev-photo"),g=n.querySelector(".vn-elev-cap-sketch"),q=n.querySelector(".vn-elev-cap-photo"),P=k=>{if(!k||!("getTotalLength"in k))return;const x=k.getTotalLength();z.set(k,{strokeDasharray:x,strokeDashoffset:x})};if(P(m),P(r),P(s),y&&z.set(y,{opacity:0}),F&&z.set(F,{opacity:0}),q&&z.set(q,{opacity:0}),a&&m&&F&&T){const k=[m,r].filter(Boolean);if(window.innerWidth>=768){const x=z.timeline({scrollTrigger:{trigger:a,start:"top top",end:"+=220%",pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0}});N=x.scrollTrigger??null,x.to(k,{strokeDashoffset:0,ease:"none",duration:.4},0),s&&x.to(s,{strokeDashoffset:0,ease:"none",duration:.22},.16),y&&x.to(y,{opacity:.3,ease:"none",duration:.14},.38),g&&x.to(g,{opacity:0,ease:"none",duration:.08},.58),x.to(T,{opacity:0,ease:"none",duration:.2},.6),x.to(F,{opacity:1,ease:"none",duration:.2},.6),q&&x.to(q,{opacity:1,ease:"none",duration:.1},.68)}else{const x=new IntersectionObserver(I=>{I.forEach(Q=>{if(!Q.isIntersecting)return;x.disconnect();const O=z.timeline();O.to(k,{strokeDashoffset:0,ease:"power1.inOut",duration:1.1}),s&&O.to(s,{strokeDashoffset:0,ease:"power1.inOut",duration:.6},"-=0.35"),y&&O.to(y,{opacity:.3,duration:.5},"-=0.2"),g&&O.to(g,{opacity:0,duration:.3}),O.to(T,{opacity:0,duration:.6},"<"),O.to(F,{opacity:1,duration:.6},"<"),q&&O.to(q,{opacity:1,duration:.4},"-=0.3")})},{threshold:.35});x.observe(a),$.push(()=>x.disconnect())}}const R=n.querySelector(".vn-glow");if(R){const k=new IntersectionObserver(x=>x.forEach(I=>{R.classList.toggle("is-dark",I.isIntersecting),he(I.isIntersecting?Z:ae)}),{threshold:.3});k.observe(R),$.push(()=>k.disconnect())}},n),d=n.querySelector(".vn-drawing"),L=()=>d==null?void 0:d.classList.add("vn-force-resolved"),A=()=>d==null?void 0:d.classList.remove("vn-force-resolved");d==null||d.addEventListener("focusin",L),d==null||d.addEventListener("focusout",A),$.push(()=>{d==null||d.removeEventListener("focusin",L),d==null||d.removeEventListener("focusout",A)}),l.on("scroll",oe.update);const M=v=>{w(),l.raf(v*1e3)};return z.ticker.add(M),z.ticker.lagSmoothing(0),w(),()=>{z.ticker.remove(M),u.disconnect(),$.forEach(v=>v()),S.revert(),l.destroy()}},[t])}function C({text:t,size:n,floor:l,as:u="h2",className:f="",measure:N}){return e.jsx(u,{"data-vn-headline":!0,"aria-label":t,className:`vn-headline ${f}`,style:{fontSize:o(n,l),maxWidth:N?`calc(var(--u) * ${N})`:void 0},children:t.split(" ").map((w,$,S)=>e.jsxs("span",{"aria-hidden":"true",children:[e.jsx("span",{className:"vn-line",children:e.jsx("span",{className:"vn-word",children:w})}),$<S.length-1?" ":""]},$))})}function j({photo:t,className:n="",priority:l=!1,maxWidth:u,sizes:f,drift:N=9}){return e.jsxs("figure",{className:`vn-frame vn-rv ${n}`,style:{aspectRatio:t.ratio,maxWidth:u?`${u}px`:void 0},children:[e.jsx("svg",{className:"vn-frame-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("rect",{x:"0.6",y:"0.6",width:"98.8",height:"98.8"})}),e.jsx("div",{className:"vn-frame-in","data-drift":N,style:{"--dz":`${Math.max(9,N*1.35)}%`},children:e.jsx("img",{src:t.src,srcSet:ee(t.src),sizes:f??"(max-width: 899px) 100vw, 50vw",alt:t.alt,loading:l?"eager":"lazy",decoding:"async"})})]})}const Fe=[{photo:i.concreteDetail,label:"Board-formed concrete"},{photo:i.claddingDetail,label:"Dark timber cladding"},{photo:i.walkway,label:"The walkway"}];function qe(){const[t,n]=p.useState(null),l=H();return e.jsx("div",{className:"vn-mat-expand",role:"group","aria-label":"Materials",children:Fe.map((u,f)=>e.jsxs(Ne.button,{type:"button",className:"vn-mat-panel","aria-expanded":t===f,"aria-current":t===f?"true":void 0,onMouseEnter:()=>n(f),onFocus:()=>n(f),onClick:()=>n(f),animate:{flexGrow:t===f?2.2:1},transition:{duration:l?0:.5,ease:[.25,1,.5,1]},children:[e.jsx("img",{src:u.photo.src,srcSet:ee(u.photo.src),sizes:"(max-width: 767px) 100vw, 33vw",alt:u.photo.alt,loading:"lazy",decoding:"async"}),e.jsx("span",{className:`vn-mat-scrim ${t===f?"is-active":""}`,"aria-hidden":"true"}),e.jsx("span",{className:`vn-mat-label ${t===f?"is-active":""}`,children:u.label})]},u.label))})}const Me=()=>{if(typeof window>"u"||H())return!1;if(new URLSearchParams(window.location.search).has("loader"))return!0;try{return!sessionStorage.getItem("vn_seen")}catch{return!0}};function De({onDone:t}){const[n,l]=p.useState(0),[u,f]=p.useState(!1);return p.useEffect(()=>{try{sessionStorage.setItem("vn_seen","1")}catch{}const N=performance.now();let w=0,$=0,S=!1;const d=new Image;d.decoding="async";const L=()=>{S=!0};d.addEventListener("load",L,{once:!0}),d.addEventListener("error",L,{once:!0}),d.src=i.aerialSunset.src,d.complete&&(S=!0);let A=!1;document.fonts.ready.then(()=>{A=!0});const M=1100,v=2400,c=()=>{const E=performance.now()-N;let a=(S?55:Math.min(50,E/24))+(A?45:0);E>=v&&(a=100),$+=(a-$)*.12;const m=Math.min(100,Math.round($));if(l(m),m>=100&&E>=M){f(!0),window.setTimeout(t,950);return}w=requestAnimationFrame(c)};return w=requestAnimationFrame(c),()=>cancelAnimationFrame(w)},[t]),e.jsxs("div",{className:`vn-loader ${u?"is-leaving":""}`,"aria-hidden":"true",children:[e.jsx("p",{className:"vn-loader-mark",style:{backgroundPositionX:`${100-n}%`},children:"VILLA NORTH"}),e.jsxs("p",{className:"vn-loader-pct",children:[n,"%"]})]})}const ge=864e5,Re=(t,n)=>{const l=new Date(`${t}T12:00:00`);return new Date(l.getTime()+n*ge).toISOString().slice(0,10)},me=t=>String(t).padStart(2,"0"),Ce=(t,n,l)=>`${t}-${me(n+1)}-${me(l)}`,Ie=(t,n)=>new Date(t,n+1,0).getDate(),Oe=(t,n)=>(new Date(t,n,1).getDay()+6)%7,fe=(t,n)=>Math.round((new Date(`${n}T12:00:00`).getTime()-new Date(`${t}T12:00:00`).getTime())/ge),Pe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ge=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],X=t=>{const n=new Date(`${t}T12:00:00`);return`${Ge[n.getDay()]} ${n.getDate()} ${Pe[n.getMonth()]}`},Ve=(t,n)=>new Date(t,n,1).toLocaleDateString("en-GB",{month:"long",year:"numeric"}),Be=["M","T","W","T","F","S","S"];function We({stay:t,onChange:n,minDate:l}){const u=p.useMemo(()=>{const r=new Date(`${l}T12:00:00`);return{y:r.getFullYear(),m:r.getMonth()}},[l]),[f,N]=p.useState(u),[w,$]=p.useState(null),[S,d]=p.useState(t.from||l),L=p.useRef(!1),A=t.to??(t.from&&w&&w>t.from?w:null),M=r=>N(s=>{const y=new Date(s.y,s.m+r,1),T={y:y.getFullYear(),m:y.getMonth()};return T.y*12+T.m<u.y*12+u.m?s:T}),v=f.y*12+f.m<=u.y*12+u.m,c=r=>{!t.from||t.to||r<=t.from?n({from:r,to:null}):n({from:t.from,to:r})},E=r=>{var k;const y={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7,PageUp:-28,PageDown:28}[r.key];if(y===void 0)return;r.preventDefault();const T=((k=r.target.dataset)==null?void 0:k.vnDay)||S,F=Re(T,y);if(F<l)return;L.current=!0,d(F);const[g,q]=[Number(F.slice(0,4)),Number(F.slice(5,7))-1],P=g*12+q,R=f.y*12+f.m;if(P<R)N({y:g,m:q});else if(P>R+1){const x=new Date(g,q-1,1);N({y:x.getFullYear(),m:x.getMonth()})}};p.useEffect(()=>{if(!L.current)return;L.current=!1;const r=document.querySelector(`[data-vn-day="${S}"]`);r==null||r.focus()},[S]);const a=r=>{const s=new Date(f.y,f.m+r,1),y=s.getFullYear(),T=s.getMonth(),F=Array.from({length:Oe(y,T)},()=>null);for(let g=1;g<=Ie(y,T);g++)F.push(Ce(y,T,g));for(;F.length%7;)F.push(null);return e.jsxs("div",{className:"vn-cal-month",children:[e.jsx("p",{className:"vn-cal-title",children:Ve(y,T)}),e.jsx("div",{className:"vn-cal-dows","aria-hidden":"true",children:Be.map((g,q)=>e.jsx("span",{className:"vn-cal-dow",children:g},q))}),e.jsx("div",{className:"vn-cal-grid",role:"grid",onKeyDown:E,children:F.map((g,q)=>{if(!g)return e.jsx("span",{className:"vn-cal-cell is-blank"},`b${q}`);const P=g<l,R=g===t.from,k=!!A&&g===A,x=!!t.from&&!!A&&g>t.from&&g<A,I=["vn-cal-cell",R?"is-from":"",k?"is-to":"",x?"is-in":""].filter(Boolean).join(" ");return e.jsx("span",{className:I,children:e.jsx("button",{type:"button","data-vn-day":g,className:`vn-cal-day ${R||k?"is-end":""}`,disabled:P,tabIndex:g===S?0:-1,"aria-label":X(g),"aria-pressed":R||k,onFocus:()=>d(g),onMouseEnter:()=>$(g),onMouseLeave:()=>$(null),onClick:()=>c(g),children:Number(g.slice(8))})},g)})})]},`${y}-${T}`)},m=t.from&&A?fe(t.from,A):0;return e.jsxs("div",{className:"vn-cal",children:[e.jsxs("div",{className:"vn-cal-head",children:[e.jsx("span",{className:"vn-field-label",children:"Your dates"}),e.jsxs("span",{className:"vn-cal-nav",children:[e.jsx("button",{type:"button",onClick:()=>M(-1),disabled:v,"aria-label":"Previous month",children:"←"}),e.jsx("button",{type:"button",onClick:()=>M(1),"aria-label":"Next month",children:"→"})]})]}),e.jsxs("div",{className:"vn-cal-months",children:[a(0),a(1)]}),e.jsx("div",{className:"vn-cal-dim","aria-live":"polite",children:t.from&&A?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"vn-cal-dim-end",children:[e.jsx("em",{children:"Arrival"}),X(t.from)]}),e.jsx("span",{className:"vn-cal-dim-rule is-left"}),e.jsxs("span",{className:"vn-cal-dim-figure",children:[m," ",m===1?"night":"nights"]}),e.jsx("span",{className:"vn-cal-dim-rule is-right"}),e.jsxs("span",{className:"vn-cal-dim-end is-right",children:[e.jsx("em",{children:"Departure"}),X(A)]})]}):e.jsx("p",{className:"vn-cal-dim-empty",children:t.from?"Now choose the day you leave.":"Choose the day you arrive."})})]})}function He(){const[t,n]=p.useState(""),[l,u]=p.useState(""),[f,N]=p.useState(""),[w,$]=p.useState({from:null,to:null}),[S,d]=p.useState(7),[L,A]=p.useState(""),[M,v]=p.useState(null),[c,E]=p.useState(null),a=p.useMemo(()=>new Date().toISOString().slice(0,10),[]),m=w.from&&w.to?fe(w.from,w.to):0;function r(s){if(s.preventDefault(),!w.from||!w.to){v("Choose the day you arrive and the day you leave.");return}if(!t.trim()||!l.trim()){v("A name and an email are needed so the owner can reply.");return}v(null);const y={id:`vn-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,resourceId:"villanorth",date:w.from,endDate:w.to,people:S,customer:{name:t.trim(),phone:f.trim(),email:l.trim()},note:L.trim()||void 0,quote:{lines:[],total:0,deposit:0,units:m,estimate:!0},status:"REQUESTED",createdAt:new Date().toISOString()};je.add(y),E(y)}if(c){const s=c.endDate??c.date;return e.jsxs("div",{className:"vn-book-done",role:"status",children:[e.jsx("p",{className:"vn-book-done-title",children:"Your request is on its way."}),e.jsxs("p",{className:"vn-book-done-body",children:[X(c.date)," to ",X(s),", ",c.quote.units," ",c.quote.units===1?"night":"nights",", ",c.people," ",c.people===1?"guest":"guests",". The owner confirms each request personally. The price for your dates comes with the reply to ",c.customer.email,"."]}),e.jsxs("p",{className:"vn-book-note",children:["This is a prototype. The request lives only in this browser."," ",e.jsx(pe,{className:"vn-a",to:"/preview/villanorth/stjornbord",children:"See the owner's side"})," ","to watch it arrive."]}),e.jsx("button",{type:"button",className:"vn-ghost",onClick:()=>E(null),children:"Make another request"})]})}return e.jsxs("form",{className:"vn-book-form",onSubmit:r,noValidate:!0,children:[e.jsxs("div",{className:"vn-book-grid",children:[e.jsx(We,{stay:w,onChange:$,minDate:a}),e.jsxs("label",{className:"vn-field vn-field-guests",children:[e.jsx("span",{className:"vn-field-label",children:"Guests"}),e.jsx("select",{name:"guests",value:S,onChange:s=>d(Number(s.target.value)),children:[1,2,3,4,5,6,7].map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsx("span",{className:"vn-field-label",children:"Name"}),e.jsx("input",{type:"text",name:"name",autoComplete:"name",value:t,required:!0,onChange:s=>n(s.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsx("span",{className:"vn-field-label",children:"Email"}),e.jsx("input",{type:"email",name:"email",autoComplete:"email",inputMode:"email",value:l,required:!0,onChange:s=>u(s.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsxs("span",{className:"vn-field-label",children:["Phone ",e.jsx("span",{className:"vn-optional",children:"(optional)"})]}),e.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",inputMode:"tel",value:f,onChange:s=>N(s.target.value)})]}),e.jsxs("label",{className:"vn-field vn-field-wide",children:[e.jsxs("span",{className:"vn-field-label",children:["Anything you would like the owner to know ",e.jsx("span",{className:"vn-optional",children:"(optional)"})]}),e.jsx("textarea",{rows:3,name:"note",value:L,onChange:s=>A(s.target.value)})]})]}),M&&e.jsx("p",{className:"vn-field-error",role:"alert",children:M}),le()?e.jsx("a",{className:"vn-cta vn-cta-block",href:ze({checkin:w.from,checkout:w.to,adults:S}),children:"Continue to secure booking"}):e.jsx("button",{type:"submit",className:"vn-cta vn-cta-block",children:"Enquire about your stay"}),e.jsx("p",{className:"vn-book-note",children:le()?"Your dates carry over. Availability, the exact price and payment are all handled on the secure booking page.":"No payment today. Send your preferred dates and the owner replies with availability and the nightly price. Payment is settled on arrival."})]})}function fa(){const[t,n]=p.useState(!1),[l,u]=p.useState(V[0].id),[f,N]=p.useState(!1),[w,$]=p.useState(!1),S=p.useRef(null),d=p.useRef([]),L=p.useRef(null);p.useEffect(()=>{he(ae),document.title="Villa North",n(!0)},[]),p.useEffect(()=>xe(),[]),Le(t),p.useEffect(()=>{const a=L.current;if(!a||H())return;const m=()=>{var r;(r=a.play())==null||r.catch(()=>{})};return a.addEventListener("canplay",m),a.addEventListener("loadeddata",m),()=>{a.removeEventListener("canplay",m),a.removeEventListener("loadeddata",m)}},[]);const[A,M]=p.useState(Me),v=V.find(a=>a.id===l)??V[0],c=a=>m=>{var r;m.preventDefault(),(r=document.getElementById(a))==null||r.scrollIntoView({behavior:H()?"auto":"smooth"}),history.replaceState(null,"",`#${a}`)},E=(a,m)=>{var y;if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"].includes(a.key))return;a.preventDefault();const r=a.key==="ArrowDown"||a.key==="ArrowRight"?1:-1,s=(m+r+V.length)%V.length;(y=d.current[s])==null||y.focus()};return e.jsxs("div",{ref:S,className:"vn-root",children:[e.jsx("style",{children:Ye}),A&&e.jsx(De,{onDone:()=>{M(!1),window.dispatchEvent(new Event("vn:revealed"))}}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Ee)}}),e.jsx(ye,{company:ve}),e.jsxs("header",{className:"vn-nav",children:[e.jsx("a",{className:"vn-nav-mark",href:"#top",onClick:c("top"),children:"VILLA NORTH"}),e.jsxs("nav",{className:"vn-nav-links","aria-label":"Page",children:[e.jsx("a",{href:"#drawing",onClick:c("drawing"),children:"The house"}),e.jsx("a",{href:"#rooms",onClick:c("rooms"),children:"Rooms"}),e.jsx("a",{href:"#gallery",onClick:c("gallery"),children:"Gallery"}),e.jsx("a",{href:"#tours",onClick:c("tours"),children:"Tours"}),e.jsx("a",{href:"#guests",onClick:c("guests"),children:"Guests"})]}),e.jsx("a",{className:"vn-nav-cta",href:"#booking",onClick:c("booking"),children:"Enquire about your stay"})]}),e.jsxs("section",{className:"vn-hero",id:"top",children:[e.jsx("div",{className:"vn-hero-media vn-rv",children:e.jsx("img",{src:i.aerialSunset.src,srcSet:ee(i.aerialSunset.src),sizes:"100vw",alt:i.aerialSunset.alt,loading:"eager",decoding:"async"})}),e.jsxs("h1",{className:"vn-wordmark","aria-label":"Villa North",children:[e.jsx("span",{className:"vn-wm-rule","aria-hidden":"true"}),e.jsxs("span",{className:"vn-wm-row","aria-hidden":"true",children:[e.jsx("span",{className:"vn-wm-line",children:e.jsx("span",{className:"vn-wm-word",children:"VILLA"})})," ",e.jsx("span",{className:"vn-wm-line",children:e.jsx("span",{className:"vn-wm-word",children:"NORTH"})})]})]}),e.jsxs("div",{className:"vn-hero-block",children:[e.jsx("p",{className:"vn-measure-text",children:"Sleeps 7 · four bedrooms"}),e.jsx("p",{className:"vn-hero-sub",children:"Designed with precision, built for gathering. An engineer's house of glass and dark timber above Fnjóskadalur, made for seven."}),e.jsx("a",{className:"vn-cta",href:"#booking",onClick:c("booking"),children:"Enquire about your stay"})]})]}),e.jsxs("section",{className:"vn-drawing",id:"drawing",children:[e.jsxs("div",{className:"vn-drawing-copy",children:[e.jsx(C,{text:"Every angle, decided first.",size:64,floor:32,measure:600}),e.jsx("p",{className:"vn-body vn-rv",children:"The owner trained as an engineer, and every line feels intentional: an asymmetric roofline, long glass on one side and dark timber cladding on the other, cut into a hillside above Fnjóskadalur."})]}),e.jsxs("div",{className:"vn-drawing-inner",children:[e.jsx("div",{className:"vn-elev-svg",children:e.jsxs("svg",{className:"vn-elev",viewBox:"0 0 1200 802",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[e.jsxs("defs",{children:[e.jsx("pattern",{id:"vnHatch",width:"9",height:"9",patternTransform:"rotate(45)",patternUnits:"userSpaceOnUse",children:e.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"9",stroke:K,strokeWidth:"1"})}),e.jsx("clipPath",{id:"vnGableClip",children:e.jsx("path",{d:"M572,272 L290,384 L289,660 L607,663 L607,204 Z"})})]}),e.jsx("rect",{className:"vn-elev-hatch",x:"289",y:"204",width:"318",height:"459",fill:"url(#vnHatch)",clipPath:"url(#vnGableClip)"}),e.jsx("path",{className:"vn-elev-secondary",d:"M572,272 L290,384 L289,660 L607,663"}),e.jsx("path",{className:"vn-elev-mullions",d:"M604,459 L983,459 M702,271 L714,660 M877,350 L885,660 M976,390 L989,660"}),e.jsx("path",{className:"vn-elev-line",d:"M570,151 L1030,368 L1033,525 M607,204 L607,663 L983,660"})]})}),e.jsx("div",{className:"vn-elev-photo",children:e.jsx("img",{src:i.glassGrid.src,srcSet:ee(i.glassGrid.src),sizes:"100vw",alt:i.glassGrid.alt,loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"vn-elev-caps",children:[e.jsx("p",{className:"vn-elev-cap vn-elev-cap-sketch",children:"The elevation, traced from the photograph line for line."}),e.jsx("p",{className:"vn-elev-cap vn-elev-cap-photo",children:"Villa North, Fnjóskadalur valley."})]})]}),e.jsx("p",{className:"vn-elev-credit vn-rv",children:"Traced to the pixel from this exact photograph, the owner's own: the roofline, both posts, the window grid and the ground it stands on."}),e.jsxs("div",{className:"vn-drawing-inside",children:[e.jsxs("div",{className:"vn-drawing-inside-copy",children:[e.jsx("p",{className:"vn-drawing-inside-kicker",children:"Sama þakið, að innan"}),e.jsx("p",{className:"vn-drawing-inside-line",children:"The angle drawn above is the same angle overhead in here. The roofline traced outside is the ceiling line inside."})]}),e.jsx(j,{photo:i.livingTall,className:"vn-drawing-inside-fig",drift:7})]})]}),e.jsxs("section",{className:"vn-valley",id:"valley",children:[e.jsxs("div",{className:"vn-valley-copy",children:[e.jsx(C,{text:"The valley below.",size:56,floor:30,measure:520}),e.jsx("p",{className:"vn-body vn-rv",children:ce.intro}),e.jsx("dl",{className:"vn-draws vn-rv",children:ce.draws.map(a=>e.jsxs("div",{children:[e.jsx("dt",{children:a.name}),e.jsx("dd",{children:a.note})]},a.name))})]}),e.jsxs("div",{className:"vn-valley-figs",children:[e.jsx(j,{photo:i.aerialRiver,className:"vn-valley-main",drift:11}),e.jsxs("div",{className:"vn-valley-duo",children:[e.jsx(j,{photo:i.aerialMist,className:"vn-valley-duo-a",drift:8}),e.jsx(j,{photo:i.aerialSunsetB,className:"vn-valley-duo-b",drift:8})]})]})]}),e.jsxs("section",{className:"vn-film",id:"film","aria-label":"Aerial film of the house",children:[e.jsxs("div",{className:"vn-film-bleed",children:[e.jsx("img",{src:_.poster,srcSet:`${_.posterSmall} 800w, ${_.poster} 1120w`,sizes:"100vw",alt:i.aerialSunset.alt,loading:"lazy",decoding:"async",className:"vn-film-poster"}),e.jsx("video",{className:`vn-film-video ${w?"is-errored":""}`,poster:_.poster,autoPlay:!H(),muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",onError:()=>$(!0),children:e.jsx("source",{src:_.src,type:"video/mp4"})}),e.jsxs("div",{className:"vn-film-caps",children:[e.jsx("p",{className:"vn-film-label",children:"Úr lofti"}),e.jsx("p",{className:"vn-film-cap",children:"The house, the hillside and the whole run of the valley, in one pass."})]})]}),e.jsx("p",{className:"vn-film-credit vn-rv",children:_.credit})]}),e.jsxs("section",{className:"vn-rooms",id:"rooms",children:[e.jsx(C,{text:"Plan who sleeps where.",size:64,floor:32,measure:620}),e.jsx("p",{className:"vn-body vn-rv",children:"A simple guide to how the villa flows: four bedrooms, the sitting room, the kitchen and the sundeck. Einföld skýringarmynd, ekki í mælikvarða: a schematic, not to scale."}),e.jsx(j,{photo:i.mezzanine,className:"vn-rooms-lead",drift:11}),e.jsxs("div",{className:"vn-rooms-explorer",children:[e.jsx("div",{className:"vn-rooms-index",role:"group","aria-label":"Herbergi",children:V.map((a,m)=>e.jsxs("div",{className:"vn-rooms-index-item",children:[(m===0||V[m-1].level!==a.level)&&e.jsx("p",{className:"vn-rooms-zone-label",children:a.level==="efri"?"Efri hæð (upstairs)":"Neðri hæð (main level)"}),e.jsxs("button",{type:"button",ref:r=>{d.current[m]=r},className:`vn-room-btn ${l===a.id?"is-active":""}`,onMouseEnter:()=>u(a.id),onFocus:()=>u(a.id),onClick:()=>u(a.id),onKeyDown:r=>E(r,m),"aria-pressed":l===a.id,children:[e.jsx("span",{className:"vn-room-btn-label",children:a.label}),e.jsx("span",{className:"vn-room-btn-fact",children:a.fact})]})]},a.id))}),e.jsxs("div",{className:"vn-rooms-pane","aria-live":"polite",children:[e.jsx(j,{photo:v.photo,className:"vn-rooms-pane-frame",sizes:"(max-width: 899px) 100vw, 46vw",drift:8}),e.jsx("p",{className:"vn-rooms-pane-label",children:v.label}),e.jsxs("p",{className:"vn-rooms-pane-fact",children:[v.fact,v.note?` · ${v.note}`:""]}),v.photoNote&&e.jsx("p",{className:"vn-rooms-pane-note",children:v.photoNote})]}),e.jsx("div",{className:"vn-rooms-acc",children:V.map(a=>e.jsxs("div",{className:"vn-rooms-acc-item",children:[e.jsxs("button",{type:"button",className:`vn-rooms-acc-btn ${l===a.id?"is-open":""}`,onClick:()=>u(a.id),"aria-expanded":l===a.id,children:[e.jsx("span",{children:a.label}),e.jsx("span",{className:"vn-rooms-acc-fact",children:a.fact})]}),e.jsx("div",{className:`vn-rooms-acc-panel ${l===a.id?"is-open":""}`,children:e.jsxs("div",{className:"vn-rooms-acc-panel-in",children:[e.jsx(j,{photo:a.photo}),a.note&&e.jsx("p",{className:"vn-rooms-acc-note",children:a.note}),a.photoNote&&e.jsx("p",{className:"vn-rooms-acc-note",children:a.photoNote})]})})]},a.id))})]}),e.jsxs("div",{className:"vn-rooms-bath vn-rv",children:[e.jsx(j,{photo:ne.photo,className:"vn-rooms-bath-frame",drift:6}),e.jsxs("div",{children:[e.jsx("p",{className:"vn-rooms-bath-fact",children:ne.fact}),e.jsxs("p",{className:"vn-rooms-bath-detail",children:["ATH: ",ne.detail]})]})]})]}),e.jsxs("section",{className:"vn-materials",id:"materials",children:[e.jsx(C,{text:"Furnished like the real thing.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:U.intro}),e.jsx("ul",{className:"vn-materials-names vn-rv",children:U.names.map(a=>e.jsx("li",{children:a},a))}),e.jsx(qe,{}),e.jsxs("blockquote",{className:"vn-quote-block vn-rv",children:[e.jsxs("p",{children:["“",U.quote.quote,"”"]}),e.jsxs("cite",{children:[U.quote.author,", ",U.quote.when]})]})]}),e.jsxs("section",{className:"vn-glow",id:"glow",children:[e.jsxs("div",{className:"vn-glow-bleed",children:[e.jsx("img",{src:J.poster,srcSet:`${J.posterSmall} 800w, ${J.poster} 1280w`,sizes:"100vw",alt:i.winterNight.alt,loading:"lazy",decoding:"async",className:"vn-glow-poster"}),e.jsx("video",{ref:L,className:`vn-glow-video ${f?"is-errored":""}`,poster:J.poster,autoPlay:!H(),muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true",onError:()=>N(!0),children:e.jsx("source",{src:J.src,type:"video/mp4"})}),e.jsxs("div",{className:"vn-glow-caps",children:[e.jsx("p",{className:"vn-glow-label",children:"Glóðin"}),e.jsx("p",{className:"vn-glow-cap",children:Y.intro})]})]}),e.jsxs("div",{className:"vn-glow-row",children:[e.jsx(j,{photo:i.wineGlasses,className:"vn-glow-wine",drift:9}),e.jsxs("div",{className:"vn-glow-tub-col",children:[e.jsx(j,{photo:i.tubNightSmall,className:"vn-glow-tub",maxWidth:240,sizes:"240px",drift:6}),e.jsx("p",{className:"vn-glow-fact",children:Y.auroraFact})]}),e.jsx(j,{photo:i.winterRiver,className:"vn-glow-river",maxWidth:420,sizes:"420px",drift:7})]}),e.jsxs("blockquote",{className:"vn-quote-block vn-glow-quote vn-rv",children:[e.jsxs("p",{children:["“",Y.quote.quote,"”"]}),e.jsxs("cite",{children:[Y.quote.author,", ",Y.quote.when]})]})]}),e.jsxs("section",{className:"vn-welcome",id:"welcome",children:[e.jsxs("div",{className:"vn-welcome-copy",children:[e.jsx(C,{text:"Ready before you arrive.",size:56,floor:30,measure:520}),e.jsx("p",{className:"vn-body vn-rv",children:de.intro}),e.jsx("ul",{className:"vn-ritual-list vn-rv",children:de.items.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs("div",{className:"vn-welcome-figs",children:[e.jsx(j,{photo:i.kitchenPendants,className:"vn-welcome-main"}),e.jsxs("div",{className:"vn-welcome-duo",children:[e.jsx(j,{photo:i.dining,className:"vn-welcome-duo-a"}),e.jsx(j,{photo:i.livingSofa,className:"vn-welcome-duo-b"})]})]})]}),e.jsxs("section",{className:"vn-gallery",id:"gallery",children:[e.jsxs("div",{className:"vn-gallery-head",children:[e.jsx(C,{text:"The house in pictures.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:"Every photograph is the house itself, from the listing's own set. The full gallery grows as new photography arrives."})]}),e.jsxs("div",{className:"vn-gallery-grid",children:[e.jsx(j,{photo:i.glassGrid,className:"vn-g-a",drift:8}),e.jsx(j,{photo:i.mezzanine,className:"vn-g-b",drift:6}),e.jsx(j,{photo:i.kitchenRun,className:"vn-g-c",drift:7}),e.jsx(j,{photo:i.living,className:"vn-g-d",drift:6}),e.jsx(j,{photo:i.bedroomAttic,className:"vn-g-e",drift:8}),e.jsx(j,{photo:i.walkway,className:"vn-g-f",drift:6}),e.jsx(j,{photo:i.gridSunset,className:"vn-g-g",drift:9}),e.jsx(j,{photo:i.bath,className:"vn-g-h",drift:6}),e.jsx(j,{photo:i.claddingDetail,className:"vn-g-i",drift:7})]})]}),e.jsxs("section",{className:"vn-tours",id:"tours",children:[e.jsxs("div",{className:"vn-tours-head",children:[e.jsx(C,{text:"Trips from the door.",size:56,floor:30,measure:560}),e.jsx("p",{className:"vn-body vn-rv",children:"The valley is a base as much as a destination. This is where guests will browse and book tours without leaving the page."})]}),e.jsx("div",{className:"vn-tours-grid vn-rv",children:[["Whale watching","From Akureyri harbour, twenty minutes away"],["Goðafoss and Mývatn","A day east along the Ring Road"],["Riding in the valley","Icelandic horses, an hour or an afternoon"]].map(([a,m])=>e.jsxs("div",{className:"vn-tour-card",children:[e.jsx("p",{className:"vn-tour-name",children:a}),e.jsx("p",{className:"vn-tour-note",children:m}),e.jsx("p",{className:"vn-tour-tag",children:"Example"})]},a))}),e.jsx("p",{className:"vn-tours-wire vn-rv",children:"Tour booking connects here — TourDesk or Bókun, whichever is chosen. Guests book trips on the spot, and the house earns a commission on every seat."})]}),e.jsxs("section",{className:"vn-guests",id:"guests",children:[e.jsx(C,{text:"What guests keep saying.",size:64,floor:32,measure:620}),e.jsxs("p",{className:"vn-guests-meta vn-rv",children:[G.rating.toFixed(1)," of 5 across ",G.reviewCount," reviews · ",G.badges.join(" · ")]}),e.jsx("ul",{className:"vn-quotes",children:Ae.map(a=>e.jsxs("li",{className:"vn-quote vn-rv",children:[e.jsx("blockquote",{children:e.jsxs("p",{children:["“",a.quote,"”"]})}),e.jsxs("p",{className:"vn-quote-by",children:[a.author,", ",a.when]})]},a.author))}),e.jsx("dl",{className:"vn-themes vn-rv","aria-label":"What reviews mention most",children:Se.map(a=>e.jsxs("div",{children:[e.jsx("dt",{children:a.theme}),e.jsx("dd",{children:a.mentions})]},a.theme))}),e.jsx("p",{className:"vn-stat vn-rv",children:"Counts from the listing's own review index, August 2026."})]}),e.jsxs("section",{className:"vn-book",id:"booking",children:[e.jsxs("div",{className:"vn-book-intro",children:[e.jsx(C,{text:"Ask for your dates.",size:72,floor:34,measure:560}),e.jsxs("p",{className:"vn-body vn-rv",children:["Requests go straight to ",G.name,", who responds to ",G.responseRate," of messages, usually ",G.respondsWithin,"."]}),e.jsxs("div",{className:"vn-owner-note vn-rv",children:[e.jsx("p",{className:"vn-owner-note-label",children:"The owner's dashboard"}),e.jsxs("p",{className:"vn-owner-note-body",children:["Every request lands in a dashboard built for this house: confirm or decline in one tap, watch requests arrive."," ",e.jsx(pe,{className:"vn-a",to:"/preview/villanorth/stjornbord",children:"See how direct bookings could work"})," ","beside this tab and send yourself a request."]})]})]}),e.jsx(He,{})]}),e.jsxs("section",{className:"vn-contact",id:"contact",children:[e.jsxs("div",{className:"vn-contact-copy",children:[e.jsx(C,{text:"Finding the house.",size:56,floor:30,measure:520}),e.jsxs("dl",{className:"vn-contact-list vn-rv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Where"}),e.jsx("dd",{children:"Fnjóskadalur, Þingeyjarsveit, North Iceland"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"From Akureyri"}),e.jsx("dd",{children:"Fifteen to twenty minutes through Vaðlaheiðargöng"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Phone"}),e.jsx("dd",{children:e.jsx("a",{className:"vn-a",href:"tel:+3548449808",children:"+354 844 9808"})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Email"}),e.jsx("dd",{children:e.jsx("a",{className:"vn-a",href:"mailto:villanorthiceland@gmail.com",children:"villanorthiceland@gmail.com"})})]})]})]}),e.jsxs("div",{className:"vn-contact-map vn-rv",children:[e.jsx("iframe",{title:"Map of Fnjóskadalur, North Iceland",src:"https://www.google.com/maps?q=Fnj%C3%B3skadalur%2C%20%C3%9Eingeyjarsveit&z=10&output=embed",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0}),e.jsx("p",{className:"vn-map-cap",children:"Fnjóskadalur — the valley east of Akureyri."})]})]}),e.jsx("footer",{className:"vn-foot",children:e.jsxs("div",{className:"vn-foot-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"vn-foot-mark",children:"VILLA NORTH"}),e.jsx("p",{className:"vn-foot-line",children:"Fnjóskadalur valley, Þingeyjarsveit, North Iceland"}),e.jsxs("p",{className:"vn-foot-line",children:["Superhost, ",G.yearsHosting," years hosting. ",G.profession,"."]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"vn-foot-line",children:["Check-in: ",B.checkIn]}),e.jsxs("p",{className:"vn-foot-line",children:["Check-out: ",B.checkOut]}),e.jsxs("p",{className:"vn-foot-line",children:["Guests ",B.guests," · ",B.bedrooms," bedrooms · ",B.beds," beds · ",B.baths," bathrooms"]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"vn-foot-line",children:["Practical to know: the washer and dryer are outside the main house."," ",B.security,". ",B.water,"."]}),e.jsx("p",{className:"vn-foot-line",children:"Photography throughout this prototype comes directly from the Villa North Airbnb listing, retrieved August 2026."}),e.jsx("p",{className:"vn-foot-line",children:Y.filmCredit}),e.jsx("p",{className:"vn-foot-line",children:"A private design prototype by SNDR. Booking requests stay a local demonstration in this browser and are never submitted."})]})]})}),e.jsx(ke,{company:ve})]})}const Ye=`
@font-face { font-family: 'Apfel Grotezk'; src: url('${W}fonts/apfel-grotezk/ApfelGrotezk-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Apfel Grotezk'; src: url('${W}fonts/apfel-grotezk/ApfelGrotezk-Mittel.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Apfel Grotezk'; src: url('${W}fonts/apfel-grotezk/ApfelGrotezk-Fett.woff2') format('woff2'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${W}fonts/onest/Onest-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${W}fonts/onest/Onest-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
@font-face { font-family: 'Onest'; src: url('${W}fonts/onest/Onest-Bold.woff2') format('woff2'); font-weight: 700; font-display: swap; }
@font-face { font-family: 'Azeret Mono'; src: url('${W}fonts/azeret-mono/AzeretMono-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Azeret Mono'; src: url('${W}fonts/azeret-mono/AzeretMono-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }

.vn-root {
  --u: clamp(.44px, 100vw / 1440, 1.15px);
  --vn-c: ${ae};
  --vn-ink: ${K};
  --vn-line: #62656A;
  --vn-amber: #C29049;
  --vn-amber-text: #8A5F1E;
  --vn-night: ${Z};
  --vn-mute: color-mix(in srgb, var(--vn-ink) 66%, transparent);
  --vn-hair: color-mix(in srgb, var(--vn-ink) 16%, transparent);
  background: var(--vn-c);
  color: var(--vn-ink);
  font-family: ${Te};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
.vn-root ::selection { background: var(--vn-amber); color: ${K}; }
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
  padding: calc(var(--u) * 18) calc(var(--u) * 44);
  color: #F2F1EE;
  mix-blend-mode: difference;
}
.vn-nav-mark {
  font-family: ${D}; font-weight: 700; letter-spacing: .06em; text-decoration: none;
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

/* hero */
.vn-hero { position: relative; min-height: 100svh; display: grid; }
.vn-hero-media { position: absolute; inset: 0; overflow: hidden; }
.vn-hero-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vn-hero-media::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
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
  font-family: ${D}; font-weight: 700; letter-spacing: .05em;
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
  margin: 0; font-family: ${h}; font-weight: 500; font-size: ${o(15,13)};
  letter-spacing: .04em; color: #F2F1EE;
}
.vn-hero-sub {
  margin: calc(var(--u) * 22) 0 0; font-size: ${o(18,15)}; line-height: 1.55;
  font-weight: 400; max-width: 42ch; color: rgba(242,241,238,.9);
}
.vn-cta {
  display: inline-block; margin-top: calc(var(--u) * 26);
  background: var(--vn-amber); color: ${K};
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
  margin: 0; font-family: ${D}; font-weight: 700; letter-spacing: -.01em;
  line-height: 1.14; text-wrap: balance;
}
.vn-line {
  display: inline-block; overflow: hidden; vertical-align: bottom;
  padding: .2em .04em .12em; margin: -.2em -.04em -.12em;
}
.vn-word { display: inline-block; }
.vn-body {
  font-size: ${o(17,15)}; line-height: 1.6; font-weight: 400;
  color: var(--vn-mute); max-width: 58ch; margin: calc(var(--u) * 24) 0 0;
}
.vn-stat { font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: calc(var(--u) * 14) 0 0; }
.vn-a { color: inherit; }
.vn-quote-block { max-width: 60ch; margin: calc(var(--u) * 40) 0 0; }
.vn-quote-block p { margin: 0; font-size: ${o(20,16)}; line-height: 1.45; font-weight: 400; }
.vn-quote-block cite {
  display: block; font-style: normal; font-family: ${h}; font-size: ${o(12,12)};
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
.vn-frame { position: relative; overflow: hidden; margin: 0; background: color-mix(in srgb, var(--vn-ink) 6%, transparent); }
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
.vn-elev-cap { grid-area: 1 / 1; margin: 0; font-family: ${D}; font-weight: 500; font-size: ${o(22,16)}; }
.vn-elev-cap-sketch { color: var(--vn-ink); }
.vn-elev-cap-photo { color: #F2F1EE; opacity: 0; }
.vn-force-resolved .vn-elev-svg { opacity: 0 !important; }
.vn-force-resolved .vn-elev-photo { opacity: 1 !important; }
.vn-elev-credit {
  font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); line-height: 1.6;
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
  font-family: ${h}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase;
  color: var(--vn-amber-text); margin: 0 0 calc(var(--u) * 14);
}
.vn-drawing-inside-line {
  font-family: ${D}; font-weight: 500; font-size: ${o(23,18)}; line-height: 1.4; margin: 0;
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
  font-family: ${h}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase;
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
.vn-room-btn-fact { font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); }
.vn-room-btn.is-active .vn-room-btn-label { color: var(--vn-amber-text); }
.vn-rooms-pane { display: block; }
.vn-rooms-pane-frame { width: 100%; }
.vn-rooms-pane-label { font-family: ${D}; font-weight: 500; font-size: ${o(20,17)}; margin: calc(var(--u) * 20) 0 0; }
.vn-rooms-pane-fact { font-size: ${o(15,14)}; color: var(--vn-mute); margin: calc(var(--u) * 8) 0 0; line-height: 1.5; }
.vn-rooms-pane-note { font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: calc(var(--u) * 10) 0 0; }
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
  border-top: 1px solid var(--vn-hair); font-family: ${h}; font-size: ${o(15,13)}; letter-spacing: .04em;
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
  font-family: ${h}; font-size: ${o(13,12)}; color: #F2F1EE; white-space: nowrap;
  opacity: 0; transform: translateY(6px);
  transition: opacity .3s ease .1s, transform .3s ease .1s;
}
.vn-mat-label.is-active { opacity: 1; transform: translateY(0); }

/* the glow */
.vn-glow { padding: calc(var(--u) * 90) 0; transition: background .5s ease, color .5s ease; }
.vn-glow.is-dark, .vn-static .vn-glow { background: var(--vn-night); color: #EFEEEA; }
.vn-glow.is-dark, .vn-static .vn-glow { --vn-mute: rgba(239,238,234,.62); --vn-amber-text: #D9A968; }
.vn-glow-bleed { position: relative; aspect-ratio: 21 / 9; overflow: hidden; background: ${Z}; }
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
.vn-glow-label { font-family: ${h}; font-size: ${o(12,12)}; letter-spacing: .16em; text-transform: uppercase; color: #D9A968; margin: 0 0 calc(var(--u) * 10); }
.vn-glow-cap { margin: 0; font-family: ${D}; font-weight: 500; font-size: ${o(24,17)}; line-height: 1.3; }
.vn-glow-row {
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: calc(var(--u) * 24); align-items: start;
  max-width: calc(var(--u) * 1440); margin: calc(var(--u) * 48) auto 0; padding: 0 calc(var(--u) * 48);
}
.vn-glow-tub-col { display: flex; flex-direction: column; gap: calc(var(--u) * 14); align-items: start; }
/* Every child of .vn-frame is position:absolute, so the figure has no in-flow
   content and its fit-content width is 0. In .vn-glow-row (a grid) align-items
   is the BLOCK axis and items still stretch inline, so the other two frames are
   fine. In this flex COLUMN align-items is the INLINE axis, so start = shrink
   to fit = width 0, aspect-ratio then took height to 0, and the photo loaded
   but never painted. Give width so the maxWidth prop has something to cap. */
.vn-glow-tub-col > .vn-frame { width: 100%; }
.vn-glow-fact { font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: 0; max-width: 26ch; }
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
  font-family: ${h}; font-size: ${o(14,13)}; padding: calc(var(--u) * 10) 0; border-top: 1px solid var(--vn-hair);
}
.vn-welcome-figs { display: grid; gap: calc(var(--u) * 20); }
.vn-welcome-duo { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 20); }

/* guests */
.vn-guests { padding: calc(var(--u) * 150) calc(var(--u) * 48); max-width: calc(var(--u) * 1240); margin: 0 auto; }
.vn-guests-meta { font-family: ${h}; font-size: ${o(13,12)}; color: var(--vn-mute); margin: calc(var(--u) * 20) 0 0; }
.vn-quotes { list-style: none; margin: calc(var(--u) * 64) 0 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 48); }
.vn-quote blockquote { margin: 0; }
.vn-quote blockquote p { margin: 0; font-size: ${o(20,16)}; line-height: 1.45; font-weight: 400; }
.vn-quote-by { font-family: ${h}; font-size: ${o(12,12)}; color: var(--vn-mute); margin: calc(var(--u) * 16) 0 0; }
.vn-themes {
  display: flex; flex-wrap: wrap; gap: calc(var(--u) * 48) calc(var(--u) * 64);
  margin: calc(var(--u) * 72) 0 0; padding: calc(var(--u) * 24) 0 0; border-top: 1px solid var(--vn-hair);
}
.vn-themes div { display: flex; align-items: baseline; gap: calc(var(--u) * 12); }
.vn-themes dt { font-size: ${o(14,13)}; color: var(--vn-mute); }
.vn-themes dd { margin: 0; font-variant-numeric: tabular-nums; font-family: ${h}; font-size: ${o(26,19)}; }

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
.vn-field-label { font-family: ${h}; font-size: ${o(11,12)}; letter-spacing: .1em; text-transform: uppercase; color: var(--vn-mute); }
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
  font-family: ${h}; font-size: ${o(11,11)}; letter-spacing: .1em; text-transform: uppercase;
  color: var(--vn-ink); margin: 0 0 calc(var(--u) * 10);
}
.vn-cal-dows, .vn-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
.vn-cal-dow {
  font-family: ${h}; font-size: 10px; letter-spacing: .06em; text-align: center;
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
  font-family: ${h}; font-size: ${o(13,13)}; font-variant-numeric: tabular-nums;
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
.vn-cal-dim-end { font-family: ${h}; font-size: ${o(13,12)}; font-variant-numeric: tabular-nums; }
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
  font-family: ${h}; font-size: ${o(12,12)}; letter-spacing: .06em;
  text-transform: uppercase; color: var(--vn-amber-text); white-space: nowrap;
}
.vn-cal-dim-empty { margin: 0; grid-column: 1 / -1; font-size: ${o(13,13)}; color: var(--vn-mute); }

.vn-owner-note { margin-top: calc(var(--u) * 44); padding-top: calc(var(--u) * 22); border-top: 1px solid var(--vn-hair); }
.vn-owner-note-label { font-family: ${h}; font-size: ${o(11,12)}; letter-spacing: .12em; text-transform: uppercase; color: var(--vn-amber-text); margin: 0 0 calc(var(--u) * 10); }
.vn-owner-note-body { font-size: ${o(14,13)}; line-height: 1.6; color: var(--vn-mute); margin: 0; max-width: 44ch; }
.vn-book-note { font-size: ${o(13,12)}; line-height: 1.6; color: var(--vn-mute); margin: calc(var(--u) * 16) 0 0; }
.vn-book-done-title { margin: 0; font-family: ${D}; font-weight: 700; font-size: ${o(30,21)}; }
.vn-book-done-body { margin: calc(var(--u) * 16) 0 0; line-height: 1.6; font-size: ${o(16,14)}; }
.vn-ghost {
  margin-top: calc(var(--u) * 22); font: inherit; font-size: ${o(14,13)}; font-weight: 500; cursor: pointer;
  min-height: 44px; background: none; color: var(--vn-ink);
  border: 1px solid var(--vn-hair); border-radius: 2px; padding: calc(var(--u) * 10) calc(var(--u) * 18);
}
.vn-ghost:hover { border-color: var(--vn-amber); }

/* the aerial film — full bleed, same fallback contract as the glow */
.vn-film { margin: calc(var(--u) * 140) 0 calc(var(--u) * 40); }
.vn-film-bleed { position: relative; aspect-ratio: 21 / 9; overflow: hidden; background: ${Z}; }
.vn-film-poster, .vn-film-video {
  position: absolute; inset: 0; z-index: 0;
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.vn-film-video { z-index: 1; transition: opacity .4s ease; }
.vn-film-video.is-errored { opacity: 0; }
.vn-film-caps {
  position: absolute; z-index: 2; left: calc(var(--u) * 48); bottom: calc(var(--u) * 36);
  max-width: 46ch;
  /* same device as the glow: a pool anchored under the type, not the film's
     shifting light, so legibility does not depend on the current frame */
  padding: calc(var(--u) * 18) calc(var(--u) * 22);
  background: radial-gradient(120% 140% at 20% 100%, rgba(16,18,22,.62) 0%, rgba(16,18,22,.34) 55%, transparent 100%);
}
.vn-film-label { margin: 0 0 6px; font-family: ${h}; font-size: ${o(11,11)}; letter-spacing: .14em; text-transform: uppercase; color: var(--vn-amber); }
.vn-film-cap { margin: 0; color: #F2F1EE; font-size: ${o(16,14)}; line-height: 1.5; }
.vn-film-credit {
  max-width: calc(var(--u) * 1440); margin: calc(var(--u) * 14) auto 0;
  padding: 0 calc(var(--u) * 48);
  font-family: ${h}; font-size: ${o(11,11)}; color: var(--vn-mute); letter-spacing: .04em;
}

/* gallery — three columns, ratios as shot, drift everywhere */
.vn-gallery { max-width: calc(var(--u) * 1440); margin: 0 auto; padding: calc(var(--u) * 120) calc(var(--u) * 48) 0; }
.vn-gallery-head { max-width: 56ch; }
.vn-gallery-grid {
  margin-top: calc(var(--u) * 48);
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 20);
  align-items: start;
}

/* tours — the drawn slot for the engine that is not chosen yet */
.vn-tours { max-width: calc(var(--u) * 1440); margin: 0 auto; padding: calc(var(--u) * 120) calc(var(--u) * 48) 0; }
.vn-tours-head { max-width: 56ch; }
.vn-tours-grid { margin-top: calc(var(--u) * 44); display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 20); }
.vn-tour-card {
  position: relative; border: 1px dashed color-mix(in srgb, var(--vn-ink) 34%, transparent);
  border-radius: 2px; padding: calc(var(--u) * 26) calc(var(--u) * 24) calc(var(--u) * 22);
  min-height: calc(var(--u) * 150);
}
.vn-tour-name { margin: 0; font-family: ${D}; font-weight: 700; font-size: ${o(20,17)}; }
.vn-tour-note { margin: calc(var(--u) * 8) 0 0; color: var(--vn-mute); font-size: ${o(14,13)}; line-height: 1.55; }
.vn-tour-tag {
  position: absolute; top: calc(var(--u) * 14); right: calc(var(--u) * 16); margin: 0;
  font-family: ${h}; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--vn-mute);
}
.vn-tours-wire {
  margin: calc(var(--u) * 26) 0 0; max-width: 62ch;
  font-family: ${h}; font-size: ${o(12,12)}; line-height: 1.7; color: var(--vn-amber-text);
}

/* contact — the drawing plate with a live map */
.vn-contact {
  display: grid; grid-template-columns: 5fr 6fr; gap: calc(var(--u) * 88); align-items: start;
  max-width: calc(var(--u) * 1440); margin: 0 auto;
  padding: calc(var(--u) * 40) calc(var(--u) * 48) calc(var(--u) * 150);
}
.vn-contact-list { margin: calc(var(--u) * 36) 0 0; display: grid; gap: calc(var(--u) * 18); }
.vn-contact-list div { display: grid; grid-template-columns: calc(var(--u) * 150) 1fr; gap: calc(var(--u) * 16); align-items: baseline; }
.vn-contact-list dt { font-family: ${h}; font-size: ${o(11,11)}; letter-spacing: .12em; text-transform: uppercase; color: var(--vn-mute); }
.vn-contact-list dd { margin: 0; font-size: ${o(16,15)}; line-height: 1.55; }
.vn-contact-map { border: 1px solid var(--vn-hair); border-radius: 2px; padding: calc(var(--u) * 14); background: color-mix(in srgb, var(--vn-ink) 4%, var(--vn-c)); }
.vn-contact-map iframe { display: block; width: 100%; aspect-ratio: 4 / 3; border: 0; filter: grayscale(1) contrast(1.02); }
.vn-map-cap { margin: calc(var(--u) * 12) 0 0; font-family: ${h}; font-size: ${o(11,11)}; color: var(--vn-mute); letter-spacing: .04em; }

/* footer */
.vn-foot { border-top: 1px solid var(--vn-hair); }
.vn-foot-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 44);
  max-width: calc(var(--u) * 1440); margin: 0 auto; padding: calc(var(--u) * 52) calc(var(--u) * 48) calc(var(--u) * 68);
}
.vn-foot-mark { font-family: ${D}; font-weight: 700; letter-spacing: .06em; font-size: ${o(14,15)}; margin: 0 0 calc(var(--u) * 12); }
.vn-foot-line { font-size: ${o(13,15)}; line-height: 1.6; color: var(--vn-mute); margin: 0 0 calc(var(--u) * 8); }

/* ── responsive ── */
@media (max-width: 991px) {
  .vn-nav { padding: 10px 20px; gap: 16px; }
  .vn-nav-mark, .vn-nav-cta, .vn-nav-links a { display: inline-flex; align-items: center; min-height: 44px; }
  .vn-nav-links { display: none; }
  .vn-hero-block { padding: 0 20px 40px; }
  .vn-wordmark { font-size: clamp(28px, 10vw, 52px); }
  .vn-valley, .vn-rooms-explorer, .vn-welcome, .vn-book, .vn-drawing-inside {
    grid-template-columns: 1fr; gap: 40px;
  }
  .vn-valley, .vn-rooms, .vn-materials, .vn-welcome, .vn-book, .vn-drawing-copy, .vn-glow-row, .vn-elev-credit, .vn-drawing-inside {
    padding-left: 20px; padding-right: 20px;
  }
  .vn-mat-expand { height: calc(var(--u) * 340); }
  .vn-quotes { grid-template-columns: 1fr; gap: 32px; }
  .vn-book-grid { grid-template-columns: 1fr; }
  .vn-gallery, .vn-tours { padding-left: 20px; padding-right: 20px; }
  .vn-gallery-grid { grid-template-columns: 1fr 1fr; }
  .vn-tours-grid { grid-template-columns: 1fr; }
  .vn-contact { grid-template-columns: 1fr; gap: 40px; padding-left: 20px; padding-right: 20px; }
  .vn-film-caps { left: 20px; right: 20px; bottom: 20px; }
  .vn-film-bleed { aspect-ratio: 16 / 10; }
  .vn-film-credit { padding: 0 20px; }
  /* one month at a time below the desktop column width: two would squeeze the
     cells under a usable tap target. The arrows still reach every month. */
  .vn-cal-months { grid-template-columns: 1fr; }
  .vn-cal-month + .vn-cal-month { display: none; }
  .vn-cal-day { min-height: 44px; }
  .vn-glow-row { grid-template-columns: 1fr; }
  .vn-foot-grid { grid-template-columns: 1fr; gap: 24px; padding: 36px 20px; }
}

@media (max-width: 767px) {
  .vn-rooms-index, .vn-rooms-pane { display: none; }
  .vn-rooms-acc { display: block; }
  .vn-rooms-acc-item + .vn-rooms-acc-item { margin-top: 10px; }
  .vn-rooms-acc-btn {
    display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
    width: 100%; text-align: left; font: inherit; cursor: pointer; min-height: 44px;
    background: none; border: 0; border-top: 1px solid var(--vn-hair); padding: 12px 4px;
  }
  .vn-rooms-acc-btn.is-open span:first-child { color: var(--vn-amber-text); font-weight: 500; }
  .vn-rooms-acc-fact { font-family: ${h}; font-size: 12px; color: var(--vn-mute); }
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
  position: fixed; inset: 0; z-index: 60; background: ${ae};
  display: grid; place-content: center;
  clip-path: inset(0 0 0 0);
  transition: clip-path 1s cubic-bezier(.76, 0, .24, 1);
}
.vn-loader.is-leaving { clip-path: inset(0 0 0 100%); }
.vn-loader-mark {
  margin: 0; font-family: ${D}; font-weight: 700; letter-spacing: .05em;
  font-size: clamp(30px, 7.2vw, 108px); white-space: nowrap; line-height: 1;
  background-image: linear-gradient(90deg, ${K} 50%, rgba(23,24,26,.14) 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.vn-loader-pct {
  position: fixed; left: calc(var(--u) * 48); bottom: calc(var(--u) * 40);
  margin: 0; font-family: ${h}; font-size: 12px; letter-spacing: .16em;
  color: rgba(23,24,26,.5);
}

@media (prefers-reduced-motion: reduce) {
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
`;export{fa as default};
