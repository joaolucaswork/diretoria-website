<<<<<<< HEAD
"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
=======
"use strict";(()=>{var cf=Object.create;var ra=Object.defineProperty;var uf=Object.getOwnPropertyDescriptor;var df=Object.getOwnPropertyNames;var pf=Object.getPrototypeOf,ff=Object.prototype.hasOwnProperty;var hf=(s,e,i)=>e in s?ra(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var Bn=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var mf=(s,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of df(e))!ff.call(s,r)&&r!==i&&ra(s,r,{get:()=>e[r],enumerable:!(t=uf(e,r))||t.enumerable});return s};var sa=(s,e,i)=>(i=s!=null?cf(pf(s)):{},mf(e||!s||!s.__esModule?ra(i,"default",{value:s,enumerable:!0}):i,s));var rr=(s,e,i)=>(hf(s,typeof e!="symbol"?e+"":e,i),i);var Hl=Bn((Fl,Vl)=>{typeof navigator=="object"&&function(s,e){typeof Fl=="object"&&typeof Vl<"u"?Vl.exports=e():typeof define=="function"&&define.amd?define("Plyr",e):(s=typeof globalThis<"u"?globalThis:s||self).Plyr=e()}(Fl,function(){"use strict";function s(c,h,d){return(h=function(y){var x=function(S,A){if(typeof S!="object"||S===null)return S;var D=S[Symbol.toPrimitive];if(D!==void 0){var B=D.call(S,A||"default");if(typeof B!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(S)}(y,"string");return typeof x=="symbol"?x:String(x)}(h))in c?Object.defineProperty(c,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[h]=d,c}function e(c,h){for(var d=0;d<h.length;d++){var y=h[d];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(c,y.key,y)}}function i(c,h,d){return h in c?Object.defineProperty(c,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[h]=d,c}function t(c,h){var d=Object.keys(c);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(c);h&&(y=y.filter(function(x){return Object.getOwnPropertyDescriptor(c,x).enumerable})),d.push.apply(d,y)}return d}function r(c){for(var h=1;h<arguments.length;h++){var d=arguments[h]!=null?arguments[h]:{};h%2?t(Object(d),!0).forEach(function(y){i(c,y,d[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):t(Object(d)).forEach(function(y){Object.defineProperty(c,y,Object.getOwnPropertyDescriptor(d,y))})}return c}var n={addCSS:!0,thumbWidth:15,watch:!0},o=function(c){return c!=null?c.constructor:null},a=function(c,h){return!!(c&&h&&c instanceof h)},l=function(c){return c==null},u=function(c){return o(c)===Object},f=function(c){return o(c)===String},m=function(c){return Array.isArray(c)},v=function(c){return a(c,NodeList)},g={nullOrUndefined:l,object:u,number:function(c){return o(c)===Number&&!Number.isNaN(c)},string:f,boolean:function(c){return o(c)===Boolean},function:function(c){return o(c)===Function},array:m,nodeList:v,element:function(c){return a(c,Element)},event:function(c){return a(c,Event)},empty:function(c){return l(c)||(f(c)||m(c)||v(c))&&!c.length||u(c)&&!Object.keys(c).length}};function b(c,h){if(1>h){var d=function(y){var x="".concat(y).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return x?Math.max(0,(x[1]?x[1].length:0)-(x[2]?+x[2]:0)):0}(h);return parseFloat(c.toFixed(d))}return Math.round(c/h)*h}var p=function(){function c(h,d){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,c),g.element(h)?this.element=h:g.string(h)&&(this.element=document.querySelector(h)),g.element(this.element)&&g.empty(this.element.rangeTouch)&&(this.config=r({},n,{},d),this.init())}return function(h,d,y){d&&e(h.prototype,d),y&&e(h,y)}(c,[{key:"init",value:function(){c.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){c.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(h){var d=this,y=h?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(x){d.element[y](x,function(S){return d.set(S)},!1)})}},{key:"get",value:function(h){if(!c.enabled||!g.event(h))return null;var d,y=h.target,x=h.changedTouches[0],S=parseFloat(y.getAttribute("min"))||0,A=parseFloat(y.getAttribute("max"))||100,D=parseFloat(y.getAttribute("step"))||1,B=y.getBoundingClientRect(),H=100/B.width*(this.config.thumbWidth/2)/100;return 0>(d=100/B.width*(x.clientX-B.left))?d=0:100<d&&(d=100),50>d?d-=(100-2*d)*H:50<d&&(d+=2*(d-50)*H),S+b(d/100*(A-S),D)}},{key:"set",value:function(h){c.enabled&&g.event(h)&&!h.target.disabled&&(h.preventDefault(),h.target.value=this.get(h),function(d,y){if(d&&y){var x=new Event(y,{bubbles:!0});d.dispatchEvent(x)}}(h.target,h.type==="touchend"?"change":"input"))}}],[{key:"setup",value:function(h){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},y=null;if(g.empty(h)||g.string(h)?y=Array.from(document.querySelectorAll(g.string(h)?h:'input[type="range"]')):g.element(h)?y=[h]:g.nodeList(h)?y=Array.from(h):g.array(h)&&(y=h.filter(g.element)),g.empty(y))return null;var x=r({},n,{},d);if(g.string(h)&&x.watch){var S=new MutationObserver(function(A){Array.from(A).forEach(function(D){Array.from(D.addedNodes).forEach(function(B){g.element(B)&&function(H,J){return function(){return Array.from(document.querySelectorAll(J)).includes(this)}.call(H,J)}(B,h)&&new c(B,x)})})});S.observe(document.body,{childList:!0,subtree:!0})}return y.map(function(A){return new c(A,d)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),c}();let _=c=>c!=null?c.constructor:null,T=(c,h)=>!!(c&&h&&c instanceof h),E=c=>c==null,k=c=>_(c)===Object,C=c=>_(c)===String,M=c=>typeof c=="function",I=c=>Array.isArray(c),z=c=>T(c,NodeList),N=c=>E(c)||(C(c)||I(c)||z(c))&&!c.length||k(c)&&!Object.keys(c).length;var w={nullOrUndefined:E,object:k,number:c=>_(c)===Number&&!Number.isNaN(c),string:C,boolean:c=>_(c)===Boolean,function:M,array:I,weakMap:c=>T(c,WeakMap),nodeList:z,element:c=>c!==null&&typeof c=="object"&&c.nodeType===1&&typeof c.style=="object"&&typeof c.ownerDocument=="object",textNode:c=>_(c)===Text,event:c=>T(c,Event),keyboardEvent:c=>T(c,KeyboardEvent),cue:c=>T(c,window.TextTrackCue)||T(c,window.VTTCue),track:c=>T(c,TextTrack)||!E(c)&&C(c.kind),promise:c=>T(c,Promise)&&M(c.then),url:c=>{if(T(c,window.URL))return!0;if(!C(c))return!1;let h=c;c.startsWith("http://")&&c.startsWith("https://")||(h=`http://${c}`);try{return!N(new URL(h).hostname)}catch{return!1}},empty:N};let P=(()=>{let c=document.createElement("span"),h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},d=Object.keys(h).find(y=>c.style[y]!==void 0);return!!w.string(d)&&h[d]})();function F(c,h){setTimeout(()=>{try{c.hidden=!0,c.offsetHeight,c.hidden=!1}catch{}},h)}var R={isIE:!!window.document.documentMode,isEdge:/Edge/g.test(navigator.userAgent),isWebKit:"WebkitAppearance"in document.documentElement.style&&!/Edge/g.test(navigator.userAgent),isIPhone:/iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1,isIPadOS:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,isIos:/iPad|iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1};function W(c,h){return h.split(".").reduce((d,y)=>d&&d[y],c)}function Y(c={},...h){if(!h.length)return c;let d=h.shift();return w.object(d)?(Object.keys(d).forEach(y=>{w.object(d[y])?(Object.keys(c).includes(y)||Object.assign(c,{[y]:{}}),Y(c[y],d[y])):Object.assign(c,{[y]:d[y]})}),Y(c,...h)):c}function q(c,h){let d=c.length?c:[c];Array.from(d).reverse().forEach((y,x)=>{let S=x>0?h.cloneNode(!0):h,A=y.parentNode,D=y.nextSibling;S.appendChild(y),D?A.insertBefore(S,D):A.appendChild(S)})}function ee(c,h){w.element(c)&&!w.empty(h)&&Object.entries(h).filter(([,d])=>!w.nullOrUndefined(d)).forEach(([d,y])=>c.setAttribute(d,y))}function V(c,h,d){let y=document.createElement(c);return w.object(h)&&ee(y,h),w.string(d)&&(y.innerText=d),y}function me(c,h,d,y){w.element(h)&&h.appendChild(V(c,d,y))}function ge(c){w.nodeList(c)||w.array(c)?Array.from(c).forEach(ge):w.element(c)&&w.element(c.parentNode)&&c.parentNode.removeChild(c)}function L(c){if(!w.element(c))return;let{length:h}=c.childNodes;for(;h>0;)c.removeChild(c.lastChild),h-=1}function ce(c,h){return w.element(h)&&w.element(h.parentNode)&&w.element(c)?(h.parentNode.replaceChild(c,h),c):null}function G(c,h){if(!w.string(c)||w.empty(c))return{};let d={},y=Y({},h);return c.split(",").forEach(x=>{let S=x.trim(),A=S.replace(".",""),D=S.replace(/[[\]]/g,"").split("="),[B]=D,H=D.length>1?D[1].replace(/["']/g,""):"";switch(S.charAt(0)){case".":w.string(y.class)?d.class=`${y.class} ${A}`:d.class=A;break;case"#":d.id=S.replace("#","");break;case"[":d[B]=H}}),Y(y,d)}function xe(c,h){if(!w.element(c))return;let d=h;w.boolean(d)||(d=!c.hidden),c.hidden=d}function Z(c,h,d){if(w.nodeList(c))return Array.from(c).map(y=>Z(y,h,d));if(w.element(c)){let y="toggle";return d!==void 0&&(y=d?"add":"remove"),c.classList[y](h),c.classList.contains(h)}return!1}function oe(c,h){return w.element(c)&&c.classList.contains(h)}function ne(c,h){let{prototype:d}=Element;return(d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||function(){return Array.from(document.querySelectorAll(h)).includes(this)}).call(c,h)}function we(c){return this.elements.container.querySelectorAll(c)}function ue(c){return this.elements.container.querySelector(c)}function Be(c=null,h=!1){w.element(c)&&c.focus({preventScroll:!0,focusVisible:h})}let ke={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},de={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check(c,h){let d=de[c]||h!=="html5";return{api:d,ui:d&&de.rangeInput}},pip:!(R.isIPhone||!w.function(V("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||V("video").disablePictureInPicture)),airplay:w.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime(c){if(w.empty(c))return!1;let[h]=c.split("/"),d=c;if(!this.isHTML5||h!==this.type)return!1;Object.keys(ke).includes(d)&&(d+=`; codecs="${ke[c]}"`);try{return!!(d&&this.media.canPlayType(d).replace(/no/,""))}catch{return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(()=>{let c=document.createElement("input");return c.type="range",c.type==="range"})(),touch:"ontouchstart"in document.documentElement,transitions:P!==!1,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Qe=(()=>{let c=!1;try{let h=Object.defineProperty({},"passive",{get:()=>(c=!0,null)});window.addEventListener("test",null,h),window.removeEventListener("test",null,h)}catch{}return c})();function se(c,h,d,y=!1,x=!0,S=!1){if(!c||!("addEventListener"in c)||w.empty(h)||!w.function(d))return;let A=h.split(" "),D=S;Qe&&(D={passive:x,capture:S}),A.forEach(B=>{this&&this.eventListeners&&y&&this.eventListeners.push({element:c,type:B,callback:d,options:D}),c[y?"addEventListener":"removeEventListener"](B,d,D)})}function Q(c,h="",d,y=!0,x=!1){se.call(this,c,h,d,!0,y,x)}function ze(c,h="",d,y=!0,x=!1){se.call(this,c,h,d,!1,y,x)}function Xe(c,h="",d,y=!0,x=!1){let S=(...A)=>{ze(c,h,S,y,x),d.apply(this,A)};se.call(this,c,h,S,!0,y,x)}function O(c,h="",d=!1,y={}){if(!w.element(c)||w.empty(h))return;let x=new CustomEvent(h,{bubbles:d,detail:{...y,plyr:this}});c.dispatchEvent(x)}function $e(){this&&this.eventListeners&&(this.eventListeners.forEach(c=>{let{element:h,type:d,callback:y,options:x}=c;h.removeEventListener(d,y,x)}),this.eventListeners=[])}function kt(){return new Promise(c=>this.ready?setTimeout(c,0):Q.call(this,this.elements.container,"ready",c)).then(()=>{})}function Fe(c){w.promise(c)&&c.then(null,()=>{})}function ie(c){return w.array(c)?c.filter((h,d)=>c.indexOf(h)===d):c}function ti(c,h){return w.array(c)&&c.length?c.reduce((d,y)=>Math.abs(y-h)<Math.abs(d-h)?y:d):null}function Fi(c){return!(!window||!window.CSS)&&window.CSS.supports(c)}let Zi=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce((c,[h,d])=>({...c,[h/d]:[h,d]}),{});function ct(c){return w.array(c)||w.string(c)&&c.includes(":")?(w.array(c)?c:c.split(":")).map(Number).every(w.number):!1}function di(c){if(!w.array(c)||!c.every(w.number))return null;let[h,d]=c,y=(S,A)=>A===0?S:y(A,S%A),x=y(h,d);return[h/x,d/x]}function Ge(c){let h=y=>ct(y)?y.split(":").map(Number):null,d=h(c);if(d===null&&(d=h(this.config.ratio)),d===null&&!w.empty(this.embed)&&w.array(this.embed.ratio)&&({ratio:d}=this.embed),d===null&&this.isHTML5){let{videoWidth:y,videoHeight:x}=this.media;d=[y,x]}return di(d)}function wt(c){if(!this.isVideo)return{};let{wrapper:h}=this.elements,d=Ge.call(this,c);if(!w.array(d))return{};let[y,x]=di(d),S=100/y*x;if(Fi(`aspect-ratio: ${y}/${x}`)?h.style.aspectRatio=`${y}/${x}`:h.style.paddingBottom=`${S}%`,this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){let A=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),D=(A-S)/(A/50);this.fullscreen.active?h.style.paddingBottom=null:this.media.style.transform=`translateY(-${D}%)`}else this.isHTML5&&h.classList.add(this.config.classNames.videoFixedRatio);return{padding:S,ratio:d}}function Vt(c,h,d=.05){let y=c/h,x=ti(Object.keys(Zi),y);return Math.abs(x-y)<=d?Zi[x]:[c,h]}let _t={getSources(){return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(c=>{let h=c.getAttribute("type");return!!w.empty(h)||de.mime.call(this,h)}):[]},getQualityOptions(){return this.config.quality.forced?this.config.quality.options:_t.getSources.call(this).map(c=>Number(c.getAttribute("size"))).filter(Boolean)},setup(){if(!this.isHTML5)return;let c=this;c.options.speed=c.config.speed.options,w.empty(this.config.ratio)||wt.call(c),Object.defineProperty(c.media,"quality",{get(){let h=_t.getSources.call(c).find(d=>d.getAttribute("src")===c.source);return h&&Number(h.getAttribute("size"))},set(h){if(c.quality!==h){if(c.config.quality.forced&&w.function(c.config.quality.onChange))c.config.quality.onChange(h);else{let d=_t.getSources.call(c).find(B=>Number(B.getAttribute("size"))===h);if(!d)return;let{currentTime:y,paused:x,preload:S,readyState:A,playbackRate:D}=c.media;c.media.src=d.getAttribute("src"),(S!=="none"||A)&&(c.once("loadedmetadata",()=>{c.speed=D,c.currentTime=y,x||Fe(c.play())}),c.media.load())}O.call(c,c.media,"qualitychange",!1,{quality:h})}}})},cancelRequests(){this.isHTML5&&(ge(_t.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function Ji(c,...h){return w.empty(c)?c:c.toString().replace(/{(\d+)}/g,(d,y)=>h[y].toString())}let Ye=(c="",h="",d="")=>c.replace(new RegExp(h.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),d.toString()),Br=(c="")=>c.toString().replace(/\w\S*/g,h=>h.charAt(0).toUpperCase()+h.slice(1).toLowerCase());function Vi(c=""){let h=c.toString();return h=function(d=""){let y=d.toString();return y=Ye(y,"-"," "),y=Ye(y,"_"," "),y=Br(y),Ye(y," ","")}(h),h.charAt(0).toLowerCase()+h.slice(1)}function vr(c){let h=document.createElement("div");return h.appendChild(c),h.innerHTML}let er={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Ve={get(c="",h={}){if(w.empty(c)||w.empty(h))return"";let d=W(h.i18n,c);if(w.empty(d))return Object.keys(er).includes(c)?er[c]:"";let y={"{seektime}":h.seekTime,"{title}":h.title};return Object.entries(y).forEach(([x,S])=>{d=Ye(d,x,S)}),d}};class pi{constructor(h){s(this,"get",d=>{if(!pi.supported||!this.enabled)return null;let y=window.localStorage.getItem(this.key);if(w.empty(y))return null;let x=JSON.parse(y);return w.string(d)&&d.length?x[d]:x}),s(this,"set",d=>{if(!pi.supported||!this.enabled||!w.object(d))return;let y=this.get();w.empty(y)&&(y={}),Y(y,d);try{window.localStorage.setItem(this.key,JSON.stringify(y))}catch{}}),this.enabled=h.config.storage.enabled,this.key=h.config.storage.key}static get supported(){try{if(!("localStorage"in window))return!1;let h="___test";return window.localStorage.setItem(h,h),window.localStorage.removeItem(h),!0}catch{return!1}}}function be(c,h="text"){return new Promise((d,y)=>{try{let x=new XMLHttpRequest;if(!("withCredentials"in x))return;x.addEventListener("load",()=>{if(h==="text")try{d(JSON.parse(x.responseText))}catch{d(x.responseText)}else d(x.response)}),x.addEventListener("error",()=>{throw new Error(x.status)}),x.open("GET",c,!0),x.responseType=h,x.send()}catch(x){y(x)}})}function Hi(c,h){if(!w.string(c))return;let d="cache",y=w.string(h),x=!1,S=()=>document.getElementById(h)!==null,A=(D,B)=>{D.innerHTML=B,y&&S()||document.body.insertAdjacentElement("afterbegin",D)};if(!y||!S()){let D=pi.supported,B=document.createElement("div");if(B.setAttribute("hidden",""),y&&B.setAttribute("id",h),D){let H=window.localStorage.getItem(`${d}-${h}`);if(x=H!==null,x){let J=JSON.parse(H);A(B,J.content)}}be(c).then(H=>{if(!w.empty(H)){if(D)try{window.localStorage.setItem(`${d}-${h}`,JSON.stringify({content:H}))}catch{}A(B,H)}}).catch(()=>{})}}let ii=c=>Math.trunc(c/60/60%60,10),fi=c=>Math.trunc(c/60%60,10),hi=c=>Math.trunc(c%60,10);function xi(c=0,h=!1,d=!1){if(!w.number(c))return xi(void 0,h,d);let y=D=>`0${D}`.slice(-2),x=ii(c),S=fi(c),A=hi(c);return x=h||x>0?`${x}:`:"",`${d&&c>0?"-":""}${x}${y(S)}:${y(A)}`}let X={getIconUrl(){let c=new URL(this.config.iconUrl,window.location),h=window.location.host?window.location.host:window.top.location.host,d=c.host!==h||R.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:d}},findElements(){try{return this.elements.controls=ue.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:we.call(this,this.config.selectors.buttons.play),pause:ue.call(this,this.config.selectors.buttons.pause),restart:ue.call(this,this.config.selectors.buttons.restart),rewind:ue.call(this,this.config.selectors.buttons.rewind),fastForward:ue.call(this,this.config.selectors.buttons.fastForward),mute:ue.call(this,this.config.selectors.buttons.mute),pip:ue.call(this,this.config.selectors.buttons.pip),airplay:ue.call(this,this.config.selectors.buttons.airplay),settings:ue.call(this,this.config.selectors.buttons.settings),captions:ue.call(this,this.config.selectors.buttons.captions),fullscreen:ue.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=ue.call(this,this.config.selectors.progress),this.elements.inputs={seek:ue.call(this,this.config.selectors.inputs.seek),volume:ue.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:ue.call(this,this.config.selectors.display.buffer),currentTime:ue.call(this,this.config.selectors.display.currentTime),duration:ue.call(this,this.config.selectors.display.duration)},w.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)),!0}catch(c){return this.debug.warn("It looks like there is a problem with your custom controls HTML",c),this.toggleNativeControls(!0),!1}},createIcon(c,h){let d="http://www.w3.org/2000/svg",y=X.getIconUrl.call(this),x=`${y.cors?"":y.url}#${this.config.iconPrefix}`,S=document.createElementNS(d,"svg");ee(S,Y(h,{"aria-hidden":"true",focusable:"false"}));let A=document.createElementNS(d,"use"),D=`${x}-${c}`;return"href"in A&&A.setAttributeNS("http://www.w3.org/1999/xlink","href",D),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",D),S.appendChild(A),S},createLabel(c,h={}){let d=Ve.get(c,this.config);return V("span",{...h,class:[h.class,this.config.classNames.hidden].filter(Boolean).join(" ")},d)},createBadge(c){if(w.empty(c))return null;let h=V("span",{class:this.config.classNames.menu.value});return h.appendChild(V("span",{class:this.config.classNames.menu.badge},c)),h},createButton(c,h){let d=Y({},h),y=Vi(c),x={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(A=>{Object.keys(d).includes(A)&&(x[A]=d[A],delete d[A])}),x.element!=="button"||Object.keys(d).includes("type")||(d.type="button"),Object.keys(d).includes("class")?d.class.split(" ").some(A=>A===this.config.classNames.control)||Y(d,{class:`${d.class} ${this.config.classNames.control}`}):d.class=this.config.classNames.control,c){case"play":x.toggle=!0,x.label="play",x.labelPressed="pause",x.icon="play",x.iconPressed="pause";break;case"mute":x.toggle=!0,x.label="mute",x.labelPressed="unmute",x.icon="volume",x.iconPressed="muted";break;case"captions":x.toggle=!0,x.label="enableCaptions",x.labelPressed="disableCaptions",x.icon="captions-off",x.iconPressed="captions-on";break;case"fullscreen":x.toggle=!0,x.label="enterFullscreen",x.labelPressed="exitFullscreen",x.icon="enter-fullscreen",x.iconPressed="exit-fullscreen";break;case"play-large":d.class+=` ${this.config.classNames.control}--overlaid`,y="play",x.label="play",x.icon="play";break;default:w.empty(x.label)&&(x.label=y),w.empty(x.icon)&&(x.icon=c)}let S=V(x.element);return x.toggle?(S.appendChild(X.createIcon.call(this,x.iconPressed,{class:"icon--pressed"})),S.appendChild(X.createIcon.call(this,x.icon,{class:"icon--not-pressed"})),S.appendChild(X.createLabel.call(this,x.labelPressed,{class:"label--pressed"})),S.appendChild(X.createLabel.call(this,x.label,{class:"label--not-pressed"}))):(S.appendChild(X.createIcon.call(this,x.icon)),S.appendChild(X.createLabel.call(this,x.label))),Y(d,G(this.config.selectors.buttons[y],d)),ee(S,d),y==="play"?(w.array(this.elements.buttons[y])||(this.elements.buttons[y]=[]),this.elements.buttons[y].push(S)):this.elements.buttons[y]=S,S},createRange(c,h){let d=V("input",Y(G(this.config.selectors.inputs[c]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":Ve.get(c,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},h));return this.elements.inputs[c]=d,X.updateRangeFill.call(this,d),p.setup(d),d},createProgress(c,h){let d=V("progress",Y(G(this.config.selectors.display[c]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},h));if(c!=="volume"){d.appendChild(V("span",null,"0"));let y={played:"played",buffer:"buffered"}[c],x=y?Ve.get(y,this.config):"";d.innerText=`% ${x.toLowerCase()}`}return this.elements.display[c]=d,d},createTime(c,h){let d=G(this.config.selectors.display[c],h),y=V("div",Y(d,{class:`${d.class?d.class:""} ${this.config.classNames.display.time} `.trim(),"aria-label":Ve.get(c,this.config),role:"timer"}),"00:00");return this.elements.display[c]=y,y},bindMenuItemShortcuts(c,h){Q.call(this,c,"keydown keyup",d=>{if(![" ","ArrowUp","ArrowDown","ArrowRight"].includes(d.key)||(d.preventDefault(),d.stopPropagation(),d.type==="keydown"))return;let y=ne(c,'[role="menuitemradio"]');if(!y&&[" ","ArrowRight"].includes(d.key))X.showMenuPanel.call(this,h,!0);else{let x;d.key!==" "&&(d.key==="ArrowDown"||y&&d.key==="ArrowRight"?(x=c.nextElementSibling,w.element(x)||(x=c.parentNode.firstElementChild)):(x=c.previousElementSibling,w.element(x)||(x=c.parentNode.lastElementChild)),Be.call(this,x,!0))}},!1),Q.call(this,c,"keyup",d=>{d.key==="Return"&&X.focusFirstMenuItem.call(this,null,!0)})},createMenuItem({value:c,list:h,type:d,title:y,badge:x=null,checked:S=!1}){let A=G(this.config.selectors.inputs[d]),D=V("button",Y(A,{type:"button",role:"menuitemradio",class:`${this.config.classNames.control} ${A.class?A.class:""}`.trim(),"aria-checked":S,value:c})),B=V("span");B.innerHTML=y,w.element(x)&&B.appendChild(x),D.appendChild(B),Object.defineProperty(D,"checked",{enumerable:!0,get:()=>D.getAttribute("aria-checked")==="true",set(H){H&&Array.from(D.parentNode.children).filter(J=>ne(J,'[role="menuitemradio"]')).forEach(J=>J.setAttribute("aria-checked","false")),D.setAttribute("aria-checked",H?"true":"false")}}),this.listeners.bind(D,"click keyup",H=>{if(!w.keyboardEvent(H)||H.key===" "){switch(H.preventDefault(),H.stopPropagation(),D.checked=!0,d){case"language":this.currentTrack=Number(c);break;case"quality":this.quality=c;break;case"speed":this.speed=parseFloat(c)}X.showMenuPanel.call(this,"home",w.keyboardEvent(H))}},d,!1),X.bindMenuItemShortcuts.call(this,D,d),h.appendChild(D)},formatTime(c=0,h=!1){return w.number(c)?xi(c,ii(this.duration)>0,h):c},updateTimeDisplay(c=null,h=0,d=!1){w.element(c)&&w.number(h)&&(c.innerText=X.formatTime(h,d))},updateVolume(){this.supported.ui&&(w.element(this.elements.inputs.volume)&&X.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),w.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||this.volume===0))},setRange(c,h=0){w.element(c)&&(c.value=h,X.updateRangeFill.call(this,c))},updateProgress(c){if(!this.supported.ui||!w.event(c))return;let h=0,d=(S,A)=>{let D=w.number(A)?A:0,B=w.element(S)?S:this.elements.display.buffer;if(w.element(B)){B.value=D;let H=B.getElementsByTagName("span")[0];w.element(H)&&(H.childNodes[0].nodeValue=D)}};if(c)switch(c.type){case"timeupdate":case"seeking":case"seeked":y=this.currentTime,x=this.duration,h=y===0||x===0||Number.isNaN(y)||Number.isNaN(x)?0:(y/x*100).toFixed(2),c.type==="timeupdate"&&X.setRange.call(this,this.elements.inputs.seek,h);break;case"playing":case"progress":d(this.elements.display.buffer,100*this.buffered)}var y,x},updateRangeFill(c){let h=w.event(c)?c.target:c;if(w.element(h)&&h.getAttribute("type")==="range"){if(ne(h,this.config.selectors.inputs.seek)){h.setAttribute("aria-valuenow",this.currentTime);let d=X.formatTime(this.currentTime),y=X.formatTime(this.duration),x=Ve.get("seekLabel",this.config);h.setAttribute("aria-valuetext",x.replace("{currentTime}",d).replace("{duration}",y))}else if(ne(h,this.config.selectors.inputs.volume)){let d=100*h.value;h.setAttribute("aria-valuenow",d),h.setAttribute("aria-valuetext",`${d.toFixed(1)}%`)}else h.setAttribute("aria-valuenow",h.value);(R.isWebKit||R.isIPadOS)&&h.style.setProperty("--value",h.value/h.max*100+"%")}},updateSeekTooltip(c){var h,d;if(!this.config.tooltips.seek||!w.element(this.elements.inputs.seek)||!w.element(this.elements.display.seekTooltip)||this.duration===0)return;let y=this.elements.display.seekTooltip,x=`${this.config.classNames.tooltip}--visible`,S=J=>Z(y,x,J);if(this.touch)return void S(!1);let A=0,D=this.elements.progress.getBoundingClientRect();if(w.event(c))A=100/D.width*(c.pageX-D.left);else{if(!oe(y,x))return;A=parseFloat(y.style.left,10)}A<0?A=0:A>100&&(A=100);let B=this.duration/100*A;y.innerText=X.formatTime(B);let H=(h=this.config.markers)===null||h===void 0||(d=h.points)===null||d===void 0?void 0:d.find(({time:J})=>J===Math.round(B));H&&y.insertAdjacentHTML("afterbegin",`${H.label}<br>`),y.style.left=`${A}%`,w.event(c)&&["mouseenter","mouseleave"].includes(c.type)&&S(c.type==="mouseenter")},timeUpdate(c){let h=!w.element(this.elements.display.duration)&&this.config.invertTime;X.updateTimeDisplay.call(this,this.elements.display.currentTime,h?this.duration-this.currentTime:this.currentTime,h),c&&c.type==="timeupdate"&&this.media.seeking||X.updateProgress.call(this,c)},durationUpdate(){if(!this.supported.ui||!this.config.invertTime&&this.currentTime)return;if(this.duration>=2**32)return xe(this.elements.display.currentTime,!0),void xe(this.elements.progress,!0);w.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);let c=w.element(this.elements.display.duration);!c&&this.config.displayDuration&&this.paused&&X.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),c&&X.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),this.config.markers.enabled&&X.setMarkers.call(this),X.updateSeekTooltip.call(this)},toggleMenuButton(c,h){xe(this.elements.settings.buttons[c],!h)},updateSetting(c,h,d){let y=this.elements.settings.panels[c],x=null,S=h;if(c==="captions")x=this.currentTrack;else{if(x=w.empty(d)?this[c]:d,w.empty(x)&&(x=this.config[c].default),!w.empty(this.options[c])&&!this.options[c].includes(x))return void this.debug.warn(`Unsupported value of '${x}' for ${c}`);if(!this.config[c].options.includes(x))return void this.debug.warn(`Disabled value of '${x}' for ${c}`)}if(w.element(S)||(S=y&&y.querySelector('[role="menu"]')),!w.element(S))return;this.elements.settings.buttons[c].querySelector(`.${this.config.classNames.menu.value}`).innerHTML=X.getLabel.call(this,c,x);let A=S&&S.querySelector(`[value="${x}"]`);w.element(A)&&(A.checked=!0)},getLabel(c,h){switch(c){case"speed":return h===1?Ve.get("normal",this.config):`${h}&times;`;case"quality":if(w.number(h)){let d=Ve.get(`qualityLabel.${h}`,this.config);return d.length?d:`${h}p`}return Br(h);case"captions":return U.getLabel.call(this);default:return null}},setQualityMenu(c){if(!w.element(this.elements.settings.panels.quality))return;let h="quality",d=this.elements.settings.panels.quality.querySelector('[role="menu"]');w.array(c)&&(this.options.quality=ie(c).filter(S=>this.config.quality.options.includes(S)));let y=!w.empty(this.options.quality)&&this.options.quality.length>1;if(X.toggleMenuButton.call(this,h,y),L(d),X.checkMenu.call(this),!y)return;let x=S=>{let A=Ve.get(`qualityBadge.${S}`,this.config);return A.length?X.createBadge.call(this,A):null};this.options.quality.sort((S,A)=>{let D=this.config.quality.options;return D.indexOf(S)>D.indexOf(A)?1:-1}).forEach(S=>{X.createMenuItem.call(this,{value:S,list:d,type:h,title:X.getLabel.call(this,"quality",S),badge:x(S)})}),X.updateSetting.call(this,h,d)},setCaptionsMenu(){if(!w.element(this.elements.settings.panels.captions))return;let c="captions",h=this.elements.settings.panels.captions.querySelector('[role="menu"]'),d=U.getTracks.call(this),y=!!d.length;if(X.toggleMenuButton.call(this,c,y),L(h),X.checkMenu.call(this),!y)return;let x=d.map((S,A)=>({value:A,checked:this.captions.toggled&&this.currentTrack===A,title:U.getLabel.call(this,S),badge:S.language&&X.createBadge.call(this,S.language.toUpperCase()),list:h,type:"language"}));x.unshift({value:-1,checked:!this.captions.toggled,title:Ve.get("disabled",this.config),list:h,type:"language"}),x.forEach(X.createMenuItem.bind(this)),X.updateSetting.call(this,c,h)},setSpeedMenu(){if(!w.element(this.elements.settings.panels.speed))return;let c="speed",h=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter(y=>y>=this.minimumSpeed&&y<=this.maximumSpeed);let d=!w.empty(this.options.speed)&&this.options.speed.length>1;X.toggleMenuButton.call(this,c,d),L(h),X.checkMenu.call(this),d&&(this.options.speed.forEach(y=>{X.createMenuItem.call(this,{value:y,list:h,type:c,title:X.getLabel.call(this,"speed",y)})}),X.updateSetting.call(this,c,h))},checkMenu(){let{buttons:c}=this.elements.settings,h=!w.empty(c)&&Object.values(c).some(d=>!d.hidden);xe(this.elements.settings.menu,!h)},focusFirstMenuItem(c,h=!1){if(this.elements.settings.popup.hidden)return;let d=c;w.element(d)||(d=Object.values(this.elements.settings.panels).find(x=>!x.hidden));let y=d.querySelector('[role^="menuitem"]');Be.call(this,y,h)},toggleMenu(c){let{popup:h}=this.elements.settings,d=this.elements.buttons.settings;if(!w.element(h)||!w.element(d))return;let{hidden:y}=h,x=y;if(w.boolean(c))x=c;else if(w.keyboardEvent(c)&&c.key==="Escape")x=!1;else if(w.event(c)){let S=w.function(c.composedPath)?c.composedPath()[0]:c.target,A=h.contains(S);if(A||!A&&c.target!==d&&x)return}d.setAttribute("aria-expanded",x),xe(h,!x),Z(this.elements.container,this.config.classNames.menu.open,x),x&&w.keyboardEvent(c)?X.focusFirstMenuItem.call(this,null,!0):x||y||Be.call(this,d,w.keyboardEvent(c))},getMenuSize(c){let h=c.cloneNode(!0);h.style.position="absolute",h.style.opacity=0,h.removeAttribute("hidden"),c.parentNode.appendChild(h);let d=h.scrollWidth,y=h.scrollHeight;return ge(h),{width:d,height:y}},showMenuPanel(c="",h=!1){let d=this.elements.container.querySelector(`#plyr-settings-${this.id}-${c}`);if(!w.element(d))return;let y=d.parentNode,x=Array.from(y.children).find(S=>!S.hidden);if(de.transitions&&!de.reducedMotion){y.style.width=`${x.scrollWidth}px`,y.style.height=`${x.scrollHeight}px`;let S=X.getMenuSize.call(this,d),A=D=>{D.target===y&&["width","height"].includes(D.propertyName)&&(y.style.width="",y.style.height="",ze.call(this,y,P,A))};Q.call(this,y,P,A),y.style.width=`${S.width}px`,y.style.height=`${S.height}px`}xe(x,!0),xe(d,!1),X.focusFirstMenuItem.call(this,d,h)},setDownloadUrl(){let c=this.elements.buttons.download;w.element(c)&&c.setAttribute("href",this.download)},create(c){let{bindMenuItemShortcuts:h,createButton:d,createProgress:y,createRange:x,createTime:S,setQualityMenu:A,setSpeedMenu:D,showMenuPanel:B}=X;this.elements.controls=null,w.array(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(d.call(this,"play-large"));let H=V("div",G(this.config.selectors.controls.wrapper));this.elements.controls=H;let J={class:"plyr__controls__item"};return ie(w.array(this.config.controls)?this.config.controls:[]).forEach(he=>{if(he==="restart"&&H.appendChild(d.call(this,"restart",J)),he==="rewind"&&H.appendChild(d.call(this,"rewind",J)),he==="play"&&H.appendChild(d.call(this,"play",J)),he==="fast-forward"&&H.appendChild(d.call(this,"fast-forward",J)),he==="progress"){let j=V("div",{class:`${J.class} plyr__progress__container`}),ve=V("div",G(this.config.selectors.progress));if(ve.appendChild(x.call(this,"seek",{id:`plyr-seek-${c.id}`})),ve.appendChild(y.call(this,"buffer")),this.config.tooltips.seek){let Ie=V("span",{class:this.config.classNames.tooltip},"00:00");ve.appendChild(Ie),this.elements.display.seekTooltip=Ie}this.elements.progress=ve,j.appendChild(this.elements.progress),H.appendChild(j)}if(he==="current-time"&&H.appendChild(S.call(this,"currentTime",J)),he==="duration"&&H.appendChild(S.call(this,"duration",J)),he==="mute"||he==="volume"){let{volume:j}=this.elements;if(w.element(j)&&H.contains(j)||(j=V("div",Y({},J,{class:`${J.class} plyr__volume`.trim()})),this.elements.volume=j,H.appendChild(j)),he==="mute"&&j.appendChild(d.call(this,"mute")),he==="volume"&&!R.isIos&&!R.isIPadOS){let ve={max:1,step:.05,value:this.config.volume};j.appendChild(x.call(this,"volume",Y(ve,{id:`plyr-volume-${c.id}`})))}}if(he==="captions"&&H.appendChild(d.call(this,"captions",J)),he==="settings"&&!w.empty(this.config.settings)){let j=V("div",Y({},J,{class:`${J.class} plyr__menu`.trim(),hidden:""}));j.appendChild(d.call(this,"settings",{"aria-haspopup":!0,"aria-controls":`plyr-settings-${c.id}`,"aria-expanded":!1}));let ve=V("div",{class:"plyr__menu__container",id:`plyr-settings-${c.id}`,hidden:""}),Ie=V("div"),Le=V("div",{id:`plyr-settings-${c.id}-home`}),st=V("div",{role:"menu"});Le.appendChild(st),Ie.appendChild(Le),this.elements.settings.panels.home=Le,this.config.settings.forEach(Se=>{let nt=V("button",Y(G(this.config.selectors.buttons.settings),{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--forward`,role:"menuitem","aria-haspopup":!0,hidden:""}));h.call(this,nt,Se),Q.call(this,nt,"click",()=>{B.call(this,Se,!1)});let re=V("span",null,Ve.get(Se,this.config)),Me=V("span",{class:this.config.classNames.menu.value});Me.innerHTML=c[Se],re.appendChild(Me),nt.appendChild(re),st.appendChild(nt);let yt=V("div",{id:`plyr-settings-${c.id}-${Se}`,hidden:""}),mi=V("button",{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--back`});mi.appendChild(V("span",{"aria-hidden":!0},Ve.get(Se,this.config))),mi.appendChild(V("span",{class:this.config.classNames.hidden},Ve.get("menuBack",this.config))),Q.call(this,yt,"keydown",Oi=>{Oi.key==="ArrowLeft"&&(Oi.preventDefault(),Oi.stopPropagation(),B.call(this,"home",!0))},!1),Q.call(this,mi,"click",()=>{B.call(this,"home",!1)}),yt.appendChild(mi),yt.appendChild(V("div",{role:"menu"})),Ie.appendChild(yt),this.elements.settings.buttons[Se]=nt,this.elements.settings.panels[Se]=yt}),ve.appendChild(Ie),j.appendChild(ve),H.appendChild(j),this.elements.settings.popup=ve,this.elements.settings.menu=j}if(he==="pip"&&de.pip&&H.appendChild(d.call(this,"pip",J)),he==="airplay"&&de.airplay&&H.appendChild(d.call(this,"airplay",J)),he==="download"){let j=Y({},J,{element:"a",href:this.download,target:"_blank"});this.isHTML5&&(j.download="");let{download:ve}=this.config.urls;!w.url(ve)&&this.isEmbed&&Y(j,{icon:`logo-${this.provider}`,label:this.provider}),H.appendChild(d.call(this,"download",j))}he==="fullscreen"&&H.appendChild(d.call(this,"fullscreen",J))}),this.isHTML5&&A.call(this,_t.getQualityOptions.call(this)),D.call(this),H},inject(){if(this.config.loadSprite){let x=X.getIconUrl.call(this);x.cors&&Hi(x.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());let c=null;this.elements.controls=null;let h={id:this.id,seektime:this.config.seekTime,title:this.config.title},d=!0;w.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,h)),this.config.controls||(this.config.controls=[]),w.element(this.config.controls)||w.string(this.config.controls)?c=this.config.controls:(c=X.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:U.getLabel.call(this)}),d=!1);let y;if(d&&w.string(this.config.controls)&&(c=(x=>{let S=x;return Object.entries(h).forEach(([A,D])=>{S=Ye(S,`{${A}}`,D)}),S})(c)),w.string(this.config.selectors.controls.container)&&(y=document.querySelector(this.config.selectors.controls.container)),w.element(y)||(y=this.elements.container),y[w.element(c)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",c),w.element(this.elements.controls)||X.findElements.call(this),!w.empty(this.elements.buttons)){let x=S=>{let A=this.config.classNames.controlPressed;S.setAttribute("aria-pressed","false"),Object.defineProperty(S,"pressed",{configurable:!0,enumerable:!0,get:()=>oe(S,A),set(D=!1){Z(S,A,D),S.setAttribute("aria-pressed",D?"true":"false")}})};Object.values(this.elements.buttons).filter(Boolean).forEach(S=>{w.array(S)||w.nodeList(S)?Array.from(S).filter(Boolean).forEach(x):x(S)})}if(R.isEdge&&F(y),this.config.tooltips.controls){let{classNames:x,selectors:S}=this.config,A=`${S.controls.wrapper} ${S.labels} .${x.hidden}`,D=we.call(this,A);Array.from(D).forEach(B=>{Z(B,this.config.classNames.hidden,!1),Z(B,this.config.classNames.tooltip,!0)})}},setMediaMetadata(){try{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:this.config.mediaMetadata.title,artist:this.config.mediaMetadata.artist,album:this.config.mediaMetadata.album,artwork:this.config.mediaMetadata.artwork}))}catch{}},setMarkers(){var c,h;if(!this.duration||this.elements.markers)return;let d=(c=this.config.markers)===null||c===void 0||(h=c.points)===null||h===void 0?void 0:h.filter(({time:B})=>B>0&&B<this.duration);if(d==null||!d.length)return;let y=document.createDocumentFragment(),x=document.createDocumentFragment(),S=null,A=`${this.config.classNames.tooltip}--visible`,D=B=>Z(S,A,B);d.forEach(B=>{let H=V("span",{class:this.config.classNames.marker},""),J=B.time/this.duration*100+"%";S&&(H.addEventListener("mouseenter",()=>{B.label||(S.style.left=J,S.innerHTML=B.label,D(!0))}),H.addEventListener("mouseleave",()=>{D(!1)})),H.addEventListener("click",()=>{this.currentTime=B.time}),H.style.left=J,x.appendChild(H)}),y.appendChild(x),this.config.tooltips.seek||(S=V("span",{class:this.config.classNames.tooltip},""),y.appendChild(S)),this.elements.markers={points:x,tip:S},this.elements.progress.appendChild(y)}};function Si(c,h=!0){let d=c;if(h){let y=document.createElement("a");y.href=d,d=y.href}try{return new URL(d)}catch{return null}}function br(c){let h=new URLSearchParams;return w.object(c)&&Object.entries(c).forEach(([d,y])=>{h.set(d,y)}),h}let U={setup(){if(!this.supported.ui)return;if(!this.isVideo||this.isYouTube||this.isHTML5&&!de.textTracks)return void(w.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&X.setCaptionsMenu.call(this));var c,h;if(w.element(this.elements.captions)||(this.elements.captions=V("div",G(this.config.selectors.captions)),this.elements.captions.setAttribute("dir","auto"),c=this.elements.captions,h=this.elements.wrapper,w.element(c)&&w.element(h)&&h.parentNode.insertBefore(c,h.nextSibling)),R.isIE&&window.URL){let S=this.media.querySelectorAll("track");Array.from(S).forEach(A=>{let D=A.getAttribute("src"),B=Si(D);B!==null&&B.hostname!==window.location.href.hostname&&["http:","https:"].includes(B.protocol)&&be(D,"blob").then(H=>{A.setAttribute("src",window.URL.createObjectURL(H))}).catch(()=>{ge(A)})})}let d=ie((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(S=>S.split("-")[0])),y=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();y==="auto"&&([y]=d);let x=this.storage.get("captions");if(w.boolean(x)||({active:x}=this.config.captions),Object.assign(this.captions,{toggled:!1,active:x,language:y,languages:d}),this.isHTML5){let S=this.config.captions.update?"addtrack removetrack":"removetrack";Q.call(this,this.media.textTracks,S,U.update.bind(this))}setTimeout(U.update.bind(this),0)},update(){let c=U.getTracks.call(this,!0),{active:h,language:d,meta:y,currentTrackNode:x}=this.captions,S=!!c.find(A=>A.language===d);this.isHTML5&&this.isVideo&&c.filter(A=>!y.get(A)).forEach(A=>{this.debug.log("Track added",A),y.set(A,{default:A.mode==="showing"}),A.mode==="showing"&&(A.mode="hidden"),Q.call(this,A,"cuechange",()=>U.updateCues.call(this))}),(S&&this.language!==d||!c.includes(x))&&(U.setLanguage.call(this,d),U.toggle.call(this,h&&S)),this.elements&&Z(this.elements.container,this.config.classNames.captions.enabled,!w.empty(c)),w.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&X.setCaptionsMenu.call(this)},toggle(c,h=!0){if(!this.supported.ui)return;let{toggled:d}=this.captions,y=this.config.classNames.captions.active,x=w.nullOrUndefined(c)?!d:c;if(x!==d){if(h||(this.captions.active=x,this.storage.set({captions:x})),!this.language&&x&&!h){let S=U.getTracks.call(this),A=U.findTrack.call(this,[this.captions.language,...this.captions.languages],!0);return this.captions.language=A.language,void U.set.call(this,S.indexOf(A))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=x),Z(this.elements.container,y,x),this.captions.toggled=x,X.updateSetting.call(this,"captions"),O.call(this,this.media,x?"captionsenabled":"captionsdisabled")}setTimeout(()=>{x&&this.captions.toggled&&(this.captions.currentTrackNode.mode="hidden")})},set(c,h=!0){let d=U.getTracks.call(this);if(c!==-1)if(w.number(c))if(c in d){if(this.captions.currentTrack!==c){this.captions.currentTrack=c;let y=d[c],{language:x}=y||{};this.captions.currentTrackNode=y,X.updateSetting.call(this,"captions"),h||(this.captions.language=x,this.storage.set({language:x})),this.isVimeo&&this.embed.enableTextTrack(x),O.call(this,this.media,"languagechange")}U.toggle.call(this,!0,h),this.isHTML5&&this.isVideo&&U.updateCues.call(this)}else this.debug.warn("Track not found",c);else this.debug.warn("Invalid caption argument",c);else U.toggle.call(this,!1,h)},setLanguage(c,h=!0){if(!w.string(c))return void this.debug.warn("Invalid language argument",c);let d=c.toLowerCase();this.captions.language=d;let y=U.getTracks.call(this),x=U.findTrack.call(this,[d]);U.set.call(this,y.indexOf(x),h)},getTracks(c=!1){return Array.from((this.media||{}).textTracks||[]).filter(h=>!this.isHTML5||c||this.captions.meta.has(h)).filter(h=>["captions","subtitles"].includes(h.kind))},findTrack(c,h=!1){let d=U.getTracks.call(this),y=A=>Number((this.captions.meta.get(A)||{}).default),x=Array.from(d).sort((A,D)=>y(D)-y(A)),S;return c.every(A=>(S=x.find(D=>D.language===A),!S)),S||(h?x[0]:void 0)},getCurrentTrack(){return U.getTracks.call(this)[this.currentTrack]},getLabel(c){let h=c;return!w.track(h)&&de.textTracks&&this.captions.toggled&&(h=U.getCurrentTrack.call(this)),w.track(h)?w.empty(h.label)?w.empty(h.language)?Ve.get("enabled",this.config):c.language.toUpperCase():h.label:Ve.get("disabled",this.config)},updateCues(c){if(!this.supported.ui)return;if(!w.element(this.elements.captions))return void this.debug.warn("No captions element to render to");if(!w.nullOrUndefined(c)&&!Array.isArray(c))return void this.debug.warn("updateCues: Invalid input",c);let h=c;if(!h){let y=U.getCurrentTrack.call(this);h=Array.from((y||{}).activeCues||[]).map(x=>x.getCueAsHTML()).map(vr)}let d=h.map(y=>y.trim()).join(`
`);if(d!==this.elements.captions.innerHTML){L(this.elements.captions);let y=V("span",G(this.config.selectors.caption));y.innerHTML=d,this.elements.captions.appendChild(y),O.call(this,this.media,"cuechange")}}},le={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.7.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",marker:"plyr__progress__marker",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1},mediaMetadata:{title:"",artist:"",album:"",artwork:[]},markers:{enabled:!1,points:[]}},Oe="picture-in-picture",K="inline",pe={html5:"html5",youtube:"youtube",vimeo:"vimeo"},ae="audio",ye="video",tt=()=>{};class Ce{constructor(h=!1){this.enabled=window.console&&h,this.enabled&&this.log("Debugging enabled")}get log(){return this.enabled?Function.prototype.bind.call(console.log,console):tt}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):tt}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):tt}}class De{constructor(h){s(this,"onChange",()=>{if(!this.supported)return;let d=this.player.elements.buttons.fullscreen;w.element(d)&&(d.pressed=this.active);let y=this.target===this.player.media?this.target:this.player.elements.container;O.call(this.player,y,this.active?"enterfullscreen":"exitfullscreen",!0)}),s(this,"toggleFallback",(d=!1)=>{if(d?this.scrollPosition={x:window.scrollX??0,y:window.scrollY??0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=d?"hidden":"",Z(this.target,this.player.config.classNames.fullscreen.fallback,d),R.isIos){let y=document.head.querySelector('meta[name="viewport"]'),x="viewport-fit=cover";y||(y=document.createElement("meta"),y.setAttribute("name","viewport"));let S=w.string(y.content)&&y.content.includes(x);d?(this.cleanupViewport=!S,S||(y.content+=`,${x}`)):this.cleanupViewport&&(y.content=y.content.split(",").filter(A=>A.trim()!==x).join(","))}this.onChange()}),s(this,"trapFocus",d=>{if(R.isIos||R.isIPadOS||!this.active||d.key!=="Tab")return;let y=document.activeElement,x=we.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),[S]=x,A=x[x.length-1];y!==A||d.shiftKey?y===S&&d.shiftKey&&(A.focus(),d.preventDefault()):(S.focus(),d.preventDefault())}),s(this,"update",()=>{if(this.supported){let d;d=this.forceFallback?"Fallback (forced)":De.nativeSupported?"Native":"Fallback",this.player.debug.log(`${d} fullscreen enabled`)}else this.player.debug.log("Fullscreen not supported and fallback disabled");Z(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.supported)}),s(this,"enter",()=>{this.supported&&(R.isIos&&this.player.config.fullscreen.iosNative?this.player.isVimeo?this.player.embed.requestFullscreen():this.target.webkitEnterFullscreen():!De.nativeSupported||this.forceFallback?this.toggleFallback(!0):this.prefix?w.empty(this.prefix)||this.target[`${this.prefix}Request${this.property}`]():this.target.requestFullscreen({navigationUI:"hide"}))}),s(this,"exit",()=>{if(this.supported)if(R.isIos&&this.player.config.fullscreen.iosNative)this.player.isVimeo?this.player.embed.exitFullscreen():this.target.webkitEnterFullscreen(),Fe(this.player.play());else if(!De.nativeSupported||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!w.empty(this.prefix)){let d=this.prefix==="moz"?"Cancel":"Exit";document[`${this.prefix}${d}${this.property}`]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}),s(this,"toggle",()=>{this.active?this.exit():this.enter()}),this.player=h,this.prefix=De.prefix,this.property=De.property,this.scrollPosition={x:0,y:0},this.forceFallback=h.config.fullscreen.fallback==="force",this.player.elements.fullscreen=h.config.fullscreen.container&&function(d,y){let{prototype:x}=Element;return(x.closest||function(){let S=this;do{if(ne.matches(S,y))return S;S=S.parentElement||S.parentNode}while(S!==null&&S.nodeType===1);return null}).call(d,y)}(this.player.elements.container,h.config.fullscreen.container),Q.call(this.player,document,this.prefix==="ms"?"MSFullscreenChange":`${this.prefix}fullscreenchange`,()=>{this.onChange()}),Q.call(this.player,this.player.elements.container,"dblclick",d=>{w.element(this.player.elements.controls)&&this.player.elements.controls.contains(d.target)||this.player.listeners.proxy(d,this.toggle,"fullscreen")}),Q.call(this,this.player.elements.container,"keydown",d=>this.trapFocus(d)),this.update()}static get nativeSupported(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}get useNative(){return De.nativeSupported&&!this.forceFallback}static get prefix(){if(w.function(document.exitFullscreen))return"";let h="";return["webkit","moz","ms"].some(d=>!(!w.function(document[`${d}ExitFullscreen`])&&!w.function(document[`${d}CancelFullScreen`]))&&(h=d,!0)),h}static get property(){return this.prefix==="moz"?"FullScreen":"Fullscreen"}get supported(){return[this.player.config.fullscreen.enabled,this.player.isVideo,De.nativeSupported||this.player.config.fullscreen.fallback,!this.player.isYouTube||De.nativeSupported||!R.isIos||this.player.config.playsinline&&!this.player.config.fullscreen.iosNative].every(Boolean)}get active(){if(!this.supported)return!1;if(!De.nativeSupported||this.forceFallback)return oe(this.target,this.player.config.classNames.fullscreen.fallback);let h=this.prefix?this.target.getRootNode()[`${this.prefix}${this.property}Element`]:this.target.getRootNode().fullscreenElement;return h&&h.shadowRoot?h===this.target.getRootNode().host:h===this.target}get target(){return R.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.fullscreen??this.player.elements.container}}function ut(c,h=1){return new Promise((d,y)=>{let x=new Image,S=()=>{delete x.onload,delete x.onerror,(x.naturalWidth>=h?d:y)(x)};Object.assign(x,{onload:S,onerror:S,src:c})})}let fe={addStyleHook(){Z(this.elements.container,this.config.selectors.container.replace(".",""),!0),Z(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls(c=!1){c&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build(){if(this.listeners.media(),!this.supported.ui)return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),void fe.toggleNativeControls.call(this,!0);w.element(this.elements.controls)||(X.inject.call(this),this.listeners.controls()),fe.toggleNativeControls.call(this),this.isHTML5&&U.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,X.updateVolume.call(this),X.timeUpdate.call(this),X.durationUpdate.call(this),fe.checkPlaying.call(this),Z(this.elements.container,this.config.classNames.pip.supported,de.pip&&this.isHTML5&&this.isVideo),Z(this.elements.container,this.config.classNames.airplay.supported,de.airplay&&this.isHTML5),Z(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(()=>{O.call(this,this.media,"ready")},0),fe.setTitle.call(this),this.poster&&fe.setPoster.call(this,this.poster,!1).catch(()=>{}),this.config.duration&&X.durationUpdate.call(this),this.config.mediaMetadata&&X.setMediaMetadata.call(this)},setTitle(){let c=Ve.get("play",this.config);if(w.string(this.config.title)&&!w.empty(this.config.title)&&(c+=`, ${this.config.title}`),Array.from(this.elements.buttons.play||[]).forEach(h=>{h.setAttribute("aria-label",c)}),this.isEmbed){let h=ue.call(this,"iframe");if(!w.element(h))return;let d=w.empty(this.config.title)?"video":this.config.title,y=Ve.get("frameTitle",this.config);h.setAttribute("title",y.replace("{title}",d))}},togglePoster(c){Z(this.elements.container,this.config.classNames.posterEnabled,c)},setPoster(c,h=!0){return h&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",c),this.elements.poster.removeAttribute("hidden"),kt.call(this).then(()=>ut(c)).catch(d=>{throw c===this.poster&&fe.togglePoster.call(this,!1),d}).then(()=>{if(c!==this.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(()=>(Object.assign(this.elements.poster.style,{backgroundImage:`url('${c}')`,backgroundSize:""}),fe.togglePoster.call(this,!0),c)))},checkPlaying(c){Z(this.elements.container,this.config.classNames.playing,this.playing),Z(this.elements.container,this.config.classNames.paused,this.paused),Z(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(h=>{Object.assign(h,{pressed:this.playing}),h.setAttribute("aria-label",Ve.get(this.playing?"pause":"play",this.config))}),w.event(c)&&c.type==="timeupdate"||fe.toggleControls.call(this)},checkLoading(c){this.loading=["stalled","waiting"].includes(c.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(()=>{Z(this.elements.container,this.config.classNames.loading,this.loading),fe.toggleControls.call(this)},this.loading?250:0)},toggleControls(c){let{controls:h}=this.elements;if(h&&this.config.hideControls){let d=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(!!(c||this.loading||this.paused||h.pressed||h.hover||d))}},migrateStyles(){Object.values({...this.media.style}).filter(c=>!w.empty(c)&&w.string(c)&&c.startsWith("--plyr")).forEach(c=>{this.elements.container.style.setProperty(c,this.media.style.getPropertyValue(c)),this.media.style.removeProperty(c)}),w.empty(this.media.style)&&this.media.removeAttribute("style")}};class We{constructor(h){s(this,"firstTouch",()=>{let{player:d}=this,{elements:y}=d;d.touch=!0,Z(y.container,d.config.classNames.isTouch,!0)}),s(this,"global",(d=!0)=>{let{player:y}=this;y.config.keyboard.global&&se.call(y,window,"keydown keyup",this.handleKey,d,!1),se.call(y,document.body,"click",this.toggleMenu,d),Xe.call(y,document.body,"touchstart",this.firstTouch)}),s(this,"container",()=>{let{player:d}=this,{config:y,elements:x,timers:S}=d;!y.keyboard.global&&y.keyboard.focused&&Q.call(d,x.container,"keydown keyup",this.handleKey,!1),Q.call(d,x.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",B=>{let{controls:H}=x;H&&B.type==="enterfullscreen"&&(H.pressed=!1,H.hover=!1);let J=0;["touchstart","touchmove","mousemove"].includes(B.type)&&(fe.toggleControls.call(d,!0),J=d.touch?3e3:2e3),clearTimeout(S.controls),S.controls=setTimeout(()=>fe.toggleControls.call(d,!1),J)});let A=()=>{if(!d.isVimeo||d.config.vimeo.premium)return;let B=x.wrapper,{active:H}=d.fullscreen,[J,he]=Ge.call(d),j=Fi(`aspect-ratio: ${J} / ${he}`);if(!H)return void(j?(B.style.width=null,B.style.height=null):(B.style.maxWidth=null,B.style.margin=null));let[ve,Ie]=[Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)],Le=ve/Ie>J/he;j?(B.style.width=Le?"auto":"100%",B.style.height=Le?"100%":"auto"):(B.style.maxWidth=Le?Ie/he*J+"px":null,B.style.margin=Le?"0 auto":null)},D=()=>{clearTimeout(S.resized),S.resized=setTimeout(A,50)};Q.call(d,x.container,"enterfullscreen exitfullscreen",B=>{let{target:H}=d.fullscreen;H===x.container&&(!d.isEmbed&&w.empty(d.config.ratio)||(A(),(B.type==="enterfullscreen"?Q:ze).call(d,window,"resize",D)))})}),s(this,"media",()=>{let{player:d}=this,{elements:y}=d;if(Q.call(d,d.media,"timeupdate seeking seeked",S=>X.timeUpdate.call(d,S)),Q.call(d,d.media,"durationchange loadeddata loadedmetadata",S=>X.durationUpdate.call(d,S)),Q.call(d,d.media,"ended",()=>{d.isHTML5&&d.isVideo&&d.config.resetOnEnd&&(d.restart(),d.pause())}),Q.call(d,d.media,"progress playing seeking seeked",S=>X.updateProgress.call(d,S)),Q.call(d,d.media,"volumechange",S=>X.updateVolume.call(d,S)),Q.call(d,d.media,"playing play pause ended emptied timeupdate",S=>fe.checkPlaying.call(d,S)),Q.call(d,d.media,"waiting canplay seeked playing",S=>fe.checkLoading.call(d,S)),d.supported.ui&&d.config.clickToPlay&&!d.isAudio){let S=ue.call(d,`.${d.config.classNames.video}`);if(!w.element(S))return;Q.call(d,y.container,"click",A=>{([y.container,S].includes(A.target)||S.contains(A.target))&&(d.touch&&d.config.hideControls||(d.ended?(this.proxy(A,d.restart,"restart"),this.proxy(A,()=>{Fe(d.play())},"play")):this.proxy(A,()=>{Fe(d.togglePlay())},"play")))})}d.supported.ui&&d.config.disableContextMenu&&Q.call(d,y.wrapper,"contextmenu",S=>{S.preventDefault()},!1),Q.call(d,d.media,"volumechange",()=>{d.storage.set({volume:d.volume,muted:d.muted})}),Q.call(d,d.media,"ratechange",()=>{X.updateSetting.call(d,"speed"),d.storage.set({speed:d.speed})}),Q.call(d,d.media,"qualitychange",S=>{X.updateSetting.call(d,"quality",null,S.detail.quality)}),Q.call(d,d.media,"ready qualitychange",()=>{X.setDownloadUrl.call(d)});let x=d.config.events.concat(["keyup","keydown"]).join(" ");Q.call(d,d.media,x,S=>{let{detail:A={}}=S;S.type==="error"&&(A=d.media.error),O.call(d,y.container,S.type,!0,A)})}),s(this,"proxy",(d,y,x)=>{let{player:S}=this,A=S.config.listeners[x],D=!0;w.function(A)&&(D=A.call(S,d)),D!==!1&&w.function(y)&&y.call(S,d)}),s(this,"bind",(d,y,x,S,A=!0)=>{let{player:D}=this,B=D.config.listeners[S],H=w.function(B);Q.call(D,d,y,J=>this.proxy(J,x,S),A&&!H)}),s(this,"controls",()=>{let{player:d}=this,{elements:y}=d,x=R.isIE?"change":"input";if(y.buttons.play&&Array.from(y.buttons.play).forEach(S=>{this.bind(S,"click",()=>{Fe(d.togglePlay())},"play")}),this.bind(y.buttons.restart,"click",d.restart,"restart"),this.bind(y.buttons.rewind,"click",()=>{d.lastSeekTime=Date.now(),d.rewind()},"rewind"),this.bind(y.buttons.fastForward,"click",()=>{d.lastSeekTime=Date.now(),d.forward()},"fastForward"),this.bind(y.buttons.mute,"click",()=>{d.muted=!d.muted},"mute"),this.bind(y.buttons.captions,"click",()=>d.toggleCaptions()),this.bind(y.buttons.download,"click",()=>{O.call(d,d.media,"download")},"download"),this.bind(y.buttons.fullscreen,"click",()=>{d.fullscreen.toggle()},"fullscreen"),this.bind(y.buttons.pip,"click",()=>{d.pip="toggle"},"pip"),this.bind(y.buttons.airplay,"click",d.airplay,"airplay"),this.bind(y.buttons.settings,"click",S=>{S.stopPropagation(),S.preventDefault(),X.toggleMenu.call(d,S)},null,!1),this.bind(y.buttons.settings,"keyup",S=>{[" ","Enter"].includes(S.key)&&(S.key!=="Enter"?(S.preventDefault(),S.stopPropagation(),X.toggleMenu.call(d,S)):X.focusFirstMenuItem.call(d,null,!0))},null,!1),this.bind(y.settings.menu,"keydown",S=>{S.key==="Escape"&&X.toggleMenu.call(d,S)}),this.bind(y.inputs.seek,"mousedown mousemove",S=>{let A=y.progress.getBoundingClientRect(),D=100/A.width*(S.pageX-A.left);S.currentTarget.setAttribute("seek-value",D)}),this.bind(y.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",S=>{let A=S.currentTarget,D="play-on-seeked";if(w.keyboardEvent(S)&&!["ArrowLeft","ArrowRight"].includes(S.key))return;d.lastSeekTime=Date.now();let B=A.hasAttribute(D),H=["mouseup","touchend","keyup"].includes(S.type);B&&H?(A.removeAttribute(D),Fe(d.play())):!H&&d.playing&&(A.setAttribute(D,""),d.pause())}),R.isIos){let S=we.call(d,'input[type="range"]');Array.from(S).forEach(A=>this.bind(A,x,D=>F(D.target)))}this.bind(y.inputs.seek,x,S=>{let A=S.currentTarget,D=A.getAttribute("seek-value");w.empty(D)&&(D=A.value),A.removeAttribute("seek-value"),d.currentTime=D/A.max*d.duration},"seek"),this.bind(y.progress,"mouseenter mouseleave mousemove",S=>X.updateSeekTooltip.call(d,S)),this.bind(y.progress,"mousemove touchmove",S=>{let{previewThumbnails:A}=d;A&&A.loaded&&A.startMove(S)}),this.bind(y.progress,"mouseleave touchend click",()=>{let{previewThumbnails:S}=d;S&&S.loaded&&S.endMove(!1,!0)}),this.bind(y.progress,"mousedown touchstart",S=>{let{previewThumbnails:A}=d;A&&A.loaded&&A.startScrubbing(S)}),this.bind(y.progress,"mouseup touchend",S=>{let{previewThumbnails:A}=d;A&&A.loaded&&A.endScrubbing(S)}),R.isWebKit&&Array.from(we.call(d,'input[type="range"]')).forEach(S=>{this.bind(S,"input",A=>X.updateRangeFill.call(d,A.target))}),d.config.toggleInvert&&!w.element(y.display.duration)&&this.bind(y.display.currentTime,"click",()=>{d.currentTime!==0&&(d.config.invertTime=!d.config.invertTime,X.timeUpdate.call(d))}),this.bind(y.inputs.volume,x,S=>{d.volume=S.target.value},"volume"),this.bind(y.controls,"mouseenter mouseleave",S=>{y.controls.hover=!d.touch&&S.type==="mouseenter"}),y.fullscreen&&Array.from(y.fullscreen.children).filter(S=>!S.contains(y.container)).forEach(S=>{this.bind(S,"mouseenter mouseleave",A=>{y.controls&&(y.controls.hover=!d.touch&&A.type==="mouseenter")})}),this.bind(y.controls,"mousedown mouseup touchstart touchend touchcancel",S=>{y.controls.pressed=["mousedown","touchstart"].includes(S.type)}),this.bind(y.controls,"focusin",()=>{let{config:S,timers:A}=d;Z(y.controls,S.classNames.noTransition,!0),fe.toggleControls.call(d,!0),setTimeout(()=>{Z(y.controls,S.classNames.noTransition,!1)},0);let D=this.touch?3e3:4e3;clearTimeout(A.controls),A.controls=setTimeout(()=>fe.toggleControls.call(d,!1),D)}),this.bind(y.inputs.volume,"wheel",S=>{let A=S.webkitDirectionInvertedFromDevice,[D,B]=[S.deltaX,-S.deltaY].map(he=>A?-he:he),H=Math.sign(Math.abs(D)>Math.abs(B)?D:B);d.increaseVolume(H/50);let{volume:J}=d.media;(H===1&&J<1||H===-1&&J>0)&&S.preventDefault()},"volume",!1)}),this.player=h,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.firstTouch=this.firstTouch.bind(this)}handleKey(h){let{player:d}=this,{elements:y}=d,{key:x,type:S,altKey:A,ctrlKey:D,metaKey:B,shiftKey:H}=h,J=S==="keydown",he=J&&x===this.lastKey;if(!(A||D||B||H)&&x){if(J){let ve=document.activeElement;if(w.element(ve)){let{editable:Ie}=d.config.selectors,{seek:Le}=y.inputs;if(ve!==Le&&ne(ve,Ie)||h.key===" "&&ne(ve,'button, [role^="menuitem"]'))return}switch([" ","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","0","1","2","3","4","5","6","7","8","9","c","f","k","l","m"].includes(x)&&(h.preventDefault(),h.stopPropagation()),x){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":he||(j=parseInt(x,10),d.currentTime=d.duration/10*j);break;case" ":case"k":he||Fe(d.togglePlay());break;case"ArrowUp":d.increaseVolume(.1);break;case"ArrowDown":d.decreaseVolume(.1);break;case"m":he||(d.muted=!d.muted);break;case"ArrowRight":d.forward();break;case"ArrowLeft":d.rewind();break;case"f":d.fullscreen.toggle();break;case"c":he||d.toggleCaptions();break;case"l":d.loop=!d.loop}x==="Escape"&&!d.fullscreen.usingNative&&d.fullscreen.active&&d.fullscreen.toggle(),this.lastKey=x}else this.lastKey=null;var j}}toggleMenu(h){X.toggleMenu.call(this.player,h)}}typeof globalThis<"u"||typeof window<"u"||(typeof global<"u"?global:typeof self<"u");var Re=function(c,h){return c(h={exports:{}},h.exports),h.exports}(function(c,h){c.exports=function(){var d=function(){},y={},x={},S={};function A(j,ve){j=j.push?j:[j];var Ie,Le,st,Se=[],nt=j.length,re=nt;for(Ie=function(Me,yt){yt.length&&Se.push(Me),--re||ve(Se)};nt--;)Le=j[nt],(st=x[Le])?Ie(Le,st):(S[Le]=S[Le]||[]).push(Ie)}function D(j,ve){if(j){var Ie=S[j];if(x[j]=ve,Ie)for(;Ie.length;)Ie[0](j,ve),Ie.splice(0,1)}}function B(j,ve){j.call&&(j={success:j}),ve.length?(j.error||d)(ve):(j.success||d)(j)}function H(j,ve,Ie,Le){var st,Se,nt=document,re=Ie.async,Me=(Ie.numRetries||0)+1,yt=Ie.before||d,mi=j.replace(/[\?|#].*$/,""),Oi=j.replace(/^(css|img)!/,"");Le=Le||0,/(^css!|\.css$)/.test(mi)?((Se=nt.createElement("link")).rel="stylesheet",Se.href=Oi,(st="hideFocus"in Se)&&Se.relList&&(st=0,Se.rel="preload",Se.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(mi)?(Se=nt.createElement("img")).src=Oi:((Se=nt.createElement("script")).src=j,Se.async=re===void 0||re),Se.onload=Se.onerror=Se.onbeforeload=function(ir){var Nn=ir.type[0];if(st)try{Se.sheet.cssText.length||(Nn="e")}catch(lf){lf.code!=18&&(Nn="e")}if(Nn=="e"){if((Le+=1)<Me)return H(j,ve,Ie,Le)}else if(Se.rel=="preload"&&Se.as=="style")return Se.rel="stylesheet";ve(j,Nn,ir.defaultPrevented)},yt(j,Se)!==!1&&nt.head.appendChild(Se)}function J(j,ve,Ie){var Le,st,Se=(j=j.push?j:[j]).length,nt=Se,re=[];for(Le=function(Me,yt,mi){if(yt=="e"&&re.push(Me),yt=="b"){if(!mi)return;re.push(Me)}--Se||ve(re)},st=0;st<nt;st++)H(j[st],Le,Ie)}function he(j,ve,Ie){var Le,st;if(ve&&ve.trim&&(Le=ve),st=(Le?Ie:ve)||{},Le){if(Le in y)throw"LoadJS";y[Le]=!0}function Se(nt,re){J(j,function(Me){B(st,Me),nt&&B({success:nt,error:re},Me),D(Le,Me)},st)}if(st.returnPromise)return new Promise(Se);Se()}return he.ready=function(j,ve){return A(j,function(Ie){B(ve,Ie)}),he},he.done=function(j){D(j,[])},he.reset=function(){y={},x={},S={}},he.isDefined=function(j){return j in y},he}()});function Ht(c){return new Promise((h,d)=>{Re(c,{success:h,error:d})})}function Ne(c){c&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===c&&(this.media.paused=!c,O.call(this,this.media,c?"play":"pause"))}let Ct={setup(){let c=this;Z(c.elements.wrapper,c.config.classNames.embed,!0),c.options.speed=c.config.speed.options,wt.call(c),w.object(window.Vimeo)?Ct.ready.call(c):Ht(c.config.urls.vimeo.sdk).then(()=>{Ct.ready.call(c)}).catch(h=>{c.debug.warn("Vimeo SDK (player.js) failed to load",h)})},ready(){let c=this,h=c.config.vimeo,{premium:d,referrerPolicy:y,...x}=h,S=c.media.getAttribute("src"),A="";w.empty(S)?(S=c.media.getAttribute(c.config.attributes.embed.id),A=c.media.getAttribute(c.config.attributes.embed.hash)):A=function(re){let Me=re.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return Me&&Me.length===5?Me[4]:null}(S);let D=A?{h:A}:{};d&&Object.assign(x,{controls:!1,sidedock:!1});let B=br({loop:c.config.loop.active,autoplay:c.autoplay,muted:c.muted,gesture:"media",playsinline:c.config.playsinline,...D,...x}),H=(J=S,w.empty(J)?null:w.number(Number(J))?J:J.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:J);var J;let he=V("iframe"),j=Ji(c.config.urls.vimeo.iframe,H,B);if(he.setAttribute("src",j),he.setAttribute("allowfullscreen",""),he.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),w.empty(y)||he.setAttribute("referrerPolicy",y),d||!h.customControls)he.setAttribute("data-poster",c.poster),c.media=ce(he,c.media);else{let re=V("div",{class:c.config.classNames.embedContainer,"data-poster":c.poster});re.appendChild(he),c.media=ce(re,c.media)}h.customControls||be(Ji(c.config.urls.vimeo.api,j)).then(re=>{!w.empty(re)&&re.thumbnail_url&&fe.setPoster.call(c,re.thumbnail_url).catch(()=>{})}),c.embed=new window.Vimeo.Player(he,{autopause:c.config.autopause,muted:c.muted}),c.media.paused=!0,c.media.currentTime=0,c.supported.ui&&c.embed.disableTextTrack(),c.media.play=()=>(Ne.call(c,!0),c.embed.play()),c.media.pause=()=>(Ne.call(c,!1),c.embed.pause()),c.media.stop=()=>{c.pause(),c.currentTime=0};let{currentTime:ve}=c.media;Object.defineProperty(c.media,"currentTime",{get:()=>ve,set(re){let{embed:Me,media:yt,paused:mi,volume:Oi}=c,ir=mi&&!Me.hasPlayed;yt.seeking=!0,O.call(c,yt,"seeking"),Promise.resolve(ir&&Me.setVolume(0)).then(()=>Me.setCurrentTime(re)).then(()=>ir&&Me.pause()).then(()=>ir&&Me.setVolume(Oi)).catch(()=>{})}});let Ie=c.config.speed.selected;Object.defineProperty(c.media,"playbackRate",{get:()=>Ie,set(re){c.embed.setPlaybackRate(re).then(()=>{Ie=re,O.call(c,c.media,"ratechange")}).catch(()=>{c.options.speed=[1]})}});let{volume:Le}=c.config;Object.defineProperty(c.media,"volume",{get:()=>Le,set(re){c.embed.setVolume(re).then(()=>{Le=re,O.call(c,c.media,"volumechange")})}});let{muted:st}=c.config;Object.defineProperty(c.media,"muted",{get:()=>st,set(re){let Me=!!w.boolean(re)&&re;c.embed.setMuted(!!Me||c.config.muted).then(()=>{st=Me,O.call(c,c.media,"volumechange")})}});let Se,{loop:nt}=c.config;Object.defineProperty(c.media,"loop",{get:()=>nt,set(re){let Me=w.boolean(re)?re:c.config.loop.active;c.embed.setLoop(Me).then(()=>{nt=Me})}}),c.embed.getVideoUrl().then(re=>{Se=re,X.setDownloadUrl.call(c)}).catch(re=>{this.debug.warn(re)}),Object.defineProperty(c.media,"currentSrc",{get:()=>Se}),Object.defineProperty(c.media,"ended",{get:()=>c.currentTime===c.duration}),Promise.all([c.embed.getVideoWidth(),c.embed.getVideoHeight()]).then(re=>{let[Me,yt]=re;c.embed.ratio=Vt(Me,yt),wt.call(this)}),c.embed.setAutopause(c.config.autopause).then(re=>{c.config.autopause=re}),c.embed.getVideoTitle().then(re=>{c.config.title=re,fe.setTitle.call(this)}),c.embed.getCurrentTime().then(re=>{ve=re,O.call(c,c.media,"timeupdate")}),c.embed.getDuration().then(re=>{c.media.duration=re,O.call(c,c.media,"durationchange")}),c.embed.getTextTracks().then(re=>{c.media.textTracks=re,U.setup.call(c)}),c.embed.on("cuechange",({cues:re=[]})=>{let Me=re.map(yt=>function(mi){let Oi=document.createDocumentFragment(),ir=document.createElement("div");return Oi.appendChild(ir),ir.innerHTML=mi,Oi.firstChild.innerText}(yt.text));U.updateCues.call(c,Me)}),c.embed.on("loaded",()=>{c.embed.getPaused().then(re=>{Ne.call(c,!re),re||O.call(c,c.media,"playing")}),w.element(c.embed.element)&&c.supported.ui&&c.embed.element.setAttribute("tabindex",-1)}),c.embed.on("bufferstart",()=>{O.call(c,c.media,"waiting")}),c.embed.on("bufferend",()=>{O.call(c,c.media,"playing")}),c.embed.on("play",()=>{Ne.call(c,!0),O.call(c,c.media,"playing")}),c.embed.on("pause",()=>{Ne.call(c,!1)}),c.embed.on("timeupdate",re=>{c.media.seeking=!1,ve=re.seconds,O.call(c,c.media,"timeupdate")}),c.embed.on("progress",re=>{c.media.buffered=re.percent,O.call(c,c.media,"progress"),parseInt(re.percent,10)===1&&O.call(c,c.media,"canplaythrough"),c.embed.getDuration().then(Me=>{Me!==c.media.duration&&(c.media.duration=Me,O.call(c,c.media,"durationchange"))})}),c.embed.on("seeked",()=>{c.media.seeking=!1,O.call(c,c.media,"seeked")}),c.embed.on("ended",()=>{c.media.paused=!0,O.call(c,c.media,"ended")}),c.embed.on("error",re=>{c.media.error=re,O.call(c,c.media,"error")}),h.customControls&&setTimeout(()=>fe.build.call(c),0)}};function It(c){c&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===c&&(this.media.paused=!c,O.call(this,this.media,c?"play":"pause"))}function mt(c){return c.noCookie?"https://www.youtube-nocookie.com":window.location.protocol==="http:"?"http://www.youtube.com":void 0}let it={setup(){if(Z(this.elements.wrapper,this.config.classNames.embed,!0),w.object(window.YT)&&w.function(window.YT.Player))it.ready.call(this);else{let c=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{w.function(c)&&c(),it.ready.call(this)},Ht(this.config.urls.youtube.sdk).catch(h=>{this.debug.warn("YouTube API failed to load",h)})}},getTitle(c){be(Ji(this.config.urls.youtube.api,c)).then(h=>{if(w.object(h)){let{title:d,height:y,width:x}=h;this.config.title=d,fe.setTitle.call(this),this.embed.ratio=Vt(x,y)}wt.call(this)}).catch(()=>{wt.call(this)})},ready(){let c=this,h=c.config.youtube,d=c.media&&c.media.getAttribute("id");if(!w.empty(d)&&d.startsWith("youtube-"))return;let y=c.media.getAttribute("src");w.empty(y)&&(y=c.media.getAttribute(this.config.attributes.embed.id));let x=(S=y,w.empty(S)?null:S.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:S);var S;let A=V("div",{id:`${c.provider}-${Math.floor(1e4*Math.random())}`,"data-poster":h.customControls?c.poster:void 0});if(c.media=ce(A,c.media),h.customControls){let D=B=>`https://i.ytimg.com/vi/${x}/${B}default.jpg`;ut(D("maxres"),121).catch(()=>ut(D("sd"),121)).catch(()=>ut(D("hq"))).then(B=>fe.setPoster.call(c,B.src)).then(B=>{B.includes("maxres")||(c.elements.poster.style.backgroundSize="cover")}).catch(()=>{})}c.embed=new window.YT.Player(c.media,{videoId:x,host:mt(h),playerVars:Y({},{autoplay:c.config.autoplay?1:0,hl:c.config.hl,controls:c.supported.ui&&h.customControls?0:1,disablekb:1,playsinline:c.config.playsinline&&!c.config.fullscreen.iosNative?1:0,cc_load_policy:c.captions.active?1:0,cc_lang_pref:c.config.captions.language,widget_referrer:window?window.location.href:null},h),events:{onError(D){if(!c.media.error){let B=D.data,H={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[B]||"An unknown error occurred";c.media.error={code:B,message:H},O.call(c,c.media,"error")}},onPlaybackRateChange(D){let B=D.target;c.media.playbackRate=B.getPlaybackRate(),O.call(c,c.media,"ratechange")},onReady(D){if(w.function(c.media.play))return;let B=D.target;it.getTitle.call(c,x),c.media.play=()=>{It.call(c,!0),B.playVideo()},c.media.pause=()=>{It.call(c,!1),B.pauseVideo()},c.media.stop=()=>{B.stopVideo()},c.media.duration=B.getDuration(),c.media.paused=!0,c.media.currentTime=0,Object.defineProperty(c.media,"currentTime",{get:()=>Number(B.getCurrentTime()),set(j){c.paused&&!c.embed.hasPlayed&&c.embed.mute(),c.media.seeking=!0,O.call(c,c.media,"seeking"),B.seekTo(j)}}),Object.defineProperty(c.media,"playbackRate",{get:()=>B.getPlaybackRate(),set(j){B.setPlaybackRate(j)}});let{volume:H}=c.config;Object.defineProperty(c.media,"volume",{get:()=>H,set(j){H=j,B.setVolume(100*H),O.call(c,c.media,"volumechange")}});let{muted:J}=c.config;Object.defineProperty(c.media,"muted",{get:()=>J,set(j){let ve=w.boolean(j)?j:J;J=ve,B[ve?"mute":"unMute"](),B.setVolume(100*H),O.call(c,c.media,"volumechange")}}),Object.defineProperty(c.media,"currentSrc",{get:()=>B.getVideoUrl()}),Object.defineProperty(c.media,"ended",{get:()=>c.currentTime===c.duration});let he=B.getAvailablePlaybackRates();c.options.speed=he.filter(j=>c.config.speed.options.includes(j)),c.supported.ui&&h.customControls&&c.media.setAttribute("tabindex",-1),O.call(c,c.media,"timeupdate"),O.call(c,c.media,"durationchange"),clearInterval(c.timers.buffering),c.timers.buffering=setInterval(()=>{c.media.buffered=B.getVideoLoadedFraction(),(c.media.lastBuffered===null||c.media.lastBuffered<c.media.buffered)&&O.call(c,c.media,"progress"),c.media.lastBuffered=c.media.buffered,c.media.buffered===1&&(clearInterval(c.timers.buffering),O.call(c,c.media,"canplaythrough"))},200),h.customControls&&setTimeout(()=>fe.build.call(c),50)},onStateChange(D){let B=D.target;switch(clearInterval(c.timers.playing),c.media.seeking&&[1,2].includes(D.data)&&(c.media.seeking=!1,O.call(c,c.media,"seeked")),D.data){case-1:O.call(c,c.media,"timeupdate"),c.media.buffered=B.getVideoLoadedFraction(),O.call(c,c.media,"progress");break;case 0:It.call(c,!1),c.media.loop?(B.stopVideo(),B.playVideo()):O.call(c,c.media,"ended");break;case 1:h.customControls&&!c.config.autoplay&&c.media.paused&&!c.embed.hasPlayed?c.media.pause():(It.call(c,!0),O.call(c,c.media,"playing"),c.timers.playing=setInterval(()=>{O.call(c,c.media,"timeupdate")},50),c.media.duration!==B.getDuration()&&(c.media.duration=B.getDuration(),O.call(c,c.media,"durationchange")));break;case 2:c.muted||c.embed.unMute(),It.call(c,!1);break;case 3:O.call(c,c.media,"waiting")}O.call(c,c.elements.container,"statechange",!1,{code:D.data})}}})}},gt={setup(){this.media?(Z(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),Z(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&Z(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=V("div",{class:this.config.classNames.video}),q(this.media,this.elements.wrapper),this.elements.poster=V("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?_t.setup.call(this):this.isYouTube?it.setup.call(this):this.isVimeo&&Ct.setup.call(this)):this.debug.warn("No media element found!")}};class tr{constructor(h){s(this,"load",()=>{this.enabled&&(w.object(window.google)&&w.object(window.google.ima)?this.ready():Ht(this.player.config.urls.googleIMA.sdk).then(()=>{this.ready()}).catch(()=>{this.trigger("error",new Error("Google IMA SDK failed to load"))}))}),s(this,"ready",()=>{var d;this.enabled||((d=this).manager&&d.manager.destroy(),d.elements.displayContainer&&d.elements.displayContainer.destroy(),d.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(()=>{this.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}),s(this,"setupIMA",()=>{this.elements.container=V("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,d=>this.onAdsManagerLoaded(d),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,d=>this.onAdError(d),!1),this.requestAds()}),s(this,"requestAds",()=>{let{container:d}=this.player.elements;try{let y=new google.ima.AdsRequest;y.adTagUrl=this.tagUrl,y.linearAdSlotWidth=d.offsetWidth,y.linearAdSlotHeight=d.offsetHeight,y.nonLinearAdSlotWidth=d.offsetWidth,y.nonLinearAdSlotHeight=d.offsetHeight,y.forceNonLinearFullSlot=!1,y.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(y)}catch(y){this.onAdError(y)}}),s(this,"pollCountdown",(d=!1)=>{if(!d)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(()=>{let y=xi(Math.max(this.manager.getRemainingTime(),0)),x=`${Ve.get("advertisement",this.player.config)} - ${y}`;this.elements.container.setAttribute("data-badge-text",x)},100)}),s(this,"onAdsManagerLoaded",d=>{if(!this.enabled)return;let y=new google.ima.AdsRenderingSettings;y.restoreCustomPlaybackStateOnAdBreakComplete=!0,y.enablePreloading=!0,this.manager=d.getAdsManager(this.player,y),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,x=>this.onAdError(x)),Object.keys(google.ima.AdEvent.Type).forEach(x=>{this.manager.addEventListener(google.ima.AdEvent.Type[x],S=>this.onAdEvent(S))}),this.trigger("loaded")}),s(this,"addCuePoints",()=>{w.empty(this.cuePoints)||this.cuePoints.forEach(d=>{if(d!==0&&d!==-1&&d<this.player.duration){let y=this.player.elements.progress;if(w.element(y)){let x=100/this.player.duration*d,S=V("span",{class:this.player.config.classNames.cues});S.style.left=`${x.toString()}%`,y.appendChild(S)}}})}),s(this,"onAdEvent",d=>{let{container:y}=this.player.elements,x=d.getAd(),S=d.getAdData();switch((A=>{O.call(this.player,this.player.media,`ads${A.replace(/_/g,"").toLowerCase()}`)})(d.type),d.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),x.isLinear()||(x.width=y.offsetWidth,x.height=y.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.player.ended?this.loadAds():this.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:S.adError&&this.player.debug.warn(`Non-fatal ad error: ${S.adError.getMessage()}`)}}),s(this,"onAdError",d=>{this.cancel(),this.player.debug.warn("Ads error",d)}),s(this,"listeners",()=>{let{container:d}=this.player.elements,y;this.player.on("canplay",()=>{this.addCuePoints()}),this.player.on("ended",()=>{this.loader.contentComplete()}),this.player.on("timeupdate",()=>{y=this.player.currentTime}),this.player.on("seeked",()=>{let x=this.player.currentTime;w.empty(this.cuePoints)||this.cuePoints.forEach((S,A)=>{y<S&&S<x&&(this.manager.discardAdBreak(),this.cuePoints.splice(A,1))})}),window.addEventListener("resize",()=>{this.manager&&this.manager.resize(d.offsetWidth,d.offsetHeight,google.ima.ViewMode.NORMAL)})}),s(this,"play",()=>{let{container:d}=this.player.elements;this.managerPromise||this.resumeContent(),this.managerPromise.then(()=>{this.manager.setVolume(this.player.volume),this.elements.displayContainer.initialize();try{this.initialized||(this.manager.init(d.offsetWidth,d.offsetHeight,google.ima.ViewMode.NORMAL),this.manager.start()),this.initialized=!0}catch(y){this.onAdError(y)}}).catch(()=>{})}),s(this,"resumeContent",()=>{this.elements.container.style.zIndex="",this.playing=!1,Fe(this.player.media.play())}),s(this,"pauseContent",()=>{this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}),s(this,"cancel",()=>{this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}),s(this,"loadAds",()=>{this.managerPromise.then(()=>{this.manager&&this.manager.destroy(),this.managerPromise=new Promise(d=>{this.on("loaded",d),this.player.debug.log(this.manager)}),this.initialized=!1,this.requestAds()}).catch(()=>{})}),s(this,"trigger",(d,...y)=>{let x=this.events[d];w.array(x)&&x.forEach(S=>{w.function(S)&&S.apply(this,y)})}),s(this,"on",(d,y)=>(w.array(this.events[d])||(this.events[d]=[]),this.events[d].push(y),this)),s(this,"startSafetyTimer",(d,y)=>{this.player.debug.log(`Safety timer invoked from: ${y}`),this.safetyTimer=setTimeout(()=>{this.cancel(),this.clearSafetyTimer("startSafetyTimer()")},d)}),s(this,"clearSafetyTimer",d=>{w.nullOrUndefined(this.safetyTimer)||(this.player.debug.log(`Safety timer cleared from: ${d}`),clearTimeout(this.safetyTimer),this.safetyTimer=null)}),this.player=h,this.config=h.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((d,y)=>{this.on("loaded",d),this.on("error",y)}),this.load()}get enabled(){let{config:h}=this;return this.player.isHTML5&&this.player.isVideo&&h.enabled&&(!w.empty(h.publisherId)||w.url(h.tagUrl))}get tagUrl(){let{config:h}=this;return w.url(h.tagUrl)?h.tagUrl:`https://go.aniview.com/api/adserver6/vast/?${br({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:h.publisherId})}`}}function $r(c=0,h=0,d=255){return Math.min(Math.max(c,h),d)}let xt=c=>{let h=[];return c.split(/\r\n\r\n|\n\n|\r\r/).forEach(d=>{let y={};d.split(/\r\n|\n|\r/).forEach(x=>{if(w.number(y.startTime)){if(!w.empty(x.trim())&&w.empty(y.text)){let S=x.trim().split("#xywh=");[y.text]=S,S[1]&&([y.x,y.y,y.w,y.h]=S[1].split(","))}}else{let S=x.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);S&&(y.startTime=60*Number(S[1]||0)*60+60*Number(S[2])+Number(S[3])+ +`0.${S[4]}`,y.endTime=60*Number(S[6]||0)*60+60*Number(S[7])+Number(S[8])+ +`0.${S[9]}`)}}),y.text&&h.push(y)}),h},rt=(c,h)=>{let d={};return c>h.width/h.height?(d.width=h.width,d.height=1/c*h.width):(d.height=h.height,d.width=c*h.height),d};class ri{constructor(h){s(this,"load",()=>{this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(()=>{this.enabled&&(this.render(),this.determineContainerAutoSizing(),this.listeners(),this.loaded=!0)})}),s(this,"getThumbnails",()=>new Promise(d=>{let{src:y}=this.player.config.previewThumbnails;if(w.empty(y))throw new Error("Missing previewThumbnails.src config attribute");let x=()=>{this.thumbnails.sort((S,A)=>S.height-A.height),this.player.debug.log("Preview thumbnails",this.thumbnails),d()};if(w.function(y))y(S=>{this.thumbnails=S,x()});else{let S=(w.string(y)?[y]:y).map(A=>this.getThumbnail(A));Promise.all(S).then(x)}})),s(this,"getThumbnail",d=>new Promise(y=>{be(d).then(x=>{let S={frames:xt(x),height:null,urlPrefix:""};S.frames[0].text.startsWith("/")||S.frames[0].text.startsWith("http://")||S.frames[0].text.startsWith("https://")||(S.urlPrefix=d.substring(0,d.lastIndexOf("/")+1));let A=new Image;A.onload=()=>{S.height=A.naturalHeight,S.width=A.naturalWidth,this.thumbnails.push(S),y()},A.src=S.urlPrefix+S.frames[0].text})})),s(this,"startMove",d=>{if(this.loaded&&w.event(d)&&["touchmove","mousemove"].includes(d.type)&&this.player.media.duration){if(d.type==="touchmove")this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var y,x;let S=this.player.elements.progress.getBoundingClientRect(),A=100/S.width*(d.pageX-S.left);this.seekTime=this.player.media.duration*(A/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=d.pageX,this.elements.thumb.time.innerText=xi(this.seekTime);let D=(y=this.player.config.markers)===null||y===void 0||(x=y.points)===null||x===void 0?void 0:x.find(({time:B})=>B===Math.round(this.seekTime));D&&this.elements.thumb.time.insertAdjacentHTML("afterbegin",`${D.label}<br>`)}this.showImageAtCurrentTime()}}),s(this,"endMove",()=>{this.toggleThumbContainer(!1,!0)}),s(this,"startScrubbing",d=>{(w.nullOrUndefined(d.button)||d.button===!1||d.button===0)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}),s(this,"endScrubbing",()=>{this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Xe.call(this.player,this.player.media,"timeupdate",()=>{this.mouseDown||this.toggleScrubbingContainer(!1)})}),s(this,"listeners",()=>{this.player.on("play",()=>{this.toggleThumbContainer(!1,!0)}),this.player.on("seeked",()=>{this.toggleThumbContainer(!1)}),this.player.on("timeupdate",()=>{this.lastTime=this.player.media.currentTime})}),s(this,"render",()=>{this.elements.thumb.container=V("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=V("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);let d=V("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=V("span",{},"00:00"),d.appendChild(this.elements.thumb.time),this.elements.thumb.imageContainer.appendChild(d),w.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=V("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}),s(this,"destroy",()=>{this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()}),s(this,"showImageAtCurrentTime",()=>{this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();let d=this.thumbnails[0].frames.findIndex(S=>this.seekTime>=S.startTime&&this.seekTime<=S.endTime),y=d>=0,x=0;this.mouseDown||this.toggleThumbContainer(y),y&&(this.thumbnails.forEach((S,A)=>{this.loadedImages.includes(S.frames[d].text)&&(x=A)}),d!==this.showingThumb&&(this.showingThumb=d,this.loadImage(x)))}),s(this,"loadImage",(d=0)=>{let y=this.showingThumb,x=this.thumbnails[d],{urlPrefix:S}=x,A=x.frames[y],D=x.frames[y].text,B=S+D;if(this.currentImageElement&&this.currentImageElement.dataset.filename===D)this.showImage(this.currentImageElement,A,d,y,D,!1),this.currentImageElement.dataset.index=y,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);let H=new Image;H.src=B,H.dataset.index=y,H.dataset.filename=D,this.showingThumbFilename=D,this.player.debug.log(`Loading image: ${B}`),H.onload=()=>this.showImage(H,A,d,y,D,!0),this.loadingImage=H,this.removeOldImages(H)}}),s(this,"showImage",(d,y,x,S,A,D=!0)=>{this.player.debug.log(`Showing thumb: ${A}. num: ${S}. qual: ${x}. newimg: ${D}`),this.setImageSizeAndOffset(d,y),D&&(this.currentImageContainer.appendChild(d),this.currentImageElement=d,this.loadedImages.includes(A)||this.loadedImages.push(A)),this.preloadNearby(S,!0).then(this.preloadNearby(S,!1)).then(this.getHigherQuality(x,d,y,A))}),s(this,"removeOldImages",d=>{Array.from(this.currentImageContainer.children).forEach(y=>{if(y.tagName.toLowerCase()!=="img")return;let x=this.usingSprites?500:1e3;if(y.dataset.index!==d.dataset.index&&!y.dataset.deleting){y.dataset.deleting=!0;let{currentImageContainer:S}=this;setTimeout(()=>{S.removeChild(y),this.player.debug.log(`Removing thumb: ${y.dataset.filename}`)},x)}})}),s(this,"preloadNearby",(d,y=!0)=>new Promise(x=>{setTimeout(()=>{let S=this.thumbnails[0].frames[d].text;if(this.showingThumbFilename===S){let A;A=y?this.thumbnails[0].frames.slice(d):this.thumbnails[0].frames.slice(0,d).reverse();let D=!1;A.forEach(B=>{let H=B.text;if(H!==S&&!this.loadedImages.includes(H)){D=!0,this.player.debug.log(`Preloading thumb filename: ${H}`);let{urlPrefix:J}=this.thumbnails[0],he=J+H,j=new Image;j.src=he,j.onload=()=>{this.player.debug.log(`Preloaded thumb filename: ${H}`),this.loadedImages.includes(H)||this.loadedImages.push(H),x()}}}),D||x()}},300)})),s(this,"getHigherQuality",(d,y,x,S)=>{if(d<this.thumbnails.length-1){let A=y.naturalHeight;this.usingSprites&&(A=x.h),A<this.thumbContainerHeight&&setTimeout(()=>{this.showingThumbFilename===S&&(this.player.debug.log(`Showing higher quality thumb for: ${S}`),this.loadImage(d+1))},300)}}),s(this,"toggleThumbContainer",(d=!1,y=!1)=>{let x=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(x,d),!d&&y&&(this.showingThumb=null,this.showingThumbFilename=null)}),s(this,"toggleScrubbingContainer",(d=!1)=>{let y=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(y,d),d||(this.showingThumb=null,this.showingThumbFilename=null)}),s(this,"determineContainerAutoSizing",()=>{(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)}),s(this,"setThumbContainerSizeAndPos",()=>{let{imageContainer:d}=this.elements.thumb;if(this.sizeSpecifiedInCSS){if(d.clientHeight>20&&d.clientWidth<20){let y=Math.floor(d.clientHeight*this.thumbAspectRatio);d.style.width=`${y}px`}else if(d.clientHeight<20&&d.clientWidth>20){let y=Math.floor(d.clientWidth/this.thumbAspectRatio);d.style.height=`${y}px`}}else{let y=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);d.style.height=`${this.thumbContainerHeight}px`,d.style.width=`${y}px`}this.setThumbContainerPos()}),s(this,"setThumbContainerPos",()=>{let d=this.player.elements.progress.getBoundingClientRect(),y=this.player.elements.container.getBoundingClientRect(),{container:x}=this.elements.thumb,S=y.left-d.left+10,A=y.right-d.left-x.clientWidth-10,D=this.mousePosX-d.left-x.clientWidth/2,B=$r(D,S,A);x.style.left=`${B}px`,x.style.setProperty("--preview-arrow-offset",D-B+"px")}),s(this,"setScrubbingContainerSize",()=>{let{width:d,height:y}=rt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});this.elements.scrubbing.container.style.width=`${d}px`,this.elements.scrubbing.container.style.height=`${y}px`}),s(this,"setImageSizeAndOffset",(d,y)=>{if(!this.usingSprites)return;let x=this.thumbContainerHeight/y.h;d.style.height=d.naturalHeight*x+"px",d.style.width=d.naturalWidth*x+"px",d.style.left=`-${y.x*x}px`,d.style.top=`-${y.y*x}px`}),this.player=h,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}get enabled(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}get currentImageContainer(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}get usingSprites(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}get thumbAspectRatio(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}get thumbContainerHeight(){if(this.mouseDown){let{height:h}=rt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});return h}return this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}get currentImageElement(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement}set currentImageElement(h){this.mouseDown?this.currentScrubbingImageElement=h:this.currentThumbnailImageElement=h}}let Fr={insertElements(c,h){w.string(h)?me(c,this.media,{src:h}):w.array(h)&&h.forEach(d=>{me(c,this.media,d)})},change(c){W(c,"sources.length")?(_t.cancelRequests.call(this),this.destroy.call(this,()=>{this.options.quality=[],ge(this.media),this.media=null,w.element(this.elements.container)&&this.elements.container.removeAttribute("class");let{sources:h,type:d}=c,[{provider:y=pe.html5,src:x}]=h,S=y==="html5"?d:"div",A=y==="html5"?{}:{src:x};Object.assign(this,{provider:y,type:d,supported:de.check(d,y,this.config.playsinline),media:V(S,A)}),this.elements.container.appendChild(this.media),w.boolean(c.autoplay)&&(this.config.autoplay=c.autoplay),this.isHTML5&&(this.config.crossorigin&&this.media.setAttribute("crossorigin",""),this.config.autoplay&&this.media.setAttribute("autoplay",""),w.empty(c.poster)||(this.poster=c.poster),this.config.loop.active&&this.media.setAttribute("loop",""),this.config.muted&&this.media.setAttribute("muted",""),this.config.playsinline&&this.media.setAttribute("playsinline","")),fe.addStyleHook.call(this),this.isHTML5&&Fr.insertElements.call(this,"source",h),this.config.title=c.title,gt.setup.call(this),this.isHTML5&&Object.keys(c).includes("tracks")&&Fr.insertElements.call(this,"track",c.tracks),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&fe.build.call(this),this.isHTML5&&this.media.load(),w.empty(c.previewThumbnails)||(Object.assign(this.config.previewThumbnails,c.previewThumbnails),this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ri(this))),this.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};class wr{constructor(h,d){if(s(this,"play",()=>w.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>Fe(this.media.play())),this.media.play()):null),s(this,"pause",()=>this.playing&&w.function(this.media.pause)?this.media.pause():null),s(this,"togglePlay",D=>(w.boolean(D)?D:!this.playing)?this.play():this.pause()),s(this,"stop",()=>{this.isHTML5?(this.pause(),this.restart()):w.function(this.media.stop)&&this.media.stop()}),s(this,"restart",()=>{this.currentTime=0}),s(this,"rewind",D=>{this.currentTime-=w.number(D)?D:this.config.seekTime}),s(this,"forward",D=>{this.currentTime+=w.number(D)?D:this.config.seekTime}),s(this,"increaseVolume",D=>{let B=this.media.muted?0:this.volume;this.volume=B+(w.number(D)?D:0)}),s(this,"decreaseVolume",D=>{this.increaseVolume(-D)}),s(this,"airplay",()=>{de.airplay&&this.media.webkitShowPlaybackTargetPicker()}),s(this,"toggleControls",D=>{if(this.supported.ui&&!this.isAudio){let B=oe(this.elements.container,this.config.classNames.hideControls),H=D===void 0?void 0:!D,J=Z(this.elements.container,this.config.classNames.hideControls,H);if(J&&w.array(this.config.controls)&&this.config.controls.includes("settings")&&!w.empty(this.config.settings)&&X.toggleMenu.call(this,!1),J!==B){let he=J?"controlshidden":"controlsshown";O.call(this,this.media,he)}return!J}return!1}),s(this,"on",(D,B)=>{Q.call(this,this.elements.container,D,B)}),s(this,"once",(D,B)=>{Xe.call(this,this.elements.container,D,B)}),s(this,"off",(D,B)=>{ze(this.elements.container,D,B)}),s(this,"destroy",(D,B=!1)=>{if(!this.ready)return;let H=()=>{document.body.style.overflow="",this.embed=null,B?(Object.keys(this.elements).length&&(ge(this.elements.buttons.play),ge(this.elements.captions),ge(this.elements.controls),ge(this.elements.wrapper),this.elements.buttons.play=null,this.elements.captions=null,this.elements.controls=null,this.elements.wrapper=null),w.function(D)&&D()):($e.call(this),_t.cancelRequests.call(this),ce(this.elements.original,this.elements.container),O.call(this,this.elements.original,"destroyed",!0),w.function(D)&&D.call(this.elements.original),this.ready=!1,setTimeout(()=>{this.elements=null,this.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(fe.toggleNativeControls.call(this,!0),H()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),this.embed!==null&&w.function(this.embed.destroy)&&this.embed.destroy(),H()):this.isVimeo&&(this.embed!==null&&this.embed.unload().then(H),setTimeout(H,200))}),s(this,"supports",D=>de.mime.call(this,D)),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=de.touch,this.media=h,w.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||w.nodeList(this.media)||w.array(this.media))&&(this.media=this.media[0]),this.config=Y({},le,wr.defaults,d||{},(()=>{try{return JSON.parse(this.media.getAttribute("data-plyr-config"))}catch{return{}}})()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Ce(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",de),w.nullOrUndefined(this.media)||!w.element(this.media))return void this.debug.error("Setup failed: no suitable element passed");if(this.media.plyr)return void this.debug.warn("Target already setup");if(!this.config.enabled)return void this.debug.error("Setup failed: disabled by config");if(!de.check().api)return void this.debug.error("Setup failed: no support");let y=this.media.cloneNode(!0);y.autoplay=!1,this.elements.original=y;let x=this.media.tagName.toLowerCase(),S=null,A=null;switch(x){case"div":if(S=this.media.querySelector("iframe"),w.element(S)){if(A=Si(S.getAttribute("src")),this.provider=function(D){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(D)?pe.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(D)?pe.vimeo:null}(A.toString()),this.elements.container=this.media,this.media=S,this.elements.container.className="",A.search.length){let D=["1","true"];D.includes(A.searchParams.get("autoplay"))&&(this.config.autoplay=!0),D.includes(A.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=D.includes(A.searchParams.get("playsinline")),this.config.youtube.hl=A.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(w.empty(this.provider)||!Object.values(pe).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=ye;break;case"video":case"audio":this.type=x,this.provider=pe.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=de.check(this.type,this.provider),this.supported.api?(this.eventListeners=[],this.listeners=new We(this),this.storage=new pi(this),this.media.plyr=this,w.element(this.elements.container)||(this.elements.container=V("div"),q(this.media,this.elements.container)),fe.migrateStyles.call(this),fe.addStyleHook.call(this),gt.setup.call(this),this.config.debug&&Q.call(this,this.elements.container,this.config.events.join(" "),D=>{this.debug.log(`event: ${D.type}`)}),this.fullscreen=new De(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&fe.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new tr(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",()=>Fe(this.play())),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ri(this))):this.debug.error("Setup failed: no support")}get isHTML5(){return this.provider===pe.html5}get isEmbed(){return this.isYouTube||this.isVimeo}get isYouTube(){return this.provider===pe.youtube}get isVimeo(){return this.provider===pe.vimeo}get isVideo(){return this.type===ye}get isAudio(){return this.type===ae}get playing(){return!!(this.ready&&!this.paused&&!this.ended)}get paused(){return!!this.media.paused}get stopped(){return!!(this.paused&&this.currentTime===0)}get ended(){return!!this.media.ended}set currentTime(h){if(!this.duration)return;let d=w.number(h)&&h>0;this.media.currentTime=d?Math.min(h,this.duration):0,this.debug.log(`Seeking to ${this.currentTime} seconds`)}get currentTime(){return Number(this.media.currentTime)}get buffered(){let{buffered:h}=this.media;return w.number(h)?h:h&&h.length&&this.duration>0?h.end(0)/this.duration:0}get seeking(){return!!this.media.seeking}get duration(){let h=parseFloat(this.config.duration),d=(this.media||{}).duration,y=w.number(d)&&d!==1/0?d:0;return h||y}set volume(h){let d=h;w.string(d)&&(d=Number(d)),w.number(d)||(d=this.storage.get("volume")),w.number(d)||({volume:d}=this.config),d>1&&(d=1),d<0&&(d=0),this.config.volume=d,this.media.volume=d,!w.empty(h)&&this.muted&&d>0&&(this.muted=!1)}get volume(){return Number(this.media.volume)}set muted(h){let d=h;w.boolean(d)||(d=this.storage.get("muted")),w.boolean(d)||(d=this.config.muted),this.config.muted=d,this.media.muted=d}get muted(){return!!this.media.muted}get hasAudio(){return!this.isHTML5||!!this.isAudio||!!this.media.mozHasAudio||!!this.media.webkitAudioDecodedByteCount||!!(this.media.audioTracks&&this.media.audioTracks.length)}set speed(h){let d=null;w.number(h)&&(d=h),w.number(d)||(d=this.storage.get("speed")),w.number(d)||(d=this.config.speed.selected);let{minimumSpeed:y,maximumSpeed:x}=this;d=$r(d,y,x),this.config.speed.selected=d,setTimeout(()=>{this.media&&(this.media.playbackRate=d)},0)}get speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}get maximumSpeed(){return this.isYouTube?Math.max(...this.options.speed):this.isVimeo?2:16}set quality(h){let d=this.config.quality,y=this.options.quality;if(!y.length)return;let x=[!w.empty(h)&&Number(h),this.storage.get("quality"),d.selected,d.default].find(w.number),S=!0;if(!y.includes(x)){let A=ti(y,x);this.debug.warn(`Unsupported quality option: ${x}, using ${A} instead`),x=A,S=!1}d.selected=x,this.media.quality=x,S&&this.storage.set({quality:x})}get quality(){return this.media.quality}set loop(h){let d=w.boolean(h)?h:this.config.loop.active;this.config.loop.active=d,this.media.loop=d}get loop(){return!!this.media.loop}set source(h){Fr.change.call(this,h)}get source(){return this.media.currentSrc}get download(){let{download:h}=this.config.urls;return w.url(h)?h:this.source}set download(h){w.url(h)&&(this.config.urls.download=h,X.setDownloadUrl.call(this))}set poster(h){this.isVideo?fe.setPoster.call(this,h,!1).catch(()=>{}):this.debug.warn("Poster can only be set for video")}get poster(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}get ratio(){if(!this.isVideo)return null;let h=di(Ge.call(this));return w.array(h)?h.join(":"):h}set ratio(h){this.isVideo?w.string(h)&&ct(h)?(this.config.ratio=di(h),wt.call(this)):this.debug.error(`Invalid aspect ratio specified (${h})`):this.debug.warn("Aspect ratio can only be set for video")}set autoplay(h){this.config.autoplay=w.boolean(h)?h:this.config.autoplay}get autoplay(){return!!this.config.autoplay}toggleCaptions(h){U.toggle.call(this,h,!1)}set currentTrack(h){U.set.call(this,h,!1),U.setup.call(this)}get currentTrack(){let{toggled:h,currentTrack:d}=this.captions;return h?d:-1}set language(h){U.setLanguage.call(this,h,!1)}get language(){return(U.getCurrentTrack.call(this)||{}).language}set pip(h){if(!de.pip)return;let d=w.boolean(h)?h:!this.pip;w.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(d?Oe:K),w.function(this.media.requestPictureInPicture)&&(!this.pip&&d?this.media.requestPictureInPicture():this.pip&&!d&&document.exitPictureInPicture())}get pip(){return de.pip?w.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Oe:null}setPreviewThumbnails(h){this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),Object.assign(this.config.previewThumbnails,h),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ri(this))}static supported(h,d){return de.check(h,d)}static loadSprite(h,d){return Hi(h,d)}static setup(h,d={}){let y=null;return w.string(h)?y=Array.from(document.querySelectorAll(h)):w.nodeList(h)?y=Array.from(h):w.array(h)&&(y=h.filter(w.element)),w.empty(y)?null:y.map(x=>new wr(x,d))}}var _r;return wr.defaults=(_r=le,JSON.parse(JSON.stringify(_r))),wr})});var Ip=Bn(()=>{window.Sticksy=function(){"use strict";var s={STATIC:"static",FIXED:"fixed",STUCK:"stuck"};function e(t,r){if(!t)throw new Error("You have to specify the target element");if(typeof t!="string"&&!(t instanceof Element))throw new Error("Expected a string or element, but got: "+Object.prototype.toString.call(t));var n=i.findElement(t);if(!n)throw new Error("Cannot find target element: "+t);var o=n.parentNode;if(!o)throw new Error("Cannot find container of target element: "+t);r=r||{},this._props={containerEl:o,targetEl:n,topSpacing:r.topSpacing||0,enabled:r.enabled||!0,listen:r.listen||!1},this.onStateChanged=null,this.nodeRef=n,this._initialize()}e.instances=[],e.enabledInstances=[],e.prototype._initialize=function(){var t=this;this.state=s.STATIC,this._stickyNodes=[],this._dummyNodes=[];for(var r=this._props.targetEl;r;){var n=r.cloneNode(!0);n.style.visibility="hidden",n.style.pointerEvents="none",n.className+=" sticksy-dummy-node",n.removeAttribute("id"),this._props.targetEl.parentNode.insertBefore(n,this._props.targetEl),this._stickyNodes.push(r),this._dummyNodes.push(n),r=r.nextElementSibling}this._stickyNodesHeight=0,this._limits={top:0,bottom:0},this._isListening=!1,this._props.containerEl.style.position="relative",this._shouldCollapseMargins=getComputedStyle(this._props.containerEl).display.indexOf("flex")===-1,this._props.listen&&(this._mutationObserver=new MutationObserver(function(){t.hardRefresh()}),this._startListen()),e.instances.push(this),this._props.enabled&&e.enabledInstances.push(this),this.hardRefresh()},e.prototype._startListen=function(){!this._props.listen||this._isListening||(this._mutationObserver.observe(this._props.containerEl,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),this._isListening=!0)},e.prototype._stopListen=function(){!this._props.listen||!this._isListening||(this._mutationObserver.disconnect(),this._isListening=!1)},e.prototype._calcState=function(t){return t<this._limits.top?s.STATIC:t>=this._limits.bottom?s.STUCK:s.FIXED},e.prototype._updateStickyNodesHeight=function(){this._stickyNodesHeight=i.getComputedBox(this._stickyNodes[this._stickyNodes.length-1]).bottomWithMargin-i.getComputedBox(this._stickyNodes[0]).topWithMargin},e.prototype._updateLimits=function(){var t=this._props.containerEl,r=this._stickyNodes,n=i.getComputedBox(t),o=i.getComputedBox(r[0]);this._limits={top:o.topWithMargin-this._props.topSpacing,bottom:n.bottom-n.paddingBottom-this._props.topSpacing-this._stickyNodesHeight}},e.prototype._applyState=function(t){t===s.STATIC?(this._resetElements(this._stickyNodes),this._disableElements(this._dummyNodes)):(this._fixElementsSize(this._stickyNodes),t===s.FIXED?this._fixElements(this._stickyNodes):this._stuckElements(this._stickyNodes),this._enableElements(this._dummyNodes))},e.prototype.refresh=function(){var t=this._calcState(window.pageYOffset,this._limits);t!==this.state&&(this.state=t,this._stopListen(),this._applyState(t),this._startListen(),typeof this.onStateChanged=="function"&&this.onStateChanged(t))},e.prototype.hardRefresh=function(){this._stopListen();var t=this.state;this.state=s.STATIC,this._applyState(this.state),this._fixElementsSize(this._stickyNodes),this._updateStickyNodesHeight(),this._updateLimits(),this.state=this._calcState(window.pageYOffset,this._limits),this._applyState(this.state),this._startListen(),typeof this.onStateChanged=="function"&&t!==this.state&&this.onStateChanged(this.state)},e.prototype.enable=function(){this._props.enabled=!0,e.enabledInstances.push(this),this.hardRefresh()},e.prototype.disable=function(){this._props.enabled=!1,this.state=s.STATIC,this._applyState(this.state),e.enabledInstances.splice(e.enabledInstances.indexOf(this),1)},e.prototype._fixElements=function(t){for(var r=0,n=this._props.topSpacing,o=0;o<t.length;o++){var a=t[o],l=i.getComputedBox(a),u=this._shouldCollapseMargins?Math.max(0,r-l.marginTop):r;a.style.position="fixed",a.style.top=n+u+"px",a.style.bottom="",n+=l.height+l.marginTop+u,r=l.marginBottom}},e.prototype._stuckElements=function(t){for(var r=0,n=i.getComputedBox(this._props.containerEl).paddingBottom,o=t.length-1;o>=0;o--){var a=t[o],l=i.getComputedBox(a),u=this._shouldCollapseMargins?Math.max(0,r-l.marginBottom):r;a.style.position="absolute",a.style.top="auto",a.style.bottom=n+u+"px",n+=l.height+l.marginBottom+u,r=l.marginTop}},e.prototype._resetElements=function(t){t.forEach(function(r){r.style.position="",r.style.top="",r.style.bottom="",r.style.height="",r.style.width=""})},e.prototype._disableElements=function(t){t.forEach(function(r){r.style.display="none"})},e.prototype._enableElements=function(t){for(var r=0;r<t.length;r++)t[r].style.display=getComputedStyle(this._stickyNodes[r]).display},e.prototype._fixElementsSize=function(){for(var t=0;t<this._stickyNodes.length;t++){var r=this._stickyNodes[t],n=getComputedStyle(r);r.style.width=n.width,r.style.height=n.height}},e.refreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].refresh()},e.hardRefreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].hardRefresh()},e.enableAll=function(){e.enabledInstances=e.instances.slice(),this.hardRefreshAll()},e.disableAll=function(){for(var t=e.enabledInstances.slice(),r=0;r<t.length;r++)e.enabledInstances[r].disable();e.enabledInstances=[]},e.initializeAll=function(t,r,n){if(typeof t>"u")throw new Error("'target' parameter is undefined");var o=[];t instanceof Element?o=[t]:typeof t.length<"u"&&t.length>0&&t[0]instanceof Element?o=typeof t.get=="function"?t.get():t:typeof t=="string"&&(o=document.querySelectorAll(t)||[]);var a=[],l=[];if(o.forEach(function(u){a.indexOf(u.parentNode)===-1&&(a.push(u.parentNode),l.push(u))}),!n&&!l.length)throw new Error("There are no elements to initialize");return l.map(function(u){return new e(u,r)})},window.addEventListener("scroll",e.refreshAll),window.addEventListener("resize",e.hardRefreshAll);var i={parseNumber:function(t){return parseFloat(t)||0},findElement:function(t,r){return r||(r=document),typeof t=="string"?r.querySelector(t):t instanceof Element?t:void 0},getComputedBox:function(t){var r=t.getBoundingClientRect(),n=getComputedStyle(t);return{height:r.height,width:r.width,top:window.pageYOffset+r.top,bottom:window.pageYOffset+r.bottom,marginTop:i.parseNumber(n.marginTop),marginBottom:i.parseNumber(n.marginBottom),paddingTop:i.parseNumber(n.paddingTop),paddingBottom:i.parseNumber(n.paddingBottom),topWithMargin:window.pageYOffset+r.top-i.parseNumber(n.marginTop),bottomWithMargin:window.pageYOffset+r.bottom+i.parseNumber(n.marginBottom)}}};return e}();var Op=window.$||window.jQuery||window.Zepto;Op&&(Op.fn.sticksy=function(e){return window.Sticksy.initializeAll(this,e)})});var Dp=Bn((S0,Lp)=>{Lp.exports=Ip()});var Np=Bn((Rp,Qo)=>{(function(s,e){typeof define=="function"&&define.amd?define(e):typeof Qo=="object"&&Qo.exports?Qo.exports.Dragdealer=e():s.Dragdealer=e()})(Rp,function(){var s=function(p,_){this.options=this.applyDefaults(_||{}),this.bindMethods(),this.wrapper=this.getWrapperElement(p),this.wrapper&&(this.handle=this.getHandleElement(this.wrapper,this.options.handleClass),this.handle&&(this.init(),this.bindEventListeners()))};s.prototype={defaults:{disabled:!1,horizontal:!0,vertical:!1,slide:!0,steps:0,snap:!1,loose:!1,speed:.1,xPrecision:0,yPrecision:0,handleClass:"handle",css3:!0,activeClass:"active",tapping:!0},init:function(){this.options.css3&&f(this.handle),this.value={prev:[-1,-1],current:[this.options.x||0,this.options.y||0],target:[this.options.x||0,this.options.y||0]},this.offset={wrapper:[0,0],mouse:[0,0],prev:[-999999,-999999],current:[0,0],target:[0,0]},this.dragStartPosition={x:0,y:0},this.change=[0,0],this.stepRatios=this.calculateStepRatios(),this.activity=!1,this.dragging=!1,this.tapping=!1,this.reflow(),this.options.disabled&&this.disable()},applyDefaults:function(p){for(var _ in this.defaults)p.hasOwnProperty(_)||(p[_]=this.defaults[_]);return p},getWrapperElement:function(p){return typeof p=="string"?document.getElementById(p):p},getHandleElement:function(p,_){var T,E,k;if(p.getElementsByClassName){if(T=p.getElementsByClassName(_),T.length>0)return T[0]}else for(E=new RegExp("(^|\\s)"+_+"(\\s|$)"),T=p.getElementsByTagName("*"),k=0;k<T.length;k++)if(E.test(T[k].className))return T[k]},calculateStepRatios:function(){var p=[];if(this.options.steps>=1)for(var _=0;_<=this.options.steps-1;_++)this.options.steps>1?p[_]=_/(this.options.steps-1):p[_]=0;return p},setWrapperOffset:function(){this.offset.wrapper=a.get(this.wrapper)},calculateBounds:function(){var p={top:this.options.top||0,bottom:-(this.options.bottom||0)+this.wrapper.offsetHeight,left:this.options.left||0,right:-(this.options.right||0)+this.wrapper.offsetWidth};return p.availWidth=p.right-p.left-this.handle.offsetWidth,p.availHeight=p.bottom-p.top-this.handle.offsetHeight,p},calculateValuePrecision:function(){var p=this.options.xPrecision||Math.abs(this.bounds.availWidth),_=this.options.yPrecision||Math.abs(this.bounds.availHeight);return[p?1/p:0,_?1/_:0]},bindMethods:function(){typeof this.options.customRequestAnimationFrame=="function"?this.requestAnimationFrame=e(this.options.customRequestAnimationFrame,window):this.requestAnimationFrame=e(v,window),typeof this.options.customCancelAnimationFrame=="function"?this.cancelAnimationFrame=e(this.options.customCancelAnimationFrame,window):this.cancelAnimationFrame=e(g,window),this.animateWithRequestAnimationFrame=e(this.animateWithRequestAnimationFrame,this),this.animate=e(this.animate,this),this.onHandleMouseDown=e(this.onHandleMouseDown,this),this.onHandleTouchStart=e(this.onHandleTouchStart,this),this.onDocumentMouseMove=e(this.onDocumentMouseMove,this),this.onWrapperTouchMove=e(this.onWrapperTouchMove,this),this.onWrapperMouseDown=e(this.onWrapperMouseDown,this),this.onWrapperTouchStart=e(this.onWrapperTouchStart,this),this.onDocumentMouseUp=e(this.onDocumentMouseUp,this),this.onDocumentTouchEnd=e(this.onDocumentTouchEnd,this),this.onHandleClick=e(this.onHandleClick,this),this.onWindowResize=e(this.onWindowResize,this)},bindEventListeners:function(){i(this.handle,"mousedown",this.onHandleMouseDown),i(this.handle,"touchstart",this.onHandleTouchStart),i(document,"mousemove",this.onDocumentMouseMove),i(this.wrapper,"touchmove",this.onWrapperTouchMove),i(this.wrapper,"mousedown",this.onWrapperMouseDown),i(this.wrapper,"touchstart",this.onWrapperTouchStart),i(document,"mouseup",this.onDocumentMouseUp),i(document,"touchend",this.onDocumentTouchEnd),i(this.handle,"click",this.onHandleClick),i(window,"resize",this.onWindowResize),this.animate(!1,!0),this.interval=this.requestAnimationFrame(this.animateWithRequestAnimationFrame)},unbindEventListeners:function(){t(this.handle,"mousedown",this.onHandleMouseDown),t(this.handle,"touchstart",this.onHandleTouchStart),t(document,"mousemove",this.onDocumentMouseMove),t(this.wrapper,"touchmove",this.onWrapperTouchMove),t(this.wrapper,"mousedown",this.onWrapperMouseDown),t(this.wrapper,"touchstart",this.onWrapperTouchStart),t(document,"mouseup",this.onDocumentMouseUp),t(document,"touchend",this.onDocumentTouchEnd),t(this.handle,"click",this.onHandleClick),t(window,"resize",this.onWindowResize),this.cancelAnimationFrame(this.interval)},onHandleMouseDown:function(p){o.refresh(p),r(p),n(p),this.activity=!1,this.startDrag()},onHandleTouchStart:function(p){o.refresh(p),n(p),this.activity=!1,this.startDrag()},onDocumentMouseMove:function(p){p.clientX-this.dragStartPosition.x===0&&p.clientY-this.dragStartPosition.y===0||(o.refresh(p),this.dragging&&(this.activity=!0,r(p)))},onWrapperTouchMove:function(p){if(o.refresh(p),!this.activity&&this.draggingOnDisabledAxis()){this.dragging&&this.stopDrag();return}r(p),this.activity=!0},onWrapperMouseDown:function(p){o.refresh(p),r(p),this.startTap()},onWrapperTouchStart:function(p){o.refresh(p),r(p),this.startTap()},onDocumentMouseUp:function(p){this.stopDrag(),this.stopTap()},onDocumentTouchEnd:function(p){this.stopDrag(),this.stopTap()},onHandleClick:function(p){this.activity&&(r(p),n(p))},onWindowResize:function(p){this.reflow()},enable:function(){this.disabled=!1,this.handle.className=this.handle.className.replace(/\s?disabled/g,"")},disable:function(){this.disabled=!0,this.handle.className+=" disabled"},reflow:function(){this.setWrapperOffset(),this.bounds=this.calculateBounds(),this.valuePrecision=this.calculateValuePrecision(),this.updateOffsetFromValue()},getStep:function(){return[this.getStepNumber(this.value.target[0]),this.getStepNumber(this.value.target[1])]},getStepWidth:function(){return Math.abs(this.bounds.availWidth/this.options.steps)},getValue:function(){return this.value.target},setStep:function(p,_,T){this.setValue(this.options.steps&&p>1?(p-1)/(this.options.steps-1):0,this.options.steps&&_>1?(_-1)/(this.options.steps-1):0,T)},setValue:function(p,_,T){this.setTargetValue([p,_||0]),T&&(this.groupCopy(this.value.current,this.value.target),this.updateOffsetFromValue(),this.callAnimationCallback())},startTap:function(){if(!(this.disabled||!this.options.tapping))if(this.tapping=!0,this.setWrapperOffset(),this.options.snap&&this.options.steps){var p=(o.x-this.offset.wrapper[0])/this.bounds.availWidth,_=(o.y-this.offset.wrapper[1])/this.bounds.availHeight;this.setValue(this.getClosestStep(p),this.getClosestStep(_),!0)}else this.setTargetValueByOffset([o.x-this.offset.wrapper[0]-this.handle.offsetWidth/2,o.y-this.offset.wrapper[1]-this.handle.offsetHeight/2])},stopTap:function(){this.disabled||!this.tapping||(this.tapping=!1,this.setTargetValue(this.value.current))},startDrag:function(){this.disabled||(this.dragging=!0,this.setWrapperOffset(),this.dragStartPosition={x:o.x,y:o.y},this.offset.mouse=[o.x-a.get(this.handle)[0],o.y-a.get(this.handle)[1]],this.wrapper.className.match(this.options.activeClass)||(this.wrapper.className+=" "+this.options.activeClass),this.callDragStartCallback())},stopDrag:function(){if(!(this.disabled||!this.dragging)){this.dragging=!1;var p=this.bounds.availWidth===0?0:(o.x-this.dragStartPosition.x)/this.bounds.availWidth,_=this.bounds.availHeight===0?0:(o.y-this.dragStartPosition.y)/this.bounds.availHeight,T=[p,_],E=this.groupClone(this.value.current);if(this.options.slide){var k=this.change;E[0]+=k[0]*4,E[1]+=k[1]*4}this.setTargetValue(E),this.wrapper.className=this.wrapper.className.replace(" "+this.options.activeClass,""),this.callDragStopCallback(T)}},callAnimationCallback:function(){var p=this.value.current;this.options.snap&&this.options.steps>1&&(p=this.getClosestSteps(p)),this.groupCompare(p,this.value.prev)||(typeof this.options.animationCallback=="function"&&this.options.animationCallback.call(this,p[0],p[1]),this.groupCopy(this.value.prev,p))},callTargetCallback:function(){typeof this.options.callback=="function"&&this.options.callback.call(this,this.value.target[0],this.value.target[1])},callDragStartCallback:function(){typeof this.options.dragStartCallback=="function"&&this.options.dragStartCallback.call(this,this.value.target[0],this.value.target[1])},callDragStopCallback:function(p){typeof this.options.dragStopCallback=="function"&&this.options.dragStopCallback.call(this,this.value.target[0],this.value.target[1],p)},animateWithRequestAnimationFrame:function(p){p?(this.timeOffset=this.timeStamp?p-this.timeStamp:0,this.timeStamp=p):this.timeOffset=25,this.animate(),this.interval=this.requestAnimationFrame(this.animateWithRequestAnimationFrame)},animate:function(p,_){if(!(p&&!this.dragging)){if(this.dragging){var T=this.groupClone(this.value.target),E=[o.x-this.offset.wrapper[0]-this.offset.mouse[0],o.y-this.offset.wrapper[1]-this.offset.mouse[1]];this.setTargetValueByOffset(E,this.options.loose),this.change=[this.value.target[0]-T[0],this.value.target[1]-T[1]]}(this.dragging||_)&&this.groupCopy(this.value.current,this.value.target),(this.dragging||this.glide()||_)&&(this.updateOffsetFromValue(),this.callAnimationCallback())}},glide:function(){var p=[this.value.target[0]-this.value.current[0],this.value.target[1]-this.value.current[1]];return!p[0]&&!p[1]?!1:(Math.abs(p[0])>this.valuePrecision[0]||Math.abs(p[1])>this.valuePrecision[1]?(this.value.current[0]+=p[0]*Math.min(this.options.speed*this.timeOffset/25,1),this.value.current[1]+=p[1]*Math.min(this.options.speed*this.timeOffset/25,1)):this.groupCopy(this.value.current,this.value.target),!0)},updateOffsetFromValue:function(){this.options.snap?this.offset.current=this.getOffsetsByRatios(this.getClosestSteps(this.value.current)):this.offset.current=this.getOffsetsByRatios(this.value.current),this.groupCompare(this.offset.current,this.offset.prev)||(this.renderHandlePosition(),this.groupCopy(this.offset.prev,this.offset.current))},renderHandlePosition:function(){var p="";if(this.options.css3&&l.transform){this.options.horizontal&&(p+="translateX("+this.offset.current[0]+"px)"),this.options.vertical&&(p+=" translateY("+this.offset.current[1]+"px)"),this.handle.style[l.transform]=p;return}this.options.horizontal&&(this.handle.style.left=this.offset.current[0]+"px"),this.options.vertical&&(this.handle.style.top=this.offset.current[1]+"px")},setTargetValue:function(p,_){var T=_?this.getLooseValue(p):this.getProperValue(p);this.groupCopy(this.value.target,T),this.offset.target=this.getOffsetsByRatios(T),this.callTargetCallback()},setTargetValueByOffset:function(p,_){var T=this.getRatiosByOffsets(p),E=_?this.getLooseValue(T):this.getProperValue(T);this.groupCopy(this.value.target,E),this.offset.target=this.getOffsetsByRatios(E)},getLooseValue:function(p){var _=this.getProperValue(p);return[_[0]+(p[0]-_[0])/4,_[1]+(p[1]-_[1])/4]},getProperValue:function(p){var _=this.groupClone(p);return _[0]=Math.max(_[0],0),_[1]=Math.max(_[1],0),_[0]=Math.min(_[0],1),_[1]=Math.min(_[1],1),(!this.dragging&&!this.tapping||this.options.snap)&&this.options.steps>1&&(_=this.getClosestSteps(_)),_},getRatiosByOffsets:function(p){return[this.getRatioByOffset(p[0],this.bounds.availWidth,this.bounds.left),this.getRatioByOffset(p[1],this.bounds.availHeight,this.bounds.top)]},getRatioByOffset:function(p,_,T){return _?(p-T)/_:0},getOffsetsByRatios:function(p){return[this.getOffsetByRatio(p[0],this.bounds.availWidth,this.bounds.left),this.getOffsetByRatio(p[1],this.bounds.availHeight,this.bounds.top)]},getOffsetByRatio:function(p,_,T){return Math.round(p*_)+T},getStepNumber:function(p){return this.getClosestStep(p)*(this.options.steps-1)+1},getClosestSteps:function(p){return[this.getClosestStep(p[0]),this.getClosestStep(p[1])]},getClosestStep:function(p){for(var _=0,T=1,E=0;E<=this.options.steps-1;E++)Math.abs(this.stepRatios[E]-p)<T&&(T=Math.abs(this.stepRatios[E]-p),_=E);return this.stepRatios[_]},groupCompare:function(p,_){return p[0]==_[0]&&p[1]==_[1]},groupCopy:function(p,_){p[0]=_[0],p[1]=_[1]},groupClone:function(p){return[p[0],p[1]]},draggingOnDisabledAxis:function(){return!this.options.horizontal&&o.xDiff>o.yDiff||!this.options.vertical&&o.yDiff>o.xDiff}};var e=function(p,_){return function(){return p.apply(_,arguments)}},i=function(p,_,T){p.addEventListener?p.addEventListener(_,T,!1):p.attachEvent&&p.attachEvent("on"+_,T)},t=function(p,_,T){p.removeEventListener?p.removeEventListener(_,T,!1):p.detachEvent&&p.detachEvent("on"+_,T)},r=function(p){p||(p=window.event),p.preventDefault&&p.preventDefault(),p.returnValue=!1},n=function(p){p||(p=window.event),p.stopPropagation&&p.stopPropagation(),p.cancelBubble=!0},o={x:0,y:0,xDiff:0,yDiff:0,refresh:function(p){p||(p=window.event),p.type=="mousemove"?this.set(p):p.touches&&this.set(p.touches[0])},set:function(p){var _=this.x,T=this.y;p.clientX||p.clientY?(this.x=p.clientX,this.y=p.clientY):(p.pageX||p.pageY)&&(this.x=p.pageX-document.body.scrollLeft-document.documentElement.scrollLeft,this.y=p.pageY-document.body.scrollTop-document.documentElement.scrollTop),this.xDiff=Math.abs(this.x-_),this.yDiff=Math.abs(this.y-T)}},a={get:function(p){var _={left:0,top:0};return p.getBoundingClientRect!==void 0&&(_=p.getBoundingClientRect()),[_.left,_.top]}},l={transform:u("transform"),perspective:u("perspective"),backfaceVisibility:u("backfaceVisibility")};function u(p){var _="Webkit Moz ms O".split(" "),T=document.documentElement.style;if(T[p]!==void 0)return p;p=p.charAt(0).toUpperCase()+p.substr(1);for(var E=0;E<_.length;E++)if(T[_[E]+p]!==void 0)return _[E]+p}function f(p){l.backfaceVisibility&&l.perspective&&(p.style[l.perspective]="1000px",p.style[l.backfaceVisibility]="hidden")}for(var m=["webkit","moz"],v=window.requestAnimationFrame,g=window.cancelAnimationFrame,b=0;b<m.length&&!v;++b)v=window[m[b]+"RequestAnimationFrame"],g=window[m[b]+"CancelAnimationFrame"]||window[m[b]+"CancelRequestAnimationFrame"];return v||(v=function(p){return setTimeout(p,25)},g=clearTimeout),s})});function sr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ac(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gs={duration:.5,overwrite:!1,delay:0},Sa,Lt,Ke,Ei=1e8,qe=1/Ei,pa=Math.PI*2,gf=pa/4,yf=0,Pc=Math.sqrt,vf=Math.cos,bf=Math.sin,vt=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},jn=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Ta=function(){return typeof window<"u"},$n=function(e){return ot(e)||vt(e)},Oc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dt=Array.isArray,fa=/(?:-?\.?\d|\.)+/gi,Ea=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,na=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ka=/[+-]=-?[.\d]+/,Ic=/[^,'"\[\]\s]+/gi,wf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,Yi,ha,Ca,yi={},Yn={},Lc,Dc=function(e){return(Yn=Wr(e,yi))&&zt},Un=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Gs=function(e,i){return!i&&console.warn(e)},zc=function(e,i){return e&&(yi[e]=i)&&Yn&&(Yn[e]=i)||yi},js=function(){return 0},_f={suppressEvents:!0,isStart:!0,kill:!1},Fn={suppressEvents:!0,kill:!1},xf={suppressEvents:!0},Ma={},Sr=[],ma={},Rc,si={},oa={},xc=30,Vn=[],Aa="",Pa=function(e){var i=e[0],t,r;if(qi(i)||ot(i)||(e=[e]),!(t=(i._gsap||{}).harness)){for(r=Vn.length;r--&&!Vn[r].targetTest(i););t=Vn[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new La(e[r],t)))||e.splice(r,1);return e},Tr=function(e){return e._gsap||Pa(ki(e))[0]._gsap},Oa=function(e,i,t){return(t=e[i])&&ot(t)?e[i]():jn(t)&&e.getAttribute&&e.getAttribute(i)||t},Yt=function(e,i){return(e=e.split(",")).forEach(i)||e},at=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Xr=function(e,i){var t=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),t==="+"?e+r:t==="-"?e-r:t==="*"?e*r:e/r},Sf=function(e,i){for(var t=i.length,r=0;e.indexOf(i[r])<0&&++r<t;);return r<t},Wn=function(){var e=Sr.length,i=Sr.slice(0),t,r;for(ma={},Sr.length=0,t=0;t<e;t++)r=i[t],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Nc=function(e,i,t,r){Sr.length&&!Lt&&Wn(),e.render(i,t,r||Lt&&i<0&&(e._initted||e._startAt)),Sr.length&&!Lt&&Wn()},Bc=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(Ic).length<2?i:vt(e)?e.trim():e},$c=function(e){return e},Ci=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},Tf=function(e){return function(i,t){for(var r in t)r in i||r==="duration"&&e||r==="ease"||(i[r]=t[r])}},Wr=function(e,i){for(var t in i)e[t]=i[t];return e},Sc=function s(e,i){for(var t in i)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=qi(i[t])?s(e[t]||(e[t]={}),i[t]):i[t]);return e},qn=function(e,i){var t={},r;for(r in e)r in i||(t[r]=e[r]);return t},Ws=function(e){var i=e.parent||Ze,t=e.keyframes?Tf(Dt(e.keyframes)):Ci;if(oi(e.inherit))for(;i;)t(e,i.vars.defaults),i=i.parent||i._dp;return e},Ef=function(e,i){for(var t=e.length,r=t===i.length;r&&t--&&e[t]===i[t];);return t<0},Fc=function(e,i,t,r,n){t===void 0&&(t="_first"),r===void 0&&(r="_last");var o=e[r],a;if(n)for(a=i[n];o&&o[n]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[t],e[t]=i),i._next?i._next._prev=i:e[r]=i,i._prev=o,i.parent=i._dp=e,i},Kn=function(e,i,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var n=i._prev,o=i._next;n?n._next=o:e[t]===i&&(e[t]=o),o?o._prev=n:e[r]===i&&(e[r]=n),i._next=i._prev=i.parent=null},Er=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},kf=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},ga=function(e,i,t,r){return e._startAt&&(Lt?e._startAt.revert(Fn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},Cf=function s(e){return!e||e._ts&&s(e.parent)},Tc=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,i){var t=Math.floor(e/=i);return e&&t===e?t-1:t},Xn=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Qn=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},Zn=function(e,i){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=St(t._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),Qn(e),t._dirty||Vr(t,e)),e},Vc=function(e,i){var t;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(t=Xn(e.rawTime(),i),(!i._dur||Qs(0,i.totalDuration(),t)-i._tTime>qe)&&i.render(t,!0)),Vr(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-qe}},Wi=function(e,i,t,r){return i.parent&&Er(i),i._start=St((or(t)?t:t||e!==Ze?Ti(e,t,i):e._time)+i._delay),i._end=St(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Fc(e,i,"_first","_last",e._sort?"_start":0),ya(i)||(e._recent=i),r||Vc(e,i),e._ts<0&&Zn(e,e._tTime),e},Hc=function(e,i){return(yi.ScrollTrigger||Un("scrollTrigger",i))&&yi.ScrollTrigger.create(i,e)},Yc=function(e,i,t,r,n){if(Ra(e,i,n),!e._initted)return 1;if(!t&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rc!==ni.frame)return Sr.push(e),e._lazy=[n,r],1},Mf=function s(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||s(i))},ya=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},Af=function(e,i,t,r){var n=e.ratio,o=i<0||!i&&(!e._start&&Mf(e)&&!(!e._initted&&ya(e))||(e._ts<0||e._dp._ts<0)&&!ya(e))?0:1,a=e._rDelay,l=0,u,f,m;if(a&&e._repeat&&(l=Qs(0,e._tDur,i),f=ys(l,a),e._yoyo&&f&1&&(o=1-o),f!==ys(e._tTime,a)&&(n=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==n||Lt||r||e._zTime===qe||!i&&e._zTime){if(!e._initted&&Yc(e,i,r,t,l))return;for(m=e._zTime,e._zTime=i||(t?qe:0),t||(t=i&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;i<0&&ga(e,i,t,!0),e._onUpdate&&!t&&gi(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&gi(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&Er(e,1),!t&&!Lt&&(gi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},Pf=function(e,i,t){var r;if(t>i)for(r=e._first;r&&r._start<=t;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=t;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},vs=function(e,i,t,r){var n=e._repeat,o=St(i)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=n?n<0?1e10:St(o*(n+1)+e._rDelay*n):o,a>0&&!r&&Zn(e,e._tTime=e._tDur*a),e.parent&&Qn(e),t||Vr(e.parent,e),e},Ec=function(e){return e instanceof Mt?Vr(e):vs(e,e._dur)},Of={_start:0,endTime:js,totalDuration:js},Ti=function s(e,i,t){var r=e.labels,n=e._recent||Of,o=e.duration()>=Ei?n.endTime(!1):e._dur,a,l,u;return vt(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),u=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(a<0?n:t).totalDuration()/100:1)):a<0?(i in r||(r[i]=o),r[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),u&&t&&(l=l/100*(Dt(t)?t[0]:t).totalDuration()),a>1?s(e,i.substr(0,a-1),t)+l:o+l)):i==null?o:+i},qs=function(e,i,t){var r=or(i[1]),n=(r?2:1)+(e<2?0:1),o=i[n],a,l;if(r&&(o.duration=i[1]),o.parent=t,e){for(a=o,l=t;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;o.immediateRender=oi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=i[n-1]}return new dt(i[0],o,i[n+1])},kr=function(e,i){return e||e===0?i(e):i},Qs=function(e,i,t){return t<e?e:t>i?i:t},At=function(e,i){return!vt(e)||!(i=wf.exec(e))?"":i[1]},If=function(e,i,t){return kr(t,function(r){return Qs(e,i,r)})},va=[].slice,Wc=function(e,i){return e&&qi(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Yi},Lf=function(e,i,t){return t===void 0&&(t=[]),e.forEach(function(r){var n;return vt(r)&&!i||Wc(r,1)?(n=t).push.apply(n,ki(r)):t.push(r)})||t},ki=function(e,i,t){return Ke&&!i&&Ke.selector?Ke.selector(e):vt(e)&&!t&&(ha||!bs())?va.call((i||Ca).querySelectorAll(e),0):Dt(e)?Lf(e,t):Wc(e)?va.call(e,0):e?[e]:[]},ba=function(e){return e=ki(e)[0]||Gs("Invalid scope")||{},function(i){var t=e.current||e.nativeElement||e;return ki(i,t.querySelectorAll?t:t===e?Gs("Invalid scope")||Ca.createElement("div"):e)}},qc=function(e){return e.sort(function(){return .5-Math.random()})},Xc=function(e){if(ot(e))return e;var i=qi(e)?e:{each:e},t=Hr(i.ease),r=i.from||0,n=parseFloat(i.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=i.axis,f=r,m=r;return vt(r)?f=m={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(f=r[0],m=r[1]),function(v,g,b){var p=(b||i).length,_=o[p],T,E,k,C,M,I,z,N,w;if(!_){if(w=i.grid==="auto"?0:(i.grid||[1,Ei])[1],!w){for(z=-Ei;z<(z=b[w++].getBoundingClientRect().left)&&w<p;);w<p&&w--}for(_=o[p]=[],T=l?Math.min(w,p)*f-.5:r%w,E=w===Ei?0:l?p*m/w-.5:r/w|0,z=0,N=Ei,I=0;I<p;I++)k=I%w-T,C=E-(I/w|0),_[I]=M=u?Math.abs(u==="y"?C:k):Pc(k*k+C*C),M>z&&(z=M),M<N&&(N=M);r==="random"&&qc(_),_.max=z-N,_.min=N,_.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(w>p?p-1:u?u==="y"?p/w:w:Math.max(w,p/w))||0)*(r==="edges"?-1:1),_.b=p<0?n-p:n,_.u=At(i.amount||i.each)||0,t=t&&p<0?tu(t):t}return p=(_[v]-_.min)/_.max||0,St(_.b+(t?t(p):p)*_.v)+_.u}},wa=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var r=St(Math.round(parseFloat(t)/e)*e*i);return(r-r%1)/i+(or(t)?0:At(t))}},Gc=function(e,i){var t=Dt(e),r,n;return!t&&qi(e)&&(r=t=e.radius||Ei,e.values?(e=ki(e.values),(n=!or(e[0]))&&(r*=r)):e=wa(e.increment)),kr(i,t?ot(e)?function(o){return n=e(o),Math.abs(n-o)<=r?n:o}:function(o){for(var a=parseFloat(n?o.x:o),l=parseFloat(n?o.y:0),u=Ei,f=0,m=e.length,v,g;m--;)n?(v=e[m].x-a,g=e[m].y-l,v=v*v+g*g):v=Math.abs(e[m]-a),v<u&&(u=v,f=m);return f=!r||u<=r?e[f]:o,n||f===o||or(o)?f:f+At(o)}:wa(e))},jc=function(e,i,t,r){return kr(Dt(e)?!i:t===!0?!!(t=0):!r,function(){return Dt(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(i-e+t*.99))/t)*t*r)/r})},Df=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(r){return i.reduce(function(n,o){return o(n)},r)}},zf=function(e,i){return function(t){return e(parseFloat(t))+(i||At(t))}},Rf=function(e,i,t){return Kc(e,i,0,1,t)},Uc=function(e,i,t){return kr(t,function(r){return e[~~i(r)]})},Nf=function s(e,i,t){var r=i-e;return Dt(e)?Uc(e,s(0,e.length),i):kr(t,function(n){return(r+(n-e)%r)%r+e})},Bf=function s(e,i,t){var r=i-e,n=r*2;return Dt(e)?Uc(e,s(0,e.length-1),i):kr(t,function(o){return o=(n+(o-e)%n)%n||0,e+(o>r?n-o:o)})},ws=function(e){for(var i=0,t="",r,n,o,a;~(r=e.indexOf("random(",i));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",n=e.substr(r+7,o-r-7).match(a?Ic:fa),t+=e.substr(i,r-i)+jc(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),i=o+1;return t+e.substr(i,e.length-i)},Kc=function(e,i,t,r,n){var o=i-e,a=r-t;return kr(n,function(l){return t+((l-e)/o*a||0)})},$f=function s(e,i,t,r){var n=isNaN(e+i)?0:function(g){return(1-g)*e+g*i};if(!n){var o=vt(e),a={},l,u,f,m,v;if(t===!0&&(r=1)&&(t=null),o)e={p:e},i={p:i};else if(Dt(e)&&!Dt(i)){for(f=[],m=e.length,v=m-2,u=1;u<m;u++)f.push(s(e[u-1],e[u]));m--,n=function(b){b*=m;var p=Math.min(v,~~b);return f[p](b-p)},t=i}else r||(e=Wr(Dt(e)?[]:{},e));if(!f){for(l in i)Da.call(a,e,l,"get",i[l]);n=function(b){return $a(b,a)||(o?e.p:e)}}}return kr(t,n)},kc=function(e,i,t){var r=e.labels,n=Ei,o,a,l;for(o in r)a=r[o]-i,a<0==!!t&&a&&n>(a=Math.abs(a))&&(l=o,n=a);return l},gi=function(e,i,t){var r=e.vars,n=r[i],o=Ke,a=e._ctx,l,u,f;if(n)return l=r[i+"Params"],u=r.callbackScope||e,t&&Sr.length&&Wn(),a&&(Ke=a),f=l?n.apply(u,l):n.call(u),Ke=o,f},Hs=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&gi(e,"onInterrupt"),e},ms,Qc=[],Zc=function(e){if(e)if(e=!e.name&&e.default||e,Ta()||e.headless){var i=e.name,t=ot(e),r=i&&!t&&e.init?function(){this._props=[]}:e,n={init:js,render:$a,add:Da,kill:th,modifier:eh,rawVars:0},o={targetTest:0,get:0,getSetter:Jn,aliases:{},register:0};if(bs(),e!==r){if(si[i])return;Ci(r,Ci(qn(e,n),o)),Wr(r.prototype,Wr(n,qn(e,o))),si[r.prop=i]=r,e.targetTest&&(Vn.push(r),Ma[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}zc(i,r),e.register&&e.register(zt,r,Wt)}else Qc.push(e)},He=255,Ys={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},aa=function(e,i,t){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(t-i)*e*6:e<.5?t:e*3<2?i+(t-i)*(2/3-e)*6:i)*He+.5|0},Jc=function(e,i,t){var r=e?or(e)?[e>>16,e>>8&He,e&He]:0:Ys.black,n,o,a,l,u,f,m,v,g,b;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ys[e])r=Ys[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+n+n+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&He,r&He,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&He,e&He]}else if(e.substr(0,3)==="hsl"){if(r=b=e.match(fa),!i)l=+r[0]%360/360,u=+r[1]/100,f=+r[2]/100,o=f<=.5?f*(u+1):f+u-f*u,n=f*2-o,r.length>3&&(r[3]*=1),r[0]=aa(l+1/3,n,o),r[1]=aa(l,n,o),r[2]=aa(l-1/3,n,o);else if(~e.indexOf("="))return r=e.match(Ea),t&&r.length<4&&(r[3]=1),r}else r=e.match(fa)||Ys.transparent;r=r.map(Number)}return i&&!b&&(n=r[0]/He,o=r[1]/He,a=r[2]/He,m=Math.max(n,o,a),v=Math.min(n,o,a),f=(m+v)/2,m===v?l=u=0:(g=m-v,u=f>.5?g/(2-m-v):g/(m+v),l=m===n?(o-a)/g+(o<a?6:0):m===o?(a-n)/g+2:(n-o)/g+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(f*100+.5)),t&&r.length<4&&(r[3]=1),r},eu=function(e){var i=[],t=[],r=-1;return e.split(nr).forEach(function(n){var o=n.match(qr)||[];i.push.apply(i,o),t.push(r+=o.length+1)}),i.c=t,i},Cc=function(e,i,t){var r="",n=(e+r).match(nr),o=i?"hsla(":"rgba(",a=0,l,u,f,m;if(!n)return e;if(n=n.map(function(v){return(v=Jc(v,i,1))&&o+(i?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),t&&(f=eu(e),l=t.c,l.join(r)!==f.c.join(r)))for(u=e.replace(nr,"1").split(qr),m=u.length-1;a<m;a++)r+=u[a]+(~l.indexOf(a)?n.shift()||o+"0,0,0,0)":(f.length?f:n.length?n:t).shift());if(!u)for(u=e.split(nr),m=u.length-1;a<m;a++)r+=u[a]+n[a];return r+u[m]},nr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ys)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Ff=/hsl[a]?\(/,Ia=function(e){var i=e.join(" "),t;if(nr.lastIndex=0,nr.test(i))return t=Ff.test(i),e[1]=Cc(e[1],t),e[0]=Cc(e[0],t,eu(e[1])),!0},Us,ni=function(){var s=Date.now,e=500,i=33,t=s(),r=t,n=1e3/240,o=n,a=[],l,u,f,m,v,g,b=function p(_){var T=s()-r,E=_===!0,k,C,M,I;if((T>e||T<0)&&(t+=T-i),r+=T,M=r-t,k=M-o,(k>0||E)&&(I=++m.frame,v=M-m.time*1e3,m.time=M=M/1e3,o+=k+(k>=n?4:n-k),C=1),E||(l=u(p)),C)for(g=0;g<a.length;g++)a[g](M,v,I,_)};return m={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(_){return v/(1e3/(_||60))},wake:function(){Lc&&(!ha&&Ta()&&(Yi=ha=window,Ca=Yi.document||{},yi.gsap=zt,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(zt.version),Dc(Yn||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),Qc.forEach(Zc)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),u=f||function(_){return setTimeout(_,o-m.time*1e3+1|0)},Us=1,b(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(l),Us=0,u=js},lagSmoothing:function(_,T){e=_||1/0,i=Math.min(T||33,e)},fps:function(_){n=1e3/(_||240),o=m.time*1e3+n},add:function(_,T,E){var k=T?function(C,M,I,z){_(C,M,I,z),m.remove(k)}:_;return m.remove(_),a[E?"unshift":"push"](k),bs(),k},remove:function(_,T){~(T=a.indexOf(_))&&a.splice(T,1)&&g>=T&&g--},_listeners:a},m}(),bs=function(){return!Us&&ni.wake()},Ae={},Vf=/^[\d.\-M][\d.\-,\s]/,Hf=/["']/g,Yf=function(e){for(var i={},t=e.substr(1,e.length-3).split(":"),r=t[0],n=1,o=t.length,a,l,u;n<o;n++)l=t[n],a=n!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),i[r]=isNaN(u)?u.replace(Hf,"").trim():+u,r=l.substr(a+1).trim();return i},Wf=function(e){var i=e.indexOf("(")+1,t=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<t?e.indexOf(")",t+1):t)},qf=function(e){var i=(e+"").split("("),t=Ae[i[0]];return t&&i.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Yf(i[1])]:Wf(e).split(",").map(Bc)):Ae._CE&&Vf.test(e)?Ae._CE("",e):t},tu=function(e){return function(i){return 1-e(1-i)}},iu=function s(e,i){for(var t=e._first,r;t;)t instanceof Mt?s(t,i):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==i&&(t.timeline?s(t.timeline,i):(r=t._ease,t._ease=t._yEase,t._yEase=r,t._yoyo=i)),t=t._next},Hr=function(e,i){return e&&(ot(e)?e:Ae[e]||qf(e))||i},Gr=function(e,i,t,r){t===void 0&&(t=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var n={easeIn:i,easeOut:t,easeInOut:r},o;return Yt(e,function(a){Ae[a]=yi[a]=n,Ae[o=a.toLowerCase()]=t;for(var l in n)Ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ae[a+"."+l]=n[l]}),n},ru=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},la=function s(e,i,t){var r=i>=1?i:1,n=(t||(e?.3:.45))/(i<1?i:1),o=n/pa*(Math.asin(1/r)||0),a=function(f){return f===1?1:r*Math.pow(2,-10*f)*bf((f-o)*n)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:ru(a);return n=pa/n,l.config=function(u,f){return s(e,u,f)},l},ca=function s(e,i){i===void 0&&(i=1.70158);var t=function(o){return o?--o*o*((i+1)*o+i)+1:0},r=e==="out"?t:e==="in"?function(n){return 1-t(1-n)}:ru(t);return r.config=function(n){return s(e,n)},r};Yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var i=e<5?e+1:e;Gr(s+",Power"+(i-1),e?function(t){return Math.pow(t,i)}:function(t){return t},function(t){return 1-Math.pow(1-t,i)},function(t){return t<.5?Math.pow(t*2,i)/2:1-Math.pow((1-t)*2,i)/2})});Ae.Linear.easeNone=Ae.none=Ae.Linear.easeIn;Gr("Elastic",la("in"),la("out"),la());(function(s,e){var i=1/e,t=2*i,r=2.5*i,n=function(a){return a<i?s*a*a:a<t?s*Math.pow(a-1.5/e,2)+.75:a<r?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Gr("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);Gr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Gr("Circ",function(s){return-(Pc(1-s*s)-1)});Gr("Sine",function(s){return s===1?1:-vf(s*gf)+1});Gr("Back",ca("in"),ca("out"),ca());Ae.SteppedEase=Ae.steps=yi.SteppedEase={config:function(e,i){e===void 0&&(e=1);var t=1/e,r=e+(i?0:1),n=i?1:0,o=1-qe;return function(a){return((r*Qs(0,o,a)|0)+n)*t}}};gs.ease=Ae["quad.out"];Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Aa+=s+","+s+"Params,"});var La=function(e,i){this.id=yf++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Oa,this.set=i?i.getSetter:Jn},Ks=function(){function s(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,vs(this,+i.duration,1,1),this.data=i.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),Us||ni.wake()}var e=s.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(bs(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Zn(this,t),!n._dp||n.parent||Vc(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qe||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Nc(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Tc(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Tc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,r):this._repeat?ys(this._tTime,n)+1:1},e.timeScale=function(t,r){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Xn(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-qe?0:this._rts,this.totalTime(Qs(-Math.abs(this._delay),this._tDur,n),r!==!1),Qn(this),kf(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wi(r,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(oi(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xn(r.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=xf);var r=Lt;return Lt=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(t){for(var r=this,n=arguments.length?t:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ec(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,Ec(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(Ti(this,t),oi(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,oi(r))},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var t=this.parent||this._dp,r=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=r&&n<this.endTime(!0)-qe)},e.eventCallback=function(t,r,n){var o=this.vars;return arguments.length>1?(r?(o[t]=r,n&&(o[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=r)):delete o[t],this):o[t]},e.then=function(t){var r=this;return new Promise(function(n){var o=ot(t)?t:$c,a=function(){var u=r.then;r.then=null,ot(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),n(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Hs(this)},s}();Ci(Ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Mt=function(s){Ac(e,s);function e(t,r){var n;return t===void 0&&(t={}),n=s.call(this,t)||this,n.labels={},n.smoothChildTiming=!!t.smoothChildTiming,n.autoRemoveChildren=!!t.autoRemoveChildren,n._sort=oi(t.sortChildren),Ze&&Wi(t.parent||Ze,sr(n),r),t.reversed&&n.reverse(),t.paused&&n.paused(!0),t.scrollTrigger&&Hc(sr(n),t.scrollTrigger),n}var i=e.prototype;return i.to=function(r,n,o){return qs(0,arguments,this),this},i.from=function(r,n,o){return qs(1,arguments,this),this},i.fromTo=function(r,n,o,a){return qs(2,arguments,this),this},i.set=function(r,n,o){return n.duration=0,n.parent=this,Ws(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new dt(r,n,Ti(this,o),1),this},i.call=function(r,n,o){return Wi(this,dt.delayedCall(0,r,n),o)},i.staggerTo=function(r,n,o,a,l,u,f){return o.duration=n,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=f,o.parent=this,new dt(r,o,Ti(this,l)),this},i.staggerFrom=function(r,n,o,a,l,u,f){return o.runBackwards=1,Ws(o).immediateRender=oi(o.immediateRender),this.staggerTo(r,n,o,a,l,u,f)},i.staggerFromTo=function(r,n,o,a,l,u,f,m){return a.startAt=o,Ws(a).immediateRender=oi(a.immediateRender),this.staggerTo(r,n,a,l,u,f,m)},i.render=function(r,n,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=r<=0?0:St(r),m=this._zTime<0!=r<0&&(this._initted||!u),v,g,b,p,_,T,E,k,C,M,I,z;if(this!==Ze&&f>l&&r>=0&&(f=l),f!==this._tTime||o||m){if(a!==this._time&&u&&(f+=this._time-a,r+=this._time-a),v=f,C=this._start,k=this._ts,T=!k,m&&(u||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,n,o);if(v=St(f%_),f===l?(p=this._repeat,v=u):(p=~~(f/_),p&&p===f/_&&(v=u,p--),v>u&&(v=u)),M=ys(this._tTime,_),!a&&this._tTime&&M!==p&&this._tTime-M*_-this._dur<=0&&(M=p),I&&p&1&&(v=u-v,z=1),p!==M&&!this._lock){var N=I&&M&1,w=N===(I&&p&1);if(p<M&&(N=!N),a=N?0:f%u?u:f,this._lock=1,this.render(a||(z?0:St(p*_)),n,!u)._lock=0,this._tTime=f,!n&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),a&&a!==this._time||T!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=N?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!T)return this;iu(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Pf(this,St(a),St(v)),E&&(f-=v-(v=E._start))),this._tTime=f,this._time=v,this._act=!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&v&&!n&&!p&&(gi(this,"onStart"),this._tTime!==f))return this;if(v>=a&&r>=0)for(g=this._first;g;){if(b=g._next,(g._act||v>=g._start)&&g._ts&&E!==g){if(g.parent!==this)return this.render(r,n,o);if(g.render(g._ts>0?(v-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(v-g._start)*g._ts,n,o),v!==this._time||!this._ts&&!T){E=0,b&&(f+=this._zTime=-qe);break}}g=b}else{g=this._last;for(var P=r<0?r:v;g;){if(b=g._prev,(g._act||P<=g._end)&&g._ts&&E!==g){if(g.parent!==this)return this.render(r,n,o);if(g.render(g._ts>0?(P-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(P-g._start)*g._ts,n,o||Lt&&(g._initted||g._startAt)),v!==this._time||!this._ts&&!T){E=0,b&&(f+=this._zTime=P?-qe:qe);break}}g=b}}if(E&&!n&&(this.pause(),E.render(v>=a?0:-qe)._zTime=v>=a?1:-1,this._ts))return this._start=C,Qn(this),this.render(r,n,o);this._onUpdate&&!n&&gi(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(C===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(f===l&&this._ts>0||!f&&this._ts<0)&&Er(this,1),!n&&!(r<0&&!a)&&(f||a||!l)&&(gi(this,f===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var o=this;if(or(n)||(n=Ti(this,n,r)),!(r instanceof Ks)){if(Dt(r))return r.forEach(function(a){return o.add(a,n)}),this;if(vt(r))return this.addLabel(r,n);if(ot(r))r=dt.delayedCall(0,r);else return this}return this!==r?Wi(this,r,n):this},i.getChildren=function(r,n,o,a){r===void 0&&(r=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ei);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof dt?n&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,n,o)))),u=u._next;return l},i.getById=function(r){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===r)return n[o]},i.remove=function(r){return vt(r)?this.removeLabel(r):ot(r)?this.killTweensOf(r):(Kn(this,r),r===this._recent&&(this._recent=this._last),Vr(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=Ti(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,o){var a=dt.delayedCall(0,n||js,o);return a.data="isPause",this._hasPause=1,Wi(this,a,Ti(this,r))},i.removePause=function(r){var n=this._first;for(r=Ti(this,r);n;)n._start===r&&n.data==="isPause"&&Er(n),n=n._next},i.killTweensOf=function(r,n,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(r,n);return this},i.getTweensOf=function(r,n){for(var o=[],a=ki(r),l=this._first,u=or(n),f;l;)l instanceof dt?Sf(l._targets,a)&&(u?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&o.push(l):(f=l.getTweensOf(a,n)).length&&o.push.apply(o,f),l=l._next;return o},i.tweenTo=function(r,n){n=n||{};var o=this,a=Ti(o,r),l=n,u=l.startAt,f=l.onStart,m=l.onStartParams,v=l.immediateRender,g,b=dt.to(o,Ci({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||qe,onStart:function(){if(o.pause(),!g){var _=n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());b._dur!==_&&vs(b,_,0,1).render(b._time,!0,!0),g=1}f&&f.apply(b,m||[])}},n));return v?b.render(0):b},i.tweenFromTo=function(r,n,o){return this.tweenTo(n,Ci({startAt:{time:Ti(this,r)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),kc(this,Ti(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),kc(this,Ti(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qe)},i.shiftChildren=function(r,n,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(n)for(u in l)l[u]>=o&&(l[u]+=r);return Vr(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vr(this)},i.totalDuration=function(r){var n=0,o=this,a=o._last,l=Ei,u,f,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(m=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(n-=f,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>n&&a._ts&&(n=a._end),a=u;vs(o,o===Ze&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ze._ts&&(Nc(Ze,Xn(r,Ze)),Rc=ni.frame),ni.frame>=xc){xc+=ai.autoSleep||120;var n=Ze._first;if((!n||!n._ts)&&ai.autoSleep&&ni._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ni.sleep()}}},e}(Ks);Ci(Mt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xf=function(e,i,t,r,n,o,a){var l=new Wt(this._pt,e,i,0,1,Ba,null,n),u=0,f=0,m,v,g,b,p,_,T,E;for(l.b=t,l.e=r,t+="",r+="",(T=~r.indexOf("random("))&&(r=ws(r)),o&&(E=[t,r],o(E,e,i),t=E[0],r=E[1]),v=t.match(na)||[];m=na.exec(r);)b=m[0],p=r.substring(u,m.index),g?g=(g+1)%5:p.substr(-5)==="rgba("&&(g=1),b!==v[f++]&&(_=parseFloat(v[f-1])||0,l._pt={_next:l._pt,p:p||f===1?p:",",s:_,c:b.charAt(1)==="="?Xr(_,b)-_:parseFloat(b)-_,m:g&&g<4?Math.round:0},u=na.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ka.test(r)||T)&&(l.e=0),this._pt=l,l},Da=function(e,i,t,r,n,o,a,l,u,f){ot(r)&&(r=r(n||0,e,o));var m=e[i],v=t!=="get"?t:ot(m)?u?e[i.indexOf("set")||!ot(e["get"+i.substr(3)])?i:"get"+i.substr(3)](u):e[i]():m,g=ot(m)?u?Qf:ou:Na,b;if(vt(r)&&(~r.indexOf("random(")&&(r=ws(r)),r.charAt(1)==="="&&(b=Xr(v,r)+(At(v)||0),(b||b===0)&&(r=b))),!f||v!==r||_a)return!isNaN(v*r)&&r!==""?(b=new Wt(this._pt,e,i,+v||0,r-(v||0),typeof m=="boolean"?Jf:au,0,g),u&&(b.fp=u),a&&b.modifier(a,this,e),this._pt=b):(!m&&!(i in e)&&Un(i,r),Xf.call(this,e,i,v,r,g,l||ai.stringFilter,u))},Gf=function(e,i,t,r,n){if(ot(e)&&(e=Xs(e,n,i,t,r)),!qi(e)||e.style&&e.nodeType||Dt(e)||Oc(e))return vt(e)?Xs(e,n,i,t,r):e;var o={},a;for(a in e)o[a]=Xs(e[a],n,i,t,r);return o},za=function(e,i,t,r,n,o){var a,l,u,f;if(si[e]&&(a=new si[e]).init(n,a.rawVars?i[e]:Gf(i[e],r,n,o,t),t,r,o)!==!1&&(t._pt=l=new Wt(t._pt,n,e,0,1,a.render,a,0,a.priority),t!==ms))for(u=t._ptLookup[t._targets.indexOf(n)],f=a._props.length;f--;)u[a._props[f]]=l;return a},xr,_a,Ra=function s(e,i,t){var r=e.vars,n=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,f=r.runBackwards,m=r.yoyoEase,v=r.keyframes,g=r.autoRevert,b=e._dur,p=e._startAt,_=e._targets,T=e.parent,E=T&&T.data==="nested"?T.vars.targets:_,k=e._overwrite==="auto"&&!Sa,C=e.timeline,M,I,z,N,w,P,F,R,W,Y,q,ee,V;if(C&&(!v||!n)&&(n="none"),e._ease=Hr(n,gs.ease),e._yEase=m?tu(Hr(m===!0?n:m,gs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!r.runBackwards,!C||v&&!r.stagger){if(R=_[0]?Tr(_[0]).harness:0,ee=R&&r[R.prop],M=qn(r,Ma),p&&(p._zTime<0&&p.progress(1),i<0&&f&&a&&!g?p.render(-1,!0):p.revert(f&&b?Fn:_f),p._lazy=0),o){if(Er(e._startAt=dt.set(_,Ci({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:!p&&oi(l),startAt:null,delay:0,onUpdate:u&&function(){return gi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Lt||!a&&!g)&&e._startAt.revert(Fn),a&&b&&i<=0&&t<=0){i&&(e._zTime=i);return}}else if(f&&b&&!p){if(i&&(a=!1),z=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!p&&oi(l),immediateRender:a,stagger:0,parent:T},M),ee&&(z[R.prop]=ee),Er(e._startAt=dt.set(_,z)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Lt?e._startAt.revert(Fn):e._startAt.render(-1,!0)),e._zTime=i,!a)s(e._startAt,qe,qe);else if(!i)return}for(e._pt=e._ptCache=0,l=b&&oi(l)||l&&!b,I=0;I<_.length;I++){if(w=_[I],F=w._gsap||Pa(_)[I]._gsap,e._ptLookup[I]=Y={},ma[F.id]&&Sr.length&&Wn(),q=E===_?I:E.indexOf(w),R&&(W=new R).init(w,ee||M,e,q,E)!==!1&&(e._pt=N=new Wt(e._pt,w,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(me){Y[me]=N}),W.priority&&(P=1)),!R||ee)for(z in M)si[z]&&(W=za(z,M,e,q,w,E))?W.priority&&(P=1):Y[z]=N=Da.call(e,w,z,"get",M[z],q,E,0,r.stringFilter);e._op&&e._op[I]&&e.kill(w,e._op[I]),k&&e._pt&&(xr=e,Ze.killTweensOf(w,Y,e.globalTime(i)),V=!e.parent,xr=0),e._pt&&l&&(ma[F.id]=1)}P&&Fa(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!V,v&&i<=0&&C.render(Ei,!0,!0)},jf=function(e,i,t,r,n,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[i],f,m,v,g;if(!u)for(u=e._ptCache[i]=[],v=e._ptLookup,g=e._targets.length;g--;){if(f=v[g][i],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==i&&f.fp!==i;)f=f._next;if(!f)return _a=1,e.vars[i]="+=0",Ra(e,a),_a=0,l?Gs(i+" not eligible for reset"):1;u.push(f)}for(g=u.length;g--;)m=u[g],f=m._pt||m,f.s=(r||r===0)&&!n?r:f.s+(r||0)+o*f.c,f.c=t-f.s,m.e&&(m.e=at(t)+At(m.e)),m.b&&(m.b=f.s+At(m.b))},Uf=function(e,i){var t=e[0]?Tr(e[0]).harness:0,r=t&&t.aliases,n,o,a,l;if(!r)return i;n=Wr({},i);for(o in r)if(o in n)for(l=r[o].split(","),a=l.length;a--;)n[l[a]]=n[o];return n},Kf=function(e,i,t,r){var n=i.ease||r||"power1.inOut",o,a;if(Dt(i))a=t[e]||(t[e]=[]),i.forEach(function(l,u){return a.push({t:u/(i.length-1)*100,v:l,e:n})});else for(o in i)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:i[o],e:n})},Xs=function(e,i,t,r,n){return ot(e)?e.call(i,t,r,n):vt(e)&&~e.indexOf("random(")?ws(e):e},su=Aa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nu={};Yt(su+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return nu[s]=1});var dt=function(s){Ac(e,s);function e(t,r,n,o){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=s.call(this,o?r:Ws(r))||this;var l=a.vars,u=l.duration,f=l.delay,m=l.immediateRender,v=l.stagger,g=l.overwrite,b=l.keyframes,p=l.defaults,_=l.scrollTrigger,T=l.yoyoEase,E=r.parent||Ze,k=(Dt(t)||Oc(t)?or(t[0]):"length"in r)?[t]:ki(t),C,M,I,z,N,w,P,F;if(a._targets=k.length?Pa(k):Gs("GSAP target "+t+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=g,b||v||$n(u)||$n(f)){if(r=a.vars,C=a.timeline=new Mt({data:"nested",defaults:p||{},targets:E&&E.data==="nested"?E.vars.targets:k}),C.kill(),C.parent=C._dp=sr(a),C._start=0,v||$n(u)||$n(f)){if(z=k.length,P=v&&Xc(v),qi(v))for(N in v)~su.indexOf(N)&&(F||(F={}),F[N]=v[N]);for(M=0;M<z;M++)I=qn(r,nu),I.stagger=0,T&&(I.yoyoEase=T),F&&Wr(I,F),w=k[M],I.duration=+Xs(u,sr(a),M,w,k),I.delay=(+Xs(f,sr(a),M,w,k)||0)-a._delay,!v&&z===1&&I.delay&&(a._delay=f=I.delay,a._start+=f,I.delay=0),C.to(w,I,P?P(M,w,k):0),C._ease=Ae.none;C.duration()?u=f=0:a.timeline=0}else if(b){Ws(Ci(C.vars.defaults,{ease:"none"})),C._ease=Hr(b.ease||r.ease||"none");var R=0,W,Y,q;if(Dt(b))b.forEach(function(ee){return C.to(k,ee,">")}),C.duration();else{I={};for(N in b)N==="ease"||N==="easeEach"||Kf(N,b[N],I,b.easeEach);for(N in I)for(W=I[N].sort(function(ee,V){return ee.t-V.t}),R=0,M=0;M<W.length;M++)Y=W[M],q={ease:Y.e,duration:(Y.t-(M?W[M-1].t:0))/100*u},q[N]=Y.v,C.to(k,q,R),R+=q.duration;C.duration()<u&&C.to({},{duration:u-C.duration()})}}u||a.duration(u=C.duration())}else a.timeline=0;return g===!0&&!Sa&&(xr=sr(a),Ze.killTweensOf(k),xr=0),Wi(E,sr(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(m||!u&&!b&&a._start===St(E._time)&&oi(m)&&Cf(sr(a))&&E.data!=="nested")&&(a._tTime=-qe,a.render(Math.max(0,-f)||0)),_&&Hc(sr(a),_),a}var i=e.prototype;return i.render=function(r,n,o){var a=this._time,l=this._tDur,u=this._dur,f=r<0,m=r>l-qe&&!f?l:r<qe?0:r,v,g,b,p,_,T,E,k,C;if(!u)Af(this,r,n,o);else if(m!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(v=m,k=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(p*100+r,n,o);if(v=St(m%p),m===l?(b=this._repeat,v=u):(b=~~(m/p),b&&b===St(m/p)&&(v=u,b--),v>u&&(v=u)),T=this._yoyo&&b&1,T&&(C=this._yEase,v=u-v),_=ys(this._tTime,p),v===a&&!o&&this._initted&&b===_)return this._tTime=m,this;b!==_&&(k&&this._yEase&&iu(k,T),this.vars.repeatRefresh&&!T&&!this._lock&&this._time!==p&&this._initted&&(this._lock=o=1,this.render(St(p*b),!0).invalidate()._lock=0))}if(!this._initted){if(Yc(this,f?r:v,o,n,m))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&b!==_))return this;if(u!==this._dur)return this.render(r,n,o)}if(this._tTime=m,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(C||this._ease)(v/u),this._from&&(this.ratio=E=1-E),v&&!a&&!n&&!b&&(gi(this,"onStart"),this._tTime!==m))return this;for(g=this._pt;g;)g.r(E,g.d),g=g._next;k&&k.render(r<0?r:k._dur*k._ease(v/this._dur),n,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(f&&ga(this,r,n,o),gi(this,"onUpdate")),this._repeat&&b!==_&&this.vars.onRepeat&&!n&&this.parent&&gi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(f&&!this._onUpdate&&ga(this,r,!0,!0),(r||!u)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Er(this,1),!n&&!(f&&!a)&&(m||a||T)&&(gi(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,o,a,l){Us||ni.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Ra(this,u),f=this._ease(u/this._dur),jf(this,r,n,o,a,f,u,l)?this.resetTo(r,n,o,a,1):(Zn(this,0),this.parent||Fc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,xr&&xr.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ki(r):a,u=this._ptLookup,f=this._pt,m,v,g,b,p,_,T;if((!n||n==="all")&&Ef(a,l))return n==="all"&&(this._pt=0),Hs(this);for(m=this._op=this._op||[],n!=="all"&&(vt(n)&&(p={},Yt(n,function(E){return p[E]=1}),n=p),n=Uf(a,n)),T=a.length;T--;)if(~l.indexOf(a[T])){v=u[T],n==="all"?(m[T]=n,b=v,g={}):(g=m[T]=m[T]||{},b=n);for(p in b)_=v&&v[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&Kn(this,_,"_pt"),delete v[p]),g!=="all"&&(g[p]=1)}return this._initted&&!this._pt&&f&&Hs(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return qs(1,arguments)},e.delayedCall=function(r,n,o,a){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,n,o){return qs(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,o){return Ze.killTweensOf(r,n,o)},e}(Ks);Ci(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yt("staggerTo,staggerFrom,staggerFromTo",function(s){dt[s]=function(){var e=new Mt,i=va.call(arguments,0);return i.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,i)}});var Na=function(e,i,t){return e[i]=t},ou=function(e,i,t){return e[i](t)},Qf=function(e,i,t,r){return e[i](r.fp,t)},Zf=function(e,i,t){return e.setAttribute(i,t)},Jn=function(e,i){return ot(e[i])?ou:jn(e[i])&&e.setAttribute?Zf:Na},au=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},Jf=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},Ba=function(e,i){var t=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+r,t=t._next;r+=i.c}i.set(i.t,i.p,r,i)},$a=function(e,i){for(var t=i._pt;t;)t.r(e,t.d),t=t._next},eh=function(e,i,t,r){for(var n=this._pt,o;n;)o=n._next,n.p===r&&n.modifier(e,i,t),n=o},th=function(e){for(var i=this._pt,t,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?Kn(this,i,"_pt"):i.dep||(t=1),i=r;return!t},ih=function(e,i,t,r){r.mSet(e,i,r.m.call(r.tween,t,r.mt),r)},Fa=function(e){for(var i=e._pt,t,r,n,o;i;){for(t=i._next,r=n;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:o)?i._prev._next=i:n=i,(i._next=r)?r._prev=i:o=i,i=t}e._pt=n},Wt=function(){function s(i,t,r,n,o,a,l,u,f){this.t=t,this.s=n,this.c=o,this.p=r,this.r=a||au,this.d=l||this,this.set=u||Na,this.pr=f||0,this._next=i,i&&(i._prev=this)}var e=s.prototype;return e.modifier=function(t,r,n){this.mSet=this.mSet||this.set,this.set=ih,this.m=t,this.mt=n,this.tween=r},s}();Yt(Aa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ma[s]=1});yi.TweenMax=yi.TweenLite=dt;yi.TimelineLite=yi.TimelineMax=Mt;Ze=new Mt({sortChildren:!1,defaults:gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=Ia;var Yr=[],Hn={},rh=[],Mc=0,sh=0,ua=function(e){return(Hn[e]||rh).map(function(i){return i()})},xa=function(){var e=Date.now(),i=[];e-Mc>2&&(ua("matchMediaInit"),Yr.forEach(function(t){var r=t.queries,n=t.conditions,o,a,l,u;for(a in r)o=Yi.matchMedia(r[a]).matches,o&&(l=1),o!==n[a]&&(n[a]=o,u=1);u&&(t.revert(),l&&i.push(t))}),ua("matchMediaRevert"),i.forEach(function(t){return t.onMatch(t,function(r){return t.add(null,r)})}),Mc=e,ua("matchMedia"))},lu=function(){function s(i,t){this.selector=t&&ba(t),this.data=[],this._r=[],this.isReverted=!1,this.id=sh++,i&&this.add(i)}var e=s.prototype;return e.add=function(t,r,n){ot(t)&&(n=r,r=t,t=ot);var o=this,a=function(){var u=Ke,f=o.selector,m;return u&&u!==o&&u.data.push(o),n&&(o.selector=ba(n)),Ke=o,m=r.apply(o,arguments),ot(m)&&o._r.push(m),Ke=u,o.selector=f,o.isReverted=!1,m};return o.last=a,t===ot?a(o,function(l){return o.add(null,l)}):t?o[t]=a:a},e.ignore=function(t){var r=Ke;Ke=null,t(this),Ke=r},e.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof s?t.push.apply(t,r.getTweens()):r instanceof dt&&!(r.parent&&r.parent.data==="nested")&&t.push(r)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,r){var n=this;if(t?function(){for(var a=n.getTweens(),l=n.data.length,u;l--;)u=n.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,m){return m.g-f.g||-1/0}).forEach(function(f){return f.t.revert(t)}),l=n.data.length;l--;)u=n.data[l],u instanceof Mt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dt)&&u.revert&&u.revert(t);n._r.forEach(function(f){return f(t,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Yr.length;o--;)Yr[o].id===this.id&&Yr.splice(o,1)},e.revert=function(t){this.kill(t||{})},s}(),nh=function(){function s(i){this.contexts=[],this.scope=i,Ke&&Ke.data.push(this)}var e=s.prototype;return e.add=function(t,r,n){qi(t)||(t={matches:t});var o=new lu(0,n||this.scope),a=o.conditions={},l,u,f;Ke&&!o.selector&&(o.selector=Ke.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=t;for(u in t)u==="all"?f=1:(l=Yi.matchMedia(t[u]),l&&(Yr.indexOf(o)<0&&Yr.push(o),(a[u]=l.matches)&&(f=1),l.addListener?l.addListener(xa):l.addEventListener("change",xa)));return f&&r(o,function(m){return o.add(null,m)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(r){return r.kill(t,!0)})},s}(),Gn={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];i.forEach(function(r){return Zc(r)})},timeline:function(e){return new Mt(e)},getTweensOf:function(e,i){return Ze.getTweensOf(e,i)},getProperty:function(e,i,t,r){vt(e)&&(e=ki(e)[0]);var n=Tr(e||{}).get,o=t?$c:Bc;return t==="native"&&(t=""),e&&(i?o((si[i]&&si[i].get||n)(e,i,t,r)):function(a,l,u){return o((si[a]&&si[a].get||n)(e,a,l,u))})},quickSetter:function(e,i,t){if(e=ki(e),e.length>1){var r=e.map(function(f){return zt.quickSetter(f,i,t)}),n=r.length;return function(f){for(var m=n;m--;)r[m](f)}}e=e[0]||{};var o=si[i],a=Tr(e),l=a.harness&&(a.harness.aliases||{})[i]||i,u=o?function(f){var m=new o;ms._pt=0,m.init(e,t?f+t:f,ms,0,[e]),m.render(1,m),ms._pt&&$a(1,ms)}:a.set(e,l);return o?u:function(f){return u(e,l,t?f+t:f,a,1)}},quickTo:function(e,i,t){var r,n=zt.to(e,Wr((r={},r[i]="+=0.1",r.paused=!0,r),t||{})),o=function(l,u,f){return n.resetTo(i,l,u,f)};return o.tween=n,o},isTweening:function(e){return Ze.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,gs.ease)),Sc(gs,e||{})},config:function(e){return Sc(ai,e||{})},registerEffect:function(e){var i=e.name,t=e.effect,r=e.plugins,n=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!si[a]&&!yi[a]&&Gs(i+" effect requires "+a+" plugin.")}),oa[i]=function(a,l,u){return t(ki(a),Ci(l||{},n),u)},o&&(Mt.prototype[i]=function(a,l,u){return this.add(oa[i](a,qi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,i){Ae[e]=Hr(i)},parseEase:function(e,i){return arguments.length?Hr(e,i):Ae},getById:function(e){return Ze.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var t=new Mt(e),r,n;for(t.smoothChildTiming=oi(e.smoothChildTiming),Ze.remove(t),t._dp=0,t._time=t._tTime=Ze._time,r=Ze._first;r;)n=r._next,(i||!(!r._dur&&r instanceof dt&&r.vars.onComplete===r._targets[0]))&&Wi(t,r,r._start-r._delay),r=n;return Wi(Ze,t,0),t},context:function(e,i){return e?new lu(e,i):Ke},matchMedia:function(e){return new nh(e)},matchMediaRefresh:function(){return Yr.forEach(function(e){var i=e.conditions,t,r;for(r in i)i[r]&&(i[r]=!1,t=1);t&&e.revert()})||xa()},addEventListener:function(e,i){var t=Hn[e]||(Hn[e]=[]);~t.indexOf(i)||t.push(i)},removeEventListener:function(e,i){var t=Hn[e],r=t&&t.indexOf(i);r>=0&&t.splice(r,1)},utils:{wrap:Nf,wrapYoyo:Bf,distribute:Xc,random:jc,snap:Gc,normalize:Rf,getUnit:At,clamp:If,splitColor:Jc,toArray:ki,selector:ba,mapRange:Kc,pipe:Df,unitize:zf,interpolate:$f,shuffle:qc},install:Dc,effects:oa,ticker:ni,updateRoot:Mt.updateRoot,plugins:si,globalTimeline:Ze,core:{PropTween:Wt,globals:zc,Tween:dt,Timeline:Mt,Animation:Ks,getCache:Tr,_removeLinkedListItem:Kn,reverting:function(){return Lt},context:function(e){return e&&Ke&&(Ke.data.push(e),e._ctx=Ke),Ke},suppressOverwrites:function(e){return Sa=e}}};Yt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Gn[s]=dt[s]});ni.add(Mt.updateRoot);ms=Gn.to({},{duration:0});var oh=function(e,i){for(var t=e._pt;t&&t.p!==i&&t.op!==i&&t.fp!==i;)t=t._next;return t},ah=function(e,i){var t=e._targets,r,n,o;for(r in i)for(n=t.length;n--;)o=e._ptLookup[n][r],o&&(o=o.d)&&(o._pt&&(o=oh(o,r)),o&&o.modifier&&o.modifier(i[r],e,t[n],r))},da=function(e,i){return{name:e,rawVars:1,init:function(r,n,o){o._onInit=function(a){var l,u;if(vt(n)&&(l={},Yt(n,function(f){return l[f]=1}),n=l),i){l={};for(u in n)l[u]=i(n[u]);n=l}ah(a,n)}}}},zt=Gn.registerPlugin({name:"attr",init:function(e,i,t,r,n){var o,a,l;this.tween=t;for(o in i)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",i[o],r,n,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,i){for(var t=i._pt;t;)Lt?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",init:function(e,i){for(var t=i.length;t--;)this.add(e,t,e[t]||0,i[t],0,0,0,0,0,1)}},da("roundProps",wa),da("modifiers"),da("snap",Gc))||Gn;dt.version=Mt.version=zt.version="3.12.5";Lc=1;Ta()&&bs();var lh=Ae.Power0,ch=Ae.Power1,uh=Ae.Power2,dh=Ae.Power3,ph=Ae.Power4,fh=Ae.Linear,hh=Ae.Quad,mh=Ae.Cubic,gh=Ae.Quart,yh=Ae.Quint,vh=Ae.Strong,bh=Ae.Elastic,wh=Ae.Back,_h=Ae.SteppedEase,xh=Ae.Bounce,Sh=Ae.Sine,Th=Ae.Expo,Eh=Ae.Circ;var cu,Cr,xs,Ga,Qr,kh,uu,ja,Ch=function(){return typeof window<"u"},lr={},Kr=180/Math.PI,Ss=Math.PI/180,_s=Math.atan2,du=1e8,Ua=/([A-Z])/g,Mh=/(left|right|width|margin|padding|x)/i,Ah=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ya=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Ph=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Oh=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},Ih=function(e,i){var t=i.s+i.c*e;i.set(i.t,i.p,~~(t+(t<0?-.5:.5))+i.u,i)},vu=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},bu=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},Lh=function(e,i,t){return e.style[i]=t},Dh=function(e,i,t){return e.style.setProperty(i,t)},zh=function(e,i,t){return e._gsap[i]=t},Rh=function(e,i,t){return e._gsap.scaleX=e._gsap.scaleY=t},Nh=function(e,i,t,r,n){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(n,o)},Bh=function(e,i,t,r,n){var o=e._gsap;o[i]=t,o.renderTransform(n,o)},Je="transform",li=Je+"Origin",$h=function s(e,i){var t=this,r=this.target,n=r.style,o=r._gsap;if(e in lr&&n){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return t.tfm[a]=ar(r,a)}):this.tfm[e]=o.x?o[e]:ar(r,e),e===li&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return s.call(t,a,i)});if(this.props.indexOf(Je)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,i,"")),e=Je}(n||i)&&this.props.push(e,i,n[e])},wu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Fh=function(){var e=this.props,i=this.target,t=i.style,r=i._gsap,n,o;for(n=0;n<e.length;n+=3)e[n+1]?i[e[n]]=e[n+2]:e[n+2]?t[e[n]]=e[n+2]:t.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Ua,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),n=ja(),(!n||!n.isStart)&&!t[Je]&&(wu(t),r.zOrigin&&t[li]&&(t[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_u=function(e,i){var t={target:e,props:[],revert:Fh,save:$h};return e._gsap||zt.core.getCache(e),i&&i.split(",").forEach(function(r){return t.save(r)}),t},xu,Wa=function(e,i){var t=Cr.createElementNS?Cr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return t&&t.style?t:Cr.createElement(e)},Gi=function s(e,i,t){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(Ua,"-$1").toLowerCase())||r.getPropertyValue(i)||!t&&s(e,Ts(i)||i,1)||""},pu="O,Moz,ms,Ms,Webkit".split(","),Ts=function(e,i,t){var r=i||Qr,n=r.style,o=5;if(e in n&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(pu[o]+e in n););return o<0?null:(o===3?"ms":o>=0?pu[o]:"")+e},qa=function(){Ch()&&window.document&&(cu=window,Cr=cu.document,xs=Cr.documentElement,Qr=Wa("div")||{style:{}},kh=Wa("div"),Je=Ts(Je),li=Je+"Origin",Qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xu=!!Ts("perspective"),ja=zt.core.reverting,Ga=1)},Va=function s(e){var i=Wa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),t=this.parentNode,r=this.nextSibling,n=this.style.cssText,o;if(xs.appendChild(i),i.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return t&&(r?t.insertBefore(this,r):t.appendChild(this)),xs.removeChild(i),this.style.cssText=n,o},fu=function(e,i){for(var t=i.length;t--;)if(e.hasAttribute(i[t]))return e.getAttribute(i[t])},Su=function(e){var i;try{i=e.getBBox()}catch{i=Va.call(e,!0)}return i&&(i.width||i.height)||e.getBBox===Va||(i=Va.call(e,!0)),i&&!i.width&&!i.x&&!i.y?{x:+fu(e,["x","cx","x1"])||0,y:+fu(e,["y","cy","y1"])||0,width:0,height:0}:i},Tu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Su(e))},Zr=function(e,i){if(i){var t=e.style,r;i in lr&&i!==li&&(i=Je),t.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),t.removeProperty(r==="--"?i:i.replace(Ua,"-$1").toLowerCase())):t.removeAttribute(i)}},Mr=function(e,i,t,r,n,o){var a=new Wt(e._pt,i,t,0,1,o?bu:vu);return e._pt=a,a.b=r,a.e=n,e._props.push(t),a},hu={deg:1,rad:1,turn:1},Vh={grid:1,flex:1},Ar=function s(e,i,t,r){var n=parseFloat(t)||0,o=(t+"").trim().substr((n+"").length)||"px",a=Qr.style,l=Mh.test(i),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(l?"Width":"Height"),m=100,v=r==="px",g=r==="%",b,p,_,T;if(r===o||!n||hu[r]||hu[o])return n;if(o!=="px"&&!v&&(n=s(e,i,t,"px")),T=e.getCTM&&Tu(e),(g||o==="%")&&(lr[i]||~i.indexOf("adius")))return b=T?e.getBBox()[l?"width":"height"]:e[f],at(g?n/b*m:n/100*b);if(a[l?"width":"height"]=m+(v?o:r),p=~i.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,T&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Cr||!p.appendChild)&&(p=Cr.body),_=p._gsap,_&&g&&_.width&&l&&_.time===ni.time&&!_.uncache)return at(n/_.width*m);if(g&&(i==="height"||i==="width")){var E=e.style[i];e.style[i]=m+r,b=e[f],E?e.style[i]=E:Zr(e,i)}else(g||o==="%")&&!Vh[Gi(p,"display")]&&(a.position=Gi(e,"position")),p===e&&(a.position="static"),p.appendChild(Qr),b=Qr[f],p.removeChild(Qr),a.position="absolute";return l&&g&&(_=Tr(p),_.time=ni.time,_.width=p[f]),at(v?b*n/m:b&&n?m/b*n:0)},ar=function(e,i,t,r){var n;return Ga||qa(),i in Xi&&i!=="transform"&&(i=Xi[i],~i.indexOf(",")&&(i=i.split(",")[0])),lr[i]&&i!=="transform"?(n=en(e,r),n=i!=="transformOrigin"?n[i]:n.svg?n.origin:to(Gi(e,li))+" "+n.zOrigin+"px"):(n=e.style[i],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=eo[i]&&eo[i](e,i,t)||Gi(e,i)||Oa(e,i)||(i==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Ar(e,i,n,t)+t:n},Hh=function(e,i,t,r){if(!t||t==="none"){var n=Ts(i,e,1),o=n&&Gi(e,n,1);o&&o!==t?(i=n,t=o):i==="borderColor"&&(t=Gi(e,"borderTopColor"))}var a=new Wt(this._pt,e.style,i,0,1,Ba),l=0,u=0,f,m,v,g,b,p,_,T,E,k,C,M;if(a.b=t,a.e=r,t+="",r+="",r==="auto"&&(p=e.style[i],e.style[i]=r,r=Gi(e,i)||r,p?e.style[i]=p:Zr(e,i)),f=[t,r],Ia(f),t=f[0],r=f[1],v=t.match(qr)||[],M=r.match(qr)||[],M.length){for(;m=qr.exec(r);)_=m[0],E=r.substring(l,m.index),b?b=(b+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(b=1),_!==(p=v[u++]||"")&&(g=parseFloat(p)||0,C=p.substr((g+"").length),_.charAt(1)==="="&&(_=Xr(g,_)+C),T=parseFloat(_),k=_.substr((T+"").length),l=qr.lastIndex-k.length,k||(k=k||ai.units[i]||C,l===r.length&&(r+=k,a.e+=k)),C!==k&&(g=Ar(e,i,p,k)||0),a._pt={_next:a._pt,p:E||u===1?E:",",s:g,c:T-g,m:b&&b<4||i==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=i==="display"&&r==="none"?bu:vu;return ka.test(r)&&(a.e=0),this._pt=a,a},mu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yh=function(e){var i=e.split(" "),t=i[0],r=i[1]||"50%";return(t==="top"||t==="bottom"||r==="left"||r==="right")&&(e=t,t=r,r=e),i[0]=mu[t]||t,i[1]=mu[r]||r,i.join(" ")},Wh=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var t=i.t,r=t.style,n=i.u,o=t._gsap,a,l,u;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),u=n.length;--u>-1;)a=n[u],lr[a]&&(l=1,a=a==="transformOrigin"?li:Je),Zr(t,a);l&&(Zr(t,Je),o&&(o.svg&&t.removeAttribute("transform"),en(t,1),o.uncache=1,wu(r)))}},eo={clearProps:function(e,i,t,r,n){if(n.data!=="isFromStart"){var o=e._pt=new Wt(e._pt,i,t,0,0,Wh);return o.u=r,o.pr=-10,o.tween=n,e._props.push(t),1}}},Js=[1,0,0,1,0,0],Eu={},ku=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gu=function(e){var i=Gi(e,Je);return ku(i)?Js:i.substr(7).match(Ea).map(at)},Ka=function(e,i){var t=e._gsap||Tr(e),r=e.style,n=gu(e),o,a,l,u;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?Js:n):(n===Js&&!e.offsetParent&&e!==xs&&!t.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,xs.appendChild(e)),n=gu(e),l?r.display=l:Zr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):xs.removeChild(e))),i&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Xa=function(e,i,t,r,n,o){var a=e._gsap,l=n||Ka(e,!0),u=a.xOrigin||0,f=a.yOrigin||0,m=a.xOffset||0,v=a.yOffset||0,g=l[0],b=l[1],p=l[2],_=l[3],T=l[4],E=l[5],k=i.split(" "),C=parseFloat(k[0])||0,M=parseFloat(k[1])||0,I,z,N,w;t?l!==Js&&(z=g*_-b*p)&&(N=C*(_/z)+M*(-p/z)+(p*E-_*T)/z,w=C*(-b/z)+M*(g/z)-(g*E-b*T)/z,C=N,M=w):(I=Su(e),C=I.x+(~k[0].indexOf("%")?C/100*I.width:C),M=I.y+(~(k[1]||k[0]).indexOf("%")?M/100*I.height:M)),r||r!==!1&&a.smooth?(T=C-u,E=M-f,a.xOffset=m+(T*g+E*p)-T,a.yOffset=v+(T*b+E*_)-E):a.xOffset=a.yOffset=0,a.xOrigin=C,a.yOrigin=M,a.smooth=!!r,a.origin=i,a.originIsAbsolute=!!t,e.style[li]="0px 0px",o&&(Mr(o,a,"xOrigin",u,C),Mr(o,a,"yOrigin",f,M),Mr(o,a,"xOffset",m,a.xOffset),Mr(o,a,"yOffset",v,a.yOffset)),e.setAttribute("data-svg-origin",C+" "+M)},en=function(e,i){var t=e._gsap||new La(e);if("x"in t&&!i&&!t.uncache)return t;var r=e.style,n=t.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Gi(e,li)||"0",f,m,v,g,b,p,_,T,E,k,C,M,I,z,N,w,P,F,R,W,Y,q,ee,V,me,ge,L,ce,G,xe,Z,oe;return f=m=v=p=_=T=E=k=C=0,g=b=1,t.svg=!!(e.getCTM&&Tu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Je]!=="none"?l[Je]:"")),r.scale=r.rotate=r.translate="none"),z=Ka(e,t.svg),t.svg&&(t.uncache?(me=e.getBBox(),u=t.xOrigin-me.x+"px "+(t.yOrigin-me.y)+"px",V=""):V=!i&&e.getAttribute("data-svg-origin"),Xa(e,V||u,!!V||t.originIsAbsolute,t.smooth!==!1,z)),M=t.xOrigin||0,I=t.yOrigin||0,z!==Js&&(F=z[0],R=z[1],W=z[2],Y=z[3],f=q=z[4],m=ee=z[5],z.length===6?(g=Math.sqrt(F*F+R*R),b=Math.sqrt(Y*Y+W*W),p=F||R?_s(R,F)*Kr:0,E=W||Y?_s(W,Y)*Kr+p:0,E&&(b*=Math.abs(Math.cos(E*Ss))),t.svg&&(f-=M-(M*F+I*W),m-=I-(M*R+I*Y))):(oe=z[6],xe=z[7],L=z[8],ce=z[9],G=z[10],Z=z[11],f=z[12],m=z[13],v=z[14],N=_s(oe,G),_=N*Kr,N&&(w=Math.cos(-N),P=Math.sin(-N),V=q*w+L*P,me=ee*w+ce*P,ge=oe*w+G*P,L=q*-P+L*w,ce=ee*-P+ce*w,G=oe*-P+G*w,Z=xe*-P+Z*w,q=V,ee=me,oe=ge),N=_s(-W,G),T=N*Kr,N&&(w=Math.cos(-N),P=Math.sin(-N),V=F*w-L*P,me=R*w-ce*P,ge=W*w-G*P,Z=Y*P+Z*w,F=V,R=me,W=ge),N=_s(R,F),p=N*Kr,N&&(w=Math.cos(N),P=Math.sin(N),V=F*w+R*P,me=q*w+ee*P,R=R*w-F*P,ee=ee*w-q*P,F=V,q=me),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,T=180-T),g=at(Math.sqrt(F*F+R*R+W*W)),b=at(Math.sqrt(ee*ee+oe*oe)),N=_s(q,ee),E=Math.abs(N)>2e-4?N*Kr:0,C=Z?1/(Z<0?-Z:Z):0),t.svg&&(V=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!ku(Gi(e,Je)),V&&e.setAttribute("transform",V))),Math.abs(E)>90&&Math.abs(E)<270&&(n?(g*=-1,E+=p<=0?180:-180,p+=p<=0?180:-180):(b*=-1,E+=E<=0?180:-180)),i=i||t.uncache,t.x=f-((t.xPercent=f&&(!i&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=m-((t.yPercent=m&&(!i&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=v+o,t.scaleX=at(g),t.scaleY=at(b),t.rotation=at(p)+a,t.rotationX=at(_)+a,t.rotationY=at(T)+a,t.skewX=E+a,t.skewY=k+a,t.transformPerspective=C+o,(t.zOrigin=parseFloat(u.split(" ")[2])||!i&&t.zOrigin||0)&&(r[li]=to(u)),t.xOffset=t.yOffset=0,t.force3D=ai.force3D,t.renderTransform=t.svg?Xh:xu?Cu:qh,t.uncache=0,t},to=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ha=function(e,i,t){var r=At(i);return at(parseFloat(i)+parseFloat(Ar(e,"x",t+"px",r)))+r},qh=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,Cu(e,i)},jr="0deg",Zs="0px",Ur=") ",Cu=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,o=t.x,a=t.y,l=t.z,u=t.rotation,f=t.rotationY,m=t.rotationX,v=t.skewX,g=t.skewY,b=t.scaleX,p=t.scaleY,_=t.transformPerspective,T=t.force3D,E=t.target,k=t.zOrigin,C="",M=T==="auto"&&e&&e!==1||T===!0;if(k&&(m!==jr||f!==jr)){var I=parseFloat(f)*Ss,z=Math.sin(I),N=Math.cos(I),w;I=parseFloat(m)*Ss,w=Math.cos(I),o=Ha(E,o,z*w*-k),a=Ha(E,a,-Math.sin(I)*-k),l=Ha(E,l,N*w*-k+k)}_!==Zs&&(C+="perspective("+_+Ur),(r||n)&&(C+="translate("+r+"%, "+n+"%) "),(M||o!==Zs||a!==Zs||l!==Zs)&&(C+=l!==Zs||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ur),u!==jr&&(C+="rotate("+u+Ur),f!==jr&&(C+="rotateY("+f+Ur),m!==jr&&(C+="rotateX("+m+Ur),(v!==jr||g!==jr)&&(C+="skew("+v+", "+g+Ur),(b!==1||p!==1)&&(C+="scale("+b+", "+p+Ur),E.style[Je]=C||"translate(0, 0)"},Xh=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,o=t.x,a=t.y,l=t.rotation,u=t.skewX,f=t.skewY,m=t.scaleX,v=t.scaleY,g=t.target,b=t.xOrigin,p=t.yOrigin,_=t.xOffset,T=t.yOffset,E=t.forceCSS,k=parseFloat(o),C=parseFloat(a),M,I,z,N,w;l=parseFloat(l),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,l+=f),l||u?(l*=Ss,u*=Ss,M=Math.cos(l)*m,I=Math.sin(l)*m,z=Math.sin(l-u)*-v,N=Math.cos(l-u)*v,u&&(f*=Ss,w=Math.tan(u-f),w=Math.sqrt(1+w*w),z*=w,N*=w,f&&(w=Math.tan(f),w=Math.sqrt(1+w*w),M*=w,I*=w)),M=at(M),I=at(I),z=at(z),N=at(N)):(M=m,N=v,I=z=0),(k&&!~(o+"").indexOf("px")||C&&!~(a+"").indexOf("px"))&&(k=Ar(g,"x",o,"px"),C=Ar(g,"y",a,"px")),(b||p||_||T)&&(k=at(k+b-(b*M+p*z)+_),C=at(C+p-(b*I+p*N)+T)),(r||n)&&(w=g.getBBox(),k=at(k+r/100*w.width),C=at(C+n/100*w.height)),w="matrix("+M+","+I+","+z+","+N+","+k+","+C+")",g.setAttribute("transform",w),E&&(g.style[Je]=w)},Gh=function(e,i,t,r,n){var o=360,a=vt(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?Kr:1),u=l-r,f=r+u+"deg",m,v;return a&&(m=n.split("_")[1],m==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),m==="cw"&&u<0?u=(u+o*du)%o-~~(u/o)*o:m==="ccw"&&u>0&&(u=(u-o*du)%o-~~(u/o)*o)),e._pt=v=new Wt(e._pt,i,t,r,u,Ph),v.e=f,v.u="deg",e._props.push(t),v},yu=function(e,i){for(var t in i)e[t]=i[t];return e},jh=function(e,i,t){var r=yu({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,l,u,f,m,v,g,b;r.svg?(u=t.getAttribute("transform"),t.setAttribute("transform",""),o[Je]=i,a=en(t,1),Zr(t,Je),t.setAttribute("transform",u)):(u=getComputedStyle(t)[Je],o[Je]=i,a=en(t,1),o[Je]=u);for(l in lr)u=r[l],f=a[l],u!==f&&n.indexOf(l)<0&&(g=At(u),b=At(f),m=g!==b?Ar(t,l,u,b):parseFloat(u),v=parseFloat(f),e._pt=new Wt(e._pt,a,l,m,v-m,Ya),e._pt.u=b||0,e._props.push(l));yu(a,r)};Yt("padding,margin,Width,Radius",function(s,e){var i="Top",t="Right",r="Bottom",n="Left",o=(e<3?[i,t,r,n]:[i+n,i+t,r+t,r+n]).map(function(a){return e<2?s+a:"border"+a+s});eo[e>1?"border"+s:s]=function(a,l,u,f,m){var v,g;if(arguments.length<4)return v=o.map(function(b){return ar(a,b,u)}),g=v.join(" "),g.split(v[0]).length===5?v[0]:g;v=(f+"").split(" "),g={},o.forEach(function(b,p){return g[b]=v[p]=v[p]||v[(p-1)/2|0]}),a.init(l,g,m)}});var Qa={name:"css",register:qa,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,t,r,n){var o=this._props,a=e.style,l=t.vars.startAt,u,f,m,v,g,b,p,_,T,E,k,C,M,I,z,N;Ga||qa(),this.styles=this.styles||_u(e),N=this.styles.props,this.tween=t;for(p in i)if(p!=="autoRound"&&(f=i[p],!(si[p]&&za(p,i,t,r,e,n)))){if(g=typeof f,b=eo[p],g==="function"&&(f=f.call(t,r,e,n),g=typeof f),g==="string"&&~f.indexOf("random(")&&(f=ws(f)),b)b(this,e,p,f,t)&&(z=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),f+="",nr.lastIndex=0,nr.test(u)||(_=At(u),T=At(f)),T?_!==T&&(u=Ar(e,p,u,T)+T):_&&(f+=_),this.add(a,"setProperty",u,f,r,n,0,0,p),o.push(p),N.push(p,0,a[p]);else if(g!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(t,r,e,n):l[p],vt(u)&&~u.indexOf("random(")&&(u=ws(u)),At(u+"")||u==="auto"||(u+=ai.units[p]||At(ar(e,p))||""),(u+"").charAt(1)==="="&&(u=ar(e,p))):u=ar(e,p),v=parseFloat(u),E=g==="string"&&f.charAt(1)==="="&&f.substr(0,2),E&&(f=f.substr(2)),m=parseFloat(f),p in Xi&&(p==="autoAlpha"&&(v===1&&ar(e,"visibility")==="hidden"&&m&&(v=0),N.push("visibility",0,a.visibility),Mr(this,a,"visibility",v?"inherit":"hidden",m?"inherit":"hidden",!m)),p!=="scale"&&p!=="transform"&&(p=Xi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),k=p in lr,k){if(this.styles.save(p),C||(M=e._gsap,M.renderTransform&&!i.parseTransform||en(e,i.parseTransform),I=i.smoothOrigin!==!1&&M.smooth,C=this._pt=new Wt(this._pt,a,Je,0,1,M.renderTransform,M,0,-1),C.dep=1),p==="scale")this._pt=new Wt(this._pt,M,"scaleY",M.scaleY,(E?Xr(M.scaleY,E+m):m)-M.scaleY||0,Ya),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){N.push(li,0,a[li]),f=Yh(f),M.svg?Xa(e,f,0,I,0,this):(T=parseFloat(f.split(" ")[2])||0,T!==M.zOrigin&&Mr(this,M,"zOrigin",M.zOrigin,T),Mr(this,a,p,to(u),to(f)));continue}else if(p==="svgOrigin"){Xa(e,f,1,I,0,this);continue}else if(p in Eu){Gh(this,M,p,v,E?Xr(v,E+f):f);continue}else if(p==="smoothOrigin"){Mr(this,M,"smooth",M.smooth,f);continue}else if(p==="force3D"){M[p]=f;continue}else if(p==="transform"){jh(this,f,e);continue}}else p in a||(p=Ts(p)||p);if(k||(m||m===0)&&(v||v===0)&&!Ah.test(f)&&p in a)_=(u+"").substr((v+"").length),m||(m=0),T=At(f)||(p in ai.units?ai.units[p]:_),_!==T&&(v=Ar(e,p,u,T)),this._pt=new Wt(this._pt,k?M:a,p,v,(E?Xr(v,E+m):m)-v,!k&&(T==="px"||p==="zIndex")&&i.autoRound!==!1?Ih:Ya),this._pt.u=T||0,_!==T&&T!=="%"&&(this._pt.b=u,this._pt.r=Oh);else if(p in a)Hh.call(this,e,p,u,E?E+f:f);else if(p in e)this.add(e,p,u||e[p],E?E+f:f,r,n);else if(p!=="parseTransform"){Un(p,f);continue}k||(p in a?N.push(p,0,a[p]):N.push(p,1,u||e[p])),o.push(p)}}z&&Fa(this)},render:function(e,i){if(i.tween._time||!ja())for(var t=i._pt;t;)t.r(e,t.d),t=t._next;else i.styles.revert()},get:ar,aliases:Xi,getSetter:function(e,i,t){var r=Xi[i];return r&&r.indexOf(",")<0&&(i=r),i in lr&&i!==li&&(e._gsap.x||ar(e,"x"))?t&&uu===t?i==="scale"?Rh:zh:(uu=t||{})&&(i==="scale"?Nh:Bh):e.style&&!jn(e.style[i])?Lh:~i.indexOf("-")?Dh:Jn(e,i)},core:{_removeProperty:Zr,_getMatrix:Ka}};zt.utils.checkPrefix=Ts;zt.core.getStyleSaver=_u;(function(s,e,i,t){var r=Yt(s+","+e+","+i,function(n){lr[n]=1});Yt(e,function(n){ai.units[n]="deg",Eu[n]=1}),Xi[r[13]]=s+","+e,Yt(t,function(n){var o=n.split(":");Xi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ai.units[s]="px"});zt.registerPlugin(Qa);var Rt=zt.registerPlugin(Qa)||zt,Gy=Rt.core.Tween;var Uh=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var Kh=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var Qh=Math.PI/180,Uy=180/Math.PI,io=Math.sin,ro=Math.cos,rn=Math.abs,tn=Math.sqrt;var Zh=function(e){return typeof e=="number"};var Mu=1e5;var Pr=function(e){return Math.round(e*Mu)/Mu||0};function Au(s,e,i,t,r,n,o){for(var a=s.length,l,u,f,m,v;--a>-1;)for(l=s[a],u=l.length,f=0;f<u;f+=2)m=l[f],v=l[f+1],l[f]=m*e+v*t+n,l[f+1]=m*i+v*r+o;return s._dirty=1,s}function Jh(s,e,i,t,r,n,o,a,l){if(!(s===a&&e===l)){i=rn(i),t=rn(t);var u=r%360*Qh,f=ro(u),m=io(u),v=Math.PI,g=v*2,b=(s-a)/2,p=(e-l)/2,_=f*b+m*p,T=-m*b+f*p,E=_*_,k=T*T,C=E/(i*i)+k/(t*t);C>1&&(i=tn(C)*i,t=tn(C)*t);var M=i*i,I=t*t,z=(M*I-M*k-I*E)/(M*k+I*E);z<0&&(z=0);var N=(n===o?-1:1)*tn(z),w=N*(i*T/t),P=N*-(t*_/i),F=(s+a)/2,R=(e+l)/2,W=F+(f*w-m*P),Y=R+(m*w+f*P),q=(_-w)/i,ee=(T-P)/t,V=(-_-w)/i,me=(-T-P)/t,ge=q*q+ee*ee,L=(ee<0?-1:1)*Math.acos(q/tn(ge)),ce=(q*me-ee*V<0?-1:1)*Math.acos((q*V+ee*me)/tn(ge*(V*V+me*me)));isNaN(ce)&&(ce=v),!o&&ce>0?ce-=g:o&&ce<0&&(ce+=g),L%=g,ce%=g;var G=Math.ceil(rn(ce)/(g/4)),xe=[],Z=ce/G,oe=4/3*io(Z/2)/(1+ro(Z/2)),ne=f*i,we=m*i,ue=m*-t,Be=f*t,ke;for(ke=0;ke<G;ke++)r=L+ke*Z,_=ro(r),T=io(r),q=ro(r+=Z),ee=io(r),xe.push(_-oe*T,T+oe*_,q+oe*ee,ee-oe*q,q,ee);for(ke=0;ke<xe.length;ke+=2)_=xe[ke],T=xe[ke+1],xe[ke]=_*ne+T*ue+W,xe[ke+1]=_*we+T*Be+Y;return xe[ke-2]=a,xe[ke-1]=l,xe}}function Pu(s){var e=(s+"").replace(Kh,function(w){var P=+w;return P<1e-4&&P>-1e-4?0:P}).match(Uh)||[],i=[],t=0,r=0,n=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,u,f,m,v,g,b,p,_,T,E,k,C,M,I,z,N=function(P,F,R,W){E=(R-P)/3,k=(W-F)/3,p.push(P+E,F+k,R-E,W-k,R,W)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),i;for(u=0;u<o;u++)if(M=g,isNaN(e[u])?(g=e[u].toUpperCase(),b=g!==e[u]):u--,m=+e[u+1],v=+e[u+2],b&&(m+=t,v+=r),u||(_=m,T=v),g==="M")p&&(p.length<8?i.length-=1:a+=p.length),t=_=m,r=T=v,p=[m,v],i.push(p),u+=2,g="L";else if(g==="C")p||(p=[0,0]),b||(t=r=0),p.push(m,v,t+e[u+3]*1,r+e[u+4]*1,t+=e[u+5]*1,r+=e[u+6]*1),u+=6;else if(g==="S")E=t,k=r,(M==="C"||M==="S")&&(E+=t-p[p.length-4],k+=r-p[p.length-3]),b||(t=r=0),p.push(E,k,m,v,t+=e[u+3]*1,r+=e[u+4]*1),u+=4;else if(g==="Q")E=t+(m-t)*n,k=r+(v-r)*n,b||(t=r=0),t+=e[u+3]*1,r+=e[u+4]*1,p.push(E,k,t+(m-t)*n,r+(v-r)*n,t,r),u+=4;else if(g==="T")E=t-p[p.length-4],k=r-p[p.length-3],p.push(t+E,r+k,m+(t+E*1.5-m)*n,v+(r+k*1.5-v)*n,t=m,r=v),u+=2;else if(g==="H")N(t,r,t=m,r),u+=1;else if(g==="V")N(t,r,t,r=m+(b?r-t:0)),u+=1;else if(g==="L"||g==="Z")g==="Z"&&(m=_,v=T,p.closed=!0),(g==="L"||rn(t-m)>.5||rn(r-v)>.5)&&(N(t,r,m,v),g==="L"&&(u+=2)),t=m,r=v;else if(g==="A"){if(I=e[u+4],z=e[u+5],E=e[u+6],k=e[u+7],f=7,I.length>1&&(I.length<3?(k=E,E=z,f--):(k=z,E=I.substr(2),f-=2),z=I.charAt(1),I=I.charAt(0)),C=Jh(t,r,+e[u+1],+e[u+2],+e[u+3],+I,+z,(b?t:0)+E*1,(b?r:0)+k*1),u+=f,C)for(f=0;f<C.length;f++)p.push(C[f]);t=p[p.length-2],r=p[p.length-1]}else console.log(l);return u=p.length,u<6?(i.pop(),u=0):p[0]===p[u-2]&&p[1]===p[u-1]&&(p.closed=!0),i.totalPoints=a+u,i}function Ou(s){Zh(s[0])&&(s=[s]);var e="",i=s.length,t,r,n,o;for(r=0;r<i;r++){for(o=s[r],e+="M"+Pr(o[0])+","+Pr(o[1])+" C",t=o.length,n=2;n<t;n++)e+=Pr(o[n++])+","+Pr(o[n++])+" "+Pr(o[n++])+","+Pr(o[n++])+" "+Pr(o[n++])+","+Pr(o[n])+" ";o.closed&&(e+="z")}return e}var ci,Lu,Du=function(){return ci||typeof window<"u"&&(ci=window.gsap)&&ci.registerPlugin&&ci},Iu=function(){ci=Du(),ci?(ci.registerEase("_CE",sn.create),Lu=1):console.warn("Please gsap.registerPlugin(CustomEase)")},em=1e20,so=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},tm=1,im=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,rm=/[cLlsSaAhHvVtTqQ]/g,sm=function(e){var i=e.length,t=em,r;for(r=1;r<i;r+=6)+e[r]<t&&(t=+e[r]);return t},nm=function(e,i,t){!t&&t!==0&&(t=Math.max(+e[e.length-1],+e[1]));var r=+e[0]*-1,n=-t,o=e.length,a=1/(+e[o-2]+r),l=-i||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?sm(e)+n:+e[o-1]+n),u;for(l?l=1/l:l=-a,u=0;u<o;u+=2)e[u]=(+e[u]+r)*a,e[u+1]=(+e[u+1]+n)*l},om=function s(e,i,t,r,n,o,a,l,u,f,m){var v=(e+t)/2,g=(i+r)/2,b=(t+n)/2,p=(r+o)/2,_=(n+a)/2,T=(o+l)/2,E=(v+b)/2,k=(g+p)/2,C=(b+_)/2,M=(p+T)/2,I=(E+C)/2,z=(k+M)/2,N=a-e,w=l-i,P=Math.abs((t-a)*w-(r-l)*N),F=Math.abs((n-a)*w-(o-l)*N),R;return f||(f=[{x:e,y:i},{x:a,y:l}],m=1),f.splice(m||f.length-1,0,{x:I,y:z}),(P+F)*(P+F)>u*(N*N+w*w)&&(R=f.length,s(e,i,v,g,E,k,I,z,u,f,m),s(I,z,C,M,_,T,a,l,u,f,m+1+(f.length-R))),f},sn=function(){function s(i,t,r){Lu||Iu(),this.id=i,tm&&this.setData(t,r)}var e=s.prototype;return e.setData=function(t,r){r=r||{},t=t||"0,0,1,1";var n=t.match(im),o=1,a=[],l=[],u=r.precision||1,f=u<=1,m,v,g,b,p,_,T,E,k;if(this.data=t,(rm.test(t)||~t.indexOf("M")&&t.indexOf("C")<0)&&(n=Pu(t)[0]),m=n.length,m===4)n.unshift(0,0),n.push(1,1),m=8;else if((m-2)%6)throw"Invalid CustomEase";for((+n[0]!=0||+n[m-2]!=1)&&nm(n,r.height,r.originY),this.segment=n,b=2;b<m;b+=6)v={x:+n[b-2],y:+n[b-1]},g={x:+n[b+4],y:+n[b+5]},a.push(v,g),om(v.x,v.y,+n[b],+n[b+1],+n[b+2],+n[b+3],g.x,g.y,1/(u*2e5),a,a.length-1);for(m=a.length,b=0;b<m;b++)T=a[b],E=a[b-1]||T,(T.x>E.x||E.y!==T.y&&E.x===T.x||T===E)&&T.x<=1?(E.cx=T.x-E.x,E.cy=T.y-E.y,E.n=T,E.nx=T.x,f&&b>1&&Math.abs(E.cy/E.cx-a[b-2].cy/a[b-2].cx)>2&&(f=0),E.cx<o&&(E.cx?o=E.cx:(E.cx=.001,b===m-1&&(E.x-=.001,o=Math.min(o,.001),f=0)))):(a.splice(b--,1),m--);if(m=1/o+1|0,p=1/m,_=0,T=a[0],f){for(b=0;b<m;b++)k=b*p,T.nx<k&&(T=a[++_]),v=T.y+(k-T.x)/T.cx*T.cy,l[b]={x:k,cx:p,y:v,cy:0,nx:9},b&&(l[b-1].cy=v-l[b-1].y);l[m-1].cy=a[a.length-1].y-v}else{for(b=0;b<m;b++)T.nx<b*p&&(T=a[++_]),l[b]=T;_<a.length-1&&(l[b-1]=a[a.length-2])}return this.ease=function(C){var M=l[C*m|0]||l[m-1];return M.nx<C&&(M=M.n),M.y+(C-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&ci&&ci.registerEase(this.id,this.ease),this},e.getSVGData=function(t){return s.getSVGData(this,t)},s.create=function(t,r,n){return new s(t,r,n).ease},s.register=function(t){ci=t,Iu()},s.get=function(t){return ci.parseEase(t)},s.getSVGData=function(t,r){r=r||{};var n=r.width||100,o=r.height||100,a=r.x||0,l=(r.y||0)+o,u=ci.utils.toArray(r.path)[0],f,m,v,g,b,p,_,T,E,k;if(r.invert&&(o=-o,l=0),typeof t=="string"&&(t=ci.parseEase(t)),t.custom&&(t=t.custom),t instanceof s)f=Ou(Au([t.segment],n,0,0,-o,a,l));else{for(f=[a,l],_=Math.max(5,(r.precision||1)*200),g=1/_,_+=2,T=5/_,E=so(a+g*n),k=so(l+t(g)*-o),m=(k-l)/(E-a),v=2;v<_;v++)b=so(a+v*g*n),p=so(l+t(v*g)*-o),(Math.abs((p-k)/(b-E)-m)>T||v===_-1)&&(f.push(E,k),m=(p-k)/(b-E)),E=b,k=p;f="M"+f.join(",")}return u&&u.setAttribute("d",f),f},s}();Du()&&ci.registerPlugin(sn);sn.version="3.12.5";var cr,Jr,tl,ao,nn,no,oo,on,Ii="transform",el=Ii+"Origin",zu,lo=function(e){var i=e.ownerDocument||e;for(!(Ii in e.style)&&("msTransform"in e.style)&&(Ii="msTransform",el=Ii+"Origin");i.parentNode&&(i=i.parentNode););if(Jr=window,oo=new Or,i){cr=i,tl=i.documentElement,ao=i.body,on=cr.createElementNS("http://www.w3.org/2000/svg","g"),on.style.transform="none";var t=i.createElement("div"),r=i.createElement("div"),n=i&&(i.body||i.firstElementChild);n&&n.appendChild&&(n.appendChild(t),t.appendChild(r),t.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),zu=r.offsetParent!==t,n.removeChild(t))}return i},am=function(e){for(var i,t;e&&e!==ao;)t=e._gsap,t&&t.uncache&&t.get(e,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),i?i.push(t):i=[t]),e=e.parentNode;return i},Ru=[],Nu=[],co=function(){return Jr.pageYOffset||cr.scrollTop||tl.scrollTop||ao.scrollTop||0},uo=function(){return Jr.pageXOffset||cr.scrollLeft||tl.scrollLeft||ao.scrollLeft||0},il=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},lm=function s(e){if(Jr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},Za=function s(e,i){if(e.parentNode&&(cr||lo(e))){var t=il(e),r=t?t.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",n=t?i?"rect":"g":"div",o=i!==2?0:100,a=i===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=cr.createElementNS?cr.createElementNS(r.replace(/^https/,"http"),n):cr.createElement(n);return i&&(t?(no||(no=s(e)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+o+","+a+")"),no.appendChild(u)):(nn||(nn=s(e),nn.style.cssText=l),u.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",nn.appendChild(u))),u}throw"Need document and parent."},cm=function(e){for(var i=new Or,t=0;t<e.numberOfItems;t++)i.multiply(e.getItem(t).matrix);return i},rl=function(e){var i=e.getCTM(),t;return i||(t=e.style[Ii],e.style[Ii]="none",e.appendChild(on),i=on.getCTM(),e.removeChild(on),t?e.style[Ii]=t:e.style.removeProperty(Ii.replace(/([A-Z])/g,"-$1").toLowerCase())),i||oo.clone()},um=function(e,i){var t=il(e),r=e===t,n=t?Ru:Nu,o=e.parentNode,a,l,u,f,m,v;if(e===Jr)return e;if(n.length||n.push(Za(e,1),Za(e,2),Za(e,3)),a=t?no:nn,t)r?(u=rl(e),f=-u.e/u.a,m=-u.f/u.d,l=oo):e.getBBox?(u=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?cm(l):l.getItem(0).matrix:oo,f=l.a*u.x+l.c*u.y,m=l.b*u.x+l.d*u.y):(l=new Or,f=m=0),i&&e.tagName.toLowerCase()==="g"&&(f=m=0),(r?t:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+f)+","+(l.f+m)+")");else{if(f=m=0,zu)for(l=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==l&&u.parentNode;)(Jr.getComputedStyle(u)[Ii]+"").length>4&&(f=u.offsetLeft,m=u.offsetTop,u=0);if(v=Jr.getComputedStyle(e),v.position!=="absolute"&&v.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)f+=o.scrollLeft||0,m+=o.scrollTop||0,o=o.parentNode;u=a.style,u.top=e.offsetTop-m+"px",u.left=e.offsetLeft-f+"px",u[Ii]=v[Ii],u[el]=v[el],u.position=v.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Ja=function(e,i,t,r,n,o,a){return e.a=i,e.b=t,e.c=r,e.d=n,e.e=o,e.f=a,e},Or=function(){function s(i,t,r,n,o,a){i===void 0&&(i=1),t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=1),o===void 0&&(o=0),a===void 0&&(a=0),Ja(this,i,t,r,n,o,a)}var e=s.prototype;return e.inverse=function(){var t=this.a,r=this.b,n=this.c,o=this.d,a=this.e,l=this.f,u=t*o-r*n||1e-10;return Ja(this,o/u,-r/u,-n/u,t/u,(n*l-o*a)/u,-(t*l-r*a)/u)},e.multiply=function(t){var r=this.a,n=this.b,o=this.c,a=this.d,l=this.e,u=this.f,f=t.a,m=t.c,v=t.b,g=t.d,b=t.e,p=t.f;return Ja(this,f*r+v*o,f*n+v*a,m*r+g*o,m*n+g*a,l+b*r+p*o,u+b*n+p*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var r=this.a,n=this.b,o=this.c,a=this.d,l=this.e,u=this.f;return r===t.a&&n===t.b&&o===t.c&&a===t.d&&l===t.e&&u===t.f},e.apply=function(t,r){r===void 0&&(r={});var n=t.x,o=t.y,a=this.a,l=this.b,u=this.c,f=this.d,m=this.e,v=this.f;return r.x=n*a+o*u+m||0,r.y=n*l+o*f+v||0,r},s}();function Li(s,e,i,t){if(!s||!s.parentNode||(cr||lo(s)).documentElement===s)return new Or;var r=am(s),n=il(s),o=n?Ru:Nu,a=um(s,i),l=o[0].getBoundingClientRect(),u=o[1].getBoundingClientRect(),f=o[2].getBoundingClientRect(),m=a.parentNode,v=!t&&lm(s),g=new Or((u.left-l.left)/100,(u.top-l.top)/100,(f.left-l.left)/100,(f.top-l.top)/100,l.left+(v?0:uo()),l.top+(v?0:co()));if(m.removeChild(a),r)for(l=r.length;l--;)u=r[l],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return e?g.inverse():g}var dm=1,Ms,Nt,je,an,Ir,ur,ul,Bu=function(e,i){return e.actions.forEach(function(t){return t.vars[i]&&t.vars[i](t)})},dl={},$u=180/Math.PI,pm=Math.PI/180,ho={},Fu={},yo={},fl=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},fm=fl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),vo=fl("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),ln=function(e){return Ms(e)[0]||console.warn("Element not found:",e)},Es=function(e){return Math.round(e*1e4)/1e4||0},sl=function(e,i,t){return e.forEach(function(r){return r.classList[t](i)})},Vu={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Xu={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Gu=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ks=function(e,i){var t={},r;for(r in e)i[r]||(t[r]=e[r]);return t},hl={},ju=function(e){var i=hl[e]=fl(e);return yo[e]=i.concat(vo),i},hm=function(e){var i=e._gsap||Nt.core.getCache(e);return i.gmCache===Nt.ticker.frame?i.gMatrix:(i.gmCache=Nt.ticker.frame,i.gMatrix=Li(e,!0,!1,!0))},mm=function s(e,i,t){t===void 0&&(t=0);for(var r=e.parentNode,n=1e3*Math.pow(10,t)*(i?-1:1),o=i?-n*900:0;e;)o+=n,e=e.previousSibling;return r?o+s(r,i,t+1):o},mo=function(e,i,t){return e.forEach(function(r){return r.d=mm(t?r.element:r.t,i)}),e.sort(function(r,n){return r.d-n.d}),e},cn=function(e,i){for(var t=e.element.style,r=e.css=e.css||[],n=i.length,o,a;n--;)o=i[n],a=t[o]||t.getPropertyValue(o),r.push(a?o:Fu[o]||(Fu[o]=Gu(o)),a);return t},go=function(e){var i=e.css,t=e.element.style,r=0;for(e.cache.uncache=1;r<i.length;r+=2)i[r+1]?t[i[r]]=i[r+1]:t.removeProperty(i[r]);!i[i.indexOf("transform")+1]&&t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Hu=function(e,i){e.forEach(function(t){return t.a.cache.uncache=1}),i||e.finalStates.forEach(go)},nl="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),ml=function(e,i,t){var r=e.element,n=e.width,o=e.height,a=e.uncache,l=e.getProp,u=r.style,f=4,m,v,g;if(typeof i!="object"&&(i=e),je&&t!==1)return je._abs.push({t:r,b:e,a:e,sd:0}),je._final.push(function(){return(e.cache.uncache=1)&&go(e)}),r;for(v=l("display")==="none",(!e.isVisible||v)&&(v&&(cn(e,["display"]).display=i.display),e.matrix=i.matrix,e.width=n=e.width||i.width,e.height=o=e.height||i.height),cn(e,nl),g=window.getComputedStyle(r);f--;)u[nl[f]]=g[nl[f]];if(u.gridArea="1 / 1 / 1 / 1",u.transition="none",u.position="absolute",u.width=n+"px",u.height=o+"px",u.top||(u.top="0px"),u.left||(u.left="0px"),a)m=new es(r);else if(m=ks(e,ho),m.position="absolute",e.simple){var b=r.getBoundingClientRect();m.matrix=new Or(1,0,0,1,b.left+uo(),b.top+co())}else m.matrix=Li(r,!1,!1,!0);return m=Cs(m,e,!0),e.x=ur(m.x,.01),e.y=ur(m.y,.01),r},Yu=function(e,i){return i!==!0&&(i=Ms(i),e=e.filter(function(t){if(i.indexOf((t.sd<0?t.b:t.a).element)!==-1)return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),e},Uu=function(e){return mo(e,!0).forEach(function(i){return(i.a.isVisible||i.b.isVisible)&&ml(i.sd<0?i.b:i.a,i.b,1)})},gm=function(e,i){return i&&e.idLookup[pl(i).id]||e.elementStates[0]},pl=function(e,i,t,r){return e instanceof es?e:e instanceof Di?gm(e,r):new es(typeof e=="string"?ln(e)||console.warn(e+" not found"):e,i,t)},ym=function(e,i){for(var t=Nt.getProperty(e.element,null,"native"),r=e.props={},n=i.length;n--;)r[i[n]]=(t(i[n])+"").trim();return r.zIndex&&(r.zIndex=parseFloat(r.zIndex)||0),e},Ku=function(e,i){var t=e.style||e,r;for(r in i)t[r]=i[r]},vm=function(e){var i=e.getAttribute("data-flip-id");return i||e.setAttribute("data-flip-id",i="auto-"+dm++),i},Qu=function(e){return e.map(function(i){return i.element})},Wu=function(e,i,t){return e&&i.length&&t.add(e(Qu(i),t,new Di(i,0,!0)),0)},Cs=function(e,i,t,r,n,o){var a=e.element,l=e.cache,u=e.parent,f=e.x,m=e.y,v=i.width,g=i.height,b=i.scaleX,p=i.scaleY,_=i.rotation,T=i.bounds,E=o&&ul&&ul(a,"transform"),k=e,C=i.matrix,M=C.e,I=C.f,z=e.bounds.width!==T.width||e.bounds.height!==T.height||e.scaleX!==b||e.scaleY!==p||e.rotation!==_,N=!z&&e.simple&&i.simple&&!n,w,P,F,R,W,Y,q;return N||!u?(b=p=1,_=w=0):(W=hm(u),Y=W.clone().multiply(i.ctm?i.matrix.clone().multiply(i.ctm):i.matrix),_=Es(Math.atan2(Y.b,Y.a)*$u),w=Es(Math.atan2(Y.c,Y.d)*$u+_)%360,b=Math.sqrt(Math.pow(Y.a,2)+Math.pow(Y.b,2)),p=Math.sqrt(Math.pow(Y.c,2)+Math.pow(Y.d,2))*Math.cos(w*pm),n&&(n=Ms(n)[0],R=Nt.getProperty(n),q=n.getBBox&&typeof n.getBBox=="function"&&n.getBBox(),k={scaleX:R("scaleX"),scaleY:R("scaleY"),width:q?q.width:Math.ceil(parseFloat(R("width","px"))),height:q?q.height:parseFloat(R("height","px"))}),l.rotation=_+"deg",l.skewX=w+"deg"),t?(b*=v===k.width||!k.width?1:v/k.width,p*=g===k.height||!k.height?1:g/k.height,l.scaleX=b,l.scaleY=p):(v=ur(v*b/k.scaleX,0),g=ur(g*p/k.scaleY,0),a.style.width=v+"px",a.style.height=g+"px"),r&&Ku(a,i.props),N||!u?(f+=M-e.matrix.e,m+=I-e.matrix.f):z||u!==i.parent?(l.renderTransform(1,l),Y=Li(n||a,!1,!1,!0),P=W.apply({x:Y.e,y:Y.f}),F=W.apply({x:M,y:I}),f+=F.x-P.x,m+=F.y-P.y):(W.e=W.f=0,F=W.apply({x:M-e.matrix.e,y:I-e.matrix.f}),f+=F.x,m+=F.y),f=ur(f,.02),m=ur(m,.02),o&&!(o instanceof es)?E&&E.revert():(l.x=f+"px",l.y=m+"px",l.renderTransform(1,l)),o&&(o.x=f,o.y=m,o.rotation=_,o.skewX=w,t?(o.scaleX=b,o.scaleY=p):(o.width=v,o.height=g)),o||l},ol=function(e,i){return e instanceof Di?e:new Di(e,i)},Zu=function(e,i,t){var r=e.idLookup[t],n=e.alt[t];return n.isVisible&&(!(i.getElementState(n.element)||n).isVisible||!r.isVisible)?n:r},al=[],ll="width,height,overflowX,overflowY".split(","),po,qu=function(e){if(e!==po){var i=Ir.style,t=Ir.clientWidth===window.outerWidth,r=Ir.clientHeight===window.outerHeight,n=4;if(e&&(t||r)){for(;n--;)al[n]=i[ll[n]];t&&(i.width=Ir.clientWidth+"px",i.overflowY="hidden"),r&&(i.height=Ir.clientHeight+"px",i.overflowX="hidden"),po=e}else if(po){for(;n--;)al[n]?i[ll[n]]=al[n]:i.removeProperty(Gu(ll[n]));po=e}}},cl=function(e,i,t,r){e instanceof Di&&i instanceof Di||console.warn("Not a valid state object."),t=t||{};var n=t,o=n.clearProps,a=n.onEnter,l=n.onLeave,u=n.absolute,f=n.absoluteOnLeave,m=n.custom,v=n.delay,g=n.paused,b=n.repeat,p=n.repeatDelay,_=n.yoyo,T=n.toggleClass,E=n.nested,k=n.zIndex,C=n.scale,M=n.fade,I=n.stagger,z=n.spin,N=n.prune,w=("props"in t?t:e).props,P=ks(t,Vu),F=Nt.timeline({delay:v,paused:g,repeat:b,repeatDelay:p,yoyo:_,data:"isFlip"}),R=P,W=[],Y=[],q=[],ee=[],V=z===!0?1:z||0,me=typeof z=="function"?z:function(){return V},ge=e.interrupted||i.interrupted,L=F[r!==1?"to":"from"],ce,G,xe,Z,oe,ne,we,ue,Be,ke,de,Qe,se,Q;for(G in i.idLookup)de=i.alt[G]?Zu(i,e,G):i.idLookup[G],oe=de.element,ke=e.idLookup[G],e.alt[G]&&oe===ke.element&&(e.alt[G].isVisible||!de.isVisible)&&(ke=e.alt[G]),ke?(ne={t:oe,b:ke,a:de,sd:ke.element===oe?0:de.isVisible?1:-1},q.push(ne),ne.sd&&(ne.sd<0&&(ne.b=de,ne.a=ke),ge&&cn(ne.b,w?yo[w]:vo),M&&q.push(ne.swap={t:ke.element,b:ne.b,a:ne.a,sd:-ne.sd,swap:ne})),oe._flip=ke.element._flip=je?je.timeline:F):de.isVisible&&(q.push({t:oe,b:ks(de,{isVisible:1}),a:de,sd:0,entering:1}),oe._flip=je?je.timeline:F);if(w&&(hl[w]||ju(w)).forEach(function(O){return P[O]=function($e){return q[$e].a.props[O]}}),q.finalStates=Be=[],Qe=function(){for(mo(q),qu(!0),Z=0;Z<q.length;Z++)ne=q[Z],se=ne.a,Q=ne.b,N&&!se.isDifferent(Q)&&!ne.entering?q.splice(Z--,1):(oe=ne.t,E&&!(ne.sd<0)&&Z&&(se.matrix=Li(oe,!1,!1,!0)),Q.isVisible&&se.isVisible?(ne.sd<0?(we=new es(oe,w,e.simple),Cs(we,se,C,0,0,we),we.matrix=Li(oe,!1,!1,!0),we.css=ne.b.css,ne.a=se=we,M&&(oe.style.opacity=ge?Q.opacity:se.opacity),I&&ee.push(oe)):ne.sd>0&&M&&(oe.style.opacity=ge?se.opacity-Q.opacity:"0"),Cs(se,Q,C,w)):Q.isVisible!==se.isVisible&&(Q.isVisible?se.isVisible||(Q.css=se.css,Y.push(Q),q.splice(Z--,1),u&&E&&Cs(se,Q,C,w)):(se.isVisible&&W.push(se),q.splice(Z--,1))),C||(oe.style.maxWidth=Math.max(se.width,Q.width)+"px",oe.style.maxHeight=Math.max(se.height,Q.height)+"px",oe.style.minWidth=Math.min(se.width,Q.width)+"px",oe.style.minHeight=Math.min(se.height,Q.height)+"px"),E&&T&&oe.classList.add(T)),Be.push(se);var $e;if(T&&($e=Be.map(function(ie){return ie.element}),E&&$e.forEach(function(ie){return ie.classList.remove(T)})),qu(!1),C?(P.scaleX=function(ie){return q[ie].a.scaleX},P.scaleY=function(ie){return q[ie].a.scaleY}):(P.width=function(ie){return q[ie].a.width+"px"},P.height=function(ie){return q[ie].a.height+"px"},P.autoRound=t.autoRound||!1),P.x=function(ie){return q[ie].a.x+"px"},P.y=function(ie){return q[ie].a.y+"px"},P.rotation=function(ie){return q[ie].a.rotation+(z?me(ie,ue[ie],ue)*360:0)},P.skewX=function(ie){return q[ie].a.skewX},ue=q.map(function(ie){return ie.t}),(k||k===0)&&(P.modifiers={zIndex:function(){return k}},P.zIndex=k,P.immediateRender=t.immediateRender!==!1),M&&(P.opacity=function(ie){return q[ie].sd<0?0:q[ie].sd>0?q[ie].a.opacity:"+=0"}),ee.length){I=Nt.utils.distribute(I);var kt=ue.slice(ee.length);P.stagger=function(ie,ti){return I(~ee.indexOf(ti)?ue.indexOf(q[ie].swap.t):ie,ti,kt)}}if(fm.forEach(function(ie){return t[ie]&&F.eventCallback(ie,t[ie],t[ie+"Params"])}),m&&ue.length){R=ks(P,Vu),"scale"in m&&(m.scaleX=m.scaleY=m.scale,delete m.scale);for(G in m)ce=ks(m[G],Xu),ce[G]=P[G],!("duration"in ce)&&"duration"in P&&(ce.duration=P.duration),ce.stagger=P.stagger,L.call(F,ue,ce,0),delete R[G]}(ue.length||Y.length||W.length)&&(T&&F.add(function(){return sl($e,T,F._zTime<0?"remove":"add")},0)&&!g&&sl($e,T,"add"),ue.length&&L.call(F,ue,R,0)),Wu(a,W,F),Wu(l,Y,F);var Fe=je&&je.timeline;Fe&&(Fe.add(F,0),je._final.push(function(){return Hu(q,!o)})),xe=F.duration(),F.call(function(){var ie=F.time()>=xe;ie&&!Fe&&Hu(q,!o),T&&sl($e,T,ie?"remove":"add")})},f&&(u=q.filter(function(O){return!O.sd&&!O.a.isVisible&&O.b.isVisible}).map(function(O){return O.a.element})),je){var ze;u&&(ze=je._abs).push.apply(ze,Yu(q,u)),je._run.push(Qe)}else u&&Uu(Yu(q,u)),Qe();var Xe=je?je.timeline:F;return Xe.revert=function(){return gl(Xe,1,1)},Xe},bm=function s(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(s)},gl=function(e,i,t){if(e&&e.progress()<1&&(!e.paused()||t))return i&&(bm(e),i<2&&e.progress(1),e.kill()),!0},fo=function(e){for(var i=e.idLookup={},t=e.alt={},r=e.elementStates,n=r.length,o;n--;)o=r[n],i[o.id]?t[o.id]=o:i[o.id]=o},Di=function(){function s(i,t,r){if(this.props=t&&t.props,this.simple=!!(t&&t.simple),r)this.targets=Qu(i),this.elementStates=i,fo(this);else{this.targets=Ms(i);var n=t&&(t.kill===!1||t.batch&&!t.kill);je&&!n&&je._kill.push(this),this.update(n||!!je)}}var e=s.prototype;return e.update=function(t){var r=this;return this.elementStates=this.targets.map(function(n){return new es(n,r.props,r.simple)}),fo(this),this.interrupt(t),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,fo(this),this},e.fit=function(t,r,n){for(var o=mo(this.elementStates.slice(0),!1,!0),a=(t||this).idLookup,l=0,u,f;l<o.length;l++)u=o[l],n&&(u.matrix=Li(u.element,!1,!1,!0)),f=a[u.id],f&&Cs(u,f,r,!0,0,u),u.matrix=Li(u.element,!1,!1,!0);return this},e.getProperty=function(t,r){var n=this.getElementState(t)||ho;return(r in n?n:n.props||ho)[r]},e.add=function(t){for(var r=t.targets.length,n=this.idLookup,o=this.alt,a,l,u;r--;)l=t.elementStates[r],u=n[l.id],u&&(l.element===u.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===u.element?u:o[l.id]),this.targets.splice(a,1,t.targets[r]),this.elementStates.splice(a,1,l)):(this.targets.push(t.targets[r]),this.elementStates.push(l));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),fo(this),this},e.compare=function(t){var r=t.idLookup,n=this.idLookup,o=[],a=[],l=[],u=[],f=[],m=t.alt,v=this.alt,g=function(N,w,P){return(N.isVisible!==w.isVisible?N.isVisible?l:u:N.isVisible?a:o).push(P)&&f.push(P)},b=function(N,w,P){return f.indexOf(P)<0&&g(N,w,P)},p,_,T,E,k,C,M,I;for(T in r)k=m[T],C=v[T],p=k?Zu(t,this,T):r[T],E=p.element,_=n[T],C?(I=_.isVisible||!C.isVisible&&E===_.element?_:C,M=k&&!p.isVisible&&!k.isVisible&&I.element===k.element?k:p,M.isVisible&&I.isVisible&&M.element!==I.element?((M.isDifferent(I)?a:o).push(M.element,I.element),f.push(M.element,I.element)):g(M,I,M.element),k&&M.element===k.element&&(k=r[T]),b(M.element!==_.element&&k?k:M,_,_.element),b(k&&k.element===C.element?k:M,C,C.element),k&&b(k,C.element===k.element?C:_,k.element)):(_?_.isDifferent(p)?g(p,_,E):o.push(E):l.push(E),k&&b(k,_,k.element));for(T in n)r[T]||(u.push(n[T].element),v[T]&&u.push(v[T].element));return{changed:a,unchanged:o,enter:l,leave:u}},e.recordInlineStyles=function(){for(var t=yo[this.props]||vo,r=this.elementStates.length;r--;)cn(this.elementStates[r],t)},e.interrupt=function(t){var r=this,n=[];this.targets.forEach(function(o){var a=o._flip,l=gl(a,t?0:1);t&&l&&n.indexOf(a)<0&&a.add(function(){return r.updateVisibility()}),l&&n.push(a)}),!t&&n.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!n.length)},e.updateVisibility=function(){this.elementStates.forEach(function(t){var r=t.element.getBoundingClientRect();t.isVisible=!!(r.width||r.height||r.top||r.left),t.uncache=1})},e.getElementState=function(t){return this.elementStates[this.targets.indexOf(ln(t))]},e.makeAbsolute=function(){return mo(this.elementStates.slice(0),!0,!0).map(ml)},s}(),es=function(){function s(i,t,r){this.element=i,this.update(t,r)}var e=s.prototype;return e.isDifferent=function(t){var r=this.bounds,n=t.bounds;return r.top!==n.top||r.left!==n.left||r.width!==n.width||r.height!==n.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},e.update=function(t,r){var n=this,o=n.element,a=Nt.getProperty(o),l=Nt.core.getCache(o),u=o.getBoundingClientRect(),f=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),m=r?new Or(1,0,0,1,u.left+uo(),u.top+co()):Li(o,!1,!1,!0);n.getProp=a,n.element=o,n.id=vm(o),n.matrix=m,n.cache=l,n.bounds=u,n.isVisible=!!(u.width||u.height||u.left||u.top),n.display=a("display"),n.position=a("position"),n.parent=o.parentNode,n.x=a("x"),n.y=a("y"),n.scaleX=l.scaleX,n.scaleY=l.scaleY,n.rotation=a("rotation"),n.skewX=a("skewX"),n.opacity=a("opacity"),n.width=f?f.width:ur(a("width","px"),.04),n.height=f?f.height:ur(a("height","px"),.04),t&&ym(n,hl[t]||ju(t)),n.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&rl(o).inverse(),n.simple=r||Es(m.a)===1&&!Es(m.b)&&!Es(m.c)&&Es(m.d)===1,n.uncache=0},s}(),wm=function(){function s(i,t){this.vars=i,this.batch=t,this.states=[],this.timeline=t.timeline}var e=s.prototype;return e.getStateById=function(t){for(var r=this.states.length;r--;)if(this.states[r].idLookup[t])return this.states[r]},e.kill=function(){this.batch.remove(this)},s}(),_m=function(){function s(i){this.id=i,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Di,this.timeline=Nt.timeline()}var e=s.prototype;return e.add=function(t){var r=this.actions.filter(function(n){return n.vars===t});return r.length?r[0]:(r=new wm(typeof t=="function"?{animate:t}:t,this),this.actions.push(r),r)},e.remove=function(t){var r=this.actions.indexOf(t);return r>=0&&this.actions.splice(r,1),this},e.getState=function(t){var r=this,n=je,o=an;return je=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,an=a,a.state=a.vars.getState(a)),t&&a.states.forEach(function(l){return r.state.add(l)})}),an=o,je=n,this.killConflicts(),this},e.animate=function(){var t=this,r=je,n=this.timeline,o=this.actions.length,a,l;for(je=this,n.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(u){u.vars.animate&&u.vars.animate(u);var f=u.vars.onEnter,m=u.vars.onLeave,v=u.targets,g,b;v&&v.length&&(f||m)&&(g=new Di,u.states.forEach(function(p){return g.add(p)}),b=g.compare(un.getState(v)),b.enter.length&&f&&f(b.enter),b.leave.length&&m&&m(b.leave))}),Uu(this._abs),this._run.forEach(function(u){return u()}),l=n.duration(),a=this._final.slice(0),n.add(function(){l<=n.time()&&(a.forEach(function(u){return u()}),Bu(t,"onComplete"))}),je=r;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Bu(this,"onStart"),n.restart(),this},e.loadState=function(t){t||(t=function(){return 0});var r=[];return this.actions.forEach(function(n){if(n.vars.loadState){var o,a=function l(u){u&&(n.targets=u),o=r.indexOf(l),~o&&(r.splice(o,1),r.length||t())};r.push(a),n.vars.loadState(a)}}),r.length||t(),this},e.setState=function(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},e.killConflicts=function(t){return this.state.interrupt(t),this._kill.forEach(function(r){return r.interrupt(t)}),this},e.run=function(t,r){var n=this;return this!==je&&(t||this.getState(r),this.loadState(function(){n._killed||(n.setState(),n.animate())})),this},e.clear=function(t){this.state.clear(),t||(this.actions.length=0)},e.getStateById=function(t){for(var r=this.actions.length,n;r--;)if(n=this.actions[r].getStateById(t),n)return n;return this.state.idLookup[t]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete dl[this.id]},s}(),un=function(){function s(){}return s.getState=function(i,t){var r=ol(i,t);return an&&an.states.push(r),t&&t.batch&&s.batch(t.batch).state.add(r),r},s.from=function(i,t){return t=t||{},"clearProps"in t||(t.clearProps=!0),cl(i,ol(t.targets||i.targets,{props:t.props||i.props,simple:t.simple,kill:!!t.kill}),t,-1)},s.to=function(i,t){return cl(i,ol(t.targets||i.targets,{props:t.props||i.props,simple:t.simple,kill:!!t.kill}),t,1)},s.fromTo=function(i,t,r){return cl(i,t,r)},s.fit=function(i,t,r){var n=r?ks(r,Xu):{},o=r||n,a=o.absolute,l=o.scale,u=o.getVars,f=o.props,m=o.runBackwards,v=o.onComplete,g=o.simple,b=r&&r.fitChild&&ln(r.fitChild),p=pl(t,f,g,i),_=pl(i,0,g,p),T=f?yo[f]:vo,E=Nt.context();return f&&Ku(n,p.props),cn(_,T),m&&("immediateRender"in n||(n.immediateRender=!0),n.onComplete=function(){go(_),v&&v.apply(this,arguments)}),a&&ml(_,p),n=Cs(_,p,l||b,f,b,n.duration||u?n:0),E&&!u&&E.add(function(){return function(){return go(_)}}),u?n:n.duration?Nt.to(_.element,n):null},s.makeAbsolute=function(i,t){return(i instanceof Di?i:new Di(i,t)).makeAbsolute()},s.batch=function(i){return i||(i="default"),dl[i]||(dl[i]=new _m(i))},s.killFlipsOf=function(i,t){(i instanceof Di?i.targets:Ms(i)).forEach(function(r){return r&&gl(r._flip,t!==!1?1:2)})},s.isFlipping=function(i){var t=s.getByTarget(i);return!!t&&t.isActive()},s.getByTarget=function(i){return(ln(i)||ho)._flip},s.getElementState=function(i,t){return new es(ln(i),t)},s.convertCoordinates=function(i,t,r){var n=Li(t,!0,!0).multiply(Li(i));return r?n.apply(r):n},s.register=function(i){if(Ir=typeof document<"u"&&document.body,Ir){Nt=i,lo(Ir),Ms=Nt.utils.toArray,ul=Nt.core.getStyleSaver;var t=Nt.utils.snap(.1);ur=function(n,o){return t(parseFloat(n)+o)}}},s}();un.version="3.12.5";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(un);function Ju(s,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function xm(s,e,i){return e&&Ju(s.prototype,e),i&&Ju(s,i),s}var Pt,_o,Sm,vi,Lr,Dr,Ps,td,ts,pn,id,dr,zi,rd,sd=function(){return Pt||typeof window<"u"&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},nd=1,As=[],Te=[],Ri=[],fn=Date.now,yl=function(e,i){return i},Tm=function(){var e=pn.core,i=e.bridge||{},t=e._scrollers,r=e._proxies;t.push.apply(t,Te),r.push.apply(r,Ri),Te=t,Ri=r,yl=function(o,a){return i[o](a)}},fr=function(e,i){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][i]},hn=function(e){return!!~id.indexOf(e)},Xt=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:r!==!1,capture:!!n})},qt=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},bo="scrollLeft",wo="scrollTop",vl=function(){return dr&&dr.isPressed||Te.cache++},xo=function(e,i){var t=function r(n){if(n||n===0){nd&&(vi.history.scrollRestoration="manual");var o=dr&&dr.isPressed;n=r.v=Math.round(n)||(dr&&dr.iOS?1:0),e(n),r.cacheID=Te.cache,o&&yl("ss",n)}else(i||Te.cache!==r.cacheID||yl("ref"))&&(r.cacheID=Te.cache,r.v=e());return r.v+r.offset};return t.offset=0,e&&t},Bt={s:bo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xo(function(s){return arguments.length?vi.scrollTo(s,pt.sc()):vi.pageXOffset||Lr[bo]||Dr[bo]||Ps[bo]||0})},pt={s:wo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bt,sc:xo(function(s){return arguments.length?vi.scrollTo(Bt.sc(),s):vi.pageYOffset||Lr[wo]||Dr[wo]||Ps[wo]||0})},Gt=function(e,i){return(i&&i._ctx&&i._ctx.selector||Pt.utils.toArray)(e)[0]||(typeof e=="string"&&Pt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pr=function(e,i){var t=i.s,r=i.sc;hn(e)&&(e=Lr.scrollingElement||Dr);var n=Te.indexOf(e),o=r===pt.sc?1:2;!~n&&(n=Te.push(e)-1),Te[n+o]||Xt(e,"scroll",vl);var a=Te[n+o],l=a||(Te[n+o]=xo(fr(e,t),!0)||(hn(e)?r:xo(function(u){return arguments.length?e[t]=u:e[t]})));return l.target=e,a||(l.smooth=Pt.getProperty(e,"scrollBehavior")==="smooth"),l},So=function(e,i,t){var r=e,n=e,o=fn(),a=o,l=i||50,u=Math.max(500,l*3),f=function(b,p){var _=fn();p||_-o>l?(n=r,r=b,a=o,o=_):t?r+=b:r=n+(b-n)/(_-a)*(o-a)},m=function(){n=r=t?0:r,a=o=0},v=function(b){var p=a,_=n,T=fn();return(b||b===0)&&b!==r&&f(b),o===a||T-a>u?0:(r+(t?_:-_))/((t?T:o)-p)*1e3};return{update:f,reset:m,getVelocity:v}},dn=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ed=function(e){var i=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(t)?i:t},od=function(){pn=Pt.core.globals().ScrollTrigger,pn&&pn.core&&Tm()},ad=function(e){return Pt=e||sd(),!_o&&Pt&&typeof document<"u"&&document.body&&(vi=window,Lr=document,Dr=Lr.documentElement,Ps=Lr.body,id=[vi,Lr,Dr,Ps],Sm=Pt.utils.clamp,rd=Pt.core.context||function(){},ts="onpointerenter"in Ps?"pointer":"mouse",td=lt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zi=lt.eventTypes=("ontouchstart"in Dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return nd=0},500),od(),_o=1),_o};Bt.op=pt;Te.cache=0;var lt=function(){function s(i){this.init(i)}var e=s.prototype;return e.init=function(t){_o||ad(Pt)||console.warn("Please gsap.registerPlugin(Observer)"),pn||od();var r=t.tolerance,n=t.dragMinimum,o=t.type,a=t.target,l=t.lineHeight,u=t.debounce,f=t.preventDefault,m=t.onStop,v=t.onStopDelay,g=t.ignore,b=t.wheelSpeed,p=t.event,_=t.onDragStart,T=t.onDragEnd,E=t.onDrag,k=t.onPress,C=t.onRelease,M=t.onRight,I=t.onLeft,z=t.onUp,N=t.onDown,w=t.onChangeX,P=t.onChangeY,F=t.onChange,R=t.onToggleX,W=t.onToggleY,Y=t.onHover,q=t.onHoverEnd,ee=t.onMove,V=t.ignoreCheck,me=t.isNormalizer,ge=t.onGestureStart,L=t.onGestureEnd,ce=t.onWheel,G=t.onEnable,xe=t.onDisable,Z=t.onClick,oe=t.scrollSpeed,ne=t.capture,we=t.allowClicks,ue=t.lockAxis,Be=t.onLockAxis;this.target=a=Gt(a)||Dr,this.vars=t,g&&(g=Pt.utils.toArray(g)),r=r||1e-9,n=n||0,b=b||1,oe=oe||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(vi.getComputedStyle(Ps).lineHeight)||22);var ke,de,Qe,se,Q,ze,Xe,O=this,$e=0,kt=0,Fe=t.passive||!f,ie=pr(a,Bt),ti=pr(a,pt),Fi=ie(),Zi=ti(),ct=~o.indexOf("touch")&&!~o.indexOf("pointer")&&zi[0]==="pointerdown",di=hn(a),Ge=a.ownerDocument||Lr,wt=[0,0,0],Vt=[0,0,0],_t=0,Ji=function(){return _t=fn()},Ye=function(le,Oe){return(O.event=le)&&g&&~g.indexOf(le.target)||Oe&&ct&&le.pointerType!=="touch"||V&&V(le,Oe)},Br=function(){O._vx.reset(),O._vy.reset(),de.pause(),m&&m(O)},Vi=function(){var le=O.deltaX=ed(wt),Oe=O.deltaY=ed(Vt),K=Math.abs(le)>=r,pe=Math.abs(Oe)>=r;F&&(K||pe)&&F(O,le,Oe,wt,Vt),K&&(M&&O.deltaX>0&&M(O),I&&O.deltaX<0&&I(O),w&&w(O),R&&O.deltaX<0!=$e<0&&R(O),$e=O.deltaX,wt[0]=wt[1]=wt[2]=0),pe&&(N&&O.deltaY>0&&N(O),z&&O.deltaY<0&&z(O),P&&P(O),W&&O.deltaY<0!=kt<0&&W(O),kt=O.deltaY,Vt[0]=Vt[1]=Vt[2]=0),(se||Qe)&&(ee&&ee(O),Qe&&(E(O),Qe=!1),se=!1),ze&&!(ze=!1)&&Be&&Be(O),Q&&(ce(O),Q=!1),ke=0},vr=function(le,Oe,K){wt[K]+=le,Vt[K]+=Oe,O._vx.update(le),O._vy.update(Oe),u?ke||(ke=requestAnimationFrame(Vi)):Vi()},er=function(le,Oe){ue&&!Xe&&(O.axis=Xe=Math.abs(le)>Math.abs(Oe)?"x":"y",ze=!0),Xe!=="y"&&(wt[2]+=le,O._vx.update(le,!0)),Xe!=="x"&&(Vt[2]+=Oe,O._vy.update(Oe,!0)),u?ke||(ke=requestAnimationFrame(Vi)):Vi()},Ve=function(le){if(!Ye(le,1)){le=dn(le,f);var Oe=le.clientX,K=le.clientY,pe=Oe-O.x,ae=K-O.y,ye=O.isDragging;O.x=Oe,O.y=K,(ye||Math.abs(O.startX-Oe)>=n||Math.abs(O.startY-K)>=n)&&(E&&(Qe=!0),ye||(O.isDragging=!0),er(pe,ae),ye||_&&_(O))}},pi=O.onPress=function(U){Ye(U,1)||U&&U.button||(O.axis=Xe=null,de.pause(),O.isPressed=!0,U=dn(U),$e=kt=0,O.startX=O.x=U.clientX,O.startY=O.y=U.clientY,O._vx.reset(),O._vy.reset(),Xt(me?a:Ge,zi[1],Ve,Fe,!0),O.deltaX=O.deltaY=0,k&&k(O))},be=O.onRelease=function(U){if(!Ye(U,1)){qt(me?a:Ge,zi[1],Ve,!0);var le=!isNaN(O.y-O.startY),Oe=O.isDragging,K=Oe&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),pe=dn(U);!K&&le&&(O._vx.reset(),O._vy.reset(),f&&we&&Pt.delayedCall(.08,function(){if(fn()-_t>300&&!U.defaultPrevented){if(U.target.click)U.target.click();else if(Ge.createEvent){var ae=Ge.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,vi,1,pe.screenX,pe.screenY,pe.clientX,pe.clientY,!1,!1,!1,!1,0,null),U.target.dispatchEvent(ae)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,m&&Oe&&!me&&de.restart(!0),T&&Oe&&T(O),C&&C(O,K)}},Hi=function(le){return le.touches&&le.touches.length>1&&(O.isGesturing=!0)&&ge(le,O.isDragging)},ii=function(){return(O.isGesturing=!1)||L(O)},fi=function(le){if(!Ye(le)){var Oe=ie(),K=ti();vr((Oe-Fi)*oe,(K-Zi)*oe,1),Fi=Oe,Zi=K,m&&de.restart(!0)}},hi=function(le){if(!Ye(le)){le=dn(le,f),ce&&(Q=!0);var Oe=(le.deltaMode===1?l:le.deltaMode===2?vi.innerHeight:1)*b;vr(le.deltaX*Oe,le.deltaY*Oe,0),m&&!me&&de.restart(!0)}},xi=function(le){if(!Ye(le)){var Oe=le.clientX,K=le.clientY,pe=Oe-O.x,ae=K-O.y;O.x=Oe,O.y=K,se=!0,m&&de.restart(!0),(pe||ae)&&er(pe,ae)}},X=function(le){O.event=le,Y(O)},Si=function(le){O.event=le,q(O)},br=function(le){return Ye(le)||dn(le,f)&&Z(O)};de=O._dc=Pt.delayedCall(v||.25,Br).pause(),O.deltaX=O.deltaY=0,O._vx=So(0,50,!0),O._vy=So(0,50,!0),O.scrollX=ie,O.scrollY=ti,O.isDragging=O.isGesturing=O.isPressed=!1,rd(this),O.enable=function(U){return O.isEnabled||(Xt(di?Ge:a,"scroll",vl),o.indexOf("scroll")>=0&&Xt(di?Ge:a,"scroll",fi,Fe,ne),o.indexOf("wheel")>=0&&Xt(a,"wheel",hi,Fe,ne),(o.indexOf("touch")>=0&&td||o.indexOf("pointer")>=0)&&(Xt(a,zi[0],pi,Fe,ne),Xt(Ge,zi[2],be),Xt(Ge,zi[3],be),we&&Xt(a,"click",Ji,!0,!0),Z&&Xt(a,"click",br),ge&&Xt(Ge,"gesturestart",Hi),L&&Xt(Ge,"gestureend",ii),Y&&Xt(a,ts+"enter",X),q&&Xt(a,ts+"leave",Si),ee&&Xt(a,ts+"move",xi)),O.isEnabled=!0,U&&U.type&&pi(U),G&&G(O)),O},O.disable=function(){O.isEnabled&&(As.filter(function(U){return U!==O&&hn(U.target)}).length||qt(di?Ge:a,"scroll",vl),O.isPressed&&(O._vx.reset(),O._vy.reset(),qt(me?a:Ge,zi[1],Ve,!0)),qt(di?Ge:a,"scroll",fi,ne),qt(a,"wheel",hi,ne),qt(a,zi[0],pi,ne),qt(Ge,zi[2],be),qt(Ge,zi[3],be),qt(a,"click",Ji,!0),qt(a,"click",br),qt(Ge,"gesturestart",Hi),qt(Ge,"gestureend",ii),qt(a,ts+"enter",X),qt(a,ts+"leave",Si),qt(a,ts+"move",xi),O.isEnabled=O.isPressed=O.isDragging=!1,xe&&xe(O))},O.kill=O.revert=function(){O.disable();var U=As.indexOf(O);U>=0&&As.splice(U,1),dr===O&&(dr=0)},As.push(O),me&&hn(a)&&(dr=O),O.enable(p)},xm(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();lt.version="3.12.5";lt.create=function(s){return new lt(s)};lt.register=ad;lt.getAll=function(){return As.slice()};lt.getById=function(s){return As.filter(function(e){return e.vars.id===s})[0]};sd()&&Pt.registerPlugin(lt);var te,Ls,Pe,et,Ni,Ue,Ed,$o,Cn,_n,gn,To,$t,Yo,kl,Ut,ld,cd,Ds,kd,bl,Cd,jt,Cl,Md,Ad,zr,Ml,Ll,zs,Dl,Fo,Al,wl,Eo=1,Ft=Date.now,_l=Ft(),Pi=0,yn=0,ud=function(e,i,t){var r=wi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},dd=function(e,i){return i&&(!wi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Em=function s(){return yn&&requestAnimationFrame(s)},pd=function(){return Yo=1},fd=function(){return Yo=0},ji=function(e){return e},vn=function(e){return Math.round(e*1e5)/1e5||0},Pd=function(){return typeof window<"u"},Od=function(){return te||Pd()&&(te=window.gsap)&&te.registerPlugin&&te},as=function(e){return!!~Ed.indexOf(e)},Id=function(e){return(e==="Height"?Dl:Pe["inner"+e])||Ni["client"+e]||Ue["client"+e]},Ld=function(e){return fr(e,"getBoundingClientRect")||(as(e)?function(){return Bo.width=Pe.innerWidth,Bo.height=Dl,Bo}:function(){return hr(e)})},km=function(e,i,t){var r=t.d,n=t.d2,o=t.a;return(o=fr(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(i?Id(n):e["client"+n])||0}},Cm=function(e,i){return!i||~Ri.indexOf(e)?Ld(e):function(){return Bo}},Ui=function(e,i){var t=i.s,r=i.d2,n=i.d,o=i.a;return Math.max(0,(t="scroll"+r)&&(o=fr(e,t))?o()-Ld(e)()[n]:as(e)?(Ni[t]||Ue[t])-Id(r):e[t]-e["offset"+r])},ko=function(e,i){for(var t=0;t<Ds.length;t+=3)(!i||~i.indexOf(Ds[t+1]))&&e(Ds[t],Ds[t+1],Ds[t+2])},wi=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},bn=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},mn=function(e,i,t){return e&&e.progress(i?0:1)&&t&&e.pause()},xl=function(e,i){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return i(e)}):i(e);t&&t.totalTime&&(e.callbackAnimation=t)}},Os=Math.abs,Dd="left",zd="top",zl="right",Rl="bottom",ss="width",ns="height",xn="Right",Sn="Left",Tn="Top",En="Bottom",ft="padding",Mi="margin",Ns="Width",Nl="Height",bt="px",Ai=function(e){return Pe.getComputedStyle(e)},Mm=function(e){var i=Ai(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},hd=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},hr=function(e,i){var t=i&&Ai(e)[kl]!=="matrix(1, 0, 0, 1, 0, 0)"&&te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return t&&t.progress(0).kill(),r},Vo=function(e,i){var t=i.d2;return e["offset"+t]||e["client"+t]||0},Rd=function(e){var i=[],t=e.labels,r=e.duration(),n;for(n in t)i.push(t[n]/r);return i},Am=function(e){return function(i){return te.utils.snap(Rd(e),i)}},Bl=function(e){var i=te.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return t?function(r,n,o){o===void 0&&(o=.001);var a;if(!n)return i(r);if(n>0){for(r-=o,a=0;a<t.length;a++)if(t[a]>=r)return t[a];return t[a-1]}else for(a=t.length,r+=o;a--;)if(t[a]<=r)return t[a];return t[0]}:function(r,n,o){o===void 0&&(o=.001);var a=i(r);return!n||Math.abs(a-r)<o||a-r<0==n<0?a:i(n<0?r-e:r+e)}},Pm=function(e){return function(i,t){return Bl(Rd(e))(i,t.direction)}},Co=function(e,i,t,r){return t.split(",").forEach(function(n){return e(i,n,r)})},Et=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:!r,capture:!!n})},Tt=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},Mo=function(e,i,t){t=t&&t.wheelHandler,t&&(e(i,"wheel",t),e(i,"touchmove",t))},md={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ao={toggleActions:"play",anticipatePin:0},Ho={top:0,left:0,center:.5,bottom:1,right:1},Do=function(e,i){if(wi(e)){var t=e.indexOf("="),r=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(r*=i/100),e=e.substr(0,t-1)),e=r+(e in Ho?Ho[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Po=function(e,i,t,r,n,o,a,l){var u=n.startColor,f=n.endColor,m=n.fontSize,v=n.indent,g=n.fontWeight,b=et.createElement("div"),p=as(t)||fr(t,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,T=p?Ue:t,E=e.indexOf("start")!==-1,k=E?u:f,C="border-color:"+k+";font-size:"+m+";color:"+k+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(C+=(r===pt?zl:Rl)+":"+(o+parseFloat(v))+"px;"),a&&(C+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),b._isStart=E,b.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),b.style.cssText=C,b.innerText=i||i===0?e+"-"+i:e,T.children[0]?T.insertBefore(b,T.children[0]):T.appendChild(b),b._offset=b["offset"+r.op.d2],zo(b,0,r,E),b},zo=function(e,i,t,r){var n={display:"block"},o=t[r?"os2":"p2"],a=t[r?"p2":"os2"];e._isFlipped=r,n[t.a+"Percent"]=r?-100:0,n[t.a]=r?"1px":0,n["border"+o+Ns]=1,n["border"+a+Ns]=0,n[t.p]=i+"px",te.set(e,n)},Ee=[],Pl={},Mn,gd=function(){return Ft()-Pi>34&&(Mn||(Mn=requestAnimationFrame(mr)))},Is=function(){(!jt||!jt.isPressed||jt.startX>Ue.clientWidth)&&(Te.cache++,jt?Mn||(Mn=requestAnimationFrame(mr)):mr(),Pi||cs("scrollStart"),Pi=Ft())},Sl=function(){Ad=Pe.innerWidth,Md=Pe.innerHeight},wn=function(){Te.cache++,!$t&&!Cd&&!et.fullscreenElement&&!et.webkitFullscreenElement&&(!Cl||Ad!==Pe.innerWidth||Math.abs(Pe.innerHeight-Md)>Pe.innerHeight*.25)&&$o.restart(!0)},ls={},Om=[],Nd=function s(){return Tt(_e,"scrollEnd",s)||rs(!0)},cs=function(e){return ls[e]&&ls[e].map(function(i){return i()})||Om},bi=[],Bd=function(e){for(var i=0;i<bi.length;i+=5)(!e||bi[i+4]&&bi[i+4].query===e)&&(bi[i].style.cssText=bi[i+1],bi[i].getBBox&&bi[i].setAttribute("transform",bi[i+2]||""),bi[i+3].uncache=1)},$l=function(e,i){var t;for(Ut=0;Ut<Ee.length;Ut++)t=Ee[Ut],t&&(!i||t._ctx===i)&&(e?t.kill(1):t.revert(!0,!0));Fo=!0,i&&Bd(i),i||cs("revert")},$d=function(e,i){Te.cache++,(i||!Kt)&&Te.forEach(function(t){return Qt(t)&&t.cacheID++&&(t.rec=0)}),wi(e)&&(Pe.history.scrollRestoration=Ll=e)},Kt,os=0,yd,Im=function(){if(yd!==os){var e=yd=os;requestAnimationFrame(function(){return e===os&&rs(!0)})}},Fd=function(){Ue.appendChild(zs),Dl=!jt&&zs.offsetHeight||Pe.innerHeight,Ue.removeChild(zs)},vd=function(e){return Cn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},rs=function(e,i){if(Pi&&!e&&!Fo){Et(_e,"scrollEnd",Nd);return}Fd(),Kt=_e.isRefreshing=!0,Te.forEach(function(r){return Qt(r)&&++r.cacheID&&(r.rec=r())});var t=cs("refreshInit");kd&&_e.sort(),i||$l(),Te.forEach(function(r){Qt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ee.slice(0).forEach(function(r){return r.refresh()}),Fo=!1,Ee.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-o),r.refresh()}}),Al=1,vd(!0),Ee.forEach(function(r){var n=Ui(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>n,a=r._startClamp&&r.start>=n;(o||a)&&r.setPositions(a?n-1:r.start,o?Math.max(a?n:r.start+1,n):r.end,!0)}),vd(!1),Al=0,t.forEach(function(r){return r&&r.render&&r.render(-1)}),Te.forEach(function(r){Qt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),$d(Ll,1),$o.pause(),os++,Kt=2,mr(2),Ee.forEach(function(r){return Qt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Kt=_e.isRefreshing=!1,cs("refresh")},Ol=0,Ro=1,kn,mr=function(e){if(e===2||!Kt&&!Fo){_e.isUpdating=!0,kn&&kn.update(0);var i=Ee.length,t=Ft(),r=t-_l>=50,n=i&&Ee[0].scroll();if(Ro=Ol>n?-1:1,Kt||(Ol=n),r&&(Pi&&!Yo&&t-Pi>200&&(Pi=0,cs("scrollEnd")),gn=_l,_l=t),Ro<0){for(Ut=i;Ut-- >0;)Ee[Ut]&&Ee[Ut].update(0,r);Ro=1}else for(Ut=0;Ut<i;Ut++)Ee[Ut]&&Ee[Ut].update(0,r);_e.isUpdating=!1}Mn=0},Il=[Dd,zd,Rl,zl,Mi+En,Mi+xn,Mi+Tn,Mi+Sn,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],No=Il.concat([ss,ns,"boxSizing","max"+Ns,"max"+Nl,"position",Mi,ft,ft+Tn,ft+xn,ft+En,ft+Sn]),Lm=function(e,i,t){Rs(t);var r=e._gsap;if(r.spacerIsNative)Rs(r.spacerState);else if(e._gsap.swappedIn){var n=i.parentNode;n&&(n.insertBefore(e,i),n.removeChild(i))}e._gsap.swappedIn=!1},Tl=function(e,i,t,r){if(!e._gsap.swappedIn){for(var n=Il.length,o=i.style,a=e.style,l;n--;)l=Il[n],o[l]=t[l];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),a[Rl]=a[zl]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ss]=Vo(e,Bt)+bt,o[ns]=Vo(e,pt)+bt,o[ft]=a[Mi]=a[zd]=a[Dd]="0",Rs(r),a[ss]=a["max"+Ns]=t[ss],a[ns]=a["max"+Nl]=t[ns],a[ft]=t[ft],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Dm=/([A-Z])/g,Rs=function(e){if(e){var i=e.t.style,t=e.length,r=0,n,o;for((e.t._gsap||te.core.getCache(e.t)).uncache=1;r<t;r+=2)o=e[r+1],n=e[r],o?i[n]=o:i[n]&&i.removeProperty(n.replace(Dm,"-$1").toLowerCase())}},Oo=function(e){for(var i=No.length,t=e.style,r=[],n=0;n<i;n++)r.push(No[n],t[No[n]]);return r.t=e,r},zm=function(e,i,t){for(var r=[],n=e.length,o=t?8:0,a;o<n;o+=2)a=e[o],r.push(a,a in i?i[a]:e[o+1]);return r.t=e.t,r},Bo={left:0,top:0},bd=function(e,i,t,r,n,o,a,l,u,f,m,v,g,b){Qt(e)&&(e=e(l)),wi(e)&&e.substr(0,3)==="max"&&(e=v+(e.charAt(4)==="="?Do("0"+e.substr(3),t):0));var p=g?g.time():0,_,T,E;if(g&&g.seek(0),isNaN(e)||(e=+e),bn(e))g&&(e=te.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,v,e)),a&&zo(a,t,r,!0);else{Qt(i)&&(i=i(l));var k=(e||"0").split(" "),C,M,I,z;E=Gt(i,l)||Ue,C=hr(E)||{},(!C||!C.left&&!C.top)&&Ai(E).display==="none"&&(z=E.style.display,E.style.display="block",C=hr(E),z?E.style.display=z:E.style.removeProperty("display")),M=Do(k[0],C[r.d]),I=Do(k[1]||"0",t),e=C[r.p]-u[r.p]-f+M+n-I,a&&zo(a,I,r,t-I<20||a._isStart&&I>20),t-=t-I}if(b&&(l[b]=e||-.001,e<0&&(e=0)),o){var N=e+t,w=o._isStart;_="scroll"+r.d2,zo(o,N,r,w&&N>20||!w&&(m?Math.max(Ue[_],Ni[_]):o.parentNode[_])<=N+1),m&&(u=hr(a),m&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+bt))}return g&&E&&(_=hr(E),g.seek(v),T=hr(E),g._caScrollDist=_[r.p]-T[r.p],e=e/g._caScrollDist*v),g&&g.seek(p),g?e:Math.round(e)},Rm=/(webkit|moz|length|cssText|inset)/i,wd=function(e,i,t,r){if(e.parentNode!==i){var n=e.style,o,a;if(i===Ue){e._stOrig=n.cssText,a=Ai(e);for(o in a)!+o&&!Rm.test(o)&&a[o]&&typeof n[o]=="string"&&o!=="0"&&(n[o]=a[o]);n.top=t,n.left=r}else n.cssText=e._stOrig;te.core.getCache(e).uncache=1,i.appendChild(e)}},Vd=function(e,i,t){var r=i,n=r;return function(o){var a=Math.round(e());return a!==r&&a!==n&&Math.abs(a-r)>3&&Math.abs(a-n)>3&&(o=a,t&&t()),n=r,r=o,o}},Io=function(e,i,t){var r={};r[i.p]="+="+t,te.set(e,r)},_d=function(e,i){var t=pr(e,i),r="_scroll"+i.p2,n=function o(a,l,u,f,m){var v=o.tween,g=l.onComplete,b={};u=u||t();var p=Vd(t,u,function(){v.kill(),o.tween=0});return m=f&&m||0,f=f||a-u,v&&v.kill(),l[r]=a,l.inherit=!1,l.modifiers=b,b[r]=function(){return p(u+f*v.ratio+m*v.ratio*v.ratio)},l.onUpdate=function(){Te.cache++,o.tween&&mr()},l.onComplete=function(){o.tween=0,g&&g.call(v)},v=o.tween=te.to(e,l),v};return e[r]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Et(e,"wheel",t.wheelHandler),_e.isTouch&&Et(e,"touchmove",t.wheelHandler),n},_e=function(){function s(i,t){Ls||s.register(te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ml(this),this.init(i,t)}var e=s.prototype;return e.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yn){this.update=this.refresh=this.kill=ji;return}t=hd(wi(t)||bn(t)||t.nodeType?{trigger:t}:t,Ao);var n=t,o=n.onUpdate,a=n.toggleClass,l=n.id,u=n.onToggle,f=n.onRefresh,m=n.scrub,v=n.trigger,g=n.pin,b=n.pinSpacing,p=n.invalidateOnRefresh,_=n.anticipatePin,T=n.onScrubComplete,E=n.onSnapComplete,k=n.once,C=n.snap,M=n.pinReparent,I=n.pinSpacer,z=n.containerAnimation,N=n.fastScrollEnd,w=n.preventOverlaps,P=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Bt:pt,F=!m&&m!==0,R=Gt(t.scroller||Pe),W=te.core.getCache(R),Y=as(R),q=("pinType"in t?t.pinType:fr(R,"pinType")||Y&&"fixed")==="fixed",ee=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],V=F&&t.toggleActions.split(" "),me="markers"in t?t.markers:Ao.markers,ge=Y?0:parseFloat(Ai(R)["border"+P.p2+Ns])||0,L=this,ce=t.onRefreshInit&&function(){return t.onRefreshInit(L)},G=km(R,Y,P),xe=Cm(R,Y),Z=0,oe=0,ne=0,we=pr(R,P),ue,Be,ke,de,Qe,se,Q,ze,Xe,O,$e,kt,Fe,ie,ti,Fi,Zi,ct,di,Ge,wt,Vt,_t,Ji,Ye,Br,Vi,vr,er,Ve,pi,be,Hi,ii,fi,hi,xi,X,Si;if(L._startClamp=L._endClamp=!1,L._dir=P,_*=45,L.scroller=R,L.scroll=z?z.time.bind(z):we,de=we(),L.vars=t,r=r||t.animation,"refreshPriority"in t&&(kd=1,t.refreshPriority===-9999&&(kn=L)),W.tweenScroll=W.tweenScroll||{top:_d(R,pt),left:_d(R,Bt)},L.tweenTo=ue=W.tweenScroll[P.p],L.scrubDuration=function(K){Hi=bn(K)&&K,Hi?be?be.duration(K):be=te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Hi,paused:!0,onComplete:function(){return T&&T(L)}}):(be&&be.progress(1).kill(),be=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&t.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(m),Ve=0,l||(l=r.vars.id)),C&&((!is(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in Ue.style&&te.set(Y?[Ue,Ni]:R,{scrollBehavior:"auto"}),Te.forEach(function(K){return Qt(K)&&K.target===(Y?et.scrollingElement||Ni:R)&&(K.smooth=!1)}),ke=Qt(C.snapTo)?C.snapTo:C.snapTo==="labels"?Am(r):C.snapTo==="labelsDirectional"?Pm(r):C.directional!==!1?function(K,pe){return Bl(C.snapTo)(K,Ft()-oe<500?0:pe.direction)}:te.utils.snap(C.snapTo),ii=C.duration||{min:.1,max:2},ii=is(ii)?_n(ii.min,ii.max):_n(ii,ii),fi=te.delayedCall(C.delay||Hi/2||.1,function(){var K=we(),pe=Ft()-oe<500,ae=ue.tween;if((pe||Math.abs(L.getVelocity())<10)&&!ae&&!Yo&&Z!==K){var ye=(K-se)/ie,tt=r&&!F?r.totalProgress():ye,Ce=pe?0:(tt-pi)/(Ft()-gn)*1e3||0,De=te.utils.clamp(-ye,1-ye,Os(Ce/2)*Ce/.185),ut=ye+(C.inertia===!1?0:De),fe,We,Re=C,Ht=Re.onStart,Ne=Re.onInterrupt,Ct=Re.onComplete;if(fe=ke(ut,L),bn(fe)||(fe=ut),We=Math.round(se+fe*ie),K<=Q&&K>=se&&We!==K){if(ae&&!ae._initted&&ae.data<=Os(We-K))return;C.inertia===!1&&(De=fe-ye),ue(We,{duration:ii(Os(Math.max(Os(ut-tt),Os(fe-tt))*.185/Ce/.05||0)),ease:C.ease||"power3",data:Os(We-K),onInterrupt:function(){return fi.restart(!0)&&Ne&&Ne(L)},onComplete:function(){L.update(),Z=we(),r&&(be?be.resetTo("totalProgress",fe,r._tTime/r._tDur):r.progress(fe)),Ve=pi=r&&!F?r.totalProgress():L.progress,E&&E(L),Ct&&Ct(L)}},K,De*ie,We-K-De*ie),Ht&&Ht(L,ue.tween)}}else L.isActive&&Z!==K&&fi.restart(!0)}).pause()),l&&(Pl[l]=L),v=L.trigger=Gt(v||g!==!0&&g),Si=v&&v._gsap&&v._gsap.stRevert,Si&&(Si=Si(L)),g=g===!0?v:Gt(g),wi(a)&&(a={targets:v,className:a}),g&&(b===!1||b===Mi||(b=!b&&g.parentNode&&g.parentNode.style&&Ai(g.parentNode).display==="flex"?!1:ft),L.pin=g,Be=te.core.getCache(g),Be.spacer?ti=Be.pinState:(I&&(I=Gt(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Be.spacerIsNative=!!I,I&&(Be.spacerState=Oo(I))),Be.spacer=ct=I||et.createElement("div"),ct.classList.add("pin-spacer"),l&&ct.classList.add("pin-spacer-"+l),Be.pinState=ti=Oo(g)),t.force3D!==!1&&te.set(g,{force3D:!0}),L.spacer=ct=Be.spacer,er=Ai(g),Ji=er[b+P.os2],Ge=te.getProperty(g),wt=te.quickSetter(g,P.a,bt),Tl(g,ct,er),Zi=Oo(g)),me){kt=is(me)?hd(me,md):md,O=Po("scroller-start",l,R,P,kt,0),$e=Po("scroller-end",l,R,P,kt,0,O),di=O["offset"+P.op.d2];var br=Gt(fr(R,"content")||R);ze=this.markerStart=Po("start",l,br,P,kt,di,0,z),Xe=this.markerEnd=Po("end",l,br,P,kt,di,0,z),z&&(X=te.quickSetter([ze,Xe],P.a,bt)),!q&&!(Ri.length&&fr(R,"fixedMarkers")===!0)&&(Mm(Y?Ue:R),te.set([O,$e],{force3D:!0}),Br=te.quickSetter(O,P.a,bt),vr=te.quickSetter($e,P.a,bt))}if(z){var U=z.vars.onUpdate,le=z.vars.onUpdateParams;z.eventCallback("onUpdate",function(){L.update(0,0,1),U&&U.apply(z,le||[])})}if(L.previous=function(){return Ee[Ee.indexOf(L)-1]},L.next=function(){return Ee[Ee.indexOf(L)+1]},L.revert=function(K,pe){if(!pe)return L.kill(!0);var ae=K!==!1||!L.enabled,ye=$t;ae!==L.isReverted&&(ae&&(hi=Math.max(we(),L.scroll.rec||0),ne=L.progress,xi=r&&r.progress()),ze&&[ze,Xe,O,$e].forEach(function(tt){return tt.style.display=ae?"none":"block"}),ae&&($t=L,L.update(ae)),g&&(!M||!L.isActive)&&(ae?Lm(g,ct,ti):Tl(g,ct,Ai(g),Ye)),ae||L.update(ae),$t=ye,L.isReverted=ae)},L.refresh=function(K,pe,ae,ye){if(!(($t||!L.enabled)&&!pe)){if(g&&K&&Pi){Et(s,"scrollEnd",Nd);return}!Kt&&ce&&ce(L),$t=L,ue.tween&&!ae&&(ue.tween.kill(),ue.tween=0),be&&be.pause(),p&&r&&r.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var tt=G(),Ce=xe(),De=z?z.duration():Ui(R,P),ut=ie<=.01,fe=0,We=ye||0,Re=is(ae)?ae.end:t.end,Ht=t.endTrigger||v,Ne=is(ae)?ae.start:t.start||(t.start===0||!v?0:g?"0 0":"0 100%"),Ct=L.pinnedContainer=t.pinnedContainer&&Gt(t.pinnedContainer,L),It=v&&Math.max(0,Ee.indexOf(L))||0,mt=It,it,gt,tr,$r,xt,rt,ri,Fr,wr,_r,c,h,d;for(me&&is(ae)&&(h=te.getProperty(O,P.p),d=te.getProperty($e,P.p));mt--;)rt=Ee[mt],rt.end||rt.refresh(0,1)||($t=L),ri=rt.pin,ri&&(ri===v||ri===g||ri===Ct)&&!rt.isReverted&&(_r||(_r=[]),_r.unshift(rt),rt.revert(!0,!0)),rt!==Ee[mt]&&(It--,mt--);for(Qt(Ne)&&(Ne=Ne(L)),Ne=ud(Ne,"start",L),se=bd(Ne,v,tt,P,we(),ze,O,L,Ce,ge,q,De,z,L._startClamp&&"_startClamp")||(g?-.001:0),Qt(Re)&&(Re=Re(L)),wi(Re)&&!Re.indexOf("+=")&&(~Re.indexOf(" ")?Re=(wi(Ne)?Ne.split(" ")[0]:"")+Re:(fe=Do(Re.substr(2),tt),Re=wi(Ne)?Ne:(z?te.utils.mapRange(0,z.duration(),z.scrollTrigger.start,z.scrollTrigger.end,se):se)+fe,Ht=v)),Re=ud(Re,"end",L),Q=Math.max(se,bd(Re||(Ht?"100% 0":De),Ht,tt,P,we()+fe,Xe,$e,L,Ce,ge,q,De,z,L._endClamp&&"_endClamp"))||-.001,fe=0,mt=It;mt--;)rt=Ee[mt],ri=rt.pin,ri&&rt.start-rt._pinPush<=se&&!z&&rt.end>0&&(it=rt.end-(L._startClamp?Math.max(0,rt.start):rt.start),(ri===v&&rt.start-rt._pinPush<se||ri===Ct)&&isNaN(Ne)&&(fe+=it*(1-rt.progress)),ri===g&&(We+=it));if(se+=fe,Q+=fe,L._startClamp&&(L._startClamp+=fe),L._endClamp&&!Kt&&(L._endClamp=Q||-.001,Q=Math.min(Q,Ui(R,P))),ie=Q-se||(se-=.01)&&.001,ut&&(ne=te.utils.clamp(0,1,te.utils.normalize(se,Q,hi))),L._pinPush=We,ze&&fe&&(it={},it[P.a]="+="+fe,Ct&&(it[P.p]="-="+we()),te.set([ze,Xe],it)),g&&!(Al&&L.end>=Ui(R,P)))it=Ai(g),$r=P===pt,tr=we(),Vt=parseFloat(Ge(P.a))+We,!De&&Q>1&&(c=(Y?et.scrollingElement||Ni:R).style,c={style:c,value:c["overflow"+P.a.toUpperCase()]},Y&&Ai(Ue)["overflow"+P.a.toUpperCase()]!=="scroll"&&(c.style["overflow"+P.a.toUpperCase()]="scroll")),Tl(g,ct,it),Zi=Oo(g),gt=hr(g,!0),Fr=q&&pr(R,$r?Bt:pt)(),b?(Ye=[b+P.os2,ie+We+bt],Ye.t=ct,mt=b===ft?Vo(g,P)+ie+We:0,mt&&(Ye.push(P.d,mt+bt),ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=mt+bt)),Rs(Ye),Ct&&Ee.forEach(function(y){y.pin===Ct&&y.vars.pinSpacing!==!1&&(y._subPinOffset=!0)}),q&&we(hi)):(mt=Vo(g,P),mt&&ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=mt+bt)),q&&(xt={top:gt.top+($r?tr-se:Fr)+bt,left:gt.left+($r?Fr:tr-se)+bt,boxSizing:"border-box",position:"fixed"},xt[ss]=xt["max"+Ns]=Math.ceil(gt.width)+bt,xt[ns]=xt["max"+Nl]=Math.ceil(gt.height)+bt,xt[Mi]=xt[Mi+Tn]=xt[Mi+xn]=xt[Mi+En]=xt[Mi+Sn]="0",xt[ft]=it[ft],xt[ft+Tn]=it[ft+Tn],xt[ft+xn]=it[ft+xn],xt[ft+En]=it[ft+En],xt[ft+Sn]=it[ft+Sn],Fi=zm(ti,xt,M),Kt&&we(0)),r?(wr=r._initted,bl(1),r.render(r.duration(),!0,!0),_t=Ge(P.a)-Vt+ie+We,Vi=Math.abs(ie-_t)>1,q&&Vi&&Fi.splice(Fi.length-2,2),r.render(0,!0,!0),wr||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),bl(0)):_t=ie,c&&(c.value?c.style["overflow"+P.a.toUpperCase()]=c.value:c.style.removeProperty("overflow-"+P.a));else if(v&&we()&&!z)for(gt=v.parentNode;gt&&gt!==Ue;)gt._pinOffset&&(se-=gt._pinOffset,Q-=gt._pinOffset),gt=gt.parentNode;_r&&_r.forEach(function(y){return y.revert(!1,!0)}),L.start=se,L.end=Q,de=Qe=Kt?hi:we(),!z&&!Kt&&(de<hi&&we(hi),L.scroll.rec=0),L.revert(!1,!0),oe=Ft(),fi&&(Z=-1,fi.restart(!0)),$t=0,r&&F&&(r._initted||xi)&&r.progress()!==xi&&r.progress(xi||0,!0).render(r.time(),!0,!0),(ut||ne!==L.progress||z||p)&&(r&&!F&&r.totalProgress(z&&se<-.001&&!ne?te.utils.normalize(se,Q,0):ne,!0),L.progress=ut||(de-se)/ie===ne?0:ne),g&&b&&(ct._pinOffset=Math.round(L.progress*_t)),be&&be.invalidate(),isNaN(h)||(h-=te.getProperty(O,P.p),d-=te.getProperty($e,P.p),Io(O,P,h),Io(ze,P,h-(ye||0)),Io($e,P,d),Io(Xe,P,d-(ye||0))),ut&&!Kt&&L.update(),f&&!Kt&&!Fe&&(Fe=!0,f(L),Fe=!1)}},L.getVelocity=function(){return(we()-Qe)/(Ft()-gn)*1e3||0},L.endAnimation=function(){mn(L.callbackAnimation),r&&(be?be.progress(1):r.paused()?F||mn(r,L.direction<0,1):mn(r,r.reversed()))},L.labelToScroll=function(K){return r&&r.labels&&(se||L.refresh()||se)+r.labels[K]/r.duration()*ie||0},L.getTrailing=function(K){var pe=Ee.indexOf(L),ae=L.direction>0?Ee.slice(0,pe).reverse():Ee.slice(pe+1);return(wi(K)?ae.filter(function(ye){return ye.vars.preventOverlaps===K}):ae).filter(function(ye){return L.direction>0?ye.end<=se:ye.start>=Q})},L.update=function(K,pe,ae){if(!(z&&!ae&&!K)){var ye=Kt===!0?hi:L.scroll(),tt=K?0:(ye-se)/ie,Ce=tt<0?0:tt>1?1:tt||0,De=L.progress,ut,fe,We,Re,Ht,Ne,Ct,It;if(pe&&(Qe=de,de=z?we():ye,C&&(pi=Ve,Ve=r&&!F?r.totalProgress():Ce)),_&&g&&!$t&&!Eo&&Pi&&(!Ce&&se<ye+(ye-Qe)/(Ft()-gn)*_?Ce=1e-4:Ce===1&&Q>ye+(ye-Qe)/(Ft()-gn)*_&&(Ce=.9999)),Ce!==De&&L.enabled){if(ut=L.isActive=!!Ce&&Ce<1,fe=!!De&&De<1,Ne=ut!==fe,Ht=Ne||!!Ce!=!!De,L.direction=Ce>De?1:-1,L.progress=Ce,Ht&&!$t&&(We=Ce&&!De?0:Ce===1?1:De===1?2:3,F&&(Re=!Ne&&V[We+1]!=="none"&&V[We+1]||V[We],It=r&&(Re==="complete"||Re==="reset"||Re in r))),w&&(Ne||It)&&(It||m||!r)&&(Qt(w)?w(L):L.getTrailing(w).forEach(function(tr){return tr.endAnimation()})),F||(be&&!$t&&!Eo?(be._dp._time-be._start!==be._time&&be.render(be._dp._time-be._start),be.resetTo?be.resetTo("totalProgress",Ce,r._tTime/r._tDur):(be.vars.totalProgress=Ce,be.invalidate().restart())):r&&r.totalProgress(Ce,!!($t&&(oe||K)))),g){if(K&&b&&(ct.style[b+P.os2]=Ji),!q)wt(vn(Vt+_t*Ce));else if(Ht){if(Ct=!K&&Ce>De&&Q+1>ye&&ye+1>=Ui(R,P),M)if(!K&&(ut||Ct)){var mt=hr(g,!0),it=ye-se;wd(g,Ue,mt.top+(P===pt?it:0)+bt,mt.left+(P===pt?0:it)+bt)}else wd(g,ct);Rs(ut||Ct?Fi:Zi),Vi&&Ce<1&&ut||wt(Vt+(Ce===1&&!Ct?_t:0))}}C&&!ue.tween&&!$t&&!Eo&&fi.restart(!0),a&&(Ne||k&&Ce&&(Ce<1||!wl))&&Cn(a.targets).forEach(function(tr){return tr.classList[ut||k?"add":"remove"](a.className)}),o&&!F&&!K&&o(L),Ht&&!$t?(F&&(It&&(Re==="complete"?r.pause().totalProgress(1):Re==="reset"?r.restart(!0).pause():Re==="restart"?r.restart(!0):r[Re]()),o&&o(L)),(Ne||!wl)&&(u&&Ne&&xl(L,u),ee[We]&&xl(L,ee[We]),k&&(Ce===1?L.kill(!1,1):ee[We]=0),Ne||(We=Ce===1?1:3,ee[We]&&xl(L,ee[We]))),N&&!ut&&Math.abs(L.getVelocity())>(bn(N)?N:2500)&&(mn(L.callbackAnimation),be?be.progress(1):mn(r,Re==="reverse"?1:!Ce,1))):F&&o&&!$t&&o(L)}if(vr){var gt=z?ye/z.duration()*(z._caScrollDist||0):ye;Br(gt+(O._isFlipped?1:0)),vr(gt)}X&&X(-ye/z.duration()*(z._caScrollDist||0))}},L.enable=function(K,pe){L.enabled||(L.enabled=!0,Et(R,"resize",wn),Y||Et(R,"scroll",Is),ce&&Et(s,"refreshInit",ce),K!==!1&&(L.progress=ne=0,de=Qe=Z=we()),pe!==!1&&L.refresh())},L.getTween=function(K){return K&&ue?ue.tween:be},L.setPositions=function(K,pe,ae,ye){if(z){var tt=z.scrollTrigger,Ce=z.duration(),De=tt.end-tt.start;K=tt.start+De*K/Ce,pe=tt.start+De*pe/Ce}L.refresh(!1,!1,{start:dd(K,ae&&!!L._startClamp),end:dd(pe,ae&&!!L._endClamp)},ye),L.update()},L.adjustPinSpacing=function(K){if(Ye&&K){var pe=Ye.indexOf(P.d)+1;Ye[pe]=parseFloat(Ye[pe])+K+bt,Ye[1]=parseFloat(Ye[1])+K+bt,Rs(Ye)}},L.disable=function(K,pe){if(L.enabled&&(K!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,pe||be&&be.pause(),hi=0,Be&&(Be.uncache=1),ce&&Tt(s,"refreshInit",ce),fi&&(fi.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!Y)){for(var ae=Ee.length;ae--;)if(Ee[ae].scroller===R&&Ee[ae]!==L)return;Tt(R,"resize",wn),Y||Tt(R,"scroll",Is)}},L.kill=function(K,pe){L.disable(K,pe),be&&!pe&&be.kill(),l&&delete Pl[l];var ae=Ee.indexOf(L);ae>=0&&Ee.splice(ae,1),ae===Ut&&Ro>0&&Ut--,ae=0,Ee.forEach(function(ye){return ye.scroller===L.scroller&&(ae=1)}),ae||Kt||(L.scroll.rec=0),r&&(r.scrollTrigger=null,K&&r.revert({kill:!1}),pe||r.kill()),ze&&[ze,Xe,O,$e].forEach(function(ye){return ye.parentNode&&ye.parentNode.removeChild(ye)}),kn===L&&(kn=0),g&&(Be&&(Be.uncache=1),ae=0,Ee.forEach(function(ye){return ye.pin===g&&ae++}),ae||(Be.spacer=0)),t.onKill&&t.onKill(L)},Ee.push(L),L.enable(!1,!1),Si&&Si(L),r&&r.add&&!ie){var Oe=L.update;L.update=function(){L.update=Oe,se||Q||L.refresh()},te.delayedCall(.01,L.update),ie=.01,se=Q=0}else L.refresh();g&&Im()},s.register=function(t){return Ls||(te=t||Od(),Pd()&&window.document&&s.enable(),Ls=yn),Ls},s.defaults=function(t){if(t)for(var r in t)Ao[r]=t[r];return Ao},s.disable=function(t,r){yn=0,Ee.forEach(function(o){return o[r?"kill":"disable"](t)}),Tt(Pe,"wheel",Is),Tt(et,"scroll",Is),clearInterval(To),Tt(et,"touchcancel",ji),Tt(Ue,"touchstart",ji),Co(Tt,et,"pointerdown,touchstart,mousedown",pd),Co(Tt,et,"pointerup,touchend,mouseup",fd),$o.kill(),ko(Tt);for(var n=0;n<Te.length;n+=3)Mo(Tt,Te[n],Te[n+1]),Mo(Tt,Te[n],Te[n+2])},s.enable=function(){if(Pe=window,et=document,Ni=et.documentElement,Ue=et.body,te&&(Cn=te.utils.toArray,_n=te.utils.clamp,Ml=te.core.context||ji,bl=te.core.suppressOverwrites||ji,Ll=Pe.history.scrollRestoration||"auto",Ol=Pe.pageYOffset,te.core.globals("ScrollTrigger",s),Ue)){yn=1,zs=document.createElement("div"),zs.style.height="100vh",zs.style.position="absolute",Fd(),Em(),lt.register(te),s.isTouch=lt.isTouch,zr=lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cl=lt.isTouch===1,Et(Pe,"wheel",Is),Ed=[Pe,et,Ni,Ue],te.matchMedia?(s.matchMedia=function(l){var u=te.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},te.addEventListener("matchMediaInit",function(){return $l()}),te.addEventListener("matchMediaRevert",function(){return Bd()}),te.addEventListener("matchMedia",function(){rs(0,1),cs("matchMedia")}),te.matchMedia("(orientation: portrait)",function(){return Sl(),Sl})):console.warn("Requires GSAP 3.11.0 or later"),Sl(),Et(et,"scroll",Is);var t=Ue.style,r=t.borderTopStyle,n=te.core.Animation.prototype,o,a;for(n.revert||Object.defineProperty(n,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",o=hr(Ue),pt.m=Math.round(o.top+pt.sc())||0,Bt.m=Math.round(o.left+Bt.sc())||0,r?t.borderTopStyle=r:t.removeProperty("border-top-style"),To=setInterval(gd,250),te.delayedCall(.5,function(){return Eo=0}),Et(et,"touchcancel",ji),Et(Ue,"touchstart",ji),Co(Et,et,"pointerdown,touchstart,mousedown",pd),Co(Et,et,"pointerup,touchend,mouseup",fd),kl=te.utils.checkPrefix("transform"),No.push(kl),Ls=Ft(),$o=te.delayedCall(.2,rs).pause(),Ds=[et,"visibilitychange",function(){var l=Pe.innerWidth,u=Pe.innerHeight;et.hidden?(ld=l,cd=u):(ld!==l||cd!==u)&&wn()},et,"DOMContentLoaded",rs,Pe,"load",rs,Pe,"resize",wn],ko(Et),Ee.forEach(function(l){return l.enable(0,1)}),a=0;a<Te.length;a+=3)Mo(Tt,Te[a],Te[a+1]),Mo(Tt,Te[a],Te[a+2])}},s.config=function(t){"limitCallbacks"in t&&(wl=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(To)||(To=r)&&setInterval(gd,r),"ignoreMobileResize"in t&&(Cl=s.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(ko(Tt)||ko(Et,t.autoRefreshEvents||"none"),Cd=(t.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(t,r){var n=Gt(t),o=Te.indexOf(n),a=as(n);~o&&Te.splice(o,a?6:2),r&&(a?Ri.unshift(Pe,r,Ue,r,Ni,r):Ri.unshift(n,r))},s.clearMatchMedia=function(t){Ee.forEach(function(r){return r._ctx&&r._ctx.query===t&&r._ctx.kill(!0,!0)})},s.isInViewport=function(t,r,n){var o=(wi(t)?Gt(t):t).getBoundingClientRect(),a=o[n?ss:ns]*r||0;return n?o.right-a>0&&o.left+a<Pe.innerWidth:o.bottom-a>0&&o.top+a<Pe.innerHeight},s.positionInViewport=function(t,r,n){wi(t)&&(t=Gt(t));var o=t.getBoundingClientRect(),a=o[n?ss:ns],l=r==null?a/2:r in Ho?Ho[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return n?(o.left+l)/Pe.innerWidth:(o.top+l)/Pe.innerHeight},s.killAll=function(t){if(Ee.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var r=ls.killAll||[];ls={},r.forEach(function(n){return n()})}},s}();_e.version="3.12.5";_e.saveStyles=function(s){return s?Cn(s).forEach(function(e){if(e&&e.style){var i=bi.indexOf(e);i>=0&&bi.splice(i,5),bi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),te.core.getCache(e),Ml())}}):bi};_e.revert=function(s,e){return $l(!s,e)};_e.create=function(s,e){return new _e(s,e)};_e.refresh=function(s){return s?wn():(Ls||_e.register())&&rs(!0)};_e.update=function(s){return++Te.cache&&mr(s===!0?2:0)};_e.clearScrollMemory=$d;_e.maxScroll=function(s,e){return Ui(s,e?Bt:pt)};_e.getScrollFunc=function(s,e){return pr(Gt(s),e?Bt:pt)};_e.getById=function(s){return Pl[s]};_e.getAll=function(){return Ee.filter(function(s){return s.vars.id!=="ScrollSmoother"})};_e.isScrolling=function(){return!!Pi};_e.snapDirectional=Bl;_e.addEventListener=function(s,e){var i=ls[s]||(ls[s]=[]);~i.indexOf(e)||i.push(e)};_e.removeEventListener=function(s,e){var i=ls[s],t=i&&i.indexOf(e);t>=0&&i.splice(t,1)};_e.batch=function(s,e){var i=[],t={},r=e.interval||.016,n=e.batchMax||1e9,o=function(u,f){var m=[],v=[],g=te.delayedCall(r,function(){f(m,v),m=[],v=[]}).pause();return function(b){m.length||g.restart(!0),m.push(b.trigger),v.push(b),n<=m.length&&g.progress(1)}},a;for(a in e)t[a]=a.substr(0,2)==="on"&&Qt(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Qt(n)&&(n=n(),Et(_e,"refresh",function(){return n=e.batchMax()})),Cn(s).forEach(function(l){var u={};for(a in t)u[a]=t[a];u.trigger=l,i.push(_e.create(u))}),i};var xd=function(e,i,t,r){return i>r?e(r):i<0&&e(0),t>r?(r-i)/(t-i):t<0?i/(i-t):1},El=function s(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(lt.isTouch?" pinch-zoom":""):"none",e===Ni&&s(Ue,i)},Lo={auto:1,scroll:1},Nm=function(e){var i=e.event,t=e.target,r=e.axis,n=(i.changedTouches?i.changedTouches[0]:i).target,o=n._gsap||te.core.getCache(n),a=Ft(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;n&&n!==Ue&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Lo[(l=Ai(n)).overflowY]||Lo[l.overflowX]));)n=n.parentNode;o._isScroll=n&&n!==t&&!as(n)&&(Lo[(l=Ai(n)).overflowY]||Lo[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Hd=function(e,i,t,r){return lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Nm,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return t&&Et(et,lt.eventTypes[0],Td,!1,!0)},onDisable:function(){return Tt(et,lt.eventTypes[0],Td,!0)}})},Bm=/(input|label|select|textarea)/i,Sd,Td=function(e){var i=Bm.test(e.target.tagName);(i||Sd)&&(e._gsapAllow=!0,Sd=i)},$m=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,t=i.normalizeScrollX,r=i.momentum,n=i.allowNestedScroll,o=i.onRelease,a,l,u=Gt(e.target)||Ni,f=te.core.globals().ScrollSmoother,m=f&&f.get(),v=zr&&(e.content&&Gt(e.content)||m&&e.content!==!1&&!m.smooth()&&m.content()),g=pr(u,pt),b=pr(u,Bt),p=1,_=(lt.isTouch&&Pe.visualViewport?Pe.visualViewport.scale*Pe.visualViewport.width:Pe.outerWidth)/Pe.innerWidth,T=0,E=Qt(r)?function(){return r(a)}:function(){return r||2.8},k,C,M=Hd(u,e.type,!0,n),I=function(){return C=!1},z=ji,N=ji,w=function(){l=Ui(u,pt),N=_n(zr?1:0,l),t&&(z=_n(0,Ui(u,Bt))),k=os},P=function(){v._gsap.y=vn(parseFloat(v._gsap.y)+g.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},F=function(){if(C){requestAnimationFrame(I);var me=vn(a.deltaY/2),ge=N(g.v-me);if(v&&ge!==g.v+g.offset){g.offset=ge-g.v;var L=vn((parseFloat(v&&v._gsap.y)||0)-g.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",v._gsap.y=L+"px",g.cacheID=Te.cache,mr()}return!0}g.offset&&P(),C=!0},R,W,Y,q,ee=function(){w(),R.isActive()&&R.vars.scrollY>l&&(g()>l?R.progress(1)&&g(l):R.resetTo("scrollY",l))};return v&&te.set(v,{y:"+=0"}),e.ignoreCheck=function(V){return zr&&V.type==="touchmove"&&F(V)||p>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){C=!1;var V=p;p=vn((Pe.visualViewport&&Pe.visualViewport.scale||1)/_),R.pause(),V!==p&&El(u,p>1.01?!0:t?!1:"x"),W=b(),Y=g(),w(),k=os},e.onRelease=e.onGestureStart=function(V,me){if(g.offset&&P(),!me)q.restart(!0);else{Te.cache++;var ge=E(),L,ce;t&&(L=b(),ce=L+ge*.05*-V.velocityX/.227,ge*=xd(b,L,ce,Ui(u,Bt)),R.vars.scrollX=z(ce)),L=g(),ce=L+ge*.05*-V.velocityY/.227,ge*=xd(g,L,ce,Ui(u,pt)),R.vars.scrollY=N(ce),R.invalidate().duration(ge).play(.01),(zr&&R.vars.scrollY>=l||L>=l-1)&&te.to({},{onUpdate:ee,duration:ge})}o&&o(V)},e.onWheel=function(){R._ts&&R.pause(),Ft()-T>1e3&&(k=0,T=Ft())},e.onChange=function(V,me,ge,L,ce){if(os!==k&&w(),me&&t&&b(z(L[2]===me?W+(V.startX-V.x):b()+me-L[1])),ge){g.offset&&P();var G=ce[2]===ge,xe=G?Y+V.startY-V.y:g()+ge-ce[1],Z=N(xe);G&&xe!==Z&&(Y+=Z-xe),g(Z)}(ge||me)&&mr()},e.onEnable=function(){El(u,t?!1:"x"),_e.addEventListener("refresh",ee),Et(Pe,"resize",ee),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=b.smooth=!1),M.enable()},e.onDisable=function(){El(u,!0),Tt(Pe,"resize",ee),_e.removeEventListener("refresh",ee),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new lt(e),a.iOS=zr,zr&&!g()&&g(1),zr&&te.ticker.add(ji),q=a._dc,R=te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vd(g,g(),function(){return R.pause()})},onUpdate:mr,onComplete:q.vars.onComplete}),a};_e.sort=function(s){return Ee.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+e.start-(i.start+(i.vars.refreshPriority||0)*-1e6)})};_e.observe=function(s){return new lt(s)};_e.normalizeScroll=function(s){if(typeof s>"u")return jt;if(s===!0&&jt)return jt.enable();if(s===!1){jt&&jt.kill(),jt=s;return}var e=s instanceof lt?s:$m(s);return jt&&jt.target===e.target&&jt.kill(),as(e.target)&&(jt=e),e};_e.core={_getVelocityProp:So,_inputObserver:Hd,_scrollers:Te,_proxies:Ri,bridge:{ss:function(){Pi||cs("scrollStart"),Pi=Ft()},ref:function(){return $t}}};Od()&&te.registerPlugin(_e);var Yd=sa(Hl(),1);function Wd(){let s=Array.from(document.querySelectorAll("video")).map(e=>{let i=new Yd.default(e,{clickToPlay:!0,controls:["volume","fullscreen","play-large","play","pip"],loop:{active:!0},hideControls:!0,controlsTimeout:2e3,tooltips:{controls:!1,seek:!1}});if(i.elements.controls){i.elements.controls.style.display="none",i.on("play",()=>{i.elements.controls.style.display="flex",s.forEach(r=>r!==i&&r.pause())});let t=()=>{i.elements.controls.style.display="none"};i.on("pause",t),i.on("ended",t)}return i})}function qd(){window.onload=()=>["utm_source","utm_medium","utm_campaign"].forEach(s=>document.getElementById(s).value=new URLSearchParams(location.search).get(s.toLowerCase())||""),document.querySelector('[data-js="input"]').oninput=s=>s.target.value=s.target.value.replace(/\D/g,"").replace(/^(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1")}var Yl=function(){return Yl=Object.assign||function(e){for(var i,t=1,r=arguments.length;t<r;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e},Yl.apply(this,arguments)};function Gd(s,e,i){return Math.max(s,Math.min(e,i))}var Wl=class{advance(e){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=function(r,n,o,a){return function(u,f,m){return(1-m)*u+m*f}(r,n,1-Math.exp(-o*a))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=e;let t=Gd(0,this.currentTime/this.duration,1);i=t>=1;let r=i?1:this.easing(t);this.value=this.from+(this.to-this.from)*r}i&&this.stop(),this.onUpdate?.(this.value,i)}stop(){this.isRunning=!1}fromTo(e,i,{lerp:t=.1,duration:r=1,easing:n=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=i,this.lerp=t,this.duration=r,this.easing=n,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}},ql=class{constructor({wrapper:e,content:i,autoResize:t=!0,debounce:r=250}={}){rr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});rr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});rr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=i,t&&(this.debouncedResize=function(o,a){let l;return function(){let u=arguments,f=this;clearTimeout(l),l=setTimeout(function(){o.apply(f,u)},a)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wo=class{constructor(){this.events={}}emit(e,...i){let t=this.events[e]||[];for(let r=0,n=t.length;r<n;r++)t[r](...i)}on(e,i){return this.events[e]?.push(i)||(this.events[e]=[i]),()=>{this.events[e]=this.events[e]?.filter(t=>i!==t)}}off(e,i){this.events[e]=this.events[e]?.filter(t=>i!==t)}destroy(){this.events={}}},Xd=100/6,Xl=class{constructor(e,{wheelMultiplier:i=1,touchMultiplier:t=1}){rr(this,"onTouchStart",e=>{let{clientX:i,clientY:t}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});rr(this,"onTouchMove",e=>{let{clientX:i,clientY:t}=e.targetTouches?e.targetTouches[0]:e,r=-(i-this.touchStart.x)*this.touchMultiplier,n=-(t-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=t,this.lastDelta={x:r,y:n},this.emitter.emit("scroll",{deltaX:r,deltaY:n,event:e})});rr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});rr(this,"onWheel",e=>{let{deltaX:i,deltaY:t,deltaMode:r}=e;i*=r===1?Xd:r===2?this.windowWidth:1,t*=r===1?Xd:r===2?this.windowHeight:1,i*=this.wheelMultiplier,t*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:t,event:e})});rr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=i,this.touchMultiplier=t,this.touchStart={x:null,y:null},this.emitter=new Wo,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},jd=function(){function s(e){var i=e===void 0?{}:e,t=i.wrapper,r=t===void 0?window:t,n=i.content,o=n===void 0?document.documentElement:n,a=i.wheelEventsTarget,l=a===void 0?r:a,u=i.eventsTarget,f=u===void 0?l:u,m=i.smoothWheel,v=m===void 0||m,g=i.syncTouch,b=g!==void 0&&g,p=i.syncTouchLerp,_=p===void 0?.075:p,T=i.touchInertiaMultiplier,E=T===void 0?35:T,k=i.duration,C=i.easing,M=C===void 0?function(xe){return Math.min(1,1.001-Math.pow(2,-10*xe))}:C,I=i.lerp,z=I===void 0?!k&&.1:I,N=i.infinite,w=N!==void 0&&N,P=i.orientation,F=P===void 0?"vertical":P,R=i.gestureOrientation,W=R===void 0?"vertical":R,Y=i.touchMultiplier,q=Y===void 0?1:Y,ee=i.wheelMultiplier,V=ee===void 0?1:ee,me=i.autoResize,ge=me===void 0||me,L=i.__experimental__naiveDimensions,ce=L!==void 0&&L,G=this;this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=function(xe){var Z=xe.deltaX,oe=xe.deltaY,ne=xe.event;if(!ne.ctrlKey){var we=ne.type.includes("touch"),ue=ne.type.includes("wheel");if(G.options.syncTouch&&we&&ne.type==="touchstart"&&!G.isStopped&&!G.isLocked)G.reset();else{var Be=Z===0&&oe===0,ke=G.options.gestureOrientation==="vertical"&&oe===0||G.options.gestureOrientation==="horizontal"&&Z===0;if(!Be&&!ke){var de=ne.composedPath();if(!(de=de.slice(0,de.indexOf(G.rootElement))).find(function(ze){var Xe,O,$e,kt,Fe;return((Xe=ze.hasAttribute)===null||Xe===void 0?void 0:Xe.call(ze,"data-lenis-prevent"))||we&&((O=ze.hasAttribute)===null||O===void 0?void 0:O.call(ze,"data-lenis-prevent-touch"))||ue&&(($e=ze.hasAttribute)===null||$e===void 0?void 0:$e.call(ze,"data-lenis-prevent-wheel"))||((kt=ze.classList)===null||kt===void 0?void 0:kt.contains("lenis"))&&!(!((Fe=ze.classList)===null||Fe===void 0)&&Fe.contains("lenis-stopped"))}))if(G.isStopped||G.isLocked)ne.preventDefault();else{if(G.isSmooth=G.options.syncTouch&&we||G.options.smoothWheel&&ue,!G.isSmooth)return G.isScrolling=!1,void G.animate.stop();ne.preventDefault();var Qe=oe;G.options.gestureOrientation==="both"?Qe=Math.abs(oe)>Math.abs(Z)?oe:Z:G.options.gestureOrientation==="horizontal"&&(Qe=Z);var se=we&&G.options.syncTouch,Q=we&&ne.type==="touchend"&&Math.abs(Qe)>5;Q&&(Qe=G.velocity*G.options.touchInertiaMultiplier),G.scrollTo(G.targetScroll+Qe,Yl({programmatic:!1},se?{lerp:Q?G.options.syncTouchLerp:1}:{lerp:G.options.lerp,duration:G.options.duration,easing:G.options.easing}))}}}}},this.onNativeScroll=function(){if(!G.__preventNextScrollEvent&&!G.isScrolling){var xe=G.animatedScroll;G.animatedScroll=G.targetScroll=G.actualScroll,G.velocity=0,G.direction=Math.sign(G.animatedScroll-xe),G.emit()}},window.lenisVersion="1.0.45",r!==document.documentElement&&r!==document.body||(r=window),this.options={wrapper:r,content:o,wheelEventsTarget:l,eventsTarget:f,smoothWheel:v,syncTouch:b,syncTouchLerp:_,touchInertiaMultiplier:E,duration:k,easing:M,lerp:z,infinite:w,gestureOrientation:W,orientation:F,touchMultiplier:q,wheelMultiplier:V,autoResize:ge,__experimental__naiveDimensions:ce},this.animate=new Wl,this.emitter=new Wo,this.dimensions=new ql({wrapper:r,content:o,autoResize:ge}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=b||v,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Xl(f,{touchMultiplier:q,wheelMultiplier:V}),this.virtualScroll.on("scroll",this.onVirtualScroll)}return s.prototype.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)},s.prototype.on=function(e,i){return this.emitter.on(e,i)},s.prototype.off=function(e,i){return this.emitter.off(e,i)},s.prototype.setScroll=function(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e},s.prototype.resize=function(){this.dimensions.resize()},s.prototype.emit=function(){this.emitter.emit("scroll",this)},s.prototype.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()},s.prototype.start=function(){this.isStopped&&(this.isStopped=!1,this.reset())},s.prototype.stop=function(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())},s.prototype.raf=function(e){var i=e-(this.time||e);this.time=e,this.animate.advance(.001*i)},s.prototype.scrollTo=function(e,i){var t=this,r=i===void 0?{}:i,n=r.offset,o=n===void 0?0:n,a=r.immediate,l=a!==void 0&&a,u=r.lock,f=u!==void 0&&u,m=r.duration,v=m===void 0?this.options.duration:m,g=r.easing,b=g===void 0?this.options.easing:g,p=r.lerp,_=p===void 0?!v&&this.options.lerp:p,T=r.onComplete,E=r.force,k=E!==void 0&&E,C=r.programmatic,M=C===void 0||C;if(!this.isStopped&&!this.isLocked||k){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var I=void 0;if(typeof e=="string"?I=document.querySelector(e):e?.nodeType&&(I=e),I){if(this.options.wrapper!==window){var z=this.options.wrapper.getBoundingClientRect();o-=this.isHorizontal?z.left:z.top}var N=I.getBoundingClientRect();e=(this.isHorizontal?N.left:N.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=o,e=Math.round(e),this.options.infinite?M&&(this.targetScroll=this.animatedScroll=this.scroll):e=Gd(0,e,this.limit),l)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(T==null||T(this));if(!M){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:v,easing:b,lerp:_,onStart:function(){f&&(t.isLocked=!0),t.isScrolling=!0},onUpdate:function(w,P){t.isScrolling=!0,t.velocity=w-t.animatedScroll,t.direction=Math.sign(t.velocity),t.animatedScroll=w,t.setScroll(t.scroll),M&&(t.targetScroll=w),P||t.emit(),P&&(t.reset(),t.emit(),T?.(t),t.__preventNextScrollEvent=!0,requestAnimationFrame(function(){delete t.__preventNextScrollEvent}))}})}}},Object.defineProperty(s.prototype,"rootElement",{get:function(){return this.options.wrapper===window?document.documentElement:this.options.wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"limit",{get:function(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isHorizontal",{get:function(){return this.options.orientation==="horizontal"},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"actualScroll",{get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"scroll",{get:function(){return this.options.infinite?function(i,t){return(i%t+t)%t}(this.animatedScroll,this.limit):this.animatedScroll},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"progress",{get:function(){return this.limit===0?1:this.scroll/this.limit},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isSmooth",{get:function(){return this.__isSmooth},set:function(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isScrolling",{get:function(){return this.__isScrolling},set:function(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isStopped",{get:function(){return this.__isStopped},set:function(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isLocked",{get:function(){return this.__isLocked},set:function(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"className",{get:function(){var e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e},enumerable:!1,configurable:!0}),s.prototype.toggleClassName=function(e,i){this.rootElement.classList.toggle(e,i),this.emitter.emit("className change",this)},s}();function Gl(){return Gl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(s[t]=i[t])}return s},Gl.apply(this,arguments)}var qo=class{constructor({scrollElements:e,rootMargin:i="-1px -1px -1px -1px",IORaf:t}){this.scrollElements=void 0,this.rootMargin=void 0,this.IORaf=void 0,this.observer=void 0,this.scrollElements=e,this.rootMargin=i,this.IORaf=t,this._init()}_init(){this.observer=new IntersectionObserver(e=>{e.forEach(i=>{let t=this.scrollElements.find(r=>r.$el===i.target);i.isIntersecting?(t&&(t.isAlreadyIntersected=!0),this._setInview(i)):t&&t.isAlreadyIntersected&&this._setOutOfView(i)})},{rootMargin:this.rootMargin});for(let e of this.scrollElements)this.observe(e.$el)}destroy(){this.observer.disconnect()}observe(e){e&&this.observer.observe(e)}unobserve(e){e&&this.observer.unobserve(e)}_setInview(e){let i=this.scrollElements.find(t=>t.$el===e.target);this.IORaf&&i?.setInteractivityOn(),!this.IORaf&&i?.setInview()}_setOutOfView(e){let i=this.scrollElements.find(t=>t.$el===e.target);this.IORaf&&i?.setInteractivityOff(),!this.IORaf&&i?.setOutOfView(),i!=null&&i.attributes.scrollRepeat||this.IORaf||this.unobserve(e.target)}};function Ud(s,e,i,t,r){return i+((r-s)/(e-s)*(t-i)||0)}function Kd(s,e){return s.reduce((i,t)=>Math.abs(t-e)<Math.abs(i-e)?t:i)}var jl=class{constructor({$el:e,id:i,modularInstance:t,subscribeElementUpdateFn:r,unsubscribeElementUpdateFn:n,needRaf:o,scrollOrientation:a}){var l,u,f,m,v;this.$el=void 0,this.id=void 0,this.needRaf=void 0,this.attributes=void 0,this.scrollOrientation=void 0,this.isAlreadyIntersected=void 0,this.intersection=void 0,this.metrics=void 0,this.currentScroll=void 0,this.translateValue=void 0,this.progress=void 0,this.lastProgress=void 0,this.modularInstance=void 0,this.progressModularModules=void 0,this.isInview=void 0,this.isInteractive=void 0,this.isInFold=void 0,this.isFirstResize=void 0,this.subscribeElementUpdateFn=void 0,this.unsubscribeElementUpdateFn=void 0,this.$el=e,this.id=i,this.needRaf=o,this.scrollOrientation=a,this.modularInstance=t,this.subscribeElementUpdateFn=r,this.unsubscribeElementUpdateFn=n,this.attributes={scrollClass:(l=this.$el.dataset.scrollClass)!=null?l:"is-inview",scrollOffset:(u=this.$el.dataset.scrollOffset)!=null?u:"0,0",scrollPosition:(f=this.$el.dataset.scrollPosition)!=null?f:"start,end",scrollModuleProgress:this.$el.dataset.scrollModuleProgress!=null,scrollCssProgress:this.$el.dataset.scrollCssProgress!=null,scrollEventProgress:(m=this.$el.dataset.scrollEventProgress)!=null?m:null,scrollSpeed:this.$el.dataset.scrollSpeed!=null?parseFloat(this.$el.dataset.scrollSpeed):null,scrollRepeat:this.$el.dataset.scrollRepeat!=null,scrollCall:(v=this.$el.dataset.scrollCall)!=null?v:null,scrollCallSelf:this.$el.dataset.scrollCallSelf!=null,scrollIgnoreFold:this.$el.dataset.scrollIgnoreFold!=null,scrollEnableTouchSpeed:this.$el.dataset.scrollEnableTouchSpeed!=null},this.intersection={start:0,end:0},this.metrics={offsetStart:0,offsetEnd:0,bcr:{}},this.currentScroll=this.scrollOrientation==="vertical"?window.scrollY:window.scrollX,this.translateValue=0,this.progress=0,this.lastProgress=null,this.progressModularModules=[],this.isInview=!1,this.isInteractive=!1,this.isAlreadyIntersected=!1,this.isInFold=!1,this.isFirstResize=!0,this._init()}_init(){this.needRaf&&(this.modularInstance&&this.attributes.scrollModuleProgress&&this._getProgressModularModules(),this._resize())}onResize({currentScroll:e}){this.currentScroll=e,this._resize()}onRender({currentScroll:e,smooth:i}){let t=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth;if(this.currentScroll=e,this._computeProgress(),this.attributes.scrollSpeed&&!isNaN(this.attributes.scrollSpeed))if(this.attributes.scrollEnableTouchSpeed||i){if(this.isInFold){let r=Math.max(0,this.progress);this.translateValue=r*t*this.attributes.scrollSpeed*-1}else{let r=Ud(0,1,-1,1,this.progress);this.translateValue=r*t*this.attributes.scrollSpeed*-1}this.$el.style.transform=this.scrollOrientation==="vertical"?`translate3d(0, ${this.translateValue}px, 0)`:`translate3d(${this.translateValue}px, 0, 0)`}else this.translateValue&&(this.$el.style.transform="translate3d(0, 0, 0)"),this.translateValue=0}setInview(){if(this.isInview)return;this.isInview=!0,this.$el.classList.add(this.attributes.scrollClass);let e=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("enter",e)}setOutOfView(){if(!this.isInview||!this.attributes.scrollRepeat)return;this.isInview=!1,this.$el.classList.remove(this.attributes.scrollClass);let e=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("leave",e)}setInteractivityOn(){this.isInteractive||(this.isInteractive=!0,this.subscribeElementUpdateFn(this))}setInteractivityOff(){this.isInteractive&&(this.isInteractive=!1,this.unsubscribeElementUpdateFn(this),this.lastProgress!=null&&this._computeProgress(Kd([0,1],this.lastProgress)))}_resize(){this.metrics.bcr=this.$el.getBoundingClientRect(),this._computeMetrics(),this._computeIntersection(),this.isFirstResize&&(this.isFirstResize=!1,this.isInFold&&this.setInview())}_computeMetrics(){let{top:e,left:i,height:t,width:r}=this.metrics.bcr,n=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth,o=this.scrollOrientation==="vertical"?t:r;this.metrics.offsetStart=this.currentScroll+(this.scrollOrientation==="vertical"?e:i)-this.translateValue,this.metrics.offsetEnd=this.metrics.offsetStart+o,this.isInFold=this.metrics.offsetStart<n&&!this.attributes.scrollIgnoreFold}_computeIntersection(){let e=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth,i=this.scrollOrientation==="vertical"?this.metrics.bcr.height:this.metrics.bcr.width,t=this.attributes.scrollOffset.split(","),r=t[0]!=null?t[0].trim():"0",n=t[1]!=null?t[1].trim():"0",o=this.attributes.scrollPosition.split(","),a=o[0]!=null?o[0].trim():"start",l=o[1]!=null?o[1].trim():"end",u=r.includes("%")?e*parseInt(r.replace("%","").trim())*.01:parseInt(r),f=n.includes("%")?e*parseInt(n.replace("%","").trim())*.01:parseInt(n);switch(this.isInFold&&(a="fold"),a){case"start":default:this.intersection.start=this.metrics.offsetStart-e+u;break;case"middle":this.intersection.start=this.metrics.offsetStart-e+u+.5*i;break;case"end":this.intersection.start=this.metrics.offsetStart-e+u+i;break;case"fold":this.intersection.start=0}switch(l){case"start":this.intersection.end=this.metrics.offsetStart-f;break;case"middle":this.intersection.end=this.metrics.offsetStart-f+.5*i;break;default:this.intersection.end=this.metrics.offsetStart-f+i}if(this.intersection.end<=this.intersection.start)switch(l){case"start":default:this.intersection.end=this.intersection.start+1;break;case"middle":this.intersection.end=this.intersection.start+.5*i;break;case"end":this.intersection.end=this.intersection.start+i}}_computeProgress(e){let i=e??((t=Ud(this.intersection.start,this.intersection.end,0,1,this.currentScroll))<0?0:t>1?1:t);var t;if(this.progress=i,i!=this.lastProgress){if(this.lastProgress=i,this.attributes.scrollCssProgress&&this._setCssProgress(i),this.attributes.scrollEventProgress&&this._setCustomEventProgress(i),this.attributes.scrollModuleProgress)for(let r of this.progressModularModules)this.modularInstance&&this.modularInstance.call("onScrollProgress",i,r.moduleName,r.moduleId);i>0&&i<1&&this.setInview(),i===0&&this.setOutOfView(),i===1&&this.setOutOfView()}}_setCssProgress(e=0){this.$el.style.setProperty("--progress",e.toString())}_setCustomEventProgress(e=0){let i=this.attributes.scrollEventProgress;if(!i)return;let t=new CustomEvent(i,{detail:{target:this.$el,progress:e}});window.dispatchEvent(t)}_getProgressModularModules(){if(!this.modularInstance)return;let e=Object.keys(this.$el.dataset).filter(t=>t.includes("module")),i=Object.entries(this.modularInstance.modules);if(e.length)for(let t of e){let r=this.$el.dataset[t];if(!r)return;for(let n of i){let[o,a]=n;r in a&&this.progressModularModules.push({moduleName:o,moduleId:r})}}}_getScrollCallFrom(){let e=Kd([this.intersection.start,this.intersection.end],this.currentScroll);return this.intersection.start===e?"start":"end"}_dispatchCall(e,i){var t,r;let n=(t=this.attributes.scrollCall)==null?void 0:t.split(","),o=(r=this.attributes)==null?void 0:r.scrollCallSelf;if(n&&n.length>1){var a;let[l,u,f]=n,m;m=o?this.$el.dataset[`module${u.trim()}`]:f,this.modularInstance&&this.modularInstance.call(l.trim(),{target:this.$el,way:e,from:i},u.trim(),(a=m)==null?void 0:a.trim())}else if(n){let[l]=n,u=new CustomEvent(l,{detail:{target:this.$el,way:e,from:i}});window.dispatchEvent(u)}}},Fm=["scrollOffset","scrollPosition","scrollModuleProgress","scrollCssProgress","scrollEventProgress","scrollSpeed"],Ul=class{constructor({$el:e,modularInstance:i,triggerRootMargin:t,rafRootMargin:r,scrollOrientation:n}){this.$scrollContainer=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.scrollElements=void 0,this.triggeredScrollElements=void 0,this.RAFScrollElements=void 0,this.scrollElementsToUpdate=void 0,this.IOTriggerInstance=void 0,this.IORafInstance=void 0,this.scrollOrientation=void 0,e?(this.$scrollContainer=e,this.modularInstance=i,this.scrollOrientation=n,this.triggerRootMargin=t??"-1px -1px -1px -1px",this.rafRootMargin=r??"100% 100% 100% 100%",this.scrollElements=[],this.triggeredScrollElements=[],this.RAFScrollElements=[],this.scrollElementsToUpdate=[],this._init()):console.error("Please provide a DOM Element as scrollContainer")}_init(){let e=this.$scrollContainer.querySelectorAll("[data-scroll]"),i=Array.from(e);this._subscribeScrollElements(i),this.IOTriggerInstance=new qo({scrollElements:[...this.triggeredScrollElements],rootMargin:this.triggerRootMargin,IORaf:!1}),this.IORafInstance=new qo({scrollElements:[...this.RAFScrollElements],rootMargin:this.rafRootMargin,IORaf:!0})}destroy(){this.IOTriggerInstance.destroy(),this.IORafInstance.destroy(),this._unsubscribeAllScrollElements()}onResize({currentScroll:e}){for(let i of this.RAFScrollElements)i.onResize({currentScroll:e})}onRender({currentScroll:e,smooth:i}){for(let t of this.scrollElementsToUpdate)t.onRender({currentScroll:e,smooth:i})}removeScrollElements(e){let i=e.querySelectorAll("[data-scroll]");if(i.length){for(let t=0;t<this.triggeredScrollElements.length;t++){let r=this.triggeredScrollElements[t];Array.from(i).indexOf(r.$el)>-1&&(this.IOTriggerInstance.unobserve(r.$el),this.triggeredScrollElements.splice(t,1))}for(let t=0;t<this.RAFScrollElements.length;t++){let r=this.RAFScrollElements[t];Array.from(i).indexOf(r.$el)>-1&&(this.IORafInstance.unobserve(r.$el),this.RAFScrollElements.splice(t,1))}i.forEach(t=>{let r=this.scrollElementsToUpdate.find(o=>o.$el===t),n=this.scrollElements.find(o=>o.$el===t);r&&this._unsubscribeElementUpdate(r),n&&(this.scrollElements=this.scrollElements.filter(o=>o.id!=n.id))})}}addScrollElements(e){let i=e.querySelectorAll("[data-scroll]"),t=[];this.scrollElements.forEach(o=>{t.push(o.id)});let r=Math.max(...t)+1,n=Array.from(i);this._subscribeScrollElements(n,r,!0)}_subscribeScrollElements(e,i=0,t=!1){for(let r=0;r<e.length;r++){let n=e[r],o=this._checkRafNeeded(n),a=new jl({$el:n,id:i+r,scrollOrientation:this.scrollOrientation,modularInstance:this.modularInstance,subscribeElementUpdateFn:this._subscribeElementUpdate.bind(this),unsubscribeElementUpdateFn:this._unsubscribeElementUpdate.bind(this),needRaf:o});this.scrollElements.push(a),o?(this.RAFScrollElements.push(a),t&&(this.IORafInstance.scrollElements.push(a),this.IORafInstance.observe(a.$el))):(this.triggeredScrollElements.push(a),t&&(this.IOTriggerInstance.scrollElements.push(a),this.IOTriggerInstance.observe(a.$el)))}}_unsubscribeAllScrollElements(){this.scrollElements=[],this.RAFScrollElements=[],this.triggeredScrollElements=[],this.scrollElementsToUpdate=[]}_subscribeElementUpdate(e){this.scrollElementsToUpdate.push(e)}_unsubscribeElementUpdate(e){this.scrollElementsToUpdate=this.scrollElementsToUpdate.filter(i=>i.id!=e.id)}_checkRafNeeded(e){let i=[...Fm],t=r=>{i=i.filter(n=>n!=r)};if(e.dataset.scrollOffset){if(e.dataset.scrollOffset.split(",").map(r=>r.replace("%","").trim()).join(",")!="0,0")return!0;t("scrollOffset")}else t("scrollOffset");if(e.dataset.scrollPosition){if(e.dataset.scrollPosition.trim()!="top,bottom")return!0;t("scrollPosition")}else t("scrollPosition");if(e.dataset.scrollSpeed&&!isNaN(parseFloat(e.dataset.scrollSpeed)))return!0;t("scrollSpeed");for(let r of i)if(r in e.dataset)return!0;return!1}},Kl=class{constructor({resizeElements:e,resizeCallback:i=()=>{}}){this.$resizeElements=void 0,this.isFirstObserve=void 0,this.observer=void 0,this.resizeCallback=void 0,this.$resizeElements=e,this.resizeCallback=i,this.isFirstObserve=!0,this._init()}_init(){this.observer=new ResizeObserver(e=>{var i;!this.isFirstObserve&&((i=this.resizeCallback)==null||i.call(this)),this.isFirstObserve=!1});for(let e of this.$resizeElements)this.observer.observe(e)}destroy(){this.observer.disconnect()}},Qd={wrapper:window,content:document.documentElement,wheelEventsTarget:window,eventsTarget:window,smoothWheel:!0,syncTouch:!1,syncTouchLerp:.075,touchInertiaMultiplier:35,duration:.75,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),lerp:.1,infinite:!1,orientation:"vertical",gestureOrientation:"vertical",touchMultiplier:1,wheelMultiplier:1,autoResize:!0},Xo=class{constructor({lenisOptions:e={},modularInstance:i,triggerRootMargin:t,rafRootMargin:r,autoResize:n=!0,autoStart:o=!0,scrollCallback:a=()=>{},initCustomTicker:l,destroyCustomTicker:u}={}){this.rafPlaying=void 0,this.lenisInstance=void 0,this.coreInstance=void 0,this.lenisOptions=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.rafInstance=void 0,this.autoResize=void 0,this.autoStart=void 0,this.ROInstance=void 0,this.initCustomTicker=void 0,this.destroyCustomTicker=void 0,this._onRenderBind=void 0,this._onResizeBind=void 0,this._onScrollToBind=void 0,this.lenisOptions=Gl({},Qd,e),Object.assign(this,{lenisOptions:e,modularInstance:i,triggerRootMargin:t,rafRootMargin:r,autoResize:n,autoStart:o,scrollCallback:a,initCustomTicker:l,destroyCustomTicker:u}),this._onRenderBind=this._onRender.bind(this),this._onScrollToBind=this._onScrollTo.bind(this),this._onResizeBind=this._onResize.bind(this),this.rafPlaying=!1,this._init()}_init(){var e;this.lenisInstance=new jd({wrapper:this.lenisOptions.wrapper,content:this.lenisOptions.content,eventsTarget:this.lenisOptions.eventsTarget,lerp:this.lenisOptions.lerp,duration:this.lenisOptions.duration,orientation:this.lenisOptions.orientation,gestureOrientation:this.lenisOptions.gestureOrientation,smoothWheel:this.lenisOptions.smoothWheel,syncTouch:this.lenisOptions.syncTouch,syncTouchLerp:this.lenisOptions.syncTouchLerp,touchInertiaMultiplier:this.lenisOptions.touchInertiaMultiplier,wheelMultiplier:this.lenisOptions.wheelMultiplier,touchMultiplier:this.lenisOptions.touchMultiplier,easing:this.lenisOptions.easing}),(e=this.lenisInstance)==null||e.on("scroll",this.scrollCallback),document.documentElement.setAttribute("data-scroll-orientation",this.lenisInstance.options.orientation),requestAnimationFrame(()=>{this.coreInstance=new Ul({$el:this.lenisInstance.rootElement,modularInstance:this.modularInstance,triggerRootMargin:this.triggerRootMargin,rafRootMargin:this.rafRootMargin,scrollOrientation:this.lenisInstance.options.orientation}),this._bindEvents(),this.initCustomTicker&&!this.destroyCustomTicker?console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."):!this.initCustomTicker&&this.destroyCustomTicker&&console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),this.autoStart&&this.start()})}destroy(){var e;this.stop(),this._unbindEvents(),this.lenisInstance.destroy(),(e=this.coreInstance)==null||e.destroy(),requestAnimationFrame(()=>{var i;(i=this.coreInstance)==null||i.destroy()})}_bindEvents(){this._bindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance=new Kl({resizeElements:[document.body],resizeCallback:this._onResizeBind}):window.addEventListener("resize",this._onResizeBind))}_unbindEvents(){this._unbindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance&&this.ROInstance.destroy():window.removeEventListener("resize",this._onResizeBind))}_bindScrollToEvents(e){let i=e||this.lenisInstance.rootElement,t=i?.querySelectorAll("[data-scroll-to]");t?.length&&t.forEach(r=>{r.addEventListener("click",this._onScrollToBind,!1)})}_unbindScrollToEvents(e){let i=e||this.lenisInstance.rootElement,t=i?.querySelectorAll("[data-scroll-to]");t?.length&&t.forEach(r=>{r.removeEventListener("click",this._onScrollToBind,!1)})}_onResize(){requestAnimationFrame(()=>{var e;(e=this.coreInstance)==null||e.onResize({currentScroll:this.lenisInstance.scroll})})}_onRender(){var e,i;(e=this.lenisInstance)==null||e.raf(Date.now()),(i=this.coreInstance)==null||i.onRender({currentScroll:this.lenisInstance.scroll,smooth:this.lenisInstance.isSmooth})}_onScrollTo(e){var i;e.preventDefault();let t=(i=e.currentTarget)!=null?i:null;if(!t)return;let r=t.getAttribute("data-scroll-to-href")||t.getAttribute("href"),n=t.getAttribute("data-scroll-to-offset")||0,o=t.getAttribute("data-scroll-to-duration")||this.lenisOptions.duration||Qd.duration;r&&this.scrollTo(r,{offset:typeof n=="string"?parseInt(n):n,duration:typeof o=="string"?parseInt(o):o})}start(){var e;this.rafPlaying||((e=this.lenisInstance)==null||e.start(),this.rafPlaying=!0,this.initCustomTicker?this.initCustomTicker(this._onRenderBind):this._raf())}stop(){var e;this.rafPlaying&&((e=this.lenisInstance)==null||e.stop(),this.rafPlaying=!1,this.destroyCustomTicker?this.destroyCustomTicker(this._onRenderBind):this.rafInstance&&cancelAnimationFrame(this.rafInstance))}removeScrollElements(e){var i;e?(this._unbindScrollToEvents(e),(i=this.coreInstance)==null||i.removeScrollElements(e)):console.error("Please provide a DOM Element as $oldContainer")}addScrollElements(e){var i;e?((i=this.coreInstance)==null||i.addScrollElements(e),requestAnimationFrame(()=>{this._bindScrollToEvents(e)})):console.error("Please provide a DOM Element as $newContainer")}resize(){this._onResizeBind()}scrollTo(e,i){var t;(t=this.lenisInstance)==null||t.scrollTo(e,{offset:i?.offset,lerp:i?.lerp,duration:i?.duration,immediate:i?.immediate,lock:i?.lock,force:i?.force,easing:i?.easing,onComplete:i?.onComplete})}_raf(){this._onRenderBind(),this.rafInstance=requestAnimationFrame(()=>this._raf())}};var Ql=function(){s.registerGSAP=function(t){s.gsap=t};function s(i){i===void 0&&(i={}),this.options=Object.assign({},{el:null,container:document.body,className:"mf-cursor",innerClassName:"mf-cursor-inner",textClassName:"mf-cursor-text",mediaClassName:"mf-cursor-media",mediaBoxClassName:"mf-cursor-media-box",iconSvgClassName:"mf-svgsprite",iconSvgNamePrefix:"-",iconSvgSrc:"",dataAttr:"cursor",hiddenState:"-hidden",textState:"-text",iconState:"-icon",activeState:"-active",mediaState:"-media",stateDetection:{"-pointer":"a,button"},visible:!0,visibleOnState:!1,speed:.55,ease:"expo.out",overwrite:!0,skewing:0,skewingText:2,skewingIcon:2,skewingMedia:2,skewingDelta:.001,skewingDeltaMax:.15,stickDelta:.15,showTimeout:0,hideOnLeave:!0,hideTimeout:300,hideMediaTimeout:300,initialPos:[-window.innerWidth,-window.innerHeight]},i),this.options.visible&&i.stateDetection==null&&(this.options.stateDetection["-hidden"]="iframe"),this.gsap=s.gsap||window.gsap,this.el=typeof this.options.el=="string"?document.querySelector(this.options.el):this.options.el,this.container=typeof this.options.container=="string"?document.querySelector(this.options.container):this.options.container,this.skewing=this.options.skewing,this.pos={x:this.options.initialPos[0],y:this.options.initialPos[1]},this.vel={x:0,y:0},this.event={},this.events=[],this.init()}var e=s.prototype;return e.init=function(){this.el||this.create(),this.createSetter(),this.bind(),this.render(!0),this.ticker=this.render.bind(this,!1),this.gsap.ticker.add(this.ticker)},e.create=function(){this.el=document.createElement("div"),this.el.className=this.options.className,this.el.classList.add(this.options.hiddenState),this.inner=document.createElement("div"),this.inner.className=this.options.innerClassName,this.text=document.createElement("div"),this.text.className=this.options.textClassName,this.media=document.createElement("div"),this.media.className=this.options.mediaClassName,this.mediaBox=document.createElement("div"),this.mediaBox.className=this.options.mediaBoxClassName,this.media.appendChild(this.mediaBox),this.inner.appendChild(this.media),this.inner.appendChild(this.text),this.el.appendChild(this.inner),this.container.appendChild(this.el)},e.createSetter=function(){this.setter={x:this.gsap.quickSetter(this.el,"x","px"),y:this.gsap.quickSetter(this.el,"y","px"),rotation:this.gsap.quickSetter(this.el,"rotation","deg"),scaleX:this.gsap.quickSetter(this.el,"scaleX"),scaleY:this.gsap.quickSetter(this.el,"scaleY"),wc:this.gsap.quickSetter(this.el,"willChange"),inner:{rotation:this.gsap.quickSetter(this.inner,"rotation","deg")}}},e.bind=function(){var t=this;this.event.mouseleave=function(){return t.hide()},this.event.mouseenter=function(){return t.show()},this.event.mousedown=function(){return t.addState(t.options.activeState)},this.event.mouseup=function(){return t.removeState(t.options.activeState)},this.event.mousemoveOnce=function(){return t.show()},this.event.mousemove=function(r){t.gsap.to(t.pos,{x:t.stick?t.stick.x-(t.stick.x-r.clientX)*t.options.stickDelta:r.clientX,y:t.stick?t.stick.y-(t.stick.y-r.clientY)*t.options.stickDelta:r.clientY,overwrite:t.options.overwrite,ease:t.options.ease,duration:t.visible?t.options.speed:0,onUpdate:function(){return t.vel={x:r.clientX-t.pos.x,y:r.clientY-t.pos.y}}})},this.event.mouseover=function(r){for(var n=r.target;n&&n!==t.container&&!(r.relatedTarget&&n.contains(r.relatedTarget));n=n.parentNode){for(var o in t.options.stateDetection)n.matches(t.options.stateDetection[o])&&t.addState(o);if(t.options.dataAttr){var a=t.getFromDataset(n);a.state&&t.addState(a.state),a.text&&t.setText(a.text),a.icon&&t.setIcon(a.icon),a.img&&t.setImg(a.img),a.video&&t.setVideo(a.video),typeof a.show<"u"&&t.show(),typeof a.stick<"u"&&t.setStick(a.stick||n)}}},this.event.mouseout=function(r){for(var n=r.target;n&&n!==t.container&&!(r.relatedTarget&&n.contains(r.relatedTarget));n=n.parentNode){for(var o in t.options.stateDetection)n.matches(t.options.stateDetection[o])&&t.removeState(o);if(t.options.dataAttr){var a=t.getFromDataset(n);a.state&&t.removeState(a.state),a.text&&t.removeText(),a.icon&&t.removeIcon(),a.img&&t.removeImg(),a.video&&t.removeVideo(),typeof a.show<"u"&&t.hide(),typeof a.stick<"u"&&t.removeStick()}}},this.options.hideOnLeave&&this.container.addEventListener("mouseleave",this.event.mouseleave,{passive:!0}),this.options.visible&&this.container.addEventListener("mouseenter",this.event.mouseenter,{passive:!0}),this.options.activeState&&(this.container.addEventListener("mousedown",this.event.mousedown,{passive:!0}),this.container.addEventListener("mouseup",this.event.mouseup,{passive:!0})),this.container.addEventListener("mousemove",this.event.mousemove,{passive:!0}),this.options.visible&&this.container.addEventListener("mousemove",this.event.mousemoveOnce,{passive:!0,once:!0}),(this.options.stateDetection||this.options.dataAttr)&&(this.container.addEventListener("mouseover",this.event.mouseover,{passive:!0}),this.container.addEventListener("mouseout",this.event.mouseout,{passive:!0}))},e.render=function(t){if(t!==!0&&(this.vel.y===0||this.vel.x===0)){this.setter.wc("auto");return}if(this.trigger("render"),this.setter.wc("transform"),this.setter.x(this.pos.x),this.setter.y(this.pos.y),this.skewing){var r=Math.sqrt(Math.pow(this.vel.x,2)+Math.pow(this.vel.y,2)),n=Math.min(r*this.options.skewingDelta,this.options.skewingDeltaMax)*this.skewing,o=Math.atan2(this.vel.y,this.vel.x)*180/Math.PI;this.setter.rotation(o),this.setter.scaleX(1+n),this.setter.scaleY(1-n),this.setter.inner.rotation(-o)}},e.show=function(){var t=this;this.trigger("show"),clearInterval(this.visibleInt),this.visibleInt=setTimeout(function(){t.el.classList.remove(t.options.hiddenState),t.visible=!0,t.render(!0)},this.options.showTimeout)},e.hide=function(){var t=this;this.trigger("hide"),clearInterval(this.visibleInt),this.el.classList.add(this.options.hiddenState),this.visibleInt=setTimeout(function(){return t.visible=!1},this.options.hideTimeout)},e.toggle=function(t){t===!0||t!==!1&&!this.visible?this.show():this.hide()},e.addState=function(t){var r;if(this.trigger("addState",t),t===this.options.hiddenState)return this.hide();(r=this.el.classList).add.apply(r,t.split(" ")),this.options.visibleOnState&&this.show()},e.removeState=function(t){var r;if(this.trigger("removeState",t),t===this.options.hiddenState)return this.show();(r=this.el.classList).remove.apply(r,t.split(" ")),this.options.visibleOnState&&this.el.className===this.options.className&&this.hide()},e.toggleState=function(t,r){r===!0||r!==!1&&!this.el.classList.contains(t)?this.addState(t):this.removeState(t)},e.setSkewing=function(t){this.gsap.to(this,{skewing:t})},e.removeSkewing=function(){this.gsap.to(this,{skewing:this.options.skewing})},e.setStick=function(t){var r=typeof t=="string"?document.querySelector(t):t,n=r.getBoundingClientRect();this.stick={y:n.top+n.height/2,x:n.left+n.width/2}},e.removeStick=function(){this.stick=!1},e.setText=function(t){this.text.innerHTML=t,this.addState(this.options.textState),this.setSkewing(this.options.skewingText)},e.removeText=function(){this.removeState(this.options.textState),this.removeSkewing()},e.setIcon=function(t,r){r===void 0&&(r=""),this.text.innerHTML="<svg class='"+this.options.iconSvgClassName+" "+this.options.iconSvgNamePrefix+t+"'"+(" style='"+r+"'><use xlink:href='"+this.options.iconSvgSrc+"#"+t+"'></use></svg>"),this.addState(this.options.iconState),this.setSkewing(this.options.skewingIcon)},e.removeIcon=function(){this.removeState(this.options.iconState),this.removeSkewing()},e.setMedia=function(t){var r=this;clearTimeout(this.mediaInt),t&&(this.mediaBox.innerHTML="",this.mediaBox.appendChild(t)),this.mediaInt=setTimeout(function(){return r.addState(r.options.mediaState)},20),this.setSkewing(this.options.skewingMedia)},e.removeMedia=function(){var t=this;clearTimeout(this.mediaInt),this.removeState(this.options.mediaState),this.mediaInt=setTimeout(function(){return t.mediaBox.innerHTML=""},this.options.hideMediaTimeout),this.removeSkewing()},e.setImg=function(t){this.mediaImg||(this.mediaImg=new Image),this.mediaImg.src!==t&&(this.mediaImg.src=t),this.setMedia(this.mediaImg)},e.removeImg=function(){this.removeMedia()},e.setVideo=function(t){this.mediaVideo||(this.mediaVideo=document.createElement("video"),this.mediaVideo.muted=!0,this.mediaVideo.loop=!0,this.mediaVideo.autoplay=!0),this.mediaVideo.src!==t&&(this.mediaVideo.src=t,this.mediaVideo.load()),this.mediaVideo.play(),this.setMedia(this.mediaVideo)},e.removeVideo=function(){this.mediaVideo&&this.mediaVideo.readyState>2&&this.mediaVideo.pause(),this.removeMedia()},e.on=function(t,r){this.events[t]instanceof Array||this.off(t),this.events[t].push(r)},e.off=function(t,r){r?this.events[t]=this.events[t].filter(function(n){return n!==r}):this.events[t]=[]},e.trigger=function(t){var r=arguments,n=this;this.events[t]&&this.events[t].forEach(function(o){return o.call.apply(o,[n,n].concat([].slice.call(r,1)))})},e.getFromDataset=function(t){var r=t.dataset;return{state:r[this.options.dataAttr],show:r[this.options.dataAttr+"Show"],text:r[this.options.dataAttr+"Text"],icon:r[this.options.dataAttr+"Icon"],img:r[this.options.dataAttr+"Img"],video:r[this.options.dataAttr+"Video"],stick:r[this.options.dataAttr+"Stick"]}},e.destroy=function(){this.trigger("destroy"),this.gsap.ticker.remove(this.ticker),this.container.removeEventListener("mouseleave",this.event.mouseleave),this.container.removeEventListener("mouseenter",this.event.mouseenter),this.container.removeEventListener("mousedown",this.event.mousedown),this.container.removeEventListener("mouseup",this.event.mouseup),this.container.removeEventListener("mousemove",this.event.mousemove),this.container.removeEventListener("mousemove",this.event.mousemoveOnce),this.container.removeEventListener("mouseover",this.event.mouseover),this.container.removeEventListener("mouseout",this.event.mouseout),this.el&&(this.container.removeChild(this.el),this.el=null,this.mediaImg=null,this.mediaVideo=null)},s}();(function(){function s(){for(var t=arguments.length,r=0;r<t;r++){var n=r<0||arguments.length<=r?void 0:arguments[r];n.nodeType===1||n.nodeType===11?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function i(){for(var t=this.parentNode,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=n.length;if(t)for(a||t.removeChild(this);a--;){var l=n[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?t.insertBefore(this.previousSibling,l):t.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=s,DocumentFragment.prototype.append=s),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function Vm(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Zd(s,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function Jd(s,e,i){return e&&Zd(s.prototype,e),i&&Zd(s,i),s}function Hm(s,e,i){return e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function ep(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),i.push.apply(i,t)}return i}function tp(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?ep(Object(i),!0).forEach(function(t){Hm(s,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):ep(Object(i)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(i,t))})}return s}function rp(s,e){return Wm(s)||Xm(s,e)||sp(s,e)||jm()}function Zt(s){return Ym(s)||qm(s)||sp(s)||Gm()}function Ym(s){if(Array.isArray(s))return Zl(s)}function Wm(s){if(Array.isArray(s))return s}function qm(s){if(typeof Symbol<"u"&&Symbol.iterator in Object(s))return Array.from(s)}function Xm(s,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var i=[],t=!0,r=!1,n=void 0;try{for(var o=s[Symbol.iterator](),a;!(t=(a=o.next()).done)&&(i.push(a.value),!(e&&i.length===e));t=!0);}catch(l){r=!0,n=l}finally{try{!t&&o.return!=null&&o.return()}finally{if(r)throw n}}return i}}function sp(s,e){if(s){if(typeof s=="string")return Zl(s,e);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Zl(s,e)}}function Zl(s,e){(e==null||e>s.length)&&(e=s.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=s[i];return t}function Gm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function us(s,e){return Object.getOwnPropertyNames(Object(s)).reduce(function(i,t){var r=Object.getOwnPropertyDescriptor(Object(s),t),n=Object.getOwnPropertyDescriptor(Object(e),t);return Object.defineProperty(i,t,n||r)},{})}function An(s){return typeof s=="string"}function ic(s){return Array.isArray(s)}function Go(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=us(s),i;return e.types!==void 0?i=e.types:e.split!==void 0&&(i=e.split),i!==void 0&&(e.types=(An(i)||ic(i)?String(i):"").split(",").map(function(t){return String(t).trim()}).filter(function(t){return/((line)|(word)|(char))/i.test(t)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(s.position)),e}function rc(s){var e=An(s)||ic(s)?String(s):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Uo(s){return s!==null&&typeof s=="object"}function Um(s){return Uo(s)&&/^(1|3|11)$/.test(s.nodeType)}function Km(s){return typeof s=="number"&&s>-1&&s%1===0}function Qm(s){return Uo(s)&&Km(s.length)}function ps(s){return ic(s)?s:s==null?[]:Qm(s)?Array.prototype.slice.call(s):[s]}function ip(s){var e=s;return An(s)&&(/^(#[a-z]\w+)$/.test(s.trim())?e=document.getElementById(s.trim().slice(1)):e=document.querySelectorAll(s)),ps(e).reduce(function(i,t){return[].concat(Zt(i),Zt(ps(t).filter(Um)))},[])}var Zm=Object.entries,jo="_splittype",Bi={},Jm=0;function Ki(s,e,i){if(!Uo(s))return console.warn("[data.set] owner is not an object"),null;var t=s[jo]||(s[jo]=++Jm),r=Bi[t]||(Bi[t]={});return i===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(Bi[t]=tp(tp({},r),e)):e!==void 0&&(r[e]=i),i}function ds(s,e){var i=Uo(s)?s[jo]:null,t=i&&Bi[i]||{};return e===void 0?t:t[e]}function np(s){var e=s&&s[jo];e&&(delete s[e],delete Bi[e])}function eg(){Object.keys(Bi).forEach(function(s){delete Bi[s]})}function tg(){Zm(Bi).forEach(function(s){var e=rp(s,2),i=e[0],t=e[1],r=t.isRoot,n=t.isSplit;(!r||!n)&&(Bi[i]=null,delete Bi[i])})}function ig(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",i=s?String(s):"";return i.trim().replace(/\s+/g," ").split(e)}var sc="\\ud800-\\udfff",op="\\u0300-\\u036f\\ufe20-\\ufe23",ap="\\u20d0-\\u20f0",lp="\\ufe0e\\ufe0f",rg="[".concat(sc,"]"),Jl="[".concat(op).concat(ap,"]"),ec="\\ud83c[\\udffb-\\udfff]",sg="(?:".concat(Jl,"|").concat(ec,")"),cp="[^".concat(sc,"]"),up="(?:\\ud83c[\\udde6-\\uddff]){2}",dp="[\\ud800-\\udbff][\\udc00-\\udfff]",pp="\\u200d",fp="".concat(sg,"?"),hp="[".concat(lp,"]?"),ng="(?:"+pp+"(?:"+[cp,up,dp].join("|")+")"+hp+fp+")*",og=hp+fp+ng,ag="(?:".concat(["".concat(cp).concat(Jl,"?"),Jl,up,dp,rg].join("|"),`
)`),lg=RegExp("".concat(ec,"(?=").concat(ec,")|").concat(ag).concat(og),"g"),cg=[pp,sc,op,ap,lp],ug=RegExp("[".concat(cg.join(""),"]"));function dg(s){return s.split("")}function mp(s){return ug.test(s)}function pg(s){return s.match(lg)||[]}function fg(s){return mp(s)?pg(s):dg(s)}function hg(s){return s==null?"":String(s)}function mg(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return s=hg(s),s&&An(s)&&!e&&mp(s)?fg(s):s.split(e)}function tc(s,e){var i=document.createElement(s);return e&&Object.keys(e).forEach(function(t){var r=e[t],n=An(r)?r.trim():r;n===null||n===""||(t==="children"?i.append.apply(i,Zt(ps(n))):i.setAttribute(t,n))}),i}var nc={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function gg(s,e){e=us(nc,e);var i=rc(e.types),t=e.tagName,r=s.nodeValue,n=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&n.append(" "),o=ig(r).reduce(function(l,u,f,m){var v,g;return i.chars&&(g=mg(u).map(function(b){var p=tc(t,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:b});return Ki(p,"isChar",!0),a=[].concat(Zt(a),[p]),p})),i.words||i.lines?(v=tc(t,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(i.words&&e.absolute?"position: relative;":""),children:i.chars?g:u}),Ki(v,{isWord:!0,isWordStart:!0,isWordEnd:!0}),n.appendChild(v)):g.forEach(function(b){n.appendChild(b)}),f<m.length-1&&n.append(" "),i.words?l.concat(v):l},[]),/\s$/.test(r)&&n.append(" "),s.replaceWith(n),{words:o,chars:a}}function gp(s,e){var i=s.nodeType,t={words:[],chars:[]};if(!/(1|3|11)/.test(i))return t;if(i===3&&/\S/.test(s.nodeValue))return gg(s,e);var r=ps(s.childNodes);if(r.length&&(Ki(s,"isSplit",!0),!ds(s).isRoot)){s.style.display="inline-block",s.style.position="relative";var n=s.nextSibling,o=s.previousSibling,a=s.textContent||"",l=n?n.textContent:" ",u=o?o.textContent:" ";Ki(s,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(f,m){var v=gp(m,e),g=v.words,b=v.chars;return{words:[].concat(Zt(f.words),Zt(g)),chars:[].concat(Zt(f.chars),Zt(b))}},t)}function yg(s,e,i,t){if(!i.absolute)return{top:e?s.offsetTop:null};var r=s.offsetParent,n=rp(t,2),o=n[0],a=n[1],l=0,u=0;if(r&&r!==document.body){var f=r.getBoundingClientRect();l=f.x+o,u=f.y+a}var m=s.getBoundingClientRect(),v=m.width,g=m.height,b=m.x,p=m.y,_=p+a-u,T=b+o-l;return{width:v,height:g,top:_,left:T}}function yp(s){ds(s).isWord?(np(s),s.replaceWith.apply(s,Zt(s.childNodes))):ps(s.children).forEach(function(e){return yp(e)})}var vg=function(){return document.createDocumentFragment()};function bg(s,e,i){var t=rc(e.types),r=e.tagName,n=s.getElementsByTagName("*"),o=[],a=[],l=null,u,f,m,v=[],g=s.parentElement,b=s.nextElementSibling,p=vg(),_=window.getComputedStyle(s),T=_.textAlign,E=parseFloat(_.fontSize),k=E*.2;return e.absolute&&(m={left:s.offsetLeft,top:s.offsetTop,width:s.offsetWidth},f=s.offsetWidth,u=s.offsetHeight,Ki(s,{cssWidth:s.style.width,cssHeight:s.style.height})),ps(n).forEach(function(C){var M=C.parentElement===s,I=yg(C,M,e,i),z=I.width,N=I.height,w=I.top,P=I.left;/^br$/i.test(C.nodeName)||(t.lines&&M&&((l===null||w-l>=k)&&(l=w,o.push(a=[])),a.push(C)),e.absolute&&Ki(C,{top:w,left:P,width:z,height:N}))}),g&&g.removeChild(s),t.lines&&(v=o.map(function(C){var M=tc(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(T,"; width: 100%;")});Ki(M,"isLine",!0);var I={height:0,top:1e4};return p.appendChild(M),C.forEach(function(z,N,w){var P=ds(z),F=P.isWordEnd,R=P.top,W=P.height,Y=w[N+1];I.height=Math.max(I.height,W),I.top=Math.min(I.top,R),M.appendChild(z),F&&ds(Y).isWordStart&&M.append(" ")}),e.absolute&&Ki(M,{height:I.height,top:I.top}),M}),t.words||yp(p),s.replaceChildren(p)),e.absolute&&(s.style.width="".concat(s.style.width||f,"px"),s.style.height="".concat(u,"px"),ps(n).forEach(function(C){var M=ds(C),I=M.isLine,z=M.top,N=M.left,w=M.width,P=M.height,F=ds(C.parentElement),R=!I&&F.isLine;C.style.top="".concat(R?z-F.top:z,"px"),C.style.left=I?"".concat(m.left,"px"):"".concat(N-(R?m.left:0),"px"),C.style.height="".concat(P,"px"),C.style.width=I?"".concat(m.width,"px"):"".concat(w,"px"),C.style.position="absolute"})),g&&(b?g.insertBefore(s,b):g.appendChild(s)),v}var Bs=us(nc,{}),vp=function(){Jd(s,null,[{key:"clearData",value:function(){eg()}},{key:"setDefaults",value:function(i){return Bs=us(Bs,Go(i)),nc}},{key:"revert",value:function(i){ip(i).forEach(function(t){var r=ds(t),n=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;n&&(t.innerHTML=o,t.style.width=a||"",t.style.height=l||"",np(t))})}},{key:"create",value:function(i,t){return new s(i,t)}},{key:"data",get:function(){return Bi}},{key:"defaults",get:function(){return Bs},set:function(i){Bs=us(Bs,Go(i))}}]);function s(e,i){Vm(this,s),this.isSplit=!1,this.settings=us(Bs,Go(i)),this.elements=ip(e),this.split()}return Jd(s,[{key:"split",value:function(i){var t=this;this.revert(),this.elements.forEach(function(o){Ki(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];i!==void 0&&(this.settings=us(this.settings,Go(i)));var n=rc(this.settings.types);n.none||(this.elements.forEach(function(o){Ki(o,"isRoot",!0);var a=gp(o,t.settings),l=a.words,u=a.chars;t.words=[].concat(Zt(t.words),Zt(l)),t.chars=[].concat(Zt(t.chars),Zt(u))}),this.elements.forEach(function(o){if(n.lines||t.settings.absolute){var a=bg(o,t.settings,r);t.lines=[].concat(Zt(t.lines),Zt(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),tg())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),s.revert(this.elements)}}]),s}();function bp(){let s=new Xo;Ql.registerGSAP(Rt);let e=new Ql;new vp("[text-split]",{types:"words,chars",tagName:"span"}),$("[hoverstagger='link']").each(function(){let i=$(this).find("[hoverstagger='text']").eq(0),t=$(this).find("[hoverstagger='text']").eq(1),n=function(l,u){return typeof u!="string"||u.trim()===""?l:u==="true"&&typeof l=="boolean"?!0:u==="false"&&typeof l=="boolean"?!1:isNaN(u)&&typeof l=="string"?u:!isNaN(u)&&typeof l=="number"?+u:l}(.3,$(this).attr("hoverstagger-duration")),o=n*.6666666667,a=Rt.timeline({paused:!0});a.to(i.find(".char"),{yPercent:-100,duration:n,stagger:{amount:o}}),a.from(t.find(".char"),{yPercent:100,duration:n,stagger:{amount:o}},0),$(this).on("mouseenter",()=>a.restart())})}function wp(){$(".marquee").each(function(){let s=$(this).find(".marquee_track"),e=$(this).find(".marquee_item"),i=Rt.timeline({repeat:-1,defaults:{ease:"expo.inOut",duration:1,delay:1}});e.each((t,r)=>{i.to(s,{yPercent:(t+1)*-100})}),e.first().clone().appendTo(s)})}var Jt,Tp,gr,Qi,Rr,Ep,kp,Ko,Cp=function(){return typeof window<"u"},Mp=function(){return Jt||Cp()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Ap=function(e){return typeof e=="string"},_p=function(e){return typeof e=="function"},Pn=function(e,i){var t=i==="x"?"Width":"Height",r="scroll"+t,n="client"+t;return e===gr||e===Qi||e===Rr?Math.max(Qi[r],Rr[r])-(gr["inner"+t]||Qi[n]||Rr[n]):e[r]-e["offset"+t]},On=function(e,i){var t="scroll"+(i==="x"?"Left":"Top");return e===gr&&(e.pageXOffset!=null?t="page"+i.toUpperCase()+"Offset":e=Qi[t]!=null?Qi:Rr),function(){return e[t]}},wg=function(e,i,t,r){if(_p(e)&&(e=e(i,t,r)),typeof e!="object")return Ap(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var n={},o;for(o in e)n[o]=o!=="onAutoKill"&&_p(e[o])?e[o](i,t,r):e[o];return n},Pp=function(e,i){if(e=Ep(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var t=e.getBoundingClientRect(),r=!i||i===gr||i===Rr,n=r?{top:Qi.clientTop-(gr.pageYOffset||Qi.scrollTop||Rr.scrollTop||0),left:Qi.clientLeft-(gr.pageXOffset||Qi.scrollLeft||Rr.scrollLeft||0)}:i.getBoundingClientRect(),o={x:t.left-n.left,y:t.top-n.top};return!r&&i&&(o.x+=On(i,"x")(),o.y+=On(i,"y")()),o},xp=function(e,i,t,r,n){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-n:Ap(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-n:e==="max"?Pn(i,t)-n:Math.min(Pn(i,t),Pp(e,i)[t]-n)},Sp=function(){Jt=Mp(),Cp()&&Jt&&typeof document<"u"&&document.body&&(gr=window,Rr=document.body,Qi=document.documentElement,Ep=Jt.utils.toArray,Jt.config({autoKillThreshold:7}),kp=Jt.config(),Tp=1)},$s={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Jt=e,Sp()},init:function(e,i,t,r,n){Tp||Sp();var o=this,a=Jt.getProperty(e,"scrollSnapType");o.isWin=e===gr,o.target=e,o.tween=t,i=wg(i,r,e,n),o.vars=i,o.autoKill=!!i.autoKill,o.getX=On(e,"x"),o.getY=On(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Ko||(Ko=Jt.core.globals().ScrollTrigger),Jt.getProperty(e,"scrollBehavior")==="smooth"&&Jt.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),i.x!=null?(o.add(o,"x",o.x,xp(i.x,e,"x",o.x,i.offsetX||0),r,n),o._props.push("scrollTo_x")):o.skipX=1,i.y!=null?(o.add(o,"y",o.y,xp(i.y,e,"y",o.y,i.offsetY||0),r,n),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,i){for(var t=i._pt,r=i.target,n=i.tween,o=i.autoKill,a=i.xPrev,l=i.yPrev,u=i.isWin,f=i.snap,m=i.snapInline,v,g,b,p,_;t;)t.r(e,t.d),t=t._next;v=u||!i.skipX?i.getX():a,g=u||!i.skipY?i.getY():l,b=g-l,p=v-a,_=kp.autoKillThreshold,i.x<0&&(i.x=0),i.y<0&&(i.y=0),o&&(!i.skipX&&(p>_||p<-_)&&v<Pn(r,"x")&&(i.skipX=1),!i.skipY&&(b>_||b<-_)&&g<Pn(r,"y")&&(i.skipY=1),i.skipX&&i.skipY&&(n.kill(),i.vars.onAutoKill&&i.vars.onAutoKill.apply(n,i.vars.onAutoKillParams||[]))),u?gr.scrollTo(i.skipX?v:i.x,i.skipY?g:i.y):(i.skipY||(r.scrollTop=i.y),i.skipX||(r.scrollLeft=i.x)),f&&(e===1||e===0)&&(g=r.scrollTop,v=r.scrollLeft,m?r.style.scrollSnapType=m:r.style.removeProperty("scroll-snap-type"),r.scrollTop=g+1,r.scrollLeft=v+1,r.scrollTop=g,r.scrollLeft=v),i.xPrev=i.x,i.yPrev=i.y,Ko&&Ko.update()},kill:function(e){var i=e==="scrollTo",t=this._props.indexOf(e);return(i||e==="scrollTo_x")&&(this.skipX=1),(i||e==="scrollTo_y")&&(this.skipY=1),t>-1&&this._props.splice(t,1),!this._props.length}};$s.max=Pn;$s.getOffset=Pp;$s.buildGetter=On;Mp()&&Jt.registerPlugin($s);var C0=sa(Dp(),1);Rt.registerPlugin(_e,$s);function zp(){function s(){return window.innerWidth<768}if(!s()){let o=function(a,l,u,f){f?(a.classList.add("active"),l.classList.add("current"),u&&u.classList.add("active")):(a.classList.remove("active"),l.classList.remove("current"),u&&u.classList.remove("active"))};var e=o;let i={topSpacing:40,listen:!0},t=new Sticksy(".visual_text_left_elements",i);t.onStateChanged=function(a){a==="fixed"?t.nodeRef.classList.add("widget--sticky"):t.nodeRef.classList.remove("widget--sticky")};let r=document.querySelectorAll(".text_item"),n=document.querySelectorAll(".text_elements_item");r.forEach((a,l)=>{let u=document.querySelector(`.link_ref_item[href="#${a.id}"]`),f=n[l];_e.create({trigger:a,start:"top center",end:"bottom center",onEnter:()=>o(a,u,f,!0),onEnterBack:()=>o(a,u,f,!0),onLeave:()=>o(a,u,f,!1),onLeaveBack:()=>o(a,u,f,!1)})}),$(".marquee_about").each(function(){let a=$(this).find(".marquee_track_about"),l=$(this).find(".marquee_item_about"),u=Rt.timeline({paused:!0,defaults:{ease:"expo.inOut",duration:1}});l.each((f,m)=>{f<l.length-1&&u.to(a,{yPercent:(f+1)*-100},f)}),r.forEach((f,m)=>{_e.create({trigger:f,start:"top center",end:"bottom center",onEnter:()=>{u.tweenTo(m)},onEnterBack:()=>{u.tweenTo(m)}})})}),document.querySelectorAll(".link_ref_item").forEach(a=>{a.addEventListener("click",function(l){l.preventDefault();let u=this.getAttribute("href").substring(1),f=document.getElementById(u);f&&Rt.to(window,{duration:1,scrollTo:f,ease:"power2.inOut"})})})}}var{Dragdealer:_g}=Np();function Bp(){if(window.innerWidth>1024){let a=function(b){let p=b.find(".color").css("background-color");$(".handle_fill").css("border-color",p),$(".handle_back").css("background-color",p)},l=function(b){r.removeClass("active").find(".link_contato").removeClass("active"),b.addClass("active"),b.find(".link_contato").addClass("active"),a(b)},v=function(b,p,_=.1){return p+(b-p)*_},g=function(){u=v(f,u),$(".handle_count").text(u.toFixed(1)),Math.abs(f-u)>.1?m=requestAnimationFrame(g):(u=f,$(".handle_count").text(f.toFixed(1)),m=null)};var s=a,e=l,i=v,t=g;let r=$(".position_item"),n=r.length,o;a(r.eq(0)),l(r.eq(0));let u=parseFloat(r.eq(0).find(".position_salary").text()),f=u,m=null;o=new _g("drag-steps",{steps:n,speed:.2,loose:!1,slide:!0,animationCallback:function(b,p){let _=b*(n-1),T=Math.floor(_),E=Math.ceil(_);if(T===E)f=parseFloat(r.eq(T).find(".position_salary").text());else{let C=parseFloat(r.eq(T).find(".position_salary").text()),M=parseFloat(r.eq(E).find(".position_salary").text()),I=_-T;f=C+(M-C)*I}m||g();let k=Math.round(_);l(r.eq(k))},callback:function(b,p){r.each(function(_){let T=$(this).index()/(n-1);if(b==T){l($(this));let E=parseFloat($(this).find(".position_salary").text());f=E,u=E,$(".handle_count").text(E.toFixed(1))}})},dragStopCallback(b,p){$(".handle_fill").addClass("release")}}),$(".handle").on("mousedown touchstart",function(){$(".handle_fill").removeClass("release")}),$(".handle").on("mouseup touchend",function(){$(".handle_fill").addClass("release")}),r.on("mouseenter",function(){let p=$(this).index()/(n-1);o.setValue(p)}),r.on("mouseleave",function(){})}}var $p=sa(Hl(),1),oc;function Fp(){return oc=new $p.default(".swiper-container .swiper-slide > .video_bg-plyr",{clickToPlay:!0,controls:["volume","fullscreen","play-large","play"],loop:{active:!0}}),oc}function Zo(){return oc}function Vp(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function ac(s,e){s===void 0&&(s={}),e===void 0&&(e={}),Object.keys(e).forEach(i=>{typeof s[i]>"u"?s[i]=e[i]:Vp(e[i])&&Vp(s[i])&&Object.keys(e[i]).length>0&&ac(s[i],e[i])})}var Hp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ei(){let s=typeof document<"u"?document:{};return ac(s,Hp),s}var xg={document:Hp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function ht(){let s=typeof window<"u"?window:{};return ac(s,xg),s}function Yp(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function Wp(s){let e=s;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function fs(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function hs(){return Date.now()}function Sg(s){let e=ht(),i;return e.getComputedStyle&&(i=e.getComputedStyle(s,null)),!i&&s.currentStyle&&(i=s.currentStyle),i||(i=s.style),i}function lc(s,e){e===void 0&&(e="x");let i=ht(),t,r,n,o=Sg(s);return i.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new i.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=n.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?r=n.m41:t.length===16?r=parseFloat(t[12]):r=parseFloat(t[4])),e==="y"&&(i.WebKitCSSMatrix?r=n.m42:t.length===16?r=parseFloat(t[13]):r=parseFloat(t[5])),r||0}function In(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Tg(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function ui(){let s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){let t=i<0||arguments.length<=i?void 0:arguments[i];if(t!=null&&!Tg(t)){let r=Object.keys(Object(t)).filter(n=>e.indexOf(n)<0);for(let n=0,o=r.length;n<o;n+=1){let a=r[n],l=Object.getOwnPropertyDescriptor(t,a);l!==void 0&&l.enumerable&&(In(s[a])&&In(t[a])?t[a].__swiper__?s[a]=t[a]:ui(s[a],t[a]):!In(s[a])&&In(t[a])?(s[a]={},t[a].__swiper__?s[a]=t[a]:ui(s[a],t[a])):s[a]=t[a])}}}return s}function Fs(s,e,i){s.style.setProperty(e,i)}function cc(s){let{swiper:e,targetPosition:i,side:t}=s,r=ht(),n=-e.translate,o=null,a,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);let u=i>n?"next":"prev",f=(v,g)=>u==="next"&&v>=g||u==="prev"&&v<=g,m=()=>{a=new Date().getTime(),o===null&&(o=a);let v=Math.max(Math.min((a-o)/l,1),0),g=.5-Math.cos(v*Math.PI)/2,b=n+g*(i-n);if(f(b,i)&&(b=i),e.wrapperEl.scrollTo({[t]:b}),f(b,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:b})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(m)};m()}function Ot(s,e){e===void 0&&(e="");let i=[...s.children];return s instanceof HTMLSlotElement&&i.push(...s.assignedElements()),e?i.filter(t=>t.matches(e)):i}function qp(s,e){let i=e.contains(s);return!i&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(s):i}function Ln(s){try{console.warn(s);return}catch{}}function $i(s,e){e===void 0&&(e=[]);let i=document.createElement(s);return i.classList.add(...Array.isArray(e)?e:Yp(e)),i}function Xp(s,e){let i=[];for(;s.previousElementSibling;){let t=s.previousElementSibling;e?t.matches(e)&&i.push(t):i.push(t),s=t}return i}function Gp(s,e){let i=[];for(;s.nextElementSibling;){let t=s.nextElementSibling;e?t.matches(e)&&i.push(t):i.push(t),s=t}return i}function yr(s,e){return ht().getComputedStyle(s,null).getPropertyValue(e)}function Dn(s){let e=s,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function zn(s,e){let i=[],t=s.parentElement;for(;t;)e?t.matches(e)&&i.push(t):i.push(t),t=t.parentElement;return i}function Jo(s,e,i){let t=ht();return i?s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(t.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(t.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):s.offsetWidth}function _i(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}var uc;function Eg(){let s=ht(),e=ei();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function Jp(){return uc||(uc=Eg()),uc}var dc;function kg(s){let{userAgent:e}=s===void 0?{}:s,i=Jp(),t=ht(),r=t.navigator.platform,n=e||t.navigator.userAgent,o={ios:!1,android:!1},a=t.screen.width,l=t.screen.height,u=n.match(/(Android);?[\s\/]+([\d.]+)?/),f=n.match(/(iPad).*OS\s([\d_]+)/),m=n.match(/(iPod)(.*OS\s([\d_]+))?/),v=!f&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=r==="Win32",b=r==="MacIntel",p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&b&&i.touch&&p.indexOf(`${a}x${l}`)>=0&&(f=n.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),b=!1),u&&!g&&(o.os="android",o.android=!0),(f||v||m)&&(o.os="ios",o.ios=!0),o}function ef(s){return s===void 0&&(s={}),dc||(dc=kg(s)),dc}var pc;function Cg(){let s=ht(),e=ef(),i=!1;function t(){let a=s.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(t()){let a=String(s.navigator.userAgent);if(a.includes("Version/")){let[l,u]=a.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));i=l<16||l===16&&u<2}}let r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),n=t(),o=n||r&&e.ios;return{isSafari:i||n,needPerspectiveFix:i,need3dFix:o,isWebView:r}}function Mg(){return pc||(pc=Cg()),pc}function Ag(s){let{swiper:e,on:i,emit:t}=s,r=ht(),n=null,o=null,a=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(m=>{o=r.requestAnimationFrame(()=>{let{width:v,height:g}=e,b=v,p=g;m.forEach(_=>{let{contentBoxSize:T,contentRect:E,target:k}=_;k&&k!==e.el||(b=E?E.width:(T[0]||T).inlineSize,p=E?E.height:(T[0]||T).blockSize)}),(b!==v||p!==g)&&a()})}),n.observe(e.el))},u=()=>{o&&r.cancelAnimationFrame(o),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},f=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",f)}),i("destroy",()=>{u(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",f)})}function Pg(s){let{swiper:e,extendParams:i,on:t,emit:r}=s,n=[],o=ht(),a=function(f,m){m===void 0&&(m={});let v=o.MutationObserver||o.WebkitMutationObserver,g=new v(b=>{if(e.__preventObserver__)return;if(b.length===1){r("observerUpdate",b[0]);return}let p=function(){r("observerUpdate",b[0])};o.requestAnimationFrame?o.requestAnimationFrame(p):o.setTimeout(p,0)});g.observe(f,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),n.push(g)},l=()=>{if(e.params.observer){if(e.params.observeParents){let f=zn(e.hostEl);for(let m=0;m<f.length;m+=1)a(f[m])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{n.forEach(f=>{f.disconnect()}),n.splice(0,n.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",l),t("destroy",u)}var Og={on(s,e,i){let t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;let r=i?"unshift":"push";return s.split(" ").forEach(n=>{t.eventsListeners[n]||(t.eventsListeners[n]=[]),t.eventsListeners[n][r](e)}),t},once(s,e,i){let t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;function r(){t.off(s,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];e.apply(t,o)}return r.__emitterProxy=e,t.on(s,r,i)},onAny(s,e){let i=this;if(!i.eventsListeners||i.destroyed||typeof s!="function")return i;let t=e?"unshift":"push";return i.eventsAnyListeners.indexOf(s)<0&&i.eventsAnyListeners[t](s),i},offAny(s){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let i=e.eventsAnyListeners.indexOf(s);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(s,e){let i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||s.split(" ").forEach(t=>{typeof e>"u"?i.eventsListeners[t]=[]:i.eventsListeners[t]&&i.eventsListeners[t].forEach((r,n)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&i.eventsListeners[t].splice(n,1)})}),i},emit(){let s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,i,t;for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],i=n.slice(1,n.length),t=s):(e=n[0].events,i=n[0].data,t=n[0].context||s),i.unshift(t),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(u=>{u.apply(t,[l,...i])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(u=>{u.apply(t,i)})}),s}};function Ig(){let s=this,e,i,t=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=t.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?i=s.params.height:i=t.clientHeight,!(e===0&&s.isHorizontal()||i===0&&s.isVertical())&&(e=e-parseInt(yr(t,"padding-left")||0,10)-parseInt(yr(t,"padding-right")||0,10),i=i-parseInt(yr(t,"padding-top")||0,10)-parseInt(yr(t,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(s,{width:e,height:i,size:s.isHorizontal()?e:i}))}function Lg(){let s=this;function e(P,F){return parseFloat(P.getPropertyValue(s.getDirectionLabel(F))||0)}let i=s.params,{wrapperEl:t,slidesEl:r,size:n,rtlTranslate:o,wrongRTL:a}=s,l=s.virtual&&i.virtual.enabled,u=l?s.virtual.slides.length:s.slides.length,f=Ot(r,`.${s.params.slideClass}, swiper-slide`),m=l?s.virtual.slides.length:f.length,v=[],g=[],b=[],p=i.slidesOffsetBefore;typeof p=="function"&&(p=i.slidesOffsetBefore.call(s));let _=i.slidesOffsetAfter;typeof _=="function"&&(_=i.slidesOffsetAfter.call(s));let T=s.snapGrid.length,E=s.slidesGrid.length,k=i.spaceBetween,C=-p,M=0,I=0;if(typeof n>"u")return;typeof k=="string"&&k.indexOf("%")>=0?k=parseFloat(k.replace("%",""))/100*n:typeof k=="string"&&(k=parseFloat(k)),s.virtualSize=-k,f.forEach(P=>{o?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Fs(t,"--swiper-centered-offset-before",""),Fs(t,"--swiper-centered-offset-after",""));let z=i.grid&&i.grid.rows>1&&s.grid;z?s.grid.initSlides(f):s.grid&&s.grid.unsetSlides();let N,w=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(P=>typeof i.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<m;P+=1){N=0;let F;if(f[P]&&(F=f[P]),z&&s.grid.updateSlide(P,F,f),!(f[P]&&yr(F,"display")==="none")){if(i.slidesPerView==="auto"){w&&(f[P].style[s.getDirectionLabel("width")]="");let R=getComputedStyle(F),W=F.style.transform,Y=F.style.webkitTransform;if(W&&(F.style.transform="none"),Y&&(F.style.webkitTransform="none"),i.roundLengths)N=s.isHorizontal()?Jo(F,"width",!0):Jo(F,"height",!0);else{let q=e(R,"width"),ee=e(R,"padding-left"),V=e(R,"padding-right"),me=e(R,"margin-left"),ge=e(R,"margin-right"),L=R.getPropertyValue("box-sizing");if(L&&L==="border-box")N=q+me+ge;else{let{clientWidth:ce,offsetWidth:G}=F;N=q+ee+V+me+ge+(G-ce)}}W&&(F.style.transform=W),Y&&(F.style.webkitTransform=Y),i.roundLengths&&(N=Math.floor(N))}else N=(n-(i.slidesPerView-1)*k)/i.slidesPerView,i.roundLengths&&(N=Math.floor(N)),f[P]&&(f[P].style[s.getDirectionLabel("width")]=`${N}px`);f[P]&&(f[P].swiperSlideSize=N),b.push(N),i.centeredSlides?(C=C+N/2+M/2+k,M===0&&P!==0&&(C=C-n/2-k),P===0&&(C=C-n/2-k),Math.abs(C)<1/1e3&&(C=0),i.roundLengths&&(C=Math.floor(C)),I%i.slidesPerGroup===0&&v.push(C),g.push(C)):(i.roundLengths&&(C=Math.floor(C)),(I-Math.min(s.params.slidesPerGroupSkip,I))%s.params.slidesPerGroup===0&&v.push(C),g.push(C),C=C+N+k),s.virtualSize+=N+k,M=N,I+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+_,o&&a&&(i.effect==="slide"||i.effect==="coverflow")&&(t.style.width=`${s.virtualSize+k}px`),i.setWrapperSize&&(t.style[s.getDirectionLabel("width")]=`${s.virtualSize+k}px`),z&&s.grid.updateWrapperSize(N,v),!i.centeredSlides){let P=[];for(let F=0;F<v.length;F+=1){let R=v[F];i.roundLengths&&(R=Math.floor(R)),v[F]<=s.virtualSize-n&&P.push(R)}v=P,Math.floor(s.virtualSize-n)-Math.floor(v[v.length-1])>1&&v.push(s.virtualSize-n)}if(l&&i.loop){let P=b[0]+k;if(i.slidesPerGroup>1){let F=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/i.slidesPerGroup),R=P*i.slidesPerGroup;for(let W=0;W<F;W+=1)v.push(v[v.length-1]+R)}for(let F=0;F<s.virtual.slidesBefore+s.virtual.slidesAfter;F+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+P),g.push(g[g.length-1]+P),s.virtualSize+=P}if(v.length===0&&(v=[0]),k!==0){let P=s.isHorizontal()&&o?"marginLeft":s.getDirectionLabel("marginRight");f.filter((F,R)=>!i.cssMode||i.loop?!0:R!==f.length-1).forEach(F=>{F.style[P]=`${k}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let P=0;b.forEach(R=>{P+=R+(k||0)}),P-=k;let F=P-n;v=v.map(R=>R<=0?-p:R>F?F+_:R)}if(i.centerInsufficientSlides){let P=0;b.forEach(R=>{P+=R+(k||0)}),P-=k;let F=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(P+F<n){let R=(n-P-F)/2;v.forEach((W,Y)=>{v[Y]=W-R}),g.forEach((W,Y)=>{g[Y]=W+R})}}if(Object.assign(s,{slides:f,snapGrid:v,slidesGrid:g,slidesSizesGrid:b}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Fs(t,"--swiper-centered-offset-before",`${-v[0]}px`),Fs(t,"--swiper-centered-offset-after",`${s.size/2-b[b.length-1]/2}px`);let P=-s.snapGrid[0],F=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(R=>R+P),s.slidesGrid=s.slidesGrid.map(R=>R+F)}if(m!==u&&s.emit("slidesLengthChange"),v.length!==T&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),g.length!==E&&s.emit("slidesGridLengthChange"),i.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!l&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){let P=`${i.containerModifierClass}backface-hidden`,F=s.el.classList.contains(P);m<=i.maxBackfaceHiddenSlides?F||s.el.classList.add(P):F&&s.el.classList.remove(P)}}function Dg(s){let e=this,i=[],t=e.virtual&&e.params.virtual.enabled,r=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);let o=a=>t?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{i.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){let a=e.activeIndex+n;if(a>e.slides.length&&!t)break;i.push(o(a))}else i.push(o(e.activeIndex));for(n=0;n<i.length;n+=1)if(typeof i[n]<"u"){let a=i[n].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function zg(){let s=this,e=s.slides,i=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=(s.isHorizontal()?e[t].offsetLeft:e[t].offsetTop)-i-s.cssOverflowAdjustment()}var jp=(s,e,i)=>{e&&!s.classList.contains(i)?s.classList.add(i):!e&&s.classList.contains(i)&&s.classList.remove(i)};function Rg(s){s===void 0&&(s=this&&this.translate||0);let e=this,i=e.params,{slides:t,rtlTranslate:r,snapGrid:n}=e;if(t.length===0)return;typeof t[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-s;r&&(o=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=i.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<t.length;l+=1){let u=t[l],f=u.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(f-=t[0].swiperSlideOffset);let m=(o+(i.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+a),v=(o-n[0]+(i.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+a),g=-(o-f),b=g+e.slidesSizesGrid[l],p=g>=0&&g<=e.size-e.slidesSizesGrid[l],_=g>=0&&g<e.size-1||b>1&&b<=e.size||g<=0&&b>=e.size;_&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l)),jp(u,_,i.slideVisibleClass),jp(u,p,i.slideFullyVisibleClass),u.progress=r?-m:m,u.originalProgress=r?-v:v}}function Ng(s){let e=this;if(typeof s>"u"){let f=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*f||0}let i=e.params,t=e.maxTranslate()-e.minTranslate(),{progress:r,isBeginning:n,isEnd:o,progressLoop:a}=e,l=n,u=o;if(t===0)r=0,n=!0,o=!0;else{r=(s-e.minTranslate())/t;let f=Math.abs(s-e.minTranslate())<1,m=Math.abs(s-e.maxTranslate())<1;n=f||r<=0,o=m||r>=1,f&&(r=0),m&&(r=1)}if(i.loop){let f=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[f],g=e.slidesGrid[m],b=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(s);p>=v?a=(p-v)/b:a=(p+b-g)/b,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:n,isEnd:o}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(s),n&&!l&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(l&&!n||u&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}var fc=(s,e,i)=>{e&&!s.classList.contains(i)?s.classList.add(i):!e&&s.classList.contains(i)&&s.classList.remove(i)};function Bg(){let s=this,{slides:e,params:i,slidesEl:t,activeIndex:r}=s,n=s.virtual&&i.virtual.enabled,o=s.grid&&i.grid&&i.grid.rows>1,a=m=>Ot(t,`.${i.slideClass}${m}, swiper-slide${m}`)[0],l,u,f;if(n)if(i.loop){let m=r-s.virtual.slidesBefore;m<0&&(m=s.virtual.slides.length+m),m>=s.virtual.slides.length&&(m-=s.virtual.slides.length),l=a(`[data-swiper-slide-index="${m}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(m=>m.column===r)[0],f=e.filter(m=>m.column===r+1)[0],u=e.filter(m=>m.column===r-1)[0]):l=e[r];l&&(o||(f=Gp(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!f&&(f=e[0]),u=Xp(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(m=>{fc(m,m===l,i.slideActiveClass),fc(m,m===f,i.slideNextClass),fc(m,m===u,i.slidePrevClass)}),s.emitSlidesClasses()}var ea=(s,e)=>{if(!s||s.destroyed||!s.params)return;let i=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,t=e.closest(i());if(t){let r=t.querySelector(`.${s.params.lazyPreloaderClass}`);!r&&s.isElement&&(t.shadowRoot?r=t.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{t.shadowRoot&&(r=t.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},hc=(s,e)=>{if(!s.slides[e])return;let i=s.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},yc=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext,i=s.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);let t=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),r=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){let o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,u)=>o+t+u)),s.slides.forEach((l,u)=>{a.includes(l.column)&&hc(s,u)});return}let n=r+t-1;if(s.params.rewind||s.params.loop)for(let o=r-e;o<=n+e;o+=1){let a=(o%i+i)%i;(a<r||a>n)&&hc(s,a)}else for(let o=Math.max(r-e,0);o<=Math.min(n+e,i-1);o+=1)o!==r&&(o>n||o<r)&&hc(s,o)};function $g(s){let{slidesGrid:e,params:i}=s,t=s.rtlTranslate?s.translate:-s.translate,r;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?t>=e[n]&&t<e[n+1]-(e[n+1]-e[n])/2?r=n:t>=e[n]&&t<e[n+1]&&(r=n+1):t>=e[n]&&(r=n);return i.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Fg(s){let e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:t,params:r,activeIndex:n,realIndex:o,snapIndex:a}=e,l=s,u,f=g=>{let b=g-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof l>"u"&&(l=$g(e)),t.indexOf(i)>=0)u=t.indexOf(i);else{let g=Math.min(r.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/r.slidesPerGroup)}if(u>=t.length&&(u=t.length-1),l===n&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(l);return}let m=e.grid&&r.grid&&r.grid.rows>1,v;if(e.virtual&&r.virtual.enabled&&r.loop)v=f(l);else if(m){let g=e.slides.filter(p=>p.column===l)[0],b=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(g),0)),v=Math.floor(b/r.grid.rows)}else if(e.slides[l]){let g=e.slides[l].getAttribute("data-swiper-slide-index");g?v=parseInt(g,10):v=l}else v=l;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:v,previousIndex:n,activeIndex:l}),e.initialized&&yc(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function Vg(s,e){let i=this,t=i.params,r=s.closest(`.${t.slideClass}, swiper-slide`);!r&&i.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${t.slideClass}, swiper-slide`)&&(r=a)});let n=!1,o;if(r){for(let a=0;a<i.slides.length;a+=1)if(i.slides[a]===r){n=!0,o=a;break}}if(r&&n)i.clickedSlide=r,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=o;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}t.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var Hg={updateSize:Ig,updateSlides:Lg,updateAutoHeight:Dg,updateSlidesOffset:zg,updateSlidesProgress:Rg,updateProgress:Ng,updateSlidesClasses:Bg,updateActiveIndex:Fg,updateClickedSlide:Vg};function Yg(s){s===void 0&&(s=this.isHorizontal()?"x":"y");let e=this,{params:i,rtlTranslate:t,translate:r,wrapperEl:n}=e;if(i.virtualTranslate)return t?-r:r;if(i.cssMode)return r;let o=lc(n,s);return o+=e.cssOverflowAdjustment(),t&&(o=-o),o||0}function Wg(s,e){let i=this,{rtlTranslate:t,params:r,wrapperEl:n,progress:o}=i,a=0,l=0,u=0;i.isHorizontal()?a=t?-s:s:l=s,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?a:l,r.cssMode?n[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-a:-l:r.virtualTranslate||(i.isHorizontal()?a-=i.cssOverflowAdjustment():l-=i.cssOverflowAdjustment(),n.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let f,m=i.maxTranslate()-i.minTranslate();m===0?f=0:f=(s-i.minTranslate())/m,f!==o&&i.updateProgress(s),i.emit("setTranslate",i.translate,e)}function qg(){return-this.snapGrid[0]}function Xg(){return-this.snapGrid[this.snapGrid.length-1]}function Gg(s,e,i,t,r){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),t===void 0&&(t=!0);let n=this,{params:o,wrapperEl:a}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;let l=n.minTranslate(),u=n.maxTranslate(),f;if(t&&s>l?f=l:t&&s<u?f=u:f=s,n.updateProgress(f),o.cssMode){let m=n.isHorizontal();if(e===0)a[m?"scrollLeft":"scrollTop"]=-f;else{if(!n.support.smoothScroll)return cc({swiper:n,targetPosition:-f,side:m?"left":"top"}),!0;a.scrollTo({[m?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(f),i&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(f),i&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(v){!n||n.destroyed||v.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,i&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var jg={getTranslate:Yg,setTranslate:Wg,minTranslate:qg,maxTranslate:Xg,translateTo:Gg};function Ug(s,e){let i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${s}ms`,i.wrapperEl.style.transitionDelay=s===0?"0ms":""),i.emit("setTransition",s,e)}function tf(s){let{swiper:e,runCallbacks:i,direction:t,step:r}=s,{activeIndex:n,previousIndex:o}=e,a=t;if(a||(n>o?a="next":n<o?a="prev":a="reset"),e.emit(`transition${r}`),i&&n!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Kg(s,e){s===void 0&&(s=!0);let i=this,{params:t}=i;t.cssMode||(t.autoHeight&&i.updateAutoHeight(),tf({swiper:i,runCallbacks:s,direction:e,step:"Start"}))}function Qg(s,e){s===void 0&&(s=!0);let i=this,{params:t}=i;i.animating=!1,!t.cssMode&&(i.setTransition(0),tf({swiper:i,runCallbacks:s,direction:e,step:"End"}))}var Zg={setTransition:Ug,transitionStart:Kg,transitionEnd:Qg};function Jg(s,e,i,t,r){s===void 0&&(s=0),i===void 0&&(i=!0),typeof s=="string"&&(s=parseInt(s,10));let n=this,o=s;o<0&&(o=0);let{params:a,snapGrid:l,slidesGrid:u,previousIndex:f,activeIndex:m,rtlTranslate:v,wrapperEl:g,enabled:b}=n;if(!b&&!t&&!r||n.destroyed||n.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);let p=Math.min(n.params.slidesPerGroupSkip,o),_=p+Math.floor((o-p)/n.params.slidesPerGroup);_>=l.length&&(_=l.length-1);let T=-l[_];if(a.normalizeSlideIndex)for(let k=0;k<u.length;k+=1){let C=-Math.floor(T*100),M=Math.floor(u[k]*100),I=Math.floor(u[k+1]*100);typeof u[k+1]<"u"?C>=M&&C<I-(I-M)/2?o=k:C>=M&&C<I&&(o=k+1):C>=M&&(o=k)}if(n.initialized&&o!==m&&(!n.allowSlideNext&&(v?T>n.translate&&T>n.minTranslate():T<n.translate&&T<n.minTranslate())||!n.allowSlidePrev&&T>n.translate&&T>n.maxTranslate()&&(m||0)!==o))return!1;o!==(f||0)&&i&&n.emit("beforeSlideChangeStart"),n.updateProgress(T);let E;if(o>m?E="next":o<m?E="prev":E="reset",v&&-T===n.translate||!v&&T===n.translate)return n.updateActiveIndex(o),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(T),E!=="reset"&&(n.transitionStart(i,E),n.transitionEnd(i,E)),!1;if(a.cssMode){let k=n.isHorizontal(),C=v?T:-T;if(e===0){let M=n.virtual&&n.params.virtual.enabled;M&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),M&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[k?"scrollLeft":"scrollTop"]=C})):g[k?"scrollLeft":"scrollTop"]=C,M&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return cc({swiper:n,targetPosition:C,side:k?"left":"top"}),!0;g.scrollTo({[k?"left":"top"]:C,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(T),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,t),n.transitionStart(i,E),e===0?n.transitionEnd(i,E):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(C){!n||n.destroyed||C.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(i,E))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function ey(s,e,i,t){s===void 0&&(s=0),i===void 0&&(i=!0),typeof s=="string"&&(s=parseInt(s,10));let r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let n=r.grid&&r.params.grid&&r.params.grid.rows>1,o=s;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(n){let v=o*r.params.grid.rows;a=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===v)[0].column}else a=r.getSlideIndexByData(o);let l=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u}=r.params,f=r.params.slidesPerView;f==="auto"?f=r.slidesPerViewDynamic():(f=Math.ceil(parseFloat(r.params.slidesPerView,10)),u&&f%2===0&&(f=f+1));let m=l-a<f;if(u&&(m=m||a<Math.ceil(f/2)),t&&u&&r.params.slidesPerView!=="auto"&&!n&&(m=!1),m){let v=u?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?a+1:a-l+1,slideRealIndex:v==="next"?r.realIndex:void 0})}if(n){let v=o*r.params.grid.rows;o=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===v)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,i,t)}),r}function ty(s,e,i){e===void 0&&(e=!0);let t=this,{enabled:r,params:n,animating:o}=t;if(!r||t.destroyed)return t;typeof s>"u"&&(s=t.params.speed);let a=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(a=Math.max(t.slidesPerViewDynamic("current",!0),1));let l=t.activeIndex<n.slidesPerGroupSkip?1:a,u=t.virtual&&n.virtual.enabled;if(n.loop){if(o&&!u&&n.loopPreventsSliding)return!1;if(t.loopFix({direction:"next"}),t._clientLeft=t.wrapperEl.clientLeft,t.activeIndex===t.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{t.slideTo(t.activeIndex+l,s,e,i)}),!0}return n.rewind&&t.isEnd?t.slideTo(0,s,e,i):t.slideTo(t.activeIndex+l,s,e,i)}function iy(s,e,i){e===void 0&&(e=!0);let t=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=t;if(!l||t.destroyed)return t;typeof s>"u"&&(s=t.params.speed);let f=t.virtual&&r.virtual.enabled;if(r.loop){if(u&&!f&&r.loopPreventsSliding)return!1;t.loopFix({direction:"prev"}),t._clientLeft=t.wrapperEl.clientLeft}let m=a?t.translate:-t.translate;function v(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}let g=v(m),b=n.map(T=>v(T)),p=n[b.indexOf(g)-1];if(typeof p>"u"&&r.cssMode){let T;n.forEach((E,k)=>{g>=E&&(T=k)}),typeof T<"u"&&(p=n[T>0?T-1:T])}let _=0;if(typeof p<"u"&&(_=o.indexOf(p),_<0&&(_=t.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(_=_-t.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),r.rewind&&t.isBeginning){let T=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1;return t.slideTo(T,s,e,i)}else if(r.loop&&t.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{t.slideTo(_,s,e,i)}),!0;return t.slideTo(_,s,e,i)}function ry(s,e,i){e===void 0&&(e=!0);let t=this;if(!t.destroyed)return typeof s>"u"&&(s=t.params.speed),t.slideTo(t.activeIndex,s,e,i)}function sy(s,e,i,t){e===void 0&&(e=!0),t===void 0&&(t=.5);let r=this;if(r.destroyed)return;typeof s>"u"&&(s=r.params.speed);let n=r.activeIndex,o=Math.min(r.params.slidesPerGroupSkip,n),a=o+Math.floor((n-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){let u=r.snapGrid[a],f=r.snapGrid[a+1];l-u>(f-u)*t&&(n+=r.params.slidesPerGroup)}else{let u=r.snapGrid[a-1],f=r.snapGrid[a];l-u<=(f-u)*t&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,s,e,i)}function ny(){let s=this;if(s.destroyed)return;let{params:e,slidesEl:i}=s,t=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView,r=s.clickedIndex,n,o=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;n=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<s.loopedSlides-t/2||r>s.slides.length-s.loopedSlides+t/2?(s.loopFix(),r=s.getSlideIndex(Ot(i,`${o}[data-swiper-slide-index="${n}"]`)[0]),fs(()=>{s.slideTo(r)})):s.slideTo(r):r>s.slides.length-t?(s.loopFix(),r=s.getSlideIndex(Ot(i,`${o}[data-swiper-slide-index="${n}"]`)[0]),fs(()=>{s.slideTo(r)})):s.slideTo(r)}else s.slideTo(r)}var oy={slideTo:Jg,slideToLoop:ey,slideNext:ty,slidePrev:iy,slideReset:ry,slideToClosest:sy,slideToClickedSlide:ny};function ay(s){let e=this,{params:i,slidesEl:t}=e;if(!i.loop||e.virtual&&e.params.virtual.enabled)return;let r=()=>{Ot(t,`.${i.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},n=e.grid&&i.grid&&i.grid.rows>1,o=i.slidesPerGroup*(n?i.grid.rows:1),a=e.slides.length%o!==0,l=n&&e.slides.length%i.grid.rows!==0,u=f=>{for(let m=0;m<f;m+=1){let v=e.isElement?$i("swiper-slide",[i.slideBlankClass]):$i("div",[i.slideClass,i.slideBlankClass]);e.slidesEl.append(v)}};if(a){if(i.loopAddBlankSlides){let f=o-e.slides.length%o;u(f),e.recalcSlides(),e.updateSlides()}else Ln("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(i.loopAddBlankSlides){let f=i.grid.rows-e.slides.length%i.grid.rows;u(f),e.recalcSlides(),e.updateSlides()}else Ln("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:s,direction:i.centeredSlides?void 0:"next"})}function ly(s){let{slideRealIndex:e,slideTo:i=!0,direction:t,setTranslate:r,activeSlideIndex:n,byController:o,byMousewheel:a}=s===void 0?{}:s,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:u,allowSlidePrev:f,allowSlideNext:m,slidesEl:v,params:g}=l,{centeredSlides:b}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){i&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=m,l.emit("loopFix");return}let p=g.slidesPerView;p==="auto"?p=l.slidesPerViewDynamic():(p=Math.ceil(parseFloat(g.slidesPerView,10)),b&&p%2===0&&(p=p+1));let _=g.slidesPerGroupAuto?p:g.slidesPerGroup,T=_;T%_!==0&&(T+=_-T%_),T+=g.loopAdditionalSlides,l.loopedSlides=T;let E=l.grid&&g.grid&&g.grid.rows>1;u.length<p+T?Ln("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):E&&g.grid.fill==="row"&&Ln("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let k=[],C=[],M=l.activeIndex;typeof n>"u"?n=l.getSlideIndex(u.filter(W=>W.classList.contains(g.slideActiveClass))[0]):M=n;let I=t==="next"||!t,z=t==="prev"||!t,N=0,w=0,P=E?Math.ceil(u.length/g.grid.rows):u.length,R=(E?u[n].column:n)+(b&&typeof r>"u"?-p/2+.5:0);if(R<T){N=Math.max(T-R,_);for(let W=0;W<T-R;W+=1){let Y=W-Math.floor(W/P)*P;if(E){let q=P-Y-1;for(let ee=u.length-1;ee>=0;ee-=1)u[ee].column===q&&k.push(ee)}else k.push(P-Y-1)}}else if(R+p>P-T){w=Math.max(R-(P-T*2),_);for(let W=0;W<w;W+=1){let Y=W-Math.floor(W/P)*P;E?u.forEach((q,ee)=>{q.column===Y&&C.push(ee)}):C.push(Y)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),z&&k.forEach(W=>{u[W].swiperLoopMoveDOM=!0,v.prepend(u[W]),u[W].swiperLoopMoveDOM=!1}),I&&C.forEach(W=>{u[W].swiperLoopMoveDOM=!0,v.append(u[W]),u[W].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():E&&(k.length>0&&z||C.length>0&&I)&&l.slides.forEach((W,Y)=>{l.grid.updateSlide(Y,W,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),i){if(k.length>0&&z){if(typeof e>"u"){let W=l.slidesGrid[M],q=l.slidesGrid[M+N]-W;a?l.setTranslate(l.translate-q):(l.slideTo(M+Math.ceil(N),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else if(r){let W=E?k.length/g.grid.rows:k.length;l.slideTo(l.activeIndex+W,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(C.length>0&&I)if(typeof e>"u"){let W=l.slidesGrid[M],q=l.slidesGrid[M-w]-W;a?l.setTranslate(l.translate-q):(l.slideTo(M-w,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else{let W=E?C.length/g.grid.rows:C.length;l.slideTo(l.activeIndex-W,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=m,l.controller&&l.controller.control&&!o){let W={slideRealIndex:e,direction:t,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({...W,slideTo:Y.params.slidesPerView===g.slidesPerView?i:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...W,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?i:!1})}l.emit("loopFix")}function cy(){let s=this,{params:e,slidesEl:i}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();let t=[];s.slides.forEach(r=>{let n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;t[n]=r}),s.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),t.forEach(r=>{i.append(r)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var uy={loopCreate:ay,loopFix:ly,loopDestroy:cy};function dy(s){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function py(){let s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var fy={setGrabCursor:dy,unsetGrabCursor:py};function hy(s,e){e===void 0&&(e=this);function i(t){if(!t||t===ei()||t===ht())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(s);return!r&&!t.getRootNode?null:r||i(t.getRootNode().host)}return i(e)}function Up(s,e,i){let t=ht(),{params:r}=s,n=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return n&&(i<=o||i>=t.innerWidth-o)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function my(s){let e=this,i=ei(),t=s;t.originalEvent&&(t=t.originalEvent);let r=e.touchEventsData;if(t.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==t.pointerId)return;r.pointerId=t.pointerId}else t.type==="touchstart"&&t.targetTouches.length===1&&(r.touchId=t.targetTouches[0].identifier);if(t.type==="touchstart"){Up(e,t,t.targetTouches[0].pageX);return}let{params:n,touches:o,enabled:a}=e;if(!a||!n.simulateTouch&&t.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let l=t.target;if(n.touchEventsTarget==="wrapper"&&!qp(l,e.wrapperEl)||"which"in t&&t.which===3||"button"in t&&t.button>0||r.isTouched&&r.isMoved)return;let u=!!n.noSwipingClass&&n.noSwipingClass!=="",f=t.composedPath?t.composedPath():t.path;u&&t.target&&t.target.shadowRoot&&f&&(l=f[0]);let m=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,v=!!(t.target&&t.target.shadowRoot);if(n.noSwiping&&(v?hy(m,l):l.closest(m))){e.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=t.pageX,o.currentY=t.pageY;let g=o.currentX,b=o.currentY;if(!Up(e,t,g))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=b,r.touchStartTime=hs(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let p=!0;l.matches(r.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),i.activeElement&&i.activeElement.matches(r.focusableElements)&&i.activeElement!==l&&i.activeElement.blur();let _=p&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||_)&&!l.isContentEditable&&t.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",t)}function gy(s){let e=ei(),i=this,t=i.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:a}=i;if(!a||!r.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(t.touchId!==null||l.pointerId!==t.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(I=>I.identifier===t.touchId)[0],!u||u.identifier!==t.touchId)return}else u=l;if(!t.isTouched){t.startMoving&&t.isScrolling&&i.emit("touchMoveOpposite",l);return}let f=u.pageX,m=u.pageY;if(l.preventedByNestedSwiper){n.startX=f,n.startY=m;return}if(!i.allowTouchMove){l.target.matches(t.focusableElements)||(i.allowClick=!1),t.isTouched&&(Object.assign(n,{startX:f,startY:m,currentX:f,currentY:m}),t.touchStartTime=hs());return}if(r.touchReleaseOnEdges&&!r.loop){if(i.isVertical()){if(m<n.startY&&i.translate<=i.maxTranslate()||m>n.startY&&i.translate>=i.minTranslate()){t.isTouched=!1,t.isMoved=!1;return}}else if(f<n.startX&&i.translate<=i.maxTranslate()||f>n.startX&&i.translate>=i.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(t.focusableElements)){t.isMoved=!0,i.allowClick=!1;return}t.allowTouchCallbacks&&i.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=f,n.currentY=m;let v=n.currentX-n.startX,g=n.currentY-n.startY;if(i.params.threshold&&Math.sqrt(v**2+g**2)<i.params.threshold)return;if(typeof t.isScrolling>"u"){let I;i.isHorizontal()&&n.currentY===n.startY||i.isVertical()&&n.currentX===n.startX?t.isScrolling=!1:v*v+g*g>=25&&(I=Math.atan2(Math.abs(g),Math.abs(v))*180/Math.PI,t.isScrolling=i.isHorizontal()?I>r.touchAngle:90-I>r.touchAngle)}if(t.isScrolling&&i.emit("touchMoveOpposite",l),typeof t.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(t.startMoving=!0),t.isScrolling||l.type==="touchmove"&&t.preventTouchMoveFromPointerMove){t.isTouched=!1;return}if(!t.startMoving)return;i.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let b=i.isHorizontal()?v:g,p=i.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),p=Math.abs(p)*(o?1:-1)),n.diff=b,b*=r.touchRatio,o&&(b=-b,p=-p);let _=i.touchesDirection;i.swipeDirection=b>0?"prev":"next",i.touchesDirection=p>0?"prev":"next";let T=i.params.loop&&!r.cssMode,E=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!t.isMoved){if(T&&E&&i.loopFix({direction:i.swipeDirection}),t.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){let I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(I)}t.allowMomentumBounce=!1,r.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",l)}let k;if(new Date().getTime(),t.isMoved&&t.allowThresholdMove&&_!==i.touchesDirection&&T&&E&&Math.abs(b)>=1){Object.assign(n,{startX:f,startY:m,currentX:f,currentY:m,startTranslate:t.currentTranslate}),t.loopSwapReset=!0,t.startTranslate=t.currentTranslate;return}i.emit("sliderMove",l),t.isMoved=!0,t.currentTranslate=b+t.startTranslate;let C=!0,M=r.resistanceRatio;if(r.touchReleaseOnEdges&&(M=0),b>0?(T&&E&&!k&&t.allowThresholdMove&&t.currentTranslate>(r.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(r.slidesPerView!=="auto"&&i.slides.length-r.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),t.currentTranslate>i.minTranslate()&&(C=!1,r.resistance&&(t.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+t.startTranslate+b)**M))):b<0&&(T&&E&&!k&&t.allowThresholdMove&&t.currentTranslate<(r.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(r.slidesPerView!=="auto"&&i.slides.length-r.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(r.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),t.currentTranslate<i.maxTranslate()&&(C=!1,r.resistance&&(t.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-t.startTranslate-b)**M))),C&&(l.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&t.currentTranslate<t.startTranslate&&(t.currentTranslate=t.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&t.currentTranslate>t.startTranslate&&(t.currentTranslate=t.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(t.currentTranslate=t.startTranslate),r.threshold>0)if(Math.abs(b)>r.threshold||t.allowThresholdMove){if(!t.allowThresholdMove){t.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,t.currentTranslate=t.startTranslate,n.diff=i.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{t.currentTranslate=t.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&i.freeMode||r.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(t.currentTranslate),i.setTranslate(t.currentTranslate))}function yy(s){let e=this,i=e.touchEventsData,t=s;t.originalEvent&&(t=t.originalEvent);let r;if(t.type==="touchend"||t.type==="touchcancel"){if(r=[...t.changedTouches].filter(M=>M.identifier===i.touchId)[0],!r||r.identifier!==i.touchId)return}else{if(i.touchId!==null||t.pointerId!==i.pointerId)return;r=t}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(t.type)&&!(["pointercancel","contextmenu"].includes(t.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;let{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:f}=e;if(!f||!o.simulateTouch&&t.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",t),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&o.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}o.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let m=hs(),v=m-i.touchStartTime;if(e.allowClick){let M=t.path||t.composedPath&&t.composedPath();e.updateClickedSlide(M&&M[0]||t.target,M),e.emit("tap click",t),v<300&&m-i.lastClickTime<300&&e.emit("doubleTap doubleClick",t)}if(i.lastClickTime=hs(),fs(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||a.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let g;if(o.followFinger?g=l?e.translate:-e.translate:g=-i.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:g});return}let b=g>=-e.maxTranslate()&&!e.params.loop,p=0,_=e.slidesSizesGrid[0];for(let M=0;M<u.length;M+=M<o.slidesPerGroupSkip?1:o.slidesPerGroup){let I=M<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[M+I]<"u"?(b||g>=u[M]&&g<u[M+I])&&(p=M,_=u[M+I]-u[M]):(b||g>=u[M])&&(p=M,_=u[u.length-1]-u[u.length-2])}let T=null,E=null;o.rewind&&(e.isBeginning?E=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(T=0));let k=(g-u[p])/_,C=p<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(k>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?T:p+C):e.slideTo(p)),e.swipeDirection==="prev"&&(k>1-o.longSwipesRatio?e.slideTo(p+C):E!==null&&k<0&&Math.abs(k)>o.longSwipesRatio?e.slideTo(E):e.slideTo(p))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(t.target===e.navigation.nextEl||t.target===e.navigation.prevEl)?t.target===e.navigation.nextEl?e.slideTo(p+C):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(T!==null?T:p+C),e.swipeDirection==="prev"&&e.slideTo(E!==null?E:p))}}function Kp(){let s=this,{params:e,el:i}=s;if(i&&i.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();let{allowSlideNext:t,allowSlidePrev:r,snapGrid:n}=s,o=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();let a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!a?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!o?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=r,s.allowSlideNext=t,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function vy(s){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function by(){let s=this,{wrapperEl:e,rtlTranslate:i,enabled:t}=s;if(!t)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let r,n=s.maxTranslate()-s.minTranslate();n===0?r=0:r=(s.translate-s.minTranslate())/n,r!==s.progress&&s.updateProgress(i?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function wy(s){let e=this;ea(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function _y(){let s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}var rf=(s,e)=>{let i=ei(),{params:t,el:r,wrapperEl:n,device:o}=s,a=!!t.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;!r||typeof r=="string"||(i[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",s.onTouchStart,{passive:!1}),r[l]("pointerdown",s.onTouchStart,{passive:!1}),i[l]("touchmove",s.onTouchMove,{passive:!1,capture:a}),i[l]("pointermove",s.onTouchMove,{passive:!1,capture:a}),i[l]("touchend",s.onTouchEnd,{passive:!0}),i[l]("pointerup",s.onTouchEnd,{passive:!0}),i[l]("pointercancel",s.onTouchEnd,{passive:!0}),i[l]("touchcancel",s.onTouchEnd,{passive:!0}),i[l]("pointerout",s.onTouchEnd,{passive:!0}),i[l]("pointerleave",s.onTouchEnd,{passive:!0}),i[l]("contextmenu",s.onTouchEnd,{passive:!0}),(t.preventClicks||t.preventClicksPropagation)&&r[l]("click",s.onClick,!0),t.cssMode&&n[l]("scroll",s.onScroll),t.updateOnWindowResize?s[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Kp,!0):s[u]("observerUpdate",Kp,!0),r[l]("load",s.onLoad,{capture:!0}))};function xy(){let s=this,{params:e}=s;s.onTouchStart=my.bind(s),s.onTouchMove=gy.bind(s),s.onTouchEnd=yy.bind(s),s.onDocumentTouchStart=_y.bind(s),e.cssMode&&(s.onScroll=by.bind(s)),s.onClick=vy.bind(s),s.onLoad=wy.bind(s),rf(s,"on")}function Sy(){rf(this,"off")}var Ty={attachEvents:xy,detachEvents:Sy},Qp=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function Ey(){let s=this,{realIndex:e,initialized:i,params:t,el:r}=s,n=t.breakpoints;if(!n||n&&Object.keys(n).length===0)return;let o=s.getBreakpoint(n,s.params.breakpointsBase,s.el);if(!o||s.currentBreakpoint===o)return;let l=(o in n?n[o]:void 0)||s.originalParams,u=Qp(s,t),f=Qp(s,l),m=s.params.grabCursor,v=l.grabCursor,g=t.enabled;u&&!f?(r.classList.remove(`${t.containerModifierClass}grid`,`${t.containerModifierClass}grid-column`),s.emitContainerClasses()):!u&&f&&(r.classList.add(`${t.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&t.grid.fill==="column")&&r.classList.add(`${t.containerModifierClass}grid-column`),s.emitContainerClasses()),m&&!v?s.unsetGrabCursor():!m&&v&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof l[k]>"u")return;let C=t[k]&&t[k].enabled,M=l[k]&&l[k].enabled;C&&!M&&s[k].disable(),!C&&M&&s[k].enable()});let b=l.direction&&l.direction!==t.direction,p=t.loop&&(l.slidesPerView!==t.slidesPerView||b),_=t.loop;b&&i&&s.changeDirection(),ui(s.params,l);let T=s.params.enabled,E=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),g&&!T?s.disable():!g&&T&&s.enable(),s.currentBreakpoint=o,s.emit("_beforeBreakpoint",l),i&&(p?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!_&&E?(s.loopCreate(e),s.updateSlides()):_&&!E&&s.loopDestroy()),s.emit("breakpoint",l)}function ky(s,e,i){if(e===void 0&&(e="window"),!s||e==="container"&&!i)return;let t=!1,r=ht(),n=e==="window"?r.innerHeight:i.clientHeight,o=Object.keys(s).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){let l=parseFloat(a.substr(1));return{value:n*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){let{point:l,value:u}=o[a];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(t=l):u<=i.clientWidth&&(t=l)}return t||"max"}var Cy={setBreakpoint:Ey,getBreakpoint:ky};function My(s,e){let i=[];return s.forEach(t=>{typeof t=="object"?Object.keys(t).forEach(r=>{t[r]&&i.push(e+r)}):typeof t=="string"&&i.push(e+t)}),i}function Ay(){let s=this,{classNames:e,params:i,rtl:t,el:r,device:n}=s,o=My(["initialized",i.direction,{"free-mode":s.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:t},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...o),r.classList.add(...e),s.emitContainerClasses()}function Py(){let s=this,{el:e,classNames:i}=s;!e||typeof e=="string"||(e.classList.remove(...i),s.emitContainerClasses())}var Oy={addClasses:Ay,removeClasses:Py};function Iy(){let s=this,{isLocked:e,params:i}=s,{slidesOffsetBefore:t}=i;if(t){let r=s.slides.length-1,n=s.slidesGrid[r]+s.slidesSizesGrid[r]+t*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;i.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),i.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Ly={checkOverflow:Iy},Zp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Dy(s,e){return function(t){t===void 0&&(t={});let r=Object.keys(t)[0],n=t[r];if(typeof n!="object"||n===null){ui(e,t);return}if(s[r]===!0&&(s[r]={enabled:!0}),r==="navigation"&&s[r]&&s[r].enabled&&!s[r].prevEl&&!s[r].nextEl&&(s[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&s[r]&&s[r].enabled&&!s[r].el&&(s[r].auto=!0),!(r in s&&"enabled"in n)){ui(e,t);return}typeof s[r]=="object"&&!("enabled"in s[r])&&(s[r].enabled=!0),s[r]||(s[r]={enabled:!1}),ui(e,t)}}var mc={eventsEmitter:Og,update:Hg,translate:jg,transition:Zg,slide:oy,loop:uy,grabCursor:fy,events:Ty,breakpoints:Cy,checkOverflow:Ly,classes:Oy},gc={},Nr=class s{constructor(){let e,i;for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?i=r[0]:[e,i]=r,i||(i={}),i=ui({},i),e&&!i.el&&(i.el=e);let o=ei();if(i.el&&typeof i.el=="string"&&o.querySelectorAll(i.el).length>1){let f=[];return o.querySelectorAll(i.el).forEach(m=>{let v=ui({},i,{el:m});f.push(new s(v))}),f}let a=this;a.__swiper__=!0,a.support=Jp(),a.device=ef({userAgent:i.userAgent}),a.browser=Mg(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],i.modules&&Array.isArray(i.modules)&&a.modules.push(...i.modules);let l={};a.modules.forEach(f=>{f({params:i,swiper:a,extendParams:Dy(i,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});let u=ui({},Zp,l);return a.params=ui({},u,gc,i),a.originalParams=ui({},a.params),a.passedParams=ui({},i),a.params&&a.params.on&&Object.keys(a.params.on).forEach(f=>{a.on(f,a.params.on[f])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){let{slidesEl:i,params:t}=this,r=Ot(i,`.${t.slideClass}, swiper-slide`),n=Dn(r[0]);return Dn(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(i=>i.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){let e=this,{slidesEl:i,params:t}=e;e.slides=Ot(i,`.${t.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){let t=this;e=Math.min(Math.max(e,0),1);let r=t.minTranslate(),o=(t.maxTranslate()-r)*e+r;t.translateTo(o,typeof i>"u"?0:i),t.updateActiveIndex(),t.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let i=e.el.className.split(" ").filter(t=>t.indexOf("swiper")===0||t.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){let i=this;return i.destroyed?"":e.className.split(" ").filter(t=>t.indexOf("swiper-slide")===0||t.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let i=[];e.slides.forEach(t=>{let r=e.getSlideClasses(t);i.push({slideEl:t,classNames:r}),e.emit("_slideClass",t,r)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);let t=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=t,f=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let m=n[u]?Math.ceil(n[u].swiperSlideSize):0,v;for(let g=u+1;g<n.length;g+=1)n[g]&&!v&&(m+=Math.ceil(n[g].swiperSlideSize),f+=1,m>l&&(v=!0));for(let g=u-1;g>=0;g-=1)n[g]&&!v&&(m+=n[g].swiperSlideSize,f+=1,m>l&&(v=!0))}else if(e==="current")for(let m=u+1;m<n.length;m+=1)(i?o[m]+a[m]-o[u]<l:o[m]-o[u]<l)&&(f+=1);else for(let m=u-1;m>=0;m-=1)o[u]-o[m]<l&&(f+=1);return f}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:i,params:t}=e;t.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ea(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(t.freeMode&&t.freeMode.enabled&&!t.cssMode)r(),t.autoHeight&&e.updateAutoHeight();else{if((t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!t.centeredSlides){let o=e.virtual&&t.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(o.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||r()}t.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);let t=this,r=t.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(t.el.classList.remove(`${t.params.containerModifierClass}${r}`),t.el.classList.add(`${t.params.containerModifierClass}${e}`),t.emitContainerClasses(),t.params.direction=e,t.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),t.emit("changeDirection"),i&&t.update()),t}changeLanguageDirection(e){let i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){let i=this;if(i.mounted)return!0;let t=e||i.params.el;if(typeof t=="string"&&(t=document.querySelector(t)),!t)return!1;t.swiper=i,t.parentNode&&t.parentNode.host&&t.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);let r=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`,o=t&&t.shadowRoot&&t.shadowRoot.querySelector?t.shadowRoot.querySelector(r()):Ot(t,r())[0];return!o&&i.params.createElements&&(o=$i("div",i.params.wrapperClass),t.append(o),Ot(t,`.${i.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(i,{el:t,wrapperEl:o,slidesEl:i.isElement&&!t.parentNode.host.slideSlots?t.parentNode.host:o,hostEl:i.isElement?t.parentNode.host:t,mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||yr(t,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||yr(t,"direction")==="rtl"),wrongRTL:yr(o,"display")==="-webkit-box"}),!0}init(e){let i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(),i.attachEvents();let r=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?ea(i,n):n.addEventListener("load",o=>{ea(i,o.target)})}),yc(i),i.initialized=!0,yc(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);let t=this,{params:r,el:n,wrapperEl:o,slides:a}=t;return typeof t.params>"u"||t.destroyed||(t.emit("beforeDestroy"),t.initialized=!1,t.detachEvents(),r.loop&&t.loopDestroy(),i&&(t.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),t.emit("destroy"),Object.keys(t.eventsListeners).forEach(l=>{t.off(l)}),e!==!1&&(t.el&&typeof t.el!="string"&&(t.el.swiper=null),Wp(t)),t.destroyed=!0),null}static extendDefaults(e){ui(gc,e)}static get extendedDefaults(){return gc}static get defaults(){return Zp}static installModule(e){s.prototype.__modules__||(s.prototype.__modules__=[]);let i=s.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>s.installModule(i)),s):(s.installModule(e),s)}};Object.keys(mc).forEach(s=>{Object.keys(mc[s]).forEach(e=>{Nr.prototype[e]=mc[s][e]})});Nr.use([Ag,Pg]);function ta(s,e,i,t){return s.params.createElements&&Object.keys(t).forEach(r=>{if(!i[r]&&i.auto===!0){let n=Ot(s.el,`.${t[r]}`)[0];n||(n=$i("div",t[r]),n.className=t[r],s.el.append(n)),i[r]=n,e[r]=n}}),i}function vc(s){let{swiper:e,extendParams:i,on:t,emit:r}=s;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(b){let p;return b&&typeof b=="string"&&e.isElement&&(p=e.el.querySelector(b),p)?p:(b&&(typeof b=="string"&&(p=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&p&&p.length>1&&e.el.querySelectorAll(b).length===1?p=e.el.querySelector(b):p&&p.length===1&&(p=p[0])),b&&!p?b:p)}function o(b,p){let _=e.params.navigation;b=_i(b),b.forEach(T=>{T&&(T.classList[p?"add":"remove"](..._.disabledClass.split(" ")),T.tagName==="BUTTON"&&(T.disabled=p),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](_.lockClass))})}function a(){let{nextEl:b,prevEl:p}=e.navigation;if(e.params.loop){o(p,!1),o(b,!1);return}o(p,e.isBeginning&&!e.params.rewind),o(b,e.isEnd&&!e.params.rewind)}function l(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function u(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function f(){let b=e.params.navigation;if(e.params.navigation=ta(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let p=n(b.nextEl),_=n(b.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:_}),p=_i(p),_=_i(_);let T=(E,k)=>{E&&E.addEventListener("click",k==="next"?u:l),!e.enabled&&E&&E.classList.add(...b.lockClass.split(" "))};p.forEach(E=>T(E,"next")),_.forEach(E=>T(E,"prev"))}function m(){let{nextEl:b,prevEl:p}=e.navigation;b=_i(b),p=_i(p);let _=(T,E)=>{T.removeEventListener("click",E==="next"?u:l),T.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(T=>_(T,"next")),p.forEach(T=>_(T,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?g():(f(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{nextEl:b,prevEl:p}=e.navigation;if(b=_i(b),p=_i(p),e.enabled){a();return}[...b,...p].filter(_=>!!_).forEach(_=>_.classList.add(e.params.navigation.lockClass))}),t("click",(b,p)=>{let{nextEl:_,prevEl:T}=e.navigation;_=_i(_),T=_i(T);let E=p.target,k=T.includes(E)||_.includes(E);if(e.isElement&&!k){let C=p.path||p.composedPath&&p.composedPath();C&&(k=C.find(M=>_.includes(M)||T.includes(M)))}if(e.params.navigation.hideOnClick&&!k){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===E||e.pagination.el.contains(E)))return;let C;_.length?C=_[0].classList.contains(e.params.navigation.hiddenClass):T.length&&(C=T[0].classList.contains(e.params.navigation.hiddenClass)),r(C===!0?"navigationShow":"navigationHide"),[..._,...T].filter(M=>!!M).forEach(M=>M.classList.toggle(e.params.navigation.hiddenClass))}});let v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),a()},g=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:v,disable:g,update:a,init:f,destroy:m})}function af(){let s=!1,e=!1,i=new Nr(".swiper-container.is-portfolio",{modules:[vc],slidesPerView:"auto",spaceBetween:32,followFinger:!0,freeMode:!1,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:"#right-button",prevEl:"#left-button",disabledClass:"disabled_swiper_button"},breakpoints:{640:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:56},1440:{slidesPerView:3,spaceBetween:32}}});i.on("activeIndexChange",function(m){let v=m.slides[m.activeIndex].getAttribute("CardLabel"),g=m.slides[m.activeIndex].getAttribute("CardColor"),b=document.querySelector(".active-card-label");b&&(b.textContent=v,b.style.color=g)});let t=Rt.timeline({paused:!0,defaults:{ease:"power1.inOut",duration:1.8},onComplete:()=>{Rt.set(".your-button",{opacity:0,visibility:"hidden"});let m=Zo();m&&typeof m.play=="function"?(m.play(),a(),s=!0,e=!0,o()):console.warn("Player de v\xEDdeo n\xE3o est\xE1 pronto ou n\xE3o tem m\xE9todo play")}});t.fromTo(".your-div",{height:()=>getComputedStyle(document.querySelector(".your-div")).height},{height:"100%",onStart:r}),t.fromTo(".your-image",{scale:1.8},{scale:1},"<");function r(){i.slideNext(),i.slideNext()}function n(){e||t.timeScale(1).play()}function o(){$(".your-button").attr("data-cursor-text","Clique")}$(".your-button").on("click",()=>{s&&n()}),$(".your-button").on("mousedown touchstart",()=>{s||n()}),$(".your-button").on("mouseup touchend",()=>{t.progress()<1&&!e&&!s&&t.timeScale(2).reverse()});function a(){$(".nav_logo").addClass("hide"),$(".close-icon").addClass("playing"),$(".nav_component").addClass("dark"),$(".menu_link").addClass("white"),$(".effect_visual_inner").css("opacity","0"),$(".effect_visual_inner").css("display","none")}function l(){$(".nav_logo").removeClass("hide"),$(".close-icon").removeClass("playing"),$(".nav_component").removeClass("dark"),$(".menu_link").removeClass("white"),$(".effect_visual_inner").css("opacity","1"),$(".effect_visual_inner").css("display","flex"),Rt.set(".your-button",{opacity:1,visibility:"visible"}),s&&$(".play_status").text("Continuar assistindo")}function u(){t.timeScale(2).reverse();let m=Zo();m&&typeof m.pause=="function"&&m.pause(),l(),e=!1}$(".close-icon").on("click",()=>{e&&u()});let f=Zo();f.on("pause",()=>{}),f.on("play",()=>{e&&a()}),$(document).ready(()=>{$(".effect_visual_inner").css("opacity","1"),$(".effect_visual_inner").css("display","flex")})}Rt.registerPlugin(un,_e,sn);Fp();qd();wp();af();bp();zp();Bp();Wd();})();
/*! Bundled license information:
>>>>>>> parent of 8a7d88c (swiper optimize)

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/dragdealer@0.10.0/node_modules/dragdealer/src/dragdealer.js
  var require_dragdealer = __commonJS({
    "node_modules/.pnpm/dragdealer@0.10.0/node_modules/dragdealer/src/dragdealer.js"(exports, module) {
      init_live_reload();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports.Dragdealer = factory();
        } else {
          root.Dragdealer = factory();
        }
      })(exports, function() {
        var Dragdealer2 = function(wrapper, options) {
          this.options = this.applyDefaults(options || {});
          this.bindMethods();
          this.wrapper = this.getWrapperElement(wrapper);
          if (!this.wrapper) {
            return;
          }
          this.handle = this.getHandleElement(this.wrapper, this.options.handleClass);
          if (!this.handle) {
            return;
          }
          this.init();
          this.bindEventListeners();
        };
        Dragdealer2.prototype = {
          defaults: {
            disabled: false,
            horizontal: true,
            vertical: false,
            slide: true,
            steps: 0,
            snap: false,
            loose: false,
            speed: 0.1,
            xPrecision: 0,
            yPrecision: 0,
            handleClass: "handle",
            css3: true,
            activeClass: "active",
            tapping: true
          },
          init: function() {
            if (this.options.css3) {
              triggerWebkitHardwareAcceleration(this.handle);
            }
            this.value = {
              prev: [-1, -1],
              current: [this.options.x || 0, this.options.y || 0],
              target: [this.options.x || 0, this.options.y || 0]
            };
            this.offset = {
              wrapper: [0, 0],
              mouse: [0, 0],
              prev: [-999999, -999999],
              current: [0, 0],
              target: [0, 0]
            };
            this.dragStartPosition = { x: 0, y: 0 };
            this.change = [0, 0];
            this.stepRatios = this.calculateStepRatios();
            this.activity = false;
            this.dragging = false;
            this.tapping = false;
            this.reflow();
            if (this.options.disabled) {
              this.disable();
            }
          },
          applyDefaults: function(options) {
            for (var k in this.defaults) {
              if (!options.hasOwnProperty(k)) {
                options[k] = this.defaults[k];
              }
            }
            return options;
          },
          getWrapperElement: function(wrapper) {
            if (typeof wrapper == "string") {
              return document.getElementById(wrapper);
            } else {
              return wrapper;
            }
          },
          getHandleElement: function(wrapper, handleClass) {
            var childElements, handleClassMatcher, i;
            if (wrapper.getElementsByClassName) {
              childElements = wrapper.getElementsByClassName(handleClass);
              if (childElements.length > 0) {
                return childElements[0];
              }
            } else {
              handleClassMatcher = new RegExp("(^|\\s)" + handleClass + "(\\s|$)");
              childElements = wrapper.getElementsByTagName("*");
              for (i = 0; i < childElements.length; i++) {
                if (handleClassMatcher.test(childElements[i].className)) {
                  return childElements[i];
                }
              }
            }
          },
          calculateStepRatios: function() {
            var stepRatios = [];
            if (this.options.steps >= 1) {
              for (var i = 0; i <= this.options.steps - 1; i++) {
                if (this.options.steps > 1) {
                  stepRatios[i] = i / (this.options.steps - 1);
                } else {
                  stepRatios[i] = 0;
                }
              }
            }
            return stepRatios;
          },
          setWrapperOffset: function() {
            this.offset.wrapper = Position.get(this.wrapper);
          },
          calculateBounds: function() {
            var bounds = {
              top: this.options.top || 0,
              bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
              left: this.options.left || 0,
              right: -(this.options.right || 0) + this.wrapper.offsetWidth
            };
            bounds.availWidth = bounds.right - bounds.left - this.handle.offsetWidth;
            bounds.availHeight = bounds.bottom - bounds.top - this.handle.offsetHeight;
            return bounds;
          },
          calculateValuePrecision: function() {
            var xPrecision = this.options.xPrecision || Math.abs(this.bounds.availWidth), yPrecision = this.options.yPrecision || Math.abs(this.bounds.availHeight);
            return [
              xPrecision ? 1 / xPrecision : 0,
              yPrecision ? 1 / yPrecision : 0
            ];
          },
          bindMethods: function() {
            if (typeof this.options.customRequestAnimationFrame === "function") {
              this.requestAnimationFrame = bind(this.options.customRequestAnimationFrame, window);
            } else {
              this.requestAnimationFrame = bind(requestAnimationFrame2, window);
            }
            if (typeof this.options.customCancelAnimationFrame === "function") {
              this.cancelAnimationFrame = bind(this.options.customCancelAnimationFrame, window);
            } else {
              this.cancelAnimationFrame = bind(cancelAnimationFrame2, window);
            }
            this.animateWithRequestAnimationFrame = bind(this.animateWithRequestAnimationFrame, this);
            this.animate = bind(this.animate, this);
            this.onHandleMouseDown = bind(this.onHandleMouseDown, this);
            this.onHandleTouchStart = bind(this.onHandleTouchStart, this);
            this.onDocumentMouseMove = bind(this.onDocumentMouseMove, this);
            this.onWrapperTouchMove = bind(this.onWrapperTouchMove, this);
            this.onWrapperMouseDown = bind(this.onWrapperMouseDown, this);
            this.onWrapperTouchStart = bind(this.onWrapperTouchStart, this);
            this.onDocumentMouseUp = bind(this.onDocumentMouseUp, this);
            this.onDocumentTouchEnd = bind(this.onDocumentTouchEnd, this);
            this.onHandleClick = bind(this.onHandleClick, this);
            this.onWindowResize = bind(this.onWindowResize, this);
          },
          bindEventListeners: function() {
            addEventListener2(this.handle, "mousedown", this.onHandleMouseDown);
            addEventListener2(this.handle, "touchstart", this.onHandleTouchStart);
            addEventListener2(document, "mousemove", this.onDocumentMouseMove);
            addEventListener2(this.wrapper, "touchmove", this.onWrapperTouchMove);
            addEventListener2(this.wrapper, "mousedown", this.onWrapperMouseDown);
            addEventListener2(this.wrapper, "touchstart", this.onWrapperTouchStart);
            addEventListener2(document, "mouseup", this.onDocumentMouseUp);
            addEventListener2(document, "touchend", this.onDocumentTouchEnd);
            addEventListener2(this.handle, "click", this.onHandleClick);
            addEventListener2(window, "resize", this.onWindowResize);
            this.animate(false, true);
            this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);
          },
          unbindEventListeners: function() {
            removeEventListener2(this.handle, "mousedown", this.onHandleMouseDown);
            removeEventListener2(this.handle, "touchstart", this.onHandleTouchStart);
            removeEventListener2(document, "mousemove", this.onDocumentMouseMove);
            removeEventListener2(this.wrapper, "touchmove", this.onWrapperTouchMove);
            removeEventListener2(this.wrapper, "mousedown", this.onWrapperMouseDown);
            removeEventListener2(this.wrapper, "touchstart", this.onWrapperTouchStart);
            removeEventListener2(document, "mouseup", this.onDocumentMouseUp);
            removeEventListener2(document, "touchend", this.onDocumentTouchEnd);
            removeEventListener2(this.handle, "click", this.onHandleClick);
            removeEventListener2(window, "resize", this.onWindowResize);
            this.cancelAnimationFrame(this.interval);
          },
          onHandleMouseDown: function(e) {
            Cursor.refresh(e);
            preventEventDefaults(e);
            stopEventPropagation(e);
            this.activity = false;
            this.startDrag();
          },
          onHandleTouchStart: function(e) {
            Cursor.refresh(e);
            stopEventPropagation(e);
            this.activity = false;
            this.startDrag();
          },
          onDocumentMouseMove: function(e) {
            if (e.clientX - this.dragStartPosition.x === 0 && e.clientY - this.dragStartPosition.y === 0) {
              return;
            }
            Cursor.refresh(e);
            if (this.dragging) {
              this.activity = true;
              preventEventDefaults(e);
            }
          },
          onWrapperTouchMove: function(e) {
            Cursor.refresh(e);
            if (!this.activity && this.draggingOnDisabledAxis()) {
              if (this.dragging) {
                this.stopDrag();
              }
              return;
            }
            preventEventDefaults(e);
            this.activity = true;
          },
          onWrapperMouseDown: function(e) {
            Cursor.refresh(e);
            preventEventDefaults(e);
            this.startTap();
          },
          onWrapperTouchStart: function(e) {
            Cursor.refresh(e);
            preventEventDefaults(e);
            this.startTap();
          },
          onDocumentMouseUp: function(e) {
            this.stopDrag();
            this.stopTap();
          },
          onDocumentTouchEnd: function(e) {
            this.stopDrag();
            this.stopTap();
          },
          onHandleClick: function(e) {
            if (this.activity) {
              preventEventDefaults(e);
              stopEventPropagation(e);
            }
          },
          onWindowResize: function(e) {
            this.reflow();
          },
          enable: function() {
            this.disabled = false;
            this.handle.className = this.handle.className.replace(/\s?disabled/g, "");
          },
          disable: function() {
            this.disabled = true;
            this.handle.className += " disabled";
          },
          reflow: function() {
            this.setWrapperOffset();
            this.bounds = this.calculateBounds();
            this.valuePrecision = this.calculateValuePrecision();
            this.updateOffsetFromValue();
          },
          getStep: function() {
            return [
              this.getStepNumber(this.value.target[0]),
              this.getStepNumber(this.value.target[1])
            ];
          },
          getStepWidth: function() {
            return Math.abs(this.bounds.availWidth / this.options.steps);
          },
          getValue: function() {
            return this.value.target;
          },
          setStep: function(x2, y, snap3) {
            this.setValue(
              this.options.steps && x2 > 1 ? (x2 - 1) / (this.options.steps - 1) : 0,
              this.options.steps && y > 1 ? (y - 1) / (this.options.steps - 1) : 0,
              snap3
            );
          },
          setValue: function(x2, y, snap3) {
            this.setTargetValue([x2, y || 0]);
            if (snap3) {
              this.groupCopy(this.value.current, this.value.target);
              this.updateOffsetFromValue();
              this.callAnimationCallback();
            }
          },
          startTap: function() {
            if (this.disabled || !this.options.tapping) {
              return;
            }
            this.tapping = true;
            this.setWrapperOffset();
            if (this.options.snap && this.options.steps) {
              var cursorXRatio = (Cursor.x - this.offset.wrapper[0]) / this.bounds.availWidth;
              var cursorYRatio = (Cursor.y - this.offset.wrapper[1]) / this.bounds.availHeight;
              this.setValue(this.getClosestStep(cursorXRatio), this.getClosestStep(cursorYRatio), true);
            } else {
              this.setTargetValueByOffset([
                Cursor.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2,
                Cursor.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2
              ]);
            }
          },
          stopTap: function() {
            if (this.disabled || !this.tapping) {
              return;
            }
            this.tapping = false;
            this.setTargetValue(this.value.current);
          },
          startDrag: function() {
            if (this.disabled) {
              return;
            }
            this.dragging = true;
            this.setWrapperOffset();
            this.dragStartPosition = { x: Cursor.x, y: Cursor.y };
            this.offset.mouse = [
              Cursor.x - Position.get(this.handle)[0],
              Cursor.y - Position.get(this.handle)[1]
            ];
            if (!this.wrapper.className.match(this.options.activeClass)) {
              this.wrapper.className += " " + this.options.activeClass;
            }
            this.callDragStartCallback();
          },
          stopDrag: function() {
            if (this.disabled || !this.dragging) {
              return;
            }
            this.dragging = false;
            var deltaX = this.bounds.availWidth === 0 ? 0 : (Cursor.x - this.dragStartPosition.x) / this.bounds.availWidth, deltaY = this.bounds.availHeight === 0 ? 0 : (Cursor.y - this.dragStartPosition.y) / this.bounds.availHeight, delta = [deltaX, deltaY];
            var target = this.groupClone(this.value.current);
            if (this.options.slide) {
              var ratioChange = this.change;
              target[0] += ratioChange[0] * 4;
              target[1] += ratioChange[1] * 4;
            }
            this.setTargetValue(target);
            this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass, "");
            this.callDragStopCallback(delta);
          },
          callAnimationCallback: function() {
            var value = this.value.current;
            if (this.options.snap && this.options.steps > 1) {
              value = this.getClosestSteps(value);
            }
            if (!this.groupCompare(value, this.value.prev)) {
              if (typeof this.options.animationCallback == "function") {
                this.options.animationCallback.call(this, value[0], value[1]);
              }
              this.groupCopy(this.value.prev, value);
            }
          },
          callTargetCallback: function() {
            if (typeof this.options.callback == "function") {
              this.options.callback.call(this, this.value.target[0], this.value.target[1]);
            }
          },
          callDragStartCallback: function() {
            if (typeof this.options.dragStartCallback == "function") {
              this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1]);
            }
          },
          callDragStopCallback: function(delta) {
            if (typeof this.options.dragStopCallback == "function") {
              this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], delta);
            }
          },
          animateWithRequestAnimationFrame: function(time) {
            if (time) {
              this.timeOffset = this.timeStamp ? time - this.timeStamp : 0;
              this.timeStamp = time;
            } else {
              this.timeOffset = 25;
            }
            this.animate();
            this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);
          },
          animate: function(direct, first) {
            if (direct && !this.dragging) {
              return;
            }
            if (this.dragging) {
              var prevTarget = this.groupClone(this.value.target);
              var offset = [
                Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0],
                Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]
              ];
              this.setTargetValueByOffset(offset, this.options.loose);
              this.change = [
                this.value.target[0] - prevTarget[0],
                this.value.target[1] - prevTarget[1]
              ];
            }
            if (this.dragging || first) {
              this.groupCopy(this.value.current, this.value.target);
            }
            if (this.dragging || this.glide() || first) {
              this.updateOffsetFromValue();
              this.callAnimationCallback();
            }
          },
          glide: function() {
            var diff = [
              this.value.target[0] - this.value.current[0],
              this.value.target[1] - this.value.current[1]
            ];
            if (!diff[0] && !diff[1]) {
              return false;
            }
            if (Math.abs(diff[0]) > this.valuePrecision[0] || Math.abs(diff[1]) > this.valuePrecision[1]) {
              this.value.current[0] += diff[0] * Math.min(this.options.speed * this.timeOffset / 25, 1);
              this.value.current[1] += diff[1] * Math.min(this.options.speed * this.timeOffset / 25, 1);
            } else {
              this.groupCopy(this.value.current, this.value.target);
            }
            return true;
          },
          updateOffsetFromValue: function() {
            if (!this.options.snap) {
              this.offset.current = this.getOffsetsByRatios(this.value.current);
            } else {
              this.offset.current = this.getOffsetsByRatios(
                this.getClosestSteps(this.value.current)
              );
            }
            if (!this.groupCompare(this.offset.current, this.offset.prev)) {
              this.renderHandlePosition();
              this.groupCopy(this.offset.prev, this.offset.current);
            }
          },
          renderHandlePosition: function() {
            var transform = "";
            if (this.options.css3 && StylePrefix.transform) {
              if (this.options.horizontal) {
                transform += "translateX(" + this.offset.current[0] + "px)";
              }
              if (this.options.vertical) {
                transform += " translateY(" + this.offset.current[1] + "px)";
              }
              this.handle.style[StylePrefix.transform] = transform;
              return;
            }
            if (this.options.horizontal) {
              this.handle.style.left = this.offset.current[0] + "px";
            }
            if (this.options.vertical) {
              this.handle.style.top = this.offset.current[1] + "px";
            }
          },
          setTargetValue: function(value, loose) {
            var target = loose ? this.getLooseValue(value) : this.getProperValue(value);
            this.groupCopy(this.value.target, target);
            this.offset.target = this.getOffsetsByRatios(target);
            this.callTargetCallback();
          },
          setTargetValueByOffset: function(offset, loose) {
            var value = this.getRatiosByOffsets(offset);
            var target = loose ? this.getLooseValue(value) : this.getProperValue(value);
            this.groupCopy(this.value.target, target);
            this.offset.target = this.getOffsetsByRatios(target);
          },
          getLooseValue: function(value) {
            var proper = this.getProperValue(value);
            return [
              proper[0] + (value[0] - proper[0]) / 4,
              proper[1] + (value[1] - proper[1]) / 4
            ];
          },
          getProperValue: function(value) {
            var proper = this.groupClone(value);
            proper[0] = Math.max(proper[0], 0);
            proper[1] = Math.max(proper[1], 0);
            proper[0] = Math.min(proper[0], 1);
            proper[1] = Math.min(proper[1], 1);
            if (!this.dragging && !this.tapping || this.options.snap) {
              if (this.options.steps > 1) {
                proper = this.getClosestSteps(proper);
              }
            }
            return proper;
          },
          getRatiosByOffsets: function(group) {
            return [
              this.getRatioByOffset(group[0], this.bounds.availWidth, this.bounds.left),
              this.getRatioByOffset(group[1], this.bounds.availHeight, this.bounds.top)
            ];
          },
          getRatioByOffset: function(offset, range, padding) {
            return range ? (offset - padding) / range : 0;
          },
          getOffsetsByRatios: function(group) {
            return [
              this.getOffsetByRatio(group[0], this.bounds.availWidth, this.bounds.left),
              this.getOffsetByRatio(group[1], this.bounds.availHeight, this.bounds.top)
            ];
          },
          getOffsetByRatio: function(ratio, range, padding) {
            return Math.round(ratio * range) + padding;
          },
          getStepNumber: function(value) {
            return this.getClosestStep(value) * (this.options.steps - 1) + 1;
          },
          getClosestSteps: function(group) {
            return [
              this.getClosestStep(group[0]),
              this.getClosestStep(group[1])
            ];
          },
          getClosestStep: function(value) {
            var k = 0;
            var min = 1;
            for (var i = 0; i <= this.options.steps - 1; i++) {
              if (Math.abs(this.stepRatios[i] - value) < min) {
                min = Math.abs(this.stepRatios[i] - value);
                k = i;
              }
            }
            return this.stepRatios[k];
          },
          groupCompare: function(a, b) {
            return a[0] == b[0] && a[1] == b[1];
          },
          groupCopy: function(a, b) {
            a[0] = b[0];
            a[1] = b[1];
          },
          groupClone: function(a) {
            return [a[0], a[1]];
          },
          draggingOnDisabledAxis: function() {
            return !this.options.horizontal && Cursor.xDiff > Cursor.yDiff || !this.options.vertical && Cursor.yDiff > Cursor.xDiff;
          }
        };
        var bind = function(fn, context3) {
          return function() {
            return fn.apply(context3, arguments);
          };
        };
        var addEventListener2 = function(element, type, callback) {
          if (element.addEventListener) {
            element.addEventListener(type, callback, false);
          } else if (element.attachEvent) {
            element.attachEvent("on" + type, callback);
          }
        };
        var removeEventListener2 = function(element, type, callback) {
          if (element.removeEventListener) {
            element.removeEventListener(type, callback, false);
          } else if (element.detachEvent) {
            element.detachEvent("on" + type, callback);
          }
        };
        var preventEventDefaults = function(e) {
          if (!e) {
            e = window.event;
          }
          if (e.preventDefault) {
            e.preventDefault();
          }
          e.returnValue = false;
        };
        var stopEventPropagation = function(e) {
          if (!e) {
            e = window.event;
          }
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          e.cancelBubble = true;
        };
        var Cursor = {
          /**
           * Abstraction for making the combined mouse or touch position available at
           * any time.
           *
           * It picks up the "move" events as an independent component and simply makes
           * the latest x and y mouse/touch position of the user available at any time,
           * which is requested with Cursor.x and Cursor.y respectively.
           *
           * It can receive both mouse and touch events consecutively, extracting the
           * relevant meta data from each type of event.
           *
           * Cursor.refresh(e) is called to update the global x and y values, with a
           * genuine MouseEvent or a TouchEvent from an event listener, e.g.
           * mousedown/up or touchstart/end
           */
          x: 0,
          y: 0,
          xDiff: 0,
          yDiff: 0,
          refresh: function(e) {
            if (!e) {
              e = window.event;
            }
            if (e.type == "mousemove") {
              this.set(e);
            } else if (e.touches) {
              this.set(e.touches[0]);
            }
          },
          set: function(e) {
            var lastX = this.x, lastY = this.y;
            if (e.clientX || e.clientY) {
              this.x = e.clientX;
              this.y = e.clientY;
            } else if (e.pageX || e.pageY) {
              this.x = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
              this.y = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;
            }
            this.xDiff = Math.abs(this.x - lastX);
            this.yDiff = Math.abs(this.y - lastY);
          }
        };
        var Position = {
          /**
           * Helper for extracting position of a DOM element, relative to the viewport
           *
           * The get(obj) method accepts a DOM element as the only parameter, and
           * returns the position under a (x, y) tuple, as an array with two elements.
           */
          get: function(obj) {
            var rect = { left: 0, top: 0 };
            if (obj.getBoundingClientRect !== void 0) {
              rect = obj.getBoundingClientRect();
            }
            return [rect.left, rect.top];
          }
        };
        var StylePrefix = {
          transform: getPrefixedStylePropName("transform"),
          perspective: getPrefixedStylePropName("perspective"),
          backfaceVisibility: getPrefixedStylePropName("backfaceVisibility")
        };
        function getPrefixedStylePropName(propName) {
          var domPrefixes = "Webkit Moz ms O".split(" "), elStyle = document.documentElement.style;
          if (elStyle[propName] !== void 0)
            return propName;
          propName = propName.charAt(0).toUpperCase() + propName.substr(1);
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elStyle[domPrefixes[i] + propName] !== void 0) {
              return domPrefixes[i] + propName;
            }
          }
        }
        ;
        function triggerWebkitHardwareAcceleration(element) {
          if (StylePrefix.backfaceVisibility && StylePrefix.perspective) {
            element.style[StylePrefix.perspective] = "1000px";
            element.style[StylePrefix.backfaceVisibility] = "hidden";
          }
        }
        ;
        var vendors = ["webkit", "moz"];
        var requestAnimationFrame2 = window.requestAnimationFrame;
        var cancelAnimationFrame2 = window.cancelAnimationFrame;
        for (var x = 0; x < vendors.length && !requestAnimationFrame2; ++x) {
          requestAnimationFrame2 = window[vendors[x] + "RequestAnimationFrame"];
          cancelAnimationFrame2 = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        }
        if (!requestAnimationFrame2) {
          requestAnimationFrame2 = function(callback) {
            return setTimeout(callback, 25);
          };
          cancelAnimationFrame2 = clearTimeout;
        }
        return Dragdealer2;
      });
    }
  });

  // src/home-page/index.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3)
      return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id2, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id2 = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id2 && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id2);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c, function(func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t2) {
            return {
              g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
              t: t2
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e && e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CustomEase.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/utils/paths.js
  init_live_reload();
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG2 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _roundingNum = 1e5;
  var _round3 = function _round4(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  function transformRawPath(rawPath, a, b, c, d, tx, ty) {
    var j = rawPath.length, segment, l, i, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 0; i < l; i += 2) {
        x = segment[i];
        y = segment[i + 1];
        segment[i] = x * a + y * c + tx;
        segment[i + 1] = x * b + y * d + ty;
      }
    }
    rawPath._dirty = 1;
    return rawPath;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs(rx);
    ry = _abs(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
    for (i = 0; i < segments; i++) {
      angle = angleStart + i * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i = 0; i < rawPath.length; i += 2) {
      x1 = rawPath[i];
      y1 = rawPath[i + 1];
      rawPath[i] = x1 * ma + y1 * mc + cx;
      rawPath[i + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i - 2] = x;
    rawPath[i - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n = +m;
      return n < 1e-4 && n > -1e-4 ? 0 : n;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i = 0; i < elements; i++) {
      prevCommand = command;
      if (isNaN(a[i])) {
        command = a[i].toUpperCase();
        isRelative = command !== a[i];
      } else {
        i--;
      }
      x = +a[i + 1];
      y = +a[i + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
        i += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
        i += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i + 3] * 1;
        relativeY += a[i + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i + 4];
        flag2 = a[i + 5];
        difX = a[i + 6];
        difY = a[i + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i = segment.length;
    if (i < 6) {
      path.pop();
      i = 0;
    } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s, i, segment;
    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round3(segment[0]) + "," + _round3(segment[1]) + " C";
      sl = segment.length;
      for (i = 2; i < sl; i++) {
        result += _round3(segment[i++]) + "," + _round3(segment[i++]) + " " + _round3(segment[i++]) + "," + _round3(segment[i++]) + " " + _round3(segment[i++]) + "," + _round3(segment[i]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CustomEase.js
  var gsap2;
  var _coreInitted2;
  var _getGSAP = function _getGSAP2() {
    return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _initCore3 = function _initCore4() {
    gsap2 = _getGSAP();
    if (gsap2) {
      gsap2.registerEase("_CE", CustomEase.create);
      _coreInitted2 = 1;
    } else {
      console.warn("Please gsap.registerPlugin(CustomEase)");
    }
  };
  var _bigNum3 = 1e20;
  var _round5 = function _round6(value) {
    return ~~(value * 1e3 + (value < 0 ? -0.5 : 0.5)) / 1e3;
  };
  var _bonusValidated = 1;
  var _numExp2 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi;
  var _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g;
  var _findMinimum = function _findMinimum2(values) {
    var l = values.length, min = _bigNum3, i;
    for (i = 1; i < l; i += 6) {
      +values[i] < min && (min = +values[i]);
    }
    return min;
  };
  var _normalize = function _normalize2(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }
    var tx = +values[0] * -1, ty = -originY, l = values.length, sx = 1 / (+values[l - 2] + tx), sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty), i;
    if (sy) {
      sy = 1 / sy;
    } else {
      sy = -sx;
    }
    for (i = 0; i < l; i += 2) {
      values[i] = (+values[i] + tx) * sx;
      values[i + 1] = (+values[i + 1] + ty) * sy;
    }
  };
  var _bezierToPoints = function _bezierToPoints2(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
    var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length;
    if (!points) {
      points = [{
        x: x1,
        y: y1
      }, {
        x: x4,
        y: y4
      }];
      index = 1;
    }
    points.splice(index || points.length - 1, 0, {
      x: x1234,
      y: y1234
    });
    if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
      length = points.length;
      _bezierToPoints2(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
      _bezierToPoints2(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
    }
    return points;
  };
  var CustomEase = /* @__PURE__ */ function() {
    function CustomEase2(id, data, config3) {
      _coreInitted2 || _initCore3();
      this.id = id;
      _bonusValidated && this.setData(data, config3);
    }
    var _proto = CustomEase2.prototype;
    _proto.setData = function setData(data, config3) {
      config3 = config3 || {};
      data = data || "0,0,1,1";
      var values = data.match(_numExp2), closest = 1, points = [], lookup = [], precision = config3.precision || 1, fast = precision <= 1, l, a1, a2, i, inc, j, point, prevPoint, p;
      this.data = data;
      if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
        values = stringToRawPath(data)[0];
      }
      l = values.length;
      if (l === 4) {
        values.unshift(0, 0);
        values.push(1, 1);
        l = 8;
      } else if ((l - 2) % 6) {
        throw "Invalid CustomEase";
      }
      if (+values[0] !== 0 || +values[l - 2] !== 1) {
        _normalize(values, config3.height, config3.originY);
      }
      this.segment = values;
      for (i = 2; i < l; i += 6) {
        a1 = {
          x: +values[i - 2],
          y: +values[i - 1]
        };
        a2 = {
          x: +values[i + 4],
          y: +values[i + 5]
        };
        points.push(a1, a2);
        _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
      }
      l = points.length;
      for (i = 0; i < l; i++) {
        point = points[i];
        prevPoint = points[i - 1] || point;
        if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
          prevPoint.cx = point.x - prevPoint.x;
          prevPoint.cy = point.y - prevPoint.y;
          prevPoint.n = point;
          prevPoint.nx = point.x;
          if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
            fast = 0;
          }
          if (prevPoint.cx < closest) {
            if (!prevPoint.cx) {
              prevPoint.cx = 1e-3;
              if (i === l - 1) {
                prevPoint.x -= 1e-3;
                closest = Math.min(closest, 1e-3);
                fast = 0;
              }
            } else {
              closest = prevPoint.cx;
            }
          }
        } else {
          points.splice(i--, 1);
          l--;
        }
      }
      l = 1 / closest + 1 | 0;
      inc = 1 / l;
      j = 0;
      point = points[0];
      if (fast) {
        for (i = 0; i < l; i++) {
          p = i * inc;
          if (point.nx < p) {
            point = points[++j];
          }
          a1 = point.y + (p - point.x) / point.cx * point.cy;
          lookup[i] = {
            x: p,
            cx: inc,
            y: a1,
            cy: 0,
            nx: 9
          };
          if (i) {
            lookup[i - 1].cy = a1 - lookup[i - 1].y;
          }
        }
        lookup[l - 1].cy = points[points.length - 1].y - a1;
      } else {
        for (i = 0; i < l; i++) {
          if (point.nx < i * inc) {
            point = points[++j];
          }
          lookup[i] = point;
        }
        if (j < points.length - 1) {
          lookup[i - 1] = points[points.length - 2];
        }
      }
      this.ease = function(p2) {
        var point2 = lookup[p2 * l | 0] || lookup[l - 1];
        if (point2.nx < p2) {
          point2 = point2.n;
        }
        return point2.y + (p2 - point2.x) / point2.cx * point2.cy;
      };
      this.ease.custom = this;
      this.id && gsap2 && gsap2.registerEase(this.id, this.ease);
      return this;
    };
    _proto.getSVGData = function getSVGData(config3) {
      return CustomEase2.getSVGData(this, config3);
    };
    CustomEase2.create = function create(id, data, config3) {
      return new CustomEase2(id, data, config3).ease;
    };
    CustomEase2.register = function register(core) {
      gsap2 = core;
      _initCore3();
    };
    CustomEase2.get = function get(id) {
      return gsap2.parseEase(id);
    };
    CustomEase2.getSVGData = function getSVGData(ease, config3) {
      config3 = config3 || {};
      var width = config3.width || 100, height = config3.height || 100, x = config3.x || 0, y = (config3.y || 0) + height, e = gsap2.utils.toArray(config3.path)[0], a, slope, i, inc, tx, ty, precision, threshold, prevX, prevY;
      if (config3.invert) {
        height = -height;
        y = 0;
      }
      if (typeof ease === "string") {
        ease = gsap2.parseEase(ease);
      }
      if (ease.custom) {
        ease = ease.custom;
      }
      if (ease instanceof CustomEase2) {
        a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
      } else {
        a = [x, y];
        precision = Math.max(5, (config3.precision || 1) * 200);
        inc = 1 / precision;
        precision += 2;
        threshold = 5 / precision;
        prevX = _round5(x + inc * width);
        prevY = _round5(y + ease(inc) * -height);
        slope = (prevY - y) / (prevX - x);
        for (i = 2; i < precision; i++) {
          tx = _round5(x + i * inc * width);
          ty = _round5(y + ease(i * inc) * -height);
          if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
            a.push(prevX, prevY);
            slope = (ty - prevY) / (tx - prevX);
          }
          prevX = tx;
          prevY = ty;
        }
        a = "M" + a.join(",");
      }
      e && e.setAttribute("d", a);
      return a;
    };
    return CustomEase2;
  }();
  _getGSAP() && gsap2.registerPlugin(CustomEase);
  CustomEase.version = "3.12.5";

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc3;
  var _win3;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win3 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc3 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
      if (root && root.appendChild) {
        root.appendChild(d1);
        d1.appendChild(d2);
        d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
        _hasOffsetBug = d2.offsetParent !== d1;
        root.removeChild(d1);
      }
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e) {
    var a, cache;
    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }
      e = e.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win3.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e);
        }
      }
      return e;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c = new Matrix2D(), i = 0;
    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }
    return c;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win3) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win3.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c === void 0) {
        c = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e === void 0) {
        e = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a, b, c, d, e, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  var _id = 1;
  var _toArray;
  var gsap3;
  var _batch;
  var _batchAction;
  var _body2;
  var _closestTenth;
  var _getStyleSaver3;
  var _forEachBatch = function _forEachBatch2(batch, name) {
    return batch.actions.forEach(function(a) {
      return a.vars[name] && a.vars[name](a);
    });
  };
  var _batchLookup = {};
  var _RAD2DEG3 = 180 / Math.PI;
  var _DEG2RAD3 = Math.PI / 180;
  var _emptyObj = {};
  var _dashedNameLookup = {};
  var _memoizedRemoveProps = {};
  var _listToArray = function _listToArray2(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
  };
  var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
  var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
  var _getEl = function _getEl2(target) {
    return _toArray(target)[0] || console.warn("Element not found:", target);
  };
  var _round7 = function _round8(value) {
    return Math.round(value * 1e4) / 1e4 || 0;
  };
  var _toggleClass = function _toggleClass2(targets, className, action) {
    return targets.forEach(function(el) {
      return el.classList[action](className);
    });
  };
  var _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  };
  var _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  };
  var _camelToDashed = function _camelToDashed2(p) {
    return p.replace(/([A-Z])/g, "-$1").toLowerCase();
  };
  var _copy = function _copy2(obj, exclude) {
    var result = {}, p;
    for (p in obj) {
      exclude[p] || (result[p] = obj[p]);
    }
    return result;
  };
  var _memoizedProps = {};
  var _memoizeProps = function _memoizeProps2(props) {
    var p = _memoizedProps[props] = _listToArray(props);
    _memoizedRemoveProps[props] = p.concat(_removeProps);
    return p;
  };
  var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
    var cache = el._gsap || gsap3.core.getCache(el);
    if (cache.gmCache === gsap3.ticker.frame) {
      return cache.gMatrix;
    }
    cache.gmCache = gsap3.ticker.frame;
    return cache.gMatrix = getGlobalMatrix(el, true, false, true);
  };
  var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
    if (level === void 0) {
      level = 0;
    }
    var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
    while (el) {
      l += inc;
      el = el.previousSibling;
    }
    return parent ? l + _getDOMDepth2(parent, invert, level + 1) : l;
  };
  var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
    comps.forEach(function(comp) {
      return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function(c1, c2) {
      return c1.d - c2.d;
    });
    return comps;
  };
  var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
    var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
    while (i--) {
      p = props[i];
      v = style[p] || style.getPropertyValue(p);
      a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }
    return style;
  };
  var _applyInlineStyles = function _applyInlineStyles2(state) {
    var css = state.css, style = state.element.style, i = 0;
    state.cache.uncache = 1;
    for (; i < css.length; i += 2) {
      css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
    }
    if (!css[css.indexOf("transform") + 1] && style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
    comps.forEach(function(c) {
      return c.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
  };
  var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
  var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i = 4, result, displayIsNone, cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);
    if (_batch && ignoreBatch !== 1) {
      _batch._abs.push({
        t: element,
        b: elState,
        a: elState,
        sd: 0
      });
      _batch._final.push(function() {
        return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
      });
      return element;
    }
    displayIsNone = getProp("display") === "none";
    if (!elState.isVisible || displayIsNone) {
      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
      elState.matrix = fallbackNode.matrix;
      elState.width = width = elState.width || fallbackNode.width;
      elState.height = height = elState.height || fallbackNode.height;
    }
    _recordInlineStyles(elState, _absoluteProps);
    cs = window.getComputedStyle(element);
    while (i--) {
      style[_absoluteProps[i]] = cs[_absoluteProps[i]];
    }
    style.gridArea = "1 / 1 / 1 / 1";
    style.transition = "none";
    style.position = "absolute";
    style.width = width + "px";
    style.height = height + "px";
    style.top || (style.top = "0px");
    style.left || (style.left = "0px");
    if (uncache) {
      result = new ElementState(element);
    } else {
      result = _copy(elState, _emptyObj);
      result.position = "absolute";
      if (elState.simple) {
        var bounds = element.getBoundingClientRect();
        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
      } else {
        result.matrix = getGlobalMatrix(element, false, false, true);
      }
    }
    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
  };
  var _filterComps = function _filterComps2(comps, targets) {
    if (targets !== true) {
      targets = _toArray(targets);
      comps = comps.filter(function(c) {
        if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) {
          return true;
        } else {
          c.t._gsap.renderTransform(1);
          if (c.b.isVisible) {
            c.t.style.width = c.b.width + "px";
            c.t.style.height = c.b.height + "px";
          }
        }
      });
    }
    return comps;
  };
  var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
    return _orderByDOMDepth(comps, true).forEach(function(c) {
      return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
    });
  };
  var _findElStateInState = function _findElStateInState2(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
  };
  var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
  };
  var _recordProps = function _recordProps2(elState, props) {
    var getProp = gsap3.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
    while (i--) {
      obj[props[i]] = (getProp(props[i]) + "").trim();
    }
    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
  };
  var _applyProps = function _applyProps2(element, props) {
    var style = element.style || element, p;
    for (p in props) {
      style[p] = props[p];
    }
  };
  var _getID = function _getID2(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
  };
  var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
    return elStates.map(function(elState) {
      return elState.element;
    });
  };
  var _handleCallback = function _handleCallback2(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
  };
  var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
    if (simple || !parent) {
      scaleX = scaleY = 1;
      rotation = skewX = 0;
    } else {
      parentMatrix = _getInverseGlobalMatrix(parent);
      matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
      rotation = _round7(Math.atan2(matrix.b, matrix.a) * _RAD2DEG3);
      skewX = _round7(Math.atan2(matrix.c, matrix.d) * _RAD2DEG3 + rotation) % 360;
      scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
      scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD3);
      if (fitChild) {
        fitChild = _toArray(fitChild)[0];
        getProp = gsap3.getProperty(fitChild);
        bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
        dimensionState = {
          scaleX: getProp("scaleX"),
          scaleY: getProp("scaleY"),
          width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
          height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
        };
      }
      cache.rotation = rotation + "deg";
      cache.skewX = skewX + "deg";
    }
    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache.scaleX = scaleX;
      cache.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
      x += e - fromState.matrix.e;
      y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache.renderTransform(1, cache);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e,
        y: f
      });
      x += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e - fromState.matrix.e,
        y: f - fromState.matrix.f
      });
      x += toPoint.x;
      y += toPoint.y;
    }
    x = _closestTenth(x, 0.02);
    y = _closestTenth(y, 0.02);
    if (vars && !(vars instanceof ElementState)) {
      styles && styles.revert();
    } else {
      cache.x = x + "px";
      cache.y = y + "px";
      cache.renderTransform(1, cache);
    }
    if (vars) {
      vars.x = x;
      vars.y = y;
      vars.rotation = rotation;
      vars.skewX = skewX;
      if (scale) {
        vars.scaleX = scaleX;
        vars.scaleY = scaleY;
      } else {
        vars.width = width;
        vars.height = height;
      }
    }
    return vars || cache;
  };
  var _parseState = function _parseState2(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
  };
  var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
    var to1 = toState.idLookup[id], to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
  };
  var _bodyMetrics = [];
  var _bodyProps = "width,height,overflowX,overflowY".split(",");
  var _bodyLocked;
  var _lockBodyScroll = function _lockBodyScroll2(lock) {
    if (lock !== _bodyLocked) {
      var s = _body2.style, w = _body2.clientWidth === window.outerWidth, h = _body2.clientHeight === window.outerHeight, i = 4;
      if (lock && (w || h)) {
        while (i--) {
          _bodyMetrics[i] = s[_bodyProps[i]];
        }
        if (w) {
          s.width = _body2.clientWidth + "px";
          s.overflowY = "hidden";
        }
        if (h) {
          s.height = _body2.clientHeight + "px";
          s.overflowX = "hidden";
        }
        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i--) {
          _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
        }
        _bodyLocked = lock;
      }
    }
  };
  var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};
    var _vars = vars, clearProps2 = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap3.timeline({
      delay,
      paused,
      repeat,
      repeatDelay,
      yoyo,
      data: "isFlip"
    }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
      return spinNum;
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
    for (p in toState.idLookup) {
      toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
      el = toNode.element;
      fromNode = fromState.idLookup[p];
      fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
      if (fromNode) {
        comp = {
          t: el,
          b: fromNode,
          a: toNode,
          sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
        };
        comps.push(comp);
        if (comp.sd) {
          if (comp.sd < 0) {
            comp.b = toNode;
            comp.a = fromNode;
          }
          interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
          fade && comps.push(comp.swap = {
            t: fromNode.element,
            b: comp.b,
            a: comp.a,
            sd: -comp.sd,
            swap: comp
          });
        }
        el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
      } else if (toNode.isVisible) {
        comps.push({
          t: el,
          b: _copy(toNode, {
            isVisible: 1
          }),
          a: toNode,
          sd: 0,
          entering: 1
        });
        el._flip = _batch ? _batch.timeline : animation;
      }
    }
    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
      return tweenVars[p2] = function(i2) {
        return comps[i2].a.props[p2];
      };
    });
    comps.finalStates = finalStates = [];
    run = function run2() {
      _orderByDOMDepth(comps);
      _lockBodyScroll(true);
      for (i = 0; i < comps.length; i++) {
        comp = comps[i];
        a = comp.a;
        b = comp.b;
        if (prune && !a.isDifferent(b) && !comp.entering) {
          comps.splice(i--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));
          if (b.isVisible && a.isVisible) {
            if (comp.sd < 0) {
              state = new ElementState(el, props, fromState.simple);
              _fit(state, a, scale, 0, 0, state);
              state.matrix = getGlobalMatrix(el, false, false, true);
              state.css = comp.b.css;
              comp.a = a = state;
              fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
              stagger && swapOutTargets.push(el);
            } else if (comp.sd > 0 && fade) {
              el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
            }
            _fit(a, b, scale, props);
          } else if (b.isVisible !== a.isVisible) {
            if (!b.isVisible) {
              a.isVisible && entering.push(a);
              comps.splice(i--, 1);
            } else if (!a.isVisible) {
              b.css = a.css;
              leaving.push(b);
              comps.splice(i--, 1);
              absolute && nested && _fit(a, b, scale, props);
            }
          }
          if (!scale) {
            el.style.maxWidth = Math.max(a.width, b.width) + "px";
            el.style.maxHeight = Math.max(a.height, b.height) + "px";
            el.style.minWidth = Math.min(a.width, b.width) + "px";
            el.style.minHeight = Math.min(a.height, b.height) + "px";
          }
          nested && toggleClass && el.classList.add(toggleClass);
        }
        finalStates.push(a);
      }
      var classTargets;
      if (toggleClass) {
        classTargets = finalStates.map(function(s) {
          return s.element;
        });
        nested && classTargets.forEach(function(e) {
          return e.classList.remove(toggleClass);
        });
      }
      _lockBodyScroll(false);
      if (scale) {
        tweenVars.scaleX = function(i2) {
          return comps[i2].a.scaleX;
        };
        tweenVars.scaleY = function(i2) {
          return comps[i2].a.scaleY;
        };
      } else {
        tweenVars.width = function(i2) {
          return comps[i2].a.width + "px";
        };
        tweenVars.height = function(i2) {
          return comps[i2].a.height + "px";
        };
        tweenVars.autoRound = vars.autoRound || false;
      }
      tweenVars.x = function(i2) {
        return comps[i2].a.x + "px";
      };
      tweenVars.y = function(i2) {
        return comps[i2].a.y + "px";
      };
      tweenVars.rotation = function(i2) {
        return comps[i2].a.rotation + (spin ? spinFunc(i2, targets[i2], targets) * 360 : 0);
      };
      tweenVars.skewX = function(i2) {
        return comps[i2].a.skewX;
      };
      targets = comps.map(function(c) {
        return c.t;
      });
      if (_zIndex || _zIndex === 0) {
        tweenVars.modifiers = {
          zIndex: function zIndex() {
            return _zIndex;
          }
        };
        tweenVars.zIndex = _zIndex;
        tweenVars.immediateRender = vars.immediateRender !== false;
      }
      fade && (tweenVars.opacity = function(i2) {
        return comps[i2].sd < 0 ? 0 : comps[i2].sd > 0 ? comps[i2].a.opacity : "+=0";
      });
      if (swapOutTargets.length) {
        stagger = gsap3.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);
        tweenVars.stagger = function(i2, el2) {
          return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i2].swap.t) : i2, el2, dummyArray);
        };
      }
      _callbacks.forEach(function(name) {
        return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
      });
      if (custom && targets.length) {
        remainingProps = _copy(tweenVars, _reserved);
        if ("scale" in custom) {
          custom.scaleX = custom.scaleY = custom.scale;
          delete custom.scale;
        }
        for (p in custom) {
          v = _copy(custom[p], _fitReserved);
          v[p] = tweenVars[p];
          !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
          v.stagger = tweenVars.stagger;
          addFunc.call(animation, targets, v, 0);
          delete remainingProps[p];
        }
      }
      if (targets.length || leaving.length || entering.length) {
        toggleClass && animation.add(function() {
          return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
        }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
        targets.length && addFunc.call(animation, targets, remainingProps, 0);
      }
      _handleCallback(onEnter, entering, animation);
      _handleCallback(onLeave, leaving, animation);
      var batchTl = _batch && _batch.timeline;
      if (batchTl) {
        batchTl.add(animation, 0);
        _batch._final.push(function() {
          return _setFinalStates(comps, !clearProps2);
        });
      }
      endTime = animation.duration();
      animation.call(function() {
        var forward = animation.time() >= endTime;
        forward && !batchTl && _setFinalStates(comps, !clearProps2);
        toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
      });
    };
    absoluteOnLeave && (absolute = comps.filter(function(comp2) {
      return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
    }).map(function(comp2) {
      return comp2.a.element;
    }));
    if (_batch) {
      var _batch$_abs;
      absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
      _batch._run.push(run);
    } else {
      absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
      run();
    }
    var anim = _batch ? _batch.timeline : animation;
    anim.revert = function() {
      return _killFlip(anim, 1, 1);
    };
    return anim;
  };
  var _interrupt3 = function _interrupt4(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt4);
  };
  var _killFlip = function _killFlip2(tl, action, force) {
    if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
      if (action) {
        _interrupt3(tl);
        action < 2 && tl.progress(1);
        tl.kill();
      }
      return true;
    }
  };
  var _createLookup = function _createLookup2(state) {
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
    while (i--) {
      elState = elStates[i];
      lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
  };
  var FlipState = /* @__PURE__ */ function() {
    function FlipState2(targets, vars, targetsAreElementStates) {
      this.props = vars && vars.props;
      this.simple = !!(vars && vars.simple);
      if (targetsAreElementStates) {
        this.targets = _elementsFromElementStates(targets);
        this.elementStates = targets;
        _createLookup(this);
      } else {
        this.targets = _toArray(targets);
        var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
        _batch && !soft && _batch._kill.push(this);
        this.update(soft || !!_batch);
      }
    }
    var _proto = FlipState2.prototype;
    _proto.update = function update(soft) {
      var _this = this;
      this.elementStates = this.targets.map(function(el) {
        return new ElementState(el, _this.props, _this.simple);
      });
      _createLookup(this);
      this.interrupt(soft);
      this.recordInlineStyles();
      return this;
    };
    _proto.clear = function clear() {
      this.targets.length = this.elementStates.length = 0;
      _createLookup(this);
      return this;
    };
    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
      for (; i < elStatesInOrder.length; i++) {
        fromNode = elStatesInOrder[i];
        nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
        toNode = toElStates[fromNode.id];
        toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
        fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
      }
      return this;
    };
    _proto.getProperty = function getProperty2(element, property) {
      var es = this.getElementState(element) || _emptyObj;
      return (property in es ? es : es.props || _emptyObj)[property];
    };
    _proto.add = function add(state) {
      var i = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
      while (i--) {
        es = state.elementStates[i];
        es2 = lookup[es.id];
        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i]);
          this.elementStates.push(es);
        }
      }
      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);
      _createLookup(this);
      return this;
    };
    _proto.compare = function compare(state) {
      var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
        return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
      }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
        return targets.indexOf(el2) < 0 && place(s12, s22, el2);
      }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
      for (p in l1) {
        s1Alt = a1[p];
        s2Alt = a2[p];
        s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
        el = s1.element;
        s2 = l2[p];
        if (s2Alt) {
          c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }
          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
          placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
        } else {
          !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
        }
      }
      for (p in l2) {
        if (!l1[p]) {
          leave.push(l2[p].element);
          a2[p] && leave.push(a2[p].element);
        }
      }
      return {
        changed,
        unchanged,
        enter,
        leave
      };
    };
    _proto.recordInlineStyles = function recordInlineStyles() {
      var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
      while (i--) {
        _recordInlineStyles(this.elementStates[i], props);
      }
    };
    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;
      var timelines = [];
      this.targets.forEach(function(t) {
        var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
        soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
          return _this2.updateVisibility();
        });
        foundInProgress && timelines.push(tl);
      });
      !soft && timelines.length && this.updateVisibility();
      this.interrupted || (this.interrupted = !!timelines.length);
    };
    _proto.updateVisibility = function updateVisibility() {
      this.elementStates.forEach(function(es) {
        var b = es.element.getBoundingClientRect();
        es.isVisible = !!(b.width || b.height || b.top || b.left);
        es.uncache = 1;
      });
    };
    _proto.getElementState = function getElementState(element) {
      return this.elementStates[this.targets.indexOf(_getEl(element))];
    };
    _proto.makeAbsolute = function makeAbsolute() {
      return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };
    return FlipState2;
  }();
  var ElementState = /* @__PURE__ */ function() {
    function ElementState2(element, props, simple) {
      this.element = element;
      this.update(props, simple);
    }
    var _proto2 = ElementState2.prototype;
    _proto2.isDifferent = function isDifferent(state) {
      var b1 = this.bounds, b2 = state.bounds;
      return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };
    _proto2.update = function update(props, simple) {
      var self = this, element = self.element, getProp = gsap3.getProperty(element), cache = gsap3.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self.getProp = getProp;
      self.element = element;
      self.id = _getID(element);
      self.matrix = m;
      self.cache = cache;
      self.bounds = bounds;
      self.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self.display = getProp("display");
      self.position = getProp("position");
      self.parent = element.parentNode;
      self.x = getProp("x");
      self.y = getProp("y");
      self.scaleX = cache.scaleX;
      self.scaleY = cache.scaleY;
      self.rotation = getProp("rotation");
      self.skewX = getProp("skewX");
      self.opacity = getProp("opacity");
      self.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
      self.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
      props && _recordProps(self, _memoizedProps[props] || _memoizeProps(props));
      self.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
      self.simple = simple || _round7(m.a) === 1 && !_round7(m.b) && !_round7(m.c) && _round7(m.d) === 1;
      self.uncache = 0;
    };
    return ElementState2;
  }();
  var FlipAction = /* @__PURE__ */ function() {
    function FlipAction2(vars, batch) {
      this.vars = vars;
      this.batch = batch;
      this.states = [];
      this.timeline = batch.timeline;
    }
    var _proto3 = FlipAction2.prototype;
    _proto3.getStateById = function getStateById(id) {
      var i = this.states.length;
      while (i--) {
        if (this.states[i].idLookup[id]) {
          return this.states[i];
        }
      }
    };
    _proto3.kill = function kill() {
      this.batch.remove(this);
    };
    return FlipAction2;
  }();
  var FlipBatch = /* @__PURE__ */ function() {
    function FlipBatch2(id) {
      this.id = id;
      this.actions = [];
      this._kill = [];
      this._final = [];
      this._abs = [];
      this._run = [];
      this.data = {};
      this.state = new FlipState();
      this.timeline = gsap3.timeline();
    }
    var _proto4 = FlipBatch2.prototype;
    _proto4.add = function add(config3) {
      var result = this.actions.filter(function(action) {
        return action.vars === config3;
      });
      if (result.length) {
        return result[0];
      }
      result = new FlipAction(typeof config3 === "function" ? {
        animate: config3
      } : config3, this);
      this.actions.push(result);
      return result;
    };
    _proto4.remove = function remove(action) {
      var i = this.actions.indexOf(action);
      i >= 0 && this.actions.splice(i, 1);
      return this;
    };
    _proto4.getState = function getState(merge) {
      var _this3 = this;
      var prevBatch = _batch, prevAction = _batchAction;
      _batch = this;
      this.state.clear();
      this._kill.length = 0;
      this.actions.forEach(function(action) {
        if (action.vars.getState) {
          action.states.length = 0;
          _batchAction = action;
          action.state = action.vars.getState(action);
        }
        merge && action.states.forEach(function(s) {
          return _this3.state.add(s);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };
    _proto4.animate = function animate() {
      var _this4 = this;
      var prevBatch = _batch, tl = this.timeline, i = this.actions.length, finalStates, endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function(a) {
        a.vars.animate && a.vars.animate(a);
        var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s, result;
        if (targets && targets.length && (onEnter || onLeave)) {
          s = new FlipState();
          a.states.forEach(function(state) {
            return s.add(state);
          });
          result = s.compare(Flip.getState(targets));
          result.enter.length && onEnter && onEnter(result.enter);
          result.leave.length && onLeave && onLeave(result.leave);
        }
      });
      _makeCompsAbsolute(this._abs);
      this._run.forEach(function(f) {
        return f();
      });
      endTime = tl.duration();
      finalStates = this._final.slice(0);
      tl.add(function() {
        if (endTime <= tl.time()) {
          finalStates.forEach(function(f) {
            return f();
          });
          _forEachBatch(_this4, "onComplete");
        }
      });
      _batch = prevBatch;
      while (i--) {
        this.actions[i].vars.once && this.actions[i].kill();
      }
      _forEachBatch(this, "onStart");
      tl.restart();
      return this;
    };
    _proto4.loadState = function loadState(done) {
      done || (done = function done2() {
        return 0;
      });
      var queue = [];
      this.actions.forEach(function(c) {
        if (c.vars.loadState) {
          var i, f = function f2(targets) {
            targets && (c.targets = targets);
            i = queue.indexOf(f2);
            if (~i) {
              queue.splice(i, 1);
              queue.length || done();
            }
          };
          queue.push(f);
          c.vars.loadState(f);
        }
      });
      queue.length || done();
      return this;
    };
    _proto4.setState = function setState() {
      this.actions.forEach(function(c) {
        return c.targets = c.vars.setState && c.vars.setState(c);
      });
      return this;
    };
    _proto4.killConflicts = function killConflicts(soft) {
      this.state.interrupt(soft);
      this._kill.forEach(function(state) {
        return state.interrupt(soft);
      });
      return this;
    };
    _proto4.run = function run(skipGetState, merge) {
      var _this5 = this;
      if (this !== _batch) {
        skipGetState || this.getState(merge);
        this.loadState(function() {
          if (!_this5._killed) {
            _this5.setState();
            _this5.animate();
          }
        });
      }
      return this;
    };
    _proto4.clear = function clear(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
      var i = this.actions.length, s;
      while (i--) {
        s = this.actions[i].getStateById(id);
        if (s) {
          return s;
        }
      }
      return this.state.idLookup[id] && this.state;
    };
    _proto4.kill = function kill() {
      this._killed = 1;
      this.clear();
      delete _batchLookup[this.id];
    };
    return FlipBatch2;
  }();
  var Flip = /* @__PURE__ */ function() {
    function Flip2() {
    }
    Flip2.getState = function getState(targets, vars) {
      var state = _parseState(targets, vars);
      _batchAction && _batchAction.states.push(state);
      vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
      return state;
    };
    Flip2.from = function from(state, vars) {
      vars = vars || {};
      "clearProps" in vars || (vars.clearProps = true);
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, -1);
    };
    Flip2.to = function to(state, vars) {
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, 1);
    };
    Flip2.fromTo = function fromTo(fromState, toState, vars) {
      return _fromTo(fromState, toState, vars);
    };
    Flip2.fit = function fit(fromEl, toEl, vars) {
      var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap3.context();
      props && _applyProps(v, before.props);
      _recordInlineStyles(after, inlineProps);
      if (runBackwards) {
        "immediateRender" in v || (v.immediateRender = true);
        v.onComplete = function() {
          _applyInlineStyles(after);
          onComplete && onComplete.apply(this, arguments);
        };
      }
      absolute && _makeAbsolute(after, before);
      v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
      ctx && !getVars && ctx.add(function() {
        return function() {
          return _applyInlineStyles(after);
        };
      });
      return getVars ? v : v.duration ? gsap3.to(after.element, v) : null;
    };
    Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
      return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };
    Flip2.batch = function batch(id) {
      id || (id = "default");
      return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };
    Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
      (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t) {
        return t && _killFlip(t._flip, complete !== false ? 1 : 2);
      });
    };
    Flip2.isFlipping = function isFlipping(target) {
      var f = Flip2.getByTarget(target);
      return !!f && f.isActive();
    };
    Flip2.getByTarget = function getByTarget(target) {
      return (_getEl(target) || _emptyObj)._flip;
    };
    Flip2.getElementState = function getElementState(target, props) {
      return new ElementState(_getEl(target), props);
    };
    Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    };
    Flip2.register = function register(core) {
      _body2 = typeof document !== "undefined" && document.body;
      if (_body2) {
        gsap3 = core;
        _setDoc(_body2);
        _toArray = gsap3.utils.toArray;
        _getStyleSaver3 = gsap3.core.getStyleSaver;
        var snap3 = gsap3.utils.snap(0.1);
        _closestTenth = function _closestTenth2(value, add) {
          return snap3(parseFloat(value) + add);
        };
      }
    };
    return Flip2;
  }();
  Flip.version = "3.12.5";
  typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap4;
  var _coreInitted3;
  var _clamp3;
  var _win4;
  var _doc4;
  var _docEl;
  var _body3;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP3 = function _getGSAP4() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win4.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(value, _vertical.sc()) : _win4.pageXOffset || _doc4[_scrollLeft] || _docEl[_scrollLeft] || _body3[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(_horizontal.sc(), value) : _win4.pageYOffset || _doc4[_scrollTop] || _docEl[_scrollTop] || _body3[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap4.utils.toArray)(t)[0] || (typeof t === "string" && gsap4.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc4.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap4.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t = _getTime();
      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap4.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore5 = function _initCore6(core) {
    gsap4 = core || _getGSAP3();
    if (!_coreInitted3 && gsap4 && typeof document !== "undefined" && document.body) {
      _win4 = window;
      _doc4 = document;
      _docEl = _doc4.documentElement;
      _body3 = _doc4.body;
      _root = [_win4, _doc4, _docEl, _body3];
      _clamp3 = gsap4.utils.clamp;
      _context2 = gsap4.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win4.matchMedia && _win4.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win4 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted3 = 1;
    }
    return _coreInitted3;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init4(vars) {
      _coreInitted3 || _initCore5(gsap4) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap4.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win4.getComputedStyle(_body3).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc4, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update = function update2() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      }, _onPress = self.onPress = function(e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = self.onRelease = function(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
        if (!isDragNotClick && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap4.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll = function onScroll2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win4.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e) {
        self.event = e;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e) {
        self.event = e;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };
      onStopDelayedCall = self._dc = gsap4.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      _context2(this);
      self.enable = function(e) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = self.revert = function() {
        self.disable();
        var i = _observers.indexOf(self);
        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore5;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP3() && gsap4.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  var gsap5;
  var _coreInitted4;
  var _win5;
  var _doc5;
  var _docEl2;
  var _body4;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp3;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self) {
    var clamp3 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp3;
    return clamp3 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp3) {
    return clamp3 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round9 = function _round10(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap5 || _windowExists5() && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _isViewport3 = function _isViewport4(e) {
    return !!~_root2.indexOf(e);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win5["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body4["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win5.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body4[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber5 = function _isNumber6(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self, func) {
    if (self.enabled) {
      var result = self._ctx ? self._ctx.add(function() {
        return func(self);
      }) : func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs2 = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win5.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp3] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap5.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap5.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap5.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc5.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap5.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body4.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win5.innerWidth;
    _baseScreenHeight = _win5.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc5.fullscreenElement && !_doc5.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win5.innerWidth || Math.abs(_win5.innerHeight - _baseScreenHeight) > _win5.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win5.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body4.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win5.innerHeight;
    _body4.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray2(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t) {
      return t.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t) {
      var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
      (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
      return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap5.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value) && (value = value(self));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber5(value)) {
      _isFunction3(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self) || _body4;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap5.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body4) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap5.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap5.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap5.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted4 || ScrollTrigger3.register(gsap5) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber5(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win5), scrollerCache = gsap5.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber5(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap5.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap5.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction3(o) && o.target === (isViewport ? _doc5.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap5.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap5.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap5.utils.clamp(-progress, 1 - progress, _abs2(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self);
            _isNumber5(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs2(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs2(Math.max(_abs2(naturalEnd - totalProgress), _abs2(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs2(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap5.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc5.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap5.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap5.getProperty(pin);
        pinSetter = gsap5.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap5.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap5.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap5.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap5.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = self;
            self.update(r);
          }
          if (pin && (!pinReparent || !self.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };
      self.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap5.getProperty(markerEndTrigger, direction.p);
        }
        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap5.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._startClamp && (self._startClamp += offset2);
        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap5.utils.clamp(0, 1, gsap5.utils.normalize(start, end, prevScroll));
        }
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap5.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc5.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body4)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i) {
              spacerState.push(direction.d, i + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i = _getSize(pin, direction);
            i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap5.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap5.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap5.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
        return (_isString3(name) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function(t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };
      self.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round9(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self, onToggle);
              callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber5(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i = _triggers.indexOf(self);
        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self.scroller && (i = 1);
        });
        i || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      _triggers.push(self);
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      if (animation && animation.add && !change) {
        var updateFunc = self.update;
        self.update = function() {
          self.update = updateFunc;
          start || end || self.refresh();
        };
        gsap5.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted4) {
        gsap5 = core || _getGSAP5();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted4 = _enabled;
      }
      return _coreInitted4;
    };
    ScrollTrigger3.defaults = function defaults2(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win5, "wheel", _onScroll3);
      _removeListener3(_doc5, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc5, "touchcancel", _passThrough3);
      _removeListener3(_body4, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win5 = window;
      _doc5 = document;
      _docEl2 = _doc5.documentElement;
      _body4 = _doc5.body;
      if (gsap5) {
        _toArray2 = gsap5.utils.toArray;
        _clamp4 = gsap5.utils.clamp;
        _context3 = gsap5.core.context || _passThrough3;
        _suppressOverwrites2 = gsap5.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win5.history.scrollRestoration || "auto";
        _lastScroll = _win5.pageYOffset;
        gsap5.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body4) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap5);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win5, "wheel", _onScroll3);
          _root2 = [_win5, _doc5, _docEl2, _body4];
          if (gsap5.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap5.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap5.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap5.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap5.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap5.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc5, "scroll", _onScroll3);
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap5.core.Animation.prototype, bounds, i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body4);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap5.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc5, "touchcancel", _passThrough3);
          _addListener3(_body4, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp3 = gsap5.utils.checkPrefix("transform");
          _stateProps.push(_transformProp3);
          _coreInitted4 = _getTime2();
          _resizeDelay = gsap5.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc5, "visibilitychange", function() {
            var w = _win5.innerWidth, h = _win5.innerHeight;
            if (_doc5.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc5, "DOMContentLoaded", _refreshAll, _win5, "load", _refreshAll, _win5, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win5, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win5.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win5.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win5.innerWidth : (bounds.top + offset) / _win5.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap5.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted4 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap5.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body4, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap5.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body4 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc5, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc5, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap5.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win5.visualViewport ? _win5.visualViewport.scale * _win5.visualViewport.width : _win5.outerWidth) / _win5.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round9(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round9(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round9((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap5.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round9((_win5.visualViewport && _win5.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap5.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self2);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win5, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win5, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap5.ticker.add(_passThrough3);
    onStopDelayedCall = self._dc;
    tween = gsap5.to(self, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP5() && gsap5.registerPlugin(ScrollTrigger2);

  // src/home-page/formCode.ts
  init_live_reload();
  function initializeformCode() {
    window.onload = () => ["utm_source", "utm_medium", "utm_campaign"].forEach(
      (field) => document.getElementById(field).value = new URLSearchParams(location.search).get(field.toLowerCase()) || ""
    );
    document.querySelector('[data-js="input"]').oninput = (e) => e.target.value = e.target.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})\d+?$/, "$1");
  }

  // src/home-page/iconsRotacao.ts
  init_live_reload();
  function initializeMarqueeAnimation() {
    $(".marquee").each(function() {
      const track = $(this).find(".marquee_track");
      const items = $(this).find(".marquee_item");
      const tl = gsapWithCSS.timeline({
        repeat: -1,
        defaults: { ease: "expo.inOut", duration: 1, delay: 1 }
      });
      items.each((index, item) => {
        tl.to(track, { yPercent: (index + 1) * -100 });
      });
      items.first().clone().appendTo(track);
    });
  }

  // src/home-page/priceAnimation.ts
  init_live_reload();
  var { Dragdealer } = require_dragdealer();
  function initializedragEffect() {
    if (window.innerWidth > 1024) {
      let changeColor2 = function(item) {
        const myColor = item.find(".color").css("background-color");
        $(".handle_fill").css("border-color", myColor);
        $(".handle_back").css("background-color", myColor);
      }, updateActiveState2 = function(activeItem) {
        cmsItem.removeClass("active").find(".link_contato").removeClass("active");
        activeItem.addClass("active");
        activeItem.find(".link_contato").addClass("active");
        changeColor2(activeItem);
      }, smoothInterpolation2 = function(target, current, factor = 0.1) {
        return current + (target - current) * factor;
      }, animate2 = function() {
        lastValue = smoothInterpolation2(targetValue, lastValue);
        $(".handle_count").text(lastValue.toFixed(1));
        if (Math.abs(targetValue - lastValue) > 0.1) {
          animationFrameId = requestAnimationFrame(animate2);
        } else {
          lastValue = targetValue;
          $(".handle_count").text(targetValue.toFixed(1));
          animationFrameId = null;
        }
      };
      var changeColor = changeColor2, updateActiveState = updateActiveState2, smoothInterpolation = smoothInterpolation2, animate = animate2;
      const cmsItem = $(".position_item");
      const cmsItemLength = cmsItem.length;
      let dragdealer;
      changeColor2(cmsItem.eq(0));
      updateActiveState2(cmsItem.eq(0));
      let lastValue = parseFloat(cmsItem.eq(0).find(".position_salary").text());
      let targetValue = lastValue;
      let animationFrameId = null;
      dragdealer = new Dragdealer("drag-steps", {
        steps: cmsItemLength,
        speed: 0.2,
        loose: false,
        slide: true,
        animationCallback: function(x, y) {
          const exactIndex = x * (cmsItemLength - 1);
          const lowerIndex = Math.floor(exactIndex);
          const upperIndex = Math.ceil(exactIndex);
          if (lowerIndex === upperIndex) {
            targetValue = parseFloat(cmsItem.eq(lowerIndex).find(".position_salary").text());
          } else {
            const lowerValue = parseFloat(cmsItem.eq(lowerIndex).find(".position_salary").text());
            const upperValue = parseFloat(cmsItem.eq(upperIndex).find(".position_salary").text());
            const progress = exactIndex - lowerIndex;
            targetValue = lowerValue + (upperValue - lowerValue) * progress;
          }
          if (!animationFrameId) {
            animate2();
          }
          const activeItemIndex = Math.round(exactIndex);
          updateActiveState2(cmsItem.eq(activeItemIndex));
        },
        callback: function(x, y) {
          cmsItem.each(function(index) {
            const currentDecimal = $(this).index() / (cmsItemLength - 1);
            if (x == currentDecimal) {
              updateActiveState2($(this));
              const fixedValue = parseFloat($(this).find(".position_salary").text());
              targetValue = fixedValue;
              lastValue = fixedValue;
              $(".handle_count").text(fixedValue.toFixed(1));
            }
          });
        },
        dragStopCallback(x, y) {
          $(".handle_fill").addClass("release");
        }
      });
      $(".handle").on("mousedown touchstart", function() {
        $(".handle_fill").removeClass("release");
      });
      $(".handle").on("mouseup touchend", function() {
        $(".handle_fill").addClass("release");
      });
      cmsItem.on("mouseenter", function() {
        const index = $(this).index();
        const position = index / (cmsItemLength - 1);
        dragdealer.setValue(position);
      });
      cmsItem.on("mouseleave", function() {
      });
    }
  }

  // src/home-page/index.ts
  gsapWithCSS.registerPlugin(Flip, ScrollTrigger2, CustomEase);
  initializeformCode();
  initializeMarqueeAnimation();
  initializedragEffect();
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
