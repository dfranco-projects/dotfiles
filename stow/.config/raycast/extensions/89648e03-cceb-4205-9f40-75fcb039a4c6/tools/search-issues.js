"use strict";var Rt=Object.create;var se=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var Pt=Object.getOwnPropertyNames;var Et=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty;var Ae=(a,t,e)=>()=>{if(e)throw e[0];try{return a&&(t=a(a=0)),t}catch(r){throw e=[r],r}};var W=(a,t)=>{for(var e in t)se(a,e,{get:t[e],enumerable:!0})},ue=(a,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pt(t))!Ct.call(a,n)&&n!==e&&se(a,n,{get:()=>t[n],enumerable:!(r=At(t,n))||r.enumerable});return a},P=(a,t,e)=>(ue(a,t,"default"),e&&ue(e,t,"default")),h=(a,t,e)=>(e=a!=null?Rt(Et(a)):{},ue(t||!a||!a.__esModule?se(e,"default",{value:a,enumerable:!0}):e,a)),ft=a=>ue(se({},"__esModule",{value:!0}),a);var E={};W(E,{default:()=>he.default});var he,ce=Ae(()=>{P(E,require("formdata-polyfill/esm.min.js"));he=h(require("formdata-polyfill/esm.min.js"))});var D={};W(D,{default:()=>Oe.default});var Oe,Ee=Ae(()=>{P(D,require("fetch-blob/from.js"));Oe=h(require("fetch-blob/from.js"))});var Ve={};W(Ve,{toFormData:()=>Tt});function ht(a){let t=a.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let e=t[2]||t[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Tt(a,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let e=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ce(e[1]||e[2]),n,o,l,c,p,u,M=[],B=new E.FormData,v=S=>{l+=y.decode(S,{stream:!0})},O=S=>{M.push(S)},s=()=>{let S=new D.File(M,u,{type:p});B.append(c,S)},A=()=>{B.append(c,l)},y=new TextDecoder("utf-8");y.decode(),r.onPartBegin=function(){r.onPartData=v,r.onPartEnd=A,n="",o="",l="",c="",p="",u=null,M.length=0},r.onHeaderField=function(S){n+=y.decode(S,{stream:!0})},r.onHeaderValue=function(S){o+=y.decode(S,{stream:!0})},r.onHeaderEnd=function(){if(o+=y.decode(),n=n.toLowerCase(),n==="content-disposition"){let S=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);S&&(c=S[2]||S[3]||""),u=ht(o),u&&(r.onPartData=O,r.onPartEnd=s)}else n==="content-type"&&(p=o);o="",n=""};for await(let S of a)r.write(S);return r.end(),B}var V,b,Le,z,Se,de,Dt,te,xt,Ut,_t,vt,H,Ce,Ne=Ae(()=>{Ee();ce();V=0,b={START_BOUNDARY:V++,HEADER_FIELD_START:V++,HEADER_FIELD:V++,HEADER_VALUE_START:V++,HEADER_VALUE:V++,HEADER_VALUE_ALMOST_DONE:V++,HEADERS_ALMOST_DONE:V++,PART_DATA_START:V++,PART_DATA:V++,END:V++},Le=1,z={PART_BOUNDARY:Le,LAST_BOUNDARY:Le*=2},Se=10,de=13,Dt=32,te=45,xt=58,Ut=97,_t=122,vt=a=>a|32,H=()=>{},Ce=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=H,this.onHeaderField=H,this.onHeadersEnd=H,this.onHeaderValue=H,this.onPartBegin=H,this.onPartData=H,this.onPartEnd=H,this.boundaryChars={},t=`\r
--`+t;let e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=b.START_BOUNDARY}write(t){let e=0,r=t.length,n=this.index,{lookbehind:o,boundary:l,boundaryChars:c,index:p,state:u,flags:M}=this,B=this.boundary.length,v=B-1,O=t.length,s,A,y=d=>{this[d+"Mark"]=e},S=d=>{delete this[d+"Mark"]},m=(d,R,I,J)=>{(R===void 0||R!==I)&&this[d](J&&J.subarray(R,I))},k=(d,R)=>{let I=d+"Mark";I in this&&(R?(m(d,this[I],e,t),delete this[I]):(m(d,this[I],t.length,t),this[I]=0))};for(e=0;e<r;e++)switch(s=t[e],u){case b.START_BOUNDARY:if(p===l.length-2){if(s===te)M|=z.LAST_BOUNDARY;else if(s!==de)return;p++;break}else if(p-1===l.length-2){if(M&z.LAST_BOUNDARY&&s===te)u=b.END,M=0;else if(!(M&z.LAST_BOUNDARY)&&s===Se)p=0,m("onPartBegin"),u=b.HEADER_FIELD_START;else return;break}s!==l[p+2]&&(p=-2),s===l[p+2]&&p++;break;case b.HEADER_FIELD_START:u=b.HEADER_FIELD,y("onHeaderField"),p=0;case b.HEADER_FIELD:if(s===de){S("onHeaderField"),u=b.HEADERS_ALMOST_DONE;break}if(p++,s===te)break;if(s===xt){if(p===1)return;k("onHeaderField",!0),u=b.HEADER_VALUE_START;break}if(A=vt(s),A<Ut||A>_t)return;break;case b.HEADER_VALUE_START:if(s===Dt)break;y("onHeaderValue"),u=b.HEADER_VALUE;case b.HEADER_VALUE:s===de&&(k("onHeaderValue",!0),m("onHeaderEnd"),u=b.HEADER_VALUE_ALMOST_DONE);break;case b.HEADER_VALUE_ALMOST_DONE:if(s!==Se)return;u=b.HEADER_FIELD_START;break;case b.HEADERS_ALMOST_DONE:if(s!==Se)return;m("onHeadersEnd"),u=b.PART_DATA_START;break;case b.PART_DATA_START:u=b.PART_DATA,y("onPartData");case b.PART_DATA:if(n=p,p===0){for(e+=v;e<O&&!(t[e]in c);)e+=B;e-=v,s=t[e]}if(p<l.length)l[p]===s?(p===0&&k("onPartData",!0),p++):p=0;else if(p===l.length)p++,s===de?M|=z.PART_BOUNDARY:s===te?M|=z.LAST_BOUNDARY:p=0;else if(p-1===l.length)if(M&z.PART_BOUNDARY){if(p=0,s===Se){M&=~z.PART_BOUNDARY,m("onPartEnd"),m("onPartBegin"),u=b.HEADER_FIELD_START;break}}else M&z.LAST_BOUNDARY&&s===te?(m("onPartEnd"),u=b.END,M=0):p=0;if(p>0)o[p-1]=s;else if(n>0){let d=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);m("onPartData",0,n,d),n=0,y("onPartData"),e--}break;case b.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}k("onHeaderField"),k("onHeaderValue"),k("onPartData"),this.index=p,this.state=u,this.flags=M}end(){if(this.state===b.HEADER_FIELD_START&&this.index===0||this.state===b.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==b.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Za={};W(Za,{default:()=>Xa});module.exports=ft(Za);var ot=require("@octokit/rest"),it=require("@raycast/api"),ut=require("@raycast/utils"),st=require("graphql-request");var Ze=h(require("node:http"),1),et=h(require("node:https"),1),$=h(require("node:zlib"),1),_=h(require("node:stream"),1),ne=require("node:buffer");var X={};W(X,{default:()=>pe.default});P(X,require("data-uri-to-buffer"));var pe=h(require("data-uri-to-buffer"));var T=h(require("node:stream"),1),j=require("node:util"),x=require("node:buffer");var Z={};W(Z,{default:()=>le.default});P(Z,require("fetch-blob"));var le=h(require("fetch-blob"));ce();var F=class extends Error{constructor(t,e){super(t),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var C=class extends F{constructor(t,e,r){super(t,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var ye=Symbol.toStringTag,Pe=a=>typeof a=="object"&&typeof a.append=="function"&&typeof a.delete=="function"&&typeof a.get=="function"&&typeof a.getAll=="function"&&typeof a.has=="function"&&typeof a.set=="function"&&typeof a.sort=="function"&&a[ye]==="URLSearchParams",ee=a=>a&&typeof a=="object"&&typeof a.arrayBuffer=="function"&&typeof a.type=="string"&&typeof a.stream=="function"&&typeof a.constructor=="function"&&/^(Blob|File)$/.test(a[ye]),Te=a=>typeof a=="object"&&(a[ye]==="AbortSignal"||a[ye]==="EventTarget"),we=(a,t)=>{let e=new URL(t).hostname,r=new URL(a).hostname;return e===r||e.endsWith(`.${r}`)},Be=(a,t)=>{let e=new URL(t).protocol,r=new URL(a).protocol;return e===r};var wt=(0,j.promisify)(T.default.pipeline),f=Symbol("Body internals"),N=class{constructor(t,{size:e=0}={}){let r=null;t===null?t=null:Pe(t)?t=x.Buffer.from(t.toString()):ee(t)||x.Buffer.isBuffer(t)||(j.types.isAnyArrayBuffer(t)?t=x.Buffer.from(t):ArrayBuffer.isView(t)?t=x.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof T.default||(t instanceof E.FormData?(t=(0,E.formDataToBlob)(t),r=t.type.split("=")[1]):t=x.Buffer.from(String(t))));let n=t;x.Buffer.isBuffer(t)?n=T.default.Readable.from(t):ee(t)&&(n=T.default.Readable.from(t.stream())),this[f]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,t instanceof T.default&&t.on("error",o=>{let l=o instanceof F?o:new C(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[f].error=l})}get body(){return this[f].stream}get bodyUsed(){return this[f].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:e,byteLength:r}=await fe(this);return t.slice(e,e+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new E.FormData,n=new URLSearchParams(await this.text());for(let[o,l]of n)r.append(o,l);return r}let{toFormData:e}=await Promise.resolve().then(()=>(Ne(),Ve));return e(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[f].body&&this[f].body.type||"",e=await this.arrayBuffer();return new le.default([e],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await fe(this);return new TextDecoder().decode(t)}buffer(){return fe(this)}};N.prototype.buffer=(0,j.deprecate)(N.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(N.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,j.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function fe(a){if(a[f].disturbed)throw new TypeError(`body used already for: ${a.url}`);if(a[f].disturbed=!0,a[f].error)throw a[f].error;let{body:t}=a;if(t===null)return x.Buffer.alloc(0);if(!(t instanceof T.default))return x.Buffer.alloc(0);let e=[],r=0;try{for await(let n of t){if(a.size>0&&r+n.length>a.size){let o=new C(`content size at ${a.url} over limit: ${a.size}`,"max-size");throw t.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof F?n:new C(`Invalid response body while trying to fetch ${a.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?x.Buffer.from(e.join("")):x.Buffer.concat(e,r)}catch(n){throw new C(`Could not create Buffer from response body for ${a.url}: ${n.message}`,"system",n)}else throw new C(`Premature close of server response while trying to fetch ${a.url}`)}var K=(a,t)=>{let e,r,{body:n}=a[f];if(a.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof T.default&&typeof n.getBoundary!="function"&&(e=new T.PassThrough({highWaterMark:t}),r=new T.PassThrough({highWaterMark:t}),n.pipe(e),n.pipe(r),a[f].stream=e,n=r),n},Bt=(0,j.deprecate)(a=>a.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),be=(a,t)=>a===null?null:typeof a=="string"?"text/plain;charset=UTF-8":Pe(a)?"application/x-www-form-urlencoded;charset=UTF-8":ee(a)?a.type||null:x.Buffer.isBuffer(a)||j.types.isAnyArrayBuffer(a)||ArrayBuffer.isView(a)?null:a instanceof E.FormData?`multipart/form-data; boundary=${t[f].boundary}`:a&&typeof a.getBoundary=="function"?`multipart/form-data;boundary=${Bt(a)}`:a instanceof T.default?null:"text/plain;charset=UTF-8",qe=a=>{let{body:t}=a[f];return t===null?0:ee(t)?t.size:x.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Fe=async(a,{body:t})=>{t===null?a.end():await wt(t,a)};var De=require("node:util"),ae=h(require("node:http"),1),Ie=typeof ae.default.validateHeaderName=="function"?ae.default.validateHeaderName:a=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(a)){let t=new TypeError(`Header name must be a valid HTTP token [${a}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},xe=typeof ae.default.validateHeaderValue=="function"?ae.default.validateHeaderValue:(a,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let e=new TypeError(`Invalid character in header content ["${a}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},U=class a extends URLSearchParams{constructor(t){let e=[];if(t instanceof a){let r=t.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(l=>[n,l]))}else if(t!=null)if(typeof t=="object"&&!De.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)e.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...t].map(n=>{if(typeof n!="object"||De.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(Ie(r),xe(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(l,c)=>(Ie(l),xe(l,String(c)),URLSearchParams.prototype[n].call(r,String(l).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return l=>(Ie(l),URLSearchParams.prototype[n].call(r,String(l).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let e=this.getAll(t);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,e=void 0){for(let r of this.keys())Reflect.apply(t,e,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,e)=>(t[e]=this.getAll(e),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,e)=>{let r=this.getAll(e);return e==="host"?t[e]=r[0]:t[e]=r.length>1?r:r[0],t},{})}};Object.defineProperties(U.prototype,["get","entries","forEach","values"].reduce((a,t)=>(a[t]={enumerable:!0},a),{}));function je(a=[]){return new U(a.reduce((t,e,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,e])=>{try{return Ie(t),xe(t,String(e)),!0}catch{return!1}}))}var Ot=new Set([301,302,303,307,308]),Me=a=>Ot.has(a);var L=Symbol("Response internals"),w=class a extends N{constructor(t=null,e={}){super(t,e);let r=e.status!=null?e.status:200,n=new U(e.headers);if(t!==null&&!n.has("Content-Type")){let o=be(t,this);o&&n.append("Content-Type",o)}this[L]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[L].type}get url(){return this[L].url||""}get status(){return this[L].status}get ok(){return this[L].status>=200&&this[L].status<300}get redirected(){return this[L].counter>0}get statusText(){return this[L].statusText}get headers(){return this[L].headers}get highWaterMark(){return this[L].highWaterMark}clone(){return new a(K(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,e=302){if(!Me(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new a(null,{headers:{location:new URL(t).toString()},status:e})}static error(){let t=new a(null,{status:0,statusText:""});return t[L].type="error",t}static json(t=void 0,e={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new U(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new a(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(w.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ye=require("node:url"),Je=require("node:util");var ke=a=>{if(a.search)return a.search;let t=a.href.length-1,e=a.hash||(a.href[t]==="#"?"#":"");return a.href[t-e.length]==="?"?"?":""};var Ge=require("node:net");function ze(a,t=!1){return a==null||(a=new URL(a),/^(about|blob|data):$/.test(a.protocol))?"no-referrer":(a.username="",a.password="",a.hash="",t&&(a.pathname="",a.search=""),a)}var He=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Qe="strict-origin-when-cross-origin";function $e(a){if(!He.has(a))throw new TypeError(`Invalid referrerPolicy: ${a}`);return a}function Lt(a){if(/^(http|ws)s:$/.test(a.protocol))return!0;let t=a.host.replace(/(^\[)|(]$)/g,""),e=(0,Ge.isIP)(t);return e===4&&/^127\./.test(t)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:a.host==="localhost"||a.host.endsWith(".localhost")?!1:a.protocol==="file:"}function Y(a){return/^about:(blank|srcdoc)$/.test(a)||a.protocol==="data:"||/^(blob|filesystem):$/.test(a.protocol)?!0:Lt(a)}function We(a,{referrerURLCallback:t,referrerOriginCallback:e}={}){if(a.referrer==="no-referrer"||a.referrerPolicy==="")return null;let r=a.referrerPolicy;if(a.referrer==="about:client")return"no-referrer";let n=a.referrer,o=ze(n),l=ze(n,!0);o.toString().length>4096&&(o=l),t&&(o=t(o)),e&&(l=e(l));let c=new URL(a.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return Y(o)&&!Y(c)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:Y(o)&&!Y(c)?"no-referrer":l;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:l;case"no-referrer-when-downgrade":return Y(o)&&!Y(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Ke(a){let t=(a.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of t)r&&He.has(r)&&(e=r);return e}var g=Symbol("Request internals"),re=a=>typeof a=="object"&&typeof a[g]=="object",Vt=(0,Je.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Q=class a extends N{constructor(t,e={}){let r;if(re(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!re(e)&&"data"in e&&Vt(),(e.body!=null||re(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:re(t)&&t.body!==null?K(t):null;super(o,{size:e.size||t.size||0});let l=new U(e.headers||t.headers||{});if(o!==null&&!l.has("Content-Type")){let u=be(o,this);u&&l.set("Content-Type",u)}let c=re(t)?t.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!Te(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let p=e.referrer==null?t.referrer:e.referrer;if(p==="")p="no-referrer";else if(p){let u=new URL(p);p=/^about:(\/\/)?client$/.test(u)?"client":u}else p=void 0;this[g]={method:n,redirect:e.redirect||t.redirect||"follow",headers:l,parsedURL:r,signal:c,referrer:p},this.follow=e.follow===void 0?t.follow===void 0?20:t.follow:e.follow,this.compress=e.compress===void 0?t.compress===void 0?!0:t.compress:e.compress,this.counter=e.counter||t.counter||0,this.agent=e.agent||t.agent,this.highWaterMark=e.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||t.referrerPolicy||""}get method(){return this[g].method}get url(){return(0,Ye.format)(this[g].parsedURL)}get headers(){return this[g].headers}get redirect(){return this[g].redirect}get signal(){return this[g].signal}get referrer(){if(this[g].referrer==="no-referrer")return"";if(this[g].referrer==="client")return"about:client";if(this[g].referrer)return this[g].referrer.toString()}get referrerPolicy(){return this[g].referrerPolicy}set referrerPolicy(t){this[g].referrerPolicy=$e(t)}clone(){return new a(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Q.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Xe=a=>{let{parsedURL:t}=a[g],e=new U(a[g].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(a.body===null&&/^(post|put)$/i.test(a.method)&&(r="0"),a.body!==null){let c=qe(a);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),a.referrerPolicy===""&&(a.referrerPolicy=Qe),a.referrer&&a.referrer!=="no-referrer"?a[g].referrer=We(a):a[g].referrer="no-referrer",a[g].referrer instanceof URL&&e.set("Referer",a.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),a.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=a;typeof n=="function"&&(n=n(t));let o=ke(t),l={path:t.pathname+o,method:a.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:a.insecureHTTPParser,agent:n};return{parsedURL:t,options:l}};var ge=class extends F{constructor(t,e="aborted"){super(t,e)}};ce();Ee();var Nt=new Set(["data:","http:","https:"]);async function me(a,t){return new Promise((e,r)=>{let n=new Q(a,t),{parsedURL:o,options:l}=Xe(n);if(!Nt.has(o.protocol))throw new TypeError(`node-fetch cannot load ${a}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let s=(0,pe.default)(n.url),A=new w(s,{headers:{"Content-Type":s.typeFull}});e(A);return}let c=(o.protocol==="https:"?et.default:Ze.default).request,{signal:p}=n,u=null,M=()=>{let s=new ge("The operation was aborted.");r(s),n.body&&n.body instanceof _.default.Readable&&n.body.destroy(s),!(!u||!u.body)&&u.body.emit("error",s)};if(p&&p.aborted){M();return}let B=()=>{M(),O()},v=c(o.toString(),l);p&&p.addEventListener("abort",B);let O=()=>{v.abort(),p&&p.removeEventListener("abort",B)};v.on("error",s=>{r(new C(`request to ${n.url} failed, reason: ${s.message}`,"system",s)),O()}),qt(v,s=>{u&&u.body&&u.body.destroy(s)}),process.version<"v14"&&v.on("socket",s=>{let A;s.prependListener("end",()=>{A=s._eventsCount}),s.prependListener("close",y=>{if(u&&A<s._eventsCount&&!y){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",S)}})}),v.on("response",s=>{v.setTimeout(0);let A=je(s.rawHeaders);if(Me(s.statusCode)){let d=A.get("Location"),R=null;try{R=d===null?null:new URL(d,n.url)}catch{if(n.redirect!=="manual"){r(new C(`uri requested responds with an invalid redirect URL: ${d}`,"invalid-redirect")),O();return}}switch(n.redirect){case"error":r(new C(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),O();return;case"manual":break;case"follow":{if(R===null)break;if(n.counter>=n.follow){r(new C(`maximum redirect reached at: ${n.url}`,"max-redirect")),O();return}let I={headers:new U(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:K(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!we(n.url,R)||!Be(n.url,R))for(let mt of["authorization","www-authenticate","cookie","cookie2"])I.headers.delete(mt);if(s.statusCode!==303&&n.body&&t.body instanceof _.default.Readable){r(new C("Cannot follow redirect with body being a readable stream","unsupported-redirect")),O();return}(s.statusCode===303||(s.statusCode===301||s.statusCode===302)&&n.method==="POST")&&(I.method="GET",I.body=void 0,I.headers.delete("content-length"));let J=Ke(A);J&&(I.referrerPolicy=J),e(me(new Q(R,I))),O();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}p&&s.once("end",()=>{p.removeEventListener("abort",B)});let y=(0,_.pipeline)(s,new _.PassThrough,d=>{d&&r(d)});process.version<"v12.10"&&s.on("aborted",B);let S={url:n.url,status:s.statusCode,statusText:s.statusMessage,headers:A,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},m=A.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||m===null||s.statusCode===204||s.statusCode===304){u=new w(y,S),e(u);return}let k={flush:$.default.Z_SYNC_FLUSH,finishFlush:$.default.Z_SYNC_FLUSH};if(m==="gzip"||m==="x-gzip"){y=(0,_.pipeline)(y,$.default.createGunzip(k),d=>{d&&r(d)}),u=new w(y,S),e(u);return}if(m==="deflate"||m==="x-deflate"){let d=(0,_.pipeline)(s,new _.PassThrough,R=>{R&&r(R)});d.once("data",R=>{(R[0]&15)===8?y=(0,_.pipeline)(y,$.default.createInflate(),I=>{I&&r(I)}):y=(0,_.pipeline)(y,$.default.createInflateRaw(),I=>{I&&r(I)}),u=new w(y,S),e(u)}),d.once("end",()=>{u||(u=new w(y,S),e(u))});return}if(m==="br"){y=(0,_.pipeline)(y,$.default.createBrotliDecompress(),d=>{d&&r(d)}),u=new w(y,S),e(u);return}u=new w(y,S),e(u)}),Fe(v,n).catch(r)})}function qt(a,t){let e=ne.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;a.on("response",l=>{let{headers:c}=l;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),a.on("socket",l=>{let c=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",t(u)}},p=u=>{n=ne.Buffer.compare(u.slice(-5),e)===0,!n&&o&&(n=ne.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&ne.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};l.prependListener("close",c),l.on("data",p),a.on("close",()=>{l.removeListener("close",c),l.removeListener("data",p)})})}var i=h(require("graphql-tag")),oe=i.default`
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
`,Ft=i.default`
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
  ${oe}
`,q=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ie=i.default`
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
`,Re=i.default`
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
  ${ie}
  ${oe}
  ${q}
`,jt=i.default`
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
  ${ie}
  ${oe}
  ${q}
`,kt=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,tt=i.default`
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
  ${ie}
  ${kt}
`,at=i.default`
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
  ${oe}
  ${ie}
  ${q}
`,zt=i.default`
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
  ${oe}
  ${ie}
  ${q}
`,Gt=i.default`
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
`,rt=i.default`
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
`,Ht=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Qt=i.default`
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
`,$t=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Wt=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Kt=i.default`
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
  ${Ft}
`,Yt=i.default`
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
`,Jt=i.default`
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
`,Xt=i.default`
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
`,Zt=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${jt}
`,ea=i.default`
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
  ${Re}
`,ta=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Re}
`,aa=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ra=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,na=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,oa=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ia=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ua=i.default`
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
  ${Re}
`,sa=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,pa=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${tt}
`,la=i.default`
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
  ${at}
`,ca=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${zt}
`,ya=i.default`
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
`,Sa=i.default`
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
`,da=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Gt}
`,ba=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ia=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ma=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ga=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,ma=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ra=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Aa=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Pa=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ea=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Ca=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,fa=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Da=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,xa=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ua=i.default`
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
`,_a=i.default`
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
  ${at}
`,va=i.default`
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
`,ha=i.default`
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
`,Ta=i.default`
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
`,wa=i.default`
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
`,Ba=i.default`
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
  ${rt}
  ${q}
`,Oa=i.default`
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
  ${rt}
`,La=i.default`
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
  ${Re}
`,Va=i.default`
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
  ${Ht}
`,Na=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,qa=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Fa=i.default`
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
`,ja=i.default`
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
  ${tt}
`,ka=i.default`
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
`,za=i.default`
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
`,Ga=(a,t,e,r)=>a();function nt(a,t=Ga){return{createLinkedBranch(e,r,n){return t(o=>a.request({document:Qt,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return t(o=>a.request({document:$t,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return t(o=>a.request({document:Wt,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return t(o=>a.request({document:Kt,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return t(o=>a.request({document:Yt,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return t(o=>a.request({document:Jt,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return t(o=>a.request({document:Xt,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return t(o=>a.request({document:Zt,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return t(o=>a.request({document:ea,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return t(o=>a.request({document:ta,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return t(o=>a.request({document:aa,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return t(o=>a.request({document:ra,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return t(o=>a.request({document:na,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return t(o=>a.request({document:oa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return t(o=>a.request({document:ia,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return t(o=>a.request({document:ua,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return t(o=>a.request({document:sa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return t(o=>a.request({document:pa,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return t(o=>a.request({document:la,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return t(o=>a.request({document:ca,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return t(o=>a.request({document:ya,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return t(o=>a.request({document:Sa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return t(o=>a.request({document:da,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return t(o=>a.request({document:ba,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return t(o=>a.request({document:Ia,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return t(o=>a.request({document:Ma,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return t(o=>a.request({document:ga,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return t(o=>a.request({document:ma,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return t(o=>a.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return t(o=>a.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return t(o=>a.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return t(o=>a.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return t(o=>a.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return t(o=>a.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return t(o=>a.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return t(o=>a.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return t(o=>a.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return t(o=>a.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return t(o=>a.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return t(o=>a.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return t(o=>a.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return t(o=>a.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return t(o=>a.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return t(o=>a.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return t(o=>a.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return t(o=>a.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return t(o=>a.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return t(o=>a.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return t(o=>a.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return t(o=>a.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var _e=null,ve=null,pt=null,Ha=(0,it.getPreferenceValues)();function Qa({token:a,type:t}){let e=t==="personal"?`token ${a}`:`bearer ${a}`;pt=a,_e=nt(new st.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),ve=new ot.Octokit({auth:a,request:{fetch:me}})}var lt=ut.OAuthService.github({personalAccessToken:Ha.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Qa});function ct(){if(!_e||!ve)throw new Error("GitHub clients not initialized");return{github:_e,octokit:ve,token:pt}}var G=require("@raycast/api"),$a=h(require("react")),St=require("react/jsx-runtime");function yt(a){let t=a.min||1,e=a.max||100,r=a.default||10,o=(0,G.getPreferenceValues)()[a.name]||"",l=Number(o);return isNaN(l)||l<t||l>e?r:l}var Wa=require("@raycast/api");var dt=require("@raycast/api");var Ka=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Ya=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,Ja=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function bt(a,t){let e=a.match(Ya);if(e)return{owner:e[1],name:e[2],issueNumber:Number.parseInt(e[3],10)};let r=a.match(Ka),n=t?.replace(/^repo:/,""),o=r?`${r[1]}/${r[2]}`:n?.includes("/")?n:null;if(!o)return null;let c=a.replace(Ja," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??a.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!c)return null;let[p,u]=o.split("/");return!p||!u?null:{owner:p,name:u,issueNumber:Number.parseInt(c[1],10)}}function It(a){return a.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var Mt=require("@raycast/utils");var gt=(0,Mt.withAccessToken)(lt);var Xa=gt(async({query:a})=>{let{github:t}=ct(),e=bt(a);if(e)try{let n=await t.issueByNumber(e);if(n.repository?.issue)return[n.repository.issue]}catch{}return(await t.searchIssues({numberOfItems:yt({name:"numberOfResults",default:25}),query:`is:issue archived:false ${It(a)}`})).search.nodes});
