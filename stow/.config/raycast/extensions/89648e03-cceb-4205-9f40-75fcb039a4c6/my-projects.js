"use strict";var kt=Object.create;var me=Object.defineProperty;var zt=Object.getOwnPropertyDescriptor;var Gt=Object.getOwnPropertyNames;var Ht=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var we=(t,a,e)=>()=>{if(e)throw e[0];try{return t&&(a=t(t=0)),a}catch(r){throw e=[r],r}};var X=(t,a)=>{for(var e in a)me(t,e,{get:a[e],enumerable:!0})},ge=(t,a,e,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Gt(a))!Qt.call(t,n)&&n!==e&&me(t,n,{get:()=>a[n],enumerable:!(r=zt(a,n))||r.enumerable});return t},f=(t,a,e)=>(ge(t,a,"default"),e&&ge(e,a,"default")),q=(t,a,e)=>(e=t!=null?kt(Ht(t)):{},ge(a||!t||!t.__esModule?me(e,"default",{value:t,enumerable:!0}):e,t)),$t=t=>ge(me({},"__esModule",{value:!0}),t);var D={};X(D,{default:()=>Ze.default});var Ze,Ee=we(()=>{f(D,require("formdata-polyfill/esm.min.js"));Ze=q(require("formdata-polyfill/esm.min.js"))});var h={};X(h,{default:()=>tt.default});var tt,Ve=we(()=>{f(h,require("fetch-blob/from.js"));tt=q(require("fetch-blob/from.js"))});var rt={};X(rt,{toFormData:()=>ea});function Xt(t){let a=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let e=a[2]||a[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function ea(t,a){if(!/multipart/i.test(a))throw new TypeError("Failed to fetch");let e=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ne(e[1]||e[2]),n,o,s,c,p,u,g=[],v=new D.FormData,C=d=>{s+=S.decode(d,{stream:!0})},N=d=>{g.push(d)},l=()=>{let d=new h.File(g,u,{type:p});v.append(c,d)},E=()=>{v.append(c,s)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=C,r.onPartEnd=E,n="",o="",s="",c="",p="",u=null,g.length=0},r.onHeaderField=function(d){n+=S.decode(d,{stream:!0})},r.onHeaderValue=function(d){o+=S.decode(d,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let d=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);d&&(c=d[2]||d[3]||""),u=Xt(o),u&&(r.onPartData=N,r.onPartEnd=l)}else n==="content-type"&&(p=o);o="",n=""};for await(let d of t)r.write(d);return r.end(),v}var F,I,at,W,fe,De,Wt,le,Kt,Yt,Zt,Jt,K,Ne,nt=we(()=>{Ve();Ee();F=0,I={START_BOUNDARY:F++,HEADER_FIELD_START:F++,HEADER_FIELD:F++,HEADER_VALUE_START:F++,HEADER_VALUE:F++,HEADER_VALUE_ALMOST_DONE:F++,HEADERS_ALMOST_DONE:F++,PART_DATA_START:F++,PART_DATA:F++,END:F++},at=1,W={PART_BOUNDARY:at,LAST_BOUNDARY:at*=2},fe=10,De=13,Wt=32,le=45,Kt=58,Yt=97,Zt=122,Jt=t=>t|32,K=()=>{},Ne=class{constructor(a){this.index=0,this.flags=0,this.onHeaderEnd=K,this.onHeaderField=K,this.onHeadersEnd=K,this.onHeaderValue=K,this.onPartBegin=K,this.onPartData=K,this.onPartEnd=K,this.boundaryChars={},a=`\r
--`+a;let e=new Uint8Array(a.length);for(let r=0;r<a.length;r++)e[r]=a.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=I.START_BOUNDARY}write(a){let e=0,r=a.length,n=this.index,{lookbehind:o,boundary:s,boundaryChars:c,index:p,state:u,flags:g}=this,v=this.boundary.length,C=v-1,N=a.length,l,E,S=b=>{this[b+"Mark"]=e},d=b=>{delete this[b+"Mark"]},A=(b,P,m,oe)=>{(P===void 0||P!==m)&&this[b](oe&&oe.subarray(P,m))},$=(b,P)=>{let m=b+"Mark";m in this&&(P?(A(b,this[m],e,a),delete this[m]):(A(b,this[m],a.length,a),this[m]=0))};for(e=0;e<r;e++)switch(l=a[e],u){case I.START_BOUNDARY:if(p===s.length-2){if(l===le)g|=W.LAST_BOUNDARY;else if(l!==De)return;p++;break}else if(p-1===s.length-2){if(g&W.LAST_BOUNDARY&&l===le)u=I.END,g=0;else if(!(g&W.LAST_BOUNDARY)&&l===fe)p=0,A("onPartBegin"),u=I.HEADER_FIELD_START;else return;break}l!==s[p+2]&&(p=-2),l===s[p+2]&&p++;break;case I.HEADER_FIELD_START:u=I.HEADER_FIELD,S("onHeaderField"),p=0;case I.HEADER_FIELD:if(l===De){d("onHeaderField"),u=I.HEADERS_ALMOST_DONE;break}if(p++,l===le)break;if(l===Kt){if(p===1)return;$("onHeaderField",!0),u=I.HEADER_VALUE_START;break}if(E=Jt(l),E<Yt||E>Zt)return;break;case I.HEADER_VALUE_START:if(l===Wt)break;S("onHeaderValue"),u=I.HEADER_VALUE;case I.HEADER_VALUE:l===De&&($("onHeaderValue",!0),A("onHeaderEnd"),u=I.HEADER_VALUE_ALMOST_DONE);break;case I.HEADER_VALUE_ALMOST_DONE:if(l!==fe)return;u=I.HEADER_FIELD_START;break;case I.HEADERS_ALMOST_DONE:if(l!==fe)return;A("onHeadersEnd"),u=I.PART_DATA_START;break;case I.PART_DATA_START:u=I.PART_DATA,S("onPartData");case I.PART_DATA:if(n=p,p===0){for(e+=C;e<N&&!(a[e]in c);)e+=v;e-=C,l=a[e]}if(p<s.length)s[p]===l?(p===0&&$("onPartData",!0),p++):p=0;else if(p===s.length)p++,l===De?g|=W.PART_BOUNDARY:l===le?g|=W.LAST_BOUNDARY:p=0;else if(p-1===s.length)if(g&W.PART_BOUNDARY){if(p=0,l===fe){g&=~W.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),u=I.HEADER_FIELD_START;break}}else g&W.LAST_BOUNDARY&&l===le?(A("onPartEnd"),u=I.END,g=0):p=0;if(p>0)o[p-1]=l;else if(n>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,n,b),n=0,S("onPartData"),e--}break;case I.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}$("onHeaderField"),$("onHeaderValue"),$("onPartData"),this.index=p,this.state=u,this.flags=g}end(){if(this.state===I.HEADER_FIELD_START&&this.index===0||this.state===I.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==I.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Mr={};X(Mr,{default:()=>Ir});module.exports=$t(Mr);var qt=require("@raycast/api"),jt=require("react");var O=require("@raycast/api"),ee=require("react/jsx-runtime");function Be({setClosed:t}){return(0,ee.jsxs)(O.List.Dropdown,{tooltip:"Select Project State",storeValue:!0,onChange:t,defaultValue:"open",children:[(0,ee.jsx)(O.List.Dropdown.Item,{title:"All",value:"all",icon:O.Icon.List},"All"),(0,ee.jsx)(O.List.Dropdown.Item,{title:"Open",value:"open",icon:{source:O.Icon.Checkmark,tintColor:O.Color.Green}},"Open"),(0,ee.jsx)(O.List.Dropdown.Item,{title:"Closed",value:"closed",icon:{source:O.Icon.Xmark,tintColor:O.Color.SecondaryText}},"Closed")]})}var We=require("@raycast/api"),Ke=require("react/jsx-runtime");function Oe(){return(0,Ke.jsx)(We.List.EmptyView,{title:"No projects found"})}var Q=require("@raycast/api"),Bt=require("date-fns");var ie=require("@raycast/api");function Ye(t){return t?{icon:{source:t.avatarUrl??ie.Icon.Person,mask:ie.Image.Mask.Circle},text:(t.name?t.name:t.login)??"-"}:{icon:ie.Icon.Person,text:"Unknown"}}function Re(t){return Ye(t.creator)}var y=require("@raycast/api");var ft=require("@octokit/rest"),Dt=require("@raycast/api"),Ut=require("@raycast/utils"),xt=require("graphql-request");var mt=q(require("node:http"),1),Rt=q(require("node:https"),1),Z=q(require("node:zlib"),1),B=q(require("node:stream"),1),Se=require("node:buffer");var ue={};X(ue,{default:()=>Ae.default});f(ue,require("data-uri-to-buffer"));var Ae=q(require("data-uri-to-buffer"));var L=q(require("node:stream"),1),H=require("node:util"),T=require("node:buffer");var se={};X(se,{default:()=>Pe.default});f(se,require("fetch-blob"));var Pe=q(require("fetch-blob"));Ee();var G=class extends Error{constructor(a,e){super(a),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var U=class extends G{constructor(a,e,r){super(a,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ce=Symbol.toStringTag,Le=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ce]==="URLSearchParams",pe=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ce]),Je=t=>typeof t=="object"&&(t[Ce]==="AbortSignal"||t[Ce]==="EventTarget"),Xe=(t,a)=>{let e=new URL(a).hostname,r=new URL(t).hostname;return e===r||e.endsWith(`.${r}`)},et=(t,a)=>{let e=new URL(a).protocol,r=new URL(t).protocol;return e===r};var ta=(0,H.promisify)(L.default.pipeline),x=Symbol("Body internals"),k=class{constructor(a,{size:e=0}={}){let r=null;a===null?a=null:Le(a)?a=T.Buffer.from(a.toString()):pe(a)||T.Buffer.isBuffer(a)||(H.types.isAnyArrayBuffer(a)?a=T.Buffer.from(a):ArrayBuffer.isView(a)?a=T.Buffer.from(a.buffer,a.byteOffset,a.byteLength):a instanceof L.default||(a instanceof D.FormData?(a=(0,D.formDataToBlob)(a),r=a.type.split("=")[1]):a=T.Buffer.from(String(a))));let n=a;T.Buffer.isBuffer(a)?n=L.default.Readable.from(a):pe(a)&&(n=L.default.Readable.from(a.stream())),this[x]={body:a,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,a instanceof L.default&&a.on("error",o=>{let s=o instanceof G?o:new U(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[x].error=s})}get body(){return this[x].stream}get bodyUsed(){return this[x].disturbed}async arrayBuffer(){let{buffer:a,byteOffset:e,byteLength:r}=await qe(this);return a.slice(e,e+r)}async formData(){let a=this.headers.get("content-type");if(a.startsWith("application/x-www-form-urlencoded")){let r=new D.FormData,n=new URLSearchParams(await this.text());for(let[o,s]of n)r.append(o,s);return r}let{toFormData:e}=await Promise.resolve().then(()=>(nt(),rt));return e(this.body,a)}async blob(){let a=this.headers&&this.headers.get("content-type")||this[x].body&&this[x].body.type||"",e=await this.arrayBuffer();return new Pe.default([e],{type:a})}async json(){let a=await this.text();return JSON.parse(a)}async text(){let a=await qe(this);return new TextDecoder().decode(a)}buffer(){return qe(this)}};k.prototype.buffer=(0,H.deprecate)(k.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(k.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,H.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function qe(t){if(t[x].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[x].disturbed=!0,t[x].error)throw t[x].error;let{body:a}=t;if(a===null)return T.Buffer.alloc(0);if(!(a instanceof L.default))return T.Buffer.alloc(0);let e=[],r=0;try{for await(let n of a){if(t.size>0&&r+n.length>t.size){let o=new U(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw a.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof G?n:new U(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(a.readableEnded===!0||a._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?T.Buffer.from(e.join("")):T.Buffer.concat(e,r)}catch(n){throw new U(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new U(`Premature close of server response while trying to fetch ${t.url}`)}var te=(t,a)=>{let e,r,{body:n}=t[x];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof L.default&&typeof n.getBoundary!="function"&&(e=new L.PassThrough({highWaterMark:a}),r=new L.PassThrough({highWaterMark:a}),n.pipe(e),n.pipe(r),t[x].stream=e,n=r),n},aa=(0,H.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ue=(t,a)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Le(t)?"application/x-www-form-urlencoded;charset=UTF-8":pe(t)?t.type||null:T.Buffer.isBuffer(t)||H.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof D.FormData?`multipart/form-data; boundary=${a[x].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${aa(t)}`:t instanceof L.default?null:"text/plain;charset=UTF-8",ot=t=>{let{body:a}=t[x];return a===null?0:pe(a)?a.size:T.Buffer.isBuffer(a)?a.length:a&&typeof a.getLengthSync=="function"&&a.hasKnownLength&&a.hasKnownLength()?a.getLengthSync():null},it=async(t,{body:a})=>{a===null?t.end():await ta(a,t)};var je=require("node:util"),ce=q(require("node:http"),1),xe=typeof ce.default.validateHeaderName=="function"?ce.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let a=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),a}},Fe=typeof ce.default.validateHeaderValue=="function"?ce.default.validateHeaderValue:(t,a)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(a)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},w=class t extends URLSearchParams{constructor(a){let e=[];if(a instanceof t){let r=a.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(s=>[n,s]))}else if(a!=null)if(typeof a=="object"&&!je.types.isBoxedPrimitive(a)){let r=a[Symbol.iterator];if(r==null)e.push(...Object.entries(a));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...a].map(n=>{if(typeof n!="object"||je.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(xe(r),Fe(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(s,c)=>(xe(s),Fe(s,String(c)),URLSearchParams.prototype[n].call(r,String(s).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return s=>(xe(s),URLSearchParams.prototype[n].call(r,String(s).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(a){let e=this.getAll(a);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(a)&&(r=r.toLowerCase()),r}forEach(a,e=void 0){for(let r of this.keys())Reflect.apply(a,e,[this.get(r),r,this])}*values(){for(let a of this.keys())yield this.get(a)}*entries(){for(let a of this.keys())yield[a,this.get(a)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((a,e)=>(a[e]=this.getAll(e),a),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((a,e)=>{let r=this.getAll(e);return e==="host"?a[e]=r[0]:a[e]=r.length>1?r:r[0],a},{})}};Object.defineProperties(w.prototype,["get","entries","forEach","values"].reduce((t,a)=>(t[a]={enumerable:!0},t),{}));function ut(t=[]){return new w(t.reduce((a,e,r,n)=>(r%2===0&&a.push(n.slice(r,r+2)),a),[]).filter(([a,e])=>{try{return xe(a),Fe(a,String(e)),!0}catch{return!1}}))}var ra=new Set([301,302,303,307,308]),_e=t=>ra.has(t);var j=Symbol("Response internals"),V=class t extends k{constructor(a=null,e={}){super(a,e);let r=e.status!=null?e.status:200,n=new w(e.headers);if(a!==null&&!n.has("Content-Type")){let o=Ue(a,this);o&&n.append("Content-Type",o)}this[j]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[j].type}get url(){return this[j].url||""}get status(){return this[j].status}get ok(){return this[j].status>=200&&this[j].status<300}get redirected(){return this[j].counter>0}get statusText(){return this[j].statusText}get headers(){return this[j].headers}get highWaterMark(){return this[j].highWaterMark}clone(){return new t(te(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(a,e=302){if(!_e(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(a).toString()},status:e})}static error(){let a=new t(null,{status:0,statusText:""});return a[j].type="error",a}static json(a=void 0,e={}){let r=JSON.stringify(a);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new w(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(V.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var It=require("node:url"),Mt=require("node:util");var st=t=>{if(t.search)return t.search;let a=t.href.length-1,e=t.hash||(t.href[a]==="#"?"#":"");return t.href[a-e.length]==="?"?"?":""};var lt=require("node:net");function pt(t,a=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",a&&(t.pathname="",t.search=""),t)}var ct=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),yt="strict-origin-when-cross-origin";function St(t){if(!ct.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function na(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let a=t.host.replace(/(^\[)|(]$)/g,""),e=(0,lt.isIP)(a);return e===4&&/^127\./.test(a)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(a)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function ae(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:na(t)}function dt(t,{referrerURLCallback:a,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=pt(n),s=pt(n,!0);o.toString().length>4096&&(o=s),a&&(o=a(o)),e&&(s=e(s));let c=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return s;case"unsafe-url":return o;case"strict-origin":return ae(o)&&!ae(c)?"no-referrer":s.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:ae(o)&&!ae(c)?"no-referrer":s;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:s;case"no-referrer-when-downgrade":return ae(o)&&!ae(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function bt(t){let a=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of a)r&&ct.has(r)&&(e=r);return e}var R=Symbol("Request internals"),ye=t=>typeof t=="object"&&typeof t[R]=="object",oa=(0,Mt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Y=class t extends k{constructor(a,e={}){let r;if(ye(a)?r=new URL(a.url):(r=new URL(a),a={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||a.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ye(e)&&"data"in e&&oa(),(e.body!=null||ye(a)&&a.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ye(a)&&a.body!==null?te(a):null;super(o,{size:e.size||a.size||0});let s=new w(e.headers||a.headers||{});if(o!==null&&!s.has("Content-Type")){let u=Ue(o,this);u&&s.set("Content-Type",u)}let c=ye(a)?a.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!Je(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let p=e.referrer==null?a.referrer:e.referrer;if(p==="")p="no-referrer";else if(p){let u=new URL(p);p=/^about:(\/\/)?client$/.test(u)?"client":u}else p=void 0;this[R]={method:n,redirect:e.redirect||a.redirect||"follow",headers:s,parsedURL:r,signal:c,referrer:p},this.follow=e.follow===void 0?a.follow===void 0?20:a.follow:e.follow,this.compress=e.compress===void 0?a.compress===void 0?!0:a.compress:e.compress,this.counter=e.counter||a.counter||0,this.agent=e.agent||a.agent,this.highWaterMark=e.highWaterMark||a.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||a.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||a.referrerPolicy||""}get method(){return this[R].method}get url(){return(0,It.format)(this[R].parsedURL)}get headers(){return this[R].headers}get redirect(){return this[R].redirect}get signal(){return this[R].signal}get referrer(){if(this[R].referrer==="no-referrer")return"";if(this[R].referrer==="client")return"about:client";if(this[R].referrer)return this[R].referrer.toString()}get referrerPolicy(){return this[R].referrerPolicy}set referrerPolicy(a){this[R].referrerPolicy=St(a)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Y.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var gt=t=>{let{parsedURL:a}=t[R],e=new w(t[R].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let c=ot(t);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=yt),t.referrer&&t.referrer!=="no-referrer"?t[R].referrer=dt(t):t[R].referrer="no-referrer",t[R].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(a));let o=st(a),s={path:a.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:a,options:s}};var ve=class extends G{constructor(a,e="aborted"){super(a,e)}};Ee();Ve();var ia=new Set(["data:","http:","https:"]);async function he(t,a){return new Promise((e,r)=>{let n=new Y(t,a),{parsedURL:o,options:s}=gt(n);if(!ia.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ae.default)(n.url),E=new V(l,{headers:{"Content-Type":l.typeFull}});e(E);return}let c=(o.protocol==="https:"?Rt.default:mt.default).request,{signal:p}=n,u=null,g=()=>{let l=new ve("The operation was aborted.");r(l),n.body&&n.body instanceof B.default.Readable&&n.body.destroy(l),!(!u||!u.body)&&u.body.emit("error",l)};if(p&&p.aborted){g();return}let v=()=>{g(),N()},C=c(o.toString(),s);p&&p.addEventListener("abort",v);let N=()=>{C.abort(),p&&p.removeEventListener("abort",v)};C.on("error",l=>{r(new U(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),N()}),ua(C,l=>{u&&u.body&&u.body.destroy(l)}),process.version<"v14"&&C.on("socket",l=>{let E;l.prependListener("end",()=>{E=l._eventsCount}),l.prependListener("close",S=>{if(u&&E<l._eventsCount&&!S){let d=new Error("Premature close");d.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",d)}})}),C.on("response",l=>{C.setTimeout(0);let E=ut(l.rawHeaders);if(_e(l.statusCode)){let b=E.get("Location"),P=null;try{P=b===null?null:new URL(b,n.url)}catch{if(n.redirect!=="manual"){r(new U(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),N();return}}switch(n.redirect){case"error":r(new U(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),N();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new U(`maximum redirect reached at: ${n.url}`,"max-redirect")),N();return}let m={headers:new w(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:te(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Xe(n.url,P)||!et(n.url,P))for(let Ft of["authorization","www-authenticate","cookie","cookie2"])m.headers.delete(Ft);if(l.statusCode!==303&&n.body&&a.body instanceof B.default.Readable){r(new U("Cannot follow redirect with body being a readable stream","unsupported-redirect")),N();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(m.method="GET",m.body=void 0,m.headers.delete("content-length"));let oe=bt(E);oe&&(m.referrerPolicy=oe),e(he(new Y(P,m))),N();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}p&&l.once("end",()=>{p.removeEventListener("abort",v)});let S=(0,B.pipeline)(l,new B.PassThrough,b=>{b&&r(b)});process.version<"v12.10"&&l.on("aborted",v);let d={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:E,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},A=E.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||l.statusCode===204||l.statusCode===304){u=new V(S,d),e(u);return}let $={flush:Z.default.Z_SYNC_FLUSH,finishFlush:Z.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){S=(0,B.pipeline)(S,Z.default.createGunzip($),b=>{b&&r(b)}),u=new V(S,d),e(u);return}if(A==="deflate"||A==="x-deflate"){let b=(0,B.pipeline)(l,new B.PassThrough,P=>{P&&r(P)});b.once("data",P=>{(P[0]&15)===8?S=(0,B.pipeline)(S,Z.default.createInflate(),m=>{m&&r(m)}):S=(0,B.pipeline)(S,Z.default.createInflateRaw(),m=>{m&&r(m)}),u=new V(S,d),e(u)}),b.once("end",()=>{u||(u=new V(S,d),e(u))});return}if(A==="br"){S=(0,B.pipeline)(S,Z.default.createBrotliDecompress(),b=>{b&&r(b)}),u=new V(S,d),e(u);return}u=new V(S,d),e(u)}),it(C,n).catch(r)})}function ua(t,a){let e=Se.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",s=>{let{headers:c}=s;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),t.on("socket",s=>{let c=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",a(u)}},p=u=>{n=Se.Buffer.compare(u.slice(-5),e)===0,!n&&o&&(n=Se.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&Se.Buffer.compare(u.slice(-2),e.slice(3))===0),o=u};s.prependListener("close",c),s.on("data",p),t.on("close",()=>{s.removeListener("close",c),s.removeListener("data",p)})})}var i=q(require("graphql-tag")),de=i.default`
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
  ${de}
`,z=i.default`
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
  ${z}
`,Te=i.default`
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
  ${de}
  ${z}
`,pa=i.default`
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
  ${de}
  ${z}
`,la=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,At=i.default`
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
  ${la}
`,Pt=i.default`
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
  ${de}
  ${be}
  ${z}
`,ca=i.default`
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
  ${de}
  ${be}
  ${z}
`,ya=i.default`
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
`,Et=i.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,ke=i.default`
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
`,Sa=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,da=i.default`
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
`,ba=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ia=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ma=i.default`
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
`,ga=i.default`
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
`,ma=i.default`
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
  ${z}
`,Ra=i.default`
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
`,Aa=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${pa}
`,Pa=i.default`
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
  ${Te}
`,Ea=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Te}
`,Ca=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,fa=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Da=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ua=i.default`
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
`,_a=i.default`
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
  ${Te}
`,va=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ha=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${At}
`,Ta=i.default`
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
  ${Pt}
`,wa=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${ca}
`,Ba=i.default`
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
  ${z}
`,Oa=i.default`
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
`,La=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ya}
`,Va=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Na=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,qa=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ja=i.default`
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
`,ka=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,za=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ga=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ha=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Qa=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,$a=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Wa=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Ka=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ya=i.default`
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
`,Za=i.default`
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
  ${Pt}
`,Ja=i.default`
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
  ${ke}
`,Xa=i.default`
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
  ${ke}
`,er=i.default`
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
`,tr=i.default`
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
`,ar=i.default`
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
  ${Et}
  ${z}
`,rr=i.default`
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
  ${Et}
`,nr=i.default`
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
  ${Te}
`,or=i.default`
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
  ${Sa}
`,ir=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ur=i.default`
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
  ${ke}
`,pr=i.default`
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
  ${z}
  ${At}
`,lr=i.default`
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
  ${z}
`,cr=i.default`
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
`,yr=(t,a,e,r)=>t();function Ct(t,a=yr){return{createLinkedBranch(e,r,n){return a(o=>t.request({document:da,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return a(o=>t.request({document:ba,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return a(o=>t.request({document:Ia,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return a(o=>t.request({document:Ma,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return a(o=>t.request({document:ga,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return a(o=>t.request({document:ma,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return a(o=>t.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return a(o=>t.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return a(o=>t.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return a(o=>t.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return a(o=>t.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return a(o=>t.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return a(o=>t.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return a(o=>t.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return a(o=>t.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return a(o=>t.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return a(o=>t.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return a(o=>t.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return a(o=>t.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return a(o=>t.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return a(o=>t.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return a(o=>t.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return a(o=>t.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return a(o=>t.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return a(o=>t.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return a(o=>t.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return a(o=>t.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return a(o=>t.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return a(o=>t.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return a(o=>t.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return a(o=>t.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return a(o=>t.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return a(o=>t.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return a(o=>t.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return a(o=>t.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return a(o=>t.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return a(o=>t.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return a(o=>t.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return a(o=>t.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return a(o=>t.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return a(o=>t.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return a(o=>t.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return a(o=>t.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return a(o=>t.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return a(o=>t.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return a(o=>t.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return a(o=>t.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return a(o=>t.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return a(o=>t.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return a(o=>t.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return a(o=>t.request({document:cr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var ze=null,Ge=null,_t=null,Sr=(0,Dt.getPreferenceValues)();function dr({token:t,type:a}){let e=a==="personal"?`token ${t}`:`bearer ${t}`;_t=t,ze=Ct(new xt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ge=new ft.Octokit({auth:t,request:{fetch:he}})}var vt=Ut.OAuthService.github({personalAccessToken:Sr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:dr});function re(){if(!ze||!Ge)throw new Error("GitHub clients not initialized");return{github:ze,octokit:Ge,token:_t}}function ht(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var Tt=async(t,a,e=!1)=>{let{headers:r}=await a.request("GET /user"),n=(r["x-oauth-scopes"]||"").split(",").map(s=>s.trim()),o=Array.isArray(t)?t:[t];return e?o.every(s=>n.includes(s)):o.some(s=>n.includes(s))};var J=require("react/jsx-runtime");function Ie({project:t,children:a,mutateList:e,mutateDetail:r}){let{github:n,octokit:o}=re(),s=t.viewerCanClose||t.viewerCanReopen||t.viewerCanUpdate;async function c(){e&&await e(),r&&await r()}async function p(u){try{if(await(0,y.showToast)({style:y.Toast.Style.Animated,title:u?"Closing project":"Reopening project"}),!await Tt(["project","project:write"],o)){let v={style:y.Toast.Style.Failure,title:"Missing Scopes",message:'You need the "project" or "project:write" scopes to close or reopen a project. Please re-authenticate.',primaryAction:{title:"Re-authenticate",onAction:C=>{(0,y.openExtensionPreferences)(),C.hide()}}};await(0,y.showToast)(v);return}await n.changeProjectStatus({projectId:t.id,closed:u}),await c(),await(0,y.showToast)({style:y.Toast.Style.Success,title:`Project "${t.title}" is now ${u?"closed":"reopened"}`})}catch(g){await(0,y.showToast)({style:y.Toast.Style.Failure,title:`Failed ${u?"closing":"reopening"} project`,message:ht(g)})}}return(0,J.jsxs)(y.ActionPanel,{title:`Project: ${t.title}`,children:[a,(0,J.jsx)(y.Action.OpenInBrowser,{title:"Open in GitHub",icon:y.Icon.Globe,url:t.url}),s?(0,J.jsxs)(y.ActionPanel.Section,{children:[t.viewerCanClose&&t.viewerCanUpdate&&!t.closed?(0,J.jsx)(y.Action,{title:"Close Project",icon:y.Icon.Lock,shortcut:y.Keyboard.Shortcut.Common.Copy,style:y.Action.Style.Destructive,onAction:async()=>{await(0,y.confirmAlert)({title:"Close Project",message:"Are you sure you want to close this project?"})&&await p(!0)}}):null,t.viewerCanReopen&&t.viewerCanUpdate&&t.closed?(0,J.jsx)(y.Action,{title:"Reopen Project",icon:y.Icon.LockUnlocked,shortcut:y.Keyboard.Shortcut.Common.OpenWith,style:y.Action.Style.Destructive,onAction:async()=>{await(0,y.confirmAlert)({title:"Reopen Project",message:"Are you sure you want to reopen this project?"})&&await p(!1)}}):null]}):null]})}var M=require("@raycast/api"),wt=require("@raycast/utils"),He=require("date-fns");var _=require("react/jsx-runtime");function Qe({project:t,mutateList:a}){let{github:e}=re(),{data:r,isLoading:n,mutate:o}=(0,wt.useCachedPromise)(async p=>(await e.projectDetails({nodeId:p})).node,[t.id],{initialData:t}),s=Re(r),c=`# ${r.title}

${r.readme??"> No README provided."}`;return(0,_.jsx)(M.Detail,{markdown:c,isLoading:n,navigationTitle:r.title,metadata:(0,_.jsxs)(M.Detail.Metadata,{children:[(0,_.jsx)(M.Detail.Metadata.Label,{title:"Project",text:r.title}),(0,_.jsx)(M.Detail.Metadata.Label,{title:"Description",text:r.shortDescription??"No description provided"}),(0,_.jsxs)(M.Detail.Metadata.TagList,{title:"Status",children:[(0,_.jsx)(M.Detail.Metadata.TagList.Item,{text:r.public?"Public":"Private",color:r.public?M.Color.Green:M.Color.Orange,icon:r.public?M.Icon.Globe:M.Icon.Lock}),(0,_.jsx)(M.Detail.Metadata.TagList.Item,{text:r.closed?"Closed":"Open",color:r.closed?M.Color.Red:M.Color.Green,icon:r.closed?M.Icon.Xmark:M.Icon.Checkmark})]}),r.updatedAt?(0,_.jsx)(M.Detail.Metadata.Label,{title:"Updated",text:(0,He.format)(new Date(r.updatedAt),"dd MMM yyyy, HH:mm")}):null,(0,_.jsx)(M.Detail.Metadata.Separator,{}),(0,_.jsx)(M.Detail.Metadata.Label,{title:"Creator",text:s.text,icon:s.icon}),r.createdAt?(0,_.jsx)(M.Detail.Metadata.Label,{title:"Created",text:(0,He.format)(new Date(r.createdAt),"dd MMM yyyy, HH:mm")}):null]}),actions:(0,_.jsx)(Ie,{project:r,mutateList:a,mutateDetail:o})})}var Me=require("react/jsx-runtime");function $e({project:t,mutateList:a}){let e=new Date(t.updatedAt),r=Re(t),n=[{date:e,tooltip:`Updated: ${(0,Bt.format)(e,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:r.icon,tooltip:`Creator: ${r.text}`}];return(0,Me.jsx)(Q.List.Item,{title:t.title,subtitle:t.shortDescription??"",icon:{value:{source:"project.svg",tintColor:t.closed?Q.Color.Orange:Q.Color.Green},tooltip:`Closed: ${t.closed?"Yes":"No"}`},accessories:n,actions:(0,Me.jsx)(Ie,{project:t,mutateList:a,children:(0,Me.jsx)(Q.Action.Push,{title:"Show Details",icon:Q.Icon.Sidebar,target:(0,Me.jsx)(Qe,{project:t})})})})}var Ot=require("@raycast/utils");var Lt=(0,Ot.withAccessToken)(vt);var Vt=require("@raycast/utils");function Nt(t){let{github:a}=re();return(0,Vt.useCachedPromise)(async e=>{let{viewer:r}=await a.getViewer();return e===null?r?.projectsV2?.nodes??[]:r?.projectsV2?.nodes?.filter(n=>n&&n.closed===e)??[]},[t])}var ne=require("react/jsx-runtime");function br(){let[t,a]=(0,jt.useState)("open"),{data:e,isLoading:r,mutate:n}=Nt(t==="all"?null:t==="closed");return(0,ne.jsxs)(qt.List,{isLoading:r,searchBarPlaceholder:"Filter projects by name",searchBarAccessory:(0,ne.jsx)(Be,{setClosed:a}),children:[(e||[]).map(o=>(0,ne.jsx)($e,{project:o,mutateList:n},`project-${o.id}-${o.closed?"closed":"open"}`)),(0,ne.jsx)(Oe,{})]})}var Ir=Lt(br);
