import{c as ne,g as H,a as E,t as A,o as W,d as oe,b as d,e as u,T as se,f as le,i as z,h as ie,r as ae,M as ce,s as L,E as ue,j as ye}from"./index-DMoB56hL.js";import{H as pe}from"./HttpStatusCode-DjTx85av.js";const N="Invariant Violation",{setPrototypeOf:de=function(t,r){return t.__proto__=r,t}}=Object;class V extends Error{framesToPop=1;name=N;constructor(r=N){super(typeof r=="number"?`${N}: ${r} (see https://github.com/apollographql/invariant-packages)`:r),de(this,V.prototype)}}function Y(t,r){if(!t)throw new V(r)}const fe=/^[A-Za-z]:\//;function ge(t=""){return t&&t.replace(/\\/g,"/").replace(fe,r=>r.toUpperCase())}const he=/^[/\\]{2}/,me=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Pe=/^[A-Za-z]:$/,xe=function(t){if(t.length===0)return".";t=ge(t);const r=t.match(he),e=U(t),n=t[t.length-1]==="/";return t=$e(t,!e),t.length===0?e?"/":n?"./":".":(n&&(t+="/"),Pe.test(t)&&(t+="/"),r?e?`//${t}`:`//./${t}`:e&&!U(t)?`/${t}`:t)},G=function(...t){if(t.length===0)return".";let r;for(const e of t)e&&e.length>0&&(r===void 0?r=e:r+=`/${e}`);return r===void 0?".":xe(r.replace(/\/\/+/g,"/"))};function $e(t,r){let e="",n=0,o=-1,l=0,i=null;for(let s=0;s<=t.length;++s){if(s<t.length)i=t[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===s-1||l===1))if(l===2){if(e.length<2||n!==2||e[e.length-1]!=="."||e[e.length-2]!=="."){if(e.length>2){const p=e.lastIndexOf("/");p===-1?(e="",n=0):(e=e.slice(0,p),n=e.length-1-e.lastIndexOf("/")),o=s,l=0;continue}else if(e.length>0){e="",n=0,o=s,l=0;continue}}r&&(e+=e.length>0?"/..":"..",n=2)}else e.length>0?e+=`/${t.slice(o+1,s)}`:e=t.slice(o+1,s),n=s-o-1;o=s,l=0}else i==="."&&l!==-1?++l:l=-1}return e}const U=function(t){return me.test(t)};function be(t){return`virtual:${t}`}function ve(t){return t.handler?.endsWith(".html")?U(t.handler)?t.handler:G(t.root,t.handler):`$vinxi/handler/${t.name}`}const Se=new Proxy({},{get(t,r){return Y(typeof r=="string","Bundler name should be a string"),{name:r,type:"client",handler:be(ve({name:r})),baseURL:"/hourofmylife/_build",chunks:new Proxy({},{get(e,n){Y(typeof n=="string","Chunk expected");let o=G("/hourofmylife/_build",n+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(e,n){Y(typeof n=="string","Input must be string");let o=window.manifest[n].output;return{async import(){return import(o)},async assets(){return window.manifest[n].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Se;var _e=A("<div><svg><use href=hourglass.svg#svg1></use></svg><div></div><div></div><div>");const F=50;function Me(t){const r=()=>{const e=Number(t.progress),o=Math.min(Math.max(e,0),100)/100;return Math.pow(o,2)*100};return ne(()=>{const e=document.createElement("style");e.textContent=`
      @keyframes fallingSand {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(${F*2}px); }
      }
    `,document.head.appendChild(e),W(()=>{document.head.removeChild(e)})}),(()=>{var e=H(_e),n=e.firstChild,o=n.nextSibling,l=o.nextSibling,i=l.nextSibling;return e.style.setProperty("position","relative"),e.style.setProperty("width","100px"),e.style.setProperty("height","210px"),e.style.setProperty("margin","20px auto"),n.style.setProperty("height","215px"),o.style.setProperty("position","absolute"),o.style.setProperty("bottom","107px"),o.style.setProperty("left","0"),o.style.setProperty("width","100%"),o.style.setProperty("background","rgba(255,255,255,1)"),l.style.setProperty("position","absolute"),l.style.setProperty("bottom","100px"),l.style.setProperty("left","49px"),l.style.setProperty("width","4px"),l.style.setProperty("height","4px"),l.style.setProperty("background","rgba(255,255,255,1)"),l.style.setProperty("animation","fallingSand 2s ease-in infinite"),i.style.setProperty("position","absolute"),i.style.setProperty("bottom","0px"),i.style.setProperty("left","0"),i.style.setProperty("width","100%"),i.style.setProperty("background","rgba(255,255,255,1)"),E(s=>{var p=`${Math.max((101-r())/100*F-2,0)}%`,_=`polygon(51px 100%, ${r()/2}% 0px, ${Math.min(100-r()/2,100)}% 0px)`,P=`${r()/100*F}%`,M=`polygon(0px 110%, 105px 110%, ${100-r()/2}% 0px, ${Math.min(r()/2,100)}% 0px)`;return p!==s.e&&((s.e=p)!=null?o.style.setProperty("height",p):o.style.removeProperty("height")),_!==s.t&&((s.t=_)!=null?o.style.setProperty("clip-path",_):o.style.removeProperty("clip-path")),P!==s.a&&((s.a=P)!=null?i.style.setProperty("height",P):i.style.removeProperty("height")),M!==s.o&&((s.o=M)!=null?i.style.setProperty("clip-path",M):i.style.removeProperty("clip-path")),s},{e:void 0,t:void 0,a:void 0,o:void 0}),e})()}var we=A("<div><div>");function Ee(t){Math.min(Math.max(t.progress,0),100);function r(){const e=Number(t.progress);return Math.min(Math.max(e,0),100)}return(()=>{var e=H(we),n=e.firstChild;return e.style.setProperty("width","60%"),e.style.setProperty("height","30px"),e.style.setProperty("background","transparent"),e.style.setProperty("border-radius","5px"),e.style.setProperty("border","3px solid #e0e0e0"),e.style.setProperty("overflow","hidden"),e.style.setProperty("margin","20px auto"),n.style.setProperty("height","100%"),n.style.setProperty("background","#e0e0e0"),n.style.setProperty("border-radius","5px 0 0 5px"),n.style.setProperty("transition","width 0.3s ease-in-out"),E(o=>(o=`${r()}%`)!=null?n.style.setProperty("width",o):n.style.removeProperty("width")),e})()}var Te=A('<main><div></div><h1></h1><!$><!/><button>Switch Progress Bar</button><button>Switch Time Format</button><button>Toggle Milliseconds</button><button>Toggle Seconds</button><div><label for=birthdate>Birthdate: </label><input id=birthdate type=date autocomplete=off><label for=birthtime>Birthtime: </label><input id=birthtime type=time autocomplete=off></div><div><label for=lifeExpectancy>Life Expectancy (years): </label><input id=lifeExpectancy type=number placeholder="Set Life Expectancy"autocomplete=off>');function Ie(){const t=()=>{const a=new Date;return a.setFullYear(a.getFullYear()-20),a.setHours(0,0,0,0),a.toISOString().split("T")[0]},r=()=>{const a=new Date;return a.setFullYear(a.getFullYear()-20),a.setHours(0,0,0,0),a.toTimeString().split(" ")[0]},[e,n]=d(!1),[o,l]=d(!0),[i,s]=d(!1),[p,_]=d(!1),[P,M]=d(0),[R,X]=d(t()),[D,J]=d(r()),[T,K]=d(80),[Q,ee]=d(Date.now());function O(a,I,C){const k=new Date(`${a}T${I}`).getTime(),x=(Q()-k)/(1e3*60*60*24*365.25),$=x/C*24,B=Math.floor($/24),y=$%24,f=$%1*60,g=f%1*60,h=g%1*1e3,b=y>=12?"PM":"AM",m=o()?Math.floor(y%12)===0?12:y%12:y;let v=`${Math.floor(m)}:${Math.floor(f).toString().padStart(2,"0")}`;p()&&(v+=`:${Math.floor(g).toString().padStart(2,"0")}`),i()&&(v+=`.${Math.floor(h).toString().padStart(3,"0")}`),v+=o()?` ${b}`:"";const S=y*60+f+g/60;return M(S/1440*100),{ageInYears:Math.floor(x),hours:Math.floor(y)===0?12:Math.floor(y),formatHours:m,minutes:Math.floor(f),seconds:Math.floor(g),milliseconds:Math.floor(h),period:b,daysPast:B,formattedTime:v}}const te=setInterval(()=>{ee(Date.now())},1e3);return W(()=>{clearInterval(te)}),u(ce,{get children(){return[u(se,{children:"HourOfMyLife"}),(()=>{var a=H(Te),I=a.firstChild,C=I.nextSibling,j=C.nextSibling,[k,q]=le(j.nextSibling),x=k.nextSibling,$=x.nextSibling,B=$.nextSibling,y=B.nextSibling,f=y.nextSibling,g=f.firstChild,h=g.nextSibling,b=h.nextSibling,m=b.nextSibling,v=f.nextSibling,S=v.firstChild,w=S.nextSibling;return a.style.setProperty("text-align","center"),z(I,()=>{const c=O(R(),D(),T()),re=c.daysPast>0?` (+${c.daysPast} days)`:"";return`If you are ${c.ageInYears} years old, the analogous time of day for a life expectancy of ${T()} years would be${re}...`}),z(C,()=>O(R(),D(),T()).formattedTime),z(a,(()=>{var c=ie(()=>!!e());return()=>c()?u(Ee,{get progress(){return P()}}):u(Me,{get progress(){return P()}})})(),k,q),x.$$click=()=>n(!e()),x.style.setProperty("margin-top","32px"),$.$$click=()=>l(!o()),B.$$click=()=>s(!i()),y.$$click=()=>_(!p()),f.style.setProperty("margin-top","64px"),g.style.setProperty("font-size","1.5rem"),g.style.setProperty("color","#e0e0e0"),h.$$input=c=>X(c.currentTarget.value),h.style.setProperty("font-size","1.5rem"),h.style.setProperty("text-align","center"),b.style.setProperty("font-size","1.5rem"),b.style.setProperty("color","#e0e0e0"),m.$$input=c=>J(c.currentTarget.value),m.style.setProperty("font-size","1.5rem"),m.style.setProperty("text-align","center"),S.style.setProperty("font-size","1.5rem"),S.style.setProperty("color","#e0e0e0"),S.style.setProperty("margin-top","20px"),w.$$input=c=>K(parseInt(c.currentTarget.value)),w.style.setProperty("font-size","1.5rem"),w.style.setProperty("text-align","center"),w.style.setProperty("margin-top","10px"),E(()=>L(h,"value",R())),E(()=>L(m,"value",D())),E(()=>L(w,"value",T())),ae(),a})()]}})}oe(["click","input"]);var Ce=A("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const ke=t=>{const r="Error | Uncaught Client Exception";return u(ue,{fallback:e=>(console.error(e),[(()=>{var n=H(Ce);return z(n,r),n})(),u(pe,{code:500})]),get children(){return t.children}})};function Be(t,r){return ye(t,r)}function Z(t){return t.children}function ze(){return u(Z,{get children(){return u(Z,{get children(){return u(ke,{get children(){return u(Ie,{})}})}})}})}Be(()=>u(ze,{}),document.getElementById("app"));const Re=void 0;export{Re as default};