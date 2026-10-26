"use strict";var Zt=Object.create;var me=Object.defineProperty;var Xt=Object.getOwnPropertyDescriptor;var Jt=Object.getOwnPropertyNames;var ea=Object.getPrototypeOf,ta=Object.prototype.hasOwnProperty;var Ne=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var ae=(t,a)=>{for(var e in a)me(t,e,{get:a[e],enumerable:!0})},Me=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Jt(a))!ta.call(t,n)&&n!==e&&me(t,n,{get:()=>a[n],enumerable:!(r=Xt(a,n))||r.enumerable});return t},U=(t,a,e)=>(Me(t,a,"default"),e&&Me(e,a,"default")),F=(t,a,e)=>(e=t!=null?Zt(ea(t)):{},Me(a||!t||!t.__esModule?me(e,"default",{value:t,enumerable:!0}):e,t)),aa=t=>Me(me({},"__esModule",{value:!0}),t);var _={};ae(_,{default:()=>Xe.default});var Xe,Pe=Ne(()=>{U(_,require("formdata-polyfill/esm.min.js"));Xe=F(require("formdata-polyfill/esm.min.js"))});var T={};ae(T,{default:()=>at.default});var at,qe=Ne(()=>{U(T,require("fetch-blob/from.js"));at=F(require("fetch-blob/from.js"))});var nt={};ae(nt,{toFormData:()=>pa});function ua(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function pa(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Fe(e[1]||e[2]),n,o,l,y,c,p,M=[],f=new _.FormData,d=b=>{l+=S.decode(b,{stream:!0})},A=b=>{M.push(b)},u=()=>{let b=new T.File(M,p,{type:c});f.append(y,b)},P=()=>{f.append(y,l)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=d,r.onPartEnd=P,n="",o="",l="",y="",c="",p=null,M.length=0},r.onHeaderField=function(b){n+=S.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=S.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(y=b[2]||b[3]||""),p=ua(o),p&&(r.onPartData=A,r.onPartEnd=u)}else n==="content-type"&&(c=o);o="",n=""};for await(let b of t)r.write(b);return r.end(),f}var k,g,rt,Z,Ce,fe,ra,le,na,oa,ia,sa,X,Fe,ot=Ne(()=>{qe();Pe();k=0,g={START_BOUNDARY:k++,HEADER_FIELD_START:k++,HEADER_FIELD:k++,HEADER_VALUE_START:k++,HEADER_VALUE:k++,HEADER_VALUE_ALMOST_DONE:k++,HEADERS_ALMOST_DONE:k++,PART_DATA_START:k++,PART_DATA:k++,END:k++},rt=1,Z={PART_BOUNDARY:rt,LAST_BOUNDARY:rt*=2},Ce=10,fe=13,ra=32,le=45,na=58,oa=97,ia=122,sa=t=>t|32,X=()=>{},Fe=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=X,this.onHeaderField=X,this.onHeadersEnd=X,this.onHeaderValue=X,this.onPartBegin=X,this.onPartData=X,this.onPartEnd=X,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=g.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:l,boundaryChars:y,index:c,state:p,flags:M}=this,f=this.boundary.length,d=f-1,A=a.length,u,P,S=I=>{this[I+"Mark"]=e},b=I=>{delete this[I+"Mark"]},E=(I,D,m,ie)=>{(D===void 0||D!==m)&&this[I](ie&&ie.subarray(D,m))},Y=(I,D)=>{let m=I+"Mark";m in this&&(D?(E(I,this[m],e,a),delete this[m]):(E(I,this[m],a.length,a),this[m]=0))};for(e=0;e<r;e++)switch(u=a[e],p){case g.START_BOUNDARY:if(c===l.length-2){if(u===le)M|=Z.LAST_BOUNDARY;else if(u!==fe)return;c++;break}else if(c-1===l.length-2){if(M&Z.LAST_BOUNDARY&&u===le)p=g.END,M=0;else if(!(M&Z.LAST_BOUNDARY)&&u===Ce)c=0,E("onPartBegin"),p=g.HEADER_FIELD_START;else return;break}u!==l[c+2]&&(c=-2),u===l[c+2]&&c++;break;case g.HEADER_FIELD_START:p=g.HEADER_FIELD,S("onHeaderField"),c=0;case g.HEADER_FIELD:if(u===fe){b("onHeaderField"),p=g.HEADERS_ALMOST_DONE;break}if(c++,u===le)break;if(u===na){if(c===1)return;Y("onHeaderField",!0),p=g.HEADER_VALUE_START;break}if(P=sa(u),P<oa||P>ia)return;break;case g.HEADER_VALUE_START:if(u===ra)break;S("onHeaderValue"),p=g.HEADER_VALUE;case g.HEADER_VALUE:u===fe&&(Y("onHeaderValue",!0),E("onHeaderEnd"),p=g.HEADER_VALUE_ALMOST_DONE);break;case g.HEADER_VALUE_ALMOST_DONE:if(u!==Ce)return;p=g.HEADER_FIELD_START;break;case g.HEADERS_ALMOST_DONE:if(u!==Ce)return;E("onHeadersEnd"),p=g.PART_DATA_START;break;case g.PART_DATA_START:p=g.PART_DATA,S("onPartData");case g.PART_DATA:if(n=c,c===0){for(e+=d;e<A&&!(a[e]in y);)e+=f;e-=d,u=a[e]}if(c<l.length)l[c]===u?(c===0&&Y("onPartData",!0),c++):c=0;else if(c===l.length)c++,u===fe?M|=Z.PART_BOUNDARY:u===le?M|=Z.LAST_BOUNDARY:c=0;else if(c-1===l.length)if(M&Z.PART_BOUNDARY){if(c=0,u===Ce){M&=~Z.PART_BOUNDARY,E("onPartEnd"),E("onPartBegin"),p=g.HEADER_FIELD_START;break}}else M&Z.LAST_BOUNDARY&&u===le?(E("onPartEnd"),p=g.END,M=0):c=0;if(c>0)o[c-1]=u;else if(n>0){let I=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);E("onPartData",0,n,I),n=0,S("onPartData"),e--}break;case g.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}Y("onHeaderField"),Y("onHeaderValue"),Y("onPartData"),this.index=c,this.state=p,this.flags=M}end(){if(this.state===g.HEADER_FIELD_START&&this.index===0||this.state===g.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==g.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Lr={};ae(Lr,{default:()=>Or});module.exports=aa(Lr);var te=require("@raycast/api"),Wt=require("@raycast/utils"),Kt=require("lodash"),Le=require("react");var Dt=require("@octokit/rest"),xt=require("@raycast/api"),Ut=require("@raycast/utils"),_t=require("graphql-request");var Rt=F(require("node:http"),1),At=F(require("node:https"),1),ee=F(require("node:zlib"),1),O=F(require("node:stream"),1),de=require("node:buffer");var se={};ae(se,{default:()=>Re.default});U(se,require("data-uri-to-buffer"));var Re=F(require("data-uri-to-buffer"));var L=F(require("node:stream"),1),$=require("node:util"),w=require("node:buffer");var ue={};ae(ue,{default:()=>Ae.default});U(ue,require("fetch-blob"));var Ae=F(require("fetch-blob"));Pe();var Q=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var v=class extends Q{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ee=Symbol.toStringTag,Ve=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ee]==="URLSearchParams",pe=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ee]),Je=t=>typeof t=="object"&&(t[Ee]==="AbortSignal"||t[Ee]==="EventTarget"),et=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},tt=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var la=(0,$.promisify)(L.default.pipeline),h=Symbol("Body internals"),z=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:Ve(a)?a=w.Buffer.from(a.toString()):pe(a)||w.Buffer.isBuffer(a)||($.types.isAnyArrayBuffer(a)?a=w.Buffer.from(a):ArrayBuffer.isView(a)?a=w.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof L.default||(a instanceof _.FormData?(a=(0,_.formDataToBlob)(a),r=a.type.split("=")[1]):a=w.Buffer.from(String(a))));let n=a;w.Buffer.isBuffer(a)?n=L.default.Readable.from(a):pe(a)&&(n=L.default.Readable.from(a.stream())),this[h]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof L.default&&a.on("error",o=>{let l=o instanceof Q?o:new v(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[h].error=l})}get body(){return this[h].stream}get bodyUsed(){return this[h].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await je(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new _.FormData,n=new URLSearchParams(await this.text());for(let[o,l]of n)r.append(o,l);return r}let{toFormData:e}=await Promise.resolve().then(()=>(ot(),nt));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[h].body&&this[h].body.type||"",e=await this.arrayBuffer();return new Ae.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await je(this);return new TextDecoder().decode(a)}buffer(){return je(this)}};z.prototype.buffer=(0,$.deprecate)(z.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(z.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,$.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function je(t){if(t[h].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[h].disturbed=!0,t[h].error)throw t[h].error;let{body:a}=t;if(a===null)return w.Buffer.alloc(0);if(!(a instanceof L.default))return w.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new v(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof Q?n:new v(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?w.Buffer.from(e.join("")):w.Buffer.concat(e,r)}catch(n){throw new v(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new v(`Premature close of server response while trying to fetch ${t.url}`)}var re=(t,a)=>{let e,r,{body:n}=t[h];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof L.default&&typeof n.getBoundary!="function"&&(e=new L.PassThrough({highWaterMark:a}),r=new L.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[h].stream=e,n=r),n},ca=(0,$.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),De=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Ve(t)?"application/x-www-form-urlencoded;charset=UTF-8":pe(t)?t.type||null:w.Buffer.isBuffer(t)||$.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof _.FormData?`multipart/form-data; boundary=${a[h].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${ca(t)}`:t instanceof L.default?null:"text/plain;charset=UTF-8",it=t=>{let{body:a}=t[h];return a===null?0:pe(a)?a.size:w.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},st=async(t,{body:a})=>{a===null?t.end():await la(a,t)};var ke=require("node:util"),ce=F(require("node:http"),1),xe=typeof ce.default.validateHeaderName=="function"?ce.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},ze=typeof ce.default.validateHeaderValue=="function"?ce.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},B=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(l=>[n,l]))}else if(a!=null)if(typeof a=="object"&&!ke.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||ke.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(xe(r),ze(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(l,y)=>(xe(l),ze(l,String(y)),URLSearchParams.prototype[n].call(r,String(l).toLowerCase(),String(y)));case"delete":case"has":case"getAll":return l=>(xe(l),URLSearchParams.prototype[n].call(r,String(l).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(B.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function ut(t=[]){return new B(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return xe(a),ze(a,String(e)),!0}catch{return!1}}))}var ya=new Set([301,302,303,307,308]),Ue=t=>ya.has(t);var j=Symbol("Response internals"),N=class t extends z{constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new B(e.headers);if(a!==null&&!n.has("Content-Type")){let o=De(a,this);o&&n.append("Content-Type",o)}this[j]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[j].type}get url(){return this[j].url||""}get status(){return this[j].status}get ok(){return this[j].status>=200&&this[j].status<300}get redirected(){return this[j].counter>0}get statusText(){return this[j].statusText}get headers(){return this[j].headers}get highWaterMark(){return this[j].highWaterMark}clone(){return new t(re(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!Ue(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[j].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new B(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(N.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var gt=require("node:url"),Mt=require("node:util");var pt=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var ct=require("node:net");function lt(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var yt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),dt="strict-origin-when-cross-origin";function St(t){if(!yt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function da(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,ct.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function ne(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:da(t)}function bt(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=lt(n),l=lt(n,!0);o.toString().length>4096&&(o=l),a&&(o=a(o)),e&&(l=e(l));let y=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return l;case"unsafe-url":return o;case"strict-origin":return ne(o)&&!ne(y)?"no-referrer":l.toString();case"strict-origin-when-cross-origin":return o.origin===y.origin?o:ne(o)&&!ne(y)?"no-referrer":l;case"same-origin":return o.origin===y.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===y.origin?o:l;case"no-referrer-when-downgrade":return ne(o)&&!ne(y)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function It(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&yt.has(r)&&(e=r);return e}var C=Symbol("Request internals"),ye=t=>typeof t=="object"&&typeof t[C]=="object",Sa=(0,Mt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),J=class t extends z{constructor(a,e={}){let r;if(ye(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ye(e)&&"data"in e&&Sa(),(e.body!=null||ye(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ye(a)&&a.body!==null?re(a):null;super(o,{size:e.size||a.size||0});let l=new B(e.headers||a.headers||{});if(o!==null&&!l.has("Content-Type")){let p=De(o,this);p&&l.set("Content-Type",p)}let y=ye(a)?a.signal:null;if("signal"in e&&(y=e.signal),y!=null&&!Je(y))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let c=e.referrer==null?a.referrer:e.referrer;if(c==="")c="no-referrer";else if(c){let p=new URL(c);c=/^about:(\/\/)?client$/.test(p)?"client":p}else c=void 0;this[C]={method:n,redirect:e.redirect||a.redirect||"follow",headers:l,parsedURL:r,signal:y,referrer:c},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[C].method}get url(){return(0,gt.format)(this[C].parsedURL)}get headers(){return this[C].headers}get redirect(){return this[C].redirect}get signal(){return this[C].signal}get referrer(){if(this[C].referrer==="no-referrer")return"";if(this[C].referrer==="client")return"about:client";if(this[C].referrer)return this[C].referrer.toString()}get referrerPolicy(){return this[C].referrerPolicy}set referrerPolicy(a){this[C].referrerPolicy=St(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(J.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var mt=t=>{let{parsedURL:a}=t[C],e=new B(t[C].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let y=it(t);typeof y=="number"&&!Number.isNaN(y)&&(r=String(y))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=dt),t.referrer&&t.referrer!=="no-referrer"?t[C].referrer=bt(t):t[C].referrer="no-referrer",t[C].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=pt(a),l={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:l}};var _e=class extends Q{constructor(a,e="aborted"){super(a,e)}};Pe();qe();var ba=new Set(["data:","http:","https:"]);async function ve(t,a){return new Promise((e,r)=>{let n=new J(t,a),{parsedURL:o,options:l}=mt(n);if(!ba.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let u=(0,Re.default)(n.url),P=new N(u,{headers:{"Content-Type":u.typeFull}});e(P);return}let y=(o.protocol==="https:"?At.default:Rt.default).request,{signal:c}=n,p=null,M=()=>{let u=new _e("The operation was aborted.");r(u),n.body&&n.body instanceof O.default.Readable&&n.body.destroy(u),!(!p||!p.body)&&p.body.emit("error",u)};if(c&&c.aborted){M();return}let f=()=>{M(),A()},d=y(o.toString(),l);c&&c.addEventListener("abort",f);let A=()=>{d.abort(),c&&c.removeEventListener("abort",f)};d.on("error",u=>{r(new v(`request to ${n.url} failed, reason: ${u.message}`,"system",u)),A()}),Ia(d,u=>{p&&p.body&&p.body.destroy(u)}),process.version<"v14"&&d.on("socket",u=>{let P;u.prependListener("end",()=>{P=u._eventsCount}),u.prependListener("close",S=>{if(p&&P<u._eventsCount&&!S){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),d.on("response",u=>{d.setTimeout(0);let P=ut(u.rawHeaders);if(Ue(u.statusCode)){let I=P.get("Location"),D=null;try{D=I===null?null:new URL(I,n.url)}catch{if(n.redirect!=="manual"){r(new v(`uri requested responds with an invalid redirect URL: ${I}`,"invalid-redirect")),A();return}}switch(n.redirect){case"error":r(new v(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),A();return;case"manual":break;case"follow":{if(D===null)break;if(n.counter>=n.follow){r(new v(`maximum redirect reached at: ${n.url}`,"max-redirect")),A();return}let m={headers:new B(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:re(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!et(n.url,D)||!tt(n.url,D))for(let Yt of["authorization","www-authenticate","cookie","cookie2"])m.headers.delete(Yt);if(u.statusCode!==303&&n.body&&a.body instanceof O.default.Readable){r(new v("Cannot follow redirect with body being a readable stream","unsupported-redirect")),A();return}(u.statusCode===303||(u.statusCode===301||u.statusCode===302)&&n.method==="POST")&&(m.method="GET",m.body=void 0,m.headers.delete("content-length"));let ie=It(P);ie&&(m.referrerPolicy=ie),e(ve(new J(D,m))),A();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}c&&u.once("end",()=>{c.removeEventListener("abort",f)});let S=(0,O.pipeline)(u,new O.PassThrough,I=>{I&&r(I)});process.version<"v12.10"&&u.on("aborted",f);let b={url:n.url,status:u.statusCode,statusText:u.statusMessage,headers:P,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},E=P.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||E===null||u.statusCode===204||u.statusCode===304){p=new N(S,b),e(p);return}let Y={flush:ee.default.Z_SYNC_FLUSH,finishFlush:ee.default.Z_SYNC_FLUSH};if(E==="gzip"||E==="x-gzip"){S=(0,O.pipeline)(S,ee.default.createGunzip(Y),I=>{I&&r(I)}),p=new N(S,b),e(p);return}if(E==="deflate"||E==="x-deflate"){let I=(0,O.pipeline)(u,new O.PassThrough,D=>{D&&r(D)});I.once("data",D=>{(D[0]&15)===8?S=(0,O.pipeline)(S,ee.default.createInflate(),m=>{m&&r(m)}):S=(0,O.pipeline)(S,ee.default.createInflateRaw(),m=>{m&&r(m)}),p=new N(S,b),e(p)}),I.once("end",()=>{p||(p=new N(S,b),e(p))});return}if(E==="br"){S=(0,O.pipeline)(S,ee.default.createBrotliDecompress(),I=>{I&&r(I)}),p=new N(S,b),e(p);return}p=new N(S,b),e(p)}),st(d,n).catch(r)})}function Ia(t,a){let e=de.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",l=>{let{headers:y}=l;r=y["transfer-encoding"]==="chunked"&&!y["content-length"]}),t.on("socket",l=>{let y=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",a(p)}},c=p=>{n=de.Buffer.compare(p.slice(-5),e)===0,!n&&o&&(n=de.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&de.Buffer.compare(p.slice(-2),e.slice(3))===0),o=p};l.prependListener("close",y),l.on("data",c),t.on("close",()=>{l.removeListener("close",y),l.removeListener("data",c)})})}var i=F(require("graphql-tag")),Se=i.default`
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
`,ga=i.default`
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
`,G=i.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,be=i.default`
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
  ${G}
`,he=i.default`
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
  ${be}
  ${Se}
  ${G}
`,Ma=i.default`
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
  ${be}
  ${Se}
  ${G}
`,ma=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Pt=i.default`
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
  ${be}
  ${ma}
`,Et=i.default`
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
  ${be}
  ${G}
`,Ra=i.default`
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
  ${be}
  ${G}
`,Aa=i.default`
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
`,Ct=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Ge=i.default`
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
`,Pa=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Ea=i.default`
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
`,Ca=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,fa=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Da=i.default`
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
`,xa=i.default`
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
`,Ua=i.default`
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
  ${G}
`,_a=i.default`
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
`,va=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Ma}
`,ha=i.default`
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
  ${he}
`,Ta=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${he}
`,wa=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ba=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Oa=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,La=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Na=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Va=i.default`
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
  ${he}
`,qa=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Fa=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Pt}
`,ja=i.default`
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
  ${Et}
`,ka=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ra}
`,za=i.default`
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
  ${G}
`,Ga=i.default`
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
`,Ha=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Aa}
`,Qa=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,$a=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wa=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Ya=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Za=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Xa=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ja=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,er=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,tr=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,ar=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,rr=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,nr=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,or=i.default`
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
`,ir=i.default`
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
  ${Et}
`,sr=i.default`
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
  ${Ge}
`,ur=i.default`
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
  ${Ge}
`,pr=i.default`
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
`,lr=i.default`
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
`,cr=i.default`
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
  ${Ct}
  ${G}
`,yr=i.default`
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
  ${Ct}
`,dr=i.default`
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
  ${he}
`,Sr=i.default`
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
`,br=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ir=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,gr=i.default`
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
  ${Ge}
`,Mr=i.default`
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
  ${G}
  ${Pt}
`,mr=i.default`
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
  ${G}
`,Rr=i.default`
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
`,Ar=(t,a,e,r)=>t();function ft(t,a=Ar){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:cr,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:yr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:dr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:Sr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:br,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:Ir,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:gr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:Mr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:mr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:Rr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var He=null,Qe=null,vt=null,Pr=(0,xt.getPreferenceValues)();function Er({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;vt=t,He=ft(new _t.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Qe=new Dt.Octokit({auth:t,request:{fetch:ve}})}var ht=Ut.OAuthService.github({personalAccessToken:Pr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Er});function V(){if(!He||!Qe)throw new Error("GitHub clients not initialized");return{github:He,octokit:Qe,token:vt}}var Nt=require("@raycast/api");var R=require("@raycast/api"),Tt=require("date-fns");function Cr(t,a){return`notification_referrer_id=${Buffer.from(`018:NotificationThread${t}:${a}`).toString("base64")}`}function $e(t,a,e,r=""){let n=t.replace("api.github.com/repos","github.com");if(n.indexOf("/pulls/")!==-1&&(n=n.replace("/pulls/","/pull/")),n.indexOf("/releases/")!==-1&&(n=n.replace("/repos",""),n=n.substring(0,n.lastIndexOf("/"))),e){let o=Cr(a,e);return`${n}?${o}${r}`}return n}var fr=t=>t?/comments\/(?<id>\d+)/g.exec(t)?.groups?.id:void 0;async function wt(t,a){if(t.subject.url){let e=fr(t.subject.latest_comment_url);return $e(t.subject.url,t.id,a,e?"#issuecomment-"+e:void 0)}else{if(t.subject.type==="CheckSuite")return $e(`${t.repository.html_url}/actions`,t.id,a);if(t.subject.type==="Discussion"){let e=null;try{e=await Ur(t)}catch(r){console.error("Failed to get discussion number",r)}return $e(`${t.repository.html_url}/discussions/${e??""}`,t.id,a)}}return t.url}async function Bt(t){try{if(t.subject.type==="PullRequest"){let{octokit:e}=V(),r=await e.pulls.get({owner:t.repository.owner.login,repo:t.repository.name,pull_number:parseInt(t.subject.url.split("/").at(-1))});return r.data.merged?{value:{source:"pull-request-merged.svg",tintColor:R.Color.Purple},tooltip:"Merged"}:r.data.state==="closed"?{value:{source:"pull-request-closed.svg",tintColor:R.Color.Red},tooltip:"Closed"}:r.data.draft?{value:{source:"pull-request-draft.svg",tintColor:R.Color.SecondaryText},tooltip:"Draft"}:{value:{source:"pull-request-open.svg",tintColor:R.Color.Green},tooltip:"Open"}}if(t.subject.type==="Issue"){let{octokit:e}=V(),r=await e.rest.issues.get({owner:t.repository.owner.login,repo:t.repository.name,issue_number:parseInt(t.subject.url.split("/").at(-1))});return r.data.state==="closed"?r.data.state_reason==="completed"?{value:{source:"issue-closed.svg",tintColor:R.Color.Purple},tooltip:"Closed as completed"}:r.data.state_reason==="not_planned"?{value:{source:"skip.svg",tintColor:R.Color.SecondaryText},tooltip:"Closed as not planned"}:{value:{source:"issue-closed.svg",tintColor:R.Color.Purple},tooltip:"Closed"}:{value:{source:"issue-open.svg",tintColor:R.Color.Green},tooltip:"Open"}}let a;switch(t.subject.type){case"Commit":a={value:{source:"commit.svg"},tooltip:"Commit"};break;case"Release":a={value:{source:"tag.svg",tintColor:R.Color.Blue},tooltip:"Release"};break;case"CheckSuite":a={value:t.subject.title.match(/(succeeded)/i)?{source:R.Icon.CheckCircle,tintColor:R.Color.Green}:t.subject.title.match(/(failed)/i)?{source:R.Icon.XMarkCircle,tintColor:R.Color.Red}:t.subject.title.match(/(skipped|cancelled)/i)?{source:"skip.svg",tintColor:R.Color.SecondaryText}:{source:R.Icon.QuestionMarkCircle,tintColor:R.Color.SecondaryText},tooltip:"Workflow Run"};break;case"Discussion":a={value:{source:"comment-discussion.svg"},tooltip:"Comment"};break;case"RepositoryInvitation":a={value:{source:"mail.svg"},tooltip:"Repository Invitation"};break;case"RepositoryVulnerabilityAlert":a={value:{source:"alert.svg"},tooltip:"Repository} Vulnerability Alert"};break;default:a={value:{source:R.Icon.Circle},tooltip:"Unknown"};break}return a.tooltip=`Subject type: ${a.tooltip}`,a}catch{return{value:{source:R.Icon.Warning,tintColor:R.Color.Red},tooltip:"Could not load icon"}}}function Ie(t){switch(t.subject.type){case"PullRequest":return"Pull Request";case"CheckSuite":return"Check Suite";case"RepositoryInvitation":return"Repository Invitation";case"RepositoryVulnerabilityAlert":return"Repository Vulnerability Alert";default:return t.subject.type}}function Te(t){let a=Dr(t),e=xr(t);return e?`${e} \uFF65 ${t.repository.full_name} \uFF65 ${a}`:`${t.repository.full_name} \uFF65 ${a}`}function Dr(t){switch(t.reason){case"assign":return"Assigned";case"author":return"Author";case"comment":return"Commented";case"ci_activity":return"CI Activity";case"invitation":return"Invited";case"manual":return"Subscribed";case"mention":return"Mentioned";case"review_requested":return"Review Requested";case"security_alert":return"Security Alert";case"state_change":return"Changed";case"subscribed":return"Watching";case"team_mention":return"Team Mentioned";default:return""}}function xr(t){if(t.subject.type!=="Issue"&&t.subject.type!=="PullRequest")return;let a=t.subject.url?.split("/").at(-1);return a?`#${a}`:void 0}function Ot(t){return`Updated: ${(0,Tt.format)(t,"EEEE d MMMM yyyy 'at' HH:mm")}`}async function Ur(t){let{github:a}=V(),e=t.repository.full_name,r=t.updated_at.split("T")[0],n=t.subject.title;return(await a.getGitHubDiscussionNumber({filter:`repo:${e} updated:>=${r} in:title ${n}`}))?.search?.nodes?.[0]?.number??null}var s=require("@raycast/api"),Lt=require("@raycast/utils");function H(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var x=require("react/jsx-runtime");function We({notification:t,userId:a,mutateList:e}){let{octokit:r}=V(),{data:n}=(0,Lt.usePromise)((d,A)=>wt(d,A),[t,a]);async function o(){await(0,s.showToast)({style:s.Toast.Style.Animated,title:"Marking notification as read"});try{await r.activity.markThreadAsRead({thread_id:parseInt(t.id)}),await e(),await(0,s.launchCommand)({name:"unread-notifications",type:s.LaunchType.UserInitiated}),await(0,s.showToast)({style:s.Toast.Style.Success,title:"Marked notification as read"})}catch(d){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed marking notification as read",message:H(d)})}}async function l(){await(0,s.showToast)({style:s.Toast.Style.Animated,title:"Marking notification as done"});try{await r.activity.markThreadAsDone({thread_id:parseInt(t.id)}),await e(),await(0,s.launchCommand)({name:"unread-notifications",type:s.LaunchType.UserInitiated}),await(0,s.showToast)({style:s.Toast.Style.Success,title:"Marked notification as done"})}catch(d){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed marking notification as done",message:H(d)})}}async function y(d){try{n&&await(0,s.open)(n),d&&(await r.activity.markThreadAsRead({thread_id:parseInt(t.id)}),await e())}catch(A){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed opening notification",message:H(A)})}}async function c(){try{let A=(await r.repos.listInvitationsForAuthenticatedUser()).data.find(u=>u.repository.url===t.repository.url);await r.repos.acceptInvitationForAuthenticatedUser({invitation_id:A?.id||0}),(0,s.open)(t.repository.html_url),await e()}catch(d){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed opening notification",message:H(d)})}}async function p(){await(0,s.showToast)({style:s.Toast.Style.Animated,title:"Marking all notifications as read"});try{await r.activity.markNotificationsAsRead(),await e(),await(0,s.launchCommand)({name:"unread-notifications",type:s.LaunchType.UserInitiated}),await(0,s.showToast)({style:s.Toast.Style.Success,title:"Marked all notifications as read"})}catch(d){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed marking all notification as read",message:H(d)})}}async function M(){await(0,s.showToast)({style:s.Toast.Style.Animated,title:"Unsubscribing"});try{await r.activity.deleteThreadSubscription({thread_id:parseInt(t.id)}),await e(),await(0,s.showToast)({style:s.Toast.Style.Success,title:"Unsubscribed"})}catch(d){await(0,s.showToast)({style:s.Toast.Style.Failure,title:"Failed unsubscribing",message:H(d)})}}let f=t.subject.type==="RepositoryInvitation";return(0,x.jsxs)(s.ActionPanel,{title:Te(t),children:[(0,x.jsx)(s.Action,{title:f?"Accept Invitation":"Open in Browser",icon:s.Icon.Globe,onAction:()=>f?c():y(t.unread)}),t.unread?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.Action,{title:"Mark as Read",icon:s.Icon.Circle,onAction:o}),(0,x.jsx)(s.Action,{title:"Mark All as Read",icon:s.Icon.Circle,shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:p})]}):null,(0,x.jsx)(s.Action,{title:"Mark as Done",icon:s.Icon.Circle,onAction:l,shortcut:{modifiers:["cmd","shift"],key:"d"}}),(0,x.jsx)(s.Action,{title:"Unsubscribe",icon:s.Icon.BellDisabled,shortcut:s.Keyboard.Shortcut.Common.Pin,onAction:M}),(0,x.jsxs)(s.ActionPanel.Section,{children:[n?(0,x.jsx)(s.Action.CopyToClipboard,{content:n,title:`Copy ${Ie(t)} URL`,shortcut:{modifiers:["cmd","shift"],key:","}}):null,(0,x.jsx)(s.Action.CopyToClipboard,{content:t.subject.title,title:`Copy ${Ie(t)} Title`,shortcut:{modifiers:["cmd","shift"],key:","}})]}),(0,x.jsx)(s.ActionPanel.Section,{children:(0,x.jsx)(s.Action,{icon:s.Icon.ArrowClockwise,title:"Refresh",onAction:e,shortcut:s.Keyboard.Shortcut.Common.Refresh})})]})}var Ke=require("react/jsx-runtime");function we({notification:t,userId:a,mutateList:e}){let r=new Date(t.updated_at);return(0,Ke.jsx)(Nt.List.Item,{icon:{value:t.icon.value,tooltip:Ie(t)},title:t.subject.title,subtitle:Te(t),accessories:[{date:r,tooltip:Ot(r)}],actions:(0,Ke.jsx)(We,{notification:t,userId:a,mutateList:e})})}var W=require("@raycast/api");var jt=require("@raycast/utils");var Be=require("node:child_process");var qt=require("node:util"),q=require("@raycast/api"),_r=require("@raycast/utils");var Xn=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:q.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"o"}},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:q.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"v"}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:q.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:q.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:q.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:q.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:q.Color.PrimaryText},shortcut:{modifiers:["cmd"],key:"s"}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{modifiers:["cmd"],key:"d"}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:q.Color.PrimaryText}}];var vr=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],hr=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],Tr=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Jn=vr[0].value,eo=hr[0].value,to=Tr[0].value;var ao=(0,qt.promisify)(Be.execFile);var ge="\x1B",Vt="\x07",ro=new RegExp(`${ge}][^${Vt}${ge}]*(?:${Vt}|${ge}\\\\)`,"g"),no=new RegExp(`${ge}\\[[0-9;?]*[A-Za-z]`,"g"),oo=new RegExp(`${ge}\\([0-9A-Za-z]`,"g");var Ft=require("@raycast/utils");function Oe(){let{github:t}=V(),{data:a}=(0,Ft.useCachedPromise)(async()=>(await t.getViewer()).viewer);return a}function kt(){let{github:t}=V(),r=["user:@me",...Oe()?.organizations?.nodes?.flatMap(n=>n?.login?[`org:${n.login}`]:[])??[]].join(" ");return(0,jt.useCachedPromise)(async n=>{let l=(await Promise.allSettled(n.split(" ").map(y=>t.searchRepositories({query:`${y} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(y=>y.status==="fulfilled"?y.value.search.nodes:[]);return[...new Map(l.map(y=>[y.id,y])).values()].sort((y,c)=>new Date(c.updatedAt).getTime()-new Date(y.updatedAt).getTime())},[r])}var oe=require("react/jsx-runtime");function Ye({setSelectedRepository:t,withAllRepositories:a=!0}){let{data:e}=kt();return(0,oe.jsxs)(W.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:t,children:[a?(0,oe.jsx)(W.List.Dropdown.Item,{value:"",title:"All Repositories",icon:W.Icon.List}):null,e&&e.length>0?(0,oe.jsx)(W.List.Dropdown.Section,{children:e.map(r=>(0,oe.jsx)(W.List.Dropdown.Item,{title:r.nameWithOwner,value:r.nameWithOwner,icon:{source:r.owner.avatarUrl,mask:W.Image.Mask.Circle}},r.id))}):null]})}var Gt=require("@raycast/api"),wr=require("lodash");var zt=require("@raycast/api");function Ht(t){return[...new Map(t.map(a=>[a.id,a])).values()]}var Qt=require("@raycast/utils");var $t=(0,Qt.withAccessToken)(ht);var K=require("react/jsx-runtime"),Ze=25;function Br(){let{octokit:t}=V(),a=Oe(),[e,r]=(0,Le.useState)(null),{data:n,isLoading:o,error:l,mutate:y,pagination:c}=(0,Wt.useCachedPromise)(d=>async({cursor:A})=>{let u=A?Number(A):1,P=d?await t.activity.listRepoNotificationsForAuthenticatedUser({owner:d.split("/")[0],repo:d.split("/")[1],all:!0,per_page:Ze,page:u}):await t.activity.listNotificationsForAuthenticatedUser({all:!0,per_page:Ze,page:u}),S=P.headers.link?.includes('rel="next"')??P.data.length===Ze;return{data:await Promise.all(P.data.map(async E=>({...E,icon:await Bt(E)}))),hasMore:S,cursor:S?String(u+1):void 0}},[e]),p=(0,Le.useMemo)(()=>Ht(n??[]),[n]),[M,f]=(0,Kt.partition)(p,d=>d.unread);return(0,K.jsxs)(te.List,{isLoading:o,searchBarPlaceholder:"Filter by title",searchBarAccessory:(0,K.jsx)(Ye,{setSelectedRepository:r}),pagination:c,children:[M.length>0?(0,K.jsx)(te.List.Section,{title:"Unread",children:M.map(d=>(0,K.jsx)(we,{notification:d,userId:a?.id,mutateList:y},d.id))}):null,f.length>0?(0,K.jsx)(te.List.Section,{title:"Read",children:f.map(d=>(0,K.jsx)(we,{notification:d,userId:a?.id,mutateList:y},d.id))}):null,(0,K.jsx)(te.List.EmptyView,{icon:l?te.Icon.Warning:void 0,title:l?"Failed to Load Notifications":"No recent notifications found",description:l?H(l):void 0})]})}var Or=$t(Br);
