"use strict";var $n=Object.create;var Lt=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty;var la=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var nt=(e,a)=>{for(var t in a)Lt(e,t,{get:a[t],enumerable:!0})},Bt=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Wn(a))!Yn.call(e,r)&&r!==t&&Lt(e,r,{get:()=>a[r],enumerable:!(n=Qn(a,r))||n.enumerable});return e},ae=(e,a,t)=>(Bt(e,a,"default"),t&&Bt(t,a,"default")),Z=(e,a,t)=>(t=e!=null?$n(Kn(e)):{},Bt(a||!e||!e.__esModule?Lt(t,"default",{value:e,enumerable:!0}):t,e)),Xn=e=>Bt(Lt({},"__esModule",{value:!0}),e);var re={};nt(re,{default:()=>Qa.default});var Qa,Vt=la(()=>{ae(re,require("formdata-polyfill/esm.min.js"));Qa=Z(require("formdata-polyfill/esm.min.js"))});var ue={};nt(ue,{default:()=>Xa.default});var Xa,ya=la(()=>{ae(ue,require("fetch-blob/from.js"));Xa=Z(require("fetch-blob/from.js"))});var Ja={};nt(Ja,{toFormData:()=>no});function ro(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function no(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new da(t[1]||t[2]),r,o,l,s,i,u,c=[],y=new re.FormData,I=g=>{l+=R.decode(g,{stream:!0})},M=g=>{c.push(g)},S=()=>{let g=new ue.File(c,u,{type:i});y.append(s,g)},C=()=>{y.append(s,l)},R=new TextDecoder("utf-8");R.decode(),n.onPartBegin=function(){n.onPartData=I,n.onPartEnd=C,r="",o="",l="",s="",i="",u=null,c.length=0},n.onHeaderField=function(g){r+=R.decode(g,{stream:!0})},n.onHeaderValue=function(g){o+=R.decode(g,{stream:!0})},n.onHeaderEnd=function(){if(o+=R.decode(),r=r.toLowerCase(),r==="content-disposition"){let g=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);g&&(s=g[2]||g[3]||""),u=ro(o),u&&(n.onPartData=M,n.onPartEnd=S)}else r==="content-type"&&(i=o);o="",r=""};for await(let g of e)n.write(g);return n.end(),y}var Ce,B,Za,Ge,Ft,kt,Zn,gt,Jn,eo,to,ao,Ke,da,er=la(()=>{ya();Vt();Ce=0,B={START_BOUNDARY:Ce++,HEADER_FIELD_START:Ce++,HEADER_FIELD:Ce++,HEADER_VALUE_START:Ce++,HEADER_VALUE:Ce++,HEADER_VALUE_ALMOST_DONE:Ce++,HEADERS_ALMOST_DONE:Ce++,PART_DATA_START:Ce++,PART_DATA:Ce++,END:Ce++},Za=1,Ge={PART_BOUNDARY:Za,LAST_BOUNDARY:Za*=2},Ft=10,kt=13,Zn=32,gt=45,Jn=58,eo=97,to=122,ao=e=>e|32,Ke=()=>{},da=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=Ke,this.onHeaderField=Ke,this.onHeadersEnd=Ke,this.onHeaderValue=Ke,this.onPartBegin=Ke,this.onPartData=Ke,this.onPartEnd=Ke,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=B.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:s,index:i,state:u,flags:c}=this,y=this.boundary.length,I=y-1,M=a.length,S,C,R=f=>{this[f+"Mark"]=t},g=f=>{delete this[f+"Mark"]},P=(f,D,T,X)=>{(D===void 0||D!==T)&&this[f](X&&X.subarray(D,T))},E=(f,D)=>{let T=f+"Mark";T in this&&(D?(P(f,this[T],t,a),delete this[T]):(P(f,this[T],a.length,a),this[T]=0))};for(t=0;t<n;t++)switch(S=a[t],u){case B.START_BOUNDARY:if(i===l.length-2){if(S===gt)c|=Ge.LAST_BOUNDARY;else if(S!==kt)return;i++;break}else if(i-1===l.length-2){if(c&Ge.LAST_BOUNDARY&&S===gt)u=B.END,c=0;else if(!(c&Ge.LAST_BOUNDARY)&&S===Ft)i=0,P("onPartBegin"),u=B.HEADER_FIELD_START;else return;break}S!==l[i+2]&&(i=-2),S===l[i+2]&&i++;break;case B.HEADER_FIELD_START:u=B.HEADER_FIELD,R("onHeaderField"),i=0;case B.HEADER_FIELD:if(S===kt){g("onHeaderField"),u=B.HEADERS_ALMOST_DONE;break}if(i++,S===gt)break;if(S===Jn){if(i===1)return;E("onHeaderField",!0),u=B.HEADER_VALUE_START;break}if(C=ao(S),C<eo||C>to)return;break;case B.HEADER_VALUE_START:if(S===Zn)break;R("onHeaderValue"),u=B.HEADER_VALUE;case B.HEADER_VALUE:S===kt&&(E("onHeaderValue",!0),P("onHeaderEnd"),u=B.HEADER_VALUE_ALMOST_DONE);break;case B.HEADER_VALUE_ALMOST_DONE:if(S!==Ft)return;u=B.HEADER_FIELD_START;break;case B.HEADERS_ALMOST_DONE:if(S!==Ft)return;P("onHeadersEnd"),u=B.PART_DATA_START;break;case B.PART_DATA_START:u=B.PART_DATA,R("onPartData");case B.PART_DATA:if(r=i,i===0){for(t+=I;t<M&&!(a[t]in s);)t+=y;t-=I,S=a[t]}if(i<l.length)l[i]===S?(i===0&&E("onPartData",!0),i++):i=0;else if(i===l.length)i++,S===kt?c|=Ge.PART_BOUNDARY:S===gt?c|=Ge.LAST_BOUNDARY:i=0;else if(i-1===l.length)if(c&Ge.PART_BOUNDARY){if(i=0,S===Ft){c&=~Ge.PART_BOUNDARY,P("onPartEnd"),P("onPartBegin"),u=B.HEADER_FIELD_START;break}}else c&Ge.LAST_BOUNDARY&&S===gt?(P("onPartEnd"),u=B.END,c=0):i=0;if(i>0)o[i-1]=S;else if(r>0){let f=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);P("onPartData",0,r,f),r=0,R("onPartData"),t--}break;case B.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}E("onHeaderField"),E("onHeaderValue"),E("onPartData"),this.index=i,this.state=u,this.flags=c}end(){if(this.state===B.HEADER_FIELD_START&&this.index===0||this.state===B.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==B.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var os={};nt(os,{default:()=>ns});module.exports=Xn(os);var dt=require("@raycast/api"),pa=require("@raycast/utils"),Re=require("react");var Ar=require("@octokit/rest"),Pr=require("@raycast/api"),Er=require("@raycast/utils"),fr=require("graphql-request");var br=Z(require("node:http"),1),Ir=Z(require("node:https"),1),Xe=Z(require("node:zlib"),1),ce=Z(require("node:stream"),1),Rt=require("node:buffer");var St={};nt(St,{default:()=>Ot.default});ae(St,require("data-uri-to-buffer"));var Ot=Z(require("data-uri-to-buffer"));var Se=Z(require("node:stream"),1),Ve=require("node:util"),pe=require("node:buffer");var bt={};nt(bt,{default:()=>Nt.default});ae(bt,require("fetch-blob"));var Nt=Z(require("fetch-blob"));Vt();var Ne=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var ne=class extends Ne{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var qt=Symbol.toStringTag,ca=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[qt]==="URLSearchParams",It=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[qt]),Wa=e=>typeof e=="object"&&(e[qt]==="AbortSignal"||e[qt]==="EventTarget"),Ka=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},Ya=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var oo=(0,Ve.promisify)(Se.default.pipeline),oe=Symbol("Body internals"),De=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:ca(a)?a=pe.Buffer.from(a.toString()):It(a)||pe.Buffer.isBuffer(a)||(Ve.types.isAnyArrayBuffer(a)?a=pe.Buffer.from(a):ArrayBuffer.isView(a)?a=pe.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof Se.default||(a instanceof re.FormData?(a=(0,re.formDataToBlob)(a),n=a.type.split("=")[1]):a=pe.Buffer.from(String(a))));let r=a;pe.Buffer.isBuffer(a)?r=Se.default.Readable.from(a):It(a)&&(r=Se.default.Readable.from(a.stream())),this[oe]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof Se.default&&a.on("error",o=>{let l=o instanceof Ne?o:new ne(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[oe].error=l})}get body(){return this[oe].stream}get bodyUsed(){return this[oe].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await Sa(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new re.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:t}=await Promise.resolve().then(()=>(er(),Ja));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[oe].body&&this[oe].body.type||"",t=await this.arrayBuffer();return new Nt.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Sa(this);return new TextDecoder().decode(a)}buffer(){return Sa(this)}};De.prototype.buffer=(0,Ve.deprecate)(De.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(De.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ve.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Sa(e){if(e[oe].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[oe].disturbed=!0,e[oe].error)throw e[oe].error;let{body:a}=e;if(a===null)return pe.Buffer.alloc(0);if(!(a instanceof Se.default))return pe.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new ne(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof Ne?r:new ne(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?pe.Buffer.from(t.join("")):pe.Buffer.concat(t,n)}catch(r){throw new ne(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new ne(`Premature close of server response while trying to fetch ${e.url}`)}var ot=(e,a)=>{let t,n,{body:r}=e[oe];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof Se.default&&typeof r.getBoundary!="function"&&(t=new Se.PassThrough({highWaterMark:a}),n=new Se.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[oe].stream=t,r=n),r},io=(0,Ve.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),jt=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":ca(e)?"application/x-www-form-urlencoded;charset=UTF-8":It(e)?e.type||null:pe.Buffer.isBuffer(e)||Ve.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof re.FormData?`multipart/form-data; boundary=${a[oe].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${io(e)}`:e instanceof Se.default?null:"text/plain;charset=UTF-8",tr=e=>{let{body:a}=e[oe];return a===null?0:It(a)?a.size:pe.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},ar=async(e,{body:a})=>{a===null?e.end():await oo(a,e)};var ba=require("node:util"),Mt=Z(require("node:http"),1),zt=typeof Mt.default.validateHeaderName=="function"?Mt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Ia=typeof Mt.default.validateHeaderValue=="function"?Mt.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},le=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!ba.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||ba.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(zt(n),Ia(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,s)=>(zt(l),Ia(l,String(s)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return l=>(zt(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(le.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function rr(e=[]){return new le(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return zt(a),Ia(a,String(t)),!0}catch{return!1}}))}var so=new Set([301,302,303,307,308]),Gt=e=>so.has(e);var Pe=Symbol("Response internals"),be=class e extends De{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new le(t.headers);if(a!==null&&!r.has("Content-Type")){let o=jt(a,this);o&&r.append("Content-Type",o)}this[Pe]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[Pe].type}get url(){return this[Pe].url||""}get status(){return this[Pe].status}get ok(){return this[Pe].status>=200&&this[Pe].status<300}get redirected(){return this[Pe].counter>0}get statusText(){return this[Pe].statusText}get headers(){return this[Pe].headers}get highWaterMark(){return this[Pe].highWaterMark}clone(){return new e(ot(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!Gt(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[Pe].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new le(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(be.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var yr=require("node:url"),dr=require("node:util");var nr=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var ir=require("node:net");function or(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var sr=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ur="strict-origin-when-cross-origin";function pr(e){if(!sr.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function uo(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,ir.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function it(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:uo(e)}function lr(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=or(r),l=or(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),t&&(l=t(l));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return it(o)&&!it(s)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:it(o)&&!it(s)?"no-referrer":l;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:l;case"no-referrer-when-downgrade":return it(o)&&!it(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function cr(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&sr.has(n)&&(t=n);return t}var z=Symbol("Request internals"),mt=e=>typeof e=="object"&&typeof e[z]=="object",po=(0,dr.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ye=class e extends De{constructor(a,t={}){let n;if(mt(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!mt(t)&&"data"in t&&po(),(t.body!=null||mt(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:mt(a)&&a.body!==null?ot(a):null;super(o,{size:t.size||a.size||0});let l=new le(t.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let u=jt(o,this);u&&l.set("Content-Type",u)}let s=mt(a)?a.signal:null;if("signal"in t&&(s=t.signal),s!=null&&!Wa(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=t.referrer==null?a.referrer:t.referrer;if(i==="")i="no-referrer";else if(i){let u=new URL(i);i=/^about:(\/\/)?client$/.test(u)?"client":u}else i=void 0;this[z]={method:r,redirect:t.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:s,referrer:i},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[z].method}get url(){return(0,yr.format)(this[z].parsedURL)}get headers(){return this[z].headers}get redirect(){return this[z].redirect}get signal(){return this[z].signal}get referrer(){if(this[z].referrer==="no-referrer")return"";if(this[z].referrer==="client")return"about:client";if(this[z].referrer)return this[z].referrer.toString()}get referrerPolicy(){return this[z].referrerPolicy}set referrerPolicy(a){this[z].referrerPolicy=pr(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ye.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Sr=e=>{let{parsedURL:a}=e[z],t=new le(e[z].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=tr(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=ur),e.referrer&&e.referrer!=="no-referrer"?e[z].referrer=lr(e):e[z].referrer="no-referrer",e[z].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=nr(a),l={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var Ht=class extends Ne{constructor(a,t="aborted"){super(a,t)}};Vt();ya();var lo=new Set(["data:","http:","https:"]);async function $t(e,a){return new Promise((t,n)=>{let r=new Ye(e,a),{parsedURL:o,options:l}=Sr(r);if(!lo.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let S=(0,Ot.default)(r.url),C=new be(S,{headers:{"Content-Type":S.typeFull}});t(C);return}let s=(o.protocol==="https:"?Ir.default:br.default).request,{signal:i}=r,u=null,c=()=>{let S=new Ht("The operation was aborted.");n(S),r.body&&r.body instanceof ce.default.Readable&&r.body.destroy(S),!(!u||!u.body)&&u.body.emit("error",S)};if(i&&i.aborted){c();return}let y=()=>{c(),M()},I=s(o.toString(),l);i&&i.addEventListener("abort",y);let M=()=>{I.abort(),i&&i.removeEventListener("abort",y)};I.on("error",S=>{n(new ne(`request to ${r.url} failed, reason: ${S.message}`,"system",S)),M()}),co(I,S=>{u&&u.body&&u.body.destroy(S)}),process.version<"v14"&&I.on("socket",S=>{let C;S.prependListener("end",()=>{C=S._eventsCount}),S.prependListener("close",R=>{if(u&&C<S._eventsCount&&!R){let g=new Error("Premature close");g.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",g)}})}),I.on("response",S=>{I.setTimeout(0);let C=rr(S.rawHeaders);if(Gt(S.statusCode)){let f=C.get("Location"),D=null;try{D=f===null?null:new URL(f,r.url)}catch{if(r.redirect!=="manual"){n(new ne(`uri requested responds with an invalid redirect URL: ${f}`,"invalid-redirect")),M();return}}switch(r.redirect){case"error":n(new ne(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),M();return;case"manual":break;case"follow":{if(D===null)break;if(r.counter>=r.follow){n(new ne(`maximum redirect reached at: ${r.url}`,"max-redirect")),M();return}let T={headers:new le(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:ot(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Ka(r.url,D)||!Ya(r.url,D))for(let Le of["authorization","www-authenticate","cookie","cookie2"])T.headers.delete(Le);if(S.statusCode!==303&&r.body&&a.body instanceof ce.default.Readable){n(new ne("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(S.statusCode===303||(S.statusCode===301||S.statusCode===302)&&r.method==="POST")&&(T.method="GET",T.body=void 0,T.headers.delete("content-length"));let X=cr(C);X&&(T.referrerPolicy=X),t($t(new Ye(D,T))),M();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&S.once("end",()=>{i.removeEventListener("abort",y)});let R=(0,ce.pipeline)(S,new ce.PassThrough,f=>{f&&n(f)});process.version<"v12.10"&&S.on("aborted",y);let g={url:r.url,status:S.statusCode,statusText:S.statusMessage,headers:C,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},P=C.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||P===null||S.statusCode===204||S.statusCode===304){u=new be(R,g),t(u);return}let E={flush:Xe.default.Z_SYNC_FLUSH,finishFlush:Xe.default.Z_SYNC_FLUSH};if(P==="gzip"||P==="x-gzip"){R=(0,ce.pipeline)(R,Xe.default.createGunzip(E),f=>{f&&n(f)}),u=new be(R,g),t(u);return}if(P==="deflate"||P==="x-deflate"){let f=(0,ce.pipeline)(S,new ce.PassThrough,D=>{D&&n(D)});f.once("data",D=>{(D[0]&15)===8?R=(0,ce.pipeline)(R,Xe.default.createInflate(),T=>{T&&n(T)}):R=(0,ce.pipeline)(R,Xe.default.createInflateRaw(),T=>{T&&n(T)}),u=new be(R,g),t(u)}),f.once("end",()=>{u||(u=new be(R,g),t(u))});return}if(P==="br"){R=(0,ce.pipeline)(R,Xe.default.createBrotliDecompress(),f=>{f&&n(f)}),u=new be(R,g),t(u);return}u=new be(R,g),t(u)}),ar(I,r).catch(n)})}function co(e,a){let t=Rt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",l=>{let{headers:s}=l;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",l=>{let s=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},i=u=>{r=Rt.Buffer.compare(u.slice(-5),t)===0,!r&&o&&(r=Rt.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&Rt.Buffer.compare(u.slice(-2),t.slice(3))===0),o=u};l.prependListener("close",s),l.on("data",i),e.on("close",()=>{l.removeListener("close",s),l.removeListener("data",i)})})}var m=Z(require("graphql-tag")),At=m.default`
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
`,yo=m.default`
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
  ${At}
`,he=m.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Pt=m.default`
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
  ${he}
`,Qt=m.default`
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
  ${Pt}
  ${At}
  ${he}
`,So=m.default`
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
  ${Pt}
  ${At}
  ${he}
`,bo=m.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,gr=m.default`
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
  ${Pt}
  ${bo}
`,Mr=m.default`
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
  ${At}
  ${Pt}
  ${he}
`,Io=m.default`
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
  ${At}
  ${Pt}
  ${he}
`,go=m.default`
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
`,mr=m.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,ga=m.default`
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
`,Mo=m.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,mo=m.default`
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
`,Ro=m.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ao=m.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Po=m.default`
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
  ${yo}
`,Eo=m.default`
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
`,fo=m.default`
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
  ${he}
`,Co=m.default`
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
`,Do=m.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${So}
`,ho=m.default`
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
  ${Qt}
`,xo=m.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Qt}
`,Uo=m.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,vo=m.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,_o=m.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,To=m.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,wo=m.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Bo=m.default`
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
  ${Qt}
`,Lo=m.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Oo=m.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${gr}
`,No=m.default`
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
  ${Mr}
`,Vo=m.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Io}
`,qo=m.default`
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
  ${he}
`,Fo=m.default`
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
`,ko=m.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${go}
`,jo=m.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,zo=m.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Go=m.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ho=m.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,$o=m.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Qo=m.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Wo=m.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ko=m.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Yo=m.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Xo=m.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Zo=m.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Jo=m.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,ei=m.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ti=m.default`
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
`,ai=m.default`
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
  ${Mr}
`,ri=m.default`
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
  ${ga}
`,ni=m.default`
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
  ${ga}
`,oi=m.default`
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
`,ii=m.default`
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
`,si=m.default`
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
  ${mr}
  ${he}
`,ui=m.default`
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
  ${mr}
`,pi=m.default`
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
  ${Qt}
`,li=m.default`
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
  ${Mo}
`,ci=m.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,yi=m.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,di=m.default`
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
  ${ga}
`,Si=m.default`
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
  ${he}
  ${gr}
`,bi=m.default`
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
  ${he}
`,Ii=m.default`
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
`,gi=(e,a,t,n)=>e();function Rr(e,a=gi){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:mo,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:Ro,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:Ao,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:Po,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:Eo,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:fo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:Co,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:Do,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:ho,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:xo,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:Uo,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:vo,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:_o,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:To,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:wo,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:Bo,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:Lo,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:Oo,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:No,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:Vo,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:qo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:Fo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:ko,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:jo,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:zo,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:Go,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:Ho,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:$o,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:Qo,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Wo,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:Ko,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Yo,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:Xo,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:Zo,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:Jo,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:ei,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:ti,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:ai,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:ri,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:ni,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:oi,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:ii,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:si,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:ui,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:pi,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:li,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:ci,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:yi,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:di,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:Si,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:bi,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:Ii,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var Ma=null,ma=null,Cr=null,Mi=(0,Pr.getPreferenceValues)();function mi({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Cr=e,Ma=Rr(new fr.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),ma=new Ar.Octokit({auth:e,request:{fetch:$t}})}var Dr=Er.OAuthService.github({personalAccessToken:Mi.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:mi});function h(){if(!Ma||!ma)throw new Error("GitHub clients not initialized");return{github:Ma,octokit:ma,token:Cr}}var He=require("@raycast/api"),Ri=Z(require("react")),xr=require("react/jsx-runtime");function Ai(e){let a=e.min||1,t=e.max||100,n=e.default||10,o=(0,He.getPreferenceValues)()[e.name]||"",l=Number(o);return isNaN(l)||l<a||l>t?n:l}function hr(){return Math.min(Ai({name:"numberOfResults",default:50}),25)}var Ze=require("@raycast/api"),vr=require("lodash"),_r=require("react");function v(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Et=require("react/jsx-runtime"),Ur=["apollo-11","rails","gridsome","youtube-dl","iterm2","vscode","textmate","swift","tensorflow","grdb"];function Ra({searchText:e,isLoading:a,error:t}){let n=(0,_r.useMemo)(()=>Ur[(0,vr.random)(0,Ur.length-1)],[]);return t?(0,Et.jsx)(Ze.List.EmptyView,{icon:Ze.Icon.Warning,title:"Failed to Load Repositories",description:v(t)}):e.length>0&&a?(0,Et.jsx)(Ze.List.EmptyView,{title:"Searching repositories..."}):e.length>0&&!a?(0,Et.jsx)(Ze.List.EmptyView,{title:"No repositories found"}):(0,Et.jsx)(Ze.List.EmptyView,{title:`Type query e.g "${n}"`})}var at=require("@raycast/api"),Qe=require("date-fns");var ft=require("@raycast/api");function F(e){return e?{icon:{source:e.avatarUrl??ft.Icon.Person,mask:ft.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:ft.Icon.Person,text:"Unknown"}}var b=require("@raycast/api"),Fn=require("@raycast/utils");var st=require("node:child_process"),Br=require("node:fs"),Lr=require("node:os"),Or=require("node:util"),G=require("@raycast/api"),Nr=require("@raycast/utils");function Aa(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(t=>!!t).map(t=>`org:${t}`)].join(" ")}function Tr(e,a){let t=(a??"").split(/\s+/).map(r=>/^(?:user|org):(.+)$/i.exec(r)?.[1]?.toLowerCase()).filter(r=>!!r);if(t.length===0)return!0;let n=e.split("/")[0]?.toLowerCase();return t.includes(n)}var Vr=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:G.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:G.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:G.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:G.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:G.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:G.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:G.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:G.Color.PrimaryText}}],Pi=25;async function qr(e){let{application:a,baseClonePath:t,repositoryCloneProtocol:n}=(0,G.getPreferenceValues)(),r=a?.path.replaceAll(" ","\\ "),o=`${t}/${e.name}`,l=`open -a ${r} ${o}`,s=await(0,G.showToast)({title:`Opening ${e.name}`,message:`at ${o}`,style:G.Toast.Style.Animated});if(!(0,Br.existsSync)(o.replace("~",(0,Lr.homedir)())))try{(0,st.execFileSync)("git",Dt(e.nameWithOwner,n),{cwd:t})}catch(i){s.style=G.Toast.Style.Failure,s.title="Error while cloning the repository",s.message=v(i),console.error(i);return}try{(0,st.execSync)(l,{cwd:t})}catch(i){s.style=G.Toast.Style.Failure,s.title="Error while opening the repository",s.message=v(i),console.error(i);return}s.title="Code editor launched!",s.style=G.Toast.Style.Success}function Fr(e,a){let[t,n]=(0,Nr.useCachedState)("history",[]);function r(i){let u=[i,...t?.filter(c=>c.id!==i.id)??[]].slice(0,Pi);n(u)}function o(i){n(u=>(u??[]).map(c=>c.id===i.id?{...c,viewerHasStarred:i.viewerHasStarred,stargazerCount:i.stargazerCount}:c))}function l(i){n(u=>(u??[]).filter(c=>c.id!==i.id))}let s=t;return e&&(s=s.filter(i=>i.nameWithOwner.toLowerCase().includes(e.toLowerCase()))),a&&(s=s.filter(i=>Tr(i.nameWithOwner,a))),{data:s,visitRepository:r,updateRepository:o,removeRepository:l}}var Ea=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Ei=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],fi=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],kr=Ea[0].value,Iu=Ei[0].value,gu=fi[0].value,jr=["https","ssh"],zr={https:"HTTPS",ssh:"SSH"},Gr=["git","gh"],Hr={git:"Git",gh:"GitHub CLI"},$r=(e,a,t)=>{let n=t?.gitFlags?.join(" ")??"",r=(t?.targetDir??"").replace(/"/g,'\\"'),o=Kr(e,a),l=`git clone ${n} ${o}`;return r&&(l+=` "${r}"`),l},Dt=(e,a,t)=>{let n=t?.gitFlags??[],r=t?.targetDir??"",o=["clone",...n,Kr(e,a)];return r&&o.push(r),o},Qr=(e,a)=>{let t=a?.gitFlags??[],n=a?.targetDir??"",r=["repo","clone",e];return n&&r.push(n),t.length>0&&r.push("--",...t),r},Pa=(0,Or.promisify)(st.execFile),Ci=["/gh","\\gh","/gh.exe","\\gh.exe"],Ct="\x1B",wr="\x07",Di=new RegExp(`${Ct}][^${wr}${Ct}]*(?:${wr}|${Ct}\\\\)`,"g"),hi=new RegExp(`${Ct}\\[[0-9;?]*[A-Za-z]`,"g"),xi=new RegExp(`${Ct}\\([0-9A-Za-z]`,"g");function Ui(e){let a=e.replace(Di,"").replace(hi,"").replace(xi,"");for(let t of a.split(/\r?\n/)){let n=t.trim();if(!(!n||/^(alias|builtin|function)\s/i.test(n))&&Ci.some(r=>n.endsWith(r)))return n}}async function vi(){let e=process.env.SHELL;if(e)for(let a of["-l","-i"])try{let{stdout:t}=await Pa(e,[a,"-c","command -v gh"],{timeout:5e3,maxBuffer:1048576}),n=Ui(t.toString());if(n)return n}catch{}return"gh"}async function Wr(){let e=await vi();try{await Pa(e,["--version"])}catch{return{available:!1,reason:"not-installed"}}try{await Pa(e,["auth","status"])}catch{return{available:!1,reason:"not-authenticated"}}return{available:!0,executable:e}}var Kr=(e,a)=>a==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;function Yr(e,a,t=""){if(!a)return e;let n=M=>M.replace(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\//,"https://github.com/$1/$2/blob/"),r=a.slice(0,a.lastIndexOf("/")+1),o=t?a.slice(0,a.length-t.length):r,l=n(r),s=n(o),i=M=>/^[a-z][a-z0-9+.-]*:/i.test(M)||M.startsWith("//")||M.startsWith("#"),u=(M,S,C)=>{let R=M.trim();if(!R||i(R))return M;try{return R.startsWith("/")?new URL(R.replace(/^\/+/,""),C).toString():new URL(R,S).toString()}catch{return M}},c="((?:\\([^)]*\\)|[^()\\s])+)([^)]*)",y=new RegExp(`!\\[([^\\]]*)\\]\\(${c}\\)`,"g"),I=new RegExp(`(?<!!)\\[([^\\]]+)\\]\\(${c}\\)`,"g");return e.replace(y,(M,S,C,R)=>`![${S}](${u(C,r,o)}${R})`).replace(I,(M,S,C,R)=>`[${S}](${u(C,l,s)}${R})`).replace(/(<img[^>]+src=["'])([^"']+)(["'])/gi,(M,S,C,R)=>`${S}${u(C,r,o)}${R}`).replace(/(<a[^>]+href=["'])([^"']+)(["'])/gi,(M,S,C,R)=>`${S}${u(C,l,s)}${R}`)}var Wt=require("child_process"),Xr=Z(require("path")),fa=require("util"),N=require("@raycast/api"),xe=require("@raycast/utils"),Zr=require("react");var K=require("react/jsx-runtime");function Ca({repository:e}){let{octokit:a}=h(),{application:t,baseClonePath:n,repositoryCloneProtocol:r}=(0,N.getPreferenceValues)(),{data:o,isLoading:l}=(0,xe.useCachedPromise)(async y=>(await a.repos.listBranches({owner:y.owner.login,repo:y.name})).data.map(M=>M.name),[e]),{itemProps:s,handleSubmit:i,setValue:u,values:c}=(0,xe.useForm)({initialValues:{clonePath:n?[n]:[],cloneProtocol:r,cloneTool:"git"},async onSubmit(y){let I=e.name,M=Xr.default.join(y.clonePath[0],I);await(0,N.showToast)({title:`Cloning ${e.nameWithOwner} to ${M}`,style:N.Toast.Style.Animated});let S=y.branch?["-b",y.branch]:[],C=(0,fa.promisify)(Wt.exec),R=(0,fa.promisify)(Wt.execFile),g="gh";if(y.cloneTool==="gh"){let P=await Wr();if(!P.available){P.reason==="not-installed"?await(0,xe.showFailureToast)(void 0,{title:"GitHub CLI is not installed",message:"Install it with `brew install gh` or visit https://cli.github.com, then try again."}):await(0,xe.showFailureToast)(void 0,{title:"GitHub CLI is not authenticated",message:"Run `gh auth login` in your terminal to authenticate, then try again."});return}g=P.executable}try{y.cloneTool==="gh"?await R(g,Qr(e.nameWithOwner,{gitFlags:S,targetDir:M})):await R("git",Dt(e.nameWithOwner,y.cloneProtocol,{gitFlags:S,targetDir:M})),await(0,N.showToast)({style:N.Toast.Style.Success,title:"Repository cloned successfully",primaryAction:{title:"Open Repository",async onAction(){let E=`open -a ${t?.path.replaceAll(" ","\\ ")} ${M}`;await C(E),await(0,N.closeMainWindow)()}}})}catch(P){if(P instanceof Error&&P.message.includes("Repository not found")){await(0,xe.showFailureToast)(P,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(P instanceof Error&&P.message.includes("already exists")){await(0,xe.showFailureToast)(P,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,xe.showFailureToast)(P,{title:"Failed cloning repository"})}}});return(0,Zr.useEffect)(()=>{let y=o?.find(M=>M==="main"),I=o?.find(M=>M==="master");(y||I)&&u("branch",y??I??"")},[o]),(0,K.jsxs)(N.Form,{isLoading:l,navigationTitle:`Clone ${e.nameWithOwner}`,actions:(0,K.jsx)(N.ActionPanel,{children:(0,K.jsx)(N.Action.SubmitForm,{title:"Clone and Open Repository",onSubmit:i})}),children:[(0,K.jsx)(N.Form.Dropdown,{...s.cloneTool,title:"Clone Tool",children:Gr.map(y=>(0,K.jsx)(N.Form.Dropdown.Item,{value:y,title:Hr[y]},y))}),(0,K.jsx)(N.Form.Description,{title:"Clone Location",text:n?`Starts at your Default Clone Path (${n}). Choose another directory to override it for this clone.`:"Choose the directory where the repository should be cloned. Set a Default Clone Path in extension preferences to reuse a directory."}),(0,K.jsx)(N.Form.FilePicker,{...s.clonePath,title:"Clone Path",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,K.jsx)(N.Form.Dropdown,{...s.branch,title:"Branch Name",children:o?.map(y=>(0,K.jsx)(N.Form.Dropdown.Item,{value:y,title:y},y))}),c.cloneTool==="gh"?(0,K.jsx)(N.Form.Description,{title:"Authentication",text:"Cloning uses your existing GitHub CLI (gh) authentication and git protocol configuration. Run `gh auth login` in your terminal if you are not authenticated."}):(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(N.Form.Dropdown,{...s.cloneProtocol,title:"Repository Clone Protocol",storeValue:!0,children:jr.map(y=>(0,K.jsx)(N.Form.Dropdown.Item,{value:y,title:zr[y]},y))})})]})}var Kt=require("fs"),Da=Z(require("path")),H=require("@raycast/api"),ut=require("@raycast/utils"),Jr=require("react");var qe=require("react/jsx-runtime");function ha({repository:e}){let{octokit:a,token:t}=h(),{data:n,isLoading:r}=(0,ut.useCachedPromise)(async i=>(await a.repos.listBranches({owner:i.owner.login,repo:i.name})).data.map(c=>c.name),[e]),{itemProps:o,handleSubmit:l,setValue:s}=(0,ut.useForm)({async onSubmit(i){let u=e.url+"/archive/refs/heads/"+i.branch+".zip";await(0,H.showToast)({title:`Downloading ${e.nameWithOwner}`,style:H.Toast.Style.Animated});try{let c;if(e.isPrivate&&t){let g=`https://api.github.com/repos/${e.owner.login}/${e.name}/zipball/${i.branch}`;c=await fetch(g,{headers:{Authorization:`token ${t}`,Accept:"application/vnd.github.v3+json"},redirect:"follow"})}else c=await fetch(u);if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);let I=await(await c.blob()).arrayBuffer(),M=new Uint8Array(I),S=`${e.name}-${i.branch.replaceAll("/","-")}.zip`,C=Da.default.join(i.downloadPath[0],S),R=1;for(;(0,Kt.existsSync)(C);)S=`${`${e.name}-${i.branch.replaceAll("/","-")}`} (${R}).zip`,C=Da.default.join(i.downloadPath[0],S),R++;(0,Kt.writeFileSync)(C,M),await(0,H.showToast)({style:H.Toast.Style.Success,title:"Downloaded repository successfully",message:e.name,primaryAction:{title:"Show in Finder",async onAction(){await(0,H.showInFinder)(C)}}})}catch(c){await(0,ut.showFailureToast)(c,{title:"Failed downloading repository",message:c instanceof Error?c.message:"Unknown error"});return}},validation:{downloadPath:i=>{if(!i||i.length===0)return"Please select a download path"},branch:i=>{if(!i||i.trim()==="")return"Please select a branch"}}});return(0,Jr.useEffect)(()=>{let i=n?.find(c=>c==="main"),u=n?.find(c=>c==="master");(i||u)&&s("branch",i??u??"")},[n]),(0,qe.jsxs)(H.Form,{isLoading:r,navigationTitle:`Download ${e.nameWithOwner} as ZIP`,actions:(0,qe.jsx)(H.ActionPanel,{children:(0,qe.jsx)(H.Action.SubmitForm,{title:"Download ZIP",onSubmit:l})}),children:[(0,qe.jsx)(H.Form.Description,{title:"ZIP Download",text:"Downloads a branch as a ZIP archive. To create a Git clone, use 'Clone with Options' instead."}),(0,qe.jsx)(H.Form.FilePicker,{...o.downloadPath,title:"ZIP Save Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,qe.jsx)(H.Form.Dropdown,{...o.branch,title:"Branch Name",children:n?.map(i=>(0,qe.jsx)(H.Form.Dropdown.Item,{value:i,title:i},i))})]})}var Y=require("@raycast/api"),Jt=require("@raycast/utils"),va=require("react");var _=require("@raycast/api"),en=require("lodash");function Yt(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}function tn(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let a=e;throw new Error(`Unknown merge method: ${a}`)}}}function ht(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:_.Color.Purple},text:"Merged",color:_.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:_.Color.Red},text:"Closed",color:_.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:_.Color.SecondaryText},text:"Draft",color:_.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:_.Color.Orange},text:"In Merge Queue",color:_.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:_.Color.Green},text:"Open",color:_.Color.Green}}function Xt(e){return F(e.author)}function an(e){let a=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let l;"githubUsername"in r&&(l=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...F({name:o,login:l,avatarUrl:s})}}}),t=(0,en.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...F(n?.author)})),"id");return[...a??[],...t??[]]}function rn(e){let a=e.comments.totalCount,t=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return a+t+n}function Zt(e){let a=Yt(e);return a?{icon:_.Icon[a.icon],tooltip:`Checks: ${a.text}`}:null}function nn(e){switch(e){case"added":return{icon:{source:_.Icon.PlusCircle,tintColor:_.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:_.Icon.MinusCircle,tintColor:_.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:_.Icon.ArrowRight,tintColor:_.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:_.Icon.CopyClipboard,tintColor:_.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:_.Icon.Circle,tintColor:_.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Changed"};default:return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Modified"}}}var xa=400;function on(e){let a=e.split(`
`);return a.length<=xa?{patch:e,remainingLines:0}:{patch:a.slice(0,xa).join(`
`),remainingLines:a.length-xa}}function sn(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:_.Icon.Eye,tintColor:_.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:_.Icon.CheckCircle,tintColor:_.Color.Green},tooltip:"Approved"};default:return null}}var un=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],pn="sort:updated-desc";function Ue(e){return[...new Map(e.map(a=>[a.id,a])).values()]}function ln(e){return e?.filter(a=>typeof a=="object"&&a!==null&&"id"in a)??[]}function Ie(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var ve=require("date-fns"),Ua=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],cn=Ua[0].value,yn=e=>{let a=new Date,t,n=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!n)return e;let r=parseInt(n[1],10);switch(n[2]){case"d":t=(0,ve.subDays)(a,r);break;case"w":t=(0,ve.subWeeks)(a,r);break;case"m":t=(0,ve.subMonths)(a,r);break;case"y":t=(0,ve.subYears)(a,r);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,ve.format)(t,"yyyy-MM-dd")}`};var ye=require("@raycast/api"),Sn=require("date-fns");var ie=require("@raycast/api"),_e=require("react/jsx-runtime"),$e=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,_e.jsxs)(ie.ActionPanel.Submenu,{title:"Sort by",icon:ie.Icon.ArrowUp,shortcut:ie.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,_e.jsx)(dn,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,_e.jsx)(ie.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,_e.jsx)(dn,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,_e.jsx)(_e.Fragment,{}),dn=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,_e.jsx)(ie.Action,{title:e,icon:t===a?{source:ie.Icon.CheckCircle,tintColor:ie.Color.Green}:ie.Icon.Circle,onAction:()=>n(a)});var Je=require("react/jsx-runtime");function Ti(e){let a=e.category?.name?`Category: ${e.category?.name}`:"Unknown",t=e.category?.emojiHTML;if(!t)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:a};let r=(()=>{let o=/fallback-src="(.*)"/,l=t.match(o);if(l)return l[1]})();return r&&{value:{source:r},tooltip:a}}function bn(e){let a=e.discussion,t=F(a.author);return(0,Je.jsx)(ye.List.Item,{icon:Ti(a),title:a.title,subtitle:a.repository?.nameWithOwner,accessories:[{icon:a.answer?{source:ye.Icon.Checkmark,tintColor:ye.Color.Green}:void 0,tooltip:a.answer?"Answered":void 0},{icon:ye.Icon.ArrowUp,text:`${a.upvoteCount}`,tooltip:`${a.upvoteCount} Upvotes`},{text:a.comments?`${a.comments.totalCount}`:void 0,icon:a.comments?ye.Icon.SpeechBubble:void 0,tooltip:a.comments?`Comments: ${a.comments.totalCount}`:void 0},...a.publishedAt?[{date:new Date(a.publishedAt),tooltip:(0,Sn.format)(new Date(a.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:t.icon,tooltip:t.text}],actions:(0,Je.jsxs)(ye.ActionPanel,{children:[(0,Je.jsx)(ye.Action.OpenInBrowser,{url:a.url}),(0,Je.jsx)(ye.ActionPanel.Section,{children:(0,Je.jsx)($e,{data:Ua,...e})})]})})}var ge=require("react/jsx-runtime"),wi=20;function Bi(e){return(0,ge.jsxs)(Y.List.Dropdown,{tooltip:"Filter",value:e.value,onChange:e.onChange,children:[(0,ge.jsx)(Y.List.Dropdown.Item,{value:"",title:"All",icon:Y.Icon.SpeechBubble}),(0,ge.jsx)(Y.List.Dropdown.Item,{value:"answered",title:"Answered",icon:{source:Y.Icon.Checkmark,tintColor:Y.Color.Green}}),(0,ge.jsx)(Y.List.Dropdown.Item,{value:"unanswered",title:"Unanswered",icon:Y.Icon.Circle}),(0,ge.jsx)(Y.List.Dropdown.Item,{value:"locked",title:"Locked",icon:Y.Icon.Lock}),(0,ge.jsx)(Y.List.Dropdown.Item,{value:"unlocked",title:"Unlocked",icon:Y.Icon.LockUnlocked})]})}function In(e){let{github:a}=h(),[t,n]=(0,va.useState)(""),[r,o]=(0,va.useState)(""),[l,s]=(0,Jt.useCachedState)("sort-query",cn,{cacheNamespace:"github-repo-discussion"}),i=r.length>0?`is:${r}`:"",u=e.repository&&e.repository.length>0?`repo:${e.repository}`:"",{data:c,isLoading:y,pagination:I}=(0,Jt.useCachedPromise)((S,C,R)=>async g=>{let P=await a.searchDiscussions({query:`${u} ${C} ${yn(R)} ${S}`.replace(/\s+/g," ").trim(),numberOfItems:wi,after:g.page>0?g.cursor:void 0});return{data:P.searchDiscussions.nodes?.map(E=>E)??[],hasMore:P.searchDiscussions.pageInfo.hasNextPage,cursor:P.searchDiscussions.pageInfo.endCursor??void 0}},[t,i,l]),M=Ue(c??[]);return(0,ge.jsx)(Y.List,{isLoading:y,onSearchTextChange:n,navigationTitle:e.repository,throttle:!0,pagination:I,searchBarAccessory:(0,ge.jsx)(Bi,{value:r,onChange:o}),children:(0,ge.jsx)(Y.List.Section,{title:"Discussions",subtitle:`${M.length}`,children:M.map(S=>(0,ge.jsx)(bn,{discussion:S,sortQuery:l,setSortQuery:s},S.id))})})}var Ee=require("@raycast/api"),vt=require("@raycast/utils"),Cn=require("react");var Fe=require("@raycast/api");function ea(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Fe.Color.SecondaryText},text:"Closed as not planned",color:Fe.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Fe.Color.Purple},text:"Closed as completed",color:Fe.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Fe.Color.Purple},text:"Closed",color:Fe.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Fe.Color.Green},text:"Open",color:Fe.Color.Green}}function ta(e){return F(e.author)}var gn=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Mn="sort:updated-desc",Li=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Oi=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,Ni=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function mn(e,a){let t=e.match(Oi);if(t)return{owner:t[1],name:t[2],issueNumber:Number.parseInt(t[3],10)};let n=e.match(Li),r=a?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let s=e.replace(Ni," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!s)return null;let[i,u]=o.split("/");return!i||!u?null:{owner:i,name:u,issueNumber:Number.parseInt(s[1],10)}}function Rn(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var je=require("@raycast/api"),fn=require("date-fns");var d=require("@raycast/api"),aa=require("@raycast/utils"),ra=require("react");var An=require("@raycast/utils");function ke(){let{github:e}=h(),{data:a}=(0,An.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var U=require("react/jsx-runtime");function xt({issue:e,mutateList:a,mutateDetail:t,children:n,setSortQuery:r,sortQuery:o}){let{github:l}=h(),s=ke();async function i(){a&&await a(),t&&await t()}async function u(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await l.reopenIssue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening issue",message:v(E)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await l.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as completed",message:v(E)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await l.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as not planned",message:v(E)})}}async function I(E){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let f=e.assignees.nodes?.filter(D=>!!D).map(D=>D?.id)??[];await l.changeIssueAssignees({issueId:e.id,assigneeIds:[...f,E]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(f){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:v(f)})}}async function M(E){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let f=e.assignees.nodes?.filter(D=>!!D).map(D=>D?.id)??[];await l.changeIssueAssignees({issueId:e.id,assigneeIds:f?.filter(D=>D!==E)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(f){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:v(f)})}}async function S(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let E=e.repository.defaultBranchRef?.target?.oid;if(!E)throw new Error("Repository default branch commit SHA is unavailable");let D=(await l.createLinkedBranch({input:{issueId:e.id,oid:E}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),D&&await(0,d.showToast)({style:d.Toast.Style.Success,title:`${D} is created`,primaryAction:{title:"Copy Branch Name",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>d.Clipboard.copy(D)}})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed creating a branch",message:v(E)})}}async function C(E,f){if(await(0,d.confirmAlert)({icon:d.Icon.Trash,title:"Delete the branch",message:`${f} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:d.Alert.ActionStyle.Destructive}}))try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Deleting a branch"}),await l.deleteLinkedBranch({input:{linkedBranchId:E}}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Deleted the branch"})}catch(D){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed deleting the branch",message:v(D)})}}let R=F(s),g=e.assignees.nodes?.some(E=>E?.isViewer),P=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,U.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,U.jsx)(d.Action.OpenInBrowser,{url:e.url}),(0,U.jsxs)(d.ActionPanel.Section,{children:[s?(0,U.jsx)(d.Action,{title:g?"Unassign from Me":"Assign to Me",icon:R.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>g?M(s.id):I(s.id)}):null,(0,U.jsx)(Vi,{issue:e,mutate:i}),(0,U.jsx)(qi,{issue:e,mutate:i}),P?null:(0,U.jsx)(d.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"b"},onAction:()=>S()}),(0,U.jsx)(Fi,{issue:e,mutate:i})]}),(0,U.jsx)(d.ActionPanel.Section,{children:e.closed?(0,U.jsx)(d.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:d.Color.Green},onAction:u}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(d.Action,{title:"Close Issue as Completed",style:d.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:d.Color.Red},onAction:c}),(0,U.jsx)(d.Action,{title:"Close Issue as Not Planned",style:d.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:d.Color.Red},onAction:y}),P?(0,U.jsx)(d.Action,{title:"Delete Issue Branch",style:d.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:d.Color.Red},onAction:()=>C(P?.id||"",P.ref?.name??"")}):null]})}),(0,U.jsxs)(d.ActionPanel.Section,{children:[(0,U.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}}),P?.ref?.name?(0,U.jsx)(d.Action.CopyToClipboard,{content:P.ref?.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null]}),(0,U.jsxs)(d.ActionPanel.Section,{children:[(0,U.jsx)($e,{data:gn,sortQuery:o,setSortQuery:r}),(0,U.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function Vi({issue:e,mutate:a}){let{github:t}=h(),[n,r]=(0,ra.useState)(!1),{data:o,isLoading:l}=(0,aa.useCachedPromise)(async i=>t.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:u});let c=o?.repository?.issue?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await t.changeIssueAssignees({issueId:e.id,assigneeIds:[...c,i]}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:u})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:v(c)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let u=F(i);return(0,U.jsx)(d.Action,{title:u.text,icon:u.icon,onAction:()=>s({id:i.id,text:u.text})},i.id)})})}function qi({issue:e,mutate:a}){let{github:t}=h(),[n,r]=(0,ra.useState)(!1),{data:o,isLoading:l}=(0,aa.useCachedPromise)(async i=>t.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:u}),await t.addIssueToProject({issueId:e.id,projectId:i}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:u})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:v(c)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,U.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function Fi({issue:e,mutate:a}){let{github:t}=h(),[n,r]=(0,ra.useState)(!1),{data:o,isLoading:l}=(0,aa.useCachedPromise)(async u=>t.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await t.changeIssueMilestone({issueId:e.id,milestoneId:null}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:v(u)})}}async function i({id:u,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changeIssueMilestone({issueId:e.id,milestoneId:u}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:v(y)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,U.jsx)(d.Action,{title:u.title,onAction:()=>i({id:u.id,text:u.title}),autoFocus:e.milestone?.id===u.id},u.id):null)]})})}var $=require("@raycast/api"),Pn=require("@raycast/utils"),En=require("date-fns");var Q=require("react/jsx-runtime");function _a({initialIssue:e,mutateList:a}){let{github:t}=h(),n=ke(),{data:r,isLoading:o,mutate:l}=(0,Pn.useCachedPromise)(async y=>(await t.issueDetails({nodeId:y})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=ea(r),u=ta(r),c=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,Q.jsx)($.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,Q.jsxs)($.Detail.Metadata,{children:[(0,Q.jsx)($.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,Q.jsx)($.Detail.Metadata.TagList,{title:"Status",children:(0,Q.jsx)($.Detail.Metadata.TagList.Item,{...i})}),c?(0,Q.jsx)($.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:$.Color.PrimaryText},text:c}):null,r.updatedAt?(0,Q.jsx)($.Detail.Metadata.Label,{title:"Updated",text:(0,En.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,Q.jsx)($.Detail.Metadata.Label,{title:"Author",...u}),r.assignees&&r.assignees.totalCount>0?(0,Q.jsx)($.Detail.Metadata.TagList,{title:Ie(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(y=>{if(!y)return null;let I=F(y);return(0,Q.jsx)($.Detail.Metadata.TagList.Item,{...I},y.id)})}):null,r.labels&&r.labels.totalCount>0?(0,Q.jsx)($.Detail.Metadata.TagList,{title:Ie(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(y=>y?(0,Q.jsx)($.Detail.Metadata.TagList.Item,{text:y.name,color:y.color},y.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,Q.jsx)($.Detail.Metadata.TagList,{title:Ie(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(y=>y?(0,Q.jsx)($.Detail.Metadata.TagList.Item,{text:y.title},y.id):null)}):null,r.milestone?(0,Q.jsx)($.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,Q.jsx)(xt,{issue:r,viewer:n,mutateList:a,mutateDetail:l})})}var Ut=require("react/jsx-runtime");function Ta({issue:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),l=ta(e),s=ea(e),i=[{date:o,tooltip:`Updated: ${(0,fn.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:l.icon,tooltip:`Author: ${l.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:je.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:je.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let u=[`${e.number}`];return e.author?.login&&u.push(e.author.login),(0,Ut.jsx)(je.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:u,accessories:i,actions:(0,Ut.jsx)(xt,{issue:e,mutateList:t,viewer:a,sortQuery:n,setSortQuery:r,children:(0,Ut.jsx)(je.Action.Push,{title:"Show Details",icon:je.Icon.Sidebar,target:(0,Ut.jsx)(_a,{initialIssue:e,viewer:a,mutateList:t})})})},e.id)}var Te=require("react/jsx-runtime"),ki=20;function ji(e){return(0,Te.jsxs)(Ee.List.Dropdown,{tooltip:"Status",value:e.value,onChange:a=>e.onChange(a),children:[(0,Te.jsx)(Ee.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"issue-open.svg",tintColor:Ee.Color.Green}}),(0,Te.jsx)(Ee.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"issue-closed.svg",tintColor:Ee.Color.Purple}}),(0,Te.jsx)(Ee.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"issue-open.svg",tintColor:Ee.Color.PrimaryText}})]})}function Dn(e){let{github:a}=h(),[t,n]=(0,Cn.useState)(""),[r,o]=(0,vt.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-issue"}),[l,s]=(0,vt.useCachedState)("sort-query",Mn,{cacheNamespace:"github-repo-issue"}),i=e.repo&&e.repo.length>0?`repo:${e.repo}`:"",{data:u,isLoading:c,mutate:y,pagination:I}=(0,vt.useCachedPromise)((S,C,R)=>async g=>{let P=R==="all"?"":`is:${R}`,E=mn(S,e.repo);if(E&&g.page===0)try{let T=(await a.issueByNumber(E)).repository?.issue,X=R==="all"||(R==="closed"?T?.closed:!T?.closed);if(T&&X)return{data:[T],hasMore:!1}}catch{}let f=await a.searchIssues({query:`is:issue ${P} ${C} ${i} ${Rn(S)}`.replace(/\s+/g," ").trim(),numberOfItems:ki,after:g.page>0?g.cursor:void 0});return{data:f.search.nodes?.map(D=>D)??[],hasMore:f.search.pageInfo.hasNextPage,cursor:f.search.pageInfo.endCursor??void 0}},[t,l,r]),M=Ue(u??[]);return(0,Te.jsx)(Ee.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repo,searchBarPlaceholder:"Filter by title or #123",throttle:!0,pagination:I,searchBarAccessory:(0,Te.jsx)(ji,{value:r,onChange:o}),children:(0,Te.jsx)(Ee.List.Section,{title:"Issues",subtitle:`${M.length}`,children:M.map(S=>(0,Te.jsx)(Ta,{issue:S,mutateList:y,sortQuery:l,setSortQuery:s},S.id))})})}var te=require("@raycast/api"),wt=require("@raycast/utils"),Ln=require("react");var de=require("@raycast/api"),qa=require("date-fns"),Bn=require("react");var p=require("@raycast/api"),ct=require("@raycast/utils"),lt=require("react");var q=require("@raycast/api"),na=require("@raycast/utils");var we=require("react/jsx-runtime");function wa({pullRequest:e,mutate:a}){let{github:t}=h(),{pop:n}=(0,q.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,na.useForm)({async onSubmit(l){try{await(0,q.showToast)({style:q.Toast.Style.Animated,title:"Adding Review"}),await t.addPullRequestReview({nodeId:e.id,body:l.comment,event:l.event}),await a(),n(),await(0,q.showToast)({style:q.Toast.Style.Success,title:"Review added"})}catch(s){await(0,q.showToast)({style:q.Toast.Style.Failure,title:"Failed to add review",message:v(s)})}},validation:{comment:na.FormValidation.Required}});return(0,we.jsxs)(q.Form,{actions:(0,we.jsx)(q.ActionPanel,{children:(0,we.jsx)(q.Action.SubmitForm,{title:"Submit",icon:q.Icon.Plus,onSubmit:r})}),children:[(0,we.jsx)(q.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,we.jsxs)(q.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,we.jsx)(q.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,we.jsx)(q.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,we.jsx)(q.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var oa=require("node:child_process"),hn=require("node:fs"),xn=Z(require("node:path")),Ba=require("node:util"),w=require("@raycast/api"),pt=require("@raycast/utils");var et=require("react/jsx-runtime");function La({pullRequest:e}){let{repositoryCloneProtocol:a}=(0,w.getPreferenceValues)(),{itemProps:t,handleSubmit:n}=(0,pt.useForm)({async onSubmit(r){let o=e.repository.name,l=xn.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,w.showToast)({style:w.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let i=(0,Ba.promisify)(oa.exec),u=(0,Ba.promisify)(oa.execFile);try{if((0,hn.existsSync)(l)){await(0,w.showToast)({title:`Switching to branch ${s}`,message:`in ${l}`,style:w.Toast.Style.Animated});let{stdout:c}=await i("git remote",{cwd:l}),y=c.trim().split(`
`)[0]||"origin";await i(`git fetch ${y} ${s}`,{cwd:l}),await i(`git checkout ${s}`,{cwd:l}),await i(`git reset --hard ${y}/${s}`,{cwd:l}),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,w.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${l}`,style:w.Toast.Style.Animated}),await u("git",Dt(e.repository.nameWithOwner,a,{gitFlags:["-b",s],targetDir:l})),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,w.open)(l),await(0,w.popToRoot)(),await(0,w.closeMainWindow)()}catch(c){if(c instanceof Error&&c.message.includes("Repository not found")){await(0,pt.showFailureToast)(c,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(c instanceof Error&&c.message.includes("already exists")){await(0,pt.showFailureToast)(c,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,pt.showFailureToast)(c,{title:"Failed checking out pull request"})}}});return(0,et.jsxs)(w.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,et.jsx)(w.ActionPanel,{children:(0,et.jsx)(w.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,et.jsx)(w.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,et.jsx)(w.Form.FilePicker,{...t.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var J=require("@raycast/api"),Un=require("@raycast/utils"),ia=require("date-fns");var Me=require("react/jsx-runtime");function Oa({pullRequest:e}){let{github:a}=h(),{data:t,isLoading:n,pagination:r}=(0,Un.useCachedPromise)(l=>async({cursor:s})=>{let u=(await a.pullRequestCommits({nodeId:l.id,numberOfItems:25,before:s})).node,c=u.commits.nodes?.filter(y=>y!=null)??[];return c.sort((y,I)=>{let M=y.commit.authoredDate,S=I.commit.authoredDate;return(0,ia.compareDesc)(new Date(M),new Date(S))}),{data:c,hasMore:u.commits.pageInfo.hasPreviousPage,cursor:u.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((t??[]).map(l=>[l.commit.id,l])).values()];return(0,Me.jsx)(J.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(l=>{let s=l.commit,i=new Date(s.authoredDate),u=[{date:i,tooltip:(0,ia.format)(i,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let y=Zt(s.statusCheckRollup.state);y&&u.unshift(y)}let c;if(s.author){let y={source:s.author.avatarUrl,mask:J.Image.Mask.Circle};c=s.author.name?{value:y,tooltip:s.author.name}:y}return(0,Me.jsx)(J.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:u,...c?{icon:c}:{},actions:(0,Me.jsxs)(J.ActionPanel,{children:[(0,Me.jsx)(J.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,Me.jsx)(J.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,Me.jsxs)(J.ActionPanel.Section,{children:[(0,Me.jsx)(J.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,Me.jsx)(J.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,Me.jsx)(J.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,Me.jsx)(J.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{modifiers:["ctrl","shift"],key:"."}})]})]})},s.id)})})}var _n=require("node:crypto"),k=require("@raycast/api"),sa=require("@raycast/utils");var ee=require("react/jsx-runtime"),vn=100,zi=4;function Na({pullRequest:e}){let{octokit:a}=h(),{data:t,isLoading:n,pagination:r}=(0,sa.useCachedPromise)((s,i,u)=>async({page:c})=>{let{data:y}=await a.pulls.listFiles({owner:s,repo:i,pull_number:u,per_page:vn,page:c+1});return{data:y,hasMore:y.length===vn}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,sa.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=t??[],l="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,ee.jsxs)(k.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,ee.jsx)(k.List.Section,{title:Ie(o.length,"file",{withNumber:!0}),subtitle:l,children:o.map(s=>{let i=nn(s.status);return(0,ee.jsx)(k.List.Item,{title:s.filename,icon:{value:i.icon,tooltip:i.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:k.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:k.Color.Red}}],detail:(0,ee.jsx)(k.List.Item.Detail,{markdown:Gi(s)}),actions:(0,ee.jsxs)(k.ActionPanel,{title:s.filename,children:[(0,ee.jsx)(k.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${$i(s.filename)}`}),(0,ee.jsx)(k.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,ee.jsxs)(k.ActionPanel.Section,{children:[(0,ee.jsx)(k.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{modifiers:["cmd","shift"],key:"."}}),s.patch?(0,ee.jsx)(k.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{modifiers:["cmd","shift"],key:","}}):null]})]})},s.sha+s.filename)})}),(0,ee.jsx)(k.List.EmptyView,{icon:k.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,ee.jsx)(k.ActionPanel,{children:(0,ee.jsx)(k.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function Gi(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:a,remainingLines:t}=on(e.patch),n=Hi(a),r=`${n}diff
${a}
${n}`;return t===0?r:`${r}

_\u2026 truncated, ${Ie(t,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function Hi(e){let a=0;for(let[t]of e.matchAll(/`+/g))a=Math.max(a,t.length);return"`".repeat(Math.max(zi,a+1))}function $i(e){return(0,_n.createHash)("sha256").update(e).digest("hex")}var A=require("react/jsx-runtime");function _t({pullRequest:e,viewer:a,mutateList:t,mutateDetail:n,children:r,sortQuery:o,setSortQuery:l}){let{github:s}=h();async function i(){t&&await t(),n&&await n()}async function u(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed reopening pull request",message:v(O)})}}async function c(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:v(O)})}}async function y(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed closing pull request",message:v(O)})}}async function I(O){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:O}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(Ae){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed merging pull request",message:v(Ae)})}}async function M(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:v(O)})}}async function S(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:v(O)})}}async function C(O){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:O}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(Ae){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed enabling auto-merge",message:v(Ae)})}}async function R(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(O){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed disabling auto-merge",message:v(O)})}}async function g(O){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Assigning to me"});let Ae=e.assignees.nodes?.filter(Oe=>!!Oe).map(Oe=>Oe?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...Ae,O]}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Assigned to me"})}catch(Ae){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed assigning to me",message:v(Ae)})}}async function P(O){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Un-assigning from me"});let Ae=e.assignees.nodes?.filter(Oe=>!!Oe).map(Oe=>Oe?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:Ae?.filter(Oe=>Oe!==O)}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Un-assigned from me"})}catch(Ae){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed un-assigning from me",message:v(Ae)})}}let E=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",f=!e.closed&&!e.merged,D=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===a?.login:!1,T=f&&e.isDraft&&D,X=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),Le=f&&e.repository.autoMergeAllowed,j=E||Le,We=F(a),rt=e.assignees.nodes?.some(O=>O?.isViewer),{isOpenInBrowser:zn}=(0,p.getPreferenceValues)(),$a=(0,A.jsx)(p.Action.OpenInBrowser,{url:e.permalink}),[Gn,Hn]=zn?[$a,r]:[r,$a];return(0,A.jsxs)(p.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[Gn,Hn,(0,A.jsx)(p.Action.Push,{icon:p.Icon.Document,title:"Add Review",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,A.jsx)(wa,{pullRequest:e,mutate:i})}),(0,A.jsx)(p.Action.Push,{icon:{source:"commit.svg",tintColor:p.Color.PrimaryText},title:"See Commits",shortcut:p.Keyboard.Shortcut.Common.Copy,target:(0,A.jsx)(Oa,{pullRequest:e})}),(0,A.jsx)(p.Action.Push,{icon:p.Icon.CodeBlock,title:"View Diff",shortcut:p.Keyboard.Shortcut.Common.RemoveAll,target:(0,A.jsx)(Na,{pullRequest:e})}),(0,A.jsx)(p.Action.Push,{icon:p.Icon.Download,title:"Checkout Pull Request",shortcut:p.Keyboard.Shortcut.Common.OpenWith,target:(0,A.jsx)(La,{pullRequest:e})}),j&&(0,A.jsxs)(p.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&E&&!e.isInMergeQueue&&(0,A.jsx)(p.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>M()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,A.jsx)(p.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>S()}),!e.isMergeQueueEnabled&&E?(0,A.jsxs)(A.Fragment,{children:[e.repository.mergeCommitAllowed?(0,A.jsx)(p.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>I("MERGE")}):null,e.repository.squashMergeAllowed?(0,A.jsx)(p.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["ctrl","shift"],key:"enter"},onAction:()=>I("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,A.jsx)(p.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["opt","shift"],key:"enter"},onAction:()=>I("REBASE")}):null]}):null,Le&&!e.autoMergeRequest&&X.length===1&&(0,A.jsx)(p.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},onAction:()=>C(X[0])}),Le&&!e.autoMergeRequest&&X.length>1&&(0,A.jsx)(p.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},children:X.map(O=>(0,A.jsx)(p.Action,{title:tn(O),onAction:()=>C(O)},O))}),f&&e.autoMergeRequest&&(0,A.jsx)(p.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},onAction:()=>R()})]}),(0,A.jsxs)(p.ActionPanel.Section,{children:[(0,A.jsx)(Qi,{pullRequest:e,mutate:i}),a?(0,A.jsx)(p.Action,{title:rt?"Unassign from Me":"Assign to Me",icon:We.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>rt?P(a.id):g(a.id)}):null,(0,A.jsx)(Wi,{pullRequest:e,mutate:i}),(0,A.jsx)(Ki,{pullRequest:e,mutate:i}),(0,A.jsx)(Yi,{pullRequest:e,mutate:i}),(0,A.jsx)(Xi,{pullRequest:e,mutate:i})]}),(0,A.jsxs)(p.ActionPanel.Section,{children:[T?(0,A.jsx)(p.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"d"},onAction:()=>c()}):null,e.closed&&!e.merged?(0,A.jsx)(p.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:p.Color.PrimaryText},onAction:()=>u()}):null,e.closed?null:(0,A.jsx)(p.Action,{title:"Close Pull Request",style:p.Action.Style.Destructive,icon:p.Icon.XMarkCircle,onAction:()=>y()})]}),(0,A.jsxs)(p.ActionPanel.Section,{children:[(0,A.jsx)(p.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),e.headRef?(0,A.jsx)(p.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null,(0,A.jsx)(p.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,A.jsx)(p.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,A.jsx)(p.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}})]}),(0,A.jsxs)(p.ActionPanel.Section,{children:[(0,A.jsx)($e,{data:un,sortQuery:o,setSortQuery:l}),(0,A.jsx)(p.Action,{icon:p.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:p.Keyboard.Shortcut.Common.Refresh})]})]})}function Qi({pullRequest:e,mutate:a}){let{github:t}=h(),[n,r]=(0,lt.useState)(!1),[o,l]=(0,lt.useState)(""),{data:s,isLoading:i}=(0,ct.useCachedPromise)(async(c,y)=>t.repositoryCollaboratorsForPullRequests({owner:c.repository.owner.login,name:c.repository.name,pullRequestNumber:c.number,searchQuery:y}),[e,o],{execute:n});async function u({id:c,text:y}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Requesting review",message:y}),await t.requestReview({pullRequestId:e.id,collaboratorId:c}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Requested review",message:y})}catch(I){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed requesting review",message:v(I)})}}return(0,A.jsx)(p.ActionPanel.Submenu,{title:"Request Review",icon:p.Icon.AddPerson,shortcut:{modifiers:["ctrl","shift"],key:"r"},onOpen:()=>r(!0),onSearchTextChange:l,isLoading:i,children:s?.repository?.collaborators?.nodes?.filter(c=>!c?.isViewer).map(c=>{if(!c)return null;let y=F(c);return(0,A.jsx)(p.Action,{title:y.text,icon:y.icon,onAction:()=>u({id:c.id,text:y.text})},c.id)})})}function Wi({pullRequest:e,mutate:a}){let{github:t}=h(),[n,r]=(0,lt.useState)(!1),{data:o,isLoading:l}=(0,ct.useCachedPromise)(async i=>t.repositoryCollaboratorsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Adding assignee",message:u});let c=o?.repository?.pullRequest?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await t.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...c,i]}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Added assignee",message:u})}catch(c){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding assignee",message:v(c)})}}return(0,A.jsx)(p.ActionPanel.Submenu,{title:"Add Assignee",icon:p.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,A.jsx)(p.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let u=F(i);return(0,A.jsx)(p.Action,{title:u.text,icon:u.icon,onAction:()=>s({id:i.id,text:u.text})},i.id)})})}function Ki({pullRequest:e,mutate:a}){let{github:t}=h(),[n,r]=(0,lt.useState)(!1),{data:o,isLoading:l}=(0,ct.useCachedPromise)(async i=>t.repositoryProjectsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Adding to project",message:u}),await t.addPullRequestToProject({pullRequestId:e.id,projectId:i}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Added to project",message:u})}catch(c){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding to project",message:v(c)})}}return(0,A.jsx)(p.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,A.jsx)(p.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,A.jsx)(p.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function Yi({pullRequest:e,mutate:a}){let{github:t}=h(),[n,r]=(0,lt.useState)(!1),{data:o,isLoading:l}=(0,ct.useCachedPromise)(async u=>t.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[e],{execute:n});async function s(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Removing milestone"}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed removing milestone",message:v(u)})}}async function i({id:u,text:c}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:u}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed setting milestone",message:v(y)})}}return(0,A.jsx)(p.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,A.jsx)(p.Action,{title:"Loading\u2026"}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,A.jsx)(p.Action,{title:u.title,onAction:()=>i({id:u.id,text:u.title}),autoFocus:e.milestone?.id===u.id},u.id):null)]})})}function Xi({pullRequest:e}){let{github:a}=h(),{data:t,isLoading:n}=(0,ct.useCachedPromise)(async r=>{let s=(await a.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(c=>c?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,A.jsx)(A.Fragment,{children:n?(0,A.jsx)(p.Action,{title:"Loading\u2026"}):t&&(0,A.jsx)(p.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{modifiers:["cmd","shift"],key:"v"},url:t,icon:{source:"vercel.svg",tintColor:p.Color.PrimaryText}})})}var L=require("@raycast/api"),Tn=require("@raycast/utils"),wn=require("date-fns");var V=require("react/jsx-runtime");function Va({initialPullRequest:e,mutateList:a}){let{github:t}=h(),n=ke(),{data:r,isLoading:o,mutate:l}=(0,Tn.useCachedPromise)(async I=>(await t.pullRequestDetails({nodeId:I})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=ht(r),u=Yt(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),c=Xt(r),y=an(r);return(0,V.jsx)(L.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,V.jsxs)(L.Detail.Metadata,{children:[(0,V.jsx)(L.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,V.jsxs)(L.Detail.Metadata.TagList,{title:"Status",children:[(0,V.jsx)(L.Detail.Metadata.TagList.Item,{...i}),r.autoMergeRequest&&(0,V.jsx)(L.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:L.Color.Yellow})]}),u?(0,V.jsx)(L.Detail.Metadata.Label,{title:"Checks",text:u.text,icon:L.Icon[u.icon]}):null,(0,V.jsx)(L.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,V.jsx)(L.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,V.jsx)(L.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,V.jsx)(L.Detail.Metadata.Label,{title:"Created",text:(0,wn.format)(new Date(r.createdAt),"dd MMM")}):null,(0,V.jsx)(L.Detail.Metadata.Label,{title:"Author",...c}),y.length>0?(0,V.jsx)(L.Detail.Metadata.TagList,{title:Ie(y.length,"Reviewer"),children:y.map(I=>I?(0,V.jsx)(L.Detail.Metadata.TagList.Item,{...I},I.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,V.jsx)(L.Detail.Metadata.TagList,{title:Ie(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(I=>{if(!I)return null;let M=F(I);return(0,V.jsx)(L.Detail.Metadata.TagList.Item,{...M},I.id)})}):null,r.labels&&r.labels.totalCount>0?(0,V.jsx)(L.Detail.Metadata.TagList,{title:Ie(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(I=>I?(0,V.jsx)(L.Detail.Metadata.TagList.Item,{text:I.name,color:I.color},I.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,V.jsx)(L.Detail.Metadata.TagList,{title:Ie(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(I=>I?(0,V.jsx)(L.Detail.Metadata.TagList.Item,{text:I.title},I.id):null)}):null,r.milestone?(0,V.jsx)(L.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,V.jsx)(_t,{pullRequest:r,viewer:n,mutateList:a,mutateDetail:l})})}var Tt=require("react/jsx-runtime");function Fa({pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let l=new Date(e.updatedAt),s=(0,Bn.useMemo)(()=>rn(e),[e]),i=o?Xt(e):null,u=ht(e),c=sn(e.reviewDecision),y=[{text:(0,qa.format)(l,"MMM dd"),tooltip:`Updated: ${(0,qa.format)(l,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(y.unshift({text:{value:`${s}`,color:s>0?de.Color.PrimaryText:de.Color.SecondaryText},icon:de.Icon.Bubble}),y.unshift(c??{icon:{source:de.Icon.Circle,tintColor:de.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&y.unshift({tag:{value:"Auto-merge",color:de.Color.Yellow}}),e.commits.nodes){let M=e.commits.nodes[0]?.commit.statusCheckRollup?.state,S=M?Zt(M):null;S&&y.unshift(S)}i&&y.splice(y.length-1,0,{icon:i.icon,tooltip:`Author: ${i.text}`});let I=[`${e.number}`];return e.author?.login&&I.push(e.author.login),(0,Tt.jsx)(de.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:u.icon,tooltip:`Status: ${u.text}`},keywords:I,accessories:y,actions:(0,Tt.jsx)(_t,{pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,children:(0,Tt.jsx)(de.Action.Push,{title:"Show Details",icon:de.Icon.Sidebar,target:(0,Tt.jsx)(Va,{initialPullRequest:e,viewer:a,mutateList:t})})})},e.id)}var me=require("react/jsx-runtime"),Zi=20;function Ji(e){return(0,me.jsxs)(te.List.Dropdown,{tooltip:"Status",value:e.value,onChange:a=>e.onChange(a),children:[(0,me.jsx)(te.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"pull-request-open.svg",tintColor:te.Color.Green}}),(0,me.jsx)(te.List.Dropdown.Item,{value:"merged",title:"Merged",icon:{source:"pull-request-merged.svg",tintColor:te.Color.Purple}}),(0,me.jsx)(te.List.Dropdown.Item,{value:"draft",title:"Draft",icon:{source:"pull-request-draft.svg",tintColor:te.Color.SecondaryText}}),(0,me.jsx)(te.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"pull-request-closed.svg",tintColor:te.Color.Red}}),(0,me.jsx)(te.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"pull-request-open.svg",tintColor:te.Color.PrimaryText}})]})}function On(e){let{github:a}=h(),[t,n]=(0,Ln.useState)(""),[r,o]=(0,wt.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-pr"}),[l,s]=(0,wt.useCachedState)("sort-query",pn,{cacheNamespace:"github-repo-pr"}),i=r==="all"?"":`is:${r}`,{data:u,isLoading:c,mutate:y,pagination:I}=(0,wt.useCachedPromise)((S,C,R,g)=>async P=>{let E=S&&S.length>0?`repo:${S}`:"",f=await a.searchPullRequests({query:`is:pr ${g} ${E} ${R} archived:false ${C}`.replace(/\s+/g," ").trim(),numberOfItems:Zi,after:P.page>0?P.cursor:void 0});return{data:f.search.edges?.map(D=>D?.node).filter(D=>D!=null)??[],hasMore:f.search.pageInfo.hasNextPage,cursor:f.search.pageInfo.endCursor??void 0}},[e.repo,t,l,i]),M=Ue(u??[]);return(0,me.jsx)(te.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repo,throttle:!0,pagination:I,searchBarAccessory:(0,me.jsx)(Ji,{value:r,onChange:o}),children:(0,me.jsx)(te.List.Section,{title:"Pull Requests",subtitle:`${M.length}`,children:M.map(S=>(0,me.jsx)(Fa,{showAuthor:!0,pullRequest:S,mutateList:y,sortQuery:l,setSortQuery:s},S.id))})})}var tt=require("@raycast/api");var Nn=require("@raycast/utils");var es=/\.(md|markdown|mdown|mkdn?)$/i;function Vn(e){let{octokit:a}=h(),[t,n]=e.nameWithOwner.split("/");return(0,Nn.useCachedPromise)(async(r,o)=>{try{let{data:l}=await a.repos.getReadme({owner:r,repo:o});if(l.encoding!=="base64"||!l.content)return{markdown:"> This README is too large to preview here. Open the repository in your browser to read it.",found:!0};let s=Buffer.from(l.content,"base64").toString("utf-8");return{markdown:es.test(l.name)?Yr(s,l.download_url??"",l.path):`\`\`\`
${s}
\`\`\``,found:!0}}catch(l){if(l.status===404)return{markdown:"",found:!1};throw l}},[t,n])}var yt=require("react/jsx-runtime");function ka({repository:e}){let{data:a,isLoading:t}=Vn(e),n=a&&!a.found?`# ${e.nameWithOwner}

> This repository doesn't have a README.`:a?.markdown??"";return(0,yt.jsx)(tt.Detail,{isLoading:t,navigationTitle:`${e.nameWithOwner} \xB7 README`,markdown:n,actions:(0,yt.jsxs)(tt.ActionPanel,{title:e.nameWithOwner,children:[(0,yt.jsx)(tt.Action.OpenInBrowser,{url:e.url}),(0,yt.jsx)(tt.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL"})]})})}var se=require("@raycast/api"),qn=require("@raycast/utils");var fe=require("react/jsx-runtime"),ts=25;function ja(e){let{github:a}=h(),[t,n]=e.repository.nameWithOwner.split("/"),{data:r,isLoading:o,pagination:l}=(0,qn.useCachedPromise)((i,u)=>async c=>{let I=(await a.repositoryReleases({owner:i,name:u,numberOfItems:ts,after:c.page>0?c.cursor:void 0})).repository?.releases;return{data:I?.nodes?.filter(M=>M!=null)??[],hasMore:I?.pageInfo?.hasNextPage??!1,cursor:I?.pageInfo?.endCursor??void 0}},[t,n]),s=Ue(r??[]);return(0,fe.jsx)(se.List,{isLoading:o,navigationTitle:e.repository.nameWithOwner,pagination:l,children:s.map(i=>(0,fe.jsx)(se.List.Item,{title:i.name||i.tagName,subtitle:i.tagName,actions:(0,fe.jsxs)(se.ActionPanel,{title:i.tagName,children:[i.description&&(0,fe.jsx)(se.Action.Push,{icon:se.Icon.Eye,title:"View Release Detail",target:(0,fe.jsx)(as,{release:i})}),(0,fe.jsx)(se.Action.OpenInBrowser,{url:i.url})]}),accessories:i.publishedAt?[{date:new Date(i.publishedAt),tooltip:`Published at: ${new Date(i.publishedAt).toLocaleString()}`}]:void 0},i.id))})}function as(e){return(0,fe.jsx)(se.Detail,{markdown:e.release.description,actions:(0,fe.jsx)(se.ActionPanel,{title:e.release.tagName,children:(0,fe.jsx)(se.Action.OpenInBrowser,{url:e.release.url})})})}var x=require("react/jsx-runtime");function za({repository:e,mutateList:a,onVisit:t,onUpdate:n,onRemove:r,setSortQuery:o,sortQuery:l,sortTypesData:s}){let{github:i}=h(),{baseClonePath:u,repositoryCloneProtocol:c,application:y}=(0,b.getPreferenceValues)(),{vscodeBuild:I}=(0,b.getPreferenceValues)(),M=I||"vscode";function S(g){let P={...e,viewerHasStarred:g,stargazerCount:Math.max(0,e.stargazerCount+(g?1:-1))};return n?.(P),P}async function C(){await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Starring repository",message:e.name});try{await i.addStar({repositoryId:e.id});let g=S(!0);await a(void 0,{optimisticUpdate(P){return Array.isArray(P)?P.map(E=>E.id===g.id?{...E,...g}:E):P}}),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Starred repository",message:e.name})}catch(g){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed starring repository",message:v(g)})}}async function R(){await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Removing star from repository",message:e.name});try{await i.removeStar({repositoryId:e.id});let g=S(!1);await a(void 0,{optimisticUpdate(P){return Array.isArray(P)?P.map(E=>E.id===g.id?{...E,...g}:E):P}}),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Removed star from repository",message:e.name})}catch(g){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed removing star from repository",message:v(g)})}}return(0,x.jsxs)(b.ActionPanel,{title:e.nameWithOwner,children:[(0,x.jsxs)(b.ActionPanel.Section,{children:[(0,x.jsx)(b.Action.OpenInBrowser,{url:e.url,onOpen:()=>t(e)}),(0,x.jsx)(b.ActionPanel.Submenu,{icon:b.Icon.Globe,title:"Open in Web IDE",shortcut:b.Keyboard.Shortcut.Common.Open,children:Vr.map(g=>(0,x.jsx)(b.Action.OpenInBrowser,{title:g.title,icon:g.icon||(0,Fn.getFavicon)(g.baseUrl),url:g.baseUrl+e.nameWithOwner,shortcut:g.shortcut,onOpen:()=>t(e)},g.title))}),u&&y&&(0,x.jsx)(b.Action,{icon:b.Icon.Terminal,title:"Clone and Open (Default Path)",onAction:()=>{t(e),qr(e)},shortcut:b.Keyboard.Shortcut.Common.CopyName}),(0,x.jsx)(b.Action.Push,{icon:b.Icon.Terminal,title:"Clone with Options (Choose Path)",target:(0,x.jsx)(Ca,{repository:e}),shortcut:{modifiers:["cmd","opt","shift"],key:"c"},onPush:()=>t(e)}),(0,x.jsx)(b.Action.Push,{icon:b.Icon.Download,title:"Download as ZIP",target:(0,x.jsx)(ha,{repository:e}),shortcut:{modifiers:["cmd","shift"],key:"d"},onPush:()=>t(e)}),(0,x.jsx)(b.Action.OpenInBrowser,{icon:{source:"vscode.svg",tintColor:b.Color.PrimaryText},title:"Clone in VS Code",url:`${M}://vscode.git/clone?url=${e.url}`,shortcut:b.Keyboard.Shortcut.Common.Copy,onOpen:()=>t(e)}),e.viewerHasStarred?(0,x.jsx)(b.Action,{title:"Unstar",icon:b.Icon.Star,onAction:R,shortcut:b.Keyboard.Shortcut.Common.Pin}):(0,x.jsx)(b.Action,{title:"Star",icon:{source:"star-filled.svg",tintColor:b.Color.PrimaryText},onAction:C,shortcut:b.Keyboard.Shortcut.Common.Pin})]}),(0,x.jsxs)(b.ActionPanel.Section,{title:"Open in Raycast",children:[(0,x.jsx)(b.Action.Push,{title:"Show Readme",icon:b.Icon.Book,shortcut:{modifiers:["cmd","opt"],key:"r"},target:(0,x.jsx)(ka,{repository:e}),onPush:()=>t(e)}),(0,x.jsx)(b.Action.Push,{title:"Show Issues",icon:{source:"issue-open.svg",tintColor:b.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"i"},target:(0,x.jsx)(Dn,{repo:e.nameWithOwner}),onPush:()=>t(e)}),(0,x.jsx)(b.Action.Push,{title:"Show Pull Requests",icon:{source:"pull-request-open.svg",tintColor:b.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"m"},target:(0,x.jsx)(On,{repo:e.nameWithOwner}),onPush:()=>t(e)}),(0,x.jsx)(b.Action.Push,{icon:b.Icon.List,title:"Show Releases",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,x.jsx)(ja,{repository:e}),onPush:()=>t(e)}),(0,x.jsx)(b.Action.Push,{icon:b.Icon.SpeechBubble,title:"Show Discussions",shortcut:{modifiers:["cmd","ctrl","opt"],key:"d"},target:(0,x.jsx)(In,{repository:e.nameWithOwner}),onPush:()=>t(e)})]}),(0,x.jsxs)(b.ActionPanel.Section,{title:"Open in Browser",children:[(0,x.jsx)(b.Action.OpenInBrowser,{icon:{source:"pull-request-open.svg",tintColor:b.Color.PrimaryText},title:"Open Pull Requests",url:`${e.url}/pulls`,shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>t(e)}),(0,x.jsx)(b.Action.OpenInBrowser,{icon:{source:"issue-open.svg",tintColor:b.Color.PrimaryText},title:"Open Issues",url:`${e.url}/issues`,shortcut:{modifiers:["cmd","shift"],key:"i"},onOpen:()=>t(e)}),(0,x.jsx)(b.Action.OpenInBrowser,{icon:{source:"book.svg",tintColor:b.Color.PrimaryText},title:"Open Wiki",url:`${e.url}/wiki`,shortcut:{modifiers:["cmd","shift"],key:"w"},onOpen:()=>t(e)}),(0,x.jsx)(b.Action.OpenInBrowser,{icon:{source:"project.svg",tintColor:b.Color.PrimaryText},title:"Open Projects",url:`${e.url}/projects`,shortcut:{modifiers:["cmd","shift","opt"],key:"p"},onOpen:()=>t(e)}),(0,x.jsx)(b.Action.OpenInBrowser,{icon:b.Icon.SpeechBubble,title:"Open Discussions",url:`${e.url}/discussions`,onOpen:()=>t(e)})]}),(0,x.jsxs)(b.ActionPanel.Section,{children:[(0,x.jsx)(b.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL",shortcut:b.Keyboard.Shortcut.Common.CopyPath}),(0,x.jsx)(b.Action.CopyToClipboard,{content:$r(e.nameWithOwner,c),title:"Copy Clone Command",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,x.jsx)(b.Action.CopyToClipboard,{content:e.nameWithOwner,title:"Copy Name with Owner",shortcut:b.Keyboard.Shortcut.Common.CopyName}),(0,x.jsx)(b.Action.CopyToClipboard,{content:e.name,title:"Copy Repository Name"}),(0,x.jsx)(b.Action.CopyToClipboard,{content:e.owner.login,title:"Copy Repository Owner"})]}),(0,x.jsx)(b.ActionPanel.Section,{children:(0,x.jsx)($e,{data:s,sortQuery:l,setSortQuery:o})}),r?(0,x.jsx)(b.ActionPanel.Section,{children:(0,x.jsx)(b.Action,{title:"Remove from Recently Visited",icon:b.Icon.Trash,style:b.Action.Style.Destructive,shortcut:b.Keyboard.Shortcut.Common.Remove,onAction:()=>r(e)})}):null]})}var Ga=require("react/jsx-runtime");function ua({repository:e,mutateList:a,onVisit:t,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:l,sortTypesData:s}){let i=F(e.owner),u=e.stargazerCount,c=e.pushedAt?new Date(e.pushedAt):e.updatedAt?new Date(e.updatedAt):void 0,y=[],I=e.primaryLanguage,M=c?(0,Qe.isToday)(c)?`${(0,Qe.differenceInHours)(Date.now(),c)}h`:(0,Qe.format)(c,"MMM d"):void 0;if(I||M){let C=[I?.name,M].filter(Boolean),R=[I?`Language: ${I.name}`:void 0,c?`Updated ${(0,Qe.formatDistanceToNow)(c,{addSuffix:!0})}`:void 0].filter(Boolean);y.push({text:C.join(" \u2022 "),tooltip:R.join(" \u2022 ")})}e.isArchived&&y.unshift({tag:{value:"",color:at.Color.Orange},icon:at.Icon.Tray,tooltip:"This repository is archived"}),e.isFork&&y.unshift({icon:{source:"fork.svg",tintColor:at.Color.Purple},tooltip:"This repository is a fork"});let S=e.viewerHasStarred?"\u2605":"\u2606";return(0,Ga.jsx)(at.List.Item,{icon:i.icon,title:e.nameWithOwner,...u>0?{subtitle:{value:`${S} ${u}`,tooltip:e.viewerHasStarred?"Starred \xB7 Number of Stars":"Number of Stars"}}:{},accessories:y,actions:(0,Ga.jsx)(za,{repository:e,onVisit:t,onUpdate:n,onRemove:r,mutateList:a,sortQuery:o,setSortQuery:l,sortTypesData:s})})}var W=require("@raycast/api");var Be=require("react/jsx-runtime");function Ha(e){let a=ke(),t=a?.organizations?.nodes?.filter(o=>o!=null)??[],n=t.map(o=>o.login),r=t.length>1;return(0,Be.jsxs)(W.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,Be.jsxs)(W.List.Dropdown.Section,{children:[(0,Be.jsx)(W.List.Dropdown.Item,{title:"All Repositories",icon:W.Icon.List,value:""}),a&&t.length>0?(0,Be.jsx)(W.List.Dropdown.Item,{title:"My Repositories",icon:W.Icon.Person,value:Aa({userLogin:a.login,orgLogins:n})}):null,r?(0,Be.jsx)(W.List.Dropdown.Item,{title:"My Organizations",icon:W.Icon.Building,value:Aa({orgLogins:n})}):null]}),(0,Be.jsxs)(W.List.Dropdown.Section,{children:[a?(0,Be.jsx)(W.List.Dropdown.Item,{icon:{source:a.avatarUrl??W.Icon.PersonCircle,mask:W.Image.Mask.Circle},title:a.login,value:`user:${a.login}`}):null,t.map(o=>(0,Be.jsx)(W.List.Dropdown.Item,{icon:{source:o.avatarUrl??W.Icon.PersonCircle,mask:W.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var kn=require("@raycast/utils");var jn=(0,kn.withAccessToken)(Dr);var ze=require("react/jsx-runtime");function rs(){let{github:e}=h(),a=(0,dt.getPreferenceValues)(),[t,n]=(0,Re.useState)(""),[r,o]=(0,Re.useState)(null),[l,s]=(0,pa.useCachedState)("sort-query",kr,{cacheNamespace:"github-search-repo"}),i=Ea,{data:u,visitRepository:c,updateRepository:y,removeRepository:I}=Fr(t,r),M=(0,Re.useMemo)(()=>`${r} ${t} ${l} fork:${a.includeForks} ${a.includeArchived?"":"archived:false"}`.toLowerCase(),[t,r,l,a.includeForks,a.includeArchived]),{data:S,isLoading:C,error:R,mutate:g,pagination:P}=(0,pa.useCachedPromise)(j=>async We=>{if(!j)return{data:[],hasMore:!1};let rt=await e.searchRepositories({query:j,numberOfItems:hr(),after:We.page>0?We.cursor:void 0});return{data:ln(rt.search.nodes),hasMore:rt.search.pageInfo.hasNextPage,cursor:rt.search.pageInfo.endCursor??void 0}},[t.trim()||r?.trim()?M:null],{keepPreviousData:!1}),E=(0,Re.useMemo)(()=>Ue(S??[]),[S]),f=(0,Re.useMemo)(()=>new Set(E.map(j=>j.id)),[E]);(0,Re.useEffect)(()=>u.forEach(j=>E.find(We=>We.id===j.id&&c(We))),[E]);let D=(0,Re.useMemo)(()=>u.filter(j=>f.has(j.id)),[u,f]),T=(0,Re.useMemo)(()=>new Set(D.map(j=>j.id)),[D]),X=(0,Re.useMemo)(()=>E.filter(j=>!T.has(j.id)),[T,E]),Le=t.trim()&&E.length>0?D:u;return(0,ze.jsxs)(dt.List,{isLoading:C,searchBarPlaceholder:"Search in public and private repositories",onSearchTextChange:n,searchBarAccessory:(0,ze.jsx)(Ha,{onFilterChange:o}),throttle:!a.disableThrottle,pagination:P,children:[Le.length>0?(0,ze.jsx)(dt.List.Section,{title:t.trim()?"Visited Repositories":"Recent Visited Repositories",subtitle:String(Le.length),children:Le.map(j=>(0,ze.jsx)(ua,{repository:j,onVisit:c,onUpdate:y,onRemove:I,mutateList:g,sortQuery:l,setSortQuery:s,sortTypesData:i},j.id))}):null,S?(0,ze.jsx)(dt.List.Section,{title:t?"Search Results":"Found Repositories",subtitle:`${X.length}`,children:X.map(j=>(0,ze.jsx)(ua,{repository:j,onVisit:c,onUpdate:y,mutateList:g,sortQuery:l,setSortQuery:s,sortTypesData:i},j.id))}):null,(0,ze.jsx)(Ra,{searchText:t,isLoading:C,error:R})]})}var ns=jn(rs);
