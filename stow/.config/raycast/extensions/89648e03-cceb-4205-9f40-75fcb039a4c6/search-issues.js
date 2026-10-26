"use strict";var Aa=Object.create;var Le=Object.defineProperty;var Pa=Object.getOwnPropertyDescriptor;var Ea=Object.getOwnPropertyNames;var Ca=Object.getPrototypeOf,fa=Object.prototype.hasOwnProperty;var at=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var Se=(e,a)=>{for(var t in a)Le(e,t,{get:a[t],enumerable:!0})},Oe=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Ea(a))!fa.call(e,r)&&r!==t&&Le(e,r,{get:()=>a[r],enumerable:!(n=Pa(a,r))||n.enumerable});return e},O=(e,a,t)=>(Oe(e,a,"default"),t&&Oe(t,a,"default")),G=(e,a,t)=>(t=e!=null?Aa(Ca(e)):{},Oe(a||!e||!e.__esModule?Le(t,"default",{value:e,enumerable:!0}):t,e)),Da=e=>Oe(Le({},"__esModule",{value:!0}),e);var L={};Se(L,{default:()=>Mt.default});var Mt,qe=at(()=>{O(L,require("formdata-polyfill/esm.min.js"));Mt=G(require("formdata-polyfill/esm.min.js"))});var F={};Se(F,{default:()=>Pt.default});var Pt,nt=at(()=>{O(F,require("fetch-blob/from.js"));Pt=G(require("fetch-blob/from.js"))});var Ct={};Se(Ct,{toFormData:()=>wa});function Ta(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function wa(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new ot(t[1]||t[2]),r,o,p,c,s,u,m=[],b=new L.FormData,x=R=>{p+=A.decode(R,{stream:!0})},U=R=>{m.push(R)},d=()=>{let R=new F.File(m,u,{type:s});b.append(c,R)},D=()=>{b.append(c,p)},A=new TextDecoder("utf-8");A.decode(),n.onPartBegin=function(){n.onPartData=x,n.onPartEnd=D,r="",o="",p="",c="",s="",u=null,m.length=0},n.onHeaderField=function(R){r+=A.decode(R,{stream:!0})},n.onHeaderValue=function(R){o+=A.decode(R,{stream:!0})},n.onHeaderEnd=function(){if(o+=A.decode(),r=r.toLowerCase(),r==="content-disposition"){let R=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);R&&(c=R[2]||R[3]||""),u=Ta(o),u&&(n.onPartData=U,n.onPartEnd=d)}else r==="content-type"&&(s=o);o="",r=""};for await(let R of e)n.write(R);return n.end(),b}var K,C,Et,ie,je,ke,xa,Pe,Ua,_a,ha,va,pe,ot,ft=at(()=>{nt();qe();K=0,C={START_BOUNDARY:K++,HEADER_FIELD_START:K++,HEADER_FIELD:K++,HEADER_VALUE_START:K++,HEADER_VALUE:K++,HEADER_VALUE_ALMOST_DONE:K++,HEADERS_ALMOST_DONE:K++,PART_DATA_START:K++,PART_DATA:K++,END:K++},Et=1,ie={PART_BOUNDARY:Et,LAST_BOUNDARY:Et*=2},je=10,ke=13,xa=32,Pe=45,Ua=58,_a=97,ha=122,va=e=>e|32,pe=()=>{},ot=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=pe,this.onHeaderField=pe,this.onHeadersEnd=pe,this.onHeaderValue=pe,this.onPartBegin=pe,this.onPartData=pe,this.onPartEnd=pe,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=C.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:p,boundaryChars:c,index:s,state:u,flags:m}=this,b=this.boundary.length,x=b-1,U=a.length,d,D,A=S=>{this[S+"Mark"]=t},R=S=>{delete this[S+"Mark"]},P=(S,g,E,ue)=>{(g===void 0||g!==E)&&this[S](ue&&ue.subarray(g,E))},l=(S,g)=>{let E=S+"Mark";E in this&&(g?(P(S,this[E],t,a),delete this[E]):(P(S,this[E],a.length,a),this[E]=0))};for(t=0;t<n;t++)switch(d=a[t],u){case C.START_BOUNDARY:if(s===p.length-2){if(d===Pe)m|=ie.LAST_BOUNDARY;else if(d!==ke)return;s++;break}else if(s-1===p.length-2){if(m&ie.LAST_BOUNDARY&&d===Pe)u=C.END,m=0;else if(!(m&ie.LAST_BOUNDARY)&&d===je)s=0,P("onPartBegin"),u=C.HEADER_FIELD_START;else return;break}d!==p[s+2]&&(s=-2),d===p[s+2]&&s++;break;case C.HEADER_FIELD_START:u=C.HEADER_FIELD,A("onHeaderField"),s=0;case C.HEADER_FIELD:if(d===ke){R("onHeaderField"),u=C.HEADERS_ALMOST_DONE;break}if(s++,d===Pe)break;if(d===Ua){if(s===1)return;l("onHeaderField",!0),u=C.HEADER_VALUE_START;break}if(D=va(d),D<_a||D>ha)return;break;case C.HEADER_VALUE_START:if(d===xa)break;A("onHeaderValue"),u=C.HEADER_VALUE;case C.HEADER_VALUE:d===ke&&(l("onHeaderValue",!0),P("onHeaderEnd"),u=C.HEADER_VALUE_ALMOST_DONE);break;case C.HEADER_VALUE_ALMOST_DONE:if(d!==je)return;u=C.HEADER_FIELD_START;break;case C.HEADERS_ALMOST_DONE:if(d!==je)return;P("onHeadersEnd"),u=C.PART_DATA_START;break;case C.PART_DATA_START:u=C.PART_DATA,A("onPartData");case C.PART_DATA:if(r=s,s===0){for(t+=x;t<U&&!(a[t]in c);)t+=b;t-=x,d=a[t]}if(s<p.length)p[s]===d?(s===0&&l("onPartData",!0),s++):s=0;else if(s===p.length)s++,d===ke?m|=ie.PART_BOUNDARY:d===Pe?m|=ie.LAST_BOUNDARY:s=0;else if(s-1===p.length)if(m&ie.PART_BOUNDARY){if(s=0,d===je){m&=~ie.PART_BOUNDARY,P("onPartEnd"),P("onPartBegin"),u=C.HEADER_FIELD_START;break}}else m&ie.LAST_BOUNDARY&&d===Pe?(P("onPartEnd"),u=C.END,m=0):s=0;if(s>0)o[s-1]=d;else if(r>0){let S=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);P("onPartData",0,r,S),r=0,A("onPartData"),t--}break;case C.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}l("onHeaderField"),l("onHeaderValue"),l("onPartData"),this.index=s,this.state=u,this.flags=m}end(){if(this.state===C.HEADER_FIELD_START&&this.index===0||this.state===C.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==C.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var ln={};Se(ln,{default:()=>pn});module.exports=Da(ln);var Be=require("@raycast/api"),tt=require("@raycast/utils"),ma=require("lodash"),gt=require("react");var Qt=require("@octokit/rest"),$t=require("@raycast/api"),Wt=require("@raycast/utils"),Kt=require("graphql-request");var Ft=G(require("node:http"),1),jt=G(require("node:https"),1),ce=G(require("node:zlib"),1),z=G(require("node:stream"),1),fe=require("node:buffer");var me={};Se(me,{default:()=>Ve.default});O(me,require("data-uri-to-buffer"));var Ve=G(require("data-uri-to-buffer"));var H=G(require("node:stream"),1),re=require("node:util"),j=require("node:buffer");var Re={};Se(Re,{default:()=>Ne.default});O(Re,require("fetch-blob"));var Ne=G(require("fetch-blob"));qe();var ae=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var V=class extends ae{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Fe=Symbol.toStringTag,rt=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Fe]==="URLSearchParams",Ae=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Fe]),mt=e=>typeof e=="object"&&(e[Fe]==="AbortSignal"||e[Fe]==="EventTarget"),Rt=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},At=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var Ba=(0,re.promisify)(H.default.pipeline),N=Symbol("Body internals"),Y=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:rt(a)?a=j.Buffer.from(a.toString()):Ae(a)||j.Buffer.isBuffer(a)||(re.types.isAnyArrayBuffer(a)?a=j.Buffer.from(a):ArrayBuffer.isView(a)?a=j.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof H.default||(a instanceof L.FormData?(a=(0,L.formDataToBlob)(a),n=a.type.split("=")[1]):a=j.Buffer.from(String(a))));let r=a;j.Buffer.isBuffer(a)?r=H.default.Readable.from(a):Ae(a)&&(r=H.default.Readable.from(a.stream())),this[N]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof H.default&&a.on("error",o=>{let p=o instanceof ae?o:new V(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[N].error=p})}get body(){return this[N].stream}get bodyUsed(){return this[N].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await it(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new L.FormData,r=new URLSearchParams(await this.text());for(let[o,p]of r)n.append(o,p);return n}let{toFormData:t}=await Promise.resolve().then(()=>(ft(),Ct));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[N].body&&this[N].body.type||"",t=await this.arrayBuffer();return new Ne.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await it(this);return new TextDecoder().decode(a)}buffer(){return it(this)}};Y.prototype.buffer=(0,re.deprecate)(Y.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Y.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,re.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function it(e){if(e[N].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[N].disturbed=!0,e[N].error)throw e[N].error;let{body:a}=e;if(a===null)return j.Buffer.alloc(0);if(!(a instanceof H.default))return j.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new V(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof ae?r:new V(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?j.Buffer.from(t.join("")):j.Buffer.concat(t,n)}catch(r){throw new V(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new V(`Premature close of server response while trying to fetch ${e.url}`)}var be=(e,a)=>{let t,n,{body:r}=e[N];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof H.default&&typeof r.getBoundary!="function"&&(t=new H.PassThrough({highWaterMark:a}),n=new H.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[N].stream=t,r=n),r},Oa=(0,re.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ze=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":rt(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ae(e)?e.type||null:j.Buffer.isBuffer(e)||re.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof L.FormData?`multipart/form-data; boundary=${a[N].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Oa(e)}`:e instanceof H.default?null:"text/plain;charset=UTF-8",Dt=e=>{let{body:a}=e[N];return a===null?0:Ae(a)?a.size:j.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},xt=async(e,{body:a})=>{a===null?e.end():await Ba(a,e)};var st=require("node:util"),Ee=G(require("node:http"),1),Ge=typeof Ee.default.validateHeaderName=="function"?Ee.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},ut=typeof Ee.default.validateHeaderValue=="function"?Ee.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},k=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(p=>[r,p]))}else if(a!=null)if(typeof a=="object"&&!st.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||st.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(Ge(n),ut(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(p,c)=>(Ge(p),ut(p,String(c)),URLSearchParams.prototype[r].call(n,String(p).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return p=>(Ge(p),URLSearchParams.prototype[r].call(n,String(p).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(k.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function Ut(e=[]){return new k(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return Ge(a),ut(a,String(t)),!0}catch{return!1}}))}var La=new Set([301,302,303,307,308]),He=e=>La.has(e);var W=Symbol("Response internals"),Q=class e extends Y{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new k(t.headers);if(a!==null&&!r.has("Content-Type")){let o=ze(a,this);o&&r.append("Content-Type",o)}this[W]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[W].type}get url(){return this[W].url||""}get status(){return this[W].status}get ok(){return this[W].status>=200&&this[W].status<300}get redirected(){return this[W].counter>0}get statusText(){return this[W].statusText}get headers(){return this[W].headers}get highWaterMark(){return this[W].highWaterMark}clone(){return new e(be(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!He(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[W].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new k(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(Q.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Vt=require("node:url"),Nt=require("node:util");var _t=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var vt=require("node:net");function ht(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var Tt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),wt="strict-origin-when-cross-origin";function Bt(e){if(!Tt.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Va(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,vt.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Ie(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Va(e)}function Ot(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=ht(r),p=ht(r,!0);o.toString().length>4096&&(o=p),a&&(o=a(o)),t&&(p=t(p));let c=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return p;case"unsafe-url":return o;case"strict-origin":return Ie(o)&&!Ie(c)?"no-referrer":p.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:Ie(o)&&!Ie(c)?"no-referrer":p;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:p;case"no-referrer-when-downgrade":return Ie(o)&&!Ie(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Lt(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&Tt.has(n)&&(t=n);return t}var _=Symbol("Request internals"),Ce=e=>typeof e=="object"&&typeof e[_]=="object",Na=(0,Nt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),le=class e extends Y{constructor(a,t={}){let n;if(Ce(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Ce(t)&&"data"in t&&Na(),(t.body!=null||Ce(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:Ce(a)&&a.body!==null?be(a):null;super(o,{size:t.size||a.size||0});let p=new k(t.headers||a.headers||{});if(o!==null&&!p.has("Content-Type")){let u=ze(o,this);u&&p.set("Content-Type",u)}let c=Ce(a)?a.signal:null;if("signal"in t&&(c=t.signal),c!=null&&!mt(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=t.referrer==null?a.referrer:t.referrer;if(s==="")s="no-referrer";else if(s){let u=new URL(s);s=/^about:(\/\/)?client$/.test(u)?"client":u}else s=void 0;this[_]={method:r,redirect:t.redirect||a.redirect||"follow",headers:p,parsedURL:n,signal:c,referrer:s},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[_].method}get url(){return(0,Vt.format)(this[_].parsedURL)}get headers(){return this[_].headers}get redirect(){return this[_].redirect}get signal(){return this[_].signal}get referrer(){if(this[_].referrer==="no-referrer")return"";if(this[_].referrer==="client")return"about:client";if(this[_].referrer)return this[_].referrer.toString()}get referrerPolicy(){return this[_].referrerPolicy}set referrerPolicy(a){this[_].referrerPolicy=Bt(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(le.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var qt=e=>{let{parsedURL:a}=e[_],t=new k(e[_].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let c=Dt(e);typeof c=="number"&&!Number.isNaN(c)&&(n=String(c))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=wt),e.referrer&&e.referrer!=="no-referrer"?e[_].referrer=Ot(e):e[_].referrer="no-referrer",e[_].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=_t(a),p={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:p}};var Qe=class extends ae{constructor(a,t="aborted"){super(a,t)}};qe();nt();var qa=new Set(["data:","http:","https:"]);async function $e(e,a){return new Promise((t,n)=>{let r=new le(e,a),{parsedURL:o,options:p}=qt(r);if(!qa.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let d=(0,Ve.default)(r.url),D=new Q(d,{headers:{"Content-Type":d.typeFull}});t(D);return}let c=(o.protocol==="https:"?jt.default:Ft.default).request,{signal:s}=r,u=null,m=()=>{let d=new Qe("The operation was aborted.");n(d),r.body&&r.body instanceof z.default.Readable&&r.body.destroy(d),!(!u||!u.body)&&u.body.emit("error",d)};if(s&&s.aborted){m();return}let b=()=>{m(),U()},x=c(o.toString(),p);s&&s.addEventListener("abort",b);let U=()=>{x.abort(),s&&s.removeEventListener("abort",b)};x.on("error",d=>{n(new V(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),U()}),Fa(x,d=>{u&&u.body&&u.body.destroy(d)}),process.version<"v14"&&x.on("socket",d=>{let D;d.prependListener("end",()=>{D=d._eventsCount}),d.prependListener("close",A=>{if(u&&D<d._eventsCount&&!A){let R=new Error("Premature close");R.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",R)}})}),x.on("response",d=>{x.setTimeout(0);let D=Ut(d.rawHeaders);if(He(d.statusCode)){let S=D.get("Location"),g=null;try{g=S===null?null:new URL(S,r.url)}catch{if(r.redirect!=="manual"){n(new V(`uri requested responds with an invalid redirect URL: ${S}`,"invalid-redirect")),U();return}}switch(r.redirect){case"error":n(new V(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),U();return;case"manual":break;case"follow":{if(g===null)break;if(r.counter>=r.follow){n(new V(`maximum redirect reached at: ${r.url}`,"max-redirect")),U();return}let E={headers:new k(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:be(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Rt(r.url,g)||!At(r.url,g))for(let Ra of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(Ra);if(d.statusCode!==303&&r.body&&a.body instanceof z.default.Readable){n(new V("Cannot follow redirect with body being a readable stream","unsupported-redirect")),U();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length"));let ue=Lt(D);ue&&(E.referrerPolicy=ue),t($e(new le(g,E))),U();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&d.once("end",()=>{s.removeEventListener("abort",b)});let A=(0,z.pipeline)(d,new z.PassThrough,S=>{S&&n(S)});process.version<"v12.10"&&d.on("aborted",b);let R={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:D,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},P=D.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||P===null||d.statusCode===204||d.statusCode===304){u=new Q(A,R),t(u);return}let l={flush:ce.default.Z_SYNC_FLUSH,finishFlush:ce.default.Z_SYNC_FLUSH};if(P==="gzip"||P==="x-gzip"){A=(0,z.pipeline)(A,ce.default.createGunzip(l),S=>{S&&n(S)}),u=new Q(A,R),t(u);return}if(P==="deflate"||P==="x-deflate"){let S=(0,z.pipeline)(d,new z.PassThrough,g=>{g&&n(g)});S.once("data",g=>{(g[0]&15)===8?A=(0,z.pipeline)(A,ce.default.createInflate(),E=>{E&&n(E)}):A=(0,z.pipeline)(A,ce.default.createInflateRaw(),E=>{E&&n(E)}),u=new Q(A,R),t(u)}),S.once("end",()=>{u||(u=new Q(A,R),t(u))});return}if(P==="br"){A=(0,z.pipeline)(A,ce.default.createBrotliDecompress(),S=>{S&&n(S)}),u=new Q(A,R),t(u);return}u=new Q(A,R),t(u)}),xt(x,r).catch(n)})}function Fa(e,a){let t=fe.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",p=>{let{headers:c}=p;n=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),e.on("socket",p=>{let c=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},s=u=>{r=fe.Buffer.compare(u.slice(-5),t)===0,!r&&o&&(r=fe.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&fe.Buffer.compare(u.slice(-2),t.slice(3))===0),o=u};p.prependListener("close",c),p.on("data",s),e.on("close",()=>{p.removeListener("close",c),p.removeListener("data",s)})})}var y=G(require("graphql-tag")),De=y.default`
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
`,ja=y.default`
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
  ${De}
`,X=y.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,xe=y.default`
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
  ${X}
`,We=y.default`
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
  ${xe}
  ${De}
  ${X}
`,ka=y.default`
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
  ${xe}
  ${De}
  ${X}
`,za=y.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,kt=y.default`
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
  ${xe}
  ${za}
`,zt=y.default`
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
  ${De}
  ${xe}
  ${X}
`,Ga=y.default`
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
  ${De}
  ${xe}
  ${X}
`,Ha=y.default`
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
`,Gt=y.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,pt=y.default`
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
`,Qa=y.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,$a=y.default`
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
`,Wa=y.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ka=y.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ya=y.default`
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
  ${ja}
`,Xa=y.default`
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
`,Ja=y.default`
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
  ${X}
`,Za=y.default`
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
`,er=y.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ka}
`,tr=y.default`
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
  ${We}
`,ar=y.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${We}
`,rr=y.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,nr=y.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,or=y.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ir=y.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,sr=y.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ur=y.default`
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
  ${We}
`,pr=y.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,lr=y.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${kt}
`,cr=y.default`
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
  ${zt}
`,yr=y.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ga}
`,dr=y.default`
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
  ${X}
`,Sr=y.default`
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
`,br=y.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ha}
`,Ir=y.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,gr=y.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Mr=y.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,mr=y.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Rr=y.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ar=y.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Pr=y.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Er=y.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Cr=y.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,fr=y.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Dr=y.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,xr=y.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Ur=y.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,_r=y.default`
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
`,hr=y.default`
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
  ${zt}
`,vr=y.default`
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
  ${pt}
`,Tr=y.default`
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
  ${pt}
`,wr=y.default`
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
`,Br=y.default`
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
`,Or=y.default`
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
  ${Gt}
  ${X}
`,Lr=y.default`
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
  ${Gt}
`,Vr=y.default`
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
  ${We}
`,Nr=y.default`
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
  ${Qa}
`,qr=y.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Fr=y.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,jr=y.default`
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
  ${pt}
`,kr=y.default`
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
  ${X}
  ${kt}
`,zr=y.default`
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
  ${X}
`,Gr=y.default`
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
`,Hr=(e,a,t,n)=>e();function Ht(e,a=Hr){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:$a,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:Wa,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:Ka,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:Ya,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:Xa,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:Ja,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:Za,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:er,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:tr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:ar,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:rr,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:nr,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:or,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:ir,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:sr,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:ur,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:pr,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:lr,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:cr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:yr,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:dr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:Sr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:br,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:Ir,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:gr,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:Mr,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:mr,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:Rr,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:Ar,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Pr,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:Er,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Cr,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:fr,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:Dr,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:xr,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:Ur,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:_r,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:hr,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:vr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:Tr,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:wr,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:Br,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:Or,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:Lr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:Vr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:Nr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:qr,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:Fr,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:jr,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:kr,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:zr,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:Gr,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var lt=null,ct=null,Yt=null,Qr=(0,$t.getPreferenceValues)();function $r({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Yt=e,lt=Ht(new Kt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),ct=new Qt.Octokit({auth:e,request:{fetch:$e}})}var Xt=Wt.OAuthService.github({personalAccessToken:Qr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:$r});function w(){if(!lt||!ct)throw new Error("GitHub clients not initialized");return{github:lt,octokit:ct,token:Yt}}var Me=require("@raycast/api");var I=require("@raycast/api"),ye=require("@raycast/utils"),ba=require("react");var h=require("@raycast/api"),ua=require("@raycast/utils"),pa=require("date-fns");var Jt=require("@raycast/api"),Wr=require("lodash");var Ue=require("@raycast/api");function J(e){return e?{icon:{source:e.avatarUrl??Ue.Icon.Person,mask:Ue.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Ue.Icon.Person,text:"Unknown"}}function Zt(e){return[...new Map(e.map(a=>[a.id,a])).values()]}function ea(e){return e?.filter(a=>typeof a=="object"&&a!==null&&"id"in a)??[]}function ge(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var ne=require("@raycast/api");function Ke(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:ne.Color.SecondaryText},text:"Closed as not planned",color:ne.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:ne.Color.Purple},text:"Closed as completed",color:ne.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:ne.Color.Purple},text:"Closed",color:ne.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:ne.Color.Green},text:"Open",color:ne.Color.Green}}function Ye(e){return J(e.author)}var ta=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],aa="sort:updated-desc",Kr=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Yr=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,Xr=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function ra(e,a){let t=e.match(Yr);if(t)return{owner:t[1],name:t[2],issueNumber:Number.parseInt(t[3],10)};let n=e.match(Kr),r=a?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let c=e.replace(Xr," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!c)return null;let[s,u]=o.split("/");return!s||!u?null:{owner:s,name:u,issueNumber:Number.parseInt(c[1],10)}}function na(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var oa=require("@raycast/utils");function Z(){let{github:e}=w(),{data:a}=(0,oa.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var i=require("@raycast/api"),Xe=require("@raycast/utils"),Je=require("react");function B(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var q=require("@raycast/api"),ee=require("react/jsx-runtime"),sa=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,ee.jsxs)(q.ActionPanel.Submenu,{title:"Sort by",icon:q.Icon.ArrowUp,shortcut:q.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ee.jsx)(ia,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,ee.jsx)(q.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ee.jsx)(ia,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,ee.jsx)(ee.Fragment,{}),ia=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,ee.jsx)(q.Action,{title:e,icon:t===a?{source:q.Icon.CheckCircle,tintColor:q.Color.Green}:q.Icon.Circle,onAction:()=>n(a)});var M=require("react/jsx-runtime");function _e({issue:e,mutateList:a,mutateDetail:t,children:n,setSortQuery:r,sortQuery:o}){let{github:p}=w(),c=Z();async function s(){a&&await a(),t&&await t()}async function u(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await p.reopenIssue({nodeId:e.id}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(l){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed reopening issue",message:B(l)})}}async function m(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await p.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(l){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing issue as completed",message:B(l)})}}async function b(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await p.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(l){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing issue as not planned",message:B(l)})}}async function x(l){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Assigning to me"});let S=e.assignees.nodes?.filter(g=>!!g).map(g=>g?.id)??[];await p.changeIssueAssignees({issueId:e.id,assigneeIds:[...S,l]}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Assigned to me"})}catch(S){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed assigning to me",message:B(S)})}}async function U(l){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Un-assigning from me"});let S=e.assignees.nodes?.filter(g=>!!g).map(g=>g?.id)??[];await p.changeIssueAssignees({issueId:e.id,assigneeIds:S?.filter(g=>g!==l)}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Un-assigned from me"})}catch(S){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed un-assigning from me",message:B(S)})}}async function d(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let l=e.repository.defaultBranchRef?.target?.oid;if(!l)throw new Error("Repository default branch commit SHA is unavailable");let g=(await p.createLinkedBranch({input:{issueId:e.id,oid:l}})).createLinkedBranch?.linkedBranch?.ref?.name;await s(),g&&await(0,i.showToast)({style:i.Toast.Style.Success,title:`${g} is created`,primaryAction:{title:"Copy Branch Name",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>i.Clipboard.copy(g)}})}catch(l){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed creating a branch",message:B(l)})}}async function D(l,S){if(await(0,i.confirmAlert)({icon:i.Icon.Trash,title:"Delete the branch",message:`${S} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:i.Alert.ActionStyle.Destructive}}))try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Deleting a branch"}),await p.deleteLinkedBranch({input:{linkedBranchId:l}}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Deleted the branch"})}catch(g){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed deleting the branch",message:B(g)})}}let A=J(c),R=e.assignees.nodes?.some(l=>l?.isViewer),P=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,M.jsxs)(i.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,M.jsx)(i.Action.OpenInBrowser,{url:e.url}),(0,M.jsxs)(i.ActionPanel.Section,{children:[c?(0,M.jsx)(i.Action,{title:R?"Unassign from Me":"Assign to Me",icon:A.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>R?U(c.id):x(c.id)}):null,(0,M.jsx)(Jr,{issue:e,mutate:s}),(0,M.jsx)(Zr,{issue:e,mutate:s}),P?null:(0,M.jsx)(i.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"b"},onAction:()=>d()}),(0,M.jsx)(en,{issue:e,mutate:s})]}),(0,M.jsx)(i.ActionPanel.Section,{children:e.closed?(0,M.jsx)(i.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:i.Color.Green},onAction:u}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.Action,{title:"Close Issue as Completed",style:i.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:i.Color.Red},onAction:m}),(0,M.jsx)(i.Action,{title:"Close Issue as Not Planned",style:i.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:i.Color.Red},onAction:b}),P?(0,M.jsx)(i.Action,{title:"Delete Issue Branch",style:i.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:i.Color.Red},onAction:()=>D(P?.id||"",P.ref?.name??"")}):null]})}),(0,M.jsxs)(i.ActionPanel.Section,{children:[(0,M.jsx)(i.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}}),P?.ref?.name?(0,M.jsx)(i.Action.CopyToClipboard,{content:P.ref?.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null]}),(0,M.jsxs)(i.ActionPanel.Section,{children:[(0,M.jsx)(sa,{data:ta,sortQuery:o,setSortQuery:r}),(0,M.jsx)(i.Action,{icon:i.Icon.ArrowClockwise,title:"Refresh",onAction:s,shortcut:i.Keyboard.Shortcut.Common.Refresh})]})]})}function Jr({issue:e,mutate:a}){let{github:t}=w(),[n,r]=(0,Je.useState)(!1),{data:o,isLoading:p}=(0,Xe.useCachedPromise)(async s=>t.repositoryCollaboratorsForIssues({owner:s.repository.owner.login,name:s.repository.name,issueNumber:s.number}),[e],{execute:n});async function c({id:s,text:u}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding assignee",message:u});let m=o?.repository?.issue?.assignees.nodes?.filter(b=>!!b).map(b=>b?.id)??[];await t.changeIssueAssignees({issueId:e.id,assigneeIds:[...m,s]}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added assignee",message:u})}catch(m){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding assignee",message:B(m)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Add Assignee",icon:i.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:p?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(s=>{if(!s)return null;let u=J(s);return(0,M.jsx)(i.Action,{title:u.text,icon:u.icon,onAction:()=>c({id:s.id,text:u.text})},s.id)})})}function Zr({issue:e,mutate:a}){let{github:t}=w(),[n,r]=(0,Je.useState)(!1),{data:o,isLoading:p}=(0,Xe.useCachedPromise)(async s=>t.repositoryProjectsForIssues({owner:s.repository.owner.login,name:s.repository.name,issueNumber:s.number}),[e],{execute:n});async function c({id:s,text:u}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding to project",message:u}),await t.addIssueToProject({issueId:e.id,projectId:s}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added to project",message:u})}catch(m){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding to project",message:B(m)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:p?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(s=>s?(0,M.jsx)(i.Action,{title:s.title,onAction:()=>c({id:s.id,text:s.title})},s.id):null)})}function en({issue:e,mutate:a}){let{github:t}=w(),[n,r]=(0,Je.useState)(!1),{data:o,isLoading:p}=(0,Xe.useCachedPromise)(async u=>t.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[e],{execute:n});async function c(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Removing milestone"}),await t.changeIssueMilestone({issueId:e.id,milestoneId:null}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing milestone",message:B(u)})}}async function s({id:u,text:m}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Setting milestone",message:m}),await t.changeIssueMilestone({issueId:e.id,milestoneId:u}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Milestone set",message:m})}catch(b){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed setting milestone",message:B(b)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:p?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.Action,{title:"No Milestone",onAction:()=>c()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,M.jsx)(i.Action,{title:u.title,onAction:()=>s({id:u.id,text:u.title}),autoFocus:e.milestone?.id===u.id},u.id):null)]})})}var v=require("react/jsx-runtime");function he({initialIssue:e,mutateList:a}){let{github:t}=w(),n=Z(),{data:r,isLoading:o,mutate:p}=(0,ua.useCachedPromise)(async b=>(await t.issueDetails({nodeId:b})).node,[e.id],{initialData:e}),c=`# ${r.title}`;r?.body&&(c+=`

${r.body}`);let s=Ke(r),u=Ye(r),m=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,v.jsx)(h.Detail,{isLoading:o,markdown:c,navigationTitle:`#${r.number}`,metadata:(0,v.jsxs)(h.Detail.Metadata,{children:[(0,v.jsx)(h.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,v.jsx)(h.Detail.Metadata.TagList,{title:"Status",children:(0,v.jsx)(h.Detail.Metadata.TagList.Item,{...s})}),m?(0,v.jsx)(h.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:h.Color.PrimaryText},text:m}):null,r.updatedAt?(0,v.jsx)(h.Detail.Metadata.Label,{title:"Updated",text:(0,pa.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,v.jsx)(h.Detail.Metadata.Label,{title:"Author",...u}),r.assignees&&r.assignees.totalCount>0?(0,v.jsx)(h.Detail.Metadata.TagList,{title:ge(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(b=>{if(!b)return null;let x=J(b);return(0,v.jsx)(h.Detail.Metadata.TagList.Item,{...x},b.id)})}):null,r.labels&&r.labels.totalCount>0?(0,v.jsx)(h.Detail.Metadata.TagList,{title:ge(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(b=>b?(0,v.jsx)(h.Detail.Metadata.TagList.Item,{text:b.name,color:b.color},b.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,v.jsx)(h.Detail.Metadata.TagList,{title:ge(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(b=>b?(0,v.jsx)(h.Detail.Metadata.TagList.Item,{text:b.title},b.id):null)}):null,r.milestone?(0,v.jsx)(h.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,v.jsx)(_e,{issue:r,viewer:n,mutateList:a,mutateDetail:p})})}var la=require("@raycast/utils");var Ze=(0,la.withAccessToken)(Xt);var da=require("@raycast/utils");var et=require("node:child_process");var ya=require("node:util"),$=require("@raycast/api"),tn=require("@raycast/utils");function yt(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(t=>!!t).map(t=>`org:${t}`)].join(" ")}var yi=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:$.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:$.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:$.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:$.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:$.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:$.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:$.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:$.Color.PrimaryText}}];var an=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],rn=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],nn=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],di=an[0].value,Si=rn[0].value,bi=nn[0].value;var Ii=(0,ya.promisify)(et.execFile);var ve="\x1B",ca="\x07",gi=new RegExp(`${ve}][^${ca}${ve}]*(?:${ca}|${ve}\\\\)`,"g"),Mi=new RegExp(`${ve}\\[[0-9;?]*[A-Za-z]`,"g"),mi=new RegExp(`${ve}\\([0-9A-Za-z]`,"g");function Sa(){let{github:e}=w(),n=["user:@me",...Z()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,da.useCachedPromise)(async r=>{let p=(await Promise.allSettled(r.split(" ").map(c=>e.searchRepositories({query:`${c} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(c=>c.status==="fulfilled"?c.value.search.nodes:[]);return[...new Map(p.map(c=>[c.id,c])).values()].sort((c,s)=>new Date(s.updatedAt).getTime()-new Date(c.updatedAt).getTime())},[n])}var f=require("react/jsx-runtime");function dt({draftValues:e}){let{push:a}=(0,I.useNavigation)(),{data:t}=Sa(),{github:n}=w(),{openInBrowserAfterCreate:r}=(0,I.getPreferenceValues)(),{handleSubmit:o,itemProps:p,values:c,setValue:s,reset:u,focus:m}=(0,ye.useForm)({async onSubmit(l){let S=await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Creating issue"});try{let E=(await n.createIssue({repositoryId:l.repository,title:l.title,body:l.description,assigneeIds:l.assignees,labelIds:l.labels,milestoneId:l.milestone||null,issueTypeId:l.issueType||null}))?.createIssue?.issue;if(E&&(await Promise.all(l.projects.map(ue=>n.addIssueToProject({issueId:E.id,projectId:ue}))),S.style=I.Toast.Style.Success,S.title="Created issue",S.primaryAction={title:"Open Issue",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:()=>a((0,f.jsx)(he,{initialIssue:E}))},S.secondaryAction={title:"Copy URL",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>I.Clipboard.copy(E.url)},r))try{await(0,I.open)(E.url)}catch{}u({title:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:"",issueType:""}),m("repository")}catch(g){S.style=I.Toast.Style.Failure,S.title="Failed creating issue",S.message=B(g)}},initialValues:{repository:e?.repository??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??"",issueType:e?.issueType??""},validation:{repository:ye.FormValidation.Required,title:ye.FormValidation.Required}}),{data:b}=(0,ye.useCachedPromise)(l=>{let S=t?.find(g=>g.id===l);return S?n.dataForRepository({owner:S.owner.login,name:S.name}):Promise.resolve(null)},[c.repository],{execute:!!c.repository}),x=b?.repository?.collaborators?.nodes,U=b?.repository?.labels?.nodes,d=b?.repository?.projectsV2?.nodes??[],D=b?.repository?.owner?.__typename==="Organization"?b.repository.owner.projectsV2?.nodes??[]:[],A=[...d,...D].filter((l,S,g)=>l?g.findIndex(E=>E?.id===l.id)===S:!1),R=b?.repository?.milestones?.nodes,P=b?.repository?.issueTypes?.nodes?.filter(l=>l&&l.isEnabled);return(0,ba.useEffect)(()=>{s("description",""),s("assignees",[]),s("labels",[]),s("projects",[]),s("milestone",""),s("issueType","")},[c.repository]),(0,f.jsxs)(I.Form,{actions:(0,f.jsx)(I.ActionPanel,{children:(0,f.jsx)(I.Action.SubmitForm,{onSubmit:o,title:"Create Issue"})}),enableDrafts:!0,children:[(0,f.jsx)(I.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:t?.map(l=>(0,f.jsx)(I.Form.Dropdown.Item,{title:l.nameWithOwner,value:l.id,icon:{source:l.owner.avatarUrl,mask:I.Image.Mask.Circle}},l.id))}),(0,f.jsx)(I.Form.Separator,{}),(0,f.jsx)(I.Form.TextField,{...p.title,title:"Title",placeholder:"Issue title"}),(0,f.jsx)(I.Form.TextArea,{...p.description,placeholder:"Issue description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,f.jsx)(I.Form.TagPicker,{...p.assignees,title:"Assignees",children:x?.map(l=>{if(!l)return null;let S=J(l);return(0,f.jsx)(I.Form.TagPicker.Item,{icon:S.icon,title:S.text,value:l.id},l.id)})}),(0,f.jsx)(I.Form.TagPicker,{...p.labels,title:"Labels",children:U?.map(l=>l?(0,f.jsx)(I.Form.TagPicker.Item,{title:l.name,value:l.id,icon:{source:I.Icon.Dot,tintColor:l.color}},l.id):null)}),(0,f.jsx)(I.Form.TagPicker,{...p.projects,title:"Projects",children:A?.map(l=>l?(0,f.jsx)(I.Form.TagPicker.Item,{title:l.title,value:l.id},l.id):null)}),(0,f.jsxs)(I.Form.Dropdown,{...p.issueType,title:"Issue Type",children:[(0,f.jsx)(I.Form.Dropdown.Item,{value:"",title:"None"}),P?.map(l=>l?(0,f.jsx)(I.Form.Dropdown.Item,{icon:{source:I.Icon.Dot,tintColor:l.color},title:l.name,value:l.id},l.id):null)]}),(0,f.jsxs)(I.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,f.jsx)(I.Form.Dropdown.Item,{value:"",title:"None"}),R?.map(l=>l?(0,f.jsx)(I.Form.Dropdown.Item,{title:l.title,value:l.id},l.id):null)]})]})}var Ti=Ze(dt);var Te=require("react/jsx-runtime");function St(){return(0,Te.jsx)(Me.List.EmptyView,{title:"No issues found",actions:(0,Te.jsx)(Me.ActionPanel,{children:(0,Te.jsx)(Me.Action.Push,{title:"Create Issue",target:(0,Te.jsx)(dt,{})})})})}var oe=require("@raycast/api"),Ia=require("date-fns");var we=require("react/jsx-runtime");function bt({issue:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),p=Ye(e),c=Ke(e),s=[{date:o,tooltip:`Updated: ${(0,Ia.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:p.icon,tooltip:`Author: ${p.text}`}];e.comments.totalCount>0&&s.unshift({text:`${e.comments.totalCount}`,icon:oe.Icon.Bubble}),e.linkedBranches?.nodes?.length&&s.unshift({icon:{source:"branch.svg",tintColor:oe.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let u=[`${e.number}`];return e.author?.login&&u.push(e.author.login),(0,we.jsx)(oe.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:c.icon,tooltip:`Status: ${c.text}`},keywords:u,accessories:s,actions:(0,we.jsx)(_e,{issue:e,mutateList:t,viewer:a,sortQuery:n,setSortQuery:r,children:(0,we.jsx)(oe.Action.Push,{title:"Show Details",icon:oe.Icon.Sidebar,target:(0,we.jsx)(he,{initialIssue:e,viewer:a,mutateList:t})})})},e.id)}var se=require("@raycast/api"),on=G(require("react")),Ma=require("react/jsx-runtime");function sn(e){let a=e.min||1,t=e.max||100,n=e.default||10,o=(0,se.getPreferenceValues)()[e.name]||"",p=Number(o);return isNaN(p)||p<a||p>t?n:p}function ga(){return Math.min(sn({name:"numberOfResults",default:50}),25)}var T=require("@raycast/api");var te=require("react/jsx-runtime");function It(e){let a=Z(),t=a?.organizations?.nodes?.filter(o=>o!=null)??[],n=t.map(o=>o.login),r=t.length>1;return(0,te.jsxs)(T.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,te.jsxs)(T.List.Dropdown.Section,{children:[(0,te.jsx)(T.List.Dropdown.Item,{title:"All Repositories",icon:T.Icon.List,value:""}),a&&t.length>0?(0,te.jsx)(T.List.Dropdown.Item,{title:"My Repositories",icon:T.Icon.Person,value:yt({userLogin:a.login,orgLogins:n})}):null,r?(0,te.jsx)(T.List.Dropdown.Item,{title:"My Organizations",icon:T.Icon.Building,value:yt({orgLogins:n})}):null]}),(0,te.jsxs)(T.List.Dropdown.Section,{children:[a?(0,te.jsx)(T.List.Dropdown.Item,{icon:{source:a.avatarUrl??T.Icon.PersonCircle,mask:T.Image.Mask.Circle},title:a.login,value:`user:${a.login}`}):null,t.map(o=>(0,te.jsx)(T.List.Dropdown.Item,{icon:{source:o.avatarUrl??T.Icon.PersonCircle,mask:T.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var de=require("react/jsx-runtime");function un(){let{github:e}=w(),a=Z(),{defaultSearchTerms:t}=(0,Be.getPreferenceValues)(),[n,r]=(0,gt.useState)((0,ma.trim)(t)+" "),[o,p]=(0,tt.useCachedState)("sort-query",aa,{cacheNamespace:"github-search-issue"}),[c,s]=(0,gt.useState)(null),{data:u,isLoading:m,mutate:b,pagination:x}=(0,tt.useCachedPromise)((d,D,A)=>async({cursor:R})=>{if(!R){let l=ra(`${D??""} ${d}`);if(l)try{let S=await e.issueByNumber(l);if(S.repository?.issue)return{data:[S.repository.issue],hasMore:!1}}catch{}}let P=await e.searchIssues({numberOfItems:ga(),query:`is:issue archived:false ${A} ${D??""} ${na(d)}`,after:R});return{data:ea(P.search.nodes),hasMore:P.search.pageInfo.hasNextPage,cursor:P.search.pageInfo.endCursor??void 0}},[n,c,o],{keepPreviousData:!0}),U=Zt(u??[]);return(0,de.jsxs)(Be.List,{isLoading:m,searchBarPlaceholder:"Search issues, or owner/repo#123",searchBarAccessory:(0,de.jsx)(It,{onFilterChange:s}),searchText:n,onSearchTextChange:r,throttle:!0,pagination:x,children:[u?(0,de.jsx)(Be.List.Section,{title:n?"Search Results":"Created Recently",subtitle:ge(U.length,"issue",{withNumber:!0}),children:U.map(d=>(0,de.jsx)(bt,{issue:d,viewer:a,mutateList:b,sortQuery:o,setSortQuery:p},d.id))}):null,(0,de.jsx)(St,{})]})}var pn=Ze(un);
