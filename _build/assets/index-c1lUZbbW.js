const f={context:void 0,registry:void 0};function V(e){f.context=e}function ce(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const fe=(e,n)=>e===n,$={equals:fe};let E=null,ue=ne;const x=1,P=2,Q={owned:null,cleanups:null,context:null,owner:null};var a=null;let H=null,ae=null,y=null,g=null,m=null,L=0;function de(e,n){const t=y,s=a,i=e.length===0,o=n===void 0?s:n,l=i?Q:{owned:null,cleanups:null,context:o?o.context:null,owner:o},r=i?e:()=>e(()=>w(()=>j(l)));a=l,y=null;try{return T(r,!0)}finally{y=t,a=s}}function he(e,n){n=n?Object.assign({},$,n):$;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),ee(t,i));return[z.bind(t),s]}function b(e,n,t){const s=B(e,n,!1,x);M(s)}function q(e,n,t){t=t?Object.assign({},$,t):$;const s=B(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,M(s),z.bind(s)}function w(e){if(y===null)return e();const n=y;y=null;try{return e()}finally{y=n}}function Z(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function ye(e,n){E||(E=Symbol("error")),a=B(void 0,void 0,!0),a.context={...a.context,[E]:[n]};try{return e()}catch(t){v(t)}finally{a=a.owner}}function ge(e,n){const t=Symbol("context");return{id:t,Provider:Ae(t),defaultValue:e}}function me(e){return a&&a.context&&a.context[e.id]!==void 0?a.context[e.id]:e.defaultValue}function pe(e){const n=q(e),t=q(()=>I(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}function z(){if(this.sources&&this.state)if(this.state===x)M(this);else{const e=g;g=null,T(()=>O(this),!1),g=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function ee(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=H&&H.running;l&&H.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?g.push(o):m.push(o),o.observers&&se(o)),l||(o.state=x)}if(g.length>1e6)throw g=[],new Error},!1)),n}function M(e){if(!e.fn)return;j(e);const n=L;be(e,e.value,n)}function be(e,n,t){let s;const i=a,o=y;y=a=e;try{s=e.fn(n)}catch(l){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(j),e.owned=null),e.updatedAt=t+1,v(l)}finally{y=o,a=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ee(e,s):e.value=s,e.updatedAt=t)}function B(e,n,t,s=x,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:a?a.context:null,pure:t};return a===null||a!==Q&&(a.owned?a.owned.push(o):a.owned=[o]),o}function te(e){if(e.state===0)return;if(e.state===P)return O(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===x)M(e);else if(e.state===P){const s=g;g=null,T(()=>O(e,n[0]),!1),g=s}}function T(e,n){if(g)return e();let t=!1;n||(g=[]),m?t=!0:m=[],L++;try{const s=e();return xe(t),s}catch(s){t||(m=null),g=null,v(s)}}function xe(e){if(g&&(ne(g),g=null),e)return;const n=m;m=null,n.length&&T(()=>ue(n),!1)}function ne(e){for(let n=0;n<e.length;n++)te(e[n])}function O(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===x?s!==n&&(!s.updatedAt||s.updatedAt<L)&&te(s):i===P&&O(s,n)}}}function se(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=P,t.pure?g.push(t):m.push(t),t.observers&&se(t))}}function j(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),l=t.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,t.observerSlots[s]=l)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)j(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function we(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function _(e,n,t){try{for(const s of n)s(e)}catch(s){v(s,t&&t.owner||null)}}function v(e,n=a){const t=E&&n&&n.context&&n.context[E],s=we(e);if(!t)throw s;m?m.push({fn(){_(s,t,n)},state:x}):_(s,t,n)}function I(e){if(typeof e=="function"&&!e.length)return I(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=I(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function Ae(e,n){return function(s){let i;return b(()=>i=w(()=>(a.context={...a.context,[e]:s.value},pe(()=>s.children))),void 0),i}}let ie=!1;function Ee(){ie=!0}function Ce(e,n){if(ie&&f.context){const t=f.context;V(ce());const s=w(()=>e(n||{}));return V(t),s}return w(()=>e(n||{}))}let Te=0;function Ne(){const e=f.context;return e?`${e.id}${e.count++}`:`cl-${Te++}`}let S;function Je(e){let n;f.context&&f.load&&(n=f.load(f.context.id+f.context.count));const[t,s]=he(n,void 0);return S||(S=new Set),S.add(s),Z(()=>S.delete(s)),q(()=>{let i;if(i=t()){const o=e.fallback;return typeof o=="function"&&o.length?w(()=>o(i,()=>s())):o}return ye(()=>e.children,s)},void 0,void 0)}const Se=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$e=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Se]),Pe=new Set(["innerHTML","textContent","innerText","children"]),Oe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Le=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Me(e,n){const t=Le[e];return typeof t=="object"?t[n]?t.$:void 0:t}const je=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function ve(e,n,t){let s=t.length,i=n.length,o=s,l=0,r=0,c=n[i-1].nextSibling,d=null;for(;l<i||r<o;){if(n[l]===t[r]){l++,r++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===l){const u=o<s?r?t[r-1].nextSibling:t[o-r]:c;for(;r<o;)e.insertBefore(t[r++],u)}else if(o===r)for(;l<i;)(!d||!d.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[o-1]&&t[r]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[r++],n[l++].nextSibling),e.insertBefore(t[--o],u),n[i]=t[o]}else{if(!d){d=new Map;let h=r;for(;h<o;)d.set(t[h],h++)}const u=d.get(n[l]);if(u!=null)if(r<u&&u<o){let h=l,p=1,N;for(;++h<i&&h<o&&!((N=d.get(n[h]))==null||N!==u+p);)p++;if(p>u-r){const le=n[l];for(;r<u;)e.insertBefore(t[r++],le)}else e.replaceChild(t[r++],n[l++])}else l++;else n[l++].remove()}}}const D="_$DX_DELEGATE";function He(e,n,t,s={}){let i;return de(o=>{i=o,n===document?e():_e(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Qe(e,n,t){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},o=()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function qe(e,n=window.document){const t=n[D]||(n[D]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,oe))}}function Ze(e,n,t){f.context&&e.isConnected||(e[n]=t)}function k(e,n,t){f.context&&e.isConnected||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function Ie(e,n){f.context&&e.isConnected||(n==null?e.removeAttribute("class"):e.className=n)}function ke(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=o=>i.call(e,t[1],o))}else e.addEventListener(n,t)}function Ue(e,n,t={}){const s=Object.keys(n||{}),i=Object.keys(t);let o,l;for(o=0,l=i.length;o<l;o++){const r=i[o];!r||r==="undefined"||n[r]||(R(e,r,!1),delete t[r])}for(o=0,l=s.length;o<l;o++){const r=s[o],c=!!n[r];!r||r==="undefined"||t[r]===c||!c||(R(e,r,!0),t[r]=c)}return t}function Be(e,n,t){if(!n)return t?k(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let i,o;for(o in t)n[o]==null&&s.removeProperty(o),delete t[o];for(o in n)i=n[o],i!==t[o]&&(s.setProperty(o,i),t[o]=i);return t}function K(e,n={},t,s){const i={};return b(()=>i.children=C(e,n.children,i.children)),b(()=>typeof n.ref=="function"?Ve(n.ref,e):n.ref=e),b(()=>De(e,n,t,!0,i,!0)),i}function Ve(e,n,t){return w(()=>e(n,t))}function _e(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return C(e,n,s,t);b(i=>C(e,n(),i,t),s)}function De(e,n,t,s,i={},o=!1){n||(n={});for(const l in i)if(!(l in n)){if(l==="children")continue;i[l]=F(e,l,null,i[l],t,o)}for(const l in n){if(l==="children")continue;const r=n[l];i[l]=F(e,l,r,i[l],t,o)}}function Ke(e,n,t={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=i=>globalThis._$HY.r[i],f.has=i=>i in globalThis._$HY.r,f.gather=i=>G(n,i),f.registry=new Map,f.context={id:t.renderId||"",count:0},G(n,t.renderId);const s=He(e,n,[...n.childNodes],t);return f.context=null,s}function ze(e){let n,t;return!f.context||!(n=f.registry.get(t=Fe()))?e():(f.completed&&f.completed.add(n),f.registry.delete(t),n)}function et(e){let n=e,t=0,s=[];if(f.context)for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="$")t++;else if(i==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function tt(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=f;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;oe(s),n.shift()}}),f.events.queued=!0)}function Re(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function R(e,n,t){const s=n.trim().split(/\s+/);for(let i=0,o=s.length;i<o;i++)e.classList.toggle(s[i],t)}function F(e,n,t,s,i,o){let l,r,c,d,u;if(n==="style")return Be(e,t,s);if(n==="classList")return Ue(e,t,s);if(t===s)return s;if(n==="ref")o||t(e);else if(n.slice(0,3)==="on:"){const h=n.slice(3);s&&e.removeEventListener(h,s),t&&e.addEventListener(h,t)}else if(n.slice(0,10)==="oncapture:"){const h=n.slice(10);s&&e.removeEventListener(h,s,!0),t&&e.addEventListener(h,t,!0)}else if(n.slice(0,2)==="on"){const h=n.slice(2).toLowerCase(),p=je.has(h);if(!p&&s){const N=Array.isArray(s)?s[0]:s;e.removeEventListener(h,N)}(p||t)&&(ke(e,h,t,p),p&&qe([h]))}else if(n.slice(0,5)==="attr:")k(e,n.slice(5),t);else if((u=n.slice(0,5)==="prop:")||(c=Pe.has(n))||(d=Me(n,e.tagName))||(r=$e.has(n))||(l=e.nodeName.includes("-"))){if(u)n=n.slice(5),r=!0;else if(f.context&&e.isConnected)return t;n==="class"||n==="className"?Ie(e,t):l&&!r&&!c?e[Re(n)]=t:e[d||n]=t}else k(e,Oe[n]||n,t);return t}function oe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function C(e,n,t,s,i){const o=!!f.context&&e.isConnected;if(o){!t&&(t=[...e.childNodes]);let c=[];for(let d=0;d<t.length;d++){const u=t[d];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():c.push(u)}t=c}for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(o)return t;if(l==="number"&&(n=n.toString()),r){let c=t[0];c&&c.nodeType===3?c.data!==n&&(c.data=n):c=document.createTextNode(n),t=A(e,t,s,c)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(o)return t;t=A(e,t,s)}else{if(l==="function")return b(()=>{let c=n();for(;typeof c=="function";)c=c();t=C(e,c,t,s)}),()=>t;if(Array.isArray(n)){const c=[],d=t&&Array.isArray(t);if(U(c,n,t,i))return b(()=>t=C(e,c,t,s,!0)),()=>t;if(o){if(!c.length)return t;if(s===void 0)return[...e.childNodes];let u=c[0],h=[u];for(;(u=u.nextSibling)!==s;)h.push(u);return t=h}if(c.length===0){if(t=A(e,t,s),r)return t}else d?t.length===0?Y(e,c,s):ve(e,t,c):(t&&A(e),Y(e,c));t=c}else if(n.nodeType){if(o&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=A(e,t,s,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function U(e,n,t,s){let i=!1;for(let o=0,l=n.length;o<l;o++){let r=n[o],c=t&&t[e.length],d;if(!(r==null||r===!0||r===!1))if((d=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=U(e,r,c)||i;else if(d==="function")if(s){for(;typeof r=="function";)r=r();i=U(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||i}else e.push(r),i=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function Y(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function A(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let l=n.length-1;l>=0;l--){const r=n[l];if(i!==r){const c=r.parentNode===e;!o&&!l?c?e.replaceChild(i,r):e.insertBefore(i,t):c&&r.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function G(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!f.registry.has(o)&&f.registry.set(o,i)}}function Fe(){const e=f.context;return`${e.id}${e.count++}`}const nt=(...e)=>(Ee(),Ke(...e)),re=ge(),Ye=["title","meta"],W=[],X=["name","http-equiv","content","charset","media"].concat(["property"]),J=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([s])=>n.includes(s)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function Ge(){if(!f.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,s=>s.parentNode.removeChild(s))}const e=new Map;function n(t){if(t.ref)return t.ref;let s=document.querySelector(`[data-sm="${t.id}"]`);return s?(s.tagName.toLowerCase()!==t.tag&&(s.parentNode&&s.parentNode.removeChild(s),s=document.createElement(t.tag)),s.removeAttribute("data-sm")):s=document.createElement(t.tag),s}return{addTag(t){if(Ye.indexOf(t.tag)!==-1){const o=t.tag==="title"?W:X,l=J(t,o);e.has(l)||e.set(l,[]);let r=e.get(l),c=r.length;r=[...r,t],e.set(l,r);let d=n(t);t.ref=d,K(d,t.props);let u=null;for(var s=c-1;s>=0;s--)if(r[s]!=null){u=r[s];break}return d.parentNode!=document.head&&document.head.appendChild(d),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),c}let i=n(t);return t.ref=i,K(i,t.props),i.parentNode!=document.head&&document.head.appendChild(i),-1},removeTag(t,s){const i=t.tag==="title"?W:X,o=J(t,i);if(t.ref){const l=e.get(o);if(l){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let r=s-1;r>=0;r--)l[r]!=null&&document.head.appendChild(l[r].ref)}l[s]=null,e.set(o,l)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const st=e=>{const n=Ge();return Ce(re.Provider,{value:n,get children(){return e.children}})},We=(e,n,t)=>(Xe({tag:e,props:n,setting:t,id:Ne(),get name(){return n.name||n.property}}),null);function Xe(e){const n=me(re);if(!n)throw new Error("<MetaProvider /> should be in the tree");b(()=>{const t=n.addTag(e);Z(()=>n.removeTag(e,t))})}const it=e=>We("title",e,{escape:!0,close:!0});export{Je as E,st as M,it as T,he as a,Ce as b,b as c,qe as d,et as e,q as f,ze as g,nt as h,_e as i,Z as o,tt as r,Ze as s,Qe as t};