"use strict";var Jt=Object.create;var Ce=Object.defineProperty;var ea=Object.getOwnPropertyDescriptor;var ta=Object.getOwnPropertyNames;var aa=Object.getPrototypeOf,ra=Object.prototype.hasOwnProperty;var ze=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var re=(t,a)=>{for(var e in a)Ce(t,e,{get:a[e],enumerable:!0})},Ee=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of ta(a))!ra.call(t,n)&&n!==e&&Ce(t,n,{get:()=>a[n],enumerable:!(r=ea(a,n))||r.enumerable});return t},D=(t,a,e)=>(Ee(t,a,"default"),e&&Ee(e,a,"default")),q=(t,a,e)=>(e=t!=null?Jt(aa(t)):{},Ee(a||!t||!t.__esModule?Ce(e,"default",{value:t,enumerable:!0}):e,t)),na=t=>Ee(Ce({},"__esModule",{value:!0}),t);var x={};re(x,{default:()=>rt.default});var rt,Ue=ze(()=>{D(x,require("formdata-polyfill/esm.min.js"));rt=q(require("formdata-polyfill/esm.min.js"))});var h={};re(h,{default:()=>st.default});var st,He=ze(()=>{D(h,require("fetch-blob/from.js"));st=q(require("fetch-blob/from.js"))});var pt={};re(pt,{toFormData:()=>ca});function la(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function ca(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Qe(e[1]||e[2]),n,o,u,c,p,s,y=[],P=new x.FormData,O=d=>{u+=S.decode(d,{stream:!0})},N=d=>{y.push(d)},l=()=>{let d=new h.File(y,s,{type:p});P.append(c,d)},f=()=>{P.append(c,u)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=O,r.onPartEnd=f,n="",o="",u="",c="",p="",s=null,y.length=0},r.onHeaderField=function(d){n+=S.decode(d,{stream:!0})},r.onHeaderValue=function(d){o+=S.decode(d,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let d=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);d&&(c=d[2]||d[3]||""),s=la(o),s&&(r.onPartData=N,r.onPartEnd=l)}else n==="content-type"&&(p=o);o="",n=""};for await(let d of t)r.write(d);return r.end(),P}var H,I,ut,X,ve,he,oa,Se,ia,sa,ua,pa,ee,Qe,lt=ze(()=>{He();Ue();H=0,I={START_BOUNDARY:H++,HEADER_FIELD_START:H++,HEADER_FIELD:H++,HEADER_VALUE_START:H++,HEADER_VALUE:H++,HEADER_VALUE_ALMOST_DONE:H++,HEADERS_ALMOST_DONE:H++,PART_DATA_START:H++,PART_DATA:H++,END:H++},ut=1,X={PART_BOUNDARY:ut,LAST_BOUNDARY:ut*=2},ve=10,he=13,oa=32,Se=45,ia=58,sa=97,ua=122,pa=t=>t|32,ee=()=>{},Qe=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=ee,this.onHeaderField=ee,this.onHeadersEnd=ee,this.onHeaderValue=ee,this.onPartBegin=ee,this.onPartData=ee,this.onPartEnd=ee,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=I.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:c,index:p,state:s,flags:y}=this,P=this.boundary.length,O=P-1,N=a.length,l,f,S=b=>{this[b+"Mark"]=e},d=b=>{delete this[b+"Mark"]},E=(b,C,g,pe)=>{(C===void 0||C!==g)&&this[b](pe&&pe.subarray(C,g))},Z=(b,C)=>{let g=b+"Mark";g in this&&(C?(E(b,this[g],e,a),delete this[g]):(E(b,this[g],a.length,a),this[g]=0))};for(e=0;e<r;e++)switch(l=a[e],s){case I.START_BOUNDARY:if(p===u.length-2){if(l===Se)y|=X.LAST_BOUNDARY;else if(l!==he)return;p++;break}else if(p-1===u.length-2){if(y&X.LAST_BOUNDARY&&l===Se)s=I.END,y=0;else if(!(y&X.LAST_BOUNDARY)&&l===ve)p=0,E("onPartBegin"),s=I.HEADER_FIELD_START;else return;break}l!==u[p+2]&&(p=-2),l===u[p+2]&&p++;break;case I.HEADER_FIELD_START:s=I.HEADER_FIELD,S("onHeaderField"),p=0;case I.HEADER_FIELD:if(l===he){d("onHeaderField"),s=I.HEADERS_ALMOST_DONE;break}if(p++,l===Se)break;if(l===ia){if(p===1)return;Z("onHeaderField",!0),s=I.HEADER_VALUE_START;break}if(f=pa(l),f<sa||f>ua)return;break;case I.HEADER_VALUE_START:if(l===oa)break;S("onHeaderValue"),s=I.HEADER_VALUE;case I.HEADER_VALUE:l===he&&(Z("onHeaderValue",!0),E("onHeaderEnd"),s=I.HEADER_VALUE_ALMOST_DONE);break;case I.HEADER_VALUE_ALMOST_DONE:if(l!==ve)return;s=I.HEADER_FIELD_START;break;case I.HEADERS_ALMOST_DONE:if(l!==ve)return;E("onHeadersEnd"),s=I.PART_DATA_START;break;case I.PART_DATA_START:s=I.PART_DATA,S("onPartData");case I.PART_DATA:if(n=p,p===0){for(e+=O;e<N&&!(a[e]in c);)e+=P;e-=O,l=a[e]}if(p<u.length)u[p]===l?(p===0&&Z("onPartData",!0),p++):p=0;else if(p===u.length)p++,l===he?y|=X.PART_BOUNDARY:l===Se?y|=X.LAST_BOUNDARY:p=0;else if(p-1===u.length)if(y&X.PART_BOUNDARY){if(p=0,l===ve){y&=~X.PART_BOUNDARY,E("onPartEnd"),E("onPartBegin"),s=I.HEADER_FIELD_START;break}}else y&X.LAST_BOUNDARY&&l===Se?(E("onPartEnd"),s=I.END,y=0):p=0;if(p>0)o[p-1]=l;else if(n>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);E("onPartData",0,n,b),n=0,S("onPartData"),e--}break;case I.END:break;default:throw new Error(`Unexpected state entered: ${s}`)}Z("onHeaderField"),Z("onHeaderValue"),Z("onPartData"),this.index=p,this.state=s,this.flags=y}end(){if(this.state===I.HEADER_FIELD_START&&this.index===0||this.state===I.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==I.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Br={};re(Br,{default:()=>wr});module.exports=na(Br);var v=require("@raycast/api"),ue=require("react");var m=require("@raycast/api");function fe(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var zt=require("@raycast/utils");var ht=require("@octokit/rest"),Tt=require("@raycast/api"),wt=require("@raycast/utils"),Bt=require("graphql-request");var ft=q(require("node:http"),1),Dt=q(require("node:https"),1),ae=q(require("node:zlib"),1),B=q(require("node:stream"),1),Ie=require("node:buffer");var le={};re(le,{default:()=>De.default});D(le,require("data-uri-to-buffer"));var De=q(require("data-uri-to-buffer"));var L=q(require("node:stream"),1),Y=require("node:util"),T=require("node:buffer");var ce={};re(ce,{default:()=>xe.default});D(ce,require("fetch-blob"));var xe=q(require("fetch-blob"));Ue();var K=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var U=class extends K{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var _e=Symbol.toStringTag,Ge=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[_e]==="URLSearchParams",ye=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[_e]),nt=t=>typeof t=="object"&&(t[_e]==="AbortSignal"||t[_e]==="EventTarget"),ot=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},it=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var ya=(0,Y.promisify)(L.default.pipeline),_=Symbol("Body internals"),Q=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:Ge(a)?a=T.Buffer.from(a.toString()):ye(a)||T.Buffer.isBuffer(a)||(Y.types.isAnyArrayBuffer(a)?a=T.Buffer.from(a):ArrayBuffer.isView(a)?a=T.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof L.default||(a instanceof x.FormData?(a=(0,x.formDataToBlob)(a),r=a.type.split("=")[1]):a=T.Buffer.from(String(a))));let n=a;T.Buffer.isBuffer(a)?n=L.default.Readable.from(a):ye(a)&&(n=L.default.Readable.from(a.stream())),this[_]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof L.default&&a.on("error",o=>{let u=o instanceof K?o:new U(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[_].error=u})}get body(){return this[_].stream}get bodyUsed(){return this[_].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await $e(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new x.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:e}=await Promise.resolve().then(()=>(lt(),pt));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[_].body&&this[_].body.type||"",e=await this.arrayBuffer();return new xe.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await $e(this);return new TextDecoder().decode(a)}buffer(){return $e(this)}};Q.prototype.buffer=(0,Y.deprecate)(Q.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Q.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Y.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function $e(t){if(t[_].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[_].disturbed=!0,t[_].error)throw t[_].error;let{body:a}=t;if(a===null)return T.Buffer.alloc(0);if(!(a instanceof L.default))return T.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new U(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof K?n:new U(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?T.Buffer.from(e.join("")):T.Buffer.concat(e,r)}catch(n){throw new U(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new U(`Premature close of server response while trying to fetch ${t.url}`)}var ne=(t,a)=>{let e,r,{body:n}=t[_];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof L.default&&typeof n.getBoundary!="function"&&(e=new L.PassThrough({highWaterMark:a}),r=new L.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[_].stream=e,n=r),n},Sa=(0,Y.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Te=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Ge(t)?"application/x-www-form-urlencoded;charset=UTF-8":ye(t)?t.type||null:T.Buffer.isBuffer(t)||Y.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof x.FormData?`multipart/form-data; boundary=${a[_].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${Sa(t)}`:t instanceof L.default?null:"text/plain;charset=UTF-8",ct=t=>{let{body:a}=t[_];return a===null?0:ye(a)?a.size:T.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},yt=async(t,{body:a})=>{a===null?t.end():await ya(a,t)};var We=require("node:util"),de=q(require("node:http"),1),we=typeof de.default.validateHeaderName=="function"?de.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Ke=typeof de.default.validateHeaderValue=="function"?de.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},w=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(u=>[n,u]))}else if(a!=null)if(typeof a=="object"&&!We.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||We.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(we(r),Ke(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,c)=>(we(u),Ke(u,String(c)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return u=>(we(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(w.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function St(t=[]){return new w(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return we(a),Ke(a,String(e)),!0}catch{return!1}}))}var da=new Set([301,302,303,307,308]),Be=t=>da.has(t);var F=Symbol("Response internals"),V=class t extends Q{constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new w(e.headers);if(a!==null&&!n.has("Content-Type")){let o=Te(a,this);o&&n.append("Content-Type",o)}this[F]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[F].type}get url(){return this[F].url||""}get status(){return this[F].status}get ok(){return this[F].status>=200&&this[F].status<300}get redirected(){return this[F].counter>0}get statusText(){return this[F].statusText}get headers(){return this[F].headers}get highWaterMark(){return this[F].highWaterMark}clone(){return new t(ne(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!Be(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[F].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new w(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(V.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Pt=require("node:url"),Et=require("node:util");var dt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var It=require("node:net");function bt(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var gt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Mt="strict-origin-when-cross-origin";function mt(t){if(!gt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function ba(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,It.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function oe(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:ba(t)}function Rt(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=bt(n),u=bt(n,!0);o.toString().length>4096&&(o=u),a&&(o=a(o)),e&&(u=e(u));let c=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return oe(o)&&!oe(c)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:oe(o)&&!oe(c)?"no-referrer":u;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:u;case"no-referrer-when-downgrade":return oe(o)&&!oe(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function At(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&gt.has(r)&&(e=r);return e}var R=Symbol("Request internals"),be=t=>typeof t=="object"&&typeof t[R]=="object",Ia=(0,Et.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),te=class t extends Q{constructor(a,e={}){let r;if(be(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!be(e)&&"data"in e&&Ia(),(e.body!=null||be(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:be(a)&&a.body!==null?ne(a):null;super(o,{size:e.size||a.size||0});let u=new w(e.headers||a.headers||{});if(o!==null&&!u.has("Content-Type")){let s=Te(o,this);s&&u.set("Content-Type",s)}let c=be(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!nt(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let p=e.referrer==null?a.referrer:e.referrer;if(p==="")p="no-referrer";else if(p){let s=new URL(p);p=/^about:(\/\/)?client$/.test(s)?"client":s}else p=void 0;this[R]={method:n,redirect:e.redirect||a.redirect||"follow",headers:u,parsedURL:r,signal:c,referrer:p},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[R].method}get url(){return(0,Pt.format)(this[R].parsedURL)}get headers(){return this[R].headers}get redirect(){return this[R].redirect}get signal(){return this[R].signal}get referrer(){if(this[R].referrer==="no-referrer")return"";if(this[R].referrer==="client")return"about:client";if(this[R].referrer)return this[R].referrer.toString()}get referrerPolicy(){return this[R].referrerPolicy}set referrerPolicy(a){this[R].referrerPolicy=mt(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(te.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Ct=t=>{let{parsedURL:a}=t[R],e=new w(t[R].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let c=ct(t);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=Mt),t.referrer&&t.referrer!=="no-referrer"?t[R].referrer=Rt(t):t[R].referrer="no-referrer",t[R].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=dt(a),u={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:u}};var Oe=class extends K{constructor(a,e="aborted"){super(a,e)}};Ue();He();var ga=new Set(["data:","http:","https:"]);async function Le(t,a){return new Promise((e,r)=>{let n=new te(t,a),{parsedURL:o,options:u}=Ct(n);if(!ga.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,De.default)(n.url),f=new V(l,{headers:{"Content-Type":l.typeFull}});e(f);return}let c=(o.protocol==="https:"?Dt.default:ft.default).request,{signal:p}=n,s=null,y=()=>{let l=new Oe("The operation was aborted.");r(l),n.body&&n.body instanceof B.default.Readable&&n.body.destroy(l),!(!s||!s.body)&&s.body.emit("error",l)};if(p&&p.aborted){y();return}let P=()=>{y(),N()},O=c(o.toString(),u);p&&p.addEventListener("abort",P);let N=()=>{O.abort(),p&&p.removeEventListener("abort",P)};O.on("error",l=>{r(new U(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),N()}),Ma(O,l=>{s&&s.body&&s.body.destroy(l)}),process.version<"v14"&&O.on("socket",l=>{let f;l.prependListener("end",()=>{f=l._eventsCount}),l.prependListener("close",S=>{if(s&&f<l._eventsCount&&!S){let d=new Error("Premature close");d.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",d)}})}),O.on("response",l=>{O.setTimeout(0);let f=St(l.rawHeaders);if(Be(l.statusCode)){let b=f.get("Location"),C=null;try{C=b===null?null:new URL(b,n.url)}catch{if(n.redirect!=="manual"){r(new U(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),N();return}}switch(n.redirect){case"error":r(new U(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),N();return;case"manual":break;case"follow":{if(C===null)break;if(n.counter>=n.follow){r(new U(`maximum redirect reached at: ${n.url}`,"max-redirect")),N();return}let g={headers:new w(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ne(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!ot(n.url,C)||!it(n.url,C))for(let Xt of["authorization","www-authenticate","cookie","cookie2"])g.headers.delete(Xt);if(l.statusCode!==303&&n.body&&a.body instanceof B.default.Readable){r(new U("Cannot follow redirect with body being a readable stream","unsupported-redirect")),N();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(g.method="GET",g.body=void 0,g.headers.delete("content-length"));let pe=At(f);pe&&(g.referrerPolicy=pe),e(Le(new te(C,g))),N();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}p&&l.once("end",()=>{p.removeEventListener("abort",P)});let S=(0,B.pipeline)(l,new B.PassThrough,b=>{b&&r(b)});process.version<"v12.10"&&l.on("aborted",P);let d={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:f,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},E=f.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||E===null||l.statusCode===204||l.statusCode===304){s=new V(S,d),e(s);return}let Z={flush:ae.default.Z_SYNC_FLUSH,finishFlush:ae.default.Z_SYNC_FLUSH};if(E==="gzip"||E==="x-gzip"){S=(0,B.pipeline)(S,ae.default.createGunzip(Z),b=>{b&&r(b)}),s=new V(S,d),e(s);return}if(E==="deflate"||E==="x-deflate"){let b=(0,B.pipeline)(l,new B.PassThrough,C=>{C&&r(C)});b.once("data",C=>{(C[0]&15)===8?S=(0,B.pipeline)(S,ae.default.createInflate(),g=>{g&&r(g)}):S=(0,B.pipeline)(S,ae.default.createInflateRaw(),g=>{g&&r(g)}),s=new V(S,d),e(s)}),b.once("end",()=>{s||(s=new V(S,d),e(s))});return}if(E==="br"){S=(0,B.pipeline)(S,ae.default.createBrotliDecompress(),b=>{b&&r(b)}),s=new V(S,d),e(s);return}s=new V(S,d),e(s)}),yt(O,n).catch(r)})}function Ma(t,a){let e=Ie.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",u=>{let{headers:c}=u;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",u=>{let c=()=>{if(r&&!n){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",a(s)}},p=s=>{n=Ie.Buffer.compare(s.slice(-5),e)===0,!n&&o&&(n=Ie.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&Ie.Buffer.compare(s.slice(-2),e.slice(3))===0),o=s};u.prependListener("close",c),u.on("data",p),t.on("close",()=>{u.removeListener("close",c),u.removeListener("data",p)})})}var i=q(require("graphql-tag")),ge=i.default`
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
`,ma=i.default`
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
  ${ge}
`,$=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Me=i.default`
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
  ${$}
`,Ve=i.default`
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
  ${Me}
  ${ge}
  ${$}
`,Ra=i.default`
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
  ${Me}
  ${ge}
  ${$}
`,Aa=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,xt=i.default`
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
  ${Me}
  ${Aa}
`,Ut=i.default`
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
  ${ge}
  ${Me}
  ${$}
`,Pa=i.default`
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
  ${ge}
  ${Me}
  ${$}
`,Ea=i.default`
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
`,_t=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Ye=i.default`
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
`,Ca=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,fa=i.default`
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
`,Da=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,xa=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ua=i.default`
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
  ${ma}
`,_a=i.default`
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
`,va=i.default`
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
  ${$}
`,ha=i.default`
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
`,Ta=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Ra}
`,wa=i.default`
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
  ${Ve}
`,Ba=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ve}
`,Oa=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,La=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Va=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Na=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,qa=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Fa=i.default`
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
  ${Ve}
`,ka=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ja=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${xt}
`,za=i.default`
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
  ${Ut}
`,Ga=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Pa}
`,Ha=i.default`
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
  ${$}
`,Qa=i.default`
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
`,$a=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ea}
`,Wa=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ya=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Za=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Xa=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ja=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,er=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,tr=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,ar=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,rr=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,nr=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,or=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,ir=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,sr=i.default`
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
`,ur=i.default`
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
  ${Ut}
`,pr=i.default`
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
  ${Ye}
`,lr=i.default`
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
  ${Ye}
`,cr=i.default`
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
`,yr=i.default`
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
`,Sr=i.default`
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
  ${_t}
  ${$}
`,dr=i.default`
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
  ${_t}
`,br=i.default`
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
  ${Ve}
`,Ir=i.default`
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
  ${Ca}
`,gr=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Mr=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,mr=i.default`
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
  ${Ye}
`,Rr=i.default`
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
  ${$}
  ${xt}
`,Ar=i.default`
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
  ${$}
`,Pr=i.default`
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
`,Er=(t,a,e,r)=>t();function vt(t,a=Er){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:cr,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:yr,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:Sr,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:dr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:br,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:Ir,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:gr,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:Mr,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:mr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:Rr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:Ar,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:Pr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var Ze=null,Xe=null,Ot=null,Cr=(0,Tt.getPreferenceValues)();function fr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;Ot=t,Ze=vt(new Bt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Xe=new ht.Octokit({auth:t,request:{fetch:Le}})}var Lt=wt.OAuthService.github({personalAccessToken:Cr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:fr});function Ne(){if(!Ze||!Xe)throw new Error("GitHub clients not initialized");return{github:Ze,octokit:Xe,token:Ot}}var W=require("@raycast/api"),ie=["container","npm","maven","docker","nuget","rubygems"],me=100,Vt=5,Dr={container:"Container",npm:"npm",maven:"Maven",docker:"Docker",nuget:"NuGet",rubygems:"RubyGems"},xr={container:W.Color.Blue,npm:W.Color.Red,maven:W.Color.Orange,docker:W.Color.SecondaryText,nuget:W.Color.Purple,rubygems:W.Color.Magenta};function J(t){return Dr[t]??t}function se(t){return{source:W.Icon.Box,tintColor:xr[t]??W.Color.PrimaryText}}function Nt(t){return t.visibility==="private"}function qt(t){return typeof t.version_count=="number"?t.version_count:void 0}function Ft(t){return[...t].sort((a,e)=>new Date(e.updated_at).getTime()-new Date(a.updated_at).getTime())}function kt(t){return ie.flatMap(a=>{let e=t.filter(r=>r.package_type===a);return e.length===0?[]:[{packageType:a,title:J(a),packages:e}]})}function jt(t){return t.metadata?.container?.tags??t.metadata?.docker?.tag??[]}var Ae="read:packages",Re=class extends Error{constructor(){super(`Your GitHub token is missing the "${Ae}" scope.`),this.name="MissingPackagesScopeError"}};function Ur(t){let a=t;return a?.response?.data?.message??a?.message??""}function _r(t){return t?.status!==403?!1:Ur(t).toLowerCase().includes(Ae)}async function vr(t,a){let e=[];for(let r=1;r<=Vt;r++){let{data:n}=await t.request("GET /user/packages",{package_type:a,per_page:me,page:r});if(e.push(...n),n.length<me)break}return e}function Gt(){let{octokit:t}=Ne();return(0,zt.useCachedPromise)(async()=>{let a=await Promise.allSettled(ie.map(n=>vr(t,n)));if(a.every(n=>n.status==="rejected")){let n=a;throw n.some(o=>_r(o.reason))?new Re:n[0].reason}let e=a.flatMap(n=>n.status==="fulfilled"?n.value:[]),r=ie.filter((n,o)=>a[o].status==="rejected");return{packages:Ft(e),failedTypes:r}},[],{keepPreviousData:!0})}var k=require("react/jsx-runtime");function Je({isLoading:t,error:a}){return a instanceof Re?(0,k.jsx)(m.List.EmptyView,{icon:m.Icon.Lock,title:"Missing Packages Scope",description:`Listing packages requires the "${Ae}" scope. Sign out and sign back in, or use a personal access token that has it.`,actions:(0,k.jsxs)(m.ActionPanel,{children:[(0,k.jsx)(m.Action,{title:"Open Extension Preferences",icon:m.Icon.Gear,onAction:m.openExtensionPreferences}),(0,k.jsx)(m.Action.OpenInBrowser,{title:"Create a Personal Access Token",url:`https://github.com/settings/tokens/new?description=Raycast&scopes=repo,read:org,read:user,project,notifications,${Ae}`})]})}):a?(0,k.jsx)(m.List.EmptyView,{icon:m.Icon.Warning,title:"Failed to Load Packages",description:fe(a)}):t?(0,k.jsx)(m.List.EmptyView,{title:"Loading packages..."}):(0,k.jsx)(m.List.EmptyView,{icon:m.Icon.Box,title:"No Packages",description:"You haven't published any package to GitHub Packages yet.",actions:(0,k.jsx)(m.ActionPanel,{children:(0,k.jsx)(m.Action.OpenInBrowser,{title:"Learn About GitHub Packages",url:"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages"})})})}var M=require("@raycast/api"),Fe=require("date-fns");var Qt=require("@raycast/api"),hr=require("lodash");var Ht=require("@raycast/api");function $t(t,a,{suffix:e="s",withNumber:r=!1}={}){let n=`${a}${t!==1?e:""}`;return r?`${t} ${n}`:n}var A=require("@raycast/api"),qe=require("date-fns");var Wt=require("@raycast/utils");function Kt(t){let{octokit:a}=Ne();return(0,Wt.useCachedPromise)((e,r)=>async({page:n})=>{let{data:o,headers:u}=await a.request("GET /user/packages/{package_type}/{package_name}/versions",{package_type:e,package_name:r,per_page:me,page:n+1});return{data:o,hasMore:u.link?.includes('rel="next"')??!1}},[t.package_type,t.name])}var j=require("react/jsx-runtime");function et({pkg:t}){let{data:a,isLoading:e,error:r,pagination:n}=Kt(t),o=a??[],u=o.length>0?`${o.length}${n?.hasMore?"+":""}`:void 0;return(0,j.jsxs)(A.List,{isLoading:e,navigationTitle:t.name,searchBarPlaceholder:"Filter versions",pagination:n,children:[(0,j.jsx)(A.List.Section,{title:"Versions",subtitle:u,children:o.map(c=>{let p=jt(c),s=new Date(c.created_at),y=c.html_url??t.html_url;return(0,j.jsx)(A.List.Item,{icon:se(t.package_type),title:c.name,subtitle:p.length>0?p.join(", "):void 0,accessories:[{date:s,tooltip:`Published ${(0,qe.format)(s,"dd MMM yyyy 'at' HH:mm")} (${(0,qe.formatDistanceToNow)(s,{addSuffix:!0})})`}],actions:(0,j.jsxs)(A.ActionPanel,{title:`Version: ${c.name}`,children:[(0,j.jsx)(A.Action.OpenInBrowser,{title:"Open in GitHub",icon:A.Icon.Globe,url:y}),(0,j.jsx)(A.Action.CopyToClipboard,{title:"Copy Version Name",content:c.name,shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,j.jsx)(A.Action.CopyToClipboard,{title:"Copy Version URL",content:y,shortcut:{modifiers:["cmd","shift"],key:","}})]})},c.id)})}),r?(0,j.jsx)(A.List.EmptyView,{icon:A.Icon.Warning,title:"Failed to Load Versions",description:fe(r)}):(0,j.jsx)(A.List.EmptyView,{icon:{source:A.Icon.Box,tintColor:A.Color.SecondaryText},title:"No Versions",description:"This package doesn't have any published version."})]})}var z=require("react/jsx-runtime");function tt({pkg:t}){let a=new Date(t.updated_at),e=qt(t),r=[];return Nt(t)&&r.push({icon:{source:M.Icon.Lock,tintColor:M.Color.Orange},tooltip:"This package is private"}),e!==void 0&&r.push({text:`${e}`,icon:{source:M.Icon.Tag,tintColor:M.Color.SecondaryText},tooltip:$t(e,"version",{withNumber:!0})}),r.push({date:a,tooltip:`Updated ${(0,Fe.format)(a,"dd MMM yyyy 'at' HH:mm")} (${(0,Fe.formatDistanceToNow)(a,{addSuffix:!0})})`}),(0,z.jsx)(M.List.Item,{icon:se(t.package_type),title:t.name,subtitle:t.repository?.full_name??J(t.package_type),keywords:[t.package_type,J(t.package_type)],accessories:r,actions:(0,z.jsxs)(M.ActionPanel,{title:`Package: ${t.name}`,children:[(0,z.jsx)(M.Action.OpenInBrowser,{title:"Open in GitHub",icon:M.Icon.Globe,url:t.html_url}),(0,z.jsx)(M.Action.Push,{title:"Show Versions",icon:M.Icon.Tag,shortcut:{modifiers:["cmd"],key:"v"},target:(0,z.jsx)(et,{pkg:t})}),t.repository?(0,z.jsx)(M.Action.OpenInBrowser,{title:"Open Repository",icon:M.Icon.Folder,url:t.repository.html_url,shortcut:{modifiers:["cmd"],key:"r"}}):null,(0,z.jsxs)(M.ActionPanel.Section,{children:[(0,z.jsx)(M.Action.CopyToClipboard,{title:"Copy Package Name",content:t.name,shortcut:{modifiers:["cmd","shift"],key:"."}}),(0,z.jsx)(M.Action.CopyToClipboard,{title:"Copy Package URL",content:t.html_url,shortcut:{modifiers:["cmd","shift"],key:","}})]})]})})}var ke=require("@raycast/api");var Pe=require("react/jsx-runtime"),je="all";function at({packageTypes:t,setPackageType:a}){let e=ie.filter(r=>t.includes(r));return(0,Pe.jsxs)(ke.List.Dropdown,{tooltip:"Filter by Package Type",storeValue:!0,onChange:a,children:[(0,Pe.jsx)(ke.List.Dropdown.Item,{title:"All Types",value:je}),e.map(r=>(0,Pe.jsx)(ke.List.Dropdown.Item,{title:J(r),value:r,icon:se(r)},r))]})}var Yt=require("@raycast/utils");var Zt=(0,Yt.withAccessToken)(Lt);var G=require("react/jsx-runtime");function Tr(){let{data:t,isLoading:a,error:e,revalidate:r}=Gt(),[n,o]=(0,ue.useState)(je),u=(0,ue.useMemo)(()=>t?.packages??[],[t]),c=t?.failedTypes??[],p=(0,ue.useMemo)(()=>[...new Set(u.map(y=>y.package_type))],[u]),s=(0,ue.useMemo)(()=>{let y=n===je?u:u.filter(P=>P.package_type===n);return kt(y)},[u,n]);return(0,G.jsxs)(v.List,{isLoading:a,searchBarPlaceholder:"Filter packages by name",searchBarAccessory:p.length>1?(0,G.jsx)(at,{packageTypes:p,setPackageType:o}):void 0,children:[c.length>0?(0,G.jsx)(v.List.Section,{title:"Incomplete",children:(0,G.jsx)(v.List.Item,{icon:{source:v.Icon.Warning,tintColor:v.Color.Orange},title:`Couldn't load ${c.map(J).join(", ")}`,subtitle:"Some packages may be missing from this list",actions:(0,G.jsx)(v.ActionPanel,{children:(0,G.jsx)(v.Action,{title:"Reload",icon:v.Icon.ArrowClockwise,onAction:r})})})}):null,s.length>0?s.map(y=>(0,G.jsx)(v.List.Section,{title:y.title,subtitle:`${y.packages.length}`,children:y.packages.map(P=>(0,G.jsx)(tt,{pkg:P},P.id))},y.packageType)):(0,G.jsx)(Je,{isLoading:a,error:e})]})}var wr=Zt(Tr);
