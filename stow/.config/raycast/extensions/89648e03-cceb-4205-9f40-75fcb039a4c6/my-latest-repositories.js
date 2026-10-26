"use strict";var Ln=Object.create;var xt=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Vn=Object.getOwnPropertyNames;var qn=Object.getPrototypeOf,Fn=Object.prototype.hasOwnProperty;var ra=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var Xe=(e,a)=>{for(var t in a)xt(e,t,{get:a[t],enumerable:!0})},Dt=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Vn(a))!Fn.call(e,r)&&r!==t&&xt(e,r,{get:()=>a[r],enumerable:!(n=Nn(a,r))||n.enumerable});return e},J=(e,a,t)=>(Dt(e,a,"default"),t&&Dt(t,a,"default")),K=(e,a,t)=>(t=e!=null?Ln(qn(e)):{},Dt(a||!e||!e.__esModule?xt(t,"default",{value:e,enumerable:!0}):t,e)),kn=e=>Dt(xt({},"__esModule",{value:!0}),e);var ee={};Xe(ee,{default:()=>Va.default});var Va,vt=ra(()=>{J(ee,require("formdata-polyfill/esm.min.js"));Va=K(require("formdata-polyfill/esm.min.js"))});var oe={};Xe(oe,{default:()=>ja.default});var ja,oa=ra(()=>{J(oe,require("fetch-blob/from.js"));ja=K(require("fetch-blob/from.js"))});var Ga={};Xe(Ga,{toFormData:()=>Wn});function Qn(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",n=t.slice(t.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Wn(e,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let t=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!t)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new ia(t[1]||t[2]),r,o,l,s,i,u,c=[],y=new ee.FormData,I=b=>{l+=m.decode(b,{stream:!0})},M=b=>{c.push(b)},S=()=>{let b=new oe.File(c,u,{type:i});y.append(s,b)},f=()=>{y.append(s,l)},m=new TextDecoder("utf-8");m.decode(),n.onPartBegin=function(){n.onPartData=I,n.onPartEnd=f,r="",o="",l="",s="",i="",u=null,c.length=0},n.onHeaderField=function(b){r+=m.decode(b,{stream:!0})},n.onHeaderValue=function(b){o+=m.decode(b,{stream:!0})},n.onHeaderEnd=function(){if(o+=m.decode(),r=r.toLowerCase(),r==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),u=Qn(o),u&&(n.onPartData=M,n.onPartEnd=S)}else r==="content-type"&&(i=o);o="",r=""};for await(let b of e)n.write(b);return n.end(),y}var Pe,B,za,Ne,Tt,wt,jn,lt,zn,Gn,Hn,$n,je,ia,Ha=ra(()=>{oa();vt();Pe=0,B={START_BOUNDARY:Pe++,HEADER_FIELD_START:Pe++,HEADER_FIELD:Pe++,HEADER_VALUE_START:Pe++,HEADER_VALUE:Pe++,HEADER_VALUE_ALMOST_DONE:Pe++,HEADERS_ALMOST_DONE:Pe++,PART_DATA_START:Pe++,PART_DATA:Pe++,END:Pe++},za=1,Ne={PART_BOUNDARY:za,LAST_BOUNDARY:za*=2},Tt=10,wt=13,jn=32,lt=45,zn=58,Gn=97,Hn=122,$n=e=>e|32,je=()=>{},ia=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=je,this.onHeaderField=je,this.onHeadersEnd=je,this.onHeaderValue=je,this.onPartBegin=je,this.onPartData=je,this.onPartEnd=je,this.boundaryChars={},a=`\r
--`+a;let t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n),this.boundaryChars[t[n]]=!0;this.boundary=t,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=B.START_BOUNDARY}write(a){let t=0,n=a.length,r=this.index,{lookbehind:o,boundary:l,boundaryChars:s,index:i,state:u,flags:c}=this,y=this.boundary.length,I=y-1,M=a.length,S,f,m=E=>{this[E+"Mark"]=t},b=E=>{delete this[E+"Mark"]},A=(E,D,T,ce)=>{(D===void 0||D!==T)&&this[E](ce&&ce.subarray(D,T))},C=(E,D)=>{let T=E+"Mark";T in this&&(D?(A(E,this[T],t,a),delete this[T]):(A(E,this[T],a.length,a),this[T]=0))};for(t=0;t<n;t++)switch(S=a[t],u){case B.START_BOUNDARY:if(i===l.length-2){if(S===lt)c|=Ne.LAST_BOUNDARY;else if(S!==wt)return;i++;break}else if(i-1===l.length-2){if(c&Ne.LAST_BOUNDARY&&S===lt)u=B.END,c=0;else if(!(c&Ne.LAST_BOUNDARY)&&S===Tt)i=0,A("onPartBegin"),u=B.HEADER_FIELD_START;else return;break}S!==l[i+2]&&(i=-2),S===l[i+2]&&i++;break;case B.HEADER_FIELD_START:u=B.HEADER_FIELD,m("onHeaderField"),i=0;case B.HEADER_FIELD:if(S===wt){b("onHeaderField"),u=B.HEADERS_ALMOST_DONE;break}if(i++,S===lt)break;if(S===zn){if(i===1)return;C("onHeaderField",!0),u=B.HEADER_VALUE_START;break}if(f=$n(S),f<Gn||f>Hn)return;break;case B.HEADER_VALUE_START:if(S===jn)break;m("onHeaderValue"),u=B.HEADER_VALUE;case B.HEADER_VALUE:S===wt&&(C("onHeaderValue",!0),A("onHeaderEnd"),u=B.HEADER_VALUE_ALMOST_DONE);break;case B.HEADER_VALUE_ALMOST_DONE:if(S!==Tt)return;u=B.HEADER_FIELD_START;break;case B.HEADERS_ALMOST_DONE:if(S!==Tt)return;A("onHeadersEnd"),u=B.PART_DATA_START;break;case B.PART_DATA_START:u=B.PART_DATA,m("onPartData");case B.PART_DATA:if(r=i,i===0){for(t+=I;t<M&&!(a[t]in s);)t+=y;t-=I,S=a[t]}if(i<l.length)l[i]===S?(i===0&&C("onPartData",!0),i++):i=0;else if(i===l.length)i++,S===wt?c|=Ne.PART_BOUNDARY:S===lt?c|=Ne.LAST_BOUNDARY:i=0;else if(i-1===l.length)if(c&Ne.PART_BOUNDARY){if(i=0,S===Tt){c&=~Ne.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),u=B.HEADER_FIELD_START;break}}else c&Ne.LAST_BOUNDARY&&S===lt?(A("onPartEnd"),u=B.END,c=0):i=0;if(i>0)o[i-1]=S;else if(r>0){let E=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,r,E),r=0,m("onPartData"),t--}break;case B.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}C("onHeaderField"),C("onHeaderValue"),C("onPartData"),this.index=i,this.state=u,this.flags=c}end(){if(this.state===B.HEADER_FIELD_START&&this.index===0||this.state===B.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==B.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Ki={};Xe(Ki,{default:()=>Wi});module.exports=kn(Ki);var ta=require("@raycast/api"),aa=require("@raycast/utils"),ke=require("react");var yr=require("@octokit/rest"),dr=require("@raycast/api"),Sr=require("@raycast/utils"),br=require("graphql-request");var ir=K(require("node:http"),1),sr=K(require("node:https"),1),Ge=K(require("node:zlib"),1),ue=K(require("node:stream"),1),dt=require("node:buffer");var st={};Xe(st,{default:()=>ht.default});J(st,require("data-uri-to-buffer"));var ht=K(require("data-uri-to-buffer"));var ye=K(require("node:stream"),1),we=require("node:util"),ie=require("node:buffer");var ut={};Xe(ut,{default:()=>Ut.default});J(ut,require("fetch-blob"));var Ut=K(require("fetch-blob"));vt();var Te=class extends Error{constructor(a,t){super(a),Error.captureStackTrace(this,this.constructor),this.type=t}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var te=class extends Te{constructor(a,t,n){super(a,t),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var _t=Symbol.toStringTag,na=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[_t]==="URLSearchParams",pt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[_t]),qa=e=>typeof e=="object"&&(e[_t]==="AbortSignal"||e[_t]==="EventTarget"),Fa=(e,a)=>{let t=new URL(a).hostname,n=new URL(e).hostname;return t===n||t.endsWith(`.${n}`)},ka=(e,a)=>{let t=new URL(a).protocol,n=new URL(e).protocol;return t===n};var Kn=(0,we.promisify)(ye.default.pipeline),ae=Symbol("Body internals"),Ee=class{constructor(a,{size:t=0}={}){let n=null;a===null?a=null:na(a)?a=ie.Buffer.from(a.toString()):pt(a)||ie.Buffer.isBuffer(a)||(we.types.isAnyArrayBuffer(a)?a=ie.Buffer.from(a):ArrayBuffer.isView(a)?a=ie.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof ye.default||(a instanceof ee.FormData?(a=(0,ee.formDataToBlob)(a),n=a.type.split("=")[1]):a=ie.Buffer.from(String(a))));let r=a;ie.Buffer.isBuffer(a)?r=ye.default.Readable.from(a):pt(a)&&(r=ye.default.Readable.from(a.stream())),this[ae]={body:a,stream:r,boundary:n,disturbed:!1,error:null},this.size=t,a instanceof ye.default&&a.on("error",o=>{let l=o instanceof Te?o:new te(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[ae].error=l})}get body(){return this[ae].stream}get bodyUsed(){return this[ae].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:t,byteLength:n}=await sa(this);return a.slice(t,t+n)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let n=new ee.FormData,r=new URLSearchParams(await this.text());for(let[o,l]of r)n.append(o,l);return n}let{toFormData:t}=await Promise.resolve().then(()=>(Ha(),Ga));return t(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[ae].body&&this[ae].body.type||"",t=await this.arrayBuffer();return new Ut.default([t],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await sa(this);return new TextDecoder().decode(a)}buffer(){return sa(this)}};Ee.prototype.buffer=(0,we.deprecate)(Ee.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Ee.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,we.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function sa(e){if(e[ae].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[ae].disturbed=!0,e[ae].error)throw e[ae].error;let{body:a}=e;if(a===null)return ie.Buffer.alloc(0);if(!(a instanceof ye.default))return ie.Buffer.alloc(0);let t=[],n=0;try{for await(let r of a){if(e.size>0&&n+r.length>e.size){let o=new te(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw a.destroy(o),o}n+=r.length,t.push(r)}}catch(r){throw r instanceof Te?r:new te(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return t.every(r=>typeof r=="string")?ie.Buffer.from(t.join("")):ie.Buffer.concat(t,n)}catch(r){throw new te(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new te(`Premature close of server response while trying to fetch ${e.url}`)}var Ze=(e,a)=>{let t,n,{body:r}=e[ae];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ye.default&&typeof r.getBoundary!="function"&&(t=new ye.PassThrough({highWaterMark:a}),n=new ye.PassThrough({highWaterMark:a}),r.pipe(t),r.pipe(n),e[ae].stream=t,r=n),r},Yn=(0,we.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Bt=(e,a)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":na(e)?"application/x-www-form-urlencoded;charset=UTF-8":pt(e)?e.type||null:ie.Buffer.isBuffer(e)||we.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof ee.FormData?`multipart/form-data; boundary=${a[ae].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Yn(e)}`:e instanceof ye.default?null:"text/plain;charset=UTF-8",$a=e=>{let{body:a}=e[ae];return a===null?0:pt(a)?a.size:ie.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},Qa=async(e,{body:a})=>{a===null?e.end():await Kn(a,e)};var ua=require("node:util"),ct=K(require("node:http"),1),Ot=typeof ct.default.validateHeaderName=="function"?ct.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let a=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},pa=typeof ct.default.validateHeaderValue=="function"?ct.default.validateHeaderValue:(e,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let t=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_CHAR"}),t}},se=class e extends URLSearchParams{constructor(a){let t=[];if(a instanceof e){let n=a.raw();for(let[r,o]of Object.entries(n))t.push(...o.map(l=>[r,l]))}else if(a!=null)if(typeof a=="object"&&!ua.types.isBoxedPrimitive(a)){let n=a[Symbol.iterator];if(n==null)t.push(...Object.entries(a));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");t=[...a].map(r=>{if(typeof r!="object"||ua.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return t=t.length>0?t.map(([n,r])=>(Ot(n),pa(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(t),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(l,s)=>(Ot(l),pa(l,String(s)),URLSearchParams.prototype[r].call(n,String(l).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return l=>(Ot(l),URLSearchParams.prototype[r].call(n,String(l).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let t=this.getAll(a);if(t.length===0)return null;let n=t.join(", ");return/^content-encoding$/i.test(a)&&(n=n.toLowerCase()),n}forEach(a,t=void 0){for(let n of this.keys())Reflect.apply(a,t,[this.get(n),n,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,t)=>(a[t]=this.getAll(t),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,t)=>{let n=this.getAll(t);return t==="host"?a[t]=n[0]:a[t]=n.length>1?n:n[0],a},{})}};Object.defineProperties(se.prototype,["get","entries","forEach","values"].reduce((e,a)=>(e[a]={enumerable:!0},e),{}));function Wa(e=[]){return new se(e.reduce((a,t,n,r)=>(n%2===0&&a.push(r.slice(n,n+2)),a),[]).filter(([a,t])=>{try{return Ot(a),pa(a,String(t)),!0}catch{return!1}}))}var Xn=new Set([301,302,303,307,308]),Lt=e=>Xn.has(e);var me=Symbol("Response internals"),de=class e extends Ee{constructor(a=null,t={}){super(a,t);let n=t.status!=null?t.status:200,r=new se(t.headers);if(a!==null&&!r.has("Content-Type")){let o=Bt(a,this);o&&r.append("Content-Type",o)}this[me]={type:"default",url:t.url,status:n,statusText:t.statusText||"",headers:r,counter:t.counter,highWaterMark:t.highWaterMark}}get type(){return this[me].type}get url(){return this[me].url||""}get status(){return this[me].status}get ok(){return this[me].status>=200&&this[me].status<300}get redirected(){return this[me].counter>0}get statusText(){return this[me].statusText}get headers(){return this[me].headers}get highWaterMark(){return this[me].highWaterMark}clone(){return new e(Ze(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,t=302){if(!Lt(t))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(a).toString()},status:t})}static error(){let a=new e(null,{status:0,statusText:""});return a[me].type="error",a}static json(a=void 0,t={}){let n=JSON.stringify(a);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new se(t&&t.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...t,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(de.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var rr=require("node:url"),nr=require("node:util");var Ka=e=>{if(e.search)return e.search;let a=e.href.length-1,t=e.hash||(e.href[a]==="#"?"#":"");return e.href[a-t.length]==="?"?"?":""};var Xa=require("node:net");function Ya(e,a=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",a&&(e.pathname="",e.search=""),e)}var Za=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ja="strict-origin-when-cross-origin";function er(e){if(!Za.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Zn(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let a=e.host.replace(/(^\[)|(]$)/g,""),t=(0,Xa.isIP)(a);return t===4&&/^127\./.test(a)||t===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Je(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Zn(e)}function tr(e,{referrerURLCallback:a,referrerOriginCallback:t}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Ya(r),l=Ya(r,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),t&&(l=t(l));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return Je(o)&&!Je(s)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Je(o)&&!Je(s)?"no-referrer":l;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:l;case"no-referrer-when-downgrade":return Je(o)&&!Je(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function ar(e){let a=(e.get("referrer-policy")||"").split(/[,\s]+/),t="";for(let n of a)n&&Za.has(n)&&(t=n);return t}var j=Symbol("Request internals"),yt=e=>typeof e=="object"&&typeof e[j]=="object",Jn=(0,nr.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ze=class e extends Ee{constructor(a,t={}){let n;if(yt(a)?n=new URL(a.url):(n=new URL(a),a={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=t.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!yt(t)&&"data"in t&&Jn(),(t.body!=null||yt(a)&&a.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=t.body?t.body:yt(a)&&a.body!==null?Ze(a):null;super(o,{size:t.size||a.size||0});let l=new se(t.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let u=Bt(o,this);u&&l.set("Content-Type",u)}let s=yt(a)?a.signal:null;if("signal"in t&&(s=t.signal),s!=null&&!qa(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=t.referrer==null?a.referrer:t.referrer;if(i==="")i="no-referrer";else if(i){let u=new URL(i);i=/^about:(\/\/)?client$/.test(u)?"client":u}else i=void 0;this[j]={method:r,redirect:t.redirect||a.redirect||"follow",headers:l,parsedURL:n,signal:s,referrer:i},this.follow=t.follow===void 0?a.follow===void 0?20:a.follow:t.follow,this.compress=t.compress===void 0?a.compress===void 0?!0:a.compress:t.compress,this.counter=t.counter||a.counter||0,this.agent=t.agent||a.agent,this.highWaterMark=t.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=t.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=t.referrerPolicy||a.referrerPolicy||""}get method(){return this[j].method}get url(){return(0,rr.format)(this[j].parsedURL)}get headers(){return this[j].headers}get redirect(){return this[j].redirect}get signal(){return this[j].signal}get referrer(){if(this[j].referrer==="no-referrer")return"";if(this[j].referrer==="client")return"about:client";if(this[j].referrer)return this[j].referrer.toString()}get referrerPolicy(){return this[j].referrerPolicy}set referrerPolicy(a){this[j].referrerPolicy=er(a)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ze.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var or=e=>{let{parsedURL:a}=e[j],t=new se(e[j].headers);t.has("Accept")||t.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=$a(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&t.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Ja),e.referrer&&e.referrer!=="no-referrer"?e[j].referrer=tr(e):e[j].referrer="no-referrer",e[j].referrer instanceof URL&&t.set("Referer",e.referrer),t.has("User-Agent")||t.set("User-Agent","node-fetch"),e.compress&&!t.has("Accept-Encoding")&&t.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(a));let o=Ka(a),l={path:a.pathname+o,method:e.method,headers:t[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:a,options:l}};var Nt=class extends Te{constructor(a,t="aborted"){super(a,t)}};vt();oa();var eo=new Set(["data:","http:","https:"]);async function Vt(e,a){return new Promise((t,n)=>{let r=new ze(e,a),{parsedURL:o,options:l}=or(r);if(!eo.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let S=(0,ht.default)(r.url),f=new de(S,{headers:{"Content-Type":S.typeFull}});t(f);return}let s=(o.protocol==="https:"?sr.default:ir.default).request,{signal:i}=r,u=null,c=()=>{let S=new Nt("The operation was aborted.");n(S),r.body&&r.body instanceof ue.default.Readable&&r.body.destroy(S),!(!u||!u.body)&&u.body.emit("error",S)};if(i&&i.aborted){c();return}let y=()=>{c(),M()},I=s(o.toString(),l);i&&i.addEventListener("abort",y);let M=()=>{I.abort(),i&&i.removeEventListener("abort",y)};I.on("error",S=>{n(new te(`request to ${r.url} failed, reason: ${S.message}`,"system",S)),M()}),to(I,S=>{u&&u.body&&u.body.destroy(S)}),process.version<"v14"&&I.on("socket",S=>{let f;S.prependListener("end",()=>{f=S._eventsCount}),S.prependListener("close",m=>{if(u&&f<S._eventsCount&&!m){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",b)}})}),I.on("response",S=>{I.setTimeout(0);let f=Wa(S.rawHeaders);if(Lt(S.statusCode)){let E=f.get("Location"),D=null;try{D=E===null?null:new URL(E,r.url)}catch{if(r.redirect!=="manual"){n(new te(`uri requested responds with an invalid redirect URL: ${E}`,"invalid-redirect")),M();return}}switch(r.redirect){case"error":n(new te(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),M();return;case"manual":break;case"follow":{if(D===null)break;if(r.counter>=r.follow){n(new te(`maximum redirect reached at: ${r.url}`,"max-redirect")),M();return}let T={headers:new se(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Ze(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Fa(r.url,D)||!ka(r.url,D))for(let it of["authorization","www-authenticate","cookie","cookie2"])T.headers.delete(it);if(S.statusCode!==303&&r.body&&a.body instanceof ue.default.Readable){n(new te("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(S.statusCode===303||(S.statusCode===301||S.statusCode===302)&&r.method==="POST")&&(T.method="GET",T.body=void 0,T.headers.delete("content-length"));let ce=ar(f);ce&&(T.referrerPolicy=ce),t(Vt(new ze(D,T))),M();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&S.once("end",()=>{i.removeEventListener("abort",y)});let m=(0,ue.pipeline)(S,new ue.PassThrough,E=>{E&&n(E)});process.version<"v12.10"&&S.on("aborted",y);let b={url:r.url,status:S.statusCode,statusText:S.statusMessage,headers:f,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},A=f.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||A===null||S.statusCode===204||S.statusCode===304){u=new de(m,b),t(u);return}let C={flush:Ge.default.Z_SYNC_FLUSH,finishFlush:Ge.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){m=(0,ue.pipeline)(m,Ge.default.createGunzip(C),E=>{E&&n(E)}),u=new de(m,b),t(u);return}if(A==="deflate"||A==="x-deflate"){let E=(0,ue.pipeline)(S,new ue.PassThrough,D=>{D&&n(D)});E.once("data",D=>{(D[0]&15)===8?m=(0,ue.pipeline)(m,Ge.default.createInflate(),T=>{T&&n(T)}):m=(0,ue.pipeline)(m,Ge.default.createInflateRaw(),T=>{T&&n(T)}),u=new de(m,b),t(u)}),E.once("end",()=>{u||(u=new de(m,b),t(u))});return}if(A==="br"){m=(0,ue.pipeline)(m,Ge.default.createBrotliDecompress(),E=>{E&&n(E)}),u=new de(m,b),t(u);return}u=new de(m,b),t(u)}),Qa(I,r).catch(n)})}function to(e,a){let t=dt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",l=>{let{headers:s}=l;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",l=>{let s=()=>{if(n&&!r){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},i=u=>{r=dt.Buffer.compare(u.slice(-5),t)===0,!r&&o&&(r=dt.Buffer.compare(o.slice(-3),t.slice(0,3))===0&&dt.Buffer.compare(u.slice(-2),t.slice(3))===0),o=u};l.prependListener("close",s),l.on("data",i),e.on("close",()=>{l.removeListener("close",s),l.removeListener("data",i)})})}var R=K(require("graphql-tag")),St=R.default`
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
`,ao=R.default`
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
  ${St}
`,fe=R.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,bt=R.default`
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
  ${fe}
`,qt=R.default`
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
  ${bt}
  ${St}
  ${fe}
`,ro=R.default`
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
  ${bt}
  ${St}
  ${fe}
`,no=R.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,ur=R.default`
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
  ${bt}
  ${no}
`,pr=R.default`
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
  ${St}
  ${bt}
  ${fe}
`,oo=R.default`
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
  ${St}
  ${bt}
  ${fe}
`,io=R.default`
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
`,lr=R.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,la=R.default`
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
`,so=R.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,uo=R.default`
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
`,po=R.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,lo=R.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,co=R.default`
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
  ${ao}
`,yo=R.default`
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
`,So=R.default`
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
  ${fe}
`,bo=R.default`
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
`,Io=R.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ro}
`,go=R.default`
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
  ${qt}
`,Mo=R.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${qt}
`,mo=R.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ro=R.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ao=R.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Po=R.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Eo=R.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,fo=R.default`
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
  ${qt}
`,Co=R.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Do=R.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${ur}
`,xo=R.default`
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
  ${pr}
`,ho=R.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${oo}
`,Uo=R.default`
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
  ${fe}
`,vo=R.default`
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
`,_o=R.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${io}
`,To=R.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,wo=R.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Bo=R.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Oo=R.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Lo=R.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,No=R.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Vo=R.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,qo=R.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Fo=R.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ko=R.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,jo=R.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,zo=R.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Go=R.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ho=R.default`
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
`,$o=R.default`
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
  ${pr}
`,Qo=R.default`
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
  ${la}
`,Wo=R.default`
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
  ${la}
`,Ko=R.default`
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
`,Yo=R.default`
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
`,Xo=R.default`
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
  ${lr}
  ${fe}
`,Zo=R.default`
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
  ${lr}
`,Jo=R.default`
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
  ${qt}
`,ei=R.default`
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
  ${so}
`,ti=R.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ai=R.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ri=R.default`
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
  ${la}
`,ni=R.default`
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
  ${fe}
  ${ur}
`,oi=R.default`
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
  ${fe}
`,ii=R.default`
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
`,si=(e,a,t,n)=>e();function cr(e,a=si){return{createLinkedBranch(t,n,r){return a(o=>e.request({document:uo,variables:t,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",t)},createRef(t,n,r){return a(o=>e.request({document:po,variables:t,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",t)},deleteLinkedBranch(t,n,r){return a(o=>e.request({document:lo,variables:t,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",t)},searchDiscussions(t,n,r){return a(o=>e.request({document:co,variables:t,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",t)},getGitHubDiscussionNumber(t,n,r){return a(o=>e.request({document:yo,variables:t,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",t)},repositoryCollaboratorsForIssues(t,n,r){return a(o=>e.request({document:So,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",t)},repositoryProjectsForIssues(t,n,r){return a(o=>e.request({document:bo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",t)},issueDetails(t,n,r){return a(o=>e.request({document:Io,variables:t,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",t)},searchIssues(t,n,r){return a(o=>e.request({document:go,variables:t,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",t)},issueByNumber(t,n,r){return a(o=>e.request({document:Mo,variables:t,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",t)},closeIssue(t,n,r){return a(o=>e.request({document:mo,variables:t,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",t)},reopenIssue(t,n,r){return a(o=>e.request({document:Ro,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",t)},changeIssueAssignees(t,n,r){return a(o=>e.request({document:Ao,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",t)},changeIssueMilestone(t,n,r){return a(o=>e.request({document:Po,variables:t,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",t)},addIssueToProject(t,n,r){return a(o=>e.request({document:Eo,variables:t,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",t)},createIssue(t,n,r){return a(o=>e.request({document:fo,variables:t,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",t)},changeProjectStatus(t,n,r){return a(o=>e.request({document:Co,variables:t,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",t)},projectDetails(t,n,r){return a(o=>e.request({document:Do,variables:t,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",t)},searchPullRequests(t,n,r){return a(o=>e.request({document:xo,variables:t,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",t)},pullRequestDetails(t,n,r){return a(o=>e.request({document:ho,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",t)},repositoryCollaboratorsForPullRequests(t,n,r){return a(o=>e.request({document:Uo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",t)},repositoryProjectsForPullRequests(t,n,r){return a(o=>e.request({document:vo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",t)},pullRequestCommits(t,n,r){return a(o=>e.request({document:_o,variables:t,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",t)},closePullRequest(t,n,r){return a(o=>e.request({document:To,variables:t,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",t)},reopenPullRequest(t,n,r){return a(o=>e.request({document:wo,variables:t,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",t)},markPullRequestReadyForReview(t,n,r){return a(o=>e.request({document:Bo,variables:t,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",t)},addPullRequestReview(t,n,r){return a(o=>e.request({document:Oo,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",t)},changePullRequestAssignees(t,n,r){return a(o=>e.request({document:Lo,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",t)},changePullRequestMilestone(t,n,r){return a(o=>e.request({document:No,variables:t,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",t)},addPullRequestToProject(t,n,r){return a(o=>e.request({document:Vo,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",t)},requestReview(t,n,r){return a(o=>e.request({document:qo,variables:t,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",t)},mergePullRequest(t,n,r){return a(o=>e.request({document:Fo,variables:t,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",t)},addPullRequestToMergeQueue(t,n,r){return a(o=>e.request({document:ko,variables:t,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",t)},removePullRequestFromMergeQueue(t,n,r){return a(o=>e.request({document:jo,variables:t,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",t)},enablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:zo,variables:t,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",t)},disablePullRequestAutoMerge(t,n,r){return a(o=>e.request({document:Go,variables:t,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",t)},createPullRequest(t,n,r){return a(o=>e.request({document:Ho,variables:t,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",t)},initPullRequest(t,n,r){return a(o=>e.request({document:$o,variables:t,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",t)},searchRepositories(t,n,r){return a(o=>e.request({document:Qo,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",t)},myLatestRepositories(t,n,r){return a(o=>e.request({document:Wo,variables:t,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",t)},milestonesForRepository(t,n,r){return a(o=>e.request({document:Ko,variables:t,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",t)},commentsForPullRequest(t,n,r){return a(o=>e.request({document:Yo,variables:t,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",t)},dataForRepository(t,n,r){return a(o=>e.request({document:Xo,variables:t,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",t)},searchRepositoryBranches(t,n,r){return a(o=>e.request({document:Zo,variables:t,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",t)},repositoryIssues(t,n,r){return a(o=>e.request({document:Jo,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",t)},repositoryReleases(t,n,r){return a(o=>e.request({document:ei,variables:t,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",t)},addStar(t,n,r){return a(o=>e.request({document:ti,variables:t,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",t)},removeStar(t,n,r){return a(o=>e.request({document:ai,variables:t,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",t)},myStarredRepositories(t,n,r){return a(o=>e.request({document:ri,variables:t,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",t)},getViewer(t,n,r){return a(o=>e.request({document:ni,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewer","query",t)},getViewerStats(t,n,r){return a(o=>e.request({document:oi,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",t)},getViewerStatsDetails(t,n,r){return a(o=>e.request({document:ii,variables:t,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",t)}}}var ca=null,ya=null,Ir=null,ui=(0,dr.getPreferenceValues)();function pi({token:e,type:a}){let t=a==="personal"?`token ${e}`:`bearer ${e}`;Ir=e,ca=cr(new br.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:t}})),ya=new yr.Octokit({auth:e,request:{fetch:Vt}})}var gr=Sr.OAuthService.github({personalAccessToken:ui.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:pi});function x(){if(!ca||!ya)throw new Error("GitHub clients not initialized");return{github:ca,octokit:ya,token:Ir}}var Ve=require("@raycast/api"),li=K(require("react")),mr=require("react/jsx-runtime");function ci(e){let a=e.min||1,t=e.max||100,n=e.default||10,o=(0,Ve.getPreferenceValues)()[e.name]||"",l=Number(o);return isNaN(l)||l<a||l>t?n:l}function Mr(){return Math.min(ci({name:"numberOfResults",default:50}),25)}var Ke=require("@raycast/api"),Fe=require("date-fns");var It=require("@raycast/api");function F(e){return e?{icon:{source:e.avatarUrl??It.Icon.Person,mask:It.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:It.Icon.Person,text:"Unknown"}}var g=require("@raycast/api"),hn=require("@raycast/utils");function v(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var et=require("node:child_process"),Pr=require("node:fs"),Er=require("node:os"),fr=require("node:util"),z=require("@raycast/api"),Cr=require("@raycast/utils");function Rr(e,a){let t=(a??"").split(/\s+/).map(r=>/^(?:user|org):(.+)$/i.exec(r)?.[1]?.toLowerCase()).filter(r=>!!r);if(t.length===0)return!0;let n=e.split("/")[0]?.toLowerCase();return t.includes(n)}var Dr=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:z.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:z.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:z.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:z.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:z.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:z.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:z.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:z.Color.PrimaryText}}],yi=25;async function xr(e){let{application:a,baseClonePath:t,repositoryCloneProtocol:n}=(0,z.getPreferenceValues)(),r=a?.path.replaceAll(" ","\\ "),o=`${t}/${e.name}`,l=`open -a ${r} ${o}`,s=await(0,z.showToast)({title:`Opening ${e.name}`,message:`at ${o}`,style:z.Toast.Style.Animated});if(!(0,Pr.existsSync)(o.replace("~",(0,Er.homedir)())))try{(0,et.execFileSync)("git",Mt(e.nameWithOwner,n),{cwd:t})}catch(i){s.style=z.Toast.Style.Failure,s.title="Error while cloning the repository",s.message=v(i),console.error(i);return}try{(0,et.execSync)(l,{cwd:t})}catch(i){s.style=z.Toast.Style.Failure,s.title="Error while opening the repository",s.message=v(i),console.error(i);return}s.title="Code editor launched!",s.style=z.Toast.Style.Success}function hr(e,a){let[t,n]=(0,Cr.useCachedState)("history",[]);function r(i){let u=[i,...t?.filter(c=>c.id!==i.id)??[]].slice(0,yi);n(u)}function o(i){n(u=>(u??[]).map(c=>c.id===i.id?{...c,viewerHasStarred:i.viewerHasStarred,stargazerCount:i.stargazerCount}:c))}function l(i){n(u=>(u??[]).filter(c=>c.id!==i.id))}let s=t;return e&&(s=s.filter(i=>i.nameWithOwner.toLowerCase().includes(e.toLowerCase()))),a&&(s=s.filter(i=>Rr(i.nameWithOwner,a))),{data:s,visitRepository:r,updateRepository:o,removeRepository:l}}var di=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Sa=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Si=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],nu=di[0].value,Ur=Sa[0].value,ou=Si[0].value,vr=["https","ssh"],_r={https:"HTTPS",ssh:"SSH"},Tr=["git","gh"],wr={git:"Git",gh:"GitHub CLI"},Br=(e,a,t)=>{let n=t?.gitFlags?.join(" ")??"",r=(t?.targetDir??"").replace(/"/g,'\\"'),o=Nr(e,a),l=`git clone ${n} ${o}`;return r&&(l+=` "${r}"`),l},Mt=(e,a,t)=>{let n=t?.gitFlags??[],r=t?.targetDir??"",o=["clone",...n,Nr(e,a)];return r&&o.push(r),o},Or=(e,a)=>{let t=a?.gitFlags??[],n=a?.targetDir??"",r=["repo","clone",e];return n&&r.push(n),t.length>0&&r.push("--",...t),r},da=(0,fr.promisify)(et.execFile),bi=["/gh","\\gh","/gh.exe","\\gh.exe"],gt="\x1B",Ar="\x07",Ii=new RegExp(`${gt}][^${Ar}${gt}]*(?:${Ar}|${gt}\\\\)`,"g"),gi=new RegExp(`${gt}\\[[0-9;?]*[A-Za-z]`,"g"),Mi=new RegExp(`${gt}\\([0-9A-Za-z]`,"g");function mi(e){let a=e.replace(Ii,"").replace(gi,"").replace(Mi,"");for(let t of a.split(/\r?\n/)){let n=t.trim();if(!(!n||/^(alias|builtin|function)\s/i.test(n))&&bi.some(r=>n.endsWith(r)))return n}}async function Ri(){let e=process.env.SHELL;if(e)for(let a of["-l","-i"])try{let{stdout:t}=await da(e,[a,"-c","command -v gh"],{timeout:5e3,maxBuffer:1048576}),n=mi(t.toString());if(n)return n}catch{}return"gh"}async function Lr(){let e=await Ri();try{await da(e,["--version"])}catch{return{available:!1,reason:"not-installed"}}try{await da(e,["auth","status"])}catch{return{available:!1,reason:"not-authenticated"}}return{available:!0,executable:e}}var Nr=(e,a)=>a==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;function Vr(e,a,t=""){if(!a)return e;let n=M=>M.replace(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\//,"https://github.com/$1/$2/blob/"),r=a.slice(0,a.lastIndexOf("/")+1),o=t?a.slice(0,a.length-t.length):r,l=n(r),s=n(o),i=M=>/^[a-z][a-z0-9+.-]*:/i.test(M)||M.startsWith("//")||M.startsWith("#"),u=(M,S,f)=>{let m=M.trim();if(!m||i(m))return M;try{return m.startsWith("/")?new URL(m.replace(/^\/+/,""),f).toString():new URL(m,S).toString()}catch{return M}},c="((?:\\([^)]*\\)|[^()\\s])+)([^)]*)",y=new RegExp(`!\\[([^\\]]*)\\]\\(${c}\\)`,"g"),I=new RegExp(`(?<!!)\\[([^\\]]+)\\]\\(${c}\\)`,"g");return e.replace(y,(M,S,f,m)=>`![${S}](${u(f,r,o)}${m})`).replace(I,(M,S,f,m)=>`[${S}](${u(f,l,s)}${m})`).replace(/(<img[^>]+src=["'])([^"']+)(["'])/gi,(M,S,f,m)=>`${S}${u(f,r,o)}${m}`).replace(/(<a[^>]+href=["'])([^"']+)(["'])/gi,(M,S,f,m)=>`${S}${u(f,l,s)}${m}`)}var Ft=require("child_process"),qr=K(require("path")),ba=require("util"),N=require("@raycast/api"),Ce=require("@raycast/utils"),Fr=require("react");var Q=require("react/jsx-runtime");function Ia({repository:e}){let{octokit:a}=x(),{application:t,baseClonePath:n,repositoryCloneProtocol:r}=(0,N.getPreferenceValues)(),{data:o,isLoading:l}=(0,Ce.useCachedPromise)(async y=>(await a.repos.listBranches({owner:y.owner.login,repo:y.name})).data.map(M=>M.name),[e]),{itemProps:s,handleSubmit:i,setValue:u,values:c}=(0,Ce.useForm)({initialValues:{clonePath:n?[n]:[],cloneProtocol:r,cloneTool:"git"},async onSubmit(y){let I=e.name,M=qr.default.join(y.clonePath[0],I);await(0,N.showToast)({title:`Cloning ${e.nameWithOwner} to ${M}`,style:N.Toast.Style.Animated});let S=y.branch?["-b",y.branch]:[],f=(0,ba.promisify)(Ft.exec),m=(0,ba.promisify)(Ft.execFile),b="gh";if(y.cloneTool==="gh"){let A=await Lr();if(!A.available){A.reason==="not-installed"?await(0,Ce.showFailureToast)(void 0,{title:"GitHub CLI is not installed",message:"Install it with `brew install gh` or visit https://cli.github.com, then try again."}):await(0,Ce.showFailureToast)(void 0,{title:"GitHub CLI is not authenticated",message:"Run `gh auth login` in your terminal to authenticate, then try again."});return}b=A.executable}try{y.cloneTool==="gh"?await m(b,Or(e.nameWithOwner,{gitFlags:S,targetDir:M})):await m("git",Mt(e.nameWithOwner,y.cloneProtocol,{gitFlags:S,targetDir:M})),await(0,N.showToast)({style:N.Toast.Style.Success,title:"Repository cloned successfully",primaryAction:{title:"Open Repository",async onAction(){let C=`open -a ${t?.path.replaceAll(" ","\\ ")} ${M}`;await f(C),await(0,N.closeMainWindow)()}}})}catch(A){if(A instanceof Error&&A.message.includes("Repository not found")){await(0,Ce.showFailureToast)(A,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(A instanceof Error&&A.message.includes("already exists")){await(0,Ce.showFailureToast)(A,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,Ce.showFailureToast)(A,{title:"Failed cloning repository"})}}});return(0,Fr.useEffect)(()=>{let y=o?.find(M=>M==="main"),I=o?.find(M=>M==="master");(y||I)&&u("branch",y??I??"")},[o]),(0,Q.jsxs)(N.Form,{isLoading:l,navigationTitle:`Clone ${e.nameWithOwner}`,actions:(0,Q.jsx)(N.ActionPanel,{children:(0,Q.jsx)(N.Action.SubmitForm,{title:"Clone and Open Repository",onSubmit:i})}),children:[(0,Q.jsx)(N.Form.Dropdown,{...s.cloneTool,title:"Clone Tool",children:Tr.map(y=>(0,Q.jsx)(N.Form.Dropdown.Item,{value:y,title:wr[y]},y))}),(0,Q.jsx)(N.Form.Description,{title:"Clone Location",text:n?`Starts at your Default Clone Path (${n}). Choose another directory to override it for this clone.`:"Choose the directory where the repository should be cloned. Set a Default Clone Path in extension preferences to reuse a directory."}),(0,Q.jsx)(N.Form.FilePicker,{...s.clonePath,title:"Clone Path",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,Q.jsx)(N.Form.Dropdown,{...s.branch,title:"Branch Name",children:o?.map(y=>(0,Q.jsx)(N.Form.Dropdown.Item,{value:y,title:y},y))}),c.cloneTool==="gh"?(0,Q.jsx)(N.Form.Description,{title:"Authentication",text:"Cloning uses your existing GitHub CLI (gh) authentication and git protocol configuration. Run `gh auth login` in your terminal if you are not authenticated."}):(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(N.Form.Dropdown,{...s.cloneProtocol,title:"Repository Clone Protocol",storeValue:!0,children:vr.map(y=>(0,Q.jsx)(N.Form.Dropdown.Item,{value:y,title:_r[y]},y))})})]})}var kt=require("fs"),ga=K(require("path")),G=require("@raycast/api"),tt=require("@raycast/utils"),kr=require("react");var Be=require("react/jsx-runtime");function Ma({repository:e}){let{octokit:a,token:t}=x(),{data:n,isLoading:r}=(0,tt.useCachedPromise)(async i=>(await a.repos.listBranches({owner:i.owner.login,repo:i.name})).data.map(c=>c.name),[e]),{itemProps:o,handleSubmit:l,setValue:s}=(0,tt.useForm)({async onSubmit(i){let u=e.url+"/archive/refs/heads/"+i.branch+".zip";await(0,G.showToast)({title:`Downloading ${e.nameWithOwner}`,style:G.Toast.Style.Animated});try{let c;if(e.isPrivate&&t){let b=`https://api.github.com/repos/${e.owner.login}/${e.name}/zipball/${i.branch}`;c=await fetch(b,{headers:{Authorization:`token ${t}`,Accept:"application/vnd.github.v3+json"},redirect:"follow"})}else c=await fetch(u);if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);let I=await(await c.blob()).arrayBuffer(),M=new Uint8Array(I),S=`${e.name}-${i.branch.replaceAll("/","-")}.zip`,f=ga.default.join(i.downloadPath[0],S),m=1;for(;(0,kt.existsSync)(f);)S=`${`${e.name}-${i.branch.replaceAll("/","-")}`} (${m}).zip`,f=ga.default.join(i.downloadPath[0],S),m++;(0,kt.writeFileSync)(f,M),await(0,G.showToast)({style:G.Toast.Style.Success,title:"Downloaded repository successfully",message:e.name,primaryAction:{title:"Show in Finder",async onAction(){await(0,G.showInFinder)(f)}}})}catch(c){await(0,tt.showFailureToast)(c,{title:"Failed downloading repository",message:c instanceof Error?c.message:"Unknown error"});return}},validation:{downloadPath:i=>{if(!i||i.length===0)return"Please select a download path"},branch:i=>{if(!i||i.trim()==="")return"Please select a branch"}}});return(0,kr.useEffect)(()=>{let i=n?.find(c=>c==="main"),u=n?.find(c=>c==="master");(i||u)&&s("branch",i??u??"")},[n]),(0,Be.jsxs)(G.Form,{isLoading:r,navigationTitle:`Download ${e.nameWithOwner} as ZIP`,actions:(0,Be.jsx)(G.ActionPanel,{children:(0,Be.jsx)(G.Action.SubmitForm,{title:"Download ZIP",onSubmit:l})}),children:[(0,Be.jsx)(G.Form.Description,{title:"ZIP Download",text:"Downloads a branch as a ZIP archive. To create a Git clone, use 'Clone with Options' instead."}),(0,Be.jsx)(G.Form.FilePicker,{...o.downloadPath,title:"ZIP Save Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,Be.jsx)(G.Form.Dropdown,{...o.branch,title:"Branch Name",children:n?.map(i=>(0,Be.jsx)(G.Form.Dropdown.Item,{value:i,title:i},i))})]})}var W=require("@raycast/api"),Ht=require("@raycast/utils"),Aa=require("react");var _=require("@raycast/api"),jr=require("lodash");function jt(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}function zr(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let a=e;throw new Error(`Unknown merge method: ${a}`)}}}function mt(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:_.Color.Purple},text:"Merged",color:_.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:_.Color.Red},text:"Closed",color:_.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:_.Color.SecondaryText},text:"Draft",color:_.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:_.Color.Orange},text:"In Merge Queue",color:_.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:_.Color.Green},text:"Open",color:_.Color.Green}}function zt(e){return F(e.author)}function Gr(e){let a=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let l;"githubUsername"in r&&(l=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...F({name:o,login:l,avatarUrl:s})}}}),t=(0,jr.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...F(n?.author)})),"id");return[...a??[],...t??[]]}function Hr(e){let a=e.comments.totalCount,t=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return a+t+n}function Gt(e){let a=jt(e);return a?{icon:_.Icon[a.icon],tooltip:`Checks: ${a.text}`}:null}function $r(e){switch(e){case"added":return{icon:{source:_.Icon.PlusCircle,tintColor:_.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:_.Icon.MinusCircle,tintColor:_.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:_.Icon.ArrowRight,tintColor:_.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:_.Icon.CopyClipboard,tintColor:_.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:_.Icon.Circle,tintColor:_.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Changed"};default:return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Modified"}}}var ma=400;function Qr(e){let a=e.split(`
`);return a.length<=ma?{patch:e,remainingLines:0}:{patch:a.slice(0,ma).join(`
`),remainingLines:a.length-ma}}function Wr(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:_.Icon.Eye,tintColor:_.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:_.Icon.Pencil,tintColor:_.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:_.Icon.CheckCircle,tintColor:_.Color.Green},tooltip:"Approved"};default:return null}}var Kr=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Yr="sort:updated-desc";function De(e){return[...new Map(e.map(a=>[a.id,a])).values()]}function Xr(e){return e?.filter(a=>typeof a=="object"&&a!==null&&"id"in a)??[]}function Se(e,a,{suffix:t="s",withNumber:n=!1}={}){let r=`${a}${e!==1?t:""}`;return n?`${e} ${r}`:r}var xe=require("date-fns"),Ra=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],Zr=Ra[0].value,Jr=e=>{let a=new Date,t,n=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!n)return e;let r=parseInt(n[1],10);switch(n[2]){case"d":t=(0,xe.subDays)(a,r);break;case"w":t=(0,xe.subWeeks)(a,r);break;case"m":t=(0,xe.subMonths)(a,r);break;case"y":t=(0,xe.subYears)(a,r);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,xe.format)(t,"yyyy-MM-dd")}`};var pe=require("@raycast/api"),tn=require("date-fns");var re=require("@raycast/api"),he=require("react/jsx-runtime"),qe=({sortQuery:e,setSortQuery:a,data:t})=>a?(0,he.jsxs)(re.ActionPanel.Submenu,{title:"Sort by",icon:re.Icon.ArrowUp,shortcut:re.Keyboard.Shortcut.Common.Duplicate,children:[t.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,he.jsx)(en,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r||"relevance")),t.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,he.jsx)(re.ActionPanel.Section,{title:"Most Reactions",children:t.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,he.jsx)(en,{title:n,value:r,sortQuery:e??"",setSortQuery:a},r))})]}):(0,he.jsx)(he.Fragment,{}),en=({title:e,value:a,sortQuery:t,setSortQuery:n})=>(0,he.jsx)(re.Action,{title:e,icon:t===a?{source:re.Icon.CheckCircle,tintColor:re.Color.Green}:re.Icon.Circle,onAction:()=>n(a)});var He=require("react/jsx-runtime");function Pi(e){let a=e.category?.name?`Category: ${e.category?.name}`:"Unknown",t=e.category?.emojiHTML;if(!t)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:a};let r=(()=>{let o=/fallback-src="(.*)"/,l=t.match(o);if(l)return l[1]})();return r&&{value:{source:r},tooltip:a}}function an(e){let a=e.discussion,t=F(a.author);return(0,He.jsx)(pe.List.Item,{icon:Pi(a),title:a.title,subtitle:a.repository?.nameWithOwner,accessories:[{icon:a.answer?{source:pe.Icon.Checkmark,tintColor:pe.Color.Green}:void 0,tooltip:a.answer?"Answered":void 0},{icon:pe.Icon.ArrowUp,text:`${a.upvoteCount}`,tooltip:`${a.upvoteCount} Upvotes`},{text:a.comments?`${a.comments.totalCount}`:void 0,icon:a.comments?pe.Icon.SpeechBubble:void 0,tooltip:a.comments?`Comments: ${a.comments.totalCount}`:void 0},...a.publishedAt?[{date:new Date(a.publishedAt),tooltip:(0,tn.format)(new Date(a.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:t.icon,tooltip:t.text}],actions:(0,He.jsxs)(pe.ActionPanel,{children:[(0,He.jsx)(pe.Action.OpenInBrowser,{url:a.url}),(0,He.jsx)(pe.ActionPanel.Section,{children:(0,He.jsx)(qe,{data:Ra,...e})})]})})}var be=require("react/jsx-runtime"),Ei=20;function fi(e){return(0,be.jsxs)(W.List.Dropdown,{tooltip:"Filter",value:e.value,onChange:e.onChange,children:[(0,be.jsx)(W.List.Dropdown.Item,{value:"",title:"All",icon:W.Icon.SpeechBubble}),(0,be.jsx)(W.List.Dropdown.Item,{value:"answered",title:"Answered",icon:{source:W.Icon.Checkmark,tintColor:W.Color.Green}}),(0,be.jsx)(W.List.Dropdown.Item,{value:"unanswered",title:"Unanswered",icon:W.Icon.Circle}),(0,be.jsx)(W.List.Dropdown.Item,{value:"locked",title:"Locked",icon:W.Icon.Lock}),(0,be.jsx)(W.List.Dropdown.Item,{value:"unlocked",title:"Unlocked",icon:W.Icon.LockUnlocked})]})}function rn(e){let{github:a}=x(),[t,n]=(0,Aa.useState)(""),[r,o]=(0,Aa.useState)(""),[l,s]=(0,Ht.useCachedState)("sort-query",Zr,{cacheNamespace:"github-repo-discussion"}),i=r.length>0?`is:${r}`:"",u=e.repository&&e.repository.length>0?`repo:${e.repository}`:"",{data:c,isLoading:y,pagination:I}=(0,Ht.useCachedPromise)((S,f,m)=>async b=>{let A=await a.searchDiscussions({query:`${u} ${f} ${Jr(m)} ${S}`.replace(/\s+/g," ").trim(),numberOfItems:Ei,after:b.page>0?b.cursor:void 0});return{data:A.searchDiscussions.nodes?.map(C=>C)??[],hasMore:A.searchDiscussions.pageInfo.hasNextPage,cursor:A.searchDiscussions.pageInfo.endCursor??void 0}},[t,i,l]),M=De(c??[]);return(0,be.jsx)(W.List,{isLoading:y,onSearchTextChange:n,navigationTitle:e.repository,throttle:!0,pagination:I,searchBarAccessory:(0,be.jsx)(fi,{value:r,onChange:o}),children:(0,be.jsx)(W.List.Section,{title:"Discussions",subtitle:`${M.length}`,children:M.map(S=>(0,be.jsx)(an,{discussion:S,sortQuery:l,setSortQuery:s},S.id))})})}var Re=require("@raycast/api"),Pt=require("@raycast/utils"),dn=require("react");var Oe=require("@raycast/api");function $t(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Oe.Color.SecondaryText},text:"Closed as not planned",color:Oe.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Oe.Color.Purple},text:"Closed as completed",color:Oe.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Oe.Color.Purple},text:"Closed",color:Oe.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Oe.Color.Green},text:"Open",color:Oe.Color.Green}}function Qt(e){return F(e.author)}var nn=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],on="sort:updated-desc",Ci=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Di=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,xi=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function sn(e,a){let t=e.match(Di);if(t)return{owner:t[1],name:t[2],issueNumber:Number.parseInt(t[3],10)};let n=e.match(Ci),r=a?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let s=e.replace(xi," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!s)return null;let[i,u]=o.split("/");return!i||!u?null:{owner:i,name:u,issueNumber:Number.parseInt(s[1],10)}}function un(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var Le=require("@raycast/api"),yn=require("date-fns");var d=require("@raycast/api"),Wt=require("@raycast/utils"),Kt=require("react");var pn=require("@raycast/utils");function $e(){let{github:e}=x(),{data:a}=(0,pn.useCachedPromise)(async()=>(await e.getViewer()).viewer);return a}var U=require("react/jsx-runtime");function Rt({issue:e,mutateList:a,mutateDetail:t,children:n,setSortQuery:r,sortQuery:o}){let{github:l}=x(),s=$e();async function i(){a&&await a(),t&&await t()}async function u(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await l.reopenIssue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(C){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening issue",message:v(C)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await l.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(C){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as completed",message:v(C)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await l.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(C){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as not planned",message:v(C)})}}async function I(C){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let E=e.assignees.nodes?.filter(D=>!!D).map(D=>D?.id)??[];await l.changeIssueAssignees({issueId:e.id,assigneeIds:[...E,C]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:v(E)})}}async function M(C){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let E=e.assignees.nodes?.filter(D=>!!D).map(D=>D?.id)??[];await l.changeIssueAssignees({issueId:e.id,assigneeIds:E?.filter(D=>D!==C)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(E){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:v(E)})}}async function S(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let C=e.repository.defaultBranchRef?.target?.oid;if(!C)throw new Error("Repository default branch commit SHA is unavailable");let D=(await l.createLinkedBranch({input:{issueId:e.id,oid:C}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),D&&await(0,d.showToast)({style:d.Toast.Style.Success,title:`${D} is created`,primaryAction:{title:"Copy Branch Name",shortcut:{modifiers:["shift","cmd"],key:"c"},onAction:()=>d.Clipboard.copy(D)}})}catch(C){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed creating a branch",message:v(C)})}}async function f(C,E){if(await(0,d.confirmAlert)({icon:d.Icon.Trash,title:"Delete the branch",message:`${E} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:d.Alert.ActionStyle.Destructive}}))try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Deleting a branch"}),await l.deleteLinkedBranch({input:{linkedBranchId:C}}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Deleted the branch"})}catch(D){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed deleting the branch",message:v(D)})}}let m=F(s),b=e.assignees.nodes?.some(C=>C?.isViewer),A=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,U.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,U.jsx)(d.Action.OpenInBrowser,{url:e.url}),(0,U.jsxs)(d.ActionPanel.Section,{children:[s?(0,U.jsx)(d.Action,{title:b?"Unassign from Me":"Assign to Me",icon:m.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>b?M(s.id):I(s.id)}):null,(0,U.jsx)(hi,{issue:e,mutate:i}),(0,U.jsx)(Ui,{issue:e,mutate:i}),A?null:(0,U.jsx)(d.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"b"},onAction:()=>S()}),(0,U.jsx)(vi,{issue:e,mutate:i})]}),(0,U.jsx)(d.ActionPanel.Section,{children:e.closed?(0,U.jsx)(d.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:d.Color.Green},onAction:u}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(d.Action,{title:"Close Issue as Completed",style:d.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:d.Color.Red},onAction:c}),(0,U.jsx)(d.Action,{title:"Close Issue as Not Planned",style:d.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:d.Color.Red},onAction:y}),A?(0,U.jsx)(d.Action,{title:"Delete Issue Branch",style:d.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:d.Color.Red},onAction:()=>f(A?.id||"",A.ref?.name??"")}):null]})}),(0,U.jsxs)(d.ActionPanel.Section,{children:[(0,U.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,U.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}}),A?.ref?.name?(0,U.jsx)(d.Action.CopyToClipboard,{content:A.ref?.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null]}),(0,U.jsxs)(d.ActionPanel.Section,{children:[(0,U.jsx)(qe,{data:nn,sortQuery:o,setSortQuery:r}),(0,U.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function hi({issue:e,mutate:a}){let{github:t}=x(),[n,r]=(0,Kt.useState)(!1),{data:o,isLoading:l}=(0,Wt.useCachedPromise)(async i=>t.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:u});let c=o?.repository?.issue?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await t.changeIssueAssignees({issueId:e.id,assigneeIds:[...c,i]}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:u})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:v(c)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let u=F(i);return(0,U.jsx)(d.Action,{title:u.text,icon:u.icon,onAction:()=>s({id:i.id,text:u.text})},i.id)})})}function Ui({issue:e,mutate:a}){let{github:t}=x(),[n,r]=(0,Kt.useState)(!1),{data:o,isLoading:l}=(0,Wt.useCachedPromise)(async i=>t.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:u}),await t.addIssueToProject({issueId:e.id,projectId:i}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:u})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:v(c)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,U.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function vi({issue:e,mutate:a}){let{github:t}=x(),[n,r]=(0,Kt.useState)(!1),{data:o,isLoading:l}=(0,Wt.useCachedPromise)(async u=>t.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await t.changeIssueMilestone({issueId:e.id,milestoneId:null}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:v(u)})}}async function i({id:u,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changeIssueMilestone({issueId:e.id,milestoneId:u}),await a(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:v(y)})}}return(0,U.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,U.jsx)(d.Action,{title:"Loading\u2026"}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,U.jsx)(d.Action,{title:u.title,onAction:()=>i({id:u.id,text:u.title}),autoFocus:e.milestone?.id===u.id},u.id):null)]})})}var H=require("@raycast/api"),ln=require("@raycast/utils"),cn=require("date-fns");var $=require("react/jsx-runtime");function Pa({initialIssue:e,mutateList:a}){let{github:t}=x(),n=$e(),{data:r,isLoading:o,mutate:l}=(0,ln.useCachedPromise)(async y=>(await t.issueDetails({nodeId:y})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=$t(r),u=Qt(r),c=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,$.jsx)(H.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,$.jsxs)(H.Detail.Metadata,{children:[(0,$.jsx)(H.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,$.jsx)(H.Detail.Metadata.TagList,{title:"Status",children:(0,$.jsx)(H.Detail.Metadata.TagList.Item,{...i})}),c?(0,$.jsx)(H.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:H.Color.PrimaryText},text:c}):null,r.updatedAt?(0,$.jsx)(H.Detail.Metadata.Label,{title:"Updated",text:(0,cn.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,$.jsx)(H.Detail.Metadata.Label,{title:"Author",...u}),r.assignees&&r.assignees.totalCount>0?(0,$.jsx)(H.Detail.Metadata.TagList,{title:Se(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(y=>{if(!y)return null;let I=F(y);return(0,$.jsx)(H.Detail.Metadata.TagList.Item,{...I},y.id)})}):null,r.labels&&r.labels.totalCount>0?(0,$.jsx)(H.Detail.Metadata.TagList,{title:Se(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(y=>y?(0,$.jsx)(H.Detail.Metadata.TagList.Item,{text:y.name,color:y.color},y.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,$.jsx)(H.Detail.Metadata.TagList,{title:Se(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(y=>y?(0,$.jsx)(H.Detail.Metadata.TagList.Item,{text:y.title},y.id):null)}):null,r.milestone?(0,$.jsx)(H.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,$.jsx)(Rt,{issue:r,viewer:n,mutateList:a,mutateDetail:l})})}var At=require("react/jsx-runtime");function Ea({issue:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),l=Qt(e),s=$t(e),i=[{date:o,tooltip:`Updated: ${(0,yn.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:l.icon,tooltip:`Author: ${l.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:Le.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:Le.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let u=[`${e.number}`];return e.author?.login&&u.push(e.author.login),(0,At.jsx)(Le.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:u,accessories:i,actions:(0,At.jsx)(Rt,{issue:e,mutateList:t,viewer:a,sortQuery:n,setSortQuery:r,children:(0,At.jsx)(Le.Action.Push,{title:"Show Details",icon:Le.Icon.Sidebar,target:(0,At.jsx)(Pa,{initialIssue:e,viewer:a,mutateList:t})})})},e.id)}var Ue=require("react/jsx-runtime"),_i=20;function Ti(e){return(0,Ue.jsxs)(Re.List.Dropdown,{tooltip:"Status",value:e.value,onChange:a=>e.onChange(a),children:[(0,Ue.jsx)(Re.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"issue-open.svg",tintColor:Re.Color.Green}}),(0,Ue.jsx)(Re.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"issue-closed.svg",tintColor:Re.Color.Purple}}),(0,Ue.jsx)(Re.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"issue-open.svg",tintColor:Re.Color.PrimaryText}})]})}function Sn(e){let{github:a}=x(),[t,n]=(0,dn.useState)(""),[r,o]=(0,Pt.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-issue"}),[l,s]=(0,Pt.useCachedState)("sort-query",on,{cacheNamespace:"github-repo-issue"}),i=e.repo&&e.repo.length>0?`repo:${e.repo}`:"",{data:u,isLoading:c,mutate:y,pagination:I}=(0,Pt.useCachedPromise)((S,f,m)=>async b=>{let A=m==="all"?"":`is:${m}`,C=sn(S,e.repo);if(C&&b.page===0)try{let T=(await a.issueByNumber(C)).repository?.issue,ce=m==="all"||(m==="closed"?T?.closed:!T?.closed);if(T&&ce)return{data:[T],hasMore:!1}}catch{}let E=await a.searchIssues({query:`is:issue ${A} ${f} ${i} ${un(S)}`.replace(/\s+/g," ").trim(),numberOfItems:_i,after:b.page>0?b.cursor:void 0});return{data:E.search.nodes?.map(D=>D)??[],hasMore:E.search.pageInfo.hasNextPage,cursor:E.search.pageInfo.endCursor??void 0}},[t,l,r]),M=De(u??[]);return(0,Ue.jsx)(Re.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repo,searchBarPlaceholder:"Filter by title or #123",throttle:!0,pagination:I,searchBarAccessory:(0,Ue.jsx)(Ti,{value:r,onChange:o}),children:(0,Ue.jsx)(Re.List.Section,{title:"Issues",subtitle:`${M.length}`,children:M.map(S=>(0,Ue.jsx)(Ea,{issue:S,mutateList:y,sortQuery:l,setSortQuery:s},S.id))})})}var Z=require("@raycast/api"),Ct=require("@raycast/utils"),En=require("react");var le=require("@raycast/api"),va=require("date-fns"),Pn=require("react");var p=require("@raycast/api"),nt=require("@raycast/utils"),rt=require("react");var q=require("@raycast/api"),Yt=require("@raycast/utils");var ve=require("react/jsx-runtime");function fa({pullRequest:e,mutate:a}){let{github:t}=x(),{pop:n}=(0,q.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,Yt.useForm)({async onSubmit(l){try{await(0,q.showToast)({style:q.Toast.Style.Animated,title:"Adding Review"}),await t.addPullRequestReview({nodeId:e.id,body:l.comment,event:l.event}),await a(),n(),await(0,q.showToast)({style:q.Toast.Style.Success,title:"Review added"})}catch(s){await(0,q.showToast)({style:q.Toast.Style.Failure,title:"Failed to add review",message:v(s)})}},validation:{comment:Yt.FormValidation.Required}});return(0,ve.jsxs)(q.Form,{actions:(0,ve.jsx)(q.ActionPanel,{children:(0,ve.jsx)(q.Action.SubmitForm,{title:"Submit",icon:q.Icon.Plus,onSubmit:r})}),children:[(0,ve.jsx)(q.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,ve.jsxs)(q.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,ve.jsx)(q.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,ve.jsx)(q.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,ve.jsx)(q.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var Xt=require("node:child_process"),bn=require("node:fs"),In=K(require("node:path")),Ca=require("node:util"),w=require("@raycast/api"),at=require("@raycast/utils");var Qe=require("react/jsx-runtime");function Da({pullRequest:e}){let{repositoryCloneProtocol:a}=(0,w.getPreferenceValues)(),{itemProps:t,handleSubmit:n}=(0,at.useForm)({async onSubmit(r){let o=e.repository.name,l=In.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,w.showToast)({style:w.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let i=(0,Ca.promisify)(Xt.exec),u=(0,Ca.promisify)(Xt.execFile);try{if((0,bn.existsSync)(l)){await(0,w.showToast)({title:`Switching to branch ${s}`,message:`in ${l}`,style:w.Toast.Style.Animated});let{stdout:c}=await i("git remote",{cwd:l}),y=c.trim().split(`
`)[0]||"origin";await i(`git fetch ${y} ${s}`,{cwd:l}),await i(`git checkout ${s}`,{cwd:l}),await i(`git reset --hard ${y}/${s}`,{cwd:l}),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,w.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${l}`,style:w.Toast.Style.Animated}),await u("git",Mt(e.repository.nameWithOwner,a,{gitFlags:["-b",s],targetDir:l})),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,w.open)(l),await(0,w.popToRoot)(),await(0,w.closeMainWindow)()}catch(c){if(c instanceof Error&&c.message.includes("Repository not found")){await(0,at.showFailureToast)(c,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(c instanceof Error&&c.message.includes("already exists")){await(0,at.showFailureToast)(c,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,at.showFailureToast)(c,{title:"Failed checking out pull request"})}}});return(0,Qe.jsxs)(w.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,Qe.jsx)(w.ActionPanel,{children:(0,Qe.jsx)(w.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,Qe.jsx)(w.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,Qe.jsx)(w.Form.FilePicker,{...t.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var Y=require("@raycast/api"),gn=require("@raycast/utils"),Zt=require("date-fns");var Ie=require("react/jsx-runtime");function xa({pullRequest:e}){let{github:a}=x(),{data:t,isLoading:n,pagination:r}=(0,gn.useCachedPromise)(l=>async({cursor:s})=>{let u=(await a.pullRequestCommits({nodeId:l.id,numberOfItems:25,before:s})).node,c=u.commits.nodes?.filter(y=>y!=null)??[];return c.sort((y,I)=>{let M=y.commit.authoredDate,S=I.commit.authoredDate;return(0,Zt.compareDesc)(new Date(M),new Date(S))}),{data:c,hasMore:u.commits.pageInfo.hasPreviousPage,cursor:u.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((t??[]).map(l=>[l.commit.id,l])).values()];return(0,Ie.jsx)(Y.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(l=>{let s=l.commit,i=new Date(s.authoredDate),u=[{date:i,tooltip:(0,Zt.format)(i,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let y=Gt(s.statusCheckRollup.state);y&&u.unshift(y)}let c;if(s.author){let y={source:s.author.avatarUrl,mask:Y.Image.Mask.Circle};c=s.author.name?{value:y,tooltip:s.author.name}:y}return(0,Ie.jsx)(Y.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:u,...c?{icon:c}:{},actions:(0,Ie.jsxs)(Y.ActionPanel,{children:[(0,Ie.jsx)(Y.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,Ie.jsx)(Y.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,Ie.jsxs)(Y.ActionPanel.Section,{children:[(0,Ie.jsx)(Y.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,Ie.jsx)(Y.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,Ie.jsx)(Y.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,Ie.jsx)(Y.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{modifiers:["ctrl","shift"],key:"."}})]})]})},s.id)})})}var mn=require("node:crypto"),k=require("@raycast/api"),Jt=require("@raycast/utils");var X=require("react/jsx-runtime"),Mn=100,wi=4;function ha({pullRequest:e}){let{octokit:a}=x(),{data:t,isLoading:n,pagination:r}=(0,Jt.useCachedPromise)((s,i,u)=>async({page:c})=>{let{data:y}=await a.pulls.listFiles({owner:s,repo:i,pull_number:u,per_page:Mn,page:c+1});return{data:y,hasMore:y.length===Mn}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,Jt.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=t??[],l="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,X.jsxs)(k.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,X.jsx)(k.List.Section,{title:Se(o.length,"file",{withNumber:!0}),subtitle:l,children:o.map(s=>{let i=$r(s.status);return(0,X.jsx)(k.List.Item,{title:s.filename,icon:{value:i.icon,tooltip:i.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:k.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:k.Color.Red}}],detail:(0,X.jsx)(k.List.Item.Detail,{markdown:Bi(s)}),actions:(0,X.jsxs)(k.ActionPanel,{title:s.filename,children:[(0,X.jsx)(k.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${Li(s.filename)}`}),(0,X.jsx)(k.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,X.jsxs)(k.ActionPanel.Section,{children:[(0,X.jsx)(k.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{modifiers:["cmd","shift"],key:"."}}),s.patch?(0,X.jsx)(k.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{modifiers:["cmd","shift"],key:","}}):null]})]})},s.sha+s.filename)})}),(0,X.jsx)(k.List.EmptyView,{icon:k.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,X.jsx)(k.ActionPanel,{children:(0,X.jsx)(k.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function Bi(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:a,remainingLines:t}=Qr(e.patch),n=Oi(a),r=`${n}diff
${a}
${n}`;return t===0?r:`${r}

_\u2026 truncated, ${Se(t,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function Oi(e){let a=0;for(let[t]of e.matchAll(/`+/g))a=Math.max(a,t.length);return"`".repeat(Math.max(wi,a+1))}function Li(e){return(0,mn.createHash)("sha256").update(e).digest("hex")}var P=require("react/jsx-runtime");function Et({pullRequest:e,viewer:a,mutateList:t,mutateDetail:n,children:r,sortQuery:o,setSortQuery:l}){let{github:s}=x();async function i(){t&&await t(),n&&await n()}async function u(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed reopening pull request",message:v(L)})}}async function c(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:v(L)})}}async function y(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed closing pull request",message:v(L)})}}async function I(L){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:L}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(Me){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed merging pull request",message:v(Me)})}}async function M(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:v(L)})}}async function S(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:v(L)})}}async function f(L){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:L}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(Me){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed enabling auto-merge",message:v(Me)})}}async function m(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(L){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed disabling auto-merge",message:v(L)})}}async function b(L){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Assigning to me"});let Me=e.assignees.nodes?.filter(_e=>!!_e).map(_e=>_e?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...Me,L]}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Assigned to me"})}catch(Me){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed assigning to me",message:v(Me)})}}async function A(L){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Un-assigning from me"});let Me=e.assignees.nodes?.filter(_e=>!!_e).map(_e=>_e?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:Me?.filter(_e=>_e!==L)}),await i(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Un-assigned from me"})}catch(Me){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed un-assigning from me",message:v(Me)})}}let C=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",E=!e.closed&&!e.merged,D=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===a?.login:!1,T=E&&e.isDraft&&D,ce=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),it=E&&e.repository.autoMergeAllowed,_n=C||it,Tn=F(a),La=e.assignees.nodes?.some(L=>L?.isViewer),{isOpenInBrowser:wn}=(0,p.getPreferenceValues)(),Na=(0,P.jsx)(p.Action.OpenInBrowser,{url:e.permalink}),[Bn,On]=wn?[Na,r]:[r,Na];return(0,P.jsxs)(p.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[Bn,On,(0,P.jsx)(p.Action.Push,{icon:p.Icon.Document,title:"Add Review",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,P.jsx)(fa,{pullRequest:e,mutate:i})}),(0,P.jsx)(p.Action.Push,{icon:{source:"commit.svg",tintColor:p.Color.PrimaryText},title:"See Commits",shortcut:p.Keyboard.Shortcut.Common.Copy,target:(0,P.jsx)(xa,{pullRequest:e})}),(0,P.jsx)(p.Action.Push,{icon:p.Icon.CodeBlock,title:"View Diff",shortcut:p.Keyboard.Shortcut.Common.RemoveAll,target:(0,P.jsx)(ha,{pullRequest:e})}),(0,P.jsx)(p.Action.Push,{icon:p.Icon.Download,title:"Checkout Pull Request",shortcut:p.Keyboard.Shortcut.Common.OpenWith,target:(0,P.jsx)(Da,{pullRequest:e})}),_n&&(0,P.jsxs)(p.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&C&&!e.isInMergeQueue&&(0,P.jsx)(p.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>M()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,P.jsx)(p.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>S()}),!e.isMergeQueueEnabled&&C?(0,P.jsxs)(P.Fragment,{children:[e.repository.mergeCommitAllowed?(0,P.jsx)(p.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>I("MERGE")}):null,e.repository.squashMergeAllowed?(0,P.jsx)(p.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["ctrl","shift"],key:"enter"},onAction:()=>I("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,P.jsx)(p.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["opt","shift"],key:"enter"},onAction:()=>I("REBASE")}):null]}):null,it&&!e.autoMergeRequest&&ce.length===1&&(0,P.jsx)(p.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},onAction:()=>f(ce[0])}),it&&!e.autoMergeRequest&&ce.length>1&&(0,P.jsx)(p.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},children:ce.map(L=>(0,P.jsx)(p.Action,{title:zr(L),onAction:()=>f(L)},L))}),E&&e.autoMergeRequest&&(0,P.jsx)(p.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:p.Color.PrimaryText},onAction:()=>m()})]}),(0,P.jsxs)(p.ActionPanel.Section,{children:[(0,P.jsx)(Ni,{pullRequest:e,mutate:i}),a?(0,P.jsx)(p.Action,{title:La?"Unassign from Me":"Assign to Me",icon:Tn.icon,shortcut:{modifiers:["cmd","shift"],key:"i"},onAction:()=>La?A(a.id):b(a.id)}):null,(0,P.jsx)(Vi,{pullRequest:e,mutate:i}),(0,P.jsx)(qi,{pullRequest:e,mutate:i}),(0,P.jsx)(Fi,{pullRequest:e,mutate:i}),(0,P.jsx)(ki,{pullRequest:e,mutate:i})]}),(0,P.jsxs)(p.ActionPanel.Section,{children:[T?(0,P.jsx)(p.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"d"},onAction:()=>c()}):null,e.closed&&!e.merged?(0,P.jsx)(p.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:p.Color.PrimaryText},onAction:()=>u()}):null,e.closed?null:(0,P.jsx)(p.Action,{title:"Close Pull Request",style:p.Action.Style.Destructive,icon:p.Icon.XMarkCircle,onAction:()=>y()})]}),(0,P.jsxs)(p.ActionPanel.Section,{children:[(0,P.jsx)(p.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{modifiers:["cmd","shift"],key:"."}}),e.headRef?(0,P.jsx)(p.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{modifiers:["ctrl","shift"],key:"."}}):null,(0,P.jsx)(p.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{modifiers:["cmd","shift"],key:","}}),(0,P.jsx)(p.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{modifiers:["ctrl","shift"],key:","}}),(0,P.jsx)(p.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{modifiers:["cmd","shift"],key:";"}})]}),(0,P.jsxs)(p.ActionPanel.Section,{children:[(0,P.jsx)(qe,{data:Kr,sortQuery:o,setSortQuery:l}),(0,P.jsx)(p.Action,{icon:p.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:p.Keyboard.Shortcut.Common.Refresh})]})]})}function Ni({pullRequest:e,mutate:a}){let{github:t}=x(),[n,r]=(0,rt.useState)(!1),[o,l]=(0,rt.useState)(""),{data:s,isLoading:i}=(0,nt.useCachedPromise)(async(c,y)=>t.repositoryCollaboratorsForPullRequests({owner:c.repository.owner.login,name:c.repository.name,pullRequestNumber:c.number,searchQuery:y}),[e,o],{execute:n});async function u({id:c,text:y}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Requesting review",message:y}),await t.requestReview({pullRequestId:e.id,collaboratorId:c}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Requested review",message:y})}catch(I){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed requesting review",message:v(I)})}}return(0,P.jsx)(p.ActionPanel.Submenu,{title:"Request Review",icon:p.Icon.AddPerson,shortcut:{modifiers:["ctrl","shift"],key:"r"},onOpen:()=>r(!0),onSearchTextChange:l,isLoading:i,children:s?.repository?.collaborators?.nodes?.filter(c=>!c?.isViewer).map(c=>{if(!c)return null;let y=F(c);return(0,P.jsx)(p.Action,{title:y.text,icon:y.icon,onAction:()=>u({id:c.id,text:y.text})},c.id)})})}function Vi({pullRequest:e,mutate:a}){let{github:t}=x(),[n,r]=(0,rt.useState)(!1),{data:o,isLoading:l}=(0,nt.useCachedPromise)(async i=>t.repositoryCollaboratorsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Adding assignee",message:u});let c=o?.repository?.pullRequest?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await t.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...c,i]}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Added assignee",message:u})}catch(c){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding assignee",message:v(c)})}}return(0,P.jsx)(p.ActionPanel.Submenu,{title:"Add Assignee",icon:p.Icon.AddPerson,shortcut:{modifiers:["cmd","shift"],key:"a"},onOpen:()=>r(!0),children:l?(0,P.jsx)(p.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let u=F(i);return(0,P.jsx)(p.Action,{title:u.text,icon:u.icon,onAction:()=>s({id:i.id,text:u.text})},i.id)})})}function qi({pullRequest:e,mutate:a}){let{github:t}=x(),[n,r]=(0,rt.useState)(!1),{data:o,isLoading:l}=(0,nt.useCachedPromise)(async i=>t.repositoryProjectsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:u}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Adding to project",message:u}),await t.addPullRequestToProject({pullRequestId:e.id,projectId:i}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Added to project",message:u})}catch(c){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed adding to project",message:v(c)})}}return(0,P.jsx)(p.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"p"},onOpen:()=>r(!0),children:l?(0,P.jsx)(p.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,P.jsx)(p.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function Fi({pullRequest:e,mutate:a}){let{github:t}=x(),[n,r]=(0,rt.useState)(!1),{data:o,isLoading:l}=(0,nt.useCachedPromise)(async u=>t.milestonesForRepository({owner:u.repository.owner.login,name:u.repository.name}),[e],{execute:n});async function s(){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Removing milestone"}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Removed milestone"})}catch(u){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed removing milestone",message:v(u)})}}async function i({id:u,text:c}){try{await(0,p.showToast)({style:p.Toast.Style.Animated,title:"Setting milestone",message:c}),await t.changePullRequestMilestone({pullRequestId:e.id,milestoneId:u}),await a(),await(0,p.showToast)({style:p.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,p.showToast)({style:p.Toast.Style.Failure,title:"Failed setting milestone",message:v(y)})}}return(0,P.jsx)(p.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:p.Color.PrimaryText},shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>r(!0),children:l?(0,P.jsx)(p.Action,{title:"Loading\u2026"}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(p.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(u=>u?(0,P.jsx)(p.Action,{title:u.title,onAction:()=>i({id:u.id,text:u.title}),autoFocus:e.milestone?.id===u.id},u.id):null)]})})}function ki({pullRequest:e}){let{github:a}=x(),{data:t,isLoading:n}=(0,nt.useCachedPromise)(async r=>{let s=(await a.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(c=>c?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,P.jsx)(P.Fragment,{children:n?(0,P.jsx)(p.Action,{title:"Loading\u2026"}):t&&(0,P.jsx)(p.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{modifiers:["cmd","shift"],key:"v"},url:t,icon:{source:"vercel.svg",tintColor:p.Color.PrimaryText}})})}var O=require("@raycast/api"),Rn=require("@raycast/utils"),An=require("date-fns");var V=require("react/jsx-runtime");function Ua({initialPullRequest:e,mutateList:a}){let{github:t}=x(),n=$e(),{data:r,isLoading:o,mutate:l}=(0,Rn.useCachedPromise)(async I=>(await t.pullRequestDetails({nodeId:I})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=mt(r),u=jt(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),c=zt(r),y=Gr(r);return(0,V.jsx)(O.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,V.jsxs)(O.Detail.Metadata,{children:[(0,V.jsx)(O.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,V.jsxs)(O.Detail.Metadata.TagList,{title:"Status",children:[(0,V.jsx)(O.Detail.Metadata.TagList.Item,{...i}),r.autoMergeRequest&&(0,V.jsx)(O.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:O.Color.Yellow})]}),u?(0,V.jsx)(O.Detail.Metadata.Label,{title:"Checks",text:u.text,icon:O.Icon[u.icon]}):null,(0,V.jsx)(O.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,V.jsx)(O.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,V.jsx)(O.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,V.jsx)(O.Detail.Metadata.Label,{title:"Created",text:(0,An.format)(new Date(r.createdAt),"dd MMM")}):null,(0,V.jsx)(O.Detail.Metadata.Label,{title:"Author",...c}),y.length>0?(0,V.jsx)(O.Detail.Metadata.TagList,{title:Se(y.length,"Reviewer"),children:y.map(I=>I?(0,V.jsx)(O.Detail.Metadata.TagList.Item,{...I},I.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,V.jsx)(O.Detail.Metadata.TagList,{title:Se(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(I=>{if(!I)return null;let M=F(I);return(0,V.jsx)(O.Detail.Metadata.TagList.Item,{...M},I.id)})}):null,r.labels&&r.labels.totalCount>0?(0,V.jsx)(O.Detail.Metadata.TagList,{title:Se(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(I=>I?(0,V.jsx)(O.Detail.Metadata.TagList.Item,{text:I.name,color:I.color},I.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,V.jsx)(O.Detail.Metadata.TagList,{title:Se(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(I=>I?(0,V.jsx)(O.Detail.Metadata.TagList.Item,{text:I.title},I.id):null)}):null,r.milestone?(0,V.jsx)(O.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,V.jsx)(Et,{pullRequest:r,viewer:n,mutateList:a,mutateDetail:l})})}var ft=require("react/jsx-runtime");function _a({pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let l=new Date(e.updatedAt),s=(0,Pn.useMemo)(()=>Hr(e),[e]),i=o?zt(e):null,u=mt(e),c=Wr(e.reviewDecision),y=[{text:(0,va.format)(l,"MMM dd"),tooltip:`Updated: ${(0,va.format)(l,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(y.unshift({text:{value:`${s}`,color:s>0?le.Color.PrimaryText:le.Color.SecondaryText},icon:le.Icon.Bubble}),y.unshift(c??{icon:{source:le.Icon.Circle,tintColor:le.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&y.unshift({tag:{value:"Auto-merge",color:le.Color.Yellow}}),e.commits.nodes){let M=e.commits.nodes[0]?.commit.statusCheckRollup?.state,S=M?Gt(M):null;S&&y.unshift(S)}i&&y.splice(y.length-1,0,{icon:i.icon,tooltip:`Author: ${i.text}`});let I=[`${e.number}`];return e.author?.login&&I.push(e.author.login),(0,ft.jsx)(le.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:u.icon,tooltip:`Status: ${u.text}`},keywords:I,accessories:y,actions:(0,ft.jsx)(Et,{pullRequest:e,viewer:a,mutateList:t,sortQuery:n,setSortQuery:r,children:(0,ft.jsx)(le.Action.Push,{title:"Show Details",icon:le.Icon.Sidebar,target:(0,ft.jsx)(Ua,{initialPullRequest:e,viewer:a,mutateList:t})})})},e.id)}var ge=require("react/jsx-runtime"),ji=20;function zi(e){return(0,ge.jsxs)(Z.List.Dropdown,{tooltip:"Status",value:e.value,onChange:a=>e.onChange(a),children:[(0,ge.jsx)(Z.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"pull-request-open.svg",tintColor:Z.Color.Green}}),(0,ge.jsx)(Z.List.Dropdown.Item,{value:"merged",title:"Merged",icon:{source:"pull-request-merged.svg",tintColor:Z.Color.Purple}}),(0,ge.jsx)(Z.List.Dropdown.Item,{value:"draft",title:"Draft",icon:{source:"pull-request-draft.svg",tintColor:Z.Color.SecondaryText}}),(0,ge.jsx)(Z.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"pull-request-closed.svg",tintColor:Z.Color.Red}}),(0,ge.jsx)(Z.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"pull-request-open.svg",tintColor:Z.Color.PrimaryText}})]})}function fn(e){let{github:a}=x(),[t,n]=(0,En.useState)(""),[r,o]=(0,Ct.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-pr"}),[l,s]=(0,Ct.useCachedState)("sort-query",Yr,{cacheNamespace:"github-repo-pr"}),i=r==="all"?"":`is:${r}`,{data:u,isLoading:c,mutate:y,pagination:I}=(0,Ct.useCachedPromise)((S,f,m,b)=>async A=>{let C=S&&S.length>0?`repo:${S}`:"",E=await a.searchPullRequests({query:`is:pr ${b} ${C} ${m} archived:false ${f}`.replace(/\s+/g," ").trim(),numberOfItems:ji,after:A.page>0?A.cursor:void 0});return{data:E.search.edges?.map(D=>D?.node).filter(D=>D!=null)??[],hasMore:E.search.pageInfo.hasNextPage,cursor:E.search.pageInfo.endCursor??void 0}},[e.repo,t,l,i]),M=De(u??[]);return(0,ge.jsx)(Z.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repo,throttle:!0,pagination:I,searchBarAccessory:(0,ge.jsx)(zi,{value:r,onChange:o}),children:(0,ge.jsx)(Z.List.Section,{title:"Pull Requests",subtitle:`${M.length}`,children:M.map(S=>(0,ge.jsx)(_a,{showAuthor:!0,pullRequest:S,mutateList:y,sortQuery:l,setSortQuery:s},S.id))})})}var We=require("@raycast/api");var Cn=require("@raycast/utils");var Gi=/\.(md|markdown|mdown|mkdn?)$/i;function Dn(e){let{octokit:a}=x(),[t,n]=e.nameWithOwner.split("/");return(0,Cn.useCachedPromise)(async(r,o)=>{try{let{data:l}=await a.repos.getReadme({owner:r,repo:o});if(l.encoding!=="base64"||!l.content)return{markdown:"> This README is too large to preview here. Open the repository in your browser to read it.",found:!0};let s=Buffer.from(l.content,"base64").toString("utf-8");return{markdown:Gi.test(l.name)?Vr(s,l.download_url??"",l.path):`\`\`\`
${s}
\`\`\``,found:!0}}catch(l){if(l.status===404)return{markdown:"",found:!1};throw l}},[t,n])}var ot=require("react/jsx-runtime");function Ta({repository:e}){let{data:a,isLoading:t}=Dn(e),n=a&&!a.found?`# ${e.nameWithOwner}

> This repository doesn't have a README.`:a?.markdown??"";return(0,ot.jsx)(We.Detail,{isLoading:t,navigationTitle:`${e.nameWithOwner} \xB7 README`,markdown:n,actions:(0,ot.jsxs)(We.ActionPanel,{title:e.nameWithOwner,children:[(0,ot.jsx)(We.Action.OpenInBrowser,{url:e.url}),(0,ot.jsx)(We.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL"})]})})}var ne=require("@raycast/api"),xn=require("@raycast/utils");var Ae=require("react/jsx-runtime"),Hi=25;function wa(e){let{github:a}=x(),[t,n]=e.repository.nameWithOwner.split("/"),{data:r,isLoading:o,pagination:l}=(0,xn.useCachedPromise)((i,u)=>async c=>{let I=(await a.repositoryReleases({owner:i,name:u,numberOfItems:Hi,after:c.page>0?c.cursor:void 0})).repository?.releases;return{data:I?.nodes?.filter(M=>M!=null)??[],hasMore:I?.pageInfo?.hasNextPage??!1,cursor:I?.pageInfo?.endCursor??void 0}},[t,n]),s=De(r??[]);return(0,Ae.jsx)(ne.List,{isLoading:o,navigationTitle:e.repository.nameWithOwner,pagination:l,children:s.map(i=>(0,Ae.jsx)(ne.List.Item,{title:i.name||i.tagName,subtitle:i.tagName,actions:(0,Ae.jsxs)(ne.ActionPanel,{title:i.tagName,children:[i.description&&(0,Ae.jsx)(ne.Action.Push,{icon:ne.Icon.Eye,title:"View Release Detail",target:(0,Ae.jsx)($i,{release:i})}),(0,Ae.jsx)(ne.Action.OpenInBrowser,{url:i.url})]}),accessories:i.publishedAt?[{date:new Date(i.publishedAt),tooltip:`Published at: ${new Date(i.publishedAt).toLocaleString()}`}]:void 0},i.id))})}function $i(e){return(0,Ae.jsx)(ne.Detail,{markdown:e.release.description,actions:(0,Ae.jsx)(ne.ActionPanel,{title:e.release.tagName,children:(0,Ae.jsx)(ne.Action.OpenInBrowser,{url:e.release.url})})})}var h=require("react/jsx-runtime");function Ba({repository:e,mutateList:a,onVisit:t,onUpdate:n,onRemove:r,setSortQuery:o,sortQuery:l,sortTypesData:s}){let{github:i}=x(),{baseClonePath:u,repositoryCloneProtocol:c,application:y}=(0,g.getPreferenceValues)(),{vscodeBuild:I}=(0,g.getPreferenceValues)(),M=I||"vscode";function S(b){let A={...e,viewerHasStarred:b,stargazerCount:Math.max(0,e.stargazerCount+(b?1:-1))};return n?.(A),A}async function f(){await(0,g.showToast)({style:g.Toast.Style.Animated,title:"Starring repository",message:e.name});try{await i.addStar({repositoryId:e.id});let b=S(!0);await a(void 0,{optimisticUpdate(A){return Array.isArray(A)?A.map(C=>C.id===b.id?{...C,...b}:C):A}}),await(0,g.showToast)({style:g.Toast.Style.Success,title:"Starred repository",message:e.name})}catch(b){await(0,g.showToast)({style:g.Toast.Style.Failure,title:"Failed starring repository",message:v(b)})}}async function m(){await(0,g.showToast)({style:g.Toast.Style.Animated,title:"Removing star from repository",message:e.name});try{await i.removeStar({repositoryId:e.id});let b=S(!1);await a(void 0,{optimisticUpdate(A){return Array.isArray(A)?A.map(C=>C.id===b.id?{...C,...b}:C):A}}),await(0,g.showToast)({style:g.Toast.Style.Success,title:"Removed star from repository",message:e.name})}catch(b){await(0,g.showToast)({style:g.Toast.Style.Failure,title:"Failed removing star from repository",message:v(b)})}}return(0,h.jsxs)(g.ActionPanel,{title:e.nameWithOwner,children:[(0,h.jsxs)(g.ActionPanel.Section,{children:[(0,h.jsx)(g.Action.OpenInBrowser,{url:e.url,onOpen:()=>t(e)}),(0,h.jsx)(g.ActionPanel.Submenu,{icon:g.Icon.Globe,title:"Open in Web IDE",shortcut:g.Keyboard.Shortcut.Common.Open,children:Dr.map(b=>(0,h.jsx)(g.Action.OpenInBrowser,{title:b.title,icon:b.icon||(0,hn.getFavicon)(b.baseUrl),url:b.baseUrl+e.nameWithOwner,shortcut:b.shortcut,onOpen:()=>t(e)},b.title))}),u&&y&&(0,h.jsx)(g.Action,{icon:g.Icon.Terminal,title:"Clone and Open (Default Path)",onAction:()=>{t(e),xr(e)},shortcut:g.Keyboard.Shortcut.Common.CopyName}),(0,h.jsx)(g.Action.Push,{icon:g.Icon.Terminal,title:"Clone with Options (Choose Path)",target:(0,h.jsx)(Ia,{repository:e}),shortcut:{modifiers:["cmd","opt","shift"],key:"c"},onPush:()=>t(e)}),(0,h.jsx)(g.Action.Push,{icon:g.Icon.Download,title:"Download as ZIP",target:(0,h.jsx)(Ma,{repository:e}),shortcut:{modifiers:["cmd","shift"],key:"d"},onPush:()=>t(e)}),(0,h.jsx)(g.Action.OpenInBrowser,{icon:{source:"vscode.svg",tintColor:g.Color.PrimaryText},title:"Clone in VS Code",url:`${M}://vscode.git/clone?url=${e.url}`,shortcut:g.Keyboard.Shortcut.Common.Copy,onOpen:()=>t(e)}),e.viewerHasStarred?(0,h.jsx)(g.Action,{title:"Unstar",icon:g.Icon.Star,onAction:m,shortcut:g.Keyboard.Shortcut.Common.Pin}):(0,h.jsx)(g.Action,{title:"Star",icon:{source:"star-filled.svg",tintColor:g.Color.PrimaryText},onAction:f,shortcut:g.Keyboard.Shortcut.Common.Pin})]}),(0,h.jsxs)(g.ActionPanel.Section,{title:"Open in Raycast",children:[(0,h.jsx)(g.Action.Push,{title:"Show Readme",icon:g.Icon.Book,shortcut:{modifiers:["cmd","opt"],key:"r"},target:(0,h.jsx)(Ta,{repository:e}),onPush:()=>t(e)}),(0,h.jsx)(g.Action.Push,{title:"Show Issues",icon:{source:"issue-open.svg",tintColor:g.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"i"},target:(0,h.jsx)(Sn,{repo:e.nameWithOwner}),onPush:()=>t(e)}),(0,h.jsx)(g.Action.Push,{title:"Show Pull Requests",icon:{source:"pull-request-open.svg",tintColor:g.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"m"},target:(0,h.jsx)(fn,{repo:e.nameWithOwner}),onPush:()=>t(e)}),(0,h.jsx)(g.Action.Push,{icon:g.Icon.List,title:"Show Releases",shortcut:{modifiers:["cmd","shift"],key:"r"},target:(0,h.jsx)(wa,{repository:e}),onPush:()=>t(e)}),(0,h.jsx)(g.Action.Push,{icon:g.Icon.SpeechBubble,title:"Show Discussions",shortcut:{modifiers:["cmd","ctrl","opt"],key:"d"},target:(0,h.jsx)(rn,{repository:e.nameWithOwner}),onPush:()=>t(e)})]}),(0,h.jsxs)(g.ActionPanel.Section,{title:"Open in Browser",children:[(0,h.jsx)(g.Action.OpenInBrowser,{icon:{source:"pull-request-open.svg",tintColor:g.Color.PrimaryText},title:"Open Pull Requests",url:`${e.url}/pulls`,shortcut:{modifiers:["cmd","shift"],key:"m"},onOpen:()=>t(e)}),(0,h.jsx)(g.Action.OpenInBrowser,{icon:{source:"issue-open.svg",tintColor:g.Color.PrimaryText},title:"Open Issues",url:`${e.url}/issues`,shortcut:{modifiers:["cmd","shift"],key:"i"},onOpen:()=>t(e)}),(0,h.jsx)(g.Action.OpenInBrowser,{icon:{source:"book.svg",tintColor:g.Color.PrimaryText},title:"Open Wiki",url:`${e.url}/wiki`,shortcut:{modifiers:["cmd","shift"],key:"w"},onOpen:()=>t(e)}),(0,h.jsx)(g.Action.OpenInBrowser,{icon:{source:"project.svg",tintColor:g.Color.PrimaryText},title:"Open Projects",url:`${e.url}/projects`,shortcut:{modifiers:["cmd","shift","opt"],key:"p"},onOpen:()=>t(e)}),(0,h.jsx)(g.Action.OpenInBrowser,{icon:g.Icon.SpeechBubble,title:"Open Discussions",url:`${e.url}/discussions`,onOpen:()=>t(e)})]}),(0,h.jsxs)(g.ActionPanel.Section,{children:[(0,h.jsx)(g.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL",shortcut:g.Keyboard.Shortcut.Common.CopyPath}),(0,h.jsx)(g.Action.CopyToClipboard,{content:Br(e.nameWithOwner,c),title:"Copy Clone Command",shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,h.jsx)(g.Action.CopyToClipboard,{content:e.nameWithOwner,title:"Copy Name with Owner",shortcut:g.Keyboard.Shortcut.Common.CopyName}),(0,h.jsx)(g.Action.CopyToClipboard,{content:e.name,title:"Copy Repository Name"}),(0,h.jsx)(g.Action.CopyToClipboard,{content:e.owner.login,title:"Copy Repository Owner"})]}),(0,h.jsx)(g.ActionPanel.Section,{children:(0,h.jsx)(qe,{data:s,sortQuery:l,setSortQuery:o})}),r?(0,h.jsx)(g.ActionPanel.Section,{children:(0,h.jsx)(g.Action,{title:"Remove from Recently Visited",icon:g.Icon.Trash,style:g.Action.Style.Destructive,shortcut:g.Keyboard.Shortcut.Common.Remove,onAction:()=>r(e)})}):null]})}var Oa=require("react/jsx-runtime");function ea({repository:e,mutateList:a,onVisit:t,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:l,sortTypesData:s}){let i=F(e.owner),u=e.stargazerCount,c=e.pushedAt?new Date(e.pushedAt):e.updatedAt?new Date(e.updatedAt):void 0,y=[],I=e.primaryLanguage,M=c?(0,Fe.isToday)(c)?`${(0,Fe.differenceInHours)(Date.now(),c)}h`:(0,Fe.format)(c,"MMM d"):void 0;if(I||M){let f=[I?.name,M].filter(Boolean),m=[I?`Language: ${I.name}`:void 0,c?`Updated ${(0,Fe.formatDistanceToNow)(c,{addSuffix:!0})}`:void 0].filter(Boolean);y.push({text:f.join(" \u2022 "),tooltip:m.join(" \u2022 ")})}e.isArchived&&y.unshift({tag:{value:"",color:Ke.Color.Orange},icon:Ke.Icon.Tray,tooltip:"This repository is archived"}),e.isFork&&y.unshift({icon:{source:"fork.svg",tintColor:Ke.Color.Purple},tooltip:"This repository is a fork"});let S=e.viewerHasStarred?"\u2605":"\u2606";return(0,Oa.jsx)(Ke.List.Item,{icon:i.icon,title:e.nameWithOwner,...u>0?{subtitle:{value:`${S} ${u}`,tooltip:e.viewerHasStarred?"Starred \xB7 Number of Stars":"Number of Stars"}}:{},accessories:y,actions:(0,Oa.jsx)(Ba,{repository:e,onVisit:t,onUpdate:n,onRemove:r,mutateList:a,sortQuery:o,setSortQuery:l,sortTypesData:s})})}var Un=require("@raycast/utils");var vn=(0,Un.withAccessToken)(gr);var Ye=require("react/jsx-runtime");function Qi(){let{github:e}=x(),{data:a,visitRepository:t,updateRepository:n,removeRepository:r}=hr(void 0,null),[o,l]=(0,aa.useCachedState)("sort-query",Ur,{cacheNamespace:"github-my-latest-repo"}),s=Sa,{data:i,isLoading:u,mutate:c,pagination:y}=(0,aa.useCachedPromise)(b=>async({cursor:A})=>{let C=b.split(":")[0].toUpperCase(),E=b.split(":")[1].toUpperCase(),D=await e.myLatestRepositories({numberOfItems:Mr(),after:A,orderByField:C,orderByDirection:E});return{data:Xr(D.viewer.repositories.nodes),hasMore:D.viewer.repositories.pageInfo.hasNextPage,cursor:D.viewer.repositories.pageInfo.endCursor??void 0}},[o],{keepPreviousData:!0}),I=(0,ke.useMemo)(()=>De(i??[]),[i]),M=(0,ke.useMemo)(()=>new Set(I.map(b=>b.id)),[I]);(0,ke.useEffect)(()=>a.forEach(b=>I.find(A=>A.id===b.id&&t(A))),[I]);let S=(0,ke.useMemo)(()=>a.filter(b=>M.has(b.id)),[a,M]),f=(0,ke.useMemo)(()=>new Set(S.map(b=>b.id)),[S]),m=(0,ke.useMemo)(()=>I.filter(b=>!f.has(b.id)),[f,I]);return(0,Ye.jsxs)(ta.List,{isLoading:u,throttle:!0,pagination:y,children:[(0,Ye.jsx)(ta.List.Section,{title:"Visited Repositories",subtitle:S?String(S.length):void 0,children:S.map(b=>(0,Ye.jsx)(ea,{repository:b,mutateList:c,onVisit:t,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:l,sortTypesData:s},b.id))}),i?(0,Ye.jsx)(ta.List.Section,{title:"My Latest Repositories",subtitle:`${m.length}`,children:m.map(b=>(0,Ye.jsx)(ea,{repository:b,mutateList:c,onVisit:t,onUpdate:n,sortQuery:o,setSortQuery:l,sortTypesData:s},b.id))}):null]})}var Wi=vn(Qi);
