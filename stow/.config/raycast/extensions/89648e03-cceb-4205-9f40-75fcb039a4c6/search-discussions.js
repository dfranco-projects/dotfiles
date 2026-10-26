"use strict";var $t=Object.create;var ge=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Yt=Object.getPrototypeOf,Jt=Object.prototype.hasOwnProperty;var Te=(a,t,e)=>()=>{if(e)throw e[0];try{return a&&(t=a(a=0)),t}catch(r){throw e=[r],r}};var te=(a,t)=>{for(var e in t)ge(a,e,{get:t[e],enumerable:!0})},Me=(a,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Kt(t))!Jt.call(a,n)&&n!==e&&ge(a,n,{get:()=>t[n],enumerable:!(r=Wt(t,n))||r.enumerable});return a},C=(a,t,e)=>(Me(a,t,"default"),e&&Me(e,t,"default")),O=(a,t,e)=>(e=a!=null?$t(Yt(a)):{},Me(t||!a||!a.__esModule?ge(e,"default",{value:a,enumerable:!0}):e,a)),Xt=a=>Me(ge({},"__esModule",{value:!0}),a);var D={};te(D,{default:()=>Ze.default});var Ze,Ae=Te(()=>{C(D,require("formdata-polyfill/esm.min.js"));Ze=O(require("formdata-polyfill/esm.min.js"))});var v={};te(v,{default:()=>rt.default});var rt,Ve=Te(()=>{C(v,require("fetch-blob/from.js"));rt=O(require("fetch-blob/from.js"))});var ot={};te(ot,{toFormData:()=>ia});function oa(a){let t=a.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let e=t[2]||t[3]||"",r=e.slice(e.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function ia(a,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let e=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ne(e[1]||e[2]),n,o,u,c,l,s,I=[],E=new D.FormData,B=S=>{u+=y.decode(S,{stream:!0})},N=S=>{I.push(S)},p=()=>{let S=new v.File(I,s,{type:l});E.append(c,S)},P=()=>{E.append(c,u)},y=new TextDecoder("utf-8");y.decode(),r.onPartBegin=function(){r.onPartData=B,r.onPartEnd=P,n="",o="",u="",c="",l="",s=null,I.length=0},r.onHeaderField=function(S){n+=y.decode(S,{stream:!0})},r.onHeaderValue=function(S){o+=y.decode(S,{stream:!0})},r.onHeaderEnd=function(){if(o+=y.decode(),n=n.toLowerCase(),n==="content-disposition"){let S=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);S&&(c=S[2]||S[3]||""),s=oa(o),s&&(r.onPartData=N,r.onPartEnd=p)}else n==="content-type"&&(l=o);o="",n=""};for await(let S of a)r.write(S);return r.end(),E}var k,b,nt,K,Ee,Ce,ea,pe,ta,aa,ra,na,X,Ne,it=Te(()=>{Ve();Ae();k=0,b={START_BOUNDARY:k++,HEADER_FIELD_START:k++,HEADER_FIELD:k++,HEADER_VALUE_START:k++,HEADER_VALUE:k++,HEADER_VALUE_ALMOST_DONE:k++,HEADERS_ALMOST_DONE:k++,PART_DATA_START:k++,PART_DATA:k++,END:k++},nt=1,K={PART_BOUNDARY:nt,LAST_BOUNDARY:nt*=2},Ee=10,Ce=13,ea=32,pe=45,ta=58,aa=97,ra=122,na=a=>a|32,X=()=>{},Ne=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=X,this.onHeaderField=X,this.onHeadersEnd=X,this.onHeaderValue=X,this.onPartBegin=X,this.onPartData=X,this.onPartEnd=X,this.boundaryChars={},t=`\r
--`+t;let e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r),this.boundaryChars[e[r]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=b.START_BOUNDARY}write(t){let e=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:c,index:l,state:s,flags:I}=this,E=this.boundary.length,B=E-1,N=t.length,p,P,y=d=>{this[d+"Mark"]=e},S=d=>{delete this[d+"Mark"]},R=(d,A,M,ne)=>{(A===void 0||A!==M)&&this[d](ne&&ne.subarray(A,M))},W=(d,A)=>{let M=d+"Mark";M in this&&(A?(R(d,this[M],e,t),delete this[M]):(R(d,this[M],t.length,t),this[M]=0))};for(e=0;e<r;e++)switch(p=t[e],s){case b.START_BOUNDARY:if(l===u.length-2){if(p===pe)I|=K.LAST_BOUNDARY;else if(p!==Ce)return;l++;break}else if(l-1===u.length-2){if(I&K.LAST_BOUNDARY&&p===pe)s=b.END,I=0;else if(!(I&K.LAST_BOUNDARY)&&p===Ee)l=0,R("onPartBegin"),s=b.HEADER_FIELD_START;else return;break}p!==u[l+2]&&(l=-2),p===u[l+2]&&l++;break;case b.HEADER_FIELD_START:s=b.HEADER_FIELD,y("onHeaderField"),l=0;case b.HEADER_FIELD:if(p===Ce){S("onHeaderField"),s=b.HEADERS_ALMOST_DONE;break}if(l++,p===pe)break;if(p===ta){if(l===1)return;W("onHeaderField",!0),s=b.HEADER_VALUE_START;break}if(P=na(p),P<aa||P>ra)return;break;case b.HEADER_VALUE_START:if(p===ea)break;y("onHeaderValue"),s=b.HEADER_VALUE;case b.HEADER_VALUE:p===Ce&&(W("onHeaderValue",!0),R("onHeaderEnd"),s=b.HEADER_VALUE_ALMOST_DONE);break;case b.HEADER_VALUE_ALMOST_DONE:if(p!==Ee)return;s=b.HEADER_FIELD_START;break;case b.HEADERS_ALMOST_DONE:if(p!==Ee)return;R("onHeadersEnd"),s=b.PART_DATA_START;break;case b.PART_DATA_START:s=b.PART_DATA,y("onPartData");case b.PART_DATA:if(n=l,l===0){for(e+=B;e<N&&!(t[e]in c);)e+=E;e-=B,p=t[e]}if(l<u.length)u[l]===p?(l===0&&W("onPartData",!0),l++):l=0;else if(l===u.length)l++,p===Ce?I|=K.PART_BOUNDARY:p===pe?I|=K.LAST_BOUNDARY:l=0;else if(l-1===u.length)if(I&K.PART_BOUNDARY){if(l=0,p===Ee){I&=~K.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),s=b.HEADER_FIELD_START;break}}else I&K.LAST_BOUNDARY&&p===pe?(R("onPartEnd"),s=b.END,I=0):l=0;if(l>0)o[l-1]=p;else if(n>0){let d=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,d),n=0,y("onPartData"),e--}break;case b.END:break;default:throw new Error(`Unexpected state entered: ${s}`)}W("onHeaderField"),W("onHeaderValue"),W("onPartData"),this.index=l,this.state=s,this.flags=I}end(){if(this.state===b.HEADER_FIELD_START&&this.index===0||this.state===b.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==b.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Dr={};te(Dr,{default:()=>fr});module.exports=Xt(Dr);var Ie=require("@raycast/api"),Gt=require("@raycast/utils"),Ht=require("lodash"),Qe=require("react");var _=require("@raycast/api"),Je=require("date-fns");var F=require("date-fns"),we=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],$e=we[0].value,We=a=>{let t=new Date,e,r=a.match(/sort:top created:>=(\d+)([dwmy])/);if(!r)return a;let n=parseInt(r[1],10);switch(r[2]){case"d":e=(0,F.subDays)(t,n);break;case"w":e=(0,F.subWeeks)(t,n);break;case"m":e=(0,F.subMonths)(t,n);break;case"y":e=(0,F.subYears)(t,n);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,F.format)(e,"yyyy-MM-dd")}`};var oe=require("@raycast/api");function Be(a){return a?{icon:{source:a.avatarUrl??oe.Icon.Person,mask:oe.Image.Mask.Circle},text:(a.name?a.name:a.login)??"-"}:{icon:oe.Icon.Person,text:"Unknown"}}var f=require("@raycast/api"),j=require("react/jsx-runtime"),Ye=({sortQuery:a,setSortQuery:t,data:e})=>t?(0,j.jsxs)(f.ActionPanel.Submenu,{title:"Sort by",icon:f.Icon.ArrowUp,shortcut:f.Keyboard.Shortcut.Common.Duplicate,children:[e.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,j.jsx)(Ke,{title:r,value:n,sortQuery:a??"",setSortQuery:t},n||"relevance")),e.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,j.jsx)(f.ActionPanel.Section,{title:"Most Reactions",children:e.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,j.jsx)(Ke,{title:r,value:n,sortQuery:a??"",setSortQuery:t},n))})]}):(0,j.jsx)(j.Fragment,{}),Ke=({title:a,value:t,sortQuery:e,setSortQuery:r})=>(0,j.jsx)(f.Action,{title:a,icon:e===t?{source:f.Icon.CheckCircle,tintColor:f.Color.Green}:f.Icon.Circle,onAction:()=>r(t)});var J=require("react/jsx-runtime");function Zt(a){let t=a.category?.name?`Category: ${a.category?.name}`:"Unknown",e=a.category?.emojiHTML;if(!e)return{value:{source:a.repository?.owner?.avatarUrl},tooltip:t};let n=(()=>{let o=/fallback-src="(.*)"/,u=e.match(o);if(u)return u[1]})();return n&&{value:{source:n},tooltip:t}}function Xe(a){let t=a.discussion,e=Be(t.author);return(0,J.jsx)(_.List.Item,{icon:Zt(t),title:t.title,subtitle:t.repository?.nameWithOwner,accessories:[{icon:t.answer?{source:_.Icon.Checkmark,tintColor:_.Color.Green}:void 0,tooltip:t.answer?"Answered":void 0},{icon:_.Icon.ArrowUp,text:`${t.upvoteCount}`,tooltip:`${t.upvoteCount} Upvotes`},{text:t.comments?`${t.comments.totalCount}`:void 0,icon:t.comments?_.Icon.SpeechBubble:void 0,tooltip:t.comments?`Comments: ${t.comments.totalCount}`:void 0},...t.publishedAt?[{date:new Date(t.publishedAt),tooltip:(0,Je.format)(new Date(t.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:e.icon,tooltip:e.text}],actions:(0,J.jsxs)(_.ActionPanel,{children:[(0,J.jsx)(_.Action.OpenInBrowser,{url:t.url}),(0,J.jsx)(_.ActionPanel.Section,{children:(0,J.jsx)(Ye,{data:we,...a})})]})})}var m=require("@raycast/api");function Oe(a){return[...a.userLogin?[`user:${a.userLogin}`]:[],...(a.orgLogins??[]).filter(e=>!!e).map(e=>`org:${e}`)].join(" ")}var wt=require("@raycast/utils");var xt=require("@octokit/rest"),Ut=require("@raycast/api"),_t=require("@raycast/utils"),vt=require("graphql-request");var At=O(require("node:http"),1),Pt=O(require("node:https"),1),ee=O(require("node:zlib"),1),w=O(require("node:stream"),1),ye=require("node:buffer");var ie={};te(ie,{default:()=>me.default});C(ie,require("data-uri-to-buffer"));var me=O(require("data-uri-to-buffer"));var L=O(require("node:stream"),1),$=require("node:util"),h=require("node:buffer");var ue={};te(ue,{default:()=>Re.default});C(ue,require("fetch-blob"));var Re=O(require("fetch-blob"));Ae();var Q=class extends Error{constructor(t,e){super(t),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var x=class extends Q{constructor(t,e,r){super(t,e),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Pe=Symbol.toStringTag,Le=a=>typeof a=="object"&&typeof a.append=="function"&&typeof a.delete=="function"&&typeof a.get=="function"&&typeof a.getAll=="function"&&typeof a.has=="function"&&typeof a.set=="function"&&typeof a.sort=="function"&&a[Pe]==="URLSearchParams",se=a=>a&&typeof a=="object"&&typeof a.arrayBuffer=="function"&&typeof a.type=="string"&&typeof a.stream=="function"&&typeof a.constructor=="function"&&/^(Blob|File)$/.test(a[Pe]),et=a=>typeof a=="object"&&(a[Pe]==="AbortSignal"||a[Pe]==="EventTarget"),tt=(a,t)=>{let e=new URL(t).hostname,r=new URL(a).hostname;return e===r||e.endsWith(`.${r}`)},at=(a,t)=>{let e=new URL(t).protocol,r=new URL(a).protocol;return e===r};var ua=(0,$.promisify)(L.default.pipeline),U=Symbol("Body internals"),z=class{constructor(t,{size:e=0}={}){let r=null;t===null?t=null:Le(t)?t=h.Buffer.from(t.toString()):se(t)||h.Buffer.isBuffer(t)||($.types.isAnyArrayBuffer(t)?t=h.Buffer.from(t):ArrayBuffer.isView(t)?t=h.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof L.default||(t instanceof D.FormData?(t=(0,D.formDataToBlob)(t),r=t.type.split("=")[1]):t=h.Buffer.from(String(t))));let n=t;h.Buffer.isBuffer(t)?n=L.default.Readable.from(t):se(t)&&(n=L.default.Readable.from(t.stream())),this[U]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=e,t instanceof L.default&&t.on("error",o=>{let u=o instanceof Q?o:new x(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[U].error=u})}get body(){return this[U].stream}get bodyUsed(){return this[U].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:e,byteLength:r}=await qe(this);return t.slice(e,e+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new D.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:e}=await Promise.resolve().then(()=>(it(),ot));return e(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[U].body&&this[U].body.type||"",e=await this.arrayBuffer();return new Re.default([e],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await qe(this);return new TextDecoder().decode(t)}buffer(){return qe(this)}};z.prototype.buffer=(0,$.deprecate)(z.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(z.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,$.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function qe(a){if(a[U].disturbed)throw new TypeError(`body used already for: ${a.url}`);if(a[U].disturbed=!0,a[U].error)throw a[U].error;let{body:t}=a;if(t===null)return h.Buffer.alloc(0);if(!(t instanceof L.default))return h.Buffer.alloc(0);let e=[],r=0;try{for await(let n of t){if(a.size>0&&r+n.length>a.size){let o=new x(`content size at ${a.url} over limit: ${a.size}`,"max-size");throw t.destroy(o),o}r+=n.length,e.push(n)}}catch(n){throw n instanceof Q?n:new x(`Invalid response body while trying to fetch ${a.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?h.Buffer.from(e.join("")):h.Buffer.concat(e,r)}catch(n){throw new x(`Could not create Buffer from response body for ${a.url}: ${n.message}`,"system",n)}else throw new x(`Premature close of server response while trying to fetch ${a.url}`)}var ae=(a,t)=>{let e,r,{body:n}=a[U];if(a.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof L.default&&typeof n.getBoundary!="function"&&(e=new L.PassThrough({highWaterMark:t}),r=new L.PassThrough({highWaterMark:t}),n.pipe(e),n.pipe(r),a[U].stream=e,n=r),n},sa=(0,$.deprecate)(a=>a.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),fe=(a,t)=>a===null?null:typeof a=="string"?"text/plain;charset=UTF-8":Le(a)?"application/x-www-form-urlencoded;charset=UTF-8":se(a)?a.type||null:h.Buffer.isBuffer(a)||$.types.isAnyArrayBuffer(a)||ArrayBuffer.isView(a)?null:a instanceof D.FormData?`multipart/form-data; boundary=${t[U].boundary}`:a&&typeof a.getBoundary=="function"?`multipart/form-data;boundary=${sa(a)}`:a instanceof L.default?null:"text/plain;charset=UTF-8",ut=a=>{let{body:t}=a[U];return t===null?0:se(t)?t.size:h.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},st=async(a,{body:t})=>{t===null?a.end():await ua(t,a)};var Fe=require("node:util"),le=O(require("node:http"),1),De=typeof le.default.validateHeaderName=="function"?le.default.validateHeaderName:a=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(a)){let t=new TypeError(`Header name must be a valid HTTP token [${a}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},je=typeof le.default.validateHeaderValue=="function"?le.default.validateHeaderValue:(a,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let e=new TypeError(`Invalid character in header content ["${a}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},T=class a extends URLSearchParams{constructor(t){let e=[];if(t instanceof a){let r=t.raw();for(let[n,o]of Object.entries(r))e.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Fe.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)e.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");e=[...t].map(n=>{if(typeof n!="object"||Fe.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([r,n])=>(De(r),je(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,c)=>(De(u),je(u,String(c)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(c)));case"delete":case"has":case"getAll":return u=>(De(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let e=this.getAll(t);if(e.length===0)return null;let r=e.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,e=void 0){for(let r of this.keys())Reflect.apply(t,e,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,e)=>(t[e]=this.getAll(e),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,e)=>{let r=this.getAll(e);return e==="host"?t[e]=r[0]:t[e]=r.length>1?r:r[0],t},{})}};Object.defineProperties(T.prototype,["get","entries","forEach","values"].reduce((a,t)=>(a[t]={enumerable:!0},a),{}));function pt(a=[]){return new T(a.reduce((t,e,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,e])=>{try{return De(t),je(t,String(e)),!0}catch{return!1}}))}var pa=new Set([301,302,303,307,308]),xe=a=>pa.has(a);var q=Symbol("Response internals"),V=class a extends z{constructor(t=null,e={}){super(t,e);let r=e.status!=null?e.status:200,n=new T(e.headers);if(t!==null&&!n.has("Content-Type")){let o=fe(t,this);o&&n.append("Content-Type",o)}this[q]={type:"default",url:e.url,status:r,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[q].type}get url(){return this[q].url||""}get status(){return this[q].status}get ok(){return this[q].status>=200&&this[q].status<300}get redirected(){return this[q].counter>0}get statusText(){return this[q].statusText}get headers(){return this[q].headers}get highWaterMark(){return this[q].highWaterMark}clone(){return new a(ae(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,e=302){if(!xe(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new a(null,{headers:{location:new URL(t).toString()},status:e})}static error(){let t=new a(null,{status:0,statusText:""});return t[q].type="error",t}static json(t=void 0,e={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new T(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new a(r,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(V.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var gt=require("node:url"),mt=require("node:util");var lt=a=>{if(a.search)return a.search;let t=a.href.length-1,e=a.hash||(a.href[t]==="#"?"#":"");return a.href[t-e.length]==="?"?"?":""};var yt=require("node:net");function ct(a,t=!1){return a==null||(a=new URL(a),/^(about|blob|data):$/.test(a.protocol))?"no-referrer":(a.username="",a.password="",a.hash="",t&&(a.pathname="",a.search=""),a)}var St=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),dt="strict-origin-when-cross-origin";function bt(a){if(!St.has(a))throw new TypeError(`Invalid referrerPolicy: ${a}`);return a}function la(a){if(/^(http|ws)s:$/.test(a.protocol))return!0;let t=a.host.replace(/(^\[)|(]$)/g,""),e=(0,yt.isIP)(t);return e===4&&/^127\./.test(t)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:a.host==="localhost"||a.host.endsWith(".localhost")?!1:a.protocol==="file:"}function re(a){return/^about:(blank|srcdoc)$/.test(a)||a.protocol==="data:"||/^(blob|filesystem):$/.test(a.protocol)?!0:la(a)}function It(a,{referrerURLCallback:t,referrerOriginCallback:e}={}){if(a.referrer==="no-referrer"||a.referrerPolicy==="")return null;let r=a.referrerPolicy;if(a.referrer==="about:client")return"no-referrer";let n=a.referrer,o=ct(n),u=ct(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),e&&(u=e(u));let c=new URL(a.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return re(o)&&!re(c)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===c.origin?o:re(o)&&!re(c)?"no-referrer":u;case"same-origin":return o.origin===c.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===c.origin?o:u;case"no-referrer-when-downgrade":return re(o)&&!re(c)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Mt(a){let t=(a.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let r of t)r&&St.has(r)&&(e=r);return e}var g=Symbol("Request internals"),ce=a=>typeof a=="object"&&typeof a[g]=="object",ca=(0,mt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Z=class a extends z{constructor(t,e={}){let r;if(ce(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=e.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ce(e)&&"data"in e&&ca(),(e.body!=null||ce(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ce(t)&&t.body!==null?ae(t):null;super(o,{size:e.size||t.size||0});let u=new T(e.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let s=fe(o,this);s&&u.set("Content-Type",s)}let c=ce(t)?t.signal:null;if("signal"in e&&(c=e.signal),c!=null&&!et(c))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let l=e.referrer==null?t.referrer:e.referrer;if(l==="")l="no-referrer";else if(l){let s=new URL(l);l=/^about:(\/\/)?client$/.test(s)?"client":s}else l=void 0;this[g]={method:n,redirect:e.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:c,referrer:l},this.follow=e.follow===void 0?t.follow===void 0?20:t.follow:e.follow,this.compress=e.compress===void 0?t.compress===void 0?!0:t.compress:e.compress,this.counter=e.counter||t.counter||0,this.agent=e.agent||t.agent,this.highWaterMark=e.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||t.referrerPolicy||""}get method(){return this[g].method}get url(){return(0,gt.format)(this[g].parsedURL)}get headers(){return this[g].headers}get redirect(){return this[g].redirect}get signal(){return this[g].signal}get referrer(){if(this[g].referrer==="no-referrer")return"";if(this[g].referrer==="client")return"about:client";if(this[g].referrer)return this[g].referrer.toString()}get referrerPolicy(){return this[g].referrerPolicy}set referrerPolicy(t){this[g].referrerPolicy=bt(t)}clone(){return new a(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Z.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Rt=a=>{let{parsedURL:t}=a[g],e=new T(a[g].headers);e.has("Accept")||e.set("Accept","*/*");let r=null;if(a.body===null&&/^(post|put)$/i.test(a.method)&&(r="0"),a.body!==null){let c=ut(a);typeof c=="number"&&!Number.isNaN(c)&&(r=String(c))}r&&e.set("Content-Length",r),a.referrerPolicy===""&&(a.referrerPolicy=dt),a.referrer&&a.referrer!=="no-referrer"?a[g].referrer=It(a):a[g].referrer="no-referrer",a[g].referrer instanceof URL&&e.set("Referer",a.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),a.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=a;typeof n=="function"&&(n=n(t));let o=lt(t),u={path:t.pathname+o,method:a.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:a.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Ue=class extends Q{constructor(t,e="aborted"){super(t,e)}};Ae();Ve();var ya=new Set(["data:","http:","https:"]);async function _e(a,t){return new Promise((e,r)=>{let n=new Z(a,t),{parsedURL:o,options:u}=Rt(n);if(!ya.has(o.protocol))throw new TypeError(`node-fetch cannot load ${a}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let p=(0,me.default)(n.url),P=new V(p,{headers:{"Content-Type":p.typeFull}});e(P);return}let c=(o.protocol==="https:"?Pt.default:At.default).request,{signal:l}=n,s=null,I=()=>{let p=new Ue("The operation was aborted.");r(p),n.body&&n.body instanceof w.default.Readable&&n.body.destroy(p),!(!s||!s.body)&&s.body.emit("error",p)};if(l&&l.aborted){I();return}let E=()=>{I(),N()},B=c(o.toString(),u);l&&l.addEventListener("abort",E);let N=()=>{B.abort(),l&&l.removeEventListener("abort",E)};B.on("error",p=>{r(new x(`request to ${n.url} failed, reason: ${p.message}`,"system",p)),N()}),Sa(B,p=>{s&&s.body&&s.body.destroy(p)}),process.version<"v14"&&B.on("socket",p=>{let P;p.prependListener("end",()=>{P=p._eventsCount}),p.prependListener("close",y=>{if(s&&P<p._eventsCount&&!y){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",S)}})}),B.on("response",p=>{B.setTimeout(0);let P=pt(p.rawHeaders);if(xe(p.statusCode)){let d=P.get("Location"),A=null;try{A=d===null?null:new URL(d,n.url)}catch{if(n.redirect!=="manual"){r(new x(`uri requested responds with an invalid redirect URL: ${d}`,"invalid-redirect")),N();return}}switch(n.redirect){case"error":r(new x(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),N();return;case"manual":break;case"follow":{if(A===null)break;if(n.counter>=n.follow){r(new x(`maximum redirect reached at: ${n.url}`,"max-redirect")),N();return}let M={headers:new T(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ae(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!tt(n.url,A)||!at(n.url,A))for(let Qt of["authorization","www-authenticate","cookie","cookie2"])M.headers.delete(Qt);if(p.statusCode!==303&&n.body&&t.body instanceof w.default.Readable){r(new x("Cannot follow redirect with body being a readable stream","unsupported-redirect")),N();return}(p.statusCode===303||(p.statusCode===301||p.statusCode===302)&&n.method==="POST")&&(M.method="GET",M.body=void 0,M.headers.delete("content-length"));let ne=Mt(P);ne&&(M.referrerPolicy=ne),e(_e(new Z(A,M))),N();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}l&&p.once("end",()=>{l.removeEventListener("abort",E)});let y=(0,w.pipeline)(p,new w.PassThrough,d=>{d&&r(d)});process.version<"v12.10"&&p.on("aborted",E);let S={url:n.url,status:p.statusCode,statusText:p.statusMessage,headers:P,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=P.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||p.statusCode===204||p.statusCode===304){s=new V(y,S),e(s);return}let W={flush:ee.default.Z_SYNC_FLUSH,finishFlush:ee.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){y=(0,w.pipeline)(y,ee.default.createGunzip(W),d=>{d&&r(d)}),s=new V(y,S),e(s);return}if(R==="deflate"||R==="x-deflate"){let d=(0,w.pipeline)(p,new w.PassThrough,A=>{A&&r(A)});d.once("data",A=>{(A[0]&15)===8?y=(0,w.pipeline)(y,ee.default.createInflate(),M=>{M&&r(M)}):y=(0,w.pipeline)(y,ee.default.createInflateRaw(),M=>{M&&r(M)}),s=new V(y,S),e(s)}),d.once("end",()=>{s||(s=new V(y,S),e(s))});return}if(R==="br"){y=(0,w.pipeline)(y,ee.default.createBrotliDecompress(),d=>{d&&r(d)}),s=new V(y,S),e(s);return}s=new V(y,S),e(s)}),st(B,n).catch(r)})}function Sa(a,t){let e=ye.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;a.on("response",u=>{let{headers:c}=u;r=c["transfer-encoding"]==="chunked"&&!c["content-length"]}),a.on("socket",u=>{let c=()=>{if(r&&!n){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}},l=s=>{n=ye.Buffer.compare(s.slice(-5),e)===0,!n&&o&&(n=ye.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&ye.Buffer.compare(s.slice(-2),e.slice(3))===0),o=s};u.prependListener("close",c),u.on("data",l),a.on("close",()=>{u.removeListener("close",c),u.removeListener("data",l)})})}var i=O(require("graphql-tag")),Se=i.default`
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
`,da=i.default`
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
  ${G}
`,ve=i.default`
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
  ${G}
`,ba=i.default`
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
  ${G}
`,Ia=i.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Et=i.default`
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
  ${Ia}
`,Ct=i.default`
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
  ${G}
`,Ma=i.default`
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
  ${G}
`,ga=i.default`
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
`,ft=i.default`
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
`,ma=i.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Ra=i.default`
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
`,Aa=i.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Pa=i.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ea=i.default`
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
  ${da}
`,Ca=i.default`
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
`,fa=i.default`
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
`,Da=i.default`
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
`,xa=i.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ba}
`,Ua=i.default`
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
  ${ve}
`,_a=i.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${ve}
`,va=i.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ha=i.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ta=i.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,wa=i.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ba=i.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Oa=i.default`
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
  ${ve}
`,La=i.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Va=i.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Et}
`,Na=i.default`
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
`,qa=i.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ma}
`,Fa=i.default`
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
`,ja=i.default`
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
`,ka=i.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ga}
`,za=i.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ga=i.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ha=i.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Qa=i.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,$a=i.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Wa=i.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ka=i.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ya=i.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ja=i.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Xa=i.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Za=i.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,er=i.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,tr=i.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ar=i.default`
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
`,rr=i.default`
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
`,nr=i.default`
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
`,or=i.default`
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
`,ir=i.default`
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
`,ur=i.default`
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
`,sr=i.default`
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
  ${G}
`,pr=i.default`
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
`,lr=i.default`
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
  ${ve}
`,cr=i.default`
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
  ${ma}
`,yr=i.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Sr=i.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,dr=i.default`
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
`,br=i.default`
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
  ${Et}
`,Ir=i.default`
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
`,Mr=i.default`
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
`,gr=(a,t,e,r)=>a();function Dt(a,t=gr){return{createLinkedBranch(e,r,n){return t(o=>a.request({document:Ra,variables:e,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,r,n){return t(o=>a.request({document:Aa,variables:e,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,r,n){return t(o=>a.request({document:Pa,variables:e,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,r,n){return t(o=>a.request({document:Ea,variables:e,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,r,n){return t(o=>a.request({document:Ca,variables:e,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,r,n){return t(o=>a.request({document:fa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,r,n){return t(o=>a.request({document:Da,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,r,n){return t(o=>a.request({document:xa,variables:e,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,r,n){return t(o=>a.request({document:Ua,variables:e,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,r,n){return t(o=>a.request({document:_a,variables:e,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,r,n){return t(o=>a.request({document:va,variables:e,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,r,n){return t(o=>a.request({document:ha,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,r,n){return t(o=>a.request({document:Ta,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,r,n){return t(o=>a.request({document:wa,variables:e,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,r,n){return t(o=>a.request({document:Ba,variables:e,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,r,n){return t(o=>a.request({document:Oa,variables:e,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,r,n){return t(o=>a.request({document:La,variables:e,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,r,n){return t(o=>a.request({document:Va,variables:e,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,r,n){return t(o=>a.request({document:Na,variables:e,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,r,n){return t(o=>a.request({document:qa,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,r,n){return t(o=>a.request({document:Fa,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,r,n){return t(o=>a.request({document:ja,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,r,n){return t(o=>a.request({document:ka,variables:e,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,r,n){return t(o=>a.request({document:za,variables:e,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,r,n){return t(o=>a.request({document:Ga,variables:e,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,r,n){return t(o=>a.request({document:Ha,variables:e,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,r,n){return t(o=>a.request({document:Qa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,r,n){return t(o=>a.request({document:$a,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,r,n){return t(o=>a.request({document:Wa,variables:e,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,r,n){return t(o=>a.request({document:Ka,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,r,n){return t(o=>a.request({document:Ya,variables:e,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,r,n){return t(o=>a.request({document:Ja,variables:e,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,r,n){return t(o=>a.request({document:Xa,variables:e,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,r,n){return t(o=>a.request({document:Za,variables:e,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:er,variables:e,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,r,n){return t(o=>a.request({document:tr,variables:e,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,r,n){return t(o=>a.request({document:ar,variables:e,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,r,n){return t(o=>a.request({document:rr,variables:e,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,r,n){return t(o=>a.request({document:nr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,r,n){return t(o=>a.request({document:or,variables:e,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,r,n){return t(o=>a.request({document:ir,variables:e,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,r,n){return t(o=>a.request({document:ur,variables:e,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,r,n){return t(o=>a.request({document:sr,variables:e,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,r,n){return t(o=>a.request({document:pr,variables:e,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,r,n){return t(o=>a.request({document:lr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,r,n){return t(o=>a.request({document:cr,variables:e,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,r,n){return t(o=>a.request({document:yr,variables:e,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",e)},removeStar(e,r,n){return t(o=>a.request({document:Sr,variables:e,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,r,n){return t(o=>a.request({document:dr,variables:e,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,r,n){return t(o=>a.request({document:br,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,r,n){return t(o=>a.request({document:Ir,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,r,n){return t(o=>a.request({document:Mr,variables:e,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var ze=null,Ge=null,ht=null,mr=(0,Ut.getPreferenceValues)();function Rr({token:a,type:t}){let e=t==="personal"?`token ${a}`:`bearer ${a}`;ht=a,ze=Dt(new vt.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Ge=new xt.Octokit({auth:a,request:{fetch:_e}})}var Tt=_t.OAuthService.github({personalAccessToken:mr.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Rr});function he(){if(!ze||!Ge)throw new Error("GitHub clients not initialized");return{github:ze,octokit:Ge,token:ht}}function Bt(){let{github:a}=he(),{data:t}=(0,wt.useCachedPromise)(async()=>(await a.getViewer()).viewer);return t}var H=require("react/jsx-runtime");function He(a){let t=Bt(),e=t?.organizations?.nodes?.filter(o=>o!=null)??[],r=e.map(o=>o.login),n=e.length>1;return(0,H.jsxs)(m.List.Dropdown,{tooltip:"Filter Repositories",onChange:a.onFilterChange,storeValue:!0,children:[(0,H.jsxs)(m.List.Dropdown.Section,{children:[(0,H.jsx)(m.List.Dropdown.Item,{title:"All Repositories",icon:m.Icon.List,value:""}),t&&e.length>0?(0,H.jsx)(m.List.Dropdown.Item,{title:"My Repositories",icon:m.Icon.Person,value:Oe({userLogin:t.login,orgLogins:r})}):null,n?(0,H.jsx)(m.List.Dropdown.Item,{title:"My Organizations",icon:m.Icon.Building,value:Oe({orgLogins:r})}):null]}),(0,H.jsxs)(m.List.Dropdown.Section,{children:[t?(0,H.jsx)(m.List.Dropdown.Item,{icon:{source:t.avatarUrl??m.Icon.PersonCircle,mask:m.Image.Mask.Circle},title:t.login,value:`user:${t.login}`}):null,e.map(o=>(0,H.jsx)(m.List.Dropdown.Item,{icon:{source:o.avatarUrl??m.Icon.PersonCircle,mask:m.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var Ot=require("@raycast/api"),Ar=require("lodash");function Lt(a){return[...new Map(a.map(t=>[t.id,t])).values()]}function Vt(a){return a?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}var Nt=require("@raycast/utils");var qt=(0,Nt.withAccessToken)(Tt);var kt=require("@raycast/utils");var Y=require("@raycast/api"),Pr=O(require("react")),jt=require("react/jsx-runtime");function Er(a){let t=a.min||1,e=a.max||100,r=a.default||10,o=(0,Y.getPreferenceValues)()[a.name]||"",u=Number(o);return isNaN(u)||u<t||u>e?r:u}function Ft(){return Math.min(Er({name:"numberOfResults",default:50}),25)}function zt(a){let{github:t}=he();return(0,kt.useCachedPromise)(e=>async({cursor:r})=>{let n=await t.searchDiscussions({query:e,numberOfItems:Ft(),after:r});return{data:Vt(n.searchDiscussions.nodes),hasMore:n.searchDiscussions.pageInfo.hasNextPage,cursor:n.searchDiscussions.pageInfo.endCursor??void 0}},[a])}var be=require("react/jsx-runtime");function Cr(){let{defaultSearchTerms:a}=(0,Ie.getPreferenceValues)(),[t,e]=(0,Qe.useState)((0,Ht.trim)(a)+" "),[r,n]=(0,Qe.useState)(null),[o,u]=(0,Gt.useCachedState)("sort-query",$e,{cacheNamespace:"github-search-discussion"}),{data:c,isLoading:l,pagination:s}=zt(`${r} ${We(o)} ${t}`),I=Lt(c??[]);return(0,be.jsx)(Ie.List,{isLoading:l,onSearchTextChange:e,searchText:t,searchBarAccessory:(0,be.jsx)(He,{onFilterChange:n}),throttle:!0,pagination:s,children:(0,be.jsx)(Ie.List.Section,{title:t.length>0?"Found Discussions":"Recent Discussions",subtitle:`${I.length}`,children:I.map(E=>(0,be.jsx)(Xe,{discussion:E,sortQuery:o,setSortQuery:u},E.id))})})}var fr=qt(Cr);
