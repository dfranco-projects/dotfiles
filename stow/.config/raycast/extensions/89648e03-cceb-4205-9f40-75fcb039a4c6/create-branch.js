"use strict";var Tt=Object.create;var Se=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var Bt=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty;var Ue=(a,t,e)=>()=>{if(e)throw e[0];try{return a&&(t=a(a=0)),t}catch(n){throw e=[n],n}};var Z=(a,t)=>{for(var e in t)Se(a,e,{get:t[e],enumerable:!0})},ye=(a,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Bt(t))!Lt.call(a,r)&&r!==e&&Se(a,r,{get:()=>t[r],enumerable:!(n=wt(t,r))||n.enumerable});return a},D=(a,t,e)=>(ye(a,t,"default"),e&&ye(e,t,"default")),N=(a,t,e)=>(e=a!=null?Tt(Ot(a)):{},ye(t||!a||!a.__esModule?Se(e,"default",{value:a,enumerable:!0}):e,a)),Vt=a=>ye(Se({},"__esModule",{value:!0}),a);var x={};Z(x,{default:()=>qe.default});var qe,Ie=Ue(()=>{D(x,require("formdata-polyfill/esm.min.js"));qe=N(require("formdata-polyfill/esm.min.js"))});var v={};Z(v,{default:()=>ze.default});var ze,ve=Ue(()=>{D(v,require("fetch-blob/from.js"));ze=N(require("fetch-blob/from.js"))});var He={};Z(He,{toFormData:()=>Gt});function zt(a){let t=a.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let e=t[2]||t[3]||"",n=e.slice(e.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Gt(a,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let e=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new he(e[1]||e[2]),r,o,i,c,u,p,R=[],y=new x.FormData,S=I=>{i+=b.decode(I,{stream:!0})},A=I=>{R.push(I)},l=()=>{let I=new v.File(R,p,{type:u});y.append(c,I)},f=()=>{y.append(c,i)},b=new TextDecoder("utf-8");b.decode(),n.onPartBegin=function(){n.onPartData=S,n.onPartEnd=f,r="",o="",i="",c="",u="",p=null,R.length=0},n.onHeaderField=function(I){r+=b.decode(I,{stream:!0})},n.onHeaderValue=function(I){o+=b.decode(I,{stream:!0})},n.onHeaderEnd=function(){if(o+=b.decode(),r=r.toLowerCase(),r==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(c=I[2]||I[3]||""),p=zt(o),p&&(n.onPartData=A,n.onPartEnd=l)}else r==="content-type"&&(u=o);o="",r=""};for await(let I of a)n.write(I);return n.end(),y}var F,g,Ge,$,ge,me,Nt,oe,qt,Ft,jt,kt,W,he,Qe=Ue(()=>{ve();Ie();F=0,g={START_BOUNDARY:F++,HEADER_FIELD_START:F++,HEADER_FIELD:F++,HEADER_VALUE_START:F++,HEADER_VALUE:F++,HEADER_VALUE_ALMOST_DONE:F++,HEADERS_ALMOST_DONE:F++,PART_DATA_START:F++,PART_DATA:F++,END:F++},Ge=1,$={PART_BOUNDARY:Ge,LAST_BOUNDARY:Ge*=2},ge=10,me=13,Nt=32,oe=45,qt=58,Ft=97,jt=122,kt=a=>a|32,W=()=>{},he=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=W,this.onHeaderField=W,this.onHeadersEnd=W,this.onHeaderValue=W,this.onPartBegin=W,this.onPartData=W,this.onPartEnd=W,this.boundaryChars={},t=`\r
--`+t;let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n),this.boundaryChars[e[n]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=g.START_BOUNDARY}write(t){let e=0,n=t.length,r=this.index,{lookbehind:o,boundary:i,boundaryChars:c,index:u,state:p,flags:R}=this,y=this.boundary.length,S=y-1,A=t.length,l,f,b=M=>{this[M+"Mark"]=e},I=M=>{delete this[M+"Mark"]},E=(M,C,m,te)=>{(C===void 0||C!==m)&&this[M](te&&te.subarray(C,m))},Q=(M,C)=>{let m=M+"Mark";m in this&&(C?(E(M,this[m],e,t),delete this[m]):(E(M,this[m],t.length,t),this[m]=0))};for(e=0;e<n;e++)switch(l=t[e],p){case g.START_BOUNDARY:if(u===i.length-2){if(l===oe)R|=$.LAST_BOUNDARY;else if(l!==me)return;u++;break}else if(u-1===i.length-2){if(R&$.LAST_BOUNDARY&&l===oe)p=g.END,R=0;else if(!(R&$.LAST_BOUNDARY)&&l===ge)u=0,E("onPartBegin"),p=g.HEADER_FIELD_START;else return;break}l!==i[u+2]&&(u=-2),l===i[u+2]&&u++;break;case g.HEADER_FIELD_START:p=g.HEADER_FIELD,b("onHeaderField"),u=0;case g.HEADER_FIELD:if(l===me){I("onHeaderField"),p=g.HEADERS_ALMOST_DONE;break}if(u++,l===oe)break;if(l===qt){if(u===1)return;Q("onHeaderField",!0),p=g.HEADER_VALUE_START;break}if(f=kt(l),f<Ft||f>jt)return;break;case g.HEADER_VALUE_START:if(l===Nt)break;b("onHeaderValue"),p=g.HEADER_VALUE;case g.HEADER_VALUE:l===me&&(Q("onHeaderValue",!0),E("onHeaderEnd"),p=g.HEADER_VALUE_ALMOST_DONE);break;case g.HEADER_VALUE_ALMOST_DONE:if(l!==ge)return;p=g.HEADER_FIELD_START;break;case g.HEADERS_ALMOST_DONE:if(l!==ge)return;E("onHeadersEnd"),p=g.PART_DATA_START;break;case g.PART_DATA_START:p=g.PART_DATA,b("onPartData");case g.PART_DATA:if(r=u,u===0){for(e+=S;e<A&&!(t[e]in c);)e+=y;e-=S,l=t[e]}if(u<i.length)i[u]===l?(u===0&&Q("onPartData",!0),u++):u=0;else if(u===i.length)u++,l===me?R|=$.PART_BOUNDARY:l===oe?R|=$.LAST_BOUNDARY:u=0;else if(u-1===i.length)if(R&$.PART_BOUNDARY){if(u=0,l===ge){R&=~$.PART_BOUNDARY,E("onPartEnd"),E("onPartBegin"),p=g.HEADER_FIELD_START;break}}else R&$.LAST_BOUNDARY&&l===oe?(E("onPartEnd"),p=g.END,R=0):u=0;if(u>0)o[u-1]=l;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);E("onPartData",0,r,M),r=0,b("onPartData"),e--}break;case g.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}Q("onHeaderField"),Q("onHeaderValue"),Q("onPartData"),this.index=u,this.state=p,this.flags=R}end(){if(this.state===g.HEADER_FIELD_START&&this.index===0||this.state===g.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==g.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var lr={};Z(lr,{BranchForm:()=>vt,default:()=>pr});module.exports=Vt(lr);var d=require("@raycast/api"),xe=require("@raycast/utils"),_t=require("react");var St=require("@octokit/rest"),dt=require("@raycast/api"),bt=require("@raycast/utils"),It=require("graphql-request");var st=N(require("node:http"),1),ut=N(require("node:https"),1),Y=N(require("node:zlib"),1),w=N(require("node:stream"),1),ue=require("node:buffer");var ae={};Z(ae,{default:()=>de.default});D(ae,require("data-uri-to-buffer"));var de=N(require("data-uri-to-buffer"));var B=N(require("node:stream"),1),G=require("node:util"),h=require("node:buffer");var re={};Z(re,{default:()=>be.default});D(re,require("fetch-blob"));var be=N(require("fetch-blob"));Ie();var z=class extends Error{constructor(t,e){super(t),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var U=class extends z{constructor(t,e,n){super(t,e),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Me=Symbol.toStringTag,_e=a=>typeof a=="object"&&typeof a.append=="function"&&typeof a.delete=="function"&&typeof a.get=="function"&&typeof a.getAll=="function"&&typeof a.has=="function"&&typeof a.set=="function"&&typeof a.sort=="function"&&a[Me]==="URLSearchParams",ne=a=>a&&typeof a=="object"&&typeof a.arrayBuffer=="function"&&typeof a.type=="string"&&typeof a.stream=="function"&&typeof a.constructor=="function"&&/^(Blob|File)$/.test(a[Me]),Fe=a=>typeof a=="object"&&(a[Me]==="AbortSignal"||a[Me]==="EventTarget"),je=(a,t)=>{let e=new URL(t).hostname,n=new URL(a).hostname;return e===n||e.endsWith(`.${n}`)},ke=(a,t)=>{let e=new URL(t).protocol,n=new URL(a).protocol;return e===n};var Ht=(0,G.promisify)(B.default.pipeline),_=Symbol("Body internals"),j=class{constructor(t,{size:e=0}={}){let n=null;t===null?t=null:_e(t)?t=h.Buffer.from(t.toString()):ne(t)||h.Buffer.isBuffer(t)||(G.types.isAnyArrayBuffer(t)?t=h.Buffer.from(t):ArrayBuffer.isView(t)?t=h.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof B.default||(t instanceof x.FormData?(t=(0,x.formDataToBlob)(t),n=t.type.split("=")[1]):t=h.Buffer.from(String(t))));let r=t;h.Buffer.isBuffer(t)?r=B.default.Readable.from(t):ne(t)&&(r=B.default.Readable.from(t.stream())),this[_]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=e,t instanceof B.default&&t.on("error",o=>{let i=o instanceof z?o:new U(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[_].error=i})}get body(){return this[_].stream}get bodyUsed(){return this[_].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:e,byteLength:n}=await Te(this);return t.slice(e,e+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new x.FormData,r=new URLSearchParams(await this.text());for(let[o,i]of r)n.append(o,i);return n}let{toFormData:e}=await Promise.resolve().then(()=>(Qe(),He));return e(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[_].body&&this[_].body.type||"",e=await this.arrayBuffer();return new be.default([e],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Te(this);return new TextDecoder().decode(t)}buffer(){return Te(this)}};j.prototype.buffer=(0,G.deprecate)(j.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(j.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,G.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Te(a){if(a[_].disturbed)throw new TypeError(`body used already for: ${a.url}`);if(a[_].disturbed=!0,a[_].error)throw a[_].error;let{body:t}=a;if(t===null)return h.Buffer.alloc(0);if(!(t instanceof B.default))return h.Buffer.alloc(0);let e=[],n=0;try{for await(let r of t){if(a.size>0&&n+r.length>a.size){let o=new U(`content size at ${a.url} over limit: ${a.size}`,"max-size");throw t.destroy(o),o}n+=r.length,e.push(r)}}catch(r){throw r instanceof z?r:new U(`Invalid response body while trying to fetch ${a.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return e.every(r=>typeof r=="string")?h.Buffer.from(e.join("")):h.Buffer.concat(e,n)}catch(r){throw new U(`Could not create Buffer from response body for ${a.url}: ${r.message}`,"system",r)}else throw new U(`Premature close of server response while trying to fetch ${a.url}`)}var X=(a,t)=>{let e,n,{body:r}=a[_];if(a.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof B.default&&typeof r.getBoundary!="function"&&(e=new B.PassThrough({highWaterMark:t}),n=new B.PassThrough({highWaterMark:t}),r.pipe(e),r.pipe(n),a[_].stream=e,r=n),r},Qt=(0,G.deprecate)(a=>a.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Re=(a,t)=>a===null?null:typeof a=="string"?"text/plain;charset=UTF-8":_e(a)?"application/x-www-form-urlencoded;charset=UTF-8":ne(a)?a.type||null:h.Buffer.isBuffer(a)||G.types.isAnyArrayBuffer(a)||ArrayBuffer.isView(a)?null:a instanceof x.FormData?`multipart/form-data; boundary=${t[_].boundary}`:a&&typeof a.getBoundary=="function"?`multipart/form-data;boundary=${Qt(a)}`:a instanceof B.default?null:"text/plain;charset=UTF-8",$e=a=>{let{body:t}=a[_];return t===null?0:ne(t)?t.size:h.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},We=async(a,{body:t})=>{t===null?a.end():await Ht(t,a)};var we=require("node:util"),ie=N(require("node:http"),1),Ae=typeof ie.default.validateHeaderName=="function"?ie.default.validateHeaderName:a=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(a)){let t=new TypeError(`Header name must be a valid HTTP token [${a}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Be=typeof ie.default.validateHeaderValue=="function"?ie.default.validateHeaderValue:(a,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let e=new TypeError(`Invalid character in header content ["${a}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},T=class a extends URLSearchParams{constructor(t){let e=[];if(t instanceof a){let n=t.raw();for(let[r,o]of Object.entries(n))e.push(...o.map(i=>[r,i]))}else if(t!=null)if(typeof t=="object"&&!we.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)e.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");e=[...t].map(r=>{if(typeof r!="object"||we.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([n,r])=>(Ae(n),Be(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(e),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(i,c)=>(Ae(i),Be(i,String(c)),URLSearchParams.prototype[r].call(n,String(i).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return i=>(Ae(i),URLSearchParams.prototype[r].call(n,String(i).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let e=this.getAll(t);if(e.length===0)return null;let n=e.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,e=void 0){for(let n of this.keys())Reflect.apply(t,e,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,e)=>(t[e]=this.getAll(e),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,e)=>{let n=this.getAll(e);return e==="host"?t[e]=n[0]:t[e]=n.length>1?n:n[0],t},{})}};Object.defineProperties(T.prototype,["get","entries","forEach","values"].reduce((a,t)=>(a[t]={enumerable:!0},a),{}));function Ke(a=[]){return new T(a.reduce((t,e,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,e])=>{try{return Ae(t),Be(t,String(e)),!0}catch{return!1}}))}var $t=new Set([301,302,303,307,308]),Pe=a=>$t.has(a);var q=Symbol("Response internals"),O=class a extends j{constructor(t=null,e={}){super(t,e);let n=e.status!=null?e.status:200,r=new T(e.headers);if(t!==null&&!r.has("Content-Type")){let o=Re(t,this);o&&r.append("Content-Type",o)}this[q]={type:"default",url:e.url,status:n,statusText:e.statusText||"",headers:r,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[q].type}get url(){return this[q].url||""}get status(){return this[q].status}get ok(){return this[q].status>=200&&this[q].status<300}get redirected(){return this[q].counter>0}get statusText(){return this[q].statusText}get headers(){return this[q].headers}get highWaterMark(){return this[q].highWaterMark}clone(){return new a(X(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,e=302){if(!Pe(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new a(null,{headers:{location:new URL(t).toString()},status:e})}static error(){let t=new a(null,{status:0,statusText:""});return t[q].type="error",t}static json(t=void 0,e={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new T(e&&e.headers);return r.has("content-type")||r.set("content-type","application/json"),new a(n,{...e,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(O.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var nt=require("node:url"),ot=require("node:util");var Ye=a=>{if(a.search)return a.search;let t=a.href.length-1,e=a.hash||(a.href[t]==="#"?"#":"");return a.href[t-e.length]==="?"?"?":""};var Xe=require("node:net");function Ze(a,t=!1){return a==null||(a=new URL(a),/^(about|blob|data):$/.test(a.protocol))?"no-referrer":(a.username="",a.password="",a.hash="",t&&(a.pathname="",a.search=""),a)}var Je=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),et="strict-origin-when-cross-origin";function tt(a){if(!Je.has(a))throw new TypeError(`Invalid referrerPolicy: ${a}`);return a}function Wt(a){if(/^(http|ws)s:$/.test(a.protocol))return!0;let t=a.host.replace(/(^\[)|(]$)/g,""),e=(0,Xe.isIP)(t);return e===4&&/^127\./.test(t)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:a.host==="localhost"||a.host.endsWith(".localhost")?!1:a.protocol==="file:"}function J(a){return/^about:(blank|srcdoc)$/.test(a)||a.protocol==="data:"||/^(blob|filesystem):$/.test(a.protocol)?!0:Wt(a)}function at(a,{referrerURLCallback:t,referrerOriginCallback:e}={}){if(a.referrer==="no-referrer"||a.referrerPolicy==="")return null;let n=a.referrerPolicy;if(a.referrer==="about:client")return"no-referrer";let r=a.referrer,o=Ze(r),i=Ze(r,!0);o.toString().length>4096&&(o=i),t&&(o=t(o)),e&&(i=e(i));let c=new URL(a.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return J(o)&&!J(c)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:J(o)&&!J(c)?"no-referrer":i;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:i;case"no-referrer-when-downgrade":return J(o)&&!J(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function rt(a){let t=(a.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let n of t)n&&Je.has(n)&&(e=n);return e}var P=Symbol("Request internals"),se=a=>typeof a=="object"&&typeof a[P]=="object",Kt=(0,ot.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),K=class a extends j{constructor(t,e={}){let n;if(se(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=e.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!se(e)&&"data"in e&&Kt(),(e.body!=null||se(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:se(t)&&t.body!==null?X(t):null;super(o,{size:e.size||t.size||0});let i=new T(e.headers||t.headers||{});if(o!==null&&!i.has("Content-Type")){let p=Re(o,this);p&&i.set("Content-Type",p)}let c=se(t)?t.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!Fe(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=e.referrer==null?t.referrer:e.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[P]={method:r,redirect:e.redirect||t.redirect||"follow",headers:i,parsedURL:n,signal:c,referrer:u},this.follow=e.follow===void 0?t.follow===void 0?20:t.follow:e.follow,this.compress=e.compress===void 0?t.compress===void 0?!0:t.compress:e.compress,this.counter=e.counter||t.counter||0,this.agent=e.agent||t.agent,this.highWaterMark=e.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||t.referrerPolicy||""}get method(){return this[P].method}get url(){return(0,nt.format)(this[P].parsedURL)}get headers(){return this[P].headers}get redirect(){return this[P].redirect}get signal(){return this[P].signal}get referrer(){if(this[P].referrer==="no-referrer")return"";if(this[P].referrer==="client")return"about:client";if(this[P].referrer)return this[P].referrer.toString()}get referrerPolicy(){return this[P].referrerPolicy}set referrerPolicy(t){this[P].referrerPolicy=tt(t)}clone(){return new a(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(K.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var it=a=>{let{parsedURL:t}=a[P],e=new T(a[P].headers);e.has("Accept")||e.set("Accept","*/*");let n=null;if(a.body===null&&/^(post|put)$/i.test(a.method)&&(n="0"),a.body!==null){let c=$e(a);typeof c=="number"&&!Number.isNaN(c)&&(n=String(c))}n&&e.set("Content-Length",n),a.referrerPolicy===""&&(a.referrerPolicy=et),a.referrer&&a.referrer!=="no-referrer"?a[P].referrer=at(a):a[P].referrer="no-referrer",a[P].referrer instanceof URL&&e.set("Referer",a.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),a.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=a;typeof r=="function"&&(r=r(t));let o=Ye(t),i={path:t.pathname+o,method:a.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:a.insecureHTTPParser,agent:r};return{parsedURL:t,options:i}};var Ee=class extends z{constructor(t,e="aborted"){super(t,e)}};Ie();ve();var Yt=new Set(["data:","http:","https:"]);async function Ce(a,t){return new Promise((e,n)=>{let r=new K(a,t),{parsedURL:o,options:i}=it(r);if(!Yt.has(o.protocol))throw new TypeError(`node-fetch cannot load ${a}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,de.default)(r.url),f=new O(l,{headers:{"Content-Type":l.typeFull}});e(f);return}let c=(o.protocol==="https:"?ut.default:st.default).request,{signal:u}=r,p=null,R=()=>{let l=new Ee("The operation was aborted.");n(l),r.body&&r.body instanceof w.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(u&&u.aborted){R();return}let y=()=>{R(),A()},S=c(o.toString(),i);u&&u.addEventListener("abort",y);let A=()=>{S.abort(),u&&u.removeEventListener("abort",y)};S.on("error",l=>{n(new U(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),A()}),Zt(S,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&S.on("socket",l=>{let f;l.prependListener("end",()=>{f=l._eventsCount}),l.prependListener("close",b=>{if(p&&f<l._eventsCount&&!b){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),S.on("response",l=>{S.setTimeout(0);let f=Ke(l.rawHeaders);if(Pe(l.statusCode)){let M=f.get("Location"),C=null;try{C=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new U(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),A();return}}switch(r.redirect){case"error":n(new U(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),A();return;case"manual":break;case"follow":{if(C===null)break;if(r.counter>=r.follow){n(new U(`maximum redirect reached at: ${r.url}`,"max-redirect")),A();return}let m={headers:new T(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:X(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!je(r.url,C)||!ke(r.url,C))for(let ht of["authorization","www-authenticate","cookie","cookie2"])m.headers.delete(ht);if(l.statusCode!==303&&r.body&&t.body instanceof w.default.Readable){n(new U("Cannot follow redirect with body being a readable stream","unsupported-redirect")),A();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(m.method="GET",m.body=void 0,m.headers.delete("content-length"));let te=rt(f);te&&(m.referrerPolicy=te),e(Ce(new K(C,m))),A();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}u&&l.once("end",()=>{u.removeEventListener("abort",y)});let b=(0,w.pipeline)(l,new w.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&l.on("aborted",y);let I={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:f,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},E=f.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||E===null||l.statusCode===204||l.statusCode===304){p=new O(b,I),e(p);return}let Q={flush:Y.default.Z_SYNC_FLUSH,finishFlush:Y.default.Z_SYNC_FLUSH};if(E==="gzip"||E==="x-gzip"){b=(0,w.pipeline)(b,Y.default.createGunzip(Q),M=>{M&&n(M)}),p=new O(b,I),e(p);return}if(E==="deflate"||E==="x-deflate"){let M=(0,w.pipeline)(l,new w.PassThrough,C=>{C&&n(C)});M.once("data",C=>{(C[0]&15)===8?b=(0,w.pipeline)(b,Y.default.createInflate(),m=>{m&&n(m)}):b=(0,w.pipeline)(b,Y.default.createInflateRaw(),m=>{m&&n(m)}),p=new O(b,I),e(p)}),M.once("end",()=>{p||(p=new O(b,I),e(p))});return}if(E==="br"){b=(0,w.pipeline)(b,Y.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new O(b,I),e(p);return}p=new O(b,I),e(p)}),We(S,r).catch(n)})}function Zt(a,t){let e=ue.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;a.on("response",i=>{let{headers:c}=i;n=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),a.on("socket",i=>{let c=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},u=p=>{r=ue.Buffer.compare(p.slice(-5),e)===0,!r&&o&&(r=ue.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&ue.Buffer.compare(p.slice(-2),e.slice(3))===0),o=p};i.prependListener("close",c),i.on("data",u),a.on("close",()=>{i.removeListener("close",c),i.removeListener("data",u)})})}var s=N(require("graphql-tag")),pe=s.default`
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
`,Xt=s.default`
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
  ${pe}
`,k=s.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,le=s.default`
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
  ${k}
`,fe=s.default`
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
  ${le}
  ${pe}
  ${k}
`,Jt=s.default`
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
  ${le}
  ${pe}
  ${k}
`,ea=s.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,pt=s.default`
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
  ${le}
  ${ea}
`,lt=s.default`
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
  ${pe}
  ${le}
  ${k}
`,ta=s.default`
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
  ${pe}
  ${le}
  ${k}
`,aa=s.default`
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
`,ct=s.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Oe=s.default`
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
`,ra=s.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,na=s.default`
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
`,oa=s.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ia=s.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,sa=s.default`
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
  ${Xt}
`,ua=s.default`
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
`,pa=s.default`
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
  ${k}
`,la=s.default`
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
`,ca=s.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Jt}
`,ya=s.default`
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
  ${fe}
`,Sa=s.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${fe}
`,da=s.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ba=s.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ia=s.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ma=s.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ga=s.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ma=s.default`
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
  ${fe}
`,Ra=s.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Aa=s.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${pt}
`,Pa=s.default`
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
  ${lt}
`,Ea=s.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${ta}
`,Ca=s.default`
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
  ${k}
`,fa=s.default`
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
`,Da=s.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${aa}
`,xa=s.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ua=s.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,_a=s.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,va=s.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,ha=s.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ta=s.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,wa=s.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ba=s.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Oa=s.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,La=s.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Va=s.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Na=s.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,qa=s.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Fa=s.default`
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
`,ja=s.default`
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
  ${lt}
`,ka=s.default`
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
  ${Oe}
`,za=s.default`
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
  ${Oe}
`,Ga=s.default`
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
`,Ha=s.default`
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
`,Qa=s.default`
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
  ${ct}
  ${k}
`,$a=s.default`
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
  ${ct}
`,Wa=s.default`
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
  ${fe}
`,Ka=s.default`
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
  ${ra}
`,Ya=s.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Za=s.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Xa=s.default`
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
  ${Oe}
`,Ja=s.default`
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
  ${k}
  ${pt}
`,er=s.default`
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
  ${k}
`,tr=s.default`
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
`,ar=(a,t,e,n)=>a();function yt(a,t=ar){return{createLinkedBranch(e,n,r){return t(o=>a.request({document:na,variables:e,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",e)},createRef(e,n,r){return t(o=>a.request({document:oa,variables:e,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",e)},deleteLinkedBranch(e,n,r){return t(o=>a.request({document:ia,variables:e,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,n,r){return t(o=>a.request({document:sa,variables:e,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,n,r){return t(o=>a.request({document:ua,variables:e,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,n,r){return t(o=>a.request({document:pa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,n,r){return t(o=>a.request({document:la,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",e)},issueDetails(e,n,r){return t(o=>a.request({document:ca,variables:e,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",e)},searchIssues(e,n,r){return t(o=>a.request({document:ya,variables:e,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",e)},issueByNumber(e,n,r){return t(o=>a.request({document:Sa,variables:e,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",e)},closeIssue(e,n,r){return t(o=>a.request({document:da,variables:e,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",e)},reopenIssue(e,n,r){return t(o=>a.request({document:ba,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",e)},changeIssueAssignees(e,n,r){return t(o=>a.request({document:Ia,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,n,r){return t(o=>a.request({document:Ma,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,n,r){return t(o=>a.request({document:ga,variables:e,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",e)},createIssue(e,n,r){return t(o=>a.request({document:ma,variables:e,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",e)},changeProjectStatus(e,n,r){return t(o=>a.request({document:Ra,variables:e,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",e)},projectDetails(e,n,r){return t(o=>a.request({document:Aa,variables:e,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",e)},searchPullRequests(e,n,r){return t(o=>a.request({document:Pa,variables:e,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",e)},pullRequestDetails(e,n,r){return t(o=>a.request({document:Ea,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,n,r){return t(o=>a.request({document:Ca,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,n,r){return t(o=>a.request({document:fa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,n,r){return t(o=>a.request({document:Da,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",e)},closePullRequest(e,n,r){return t(o=>a.request({document:xa,variables:e,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",e)},reopenPullRequest(e,n,r){return t(o=>a.request({document:Ua,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,n,r){return t(o=>a.request({document:_a,variables:e,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,n,r){return t(o=>a.request({document:va,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,n,r){return t(o=>a.request({document:ha,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,n,r){return t(o=>a.request({document:Ta,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,n,r){return t(o=>a.request({document:wa,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",e)},requestReview(e,n,r){return t(o=>a.request({document:Ba,variables:e,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",e)},mergePullRequest(e,n,r){return t(o=>a.request({document:Oa,variables:e,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,n,r){return t(o=>a.request({document:La,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,n,r){return t(o=>a.request({document:Va,variables:e,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,n,r){return t(o=>a.request({document:Na,variables:e,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,n,r){return t(o=>a.request({document:qa,variables:e,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,n,r){return t(o=>a.request({document:Fa,variables:e,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",e)},initPullRequest(e,n,r){return t(o=>a.request({document:ja,variables:e,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",e)},searchRepositories(e,n,r){return t(o=>a.request({document:ka,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",e)},myLatestRepositories(e,n,r){return t(o=>a.request({document:za,variables:e,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",e)},milestonesForRepository(e,n,r){return t(o=>a.request({document:Ga,variables:e,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",e)},commentsForPullRequest(e,n,r){return t(o=>a.request({document:Ha,variables:e,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",e)},dataForRepository(e,n,r){return t(o=>a.request({document:Qa,variables:e,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",e)},searchRepositoryBranches(e,n,r){return t(o=>a.request({document:$a,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",e)},repositoryIssues(e,n,r){return t(o=>a.request({document:Wa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",e)},repositoryReleases(e,n,r){return t(o=>a.request({document:Ka,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",e)},addStar(e,n,r){return t(o=>a.request({document:Ya,variables:e,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",e)},removeStar(e,n,r){return t(o=>a.request({document:Za,variables:e,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",e)},myStarredRepositories(e,n,r){return t(o=>a.request({document:Xa,variables:e,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",e)},getViewer(e,n,r){return t(o=>a.request({document:Ja,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewer","query",e)},getViewerStats(e,n,r){return t(o=>a.request({document:er,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",e)},getViewerStatsDetails(e,n,r){return t(o=>a.request({document:tr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",e)}}}var Le=null,Ve=null,Mt=null,rr=(0,dt.getPreferenceValues)();function nr({token:a,type:t}){let e=t==="personal"?`token ${a}`:`bearer ${a}`;Mt=a,Le=yt(new It.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ve=new St.Octokit({auth:a,request:{fetch:Ce}})}var gt=bt.OAuthService.github({personalAccessToken:rr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:nr});function ee(){if(!Le||!Ve)throw new Error("GitHub clients not initialized");return{github:Le,octokit:Ve,token:Mt}}function Ne(a){return a?.response?.errors?a.response.errors[0].message:a instanceof Error?a.message:String(a)}var H=require("@raycast/api");var mt=require("@raycast/api");function Rt(a){return a.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:H.Color.SecondaryText},text:"Closed as not planned",color:H.Color.Purple}:a.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:H.Color.Purple},text:"Closed as completed",color:H.Color.Purple}:a.closed?{icon:{source:"issue-closed.svg",tintColor:H.Color.Purple},text:"Closed",color:H.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:H.Color.Green},text:"Open",color:H.Color.Green}}var At=require("@raycast/utils");var Pt=(0,At.withAccessToken)(gt);var xt=require("@raycast/utils");var De=require("node:child_process");var Ct=require("node:util"),L=require("@raycast/api"),or=require("@raycast/utils");var Dn=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:L.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:L.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:L.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:L.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:L.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:L.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:L.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:L.Color.PrimaryText}}];var ir=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],sr=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],ur=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],xn=ir[0].value,Un=sr[0].value,_n=ur[0].value;var vn=(0,Ct.promisify)(De.execFile);var ce="\x1B",Et="\x07",hn=new RegExp(`${ce}][^${Et}${ce}]*(?:${Et}|${ce}\\\\)`,"g"),Tn=new RegExp(`${ce}\\[[0-9;?]*[A-Za-z]`,"g"),wn=new RegExp(`${ce}\\([0-9A-Za-z]`,"g");var ft=require("@raycast/utils");function Dt(){let{github:a}=ee(),{data:t}=(0,ft.useCachedPromise)(async()=>(await a.getViewer()).viewer);return t}function Ut(){let{github:a}=ee(),n=["user:@me",...Dt()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,xt.useCachedPromise)(async r=>{let i=(await Promise.allSettled(r.split(" ").map(c=>a.searchRepositories({query:`${c} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(c=>c.status==="fulfilled"?c.value.search.nodes:[]);return[...new Map(i.map(c=>[c.id,c])).values()].sort((c,u)=>new Date(u.updatedAt).getTime()-new Date(c.updatedAt).getTime())},[n])}var V=require("react/jsx-runtime");function vt({draftValues:a}){let{github:t}=ee(),{data:e,isLoading:n}=Ut(),{handleSubmit:r,itemProps:o,values:i,setValue:c}=(0,xe.useForm)({onSubmit:async()=>{let y=await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Creating a branch"});try{let S;if(i.issue?.length){let A={repositoryId:i.repository,issueId:i.issue,oid:i.oid};S=(await t.createLinkedBranch({input:i.name===""?A:{...A,name:i.name}})).createLinkedBranch?.linkedBranch?.ref?.name}else if(i.name?.length){let A=i.name.startsWith("refs/heads/")?i.name:`refs/heads/${i.name}`;S=(await t.createRef({input:{repositoryId:i.repository,name:A,oid:i.oid}})).createRef?.ref?.name}y.style=d.Toast.Style.Success,y.title=`${S} is created`,S&&(y.primaryAction={title:"Copy Branch Name",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>S&&d.Clipboard.copy(S)},y.secondaryAction={title:"Open in Browser",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:async()=>await(0,d.open)(`${i.repoUrl}/tree/${S}`)})}catch(S){(0,d.captureException)(S),y.style=d.Toast.Style.Failure,y.title="Failed creating a branch",y.message=Ne(S)}},initialValues:{repository:a?.repository??"",issue:a?.issue??"",name:a?.name??""},validation:{name:y=>{if(!i.issue?.length&&!y?.length)return"Name is required when issue is not provided"}}}),{data:u,isLoading:p}=(0,xe.useCachedPromise)(async y=>{let S=e?.find(A=>A.id===y);if(S)return await t.repositoryIssues({owner:S.owner.login,name:S.name})},[i.repository],{execute:!!i.repository}),R=u?.repository?.issues?.nodes?.filter(y=>y?.linkedBranches.totalCount==0);return(0,_t.useEffect)(()=>{let y=u?.repository?.url,S=u?.repository?.defaultBranchRef?.target?.oid;y&&c("repoUrl",y),S&&c("oid",S)},[u?.repository?.url,u?.repository?.defaultBranchRef?.target?.oid]),(0,V.jsxs)(d.Form,{actions:(0,V.jsx)(d.ActionPanel,{children:(0,V.jsx)(d.Action.SubmitForm,{onSubmit:r,title:"Create Branch",icon:{source:"branch.svg",tintColor:d.Color.PrimaryText}})}),enableDrafts:!0,isLoading:n||p,children:[(0,V.jsx)(d.Form.Dropdown,{title:"Repository",isLoading:n,...o.repository,autoFocus:!0,storeValue:!0,children:e?.map(y=>(0,V.jsx)(d.Form.Dropdown.Item,{title:y.nameWithOwner,value:y.id,icon:{source:y.owner.avatarUrl,mask:d.Image.Mask.Circle}},y.id))}),(0,V.jsx)(d.Form.Separator,{}),(0,V.jsxs)(d.Form.Dropdown,{title:"Linked Issue",isLoading:p,...o.issue,info:"If you don't select an issue, a ref pointing to the last commit of the selected repository will be created instead of an issue branch",children:[(0,V.jsx)(d.Form.Dropdown.Item,{title:"No issue",value:""},"default"),R?.map(y=>y?(0,V.jsx)(d.Form.Dropdown.Item,{title:`#${y.number} ${y.title}`,value:y.id,...Rt(y)},y?.id):null)]}),(0,V.jsx)(d.Form.TextField,{title:"Name",placeholder:i.issue?"Optional branch name (ie: my new branch)":"Branch name (ie: refs/heads/my_new_branch)",...o.name})]})}var pr=Pt(vt);0&&(module.exports={BranchForm});
