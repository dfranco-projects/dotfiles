"use strict";var Mr=Object.create;var st=Object.defineProperty;var mr=Object.getOwnPropertyDescriptor;var Rr=Object.getOwnPropertyNames;var Ar=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty;var Lt=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var we=(e,a)=>{for(var t in a)st(e,t,{get:a[t],enumerable:!0})},it=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Rr(a))!Pr.call(e,r)&&r!==t&&st(e,r,{get:()=>a[r],enumerable:!(n=mr(a,r))||n.enumerable});return e},G=(e,a,t)=>(it(e,a,"default"),t&&it(t,a,"default")),Y=(e,a,t)=>(t=e!=null?Mr(Ar(e)):{},it(a||!e||!e.__esModule?st(t,"default",{value:e,enumerable:!0}):t,e)),Er=e=>it(st({},"__esModule",{value:!0}),e);var H={};we(H,{default:()=>ia.default});var ia,lt=Lt(()=>{G(H,require("formdata-polyfill/esm.min.js"));ia=Y(require("formdata-polyfill/esm.min.js"))});var X={};we(X,{default:()=>la.default});var la,Vt=Lt(()=>{G(X,require("fetch-blob/from.js"));la=Y(require("fetch-blob/from.js"))});var ya={};we(ya,{toFormData:()=>_r});function hr(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function _r(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Nt(t[1]||t[2]),r,o,l,s,u,p,c=[],d=new H.FormData,g=R=>{l+=A.decode(R,{stream:!0})},U=R=>{c.push(R)},y=()=>{let R=new X.File(c,p,{type:u});d.append(s,R)},h=()=>{d.append(s,l)},A=new TextDecoder("utf-8");A.decode(),n.onPartBegin=function(){n.onPartData=g,n.onPartEnd=h,r="",o="",l="",s="",u="",p=null,c.length=0},n.onHeaderField=function(R){r+=A.decode(R,{stream:!0})},n.onHeaderValue=function(R){o+=A.decode(R,{stream:!0})},n.onHeaderEnd=function(){if(o+=A.decode(),r=r.toLowerCase(),r==="content-disposition"){let R=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);R&&(s=R[2]||R[3]||""),p=hr(o),p&&(n.onPartData=U,n.onPartEnd=y)}else r==="content-type"&&(u=o);o="",r=""};for await(let R of e)n.write(R);return n.end(),d}var ce,D,ca,Pe,yt,dt,Cr,ze,fr,Dr,xr,Ur,De,Nt,da=Lt(()=>{Vt();lt();ce=0,D={START_BOUNDARY:ce++,HEADER_FIELD_START:ce++,HEADER_FIELD:ce++,HEADER_VALUE_START:ce++,HEADER_VALUE:ce++,HEADER_VALUE_ALMOST_DONE:ce++,HEADERS_ALMOST_DONE:ce++,PART_DATA_START:ce++,PART_DATA:ce++,END:ce++},ca=1,Pe={PART_BOUNDARY:ca,LAST_BOUNDARY:ca*=2},yt=10,dt=13,Cr=32,ze=45,fr=58,Dr=97,xr=122,Ur=e=>e|32,De=()=>{},Nt=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=De,this.onHeaderField=De,this.onHeadersEnd=De,this.onHeaderValue=De,this.onPartBegin=De,this.onPartData=De,this.onPartEnd=De,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:s,index:u,state:p,flags:c}=this,d=this.boundary.length,g=d-1,U=a.length,y,h,A=m=>{this[m+"Mark"]=t},R=m=>{delete this[m+"Mark"]},v=(m,N,_,re)=>{(N===void 0||N!==_)&&this[m](re&&re.subarray(N,_))},q=(m,N)=>{let _=m+"Mark";_ in this&&(N?(v(m,this[_],t,a),delete this[_]):(v(m,this[_],a.length,a),this[_]=0))};for(t=0;t<n;t++)switch(y=a[t],p){case D.START_BOUNDARY:if(u===l.length-2){if(y===ze)c|=Pe.LAST_BOUNDARY;else if(y!==dt)return;u++;break}else if(u-1===l.length-2){if(c&Pe.LAST_BOUNDARY&&y===ze)p=D.END,c=0;else if(!(c&Pe.LAST_BOUNDARY)&&y===yt)u=0,v("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}y!==l[u+2]&&(u=-2),y===l[u+2]&&u++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,A("onHeaderField"),u=0;case D.HEADER_FIELD:if(y===dt){R("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(u++,y===ze)break;if(y===fr){if(u===1)return;q("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(h=Ur(y),h<Dr||h>xr)return;break;case D.HEADER_VALUE_START:if(y===Cr)break;A("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:y===dt&&(q("onHeaderValue",!0),v("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(y!==yt)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(y!==yt)return;v("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,A("onPartData");case D.PART_DATA:if(r=u,u===0){for(t+=g;t<U&&!(a[t]in s);)t+=d;t-=g,y=a[t]}if(u<l.length)l[u]===y?(u===0&&q("onPartData",!0),u++):u=0;else if(u===l.length)u++,y===dt?c|=Pe.PART_BOUNDARY:y===ze?c|=Pe.LAST_BOUNDARY:u=0;else if(u-1===l.length)if(c&Pe.PART_BOUNDARY){if(u=0,y===yt){c&=~Pe.PART_BOUNDARY,v("onPartEnd"),v("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&Pe.LAST_BOUNDARY&&y===ze?(v("onPartEnd"),p=D.END,c=0):u=0;if(u>0)o[u-1]=y;else if(r>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);v("onPartData",0,r,m),r=0,A("onPartData"),t--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}q("onHeaderField"),q("onHeaderValue"),q("onPartData"),this.index=u,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var lo={};we(lo,{default:()=>po});module.exports=Er(lo);var tt=require("@raycast/api"),_t=require("@raycast/utils"),Ir=require("lodash"),oa=require("react");var Ba=require("@octokit/rest"),Oa=require("@raycast/api"),La=require("@raycast/utils"),qa=require("graphql-request");var Ua=Y(require("node:http"),1),ha=Y(require("node:https"),1),Ue=Y(require("node:zlib"),1),ee=Y(require("node:stream"),1),$e=require("node:buffer");var Fe={};we(Fe,{default:()=>ut.default});G(Fe,require("data-uri-to-buffer"));var ut=Y(require("data-uri-to-buffer"));var oe=Y(require("node:stream"),1),me=require("node:util"),J=require("node:buffer");var ke={};we(ke,{default:()=>pt.default});G(ke,require("fetch-blob"));var pt=Y(require("fetch-blob"));lt();var Me=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var $=class extends Me{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var ct=Symbol.toStringTag,qt=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[ct]==="URLSearchParams",je=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[ct]),sa=e=>typeof e=="object"&&(e[ct]==="AbortSignal"||e[ct]==="EventTarget"),ua=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},pa=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var vr=(0,me.promisify)(oe.default.pipeline),Q=Symbol("Body internals"),ye=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:qt(a)?a=J.Buffer.from(a.toString()):je(a)||J.Buffer.isBuffer(a)||(me.types.isAnyArrayBuffer(a)?a=J.Buffer.from(a):ArrayBuffer.isView(a)?a=J.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof oe.default||(a instanceof H.FormData?(a=(0,H.formDataToBlob)(a),n=a.type.split("=")[1]):a=J.Buffer.from(String(a))));let r=a;J.Buffer.isBuffer(a)?r=oe.default.Readable.from(a):je(a)&&(r=oe.default.Readable.from(a.stream())),this[Q]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof oe.default&&a.on("error",o=>{let l=o instanceof Me?o:new $(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Q].error=l})}get body(){return this[Q].stream}get bodyUsed(){return this[Q].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await Ft(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new H.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:t}=await Promise.resolve().then(()=>(da(),ya));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[Q].body&&this[Q].body.type||"",t=await this.arrayBuffer();return new pt.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Ft(this);return new TextDecoder().decode(a)}buffer(){return Ft(this)}};ye.prototype.buffer=(0,me.deprecate)(ye.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(ye.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,me.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Ft(e){if(e[Q].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Q].disturbed=!0,e[Q].error)throw e[Q].error;let{body:a}=e;if(a===null)return J.Buffer.alloc(0);if(!(a instanceof oe.default))return J.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new $(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof Me?r:new $(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?J.Buffer.from(t.join("")):J.Buffer.concat(t,n)}catch(r){throw new $(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new $(`Premature close of server response while trying to fetch ${e.url}`)}var Be=(e,a)=>{let t,n,{body:r}=e[Q];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof oe.default&&typeof r.getBoundary!="function"&&(t=new oe.PassThrough({highWaterMark:a}),n=new oe.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[Q].stream=t,r=n),r},Tr=(0,me.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),St=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":qt(e)?"application/x-www-form-urlencoded;charset=UTF-8":je(e)?e.type||null:J.Buffer.isBuffer(e)||me.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${a[Q].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Tr(e)}`:e instanceof oe.default?null:"text/plain;charset=UTF-8",Sa=e=>{let{body:a}=e[Q];return a===null?0:je(a)?a.size:J.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},ba=async(e,{body:a})=>{a===null?e.end():await vr(a,e)};var kt=require("node:util"),Ge=Y(require("node:http"),1),bt=typeof Ge.default.validateHeaderName=="function"?Ge.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},jt=typeof Ge.default.validateHeaderValue=="function"?Ge.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},Z=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!kt.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||kt.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(bt(n),jt(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,s)=>(bt(l),jt(l,String(s)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return l=>(bt(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function Ia(e=[]){return new Z(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return bt(a),jt(a,String(t)),!0}catch{return!1}}))}var wr=new Set([301,302,303,307,308]),It=e=>wr.has(e);var pe=Symbol("Response internals"),ie=class e extends ye{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new Z(t.headers);if(a!==null&&!r.has("Content-Type")){let o=St(a,this);o&&r.append("Content-Type",o)}this[pe]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[pe].type}get url(){return this[pe].url||""}get status(){return this[pe].status}get ok(){return this[pe].status>=200&&this[pe].status<300}get redirected(){return this[pe].counter>0}get statusText(){return this[pe].statusText}get headers(){return this[pe].headers}get highWaterMark(){return this[pe].highWaterMark}clone(){return new e(Be(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!It(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[pe].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new Z(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ie.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var fa=require("node:url"),Da=require("node:util");var ga=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var ma=require("node:net");function Ma(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var Ra=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Aa="strict-origin-when-cross-origin";function Pa(e){if(!Ra.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Br(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,ma.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Oe(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Br(e)}function Ea(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Ma(r),l=Ma(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),t&&(l=t(l));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return Oe(o)&&!Oe(s)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Oe(o)&&!Oe(s)?"no-referrer":l;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:l;case"no-referrer-when-downgrade":return Oe(o)&&!Oe(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Ca(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&Ra.has(n)&&(t=n);return t}var F=Symbol("Request internals"),He=e=>typeof e=="object"&&typeof e[F]=="object",Or=(0,Da.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),xe=class e extends ye{constructor(a,t={}){let n;if(He(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!He(t)&&"data"in t&&Or(),(t.body!=null||He(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:He(a)&&a.body!==null?Be(a):null;super(o,{size:t.size||a.size||0});let l=new Z(t.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let p=St(o,this);p&&l.set("Content-Type",p)}let s=He(a)?a.signal:null;if("signal"in t&&(s=t.signal),s!=null&&!sa(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=t.referrer==null?a.referrer:t.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[F]={method:r,redirect:t.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:s,referrer:u},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[F].method}get url(){return(0,fa.format)(this[F].parsedURL)}get headers(){return this[F].headers}get redirect(){return this[F].redirect}get signal(){return this[F].signal}get referrer(){if(this[F].referrer==="no-referrer")return"";if(this[F].referrer==="client")return"about:client";if(this[F].referrer)return this[F].referrer.toString()}get referrerPolicy(){return this[F].referrerPolicy}set referrerPolicy(a){this[F].referrerPolicy=Pa(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(xe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var xa=e=>{let{parsedURL:a}=e[F],t=new Z(e[F].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Sa(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Aa),e.referrer&&e.referrer!=="no-referrer"?e[F].referrer=Ea(e):e[F].referrer="no-referrer",e[F].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=ga(a),l={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var gt=class extends Me{constructor(a,t="aborted"){super(a,t)}};lt();Vt();var Lr=new Set(["data:","http:","https:"]);async function Mt(e,a){return new Promise((t,n)=>{let r=new xe(e,a),{parsedURL:o,options:l}=xa(r);if(!Lr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let y=(0,ut.default)(r.url),h=new ie(y,{headers:{"Content-Type":y.typeFull}});t(h);return}let s=(o.protocol==="https:"?ha.default:Ua.default).request,{signal:u}=r,p=null,c=()=>{let y=new gt("The operation was aborted.");n(y),r.body&&r.body instanceof ee.default.Readable&&r.body.destroy(y),!(!p||!p.body)&&p.body.emit("error",y)};if(u&&u.aborted){c();return}let d=()=>{c(),U()},g=s(o.toString(),l);u&&u.addEventListener("abort",d);let U=()=>{g.abort(),u&&u.removeEventListener("abort",d)};g.on("error",y=>{n(new $(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),U()}),qr(g,y=>{p&&p.body&&p.body.destroy(y)}),process.version<"v14"&&g.on("socket",y=>{let h;y.prependListener("end",()=>{h=y._eventsCount}),y.prependListener("close",A=>{if(p&&h<y._eventsCount&&!A){let R=new Error("Premature close");R.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",R)}})}),g.on("response",y=>{g.setTimeout(0);let h=Ia(y.rawHeaders);if(It(y.statusCode)){let m=h.get("Location"),N=null;try{N=m===null?null:new URL(m,r.url)}catch{if(r.redirect!=="manual"){n(new $(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),U();return}}switch(r.redirect){case"error":n(new $(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),U();return;case"manual":break;case"follow":{if(N===null)break;if(r.counter>=r.follow){n(new $(`maximum redirect reached at: ${r.url}`,"max-redirect")),U();return}let _={headers:new Z(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Be(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!ua(r.url,N)||!pa(r.url,N))for(let fe of["authorization","www-authenticate","cookie","cookie2"])_.headers.delete(fe);if(y.statusCode!==303&&r.body&&a.body instanceof ee.default.Readable){n(new $("Cannot follow redirect with body being a readable stream","unsupported-redirect")),U();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(_.method="GET",_.body=void 0,_.headers.delete("content-length"));let re=Ca(h);re&&(_.referrerPolicy=re),t(Mt(new xe(N,_))),U();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}u&&y.once("end",()=>{u.removeEventListener("abort",d)});let A=(0,ee.pipeline)(y,new ee.PassThrough,m=>{m&&n(m)});process.version<"v12.10"&&y.on("aborted",d);let R={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:h,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},v=h.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||v===null||y.statusCode===204||y.statusCode===304){p=new ie(A,R),t(p);return}let q={flush:Ue.default.Z_SYNC_FLUSH,finishFlush:Ue.default.Z_SYNC_FLUSH};if(v==="gzip"||v==="x-gzip"){A=(0,ee.pipeline)(A,Ue.default.createGunzip(q),m=>{m&&n(m)}),p=new ie(A,R),t(p);return}if(v==="deflate"||v==="x-deflate"){let m=(0,ee.pipeline)(y,new ee.PassThrough,N=>{N&&n(N)});m.once("data",N=>{(N[0]&15)===8?A=(0,ee.pipeline)(A,Ue.default.createInflate(),_=>{_&&n(_)}):A=(0,ee.pipeline)(A,Ue.default.createInflateRaw(),_=>{_&&n(_)}),p=new ie(A,R),t(p)}),m.once("end",()=>{p||(p=new ie(A,R),t(p))});return}if(v==="br"){A=(0,ee.pipeline)(A,Ue.default.createBrotliDecompress(),m=>{m&&n(m)}),p=new ie(A,R),t(p);return}p=new ie(A,R),t(p)}),ba(g,r).catch(n)})}function qr(e,a){let t=$e.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",l=>{let{headers:s}=l;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",l=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",a(p)}},u=p=>{r=$e.Buffer.compare(p.slice(-5),t)===0,!r&&o&&(r=$e.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&$e.Buffer.compare(p.slice(-2),t.slice(3))===0),o=p};l.prependListener("close",s),l.on("data",u),e.on("close",()=>{l.removeListener("close",s),l.removeListener("data",u)})})}var b=Y(require("graphql-tag")),Qe=b.default`
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
`,Vr=b.default`
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
  ${Qe}
`,de=b.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,We=b.default`
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
  ${de}
`,mt=b.default`
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
  ${We}
  ${Qe}
  ${de}
`,Nr=b.default`
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
  ${We}
  ${Qe}
  ${de}
`,Fr=b.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,_a=b.default`
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
  ${We}
  ${Fr}
`,va=b.default`
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
  ${Qe}
  ${We}
  ${de}
`,kr=b.default`
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
  ${Qe}
  ${We}
  ${de}
`,jr=b.default`
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
`,Ta=b.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,zt=b.default`
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
`,zr=b.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Gr=b.default`
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
`,Hr=b.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,$r=b.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Qr=b.default`
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
  ${Vr}
`,Wr=b.default`
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
`,Kr=b.default`
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
  ${de}
`,Yr=b.default`
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
`,Xr=b.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Nr}
`,Jr=b.default`
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
  ${mt}
`,Zr=b.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${mt}
`,en=b.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,tn=b.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,an=b.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,rn=b.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,nn=b.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,on=b.default`
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
  ${mt}
`,sn=b.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,un=b.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${_a}
`,pn=b.default`
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
  ${va}
`,ln=b.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${kr}
`,cn=b.default`
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
  ${de}
`,yn=b.default`
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
`,dn=b.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${jr}
`,Sn=b.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,bn=b.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,In=b.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,gn=b.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Mn=b.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,mn=b.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Rn=b.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,An=b.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Pn=b.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,En=b.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Cn=b.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,fn=b.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Dn=b.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,xn=b.default`
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
`,Un=b.default`
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
  ${va}
`,hn=b.default`
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
  ${zt}
`,_n=b.default`
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
  ${zt}
`,vn=b.default`
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
`,Tn=b.default`
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
`,wn=b.default`
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
  ${Ta}
  ${de}
`,Bn=b.default`
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
  ${Ta}
`,On=b.default`
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
  ${mt}
`,Ln=b.default`
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
  ${zr}
`,qn=b.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Vn=b.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Nn=b.default`
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
  ${zt}
`,Fn=b.default`
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
  ${de}
  ${_a}
`,kn=b.default`
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
  ${de}
`,jn=b.default`
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
`,zn=(e,a,t,n)=>e();function wa(e,a=zn){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:Gr,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:Hr,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:$r,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:Qr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:Wr,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:Kr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:Yr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:Xr,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:Jr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:Zr,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:en,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:tn,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:an,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:rn,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:nn,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:on,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:sn,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:un,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:pn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:ln,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:cn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:yn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:dn,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:Sn,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:bn,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:In,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:gn,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:Mn,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:mn,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Rn,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:An,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Pn,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:En,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:Cn,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:fn,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:Dn,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:xn,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:Un,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:hn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:_n,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:vn,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:Tn,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:wn,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:Bn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:On,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:Ln,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:qn,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:Vn,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:Nn,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:Fn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:kn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:jn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var Gt=null,Ht=null,Va=null,Gn=(0,Oa.getPreferenceValues)();function Hn({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Va=e,Gt=wa(new qa.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),Ht=new Ba.Octokit({auth:e,request:{fetch:Mt}})}var Na=La.OAuthService.github({personalAccessToken:Gn.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Hn});function B(){if(!Gt||!Ht)throw new Error("GitHub clients not initialized");return{github:Gt,octokit:Ht,token:Va}}var Ee=require("@raycast/api"),$n=Y(require("react")),ka=require("react/jsx-runtime");function Qn(e){let a=e.min||1,t=e.max||100,n=e.default||10,o=(0,Ee.getPreferenceValues)()[e.name]||"",l=Number(o);return isNaN(l)||l<a||l>t?n:l}function Fa(){return Math.min(Qn({name:"numberOfResults",default:50}),25)}var Re=require("@raycast/api");var M=require("@raycast/api"),le=require("@raycast/utils"),_e=require("react");var x=require("@raycast/api"),pr=require("@raycast/utils"),lr=require("date-fns");var P=require("@raycast/api"),za=require("lodash");function Rt(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}var Ke=require("@raycast/api");function te(e){return e?{icon:{source:e.avatarUrl??Ke.Icon.Person,mask:Ke.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Ke.Icon.Person,text:"Unknown"}}function At(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let a=e;throw new Error(`Unknown merge method: ${a}`)}}}function Ye(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:P.Color.Purple},text:"Merged",color:P.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:P.Color.Red},text:"Closed",color:P.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:P.Color.SecondaryText},text:"Draft",color:P.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:P.Color.Orange},text:"In Merge Queue",color:P.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:P.Color.Green},text:"Open",color:P.Color.Green}}function Pt(e){return te(e.author)}function Ga(e){let a=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let l;"githubUsername"in r&&(l=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...te({name:o,login:l,avatarUrl:s})}}}),t=(0,za.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...te(n?.author)})),"id");return[...a??[],...t??[]]}function Ha(e){let a=e.comments.totalCount,t=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return a+t+n}function Et(e){let a=Rt(e);return a?{icon:P.Icon[a.icon],tooltip:`Checks: ${a.text}`}:null}function $a(e){switch(e){case"added":return{icon:{source:P.Icon.PlusCircle,tintColor:P.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:P.Icon.MinusCircle,tintColor:P.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:P.Icon.ArrowRight,tintColor:P.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:P.Icon.CopyClipboard,tintColor:P.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:P.Icon.Circle,tintColor:P.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Changed"};default:return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Modified"}}}var $t=400;function Qa(e){let a=e.split(`
`);return a.length<=$t?{patch:e,remainingLines:0}:{patch:a.slice(0,$t).join(`
`),remainingLines:a.length-$t}}function Wa(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:P.Icon.Eye,tintColor:P.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:P.Icon.CheckCircle,tintColor:P.Color.Green},tooltip:"Approved"};default:return null}}var Ka=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Ya="sort:updated-desc";function Xa(e){return[...new Map(e.map(a=>[a.id,a])).values()]}function Se(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var Ja=require("@raycast/utils");function Ce(){let{github:e}=B(),{data:a}=(0,Ja.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var i=require("@raycast/api"),Ve=require("@raycast/utils"),qe=require("react");function T(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var O=require("@raycast/api"),Ct=require("@raycast/utils");var be=require("react/jsx-runtime");function Qt({pullRequest:e,mutate:a}){let{github:t}=B(),{pop:n}=(0,O.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,Ct.useForm)({async onSubmit(l){try{await(0,O.showToast)({style:O.Toast.Style.Animated,title:"Adding Review"}),await t.addPullRequestReview({nodeId:e.id,body:l.comment,event:l.event}),await a(),n(),await(0,O.showToast)({style:O.Toast.Style.Success,title:"Review added"})}catch(s){await(0,O.showToast)({style:O.Toast.Style.Failure,title:"Failed to add review",message:T(s)})}},validation:{comment:Ct.FormValidation.Required}});return(0,be.jsxs)(O.Form,{actions:(0,be.jsx)(O.ActionPanel,{children:(0,be.jsx)(O.Action.SubmitForm,{title:"Submit",icon:O.Icon.Plus,onSubmit:r})}),children:[(0,be.jsx)(O.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,be.jsxs)(O.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,be.jsx)(O.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,be.jsx)(O.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,be.jsx)(O.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var Dt=require("node:child_process"),ar=require("node:fs"),rr=Y(require("node:path")),Kt=require("node:util"),f=require("@raycast/api"),Le=require("@raycast/utils");var ft=require("node:child_process");var er=require("node:util"),se=require("@raycast/api"),Wn=require("@raycast/utils");function Wt(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(t=>!!t).map(t=>`org:${t}`)].join(" ")}var ki=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:se.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:se.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:se.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:se.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:se.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:se.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:se.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:se.Color.PrimaryText}}];var Kn=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Yn=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Xn=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],ji=Kn[0].value,zi=Yn[0].value,Gi=Xn[0].value;var tr=(e,a,t)=>{let n=t?.gitFlags??[],r=t?.targetDir??"",o=["clone",...n,Jn(e,a)];return r&&o.push(r),o};var Hi=(0,er.promisify)(ft.execFile);var Xe="\x1B",Za="\x07",$i=new RegExp(`${Xe}][^${Za}${Xe}]*(?:${Za}|${Xe}\\\\)`,"g"),Qi=new RegExp(`${Xe}\\[[0-9;?]*[A-Za-z]`,"g"),Wi=new RegExp(`${Xe}\\([0-9A-Za-z]`,"g");var Jn=(e,a)=>a==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;var he=require("react/jsx-runtime");function Yt({pullRequest:e}){let{repositoryCloneProtocol:a}=(0,f.getPreferenceValues)(),{itemProps:t,handleSubmit:n}=(0,Le.useForm)({async onSubmit(r){let o=e.repository.name,l=rr.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,f.showToast)({style:f.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let u=(0,Kt.promisify)(Dt.exec),p=(0,Kt.promisify)(Dt.execFile);try{if((0,ar.existsSync)(l)){await(0,f.showToast)({title:`Switching to branch ${s}`,message:`in ${l}`,style:f.Toast.Style.Animated});let{stdout:c}=await u("git remote",{cwd:l}),d=c.trim().split(`
`)[0]||"origin";await u(`git fetch ${d} ${s}`,{cwd:l}),await u(`git checkout ${s}`,{cwd:l}),await u(`git reset --hard ${d}/${s}`,{cwd:l}),await(0,f.showToast)({style:f.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,f.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${l}`,style:f.Toast.Style.Animated}),await p("git",tr(e.repository.nameWithOwner,a,{gitFlags:["-b",s],targetDir:l})),await(0,f.showToast)({style:f.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,f.open)(l),await(0,f.popToRoot)(),await(0,f.closeMainWindow)()}catch(c){if(c instanceof Error&&c.message.includes("Repository not found")){await(0,Le.showFailureToast)(c,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(c instanceof Error&&c.message.includes("already exists")){await(0,Le.showFailureToast)(c,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,Le.showFailureToast)(c,{title:"Failed checking out pull request"})}}});return(0,he.jsxs)(f.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,he.jsx)(f.ActionPanel,{children:(0,he.jsx)(f.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,he.jsx)(f.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,he.jsx)(f.Form.FilePicker,{...t.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var j=require("@raycast/api"),nr=require("@raycast/utils"),xt=require("date-fns");var ue=require("react/jsx-runtime");function Xt({pullRequest:e}){let{github:a}=B(),{data:t,isLoading:n,pagination:r}=(0,nr.useCachedPromise)(l=>async({cursor:s})=>{let p=(await a.pullRequestCommits({nodeId:l.id,numberOfItems:25,before:s})).node,c=p.commits.nodes?.filter(d=>d!=null)??[];return c.sort((d,g)=>{let U=d.commit.authoredDate,y=g.commit.authoredDate;return(0,xt.compareDesc)(new Date(U),new Date(y))}),{data:c,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((t??[]).map(l=>[l.commit.id,l])).values()];return(0,ue.jsx)(j.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(l=>{let s=l.commit,u=new Date(s.authoredDate),p=[{date:u,tooltip:(0,xt.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let d=Et(s.statusCheckRollup.state);d&&p.unshift(d)}let c;if(s.author){let d={source:s.author.avatarUrl,mask:j.Image.Mask.Circle};c=s.author.name?{value:d,tooltip:s.author.name}:d}return(0,ue.jsx)(j.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:p,...c?{icon:c}:{},actions:(0,ue.jsxs)(j.ActionPanel,{children:[(0,ue.jsx)(j.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,ue.jsx)(j.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,ue.jsxs)(j.ActionPanel.Section,{children:[(0,ue.jsx)(j.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,ue.jsx)(j.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,ue.jsx)(j.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,ue.jsx)(j.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{modifiers:["ctrl","shift"],key:"."}})]})]})},s.id)})})}var ir=require("node:crypto"),V=require("@raycast/api"),Ut=require("@raycast/utils");var z=require("react/jsx-runtime"),or=100,Zn=4;function Jt({pullRequest:e}){let{octokit:a}=B(),{data:t,isLoading:n,pagination:r}=(0,Ut.useCachedPromise)((s,u,p)=>async({page:c})=>{let{data:d}=await a.pulls.listFiles({owner:s,repo:u,pull_number:p,per_page:or,page:c+1});return{data:d,hasMore:d.length===or}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,Ut.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=t??[],l="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,z.jsxs)(V.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,z.jsx)(V.List.Section,{title:Se(o.length,"file",{withNumber:!0}),subtitle:l,children:o.map(s=>{let u=$a(s.status);return(0,z.jsx)(V.List.Item,{title:s.filename,icon:{value:u.icon,tooltip:u.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:V.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:V.Color.Red}}],detail:(0,z.jsx)(V.List.Item.Detail,{markdown:eo(s)}),actions:(0,z.jsxs)(V.ActionPanel,{title:s.filename,children:[(0,z.jsx)(V.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${ao(s.filename)}`}),(0,z.jsx)(V.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,z.jsxs)(V.ActionPanel.Section,{children:[(0,z.jsx)(V.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{modifiers:["cmd","shift"],key:"."}}),s.patch?(0,z.jsx)(V.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{modifiers:["cmd","shift"],key:","}}):null]})]})},s.sha+s.filename)})}),(0,z.jsx)(V.List.EmptyView,{icon:V.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,z.jsx)(V.ActionPanel,{children:(0,z.jsx)(V.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function eo(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:a,remainingLines:t}=Qa(e.patch),n=to(a),r=`${n}diff
${a}
${n}`;return t===0?r:`${r}

_\u2026 truncated, ${Se(t,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function to(e){let a=0;for(let[t]of e.matchAll(/`+/g))a=Math.max(a,t.length);return"`".repeat(Math.max(Zn,a+1))}function ao(e){return(0,ir.createHash)("sha256").update(e).digest("hex")}var W=require("@raycast/api"),Ie=require("react/jsx-runtime"),ur=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,Ie.jsxs)(W.ActionPanel.Submenu,{title:"Sort by",icon:W.Icon.ArrowUp,shortcut:W.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,Ie.jsx)(sr,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,Ie.jsx)(W.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,Ie.jsx)(sr,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,Ie.jsx)(Ie.Fragment,{}),sr=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,Ie.jsx)(W.Action,{title:e,icon:t===a?{source:W.Icon.CheckCircle,tintColor:W.Color.Green}:W.Icon.Circle,onAction:()=>n(a)});var I=require("react/jsx-runtime");function Je({pullRequest:e,viewer:a,mutateList:t,mutateDetail:n,children:r,sortQuery:o,setSortQuery:l}){let{github:s}=B();async function u(){t&&await t(),n&&await n()}async function p(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed reopening pull request",message:T(C)})}}async function c(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:T(C)})}}async function d(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing pull request",message:T(C)})}}async function g(C){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:C}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(K){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed merging pull request",message:T(K)})}}async function U(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:T(C)})}}async function y(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:T(C)})}}async function h(C){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:C}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(K){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed enabling auto-merge",message:T(K)})}}async function A(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(C){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed disabling auto-merge",message:T(C)})}}async function R(C){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Assigning to me"});let K=e.assignees.nodes?.filter(ne=>!!ne).map(ne=>ne?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...K,C]}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Assigned to me"})}catch(K){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed assigning to me",message:T(K)})}}async function v(C){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Un-assigning from me"});let K=e.assignees.nodes?.filter(ne=>!!ne).map(ne=>ne?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:K?.filter(ne=>ne!==C)}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Un-assigned from me"})}catch(K){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed un-assigning from me",message:T(K)})}}let q=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",m=!e.closed&&!e.merged,N=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===a?.login:!1,_=m&&e.isDraft&&N,re=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),fe=m&&e.repository.autoMergeAllowed,at=q||fe,vt=te(a),rt=e.assignees.nodes?.some(C=>C?.isViewer),{isOpenInBrowser:Tt}=(0,i.getPreferenceValues)(),nt=(0,I.jsx)(i.Action.OpenInBrowser,{url:e.permalink}),[ot,wt]=Tt?[nt,r]:[r,nt];return(0,I.jsxs)(i.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[ot,wt,(0,I.jsx)(i.Action.Push,{icon:i.Icon.Document,title:"Add Review",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,I.jsx)(Qt,{pullRequest:e,mutate:u})}),(0,I.jsx)(i.Action.Push,{icon:{source:"commit.svg",tintColor:i.Color.PrimaryText},title:"See Commits",shortcut:i.Keyboard.Shortcut.Common.Copy,target:(0,I.jsx)(Xt,{pullRequest:e})}),(0,I.jsx)(i.Action.Push,{icon:i.Icon.CodeBlock,title:"View Diff",shortcut:i.Keyboard.Shortcut.Common.RemoveAll,target:(0,I.jsx)(Jt,{pullRequest:e})}),(0,I.jsx)(i.Action.Push,{icon:i.Icon.Download,title:"Checkout Pull Request",shortcut:i.Keyboard.Shortcut.Common.OpenWith,target:(0,I.jsx)(Yt,{pullRequest:e})}),at&&(0,I.jsxs)(i.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&q&&!e.isInMergeQueue&&(0,I.jsx)(i.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>U()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,I.jsx)(i.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>y()}),!e.isMergeQueueEnabled&&q?(0,I.jsxs)(I.Fragment,{children:[e.repository.mergeCommitAllowed?(0,I.jsx)(i.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>g("MERGE")}):null,e.repository.squashMergeAllowed?(0,I.jsx)(i.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["ctrl","shift"],key:"enter"},onAction:()=>g("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,I.jsx)(i.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["opt","shift"],key:"enter"},onAction:()=>g("REBASE")}):null]}):null,fe&&!e.autoMergeRequest&&re.length===1&&(0,I.jsx)(i.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>h(re[0])}),fe&&!e.autoMergeRequest&&re.length>1&&(0,I.jsx)(i.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},children:re.map(C=>(0,I.jsx)(i.Action,{title:At(C),onAction:()=>h(C)},C))}),m&&e.autoMergeRequest&&(0,I.jsx)(i.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>A()})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(ro,{pullRequest:e,mutate:u}),a?(0,I.jsx)(i.Action,{title:rt?"Unassign from Me":"Assign to Me",icon:vt.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>rt?v(a.id):R(a.id)}):null,(0,I.jsx)(no,{pullRequest:e,mutate:u}),(0,I.jsx)(oo,{pullRequest:e,mutate:u}),(0,I.jsx)(io,{pullRequest:e,mutate:u}),(0,I.jsx)(so,{pullRequest:e,mutate:u})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[_?(0,I.jsx)(i.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"d"},onAction:()=>c()}):null,e.closed&&!e.merged?(0,I.jsx)(i.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,I.jsx)(i.Action,{title:"Close Pull Request",style:i.Action.Style.Destructive,icon:i.Icon.XMarkCircle,onAction:()=>d()})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(i.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),e.headRef?(0,I.jsx)(i.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null,(0,I.jsx)(i.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,I.jsx)(i.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,I.jsx)(i.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(ur,{data:Ka,sortQuery:o,setSortQuery:l}),(0,I.jsx)(i.Action,{icon:i.Icon.ArrowClockwise,title:"Refresh",onAction:u,shortcut:i.Keyboard.Shortcut.Common.Refresh})]})]})}function ro({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,qe.useState)(!1),[o,l]=(0,qe.useState)(""),{data:s,isLoading:u}=(0,Ve.useCachedPromise)(async(c,d)=>t.repositoryCollaboratorsForPullRequests({owner:c.repository.owner.login,name:c.repository.name,pullRequestNumber:c.number,searchQuery:d}),[e,o],{execute:n});async function p({id:c,text:d}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Requesting review",message:d}),await t.requestReview({pullRequestId:e.id,collaboratorId:c}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Requested review",message:d})}catch(g){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed requesting review",message:T(g)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Request Review",icon:i.Icon.AddPerson,shortcut:{modifiers:["ctrl","shift"],key:"r"},onOpen:()=>r(!0),onSearchTextChange:l,isLoading:u,children:s?.repository?.collaborators?.nodes?.filter(c=>!c?.isViewer).map(c=>{if(!c)return null;let d=te(c);return(0,I.jsx)(i.Action,{title:d.text,icon:d.icon,onAction:()=>p({id:c.id,text:d.text})},c.id)})})}function no({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ve.useCachedPromise)(async u=>t.repositoryCollaboratorsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding assignee",message:p});let c=o?.repository?.pullRequest?.assignees.nodes?.filter(d=>!!d).map(d=>d?.id)??[];await t.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...c,u]}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added assignee",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding assignee",message:T(c)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Add Assignee",icon:i.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(u=>{if(!u)return null;let p=te(u);return(0,I.jsx)(i.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:u.id,text:p.text})},u.id)})})}function oo({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ve.useCachedPromise)(async u=>t.repositoryProjectsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding to project",message:p}),await t.addPullRequestToProject({pullRequestId:e.id,projectId:u}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added to project",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding to project",message:T(c)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(u=>u?(0,I.jsx)(i.Action,{title:u.title,onAction:()=>s({id:u.id,text:u.title})},u.id):null)})}function io({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ve.useCachedPromise)(async p=>t.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Removing milestone"}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing milestone",message:T(p)})}}async function u({id:p,text:c}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Milestone set",message:c})}catch(d){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed setting milestone",message:T(d)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,I.jsx)(i.Action,{title:p.title,onAction:()=>u({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function so({pullRequest:e}){let{github:a}=B(),{data:t,isLoading:n}=(0,Ve.useCachedPromise)(async r=>{let s=(await a.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(c=>c?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,I.jsx)(I.Fragment,{children:n?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):t&&(0,I.jsx)(i.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{modifiers:["cmd","shift"],key:"v"},url:t,icon:{source:"vercel.svg",tintColor:i.Color.PrimaryText}})})}var w=require("react/jsx-runtime");function Ze({initialPullRequest:e,mutateList:a}){let{github:t}=B(),n=Ce(),{data:r,isLoading:o,mutate:l}=(0,pr.useCachedPromise)(async g=>(await t.pullRequestDetails({nodeId:g})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let u=Ye(r),p=Rt(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),c=Pt(r),d=Ga(r);return(0,w.jsx)(x.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,w.jsxs)(x.Detail.Metadata,{children:[(0,w.jsx)(x.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,w.jsxs)(x.Detail.Metadata.TagList,{title:"Status",children:[(0,w.jsx)(x.Detail.Metadata.TagList.Item,{...u}),r.autoMergeRequest&&(0,w.jsx)(x.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:x.Color.Yellow})]}),p?(0,w.jsx)(x.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:x.Icon[p.icon]}):null,(0,w.jsx)(x.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,w.jsx)(x.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,w.jsx)(x.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,w.jsx)(x.Detail.Metadata.Label,{title:"Created",text:(0,lr.format)(new Date(r.createdAt),"dd MMM")}):null,(0,w.jsx)(x.Detail.Metadata.Label,{title:"Author",...c}),d.length>0?(0,w.jsx)(x.Detail.Metadata.TagList,{title:Se(d.length,"Reviewer"),children:d.map(g=>g?(0,w.jsx)(x.Detail.Metadata.TagList.Item,{...g},g.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,w.jsx)(x.Detail.Metadata.TagList,{title:Se(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(g=>{if(!g)return null;let U=te(g);return(0,w.jsx)(x.Detail.Metadata.TagList.Item,{...U},g.id)})}):null,r.labels&&r.labels.totalCount>0?(0,w.jsx)(x.Detail.Metadata.TagList,{title:Se(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(g=>g?(0,w.jsx)(x.Detail.Metadata.TagList.Item,{text:g.name,color:g.color},g.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,w.jsx)(x.Detail.Metadata.TagList,{title:Se(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(g=>g?(0,w.jsx)(x.Detail.Metadata.TagList.Item,{text:g.title},g.id):null)}):null,r.milestone?(0,w.jsx)(x.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,w.jsx)(Je,{pullRequest:r,viewer:n,mutateList:a,mutateDetail:l})})}var cr=require("@raycast/utils");var ht=(0,cr.withAccessToken)(Na);var yr=require("@raycast/utils");function dr(){let{github:e}=B(),n=["user:@me",...Ce()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,yr.useCachedPromise)(async r=>{let l=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(l.map(s=>[s.id,s])).values()].sort((s,u)=>new Date(u.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var E=require("react/jsx-runtime"),Zt=e=>e?e.reduce((a,t)=>(t?.id&&t?.name&&a.push({id:t.id,name:t.name}),a),[]):[],Sr=(e,a,t)=>{if(!t||e.some(o=>o.name===t))return e;let r=a.find(o=>o.name===t);return r?[...e,r]:[...e,{id:`virtual-${t}`,name:t}]};function ea({draftValues:e}){let{push:a}=(0,M.useNavigation)(),{data:t}=dr(),{github:n}=B(),[r,o]=(0,_e.useState)(""),[l,s]=(0,_e.useState)(""),{handleSubmit:u,itemProps:p,values:c,setValue:d,reset:g,focus:U}=(0,le.useForm)({async onSubmit(S){let L=await(0,M.showToast)({style:M.Toast.Style.Animated,title:"Creating pull request"});try{let Te=(await n.createPullRequest({repositoryId:S.repository,from:S.from,into:S.into,title:S.title,body:S.description,isDraft:S.draft}))?.createPullRequest?.pullRequest?.id;if(Te){let gr=await n.initPullRequest({pullRequestId:Te,reviewersIds:S.reviewers,assigneeIds:S.assignees,labelsIds:S.labels,milestoneId:S.milestone||null});await Promise.all(S.projects.map(Ot=>n.addPullRequestToProject({pullRequestId:Te,projectId:Ot})));let Bt=gr?.updatePullRequest?.pullRequest;if(L.style=M.Toast.Style.Success,L.title="Created pull request",S.autoMerge)try{await n.enablePullRequestAutoMerge({nodeId:Te,mergeMethod:S.autoMergeMethod||R[0]})}catch(Ot){L.style=M.Toast.Style.Success,L.title="Created pull request, but auto-merge failed",L.message=T(Ot)}Bt&&(L.primaryAction={title:"Open Pull Request",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:()=>a((0,E.jsx)(Ze,{initialPullRequest:Bt}))},L.secondaryAction={title:"Copy URL",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>M.Clipboard.copy(Bt.permalink)})}g({title:"",from:"",into:"",draft:!1,autoMerge:!1,autoMergeMethod:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:""}),U("repository")}catch(Ae){L.style=M.Toast.Style.Failure,L.title="Failed creating pull request",L.message=T(Ae)}},initialValues:{repository:e?.repository??"",from:e?.from??"",into:e?.into??"",draft:e?.draft??!1,autoMerge:e?.autoMerge??!1,autoMergeMethod:e?.autoMergeMethod??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??""},validation:{repository:le.FormValidation.Required,from:le.FormValidation.Required,into:le.FormValidation.Required,title:le.FormValidation.Required}}),{data:y,isLoading:h}=(0,le.useCachedPromise)(S=>{let L=t?.find(Ae=>Ae.id===S);return L?n.dataForRepository({owner:L.owner.login,name:L.name}):Promise.resolve(null)},[c.repository],{execute:!!c.repository}),A=y?.repository?.autoMergeAllowed??!1,R=[y?.repository?.mergeCommitAllowed&&"MERGE",y?.repository?.squashMergeAllowed&&"SQUASH",y?.repository?.rebaseMergeAllowed&&"REBASE"].filter(Boolean),v=y?.repository?.defaultBranchRef,q=v?.name??"",m=y?.repository?.collaborators?.nodes,N=m?.filter(S=>!S?.isViewer),_=y?.repository?.labels?.nodes,re=y?.repository?.projectsV2?.nodes,fe=y?.repository?.milestones?.nodes,at=(S,L)=>{let Ae=t?.find(Te=>Te.id===S);return Ae?n.searchRepositoryBranches({owner:Ae.owner.login,name:Ae.name,query:L.trim()}):Promise.resolve(null)},{data:vt,isLoading:rt}=(0,le.useCachedPromise)(at,[c.repository,r],{execute:!!c.repository&&r.trim().length>0}),{data:Tt,isLoading:nt}=(0,le.useCachedPromise)(at,[c.repository,l],{execute:!!c.repository&&l.trim().length>0}),ot=Zt(y?.repository?.refs?.nodes),wt=Zt(vt?.repository?.refs?.nodes??y?.repository?.refs?.nodes),C=Sr(wt,ot,c.from),K=Zt(Tt?.repository?.refs?.nodes??y?.repository?.refs?.nodes),ne=Sr(K.filter(S=>S.name!==c.from),ot,c.into);return(0,_e.useEffect)(()=>{let S=y?.repository?.pullRequestTemplates?.[0];S&&S.body&&!c.description&&d("description",S.body),v&&d("into",v.name)},[y]),(0,_e.useEffect)(()=>{c.from&&c.into&&c.from===c.into&&(q&&q!==c.from?d("into",q):d("into",""))},[c.from,c.into,q]),(0,_e.useEffect)(()=>{d("from",""),d("into",""),d("description",""),d("reviewers",[]),d("assignees",[]),d("labels",[]),d("projects",[]),d("milestone","")},[c.repository]),(0,E.jsxs)(M.Form,{actions:(0,E.jsx)(M.ActionPanel,{children:(0,E.jsx)(M.Action.SubmitForm,{onSubmit:u,title:"Create Pull Request"})}),enableDrafts:!0,isLoading:h,children:[(0,E.jsx)(M.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:t?.map(S=>(0,E.jsx)(M.Form.Dropdown.Item,{title:S.nameWithOwner,value:S.id,icon:{source:S.owner.avatarUrl,mask:M.Image.Mask.Circle}},S.id))}),(0,E.jsx)(M.Form.Dropdown,{...p.from,title:"From",isLoading:rt,throttle:!0,onSearchTextChange:o,children:C?C.map(S=>S?(0,E.jsx)(M.Form.Dropdown.Item,{title:S.name,value:S.name},S?.id):null):null}),(0,E.jsx)(M.Form.Dropdown,{...p.into,title:"Into",storeValue:!0,isLoading:nt,throttle:!0,onSearchTextChange:s,children:ne?ne.map(S=>S?(0,E.jsx)(M.Form.Dropdown.Item,{title:S.name,value:S.name},S?.id):null):null}),(0,E.jsx)(M.Form.Checkbox,{...p.draft,label:"As draft"}),A&&(0,E.jsx)(M.Form.Checkbox,{...p.autoMerge,label:"Enable auto-merge"}),A&&c.autoMerge&&R.length>1&&(0,E.jsx)(M.Form.Dropdown,{...p.autoMergeMethod,title:"Auto-merge Method",children:R.map(S=>(0,E.jsx)(M.Form.Dropdown.Item,{title:At(S),value:S},S))}),(0,E.jsx)(M.Form.Separator,{}),(0,E.jsx)(M.Form.TextField,{...p.title,title:"Title",placeholder:"Pull request title"}),(0,E.jsx)(M.Form.TextArea,{...p.description,placeholder:"Pull request description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,E.jsx)(M.Form.TagPicker,{...p.reviewers,title:"Reviewers",children:N?.map(S=>{if(!S)return null;let L=te(S);return(0,E.jsx)(M.Form.TagPicker.Item,{icon:L.icon,title:L.text,value:S.id},S.id)})}),(0,E.jsx)(M.Form.TagPicker,{...p.assignees,title:"Assignees",children:m?.map(S=>{if(!S)return null;let L=te(S);return(0,E.jsx)(M.Form.TagPicker.Item,{icon:L.icon,title:L.text,value:S.id},S.id)})}),(0,E.jsx)(M.Form.TagPicker,{...p.labels,title:"Labels",children:_?.map(S=>S?(0,E.jsx)(M.Form.TagPicker.Item,{title:S.name,value:S.id,icon:{source:M.Icon.Dot,tintColor:S.color}},S.id):null)}),(0,E.jsx)(M.Form.TagPicker,{...p.projects,title:"Projects",children:re?.map(S=>S?(0,E.jsx)(M.Form.TagPicker.Item,{title:S.title,value:S.id},S.id):null)}),(0,E.jsxs)(M.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,E.jsx)(M.Form.Dropdown.Item,{value:"",title:"None"}),fe?.map(S=>S?(0,E.jsx)(M.Form.Dropdown.Item,{title:S.title,value:S.id},S.id):null)]})]})}var Xs=ht(ea);var Ne=require("react/jsx-runtime");function ta({error:e}){return e?(0,Ne.jsx)(Re.List.EmptyView,{icon:Re.Icon.Warning,title:"Failed to Load Pull Requests",description:T(e)}):(0,Ne.jsx)(Re.List.EmptyView,{title:"No pull requests found",actions:(0,Ne.jsx)(Re.ActionPanel,{children:(0,Ne.jsx)(Re.Action.Push,{title:"Create Pull Request",target:(0,Ne.jsx)(ea,{})})})})}var ae=require("@raycast/api"),aa=require("date-fns"),br=require("react");var et=require("react/jsx-runtime");function ra({pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let l=new Date(e.updatedAt),s=(0,br.useMemo)(()=>Ha(e),[e]),u=o?Pt(e):null,p=Ye(e),c=Wa(e.reviewDecision),d=[{text:(0,aa.format)(l,"MMM dd"),tooltip:`Updated: ${(0,aa.format)(l,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(d.unshift({text:{value:`${s}`,color:s>0?ae.Color.PrimaryText:ae.Color.SecondaryText},icon:ae.Icon.Bubble}),d.unshift(c??{icon:{source:ae.Icon.Circle,tintColor:ae.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&d.unshift({tag:{value:"Auto-merge",color:ae.Color.Yellow}}),e.commits.nodes){let U=e.commits.nodes[0]?.commit.statusCheckRollup?.state,y=U?Et(U):null;y&&d.unshift(y)}u&&d.splice(d.length-1,0,{icon:u.icon,tooltip:`Author: ${u.text}`});let g=[`${e.number}`];return e.author?.login&&g.push(e.author.login),(0,et.jsx)(ae.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:p.icon,tooltip:`Status: ${p.text}`},keywords:g,accessories:d,actions:(0,et.jsx)(Je,{pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,children:(0,et.jsx)(ae.Action.Push,{title:"Show Details",icon:ae.Icon.Sidebar,target:(0,et.jsx)(Ze,{initialPullRequest:e,viewer:a,mutateList:t})})})},e.id)}var k=require("@raycast/api");var ge=require("react/jsx-runtime");function na(e){let a=Ce(),t=a?.organizations?.nodes?.filter(o=>o!=null)??[],n=t.map(o=>o.login),r=t.length>1;return(0,ge.jsxs)(k.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,ge.jsxs)(k.List.Dropdown.Section,{children:[(0,ge.jsx)(k.List.Dropdown.Item,{title:"All Repositories",icon:k.Icon.List,value:""}),a&&t.length>0?(0,ge.jsx)(k.List.Dropdown.Item,{title:"My Repositories",icon:k.Icon.Person,value:Wt({userLogin:a.login,orgLogins:n})}):null,r?(0,ge.jsx)(k.List.Dropdown.Item,{title:"My Organizations",icon:k.Icon.Building,value:Wt({orgLogins:n})}):null]}),(0,ge.jsxs)(k.List.Dropdown.Section,{children:[a?(0,ge.jsx)(k.List.Dropdown.Item,{icon:{source:a.avatarUrl??k.Icon.PersonCircle,mask:k.Image.Mask.Circle},title:a.login,value:`user:${a.login}`}):null,t.map(o=>(0,ge.jsx)(k.List.Dropdown.Item,{icon:{source:o.avatarUrl??k.Icon.PersonCircle,mask:k.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var ve=require("react/jsx-runtime");function uo(){let{github:e}=B(),a=Ce(),{defaultSearchTerms:t}=(0,tt.getPreferenceValues)(),[n,r]=(0,oa.useState)((0,Ir.trim)(t)+" "),[o,l]=(0,_t.useCachedState)("sort-query",Ya,{cacheNamespace:"github-search-pr"}),[s,u]=(0,oa.useState)(null),{data:p,isLoading:c,error:d,mutate:g,pagination:U}=(0,_t.useCachedPromise)((h,A,R)=>async({cursor:v})=>{let q=await e.searchPullRequests({numberOfItems:Fa(),query:`is:pr archived:false ${R} ${A} ${h}`,after:v});return{data:q.search.edges?.map(m=>m?.node).filter(m=>m!=null)??[],hasMore:q.search.pageInfo.hasNextPage,cursor:q.search.pageInfo.endCursor??void 0}},[n,s,o],{keepPreviousData:!0}),y=Xa(p??[]);return(0,ve.jsxs)(tt.List,{isLoading:c,searchBarPlaceholder:"Globally search pull requests across repositories",searchBarAccessory:(0,ve.jsx)(na,{onFilterChange:u}),searchText:n,onSearchTextChange:r,throttle:!0,pagination:U,children:[p?(0,ve.jsx)(tt.List.Section,{title:n?"Search Results":"Created Recently",subtitle:Se(y.length,"pull request",{withNumber:!0}),children:y.map(h=>(0,ve.jsx)(ra,{showAuthor:!0,pullRequest:h,viewer:a,mutateList:g,sortQuery:o,setSortQuery:l},h.id))}):null,(0,ve.jsx)(ta,{error:d})]})}var po=ht(uo);
