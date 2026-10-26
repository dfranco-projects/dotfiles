"use strict";var Wa=Object.create;var We=Object.defineProperty;var Ka=Object.getOwnPropertyDescriptor;var Ya=Object.getOwnPropertyNames;var Za=Object.getPrototypeOf,Xa=Object.prototype.hasOwnProperty;var Rt=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var De=(e,a)=>{for(var t in a)We(e,t,{get:a[t],enumerable:!0})},Qe=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Ya(a))!Xa.call(e,r)&&r!==t&&We(e,r,{get:()=>a[r],enumerable:!(n=Ka(a,r))||n.enumerable});return e},z=(e,a,t)=>(Qe(e,a,"default"),t&&Qe(t,a,"default")),ae=(e,a,t)=>(t=e!=null?Wa(Za(e)):{},Qe(a||!e||!e.__esModule?We(t,"default",{value:e,enumerable:!0}):t,e)),Ja=e=>Qe(We({},"__esModule",{value:!0}),e);var G={};De(G,{default:()=>Ft.default});var Ft,Ze=Rt(()=>{z(G,require("formdata-polyfill/esm.min.js"));Ft=ae(require("formdata-polyfill/esm.min.js"))});var K={};De(K,{default:()=>Gt.default});var Gt,Pt=Rt(()=>{z(K,require("fetch-blob/from.js"));Gt=ae(require("fetch-blob/from.js"))});var $t={};De($t,{toFormData:()=>ir});function or(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function ir(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Et(t[1]||t[2]),r,o,l,s,u,p,c=[],I=new G.FormData,M=R=>{l+=A.decode(R,{stream:!0})},L=R=>{c.push(R)},y=()=>{let R=new K.File(c,p,{type:u});I.append(s,R)},q=()=>{I.append(s,l)},A=new TextDecoder("utf-8");A.decode(),n.onPartBegin=function(){n.onPartData=M,n.onPartEnd=q,r="",o="",l="",s="",u="",p=null,c.length=0},n.onHeaderField=function(R){r+=A.decode(R,{stream:!0})},n.onHeaderValue=function(R){o+=A.decode(R,{stream:!0})},n.onHeaderEnd=function(){if(o+=A.decode(),r=r.toLowerCase(),r==="content-disposition"){let R=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);R&&(s=R[2]||R[3]||""),p=or(o),p&&(n.onPartData=L,n.onPartEnd=y)}else r==="content-type"&&(u=o);o="",r=""};for await(let R of e)n.write(R);return n.end(),I}var pe,D,Ht,ge,Je,et,er,Oe,tr,ar,rr,nr,Re,Et,Qt=Rt(()=>{Pt();Ze();pe=0,D={START_BOUNDARY:pe++,HEADER_FIELD_START:pe++,HEADER_FIELD:pe++,HEADER_VALUE_START:pe++,HEADER_VALUE:pe++,HEADER_VALUE_ALMOST_DONE:pe++,HEADERS_ALMOST_DONE:pe++,PART_DATA_START:pe++,PART_DATA:pe++,END:pe++},Ht=1,ge={PART_BOUNDARY:Ht,LAST_BOUNDARY:Ht*=2},Je=10,et=13,er=32,Oe=45,tr=58,ar=97,rr=122,nr=e=>e|32,Re=()=>{},Et=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=Re,this.onHeaderField=Re,this.onHeadersEnd=Re,this.onHeaderValue=Re,this.onPartBegin=Re,this.onPartData=Re,this.onPartEnd=Re,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:s,index:u,state:p,flags:c}=this,I=this.boundary.length,M=I-1,L=a.length,y,q,A=m=>{this[m+"Mark"]=t},R=m=>{delete this[m+"Mark"]},v=(m,V,U,ee)=>{(V===void 0||V!==U)&&this[m](ee&&ee.subarray(V,U))},F=(m,V)=>{let U=m+"Mark";U in this&&(V?(v(m,this[U],t,a),delete this[U]):(v(m,this[U],a.length,a),this[U]=0))};for(t=0;t<n;t++)switch(y=a[t],p){case D.START_BOUNDARY:if(u===l.length-2){if(y===Oe)c|=ge.LAST_BOUNDARY;else if(y!==et)return;u++;break}else if(u-1===l.length-2){if(c&ge.LAST_BOUNDARY&&y===Oe)p=D.END,c=0;else if(!(c&ge.LAST_BOUNDARY)&&y===Je)u=0,v("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}y!==l[u+2]&&(u=-2),y===l[u+2]&&u++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,A("onHeaderField"),u=0;case D.HEADER_FIELD:if(y===et){R("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(u++,y===Oe)break;if(y===tr){if(u===1)return;F("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(q=nr(y),q<ar||q>rr)return;break;case D.HEADER_VALUE_START:if(y===er)break;A("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:y===et&&(F("onHeaderValue",!0),v("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(y!==Je)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(y!==Je)return;v("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,A("onPartData");case D.PART_DATA:if(r=u,u===0){for(t+=M;t<L&&!(a[t]in s);)t+=I;t-=M,y=a[t]}if(u<l.length)l[u]===y?(u===0&&F("onPartData",!0),u++):u=0;else if(u===l.length)u++,y===et?c|=ge.PART_BOUNDARY:y===Oe?c|=ge.LAST_BOUNDARY:u=0;else if(u-1===l.length)if(c&ge.PART_BOUNDARY){if(u=0,y===Je){c&=~ge.PART_BOUNDARY,v("onPartEnd"),v("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&ge.LAST_BOUNDARY&&y===Oe?(v("onPartEnd"),p=D.END,c=0):u=0;if(u>0)o[u-1]=y;else if(r>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);v("onPartData",0,r,m),r=0,A("onPartData"),t--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}F("onHeaderField"),F("onHeaderValue"),F("onPartData"),this.index=u,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var qn={};De(qn,{PullRequestForm:()=>$a,default:()=>Ln});module.exports=Ja(qn);var g=require("@raycast/api"),ue=require("@raycast/utils"),Ce=require("react");var Sa=require("@octokit/rest"),ba=require("@raycast/api"),Ia=require("@raycast/utils"),ga=require("graphql-request");var ua=ae(require("node:http"),1),pa=ae(require("node:https"),1),Pe=ae(require("node:zlib"),1),X=ae(require("node:stream"),1),Ve=require("node:buffer");var Te={};De(Te,{default:()=>Ke.default});z(Te,require("data-uri-to-buffer"));var Ke=ae(require("data-uri-to-buffer"));var re=ae(require("node:stream"),1),be=require("node:util"),Y=require("node:buffer");var we={};De(we,{default:()=>Ye.default});z(we,require("fetch-blob"));var Ye=ae(require("fetch-blob"));Ze();var Se=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var H=class extends Se{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Xe=Symbol.toStringTag,At=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Xe]==="URLSearchParams",Be=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Xe]),jt=e=>typeof e=="object"&&(e[Xe]==="AbortSignal"||e[Xe]==="EventTarget"),kt=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},zt=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var sr=(0,be.promisify)(re.default.pipeline),$=Symbol("Body internals"),le=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:At(a)?a=Y.Buffer.from(a.toString()):Be(a)||Y.Buffer.isBuffer(a)||(be.types.isAnyArrayBuffer(a)?a=Y.Buffer.from(a):ArrayBuffer.isView(a)?a=Y.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof re.default||(a instanceof G.FormData?(a=(0,G.formDataToBlob)(a),n=a.type.split("=")[1]):a=Y.Buffer.from(String(a))));let r=a;Y.Buffer.isBuffer(a)?r=re.default.Readable.from(a):Be(a)&&(r=re.default.Readable.from(a.stream())),this[$]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof re.default&&a.on("error",o=>{let l=o instanceof Se?o:new H(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=l})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await Ct(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new G.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:t}=await Promise.resolve().then(()=>(Qt(),$t));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",t=await this.arrayBuffer();return new Ye.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await Ct(this);return new TextDecoder().decode(a)}buffer(){return Ct(this)}};le.prototype.buffer=(0,be.deprecate)(le.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(le.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,be.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Ct(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:a}=e;if(a===null)return Y.Buffer.alloc(0);if(!(a instanceof re.default))return Y.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new H(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof Se?r:new H(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?Y.Buffer.from(t.join("")):Y.Buffer.concat(t,n)}catch(r){throw new H(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new H(`Premature close of server response while trying to fetch ${e.url}`)}var xe=(e,a)=>{let t,n,{body:r}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof re.default&&typeof r.getBoundary!="function"&&(t=new re.PassThrough({highWaterMark:a}),n=new re.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[$].stream=t,r=n),r},ur=(0,be.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),tt=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":At(e)?"application/x-www-form-urlencoded;charset=UTF-8":Be(e)?e.type||null:Y.Buffer.isBuffer(e)||be.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof G.FormData?`multipart/form-data; boundary=${a[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${ur(e)}`:e instanceof re.default?null:"text/plain;charset=UTF-8",Wt=e=>{let{body:a}=e[$];return a===null?0:Be(a)?a.size:Y.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},Kt=async(e,{body:a})=>{a===null?e.end():await sr(a,e)};var ft=require("node:util"),Le=ae(require("node:http"),1),at=typeof Le.default.validateHeaderName=="function"?Le.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Dt=typeof Le.default.validateHeaderValue=="function"?Le.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},Z=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!ft.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||ft.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(at(n),Dt(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,s)=>(at(l),Dt(l,String(s)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return l=>(at(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function Yt(e=[]){return new Z(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return at(a),Dt(a,String(t)),!0}catch{return!1}}))}var pr=new Set([301,302,303,307,308]),rt=e=>pr.has(e);var se=Symbol("Response internals"),ne=class e extends le{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new Z(t.headers);if(a!==null&&!r.has("Content-Type")){let o=tt(a,this);o&&r.append("Content-Type",o)}this[se]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[se].type}get url(){return this[se].url||""}get status(){return this[se].status}get ok(){return this[se].status>=200&&this[se].status<300}get redirected(){return this[se].counter>0}get statusText(){return this[se].statusText}get headers(){return this[se].headers}get highWaterMark(){return this[se].highWaterMark}clone(){return new e(xe(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!rt(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[se].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new Z(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ne.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var oa=require("node:url"),ia=require("node:util");var Zt=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var Jt=require("node:net");function Xt(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var ea=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ta="strict-origin-when-cross-origin";function aa(e){if(!ea.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function lr(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,Jt.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Ue(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:lr(e)}function ra(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Xt(r),l=Xt(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),t&&(l=t(l));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return Ue(o)&&!Ue(s)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Ue(o)&&!Ue(s)?"no-referrer":l;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:l;case"no-referrer-when-downgrade":return Ue(o)&&!Ue(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function na(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&ea.has(n)&&(t=n);return t}var N=Symbol("Request internals"),qe=e=>typeof e=="object"&&typeof e[N]=="object",cr=(0,ia.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ae=class e extends le{constructor(a,t={}){let n;if(qe(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!qe(t)&&"data"in t&&cr(),(t.body!=null||qe(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:qe(a)&&a.body!==null?xe(a):null;super(o,{size:t.size||a.size||0});let l=new Z(t.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let p=tt(o,this);p&&l.set("Content-Type",p)}let s=qe(a)?a.signal:null;if("signal"in t&&(s=t.signal),s!=null&&!jt(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=t.referrer==null?a.referrer:t.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[N]={method:r,redirect:t.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:s,referrer:u},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[N].method}get url(){return(0,oa.format)(this[N].parsedURL)}get headers(){return this[N].headers}get redirect(){return this[N].redirect}get signal(){return this[N].signal}get referrer(){if(this[N].referrer==="no-referrer")return"";if(this[N].referrer==="client")return"about:client";if(this[N].referrer)return this[N].referrer.toString()}get referrerPolicy(){return this[N].referrerPolicy}set referrerPolicy(a){this[N].referrerPolicy=aa(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ae.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var sa=e=>{let{parsedURL:a}=e[N],t=new Z(e[N].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Wt(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=ta),e.referrer&&e.referrer!=="no-referrer"?e[N].referrer=ra(e):e[N].referrer="no-referrer",e[N].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=Zt(a),l={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var nt=class extends Se{constructor(a,t="aborted"){super(a,t)}};Ze();Pt();var yr=new Set(["data:","http:","https:"]);async function ot(e,a){return new Promise((t,n)=>{let r=new Ae(e,a),{parsedURL:o,options:l}=sa(r);if(!yr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let y=(0,Ke.default)(r.url),q=new ne(y,{headers:{"Content-Type":y.typeFull}});t(q);return}let s=(o.protocol==="https:"?pa.default:ua.default).request,{signal:u}=r,p=null,c=()=>{let y=new nt("The operation was aborted.");n(y),r.body&&r.body instanceof X.default.Readable&&r.body.destroy(y),!(!p||!p.body)&&p.body.emit("error",y)};if(u&&u.aborted){c();return}let I=()=>{c(),L()},M=s(o.toString(),l);u&&u.addEventListener("abort",I);let L=()=>{M.abort(),u&&u.removeEventListener("abort",I)};M.on("error",y=>{n(new H(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),L()}),dr(M,y=>{p&&p.body&&p.body.destroy(y)}),process.version<"v14"&&M.on("socket",y=>{let q;y.prependListener("end",()=>{q=y._eventsCount}),y.prependListener("close",A=>{if(p&&q<y._eventsCount&&!A){let R=new Error("Premature close");R.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",R)}})}),M.on("response",y=>{M.setTimeout(0);let q=Yt(y.rawHeaders);if(rt(y.statusCode)){let m=q.get("Location"),V=null;try{V=m===null?null:new URL(m,r.url)}catch{if(r.redirect!=="manual"){n(new H(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),L();return}}switch(r.redirect){case"error":n(new H(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),L();return;case"manual":break;case"follow":{if(V===null)break;if(r.counter>=r.follow){n(new H(`maximum redirect reached at: ${r.url}`,"max-redirect")),L();return}let U={headers:new Z(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:xe(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!kt(r.url,V)||!zt(r.url,V))for(let me of["authorization","www-authenticate","cookie","cookie2"])U.headers.delete(me);if(y.statusCode!==303&&r.body&&a.body instanceof X.default.Readable){n(new H("Cannot follow redirect with body being a readable stream","unsupported-redirect")),L();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(U.method="GET",U.body=void 0,U.headers.delete("content-length"));let ee=na(q);ee&&(U.referrerPolicy=ee),t(ot(new Ae(V,U))),L();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}u&&y.once("end",()=>{u.removeEventListener("abort",I)});let A=(0,X.pipeline)(y,new X.PassThrough,m=>{m&&n(m)});process.version<"v12.10"&&y.on("aborted",I);let R={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:q,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},v=q.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||v===null||y.statusCode===204||y.statusCode===304){p=new ne(A,R),t(p);return}let F={flush:Pe.default.Z_SYNC_FLUSH,finishFlush:Pe.default.Z_SYNC_FLUSH};if(v==="gzip"||v==="x-gzip"){A=(0,X.pipeline)(A,Pe.default.createGunzip(F),m=>{m&&n(m)}),p=new ne(A,R),t(p);return}if(v==="deflate"||v==="x-deflate"){let m=(0,X.pipeline)(y,new X.PassThrough,V=>{V&&n(V)});m.once("data",V=>{(V[0]&15)===8?A=(0,X.pipeline)(A,Pe.default.createInflate(),U=>{U&&n(U)}):A=(0,X.pipeline)(A,Pe.default.createInflateRaw(),U=>{U&&n(U)}),p=new ne(A,R),t(p)}),m.once("end",()=>{p||(p=new ne(A,R),t(p))});return}if(v==="br"){A=(0,X.pipeline)(A,Pe.default.createBrotliDecompress(),m=>{m&&n(m)}),p=new ne(A,R),t(p);return}p=new ne(A,R),t(p)}),Kt(M,r).catch(n)})}function dr(e,a){let t=Ve.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",l=>{let{headers:s}=l;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",l=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",a(p)}},u=p=>{r=Ve.Buffer.compare(p.slice(-5),t)===0,!r&&o&&(r=Ve.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&Ve.Buffer.compare(p.slice(-2),t.slice(3))===0),o=p};l.prependListener("close",s),l.on("data",u),e.on("close",()=>{l.removeListener("close",s),l.removeListener("data",u)})})}var S=ae(require("graphql-tag")),Ne=S.default`
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
`,Sr=S.default`
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
  ${Ne}
`,ce=S.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Fe=S.default`
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
  ${ce}
`,it=S.default`
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
  ${Fe}
  ${Ne}
  ${ce}
`,br=S.default`
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
  ${Fe}
  ${Ne}
  ${ce}
`,Ir=S.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,la=S.default`
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
  ${Fe}
  ${Ir}
`,ca=S.default`
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
  ${Ne}
  ${Fe}
  ${ce}
`,gr=S.default`
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
  ${Ne}
  ${Fe}
  ${ce}
`,Mr=S.default`
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
`,ya=S.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,xt=S.default`
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
`,mr=S.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Rr=S.default`
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
`,Ar=S.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Pr=S.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Er=S.default`
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
  ${Sr}
`,Cr=S.default`
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
`,fr=S.default`
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
  ${ce}
`,Dr=S.default`
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
`,xr=S.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${br}
`,Ur=S.default`
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
  ${it}
`,_r=S.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${it}
`,hr=S.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,vr=S.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Tr=S.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,wr=S.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Br=S.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Or=S.default`
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
  ${it}
`,Lr=S.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,qr=S.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${la}
`,Vr=S.default`
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
  ${ca}
`,Nr=S.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${gr}
`,Fr=S.default`
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
  ${ce}
`,jr=S.default`
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
`,kr=S.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Mr}
`,zr=S.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Gr=S.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Hr=S.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,$r=S.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Qr=S.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Wr=S.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Kr=S.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Yr=S.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Zr=S.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Xr=S.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Jr=S.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,en=S.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,tn=S.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,an=S.default`
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
`,rn=S.default`
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
  ${ca}
`,nn=S.default`
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
  ${xt}
`,on=S.default`
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
  ${xt}
`,sn=S.default`
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
`,un=S.default`
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
`,pn=S.default`
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
  ${ya}
  ${ce}
`,ln=S.default`
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
  ${ya}
`,cn=S.default`
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
  ${it}
`,yn=S.default`
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
  ${mr}
`,dn=S.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Sn=S.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,bn=S.default`
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
  ${xt}
`,In=S.default`
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
  ${ce}
  ${la}
`,gn=S.default`
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
  ${ce}
`,Mn=S.default`
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
`,mn=(e,a,t,n)=>e();function da(e,a=mn){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:Rr,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:Ar,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:Pr,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:Er,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:Cr,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:fr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:Dr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:xr,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:Ur,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:_r,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:hr,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:vr,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:Tr,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:wr,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:Br,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:Or,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:Lr,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:qr,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:Vr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:Nr,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:Fr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:jr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:kr,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:zr,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:Gr,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:Hr,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:$r,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:Qr,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:Wr,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Kr,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:Yr,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Zr,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:Xr,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:Jr,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:en,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:tn,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:an,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:rn,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:nn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:on,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:sn,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:un,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:pn,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:ln,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:cn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:yn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:dn,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:Sn,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:bn,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:In,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:gn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:Mn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var Ut=null,_t=null,Ma=null,Rn=(0,ba.getPreferenceValues)();function An({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Ma=e,Ut=da(new ga.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),_t=new Sa.Octokit({auth:e,request:{fetch:ot}})}var ma=Ia.OAuthService.github({personalAccessToken:Rn.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:An});function B(){if(!Ut||!_t)throw new Error("GitHub clients not initialized");return{github:Ut,octokit:_t,token:Ma}}var x=require("@raycast/api"),Na=require("@raycast/utils"),Fa=require("date-fns");var f=require("@raycast/api"),Aa=require("lodash");function st(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}var je=require("@raycast/api");function J(e){return e?{icon:{source:e.avatarUrl??je.Icon.Person,mask:je.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:je.Icon.Person,text:"Unknown"}}function ut(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let a=e;throw new Error(`Unknown merge method: ${a}`)}}}function vt(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:f.Color.Purple},text:"Merged",color:f.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:f.Color.Red},text:"Closed",color:f.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:f.Color.SecondaryText},text:"Draft",color:f.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:f.Color.Orange},text:"In Merge Queue",color:f.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:f.Color.Green},text:"Open",color:f.Color.Green}}function Pa(e){return J(e.author)}function Ea(e){let a=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let l;"githubUsername"in r&&(l=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...J({name:o,login:l,avatarUrl:s})}}}),t=(0,Aa.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...J(n?.author)})),"id");return[...a??[],...t??[]]}function Ca(e){let a=st(e);return a?{icon:f.Icon[a.icon],tooltip:`Checks: ${a.text}`}:null}function fa(e){switch(e){case"added":return{icon:{source:f.Icon.PlusCircle,tintColor:f.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:f.Icon.MinusCircle,tintColor:f.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:f.Icon.ArrowRight,tintColor:f.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:f.Icon.CopyClipboard,tintColor:f.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:f.Icon.Circle,tintColor:f.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:f.Icon.Pencil,tintColor:f.Color.Orange},tooltip:"Changed"};default:return{icon:{source:f.Icon.Pencil,tintColor:f.Color.Orange},tooltip:"Modified"}}}var ht=400;function Da(e){let a=e.split(`
`);return a.length<=ht?{patch:e,remainingLines:0}:{patch:a.slice(0,ht).join(`
`),remainingLines:a.length-ht}}var xa=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}];function Me(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var Ua=require("@raycast/utils");function pt(){let{github:e}=B(),{data:a}=(0,Ua.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var i=require("@raycast/api"),ve=require("@raycast/utils"),he=require("react");function w(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var h=require("@raycast/api"),lt=require("@raycast/utils");var ye=require("react/jsx-runtime");function Tt({pullRequest:e,mutate:a}){let{github:t}=B(),{pop:n}=(0,h.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,lt.useForm)({async onSubmit(l){try{await(0,h.showToast)({style:h.Toast.Style.Animated,title:"Adding Review"}),await t.addPullRequestReview({nodeId:e.id,body:l.comment,event:l.event}),await a(),n(),await(0,h.showToast)({style:h.Toast.Style.Success,title:"Review added"})}catch(s){await(0,h.showToast)({style:h.Toast.Style.Failure,title:"Failed to add review",message:w(s)})}},validation:{comment:lt.FormValidation.Required}});return(0,ye.jsxs)(h.Form,{actions:(0,ye.jsx)(h.ActionPanel,{children:(0,ye.jsx)(h.Action.SubmitForm,{title:"Submit",icon:h.Icon.Plus,onSubmit:r})}),children:[(0,ye.jsx)(h.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,ye.jsxs)(h.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,ye.jsx)(h.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,ye.jsx)(h.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,ye.jsx)(h.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var yt=require("node:child_process"),Ta=require("node:fs"),wa=ae(require("node:path")),wt=require("node:util"),C=require("@raycast/api"),_e=require("@raycast/utils");var ct=require("node:child_process");var ha=require("node:util"),oe=require("@raycast/api"),Pn=require("@raycast/utils");var li=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:oe.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:oe.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:oe.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:oe.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:oe.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:oe.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:oe.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:oe.Color.PrimaryText}}];var En=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Cn=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],fn=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],ci=En[0].value,yi=Cn[0].value,di=fn[0].value;var va=(e,a,t)=>{let n=t?.gitFlags??[],r=t?.targetDir??"",o=["clone",...n,Dn(e,a)];return r&&o.push(r),o};var Si=(0,ha.promisify)(ct.execFile);var ke="\x1B",_a="\x07",bi=new RegExp(`${ke}][^${_a}${ke}]*(?:${_a}|${ke}\\\\)`,"g"),Ii=new RegExp(`${ke}\\[[0-9;?]*[A-Za-z]`,"g"),gi=new RegExp(`${ke}\\([0-9A-Za-z]`,"g");var Dn=(e,a)=>a==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;var Ee=require("react/jsx-runtime");function Bt({pullRequest:e}){let{repositoryCloneProtocol:a}=(0,C.getPreferenceValues)(),{itemProps:t,handleSubmit:n}=(0,_e.useForm)({async onSubmit(r){let o=e.repository.name,l=wa.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,C.showToast)({style:C.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let u=(0,wt.promisify)(yt.exec),p=(0,wt.promisify)(yt.execFile);try{if((0,Ta.existsSync)(l)){await(0,C.showToast)({title:`Switching to branch ${s}`,message:`in ${l}`,style:C.Toast.Style.Animated});let{stdout:c}=await u("git remote",{cwd:l}),I=c.trim().split(`
`)[0]||"origin";await u(`git fetch ${I} ${s}`,{cwd:l}),await u(`git checkout ${s}`,{cwd:l}),await u(`git reset --hard ${I}/${s}`,{cwd:l}),await(0,C.showToast)({style:C.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,C.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${l}`,style:C.Toast.Style.Animated}),await p("git",va(e.repository.nameWithOwner,a,{gitFlags:["-b",s],targetDir:l})),await(0,C.showToast)({style:C.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,C.open)(l),await(0,C.popToRoot)(),await(0,C.closeMainWindow)()}catch(c){if(c instanceof Error&&c.message.includes("Repository not found")){await(0,_e.showFailureToast)(c,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(c instanceof Error&&c.message.includes("already exists")){await(0,_e.showFailureToast)(c,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,_e.showFailureToast)(c,{title:"Failed checking out pull request"})}}});return(0,Ee.jsxs)(C.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,Ee.jsx)(C.ActionPanel,{children:(0,Ee.jsx)(C.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,Ee.jsx)(C.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,Ee.jsx)(C.Form.FilePicker,{...t.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var j=require("@raycast/api"),Ba=require("@raycast/utils"),dt=require("date-fns");var ie=require("react/jsx-runtime");function Ot({pullRequest:e}){let{github:a}=B(),{data:t,isLoading:n,pagination:r}=(0,Ba.useCachedPromise)(l=>async({cursor:s})=>{let p=(await a.pullRequestCommits({nodeId:l.id,numberOfItems:25,before:s})).node,c=p.commits.nodes?.filter(I=>I!=null)??[];return c.sort((I,M)=>{let L=I.commit.authoredDate,y=M.commit.authoredDate;return(0,dt.compareDesc)(new Date(L),new Date(y))}),{data:c,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((t??[]).map(l=>[l.commit.id,l])).values()];return(0,ie.jsx)(j.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(l=>{let s=l.commit,u=new Date(s.authoredDate),p=[{date:u,tooltip:(0,dt.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let I=Ca(s.statusCheckRollup.state);I&&p.unshift(I)}let c;if(s.author){let I={source:s.author.avatarUrl,mask:j.Image.Mask.Circle};c=s.author.name?{value:I,tooltip:s.author.name}:I}return(0,ie.jsx)(j.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:p,...c?{icon:c}:{},actions:(0,ie.jsxs)(j.ActionPanel,{children:[(0,ie.jsx)(j.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,ie.jsx)(j.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,ie.jsxs)(j.ActionPanel.Section,{children:[(0,ie.jsx)(j.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,ie.jsx)(j.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,ie.jsx)(j.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,ie.jsx)(j.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{modifiers:["ctrl","shift"],key:"."}})]})]})},s.id)})})}var La=require("node:crypto"),O=require("@raycast/api"),St=require("@raycast/utils");var k=require("react/jsx-runtime"),Oa=100,xn=4;function Lt({pullRequest:e}){let{octokit:a}=B(),{data:t,isLoading:n,pagination:r}=(0,St.useCachedPromise)((s,u,p)=>async({page:c})=>{let{data:I}=await a.pulls.listFiles({owner:s,repo:u,pull_number:p,per_page:Oa,page:c+1});return{data:I,hasMore:I.length===Oa}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,St.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=t??[],l="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,k.jsxs)(O.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,k.jsx)(O.List.Section,{title:Me(o.length,"file",{withNumber:!0}),subtitle:l,children:o.map(s=>{let u=fa(s.status);return(0,k.jsx)(O.List.Item,{title:s.filename,icon:{value:u.icon,tooltip:u.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:O.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:O.Color.Red}}],detail:(0,k.jsx)(O.List.Item.Detail,{markdown:Un(s)}),actions:(0,k.jsxs)(O.ActionPanel,{title:s.filename,children:[(0,k.jsx)(O.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${hn(s.filename)}`}),(0,k.jsx)(O.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,k.jsxs)(O.ActionPanel.Section,{children:[(0,k.jsx)(O.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{modifiers:["cmd","shift"],key:"."}}),s.patch?(0,k.jsx)(O.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{modifiers:["cmd","shift"],key:","}}):null]})]})},s.sha+s.filename)})}),(0,k.jsx)(O.List.EmptyView,{icon:O.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,k.jsx)(O.ActionPanel,{children:(0,k.jsx)(O.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function Un(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:a,remainingLines:t}=Da(e.patch),n=_n(a),r=`${n}diff
${a}
${n}`;return t===0?r:`${r}

_\u2026 truncated, ${Me(t,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function _n(e){let a=0;for(let[t]of e.matchAll(/`+/g))a=Math.max(a,t.length);return"`".repeat(Math.max(xn,a+1))}function hn(e){return(0,La.createHash)("sha256").update(e).digest("hex")}var Q=require("@raycast/api"),de=require("react/jsx-runtime"),Va=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,de.jsxs)(Q.ActionPanel.Submenu,{title:"Sort by",icon:Q.Icon.ArrowUp,shortcut:Q.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,de.jsx)(qa,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,de.jsx)(Q.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,de.jsx)(qa,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,de.jsx)(de.Fragment,{}),qa=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,de.jsx)(Q.Action,{title:e,icon:t===a?{source:Q.Icon.CheckCircle,tintColor:Q.Color.Green}:Q.Icon.Circle,onAction:()=>n(a)});var b=require("react/jsx-runtime");function qt({pullRequest:e,viewer:a,mutateList:t,mutateDetail:n,children:r,sortQuery:o,setSortQuery:l}){let{github:s}=B();async function u(){t&&await t(),n&&await n()}async function p(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed reopening pull request",message:w(E)})}}async function c(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:w(E)})}}async function I(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing pull request",message:w(E)})}}async function M(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:E}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(W){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed merging pull request",message:w(W)})}}async function L(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:w(E)})}}async function y(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:w(E)})}}async function q(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:E}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(W){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed enabling auto-merge",message:w(W)})}}async function A(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed disabling auto-merge",message:w(E)})}}async function R(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Assigning to me"});let W=e.assignees.nodes?.filter(te=>!!te).map(te=>te?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...W,E]}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Assigned to me"})}catch(W){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed assigning to me",message:w(W)})}}async function v(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Un-assigning from me"});let W=e.assignees.nodes?.filter(te=>!!te).map(te=>te?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:W?.filter(te=>te!==E)}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Un-assigned from me"})}catch(W){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed un-assigning from me",message:w(W)})}}let F=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",m=!e.closed&&!e.merged,V=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===a?.login:!1,U=m&&e.isDraft&&V,ee=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),me=m&&e.repository.autoMergeAllowed,ze=F||me,bt=J(a),Ge=e.assignees.nodes?.some(E=>E?.isViewer),{isOpenInBrowser:It}=(0,i.getPreferenceValues)(),He=(0,b.jsx)(i.Action.OpenInBrowser,{url:e.permalink}),[$e,gt]=It?[He,r]:[r,He];return(0,b.jsxs)(i.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[$e,gt,(0,b.jsx)(i.Action.Push,{icon:i.Icon.Document,title:"Add Review",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,b.jsx)(Tt,{pullRequest:e,mutate:u})}),(0,b.jsx)(i.Action.Push,{icon:{source:"commit.svg",tintColor:i.Color.PrimaryText},title:"See Commits",shortcut:i.Keyboard.Shortcut.Common.Copy,target:(0,b.jsx)(Ot,{pullRequest:e})}),(0,b.jsx)(i.Action.Push,{icon:i.Icon.CodeBlock,title:"View Diff",shortcut:i.Keyboard.Shortcut.Common.RemoveAll,target:(0,b.jsx)(Lt,{pullRequest:e})}),(0,b.jsx)(i.Action.Push,{icon:i.Icon.Download,title:"Checkout Pull Request",shortcut:i.Keyboard.Shortcut.Common.OpenWith,target:(0,b.jsx)(Bt,{pullRequest:e})}),ze&&(0,b.jsxs)(i.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&F&&!e.isInMergeQueue&&(0,b.jsx)(i.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>L()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,b.jsx)(i.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>y()}),!e.isMergeQueueEnabled&&F?(0,b.jsxs)(b.Fragment,{children:[e.repository.mergeCommitAllowed?(0,b.jsx)(i.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>M("MERGE")}):null,e.repository.squashMergeAllowed?(0,b.jsx)(i.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["ctrl","shift"],key:"enter"},onAction:()=>M("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,b.jsx)(i.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["opt","shift"],key:"enter"},onAction:()=>M("REBASE")}):null]}):null,me&&!e.autoMergeRequest&&ee.length===1&&(0,b.jsx)(i.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>q(ee[0])}),me&&!e.autoMergeRequest&&ee.length>1&&(0,b.jsx)(i.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},children:ee.map(E=>(0,b.jsx)(i.Action,{title:ut(E),onAction:()=>q(E)},E))}),m&&e.autoMergeRequest&&(0,b.jsx)(i.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>A()})]}),(0,b.jsxs)(i.ActionPanel.Section,{children:[(0,b.jsx)(vn,{pullRequest:e,mutate:u}),a?(0,b.jsx)(i.Action,{title:Ge?"Unassign from Me":"Assign to Me",icon:bt.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>Ge?v(a.id):R(a.id)}):null,(0,b.jsx)(Tn,{pullRequest:e,mutate:u}),(0,b.jsx)(wn,{pullRequest:e,mutate:u}),(0,b.jsx)(Bn,{pullRequest:e,mutate:u}),(0,b.jsx)(On,{pullRequest:e,mutate:u})]}),(0,b.jsxs)(i.ActionPanel.Section,{children:[U?(0,b.jsx)(i.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"d"},onAction:()=>c()}):null,e.closed&&!e.merged?(0,b.jsx)(i.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,b.jsx)(i.Action,{title:"Close Pull Request",style:i.Action.Style.Destructive,icon:i.Icon.XMarkCircle,onAction:()=>I()})]}),(0,b.jsxs)(i.ActionPanel.Section,{children:[(0,b.jsx)(i.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),e.headRef?(0,b.jsx)(i.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null,(0,b.jsx)(i.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,b.jsx)(i.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,b.jsx)(i.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}})]}),(0,b.jsxs)(i.ActionPanel.Section,{children:[(0,b.jsx)(Va,{data:xa,sortQuery:o,setSortQuery:l}),(0,b.jsx)(i.Action,{icon:i.Icon.ArrowClockwise,title:"Refresh",onAction:u,shortcut:i.Keyboard.Shortcut.Common.Refresh})]})]})}function vn({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,he.useState)(!1),[o,l]=(0,he.useState)(""),{data:s,isLoading:u}=(0,ve.useCachedPromise)(async(c,I)=>t.repositoryCollaboratorsForPullRequests({owner:c.repository.owner.login,name:c.repository.name,pullRequestNumber:c.number,searchQuery:I}),[e,o],{execute:n});async function p({id:c,text:I}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Requesting review",message:I}),await t.requestReview({pullRequestId:e.id,collaboratorId:c}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Requested review",message:I})}catch(M){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed requesting review",message:w(M)})}}return(0,b.jsx)(i.ActionPanel.Submenu,{title:"Request Review",icon:i.Icon.AddPerson,shortcut:{modifiers:["ctrl","shift"],key:"r"},onOpen:()=>r(!0),onSearchTextChange:l,isLoading:u,children:s?.repository?.collaborators?.nodes?.filter(c=>!c?.isViewer).map(c=>{if(!c)return null;let I=J(c);return(0,b.jsx)(i.Action,{title:I.text,icon:I.icon,onAction:()=>p({id:c.id,text:I.text})},c.id)})})}function Tn({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,he.useState)(!1),{data:o,isLoading:l}=(0,ve.useCachedPromise)(async u=>t.repositoryCollaboratorsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding assignee",message:p});let c=o?.repository?.pullRequest?.assignees.nodes?.filter(I=>!!I).map(I=>I?.id)??[];await t.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...c,u]}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added assignee",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding assignee",message:w(c)})}}return(0,b.jsx)(i.ActionPanel.Submenu,{title:"Add Assignee",icon:i.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,b.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(u=>{if(!u)return null;let p=J(u);return(0,b.jsx)(i.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:u.id,text:p.text})},u.id)})})}function wn({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,he.useState)(!1),{data:o,isLoading:l}=(0,ve.useCachedPromise)(async u=>t.repositoryProjectsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding to project",message:p}),await t.addPullRequestToProject({pullRequestId:e.id,projectId:u}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added to project",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding to project",message:w(c)})}}return(0,b.jsx)(i.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,b.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(u=>u?(0,b.jsx)(i.Action,{title:u.title,onAction:()=>s({id:u.id,text:u.title})},u.id):null)})}function Bn({pullRequest:e,mutate:a}){let{github:t}=B(),[n,r]=(0,he.useState)(!1),{data:o,isLoading:l}=(0,ve.useCachedPromise)(async p=>t.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Removing milestone"}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing milestone",message:w(p)})}}async function u({id:p,text:c}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Milestone set",message:c})}catch(I){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed setting milestone",message:w(I)})}}return(0,b.jsx)(i.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,b.jsx)(i.Action,{title:"Loading\u2026"}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,b.jsx)(i.Action,{title:p.title,onAction:()=>u({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function On({pullRequest:e}){let{github:a}=B(),{data:t,isLoading:n}=(0,ve.useCachedPromise)(async r=>{let s=(await a.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(c=>c?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,b.jsx)(b.Fragment,{children:n?(0,b.jsx)(i.Action,{title:"Loading\u2026"}):t&&(0,b.jsx)(i.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{modifiers:["cmd","shift"],key:"v"},url:t,icon:{source:"vercel.svg",tintColor:i.Color.PrimaryText}})})}var _=require("react/jsx-runtime");function Vt({initialPullRequest:e,mutateList:a}){let{github:t}=B(),n=pt(),{data:r,isLoading:o,mutate:l}=(0,Na.useCachedPromise)(async M=>(await t.pullRequestDetails({nodeId:M})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let u=vt(r),p=st(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),c=Pa(r),I=Ea(r);return(0,_.jsx)(x.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,_.jsxs)(x.Detail.Metadata,{children:[(0,_.jsx)(x.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,_.jsxs)(x.Detail.Metadata.TagList,{title:"Status",children:[(0,_.jsx)(x.Detail.Metadata.TagList.Item,{...u}),r.autoMergeRequest&&(0,_.jsx)(x.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:x.Color.Yellow})]}),p?(0,_.jsx)(x.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:x.Icon[p.icon]}):null,(0,_.jsx)(x.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,_.jsx)(x.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,_.jsx)(x.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,_.jsx)(x.Detail.Metadata.Label,{title:"Created",text:(0,Fa.format)(new Date(r.createdAt),"dd MMM")}):null,(0,_.jsx)(x.Detail.Metadata.Label,{title:"Author",...c}),I.length>0?(0,_.jsx)(x.Detail.Metadata.TagList,{title:Me(I.length,"Reviewer"),children:I.map(M=>M?(0,_.jsx)(x.Detail.Metadata.TagList.Item,{...M},M.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,_.jsx)(x.Detail.Metadata.TagList,{title:Me(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(M=>{if(!M)return null;let L=J(M);return(0,_.jsx)(x.Detail.Metadata.TagList.Item,{...L},M.id)})}):null,r.labels&&r.labels.totalCount>0?(0,_.jsx)(x.Detail.Metadata.TagList,{title:Me(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(M=>M?(0,_.jsx)(x.Detail.Metadata.TagList.Item,{text:M.name,color:M.color},M.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,_.jsx)(x.Detail.Metadata.TagList,{title:Me(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(M=>M?(0,_.jsx)(x.Detail.Metadata.TagList.Item,{text:M.title},M.id):null)}):null,r.milestone?(0,_.jsx)(x.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,_.jsx)(qt,{pullRequest:r,viewer:n,mutateList:a,mutateDetail:l})})}var ja=require("@raycast/utils");var ka=(0,ja.withAccessToken)(ma);var za=require("@raycast/utils");function Ga(){let{github:e}=B(),n=["user:@me",...pt()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,za.useCachedPromise)(async r=>{let l=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(l.map(s=>[s.id,s])).values()].sort((s,u)=>new Date(u.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var P=require("react/jsx-runtime"),Nt=e=>e?e.reduce((a,t)=>(t?.id&&t?.name&&a.push({id:t.id,name:t.name}),a),[]):[],Ha=(e,a,t)=>{if(!t||e.some(o=>o.name===t))return e;let r=a.find(o=>o.name===t);return r?[...e,r]:[...e,{id:`virtual-${t}`,name:t}]};function $a({draftValues:e}){let{push:a}=(0,g.useNavigation)(),{data:t}=Ga(),{github:n}=B(),[r,o]=(0,Ce.useState)(""),[l,s]=(0,Ce.useState)(""),{handleSubmit:u,itemProps:p,values:c,setValue:I,reset:M,focus:L}=(0,ue.useForm)({async onSubmit(d){let T=await(0,g.showToast)({style:g.Toast.Style.Animated,title:"Creating pull request"});try{let fe=(await n.createPullRequest({repositoryId:d.repository,from:d.from,into:d.into,title:d.title,body:d.description,isDraft:d.draft}))?.createPullRequest?.pullRequest?.id;if(fe){let Qa=await n.initPullRequest({pullRequestId:fe,reviewersIds:d.reviewers,assigneeIds:d.assignees,labelsIds:d.labels,milestoneId:d.milestone||null});await Promise.all(d.projects.map(mt=>n.addPullRequestToProject({pullRequestId:fe,projectId:mt})));let Mt=Qa?.updatePullRequest?.pullRequest;if(T.style=g.Toast.Style.Success,T.title="Created pull request",d.autoMerge)try{await n.enablePullRequestAutoMerge({nodeId:fe,mergeMethod:d.autoMergeMethod||R[0]})}catch(mt){T.style=g.Toast.Style.Success,T.title="Created pull request, but auto-merge failed",T.message=w(mt)}Mt&&(T.primaryAction={title:"Open Pull Request",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:()=>a((0,P.jsx)(Vt,{initialPullRequest:Mt}))},T.secondaryAction={title:"Copy URL",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>g.Clipboard.copy(Mt.permalink)})}M({title:"",from:"",into:"",draft:!1,autoMerge:!1,autoMergeMethod:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:""}),L("repository")}catch(Ie){T.style=g.Toast.Style.Failure,T.title="Failed creating pull request",T.message=w(Ie)}},initialValues:{repository:e?.repository??"",from:e?.from??"",into:e?.into??"",draft:e?.draft??!1,autoMerge:e?.autoMerge??!1,autoMergeMethod:e?.autoMergeMethod??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??""},validation:{repository:ue.FormValidation.Required,from:ue.FormValidation.Required,into:ue.FormValidation.Required,title:ue.FormValidation.Required}}),{data:y,isLoading:q}=(0,ue.useCachedPromise)(d=>{let T=t?.find(Ie=>Ie.id===d);return T?n.dataForRepository({owner:T.owner.login,name:T.name}):Promise.resolve(null)},[c.repository],{execute:!!c.repository}),A=y?.repository?.autoMergeAllowed??!1,R=[y?.repository?.mergeCommitAllowed&&"MERGE",y?.repository?.squashMergeAllowed&&"SQUASH",y?.repository?.rebaseMergeAllowed&&"REBASE"].filter(Boolean),v=y?.repository?.defaultBranchRef,F=v?.name??"",m=y?.repository?.collaborators?.nodes,V=m?.filter(d=>!d?.isViewer),U=y?.repository?.labels?.nodes,ee=y?.repository?.projectsV2?.nodes,me=y?.repository?.milestones?.nodes,ze=(d,T)=>{let Ie=t?.find(fe=>fe.id===d);return Ie?n.searchRepositoryBranches({owner:Ie.owner.login,name:Ie.name,query:T.trim()}):Promise.resolve(null)},{data:bt,isLoading:Ge}=(0,ue.useCachedPromise)(ze,[c.repository,r],{execute:!!c.repository&&r.trim().length>0}),{data:It,isLoading:He}=(0,ue.useCachedPromise)(ze,[c.repository,l],{execute:!!c.repository&&l.trim().length>0}),$e=Nt(y?.repository?.refs?.nodes),gt=Nt(bt?.repository?.refs?.nodes??y?.repository?.refs?.nodes),E=Ha(gt,$e,c.from),W=Nt(It?.repository?.refs?.nodes??y?.repository?.refs?.nodes),te=Ha(W.filter(d=>d.name!==c.from),$e,c.into);return(0,Ce.useEffect)(()=>{let d=y?.repository?.pullRequestTemplates?.[0];d&&d.body&&!c.description&&I("description",d.body),v&&I("into",v.name)},[y]),(0,Ce.useEffect)(()=>{c.from&&c.into&&c.from===c.into&&(F&&F!==c.from?I("into",F):I("into",""))},[c.from,c.into,F]),(0,Ce.useEffect)(()=>{I("from",""),I("into",""),I("description",""),I("reviewers",[]),I("assignees",[]),I("labels",[]),I("projects",[]),I("milestone","")},[c.repository]),(0,P.jsxs)(g.Form,{actions:(0,P.jsx)(g.ActionPanel,{children:(0,P.jsx)(g.Action.SubmitForm,{onSubmit:u,title:"Create Pull Request"})}),enableDrafts:!0,isLoading:q,children:[(0,P.jsx)(g.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:t?.map(d=>(0,P.jsx)(g.Form.Dropdown.Item,{title:d.nameWithOwner,value:d.id,icon:{source:d.owner.avatarUrl,mask:g.Image.Mask.Circle}},d.id))}),(0,P.jsx)(g.Form.Dropdown,{...p.from,title:"From",isLoading:Ge,throttle:!0,onSearchTextChange:o,children:E?E.map(d=>d?(0,P.jsx)(g.Form.Dropdown.Item,{title:d.name,value:d.name},d?.id):null):null}),(0,P.jsx)(g.Form.Dropdown,{...p.into,title:"Into",storeValue:!0,isLoading:He,throttle:!0,onSearchTextChange:s,children:te?te.map(d=>d?(0,P.jsx)(g.Form.Dropdown.Item,{title:d.name,value:d.name},d?.id):null):null}),(0,P.jsx)(g.Form.Checkbox,{...p.draft,label:"As draft"}),A&&(0,P.jsx)(g.Form.Checkbox,{...p.autoMerge,label:"Enable auto-merge"}),A&&c.autoMerge&&R.length>1&&(0,P.jsx)(g.Form.Dropdown,{...p.autoMergeMethod,title:"Auto-merge Method",children:R.map(d=>(0,P.jsx)(g.Form.Dropdown.Item,{title:ut(d),value:d},d))}),(0,P.jsx)(g.Form.Separator,{}),(0,P.jsx)(g.Form.TextField,{...p.title,title:"Title",placeholder:"Pull request title"}),(0,P.jsx)(g.Form.TextArea,{...p.description,placeholder:"Pull request description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,P.jsx)(g.Form.TagPicker,{...p.reviewers,title:"Reviewers",children:V?.map(d=>{if(!d)return null;let T=J(d);return(0,P.jsx)(g.Form.TagPicker.Item,{icon:T.icon,title:T.text,value:d.id},d.id)})}),(0,P.jsx)(g.Form.TagPicker,{...p.assignees,title:"Assignees",children:m?.map(d=>{if(!d)return null;let T=J(d);return(0,P.jsx)(g.Form.TagPicker.Item,{icon:T.icon,title:T.text,value:d.id},d.id)})}),(0,P.jsx)(g.Form.TagPicker,{...p.labels,title:"Labels",children:U?.map(d=>d?(0,P.jsx)(g.Form.TagPicker.Item,{title:d.name,value:d.id,icon:{source:g.Icon.Dot,tintColor:d.color}},d.id):null)}),(0,P.jsx)(g.Form.TagPicker,{...p.projects,title:"Projects",children:ee?.map(d=>d?(0,P.jsx)(g.Form.TagPicker.Item,{title:d.title,value:d.id},d.id):null)}),(0,P.jsxs)(g.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,P.jsx)(g.Form.Dropdown.Item,{value:"",title:"None"}),me?.map(d=>d?(0,P.jsx)(g.Form.Dropdown.Item,{title:d.title,value:d.id},d.id):null)]})]})}var Ln=ka($a);0&&(module.exports={PullRequestForm});
