(()=>{var uE=Object.create;var Y_=Object.defineProperty;var hE=Object.getOwnPropertyDescriptor;var fE=Object.getOwnPropertyNames;var dE=Object.getPrototypeOf,pE=Object.prototype.hasOwnProperty;var ns=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var mE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of fE(t))!pE.call(e,s)&&s!==n&&Y_(e,s,{get:()=>t[s],enumerable:!(i=hE(t,s))||i.enumerable});return e};var er=(e,t,n)=>(n=e!=null?uE(dE(e)):{},mE(t||!e||!e.__esModule?Y_(n,"default",{value:e,enumerable:!0}):n,e));var rv=ns(Xt=>{"use strict";var sp=Symbol.for("react.transitional.element"),gE=Symbol.for("react.portal"),_E=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),yE=Symbol.for("react.profiler"),xE=Symbol.for("react.consumer"),SE=Symbol.for("react.context"),ME=Symbol.for("react.forward_ref"),bE=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),TE=Symbol.for("react.activity"),AE=Symbol.for("react.view_transition"),Z_=Symbol.iterator;function wE(e){return e===null||typeof e!="object"?null:(e=Z_&&e[Z_]||e["@@iterator"],typeof e=="function"?e:null)}var $_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tv=Object.assign,ev={};function jr(e,t,n){this.props=e,this.context=t,this.refs=ev,this.updater=n||$_}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nv(){}nv.prototype=jr.prototype;function ap(e,t,n){this.props=e,this.context=t,this.refs=ev,this.updater=n||$_}var rp=ap.prototype=new nv;rp.constructor=ap;tv(rp,jr.prototype);rp.isPureReactComponent=!0;var J_=Array.isArray;function ip(){}var Le={H:null,A:null,T:null,S:null},iv=Object.prototype.hasOwnProperty;function op(e,t,n){var i=n.ref;return{$$typeof:sp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function CE(e,t){return op(e.type,t,e.props)}function lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===sp}function RE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var K_=/\/+/g;function np(e,t){return typeof e=="object"&&e!==null&&e.key!=null?RE(""+e.key):t.toString(36)}function DE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ip,ip):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Qr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case sp:case gE:r=!0;break;case j_:return r=e._init,Qr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+np(e,0):i,J_(s)?(n="",r!=null&&(n=r.replace(K_,"$&/")+"/"),Qr(s,t,n,"",function(c){return c})):s!=null&&(lp(s)&&(s=CE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(K_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(J_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+np(i,l),r+=Qr(i,t,n,a,s);else if(l=wE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+np(i,l++),r+=Qr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Qr(DE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Au(e,t,n){if(e==null)return e;var i=[],s=0;return Qr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function UE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Q_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sv(e){var t=Le.T,n={};n.types=t!==null?t.types:null,Le.T=n;try{var i=e(),s=Le.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ip,Q_)}catch(a){Q_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Le.T=t}}function av(e){var t=Le.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else sv(av.bind(null,e))}var NE={map:Au,forEach:function(e,t,n){Au(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Au(e,function(){t++}),t},toArray:function(e){return Au(e,function(t){return t})||[]},only:function(e){if(!lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Activity=TE;Xt.Children=NE;Xt.Component=jr;Xt.Fragment=_E;Xt.Profiler=yE;Xt.PureComponent=ap;Xt.StrictMode=vE;Xt.Suspense=bE;Xt.ViewTransition=AE;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;Xt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Le.H.useMemoCache(e)}};Xt.addTransitionType=av;Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cacheSignal=function(){return null};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=tv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!iv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return op(e.type,s,i)};Xt.createContext=function(e){return e={$$typeof:SE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:xE,_context:e},e};Xt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)iv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return op(e,a,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:ME,render:e}};Xt.isValidElement=lp;Xt.lazy=function(e){return{$$typeof:j_,_payload:{_status:-1,_result:e},_init:UE}};Xt.memo=function(e,t){return{$$typeof:EE,type:e,compare:t===void 0?null:t}};Xt.startTransition=sv;Xt.unstable_useCacheRefresh=function(){return Le.H.useCacheRefresh()};Xt.use=function(e){return Le.H.use(e)};Xt.useActionState=function(e,t,n){return Le.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return Le.H.useCallback(e,t)};Xt.useContext=function(e){return Le.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return Le.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return Le.H.useEffect(e,t)};Xt.useEffectEvent=function(e){return Le.H.useEffectEvent(e)};Xt.useId=function(){return Le.H.useId()};Xt.useImperativeHandle=function(e,t,n){return Le.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return Le.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return Le.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return Le.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return Le.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return Le.H.useReducer(e,t,n)};Xt.useRef=function(e){return Le.H.useRef(e)};Xt.useState=function(e){return Le.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return Le.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return Le.H.useTransition()};Xt.version="19.3.0"});var zl=ns((mU,ov)=>{"use strict";ov.exports=rv()});var _v=ns(He=>{"use strict";function fp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<wu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function is(e){return e.length===0?null:e[0]}function Ru(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>wu(o,n))l<s&&0>wu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>wu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function wu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}He.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(lv=performance,He.unstable_now=function(){return lv.now()}):(cp=Date,cv=cp.now(),He.unstable_now=function(){return cp.now()-cv});var lv,cp,cv,ws=[],sa=[],LE=1,Ti=null,Cn=3,dp=!1,Fl=!1,Hl=!1,pp=!1,fv=typeof setTimeout=="function"?setTimeout:null,dv=typeof clearTimeout=="function"?clearTimeout:null,uv=typeof setImmediate<"u"?setImmediate:null;function Cu(e){for(var t=is(sa);t!==null;){if(t.callback===null)Ru(sa);else if(t.startTime<=e)Ru(sa),t.sortIndex=t.expirationTime,fp(ws,t);else break;t=is(sa)}}function mp(e){if(Hl=!1,Cu(e),!Fl)if(is(ws)!==null)Fl=!0,to||(to=!0,$r());else{var t=is(sa);t!==null&&gp(mp,t.startTime-e)}}var to=!1,Vl=-1,pv=5,mv=-1;function gv(){return pp?!0:!(He.unstable_now()-mv<pv)}function up(){if(pp=!1,to){var e=He.unstable_now();mv=e;var t=!0;try{t:{Fl=!1,Hl&&(Hl=!1,dv(Vl),Vl=-1),dp=!0;var n=Cn;try{e:{for(Cu(e),Ti=is(ws);Ti!==null&&!(Ti.expirationTime>e&&gv());){var i=Ti.callback;if(typeof i=="function"){Ti.callback=null,Cn=Ti.priorityLevel;var s=i(Ti.expirationTime<=e);if(e=He.unstable_now(),typeof s=="function"){Ti.callback=s,Cu(e),t=!0;break e}Ti===is(ws)&&Ru(ws),Cu(e)}else Ru(ws);Ti=is(ws)}if(Ti!==null)t=!0;else{var a=is(sa);a!==null&&gp(mp,a.startTime-e),t=!1}}break t}finally{Ti=null,Cn=n,dp=!1}t=void 0}}finally{t?$r():to=!1}}}var $r;typeof uv=="function"?$r=function(){uv(up)}:typeof MessageChannel<"u"?(hp=new MessageChannel,hv=hp.port2,hp.port1.onmessage=up,$r=function(){hv.postMessage(null)}):$r=function(){fv(up,0)};var hp,hv;function gp(e,t){Vl=fv(function(){e(He.unstable_now())},t)}He.unstable_IdlePriority=5;He.unstable_ImmediatePriority=1;He.unstable_LowPriority=4;He.unstable_NormalPriority=3;He.unstable_Profiling=null;He.unstable_UserBlockingPriority=2;He.unstable_cancelCallback=function(e){e.callback=null};He.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pv=0<e?Math.floor(1e3/e):5};He.unstable_getCurrentPriorityLevel=function(){return Cn};He.unstable_next=function(e){switch(Cn){case 1:case 2:case 3:var t=3;break;default:t=Cn}var n=Cn;Cn=t;try{return e()}finally{Cn=n}};He.unstable_requestPaint=function(){pp=!0};He.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Cn;Cn=e;try{return t()}finally{Cn=n}};He.unstable_scheduleCallback=function(e,t,n){var i=He.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:LE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,fp(sa,e),is(ws)===null&&e===is(sa)&&(Hl?(dv(Vl),Vl=-1):Hl=!0,gp(mp,n-i))):(e.sortIndex=s,fp(ws,e),Fl||dp||(Fl=!0,to||(to=!0,$r()))),e};He.unstable_shouldYield=gv;He.unstable_wrapCallback=function(e){var t=Cn;return function(){var n=Cn;Cn=t;try{return e.apply(this,arguments)}finally{Cn=n}}}});var yv=ns((_U,vv)=>{"use strict";vv.exports=_v()});var Mv=ns(Rn=>{"use strict";var OE=zl();function Sv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function aa(){}var Gn={d:{f:aa,r:function(){throw Error(Sv(522))},D:aa,C:aa,L:aa,m:aa,X:aa,S:aa,M:aa},p:0,findDOMNode:null},IE=Symbol.for("react.portal"),PE=Symbol.for("react.recoverable"),xv=Symbol.for("react.optimistic_key");function BE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:IE,key:i==null?null:i===xv?xv:""+i,children:e,containerInfo:t,implementation:n}}var Gl=OE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Du(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Gn;Rn.browser=function(e){return{$$typeof:PE,_reason:e}};Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Sv(299));return BE(e,t,null,n)};Rn.flushSync=function(e){var t=Gl.T,n=Gn.p;try{if(Gl.T=null,Gn.p=2,e)return e()}finally{Gl.T=t,Gn.p=n,Gn.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Gn.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&Gn.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Gn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Gn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Du(t.as,t.crossOrigin);Gn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Gn.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin);Gn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Du(t.as,t.crossOrigin);Gn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Gn.d.m(e)};Rn.requestFormReset=function(e){Gn.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return Gl.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return Gl.H.useHostTransitionStatus()};Rn.version="19.3.0"});var Tv=ns((yU,Ev)=>{"use strict";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(e){console.error(e)}}bv(),Ev.exports=Mv()});var h1=ns(ff=>{"use strict";var ln=yv(),ux=zl(),zE=Tv();function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function hx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function fx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Av(e){if(Rc(e)!==e)throw Error(Z(188))}function FE(e){var t=e.alternate;if(!t){if(t=Rc(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Av(s),e;if(a===i)return Av(s),t;a=a.sibling}throw Error(Z(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function px(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=px(e),t!==null)return t;e=e.sibling}return null}function ni(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ni(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Mr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function wv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function mx(e){var t=[null,null],n=Mr(e);return n===null||gx(t,e,n.child,{foundSelf:!1}),t}function gx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&gx(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Z(559))}}var oo=null,Zp=null;function HE(e,t,n){return e===n?!0:e===t?(oo=e,!0):!1}function VE(e,t,n){return e===n?(Zp=e,!1):e===t?(Zp!==null&&(oo=e),!0):!1}function Cv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Jp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ue=Object.assign,GE=Symbol.for("react.element"),Uu=Symbol.for("react.transitional.element"),Jl=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),_x=Symbol.for("react.strict_mode"),Kp=Symbol.for("react.profiler"),vx=Symbol.for("react.consumer"),cs=Symbol.for("react.context"),ag=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),jp=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),ca=Symbol.for("react.lazy"),$p=Symbol.for("react.activity"),kE=Symbol.for("react.legacy_hidden"),XE=Symbol.for("react.memo_cache_sentinel"),tm=Symbol.for("react.view_transition"),WE=Symbol.for("react.recoverable"),Rv=Symbol.iterator;function kl(e){return e===null||typeof e!="object"?null:(e=Rv&&e[Rv]||e["@@iterator"],typeof e=="function"?e:null)}var qE=Symbol.for("react.client.reference");function em(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lo:return"Fragment";case Kp:return"Profiler";case _x:return"StrictMode";case Qp:return"Suspense";case jp:return"SuspenseList";case $p:return"Activity";case tm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Jl:return"Portal";case cs:return e.displayName||"Context";case vx:return(e._context.displayName||"Context")+".Consumer";case ag:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rg:return t=e.displayName||null,t!==null?t:em(e.type)||"Memo";case ca:t=e._payload,e=e._init;try{return em(e(t))}catch{}}return null}var Kl=Array.isArray,Ft=ux.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=zE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},nm=[],co=-1;function gs(e){return{current:e}}function Sn(e){0>co||(e.current=nm[co],nm[co]=null,co--)}function Pe(e,t){co++,nm[co]=e.current,e.current=t}var ds=gs(null),dc=gs(null),va=gs(null),_h=gs(null);function vh(e,t){switch(Pe(va,t),Pe(dc,e),Pe(ds,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ky(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ky(t),e=HM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Sn(ds),Pe(ds,e)}function Do(){Sn(ds),Sn(dc),Sn(va)}function im(e){var t=e.memoizedState;t!==null&&(Ho._currentValue=t.memoizedState,Pe(_h,e)),t=ds.current;var n=HM(t,e.type);t!==n&&(Pe(dc,e),Pe(ds,n))}function yh(e){dc.current===e&&(Sn(ds),Sn(dc)),_h.current===e&&(Sn(_h),Ho._currentValue=cr)}var _p,Dv;function oa(e){if(_p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_p=t&&t[1]||"",Dv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_p+e+Dv}var vp=!1;function yp(e,t){if(!e||vp)return"";vp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(_){var h=_}Reflect.construct(e,[],d)}else{try{d.call()}catch(_){h=_}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(_){h=_}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(_){if(_&&h&&typeof _.stack=="string")return[_.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{vp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?oa(n):""}function YE(e,t){switch(e.tag){case 26:case 27:case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return e.child!==t&&t!==null?oa("Suspense Fallback"):oa("Suspense");case 19:return oa("SuspenseList");case 0:case 15:return yp(e.type,!1);case 11:return yp(e.type.render,!1);case 1:return yp(e.type,!0);case 31:return oa("Activity");case 30:return oa("ViewTransition");default:return""}}function Uv(e){try{var t="",n=null;do t+=YE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var sm=Object.prototype.hasOwnProperty,og=ln.unstable_scheduleCallback,xp=ln.unstable_cancelCallback,ZE=ln.unstable_shouldYield,JE=ln.unstable_requestPaint,di=ln.unstable_now,KE=ln.unstable_getCurrentPriorityLevel,yx=ln.unstable_ImmediatePriority,xx=ln.unstable_UserBlockingPriority,xh=ln.unstable_NormalPriority,QE=ln.unstable_LowPriority,Sx=ln.unstable_IdlePriority,jE=ln.log,$E=ln.unstable_setDisableYieldValue,Dc=null,pi=null;function fa(e){if(typeof jE=="function"&&$E(e),pi&&typeof pi.setStrictMode=="function")try{pi.setStrictMode(Dc,e)}catch{}}var mi=Math.clz32?Math.clz32:nT,tT=Math.log,eT=Math.LN2;function nT(e){return e>>>=0,e===0?32:31-(tT(e)/eT|0)|0}var Nu=256,Lu=262144,Ou=4194304;function sr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=sr(i):(r&=o,r!==0?s=sr(r):n||(n=o&~e,n!==0&&(s=sr(n))))):(o=i&~a,o!==0?s=sr(o):r!==0?s=sr(r):n||(n=i&~e,n!==0&&(s=sr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Uc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-mi(n),s=1<<i;t|=e[i],n&=~s}return t}function iT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(){var e=Ou;return Ou<<=1,(Ou&62914560)===0&&(Ou=4194304),e}function Sp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-mi(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Ex(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Ex(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-mi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Tx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-mi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ax(e,t){var n=t&-t;return n=(n&42)!==0?1:lg(n),(n&(e.suspendedLanes|t))!==0?0:n}function lg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wx(){var e=ve.p;return e!==0?e:(e=window.event,e===void 0?32:l1(e.type))}function Nv(e,t){var n=ve.p;try{return ve.p=e,t()}finally{ve.p=n}}var Hs=Math.random().toString(36).slice(2),yn="__reactFiber$"+Hs,ii="__reactProps$"+Hs,ko="__reactContainer$"+Hs,Lv="__reactEvents$"+Hs,aT="__reactListeners$"+Hs,rT="__reactHandles$"+Hs,Ov="__reactResources$"+Hs,Lc="__reactMarker$"+Hs,Sh="__reactLoad$"+Hs;function Yh(e){delete e[yn],delete e[ii],delete e[aT],delete e[rT]}function or(e){var t;if(t=e[yn])return t;for(var n=e.parentNode;n;){if(t=n[ko]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qy(e);e!==null;){if(n=e[yn])return n;e=Qy(e)}return t}e=n,n=e.parentNode}return null}function Xo(e){if(e=e[yn]||e[ko]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function xo(e){var t=e[Ov];return t||(t=e[Ov]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[Lc]=!0}function Cx(e){e[Sh]=void 0}var Rx=new Set,Dx={};function br(e,t){Uo(e,t),Uo(e+"Capture",t)}function Uo(e,t){for(Dx[e]=t,e=0;e<t.length;e++)Rx.add(t[e])}var oT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iv={},Pv={};function lT(e){return sm.call(Pv,e)?!0:sm.call(Iv,e)?!1:oT.test(e)?Pv[e]=!0:(Iv[e]=!0,!1)}var pe=!1;function Bv(){var e=pe;return pe=!1,e}function ju(e,t,n){if(lT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Iu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ci(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ux(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function am(e){if(!e._valueTracker){var t=Ux(e)?"checked":"value";e._valueTracker=cT(e,t,""+e[t])}}function Nx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ux(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var uT=/[\n"\\]/g;function Di(e){return e.replace(uT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ci(t)):e.value!==""+ci(t)&&(e.value=""+ci(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Mp(e,ci(e.value)):Mp(e,ci(t)):n!=null?Mp(e,ci(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ci(o):e.removeAttribute("name")}function Lx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){am(e);return}n=n!=null?""+ci(n):"",t=t!=null?""+ci(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),am(e)}function Mp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function So(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ci(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ox(e,t,n){if(t!=null&&(t=""+ci(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ci(n):""}function Ix(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(Kl(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ci(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),am(e)}function No(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||hT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Px(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",pe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(zv(e,s,i),pe=!0)}else for(var a in t)t.hasOwnProperty(a)&&zv(e,a,t[a])}function ug(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $u(e){return dT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function us(){}var om=null;function hg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,Mo=null;function Fv(e){var t=Xo(e);if(t&&(e=t.stateNode)){var n=e[ii]||null;t:switch(e=t.stateNode,t.type){case"input":if(rm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Di(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ii]||null;if(!s)throw Error(Z(90));rm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Nx(i)}break t;case"textarea":Ox(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&So(e,!!n.multiple,t,!1)}}}var bp=!1;function Bx(e,t,n){if(bp)return e(t,n);bp=!0;try{var i=e(t);return i}finally{if(bp=!1,(uo!==null||Mo!==null)&&(lf(),uo&&(t=uo,e=Mo,Mo=uo=null,Fv(t),e)))for(t=0;t<e.length;t++)Fv(e[t])}}function pc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ii]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var Os=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lm=!1;if(Os)try{eo={},Object.defineProperty(eo,"passive",{get:function(){lm=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{lm=!1}var eo,da=null,fg=null,th=null;function zx(){if(th)return th;var e,t=fg,n=t.length,i,s="value"in da?da.value:da.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return th=s.slice(e,1<i?1-i:void 0)}function eh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pu(){return!0}function Hv(){return!1}function qn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pu:Hv,this.isPropagationStopped=Hv,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pu)},persist:function(){},isPersistent:Pu}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=qn(La),Oc=Ue({},La,{view:0,detail:0}),pT=qn(Oc),Ep,Tp,Xl,Jh=Ue({},Oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xl&&(Xl&&e.type==="mousemove"?(Ep=e.screenX-Xl.screenX,Tp=e.screenY-Xl.screenY):Tp=Ep=0,Xl=e),Ep)},movementY:function(e){return"movementY"in e?e.movementY:Tp}}),Vv=qn(Jh),mT=Ue({},Jh,{dataTransfer:0}),gT=qn(mT),_T=Ue({},Oc,{relatedTarget:0}),Ap=qn(_T),vT=Ue({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),yT=qn(vT),xT=Ue({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ST=qn(xT),MT=Ue({},La,{data:0}),Gv=qn(MT),bT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ET={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=TT[e])?!!t[e]:!1}function dg(){return AT}var wT=Ue({},Oc,{key:function(e){if(e.key){var t=bT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ET[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dg,charCode:function(e){return e.type==="keypress"?eh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CT=qn(wT),RT=Ue({},Jh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kv=qn(RT),DT=Ue({},La,{submitter:0}),UT=qn(DT),NT=Ue({},Oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dg}),LT=qn(NT),OT=Ue({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),IT=qn(OT),PT=Ue({},Jh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BT=qn(PT),zT=Ue({},La,{newState:0,oldState:0,source:0}),FT=qn(zT),HT=[9,13,27,32],pg=Os&&"CompositionEvent"in window,tc=null;Os&&"documentMode"in document&&(tc=document.documentMode);var VT=Os&&"TextEvent"in window&&!tc,Fx=Os&&(!pg||tc&&8<tc&&11>=tc),Xv=" ",Wv=!1;function Hx(e,t){switch(e){case"keyup":return HT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function GT(e,t){switch(e){case"compositionend":return Vx(t);case"keypress":return t.which!==32?null:(Wv=!0,Xv);case"textInput":return e=t.data,e===Xv&&Wv?null:e;default:return null}}function kT(e,t){if(ho)return e==="compositionend"||!pg&&Hx(e,t)?(e=zx(),th=fg=da=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fx&&t.locale!=="ko"?null:t.data;default:return null}}var XT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!XT[e.type]:t==="textarea"}function Gx(e,t,n,i){uo?Mo?Mo.push(i):Mo=[i]:uo=i,t=kh(t,"onChange"),0<t.length&&(n=new Zh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ec=null,mc=null;function WT(e){BM(e,0)}function Kh(e){var t=Ql(e);if(Nx(t))return e}function Yv(e,t){if(e==="change")return t}var kx=!1;Os&&(Os?(zu="oninput"in document,zu||(wp=document.createElement("div"),wp.setAttribute("oninput","return;"),zu=typeof wp.oninput=="function"),Bu=zu):Bu=!1,kx=Bu&&(!document.documentMode||9<document.documentMode));var Bu,zu,wp;function Zv(){ec&&(ec.detachEvent("onpropertychange",Xx),mc=ec=null)}function Xx(e){if(e.propertyName==="value"&&Kh(mc)){var t=[];Gx(t,mc,e,hg(e)),Bx(WT,t)}}function qT(e,t,n){e==="focusin"?(Zv(),ec=t,mc=n,ec.attachEvent("onpropertychange",Xx)):e==="focusout"&&Zv()}function YT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kh(mc)}function ZT(e,t){if(e==="click")return Kh(t)}function JT(e,t){if(e==="input"||e==="change")return Kh(t)}function KT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _i=typeof Object.is=="function"?Object.is:KT;function gc(e,t){if(_i(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!sm.call(t,s)||!_i(e[s],t[s]))return!1}return!0}function cm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kv(e,t){var n=Jv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Jv(n)}}function Wx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=cm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cm(e.document)}return t}function mg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var QT=Os&&"documentMode"in document&&11>=document.documentMode,fo=null,um=null,nc=null,hm=!1;function Qv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hm||fo==null||fo!==cm(i)||(i=fo,"selectionStart"in i&&mg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nc&&gc(nc,i)||(nc=i,i=kh(um,"onSelect"),0<i.length&&(t=new Zh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=fo)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var po={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Cp={},Yx={};Os&&(Yx=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function Er(e){if(Cp[e])return Cp[e];if(!po[e])return e;var t=po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yx)return Cp[e]=t[n];return e}var Zx=Er("animationend"),Jx=Er("animationiteration"),Kx=Er("animationstart"),jT=Er("transitionrun"),$T=Er("transitionstart"),tA=Er("transitioncancel"),Qx=Er("transitionend"),jx=new Map,fm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fm.push("scrollEnd");function Yi(e,t){jx.set(e,t),br(t,[e])}var eA=0;function Is(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=qi.identifierPrefix;var n=eA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function jv(e){if(e==null||typeof e=="string")return e;var t=null,n=Ro;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Vs(e,t){return e=jv(e),t=jv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Mh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wi=[],mo=0,gg=0;function Qh(){for(var e=mo,t=gg=mo=0;t<e;){var n=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var s=wi[t];wi[t++]=null;var a=wi[t];if(wi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&$x(n,s,a)}}function jh(e,t,n,i){wi[mo++]=e,wi[mo++]=t,wi[mo++]=n,wi[mo++]=i,gg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function _g(e,t,n,i){return jh(e,t,n,i),bh(e)}function Tr(e,t){return jh(e,null,null,t),bh(e)}function $x(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-mi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function bh(e){if(50<fc)throw fc=0,hh=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var go={};function nA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,t,n,i){return new nA(e,t,n,i)}function vg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ns(e,t){var n=e.alternate;return n===null?(n=ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nh(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")vg(i)&&(r=1);else if(typeof i=="string")r=Cw(e,n,ds.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case $p:return e=ti(31,n,t,s),e.elementType=$p,e.lanes=a,e;case lo:return ur(n.children,s,a,t);case _x:r=8,s|=24;break;case Kp:return e=ti(12,n,t,s|2),e.elementType=Kp,e.lanes=a,e;case Qp:return e=ti(13,n,t,s),e.elementType=Qp,e.lanes=a,e;case jp:return e=ti(19,n,t,s),e.elementType=jp,e.lanes=a,e;case kE:case tm:return e=s|32,e=ti(30,n,t,e),e.elementType=tm,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case cs:r=10;break t;case vx:r=9;break t;case ag:r=11;break t;case rg:r=14;break t;case ca:r=16,i=null;break t}r=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=ti(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ur(e,t,n,i){return e=ti(7,e,i,t),e.lanes=n,e}function Rp(e,t,n){return e=ti(6,e,null,t),e.lanes=n,e}function eS(e){var t=ti(18,null,null,0);return t.stateNode=e,t}function Dp(e,t,n){return t=ti(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $v=new WeakMap;function Ui(e,t){if(typeof e=="object"&&e!==null){var n=$v.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Uv(t)},$v.set(e,t),t)}return{value:e,source:t,stack:Uv(t)}}var _o=[],vo=0,Eh=null,_c=0,Ci=[],Ri=0,Ca=null,hs=1,fs="";function Ds(e,t){_o[vo++]=_c,_o[vo++]=Eh,Eh=e,_c=t}function nS(e,t,n){Ci[Ri++]=hs,Ci[Ri++]=fs,Ci[Ri++]=Ca,Ca=e;var i=hs;e=fs;var s=32-mi(i)-1;i&=~(1<<s),n+=1;var a=32-mi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,hs=1<<32-mi(t)+s|n<<s|i,fs=a+e}else hs=1<<a|n<<s|i,fs=e}function $h(e){e.return!==null&&(Ds(e,1),nS(e,1,0))}function yg(e){for(;e===Eh;)Eh=_o[--vo],_o[vo]=null,_c=_o[--vo],_o[vo]=null;for(;e===Ca;)Ca=Ci[--Ri],Ci[Ri]=null,fs=Ci[--Ri],Ci[Ri]=null,hs=Ci[--Ri],Ci[Ri]=null}function iS(e,t){Ci[Ri++]=hs,Ci[Ri++]=fs,Ci[Ri++]=Ca,hs=t.id,fs=t.overflow,Ca=e}var mn=null,Ie=null,$t=!1,ya=null,Ni=!1,dm=Error(Z(519));function Ra(e){var t=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vc(Ui(t,e)),dm}function ty(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[yn]=e,t[ii]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<Mc.length;n++)ne(Mc[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Lx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Ix(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||FM(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||Ra(e,!0)}function Th(e){for(mn=e.return;mn;)switch(mn.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:mn=mn.return}}function no(e){if(e!==mn)return!1;if(!$t)return Th(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qm(e.type,e.memoizedProps)),n=!n),n&&Ie&&Ra(e),Th(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));Ie=Ky(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));Ie=Ky(e)}else t===27?(t=Ie,Oa(e.type)?(e=eg,eg=null,Ie=e):Ie=t):Ie=mn?Li(e.stateNode.nextSibling):null;return!0}function pr(){Ie=mn=null,$t=!1}function Up(){var e=ya;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ya=null),e}function vc(e){ya===null?ya=[e]:ya.push(e)}var pm=gs(null),Ar=null,Us=null;function pa(e,t,n){Pe(pm,t._currentValue),t._currentValue=n}function Ls(e){e._currentValue=pm.current,Sn(pm)}function ih(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function mm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ih(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Z(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ih(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),ih(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function mr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Z(387));if(r=r.memoizedProps,r!==null){var o=s.type;_i(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===_h.current){if(r=s.alternate,r===null)throw Error(Z(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}s=s.return}return e!==null&&mm(t,e,n,i),t.flags|=262144,e!==null}function Ah(e){for(e=e.firstContext;e!==null;){if(!_i(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Ar=e,Us=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return sS(Ar,e)}function Fu(e,t){return Ar===null&&gr(e),sS(e,t)}function sS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Us===null){if(e===null)throw Error(Z(308));Us=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Us=Us.next=t;return n}var iA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},sA=ln.unstable_scheduleCallback,aA=ln.unstable_NormalPriority,$e={$$typeof:cs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xg(){return{controller:new iA,data:new Map,refCount:0}}function Ic(e){e.refCount--,e.refCount===0&&sA(aA,function(){e.controller.abort()})}function ey(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var jl=null;function rA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ic=null,gm=0,_r=0,bo=null;function oA(e,t){if(ic===null){var n=ic=[];gm=0,_r=Zg(),bo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return gm++,t.then(ny,ny),t}function ny(){if(--gm===0&&(jl=null,ic!==null)){bo!==null&&(bo.status="fulfilled");var e=ic;ic=null,_r=0,bo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var iy=Ft.S;Ft.S=function(e,t){if(MM=di(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&oA(e,t),jl!==null)for(var n=Bo;n!==null;)ey(n,jl),n=n.next;if(n=e.types,n!==null){for(var i=Bo;i!==null;)ey(i,n),i=i.next;if(_r!==0){i=jl,i===null&&(i=jl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}iy!==null&&iy(e,t)};var hr=gs(null);function Sg(){var e=hr.current;return e!==null?e:De.pooledCache}function sh(e,t){t===null?Pe(hr,hr.current):Pe(hr,t.pool)}function aS(){var e=Sg();return e===null?null:{parent:$e._currentValue,pool:e}}var Wo=Error(Z(460)),Mg=Error(Z(474)),tf=Error(Z(542)),wh={then:function(){}};function sy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(us,us),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ry(e),e===void 0&&!("reason"in t)?Error(Z(600)):e;default:if(typeof t.status=="string")t.then(us,us);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ry(e),e}throw fr=t,Wo}}function ar(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,Wo):n}}var fr=null;function ay(){if(fr===null)throw Error(Z(459));var e=fr;return fr=null,e}function ry(e){if(e===Wo||e===tf)throw Error(Z(483))}var Eo=null,yc=0;function Hu(e){var t=yc;return yc+=1,Eo===null&&(Eo=[]),rS(Eo,e,t)}function ra(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vu(e,t){throw t.$$typeof===GE?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oS(e){function t(u,g){if(e){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key===null?g.set(u.index,u):g.set(u.key,u),u=u.sibling;return g}function s(u,g){return u=Ns(u,g),u.index=0,u.sibling=null,u}function a(u,g,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=134217730,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,g,y,v){return g===null||g.tag!==6?(g=Rp(y,u.mode,v),g.return=u,g):(g=s(g,y),g.return=u,g)}function l(u,g,y,v){var A=y.type;return A===lo?(u=f(u,g,y.props.children,v,y.key),ra(u,y),u):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ca&&ar(A)===g.type)?(g=s(g,y.props),ra(g,y),g.return=u,g):(g=nh(y.type,y.key,y.props,null,u.mode,v),ra(g,y),g.return=u,g)}function c(u,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Dp(y,u.mode,v),g.return=u,g):(g=s(g,y.children||[]),g.return=u,g)}function f(u,g,y,v,A){return g===null||g.tag!==7?(g=ur(y,u.mode,v,A),g.return=u,g):(g=s(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Rp(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Uu:return y=nh(g.type,g.key,g.props,null,u.mode,y),ra(y,g),y.return=u,y;case Jl:return g=Dp(g,u.mode,y),g.return=u,g;case ca:return g=ar(g),d(u,g,y)}if(Kl(g)||kl(g))return g=ur(g,u.mode,y,null),g.return=u,g;if(typeof g.then=="function")return d(u,Hu(g),y);if(g.$$typeof===cs)return d(u,Fu(u,g),y);Vu(u,g)}return null}function h(u,g,y,v){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return A!==null?null:o(u,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uu:return y.key===A?l(u,g,y,v):null;case Jl:return y.key===A?c(u,g,y,v):null;case ca:return y=ar(y),h(u,g,y,v)}if(Kl(y)||kl(y))return A!==null?null:f(u,g,y,v,null);if(typeof y.then=="function")return h(u,g,Hu(y),v);if(y.$$typeof===cs)return h(u,g,Fu(u,y),v);Vu(u,y)}return null}function p(u,g,y,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(y)||null,o(g,u,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uu:return u=u.get(v.key===null?y:v.key)||null,l(g,u,v,A);case Jl:return u=u.get(v.key===null?y:v.key)||null,c(g,u,v,A);case ca:return v=ar(v),p(u,g,y,v,A)}if(Kl(v)||kl(v))return u=u.get(y)||null,f(g,u,v,A,null);if(typeof v.then=="function")return p(u,g,y,Hu(v),A);if(v.$$typeof===cs)return p(u,g,y,Fu(g,v),A);Vu(g,v)}return null}function _(u,g,y,v){for(var A=null,C=null,w=g,U=g=0,E=null;w!==null&&U<y.length;U++){w.index>U?(E=w,w=null):E=w.sibling;var b=h(u,w,y[U],v);if(b===null){w===null&&(w=E);break}e&&w&&b.alternate===null&&t(u,w),g=a(b,g,U),C===null?A=b:C.sibling=b,C=b,w=E}if(U===y.length)return n(u,w),$t&&Ds(u,U),A;if(w===null){for(;U<y.length;U++)w=d(u,y[U],v),w!==null&&(g=a(w,g,U),C===null?A=w:C.sibling=w,C=w);return $t&&Ds(u,U),A}for(w=i(w);U<y.length;U++)E=p(w,u,U,y[U],v),E!==null&&(e&&(b=E.alternate,b!==null&&w.delete(b.key===null?U:b.key)),g=a(E,g,U),C===null?A=E:C.sibling=E,C=E);return e&&w.forEach(function(R){return t(u,R)}),$t&&Ds(u,U),A}function S(u,g,y,v){if(y==null)throw Error(Z(151));for(var A=null,C=null,w=g,U=g=0,E=null,b=y.next();w!==null&&!b.done;U++,b=y.next()){w.index>U?(E=w,w=null):E=w.sibling;var R=h(u,w,b.value,v);if(R===null){w===null&&(w=E);break}e&&w&&R.alternate===null&&t(u,w),g=a(R,g,U),C===null?A=R:C.sibling=R,C=R,w=E}if(b.done)return n(u,w),$t&&Ds(u,U),A;if(w===null){for(;!b.done;U++,b=y.next())b=d(u,b.value,v),b!==null&&(g=a(b,g,U),C===null?A=b:C.sibling=b,C=b);return $t&&Ds(u,U),A}for(w=i(w);!b.done;U++,b=y.next())b=p(w,u,U,b.value,v),b!==null&&(e&&(E=b.alternate,E!==null&&w.delete(E.key===null?U:E.key)),g=a(b,g,U),C===null?A=b:C.sibling=b,C=b);return e&&w.forEach(function(B){return t(u,B)}),$t&&Ds(u,U),A}function m(u,g,y,v){if(typeof y=="object"&&y!==null&&y.type===lo&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Uu:t:{for(var A=y.key;g!==null;){if(g.key===A){if(A=y.type,A===lo){if(g.tag===7){n(u,g.sibling),v=s(g,y.props.children),ra(v,y),v.return=u,u=v;break t}}else if(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ca&&ar(A)===g.type){n(u,g.sibling),v=s(g,y.props),ra(v,y),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}y.type===lo?(v=ur(y.props.children,u.mode,v,y.key),ra(v,y),v.return=u,u=v):(v=nh(y.type,y.key,y.props,null,u.mode,v),ra(v,y),v.return=u,u=v)}return r(u);case Jl:t:{for(A=y.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),v=s(g,y.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=Dp(y,u.mode,v),v.return=u,u=v}return r(u);case ca:return y=ar(y),m(u,g,y,v)}if(Kl(y))return _(u,g,y,v);if(kl(y)){if(A=kl(y),typeof A!="function")throw Error(Z(150));return y=A.call(y),S(u,g,y,v)}if(typeof y.then=="function")return m(u,g,Hu(y),v);if(y.$$typeof===cs)return m(u,g,Fu(u,y),v);Vu(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),v=s(g,y),v.return=u,u=v):(n(u,g),v=Rp(y,u.mode,v),v.return=u,u=v),r(u)):n(u,g)}return function(u,g,y,v){try{yc=0;var A=m(u,g,y,v);return Eo=null,A}catch(w){if(w===Wo||w===tf)throw w;var C=ti(29,w,null,u.mode);return C.lanes=v,C.return=u,C}}}var vr=oS(!0),lS=oS(!1),ua=!1;function bg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=bh(e),$x(e,null,n),t}return jh(e,i,t,n),bh(e)}function sc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tx(e,n)}}function Np(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var vm=!1;function ac(){if(vm){var e=bo;if(e!==null)throw e}}function rc(e,t,n,i){vm=!1;var s=e.updateQueue;ua=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(se&h)===h:(i&h)===h){h!==0&&h===_r&&(vm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;h=t;var m=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(m,d,h);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break t;d=Ue({},d,h);break t;case 2:ua=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Na|=r,e.lanes=r,e.memoizedState=d}}function cS(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function uS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cS(n[e],t)}var Da=gs(null),Ch=gs(0);function oy(e,t){e=Fs,Pe(Ch,e),Pe(Da,t),Fs=e|t.baseLanes}function ym(){Pe(Ch,Fs),Pe(Da,Da.current)}function Eg(){Fs=Ch.current,Sn(Da),Sn(Ch)}var En=gs(null),Dn=null;function Ma(e){var t=e.alternate;Pe(Mn,Mn.current&1),Pe(En,e),Dn===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Dn=e)}function xm(e){Pe(Mn,Mn.current),Pe(En,e),Dn===null&&(Dn=e)}function hS(e){e.tag===22?(Pe(Mn,Mn.current),Pe(En,e),Dn===null&&(Dn=e)):ba()}function ba(){Pe(Mn,Mn.current),Pe(En,En.current)}function ui(e){Sn(En),Dn===e&&(Dn=null),Sn(Mn)}var Mn=gs(0);function xc(e,t){Pe(En,En.current),Pe(Mn,t)}function Tg(e){Sn(Mn),Sn(En),Dn===e&&(Dn=null)}function Rh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||tg(n)||jg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ps=0,Zt=null,we=null,je=null,Dh=!1,To=!1,yr=!1,Uh=0,Sc=0,Ao=null,cA=0;function Ye(){throw Error(Z(321))}function Ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_i(e[n],t[n]))return!1;return!0}function wg(e,t,n,i,s,a){return Ps=a,Zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ft.H=e===null||e.memoizedState===null?GS:kS,yr=!1,a=n(i,s),yr=!1,To&&(a=dS(t,n,i,s)),fS(e),a}function fS(e){Ft.H=Nh;var t=we!==null&&we.next!==null;if(Ps=0,je=we=Zt=null,Dh=!1,Sc=0,Ao=null,t)throw Error(Z(300));e===null||tn||(e=e.dependencies,e!==null&&Ah(e)&&(tn=!0))}function dS(e,t,n,i){Zt=e;var s=0;do{if(To&&(Ao=null),Sc=0,To=!1,25<=s)throw Error(Z(301));if(s+=1,je=we=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ft.H=_A,a=t(n,i)}while(To);return a}function uA(){var e=Ft.H,t=e.useState()[0];return t=typeof t.then=="function"?Pc(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(Zt.flags|=1024),t}function Cg(){var e=Uh!==0;return Uh=0,e}function Rg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Dg(e){if(Dh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dh=!1}Ps=0,je=we=Zt=null,To=!1,Sc=Uh=0,Ao=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Zt.memoizedState=je=e:je=je.next=e,je}function Ke(){if(we===null){var e=Zt.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=je===null?Zt.memoizedState:je.next;if(t!==null)je=t,we=e;else{if(e===null)throw Zt.alternate===null?Error(Z(467)):Error(Z(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},je===null?Zt.memoizedState=je=e:je=je.next=e}return je}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pc(e){var t=Sc;return Sc+=1,Ao===null&&(Ao=[]),e=rS(Ao,e,t),t=Zt,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,Ft.H=t===null||t.memoizedState===null?GS:kS),e}function nf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pc(e);if(e.$$typeof===WE)return;if(e.$$typeof===cs)return xn(e)}throw Error(Z(438,String(e)))}function Ug(e){var t=null,n=Zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ef(),Zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=XE;return t.index++,n}function Bs(e,t){return typeof t=="function"?t(e):t}function ah(e){var t=Ke();return Ng(t,we,e)}function Ng(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(se&d)===d:(Ps&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===_r&&(f=!0);else if((Ps&h)===h){c=c.next,h===_r&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Zt.lanes|=h,Na|=h;d=c.action,yr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Zt.lanes|=d,Na|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!_i(a,e.memoizedState)&&(tn=!0,f&&(n=bo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Lp(e){var t=Ke(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);_i(a,t.memoizedState)||(tn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function pS(e,t,n){var i=Zt,s=Ke(),a=$t;if(a){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var r=!_i((we||s).memoizedState,n);if(r&&(s.memoizedState=n,tn=!0),s=s.queue,Lg(_S.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||je!==null&&(je.memoizedState.tag&1)!==0,Lo(e?9:8,{destroy:void 0},gS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,De===null)throw Error(Z(349));a||(Ps&127)!==0||mS(i,t,n)}return n}function mS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Zt.updateQueue,t===null?(t=ef(),Zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gS(e,t,n,i){t.value=n,t.getSnapshot=i,vS(t)&&yS(e)}function _S(e,t,n){return n(function(){vS(t)&&yS(e)})}function vS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_i(e,n)}catch{return!0}}function yS(e){var t=Tr(e,2);t!==null&&ei(t,e,2)}function Sm(e){var t=Wn();if(typeof e=="function"){var n=e;if(e=n(),yr){fa(!0);try{n()}finally{fa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t}function xS(e,t,n,i){return e.baseState=n,Ng(e,we,typeof i=="function"?i:Bs)}function hA(e,t,n,i,s){if(af(e))throw Error(Z(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ft.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,SS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function SS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ft.T,r={};r.types=a!==null?a.types:null,Ft.T=r;try{var o=n(s,i),l=Ft.S;l!==null&&l(r,o),ly(e,t,o)}catch(c){Mm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ft.T=a}}else try{a=n(s,i),ly(e,t,a)}catch(c){Mm(e,t,c)}}function ly(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){cy(e,t,i)},function(i){return Mm(e,t,i)}):cy(e,t,n)}function cy(e,t,n){t.status="fulfilled",t.value=n,MS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,SS(e,n)))}function Mm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,MS(t),t=t.next;while(t!==i)}e.action=null}function MS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bS(e,t){return t}function uy(e,t){if($t){var n=De.formState;if(n!==null){t:{var i=Zt;if($t){if(Ie){e:{for(var s=Ie,a=Ni;s.nodeType!==8;){if(!a){s=null;break e}if(s=Li(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ie=Li(s.nextSibling),i=s.data==="F!";break t}}Ra(i)}i=!1}i&&(t=n[0])}}return n=Wn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bS,lastRenderedState:t},n.queue=i,n=FS.bind(null,Zt,i),i.dispatch=n,i=Sm(!1),a=Bg.bind(null,Zt,!1,i.queue),i=Wn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=hA.bind(null,Zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function hy(e){var t=Ke();return ES(t,we,e)}function ES(e,t,n){if(t=Ng(e,t,bS)[0],e=ah(Bs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Pc(t)}catch(r){throw r===Wo?tf:r}else i=t;t=Ke();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Zt.flags|=2048,Lo(9,{destroy:void 0},fA.bind(null,s,n),null)),[i,a,e]}function fA(e,t){e.action=t}function fy(e){var t=Ke(),n=we;if(n!==null)return ES(t,n,e);Ke(),t=t.memoizedState,n=Ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Lo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Zt.updateQueue,t===null&&(t=ef(),Zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function TS(){return Ke().memoizedState}function rh(e,t,n,i){var s=Wn();Zt.flags|=e,s.memoizedState=Lo(1|t,{destroy:void 0},n,i===void 0?null:i)}function sf(e,t,n,i){var s=Ke();i=i===void 0?null:i;var a=s.memoizedState.inst;we!==null&&i!==null&&Ag(i,we.memoizedState.deps)?s.memoizedState=Lo(t,a,n,i):(Zt.flags|=e,s.memoizedState=Lo(1|t,a,n,i))}function dy(e,t){rh(8390656,8,e,t)}function Lg(e,t){sf(2048,8,e,t)}function dA(e){Zt.flags|=4;var t=Zt.updateQueue;if(t===null)t=ef(),Zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function AS(e){var t=Ke().memoizedState;return dA({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(Z(440));return t.impl.apply(void 0,arguments)}}function wS(e,t){return sf(4,2,e,t)}function CS(e,t){return sf(4,4,e,t)}function RS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function DS(e,t,n){n=n!=null?n.concat([e]):null,sf(4,4,RS.bind(null,t,e),n)}function Og(){}function US(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ag(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function NS(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ag(t,i[1]))return i[0];if(i=e(),yr){fa(!0);try{e()}finally{fa(!1)}}return n.memoizedState=[i,t],i}function Ig(e,t,n){return n===void 0||(Ps&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=EM(),Zt.lanes|=e,Na|=e,n)}function LS(e,t,n,i){return _i(n,t)?n:Da.current!==null?(e=Ig(e,n,i),_i(e,t)||(tn=!0),e):(Ps&106)===0||(Ps&1073741824)!==0&&(se&261930)===0?(tn=!0,e.memoizedState=n):(e=EM(),Zt.lanes|=e,Na|=e,t)}function OS(e,t,n,i,s){var a=ve.p;ve.p=a!==0&&8>a?a:8;var r=Ft.T,o={};o.types=r!==null?r.types:null,Ft.T=o,Bg(e,!1,t,n);try{var l=s(),c=Ft.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=lA(l,i);oc(e,t,f,gi(e))}else oc(e,t,i,gi(e))}catch(d){oc(e,t,{then:function(){},status:"rejected",reason:d},gi())}finally{ve.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ft.T=r}}function pA(){}function bm(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var s=IS(e).queue;OS(e,s,t,cr,n===null?pA:function(){return PS(e),n(i)})}function IS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:cr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function PS(e){var t=IS(e);t.next===null&&(t=e.alternate.memoizedState),oc(e,t.next.queue,{},gi())}function Pg(){return xn(Ho)}function BS(){return Ke().memoizedState}function zS(){return Ke().memoizedState}function mA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gi();e=xa(n);var i=Sa(t,e,n);i!==null&&(ei(i,t,n),sc(i,t,n)),t={cache:xg()},e.payload=t;return}t=t.return}}function gA(e,t,n){var i=gi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},af(e)?HS(t,n):(n=_g(e,t,n,i),n!==null&&(ei(n,e,i),VS(n,t,i)))}function FS(e,t,n){var i=gi();oc(e,t,n,i)}function oc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(e))HS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,_i(o,r))return jh(e,t,s,0),De===null&&Qh(),!1}catch{}if(n=_g(e,t,s,i),n!==null)return ei(n,e,i),VS(n,t,i),!0}return!1}function Bg(e,t,n,i){if(i={lane:2,revertLane:Zg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},af(e)){if(t)throw Error(Z(479))}else t=_g(e,n,i,2),t!==null&&ei(t,e,2)}function af(e){var t=e.alternate;return e===Zt||t!==null&&t===Zt}function HS(e,t){To=Dh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function VS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tx(e,n)}}var Nh={readContext:xn,use:nf,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye,useEffectEvent:Ye},GS={readContext:xn,use:nf,useCallback:function(e,t){return Wn().memoizedState=[e,t===void 0?null:t],e},useContext:xn,useEffect:dy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rh(4194308,4,RS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rh(4194308,4,e,t)},useInsertionEffect:function(e,t){rh(4,2,e,t)},useMemo:function(e,t){var n=Wn();t=t===void 0?null:t;var i=e();if(yr){fa(!0);try{e()}finally{fa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Wn();if(n!==void 0){var s=n(t);if(yr){fa(!0);try{n(t)}finally{fa(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=gA.bind(null,Zt,e),[i.memoizedState,e]},useRef:function(e){var t=Wn();return e={current:e},t.memoizedState=e},useState:function(e){e=Sm(e);var t=e.queue,n=FS.bind(null,Zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Og,useDeferredValue:function(e,t){var n=Wn();return Ig(n,e,t)},useTransition:function(){var e=Sm(!1);return e=OS.bind(null,Zt,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Zt,s=Wn();if($t){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),De===null)throw Error(Z(349));(se&127)!==0||mS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,dy(_S.bind(null,i,a,e),[e]),i.flags|=2048,Lo(9,{destroy:void 0},gS.bind(null,i,a,n,t),null),n},useId:function(){var e=Wn(),t=De.identifierPrefix;if($t){var n=fs,i=hs;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Uh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=cA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pg,useFormState:uy,useActionState:uy,useOptimistic:function(e){var t=Wn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bg.bind(null,Zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ug,useCacheRefresh:function(){return Wn().memoizedState=mA.bind(null,Zt)},useEffectEvent:function(e){var t=Wn(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},kS={readContext:xn,use:nf,useCallback:US,useContext:xn,useEffect:Lg,useImperativeHandle:DS,useInsertionEffect:wS,useLayoutEffect:CS,useMemo:NS,useReducer:ah,useRef:TS,useState:function(){return ah(Bs)},useDebugValue:Og,useDeferredValue:function(e,t){var n=Ke();return LS(n,we.memoizedState,e,t)},useTransition:function(){var e=ah(Bs)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Pc(e),t]},useSyncExternalStore:pS,useId:BS,useHostTransitionStatus:Pg,useFormState:hy,useActionState:hy,useOptimistic:function(e,t){var n=Ke();return xS(n,we,e,t)},useMemoCache:Ug,useCacheRefresh:zS,useEffectEvent:AS},_A={readContext:xn,use:nf,useCallback:US,useContext:xn,useEffect:Lg,useImperativeHandle:DS,useInsertionEffect:wS,useLayoutEffect:CS,useMemo:NS,useReducer:Lp,useRef:TS,useState:function(){return Lp(Bs)},useDebugValue:Og,useDeferredValue:function(e,t){var n=Ke();return we===null?Ig(n,e,t):LS(n,we.memoizedState,e,t)},useTransition:function(){var e=Lp(Bs)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Pc(e),t]},useSyncExternalStore:pS,useId:BS,useHostTransitionStatus:Pg,useFormState:fy,useActionState:fy,useOptimistic:function(e,t){var n=Ke();return we!==null?xS(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ug,useCacheRefresh:zS,useEffectEvent:AS};function Op(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Em={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=gi(),s=xa(i);s.payload=t,n!=null&&(s.callback=n),t=Sa(e,s,i),t!==null&&(ei(t,e,i),sc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=gi(),s=xa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Sa(e,s,i),t!==null&&(ei(t,e,i),sc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gi(),i=xa(n);i.tag=2,t!=null&&(i.callback=t),t=Sa(e,i,n),t!==null&&(ei(t,e,n),sc(t,e,n))}};function py(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!gc(n,i)||!gc(s,a):!0}function my(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Em.enqueueReplaceState(t,t.state,null)}function xr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ue({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function XS(e){Mh(e)}function WS(e){console.error(e)}function qS(e){Mh(e)}function Lh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function gy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Tm(e,t,n){return n=xa(n),n.tag=3,n.payload={element:null},n.callback=function(){Lh(e,t)},n}function YS(e){return e=xa(e),e.tag=3,e}function ZS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){gy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){gy(t,n,i),typeof s!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function vA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&mr(t,n,s,!0),n=En.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Dn===null?Vh():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===wh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Vp(e,i,s)),!1;case 22:return n.flags|=65536,i===wh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Vp(e,i,s)),!1}throw Error(Z(435,n.tag))}return Vp(e,i,s),Vh(),!1}if($t)return t=En.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==dm&&(e=Error(Z(422),{cause:i}),vc(Ui(e,n)))):(i!==dm&&(t=Error(Z(423),{cause:i}),vc(Ui(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ui(i,n),s=Tm(e.stateNode,i,s),Np(e,s),Ze!==4&&(Ze=2)),!1;var a=Error(Z(520),{cause:i});if(a=Ui(a,n),hc===null?hc=[a]:hc.push(a),Ze!==4&&(Ze=2),t===null)return!0;i=Ui(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Tm(n.stateNode,i,e),Np(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ea===null||!Ea.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=YS(s),ZS(s,e,n,i),Np(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var zg=Error(Z(461)),tn=!1;function rn(e,t,n,i){t.child=e===null?lS(t,null,n,i):vr(t,e.child,n,i)}function _y(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gr(t),i=wg(e,t,n,r,a,s),o=Cg(),e!==null&&!tn?(Rg(e,t,s),zs(e,t,s)):($t&&o&&$h(t),t.flags|=1,rn(e,t,i,s),t.child)}function vy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!vg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,JS(e,t,a,i,s)):(e=nh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Hg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:gc,n(r,i)&&e.ref===t.ref)return zs(e,t,s)}return t.flags|=1,e=Ns(a,i),e.ref=t.ref,e.return=t,t.child=e}function JS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(gc(a,i)&&e.ref===t.ref)if(tn=!1,t.pendingProps=i=a,Hg(e,s))(e.flags&131072)!==0&&(tn=!0);else return t.lanes=e.lanes,zs(e,t,s)}return Am(e,t,n,i,s)}function KS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return yy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sh(t,a!==null?a.cachePool:null),a!==null?oy(t,a):ym(),hS(t);else return i=t.lanes=536870912,yy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(sh(t,a.cachePool),oy(t,a),ba(),t.memoizedState=null):(e!==null&&sh(t,null),ym(),ba());return rn(e,t,s,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yy(e,t,n,i,s){var a=Sg();return a=a===null?null:{parent:$e._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&sh(t,null),ym(),hS(t),e!==null&&mr(e,t,i,!0),t.childLanes=s,null}function oh(e,t){return t=rf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xy(e,t,n){return vr(t,e.child,null,n),e=oh(t,t.pendingProps),e.flags|=2,ui(t),t.memoizedState=null,e}function yA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($t){if(i.mode==="hidden")return e=oh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},lc(null,e);if(xm(t),(e=Ie)?(e=KM(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:hs,overflow:fs}:null,retryLane:536870912,hydrationErrors:null},n=eS(e),n.return=t,t.child=n,mn=t,Ie=null)):e=null,e===null)throw Ra(t);return t.lanes=536870912,null}return oh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(xm(t),s)if(t.flags&256)t.flags&=-257,t=xy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Z(558));else if(tn||mr(e,t,n,!1),s=(n&e.childLanes)!==0,tn||s){if(Da.current===null){if(i=De,i!==null&&(r=Ax(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Tr(e,r),ei(i,e,r),zg;Vh()}t=xy(e,t,n)}else e=a.treeContext,Ie=Li(r.nextSibling),mn=t,$t=!0,ya=null,Ni=!1,e!==null&&iS(t,e),t=oh(t,i),t.flags|=134221824;return t}return e=Ns(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function so(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Am(e,t,n,i,s){return gr(t),n=wg(e,t,n,i,void 0,s),i=Cg(),e!==null&&!tn?(Rg(e,t,s),zs(e,t,s)):($t&&i&&$h(t),t.flags|=1,rn(e,t,n,s),t.child)}function Sy(e,t,n,i,s,a){return gr(t),t.updateQueue=null,n=dS(t,i,n,s),fS(e),i=Cg(),e!==null&&!tn?(Rg(e,t,a),zs(e,t,a)):($t&&i&&$h(t),t.flags|=1,rn(e,t,n,a),t.child)}function My(e,t,n,i,s){if(gr(t),t.stateNode===null){var a=go,r=n.contextType;typeof r=="object"&&r!==null&&(a=xn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Em,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},bg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?xn(r):go,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Op(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Em.enqueueReplaceState(a,a.state,null),rc(t,i,a,s),ac(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=xr(n,o);a.props=l;var c=a.context,f=n.contextType;r=go,typeof f=="object"&&f!==null&&(r=xn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&my(t,a,i,r),ua=!1;var h=t.memoizedState;a.state=h,rc(t,i,a,s),ac(),c=t.memoizedState,o||h!==c||ua?(typeof d=="function"&&(Op(t,n,d,i),c=t.memoizedState),(l=ua||py(t,n,l,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,_m(e,t),r=t.memoizedProps,f=xr(n,r),a.props=f,d=t.pendingProps,h=a.context,c=n.contextType,l=go,typeof c=="object"&&c!==null&&(l=xn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&my(t,a,i,l),ua=!1,h=t.memoizedState,a.state=h,rc(t,i,a,s),ac();var p=t.memoizedState;r!==d||h!==p||ua||e!==null&&e.dependencies!==null&&Ah(e.dependencies)?(typeof o=="function"&&(Op(t,n,o,i),p=t.memoizedState),(f=ua||py(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&Ah(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,so(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,n,s)):rn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=zs(e,t,s),e}function by(e,t,n,i){return pr(),t.flags|=256,rn(e,t,n,i),t.child}var wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cm(e){return{baseLanes:e,cachePool:aS()}}function Rm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=fi),e}function QS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(s?Ma(t):ba(),(e=Ie)?(e=KM(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:hs,overflow:fs}:null,retryLane:536870912,hydrationErrors:null},n=eS(e),n.return=t,t.child=n,mn=t,Ie=null)):e=null,e===null)throw Ra(t);return jg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ba(),s=t.mode,a=rf({mode:"hidden",children:a},s),i=ur(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Cm(n),i.childLanes=Rm(e,r,n),t.memoizedState=wm,lc(null,i)):(Ma(t),Fg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return xA(e,t,a,r,i,l,o,n)}return s?(ba(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ns(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ns(l,s):(s=ur(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,lc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Cm(n):(a=s.cachePool,a!==null?(o=$e._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=aS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Rm(e,r,n),t.memoizedState=wm,lc(e.child,i)):(Ma(t),n=e.child,e=n.sibling,n=Ns(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Fg(e,t){return t=rf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rf(e,t){return e=ti(22,e,null,t),e.lanes=0,e}function Gu(e,t,n){return vr(t,e.child,null,n),e=Fg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ma(t),t.flags&=-257,Gu(e,t,o)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,null):(ba(),a=s.fallback,r=t.mode,s=rf({mode:"visible",children:s.children},r),a=ur(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,vr(t,e.child,null,o),s=t.child,s.memoizedState=Cm(o),s.childLanes=Rm(e,i,o),t.memoizedState=wm,lc(null,s));if(Ma(t),jg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Z(419)),s.stack="",s.digest=i,vc({value:s,source:null,stack:null})),Gu(e,t,o)}if(tn||mr(e,t,o,!1),i=(o&e.childLanes)!==0,tn||i){if(Da.current!==null)return Gu(e,t,o);if(i=De,i!==null&&(s=Ax(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Tr(e,s),ei(i,e,s),zg;return tg(a)||Vh(),Gu(e,t,o)}return tg(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ie=Li(a.nextSibling),mn=t,$t=!0,ya=null,Ni=!1,e!==null&&iS(t,e),t=Fg(t,s.children),t.flags|=134221824,t)}function Ey(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ih(e.return,t,n)}function Ty(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Rh(n)===null&&(t=e),e=e.sibling}return t}function ku(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ip(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Dm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Mn.current;if(t.flags&128)return xc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,xc(t,r),s==="backwards"&&e!==null?(Ip(e),rn(e,t,i,n),Ip(e)):rn(e,t,i,n),i=$t?_c:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ey(e,n,t);else if(e.tag===19)Ey(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Ty(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ip(t)),ku(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Rh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ku(t,!0,n,null,a,i);break;case"together":ku(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Ty(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ku(t,!1,s,n,a,i)}return t.child}function Ay(e,t,n){var i=t.pendingProps;return pa(t,t.type,i.value),rn(e,t,i.children,n),t.child}function zs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Ns(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ns(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ah(e)))}function SA(e,t,n){switch(t.tag){case 3:vh(t,t.stateNode.containerInfo),pa(t,$e,e.memoizedState.cache),pr();break;case 27:case 5:im(t);break;case 4:vh(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ma(t),t.flags|=128,null;i=mr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?QS(e,t,n):(Ma(t),e=zs(e,t,n),e!==null?e.sibling:null)}Ma(t);break;case 19:if(t.flags&128)return Dm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(mr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Dm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xc(t,Mn.current),i)break;return null;case 22:return t.lanes=0,KS(e,t,n,t.pendingProps);case 24:pa(t,$e,e.memoizedState.cache)}return zs(e,t,n)}function jS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tn=!0;else{if(!Hg(e,n)&&(t.flags&128)===0)return tn=!1,SA(e,t,n);tn=(e.flags&131072)!==0}else tn=!1,$t&&(t.flags&1048576)!==0&&nS(t,_c,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ar(t.elementType),t.type=e,typeof e=="function")vg(e)?(i=xr(e,i),t.tag=1,t=My(null,t,e,i,n)):(t.tag=0,t=Am(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===ag){t.tag=11,t=_y(null,t,e,i,n);break t}else if(s===rg){t.tag=14,t=vy(null,t,e,i,n);break t}else if(s===cs){t.tag=10,t.type=e,t=Ay(null,t,n);break t}}throw t=em(e)||e,Error(Z(306,t,""))}}return t;case 0:return Am(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=xr(i,t.pendingProps),My(e,t,i,s,n);case 3:t:{if(vh(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,_m(e,t),rc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,pa(t,$e,i),i!==a.cache&&mm(t,[$e],n,!0),ac(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=by(e,t,i,n);break t}else if(i!==s){s=Ui(Error(Z(424)),t),vc(s),t=by(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Li(e.firstChild),mn=t,$t=!0,ya=null,Ni=!0,n=lS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(pr(),i===s){t=zs(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return so(e,t),e===null?(n=$y(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(t.stateNode=VM(t.type,t.pendingProps,va.current,t)):t.memoizedState=$y(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return im(t),e===null&&$t&&(i=t.stateNode=QM(t.type,t.pendingProps,va.current),mn=t,Ni=!0,s=Ie,Oa(t.type)?(eg=s,Ie=Li(i.firstChild)):Ie=s),rn(e,t,t.pendingProps.children,n),so(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((s=i=Ie)&&(i=dw(i,t.type,t.pendingProps,Ni),i!==null?(t.stateNode=i,mn=t,Ie=Li(i.firstChild),Ni=!1,s=!0):s=!1),s||Ra(t)),im(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Qm(s,a)?i=null:r!==null&&Qm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=wg(e,t,uA,null,null,n),Ho._currentValue=s),so(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Ie)&&(n=pw(n,t.pendingProps,Ni),n!==null?(t.stateNode=n,mn=t,Ie=null,e=!0):e=!1),e||Ra(t)),null;case 13:return QS(e,t,n);case 4:return vh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vr(t,null,i,n):rn(e,t,i,n),t.child;case 11:return _y(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,so(e,t),rn(e,t,i,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return Ay(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,gr(t),s=xn(s),i=i(s),t.flags|=1,rn(e,t,i,n),t.child;case 14:return vy(e,t,t.type,t.pendingProps,n);case 15:return JS(e,t,t.type,t.pendingProps,n);case 19:return Dm(e,t,n);case 31:return yA(e,t,n);case 22:return KS(e,t,n,t.pendingProps);case 24:return gr(t),i=xn($e),e===null?(s=Sg(),s===null&&(s=De,a=xg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},bg(t),pa(t,$e,s)):((e.lanes&n)!==0&&(_m(e,t),rc(t,null,null,n),ac()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),pa(t,$e,i)):(i=a.cache,pa(t,$e,i),i!==s.cache&&mm(t,[$e],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:$t&&$h(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:so(e,t),rn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function Rs(e){e.flags|=4}function Pp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?nx(t,i):nx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(wM())e.flags|=8192;else throw fr=wh,Mg}else e.flags&=-16777217}function wy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e1(t))if(wM())e.flags|=8192;else throw fr=wh,Mg}function Xu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bx():536870912,e.lanes|=t,Oo|=t)}function Wl(e,t){if(!$t)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function MA(e,t,n){var i=t.pendingProps;switch(yg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ls($e),Do(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(no(t)?Rs(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Up())),Oe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Rs(t),a!==null?(Oe(t),wy(t,a)):(Oe(t),Pp(t,s,null,i,n))):a?a!==e.memoizedState?(Rs(t),Oe(t),wy(t,a)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Rs(t),Oe(t),Pp(t,s,e,i,n)),null;case 27:if(yh(t),n=va.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Oe(t),t.subtreeFlags&=-33554433,null}e=ds.current,no(t)?ty(t,e):(e=QM(s,i,n),t.stateNode=e,Rs(t))}return Oe(t),t.subtreeFlags&=-33554433,null;case 5:if(yh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Oe(t),t.subtreeFlags&=-33554433,null}if(a=ds.current,no(t))ty(t,a);else{var r=Ec(va.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[yn]=t,a[ii]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(bn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Rs(t)}}return Oe(t),t.subtreeFlags&=-33554433,Pp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=va.current,no(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=mn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[yn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||FM(e.nodeValue,n)),e||Ra(t,!0)}else e=Ec(e).createTextNode(i),e[yn]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=no(t),n!==null){if(e===null){if(!i)throw Error(Z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(557));e[yn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ui(t),t):(ui(t),null);if((t.flags&128)!==0)throw Error(Z(558))}return Oe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=no(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[yn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else s=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ui(t),t):(ui(t),null)}return ui(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xu(t,t.updateQueue),Oe(t),null);case 4:return Do(),e===null&&Jg(t.stateNode.containerInfo),t.flags|=67108864,Oe(t),null;case 10:return Ls(t.type),Oe(t),null;case 19:if(Tg(t),i=t.memoizedState,i===null)return Oe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Wl(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Rh(e),a!==null){for(t.flags|=128,Wl(i,!1),e=a.updateQueue,t.updateQueue=e,Xu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tS(n,e),n=n.sibling;return xc(t,Mn.current&1|2),$t&&Ds(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&di()>Fh&&(t.flags|=128,s=!0,Wl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Rh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Xu(t,e),Wl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!$t)return Oe(t),null}else 2*di()-i.renderingStartTime>Fh&&n!==536870912&&(t.flags|=128,s=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=di(),e.sibling=null,a=Mn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||$t?xc(t,a):(n=a,Pe(En,t),Pe(Mn,n),Dn===null&&(Dn=t)),$t&&Ds(t,i.treeForkCount),e}return Oe(t),null;case 22:case 23:return ui(t),Eg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&Xu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Sn(hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ls($e),Oe(t),null;case 25:return null;case 30:return t.flags|=33554432,Oe(t),null}throw Error(Z(156,t.tag))}function bA(e,t){switch(yg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ls($e),Do(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yh(t),null;case 31:if(t.memoizedState!==null){if(ui(t),t.alternate===null)throw Error(Z(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ui(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Tg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Do(),null;case 10:return Ls(t.type),null;case 22:case 23:return ui(t),Eg(),e!==null&&Sn(hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ls($e),null;case 25:return null;default:return null}}function $S(e,t){switch(yg(t),t.tag){case 3:Ls($e),Do();break;case 26:case 27:case 5:yh(t);break;case 4:Do();break;case 31:t.memoizedState!==null&&ui(t);break;case 13:ui(t);break;case 19:Tg(t);break;case 10:Ls(t.type);break;case 22:case 23:ui(t),Eg(),e!==null&&Sn(hr);break;case 24:Ls($e)}}function Bc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ee(t,t.return,o)}}function Ua(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){Ee(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){Ee(t,t.return,f)}}function tM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uS(t,n)}catch(i){Ee(e,e.return,i)}}}function eM(e,t,n){n.props=xr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function os(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Is(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=WM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new vi(e);ni(e.child,!1,hw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ee(e,t,o)}}function vn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function Oh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)JM(e.stateNode,t[n])}function Cy(e){for(var t=e.return;t!==null&&(Gg(t)&&JM(e.stateNode,t.stateNode),!Vg(t));)t=t.return}function cc(e){for(var t=e.return;t!==null&&(Gg(t)&&fw(e.stateNode,t.stateNode),!Vg(t));)t=t.return}function Vg(e){return e.tag===5||e.tag===3||e.tag===27}function Gg(e){return e&&e.tag===7&&e.stateNode!==null}function Um(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function Bp(e,t,n){try{var i=e.stateNode;YA(i,e.type,n,t),i[ii]=t}catch(s){Ee(e,e.return,s)}}function nM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function zp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||nM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us)),Oh(e,i),pe=!0;else if(s!==4&&(s===27&&(Oh(e,i),i=null,Oa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Nm(e,t,n,i),e=e.sibling;e!==null;)Nm(e,t,n,i),e=e.sibling}function Ih(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Oh(e,i),pe=!0;else if(s!==4&&(s===27&&(Oh(e,i),i=null,Oa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ih(e,t,n,i),e=e.sibling;e!==null;)Ih(e,t,n,i),e=e.sibling}function iM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);bn(t,i,n),t[yn]=e,t[ii]=n}catch(a){Ee(e,e.return,a)}}var Ph=!1,hi=null;function Ry(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ph=!0)}var ls=null;function Dy(){var e=ls;return ls=null,e}var $n=0;function qo(e,t,n,i,s){return $n=0,sM(e.child,t,n,i,s)}function sM(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=jm(r);i.push(o),o.view&&(a=!0)}else a||jm(r).view&&(a=!0);Ph=!0,GM(r,$n===0?t:t+"_"+$n,n),$n++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||sM(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ms(e,t){for(;e!==null;)e.tag===5?kM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ms(e.child,t)),e=e.sibling}function lh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(lh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Z(544));var n=t.name;t=Vs(t.default,t.share),t!=="none"&&(qo(e,n,t,null,!1)||ms(e.child,!1))}e=e.sibling}}function Lm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Is(i,n),a=Vs(i.default,n.paired?i.share:i.enter);a!=="none"?qo(e,s,a,null,!1)?(lh(e),n.paired||t||Io(e,i.onEnter)):ms(e.child,!1):lh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Lm(e,t),e=e.sibling;else lh(e)}function Om(e){if(hi!==null&&hi.size!==0){var t=hi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Vs(n.default,n.share);if(a!=="none"&&(qo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Io(e,n.onShare)):ms(e.child,!1)),t.delete(i),t.size===0)break}}}Om(e)}e=e.sibling}}}function Im(e){if(e.tag===30){var t=e.memoizedProps,n=Is(t,e.stateNode),i=hi!==null?hi.get(n):void 0,s=Vs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(qo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,hi.delete(n),Io(e,t.onShare)):Io(e,t.onExit):ms(e.child,!1)),hi!==null&&Om(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Im(e),e=e.sibling;else hi!==null&&Om(e)}function aM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Is(t,e.stateNode);t=Vs(t.default,t.update),e.flags&=-5,t!=="none"&&qo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&aM(e);e=e.sibling}}function Pm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ms(e.child,!1))}Pm(e)}e=e.sibling}}function ch(e){if(e.tag===30)e.stateNode.paired=null,ms(e.child,!1),Pm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ch(e),e=e.sibling;else Pm(e)}function rM(e){for(e=e.child;e!==null;)e.tag===30?ms(e.child,!1):(e.subtreeFlags&33554432)!==0&&rM(e),e=e.sibling}function kg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&$n<a.length){var c=a[$n],f=jm(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&GM(l,$n===0?n:n+"_"+$n,s),o&&(e.flags&4)!==0||(ls===null&&(ls=[]),ls.push(l,$n===0?i:i+"_"+$n,t.memoizedProps)),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:kg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function oM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Is(n,i),a=Vs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map($A)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;$n=0,s=kg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Io(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&oM(e,t);e=e.sibling}}var fn=!1,Se=!1,ss=!1,Fp=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,dn=null,as=!1,$l=!1,Bh=!1,Bm=!1;function EA(e,t,n){if(e=e.containerInfo,Jm=Vo,e=qx(e),mg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var _;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Km={focusedElem:e,selectionRange:i},Vo=!1,n=(n&335544064)===n,dn=t,t=n?9270:1024;dn!==null;){if(e=dn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Im(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Ry(e),Wu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Im(i),Wu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ry(e),Wu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,dn=i):(n&&aM(e),Wu(n))}}hi=null}function Wu(e){for(;dn!==null;){var t=dn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=xr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ee(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)$m(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":$m(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Is(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Vs(s.default,s.update),s!=="none"&&qo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Z(163))}if(i=t.sibling,i!==null){i.return=t.return,dn=i;break}dn=t.return}}function lM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:rs(e,n),i&4&&Bc(5,n);break;case 1:if(rs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ee(n,n.return,r)}else{var s=xr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ee(n,n.return,r)}}i&64&&tM(n),i&512&&os(n,n.return);break;case 3:if(rs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uS(e,t)}catch(r){Ee(n,n.return,r)}}break;case 27:t===null&&i&4&&iM(n);case 26:case 5:rs(e,n),t===null&&i&4&&Um(n),i&512&&os(n,n.return);break;case 12:rs(e,n);break;case 31:rs(e,n),i&4&&fM(e,n);break;case 13:rs(e,n),i&4&&dM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=PA.bind(null,n),mw(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){var a=t!==null&&t.memoizedState!==null||Se;t=fn,s=Se,fn=i,(Se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),ki(e,n,i)):rs(e,n),fn=t,Se=s}break;case 30:rs(e,n),i&512&&os(n,n.return);break;case 7:i&512&&os(n,n.return);default:rs(e,n)}}function zm(e,t){for(e=e.child;e!==null;)cM(e,t),e=e.sibling}function cM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ee(e,e.return,l)}Fm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,pe=!0}catch(l){Ee(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Yy(o,!0):Yy(e.stateNode,!1)}catch(l){Ee(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&zm(e,t);break;default:zm(e,t)}}function Fm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:cM(n,i);break t;case 22:n.memoizedState===null&&Fm(n,i);break t;default:Fm(n,i)}}e=e.sibling}}function uM(e){var t=e.alternate;t!==null&&(e.alternate=null,uM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Qn=!1;function Gi(e,t,n){for(n=n.child;n!==null;)hM(e,t,n),n=n.sibling}function hM(e,t,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 26:Se||vn(n,t),Gi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Se||vn(n,t),cc(n);var i=Ve,s=Qn;Oa(n.type)&&(Ve=n.stateNode,Qn=!1),Gi(e,t,n),jM(n.stateNode,n.type,n.memoizedProps),Ve=i,Qn=s;break;case 5:Se||vn(n,t),cc(n);case 6:if(n.tag===6&&cc(n),i=Ve,s=Qn,Ve=null,Gi(e,t,n),Ve=i,Qn=s,Ve!==null)if(Qn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode),pe=!0}catch(a){Ee(n,t,a)}else try{Ve.removeChild(n.stateNode),pe=!0}catch(a){Ee(n,t,a)}break;case 18:Ve!==null&&(Qn?(e=Ve,qy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Go(e)):qy(Ve,n.stateNode));break;case 4:i=Ve,s=Qn,Ve=n.stateNode.containerInfo,Qn=!0,Gi(e,t,n),Ve=i,Qn=s;break;case 0:case 11:case 14:case 15:Ua(2,n,t),Se||Ua(4,n,t),Gi(e,t,n);break;case 1:Se||(vn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&eM(n,t,i)),Gi(e,t,n);break;case 21:Gi(e,t,n);break;case 22:Se=(i=Se)||n.memoizedState!==null,Gi(e,t,n),Se=i;break;case 30:vn(n,t),Gi(e,t,n);break;case 7:Se||vn(n,t),Gi(e,t,n);break;default:Gi(e,t,n)}}function fM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Go(e)}catch(n){Ee(t,t.return,n)}}}function dM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(n){Ee(t,t.return,n)}}function TA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uy),t;default:throw Error(Z(435,e.tag))}}function qu(e,t){var n=TA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=BA.bind(null,e,i);i.then(s,s)}})}function kn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Oa(l.type)){Ve=l.stateNode,Qn=!1;break t}break;case 5:Ve=l.stateNode,Qn=!1;break t;case 3:case 4:Ve=l.stateNode.containerInfo,Qn=!0;break t}l=l.return}if(Ve===null)throw Error(Z(160));hM(r,o,a),Ve=null,Qn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pM(t,e,n),t=t.sibling}var Xi=null;function pM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}kn(t,e,n),Xn(e),s&4&&(Ua(3,e,e.return),Bc(3,e),Ua(5,e,e.return));break;case 1:kn(t,e,n),Xn(e),s&512&&(Se||i===null||vn(i,i.return)),s&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Xi,kn(t,e,n),Xn(e),s&512&&(Se||i===null||vn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(fn)e.stateNode=VM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Lc]||i[yn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),bn(i,t,n),i[yn]=e,pn(i),t=i;break t;case"link":if(a=ex("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),bn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=ex("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),bn(i,t,n),s.head.appendChild(i);break;default:throw Error(Z(468,t))}i[yn]=e,pn(i),t=i}e.stateNode=t}else fn||ng(a,e.type,e.stateNode);else e.stateNode=tx(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||Se||t.parentNode.removeChild(t)):s.count--,n===null?fn||ng(a,e.type,e.stateNode):tx(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Bp(e,e.memoizedProps,i.memoizedProps);break;case 27:kn(t,e,n),Xn(e),s&512&&(Se||i===null||vn(i,i.return)),i!==null&&s&4&&Bp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ss,ss=!1,kn(t,e,n),ss=a,Xn(e),s&512&&(Se||i===null||vn(i,i.return)),e.flags&32){t=e.stateNode;try{No(t,""),pe=!0}catch(f){Ee(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Bp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Fp=!0);break;case 6:if(kn(t,e,n),Xn(e),s&4){if(e.stateNode===null)throw Error(Z(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,pe=!0}catch(f){Ee(e,e.return,f)}}break;case 3:if(pe=!1,dh=null,a=Xi,Xi=Tc(t.containerInfo),kn(t,e,n),Xi=a,Xn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(f){Ee(e,e.return,f)}Fp&&(Fp=!1,mM(e)),pe=!1;break;case 4:s=ss,ss=fn,i=Bv(),a=Xi,Xi=Tc(e.stateNode.containerInfo),kn(t,e,n),Xn(e),Xi=a,pe&&$l&&(Bh=!0),pe=i,ss=s;break;case 12:kn(t,e,n),Xn(e);break;case 31:kn(t,e,n),Xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,qu(e,t)));break;case 13:kn(t,e,n),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(of=di()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,qu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=fn,l=Se,c=ss;fn=o||a,ss=c||a,Se=l||r,kn(t,e,n),Se=l,ss=c,fn=o,Xn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||fn||Se||(t=r||Se,n=fn,i=Se,fn=a||fn,Se=t,la(e,2),fn=n,Se=i),!a&&ss||zm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,qu(e,n))));break;case 19:kn(t,e,n),Xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,qu(e,t)));break;case 30:s&512&&(Se||i===null||vn(i,i.return)),s=Bv(),a=$l,r=(n&335544064)===n,o=e.memoizedProps,$l=r&&Vs(o.default,o.update)!=="none",kn(t,e,n),Xn(e),r&&i!==null&&pe&&(e.flags|=4),$l=a,pe=s;break;case 21:break;case 7:s&512&&(Se||i===null||vn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:kn(t,e,n),Xn(e)}}function Xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(nM(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Gg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Vg(s))break;s=s.return}var r=i;if(n==null)throw Error(Z(160));switch(n.tag){case 27:var o=n.stateNode,l=zp(e);Ih(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(No(c,""),n.flags&=-33);var f=zp(e);Ih(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=zp(e);Nm(e,h,d,r);break;default:throw Error(Z(161))}}catch(p){Ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;mM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Vo=!0,t.reset(),Vo=!1),e=e.sibling}}function io(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)gM(t,e),t=t.sibling;else oM(t,!1)}function gM(e,t){var n=e.alternate;if(n===null)Lm(e,!1);else switch(e.tag){case 3:if(Bm=as=!1,Dy(),io(t,e),!as&&!Bh){if(e=ls,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];kM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Bm=!0}ls=null;break;case 5:io(t,e);break;case 4:i=as,as=!1,io(t,e),as&&(Bh=!0),as=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Lm(e,!1):io(t,e));break;case 30:i=as,s=Dy(),as=!1,io(t,e),as&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Is(a,r),r=Is(n.memoizedProps,r);var o=Vs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,$n=0,t=kg(e,n,t,r,o,a,!0),$n!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Io(e,e.memoizedProps.onUpdate),ls=s):s!==null&&(s.push.apply(s,ls),ls=s),as=(e.flags&32)!==0?!0:i;break;default:io(t,e)}}function rs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lM(e,t.alternate,t),t=t.sibling}function la(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),la(n,i);break;case 1:vn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&eM(n,n.return,s),la(n,i);break;case 27:(i&2)!==0&&jM(n.stateNode,n.type,n.memoizedProps);case 5:vn(n,n.return),n.tag!==5&&n.tag!==27||cc(n),la(n,i);break;case 6:cc(n);break;case 26:vn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||Se||s.parentNode.removeChild(s),la(n,i);break;case 22:n.memoizedState===null&&la(n,i);break;case 30:vn(n,n.return),la(n,i);break;case 7:vn(n,n.return);default:la(n,i)}e=e.sibling}}function ki(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:ki(s,a,n),Bc(4,a);break;case 1:if(ki(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){Ee(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)cS(c[s],l)}catch(f){Ee(i,i.return,f)}}o&&r&64&&tM(a),os(a,a.return);break;case 27:(n&2)!==0&&iM(a);case 5:a.tag!==5&&a.tag!==27||Cy(a),ki(s,a,n),o&&i===null&&r&4&&Um(a),os(a,a.return);break;case 6:Cy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||fn||ng(Tc(l.ownerDocument),a.type,l),ki(s,a,n),o&&i===null&&r&4&&Um(a),os(a,a.return);break;case 12:ki(s,a,n);break;case 31:ki(s,a,n),o&&r&4&&fM(s,a);break;case 13:ki(s,a,n),o&&r&4&&dM(s,a);break;case 22:a.memoizedState===null&&ki(s,a,n),os(a,a.return);break;case 30:ki(s,a,n),os(a,a.return);break;case 7:os(a,a.return);default:ki(s,a,n)}t=t.sibling}}function Xg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ic(n))}function Wg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ic(e))}function Ai(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)_M(e,t,n,i),t=t.sibling;else s&&rM(t)}function _M(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ch(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ai(e,t,n,i),a&2048&&Bc(9,t);break;case 1:Ai(e,t,n,i);break;case 3:Ai(e,t,n,i),s&&Bm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ic(a)));break;case 12:if(a&2048){Ai(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ee(t,t.return,c)}}else Ai(e,t,n,i);break;case 31:Ai(e,t,n,i);break;case 13:Ai(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&ch(o),r._visibility&2?Ai(e,t,n,i):uc(e,t)):(s&&o!==null&&o.memoizedState!==null&&ch(t),r._visibility&2?Ai(e,t,n,i):(r._visibility|=2,ao(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Xg(o,t);break;case 24:Ai(e,t,n,i),a&2048&&Wg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ms(a.child,!0),ms(t.child,!0))),Ai(e,t,n,i);break;default:Ai(e,t,n,i)}}function ao(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ao(a,r,o,l,s),Bc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?ao(a,r,o,l,s):uc(a,r):(f._visibility|=2,ao(a,r,o,l,s)),s&&c&2048&&Xg(r.alternate,r);break;case 24:ao(a,r,o,l,s),s&&c&2048&&Wg(r.alternate,r);break;default:ao(a,r,o,l,s)}t=t.sibling}}function uc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:uc(n,i),s&2048&&Xg(i.alternate,i);break;case 24:uc(n,i),s&2048&&Wg(i.alternate,i);break;default:uc(n,i)}t=t.sibling}}var rr=8192;function ir(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)vM(e,t,n),e=e.sibling}function vM(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&rr&&(e.memoizedState!==null?Rw(n,Xi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&ix(n,e)));break;case 5:ir(e,t,n),e.flags&rr&&(e=e.stateNode,(t&335544128)===t&&ix(n,e));break;case 3:case 4:var i=Xi;Xi=Tc(e.stateNode.containerInfo),ir(e,t,n),Xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,ir(e,t,n),rr=i):ir(e,t,n));break;case 30:if((e.flags&rr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,hi===null&&(hi=new Map),hi.set(i,s)}ir(e,t,n);break;default:ir(e,t,n)}}function yM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,SM(i,e)}yM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xM(e),e=e.sibling}function xM(e){switch(e.tag){case 0:case 11:case 15:ql(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:ql(e);break;case 12:ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,uh(e)):ql(e);break;default:ql(e)}}function uh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,SM(i,e)}yM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),uh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,uh(t));break;default:uh(t)}e=e.sibling}}function SM(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:Ua(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ic(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var s=i.sibling,a=i.return;if(uM(i),i===n){dn=null;break t}if(s!==null){s.return=a,dn=s;break t}dn=a}}}var AA={getCacheForType:function(e){var t=xn($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xn($e).controller.signal}},wA=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,ie=null,se=0,Me=0,li=null,ma=!1,Yo=!1,qg=!1,Fs=0,Ze=0,Na=0,dr=0,zh=0,fi=0,Oo=0,hc=null,jn=null,Hm=!1,of=0,MM=0,Fh=1/0,Hh=null,Ea=null,ke=0,qi=null,Sr=null,ps=0,Vm=0,Gm=null,bM=null,wo=null,Co=null,Ro=null,fc=0,hh=null;function gi(){return(_e&2)!==0&&se!==0?se&-se:Ft.T!==null?Zg():wx()}function EM(){if(fi===0)if((se&536870912)===0||$t){var e=Lu;Lu<<=1,(Lu&3932160)===0&&(Lu=262144),fi=e}else fi=536870912;return e=En.current,e!==null&&(e.flags|=32),fi}function Io(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=WM(Is(e.memoizedProps,n))),Co===null&&(Co=[]),Co.push(t.bind(null,i))}}function ei(e,t,n){(e===De&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(Po(e,0),ga(e,se,fi,!1)),Nc(e,n),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(dr|=n),Ze===4&&ga(e,se,fi,!1)),_s(e))}function TM(e,t,n){if((_e&6)!==0)throw Error(Z(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Uc(e,t),s=i?DA(e,t):Hp(e,t,!0),a=i;do{if(s===0){Yo&&!i&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!CA(n)){s=Hp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=hc;var l=o.current.memoizedState.isDehydrated;if(l&&(Po(o,r).flags|=256),r=Hp(o,r,!1),r!==2&&r!==6){if(qg&&!l){o.errorRecoveryDisabledLanes|=a,dr|=a,s=4;break t}a=jn,jn=s,a!==null&&(jn===null?jn=a:jn.push.apply(jn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Po(e,0),ga(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ga(i,t,fi,!ma);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(s=of+300-di(),10<s)){if(ga(i,t,fi,!ma),qh(i,0,!0)!==0)break t;ps=t,i.timeoutHandle=Kg(Ny.bind(null,i,n,jn,Hh,Hm,t,fi,dr,Oo,ma,a,"Throttled",-0,0),s);break t}Ny(i,n,jn,Hh,Hm,t,fi,dr,Oo,ma,a,null,-0,0)}}break}while(!0);_s(e)}function Ny(e,t,n,i,s,a,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var _=t.subtreeFlags,S=(a&335544064)===a;if(d=null,(S||_&8192||(_&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:us},hi=null,vM(t,a,d),S&&(_=d,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(_.count++,_.waitingForViewTransition=!0,_=Ac.bind(_),S.finished.then(_,_))),_=(a&62914560)===a?of-di():(a&4194048)===a?MM-di():0,_=Dw(d,_),_!==null)){ps=a,e.cancelPendingCommit=_(Oy.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,h,p)),ga(e,a,r,!c);return}Oy(e,t,a,n,i,s,r,o,l,c,f,d)}function CA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!_i(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,i){t=Mx(e,t),t&=~zh,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-mi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Ex(e,n,t)}function lf(){return(_e&6)===0?(zc(0,!1),!1):!0}function Yg(){if(ie!==null){if(Me===0)var e=ie.return;else e=ie,Us=Ar=null,Dg(e),Eo=null,yc=0,e=ie;for(;e!==null;)$S(e.alternate,e),e=e.return;ie=null}}function Po(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,KA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ps=0,Yg(),De=e,ie=n=Ns(e.current,null),se=t,Me=0,li=null,ma=!1,Yo=Uc(e,t),qg=!1,Oo=fi=zh=dr=Na=Ze=0,jn=hc=null,Hm=!1,Fs=Mx(e,t),Qh(),n}function AM(e,t){Zt=null,Ft.H=Nh,t===Wo||t===tf?(t=ay(),Me=3):t===Mg?(t=ay(),Me=4):Me=t===zg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,li=t,ie===null&&(Ze=1,Lh(e,Ui(t,e.current)))}function wM(){var e=En.current;return e===null?!0:(se&4194048)===se?Dn===null:(se&62914560)===se||(se&536870912)!==0?e===Dn:!1}function CM(){var e=Ft.H;return Ft.H=Nh,e===null?Nh:e}function RM(){var e=Ft.A;return Ft.A=AA,e}function Vh(){Ze=4,ma||(se&4194048)!==se&&En.current!==null||(Yo=!0),(Na&134217727)===0&&(dr&134217727)===0||De===null||ga(De,se,fi,!1)}function Hp(e,t,n){var i=_e;_e|=2;var s=CM(),a=RM();(De!==e||se!==t)&&(Hh=null,Po(e,t)),t=!1;var r=Ze;t:do try{if(Me!==0&&ie!==null){var o=ie,l=li;switch(Me){case 8:Yg(),r=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(t=!0);var c=Me;if(Me=0,li=null,yo(e,o,l,c),n&&Yo){r=0;break t}break;default:c=Me,Me=0,li=null,yo(e,o,l,c)}}RA(),r=Ze;break}catch(f){AM(e,f)}while(!0);return t&&e.shellSuspendCounter++,Us=Ar=null,_e=i,Ft.H=s,Ft.A=a,ie===null&&(De=null,se=0,Qh()),r}function RA(){for(;ie!==null;)DM(ie)}function DA(e,t){var n=_e;_e|=2;var i=CM(),s=RM();De!==e||se!==t?(Hh=null,Fh=di()+500,Po(e,t)):Yo=Uc(e,t);t:do try{if(Me!==0&&ie!==null){t=ie;var a=li;e:switch(Me){case 1:Me=0,li=null,yo(e,t,a,1);break;case 2:case 9:if(sy(a)){Me=0,li=null,Ly(t);break}t=function(){Me!==2&&Me!==9||De!==e||(Me=7),_s(e)},a.then(t,t);break t;case 3:Me=7;break t;case 4:Me=5;break t;case 7:sy(a)?(Me=0,li=null,Ly(t)):(Me=0,li=null,yo(e,t,a,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var o=ie;if(r?e1(r):o.stateNode.complete){Me=0,li=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,cf(c)):ie=null}break e}}Me=0,li=null,yo(e,t,a,5);break;case 6:Me=0,li=null,yo(e,t,a,6);break;case 8:Yg(),Ze=6;break t;default:throw Error(Z(462))}}UA();break}catch(f){AM(e,f)}while(!0);return Us=Ar=null,Ft.H=i,Ft.A=s,_e=n,ie!==null?0:(De=null,se=0,Qh(),Ze)}function UA(){for(;ie!==null&&!ZE();)DM(ie)}function DM(e){var t=jS(e.alternate,e,Fs);e.memoizedProps=e.pendingProps,t===null?cf(e):ie=t}function Ly(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sy(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Sy(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:Dg(t);var i=t;i===mn&&($t?(Th(i),i.tag===5&&i.stateNode!=null&&(Ie=i.stateNode)):(Th(i),$t=!0));default:$S(n,t),t=ie=tS(t,Fs),t=jS(n,t,Fs)}e.memoizedProps=e.pendingProps,t===null?cf(e):ie=t}function yo(e,t,n,i){Us=Ar=null,Dg(t),Eo=null,yc=0;var s=t.return;try{if(vA(e,s,t,n,se)){Ze=1,Lh(e,Ui(n,e.current)),ie=null;return}}catch(a){if(s!==null)throw ie=s,a;Ze=1,Lh(e,Ui(n,e.current)),ie=null;return}t.flags&32768?($t||i===1?e=!0:Yo||(se&536870912)!==0?e=!1:(ma=e=!0,(i===2||i===9||i===3||i===6)&&(i=En.current,i!==null&&i.tag===13&&(i.flags|=16384))),UM(t,e)):cf(t)}function cf(e){var t=e;do{if((t.flags&32768)!==0){UM(t,ma);return}e=t.return;var n=MA(t.alternate,t,Fs);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ze===0&&(Ze=5)}function UM(e,t){do{var n=bA(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Ze=6,ie=null}function Oy(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do uf();while(ke!==0);if((_e&6)!==0)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));e===De&&(ie=De=null,se=0),Sr=t,qi=e,ps=n,Gm=s,bM=i,NA(e,t,n,r,o,l,d)}}function NA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Vm=o,o|=gg,sT(e,n,o,i,s,a),Co=null,(n&335544064)===n?(Ro=rA(e),i=10262):(Ro=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,zA(xh,function(){return qm(),null})):(e.callbackNode=null,e.callbackPriority=0),Ph=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null,s=ve.p,ve.p=2,a=_e,_e|=4;try{EA(e,t,n)}finally{_e=a,ve.p=s,Ft.T=i}}ke=1,Ph?wo=nw(r,e.containerInfo,Ro,km,Xm,OA,Wm,qm,LA,null,null):(km(),Xm(),Wm())}function LA(e){if(ke!==0){var t=qi.onRecoverableError;t(e,{componentStack:null})}}function OA(){ke===3&&(ke=0,gM(Sr,qi),ke=4)}function km(){if(ke===1){ke=0;var e=qi,t=Sr,n=ps,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null;var s=ve.p;ve.p=2;var a=_e;_e|=4;try{$l=Bh=!1,pM(t,e,n),n=Km;var r=qx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Wx(o.ownerDocument.documentElement,o)){if(l!==null&&mg(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),m=l.end===void 0?S:Math.min(l.end,_);!p.extend&&S>m&&(r=m,m=S,S=r);var u=Kv(o,S),g=Kv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Vo=!!Jm,Km=Jm=null}finally{_e=a,ve.p=s,Ft.T=i}}e.current=t,ke=2}}function Xm(){if(ke===2){ke=0;var e=qi,t=Sr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ft.T,Ft.T=null;var i=ve.p;ve.p=2;var s=_e;_e|=4;try{lM(e,t.alternate,t)}finally{_e=s,ve.p=i,Ft.T=n}}ke=3}}function Wm(){if(ke===4||ke===3){ke=0;var e=wo;wo=null,JE();var t=qi,n=Sr,i=ps,s=bM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?ke=5:(ke=0,Sr=qi=null,NM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ea=null),cg(i),n=n.stateNode,pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Dc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ft.T,a=ve.p,ve.p=2,Ft.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ft.T=n,ve.p=a}}if(s=Co,r=Ro,Ro=null,s!==null&&(Co=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ps&3)!==0&&uf(),_s(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===hh?fc++:(fc=0,hh=t):(fc=0,hh=null),zc(0,!1)}}function NM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ic(t)))}function uf(){return wo!==null&&(wo.skipTransition(),wo=null),km(),Xm(),Wm(),qm()}function qm(){if(ke!==5)return!1;var e=qi,t=Vm;Vm=0;var n=cg(ps),i=Ft.T,s=ve.p;try{ve.p=32>n?32:n,Ft.T=null,n=Gm,Gm=null;var a=qi,r=ps;if(ke=0,Sr=qi=null,ps=0,(_e&6)!==0)throw Error(Z(331));var o=_e;if(_e|=4,xM(a.current),_M(a,a.current,r,n),_e=o,zc(0,!1),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Dc,a)}catch{}return!0}finally{ve.p=s,Ft.T=i,NM(e,t)}}function Iy(e,t,n){t=Ui(n,t),t=Tm(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(Nc(e,2),_s(e))}function Ee(e,t,n){if(e.tag===3)Iy(e,e,n);else for(;t!==null;){if(t.tag===3){Iy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ea===null||!Ea.has(i))){e=Ui(n,e),n=YS(2),i=Sa(t,n,2),i!==null&&(ZS(n,i,t,e),Nc(i,2),_s(i));break}}t=t.return}}function Vp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new wA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(qg=!0,s.add(n),e=IA.bind(null,e,t,n),t.then(e,e))}function IA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(se&n)===n&&((Ze===4||Ze===3&&(se&62914560)===se&&300>di()-of)&&(_e&2)===0?Po(e,0):zh|=n,Oo===se&&(Oo=0)),_s(e)}function LM(e,t){t===0&&(t=bx()),e=Tr(e,t),e!==null&&(Nc(e,t),_s(e))}function PA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),LM(e,n)}function BA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),LM(e,n)}function zA(e,t){return og(e,t)}var Bo=null,ro=null,Ym=!1,Gh=!1,Gp=!1,_a=0;function _s(e){e!==ro&&e.next===null&&(ro===null?Bo=ro=e:ro=ro.next=e),Gh=!0,Ym||(Ym=!0,HA())}function zc(e,t){if(!Gp&&Gh){Gp=!0;do for(var n=!1,i=Bo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-mi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Py(i,a))}else a=se,a=qh(i,i===De?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Uc(i,a)||(n=!0,Py(i,a));i=i.next}while(n);Gp=!1}}function FA(){OM()}function OM(){Gh=Ym=!1;var e=0;_a!==0&&JA()&&(e=_a);for(var t=di(),n=null,i=Bo;i!==null;){var s=i.next,a=IM(i,t);a===0?(i.next=null,n===null?Bo=s:n.next=s,s===null&&(ro=n)):(n=i,(e!==0||(a&3)!==0)&&(Gh=!0)),i=s}ke!==0&&ke!==5||zc(e,!1),_a!==0&&(_a=0)}function IM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-mi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=iT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=De,n=se,n=qh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&xp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Uc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&xp(i),cg(n)){case 2:case 8:n=xx;break;case 32:n=xh;break;case 268435456:n=Sx;break;default:n=xh}return i=PM.bind(null,e),n=og(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&xp(i),e.callbackPriority=2,e.callbackNode=null,2}function PM(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var i=se;return i=qh(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(TM(e,i,t),IM(e,di()),e.callbackNode!=null&&e.callbackNode===n?PM.bind(null,e):null)}function Py(e,t){if(uf())return null;TM(e,t,!0)}function HA(){QA(function(){(_e&6)!==0?og(yx,FA):OM()})}function Zg(){if(_a===0){var e=_r;e===0&&(e=Nu,Nu<<=1,(Nu&261888)===0&&(Nu=256)),_a=e}return _a}function By(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$u(e)}function VA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=By((s[ii]||null).action),r=i.submitter;r&&(t=(t=r[ii]||null)?By(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Zh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_a!==0){var l=new FormData(s,r);bm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),bm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Yu=0;Yu<fm.length;Yu++)Zu=fm[Yu],zy=Zu.toLowerCase(),Fy=Zu[0].toUpperCase()+Zu.slice(1),Yi(zy,"on"+Fy);var Zu,zy,Fy,Yu;Yi(Zx,"onAnimationEnd");Yi(Jx,"onAnimationIteration");Yi(Kx,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(jT,"onTransitionRun");Yi($T,"onTransitionStart");Yi(tA,"onTransitionCancel");Yi(Qx,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function BM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Mh(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Mh(f)}s.currentTarget=null,a=l}}}}function ne(e,t){var n=t[Lv];n===void 0&&(n=t[Lv]=new Set);var i=e+"__bubble";n.has(i)||(zM(t,e,2,!1),n.add(i))}function kp(e,t,n){var i=0;t&&(i|=4),zM(n,e,i,t)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function Jg(e){if(!e[Ju]){e[Ju]=!0,Rx.forEach(function(n){n!=="selectionchange"&&(GA.has(n)||kp(n,!1,e),kp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ju]||(t[Ju]=!0,kp("selectionchange",!1,t))}}function zM(e,t,n,i){switch(l1(t)){case 2:var s=Ow;break;case 8:s=Iw;break;default:s=n0}n=s.bind(null,t,n,e),s=void 0,!lm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Xp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Bx(function(){var c=a,f=hg(n),d=[];t:{var h=jx.get(e);if(h!==void 0){var p=Zh,_=e;switch(e){case"keypress":if(eh(n)===0)break t;case"keydown":case"keyup":p=CT;break;case"focusin":_="focus",p=Ap;break;case"focusout":_="blur",p=Ap;break;case"beforeblur":case"afterblur":p=Ap;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LT;break;case Zx:case Jx:case Kx:p=yT;break;case Qx:p=IT;break;case"scroll":case"scrollend":p=pT;break;case"wheel":p=BT;break;case"copy":case"cut":case"paste":p=ST;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kv;break;case"submit":p=UT;break;case"toggle":case"beforetoggle":p=FT}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||u===null||(v=pc(g,u),v!=null&&S.push(bc(g,v,y))),m)break;g=g.return}0<S.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:S}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==om&&(_=n.relatedTarget||n.fromElement)&&(or(_)||_[ko]))break t;(h||p)&&(_=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?or(p):null,p!==null&&(m=Rc(p),S=p.tag,p!==m||S!==5&&S!==27&&S!==6)&&(p=null)):(h=null,p=c),h!==p&&(S=Vv,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=kv,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=h==null?_:Ql(h),y=p==null?_:Ql(p),_=new S(v,g+"leave",h,n,f),_.target=m,_.relatedTarget=y,v=null,or(f)===c&&(S=new S(u,g+"enter",p,n,f),S.target=y,S.relatedTarget=m,v=S),m=v,S=h&&p?Jp(h,p,kA):null,h!==null&&Hy(d,_,h,S,!1),p!==null&&m!==null&&Hy(d,m,p,S,!0)))}t:{if(h=c?Ql(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=Yv;else if(qv(h))if(kx)A=JT;else{A=YT;var C=qT}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&ug(c.elementType)&&(A=Yv):A=ZT;if(A&&(A=A(e,c))){Gx(d,A,n,f);break t}C&&C(e,h,c)}switch(C=c?Ql(c):window,e){case"focusin":(qv(C)||C.contentEditable==="true")&&(fo=C,um=c,nc=null);break;case"focusout":nc=um=fo=null;break;case"mousedown":hm=!0;break;case"contextmenu":case"mouseup":case"dragend":hm=!1,Qv(d,n,f);break;case"selectionchange":if(QT)break;case"keydown":case"keyup":Qv(d,n,f)}var w;if(pg)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else ho?Hx(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Fx&&n.locale!=="ko"&&(ho||U!=="onCompositionStart"?U==="onCompositionEnd"&&ho&&(w=zx()):(da=f,fg="value"in da?da.value:da.textContent,ho=!0)),C=kh(c,U),0<C.length&&(U=new Gv(U,e,null,n,f),d.push({event:U,listeners:C}),w?U.data=w:(w=Vx(n),w!==null&&(U.data=w)))),(w=VT?GT(e,n):kT(e,n))&&(U=kh(c,"onBeforeInput"),0<U.length&&(C=new Gv("onBeforeInput","beforeinput",null,n,f),d.push({event:C,listeners:U}),C.data=w)),VA(d,e,c,n,f)}BM(d,t)})}function bc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=pc(e,n),s!=null&&i.unshift(bc(e,s,a)),s=pc(e,t),s!=null&&i.push(bc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function kA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=pc(n,a),c!=null&&r.unshift(bc(n,c,l))):s||(c=pc(n,a),c!=null&&r.push(bc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var XA=/\r\n?/g,WA=/\u0000|\uFFFD/g;function Vy(e){return(typeof e=="string"?e:""+e).replace(XA,`
`).replace(WA,"")}function FM(e,t){return t=Vy(t),Vy(e)===t}function be(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||No(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&No(e,""+i);else return;break;case"className":Iu(e,"class",i);break;case"tabIndex":Iu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Iu(e,n,i);break;case"style":Px(e,i,a);return;case"data":if(t!=="object"){Iu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$u(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$u(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=us);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$u(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),ju(e,"popover",i);break;case"xlinkActuate":Cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ju(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=fT.get(n)||n,ju(e,n,i);else return}pe=!0}function Zm(e,t,n,i,s,a){switch(n){case"style":Px(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")No(e,i);else if(typeof i=="number"||typeof i=="bigint")No(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=us);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Dx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ii]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}pe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ju(e,n,i)}return}pe=!0}function bn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:be(e,t,a,r,n,null)}}s&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,t));break;default:be(e,t,i,f,n,null)}}Lx(e,a,o,l,c,r,s,!1);return;case"select":ne("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:be(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?So(e,!!i,t,!1):n!=null&&So(e,!!i,n,!0);return;case"textarea":ne("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:be(e,t,r,o,n,null)}Ix(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":be(e,t,l,i,n,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<Mc.length;i++)ne(Mc[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:be(e,t,c,i,n,null)}return;default:if(ug(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Zm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}var qA={};function YA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||be(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(pe=!0),a=p;break;case"name":p!==d&&(pe=!0),s=p;break;case"checked":p!==d&&(pe=!0),c=p;break;case"defaultChecked":p!==d&&(pe=!0),f=p;break;case"value":p!==d&&(pe=!0),r=p;break;case"defaultValue":p!==d&&(pe=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==d&&be(e,t,h,p,i,d)}}rm(e,r,o,l,c,f,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||be(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(pe=!0),h=a;break;case"defaultValue":a!==l&&(pe=!0),o=a;break;case"multiple":a!==l&&(pe=!0),r=a;default:a!==l&&be(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?So(e,!!n,h,!1):!!i!=!!n&&(t!=null?So(e,!!n,t,!0):So(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(pe=!0),h=s;break;case"defaultValue":s!==a&&(pe=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Z(91));break;default:s!==a&&be(e,t,r,s,i,a)}Ox(e,h,p);return;case"option":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:be(e,t,_,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?(h!==p&&(pe=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol"):be(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!i.hasOwnProperty(S)&&be(e,t,S,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:be(e,t,c,h,i,p)}return;default:if(ug(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Zm(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Zm(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&be(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||be(e,t,d,h,i,p)}function Gy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Gy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Gy(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jm=null,Km=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function ky(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function HM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function VM(e,t,n,i){return n=Ec(n).createElement(e),n[yn]=i,n[ii]=t,bn(n,e,t),pn(n),n}function Qm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wp=null;function JA(){var e=window.event;return e&&e.type==="popstate"?e===Wp?!1:(Wp=e,!0):(Wp=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,Xy=typeof Promise=="function"?Promise:void 0,Wy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kg,QA=typeof queueMicrotask=="function"?queueMicrotask:typeof Xy<"u"?function(e){return Xy.resolve(null).then(e).catch(jA)}:Kg;function jA(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function qy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Go(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Yp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Yp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Lc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Yp(e.ownerDocument.body);n=s}while(n);Go(t)}function Yy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function GM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function kM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function XM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return XM(t,n,e)}function $A(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return XM(t,n,e)}function tw(e){return e.documentElement.clientHeight}function ew(e){this.addEventListener("load",e),this.addEventListener("error",e)}function nw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,_=c.fonts.status;i();var S=[];if(_==="loaded"&&(tw(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),_=S.length,e!==null)for(var m=e.suspenseyImages,u=0,g=0;g<m.length;g++){var y=m[g];if(!y.complete){var v=y.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<h.innerHeight&&v.left<h.innerWidth){if(u+=n1(y),u>ph){S.length=_;break}y=new Promise(ew.bind(y)),S.push(y)}}}if(0<S.length)return h=Promise.race([Promise.all(S),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var _=h[p],S=_.effect,m=S.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(_),_=S.getKeyframes();for(var u=m=void 0,g=!0,y=0;y<_.length;y++){var v=_[y],A=v.width;if(m===void 0)m=A;else if(m!==A){g=!1;break}if(A=v.height,u===void 0)u=A;else if(u!==A){g=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}g&&m!==void 0&&u!==void 0&&(S.setKeyframes(_),g=getComputedStyle(S.target,S.pseudoElement),g.width!==m||g.height!==u)&&(g=_[0],g.width=m,g.height=u,g=_[_.length-1],g.width=m,g.height=u,S.setKeyframes(_))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof h=="object"&&h!==null&&h.name==="InvalidStateError"&&(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null),h!==null&&l(h)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function lr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}lr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ue({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};lr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function WM(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(qM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=zo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ni(this._fragmentFiber.child,!1,iw,e,o,i)}this._eventListeners=a}};function iw(e,t,n,i){return on(e).addEventListener(t,n,i),!1}vi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=qM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=zo(s.optionsOrUseCapture),ni(this._fragmentFiber.child,!1,sw,e,n,s),i.splice(t,1),a!==null&&a()}};function sw(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function zo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Zy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function qM(e,t,n,i){if(e.length===0)return-1;i=Zy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Zy(a.optionsOrUseCapture)===i)return s}return-1}vi.prototype.dispatchEvent=function(e){var t=Mr(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,zo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,zo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};vi.prototype.focus=function(e){ni(this._fragmentFiber.child,!0,YM,e,void 0,void 0)};function YM(e,t){return e.tag===6?!1:(e=on(e),gw(e,t))}vi.prototype.focusLast=function(e){var t=[];ni(this._fragmentFiber.child,!0,Qg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!YM(t[n],e);n--);};function Qg(e,t){return t.push(e),!1}vi.prototype.blur=function(){var e=Mr(this._fragmentFiber);e!==null&&(e=on(e),e=Ec(e).activeElement,e!==null&&ni(this._fragmentFiber.child,!1,aw,e,void 0,void 0))};function aw(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ni(this._fragmentFiber.child,!1,rw,e,void 0,void 0)};function rw(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ni(this._fragmentFiber.child,!1,ow,e,void 0,void 0);for(var n=t=0;n<Wi.length;n++){var i=Wi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Wi[t++]=i}Wi.length=t}};function ow(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var Wi=[],qp=!1;function lw(e,t,n){Wi.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,_w(function(){qp=!1;var i=Wi;Wi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return ni(this._fragmentFiber.child,!1,cw,e,void 0,void 0),e};function cw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var t=Mr(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};vi.prototype.compareDocumentPosition=function(e){var t=Mr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ni(this._fragmentFiber.child,!1,Qg,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,wv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=mx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),s=on(n[n.length-1]);var a=wv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uw(e,t,n,i,s){var a=or(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Mr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Jp(n,a,Cv),t===null?t=!1:(ni(t,!0,HE,a,n),a=oo,oo=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Jp(i,a,Cv),t===null?t=!1:(ni(t,!0,VE,a,i),a=oo,Zp=oo=null,t=a!==null)),t):!1}function Jy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Z(566));var t=[];ni(this._fragmentFiber.child,!1,Qg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=mx(this._fragmentFiber);if(i=n?i[1]||i[0]||Mr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),Jy(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=on(s),Jy(s,n)):on(s).scrollIntoView(e),i+=n?-1:1}};function hw(e,t){return e=on(e),ZM(e,t),!1}function ZM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function JM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,zo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Wi.length;o++){var l=Wi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Wi[r++]=l)}Wi.length=r,a.observe(e)}),ZM(e,t))}function fw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,zo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?lw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function $m(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$m(n),Yh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function dw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Lc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function pw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Li(e.nextSibling),e===null))return null;return e}function KM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Li(e.nextSibling),e===null))return null;return e}function tg(e){return e.data==="$?"||e.data==="$~"}function jg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eg=null;function Ky(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Li(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function gw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function _w(e){Wy(function(){Wy(function(t){return e(t)})})}function QM(e,t,n){switch(t=Ec(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function jM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&be(e,t,i,null,qA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===us&&(e.onclick=null),Yh(e)}function Yp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yh(e)}var Oi=new Map,jy=new Set;function Tc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Gs=ve.d;ve.d={f:vw,r:yw,D:xw,C:Sw,L:Mw,m:bw,X:Tw,S:Ew,M:Aw};function vw(){var e=Gs.f(),t=lf();return e||t}function yw(e){var t=Xo(e);t!==null&&t.tag===5&&t.type==="form"?PS(t):Gs.r(e)}var Zo=typeof document>"u"?null:document;function $M(e,t,n){var i=Zo;if(i&&typeof t=="string"&&t){var s=Di(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),jy.has(s)||(jy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),bn(t,"link",e),pn(t),i.head.appendChild(t)))}}function xw(e){Gs.D(e),$M("dns-prefetch",e,null)}function Sw(e,t){Gs.C(e,t),$M("preconnect",e,t)}function Mw(e,t,n){Gs.L(e,t,n);var i=Zo;if(i&&e&&t){var s='link[rel="preload"][as="'+Di(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Di(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Di(n.imageSizes)+'"]')):s+='[href="'+Di(e)+'"]';var a=s;switch(t){case"style":a=Fo(e);break;case"script":a=Jo(e)}if(!(Oi.has(a)||(e=Ue({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Fc(a))||t==="script"&&i.querySelector(Hc(a))))){var r=i.createElement("link");bn(r,"link",e),t==="style"&&(r[Sh]=!0,r.onload=r.onerror=function(){Cx(r)}),pn(r),i.head.appendChild(r)}}}function bw(e,t){Gs.m(e,t);var n=Zo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Di(i)+'"][href="'+Di(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Jo(e)}if(!Oi.has(a)&&(e=Ue({rel:"modulepreload",href:e},t),Oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hc(a)))return}i=n.createElement("link"),bn(i,"link",e),pn(i),n.head.appendChild(i)}}}function Ew(e,t,n){Gs.S(e,t,n);var i=Zo;if(i&&e){var s=xo(i).hoistableStyles,a=Fo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Fc(a)))o.loading=5;else{e=Ue({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Oi.get(a))&&$g(e,n);var l=r=i.createElement("link");pn(l),bn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,fh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Tw(e,t){Gs.X(e,t);var n=Zo;if(n&&e){var i=xo(n).hoistableScripts,s=Jo(e),a=i.get(s);a||(a=n.querySelector(Hc(s)),a||(e=Ue({src:e,async:!0},t),(t=Oi.get(s))&&t0(e,t),a=n.createElement("script"),pn(a),bn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Aw(e,t){Gs.M(e,t);var n=Zo;if(n&&e){var i=xo(n).hoistableScripts,s=Jo(e),a=i.get(s);a||(a=n.querySelector(Hc(s)),a||(e=Ue({src:e,async:!0,type:"module"},t),(t=Oi.get(s))&&t0(e,t),a=n.createElement("script"),pn(a),bn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function $y(e,t,n,i){var s=(s=va.current)?Tc(s):null;if(!s)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Fo(n.href),t=xo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fo(n.href);var a=xo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Fc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Oi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Oi.set(e,a)),ww(s,e,a,r.state))),t&&i===null)throw Error(Z(528,""));return r}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Jo(n),t=xo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function Fo(e){return'href="'+Di(e)+'"'}function Fc(e){return'link[rel="stylesheet"]['+e+"]"}function t1(e){return Ue({},e,{"data-precedence":e.precedence,precedence:null})}function ww(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Sh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Sh]=!0,t.onload=t.onerror=Cx.bind(null,t),bn(t,"link",n),pn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Jo(e){return'[src="'+Di(e)+'"]'}function Hc(e){return"script[async]"+e}function tx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Di(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var s=Ue({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),bn(i,"style",s),fh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Fo(n.href);var a=e.querySelector(Fc(s));if(a)return t.state.loading|=4,t.instance=a,pn(a),a;i=t1(n),(s=Oi.get(s))&&$g(i,s),a=(e.ownerDocument||e).createElement("link"),pn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(a,"link",i),t.state.loading|=4,fh(a,n.precedence,e),t.instance=a;case"script":return a=Jo(n.src),(s=e.querySelector(Hc(a)))?(t.instance=s,pn(s),s):(i=n,(s=Oi.get(a))&&(i=Ue({},n),t0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),bn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,fh(i,n.precedence,e));return t.instance}function fh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $g(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function t0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var dh=null;function ex(e,t,n){if(dh===null){var i=new Map,s=dh=new Map;s.set(n,i)}else s=dh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Lc]||a[yn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function ng(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function e1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function n1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ix(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=n1(t),e.suspenseyImages.push(t)),e=Uw.bind(e),t.decode().then(e,e))}function Rw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Fo(i.href),a=t.querySelector(Fc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ac.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pn(a);return}a=t.ownerDocument||t,i=t1(i),(s=Oi.get(s))&&$g(i,s),a=a.createElement("link"),pn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ac.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ph=0;function Dw(e,t){return e.stylesheets&&e.count===0&&mh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&mh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&ph===0&&(ph=62500*ZA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>ph?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function i1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)mh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ac(){this.count--,i1(this)}function Uw(){this.imgCount--,i1(this)}var Xh=null;function mh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xh=new Map,t.forEach(Nw,e),Xh=null,Ac.call(e))}function Nw(e,t){if(!(t.state.loading&4)){var n=Xh.get(e);if(n)var i=n.get(null);else{n=new Map,Xh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ac.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ho={$$typeof:cs,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function Lw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sp(0),this.hiddenUpdates=Sp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function s1(e,t,n,i,s,a,r,o,l,c,f,d){return e=new Lw(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=ti(3,null,null,t),e.current=a,a.stateNode=e,t=xg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},bg(a),e}function a1(e){return e?(e=go,e):go}function r1(e,t,n,i,s,a){s=a1(s),i.context===null?i.context=s:i.pendingContext=s,i=xa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Sa(e,i,t),n!==null&&(ei(n,e,t),sc(n,e,t))}function sx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function e0(e,t){sx(e,t),(e=e.alternate)&&sx(e,t)}function o1(e){if(e.tag===13||e.tag===31){var t=Tr(e,67108864);t!==null&&ei(t,e,67108864),e0(e,67108864)}}function ax(e){if(e.tag===13||e.tag===31){var t=gi();t=lg(t);var n=Tr(e,t);n!==null&&ei(n,e,t),e0(e,t)}}var Vo=!0;function Ow(e,t,n,i){var s=Ft.T;Ft.T=null;var a=ve.p;try{ve.p=2,n0(e,t,n,i)}finally{ve.p=a,Ft.T=s}}function Iw(e,t,n,i){var s=Ft.T;Ft.T=null;var a=ve.p;try{ve.p=8,n0(e,t,n,i)}finally{ve.p=a,Ft.T=s}}function n0(e,t,n,i){if(Vo){var s=ig(i);if(s===null)Xp(e,t,i,Wh,n),rx(e,i);else if(Bw(s,e,t,n,i))i.stopPropagation();else if(rx(e,i),t&4&&-1<Pw.indexOf(e)){for(;s!==null;){var a=Xo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=sr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-mi(r);o.entanglements[1]|=l,r&=~l}_s(a),(_e&6)===0&&(Fh=di()+500,zc(0,!1))}}break;case 31:case 13:o=Tr(a,2),o!==null&&ei(o,a,2),lf(),e0(a,2)}if(a=ig(i),a===null&&Xp(e,t,i,Wh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Xp(e,t,i,null,n)}}function ig(e){return e=hg(e),i0(e)}var Wh=null;function i0(e){if(Wh=null,e=or(e),e!==null){var t=Rc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=fx(t),e!==null)return e;e=null}else if(n===31){if(e=dx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wh=e,null}function l1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(KE()){case yx:return 2;case xx:return 8;case xh:case QE:return 32;case Sx:return 268435456;default:return 32}default:return 32}}var sg=!1,Ta=null,Aa=null,wa=null,wc=new Map,Cc=new Map,ha=[],Pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":wc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cc.delete(t.pointerId)}}function Yl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Xo(t),t!==null&&o1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Bw(e,t,n,i,s){switch(t){case"focusin":return Ta=Yl(Ta,e,t,n,i,s),!0;case"dragenter":return Aa=Yl(Aa,e,t,n,i,s),!0;case"mouseover":return wa=Yl(wa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return wc.set(a,Yl(wc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Cc.set(a,Yl(Cc.get(a)||null,e,t,n,i,s)),!0}return!1}function c1(e){var t=or(e.target);if(t!==null){var n=Rc(t);if(n!==null){if(t=n.tag,t===13){if(t=fx(n),t!==null){e.blockedOn=t,Nv(e.priority,function(){ax(n)});return}}else if(t===31){if(t=dx(n),t!==null){e.blockedOn=t,Nv(e.priority,function(){ax(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ig(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);om=i,n.target.dispatchEvent(i),om=null}else return t=Xo(n),t!==null&&o1(t),e.blockedOn=n,!1;t.shift()}return!0}function ox(e,t,n){gh(e)&&n.delete(t)}function zw(){sg=!1,Ta!==null&&gh(Ta)&&(Ta=null),Aa!==null&&gh(Aa)&&(Aa=null),wa!==null&&gh(wa)&&(wa=null),wc.forEach(ox),Cc.forEach(ox)}function Ku(e,t){e.blockedOn===t&&(e.blockedOn=null,sg||(sg=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,zw)))}var Qu=null;function lx(e){Qu!==e&&(Qu=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){Qu===e&&(Qu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(i0(i||n)===null)continue;break}var a=Xo(n);a!==null&&(e.splice(t,3),t-=3,bm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Go(e){function t(l){return Ku(l,e)}Ta!==null&&Ku(Ta,e),Aa!==null&&Ku(Aa,e),wa!==null&&Ku(wa,e),wc.forEach(t),Cc.forEach(t);for(var n=0;n<ha.length;n++){var i=ha[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ii]||null;if(typeof a=="function")r||lx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ii]||null)o=r.formAction;else if(i0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),lx(n)}}}function u1(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function s0(e){this._internalRoot=e}hf.prototype.render=s0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=gi();r1(n,i,e,t,null,null)};hf.prototype.unmount=s0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;r1(e.current,2,null,e,null,null),lf(),t[ko]=null}};function hf(e){this._internalRoot=e}hf.prototype.unstable_scheduleHydration=function(e){if(e){var t=wx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ha.length&&t!==0&&t<ha[n].priority;n++);ha.splice(n,0,e),n===0&&c1(e)}};var cx=ux.version;if(cx!=="19.3.0")throw Error(Z(527,cx,"19.3.0"));ve.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=FE(t),e=e!==null?px(e):null,e=e===null?null:e.stateNode,e};var Fw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zl.isDisabled&&Zl.supportsFiber))try{Dc=Zl.inject(Fw),pi=Zl}catch{}var Zl;ff.createRoot=function(e,t){if(!hx(e))throw Error(Z(299));var n=!1,i="",s=XS,a=WS,r=qS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=s1(e,1,!1,null,null,n,i,null,s,a,r,u1),e[ko]=t.current,Jg(e),new s0(t)};ff.hydrateRoot=function(e,t,n){if(!hx(e))throw Error(Z(299));var i=!1,s="",a=XS,r=WS,o=qS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=s1(e,1,!0,t,n??null,i,s,l,a,r,o,u1),t.context=a1(null),n=t.current,i=gi(),i=lg(i),s=xa(i),s.callback=null,Sa(n,s,i),n=i,t.current.lanes=n,Nc(t,n),_s(t),e[ko]=t.current,Jg(e),new hf(t)};ff.version="19.3.0"});var p1=ns((SU,d1)=>{"use strict";function f1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1)}catch(e){console.error(e)}}f1(),d1.exports=h1()});var nE=ns(jd=>{"use strict";var cU=Symbol.for("react.transitional.element"),uU=Symbol.for("react.fragment");function eE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:cU,type:e,key:i,ref:t!==void 0?t:null,props:n}}jd.Fragment=uU;jd.jsx=eE;jd.jsxs=eE});var Mu=ns((JO,iE)=>{"use strict";iE.exports=nE()});var jO=er(zl()),rE=er(p1());var ri=er(zl());var B1=0,P0=1,z1=2;var B0=1,$f=2,Ms=3,ji=0,An=1,Bi=2,$s=0,Nr=1,z0=2,F0=3,H0=4,F1=5,Ga=100,H1=101,V1=102,G1=103,k1=104,X1=200,W1=201,q1=202,Y1=203,Lf=204,Of=205,Z1=206,J1=207,K1=208,Q1=209,j1=210,$1=211,tb=212,eb=213,nb=214,td=0,ed=1,nd=2,Lr=3,id=4,sd=5,ad=6,rd=7,V0=0,ib=1,sb=2,ta=0,ab=1,rb=2,ob=3,lb=4,cb=5,ub=6,hb=7;var G0=300,Br=301,zr=302,od=303,ld=304,mu=306,hl=1e3,Va=1001,If=1002,si=1003,fb=1004;var gu=1005;var ai=1006,cd=1007;var qa=1008;var es=1009,k0=1010,X0=1011,Tl=1012,ud=1013,Ya=1014,bs=1015,Al=1016,hd=1017,fd=1018,wl=1020,W0=35902,q0=35899,Y0=1021,Z0=1022,zi=1023,fl=1026,Cl=1027,J0=1028,dd=1029,K0=1030,pd=1031;var md=1033,_u=33776,vu=33777,yu=33778,xu=33779,gd=35840,_d=35841,vd=35842,yd=35843,xd=36196,Sd=37492,Md=37496,bd=37808,Ed=37809,Td=37810,Ad=37811,wd=37812,Cd=37813,Rd=37814,Dd=37815,Ud=37816,Nd=37817,Ld=37818,Od=37819,Id=37820,Pd=37821,Bd=36492,zd=36494,Fd=36495,Hd=36283,Vd=36284,Gd=36285,kd=36286;var Yc=2300,Pf=2301,Uf=2302,w0=2400,C0=2401,R0=2402;var db=3200,Xd=3201;var Q0=0,pb=1,ea="",Ln="srgb",Or="srgb-linear",Zc="linear",Te="srgb";var Ur=7680;var D0=519,mb=512,gb=513,_b=514,j0=515,vb=516,yb=517,xb=518,Sb=519,U0=35044,Wd=35048;var $0="300 es",Qi=2e3,Jc=2001;var Ks=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],m1=1234567,Wc=Math.PI/180,dl=180/Math.PI;function Rl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[e&255]+Un[e>>8&255]+Un[e>>16&255]+Un[e>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function ae(e,t,n){return Math.max(t,Math.min(n,e))}function t_(e,t){return(e%t+t)%t}function Hw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Vw(e,t,n){return e!==t?(n-e)/(t-e):0}function qc(e,t,n){return(1-n)*e+n*t}function Gw(e,t,n,i){return qc(e,t,1-Math.exp(-n*i))}function kw(e,t=1){return t-Math.abs(t_(e,t*2)-t)}function Xw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ww(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Yw(e,t){return e+Math.random()*(t-e)}function Zw(e){return e*(.5-Math.random())}function Jw(e){e!==void 0&&(m1=e);let t=m1+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kw(e){return e*Wc}function Qw(e){return e*dl}function jw(e){return(e&e-1)===0&&e!==0}function $w(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function tC(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function eC(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),d=a((t-i)/2),h=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*f,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*f,o*c);break;case"XZX":e.set(o*f,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Za={DEG2RAD:Wc,RAD2DEG:dl,generateUUID:Rl,clamp:ae,euclideanModulo:t_,mapLinear:Hw,inverseLerp:Vw,lerp:qc,damp:Gw,pingpong:kw,smoothstep:Xw,smootherstep:Ww,randInt:qw,randFloat:Yw,randFloatSpread:Zw,seededRandom:Jw,degToRad:Kw,radToDeg:Qw,isPowerOfTwo:jw,ceilPowerOfTwo:$w,floorPowerOfTwo:tC,setQuaternionFromProperEuler:eC,normalize:Yn,denormalize:cl},ce=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],_=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=_,t[n+3]=S;return}if(d!==S||l!==h||c!==p||f!==_){let m=1-o,u=l*h+c*p+f*_+d*S,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let A=Math.sqrt(y),C=Math.atan2(A,u*g);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let v=o*g;if(l=l*m+h*v,c=c*m+p*v,f=f*m+_*v,d=d*m+S*v,m===1-o){let A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],h=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+f*d+l*p-c*h,t[n+1]=l*_+f*h+c*d-o*p,t[n+2]=c*_+f*p+o*h-l*d,t[n+3]=f*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(g1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(g1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this.z=ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this.z=ae(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return a0.copy(this).projectOnVector(t),this.sub(a0)}reflect(t){return this.sub(a0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},a0=new V,g1=new Qs,Jt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],S=s[0],m=s[3],u=s[6],g=s[1],y=s[4],v=s[7],A=s[2],C=s[5],w=s[8];return a[0]=r*S+o*g+l*A,a[3]=r*m+o*y+l*C,a[6]=r*u+o*v+l*w,a[1]=c*S+f*g+d*A,a[4]=c*m+f*y+d*C,a[7]=c*u+f*v+d*w,a[2]=h*S+p*g+_*A,a[5]=h*m+p*y+_*C,a[8]=h*u+p*v+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,p=c*a-r*l,_=n*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-f*i)*S,t[2]=(o*i-s*r)*S,t[3]=h*S,t[4]=(f*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(r0.makeScale(t,n)),this}rotate(t){return this.premultiply(r0.makeRotation(-t)),this}translate(t,n){return this.premultiply(r0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},r0=new Jt;function e_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Mb(){let e=pl("canvas");return e.style.display="block",e}var _1={};function ml(e){e in _1||(_1[e]=!0,console.warn(e))}function bb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var v1=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y1=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nC(){let e={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Te&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Te&&(s.r=ul(s.r),s.g=ul(s.g),s.b=ul(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ea?Zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Or]:{primaries:t,whitePoint:i,transfer:Zc,toXYZ:v1,fromXYZ:y1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:v1,fromXYZ:y1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),e}var he=nC();function Js(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ul(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ko,Bf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ko===void 0&&(Ko=pl("canvas")),Ko.width=t.width,Ko.height=t.height;let s=Ko.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ko}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=pl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Js(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},iC=0,gl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(o0(s[r].image)):a.push(o0(s[r]))}else a=o0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function o0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Bf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sC=0,l0=new V,Zn=class e extends Ks{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Va,s=Va,a=ai,r=qa,o=zi,l=es,c=e.DEFAULT_ANISOTROPY,f=ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sC++}),this.uuid=Rl(),this.name="",this.source=new gl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(l0).x}get height(){return this.source.getSize(l0).y}get depth(){return this.source.getSize(l0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case If:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case If:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=G0;Zn.DEFAULT_ANISOTROPY=1;var Xe=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(p+1)/2,A=(u+1)/2,C=(f+h)/4,w=(d+S)/4,U=(_+m)/4;return y>v&&y>A?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=C/i,a=w/i):v>A?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=C/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=U/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-S)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this.z=ae(this.z,t.z,n.z),this.w=ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this.z=ae(this.z,t,n),this.w=ae(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zf=class extends Ks{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Zn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new gl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xs=class extends zf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Kc=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ff=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Zi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Zi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Zi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Zi):Zi.fromBufferAttribute(a,r),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),df.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),df.copy(i.boundingBox)),df.applyMatrix4(t.matrixWorld),this.union(df)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vc),pf.subVectors(this.max,Vc),Qo.subVectors(t.a,Vc),jo.subVectors(t.b,Vc),$o.subVectors(t.c,Vc),Ia.subVectors(jo,Qo),Pa.subVectors($o,jo),wr.subVectors(Qo,$o);let n=[0,-Ia.z,Ia.y,0,-Pa.z,Pa.y,0,-wr.z,wr.y,Ia.z,0,-Ia.x,Pa.z,0,-Pa.x,wr.z,0,-wr.x,-Ia.y,Ia.x,0,-Pa.y,Pa.x,0,-wr.y,wr.x,0];return!c0(n,Qo,jo,$o,pf)||(n=[1,0,0,0,1,0,0,0,1],!c0(n,Qo,jo,$o,pf))?!1:(mf.crossVectors(Ia,Pa),n=[mf.x,mf.y,mf.z],c0(n,Qo,jo,$o,pf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ks),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ks=[new V,new V,new V,new V,new V,new V,new V,new V],Zi=new V,df=new ka,Qo=new V,jo=new V,$o=new V,Ia=new V,Pa=new V,wr=new V,Vc=new V,pf=new V,mf=new V,Cr=new V;function c0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Cr.fromArray(e,a);let o=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),l=t.dot(Cr),c=n.dot(Cr),f=i.dot(Cr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var aC=new ka,Gc=new V,u0=new V,_l=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):aC.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gc.subVectors(t,this.center);let n=Gc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(u0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gc.copy(t.center).add(u0)),this.expandByPoint(Gc.copy(t.center).sub(u0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xs=new V,h0=new V,gf=new V,Ba=new V,f0=new V,_f=new V,d0=new V,Qc=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Xs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Xs.copy(this.origin).addScaledVector(this.direction,n),Xs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){h0.copy(t).add(n).multiplyScalar(.5),gf.copy(n).sub(t).normalize(),Ba.copy(this.origin).sub(h0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(gf),o=Ba.dot(this.direction),l=-Ba.dot(gf),c=Ba.lengthSq(),f=Math.abs(1-r*r),d,h,p,_;if(f>0)if(d=r*l-o,h=r*o-l,_=a*f,d>=0)if(h>=-_)if(h<=_){let S=1/f;d*=S,h*=S,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(h0).addScaledVector(gf,h),p}intersectSphere(t,n){Xs.subVectors(t.center,this.origin);let i=Xs.dot(this.direction),s=Xs.dot(Xs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Xs)!==null}intersectTriangle(t,n,i,s,a){f0.subVectors(n,t),_f.subVectors(i,t),d0.crossVectors(f0,_f);let r=this.direction.dot(d0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ba.subVectors(this.origin,t);let l=o*this.direction.dot(_f.crossVectors(Ba,_f));if(l<0)return null;let c=o*this.direction.dot(f0.cross(Ba));if(c<0||l+c>r)return null;let f=-o*Ba.dot(d0);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m)}set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/tl.setFromMatrixColumn(t,0).length(),a=1/tl.setFromMatrixColumn(t,1).length(),r=1/tl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h+S*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h-S*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*f,n[9]=S-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-h*d,n[8]=_*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-S*d}else if(t.order==="XZY"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+S,n[5]=r*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rC,t,oC)}lookAt(t,n,i){let s=this.elements;return yi.subVectors(t,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),za.crossVectors(i,yi),za.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),za.crossVectors(i,yi)),za.normalize(),vf.crossVectors(yi,za),s[0]=za.x,s[4]=vf.x,s[8]=yi.x,s[1]=za.y,s[5]=vf.y,s[9]=yi.y,s[2]=za.z,s[6]=vf.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],g=i[3],y=i[7],v=i[11],A=i[15],C=s[0],w=s[4],U=s[8],E=s[12],b=s[1],R=s[5],B=s[9],F=s[13],G=s[2],P=s[6],H=s[10],Q=s[14],z=s[3],j=s[7],lt=s[11],pt=s[15];return a[0]=r*C+o*b+l*G+c*z,a[4]=r*w+o*R+l*P+c*j,a[8]=r*U+o*B+l*H+c*lt,a[12]=r*E+o*F+l*Q+c*pt,a[1]=f*C+d*b+h*G+p*z,a[5]=f*w+d*R+h*P+p*j,a[9]=f*U+d*B+h*H+p*lt,a[13]=f*E+d*F+h*Q+p*pt,a[2]=_*C+S*b+m*G+u*z,a[6]=_*w+S*R+m*P+u*j,a[10]=_*U+S*B+m*H+u*lt,a[14]=_*E+S*F+m*Q+u*pt,a[3]=g*C+y*b+v*G+A*z,a[7]=g*w+y*R+v*P+A*j,a[11]=g*U+y*B+v*H+A*lt,a[15]=g*E+y*F+v*Q+A*pt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+S*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],u=t[15],g=d*m*c-S*h*c+S*l*p-o*m*p-d*l*u+o*h*u,y=_*h*c-f*m*c-_*l*p+r*m*p+f*l*u-r*h*u,v=f*S*c-_*d*c+_*o*p-r*S*p-f*o*u+r*d*u,A=_*d*l-f*S*l-_*o*h+r*S*h+f*o*m-r*d*m,C=n*g+i*y+s*v+a*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=g*w,t[1]=(S*h*a-d*m*a-S*s*p+i*m*p+d*s*u-i*h*u)*w,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=y*w,t[5]=(f*m*a-_*h*a+_*s*p-n*m*p-f*s*u+n*h*u)*w,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*h*a-f*l*a+f*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=v*w,t[9]=(_*d*a-f*S*a-_*i*p+n*S*p+f*i*u-n*d*u)*w,t[10]=(r*S*a-_*o*a+_*i*c-n*S*c-r*i*u+n*o*u)*w,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(f*S*s-_*d*s+_*i*h-n*S*h-f*i*m+n*d*m)*w,t[14]=(_*o*s-r*S*s-_*i*l+n*S*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,h=a*c,p=a*f,_=a*d,S=r*f,m=r*d,u=o*d,g=l*c,y=l*f,v=l*d,A=i.x,C=i.y,w=i.z;return s[0]=(1-(S+u))*A,s[1]=(p+v)*A,s[2]=(_-y)*A,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(h+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(_+y)*w,s[9]=(m-g)*w,s[10]=(1-(h+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=tl.set(s[0],s[1],s[2]).length(),r=tl.set(s[4],s[5],s[6]).length(),o=tl.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ji.copy(this);let c=1/a,f=1/r,d=1/o;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=f,Ji.elements[5]*=f,Ji.elements[6]*=f,Ji.elements[8]*=d,Ji.elements[9]*=d,Ji.elements[10]*=d,n.setFromRotationMatrix(Ji),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Qi,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Qi)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Jc)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Qi,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Qi)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===Jc)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},tl=new V,Ji=new Je,rC=new V(0,0,0),oC=new V(1,1,1),za=new V,vf=new V,yi=new V,x1=new Je,S1=new Qs,$i=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return x1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(x1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return S1.setFromEuler(this),this.setFromQuaternion(S1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var vl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lC=0,M1=new V,el=new Qs,Ws=new Je,yf=new V,kc=new V,cC=new V,uC=new Qs,b1=new V(1,0,0),E1=new V(0,1,0),T1=new V(0,0,1),A1={type:"added"},hC={type:"removed"},nl={type:"childadded",child:null},p0={type:"childremoved",child:null},In=class e extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new $i,i=new Qs,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Jt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return el.setFromAxisAngle(t,n),this.quaternion.multiply(el),this}rotateOnWorldAxis(t,n){return el.setFromAxisAngle(t,n),this.quaternion.premultiply(el),this}rotateX(t){return this.rotateOnAxis(b1,t)}rotateY(t){return this.rotateOnAxis(E1,t)}rotateZ(t){return this.rotateOnAxis(T1,t)}translateOnAxis(t,n){return M1.copy(t).applyQuaternion(this.quaternion),this.position.add(M1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(b1,t)}translateY(t){return this.translateOnAxis(E1,t)}translateZ(t){return this.translateOnAxis(T1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?yf.copy(t):yf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(kc,yf,this.up):Ws.lookAt(yf,kc,this.up),this.quaternion.setFromRotationMatrix(Ws),s&&(Ws.extractRotation(s.matrixWorld),el.setFromRotationMatrix(Ws),this.quaternion.premultiply(el.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(A1),nl.child=t,this.dispatchEvent(nl),nl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hC),p0.child=t,this.dispatchEvent(p0),p0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(A1),nl.child=t,this.dispatchEvent(nl),nl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kc,t,cC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kc,uC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};In.DEFAULT_UP=new V(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=new V,qs=new V,m0=new V,Ys=new V,il=new V,sl=new V,w1=new V,g0=new V,_0=new V,v0=new V,y0=new Xe,x0=new Xe,S0=new Xe,vs=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ki.subVectors(t,n),s.cross(Ki);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ki.subVectors(s,n),qs.subVectors(i,n),m0.subVectors(t,n);let r=Ki.dot(Ki),o=Ki.dot(qs),l=Ki.dot(m0),c=qs.dot(qs),f=qs.dot(m0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,_=(r*f-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ys.x),l.addScaledVector(r,Ys.y),l.addScaledVector(o,Ys.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return y0.setScalar(0),x0.setScalar(0),S0.setScalar(0),y0.fromBufferAttribute(t,n),x0.fromBufferAttribute(t,i),S0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(y0,a.x),r.addScaledVector(x0,a.y),r.addScaledVector(S0,a.z),r}static isFrontFacing(t,n,i,s){return Ki.subVectors(i,n),qs.subVectors(t,n),Ki.cross(qs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),qs.subVectors(this.a,this.b),Ki.cross(qs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;il.subVectors(s,i),sl.subVectors(a,i),g0.subVectors(t,i);let l=il.dot(g0),c=sl.dot(g0);if(l<=0&&c<=0)return n.copy(i);_0.subVectors(t,s);let f=il.dot(_0),d=sl.dot(_0);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(il,r);v0.subVectors(t,a);let p=il.dot(v0),_=sl.dot(v0);if(_>=0&&p<=_)return n.copy(a);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(sl,o);let m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return w1.subVectors(a,s),o=(d-f)/(d-f+(p-_)),n.copy(s).addScaledVector(w1,o);let u=1/(m+S+h);return r=S*u,o=h*u,n.copy(i).addScaledVector(il,r).addScaledVector(sl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},xf={h:0,s:0,l:0};function M0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var re=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=he.workingColorSpace){return this.r=t,this.g=n,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=he.workingColorSpace){if(t=t_(t,1),n=ae(n,0,1),i=ae(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=M0(r,a,t+1/3),this.g=M0(r,a,t),this.b=M0(r,a,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,n=Ln){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ln){let i=Eb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return he.workingToColorSpace(Nn.copy(this),t),Math.round(ae(Nn.r*255,0,255))*65536+Math.round(ae(Nn.g*255,0,255))*256+Math.round(ae(Nn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=he.workingColorSpace){he.workingToColorSpace(Nn.copy(this),n);let i=Nn.r,s=Nn.g,a=Nn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=he.workingColorSpace){return he.workingToColorSpace(Nn.copy(this),n),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Ln){he.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,i=Nn.g,s=Nn.b;return t!==Ln?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+n,Fa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Fa),t.getHSL(xf);let i=qc(Fa.h,xf.h,n),s=qc(Fa.s,xf.s,n),a=qc(Fa.l,xf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new re;re.NAMES=Eb;var fC=0,js=class extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=Rl(),this.name="",this.type="Material",this.blending=Nr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Of,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lf&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==Ga&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},jc=class extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=V0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new V,Sf=new ce,dC=0,Tn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=U0,this.updateRanges=[],this.gpuType=bs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sf.fromBufferAttribute(this,n),Sf.applyMatrix3(t),this.setXY(n,Sf.x,Sf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(t),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(t),this.setXYZ(n,en.x,en.y,en.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=cl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=cl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=cl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=cl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=cl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),s=Yn(s,this.array),a=Yn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==U0&&(t.usage=this.usage),t}};var $c=class extends Tn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var tu=class extends Tn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ys=class extends Tn{constructor(t,n,i){super(new Float32Array(t),n,i)}},pC=0,Ii=new Je,b0=new In,al=new V,xi=new ka,Xc=new ka,gn=new V,Ss=class e extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?tu:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,n,i){return Ii.makeTranslation(t,n,i),this.applyMatrix4(Ii),this}scale(t,n,i){return Ii.makeScale(t,n,i),this.applyMatrix4(Ii),this}lookAt(t){return b0.lookAt(t),b0.updateMatrix(),this.applyMatrix4(b0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(al).negate(),this.translate(al.x,al.y,al.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ys(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Xc.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(xi.min,Xc.min),xi.expandByPoint(gn),gn.addVectors(xi.max,Xc.max),xi.expandByPoint(gn)):(xi.expandByPoint(Xc.min),xi.expandByPoint(Xc.max))}xi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)gn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)gn.fromBufferAttribute(o,c),l&&(al.fromBufferAttribute(t,c),gn.add(al)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new V,l[U]=new V;let c=new V,f=new V,d=new V,h=new ce,p=new ce,_=new ce,S=new V,m=new V;function u(U,E,b){c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),h.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,b),f.sub(c),d.sub(c),p.sub(h),_.sub(h);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(R),o[U].add(S),o[E].add(S),o[b].add(S),l[U].add(m),l[E].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let U=0,E=g.length;U<E;++U){let b=g[U],R=b.start,B=b.count;for(let F=R,G=R+B;F<G;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new V,v=new V,A=new V,C=new V;function w(U){A.fromBufferAttribute(s,U),C.copy(A);let E=o[U];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),v.crossVectors(C,E);let R=v.dot(l[U])<0?-1:1;r.setXYZW(U,y.x,y.y,y.z,R)}for(let U=0,E=g.length;U<E;++U){let b=g[U],R=b.start,B=b.count;for(let F=R,G=R+B;F<G;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,f=new V,d=new V;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new Tn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},C1=new Je,Rr=new Qc,Mf=new _l,R1=new V,bf=new V,Ef=new V,Tf=new V,E0=new V,Af=new V,D1=new V,wf=new V,Pn=class extends In{constructor(t=new Ss,n=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Af.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(E0.fromBufferAttribute(d,t),r?Af.addScaledVector(E0,f):Af.addScaledVector(E0.sub(n),f))}n.add(Af)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mf.copy(i.boundingSphere),Mf.applyMatrix4(a),Rr.copy(t.ray).recast(t.near),!(Mf.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Mf,R1)===null||Rr.origin.distanceToSquared(R1)>(t.far-t.near)**2))&&(C1.copy(a).invert(),Rr.copy(t.ray).applyMatrix4(C1),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Rr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=y;v<A;v+=3){let C=o.getX(v),w=o.getX(v+1),U=o.getX(v+2);s=Cf(this,u,t,i,c,f,d,C,w,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Cf(this,r,t,i,c,f,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=y;v<A;v+=3){let C=v,w=v+1,U=v+2;s=Cf(this,u,t,i,c,f,d,C,w,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=m,y=m+1,v=m+2;s=Cf(this,r,t,i,c,f,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function mC(e,t,n,i,s,a,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ji,o),l===null)return null;wf.copy(o),wf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(wf);return c<n.near||c>n.far?null:{distance:c,point:wf.clone(),object:e}}function Cf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,bf),e.getVertexPosition(l,Ef),e.getVertexPosition(c,Tf);let f=mC(e,t,n,i,bf,Ef,Tf,D1);if(f){let d=new V;vs.getBarycoord(D1,bf,Ef,Tf,d),s&&(f.uv=vs.getInterpolatedAttribute(s,o,l,c,d,new ce)),a&&(f.uv1=vs.getInterpolatedAttribute(a,o,l,c,d,new ce)),r&&(f.normal=vs.getInterpolatedAttribute(r,o,l,c,d,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new V,materialIndex:0};vs.getNormal(bf,Ef,Tf,h.normal),f.face=h,f.barycoord=d}return f}var yl=class e extends Ss{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ys(c,3)),this.setAttribute("normal",new ys(f,3)),this.setAttribute("uv",new ys(d,2));function _(S,m,u,g,y,v,A,C,w,U,E){let b=v/w,R=A/U,B=v/2,F=A/2,G=C/2,P=w+1,H=U+1,Q=0,z=0,j=new V;for(let lt=0;lt<H;lt++){let pt=lt*R-F;for(let Nt=0;Nt<P;Nt++){let qt=Nt*b-B;j[S]=qt*g,j[m]=pt*y,j[u]=G,c.push(j.x,j.y,j.z),j[S]=0,j[m]=0,j[u]=C>0?1:-1,f.push(j.x,j.y,j.z),d.push(Nt/w),d.push(1-lt/U),Q+=1}}for(let lt=0;lt<U;lt++)for(let pt=0;pt<w;pt++){let Nt=h+pt+P*lt,qt=h+pt+P*(lt+1),Ht=h+(pt+1)+P*(lt+1),Yt=h+(pt+1)+P*lt;l.push(Nt,qt,Yt),l.push(qt,Ht,Yt),z+=6}o.addGroup(p,z,E),p+=z,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Bn(e){let t={};for(let n=0;n<e.length;n++){let i=Fr(e[n]);for(let s in i)t[s]=i[s]}return t}function gC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function n_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Tb={clone:Fr,merge:Bn},_C=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ts=class extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_C,this.fragmentShader=vC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=gC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},eu=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ha=new V,U1=new ce,N1=new ce,On=class extends eu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,n){return this.getViewBounds(t,U1,N1),n.subVectors(N1,U1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Wc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},rl=-90,ol=1,Hf=class extends In{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(rl,ol,t,n);s.layers=this.layers,this.add(s);let a=new On(rl,ol,t,n);a.layers=this.layers,this.add(a);let r=new On(rl,ol,t,n);r.layers=this.layers,this.add(r);let o=new On(rl,ol,t,n);o.layers=this.layers,this.add(o);let l=new On(rl,ol,t,n);l.layers=this.layers,this.add(l);let c=new On(rl,ol,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},nu=class extends Zn{constructor(t=[],n=Br,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vf=class extends xs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yl(5,5,5),a=new ts({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:$s});a.uniforms.tEquirect.value=n;let r=new Pn(s,a),o=n.minFilter;return n.minFilter===qa&&(n.minFilter=ai),new Hf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Zs=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},yC={type:"move"},xl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Zs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var iu=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var su=class extends Zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=si,f=si,d,h){super(null,r,o,l,c,f,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var T0=new V,xC=new V,SC=new Jt,Pi=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=T0.subVectors(i,n).cross(xC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(T0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||SC.getNormalMatrix(t),s=this.coplanarPoint(T0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new _l,MC=new ce(.5,.5),Rf=new V,Sl=class{constructor(t=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi,r=new Pi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],h=a[6],p=a[7],_=a[8],S=a[9],m=a[10],u=a[11],g=a[12],y=a[13],v=a[14],A=a[15];if(s[0].setComponents(c-r,p-f,u-_,A-g).normalize(),s[1].setComponents(c+r,p+f,u+_,A+g).normalize(),s[2].setComponents(c+o,p+d,u+S,A+y).normalize(),s[3].setComponents(c-o,p-d,u-S,A-y).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,u-m,A-v).normalize();else if(s[4].setComponents(c-l,p-h,u-m,A-v).normalize(),n===Qi)s[5].setComponents(c+l,p+h,u+m,A+v).normalize();else if(n===Jc)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let n=MC.distanceTo(t.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Rf.x=s.normal.x>0?t.max.x:t.min.x,Rf.y=s.normal.y>0?t.max.y:t.min.y,Rf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var au=class extends Zn{constructor(t,n,i=Ya,s,a,r,o=si,l=si,c,f=fl,d=1){if(f!==fl&&f!==Cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ru=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ir=class e extends Ss{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=n/l,p=[],_=[],S=[],m=[];for(let u=0;u<f;u++){let g=u*h-r;for(let y=0;y<c;y++){let v=y*d-a;_.push(v,-g,0),S.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let y=g+c*u,v=g+c*(u+1),A=g+1+c*(u+1),C=g+1+c*u;p.push(y,v,C),p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new ys(_,3)),this.setAttribute("normal",new ys(S,3)),this.setAttribute("uv",new ys(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var ou=class extends js{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Ml=class extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var bl=class extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gf=class extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Df(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function bC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Pr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kf=class extends Pr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:w0,endingEnd:w0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case C0:a=t,o=2*n-i;break;case R0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case C0:r=t,l=2*i-n;break;case R0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),S=_*_,m=S*_,u=-h*m+2*h*S-h*_,g=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*_+1,y=(-1-p)*m+(1.5+p)*S+.5*_,v=p*m-p*S;for(let A=0;A!==o;++A)a[A]=u*r[f+A]+g*r[c+A]+y*r[l+A]+v*r[d+A];return a}},Xf=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*f;return a}},Wf=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Df(n,this.TimeBufferType),this.values=Df(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Df(t.times,Array),values:Df(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Yc:n=this.InterpolantFactoryMethodDiscrete;break;case Pf:n=this.InterpolantFactoryMethodLinear;break;case Uf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yc;case this.InterpolantFactoryMethodLinear:return Pf;case this.InterpolantFactoryMethodSmooth:return Uf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&bC(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let S=n[d+_];if(S!==n[h+_]||S!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Pf;var Xa=class extends Si{constructor(t,n,i){super(t,n,i)}};Xa.prototype.ValueTypeName="bool";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=Yc;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var qf=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};qf.prototype.ValueTypeName="color";var Yf=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Yf.prototype.ValueTypeName="number";var Zf=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Qs.slerpFlat(a,0,r,c-o,r,c,l);return a}},lu=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Zf(this.times,this.values,this.getValueSize(),t)}};lu.prototype.ValueTypeName="quaternion";lu.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Si{constructor(t,n,i){super(t,n,i)}};Wa.prototype.ValueTypeName="string";Wa.prototype.ValueBufferType=Array;Wa.prototype.DefaultInterpolation=Yc;Wa.prototype.InterpolantFactoryMethodLinear=void 0;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Jf=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Jf.prototype.ValueTypeName="vector";var Nf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Kf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ab=new Kf,El=class{constructor(t){this.manager=t!==void 0?t:Ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";var ll=new WeakMap,Qf=class extends El{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=Nf.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let d=ll.get(r);d===void 0&&(d=[],ll.set(r,d)),d.push({onLoad:n,onError:s})}return r}let o=pl("img");function l(){f(),n&&n(this);let d=ll.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onLoad&&p.onLoad(this)}ll.delete(this),a.manager.itemEnd(t)}function c(d){f(),s&&s(d),Nf.remove(`image:${t}`);let h=ll.get(this)||[];for(let p=0;p<h.length;p++){let _=h[p];_.onError&&_.onError(d)}ll.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Nf.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var cu=class extends El{constructor(t){super(t)}load(t,n,i,s){let a=new Zn,r=new Qf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},uu=class extends In{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},hu=class extends uu{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},A0=new Je,L1=new V,O1=new V,N0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=es,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;L1.setFromMatrixPosition(t.matrixWorld),n.position.copy(L1),O1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(O1),n.updateMatrixWorld(),A0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(A0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fu=class extends eu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},L0=class extends N0{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},du=class extends uu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new L0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var jf=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var i_="\\[\\]\\.:\\/",EC=new RegExp("["+i_+"]","g"),s_="[^"+i_+"]",TC="[^"+i_.replace("\\.","")+"]",AC=/((?:WC+[\/:])*)/.source.replace("WC",s_),wC=/(WCOD+)?/.source.replace("WCOD",TC),CC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",s_),RC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",s_),DC=new RegExp("^"+AC+wC+CC+RC+"$"),UC=["material","materials","bones","map"],O0=class{constructor(t,n,i){let s=i||Be.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Be=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(EC,"")}static parseTrackName(t){let n=DC.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);UC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=O0;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MU=new Float32Array(1);var I1=new Je,pu=class{constructor(t,n,i=0,s=1/0){this.ray=new Qc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return I1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(I1),this}intersectObject(t,n=!0,i=[]){return I0(t,this,i,n),i.sort(P1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)I0(t[s],this,i,n);return i.sort(P1),i}};function P1(e,t){return e.distance-t.distance}function I0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)I0(a[r],t,n,!0)}}function a_(e,t,n,i){let s=NC(i);switch(n){case Y0:return e*t;case J0:return e*t/s.components*s.byteLength;case dd:return e*t/s.components*s.byteLength;case K0:return e*t*2/s.components*s.byteLength;case pd:return e*t*2/s.components*s.byteLength;case Z0:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case md:return e*t*4/s.components*s.byteLength;case _u:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yu:case xu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _d:case yd:return Math.max(e,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(e,8)*Math.max(t,8)/2;case xd:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case wd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Bd:case zd:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Hd:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NC(e){switch(e){case es:case k0:return{byteLength:1,components:1};case Tl:case X0:case Al:return{byteLength:2,components:1};case hd:case fd:return{byteLength:2,components:4};case Ya:case ud:case bs:return{byteLength:4,components:1};case W0:case q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Kb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function OC(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];e.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var IC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hR="gl_FragColor = linearToOutputTexel( gl_FragColor );",fR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_R=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ER=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$R=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:IC,alphahash_pars_fragment:PC,alphamap_fragment:BC,alphamap_pars_fragment:zC,alphatest_fragment:FC,alphatest_pars_fragment:HC,aomap_fragment:VC,aomap_pars_fragment:GC,batching_pars_vertex:kC,batching_vertex:XC,begin_vertex:WC,beginnormal_vertex:qC,bsdfs:YC,iridescence_fragment:ZC,bumpmap_pars_fragment:JC,clipping_planes_fragment:KC,clipping_planes_pars_fragment:QC,clipping_planes_pars_vertex:jC,clipping_planes_vertex:$C,color_fragment:tR,color_pars_fragment:eR,color_pars_vertex:nR,color_vertex:iR,common:sR,cube_uv_reflection_fragment:aR,defaultnormal_vertex:rR,displacementmap_pars_vertex:oR,displacementmap_vertex:lR,emissivemap_fragment:cR,emissivemap_pars_fragment:uR,colorspace_fragment:hR,colorspace_pars_fragment:fR,envmap_fragment:dR,envmap_common_pars_fragment:pR,envmap_pars_fragment:mR,envmap_pars_vertex:gR,envmap_physical_pars_fragment:wR,envmap_vertex:_R,fog_vertex:vR,fog_pars_vertex:yR,fog_fragment:xR,fog_pars_fragment:SR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:bR,lights_lambert_fragment:ER,lights_lambert_pars_fragment:TR,lights_pars_begin:AR,lights_toon_fragment:CR,lights_toon_pars_fragment:RR,lights_phong_fragment:DR,lights_phong_pars_fragment:UR,lights_physical_fragment:NR,lights_physical_pars_fragment:LR,lights_fragment_begin:OR,lights_fragment_maps:IR,lights_fragment_end:PR,logdepthbuf_fragment:BR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:FR,logdepthbuf_vertex:HR,map_fragment:VR,map_pars_fragment:GR,map_particle_fragment:kR,map_particle_pars_fragment:XR,metalnessmap_fragment:WR,metalnessmap_pars_fragment:qR,morphinstance_vertex:YR,morphcolor_vertex:ZR,morphnormal_vertex:JR,morphtarget_pars_vertex:KR,morphtarget_vertex:QR,normal_fragment_begin:jR,normal_fragment_maps:$R,normal_pars_fragment:t2,normal_pars_vertex:e2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:s2,clearcoat_normal_fragment_maps:a2,clearcoat_pars_fragment:r2,iridescence_pars_fragment:o2,opaque_fragment:l2,packing:c2,premultiplied_alpha_fragment:u2,project_vertex:h2,dithering_fragment:f2,dithering_pars_fragment:d2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:_2,shadowmap_vertex:v2,shadowmask_pars_fragment:y2,skinbase_vertex:x2,skinning_pars_vertex:S2,skinning_vertex:M2,skinnormal_vertex:b2,specularmap_fragment:E2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:w2,transmission_fragment:C2,transmission_pars_fragment:R2,uv_pars_fragment:D2,uv_pars_vertex:U2,uv_vertex:N2,worldpos_vertex:L2,background_vert:O2,background_frag:I2,backgroundCube_vert:P2,backgroundCube_frag:B2,cube_vert:z2,cube_frag:F2,depth_vert:H2,depth_frag:V2,distanceRGBA_vert:G2,distanceRGBA_frag:k2,equirect_vert:X2,equirect_frag:W2,linedashed_vert:q2,linedashed_frag:Y2,meshbasic_vert:Z2,meshbasic_frag:J2,meshlambert_vert:K2,meshlambert_frag:Q2,meshmatcap_vert:j2,meshmatcap_frag:$2,meshnormal_vert:t3,meshnormal_frag:e3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:s3,meshphysical_frag:a3,meshtoon_vert:r3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:h3,sprite_vert:f3,sprite_frag:d3},dt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Es={basic:{uniforms:Bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Bn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Bn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Bn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Bn([dt.points,dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Bn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Bn([dt.common,dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Bn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Bn([dt.sprite,dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Bn([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Bn([dt.lights,dt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Es.physical={uniforms:Bn([Es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qd={r:0,b:0,g:0},Hr=new $i,p3=new Je;function m3(e,t,n,i,s,a,r){let o=new re(0),l=a===!0?0:1,c,f,d=null,h=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function S(y){let v=!1,A=_(y);A===null?u(o,l):A&&A.isColor&&(u(A,1),v=!0);let C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let A=_(v);A&&(A.isCubeTexture||A.mapping===mu)?(f===void 0&&(f=new Pn(new yl(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Fr(Es.backgroundCube.uniforms),vertexShader:Es.backgroundCube.vertexShader,fragmentShader:Es.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Hr.copy(v.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler(Hr)),f.material.toneMapped=he.getTransfer(A.colorSpace)!==Te,(d!==A||h!==A.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Pn(new Ir(2,2),new ts({name:"BackgroundMaterial",uniforms:Fr(Es.background.uniforms),vertexShader:Es.background.vertexShader,fragmentShader:Es.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==Te,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(qd,n_(e)),i.buffers.color.setClear(qd.r,qd.g,qd.b,v,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:S,addToRenderList:m,dispose:g}}function g3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(b,R,B,F,G){let P=!1,H=d(F,B,R);a!==H&&(a=H,c(a.object)),P=p(b,F,B,G),P&&_(b,F,B,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(P||r)&&(r=!1,v(b,R,B,F),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function f(b){return e.deleteVertexArray(b)}function d(b,R,B){let F=B.wireframe===!0,G=i[b.id];G===void 0&&(G={},i[b.id]=G);let P=G[R.id];P===void 0&&(P={},G[R.id]=P);let H=P[F];return H===void 0&&(H=h(l()),P[F]=H),H}function h(b){let R=[],B=[],F=[];for(let G=0;G<n;G++)R[G]=0,B[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,R,B,F){let G=a.attributes,P=R.attributes,H=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let lt=G[z],pt=P[z];if(pt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),lt===void 0||lt.attribute!==pt||pt&&lt.data!==pt.data)return!0;H++}return a.attributesNum!==H||a.index!==F}function _(b,R,B,F){let G={},P=R.attributes,H=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let lt=P[z];lt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));let pt={};pt.attribute=lt,lt&&lt.data&&(pt.data=lt.data),G[z]=pt,H++}a.attributes=G,a.attributesNum=H,a.index=F}function S(){let b=a.newAttributes;for(let R=0,B=b.length;R<B;R++)b[R]=0}function m(b){u(b,0)}function u(b,R){let B=a.newAttributes,F=a.enabledAttributes,G=a.attributeDivisors;B[b]=1,F[b]===0&&(e.enableVertexAttribArray(b),F[b]=1),G[b]!==R&&(e.vertexAttribDivisor(b,R),G[b]=R)}function g(){let b=a.newAttributes,R=a.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==b[B]&&(e.disableVertexAttribArray(B),R[B]=0)}function y(b,R,B,F,G,P,H){H===!0?e.vertexAttribIPointer(b,R,B,G,P):e.vertexAttribPointer(b,R,B,F,G,P)}function v(b,R,B,F){S();let G=F.attributes,P=B.getAttributes(),H=R.defaultAttributeValues;for(let Q in P){let z=P[Q];if(z.location>=0){let j=G[Q];if(j===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){let lt=j.normalized,pt=j.itemSize,Nt=t.get(j);if(Nt===void 0)continue;let qt=Nt.buffer,Ht=Nt.type,Yt=Nt.bytesPerElement,Y=Ht===e.INT||Ht===e.UNSIGNED_INT||j.gpuType===ud;if(j.isInterleavedBufferAttribute){let tt=j.data,mt=tt.stride,Rt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let ft=0;ft<z.locationSize;ft++)u(z.location+ft,tt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<z.locationSize;ft++)m(z.location+ft);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let ft=0;ft<z.locationSize;ft++)y(z.location+ft,pt/z.locationSize,Ht,lt,mt*Yt,(Rt+pt/z.locationSize*ft)*Yt,Y)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<z.locationSize;tt++)u(z.location+tt,j.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<z.locationSize;tt++)m(z.location+tt);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let tt=0;tt<z.locationSize;tt++)y(z.location+tt,pt/z.locationSize,Ht,lt,pt*Yt,pt/z.locationSize*tt*Yt,Y)}}else if(H!==void 0){let lt=H[Q];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(z.location,lt);break;case 3:e.vertexAttrib3fv(z.location,lt);break;case 4:e.vertexAttrib4fv(z.location,lt);break;default:e.vertexAttrib1fv(z.location,lt)}}}}g()}function A(){U();for(let b in i){let R=i[b];for(let B in R){let F=R[B];for(let G in F)f(F[G].object),delete F[G];delete R[B]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let B in R){let F=R[B];for(let G in F)f(F[G].object),delete F[G];delete R[B]}delete i[b.id]}function w(b){for(let R in i){let B=i[R];if(B[b.id]===void 0)continue;let F=B[b.id];for(let G in F)f(F[G].object),delete F[G];delete B[b.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function _3(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=f[S]*h[S];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==zi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===Al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==es&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bs&&!U)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function y3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Pi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,y=g*4,v=u.clippingState||null;l.value=v,v=f(_,h,y,p);for(let A=0;A!==y;++A)v[A]=n[A];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let u=p+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==S;++y,v+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function x3(e){let t=new WeakMap;function n(r,o){return o===od?r.mapping=Br:o===ld&&(r.mapping=zr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===od||o===ld)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Vf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Ul=4,wb=[.125,.215,.35,.446,.526,.582],kr=20,r_=new fu,Cb=new re,o_=null,l_=0,c_=0,u_=!1,Gr=(1+Math.sqrt(5))/2,Dl=1/Gr,Rb=[new V(-Gr,Dl,0),new V(Gr,Dl,0),new V(-Dl,0,Gr),new V(Dl,0,Gr),new V(0,Gr,-Dl),new V(0,Gr,Dl),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],S3=new V,Jd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=S3}=a;o_=this._renderer.getRenderTarget(),l_=this._renderer.getActiveCubeFace(),c_=this._renderer.getActiveMipmapLevel(),u_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ub(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(o_,l_,c_),this._renderer.xr.enabled=u_,t.scissorTest=!1,Yd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Br||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),o_=this._renderer.getRenderTarget(),l_=this._renderer.getActiveCubeFace(),c_=this._renderer.getActiveMipmapLevel(),u_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Al,format:zi,colorSpace:Or,depthBuffer:!1},s=Db(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Db(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M3(a)),this._blurMaterial=b3(a,t,n)}return s}_compileMaterial(t){let n=new Pn(this._lodPlanes[0],t);this._renderer.compile(n,r_)}_sceneToCubeUV(t,n,i,s,a){let l=new On(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Cb),d.toneMapping=ta,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new jc({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new Pn(new yl,S),u=!1,g=t.background;g?g.isColor&&(S.color.copy(g),t.background=null,u=!0):(S.color.copy(Cb),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[y]));let A=this._cubeSize;Yd(s,v*A,y>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Br||t.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ub());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Pn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Yd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,r_)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Rb[(s-a-1)%Rb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new Pn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*kr-1),S=a/_,m=isFinite(a)?1+Math.floor(f*S):kr;m>kr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);let u=[],g=0;for(let w=0;w<kr;++w){let U=w/S,E=Math.exp(-U*U/2);u.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;let v=this._sizeLods[s],A=3*v*(s>y-Ul?s-y+Ul:0),C=4*(this._cubeSize-v);Yd(n,A,C,3*v,2*v),l.setRenderTarget(n),l.render(d,r_)}};function M3(e){let t=[],n=[],i=[],s=e,a=e-Ul+1+wb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Ul?l=wb[r-e+Ul-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,S=3,m=2,u=1,g=new Float32Array(S*_*p),y=new Float32Array(m*_*p),v=new Float32Array(u*_*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,U=C>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];g.set(E,S*_*C),y.set(h,m*_*C);let b=[C,C,C,C,C,C];v.set(b,u*_*C)}let A=new Ss;A.setAttribute("position",new Tn(g,S)),A.setAttribute("uv",new Tn(y,m)),A.setAttribute("faceIndex",new Tn(v,u)),t.push(A),s>Ul&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Db(e,t,n){let i=new xs(e,t,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function b3(e,t,n){let i=new Float32Array(kr),s=new V(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:x_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function Ub(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function Nb(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$s,depthTest:!1,depthWrite:!1})}function x_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===od||l===ld,f=l===Br||l===zr;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Jd(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new Jd(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function T3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&ml("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function A3(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,S=0;if(p!==null){let g=p.array;S=p.version;for(let y=0,v=g.length;y<v;y+=3){let A=g[y+0],C=g[y+1],w=g[y+2];h.push(A,C,C,w,w,A)}}else if(_!==void 0){let g=_.array;S=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){let A=y+0,C=y+1,w=y+2;h.push(A,C,C,w,w,A)}}else return;let m=new(e_(h)?tu:$c)(h,1);m.version=S;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function f(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function w3(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,h*r,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,S){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function C3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function R3(e,t,n){let i=new WeakMap,s=new Xe;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let v=o.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*A*4*d),w=new Kc(C,v,A,d);w.type=bs,w.needsUpdate=!0;let U=y*4;for(let b=0;b<d;b++){let R=m[b],B=u[b],F=g[b],G=v*A*4*b;for(let P=0;P<R.count;P++){let H=P*U;p===!0&&(s.fromBufferAttribute(R,P),C[G+H+0]=s.x,C[G+H+1]=s.y,C[G+H+2]=s.z,C[G+H+3]=0),_===!0&&(s.fromBufferAttribute(B,P),C[G+H+4]=s.x,C[G+H+5]=s.y,C[G+H+6]=s.z,C[G+H+7]=0),S===!0&&(s.fromBufferAttribute(F,P),C[G+H+8]=s.x,C[G+H+9]=s.y,C[G+H+10]=s.z,C[G+H+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new ce(v,A)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function D3(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Qb=new Zn,Lb=new au(1,1),jb=new Kc,$b=new Ff,tE=new nu,Ob=[],Ib=[],Pb=new Float32Array(16),Bb=new Float32Array(9),zb=new Float32Array(4);function Ll(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Ob[s];if(a===void 0&&(a=new Float32Array(s),Ob[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function un(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Qd(e,t){let n=Ib[t];n===void 0&&(n=new Int32Array(t),Ib[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function U3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function N3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),un(n,t)}}function L3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),un(n,t)}}function O3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),un(n,t)}}function I3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;zb.set(i),e.uniformMatrix2fv(this.addr,!1,zb),un(n,i)}}function P3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Bb.set(i),e.uniformMatrix3fv(this.addr,!1,Bb),un(n,i)}}function B3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Pb.set(i),e.uniformMatrix4fv(this.addr,!1,Pb),un(n,i)}}function z3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function F3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),un(n,t)}}function H3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),un(n,t)}}function V3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),un(n,t)}}function G3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function k3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),un(n,t)}}function X3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),un(n,t)}}function W3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),un(n,t)}}function q3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Lb.compareFunction=j0,a=Lb):a=Qb,n.setTexture2D(t||a,s)}function Y3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||$b,s)}function Z3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||tE,s)}function J3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||jb,s)}function K3(e){switch(e){case 5126:return U3;case 35664:return N3;case 35665:return L3;case 35666:return O3;case 35674:return I3;case 35675:return P3;case 35676:return B3;case 5124:case 35670:return z3;case 35667:case 35671:return F3;case 35668:case 35672:return H3;case 35669:case 35673:return V3;case 5125:return G3;case 36294:return k3;case 36295:return X3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return J3}}function Q3(e,t){e.uniform1fv(this.addr,t)}function j3(e,t){let n=Ll(t,this.size,2);e.uniform2fv(this.addr,n)}function $3(e,t){let n=Ll(t,this.size,3);e.uniform3fv(this.addr,n)}function tD(e,t){let n=Ll(t,this.size,4);e.uniform4fv(this.addr,n)}function eD(e,t){let n=Ll(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nD(e,t){let n=Ll(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function iD(e,t){let n=Ll(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sD(e,t){e.uniform1iv(this.addr,t)}function aD(e,t){e.uniform2iv(this.addr,t)}function rD(e,t){e.uniform3iv(this.addr,t)}function oD(e,t){e.uniform4iv(this.addr,t)}function lD(e,t){e.uniform1uiv(this.addr,t)}function cD(e,t){e.uniform2uiv(this.addr,t)}function uD(e,t){e.uniform3uiv(this.addr,t)}function hD(e,t){e.uniform4uiv(this.addr,t)}function fD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Qb,a[r])}function dD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||$b,a[r])}function pD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||tE,a[r])}function mD(e,t,n){let i=this.cache,s=t.length,a=Qd(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||jb,a[r])}function gD(e){switch(e){case 5126:return Q3;case 35664:return j3;case 35665:return $3;case 35666:return tD;case 35674:return eD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return sD;case 35667:case 35671:return aD;case 35668:case 35672:return rD;case 35669:case 35673:return oD;case 5125:return lD;case 36294:return cD;case 36295:return uD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return fD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}var f_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=K3(n.type)}},d_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gD(n.type)}},p_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},h_=/(\w+)(\])?(\[|\.)?/g;function Fb(e,t){e.seq.push(t),e.map[t.id]=t}function _D(e,t,n){let i=e.name,s=i.length;for(h_.lastIndex=0;;){let a=h_.exec(i),r=h_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Fb(n,c===void 0?new f_(o,e,t):new d_(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new p_(o),Fb(n,d)),n=d}}}var Nl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);_D(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Hb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var vD=37297,yD=0;function xD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Vb=new Jt;function SD(e){he._getMatrix(Vb,he.workingColorSpace,e);let t=`mat3( ${Vb.elements.map(n=>n.toFixed(4))} )`;switch(he.getTransfer(e)){case Zc:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Gb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+xD(e.getShaderSource(t),o)}else return a}function MD(e,t){let n=SD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bD(e,t){let n;switch(t){case ab:n="Linear";break;case rb:n="Reinhard";break;case ob:n="Cineon";break;case lb:n="ACESFilmic";break;case ub:n="AgX";break;case hb:n="Neutral";break;case cb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Zd=new V;function ED(){he.getLuminanceCoefficients(Zd);let e=Zd.x.toFixed(4),t=Zd.y.toFixed(4),n=Zd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Su).join(`
`)}function AD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function wD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Su(e){return e!==""}function kb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var CD=/^[ \t]*#include +<([\w\d./]+)>/gm;function m_(e){return e.replace(CD,DD)}var RD=new Map;function DD(e,t){let n=Qt[t];if(n===void 0){let i=RD.get(t);if(i!==void 0)n=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return m_(n)}var UD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wb(e){return e.replace(UD,ND)}function ND(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function qb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function LD(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ms&&(t="SHADOWMAP_TYPE_VSM"),t}function OD(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Br:case zr:t="ENVMAP_TYPE_CUBE";break;case mu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ID(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===zr&&(t="ENVMAP_MODE_REFRACTION"),t}function PD(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case V0:t="ENVMAP_BLENDING_MULTIPLY";break;case ib:t="ENVMAP_BLENDING_MIX";break;case sb:t="ENVMAP_BLENDING_ADD";break}return t}function BD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function zD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=LD(n),c=OD(n),f=ID(n),d=PD(n),h=BD(n),p=TD(n),_=AD(a),S=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Su).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Su).join(`
`),u.length>0&&(u+=`
`)):(m=[qb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Su).join(`
`),u=[qb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ta?"#define TONE_MAPPING":"",n.toneMapping!==ta?Qt.tonemapping_pars_fragment:"",n.toneMapping!==ta?bD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,MD("linearToOutputTexel",n.outputColorSpace),ED(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Su).join(`
`)),r=m_(r),r=kb(r,n),r=Xb(r,n),o=m_(o),o=kb(o,n),o=Xb(o,n),r=Wb(r),o=Wb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+m+r,v=g+u+o,A=Hb(s,s.VERTEX_SHADER,y),C=Hb(s,s.FRAGMENT_SHADER,v);s.attachShader(S,A),s.attachShader(S,C),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(R){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(C)||"",P=B.trim(),H=F.trim(),Q=G.trim(),z=!0,j=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,A,C);else{let lt=Gb(s,A,"vertex"),pt=Gb(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+lt+`
`+pt)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(H===""||Q==="")&&(j=!1);j&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(A),s.deleteShader(C),U=new Nl(s,S),E=wD(s,S)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,vD)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yD++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=C,this}var FD=0,g_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new __(t),n.set(t,i)),i}},__=class{constructor(t){this.id=FD++,this.code=t,this.usedTimes=0}};function HD(e,t,n,i,s,a,r){let o=new vl,l=new g_,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,R,B,F){let G=B.fog,P=F.geometry,H=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?n:t).get(E.envMap||H),z=Q&&Q.mapping===mu?Q.image.height:null,j=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let lt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,pt=lt!==void 0?lt.length:0,Nt=0;P.morphAttributes.position!==void 0&&(Nt=1),P.morphAttributes.normal!==void 0&&(Nt=2),P.morphAttributes.color!==void 0&&(Nt=3);let qt,Ht,Yt,Y;if(j){let te=Es[j];qt=te.vertexShader,Ht=te.fragmentShader}else qt=E.vertexShader,Ht=E.fragmentShader,l.update(E),Yt=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);let tt=e.getRenderTarget(),mt=e.state.buffers.depth.getReversed(),Rt=F.isInstancedMesh===!0,ft=F.isBatchedMesh===!0,jt=!!E.map,ye=!!E.matcap,D=!!Q,Mt=!!E.aoMap,zt=!!E.lightMap,Lt=!!E.bumpMap,xt=!!E.normalMap,me=!!E.displacementMap,st=!!E.emissiveMap,It=!!E.metalnessMap,Ne=!!E.roughnessMap,oe=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,I=E.iridescence>0,q=E.sheen>0,nt=E.transmission>0,W=oe&&!!E.anisotropyMap,wt=T&&!!E.clearcoatMap,at=T&&!!E.clearcoatNormalMap,gt=T&&!!E.clearcoatRoughnessMap,bt=I&&!!E.iridescenceMap,$=I&&!!E.iridescenceThicknessMap,ct=q&&!!E.sheenColorMap,vt=q&&!!E.sheenRoughnessMap,At=!!E.specularMap,ht=!!E.specularColorMap,Vt=!!E.specularIntensityMap,N=nt&&!!E.transmissionMap,rt=nt&&!!E.thicknessMap,ot=!!E.gradientMap,Et=!!E.alphaMap,et=E.alphaTest>0,J=!!E.alphaHash,_t=!!E.extensions,Gt=ta;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=e.toneMapping);let fe={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:Ht,defines:E.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ft,batchingColor:ft&&F._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,instancingMorph:Rt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Or,alphaToCoverage:!!E.alphaToCoverage,map:jt,matcap:ye,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:z,aoMap:Mt,lightMap:zt,bumpMap:Lt,normalMap:xt,displacementMap:h&&me,emissiveMap:st,normalMapObjectSpace:xt&&E.normalMapType===pb,normalMapTangentSpace:xt&&E.normalMapType===Q0,metalnessMap:It,roughnessMap:Ne,anisotropy:oe,anisotropyMap:W,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:at,clearcoatRoughnessMap:gt,dispersion:x,iridescence:I,iridescenceMap:bt,iridescenceThicknessMap:$,sheen:q,sheenColorMap:ct,sheenRoughnessMap:vt,specularMap:At,specularColorMap:ht,specularIntensityMap:Vt,transmission:nt,transmissionMap:N,thicknessMap:rt,gradientMap:ot,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:Et,alphaTest:et,alphaHash:J,combine:E.combine,mapUv:jt&&S(E.map.channel),aoMapUv:Mt&&S(E.aoMap.channel),lightMapUv:zt&&S(E.lightMap.channel),bumpMapUv:Lt&&S(E.bumpMap.channel),normalMapUv:xt&&S(E.normalMap.channel),displacementMapUv:me&&S(E.displacementMap.channel),emissiveMapUv:st&&S(E.emissiveMap.channel),metalnessMapUv:It&&S(E.metalnessMap.channel),roughnessMapUv:Ne&&S(E.roughnessMap.channel),anisotropyMapUv:W&&S(E.anisotropyMap.channel),clearcoatMapUv:wt&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:at&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:$&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&S(E.sheenRoughnessMap.channel),specularMapUv:At&&S(E.specularMap.channel),specularColorMapUv:ht&&S(E.specularColorMap.channel),specularIntensityMapUv:Vt&&S(E.specularIntensityMap.channel),transmissionMapUv:N&&S(E.transmissionMap.channel),thicknessMapUv:rt&&S(E.thicknessMap.channel),alphaMapUv:Et&&S(E.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(jt||Et),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:F.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Gt,decodeVideoTexture:jt&&E.map.isVideoTexture===!0&&he.getTransfer(E.map.colorSpace)===Te,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&he.getTransfer(E.emissiveMap.colorSpace)===Te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bi,flipSided:E.side===An,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_t&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&E.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)b.push(R),b.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(g(b,E),y(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let b=_[E.type],R;if(b){let B=Es[b];R=Tb.clone(B.uniforms)}else R=E.uniforms;return R}function A(E,b){let R;for(let B=0,F=f.length;B<F;B++){let G=f[B];if(G.cacheKey===b){R=G,++R.usedTimes;break}}return R===void 0&&(R=new zD(e,b,E,a),f.push(R)),R}function C(E){if(--E.usedTimes===0){let b=f.indexOf(E);f[b]=f[f.length-1],f.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:U}}function VD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function GD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Yb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Zb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,_,S,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function o(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||GD),i.length>1&&i.sort(h||Yb),s.length>1&&s.sort(h||Yb)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function kD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Zb,e.set(i,[r])):s>=a.length?(r=new Zb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function XD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new re};break;case"SpotLight":n={position:new V,direction:new V,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function WD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var qD=0;function YD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ZD(e){let t=new XD,n=WD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new Je,r=new Je;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,g=0,y=0,v=0,A=0,C=0,w=0;c.sort(YD);for(let E=0,b=c.length;E<b;E++){let R=c[E],B=R.color,F=R.intensity,G=R.distance,P=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=B.r*F,d+=B.g*F,h+=B.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],F);w++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,z=n.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=H,p++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(B).multiplyScalar(F),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[S]=H;let Q=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,Q.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[S]=Q.matrix,R.castShadow){let z=n.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=P,v++}S++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(B).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let Q=R.shadow,z=n.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=R.shadow.matrix,y++}i.point[_]=H,_++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[u]=H,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==g||U.numPointShadows!==y||U.numSpotShadows!==v||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.directionalLength=p,U.pointLength=_,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=g,U.numPointShadows=y,U.numSpotShadows=v,U.numSpotMaps=A,U.numLightProbes=w,i.version=qD++)}function l(c,f){let d=0,h=0,p=0,_=0,S=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let y=c[u];if(y.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let v=i.hemi[S];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Jb(e){let t=new ZD(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function JD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Jb(e),t.set(s,[o])):a>=r.length?(o=new Jb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var KD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jD(e,t,n){let i=new Sl,s=new ce,a=new ce,r=new Xe,o=new bl({depthPacking:Xd}),l=new Gf,c={},f=n.maxTextureSize,d={[ji]:An,[An]:ji,[Bi]:Bi},h=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:KD,fragmentShader:QD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ss;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Pn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let u=this.type;this.render=function(C,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),B=e.state;B.setBlending($s),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=u!==Ms&&this.type===Ms,G=u===Ms&&this.type!==Ms;for(let P=0,H=C.length;P<H;P++){let Q=C[P],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let j=z.getFrameExtents();if(s.multiply(j),a.copy(z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/j.x),s.x=a.x*j.x,z.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/j.y),s.y=a.y*j.y,z.mapSize.y=a.y)),z.map===null||F===!0||G===!0){let pt=this.type!==Ms?{minFilter:si,magFilter:si}:{};z.map!==null&&z.map.dispose(),z.map=new xs(s.x,s.y,pt),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();let lt=z.getViewportCount();for(let pt=0;pt<lt;pt++){let Nt=z.getViewport(pt);r.set(a.x*Nt.x,a.y*Nt.y,a.x*Nt.z,a.y*Nt.w),B.viewport(r),z.updateMatrices(Q,pt),i=z.getFrustum(),v(w,U,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Ms&&g(z,U),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,R)};function g(C,w){let U=t.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xs(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(w,null,U,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(w,null,U,p,S,null)}function y(C,w,U,E){let b=null,R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=U.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=b.uuid,F=w.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let P=G[F];P===void 0&&(P=b.clone(),G[F]=P,w.addEventListener("dispose",A)),b=P}if(b.visible=w.visible,b.wireframe=w.wireframe,E===Ms?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=e.properties.get(b);B.light=U}return b}function v(C,w,U,E,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ms)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let F=t.update(C),G=C.material;if(Array.isArray(G)){let P=F.groups;for(let H=0,Q=P.length;H<Q;H++){let z=P[H],j=G[z.materialIndex];if(j&&j.visible){let lt=y(C,j,E,b);C.onBeforeShadow(e,C,w,U,F,lt,z),e.renderBufferDirect(U,null,F,lt,C,z),C.onAfterShadow(e,C,w,U,F,lt,z)}}}else if(G.visible){let P=y(C,G,E,b);C.onBeforeShadow(e,C,w,U,F,P,null),e.renderBufferDirect(U,null,F,P,C,null),C.onAfterShadow(e,C,w,U,F,P,null)}}let B=C.children;for(let F=0,G=B.length;F<G;F++)v(B[F],w,U,E,b)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var $D={[td]:ed,[nd]:ad,[id]:rd,[Lr]:sd,[ed]:td,[ad]:nd,[rd]:id,[sd]:Lr};function tU(e,t){function n(){let N=!1,rt=new Xe,ot=null,Et=new Xe(0,0,0,0);return{setMask:function(et){ot!==et&&!N&&(e.colorMask(et,et,et,et),ot=et)},setLocked:function(et){N=et},setClear:function(et,J,_t,Gt,fe){fe===!0&&(et*=Gt,J*=Gt,_t*=Gt),rt.set(et,J,_t,Gt),Et.equals(rt)===!1&&(e.clearColor(et,J,_t,Gt),Et.copy(rt))},reset:function(){N=!1,ot=null,Et.set(-1,0,0,0)}}}function i(){let N=!1,rt=!1,ot=null,Et=null,et=null;return{setReversed:function(J){if(rt!==J){let _t=t.get("EXT_clip_control");J?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),rt=J;let Gt=et;et=null,this.setClear(Gt)}},getReversed:function(){return rt},setTest:function(J){J?tt(e.DEPTH_TEST):mt(e.DEPTH_TEST)},setMask:function(J){ot!==J&&!N&&(e.depthMask(J),ot=J)},setFunc:function(J){if(rt&&(J=$D[J]),Et!==J){switch(J){case td:e.depthFunc(e.NEVER);break;case ed:e.depthFunc(e.ALWAYS);break;case nd:e.depthFunc(e.LESS);break;case Lr:e.depthFunc(e.LEQUAL);break;case id:e.depthFunc(e.EQUAL);break;case sd:e.depthFunc(e.GEQUAL);break;case ad:e.depthFunc(e.GREATER);break;case rd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Et=J}},setLocked:function(J){N=J},setClear:function(J){et!==J&&(rt&&(J=1-J),e.clearDepth(J),et=J)},reset:function(){N=!1,ot=null,Et=null,et=null,rt=!1}}}function s(){let N=!1,rt=null,ot=null,Et=null,et=null,J=null,_t=null,Gt=null,fe=null;return{setTest:function(te){N||(te?tt(e.STENCIL_TEST):mt(e.STENCIL_TEST))},setMask:function(te){rt!==te&&!N&&(e.stencilMask(te),rt=te)},setFunc:function(te,Mi,wn){(ot!==te||Et!==Mi||et!==wn)&&(e.stencilFunc(te,Mi,wn),ot=te,Et=Mi,et=wn)},setOp:function(te,Mi,wn){(J!==te||_t!==Mi||Gt!==wn)&&(e.stencilOp(te,Mi,wn),J=te,_t=Mi,Gt=wn)},setLocked:function(te){N=te},setClear:function(te){fe!==te&&(e.clearStencil(te),fe=te)},reset:function(){N=!1,rt=null,ot=null,Et=null,et=null,J=null,_t=null,Gt=null,fe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,A=null,C=null,w=new re(0,0,0),U=0,E=!1,b=null,R=null,B=null,F=null,G=null,P=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Q>=2);let j=null,lt={},pt=e.getParameter(e.SCISSOR_BOX),Nt=e.getParameter(e.VIEWPORT),qt=new Xe().fromArray(pt),Ht=new Xe().fromArray(Nt);function Yt(N,rt,ot,Et){let et=new Uint8Array(4),J=e.createTexture();e.bindTexture(N,J),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _t=0;_t<ot;_t++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,Et,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(rt+_t,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return J}let Y={};Y[e.TEXTURE_2D]=Yt(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Lr),Lt(!1),xt(P0),tt(e.CULL_FACE),Mt($s);function tt(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function mt(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Rt(N,rt){return d[N]!==rt?(e.bindFramebuffer(N,rt),d[N]=rt,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=rt),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function ft(N,rt){let ot=p,Et=!1;if(N){ot=h.get(rt),ot===void 0&&(ot=[],h.set(rt,ot));let et=N.textures;if(ot.length!==et.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let J=0,_t=et.length;J<_t;J++)ot[J]=e.COLOR_ATTACHMENT0+J;ot.length=et.length,Et=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,Et=!0);Et&&e.drawBuffers(ot)}function jt(N){return _!==N?(e.useProgram(N),_=N,!0):!1}let ye={[Ga]:e.FUNC_ADD,[H1]:e.FUNC_SUBTRACT,[V1]:e.FUNC_REVERSE_SUBTRACT};ye[G1]=e.MIN,ye[k1]=e.MAX;let D={[X1]:e.ZERO,[W1]:e.ONE,[q1]:e.SRC_COLOR,[Lf]:e.SRC_ALPHA,[j1]:e.SRC_ALPHA_SATURATE,[K1]:e.DST_COLOR,[Z1]:e.DST_ALPHA,[Y1]:e.ONE_MINUS_SRC_COLOR,[Of]:e.ONE_MINUS_SRC_ALPHA,[Q1]:e.ONE_MINUS_DST_COLOR,[J1]:e.ONE_MINUS_DST_ALPHA,[$1]:e.CONSTANT_COLOR,[tb]:e.ONE_MINUS_CONSTANT_COLOR,[eb]:e.CONSTANT_ALPHA,[nb]:e.ONE_MINUS_CONSTANT_ALPHA};function Mt(N,rt,ot,Et,et,J,_t,Gt,fe,te){if(N===$s){S===!0&&(mt(e.BLEND),S=!1);return}if(S===!1&&(tt(e.BLEND),S=!0),N!==F1){if(N!==m||te!==E){if((u!==Ga||v!==Ga)&&(e.blendEquation(e.FUNC_ADD),u=Ga,v=Ga),te)switch(N){case Nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case z0:e.blendFunc(e.ONE,e.ONE);break;case F0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case H0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case z0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case F0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,y=null,A=null,C=null,w.set(0,0,0),U=0,m=N,E=te}return}et=et||rt,J=J||ot,_t=_t||Et,(rt!==u||et!==v)&&(e.blendEquationSeparate(ye[rt],ye[et]),u=rt,v=et),(ot!==g||Et!==y||J!==A||_t!==C)&&(e.blendFuncSeparate(D[ot],D[Et],D[J],D[_t]),g=ot,y=Et,A=J,C=_t),(Gt.equals(w)===!1||fe!==U)&&(e.blendColor(Gt.r,Gt.g,Gt.b,fe),w.copy(Gt),U=fe),m=N,E=!1}function zt(N,rt){N.side===Bi?mt(e.CULL_FACE):tt(e.CULL_FACE);let ot=N.side===An;rt&&(ot=!ot),Lt(ot),N.blending===Nr&&N.transparent===!1?Mt($s):Mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let Et=N.stencilWrite;o.setTest(Et),Et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){b!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),b=N)}function xt(N){N!==B1?(tt(e.CULL_FACE),N!==R&&(N===P0?e.cullFace(e.BACK):N===z1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):mt(e.CULL_FACE),R=N}function me(N){N!==B&&(H&&e.lineWidth(N),B=N)}function st(N,rt,ot){N?(tt(e.POLYGON_OFFSET_FILL),(F!==rt||G!==ot)&&(e.polygonOffset(rt,ot),F=rt,G=ot)):mt(e.POLYGON_OFFSET_FILL)}function It(N){N?tt(e.SCISSOR_TEST):mt(e.SCISSOR_TEST)}function Ne(N){N===void 0&&(N=e.TEXTURE0+P-1),j!==N&&(e.activeTexture(N),j=N)}function oe(N,rt,ot){ot===void 0&&(j===null?ot=e.TEXTURE0+P-1:ot=j);let Et=lt[ot];Et===void 0&&(Et={type:void 0,texture:void 0},lt[ot]=Et),(Et.type!==N||Et.texture!==rt)&&(j!==ot&&(e.activeTexture(ot),j=ot),e.bindTexture(N,rt||Y[N]),Et.type=N,Et.texture=rt)}function T(){let N=lt[j];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(N){qt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function vt(N){Ht.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Ht.copy(N))}function At(N,rt){let ot=c.get(rt);ot===void 0&&(ot=new WeakMap,c.set(rt,ot));let Et=ot.get(N);Et===void 0&&(Et=e.getUniformBlockIndex(rt,N.name),ot.set(N,Et))}function ht(N,rt){let Et=c.get(rt).get(N);l.get(rt)!==Et&&(e.uniformBlockBinding(rt,Et,N.__bindingPointIndex),l.set(rt,Et))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},j=null,lt={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,A=null,C=null,w=new re(0,0,0),U=0,E=!1,b=null,R=null,B=null,F=null,G=null,qt.set(0,0,e.canvas.width,e.canvas.height),Ht.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:mt,bindFramebuffer:Rt,drawBuffers:ft,useProgram:jt,setBlending:Mt,setMaterial:zt,setFlipSided:Lt,setCullFace:xt,setLineWidth:me,setPolygonOffset:st,setScissorTest:It,activeTexture:Ne,bindTexture:oe,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:bt,texImage3D:$,updateUBOMapping:At,uniformBlockBinding:ht,texStorage2D:at,texStorage3D:gt,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:W,compressedTexSubImage3D:wt,scissor:ct,viewport:vt,reset:Vt}}function eU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return p?new OffscreenCanvas(T,x):pl("canvas")}function S(T,x,I){let q=1,nt=oe(T);if((nt.width>I||nt.height>I)&&(q=I/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(q*nt.width),wt=Math.floor(q*nt.height);d===void 0&&(d=_(W,wt));let at=x?_(W,wt):d;return at.width=W,at.height=wt,at.getContext("2d").drawImage(T,0,0,W,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+W+"x"+wt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){e.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,x,I,q,nt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===e.RED&&(I===e.FLOAT&&(W=e.R32F),I===e.HALF_FLOAT&&(W=e.R16F),I===e.UNSIGNED_BYTE&&(W=e.R8)),x===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.R8UI),I===e.UNSIGNED_SHORT&&(W=e.R16UI),I===e.UNSIGNED_INT&&(W=e.R32UI),I===e.BYTE&&(W=e.R8I),I===e.SHORT&&(W=e.R16I),I===e.INT&&(W=e.R32I)),x===e.RG&&(I===e.FLOAT&&(W=e.RG32F),I===e.HALF_FLOAT&&(W=e.RG16F),I===e.UNSIGNED_BYTE&&(W=e.RG8)),x===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RG8UI),I===e.UNSIGNED_SHORT&&(W=e.RG16UI),I===e.UNSIGNED_INT&&(W=e.RG32UI),I===e.BYTE&&(W=e.RG8I),I===e.SHORT&&(W=e.RG16I),I===e.INT&&(W=e.RG32I)),x===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGB8UI),I===e.UNSIGNED_SHORT&&(W=e.RGB16UI),I===e.UNSIGNED_INT&&(W=e.RGB32UI),I===e.BYTE&&(W=e.RGB8I),I===e.SHORT&&(W=e.RGB16I),I===e.INT&&(W=e.RGB32I)),x===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),I===e.UNSIGNED_INT&&(W=e.RGBA32UI),I===e.BYTE&&(W=e.RGBA8I),I===e.SHORT&&(W=e.RGBA16I),I===e.INT&&(W=e.RGBA32I)),x===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),x===e.RGBA){let wt=nt?Zc:he.getTransfer(q);I===e.FLOAT&&(W=e.RGBA32F),I===e.HALF_FLOAT&&(W=e.RGBA16F),I===e.UNSIGNED_BYTE&&(W=wt===Te?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(T,x){let I;return T?x===null||x===Ya||x===wl?I=e.DEPTH24_STENCIL8:x===bs?I=e.DEPTH32F_STENCIL8:x===Tl&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ya||x===wl?I=e.DEPTH_COMPONENT24:x===bs?I=e.DEPTH_COMPONENT32F:x===Tl&&(I=e.DEPTH_COMPONENT16),I}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==si&&T.minFilter!==ai?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){let x=T.target;x.removeEventListener("dispose",C),U(x),x.isVideoTexture&&f.delete(x)}function w(T){let x=T.target;x.removeEventListener("dispose",w),b(x)}function U(T){let x=i.get(T);if(x.__webglInit===void 0)return;let I=T.source,q=h.get(I);if(q){let nt=q[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(q).length===0&&h.delete(I)}i.remove(T)}function E(T){let x=i.get(T);e.deleteTexture(x.__webglTexture);let I=T.source,q=h.get(I);delete q[x.__cacheKey],r.memory.textures--}function b(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let nt=0;nt<x.__webglFramebuffer[q].length;nt++)e.deleteFramebuffer(x.__webglFramebuffer[q][nt]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=T.textures;for(let q=0,nt=I.length;q<nt;q++){let W=i.get(I[q]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(I[q])}i.remove(T)}let R=0;function B(){R=0}function F(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function G(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function P(T,x){let I=i.get(T);if(T.isVideoTexture&&It(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,T,x);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+x)}function H(T,x){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+x)}function Q(T,x){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,x);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+x)}function z(T,x){let I=i.get(T);if(T.version>0&&I.__version!==T.version){tt(I,T,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+x)}let j={[hl]:e.REPEAT,[Va]:e.CLAMP_TO_EDGE,[If]:e.MIRRORED_REPEAT},lt={[si]:e.NEAREST,[fb]:e.NEAREST_MIPMAP_NEAREST,[gu]:e.NEAREST_MIPMAP_LINEAR,[ai]:e.LINEAR,[cd]:e.LINEAR_MIPMAP_NEAREST,[qa]:e.LINEAR_MIPMAP_LINEAR},pt={[mb]:e.NEVER,[Sb]:e.ALWAYS,[gb]:e.LESS,[j0]:e.LEQUAL,[_b]:e.EQUAL,[xb]:e.GEQUAL,[vb]:e.GREATER,[yb]:e.NOTEQUAL};function Nt(T,x){if(x.type===bs&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ai||x.magFilter===cd||x.magFilter===gu||x.magFilter===qa||x.minFilter===ai||x.minFilter===cd||x.minFilter===gu||x.minFilter===qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,j[x.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,j[x.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,j[x.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,lt[x.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===si||x.minFilter!==gu&&x.minFilter!==qa||x.type===bs&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function qt(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));let q=x.source,nt=h.get(q);nt===void 0&&(nt={},h.set(q,nt));let W=G(x);if(W!==T.__cacheKey){nt[W]===void 0&&(nt[W]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),nt[W].usedTimes++;let wt=nt[T.__cacheKey];wt!==void 0&&(nt[T.__cacheKey].usedTimes--,wt.usedTimes===0&&E(x)),T.__cacheKey=W,T.__webglTexture=nt[W].texture}return I}function Ht(T,x,I){return Math.floor(Math.floor(T/I)/x)}function Yt(T,x,I,q){let W=T.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,I,q,x.data);else{W.sort(($,ct)=>$.start-ct.start);let wt=0;for(let $=1;$<W.length;$++){let ct=W[wt],vt=W[$],At=ct.start+ct.count,ht=Ht(vt.start,x.width,4),Vt=Ht(ct.start,x.width,4);vt.start<=At+1&&ht===Vt&&Ht(vt.start+vt.count-1,x.width,4)===ht?ct.count=Math.max(ct.count,vt.start+vt.count-ct.start):(++wt,W[wt]=vt)}W.length=wt+1;let at=e.getParameter(e.UNPACK_ROW_LENGTH),gt=e.getParameter(e.UNPACK_SKIP_PIXELS),bt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let $=0,ct=W.length;$<ct;$++){let vt=W[$],At=Math.floor(vt.start/4),ht=Math.ceil(vt.count/4),Vt=At%x.width,N=Math.floor(At/x.width),rt=ht,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Vt,N,rt,ot,I,q,x.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,at),e.pixelStorei(e.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,bt)}}function Y(T,x,I){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);let nt=qt(T,x),W=x.source;n.bindTexture(q,T.__webglTexture,e.TEXTURE0+I);let wt=i.get(W);if(W.version!==wt.__version||nt===!0){n.activeTexture(e.TEXTURE0+I);let at=he.getPrimaries(he.workingColorSpace),gt=x.colorSpace===ea?null:he.getPrimaries(x.colorSpace),bt=x.colorSpace===ea||at===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let $=S(x.image,!1,s.maxTextureSize);$=Ne(x,$);let ct=a.convert(x.format,x.colorSpace),vt=a.convert(x.type),At=y(x.internalFormat,ct,vt,x.colorSpace,x.isVideoTexture);Nt(q,x);let ht,Vt=x.mipmaps,N=x.isVideoTexture!==!0,rt=wt.__version===void 0||nt===!0,ot=W.dataReady,Et=A(x,$);if(x.isDepthTexture)At=v(x.format===Cl,x.type),rt&&(N?n.texStorage2D(e.TEXTURE_2D,1,At,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,At,$.width,$.height,0,ct,vt,null));else if(x.isDataTexture)if(Vt.length>0){N&&rt&&n.texStorage2D(e.TEXTURE_2D,Et,At,Vt[0].width,Vt[0].height);for(let et=0,J=Vt.length;et<J;et++)ht=Vt[et],N?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,vt,ht.data):n.texImage2D(e.TEXTURE_2D,et,At,ht.width,ht.height,0,ct,vt,ht.data);x.generateMipmaps=!1}else N?(rt&&n.texStorage2D(e.TEXTURE_2D,Et,At,$.width,$.height),ot&&Yt(x,$,ct,vt)):n.texImage2D(e.TEXTURE_2D,0,At,$.width,$.height,0,ct,vt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Et,At,Vt[0].width,Vt[0].height,$.depth);for(let et=0,J=Vt.length;et<J;et++)if(ht=Vt[et],x.format!==zi)if(ct!==null)if(N){if(ot)if(x.layerUpdates.size>0){let _t=a_(ht.width,ht.height,x.format,x.type);for(let Gt of x.layerUpdates){let fe=ht.data.subarray(Gt*_t/ht.data.BYTES_PER_ELEMENT,(Gt+1)*_t/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Gt,ht.width,ht.height,1,ct,fe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,$.depth,ct,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,At,ht.width,ht.height,$.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,$.depth,ct,vt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,At,ht.width,ht.height,$.depth,0,ct,vt,ht.data)}else{N&&rt&&n.texStorage2D(e.TEXTURE_2D,Et,At,Vt[0].width,Vt[0].height);for(let et=0,J=Vt.length;et<J;et++)ht=Vt[et],x.format!==zi?ct!==null?N?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,et,At,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,vt,ht.data):n.texImage2D(e.TEXTURE_2D,et,At,ht.width,ht.height,0,ct,vt,ht.data)}else if(x.isDataArrayTexture)if(N){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Et,At,$.width,$.height,$.depth),ot)if(x.layerUpdates.size>0){let et=a_($.width,$.height,x.format,x.type);for(let J of x.layerUpdates){let _t=$.data.subarray(J*et/$.data.BYTES_PER_ELEMENT,(J+1)*et/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,ct,vt,_t)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,vt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,$.width,$.height,$.depth,0,ct,vt,$.data);else if(x.isData3DTexture)N?(rt&&n.texStorage3D(e.TEXTURE_3D,Et,At,$.width,$.height,$.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,vt,$.data)):n.texImage3D(e.TEXTURE_3D,0,At,$.width,$.height,$.depth,0,ct,vt,$.data);else if(x.isFramebufferTexture){if(rt)if(N)n.texStorage2D(e.TEXTURE_2D,Et,At,$.width,$.height);else{let et=$.width,J=$.height;for(let _t=0;_t<Et;_t++)n.texImage2D(e.TEXTURE_2D,_t,At,et,J,0,ct,vt,null),et>>=1,J>>=1}}else if(Vt.length>0){if(N&&rt){let et=oe(Vt[0]);n.texStorage2D(e.TEXTURE_2D,Et,At,et.width,et.height)}for(let et=0,J=Vt.length;et<J;et++)ht=Vt[et],N?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ct,vt,ht):n.texImage2D(e.TEXTURE_2D,et,At,ct,vt,ht);x.generateMipmaps=!1}else if(N){if(rt){let et=oe($);n.texStorage2D(e.TEXTURE_2D,Et,At,et.width,et.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,vt,$)}else n.texImage2D(e.TEXTURE_2D,0,At,ct,vt,$);m(x)&&u(q),wt.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,I){if(x.image.length!==6)return;let q=qt(T,x),nt=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);let W=i.get(nt);if(nt.version!==W.__version||q===!0){n.activeTexture(e.TEXTURE0+I);let wt=he.getPrimaries(he.workingColorSpace),at=x.colorSpace===ea?null:he.getPrimaries(x.colorSpace),gt=x.colorSpace===ea||wt===at?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let bt=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let J=0;J<6;J++)!bt&&!$?ct[J]=S(x.image[J],!0,s.maxCubemapSize):ct[J]=$?x.image[J].image:x.image[J],ct[J]=Ne(x,ct[J]);let vt=ct[0],At=a.convert(x.format,x.colorSpace),ht=a.convert(x.type),Vt=y(x.internalFormat,At,ht,x.colorSpace),N=x.isVideoTexture!==!0,rt=W.__version===void 0||q===!0,ot=nt.dataReady,Et=A(x,vt);Nt(e.TEXTURE_CUBE_MAP,x);let et;if(bt){N&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,Vt,vt.width,vt.height);for(let J=0;J<6;J++){et=ct[J].mipmaps;for(let _t=0;_t<et.length;_t++){let Gt=et[_t];x.format!==zi?At!==null?N?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Gt.width,Gt.height,At,Gt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Gt.width,Gt.height,At,ht,Gt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Gt.width,Gt.height,0,At,ht,Gt.data)}}}else{if(et=x.mipmaps,N&&rt){et.length>0&&Et++;let J=oe(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,Vt,J.width,J.height)}for(let J=0;J<6;J++)if($){N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct[J].width,ct[J].height,At,ht,ct[J].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,ct[J].width,ct[J].height,0,At,ht,ct[J].data);for(let _t=0;_t<et.length;_t++){let fe=et[_t].image[J].image;N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,fe.width,fe.height,At,ht,fe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,fe.width,fe.height,0,At,ht,fe.data)}}else{N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At,ht,ct[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,At,ht,ct[J]);for(let _t=0;_t<et.length;_t++){let Gt=et[_t];N?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,At,ht,Gt.image[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,At,ht,Gt.image[J])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),W.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,I,q,nt,W){let wt=a.convert(I.format,I.colorSpace),at=a.convert(I.type),gt=y(I.internalFormat,wt,at,I.colorSpace),bt=i.get(x),$=i.get(I);if($.__renderTarget=x,!bt.__hasExternalTextures){let ct=Math.max(1,x.width>>W),vt=Math.max(1,x.height>>W);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,W,gt,ct,vt,x.depth,0,wt,at,null):n.texImage2D(nt,W,gt,ct,vt,0,wt,at,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),st(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,nt,$.__webglTexture,0,me(x)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,nt,$.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(T,x,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),x.depthBuffer){let q=x.depthTexture,nt=q&&q.isDepthTexture?q.type:null,W=v(x.stencilBuffer,nt),wt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=me(x);st(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at,W,x.width,x.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,at,W,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,W,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,T)}else{let q=x.textures;for(let nt=0;nt<q.length;nt++){let W=q[nt],wt=a.convert(W.format,W.colorSpace),at=a.convert(W.type),gt=y(W.internalFormat,wt,at,W.colorSpace),bt=me(x);I&&st(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,gt,x.width,x.height):st(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,bt,gt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,gt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),P(x.depthTexture,0);let nt=q.__webglTexture,W=me(x);if(x.depthTexture.format===fl)st(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Cl)st(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function jt(T){let x=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?ft(x.__webglFramebuffer[0],T):ft(x.__webglFramebuffer,T)}else if(I){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),Rt(x.__webglDepthbuffer[q],T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,W)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Rt(x.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(T,x,I){let q=i.get(T);x!==void 0&&mt(q.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&jt(T)}function D(T){let x=T.texture,I=i.get(T),q=i.get(x);T.addEventListener("dispose",w);let nt=T.textures,W=T.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,r.memory.textures++),W){I.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[at]=[];for(let gt=0;gt<x.mipmaps.length;gt++)I.__webglFramebuffer[at][gt]=e.createFramebuffer()}else I.__webglFramebuffer[at]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)I.__webglFramebuffer[at]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(wt)for(let at=0,gt=nt.length;at<gt;at++){let bt=i.get(nt[at]);bt.__webglTexture===void 0&&(bt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&st(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let at=0;at<nt.length;at++){let gt=nt[at];I.__webglColorRenderbuffer[at]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[at]);let bt=a.convert(gt.format,gt.colorSpace),$=a.convert(gt.type),ct=y(gt.internalFormat,bt,$,gt.colorSpace,T.isXRRenderTarget===!0),vt=me(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,vt,ct,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,I.__webglColorRenderbuffer[at])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Rt(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(I.__webglFramebuffer[at][gt],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else mt(I.__webglFramebuffer[at],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let at=0,gt=nt.length;at<gt;at++){let bt=nt[at],$=i.get(bt),ct=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,$.__webglTexture),Nt(ct,bt),mt(I.__webglFramebuffer,T,bt,e.COLOR_ATTACHMENT0+at,ct,0),m(bt)&&u(ct)}n.unbindTexture()}else{let at=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(at,q.__webglTexture),Nt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(I.__webglFramebuffer[gt],T,x,e.COLOR_ATTACHMENT0,at,gt);else mt(I.__webglFramebuffer,T,x,e.COLOR_ATTACHMENT0,at,0);m(x)&&u(at),n.unbindTexture()}T.depthBuffer&&jt(T)}function Mt(T){let x=T.textures;for(let I=0,q=x.length;I<q;I++){let nt=x[I];if(m(nt)){let W=g(T),wt=i.get(nt).__webglTexture;n.bindTexture(W,wt),u(W),n.unbindTexture()}}}let zt=[],Lt=[];function xt(T){if(T.samples>0){if(st(T)===!1){let x=T.textures,I=T.width,q=T.height,nt=e.COLOR_BUFFER_BIT,W=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(T),at=x.length>1;if(at)for(let bt=0;bt<x.length;bt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let gt=T.texture.mipmaps;gt&&gt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),at){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);let $=i.get(x[bt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,nt,e.NEAREST),l===!0&&(zt.length=0,Lt.length=0,zt.push(e.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(zt.push(W),Lt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Lt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,zt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),at)for(let bt=0;bt<x.length;bt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);let $=i.get(x[bt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,$,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function st(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(T){let x=r.render.frame;f.get(T)!==x&&(f.set(T,x),T.update())}function Ne(T,x){let I=T.colorSpace,q=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Or&&I!==ea&&(he.getTransfer(I)===Te?(q!==zi||nt!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=ye,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=st}function nU(e,t){function n(i,s=ea){let a,r=he.getTransfer(s);if(i===es)return e.UNSIGNED_BYTE;if(i===hd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===W0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===q0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===k0)return e.BYTE;if(i===X0)return e.SHORT;if(i===Tl)return e.UNSIGNED_SHORT;if(i===ud)return e.INT;if(i===Ya)return e.UNSIGNED_INT;if(i===bs)return e.FLOAT;if(i===Al)return e.HALF_FLOAT;if(i===Y0)return e.ALPHA;if(i===Z0)return e.RGB;if(i===zi)return e.RGBA;if(i===fl)return e.DEPTH_COMPONENT;if(i===Cl)return e.DEPTH_STENCIL;if(i===J0)return e.RED;if(i===dd)return e.RED_INTEGER;if(i===K0)return e.RG;if(i===pd)return e.RG_INTEGER;if(i===md)return e.RGBA_INTEGER;if(i===_u||i===vu||i===yu||i===xu)if(r===Te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_u)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_u)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===yd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xd||i===Sd||i===Md)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===xd||i===Sd)return r===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Md)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bd||i===Ed||i===Td||i===Ad||i===wd||i===Cd||i===Rd||i===Dd||i===Ud||i===Nd||i===Ld||i===Od||i===Id||i===Pd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===zd||i===Fd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Bd)return r===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Vd||i===Gd||i===kd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Hd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var iU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,v_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ru(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ts({vertexShader:iU,fragmentShader:sU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new Ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},y_=class extends Ks{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null,S=typeof XRWebGLBinding<"u",m=new v_,u={},g=n.getContextAttributes(),y=null,v=null,A=[],C=[],w=new ce,U=null,E=new On;E.viewport=new Xe;let b=new On;b.viewport=new Xe;let R=[E,b],B=new jf,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=A[Y];return tt===void 0&&(tt=new xl,A[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=A[Y];return tt===void 0&&(tt=new xl,A[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=A[Y];return tt===void 0&&(tt=new xl,A[Y]=tt),tt.getHandSpace()};function P(Y){let tt=C.indexOf(Y.inputSource);if(tt===-1)return;let mt=A[tt];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||r),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<A.length;Y++){let tt=C[Y];tt!==null&&(C[Y]=null,A[Y].disconnect(tt))}F=null,G=null,m.reset();for(let Y in u)delete u[Y];t.setRenderTarget(y),p=null,h=null,d=null,s=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Rt=null,ft=null;g.depth&&(ft=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,mt=g.stencil?Cl:fl,Rt=g.stencil?wl:Ya);let jt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(jt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new xs(h.textureWidth,h.textureHeight,{format:zi,type:es,depthTexture:new au(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new xs(p.framebufferWidth,p.framebufferHeight,{format:zi,type:es,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let tt=0;tt<Y.removed.length;tt++){let mt=Y.removed[tt],Rt=C.indexOf(mt);Rt>=0&&(C[Rt]=null,A[Rt].disconnect(mt))}for(let tt=0;tt<Y.added.length;tt++){let mt=Y.added[tt],Rt=C.indexOf(mt);if(Rt===-1){for(let jt=0;jt<A.length;jt++)if(jt>=C.length){C.push(mt),Rt=jt;break}else if(C[jt]===null){C[jt]=mt,Rt=jt;break}if(Rt===-1)break}let ft=A[Rt];ft&&ft.connect(mt)}}let z=new V,j=new V;function lt(Y,tt,mt){z.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);let Rt=z.distanceTo(j),ft=tt.projectionMatrix.elements,jt=mt.projectionMatrix.elements,ye=ft[14]/(ft[10]-1),D=ft[14]/(ft[10]+1),Mt=(ft[9]+1)/ft[5],zt=(ft[9]-1)/ft[5],Lt=(ft[8]-1)/ft[0],xt=(jt[8]+1)/jt[0],me=ye*Lt,st=ye*xt,It=Rt/(-Lt+xt),Ne=It*-Lt;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ne),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let oe=ye+It,T=D+It,x=me-Ne,I=st+(Rt-Ne),q=Mt*D/T*oe,nt=zt*D/T*oe;Y.projectionMatrix.makePerspective(x,I,q,nt,oe,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,mt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),B.near=b.near=E.near=tt,B.far=b.far=E.far=mt,(F!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,G=B.far),B.layers.mask=Y.layers.mask|6,E.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let Rt=Y.parent,ft=B.cameras;pt(B,Rt);for(let jt=0;jt<ft.length;jt++)pt(ft[jt],Rt);ft.length===2?lt(B,E,b):B.projectionMatrix.copy(E.projectionMatrix),Nt(Y,B,Rt)};function Nt(Y,tt,mt){mt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return u[Y]};let qt=null;function Ht(Y,tt){if(f=tt.getViewerPose(c||r),_=tt,f!==null){let mt=f.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Rt=!1;mt.length!==B.cameras.length&&(B.cameras.length=0,Rt=!0);for(let D=0;D<mt.length;D++){let Mt=mt[D],zt=null;if(p!==null)zt=p.getViewport(Mt);else{let xt=d.getViewSubImage(h,Mt);zt=xt.viewport,D===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let Lt=R[D];Lt===void 0&&(Lt=new On,Lt.layers.enable(D),Lt.viewport=new Xe,R[D]=Lt),Lt.matrix.fromArray(Mt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Mt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(zt.x,zt.y,zt.width,zt.height),D===0&&(B.matrix.copy(Lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Rt===!0&&B.cameras.push(Lt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let D=d.getDepthInformation(mt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(ft&&ft.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<mt.length;D++){let Mt=mt[D].camera;if(Mt){let zt=u[Mt];zt||(zt=new ru,u[Mt]=zt);let Lt=d.getCameraImage(Mt);zt.sourceTexture=Lt}}}}for(let mt=0;mt<A.length;mt++){let Rt=C[mt],ft=A[mt];Rt!==null&&ft!==void 0&&ft.update(Rt,tt,c||r)}qt&&qt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}let Yt=new Kb;Yt.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}},Vr=new $i,aU=new Je;function rU(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,n_(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===An&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===An&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,Vr.copy(v),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(aU.makeRotationFromEuler(Vr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===An&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let v=y.program;i.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=f(g),s[g.id]=v,g.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(g,A);let C=t.render.frame;a[g.id]!==C&&(h(g),a[g.id]=C)}function f(g){let y=d();g.__bindingPointIndex=y;let v=e.createBuffer(),A=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,A,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let y=s[g.id],v=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let C=0,w=v.length;C<w;C++){let U=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,b=U.length;E<b;E++){let R=U[E];if(p(R,C,E,A)===!0){let B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],G=0;for(let P=0;P<F.length;P++){let H=F[P],Q=S(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,B+G,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,v,A){let C=g.value,w=y+"_"+v;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{let U=A[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(g){let y=g.uniforms,v=0,A=16;for(let w=0,U=y.length;w<U;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,R=E.length;b<R;b++){let B=E[b],F=Array.isArray(B.value)?B.value:[B.value];for(let G=0,P=F.length;G<P;G++){let H=F[G],Q=S(H),z=v%A,j=z%Q.boundary,lt=z+j;v+=j,lt!==0&&A-lt<Q.storage&&(v+=A-lt),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}let C=v%A;return C>0&&(v+=A-C),g.__size=v,g.__cache={},this}function S(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Kd=class{constructor(t={}){let{canvas:n=Mb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Ln;let C=0,w=0,U=null,E=-1,b=null,R=new Xe,B=new Xe,F=null,G=new re(0),P=0,H=n.width,Q=n.height,z=1,j=null,lt=null,pt=new Xe(0,0,H,Q),Nt=new Xe(0,0,H,Q),qt=!1,Ht=new Sl,Yt=!1,Y=!1,tt=new Je,mt=new V,Rt=new Xe,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ye(){return U===null?z:1}let D=i;function Mt(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",et,!1),D===null){let L="webgl2";if(D=Mt(L,M),D===null)throw Mt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let zt,Lt,xt,me,st,It,Ne,oe,T,x,I,q,nt,W,wt,at,gt,bt,$,ct,vt,At,ht,Vt;function N(){zt=new T3(D),zt.init(),At=new nU(D,zt),Lt=new v3(D,zt,t,At),xt=new tU(D,zt),Lt.reversedDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),me=new C3(D),st=new VD,It=new eU(D,zt,xt,st,Lt,At,me),Ne=new x3(v),oe=new E3(v),T=new OC(D),ht=new g3(D,T),x=new A3(D,T,me,ht),I=new D3(D,x,T,me),$=new R3(D,Lt,It),at=new y3(st),q=new HD(v,Ne,oe,zt,Lt,ht,at),nt=new rU(v,st),W=new kD,wt=new JD(zt),bt=new m3(v,Ne,oe,xt,I,p,l),gt=new jD(v,I,Lt),Vt=new oU(D,me,Lt,xt),ct=new _3(D,zt,me),vt=new w3(D,zt,me),me.programs=q.programs,v.capabilities=Lt,v.extensions=zt,v.properties=st,v.renderLists=W,v.shadowMap=gt,v.state=xt,v.info=me}N();let rt=new y_(v,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(H,Q,!1))},this.getSize=function(M){return M.set(H,Q)},this.setSize=function(M,L,k=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,Q=L,n.width=Math.floor(M*z),n.height=Math.floor(L*z),k===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(H*z,Q*z).floor()},this.setDrawingBufferSize=function(M,L,k){H=M,Q=L,z=k,n.width=Math.floor(M*k),n.height=Math.floor(L*k),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,L,k,X){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,L,k,X),xt.viewport(R.copy(pt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Nt)},this.setScissor=function(M,L,k,X){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,L,k,X),xt.scissor(B.copy(Nt).multiplyScalar(z).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){xt.setScissorTest(qt=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,k=!0){let X=0;if(M){let O=!1;if(U!==null){let it=U.texture.format;O=it===md||it===pd||it===dd}if(O){let it=U.texture.type,ut=it===es||it===Ya||it===Tl||it===wl||it===hd||it===fd,Tt=bt.getClearColor(),yt=bt.getClearAlpha(),Ot=Tt.r,Pt=Tt.g,Ct=Tt.b;ut?(_[0]=Ot,_[1]=Pt,_[2]=Ct,_[3]=yt,D.clearBufferuiv(D.COLOR,0,_)):(S[0]=Ot,S[1]=Pt,S[2]=Ct,S[3]=yt,D.clearBufferiv(D.COLOR,0,S))}else X|=D.COLOR_BUFFER_BIT}L&&(X|=D.DEPTH_BUFFER_BIT),k&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",et,!1),bt.dispose(),W.dispose(),wt.dispose(),st.dispose(),Ne.dispose(),oe.dispose(),I.dispose(),ht.dispose(),Vt.dispose(),q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",wn),rt.removeEventListener("sessionend",Jn),oi.stop()};function ot(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=me.autoReset,L=gt.enabled,k=gt.autoUpdate,X=gt.needsUpdate,O=gt.type;N(),me.autoReset=M,gt.enabled=L,gt.autoUpdate=k,gt.needsUpdate=X,gt.type=O}function et(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){let L=M.target;L.removeEventListener("dispose",J),_t(L)}function _t(M){Gt(M),st.remove(M)}function Gt(M){let L=st.get(M).programs;L!==void 0&&(L.forEach(function(k){q.releaseProgram(k)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,k,X,O,it){L===null&&(L=ft);let ut=O.isMesh&&O.matrixWorld.determinant()<0,Tt=_n(M,L,k,X,O);xt.setMaterial(X,ut);let yt=k.index,Ot=1;if(X.wireframe===!0){if(yt=x.getWireframeAttribute(k),yt===void 0)return;Ot=2}let Pt=k.drawRange,Ct=k.attributes.position,Bt=Pt.start*Ot,Wt=(Pt.start+Pt.count)*Ot;it!==null&&(Bt=Math.max(Bt,it.start*Ot),Wt=Math.min(Wt,(it.start+it.count)*Ot)),yt!==null?(Bt=Math.max(Bt,0),Wt=Math.min(Wt,yt.count)):Ct!=null&&(Bt=Math.max(Bt,0),Wt=Math.min(Wt,Ct.count));let le=Wt-Bt;if(le<0||le===1/0)return;ht.setup(O,X,Tt,k,yt);let xe,de=ct;if(yt!==null&&(xe=T.get(yt),de=vt,de.setIndex(xe)),O.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*ye()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(O.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),xt.setLineWidth(Dt*ye()),O.isLineSegments?de.setMode(D.LINES):O.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else O.isPoints?de.setMode(D.POINTS):O.isSprite&&de.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Dt=O._multiDrawStarts,Ce=O._multiDrawCounts,ee=O._multiDrawCount,hn=yt?T.get(yt).bytesPerElement:1,Vi=st.get(X).currentProgram.getUniforms();for(let Fe=0;Fe<ee;Fe++)Vi.setValue(D,"_gl_DrawID",Fe),de.render(Dt[Fe]/hn,Ce[Fe])}else if(O.isInstancedMesh)de.renderInstances(Bt,le,O.count);else if(k.isInstancedBufferGeometry){let Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ce=Math.min(k.instanceCount,Dt);de.renderInstances(Bt,le,Ce)}else de.render(Bt,le)};function fe(M,L,k){M.transparent===!0&&M.side===Bi&&M.forceSinglePass===!1?(M.side=An,M.needsUpdate=!0,Qa(M,L,k),M.side=ji,M.needsUpdate=!0,Qa(M,L,k),M.side=Bi):Qa(M,L,k)}this.compile=function(M,L,k=null){k===null&&(k=M),u=wt.get(k),u.init(L),y.push(u),k.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();let X=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let Tt=it[ut];fe(Tt,k,O),X.add(Tt)}else fe(it,k,O),X.add(it)}),u=y.pop(),X},this.compileAsync=function(M,L,k=null){let X=this.compile(M,L,k);return new Promise(O=>{function it(){if(X.forEach(function(ut){st.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){O(M);return}setTimeout(it,10)}zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let te=null;function Mi(M){te&&te(M)}function wn(){oi.stop()}function Jn(){oi.start()}let oi=new Kb;oi.setAnimationLoop(Mi),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){te=M,rt.setAnimationLoop(M),M===null?oi.stop():oi.start()},rt.addEventListener("sessionstart",wn),rt.addEventListener("sessionend",Jn),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(L),L=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,U),u=wt.get(M,y.length),u.init(L),y.push(u),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ht.setFromProjectionMatrix(tt,Qi,L.reversedDepth),Y=this.localClippingEnabled,Yt=at.init(this.clippingPlanes,Y),m=W.get(M,g.length),m.init(),g.push(m),rt.enabled===!0&&rt.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&Ka(it,L,-1/0,v.sortObjects)}Ka(M,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,lt),jt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,jt&&bt.addToRenderList(m,M),this.info.render.frame++,Yt===!0&&at.beginShadows();let k=u.state.shadowsArray;gt.render(k,M,L),Yt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,O=m.transmissive;if(u.setupLights(),L.isArrayCamera){let it=L.cameras;if(O.length>0)for(let ut=0,Tt=it.length;ut<Tt;ut++){let yt=it[ut];Fi(X,O,M,yt)}jt&&bt.render(M);for(let ut=0,Tt=it.length;ut<Tt;ut++){let yt=it[ut];na(m,M,yt,yt.viewport)}}else O.length>0&&Fi(X,O,M,L),jt&&bt.render(M),na(m,M,L);U!==null&&w===0&&(It.updateMultisampleRenderTarget(U),It.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(v,M,L),ht.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],Yt===!0&&at.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Ka(M,L,k,X){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ht.intersectsSprite(M)){X&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(tt);let ut=I.update(M),Tt=M.material;Tt.visible&&m.push(M,ut,Tt,k,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ht.intersectsObject(M))){let ut=I.update(M),Tt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Rt.copy(ut.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(tt)),Array.isArray(Tt)){let yt=ut.groups;for(let Ot=0,Pt=yt.length;Ot<Pt;Ot++){let Ct=yt[Ot],Bt=Tt[Ct.materialIndex];Bt&&Bt.visible&&m.push(M,ut,Bt,k,Rt.z,Ct)}}else Tt.visible&&m.push(M,ut,Tt,k,Rt.z,null)}}let it=M.children;for(let ut=0,Tt=it.length;ut<Tt;ut++)Ka(it[ut],L,k,X)}function na(M,L,k,X){let O=M.opaque,it=M.transmissive,ut=M.transparent;u.setupLightsView(k),Yt===!0&&at.setGlobalState(v.clippingPlanes,k),X&&xt.viewport(R.copy(X)),O.length>0&&Xr(O,L,k),it.length>0&&Xr(it,L,k),ut.length>0&&Xr(ut,L,k),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Fi(M,L,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new xs(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Al:es,minFilter:qa,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let it=u.state.transmissionRenderTarget[X.id],ut=X.viewport||R;it.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);let Tt=v.getRenderTarget(),yt=v.getActiveCubeFace(),Ot=v.getActiveMipmapLevel();v.setRenderTarget(it),v.getClearColor(G),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear(),jt&&bt.render(k);let Pt=v.toneMapping;v.toneMapping=ta;let Ct=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Yt===!0&&at.setGlobalState(v.clippingPlanes,X),Xr(M,k,X),It.updateMultisampleRenderTarget(it),It.updateRenderTargetMipmap(it),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Wt=0,le=L.length;Wt<le;Wt++){let xe=L[Wt],de=xe.object,Dt=xe.geometry,Ce=xe.material,ee=xe.group;if(Ce.side===Bi&&de.layers.test(X.layers)){let hn=Ce.side;Ce.side=An,Ce.needsUpdate=!0,nn(de,k,X,Dt,Ce,ee),Ce.side=hn,Ce.needsUpdate=!0,Bt=!0}}Bt===!0&&(It.updateMultisampleRenderTarget(it),It.updateRenderTargetMipmap(it))}v.setRenderTarget(Tt,yt,Ot),v.setClearColor(G,P),Ct!==void 0&&(X.viewport=Ct),v.toneMapping=Pt}function Xr(M,L,k){let X=L.isScene===!0?L.overrideMaterial:null;for(let O=0,it=M.length;O<it;O++){let ut=M[O],Tt=ut.object,yt=ut.geometry,Ot=ut.group,Pt=ut.material;Pt.allowOverride===!0&&X!==null&&(Pt=X),Tt.layers.test(k.layers)&&nn(Tt,L,k,yt,Pt,Ot)}}function nn(M,L,k,X,O,it){M.onBeforeRender(v,L,k,X,O,it),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,L,k,X,M,it),O.transparent===!0&&O.side===Bi&&O.forceSinglePass===!1?(O.side=An,O.needsUpdate=!0,v.renderBufferDirect(k,L,X,O,M,it),O.side=ji,O.needsUpdate=!0,v.renderBufferDirect(k,L,X,O,M,it),O.side=Bi):v.renderBufferDirect(k,L,X,O,M,it),M.onAfterRender(v,L,k,X,O,it)}function Qa(M,L,k){L.isScene!==!0&&(L=ft);let X=st.get(M),O=u.state.lights,it=u.state.shadowsArray,ut=O.state.version,Tt=q.getParameters(M,O.state,it,L,k),yt=q.getProgramCacheKey(Tt),Ot=X.programs;X.environment=M.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(M.isMeshStandardMaterial?oe:Ne).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",J),Ot=new Map,X.programs=Ot);let Pt=Ot.get(yt);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===ut)return Ts(M,Tt),Pt}else Tt.uniforms=q.getUniforms(M),M.onBeforeCompile(Tt,v),Pt=q.acquireProgram(Tt,yt),Ot.set(yt,Pt),X.uniforms=Tt.uniforms;let Ct=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Ts(M,Tt),X.needsLights=zn(M),X.lightsStateVersion=ut,X.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function Il(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Nl.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Ts(M,L){let k=st.get(M);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function _n(M,L,k,X,O){L.isScene!==!0&&(L=ft),It.resetTextureUnits();let it=L.fog,ut=X.isMeshStandardMaterial?L.environment:null,Tt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Or,yt=(X.isMeshStandardMaterial?oe:Ne).get(X.envMap||ut),Ot=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pt=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!k.morphAttributes.position,Bt=!!k.morphAttributes.normal,Wt=!!k.morphAttributes.color,le=ta;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=v.toneMapping);let xe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=xe!==void 0?xe.length:0,Dt=st.get(X),Ce=u.state.lights;if(Yt===!0&&(Y===!0||M!==b)){let Ge=M===b&&X.id===E;at.setState(X,M,Ge)}let ee=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ce.state.version||Dt.outputColorSpace!==Tt||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==yt||X.fog===!0&&Dt.fog!==it||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==Pt||Dt.morphTargets!==Ct||Dt.morphNormals!==Bt||Dt.morphColors!==Wt||Dt.toneMapping!==le||Dt.morphTargetsCount!==de)&&(ee=!0):(ee=!0,Dt.__version=X.version);let hn=Dt.currentProgram;ee===!0&&(hn=Qa(X,L,O));let Vi=!1,Fe=!1,Hn=!1,ue=hn.getUniforms(),Qe=Dt.uniforms;if(xt.useProgram(hn.program)&&(Vi=!0,Fe=!0,Hn=!0),X.id!==E&&(E=X.id,Fe=!0),Vi||b!==M){xt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ue.setValue(D,"projectionMatrix",M.projectionMatrix),ue.setValue(D,"viewMatrix",M.matrixWorldInverse);let an=ue.map.cameraPosition;an!==void 0&&an.setValue(D,mt.setFromMatrixPosition(M.matrixWorld)),Lt.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Fe=!0,Hn=!0)}if(O.isSkinnedMesh){ue.setOptional(D,O,"bindMatrix"),ue.setOptional(D,O,"bindMatrixInverse");let Ge=O.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ue.setValue(D,"boneTexture",Ge.boneTexture,It))}O.isBatchedMesh&&(ue.setOptional(D,O,"batchingTexture"),ue.setValue(D,"batchingTexture",O._matricesTexture,It),ue.setOptional(D,O,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",O._indirectTexture,It),ue.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",O._colorsTexture,It));let sn=k.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&$.update(O,k,hn),(Fe||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,ue.setValue(D,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qe.envMap.value=yt,Qe.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(Qe.envMapIntensity.value=L.environmentIntensity),Fe&&(ue.setValue(D,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Hi(Qe,Hn),it&&X.fog===!0&&nt.refreshFogUniforms(Qe,it),nt.refreshMaterialUniforms(Qe,X,z,Q,u.state.transmissionRenderTarget[M.id]),Nl.upload(D,Il(Dt),Qe,It)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Nl.upload(D,Il(Dt),Qe,It),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(D,"center",O.center),ue.setValue(D,"modelViewMatrix",O.modelViewMatrix),ue.setValue(D,"normalMatrix",O.normalMatrix),ue.setValue(D,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ge=X.uniformsGroups;for(let an=0,ia=Ge.length;an<ia;an++){let bi=Ge[an];Vt.update(bi,hn),Vt.bind(bi,hn)}}return hn}function Hi(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function zn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,L,k){let X=st.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),st.get(M.texture).__webglTexture=L,st.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:k,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let k=st.get(M);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0};let Fn=D.createFramebuffer();this.setRenderTarget=function(M,L=0,k=0){U=M,C=L,w=k;let X=!0,O=null,it=!1,ut=!1;if(M){let yt=st.get(M);if(yt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)It.setupRenderTarget(M);else if(yt.__hasExternalTextures)It.rebindTextures(M,st.get(M.texture).__webglTexture,st.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ct=M.depthTexture;if(yt.__boundDepthTexture!==Ct){if(Ct!==null&&st.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(M)}}let Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ut=!0);let Pt=st.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[L])?O=Pt[L][k]:O=Pt[L],it=!0):M.samples>0&&It.useMultisampledRTT(M)===!1?O=st.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?O=Pt[k]:O=Pt,R.copy(M.viewport),B.copy(M.scissor),F=M.scissorTest}else R.copy(pt).multiplyScalar(z).floor(),B.copy(Nt).multiplyScalar(z).floor(),F=qt;if(k!==0&&(O=Fn),xt.bindFramebuffer(D.FRAMEBUFFER,O)&&X&&xt.drawBuffers(M,O),xt.viewport(R),xt.scissor(B),xt.setScissorTest(F),it){let yt=st.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,k)}else if(ut){let yt=L;for(let Ot=0;Ot<M.textures.length;Ot++){let Pt=st.get(M.textures[Ot]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ot,Pt.__webglTexture,k,yt)}}else if(M!==null&&k!==0){let yt=st.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(M,L,k,X,O,it,ut,Tt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){xt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Ot=M.textures[Tt],Pt=Ot.format,Ct=Ot.type;if(!Lt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-X&&k>=0&&k<=M.height-O&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(L,k,X,O,At.convert(Pt),At.convert(Ct),it))}finally{let Ot=U!==null?st.get(U).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,L,k,X,O,it,ut,Tt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt)if(L>=0&&L<=M.width-X&&k>=0&&k<=M.height-O){xt.bindFramebuffer(D.FRAMEBUFFER,yt);let Ot=M.textures[Tt],Pt=Ot.format,Ct=Ot.type;if(!Lt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(L,k,X,O,At.convert(Pt),At.convert(Ct),0);let Wt=U!==null?st.get(U).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Wt);let le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bb(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Bt),D.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,k=0){let X=Math.pow(2,-k),O=Math.floor(M.image.width*X),it=Math.floor(M.image.height*X),ut=L!==null?L.x:0,Tt=L!==null?L.y:0;It.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ut,Tt,O,it),xt.unbindTexture()};let ja=D.createFramebuffer(),$a=D.createFramebuffer();this.copyTextureToTexture=function(M,L,k=null,X=null,O=0,it=null){it===null&&(O!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=O,O=0):it=0);let ut,Tt,yt,Ot,Pt,Ct,Bt,Wt,le,xe=M.isCompressedTexture?M.mipmaps[it]:M.image;if(k!==null)ut=k.max.x-k.min.x,Tt=k.max.y-k.min.y,yt=k.isBox3?k.max.z-k.min.z:1,Ot=k.min.x,Pt=k.min.y,Ct=k.isBox3?k.min.z:0;else{let sn=Math.pow(2,-O);ut=Math.floor(xe.width*sn),Tt=Math.floor(xe.height*sn),M.isDataArrayTexture?yt=xe.depth:M.isData3DTexture?yt=Math.floor(xe.depth*sn):yt=1,Ot=0,Pt=0,Ct=0}X!==null?(Bt=X.x,Wt=X.y,le=X.z):(Bt=0,Wt=0,le=0);let de=At.convert(L.format),Dt=At.convert(L.type),Ce;L.isData3DTexture?(It.setTexture3D(L,0),Ce=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(It.setTexture2DArray(L,0),Ce=D.TEXTURE_2D_ARRAY):(It.setTexture2D(L,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let ee=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vi=D.getParameter(D.UNPACK_SKIP_PIXELS),Fe=D.getParameter(D.UNPACK_SKIP_ROWS),Hn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct);let ue=M.isDataArrayTexture||M.isData3DTexture,Qe=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let sn=st.get(M),Ge=st.get(L),an=st.get(sn.__renderTarget),ia=st.get(Ge.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let bi=0;bi<yt;bi++)ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(M).__webglTexture,O,Ct+bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(L).__webglTexture,it,le+bi)),D.blitFramebuffer(Ot,Pt,ut,Tt,Bt,Wt,ut,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||st.has(M)){let sn=st.get(M),Ge=st.get(L);xt.bindFramebuffer(D.READ_FRAMEBUFFER,ja),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,$a);for(let an=0;an<yt;an++)ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,O,Ct+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,O),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,it,le+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,it),O!==0?D.blitFramebuffer(Ot,Pt,ut,Tt,Bt,Wt,ut,Tt,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(Ce,it,Bt,Wt,le+an,Ot,Pt,ut,Tt):D.copyTexSubImage2D(Ce,it,Bt,Wt,Ot,Pt,ut,Tt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ce,it,Bt,Wt,le,ut,Tt,yt,de,Dt,xe.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,it,Bt,Wt,le,ut,Tt,yt,de,xe.data):D.texSubImage3D(Ce,it,Bt,Wt,le,ut,Tt,yt,de,Dt,xe):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,Bt,Wt,ut,Tt,de,Dt,xe.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,Bt,Wt,xe.width,xe.height,de,xe.data):D.texSubImage2D(D.TEXTURE_2D,it,Bt,Wt,ut,Tt,de,Dt,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Hn),it===0&&L.generateMipmaps&&D.generateMipmap(Ce),xt.unbindTexture()},this.initRenderTarget=function(M){st.get(M).__webglFramebuffer===void 0&&It.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?It.setTextureCube(M,0):M.isData3DTexture?It.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?It.setTexture2DArray(M,0):It.setTexture2D(M,0),xt.unbindTexture()},this.resetState=function(){C=0,w=0,U=null,xt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),n.unpackColorSpace=he._getUnpackColorSpace()}};var Ja=er(Mu()),Ol=(e=0)=>({value:e,target:e,velocity:0}),We=(e,t,n)=>Math.min(n,Math.max(t,e)),ze=(e,t)=>Number.isFinite(e)?e:t;function S_(e,t,n,i){if(i||n<=0)return e.value=e.target,e.velocity=0,!1;let s=8/Math.max(.06,n),a=e.value-e.target,r=e.velocity+s*a,o=Math.exp(-s*t);return e.value=e.target+(a+r*t)*o,e.velocity=(e.velocity-s*r*t)*o,Math.abs(e.value-e.target)<1e-4&&Math.abs(e.velocity)<.001?(e.value=e.target,e.velocity=0,!1):!0}function sE(e){let t=e|0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function hU(e,t,n,i,s,a,r){let o=e.length/3,l=Float64Array.from(e),c=Float64Array.from(e),f=Float64Array.from(e),d=[],h=[],p=new Map,_=sE(r),S=Array.from({length:i},()=>{let R=_()*Math.PI*2;return{x:Math.cos(R),y:Math.sin(R),phase:_()*Math.PI*2,weight:_()*.6+.4}});for(let R=0;R<t.length;R+=3)for(let B=0;B<3;B++){let F=t[R+B],G=t[R+(B+1)%3],P=t[R+(B+2)%3],H=Math.min(F,G)*o+Math.max(F,G),Q=p.get(H);if(Q){let z=Q.opposite*3,j=P*3,lt=Math.hypot(e[z]-e[j],e[z+1]-e[j+1]),pt=(e[z]+e[j])*.5,Nt=(e[z+1]+e[j+1])*.5,qt=0;for(let Ht of S){let Yt=Math.abs(Math.sin((pt*Ht.x+Nt*Ht.y)/n*4+Ht.phase));qt=Math.max(qt,Math.exp(-Yt*Yt*80)*Ht.weight)}h.push(z,j,lt,.12+(1-qt)*.75)}else{p.set(H,{a:F,b:G,opposite:P});let z=Math.hypot(e[F*3]-e[G*3],e[F*3+1]-e[G*3+1]);d.push(F*3,G*3,z)}}let m=Math.sqrt(n*n/o),u=n*.008,g=[e.slice()],y=64,v=3,A=y*v,C=0;for(let R=0;R<e.length;R+=3)C=Math.max(C,Math.hypot(e[R]/.94,e[R+1]/1.02));C*=1.02;function w(R,B,F,G){for(let P=0;P<R.length;P+=B){let H=G?R.length-B-P:P,Q=R[H],z=R[H+1],j=l[z]-l[Q],lt=l[z+1]-l[Q+1],pt=l[z+2]-l[Q+2],Nt=Math.sqrt(j*j+lt*lt+pt*pt);if(Nt<1e-6)continue;let qt=B===4?R[H+3]:1,Ht=(1-R[H+2]/Nt)*.5*F*qt;l[Q]+=j*Ht,l[z]-=j*Ht,l[Q+1]+=lt*Ht,l[z+1]-=lt*Ht,l[Q+2]+=pt*Ht,l[z+2]-=pt*Ht}}function U(){let R=u*2;for(let B=0;B<t.length;B+=3){let F=t[B]*3,G=t[B+1]*3,P=t[B+2]*3,H=l[F],Q=l[F+1],z=l[F+2],j=l[G]-H,lt=l[G+1]-Q,pt=l[G+2]-z,Nt=l[P]-H,qt=l[P+1]-Q,Ht=l[P+2]-z,Yt=lt*Ht-pt*qt,Y=pt*Nt-j*Ht,tt=j*qt-lt*Nt,mt=Math.hypot(Yt,Y,tt);if(mt<1e-7)continue;Yt/=mt,Y/=mt,tt/=mt;let Rt=Math.min(H,l[G],l[P])-R,ft=Math.max(H,l[G],l[P])+R,jt=Math.min(Q,l[G+1],l[P+1])-R,ye=Math.max(Q,l[G+1],l[P+1])+R,D=Math.min(z,l[G+2],l[P+2])-R,Mt=Math.max(z,l[G+2],l[P+2])+R,zt=j*j+lt*lt+pt*pt,Lt=Nt*Nt+qt*qt+Ht*Ht,xt=j*Nt+lt*qt+pt*Ht,me=zt*Lt-xt*xt;if(!(me<1e-10))for(let st=0;st<l.length;st+=3){if(st===F||st===G||st===P||l[st]<Rt||l[st]>ft||l[st+1]<jt||l[st+1]>ye||l[st+2]<D||l[st+2]>Mt)continue;let It=e[st]-(e[F]+e[G]+e[P])/3,Ne=e[st+1]-(e[F+1]+e[G+1]+e[P+1])/3;if(It*It+Ne*Ne<m*m*6)continue;let oe=l[st]-H,T=l[st+1]-Q,x=l[st+2]-z,I=oe*Yt+T*Y+x*tt,nt=(f[st]-f[F])*Yt+(f[st+1]-f[F+1])*Y+(f[st+2]-f[F+2])*tt>=0?1:-1;if(I*nt>=u||Math.abs(I)>R)continue;let W=oe*j+T*lt+x*pt,wt=oe*Nt+T*qt+x*Ht,at=(Lt*W-xt*wt)/me,gt=(zt*wt-xt*W)/me;if(at<0||gt<0||at+gt>1)continue;let bt=1-at-gt,$=(u*nt-I)/(1+bt*bt+at*at+gt*gt);for(let ct=0;ct<3;ct++){let At=(ct===0?Yt:ct===1?Y:tt)*$;l[st+ct]+=At,l[F+ct]-=At*bt,l[G+ct]-=At*at,l[P+ct]-=At*gt}}}}for(let R=1;R<=A;R++){let B=R/A,F=B*B*(3-2*B),G=C*(1-F)+n*(.19-a*.025)*F;f.set(l);for(let P=0;P<l.length;P+=3){let H=e[P]/n,Q=e[P+1]/n,z=0;for(let j of S)z+=Math.sin((H*j.x+Q*j.y)*5+j.phase)*j.weight;for(let j=0;j<3;j++){let lt=(l[P+j]-c[P+j])*.55;c[P+j]=l[P+j],l[P+j]+=We(lt,-m*.15,m*.15)}l[P+2]+=z/i*n*7e-4*Math.sin(B*Math.PI)}for(let P=0;P<18;P++){w(h,4,.45*(1-s*.4),P%2===0);for(let H=0;H<l.length;H+=3){let Q=l[H]/.94,z=l[H+1]/1.02,j=l[H+2]/.86,lt=Math.hypot(Q,z,j);if(lt>G){let pt=(1-G/lt)*.55;l[H]-=l[H]*pt,l[H+1]-=l[H+1]*pt,l[H+2]-=l[H+2]*pt}}w(d,3,1,P%2!==0),(P===8||P===17)&&U()}for(let P=0;P<h.length;P+=4){let H=h[P],Q=h[P+1],z=Math.hypot(l[H]-l[Q],l[H+1]-l[Q+1],l[H+2]-l[Q+2]);z<h[P+2]*.86&&(h[P+2]+=(z-h[P+2])*.12)}R%v===0&&g.push(Float32Array.from(l))}let E=Float64Array.from(l);for(let R=1;R<=80;R++){let B=R/80,F=B*B*(3-2*B);for(let G=0;G<12;G++){for(let P=0;P<l.length;P++){let H=E[P]+(e[P]-E[P])*F;l[P]+=(H-l[P])*(P%3===2?.04:.22)}w(h,4,.7,G%2===0),w(d,3,1,G%2!==0)}}let b=Float32Array.from(l);return{samples:g,creased:b}}var fU=({src:e,alt:t="Crumplable image",backSrc:n="",width:i=320,height:s=400,sceneHeight:a=560,imageFit:r="cover",releaseBehavior:o="restore",crumpleAmount:l=.85,crumpleDuration:c=.55,releaseDuration:f=.4,foldCount:d=6,foldSharpness:h=.6,wrinkleDepth:p=.65,creaseStrength:_=.18,paperColor:S="#f4f0e8",roughness:m=.92,paperTexture:u=.08,lightIntensity:g=1.8,lightAngle:y=-35,shadow:v=!0,shadowOpacity:A=.08,draggable:C=!0,dragRotation:w=10,dragRadius:U=180,returnToOrigin:E=!0,rotation:b=0,seed:R=7,detail:B=64,disabled:F=!1,resetKey:G=0,onStateChange:P,onError:H,autoCrumple:Q=!1,onFrame:z,onControls:j,className:lt="",style:pt})=>{let Nt=(0,ri.useRef)(null),qt=(0,ri.useRef)(null),Ht=(0,ri.useRef)(null),Yt=(0,ri.useRef)(null),Y=(0,ri.useRef)(null),tt=(0,ri.useRef)(null),[mt,Rt]=(0,ri.useState)("loading"),ft=(0,ri.useRef)({releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:f,creaseStrength:_,draggable:C,dragRotation:w,dragRadius:U,returnToOrigin:E,disabled:F,onStateChange:P,onError:H});ft.current={releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:f,creaseStrength:_,draggable:C,dragRotation:w,dragRadius:U,returnToOrigin:E,disabled:F,onStateChange:P,onError:H},(0,ri.useEffect)(()=>{let ye=qt.current,D=Ht.current,Mt=Yt.current;if(!ye||!D||!Mt)return;Rt("loading"),Mt.disabled=!0,Mt.dataset.held="false",Mt.setAttribute("aria-pressed","false");let zt=ye.getBoundingClientRect(),Lt=Math.max(1,ze(i,320)),xt=Math.max(1,ze(s,400)),me=Math.min(1,Math.max(1,zt.width-48)/Lt,Math.max(1,zt.height-48)/xt);ye.style.setProperty("--pc-image-width",`${Lt*me}px`),ye.style.setProperty("--pc-image-height",`${xt*me}px`);let st;try{st=new Kd({canvas:D,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch(K){Rt("error"),ft.current.onError?.(K instanceof Error?K:new Error("WebGL is unavailable."));return}let It=Math.max(1,ze(i,320)),Ne=Math.max(1,ze(s,400)),oe=Ne/It,T=Math.min(1,oe),x=Math.round(We(ze(B,64)/4,8,24)),I=Math.max(8,Math.round(x/Math.max(1,oe))),q=Math.max(8,Math.round(x*Math.min(1,oe))),nt=sE(ze(R,7)),W=We(ze(h,.6),0,1),wt=Math.round(We(ze(d,6),3,16)),at=We(ze(p,.65),0,2),gt=(I+1)*(q+1),bt=new Float32Array(gt*3),$=new Float32Array(gt*3),ct=new Float32Array(gt*2),vt=[];for(let K=0;K<=q;K++)for(let St=0;St<=I;St++){let Kt=K*(I+1)+St,kt=(St+(St>0&&St<I?(nt()-.5)*.5:0))/I,Re=(K+(K>0&&K<q?(nt()-.5)*.5:0))/q,ge=kt-.5,Ae=(Re-.5)*oe;if(bt[Kt*3]=ge,bt[Kt*3+1]=Ae,ct[Kt*2]=kt,ct[Kt*2+1]=Re,St<I&&K<q){let Ut=Kt,qe=Kt+1,Vn=Kt+I+1,Kn=Vn+1;nt()>.5?vt.push(Ut,qe,Kn,Ut,Kn,Vn):vt.push(Ut,qe,Vn,qe,Kn,Vn)}}let At=JSON.stringify([It,Ne,x,wt,W,at,R]);Nt.current?.key!==At&&(Nt.current={key:At,value:hU(bt,vt,T,wt,W,at,ze(R,7))});let ht=Nt.current.value,Vt=new Float32Array(vt.length*3),N=new Float32Array(vt.length*3),rt=new Float32Array(vt.length*2),ot=new Float32Array(vt.length),Et=Array.from({length:gt},()=>[]);for(let K=0;K<vt.length;K++)rt[K*2]=ct[vt[K]*2],rt[K*2+1]=ct[vt[K]*2+1],Et[vt[K]].push(Math.floor(K/3)*3);let et=new Ss;et.setAttribute("position",new Tn(Vt,3).setUsage(Wd)),et.setAttribute("normal",new Tn(N,3).setUsage(Wd)),et.setAttribute("uv",new Tn(rt,2));let J=new Uint8Array(16384*4);for(let K=0;K<J.length;K+=4){let St=100+Math.floor(nt()*155);J[K]=J[K+1]=J[K+2]=St,J[K+3]=255}let _t=new su(J,128,128);_t.wrapS=_t.wrapT=hl,_t.repeat.set(5,5*oe),_t.magFilter=ai,_t.minFilter=ai,_t.needsUpdate=!0;let Gt={roughness:We(ze(m,.92),0,1),metalness:0,bumpMap:_t,bumpScale:We(ze(u,.08),0,1)*.32,alphaTest:.04,alphaToCoverage:!0,flatShading:!1},fe=new Ml({...Gt,side:ji}),te=new Ml({...Gt,side:An,color:n?"#ffffff":S}),Mi={value:0};for(let K of[fe,te])K.onBeforeCompile=St=>{St.uniforms.paperLighting=Mi,St.fragmentShader=`uniform float paperLighting;
`+St.fragmentShader,St.fragmentShader=St.fragmentShader.replace("#include <map_fragment>",`
          #include <map_fragment>
          #ifdef USE_MAP
            if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
            ${K===te&&!n?"diffuseColor.rgb = diffuse;":""}
          #endif
        `),St.fragmentShader=St.fragmentShader.replace("#include <opaque_fragment>",`
          outgoingLight = mix(diffuseColor.rgb, outgoingLight, paperLighting);
          #include <opaque_fragment>
        `)},K.customProgramCacheKey=()=>`paper-${K===te&&!n?"stock":"print"}`;let wn=new bl({depthPacking:Xd,alphaTest:.04,side:Bi});wn.onBeforeCompile=K=>{K.fragmentShader=K.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        #ifdef USE_MAP
          if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
        #endif
      `)};let Jn=new Zs,oi=new Pn(et,fe),Ka=new Pn(et,te);oi.castShadow=v,oi.receiveShadow=v,Ka.receiveShadow=v,oi.customDepthMaterial=wn,Jn.add(oi,Ka);let na=new iu;na.add(Jn);let Fi=new On(35,1,.1,1e4),Xr=new hu(16777215,10789040,1.35);na.add(Xr);let nn=new du(16775920,Math.max(0,ze(g,1.8)));nn.castShadow=v,nn.shadow.mapSize.set(1024,1024),nn.shadow.bias=-2e-4,nn.shadow.normalBias=.6,nn.shadow.radius=3,na.add(nn,nn.target);let Qa=new Ir(1,1),Il=new ou({opacity:We(ze(A,.08),0,1),depthWrite:!1}),Ts=new Pn(Qa,Il);Ts.receiveShadow=!0,Ts.visible=v,na.add(Ts),st.setClearColor(0,0),st.outputColorSpace=Ln,st.shadowMap.enabled=v,st.shadowMap.type=$f;let _n=Ol(),Hi=Ol(),zn=Ol(),Fn=Ol(),ja=Ol(),$a=Ol(),M=[_n,Hi,zn,Fn,ja,$a],L=new pu,k=new ce,X=new Pi(new V(0,0,1),0),O=new V,it=new V,ut=new V,Tt=new V,yt=new V,Ot=new V,Pt=new V(1,0,0),Ct=[Math.floor(gt/2),0,0],Bt=1,Wt=1,le=It,xe=0,de=0,Dt=0,Ce=0,ee=0,hn=0,Vi=0,Fe=!1,Hn=!1,ue=null,Qe=0,sn=!1,Ge=!1,an=!0,ia=!1,bi=0,Pl=0,M_="flat",b_=new Set,bu=window.matchMedia("(prefers-reduced-motion: reduce)"),Wr=bu.matches,E_=-1,T_=-1,Bl=Za.degToRad(ze(b,0));function $d(K){K!==M_&&(M_=K,ft.current.onStateChange?.(K))}function A_(){if(_n.value===E_&&Hi.value===T_)return;E_=_n.value,T_=Hi.value;let K=We(_n.value,0,1),St=K*(ht.samples.length-1),Kt=Math.floor(St),kt=Math.min(Kt+1,ht.samples.length-1),Re=St-Kt,ge=ht.samples[Kt],Ae=ht.samples[kt];for(let Ut=0;Ut<$.length;Ut++)$[Ut]=ge[Ut]+(Ae[Ut]-ge[Ut])*Re,$[Ut]+=(ht.creased[Ut]-bt[Ut])*Hi.value*(1-K);for(let Ut=0;Ut<vt.length;Ut+=3){let qe=vt[Ut]*3,Vn=vt[Ut+1]*3,Kn=vt[Ut+2]*3,Yr=$[Vn]-$[qe],Zr=$[Vn+1]-$[qe+1],Jr=$[Vn+2]-$[qe+2],As=$[Kn]-$[qe],Tu=$[Kn+1]-$[qe+1],Kr=$[Kn+2]-$[qe+2],X_=Zr*Kr-Jr*Tu,W_=Jr*As-Yr*Kr,q_=Yr*Tu-Zr*As,ep=Math.hypot(X_,W_,q_)||1;ot[Ut]=X_/ep,ot[Ut+1]=W_/ep,ot[Ut+2]=q_/ep}for(let Ut=0;Ut<vt.length;Ut++){let qe=vt[Ut]*3,Vn=Math.floor(Ut/3)*3,Kn=0,Yr=0,Zr=0;for(let As of Et[vt[Ut]]){let Tu=ot[Vn]*ot[As]+ot[Vn+1]*ot[As+1]+ot[Vn+2]*ot[As+2],Kr=Za.smoothstep(Tu,.88-(1-W)*.18,.98);Kn+=ot[As]*Kr,Yr+=ot[As+1]*Kr,Zr+=ot[As+2]*Kr}let Jr=Math.hypot(Kn,Yr,Zr)||1;Vt[Ut*3]=$[qe],Vt[Ut*3+1]=$[qe+1],Vt[Ut*3+2]=$[qe+2],N[Ut*3]=Kn/Jr,N[Ut*3+1]=Yr/Jr,N[Ut*3+2]=Zr/Jr}et.attributes.position.needsUpdate=!0,et.attributes.normal.needsUpdate=!0,et.computeBoundingSphere(),et.computeBoundingBox(),Mi.value=Za.smoothstep(K+Hi.value,0,.4)}function lE(){let K=et.boundingBox;if(!K)return;let St=1/0,Kt=1/0,kt=-1/0,Re=-1/0;for(let ge=0;ge<8;ge++){ut.set(ge&1?K.max.x:K.min.x,ge&2?K.max.y:K.min.y,ge&4?K.max.z:K.min.z),ut.applyMatrix4(Jn.matrixWorld).project(Fi);let Ae=(ut.x+1)*Bt/2,Ut=(1-ut.y)*Wt/2;St=Math.min(St,Ae),kt=Math.max(kt,Ae),Kt=Math.min(Kt,Ut),Re=Math.max(Re,Ut)}Mt.style.transform=`translate3d(${St}px, ${Kt}px, 0)`,Mt.style.width=`${Math.max(24,kt-St)}px`,Mt.style.height=`${Math.max(24,Re-Kt)}px`}function w_(K,St){k.set(K/Bt*2-1,1-St/Wt*2),L.setFromCamera(k,Fi)}function cE(K){if(bi=0,sn||!Ge||ia||!an||document.hidden)return;let St=Pl?Math.min(.04,(K-Pl)/1e3):1/60;Pl=K;let Kt=ft.current,kt=!1,Re=Fe?ze(Kt.crumpleDuration,.55):ze(Kt.releaseDuration,.4);for(let Ae of M)kt=S_(Ae,St,Ae===_n||Ae===Hi?Re:.42,Wr||Hn)||kt;if(Qe=Math.max(Qe,_n.value),A_(),Jn.rotation.set(ja.value,$a.value,Bl),Fe&&!Hn&&Kt.draggable&&!Q){let Ae=et.attributes.position;O.set(0,0,0);for(let Ut=0;Ut<3;Ut++)Tt.fromBufferAttribute(Ae,Ct[Ut]),O.addScaledVector(Tt,Pt.getComponent(Ut));O.multiplyScalar(le).applyEuler(Jn.rotation),X.constant=-O.z,w_(xe,de),L.ray.intersectPlane(X,it)&&(zn.value=zn.target=it.x-O.x,Fn.value=Fn.target=it.y-O.y,zn.velocity=Fn.velocity=0)}Jn.position.set(zn.value,Fn.value,0),Jn.updateMatrixWorld(!0);let ge=et.boundingBox;if(ge){let Ae=1/0;for(let Ut=0;Ut<8;Ut++)ut.set(Ut&1?ge.max.x:ge.min.x,Ut&2?ge.max.y:ge.min.y,Ut&4?ge.max.z:ge.min.z),ut.applyMatrix4(Jn.matrixWorld),Ae=Math.min(Ae,ut.z);Ts.position.z=Ae-le*T*.08}st.render(na,Fi),Ge&&z?.(D),lE(),kt&&Ei()}function Ei(){!bi&&!sn&&Ge&&an&&!document.hidden&&!ia&&(bi=requestAnimationFrame(cE))}function C_(){let K=ye.getBoundingClientRect();Bt=Math.max(1,K.width),Wt=Math.max(1,K.height),le=It*Math.min(1,Math.max(1,Bt-48)/It,Math.max(1,Wt-48)/Ne),Jn.scale.setScalar(le),Fi.aspect=Bt/Wt,Fi.position.z=Wt/(2*Math.tan(Za.degToRad(Fi.fov/2))),Fi.updateProjectionMatrix(),Fi.updateMatrixWorld(),st.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),st.setSize(Bt,Wt,!1);let St=Math.max(Bt,Wt),Kt=Za.degToRad(ze(y,-35));if(nn.position.set(Math.sin(Kt)*St,Math.cos(Kt)*St,St*4),nn.shadow.camera.left=nn.shadow.camera.bottom=-St,nn.shadow.camera.right=nn.shadow.camera.top=St,nn.shadow.camera.near=1,nn.shadow.camera.far=St*6,nn.shadow.camera.updateProjectionMatrix(),Ts.position.z=-le*T*.12,Ts.scale.set(Bt*4,Wt*4,1),ye.style.setProperty("--pc-image-width",`${le}px`),ye.style.setProperty("--pc-image-height",`${le*oe}px`),!Fe){let kt=Math.max(0,(Bt-le)/2-16),Re=Math.max(0,(Wt-le*oe)/2-16);zn.value=zn.target=We(zn.value,-kt,kt),Fn.value=Fn.target=We(Fn.value,-Re,Re)}Ei()}function tr(K=!1){if(!Fe)return;let St=ft.current;Fe=!1,Mt.setAttribute("aria-pressed","false"),Mt.dataset.held="false";let Kt=ue;if(ue=null,Kt!==null&&Mt.hasPointerCapture(Kt)&&Mt.releasePointerCapture(Kt),St.releaseBehavior==="stay"?(_n.target=_n.value,_n.velocity=0):(_n.target=0,Hi.target=St.releaseBehavior==="creased"?Math.max(Hi.value,Qe*We(ze(St.creaseStrength,.18),0,1)):0),ja.target=$a.target=0,St.returnToOrigin&&St.releaseBehavior!=="stay")zn.target=Fn.target=0;else{let kt=et.boundingBox,Re=St.releaseBehavior==="stay"&&kt?kt.max.x-kt.min.x:1,ge=St.releaseBehavior==="stay"&&kt?kt.max.y-kt.min.y:oe,Ae=(Math.abs(Math.cos(Bl))*Re+Math.abs(Math.sin(Bl))*ge)*le/2,Ut=(Math.abs(Math.sin(Bl))*Re+Math.abs(Math.cos(Bl))*ge)*le/2,qe=Math.min(Math.max(0,ze(St.dragRadius,180)),Math.max(0,Bt/2-Ae-16)),Vn=Math.min(Math.max(0,ze(St.dragRadius,180)),Math.max(0,Wt/2-Ut-16)),Kn=!Wr&&!Hn&&performance.now()-ee<90?.06:0;zn.target=We(zn.value+hn*Kn,-qe,qe),Fn.target=We(Fn.value-Vi*Kn,-Vn,Vn)}if(K||Hn||Wr)for(let kt of M)S_(kt,0,0,!0);Hn=!1,$d(St.releaseBehavior==="stay"&&_n.target>.001?"crumpled":Hi.target>.001?"creased":"flat"),Ei()}function R_(){tr(!0);for(let K of M)K.target=K.value=K.velocity=0;Qe=0,$d("flat"),Ei()}Y.current=R_,tt.current=()=>tr(!0);function tp(){Fe=!0,Qe=_n.value,_n.target=We(ze(ft.current.crumpleAmount,.85),0,1),Mt.setAttribute("aria-pressed","true"),Mt.dataset.held="true",$d("holding"),Ei()}function D_(K){if(!Ge||ft.current.disabled||Fe||K.button!==0||!K.isPrimary)return;let St=ye.getBoundingClientRect();xe=Dt=K.clientX-St.left,de=Ce=K.clientY-St.top,w_(xe,de),Jn.updateMatrixWorld(!0);let Kt=L.intersectObjects([oi,Ka],!1)[0];if(!Kt?.face)return;K.preventDefault(),Mt.dataset.pointer="true",Mt.focus({preventScroll:!0});let{face:kt}=Kt;Ct=[kt.a,kt.b,kt.c];let Re=et.attributes.position;Tt.fromBufferAttribute(Re,kt.a),yt.fromBufferAttribute(Re,kt.b),Ot.fromBufferAttribute(Re,kt.c),vs.getBarycoord(Jn.worldToLocal(Kt.point.clone()),Tt,yt,Ot,Pt),Hn=!1,ue=K.pointerId,hn=Vi=0,ee=performance.now(),Mt.setPointerCapture(K.pointerId),tp()}function U_(K){if(!Fe||K.pointerId!==ue||!ft.current.draggable)return;let St=ye.getBoundingClientRect(),Kt=performance.now(),kt=K.clientX-St.left,Re=K.clientY-St.top,ge=Math.max(.008,(Kt-ee)/1e3);hn=(kt-Dt)/ge,Vi=(Re-Ce)/ge,Dt=kt,Ce=Re,ee=Kt,xe=We(kt,12,Bt-12),de=We(Re,12,Wt-12);let Ae=Wr?0:Za.degToRad(We(ze(ft.current.dragRotation,10),0,60));ja.target=We(Vi/1800,-1,1)*Ae,$a.target=We(hn/1800,-1,1)*Ae,Ei()}function Eu(K){K.pointerId===ue&&tr()}function N_(K){K.pointerId===ue&&tr(!0)}function qr(){tr(!0)}function L_(){Mt.dataset.pointer="false",qr()}function O_(K){if(!(ft.current.disabled||!Ge)){if(Mt.dataset.pointer="false",K.key==="Escape"){K.preventDefault(),R_();return}if(K.key===" "||K.key==="Enter"){if(K.preventDefault(),K.repeat||Fe)return;Hn=!0,tp(),S_(_n,0,0,!0),Qe=Math.max(Qe,_n.value)}else if(Fe&&Hn&&ft.current.draggable&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(K.key)){K.preventDefault();let St=K.shiftKey?30:12,Kt=Math.max(0,ze(ft.current.dragRadius,180));zn.target=We(zn.target+(K.key==="ArrowRight"?St:K.key==="ArrowLeft"?-St:0),-Math.min(Kt,Bt/3),Math.min(Kt,Bt/3)),Fn.target=We(Fn.target+(K.key==="ArrowUp"?St:K.key==="ArrowDown"?-St:0),-Math.min(Kt,Wt/3),Math.min(Kt,Wt/3)),Ei()}}}function I_(K){Hn&&(K.key===" "||K.key==="Enter")&&(K.preventDefault(),tr(!0))}function P_(){Pl=0,document.hidden?qr():Ei()}function B_(){Wr=bu.matches,Wr&&(ja.target=$a.target=0),Ei()}function z_(K){K.preventDefault(),ia=!0,qr(),Mt.disabled=!0,Rt("error"),ft.current.onError?.(new Error("The WebGL context was lost."))}function F_(){ia=!1,Ge&&(Rt("ready"),Mt.disabled=ft.current.disabled,Ei())}Mt.addEventListener("pointerdown",D_),Mt.addEventListener("pointermove",U_),Mt.addEventListener("pointerup",Eu),Mt.addEventListener("pointercancel",N_),Mt.addEventListener("lostpointercapture",Eu),Mt.addEventListener("keydown",O_),Mt.addEventListener("keyup",I_),Mt.addEventListener("blur",L_),window.addEventListener("blur",qr),document.addEventListener("visibilitychange",P_),bu.addEventListener("change",B_),D.addEventListener("webglcontextlost",z_),D.addEventListener("webglcontextrestored",F_);let H_=new ResizeObserver(C_);H_.observe(ye);let V_=new IntersectionObserver(K=>{an=K[0].isIntersecting,Pl=0,an?Ei():qr()});V_.observe(ye),A_(),C_();let G_=new cu;G_.setCrossOrigin("anonymous");function k_(K){return new Promise((St,Kt)=>{G_.load(K,kt=>{if(sn){kt.dispose(),St(kt);return}b_.add(kt),kt.colorSpace=Ln,kt.anisotropy=Math.min(8,st.capabilities.getMaxAnisotropy());let Re=kt.image,ge=Re.width/Re.height,Ae=It/Ne,Ut=1,qe=1;r==="cover"?ge>Ae?Ut=Ae/ge:qe=ge/Ae:ge>Ae?qe=ge/Ae:Ut=Ae/ge,kt.repeat.set(Ut,qe),kt.offset.set((1-Ut)/2,(1-qe)/2),St(kt)},void 0,()=>Kt(new Error(`Unable to load paper image: ${K}. Remote images must allow CORS.`)))})}return e?Promise.all([k_(e),n?k_(n):Promise.resolve(null)]).then(([K,St])=>{sn||(St&&(St.repeat.x*=-1,St.offset.x=1-St.offset.x),fe.map=K,te.map=St||K,wn.map=K,fe.needsUpdate=te.needsUpdate=wn.needsUpdate=!0,Ge=!0,Q&&tp(),j?.({release:()=>tr()}),Rt("ready"),Mt.disabled=ft.current.disabled,Ei())}).catch(K=>{sn||(Rt("error"),ft.current.onError?.(K))}):(Rt("error"),ft.current.onError?.(new Error("PaperCrumple requires an image src."))),()=>{sn=!0,cancelAnimationFrame(bi),ue!==null&&Mt.hasPointerCapture(ue)&&Mt.releasePointerCapture(ue),Y.current=tt.current=null,H_.disconnect(),V_.disconnect(),Mt.removeEventListener("pointerdown",D_),Mt.removeEventListener("pointermove",U_),Mt.removeEventListener("pointerup",Eu),Mt.removeEventListener("pointercancel",N_),Mt.removeEventListener("lostpointercapture",Eu),Mt.removeEventListener("keydown",O_),Mt.removeEventListener("keyup",I_),Mt.removeEventListener("blur",L_),window.removeEventListener("blur",qr),document.removeEventListener("visibilitychange",P_),bu.removeEventListener("change",B_),D.removeEventListener("webglcontextlost",z_),D.removeEventListener("webglcontextrestored",F_),et.dispose(),Qa.dispose(),fe.dispose(),te.dispose(),wn.dispose(),Il.dispose(),_t.dispose(),b_.forEach(K=>K.dispose()),nn.shadow.dispose(),st.dispose(),st.forceContextLoss()}},[e,n,i,s,r,d,h,p,S,m,u,g,y,v,A,b,R,B]),(0,ri.useEffect)(()=>{Y.current?.()},[G]),(0,ri.useEffect)(()=>{F&&tt.current?.()},[F]);let jt=v?`drop-shadow(0 6px 10px rgb(0 0 0 / ${We(ze(A,.08),0,1)}))`:void 0;return(0,Ja.jsxs)("div",{ref:qt,className:`paper-crumple ${lt}`,style:{height:a,...pt},"data-status":mt,children:[(0,Ja.jsx)("canvas",{ref:Ht,className:"paper-crumple-canvas","aria-hidden":"true",style:{visibility:mt==="ready"?"visible":"hidden",filter:jt}}),mt!=="ready"&&(0,Ja.jsx)("img",{className:"paper-crumple-fallback",src:e||void 0,alt:t,draggable:!1,style:{objectFit:r,transform:`translate(-50%, -50%) rotate(${b}deg)`,filter:jt}}),(0,Ja.jsx)("button",{ref:Yt,type:"button",className:"paper-crumple-hit",disabled:F||mt!=="ready","aria-label":`${t}. Hold to crumple and drag. Keyboard: hold Space or Enter, arrow keys to move, Escape to reset.`,"aria-pressed":"false",style:{visibility:mt==="ready"?"visible":"hidden"}}),(0,Ja.jsx)("span",{className:"paper-crumple-focus","aria-hidden":"true"}),(0,Ja.jsx)("span",{className:"paper-crumple-sr",role:"status",children:mt==="loading"?"Loading interactive paper.":mt==="error"?"Interactive paper unavailable. Showing the original image.":""})]})},aE=fU;var oE=er(Mu());window.portfolioPaperCrumple=(e,t)=>{let n=document.createElement("div");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"fixed",left:"0",top:"0",width:"368px",height:"560px",opacity:"0",pointerEvents:"none",zIndex:"-1"}),document.body.appendChild(n);let i=(0,rE.createRoot)(n),s=!1,a=()=>{s||(s=!0,i.unmount(),n.remove())};return new Promise((r,o)=>{let l=setTimeout(()=>{a(),o(new Error("Paper loading timed out"))},8e3),c=!1,f;i.render((0,oE.jsx)(aE,{src:e.src,alt:"\u6D82\u9E26\u7EB8\u5F20",width:320,height:400,sceneHeight:560,releaseBehavior:"restore",crumpleAmount:.85,crumpleDuration:.55,releaseDuration:.4,foldCount:6,foldSharpness:.6,wrinkleDepth:.65,creaseStrength:.18,paperColor:"#f4f0e8",paperTexture:.08,draggable:!0,returnToOrigin:!0,imageFit:"contain",autoCrumple:!0,onControls:d=>{f=d},onFrame:d=>{s||(c||(c=!0,clearTimeout(l),r({canvas:d,dispose:a,release:()=>f?.release()})),t(d))},onError:d=>{clearTimeout(l),a(),o(d)}}))})};})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
