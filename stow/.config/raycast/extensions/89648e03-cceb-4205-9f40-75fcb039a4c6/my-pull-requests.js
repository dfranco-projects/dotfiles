"use strict";var Pr=Object.create;var yt=Object.defineProperty;var Er=Object.getOwnPropertyDescriptor;var Cr=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,Dr=Object.prototype.hasOwnProperty;var Nt=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var Ve=(e,a)=>{for(var t in a)yt(e,t,{get:a[t],enumerable:!0})},ct=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Cr(a))!Dr.call(e,r)&&r!==t&&yt(e,r,{get:()=>a[r],enumerable:!(n=Er(a,r))||n.enumerable});return e},Q=(e,a,t)=>(ct(e,a,"default"),t&&ct(t,a,"default")),oe=(e,a,t)=>(t=e!=null?Pr(fr(e)):{},ct(a||!e||!e.__esModule?yt(t,"default",{value:e,enumerable:!0}):t,e)),xr=e=>ct(yt({},"__esModule",{value:!0}),e);var W={};Ve(W,{default:()=>ua.default});var ua,bt=Nt(()=>{Q(W,require("formdata-polyfill/esm.min.js"));ua=oe(require("formdata-polyfill/esm.min.js"))});var J={};Ve(J,{default:()=>ya.default});var ya,jt=Nt(()=>{Q(J,require("fetch-blob/from.js"));ya=oe(require("fetch-blob/from.js"))});var Sa={};Ve(Sa,{toFormData:()=>Br});function wr(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Br(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new kt(t[1]||t[2]),r,o,l,s,u,p,c=[],y=new W.FormData,g=R=>{l+=m.decode(R,{stream:!0})},f=R=>{c.push(R)},d=()=>{let R=new J.File(c,p,{type:u});y.append(s,R)},_=()=>{y.append(s,l)},m=new TextDecoder("utf-8");m.decode(),n.onPartBegin=function(){n.onPartData=g,n.onPartEnd=_,r="",o="",l="",s="",u="",p=null,c.length=0},n.onHeaderField=function(R){r+=m.decode(R,{stream:!0})},n.onHeaderValue=function(R){o+=m.decode(R,{stream:!0})},n.onHeaderEnd=function(){if(o+=m.decode(),r=r.toLowerCase(),r==="content-disposition"){let R=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);R&&(s=R[2]||R[3]||""),p=wr(o),p&&(n.onPartData=f,n.onPartEnd=d)}else r==="content-type"&&(u=o);o="",r=""};for await(let R of e)n.write(R);return n.end(),y}var Se,U,da,xe,gt,Mt,Ur,Ze,hr,_r,vr,Tr,ve,kt,ba=Nt(()=>{jt();bt();Se=0,U={START_BOUNDARY:Se++,HEADER_FIELD_START:Se++,HEADER_FIELD:Se++,HEADER_VALUE_START:Se++,HEADER_VALUE:Se++,HEADER_VALUE_ALMOST_DONE:Se++,HEADERS_ALMOST_DONE:Se++,PART_DATA_START:Se++,PART_DATA:Se++,END:Se++},da=1,xe={PART_BOUNDARY:da,LAST_BOUNDARY:da*=2},gt=10,Mt=13,Ur=32,Ze=45,hr=58,_r=97,vr=122,Tr=e=>e|32,ve=()=>{},kt=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=ve,this.onHeaderField=ve,this.onHeadersEnd=ve,this.onHeaderValue=ve,this.onPartBegin=ve,this.onPartData=ve,this.onPartEnd=ve,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=U.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:s,index:u,state:p,flags:c}=this,y=this.boundary.length,g=y-1,f=a.length,d,_,m=A=>{this[A+"Mark"]=t},R=A=>{delete this[A+"Mark"]},v=(A,L,D,H)=>{(L===void 0||L!==D)&&this[A](H&&H.subarray(L,D))},F=(A,L)=>{let D=A+"Mark";D in this&&(L?(v(A,this[D],t,a),delete this[D]):(v(A,this[D],a.length,a),this[D]=0))};for(t=0;t<n;t++)switch(d=a[t],p){case U.START_BOUNDARY:if(u===l.length-2){if(d===Ze)c|=xe.LAST_BOUNDARY;else if(d!==Mt)return;u++;break}else if(u-1===l.length-2){if(c&xe.LAST_BOUNDARY&&d===Ze)p=U.END,c=0;else if(!(c&xe.LAST_BOUNDARY)&&d===gt)u=0,v("onPartBegin"),p=U.HEADER_FIELD_START;else return;break}d!==l[u+2]&&(u=-2),d===l[u+2]&&u++;break;case U.HEADER_FIELD_START:p=U.HEADER_FIELD,m("onHeaderField"),u=0;case U.HEADER_FIELD:if(d===Mt){R("onHeaderField"),p=U.HEADERS_ALMOST_DONE;break}if(u++,d===Ze)break;if(d===hr){if(u===1)return;F("onHeaderField",!0),p=U.HEADER_VALUE_START;break}if(_=Tr(d),_<_r||_>vr)return;break;case U.HEADER_VALUE_START:if(d===Ur)break;m("onHeaderValue"),p=U.HEADER_VALUE;case U.HEADER_VALUE:d===Mt&&(F("onHeaderValue",!0),v("onHeaderEnd"),p=U.HEADER_VALUE_ALMOST_DONE);break;case U.HEADER_VALUE_ALMOST_DONE:if(d!==gt)return;p=U.HEADER_FIELD_START;break;case U.HEADERS_ALMOST_DONE:if(d!==gt)return;v("onHeadersEnd"),p=U.PART_DATA_START;break;case U.PART_DATA_START:p=U.PART_DATA,m("onPartData");case U.PART_DATA:if(r=u,u===0){for(t+=g;t<f&&!(a[t]in s);)t+=y;t-=g,d=a[t]}if(u<l.length)l[u]===d?(u===0&&F("onPartData",!0),u++):u=0;else if(u===l.length)u++,d===Mt?c|=xe.PART_BOUNDARY:d===Ze?c|=xe.LAST_BOUNDARY:u=0;else if(u-1===l.length)if(c&xe.PART_BOUNDARY){if(u=0,d===gt){c&=~xe.PART_BOUNDARY,v("onPartEnd"),v("onPartBegin"),p=U.HEADER_FIELD_START;break}}else c&xe.LAST_BOUNDARY&&d===Ze?(v("onPartEnd"),p=U.END,c=0):u=0;if(u>0)o[u-1]=d;else if(r>0){let A=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);v("onPartData",0,r,A),r=0,m("onPartData"),t--}break;case U.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}F("onHeaderField"),F("onHeaderValue"),F("onPartData"),this.index=u,this.state=p,this.flags=c}end(){if(this.state===U.HEADER_FIELD_START&&this.index===0||this.state===U.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==U.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var yo={};Ve(yo,{default:()=>co});module.exports=xr(yo);var pt=require("@raycast/api"),mr=require("@raycast/utils"),Rr=require("react");var fe=require("@raycast/api");var M=require("@raycast/api"),ye=require("@raycast/utils"),Oe=require("react");var La=require("@octokit/rest"),qa=require("@raycast/api"),Va=require("@raycast/utils"),Na=require("graphql-request");var _a=oe(require("node:http"),1),va=oe(require("node:https"),1),we=oe(require("node:zlib"),1),ae=oe(require("node:stream"),1),et=require("node:buffer");var We={};Ve(We,{default:()=>dt.default});Q(We,require("data-uri-to-buffer"));var dt=oe(require("data-uri-to-buffer"));var ie=oe(require("node:stream"),1),Ce=require("node:util"),ee=require("node:buffer");var Ke={};Ve(Ke,{default:()=>St.default});Q(Ke,require("fetch-blob"));var St=oe(require("fetch-blob"));bt();var Ee=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var K=class extends Ee{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var It=Symbol.toStringTag,Ft=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[It]==="URLSearchParams",Ye=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[It]),pa=e=>typeof e=="object"&&(e[It]==="AbortSignal"||e[It]==="EventTarget"),la=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},ca=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var Or=(0,Ce.promisify)(ie.default.pipeline),Y=Symbol("Body internals"),be=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:Ft(a)?a=ee.Buffer.from(a.toString()):Ye(a)||ee.Buffer.isBuffer(a)||(Ce.types.isAnyArrayBuffer(a)?a=ee.Buffer.from(a):ArrayBuffer.isView(a)?a=ee.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof ie.default||(a instanceof W.FormData?(a=(0,W.formDataToBlob)(a),n=a.type.split("=")[1]):a=ee.Buffer.from(String(a))));let r=a;ee.Buffer.isBuffer(a)?r=ie.default.Readable.from(a):Ye(a)&&(r=ie.default.Readable.from(a.stream())),this[Y]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof ie.default&&a.on("error",o=>{let l=o instanceof Ee?o:new K(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Y].error=l})}get body(){return this[Y].stream}get bodyUsed(){return this[Y].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await zt(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new W.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:t}=await Promise.resolve().then(()=>(ba(),Sa));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[Y].body&&this[Y].body.type||"",t=await this.arrayBuffer();return new St.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await zt(this);return new TextDecoder().decode(a)}buffer(){return zt(this)}};be.prototype.buffer=(0,Ce.deprecate)(be.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(be.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ce.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function zt(e){if(e[Y].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Y].disturbed=!0,e[Y].error)throw e[Y].error;let{body:a}=e;if(a===null)return ee.Buffer.alloc(0);if(!(a instanceof ie.default))return ee.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new K(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof Ee?r:new K(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?ee.Buffer.from(t.join("")):ee.Buffer.concat(t,n)}catch(r){throw new K(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new K(`Premature close of server response while trying to fetch ${e.url}`)}var Ne=(e,a)=>{let t,n,{body:r}=e[Y];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ie.default&&typeof r.getBoundary!="function"&&(t=new ie.PassThrough({highWaterMark:a}),n=new ie.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[Y].stream=t,r=n),r},Lr=(0,Ce.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),mt=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Ft(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ye(e)?e.type||null:ee.Buffer.isBuffer(e)||Ce.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof W.FormData?`multipart/form-data; boundary=${a[Y].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Lr(e)}`:e instanceof ie.default?null:"text/plain;charset=UTF-8",Ia=e=>{let{body:a}=e[Y];return a===null?0:Ye(a)?a.size:ee.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},ga=async(e,{body:a})=>{a===null?e.end():await Or(a,e)};var Gt=require("node:util"),Xe=oe(require("node:http"),1),Rt=typeof Xe.default.validateHeaderName=="function"?Xe.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Ht=typeof Xe.default.validateHeaderValue=="function"?Xe.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},te=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!Gt.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||Gt.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(Rt(n),Ht(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,s)=>(Rt(l),Ht(l,String(s)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return l=>(Rt(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(te.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function Ma(e=[]){return new te(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return Rt(a),Ht(a,String(t)),!0}catch{return!1}}))}var qr=new Set([301,302,303,307,308]),At=e=>qr.has(e);var ce=Symbol("Response internals"),se=class e extends be{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new te(t.headers);if(a!==null&&!r.has("Content-Type")){let o=mt(a,this);o&&r.append("Content-Type",o)}this[ce]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[ce].type}get url(){return this[ce].url||""}get status(){return this[ce].status}get ok(){return this[ce].status>=200&&this[ce].status<300}get redirected(){return this[ce].counter>0}get statusText(){return this[ce].statusText}get headers(){return this[ce].headers}get highWaterMark(){return this[ce].highWaterMark}clone(){return new e(Ne(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!At(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[ce].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new te(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(se.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var xa=require("node:url"),Ua=require("node:util");var ma=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var Aa=require("node:net");function Ra(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var Pa=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ea="strict-origin-when-cross-origin";function Ca(e){if(!Pa.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Vr(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,Aa.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Fe(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Vr(e)}function fa(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Ra(r),l=Ra(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),t&&(l=t(l));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return Fe(o)&&!Fe(s)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Fe(o)&&!Fe(s)?"no-referrer":l;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:l;case"no-referrer-when-downgrade":return Fe(o)&&!Fe(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Da(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&Pa.has(n)&&(t=n);return t}var j=Symbol("Request internals"),Je=e=>typeof e=="object"&&typeof e[j]=="object",Nr=(0,Ua.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Te=class e extends be{constructor(a,t={}){let n;if(Je(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Je(t)&&"data"in t&&Nr(),(t.body!=null||Je(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:Je(a)&&a.body!==null?Ne(a):null;super(o,{size:t.size||a.size||0});let l=new te(t.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let p=mt(o,this);p&&l.set("Content-Type",p)}let s=Je(a)?a.signal:null;if("signal"in t&&(s=t.signal),s!=null&&!pa(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=t.referrer==null?a.referrer:t.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[j]={method:r,redirect:t.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:s,referrer:u},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[j].method}get url(){return(0,xa.format)(this[j].parsedURL)}get headers(){return this[j].headers}get redirect(){return this[j].redirect}get signal(){return this[j].signal}get referrer(){if(this[j].referrer==="no-referrer")return"";if(this[j].referrer==="client")return"about:client";if(this[j].referrer)return this[j].referrer.toString()}get referrerPolicy(){return this[j].referrerPolicy}set referrerPolicy(a){this[j].referrerPolicy=Ca(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Te.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ha=e=>{let{parsedURL:a}=e[j],t=new te(e[j].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Ia(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Ea),e.referrer&&e.referrer!=="no-referrer"?e[j].referrer=fa(e):e[j].referrer="no-referrer",e[j].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=ma(a),l={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var Pt=class extends Ee{constructor(a,t="aborted"){super(a,t)}};bt();jt();var Fr=new Set(["data:","http:","https:"]);async function Et(e,a){return new Promise((t,n)=>{let r=new Te(e,a),{parsedURL:o,options:l}=ha(r);if(!Fr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let d=(0,dt.default)(r.url),_=new se(d,{headers:{"Content-Type":d.typeFull}});t(_);return}let s=(o.protocol==="https:"?va.default:_a.default).request,{signal:u}=r,p=null,c=()=>{let d=new Pt("The operation was aborted.");n(d),r.body&&r.body instanceof ae.default.Readable&&r.body.destroy(d),!(!p||!p.body)&&p.body.emit("error",d)};if(u&&u.aborted){c();return}let y=()=>{c(),f()},g=s(o.toString(),l);u&&u.addEventListener("abort",y);let f=()=>{g.abort(),u&&u.removeEventListener("abort",y)};g.on("error",d=>{n(new K(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),f()}),jr(g,d=>{p&&p.body&&p.body.destroy(d)}),process.version<"v14"&&g.on("socket",d=>{let _;d.prependListener("end",()=>{_=d._eventsCount}),d.prependListener("close",m=>{if(p&&_<d._eventsCount&&!m){let R=new Error("Premature close");R.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",R)}})}),g.on("response",d=>{g.setTimeout(0);let _=Ma(d.rawHeaders);if(At(d.statusCode)){let A=_.get("Location"),L=null;try{L=A===null?null:new URL(A,r.url)}catch{if(r.redirect!=="manual"){n(new K(`uri requested responds with an invalid redirect URL: ${A}`,"invalid-redirect")),f();return}}switch(r.redirect){case"error":n(new K(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),f();return;case"manual":break;case"follow":{if(L===null)break;if(r.counter>=r.follow){n(new K(`maximum redirect reached at: ${r.url}`,"max-redirect")),f();return}let D={headers:new te(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Ne(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!la(r.url,L)||!ca(r.url,L))for(let de of["authorization","www-authenticate","cookie","cookie2"])D.headers.delete(de);if(d.statusCode!==303&&r.body&&a.body instanceof ae.default.Readable){n(new K("Cannot follow redirect with body being a readable stream","unsupported-redirect")),f();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(D.method="GET",D.body=void 0,D.headers.delete("content-length"));let H=Da(_);H&&(D.referrerPolicy=H),t(Et(new Te(L,D))),f();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}u&&d.once("end",()=>{u.removeEventListener("abort",y)});let m=(0,ae.pipeline)(d,new ae.PassThrough,A=>{A&&n(A)});process.version<"v12.10"&&d.on("aborted",y);let R={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:_,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},v=_.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||v===null||d.statusCode===204||d.statusCode===304){p=new se(m,R),t(p);return}let F={flush:we.default.Z_SYNC_FLUSH,finishFlush:we.default.Z_SYNC_FLUSH};if(v==="gzip"||v==="x-gzip"){m=(0,ae.pipeline)(m,we.default.createGunzip(F),A=>{A&&n(A)}),p=new se(m,R),t(p);return}if(v==="deflate"||v==="x-deflate"){let A=(0,ae.pipeline)(d,new ae.PassThrough,L=>{L&&n(L)});A.once("data",L=>{(L[0]&15)===8?m=(0,ae.pipeline)(m,we.default.createInflate(),D=>{D&&n(D)}):m=(0,ae.pipeline)(m,we.default.createInflateRaw(),D=>{D&&n(D)}),p=new se(m,R),t(p)}),A.once("end",()=>{p||(p=new se(m,R),t(p))});return}if(v==="br"){m=(0,ae.pipeline)(m,we.default.createBrotliDecompress(),A=>{A&&n(A)}),p=new se(m,R),t(p);return}p=new se(m,R),t(p)}),ga(g,r).catch(n)})}function jr(e,a){let t=et.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",l=>{let{headers:s}=l;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",l=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",a(p)}},u=p=>{r=et.Buffer.compare(p.slice(-5),t)===0,!r&&o&&(r=et.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&et.Buffer.compare(p.slice(-2),t.slice(3))===0),o=p};l.prependListener("close",s),l.on("data",u),e.on("close",()=>{l.removeListener("close",s),l.removeListener("data",u)})})}var b=oe(require("graphql-tag")),tt=b.default`
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
`,kr=b.default`
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
  ${tt}
`,Ie=b.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,at=b.default`
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
  ${Ie}
`,Ct=b.default`
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
  ${at}
  ${tt}
  ${Ie}
`,zr=b.default`
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
  ${at}
  ${tt}
  ${Ie}
`,Gr=b.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Ta=b.default`
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
  ${at}
  ${Gr}
`,wa=b.default`
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
  ${tt}
  ${at}
  ${Ie}
`,Hr=b.default`
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
  ${tt}
  ${at}
  ${Ie}
`,$r=b.default`
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
`,Ba=b.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,$t=b.default`
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
`,Qr=b.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Wr=b.default`
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
`,Kr=b.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Yr=b.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Zr=b.default`
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
  ${kr}
`,Xr=b.default`
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
`,Jr=b.default`
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
  ${Ie}
`,en=b.default`
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
`,tn=b.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${zr}
`,an=b.default`
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
  ${Ct}
`,rn=b.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ct}
`,nn=b.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,on=b.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,sn=b.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,un=b.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,pn=b.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ln=b.default`
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
  ${Ct}
`,cn=b.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,yn=b.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Ta}
`,dn=b.default`
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
  ${wa}
`,Sn=b.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Hr}
`,bn=b.default`
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
  ${Ie}
`,In=b.default`
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
`,gn=b.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${$r}
`,Mn=b.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,mn=b.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Rn=b.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,An=b.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Pn=b.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,En=b.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Cn=b.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,fn=b.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Dn=b.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,xn=b.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Un=b.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,hn=b.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,_n=b.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,vn=b.default`
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
`,Tn=b.default`
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
  ${wa}
`,wn=b.default`
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
  ${$t}
`,Bn=b.default`
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
  ${$t}
`,On=b.default`
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
`,Ln=b.default`
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
`,qn=b.default`
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
  ${Ba}
  ${Ie}
`,Vn=b.default`
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
  ${Ba}
`,Nn=b.default`
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
  ${Ct}
`,Fn=b.default`
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
  ${Qr}
`,jn=b.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,kn=b.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,zn=b.default`
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
  ${$t}
`,Gn=b.default`
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
  ${Ie}
  ${Ta}
`,Hn=b.default`
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
  ${Ie}
`,$n=b.default`
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
`,Qn=(e,a,t,n)=>e();function Oa(e,a=Qn){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:Wr,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:Kr,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:Yr,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:Zr,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:Xr,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:Jr,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:en,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:tn,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:an,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:rn,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:nn,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:on,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:sn,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:un,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:pn,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:ln,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:cn,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:yn,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:dn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:Sn,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:bn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:In,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:gn,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:Mn,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:mn,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:Rn,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:An,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:Pn,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:En,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Cn,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:fn,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Dn,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:xn,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:Un,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:hn,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:_n,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:vn,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:Tn,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:wn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:Bn,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:On,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:Ln,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:qn,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:Vn,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:Nn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:Fn,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:jn,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:kn,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:zn,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:Gn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:Hn,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:$n,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var Qt=null,Wt=null,Fa=null,Wn=(0,qa.getPreferenceValues)();function Kn({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Fa=e,Qt=Oa(new Na.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),Wt=new La.Octokit({auth:e,request:{fetch:Et}})}var ja=Va.OAuthService.github({personalAccessToken:Wn.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Kn});function q(){if(!Qt||!Wt)throw new Error("GitHub clients not initialized");return{github:Qt,octokit:Wt,token:Fa}}var h=require("@raycast/api"),pr=require("@raycast/utils"),lr=require("date-fns");var P=require("@raycast/api"),za=require("lodash");function ft(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}var rt=require("@raycast/api");function re(e){return e?{icon:{source:e.avatarUrl??rt.Icon.Person,mask:rt.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:rt.Icon.Person,text:"Unknown"}}function Dt(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let a=e;throw new Error(`Unknown merge method: ${a}`)}}}function nt(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:P.Color.Purple},text:"Merged",color:P.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:P.Color.Red},text:"Closed",color:P.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:P.Color.SecondaryText},text:"Draft",color:P.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:P.Color.Orange},text:"In Merge Queue",color:P.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:P.Color.Green},text:"Open",color:P.Color.Green}}function xt(e){return re(e.author)}function Ga(e){let a=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let l;"githubUsername"in r&&(l=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...re({name:o,login:l,avatarUrl:s})}}}),t=(0,za.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...re(n?.author)})),"id");return[...a??[],...t??[]]}function Ha(e){let a=e.comments.totalCount,t=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return a+t+n}function Ut(e){let a=ft(e);return a?{icon:P.Icon[a.icon],tooltip:`Checks: ${a.text}`}:null}function $a(e){switch(e){case"added":return{icon:{source:P.Icon.PlusCircle,tintColor:P.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:P.Icon.MinusCircle,tintColor:P.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:P.Icon.ArrowRight,tintColor:P.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:P.Icon.CopyClipboard,tintColor:P.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:P.Icon.Circle,tintColor:P.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Changed"};default:return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Modified"}}}var Kt=400;function Qa(e){let a=e.split(`
`);return a.length<=Kt?{patch:e,remainingLines:0}:{patch:a.slice(0,Kt).join(`
`),remainingLines:a.length-Kt}}function Wa(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:P.Icon.Eye,tintColor:P.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:P.Icon.Pencil,tintColor:P.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:P.Icon.CheckCircle,tintColor:P.Color.Green},tooltip:"Approved"};default:return null}}var Ka=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Ya="sort:updated-desc";function ge(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var Za=require("@raycast/utils");function je(){let{github:e}=q(),{data:a}=(0,Za.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var i=require("@raycast/api"),Ge=require("@raycast/utils"),ze=require("react");function B(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var V=require("@raycast/api"),ht=require("@raycast/utils");var Me=require("react/jsx-runtime");function Yt({pullRequest:e,mutate:a}){let{github:t}=q(),{pop:n}=(0,V.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,ht.useForm)({async onSubmit(l){try{await(0,V.showToast)({style:V.Toast.Style.Animated,title:"Adding Review"}),await t.addPullRequestReview({nodeId:e.id,body:l.comment,event:l.event}),await a(),n(),await(0,V.showToast)({style:V.Toast.Style.Success,title:"Review added"})}catch(s){await(0,V.showToast)({style:V.Toast.Style.Failure,title:"Failed to add review",message:B(s)})}},validation:{comment:ht.FormValidation.Required}});return(0,Me.jsxs)(V.Form,{actions:(0,Me.jsx)(V.ActionPanel,{children:(0,Me.jsx)(V.Action.SubmitForm,{title:"Submit",icon:V.Icon.Plus,onSubmit:r})}),children:[(0,Me.jsx)(V.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,Me.jsxs)(V.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,Me.jsx)(V.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,Me.jsx)(V.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,Me.jsx)(V.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var vt=require("node:child_process"),ar=require("node:fs"),rr=oe(require("node:path")),Zt=require("node:util"),x=require("@raycast/api"),ke=require("@raycast/utils");var _t=require("node:child_process");var Ja=require("node:util"),ue=require("@raycast/api"),Yn=require("@raycast/utils");var Fi=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:ue.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:ue.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:ue.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:ue.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:ue.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:ue.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:ue.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:ue.Color.PrimaryText}}];var Zn=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Xn=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Jn=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],ji=Zn[0].value,ki=Xn[0].value,zi=Jn[0].value;var er=(e,a,t)=>{let n=t?.gitFlags??[],r=t?.targetDir??"",o=["clone",...n,eo(e,a)];return r&&o.push(r),o};var Gi=(0,Ja.promisify)(_t.execFile);var ot="\x1B",Xa="\x07",Hi=new RegExp(`${ot}][^${Xa}${ot}]*(?:${Xa}|${ot}\\\\)`,"g"),$i=new RegExp(`${ot}\\[[0-9;?]*[A-Za-z]`,"g"),Qi=new RegExp(`${ot}\\([0-9A-Za-z]`,"g");var eo=(e,a)=>a==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;function tr(e,a,t){if(t)return`repo:${t}`;let n=a.filter(Boolean);return e==="all"?"":e==="exclude"?n.map(r=>`-repo:${r}`).join(" "):n.map(r=>`repo:${r}`).join(" ")}var Be=require("react/jsx-runtime");function Xt({pullRequest:e}){let{repositoryCloneProtocol:a}=(0,x.getPreferenceValues)(),{itemProps:t,handleSubmit:n}=(0,ke.useForm)({async onSubmit(r){let o=e.repository.name,l=rr.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,x.showToast)({style:x.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let u=(0,Zt.promisify)(vt.exec),p=(0,Zt.promisify)(vt.execFile);try{if((0,ar.existsSync)(l)){await(0,x.showToast)({title:`Switching to branch ${s}`,message:`in ${l}`,style:x.Toast.Style.Animated});let{stdout:c}=await u("git remote",{cwd:l}),y=c.trim().split(`
`)[0]||"origin";await u(`git fetch ${y} ${s}`,{cwd:l}),await u(`git checkout ${s}`,{cwd:l}),await u(`git reset --hard ${y}/${s}`,{cwd:l}),await(0,x.showToast)({style:x.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,x.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${l}`,style:x.Toast.Style.Animated}),await p("git",er(e.repository.nameWithOwner,a,{gitFlags:["-b",s],targetDir:l})),await(0,x.showToast)({style:x.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,x.open)(l),await(0,x.popToRoot)(),await(0,x.closeMainWindow)()}catch(c){if(c instanceof Error&&c.message.includes("Repository not found")){await(0,ke.showFailureToast)(c,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(c instanceof Error&&c.message.includes("already exists")){await(0,ke.showFailureToast)(c,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,ke.showFailureToast)(c,{title:"Failed checking out pull request"})}}});return(0,Be.jsxs)(x.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,Be.jsx)(x.ActionPanel,{children:(0,Be.jsx)(x.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,Be.jsx)(x.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,Be.jsx)(x.Form.FilePicker,{...t.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var z=require("@raycast/api"),nr=require("@raycast/utils"),Tt=require("date-fns");var pe=require("react/jsx-runtime");function Jt({pullRequest:e}){let{github:a}=q(),{data:t,isLoading:n,pagination:r}=(0,nr.useCachedPromise)(l=>async({cursor:s})=>{let p=(await a.pullRequestCommits({nodeId:l.id,numberOfItems:25,before:s})).node,c=p.commits.nodes?.filter(y=>y!=null)??[];return c.sort((y,g)=>{let f=y.commit.authoredDate,d=g.commit.authoredDate;return(0,Tt.compareDesc)(new Date(f),new Date(d))}),{data:c,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((t??[]).map(l=>[l.commit.id,l])).values()];return(0,pe.jsx)(z.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(l=>{let s=l.commit,u=new Date(s.authoredDate),p=[{date:u,tooltip:(0,Tt.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let y=Ut(s.statusCheckRollup.state);y&&p.unshift(y)}let c;if(s.author){let y={source:s.author.avatarUrl,mask:z.Image.Mask.Circle};c=s.author.name?{value:y,tooltip:s.author.name}:y}return(0,pe.jsx)(z.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:p,...c?{icon:c}:{},actions:(0,pe.jsxs)(z.ActionPanel,{children:[(0,pe.jsx)(z.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,pe.jsx)(z.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,pe.jsxs)(z.ActionPanel.Section,{children:[(0,pe.jsx)(z.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,pe.jsx)(z.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,pe.jsx)(z.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,pe.jsx)(z.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{modifiers:["ctrl","shift"],key:"."}})]})]})},s.id)})})}var ir=require("node:crypto"),N=require("@raycast/api"),wt=require("@raycast/utils");var G=require("react/jsx-runtime"),or=100,to=4;function ea({pullRequest:e}){let{octokit:a}=q(),{data:t,isLoading:n,pagination:r}=(0,wt.useCachedPromise)((s,u,p)=>async({page:c})=>{let{data:y}=await a.pulls.listFiles({owner:s,repo:u,pull_number:p,per_page:or,page:c+1});return{data:y,hasMore:y.length===or}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,wt.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=t??[],l="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,G.jsxs)(N.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,G.jsx)(N.List.Section,{title:ge(o.length,"file",{withNumber:!0}),subtitle:l,children:o.map(s=>{let u=$a(s.status);return(0,G.jsx)(N.List.Item,{title:s.filename,icon:{value:u.icon,tooltip:u.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:N.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:N.Color.Red}}],detail:(0,G.jsx)(N.List.Item.Detail,{markdown:ao(s)}),actions:(0,G.jsxs)(N.ActionPanel,{title:s.filename,children:[(0,G.jsx)(N.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${no(s.filename)}`}),(0,G.jsx)(N.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,G.jsxs)(N.ActionPanel.Section,{children:[(0,G.jsx)(N.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{modifiers:["cmd","shift"],key:"."}}),s.patch?(0,G.jsx)(N.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{modifiers:["cmd","shift"],key:","}}):null]})]})},s.sha+s.filename)})}),(0,G.jsx)(N.List.EmptyView,{icon:N.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,G.jsx)(N.ActionPanel,{children:(0,G.jsx)(N.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function ao(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:a,remainingLines:t}=Qa(e.patch),n=ro(a),r=`${n}diff
${a}
${n}`;return t===0?r:`${r}

_\u2026 truncated, ${ge(t,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function ro(e){let a=0;for(let[t]of e.matchAll(/`+/g))a=Math.max(a,t.length);return"`".repeat(Math.max(to,a+1))}function no(e){return(0,ir.createHash)("sha256").update(e).digest("hex")}var Z=require("@raycast/api"),me=require("react/jsx-runtime"),ur=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,me.jsxs)(Z.ActionPanel.Submenu,{title:"Sort by",icon:Z.Icon.ArrowUp,shortcut:Z.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,me.jsx)(sr,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,me.jsx)(Z.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,me.jsx)(sr,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,me.jsx)(me.Fragment,{}),sr=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,me.jsx)(Z.Action,{title:e,icon:t===a?{source:Z.Icon.CheckCircle,tintColor:Z.Color.Green}:Z.Icon.Circle,onAction:()=>n(a)});var I=require("react/jsx-runtime");function it({pullRequest:e,viewer:a,mutateList:t,mutateDetail:n,children:r,sortQuery:o,setSortQuery:l}){let{github:s}=q();async function u(){t&&await t(),n&&await n()}async function p(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed reopening pull request",message:B(E)})}}async function c(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:B(E)})}}async function y(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed closing pull request",message:B(E)})}}async function g(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:E}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(k){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed merging pull request",message:B(k)})}}async function f(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:B(E)})}}async function d(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:B(E)})}}async function _(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:E}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(k){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed enabling auto-merge",message:B(k)})}}async function m(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(E){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed disabling auto-merge",message:B(E)})}}async function R(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Assigning to me"});let k=e.assignees.nodes?.filter($=>!!$).map($=>$?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...k,E]}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Assigned to me"})}catch(k){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed assigning to me",message:B(k)})}}async function v(E){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Un-assigning from me"});let k=e.assignees.nodes?.filter($=>!!$).map($=>$?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:k?.filter($=>$!==E)}),await u(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Un-assigned from me"})}catch(k){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed un-assigning from me",message:B(k)})}}let F=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",A=!e.closed&&!e.merged,L=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===a?.login:!1,D=A&&e.isDraft&&L,H=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),de=A&&e.repository.autoMergeAllowed,qe=F||de,lt=re(a),T=e.assignees.nodes?.some(E=>E?.isViewer),{isOpenInBrowser:le}=(0,i.getPreferenceValues)(),X=(0,I.jsx)(i.Action.OpenInBrowser,{url:e.permalink}),[Ue,Re]=le?[X,r]:[r,X];return(0,I.jsxs)(i.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[Ue,Re,(0,I.jsx)(i.Action.Push,{icon:i.Icon.Document,title:"Add Review",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,I.jsx)(Yt,{pullRequest:e,mutate:u})}),(0,I.jsx)(i.Action.Push,{icon:{source:"commit.svg",tintColor:i.Color.PrimaryText},title:"See Commits",shortcut:i.Keyboard.Shortcut.Common.Copy,target:(0,I.jsx)(Jt,{pullRequest:e})}),(0,I.jsx)(i.Action.Push,{icon:i.Icon.CodeBlock,title:"View Diff",shortcut:i.Keyboard.Shortcut.Common.RemoveAll,target:(0,I.jsx)(ea,{pullRequest:e})}),(0,I.jsx)(i.Action.Push,{icon:i.Icon.Download,title:"Checkout Pull Request",shortcut:i.Keyboard.Shortcut.Common.OpenWith,target:(0,I.jsx)(Xt,{pullRequest:e})}),qe&&(0,I.jsxs)(i.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&F&&!e.isInMergeQueue&&(0,I.jsx)(i.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>f()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,I.jsx)(i.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>d()}),!e.isMergeQueueEnabled&&F?(0,I.jsxs)(I.Fragment,{children:[e.repository.mergeCommitAllowed?(0,I.jsx)(i.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>g("MERGE")}):null,e.repository.squashMergeAllowed?(0,I.jsx)(i.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["ctrl","shift"],key:"enter"},onAction:()=>g("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,I.jsx)(i.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["opt","shift"],key:"enter"},onAction:()=>g("REBASE")}):null]}):null,de&&!e.autoMergeRequest&&H.length===1&&(0,I.jsx)(i.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>_(H[0])}),de&&!e.autoMergeRequest&&H.length>1&&(0,I.jsx)(i.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},children:H.map(E=>(0,I.jsx)(i.Action,{title:Dt(E),onAction:()=>_(E)},E))}),A&&e.autoMergeRequest&&(0,I.jsx)(i.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:i.Color.PrimaryText},onAction:()=>m()})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(oo,{pullRequest:e,mutate:u}),a?(0,I.jsx)(i.Action,{title:T?"Unassign from Me":"Assign to Me",icon:lt.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>T?v(a.id):R(a.id)}):null,(0,I.jsx)(io,{pullRequest:e,mutate:u}),(0,I.jsx)(so,{pullRequest:e,mutate:u}),(0,I.jsx)(uo,{pullRequest:e,mutate:u}),(0,I.jsx)(po,{pullRequest:e,mutate:u})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[D?(0,I.jsx)(i.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"d"},onAction:()=>c()}):null,e.closed&&!e.merged?(0,I.jsx)(i.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:i.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,I.jsx)(i.Action,{title:"Close Pull Request",style:i.Action.Style.Destructive,icon:i.Icon.XMarkCircle,onAction:()=>y()})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(i.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),e.headRef?(0,I.jsx)(i.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null,(0,I.jsx)(i.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,I.jsx)(i.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,I.jsx)(i.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}})]}),(0,I.jsxs)(i.ActionPanel.Section,{children:[(0,I.jsx)(ur,{data:Ka,sortQuery:o,setSortQuery:l}),(0,I.jsx)(i.Action,{icon:i.Icon.ArrowClockwise,title:"Refresh",onAction:u,shortcut:i.Keyboard.Shortcut.Common.Refresh})]})]})}function oo({pullRequest:e,mutate:a}){let{github:t}=q(),[n,r]=(0,ze.useState)(!1),[o,l]=(0,ze.useState)(""),{data:s,isLoading:u}=(0,Ge.useCachedPromise)(async(c,y)=>t.repositoryCollaboratorsForPullRequests({owner:c.repository.owner.login,name:c.repository.name,pullRequestNumber:c.number,searchQuery:y}),[e,o],{execute:n});async function p({id:c,text:y}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Requesting review",message:y}),await t.requestReview({pullRequestId:e.id,collaboratorId:c}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Requested review",message:y})}catch(g){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed requesting review",message:B(g)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Request Review",icon:i.Icon.AddPerson,shortcut:{modifiers:["ctrl","shift"],key:"r"},onOpen:()=>r(!0),onSearchTextChange:l,isLoading:u,children:s?.repository?.collaborators?.nodes?.filter(c=>!c?.isViewer).map(c=>{if(!c)return null;let y=re(c);return(0,I.jsx)(i.Action,{title:y.text,icon:y.icon,onAction:()=>p({id:c.id,text:y.text})},c.id)})})}function io({pullRequest:e,mutate:a}){let{github:t}=q(),[n,r]=(0,ze.useState)(!1),{data:o,isLoading:l}=(0,Ge.useCachedPromise)(async u=>t.repositoryCollaboratorsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding assignee",message:p});let c=o?.repository?.pullRequest?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await t.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...c,u]}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added assignee",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding assignee",message:B(c)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Add Assignee",icon:i.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(u=>{if(!u)return null;let p=re(u);return(0,I.jsx)(i.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:u.id,text:p.text})},u.id)})})}function so({pullRequest:e,mutate:a}){let{github:t}=q(),[n,r]=(0,ze.useState)(!1),{data:o,isLoading:l}=(0,Ge.useCachedPromise)(async u=>t.repositoryProjectsForPullRequests({owner:u.repository.owner.login,name:u.repository.name,pullRequestNumber:u.number}),[e],{execute:n});async function s({id:u,text:p}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Adding to project",message:p}),await t.addPullRequestToProject({pullRequestId:e.id,projectId:u}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Added to project",message:p})}catch(c){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed adding to project",message:B(c)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(u=>u?(0,I.jsx)(i.Action,{title:u.title,onAction:()=>s({id:u.id,text:u.title})},u.id):null)})}function uo({pullRequest:e,mutate:a}){let{github:t}=q(),[n,r]=(0,ze.useState)(!1),{data:o,isLoading:l}=(0,Ge.useCachedPromise)(async p=>t.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Removing milestone"}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed removing milestone",message:B(p)})}}async function u({id:p,text:c}){try{await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await a(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed setting milestone",message:B(y)})}}return(0,I.jsx)(i.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:i.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,I.jsx)(i.Action,{title:p.title,onAction:()=>u({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function po({pullRequest:e}){let{github:a}=q(),{data:t,isLoading:n}=(0,Ge.useCachedPromise)(async r=>{let s=(await a.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(c=>c?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,I.jsx)(I.Fragment,{children:n?(0,I.jsx)(i.Action,{title:"Loading\u2026"}):t&&(0,I.jsx)(i.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{modifiers:["cmd","shift"],key:"v"},url:t,icon:{source:"vercel.svg",tintColor:i.Color.PrimaryText}})})}var O=require("react/jsx-runtime");function st({initialPullRequest:e,mutateList:a}){let{github:t}=q(),n=je(),{data:r,isLoading:o,mutate:l}=(0,pr.useCachedPromise)(async g=>(await t.pullRequestDetails({nodeId:g})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let u=nt(r),p=ft(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),c=xt(r),y=Ga(r);return(0,O.jsx)(h.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,O.jsxs)(h.Detail.Metadata,{children:[(0,O.jsx)(h.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,O.jsxs)(h.Detail.Metadata.TagList,{title:"Status",children:[(0,O.jsx)(h.Detail.Metadata.TagList.Item,{...u}),r.autoMergeRequest&&(0,O.jsx)(h.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:h.Color.Yellow})]}),p?(0,O.jsx)(h.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:h.Icon[p.icon]}):null,(0,O.jsx)(h.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,O.jsx)(h.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,O.jsx)(h.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,O.jsx)(h.Detail.Metadata.Label,{title:"Created",text:(0,lr.format)(new Date(r.createdAt),"dd MMM")}):null,(0,O.jsx)(h.Detail.Metadata.Label,{title:"Author",...c}),y.length>0?(0,O.jsx)(h.Detail.Metadata.TagList,{title:ge(y.length,"Reviewer"),children:y.map(g=>g?(0,O.jsx)(h.Detail.Metadata.TagList.Item,{...g},g.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,O.jsx)(h.Detail.Metadata.TagList,{title:ge(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(g=>{if(!g)return null;let f=re(g);return(0,O.jsx)(h.Detail.Metadata.TagList.Item,{...f},g.id)})}):null,r.labels&&r.labels.totalCount>0?(0,O.jsx)(h.Detail.Metadata.TagList,{title:ge(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(g=>g?(0,O.jsx)(h.Detail.Metadata.TagList.Item,{text:g.name,color:g.color},g.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,O.jsx)(h.Detail.Metadata.TagList,{title:ge(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(g=>g?(0,O.jsx)(h.Detail.Metadata.TagList.Item,{text:g.title},g.id):null)}):null,r.milestone?(0,O.jsx)(h.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,O.jsx)(it,{pullRequest:r,viewer:n,mutateList:a,mutateDetail:l})})}var cr=require("@raycast/utils");var Bt=(0,cr.withAccessToken)(ja);var yr=require("@raycast/utils");function Ot(){let{github:e}=q(),n=["user:@me",...je()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,yr.useCachedPromise)(async r=>{let l=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(l.map(s=>[s.id,s])).values()].sort((s,u)=>new Date(u.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var C=require("react/jsx-runtime"),ta=e=>e?e.reduce((a,t)=>(t?.id&&t?.name&&a.push({id:t.id,name:t.name}),a),[]):[],dr=(e,a,t)=>{if(!t||e.some(o=>o.name===t))return e;let r=a.find(o=>o.name===t);return r?[...e,r]:[...e,{id:`virtual-${t}`,name:t}]};function aa({draftValues:e}){let{push:a}=(0,M.useNavigation)(),{data:t}=Ot(),{github:n}=q(),[r,o]=(0,Oe.useState)(""),[l,s]=(0,Oe.useState)(""),{handleSubmit:u,itemProps:p,values:c,setValue:y,reset:g,focus:f}=(0,ye.useForm)({async onSubmit(S){let w=await(0,M.showToast)({style:M.Toast.Style.Animated,title:"Creating pull request"});try{let he=(await n.createPullRequest({repositoryId:S.repository,from:S.from,into:S.into,title:S.title,body:S.description,isDraft:S.draft}))?.createPullRequest?.pullRequest?.id;if(he){let _e=await n.initPullRequest({pullRequestId:he,reviewersIds:S.reviewers,assigneeIds:S.assignees,labelsIds:S.labels,milestoneId:S.milestone||null});await Promise.all(S.projects.map(Qe=>n.addPullRequestToProject({pullRequestId:he,projectId:Qe})));let Pe=_e?.updatePullRequest?.pullRequest;if(w.style=M.Toast.Style.Success,w.title="Created pull request",S.autoMerge)try{await n.enablePullRequestAutoMerge({nodeId:he,mergeMethod:S.autoMergeMethod||R[0]})}catch(Qe){w.style=M.Toast.Style.Success,w.title="Created pull request, but auto-merge failed",w.message=B(Qe)}Pe&&(w.primaryAction={title:"Open Pull Request",shortcut:{modifiers:["shift","cmd"],key:"o"},onAction:()=>a((0,C.jsx)(st,{initialPullRequest:Pe}))},w.secondaryAction={title:"Copy URL",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>M.Clipboard.copy(Pe.permalink)})}g({title:"",from:"",into:"",draft:!1,autoMerge:!1,autoMergeMethod:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:""}),f("repository")}catch(Ae){w.style=M.Toast.Style.Failure,w.title="Failed creating pull request",w.message=B(Ae)}},initialValues:{repository:e?.repository??"",from:e?.from??"",into:e?.into??"",draft:e?.draft??!1,autoMerge:e?.autoMerge??!1,autoMergeMethod:e?.autoMergeMethod??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??""},validation:{repository:ye.FormValidation.Required,from:ye.FormValidation.Required,into:ye.FormValidation.Required,title:ye.FormValidation.Required}}),{data:d,isLoading:_}=(0,ye.useCachedPromise)(S=>{let w=t?.find(Ae=>Ae.id===S);return w?n.dataForRepository({owner:w.owner.login,name:w.name}):Promise.resolve(null)},[c.repository],{execute:!!c.repository}),m=d?.repository?.autoMergeAllowed??!1,R=[d?.repository?.mergeCommitAllowed&&"MERGE",d?.repository?.squashMergeAllowed&&"SQUASH",d?.repository?.rebaseMergeAllowed&&"REBASE"].filter(Boolean),v=d?.repository?.defaultBranchRef,F=v?.name??"",A=d?.repository?.collaborators?.nodes,L=A?.filter(S=>!S?.isViewer),D=d?.repository?.labels?.nodes,H=d?.repository?.projectsV2?.nodes,de=d?.repository?.milestones?.nodes,qe=(S,w)=>{let Ae=t?.find(he=>he.id===S);return Ae?n.searchRepositoryBranches({owner:Ae.owner.login,name:Ae.name,query:w.trim()}):Promise.resolve(null)},{data:lt,isLoading:T}=(0,ye.useCachedPromise)(qe,[c.repository,r],{execute:!!c.repository&&r.trim().length>0}),{data:le,isLoading:X}=(0,ye.useCachedPromise)(qe,[c.repository,l],{execute:!!c.repository&&l.trim().length>0}),Ue=ta(d?.repository?.refs?.nodes),Re=ta(lt?.repository?.refs?.nodes??d?.repository?.refs?.nodes),E=dr(Re,Ue,c.from),k=ta(le?.repository?.refs?.nodes??d?.repository?.refs?.nodes),$=dr(k.filter(S=>S.name!==c.from),Ue,c.into);return(0,Oe.useEffect)(()=>{let S=d?.repository?.pullRequestTemplates?.[0];S&&S.body&&!c.description&&y("description",S.body),v&&y("into",v.name)},[d]),(0,Oe.useEffect)(()=>{c.from&&c.into&&c.from===c.into&&(F&&F!==c.from?y("into",F):y("into",""))},[c.from,c.into,F]),(0,Oe.useEffect)(()=>{y("from",""),y("into",""),y("description",""),y("reviewers",[]),y("assignees",[]),y("labels",[]),y("projects",[]),y("milestone","")},[c.repository]),(0,C.jsxs)(M.Form,{actions:(0,C.jsx)(M.ActionPanel,{children:(0,C.jsx)(M.Action.SubmitForm,{onSubmit:u,title:"Create Pull Request"})}),enableDrafts:!0,isLoading:_,children:[(0,C.jsx)(M.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:t?.map(S=>(0,C.jsx)(M.Form.Dropdown.Item,{title:S.nameWithOwner,value:S.id,icon:{source:S.owner.avatarUrl,mask:M.Image.Mask.Circle}},S.id))}),(0,C.jsx)(M.Form.Dropdown,{...p.from,title:"From",isLoading:T,throttle:!0,onSearchTextChange:o,children:E?E.map(S=>S?(0,C.jsx)(M.Form.Dropdown.Item,{title:S.name,value:S.name},S?.id):null):null}),(0,C.jsx)(M.Form.Dropdown,{...p.into,title:"Into",storeValue:!0,isLoading:X,throttle:!0,onSearchTextChange:s,children:$?$.map(S=>S?(0,C.jsx)(M.Form.Dropdown.Item,{title:S.name,value:S.name},S?.id):null):null}),(0,C.jsx)(M.Form.Checkbox,{...p.draft,label:"As draft"}),m&&(0,C.jsx)(M.Form.Checkbox,{...p.autoMerge,label:"Enable auto-merge"}),m&&c.autoMerge&&R.length>1&&(0,C.jsx)(M.Form.Dropdown,{...p.autoMergeMethod,title:"Auto-merge Method",children:R.map(S=>(0,C.jsx)(M.Form.Dropdown.Item,{title:Dt(S),value:S},S))}),(0,C.jsx)(M.Form.Separator,{}),(0,C.jsx)(M.Form.TextField,{...p.title,title:"Title",placeholder:"Pull request title"}),(0,C.jsx)(M.Form.TextArea,{...p.description,placeholder:"Pull request description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,C.jsx)(M.Form.TagPicker,{...p.reviewers,title:"Reviewers",children:L?.map(S=>{if(!S)return null;let w=re(S);return(0,C.jsx)(M.Form.TagPicker.Item,{icon:w.icon,title:w.text,value:S.id},S.id)})}),(0,C.jsx)(M.Form.TagPicker,{...p.assignees,title:"Assignees",children:A?.map(S=>{if(!S)return null;let w=re(S);return(0,C.jsx)(M.Form.TagPicker.Item,{icon:w.icon,title:w.text,value:S.id},S.id)})}),(0,C.jsx)(M.Form.TagPicker,{...p.labels,title:"Labels",children:D?.map(S=>S?(0,C.jsx)(M.Form.TagPicker.Item,{title:S.name,value:S.id,icon:{source:M.Icon.Dot,tintColor:S.color}},S.id):null)}),(0,C.jsx)(M.Form.TagPicker,{...p.projects,title:"Projects",children:H?.map(S=>S?(0,C.jsx)(M.Form.TagPicker.Item,{title:S.title,value:S.id},S.id):null)}),(0,C.jsxs)(M.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,C.jsx)(M.Form.Dropdown.Item,{value:"",title:"None"}),de?.map(S=>S?(0,C.jsx)(M.Form.Dropdown.Item,{title:S.title,value:S.id},S.id):null)]})]})}var Ys=Bt(aa);var He=require("react/jsx-runtime");function ra({error:e}){return e?(0,He.jsx)(fe.List.EmptyView,{icon:fe.Icon.Warning,title:"Failed to Load Pull Requests",description:B(e)}):(0,He.jsx)(fe.List.EmptyView,{title:"No pull requests found",actions:(0,He.jsx)(fe.ActionPanel,{children:(0,He.jsx)(fe.Action.Push,{title:"Create Pull Request",target:(0,He.jsx)(aa,{})})})})}var ne=require("@raycast/api"),na=require("date-fns"),Sr=require("react");var ut=require("react/jsx-runtime");function oa({pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let l=new Date(e.updatedAt),s=(0,Sr.useMemo)(()=>Ha(e),[e]),u=o?xt(e):null,p=nt(e),c=Wa(e.reviewDecision),y=[{text:(0,na.format)(l,"MMM dd"),tooltip:`Updated: ${(0,na.format)(l,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(y.unshift({text:{value:`${s}`,color:s>0?ne.Color.PrimaryText:ne.Color.SecondaryText},icon:ne.Icon.Bubble}),y.unshift(c??{icon:{source:ne.Icon.Circle,tintColor:ne.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&y.unshift({tag:{value:"Auto-merge",color:ne.Color.Yellow}}),e.commits.nodes){let f=e.commits.nodes[0]?.commit.statusCheckRollup?.state,d=f?Ut(f):null;d&&y.unshift(d)}u&&y.splice(y.length-1,0,{icon:u.icon,tooltip:`Author: ${u.text}`});let g=[`${e.number}`];return e.author?.login&&g.push(e.author.login),(0,ut.jsx)(ne.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:p.icon,tooltip:`Status: ${p.text}`},keywords:g,accessories:y,actions:(0,ut.jsx)(it,{pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,children:(0,ut.jsx)(ne.Action.Push,{title:"Show Details",icon:ne.Icon.Sidebar,target:(0,ut.jsx)(st,{initialPullRequest:e,viewer:a,mutateList:t})})})},e.id)}var De=require("@raycast/api");var $e=require("react/jsx-runtime");function ia({setSelectedRepository:e,withAllRepositories:a=!0}){let{data:t}=Ot();return(0,$e.jsxs)(De.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:e,children:[a?(0,$e.jsx)(De.List.Dropdown.Item,{value:"",title:"All Repositories",icon:De.Icon.List}):null,t&&t.length>0?(0,$e.jsx)(De.List.Dropdown.Section,{children:t.map(n=>(0,$e.jsx)(De.List.Dropdown.Item,{title:n.nameWithOwner,value:n.nameWithOwner,icon:{source:n.owner.avatarUrl,mask:De.Image.Mask.Circle}},n.id))}):null]})}var br=require("@raycast/api"),Ir=require("@raycast/utils"),Lt=require("date-fns"),gr=require("lodash");function Mr({repository:e,sortQuery:a,includeMentioned:t,includeAssigned:n,includeRecentlyClosed:r,includeReviewRequests:o,includeReviewed:l,includeDrafts:s,filterMode:u,repositoryList:p}){let{github:c}=q(),{data:y,...g}=(0,Ir.useCachedPromise)(async(T,le,X,Ue,Re,E,k,$,S,w)=>{let _e=`updated:>${(0,Lt.format)((0,Lt.subDays)(Date.now(),14),"yyyy-MM-dd")}`,Pe=$?"":"draft:false",Qe=tr(S,w,T),{includeTeamReviewRequests:Ar}=(0,br.getPreferenceValues)(),sa=Ar?"review-requested":"user-review-requested";return(await Promise.all([`is:pr author:@me archived:false is:open ${Pe}`,...Re?[`is:pr author:@me archived:false is:closed ${_e}`]:[],...X?[`is:pr assignee:@me archived:false is:open ${Pe}`]:[],...X&&Re?[`is:pr assignee:@me archived:false is:closed ${_e}`]:[],...Ue?[`is:pr mentions:@me archived:false is:open ${Pe}`]:[],...Ue&&Re?[`is:pr mentions:@me archived:false is:closed ${_e}`]:[],...E?[`is:pr ${sa}:@me archived:false is:open ${Pe}`]:[],...E&&Re?[`is:pr ${sa}:@me archived:false is:closed ${_e}`]:[],...k?[`is:pr reviewed-by:@me archived:false is:open ${Pe}`]:[],...k&&Re?[`is:pr reviewed-by:@me archived:false is:closed ${_e}`]:[]].map(qt=>c.searchPullRequests({query:`${qt} ${le} ${Qe}`,numberOfItems:20})))).map(qt=>qt.search.edges?.map(Vt=>Vt?.node).filter(Vt=>Vt!=null))},[e,a,n,t,r,o,l,s,u,p]),f,d,_,m,R,v,F,A,L,D;if(y){let T=0;f=y[T++],r&&(d=y[T++]),n&&(_=y[T++],r&&(m=y[T++])),t&&(R=y[T++],r&&(v=y[T++])),o&&(F=y[T++],r&&(A=y[T++])),l&&(L=y[T++],r&&(D=y[T++]))}let H=(0,gr.uniqBy)([...d||[],...m||[],...v||[],...A||[],...D||[]],"id"),de=[];function qe(T){let le=T?.filter(X=>!de.includes(X.id));return de.push(...le?.map(X=>X.id)??[]),le}return{data:[{type:"Open",pullRequests:f},{type:"Assigned",pullRequests:_},{type:"Mentioned",pullRequests:R},{type:"Review Requests",pullRequests:F},{type:"Reviewed",pullRequests:L},{type:"Recently Closed",pullRequests:H}].filter(T=>T.pullRequests&&T.pullRequests.length>0).map(T=>{let le=qe(T.pullRequests),X=ge(le?.length??0,"pull request",{withNumber:!0});return{...T,subtitle:X,pullRequests:le}}),...g}}var Le=require("react/jsx-runtime");function lo(){let e=je(),[a,t]=(0,Rr.useState)(null),[n,r]=(0,mr.useCachedState)("sort-query",Ya,{cacheNamespace:"github-my-pr"}),{includeAssigned:o,includeMentioned:l,includeReviewed:s,includeReviewRequests:u,includeRecentlyClosed:p,includeDrafts:c,repositoryFilterMode:y,repositoryList:g}=(0,pt.getPreferenceValues)(),{data:f,isLoading:d,mutate:_}=Mr({repository:a,sortQuery:n,includeAssigned:o,includeMentioned:l,includeRecentlyClosed:p,includeDrafts:c,includeReviewRequests:u,includeReviewed:s,filterMode:y,repositoryList:g?.split(",").map(m=>m.trim())||[]});return(0,Le.jsxs)(pt.List,{isLoading:d,searchBarPlaceholder:"Filter by title, number, or assignee",searchBarAccessory:(0,Le.jsx)(ia,{setSelectedRepository:t}),children:[f.map(m=>(0,Le.jsx)(pt.List.Section,{title:m.type,subtitle:m.subtitle,children:m.pullRequests?.map(R=>(0,Le.jsx)(oa,{showAuthor:m.type!=="Open",pullRequest:R,viewer:e,mutateList:_,sortQuery:n,setSortQuery:r},R.id))},m.type)),(0,Le.jsx)(ra,{})]})}var co=Bt(lo);
