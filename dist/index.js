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
"use strict";(()=>{var Xu=Object.create;var fo=Object.defineProperty;var Gu=Object.getOwnPropertyDescriptor;var Ku=Object.getOwnPropertyNames;var Qu=Object.getPrototypeOf,Zu=Object.prototype.hasOwnProperty;var Ju=(a,e,i)=>e in a?fo(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var mo=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var eh=(a,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ku(e))!Zu.call(a,n)&&n!==i&&fo(a,n,{get:()=>e[n],enumerable:!(t=Gu(e,n))||t.enumerable});return a};var ll=(a,e,i)=>(i=a!=null?Xu(Qu(a)):{},eh(e||!a||!a.__esModule?fo(i,"default",{value:a,enumerable:!0}):i,a));var Ui=(a,e,i)=>(Ju(a,typeof e!="symbol"?e+"":e,i),i);var zu=mo(()=>{window.Sticksy=function(){"use strict";var a={STATIC:"static",FIXED:"fixed",STUCK:"stuck"};function e(t,n){if(!t)throw new Error("You have to specify the target element");if(typeof t!="string"&&!(t instanceof Element))throw new Error("Expected a string or element, but got: "+Object.prototype.toString.call(t));var s=i.findElement(t);if(!s)throw new Error("Cannot find target element: "+t);var o=s.parentNode;if(!o)throw new Error("Cannot find container of target element: "+t);n=n||{},this._props={containerEl:o,targetEl:s,topSpacing:n.topSpacing||0,enabled:n.enabled||!0,listen:n.listen||!1},this.onStateChanged=null,this.nodeRef=s,this._initialize()}e.instances=[],e.enabledInstances=[],e.prototype._initialize=function(){var t=this;this.state=a.STATIC,this._stickyNodes=[],this._dummyNodes=[];for(var n=this._props.targetEl;n;){var s=n.cloneNode(!0);s.style.visibility="hidden",s.style.pointerEvents="none",s.className+=" sticksy-dummy-node",s.removeAttribute("id"),this._props.targetEl.parentNode.insertBefore(s,this._props.targetEl),this._stickyNodes.push(n),this._dummyNodes.push(s),n=n.nextElementSibling}this._stickyNodesHeight=0,this._limits={top:0,bottom:0},this._isListening=!1,this._props.containerEl.style.position="relative",this._shouldCollapseMargins=getComputedStyle(this._props.containerEl).display.indexOf("flex")===-1,this._props.listen&&(this._mutationObserver=new MutationObserver(function(){t.hardRefresh()}),this._startListen()),e.instances.push(this),this._props.enabled&&e.enabledInstances.push(this),this.hardRefresh()},e.prototype._startListen=function(){!this._props.listen||this._isListening||(this._mutationObserver.observe(this._props.containerEl,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),this._isListening=!0)},e.prototype._stopListen=function(){!this._props.listen||!this._isListening||(this._mutationObserver.disconnect(),this._isListening=!1)},e.prototype._calcState=function(t){return t<this._limits.top?a.STATIC:t>=this._limits.bottom?a.STUCK:a.FIXED},e.prototype._updateStickyNodesHeight=function(){this._stickyNodesHeight=i.getComputedBox(this._stickyNodes[this._stickyNodes.length-1]).bottomWithMargin-i.getComputedBox(this._stickyNodes[0]).topWithMargin},e.prototype._updateLimits=function(){var t=this._props.containerEl,n=this._stickyNodes,s=i.getComputedBox(t),o=i.getComputedBox(n[0]);this._limits={top:o.topWithMargin-this._props.topSpacing,bottom:s.bottom-s.paddingBottom-this._props.topSpacing-this._stickyNodesHeight}},e.prototype._applyState=function(t){t===a.STATIC?(this._resetElements(this._stickyNodes),this._disableElements(this._dummyNodes)):(this._fixElementsSize(this._stickyNodes),t===a.FIXED?this._fixElements(this._stickyNodes):this._stuckElements(this._stickyNodes),this._enableElements(this._dummyNodes))},e.prototype.refresh=function(){var t=this._calcState(window.pageYOffset,this._limits);t!==this.state&&(this.state=t,this._stopListen(),this._applyState(t),this._startListen(),typeof this.onStateChanged=="function"&&this.onStateChanged(t))},e.prototype.hardRefresh=function(){this._stopListen();var t=this.state;this.state=a.STATIC,this._applyState(this.state),this._fixElementsSize(this._stickyNodes),this._updateStickyNodesHeight(),this._updateLimits(),this.state=this._calcState(window.pageYOffset,this._limits),this._applyState(this.state),this._startListen(),typeof this.onStateChanged=="function"&&t!==this.state&&this.onStateChanged(this.state)},e.prototype.enable=function(){this._props.enabled=!0,e.enabledInstances.push(this),this.hardRefresh()},e.prototype.disable=function(){this._props.enabled=!1,this.state=a.STATIC,this._applyState(this.state),e.enabledInstances.splice(e.enabledInstances.indexOf(this),1)},e.prototype._fixElements=function(t){for(var n=0,s=this._props.topSpacing,o=0;o<t.length;o++){var l=t[o],u=i.getComputedBox(l),h=this._shouldCollapseMargins?Math.max(0,n-u.marginTop):n;l.style.position="fixed",l.style.top=s+h+"px",l.style.bottom="",s+=u.height+u.marginTop+h,n=u.marginBottom}},e.prototype._stuckElements=function(t){for(var n=0,s=i.getComputedBox(this._props.containerEl).paddingBottom,o=t.length-1;o>=0;o--){var l=t[o],u=i.getComputedBox(l),h=this._shouldCollapseMargins?Math.max(0,n-u.marginBottom):n;l.style.position="absolute",l.style.top="auto",l.style.bottom=s+h+"px",s+=u.height+u.marginBottom+h,n=u.marginTop}},e.prototype._resetElements=function(t){t.forEach(function(n){n.style.position="",n.style.top="",n.style.bottom="",n.style.height="",n.style.width=""})},e.prototype._disableElements=function(t){t.forEach(function(n){n.style.display="none"})},e.prototype._enableElements=function(t){for(var n=0;n<t.length;n++)t[n].style.display=getComputedStyle(this._stickyNodes[n]).display},e.prototype._fixElementsSize=function(){for(var t=0;t<this._stickyNodes.length;t++){var n=this._stickyNodes[t],s=getComputedStyle(n);n.style.width=s.width,n.style.height=s.height}},e.refreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].refresh()},e.hardRefreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].hardRefresh()},e.enableAll=function(){e.enabledInstances=e.instances.slice(),this.hardRefreshAll()},e.disableAll=function(){for(var t=e.enabledInstances.slice(),n=0;n<t.length;n++)e.enabledInstances[n].disable();e.enabledInstances=[]},e.initializeAll=function(t,n,s){if(typeof t>"u")throw new Error("'target' parameter is undefined");var o=[];t instanceof Element?o=[t]:typeof t.length<"u"&&t.length>0&&t[0]instanceof Element?o=typeof t.get=="function"?t.get():t:typeof t=="string"&&(o=document.querySelectorAll(t)||[]);var l=[],u=[];if(o.forEach(function(h){l.indexOf(h.parentNode)===-1&&(l.push(h.parentNode),u.push(h))}),!s&&!u.length)throw new Error("There are no elements to initialize");return u.map(function(h){return new e(h,n)})},window.addEventListener("scroll",e.refreshAll),window.addEventListener("resize",e.hardRefreshAll);var i={parseNumber:function(t){return parseFloat(t)||0},findElement:function(t,n){return n||(n=document),typeof t=="string"?n.querySelector(t):t instanceof Element?t:void 0},getComputedBox:function(t){var n=t.getBoundingClientRect(),s=getComputedStyle(t);return{height:n.height,width:n.width,top:window.pageYOffset+n.top,bottom:window.pageYOffset+n.bottom,marginTop:i.parseNumber(s.marginTop),marginBottom:i.parseNumber(s.marginBottom),paddingTop:i.parseNumber(s.paddingTop),paddingBottom:i.parseNumber(s.paddingBottom),topWithMargin:window.pageYOffset+n.top-i.parseNumber(s.marginTop),bottomWithMargin:window.pageYOffset+n.bottom+i.parseNumber(s.marginBottom)}}};return e}();var Fu=window.$||window.jQuery||window.Zepto;Fu&&(Fu.fn.sticksy=function(e){return window.Sticksy.initializeAll(this,e)})});var Vu=mo((lf,Bu)=>{Bu.exports=zu()});var ju=mo((ol,al)=>{typeof navigator=="object"&&function(a,e){typeof ol=="object"&&typeof al<"u"?al.exports=e():typeof define=="function"&&define.amd?define("Plyr",e):(a=typeof globalThis<"u"?globalThis:a||self).Plyr=e()}(ol,function(){"use strict";function a(r,d,c){return(d=function(p){var _=function(b,x){if(typeof b!="object"||b===null)return b;var O=b[Symbol.toPrimitive];if(O!==void 0){var N=O.call(b,x||"default");if(typeof N!="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(b)}(p,"string");return typeof _=="symbol"?_:String(_)}(d))in r?Object.defineProperty(r,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[d]=c,r}function e(r,d){for(var c=0;c<d.length;c++){var p=d[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(r,p.key,p)}}function i(r,d,c){return d in r?Object.defineProperty(r,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[d]=c,r}function t(r,d){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);d&&(p=p.filter(function(_){return Object.getOwnPropertyDescriptor(r,_).enumerable})),c.push.apply(c,p)}return c}function n(r){for(var d=1;d<arguments.length;d++){var c=arguments[d]!=null?arguments[d]:{};d%2?t(Object(c),!0).forEach(function(p){i(r,p,c[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(p){Object.defineProperty(r,p,Object.getOwnPropertyDescriptor(c,p))})}return r}var s={addCSS:!0,thumbWidth:15,watch:!0},o=function(r){return r!=null?r.constructor:null},l=function(r,d){return!!(r&&d&&r instanceof d)},u=function(r){return r==null},h=function(r){return o(r)===Object},f=function(r){return o(r)===String},g=function(r){return Array.isArray(r)},v=function(r){return l(r,NodeList)},y={nullOrUndefined:u,object:h,number:function(r){return o(r)===Number&&!Number.isNaN(r)},string:f,boolean:function(r){return o(r)===Boolean},function:function(r){return o(r)===Function},array:g,nodeList:v,element:function(r){return l(r,Element)},event:function(r){return l(r,Event)},empty:function(r){return u(r)||(f(r)||g(r)||v(r))&&!r.length||h(r)&&!Object.keys(r).length}};function T(r,d){if(1>d){var c=function(p){var _="".concat(p).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return _?Math.max(0,(_[1]?_[1].length:0)-(_[2]?+_[2]:0)):0}(d);return parseFloat(r.toFixed(c))}return Math.round(r/d)*d}var w=function(){function r(d,c){(function(p,_){if(!(p instanceof _))throw new TypeError("Cannot call a class as a function")})(this,r),y.element(d)?this.element=d:y.string(d)&&(this.element=document.querySelector(d)),y.element(this.element)&&y.empty(this.element.rangeTouch)&&(this.config=n({},s,{},c),this.init())}return function(d,c,p){c&&e(d.prototype,c),p&&e(d,p)}(r,[{key:"init",value:function(){r.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){r.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(d){var c=this,p=d?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(_){c.element[p](_,function(b){return c.set(b)},!1)})}},{key:"get",value:function(d){if(!r.enabled||!y.event(d))return null;var c,p=d.target,_=d.changedTouches[0],b=parseFloat(p.getAttribute("min"))||0,x=parseFloat(p.getAttribute("max"))||100,O=parseFloat(p.getAttribute("step"))||1,N=p.getBoundingClientRect(),B=100/N.width*(this.config.thumbWidth/2)/100;return 0>(c=100/N.width*(_.clientX-N.left))?c=0:100<c&&(c=100),50>c?c-=(100-2*c)*B:50<c&&(c+=2*(c-50)*B),b+T(c/100*(x-b),O)}},{key:"set",value:function(d){r.enabled&&y.event(d)&&!d.target.disabled&&(d.preventDefault(),d.target.value=this.get(d),function(c,p){if(c&&p){var _=new Event(p,{bubbles:!0});c.dispatchEvent(_)}}(d.target,d.type==="touchend"?"change":"input"))}}],[{key:"setup",value:function(d){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},p=null;if(y.empty(d)||y.string(d)?p=Array.from(document.querySelectorAll(y.string(d)?d:'input[type="range"]')):y.element(d)?p=[d]:y.nodeList(d)?p=Array.from(d):y.array(d)&&(p=d.filter(y.element)),y.empty(p))return null;var _=n({},s,{},c);if(y.string(d)&&_.watch){var b=new MutationObserver(function(x){Array.from(x).forEach(function(O){Array.from(O.addedNodes).forEach(function(N){y.element(N)&&function(B,Z){return function(){return Array.from(document.querySelectorAll(Z)).includes(this)}.call(B,Z)}(N,d)&&new r(N,_)})})});b.observe(document.body,{childList:!0,subtree:!0})}return p.map(function(x){return new r(x,c)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),r}();let S=r=>r!=null?r.constructor:null,k=(r,d)=>!!(r&&d&&r instanceof d),C=r=>r==null,P=r=>S(r)===Object,A=r=>S(r)===String,I=r=>typeof r=="function",D=r=>Array.isArray(r),R=r=>k(r,NodeList),F=r=>C(r)||(A(r)||D(r)||R(r))&&!r.length||P(r)&&!Object.keys(r).length;var m={nullOrUndefined:C,object:P,number:r=>S(r)===Number&&!Number.isNaN(r),string:A,boolean:r=>S(r)===Boolean,function:I,array:D,weakMap:r=>k(r,WeakMap),nodeList:R,element:r=>r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.style=="object"&&typeof r.ownerDocument=="object",textNode:r=>S(r)===Text,event:r=>k(r,Event),keyboardEvent:r=>k(r,KeyboardEvent),cue:r=>k(r,window.TextTrackCue)||k(r,window.VTTCue),track:r=>k(r,TextTrack)||!C(r)&&A(r.kind),promise:r=>k(r,Promise)&&I(r.then),url:r=>{if(k(r,window.URL))return!0;if(!A(r))return!1;let d=r;r.startsWith("http://")&&r.startsWith("https://")||(d=`http://${r}`);try{return!F(new URL(d).hostname)}catch{return!1}},empty:F};let L=(()=>{let r=document.createElement("span"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c=Object.keys(d).find(p=>r.style[p]!==void 0);return!!m.string(c)&&d[c]})();function W(r,d){setTimeout(()=>{try{r.hidden=!0,r.offsetHeight,r.hidden=!1}catch{}},d)}var z={isIE:!!window.document.documentMode,isEdge:/Edge/g.test(navigator.userAgent),isWebKit:"WebkitAppearance"in document.documentElement.style&&!/Edge/g.test(navigator.userAgent),isIPhone:/iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1,isIPadOS:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,isIos:/iPad|iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1};function ne(r,d){return d.split(".").reduce((c,p)=>c&&c[p],r)}function U(r={},...d){if(!d.length)return r;let c=d.shift();return m.object(c)?(Object.keys(c).forEach(p=>{m.object(c[p])?(Object.keys(r).includes(p)||Object.assign(r,{[p]:{}}),U(r[p],c[p])):Object.assign(r,{[p]:c[p]})}),U(r,...d)):r}function q(r,d){let c=r.length?r:[r];Array.from(c).reverse().forEach((p,_)=>{let b=_>0?d.cloneNode(!0):d,x=p.parentNode,O=p.nextSibling;b.appendChild(p),O?x.insertBefore(b,O):x.appendChild(b)})}function se(r,d){m.element(r)&&!m.empty(d)&&Object.entries(d).filter(([,c])=>!m.nullOrUndefined(c)).forEach(([c,p])=>r.setAttribute(c,p))}function V(r,d,c){let p=document.createElement(r);return m.object(d)&&se(p,d),m.string(c)&&(p.innerText=c),p}function ye(r,d,c,p){m.element(d)&&d.appendChild(V(r,c,p))}function _e(r){m.nodeList(r)||m.array(r)?Array.from(r).forEach(_e):m.element(r)&&m.element(r.parentNode)&&r.parentNode.removeChild(r)}function M(r){if(!m.element(r))return;let{length:d}=r.childNodes;for(;d>0;)r.removeChild(r.lastChild),d-=1}function fe(r,d){return m.element(d)&&m.element(d.parentNode)&&m.element(r)?(d.parentNode.replaceChild(r,d),r):null}function Y(r,d){if(!m.string(r)||m.empty(r))return{};let c={},p=U({},d);return r.split(",").forEach(_=>{let b=_.trim(),x=b.replace(".",""),O=b.replace(/[[\]]/g,"").split("="),[N]=O,B=O.length>1?O[1].replace(/["']/g,""):"";switch(b.charAt(0)){case".":m.string(p.class)?c.class=`${p.class} ${x}`:c.class=x;break;case"#":c.id=b.replace("#","");break;case"[":c[N]=B}}),U(p,c)}function we(r,d){if(!m.element(r))return;let c=d;m.boolean(c)||(c=!r.hidden),r.hidden=c}function Q(r,d,c){if(m.nodeList(r))return Array.from(r).map(p=>Q(p,d,c));if(m.element(r)){let p="toggle";return c!==void 0&&(p=c?"add":"remove"),r.classList[p](d),r.classList.contains(d)}return!1}function oe(r,d){return m.element(r)&&r.classList.contains(d)}function re(r,d){let{prototype:c}=Element;return(c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||function(){return Array.from(document.querySelectorAll(d)).includes(this)}).call(r,d)}function ve(r){return this.elements.container.querySelectorAll(r)}function ce(r){return this.elements.container.querySelector(r)}function ze(r=null,d=!1){m.element(r)&&r.focus({preventScroll:!0,focusVisible:d})}let Ce={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},ue={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check(r,d){let c=ue[r]||d!=="html5";return{api:c,ui:c&&ue.rangeInput}},pip:!(z.isIPhone||!m.function(V("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||V("video").disablePictureInPicture)),airplay:m.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime(r){if(m.empty(r))return!1;let[d]=r.split("/"),c=r;if(!this.isHTML5||d!==this.type)return!1;Object.keys(Ce).includes(c)&&(c+=`; codecs="${Ce[r]}"`);try{return!!(c&&this.media.canPlayType(c).replace(/no/,""))}catch{return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(()=>{let r=document.createElement("input");return r.type="range",r.type==="range"})(),touch:"ontouchstart"in document.documentElement,transitions:L!==!1,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Qe=(()=>{let r=!1;try{let d=Object.defineProperty({},"passive",{get:()=>(r=!0,null)});window.addEventListener("test",null,d),window.removeEventListener("test",null,d)}catch{}return r})();function ie(r,d,c,p=!1,_=!0,b=!1){if(!r||!("addEventListener"in r)||m.empty(d)||!m.function(c))return;let x=d.split(" "),O=b;Qe&&(O={passive:_,capture:b}),x.forEach(N=>{this&&this.eventListeners&&p&&this.eventListeners.push({element:r,type:N,callback:c,options:O}),r[p?"addEventListener":"removeEventListener"](N,c,O)})}function K(r,d="",c,p=!0,_=!1){ie.call(this,r,d,c,!0,p,_)}function De(r,d="",c,p=!0,_=!1){ie.call(this,r,d,c,!1,p,_)}function Ye(r,d="",c,p=!0,_=!1){let b=(...x)=>{De(r,d,b,p,_),c.apply(this,x)};ie.call(this,r,d,b,!0,p,_)}function E(r,d="",c=!1,p={}){if(!m.element(r)||m.empty(d))return;let _=new CustomEvent(d,{bubbles:c,detail:{...p,plyr:this}});r.dispatchEvent(_)}function Be(){this&&this.eventListeners&&(this.eventListeners.forEach(r=>{let{element:d,type:c,callback:p,options:_}=r;d.removeEventListener(c,p,_)}),this.eventListeners=[])}function kt(){return new Promise(r=>this.ready?setTimeout(r,0):K.call(this,this.elements.container,"ready",r)).then(()=>{})}function Ve(r){m.promise(r)&&r.then(null,()=>{})}function ee(r){return m.array(r)?r.filter((d,c)=>r.indexOf(d)===c):r}function Gt(r,d){return m.array(r)&&r.length?r.reduce((c,p)=>Math.abs(p-d)<Math.abs(c-d)?p:c):null}function Oi(r){return!(!window||!window.CSS)&&window.CSS.supports(r)}let Vi=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce((r,[d,c])=>({...r,[d/c]:[d,c]}),{});function ct(r){return m.array(r)||m.string(r)&&r.includes(":")?(m.array(r)?r:r.split(":")).map(Number).every(m.number):!1}function si(r){if(!m.array(r)||!r.every(m.number))return null;let[d,c]=r,p=(b,x)=>x===0?b:p(x,b%x),_=p(d,c);return[d/_,c/_]}function We(r){let d=p=>ct(p)?p.split(":").map(Number):null,c=d(r);if(c===null&&(c=d(this.config.ratio)),c===null&&!m.empty(this.embed)&&m.array(this.embed.ratio)&&({ratio:c}=this.embed),c===null&&this.isHTML5){let{videoWidth:p,videoHeight:_}=this.media;c=[p,_]}return si(c)}function bt(r){if(!this.isVideo)return{};let{wrapper:d}=this.elements,c=We.call(this,r);if(!m.array(c))return{};let[p,_]=si(c),b=100/p*_;if(Oi(`aspect-ratio: ${p}/${_}`)?d.style.aspectRatio=`${p}/${_}`:d.style.paddingBottom=`${b}%`,this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){let x=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),O=(x-b)/(x/50);this.fullscreen.active?d.style.paddingBottom=null:this.media.style.transform=`translateY(-${O}%)`}else this.isHTML5&&d.classList.add(this.config.classNames.videoFixedRatio);return{padding:b,ratio:c}}function zt(r,d,c=.05){let p=r/d,_=Gt(Object.keys(Vi),p);return Math.abs(_-p)<=c?Vi[_]:[r,d]}let vt={getSources(){return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(r=>{let d=r.getAttribute("type");return!!m.empty(d)||ue.mime.call(this,d)}):[]},getQualityOptions(){return this.config.quality.forced?this.config.quality.options:vt.getSources.call(this).map(r=>Number(r.getAttribute("size"))).filter(Boolean)},setup(){if(!this.isHTML5)return;let r=this;r.options.speed=r.config.speed.options,m.empty(this.config.ratio)||bt.call(r),Object.defineProperty(r.media,"quality",{get(){let d=vt.getSources.call(r).find(c=>c.getAttribute("src")===r.source);return d&&Number(d.getAttribute("size"))},set(d){if(r.quality!==d){if(r.config.quality.forced&&m.function(r.config.quality.onChange))r.config.quality.onChange(d);else{let c=vt.getSources.call(r).find(N=>Number(N.getAttribute("size"))===d);if(!c)return;let{currentTime:p,paused:_,preload:b,readyState:x,playbackRate:O}=r.media;r.media.src=c.getAttribute("src"),(b!=="none"||x)&&(r.once("loadedmetadata",()=>{r.speed=O,r.currentTime=p,_||Ve(r.play())}),r.media.load())}E.call(r,r.media,"qualitychange",!1,{quality:d})}}})},cancelRequests(){this.isHTML5&&(_e(vt.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function $i(r,...d){return m.empty(r)?r:r.toString().replace(/{(\d+)}/g,(c,p)=>d[p].toString())}let He=(r="",d="",c="")=>r.replace(new RegExp(d.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),c.toString()),Sn=(r="")=>r.toString().replace(/\w\S*/g,d=>d.charAt(0).toUpperCase()+d.slice(1).toLowerCase());function Ai(r=""){let d=r.toString();return d=function(c=""){let p=c.toString();return p=He(p,"-"," "),p=He(p,"_"," "),p=Sn(p),He(p," ","")}(d),d.charAt(0).toLowerCase()+d.slice(1)}function on(r){let d=document.createElement("div");return d.appendChild(r),d.innerHTML}let qi={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},$e={get(r="",d={}){if(m.empty(r)||m.empty(d))return"";let c=ne(d.i18n,r);if(m.empty(c))return Object.keys(qi).includes(r)?qi[r]:"";let p={"{seektime}":d.seekTime,"{title}":d.title};return Object.entries(p).forEach(([_,b])=>{c=He(c,_,b)}),c}};class ri{constructor(d){a(this,"get",c=>{if(!ri.supported||!this.enabled)return null;let p=window.localStorage.getItem(this.key);if(m.empty(p))return null;let _=JSON.parse(p);return m.string(c)&&c.length?_[c]:_}),a(this,"set",c=>{if(!ri.supported||!this.enabled||!m.object(c))return;let p=this.get();m.empty(p)&&(p={}),U(p,c);try{window.localStorage.setItem(this.key,JSON.stringify(p))}catch{}}),this.enabled=d.config.storage.enabled,this.key=d.config.storage.key}static get supported(){try{if(!("localStorage"in window))return!1;let d="___test";return window.localStorage.setItem(d,d),window.localStorage.removeItem(d),!0}catch{return!1}}}function be(r,d="text"){return new Promise((c,p)=>{try{let _=new XMLHttpRequest;if(!("withCredentials"in _))return;_.addEventListener("load",()=>{if(d==="text")try{c(JSON.parse(_.responseText))}catch{c(_.responseText)}else c(_.response)}),_.addEventListener("error",()=>{throw new Error(_.status)}),_.open("GET",r,!0),_.responseType=d,_.send()}catch(_){p(_)}})}function Ii(r,d){if(!m.string(r))return;let c="cache",p=m.string(d),_=!1,b=()=>document.getElementById(d)!==null,x=(O,N)=>{O.innerHTML=N,p&&b()||document.body.insertAdjacentElement("afterbegin",O)};if(!p||!b()){let O=ri.supported,N=document.createElement("div");if(N.setAttribute("hidden",""),p&&N.setAttribute("id",d),O){let B=window.localStorage.getItem(`${c}-${d}`);if(_=B!==null,_){let Z=JSON.parse(B);x(N,Z.content)}}be(r).then(B=>{if(!m.empty(B)){if(O)try{window.localStorage.setItem(`${c}-${d}`,JSON.stringify({content:B}))}catch{}x(N,B)}}).catch(()=>{})}}let Kt=r=>Math.trunc(r/60/60%60,10),oi=r=>Math.trunc(r/60%60,10),ai=r=>Math.trunc(r%60,10);function fi(r=0,d=!1,c=!1){if(!m.number(r))return fi(void 0,d,c);let p=O=>`0${O}`.slice(-2),_=Kt(r),b=oi(r),x=ai(r);return _=d||_>0?`${_}:`:"",`${c&&r>0?"-":""}${_}${p(b)}:${p(x)}`}let H={getIconUrl(){let r=new URL(this.config.iconUrl,window.location),d=window.location.host?window.location.host:window.top.location.host,c=r.host!==d||z.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:c}},findElements(){try{return this.elements.controls=ce.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:ve.call(this,this.config.selectors.buttons.play),pause:ce.call(this,this.config.selectors.buttons.pause),restart:ce.call(this,this.config.selectors.buttons.restart),rewind:ce.call(this,this.config.selectors.buttons.rewind),fastForward:ce.call(this,this.config.selectors.buttons.fastForward),mute:ce.call(this,this.config.selectors.buttons.mute),pip:ce.call(this,this.config.selectors.buttons.pip),airplay:ce.call(this,this.config.selectors.buttons.airplay),settings:ce.call(this,this.config.selectors.buttons.settings),captions:ce.call(this,this.config.selectors.buttons.captions),fullscreen:ce.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=ce.call(this,this.config.selectors.progress),this.elements.inputs={seek:ce.call(this,this.config.selectors.inputs.seek),volume:ce.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:ce.call(this,this.config.selectors.display.buffer),currentTime:ce.call(this,this.config.selectors.display.currentTime),duration:ce.call(this,this.config.selectors.display.duration)},m.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)),!0}catch(r){return this.debug.warn("It looks like there is a problem with your custom controls HTML",r),this.toggleNativeControls(!0),!1}},createIcon(r,d){let c="http://www.w3.org/2000/svg",p=H.getIconUrl.call(this),_=`${p.cors?"":p.url}#${this.config.iconPrefix}`,b=document.createElementNS(c,"svg");se(b,U(d,{"aria-hidden":"true",focusable:"false"}));let x=document.createElementNS(c,"use"),O=`${_}-${r}`;return"href"in x&&x.setAttributeNS("http://www.w3.org/1999/xlink","href",O),x.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",O),b.appendChild(x),b},createLabel(r,d={}){let c=$e.get(r,this.config);return V("span",{...d,class:[d.class,this.config.classNames.hidden].filter(Boolean).join(" ")},c)},createBadge(r){if(m.empty(r))return null;let d=V("span",{class:this.config.classNames.menu.value});return d.appendChild(V("span",{class:this.config.classNames.menu.badge},r)),d},createButton(r,d){let c=U({},d),p=Ai(r),_={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(x=>{Object.keys(c).includes(x)&&(_[x]=c[x],delete c[x])}),_.element!=="button"||Object.keys(c).includes("type")||(c.type="button"),Object.keys(c).includes("class")?c.class.split(" ").some(x=>x===this.config.classNames.control)||U(c,{class:`${c.class} ${this.config.classNames.control}`}):c.class=this.config.classNames.control,r){case"play":_.toggle=!0,_.label="play",_.labelPressed="pause",_.icon="play",_.iconPressed="pause";break;case"mute":_.toggle=!0,_.label="mute",_.labelPressed="unmute",_.icon="volume",_.iconPressed="muted";break;case"captions":_.toggle=!0,_.label="enableCaptions",_.labelPressed="disableCaptions",_.icon="captions-off",_.iconPressed="captions-on";break;case"fullscreen":_.toggle=!0,_.label="enterFullscreen",_.labelPressed="exitFullscreen",_.icon="enter-fullscreen",_.iconPressed="exit-fullscreen";break;case"play-large":c.class+=` ${this.config.classNames.control}--overlaid`,p="play",_.label="play",_.icon="play";break;default:m.empty(_.label)&&(_.label=p),m.empty(_.icon)&&(_.icon=r)}let b=V(_.element);return _.toggle?(b.appendChild(H.createIcon.call(this,_.iconPressed,{class:"icon--pressed"})),b.appendChild(H.createIcon.call(this,_.icon,{class:"icon--not-pressed"})),b.appendChild(H.createLabel.call(this,_.labelPressed,{class:"label--pressed"})),b.appendChild(H.createLabel.call(this,_.label,{class:"label--not-pressed"}))):(b.appendChild(H.createIcon.call(this,_.icon)),b.appendChild(H.createLabel.call(this,_.label))),U(c,Y(this.config.selectors.buttons[p],c)),se(b,c),p==="play"?(m.array(this.elements.buttons[p])||(this.elements.buttons[p]=[]),this.elements.buttons[p].push(b)):this.elements.buttons[p]=b,b},createRange(r,d){let c=V("input",U(Y(this.config.selectors.inputs[r]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":$e.get(r,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},d));return this.elements.inputs[r]=c,H.updateRangeFill.call(this,c),w.setup(c),c},createProgress(r,d){let c=V("progress",U(Y(this.config.selectors.display[r]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},d));if(r!=="volume"){c.appendChild(V("span",null,"0"));let p={played:"played",buffer:"buffered"}[r],_=p?$e.get(p,this.config):"";c.innerText=`% ${_.toLowerCase()}`}return this.elements.display[r]=c,c},createTime(r,d){let c=Y(this.config.selectors.display[r],d),p=V("div",U(c,{class:`${c.class?c.class:""} ${this.config.classNames.display.time} `.trim(),"aria-label":$e.get(r,this.config),role:"timer"}),"00:00");return this.elements.display[r]=p,p},bindMenuItemShortcuts(r,d){K.call(this,r,"keydown keyup",c=>{if(![" ","ArrowUp","ArrowDown","ArrowRight"].includes(c.key)||(c.preventDefault(),c.stopPropagation(),c.type==="keydown"))return;let p=re(r,'[role="menuitemradio"]');if(!p&&[" ","ArrowRight"].includes(c.key))H.showMenuPanel.call(this,d,!0);else{let _;c.key!==" "&&(c.key==="ArrowDown"||p&&c.key==="ArrowRight"?(_=r.nextElementSibling,m.element(_)||(_=r.parentNode.firstElementChild)):(_=r.previousElementSibling,m.element(_)||(_=r.parentNode.lastElementChild)),ze.call(this,_,!0))}},!1),K.call(this,r,"keyup",c=>{c.key==="Return"&&H.focusFirstMenuItem.call(this,null,!0)})},createMenuItem({value:r,list:d,type:c,title:p,badge:_=null,checked:b=!1}){let x=Y(this.config.selectors.inputs[c]),O=V("button",U(x,{type:"button",role:"menuitemradio",class:`${this.config.classNames.control} ${x.class?x.class:""}`.trim(),"aria-checked":b,value:r})),N=V("span");N.innerHTML=p,m.element(_)&&N.appendChild(_),O.appendChild(N),Object.defineProperty(O,"checked",{enumerable:!0,get:()=>O.getAttribute("aria-checked")==="true",set(B){B&&Array.from(O.parentNode.children).filter(Z=>re(Z,'[role="menuitemradio"]')).forEach(Z=>Z.setAttribute("aria-checked","false")),O.setAttribute("aria-checked",B?"true":"false")}}),this.listeners.bind(O,"click keyup",B=>{if(!m.keyboardEvent(B)||B.key===" "){switch(B.preventDefault(),B.stopPropagation(),O.checked=!0,c){case"language":this.currentTrack=Number(r);break;case"quality":this.quality=r;break;case"speed":this.speed=parseFloat(r)}H.showMenuPanel.call(this,"home",m.keyboardEvent(B))}},c,!1),H.bindMenuItemShortcuts.call(this,O,c),d.appendChild(O)},formatTime(r=0,d=!1){return m.number(r)?fi(r,Kt(this.duration)>0,d):r},updateTimeDisplay(r=null,d=0,c=!1){m.element(r)&&m.number(d)&&(r.innerText=H.formatTime(d,c))},updateVolume(){this.supported.ui&&(m.element(this.elements.inputs.volume)&&H.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),m.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||this.volume===0))},setRange(r,d=0){m.element(r)&&(r.value=d,H.updateRangeFill.call(this,r))},updateProgress(r){if(!this.supported.ui||!m.event(r))return;let d=0,c=(b,x)=>{let O=m.number(x)?x:0,N=m.element(b)?b:this.elements.display.buffer;if(m.element(N)){N.value=O;let B=N.getElementsByTagName("span")[0];m.element(B)&&(B.childNodes[0].nodeValue=O)}};if(r)switch(r.type){case"timeupdate":case"seeking":case"seeked":p=this.currentTime,_=this.duration,d=p===0||_===0||Number.isNaN(p)||Number.isNaN(_)?0:(p/_*100).toFixed(2),r.type==="timeupdate"&&H.setRange.call(this,this.elements.inputs.seek,d);break;case"playing":case"progress":c(this.elements.display.buffer,100*this.buffered)}var p,_},updateRangeFill(r){let d=m.event(r)?r.target:r;if(m.element(d)&&d.getAttribute("type")==="range"){if(re(d,this.config.selectors.inputs.seek)){d.setAttribute("aria-valuenow",this.currentTime);let c=H.formatTime(this.currentTime),p=H.formatTime(this.duration),_=$e.get("seekLabel",this.config);d.setAttribute("aria-valuetext",_.replace("{currentTime}",c).replace("{duration}",p))}else if(re(d,this.config.selectors.inputs.volume)){let c=100*d.value;d.setAttribute("aria-valuenow",c),d.setAttribute("aria-valuetext",`${c.toFixed(1)}%`)}else d.setAttribute("aria-valuenow",d.value);(z.isWebKit||z.isIPadOS)&&d.style.setProperty("--value",d.value/d.max*100+"%")}},updateSeekTooltip(r){var d,c;if(!this.config.tooltips.seek||!m.element(this.elements.inputs.seek)||!m.element(this.elements.display.seekTooltip)||this.duration===0)return;let p=this.elements.display.seekTooltip,_=`${this.config.classNames.tooltip}--visible`,b=Z=>Q(p,_,Z);if(this.touch)return void b(!1);let x=0,O=this.elements.progress.getBoundingClientRect();if(m.event(r))x=100/O.width*(r.pageX-O.left);else{if(!oe(p,_))return;x=parseFloat(p.style.left,10)}x<0?x=0:x>100&&(x=100);let N=this.duration/100*x;p.innerText=H.formatTime(N);let B=(d=this.config.markers)===null||d===void 0||(c=d.points)===null||c===void 0?void 0:c.find(({time:Z})=>Z===Math.round(N));B&&p.insertAdjacentHTML("afterbegin",`${B.label}<br>`),p.style.left=`${x}%`,m.event(r)&&["mouseenter","mouseleave"].includes(r.type)&&b(r.type==="mouseenter")},timeUpdate(r){let d=!m.element(this.elements.display.duration)&&this.config.invertTime;H.updateTimeDisplay.call(this,this.elements.display.currentTime,d?this.duration-this.currentTime:this.currentTime,d),r&&r.type==="timeupdate"&&this.media.seeking||H.updateProgress.call(this,r)},durationUpdate(){if(!this.supported.ui||!this.config.invertTime&&this.currentTime)return;if(this.duration>=2**32)return we(this.elements.display.currentTime,!0),void we(this.elements.progress,!0);m.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);let r=m.element(this.elements.display.duration);!r&&this.config.displayDuration&&this.paused&&H.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),r&&H.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),this.config.markers.enabled&&H.setMarkers.call(this),H.updateSeekTooltip.call(this)},toggleMenuButton(r,d){we(this.elements.settings.buttons[r],!d)},updateSetting(r,d,c){let p=this.elements.settings.panels[r],_=null,b=d;if(r==="captions")_=this.currentTrack;else{if(_=m.empty(c)?this[r]:c,m.empty(_)&&(_=this.config[r].default),!m.empty(this.options[r])&&!this.options[r].includes(_))return void this.debug.warn(`Unsupported value of '${_}' for ${r}`);if(!this.config[r].options.includes(_))return void this.debug.warn(`Disabled value of '${_}' for ${r}`)}if(m.element(b)||(b=p&&p.querySelector('[role="menu"]')),!m.element(b))return;this.elements.settings.buttons[r].querySelector(`.${this.config.classNames.menu.value}`).innerHTML=H.getLabel.call(this,r,_);let x=b&&b.querySelector(`[value="${_}"]`);m.element(x)&&(x.checked=!0)},getLabel(r,d){switch(r){case"speed":return d===1?$e.get("normal",this.config):`${d}&times;`;case"quality":if(m.number(d)){let c=$e.get(`qualityLabel.${d}`,this.config);return c.length?c:`${d}p`}return Sn(d);case"captions":return X.getLabel.call(this);default:return null}},setQualityMenu(r){if(!m.element(this.elements.settings.panels.quality))return;let d="quality",c=this.elements.settings.panels.quality.querySelector('[role="menu"]');m.array(r)&&(this.options.quality=ee(r).filter(b=>this.config.quality.options.includes(b)));let p=!m.empty(this.options.quality)&&this.options.quality.length>1;if(H.toggleMenuButton.call(this,d,p),M(c),H.checkMenu.call(this),!p)return;let _=b=>{let x=$e.get(`qualityBadge.${b}`,this.config);return x.length?H.createBadge.call(this,x):null};this.options.quality.sort((b,x)=>{let O=this.config.quality.options;return O.indexOf(b)>O.indexOf(x)?1:-1}).forEach(b=>{H.createMenuItem.call(this,{value:b,list:c,type:d,title:H.getLabel.call(this,"quality",b),badge:_(b)})}),H.updateSetting.call(this,d,c)},setCaptionsMenu(){if(!m.element(this.elements.settings.panels.captions))return;let r="captions",d=this.elements.settings.panels.captions.querySelector('[role="menu"]'),c=X.getTracks.call(this),p=!!c.length;if(H.toggleMenuButton.call(this,r,p),M(d),H.checkMenu.call(this),!p)return;let _=c.map((b,x)=>({value:x,checked:this.captions.toggled&&this.currentTrack===x,title:X.getLabel.call(this,b),badge:b.language&&H.createBadge.call(this,b.language.toUpperCase()),list:d,type:"language"}));_.unshift({value:-1,checked:!this.captions.toggled,title:$e.get("disabled",this.config),list:d,type:"language"}),_.forEach(H.createMenuItem.bind(this)),H.updateSetting.call(this,r,d)},setSpeedMenu(){if(!m.element(this.elements.settings.panels.speed))return;let r="speed",d=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter(p=>p>=this.minimumSpeed&&p<=this.maximumSpeed);let c=!m.empty(this.options.speed)&&this.options.speed.length>1;H.toggleMenuButton.call(this,r,c),M(d),H.checkMenu.call(this),c&&(this.options.speed.forEach(p=>{H.createMenuItem.call(this,{value:p,list:d,type:r,title:H.getLabel.call(this,"speed",p)})}),H.updateSetting.call(this,r,d))},checkMenu(){let{buttons:r}=this.elements.settings,d=!m.empty(r)&&Object.values(r).some(c=>!c.hidden);we(this.elements.settings.menu,!d)},focusFirstMenuItem(r,d=!1){if(this.elements.settings.popup.hidden)return;let c=r;m.element(c)||(c=Object.values(this.elements.settings.panels).find(_=>!_.hidden));let p=c.querySelector('[role^="menuitem"]');ze.call(this,p,d)},toggleMenu(r){let{popup:d}=this.elements.settings,c=this.elements.buttons.settings;if(!m.element(d)||!m.element(c))return;let{hidden:p}=d,_=p;if(m.boolean(r))_=r;else if(m.keyboardEvent(r)&&r.key==="Escape")_=!1;else if(m.event(r)){let b=m.function(r.composedPath)?r.composedPath()[0]:r.target,x=d.contains(b);if(x||!x&&r.target!==c&&_)return}c.setAttribute("aria-expanded",_),we(d,!_),Q(this.elements.container,this.config.classNames.menu.open,_),_&&m.keyboardEvent(r)?H.focusFirstMenuItem.call(this,null,!0):_||p||ze.call(this,c,m.keyboardEvent(r))},getMenuSize(r){let d=r.cloneNode(!0);d.style.position="absolute",d.style.opacity=0,d.removeAttribute("hidden"),r.parentNode.appendChild(d);let c=d.scrollWidth,p=d.scrollHeight;return _e(d),{width:c,height:p}},showMenuPanel(r="",d=!1){let c=this.elements.container.querySelector(`#plyr-settings-${this.id}-${r}`);if(!m.element(c))return;let p=c.parentNode,_=Array.from(p.children).find(b=>!b.hidden);if(ue.transitions&&!ue.reducedMotion){p.style.width=`${_.scrollWidth}px`,p.style.height=`${_.scrollHeight}px`;let b=H.getMenuSize.call(this,c),x=O=>{O.target===p&&["width","height"].includes(O.propertyName)&&(p.style.width="",p.style.height="",De.call(this,p,L,x))};K.call(this,p,L,x),p.style.width=`${b.width}px`,p.style.height=`${b.height}px`}we(_,!0),we(c,!1),H.focusFirstMenuItem.call(this,c,d)},setDownloadUrl(){let r=this.elements.buttons.download;m.element(r)&&r.setAttribute("href",this.download)},create(r){let{bindMenuItemShortcuts:d,createButton:c,createProgress:p,createRange:_,createTime:b,setQualityMenu:x,setSpeedMenu:O,showMenuPanel:N}=H;this.elements.controls=null,m.array(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(c.call(this,"play-large"));let B=V("div",Y(this.config.selectors.controls.wrapper));this.elements.controls=B;let Z={class:"plyr__controls__item"};return ee(m.array(this.config.controls)?this.config.controls:[]).forEach(pe=>{if(pe==="restart"&&B.appendChild(c.call(this,"restart",Z)),pe==="rewind"&&B.appendChild(c.call(this,"rewind",Z)),pe==="play"&&B.appendChild(c.call(this,"play",Z)),pe==="fast-forward"&&B.appendChild(c.call(this,"fast-forward",Z)),pe==="progress"){let j=V("div",{class:`${Z.class} plyr__progress__container`}),ge=V("div",Y(this.config.selectors.progress));if(ge.appendChild(_.call(this,"seek",{id:`plyr-seek-${r.id}`})),ge.appendChild(p.call(this,"buffer")),this.config.tooltips.seek){let Ie=V("span",{class:this.config.classNames.tooltip},"00:00");ge.appendChild(Ie),this.elements.display.seekTooltip=Ie}this.elements.progress=ge,j.appendChild(this.elements.progress),B.appendChild(j)}if(pe==="current-time"&&B.appendChild(b.call(this,"currentTime",Z)),pe==="duration"&&B.appendChild(b.call(this,"duration",Z)),pe==="mute"||pe==="volume"){let{volume:j}=this.elements;if(m.element(j)&&B.contains(j)||(j=V("div",U({},Z,{class:`${Z.class} plyr__volume`.trim()})),this.elements.volume=j,B.appendChild(j)),pe==="mute"&&j.appendChild(c.call(this,"mute")),pe==="volume"&&!z.isIos&&!z.isIPadOS){let ge={max:1,step:.05,value:this.config.volume};j.appendChild(_.call(this,"volume",U(ge,{id:`plyr-volume-${r.id}`})))}}if(pe==="captions"&&B.appendChild(c.call(this,"captions",Z)),pe==="settings"&&!m.empty(this.config.settings)){let j=V("div",U({},Z,{class:`${Z.class} plyr__menu`.trim(),hidden:""}));j.appendChild(c.call(this,"settings",{"aria-haspopup":!0,"aria-controls":`plyr-settings-${r.id}`,"aria-expanded":!1}));let ge=V("div",{class:"plyr__menu__container",id:`plyr-settings-${r.id}`,hidden:""}),Ie=V("div"),Re=V("div",{id:`plyr-settings-${r.id}-home`}),st=V("div",{role:"menu"});Re.appendChild(st),Ie.appendChild(Re),this.elements.settings.panels.home=Re,this.config.settings.forEach(Te=>{let rt=V("button",U(Y(this.config.selectors.buttons.settings),{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--forward`,role:"menuitem","aria-haspopup":!0,hidden:""}));d.call(this,rt,Te),K.call(this,rt,"click",()=>{N.call(this,Te,!1)});let te=V("span",null,$e.get(Te,this.config)),Pe=V("span",{class:this.config.classNames.menu.value});Pe.innerHTML=r[Te],te.appendChild(Pe),rt.appendChild(te),st.appendChild(rt);let gt=V("div",{id:`plyr-settings-${r.id}-${Te}`,hidden:""}),li=V("button",{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--back`});li.appendChild(V("span",{"aria-hidden":!0},$e.get(Te,this.config))),li.appendChild(V("span",{class:this.config.classNames.hidden},$e.get("menuBack",this.config))),K.call(this,gt,"keydown",xi=>{xi.key==="ArrowLeft"&&(xi.preventDefault(),xi.stopPropagation(),N.call(this,"home",!0))},!1),K.call(this,li,"click",()=>{N.call(this,"home",!1)}),gt.appendChild(li),gt.appendChild(V("div",{role:"menu"})),Ie.appendChild(gt),this.elements.settings.buttons[Te]=rt,this.elements.settings.panels[Te]=gt}),ge.appendChild(Ie),j.appendChild(ge),B.appendChild(j),this.elements.settings.popup=ge,this.elements.settings.menu=j}if(pe==="pip"&&ue.pip&&B.appendChild(c.call(this,"pip",Z)),pe==="airplay"&&ue.airplay&&B.appendChild(c.call(this,"airplay",Z)),pe==="download"){let j=U({},Z,{element:"a",href:this.download,target:"_blank"});this.isHTML5&&(j.download="");let{download:ge}=this.config.urls;!m.url(ge)&&this.isEmbed&&U(j,{icon:`logo-${this.provider}`,label:this.provider}),B.appendChild(c.call(this,"download",j))}pe==="fullscreen"&&B.appendChild(c.call(this,"fullscreen",Z))}),this.isHTML5&&x.call(this,vt.getQualityOptions.call(this)),O.call(this),B},inject(){if(this.config.loadSprite){let _=H.getIconUrl.call(this);_.cors&&Ii(_.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());let r=null;this.elements.controls=null;let d={id:this.id,seektime:this.config.seekTime,title:this.config.title},c=!0;m.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,d)),this.config.controls||(this.config.controls=[]),m.element(this.config.controls)||m.string(this.config.controls)?r=this.config.controls:(r=H.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:X.getLabel.call(this)}),c=!1);let p;if(c&&m.string(this.config.controls)&&(r=(_=>{let b=_;return Object.entries(d).forEach(([x,O])=>{b=He(b,`{${x}}`,O)}),b})(r)),m.string(this.config.selectors.controls.container)&&(p=document.querySelector(this.config.selectors.controls.container)),m.element(p)||(p=this.elements.container),p[m.element(r)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",r),m.element(this.elements.controls)||H.findElements.call(this),!m.empty(this.elements.buttons)){let _=b=>{let x=this.config.classNames.controlPressed;b.setAttribute("aria-pressed","false"),Object.defineProperty(b,"pressed",{configurable:!0,enumerable:!0,get:()=>oe(b,x),set(O=!1){Q(b,x,O),b.setAttribute("aria-pressed",O?"true":"false")}})};Object.values(this.elements.buttons).filter(Boolean).forEach(b=>{m.array(b)||m.nodeList(b)?Array.from(b).filter(Boolean).forEach(_):_(b)})}if(z.isEdge&&W(p),this.config.tooltips.controls){let{classNames:_,selectors:b}=this.config,x=`${b.controls.wrapper} ${b.labels} .${_.hidden}`,O=ve.call(this,x);Array.from(O).forEach(N=>{Q(N,this.config.classNames.hidden,!1),Q(N,this.config.classNames.tooltip,!0)})}},setMediaMetadata(){try{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:this.config.mediaMetadata.title,artist:this.config.mediaMetadata.artist,album:this.config.mediaMetadata.album,artwork:this.config.mediaMetadata.artwork}))}catch{}},setMarkers(){var r,d;if(!this.duration||this.elements.markers)return;let c=(r=this.config.markers)===null||r===void 0||(d=r.points)===null||d===void 0?void 0:d.filter(({time:N})=>N>0&&N<this.duration);if(c==null||!c.length)return;let p=document.createDocumentFragment(),_=document.createDocumentFragment(),b=null,x=`${this.config.classNames.tooltip}--visible`,O=N=>Q(b,x,N);c.forEach(N=>{let B=V("span",{class:this.config.classNames.marker},""),Z=N.time/this.duration*100+"%";b&&(B.addEventListener("mouseenter",()=>{N.label||(b.style.left=Z,b.innerHTML=N.label,O(!0))}),B.addEventListener("mouseleave",()=>{O(!1)})),B.addEventListener("click",()=>{this.currentTime=N.time}),B.style.left=Z,_.appendChild(B)}),p.appendChild(_),this.config.tooltips.seek||(b=V("span",{class:this.config.classNames.tooltip},""),p.appendChild(b)),this.elements.markers={points:_,tip:b},this.elements.progress.appendChild(p)}};function mi(r,d=!0){let c=r;if(d){let p=document.createElement("a");p.href=c,c=p.href}try{return new URL(c)}catch{return null}}function an(r){let d=new URLSearchParams;return m.object(r)&&Object.entries(r).forEach(([c,p])=>{d.set(c,p)}),d}let X={setup(){if(!this.supported.ui)return;if(!this.isVideo||this.isYouTube||this.isHTML5&&!ue.textTracks)return void(m.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&H.setCaptionsMenu.call(this));var r,d;if(m.element(this.elements.captions)||(this.elements.captions=V("div",Y(this.config.selectors.captions)),this.elements.captions.setAttribute("dir","auto"),r=this.elements.captions,d=this.elements.wrapper,m.element(r)&&m.element(d)&&d.parentNode.insertBefore(r,d.nextSibling)),z.isIE&&window.URL){let b=this.media.querySelectorAll("track");Array.from(b).forEach(x=>{let O=x.getAttribute("src"),N=mi(O);N!==null&&N.hostname!==window.location.href.hostname&&["http:","https:"].includes(N.protocol)&&be(O,"blob").then(B=>{x.setAttribute("src",window.URL.createObjectURL(B))}).catch(()=>{_e(x)})})}let c=ee((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(b=>b.split("-")[0])),p=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();p==="auto"&&([p]=c);let _=this.storage.get("captions");if(m.boolean(_)||({active:_}=this.config.captions),Object.assign(this.captions,{toggled:!1,active:_,language:p,languages:c}),this.isHTML5){let b=this.config.captions.update?"addtrack removetrack":"removetrack";K.call(this,this.media.textTracks,b,X.update.bind(this))}setTimeout(X.update.bind(this),0)},update(){let r=X.getTracks.call(this,!0),{active:d,language:c,meta:p,currentTrackNode:_}=this.captions,b=!!r.find(x=>x.language===c);this.isHTML5&&this.isVideo&&r.filter(x=>!p.get(x)).forEach(x=>{this.debug.log("Track added",x),p.set(x,{default:x.mode==="showing"}),x.mode==="showing"&&(x.mode="hidden"),K.call(this,x,"cuechange",()=>X.updateCues.call(this))}),(b&&this.language!==c||!r.includes(_))&&(X.setLanguage.call(this,c),X.toggle.call(this,d&&b)),this.elements&&Q(this.elements.container,this.config.classNames.captions.enabled,!m.empty(r)),m.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&H.setCaptionsMenu.call(this)},toggle(r,d=!0){if(!this.supported.ui)return;let{toggled:c}=this.captions,p=this.config.classNames.captions.active,_=m.nullOrUndefined(r)?!c:r;if(_!==c){if(d||(this.captions.active=_,this.storage.set({captions:_})),!this.language&&_&&!d){let b=X.getTracks.call(this),x=X.findTrack.call(this,[this.captions.language,...this.captions.languages],!0);return this.captions.language=x.language,void X.set.call(this,b.indexOf(x))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=_),Q(this.elements.container,p,_),this.captions.toggled=_,H.updateSetting.call(this,"captions"),E.call(this,this.media,_?"captionsenabled":"captionsdisabled")}setTimeout(()=>{_&&this.captions.toggled&&(this.captions.currentTrackNode.mode="hidden")})},set(r,d=!0){let c=X.getTracks.call(this);if(r!==-1)if(m.number(r))if(r in c){if(this.captions.currentTrack!==r){this.captions.currentTrack=r;let p=c[r],{language:_}=p||{};this.captions.currentTrackNode=p,H.updateSetting.call(this,"captions"),d||(this.captions.language=_,this.storage.set({language:_})),this.isVimeo&&this.embed.enableTextTrack(_),E.call(this,this.media,"languagechange")}X.toggle.call(this,!0,d),this.isHTML5&&this.isVideo&&X.updateCues.call(this)}else this.debug.warn("Track not found",r);else this.debug.warn("Invalid caption argument",r);else X.toggle.call(this,!1,d)},setLanguage(r,d=!0){if(!m.string(r))return void this.debug.warn("Invalid language argument",r);let c=r.toLowerCase();this.captions.language=c;let p=X.getTracks.call(this),_=X.findTrack.call(this,[c]);X.set.call(this,p.indexOf(_),d)},getTracks(r=!1){return Array.from((this.media||{}).textTracks||[]).filter(d=>!this.isHTML5||r||this.captions.meta.has(d)).filter(d=>["captions","subtitles"].includes(d.kind))},findTrack(r,d=!1){let c=X.getTracks.call(this),p=x=>Number((this.captions.meta.get(x)||{}).default),_=Array.from(c).sort((x,O)=>p(O)-p(x)),b;return r.every(x=>(b=_.find(O=>O.language===x),!b)),b||(d?_[0]:void 0)},getCurrentTrack(){return X.getTracks.call(this)[this.currentTrack]},getLabel(r){let d=r;return!m.track(d)&&ue.textTracks&&this.captions.toggled&&(d=X.getCurrentTrack.call(this)),m.track(d)?m.empty(d.label)?m.empty(d.language)?$e.get("enabled",this.config):r.language.toUpperCase():d.label:$e.get("disabled",this.config)},updateCues(r){if(!this.supported.ui)return;if(!m.element(this.elements.captions))return void this.debug.warn("No captions element to render to");if(!m.nullOrUndefined(r)&&!Array.isArray(r))return void this.debug.warn("updateCues: Invalid input",r);let d=r;if(!d){let p=X.getCurrentTrack.call(this);d=Array.from((p||{}).activeCues||[]).map(_=>_.getCueAsHTML()).map(on)}let c=d.map(p=>p.trim()).join(`
`);if(c!==this.elements.captions.innerHTML){M(this.elements.captions);let p=V("span",Y(this.config.selectors.caption));p.innerHTML=c,this.elements.captions.appendChild(p),E.call(this,this.media,"cuechange")}}},le={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.7.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",marker:"plyr__progress__marker",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1},mediaMetadata:{title:"",artist:"",album:"",artwork:[]},markers:{enabled:!1,points:[]}},Ae="picture-in-picture",G="inline",he={html5:"html5",youtube:"youtube",vimeo:"vimeo"},ae="audio",me="video",tt=()=>{};class Ee{constructor(d=!1){this.enabled=window.console&&d,this.enabled&&this.log("Debugging enabled")}get log(){return this.enabled?Function.prototype.bind.call(console.log,console):tt}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):tt}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):tt}}class Le{constructor(d){a(this,"onChange",()=>{if(!this.supported)return;let c=this.player.elements.buttons.fullscreen;m.element(c)&&(c.pressed=this.active);let p=this.target===this.player.media?this.target:this.player.elements.container;E.call(this.player,p,this.active?"enterfullscreen":"exitfullscreen",!0)}),a(this,"toggleFallback",(c=!1)=>{if(c?this.scrollPosition={x:window.scrollX??0,y:window.scrollY??0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=c?"hidden":"",Q(this.target,this.player.config.classNames.fullscreen.fallback,c),z.isIos){let p=document.head.querySelector('meta[name="viewport"]'),_="viewport-fit=cover";p||(p=document.createElement("meta"),p.setAttribute("name","viewport"));let b=m.string(p.content)&&p.content.includes(_);c?(this.cleanupViewport=!b,b||(p.content+=`,${_}`)):this.cleanupViewport&&(p.content=p.content.split(",").filter(x=>x.trim()!==_).join(","))}this.onChange()}),a(this,"trapFocus",c=>{if(z.isIos||z.isIPadOS||!this.active||c.key!=="Tab")return;let p=document.activeElement,_=ve.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),[b]=_,x=_[_.length-1];p!==x||c.shiftKey?p===b&&c.shiftKey&&(x.focus(),c.preventDefault()):(b.focus(),c.preventDefault())}),a(this,"update",()=>{if(this.supported){let c;c=this.forceFallback?"Fallback (forced)":Le.nativeSupported?"Native":"Fallback",this.player.debug.log(`${c} fullscreen enabled`)}else this.player.debug.log("Fullscreen not supported and fallback disabled");Q(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.supported)}),a(this,"enter",()=>{this.supported&&(z.isIos&&this.player.config.fullscreen.iosNative?this.player.isVimeo?this.player.embed.requestFullscreen():this.target.webkitEnterFullscreen():!Le.nativeSupported||this.forceFallback?this.toggleFallback(!0):this.prefix?m.empty(this.prefix)||this.target[`${this.prefix}Request${this.property}`]():this.target.requestFullscreen({navigationUI:"hide"}))}),a(this,"exit",()=>{if(this.supported)if(z.isIos&&this.player.config.fullscreen.iosNative)this.player.isVimeo?this.player.embed.exitFullscreen():this.target.webkitEnterFullscreen(),Ve(this.player.play());else if(!Le.nativeSupported||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!m.empty(this.prefix)){let c=this.prefix==="moz"?"Cancel":"Exit";document[`${this.prefix}${c}${this.property}`]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}),a(this,"toggle",()=>{this.active?this.exit():this.enter()}),this.player=d,this.prefix=Le.prefix,this.property=Le.property,this.scrollPosition={x:0,y:0},this.forceFallback=d.config.fullscreen.fallback==="force",this.player.elements.fullscreen=d.config.fullscreen.container&&function(c,p){let{prototype:_}=Element;return(_.closest||function(){let b=this;do{if(re.matches(b,p))return b;b=b.parentElement||b.parentNode}while(b!==null&&b.nodeType===1);return null}).call(c,p)}(this.player.elements.container,d.config.fullscreen.container),K.call(this.player,document,this.prefix==="ms"?"MSFullscreenChange":`${this.prefix}fullscreenchange`,()=>{this.onChange()}),K.call(this.player,this.player.elements.container,"dblclick",c=>{m.element(this.player.elements.controls)&&this.player.elements.controls.contains(c.target)||this.player.listeners.proxy(c,this.toggle,"fullscreen")}),K.call(this,this.player.elements.container,"keydown",c=>this.trapFocus(c)),this.update()}static get nativeSupported(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}get useNative(){return Le.nativeSupported&&!this.forceFallback}static get prefix(){if(m.function(document.exitFullscreen))return"";let d="";return["webkit","moz","ms"].some(c=>!(!m.function(document[`${c}ExitFullscreen`])&&!m.function(document[`${c}CancelFullScreen`]))&&(d=c,!0)),d}static get property(){return this.prefix==="moz"?"FullScreen":"Fullscreen"}get supported(){return[this.player.config.fullscreen.enabled,this.player.isVideo,Le.nativeSupported||this.player.config.fullscreen.fallback,!this.player.isYouTube||Le.nativeSupported||!z.isIos||this.player.config.playsinline&&!this.player.config.fullscreen.iosNative].every(Boolean)}get active(){if(!this.supported)return!1;if(!Le.nativeSupported||this.forceFallback)return oe(this.target,this.player.config.classNames.fullscreen.fallback);let d=this.prefix?this.target.getRootNode()[`${this.prefix}${this.property}Element`]:this.target.getRootNode().fullscreenElement;return d&&d.shadowRoot?d===this.target.getRootNode().host:d===this.target}get target(){return z.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.fullscreen??this.player.elements.container}}function ut(r,d=1){return new Promise((c,p)=>{let _=new Image,b=()=>{delete _.onload,delete _.onerror,(_.naturalWidth>=d?c:p)(_)};Object.assign(_,{onload:b,onerror:b,src:r})})}let de={addStyleHook(){Q(this.elements.container,this.config.selectors.container.replace(".",""),!0),Q(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls(r=!1){r&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build(){if(this.listeners.media(),!this.supported.ui)return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),void de.toggleNativeControls.call(this,!0);m.element(this.elements.controls)||(H.inject.call(this),this.listeners.controls()),de.toggleNativeControls.call(this),this.isHTML5&&X.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,H.updateVolume.call(this),H.timeUpdate.call(this),H.durationUpdate.call(this),de.checkPlaying.call(this),Q(this.elements.container,this.config.classNames.pip.supported,ue.pip&&this.isHTML5&&this.isVideo),Q(this.elements.container,this.config.classNames.airplay.supported,ue.airplay&&this.isHTML5),Q(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(()=>{E.call(this,this.media,"ready")},0),de.setTitle.call(this),this.poster&&de.setPoster.call(this,this.poster,!1).catch(()=>{}),this.config.duration&&H.durationUpdate.call(this),this.config.mediaMetadata&&H.setMediaMetadata.call(this)},setTitle(){let r=$e.get("play",this.config);if(m.string(this.config.title)&&!m.empty(this.config.title)&&(r+=`, ${this.config.title}`),Array.from(this.elements.buttons.play||[]).forEach(d=>{d.setAttribute("aria-label",r)}),this.isEmbed){let d=ce.call(this,"iframe");if(!m.element(d))return;let c=m.empty(this.config.title)?"video":this.config.title,p=$e.get("frameTitle",this.config);d.setAttribute("title",p.replace("{title}",c))}},togglePoster(r){Q(this.elements.container,this.config.classNames.posterEnabled,r)},setPoster(r,d=!0){return d&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",r),this.elements.poster.removeAttribute("hidden"),kt.call(this).then(()=>ut(r)).catch(c=>{throw r===this.poster&&de.togglePoster.call(this,!1),c}).then(()=>{if(r!==this.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(()=>(Object.assign(this.elements.poster.style,{backgroundImage:`url('${r}')`,backgroundSize:""}),de.togglePoster.call(this,!0),r)))},checkPlaying(r){Q(this.elements.container,this.config.classNames.playing,this.playing),Q(this.elements.container,this.config.classNames.paused,this.paused),Q(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(d=>{Object.assign(d,{pressed:this.playing}),d.setAttribute("aria-label",$e.get(this.playing?"pause":"play",this.config))}),m.event(r)&&r.type==="timeupdate"||de.toggleControls.call(this)},checkLoading(r){this.loading=["stalled","waiting"].includes(r.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(()=>{Q(this.elements.container,this.config.classNames.loading,this.loading),de.toggleControls.call(this)},this.loading?250:0)},toggleControls(r){let{controls:d}=this.elements;if(d&&this.config.hideControls){let c=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(!!(r||this.loading||this.paused||d.pressed||d.hover||c))}},migrateStyles(){Object.values({...this.media.style}).filter(r=>!m.empty(r)&&m.string(r)&&r.startsWith("--plyr")).forEach(r=>{this.elements.container.style.setProperty(r,this.media.style.getPropertyValue(r)),this.media.style.removeProperty(r)}),m.empty(this.media.style)&&this.media.removeAttribute("style")}};class je{constructor(d){a(this,"firstTouch",()=>{let{player:c}=this,{elements:p}=c;c.touch=!0,Q(p.container,c.config.classNames.isTouch,!0)}),a(this,"global",(c=!0)=>{let{player:p}=this;p.config.keyboard.global&&ie.call(p,window,"keydown keyup",this.handleKey,c,!1),ie.call(p,document.body,"click",this.toggleMenu,c),Ye.call(p,document.body,"touchstart",this.firstTouch)}),a(this,"container",()=>{let{player:c}=this,{config:p,elements:_,timers:b}=c;!p.keyboard.global&&p.keyboard.focused&&K.call(c,_.container,"keydown keyup",this.handleKey,!1),K.call(c,_.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",N=>{let{controls:B}=_;B&&N.type==="enterfullscreen"&&(B.pressed=!1,B.hover=!1);let Z=0;["touchstart","touchmove","mousemove"].includes(N.type)&&(de.toggleControls.call(c,!0),Z=c.touch?3e3:2e3),clearTimeout(b.controls),b.controls=setTimeout(()=>de.toggleControls.call(c,!1),Z)});let x=()=>{if(!c.isVimeo||c.config.vimeo.premium)return;let N=_.wrapper,{active:B}=c.fullscreen,[Z,pe]=We.call(c),j=Oi(`aspect-ratio: ${Z} / ${pe}`);if(!B)return void(j?(N.style.width=null,N.style.height=null):(N.style.maxWidth=null,N.style.margin=null));let[ge,Ie]=[Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)],Re=ge/Ie>Z/pe;j?(N.style.width=Re?"auto":"100%",N.style.height=Re?"100%":"auto"):(N.style.maxWidth=Re?Ie/pe*Z+"px":null,N.style.margin=Re?"0 auto":null)},O=()=>{clearTimeout(b.resized),b.resized=setTimeout(x,50)};K.call(c,_.container,"enterfullscreen exitfullscreen",N=>{let{target:B}=c.fullscreen;B===_.container&&(!c.isEmbed&&m.empty(c.config.ratio)||(x(),(N.type==="enterfullscreen"?K:De).call(c,window,"resize",O)))})}),a(this,"media",()=>{let{player:c}=this,{elements:p}=c;if(K.call(c,c.media,"timeupdate seeking seeked",b=>H.timeUpdate.call(c,b)),K.call(c,c.media,"durationchange loadeddata loadedmetadata",b=>H.durationUpdate.call(c,b)),K.call(c,c.media,"ended",()=>{c.isHTML5&&c.isVideo&&c.config.resetOnEnd&&(c.restart(),c.pause())}),K.call(c,c.media,"progress playing seeking seeked",b=>H.updateProgress.call(c,b)),K.call(c,c.media,"volumechange",b=>H.updateVolume.call(c,b)),K.call(c,c.media,"playing play pause ended emptied timeupdate",b=>de.checkPlaying.call(c,b)),K.call(c,c.media,"waiting canplay seeked playing",b=>de.checkLoading.call(c,b)),c.supported.ui&&c.config.clickToPlay&&!c.isAudio){let b=ce.call(c,`.${c.config.classNames.video}`);if(!m.element(b))return;K.call(c,p.container,"click",x=>{([p.container,b].includes(x.target)||b.contains(x.target))&&(c.touch&&c.config.hideControls||(c.ended?(this.proxy(x,c.restart,"restart"),this.proxy(x,()=>{Ve(c.play())},"play")):this.proxy(x,()=>{Ve(c.togglePlay())},"play")))})}c.supported.ui&&c.config.disableContextMenu&&K.call(c,p.wrapper,"contextmenu",b=>{b.preventDefault()},!1),K.call(c,c.media,"volumechange",()=>{c.storage.set({volume:c.volume,muted:c.muted})}),K.call(c,c.media,"ratechange",()=>{H.updateSetting.call(c,"speed"),c.storage.set({speed:c.speed})}),K.call(c,c.media,"qualitychange",b=>{H.updateSetting.call(c,"quality",null,b.detail.quality)}),K.call(c,c.media,"ready qualitychange",()=>{H.setDownloadUrl.call(c)});let _=c.config.events.concat(["keyup","keydown"]).join(" ");K.call(c,c.media,_,b=>{let{detail:x={}}=b;b.type==="error"&&(x=c.media.error),E.call(c,p.container,b.type,!0,x)})}),a(this,"proxy",(c,p,_)=>{let{player:b}=this,x=b.config.listeners[_],O=!0;m.function(x)&&(O=x.call(b,c)),O!==!1&&m.function(p)&&p.call(b,c)}),a(this,"bind",(c,p,_,b,x=!0)=>{let{player:O}=this,N=O.config.listeners[b],B=m.function(N);K.call(O,c,p,Z=>this.proxy(Z,_,b),x&&!B)}),a(this,"controls",()=>{let{player:c}=this,{elements:p}=c,_=z.isIE?"change":"input";if(p.buttons.play&&Array.from(p.buttons.play).forEach(b=>{this.bind(b,"click",()=>{Ve(c.togglePlay())},"play")}),this.bind(p.buttons.restart,"click",c.restart,"restart"),this.bind(p.buttons.rewind,"click",()=>{c.lastSeekTime=Date.now(),c.rewind()},"rewind"),this.bind(p.buttons.fastForward,"click",()=>{c.lastSeekTime=Date.now(),c.forward()},"fastForward"),this.bind(p.buttons.mute,"click",()=>{c.muted=!c.muted},"mute"),this.bind(p.buttons.captions,"click",()=>c.toggleCaptions()),this.bind(p.buttons.download,"click",()=>{E.call(c,c.media,"download")},"download"),this.bind(p.buttons.fullscreen,"click",()=>{c.fullscreen.toggle()},"fullscreen"),this.bind(p.buttons.pip,"click",()=>{c.pip="toggle"},"pip"),this.bind(p.buttons.airplay,"click",c.airplay,"airplay"),this.bind(p.buttons.settings,"click",b=>{b.stopPropagation(),b.preventDefault(),H.toggleMenu.call(c,b)},null,!1),this.bind(p.buttons.settings,"keyup",b=>{[" ","Enter"].includes(b.key)&&(b.key!=="Enter"?(b.preventDefault(),b.stopPropagation(),H.toggleMenu.call(c,b)):H.focusFirstMenuItem.call(c,null,!0))},null,!1),this.bind(p.settings.menu,"keydown",b=>{b.key==="Escape"&&H.toggleMenu.call(c,b)}),this.bind(p.inputs.seek,"mousedown mousemove",b=>{let x=p.progress.getBoundingClientRect(),O=100/x.width*(b.pageX-x.left);b.currentTarget.setAttribute("seek-value",O)}),this.bind(p.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",b=>{let x=b.currentTarget,O="play-on-seeked";if(m.keyboardEvent(b)&&!["ArrowLeft","ArrowRight"].includes(b.key))return;c.lastSeekTime=Date.now();let N=x.hasAttribute(O),B=["mouseup","touchend","keyup"].includes(b.type);N&&B?(x.removeAttribute(O),Ve(c.play())):!B&&c.playing&&(x.setAttribute(O,""),c.pause())}),z.isIos){let b=ve.call(c,'input[type="range"]');Array.from(b).forEach(x=>this.bind(x,_,O=>W(O.target)))}this.bind(p.inputs.seek,_,b=>{let x=b.currentTarget,O=x.getAttribute("seek-value");m.empty(O)&&(O=x.value),x.removeAttribute("seek-value"),c.currentTime=O/x.max*c.duration},"seek"),this.bind(p.progress,"mouseenter mouseleave mousemove",b=>H.updateSeekTooltip.call(c,b)),this.bind(p.progress,"mousemove touchmove",b=>{let{previewThumbnails:x}=c;x&&x.loaded&&x.startMove(b)}),this.bind(p.progress,"mouseleave touchend click",()=>{let{previewThumbnails:b}=c;b&&b.loaded&&b.endMove(!1,!0)}),this.bind(p.progress,"mousedown touchstart",b=>{let{previewThumbnails:x}=c;x&&x.loaded&&x.startScrubbing(b)}),this.bind(p.progress,"mouseup touchend",b=>{let{previewThumbnails:x}=c;x&&x.loaded&&x.endScrubbing(b)}),z.isWebKit&&Array.from(ve.call(c,'input[type="range"]')).forEach(b=>{this.bind(b,"input",x=>H.updateRangeFill.call(c,x.target))}),c.config.toggleInvert&&!m.element(p.display.duration)&&this.bind(p.display.currentTime,"click",()=>{c.currentTime!==0&&(c.config.invertTime=!c.config.invertTime,H.timeUpdate.call(c))}),this.bind(p.inputs.volume,_,b=>{c.volume=b.target.value},"volume"),this.bind(p.controls,"mouseenter mouseleave",b=>{p.controls.hover=!c.touch&&b.type==="mouseenter"}),p.fullscreen&&Array.from(p.fullscreen.children).filter(b=>!b.contains(p.container)).forEach(b=>{this.bind(b,"mouseenter mouseleave",x=>{p.controls&&(p.controls.hover=!c.touch&&x.type==="mouseenter")})}),this.bind(p.controls,"mousedown mouseup touchstart touchend touchcancel",b=>{p.controls.pressed=["mousedown","touchstart"].includes(b.type)}),this.bind(p.controls,"focusin",()=>{let{config:b,timers:x}=c;Q(p.controls,b.classNames.noTransition,!0),de.toggleControls.call(c,!0),setTimeout(()=>{Q(p.controls,b.classNames.noTransition,!1)},0);let O=this.touch?3e3:4e3;clearTimeout(x.controls),x.controls=setTimeout(()=>de.toggleControls.call(c,!1),O)}),this.bind(p.inputs.volume,"wheel",b=>{let x=b.webkitDirectionInvertedFromDevice,[O,N]=[b.deltaX,-b.deltaY].map(pe=>x?-pe:pe),B=Math.sign(Math.abs(O)>Math.abs(N)?O:N);c.increaseVolume(B/50);let{volume:Z}=c.media;(B===1&&Z<1||B===-1&&Z>0)&&b.preventDefault()},"volume",!1)}),this.player=d,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.firstTouch=this.firstTouch.bind(this)}handleKey(d){let{player:c}=this,{elements:p}=c,{key:_,type:b,altKey:x,ctrlKey:O,metaKey:N,shiftKey:B}=d,Z=b==="keydown",pe=Z&&_===this.lastKey;if(!(x||O||N||B)&&_){if(Z){let ge=document.activeElement;if(m.element(ge)){let{editable:Ie}=c.config.selectors,{seek:Re}=p.inputs;if(ge!==Re&&re(ge,Ie)||d.key===" "&&re(ge,'button, [role^="menuitem"]'))return}switch([" ","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","0","1","2","3","4","5","6","7","8","9","c","f","k","l","m"].includes(_)&&(d.preventDefault(),d.stopPropagation()),_){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":pe||(j=parseInt(_,10),c.currentTime=c.duration/10*j);break;case" ":case"k":pe||Ve(c.togglePlay());break;case"ArrowUp":c.increaseVolume(.1);break;case"ArrowDown":c.decreaseVolume(.1);break;case"m":pe||(c.muted=!c.muted);break;case"ArrowRight":c.forward();break;case"ArrowLeft":c.rewind();break;case"f":c.fullscreen.toggle();break;case"c":pe||c.toggleCaptions();break;case"l":c.loop=!c.loop}_==="Escape"&&!c.fullscreen.usingNative&&c.fullscreen.active&&c.fullscreen.toggle(),this.lastKey=_}else this.lastKey=null;var j}}toggleMenu(d){H.toggleMenu.call(this.player,d)}}typeof globalThis<"u"||typeof window<"u"||(typeof global<"u"?global:typeof self<"u");var Ne=function(r,d){return r(d={exports:{}},d.exports),d.exports}(function(r,d){r.exports=function(){var c=function(){},p={},_={},b={};function x(j,ge){j=j.push?j:[j];var Ie,Re,st,Te=[],rt=j.length,te=rt;for(Ie=function(Pe,gt){gt.length&&Te.push(Pe),--te||ge(Te)};rt--;)Re=j[rt],(st=_[Re])?Ie(Re,st):(b[Re]=b[Re]||[]).push(Ie)}function O(j,ge){if(j){var Ie=b[j];if(_[j]=ge,Ie)for(;Ie.length;)Ie[0](j,ge),Ie.splice(0,1)}}function N(j,ge){j.call&&(j={success:j}),ge.length?(j.error||c)(ge):(j.success||c)(j)}function B(j,ge,Ie,Re){var st,Te,rt=document,te=Ie.async,Pe=(Ie.numRetries||0)+1,gt=Ie.before||c,li=j.replace(/[\?|#].*$/,""),xi=j.replace(/^(css|img)!/,"");Re=Re||0,/(^css!|\.css$)/.test(li)?((Te=rt.createElement("link")).rel="stylesheet",Te.href=xi,(st="hideFocus"in Te)&&Te.relList&&(st=0,Te.rel="preload",Te.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(li)?(Te=rt.createElement("img")).src=xi:((Te=rt.createElement("script")).src=j,Te.async=te===void 0||te),Te.onload=Te.onerror=Te.onbeforeload=function(ji){var rr=ji.type[0];if(st)try{Te.sheet.cssText.length||(rr="e")}catch(Wu){Wu.code!=18&&(rr="e")}if(rr=="e"){if((Re+=1)<Pe)return B(j,ge,Ie,Re)}else if(Te.rel=="preload"&&Te.as=="style")return Te.rel="stylesheet";ge(j,rr,ji.defaultPrevented)},gt(j,Te)!==!1&&rt.head.appendChild(Te)}function Z(j,ge,Ie){var Re,st,Te=(j=j.push?j:[j]).length,rt=Te,te=[];for(Re=function(Pe,gt,li){if(gt=="e"&&te.push(Pe),gt=="b"){if(!li)return;te.push(Pe)}--Te||ge(te)},st=0;st<rt;st++)B(j[st],Re,Ie)}function pe(j,ge,Ie){var Re,st;if(ge&&ge.trim&&(Re=ge),st=(Re?Ie:ge)||{},Re){if(Re in p)throw"LoadJS";p[Re]=!0}function Te(rt,te){Z(j,function(Pe){N(st,Pe),rt&&N({success:rt,error:te},Pe),O(Re,Pe)},st)}if(st.returnPromise)return new Promise(Te);Te()}return pe.ready=function(j,ge){return x(j,function(Ie){N(ge,Ie)}),pe},pe.done=function(j){O(j,[])},pe.reset=function(){p={},_={},b={}},pe.isDefined=function(j){return j in p},pe}()});function Bt(r){return new Promise((d,c)=>{Ne(r,{success:d,error:c})})}function Fe(r){r&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===r&&(this.media.paused=!r,E.call(this,this.media,r?"play":"pause"))}let Ct={setup(){let r=this;Q(r.elements.wrapper,r.config.classNames.embed,!0),r.options.speed=r.config.speed.options,bt.call(r),m.object(window.Vimeo)?Ct.ready.call(r):Bt(r.config.urls.vimeo.sdk).then(()=>{Ct.ready.call(r)}).catch(d=>{r.debug.warn("Vimeo SDK (player.js) failed to load",d)})},ready(){let r=this,d=r.config.vimeo,{premium:c,referrerPolicy:p,..._}=d,b=r.media.getAttribute("src"),x="";m.empty(b)?(b=r.media.getAttribute(r.config.attributes.embed.id),x=r.media.getAttribute(r.config.attributes.embed.hash)):x=function(te){let Pe=te.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return Pe&&Pe.length===5?Pe[4]:null}(b);let O=x?{h:x}:{};c&&Object.assign(_,{controls:!1,sidedock:!1});let N=an({loop:r.config.loop.active,autoplay:r.autoplay,muted:r.muted,gesture:"media",playsinline:r.config.playsinline,...O,..._}),B=(Z=b,m.empty(Z)?null:m.number(Number(Z))?Z:Z.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:Z);var Z;let pe=V("iframe"),j=$i(r.config.urls.vimeo.iframe,B,N);if(pe.setAttribute("src",j),pe.setAttribute("allowfullscreen",""),pe.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),m.empty(p)||pe.setAttribute("referrerPolicy",p),c||!d.customControls)pe.setAttribute("data-poster",r.poster),r.media=fe(pe,r.media);else{let te=V("div",{class:r.config.classNames.embedContainer,"data-poster":r.poster});te.appendChild(pe),r.media=fe(te,r.media)}d.customControls||be($i(r.config.urls.vimeo.api,j)).then(te=>{!m.empty(te)&&te.thumbnail_url&&de.setPoster.call(r,te.thumbnail_url).catch(()=>{})}),r.embed=new window.Vimeo.Player(pe,{autopause:r.config.autopause,muted:r.muted}),r.media.paused=!0,r.media.currentTime=0,r.supported.ui&&r.embed.disableTextTrack(),r.media.play=()=>(Fe.call(r,!0),r.embed.play()),r.media.pause=()=>(Fe.call(r,!1),r.embed.pause()),r.media.stop=()=>{r.pause(),r.currentTime=0};let{currentTime:ge}=r.media;Object.defineProperty(r.media,"currentTime",{get:()=>ge,set(te){let{embed:Pe,media:gt,paused:li,volume:xi}=r,ji=li&&!Pe.hasPlayed;gt.seeking=!0,E.call(r,gt,"seeking"),Promise.resolve(ji&&Pe.setVolume(0)).then(()=>Pe.setCurrentTime(te)).then(()=>ji&&Pe.pause()).then(()=>ji&&Pe.setVolume(xi)).catch(()=>{})}});let Ie=r.config.speed.selected;Object.defineProperty(r.media,"playbackRate",{get:()=>Ie,set(te){r.embed.setPlaybackRate(te).then(()=>{Ie=te,E.call(r,r.media,"ratechange")}).catch(()=>{r.options.speed=[1]})}});let{volume:Re}=r.config;Object.defineProperty(r.media,"volume",{get:()=>Re,set(te){r.embed.setVolume(te).then(()=>{Re=te,E.call(r,r.media,"volumechange")})}});let{muted:st}=r.config;Object.defineProperty(r.media,"muted",{get:()=>st,set(te){let Pe=!!m.boolean(te)&&te;r.embed.setMuted(!!Pe||r.config.muted).then(()=>{st=Pe,E.call(r,r.media,"volumechange")})}});let Te,{loop:rt}=r.config;Object.defineProperty(r.media,"loop",{get:()=>rt,set(te){let Pe=m.boolean(te)?te:r.config.loop.active;r.embed.setLoop(Pe).then(()=>{rt=Pe})}}),r.embed.getVideoUrl().then(te=>{Te=te,H.setDownloadUrl.call(r)}).catch(te=>{this.debug.warn(te)}),Object.defineProperty(r.media,"currentSrc",{get:()=>Te}),Object.defineProperty(r.media,"ended",{get:()=>r.currentTime===r.duration}),Promise.all([r.embed.getVideoWidth(),r.embed.getVideoHeight()]).then(te=>{let[Pe,gt]=te;r.embed.ratio=zt(Pe,gt),bt.call(this)}),r.embed.setAutopause(r.config.autopause).then(te=>{r.config.autopause=te}),r.embed.getVideoTitle().then(te=>{r.config.title=te,de.setTitle.call(this)}),r.embed.getCurrentTime().then(te=>{ge=te,E.call(r,r.media,"timeupdate")}),r.embed.getDuration().then(te=>{r.media.duration=te,E.call(r,r.media,"durationchange")}),r.embed.getTextTracks().then(te=>{r.media.textTracks=te,X.setup.call(r)}),r.embed.on("cuechange",({cues:te=[]})=>{let Pe=te.map(gt=>function(li){let xi=document.createDocumentFragment(),ji=document.createElement("div");return xi.appendChild(ji),ji.innerHTML=li,xi.firstChild.innerText}(gt.text));X.updateCues.call(r,Pe)}),r.embed.on("loaded",()=>{r.embed.getPaused().then(te=>{Fe.call(r,!te),te||E.call(r,r.media,"playing")}),m.element(r.embed.element)&&r.supported.ui&&r.embed.element.setAttribute("tabindex",-1)}),r.embed.on("bufferstart",()=>{E.call(r,r.media,"waiting")}),r.embed.on("bufferend",()=>{E.call(r,r.media,"playing")}),r.embed.on("play",()=>{Fe.call(r,!0),E.call(r,r.media,"playing")}),r.embed.on("pause",()=>{Fe.call(r,!1)}),r.embed.on("timeupdate",te=>{r.media.seeking=!1,ge=te.seconds,E.call(r,r.media,"timeupdate")}),r.embed.on("progress",te=>{r.media.buffered=te.percent,E.call(r,r.media,"progress"),parseInt(te.percent,10)===1&&E.call(r,r.media,"canplaythrough"),r.embed.getDuration().then(Pe=>{Pe!==r.media.duration&&(r.media.duration=Pe,E.call(r,r.media,"durationchange"))})}),r.embed.on("seeked",()=>{r.media.seeking=!1,E.call(r,r.media,"seeked")}),r.embed.on("ended",()=>{r.media.paused=!0,E.call(r,r.media,"ended")}),r.embed.on("error",te=>{r.media.error=te,E.call(r,r.media,"error")}),d.customControls&&setTimeout(()=>de.build.call(r),0)}};function Ot(r){r&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===r&&(this.media.paused=!r,E.call(this,this.media,r?"play":"pause"))}function ft(r){return r.noCookie?"https://www.youtube-nocookie.com":window.location.protocol==="http:"?"http://www.youtube.com":void 0}let it={setup(){if(Q(this.elements.wrapper,this.config.classNames.embed,!0),m.object(window.YT)&&m.function(window.YT.Player))it.ready.call(this);else{let r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{m.function(r)&&r(),it.ready.call(this)},Bt(this.config.urls.youtube.sdk).catch(d=>{this.debug.warn("YouTube API failed to load",d)})}},getTitle(r){be($i(this.config.urls.youtube.api,r)).then(d=>{if(m.object(d)){let{title:c,height:p,width:_}=d;this.config.title=c,de.setTitle.call(this),this.embed.ratio=zt(_,p)}bt.call(this)}).catch(()=>{bt.call(this)})},ready(){let r=this,d=r.config.youtube,c=r.media&&r.media.getAttribute("id");if(!m.empty(c)&&c.startsWith("youtube-"))return;let p=r.media.getAttribute("src");m.empty(p)&&(p=r.media.getAttribute(this.config.attributes.embed.id));let _=(b=p,m.empty(b)?null:b.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:b);var b;let x=V("div",{id:`${r.provider}-${Math.floor(1e4*Math.random())}`,"data-poster":d.customControls?r.poster:void 0});if(r.media=fe(x,r.media),d.customControls){let O=N=>`https://i.ytimg.com/vi/${_}/${N}default.jpg`;ut(O("maxres"),121).catch(()=>ut(O("sd"),121)).catch(()=>ut(O("hq"))).then(N=>de.setPoster.call(r,N.src)).then(N=>{N.includes("maxres")||(r.elements.poster.style.backgroundSize="cover")}).catch(()=>{})}r.embed=new window.YT.Player(r.media,{videoId:_,host:ft(d),playerVars:U({},{autoplay:r.config.autoplay?1:0,hl:r.config.hl,controls:r.supported.ui&&d.customControls?0:1,disablekb:1,playsinline:r.config.playsinline&&!r.config.fullscreen.iosNative?1:0,cc_load_policy:r.captions.active?1:0,cc_lang_pref:r.config.captions.language,widget_referrer:window?window.location.href:null},d),events:{onError(O){if(!r.media.error){let N=O.data,B={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[N]||"An unknown error occurred";r.media.error={code:N,message:B},E.call(r,r.media,"error")}},onPlaybackRateChange(O){let N=O.target;r.media.playbackRate=N.getPlaybackRate(),E.call(r,r.media,"ratechange")},onReady(O){if(m.function(r.media.play))return;let N=O.target;it.getTitle.call(r,_),r.media.play=()=>{Ot.call(r,!0),N.playVideo()},r.media.pause=()=>{Ot.call(r,!1),N.pauseVideo()},r.media.stop=()=>{N.stopVideo()},r.media.duration=N.getDuration(),r.media.paused=!0,r.media.currentTime=0,Object.defineProperty(r.media,"currentTime",{get:()=>Number(N.getCurrentTime()),set(j){r.paused&&!r.embed.hasPlayed&&r.embed.mute(),r.media.seeking=!0,E.call(r,r.media,"seeking"),N.seekTo(j)}}),Object.defineProperty(r.media,"playbackRate",{get:()=>N.getPlaybackRate(),set(j){N.setPlaybackRate(j)}});let{volume:B}=r.config;Object.defineProperty(r.media,"volume",{get:()=>B,set(j){B=j,N.setVolume(100*B),E.call(r,r.media,"volumechange")}});let{muted:Z}=r.config;Object.defineProperty(r.media,"muted",{get:()=>Z,set(j){let ge=m.boolean(j)?j:Z;Z=ge,N[ge?"mute":"unMute"](),N.setVolume(100*B),E.call(r,r.media,"volumechange")}}),Object.defineProperty(r.media,"currentSrc",{get:()=>N.getVideoUrl()}),Object.defineProperty(r.media,"ended",{get:()=>r.currentTime===r.duration});let pe=N.getAvailablePlaybackRates();r.options.speed=pe.filter(j=>r.config.speed.options.includes(j)),r.supported.ui&&d.customControls&&r.media.setAttribute("tabindex",-1),E.call(r,r.media,"timeupdate"),E.call(r,r.media,"durationchange"),clearInterval(r.timers.buffering),r.timers.buffering=setInterval(()=>{r.media.buffered=N.getVideoLoadedFraction(),(r.media.lastBuffered===null||r.media.lastBuffered<r.media.buffered)&&E.call(r,r.media,"progress"),r.media.lastBuffered=r.media.buffered,r.media.buffered===1&&(clearInterval(r.timers.buffering),E.call(r,r.media,"canplaythrough"))},200),d.customControls&&setTimeout(()=>de.build.call(r),50)},onStateChange(O){let N=O.target;switch(clearInterval(r.timers.playing),r.media.seeking&&[1,2].includes(O.data)&&(r.media.seeking=!1,E.call(r,r.media,"seeked")),O.data){case-1:E.call(r,r.media,"timeupdate"),r.media.buffered=N.getVideoLoadedFraction(),E.call(r,r.media,"progress");break;case 0:Ot.call(r,!1),r.media.loop?(N.stopVideo(),N.playVideo()):E.call(r,r.media,"ended");break;case 1:d.customControls&&!r.config.autoplay&&r.media.paused&&!r.embed.hasPlayed?r.media.pause():(Ot.call(r,!0),E.call(r,r.media,"playing"),r.timers.playing=setInterval(()=>{E.call(r,r.media,"timeupdate")},50),r.media.duration!==N.getDuration()&&(r.media.duration=N.getDuration(),E.call(r,r.media,"durationchange")));break;case 2:r.muted||r.embed.unMute(),Ot.call(r,!1);break;case 3:E.call(r,r.media,"waiting")}E.call(r,r.elements.container,"statechange",!1,{code:O.data})}}})}},mt={setup(){this.media?(Q(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),Q(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&Q(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=V("div",{class:this.config.classNames.video}),q(this.media,this.elements.wrapper),this.elements.poster=V("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?vt.setup.call(this):this.isYouTube?it.setup.call(this):this.isVimeo&&Ct.setup.call(this)):this.debug.warn("No media element found!")}};class Hi{constructor(d){a(this,"load",()=>{this.enabled&&(m.object(window.google)&&m.object(window.google.ima)?this.ready():Bt(this.player.config.urls.googleIMA.sdk).then(()=>{this.ready()}).catch(()=>{this.trigger("error",new Error("Google IMA SDK failed to load"))}))}),a(this,"ready",()=>{var c;this.enabled||((c=this).manager&&c.manager.destroy(),c.elements.displayContainer&&c.elements.displayContainer.destroy(),c.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(()=>{this.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}),a(this,"setupIMA",()=>{this.elements.container=V("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,c=>this.onAdsManagerLoaded(c),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,c=>this.onAdError(c),!1),this.requestAds()}),a(this,"requestAds",()=>{let{container:c}=this.player.elements;try{let p=new google.ima.AdsRequest;p.adTagUrl=this.tagUrl,p.linearAdSlotWidth=c.offsetWidth,p.linearAdSlotHeight=c.offsetHeight,p.nonLinearAdSlotWidth=c.offsetWidth,p.nonLinearAdSlotHeight=c.offsetHeight,p.forceNonLinearFullSlot=!1,p.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(p)}catch(p){this.onAdError(p)}}),a(this,"pollCountdown",(c=!1)=>{if(!c)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(()=>{let p=fi(Math.max(this.manager.getRemainingTime(),0)),_=`${$e.get("advertisement",this.player.config)} - ${p}`;this.elements.container.setAttribute("data-badge-text",_)},100)}),a(this,"onAdsManagerLoaded",c=>{if(!this.enabled)return;let p=new google.ima.AdsRenderingSettings;p.restoreCustomPlaybackStateOnAdBreakComplete=!0,p.enablePreloading=!0,this.manager=c.getAdsManager(this.player,p),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,_=>this.onAdError(_)),Object.keys(google.ima.AdEvent.Type).forEach(_=>{this.manager.addEventListener(google.ima.AdEvent.Type[_],b=>this.onAdEvent(b))}),this.trigger("loaded")}),a(this,"addCuePoints",()=>{m.empty(this.cuePoints)||this.cuePoints.forEach(c=>{if(c!==0&&c!==-1&&c<this.player.duration){let p=this.player.elements.progress;if(m.element(p)){let _=100/this.player.duration*c,b=V("span",{class:this.player.config.classNames.cues});b.style.left=`${_.toString()}%`,p.appendChild(b)}}})}),a(this,"onAdEvent",c=>{let{container:p}=this.player.elements,_=c.getAd(),b=c.getAdData();switch((x=>{E.call(this.player,this.player.media,`ads${x.replace(/_/g,"").toLowerCase()}`)})(c.type),c.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),_.isLinear()||(_.width=p.offsetWidth,_.height=p.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.player.ended?this.loadAds():this.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:b.adError&&this.player.debug.warn(`Non-fatal ad error: ${b.adError.getMessage()}`)}}),a(this,"onAdError",c=>{this.cancel(),this.player.debug.warn("Ads error",c)}),a(this,"listeners",()=>{let{container:c}=this.player.elements,p;this.player.on("canplay",()=>{this.addCuePoints()}),this.player.on("ended",()=>{this.loader.contentComplete()}),this.player.on("timeupdate",()=>{p=this.player.currentTime}),this.player.on("seeked",()=>{let _=this.player.currentTime;m.empty(this.cuePoints)||this.cuePoints.forEach((b,x)=>{p<b&&b<_&&(this.manager.discardAdBreak(),this.cuePoints.splice(x,1))})}),window.addEventListener("resize",()=>{this.manager&&this.manager.resize(c.offsetWidth,c.offsetHeight,google.ima.ViewMode.NORMAL)})}),a(this,"play",()=>{let{container:c}=this.player.elements;this.managerPromise||this.resumeContent(),this.managerPromise.then(()=>{this.manager.setVolume(this.player.volume),this.elements.displayContainer.initialize();try{this.initialized||(this.manager.init(c.offsetWidth,c.offsetHeight,google.ima.ViewMode.NORMAL),this.manager.start()),this.initialized=!0}catch(p){this.onAdError(p)}}).catch(()=>{})}),a(this,"resumeContent",()=>{this.elements.container.style.zIndex="",this.playing=!1,Ve(this.player.media.play())}),a(this,"pauseContent",()=>{this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}),a(this,"cancel",()=>{this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}),a(this,"loadAds",()=>{this.managerPromise.then(()=>{this.manager&&this.manager.destroy(),this.managerPromise=new Promise(c=>{this.on("loaded",c),this.player.debug.log(this.manager)}),this.initialized=!1,this.requestAds()}).catch(()=>{})}),a(this,"trigger",(c,...p)=>{let _=this.events[c];m.array(_)&&_.forEach(b=>{m.function(b)&&b.apply(this,p)})}),a(this,"on",(c,p)=>(m.array(this.events[c])||(this.events[c]=[]),this.events[c].push(p),this)),a(this,"startSafetyTimer",(c,p)=>{this.player.debug.log(`Safety timer invoked from: ${p}`),this.safetyTimer=setTimeout(()=>{this.cancel(),this.clearSafetyTimer("startSafetyTimer()")},c)}),a(this,"clearSafetyTimer",c=>{m.nullOrUndefined(this.safetyTimer)||(this.player.debug.log(`Safety timer cleared from: ${c}`),clearTimeout(this.safetyTimer),this.safetyTimer=null)}),this.player=d,this.config=d.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((c,p)=>{this.on("loaded",c),this.on("error",p)}),this.load()}get enabled(){let{config:d}=this;return this.player.isHTML5&&this.player.isVideo&&d.enabled&&(!m.empty(d.publisherId)||m.url(d.tagUrl))}get tagUrl(){let{config:d}=this;return m.url(d.tagUrl)?d.tagUrl:`https://go.aniview.com/api/adserver6/vast/?${an({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:d.publisherId})}`}}function kn(r=0,d=0,c=255){return Math.min(Math.max(r,d),c)}let wt=r=>{let d=[];return r.split(/\r\n\r\n|\n\n|\r\r/).forEach(c=>{let p={};c.split(/\r\n|\n|\r/).forEach(_=>{if(m.number(p.startTime)){if(!m.empty(_.trim())&&m.empty(p.text)){let b=_.trim().split("#xywh=");[p.text]=b,b[1]&&([p.x,p.y,p.w,p.h]=b[1].split(","))}}else{let b=_.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);b&&(p.startTime=60*Number(b[1]||0)*60+60*Number(b[2])+Number(b[3])+ +`0.${b[4]}`,p.endTime=60*Number(b[6]||0)*60+60*Number(b[7])+Number(b[8])+ +`0.${b[9]}`)}}),p.text&&d.push(p)}),d},nt=(r,d)=>{let c={};return r>d.width/d.height?(c.width=d.width,c.height=1/r*d.width):(c.height=d.height,c.width=r*d.height),c};class Qt{constructor(d){a(this,"load",()=>{this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(()=>{this.enabled&&(this.render(),this.determineContainerAutoSizing(),this.listeners(),this.loaded=!0)})}),a(this,"getThumbnails",()=>new Promise(c=>{let{src:p}=this.player.config.previewThumbnails;if(m.empty(p))throw new Error("Missing previewThumbnails.src config attribute");let _=()=>{this.thumbnails.sort((b,x)=>b.height-x.height),this.player.debug.log("Preview thumbnails",this.thumbnails),c()};if(m.function(p))p(b=>{this.thumbnails=b,_()});else{let b=(m.string(p)?[p]:p).map(x=>this.getThumbnail(x));Promise.all(b).then(_)}})),a(this,"getThumbnail",c=>new Promise(p=>{be(c).then(_=>{let b={frames:wt(_),height:null,urlPrefix:""};b.frames[0].text.startsWith("/")||b.frames[0].text.startsWith("http://")||b.frames[0].text.startsWith("https://")||(b.urlPrefix=c.substring(0,c.lastIndexOf("/")+1));let x=new Image;x.onload=()=>{b.height=x.naturalHeight,b.width=x.naturalWidth,this.thumbnails.push(b),p()},x.src=b.urlPrefix+b.frames[0].text})})),a(this,"startMove",c=>{if(this.loaded&&m.event(c)&&["touchmove","mousemove"].includes(c.type)&&this.player.media.duration){if(c.type==="touchmove")this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var p,_;let b=this.player.elements.progress.getBoundingClientRect(),x=100/b.width*(c.pageX-b.left);this.seekTime=this.player.media.duration*(x/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=c.pageX,this.elements.thumb.time.innerText=fi(this.seekTime);let O=(p=this.player.config.markers)===null||p===void 0||(_=p.points)===null||_===void 0?void 0:_.find(({time:N})=>N===Math.round(this.seekTime));O&&this.elements.thumb.time.insertAdjacentHTML("afterbegin",`${O.label}<br>`)}this.showImageAtCurrentTime()}}),a(this,"endMove",()=>{this.toggleThumbContainer(!1,!0)}),a(this,"startScrubbing",c=>{(m.nullOrUndefined(c.button)||c.button===!1||c.button===0)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}),a(this,"endScrubbing",()=>{this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Ye.call(this.player,this.player.media,"timeupdate",()=>{this.mouseDown||this.toggleScrubbingContainer(!1)})}),a(this,"listeners",()=>{this.player.on("play",()=>{this.toggleThumbContainer(!1,!0)}),this.player.on("seeked",()=>{this.toggleThumbContainer(!1)}),this.player.on("timeupdate",()=>{this.lastTime=this.player.media.currentTime})}),a(this,"render",()=>{this.elements.thumb.container=V("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=V("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);let c=V("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=V("span",{},"00:00"),c.appendChild(this.elements.thumb.time),this.elements.thumb.imageContainer.appendChild(c),m.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=V("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}),a(this,"destroy",()=>{this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()}),a(this,"showImageAtCurrentTime",()=>{this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();let c=this.thumbnails[0].frames.findIndex(b=>this.seekTime>=b.startTime&&this.seekTime<=b.endTime),p=c>=0,_=0;this.mouseDown||this.toggleThumbContainer(p),p&&(this.thumbnails.forEach((b,x)=>{this.loadedImages.includes(b.frames[c].text)&&(_=x)}),c!==this.showingThumb&&(this.showingThumb=c,this.loadImage(_)))}),a(this,"loadImage",(c=0)=>{let p=this.showingThumb,_=this.thumbnails[c],{urlPrefix:b}=_,x=_.frames[p],O=_.frames[p].text,N=b+O;if(this.currentImageElement&&this.currentImageElement.dataset.filename===O)this.showImage(this.currentImageElement,x,c,p,O,!1),this.currentImageElement.dataset.index=p,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);let B=new Image;B.src=N,B.dataset.index=p,B.dataset.filename=O,this.showingThumbFilename=O,this.player.debug.log(`Loading image: ${N}`),B.onload=()=>this.showImage(B,x,c,p,O,!0),this.loadingImage=B,this.removeOldImages(B)}}),a(this,"showImage",(c,p,_,b,x,O=!0)=>{this.player.debug.log(`Showing thumb: ${x}. num: ${b}. qual: ${_}. newimg: ${O}`),this.setImageSizeAndOffset(c,p),O&&(this.currentImageContainer.appendChild(c),this.currentImageElement=c,this.loadedImages.includes(x)||this.loadedImages.push(x)),this.preloadNearby(b,!0).then(this.preloadNearby(b,!1)).then(this.getHigherQuality(_,c,p,x))}),a(this,"removeOldImages",c=>{Array.from(this.currentImageContainer.children).forEach(p=>{if(p.tagName.toLowerCase()!=="img")return;let _=this.usingSprites?500:1e3;if(p.dataset.index!==c.dataset.index&&!p.dataset.deleting){p.dataset.deleting=!0;let{currentImageContainer:b}=this;setTimeout(()=>{b.removeChild(p),this.player.debug.log(`Removing thumb: ${p.dataset.filename}`)},_)}})}),a(this,"preloadNearby",(c,p=!0)=>new Promise(_=>{setTimeout(()=>{let b=this.thumbnails[0].frames[c].text;if(this.showingThumbFilename===b){let x;x=p?this.thumbnails[0].frames.slice(c):this.thumbnails[0].frames.slice(0,c).reverse();let O=!1;x.forEach(N=>{let B=N.text;if(B!==b&&!this.loadedImages.includes(B)){O=!0,this.player.debug.log(`Preloading thumb filename: ${B}`);let{urlPrefix:Z}=this.thumbnails[0],pe=Z+B,j=new Image;j.src=pe,j.onload=()=>{this.player.debug.log(`Preloaded thumb filename: ${B}`),this.loadedImages.includes(B)||this.loadedImages.push(B),_()}}}),O||_()}},300)})),a(this,"getHigherQuality",(c,p,_,b)=>{if(c<this.thumbnails.length-1){let x=p.naturalHeight;this.usingSprites&&(x=_.h),x<this.thumbContainerHeight&&setTimeout(()=>{this.showingThumbFilename===b&&(this.player.debug.log(`Showing higher quality thumb for: ${b}`),this.loadImage(c+1))},300)}}),a(this,"toggleThumbContainer",(c=!1,p=!1)=>{let _=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(_,c),!c&&p&&(this.showingThumb=null,this.showingThumbFilename=null)}),a(this,"toggleScrubbingContainer",(c=!1)=>{let p=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(p,c),c||(this.showingThumb=null,this.showingThumbFilename=null)}),a(this,"determineContainerAutoSizing",()=>{(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)}),a(this,"setThumbContainerSizeAndPos",()=>{let{imageContainer:c}=this.elements.thumb;if(this.sizeSpecifiedInCSS){if(c.clientHeight>20&&c.clientWidth<20){let p=Math.floor(c.clientHeight*this.thumbAspectRatio);c.style.width=`${p}px`}else if(c.clientHeight<20&&c.clientWidth>20){let p=Math.floor(c.clientWidth/this.thumbAspectRatio);c.style.height=`${p}px`}}else{let p=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);c.style.height=`${this.thumbContainerHeight}px`,c.style.width=`${p}px`}this.setThumbContainerPos()}),a(this,"setThumbContainerPos",()=>{let c=this.player.elements.progress.getBoundingClientRect(),p=this.player.elements.container.getBoundingClientRect(),{container:_}=this.elements.thumb,b=p.left-c.left+10,x=p.right-c.left-_.clientWidth-10,O=this.mousePosX-c.left-_.clientWidth/2,N=kn(O,b,x);_.style.left=`${N}px`,_.style.setProperty("--preview-arrow-offset",O-N+"px")}),a(this,"setScrubbingContainerSize",()=>{let{width:c,height:p}=nt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});this.elements.scrubbing.container.style.width=`${c}px`,this.elements.scrubbing.container.style.height=`${p}px`}),a(this,"setImageSizeAndOffset",(c,p)=>{if(!this.usingSprites)return;let _=this.thumbContainerHeight/p.h;c.style.height=c.naturalHeight*_+"px",c.style.width=c.naturalWidth*_+"px",c.style.left=`-${p.x*_}px`,c.style.top=`-${p.y*_}px`}),this.player=d,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}get enabled(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}get currentImageContainer(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}get usingSprites(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}get thumbAspectRatio(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}get thumbContainerHeight(){if(this.mouseDown){let{height:d}=nt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});return d}return this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}get currentImageElement(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement}set currentImageElement(d){this.mouseDown?this.currentScrubbingImageElement=d:this.currentThumbnailImageElement=d}}let Cn={insertElements(r,d){m.string(d)?ye(r,this.media,{src:d}):m.array(d)&&d.forEach(c=>{ye(r,this.media,c)})},change(r){ne(r,"sources.length")?(vt.cancelRequests.call(this),this.destroy.call(this,()=>{this.options.quality=[],_e(this.media),this.media=null,m.element(this.elements.container)&&this.elements.container.removeAttribute("class");let{sources:d,type:c}=r,[{provider:p=he.html5,src:_}]=d,b=p==="html5"?c:"div",x=p==="html5"?{}:{src:_};Object.assign(this,{provider:p,type:c,supported:ue.check(c,p,this.config.playsinline),media:V(b,x)}),this.elements.container.appendChild(this.media),m.boolean(r.autoplay)&&(this.config.autoplay=r.autoplay),this.isHTML5&&(this.config.crossorigin&&this.media.setAttribute("crossorigin",""),this.config.autoplay&&this.media.setAttribute("autoplay",""),m.empty(r.poster)||(this.poster=r.poster),this.config.loop.active&&this.media.setAttribute("loop",""),this.config.muted&&this.media.setAttribute("muted",""),this.config.playsinline&&this.media.setAttribute("playsinline","")),de.addStyleHook.call(this),this.isHTML5&&Cn.insertElements.call(this,"source",d),this.config.title=r.title,mt.setup.call(this),this.isHTML5&&Object.keys(r).includes("tracks")&&Cn.insertElements.call(this,"track",r.tracks),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&de.build.call(this),this.isHTML5&&this.media.load(),m.empty(r.previewThumbnails)||(Object.assign(this.config.previewThumbnails,r.previewThumbnails),this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Qt(this))),this.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};class ln{constructor(d,c){if(a(this,"play",()=>m.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>Ve(this.media.play())),this.media.play()):null),a(this,"pause",()=>this.playing&&m.function(this.media.pause)?this.media.pause():null),a(this,"togglePlay",O=>(m.boolean(O)?O:!this.playing)?this.play():this.pause()),a(this,"stop",()=>{this.isHTML5?(this.pause(),this.restart()):m.function(this.media.stop)&&this.media.stop()}),a(this,"restart",()=>{this.currentTime=0}),a(this,"rewind",O=>{this.currentTime-=m.number(O)?O:this.config.seekTime}),a(this,"forward",O=>{this.currentTime+=m.number(O)?O:this.config.seekTime}),a(this,"increaseVolume",O=>{let N=this.media.muted?0:this.volume;this.volume=N+(m.number(O)?O:0)}),a(this,"decreaseVolume",O=>{this.increaseVolume(-O)}),a(this,"airplay",()=>{ue.airplay&&this.media.webkitShowPlaybackTargetPicker()}),a(this,"toggleControls",O=>{if(this.supported.ui&&!this.isAudio){let N=oe(this.elements.container,this.config.classNames.hideControls),B=O===void 0?void 0:!O,Z=Q(this.elements.container,this.config.classNames.hideControls,B);if(Z&&m.array(this.config.controls)&&this.config.controls.includes("settings")&&!m.empty(this.config.settings)&&H.toggleMenu.call(this,!1),Z!==N){let pe=Z?"controlshidden":"controlsshown";E.call(this,this.media,pe)}return!Z}return!1}),a(this,"on",(O,N)=>{K.call(this,this.elements.container,O,N)}),a(this,"once",(O,N)=>{Ye.call(this,this.elements.container,O,N)}),a(this,"off",(O,N)=>{De(this.elements.container,O,N)}),a(this,"destroy",(O,N=!1)=>{if(!this.ready)return;let B=()=>{document.body.style.overflow="",this.embed=null,N?(Object.keys(this.elements).length&&(_e(this.elements.buttons.play),_e(this.elements.captions),_e(this.elements.controls),_e(this.elements.wrapper),this.elements.buttons.play=null,this.elements.captions=null,this.elements.controls=null,this.elements.wrapper=null),m.function(O)&&O()):(Be.call(this),vt.cancelRequests.call(this),fe(this.elements.original,this.elements.container),E.call(this,this.elements.original,"destroyed",!0),m.function(O)&&O.call(this.elements.original),this.ready=!1,setTimeout(()=>{this.elements=null,this.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(de.toggleNativeControls.call(this,!0),B()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),this.embed!==null&&m.function(this.embed.destroy)&&this.embed.destroy(),B()):this.isVimeo&&(this.embed!==null&&this.embed.unload().then(B),setTimeout(B,200))}),a(this,"supports",O=>ue.mime.call(this,O)),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=ue.touch,this.media=d,m.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||m.nodeList(this.media)||m.array(this.media))&&(this.media=this.media[0]),this.config=U({},le,ln.defaults,c||{},(()=>{try{return JSON.parse(this.media.getAttribute("data-plyr-config"))}catch{return{}}})()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Ee(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",ue),m.nullOrUndefined(this.media)||!m.element(this.media))return void this.debug.error("Setup failed: no suitable element passed");if(this.media.plyr)return void this.debug.warn("Target already setup");if(!this.config.enabled)return void this.debug.error("Setup failed: disabled by config");if(!ue.check().api)return void this.debug.error("Setup failed: no support");let p=this.media.cloneNode(!0);p.autoplay=!1,this.elements.original=p;let _=this.media.tagName.toLowerCase(),b=null,x=null;switch(_){case"div":if(b=this.media.querySelector("iframe"),m.element(b)){if(x=mi(b.getAttribute("src")),this.provider=function(O){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(O)?he.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(O)?he.vimeo:null}(x.toString()),this.elements.container=this.media,this.media=b,this.elements.container.className="",x.search.length){let O=["1","true"];O.includes(x.searchParams.get("autoplay"))&&(this.config.autoplay=!0),O.includes(x.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=O.includes(x.searchParams.get("playsinline")),this.config.youtube.hl=x.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(m.empty(this.provider)||!Object.values(he).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=me;break;case"video":case"audio":this.type=_,this.provider=he.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=ue.check(this.type,this.provider),this.supported.api?(this.eventListeners=[],this.listeners=new je(this),this.storage=new ri(this),this.media.plyr=this,m.element(this.elements.container)||(this.elements.container=V("div"),q(this.media,this.elements.container)),de.migrateStyles.call(this),de.addStyleHook.call(this),mt.setup.call(this),this.config.debug&&K.call(this,this.elements.container,this.config.events.join(" "),O=>{this.debug.log(`event: ${O.type}`)}),this.fullscreen=new Le(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&de.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new Hi(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",()=>Ve(this.play())),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Qt(this))):this.debug.error("Setup failed: no support")}get isHTML5(){return this.provider===he.html5}get isEmbed(){return this.isYouTube||this.isVimeo}get isYouTube(){return this.provider===he.youtube}get isVimeo(){return this.provider===he.vimeo}get isVideo(){return this.type===me}get isAudio(){return this.type===ae}get playing(){return!!(this.ready&&!this.paused&&!this.ended)}get paused(){return!!this.media.paused}get stopped(){return!!(this.paused&&this.currentTime===0)}get ended(){return!!this.media.ended}set currentTime(d){if(!this.duration)return;let c=m.number(d)&&d>0;this.media.currentTime=c?Math.min(d,this.duration):0,this.debug.log(`Seeking to ${this.currentTime} seconds`)}get currentTime(){return Number(this.media.currentTime)}get buffered(){let{buffered:d}=this.media;return m.number(d)?d:d&&d.length&&this.duration>0?d.end(0)/this.duration:0}get seeking(){return!!this.media.seeking}get duration(){let d=parseFloat(this.config.duration),c=(this.media||{}).duration,p=m.number(c)&&c!==1/0?c:0;return d||p}set volume(d){let c=d;m.string(c)&&(c=Number(c)),m.number(c)||(c=this.storage.get("volume")),m.number(c)||({volume:c}=this.config),c>1&&(c=1),c<0&&(c=0),this.config.volume=c,this.media.volume=c,!m.empty(d)&&this.muted&&c>0&&(this.muted=!1)}get volume(){return Number(this.media.volume)}set muted(d){let c=d;m.boolean(c)||(c=this.storage.get("muted")),m.boolean(c)||(c=this.config.muted),this.config.muted=c,this.media.muted=c}get muted(){return!!this.media.muted}get hasAudio(){return!this.isHTML5||!!this.isAudio||!!this.media.mozHasAudio||!!this.media.webkitAudioDecodedByteCount||!!(this.media.audioTracks&&this.media.audioTracks.length)}set speed(d){let c=null;m.number(d)&&(c=d),m.number(c)||(c=this.storage.get("speed")),m.number(c)||(c=this.config.speed.selected);let{minimumSpeed:p,maximumSpeed:_}=this;c=kn(c,p,_),this.config.speed.selected=c,setTimeout(()=>{this.media&&(this.media.playbackRate=c)},0)}get speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}get maximumSpeed(){return this.isYouTube?Math.max(...this.options.speed):this.isVimeo?2:16}set quality(d){let c=this.config.quality,p=this.options.quality;if(!p.length)return;let _=[!m.empty(d)&&Number(d),this.storage.get("quality"),c.selected,c.default].find(m.number),b=!0;if(!p.includes(_)){let x=Gt(p,_);this.debug.warn(`Unsupported quality option: ${_}, using ${x} instead`),_=x,b=!1}c.selected=_,this.media.quality=_,b&&this.storage.set({quality:_})}get quality(){return this.media.quality}set loop(d){let c=m.boolean(d)?d:this.config.loop.active;this.config.loop.active=c,this.media.loop=c}get loop(){return!!this.media.loop}set source(d){Cn.change.call(this,d)}get source(){return this.media.currentSrc}get download(){let{download:d}=this.config.urls;return m.url(d)?d:this.source}set download(d){m.url(d)&&(this.config.urls.download=d,H.setDownloadUrl.call(this))}set poster(d){this.isVideo?de.setPoster.call(this,d,!1).catch(()=>{}):this.debug.warn("Poster can only be set for video")}get poster(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}get ratio(){if(!this.isVideo)return null;let d=si(We.call(this));return m.array(d)?d.join(":"):d}set ratio(d){this.isVideo?m.string(d)&&ct(d)?(this.config.ratio=si(d),bt.call(this)):this.debug.error(`Invalid aspect ratio specified (${d})`):this.debug.warn("Aspect ratio can only be set for video")}set autoplay(d){this.config.autoplay=m.boolean(d)?d:this.config.autoplay}get autoplay(){return!!this.config.autoplay}toggleCaptions(d){X.toggle.call(this,d,!1)}set currentTrack(d){X.set.call(this,d,!1),X.setup.call(this)}get currentTrack(){let{toggled:d,currentTrack:c}=this.captions;return d?c:-1}set language(d){X.setLanguage.call(this,d,!1)}get language(){return(X.getCurrentTrack.call(this)||{}).language}set pip(d){if(!ue.pip)return;let c=m.boolean(d)?d:!this.pip;m.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(c?Ae:G),m.function(this.media.requestPictureInPicture)&&(!this.pip&&c?this.media.requestPictureInPicture():this.pip&&!c&&document.exitPictureInPicture())}get pip(){return ue.pip?m.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Ae:null}setPreviewThumbnails(d){this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),Object.assign(this.config.previewThumbnails,d),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Qt(this))}static supported(d,c){return ue.check(d,c)}static loadSprite(d,c){return Ii(d,c)}static setup(d,c={}){let p=null;return m.string(d)?p=Array.from(document.querySelectorAll(d)):m.nodeList(d)?p=Array.from(d):m.array(d)&&(p=d.filter(m.element)),m.empty(p)?null:p.map(_=>new ln(_,c))}}var cn;return ln.defaults=(cn=le,JSON.parse(JSON.stringify(cn))),ln})});var go=function(){return go=Object.assign||function(e){for(var i,t=1,n=arguments.length;t<n;t++)for(var s in i=arguments[t])Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);return e},go.apply(this,arguments)};function ul(a,e,i){return Math.max(a,Math.min(e,i))}var yo=class{advance(e){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=function(n,s,o,l){return function(h,f,g){return(1-g)*h+g*f}(n,s,1-Math.exp(-o*l))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=e;let t=ul(0,this.currentTime/this.duration,1);i=t>=1;let n=i?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}i&&this.stop(),this.onUpdate?.(this.value,i)}stop(){this.isRunning=!1}fromTo(e,i,{lerp:t=.1,duration:n=1,easing:s=u=>u,onStart:o,onUpdate:l}){this.from=this.value=e,this.to=i,this.lerp=t,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=l}},_o=class{constructor({wrapper:e,content:i,autoResize:t=!0,debounce:n=250}={}){Ui(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ui(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ui(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=i,t&&(this.debouncedResize=function(o,l){let u;return function(){let h=arguments,f=this;clearTimeout(u),u=setTimeout(function(){o.apply(f,h)},l)}}(this.resize,n),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},or=class{constructor(){this.events={}}emit(e,...i){let t=this.events[e]||[];for(let n=0,s=t.length;n<s;n++)t[n](...i)}on(e,i){return this.events[e]?.push(i)||(this.events[e]=[i]),()=>{this.events[e]=this.events[e]?.filter(t=>i!==t)}}off(e,i){this.events[e]=this.events[e]?.filter(t=>i!==t)}destroy(){this.events={}}},cl=100/6,bo=class{constructor(e,{wheelMultiplier:i=1,touchMultiplier:t=1}){Ui(this,"onTouchStart",e=>{let{clientX:i,clientY:t}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ui(this,"onTouchMove",e=>{let{clientX:i,clientY:t}=e.targetTouches?e.targetTouches[0]:e,n=-(i-this.touchStart.x)*this.touchMultiplier,s=-(t-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=t,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:e})});Ui(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ui(this,"onWheel",e=>{let{deltaX:i,deltaY:t,deltaMode:n}=e;i*=n===1?cl:n===2?this.windowWidth:1,t*=n===1?cl:n===2?this.windowHeight:1,i*=this.wheelMultiplier,t*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:t,event:e})});Ui(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=i,this.touchMultiplier=t,this.touchStart={x:null,y:null},this.emitter=new or,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},hl=function(){function a(e){var i=e===void 0?{}:e,t=i.wrapper,n=t===void 0?window:t,s=i.content,o=s===void 0?document.documentElement:s,l=i.wheelEventsTarget,u=l===void 0?n:l,h=i.eventsTarget,f=h===void 0?u:h,g=i.smoothWheel,v=g===void 0||g,y=i.syncTouch,T=y!==void 0&&y,w=i.syncTouchLerp,S=w===void 0?.075:w,k=i.touchInertiaMultiplier,C=k===void 0?35:k,P=i.duration,A=i.easing,I=A===void 0?function(we){return Math.min(1,1.001-Math.pow(2,-10*we))}:A,D=i.lerp,R=D===void 0?!P&&.1:D,F=i.infinite,m=F!==void 0&&F,L=i.orientation,W=L===void 0?"vertical":L,z=i.gestureOrientation,ne=z===void 0?"vertical":z,U=i.touchMultiplier,q=U===void 0?1:U,se=i.wheelMultiplier,V=se===void 0?1:se,ye=i.autoResize,_e=ye===void 0||ye,M=i.__experimental__naiveDimensions,fe=M!==void 0&&M,Y=this;this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=function(we){var Q=we.deltaX,oe=we.deltaY,re=we.event;if(!re.ctrlKey){var ve=re.type.includes("touch"),ce=re.type.includes("wheel");if(Y.options.syncTouch&&ve&&re.type==="touchstart"&&!Y.isStopped&&!Y.isLocked)Y.reset();else{var ze=Q===0&&oe===0,Ce=Y.options.gestureOrientation==="vertical"&&oe===0||Y.options.gestureOrientation==="horizontal"&&Q===0;if(!ze&&!Ce){var ue=re.composedPath();if(!(ue=ue.slice(0,ue.indexOf(Y.rootElement))).find(function(De){var Ye,E,Be,kt,Ve;return((Ye=De.hasAttribute)===null||Ye===void 0?void 0:Ye.call(De,"data-lenis-prevent"))||ve&&((E=De.hasAttribute)===null||E===void 0?void 0:E.call(De,"data-lenis-prevent-touch"))||ce&&((Be=De.hasAttribute)===null||Be===void 0?void 0:Be.call(De,"data-lenis-prevent-wheel"))||((kt=De.classList)===null||kt===void 0?void 0:kt.contains("lenis"))&&!(!((Ve=De.classList)===null||Ve===void 0)&&Ve.contains("lenis-stopped"))}))if(Y.isStopped||Y.isLocked)re.preventDefault();else{if(Y.isSmooth=Y.options.syncTouch&&ve||Y.options.smoothWheel&&ce,!Y.isSmooth)return Y.isScrolling=!1,void Y.animate.stop();re.preventDefault();var Qe=oe;Y.options.gestureOrientation==="both"?Qe=Math.abs(oe)>Math.abs(Q)?oe:Q:Y.options.gestureOrientation==="horizontal"&&(Qe=Q);var ie=ve&&Y.options.syncTouch,K=ve&&re.type==="touchend"&&Math.abs(Qe)>5;K&&(Qe=Y.velocity*Y.options.touchInertiaMultiplier),Y.scrollTo(Y.targetScroll+Qe,go({programmatic:!1},ie?{lerp:K?Y.options.syncTouchLerp:1}:{lerp:Y.options.lerp,duration:Y.options.duration,easing:Y.options.easing}))}}}}},this.onNativeScroll=function(){if(!Y.__preventNextScrollEvent&&!Y.isScrolling){var we=Y.animatedScroll;Y.animatedScroll=Y.targetScroll=Y.actualScroll,Y.velocity=0,Y.direction=Math.sign(Y.animatedScroll-we),Y.emit()}},window.lenisVersion="1.0.45",n!==document.documentElement&&n!==document.body||(n=window),this.options={wrapper:n,content:o,wheelEventsTarget:u,eventsTarget:f,smoothWheel:v,syncTouch:T,syncTouchLerp:S,touchInertiaMultiplier:C,duration:P,easing:I,lerp:R,infinite:m,gestureOrientation:ne,orientation:W,touchMultiplier:q,wheelMultiplier:V,autoResize:_e,__experimental__naiveDimensions:fe},this.animate=new yo,this.emitter=new or,this.dimensions=new _o({wrapper:n,content:o,autoResize:_e}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=T||v,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new bo(f,{touchMultiplier:q,wheelMultiplier:V}),this.virtualScroll.on("scroll",this.onVirtualScroll)}return a.prototype.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)},a.prototype.on=function(e,i){return this.emitter.on(e,i)},a.prototype.off=function(e,i){return this.emitter.off(e,i)},a.prototype.setScroll=function(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e},a.prototype.resize=function(){this.dimensions.resize()},a.prototype.emit=function(){this.emitter.emit("scroll",this)},a.prototype.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()},a.prototype.start=function(){this.isStopped&&(this.isStopped=!1,this.reset())},a.prototype.stop=function(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())},a.prototype.raf=function(e){var i=e-(this.time||e);this.time=e,this.animate.advance(.001*i)},a.prototype.scrollTo=function(e,i){var t=this,n=i===void 0?{}:i,s=n.offset,o=s===void 0?0:s,l=n.immediate,u=l!==void 0&&l,h=n.lock,f=h!==void 0&&h,g=n.duration,v=g===void 0?this.options.duration:g,y=n.easing,T=y===void 0?this.options.easing:y,w=n.lerp,S=w===void 0?!v&&this.options.lerp:w,k=n.onComplete,C=n.force,P=C!==void 0&&C,A=n.programmatic,I=A===void 0||A;if(!this.isStopped&&!this.isLocked||P){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var D=void 0;if(typeof e=="string"?D=document.querySelector(e):e?.nodeType&&(D=e),D){if(this.options.wrapper!==window){var R=this.options.wrapper.getBoundingClientRect();o-=this.isHorizontal?R.left:R.top}var F=D.getBoundingClientRect();e=(this.isHorizontal?F.left:F.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=o,e=Math.round(e),this.options.infinite?I&&(this.targetScroll=this.animatedScroll=this.scroll):e=ul(0,e,this.limit),u)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(k==null||k(this));if(!I){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:v,easing:T,lerp:S,onStart:function(){f&&(t.isLocked=!0),t.isScrolling=!0},onUpdate:function(m,L){t.isScrolling=!0,t.velocity=m-t.animatedScroll,t.direction=Math.sign(t.velocity),t.animatedScroll=m,t.setScroll(t.scroll),I&&(t.targetScroll=m),L||t.emit(),L&&(t.reset(),t.emit(),k?.(t),t.__preventNextScrollEvent=!0,requestAnimationFrame(function(){delete t.__preventNextScrollEvent}))}})}}},Object.defineProperty(a.prototype,"rootElement",{get:function(){return this.options.wrapper===window?document.documentElement:this.options.wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"limit",{get:function(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isHorizontal",{get:function(){return this.options.orientation==="horizontal"},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"actualScroll",{get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"scroll",{get:function(){return this.options.infinite?function(i,t){return(i%t+t)%t}(this.animatedScroll,this.limit):this.animatedScroll},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"progress",{get:function(){return this.limit===0?1:this.scroll/this.limit},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isSmooth",{get:function(){return this.__isSmooth},set:function(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isScrolling",{get:function(){return this.__isScrolling},set:function(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isStopped",{get:function(){return this.__isStopped},set:function(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isLocked",{get:function(){return this.__isLocked},set:function(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"className",{get:function(){var e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e},enumerable:!1,configurable:!0}),a.prototype.toggleClassName=function(e,i){this.rootElement.classList.toggle(e,i),this.emitter.emit("className change",this)},a}();function vo(){return vo=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(a[t]=i[t])}return a},vo.apply(this,arguments)}var ar=class{constructor({scrollElements:e,rootMargin:i="-1px -1px -1px -1px",IORaf:t}){this.scrollElements=void 0,this.rootMargin=void 0,this.IORaf=void 0,this.observer=void 0,this.scrollElements=e,this.rootMargin=i,this.IORaf=t,this._init()}_init(){this.observer=new IntersectionObserver(e=>{e.forEach(i=>{let t=this.scrollElements.find(n=>n.$el===i.target);i.isIntersecting?(t&&(t.isAlreadyIntersected=!0),this._setInview(i)):t&&t.isAlreadyIntersected&&this._setOutOfView(i)})},{rootMargin:this.rootMargin});for(let e of this.scrollElements)this.observe(e.$el)}destroy(){this.observer.disconnect()}observe(e){e&&this.observer.observe(e)}unobserve(e){e&&this.observer.unobserve(e)}_setInview(e){let i=this.scrollElements.find(t=>t.$el===e.target);this.IORaf&&i?.setInteractivityOn(),!this.IORaf&&i?.setInview()}_setOutOfView(e){let i=this.scrollElements.find(t=>t.$el===e.target);this.IORaf&&i?.setInteractivityOff(),!this.IORaf&&i?.setOutOfView(),i!=null&&i.attributes.scrollRepeat||this.IORaf||this.unobserve(e.target)}};function dl(a,e,i,t,n){return i+((n-a)/(e-a)*(t-i)||0)}function pl(a,e){return a.reduce((i,t)=>Math.abs(t-e)<Math.abs(i-e)?t:i)}var wo=class{constructor({$el:e,id:i,modularInstance:t,subscribeElementUpdateFn:n,unsubscribeElementUpdateFn:s,needRaf:o,scrollOrientation:l}){var u,h,f,g,v;this.$el=void 0,this.id=void 0,this.needRaf=void 0,this.attributes=void 0,this.scrollOrientation=void 0,this.isAlreadyIntersected=void 0,this.intersection=void 0,this.metrics=void 0,this.currentScroll=void 0,this.translateValue=void 0,this.progress=void 0,this.lastProgress=void 0,this.modularInstance=void 0,this.progressModularModules=void 0,this.isInview=void 0,this.isInteractive=void 0,this.isInFold=void 0,this.isFirstResize=void 0,this.subscribeElementUpdateFn=void 0,this.unsubscribeElementUpdateFn=void 0,this.$el=e,this.id=i,this.needRaf=o,this.scrollOrientation=l,this.modularInstance=t,this.subscribeElementUpdateFn=n,this.unsubscribeElementUpdateFn=s,this.attributes={scrollClass:(u=this.$el.dataset.scrollClass)!=null?u:"is-inview",scrollOffset:(h=this.$el.dataset.scrollOffset)!=null?h:"0,0",scrollPosition:(f=this.$el.dataset.scrollPosition)!=null?f:"start,end",scrollModuleProgress:this.$el.dataset.scrollModuleProgress!=null,scrollCssProgress:this.$el.dataset.scrollCssProgress!=null,scrollEventProgress:(g=this.$el.dataset.scrollEventProgress)!=null?g:null,scrollSpeed:this.$el.dataset.scrollSpeed!=null?parseFloat(this.$el.dataset.scrollSpeed):null,scrollRepeat:this.$el.dataset.scrollRepeat!=null,scrollCall:(v=this.$el.dataset.scrollCall)!=null?v:null,scrollCallSelf:this.$el.dataset.scrollCallSelf!=null,scrollIgnoreFold:this.$el.dataset.scrollIgnoreFold!=null,scrollEnableTouchSpeed:this.$el.dataset.scrollEnableTouchSpeed!=null},this.intersection={start:0,end:0},this.metrics={offsetStart:0,offsetEnd:0,bcr:{}},this.currentScroll=this.scrollOrientation==="vertical"?window.scrollY:window.scrollX,this.translateValue=0,this.progress=0,this.lastProgress=null,this.progressModularModules=[],this.isInview=!1,this.isInteractive=!1,this.isAlreadyIntersected=!1,this.isInFold=!1,this.isFirstResize=!0,this._init()}_init(){this.needRaf&&(this.modularInstance&&this.attributes.scrollModuleProgress&&this._getProgressModularModules(),this._resize())}onResize({currentScroll:e}){this.currentScroll=e,this._resize()}onRender({currentScroll:e,smooth:i}){let t=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth;if(this.currentScroll=e,this._computeProgress(),this.attributes.scrollSpeed&&!isNaN(this.attributes.scrollSpeed))if(this.attributes.scrollEnableTouchSpeed||i){if(this.isInFold){let n=Math.max(0,this.progress);this.translateValue=n*t*this.attributes.scrollSpeed*-1}else{let n=dl(0,1,-1,1,this.progress);this.translateValue=n*t*this.attributes.scrollSpeed*-1}this.$el.style.transform=this.scrollOrientation==="vertical"?`translate3d(0, ${this.translateValue}px, 0)`:`translate3d(${this.translateValue}px, 0, 0)`}else this.translateValue&&(this.$el.style.transform="translate3d(0, 0, 0)"),this.translateValue=0}setInview(){if(this.isInview)return;this.isInview=!0,this.$el.classList.add(this.attributes.scrollClass);let e=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("enter",e)}setOutOfView(){if(!this.isInview||!this.attributes.scrollRepeat)return;this.isInview=!1,this.$el.classList.remove(this.attributes.scrollClass);let e=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("leave",e)}setInteractivityOn(){this.isInteractive||(this.isInteractive=!0,this.subscribeElementUpdateFn(this))}setInteractivityOff(){this.isInteractive&&(this.isInteractive=!1,this.unsubscribeElementUpdateFn(this),this.lastProgress!=null&&this._computeProgress(pl([0,1],this.lastProgress)))}_resize(){this.metrics.bcr=this.$el.getBoundingClientRect(),this._computeMetrics(),this._computeIntersection(),this.isFirstResize&&(this.isFirstResize=!1,this.isInFold&&this.setInview())}_computeMetrics(){let{top:e,left:i,height:t,width:n}=this.metrics.bcr,s=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth,o=this.scrollOrientation==="vertical"?t:n;this.metrics.offsetStart=this.currentScroll+(this.scrollOrientation==="vertical"?e:i)-this.translateValue,this.metrics.offsetEnd=this.metrics.offsetStart+o,this.isInFold=this.metrics.offsetStart<s&&!this.attributes.scrollIgnoreFold}_computeIntersection(){let e=this.scrollOrientation==="vertical"?window.innerHeight:window.innerWidth,i=this.scrollOrientation==="vertical"?this.metrics.bcr.height:this.metrics.bcr.width,t=this.attributes.scrollOffset.split(","),n=t[0]!=null?t[0].trim():"0",s=t[1]!=null?t[1].trim():"0",o=this.attributes.scrollPosition.split(","),l=o[0]!=null?o[0].trim():"start",u=o[1]!=null?o[1].trim():"end",h=n.includes("%")?e*parseInt(n.replace("%","").trim())*.01:parseInt(n),f=s.includes("%")?e*parseInt(s.replace("%","").trim())*.01:parseInt(s);switch(this.isInFold&&(l="fold"),l){case"start":default:this.intersection.start=this.metrics.offsetStart-e+h;break;case"middle":this.intersection.start=this.metrics.offsetStart-e+h+.5*i;break;case"end":this.intersection.start=this.metrics.offsetStart-e+h+i;break;case"fold":this.intersection.start=0}switch(u){case"start":this.intersection.end=this.metrics.offsetStart-f;break;case"middle":this.intersection.end=this.metrics.offsetStart-f+.5*i;break;default:this.intersection.end=this.metrics.offsetStart-f+i}if(this.intersection.end<=this.intersection.start)switch(u){case"start":default:this.intersection.end=this.intersection.start+1;break;case"middle":this.intersection.end=this.intersection.start+.5*i;break;case"end":this.intersection.end=this.intersection.start+i}}_computeProgress(e){let i=e??((t=dl(this.intersection.start,this.intersection.end,0,1,this.currentScroll))<0?0:t>1?1:t);var t;if(this.progress=i,i!=this.lastProgress){if(this.lastProgress=i,this.attributes.scrollCssProgress&&this._setCssProgress(i),this.attributes.scrollEventProgress&&this._setCustomEventProgress(i),this.attributes.scrollModuleProgress)for(let n of this.progressModularModules)this.modularInstance&&this.modularInstance.call("onScrollProgress",i,n.moduleName,n.moduleId);i>0&&i<1&&this.setInview(),i===0&&this.setOutOfView(),i===1&&this.setOutOfView()}}_setCssProgress(e=0){this.$el.style.setProperty("--progress",e.toString())}_setCustomEventProgress(e=0){let i=this.attributes.scrollEventProgress;if(!i)return;let t=new CustomEvent(i,{detail:{target:this.$el,progress:e}});window.dispatchEvent(t)}_getProgressModularModules(){if(!this.modularInstance)return;let e=Object.keys(this.$el.dataset).filter(t=>t.includes("module")),i=Object.entries(this.modularInstance.modules);if(e.length)for(let t of e){let n=this.$el.dataset[t];if(!n)return;for(let s of i){let[o,l]=s;n in l&&this.progressModularModules.push({moduleName:o,moduleId:n})}}}_getScrollCallFrom(){let e=pl([this.intersection.start,this.intersection.end],this.currentScroll);return this.intersection.start===e?"start":"end"}_dispatchCall(e,i){var t,n;let s=(t=this.attributes.scrollCall)==null?void 0:t.split(","),o=(n=this.attributes)==null?void 0:n.scrollCallSelf;if(s&&s.length>1){var l;let[u,h,f]=s,g;g=o?this.$el.dataset[`module${h.trim()}`]:f,this.modularInstance&&this.modularInstance.call(u.trim(),{target:this.$el,way:e,from:i},h.trim(),(l=g)==null?void 0:l.trim())}else if(s){let[u]=s,h=new CustomEvent(u,{detail:{target:this.$el,way:e,from:i}});window.dispatchEvent(h)}}},th=["scrollOffset","scrollPosition","scrollModuleProgress","scrollCssProgress","scrollEventProgress","scrollSpeed"],To=class{constructor({$el:e,modularInstance:i,triggerRootMargin:t,rafRootMargin:n,scrollOrientation:s}){this.$scrollContainer=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.scrollElements=void 0,this.triggeredScrollElements=void 0,this.RAFScrollElements=void 0,this.scrollElementsToUpdate=void 0,this.IOTriggerInstance=void 0,this.IORafInstance=void 0,this.scrollOrientation=void 0,e?(this.$scrollContainer=e,this.modularInstance=i,this.scrollOrientation=s,this.triggerRootMargin=t??"-1px -1px -1px -1px",this.rafRootMargin=n??"100% 100% 100% 100%",this.scrollElements=[],this.triggeredScrollElements=[],this.RAFScrollElements=[],this.scrollElementsToUpdate=[],this._init()):console.error("Please provide a DOM Element as scrollContainer")}_init(){let e=this.$scrollContainer.querySelectorAll("[data-scroll]"),i=Array.from(e);this._subscribeScrollElements(i),this.IOTriggerInstance=new ar({scrollElements:[...this.triggeredScrollElements],rootMargin:this.triggerRootMargin,IORaf:!1}),this.IORafInstance=new ar({scrollElements:[...this.RAFScrollElements],rootMargin:this.rafRootMargin,IORaf:!0})}destroy(){this.IOTriggerInstance.destroy(),this.IORafInstance.destroy(),this._unsubscribeAllScrollElements()}onResize({currentScroll:e}){for(let i of this.RAFScrollElements)i.onResize({currentScroll:e})}onRender({currentScroll:e,smooth:i}){for(let t of this.scrollElementsToUpdate)t.onRender({currentScroll:e,smooth:i})}removeScrollElements(e){let i=e.querySelectorAll("[data-scroll]");if(i.length){for(let t=0;t<this.triggeredScrollElements.length;t++){let n=this.triggeredScrollElements[t];Array.from(i).indexOf(n.$el)>-1&&(this.IOTriggerInstance.unobserve(n.$el),this.triggeredScrollElements.splice(t,1))}for(let t=0;t<this.RAFScrollElements.length;t++){let n=this.RAFScrollElements[t];Array.from(i).indexOf(n.$el)>-1&&(this.IORafInstance.unobserve(n.$el),this.RAFScrollElements.splice(t,1))}i.forEach(t=>{let n=this.scrollElementsToUpdate.find(o=>o.$el===t),s=this.scrollElements.find(o=>o.$el===t);n&&this._unsubscribeElementUpdate(n),s&&(this.scrollElements=this.scrollElements.filter(o=>o.id!=s.id))})}}addScrollElements(e){let i=e.querySelectorAll("[data-scroll]"),t=[];this.scrollElements.forEach(o=>{t.push(o.id)});let n=Math.max(...t)+1,s=Array.from(i);this._subscribeScrollElements(s,n,!0)}_subscribeScrollElements(e,i=0,t=!1){for(let n=0;n<e.length;n++){let s=e[n],o=this._checkRafNeeded(s),l=new wo({$el:s,id:i+n,scrollOrientation:this.scrollOrientation,modularInstance:this.modularInstance,subscribeElementUpdateFn:this._subscribeElementUpdate.bind(this),unsubscribeElementUpdateFn:this._unsubscribeElementUpdate.bind(this),needRaf:o});this.scrollElements.push(l),o?(this.RAFScrollElements.push(l),t&&(this.IORafInstance.scrollElements.push(l),this.IORafInstance.observe(l.$el))):(this.triggeredScrollElements.push(l),t&&(this.IOTriggerInstance.scrollElements.push(l),this.IOTriggerInstance.observe(l.$el)))}}_unsubscribeAllScrollElements(){this.scrollElements=[],this.RAFScrollElements=[],this.triggeredScrollElements=[],this.scrollElementsToUpdate=[]}_subscribeElementUpdate(e){this.scrollElementsToUpdate.push(e)}_unsubscribeElementUpdate(e){this.scrollElementsToUpdate=this.scrollElementsToUpdate.filter(i=>i.id!=e.id)}_checkRafNeeded(e){let i=[...th],t=n=>{i=i.filter(s=>s!=n)};if(e.dataset.scrollOffset){if(e.dataset.scrollOffset.split(",").map(n=>n.replace("%","").trim()).join(",")!="0,0")return!0;t("scrollOffset")}else t("scrollOffset");if(e.dataset.scrollPosition){if(e.dataset.scrollPosition.trim()!="top,bottom")return!0;t("scrollPosition")}else t("scrollPosition");if(e.dataset.scrollSpeed&&!isNaN(parseFloat(e.dataset.scrollSpeed)))return!0;t("scrollSpeed");for(let n of i)if(n in e.dataset)return!0;return!1}},xo=class{constructor({resizeElements:e,resizeCallback:i=()=>{}}){this.$resizeElements=void 0,this.isFirstObserve=void 0,this.observer=void 0,this.resizeCallback=void 0,this.$resizeElements=e,this.resizeCallback=i,this.isFirstObserve=!0,this._init()}_init(){this.observer=new ResizeObserver(e=>{var i;!this.isFirstObserve&&((i=this.resizeCallback)==null||i.call(this)),this.isFirstObserve=!1});for(let e of this.$resizeElements)this.observer.observe(e)}destroy(){this.observer.disconnect()}},fl={wrapper:window,content:document.documentElement,wheelEventsTarget:window,eventsTarget:window,smoothWheel:!0,syncTouch:!1,syncTouchLerp:.075,touchInertiaMultiplier:35,duration:.75,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),lerp:.1,infinite:!1,orientation:"vertical",gestureOrientation:"vertical",touchMultiplier:1,wheelMultiplier:1,autoResize:!0},lr=class{constructor({lenisOptions:e={},modularInstance:i,triggerRootMargin:t,rafRootMargin:n,autoResize:s=!0,autoStart:o=!0,scrollCallback:l=()=>{},initCustomTicker:u,destroyCustomTicker:h}={}){this.rafPlaying=void 0,this.lenisInstance=void 0,this.coreInstance=void 0,this.lenisOptions=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.rafInstance=void 0,this.autoResize=void 0,this.autoStart=void 0,this.ROInstance=void 0,this.initCustomTicker=void 0,this.destroyCustomTicker=void 0,this._onRenderBind=void 0,this._onResizeBind=void 0,this._onScrollToBind=void 0,this.lenisOptions=vo({},fl,e),Object.assign(this,{lenisOptions:e,modularInstance:i,triggerRootMargin:t,rafRootMargin:n,autoResize:s,autoStart:o,scrollCallback:l,initCustomTicker:u,destroyCustomTicker:h}),this._onRenderBind=this._onRender.bind(this),this._onScrollToBind=this._onScrollTo.bind(this),this._onResizeBind=this._onResize.bind(this),this.rafPlaying=!1,this._init()}_init(){var e;this.lenisInstance=new hl({wrapper:this.lenisOptions.wrapper,content:this.lenisOptions.content,eventsTarget:this.lenisOptions.eventsTarget,lerp:this.lenisOptions.lerp,duration:this.lenisOptions.duration,orientation:this.lenisOptions.orientation,gestureOrientation:this.lenisOptions.gestureOrientation,smoothWheel:this.lenisOptions.smoothWheel,syncTouch:this.lenisOptions.syncTouch,syncTouchLerp:this.lenisOptions.syncTouchLerp,touchInertiaMultiplier:this.lenisOptions.touchInertiaMultiplier,wheelMultiplier:this.lenisOptions.wheelMultiplier,touchMultiplier:this.lenisOptions.touchMultiplier,easing:this.lenisOptions.easing}),(e=this.lenisInstance)==null||e.on("scroll",this.scrollCallback),document.documentElement.setAttribute("data-scroll-orientation",this.lenisInstance.options.orientation),requestAnimationFrame(()=>{this.coreInstance=new To({$el:this.lenisInstance.rootElement,modularInstance:this.modularInstance,triggerRootMargin:this.triggerRootMargin,rafRootMargin:this.rafRootMargin,scrollOrientation:this.lenisInstance.options.orientation}),this._bindEvents(),this.initCustomTicker&&!this.destroyCustomTicker?console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."):!this.initCustomTicker&&this.destroyCustomTicker&&console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),this.autoStart&&this.start()})}destroy(){var e;this.stop(),this._unbindEvents(),this.lenisInstance.destroy(),(e=this.coreInstance)==null||e.destroy(),requestAnimationFrame(()=>{var i;(i=this.coreInstance)==null||i.destroy()})}_bindEvents(){this._bindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance=new xo({resizeElements:[document.body],resizeCallback:this._onResizeBind}):window.addEventListener("resize",this._onResizeBind))}_unbindEvents(){this._unbindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance&&this.ROInstance.destroy():window.removeEventListener("resize",this._onResizeBind))}_bindScrollToEvents(e){let i=e||this.lenisInstance.rootElement,t=i?.querySelectorAll("[data-scroll-to]");t?.length&&t.forEach(n=>{n.addEventListener("click",this._onScrollToBind,!1)})}_unbindScrollToEvents(e){let i=e||this.lenisInstance.rootElement,t=i?.querySelectorAll("[data-scroll-to]");t?.length&&t.forEach(n=>{n.removeEventListener("click",this._onScrollToBind,!1)})}_onResize(){requestAnimationFrame(()=>{var e;(e=this.coreInstance)==null||e.onResize({currentScroll:this.lenisInstance.scroll})})}_onRender(){var e,i;(e=this.lenisInstance)==null||e.raf(Date.now()),(i=this.coreInstance)==null||i.onRender({currentScroll:this.lenisInstance.scroll,smooth:this.lenisInstance.isSmooth})}_onScrollTo(e){var i;e.preventDefault();let t=(i=e.currentTarget)!=null?i:null;if(!t)return;let n=t.getAttribute("data-scroll-to-href")||t.getAttribute("href"),s=t.getAttribute("data-scroll-to-offset")||0,o=t.getAttribute("data-scroll-to-duration")||this.lenisOptions.duration||fl.duration;n&&this.scrollTo(n,{offset:typeof s=="string"?parseInt(s):s,duration:typeof o=="string"?parseInt(o):o})}start(){var e;this.rafPlaying||((e=this.lenisInstance)==null||e.start(),this.rafPlaying=!0,this.initCustomTicker?this.initCustomTicker(this._onRenderBind):this._raf())}stop(){var e;this.rafPlaying&&((e=this.lenisInstance)==null||e.stop(),this.rafPlaying=!1,this.destroyCustomTicker?this.destroyCustomTicker(this._onRenderBind):this.rafInstance&&cancelAnimationFrame(this.rafInstance))}removeScrollElements(e){var i;e?(this._unbindScrollToEvents(e),(i=this.coreInstance)==null||i.removeScrollElements(e)):console.error("Please provide a DOM Element as $oldContainer")}addScrollElements(e){var i;e?((i=this.coreInstance)==null||i.addScrollElements(e),requestAnimationFrame(()=>{this._bindScrollToEvents(e)})):console.error("Please provide a DOM Element as $newContainer")}resize(){this._onResizeBind()}scrollTo(e,i){var t;(t=this.lenisInstance)==null||t.scrollTo(e,{offset:i?.offset,lerp:i?.lerp,duration:i?.duration,immediate:i?.immediate,lock:i?.lock,force:i?.force,easing:i?.easing,onComplete:i?.onComplete})}_raf(){this._onRenderBind(),this.rafInstance=requestAnimationFrame(()=>this._raf())}};function Yi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Tl(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qn={duration:.5,overwrite:!1,delay:0},qo,At,Ke,yi=1e8,Ue=1/yi,Ao=Math.PI*2,ih=Ao/4,nh=0,xl=Math.sqrt,sh=Math.cos,rh=Math.sin,yt=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},_r=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Ho=function(){return typeof window<"u"},cr=function(e){return ot(e)||yt(e)},Sl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,Io=/(?:-?\.?\d|\.)+/gi,jo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,An=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,So=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uo=/[+-]=-?[.\d]+/,kl=/[^,'"\[\]\s]+/gi,oh=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,Ri,Ro,Yo,ui={},pr={},Cl,El=function(e){return(pr=On(e,ui))&&Rt},br=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Ss=function(e,i){return!i&&console.warn(e)},Pl=function(e,i){return e&&(ui[e]=i)&&pr&&(pr[e]=i)||ui},ks=function(){return 0},ah={suppressEvents:!0,isStart:!0,kill:!1},ur={suppressEvents:!0,kill:!1},lh={suppressEvents:!0},Wo={},hn=[],Lo={},Ml,Zt={},ko={},ml=30,hr=[],Xo="",Go=function(e){var i=e[0],t,n;if(Di(i)||ot(i)||(e=[e]),!(t=(i._gsap||{}).harness)){for(n=hr.length;n--&&!hr[n].targetTest(i););t=hr[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Zo(e[n],t)))||e.splice(n,1);return e},dn=function(e){return e._gsap||Go(_i(e))[0]._gsap},Ko=function(e,i,t){return(t=e[i])&&ot(t)?e[i]():_r(t)&&e.getAttribute&&e.getAttribute(i)||t},Vt=function(e,i){return(e=e.split(",")).forEach(i)||e},at=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},In=function(e,i){var t=i.charAt(0),n=parseFloat(i.substr(2));return e=parseFloat(e),t==="+"?e+n:t==="-"?e-n:t==="*"?e*n:e/n},ch=function(e,i){for(var t=i.length,n=0;e.indexOf(i[n])<0&&++n<t;);return n<t},fr=function(){var e=hn.length,i=hn.slice(0),t,n;for(Lo={},hn.length=0,t=0;t<e;t++)n=i[t],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ol=function(e,i,t,n){hn.length&&!At&&fr(),e.render(i,t,n||At&&i<0&&(e._initted||e._startAt)),hn.length&&!At&&fr()},Al=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(kl).length<2?i:yt(e)?e.trim():e},Il=function(e){return e},bi=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},uh=function(e){return function(i,t){for(var n in t)n in i||n==="duration"&&e||n==="ease"||(i[n]=t[n])}},On=function(e,i){for(var t in i)e[t]=i[t];return e},gl=function a(e,i){for(var t in i)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=Di(i[t])?a(e[t]||(e[t]={}),i[t]):i[t]);return e},mr=function(e,i){var t={},n;for(n in e)n in i||(t[n]=e[n]);return t},ws=function(e){var i=e.parent||Ze,t=e.keyframes?uh(It(e.keyframes)):bi;if(ei(e.inherit))for(;i;)t(e,i.vars.defaults),i=i.parent||i._dp;return e},hh=function(e,i){for(var t=e.length,n=t===i.length;n&&t--&&e[t]===i[t];);return t<0},Rl=function(e,i,t,n,s){t===void 0&&(t="_first"),n===void 0&&(n="_last");var o=e[n],l;if(s)for(l=i[s];o&&o[s]>l;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[t],e[t]=i),i._next?i._next._prev=i:e[n]=i,i._prev=o,i.parent=i._dp=e,i},vr=function(e,i,t,n){t===void 0&&(t="_first"),n===void 0&&(n="_last");var s=i._prev,o=i._next;s?s._next=o:e[t]===i&&(e[t]=o),o?o._prev=s:e[n]===i&&(e[n]=s),i._next=i._prev=i.parent=null},pn=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},En=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},dh=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Do=function(e,i,t,n){return e._startAt&&(At?e._startAt.revert(ur):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,n))},ph=function a(e){return!e||e._ts&&a(e.parent)},yl=function(e){return e._repeat?Zn(e._tTime,e=e.duration()+e._rDelay)*e:0},Zn=function(e,i){var t=Math.floor(e/=i);return e&&t===e?t-1:t},gr=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},wr=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ue)||0))},Tr=function(e,i){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Tt(t._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),wr(e),t._dirty||En(t,e)),e},Ll=function(e,i){var t;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(t=gr(e.rawTime(),i),(!i._dur||Ps(0,i.totalDuration(),t)-i._tTime>Ue)&&i.render(t,!0)),En(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-Ue}},Li=function(e,i,t,n){return i.parent&&pn(i),i._start=Tt((Xi(t)?t:t||e!==Ze?gi(e,t,i):e._time)+i._delay),i._end=Tt(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Rl(e,i,"_first","_last",e._sort?"_start":0),No(i)||(e._recent=i),n||Ll(e,i),e._ts<0&&Tr(e,e._tTime),e},Dl=function(e,i){return(ui.ScrollTrigger||br("scrollTrigger",i))&&ui.ScrollTrigger.create(i,e)},Nl=function(e,i,t,n,s){if(ta(e,i,s),!e._initted)return 1;if(!t&&e._pt&&!At&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ml!==Jt.frame)return hn.push(e),e._lazy=[s,n],1},fh=function a(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},No=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},mh=function(e,i,t,n){var s=e.ratio,o=i<0||!i&&(!e._start&&fh(e)&&!(!e._initted&&No(e))||(e._ts<0||e._dp._ts<0)&&!No(e))?0:1,l=e._rDelay,u=0,h,f,g;if(l&&e._repeat&&(u=Ps(0,e._tDur,i),f=Zn(u,l),e._yoyo&&f&1&&(o=1-o),f!==Zn(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||At||n||e._zTime===Ue||!i&&e._zTime){if(!e._initted&&Nl(e,i,n,t,u))return;for(g=e._zTime,e._zTime=i||(t?Ue:0),t||(t=i&&!g),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,h=e._pt;h;)h.r(o,h.d),h=h._next;i<0&&Do(e,i,t,!0),e._onUpdate&&!t&&ci(e,"onUpdate"),u&&e._repeat&&!t&&e.parent&&ci(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&pn(e,1),!t&&!At&&(ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},gh=function(e,i,t){var n;if(t>i)for(n=e._first;n&&n._start<=t;){if(n.data==="isPause"&&n._start>i)return n;n=n._next}else for(n=e._last;n&&n._start>=t;){if(n.data==="isPause"&&n._start<i)return n;n=n._prev}},Jn=function(e,i,t,n){var s=e._repeat,o=Tt(i)||0,l=e._tTime/e._tDur;return l&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,l>0&&!n&&Tr(e,e._tTime=e._tDur*l),e.parent&&wr(e),t||En(e.parent,e),e},_l=function(e){return e instanceof Et?En(e):Jn(e,e._dur)},yh={_start:0,endTime:ks,totalDuration:ks},gi=function a(e,i,t){var n=e.labels,s=e._recent||yh,o=e.duration()>=yi?s.endTime(!1):e._dur,l,u,h;return yt(i)&&(isNaN(i)||i in n)?(u=i.charAt(0),h=i.substr(-1)==="%",l=i.indexOf("="),u==="<"||u===">"?(l>=0&&(i=i.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(h?(l<0?s:t).totalDuration()/100:1)):l<0?(i in n||(n[i]=o),n[i]):(u=parseFloat(i.charAt(l-1)+i.substr(l+1)),h&&t&&(u=u/100*(It(t)?t[0]:t).totalDuration()),l>1?a(e,i.substr(0,l-1),t)+u:o+u)):i==null?o:+i},Ts=function(e,i,t){var n=Xi(i[1]),s=(n?2:1)+(e<2?0:1),o=i[s],l,u;if(n&&(o.duration=i[1]),o.parent=t,e){for(l=o,u=t;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=ei(u.vars.inherit)&&u.parent;o.immediateRender=ei(l.immediateRender),e<2?o.runBackwards=1:o.startAt=i[s-1]}return new ht(i[0],o,i[s+1])},fn=function(e,i){return e||e===0?i(e):i},Ps=function(e,i,t){return t<e?e:t>i?i:t},Pt=function(e,i){return!yt(e)||!(i=oh.exec(e))?"":i[1]},_h=function(e,i,t){return fn(t,function(n){return Ps(e,i,n)})},Fo=[].slice,Fl=function(e,i){return e&&Di(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==Ri},bh=function(e,i,t){return t===void 0&&(t=[]),e.forEach(function(n){var s;return yt(n)&&!i||Fl(n,1)?(s=t).push.apply(s,_i(n)):t.push(n)})||t},_i=function(e,i,t){return Ke&&!i&&Ke.selector?Ke.selector(e):yt(e)&&!t&&(Ro||!es())?Fo.call((i||Yo).querySelectorAll(e),0):It(e)?bh(e,t):Fl(e)?Fo.call(e,0):e?[e]:[]},zo=function(e){return e=_i(e)[0]||Ss("Invalid scope")||{},function(i){var t=e.current||e.nativeElement||e;return _i(i,t.querySelectorAll?t:t===e?Ss("Invalid scope")||Yo.createElement("div"):e)}},zl=function(e){return e.sort(function(){return .5-Math.random()})},Bl=function(e){if(ot(e))return e;var i=Di(e)?e:{each:e},t=Pn(i.ease),n=i.from||0,s=parseFloat(i.base)||0,o={},l=n>0&&n<1,u=isNaN(n)||l,h=i.axis,f=n,g=n;return yt(n)?f=g={center:.5,edges:.5,end:1}[n]||0:!l&&u&&(f=n[0],g=n[1]),function(v,y,T){var w=(T||i).length,S=o[w],k,C,P,A,I,D,R,F,m;if(!S){if(m=i.grid==="auto"?0:(i.grid||[1,yi])[1],!m){for(R=-yi;R<(R=T[m++].getBoundingClientRect().left)&&m<w;);m<w&&m--}for(S=o[w]=[],k=u?Math.min(m,w)*f-.5:n%m,C=m===yi?0:u?w*g/m-.5:n/m|0,R=0,F=yi,D=0;D<w;D++)P=D%m-k,A=C-(D/m|0),S[D]=I=h?Math.abs(h==="y"?A:P):xl(P*P+A*A),I>R&&(R=I),I<F&&(F=I);n==="random"&&zl(S),S.max=R-F,S.min=F,S.v=w=(parseFloat(i.amount)||parseFloat(i.each)*(m>w?w-1:h?h==="y"?w/m:m:Math.max(m,w/m))||0)*(n==="edges"?-1:1),S.b=w<0?s-w:s,S.u=Pt(i.amount||i.each)||0,t=t&&w<0?Xl(t):t}return w=(S[v]-S.min)/S.max||0,Tt(S.b+(t?t(w):w)*S.v)+S.u}},Bo=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var n=Tt(Math.round(parseFloat(t)/e)*e*i);return(n-n%1)/i+(Xi(t)?0:Pt(t))}},Vl=function(e,i){var t=It(e),n,s;return!t&&Di(e)&&(n=t=e.radius||yi,e.values?(e=_i(e.values),(s=!Xi(e[0]))&&(n*=n)):e=Bo(e.increment)),fn(i,t?ot(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var l=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),h=yi,f=0,g=e.length,v,y;g--;)s?(v=e[g].x-l,y=e[g].y-u,v=v*v+y*y):v=Math.abs(e[g]-l),v<h&&(h=v,f=g);return f=!n||h<=n?e[f]:o,s||f===o||Xi(o)?f:f+Pt(o)}:Bo(e))},$l=function(e,i,t,n){return fn(It(e)?!i:t===!0?!!(t=0):!n,function(){return It(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(n=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(i-e+t*.99))/t)*t*n)/n})},vh=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(n){return i.reduce(function(s,o){return o(s)},n)}},wh=function(e,i){return function(t){return e(parseFloat(t))+(i||Pt(t))}},Th=function(e,i,t){return Hl(e,i,0,1,t)},ql=function(e,i,t){return fn(t,function(n){return e[~~i(n)]})},xh=function a(e,i,t){var n=i-e;return It(e)?ql(e,a(0,e.length),i):fn(t,function(s){return(n+(s-e)%n)%n+e})},Sh=function a(e,i,t){var n=i-e,s=n*2;return It(e)?ql(e,a(0,e.length-1),i):fn(t,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},ts=function(e){for(var i=0,t="",n,s,o,l;~(n=e.indexOf("random(",i));)o=e.indexOf(")",n),l=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(l?kl:Io),t+=e.substr(i,n-i)+$l(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),i=o+1;return t+e.substr(i,e.length-i)},Hl=function(e,i,t,n,s){var o=i-e,l=n-t;return fn(s,function(u){return t+((u-e)/o*l||0)})},kh=function a(e,i,t,n){var s=isNaN(e+i)?0:function(y){return(1-y)*e+y*i};if(!s){var o=yt(e),l={},u,h,f,g,v;if(t===!0&&(n=1)&&(t=null),o)e={p:e},i={p:i};else if(It(e)&&!It(i)){for(f=[],g=e.length,v=g-2,h=1;h<g;h++)f.push(a(e[h-1],e[h]));g--,s=function(T){T*=g;var w=Math.min(v,~~T);return f[w](T-w)},t=i}else n||(e=On(It(e)?[]:{},e));if(!f){for(u in i)Jo.call(l,e,u,"get",i[u]);s=function(T){return sa(T,l)||(o?e.p:e)}}}return fn(t,s)},bl=function(e,i,t){var n=e.labels,s=yi,o,l,u;for(o in n)l=n[o]-i,l<0==!!t&&l&&s>(l=Math.abs(l))&&(u=o,s=l);return u},ci=function(e,i,t){var n=e.vars,s=n[i],o=Ke,l=e._ctx,u,h,f;if(s)return u=n[i+"Params"],h=n.callbackScope||e,t&&hn.length&&fr(),l&&(Ke=l),f=u?s.apply(h,u):s.call(h),Ke=o,f},bs=function(e){return pn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!At),e.progress()<1&&ci(e,"onInterrupt"),e},Kn,jl=[],Ul=function(e){if(e)if(e=!e.name&&e.default||e,Ho()||e.headless){var i=e.name,t=ot(e),n=i&&!t&&e.init?function(){this._props=[]}:e,s={init:ks,render:sa,add:Jo,kill:$h,modifier:Vh,rawVars:0},o={targetTest:0,get:0,getSetter:xr,aliases:{},register:0};if(es(),e!==n){if(Zt[i])return;bi(n,bi(mr(e,s),o)),On(n.prototype,On(s,mr(e,o))),Zt[n.prop=i]=n,e.targetTest&&(hr.push(n),Wo[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Pl(i,n),e.register&&e.register(Rt,n,$t)}else jl.push(e)},qe=255,vs={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Co=function(e,i,t){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(t-i)*e*6:e<.5?t:e*3<2?i+(t-i)*(2/3-e)*6:i)*qe+.5|0},Yl=function(e,i,t){var n=e?Xi(e)?[e>>16,e>>8&qe,e&qe]:0:vs.black,s,o,l,u,h,f,g,v,y,T;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vs[e])n=vs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&qe,n&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(n=T=e.match(Io),!i)u=+n[0]%360/360,h=+n[1]/100,f=+n[2]/100,o=f<=.5?f*(h+1):f+h-f*h,s=f*2-o,n.length>3&&(n[3]*=1),n[0]=Co(u+1/3,s,o),n[1]=Co(u,s,o),n[2]=Co(u-1/3,s,o);else if(~e.indexOf("="))return n=e.match(jo),t&&n.length<4&&(n[3]=1),n}else n=e.match(Io)||vs.transparent;n=n.map(Number)}return i&&!T&&(s=n[0]/qe,o=n[1]/qe,l=n[2]/qe,g=Math.max(s,o,l),v=Math.min(s,o,l),f=(g+v)/2,g===v?u=h=0:(y=g-v,h=f>.5?y/(2-g-v):y/(g+v),u=g===s?(o-l)/y+(o<l?6:0):g===o?(l-s)/y+2:(s-o)/y+4,u*=60),n[0]=~~(u+.5),n[1]=~~(h*100+.5),n[2]=~~(f*100+.5)),t&&n.length<4&&(n[3]=1),n},Wl=function(e){var i=[],t=[],n=-1;return e.split(Wi).forEach(function(s){var o=s.match(An)||[];i.push.apply(i,o),t.push(n+=o.length+1)}),i.c=t,i},vl=function(e,i,t){var n="",s=(e+n).match(Wi),o=i?"hsla(":"rgba(",l=0,u,h,f,g;if(!s)return e;if(s=s.map(function(v){return(v=Yl(v,i,1))&&o+(i?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),t&&(f=Wl(e),u=t.c,u.join(n)!==f.c.join(n)))for(h=e.replace(Wi,"1").split(An),g=h.length-1;l<g;l++)n+=h[l]+(~u.indexOf(l)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:t).shift());if(!h)for(h=e.split(Wi),g=h.length-1;l<g;l++)n+=h[l]+s[l];return n+h[g]},Wi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vs)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),Ch=/hsl[a]?\(/,Qo=function(e){var i=e.join(" "),t;if(Wi.lastIndex=0,Wi.test(i))return t=Ch.test(i),e[1]=vl(e[1],t),e[0]=vl(e[0],t,Wl(e[1])),!0},Cs,Jt=function(){var a=Date.now,e=500,i=33,t=a(),n=t,s=1e3/240,o=s,l=[],u,h,f,g,v,y,T=function w(S){var k=a()-n,C=S===!0,P,A,I,D;if((k>e||k<0)&&(t+=k-i),n+=k,I=n-t,P=I-o,(P>0||C)&&(D=++g.frame,v=I-g.time*1e3,g.time=I=I/1e3,o+=P+(P>=s?4:s-P),A=1),C||(u=h(w)),A)for(y=0;y<l.length;y++)l[y](I,v,D,S)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Cl&&(!Ro&&Ho()&&(Ri=Ro=window,Yo=Ri.document||{},ui.gsap=Rt,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Rt.version),El(pr||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),jl.forEach(Ul)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&g.sleep(),h=f||function(S){return setTimeout(S,o-g.time*1e3+1|0)},Cs=1,T(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(u),Cs=0,h=ks},lagSmoothing:function(S,k){e=S||1/0,i=Math.min(k||33,e)},fps:function(S){s=1e3/(S||240),o=g.time*1e3+s},add:function(S,k,C){var P=k?function(A,I,D,R){S(A,I,D,R),g.remove(P)}:S;return g.remove(S),l[C?"unshift":"push"](P),es(),P},remove:function(S,k){~(k=l.indexOf(S))&&l.splice(k,1)&&y>=k&&y--},_listeners:l},g}(),es=function(){return!Cs&&Jt.wake()},Me={},Eh=/^[\d.\-M][\d.\-,\s]/,Ph=/["']/g,Mh=function(e){for(var i={},t=e.substr(1,e.length-3).split(":"),n=t[0],s=1,o=t.length,l,u,h;s<o;s++)u=t[s],l=s!==o-1?u.lastIndexOf(","):u.length,h=u.substr(0,l),i[n]=isNaN(h)?h.replace(Ph,"").trim():+h,n=u.substr(l+1).trim();return i},Oh=function(e){var i=e.indexOf("(")+1,t=e.indexOf(")"),n=e.indexOf("(",i);return e.substring(i,~n&&n<t?e.indexOf(")",t+1):t)},Ah=function(e){var i=(e+"").split("("),t=Me[i[0]];return t&&i.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Mh(i[1])]:Oh(e).split(",").map(Al)):Me._CE&&Eh.test(e)?Me._CE("",e):t},Xl=function(e){return function(i){return 1-e(1-i)}},Gl=function a(e,i){for(var t=e._first,n;t;)t instanceof Et?a(t,i):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==i&&(t.timeline?a(t.timeline,i):(n=t._ease,t._ease=t._yEase,t._yEase=n,t._yoyo=i)),t=t._next},Pn=function(e,i){return e&&(ot(e)?e:Me[e]||Ah(e))||i},Rn=function(e,i,t,n){t===void 0&&(t=function(u){return 1-i(1-u)}),n===void 0&&(n=function(u){return u<.5?i(u*2)/2:1-i((1-u)*2)/2});var s={easeIn:i,easeOut:t,easeInOut:n},o;return Vt(e,function(l){Me[l]=ui[l]=s,Me[o=l.toLowerCase()]=t;for(var u in s)Me[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Me[l+"."+u]=s[u]}),s},Kl=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},Eo=function a(e,i,t){var n=i>=1?i:1,s=(t||(e?.3:.45))/(i<1?i:1),o=s/Ao*(Math.asin(1/n)||0),l=function(f){return f===1?1:n*Math.pow(2,-10*f)*rh((f-o)*s)+1},u=e==="out"?l:e==="in"?function(h){return 1-l(1-h)}:Kl(l);return s=Ao/s,u.config=function(h,f){return a(e,h,f)},u},Po=function a(e,i){i===void 0&&(i=1.70158);var t=function(o){return o?--o*o*((i+1)*o+i)+1:0},n=e==="out"?t:e==="in"?function(s){return 1-t(1-s)}:Kl(t);return n.config=function(s){return a(e,s)},n};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var i=e<5?e+1:e;Rn(a+",Power"+(i-1),e?function(t){return Math.pow(t,i)}:function(t){return t},function(t){return 1-Math.pow(1-t,i)},function(t){return t<.5?Math.pow(t*2,i)/2:1-Math.pow((1-t)*2,i)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Rn("Elastic",Eo("in"),Eo("out"),Eo());(function(a,e){var i=1/e,t=2*i,n=2.5*i,s=function(l){return l<i?a*l*l:l<t?a*Math.pow(l-1.5/e,2)+.75:l<n?a*(l-=2.25/e)*l+.9375:a*Math.pow(l-2.625/e,2)+.984375};Rn("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rn("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Rn("Circ",function(a){return-(xl(1-a*a)-1)});Rn("Sine",function(a){return a===1?1:-sh(a*ih)+1});Rn("Back",Po("in"),Po("out"),Po());Me.SteppedEase=Me.steps=ui.SteppedEase={config:function(e,i){e===void 0&&(e=1);var t=1/e,n=e+(i?0:1),s=i?1:0,o=1-Ue;return function(l){return((n*Ps(0,o,l)|0)+s)*t}}};Qn.ease=Me["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Xo+=a+","+a+"Params,"});var Zo=function(e,i){this.id=nh++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Ko,this.set=i?i.getSetter:xr},Es=function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,Jn(this,+i.duration,1,1),this.data=i.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),Cs||Jt.wake()}var e=a.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Jn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,n){if(es(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tr(this,t),!s._dp||s.parent||Ll(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ue||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Ol(this,t,n)),this},e.time=function(t,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+yl(this))%(this._dur+this._rDelay)||(t?this._dur:0),n):this._time},e.totalProgress=function(t,n){return arguments.length?this.totalTime(this.totalDuration()*t,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+yl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*s,n):this._repeat?Zn(this._tTime,s)+1:1},e.timeScale=function(t,n){if(!arguments.length)return this._rts===-Ue?0:this._rts;if(this._rts===t)return this;var s=this.parent&&this._ts?gr(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Ue?0:this._rts,this.totalTime(Ps(-Math.abs(this._delay),this._tDur,s),n!==!1),wr(this),dh(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ue&&(this._tTime-=Ue)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Li(n,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(ei(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var n=this.parent||this._dp;return n?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gr(n.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=lh);var n=At;return At=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),At=n,this},e.globalTime=function(t){for(var n=this,s=arguments.length?t:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(t):s},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,_l(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var n=this._time;return this._rDelay=t,_l(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,n){return this.totalTime(gi(this,t),ei(n))},e.restart=function(t,n){return this.play().totalTime(t?-this._delay:0,ei(n))},e.play=function(t,n){return t!=null&&this.seek(t,n),this.reversed(!1).paused(!1)},e.reverse=function(t,n){return t!=null&&this.seek(t||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(t,n){return t!=null&&this.seek(t,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Ue:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ue,this},e.isActive=function(){var t=this.parent||this._dp,n=this._start,s;return!!(!t||this._ts&&this._initted&&t.isActive()&&(s=t.rawTime(!0))>=n&&s<this.endTime(!0)-Ue)},e.eventCallback=function(t,n,s){var o=this.vars;return arguments.length>1?(n?(o[t]=n,s&&(o[t+"Params"]=s),t==="onUpdate"&&(this._onUpdate=n)):delete o[t],this):o[t]},e.then=function(t){var n=this;return new Promise(function(s){var o=ot(t)?t:Il,l=function(){var h=n.then;n.then=null,ot(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),s(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){bs(this)},a}();bi(Es.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ue,_prom:0,_ps:!1,_rts:1});var Et=function(a){Tl(e,a);function e(t,n){var s;return t===void 0&&(t={}),s=a.call(this,t)||this,s.labels={},s.smoothChildTiming=!!t.smoothChildTiming,s.autoRemoveChildren=!!t.autoRemoveChildren,s._sort=ei(t.sortChildren),Ze&&Li(t.parent||Ze,Yi(s),n),t.reversed&&s.reverse(),t.paused&&s.paused(!0),t.scrollTrigger&&Dl(Yi(s),t.scrollTrigger),s}var i=e.prototype;return i.to=function(n,s,o){return Ts(0,arguments,this),this},i.from=function(n,s,o){return Ts(1,arguments,this),this},i.fromTo=function(n,s,o,l){return Ts(2,arguments,this),this},i.set=function(n,s,o){return s.duration=0,s.parent=this,ws(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ht(n,s,gi(this,o),1),this},i.call=function(n,s,o){return Li(this,ht.delayedCall(0,n,s),o)},i.staggerTo=function(n,s,o,l,u,h,f){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=h,o.onCompleteParams=f,o.parent=this,new ht(n,o,gi(this,u)),this},i.staggerFrom=function(n,s,o,l,u,h,f){return o.runBackwards=1,ws(o).immediateRender=ei(o.immediateRender),this.staggerTo(n,s,o,l,u,h,f)},i.staggerFromTo=function(n,s,o,l,u,h,f,g){return l.startAt=o,ws(l).immediateRender=ei(l.immediateRender),this.staggerTo(n,s,l,u,h,f,g)},i.render=function(n,s,o){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,f=n<=0?0:Tt(n),g=this._zTime<0!=n<0&&(this._initted||!h),v,y,T,w,S,k,C,P,A,I,D,R;if(this!==Ze&&f>u&&n>=0&&(f=u),f!==this._tTime||o||g){if(l!==this._time&&h&&(f+=this._time-l,n+=this._time-l),v=f,A=this._start,P=this._ts,k=!P,g&&(h||(l=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(D=this._yoyo,S=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(S*100+n,s,o);if(v=Tt(f%S),f===u?(w=this._repeat,v=h):(w=~~(f/S),w&&w===f/S&&(v=h,w--),v>h&&(v=h)),I=Zn(this._tTime,S),!l&&this._tTime&&I!==w&&this._tTime-I*S-this._dur<=0&&(I=w),D&&w&1&&(v=h-v,R=1),w!==I&&!this._lock){var F=D&&I&1,m=F===(D&&w&1);if(w<I&&(F=!F),l=F?0:f%h?h:f,this._lock=1,this.render(l||(R?0:Tt(w*S)),s,!h)._lock=0,this._tTime=f,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),l&&l!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,m&&(this._lock=2,l=F?h:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Gl(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=gh(this,Tt(l),Tt(v)),C&&(f-=v-(v=C._start))),this._tTime=f,this._time=v,this._act=!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,l=0),!l&&v&&!s&&!w&&(ci(this,"onStart"),this._tTime!==f))return this;if(v>=l&&n>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&C!==y){if(y.parent!==this)return this.render(n,s,o);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,s,o),v!==this._time||!this._ts&&!k){C=0,T&&(f+=this._zTime=-Ue);break}}y=T}else{y=this._last;for(var L=n<0?n:v;y;){if(T=y._prev,(y._act||L<=y._end)&&y._ts&&C!==y){if(y.parent!==this)return this.render(n,s,o);if(y.render(y._ts>0?(L-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(L-y._start)*y._ts,s,o||At&&(y._initted||y._startAt)),v!==this._time||!this._ts&&!k){C=0,T&&(f+=this._zTime=L?-Ue:Ue);break}}y=T}}if(C&&!s&&(this.pause(),C.render(v>=l?0:-Ue)._zTime=v>=l?1:-1,this._ts))return this._start=A,wr(this),this.render(n,s,o);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&l)&&(A===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(f===u&&this._ts>0||!f&&this._ts<0)&&pn(this,1),!s&&!(n<0&&!l)&&(f||l||!u)&&(ci(this,f===u&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(n,s){var o=this;if(Xi(s)||(s=gi(this,s,n)),!(n instanceof Es)){if(It(n))return n.forEach(function(l){return o.add(l,s)}),this;if(yt(n))return this.addLabel(n,s);if(ot(n))n=ht.delayedCall(0,n);else return this}return this!==n?Li(this,n,s):this},i.getChildren=function(n,s,o,l){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-yi);for(var u=[],h=this._first;h;)h._start>=l&&(h instanceof ht?s&&u.push(h):(o&&u.push(h),n&&u.push.apply(u,h.getChildren(!0,s,o)))),h=h._next;return u},i.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},i.remove=function(n){return yt(n)?this.removeLabel(n):ot(n)?this.killTweensOf(n):(vr(this,n),n===this._recent&&(this._recent=this._last),En(this))},i.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Jt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},i.addLabel=function(n,s){return this.labels[n]=gi(this,s),this},i.removeLabel=function(n){return delete this.labels[n],this},i.addPause=function(n,s,o){var l=ht.delayedCall(0,s||ks,o);return l.data="isPause",this._hasPause=1,Li(this,l,gi(this,n))},i.removePause=function(n){var s=this._first;for(n=gi(this,n);s;)s._start===n&&s.data==="isPause"&&pn(s),s=s._next},i.killTweensOf=function(n,s,o){for(var l=this.getTweensOf(n,o),u=l.length;u--;)un!==l[u]&&l[u].kill(n,s);return this},i.getTweensOf=function(n,s){for(var o=[],l=_i(n),u=this._first,h=Xi(s),f;u;)u instanceof ht?ch(u._targets,l)&&(h?(!un||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(f=u.getTweensOf(l,s)).length&&o.push.apply(o,f),u=u._next;return o},i.tweenTo=function(n,s){s=s||{};var o=this,l=gi(o,n),u=s,h=u.startAt,f=u.onStart,g=u.onStartParams,v=u.immediateRender,y,T=ht.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(h&&"time"in h?h.time:o._time))/o.timeScale())||Ue,onStart:function(){if(o.pause(),!y){var S=s.duration||Math.abs((l-(h&&"time"in h?h.time:o._time))/o.timeScale());T._dur!==S&&Jn(T,S,0,1).render(T._time,!0,!0),y=1}f&&f.apply(T,g||[])}},s));return v?T.render(0):T},i.tweenFromTo=function(n,s,o){return this.tweenTo(s,bi({startAt:{time:gi(this,n)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(n){return n===void 0&&(n=this._time),bl(this,gi(this,n))},i.previousLabel=function(n){return n===void 0&&(n=this._time),bl(this,gi(this,n),1)},i.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ue)},i.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var l=this._first,u=this.labels,h;l;)l._start>=o&&(l._start+=n,l._end+=n),l=l._next;if(s)for(h in u)u[h]>=o&&(u[h]+=n);return En(this)},i.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return a.prototype.invalidate.call(this,n)},i.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),En(this)},i.totalDuration=function(n){var s=0,o=this,l=o._last,u=yi,h,f,g;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(g=o.parent;l;)h=l._prev,l._dirty&&l.totalDuration(),f=l._start,f>u&&o._sort&&l._ts&&!o._lock?(o._lock=1,Li(o,l,f-l._delay,1)._lock=0):u=f,f<0&&l._ts&&(s-=f,(!g&&!o._dp||g&&g.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=h;Jn(o,o===Ze&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Ze._ts&&(Ol(Ze,gr(n,Ze)),Ml=Jt.frame),Jt.frame>=ml){ml+=ti.autoSleep||120;var s=Ze._first;if((!s||!s._ts)&&ti.autoSleep&&Jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jt.sleep()}}},e}(Es);bi(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ih=function(e,i,t,n,s,o,l){var u=new $t(this._pt,e,i,0,1,na,null,s),h=0,f=0,g,v,y,T,w,S,k,C;for(u.b=t,u.e=n,t+="",n+="",(k=~n.indexOf("random("))&&(n=ts(n)),o&&(C=[t,n],o(C,e,i),t=C[0],n=C[1]),v=t.match(So)||[];g=So.exec(n);)T=g[0],w=n.substring(h,g.index),y?y=(y+1)%5:w.substr(-5)==="rgba("&&(y=1),T!==v[f++]&&(S=parseFloat(v[f-1])||0,u._pt={_next:u._pt,p:w||f===1?w:",",s:S,c:T.charAt(1)==="="?In(S,T)-S:parseFloat(T)-S,m:y&&y<4?Math.round:0},h=So.lastIndex);return u.c=h<n.length?n.substring(h,n.length):"",u.fp=l,(Uo.test(n)||k)&&(u.e=0),this._pt=u,u},Jo=function(e,i,t,n,s,o,l,u,h,f){ot(n)&&(n=n(s||0,e,o));var g=e[i],v=t!=="get"?t:ot(g)?h?e[i.indexOf("set")||!ot(e["get"+i.substr(3)])?i:"get"+i.substr(3)](h):e[i]():g,y=ot(g)?h?Fh:Jl:ia,T;if(yt(n)&&(~n.indexOf("random(")&&(n=ts(n)),n.charAt(1)==="="&&(T=In(v,n)+(Pt(v)||0),(T||T===0)&&(n=T))),!f||v!==n||Vo)return!isNaN(v*n)&&n!==""?(T=new $t(this._pt,e,i,+v||0,n-(v||0),typeof g=="boolean"?Bh:ec,0,y),h&&(T.fp=h),l&&T.modifier(l,this,e),this._pt=T):(!g&&!(i in e)&&br(i,n),Ih.call(this,e,i,v,n,y,u||ti.stringFilter,h))},Rh=function(e,i,t,n,s){if(ot(e)&&(e=xs(e,s,i,t,n)),!Di(e)||e.style&&e.nodeType||It(e)||Sl(e))return yt(e)?xs(e,s,i,t,n):e;var o={},l;for(l in e)o[l]=xs(e[l],s,i,t,n);return o},ea=function(e,i,t,n,s,o){var l,u,h,f;if(Zt[e]&&(l=new Zt[e]).init(s,l.rawVars?i[e]:Rh(i[e],n,s,o,t),t,n,o)!==!1&&(t._pt=u=new $t(t._pt,s,e,0,1,l.render,l,0,l.priority),t!==Kn))for(h=t._ptLookup[t._targets.indexOf(s)],f=l._props.length;f--;)h[l._props[f]]=u;return l},un,Vo,ta=function a(e,i,t){var n=e.vars,s=n.ease,o=n.startAt,l=n.immediateRender,u=n.lazy,h=n.onUpdate,f=n.runBackwards,g=n.yoyoEase,v=n.keyframes,y=n.autoRevert,T=e._dur,w=e._startAt,S=e._targets,k=e.parent,C=k&&k.data==="nested"?k.vars.targets:S,P=e._overwrite==="auto"&&!qo,A=e.timeline,I,D,R,F,m,L,W,z,ne,U,q,se,V;if(A&&(!v||!s)&&(s="none"),e._ease=Pn(s,Qn.ease),e._yEase=g?Xl(Pn(g===!0?s:g,Qn.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!A&&!!n.runBackwards,!A||v&&!n.stagger){if(z=S[0]?dn(S[0]).harness:0,se=z&&n[z.prop],I=mr(n,Wo),w&&(w._zTime<0&&w.progress(1),i<0&&f&&l&&!y?w.render(-1,!0):w.revert(f&&T?ur:ah),w._lazy=0),o){if(pn(e._startAt=ht.set(S,bi({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!w&&ei(u),startAt:null,delay:0,onUpdate:h&&function(){return ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(At||!l&&!y)&&e._startAt.revert(ur),l&&T&&i<=0&&t<=0){i&&(e._zTime=i);return}}else if(f&&T&&!w){if(i&&(l=!1),R=bi({overwrite:!1,data:"isFromStart",lazy:l&&!w&&ei(u),immediateRender:l,stagger:0,parent:k},I),se&&(R[z.prop]=se),pn(e._startAt=ht.set(S,R)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(At?e._startAt.revert(ur):e._startAt.render(-1,!0)),e._zTime=i,!l)a(e._startAt,Ue,Ue);else if(!i)return}for(e._pt=e._ptCache=0,u=T&&ei(u)||u&&!T,D=0;D<S.length;D++){if(m=S[D],W=m._gsap||Go(S)[D]._gsap,e._ptLookup[D]=U={},Lo[W.id]&&hn.length&&fr(),q=C===S?D:C.indexOf(m),z&&(ne=new z).init(m,se||I,e,q,C)!==!1&&(e._pt=F=new $t(e._pt,m,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(ye){U[ye]=F}),ne.priority&&(L=1)),!z||se)for(R in I)Zt[R]&&(ne=ea(R,I,e,q,m,C))?ne.priority&&(L=1):U[R]=F=Jo.call(e,m,R,"get",I[R],q,C,0,n.stringFilter);e._op&&e._op[D]&&e.kill(m,e._op[D]),P&&e._pt&&(un=e,Ze.killTweensOf(m,U,e.globalTime(i)),V=!e.parent,un=0),e._pt&&u&&(Lo[W.id]=1)}L&&ra(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!V,v&&i<=0&&A.render(yi,!0,!0)},Lh=function(e,i,t,n,s,o,l,u){var h=(e._pt&&e._ptCache||(e._ptCache={}))[i],f,g,v,y;if(!h)for(h=e._ptCache[i]=[],v=e._ptLookup,y=e._targets.length;y--;){if(f=v[y][i],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==i&&f.fp!==i;)f=f._next;if(!f)return Vo=1,e.vars[i]="+=0",ta(e,l),Vo=0,u?Ss(i+" not eligible for reset"):1;h.push(f)}for(y=h.length;y--;)g=h[y],f=g._pt||g,f.s=(n||n===0)&&!s?n:f.s+(n||0)+o*f.c,f.c=t-f.s,g.e&&(g.e=at(t)+Pt(g.e)),g.b&&(g.b=f.s+Pt(g.b))},Dh=function(e,i){var t=e[0]?dn(e[0]).harness:0,n=t&&t.aliases,s,o,l,u;if(!n)return i;s=On({},i);for(o in n)if(o in s)for(u=n[o].split(","),l=u.length;l--;)s[u[l]]=s[o];return s},Nh=function(e,i,t,n){var s=i.ease||n||"power1.inOut",o,l;if(It(i))l=t[e]||(t[e]=[]),i.forEach(function(u,h){return l.push({t:h/(i.length-1)*100,v:u,e:s})});else for(o in i)l=t[o]||(t[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:i[o],e:s})},xs=function(e,i,t,n,s){return ot(e)?e.call(i,t,n,s):yt(e)&&~e.indexOf("random(")?ts(e):e},Ql=Xo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zl={};Vt(Ql+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Zl[a]=1});var ht=function(a){Tl(e,a);function e(t,n,s,o){var l;typeof n=="number"&&(s.duration=n,n=s,s=null),l=a.call(this,o?n:ws(n))||this;var u=l.vars,h=u.duration,f=u.delay,g=u.immediateRender,v=u.stagger,y=u.overwrite,T=u.keyframes,w=u.defaults,S=u.scrollTrigger,k=u.yoyoEase,C=n.parent||Ze,P=(It(t)||Sl(t)?Xi(t[0]):"length"in n)?[t]:_i(t),A,I,D,R,F,m,L,W;if(l._targets=P.length?Go(P):Ss("GSAP target "+t+" not found. https://gsap.com",!ti.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=y,T||v||cr(h)||cr(f)){if(n=l.vars,A=l.timeline=new Et({data:"nested",defaults:w||{},targets:C&&C.data==="nested"?C.vars.targets:P}),A.kill(),A.parent=A._dp=Yi(l),A._start=0,v||cr(h)||cr(f)){if(R=P.length,L=v&&Bl(v),Di(v))for(F in v)~Ql.indexOf(F)&&(W||(W={}),W[F]=v[F]);for(I=0;I<R;I++)D=mr(n,Zl),D.stagger=0,k&&(D.yoyoEase=k),W&&On(D,W),m=P[I],D.duration=+xs(h,Yi(l),I,m,P),D.delay=(+xs(f,Yi(l),I,m,P)||0)-l._delay,!v&&R===1&&D.delay&&(l._delay=f=D.delay,l._start+=f,D.delay=0),A.to(m,D,L?L(I,m,P):0),A._ease=Me.none;A.duration()?h=f=0:l.timeline=0}else if(T){ws(bi(A.vars.defaults,{ease:"none"})),A._ease=Pn(T.ease||n.ease||"none");var z=0,ne,U,q;if(It(T))T.forEach(function(se){return A.to(P,se,">")}),A.duration();else{D={};for(F in T)F==="ease"||F==="easeEach"||Nh(F,T[F],D,T.easeEach);for(F in D)for(ne=D[F].sort(function(se,V){return se.t-V.t}),z=0,I=0;I<ne.length;I++)U=ne[I],q={ease:U.e,duration:(U.t-(I?ne[I-1].t:0))/100*h},q[F]=U.v,A.to(P,q,z),z+=q.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||l.duration(h=A.duration())}else l.timeline=0;return y===!0&&!qo&&(un=Yi(l),Ze.killTweensOf(P),un=0),Li(C,Yi(l),s),n.reversed&&l.reverse(),n.paused&&l.paused(!0),(g||!h&&!T&&l._start===Tt(C._time)&&ei(g)&&ph(Yi(l))&&C.data!=="nested")&&(l._tTime=-Ue,l.render(Math.max(0,-f)||0)),S&&Dl(Yi(l),S),l}var i=e.prototype;return i.render=function(n,s,o){var l=this._time,u=this._tDur,h=this._dur,f=n<0,g=n>u-Ue&&!f?u:n<Ue?0:n,v,y,T,w,S,k,C,P,A;if(!h)mh(this,n,s,o);else if(g!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(v=g,P=this.timeline,this._repeat){if(w=h+this._rDelay,this._repeat<-1&&f)return this.totalTime(w*100+n,s,o);if(v=Tt(g%w),g===u?(T=this._repeat,v=h):(T=~~(g/w),T&&T===Tt(g/w)&&(v=h,T--),v>h&&(v=h)),k=this._yoyo&&T&1,k&&(A=this._yEase,v=h-v),S=Zn(this._tTime,w),v===l&&!o&&this._initted&&T===S)return this._tTime=g,this;T!==S&&(P&&this._yEase&&Gl(P,k),this.vars.repeatRefresh&&!k&&!this._lock&&this._time!==w&&this._initted&&(this._lock=o=1,this.render(Tt(w*T),!0).invalidate()._lock=0))}if(!this._initted){if(Nl(this,f?n:v,o,s,g))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&T!==S))return this;if(h!==this._dur)return this.render(n,s,o)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(A||this._ease)(v/h),this._from&&(this.ratio=C=1-C),v&&!l&&!s&&!T&&(ci(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(C,y.d),y=y._next;P&&P.render(n<0?n:P._dur*P._ease(v/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(f&&Do(this,n,s,o),ci(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(f&&!this._onUpdate&&Do(this,n,!0,!0),(n||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&pn(this,1),!s&&!(f&&!l)&&(g||l||k)&&(ci(this,g===u?"onComplete":"onReverseComplete",!0),this._prom&&!(g<u&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},i.resetTo=function(n,s,o,l,u){Cs||Jt.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||ta(this,h),f=this._ease(h/this._dur),Lh(this,n,s,o,l,f,h,u)?this.resetTo(n,s,o,l,1):(Tr(this,0),this.parent||Rl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,un&&un.vars.overwrite!==!0)._first||bs(this),this.parent&&o!==this.timeline.totalDuration()&&Jn(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,u=n?_i(n):l,h=this._ptLookup,f=this._pt,g,v,y,T,w,S,k;if((!s||s==="all")&&hh(l,u))return s==="all"&&(this._pt=0),bs(this);for(g=this._op=this._op||[],s!=="all"&&(yt(s)&&(w={},Vt(s,function(C){return w[C]=1}),s=w),s=Dh(l,s)),k=l.length;k--;)if(~u.indexOf(l[k])){v=h[k],s==="all"?(g[k]=s,T=v,y={}):(y=g[k]=g[k]||{},T=s);for(w in T)S=v&&v[w],S&&((!("kill"in S.d)||S.d.kill(w)===!0)&&vr(this,S,"_pt"),delete v[w]),y!=="all"&&(y[w]=1)}return this._initted&&!this._pt&&f&&bs(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Ts(1,arguments)},e.delayedCall=function(n,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(n,s,o){return Ts(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Ze.killTweensOf(n,s,o)},e}(Es);bi(ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(a){ht[a]=function(){var e=new Et,i=Fo.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,i)}});var ia=function(e,i,t){return e[i]=t},Jl=function(e,i,t){return e[i](t)},Fh=function(e,i,t,n){return e[i](n.fp,t)},zh=function(e,i,t){return e.setAttribute(i,t)},xr=function(e,i){return ot(e[i])?Jl:_r(e[i])&&e.setAttribute?zh:ia},ec=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},Bh=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},na=function(e,i){var t=i._pt,n="";if(!e&&i.b)n=i.b;else if(e===1&&i.e)n=i.e;else{for(;t;)n=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+n,t=t._next;n+=i.c}i.set(i.t,i.p,n,i)},sa=function(e,i){for(var t=i._pt;t;)t.r(e,t.d),t=t._next},Vh=function(e,i,t,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,i,t),s=o},$h=function(e){for(var i=this._pt,t,n;i;)n=i._next,i.p===e&&!i.op||i.op===e?vr(this,i,"_pt"):i.dep||(t=1),i=n;return!t},qh=function(e,i,t,n){n.mSet(e,i,n.m.call(n.tween,t,n.mt),n)},ra=function(e){for(var i=e._pt,t,n,s,o;i;){for(t=i._next,n=s;n&&n.pr>i.pr;)n=n._next;(i._prev=n?n._prev:o)?i._prev._next=i:s=i,(i._next=n)?n._prev=i:o=i,i=t}e._pt=s},$t=function(){function a(i,t,n,s,o,l,u,h,f){this.t=t,this.s=s,this.c=o,this.p=n,this.r=l||ec,this.d=u||this,this.set=h||ia,this.pr=f||0,this._next=i,i&&(i._prev=this)}var e=a.prototype;return e.modifier=function(t,n,s){this.mSet=this.mSet||this.set,this.set=qh,this.m=t,this.mt=s,this.tween=n},a}();Vt(Xo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Wo[a]=1});ui.TweenMax=ui.TweenLite=ht;ui.TimelineLite=ui.TimelineMax=Et;Ze=new Et({sortChildren:!1,defaults:Qn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=Qo;var Mn=[],dr={},Hh=[],wl=0,jh=0,Mo=function(e){return(dr[e]||Hh).map(function(i){return i()})},$o=function(){var e=Date.now(),i=[];e-wl>2&&(Mo("matchMediaInit"),Mn.forEach(function(t){var n=t.queries,s=t.conditions,o,l,u,h;for(l in n)o=Ri.matchMedia(n[l]).matches,o&&(u=1),o!==s[l]&&(s[l]=o,h=1);h&&(t.revert(),u&&i.push(t))}),Mo("matchMediaRevert"),i.forEach(function(t){return t.onMatch(t,function(n){return t.add(null,n)})}),wl=e,Mo("matchMedia"))},tc=function(){function a(i,t){this.selector=t&&zo(t),this.data=[],this._r=[],this.isReverted=!1,this.id=jh++,i&&this.add(i)}var e=a.prototype;return e.add=function(t,n,s){ot(t)&&(s=n,n=t,t=ot);var o=this,l=function(){var h=Ke,f=o.selector,g;return h&&h!==o&&h.data.push(o),s&&(o.selector=zo(s)),Ke=o,g=n.apply(o,arguments),ot(g)&&o._r.push(g),Ke=h,o.selector=f,o.isReverted=!1,g};return o.last=l,t===ot?l(o,function(u){return o.add(null,u)}):t?o[t]=l:l},e.ignore=function(t){var n=Ke;Ke=null,t(this),Ke=n},e.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof a?t.push.apply(t,n.getTweens()):n instanceof ht&&!(n.parent&&n.parent.data==="nested")&&t.push(n)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,n){var s=this;if(t?function(){for(var l=s.getTweens(),u=s.data.length,h;u--;)h=s.data[u],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(f){return l.splice(l.indexOf(f),1)}));for(l.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,g){return g.g-f.g||-1/0}).forEach(function(f){return f.t.revert(t)}),u=s.data.length;u--;)h=s.data[u],h instanceof Et?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof ht)&&h.revert&&h.revert(t);s._r.forEach(function(f){return f(t,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),n)for(var o=Mn.length;o--;)Mn[o].id===this.id&&Mn.splice(o,1)},e.revert=function(t){this.kill(t||{})},a}(),Uh=function(){function a(i){this.contexts=[],this.scope=i,Ke&&Ke.data.push(this)}var e=a.prototype;return e.add=function(t,n,s){Di(t)||(t={matches:t});var o=new tc(0,s||this.scope),l=o.conditions={},u,h,f;Ke&&!o.selector&&(o.selector=Ke.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=t;for(h in t)h==="all"?f=1:(u=Ri.matchMedia(t[h]),u&&(Mn.indexOf(o)<0&&Mn.push(o),(l[h]=u.matches)&&(f=1),u.addListener?u.addListener($o):u.addEventListener("change",$o)));return f&&n(o,function(g){return o.add(null,g)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(n){return n.kill(t,!0)})},a}(),yr={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];i.forEach(function(n){return Ul(n)})},timeline:function(e){return new Et(e)},getTweensOf:function(e,i){return Ze.getTweensOf(e,i)},getProperty:function(e,i,t,n){yt(e)&&(e=_i(e)[0]);var s=dn(e||{}).get,o=t?Il:Al;return t==="native"&&(t=""),e&&(i?o((Zt[i]&&Zt[i].get||s)(e,i,t,n)):function(l,u,h){return o((Zt[l]&&Zt[l].get||s)(e,l,u,h))})},quickSetter:function(e,i,t){if(e=_i(e),e.length>1){var n=e.map(function(f){return Rt.quickSetter(f,i,t)}),s=n.length;return function(f){for(var g=s;g--;)n[g](f)}}e=e[0]||{};var o=Zt[i],l=dn(e),u=l.harness&&(l.harness.aliases||{})[i]||i,h=o?function(f){var g=new o;Kn._pt=0,g.init(e,t?f+t:f,Kn,0,[e]),g.render(1,g),Kn._pt&&sa(1,Kn)}:l.set(e,u);return o?h:function(f){return h(e,u,t?f+t:f,l,1)}},quickTo:function(e,i,t){var n,s=Rt.to(e,On((n={},n[i]="+=0.1",n.paused=!0,n),t||{})),o=function(u,h,f){return s.resetTo(i,u,h,f)};return o.tween=s,o},isTweening:function(e){return Ze.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pn(e.ease,Qn.ease)),gl(Qn,e||{})},config:function(e){return gl(ti,e||{})},registerEffect:function(e){var i=e.name,t=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(l){return l&&!Zt[l]&&!ui[l]&&Ss(i+" effect requires "+l+" plugin.")}),ko[i]=function(l,u,h){return t(_i(l),bi(u||{},s),h)},o&&(Et.prototype[i]=function(l,u,h){return this.add(ko[i](l,Di(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,i){Me[e]=Pn(i)},parseEase:function(e,i){return arguments.length?Pn(e,i):Me},getById:function(e){return Ze.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var t=new Et(e),n,s;for(t.smoothChildTiming=ei(e.smoothChildTiming),Ze.remove(t),t._dp=0,t._time=t._tTime=Ze._time,n=Ze._first;n;)s=n._next,(i||!(!n._dur&&n instanceof ht&&n.vars.onComplete===n._targets[0]))&&Li(t,n,n._start-n._delay),n=s;return Li(Ze,t,0),t},context:function(e,i){return e?new tc(e,i):Ke},matchMedia:function(e){return new Uh(e)},matchMediaRefresh:function(){return Mn.forEach(function(e){var i=e.conditions,t,n;for(n in i)i[n]&&(i[n]=!1,t=1);t&&e.revert()})||$o()},addEventListener:function(e,i){var t=dr[e]||(dr[e]=[]);~t.indexOf(i)||t.push(i)},removeEventListener:function(e,i){var t=dr[e],n=t&&t.indexOf(i);n>=0&&t.splice(n,1)},utils:{wrap:xh,wrapYoyo:Sh,distribute:Bl,random:$l,snap:Vl,normalize:Th,getUnit:Pt,clamp:_h,splitColor:Yl,toArray:_i,selector:zo,mapRange:Hl,pipe:vh,unitize:wh,interpolate:kh,shuffle:zl},install:El,effects:ko,ticker:Jt,updateRoot:Et.updateRoot,plugins:Zt,globalTimeline:Ze,core:{PropTween:$t,globals:Pl,Tween:ht,Timeline:Et,Animation:Es,getCache:dn,_removeLinkedListItem:vr,reverting:function(){return At},context:function(e){return e&&Ke&&(Ke.data.push(e),e._ctx=Ke),Ke},suppressOverwrites:function(e){return qo=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return yr[a]=ht[a]});Jt.add(Et.updateRoot);Kn=yr.to({},{duration:0});var Yh=function(e,i){for(var t=e._pt;t&&t.p!==i&&t.op!==i&&t.fp!==i;)t=t._next;return t},Wh=function(e,i){var t=e._targets,n,s,o;for(n in i)for(s=t.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Yh(o,n)),o&&o.modifier&&o.modifier(i[n],e,t[s],n))},Oo=function(e,i){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(l){var u,h;if(yt(s)&&(u={},Vt(s,function(f){return u[f]=1}),s=u),i){u={};for(h in s)u[h]=i(s[h]);s=u}Wh(l,s)}}}},Rt=yr.registerPlugin({name:"attr",init:function(e,i,t,n,s){var o,l,u;this.tween=t;for(o in i)u=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(u||0)+"",i[o],n,s,0,0,o),l.op=o,l.b=u,this._props.push(o)},render:function(e,i){for(var t=i._pt;t;)At?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",init:function(e,i){for(var t=i.length;t--;)this.add(e,t,e[t]||0,i[t],0,0,0,0,0,1)}},Oo("roundProps",Bo),Oo("modifiers"),Oo("snap",Vl))||yr;ht.version=Et.version=Rt.version="3.12.5";Cl=1;Ho()&&es();var Xh=Me.Power0,Gh=Me.Power1,Kh=Me.Power2,Qh=Me.Power3,Zh=Me.Power4,Jh=Me.Linear,ed=Me.Quad,td=Me.Cubic,id=Me.Quart,nd=Me.Quint,sd=Me.Strong,rd=Me.Elastic,od=Me.Back,ad=Me.SteppedEase,ld=Me.Bounce,cd=Me.Sine,ud=Me.Expo,hd=Me.Circ;var ic,mn,ns,da,Fn,dd,nc,pa,pd=function(){return typeof window<"u"},Ki={},Nn=180/Math.PI,ss=Math.PI/180,is=Math.atan2,sc=1e8,fa=/([A-Z])/g,fd=/(left|right|width|margin|padding|x)/i,md=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},la=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},gd=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},yd=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},_d=function(e,i){var t=i.s+i.c*e;i.set(i.t,i.p,~~(t+(t<0?-.5:.5))+i.u,i)},hc=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},dc=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},bd=function(e,i,t){return e.style[i]=t},vd=function(e,i,t){return e.style.setProperty(i,t)},wd=function(e,i,t){return e._gsap[i]=t},Td=function(e,i,t){return e._gsap.scaleX=e._gsap.scaleY=t},xd=function(e,i,t,n,s){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(s,o)},Sd=function(e,i,t,n,s){var o=e._gsap;o[i]=t,o.renderTransform(s,o)},Je="transform",ii=Je+"Origin",kd=function a(e,i){var t=this,n=this.target,s=n.style,o=n._gsap;if(e in Ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return t.tfm[l]=Gi(n,l)}):this.tfm[e]=o.x?o[e]:Gi(n,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(",").forEach(function(l){return a.call(t,l,i)});if(this.props.indexOf(Je)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ii,i,"")),e=Je}(s||i)&&this.props.push(e,i,s[e])},pc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cd=function(){var e=this.props,i=this.target,t=i.style,n=i._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?i[e[s]]=e[s+2]:e[s+2]?t[e[s]]=e[s+2]:t.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(fa,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=pa(),(!s||!s.isStart)&&!t[Je]&&(pc(t),n.zOrigin&&t[ii]&&(t[ii]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},fc=function(e,i){var t={target:e,props:[],revert:Cd,save:kd};return e._gsap||Rt.core.getCache(e),i&&i.split(",").forEach(function(n){return t.save(n)}),t},mc,ca=function(e,i){var t=mn.createElementNS?mn.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mn.createElement(e);return t&&t.style?t:mn.createElement(e)},Fi=function a(e,i,t){var n=getComputedStyle(e);return n[i]||n.getPropertyValue(i.replace(fa,"-$1").toLowerCase())||n.getPropertyValue(i)||!t&&a(e,rs(i)||i,1)||""},rc="O,Moz,ms,Ms,Webkit".split(","),rs=function(e,i,t){var n=i||Fn,s=n.style,o=5;if(e in s&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(rc[o]+e in s););return o<0?null:(o===3?"ms":o>=0?rc[o]:"")+e},ua=function(){pd()&&window.document&&(ic=window,mn=ic.document,ns=mn.documentElement,Fn=ca("div")||{style:{}},dd=ca("div"),Je=rs(Je),ii=Je+"Origin",Fn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mc=!!rs("perspective"),pa=Rt.core.reverting,da=1)},oa=function a(e){var i=ca("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),t=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(ns.appendChild(i),i.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(o=this._gsapBBox());return t&&(n?t.insertBefore(this,n):t.appendChild(this)),ns.removeChild(i),this.style.cssText=s,o},oc=function(e,i){for(var t=i.length;t--;)if(e.hasAttribute(i[t]))return e.getAttribute(i[t])},gc=function(e){var i;try{i=e.getBBox()}catch{i=oa.call(e,!0)}return i&&(i.width||i.height)||e.getBBox===oa||(i=oa.call(e,!0)),i&&!i.width&&!i.x&&!i.y?{x:+oc(e,["x","cx","x1"])||0,y:+oc(e,["y","cy","y1"])||0,width:0,height:0}:i},yc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gc(e))},zn=function(e,i){if(i){var t=e.style,n;i in Ki&&i!==ii&&(i=Je),t.removeProperty?(n=i.substr(0,2),(n==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),t.removeProperty(n==="--"?i:i.replace(fa,"-$1").toLowerCase())):t.removeAttribute(i)}},gn=function(e,i,t,n,s,o){var l=new $t(e._pt,i,t,0,1,o?dc:hc);return e._pt=l,l.b=n,l.e=s,e._props.push(t),l},ac={deg:1,rad:1,turn:1},Ed={grid:1,flex:1},yn=function a(e,i,t,n){var s=parseFloat(t)||0,o=(t+"").trim().substr((s+"").length)||"px",l=Fn.style,u=fd.test(i),h=e.tagName.toLowerCase()==="svg",f=(h?"client":"offset")+(u?"Width":"Height"),g=100,v=n==="px",y=n==="%",T,w,S,k;if(n===o||!s||ac[n]||ac[o])return s;if(o!=="px"&&!v&&(s=a(e,i,t,"px")),k=e.getCTM&&yc(e),(y||o==="%")&&(Ki[i]||~i.indexOf("adius")))return T=k?e.getBBox()[u?"width":"height"]:e[f],at(y?s/T*g:s/100*T);if(l[u?"width":"height"]=g+(v?o:n),w=~i.indexOf("adius")||n==="em"&&e.appendChild&&!h?e:e.parentNode,k&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===mn||!w.appendChild)&&(w=mn.body),S=w._gsap,S&&y&&S.width&&u&&S.time===Jt.time&&!S.uncache)return at(s/S.width*g);if(y&&(i==="height"||i==="width")){var C=e.style[i];e.style[i]=g+n,T=e[f],C?e.style[i]=C:zn(e,i)}else(y||o==="%")&&!Ed[Fi(w,"display")]&&(l.position=Fi(e,"position")),w===e&&(l.position="static"),w.appendChild(Fn),T=Fn[f],w.removeChild(Fn),l.position="absolute";return u&&y&&(S=dn(w),S.time=Jt.time,S.width=w[f]),at(v?T*s/g:T&&s?g/T*s:0)},Gi=function(e,i,t,n){var s;return da||ua(),i in Ni&&i!=="transform"&&(i=Ni[i],~i.indexOf(",")&&(i=i.split(",")[0])),Ki[i]&&i!=="transform"?(s=As(e,n),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:kr(Fi(e,ii))+" "+s.zOrigin+"px"):(s=e.style[i],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Sr[i]&&Sr[i](e,i,t)||Fi(e,i)||Ko(e,i)||(i==="opacity"?1:0))),t&&!~(s+"").trim().indexOf(" ")?yn(e,i,s,t)+t:s},Pd=function(e,i,t,n){if(!t||t==="none"){var s=rs(i,e,1),o=s&&Fi(e,s,1);o&&o!==t?(i=s,t=o):i==="borderColor"&&(t=Fi(e,"borderTopColor"))}var l=new $t(this._pt,e.style,i,0,1,na),u=0,h=0,f,g,v,y,T,w,S,k,C,P,A,I;if(l.b=t,l.e=n,t+="",n+="",n==="auto"&&(w=e.style[i],e.style[i]=n,n=Fi(e,i)||n,w?e.style[i]=w:zn(e,i)),f=[t,n],Qo(f),t=f[0],n=f[1],v=t.match(An)||[],I=n.match(An)||[],I.length){for(;g=An.exec(n);)S=g[0],C=n.substring(u,g.index),T?T=(T+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(T=1),S!==(w=v[h++]||"")&&(y=parseFloat(w)||0,A=w.substr((y+"").length),S.charAt(1)==="="&&(S=In(y,S)+A),k=parseFloat(S),P=S.substr((k+"").length),u=An.lastIndex-P.length,P||(P=P||ti.units[i]||A,u===n.length&&(n+=P,l.e+=P)),A!==P&&(y=yn(e,i,w,P)||0),l._pt={_next:l._pt,p:C||h===1?C:",",s:y,c:k-y,m:T&&T<4||i==="zIndex"?Math.round:0});l.c=u<n.length?n.substring(u,n.length):""}else l.r=i==="display"&&n==="none"?dc:hc;return Uo.test(n)&&(l.e=0),this._pt=l,l},lc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Md=function(e){var i=e.split(" "),t=i[0],n=i[1]||"50%";return(t==="top"||t==="bottom"||n==="left"||n==="right")&&(e=t,t=n,n=e),i[0]=lc[t]||t,i[1]=lc[n]||n,i.join(" ")},Od=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var t=i.t,n=t.style,s=i.u,o=t._gsap,l,u,h;if(s==="all"||s===!0)n.cssText="",u=1;else for(s=s.split(","),h=s.length;--h>-1;)l=s[h],Ki[l]&&(u=1,l=l==="transformOrigin"?ii:Je),zn(t,l);u&&(zn(t,Je),o&&(o.svg&&t.removeAttribute("transform"),As(t,1),o.uncache=1,pc(n)))}},Sr={clearProps:function(e,i,t,n,s){if(s.data!=="isFromStart"){var o=e._pt=new $t(e._pt,i,t,0,0,Od);return o.u=n,o.pr=-10,o.tween=s,e._props.push(t),1}}},Os=[1,0,0,1,0,0],_c={},bc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cc=function(e){var i=Fi(e,Je);return bc(i)?Os:i.substr(7).match(jo).map(at)},ma=function(e,i){var t=e._gsap||dn(e),n=e.style,s=cc(e),o,l,u,h;return t.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Os:s):(s===Os&&!e.offsetParent&&e!==ns&&!t.svg&&(u=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(h=1,l=e.nextElementSibling,ns.appendChild(e)),s=cc(e),u?n.display=u:zn(e,"display"),h&&(l?o.insertBefore(e,l):o?o.appendChild(e):ns.removeChild(e))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ha=function(e,i,t,n,s,o){var l=e._gsap,u=s||ma(e,!0),h=l.xOrigin||0,f=l.yOrigin||0,g=l.xOffset||0,v=l.yOffset||0,y=u[0],T=u[1],w=u[2],S=u[3],k=u[4],C=u[5],P=i.split(" "),A=parseFloat(P[0])||0,I=parseFloat(P[1])||0,D,R,F,m;t?u!==Os&&(R=y*S-T*w)&&(F=A*(S/R)+I*(-w/R)+(w*C-S*k)/R,m=A*(-T/R)+I*(y/R)-(y*C-T*k)/R,A=F,I=m):(D=gc(e),A=D.x+(~P[0].indexOf("%")?A/100*D.width:A),I=D.y+(~(P[1]||P[0]).indexOf("%")?I/100*D.height:I)),n||n!==!1&&l.smooth?(k=A-h,C=I-f,l.xOffset=g+(k*y+C*w)-k,l.yOffset=v+(k*T+C*S)-C):l.xOffset=l.yOffset=0,l.xOrigin=A,l.yOrigin=I,l.smooth=!!n,l.origin=i,l.originIsAbsolute=!!t,e.style[ii]="0px 0px",o&&(gn(o,l,"xOrigin",h,A),gn(o,l,"yOrigin",f,I),gn(o,l,"xOffset",g,l.xOffset),gn(o,l,"yOffset",v,l.yOffset)),e.setAttribute("data-svg-origin",A+" "+I)},As=function(e,i){var t=e._gsap||new Zo(e);if("x"in t&&!i&&!t.uncache)return t;var n=e.style,s=t.scaleX<0,o="px",l="deg",u=getComputedStyle(e),h=Fi(e,ii)||"0",f,g,v,y,T,w,S,k,C,P,A,I,D,R,F,m,L,W,z,ne,U,q,se,V,ye,_e,M,fe,Y,we,Q,oe;return f=g=v=w=S=k=C=P=A=0,y=T=1,t.svg=!!(e.getCTM&&yc(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(n[Je]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Je]!=="none"?u[Je]:"")),n.scale=n.rotate=n.translate="none"),R=ma(e,t.svg),t.svg&&(t.uncache?(ye=e.getBBox(),h=t.xOrigin-ye.x+"px "+(t.yOrigin-ye.y)+"px",V=""):V=!i&&e.getAttribute("data-svg-origin"),ha(e,V||h,!!V||t.originIsAbsolute,t.smooth!==!1,R)),I=t.xOrigin||0,D=t.yOrigin||0,R!==Os&&(W=R[0],z=R[1],ne=R[2],U=R[3],f=q=R[4],g=se=R[5],R.length===6?(y=Math.sqrt(W*W+z*z),T=Math.sqrt(U*U+ne*ne),w=W||z?is(z,W)*Nn:0,C=ne||U?is(ne,U)*Nn+w:0,C&&(T*=Math.abs(Math.cos(C*ss))),t.svg&&(f-=I-(I*W+D*ne),g-=D-(I*z+D*U))):(oe=R[6],we=R[7],M=R[8],fe=R[9],Y=R[10],Q=R[11],f=R[12],g=R[13],v=R[14],F=is(oe,Y),S=F*Nn,F&&(m=Math.cos(-F),L=Math.sin(-F),V=q*m+M*L,ye=se*m+fe*L,_e=oe*m+Y*L,M=q*-L+M*m,fe=se*-L+fe*m,Y=oe*-L+Y*m,Q=we*-L+Q*m,q=V,se=ye,oe=_e),F=is(-ne,Y),k=F*Nn,F&&(m=Math.cos(-F),L=Math.sin(-F),V=W*m-M*L,ye=z*m-fe*L,_e=ne*m-Y*L,Q=U*L+Q*m,W=V,z=ye,ne=_e),F=is(z,W),w=F*Nn,F&&(m=Math.cos(F),L=Math.sin(F),V=W*m+z*L,ye=q*m+se*L,z=z*m-W*L,se=se*m-q*L,W=V,q=ye),S&&Math.abs(S)+Math.abs(w)>359.9&&(S=w=0,k=180-k),y=at(Math.sqrt(W*W+z*z+ne*ne)),T=at(Math.sqrt(se*se+oe*oe)),F=is(q,se),C=Math.abs(F)>2e-4?F*Nn:0,A=Q?1/(Q<0?-Q:Q):0),t.svg&&(V=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!bc(Fi(e,Je)),V&&e.setAttribute("transform",V))),Math.abs(C)>90&&Math.abs(C)<270&&(s?(y*=-1,C+=w<=0?180:-180,w+=w<=0?180:-180):(T*=-1,C+=C<=0?180:-180)),i=i||t.uncache,t.x=f-((t.xPercent=f&&(!i&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=g-((t.yPercent=g&&(!i&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=v+o,t.scaleX=at(y),t.scaleY=at(T),t.rotation=at(w)+l,t.rotationX=at(S)+l,t.rotationY=at(k)+l,t.skewX=C+l,t.skewY=P+l,t.transformPerspective=A+o,(t.zOrigin=parseFloat(h.split(" ")[2])||!i&&t.zOrigin||0)&&(n[ii]=kr(h)),t.xOffset=t.yOffset=0,t.force3D=ti.force3D,t.renderTransform=t.svg?Id:mc?vc:Ad,t.uncache=0,t},kr=function(e){return(e=e.split(" "))[0]+" "+e[1]},aa=function(e,i,t){var n=Pt(i);return at(parseFloat(i)+parseFloat(yn(e,"x",t+"px",n)))+n},Ad=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,vc(e,i)},Ln="0deg",Ms="0px",Dn=") ",vc=function(e,i){var t=i||this,n=t.xPercent,s=t.yPercent,o=t.x,l=t.y,u=t.z,h=t.rotation,f=t.rotationY,g=t.rotationX,v=t.skewX,y=t.skewY,T=t.scaleX,w=t.scaleY,S=t.transformPerspective,k=t.force3D,C=t.target,P=t.zOrigin,A="",I=k==="auto"&&e&&e!==1||k===!0;if(P&&(g!==Ln||f!==Ln)){var D=parseFloat(f)*ss,R=Math.sin(D),F=Math.cos(D),m;D=parseFloat(g)*ss,m=Math.cos(D),o=aa(C,o,R*m*-P),l=aa(C,l,-Math.sin(D)*-P),u=aa(C,u,F*m*-P+P)}S!==Ms&&(A+="perspective("+S+Dn),(n||s)&&(A+="translate("+n+"%, "+s+"%) "),(I||o!==Ms||l!==Ms||u!==Ms)&&(A+=u!==Ms||I?"translate3d("+o+", "+l+", "+u+") ":"translate("+o+", "+l+Dn),h!==Ln&&(A+="rotate("+h+Dn),f!==Ln&&(A+="rotateY("+f+Dn),g!==Ln&&(A+="rotateX("+g+Dn),(v!==Ln||y!==Ln)&&(A+="skew("+v+", "+y+Dn),(T!==1||w!==1)&&(A+="scale("+T+", "+w+Dn),C.style[Je]=A||"translate(0, 0)"},Id=function(e,i){var t=i||this,n=t.xPercent,s=t.yPercent,o=t.x,l=t.y,u=t.rotation,h=t.skewX,f=t.skewY,g=t.scaleX,v=t.scaleY,y=t.target,T=t.xOrigin,w=t.yOrigin,S=t.xOffset,k=t.yOffset,C=t.forceCSS,P=parseFloat(o),A=parseFloat(l),I,D,R,F,m;u=parseFloat(u),h=parseFloat(h),f=parseFloat(f),f&&(f=parseFloat(f),h+=f,u+=f),u||h?(u*=ss,h*=ss,I=Math.cos(u)*g,D=Math.sin(u)*g,R=Math.sin(u-h)*-v,F=Math.cos(u-h)*v,h&&(f*=ss,m=Math.tan(h-f),m=Math.sqrt(1+m*m),R*=m,F*=m,f&&(m=Math.tan(f),m=Math.sqrt(1+m*m),I*=m,D*=m)),I=at(I),D=at(D),R=at(R),F=at(F)):(I=g,F=v,D=R=0),(P&&!~(o+"").indexOf("px")||A&&!~(l+"").indexOf("px"))&&(P=yn(y,"x",o,"px"),A=yn(y,"y",l,"px")),(T||w||S||k)&&(P=at(P+T-(T*I+w*R)+S),A=at(A+w-(T*D+w*F)+k)),(n||s)&&(m=y.getBBox(),P=at(P+n/100*m.width),A=at(A+s/100*m.height)),m="matrix("+I+","+D+","+R+","+F+","+P+","+A+")",y.setAttribute("transform",m),C&&(y.style[Je]=m)},Rd=function(e,i,t,n,s){var o=360,l=yt(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Nn:1),h=u-n,f=n+h+"deg",g,v;return l&&(g=s.split("_")[1],g==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),g==="cw"&&h<0?h=(h+o*sc)%o-~~(h/o)*o:g==="ccw"&&h>0&&(h=(h-o*sc)%o-~~(h/o)*o)),e._pt=v=new $t(e._pt,i,t,n,h,gd),v.e=f,v.u="deg",e._props.push(t),v},uc=function(e,i){for(var t in i)e[t]=i[t];return e},Ld=function(e,i,t){var n=uc({},t._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=t.style,l,u,h,f,g,v,y,T;n.svg?(h=t.getAttribute("transform"),t.setAttribute("transform",""),o[Je]=i,l=As(t,1),zn(t,Je),t.setAttribute("transform",h)):(h=getComputedStyle(t)[Je],o[Je]=i,l=As(t,1),o[Je]=h);for(u in Ki)h=n[u],f=l[u],h!==f&&s.indexOf(u)<0&&(y=Pt(h),T=Pt(f),g=y!==T?yn(t,u,h,T):parseFloat(h),v=parseFloat(f),e._pt=new $t(e._pt,l,u,g,v-g,la),e._pt.u=T||0,e._props.push(u));uc(l,n)};Vt("padding,margin,Width,Radius",function(a,e){var i="Top",t="Right",n="Bottom",s="Left",o=(e<3?[i,t,n,s]:[i+s,i+t,n+t,n+s]).map(function(l){return e<2?a+l:"border"+l+a});Sr[e>1?"border"+a:a]=function(l,u,h,f,g){var v,y;if(arguments.length<4)return v=o.map(function(T){return Gi(l,T,h)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(f+"").split(" "),y={},o.forEach(function(T,w){return y[T]=v[w]=v[w]||v[(w-1)/2|0]}),l.init(u,y,g)}});var ga={name:"css",register:ua,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,t,n,s){var o=this._props,l=e.style,u=t.vars.startAt,h,f,g,v,y,T,w,S,k,C,P,A,I,D,R,F;da||ua(),this.styles=this.styles||fc(e),F=this.styles.props,this.tween=t;for(w in i)if(w!=="autoRound"&&(f=i[w],!(Zt[w]&&ea(w,i,t,n,e,s)))){if(y=typeof f,T=Sr[w],y==="function"&&(f=f.call(t,n,e,s),y=typeof f),y==="string"&&~f.indexOf("random(")&&(f=ts(f)),T)T(this,e,w,f,t)&&(R=1);else if(w.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(w)+"").trim(),f+="",Wi.lastIndex=0,Wi.test(h)||(S=Pt(h),k=Pt(f)),k?S!==k&&(h=yn(e,w,h,k)+k):S&&(f+=S),this.add(l,"setProperty",h,f,n,s,0,0,w),o.push(w),F.push(w,0,l[w]);else if(y!=="undefined"){if(u&&w in u?(h=typeof u[w]=="function"?u[w].call(t,n,e,s):u[w],yt(h)&&~h.indexOf("random(")&&(h=ts(h)),Pt(h+"")||h==="auto"||(h+=ti.units[w]||Pt(Gi(e,w))||""),(h+"").charAt(1)==="="&&(h=Gi(e,w))):h=Gi(e,w),v=parseFloat(h),C=y==="string"&&f.charAt(1)==="="&&f.substr(0,2),C&&(f=f.substr(2)),g=parseFloat(f),w in Ni&&(w==="autoAlpha"&&(v===1&&Gi(e,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,l.visibility),gn(this,l,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),w!=="scale"&&w!=="transform"&&(w=Ni[w],~w.indexOf(",")&&(w=w.split(",")[0]))),P=w in Ki,P){if(this.styles.save(w),A||(I=e._gsap,I.renderTransform&&!i.parseTransform||As(e,i.parseTransform),D=i.smoothOrigin!==!1&&I.smooth,A=this._pt=new $t(this._pt,l,Je,0,1,I.renderTransform,I,0,-1),A.dep=1),w==="scale")this._pt=new $t(this._pt,I,"scaleY",I.scaleY,(C?In(I.scaleY,C+g):g)-I.scaleY||0,la),this._pt.u=0,o.push("scaleY",w),w+="X";else if(w==="transformOrigin"){F.push(ii,0,l[ii]),f=Md(f),I.svg?ha(e,f,0,D,0,this):(k=parseFloat(f.split(" ")[2])||0,k!==I.zOrigin&&gn(this,I,"zOrigin",I.zOrigin,k),gn(this,l,w,kr(h),kr(f)));continue}else if(w==="svgOrigin"){ha(e,f,1,D,0,this);continue}else if(w in _c){Rd(this,I,w,v,C?In(v,C+f):f);continue}else if(w==="smoothOrigin"){gn(this,I,"smooth",I.smooth,f);continue}else if(w==="force3D"){I[w]=f;continue}else if(w==="transform"){Ld(this,f,e);continue}}else w in l||(w=rs(w)||w);if(P||(g||g===0)&&(v||v===0)&&!md.test(f)&&w in l)S=(h+"").substr((v+"").length),g||(g=0),k=Pt(f)||(w in ti.units?ti.units[w]:S),S!==k&&(v=yn(e,w,h,k)),this._pt=new $t(this._pt,P?I:l,w,v,(C?In(v,C+g):g)-v,!P&&(k==="px"||w==="zIndex")&&i.autoRound!==!1?_d:la),this._pt.u=k||0,S!==k&&k!=="%"&&(this._pt.b=h,this._pt.r=yd);else if(w in l)Pd.call(this,e,w,h,C?C+f:f);else if(w in e)this.add(e,w,h||e[w],C?C+f:f,n,s);else if(w!=="parseTransform"){br(w,f);continue}P||(w in l?F.push(w,0,l[w]):F.push(w,1,h||e[w])),o.push(w)}}R&&ra(this)},render:function(e,i){if(i.tween._time||!pa())for(var t=i._pt;t;)t.r(e,t.d),t=t._next;else i.styles.revert()},get:Gi,aliases:Ni,getSetter:function(e,i,t){var n=Ni[i];return n&&n.indexOf(",")<0&&(i=n),i in Ki&&i!==ii&&(e._gsap.x||Gi(e,"x"))?t&&nc===t?i==="scale"?Td:wd:(nc=t||{})&&(i==="scale"?xd:Sd):e.style&&!_r(e.style[i])?bd:~i.indexOf("-")?vd:xr(e,i)},core:{_removeProperty:zn,_getMatrix:ma}};Rt.utils.checkPrefix=rs;Rt.core.getStyleSaver=fc;(function(a,e,i,t){var n=Vt(a+","+e+","+i,function(s){Ki[s]=1});Vt(e,function(s){ti.units[s]="deg",_c[s]=1}),Ni[n[13]]=a+","+e,Vt(t,function(s){var o=s.split(":");Ni[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ti.units[a]="px"});Rt.registerPlugin(ga);var Qi=Rt.registerPlugin(ga)||Rt,qp=Qi.core.Tween;var Dd=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var Nd=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var Fd=Math.PI/180,jp=180/Math.PI,Cr=Math.sin,Er=Math.cos,Rs=Math.abs,Is=Math.sqrt;var zd=function(e){return typeof e=="number"};var wc=1e5;var _n=function(e){return Math.round(e*wc)/wc||0};function Tc(a,e,i,t,n,s,o){for(var l=a.length,u,h,f,g,v;--l>-1;)for(u=a[l],h=u.length,f=0;f<h;f+=2)g=u[f],v=u[f+1],u[f]=g*e+v*t+s,u[f+1]=g*i+v*n+o;return a._dirty=1,a}function Bd(a,e,i,t,n,s,o,l,u){if(!(a===l&&e===u)){i=Rs(i),t=Rs(t);var h=n%360*Fd,f=Er(h),g=Cr(h),v=Math.PI,y=v*2,T=(a-l)/2,w=(e-u)/2,S=f*T+g*w,k=-g*T+f*w,C=S*S,P=k*k,A=C/(i*i)+P/(t*t);A>1&&(i=Is(A)*i,t=Is(A)*t);var I=i*i,D=t*t,R=(I*D-I*P-D*C)/(I*P+D*C);R<0&&(R=0);var F=(s===o?-1:1)*Is(R),m=F*(i*k/t),L=F*-(t*S/i),W=(a+l)/2,z=(e+u)/2,ne=W+(f*m-g*L),U=z+(g*m+f*L),q=(S-m)/i,se=(k-L)/t,V=(-S-m)/i,ye=(-k-L)/t,_e=q*q+se*se,M=(se<0?-1:1)*Math.acos(q/Is(_e)),fe=(q*ye-se*V<0?-1:1)*Math.acos((q*V+se*ye)/Is(_e*(V*V+ye*ye)));isNaN(fe)&&(fe=v),!o&&fe>0?fe-=y:o&&fe<0&&(fe+=y),M%=y,fe%=y;var Y=Math.ceil(Rs(fe)/(y/4)),we=[],Q=fe/Y,oe=4/3*Cr(Q/2)/(1+Er(Q/2)),re=f*i,ve=g*i,ce=g*-t,ze=f*t,Ce;for(Ce=0;Ce<Y;Ce++)n=M+Ce*Q,S=Er(n),k=Cr(n),q=Er(n+=Q),se=Cr(n),we.push(S-oe*k,k+oe*S,q+oe*se,se-oe*q,q,se);for(Ce=0;Ce<we.length;Ce+=2)S=we[Ce],k=we[Ce+1],we[Ce]=S*re+k*ce+ne,we[Ce+1]=S*ve+k*ze+U;return we[Ce-2]=l,we[Ce-1]=u,we}}function xc(a){var e=(a+"").replace(Nd,function(m){var L=+m;return L<1e-4&&L>-1e-4?0:L}).match(Dd)||[],i=[],t=0,n=0,s=2/3,o=e.length,l=0,u="ERROR: malformed path: "+a,h,f,g,v,y,T,w,S,k,C,P,A,I,D,R,F=function(L,W,z,ne){C=(z-L)/3,P=(ne-W)/3,w.push(L+C,W+P,z-C,ne-P,z,ne)};if(!a||!isNaN(e[0])||isNaN(e[1]))return console.log(u),i;for(h=0;h<o;h++)if(I=y,isNaN(e[h])?(y=e[h].toUpperCase(),T=y!==e[h]):h--,g=+e[h+1],v=+e[h+2],T&&(g+=t,v+=n),h||(S=g,k=v),y==="M")w&&(w.length<8?i.length-=1:l+=w.length),t=S=g,n=k=v,w=[g,v],i.push(w),h+=2,y="L";else if(y==="C")w||(w=[0,0]),T||(t=n=0),w.push(g,v,t+e[h+3]*1,n+e[h+4]*1,t+=e[h+5]*1,n+=e[h+6]*1),h+=6;else if(y==="S")C=t,P=n,(I==="C"||I==="S")&&(C+=t-w[w.length-4],P+=n-w[w.length-3]),T||(t=n=0),w.push(C,P,g,v,t+=e[h+3]*1,n+=e[h+4]*1),h+=4;else if(y==="Q")C=t+(g-t)*s,P=n+(v-n)*s,T||(t=n=0),t+=e[h+3]*1,n+=e[h+4]*1,w.push(C,P,t+(g-t)*s,n+(v-n)*s,t,n),h+=4;else if(y==="T")C=t-w[w.length-4],P=n-w[w.length-3],w.push(t+C,n+P,g+(t+C*1.5-g)*s,v+(n+P*1.5-v)*s,t=g,n=v),h+=2;else if(y==="H")F(t,n,t=g,n),h+=1;else if(y==="V")F(t,n,t,n=g+(T?n-t:0)),h+=1;else if(y==="L"||y==="Z")y==="Z"&&(g=S,v=k,w.closed=!0),(y==="L"||Rs(t-g)>.5||Rs(n-v)>.5)&&(F(t,n,g,v),y==="L"&&(h+=2)),t=g,n=v;else if(y==="A"){if(D=e[h+4],R=e[h+5],C=e[h+6],P=e[h+7],f=7,D.length>1&&(D.length<3?(P=C,C=R,f--):(P=R,C=D.substr(2),f-=2),R=D.charAt(1),D=D.charAt(0)),A=Bd(t,n,+e[h+1],+e[h+2],+e[h+3],+D,+R,(T?t:0)+C*1,(T?n:0)+P*1),h+=f,A)for(f=0;f<A.length;f++)w.push(A[f]);t=w[w.length-2],n=w[w.length-1]}else console.log(u);return h=w.length,h<6?(i.pop(),h=0):w[0]===w[h-2]&&w[1]===w[h-1]&&(w.closed=!0),i.totalPoints=l+h,i}function Sc(a){zd(a[0])&&(a=[a]);var e="",i=a.length,t,n,s,o;for(n=0;n<i;n++){for(o=a[n],e+="M"+_n(o[0])+","+_n(o[1])+" C",t=o.length,s=2;s<t;s++)e+=_n(o[s++])+","+_n(o[s++])+" "+_n(o[s++])+","+_n(o[s++])+" "+_n(o[s++])+","+_n(o[s])+" ";o.closed&&(e+="z")}return e}var ni,Cc,Ec=function(){return ni||typeof window<"u"&&(ni=window.gsap)&&ni.registerPlugin&&ni},kc=function(){ni=Ec(),ni?(ni.registerEase("_CE",Ls.create),Cc=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Vd=1e20,Pr=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},$d=1,qd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Hd=/[cLlsSaAhHvVtTqQ]/g,jd=function(e){var i=e.length,t=Vd,n;for(n=1;n<i;n+=6)+e[n]<t&&(t=+e[n]);return t},Ud=function(e,i,t){!t&&t!==0&&(t=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,s=-t,o=e.length,l=1/(+e[o-2]+n),u=-i||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?jd(e)+s:+e[o-1]+s),h;for(u?u=1/u:u=-l,h=0;h<o;h+=2)e[h]=(+e[h]+n)*l,e[h+1]=(+e[h+1]+s)*u},Yd=function a(e,i,t,n,s,o,l,u,h,f,g){var v=(e+t)/2,y=(i+n)/2,T=(t+s)/2,w=(n+o)/2,S=(s+l)/2,k=(o+u)/2,C=(v+T)/2,P=(y+w)/2,A=(T+S)/2,I=(w+k)/2,D=(C+A)/2,R=(P+I)/2,F=l-e,m=u-i,L=Math.abs((t-l)*m-(n-u)*F),W=Math.abs((s-l)*m-(o-u)*F),z;return f||(f=[{x:e,y:i},{x:l,y:u}],g=1),f.splice(g||f.length-1,0,{x:D,y:R}),(L+W)*(L+W)>h*(F*F+m*m)&&(z=f.length,a(e,i,v,y,C,P,D,R,h,f,g),a(D,R,A,I,S,k,l,u,h,f,g+1+(f.length-z))),f},Ls=function(){function a(i,t,n){Cc||kc(),this.id=i,$d&&this.setData(t,n)}var e=a.prototype;return e.setData=function(t,n){n=n||{},t=t||"0,0,1,1";var s=t.match(qd),o=1,l=[],u=[],h=n.precision||1,f=h<=1,g,v,y,T,w,S,k,C,P;if(this.data=t,(Hd.test(t)||~t.indexOf("M")&&t.indexOf("C")<0)&&(s=xc(t)[0]),g=s.length,g===4)s.unshift(0,0),s.push(1,1),g=8;else if((g-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[g-2]!=1)&&Ud(s,n.height,n.originY),this.segment=s,T=2;T<g;T+=6)v={x:+s[T-2],y:+s[T-1]},y={x:+s[T+4],y:+s[T+5]},l.push(v,y),Yd(v.x,v.y,+s[T],+s[T+1],+s[T+2],+s[T+3],y.x,y.y,1/(h*2e5),l,l.length-1);for(g=l.length,T=0;T<g;T++)k=l[T],C=l[T-1]||k,(k.x>C.x||C.y!==k.y&&C.x===k.x||k===C)&&k.x<=1?(C.cx=k.x-C.x,C.cy=k.y-C.y,C.n=k,C.nx=k.x,f&&T>1&&Math.abs(C.cy/C.cx-l[T-2].cy/l[T-2].cx)>2&&(f=0),C.cx<o&&(C.cx?o=C.cx:(C.cx=.001,T===g-1&&(C.x-=.001,o=Math.min(o,.001),f=0)))):(l.splice(T--,1),g--);if(g=1/o+1|0,w=1/g,S=0,k=l[0],f){for(T=0;T<g;T++)P=T*w,k.nx<P&&(k=l[++S]),v=k.y+(P-k.x)/k.cx*k.cy,u[T]={x:P,cx:w,y:v,cy:0,nx:9},T&&(u[T-1].cy=v-u[T-1].y);u[g-1].cy=l[l.length-1].y-v}else{for(T=0;T<g;T++)k.nx<T*w&&(k=l[++S]),u[T]=k;S<l.length-1&&(u[T-1]=l[l.length-2])}return this.ease=function(A){var I=u[A*g|0]||u[g-1];return I.nx<A&&(I=I.n),I.y+(A-I.x)/I.cx*I.cy},this.ease.custom=this,this.id&&ni&&ni.registerEase(this.id,this.ease),this},e.getSVGData=function(t){return a.getSVGData(this,t)},a.create=function(t,n,s){return new a(t,n,s).ease},a.register=function(t){ni=t,kc()},a.get=function(t){return ni.parseEase(t)},a.getSVGData=function(t,n){n=n||{};var s=n.width||100,o=n.height||100,l=n.x||0,u=(n.y||0)+o,h=ni.utils.toArray(n.path)[0],f,g,v,y,T,w,S,k,C,P;if(n.invert&&(o=-o,u=0),typeof t=="string"&&(t=ni.parseEase(t)),t.custom&&(t=t.custom),t instanceof a)f=Sc(Tc([t.segment],s,0,0,-o,l,u));else{for(f=[l,u],S=Math.max(5,(n.precision||1)*200),y=1/S,S+=2,k=5/S,C=Pr(l+y*s),P=Pr(u+t(y)*-o),g=(P-u)/(C-l),v=2;v<S;v++)T=Pr(l+v*y*s),w=Pr(u+t(v*y)*-o),(Math.abs((w-P)/(T-C)-g)>k||v===S-1)&&(f.push(C,P),g=(w-P)/(T-C)),C=T,P=w;f="M"+f.join(",")}return h&&h.setAttribute("d",f),f},a}();Ec()&&ni.registerPlugin(Ls);Ls.version="3.12.5";var Zi,Bn,va,Ar,Ds,Mr,Or,Ns,Si="transform",ba=Si+"Origin",Pc,Ir=function(e){var i=e.ownerDocument||e;for(!(Si in e.style)&&("msTransform"in e.style)&&(Si="msTransform",ba=Si+"Origin");i.parentNode&&(i=i.parentNode););if(Bn=window,Or=new bn,i){Zi=i,va=i.documentElement,Ar=i.body,Ns=Zi.createElementNS("http://www.w3.org/2000/svg","g"),Ns.style.transform="none";var t=i.createElement("div"),n=i.createElement("div"),s=i&&(i.body||i.firstElementChild);s&&s.appendChild&&(s.appendChild(t),t.appendChild(n),t.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Pc=n.offsetParent!==t,s.removeChild(t))}return i},Wd=function(e){for(var i,t;e&&e!==Ar;)t=e._gsap,t&&t.uncache&&t.get(e,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),i?i.push(t):i=[t]),e=e.parentNode;return i},Mc=[],Oc=[],Rr=function(){return Bn.pageYOffset||Zi.scrollTop||va.scrollTop||Ar.scrollTop||0},Lr=function(){return Bn.pageXOffset||Zi.scrollLeft||va.scrollLeft||Ar.scrollLeft||0},wa=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},Xd=function a(e){if(Bn.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return a(e)},ya=function a(e,i){if(e.parentNode&&(Zi||Ir(e))){var t=wa(e),n=t?t.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=t?i?"rect":"g":"div",o=i!==2?0:100,l=i===3?100:0,u="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",h=Zi.createElementNS?Zi.createElementNS(n.replace(/^https/,"http"),s):Zi.createElement(s);return i&&(t?(Mr||(Mr=a(e)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+o+","+l+")"),Mr.appendChild(h)):(Ds||(Ds=a(e),Ds.style.cssText=u),h.style.cssText=u+"width:0.1px;height:0.1px;top:"+l+"px;left:"+o+"px",Ds.appendChild(h))),h}throw"Need document and parent."},Gd=function(e){for(var i=new bn,t=0;t<e.numberOfItems;t++)i.multiply(e.getItem(t).matrix);return i},Ta=function(e){var i=e.getCTM(),t;return i||(t=e.style[Si],e.style[Si]="none",e.appendChild(Ns),i=Ns.getCTM(),e.removeChild(Ns),t?e.style[Si]=t:e.style.removeProperty(Si.replace(/([A-Z])/g,"-$1").toLowerCase())),i||Or.clone()},Kd=function(e,i){var t=wa(e),n=e===t,s=t?Mc:Oc,o=e.parentNode,l,u,h,f,g,v;if(e===Bn)return e;if(s.length||s.push(ya(e,1),ya(e,2),ya(e,3)),l=t?Mr:Ds,t)n?(h=Ta(e),f=-h.e/h.a,g=-h.f/h.d,u=Or):e.getBBox?(h=e.getBBox(),u=e.transform?e.transform.baseVal:{},u=u.numberOfItems?u.numberOfItems>1?Gd(u):u.getItem(0).matrix:Or,f=u.a*h.x+u.c*h.y,g=u.b*h.x+u.d*h.y):(u=new bn,f=g=0),i&&e.tagName.toLowerCase()==="g"&&(f=g=0),(n?t:o).appendChild(l),l.setAttribute("transform","matrix("+u.a+","+u.b+","+u.c+","+u.d+","+(u.e+f)+","+(u.f+g)+")");else{if(f=g=0,Pc)for(u=e.offsetParent,h=e;h&&(h=h.parentNode)&&h!==u&&h.parentNode;)(Bn.getComputedStyle(h)[Si]+"").length>4&&(f=h.offsetLeft,g=h.offsetTop,h=0);if(v=Bn.getComputedStyle(e),v.position!=="absolute"&&v.position!=="fixed")for(u=e.offsetParent;o&&o!==u;)f+=o.scrollLeft||0,g+=o.scrollTop||0,o=o.parentNode;h=l.style,h.top=e.offsetTop-g+"px",h.left=e.offsetLeft-f+"px",h[Si]=v[Si],h[ba]=v[ba],h.position=v.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(l)}return l},_a=function(e,i,t,n,s,o,l){return e.a=i,e.b=t,e.c=n,e.d=s,e.e=o,e.f=l,e},bn=function(){function a(i,t,n,s,o,l){i===void 0&&(i=1),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),o===void 0&&(o=0),l===void 0&&(l=0),_a(this,i,t,n,s,o,l)}var e=a.prototype;return e.inverse=function(){var t=this.a,n=this.b,s=this.c,o=this.d,l=this.e,u=this.f,h=t*o-n*s||1e-10;return _a(this,o/h,-n/h,-s/h,t/h,(s*u-o*l)/h,-(t*u-n*l)/h)},e.multiply=function(t){var n=this.a,s=this.b,o=this.c,l=this.d,u=this.e,h=this.f,f=t.a,g=t.c,v=t.b,y=t.d,T=t.e,w=t.f;return _a(this,f*n+v*o,f*s+v*l,g*n+y*o,g*s+y*l,u+T*n+w*o,h+T*s+w*l)},e.clone=function(){return new a(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var n=this.a,s=this.b,o=this.c,l=this.d,u=this.e,h=this.f;return n===t.a&&s===t.b&&o===t.c&&l===t.d&&u===t.e&&h===t.f},e.apply=function(t,n){n===void 0&&(n={});var s=t.x,o=t.y,l=this.a,u=this.b,h=this.c,f=this.d,g=this.e,v=this.f;return n.x=s*l+o*h+g||0,n.y=s*u+o*f+v||0,n},a}();function ki(a,e,i,t){if(!a||!a.parentNode||(Zi||Ir(a)).documentElement===a)return new bn;var n=Wd(a),s=wa(a),o=s?Mc:Oc,l=Kd(a,i),u=o[0].getBoundingClientRect(),h=o[1].getBoundingClientRect(),f=o[2].getBoundingClientRect(),g=l.parentNode,v=!t&&Xd(a),y=new bn((h.left-u.left)/100,(h.top-u.top)/100,(f.left-u.left)/100,(f.top-u.top)/100,u.left+(v?0:Lr()),u.top+(v?0:Rr()));if(g.removeChild(l),n)for(u=n.length;u--;)h=n[u],h.scaleX=h.scaleY=0,h.renderTransform(1,h);return e?y.inverse():y}var Qd=1,cs,Lt,Xe,Fs,vn,Ji,Ma,Ac=function(e,i){return e.actions.forEach(function(t){return t.vars[i]&&t.vars[i](t)})},Oa={},Ic=180/Math.PI,Zd=Math.PI/180,Fr={},Rc={},Vr={},Ia=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},Jd=Ia("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),$r=Ia("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),zs=function(e){return cs(e)[0]||console.warn("Element not found:",e)},os=function(e){return Math.round(e*1e4)/1e4||0},xa=function(e,i,t){return e.forEach(function(n){return n.classList[t](i)})},Lc={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Bc={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Vc=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},as=function(e,i){var t={},n;for(n in e)i[n]||(t[n]=e[n]);return t},Ra={},$c=function(e){var i=Ra[e]=Ia(e);return Vr[e]=i.concat($r),i},ep=function(e){var i=e._gsap||Lt.core.getCache(e);return i.gmCache===Lt.ticker.frame?i.gMatrix:(i.gmCache=Lt.ticker.frame,i.gMatrix=ki(e,!0,!1,!0))},tp=function a(e,i,t){t===void 0&&(t=0);for(var n=e.parentNode,s=1e3*Math.pow(10,t)*(i?-1:1),o=i?-s*900:0;e;)o+=s,e=e.previousSibling;return n?o+a(n,i,t+1):o},zr=function(e,i,t){return e.forEach(function(n){return n.d=tp(t?n.element:n.t,i)}),e.sort(function(n,s){return n.d-s.d}),e},Bs=function(e,i){for(var t=e.element.style,n=e.css=e.css||[],s=i.length,o,l;s--;)o=i[s],l=t[o]||t.getPropertyValue(o),n.push(l?o:Rc[o]||(Rc[o]=Vc(o)),l);return t},Br=function(e){var i=e.css,t=e.element.style,n=0;for(e.cache.uncache=1;n<i.length;n+=2)i[n+1]?t[i[n]]=i[n+1]:t.removeProperty(i[n]);!i[i.indexOf("transform")+1]&&t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Dc=function(e,i){e.forEach(function(t){return t.a.cache.uncache=1}),i||e.finalStates.forEach(Br)},Sa="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),La=function(e,i,t){var n=e.element,s=e.width,o=e.height,l=e.uncache,u=e.getProp,h=n.style,f=4,g,v,y;if(typeof i!="object"&&(i=e),Xe&&t!==1)return Xe._abs.push({t:n,b:e,a:e,sd:0}),Xe._final.push(function(){return(e.cache.uncache=1)&&Br(e)}),n;for(v=u("display")==="none",(!e.isVisible||v)&&(v&&(Bs(e,["display"]).display=i.display),e.matrix=i.matrix,e.width=s=e.width||i.width,e.height=o=e.height||i.height),Bs(e,Sa),y=window.getComputedStyle(n);f--;)h[Sa[f]]=y[Sa[f]];if(h.gridArea="1 / 1 / 1 / 1",h.transition="none",h.position="absolute",h.width=s+"px",h.height=o+"px",h.top||(h.top="0px"),h.left||(h.left="0px"),l)g=new Vn(n);else if(g=as(e,Fr),g.position="absolute",e.simple){var T=n.getBoundingClientRect();g.matrix=new bn(1,0,0,1,T.left+Lr(),T.top+Rr())}else g.matrix=ki(n,!1,!1,!0);return g=ls(g,e,!0),e.x=Ji(g.x,.01),e.y=Ji(g.y,.01),n},Nc=function(e,i){return i!==!0&&(i=cs(i),e=e.filter(function(t){if(i.indexOf((t.sd<0?t.b:t.a).element)!==-1)return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),e},qc=function(e){return zr(e,!0).forEach(function(i){return(i.a.isVisible||i.b.isVisible)&&La(i.sd<0?i.b:i.a,i.b,1)})},ip=function(e,i){return i&&e.idLookup[Aa(i).id]||e.elementStates[0]},Aa=function(e,i,t,n){return e instanceof Vn?e:e instanceof Ci?ip(e,n):new Vn(typeof e=="string"?zs(e)||console.warn(e+" not found"):e,i,t)},np=function(e,i){for(var t=Lt.getProperty(e.element,null,"native"),n=e.props={},s=i.length;s--;)n[i[s]]=(t(i[s])+"").trim();return n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0),e},Hc=function(e,i){var t=e.style||e,n;for(n in i)t[n]=i[n]},sp=function(e){var i=e.getAttribute("data-flip-id");return i||e.setAttribute("data-flip-id",i="auto-"+Qd++),i},jc=function(e){return e.map(function(i){return i.element})},Fc=function(e,i,t){return e&&i.length&&t.add(e(jc(i),t,new Ci(i,0,!0)),0)},ls=function(e,i,t,n,s,o){var l=e.element,u=e.cache,h=e.parent,f=e.x,g=e.y,v=i.width,y=i.height,T=i.scaleX,w=i.scaleY,S=i.rotation,k=i.bounds,C=o&&Ma&&Ma(l,"transform"),P=e,A=i.matrix,I=A.e,D=A.f,R=e.bounds.width!==k.width||e.bounds.height!==k.height||e.scaleX!==T||e.scaleY!==w||e.rotation!==S,F=!R&&e.simple&&i.simple&&!s,m,L,W,z,ne,U,q;return F||!h?(T=w=1,S=m=0):(ne=ep(h),U=ne.clone().multiply(i.ctm?i.matrix.clone().multiply(i.ctm):i.matrix),S=os(Math.atan2(U.b,U.a)*Ic),m=os(Math.atan2(U.c,U.d)*Ic+S)%360,T=Math.sqrt(Math.pow(U.a,2)+Math.pow(U.b,2)),w=Math.sqrt(Math.pow(U.c,2)+Math.pow(U.d,2))*Math.cos(m*Zd),s&&(s=cs(s)[0],z=Lt.getProperty(s),q=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),P={scaleX:z("scaleX"),scaleY:z("scaleY"),width:q?q.width:Math.ceil(parseFloat(z("width","px"))),height:q?q.height:parseFloat(z("height","px"))}),u.rotation=S+"deg",u.skewX=m+"deg"),t?(T*=v===P.width||!P.width?1:v/P.width,w*=y===P.height||!P.height?1:y/P.height,u.scaleX=T,u.scaleY=w):(v=Ji(v*T/P.scaleX,0),y=Ji(y*w/P.scaleY,0),l.style.width=v+"px",l.style.height=y+"px"),n&&Hc(l,i.props),F||!h?(f+=I-e.matrix.e,g+=D-e.matrix.f):R||h!==i.parent?(u.renderTransform(1,u),U=ki(s||l,!1,!1,!0),L=ne.apply({x:U.e,y:U.f}),W=ne.apply({x:I,y:D}),f+=W.x-L.x,g+=W.y-L.y):(ne.e=ne.f=0,W=ne.apply({x:I-e.matrix.e,y:D-e.matrix.f}),f+=W.x,g+=W.y),f=Ji(f,.02),g=Ji(g,.02),o&&!(o instanceof Vn)?C&&C.revert():(u.x=f+"px",u.y=g+"px",u.renderTransform(1,u)),o&&(o.x=f,o.y=g,o.rotation=S,o.skewX=m,t?(o.scaleX=T,o.scaleY=w):(o.width=v,o.height=y)),o||u},ka=function(e,i){return e instanceof Ci?e:new Ci(e,i)},Uc=function(e,i,t){var n=e.idLookup[t],s=e.alt[t];return s.isVisible&&(!(i.getElementState(s.element)||s).isVisible||!n.isVisible)?s:n},Ca=[],Ea="width,height,overflowX,overflowY".split(","),Dr,zc=function(e){if(e!==Dr){var i=vn.style,t=vn.clientWidth===window.outerWidth,n=vn.clientHeight===window.outerHeight,s=4;if(e&&(t||n)){for(;s--;)Ca[s]=i[Ea[s]];t&&(i.width=vn.clientWidth+"px",i.overflowY="hidden"),n&&(i.height=vn.clientHeight+"px",i.overflowX="hidden"),Dr=e}else if(Dr){for(;s--;)Ca[s]?i[Ea[s]]=Ca[s]:i.removeProperty(Vc(Ea[s]));Dr=e}}},Pa=function(e,i,t,n){e instanceof Ci&&i instanceof Ci||console.warn("Not a valid state object."),t=t||{};var s=t,o=s.clearProps,l=s.onEnter,u=s.onLeave,h=s.absolute,f=s.absoluteOnLeave,g=s.custom,v=s.delay,y=s.paused,T=s.repeat,w=s.repeatDelay,S=s.yoyo,k=s.toggleClass,C=s.nested,P=s.zIndex,A=s.scale,I=s.fade,D=s.stagger,R=s.spin,F=s.prune,m=("props"in t?t:e).props,L=as(t,Lc),W=Lt.timeline({delay:v,paused:y,repeat:T,repeatDelay:w,yoyo:S,data:"isFlip"}),z=L,ne=[],U=[],q=[],se=[],V=R===!0?1:R||0,ye=typeof R=="function"?R:function(){return V},_e=e.interrupted||i.interrupted,M=W[n!==1?"to":"from"],fe,Y,we,Q,oe,re,ve,ce,ze,Ce,ue,Qe,ie,K;for(Y in i.idLookup)ue=i.alt[Y]?Uc(i,e,Y):i.idLookup[Y],oe=ue.element,Ce=e.idLookup[Y],e.alt[Y]&&oe===Ce.element&&(e.alt[Y].isVisible||!ue.isVisible)&&(Ce=e.alt[Y]),Ce?(re={t:oe,b:Ce,a:ue,sd:Ce.element===oe?0:ue.isVisible?1:-1},q.push(re),re.sd&&(re.sd<0&&(re.b=ue,re.a=Ce),_e&&Bs(re.b,m?Vr[m]:$r),I&&q.push(re.swap={t:Ce.element,b:re.b,a:re.a,sd:-re.sd,swap:re})),oe._flip=Ce.element._flip=Xe?Xe.timeline:W):ue.isVisible&&(q.push({t:oe,b:as(ue,{isVisible:1}),a:ue,sd:0,entering:1}),oe._flip=Xe?Xe.timeline:W);if(m&&(Ra[m]||$c(m)).forEach(function(E){return L[E]=function(Be){return q[Be].a.props[E]}}),q.finalStates=ze=[],Qe=function(){for(zr(q),zc(!0),Q=0;Q<q.length;Q++)re=q[Q],ie=re.a,K=re.b,F&&!ie.isDifferent(K)&&!re.entering?q.splice(Q--,1):(oe=re.t,C&&!(re.sd<0)&&Q&&(ie.matrix=ki(oe,!1,!1,!0)),K.isVisible&&ie.isVisible?(re.sd<0?(ve=new Vn(oe,m,e.simple),ls(ve,ie,A,0,0,ve),ve.matrix=ki(oe,!1,!1,!0),ve.css=re.b.css,re.a=ie=ve,I&&(oe.style.opacity=_e?K.opacity:ie.opacity),D&&se.push(oe)):re.sd>0&&I&&(oe.style.opacity=_e?ie.opacity-K.opacity:"0"),ls(ie,K,A,m)):K.isVisible!==ie.isVisible&&(K.isVisible?ie.isVisible||(K.css=ie.css,U.push(K),q.splice(Q--,1),h&&C&&ls(ie,K,A,m)):(ie.isVisible&&ne.push(ie),q.splice(Q--,1))),A||(oe.style.maxWidth=Math.max(ie.width,K.width)+"px",oe.style.maxHeight=Math.max(ie.height,K.height)+"px",oe.style.minWidth=Math.min(ie.width,K.width)+"px",oe.style.minHeight=Math.min(ie.height,K.height)+"px"),C&&k&&oe.classList.add(k)),ze.push(ie);var Be;if(k&&(Be=ze.map(function(ee){return ee.element}),C&&Be.forEach(function(ee){return ee.classList.remove(k)})),zc(!1),A?(L.scaleX=function(ee){return q[ee].a.scaleX},L.scaleY=function(ee){return q[ee].a.scaleY}):(L.width=function(ee){return q[ee].a.width+"px"},L.height=function(ee){return q[ee].a.height+"px"},L.autoRound=t.autoRound||!1),L.x=function(ee){return q[ee].a.x+"px"},L.y=function(ee){return q[ee].a.y+"px"},L.rotation=function(ee){return q[ee].a.rotation+(R?ye(ee,ce[ee],ce)*360:0)},L.skewX=function(ee){return q[ee].a.skewX},ce=q.map(function(ee){return ee.t}),(P||P===0)&&(L.modifiers={zIndex:function(){return P}},L.zIndex=P,L.immediateRender=t.immediateRender!==!1),I&&(L.opacity=function(ee){return q[ee].sd<0?0:q[ee].sd>0?q[ee].a.opacity:"+=0"}),se.length){D=Lt.utils.distribute(D);var kt=ce.slice(se.length);L.stagger=function(ee,Gt){return D(~se.indexOf(Gt)?ce.indexOf(q[ee].swap.t):ee,Gt,kt)}}if(Jd.forEach(function(ee){return t[ee]&&W.eventCallback(ee,t[ee],t[ee+"Params"])}),g&&ce.length){z=as(L,Lc),"scale"in g&&(g.scaleX=g.scaleY=g.scale,delete g.scale);for(Y in g)fe=as(g[Y],Bc),fe[Y]=L[Y],!("duration"in fe)&&"duration"in L&&(fe.duration=L.duration),fe.stagger=L.stagger,M.call(W,ce,fe,0),delete z[Y]}(ce.length||U.length||ne.length)&&(k&&W.add(function(){return xa(Be,k,W._zTime<0?"remove":"add")},0)&&!y&&xa(Be,k,"add"),ce.length&&M.call(W,ce,z,0)),Fc(l,ne,W),Fc(u,U,W);var Ve=Xe&&Xe.timeline;Ve&&(Ve.add(W,0),Xe._final.push(function(){return Dc(q,!o)})),we=W.duration(),W.call(function(){var ee=W.time()>=we;ee&&!Ve&&Dc(q,!o),k&&xa(Be,k,ee?"remove":"add")})},f&&(h=q.filter(function(E){return!E.sd&&!E.a.isVisible&&E.b.isVisible}).map(function(E){return E.a.element})),Xe){var De;h&&(De=Xe._abs).push.apply(De,Nc(q,h)),Xe._run.push(Qe)}else h&&qc(Nc(q,h)),Qe();var Ye=Xe?Xe.timeline:W;return Ye.revert=function(){return Da(Ye,1,1)},Ye},rp=function a(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(a)},Da=function(e,i,t){if(e&&e.progress()<1&&(!e.paused()||t))return i&&(rp(e),i<2&&e.progress(1),e.kill()),!0},Nr=function(e){for(var i=e.idLookup={},t=e.alt={},n=e.elementStates,s=n.length,o;s--;)o=n[s],i[o.id]?t[o.id]=o:i[o.id]=o},Ci=function(){function a(i,t,n){if(this.props=t&&t.props,this.simple=!!(t&&t.simple),n)this.targets=jc(i),this.elementStates=i,Nr(this);else{this.targets=cs(i);var s=t&&(t.kill===!1||t.batch&&!t.kill);Xe&&!s&&Xe._kill.push(this),this.update(s||!!Xe)}}var e=a.prototype;return e.update=function(t){var n=this;return this.elementStates=this.targets.map(function(s){return new Vn(s,n.props,n.simple)}),Nr(this),this.interrupt(t),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Nr(this),this},e.fit=function(t,n,s){for(var o=zr(this.elementStates.slice(0),!1,!0),l=(t||this).idLookup,u=0,h,f;u<o.length;u++)h=o[u],s&&(h.matrix=ki(h.element,!1,!1,!0)),f=l[h.id],f&&ls(h,f,n,!0,0,h),h.matrix=ki(h.element,!1,!1,!0);return this},e.getProperty=function(t,n){var s=this.getElementState(t)||Fr;return(n in s?s:s.props||Fr)[n]},e.add=function(t){for(var n=t.targets.length,s=this.idLookup,o=this.alt,l,u,h;n--;)u=t.elementStates[n],h=s[u.id],h&&(u.element===h.element||o[u.id]&&o[u.id].element===u.element)?(l=this.elementStates.indexOf(u.element===h.element?h:o[u.id]),this.targets.splice(l,1,t.targets[n]),this.elementStates.splice(l,1,u)):(this.targets.push(t.targets[n]),this.elementStates.push(u));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Nr(this),this},e.compare=function(t){var n=t.idLookup,s=this.idLookup,o=[],l=[],u=[],h=[],f=[],g=t.alt,v=this.alt,y=function(F,m,L){return(F.isVisible!==m.isVisible?F.isVisible?u:h:F.isVisible?l:o).push(L)&&f.push(L)},T=function(F,m,L){return f.indexOf(L)<0&&y(F,m,L)},w,S,k,C,P,A,I,D;for(k in n)P=g[k],A=v[k],w=P?Uc(t,this,k):n[k],C=w.element,S=s[k],A?(D=S.isVisible||!A.isVisible&&C===S.element?S:A,I=P&&!w.isVisible&&!P.isVisible&&D.element===P.element?P:w,I.isVisible&&D.isVisible&&I.element!==D.element?((I.isDifferent(D)?l:o).push(I.element,D.element),f.push(I.element,D.element)):y(I,D,I.element),P&&I.element===P.element&&(P=n[k]),T(I.element!==S.element&&P?P:I,S,S.element),T(P&&P.element===A.element?P:I,A,A.element),P&&T(P,A.element===P.element?A:S,P.element)):(S?S.isDifferent(w)?y(w,S,C):o.push(C):u.push(C),P&&T(P,S,P.element));for(k in s)n[k]||(h.push(s[k].element),v[k]&&h.push(v[k].element));return{changed:l,unchanged:o,enter:u,leave:h}},e.recordInlineStyles=function(){for(var t=Vr[this.props]||$r,n=this.elementStates.length;n--;)Bs(this.elementStates[n],t)},e.interrupt=function(t){var n=this,s=[];this.targets.forEach(function(o){var l=o._flip,u=Da(l,t?0:1);t&&u&&s.indexOf(l)<0&&l.add(function(){return n.updateVisibility()}),u&&s.push(l)}),!t&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(t){var n=t.element.getBoundingClientRect();t.isVisible=!!(n.width||n.height||n.top||n.left),t.uncache=1})},e.getElementState=function(t){return this.elementStates[this.targets.indexOf(zs(t))]},e.makeAbsolute=function(){return zr(this.elementStates.slice(0),!0,!0).map(La)},a}(),Vn=function(){function a(i,t,n){this.element=i,this.update(t,n)}var e=a.prototype;return e.isDifferent=function(t){var n=this.bounds,s=t.bounds;return n.top!==s.top||n.left!==s.left||n.width!==s.width||n.height!==s.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},e.update=function(t,n){var s=this,o=s.element,l=Lt.getProperty(o),u=Lt.core.getCache(o),h=o.getBoundingClientRect(),f=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),g=n?new bn(1,0,0,1,h.left+Lr(),h.top+Rr()):ki(o,!1,!1,!0);s.getProp=l,s.element=o,s.id=sp(o),s.matrix=g,s.cache=u,s.bounds=h,s.isVisible=!!(h.width||h.height||h.left||h.top),s.display=l("display"),s.position=l("position"),s.parent=o.parentNode,s.x=l("x"),s.y=l("y"),s.scaleX=u.scaleX,s.scaleY=u.scaleY,s.rotation=l("rotation"),s.skewX=l("skewX"),s.opacity=l("opacity"),s.width=f?f.width:Ji(l("width","px"),.04),s.height=f?f.height:Ji(l("height","px"),.04),t&&np(s,Ra[t]||$c(t)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Ta(o).inverse(),s.simple=n||os(g.a)===1&&!os(g.b)&&!os(g.c)&&os(g.d)===1,s.uncache=0},a}(),op=function(){function a(i,t){this.vars=i,this.batch=t,this.states=[],this.timeline=t.timeline}var e=a.prototype;return e.getStateById=function(t){for(var n=this.states.length;n--;)if(this.states[n].idLookup[t])return this.states[n]},e.kill=function(){this.batch.remove(this)},a}(),ap=function(){function a(i){this.id=i,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Ci,this.timeline=Lt.timeline()}var e=a.prototype;return e.add=function(t){var n=this.actions.filter(function(s){return s.vars===t});return n.length?n[0]:(n=new op(typeof t=="function"?{animate:t}:t,this),this.actions.push(n),n)},e.remove=function(t){var n=this.actions.indexOf(t);return n>=0&&this.actions.splice(n,1),this},e.getState=function(t){var n=this,s=Xe,o=Fs;return Xe=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(l){l.vars.getState&&(l.states.length=0,Fs=l,l.state=l.vars.getState(l)),t&&l.states.forEach(function(u){return n.state.add(u)})}),Fs=o,Xe=s,this.killConflicts(),this},e.animate=function(){var t=this,n=Xe,s=this.timeline,o=this.actions.length,l,u;for(Xe=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(h){h.vars.animate&&h.vars.animate(h);var f=h.vars.onEnter,g=h.vars.onLeave,v=h.targets,y,T;v&&v.length&&(f||g)&&(y=new Ci,h.states.forEach(function(w){return y.add(w)}),T=y.compare(Vs.getState(v)),T.enter.length&&f&&f(T.enter),T.leave.length&&g&&g(T.leave))}),qc(this._abs),this._run.forEach(function(h){return h()}),u=s.duration(),l=this._final.slice(0),s.add(function(){u<=s.time()&&(l.forEach(function(h){return h()}),Ac(t,"onComplete"))}),Xe=n;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Ac(this,"onStart"),s.restart(),this},e.loadState=function(t){t||(t=function(){return 0});var n=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,l=function u(h){h&&(s.targets=h),o=n.indexOf(u),~o&&(n.splice(o,1),n.length||t())};n.push(l),s.vars.loadState(l)}}),n.length||t(),this},e.setState=function(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},e.killConflicts=function(t){return this.state.interrupt(t),this._kill.forEach(function(n){return n.interrupt(t)}),this},e.run=function(t,n){var s=this;return this!==Xe&&(t||this.getState(n),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(t){this.state.clear(),t||(this.actions.length=0)},e.getStateById=function(t){for(var n=this.actions.length,s;n--;)if(s=this.actions[n].getStateById(t),s)return s;return this.state.idLookup[t]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Oa[this.id]},a}(),Vs=function(){function a(){}return a.getState=function(i,t){var n=ka(i,t);return Fs&&Fs.states.push(n),t&&t.batch&&a.batch(t.batch).state.add(n),n},a.from=function(i,t){return t=t||{},"clearProps"in t||(t.clearProps=!0),Pa(i,ka(t.targets||i.targets,{props:t.props||i.props,simple:t.simple,kill:!!t.kill}),t,-1)},a.to=function(i,t){return Pa(i,ka(t.targets||i.targets,{props:t.props||i.props,simple:t.simple,kill:!!t.kill}),t,1)},a.fromTo=function(i,t,n){return Pa(i,t,n)},a.fit=function(i,t,n){var s=n?as(n,Bc):{},o=n||s,l=o.absolute,u=o.scale,h=o.getVars,f=o.props,g=o.runBackwards,v=o.onComplete,y=o.simple,T=n&&n.fitChild&&zs(n.fitChild),w=Aa(t,f,y,i),S=Aa(i,0,y,w),k=f?Vr[f]:$r,C=Lt.context();return f&&Hc(s,w.props),Bs(S,k),g&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){Br(S),v&&v.apply(this,arguments)}),l&&La(S,w),s=ls(S,w,u||T,f,T,s.duration||h?s:0),C&&!h&&C.add(function(){return function(){return Br(S)}}),h?s:s.duration?Lt.to(S.element,s):null},a.makeAbsolute=function(i,t){return(i instanceof Ci?i:new Ci(i,t)).makeAbsolute()},a.batch=function(i){return i||(i="default"),Oa[i]||(Oa[i]=new ap(i))},a.killFlipsOf=function(i,t){(i instanceof Ci?i.targets:cs(i)).forEach(function(n){return n&&Da(n._flip,t!==!1?1:2)})},a.isFlipping=function(i){var t=a.getByTarget(i);return!!t&&t.isActive()},a.getByTarget=function(i){return(zs(i)||Fr)._flip},a.getElementState=function(i,t){return new Vn(zs(i),t)},a.convertCoordinates=function(i,t,n){var s=ki(t,!0,!0).multiply(ki(i));return n?s.apply(n):s},a.register=function(i){if(vn=typeof document<"u"&&document.body,vn){Lt=i,Ir(vn),cs=Lt.utils.toArray,Ma=Lt.core.getStyleSaver;var t=Lt.utils.snap(.1);Ji=function(s,o){return t(parseFloat(s)+o)}}},a}();Vs.version="3.12.5";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Vs);function Yc(a,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function lp(a,e,i){return e&&Yc(a.prototype,e),i&&Yc(a,i),a}var Mt,jr,cp,hi,wn,Tn,hs,Xc,$n,qs,Gc,en,Ei,Kc,Qc=function(){return Mt||typeof window<"u"&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},Zc=1,us=[],xe=[],Pi=[],Hs=Date.now,Na=function(e,i){return i},up=function(){var e=qs.core,i=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,xe),n.push.apply(n,Pi),xe=t,Pi=n,Na=function(o,l){return i[o](l)}},nn=function(e,i){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][i]},js=function(e){return!!~Gc.indexOf(e)},Ht=function(e,i,t,n,s){return e.addEventListener(i,t,{passive:n!==!1,capture:!!s})},qt=function(e,i,t,n){return e.removeEventListener(i,t,!!n)},qr="scrollLeft",Hr="scrollTop",Fa=function(){return en&&en.isPressed||xe.cache++},Ur=function(e,i){var t=function n(s){if(s||s===0){Zc&&(hi.history.scrollRestoration="manual");var o=en&&en.isPressed;s=n.v=Math.round(s)||(en&&en.iOS?1:0),e(s),n.cacheID=xe.cache,o&&Na("ss",s)}else(i||xe.cache!==n.cacheID||Na("ref"))&&(n.cacheID=xe.cache,n.v=e());return n.v+n.offset};return t.offset=0,e&&t},Dt={s:qr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ur(function(a){return arguments.length?hi.scrollTo(a,dt.sc()):hi.pageXOffset||wn[qr]||Tn[qr]||hs[qr]||0})},dt={s:Hr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dt,sc:Ur(function(a){return arguments.length?hi.scrollTo(Dt.sc(),a):hi.pageYOffset||wn[Hr]||Tn[Hr]||hs[Hr]||0})},jt=function(e,i){return(i&&i._ctx&&i._ctx.selector||Mt.utils.toArray)(e)[0]||(typeof e=="string"&&Mt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tn=function(e,i){var t=i.s,n=i.sc;js(e)&&(e=wn.scrollingElement||Tn);var s=xe.indexOf(e),o=n===dt.sc?1:2;!~s&&(s=xe.push(e)-1),xe[s+o]||Ht(e,"scroll",Fa);var l=xe[s+o],u=l||(xe[s+o]=Ur(nn(e,t),!0)||(js(e)?n:Ur(function(h){return arguments.length?e[t]=h:e[t]})));return u.target=e,l||(u.smooth=Mt.getProperty(e,"scrollBehavior")==="smooth"),u},Yr=function(e,i,t){var n=e,s=e,o=Hs(),l=o,u=i||50,h=Math.max(500,u*3),f=function(T,w){var S=Hs();w||S-o>u?(s=n,n=T,l=o,o=S):t?n+=T:n=s+(T-s)/(S-l)*(o-l)},g=function(){s=n=t?0:n,l=o=0},v=function(T){var w=l,S=s,k=Hs();return(T||T===0)&&T!==n&&f(T),o===l||k-l>h?0:(n+(t?S:-S))/((t?k:o)-w)*1e3};return{update:f,reset:g,getVelocity:v}},$s=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wc=function(e){var i=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(t)?i:t},Jc=function(){qs=Mt.core.globals().ScrollTrigger,qs&&qs.core&&up()},eu=function(e){return Mt=e||Qc(),!jr&&Mt&&typeof document<"u"&&document.body&&(hi=window,wn=document,Tn=wn.documentElement,hs=wn.body,Gc=[hi,wn,Tn,hs],cp=Mt.utils.clamp,Kc=Mt.core.context||function(){},$n="onpointerenter"in hs?"pointer":"mouse",Xc=lt.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=lt.eventTypes=("ontouchstart"in Tn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Tn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zc=0},500),Jc(),jr=1),jr};Dt.op=dt;xe.cache=0;var lt=function(){function a(i){this.init(i)}var e=a.prototype;return e.init=function(t){jr||eu(Mt)||console.warn("Please gsap.registerPlugin(Observer)"),qs||Jc();var n=t.tolerance,s=t.dragMinimum,o=t.type,l=t.target,u=t.lineHeight,h=t.debounce,f=t.preventDefault,g=t.onStop,v=t.onStopDelay,y=t.ignore,T=t.wheelSpeed,w=t.event,S=t.onDragStart,k=t.onDragEnd,C=t.onDrag,P=t.onPress,A=t.onRelease,I=t.onRight,D=t.onLeft,R=t.onUp,F=t.onDown,m=t.onChangeX,L=t.onChangeY,W=t.onChange,z=t.onToggleX,ne=t.onToggleY,U=t.onHover,q=t.onHoverEnd,se=t.onMove,V=t.ignoreCheck,ye=t.isNormalizer,_e=t.onGestureStart,M=t.onGestureEnd,fe=t.onWheel,Y=t.onEnable,we=t.onDisable,Q=t.onClick,oe=t.scrollSpeed,re=t.capture,ve=t.allowClicks,ce=t.lockAxis,ze=t.onLockAxis;this.target=l=jt(l)||Tn,this.vars=t,y&&(y=Mt.utils.toArray(y)),n=n||1e-9,s=s||0,T=T||1,oe=oe||1,o=o||"wheel,touch,pointer",h=h!==!1,u||(u=parseFloat(hi.getComputedStyle(hs).lineHeight)||22);var Ce,ue,Qe,ie,K,De,Ye,E=this,Be=0,kt=0,Ve=t.passive||!f,ee=tn(l,Dt),Gt=tn(l,dt),Oi=ee(),Vi=Gt(),ct=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",si=js(l),We=l.ownerDocument||wn,bt=[0,0,0],zt=[0,0,0],vt=0,$i=function(){return vt=Hs()},He=function(le,Ae){return(E.event=le)&&y&&~y.indexOf(le.target)||Ae&&ct&&le.pointerType!=="touch"||V&&V(le,Ae)},Sn=function(){E._vx.reset(),E._vy.reset(),ue.pause(),g&&g(E)},Ai=function(){var le=E.deltaX=Wc(bt),Ae=E.deltaY=Wc(zt),G=Math.abs(le)>=n,he=Math.abs(Ae)>=n;W&&(G||he)&&W(E,le,Ae,bt,zt),G&&(I&&E.deltaX>0&&I(E),D&&E.deltaX<0&&D(E),m&&m(E),z&&E.deltaX<0!=Be<0&&z(E),Be=E.deltaX,bt[0]=bt[1]=bt[2]=0),he&&(F&&E.deltaY>0&&F(E),R&&E.deltaY<0&&R(E),L&&L(E),ne&&E.deltaY<0!=kt<0&&ne(E),kt=E.deltaY,zt[0]=zt[1]=zt[2]=0),(ie||Qe)&&(se&&se(E),Qe&&(C(E),Qe=!1),ie=!1),De&&!(De=!1)&&ze&&ze(E),K&&(fe(E),K=!1),Ce=0},on=function(le,Ae,G){bt[G]+=le,zt[G]+=Ae,E._vx.update(le),E._vy.update(Ae),h?Ce||(Ce=requestAnimationFrame(Ai)):Ai()},qi=function(le,Ae){ce&&!Ye&&(E.axis=Ye=Math.abs(le)>Math.abs(Ae)?"x":"y",De=!0),Ye!=="y"&&(bt[2]+=le,E._vx.update(le,!0)),Ye!=="x"&&(zt[2]+=Ae,E._vy.update(Ae,!0)),h?Ce||(Ce=requestAnimationFrame(Ai)):Ai()},$e=function(le){if(!He(le,1)){le=$s(le,f);var Ae=le.clientX,G=le.clientY,he=Ae-E.x,ae=G-E.y,me=E.isDragging;E.x=Ae,E.y=G,(me||Math.abs(E.startX-Ae)>=s||Math.abs(E.startY-G)>=s)&&(C&&(Qe=!0),me||(E.isDragging=!0),qi(he,ae),me||S&&S(E))}},ri=E.onPress=function(X){He(X,1)||X&&X.button||(E.axis=Ye=null,ue.pause(),E.isPressed=!0,X=$s(X),Be=kt=0,E.startX=E.x=X.clientX,E.startY=E.y=X.clientY,E._vx.reset(),E._vy.reset(),Ht(ye?l:We,Ei[1],$e,Ve,!0),E.deltaX=E.deltaY=0,P&&P(E))},be=E.onRelease=function(X){if(!He(X,1)){qt(ye?l:We,Ei[1],$e,!0);var le=!isNaN(E.y-E.startY),Ae=E.isDragging,G=Ae&&(Math.abs(E.x-E.startX)>3||Math.abs(E.y-E.startY)>3),he=$s(X);!G&&le&&(E._vx.reset(),E._vy.reset(),f&&ve&&Mt.delayedCall(.08,function(){if(Hs()-vt>300&&!X.defaultPrevented){if(X.target.click)X.target.click();else if(We.createEvent){var ae=We.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,hi,1,he.screenX,he.screenY,he.clientX,he.clientY,!1,!1,!1,!1,0,null),X.target.dispatchEvent(ae)}}})),E.isDragging=E.isGesturing=E.isPressed=!1,g&&Ae&&!ye&&ue.restart(!0),k&&Ae&&k(E),A&&A(E,G)}},Ii=function(le){return le.touches&&le.touches.length>1&&(E.isGesturing=!0)&&_e(le,E.isDragging)},Kt=function(){return(E.isGesturing=!1)||M(E)},oi=function(le){if(!He(le)){var Ae=ee(),G=Gt();on((Ae-Oi)*oe,(G-Vi)*oe,1),Oi=Ae,Vi=G,g&&ue.restart(!0)}},ai=function(le){if(!He(le)){le=$s(le,f),fe&&(K=!0);var Ae=(le.deltaMode===1?u:le.deltaMode===2?hi.innerHeight:1)*T;on(le.deltaX*Ae,le.deltaY*Ae,0),g&&!ye&&ue.restart(!0)}},fi=function(le){if(!He(le)){var Ae=le.clientX,G=le.clientY,he=Ae-E.x,ae=G-E.y;E.x=Ae,E.y=G,ie=!0,g&&ue.restart(!0),(he||ae)&&qi(he,ae)}},H=function(le){E.event=le,U(E)},mi=function(le){E.event=le,q(E)},an=function(le){return He(le)||$s(le,f)&&Q(E)};ue=E._dc=Mt.delayedCall(v||.25,Sn).pause(),E.deltaX=E.deltaY=0,E._vx=Yr(0,50,!0),E._vy=Yr(0,50,!0),E.scrollX=ee,E.scrollY=Gt,E.isDragging=E.isGesturing=E.isPressed=!1,Kc(this),E.enable=function(X){return E.isEnabled||(Ht(si?We:l,"scroll",Fa),o.indexOf("scroll")>=0&&Ht(si?We:l,"scroll",oi,Ve,re),o.indexOf("wheel")>=0&&Ht(l,"wheel",ai,Ve,re),(o.indexOf("touch")>=0&&Xc||o.indexOf("pointer")>=0)&&(Ht(l,Ei[0],ri,Ve,re),Ht(We,Ei[2],be),Ht(We,Ei[3],be),ve&&Ht(l,"click",$i,!0,!0),Q&&Ht(l,"click",an),_e&&Ht(We,"gesturestart",Ii),M&&Ht(We,"gestureend",Kt),U&&Ht(l,$n+"enter",H),q&&Ht(l,$n+"leave",mi),se&&Ht(l,$n+"move",fi)),E.isEnabled=!0,X&&X.type&&ri(X),Y&&Y(E)),E},E.disable=function(){E.isEnabled&&(us.filter(function(X){return X!==E&&js(X.target)}).length||qt(si?We:l,"scroll",Fa),E.isPressed&&(E._vx.reset(),E._vy.reset(),qt(ye?l:We,Ei[1],$e,!0)),qt(si?We:l,"scroll",oi,re),qt(l,"wheel",ai,re),qt(l,Ei[0],ri,re),qt(We,Ei[2],be),qt(We,Ei[3],be),qt(l,"click",$i,!0),qt(l,"click",an),qt(We,"gesturestart",Ii),qt(We,"gestureend",Kt),qt(l,$n+"enter",H),qt(l,$n+"leave",mi),qt(l,$n+"move",fi),E.isEnabled=E.isPressed=E.isDragging=!1,we&&we(E))},E.kill=E.revert=function(){E.disable();var X=us.indexOf(E);X>=0&&us.splice(X,1),en===E&&(en=0)},us.push(E),ye&&js(l)&&(en=E),E.enable(w)},lp(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();lt.version="3.12.5";lt.create=function(a){return new lt(a)};lt.register=eu;lt.getAll=function(){return us.slice()};lt.getById=function(a){return us.filter(function(e){return e.vars.id===a})[0]};Qc()&&Mt.registerPlugin(lt);var J,fs,Oe,et,Mi,Ge,_u,lo,nr,Qs,Ys,Wr,Nt,po,Ua,Yt,tu,iu,ms,bu,za,vu,Ut,Ya,wu,Tu,xn,Wa,Za,gs,Ja,co,Xa,Ba,Xr=1,Ft=Date.now,Va=Ft(),Ti=0,Ws=0,nu=function(e,i,t){var n=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+i+"Clamp"]=n,n?e.substr(6,e.length-7):e},su=function(e,i){return i&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hp=function a(){return Ws&&requestAnimationFrame(a)},ru=function(){return po=1},ou=function(){return po=0},zi=function(e){return e},Xs=function(e){return Math.round(e*1e5)/1e5||0},xu=function(){return typeof window<"u"},Su=function(){return J||xu()&&(J=window.gsap)&&J.registerPlugin&&J},Wn=function(e){return!!~_u.indexOf(e)},ku=function(e){return(e==="Height"?Ja:Oe["inner"+e])||Mi["client"+e]||Ge["client"+e]},Cu=function(e){return nn(e,"getBoundingClientRect")||(Wn(e)?function(){return ao.width=Oe.innerWidth,ao.height=Ja,ao}:function(){return sn(e)})},dp=function(e,i,t){var n=t.d,s=t.d2,o=t.a;return(o=nn(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(i?ku(s):e["client"+s])||0}},pp=function(e,i){return!i||~Pi.indexOf(e)?Cu(e):function(){return ao}},Bi=function(e,i){var t=i.s,n=i.d2,s=i.d,o=i.a;return Math.max(0,(t="scroll"+n)&&(o=nn(e,t))?o()-Cu(e)()[s]:Wn(e)?(Mi[t]||Ge[t])-ku(n):e[t]-e["offset"+n])},Gr=function(e,i){for(var t=0;t<ms.length;t+=3)(!i||~i.indexOf(ms[t+1]))&&e(ms[t],ms[t+1],ms[t+2])},pi=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Gs=function(e){return typeof e=="number"},qn=function(e){return typeof e=="object"},Us=function(e,i,t){return e&&e.progress(i?0:1)&&t&&e.pause()},$a=function(e,i){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return i(e)}):i(e);t&&t.totalTime&&(e.callbackAnimation=t)}},ds=Math.abs,Eu="left",Pu="top",el="right",tl="bottom",jn="width",Un="height",Zs="Right",Js="Left",er="Top",tr="Bottom",pt="padding",vi="margin",_s="Width",il="Height",_t="px",wi=function(e){return Oe.getComputedStyle(e)},fp=function(e){var i=wi(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},au=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},sn=function(e,i){var t=i&&wi(e)[Ua]!=="matrix(1, 0, 0, 1, 0, 0)"&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return t&&t.progress(0).kill(),n},uo=function(e,i){var t=i.d2;return e["offset"+t]||e["client"+t]||0},Mu=function(e){var i=[],t=e.labels,n=e.duration(),s;for(s in t)i.push(t[s]/n);return i},mp=function(e){return function(i){return J.utils.snap(Mu(e),i)}},nl=function(e){var i=J.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return t?function(n,s,o){o===void 0&&(o=.001);var l;if(!s)return i(n);if(s>0){for(n-=o,l=0;l<t.length;l++)if(t[l]>=n)return t[l];return t[l-1]}else for(l=t.length,n+=o;l--;)if(t[l]<=n)return t[l];return t[0]}:function(n,s,o){o===void 0&&(o=.001);var l=i(n);return!s||Math.abs(l-n)<o||l-n<0==s<0?l:i(s<0?n-e:n+e)}},gp=function(e){return function(i,t){return nl(Mu(e))(i,t.direction)}},Kr=function(e,i,t,n){return t.split(",").forEach(function(s){return e(i,s,n)})},St=function(e,i,t,n,s){return e.addEventListener(i,t,{passive:!n,capture:!!s})},xt=function(e,i,t,n){return e.removeEventListener(i,t,!!n)},Qr=function(e,i,t){t=t&&t.wheelHandler,t&&(e(i,"wheel",t),e(i,"touchmove",t))},lu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zr={toggleActions:"play",anticipatePin:0},ho={top:0,left:0,center:.5,bottom:1,right:1},no=function(e,i){if(pi(e)){var t=e.indexOf("="),n=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(n*=i/100),e=e.substr(0,t-1)),e=n+(e in ho?ho[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Jr=function(e,i,t,n,s,o,l,u){var h=s.startColor,f=s.endColor,g=s.fontSize,v=s.indent,y=s.fontWeight,T=et.createElement("div"),w=Wn(t)||nn(t,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,k=w?Ge:t,C=e.indexOf("start")!==-1,P=C?h:f,A="border-color:"+P+";font-size:"+g+";color:"+P+";font-weight:"+y+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((S||u)&&w?"fixed;":"absolute;"),(S||u||!w)&&(A+=(n===dt?el:tl)+":"+(o+parseFloat(v))+"px;"),l&&(A+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),T._isStart=C,T.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),T.style.cssText=A,T.innerText=i||i===0?e+"-"+i:e,k.children[0]?k.insertBefore(T,k.children[0]):k.appendChild(T),T._offset=T["offset"+n.op.d2],so(T,0,n,C),T},so=function(e,i,t,n){var s={display:"block"},o=t[n?"os2":"p2"],l=t[n?"p2":"os2"];e._isFlipped=n,s[t.a+"Percent"]=n?-100:0,s[t.a]=n?"1px":0,s["border"+o+_s]=1,s["border"+l+_s]=0,s[t.p]=i+"px",J.set(e,s)},Se=[],Ga={},sr,cu=function(){return Ft()-Ti>34&&(sr||(sr=requestAnimationFrame(rn)))},ps=function(){(!Ut||!Ut.isPressed||Ut.startX>Ge.clientWidth)&&(xe.cache++,Ut?sr||(sr=requestAnimationFrame(rn)):rn(),Ti||Gn("scrollStart"),Ti=Ft())},qa=function(){Tu=Oe.innerWidth,wu=Oe.innerHeight},Ks=function(){xe.cache++,!Nt&&!vu&&!et.fullscreenElement&&!et.webkitFullscreenElement&&(!Ya||Tu!==Oe.innerWidth||Math.abs(Oe.innerHeight-wu)>Oe.innerHeight*.25)&&lo.restart(!0)},Xn={},yp=[],Ou=function a(){return xt(ke,"scrollEnd",a)||Hn(!0)},Gn=function(e){return Xn[e]&&Xn[e].map(function(i){return i()})||yp},di=[],Au=function(e){for(var i=0;i<di.length;i+=5)(!e||di[i+4]&&di[i+4].query===e)&&(di[i].style.cssText=di[i+1],di[i].getBBox&&di[i].setAttribute("transform",di[i+2]||""),di[i+3].uncache=1)},sl=function(e,i){var t;for(Yt=0;Yt<Se.length;Yt++)t=Se[Yt],t&&(!i||t._ctx===i)&&(e?t.kill(1):t.revert(!0,!0));co=!0,i&&Au(i),i||Gn("revert")},Iu=function(e,i){xe.cache++,(i||!Wt)&&xe.forEach(function(t){return Xt(t)&&t.cacheID++&&(t.rec=0)}),pi(e)&&(Oe.history.scrollRestoration=Za=e)},Wt,Yn=0,uu,_p=function(){if(uu!==Yn){var e=uu=Yn;requestAnimationFrame(function(){return e===Yn&&Hn(!0)})}},Ru=function(){Ge.appendChild(gs),Ja=!Ut&&gs.offsetHeight||Oe.innerHeight,Ge.removeChild(gs)},hu=function(e){return nr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},Hn=function(e,i){if(Ti&&!e&&!co){St(ke,"scrollEnd",Ou);return}Ru(),Wt=ke.isRefreshing=!0,xe.forEach(function(n){return Xt(n)&&++n.cacheID&&(n.rec=n())});var t=Gn("refreshInit");bu&&ke.sort(),i||sl(),xe.forEach(function(n){Xt(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Se.slice(0).forEach(function(n){return n.refresh()}),co=!1,Se.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Xa=1,hu(!0),Se.forEach(function(n){var s=Bi(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,l=n._startClamp&&n.start>=s;(o||l)&&n.setPositions(l?s-1:n.start,o?Math.max(l?s:n.start+1,s):n.end,!0)}),hu(!1),Xa=0,t.forEach(function(n){return n&&n.render&&n.render(-1)}),xe.forEach(function(n){Xt(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Iu(Za,1),lo.pause(),Yn++,Wt=2,rn(2),Se.forEach(function(n){return Xt(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Wt=ke.isRefreshing=!1,Gn("refresh")},Ka=0,ro=1,ir,rn=function(e){if(e===2||!Wt&&!co){ke.isUpdating=!0,ir&&ir.update(0);var i=Se.length,t=Ft(),n=t-Va>=50,s=i&&Se[0].scroll();if(ro=Ka>s?-1:1,Wt||(Ka=s),n&&(Ti&&!po&&t-Ti>200&&(Ti=0,Gn("scrollEnd")),Ys=Va,Va=t),ro<0){for(Yt=i;Yt-- >0;)Se[Yt]&&Se[Yt].update(0,n);ro=1}else for(Yt=0;Yt<i;Yt++)Se[Yt]&&Se[Yt].update(0,n);ke.isUpdating=!1}sr=0},Qa=[Eu,Pu,tl,el,vi+tr,vi+Zs,vi+er,vi+Js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],oo=Qa.concat([jn,Un,"boxSizing","max"+_s,"max"+il,"position",vi,pt,pt+er,pt+Zs,pt+tr,pt+Js]),bp=function(e,i,t){ys(t);var n=e._gsap;if(n.spacerIsNative)ys(n.spacerState);else if(e._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))}e._gsap.swappedIn=!1},Ha=function(e,i,t,n){if(!e._gsap.swappedIn){for(var s=Qa.length,o=i.style,l=e.style,u;s--;)u=Qa[s],o[u]=t[u];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),l[tl]=l[el]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jn]=uo(e,Dt)+_t,o[Un]=uo(e,dt)+_t,o[pt]=l[vi]=l[Pu]=l[Eu]="0",ys(n),l[jn]=l["max"+_s]=t[jn],l[Un]=l["max"+il]=t[Un],l[pt]=t[pt],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},vp=/([A-Z])/g,ys=function(e){if(e){var i=e.t.style,t=e.length,n=0,s,o;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;n<t;n+=2)o=e[n+1],s=e[n],o?i[s]=o:i[s]&&i.removeProperty(s.replace(vp,"-$1").toLowerCase())}},eo=function(e){for(var i=oo.length,t=e.style,n=[],s=0;s<i;s++)n.push(oo[s],t[oo[s]]);return n.t=e,n},wp=function(e,i,t){for(var n=[],s=e.length,o=t?8:0,l;o<s;o+=2)l=e[o],n.push(l,l in i?i[l]:e[o+1]);return n.t=e.t,n},ao={left:0,top:0},du=function(e,i,t,n,s,o,l,u,h,f,g,v,y,T){Xt(e)&&(e=e(u)),pi(e)&&e.substr(0,3)==="max"&&(e=v+(e.charAt(4)==="="?no("0"+e.substr(3),t):0));var w=y?y.time():0,S,k,C;if(y&&y.seek(0),isNaN(e)||(e=+e),Gs(e))y&&(e=J.utils.mapRange(y.scrollTrigger.start,y.scrollTrigger.end,0,v,e)),l&&so(l,t,n,!0);else{Xt(i)&&(i=i(u));var P=(e||"0").split(" "),A,I,D,R;C=jt(i,u)||Ge,A=sn(C)||{},(!A||!A.left&&!A.top)&&wi(C).display==="none"&&(R=C.style.display,C.style.display="block",A=sn(C),R?C.style.display=R:C.style.removeProperty("display")),I=no(P[0],A[n.d]),D=no(P[1]||"0",t),e=A[n.p]-h[n.p]-f+I+s-D,l&&so(l,D,n,t-D<20||l._isStart&&D>20),t-=t-D}if(T&&(u[T]=e||-.001,e<0&&(e=0)),o){var F=e+t,m=o._isStart;S="scroll"+n.d2,so(o,F,n,m&&F>20||!m&&(g?Math.max(Ge[S],Mi[S]):o.parentNode[S])<=F+1),g&&(h=sn(l),g&&(o.style[n.op.p]=h[n.op.p]-n.op.m-o._offset+_t))}return y&&C&&(S=sn(C),y.seek(v),k=sn(C),y._caScrollDist=S[n.p]-k[n.p],e=e/y._caScrollDist*v),y&&y.seek(w),y?e:Math.round(e)},Tp=/(webkit|moz|length|cssText|inset)/i,pu=function(e,i,t,n){if(e.parentNode!==i){var s=e.style,o,l;if(i===Ge){e._stOrig=s.cssText,l=wi(e);for(o in l)!+o&&!Tp.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=t,s.left=n}else s.cssText=e._stOrig;J.core.getCache(e).uncache=1,i.appendChild(e)}},Lu=function(e,i,t){var n=i,s=n;return function(o){var l=Math.round(e());return l!==n&&l!==s&&Math.abs(l-n)>3&&Math.abs(l-s)>3&&(o=l,t&&t()),s=n,n=o,o}},to=function(e,i,t){var n={};n[i.p]="+="+t,J.set(e,n)},fu=function(e,i){var t=tn(e,i),n="_scroll"+i.p2,s=function o(l,u,h,f,g){var v=o.tween,y=u.onComplete,T={};h=h||t();var w=Lu(t,h,function(){v.kill(),o.tween=0});return g=f&&g||0,f=f||l-h,v&&v.kill(),u[n]=l,u.inherit=!1,u.modifiers=T,T[n]=function(){return w(h+f*v.ratio+g*v.ratio*v.ratio)},u.onUpdate=function(){xe.cache++,o.tween&&rn()},u.onComplete=function(){o.tween=0,y&&y.call(v)},v=o.tween=J.to(e,u),v};return e[n]=t,t.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},St(e,"wheel",t.wheelHandler),ke.isTouch&&St(e,"touchmove",t.wheelHandler),s},ke=function(){function a(i,t){fs||a.register(J)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wa(this),this.init(i,t)}var e=a.prototype;return e.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ws){this.update=this.refresh=this.kill=zi;return}t=au(pi(t)||Gs(t)||t.nodeType?{trigger:t}:t,Zr);var s=t,o=s.onUpdate,l=s.toggleClass,u=s.id,h=s.onToggle,f=s.onRefresh,g=s.scrub,v=s.trigger,y=s.pin,T=s.pinSpacing,w=s.invalidateOnRefresh,S=s.anticipatePin,k=s.onScrubComplete,C=s.onSnapComplete,P=s.once,A=s.snap,I=s.pinReparent,D=s.pinSpacer,R=s.containerAnimation,F=s.fastScrollEnd,m=s.preventOverlaps,L=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Dt:dt,W=!g&&g!==0,z=jt(t.scroller||Oe),ne=J.core.getCache(z),U=Wn(z),q=("pinType"in t?t.pinType:nn(z,"pinType")||U&&"fixed")==="fixed",se=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],V=W&&t.toggleActions.split(" "),ye="markers"in t?t.markers:Zr.markers,_e=U?0:parseFloat(wi(z)["border"+L.p2+_s])||0,M=this,fe=t.onRefreshInit&&function(){return t.onRefreshInit(M)},Y=dp(z,U,L),we=pp(z,U),Q=0,oe=0,re=0,ve=tn(z,L),ce,ze,Ce,ue,Qe,ie,K,De,Ye,E,Be,kt,Ve,ee,Gt,Oi,Vi,ct,si,We,bt,zt,vt,$i,He,Sn,Ai,on,qi,$e,ri,be,Ii,Kt,oi,ai,fi,H,mi;if(M._startClamp=M._endClamp=!1,M._dir=L,S*=45,M.scroller=z,M.scroll=R?R.time.bind(R):ve,ue=ve(),M.vars=t,n=n||t.animation,"refreshPriority"in t&&(bu=1,t.refreshPriority===-9999&&(ir=M)),ne.tweenScroll=ne.tweenScroll||{top:fu(z,dt),left:fu(z,Dt)},M.tweenTo=ce=ne.tweenScroll[L.p],M.scrubDuration=function(G){Ii=Gs(G)&&G,Ii?be?be.duration(G):be=J.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ii,paused:!0,onComplete:function(){return k&&k(M)}}):(be&&be.progress(1).kill(),be=0)},n&&(n.vars.lazy=!1,n._initted&&!M.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),M.animation=n.pause(),n.scrollTrigger=M,M.scrubDuration(g),$e=0,u||(u=n.vars.id)),A&&((!qn(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in Ge.style&&J.set(U?[Ge,Mi]:z,{scrollBehavior:"auto"}),xe.forEach(function(G){return Xt(G)&&G.target===(U?et.scrollingElement||Mi:z)&&(G.smooth=!1)}),Ce=Xt(A.snapTo)?A.snapTo:A.snapTo==="labels"?mp(n):A.snapTo==="labelsDirectional"?gp(n):A.directional!==!1?function(G,he){return nl(A.snapTo)(G,Ft()-oe<500?0:he.direction)}:J.utils.snap(A.snapTo),Kt=A.duration||{min:.1,max:2},Kt=qn(Kt)?Qs(Kt.min,Kt.max):Qs(Kt,Kt),oi=J.delayedCall(A.delay||Ii/2||.1,function(){var G=ve(),he=Ft()-oe<500,ae=ce.tween;if((he||Math.abs(M.getVelocity())<10)&&!ae&&!po&&Q!==G){var me=(G-ie)/ee,tt=n&&!W?n.totalProgress():me,Ee=he?0:(tt-ri)/(Ft()-Ys)*1e3||0,Le=J.utils.clamp(-me,1-me,ds(Ee/2)*Ee/.185),ut=me+(A.inertia===!1?0:Le),de,je,Ne=A,Bt=Ne.onStart,Fe=Ne.onInterrupt,Ct=Ne.onComplete;if(de=Ce(ut,M),Gs(de)||(de=ut),je=Math.round(ie+de*ee),G<=K&&G>=ie&&je!==G){if(ae&&!ae._initted&&ae.data<=ds(je-G))return;A.inertia===!1&&(Le=de-me),ce(je,{duration:Kt(ds(Math.max(ds(ut-tt),ds(de-tt))*.185/Ee/.05||0)),ease:A.ease||"power3",data:ds(je-G),onInterrupt:function(){return oi.restart(!0)&&Fe&&Fe(M)},onComplete:function(){M.update(),Q=ve(),n&&(be?be.resetTo("totalProgress",de,n._tTime/n._tDur):n.progress(de)),$e=ri=n&&!W?n.totalProgress():M.progress,C&&C(M),Ct&&Ct(M)}},G,Le*ee,je-G-Le*ee),Bt&&Bt(M,ce.tween)}}else M.isActive&&Q!==G&&oi.restart(!0)}).pause()),u&&(Ga[u]=M),v=M.trigger=jt(v||y!==!0&&y),mi=v&&v._gsap&&v._gsap.stRevert,mi&&(mi=mi(M)),y=y===!0?v:jt(y),pi(l)&&(l={targets:v,className:l}),y&&(T===!1||T===vi||(T=!T&&y.parentNode&&y.parentNode.style&&wi(y.parentNode).display==="flex"?!1:pt),M.pin=y,ze=J.core.getCache(y),ze.spacer?Gt=ze.pinState:(D&&(D=jt(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),ze.spacerIsNative=!!D,D&&(ze.spacerState=eo(D))),ze.spacer=ct=D||et.createElement("div"),ct.classList.add("pin-spacer"),u&&ct.classList.add("pin-spacer-"+u),ze.pinState=Gt=eo(y)),t.force3D!==!1&&J.set(y,{force3D:!0}),M.spacer=ct=ze.spacer,qi=wi(y),$i=qi[T+L.os2],We=J.getProperty(y),bt=J.quickSetter(y,L.a,_t),Ha(y,ct,qi),Vi=eo(y)),ye){kt=qn(ye)?au(ye,lu):lu,E=Jr("scroller-start",u,z,L,kt,0),Be=Jr("scroller-end",u,z,L,kt,0,E),si=E["offset"+L.op.d2];var an=jt(nn(z,"content")||z);De=this.markerStart=Jr("start",u,an,L,kt,si,0,R),Ye=this.markerEnd=Jr("end",u,an,L,kt,si,0,R),R&&(H=J.quickSetter([De,Ye],L.a,_t)),!q&&!(Pi.length&&nn(z,"fixedMarkers")===!0)&&(fp(U?Ge:z),J.set([E,Be],{force3D:!0}),Sn=J.quickSetter(E,L.a,_t),on=J.quickSetter(Be,L.a,_t))}if(R){var X=R.vars.onUpdate,le=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){M.update(0,0,1),X&&X.apply(R,le||[])})}if(M.previous=function(){return Se[Se.indexOf(M)-1]},M.next=function(){return Se[Se.indexOf(M)+1]},M.revert=function(G,he){if(!he)return M.kill(!0);var ae=G!==!1||!M.enabled,me=Nt;ae!==M.isReverted&&(ae&&(ai=Math.max(ve(),M.scroll.rec||0),re=M.progress,fi=n&&n.progress()),De&&[De,Ye,E,Be].forEach(function(tt){return tt.style.display=ae?"none":"block"}),ae&&(Nt=M,M.update(ae)),y&&(!I||!M.isActive)&&(ae?bp(y,ct,Gt):Ha(y,ct,wi(y),He)),ae||M.update(ae),Nt=me,M.isReverted=ae)},M.refresh=function(G,he,ae,me){if(!((Nt||!M.enabled)&&!he)){if(y&&G&&Ti){St(a,"scrollEnd",Ou);return}!Wt&&fe&&fe(M),Nt=M,ce.tween&&!ae&&(ce.tween.kill(),ce.tween=0),be&&be.pause(),w&&n&&n.revert({kill:!1}).invalidate(),M.isReverted||M.revert(!0,!0),M._subPinOffset=!1;var tt=Y(),Ee=we(),Le=R?R.duration():Bi(z,L),ut=ee<=.01,de=0,je=me||0,Ne=qn(ae)?ae.end:t.end,Bt=t.endTrigger||v,Fe=qn(ae)?ae.start:t.start||(t.start===0||!v?0:y?"0 0":"0 100%"),Ct=M.pinnedContainer=t.pinnedContainer&&jt(t.pinnedContainer,M),Ot=v&&Math.max(0,Se.indexOf(M))||0,ft=Ot,it,mt,Hi,kn,wt,nt,Qt,Cn,ln,cn,r,d,c;for(ye&&qn(ae)&&(d=J.getProperty(E,L.p),c=J.getProperty(Be,L.p));ft--;)nt=Se[ft],nt.end||nt.refresh(0,1)||(Nt=M),Qt=nt.pin,Qt&&(Qt===v||Qt===y||Qt===Ct)&&!nt.isReverted&&(cn||(cn=[]),cn.unshift(nt),nt.revert(!0,!0)),nt!==Se[ft]&&(Ot--,ft--);for(Xt(Fe)&&(Fe=Fe(M)),Fe=nu(Fe,"start",M),ie=du(Fe,v,tt,L,ve(),De,E,M,Ee,_e,q,Le,R,M._startClamp&&"_startClamp")||(y?-.001:0),Xt(Ne)&&(Ne=Ne(M)),pi(Ne)&&!Ne.indexOf("+=")&&(~Ne.indexOf(" ")?Ne=(pi(Fe)?Fe.split(" ")[0]:"")+Ne:(de=no(Ne.substr(2),tt),Ne=pi(Fe)?Fe:(R?J.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,ie):ie)+de,Bt=v)),Ne=nu(Ne,"end",M),K=Math.max(ie,du(Ne||(Bt?"100% 0":Le),Bt,tt,L,ve()+de,Ye,Be,M,Ee,_e,q,Le,R,M._endClamp&&"_endClamp"))||-.001,de=0,ft=Ot;ft--;)nt=Se[ft],Qt=nt.pin,Qt&&nt.start-nt._pinPush<=ie&&!R&&nt.end>0&&(it=nt.end-(M._startClamp?Math.max(0,nt.start):nt.start),(Qt===v&&nt.start-nt._pinPush<ie||Qt===Ct)&&isNaN(Fe)&&(de+=it*(1-nt.progress)),Qt===y&&(je+=it));if(ie+=de,K+=de,M._startClamp&&(M._startClamp+=de),M._endClamp&&!Wt&&(M._endClamp=K||-.001,K=Math.min(K,Bi(z,L))),ee=K-ie||(ie-=.01)&&.001,ut&&(re=J.utils.clamp(0,1,J.utils.normalize(ie,K,ai))),M._pinPush=je,De&&de&&(it={},it[L.a]="+="+de,Ct&&(it[L.p]="-="+ve()),J.set([De,Ye],it)),y&&!(Xa&&M.end>=Bi(z,L)))it=wi(y),kn=L===dt,Hi=ve(),zt=parseFloat(We(L.a))+je,!Le&&K>1&&(r=(U?et.scrollingElement||Mi:z).style,r={style:r,value:r["overflow"+L.a.toUpperCase()]},U&&wi(Ge)["overflow"+L.a.toUpperCase()]!=="scroll"&&(r.style["overflow"+L.a.toUpperCase()]="scroll")),Ha(y,ct,it),Vi=eo(y),mt=sn(y,!0),Cn=q&&tn(z,kn?Dt:dt)(),T?(He=[T+L.os2,ee+je+_t],He.t=ct,ft=T===pt?uo(y,L)+ee+je:0,ft&&(He.push(L.d,ft+_t),ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=ft+_t)),ys(He),Ct&&Se.forEach(function(p){p.pin===Ct&&p.vars.pinSpacing!==!1&&(p._subPinOffset=!0)}),q&&ve(ai)):(ft=uo(y,L),ft&&ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=ft+_t)),q&&(wt={top:mt.top+(kn?Hi-ie:Cn)+_t,left:mt.left+(kn?Cn:Hi-ie)+_t,boxSizing:"border-box",position:"fixed"},wt[jn]=wt["max"+_s]=Math.ceil(mt.width)+_t,wt[Un]=wt["max"+il]=Math.ceil(mt.height)+_t,wt[vi]=wt[vi+er]=wt[vi+Zs]=wt[vi+tr]=wt[vi+Js]="0",wt[pt]=it[pt],wt[pt+er]=it[pt+er],wt[pt+Zs]=it[pt+Zs],wt[pt+tr]=it[pt+tr],wt[pt+Js]=it[pt+Js],Oi=wp(Gt,wt,I),Wt&&ve(0)),n?(ln=n._initted,za(1),n.render(n.duration(),!0,!0),vt=We(L.a)-zt+ee+je,Ai=Math.abs(ee-vt)>1,q&&Ai&&Oi.splice(Oi.length-2,2),n.render(0,!0,!0),ln||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),za(0)):vt=ee,r&&(r.value?r.style["overflow"+L.a.toUpperCase()]=r.value:r.style.removeProperty("overflow-"+L.a));else if(v&&ve()&&!R)for(mt=v.parentNode;mt&&mt!==Ge;)mt._pinOffset&&(ie-=mt._pinOffset,K-=mt._pinOffset),mt=mt.parentNode;cn&&cn.forEach(function(p){return p.revert(!1,!0)}),M.start=ie,M.end=K,ue=Qe=Wt?ai:ve(),!R&&!Wt&&(ue<ai&&ve(ai),M.scroll.rec=0),M.revert(!1,!0),oe=Ft(),oi&&(Q=-1,oi.restart(!0)),Nt=0,n&&W&&(n._initted||fi)&&n.progress()!==fi&&n.progress(fi||0,!0).render(n.time(),!0,!0),(ut||re!==M.progress||R||w)&&(n&&!W&&n.totalProgress(R&&ie<-.001&&!re?J.utils.normalize(ie,K,0):re,!0),M.progress=ut||(ue-ie)/ee===re?0:re),y&&T&&(ct._pinOffset=Math.round(M.progress*vt)),be&&be.invalidate(),isNaN(d)||(d-=J.getProperty(E,L.p),c-=J.getProperty(Be,L.p),to(E,L,d),to(De,L,d-(me||0)),to(Be,L,c),to(Ye,L,c-(me||0))),ut&&!Wt&&M.update(),f&&!Wt&&!Ve&&(Ve=!0,f(M),Ve=!1)}},M.getVelocity=function(){return(ve()-Qe)/(Ft()-Ys)*1e3||0},M.endAnimation=function(){Us(M.callbackAnimation),n&&(be?be.progress(1):n.paused()?W||Us(n,M.direction<0,1):Us(n,n.reversed()))},M.labelToScroll=function(G){return n&&n.labels&&(ie||M.refresh()||ie)+n.labels[G]/n.duration()*ee||0},M.getTrailing=function(G){var he=Se.indexOf(M),ae=M.direction>0?Se.slice(0,he).reverse():Se.slice(he+1);return(pi(G)?ae.filter(function(me){return me.vars.preventOverlaps===G}):ae).filter(function(me){return M.direction>0?me.end<=ie:me.start>=K})},M.update=function(G,he,ae){if(!(R&&!ae&&!G)){var me=Wt===!0?ai:M.scroll(),tt=G?0:(me-ie)/ee,Ee=tt<0?0:tt>1?1:tt||0,Le=M.progress,ut,de,je,Ne,Bt,Fe,Ct,Ot;if(he&&(Qe=ue,ue=R?ve():me,A&&(ri=$e,$e=n&&!W?n.totalProgress():Ee)),S&&y&&!Nt&&!Xr&&Ti&&(!Ee&&ie<me+(me-Qe)/(Ft()-Ys)*S?Ee=1e-4:Ee===1&&K>me+(me-Qe)/(Ft()-Ys)*S&&(Ee=.9999)),Ee!==Le&&M.enabled){if(ut=M.isActive=!!Ee&&Ee<1,de=!!Le&&Le<1,Fe=ut!==de,Bt=Fe||!!Ee!=!!Le,M.direction=Ee>Le?1:-1,M.progress=Ee,Bt&&!Nt&&(je=Ee&&!Le?0:Ee===1?1:Le===1?2:3,W&&(Ne=!Fe&&V[je+1]!=="none"&&V[je+1]||V[je],Ot=n&&(Ne==="complete"||Ne==="reset"||Ne in n))),m&&(Fe||Ot)&&(Ot||g||!n)&&(Xt(m)?m(M):M.getTrailing(m).forEach(function(Hi){return Hi.endAnimation()})),W||(be&&!Nt&&!Xr?(be._dp._time-be._start!==be._time&&be.render(be._dp._time-be._start),be.resetTo?be.resetTo("totalProgress",Ee,n._tTime/n._tDur):(be.vars.totalProgress=Ee,be.invalidate().restart())):n&&n.totalProgress(Ee,!!(Nt&&(oe||G)))),y){if(G&&T&&(ct.style[T+L.os2]=$i),!q)bt(Xs(zt+vt*Ee));else if(Bt){if(Ct=!G&&Ee>Le&&K+1>me&&me+1>=Bi(z,L),I)if(!G&&(ut||Ct)){var ft=sn(y,!0),it=me-ie;pu(y,Ge,ft.top+(L===dt?it:0)+_t,ft.left+(L===dt?0:it)+_t)}else pu(y,ct);ys(ut||Ct?Oi:Vi),Ai&&Ee<1&&ut||bt(zt+(Ee===1&&!Ct?vt:0))}}A&&!ce.tween&&!Nt&&!Xr&&oi.restart(!0),l&&(Fe||P&&Ee&&(Ee<1||!Ba))&&nr(l.targets).forEach(function(Hi){return Hi.classList[ut||P?"add":"remove"](l.className)}),o&&!W&&!G&&o(M),Bt&&!Nt?(W&&(Ot&&(Ne==="complete"?n.pause().totalProgress(1):Ne==="reset"?n.restart(!0).pause():Ne==="restart"?n.restart(!0):n[Ne]()),o&&o(M)),(Fe||!Ba)&&(h&&Fe&&$a(M,h),se[je]&&$a(M,se[je]),P&&(Ee===1?M.kill(!1,1):se[je]=0),Fe||(je=Ee===1?1:3,se[je]&&$a(M,se[je]))),F&&!ut&&Math.abs(M.getVelocity())>(Gs(F)?F:2500)&&(Us(M.callbackAnimation),be?be.progress(1):Us(n,Ne==="reverse"?1:!Ee,1))):W&&o&&!Nt&&o(M)}if(on){var mt=R?me/R.duration()*(R._caScrollDist||0):me;Sn(mt+(E._isFlipped?1:0)),on(mt)}H&&H(-me/R.duration()*(R._caScrollDist||0))}},M.enable=function(G,he){M.enabled||(M.enabled=!0,St(z,"resize",Ks),U||St(z,"scroll",ps),fe&&St(a,"refreshInit",fe),G!==!1&&(M.progress=re=0,ue=Qe=Q=ve()),he!==!1&&M.refresh())},M.getTween=function(G){return G&&ce?ce.tween:be},M.setPositions=function(G,he,ae,me){if(R){var tt=R.scrollTrigger,Ee=R.duration(),Le=tt.end-tt.start;G=tt.start+Le*G/Ee,he=tt.start+Le*he/Ee}M.refresh(!1,!1,{start:su(G,ae&&!!M._startClamp),end:su(he,ae&&!!M._endClamp)},me),M.update()},M.adjustPinSpacing=function(G){if(He&&G){var he=He.indexOf(L.d)+1;He[he]=parseFloat(He[he])+G+_t,He[1]=parseFloat(He[1])+G+_t,ys(He)}},M.disable=function(G,he){if(M.enabled&&(G!==!1&&M.revert(!0,!0),M.enabled=M.isActive=!1,he||be&&be.pause(),ai=0,ze&&(ze.uncache=1),fe&&xt(a,"refreshInit",fe),oi&&(oi.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!U)){for(var ae=Se.length;ae--;)if(Se[ae].scroller===z&&Se[ae]!==M)return;xt(z,"resize",Ks),U||xt(z,"scroll",ps)}},M.kill=function(G,he){M.disable(G,he),be&&!he&&be.kill(),u&&delete Ga[u];var ae=Se.indexOf(M);ae>=0&&Se.splice(ae,1),ae===Yt&&ro>0&&Yt--,ae=0,Se.forEach(function(me){return me.scroller===M.scroller&&(ae=1)}),ae||Wt||(M.scroll.rec=0),n&&(n.scrollTrigger=null,G&&n.revert({kill:!1}),he||n.kill()),De&&[De,Ye,E,Be].forEach(function(me){return me.parentNode&&me.parentNode.removeChild(me)}),ir===M&&(ir=0),y&&(ze&&(ze.uncache=1),ae=0,Se.forEach(function(me){return me.pin===y&&ae++}),ae||(ze.spacer=0)),t.onKill&&t.onKill(M)},Se.push(M),M.enable(!1,!1),mi&&mi(M),n&&n.add&&!ee){var Ae=M.update;M.update=function(){M.update=Ae,ie||K||M.refresh()},J.delayedCall(.01,M.update),ee=.01,ie=K=0}else M.refresh();y&&_p()},a.register=function(t){return fs||(J=t||Su(),xu()&&window.document&&a.enable(),fs=Ws),fs},a.defaults=function(t){if(t)for(var n in t)Zr[n]=t[n];return Zr},a.disable=function(t,n){Ws=0,Se.forEach(function(o){return o[n?"kill":"disable"](t)}),xt(Oe,"wheel",ps),xt(et,"scroll",ps),clearInterval(Wr),xt(et,"touchcancel",zi),xt(Ge,"touchstart",zi),Kr(xt,et,"pointerdown,touchstart,mousedown",ru),Kr(xt,et,"pointerup,touchend,mouseup",ou),lo.kill(),Gr(xt);for(var s=0;s<xe.length;s+=3)Qr(xt,xe[s],xe[s+1]),Qr(xt,xe[s],xe[s+2])},a.enable=function(){if(Oe=window,et=document,Mi=et.documentElement,Ge=et.body,J&&(nr=J.utils.toArray,Qs=J.utils.clamp,Wa=J.core.context||zi,za=J.core.suppressOverwrites||zi,Za=Oe.history.scrollRestoration||"auto",Ka=Oe.pageYOffset,J.core.globals("ScrollTrigger",a),Ge)){Ws=1,gs=document.createElement("div"),gs.style.height="100vh",gs.style.position="absolute",Ru(),hp(),lt.register(J),a.isTouch=lt.isTouch,xn=lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ya=lt.isTouch===1,St(Oe,"wheel",ps),_u=[Oe,et,Mi,Ge],J.matchMedia?(a.matchMedia=function(u){var h=J.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},J.addEventListener("matchMediaInit",function(){return sl()}),J.addEventListener("matchMediaRevert",function(){return Au()}),J.addEventListener("matchMedia",function(){Hn(0,1),Gn("matchMedia")}),J.matchMedia("(orientation: portrait)",function(){return qa(),qa})):console.warn("Requires GSAP 3.11.0 or later"),qa(),St(et,"scroll",ps);var t=Ge.style,n=t.borderTopStyle,s=J.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",o=sn(Ge),dt.m=Math.round(o.top+dt.sc())||0,Dt.m=Math.round(o.left+Dt.sc())||0,n?t.borderTopStyle=n:t.removeProperty("border-top-style"),Wr=setInterval(cu,250),J.delayedCall(.5,function(){return Xr=0}),St(et,"touchcancel",zi),St(Ge,"touchstart",zi),Kr(St,et,"pointerdown,touchstart,mousedown",ru),Kr(St,et,"pointerup,touchend,mouseup",ou),Ua=J.utils.checkPrefix("transform"),oo.push(Ua),fs=Ft(),lo=J.delayedCall(.2,Hn).pause(),ms=[et,"visibilitychange",function(){var u=Oe.innerWidth,h=Oe.innerHeight;et.hidden?(tu=u,iu=h):(tu!==u||iu!==h)&&Ks()},et,"DOMContentLoaded",Hn,Oe,"load",Hn,Oe,"resize",Ks],Gr(St),Se.forEach(function(u){return u.enable(0,1)}),l=0;l<xe.length;l+=3)Qr(xt,xe[l],xe[l+1]),Qr(xt,xe[l],xe[l+2])}},a.config=function(t){"limitCallbacks"in t&&(Ba=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(Wr)||(Wr=n)&&setInterval(cu,n),"ignoreMobileResize"in t&&(Ya=a.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Gr(xt)||Gr(St,t.autoRefreshEvents||"none"),vu=(t.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(t,n){var s=jt(t),o=xe.indexOf(s),l=Wn(s);~o&&xe.splice(o,l?6:2),n&&(l?Pi.unshift(Oe,n,Ge,n,Mi,n):Pi.unshift(s,n))},a.clearMatchMedia=function(t){Se.forEach(function(n){return n._ctx&&n._ctx.query===t&&n._ctx.kill(!0,!0)})},a.isInViewport=function(t,n,s){var o=(pi(t)?jt(t):t).getBoundingClientRect(),l=o[s?jn:Un]*n||0;return s?o.right-l>0&&o.left+l<Oe.innerWidth:o.bottom-l>0&&o.top+l<Oe.innerHeight},a.positionInViewport=function(t,n,s){pi(t)&&(t=jt(t));var o=t.getBoundingClientRect(),l=o[s?jn:Un],u=n==null?l/2:n in ho?ho[n]*l:~n.indexOf("%")?parseFloat(n)*l/100:parseFloat(n)||0;return s?(o.left+u)/Oe.innerWidth:(o.top+u)/Oe.innerHeight},a.killAll=function(t){if(Se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),t!==!0){var n=Xn.killAll||[];Xn={},n.forEach(function(s){return s()})}},a}();ke.version="3.12.5";ke.saveStyles=function(a){return a?nr(a).forEach(function(e){if(e&&e.style){var i=di.indexOf(e);i>=0&&di.splice(i,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),J.core.getCache(e),Wa())}}):di};ke.revert=function(a,e){return sl(!a,e)};ke.create=function(a,e){return new ke(a,e)};ke.refresh=function(a){return a?Ks():(fs||ke.register())&&Hn(!0)};ke.update=function(a){return++xe.cache&&rn(a===!0?2:0)};ke.clearScrollMemory=Iu;ke.maxScroll=function(a,e){return Bi(a,e?Dt:dt)};ke.getScrollFunc=function(a,e){return tn(jt(a),e?Dt:dt)};ke.getById=function(a){return Ga[a]};ke.getAll=function(){return Se.filter(function(a){return a.vars.id!=="ScrollSmoother"})};ke.isScrolling=function(){return!!Ti};ke.snapDirectional=nl;ke.addEventListener=function(a,e){var i=Xn[a]||(Xn[a]=[]);~i.indexOf(e)||i.push(e)};ke.removeEventListener=function(a,e){var i=Xn[a],t=i&&i.indexOf(e);t>=0&&i.splice(t,1)};ke.batch=function(a,e){var i=[],t={},n=e.interval||.016,s=e.batchMax||1e9,o=function(h,f){var g=[],v=[],y=J.delayedCall(n,function(){f(g,v),g=[],v=[]}).pause();return function(T){g.length||y.restart(!0),g.push(T.trigger),v.push(T),s<=g.length&&y.progress(1)}},l;for(l in e)t[l]=l.substr(0,2)==="on"&&Xt(e[l])&&l!=="onRefreshInit"?o(l,e[l]):e[l];return Xt(s)&&(s=s(),St(ke,"refresh",function(){return s=e.batchMax()})),nr(a).forEach(function(u){var h={};for(l in t)h[l]=t[l];h.trigger=u,i.push(ke.create(h))}),i};var mu=function(e,i,t,n){return i>n?e(n):i<0&&e(0),t>n?(n-i)/(t-i):t<0?i/(i-t):1},ja=function a(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(lt.isTouch?" pinch-zoom":""):"none",e===Mi&&a(Ge,i)},io={auto:1,scroll:1},xp=function(e){var i=e.event,t=e.target,n=e.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,o=s._gsap||J.core.getCache(s),l=Ft(),u;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==Ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(io[(u=wi(s)).overflowY]||io[u.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==t&&!Wn(s)&&(io[(u=wi(s)).overflowY]||io[u.overflowX]),o._isScrollT=l}(o._isScroll||n==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Du=function(e,i,t,n){return lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:n=n&&xp,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return t&&St(et,lt.eventTypes[0],yu,!1,!0)},onDisable:function(){return xt(et,lt.eventTypes[0],yu,!0)}})},Sp=/(input|label|select|textarea)/i,gu,yu=function(e){var i=Sp.test(e.target.tagName);(i||gu)&&(e._gsapAllow=!0,gu=i)},kp=function(e){qn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,t=i.normalizeScrollX,n=i.momentum,s=i.allowNestedScroll,o=i.onRelease,l,u,h=jt(e.target)||Mi,f=J.core.globals().ScrollSmoother,g=f&&f.get(),v=xn&&(e.content&&jt(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),y=tn(h,dt),T=tn(h,Dt),w=1,S=(lt.isTouch&&Oe.visualViewport?Oe.visualViewport.scale*Oe.visualViewport.width:Oe.outerWidth)/Oe.innerWidth,k=0,C=Xt(n)?function(){return n(l)}:function(){return n||2.8},P,A,I=Du(h,e.type,!0,s),D=function(){return A=!1},R=zi,F=zi,m=function(){u=Bi(h,dt),F=Qs(xn?1:0,u),t&&(R=Qs(0,Bi(h,Dt))),P=Yn},L=function(){v._gsap.y=Xs(parseFloat(v._gsap.y)+y.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",y.offset=y.cacheID=0},W=function(){if(A){requestAnimationFrame(D);var ye=Xs(l.deltaY/2),_e=F(y.v-ye);if(v&&_e!==y.v+y.offset){y.offset=_e-y.v;var M=Xs((parseFloat(v&&v._gsap.y)||0)-y.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+M+", 0, 1)",v._gsap.y=M+"px",y.cacheID=xe.cache,rn()}return!0}y.offset&&L(),A=!0},z,ne,U,q,se=function(){m(),z.isActive()&&z.vars.scrollY>u&&(y()>u?z.progress(1)&&y(u):z.resetTo("scrollY",u))};return v&&J.set(v,{y:"+=0"}),e.ignoreCheck=function(V){return xn&&V.type==="touchmove"&&W(V)||w>1.05&&V.type!=="touchstart"||l.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){A=!1;var V=w;w=Xs((Oe.visualViewport&&Oe.visualViewport.scale||1)/S),z.pause(),V!==w&&ja(h,w>1.01?!0:t?!1:"x"),ne=T(),U=y(),m(),P=Yn},e.onRelease=e.onGestureStart=function(V,ye){if(y.offset&&L(),!ye)q.restart(!0);else{xe.cache++;var _e=C(),M,fe;t&&(M=T(),fe=M+_e*.05*-V.velocityX/.227,_e*=mu(T,M,fe,Bi(h,Dt)),z.vars.scrollX=R(fe)),M=y(),fe=M+_e*.05*-V.velocityY/.227,_e*=mu(y,M,fe,Bi(h,dt)),z.vars.scrollY=F(fe),z.invalidate().duration(_e).play(.01),(xn&&z.vars.scrollY>=u||M>=u-1)&&J.to({},{onUpdate:se,duration:_e})}o&&o(V)},e.onWheel=function(){z._ts&&z.pause(),Ft()-k>1e3&&(P=0,k=Ft())},e.onChange=function(V,ye,_e,M,fe){if(Yn!==P&&m(),ye&&t&&T(R(M[2]===ye?ne+(V.startX-V.x):T()+ye-M[1])),_e){y.offset&&L();var Y=fe[2]===_e,we=Y?U+V.startY-V.y:y()+_e-fe[1],Q=F(we);Y&&we!==Q&&(U+=Q-we),y(Q)}(_e||ye)&&rn()},e.onEnable=function(){ja(h,t?!1:"x"),ke.addEventListener("refresh",se),St(Oe,"resize",se),y.smooth&&(y.target.style.scrollBehavior="auto",y.smooth=T.smooth=!1),I.enable()},e.onDisable=function(){ja(h,!0),xt(Oe,"resize",se),ke.removeEventListener("refresh",se),I.kill()},e.lockAxis=e.lockAxis!==!1,l=new lt(e),l.iOS=xn,xn&&!y()&&y(1),xn&&J.ticker.add(zi),q=l._dc,z=J.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lu(y,y(),function(){return z.pause()})},onUpdate:rn,onComplete:q.vars.onComplete}),l};ke.sort=function(a){return Se.sort(a||function(e,i){return(e.vars.refreshPriority||0)*-1e6+e.start-(i.start+(i.vars.refreshPriority||0)*-1e6)})};ke.observe=function(a){return new lt(a)};ke.normalizeScroll=function(a){if(typeof a>"u")return Ut;if(a===!0&&Ut)return Ut.enable();if(a===!1){Ut&&Ut.kill(),Ut=a;return}var e=a instanceof lt?a:kp(a);return Ut&&Ut.target===e.target&&Ut.kill(),Wn(e.target)&&(Ut=e),e};ke.core={_getVelocityProp:Yr,_inputObserver:Du,_scrollers:xe,_proxies:Pi,bridge:{ss:function(){Ti||Gn("scrollStart"),Ti=Ft()},ref:function(){return Nt}}};Su()&&J.registerPlugin(ke);Qi.registerPlugin(Vs,ke,Ls);var Nu=()=>{function a(){let s=document.querySelectorAll(".star_icon"),o=document.querySelector(".section_learning");if(!o||s.length===0)return;Qi.set(s,{fill:"currentColor",rotation:0,transformOrigin:"center center"}),ke.create({trigger:o,start:"top 30%",onEnter:()=>l(),onLeaveBack:()=>u(),markers:!0});function l(){s.forEach((h,f)=>{Qi.to(h,{fill:"#ffe100",rotation:15,duration:.3,delay:f*.2,ease:"power1.inOut",onComplete:()=>{Qi.to(h,{fill:"currentColor",rotation:0,duration:.6,ease:"power1.inOut"})}})})}function u(){Qi.to(s,{fill:"currentColor",rotation:0,duration:.3,stagger:.1,ease:"power1.inOut"})}}document.addEventListener("DOMContentLoaded",a);let e=document.querySelector(".play-video.full"),i=e.querySelector("circle"),t=document.getElementById("triangle");Qi.set(t,{scale:0,opacity:0,display:"block"});let n=Qi.timeline({paused:!0}).to(i,{scale:0,opacity:0,duration:.3,ease:"power2.inOut"}).to(t,{scale:1,opacity:1,duration:.3,ease:"power2.inOut"},"-=0.3");e.addEventListener("mouseenter",()=>n.play()),e.addEventListener("mouseleave",()=>n.reverse()),$(document).ready(function(){$(".lucas_jpg").hover(function(){$(".brand_text").addClass("active"),$(this).addClass("disabled"),$(".image.is-2").addClass("active")},function(){$(".brand_text").removeClass("active"),$(this).removeClass("disabled"),$(".image.is-2").removeClass("active")})})};var uf=ll(Vu(),1);function rl(){return rl=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(a[t]=i[t])}return a},rl.apply(this,arguments)}var Cp={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(a){},onComplete:function(a){},preStringTyped:function(a,e){},onStringTyped:function(a,e){},onLastStringBackspaced:function(a){},onTypingPaused:function(a,e){},onTypingResumed:function(a,e){},onReset:function(a){},onStop:function(a,e){},onStart:function(a,e){},onDestroy:function(a){}},Ep=new(function(){function a(){}var e=a.prototype;return e.load=function(i,t,n){if(i.el=typeof n=="string"?document.querySelector(n):n,i.options=rl({},Cp,t),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(h){return h.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(i.stringsElement.children),o=s.length;if(o)for(var l=0;l<o;l+=1)i.strings.push(s[l].innerHTML.trim())}for(var u in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[u]=u;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},e.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},e.appendCursorAnimationCss=function(i){var t="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(i){var t="data-typed-fadeout-js-css";if(i.fadeOut&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},a}()),$u=new(function(){function a(){}var e=a.prototype;return e.typeHtmlChars=function(i,t,n){if(n.contentType!=="html")return t;var s=i.substring(t).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";i.substring(t+1).charAt(0)!==o&&!(1+ ++t>i.length););t++}return t},e.backSpaceHtmlChars=function(i,t,n){if(n.contentType!=="html")return t;var s=i.substring(t).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";i.substring(t-1).charAt(0)!==o&&!(--t<0););t--}return t},a}()),qu=function(){function a(i,t){Ep.load(this,t,i),this.begin()}var e=a.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},e.typewrite=function(i,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){t=$u.typeHtmlChars(i,t,n);var l=0,u=i.substring(t);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var h=1;h+=(u=/\d+/.exec(u)[0]).length,l=parseInt(u),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),i=i.substring(0,t)+i.substring(t+h),n.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;i.substring(t+o).charAt(0)!=="`"&&(o++,!(t+o>i.length)););var f=i.substring(0,t),g=i.substring(f.length+1,t+o),v=i.substring(t+o+1);i=f+g+v,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),t>=i.length?n.doneTyping(i,t):n.keepTyping(i,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},l)},s):this.setPauseStatus(i,t,!0)},e.keepTyping=function(i,t,n){t===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=i.substring(0,t+=n);this.replaceText(s),this.typewrite(i,t)},e.doneTyping=function(i,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(i,t)},this.backDelay))},e.backspace=function(i,t){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=$u.backSpaceHtmlChars(i,t,n);var o=i.substring(0,t);if(n.replaceText(o),n.smartBackspace){var l=n.strings[n.arrayPos+1];n.stopNum=l&&o===l.substring(0,t)?t:0}t>n.stopNum?(t--,n.backspace(i,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},s)}else this.setPauseStatus(i,t,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(i,t,n){this.pause.typewrite=n,this.pause.curString=i,this.pause.curStrPos=t},e.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(i){return Math.round(Math.random()*i/2)+i},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},e.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(t){i.stop()}),this.el.addEventListener("blur",function(t){i.el.value&&i.el.value.length!==0||i.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},a}();var Hu=()=>{let a={strings:["Assistir Showreel.","Entre no ritmo.","Sinta essa vibe","Diretoria MH"],typeSpeed:10,backSpeed:20,loop:!0,showCursor:!1},e=new qu("#textElement",a),i={topSpacing:40},t=new Sticksy(".js-sticky-widget",i),n=s=>{let o=s?"add":"remove";[".unit_lens_inner.xsmall",".unit_lens_inner.small",".unit_lens_inner.xmedium",".unit_lens_inner.medium",".lens_center_visual"].forEach(u=>{document.querySelectorAll(u).forEach(h=>{h.classList[o](u.includes("lens_center_visual")?"active":"effect")})})};t.onStateChanged=s=>{n(s==="fixed")}};var Uu=ll(ju(),1),Yu=()=>{let a=null,e=()=>{a=new Uu.default("#player",{controls:[],loop:{active:!0},keyboard:{global:!0},tooltips:{controls:!0,seek:!0}});let i=document.querySelector(".volume-slider"),t=document.querySelector(".icon-change"),n=()=>{let u=document.querySelector(".sound_enable"),h=document.querySelector(".sound_mute"),{volume:f}=a;a.muted||f===0?(u.style.display="none",h.style.display="flex",t.style.opacity="0.5"):(u.style.display="flex",h.style.display="none",t.style.opacity="1")};i.addEventListener("input",()=>{let u=parseFloat(i.value);a.volume=u,a.muted=u===0,n()}),a.on("volumechange",()=>{i.value=a.muted?0:a.volume,n()});let s=u=>{[[".form_overlay","hide-overlay"],[".background_video_wrapper","full-opacity"],[".lines_visual","hide_lines"],[".player_asset","hide-text"],[".visual_left","hide-text"],[".heading_visual","hide-video"],[".custom-play-min","hide",!u],[".controls","playing"]].forEach(([f,g,v=u])=>{document.querySelectorAll(f).forEach(y=>y.classList.toggle(g,v))})};document.querySelectorAll(".play-video.full").forEach(u=>{u.addEventListener("click",()=>{a.togglePlay(),s(a.playing),u.classList.toggle("hide_video_play",a.playing)})}),a.on("play",()=>s(!0)),a.on("pause",()=>s(!1));let o=()=>{a.muted=!a.muted,!a.muted&&a.volume===0&&(a.volume=.5),n()};t.addEventListener("click",o);let l=()=>{let u=document.querySelector(".play_min_control"),h=document.querySelector(".pause_state"),f=document.querySelector(".minimizar"),g=document.querySelector(".maximizar"),v=a.playing;u.style.display=v?"none":"flex",h.style.display=v?"flex":"none",f.style.display=v?"none":"block",g.style.display=v?"block":"none"};a.on("play",l),a.on("pause",l),document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".play_min_control").style.display="none",l(),n()})};document.addEventListener("DOMContentLoaded",e)};var vf=new lr({lenisOptions:{lerp:.1,duration:.7,wheelMultiplier:1.5,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a))}});Hu();Yu();Nu();})();
/*! Bundled license information:
>>>>>>> parent of 94d9152 (Clean things)

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

  // src/index.ts
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

  // src/formCode.ts
  init_live_reload();
  function initializeformCode() {
    window.onload = () => ["utm_source", "utm_medium", "utm_campaign"].forEach(
      (field) => document.getElementById(field).value = new URLSearchParams(location.search).get(field.toLowerCase()) || ""
    );
    document.querySelector('[data-js="input"]').oninput = (e) => e.target.value = e.target.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})\d+?$/, "$1");
  }

  // src/iconsRotacao.ts
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

  // src/priceAnimation.ts
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

  // src/index.ts
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
