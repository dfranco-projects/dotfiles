"use strict";var _t=Object.create;var ye=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var ht=Object.getOwnPropertyNames;var Tt=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty;var fe=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var J=(t,a)=>{for(var e in a)ye(t,e,{get:a[e],enumerable:!0})},ce=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of ht(a))!wt.call(t,n)&&n!==e&&ye(t,n,{get:()=>a[n],enumerable:!(r=vt(a,n))||r.enumerable});return t},U=(t,a,e)=>(ce(t,a,"default"),e&&ce(e,a,"default")),N=(t,a,e)=>(e=t!=null?_t(Tt(t)):{},ce(a||!t||!t.__esModule?ye(e,"default",{value:t,enumerable:!0}):e,t)),Bt=t=>ce(ye({},"__esModule",{value:!0}),t);var x={};J(x,{default:()=>Ve.default});var Ve,be=fe(()=>{U(x,require("formdata-polyfill/esm.min.js"));Ve=N(require("formdata-polyfill/esm.min.js"))});var h={};J(h,{default:()=>Fe.default});var Fe,Ue=fe(()=>{U(h,require("fetch-blob/from.js"));Fe=N(require("fetch-blob/from.js"))});var ze={};J(ze,{toFormData:()=>Ft});function jt(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Ft(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new xe(e[1]||e[2]),n,o,p,S,l,u,y=[],m=new x.FormData,g=b=>{p+=d.decode(b,{stream:!0})},R=b=>{y.push(b)},s=()=>{let b=new h.File(y,u,{type:l});m.append(S,b)},D=()=>{m.append(S,p)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=D,n="",o="",p="",S="",l="",u=null,y.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(S=b[2]||b[3]||""),u=jt(o),u&&(r.onPartData=R,r.onPartEnd=s)}else n==="content-type"&&(l=o);o="",n=""};for await(let b of t)r.write(b);return r.end(),m}var j,M,ke,Q,Me,ge,Ot,oe,Lt,Vt,Nt,qt,W,xe,Ge=fe(()=>{Ue();be();j=0,M={START_BOUNDARY:j++,HEADER_FIELD_START:j++,HEADER_FIELD:j++,HEADER_VALUE_START:j++,HEADER_VALUE:j++,HEADER_VALUE_ALMOST_DONE:j++,HEADERS_ALMOST_DONE:j++,PART_DATA_START:j++,PART_DATA:j++,END:j++},ke=1,Q={PART_BOUNDARY:ke,LAST_BOUNDARY:ke*=2},Me=10,ge=13,Ot=32,oe=45,Lt=58,Vt=97,Nt=122,qt=t=>t|32,W=()=>{},xe=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=W,this.onHeaderField=W,this.onHeadersEnd=W,this.onHeaderValue=W,this.onPartBegin=W,this.onPartData=W,this.onPartEnd=W,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=M.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:p,boundaryChars:S,index:l,state:u,flags:y}=this,m=this.boundary.length,g=m-1,R=a.length,s,D,d=I=>{this[I+"Mark"]=e},b=I=>{delete this[I+"Mark"]},C=(I,f,P,te)=>{(f===void 0||f!==P)&&this[I](te&&te.subarray(f,P))},H=(I,f)=>{let P=I+"Mark";P in this&&(f?(C(I,this[P],e,a),delete this[P]):(C(I,this[P],a.length,a),this[P]=0))};for(e=0;e<r;e++)switch(s=a[e],u){case M.START_BOUNDARY:if(l===p.length-2){if(s===oe)y|=Q.LAST_BOUNDARY;else if(s!==ge)return;l++;break}else if(l-1===p.length-2){if(y&Q.LAST_BOUNDARY&&s===oe)u=M.END,y=0;else if(!(y&Q.LAST_BOUNDARY)&&s===Me)l=0,C("onPartBegin"),u=M.HEADER_FIELD_START;else return;break}s!==p[l+2]&&(l=-2),s===p[l+2]&&l++;break;case M.HEADER_FIELD_START:u=M.HEADER_FIELD,d("onHeaderField"),l=0;case M.HEADER_FIELD:if(s===ge){b("onHeaderField"),u=M.HEADERS_ALMOST_DONE;break}if(l++,s===oe)break;if(s===Lt){if(l===1)return;H("onHeaderField",!0),u=M.HEADER_VALUE_START;break}if(D=qt(s),D<Vt||D>Nt)return;break;case M.HEADER_VALUE_START:if(s===Ot)break;d("onHeaderValue"),u=M.HEADER_VALUE;case M.HEADER_VALUE:s===ge&&(H("onHeaderValue",!0),C("onHeaderEnd"),u=M.HEADER_VALUE_ALMOST_DONE);break;case M.HEADER_VALUE_ALMOST_DONE:if(s!==Me)return;u=M.HEADER_FIELD_START;break;case M.HEADERS_ALMOST_DONE:if(s!==Me)return;C("onHeadersEnd"),u=M.PART_DATA_START;break;case M.PART_DATA_START:u=M.PART_DATA,d("onPartData");case M.PART_DATA:if(n=l,l===0){for(e+=g;e<R&&!(a[e]in S);)e+=m;e-=g,s=a[e]}if(l<p.length)p[l]===s?(l===0&&H("onPartData",!0),l++):l=0;else if(l===p.length)l++,s===ge?y|=Q.PART_BOUNDARY:s===oe?y|=Q.LAST_BOUNDARY:l=0;else if(l-1===p.length)if(y&Q.PART_BOUNDARY){if(l=0,s===Me){y&=~Q.PART_BOUNDARY,C("onPartEnd"),C("onPartBegin"),u=M.HEADER_FIELD_START;break}}else y&Q.LAST_BOUNDARY&&s===oe?(C("onPartEnd"),u=M.END,y=0):l=0;if(l>0)o[l-1]=s;else if(n>0){let I=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);C("onPartData",0,n,I),n=0,d("onPartData"),e--}break;case M.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}H("onHeaderField"),H("onHeaderValue"),H("onPartData"),this.index=l,this.state=u,this.flags=y}end(){if(this.state===M.HEADER_FIELD_START&&this.index===0||this.state===M.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==M.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var pr={};J(pr,{default:()=>sr});module.exports=Bt(pr);var c=require("@raycast/api"),Dt=require("@raycast/utils"),Ut=require("react");var ct=require("@octokit/rest"),yt=require("@raycast/api"),St=require("@raycast/utils"),dt=require("graphql-request");var ot=N(require("node:http"),1),it=N(require("node:https"),1),Y=N(require("node:zlib"),1),B=N(require("node:stream"),1),se=require("node:buffer");var ae={};J(ae,{default:()=>Se.default});U(ae,require("data-uri-to-buffer"));var Se=N(require("data-uri-to-buffer"));var L=N(require("node:stream"),1),G=require("node:util"),T=require("node:buffer");var re={};J(re,{default:()=>de.default});U(re,require("fetch-blob"));var de=N(require("fetch-blob"));be();var z=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var _=class extends z{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ie=Symbol.toStringTag,De=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ie]==="URLSearchParams",ne=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ie]),Ne=t=>typeof t=="object"&&(t[Ie]==="AbortSignal"||t[Ie]==="EventTarget"),qe=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},je=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var kt=(0,G.promisify)(L.default.pipeline),v=Symbol("Body internals"),F=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:De(a)?a=T.Buffer.from(a.toString()):ne(a)||T.Buffer.isBuffer(a)||(G.types.isAnyArrayBuffer(a)?a=T.Buffer.from(a):ArrayBuffer.isView(a)?a=T.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof L.default||(a instanceof x.FormData?(a=(0,x.formDataToBlob)(a),r=a.type.split("=")[1]):a=T.Buffer.from(String(a))));let n=a;T.Buffer.isBuffer(a)?n=L.default.Readable.from(a):ne(a)&&(n=L.default.Readable.from(a.stream())),this[v]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof L.default&&a.on("error",o=>{let p=o instanceof z?o:new _(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[v].error=p})}get body(){return this[v].stream}get bodyUsed(){return this[v].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await _e(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new x.FormData,n=new URLSearchParams(await this.text());for(let[o,p]of n)r.append(o,p);return r}let{toFormData:e}=await Promise.resolve().then(()=>(Ge(),ze));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[v].body&&this[v].body.type||"",e=await this.arrayBuffer();return new de.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await _e(this);return new TextDecoder().decode(a)}buffer(){return _e(this)}};F.prototype.buffer=(0,G.deprecate)(F.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(F.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,G.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function _e(t){if(t[v].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[v].disturbed=!0,t[v].error)throw t[v].error;let{body:a}=t;if(a===null)return T.Buffer.alloc(0);if(!(a instanceof L.default))return T.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new _(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof z?n:new _(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?T.Buffer.from(e.join("")):T.Buffer.concat(e,r)}catch(n){throw new _(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new _(`Premature close of server response while trying to fetch ${t.url}`)}var X=(t,a)=>{let e,r,{body:n}=t[v];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof L.default&&typeof n.getBoundary!="function"&&(e=new L.PassThrough({highWaterMark:a}),r=new L.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[v].stream=e,n=r),n},zt=(0,G.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),me=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":De(t)?"application/x-www-form-urlencoded;charset=UTF-8":ne(t)?t.type||null:T.Buffer.isBuffer(t)||G.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof x.FormData?`multipart/form-data; boundary=${a[v].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${zt(t)}`:t instanceof L.default?null:"text/plain;charset=UTF-8",He=t=>{let{body:a}=t[v];return a===null?0:ne(a)?a.size:T.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},Qe=async(t,{body:a})=>{a===null?t.end():await kt(a,t)};var ve=require("node:util"),ie=N(require("node:http"),1),Re=typeof ie.default.validateHeaderName=="function"?ie.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},he=typeof ie.default.validateHeaderValue=="function"?ie.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},w=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(p=>[n,p]))}else if(a!=null)if(typeof a=="object"&&!ve.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||ve.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(Re(r),he(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(p,S)=>(Re(p),he(p,String(S)),URLSearchParams.prototype[n].call(r,String(p).toLowerCase(),String(S)));case"delete":case"has":case"getAll":return p=>(Re(p),URLSearchParams.prototype[n].call(r,String(p).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(w.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function $e(t=[]){return new w(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return Re(a),he(a,String(e)),!0}catch{return!1}}))}var Gt=new Set([301,302,303,307,308]),Ae=t=>Gt.has(t);var q=Symbol("Response internals"),V=class t extends F{constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new w(e.headers);if(a!==null&&!n.has("Content-Type")){let o=me(a,this);o&&n.append("Content-Type",o)}this[q]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[q].type}get url(){return this[q].url||""}get status(){return this[q].status}get ok(){return this[q].status>=200&&this[q].status<300}get redirected(){return this[q].counter>0}get statusText(){return this[q].statusText}get headers(){return this[q].headers}get highWaterMark(){return this[q].highWaterMark}clone(){return new t(X(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!Ae(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[q].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new w(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(V.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var at=require("node:url"),rt=require("node:util");var We=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var Ye=require("node:net");function Ke(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var Ze=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Je="strict-origin-when-cross-origin";function Xe(t){if(!Ze.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function Ht(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,Ye.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function ee(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:Ht(t)}function et(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=Ke(n),p=Ke(n,!0);o.toString().length>4096&&(o=p),a&&(o=a(o)),e&&(p=e(p));let S=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return p;case"unsafe-url":return o;case"strict-origin":return ee(o)&&!ee(S)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return o.origin===S.origin?o:ee(o)&&!ee(S)?"no-referrer":p;case"same-origin":return o.origin===S.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===S.origin?o:p;case"no-referrer-when-downgrade":return ee(o)&&!ee(S)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function tt(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&Ze.has(r)&&(e=r);return e}var E=Symbol("Request internals"),ue=t=>typeof t=="object"&&typeof t[E]=="object",Qt=(0,rt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),K=class t extends F{constructor(a,e={}){let r;if(ue(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ue(e)&&"data"in e&&Qt(),(e.body!=null||ue(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ue(a)&&a.body!==null?X(a):null;super(o,{size:e.size||a.size||0});let p=new w(e.headers||a.headers||{});if(o!==null&&!p.has("Content-Type")){let u=me(o,this);u&&p.set("Content-Type",u)}let S=ue(a)?a.signal:null;if("signal"in e&&(S=e.signal),S!=null&&!Ne(S))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let l=e.referrer==null?a.referrer:e.referrer;if(l==="")l="no-referrer";else if(l){let u=new URL(l);l=/^about:(\/\/)?client$/.test(u)?"client":u}else l=void 0;this[E]={method:n,redirect:e.redirect||a.redirect||"follow",headers:p,parsedURL:r,signal:S,referrer:l},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[E].method}get url(){return(0,at.format)(this[E].parsedURL)}get headers(){return this[E].headers}get redirect(){return this[E].redirect}get signal(){return this[E].signal}get referrer(){if(this[E].referrer==="no-referrer")return"";if(this[E].referrer==="client")return"about:client";if(this[E].referrer)return this[E].referrer.toString()}get referrerPolicy(){return this[E].referrerPolicy}set referrerPolicy(a){this[E].referrerPolicy=Xe(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(K.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var nt=t=>{let{parsedURL:a}=t[E],e=new w(t[E].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let S=He(t);typeof S=="number"&&!Number.isNaN(S)&&(r=String(S))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=Je),t.referrer&&t.referrer!=="no-referrer"?t[E].referrer=et(t):t[E].referrer="no-referrer",t[E].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=We(a),p={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:p}};var Pe=class extends z{constructor(a,e="aborted"){super(a,e)}};be();Ue();var $t=new Set(["data:","http:","https:"]);async function Ee(t,a){return new Promise((e,r)=>{let n=new K(t,a),{parsedURL:o,options:p}=nt(n);if(!$t.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let s=(0,Se.default)(n.url),D=new V(s,{headers:{"Content-Type":s.typeFull}});e(D);return}let S=(o.protocol==="https:"?it.default:ot.default).request,{signal:l}=n,u=null,y=()=>{let s=new Pe("The operation was aborted.");r(s),n.body&&n.body instanceof B.default.Readable&&n.body.destroy(s),!(!u||!u.body)&&u.body.emit("error",s)};if(l&&l.aborted){y();return}let m=()=>{y(),R()},g=S(o.toString(),p);l&&l.addEventListener("abort",m);let R=()=>{g.abort(),l&&l.removeEventListener("abort",m)};g.on("error",s=>{r(new _(`request to ${n.url} failed, reason: ${s.message}`,"system",s)),R()}),Wt(g,s=>{u&&u.body&&u.body.destroy(s)}),process.version<"v14"&&g.on("socket",s=>{let D;s.prependListener("end",()=>{D=s._eventsCount}),s.prependListener("close",d=>{if(u&&D<s._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",b)}})}),g.on("response",s=>{g.setTimeout(0);let D=$e(s.rawHeaders);if(Ae(s.statusCode)){let I=D.get("Location"),f=null;try{f=I===null?null:new URL(I,n.url)}catch{if(n.redirect!=="manual"){r(new _(`uri requested responds with an invalid redirect URL: ${I}`,"invalid-redirect")),R();return}}switch(n.redirect){case"error":r(new _(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),R();return;case"manual":break;case"follow":{if(f===null)break;if(n.counter>=n.follow){r(new _(`maximum redirect reached at: ${n.url}`,"max-redirect")),R();return}let P={headers:new w(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:X(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!qe(n.url,f)||!je(n.url,f))for(let xt of["authorization","www-authenticate","cookie","cookie2"])P.headers.delete(xt);if(s.statusCode!==303&&n.body&&a.body instanceof B.default.Readable){r(new _("Cannot follow redirect with body being a readable stream","unsupported-redirect")),R();return}(s.statusCode===303||(s.statusCode===301||s.statusCode===302)&&n.method==="POST")&&(P.method="GET",P.body=void 0,P.headers.delete("content-length"));let te=tt(D);te&&(P.referrerPolicy=te),e(Ee(new K(f,P))),R();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}l&&s.once("end",()=>{l.removeEventListener("abort",m)});let d=(0,B.pipeline)(s,new B.PassThrough,I=>{I&&r(I)});process.version<"v12.10"&&s.on("aborted",m);let b={url:n.url,status:s.statusCode,statusText:s.statusMessage,headers:D,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},C=D.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||C===null||s.statusCode===204||s.statusCode===304){u=new V(d,b),e(u);return}let H={flush:Y.default.Z_SYNC_FLUSH,finishFlush:Y.default.Z_SYNC_FLUSH};if(C==="gzip"||C==="x-gzip"){d=(0,B.pipeline)(d,Y.default.createGunzip(H),I=>{I&&r(I)}),u=new V(d,b),e(u);return}if(C==="deflate"||C==="x-deflate"){let I=(0,B.pipeline)(s,new B.PassThrough,f=>{f&&r(f)});I.once("data",f=>{(f[0]&15)===8?d=(0,B.pipeline)(d,Y.default.createInflate(),P=>{P&&r(P)}):d=(0,B.pipeline)(d,Y.default.createInflateRaw(),P=>{P&&r(P)}),u=new V(d,b),e(u)}),I.once("end",()=>{u||(u=new V(d,b),e(u))});return}if(C==="br"){d=(0,B.pipeline)(d,Y.default.createBrotliDecompress(),I=>{I&&r(I)}),u=new V(d,b),e(u);return}u=new V(d,b),e(u)}),Qe(g,n).catch(r)})}function Wt(t,a){let e=se.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",p=>{let{headers:S}=p;r=S["transfer-encoding"]==="chunked"&&!S["content-length"]}),t.on("socket",p=>{let S=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},l=u=>{n=se.Buffer.compare(u.slice(-5),e)===0,!n&&o&&(n=se.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&se.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};p.prependListener("close",S),p.on("data",l),t.on("close",()=>{p.removeListener("close",S),p.removeListener("data",l)})})}var i=N(require("graphql-tag")),pe=i.default`
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
`,Kt=i.default`
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
`,k=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,le=i.default`
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
`,Ce=i.default`
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
`,Yt=i.default`
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
`,Zt=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,ut=i.default`
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
  ${Zt}
`,st=i.default`
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
`,Jt=i.default`
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
`,Xt=i.default`
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
`,pt=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Te=i.default`
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
`,ea=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,ta=i.default`
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
`,aa=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ra=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,na=i.default`
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
  ${Kt}
`,oa=i.default`
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
`,ia=i.default`
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
`,ua=i.default`
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
`,sa=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Yt}
`,pa=i.default`
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
  ${Ce}
`,la=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ce}
`,ca=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ya=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Sa=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,da=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ba=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Ia=i.default`
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
  ${Ce}
`,Ma=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ga=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${ut}
`,ma=i.default`
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
  ${st}
`,Ra=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Jt}
`,Aa=i.default`
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
`,Pa=i.default`
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
`,Ea=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Xt}
`,Ca=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,fa=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Da=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ua=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,xa=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,_a=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,va=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ha=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ta=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,wa=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Ba=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Oa=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,La=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Va=i.default`
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
`,Na=i.default`
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
  ${st}
`,qa=i.default`
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
  ${Te}
`,ja=i.default`
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
  ${Te}
`,Fa=i.default`
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
`,ka=i.default`
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
`,za=i.default`
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
  ${pt}
  ${k}
`,Ga=i.default`
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
  ${pt}
`,Ha=i.default`
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
  ${Ce}
`,Qa=i.default`
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
  ${ea}
`,$a=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Wa=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ka=i.default`
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
  ${Te}
`,Ya=i.default`
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
  ${ut}
`,Za=i.default`
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
`,Ja=i.default`
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
`,Xa=(t,a,e,r)=>t();function lt(t,a=Xa){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:ta,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:aa,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:ra,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:na,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:oa,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:ia,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:ua,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:sa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:pa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:la,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:ca,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:ya,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:Sa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:da,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:ba,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:Ia,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:Ma,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:ga,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:ma,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var we=null,Be=null,bt=null,er=(0,yt.getPreferenceValues)();function tr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;bt=t,we=lt(new dt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Be=new ct.Octokit({auth:t,request:{fetch:Ee}})}var It=St.OAuthService.github({personalAccessToken:er.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:tr});function $(){if(!we||!Be)throw new Error("GitHub clients not initialized");return{github:we,octokit:Be,token:bt}}var A=require("@raycast/api"),Mt=require("date-fns");function ar(t,a){return`notification_referrer_id=${Buffer.from(`018:NotificationThread${t}:${a}`).toString("base64")}`}function Oe(t,a,e,r=""){let n=t.replace("api.github.com/repos","github.com");if(n.indexOf("/pulls/")!==-1&&(n=n.replace("/pulls/","/pull/")),n.indexOf("/releases/")!==-1&&(n=n.replace("/repos",""),n=n.substring(0,n.lastIndexOf("/"))),e){let o=ar(a,e);return`${n}?${o}${r}`}return n}var rr=t=>t?/comments\/(?<id>\d+)/g.exec(t)?.groups?.id:void 0;async function gt(t,a){if(t.subject.url){let e=rr(t.subject.latest_comment_url);return Oe(t.subject.url,t.id,a,e?"#issuecomment-"+e:void 0)}else{if(t.subject.type==="CheckSuite")return Oe(`${t.repository.html_url}/actions`,t.id,a);if(t.subject.type==="Discussion"){let e=null;try{e=await ir(t)}catch(r){console.error("Failed to get discussion number",r)}return Oe(`${t.repository.html_url}/discussions/${e??""}`,t.id,a)}}return t.url}async function mt(t){try{if(t.subject.type==="PullRequest"){let{octokit:e}=$(),r=await e.pulls.get({owner:t.repository.owner.login,repo:t.repository.name,pull_number:parseInt(t.subject.url.split("/").at(-1))});return r.data.merged?{value:{source:"pull-request-merged.svg",tintColor:A.Color.Purple},tooltip:"Merged"}:r.data.state==="closed"?{value:{source:"pull-request-closed.svg",tintColor:A.Color.Red},tooltip:"Closed"}:r.data.draft?{value:{source:"pull-request-draft.svg",tintColor:A.Color.SecondaryText},tooltip:"Draft"}:{value:{source:"pull-request-open.svg",tintColor:A.Color.Green},tooltip:"Open"}}if(t.subject.type==="Issue"){let{octokit:e}=$(),r=await e.rest.issues.get({owner:t.repository.owner.login,repo:t.repository.name,issue_number:parseInt(t.subject.url.split("/").at(-1))});return r.data.state==="closed"?r.data.state_reason==="completed"?{value:{source:"issue-closed.svg",tintColor:A.Color.Purple},tooltip:"Closed as completed"}:r.data.state_reason==="not_planned"?{value:{source:"skip.svg",tintColor:A.Color.SecondaryText},tooltip:"Closed as not planned"}:{value:{source:"issue-closed.svg",tintColor:A.Color.Purple},tooltip:"Closed"}:{value:{source:"issue-open.svg",tintColor:A.Color.Green},tooltip:"Open"}}let a;switch(t.subject.type){case"Commit":a={value:{source:"commit.svg"},tooltip:"Commit"};break;case"Release":a={value:{source:"tag.svg",tintColor:A.Color.Blue},tooltip:"Release"};break;case"CheckSuite":a={value:t.subject.title.match(/(succeeded)/i)?{source:A.Icon.CheckCircle,tintColor:A.Color.Green}:t.subject.title.match(/(failed)/i)?{source:A.Icon.XMarkCircle,tintColor:A.Color.Red}:t.subject.title.match(/(skipped|cancelled)/i)?{source:"skip.svg",tintColor:A.Color.SecondaryText}:{source:A.Icon.QuestionMarkCircle,tintColor:A.Color.SecondaryText},tooltip:"Workflow Run"};break;case"Discussion":a={value:{source:"comment-discussion.svg"},tooltip:"Comment"};break;case"RepositoryInvitation":a={value:{source:"mail.svg"},tooltip:"Repository Invitation"};break;case"RepositoryVulnerabilityAlert":a={value:{source:"alert.svg"},tooltip:"Repository} Vulnerability Alert"};break;default:a={value:{source:A.Icon.Circle},tooltip:"Unknown"};break}return a.tooltip=`Subject type: ${a.tooltip}`,a}catch{return{value:{source:A.Icon.Warning,tintColor:A.Color.Red},tooltip:"Could not load icon"}}}function Rt(t){let a=nr(t),e=or(t);return e?`${e} \uFF65 ${t.repository.full_name} \uFF65 ${a}`:`${t.repository.full_name} \uFF65 ${a}`}function nr(t){switch(t.reason){case"assign":return"Assigned";case"author":return"Author";case"comment":return"Commented";case"ci_activity":return"CI Activity";case"invitation":return"Invited";case"manual":return"Subscribed";case"mention":return"Mentioned";case"review_requested":return"Review Requested";case"security_alert":return"Security Alert";case"state_change":return"Changed";case"subscribed":return"Watching";case"team_mention":return"Team Mentioned";default:return""}}function or(t){if(t.subject.type!=="Issue"&&t.subject.type!=="PullRequest")return;let a=t.subject.url?.split("/").at(-1);return a?`#${a}`:void 0}function At(t){return`Updated: ${(0,Mt.format)(t,"EEEE d MMMM yyyy 'at' HH:mm")}`}function Le(t=!1){return{source:t?"github-unread.svg":"github.svg",tintColor:A.Color.PrimaryText}}async function ir(t){let{github:a}=$(),e=t.repository.full_name,r=t.updated_at.split("T")[0],n=t.subject.title;return(await a.getGitHubDiscussionNumber({filter:`repo:${e} updated:>=${r} in:title ${n}`}))?.search?.nodes?.[0]?.number??null}var Pt=require("@raycast/utils");var Et=(0,Pt.withAccessToken)(It);var Ct=require("@raycast/utils");function ft(){let{github:t}=$(),{data:a}=(0,Ct.useCachedPromise)(async()=>(await t.getViewer()).viewer);return a}var O=require("react/jsx-runtime"),Z=(0,c.getPreferenceValues)();function ur(){let{octokit:t}=$(),a=ft(),e=(0,Ut.useMemo)(()=>Z.repositoryList?Z.repositoryList.split(",").map(y=>y.trim()).filter(y=>y.length>0):[],[Z.repositoryList]),{data:r,isLoading:n,mutate:o}=(0,Dt.useCachedPromise)(async()=>{let m=await t.paginate(t.activity.listNotificationsForAuthenticatedUser,{per_page:50});return Z.repositoryFilterMode!=="all"&&e.length>0&&(Z.repositoryFilterMode==="include"?m=m.filter(g=>e.some(R=>R.toLowerCase()===g.repository.full_name.toLowerCase())):m=m.filter(g=>!e.some(R=>R.toLowerCase()===g.repository.full_name.toLowerCase()))),Promise.all(m.map(async g=>{let R=await mt(g);return{...g,icon:R}}))}),p=r&&r.length>0;async function S(){try{await o(t.activity.markNotificationsAsRead(),{optimisticUpdate(){return[]}}),(0,c.showToast)({style:c.Toast.Style.Success,title:"Marked all notifications as read"})}catch{(0,c.showToast)({style:c.Toast.Style.Failure,title:"Could not mark all notifications as read"})}}async function l(y){try{await o((async()=>{y.subject.type==="RepositoryInvitation"?(0,c.open)(`${y.repository.html_url}/invitations`):(await(0,c.open)(await gt(y,a?.id)),await t.activity.markThreadAsRead({thread_id:parseInt(y.id)}))})(),{optimisticUpdate(g){return g?.filter(R=>R.id!==y.id)??[]}})}catch{(0,c.showToast)({style:c.Toast.Style.Failure,title:"Could not open notification"})}}async function u(y){try{await o(t.activity.markThreadAsRead({thread_id:parseInt(y.id)}),{optimisticUpdate(m){return m?.filter(g=>g.id!==y.id)??[]}})}catch{(0,c.showToast)({style:c.Toast.Style.Failure,title:"Could not mark notification as read"})}}return!Z.alwaysShow&&!n&&r&&r.length===0?null:(0,O.jsxs)(c.MenuBarExtra,{icon:Le(p),title:Z.showUnreadCount&&p?String(r.length):void 0,isLoading:n,children:[(0,O.jsx)(c.MenuBarExtra.Item,{icon:Le(),title:"Open GitHub Notifications",shortcut:c.Keyboard.Shortcut.Common.Open,onAction:()=>(0,c.open)("https://github.com/notifications")}),(0,O.jsx)(c.MenuBarExtra.Section,{children:p?r.map(y=>{let m=y.subject.title,g=new Date(y.updated_at),R=At(g);return(0,O.jsx)(c.MenuBarExtra.Item,{icon:{source:y.icon.value.source,tintColor:c.Color.PrimaryText},title:m,subtitle:Rt(y),tooltip:R,onAction:()=>l(y),alternate:(0,O.jsx)(c.MenuBarExtra.Item,{icon:{source:y.icon.value.source,tintColor:c.Color.PrimaryText},title:m,subtitle:"Mark as Read",tooltip:R,onAction:()=>u(y)})},y.id)}):(0,O.jsx)(c.MenuBarExtra.Item,{title:"No Unread Notifications"})}),(0,O.jsxs)(c.MenuBarExtra.Section,{children:[p?(0,O.jsx)(c.MenuBarExtra.Item,{title:"Mark All as Read",icon:c.Icon.Checkmark,shortcut:{modifiers:["cmd"],key:"i"},onAction:S}):null,(0,O.jsx)(c.MenuBarExtra.Item,{title:"View All Notifications",icon:c.Icon.Eye,shortcut:c.Keyboard.Shortcut.Common.OpenWith,onAction:()=>(0,c.launchCommand)({name:"notifications",type:c.LaunchType.UserInitiated})}),(0,O.jsx)(c.MenuBarExtra.Item,{title:"Configure Command",icon:c.Icon.Gear,shortcut:{modifiers:["cmd"],key:","},onAction:c.openCommandPreferences,alternate:(0,O.jsx)(c.MenuBarExtra.Item,{title:"Configure Extension",icon:c.Icon.Gear,onAction:c.openExtensionPreferences})})]})]})}var sr=Et(ur);
