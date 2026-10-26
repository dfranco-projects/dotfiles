"use strict";var jt=Object.create;var Me=Object.defineProperty;var kt=Object.getOwnPropertyDescriptor;var zt=Object.getOwnPropertyNames;var Gt=Object.getPrototypeOf,Ht=Object.prototype.hasOwnProperty;var he=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(n){throw e=[n],n}};var X=(t,a)=>{for(var e in a)Me(t,e,{get:a[e],enumerable:!0})},Ie=(t,a,e,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of zt(a))!Ht.call(t,r)&&r!==e&&Me(t,r,{get:()=>a[r],enumerable:!(n=kt(a,r))||n.enumerable});return t},x=(t,a,e)=>(Ie(t,a,"default"),e&&Ie(e,a,"default")),N=(t,a,e)=>(e=t!=null?jt(Gt(t)):{},Ie(a||!t||!t.__esModule?Me(e,"default",{value:t,enumerable:!0}):e,t)),Qt=t=>Ie(Me({},"__esModule",{value:!0}),t);var U={};X(U,{default:()=>Ge.default});var Ge,Re=he(()=>{x(U,require("formdata-polyfill/esm.min.js"));Ge=N(require("formdata-polyfill/esm.min.js"))});var h={};X(h,{default:()=>We.default});var We,we=he(()=>{x(h,require("fetch-blob/from.js"));We=N(require("fetch-blob/from.js"))});var Ye={};X(Ye,{toFormData:()=>Xt});function Jt(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",n=e.slice(e.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Xt(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Be(e[1]||e[2]),r,o,l,c,s,u,M=[],f=new U.FormData,A=d=>{l+=S.decode(d,{stream:!0})},g=d=>{M.push(d)},p=()=>{let d=new h.File(M,u,{type:s});f.append(c,d)},D=()=>{f.append(c,l)},S=new TextDecoder("utf-8");S.decode(),n.onPartBegin=function(){n.onPartData=A,n.onPartEnd=D,r="",o="",l="",c="",s="",u=null,M.length=0},n.onHeaderField=function(d){r+=S.decode(d,{stream:!0})},n.onHeaderValue=function(d){o+=S.decode(d,{stream:!0})},n.onHeaderEnd=function(){if(o+=S.decode(),r=r.toLowerCase(),r==="content-disposition"){let d=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);d&&(c=d[2]||d[3]||""),u=Jt(o),u&&(n.onPartData=g,n.onPartEnd=p)}else r==="content-type"&&(s=o);o="",r=""};for await(let d of t)n.write(d);return n.end(),f}var F,I,Ke,W,Pe,Ee,$t,pe,Wt,Kt,Yt,Zt,Y,Be,Ze=he(()=>{we();Re();F=0,I={START_BOUNDARY:F++,HEADER_FIELD_START:F++,HEADER_FIELD:F++,HEADER_VALUE_START:F++,HEADER_VALUE:F++,HEADER_VALUE_ALMOST_DONE:F++,HEADERS_ALMOST_DONE:F++,PART_DATA_START:F++,PART_DATA:F++,END:F++},Ke=1,W={PART_BOUNDARY:Ke,LAST_BOUNDARY:Ke*=2},Pe=10,Ee=13,$t=32,pe=45,Wt=58,Kt=97,Yt=122,Zt=t=>t|32,Y=()=>{},Be=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=Y,this.onHeaderField=Y,this.onHeadersEnd=Y,this.onHeaderValue=Y,this.onPartBegin=Y,this.onPartData=Y,this.onPartEnd=Y,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let n=0;n<a.length;n++)e[n]=a.charCodeAt(n),this.boundaryChars[e[n]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=I.START_BOUNDARY}write(a){let e=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:c,index:s,state:u,flags:M}=this,f=this.boundary.length,A=f-1,g=a.length,p,D,S=b=>{this[b+"Mark"]=e},d=b=>{delete this[b+"Mark"]},E=(b,C,R,oe)=>{(C===void 0||C!==R)&&this[b](oe&&oe.subarray(C,R))},$=(b,C)=>{let R=b+"Mark";R in this&&(C?(E(b,this[R],e,a),delete this[R]):(E(b,this[R],a.length,a),this[R]=0))};for(e=0;e<n;e++)switch(p=a[e],u){case I.START_BOUNDARY:if(s===l.length-2){if(p===pe)M|=W.LAST_BOUNDARY;else if(p!==Ee)return;s++;break}else if(s-1===l.length-2){if(M&W.LAST_BOUNDARY&&p===pe)u=I.END,M=0;else if(!(M&W.LAST_BOUNDARY)&&p===Pe)s=0,E("onPartBegin"),u=I.HEADER_FIELD_START;else return;break}p!==l[s+2]&&(s=-2),p===l[s+2]&&s++;break;case I.HEADER_FIELD_START:u=I.HEADER_FIELD,S("onHeaderField"),s=0;case I.HEADER_FIELD:if(p===Ee){d("onHeaderField"),u=I.HEADERS_ALMOST_DONE;break}if(s++,p===pe)break;if(p===Wt){if(s===1)return;$("onHeaderField",!0),u=I.HEADER_VALUE_START;break}if(D=Zt(p),D<Kt||D>Yt)return;break;case I.HEADER_VALUE_START:if(p===$t)break;S("onHeaderValue"),u=I.HEADER_VALUE;case I.HEADER_VALUE:p===Ee&&($("onHeaderValue",!0),E("onHeaderEnd"),u=I.HEADER_VALUE_ALMOST_DONE);break;case I.HEADER_VALUE_ALMOST_DONE:if(p!==Pe)return;u=I.HEADER_FIELD_START;break;case I.HEADERS_ALMOST_DONE:if(p!==Pe)return;E("onHeadersEnd"),u=I.PART_DATA_START;break;case I.PART_DATA_START:u=I.PART_DATA,S("onPartData");case I.PART_DATA:if(r=s,s===0){for(e+=A;e<g&&!(a[e]in c);)e+=f;e-=A,p=a[e]}if(s<l.length)l[s]===p?(s===0&&$("onPartData",!0),s++):s=0;else if(s===l.length)s++,p===Ee?M|=W.PART_BOUNDARY:p===pe?M|=W.LAST_BOUNDARY:s=0;else if(s-1===l.length)if(M&W.PART_BOUNDARY){if(s=0,p===Pe){M&=~W.PART_BOUNDARY,E("onPartEnd"),E("onPartBegin"),u=I.HEADER_FIELD_START;break}}else M&W.LAST_BOUNDARY&&p===pe?(E("onPartEnd"),u=I.END,M=0):s=0;if(s>0)o[s-1]=p;else if(r>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);E("onPartData",0,r,b),r=0,S("onPartData"),e--}break;case I.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}$("onHeaderField"),$("onHeaderValue"),$("onPartData"),this.index=s,this.state=u,this.flags=M}end(){if(this.state===I.HEADER_FIELD_START&&this.index===0||this.state===I.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==I.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Rr={};X(Rr,{default:()=>mr});module.exports=Qt(Rr);var ze=require("@raycast/api"),Nt=require("@raycast/utils"),qt=require("react");var gt=require("@octokit/rest"),mt=require("@raycast/api"),Rt=require("@raycast/utils"),At=require("graphql-request");var yt=N(require("node:http"),1),St=N(require("node:https"),1),J=N(require("node:zlib"),1),B=N(require("node:stream"),1),ye=require("node:buffer");var ie={};X(ie,{default:()=>ge.default});x(ie,require("data-uri-to-buffer"));var ge=N(require("data-uri-to-buffer"));var O=N(require("node:stream"),1),H=require("node:util"),T=require("node:buffer");var se={};X(se,{default:()=>me.default});x(se,require("fetch-blob"));var me=N(require("fetch-blob"));Re();var G=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var _=class extends G{constructor(a,e,n){super(a,e),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Ae=Symbol.toStringTag,Te=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ae]==="URLSearchParams",ue=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ae]),He=t=>typeof t=="object"&&(t[Ae]==="AbortSignal"||t[Ae]==="EventTarget"),Qe=(t,a)=>{let e=new URL(a).hostname,n=new URL(t).hostname;return e===n||e.endsWith(`.${n}`)},$e=(t,a)=>{let e=new URL(a).protocol,n=new URL(t).protocol;return e===n};var ea=(0,H.promisify)(O.default.pipeline),v=Symbol("Body internals"),j=class{constructor(a,{size:e=0}={}){let n=null;a===null?a=null:Te(a)?a=T.Buffer.from(a.toString()):ue(a)||T.Buffer.isBuffer(a)||(H.types.isAnyArrayBuffer(a)?a=T.Buffer.from(a):ArrayBuffer.isView(a)?a=T.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof O.default||(a instanceof U.FormData?(a=(0,U.formDataToBlob)(a),n=a.type.split("=")[1]):a=T.Buffer.from(String(a))));let r=a;T.Buffer.isBuffer(a)?r=O.default.Readable.from(a):ue(a)&&(r=O.default.Readable.from(a.stream())),this[v]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=e,a instanceof O.default&&a.on("error",o=>{let l=o instanceof G?o:new _(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[v].error=l})}get body(){return this[v].stream}get bodyUsed(){return this[v].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:n}=await Oe(this);return a.slice(e,e+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new U.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:e}=await Promise.resolve().then(()=>(Ze(),Ye));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[v].body&&this[v].body.type||"",e=await this.arrayBuffer();return new me.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Oe(this);return new TextDecoder().decode(a)}buffer(){return Oe(this)}};j.prototype.buffer=(0,H.deprecate)(j.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(j.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,H.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Oe(t){if(t[v].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[v].disturbed=!0,t[v].error)throw t[v].error;let{body:a}=t;if(a===null)return T.Buffer.alloc(0);if(!(a instanceof O.default))return T.Buffer.alloc(0);let e=[],n=0;try{for await(let r of a){if(t.size>0&&n+r.length>t.size){let o=new _(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}n+=r.length,e.push(r)}}catch(r){throw r instanceof G?r:new _(`Invalid response body while trying to fetch ${t.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(r=>typeof r=="string")?T.Buffer.from(e.join("")):T.Buffer.concat(e,n)}catch(r){throw new _(`Could not create Buffer from response body for ${t.url}: ${r.message}`,"system",r)}else throw new _(`Premature close of server response while trying to fetch ${t.url}`)}var ee=(t,a)=>{let e,n,{body:r}=t[v];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof O.default&&typeof r.getBoundary!="function"&&(e=new O.PassThrough({highWaterMark:a}),n=new O.PassThrough({highWaterMark:a}),r.pipe(e),r.pipe(n),t[v].stream=e,r=n),r},ta=(0,H.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ce=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Te(t)?"application/x-www-form-urlencoded;charset=UTF-8":ue(t)?t.type||null:T.Buffer.isBuffer(t)||H.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof U.FormData?`multipart/form-data; boundary=${a[v].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${ta(t)}`:t instanceof O.default?null:"text/plain;charset=UTF-8",Je=t=>{let{body:a}=t[v];return a===null?0:ue(a)?a.size:T.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},Xe=async(t,{body:a})=>{a===null?t.end():await ea(a,t)};var Le=require("node:util"),le=N(require("node:http"),1),fe=typeof le.default.validateHeaderName=="function"?le.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Ve=typeof le.default.validateHeaderValue=="function"?le.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},w=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let n=a.raw();for(let[r,o]of Object.entries(n))e.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!Le.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)e.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(r=>{if(typeof r!="object"||Le.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([n,r])=>(fe(n),Ve(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(e),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,c)=>(fe(l),Ve(l,String(c)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return l=>(fe(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let n=e.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,e=void 0){for(let n of this.keys())Reflect.apply(a,e,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let n=this.getAll(e);return e==="host"?a[e]=n[0]:a[e]=n.length>1?n:n[0],a},{})}};Object.defineProperties(w.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function et(t=[]){return new w(t.reduce((a,e,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,e])=>{try{return fe(a),Ve(a,String(e)),!0}catch{return!1}}))}var aa=new Set([301,302,303,307,308]),De=t=>aa.has(t);var q=Symbol("Response internals"),L=class t extends j{constructor(a=null,e={}){super(a,e);let n=e.status!=null?e.status:200,r=new w(e.headers);if(a!==null&&!r.has("Content-Type")){let o=Ce(a,this);o&&r.append("Content-Type",o)}this[q]={type:"default",url:e.url,status:n,statusText:e.statusText||"",headers:r,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[q].type}get url(){return this[q].url||""}get status(){return this[q].status}get ok(){return this[q].status>=200&&this[q].status<300}get redirected(){return this[q].counter>0}get statusText(){return this[q].statusText}get headers(){return this[q].headers}get highWaterMark(){return this[q].highWaterMark}clone(){return new t(ee(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!De(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[q].type="error",a}static json(a=void 0,e={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new w(e&&e.headers);return r.has("content-type")||r.set("content-type","application/json"),new t(n,{...e,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(L.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var pt=require("node:url"),lt=require("node:util");var tt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var rt=require("node:net");function at(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var nt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ot="strict-origin-when-cross-origin";function it(t){if(!nt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function ra(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,rt.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function te(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:ra(t)}function st(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let n=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let r=t.referrer,o=at(r),l=at(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),e&&(l=e(l));let c=new URL(t.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return te(o)&&!te(c)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:te(o)&&!te(c)?"no-referrer":l;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:l;case"no-referrer-when-downgrade":return te(o)&&!te(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function ut(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let n of a)n&&nt.has(n)&&(e=n);return e}var P=Symbol("Request internals"),ce=t=>typeof t=="object"&&typeof t[P]=="object",na=(0,lt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Z=class t extends j{constructor(a,e={}){let n;if(ce(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!ce(e)&&"data"in e&&na(),(e.body!=null||ce(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ce(a)&&a.body!==null?ee(a):null;super(o,{size:e.size||a.size||0});let l=new w(e.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let u=Ce(o,this);u&&l.set("Content-Type",u)}let c=ce(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!He(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=e.referrer==null?a.referrer:e.referrer;if(s==="")s="no-referrer";else if(s){let u=new URL(s);s=/^about:(\/\/)?client$/.test(u)?"client":u}else s=void 0;this[P]={method:r,redirect:e.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:c,referrer:s},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[P].method}get url(){return(0,pt.format)(this[P].parsedURL)}get headers(){return this[P].headers}get redirect(){return this[P].redirect}get signal(){return this[P].signal}get referrer(){if(this[P].referrer==="no-referrer")return"";if(this[P].referrer==="client")return"about:client";if(this[P].referrer)return this[P].referrer.toString()}get referrerPolicy(){return this[P].referrerPolicy}set referrerPolicy(a){this[P].referrerPolicy=it(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Z.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ct=t=>{let{parsedURL:a}=t[P],e=new w(t[P].headers);e.has("Accept")||e.set("Accept","*/*");let n=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(n="0"),t.body!==null){let c=Je(t);typeof c=="number"&&!Number.isNaN(c)&&(n=String(c))}n&&e.set("Content-Length",n),t.referrerPolicy===""&&(t.referrerPolicy=ot),t.referrer&&t.referrer!=="no-referrer"?t[P].referrer=st(t):t[P].referrer="no-referrer",t[P].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=t;typeof r=="function"&&(r=r(a));let o=tt(a),l={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var xe=class extends G{constructor(a,e="aborted"){super(a,e)}};Re();we();var oa=new Set(["data:","http:","https:"]);async function Ue(t,a){return new Promise((e,n)=>{let r=new Z(t,a),{parsedURL:o,options:l}=ct(r);if(!oa.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let p=(0,ge.default)(r.url),D=new L(p,{headers:{"Content-Type":p.typeFull}});e(D);return}let c=(o.protocol==="https:"?St.default:yt.default).request,{signal:s}=r,u=null,M=()=>{let p=new xe("The operation was aborted.");n(p),r.body&&r.body instanceof B.default.Readable&&r.body.destroy(p),!(!u||!u.body)&&u.body.emit("error",p)};if(s&&s.aborted){M();return}let f=()=>{M(),g()},A=c(o.toString(),l);s&&s.addEventListener("abort",f);let g=()=>{A.abort(),s&&s.removeEventListener("abort",f)};A.on("error",p=>{n(new _(`request to ${r.url} failed, reason: ${p.message}`,"system",p)),g()}),ia(A,p=>{u&&u.body&&u.body.destroy(p)}),process.version<"v14"&&A.on("socket",p=>{let D;p.prependListener("end",()=>{D=p._eventsCount}),p.prependListener("close",S=>{if(u&&D<p._eventsCount&&!S){let d=new Error("Premature close");d.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",d)}})}),A.on("response",p=>{A.setTimeout(0);let D=et(p.rawHeaders);if(De(p.statusCode)){let b=D.get("Location"),C=null;try{C=b===null?null:new URL(b,r.url)}catch{if(r.redirect!=="manual"){n(new _(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),g();return}}switch(r.redirect){case"error":n(new _(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(C===null)break;if(r.counter>=r.follow){n(new _(`maximum redirect reached at: ${r.url}`,"max-redirect")),g();return}let R={headers:new w(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:ee(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Qe(r.url,C)||!$e(r.url,C))for(let Ft of["authorization","www-authenticate","cookie","cookie2"])R.headers.delete(Ft);if(p.statusCode!==303&&r.body&&a.body instanceof B.default.Readable){n(new _("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(p.statusCode===303||(p.statusCode===301||p.statusCode===302)&&r.method==="POST")&&(R.method="GET",R.body=void 0,R.headers.delete("content-length"));let oe=ut(D);oe&&(R.referrerPolicy=oe),e(Ue(new Z(C,R))),g();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&p.once("end",()=>{s.removeEventListener("abort",f)});let S=(0,B.pipeline)(p,new B.PassThrough,b=>{b&&n(b)});process.version<"v12.10"&&p.on("aborted",f);let d={url:r.url,status:p.statusCode,statusText:p.statusMessage,headers:D,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},E=D.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||E===null||p.statusCode===204||p.statusCode===304){u=new L(S,d),e(u);return}let $={flush:J.default.Z_SYNC_FLUSH,finishFlush:J.default.Z_SYNC_FLUSH};if(E==="gzip"||E==="x-gzip"){S=(0,B.pipeline)(S,J.default.createGunzip($),b=>{b&&n(b)}),u=new L(S,d),e(u);return}if(E==="deflate"||E==="x-deflate"){let b=(0,B.pipeline)(p,new B.PassThrough,C=>{C&&n(C)});b.once("data",C=>{(C[0]&15)===8?S=(0,B.pipeline)(S,J.default.createInflate(),R=>{R&&n(R)}):S=(0,B.pipeline)(S,J.default.createInflateRaw(),R=>{R&&n(R)}),u=new L(S,d),e(u)}),b.once("end",()=>{u||(u=new L(S,d),e(u))});return}if(E==="br"){S=(0,B.pipeline)(S,J.default.createBrotliDecompress(),b=>{b&&n(b)}),u=new L(S,d),e(u);return}u=new L(S,d),e(u)}),Xe(A,r).catch(n)})}function ia(t,a){let e=ye.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;t.on("response",l=>{let{headers:c}=l;n=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",l=>{let c=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},s=u=>{r=ye.Buffer.compare(u.slice(-5),e)===0,!r&&o&&(r=ye.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&ye.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};l.prependListener("close",c),l.on("data",s),t.on("close",()=>{l.removeListener("close",c),l.removeListener("data",s)})})}var i=N(require("graphql-tag")),Se=i.default`
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
`,sa=i.default`
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
  ${Se}
`,k=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,de=i.default`
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
`,_e=i.default`
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
  ${de}
  ${Se}
  ${k}
`,ua=i.default`
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
  ${de}
  ${Se}
  ${k}
`,pa=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,dt=i.default`
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
  ${de}
  ${pa}
`,bt=i.default`
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
  ${Se}
  ${de}
  ${k}
`,la=i.default`
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
  ${Se}
  ${de}
  ${k}
`,ca=i.default`
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
`,It=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Ne=i.default`
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
`,ya=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Sa=i.default`
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
`,da=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ba=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ia=i.default`
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
  ${sa}
`,Ma=i.default`
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
`,ga=i.default`
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
`,ma=i.default`
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
`,Ra=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ua}
`,Aa=i.default`
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
  ${_e}
`,Pa=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${_e}
`,Ea=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ca=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,fa=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Da=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,xa=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Ua=i.default`
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
  ${_e}
`,_a=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,va=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${dt}
`,ha=i.default`
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
  ${bt}
`,Ta=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${la}
`,wa=i.default`
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
`,Ba=i.default`
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
`,Oa=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ca}
`,La=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Va=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Na=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,qa=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Fa=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ja=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ka=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,za=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ga=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Ha=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Qa=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,$a=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Wa=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=i.default`
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
`,Ya=i.default`
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
  ${bt}
`,Za=i.default`
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
  ${Ne}
`,Ja=i.default`
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
  ${Ne}
`,Xa=i.default`
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
`,er=i.default`
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
`,tr=i.default`
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
  ${It}
  ${k}
`,ar=i.default`
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
  ${It}
`,rr=i.default`
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
  ${_e}
`,nr=i.default`
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
  ${ya}
`,or=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ir=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,sr=i.default`
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
  ${Ne}
`,ur=i.default`
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
  ${dt}
`,pr=i.default`
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
`,lr=i.default`
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
`,cr=(t,a,e,n)=>t();function Mt(t,a=cr){return{createLinkedBranch(e,n,r){return a(o=>t.request({document:Sa,variables:e,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",e)},createRef(e,n,r){return a(o=>t.request({document:da,variables:e,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",e)},deleteLinkedBranch(e,n,r){return a(o=>t.request({document:ba,variables:e,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,n,r){return a(o=>t.request({document:Ia,variables:e,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,n,r){return a(o=>t.request({document:Ma,variables:e,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,n,r){return a(o=>t.request({document:ga,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,n,r){return a(o=>t.request({document:ma,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",e)},issueDetails(e,n,r){return a(o=>t.request({document:Ra,variables:e,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",e)},searchIssues(e,n,r){return a(o=>t.request({document:Aa,variables:e,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",e)},issueByNumber(e,n,r){return a(o=>t.request({document:Pa,variables:e,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",e)},closeIssue(e,n,r){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",e)},reopenIssue(e,n,r){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",e)},changeIssueAssignees(e,n,r){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,n,r){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,n,r){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",e)},createIssue(e,n,r){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",e)},changeProjectStatus(e,n,r){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",e)},projectDetails(e,n,r){return a(o=>t.request({document:va,variables:e,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",e)},searchPullRequests(e,n,r){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",e)},pullRequestDetails(e,n,r){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,n,r){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,n,r){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,n,r){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",e)},closePullRequest(e,n,r){return a(o=>t.request({document:La,variables:e,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",e)},reopenPullRequest(e,n,r){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,n,r){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,n,r){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,n,r){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,n,r){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,n,r){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",e)},requestReview(e,n,r){return a(o=>t.request({document:za,variables:e,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",e)},mergePullRequest(e,n,r){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,n,r){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,n,r){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,n,r){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",e)},initPullRequest(e,n,r){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",e)},searchRepositories(e,n,r){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",e)},myLatestRepositories(e,n,r){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",e)},milestonesForRepository(e,n,r){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",e)},commentsForPullRequest(e,n,r){return a(o=>t.request({document:er,variables:e,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",e)},dataForRepository(e,n,r){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",e)},searchRepositoryBranches(e,n,r){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",e)},repositoryIssues(e,n,r){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",e)},repositoryReleases(e,n,r){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",e)},addStar(e,n,r){return a(o=>t.request({document:or,variables:e,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",e)},removeStar(e,n,r){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",e)},myStarredRepositories(e,n,r){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",e)},getViewer(e,n,r){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewer","query",e)},getViewerStats(e,n,r){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",e)},getViewerStatsDetails(e,n,r){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",e)}}}var qe=null,Fe=null,Pt=null,yr=(0,mt.getPreferenceValues)();function Sr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;Pt=t,qe=Mt(new At.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Fe=new gt.Octokit({auth:t,request:{fetch:Ue}})}var Et=Rt.OAuthService.github({personalAccessToken:yr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Sr});function K(){if(!qe||!Fe)throw new Error("GitHub clients not initialized");return{github:qe,octokit:Fe,token:Pt}}var Q=require("@raycast/api");var Ut=require("@raycast/utils");var ve=require("node:child_process");var ft=require("node:util"),V=require("@raycast/api"),dr=require("@raycast/utils");function ae(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var Dn=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:V.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:V.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:V.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:V.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:V.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:V.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:V.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:V.Color.PrimaryText}}];var br=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Ir=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Mr=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],xn=br[0].value,Un=Ir[0].value,_n=Mr[0].value;var vn=(0,ft.promisify)(ve.execFile);var be="\x1B",Ct="\x07",hn=new RegExp(`${be}][^${Ct}${be}]*(?:${Ct}|${be}\\\\)`,"g"),Tn=new RegExp(`${be}\\[[0-9;?]*[A-Za-z]`,"g"),wn=new RegExp(`${be}\\([0-9A-Za-z]`,"g");var Dt=require("@raycast/utils");function xt(){let{github:t}=K(),{data:a}=(0,Dt.useCachedPromise)(async()=>(await t.getViewer()).viewer);return a}function _t(){let{github:t}=K(),n=["user:@me",...xt()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,Ut.useCachedPromise)(async r=>{let l=(await Promise.allSettled(r.split(" ").map(c=>t.searchRepositories({query:`${c} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(c=>c.status==="fulfilled"?c.value.search.nodes:[]);return[...new Map(l.map(c=>[c.id,c])).values()].sort((c,s)=>new Date(s.updatedAt).getTime()-new Date(c.updatedAt).getTime())},[n])}var re=require("react/jsx-runtime");function je({setSelectedRepository:t,withAllRepositories:a=!0}){let{data:e}=_t();return(0,re.jsxs)(Q.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:t,children:[a?(0,re.jsx)(Q.List.Dropdown.Item,{value:"",title:"All Repositories",icon:Q.Icon.List}):null,e&&e.length>0?(0,re.jsx)(Q.List.Dropdown.Section,{children:e.map(n=>(0,re.jsx)(Q.List.Dropdown.Item,{title:n.nameWithOwner,value:n.nameWithOwner,icon:{source:n.owner.avatarUrl,mask:Q.Image.Mask.Circle}},n.id))}):null]})}var wt=require("@raycast/api");var m=require("@raycast/api"),vt=require("date-fns");function ht(t){let a=t.status,e=t.conclusion;switch(a){case"queued":return{value:{source:m.Icon.Circle,tintColor:m.Color.Yellow},tooltip:"Status: In Queue"};case"in_progress":return{value:{source:m.Icon.Circle,tintColor:m.Color.Yellow},tooltip:"Status: In Progress"};case"completed":switch(e){case"success":return{value:{source:m.Icon.CheckCircle,tintColor:m.Color.Green},tooltip:`Status: Completed in ${(0,vt.differenceInSeconds)(new Date(t.updated_at),new Date(t.created_at))}s`};case"failure":case"startup_failure":return{value:{source:m.Icon.XMarkCircle,tintColor:m.Color.Red},tooltip:"Status: Failure"};case"neutral":return{value:{source:m.Icon.Circle,tintColor:m.Color.SecondaryText},tooltip:"Status: Neutral"};case"cancelled":return{value:{source:m.Icon.MinusCircle,tintColor:m.Color.SecondaryText},tooltip:"Status: Cancelled"};case"skipped":return{value:{source:m.Icon.Circle,tintColor:m.Color.SecondaryText},tooltip:"Status: Skipped"};case"timed_out":return{value:{source:m.Icon.Circle,tintColor:m.Color.SecondaryText},tooltip:"Status: Timed Out"};case"action_required":return{value:{source:m.Icon.Circle,tintColor:m.Color.SecondaryText},tooltip:"Status: Action Required"};default:return{source:m.Icon.QuestionMark,tooltip:"Status: Unknown"}}default:return{source:m.Icon.QuestionMark,tooltip:"Status: Unknown"}}}var y=require("@raycast/api");var z=require("react/jsx-runtime");function Tt({workflowRun:t,repository:a,mutateList:e}){let{octokit:n}=K(),[r,o]=a.split("/"),l=t.head_sha.slice(0,7),c=[t.head_sha],s=[{text:l,tooltip:`Author: ${t.head_commit?.author?.name??t.head_commit?.author?.email}`}];t.head_branch&&(s.unshift({text:t.head_branch}),c.push(t.head_branch));async function u(){await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Sending re-run request"});try{await n.actions.reRunWorkflow({run_id:t.id,owner:r,repo:o}),await e(),await(0,y.showToast)({style:y.Toast.Style.Success,title:"Sent re-run request",message:"Refresh in 5-10 seconds."})}catch(g){await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Failed sending re-run request",message:ae(g)})}}async function M(){await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Sending re-run workflow failed jobs request"});try{await n.actions.reRunWorkflowFailedJobs({run_id:t.id,owner:r,repo:o}),await e(),await(0,y.showToast)({style:y.Toast.Style.Success,title:"Sent re-run workflow failed jobs request",message:"Refresh in 5-10 seconds."})}catch(g){await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Failed sending re-run workflow failed jobs request",message:ae(g)})}}async function f(){await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Sending cancel request"});try{await n.actions.cancelWorkflowRun({run_id:t.id,owner:r,repo:o}),await e(),await(0,y.showToast)({style:y.Toast.Style.Success,title:"Sent cancel request",message:"Refresh in 10-15 seconds."})}catch(g){await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Failed sending cancel request",message:ae(g)})}}async function A(){await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Deleting Run"});try{await n.actions.deleteWorkflowRun({run_id:t.id,owner:r,repo:o}),await e(),await(0,y.showToast)({style:y.Toast.Style.Success,title:"Deleted run"})}catch(g){await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Failed deleting run",message:ae(g)})}}return(0,z.jsxs)(y.ActionPanel,{title:l,children:[(0,z.jsx)(y.Action.OpenInBrowser,{url:t.html_url}),t.status==="completed"?(0,z.jsx)(y.Action,{title:"Rerun Workflow",icon:y.Icon.Clock,onAction:u}):null,t.status==="completed"&&t.conclusion!=="success"?(0,z.jsx)(y.Action,{title:"Rerun Workflow Failed Jobs",icon:y.Icon.Redo,onAction:M,shortcut:{modifiers:["cmd","shift"],key:"f"}}):null,t.status==="queued"||t.status==="in_progress"?(0,z.jsx)(y.Action,{title:"Cancel Run",icon:y.Icon.XMarkCircle,onAction:f}):null,(0,z.jsx)(y.Action,{icon:y.Icon.Trash,title:"Delete Run",style:y.Action.Style.Destructive,onAction:A,shortcut:{modifiers:["ctrl"],key:"x"}}),(0,z.jsx)(y.ActionPanel.Section,{children:(0,z.jsx)(y.Action,{icon:y.Icon.ArrowClockwise,title:"Refresh",onAction:e,shortcut:y.Keyboard.Shortcut.Common.Refresh})})]})}var ke=require("react/jsx-runtime");function Bt({workflowRun:t,repository:a,mutateList:e}){let n=t.head_sha.slice(0,7),r=[t.head_sha],o=[{text:n,tooltip:`Author: ${t.head_commit?.author?.name??t.head_commit?.author?.email}`}];return t.head_branch&&(o.unshift({tag:t.head_branch}),r.push(t.head_branch)),(0,ke.jsx)(wt.List.Item,{icon:ht(t),title:`${t.name}: ${t.head_commit?.message}`,accessories:o,keywords:r,actions:(0,ke.jsx)(Tt,{workflowRun:t,repository:a,mutateList:e})})}var Ot=require("@raycast/utils");var Lt=(0,Ot.withAccessToken)(Et);var ne=require("react/jsx-runtime"),Vt=25;function gr(){let{octokit:t}=K(),[a,e]=(0,qt.useState)(null),{data:n,isLoading:r,mutate:o,pagination:l}=(0,Nt.useCachedPromise)(s=>async({cursor:u})=>{let[M,f]=s.split("/"),A=u?Number(u):1,g=await t.actions.listWorkflowRunsForRepo({owner:M,repo:f,per_page:Vt,page:A}),p=A*Vt<g.data.total_count;return{data:g.data.workflow_runs,hasMore:p,cursor:p?String(A+1):void 0}},[a],{execute:!!a}),c=[...new Map((n??[]).map(s=>[s.id,s])).values()];return(0,ne.jsxs)(ze.List,{isLoading:r,searchBarPlaceholder:"Filter by title, branch, or commit",searchBarAccessory:(0,ne.jsx)(je,{setSelectedRepository:e,withAllRepositories:!1}),pagination:l,children:[c&&c.length>0?c.map(s=>(0,ne.jsx)(Bt,{workflowRun:s,repository:s.repository.full_name,mutateList:o},s.id)):null,(0,ne.jsx)(ze.List.EmptyView,{title:"No recent workflow runs found"})]})}var mr=Lt(gr);
