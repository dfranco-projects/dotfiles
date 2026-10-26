"use strict";var Zt=Object.create;var Ce=Object.defineProperty;var Xt=Object.getOwnPropertyDescriptor;var Jt=Object.getOwnPropertyNames;var ea=Object.getPrototypeOf,ta=Object.prototype.hasOwnProperty;var je=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(n){throw e=[n],n}};var ue=(t,a)=>{for(var e in a)Ce(t,e,{get:a[e],enumerable:!0})},Ee=(t,a,e,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Jt(a))!ta.call(t,r)&&r!==e&&Ce(t,r,{get:()=>a[r],enumerable:!(n=Xt(a,r))||n.enumerable});return t},w=(t,a,e)=>(Ee(t,a,"default"),e&&Ee(e,a,"default")),Q=(t,a,e)=>(e=t!=null?Zt(ea(t)):{},Ee(a||!t||!t.__esModule?Ce(e,"default",{value:t,enumerable:!0}):e,t)),aa=t=>Ee(Ce({},"__esModule",{value:!0}),t);var B={};ue(B,{default:()=>Je.default});var Je,xe=je(()=>{w(B,require("formdata-polyfill/esm.min.js"));Je=Q(require("formdata-polyfill/esm.min.js"))});var N={};ue(N,{default:()=>rt.default});var rt,ze=je(()=>{w(N,require("fetch-blob/from.js"));rt=Q(require("fetch-blob/from.js"))});var ot={};ue(ot,{toFormData:()=>pa});function ua(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",n=e.slice(e.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function pa(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Ge(e[1]||e[2]),r,o,l,y,s,u,m=[],b=new B.FormData,D=R=>{l+=A.decode(R,{stream:!0})},h=R=>{m.push(R)},d=()=>{let R=new N.File(m,u,{type:s});b.append(y,R)},x=()=>{b.append(y,l)},A=new TextDecoder("utf-8");A.decode(),n.onPartBegin=function(){n.onPartData=D,n.onPartEnd=x,r="",o="",l="",y="",s="",u=null,m.length=0},n.onHeaderField=function(R){r+=A.decode(R,{stream:!0})},n.onHeaderValue=function(R){o+=A.decode(R,{stream:!0})},n.onHeaderEnd=function(){if(o+=A.decode(),r=r.toLowerCase(),r==="content-disposition"){let R=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);R&&(y=R[2]||R[3]||""),u=ua(o),u&&(n.onPartData=h,n.onPartEnd=d)}else r==="content-type"&&(s=o);o="",r=""};for await(let R of t)n.write(R);return n.end(),b}var W,E,nt,ae,_e,ve,ra,be,na,oa,ia,sa,ne,Ge,it=je(()=>{ze();xe();W=0,E={START_BOUNDARY:W++,HEADER_FIELD_START:W++,HEADER_FIELD:W++,HEADER_VALUE_START:W++,HEADER_VALUE:W++,HEADER_VALUE_ALMOST_DONE:W++,HEADERS_ALMOST_DONE:W++,PART_DATA_START:W++,PART_DATA:W++,END:W++},nt=1,ae={PART_BOUNDARY:nt,LAST_BOUNDARY:nt*=2},_e=10,ve=13,ra=32,be=45,na=58,oa=97,ia=122,sa=t=>t|32,ne=()=>{},Ge=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=ne,this.onHeaderField=ne,this.onHeadersEnd=ne,this.onHeaderValue=ne,this.onPartBegin=ne,this.onPartData=ne,this.onPartEnd=ne,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let n=0;n<a.length;n++)e[n]=a.charCodeAt(n),this.boundaryChars[e[n]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=E.START_BOUNDARY}write(a){let e=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:y,index:s,state:u,flags:m}=this,b=this.boundary.length,D=b-1,h=a.length,d,x,A=S=>{this[S+"Mark"]=e},R=S=>{delete this[S+"Mark"]},C=(S,g,P,re)=>{(g===void 0||g!==P)&&this[S](re&&re.subarray(g,P))},p=(S,g)=>{let P=S+"Mark";P in this&&(g?(C(S,this[P],e,a),delete this[P]):(C(S,this[P],a.length,a),this[P]=0))};for(e=0;e<n;e++)switch(d=a[e],u){case E.START_BOUNDARY:if(s===l.length-2){if(d===be)m|=ae.LAST_BOUNDARY;else if(d!==ve)return;s++;break}else if(s-1===l.length-2){if(m&ae.LAST_BOUNDARY&&d===be)u=E.END,m=0;else if(!(m&ae.LAST_BOUNDARY)&&d===_e)s=0,C("onPartBegin"),u=E.HEADER_FIELD_START;else return;break}d!==l[s+2]&&(s=-2),d===l[s+2]&&s++;break;case E.HEADER_FIELD_START:u=E.HEADER_FIELD,A("onHeaderField"),s=0;case E.HEADER_FIELD:if(d===ve){R("onHeaderField"),u=E.HEADERS_ALMOST_DONE;break}if(s++,d===be)break;if(d===na){if(s===1)return;p("onHeaderField",!0),u=E.HEADER_VALUE_START;break}if(x=sa(d),x<oa||x>ia)return;break;case E.HEADER_VALUE_START:if(d===ra)break;A("onHeaderValue"),u=E.HEADER_VALUE;case E.HEADER_VALUE:d===ve&&(p("onHeaderValue",!0),C("onHeaderEnd"),u=E.HEADER_VALUE_ALMOST_DONE);break;case E.HEADER_VALUE_ALMOST_DONE:if(d!==_e)return;u=E.HEADER_FIELD_START;break;case E.HEADERS_ALMOST_DONE:if(d!==_e)return;C("onHeadersEnd"),u=E.PART_DATA_START;break;case E.PART_DATA_START:u=E.PART_DATA,A("onPartData");case E.PART_DATA:if(r=s,s===0){for(e+=D;e<h&&!(a[e]in y);)e+=b;e-=D,d=a[e]}if(s<l.length)l[s]===d?(s===0&&p("onPartData",!0),s++):s=0;else if(s===l.length)s++,d===ve?m|=ae.PART_BOUNDARY:d===be?m|=ae.LAST_BOUNDARY:s=0;else if(s-1===l.length)if(m&ae.PART_BOUNDARY){if(s=0,d===_e){m&=~ae.PART_BOUNDARY,C("onPartEnd"),C("onPartBegin"),u=E.HEADER_FIELD_START;break}}else m&ae.LAST_BOUNDARY&&d===be?(C("onPartEnd"),u=E.END,m=0):s=0;if(s>0)o[s-1]=d;else if(r>0){let S=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);C("onPartData",0,r,S),r=0,A("onPartData"),e--}break;case E.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}p("onHeaderField"),p("onHeaderValue"),p("onPartData"),this.index=s,this.state=u,this.flags=m}end(){if(this.state===E.HEADER_FIELD_START&&this.index===0||this.state===E.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==E.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var wr={};ue(wr,{IssueForm:()=>Kt,default:()=>Tr});module.exports=aa(wr);var I=require("@raycast/api"),se=require("@raycast/utils"),Wt=require("react");var xt=require("@octokit/rest"),Ut=require("@raycast/api"),_t=require("@raycast/utils"),vt=require("graphql-request");var At=Q(require("node:http"),1),Pt=Q(require("node:https"),1),ie=Q(require("node:zlib"),1),j=Q(require("node:stream"),1),Me=require("node:buffer");var ye={};ue(ye,{default:()=>fe.default});w(ye,require("data-uri-to-buffer"));var fe=Q(require("data-uri-to-buffer"));var z=Q(require("node:stream"),1),ee=require("node:util"),q=require("node:buffer");var de={};ue(de,{default:()=>De.default});w(de,require("fetch-blob"));var De=Q(require("fetch-blob"));xe();var J=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var O=class extends J{constructor(a,e,n){super(a,e),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Ue=Symbol.toStringTag,ke=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ue]==="URLSearchParams",Se=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ue]),et=t=>typeof t=="object"&&(t[Ue]==="AbortSignal"||t[Ue]==="EventTarget"),tt=(t,a)=>{let e=new URL(a).hostname,n=new URL(t).hostname;return e===n||e.endsWith(`.${n}`)},at=(t,a)=>{let e=new URL(a).protocol,n=new URL(t).protocol;return e===n};var la=(0,ee.promisify)(z.default.pipeline),L=Symbol("Body internals"),K=class{constructor(a,{size:e=0}={}){let n=null;a===null?a=null:ke(a)?a=q.Buffer.from(a.toString()):Se(a)||q.Buffer.isBuffer(a)||(ee.types.isAnyArrayBuffer(a)?a=q.Buffer.from(a):ArrayBuffer.isView(a)?a=q.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof z.default||(a instanceof B.FormData?(a=(0,B.formDataToBlob)(a),n=a.type.split("=")[1]):a=q.Buffer.from(String(a))));let r=a;q.Buffer.isBuffer(a)?r=z.default.Readable.from(a):Se(a)&&(r=z.default.Readable.from(a.stream())),this[L]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=e,a instanceof z.default&&a.on("error",o=>{let l=o instanceof J?o:new O(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[L].error=l})}get body(){return this[L].stream}get bodyUsed(){return this[L].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:n}=await He(this);return a.slice(e,e+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new B.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:e}=await Promise.resolve().then(()=>(it(),ot));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[L].body&&this[L].body.type||"",e=await this.arrayBuffer();return new De.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await He(this);return new TextDecoder().decode(a)}buffer(){return He(this)}};K.prototype.buffer=(0,ee.deprecate)(K.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(K.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,ee.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function He(t){if(t[L].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[L].disturbed=!0,t[L].error)throw t[L].error;let{body:a}=t;if(a===null)return q.Buffer.alloc(0);if(!(a instanceof z.default))return q.Buffer.alloc(0);let e=[],n=0;try{for await(let r of a){if(t.size>0&&n+r.length>t.size){let o=new O(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}n+=r.length,e.push(r)}}catch(r){throw r instanceof J?r:new O(`Invalid response body while trying to fetch ${t.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(r=>typeof r=="string")?q.Buffer.from(e.join("")):q.Buffer.concat(e,n)}catch(r){throw new O(`Could not create Buffer from response body for ${t.url}: ${r.message}`,"system",r)}else throw new O(`Premature close of server response while trying to fetch ${t.url}`)}var pe=(t,a)=>{let e,n,{body:r}=t[L];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof z.default&&typeof r.getBoundary!="function"&&(e=new z.PassThrough({highWaterMark:a}),n=new z.PassThrough({highWaterMark:a}),r.pipe(e),r.pipe(n),t[L].stream=e,r=n),r},ca=(0,ee.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),he=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":ke(t)?"application/x-www-form-urlencoded;charset=UTF-8":Se(t)?t.type||null:q.Buffer.isBuffer(t)||ee.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof B.FormData?`multipart/form-data; boundary=${a[L].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${ca(t)}`:t instanceof z.default?null:"text/plain;charset=UTF-8",st=t=>{let{body:a}=t[L];return a===null?0:Se(a)?a.size:q.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},ut=async(t,{body:a})=>{a===null?t.end():await la(a,t)};var Qe=require("node:util"),Ie=Q(require("node:http"),1),Te=typeof Ie.default.validateHeaderName=="function"?Ie.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},$e=typeof Ie.default.validateHeaderValue=="function"?Ie.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},F=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let n=a.raw();for(let[r,o]of Object.entries(n))e.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!Qe.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)e.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(r=>{if(typeof r!="object"||Qe.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([n,r])=>(Te(n),$e(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(e),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,y)=>(Te(l),$e(l,String(y)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(y)));case"delete":case"has":case"getAll":return l=>(Te(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let n=e.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,e=void 0){for(let n of this.keys())Reflect.apply(a,e,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let n=this.getAll(e);return e==="host"?a[e]=n[0]:a[e]=n.length>1?n:n[0],a},{})}};Object.defineProperties(F.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function pt(t=[]){return new F(t.reduce((a,e,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,e])=>{try{return Te(a),$e(a,String(e)),!0}catch{return!1}}))}var ya=new Set([301,302,303,307,308]),we=t=>ya.has(t);var $=Symbol("Response internals"),G=class t extends K{constructor(a=null,e={}){super(a,e);let n=e.status!=null?e.status:200,r=new F(e.headers);if(a!==null&&!r.has("Content-Type")){let o=he(a,this);o&&r.append("Content-Type",o)}this[$]={type:"default",url:e.url,status:n,statusText:e.statusText||"",headers:r,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[$].type}get url(){return this[$].url||""}get status(){return this[$].status}get ok(){return this[$].status>=200&&this[$].status<300}get redirected(){return this[$].counter>0}get statusText(){return this[$].statusText}get headers(){return this[$].headers}get highWaterMark(){return this[$].highWaterMark}clone(){return new t(pe(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!we(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[$].type="error",a}static json(a=void 0,e={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new F(e&&e.headers);return r.has("content-type")||r.set("content-type","application/json"),new t(n,{...e,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(G.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Mt=require("node:url"),mt=require("node:util");var lt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var yt=require("node:net");function ct(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var dt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),St="strict-origin-when-cross-origin";function bt(t){if(!dt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function da(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,yt.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function le(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:da(t)}function It(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let n=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let r=t.referrer,o=ct(r),l=ct(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),e&&(l=e(l));let y=new URL(t.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return le(o)&&!le(y)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===y.origin?o:le(o)&&!le(y)?"no-referrer":l;case"same-origin":return o.origin===y.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===y.origin?o:l;case"no-referrer-when-downgrade":return le(o)&&!le(y)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function gt(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let n of a)n&&dt.has(n)&&(e=n);return e}var U=Symbol("Request internals"),ge=t=>typeof t=="object"&&typeof t[U]=="object",Sa=(0,mt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),oe=class t extends K{constructor(a,e={}){let n;if(ge(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!ge(e)&&"data"in e&&Sa(),(e.body!=null||ge(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ge(a)&&a.body!==null?pe(a):null;super(o,{size:e.size||a.size||0});let l=new F(e.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let u=he(o,this);u&&l.set("Content-Type",u)}let y=ge(a)?a.signal:null;if("signal"in e&&(y=e.signal),y!=null&&!et(y))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=e.referrer==null?a.referrer:e.referrer;if(s==="")s="no-referrer";else if(s){let u=new URL(s);s=/^about:(\/\/)?client$/.test(u)?"client":u}else s=void 0;this[U]={method:r,redirect:e.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:y,referrer:s},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[U].method}get url(){return(0,Mt.format)(this[U].parsedURL)}get headers(){return this[U].headers}get redirect(){return this[U].redirect}get signal(){return this[U].signal}get referrer(){if(this[U].referrer==="no-referrer")return"";if(this[U].referrer==="client")return"about:client";if(this[U].referrer)return this[U].referrer.toString()}get referrerPolicy(){return this[U].referrerPolicy}set referrerPolicy(a){this[U].referrerPolicy=bt(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(oe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Rt=t=>{let{parsedURL:a}=t[U],e=new F(t[U].headers);e.has("Accept")||e.set("Accept","*/*");let n=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(n="0"),t.body!==null){let y=st(t);typeof y=="number"&&!Number.isNaN(y)&&(n=String(y))}n&&e.set("Content-Length",n),t.referrerPolicy===""&&(t.referrerPolicy=St),t.referrer&&t.referrer!=="no-referrer"?t[U].referrer=It(t):t[U].referrer="no-referrer",t[U].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=t;typeof r=="function"&&(r=r(a));let o=lt(a),l={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var Be=class extends J{constructor(a,e="aborted"){super(a,e)}};xe();ze();var ba=new Set(["data:","http:","https:"]);async function Oe(t,a){return new Promise((e,n)=>{let r=new oe(t,a),{parsedURL:o,options:l}=Rt(r);if(!ba.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let d=(0,fe.default)(r.url),x=new G(d,{headers:{"Content-Type":d.typeFull}});e(x);return}let y=(o.protocol==="https:"?Pt.default:At.default).request,{signal:s}=r,u=null,m=()=>{let d=new Be("The operation was aborted.");n(d),r.body&&r.body instanceof j.default.Readable&&r.body.destroy(d),!(!u||!u.body)&&u.body.emit("error",d)};if(s&&s.aborted){m();return}let b=()=>{m(),h()},D=y(o.toString(),l);s&&s.addEventListener("abort",b);let h=()=>{D.abort(),s&&s.removeEventListener("abort",b)};D.on("error",d=>{n(new O(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),h()}),Ia(D,d=>{u&&u.body&&u.body.destroy(d)}),process.version<"v14"&&D.on("socket",d=>{let x;d.prependListener("end",()=>{x=d._eventsCount}),d.prependListener("close",A=>{if(u&&x<d._eventsCount&&!A){let R=new Error("Premature close");R.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",R)}})}),D.on("response",d=>{D.setTimeout(0);let x=pt(d.rawHeaders);if(we(d.statusCode)){let S=x.get("Location"),g=null;try{g=S===null?null:new URL(S,r.url)}catch{if(r.redirect!=="manual"){n(new O(`uri requested responds with an invalid redirect URL: ${S}`,"invalid-redirect")),h();return}}switch(r.redirect){case"error":n(new O(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),h();return;case"manual":break;case"follow":{if(g===null)break;if(r.counter>=r.follow){n(new O(`maximum redirect reached at: ${r.url}`,"max-redirect")),h();return}let P={headers:new F(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:pe(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!tt(r.url,g)||!at(r.url,g))for(let Yt of["authorization","www-authenticate","cookie","cookie2"])P.headers.delete(Yt);if(d.statusCode!==303&&r.body&&a.body instanceof j.default.Readable){n(new O("Cannot follow redirect with body being a readable stream","unsupported-redirect")),h();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(P.method="GET",P.body=void 0,P.headers.delete("content-length"));let re=gt(x);re&&(P.referrerPolicy=re),e(Oe(new oe(g,P))),h();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&d.once("end",()=>{s.removeEventListener("abort",b)});let A=(0,j.pipeline)(d,new j.PassThrough,S=>{S&&n(S)});process.version<"v12.10"&&d.on("aborted",b);let R={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:x,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},C=x.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||C===null||d.statusCode===204||d.statusCode===304){u=new G(A,R),e(u);return}let p={flush:ie.default.Z_SYNC_FLUSH,finishFlush:ie.default.Z_SYNC_FLUSH};if(C==="gzip"||C==="x-gzip"){A=(0,j.pipeline)(A,ie.default.createGunzip(p),S=>{S&&n(S)}),u=new G(A,R),e(u);return}if(C==="deflate"||C==="x-deflate"){let S=(0,j.pipeline)(d,new j.PassThrough,g=>{g&&n(g)});S.once("data",g=>{(g[0]&15)===8?A=(0,j.pipeline)(A,ie.default.createInflate(),P=>{P&&n(P)}):A=(0,j.pipeline)(A,ie.default.createInflateRaw(),P=>{P&&n(P)}),u=new G(A,R),e(u)}),S.once("end",()=>{u||(u=new G(A,R),e(u))});return}if(C==="br"){A=(0,j.pipeline)(A,ie.default.createBrotliDecompress(),S=>{S&&n(S)}),u=new G(A,R),e(u);return}u=new G(A,R),e(u)}),ut(D,r).catch(n)})}function Ia(t,a){let e=Me.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;t.on("response",l=>{let{headers:y}=l;n=y["transfer-encoding"]==="chunked"&&!y["content-length"]}),t.on("socket",l=>{let y=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},s=u=>{r=Me.Buffer.compare(u.slice(-5),e)===0,!r&&o&&(r=Me.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&Me.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};l.prependListener("close",y),l.on("data",s),t.on("close",()=>{l.removeListener("close",y),l.removeListener("data",s)})})}var c=Q(require("graphql-tag")),me=c.default`
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
`,ga=c.default`
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
  ${me}
`,Y=c.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Re=c.default`
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
  ${Y}
`,Le=c.default`
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
  ${Re}
  ${me}
  ${Y}
`,Ma=c.default`
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
  ${Re}
  ${me}
  ${Y}
`,ma=c.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Et=c.default`
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
  ${Re}
  ${ma}
`,Ct=c.default`
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
  ${me}
  ${Re}
  ${Y}
`,Ra=c.default`
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
  ${me}
  ${Re}
  ${Y}
`,Aa=c.default`
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
`,ft=c.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,We=c.default`
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
`,Pa=c.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Ea=c.default`
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
`,Ca=c.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,fa=c.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Da=c.default`
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
  ${ga}
`,xa=c.default`
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
`,Ua=c.default`
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
  ${Y}
`,_a=c.default`
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
`,va=c.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Ma}
`,ha=c.default`
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
  ${Le}
`,Ta=c.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Le}
`,wa=c.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ba=c.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Oa=c.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,La=c.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Va=c.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Na=c.default`
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
  ${Le}
`,qa=c.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Fa=c.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Et}
`,ja=c.default`
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
  ${Ct}
`,ka=c.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ra}
`,za=c.default`
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
  ${Y}
`,Ga=c.default`
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
`,Ha=c.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Aa}
`,Qa=c.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,$a=c.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wa=c.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=c.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Ya=c.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Za=c.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Xa=c.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ja=c.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,er=c.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,tr=c.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,ar=c.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,rr=c.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,nr=c.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,or=c.default`
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
`,ir=c.default`
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
  ${Ct}
`,sr=c.default`
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
  ${We}
`,ur=c.default`
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
  ${We}
`,pr=c.default`
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
`,lr=c.default`
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
`,cr=c.default`
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
  ${ft}
  ${Y}
`,yr=c.default`
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
  ${ft}
`,dr=c.default`
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
  ${Le}
`,Sr=c.default`
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
  ${Pa}
`,br=c.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ir=c.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,gr=c.default`
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
  ${We}
`,Mr=c.default`
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
  ${Y}
  ${Et}
`,mr=c.default`
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
  ${Y}
`,Rr=c.default`
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
`,Ar=(t,a,e,n)=>t();function Dt(t,a=Ar){return{createLinkedBranch(e,n,r){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",e)},createRef(e,n,r){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",e)},deleteLinkedBranch(e,n,r){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,n,r){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,n,r){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,n,r){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,n,r){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",e)},issueDetails(e,n,r){return a(o=>t.request({document:va,variables:e,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",e)},searchIssues(e,n,r){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",e)},issueByNumber(e,n,r){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",e)},closeIssue(e,n,r){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",e)},reopenIssue(e,n,r){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",e)},changeIssueAssignees(e,n,r){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,n,r){return a(o=>t.request({document:La,variables:e,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,n,r){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",e)},createIssue(e,n,r){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",e)},changeProjectStatus(e,n,r){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",e)},projectDetails(e,n,r){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",e)},searchPullRequests(e,n,r){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",e)},pullRequestDetails(e,n,r){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,n,r){return a(o=>t.request({document:za,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,n,r){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,n,r){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",e)},closePullRequest(e,n,r){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",e)},reopenPullRequest(e,n,r){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,n,r){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,n,r){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,n,r){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,n,r){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,n,r){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",e)},requestReview(e,n,r){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",e)},mergePullRequest(e,n,r){return a(o=>t.request({document:er,variables:e,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,n,r){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,n,r){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,n,r){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,n,r){return a(o=>t.request({document:or,variables:e,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",e)},initPullRequest(e,n,r){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",e)},searchRepositories(e,n,r){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",e)},myLatestRepositories(e,n,r){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",e)},milestonesForRepository(e,n,r){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",e)},commentsForPullRequest(e,n,r){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",e)},dataForRepository(e,n,r){return a(o=>t.request({document:cr,variables:e,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",e)},searchRepositoryBranches(e,n,r){return a(o=>t.request({document:yr,variables:e,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",e)},repositoryIssues(e,n,r){return a(o=>t.request({document:dr,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",e)},repositoryReleases(e,n,r){return a(o=>t.request({document:Sr,variables:e,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",e)},addStar(e,n,r){return a(o=>t.request({document:br,variables:e,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",e)},removeStar(e,n,r){return a(o=>t.request({document:Ir,variables:e,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",e)},myStarredRepositories(e,n,r){return a(o=>t.request({document:gr,variables:e,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",e)},getViewer(e,n,r){return a(o=>t.request({document:Mr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewer","query",e)},getViewerStats(e,n,r){return a(o=>t.request({document:mr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",e)},getViewerStatsDetails(e,n,r){return a(o=>t.request({document:Rr,variables:e,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",e)}}}var Ke=null,Ye=null,ht=null,Pr=(0,Ut.getPreferenceValues)();function Er({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;ht=t,Ke=Dt(new vt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ye=new xt.Octokit({auth:t,request:{fetch:Oe}})}var Tt=_t.OAuthService.github({personalAccessToken:Pr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Er});function k(){if(!Ke||!Ye)throw new Error("GitHub clients not initialized");return{github:Ke,octokit:Ye,token:ht}}var _=require("@raycast/api"),Ft=require("@raycast/utils"),jt=require("date-fns");var wt=require("@raycast/api"),Cr=require("lodash");var Ae=require("@raycast/api");function Z(t){return t?{icon:{source:t.avatarUrl??Ae.Icon.Person,mask:Ae.Image.Mask.Circle},text:(t.name?t.name:t.login)??"-"}:{icon:Ae.Icon.Person,text:"Unknown"}}function Ve(t,a,{suffix:e="s",withNumber:n=!1}={}){let r=`${a}${t!==1?e:""}`;return n?`${t} ${r}`:r}var te=require("@raycast/api");function Bt(t){return t.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:te.Color.SecondaryText},text:"Closed as not planned",color:te.Color.Purple}:t.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:te.Color.Purple},text:"Closed as completed",color:te.Color.Purple}:t.closed?{icon:{source:"issue-closed.svg",tintColor:te.Color.Purple},text:"Closed",color:te.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:te.Color.Green},text:"Open",color:te.Color.Green}}function Ot(t){return Z(t.author)}var Lt=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}];var Vt=require("@raycast/utils");function ce(){let{github:t}=k(),{data:a}=(0,Vt.useCachedPromise)(async()=>(await t.getViewer()).viewer);return a}var i=require("@raycast/api"),Ne=require("@raycast/utils"),qe=require("react");function T(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var V=require("@raycast/api"),X=require("react/jsx-runtime"),qt=({sortQuery:t,setSortQuery:a,data:e})=>a?(0,X.jsxs)(V.ActionPanel.Submenu,{title:"Sort by",icon:V.Icon.ArrowUp,shortcut:V.Keyboard.Shortcut.Common.Duplicate,children:[e.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,X.jsx)(Nt,{title:n,value:r,sortQuery:t??"",setSortQuery:a},r||"relevance")),e.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,X.jsx)(V.ActionPanel.Section,{title:"Most Reactions",children:e.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,X.jsx)(Nt,{title:n,value:r,sortQuery:t??"",setSortQuery:a},r))})]}):(0,X.jsx)(X.Fragment,{}),Nt=({title:t,value:a,sortQuery:e,setSortQuery:n})=>(0,X.jsx)(V.Action,{title:t,icon:e===a?{source:V.Icon.CheckCircle,tintColor:V.Color.Green}:V.Icon.Circle,onAction:()=>n(a)});var M=require("react/jsx-runtime");function Ze({issue:t,mutateList:a,mutateDetail:e,children:n,setSortQuery:r,sortQuery:o}){let{github:l}=k(),y=ce();async function s(){a&&await a(),e&&await e()}async function u(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Reopening issue #${t.number}`}),await l.reopenIssue({nodeId:t.id}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${t.number} is now open`})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed reopening issue",message:T(p)})}}async function m(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing issue #${t.number} as completed`}),await l.closeIssue({nodeId:t.id,stateReason:"COMPLETED"}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${t.number} closed as completed`})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing issue as completed",message:T(p)})}}async function b(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing issue #${t.number} as not planned`}),await l.closeIssue({nodeId:t.id,stateReason:"NOT_PLANNED"}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Issue #${t.number} closed as not planned`})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing issue as not planned",message:T(p)})}}async function D(p){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Assigning to me"});let S=t.assignees.nodes?.filter(g=>!!g).map(g=>g?.id)??[];await l.changeIssueAssignees({issueId:t.id,assigneeIds:[...S,p]}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Assigned to me"})}catch(S){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed assigning to me",message:T(S)})}}async function h(p){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Un-assigning from me"});let S=t.assignees.nodes?.filter(g=>!!g).map(g=>g?.id)??[];await l.changeIssueAssignees({issueId:t.id,assigneeIds:S?.filter(g=>g!==p)}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Un-assigned from me"})}catch(S){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed un-assigning from me",message:T(S)})}}async function d(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Creating branch for issue #${t.number}`});let p=t.repository.defaultBranchRef?.target?.oid;if(!p)throw new Error("Repository default branch commit SHA is unavailable");let g=(await l.createLinkedBranch({input:{issueId:t.id,oid:p}})).createLinkedBranch?.linkedBranch?.ref?.name;await s(),g&&await(0,i.showToast)({style:i.Toast.Style.Success,title:`${g} is created`,primaryAction:{title:"Copy Branch Name",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>i.Clipboard.copy(g)}})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed creating a branch",message:T(p)})}}async function x(p,S){if(await(0,i.confirmAlert)({icon:i.Icon.Trash,title:"Delete the branch",message:`${S} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:i.Alert.ActionStyle.Destructive}}))try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Deleting a branch"}),await l.deleteLinkedBranch({input:{linkedBranchId:p}}),await s(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Deleted the branch"})}catch(g){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed deleting the branch",message:T(g)})}}let A=Z(y),R=t.assignees.nodes?.some(p=>p?.isViewer),C=t.linkedBranches?.nodes?.length?t.linkedBranches.nodes[0]:null;return(0,M.jsxs)(i.ActionPanel,{title:`#${t.number} in ${t.repository.nameWithOwner}`,children:[n,(0,M.jsx)(i.Action.OpenInBrowser,{url:t.url}),(0,M.jsxs)(i.ActionPanel.Section,{children:[y?(0,M.jsx)(i.Action,{title:R?"Unassign from Me":"Assign to Me",icon:A.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>R?h(y.id):D(y.id)}):null,(0,M.jsx)(fr,{issue:t,mutate:s}),(0,M.jsx)(Dr,{issue:t,mutate:s}),C?null:(0,M.jsx)(i.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"b"},onAction:()=>d()}),(0,M.jsx)(xr,{issue:t,mutate:s})]}),(0,M.jsx)(i.ActionPanel.Section,{children:t.closed?(0,M.jsx)(i.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:i.Color.Green},onAction:u}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.Action,{title:"Close Issue as Completed",style:i.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:i.Color.Red},onAction:m}),(0,M.jsx)(i.Action,{title:"Close Issue as Not Planned",style:i.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:i.Color.Red},onAction:b}),C?(0,M.jsx)(i.Action,{title:"Delete Issue Branch",style:i.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:i.Color.Red},onAction:()=>x(C?.id||"",C.ref?.name??"")}):null]})}),(0,M.jsxs)(i.ActionPanel.Section,{children:[(0,M.jsx)(i.Action.CopyToClipboard,{content:t.number,title:"Copy Issue Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:t.url,title:"Copy Issue URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:t.title,title:"Copy Issue Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,M.jsx)(i.Action.CopyToClipboard,{content:`[${t.title}](${t.url})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}}),C?.ref?.name?(0,M.jsx)(i.Action.CopyToClipboard,{content:C.ref?.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null]}),(0,M.jsxs)(i.ActionPanel.Section,{children:[(0,M.jsx)(qt,{data:Lt,sortQuery:o,setSortQuery:r}),(0,M.jsx)(i.Action,{icon:i.Icon.ArrowClockwise,title:"Refresh",onAction:s,shortcut:i.Keyboard.Shortcut.Common.Refresh})]})]})}function fr({issue:t,mutate:a}){let{github:e}=k(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ne.useCachedPromise)(async s=>e.repositoryCollaboratorsForIssues({owner:s.repository.owner.login,name:s.repository.name,issueNumber:s.number}),[t],{execute:n});async function y({id:s,text:u}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding assignee",message:u});let m=o?.repository?.issue?.assignees.nodes?.filter(b=>!!b).map(b=>b?.id)??[];await e.changeIssueAssignees({issueId:t.id,assigneeIds:[...m,s]}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added assignee",message:u})}catch(m){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding assignee",message:T(m)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Add Assignee",icon:i.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(s=>{if(!s)return null;let u=Z(s);return(0,M.jsx)(i.Action,{title:u.text,icon:u.icon,onAction:()=>y({id:s.id,text:u.text})},s.id)})})}function Dr({issue:t,mutate:a}){let{github:e}=k(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ne.useCachedPromise)(async s=>e.repositoryProjectsForIssues({owner:s.repository.owner.login,name:s.repository.name,issueNumber:s.number}),[t],{execute:n});async function y({id:s,text:u}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding to project",message:u}),await e.addIssueToProject({issueId:t.id,projectId:s}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added to project",message:u})}catch(m){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding to project",message:T(m)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(s=>s?(0,M.jsx)(i.Action,{title:s.title,onAction:()=>y({id:s.id,text:s.title})},s.id):null)})}function xr({issue:t,mutate:a}){let{github:e}=k(),[n,r]=(0,qe.useState)(!1),{data:o,isLoading:l}=(0,Ne.useCachedPromise)(async u=>e.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[t],{execute:n});async function y(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Removing milestone"}),await e.changeIssueMilestone({issueId:t.id,milestoneId:null}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing milestone",message:T(u)})}}async function s({id:u,text:m}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Setting milestone",message:m}),await e.changeIssueMilestone({issueId:t.id,milestoneId:u}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Milestone set",message:m})}catch(b){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed setting milestone",message:T(b)})}}return(0,M.jsx)(i.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,M.jsx)(i.Action,{title:"Loading\u2026"}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.Action,{title:"No Milestone",onAction:()=>y()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,M.jsx)(i.Action,{title:u.title,onAction:()=>s({id:u.id,text:u.title}),autoFocus:t.milestone?.id===u.id},u.id):null)]})})}var v=require("react/jsx-runtime");function Xe({initialIssue:t,mutateList:a}){let{github:e}=k(),n=ce(),{data:r,isLoading:o,mutate:l}=(0,Ft.useCachedPromise)(async b=>(await e.issueDetails({nodeId:b})).node,[t.id],{initialData:t}),y=`# ${r.title}`;r?.body&&(y+=`

${r.body}`);let s=Bt(r),u=Ot(r),m=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,v.jsx)(_.Detail,{isLoading:o,markdown:y,navigationTitle:`#${r.number}`,metadata:(0,v.jsxs)(_.Detail.Metadata,{children:[(0,v.jsx)(_.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,v.jsx)(_.Detail.Metadata.TagList,{title:"Status",children:(0,v.jsx)(_.Detail.Metadata.TagList.Item,{...s})}),m?(0,v.jsx)(_.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:_.Color.PrimaryText},text:m}):null,r.updatedAt?(0,v.jsx)(_.Detail.Metadata.Label,{title:"Updated",text:(0,jt.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,v.jsx)(_.Detail.Metadata.Label,{title:"Author",...u}),r.assignees&&r.assignees.totalCount>0?(0,v.jsx)(_.Detail.Metadata.TagList,{title:Ve(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(b=>{if(!b)return null;let D=Z(b);return(0,v.jsx)(_.Detail.Metadata.TagList.Item,{...D},b.id)})}):null,r.labels&&r.labels.totalCount>0?(0,v.jsx)(_.Detail.Metadata.TagList,{title:Ve(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(b=>b?(0,v.jsx)(_.Detail.Metadata.TagList.Item,{text:b.name,color:b.color},b.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,v.jsx)(_.Detail.Metadata.TagList,{title:Ve(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(b=>b?(0,v.jsx)(_.Detail.Metadata.TagList.Item,{text:b.title},b.id):null)}):null,r.milestone?(0,v.jsx)(_.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,v.jsx)(Ze,{issue:r,viewer:n,mutateList:a,mutateDetail:l})})}var kt=require("@raycast/utils");var zt=(0,kt.withAccessToken)(Tt);var Qt=require("@raycast/utils");var Fe=require("node:child_process");var Ht=require("node:util"),H=require("@raycast/api"),Ur=require("@raycast/utils");var Lo=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:H.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:H.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:H.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:H.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:H.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:H.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:H.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:H.Color.PrimaryText}}];var _r=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],vr=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],hr=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Vo=_r[0].value,No=vr[0].value,qo=hr[0].value;var Fo=(0,Ht.promisify)(Fe.execFile);var Pe="\x1B",Gt="\x07",jo=new RegExp(`${Pe}][^${Gt}${Pe}]*(?:${Gt}|${Pe}\\\\)`,"g"),ko=new RegExp(`${Pe}\\[[0-9;?]*[A-Za-z]`,"g"),zo=new RegExp(`${Pe}\\([0-9A-Za-z]`,"g");function $t(){let{github:t}=k(),n=["user:@me",...ce()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,Qt.useCachedPromise)(async r=>{let l=(await Promise.allSettled(r.split(" ").map(y=>t.searchRepositories({query:`${y} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(y=>y.status==="fulfilled"?y.value.search.nodes:[]);return[...new Map(l.map(y=>[y.id,y])).values()].sort((y,s)=>new Date(s.updatedAt).getTime()-new Date(y.updatedAt).getTime())},[n])}var f=require("react/jsx-runtime");function Kt({draftValues:t}){let{push:a}=(0,I.useNavigation)(),{data:e}=$t(),{github:n}=k(),{openInBrowserAfterCreate:r}=(0,I.getPreferenceValues)(),{handleSubmit:o,itemProps:l,values:y,setValue:s,reset:u,focus:m}=(0,se.useForm)({async onSubmit(p){let S=await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Creating issue"});try{let P=(await n.createIssue({repositoryId:p.repository,title:p.title,body:p.description,assigneeIds:p.assignees,labelIds:p.labels,milestoneId:p.milestone||null,issueTypeId:p.issueType||null}))?.createIssue?.issue;if(P&&(await Promise.all(p.projects.map(re=>n.addIssueToProject({issueId:P.id,projectId:re}))),S.style=I.Toast.Style.Success,S.title="Created issue",S.primaryAction={title:"Open Issue",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:()=>a((0,f.jsx)(Xe,{initialIssue:P}))},S.secondaryAction={title:"Copy URL",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>I.Clipboard.copy(P.url)},r))try{await(0,I.open)(P.url)}catch{}u({title:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:"",issueType:""}),m("repository")}catch(g){S.style=I.Toast.Style.Failure,S.title="Failed creating issue",S.message=T(g)}},initialValues:{repository:t?.repository??"",title:t?.title??"",description:t?.description??"",reviewers:t?.reviewers??[],assignees:t?.assignees??[],labels:t?.labels??[],projects:t?.projects??[],milestone:t?.milestone??"",issueType:t?.issueType??""},validation:{repository:se.FormValidation.Required,title:se.FormValidation.Required}}),{data:b}=(0,se.useCachedPromise)(p=>{let S=e?.find(g=>g.id===p);return S?n.dataForRepository({owner:S.owner.login,name:S.name}):Promise.resolve(null)},[y.repository],{execute:!!y.repository}),D=b?.repository?.collaborators?.nodes,h=b?.repository?.labels?.nodes,d=b?.repository?.projectsV2?.nodes??[],x=b?.repository?.owner?.__typename==="Organization"?b.repository.owner.projectsV2?.nodes??[]:[],A=[...d,...x].filter((p,S,g)=>p?g.findIndex(P=>P?.id===p.id)===S:!1),R=b?.repository?.milestones?.nodes,C=b?.repository?.issueTypes?.nodes?.filter(p=>p&&p.isEnabled);return(0,Wt.useEffect)(()=>{s("description",""),s("assignees",[]),s("labels",[]),s("projects",[]),s("milestone",""),s("issueType","")},[y.repository]),(0,f.jsxs)(I.Form,{actions:(0,f.jsx)(I.ActionPanel,{children:(0,f.jsx)(I.Action.SubmitForm,{onSubmit:o,title:"Create Issue"})}),enableDrafts:!0,children:[(0,f.jsx)(I.Form.Dropdown,{...l.repository,title:"Repository",storeValue:!0,children:e?.map(p=>(0,f.jsx)(I.Form.Dropdown.Item,{title:p.nameWithOwner,value:p.id,icon:{source:p.owner.avatarUrl,mask:I.Image.Mask.Circle}},p.id))}),(0,f.jsx)(I.Form.Separator,{}),(0,f.jsx)(I.Form.TextField,{...l.title,title:"Title",placeholder:"Issue title"}),(0,f.jsx)(I.Form.TextArea,{...l.description,placeholder:"Issue description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,f.jsx)(I.Form.TagPicker,{...l.assignees,title:"Assignees",children:D?.map(p=>{if(!p)return null;let S=Z(p);return(0,f.jsx)(I.Form.TagPicker.Item,{icon:S.icon,title:S.text,value:p.id},p.id)})}),(0,f.jsx)(I.Form.TagPicker,{...l.labels,title:"Labels",children:h?.map(p=>p?(0,f.jsx)(I.Form.TagPicker.Item,{title:p.name,value:p.id,icon:{source:I.Icon.Dot,tintColor:p.color}},p.id):null)}),(0,f.jsx)(I.Form.TagPicker,{...l.projects,title:"Projects",children:A?.map(p=>p?(0,f.jsx)(I.Form.TagPicker.Item,{title:p.title,value:p.id},p.id):null)}),(0,f.jsxs)(I.Form.Dropdown,{...l.issueType,title:"Issue Type",children:[(0,f.jsx)(I.Form.Dropdown.Item,{value:"",title:"None"}),C?.map(p=>p?(0,f.jsx)(I.Form.Dropdown.Item,{icon:{source:I.Icon.Dot,tintColor:p.color},title:p.name,value:p.id},p.id):null)]}),(0,f.jsxs)(I.Form.Dropdown,{...l.milestone,title:"Milestone",children:[(0,f.jsx)(I.Form.Dropdown.Item,{value:"",title:"None"}),R?.map(p=>p?(0,f.jsx)(I.Form.Dropdown.Item,{title:p.title,value:p.id},p.id):null)]})]})}var Tr=zt(Kt);0&&(module.exports={IssueForm});
