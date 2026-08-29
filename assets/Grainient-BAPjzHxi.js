import{r as c,j as ae}from"./index-BQacMFbV.js";import{R as te,T as ne,P as ue,M as re}from"./Triangle-GlFcswsc.js";const h=i=>{const u=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return u?[parseInt(u[1],16)/255,parseInt(u[2],16)/255,parseInt(u[3],16)/255]:[1,1,1]},ie=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,le=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);} 
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`,y=new WeakMap,ve=({timeSpeed:i=.25,colorBalance:u=0,warpStrength:x=1,warpFrequency:C=5,warpSpeed:S=2,warpAmplitude:w=50,blendAngle:A=0,blendSoftness:F=.05,rotationAmount:b=500,noiseScale:R=2,grainAmount:W=.1,grainScale:G=2,grainAnimated:B=!1,contrast:T=1.5,gamma:M=1,saturation:O=1,centerX:q=0,centerY:I=0,zoom:E=.9,color1:N="#FF9FFC",color2:P="#5227FF",color3:k="#B497CF",className:H="",maxDpr:J=2,fps:L=0,onReady:Z})=>{const v=c.useRef(null),l=c.useRef(Z);return l.current=Z,c.useEffect(()=>{var _;const o=v.current;if(!o)return;const a=new te({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,J)}),t=a.gl,e=t.canvas;e.style.width="100%",e.style.height="100%",e.style.display="block",o.appendChild(e);const K=new ne(t),s=new ue(t,{vertex:ie,fragment:le,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uTimeSpeed:{value:.25},uColorBalance:{value:0},uWarpStrength:{value:1},uWarpFrequency:{value:5},uWarpSpeed:{value:2},uWarpAmplitude:{value:50},uBlendAngle:{value:0},uBlendSoftness:{value:.05},uRotationAmount:{value:500},uNoiseScale:{value:2},uGrainAmount:{value:.1},uGrainScale:{value:2},uGrainAnimated:{value:0},uContrast:{value:1.5},uGamma:{value:1},uSaturation:{value:1},uCenterOffset:{value:new Float32Array([0,0])},uZoom:{value:.9},uColor1:{value:new Float32Array([1,1,1])},uColor2:{value:new Float32Array([1,1,1])},uColor3:{value:new Float32Array([1,1,1])}}}),f=new re(t,{geometry:K,program:s});y.set(o,{renderer:a,program:s,mesh:f});const j=()=>{const n=o.getBoundingClientRect(),ee=Math.max(1,Math.floor(n.width)),oe=Math.max(1,Math.floor(n.height));a.setSize(ee,oe);const $=s.uniforms.iResolution.value;$[0]=t.drawingBufferWidth,$[1]=t.drawingBufferHeight,a.render({scene:f})},D=new ResizeObserver(j);D.observe(o),j(),(_=l.current)==null||_.call(l);let r=0,m=!0,d=!document.hidden;const Q=performance.now(),Y=L>0?1e3/L:0;let U=0;const V=n=>{r=requestAnimationFrame(V),!(n-U<Y)&&(U=n,s.uniforms.iTime.value=(n-Q)*.001,a.render({scene:f}))},p=()=>{m&&d&&r===0&&(r=requestAnimationFrame(V))},g=()=>{r!==0&&(cancelAnimationFrame(r),r=0)},z=new IntersectionObserver(([n])=>{m=n.isIntersecting,m?p():g()},{threshold:0});z.observe(o);const X=()=>{d=!document.hidden,d?p():g()};return document.addEventListener("visibilitychange",X),p(),()=>{g(),D.disconnect(),z.disconnect(),document.removeEventListener("visibilitychange",X),y.delete(o);try{o.removeChild(e)}catch{}}},[]),c.useEffect(()=>{const o=v.current;if(!o)return;const a=y.get(o);if(!a)return;const{program:t}=a,e=t.uniforms;e.uTimeSpeed.value=i,e.uColorBalance.value=u,e.uWarpStrength.value=x,e.uWarpFrequency.value=C,e.uWarpSpeed.value=S,e.uWarpAmplitude.value=w,e.uBlendAngle.value=A,e.uBlendSoftness.value=F,e.uRotationAmount.value=b,e.uNoiseScale.value=R,e.uGrainAmount.value=W,e.uGrainScale.value=G,e.uGrainAnimated.value=B?1:0,e.uContrast.value=T,e.uGamma.value=M,e.uSaturation.value=O,e.uCenterOffset.value=new Float32Array([q,I]),e.uZoom.value=E,e.uColor1.value=new Float32Array(h(N)),e.uColor2.value=new Float32Array(h(P)),e.uColor3.value=new Float32Array(h(k))},[i,u,x,C,S,w,A,F,b,R,W,G,B,T,M,O,q,I,E,N,P,k]),ae.jsx("div",{ref:v,className:`grainient-container ${H}`.trim()})};export{ve as default};
