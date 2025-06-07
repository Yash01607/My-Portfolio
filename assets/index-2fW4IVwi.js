(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ly(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Hp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),uy=Symbol.for("react.portal"),cy=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),fy=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),hy=Symbol.for("react.context"),my=Symbol.for("react.forward_ref"),gy=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),qc=Symbol.iterator;function xy(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,Yp={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qp(){}Qp.prototype=Ir.prototype;function Su(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}var ku=Su.prototype=new Qp;ku.constructor=Su;Kp(ku,Ir.prototype);ku.isPureReactComponent=!0;var ed=Array.isArray,Xp=Object.prototype.hasOwnProperty,Eu={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xp.call(t,r)&&!Jp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vi,type:e,key:o,ref:s,props:i,_owner:Eu.current}}function wy(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function Sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sy(""+e.key):t.toString(36)}function wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vi:case uy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ra(s,0):r,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),wo(i,t,n,"",function(u){return u})):i!=null&&(Cu(i)&&(i=wy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ed(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ra(o,a);s+=wo(o,t,n,l,i)}else if(l=xy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ra(o,a++),s+=wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xi(e,t,n){if(e==null)return e;var r=[],i=0;return wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ky(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},So={transition:null},Ey={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:So,ReactCurrentOwner:Eu};function qp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Ir;z.Fragment=cy;z.Profiler=fy;z.PureComponent=Su;z.StrictMode=dy;z.Suspense=gy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;z.act=qp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Eu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xp.call(t,l)&&!Jp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:py,_context:e},e.Consumer=e};z.createElement=Zp;z.createFactory=function(e){var t=Zp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:my,render:e}};z.isValidElement=Cu;z.lazy=function(e){return{$$typeof:vy,_payload:{_status:-1,_result:e},_init:ky}};z.memo=function(e,t){return{$$typeof:yy,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};z.unstable_act=qp;z.useCallback=function(e,t){return be.current.useCallback(e,t)};z.useContext=function(e){return be.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return be.current.useDeferredValue(e)};z.useEffect=function(e,t){return be.current.useEffect(e,t)};z.useId=function(){return be.current.useId()};z.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return be.current.useMemo(e,t)};z.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};z.useRef=function(e){return be.current.useRef(e)};z.useState=function(e){return be.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return be.current.useTransition()};z.version="18.3.1";Hp.exports=z;var D=Hp.exports;const p=Wp(D);var rl={},eh={exports:{}},Fe={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,I){var $=A.length;A.push(I);e:for(;0<$;){var B=$-1>>>1,U=A[B];if(0<i(U,I))A[B]=I,A[$]=U,$=B;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var I=A[0],$=A.pop();if($!==I){A[0]=$;e:for(var B=0,U=A.length,yn=U>>>1;B<yn;){var tt=2*(B+1)-1,_t=A[tt],$e=tt+1,xt=A[$e];if(0>i(_t,$))$e<U&&0>i(xt,_t)?(A[B]=xt,A[$e]=$,B=$e):(A[B]=_t,A[tt]=$,B=tt);else if($e<U&&0>i(xt,$))A[B]=xt,A[$e]=$,B=$e;else break e}}return I}function i(A,I){var $=A.sortIndex-I.sortIndex;return $!==0?$:A.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=A)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function w(A){if(x=!1,m(A),!v)if(n(l)!==null)v=!0,Ce(k);else{var I=n(u);I!==null&&et(w,I.startTime-A)}}function k(A,I){v=!1,x&&(x=!1,g(T),T=-1),y=!0;var $=f;try{for(m(I),d=n(l);d!==null&&(!(d.expirationTime>I)||A&&!ne());){var B=d.callback;if(typeof B=="function"){d.callback=null,f=d.priorityLevel;var U=B(d.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?d.callback=U:d===n(l)&&r(l),m(I)}else r(l);d=n(l)}if(d!==null)var yn=!0;else{var tt=n(u);tt!==null&&et(w,tt.startTime-I),yn=!1}return yn}finally{d=null,f=$,y=!1}}var C=!1,E=null,T=-1,O=5,M=-1;function ne(){return!(e.unstable_now()-M<O)}function ct(){if(E!==null){var A=e.unstable_now();M=A;var I=!0;try{I=E(!0,A)}finally{I?vt():(C=!1,E=null)}}else C=!1}var vt;if(typeof h=="function")vt=function(){h(ct)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,se=gn.port2;gn.port1.onmessage=ct,vt=function(){se.postMessage(null)}}else vt=function(){b(ct,0)};function Ce(A){E=A,C||(C=!0,vt())}function et(A,I){T=b(function(){A(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Ce(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var $=f;f=I;try{return A()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,I){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=f;f=A;try{return I()}finally{f=$}},e.unstable_scheduleCallback=function(A,I,$){var B=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?B+$:B):$=B,A){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=$+U,A={id:c++,callback:I,priorityLevel:A,startTime:$,expirationTime:U,sortIndex:-1},$>B?(A.sortIndex=$,t(u,A),n(l)===null&&A===n(u)&&(x?(g(T),T=-1):x=!0,et(w,$-B))):(A.sortIndex=U,t(l,A),v||y||(v=!0,Ce(k))),A},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(A){var I=f;return function(){var $=f;f=I;try{return A.apply(this,arguments)}finally{f=$}}}})(nh);th.exports=nh;var Cy=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=D,Ne=Cy;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,mi={};function Fn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(mi[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function by(e){return il.call(rd,e)?!0:il.call(nd,e)?!1:Ty.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function Ay(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dy(e,t,n,r){if(t===null||typeof t>"u"||Ay(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pu,Tu);ge[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pu,Tu);ge[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pu,Tu);ge[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dy(t,n,i,r)&&(n=null),r||i===null?by(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),id=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,ia;function Gr(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||""}return`
`+ia+e}var oa=!1;function sa(e,t){if(!e||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Ly(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=sa(e.type,!1),e;case 11:return e=sa(e.type.render,!1),e;case 1:return e=sa(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Qn:return"Portal";case ol:return"Profiler";case Au:return"StrictMode";case sl:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case ih:return(e._context.displayName||"Context")+".Provider";case Du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function Iy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function My(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=My(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&bu(e,"checked",t,!1)}function cl(e,t){uh(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Kr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function ch(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ld(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ry=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){Ry.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function hh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $y=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if($y[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,pr=null,hr=null;function ud(e){if(e=Fi(e)){if(typeof yl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ls(t),yl(e.stateNode,e.type,t))}}function mh(e){pr?hr?hr.push(e):hr=[e]:pr=e}function gh(){if(pr){var e=pr,t=hr;if(hr=pr=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function yh(e,t){return e(t)}function vh(){}var aa=!1;function xh(e,t,n){if(aa)return e(t,n);aa=!0;try{return yh(e,t,n)}finally{aa=!1,(pr!==null||hr!==null)&&(vh(),gh())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ls(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var vl=!1;if(Lt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){vl=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{vl=!1}function _y(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ti=!1,Wo=null,Ho=!1,xl=null,Oy={onError:function(e){ti=!0,Wo=e}};function zy(e,t,n,r,i,o,s,a,l){ti=!1,Wo=null,_y.apply(Oy,arguments)}function Vy(e,t,n,r,i,o,s,a,l){if(zy.apply(this,arguments),ti){if(ti){var u=Wo;ti=!1,Wo=null}else throw Error(P(198));Ho||(Ho=!0,xl=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(Bn(e)!==e)throw Error(P(188))}function Ny(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cd(i),e;if(o===r)return cd(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Sh(e){return e=Ny(e),e!==null?kh(e):null}function kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kh(e);if(t!==null)return t;e=e.sibling}return null}var Eh=Ne.unstable_scheduleCallback,dd=Ne.unstable_cancelCallback,jy=Ne.unstable_shouldYield,Fy=Ne.unstable_requestPaint,te=Ne.unstable_now,By=Ne.unstable_getCurrentPriorityLevel,Mu=Ne.unstable_ImmediatePriority,Ch=Ne.unstable_UserBlockingPriority,Go=Ne.unstable_NormalPriority,Uy=Ne.unstable_LowPriority,Ph=Ne.unstable_IdlePriority,Ts=null,mt=null;function Wy(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Ky,Hy=Math.log,Gy=Math.LN2;function Ky(e){return e>>>=0,e===0?32:31-(Hy(e)/Gy|0)|0}var eo=64,to=4194304;function Yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Yr(a):(o&=s,o!==0&&(r=Yr(o)))}else s=n&~i,s!==0?r=Yr(s):o!==0&&(r=Yr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function Yy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-st(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Yy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Th(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function la(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function Xy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function bh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,$u,Dh,Lh,Ih,Sl=!1,no=[],Kt=null,Yt=null,Qt=null,vi=new Map,xi=new Map,Ut=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fi(t),t!==null&&$u(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zy(e,t,n,r,i){switch(t){case"focusin":return Kt=Nr(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=Nr(Yt,e,t,n,r,i),!0;case"mouseover":return Qt=Nr(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vi.set(o,Nr(vi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xi.set(o,Nr(xi.get(o)||null,e,t,n,r,i)),!0}return!1}function Mh(e){var t=Cn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=wh(n),t!==null){e.blockedOn=t,Ih(e.priority,function(){Dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=Fi(n),t!==null&&$u(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){ko(e)&&n.delete(t)}function qy(){Sl=!1,Kt!==null&&ko(Kt)&&(Kt=null),Yt!==null&&ko(Yt)&&(Yt=null),Qt!==null&&ko(Qt)&&(Qt=null),vi.forEach(pd),xi.forEach(pd)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,qy)))}function wi(e){function t(i){return jr(i,e)}if(0<no.length){jr(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&jr(Kt,e),Yt!==null&&jr(Yt,e),Qt!==null&&jr(Qt,e),vi.forEach(t),xi.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Mh(n),n.blockedOn===null&&Ut.shift()}var mr=$t.ReactCurrentBatchConfig,Yo=!0;function e1(e,t,n,r){var i=F,o=mr.transition;mr.transition=null;try{F=1,_u(e,t,n,r)}finally{F=i,mr.transition=o}}function t1(e,t,n,r){var i=F,o=mr.transition;mr.transition=null;try{F=4,_u(e,t,n,r)}finally{F=i,mr.transition=o}}function _u(e,t,n,r){if(Yo){var i=kl(e,t,n,r);if(i===null)va(e,t,r,Qo,n),fd(e,r);else if(Zy(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Jy.indexOf(e)){for(;i!==null;){var o=Fi(i);if(o!==null&&Ah(o),o=kl(e,t,n,r),o===null&&va(e,t,r,Qo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var Qo=null;function kl(e,t,n,r){if(Qo=null,e=Iu(r),e=Cn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function Rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case Mu:return 1;case Ch:return 4;case Go:case Uy:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var Ht=null,Ou=null,Eo=null;function $h(){if(Eo)return Eo;var e,t=Ou,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function hd(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ro:hd,this.isPropagationStopped=hd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Be(Mr),ji=Z({},Mr,{view:0,detail:0}),n1=Be(ji),ua,ca,Fr,bs=Z({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(ua=e.screenX-Fr.screenX,ca=e.screenY-Fr.screenY):ca=ua=0,Fr=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),md=Be(bs),r1=Z({},bs,{dataTransfer:0}),i1=Be(r1),o1=Z({},ji,{relatedTarget:0}),da=Be(o1),s1=Z({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),a1=Be(s1),l1=Z({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u1=Be(l1),c1=Z({},Mr,{data:0}),gd=Be(c1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p1[e])?!!t[e]:!1}function Vu(){return h1}var m1=Z({},ji,{key:function(e){if(e.key){var t=d1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=Be(m1),y1=Z({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Be(y1),v1=Z({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),x1=Be(v1),w1=Z({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=Be(w1),k1=Z({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=Be(k1),C1=[9,13,27,32],Nu=Lt&&"CompositionEvent"in window,ni=null;Lt&&"documentMode"in document&&(ni=document.documentMode);var P1=Lt&&"TextEvent"in window&&!ni,_h=Lt&&(!Nu||ni&&8<ni&&11>=ni),vd=" ",xd=!1;function Oh(e,t){switch(e){case"keyup":return C1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function T1(e,t){switch(e){case"compositionend":return zh(t);case"keypress":return t.which!==32?null:(xd=!0,vd);case"textInput":return e=t.data,e===vd&&xd?null:e;default:return null}}function b1(e,t){if(Jn)return e==="compositionend"||!Nu&&Oh(e,t)?(e=$h(),Eo=Ou=Ht=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _h&&t.locale!=="ko"?null:t.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A1[e.type]:t==="textarea"}function Vh(e,t,n,r){mh(r),t=Xo(t,"onChange"),0<t.length&&(n=new zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,Si=null;function D1(e){Qh(e,0)}function As(e){var t=er(e);if(lh(t))return e}function L1(e,t){if(e==="change")return t}var Nh=!1;if(Lt){var fa;if(Lt){var pa="oninput"in document;if(!pa){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),pa=typeof Sd.oninput=="function"}fa=pa}else fa=!1;Nh=fa&&(!document.documentMode||9<document.documentMode)}function kd(){ri&&(ri.detachEvent("onpropertychange",jh),Si=ri=null)}function jh(e){if(e.propertyName==="value"&&As(Si)){var t=[];Vh(t,Si,e,Iu(e)),xh(D1,t)}}function I1(e,t,n){e==="focusin"?(kd(),ri=t,Si=n,ri.attachEvent("onpropertychange",jh)):e==="focusout"&&kd()}function M1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(Si)}function R1(e,t){if(e==="click")return As(t)}function $1(e,t){if(e==="input"||e==="change")return As(t)}function _1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:_1;function ki(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!il.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function Fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O1(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fh(n.ownerDocument.documentElement,n)){if(r!==null&&ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cd(n,o);var s=Cd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z1=Lt&&"documentMode"in document&&11>=document.documentMode,Zn=null,El=null,ii=null,Cl=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||Zn==null||Zn!==Uo(r)||(r=Zn,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&ki(ii,r)||(ii=r,r=Xo(El,"onSelect"),0<r.length&&(t=new zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ha={},Uh={};Lt&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Ds(e){if(ha[e])return ha[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uh)return ha[e]=t[n];return e}var Wh=Ds("animationend"),Hh=Ds("animationiteration"),Gh=Ds("animationstart"),Kh=Ds("transitionend"),Yh=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Yh.set(e,t),Fn(t,[e])}for(var ma=0;ma<Td.length;ma++){var ga=Td[ma],V1=ga.toLowerCase(),N1=ga[0].toUpperCase()+ga.slice(1);fn(V1,"on"+N1)}fn(Wh,"onAnimationEnd");fn(Hh,"onAnimationIteration");fn(Gh,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Kh,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vy(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;bd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;bd(i,a,u),o=l}}}if(Ho)throw e=xl,Ho=!1,xl=null,e}function H(e,t){var n=t[Dl];n===void 0&&(n=t[Dl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function ya(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[oo]){e[oo]=!0,rh.forEach(function(n){n!=="selectionchange"&&(j1.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,ya("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(Rh(t)){case 1:var i=e1;break;case 4:i=t1;break;default:i=_u}n=i.bind(null,t,n,e),i=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Cn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}xh(function(){var u=o,c=Iu(n),d=[];e:{var f=Yh.get(e);if(f!==void 0){var y=zu,v=e;switch(e){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":y=g1;break;case"focusin":v="focus",y=da;break;case"focusout":v="blur",y=da;break;case"beforeblur":case"afterblur":y=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=i1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=x1;break;case Wh:case Hh:case Gh:y=a1;break;case Kh:y=S1;break;case"scroll":y=n1;break;case"wheel":y=E1;break;case"copy":case"cut":case"paste":y=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yd}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=yi(h,g),w!=null&&x.push(Ci(h,w,m)))),b)break;h=h.return}0<x.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==gl&&(v=n.relatedTarget||n.fromElement)&&(Cn(v)||v[It]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Cn(v):null,v!==null&&(b=Bn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=md,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=yd,w="onPointerLeave",g="onPointerEnter",h="pointer"),b=y==null?f:er(y),m=v==null?f:er(v),f=new x(w,h+"leave",y,n,c),f.target=b,f.relatedTarget=m,w=null,Cn(c)===u&&(x=new x(g,h+"enter",v,n,c),x.target=m,x.relatedTarget=b,w=x),b=w,y&&v)t:{for(x=y,g=v,h=0,m=x;m;m=Gn(m))h++;for(m=0,w=g;w;w=Gn(w))m++;for(;0<h-m;)x=Gn(x),h--;for(;0<m-h;)g=Gn(g),m--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Gn(x),g=Gn(g)}x=null}else x=null;y!==null&&Ad(d,f,y,x,!1),v!==null&&b!==null&&Ad(d,b,v,x,!0)}}e:{if(f=u?er(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=L1;else if(wd(f))if(Nh)k=$1;else{k=M1;var C=I1}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=R1);if(k&&(k=k(e,u))){Vh(d,k,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&dl(f,"number",f.value)}switch(C=u?er(u):window,e){case"focusin":(wd(C)||C.contentEditable==="true")&&(Zn=C,El=u,ii=null);break;case"focusout":ii=El=Zn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Pd(d,n,c);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":Pd(d,n,c)}var E;if(Nu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jn?Oh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(_h&&n.locale!=="ko"&&(Jn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jn&&(E=$h()):(Ht=c,Ou="value"in Ht?Ht.value:Ht.textContent,Jn=!0)),C=Xo(u,T),0<C.length&&(T=new gd(T,e,null,n,c),d.push({event:T,listeners:C}),E?T.data=E:(E=zh(n),E!==null&&(T.data=E)))),(E=P1?T1(e,n):b1(e,n))&&(u=Xo(u,"onBeforeInput"),0<u.length&&(c=new gd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Qh(d,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yi(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=yi(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ad(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=yi(n,o),l!=null&&s.unshift(Ci(n,l,a))):i||(l=yi(n,o),l!=null&&s.push(Ci(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var F1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function Dd(e){return(typeof e=="string"?e:""+e).replace(F1,`
`).replace(B1,"")}function so(e,t,n){if(t=Dd(t),Dd(e)!==t&&n)throw Error(P(425))}function Jo(){}var Pl=null,Tl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,U1=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(H1)}:Al;function H1(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wi(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),ht="__reactFiber$"+Rr,Pi="__reactProps$"+Rr,It="__reactContainer$"+Rr,Dl="__reactEvents$"+Rr,G1="__reactListeners$"+Rr,K1="__reactHandles$"+Rr;function Cn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Id(e);e!==null;){if(n=e[ht])return n;e=Id(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[ht]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ls(e){return e[Pi]||null}var Ll=[],tr=-1;function pn(e){return{current:e}}function K(e){0>tr||(e.current=Ll[tr],Ll[tr]=null,tr--)}function W(e,t){tr++,Ll[tr]=e.current,e.current=t}var sn={},Ee=pn(sn),Ie=pn(!1),$n=sn;function xr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function Zo(){K(Ie),K(Ee)}function Md(e,t,n){if(Ee.current!==sn)throw Error(P(168));W(Ee,t),W(Ie,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Iy(e)||"Unknown",i));return Z({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,$n=Ee.current,W(Ee,e),W(Ie,Ie.current),!0}function Rd(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Jh(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,K(Ie),K(Ee),W(Ee,e)):K(Ie),W(Ie,n)}var kt=null,Is=!1,wa=!1;function Zh(e){kt===null?kt=[e]:kt.push(e)}function Y1(e){Is=!0,Zh(e)}function hn(){if(!wa&&kt!==null){wa=!0;var e=0,t=F;try{var n=kt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Is=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),Eh(Mu,hn),i}finally{F=t,wa=!1}}return null}var nr=[],rr=0,es=null,ts=0,Ge=[],Ke=0,_n=null,Et=1,Ct="";function wn(e,t){nr[rr++]=ts,nr[rr++]=es,es=e,ts=t}function qh(e,t,n){Ge[Ke++]=Et,Ge[Ke++]=Ct,Ge[Ke++]=_n,_n=e;var r=Et;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Et=1<<32-st(t)+i|n<<i|r,Ct=o+e}else Et=1<<o|n<<i|r,Ct=e}function Fu(e){e.return!==null&&(wn(e,1),qh(e,1,0))}function Bu(e){for(;e===es;)es=nr[--rr],nr[rr]=null,ts=nr[--rr],nr[rr]=null;for(;e===_n;)_n=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null,Et=Ge[--Ke],Ge[Ke]=null}var Ve=null,ze=null,Y=!1,ot=null;function em(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,ze=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,ze=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(Y){var t=ze;if(t){var n=t;if(!$d(e,t)){if(Il(e))throw Error(P(418));t=Xt(n.nextSibling);var r=Ve;t&&$d(e,t)?em(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ve=e)}}else{if(Il(e))throw Error(P(418));e.flags=e.flags&-4097|2,Y=!1,Ve=e}}}function _d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ao(e){if(e!==Ve)return!1;if(!Y)return _d(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=ze)){if(Il(e))throw tm(),Error(P(418));for(;t;)em(e,t),t=Xt(t.nextSibling)}if(_d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ve?Xt(e.stateNode.nextSibling):null;return!0}function tm(){for(var e=ze;e;)e=Xt(e.nextSibling)}function wr(){ze=Ve=null,Y=!1}function Uu(e){ot===null?ot=[e]:ot.push(e)}var Q1=$t.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function nm(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=en(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=ba(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var k=m.type;return k===Xn?c(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Od(k)===h.type)?(w=i(h,m.props),w.ref=Br(g,h,m),w.return=g,w):(w=Io(m.type,m.key,m.props,null,g.mode,w),w.ref=Br(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Aa(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function c(g,h,m,w,k){return h===null||h.tag!==7?(h=Ln(m,g.mode,w,k),h.return=g,h):(h=i(h,m),h.return=g,h)}function d(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ba(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ji:return m=Io(h.type,h.key,h.props,null,g.mode,m),m.ref=Br(g,null,h),m.return=g,m;case Qn:return h=Aa(h,g.mode,m),h.return=g,h;case jt:var w=h._init;return d(g,w(h._payload),m)}if(Kr(h)||zr(h))return h=Ln(h,g.mode,m,null),h.return=g,h;lo(g,h)}return null}function f(g,h,m,w){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ji:return m.key===k?l(g,h,m,w):null;case Qn:return m.key===k?u(g,h,m,w):null;case jt:return k=m._init,f(g,h,k(m._payload),w)}if(Kr(m)||zr(m))return k!==null?null:c(g,h,m,w,null);lo(g,m)}return null}function y(g,h,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ji:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,k);case Qn:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,k);case jt:var C=w._init;return y(g,h,m,C(w._payload),k)}if(Kr(w)||zr(w))return g=g.get(m)||null,c(h,g,w,k,null);lo(h,w)}return null}function v(g,h,m,w){for(var k=null,C=null,E=h,T=h=0,O=null;E!==null&&T<m.length;T++){E.index>T?(O=E,E=null):O=E.sibling;var M=f(g,E,m[T],w);if(M===null){E===null&&(E=O);break}e&&E&&M.alternate===null&&t(g,E),h=o(M,h,T),C===null?k=M:C.sibling=M,C=M,E=O}if(T===m.length)return n(g,E),Y&&wn(g,T),k;if(E===null){for(;T<m.length;T++)E=d(g,m[T],w),E!==null&&(h=o(E,h,T),C===null?k=E:C.sibling=E,C=E);return Y&&wn(g,T),k}for(E=r(g,E);T<m.length;T++)O=y(E,g,T,m[T],w),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?T:O.key),h=o(O,h,T),C===null?k=O:C.sibling=O,C=O);return e&&E.forEach(function(ne){return t(g,ne)}),Y&&wn(g,T),k}function x(g,h,m,w){var k=zr(m);if(typeof k!="function")throw Error(P(150));if(m=k.call(m),m==null)throw Error(P(151));for(var C=k=null,E=h,T=h=0,O=null,M=m.next();E!==null&&!M.done;T++,M=m.next()){E.index>T?(O=E,E=null):O=E.sibling;var ne=f(g,E,M.value,w);if(ne===null){E===null&&(E=O);break}e&&E&&ne.alternate===null&&t(g,E),h=o(ne,h,T),C===null?k=ne:C.sibling=ne,C=ne,E=O}if(M.done)return n(g,E),Y&&wn(g,T),k;if(E===null){for(;!M.done;T++,M=m.next())M=d(g,M.value,w),M!==null&&(h=o(M,h,T),C===null?k=M:C.sibling=M,C=M);return Y&&wn(g,T),k}for(E=r(g,E);!M.done;T++,M=m.next())M=y(E,g,T,M.value,w),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?T:M.key),h=o(M,h,T),C===null?k=M:C.sibling=M,C=M);return e&&E.forEach(function(ct){return t(g,ct)}),Y&&wn(g,T),k}function b(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Xn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ji:e:{for(var k=m.key,C=h;C!==null;){if(C.key===k){if(k=m.type,k===Xn){if(C.tag===7){n(g,C.sibling),h=i(C,m.props.children),h.return=g,g=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Od(k)===C.type){n(g,C.sibling),h=i(C,m.props),h.ref=Br(g,C,m),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===Xn?(h=Ln(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=Io(m.type,m.key,m.props,null,g.mode,w),w.ref=Br(g,h,m),w.return=g,g=w)}return s(g);case Qn:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Aa(m,g.mode,w),h.return=g,g=h}return s(g);case jt:return C=m._init,b(g,h,C(m._payload),w)}if(Kr(m))return v(g,h,m,w);if(zr(m))return x(g,h,m,w);lo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=ba(m,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return b}var Sr=nm(!0),rm=nm(!1),ns=pn(null),rs=null,ir=null,Wu=null;function Hu(){Wu=ir=rs=null}function Gu(e){var t=ns.current;K(ns),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){rs=e,Wu=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Wu!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(rs===null)throw Error(P(308));ir=e,rs.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Pn=null;function Ku(e){Pn===null?Pn=[e]:Pn.push(e)}function im(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function is(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=Z({},d,f);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=d}}function Vd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Bi={},gt=pn(Bi),Ti=pn(Bi),bi=pn(Bi);function Tn(e){if(e===Bi)throw Error(P(174));return e}function Qu(e,t){switch(W(bi,t),W(Ti,e),W(gt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}K(gt),W(gt,t)}function kr(){K(gt),K(Ti),K(bi)}function sm(e){Tn(bi.current);var t=Tn(gt.current),n=pl(t,e.type);t!==n&&(W(Ti,e),W(gt,n))}function Xu(e){Ti.current===e&&(K(gt),K(Ti))}var Q=pn(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=[];function Ju(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var To=$t.ReactCurrentDispatcher,ka=$t.ReactCurrentBatchConfig,On=0,J=null,ae=null,ue=null,ss=!1,oi=!1,Ai=0,X1=0;function ye(){throw Error(P(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function qu(e,t,n,r,i,o){if(On=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?ev:tv,e=n(r,i),oi){o=0;do{if(oi=!1,Ai=0,25<=o)throw Error(P(301));o+=1,ue=ae=null,t.updateQueue=null,To.current=nv,e=n(r,i)}while(oi)}if(To.current=as,t=ae!==null&&ae.next!==null,On=0,ue=ae=J=null,ss=!1,t)throw Error(P(300));return e}function ec(){var e=Ai!==0;return Ai=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ze(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(P(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Di(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((On&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,J.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ut(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ut(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function am(){}function lm(e,t){var n=J,r=Ze(),i=t(),o=!ut(r.memoizedState,i);if(o&&(r.memoizedState=i,Le=!0),r=r.queue,tc(dm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Li(9,cm.bind(null,n,r,i,t),void 0,null),de===null)throw Error(P(349));On&30||um(n,t,i)}return i}function um(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cm(e,t,n,r){t.value=n,t.getSnapshot=r,fm(t)&&pm(e)}function dm(e,t,n){return n(function(){fm(t)&&pm(e)})}function fm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function pm(e){var t=Mt(e,1);t!==null&&at(t,e,1,-1)}function Nd(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=q1.bind(null,J,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hm(){return Ze().memoizedState}function bo(e,t,n,r){var i=ft();J.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Ms(e,t,n,r){var i=Ze();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&Zu(r,s.deps)){i.memoizedState=Li(t,n,o,r);return}}J.flags|=e,i.memoizedState=Li(1|t,n,o,r)}function jd(e,t){return bo(8390656,8,e,t)}function tc(e,t){return Ms(2048,8,e,t)}function mm(e,t){return Ms(4,2,e,t)}function gm(e,t){return Ms(4,4,e,t)}function ym(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vm(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4,4,ym.bind(null,t,e),n)}function nc(){}function xm(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wm(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sm(e,t,n){return On&21?(ut(n,t)||(n=Th(),J.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function J1(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{F=n,ka.transition=r}}function km(){return Ze().memoizedState}function Z1(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))Cm(t,n);else if(n=im(e,t,n,r),n!==null){var i=Te();at(n,e,r,i),Pm(n,t,r)}}function q1(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))Cm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ut(a,s)){var l=t.interleaved;l===null?(i.next=i,Ku(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=im(e,t,i,r),n!==null&&(i=Te(),at(n,e,r,i),Pm(n,t,r))}}function Em(e){var t=e.alternate;return e===J||t!==null&&t===J}function Cm(e,t){oi=ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var as={readContext:Je,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},ev={readContext:Je,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bo(4194308,4,ym.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Nd,useDebugValue:nc,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Nd(!1),t=e[0];return e=J1.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=ft();if(Y){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),de===null)throw Error(P(349));On&30||um(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jd(dm.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,cm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=de.identifierPrefix;if(Y){var n=Ct,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tv={readContext:Je,useCallback:xm,useContext:Je,useEffect:tc,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Ea,useRef:hm,useState:function(){return Ea(Di)},useDebugValue:nc,useDeferredValue:function(e){var t=Ze();return Sm(t,ae.memoizedState,e)},useTransition:function(){var e=Ea(Di)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:km,unstable_isNewReconciler:!1},nv={readContext:Je,useCallback:xm,useContext:Je,useEffect:tc,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Ca,useRef:hm,useState:function(){return Ca(Di)},useDebugValue:nc,useDeferredValue:function(e){var t=Ze();return ae===null?t.memoizedState=e:Sm(t,ae.memoizedState,e)},useTransition:function(){var e=Ca(Di)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:km,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=qt(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(at(t,e,i,r),Po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=qt(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(at(t,e,i,r),Po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=qt(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(at(t,e,r,n),Po(t,e,r))}};function Fd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function Tm(e,t,n){var r=!1,i=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(i=Me(t)?$n:Ee.current,r=t.contextTypes,o=(r=r!=null)?xr(e,i):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Yu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Je(o):(o=Me(t)?$n:Ee.current,i.context=xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rs.enqueueReplaceState(i,i.state,null),is(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",r=t;do n+=Ly(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function bm(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){us||(us=!0,Gl=r),Ol(e,t)},n}function Am(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ud(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yv.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var iv=$t.ReactCurrentOwner,Le=!1;function Pe(e,t,n,r){t.child=e===null?rm(t,null,n,r):Sr(t,e.child,n,r)}function Gd(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=qu(e,t,n,r,o,i),n=ec(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(Y&&n&&Fu(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Kd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Dm(e,t,o,r,i)):(e=Io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(s,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=en(o,r),e.ref=t.ref,e.return=t,t.child=e}function Dm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return zl(e,t,n,r,i)}function Lm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sr,Oe),Oe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sr,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(sr,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(sr,Oe),Oe|=r;return Pe(e,t,i,n),t.child}function Im(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,r,i){var o=Me(n)?$n:Ee.current;return o=xr(t,o),gr(t,i),n=qu(e,t,n,r,o,i),r=ec(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(Y&&r&&Fu(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Yd(e,t,n,r,i){if(Me(n)){var o=!0;qo(t)}else o=!1;if(gr(t,i),t.stateNode===null)Ao(e,t),Tm(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Me(n)?$n:Ee.current,u=xr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bd(t,s,r,u),Ft=!1;var f=t.memoizedState;s.state=f,is(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ie.current||Ft?(typeof c=="function"&&($l(t,n,c,r),l=t.memoizedState),(a=Ft||Fd(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,om(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rt(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Me(n)?$n:Ee.current,l=xr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Bd(t,s,r,l),Ft=!1,f=t.memoizedState,s.state=f,is(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Ie.current||Ft?(typeof y=="function"&&($l(t,n,y,r),v=t.memoizedState),(u=Ft||Fd(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,o,i)}function Vl(e,t,n,r,i,o){Im(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Rd(t,n,!1),Rt(e,t,o);r=t.stateNode,iv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,a,o)):Pe(e,t,a,o),t.memoizedState=r.state,i&&Rd(t,n,!0),t.child}function Mm(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),Qu(e,t.containerInfo)}function Qd(e,t,n,r,i){return wr(),Uu(i),t.flags|=256,Pe(e,t,n,r),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rm(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Os(s,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jl(n),t.memoizedState=Nl,e):rc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ov(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=en(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=en(a,o):(o=Ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?jl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Nl,r}return o=e.child,e=o.sibling,r=en(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Uu(r),Sr(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ov(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Pa(Error(P(422))),uo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Os({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,s),t.child.memoizedState=jl(s),t.memoizedState=Nl,o);if(!(t.mode&1))return uo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=Pa(o,r,void 0),uo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Le||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),at(r,e,i,-1))}return uc(),r=Pa(Error(P(421))),uo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Xt(i.nextSibling),Ve=t,Y=!0,ot=null,e!==null&&(Ge[Ke++]=Et,Ge[Ke++]=Ct,Ge[Ke++]=_n,Et=e.id,Ct=e.overflow,_n=t),t=rc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function Ta(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $m(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ta(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ta(t,!0,n,null,o);break;case"together":Ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sv(e,t,n){switch(t.tag){case 3:Mm(t),wr();break;case 5:sm(t);break;case 1:Me(t.type)&&qo(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ns,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Rm(e,t,n):(W(Q,Q.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Lm(e,t,n)}return Rt(e,t,n)}var _m,Fl,Om,zm;_m=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};Om=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(gt.current);var o=null;switch(n){case"input":i=ul(e,i),r=ul(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=fl(e,i),r=fl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jo)}hl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function av(e,t,n){var r=t.pendingProps;switch(Bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Me(t.type)&&Zo(),ve(t),null;case 3:return r=t.stateNode,kr(),K(Ie),K(Ee),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Ql(ot),ot=null))),Fl(e,t),ve(t),null;case 5:Xu(t);var i=Tn(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Om(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ve(t),null}if(e=Tn(gt.current),ao(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ht]=t,r[Pi]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)H(Qr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":od(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ad(r,o),H("invalid",r)}hl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":Zi(r),sd(r,o,!0);break;case"textarea":Zi(r),ld(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ht]=t,e[Pi]=r,_m(e,t,!1,!1),t.stateNode=e;e:{switch(s=ml(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)H(Qr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":od(e,r),i=ul(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":ad(e,r),i=fl(e,r),H("invalid",e);break;default:i=r}hl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?hh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(e,l):typeof l=="number"&&gi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",e):l!=null&&bu(e,o,l,s))}switch(n){case"input":Zi(e),sd(e,r,!1);break;case"textarea":Zi(e),ld(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Tn(bi.current),Tn(gt.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ve(t),null;case 13:if(K(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&ze!==null&&t.mode&1&&!(t.flags&128))tm(),wr(),t.flags|=98560,o=!1;else if(o=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[ht]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else ot!==null&&(Ql(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?le===0&&(le=3):uc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return kr(),Fl(e,t),e===null&&Ei(t.stateNode.containerInfo),ve(t),null;case 10:return Gu(t.type._context),ve(t),null;case 17:return Me(t.type)&&Zo(),ve(t),null;case 19:if(K(Q),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ur(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=os(e),s!==null){for(t.flags|=128,Ur(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Cr&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=os(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return ve(t),null}else 2*te()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function lv(e,t){switch(Bu(t),t.tag){case 1:return Me(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),K(Ie),K(Ee),Ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return kr(),null;case 10:return Gu(t.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var co=!1,we=!1,uv=typeof WeakSet=="function"?WeakSet:Set,L=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){q(e,t,r)}}var Jd=!1;function cv(e,t){if(Pl=Yo,e=Bh(),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Yo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:rt(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Jd,Jd=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bl(t,n,o)}i=i.next}while(i!==r)}}function $s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Pi],delete t[Dl],delete t[G1],delete t[K1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nm(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jo));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var fe=null,it=!1;function zt(e,t,n){for(n=n.child;n!==null;)jm(e,t,n),n=n.sibling}function jm(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ts,n)}catch{}switch(n.tag){case 5:we||or(n,t);case 6:var r=fe,i=it;fe=null,zt(e,t,n),fe=r,it=i,fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),wi(e)):xa(fe,n.stateNode));break;case 4:r=fe,i=it,fe=n.stateNode.containerInfo,it=!0,zt(e,t,n),fe=r,it=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Bl(n,t,s),i=i.next}while(i!==r)}zt(e,t,n);break;case 1:if(!we&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,zt(e,t,n),we=r):zt(e,t,n);break;default:zt(e,t,n)}}function qd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uv),t.forEach(function(r){var i=xv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,it=!1;break e;case 3:fe=a.stateNode.containerInfo,it=!0;break e;case 4:fe=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(fe===null)throw Error(P(160));jm(o,s,i),fe=null,it=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fm(t,e),t=t.sibling}function Fm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{si(3,e,e.return),$s(3,e)}catch(x){q(e,e.return,x)}try{si(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{gi(i,"")}catch(x){q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uh(i,o),ml(a,s);var u=ml(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?hh(i,d):c==="dangerouslySetInnerHTML"?fh(i,d):c==="children"?gi(i,d):bu(i,c,d,u)}switch(a){case"input":cl(i,o);break;case"textarea":ch(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?fr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pi]=o}catch(x){q(e,e.return,x)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){q(e,e.return,x)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=te())),r&4&&qd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||c,nt(t,e),we=u):nt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(d=L=c;L!==null;){switch(f=L,y=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:or(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:or(f,f.return);break;case 22:if(f.memoizedState!==null){tf(d);continue}}y!==null?(y.return=f,L=y):tf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(x){q(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){q(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:nt(t,e),dt(e),r&4&&qd(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nm(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=Zd(e);Hl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zd(e);Wl(e,a,s);break;default:throw Error(P(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dv(e,t,n){L=e,Bm(e)}function Bm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||co;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=co;var u=we;if(co=s,(we=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?nf(i):l!==null?(l.return=s,L=l):nf(i);for(;o!==null;)L=o,Bm(o),o=o.sibling;L=i,co=a,we=u}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):ef(e)}}function ef(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||$s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Ul(t)}catch(f){q(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function tf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function nf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$s(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var o=t.return;try{Ul(t)}catch(l){q(t,o,l)}break;case 5:var s=t.return;try{Ul(t)}catch(l){q(t,s,l)}}}catch(l){q(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var fv=Math.ceil,ls=$t.ReactCurrentDispatcher,ic=$t.ReactCurrentOwner,Xe=$t.ReactCurrentBatchConfig,N=0,de=null,ie=null,he=0,Oe=0,sr=pn(0),le=0,Ii=null,zn=0,_s=0,oc=0,ai=null,De=null,sc=0,Cr=1/0,wt=null,us=!1,Gl=null,Zt=null,fo=!1,Gt=null,cs=0,li=0,Kl=null,Do=-1,Lo=0;function Te(){return N&6?te():Do!==-1?Do:Do=te()}function qt(e){return e.mode&1?N&2&&he!==0?he&-he:Q1.transition!==null?(Lo===0&&(Lo=Th()),Lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Rh(e.type)),e):1}function at(e,t,n,r){if(50<li)throw li=0,Kl=null,Error(P(185));Ni(e,n,r),(!(N&2)||e!==de)&&(e===de&&(!(N&2)&&(_s|=n),le===4&&Wt(e,he)),Re(e,r),n===1&&N===0&&!(t.mode&1)&&(Cr=te()+500,Is&&hn()))}function Re(e,t){var n=e.callbackNode;Qy(e,t);var r=Ko(e,e===de?he:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?Y1(rf.bind(null,e)):Zh(rf.bind(null,e)),W1(function(){!(N&6)&&hn()}),n=null;else{switch(bh(r)){case 1:n=Mu;break;case 4:n=Ch;break;case 16:n=Go;break;case 536870912:n=Ph;break;default:n=Go}n=Xm(n,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Um(e,t){if(Do=-1,Lo=0,N&6)throw Error(P(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=Ko(e,e===de?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ds(e,r);else{t=r;var i=N;N|=2;var o=Hm();(de!==e||he!==t)&&(wt=null,Cr=te()+500,Dn(e,t));do try{mv();break}catch(a){Wm(e,a)}while(!0);Hu(),ls.current=o,N=i,ie!==null?t=0:(de=null,he=0,t=le)}if(t!==0){if(t===2&&(i=wl(e),i!==0&&(r=i,t=Yl(e,i))),t===1)throw n=Ii,Dn(e,0),Wt(e,r),Re(e,te()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!pv(i)&&(t=ds(e,r),t===2&&(o=wl(e),o!==0&&(r=o,t=Yl(e,o))),t===1))throw n=Ii,Dn(e,0),Wt(e,r),Re(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Sn(e,De,wt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=sc+500-te(),10<t)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al(Sn.bind(null,e,De,wt),t);break}Sn(e,De,wt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-st(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fv(r/1960))-r,10<r){e.timeoutHandle=Al(Sn.bind(null,e,De,wt),r);break}Sn(e,De,wt);break;case 5:Sn(e,De,wt);break;default:throw Error(P(329))}}}return Re(e,te()),e.callbackNode===n?Um.bind(null,e):null}function Yl(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=ds(e,t),e!==2&&(t=De,De=n,t!==null&&Ql(t)),e}function Ql(e){De===null?De=e:De.push.apply(De,e)}function pv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~oc,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(N&6)throw Error(P(327));yr();var t=Ko(e,0);if(!(t&1))return Re(e,te()),null;var n=ds(e,t);if(e.tag!==0&&n===2){var r=wl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=Ii,Dn(e,0),Wt(e,t),Re(e,te()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,De,wt),Re(e,te()),null}function ac(e,t){var n=N;N|=1;try{return e(t)}finally{N=n,N===0&&(Cr=te()+500,Is&&hn())}}function Vn(e){Gt!==null&&Gt.tag===0&&!(N&6)&&yr();var t=N;N|=1;var n=Xe.transition,r=F;try{if(Xe.transition=null,F=1,e)return e()}finally{F=r,Xe.transition=n,N=t,!(N&6)&&hn()}}function lc(){Oe=sr.current,K(sr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U1(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:kr(),K(Ie),K(Ee),Ju();break;case 5:Xu(r);break;case 4:kr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:Gu(r.type._context);break;case 22:case 23:lc()}n=n.return}if(de=e,ie=e=en(e.current,null),he=Oe=t,le=0,Ii=null,oc=_s=zn=0,De=ai=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Pn=null}return e}function Wm(e,t){do{var n=ie;try{if(Hu(),To.current=as,ss){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ss=!1}if(On=0,ue=ae=J=null,oi=!1,Ai=0,ic.current=null,n===null||n.return===null){le=1,Ii=t,ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Wd(s);if(y!==null){y.flags&=-257,Hd(y,s,a,o,t),y.mode&1&&Ud(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Ud(o,u,t),uc();break e}l=Error(P(426))}}else if(Y&&a.mode&1){var b=Wd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Hd(b,s,a,o,t),Uu(Er(l,a));break e}}o=l=Er(l,a),le!==4&&(le=2),ai===null?ai=[o]:ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=bm(o,l,t);zd(o,g);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Zt===null||!Zt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Am(o,a,t);zd(o,w);break e}}o=o.return}while(o!==null)}Km(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Hm(){var e=ls.current;return ls.current=as,e===null?as:e}function uc(){(le===0||le===3||le===2)&&(le=4),de===null||!(zn&268435455)&&!(_s&268435455)||Wt(de,he)}function ds(e,t){var n=N;N|=2;var r=Hm();(de!==e||he!==t)&&(wt=null,Dn(e,t));do try{hv();break}catch(i){Wm(e,i)}while(!0);if(Hu(),N=n,ls.current=r,ie!==null)throw Error(P(261));return de=null,he=0,le}function hv(){for(;ie!==null;)Gm(ie)}function mv(){for(;ie!==null&&!jy();)Gm(ie)}function Gm(e){var t=Qm(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Km(e):ie=t,ic.current=null}function Km(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lv(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=av(n,t,Oe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function Sn(e,t,n){var r=F,i=Xe.transition;try{Xe.transition=null,F=1,gv(e,t,n,r)}finally{Xe.transition=i,F=r}return null}function gv(e,t,n,r){do yr();while(Gt!==null);if(N&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Xy(e,o),e===de&&(ie=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Xm(Go,function(){return yr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xe.transition,Xe.transition=null;var s=F;F=1;var a=N;N|=4,ic.current=null,cv(e,n),Fm(n,e),O1(Tl),Yo=!!Pl,Tl=Pl=null,e.current=n,dv(n),Fy(),N=a,F=s,Xe.transition=o}else e.current=n;if(fo&&(fo=!1,Gt=e,cs=i),o=e.pendingLanes,o===0&&(Zt=null),Wy(n.stateNode),Re(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(us)throw us=!1,e=Gl,Gl=null,e;return cs&1&&e.tag!==0&&yr(),o=e.pendingLanes,o&1?e===Kl?li++:(li=0,Kl=e):li=0,hn(),null}function yr(){if(Gt!==null){var e=bh(cs),t=Xe.transition,n=F;try{if(Xe.transition=null,F=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,cs=0,N&6)throw Error(P(331));var i=N;for(N|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:si(8,c,o)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var f=c.sibling,y=c.return;if(Vm(c),c===u){L=null;break}if(f!==null){f.return=y,L=f;break}L=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var h=e.current;for(L=h;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=h;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$s(9,a)}}catch(k){q(a,a.return,k)}if(a===s){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(N=i,hn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ts,e)}catch{}r=!0}return r}finally{F=n,Xe.transition=t}}return!1}function of(e,t,n){t=Er(n,t),t=bm(e,t,1),e=Jt(e,t,1),t=Te(),e!==null&&(Ni(e,1,t),Re(e,t))}function q(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Er(n,e),e=Am(t,e,1),t=Jt(t,e,1),e=Te(),t!==null&&(Ni(t,1,e),Re(t,e));break}}t=t.return}}function yv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>te()-sc?Dn(e,0):oc|=n),Re(e,t)}function Ym(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=Te();e=Mt(e,t),e!==null&&(Ni(e,t,n),Re(e,n))}function vv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function xv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Ym(e,n)}var Qm;Qm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,sv(e,t,n);Le=!!(e.flags&131072)}else Le=!1,Y&&t.flags&1048576&&qh(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=xr(t,Ee.current);gr(t,n),i=qu(null,t,r,e,i,n);var o=ec();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yu(t),i.updater=Rs,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=Vl(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Fu(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sv(r),e=rt(r,e),i){case 0:t=zl(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Kd(null,t,r,rt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Yd(e,t,r,i,n);case 3:e:{if(Mm(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,om(e,t),is(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Er(Error(P(423)),t),t=Qd(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(P(424)),t),t=Qd(e,t,r,n,i);break e}else for(ze=Xt(t.stateNode.containerInfo.firstChild),Ve=t,Y=!0,ot=null,n=rm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Rt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return sm(t),e===null&&Ml(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,bl(r,i)?s=null:o!==null&&bl(r,o)&&(t.flags|=32),Im(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return Rm(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Gd(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(ns,r._currentValue),r._currentValue=s,o!==null)if(ut(o.value,s)){if(o.children===i.children&&!Ie.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=Je(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=rt(r,t.pendingProps),i=rt(r.type,i),Kd(e,t,r,i,n);case 15:return Dm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Ao(e,t),t.tag=1,Me(r)?(e=!0,qo(t)):e=!1,gr(t,n),Tm(t,r,i),_l(t,r,i,n),Vl(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Lm(e,t,n)}throw Error(P(156,t.tag))};function Xm(e,t){return Eh(e,t)}function wv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new wv(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sv(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Du)return 11;if(e===Lu)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Io(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")cc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Xn:return Ln(n.children,i,o,t);case Au:s=8,i|=8;break;case ol:return e=Ye(12,n,t,i|2),e.elementType=ol,e.lanes=o,e;case sl:return e=Ye(13,n,t,i),e.elementType=sl,e.lanes=o,e;case al:return e=Ye(19,n,t,i),e.elementType=al,e.lanes=o,e;case sh:return Os(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ih:s=10;break e;case oh:s=9;break e;case Du:s=11;break e;case Lu:s=14;break e;case jt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ye(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function Os(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=sh,e.lanes=n,e.stateNode={isHidden:!1},e}function ba(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Aa(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,i,o,s,a,l){return e=new kv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ye(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(o),e}function Ev(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jm(e){if(!e)return sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Me(n))return Jh(e,n,t)}return t}function Zm(e,t,n,r,i,o,s,a,l){return e=dc(n,r,!0,e,i,o,s,a,l),e.context=Jm(null),n=e.current,r=Te(),i=qt(n),o=Tt(r,i),o.callback=t??null,Jt(n,o,i),e.current.lanes=i,Ni(e,i,r),Re(e,r),e}function zs(e,t,n,r){var i=t.current,o=Te(),s=qt(i);return n=Jm(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,s),e!==null&&(at(e,i,s,o),Po(e,i,s)),s}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fc(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function Cv(){return null}var qm=typeof reportError=="function"?reportError:function(e){console.error(e)};function pc(e){this._internalRoot=e}Vs.prototype.render=pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));zs(e,t,null,null)};Vs.prototype.unmount=pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){zs(null,e,null,null)}),t[It]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Mh(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function af(){}function Pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fs(s);o.call(u)}}var s=Zm(t,r,e,0,null,!1,!1,"",af);return e._reactRootContainer=s,e[It]=s.current,Ei(e.nodeType===8?e.parentNode:e),Vn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fs(l);a.call(u)}}var l=dc(e,0,!1,null,null,!1,!1,"",af);return e._reactRootContainer=l,e[It]=l.current,Ei(e.nodeType===8?e.parentNode:e),Vn(function(){zs(t,l,n,r)}),l}function js(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=fs(s);a.call(l)}}zs(t,s,e,i)}else s=Pv(n,t,e,i,r);return fs(s)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yr(t.pendingLanes);n!==0&&(Ru(t,n|1),Re(t,te()),!(N&6)&&(Cr=te()+500,hn()))}break;case 13:Vn(function(){var r=Mt(e,1);if(r!==null){var i=Te();at(r,e,1,i)}}),fc(e,1)}};$u=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Te();at(t,e,134217728,n)}fc(e,134217728)}};Dh=function(e){if(e.tag===13){var t=qt(e),n=Mt(e,t);if(n!==null){var r=Te();at(n,e,t,r)}fc(e,t)}};Lh=function(){return F};Ih=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};yl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ls(r);if(!i)throw Error(P(90));lh(r),cl(r,i)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};yh=ac;vh=Vn;var Tv={usingClientEntryPoint:!1,Events:[Fi,er,Ls,mh,gh,ac]},Wr={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sh(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Ts=po.inject(bv),mt=po}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(t))throw Error(P(200));return Ev(e,t,null,n)};Fe.createRoot=function(e,t){if(!hc(e))throw Error(P(299));var n=!1,r="",i=qm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,i),e[It]=t.current,Ei(e.nodeType===8?e.parentNode:e),new pc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Sh(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Vn(e)};Fe.hydrate=function(e,t,n){if(!Ns(t))throw Error(P(200));return js(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!hc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Zm(t,null,e,1,n??null,i,!1,o,s),e[It]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vs(t)};Fe.render=function(e,t,n){if(!Ns(t))throw Error(P(200));return js(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(P(40));return e._reactRootContainer?(Vn(function(){js(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Fe.unstable_batchedUpdates=ac;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return js(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(e){console.error(e)}}eg(),eh.exports=Fe;var Av=eh.exports,lf=Av;rl.createRoot=lf.createRoot,rl.hydrateRoot=lf.hydrateRoot;const Dv=()=>p.createElement("div",null,p.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.createElement("g",{opacity:"0.15"},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),p.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),p.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),p.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},p.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_2"}))),p.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},p.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_2"}))),p.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},p.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_2"}))),p.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},p.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_2"}))),p.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},p.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},p.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},p.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},p.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},p.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_1"}))),p.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},p.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_1"}))),p.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},p.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},p.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},p.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},p.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},p.createElement("mpath",{xlinkHref:"#path_0"}))),p.createElement("defs",null,p.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},p.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),p.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),p.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},p.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),p.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),p.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},p.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),p.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#945DD6"}),p.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#945DD6"}),p.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#F46737"}),p.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#F46737"}),p.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#F46737"}),p.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#13ADC7"}),p.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#13ADC7"}),p.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#945DD6"}),p.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),p.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#13ADC7"}),p.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})))));var oe=function(){return oe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},oe.apply(this,arguments)};function Pr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Lv=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var c=s[u];if(!l(c))return!1;var d=t[c],f=n[c];if(o=r?r.call(i,d,f,c):void 0,o===!1||o===void 0&&d!==f)return!1}return!0};const Iv=Wp(Lv);var G="-ms-",ui="-moz-",j="-webkit-",tg="comm",Fs="rule",mc="decl",Mv="@import",ng="@keyframes",Rv="@layer",rg=Math.abs,gc=String.fromCharCode,Xl=Object.assign;function $v(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function ig(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function og(e){return e.length}function Xr(e,t){return t.push(e),e}function _v(e,t){return e.map(t).join("")}function uf(e,t){return e.filter(function(n){return!St(n,t)})}var Bs=1,br=1,sg=0,qe=0,re=0,$r="";function Us(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Bs,column:br,length:s,return:"",siblings:a}}function Vt(e,t){return Xl(Us("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Xr(e,e.siblings)}function Ov(){return re}function zv(){return re=qe>0?ce($r,--qe):0,br--,re===10&&(br=1,Bs--),re}function lt(){return re=qe<sg?ce($r,qe++):0,br++,re===10&&(br=1,Bs++),re}function In(){return ce($r,qe)}function Ro(){return qe}function Ws(e,t){return Tr($r,e,t)}function Jl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vv(e){return Bs=br=1,sg=pt($r=e),qe=0,[]}function Nv(e){return $r="",e}function Da(e){return ig(Ws(qe-1,Zl(e===91?e+2:e===40?e+1:e)))}function jv(e){for(;(re=In())&&re<33;)lt();return Jl(e)>2||Jl(re)>3?"":" "}function Fv(e,t){for(;--t&&lt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Ws(e,Ro()+(t<6&&In()==32&&lt()==32))}function Zl(e){for(;lt();)switch(re){case e:return qe;case 34:case 39:e!==34&&e!==39&&Zl(re);break;case 40:e===41&&Zl(e);break;case 92:lt();break}return qe}function Bv(e,t){for(;lt()&&e+re!==57;)if(e+re===84&&In()===47)break;return"/*"+Ws(t,qe-1)+"*"+gc(e===47?e:lt())}function Uv(e){for(;!Jl(In());)lt();return Ws(e,qe)}function Wv(e){return Nv($o("",null,null,null,[""],e=Vv(e),0,[0],e))}function $o(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,y=0,v=0,x=1,b=1,g=1,h=0,m="",w=i,k=o,C=r,E=m;b;)switch(v=h,h=lt()){case 40:if(v!=108&&ce(E,d-1)==58){Mo(E+=_(Da(h),"&","&\f"),"&\f",rg(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Da(h);break;case 9:case 10:case 13:case 32:E+=jv(v);break;case 92:E+=Fv(Ro()-1,7);continue;case 47:switch(In()){case 42:case 47:Xr(Hv(Bv(lt(),Ro()),t,n,l),l);break;default:E+="/"}break;case 123*x:a[u++]=pt(E)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+c:g==-1&&(E=_(E,/\f/g,"")),y>0&&pt(E)-d&&Xr(y>32?df(E+";",r,n,d-1,l):df(_(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(Xr(C=cf(E,t,n,u,c,i,a,m,w=[],k=[],d,o),o),h===123)if(c===0)$o(E,t,C,C,w,o,d,a,k);else switch(f===99&&ce(E,3)===110?100:f){case 100:case 108:case 109:case 115:$o(e,C,C,r&&Xr(cf(e,C,C,0,0,i,a,m,i,w=[],d,k),k),i,k,d,a,r?w:k);break;default:$o(E,C,C,C,[""],k,0,a,k)}}u=c=y=0,x=g=1,m=E="",d=s;break;case 58:d=1+pt(E),y=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&zv()==125)continue}switch(E+=gc(h),h*x){case 38:g=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(pt(E)-1)*g,g=1;break;case 64:In()===45&&(E+=Da(lt())),f=In(),c=d=pt(m=E+=Uv(Ro())),h++;break;case 45:v===45&&pt(E)==2&&(x=0)}}return o}function cf(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,y=i===0?o:[""],v=og(y),x=0,b=0,g=0;x<r;++x)for(var h=0,m=Tr(e,f+1,f=rg(b=s[x])),w=e;h<v;++h)(w=ig(b>0?y[h]+" "+m:_(m,/&\f/g,y[h])))&&(l[g++]=w);return Us(e,t,n,i===0?Fs:a,l,u,c,d)}function Hv(e,t,n,r){return Us(e,t,n,tg,gc(Ov()),Tr(e,2,-2),0,r)}function df(e,t,n,r,i){return Us(e,t,n,mc,Tr(e,0,r),Tr(e,r+1,-1),r,i)}function ag(e,t,n){switch($v(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return ui+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+ui+e+G+e+e;case 5936:switch(ce(e,t+11)){case 114:return j+e+G+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+G+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+G+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+G+e+e;case 6165:return j+e+G+"flex-"+e+e;case 5187:return j+e+_(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return j+e+G+"flex-item-"+_(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":G+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return j+e+G+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+G+_(e,"shrink","negative")+e;case 5292:return j+e+G+_(e,"basis","preferred-size")+e;case 6060:return j+"box-"+_(e,"-grow","")+j+e+G+_(e,"grow","positive")+e;case 4554:return j+_(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!St(e,/flex-|baseline/))return G+"grid-column-align"+Tr(e,t)+e;break;case 2592:case 3360:return G+_(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,St(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:G+_(e,"-start","")+e+G+"grid-row-span:"+(~Mo(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":G+_(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:G+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+ui+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?ag(_(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ce(e,t+6)===121)return _(e,":",":"+j)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(ce(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+G+"$2box$3")+e;case 100:return _(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function ps(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Gv(e,t,n,r){switch(e.type){case Rv:if(e.children.length)break;case Mv:case mc:return e.return=e.return||e.value;case tg:return"";case ng:return e.return=e.value+"{"+ps(e.children,r)+"}";case Fs:if(!pt(e.value=e.props.join(",")))return""}return pt(n=ps(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kv(e){var t=og(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Yv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mc:e.return=ag(e.value,e.length,n);return;case ng:return ps([Vt(e,{value:_(e.value,"@","@"+j)})],r);case Fs:if(e.length)return _v(n=e.props,function(i){switch(St(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Vt(e,{props:[_(i,/:(read-\w+)/,":"+ui+"$1")]})),Kn(Vt(e,{props:[i]})),Xl(e,{props:uf(n,r)});break;case"::placeholder":Kn(Vt(e,{props:[_(i,/:(plac\w+)/,":"+j+"input-$1")]})),Kn(Vt(e,{props:[_(i,/:(plac\w+)/,":"+ui+"$1")]})),Kn(Vt(e,{props:[_(i,/:(plac\w+)/,G+"input-$1")]})),Kn(Vt(e,{props:[i]})),Xl(e,{props:uf(n,r)});break}return""})}}var Xv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},an=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",lg="active",hs="data-styled-version",Nn="6.1.9",yc=`/*!sc*/
`,vc=typeof window<"u"&&"HTMLElement"in window,Jv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),Zv={},Hs=Object.freeze([]),Ar=Object.freeze({});function xc(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var ug=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ex=/(^-|-$)/g;function ff(e){return e.replace(qv,"-").replace(ex,"")}var tx=/(a)(d)/gi,ho=52,pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function ql(e){var t,n="";for(t=Math.abs(e);t>ho;t=t/ho|0)n=pf(t%ho)+n;return(pf(t%ho)+n).replace(tx,"$1-$2")}var La,cg=5381,ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dg=function(e){return ar(cg,e)};function wc(e){return ql(dg(e)>>>0)}function fg(e){return e.displayName||e.name||"Component"}function Ia(e){return typeof e=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,hg=pg?Symbol.for("react.memo"):60115,nx=pg?Symbol.for("react.forward_ref"):60112,rx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ix={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ox=((La={})[nx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},La[hg]=mg,La);function hf(e){return("type"in(t=e)&&t.type.$$typeof)===hg?mg:"$$typeof"in e?ox[e.$$typeof]:rx;var t}var sx=Object.defineProperty,ax=Object.getOwnPropertyNames,mf=Object.getOwnPropertySymbols,lx=Object.getOwnPropertyDescriptor,ux=Object.getPrototypeOf,gf=Object.prototype;function Sc(e,t,n){if(typeof t!="string"){if(gf){var r=ux(t);r&&r!==gf&&Sc(e,r,n)}var i=ax(t);mf&&(i=i.concat(mf(t)));for(var o=hf(e),s=hf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in ix||n&&n[l]||s&&l in s||o&&l in o)){var u=lx(t,l);try{sx(e,l,u)}catch{}}}}return e}function jn(e){return typeof e=="function"}function Gs(e){return typeof e=="object"&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Mi(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ri(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ri(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=eu(e[r],t[r]);else if(Ri(t))for(var r in t)e[r]=eu(e[r],t[r]);return e}function kc(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var cx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qe(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(yc);return n},e}(),_o=new Map,ms=new Map,Oo=1,mo=function(e){if(_o.has(e))return _o.get(e);for(;ms.has(Oo);)Oo++;var t=Oo++;return _o.set(e,t),ms.set(t,e),t},dx=function(e,t){Oo=t+1,_o.set(e,t),ms.set(t,e)},fx="style[".concat(an,"][").concat(hs,'="').concat(Nn,'"]'),px=new RegExp("^".concat(an,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},mx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(yc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(px);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(dx(c,u),hx(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function tu(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(an,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(an,lg),r.setAttribute(hs,Nn);var s=tu();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},gx=function(){function e(t){this.element=gg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),yx=function(){function e(t){this.element=gg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yf=vc,xx={isServer:!vc,useCSSOMInjection:!Jv},Dr=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=oe(oe({},xx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vc&&yf&&(yf=!1,function(o){for(var s=document.querySelectorAll(fx),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(an)!==lg&&(mx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),kc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(g){return ms.get(g)}(d);if(f===void 0)return"continue";var y=o.names.get(f),v=s.getGroup(d);if(y===void 0||v.length===0)return"continue";var x="".concat(an,".g").concat(d,'[id="').concat(f,'"]'),b="";y!==void 0&&y.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(v).concat(x,'{content:"').concat(b,'"}').concat(yc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return mo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(oe(oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vx(i):r?new gx(i):new yx(i)}(this.options),new cx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(mo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wx=/&/g,Sx=/^\s*\/\/.*$/gm;function yg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yg(n.children,t)),n})}function vg(e){var t,n,r,i=e===void 0?Ar:e,o=i.options,s=o===void 0?Ar:o,a=i.plugins,l=a===void 0?Hs:a,u=function(f,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Fs&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(wx,n).replace(r,u))}),s.prefix&&c.push(Qv),c.push(Gv);var d=function(f,y,v,x){y===void 0&&(y=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(Sx,""),g=Wv(v||y?"".concat(v," ").concat(y," { ").concat(b," }"):b);s.namespace&&(g=yg(g,s.namespace));var h=[];return ps(g,Kv(c.concat(Yv(function(m){return h.push(m)})))),h};return d.hash=l.length?l.reduce(function(f,y){return y.name||Qe(15),ar(f,y.name)},cg).toString():"",d}var xg=new Dr,nu=vg(),Ks=p.createContext({shouldForwardProp:void 0,styleSheet:xg,stylis:nu}),kx=Ks.Consumer,Ex=p.createContext(void 0);function gs(){return D.useContext(Ks)}function wg(e){var t=D.useState(e.stylisPlugins),n=t[0],r=t[1],i=gs().styleSheet,o=D.useMemo(function(){var l=i;return e.sheet?l=e.sheet:e.target&&(l=l.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[e.disableCSSOMInjection,e.sheet,e.target,i]),s=D.useMemo(function(){return vg({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);D.useEffect(function(){Iv(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var a=D.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}},[e.shouldForwardProp,o,s]);return p.createElement(Ks.Provider,{value:a},p.createElement(Ex.Provider,{value:s},e.children))}var Sg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=nu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,kc(this,function(){throw Qe(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nu),this.name+t.hash},e}(),Cx=function(e){return e>="A"&&e<="Z"};function vf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Cx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var kg=function(e){return e==null||e===!1||e===""},Eg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!kg(o)&&(Array.isArray(o)&&o.isCss||jn(o)?r.push("".concat(vf(i),":"),o,";"):Ri(o)?r.push.apply(r,Pr(Pr(["".concat(i," {")],Eg(o),!1),["}"],!1)):r.push("".concat(vf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Xv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function tn(e,t,n,r){if(kg(e))return[];if(Gs(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return tn(i,t,n,r)}var o;return e instanceof Sg?n?(e.inject(n,r),[e.getName(r)]):[e]:Ri(e)?Eg(e):Array.isArray(e)?Array.prototype.concat.apply(Hs,e.map(function(s){return tn(s,t,n,r)})):[e.toString()]}function Cg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!Gs(n))return!1}return!0}var Px=dg(Nn),Tx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cg(t),this.componentId=n,this.baseHash=ar(Px,n),this.baseStyle=r,Dr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=bn(i,this.staticRulesId);else{var o=Mi(tn(this.rules,t,n,r)),s=ql(ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=bn(i,s),this.staticRulesId=s}else{for(var l=ar(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Mi(tn(d,t,n,r));l=ar(l,f+c),u+=f}}if(u){var y=ql(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=bn(i,y)}}return i},e}(),ln=p.createContext(void 0),bx=ln.Consumer;function Ax(){var e=D.useContext(ln);if(!e)throw Qe(18);return e}function Pg(e){var t=p.useContext(ln),n=D.useMemo(function(){return function(r,i){if(!r)throw Qe(14);if(jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Qe(8);return i?oe(oe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(ln.Provider,{value:n},e.children):null}var Ma={};function Dx(e,t,n){var r=Gs(e),i=e,o=!Ia(e),s=t.attrs,a=s===void 0?Hs:s,l=t.componentId,u=l===void 0?function(w,k){var C=typeof w!="string"?"sc":ff(w);Ma[C]=(Ma[C]||0)+1;var E="".concat(C,"-").concat(wc(Nn+C+Ma[C]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Ia(w)?"styled.".concat(w):"Styled(".concat(fg(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(ff(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;v=function(w,k){return x(w,k)&&b(w,k)}}else v=x}var g=new Tx(n,f,r?i.componentStyle:void 0);function h(w,k){return function(C,E,T){var O=C.attrs,M=C.componentStyle,ne=C.defaultProps,ct=C.foldedComponentIds,vt=C.styledComponentId,gn=C.target,se=p.useContext(ln),Ce=gs(),et=C.shouldForwardProp||Ce.shouldForwardProp,A=xc(E,se,ne)||Ar,I=function(_t,$e,xt){for(var Or,vn=oe(oe({},$e),{className:void 0,theme:xt}),na=0;na<_t.length;na+=1){var Qi=jn(Or=_t[na])?Or(vn):Or;for(var Ot in Qi)vn[Ot]=Ot==="className"?bn(vn[Ot],Qi[Ot]):Ot==="style"?oe(oe({},vn[Ot]),Qi[Ot]):Qi[Ot]}return $e.className&&(vn.className=bn(vn.className,$e.className)),vn}(O,E,A),$=I.as||gn,B={};for(var U in I)I[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&I.theme===A||(U==="forwardedAs"?B.as=I.forwardedAs:et&&!et(U,$)||(B[U]=I[U]));var yn=function(_t,$e){var xt=gs(),Or=_t.generateAndInjectStyles($e,xt.styleSheet,xt.stylis);return Or}(M,I),tt=bn(ct,vt);return yn&&(tt+=" "+yn),I.className&&(tt+=" "+I.className),B[Ia($)&&!ug.has($)?"class":"className"]=tt,B.ref=T,D.createElement($,B)}(m,w,k)}h.displayName=d;var m=p.forwardRef(h);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?bn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var T=0,O=C;T<O.length;T++)eu(k,O[T],!0);return k}({},i.defaultProps,w):w}}),kc(m,function(){return".".concat(m.styledComponentId)}),o&&Sc(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function xf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wf=function(e){return Object.assign(e,{isCss:!0})};function Ys(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||Ri(e))return wf(tn(xf(Hs,Pr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?tn(r):wf(tn(xf(r,t)))}function ru(e,t,n){if(n===void 0&&(n=Ar),!t)throw Qe(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ys.apply(void 0,Pr([i],o,!1)))};return r.attrs=function(i){return ru(e,t,oe(oe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ru(e,t,oe(oe({},n),i))},r}var Tg=function(e){return ru(Dx,e)},S=Tg;ug.forEach(function(e){S[e]=Tg(e)});var Lx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cg(t),Dr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Mi(tn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Dr.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function bg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ys.apply(void 0,Pr([e],t,!1)),i="sc-global-".concat(wc(JSON.stringify(r))),o=new Lx(r,i),s=function(l){var u=gs(),c=p.useContext(ln),d=p.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),p.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,Zv,c,f);else{var y=oe(oe({},u),{theme:xc(u,d,s.defaultProps)});o.renderStyles(l,y,c,f)}}return p.memo(s)}function Ix(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Mi(Ys.apply(void 0,Pr([e],t,!1))),i=wc(r);return new Sg(i,r)}function Mx(e){var t=p.forwardRef(function(n,r){var i=xc(n,p.useContext(ln),e.defaultProps);return p.createElement(e,oe({},n,{theme:i,ref:r}))});return t.displayName="WithTheme(".concat(fg(e),")"),Sc(t,e)}var Rx=function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString(),r=tu(),i=Mi([r&&'nonce="'.concat(r,'"'),"".concat(an,'="true"'),"".concat(hs,'="').concat(Nn,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Qe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Qe(2);var r=((n={})[an]="",n[hs]=Nn,n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),i=tu();return i&&(r.nonce=i),[p.createElement("style",oe({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Dr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Qe(2);return p.createElement(wg,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Qe(3)},e}(),$x={StyleSheet:Dr,mainSheet:xg};const _x=Object.freeze(Object.defineProperty({__proto__:null,ServerStyleSheet:Rx,StyleSheetConsumer:kx,StyleSheetContext:Ks,StyleSheetManager:wg,ThemeConsumer:bx,ThemeContext:ln,ThemeProvider:Pg,__PRIVATE__:$x,createGlobalStyle:bg,css:Ys,default:S,isStyledComponent:Gs,keyframes:Ix,styled:S,useTheme:Ax,version:Nn,withTheme:Mx},Symbol.toStringTag,{value:"Module"}));var Ag={exports:{}},Qs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=D,zx=Symbol.for("react.element"),Vx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,jx=Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fx={key:!0,ref:!0,__self:!0,__source:!0};function Dg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Nx.call(t,r)&&!Fx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zx,type:e,key:o,ref:s,props:i,_owner:jx.current}}Qs.Fragment=Vx;Qs.jsx=Dg;Qs.jsxs=Dg;Ag.exports=Qs;var iu=Ag.exports;const Lg=D.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Xs=D.createContext({}),Ec=D.createContext(null),Cc=typeof document<"u",Bx=Cc?D.useLayoutEffect:D.useEffect,Ig=D.createContext({strict:!1}),Pc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ux="framerAppearId",Mg="data-"+Pc(Ux),Wx={skipAnimations:!1,useManualTiming:!1};class Sf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Hx(e){let t=new Sf,n=new Sf,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];s.has(c)&&(a.schedule(c),e()),c(l)}i=!1,o&&(o=!1,a.process(l))}};return a}const go=["read","resolveKeyframes","update","preRender","render","postRender"],Gx=40;function Rg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=go.reduce((d,f)=>(d[f]=Hx(()=>n=!0),d),{}),s=d=>{o[d].process(i)},a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,Gx),1),i.timestamp=d,i.isProcessing=!0,go.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:go.reduce((d,f)=>{const y=o[f];return d[f]=(v,x=!1,b=!1)=>(n||l(),y.schedule(v,x,b)),d},{}),cancel:d=>go.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:Tc,cancel:u4}=Rg(queueMicrotask,!1);function Kx(e,t,n,r){const{visualElement:i}=D.useContext(Xs),o=D.useContext(Ig),s=D.useContext(Ec),a=D.useContext(Lg).reducedMotion,l=D.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;D.useInsertionEffect(()=>{u&&u.update(n,s)});const c=D.useRef(!!(n[Mg]&&!window.HandoffComplete));return Bx(()=>{u&&(Tc.postRender(u.render),c.current&&u.animationState&&u.animationState.animateChanges())}),D.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function lr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Yx(e,t,n){return D.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):lr(n)&&(n.current=r))},[t])}function $i(e){return typeof e=="string"||Array.isArray(e)}function Js(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const bc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ac=["initial",...bc];function Zs(e){return Js(e.animate)||Ac.some(t=>$i(e[t]))}function $g(e){return!!(Zs(e)||e.variants)}function Qx(e,t){if(Zs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||$i(n)?n:void 0,animate:$i(r)?r:void 0}}return e.inherit!==!1?t:{}}function Xx(e){const{initial:t,animate:n}=Qx(e,D.useContext(Xs));return D.useMemo(()=>({initial:t,animate:n}),[kf(t),kf(n)])}function kf(e){return Array.isArray(e)?e.join(" "):e}const Ef={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},_i={};for(const e in Ef)_i[e]={isEnabled:t=>Ef[e].some(n=>!!t[n])};function Jx(e){for(const t in e)_i[t]={..._i[t],...e[t]}}const _g=D.createContext({}),Og=D.createContext({}),Zx=Symbol.for("motionComponentSymbol");function qx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Jx(e);function o(a,l){let u;const c={...D.useContext(Lg),...a,layoutId:ew(a)},{isStatic:d}=c,f=Xx(a),y=r(a,d);if(!d&&Cc){f.visualElement=Kx(i,y,c,t);const v=D.useContext(Og),x=D.useContext(Ig).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,x,e,v))}return iu.jsxs(Xs.Provider,{value:f,children:[u&&f.visualElement?iu.jsx(u,{visualElement:f.visualElement,...c}):null,n(i,a,Yx(y,f.visualElement,l),y,d,f.visualElement)]})}const s=D.forwardRef(o);return s[Zx]=i,s}function ew({layoutId:e}){const t=D.useContext(_g).id;return t&&e!==void 0?t+"-"+e:e}function tw(e){function t(r,i={}){return qx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const nw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dc(e){return typeof e!="string"||e.includes("-")?!1:!!(nw.indexOf(e)>-1||/[A-Z]/u.test(e))}const ys={};function rw(e){Object.assign(ys,e)}const Ui=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Un=new Set(Ui);function zg(e,{layout:t,layoutId:n}){return Un.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ys[e]||e==="opacity")}const Se=e=>!!(e&&e.getVelocity),iw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ow=Ui.length;function sw(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<ow;s++){const a=Ui[s];if(e[a]!==void 0){const l=iw[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Vg=e=>t=>typeof t=="string"&&t.startsWith(e),Ng=Vg("--"),aw=Vg("var(--"),Lc=e=>aw(e)?lw.test(e.split("/*")[0].trim()):!1,lw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,uw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,un=(e,t,n)=>n>t?t:n<e?e:n,_r={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ci={..._r,transform:e=>un(0,1,e)},yo={..._r,default:1},di=e=>Math.round(e*1e5)/1e5,Ic=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,cw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,dw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Wi(e){return typeof e=="string"}const Hi=e=>({test:t=>Wi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nt=Hi("deg"),yt=Hi("%"),R=Hi("px"),fw=Hi("vh"),pw=Hi("vw"),Cf={...yt,parse:e=>yt.parse(e)/100,transform:e=>yt.transform(e*100)},Pf={..._r,transform:Math.round},jg={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,size:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,rotate:Nt,rotateX:Nt,rotateY:Nt,rotateZ:Nt,scale:yo,scaleX:yo,scaleY:yo,scaleZ:yo,skew:Nt,skewX:Nt,skewY:Nt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:ci,originX:Cf,originY:Cf,originZ:R,zIndex:Pf,backgroundPositionX:R,backgroundPositionY:R,fillOpacity:ci,strokeOpacity:ci,numOctaves:Pf};function Mc(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(Ng(d)){o[d]=f;continue}const y=jg[d],v=uw(f,y);if(Un.has(d)){if(l=!0,s[d]=v,!c)continue;f!==(y.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=sw(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:y=0}=a;i.transformOrigin=`${d} ${f} ${y}`}}const Rc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Fg(e,t,n){for(const r in t)!Se(t[r])&&!zg(r,n)&&(e[r]=t[r])}function hw({transformTemplate:e},t,n){return D.useMemo(()=>{const r=Rc();return Mc(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function mw(e,t,n){const r=e.style||{},i={};return Fg(i,r,e),Object.assign(i,hw(e,t,n)),i}function gw(e,t,n){const r={},i=mw(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const yw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function vs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yw.has(e)}let Bg=e=>!vs(e);function vw(e){e&&(Bg=t=>t.startsWith("on")?!vs(t):e(t))}try{vw(require("@emotion/is-prop-valid").default)}catch{}function xw(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Bg(i)||n===!0&&vs(i)||!t&&!vs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Tf(e,t,n){return typeof e=="string"?e:R.transform(t+n*e)}function ww(e,t,n){const r=Tf(t,e.x,e.width),i=Tf(n,e.y,e.height);return`${r} ${i}`}const Sw={offset:"stroke-dashoffset",array:"stroke-dasharray"},kw={offset:"strokeDashoffset",array:"strokeDasharray"};function Ew(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Sw:kw;e[o.offset]=R.transform(-r);const s=R.transform(t),a=R.transform(n);e[o.array]=`${s} ${a}`}function $c(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(Mc(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v,dimensions:x}=e;y.transform&&(x&&(v.transform=y.transform),delete y.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=ww(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&Ew(y,s,a,l,!1)}const Ug=()=>({...Rc(),attrs:{}}),_c=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Cw(e,t,n,r){const i=D.useMemo(()=>{const o=Ug();return $c(o,t,{enableHardwareAcceleration:!1},_c(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Fg(o,e.style,e),i.style={...o,...i.style}}return i}function Pw(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Dc(n)?Cw:gw)(r,o,s,n),u=xw(r,typeof n=="string",e),c=n!==D.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=D.useMemo(()=>Se(d)?d.get():d,[d]);return D.createElement(n,{...c,children:f})}}function Wg(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Hg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gg(e,t,n,r){Wg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Hg.has(i)?i:Pc(i),t.attrs[i])}function Oc(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Se(i[s])||t.style&&Se(t.style[s])||zg(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function Kg(e,t,n){const r=Oc(e,t,n);for(const i in e)if(Se(e[i])||Se(t[i])){const o=Ui.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function zc(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Tw(e){const t=D.useRef(null);return t.current===null&&(t.current=e()),t.current}const ou=e=>Array.isArray(e),bw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Aw=e=>ou(e)?e[e.length-1]||0:e;function zo(e){const t=Se(e)?e.get():e;return bw(t)?t.toValue():t}function Dw({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:Lw(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Yg=e=>(t,n)=>{const r=D.useContext(Xs),i=D.useContext(Ec),o=()=>Dw(e,t,r,i);return n?o():Tw(o)};function Lw(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=zo(o[f]);let{initial:s,animate:a}=e;const l=Zs(e),u=$g(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!Js(d)&&(Array.isArray(d)?d:[d]).forEach(y=>{const v=zc(e,y);if(!v)return;const{transitionEnd:x,transition:b,...g}=v;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=c?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in x)i[h]=x[h]}),i}const ke=e=>e,{schedule:me,cancel:cn,state:pe,steps:Ra}=Rg(typeof requestAnimationFrame<"u"?requestAnimationFrame:ke,!0),Iw={useVisualState:Yg({scrapeMotionValuesFromProps:Kg,createRenderState:Ug,onMount:(e,t,{renderState:n,latestValues:r})=>{me.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),me.render(()=>{$c(n,r,{enableHardwareAcceleration:!1},_c(t.tagName),e.transformTemplate),Gg(t,n)})}})},Mw={useVisualState:Yg({scrapeMotionValuesFromProps:Oc,createRenderState:Rc})};function Rw(e,{forwardMotionProps:t=!1},n,r){return{...Dc(e)?Iw:Mw,preloadedFeatures:n,useRender:Pw(t),createVisualElement:r,Component:e}}function Pt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Qg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function qs(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const $w=e=>t=>Qg(t)&&e(t,qs(t));function bt(e,t,n,r){return Pt(e,t,$w(n),r)}const _w=(e,t)=>n=>t(e(n)),At=(...e)=>e.reduce(_w);function Xg(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const bf=Xg("dragHorizontal"),Af=Xg("dragVertical");function Jg(e){let t=!1;if(e==="y")t=Af();else if(e==="x")t=bf();else{const n=bf(),r=Af();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Zg(){const e=Jg(!0);return e?(e(),!1):!0}class mn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Df(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||Zg())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&l(o,s)};return bt(e.current,n,i,{passive:!e.getProps()[r]})}class Ow extends mn{mount(){this.unmount=At(Df(this.node,!0),Df(this.node,!1))}unmount(){}}class zw extends mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=At(Pt(this.node.current,"focus",()=>this.onFocus()),Pt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const qg=(e,t)=>t?e===t?!0:qg(e,t.parentElement):!1;function $a(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,qs(n))}class Vw extends mn{constructor(){super(...arguments),this.removeStartListeners=ke,this.removeEndListeners=ke,this.removeAccessibleListeners=ke,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=bt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();!d&&!qg(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)},{passive:!(r.onTap||r.onPointerUp)}),s=bt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=At(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||$a("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&c(l,u)})};this.removeEndListeners(),this.removeEndListeners=Pt(this.node.current,"keyup",s),$a("down",(a,l)=>{this.startPress(a,l)})},n=Pt(this.node.current,"keydown",t),r=()=>{this.isPressing&&$a("cancel",(o,s)=>this.cancelPress(o,s))},i=Pt(this.node.current,"blur",r);this.removeAccessibleListeners=At(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&r(t,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Zg()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&r(t,n)}mount(){const t=this.node.getProps(),n=bt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Pt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=At(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const su=new WeakMap,_a=new WeakMap,Nw=e=>{const t=su.get(e.target);t&&t(e)},jw=e=>{e.forEach(Nw)};function Fw({root:e,...t}){const n=e||document;_a.has(n)||_a.set(n,{});const r=_a.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(jw,{root:e,...t})),r[i]}function Bw(e,t,n){const r=Fw(t);return su.set(e,n),r.observe(e),()=>{su.delete(e),r.unobserve(e)}}const Uw={some:0,all:1};class Ww extends mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Uw[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return Bw(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Hw(t,n))&&this.startObserver()}unmount(){}}function Hw({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Gw={inView:{Feature:Ww},tap:{Feature:Vw},focus:{Feature:zw},hover:{Feature:Ow}};function e0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Kw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Yw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ea(e,t,n){const r=e.getProps();return zc(r,t,n!==void 0?n:r.custom,Kw(e),Yw(e))}const nn=e=>e*1e3,Dt=e=>e/1e3,Qw={type:"spring",stiffness:500,damping:25,restSpeed:10},Xw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Jw={type:"keyframes",duration:.8},Zw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qw=(e,{keyframes:t})=>t.length>2?Jw:Un.has(e)?e.startsWith("scale")?Xw(t[1]):Qw:Zw;function e2({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Vc(e,t){return e[t]||e.default||e}const t2=e=>e!==null;function ta(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(t2),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}let Vo;function n2(){Vo=void 0}const rn={now:()=>(Vo===void 0&&rn.set(pe.isProcessing||Wx.useManualTiming?pe.timestamp:performance.now()),Vo),set:e=>{Vo=e,queueMicrotask(n2)}},t0=e=>/^0[^.\s]+$/u.test(e);function r2(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||t0(e):!0}let au=ke;const n0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),i2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function o2(e){const t=i2.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function r0(e,t,n=1){const[r,i]=o2(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return n0(s)?parseFloat(s):s}return Lc(i)?r0(i,t,n+1):i}const s2=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Lf=e=>e===_r||e===R,If=(e,t)=>parseFloat(e.split(", ")[t]),Mf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return If(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?If(o[1],e):0}},a2=new Set(["x","y","z"]),l2=Ui.filter(e=>!a2.has(e));function u2(e){const t=[];return l2.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Lr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Mf(4,13),y:Mf(5,14)};Lr.translateX=Lr.x;Lr.translateY=Lr.y;const i0=e=>t=>t.test(e),c2={test:e=>e==="auto",parse:e=>e},o0=[_r,R,yt,Nt,pw,fw,c2],Rf=e=>o0.find(i0(e)),Mn=new Set;let lu=!1,uu=!1;function s0(){if(uu){const e=Array.from(Mn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=u2(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}uu=!1,lu=!1,Mn.forEach(e=>e.complete()),Mn.clear()}function a0(){Mn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(uu=!0)})}function d2(){a0(),s0()}class Nc{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Mn.add(this),lu||(lu=!0,me.read(a0),me.resolveKeyframes(s0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Mn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Mn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const jc=(e,t)=>n=>!!(Wi(n)&&dw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),l0=(e,t,n)=>r=>{if(!Wi(r))return r;const[i,o,s,a]=r.match(Ic);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},f2=e=>un(0,255,e),Oa={..._r,transform:e=>Math.round(f2(e))},An={test:jc("rgb","red"),parse:l0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Oa.transform(e)+", "+Oa.transform(t)+", "+Oa.transform(n)+", "+di(ci.transform(r))+")"};function p2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const cu={test:jc("#"),parse:p2,transform:An.transform},ur={test:jc("hsl","hue"),parse:l0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+yt.transform(di(t))+", "+yt.transform(di(n))+", "+di(ci.transform(r))+")"},xe={test:e=>An.test(e)||cu.test(e)||ur.test(e),parse:e=>An.test(e)?An.parse(e):ur.test(e)?ur.parse(e):cu.parse(e),transform:e=>Wi(e)?e:e.hasOwnProperty("red")?An.transform(e):ur.transform(e)};function h2(e){var t,n;return isNaN(e)&&Wi(e)&&(((t=e.match(Ic))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(cw))===null||n===void 0?void 0:n.length)||0)>0}const u0="number",c0="color",m2="var",g2="var(",$f="${}",y2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(y2,l=>(xe.test(l)?(r.color.push(o),i.push(c0),n.push(xe.parse(l))):l.startsWith(g2)?(r.var.push(o),i.push(m2),n.push(l)):(r.number.push(o),i.push(u0),n.push(parseFloat(l))),++o,$f)).split($f);return{values:n,split:a,indexes:r,types:i}}function d0(e){return xs(e).values}function f0(e){const{split:t,types:n}=xs(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===u0?o+=di(i[s]):a===c0?o+=xe.transform(i[s]):o+=i[s]}return o}}const v2=e=>typeof e=="number"?0:e;function x2(e){const t=d0(e);return f0(e)(t.map(v2))}const dn={test:h2,parse:d0,createTransformer:f0,getAnimatableNone:x2},w2=new Set(["brightness","contrast","saturate","opacity"]);function S2(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ic)||[];if(!r)return e;const i=n.replace(r,"");let o=w2.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const k2=/\b([a-z-]*)\(.*?\)/gu,du={...dn,getAnimatableNone:e=>{const t=e.match(k2);return t?t.map(S2).join(" "):e}},E2={...jg,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:du,WebkitFilter:du},Fc=e=>E2[e];function p0(e,t){let n=Fc(e);return n!==du&&(n=dn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function C2(e,t,n){let r=0,i;for(;r<e.length&&!i;)typeof e[r]=="string"&&e[r]!=="none"&&e[r]!=="0"&&(i=e[r]),r++;if(i&&n)for(const o of t)e[o]=p0(n,i)}class h0 extends Nc{constructor(t,n,r,i){super(t,n,r,i,i==null?void 0:i.owner,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){const u=t[l];if(typeof u=="string"&&Lc(u)){const c=r0(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(!s2.has(r)||t.length!==2)return this.resolveNoneKeyframes();const[i,o]=t,s=Rf(i),a=Rf(o);if(s!==a)if(Lf(s)&&Lf(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)r2(t[i])&&r.push(i);r.length&&C2(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Lr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Lr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function P2(e){let t;return()=>(t===void 0&&(t=e()),t)}const _f=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(dn.test(e)||e==="0")&&!e.startsWith("url("));function T2(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function b2(e,t,n,r){const i=e[0];if(i===null)return!1;const o=e[e.length-1],s=_f(i,t),a=_f(o,t);return!s||!a?!1:T2(e)||n==="spring"&&r}class m0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&d2(),this._resolved}onKeyframesResolved(t,n){this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!b2(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(ta(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function g0(e,t){return t?e*(1e3/t):0}const A2=5;function y0(e,t,n){const r=Math.max(t-A2,0);return g0(n-e(r),t-r)}const za=.001,D2=.01,L2=10,I2=.05,M2=1;function R2({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=un(I2,M2,s),e=un(D2,L2,Dt(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,y=fu(u,s),v=Math.exp(-d);return za-f/y*v},o=u=>{const d=u*s*e,f=d*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=fu(Math.pow(u,2),s);return(-i(u)+za>0?-1:1)*((f-y)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-za+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=_2(i,o,a);if(e=nn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const $2=12;function _2(e,t,n){let r=n;for(let i=1;i<$2;i++)r=r-e(r)/t(r);return r}function fu(e,t){return e*Math.sqrt(1-t*t)}const O2=["duration","bounce"],z2=["stiffness","damping","mass"];function Of(e,t){return t.some(n=>e[n]!==void 0)}function V2(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Of(e,z2)&&Of(e,O2)){const n=R2(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function v0({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=V2({...r,velocity:-Dt(r.velocity||0)}),y=d||0,v=l/(2*Math.sqrt(a*u)),x=o-i,b=Dt(Math.sqrt(a/u)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const m=fu(b,v);h=w=>{const k=Math.exp(-v*b*w);return o-k*((y+v*b*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(v===1)h=m=>o-Math.exp(-b*m)*(x+(y+b*x)*m);else{const m=b*Math.sqrt(v*v-1);h=w=>{const k=Math.exp(-v*b*w),C=Math.min(m*w,300);return o-k*((y+v*b*x)*Math.sinh(C)+m*x*Math.cosh(C))/m}}return{calculatedDuration:f&&c||null,next:m=>{const w=h(m);if(f)s.done=m>=c;else{let k=y;m!==0&&(v<1?k=y0(h,m,w):k=0);const C=Math.abs(k)<=n,E=Math.abs(o-w)<=t;s.done=C&&E}return s.value=s.done?o:w,s}}}function zf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},y=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const b=d+x,g=s===void 0?b:s(b);g!==b&&(x=g-d);const h=T=>-x*Math.exp(-T/r),m=T=>g+h(T),w=T=>{const O=h(T),M=m(T);f.done=Math.abs(O)<=u,f.value=f.done?g:M};let k,C;const E=T=>{y(f.value)&&(k=T,C=v0({keyframes:[f.value,v(f.value)],velocity:y0(m,T,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return E(0),{calculatedDuration:null,next:T=>{let O=!1;return!C&&k===void 0&&(O=!0,w(T),E(T)),k!==void 0&&T>=k?C.next(T-k):(!O&&w(T),f)}}}const x0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,N2=1e-7,j2=12;function F2(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=x0(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>N2&&++a<j2);return s}function Gi(e,t,n,r){if(e===t&&n===r)return ke;const i=o=>F2(o,0,1,e,n);return o=>o===0||o===1?o:x0(i(o),t,r)}const B2=Gi(.42,0,1,1),U2=Gi(0,0,.58,1),w0=Gi(.42,0,.58,1),W2=e=>Array.isArray(e)&&typeof e[0]!="number",S0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,k0=e=>t=>1-e(1-t),Bc=e=>1-Math.sin(Math.acos(e)),E0=k0(Bc),H2=S0(Bc),C0=Gi(.33,1.53,.69,.99),Uc=k0(C0),G2=S0(Uc),K2=e=>(e*=2)<1?.5*Uc(e):.5*(2-Math.pow(2,-10*(e-1))),Vf={linear:ke,easeIn:B2,easeInOut:w0,easeOut:U2,circIn:Bc,circInOut:H2,circOut:E0,backIn:Uc,backInOut:G2,backOut:C0,anticipate:K2},Nf=e=>{if(Array.isArray(e)){au(e.length===4);const[t,n,r,i]=e;return Gi(t,n,r,i)}else if(typeof e=="string")return au(Vf[e]!==void 0),Vf[e];return e},Oi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},X=(e,t,n)=>e+(t-e)*n;function Va(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Y2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Va(l,a,e+1/3),o=Va(l,a,e),s=Va(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Na=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Q2=[cu,An,ur],X2=e=>Q2.find(t=>t.test(e));function jf(e){const t=X2(e);let n=t.parse(e);return t===ur&&(n=Y2(n)),n}const Ff=(e,t)=>{const n=jf(e),r=jf(t),i={...n};return o=>(i.red=Na(n.red,r.red,o),i.green=Na(n.green,r.green,o),i.blue=Na(n.blue,r.blue,o),i.alpha=X(n.alpha,r.alpha,o),An.transform(i))};function pu(e,t){return n=>n>0?t:e}function J2(e,t){return n=>X(e,t,n)}function Wc(e){return typeof e=="number"?J2:typeof e=="string"?Lc(e)?pu:xe.test(e)?Ff:eS:Array.isArray(e)?P0:typeof e=="object"?xe.test(e)?Ff:Z2:pu}function P0(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Wc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function Z2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Wc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function q2(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const eS=(e,t)=>{const n=dn.createTransformer(t),r=xs(e),i=xs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?At(P0(q2(r,i),i.values),n):pu(e,t)};function T0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?X(e,t,n):Wc(e)(e,t)}function tS(e,t,n){const r=[],i=n||T0,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ke:t;a=At(l,a)}r.push(a)}return r}function nS(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(au(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=tS(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Oi(e[c],e[c+1],u);return s[c](d)};return n?u=>l(un(e[0],e[o-1],u)):l}function rS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Oi(0,t,r);e.push(X(n,1,i))}}function iS(e){const t=[0];return rS(t,e.length-1),t}function oS(e,t){return e.map(n=>n*t)}function sS(e,t){return e.map(()=>t||w0).splice(0,e.length-1)}function ws({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=W2(r)?r.map(Nf):Nf(r),o={done:!1,value:t[0]},s=oS(n&&n.length===t.length?n:iS(t),e),a=nS(s,t,{ease:Array.isArray(i)?i:sS(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Bf=2e4;function aS(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Bf;)t+=n,r=e.next(t);return t>=Bf?1/0:t}const lS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>me.update(t,!0),stop:()=>cn(t),now:()=>pe.isProcessing?pe.timestamp:rn.now()}},uS={decay:zf,inertia:zf,tween:ws,keyframes:ws,spring:v0},cS=e=>e/100;class Hc extends m0{constructor({KeyframeResolver:t=Nc,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:r,motionValue:i,keyframes:o}=this.options,s=(a,l)=>this.onKeyframesResolved(a,l);r&&i&&i.owner?this.resolver=i.owner.resolveKeyframes(o,s,r,i):this.resolver=new t(o,s,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=uS[n]||ws;let l,u;a!==ws&&typeof t[0]!="number"&&(l=At(cS,T0(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=aS(c));const{calculatedDuration:d}=c,f=d+i,y=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:y,repeatType:v,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let m=this.currentTime,w=o;if(y){const T=Math.min(this.currentTime,c)/d;let O=Math.floor(T),M=T%1;!M&&T>=1&&(M=1),M===1&&O--,O=Math.min(O,y+1),!!(O%2)&&(v==="reverse"?(M=1-M,x&&(M-=x/d)):v==="mirror"&&(w=s)),m=un(0,1,M)*d}const k=h?{done:!1,value:l[0]}:w.next(m);a&&(k.value=a(k.value));let{done:C}=k;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return E&&i!==void 0&&(k.value=ta(l,this.options,i)),b&&b(k.value),E&&this.finish(),k}get duration(){const{resolved:t}=this;return t?Dt(t.calculatedDuration):0}get time(){return Dt(this.currentTime)}set time(t){t=nn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Dt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=lS,onPlay:n}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=r),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const b0=e=>Array.isArray(e)&&typeof e[0]=="number";function A0(e){return!!(!e||typeof e=="string"&&e in Gc||b0(e)||Array.isArray(e)&&e.every(A0))}const Jr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Gc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jr([0,.65,.55,1]),circOut:Jr([.55,0,1,.45]),backIn:Jr([.31,.01,.66,-.59]),backOut:Jr([.33,1.53,.69,.99])};function dS(e){return D0(e)||Gc.easeOut}function D0(e){if(e)return b0(e)?Jr(e):Array.isArray(e)?e.map(dS):Gc[e]}function fS(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=D0(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const pS=P2(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hS=new Set(["opacity","clipPath","filter","transform"]),Ss=10,mS=2e4;function gS(e){return e.type==="spring"||e.name==="backgroundColor"||!A0(e.ease)}function yS(e,t){const n=new Hc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<mS;)r=n.sample(o),i.push(r.value),o+=Ss;return{times:void 0,keyframes:i,duration:o-Ss,ease:"linear"}}class Uf extends m0{constructor(t){super(t);const{name:n,motionValue:r,keyframes:i}=this.options;this.resolver=new h0(i,(o,s)=>this.onKeyframesResolved(o,s),n,r),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(gS(this.options)){const{onComplete:d,onUpdate:f,motionValue:y,...v}=this.options,x=yS(t,v);t=x.keyframes,t.length===1&&(t[1]=t[0]),i=x.duration,o=x.times,s=x.ease,a="keyframes"}const c=fS(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:s});return c.startTime=rn.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;l.set(ta(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Dt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Dt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=nn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ke;const{animation:r}=n;r.timeline=t,r.onfinish=null}return ke}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:u,onComplete:c,...d}=this.options,f=new Hc({...d,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),y=nn(this.time);l.setWithVelocity(f.sample(y-Ss).value,f.sample(y).value,Ss)}this.cancel()}}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return pS()&&r&&hS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const Kc=(e,t,n,r={},i,o)=>s=>{const a=Vc(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-nn(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};e2(a)||(c={...c,...qw(e,c)}),c.duration&&(c.duration=nn(c.duration)),c.repeatDelay&&(c.repeatDelay=nn(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const f=ta(c.keyframes,a);if(f!==void 0){me.update(()=>{c.onUpdate(f),c.onComplete()});return}}return!o&&Uf.supports(c)?new Uf(c):new Hc(c)};function ks(e){return!!(Se(e)&&e.add)}function Yc(e,t){e.indexOf(t)===-1&&e.push(t)}function Qc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xc{constructor(){this.subscriptions=[]}add(t){return Yc(this.subscriptions,t),()=>Qc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wf=30,vS=e=>!isNaN(parseFloat(e));class xS{constructor(t,n={}){this.version="11.1.7",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=rn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=vS(this.current),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=rn.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Xc);const r=this.events[t].add(n);return t==="change"?()=>{r(),me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=rn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Wf)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wf);return g0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zi(e,t){return new xS(e,t)}function wS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,zi(n))}function SS(e,t){const n=ea(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Aw(o[s]);wS(e,s,a)}}function kS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function L0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;const u=e.getValue("willChange");r&&(s=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const y=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),v=l[f];if(v===void 0||d&&kS(d,f))continue;const x={delay:n,elapsed:0,...Vc(s||{},f)};let b=!1;if(window.HandoffAppearAnimations){const m=e.getProps()[Mg];if(m){const w=window.HandoffAppearAnimations(m,f);w!==null&&(x.elapsed=w,b=!0)}}y.start(Kc(f,y,v,e.shouldReduceMotion&&Un.has(f)?{type:!1}:x,e,b));const g=y.animation;g&&(ks(u)&&(u.add(f),g.then(()=>u.remove(f))),c.push(g))}return a&&Promise.all(c).then(()=>{me.update(()=>{a&&SS(e,a)})}),c}function hu(e,t,n={}){var r;const i=ea(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(L0(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return ES(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function ES(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(CS).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(hu(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function CS(e,t){return e.sortNodePosition(t)}function PS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>hu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=hu(e,t,n);else{const i=typeof t=="function"?ea(e,t,n.custom):t;r=Promise.all(L0(e,i,n))}return r.then(()=>{me.postRender(()=>{e.notify("AnimationComplete",t)})})}const TS=[...bc].reverse(),bS=bc.length;function AS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>PS(e,n,r)))}function DS(e){let t=AS(e);const n=IS();let r=!0;const i=l=>(u,c)=>{var d;const f=ea(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;u={...u,...x,...v}}return u};function o(l){t=l(e)}function s(l){const u=e.getProps(),c=e.getVariantContext(!0)||{},d=[],f=new Set;let y={},v=1/0;for(let b=0;b<bS;b++){const g=TS[b],h=n[g],m=u[g]!==void 0?u[g]:c[g],w=$i(m),k=g===l?h.isActive:null;k===!1&&(v=b);let C=m===c[g]&&m!==u[g]&&w;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...y},!h.isActive&&k===null||!m&&!h.prevProp||Js(m)||typeof m=="boolean")continue;let T=LS(h.prevProp,m)||g===l&&h.isActive&&!C&&w||b>v&&w,O=!1;const M=Array.isArray(m)?m:[m];let ne=M.reduce(i(g),{});k===!1&&(ne={});const{prevResolvedValues:ct={}}=h,vt={...ct,...ne},gn=se=>{T=!0,f.has(se)&&(O=!0,f.delete(se)),h.needsAnimating[se]=!0;const Ce=e.getValue(se);Ce&&(Ce.liveStyle=!1)};for(const se in vt){const Ce=ne[se],et=ct[se];if(y.hasOwnProperty(se))continue;let A=!1;ou(Ce)&&ou(et)?A=!e0(Ce,et):A=Ce!==et,A?Ce!=null?gn(se):f.add(se):Ce!==void 0&&f.has(se)?gn(se):h.protectedKeys[se]=!0}h.prevProp=m,h.prevResolvedValues=ne,h.isActive&&(y={...y,...ne}),r&&e.blockInitialAnimation&&(T=!1),T&&(!C||O)&&d.push(...M.map(se=>({animation:se,options:{type:g}})))}if(f.size){const b={};f.forEach(g=>{const h=e.getBaseTarget(g),m=e.getValue(g);m&&(m.liveStyle=!0),b[g]=h??null}),d.push({animation:b})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function LS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!e0(t,e):!1}function xn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function IS(){return{animate:xn(!0),whileInView:xn(),whileHover:xn(),whileTap:xn(),whileDrag:xn(),whileFocus:xn(),exit:xn()}}class MS extends mn{constructor(t){super(t),t.animationState||(t.animationState=DS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Js(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let RS=0;class $S extends mn{constructor(){super(...arguments),this.id=RS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const _S={animation:{Feature:MS},exit:{Feature:$S}},Hf=(e,t)=>Math.abs(e-t);function OS(e,t){const n=Hf(e.x,t.x),r=Hf(e.y,t.y);return Math.sqrt(n**2+r**2)}class I0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Fa(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=OS(d.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=d,{timestamp:x}=pe;this.history.push({...v,timestamp:x});const{onStart:b,onMove:g}=this.handlers;f||(b&&b(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=ja(f,this.transformPagePoint),me.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Fa(d.type==="pointercancel"?this.lastMoveEventInfo:ja(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,b),v&&v(d,b)},!Qg(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=qs(t),a=ja(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=pe;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Fa(a,this.history)),this.removeListeners=At(bt(this.contextWindow,"pointermove",this.handlePointerMove),bt(this.contextWindow,"pointerup",this.handlePointerUp),bt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),cn(this.updatePoint)}}function ja(e,t){return t?{point:t(e.point)}:e}function Gf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Fa({point:e},t){return{point:e,delta:Gf(e,M0(t)),offset:Gf(e,zS(t)),velocity:VS(t,.1)}}function zS(e){return e[0]}function M0(e){return e[e.length-1]}function VS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=M0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>nn(t)));)n--;if(!r)return{x:0,y:0};const o=Dt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function je(e){return e.max-e.min}function mu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Kf(e,t,n,r=.5){e.origin=r,e.originPoint=X(t.min,t.max,e.origin),e.scale=je(n)/je(t),(mu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=X(n.min,n.max,e.origin)-e.originPoint,(mu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function fi(e,t,n,r){Kf(e.x,t.x,n.x,r?r.originX:void 0),Kf(e.y,t.y,n.y,r?r.originY:void 0)}function Yf(e,t,n){e.min=n.min+t.min,e.max=e.min+je(t)}function NS(e,t,n){Yf(e.x,t.x,n.x),Yf(e.y,t.y,n.y)}function Qf(e,t,n){e.min=t.min-n.min,e.max=e.min+je(t)}function pi(e,t,n){Qf(e.x,t.x,n.x),Qf(e.y,t.y,n.y)}function jS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?X(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?X(n,e,r.max):Math.min(e,n)),e}function Xf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function FS(e,{top:t,left:n,bottom:r,right:i}){return{x:Xf(e.x,n,i),y:Xf(e.y,t,r)}}function Jf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function BS(e,t){return{x:Jf(e.x,t.x),y:Jf(e.y,t.y)}}function US(e,t){let n=.5;const r=je(e),i=je(t);return i>r?n=Oi(t.min,t.max-r,e.min):r>i&&(n=Oi(e.min,e.max-i,t.min)),un(0,1,n)}function WS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const gu=.35;function HS(e=gu){return e===!1?e=0:e===!0&&(e=gu),{x:Zf(e,"left","right"),y:Zf(e,"top","bottom")}}function Zf(e,t,n){return{min:qf(e,t),max:qf(e,n)}}function qf(e,t){return typeof e=="number"?e:e[t]||0}const ep=()=>({translate:0,scale:1,origin:0,originPoint:0}),cr=()=>({x:ep(),y:ep()}),tp=()=>({min:0,max:0}),ee=()=>({x:tp(),y:tp()});function We(e){return[e("x"),e("y")]}function R0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function KS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ba(e){return e===void 0||e===1}function yu({scale:e,scaleX:t,scaleY:n}){return!Ba(e)||!Ba(t)||!Ba(n)}function kn(e){return yu(e)||$0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function $0(e){return np(e.x)||np(e.y)}function np(e){return e&&e!=="0%"}function Es(e,t,n){const r=e-n,i=t*r;return n+i}function rp(e,t,n,r,i){return i!==void 0&&(e=Es(e,i,r)),Es(e,n,r)+t}function vu(e,t=0,n=1,r,i){e.min=rp(e.min,t,n,r,i),e.max=rp(e.max,t,n,r,i)}function _0(e,{x:t,y:n}){vu(e.x,t.translate,t.scale,t.originPoint),vu(e.y,n.translate,n.scale,n.originPoint)}function YS(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&dr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,_0(e,s)),r&&kn(o.latestValues)&&dr(e,o.latestValues))}t.x=ip(t.x),t.y=ip(t.y)}function ip(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Bt(e,t){e.min=e.min+t,e.max=e.max+t}function op(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=X(e.min,e.max,o);vu(e,t[n],t[r],s,t.scale)}const QS=["x","scaleX","originX"],XS=["y","scaleY","originY"];function dr(e,t){op(e.x,t,QS),op(e.y,t,XS)}function O0(e,t){return R0(KS(e.getBoundingClientRect(),t))}function JS(e,t,n){const r=O0(e,n),{scroll:i}=t;return i&&(Bt(r.x,i.offset.x),Bt(r.y,i.offset.y)),r}const z0=({current:e})=>e?e.ownerDocument.defaultView:null,ZS=new WeakMap;class qS{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(qs(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:y,onDragStart:v}=this.getProps();if(f&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Jg(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),We(b=>{let g=this.getAxisMotionValue(b).get()||0;if(yt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(g=je(m)*(parseFloat(g)/100))}}this.originPoint[b]=g}),v&&v(c,d);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=d;if(y&&this.currentDirection===null){this.currentDirection=e3(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,b),this.updateAxis("y",d.point,b),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>We(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new I0(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:z0(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&o(t,n)}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!vo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=jS(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&lr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=FS(i.layoutBox,n):this.constraints=!1,this.elastic=HS(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&We(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=WS(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!lr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=JS(r,i.root,this.visualElement.getTransformPagePoint());let s=BS(i.layout.layoutBox,o);if(n){const a=n(GS(s));this.hasMutatedConstraints=!!a,a&&(s=R0(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=We(c=>{if(!vo(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Kc(t,r,0,n,this.visualElement))}stopAnimation(){We(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){We(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){We(n=>{const{drag:r}=this.getProps();if(!vo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-X(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!lr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};We(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=US({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),We(s=>{if(!vo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(X(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;ZS.set(this.visualElement,this);const t=this.visualElement.current,n=bt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();lr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Pt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(We(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=gu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function vo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function e3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class t3 extends mn{constructor(t){super(t),this.removeGroupControls=ke,this.removeListeners=ke,this.controls=new qS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ke}unmount(){this.removeGroupControls(),this.removeListeners()}}const sp=e=>(t,n)=>{e&&e(t,n)};class n3 extends mn{constructor(){super(...arguments),this.removePointerDownListener=ke}onPointerDown(t){this.session=new I0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:z0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:sp(t),onStart:sp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&i(o,s)}}}mount(){this.removePointerDownListener=bt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function r3(){const e=D.useContext(Ec);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=D.useId();return D.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const No={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ap(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Hr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=ap(e,t.target.x),r=ap(e,t.target.y);return`${n}% ${r}%`}},i3={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=dn.parse(e);if(i.length>5)return r;const o=dn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=X(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class o3 extends D.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;rw(s3),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),No.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||me.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Tc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function V0(e){const[t,n]=r3(),r=D.useContext(_g);return iu.jsx(o3,{...e,layoutGroup:r,switchLayoutGroup:D.useContext(Og),isPresent:t,safeToRemove:n})}const s3={borderRadius:{...Hr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Hr,borderTopRightRadius:Hr,borderBottomLeftRadius:Hr,borderBottomRightRadius:Hr,boxShadow:i3},N0=["TopLeft","TopRight","BottomLeft","BottomRight"],a3=N0.length,lp=e=>typeof e=="string"?parseFloat(e):e,up=e=>typeof e=="number"||R.test(e);function l3(e,t,n,r,i,o){i?(e.opacity=X(0,n.opacity!==void 0?n.opacity:1,u3(r)),e.opacityExit=X(t.opacity!==void 0?t.opacity:1,0,c3(r))):o&&(e.opacity=X(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<a3;s++){const a=`border${N0[s]}Radius`;let l=cp(t,a),u=cp(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||up(l)===up(u)?(e[a]=Math.max(X(lp(l),lp(u),r),0),(yt.test(u)||yt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=X(t.rotate||0,n.rotate||0,r))}function cp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const u3=j0(0,.5,E0),c3=j0(.5,.95,ke);function j0(e,t,n){return r=>r<e?0:r>t?1:n(Oi(e,t,r))}function dp(e,t){e.min=t.min,e.max=t.max}function Ue(e,t){dp(e.x,t.x),dp(e.y,t.y)}function fp(e,t,n,r,i){return e-=t,e=Es(e,1/n,r),i!==void 0&&(e=Es(e,1/i,r)),e}function d3(e,t=0,n=1,r=.5,i,o=e,s=e){if(yt.test(t)&&(t=parseFloat(t),t=X(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=X(o.min,o.max,r);e===o&&(a-=t),e.min=fp(e.min,t,n,a,i),e.max=fp(e.max,t,n,a,i)}function pp(e,t,[n,r,i],o,s){d3(e,t[n],t[r],t[i],t.scale,o,s)}const f3=["x","scaleX","originX"],p3=["y","scaleY","originY"];function hp(e,t,n,r){pp(e.x,t,f3,n?n.x:void 0,r?r.x:void 0),pp(e.y,t,p3,n?n.y:void 0,r?r.y:void 0)}function mp(e){return e.translate===0&&e.scale===1}function F0(e){return mp(e.x)&&mp(e.y)}function h3(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function B0(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function gp(e){return je(e.x)/je(e.y)}class m3{constructor(){this.members=[]}add(t){Yc(this.members,t),t.scheduleRender()}remove(t){if(Qc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yp(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const g3=(e,t)=>e.depth-t.depth;class y3{constructor(){this.children=[],this.isDirty=!1}add(t){Yc(this.children,t),this.isDirty=!0}remove(t){Qc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(g3),this.isDirty=!1,this.children.forEach(t)}}function v3(e,t){const n=rn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(cn(r),e(o-t))};return me.read(r,!0),()=>cn(r)}function x3(e){window.MotionDebug&&window.MotionDebug.record(e)}function w3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function S3(e,t,n){const r=Se(e)?e:zi(e);return r.start(Kc("",r,t,n)),r.animation}const Ua=["","X","Y","Z"],k3={visibility:"hidden"},vp=1e3;let E3=0;const En={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Wa(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function U0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=E3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,En.totalNodes=En.resolvedTargetDeltas=En.recalculatedProjection=0,this.nodes.forEach(T3),this.nodes.forEach(I3),this.nodes.forEach(M3),this.nodes.forEach(b3),x3(En)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new y3)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Xc),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=w3(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=v3(f,250),No.hasAnimatedSinceResize&&(No.hasAnimatedSinceResize=!1,this.nodes.forEach(wp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||z3,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!B0(this.targetLayout,v)||y,m=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const w={...Vc(x,"layout"),onPlay:b,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||wp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(R3),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xp);return}this.isUpdating||this.nodes.forEach(D3),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(L3),this.nodes.forEach(C3),this.nodes.forEach(P3),this.clearAllSnapshots();const a=rn.now();pe.delta=un(0,1e3/60,a-pe.timestamp),pe.timestamp=a,pe.isProcessing=!0,Ra.update.process(pe),Ra.preRender.process(pe),Ra.render.process(pe),pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tc.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(A3),this.sharedNodes.forEach($3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!F0(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||kn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),V3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ee();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Bt(a.x,l.offset.x),Bt(a.y,l.offset.y)),a}removeElementScroll(s){const a=ee();Ue(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Ue(a,s);const{scroll:f}=this.root;f&&(Bt(a.x,-f.offset.x),Bt(a.y,-f.offset.y))}Bt(a.x,c.offset.x),Bt(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=ee();Ue(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&dr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),kn(c.latestValues)&&dr(l,c.latestValues)}return kn(this.latestValues)&&dr(l,this.latestValues),l}removeTransform(s){const a=ee();Ue(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!kn(u.latestValues))continue;yu(u.latestValues)&&u.updateSnapshot();const c=ee(),d=u.measurePageBox();Ue(c,d),hp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return kn(this.latestValues)&&hp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=pe.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),pi(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ee(),this.targetWithTransforms=ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ue(this.target,this.layout.layoutBox),_0(this.target,this.targetDelta)):Ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),pi(this.relativeTargetOrigin,this.target,y.target),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}En.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||yu(this.parent.latestValues)||$0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===pe.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Ue(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;YS(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ee());const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=cr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=cr(),this.projectionDeltaWithTransform=cr());const x=this.projectionTransform;fi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=yp(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),En.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=cr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ee(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,b=this.getStack(),g=!b||b.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(O3));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const k=w/1e3;Sp(d.x,s.x,k),Sp(d.y,s.y,k),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_3(this.relativeTarget,this.relativeTargetOrigin,f,k),m&&h3(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=ee()),Ue(m,this.relativeTarget)),x&&(this.animationValues=c,l3(c,u,this.latestValues,k,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=me.update(()=>{No.hasAnimatedSinceResize=!0,this.currentAnimation=S3(0,vp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&W0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ee();const d=je(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=je(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Ue(a,l),dr(a,c),fi(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new m3),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Wa("z",s,u,this.animationValues);for(let c=0;c<Ua.length;c++)Wa(`rotate${Ua[c]}`,s,u,this.animationValues),Wa(`skew${Ua[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return k3;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=zo(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=zo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!kn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=yp(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ys){if(f[x]===void 0)continue;const{correct:b,applyTo:g}=ys[x],h=u.transform==="none"?f[x]:b(f[x],d);if(g){const m=g.length;for(let w=0;w<m;w++)u[g[w]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?zo(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xp),this.root.sharedNodes.clear()}}}function C3(e){e.updateLayout()}function P3(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?We(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=je(f);f.min=r[d].min,f.max=f.min+y}):W0(o,n.layoutBox,r)&&We(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=je(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=cr();fi(a,r,n.layoutBox);const l=cr();s?fi(l,e.applyTransform(i,!0),n.measuredBox):fi(l,r,n.layoutBox);const u=!F0(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const v=ee();pi(v,n.layoutBox,f.layoutBox);const x=ee();pi(x,r,y.layoutBox),B0(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function T3(e){En.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function b3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function A3(e){e.clearSnapshot()}function xp(e){e.clearMeasurements()}function D3(e){e.isLayoutDirty=!1}function L3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function wp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function I3(e){e.resolveTargetDelta()}function M3(e){e.calcProjection()}function R3(e){e.resetSkewAndRotation()}function $3(e){e.removeLeadSnapshot()}function Sp(e,t,n){e.translate=X(t.translate,0,n),e.scale=X(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kp(e,t,n,r){e.min=X(t.min,n.min,r),e.max=X(t.max,n.max,r)}function _3(e,t,n,r){kp(e.x,t.x,n.x,r),kp(e.y,t.y,n.y,r)}function O3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const z3={duration:.45,ease:[.4,0,.1,1]},Ep=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Cp=Ep("applewebkit/")&&!Ep("chrome/")?Math.round:ke;function Pp(e){e.min=Cp(e.min),e.max=Cp(e.max)}function V3(e){Pp(e.x),Pp(e.y)}function W0(e,t,n){return e==="position"||e==="preserve-aspect"&&!mu(gp(t),gp(n),.2)}const N3=U0({attachResizeListener:(e,t)=>Pt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ha={current:void 0},H0=U0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ha.current){const e=new N3({});e.mount(window),e.setOptions({layoutScroll:!0}),Ha.current=e}return Ha.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),j3={pan:{Feature:n3},drag:{Feature:t3,ProjectionNode:H0,MeasureLayout:V0}},xu={current:null},G0={current:!1};function F3(){if(G0.current=!0,!!Cc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>xu.current=e.matches;e.addListener(t),t()}else xu.current=!1}function B3(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Se(o))e.addValue(i,o),ks(r)&&r.add(i);else if(Se(s))e.addValue(i,zi(o,{owner:e})),ks(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);a.liveStyle===!0?a.jump(o):a.hasAnimated||a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,zi(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Tp=new WeakMap,U3=[...o0,xe,dn],W3=e=>U3.find(i0(e)),K0=Object.keys(_i),H3=K0.length,bp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],G3=Ac.length;function Y0(e){if(e)return e.options.allowProjection!==!1?e.projection:Y0(e.parent)}class K3{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.resolveKeyframes=(f,y,v,x)=>new this.KeyframeResolver(f,y,v,x,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>me.render(this.render,!1,!0);const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Zs(n),this.isVariantNode=$g(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const y=d[f];l[f]!==void 0&&Se(y)&&(y.set(l[f],!1),ks(c)&&c.add(f))}}mount(t){this.current=t,Tp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),G0.current||F3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var t;Tp.delete(this.current),this.projection&&this.projection.unmount(),cn(this.notifyUpdate),cn(this.render),this.valueSubscriptions.forEach(n=>n()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features)(t=this.features[n])===null||t===void 0||t.unmount();this.current=null}bindToMotionValue(t,n){const r=Un.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&me.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<H3;l++){const u=K0[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:y}=_i[u];f&&(s=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,Y0(this.parent));const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&lr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<bp.length;r++){const i=bp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=B3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<G3;r++){const i=Ac[r],o=this.props[i];($i(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=zi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(n0(i)||t0(i))?i=parseFloat(i):!W3(i)&&dn.test(n)&&(i=p0(t,n)),this.setBaseTarget(t,Se(i)?i.get():i)),Se(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=zc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Se(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Xc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Q0 extends K3{constructor(){super(...arguments),this.KeyframeResolver=h0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function Y3(e){return window.getComputedStyle(e)}class Q3 extends Q0{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Un.has(n)){const r=Fc(n);return r&&r.default||0}else{const r=Y3(t),i=(Ng(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return O0(t,n)}build(t,n,r,i){Mc(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Oc(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Wg(t,n,r,i)}}class X3 extends Q0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Un.has(n)){const r=Fc(n);return r&&r.default||0}return n=Hg.has(n)?n:Pc(n),t.getAttribute(n)}measureInstanceViewportBox(){return ee()}scrapeMotionValuesFromProps(t,n,r){return Kg(t,n,r)}build(t,n,r,i){$c(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Gg(t,n,r,i)}mount(t){this.isSVGTag=_c(t.tagName),super.mount(t)}}const J3=(e,t)=>Dc(e)?new X3(t,{enableHardwareAcceleration:!1}):new Q3(t,{allowProjection:e!==D.Fragment,enableHardwareAcceleration:!0}),Z3={layout:{ProjectionNode:H0,MeasureLayout:V0}},q3={..._S,...Gw,...j3,...Z3},V=tw((e,t)=>Rw(e,t,q3,J3)),Wn=S.section`
  display: ${e=>e.grid=="true"?"grid":"flex"};
  flex-direction: ${e=>e.row?"row":"column"};
  padding: ${e=>e.nopadding=="true"?"0":"32px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${e=>e.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.nopadding=="true"?"0":"16px 0px 16px 0px"};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`,Ki=S.h2`
  font-weight: 800;
  font-size: ${e=>e.main?"65px":"56px"};
  line-height: ${e=>e.main?"72px":"56px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${e=>e.main?"58px 0 16px":"0"};

  @media ${e=>e.theme.breakpoints.md} {
    font-size: ${e=>e.main?"56px":"48px"};
    line-height: ${e=>e.main?"56px":"48px"};
    margin-bottom: 12px;
    padding: ${e=>e.main?"40px 0 12px":"0"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${e=>e.main?"28px":"32px"};
    line-height: ${e=>e.main?"32px":"40px"};
    margin-bottom: 8px;
    padding: ${e=>e.main?"16px 0 8px":"0"};
    max-width: 100%;
  }
`,ek=S.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${e=>e.main?"0":"3.6rem"};
  color: rgba(255, 255, 255, 0.5);

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,Yi=S.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${e=>e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${e=>e.divider?"4rem 0":""};

  @media ${e=>e.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;S.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;S.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;S.div`
  width: ${({alt:e})=>e?"150px":"262px"};
  height: ${({alt:e,certificate:t})=>e?"52px":t?"40px":"64px"};
  border-radius: ${({certificate:e})=>e?"5px":"50px"};
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({alt:e,form:t,certificate:n})=>e||t?"0":n?"20px 0 20px auto":"0 0 80px"};
  color: #fff;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({disabled:e})=>e?".5":"1"};

  @media ${e=>e.theme.breakpoints.md} {
    width: ${({alt:e})=>e?"150px":"184px"};
    height: ${({alt:e})=>e?"52px":"48px"};
    font-size: ${({alt:e})=>e?"20px":"16px"};
    margin-bottom: ${({alt:e})=>e?"0":"64px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({alt:e})=>e?"0":"32px"};
  }
`;S.button`
  border: none;
  border-radius: ${({certificate:e})=>e?"5px":"50px"};
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({disabled:e})=>e?".5":"1"};
  transition: 0.4s ease;
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({disabled:e})=>e?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${e=>e.theme.breakpoints.md} {
    font-size: ${({alt:e})=>e?"20px":"16px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;S.div`
  margin-left: ${({large:e})=>e?"24px":"16px"};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin-left: ${({large:e})=>e?"16px":"8px"};
  }
  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: ${({large:e})=>e?"0":"8px"};
  }
`;S.div`
  display: flex;
  height: ${({large:e})=>e?"32px":"24px"};

  @media ${e=>e.theme.breakpoints.md} {
    height: ${({nav:e})=>e?"16px":"24px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    height: ${({large:e})=>e?"32px":"16px"};
  }
`;const Ap=S(V.div)`
  background-color: ${({red:e})=>e?"#bb0011":"#003366"};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  margin: 5px;
`,tk=S.div`
  width: 100%;
  padding-top: 60px;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${e=>e.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 0%;
  }
`,Dp=S(V.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${e=>e.center?"2rem auto":"2rem 0rem"};
`,Lp=S(V.a)`
  color: white;
  border-radius: 50px;
  padding: 8px;
`,Ip=S(V.img)`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;

  /* @media ${e=>e.theme.breakpoints.md} {
    height: 3rem;
    width: 3rem;
  } */

  @media ${e=>e.theme.breakpoints.sm} {
    height: 3rem;
    width: 3rem;
  }
`,nk=S(V.div)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${e=>e.main?"0":"3.6rem"};
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: space-between;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,Ga=S(V.div)`
  margin: ${e=>e.right?"auto auto auto 2rem":e.left?"auto 2rem auto auto":"auto"};

  @media ${e=>e.theme.breakpoints.md} {
    margin: ${e=>e.right?"auto auto auto 1.5rem":e.left?"auto 1.5rem auto auto":"auto"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin: ${e=>e.right?"auto auto auto 1rem":e.left?"auto 1rem auto auto":"auto"};
  }
`,rk=S(V.p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${e=>e.main?"0":"3.6rem"};
  color: rgba(255, 255, 255, 0.5);

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,Mp=S(V.h2)`
  font-weight: 800;
  font-size: ${e=>e.main?"65px":"56px"};
  line-height: ${e=>e.main?"72px":"56px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${e=>e.main?"58px 0 16px":"0"};

  @media ${e=>e.theme.breakpoints.md} {
    font-size: ${e=>e.main?"56px":"48px"};
    line-height: ${e=>e.main?"56px":"48px"};
    margin-bottom: 12px;
    padding: ${e=>e.main?"40px 0 12px":"0"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${e=>e.main?"28px":"32px"};
    line-height: ${e=>e.main?"32px":"40px"};
    margin-bottom: 8px;
    padding: ${e=>e.main?"16px 0 8px":"0"};
    max-width: 100%;
  }
`,ik=S(V.p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`,ok=S.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media ${e=>e.theme.breakpoints.sm} {
    justify-content: space-around;
  }
`,Rp=S(V.div)`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px 80px 0;
  color: #fff;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  cursor: pointer;

  @media ${e=>e.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin: 0 10px 32px 10px;
  }
`,sk=S.div`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding: 3.6rem;
  border-radius: 1rem;
  animation: modal 0.2s linear;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,ak=S(V.ul)`
  width: 100%;
  list-style: circle inside;
`,lk=S.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  font-weight: 700;
  margin: 10px 20px;

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};
  }
`,uk="./assets/beehyv-Cw6K2nTD.png",ck="./assets/iauro-ZgVXHOFR.png",dk="./assets/privado-C8W-c888.png",fk="./assets/javascript_intermediate-BbWeKQdA.jpg",pk="./assets/sql_advanced-DVsTgDzV.jpg",hk="./assets/ethereum_and_solidity-B0-PWyye.jpg",mk="./assets/react_complete_guide-BVVetmFP.jpg",gk="./assets/the_complete_web_development_bootcamp-iQ3WFpyJ.jpg",yk="./assets/problem_solving_intermediate-C0n0ot-Q.jpg",jo="./assets/nodejs-BXcG4YML.png",Fo="./assets/express-cwHW_D4z.png",X0="./assets/django-Cu3FVZFL.png",vk="./assets/fastapi-DrfzMuDW.png",J0="./assets/socketio-B2P4D6-o.png",xk="./assets/celery-CNx-_cHW.png",wk="./assets/mongoose-CqK2N6I1.png",Sk="./assets/openai-C-NVj5RM.png",kk="./assets/claude-CtWjvTCD.png",Ek="./assets/gemini-CJjLXoJY.png",Ck="./assets/huggingface-tzIWiLjW.png",Pk="./assets/groq-D-9Ql602.png",Tk="./assets/llama-DQUUsI5o.png",bk="./assets/langchain-Cogdg9SG.png",Ak="./assets/langsmith-CunMem5m.png",Dk="./assets/langgraph-DYq8S7Jm.png",Zr="./assets/react-DGcLNp8c.png",Z0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////Nzc2SkpL8/Pybm5v39/fw8PDz8/PR0dGLi4uYmJh9fX3c3NxsbGzp6el3d3eHh4fAwMAVFRUMDAxeXl54eHjDw8Pi4uJbW1toaGgnJydxcXEcHBw0NDRRUVGioqKxsbFBQUE6OjqqqqpLS0slJSV7ZQSCAAAF1ElEQVR4nO2d6VYqOxBGT2QSRaBBAcWpPXre/xEv0EkYupNUOk1VruvbPx1Y2VikK5VK/PMHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPil/EyLwY5eUcynz4/So+mWp/v1rK/O6W8W98/SA+uEaTlTbmblVHqAaUzGHjvDuJAeZls+1gS9ipsX6cG2oPAFZ53RnfSAI+kNo/z29AfSg47g7nLiJNKTHjiRl9t2fjuGr9KDJ7C8ae2352ErLRBikuS3J/Mph/L8CzGWlvDw0XKGuaCfbTbX68Rvz720SjOLzgSVWkjLNPHQoeBuTpXWqROXpIWZSQtdMupYcJepSiud071gZoqbKwhmFajdTjJHspluunxMnLOWVqu4v5pgJuupjysKKvUhrbejm1zURV9ar5vVhA/xlUZxZUGlhGuNb1cXVOpN1PDaMbpHNE5fGQSVkiwXt6+qxSCYoHa3qPcjV5xiElRKSnDAZihV8GcTlMpsuD6Fe2Qe+52s6w9FtW1wBS2yGH4Jjn64XqwX/pzgtnqtx+BrSRSJgzswM8I7YVbxQUOBtXD4bTdPsdLzMyYjC76YwAPjLjgmuz737Acbw/Aic8JuGM65reFzF4Y37IbBIZ3UWNylKjNuQqGAW3AeY+iO0whD7hUGoYJ4YvjUgWHJbEhYN51WAl1vSIThhldwGR7Rea3TEacRhswfRMLH8NzQEacxhk+sht+xho44jTHk3fqmNM1cVOQbJYwhpUmMN3Gj7PheGE5TDXnXF4QBGcO5+fw0NWPGGLJONaRCsDZ8tQv0hjiNMnxnNPRkmnVD2zrSEKdRhpxZDakSbA2VO06jDFeMhqT9mKPh0PxemiFn2ZRUhDIzjTq2ONUShShDzgciqVJ6YqhMZ+zlczTKkLNqGm1o5tPL2ke2hqTmBG24OlO5mKOyNYz5HFaGaq5/9Xw+/RWGpi/a/O7vNTRFp7M4zdYw5nloe9tNPfB0Po0y5GwfoiyAzQP62L1vWg4aDElNOZw5jbOy5DU0cbpqaciZl763MrRp17GaHGXIubYgrQ/rhkofiDk+96MMOQVJa/wGQ1MRtF8z63aKIW9LBqVO02Bok2cbpwO6IW/n0GdLQ/W3+uKxSPBONvxmNWwsK1EMTVjazbkN2XDePJRr0dZQfeoXsL3hPaohcwcfoU2h2VB9VV/e2i9saYa3vIKUvSeHoYlTm9s+0Ay5j0IR8jaHoZ0xbJwWJEPOnO1Ae8N6nC5z3AMm7ONrw/o6xDy6bZyOCe8X/+mScC9G4TK0cWpboV7DqyeBkxcJhuYUhU3gh+EoXfIbBhM3bdj0xzZxSj9uI9HsHexr8xjatgPyoTeRS15CzQrasLmmozvx/hIFuR/3FaEQK3w/ZrYyKCm8EjvcTTN0OJgUhXZ+WEYw9P7rpV/p+LbecvuiCH4KGYb+iIfKkfOiDLOVQYlTKcHEZn2TpYSXKYJ388TfJNQw8J/Qzw39g7gqq9Dg/OjUJtR+xL6qOCXtFLf5KPrjVPZE99Y7tiA6F/MfJRa+dSjxWIleMZThH5Ej8baBn+pV3Bmg/K0DlE5TDzrhdMeprN2B8NkZL3rnonR8O4sLlYjJswtd7GiO00yuU0q7oU0X+hvjNJN7MVIvb9EL/rL+HebmdR9pB/X0X6oWpzLL3mYe0xLUqofhsqVzmNVdw8u0c+vVFlt5LihQXfOSFKh6L+M0EkZZ/QUPJE03VU3jpMUjo0nmSNJDo2rPtDta/GfxSCQ9+v8dXkLHKe+GdgQpCdzs5BUyvon2LeHDWJXBd3G6kb2QJkRCcaoq3Od/JfR7+wXjP+mxU5m3TXAyukUwRNtJ9f/0XwTKFn7ZPiIcfMbF6jD7CaaBKT3JGTN3dHXG4x1lYn3o5f0ADPA2WfjCdbSY5LZIasN2/j2uL65GN9+v+a2QUviarnqDil4xZe3ZBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+Q/n/0Y/eRT2nQAAAABJRU5ErkJggg==",wu="./assets/redux-CTsqapqo.png",q0="./assets/bootstrap-DPTU33M3.png",Lk="./assets/html-K5LuqBMj.png",Ik="./assets/css-DgFxCd0G.png",Mk="./assets/graphql-MxFR0TI8.png",Rk="./assets/d3-Du43Hyal.png",$k="./assets/c_plus_plus-CfSWLcI-.png",_k="./assets/javascript-DmXWESGl.png",Ok="./assets/typescript-D4KtOBt3.png",zk="./assets/python-hKyzPvKV.png",Vk="./assets/java-Ce_0e7z2.png",Nk="./assets/c-CBUxLFDe.png",Bo="./assets/mongodb-0U-9j70b.png",jk="./assets/mysql-BnE2W9yW.png",Fk="./assets/firebase-BjIKRhdF.png",Bk="./assets/postgresql-DtJmJh0m.png",Uk="./assets/pinecone-ml-3xeo6.png",Wk="./assets/sqlite-6Hud9xsZ.png",Hk="./assets/redis-DIgtsK9a.png",ey="./assets/solidity-DlDFmTSK.png",ty="./assets/metamask-XtZ97vkW.png",Gk="./assets/ethereum-Cuf3AzOf.png",Kk="./assets/github-DggO8tzb.png",Yk="./assets/vscode-Co7t4TFk.png",Qk="./assets/pycharm-DU4tkmQB.png",Xk="./assets/ubuntu-XwRvOAJ8.png",Jk="./assets/postman-BS-C-aiQ.png",Zk="./assets/dbeaver-C60gmWix.png",Ka="./assets/hackerrank-CoXBfHMT.png",Ya="./assets/udemy-DMRrCtUy.png",qk="./assets/github-DggO8tzb.png",e5="./assets/linkedin-D-jO3fhN.png",t5="./assets/drive-WpSEd_bw.png",n5="./assets/leetcode-gmoEXSmj.png",r5="./assets/hackerrank-CoXBfHMT.png",i5="./assets/codeforces-BomSu0aa.png",o5="./assets/codechef-D2kxiMCt.png",xo=["B.Tech - IIT Dhanbad'23 ","Software Developer - Privado.ai"],qr=[{year:2023,designation:"B.Tech in Petroleum Engineering",institute:"IIT(ISM) Dhanbad"},{year:2019,designation:"Higher Secondary Education (12th Grade)",institute:"Arihant College of Arts, Commerce & Science, Pune (MH)"},{year:2018,designation:"Eleventh Grade",institute:"Arihant College of Arts, Commerce & Science, Pune (MH)"},{year:2017,designation:"Senior Secondary Education (10th Grade)",institute:"Central Public School, Mehkar (MH)"}],s5=[{time:"Feb '25 - Present",designation:"Software Developer",company:"Privado.ai",location:"Pune, Maharashtra",image:dk,desc:["Responsible for end-to-end product ownership, including initial POCs, frontend and backend engineering, UI/UX design, testing, and post release maintenance","Built efficient MongoDB aggregation pipelines with pre-computation for graph dashboard.","Worked with D3.js to build interactive graphs for dashboard visualizations","Worked on the MobileScan module that embeds a mobile device in the UI, captures user actions, and records network logs for PII and third-party analysis","Ensured efficient session handling for embedded devices billed per minute ,balancing seamless user interaction with cost-effective device usage"],techStack:["Python","Django","ReactJS","MongoDB","Amazon AWS","Docker","Celery","Redis","D3.js"]},{time:"July '23 - Present",designation:"Software Developer",company:"Beehyv Software Solutions Pvt. Ltd.",location:"Hyderabad, Telangana",image:uk,desc:["Co-developed GIDR - A knowledge management and document querying software that uses AI to provide insights and answers from your documents","Built the query-answering system using document vector embeddings and the RAG(Retrieval-Augmented Generation) framework","Utilized LangGraph to build independent, Reusable Component Nodes that provides users flexibility to design custom query-answering workflows","Worked on scraping websites and various file types to extract data and generate vector embeddings","Reduced the Search service response time by 80% by the use of MultiThreading and Caching.","Boosted Ingestion process's performance by 70% using Multi-Threading and Batch Calls.","Resolved over 20 critical bugs and constantly addressed production issues to ensure system stability.","Regularly engaged in Research and Developing proof-of-concepts (POCs) to enhance project development.","Integrated GIDR with over 25 Models like OpenAI, Claude, Gemini, Groq, LLaMA and Sambanova.","Developed SQL and database migration scripts, along with scripts for vector databases and similarity search functions."],techStack:["LangChain","LangGraph","FastAPI","NodeJS","OpenAI","Pinecone","ReactJS","PostgreSQL","Google Cloud Platform"]},{time:"May '22 - July '22",designation:"Software Developer - Intern",company:"Iauro Systems Pvt. Ltd.",location:"Pune, Maharashtra",image:ck,desc:["Worked on building a Web-App for selling Handmade Products.","Implemented backend using Vendure (A Headless Application) and frontend using React JS.","Integrated Customizable Coupons and Promotions Mechanism.","Worked on building custom Plugins to modify behavior of Vendure."],techStack:["ReactJS","Vendure"," MySQL"," GraphQL"," Stripe"]}],hi=[{name:"My GitHub",link:"https://github.com/Yash01607",image:qk},{name:"My LinkedIn",link:"https://www.linkedin.com/in/yash-agrawal-a150991a5/",image:e5},{name:"My Resume",link:"https://drive.google.com/file/d/10BBykMKIkzJ7qwfe51EpQUxarLdeoBVU/view?usp=sharing",image:t5},{name:"Leetcode",link:"https://leetcode.com/u/Yash_01/",image:n5},{name:"Hackerrank",link:"https://www.hackerrank.com/profile/Yash_01",image:r5},{name:"Codeforces",link:"https://codeforces.com/profile/Yash_01",image:i5},{name:"CodeChef",link:"https://www.codechef.com/users/yash3457",image:o5}],a5="As a full-stack web developer, I possess a versatile skill set in both front-end and back-end development, ready to tackle diverse web projects with enthusiasm and a drive for excellence.",l5=["I'm a Full Stack Software Developer with a knack for problem-solving and a genuine enthusiasm for coding.","I've professional experience in Python (Django and FastAPI) and AI tools like OpenAI. Additionally, during my time at IIT Dhanbad, I've worked with C++ and JavaScript (Node and React) , gaining a diverse skill set in both backend and frontend development.","I'm excited to bring this combination of industry experience and self-driven exploration to new challenges and eager to utilize this knowledge in this ever-evolving tech industry!"],He={phone:"+91-89755-17715",email:" yash.ra301@gmail.com",address:"Kondapur, Hyderabad, Telangana 500084"},u5=[{title:"JavaScript(Intermediate)",image:fk,issuedBy:"Hackerrank",issuedOn:"Jan 2024",logo:Ka,link:"https://www.hackerrank.com/certificates/62b40426f498"},{title:"SQL(Advanced)",image:pk,issuedBy:"Hackerrank",issuedOn:"Jan 2024",logo:Ka,link:"https://www.hackerrank.com/certificates/afe3212a1baa"},{title:"Ethereum and Solidity",image:hk,issuedBy:"Udemy",issuedOn:"April 2023",logo:Ya,link:"https://www.udemy.com/certificate/UC-17101ac8-122b-4052-b7db-654b13647dcd/"},{title:"React - The Complete guide",image:mk,issuedBy:"Udemy",issuedOn:"July 2022",logo:Ya,link:"https://www.udemy.com/certificate/UC-e45c9f0c-c0a1-454d-92b7-81788b4113b7/"},{title:"The Complete 2021 Web Development Bootcamp",image:gk,issuedBy:"Udemy",issuedOn:"July 2021",logo:Ya,link:"https://www.udemy.com/certificate/UC-11a1164a-d4bc-4daf-ba4b-d0fd60fb0f0a/"},{title:"Problem Solving (Intermediate)",issuedBy:"Hackerrank",image:yk,issuedOn:"Sep 2020",logo:Ka,link:"https://www.hackerrank.com/certificates/94c876ad5f78"}],c5=[{category:"Backend",skills:[{name:"Django",image:X0},{name:"FastAPI",image:vk},{name:"NodeJS",image:jo},{name:"ExpressJS",image:Fo},{name:"Socket.IO",image:J0},{name:"Celery",image:xk},{name:"Mongoose",image:wk}]},{category:"AI Tech",skills:[{name:"OpenAI",image:Sk},{name:"Claude AI",image:kk},{name:"Gemini AI",image:Ek},{name:"HuggingFace AI",image:Ck},{name:"Groq AI",image:Pk},{name:"LLaMA",image:Tk},{name:"LangChain",image:bk},{name:"LangSmith",image:Ak},{name:"LangGraph",image:Dk}]},{category:"Frontend",skills:[{name:"ReactJS",image:Zr},{name:"NextJS",image:Z0},{name:"Redux",image:wu},{name:"BootStrap",image:q0},{name:"CSS",image:Ik},{name:"GraphQL",image:Mk},{name:"D3.js",image:Rk}]},{category:"Languages",skills:[{name:"C++",image:$k},{name:"JavaScript",image:_k},{name:"Python",image:zk},{name:"Java",image:Vk},{name:"C",image:Nk},{name:"TypeScript",image:Ok},{name:"HTML",image:Lk}]},{category:"DataBases",skills:[{name:"MongoDB",image:Bo},{name:"MySQL",image:jk},{name:"Firebase",image:Fk},{name:"PostgreSQL",image:Bk},{name:"Pinecone",image:Uk},{name:"Redis",image:Hk},{name:"SQLite",image:Wk}]},{category:"Web3",skills:[{name:"Solidity",image:ey},{name:"Metamask",image:ty},{name:"Ethereum",image:Gk}]},{category:"DevTools",skills:[{name:"Github",image:Kk},{name:"VsCode",image:Yk},{name:"PyCharm",image:Qk},{name:"Ubuntu",image:Xk},{name:"Postman",image:Jk},{name:"DBeaver",image:Zk}]}],d5=S.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  animation: modal 0.2s linear;
  overflow: auto;
`,f5=S(V.div)`
  opacity: 1;
  cursor: default;
  width: 80%;
  max-width: 700px;
  max-height: 80%;
  background-color: #0f1624;
  color: #f2f5f7;
  box-shadow: 3px 3px 20px #797d7c;
  overflow-y: auto;
  text-align: center;
  scrollbar-width: none;

  @media ${e=>e.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    top: 24px;
  }
`,Jc=e=>(D.useEffect(()=>{e.show?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e.show]),e.show==null?null:p.createElement(d5,{onClick:()=>e.onClose()},p.createElement(f5,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0,transition:{duration:.3,delay:0,ease:"easeInOut"}},exit:{opacity:0,y:30},onClick:t=>t.stopPropagation()},e.children))),p5=()=>{const[e,t]=D.useState(null);return p.createElement(p.Fragment,null,p.createElement(Wn,{nopadding:"true"},p.createElement(Jc,{onClose:()=>{t(null)},show:e},p.createElement(sk,null,p.createElement(ak,null,l5.map((n,r)=>p.createElement(lk,{key:r},n))),p.createElement(Dp,{center:!0},hi.map((n,r)=>p.createElement(Lp,{key:r,initial:{opacity:0,scale:.7},whileInView:{opacity:1,scale:1,transition:{duration:.5,delay:r*.05,ease:"easeInOut"}},href:n.link,target:"_blank",title:n.name},p.createElement(Ip,{src:n.image,alt:n.name})))))),p.createElement(tk,null,p.createElement(rk,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:1,delay:0,ease:"easeInOut"},main:!0},"Hi, I'm"),p.createElement(Mp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1,ease:"easeInOut"},center:!0},"Yash Agrawal"),p.createElement(Mp,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:1,delay:2,ease:"easeInOut"},center:!0},"I build things for the web"),p.createElement(nk,null,p.createElement(Ga,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:3,ease:"easeInOut"},key:xo[0],left:!0},xo[0])," ",p.createElement(Ga,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:3,ease:"easeInOut"},key:"|"},"|"),p.createElement(Ga,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:3,ease:"easeInOut"},right:!0,key:xo[1]},xo[1])),p.createElement(ik,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:4,ease:"easeInOut"}},a5),p.createElement(Dp,null," ",hi.map((n,r)=>p.createElement(Lp,{key:r,initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{duration:.5,delay:r*.05+4,ease:"easeInOut"},href:n.link,target:"_blank",title:n.name},p.createElement(Ip,{src:n.image,alt:n.name})))),p.createElement(ok,null,p.createElement(Rp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:4,ease:"easeInOut"},onClick:()=>t(!0),target:"_blank"},"Know More"),p.createElement(Rp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:4,ease:"easeInOut"},onClick:()=>window.open(hi[2].link,"_blank"),title:"View Resume"},"View Resume")))))},h5=S.img`
  width: 40%;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 10px;

  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 20px;
  }
`,m5=S.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem;
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;S.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
  }
`;const g5=S.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 20px;
`,y5=S.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 20px 0 0 0;
  font-size: ${e=>e.title?"3rem":"2rem"};
`,$p=S.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;S.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;const v5=S.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;S.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;S.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;const _p=S.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: ${e=>e.summary?"flex-start":"center"};
  align-items: center;
  margin: 30px auto 10px auto;
  margin: ${e=>e.summary?"10px auto 10px auto":"30px auto 10px auto"};
`,x5=S.span`
  margin: 3px 2px 3px 2px;
`,w5=S.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
`,S5=S(V.ul)`
  width: 100%;
`,Qa=S(V.a)`
  display: flex;
  text-decoration: none;
  color: inherit;
  justify-content: center;
  width: 70%;
  text-align: center;
  background-color: #003366;
  margin: 2rem auto;
  padding: 1.5rem;
  align-items: center;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  &:hover {
    cursor: pointer;
  }
`,Xa=S(V.span)`
  margin-left: 10px;
`,k5=S.div`
  max-width: 800px;
  padding: 3.6rem;
  border-radius: 1rem;
  animation: modal 0.2s linear;
  text-align: left;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,E5=S(V.ul)`
  width: 100%;
  list-style: circle inside;
`,C5=S.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  margin-left: 20px;
  font-weight: 700;

  margin-top: ${e=>e.border_top?"10px":""};

  padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};
  }
`,P5=S(V.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${e=>e.theme.breakpoints.sm} {
    flex-direction: column-reverse;
  }
`,T5=S(V.div)`
  padding: 15px 0px;
  border-top: ${e=>e.border_top?"2px solid rgba(255, 255, 255, 1)":""};
`,b5=S(V.h1)`
  padding-bottom: 15px;
  margin: 0 0 0 0;
  margin-right: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
`,A5="./assets/agrotech-BRCzmmcp.png",D5="./assets/crowdwallet-DqWhBDat.png",L5="./assets/memoreaum-C-FyH14m.png",I5="./assets/simplishopee-Bqp4jpsf.png",M5="./assets/expense-tracker-CErtsfjm.png",R5=[{title:"SimpliShopee",description:"Developed a production ready E-commerce website using Django and ReactJS from scratch",image:I5,tags:["ReactJS","Django","ReduxJS","BootStrap"],tagImgs:[Zr,X0,wu,q0],source:"https://github.com/Yash01607/SimpliShopee",visit:"https://simplishopee.pythonanywhere.com/",id:4,details:[{heading:"User Authentication and Authorization",description:["Secure user registration and login functionalities.","Role-based access control to manage user permissions."]},{heading:"Product Management",description:["Intuitive product catalog with detailed product information.","Support for product categories, tags(Sub Categories) and filters.","Product search functionality."]},{heading:"Shopping Cart",description:["User-friendly shopping cart for adding, updating, and removing items.","Real-time cart updates without page refresh using React and Redux."]},{heading:"Checkout Process",description:["Seamless and secure checkout experience.","Order summary and confirmation."]},{heading:"Order Management",description:["Order history and tracking for users.","Order status updates."]},{heading:"Admin Dashboard",description:["Comprehensive admin panel for managing products, orders, and users."]},{heading:"Responsive Design",description:["Mobile-friendly design for optimal user experience across devices."]},{heading:"Security",description:["HTTPS implementation for secure data transmission.","Protection against common web vulnerabilities."]}]},{title:"CrowdWallet",description:"Crowd Wallet facilitates project crowdfunding, utilizing Blockchain Technology for Entrepreneurs.",image:D5,tags:["NextJS","Solidity","Metamask"],tagImgs:[Z0,ey,ty],source:"https://github.com/Yash01607/CrowdCoin",visit:"https://crowd-coin-yash01607.vercel.app/",id:2,details:[{heading:"Crowdfunding Mechanism",description:["Enables entrepreneurs to create crowdfunding campaigns, detailing their projects and funding goals.","Contributors can securely contribute funds using cryptocurrency transactions."]},{heading:"Transparency through Voting",description:["Implements a voting system where contributors can express approval or disapproval of spending requests.","Decisions of spending are made based on the results of voting."]},{heading:"Blockchain Technology",description:["Built on the Blockchain for enhanced security, transparency, and decentralization.","Utilizes smart contracts written in Solidity for handling fund transactions and voting processes."]},{heading:"Smart Contracts",description:["Utilizes Solidity-based smart contracts for managing and executing crowdfunding campaigns.","Smart contracts automatically handle fund disbursement based on community-approved spending requests."]}]},{title:"Memoreaum",description:"Created a user-friendly social media app with the MERN stack, enabling seamless sharing of moments and events.",image:L5,tags:["MongoDB","ExpressJS","ReactJS","NodeJS"],tagImgs:[Bo,Fo,Zr,jo],source:"https://github.com/Yash01607/Memoreaum",visit:"https://memoreaum.onrender.com/",id:3,details:[{heading:"User Authentication",description:["Implemented secure Google OAuth for user registration and login, ensuring a reliable and user-friendly authentication process.","Also user can login through username and password. Achieved Security using JWT Auth."]},{heading:"Memory Sharing",description:["Users can share their memories by creating posts and attaching images to post."]},{heading:"News Feed",description:["Dynamic news feed displaying a chronological order of all shared memories."]},{heading:"Interactivity",description:["Users can like others memories.","Commenting feature allows users to share thoughts."]}]},{title:"AgroTech",description:"Developed a MERN Stack E-commerce Web Application for agricultural products.",image:A5,tags:["ReactJS","ReduxJS","NodeJS","ExpressJS","MongoDB","Socket.IO"],tagImgs:[Zr,wu,jo,Fo,Bo,J0],source:"https://github.com/Yash01607/Ecommerce_website",visit:"https://agrotech-yajt.onrender.com/",id:1,details:[{heading:"User Authentication and Security",description:["Secure user registration and login functionalities using JSON Web Token (JWT) for enhanced security.","Allows users to securely purchase products and track their order history."]},{heading:"Live Chat with Admin",description:["Implements live chat functionality using Socket.io for real-time communication between customers and admin users."]},{heading:"Dynamic Rating and Review System",description:["Users can rate and review products, providing valuable feedback to both farmers and buyers."]},{heading:"Search and Filtering Mechanism",description:["Robust product search and filtering options for efficient navigation.","Allows users to find products based on categories, price range, ratings, and other relevant parameters."]},{heading:"Admin Dashboard",description:["Comprehensive admin panel for managing products, categories, user accounts, and order details.","Analytics tools providing insights into total sales and total users."]}]},{title:"Expense Tracker",description:"Developed a user friendly Expense Tracker Web-App where users can digitally keep track of their monthly expenses.",image:M5,tags:["ReactJS","NodeJS","ExpressJS","MongoDB"],tagImgs:[Zr,jo,Fo,Bo],source:"https://github.com/Yash01607/Expense-Tracker",visit:"https://expense-tracker-t01y.onrender.com/",id:6,details:[{heading:"User Authentication",description:["JWT authentication for secure user login and session management."]},{heading:"Expense Management",description:["User-friendly interface for adding and managing expenses.","User can view their expenses."]},{heading:"Monthly Expense Graph",description:["Graphical representation of monthly expenses compared to salary."]}]}];var ny={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Op=p.createContext&&p.createContext(ny),$5=["attr","size","title"];function _5(e,t){if(e==null)return{};var n=O5(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function O5(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}function zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ps(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zp(Object(n),!0).forEach(function(r){z5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z5(e,t,n){return t=V5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V5(e){var t=N5(e,"string");return typeof t=="symbol"?t:t+""}function N5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ry(e){return e&&e.map((t,n)=>p.createElement(t.tag,Ps({key:n},t.attr),ry(t.child)))}function Hn(e){return t=>p.createElement(j5,Cs({attr:Ps({},e.attr)},t),ry(e.child))}function j5(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=_5(e,$5),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",Cs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ps(Ps({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&p.createElement("title",null,o),e.children)};return Op!==void 0?p.createElement(Op.Consumer,null,n=>t(n)):t(ny)}function Ja(e){return Hn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function F5(e){return Hn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"},child:[]}]})(e)}const B5=()=>{var n;const[e,t]=D.useState(null);return p.createElement(Wn,{id:"projects"},p.createElement(Yi,null),p.createElement(Ki,{main:!0},"Projects"),p.createElement(Jc,{onClose:()=>{t(null)},show:e},e?p.createElement(k5,null,p.createElement(P5,null,p.createElement("div",null,p.createElement(b5,null,e.title),p.createElement(_p,{summary:!0},p.createElement("h3",null,"Tech Stack:"),e.tags.map((r,i)=>p.createElement(x5,{key:i},r,e.tags.length-1===i?".":",")))),p.createElement(h5,{src:e.image,alt:e.title})),(n=e==null?void 0:e.details)==null?void 0:n.map((r,i)=>p.createElement(T5,{key:i,border_top:!0},p.createElement("h3",null,r.heading),p.createElement(E5,null,r.description.map((o,s)=>p.createElement(C5,{key:s},o)))))):p.createElement(p.Fragment,null)),p.createElement(m5,null,R5.map((r,i)=>p.createElement(V.div,{key:i,className:"card",initial:{scale:.7,opacity:0},whileInView:{scale:1,transition:{duration:.5},opacity:1}},p.createElement("div",{className:"wrapper"},p.createElement(g5,null,p.createElement("a",{href:r.visit,target:"_blank",rel:"noreferrer"},p.createElement(y5,{title:!0},r.title)),p.createElement($p,null)),p.createElement(v5,{className:"card-info"},r.description.substring(0,150)),p.createElement($p,null),p.createElement(_p,null,r.tagImgs.map((o,s)=>p.createElement(w5,{src:o,alt:o,key:s})))),p.createElement("div",{className:"hover_list"},p.createElement(S5,null,p.createElement(Qa,{initial:{scale:1},whileHover:{scale:1.1},onClick:()=>{t(r)}},"View Details",p.createElement(Xa,null,p.createElement(Ja,null))),p.createElement(Qa,{initial:{scale:1},whileHover:{scale:1.1},href:r.visit,target:"_blank"},"Visit Site",p.createElement(Xa,null,p.createElement(Ja,null))),p.createElement(Qa,{initial:{scale:1},whileHover:{scale:1.1},href:r.source,target:"_blank"},"View Code",p.createElement(Xa,null,p.createElement(Ja,null)))))))))};S.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0;

  @media ${e=>e.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;S.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  max-width: 320px;

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;S.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;S.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: column;
    text-align: center;
  }
`;S.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${e=>e.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;const U5=S.ul`
  list-style-type: none;
  margin: 3rem 0;

  @media ${e=>e.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`,W5=S(V.li)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 30px auto;
  padding: 30px 0 30px 0;

  @media ${e=>e.theme.breakpoints.sm} {
    margin-bottom: 14px;
    flex-direction: column;
    text-align: center;
  }
`,H5=S(V.h4)`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  width: 20%;
  margin: auto;
  max-width: 180px;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin: auto;
    width: 100%;
    max-width: 360px;
    text-align: center;
    margin-bottom: 15px;
  }
`,G5=S(V.ul)`
  width: 78%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    justify-content: flex-start;
    width: 100%;
  }
`,K5=S(V.li)`
  margin: auto 15px auto 15px;
  text-align: center;

  @media ${e=>e.theme.breakpoints.sm} {
    width: 33%;
    margin: 0;
  }
`,Y5=S.img`
  width: 80px;
  height: 80px;
`,Q5=S.div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`,X5=()=>p.createElement(Wn,{id:"tech"},p.createElement(Yi,null),p.createElement(Ki,{main:!0},"Technologies"),p.createElement(ek,null,"I have worked with a diverse range of technologies in the world of web development."),p.createElement(U5,null,c5.map((e,t)=>p.createElement(W5,{key:t},p.createElement(H5,{initial:{opacity:0,x:-15},whileInView:{opacity:1,x:0,transition:{duration:.3,delay:0,ease:"easeInOut"}}},e.category),p.createElement(G5,null,e.skills.map((n,r)=>p.createElement(K5,{key:r,initial:{opacity:0,scale:.7},whileInView:{opacity:1,scale:1,transition:{duration:.5,delay:r*.05,ease:"easeInOut"}}},p.createElement(Y5,{src:n.image,alt:n.name,title:n.name}),p.createElement(Q5,null,n.name)))))))),J5=S.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`,Z5=S.div`
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({final:e})=>e?"120%;":"min-content"};
  }
`,q5=S.div`
  background: #0f1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${e=>e.active===e.index?"opacity: 1":"opacity: 0.5"};
  }
`,eE=S.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`,tE=S.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${e=>e.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`,Vp=S.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${e=>e.type==="institute"?"rgba(255, 255, 255)":"rgba(255, 255, 255, 0.5)"};
  padding-right: 16px;
  height: 50px ;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`,nE=S.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`,rE=S.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${e=>e.active===e.index?"1":".33"};
  transform: ${e=>e.active===e.index?"scale(1.6)":"scale(1)"};

  &:focus {
    outline: none;
  }
`,iE=S.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;S.span`
  cursor: pointer;
`;const oE=qr.length,sE=()=>{const[e,t]=D.useState(0),n=D.useRef(),r=(s,a)=>s==null?void 0:s.scrollTo({left:a,behavior:"smooth"}),i=(s,a)=>{if(s.preventDefault(),n.current){const l=Math.floor(n.current.scrollWidth*.7*(a/qr.length));r(n.current,l)}},o=()=>{if(n.current){const s=Math.round(n.current.scrollLeft/(n.current.scrollWidth*.7)*qr.length);t(s)}};return D.useEffect(()=>{const s=()=>{r(n.current,0)};window.addEventListener("resize",s)},[]),p.createElement(Wn,{id:"education"},p.createElement(Yi,null),p.createElement(Ki,{main:!0},"Education"),p.createElement(J5,{ref:n,onScroll:o},p.createElement(p.Fragment,null,qr.map((s,a)=>p.createElement(Z5,{key:a,final:a===oE-1},p.createElement(q5,{index:a,id:`carousel__item-${a}`,active:e,onClick:l=>i(l,a)},p.createElement(eE,null,`${s.year}`,p.createElement(tE,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)",fillOpacity:"0.33"}),p.createElement("defs",null,p.createElement("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"white"}),p.createElement("stop",{offset:"0.79478",stopColor:"white",stopOpacity:"0"}))))),p.createElement(Vp,null,s.designation),p.createElement(Vp,{type:"institute"},s.institute)))))),p.createElement(nE,null,qr.map((s,a)=>p.createElement(rE,{key:a,index:a,active:e,onClick:l=>i(l,a),type:"button"},p.createElement(iE,{active:e})))))},aE=S.img`
  width: 100px;
`,lE=S.img`
  width: 90%;
  margin-top: 5%;
`,uE=S.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  align-items: start;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`,cE=S(V.div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
  }
`,dE=S.div`
  z-index: 20;
  width: 100%;
  padding-top: 10px;
`,fE=S.h3`
  font-weight: 300px;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${e=>e.title?"3rem":"2rem"};
`,pE=S.div`
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`,hE=S(V.div)`
  width: 240px;
  height: 40px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% auto 5% auto;
  color: #fff;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  cursor: pointer;

  @media ${e=>e.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 90%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 5%;
  }
`,mE=S.div`
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.5s ease;
    overflow-x: ${e=>e&&"hidden"};
`,gE=({children:e})=>{const t=D.useRef(null),[n,r]=D.useState(!1);return D.useEffect(()=>{let i=null;const o=t.current,s=()=>{t.current&&(o.scrollLeft+=2)};return n?i=setInterval(()=>s(),15):(t.current.scrollLeft=0,clearInterval(i)),()=>clearInterval(i)},[n]),p.createElement(mE,{scrollable:!0,ref:t,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},e)},yE=()=>{const[e,t]=D.useState(null),[n,r]=D.useState(null);return p.createElement(Wn,{id:"certificates"},p.createElement(Yi,null),p.createElement(Ki,{main:!0},"Certificates"),p.createElement(Jc,{onClose:()=>{t(null)},show:e},p.createElement(lE,{src:e,alt:e,title:`Visit ${e}`}),p.createElement(hE,{whileHover:{scale:1.2,transition:{duration:.2,ease:"easeInOut"}},onClick:()=>window.open(n,"_blank","noopener,noreferrer"),target:"_blank",certificate:e},"View Certificate")),p.createElement(uE,null,u5.map((i,o)=>p.createElement(cE,{initial:{opacity:0,scale:.7},whileInView:{opacity:1,scale:1,transition:{duration:.3,delay:o*.05,ease:"easeInOut"}},whileHover:{scale:1.1,transition:{duration:.3,ease:"easeInOut"}},title:`View ${i.title} Certificate`,key:o,onClick:()=>{t(i.image),r(i.link)}},p.createElement(aE,{src:i.logo,alt:i.title}),p.createElement(pE,{className:"card-info"}," ",p.createElement(dE,null,p.createElement(gE,null,p.createElement(fE,null,i.title))),i.issuedBy,p.createElement("br",null),i.issuedOn)))))};function vE(e){return Hn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"},child:[]}]})(e)}function xE(e){return Hn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"},child:[]}]})(e)}function wE(e){return Hn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z"},child:[]},{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z"},child:[]}]})(e)}const SE=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 40px;
  max-width: 100%;
`,kE=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,EE=S.div`
  min-width: 160px;
`,CE=S.a`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 20px;
`,PE=S.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`,TE=S.div`
  min-width: 160px;
  @media ${e=>e.theme.breakpoints.lg} {
    min-width: 100px;
  }
`,Yn=S.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`,bE=S.span`
  font-size: 2rem;
`;S.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${e=>e.theme.breakpoints.md} {
    padding: 0;
  }
`;S(wE)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({isOpen:e})=>e?"1":".75"};
  transform: ${({isOpen:e})=>e?"scaleY(-1)":"scaleY(1)"};

  &:hover {
    opacity: 1;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;const iy=S(V.a)`
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`,AE=S(V.img)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;

  @media ${e=>e.theme.breakpoints.sm} {
    height: 3rem;
    width: 3rem;
  }
`;S.div`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;const DE=S.section`
  width: 100%;
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  /* box-sizing: content-box; */

  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`,LE=S.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;

  @media ${e=>e.theme.breakpoints.sm} {
    height: 3rem;
    width: 3rem;
  }
`,Np=S.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`,IE=S.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${e=>e.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`,ME=S.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${e=>e.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`,RE=S.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`,$E=S.div`
  display: flex;
  align-items: center;

  @media ${e=>e.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`,_E=S.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${e=>e.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${e=>e.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`,jp=S.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`,Fp=S.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`,OE=()=>p.createElement(DE,null,p.createElement(_E,null,p.createElement(jp,null,p.createElement(Fp,null,"Call"),p.createElement(Np,{href:`tel:${He.phone.substring(1)}`},He.phone)),p.createElement(jp,null,p.createElement(Fp,null,"Email"),p.createElement(Np,{href:`mailto:${He.email}`},He.email))),p.createElement(IE,null,p.createElement(ME,null,p.createElement(RE,null,"Turning Digital Dreams into Reality")),p.createElement($E,null,hi.map((e,t)=>p.createElement(iy,{key:t,href:e.link,target:"_blank",title:e.name},p.createElement(LE,{src:e.image,alt:e.name}))))));function zE(e){return Hn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"},child:[]}]})(e)}const VE=S(V.div)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  animation: modal 0.2s linear;
`,NE=S(V.div)`
  opacity: 1;
  background-color: #fff;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 0;
  cursor: default;

  @media ${e=>e.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    top: 24px;
  }
`,Za=S.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: 0.3s ease;
  padding: 12px 16px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`,qa=S.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`,el=S.div`
  display: flex;
  flex-direction: column;
`,tl=S.a`
  color: #0f1624;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
`,nl=S.p`
  color: #0f1624;
  opacity: 0.5;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
`,jE=e=>e.show?p.createElement(VE,{onClick:()=>e.onClose()},p.createElement(NE,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0,transition:{duration:.3,delay:0,ease:"easeInOut"}},exit:{opacity:0,y:30},onClick:t=>t.stopPropagation()},p.createElement(Za,{onClick:()=>navigator.clipboard.writeText(He.phone),title:"Click to copy Contact no. to clipboard"},p.createElement(qa,null,p.createElement(vE,{color:"black"})),p.createElement(el,null,p.createElement(tl,{href:`tel:${He.phone.substring(1)}`},"Phone: ",He.phone," "),p.createElement(nl,null,"Let's get together and have a chat?"))),p.createElement(Za,{onClick:()=>navigator.clipboard.writeText(He.email),title:"Click to copy E-mail to clipboard"},p.createElement(qa,null,p.createElement(xE,{color:"black"})),p.createElement(el,null,p.createElement(tl,{href:`mailto:${He.email}`},"Email: ",He.email),p.createElement(nl,null,"If you want to talk to me, send a message and I'll get back"))),p.createElement(Za,{onClick:()=>navigator.clipboard.writeText(He.address),title:"Click to copy Address to clipboard"},p.createElement(qa,null,p.createElement(F5,{color:"black"})),p.createElement(el,null,p.createElement(tl,null,"Address"),p.createElement(nl,null,He.address))))):null;function Bp(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function FE(){const[e,t]=D.useState(Bp());return D.useEffect(()=>{function n(){t(Bp())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const BE=()=>{const[e,t]=D.useState(!1),{width:n}=FE(),r=[0,0,395,442,487,535,579],i=()=>{t(!0)};return p.createElement(SE,null,p.createElement(kE,null,p.createElement(EE,null,p.createElement(CE,{href:"/My-Portfolio/"},p.createElement(zE,{size:"3rem"}),p.createElement(bE,null,"My Portfolio"))),p.createElement(TE,null,hi.map((o,s)=>n>r[s]&&p.createElement(iy,{key:s,href:o.link,target:"_blank",title:o.name},p.createElement(AE,{src:o.image,alt:o.name}))))),n>800&&p.createElement(PE,null,p.createElement("li",{key:"Experience"},p.createElement(Yn,{href:"#experience"},"Experience")),p.createElement("li",{key:"Projects"},p.createElement(Yn,{href:"#projects"},"Projects")),p.createElement("li",{key:"Technologies"},p.createElement(Yn,{href:"#tech"},"Technologies")),p.createElement("li",{key:"Education"},p.createElement(Yn,{href:"#education"},"Education")),p.createElement("li",{key:"Certificates"},p.createElement(Yn,{href:"#certificates"},"Certificates")),p.createElement("li",{key:"Contact"},p.createElement("div",null,p.createElement(Yn,{onClick:i},"Contact"),p.createElement(jE,{onClose:()=>{t(!1)},show:e,setShow:t})))))},UE=S.div`
max-width: 1280px;
width: 100%;
margin: auto;
`,WE=({children:e})=>p.createElement(UE,null,p.createElement(BE,null),p.createElement("main",null,e),p.createElement(OE,null));function HE(e){return Hn({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"},child:[]}]})(e)}S.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;S.div`
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({final:e})=>e?"120%;":"min-content"};
  }
`;S.div`
  background: #0f1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${e=>e.active===e.index?"opacity: 1":"opacity: 0.5"};
  }
`;S.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;S.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${e=>e.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;S.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${e=>e.type==="institute"?"rgba(255, 255, 255)":"rgba(255, 255, 255, 0.5)"};
  padding-right: 16px;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;S.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;S.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${e=>e.active===e.index?"1":".33"};
  transform: ${e=>e.active===e.index?"scale(1.6)":"scale(1)"};

  &:focus {
    outline: none;
  }
`;S.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;S(V.li)`
  margin: auto 15px auto 15px;
  text-align: center;

  @media ${e=>e.theme.breakpoints.sm} {
    width: 33%;
    margin: 0;
  }
`;S.img`
  width: 80px;
  height: 80px;
`;S.div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;const GE=S.ul`
  list-style-type: none;
  margin: 3rem 0;

  @media ${e=>e.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`,KE=S(V.li)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 30px auto;
  padding: 20px;

  @media ${e=>e.theme.breakpoints.lg} {
    padding: 30px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    padding: 20px;
    flex-direction: column;
  }
`,YE=S.img`
  width: 100px;
  height: 100px;

  @media ${e=>e.theme.breakpoints.lg} {
    width: 100px;
    height: 100px;
  }

  @media ${e=>e.theme.breakpoints.md} {
    width: 70px;
    height: 70px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
    margin: 10px auto;
  }
`,QE=S.div`
  width: calc(100% - 120px);

  @media ${e=>e.theme.breakpoints.lg} {
    width: calc(100% - 120px);
  }

  @media ${e=>e.theme.breakpoints.md} {
    width: calc(100% - 80px);
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: calc(100% - 35px);
  }
`,XE=S(V.h4)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    flex-direction: column;
    justify-content: flex-start;
  }
`,JE=S(V.h4)`
  font-weight: 100;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 22px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
  }
`,ZE=S(V.ul)`
  width: 100%;
  list-style: circle inside;
`,qE=S.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  margin-left: 20px;
  font-weight: 700;
  /* display: flex;
  flex-direction: row;
  align-items: center; */

  margin-top: ${e=>e.border_top?"10px":""};

  padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};

  border-top: ${e=>e.border_top?"2px solid rgba(255, 255, 255, 1)":""};

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};
  }
`;S.div``;const Up=S.span`
  font-weight: 100;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  margin: auto 0 auto auto;
  display: flex;
  align-items: center;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 22px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.02em;
    margin: 0;
  }
`,e4=S.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  margin-left: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  margin-top: ${e=>e.border_top?"10px":""};

  padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};

  border-top: ${e=>e.border_top?"2px solid rgba(255, 255, 255, 1)":""};

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.border_top?"10px 20px 5px 0":"5px 20px 5px 0"};
  }
`,t4=()=>{const e=D.useRef(),t=(n,r)=>n==null?void 0:n.scrollTo({left:r,behavior:"smooth"});return D.useEffect(()=>{const n=()=>{t(e.current,0)};window.addEventListener("resize",n)},[]),p.createElement(Wn,{id:"experience"},p.createElement(Yi,null),p.createElement(Ki,{main:!0},"Experience"),p.createElement(GE,null,s5.map((n,r)=>p.createElement(KE,{key:r,initial:{x:-50,opacity:0},whileInView:{x:0,transition:{duration:.5,delay:.3*r},opacity:1}},p.createElement(YE,{src:n.image,alt:n.name,title:n.name}),p.createElement(QE,null,p.createElement(XE,null,n.company,p.createElement(Up,null,n.time)),p.createElement(JE,null,n.designation,p.createElement(Up,null,p.createElement(HE,{style:{marginRight:"5px"}}),n.location)),p.createElement(ZE,null,n.desc.map((i,o)=>p.createElement(qE,{key:o},i)),p.createElement(e4,{border_top:!0,key:"TechSTack"},p.createElement(Ap,{key:"yash",red:!0},"Tech Stack"," "),":",n.techStack.map((i,o)=>p.createElement(Ap,{key:o},i," ")))))))))};function n4(){return p.createElement(WE,null,p.createElement(Wn,{grid:"true"},p.createElement(p5,null),p.createElement(Dv,null)),p.createElement(t4,null),p.createElement(B5,null),p.createElement(X5,null),p.createElement(sE,null),p.createElement(yE,null))}const r4={fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}};var Rn={};const i4=ly(_x);Object.defineProperty(Rn,"__esModule",{value:!0});Rn.default=Rn.Normalize=sy=Rn.normalize=void 0;var oy=i4,Zc=(0,oy.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']),sy=Rn.normalize=Zc,ay=(0,oy.createGlobalStyle)(Zc);Rn.Normalize=ay;ay.displayName="Normalize";var o4=Zc;Rn.default=o4;const s4=bg`
  ${sy};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${e=>e.theme.fonts.main};
    font-size: 1.6rem;
    background: ${e=>e.theme.colors.background1};
    color: ${e=>e.theme.colors.primary1};
    cursor: default;
    width: 100%;
    overflow-x:hidden;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${e=>e.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`,a4=({children:e})=>p.createElement(Pg,{theme:r4},p.createElement(s4,null),e),l4=rl.createRoot(document.getElementById("root"));l4.render(p.createElement(a4,null,p.createElement(p.StrictMode,null,p.createElement(n4,null))));
