"use strict";var dt=Object.create;var ue=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var It=Object.getOwnPropertyNames;var Mt=Object.getPrototypeOf,gt=Object.prototype.hasOwnProperty;var Re=(a,t,e)=>()=>{if(e)throw e[0];try{return a&&(t=a(a=0)),t}catch(r){throw e=[r],r}};var $=(a,t)=>{for(var e in t)ue(a,e,{get:t[e],enumerable:!0})},ie=(a,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of It(t))!gt.call(a,n)&&n!==e&&ue(a,n,{get:()=>t[n],enumerable:!(r=bt(t,n))||r.enumerable});return a},P=(a,t,e)=>(ie(a,t,"default"),e&&ie(e,t,"default")),O=(a,t,e)=>(e=a!=null?dt(Mt(a)):{},ie(t||!a||!a.__esModule?ue(e,"default",{value:a,enumerable:!0}):e,a)),mt=a=>ie(ue({},"__esModule",{value:!0}),a);var E={};$(E,{default:()=>Te.default});var Te,le=Re(()=>{P(E,require("formdata-polyfill/esm.min.js"));Te=O(require("formdata-polyfill/esm.min.js"))});var f={};$(f,{default:()=>Le.default});var Le,Pe=Re(()=>{P(f,require("fetch-blob/from.js"));Le=O(require("fetch-blob/from.js"))});var Ne={};$(Ne,{toFormData:()=>ft});function Dt(a){let t=a.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let e=t[2]||t[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function ft(a,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let e=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ee(e[1]||e[2]),n,o,l,y,p,s,M=[],w=new E.FormData,v=S=>{l+=c.decode(S,{stream:!0})},B=S=>{M.push(S)},u=()=>{let S=new f.File(M,s,{type:p});w.append(y,S)},A=()=>{w.append(y,l)},c=new TextDecoder("utf-8");c.decode(),r.onPartBegin=function(){r.onPartData=v,r.onPartEnd=A,n="",o="",l="",y="",p="",s=null,M.length=0},r.onHeaderField=function(S){n+=c.decode(S,{stream:!0})},r.onHeaderValue=function(S){o+=c.decode(S,{stream:!0})},r.onHeaderEnd=function(){if(o+=c.decode(),n=n.toLowerCase(),n==="content-disposition"){let S=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);S&&(y=S[2]||S[3]||""),s=Dt(o),s&&(r.onPartData=B,r.onPartEnd=u)}else n==="content-type"&&(p=o);o="",n=""};for await(let S of a)r.write(S);return r.end(),w}var V,b,Ve,z,ce,Se,Rt,ee,At,Pt,Et,Ct,G,Ee,qe=Re(()=>{Pe();le();V=0,b={START_BOUNDARY:V++,HEADER_FIELD_START:V++,HEADER_FIELD:V++,HEADER_VALUE_START:V++,HEADER_VALUE:V++,HEADER_VALUE_ALMOST_DONE:V++,HEADERS_ALMOST_DONE:V++,PART_DATA_START:V++,PART_DATA:V++,END:V++},Ve=1,z={PART_BOUNDARY:Ve,LAST_BOUNDARY:Ve*=2},ce=10,Se=13,Rt=32,ee=45,At=58,Pt=97,Et=122,Ct=a=>a|32,G=()=>{},Ee=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=G,this.onHeaderField=G,this.onHeadersEnd=G,this.onHeaderValue=G,this.onPartBegin=G,this.onPartData=G,this.onPartEnd=G,this.boundaryChars={},t=`\r
--`+t;let e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=b.START_BOUNDARY}write(t){let e=0,r=t.length,n=this.index,{lookbehind:o,boundary:l,boundaryChars:y,index:p,state:s,flags:M}=this,w=this.boundary.length,v=w-1,B=t.length,u,A,c=d=>{this[d+"Mark"]=e},S=d=>{delete this[d+"Mark"]},m=(d,R,I,Y)=>{(R===void 0||R!==I)&&this[d](Y&&Y.subarray(R,I))},k=(d,R)=>{let I=d+"Mark";I in this&&(R?(m(d,this[I],e,t),delete this[I]):(m(d,this[I],t.length,t),this[I]=0))};for(e=0;e<r;e++)switch(u=t[e],s){case b.START_BOUNDARY:if(p===l.length-2){if(u===ee)M|=z.LAST_BOUNDARY;else if(u!==Se)return;p++;break}else if(p-1===l.length-2){if(M&z.LAST_BOUNDARY&&u===ee)s=b.END,M=0;else if(!(M&z.LAST_BOUNDARY)&&u===ce)p=0,m("onPartBegin"),s=b.HEADER_FIELD_START;else return;break}u!==l[p+2]&&(p=-2),u===l[p+2]&&p++;break;case b.HEADER_FIELD_START:s=b.HEADER_FIELD,c("onHeaderField"),p=0;case b.HEADER_FIELD:if(u===Se){S("onHeaderField"),s=b.HEADERS_ALMOST_DONE;break}if(p++,u===ee)break;if(u===At){if(p===1)return;k("onHeaderField",!0),s=b.HEADER_VALUE_START;break}if(A=Ct(u),A<Pt||A>Et)return;break;case b.HEADER_VALUE_START:if(u===Rt)break;c("onHeaderValue"),s=b.HEADER_VALUE;case b.HEADER_VALUE:u===Se&&(k("onHeaderValue",!0),m("onHeaderEnd"),s=b.HEADER_VALUE_ALMOST_DONE);break;case b.HEADER_VALUE_ALMOST_DONE:if(u!==ce)return;s=b.HEADER_FIELD_START;break;case b.HEADERS_ALMOST_DONE:if(u!==ce)return;m("onHeadersEnd"),s=b.PART_DATA_START;break;case b.PART_DATA_START:s=b.PART_DATA,c("onPartData");case b.PART_DATA:if(n=p,p===0){for(e+=v;e<B&&!(t[e]in y);)e+=w;e-=v,u=t[e]}if(p<l.length)l[p]===u?(p===0&&k("onPartData",!0),p++):p=0;else if(p===l.length)p++,u===Se?M|=z.PART_BOUNDARY:u===ee?M|=z.LAST_BOUNDARY:p=0;else if(p-1===l.length)if(M&z.PART_BOUNDARY){if(p=0,u===ce){M&=~z.PART_BOUNDARY,m("onPartEnd"),m("onPartBegin"),s=b.HEADER_FIELD_START;break}}else M&z.LAST_BOUNDARY&&u===ee?(m("onPartEnd"),s=b.END,M=0):p=0;if(p>0)o[p-1]=u;else if(n>0){let d=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);m("onPartData",0,n,d),n=0,c("onPartData"),e--}break;case b.END:break;default:throw new Error(`Unexpected state entered: ${s}`)}k("onHeaderField"),k("onHeaderValue"),k("onPartData"),this.index=p,this.state=s,this.flags=M}end(){if(this.state===b.HEADER_FIELD_START&&this.index===0||this.state===b.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==b.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var za={};$(za,{confirmation:()=>ka,default:()=>Fa});module.exports=mt(za);var it=require("@octokit/rest"),ut=require("@raycast/api"),st=require("@raycast/utils"),pt=require("graphql-request");var et=O(require("node:http"),1),tt=O(require("node:https"),1),Q=O(require("node:zlib"),1),_=O(require("node:stream"),1),re=require("node:buffer");var Z={};$(Z,{default:()=>se.default});P(Z,require("data-uri-to-buffer"));var se=O(require("data-uri-to-buffer"));var h=O(require("node:stream"),1),F=require("node:util"),U=require("node:buffer");var J={};$(J,{default:()=>pe.default});P(J,require("fetch-blob"));var pe=O(require("fetch-blob"));le();var j=class extends Error{constructor(t,e){super(t),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var C=class extends j{constructor(t,e,r){super(t,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var ye=Symbol.toStringTag,Ae=a=>typeof a=="object"&&typeof a.append=="function"&&typeof a.delete=="function"&&typeof a.get=="function"&&typeof a.getAll=="function"&&typeof a.has=="function"&&typeof a.set=="function"&&typeof a.sort=="function"&&a[ye]==="URLSearchParams",X=a=>a&&typeof a=="object"&&typeof a.arrayBuffer=="function"&&typeof a.type=="string"&&typeof a.stream=="function"&&typeof a.constructor=="function"&&/^(Blob|File)$/.test(a[ye]),we=a=>typeof a=="object"&&(a[ye]==="AbortSignal"||a[ye]==="EventTarget"),Be=(a,t)=>{let e=new URL(t).hostname,r=new URL(a).hostname;return e===r||e.endsWith(`.${r}`)},Oe=(a,t)=>{let e=new URL(t).protocol,r=new URL(a).protocol;return e===r};var Ut=(0,F.promisify)(h.default.pipeline),D=Symbol("Body internals"),N=class{constructor(t,{size:e=0}={}){let r=null;t===null?t=null:Ae(t)?t=U.Buffer.from(t.toString()):X(t)||U.Buffer.isBuffer(t)||(F.types.isAnyArrayBuffer(t)?t=U.Buffer.from(t):ArrayBuffer.isView(t)?t=U.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof h.default||(t instanceof E.FormData?(t=(0,E.formDataToBlob)(t),r=t.type.split("=")[1]):t=U.Buffer.from(String(t))));let n=t;U.Buffer.isBuffer(t)?n=h.default.Readable.from(t):X(t)&&(n=h.default.Readable.from(t.stream())),this[D]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,t instanceof h.default&&t.on("error",o=>{let l=o instanceof j?o:new C(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[D].error=l})}get body(){return this[D].stream}get bodyUsed(){return this[D].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:e,byteLength:r}=await Ce(this);return t.slice(e,e+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new E.FormData,n=new URLSearchParams(await this.text());for(let[o,l]of n)r.append(o,l);return r}let{toFormData:e}=await Promise.resolve().then(()=>(qe(),Ne));return e(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[D].body&&this[D].body.type||"",e=await this.arrayBuffer();return new pe.default([e],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Ce(this);return new TextDecoder().decode(t)}buffer(){return Ce(this)}};N.prototype.buffer=(0,F.deprecate)(N.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(N.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,F.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Ce(a){if(a[D].disturbed)throw new TypeError(`body used already for: ${a.url}`);if(a[D].disturbed=!0,a[D].error)throw a[D].error;let{body:t}=a;if(t===null)return U.Buffer.alloc(0);if(!(t instanceof h.default))return U.Buffer.alloc(0);let e=[],r=0;try{for await(let n of t){if(a.size>0&&r+n.length>a.size){let o=new C(`content size at ${a.url} over limit: ${a.size}`,"max-size");throw t.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof j?n:new C(`Invalid response body while trying to fetch ${a.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?U.Buffer.from(e.join("")):U.Buffer.concat(e,r)}catch(n){throw new C(`Could not create Buffer from response body for ${a.url}: ${n.message}`,"system",n)}else throw new C(`Premature close of server response while trying to fetch ${a.url}`)}var W=(a,t)=>{let e,r,{body:n}=a[D];if(a.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof h.default&&typeof n.getBoundary!="function"&&(e=new h.PassThrough({highWaterMark:t}),r=new h.PassThrough({highWaterMark:t}),n.pipe(e),n.pipe(r),a[D].stream=e,n=r),n},xt=(0,F.deprecate)(a=>a.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),de=(a,t)=>a===null?null:typeof a=="string"?"text/plain;charset=UTF-8":Ae(a)?"application/x-www-form-urlencoded;charset=UTF-8":X(a)?a.type||null:U.Buffer.isBuffer(a)||F.types.isAnyArrayBuffer(a)||ArrayBuffer.isView(a)?null:a instanceof E.FormData?`multipart/form-data; boundary=${t[D].boundary}`:a&&typeof a.getBoundary=="function"?`multipart/form-data;boundary=${xt(a)}`:a instanceof h.default?null:"text/plain;charset=UTF-8",je=a=>{let{body:t}=a[D];return t===null?0:X(t)?t.size:U.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Fe=async(a,{body:t})=>{t===null?a.end():await Ut(t,a)};var De=require("node:util"),te=O(require("node:http"),1),be=typeof te.default.validateHeaderName=="function"?te.default.validateHeaderName:a=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(a)){let t=new TypeError(`Header name must be a valid HTTP token [${a}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},fe=typeof te.default.validateHeaderValue=="function"?te.default.validateHeaderValue:(a,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let e=new TypeError(`Invalid character in header content ["${a}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},x=class a extends URLSearchParams{constructor(t){let e=[];if(t instanceof a){let r=t.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(l=>[n,l]))}else if(t!=null)if(typeof t=="object"&&!De.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)e.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...t].map(n=>{if(typeof n!="object"||De.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(be(r),fe(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(l,y)=>(be(l),fe(l,String(y)),URLSearchParams.prototype[n].call(r,String(l).toLowerCase(),String(y)));case"delete":case"has":case"getAll":return l=>(be(l),URLSearchParams.prototype[n].call(r,String(l).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let e=this.getAll(t);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,e=void 0){for(let r of this.keys())Reflect.apply(t,e,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,e)=>(t[e]=this.getAll(e),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,e)=>{let r=this.getAll(e);return e==="host"?t[e]=r[0]:t[e]=r.length>1?r:r[0],t},{})}};Object.defineProperties(x.prototype,["get","entries","forEach","values"].reduce((a,t)=>(a[t]={enumerable:!0},a),{}));function ke(a=[]){return new x(a.reduce((t,e,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,e])=>{try{return be(t),fe(t,String(e)),!0}catch{return!1}}))}var _t=new Set([301,302,303,307,308]),Ie=a=>_t.has(a);var L=Symbol("Response internals"),T=class a extends N{constructor(t=null,e={}){super(t,e);let r=e.status!=null?e.status:200,n=new x(e.headers);if(t!==null&&!n.has("Content-Type")){let o=de(t,this);o&&n.append("Content-Type",o)}this[L]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[L].type}get url(){return this[L].url||""}get status(){return this[L].status}get ok(){return this[L].status>=200&&this[L].status<300}get redirected(){return this[L].counter>0}get statusText(){return this[L].statusText}get headers(){return this[L].headers}get highWaterMark(){return this[L].highWaterMark}clone(){return new a(W(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,e=302){if(!Ie(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new a(null,{headers:{location:new URL(t).toString()},status:e})}static error(){let t=new a(null,{status:0,statusText:""});return t[L].type="error",t}static json(t=void 0,e={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new x(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new a(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(T.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ze=require("node:url"),Je=require("node:util");var ze=a=>{if(a.search)return a.search;let t=a.href.length-1,e=a.hash||(a.href[t]==="#"?"#":"");return a.href[t-e.length]==="?"?"?":""};var He=require("node:net");function Ge(a,t=!1){return a==null||(a=new URL(a),/^(about|blob|data):$/.test(a.protocol))?"no-referrer":(a.username="",a.password="",a.hash="",t&&(a.pathname="",a.search=""),a)}var Qe=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),$e="strict-origin-when-cross-origin";function We(a){if(!Qe.has(a))throw new TypeError(`Invalid referrerPolicy: ${a}`);return a}function vt(a){if(/^(http|ws)s:$/.test(a.protocol))return!0;let t=a.host.replace(/(^\[)|(]$)/g,""),e=(0,He.isIP)(t);return e===4&&/^127\./.test(t)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:a.host==="localhost"||a.host.endsWith(".localhost")?!1:a.protocol==="file:"}function K(a){return/^about:(blank|srcdoc)$/.test(a)||a.protocol==="data:"||/^(blob|filesystem):$/.test(a.protocol)?!0:vt(a)}function Ke(a,{referrerURLCallback:t,referrerOriginCallback:e}={}){if(a.referrer==="no-referrer"||a.referrerPolicy==="")return null;let r=a.referrerPolicy;if(a.referrer==="about:client")return"no-referrer";let n=a.referrer,o=Ge(n),l=Ge(n,!0);o.toString().length>4096&&(o=l),t&&(o=t(o)),e&&(l=e(l));let y=new URL(a.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return K(o)&&!K(y)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===y.origin?o:K(o)&&!K(y)?"no-referrer":l;case"same-origin":return o.origin===y.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===y.origin?o:l;case"no-referrer-when-downgrade":return K(o)&&!K(y)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Ye(a){let t=(a.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of t)r&&Qe.has(r)&&(e=r);return e}var g=Symbol("Request internals"),ae=a=>typeof a=="object"&&typeof a[g]=="object",ht=(0,Je.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),H=class a extends N{constructor(t,e={}){let r;if(ae(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ae(e)&&"data"in e&&ht(),(e.body!=null||ae(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ae(t)&&t.body!==null?W(t):null;super(o,{size:e.size||t.size||0});let l=new x(e.headers||t.headers||{});if(o!==null&&!l.has("Content-Type")){let s=de(o,this);s&&l.set("Content-Type",s)}let y=ae(t)?t.signal:null;if("signal"in e&&(y=e.signal),y!=null&&!we(y))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let p=e.referrer==null?t.referrer:e.referrer;if(p==="")p="no-referrer";else if(p){let s=new URL(p);p=/^about:(\/\/)?client$/.test(s)?"client":s}else p=void 0;this[g]={method:n,redirect:e.redirect||t.redirect||"follow",headers:l,parsedURL:r,signal:y,referrer:p},this.follow=e.follow===void 0?t.follow===void 0?20:t.follow:e.follow,this.compress=e.compress===void 0?t.compress===void 0?!0:t.compress:e.compress,this.counter=e.counter||t.counter||0,this.agent=e.agent||t.agent,this.highWaterMark=e.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||t.referrerPolicy||""}get method(){return this[g].method}get url(){return(0,Ze.format)(this[g].parsedURL)}get headers(){return this[g].headers}get redirect(){return this[g].redirect}get signal(){return this[g].signal}get referrer(){if(this[g].referrer==="no-referrer")return"";if(this[g].referrer==="client")return"about:client";if(this[g].referrer)return this[g].referrer.toString()}get referrerPolicy(){return this[g].referrerPolicy}set referrerPolicy(t){this[g].referrerPolicy=We(t)}clone(){return new a(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(H.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Xe=a=>{let{parsedURL:t}=a[g],e=new x(a[g].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(a.body===null&&/^(post|put)$/i.test(a.method)&&(r="0"),a.body!==null){let y=je(a);typeof y=="number"&&!Number.isNaN(y)&&(r=String(y))}r&&e.set("Content-Length",r),a.referrerPolicy===""&&(a.referrerPolicy=$e),a.referrer&&a.referrer!=="no-referrer"?a[g].referrer=Ke(a):a[g].referrer="no-referrer",a[g].referrer instanceof URL&&e.set("Referer",a.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),a.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=a;typeof n=="function"&&(n=n(t));let o=ze(t),l={path:t.pathname+o,method:a.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:a.insecureHTTPParser,agent:n};return{parsedURL:t,options:l}};var Me=class extends j{constructor(t,e="aborted"){super(t,e)}};le();Pe();var Tt=new Set(["data:","http:","https:"]);async function ge(a,t){return new Promise((e,r)=>{let n=new H(a,t),{parsedURL:o,options:l}=Xe(n);if(!Tt.has(o.protocol))throw new TypeError(`node-fetch cannot load ${a}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let u=(0,se.default)(n.url),A=new T(u,{headers:{"Content-Type":u.typeFull}});e(A);return}let y=(o.protocol==="https:"?tt.default:et.default).request,{signal:p}=n,s=null,M=()=>{let u=new Me("The operation was aborted.");r(u),n.body&&n.body instanceof _.default.Readable&&n.body.destroy(u),!(!s||!s.body)&&s.body.emit("error",u)};if(p&&p.aborted){M();return}let w=()=>{M(),B()},v=y(o.toString(),l);p&&p.addEventListener("abort",w);let B=()=>{v.abort(),p&&p.removeEventListener("abort",w)};v.on("error",u=>{r(new C(`request to ${n.url} failed, reason: ${u.message}`,"system",u)),B()}),wt(v,u=>{s&&s.body&&s.body.destroy(u)}),process.version<"v14"&&v.on("socket",u=>{let A;u.prependListener("end",()=>{A=u._eventsCount}),u.prependListener("close",c=>{if(s&&A<u._eventsCount&&!c){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",S)}})}),v.on("response",u=>{v.setTimeout(0);let A=ke(u.rawHeaders);if(Ie(u.statusCode)){let d=A.get("Location"),R=null;try{R=d===null?null:new URL(d,n.url)}catch{if(n.redirect!=="manual"){r(new C(`uri requested responds with an invalid redirect URL: ${d}`,"invalid-redirect")),B();return}}switch(n.redirect){case"error":r(new C(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),B();return;case"manual":break;case"follow":{if(R===null)break;if(n.counter>=n.follow){r(new C(`maximum redirect reached at: ${n.url}`,"max-redirect")),B();return}let I={headers:new x(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:W(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Be(n.url,R)||!Oe(n.url,R))for(let St of["authorization","www-authenticate","cookie","cookie2"])I.headers.delete(St);if(u.statusCode!==303&&n.body&&t.body instanceof _.default.Readable){r(new C("Cannot follow redirect with body being a readable stream","unsupported-redirect")),B();return}(u.statusCode===303||(u.statusCode===301||u.statusCode===302)&&n.method==="POST")&&(I.method="GET",I.body=void 0,I.headers.delete("content-length"));let Y=Ye(A);Y&&(I.referrerPolicy=Y),e(ge(new H(R,I))),B();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}p&&u.once("end",()=>{p.removeEventListener("abort",w)});let c=(0,_.pipeline)(u,new _.PassThrough,d=>{d&&r(d)});process.version<"v12.10"&&u.on("aborted",w);let S={url:n.url,status:u.statusCode,statusText:u.statusMessage,headers:A,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},m=A.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||m===null||u.statusCode===204||u.statusCode===304){s=new T(c,S),e(s);return}let k={flush:Q.default.Z_SYNC_FLUSH,finishFlush:Q.default.Z_SYNC_FLUSH};if(m==="gzip"||m==="x-gzip"){c=(0,_.pipeline)(c,Q.default.createGunzip(k),d=>{d&&r(d)}),s=new T(c,S),e(s);return}if(m==="deflate"||m==="x-deflate"){let d=(0,_.pipeline)(u,new _.PassThrough,R=>{R&&r(R)});d.once("data",R=>{(R[0]&15)===8?c=(0,_.pipeline)(c,Q.default.createInflate(),I=>{I&&r(I)}):c=(0,_.pipeline)(c,Q.default.createInflateRaw(),I=>{I&&r(I)}),s=new T(c,S),e(s)}),d.once("end",()=>{s||(s=new T(c,S),e(s))});return}if(m==="br"){c=(0,_.pipeline)(c,Q.default.createBrotliDecompress(),d=>{d&&r(d)}),s=new T(c,S),e(s);return}s=new T(c,S),e(s)}),Fe(v,n).catch(r)})}function wt(a,t){let e=re.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;a.on("response",l=>{let{headers:y}=l;r=y["transfer-encoding"]==="chunked"&&!y["content-length"]}),a.on("socket",l=>{let y=()=>{if(r&&!n){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}},p=s=>{n=re.Buffer.compare(s.slice(-5),e)===0,!n&&o&&(n=re.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&re.Buffer.compare(s.slice(-2),e.slice(3))===0),o=s};l.prependListener("close",y),l.on("data",p),a.on("close",()=>{l.removeListener("close",y),l.removeListener("data",p)})})}var i=O(require("graphql-tag")),ne=i.default`
  fragment ShortRepositoryFields on Repository {
    id
    defaultBranchRef {
      target {
        oid
      }
    }
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    mergeCommitAllowed
    squashMergeAllowed
    rebaseMergeAllowed
    autoMergeAllowed
  }
`,Bt=i.default`
  fragment DiscussionFields on Discussion {
    id
    title
    bodyText
    publishedAt
    repository {
      ...ShortRepositoryFields
    }
    url
    upvoteCount
    category {
      name
      emoji
      emojiHTML
    }
    comments {
      totalCount
    }
    answer {
      bodyText
    }
    author {
      login
      avatarUrl
    }
  }
  ${ne}
`,q=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,oe=i.default`
  fragment AuthorFields on Actor {
    ... on Bot {
      id
      login
      avatarUrl(size: 64)
    }
    ... on User {
      ...UserFields
    }
    ... on Mannequin {
      id
      login
      avatarUrl(size: 64)
    }
    ... on Organization {
      id
      login
      name
      avatarUrl(size: 64)
    }
    ... on EnterpriseUserAccount {
      id
      login
      name
      avatarUrl(size: 64)
    }
  }
  ${q}
`,me=i.default`
  fragment IssueFields on Issue {
    id
    url
    title
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            id
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    comments(first: 0) {
      totalCount
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
  }
  ${oe}
  ${ne}
  ${q}
`,Ot=i.default`
  fragment IssueDetailFields on Issue {
    id
    url
    title
    body
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
        isDefault
      }
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 25) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${oe}
  ${ne}
  ${q}
`,Lt=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,at=i.default`
  fragment ProjectFields on ProjectV2 {
    id
    title
    public
    number
    readme
    closed
    shortDescription
    url
    createdAt
    creator {
      ...AuthorFields
    }
    updatedAt
    views(first: 50) {
      totalCount
      nodes {
        ...ProjectViewerFields
      }
    }
    viewerCanClose
    viewerCanUpdate
    viewerCanReopen
  }
  ${oe}
  ${Lt}
`,rt=i.default`
  fragment PullRequestFields on PullRequest {
    id
    title
    permalink
    merged
    number
    isDraft
    closed
    updatedAt
    mergeable
    milestone {
      id
      title
    }
    reviewDecision
    repository {
      ...ShortRepositoryFields
    }
    headRefName
    headRef {
      name
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewThreads(first: 100) {
      totalCount
      nodes {
        comments(first: 0) {
          totalCount
        }
      }
    }
    reviews(first: 100) {
      totalCount
      nodes {
        bodyText
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
  }
  ${ne}
  ${oe}
  ${q}
`,Vt=i.default`
  fragment PullRequestDetailsFields on PullRequest {
    id
    title
    body
    permalink
    merged
    number
    isDraft
    closed
    createdAt
    updatedAt
    additions
    deletions
    mergeable
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    baseRefName
    baseRef {
      name
    }
    headRefName
    headRef {
      name
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
      }
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewRequests(first: 50) {
      totalCount
      nodes {
        requestedReviewer {
          ... on Team {
            id
            teamName: name
            teamAvatarURL: avatarUrl(size: 64)
          }
          ... on User {
            id
            githubUsername: login
            userName: name
            userAvatarURL: avatarUrl(size: 64)
          }
          ... on Mannequin {
            id
            githubUsername: login
            userAvatarURL: avatarUrl(size: 64)
          }
        }
      }
    }
    reviews(first: 10, states: [PENDING, APPROVED, CHANGES_REQUESTED]) {
      totalCount
      nodes {
        state
        author {
          ...AuthorFields
        }
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 20) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${ne}
  ${oe}
  ${q}
`,Nt=i.default`
  fragment PullRequestCommitFields on PullRequest {
    commits(last: $numberOfItems, before: $before) {
      totalCount
      nodes {
        commit {
          id
          authoredDate
          message
          oid
          abbreviatedOid
          author {
            avatarUrl(size: 64)
            name
          }
          statusCheckRollup {
            state
          }
          url
          treeUrl
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
`,nt=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Ue=i.default`
  fragment ExtendedRepositoryFields on Repository {
    id
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    updatedAt
    pushedAt
    stargazerCount
    isArchived
    isFork
    isPrivate
    viewerHasStarred
    primaryLanguage {
      id
      name
      color
    }
  }
`,qt=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,jt=i.default`
  mutation createLinkedBranch($input: CreateLinkedBranchInput!) {
    createLinkedBranch(input: $input) {
      clientMutationId
      linkedBranch {
        ref {
          id
          name
        }
      }
    }
  }
`,Ft=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,kt=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,zt=i.default`
  query searchDiscussions($query: String!, $numberOfItems: Int!, $after: String) {
    searchDiscussions: search(query: $query, type: DISCUSSION, first: $numberOfItems, after: $after) {
      nodes {
        ...DiscussionFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Bt}
`,Gt=i.default`
  query getGitHubDiscussionNumber($filter: String!) {
    search(query: $filter, type: DISCUSSION, first: 1) {
      nodes {
        ... on Discussion {
          number
          url
        }
      }
    }
  }
`,Ht=i.default`
  query repositoryCollaboratorsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      issue(number: $issueNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${q}
`,Qt=i.default`
  query repositoryProjectsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      issue(number: $issueNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,$t=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Ot}
`,Wt=i.default`
  query searchIssues($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      nodes {
        ...IssueFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${me}
`,Kt=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${me}
`,Yt=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Zt=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Jt=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Xt=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ea=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ta=i.default`
  mutation createIssue(
    $repositoryId: ID!
    $title: String!
    $body: String!
    $assigneeIds: [ID!]!
    $labelIds: [ID!]!
    $milestoneId: ID
    $issueTypeId: ID
  ) {
    createIssue(
      input: {
        repositoryId: $repositoryId
        title: $title
        body: $body
        assigneeIds: $assigneeIds
        labelIds: $labelIds
        milestoneId: $milestoneId
        issueTypeId: $issueTypeId
      }
    ) {
      issue {
        ...IssueFields
      }
    }
  }
  ${me}
`,aa=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ra=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${at}
`,na=i.default`
  query searchPullRequests($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      edges {
        node {
          ...PullRequestFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${rt}
`,oa=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Vt}
`,ia=i.default`
  query repositoryCollaboratorsForPullRequests(
    $owner: String!
    $name: String!
    $pullRequestNumber: Int!
    $searchQuery: String
  ) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25, query: $searchQuery) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      pullRequest(number: $pullRequestNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${q}
`,ua=i.default`
  query repositoryProjectsForPullRequests($owner: String!, $name: String!, $pullRequestNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      pullRequest(number: $pullRequestNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,sa=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Nt}
`,pa=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,la=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ya=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ca=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Sa=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,da=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ba=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ia=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ma=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ga=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,ma=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Ra=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Aa=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Pa=i.default`
  mutation createPullRequest(
    $repositoryId: ID!
    $into: String!
    $from: String!
    $title: String!
    $body: String!
    $isDraft: Boolean!
  ) {
    createPullRequest(
      input: {
        repositoryId: $repositoryId
        baseRefName: $into
        headRefName: $from
        title: $title
        body: $body
        draft: $isDraft
      }
    ) {
      pullRequest {
        id
      }
    }
  }
`,Ea=i.default`
  mutation initPullRequest(
    $pullRequestId: ID!
    $reviewersIds: [ID!]!
    $assigneeIds: [ID!]!
    $labelsIds: [ID!]!
    $milestoneId: ID
  ) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: $reviewersIds }) {
      pullRequest {
        id
        reviewRequests {
          totalCount
        }
      }
    }
    updatePullRequest(
      input: {
        pullRequestId: $pullRequestId
        assigneeIds: $assigneeIds
        labelIds: $labelsIds
        milestoneId: $milestoneId
      }
    ) {
      pullRequest {
        ...PullRequestFields
      }
    }
  }
  ${rt}
`,Ca=i.default`
  query searchRepositories($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, first: $numberOfItems, after: $after, type: REPOSITORY) {
      nodes {
        ...ExtendedRepositoryFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Ue}
`,Da=i.default`
  query myLatestRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: RepositoryOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      repositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${Ue}
`,fa=i.default`
  query milestonesForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      milestones(first: 25, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
    }
  }
`,Ua=i.default`
  query commentsForPullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        comments(first: 100) {
          nodes {
            author {
              login
            }
            body
          }
        }
      }
    }
  }
`,xa=i.default`
  query dataForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      mergeCommitAllowed
      squashMergeAllowed
      rebaseMergeAllowed
      autoMergeAllowed
      defaultBranchRef {
        id
        name
        target {
          ...CommitFields
        }
      }
      issueTypes(orderBy: { direction: ASC, field: NAME }, first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isEnabled
        }
      }
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50) {
        totalCount
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
      collaborators(first: 50) {
        totalCount
        nodes {
          ...UserFields
        }
      }
      labels(first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isDefault
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          id
          title
        }
      }
      milestones(first: 50, states: OPEN, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
        }
      }
      owner {
        __typename
        ... on Organization {
          projectsV2(first: 50) {
            totalCount
            nodes {
              id
              title
            }
          }
        }
      }
      pullRequestTemplates {
        body
      }
      issueTemplates {
        name
        about
        title
        body
      }
    }
  }
  ${nt}
  ${q}
`,_a=i.default`
  query searchRepositoryBranches($owner: String!, $name: String!, $query: String!) {
    repository(owner: $owner, name: $name) {
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50, query: $query) {
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
    }
  }
  ${nt}
`,va=i.default`
  query repositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      url
      defaultBranchRef {
        id
        name
        target {
          oid
        }
      }
      issues(first: 50, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          ...IssueFields
        }
      }
    }
  }
  ${me}
`,ha=i.default`
  query repositoryReleases($name: String!, $owner: String!, $numberOfItems: Int!, $after: String) {
    repository(name: $name, owner: $owner) {
      ... on Repository {
        releases(first: $numberOfItems, after: $after, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            ...ReleaseFields
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${qt}
`,Ta=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,wa=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ba=i.default`
  query myStarredRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: StarOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      starredRepositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${Ue}
`,Oa=i.default`
  query getViewer {
    viewer {
      ...UserFields
      organizations(first: 50) {
        totalCount
        nodes {
          avatarUrl
          login
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          ...ProjectFields
        }
      }
    }
  }
  ${q}
  ${at}
`,La=i.default`
  query getViewerStats {
    viewer {
      ...UserFields
      bio
      company
      location
      url
      websiteUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      pullRequestsAuthored: pullRequests {
        totalCount
      }
      pullRequestsMerged: pullRequests(states: [MERGED]) {
        totalCount
      }
      pullRequestsOpen: pullRequests(states: [OPEN]) {
        totalCount
      }
      issuesAuthored: issues {
        totalCount
      }
      issuesOpen: issues(states: [OPEN]) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      publicRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
      ownedRepositories: repositories(ownerAffiliations: OWNER) {
        totalCount
      }
    }
    rateLimit {
      remaining
      limit
      used
      resetAt
    }
  }
  ${q}
`,Va=i.default`
  query getViewerStatsDetails($repositoriesCount: Int = 100) {
    viewer {
      recentPullRequests: pullRequests(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenPullRequests: pullRequests(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      recentIssues: issues(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenIssues: issues(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      ownedRepositories: repositories(
        first: $repositoriesCount
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          nameWithOwner
          url
          stargazerCount
          forkCount
        }
      }
      organizations(first: 20) {
        nodes {
          id
          login
          name
          avatarUrl
          url
        }
      }
    }
  }
`,Na=(a,t,e,r)=>a();function ot(a,t=Na){return{createLinkedBranch(e,r,n){return t(o=>a.request({document:jt,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return t(o=>a.request({document:Ft,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return t(o=>a.request({document:kt,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return t(o=>a.request({document:zt,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return t(o=>a.request({document:Gt,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return t(o=>a.request({document:Ht,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return t(o=>a.request({document:Qt,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return t(o=>a.request({document:$t,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return t(o=>a.request({document:Wt,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return t(o=>a.request({document:Kt,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return t(o=>a.request({document:Yt,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return t(o=>a.request({document:Zt,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return t(o=>a.request({document:Jt,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return t(o=>a.request({document:Xt,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return t(o=>a.request({document:ea,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return t(o=>a.request({document:ta,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return t(o=>a.request({document:aa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return t(o=>a.request({document:ra,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return t(o=>a.request({document:na,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return t(o=>a.request({document:oa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return t(o=>a.request({document:ia,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return t(o=>a.request({document:ua,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return t(o=>a.request({document:sa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return t(o=>a.request({document:pa,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return t(o=>a.request({document:la,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return t(o=>a.request({document:ya,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return t(o=>a.request({document:ca,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return t(o=>a.request({document:Sa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return t(o=>a.request({document:da,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return t(o=>a.request({document:ba,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return t(o=>a.request({document:Ia,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return t(o=>a.request({document:Ma,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return t(o=>a.request({document:ga,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return t(o=>a.request({document:ma,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return t(o=>a.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return t(o=>a.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return t(o=>a.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return t(o=>a.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return t(o=>a.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return t(o=>a.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return t(o=>a.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return t(o=>a.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return t(o=>a.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return t(o=>a.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return t(o=>a.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return t(o=>a.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return t(o=>a.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return t(o=>a.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return t(o=>a.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return t(o=>a.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var xe=null,_e=null,lt=null,qa=(0,ut.getPreferenceValues)();function ja({token:a,type:t}){let e=t==="personal"?`token ${a}`:`bearer ${a}`;lt=a,xe=ot(new pt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),_e=new it.Octokit({auth:a,request:{fetch:ge}})}var yt=st.OAuthService.github({personalAccessToken:qa.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:ja});function ve(){if(!xe||!_e)throw new Error("GitHub clients not initialized");return{github:xe,octokit:_e,token:lt}}var ct=require("@raycast/utils");var he=(0,ct.withAccessToken)(yt);var Fa=he(async({pullRequestId:a})=>{let{github:t}=ve();return t.closePullRequest({nodeId:a})}),ka=he(async({pullRequestId:a})=>{let{github:t}=ve(),{node:e}=await t.pullRequestDetails({nodeId:a}),r=e;return{message:"Are you sure you want to close the PR?",info:[{name:"PR",value:`${r.repository.nameWithOwner}: ${r.title} #${r.number}`}]}});0&&(module.exports={confirmation});
