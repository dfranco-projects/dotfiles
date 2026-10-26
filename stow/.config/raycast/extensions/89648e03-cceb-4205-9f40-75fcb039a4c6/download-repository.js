"use strict";var Fa=Object.create;var Te=Object.defineProperty;var ja=Object.getOwnPropertyDescriptor;var ka=Object.getOwnPropertyNames;var za=Object.getPrototypeOf,Ga=Object.prototype.hasOwnProperty;var rt=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(r){throw a=[r],r}};var we=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}},se=(t,e)=>{for(var a in e)Te(t,a,{get:e[a],enumerable:!0})},he=(t,e,a,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ka(e))!Ga.call(t,n)&&n!==a&&Te(t,n,{get:()=>e[n],enumerable:!(r=ja(e,n))||r.enumerable});return t},U=(t,e,a)=>(he(t,e,"default"),a&&he(a,e,"default")),D=(t,e,a)=>(a=t!=null?Fa(za(t)):{},he(e||!t||!t.__esModule?Te(a,"default",{value:t,enumerable:!0}):a,t)),Ha=t=>he(Te({},"__esModule",{value:!0}),t);var _={};se(_,{default:()=>Ut.default});var Ut,Le=rt(()=>{U(_,require("formdata-polyfill/esm.min.js"));Ut=D(require("formdata-polyfill/esm.min.js"))});var w={};se(w,{default:()=>Tt.default});var Tt,ot=rt(()=>{U(w,require("fetch-blob/from.js"));Tt=D(require("fetch-blob/from.js"))});var Bt={};se(Bt,{toFormData:()=>Ja});function Za(t){let e=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!e)return;let a=e[2]||e[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Ja(t,e){if(!/multipart/i.test(e))throw new TypeError("Failed to fetch");let a=e.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new it(a[1]||a[2]),n,o,i,p,s,u,l=[],M=new _.FormData,S=d=>{i+=I.decode(d,{stream:!0})},b=d=>{l.push(d)},c=()=>{let d=new w.File(l,u,{type:s});M.append(p,d)},g=()=>{M.append(p,i)},I=new TextDecoder("utf-8");I.decode(),r.onPartBegin=function(){r.onPartData=S,r.onPartEnd=g,n="",o="",i="",p="",s="",u=null,l.length=0},r.onHeaderField=function(d){n+=I.decode(d,{stream:!0})},r.onHeaderValue=function(d){o+=I.decode(d,{stream:!0})},r.onHeaderEnd=function(){if(o+=I.decode(),n=n.toLowerCase(),n==="content-disposition"){let d=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);d&&(p=d[2]||d[3]||""),u=Za(o),u&&(r.onPartData=b,r.onPartEnd=c)}else n==="content-type"&&(s=o);o="",n=""};for await(let d of t)r.write(d);return r.end(),M}var k,P,wt,ee,Ne,qe,Qa,Re,$a,Wa,Ka,Ya,oe,it,Ot=rt(()=>{ot();Le();k=0,P={START_BOUNDARY:k++,HEADER_FIELD_START:k++,HEADER_FIELD:k++,HEADER_VALUE_START:k++,HEADER_VALUE:k++,HEADER_VALUE_ALMOST_DONE:k++,HEADERS_ALMOST_DONE:k++,PART_DATA_START:k++,PART_DATA:k++,END:k++},wt=1,ee={PART_BOUNDARY:wt,LAST_BOUNDARY:wt*=2},Ne=10,qe=13,Qa=32,Re=45,$a=58,Wa=97,Ka=122,Ya=t=>t|32,oe=()=>{},it=class{constructor(e){this.index=0,this.flags=0,this.onHeaderEnd=oe,this.onHeaderField=oe,this.onHeadersEnd=oe,this.onHeaderValue=oe,this.onPartBegin=oe,this.onPartData=oe,this.onPartEnd=oe,this.boundaryChars={},e=`\r
--`+e;let a=new Uint8Array(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=P.START_BOUNDARY}write(e){let a=0,r=e.length,n=this.index,{lookbehind:o,boundary:i,boundaryChars:p,index:s,state:u,flags:l}=this,M=this.boundary.length,S=M-1,b=e.length,c,g,I=m=>{this[m+"Mark"]=a},d=m=>{delete this[m+"Mark"]},A=(m,E,R,T)=>{(E===void 0||E!==R)&&this[m](T&&T.subarray(E,R))},C=(m,E)=>{let R=m+"Mark";R in this&&(E?(A(m,this[R],a,e),delete this[R]):(A(m,this[R],e.length,e),this[R]=0))};for(a=0;a<r;a++)switch(c=e[a],u){case P.START_BOUNDARY:if(s===i.length-2){if(c===Re)l|=ee.LAST_BOUNDARY;else if(c!==qe)return;s++;break}else if(s-1===i.length-2){if(l&ee.LAST_BOUNDARY&&c===Re)u=P.END,l=0;else if(!(l&ee.LAST_BOUNDARY)&&c===Ne)s=0,A("onPartBegin"),u=P.HEADER_FIELD_START;else return;break}c!==i[s+2]&&(s=-2),c===i[s+2]&&s++;break;case P.HEADER_FIELD_START:u=P.HEADER_FIELD,I("onHeaderField"),s=0;case P.HEADER_FIELD:if(c===qe){d("onHeaderField"),u=P.HEADERS_ALMOST_DONE;break}if(s++,c===Re)break;if(c===$a){if(s===1)return;C("onHeaderField",!0),u=P.HEADER_VALUE_START;break}if(g=Ya(c),g<Wa||g>Ka)return;break;case P.HEADER_VALUE_START:if(c===Qa)break;I("onHeaderValue"),u=P.HEADER_VALUE;case P.HEADER_VALUE:c===qe&&(C("onHeaderValue",!0),A("onHeaderEnd"),u=P.HEADER_VALUE_ALMOST_DONE);break;case P.HEADER_VALUE_ALMOST_DONE:if(c!==Ne)return;u=P.HEADER_FIELD_START;break;case P.HEADERS_ALMOST_DONE:if(c!==Ne)return;A("onHeadersEnd"),u=P.PART_DATA_START;break;case P.PART_DATA_START:u=P.PART_DATA,I("onPartData");case P.PART_DATA:if(n=s,s===0){for(a+=S;a<b&&!(e[a]in p);)a+=M;a-=S,c=e[a]}if(s<i.length)i[s]===c?(s===0&&C("onPartData",!0),s++):s=0;else if(s===i.length)s++,c===qe?l|=ee.PART_BOUNDARY:c===Re?l|=ee.LAST_BOUNDARY:s=0;else if(s-1===i.length)if(l&ee.PART_BOUNDARY){if(s=0,c===Ne){l&=~ee.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),u=P.HEADER_FIELD_START;break}}else l&ee.LAST_BOUNDARY&&c===Re?(A("onPartEnd"),u=P.END,l=0):s=0;if(s>0)o[s-1]=c;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,n,m),n=0,I("onPartData"),a--}break;case P.END:break;default:throw new Error(`Unexpected state entered: ${u}`)}C("onHeaderField"),C("onHeaderValue"),C("onPartData"),this.index=s,this.state=u,this.flags=l}end(){if(this.state===P.HEADER_FIELD_START&&this.index===0||this.state===P.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==P.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var ya=we((Uo,ca)=>{ca.exports=Qe;function Qe(){this.pending=0,this.max=1/0,this.listeners=[],this.waiting=[],this.error=null}Qe.prototype.go=function(t){this.pending<this.max?la(this,t):this.waiting.push(t)};Qe.prototype.wait=function(t){this.pending===0?t(this.error):this.listeners.push(t)};Qe.prototype.hold=function(){return pa(this)};function pa(t){t.pending+=1;var e=!1;return a;function a(n){if(e)throw new Error("callback called twice");if(e=!0,t.error=t.error||n,t.pending-=1,t.waiting.length>0&&t.pending<t.max)la(t,t.waiting.shift());else if(t.pending===0){var o=t.listeners;t.listeners=[],o.forEach(r)}}function r(n){n(t.error)}}function la(t,e){e(pa(t))}});var Sa=we(xe=>{var De=require("fs"),$e=require("util"),dt=require("stream"),da=dt.Readable,St=dt.Writable,Sn=dt.PassThrough,bn=ya(),We=require("events").EventEmitter;xe.createFromBuffer=In;xe.createFromFd=Mn;xe.BufferSlicer=Y;xe.FdSlicer=K;$e.inherits(K,We);function K(t,e){e=e||{},We.call(this),this.fd=t,this.pend=new bn,this.pend.max=1,this.refCount=0,this.autoClose=!!e.autoClose}K.prototype.read=function(t,e,a,r,n){var o=this;o.pend.go(function(i){De.read(o.fd,t,e,a,r,function(p,s,u){i(),n(p,s,u)})})};K.prototype.write=function(t,e,a,r,n){var o=this;o.pend.go(function(i){De.write(o.fd,t,e,a,r,function(p,s,u){i(),n(p,s,u)})})};K.prototype.createReadStream=function(t){return new Ke(this,t)};K.prototype.createWriteStream=function(t){return new Ye(this,t)};K.prototype.ref=function(){this.refCount+=1};K.prototype.unref=function(){var t=this;if(t.refCount-=1,t.refCount>0)return;if(t.refCount<0)throw new Error("invalid unref");t.autoClose&&De.close(t.fd,e);function e(a){a?t.emit("error",a):t.emit("close")}};$e.inherits(Ke,da);function Ke(t,e){e=e||{},da.call(this,e),this.context=t,this.context.ref(),this.start=e.start||0,this.endOffset=e.end,this.pos=this.start,this.destroyed=!1}Ke.prototype._read=function(t){var e=this;if(!e.destroyed){var a=Math.min(e._readableState.highWaterMark,t);if(e.endOffset!=null&&(a=Math.min(a,e.endOffset-e.pos)),a<=0){e.destroyed=!0,e.push(null),e.context.unref();return}e.context.pend.go(function(r){if(e.destroyed)return r();var n=Buffer.allocUnsafe(a);De.read(e.context.fd,n,0,a,e.pos,function(o,i){o?e.destroy(o):i===0?(e.destroyed=!0,e.push(null),e.context.unref()):(e.pos+=i,e.push(n.slice(0,i))),r()})})}};Ke.prototype.destroy=function(t){this.destroyed||(t=t||new Error("stream destroyed"),this.destroyed=!0,this.emit("error",t),this.context.unref())};$e.inherits(Ye,St);function Ye(t,e){e=e||{},St.call(this,e),this.context=t,this.context.ref(),this.start=e.start||0,this.endOffset=e.end==null?1/0:+e.end,this.bytesWritten=0,this.pos=this.start,this.destroyed=!1,this.on("finish",this.destroy.bind(this))}Ye.prototype._write=function(t,e,a){var r=this;if(!r.destroyed){if(r.pos+t.length>r.endOffset){var n=new Error("maximum file length exceeded");n.code="ETOOBIG",r.destroy(),a(n);return}r.context.pend.go(function(o){if(r.destroyed)return o();De.write(r.context.fd,t,0,t.length,r.pos,function(i,p){i?(r.destroy(),o(),a(i)):(r.bytesWritten+=p,r.pos+=p,r.emit("progress"),o(),a())})})}};Ye.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.context.unref())};$e.inherits(Y,We);function Y(t,e){We.call(this),e=e||{},this.refCount=0,this.buffer=t,this.maxChunkSize=e.maxChunkSize||Number.MAX_SAFE_INTEGER}Y.prototype.read=function(t,e,a,r,n){if(!(0<=e&&e<=t.length))throw new RangeError("offset outside buffer: 0 <= "+e+" <= "+t.length);if(r<0)throw new RangeError("position is negative: "+r);if(e+a>t.length&&(a=t.length-e),r+a>this.buffer.length&&(a=this.buffer.length-r),a<=0){setImmediate(function(){n(null,0)});return}this.buffer.copy(t,e,r,r+a),setImmediate(function(){n(null,a)})};Y.prototype.write=function(t,e,a,r,n){t.copy(this.buffer,r,e,e+a),setImmediate(function(){n(null,a,t)})};Y.prototype.createReadStream=function(t){t=t||{};var e=new Sn(t);e.destroyed=!1,e.start=t.start||0,e.endOffset=t.end,e.pos=e.endOffset||this.buffer.length;for(var a=this.buffer.slice(e.start,e.pos),r=0;;){var n=r+this.maxChunkSize;if(n>=a.length){r<a.length&&e.write(a.slice(r,a.length));break}e.write(a.slice(r,n)),r=n}return e.end(),e.destroy=function(){e.destroyed=!0},e};Y.prototype.createWriteStream=function(t){var e=this;t=t||{};var a=new St(t);return a.start=t.start||0,a.endOffset=t.end==null?this.buffer.length:+t.end,a.bytesWritten=0,a.pos=a.start,a.destroyed=!1,a._write=function(r,n,o){if(!a.destroyed){var i=a.pos+r.length;if(i>a.endOffset){var p=new Error("maximum file length exceeded");p.code="ETOOBIG",a.destroyed=!0,o(p);return}r.copy(e.buffer,a.pos,0,r.length),a.bytesWritten+=r.length,a.pos=i,a.emit("progress"),o()}},a.destroy=function(){a.destroyed=!0},a};Y.prototype.ref=function(){this.refCount+=1};Y.prototype.unref=function(){if(this.refCount-=1,this.refCount<0)throw new Error("invalid unref")};function In(t,e){return new Y(t,e)}function Mn(t,e){return new K(t,e)}});var Ma=we((vo,Ia)=>{var te=require("buffer").Buffer,bt=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];typeof Int32Array<"u"&&(bt=new Int32Array(bt));function ba(t){if(te.isBuffer(t))return t;var e=typeof te.alloc=="function"&&typeof te.from=="function";if(typeof t=="number")return e?te.alloc(t):new te(t);if(typeof t=="string")return e?te.from(t):new te(t);throw new Error("input must be buffer, number, or string, received "+typeof t)}function gn(t){var e=ba(4);return e.writeInt32BE(t,0),e}function It(t,e){t=ba(t),te.isBuffer(e)&&(e=e.readUInt32BE(0));for(var a=~~e^-1,r=0;r<t.length;r++)a=bt[(a^t[r])&255]^a>>>8;return a^-1}function Mt(){return gn(It.apply(null,arguments))}Mt.signed=function(){return It.apply(null,arguments)};Mt.unsigned=function(){return It.apply(null,arguments)>>>0};Ia.exports=Mt});var xa=we(V=>{var gt=require("fs"),mn=require("zlib"),ga=Sa(),Rn=Ma(),Xe=require("util"),et=require("events").EventEmitter,ma=require("stream").Transform,Rt=require("stream").PassThrough,An=require("stream").Writable;V.open=En;V.fromFd=Ra;V.fromBuffer=Pn;V.fromRandomAccessReader=At;V.dosDateTimeToDate=Pa;V.getFileNameLowLevel=fa;V.validateFileName=Ca;V.parseExtraFields=Da;V.ZipFile=Q;V.Entry=de;V.LocalFileHeader=Ea;V.RandomAccessReader=ae;function En(t,e,a){typeof e=="function"&&(a=e,e=null),e==null&&(e={}),e.autoClose==null&&(e.autoClose=!0),e.lazyEntries==null&&(e.lazyEntries=!1),e.decodeStrings==null&&(e.decodeStrings=!0),e.validateEntrySizes==null&&(e.validateEntrySizes=!0),e.strictFileNames==null&&(e.strictFileNames=!1),a==null&&(a=Je),gt.open(t,"r",function(r,n){if(r)return a(r);Ra(n,e,function(o,i){o&&gt.close(n,Je),a(o,i)})})}function Ra(t,e,a){typeof e=="function"&&(a=e,e=null),e==null&&(e={}),e.autoClose==null&&(e.autoClose=!1),e.lazyEntries==null&&(e.lazyEntries=!1),e.decodeStrings==null&&(e.decodeStrings=!0),e.validateEntrySizes==null&&(e.validateEntrySizes=!0),e.strictFileNames==null&&(e.strictFileNames=!1),a==null&&(a=Je),gt.fstat(t,function(r,n){if(r)return a(r);var o=ga.createFromFd(t,{autoClose:!0});At(o,n.size,e,a)})}function Pn(t,e,a){typeof e=="function"&&(a=e,e=null),e==null&&(e={}),e.autoClose=!1,e.lazyEntries==null&&(e.lazyEntries=!1),e.decodeStrings==null&&(e.decodeStrings=!0),e.validateEntrySizes==null&&(e.validateEntrySizes=!0),e.strictFileNames==null&&(e.strictFileNames=!1);var r=ga.createFromBuffer(t,{maxChunkSize:65536});At(r,t.length,e,a)}function At(t,e,a,r){typeof a=="function"&&(r=a,a=null),a==null&&(a={}),a.autoClose==null&&(a.autoClose=!0),a.lazyEntries==null&&(a.lazyEntries=!1),a.decodeStrings==null&&(a.decodeStrings=!0);var n=!!a.decodeStrings;if(a.validateEntrySizes==null&&(a.validateEntrySizes=!0),a.strictFileNames==null&&(a.strictFileNames=!1),r==null&&(r=Je),typeof e!="number")throw new Error("expected totalSize parameter to be a number");if(e>Number.MAX_SAFE_INTEGER)throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");t.ref();var o=22,i=20,p=65535,s=Math.min(i+o+p,e),u=Z(s),l=e-u.length;ye(t,u,0,s,l,function(M){if(M)return r(M);for(var S=s-o;S>=0;S-=1)if(u.readUInt32LE(S)===101010256){var b=u.subarray(S),c=b.readUInt16LE(4),g=b.readUInt16LE(10),I=b.readUInt32LE(16),d=b.readUInt16LE(20),A=b.length-o;if(d!==A)return r(new Error("Invalid comment length. Expected: "+A+". Found: "+d+". Are there extra bytes at the end of the file? Or is the end of central dir signature `PK\u263A\u263B` in the comment?"));var C=n?Ze(b.subarray(22),!1):b.subarray(22);if(S-i>=0&&u.readUInt32LE(S-i)===117853008){var m=u.subarray(S-i,S-i+i),E=ce(m,8),R=Z(56);return ye(t,R,0,R.length,E,function(T){return T?r(T):R.readUInt32LE(0)!==101075792?r(new Error("invalid zip64 end of central directory record signature")):(c=R.readUInt32LE(16),c!==0?r(new Error("multi-disk zip files are not supported: found disk number: "+c)):(g=ce(R,32),I=ce(R,48),r(null,new Q(t,I,e,g,C,a.autoClose,a.lazyEntries,n,a.validateEntrySizes,a.strictFileNames))))})}return c!==0?r(new Error("multi-disk zip files are not supported: found disk number: "+c)):r(null,new Q(t,I,e,g,C,a.autoClose,a.lazyEntries,n,a.validateEntrySizes,a.strictFileNames))}r(new Error("End of central directory record signature not found. Either not a zip file, or file is truncated."))})}Xe.inherits(Q,et);function Q(t,e,a,r,n,o,i,p,s,u){var l=this;et.call(l),l.reader=t,l.reader.on("error",function(M){Aa(l,M)}),l.reader.once("close",function(){l.emit("close")}),l.readEntryCursor=e,l.fileSize=a,l.entryCount=r,l.comment=n,l.entriesRead=0,l.autoClose=!!o,l.lazyEntries=!!i,l.decodeStrings=!!p,l.validateEntrySizes=!!s,l.strictFileNames=!!u,l.isOpen=!0,l.emittedError=!1,l.lazyEntries||l._readEntry()}Q.prototype.close=function(){this.isOpen&&(this.isOpen=!1,this.reader.unref())};function H(t,e){t.autoClose&&t.close(),Aa(t,e)}function Aa(t,e){t.emittedError||(t.emittedError=!0,t.emit("error",e))}Q.prototype.readEntry=function(){if(!this.lazyEntries)throw new Error("readEntry() called without lazyEntries:true");this._readEntry()};Q.prototype._readEntry=function(){var t=this;if(t.entryCount===t.entriesRead){setImmediate(function(){t.autoClose&&t.close(),!t.emittedError&&t.emit("end")});return}if(!t.emittedError){var e=Z(46);ye(t.reader,e,0,e.length,t.readEntryCursor,function(a){if(a)return H(t,a);if(!t.emittedError){var r=new de,n=e.readUInt32LE(0);if(n!==33639248)return H(t,new Error("invalid central directory file header signature: 0x"+n.toString(16)));if(r.versionMadeBy=e.readUInt16LE(4),r.versionNeededToExtract=e.readUInt16LE(6),r.generalPurposeBitFlag=e.readUInt16LE(8),r.compressionMethod=e.readUInt16LE(10),r.lastModFileTime=e.readUInt16LE(12),r.lastModFileDate=e.readUInt16LE(14),r.crc32=e.readUInt32LE(16),r.compressedSize=e.readUInt32LE(20),r.uncompressedSize=e.readUInt32LE(24),r.fileNameLength=e.readUInt16LE(28),r.extraFieldLength=e.readUInt16LE(30),r.fileCommentLength=e.readUInt16LE(32),r.internalFileAttributes=e.readUInt16LE(36),r.externalFileAttributes=e.readUInt32LE(38),r.relativeOffsetOfLocalHeader=e.readUInt32LE(42),r.generalPurposeBitFlag&64)return H(t,new Error("strong encryption is not supported"));t.readEntryCursor+=46,e=Z(r.fileNameLength+r.extraFieldLength+r.fileCommentLength),ye(t.reader,e,0,e.length,t.readEntryCursor,function(o){if(o)return H(t,o);if(!t.emittedError){r.fileNameRaw=e.subarray(0,r.fileNameLength);var i=r.fileNameLength+r.extraFieldLength;r.extraFieldRaw=e.subarray(r.fileNameLength,i),r.fileCommentRaw=e.subarray(i,i+r.fileCommentLength);try{r.extraFields=Da(r.extraFieldRaw)}catch(g){return H(t,g)}if(t.decodeStrings){var p=(r.generalPurposeBitFlag&2048)!==0;r.fileComment=Ze(r.fileCommentRaw,p),r.fileName=fa(r.generalPurposeBitFlag,r.fileNameRaw,r.extraFields,t.strictFileNames);var s=Ca(r.fileName);if(s!=null)return H(t,new Error(s))}else r.fileComment=r.fileCommentRaw,r.fileName=r.fileNameRaw;r.comment=r.fileComment,t.readEntryCursor+=e.length,t.entriesRead+=1;for(var u=0;u<r.extraFields.length;u++){var l=r.extraFields[u];if(l.id===1){var M=l.data,S=0;if(r.uncompressedSize===4294967295){if(S+8>M.length)return H(t,new Error("zip64 extended information extra field does not include uncompressed size"));r.uncompressedSize=ce(M,S),S+=8}if(r.compressedSize===4294967295){if(S+8>M.length)return H(t,new Error("zip64 extended information extra field does not include compressed size"));r.compressedSize=ce(M,S),S+=8}if(r.relativeOffsetOfLocalHeader===4294967295){if(S+8>M.length)return H(t,new Error("zip64 extended information extra field does not include relative header offset"));r.relativeOffsetOfLocalHeader=ce(M,S),S+=8}break}}if(t.validateEntrySizes&&r.compressionMethod===0){var b=r.uncompressedSize;if(r.isEncrypted()&&(b+=12),r.compressedSize!==b){var c="compressed/uncompressed size mismatch for stored file: "+r.compressedSize+" != "+r.uncompressedSize;return H(t,new Error(c))}}t.emit("entry",r),t.lazyEntries||t._readEntry()}})}})}};Q.prototype.openReadStream=function(t,e,a){var r=this,n=0,o=t.compressedSize;if(a==null&&(a=e,e=null),e==null)e={};else{if(e.decodeFileData===!1){if(e.decrypt!=null)throw new Error("cannot use options.decrypt when options.decodeFileData === false");if(e.decompress!=null)throw new Error("cannot use options.decompress when options.decodeFileData === false")}else{if(e.decrypt!=null){if(!t.isEncrypted())throw new Error("options.decrypt can only be specified for encrypted entries. See also option decodeFileData.");if(e.decrypt!==!1)throw new Error("invalid options.decrypt value: "+e.decrypt);if(t.isCompressed()&&e.decompress!==!1)throw new Error("entry is encrypted and compressed, and options.decompress !== false. See also option decodeFileData.")}if(e.decompress!=null){if(!t.isCompressed())throw new Error("options.decompress can only be specified for compressed entries. See also option decodeFileData.");if(!(e.decompress===!1||e.decompress===!0))throw new Error("invalid options.decompress value: "+e.decompress);p=e.decompress}}if(e.start!=null){if(n=e.start,n<0)throw new Error("options.start < 0");if(n>t.compressedSize)throw new Error("options.start > entry.compressedSize")}if(e.end!=null){if(o=e.end,o<0)throw new Error("options.end < 0");if(o>t.compressedSize)throw new Error("options.end > entry.compressedSize");if(o<n)throw new Error("options.end < options.start")}}var i=e.decodeFileData===!1||(t.compressionMethod===0||t.compressionMethod===8&&e.decompress===!1)&&(!t.isEncrypted()||e.decrypt===!1);if((e.start!=null||e.end!=null)&&!i)throw new Error("start/end range require options.decodeFileData === false for non-trivial encoded entries.");if(!r.isOpen)return a(new Error("closed"));if(t.isEncrypted()&&!i&&e.decrypt!==!1)return a(new Error("entry is encrypted, and options.decodeFileData !== false"));var p;if(i)p=!1;else if(t.compressionMethod===8)p=e.decodeFileData!==!0;else return a(new Error("unsupported compression method: "+t.compressionMethod));r.readLocalFileHeader(t,{minimal:!0},function(s,u){if(s)return a(s);r.openReadStreamLowLevel(u.fileDataStart,t.compressedSize,n,o,p,t.uncompressedSize,a)})};Q.prototype.openReadStreamLowLevel=function(t,e,a,r,n,o,i){var p=this,s=t+e,u=p.reader.createReadStream({start:t+a,end:t+r}),l=u;if(n){var M=!1,S=mn.createInflateRaw();u.on("error",function(b){setImmediate(function(){M||S.emit("error",b)})}),u.pipe(S),p.validateEntrySizes?(l=new Ue(o),S.on("error",function(b){setImmediate(function(){M||l.emit("error",b)})}),S.pipe(l)):l=S,mt(l,function(){M=!0,S!==l&&S.unpipe(l),u.unpipe(S),u.destroy()})}i(null,l)};Q.prototype.readLocalFileHeader=function(t,e,a){var r=this;a==null&&(a=e,e=null),e==null&&(e={}),r.reader.ref();var n=Z(30);ye(r.reader,n,0,n.length,t.relativeOffsetOfLocalHeader,function(o){try{if(o)return a(o);var i=n.readUInt32LE(0);if(i!==67324752)return a(new Error("invalid local file header signature: 0x"+i.toString(16)));var p=n.readUInt16LE(26),s=n.readUInt16LE(28),u=t.relativeOffsetOfLocalHeader+30+p+s;if(u+t.compressedSize>r.fileSize)return a(new Error("file data overflows file bounds: "+u+" + "+t.compressedSize+" > "+r.fileSize));if(e.minimal)return a(null,{fileDataStart:u});var l=new Ea;l.fileDataStart=u,l.versionNeededToExtract=n.readUInt16LE(4),l.generalPurposeBitFlag=n.readUInt16LE(6),l.compressionMethod=n.readUInt16LE(8),l.lastModFileTime=n.readUInt16LE(10),l.lastModFileDate=n.readUInt16LE(12),l.crc32=n.readUInt32LE(14),l.compressedSize=n.readUInt32LE(18),l.uncompressedSize=n.readUInt32LE(22),l.fileNameLength=p,l.extraFieldLength=s,n=Z(p+s),r.reader.ref(),ye(r.reader,n,0,n.length,t.relativeOffsetOfLocalHeader+30,function(M){try{return M?a(M):(l.fileName=n.subarray(0,p),l.extraField=n.subarray(p),a(null,l))}finally{r.reader.unref()}})}finally{r.reader.unref()}})};function de(){}de.prototype.getLastModDate=function(t){if(t==null&&(t={}),!t.forceDosFormat)for(var e=0;e<this.extraFields.length;e++){var a=this.extraFields[e];if(a.id===21589){var r=a.data;if(r.length<5)continue;var n=r[0],o=1;if(!(n&o))continue;var i=r.readInt32LE(1);return new Date(i*1e3)}else if(a.id===10){var r=a.data;if(r.length!==32||r.readUInt16LE(4)!==1||r.readUInt16LE(6)!==24)continue;var p=r.readUInt32LE(8)+4294967296*r.readInt32LE(12),s=p/1e4-116444736e5;return new Date(s)}}return Pa(this.lastModFileDate,this.lastModFileTime,t.timezone)};de.prototype.canDecodeFileData=function(){return!this.isEncrypted()&&(this.compressionMethod===0||this.compressionMethod===8)};de.prototype.isEncrypted=function(){return(this.generalPurposeBitFlag&1)!==0};de.prototype.isCompressed=function(){return this.compressionMethod===8};function Ea(){}function Pa(t,e,a){var r=t&31,n=(t>>5&15)-1,o=(t>>9&127)+1980,i=0,p=(e&31)*2,s=e>>5&63,u=e>>11&31;if(a==null||a==="local")return new Date(o,n,r,u,s,p,i);if(a==="UTC")return new Date(Date.UTC(o,n,r,u,s,p,i));throw new Error("unrecognized options.timezone: "+options.timezone)}function fa(t,e,a,r){for(var n=null,o=0;o<a.length;o++){var i=a[o];if(i.id===28789){if(i.data.length<6||i.data.readUInt8(0)!==1)continue;var p=i.data.readUInt32LE(1);if(Rn.unsigned(e)!==p)continue;n=Ze(i.data.subarray(5),!0);break}}if(n==null){var s=(t&2048)!==0;n=Ze(e,s)}return r||(n=n.replace(/\\/g,"/")),n}function Ca(t){return t.indexOf("\\")!==-1?"invalid characters in fileName: "+t:/^[a-zA-Z]:/.test(t)||/^\//.test(t)?"absolute path: "+t:t.split("/").indexOf("..")!==-1?"invalid relative path: "+t:null}function Da(t){for(var e=[],a=0;a<t.length-3;){var r=t.readUInt16LE(a+0),n=t.readUInt16LE(a+2),o=a+4,i=o+n;if(i>t.length)throw new Error("extra field length exceeds extra field buffer size");var p=t.subarray(o,i);e.push({id:r,data:p}),a=i}return e}function ye(t,e,a,r,n,o){if(r===0)return setImmediate(function(){o(null,Z(0))});t.read(e,a,r,n,function(i,p){if(i)return o(i);if(p<r)return o(new Error("unexpected EOF"));o()})}Xe.inherits(Ue,ma);function Ue(t){ma.call(this),this.actualByteCount=0,this.expectedByteCount=t}Ue.prototype._transform=function(t,e,a){if(this.actualByteCount+=t.length,this.actualByteCount>this.expectedByteCount){var r="too many bytes in the stream. expected "+this.expectedByteCount+". got at least "+this.actualByteCount;return a(new Error(r))}a(null,t)};Ue.prototype._flush=function(t){if(this.actualByteCount<this.expectedByteCount){var e="not enough bytes in the stream. expected "+this.expectedByteCount+". got only "+this.actualByteCount;return t(new Error(e))}t()};Xe.inherits(ae,et);function ae(){et.call(this),this.refCount=0}ae.prototype.ref=function(){this.refCount+=1};ae.prototype.unref=function(){var t=this;if(t.refCount-=1,t.refCount>0)return;if(t.refCount<0)throw new Error("invalid unref");t.close(e);function e(a){if(a)return t.emit("error",a);t.emit("close")}};ae.prototype.createReadStream=function(t){t==null&&(t={});var e=t.start,a=t.end;if(e===a){var r=new Rt;return setImmediate(function(){r.end()}),r}var n=this._readStreamForRange(e,a),o=!1,i=new tt(this);n.on("error",function(s){setImmediate(function(){o||i.emit("error",s)})}),mt(i,function(){n.unpipe(i),i.unref(),n.destroy()});var p=new Ue(a-e);return i.on("error",function(s){setImmediate(function(){o||p.emit("error",s)})}),mt(p,function(){o=!0,i.unpipe(p),i.destroy()}),n.pipe(i).pipe(p)};ae.prototype._readStreamForRange=function(t,e){throw new Error("not implemented")};ae.prototype.read=function(t,e,a,r,n){var o=this.createReadStream({start:r,end:r+a}),i=new An,p=0;i._write=function(s,u,l){s.copy(t,e+p,0,s.length),p+=s.length,l()},i.on("finish",n),o.on("error",function(s){n(s)}),o.pipe(i)};ae.prototype.close=function(t){setImmediate(t)};Xe.inherits(tt,Rt);function tt(t){Rt.call(this),this.context=t,this.context.ref(),this.unreffedYet=!1}tt.prototype._flush=function(t){this.unref(),t()};tt.prototype.unref=function(t){this.unreffedYet||(this.unreffedYet=!0,this.context.unref())};var fn="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0\xA0";function Ze(t,e){if(e)return t.toString("utf8");for(var a="",r=0;r<t.length;r++)a+=fn[t[r]];return a}function ce(t,e){var a=t.readUInt32LE(e),r=t.readUInt32LE(e+4);return r*4294967296+a}var Z;typeof Buffer.allocUnsafe=="function"?Z=function(t){return Buffer.allocUnsafe(t)}:Z=function(t){return new Buffer(t)};function mt(t,e){typeof t.destroy=="function"?t._destroy=function(a,r){e(),r?.(a)}:t.destroy=e}function Je(t){if(t)throw t}});var Un={};se(Un,{default:()=>xn});module.exports=Ha(Un);var Pt=D(require("fs")),Oa=D(require("os")),ft=D(require("path")),f=require("@raycast/api"),re=require("react");var aa=require("@octokit/rest"),ra=require("@raycast/api"),na=require("@raycast/utils"),oa=require("graphql-request");var Yt=D(require("node:http"),1),Zt=D(require("node:https"),1),ue=D(require("node:zlib"),1),L=D(require("node:stream"),1),Pe=require("node:buffer");var Me={};se(Me,{default:()=>Be.default});U(Me,require("data-uri-to-buffer"));var Be=D(require("data-uri-to-buffer"));var N=D(require("node:stream"),1),W=require("node:util"),B=require("node:buffer");var ge={};se(ge,{default:()=>Oe.default});U(ge,require("fetch-blob"));var Oe=D(require("fetch-blob"));Le();var $=class extends Error{constructor(e,a){super(e),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var v=class extends ${constructor(e,a,r){super(e,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ve=Symbol.toStringTag,nt=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ve]==="URLSearchParams",me=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ve]),_t=t=>typeof t=="object"&&(t[Ve]==="AbortSignal"||t[Ve]==="EventTarget"),vt=(t,e)=>{let a=new URL(e).hostname,r=new URL(t).hostname;return a===r||a.endsWith(`.${r}`)},ht=(t,e)=>{let a=new URL(e).protocol,r=new URL(t).protocol;return a===r};var Xa=(0,W.promisify)(N.default.pipeline),h=Symbol("Body internals"),z=class{constructor(e,{size:a=0}={}){let r=null;e===null?e=null:nt(e)?e=B.Buffer.from(e.toString()):me(e)||B.Buffer.isBuffer(e)||(W.types.isAnyArrayBuffer(e)?e=B.Buffer.from(e):ArrayBuffer.isView(e)?e=B.Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof N.default||(e instanceof _.FormData?(e=(0,_.formDataToBlob)(e),r=e.type.split("=")[1]):e=B.Buffer.from(String(e))));let n=e;B.Buffer.isBuffer(e)?n=N.default.Readable.from(e):me(e)&&(n=N.default.Readable.from(e.stream())),this[h]={body:e,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,e instanceof N.default&&e.on("error",o=>{let i=o instanceof $?o:new v(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[h].error=i})}get body(){return this[h].stream}get bodyUsed(){return this[h].disturbed}async arrayBuffer(){let{buffer:e,byteOffset:a,byteLength:r}=await ut(this);return e.slice(a,a+r)}async formData(){let e=this.headers.get("content-type");if(e.startsWith("application/x-www-form-urlencoded")){let r=new _.FormData,n=new URLSearchParams(await this.text());for(let[o,i]of n)r.append(o,i);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Ot(),Bt));return a(this.body,e)}async blob(){let e=this.headers&&this.headers.get("content-type")||this[h].body&&this[h].body.type||"",a=await this.arrayBuffer();return new Oe.default([a],{type:e})}async json(){let e=await this.text();return JSON.parse(e)}async text(){let e=await ut(this);return new TextDecoder().decode(e)}buffer(){return ut(this)}};z.prototype.buffer=(0,W.deprecate)(z.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(z.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,W.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function ut(t){if(t[h].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[h].disturbed=!0,t[h].error)throw t[h].error;let{body:e}=t;if(e===null)return B.Buffer.alloc(0);if(!(e instanceof N.default))return B.Buffer.alloc(0);let a=[],r=0;try{for await(let n of e){if(t.size>0&&r+n.length>t.size){let o=new v(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw e.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof $?n:new v(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(e.readableEnded===!0||e._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?B.Buffer.from(a.join("")):B.Buffer.concat(a,r)}catch(n){throw new v(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new v(`Premature close of server response while trying to fetch ${t.url}`)}var pe=(t,e)=>{let a,r,{body:n}=t[h];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof N.default&&typeof n.getBoundary!="function"&&(a=new N.PassThrough({highWaterMark:e}),r=new N.PassThrough({highWaterMark:e}),n.pipe(a),n.pipe(r),t[h].stream=a,n=r),n},er=(0,W.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Fe=(t,e)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":nt(t)?"application/x-www-form-urlencoded;charset=UTF-8":me(t)?t.type||null:B.Buffer.isBuffer(t)||W.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof _.FormData?`multipart/form-data; boundary=${e[h].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${er(t)}`:t instanceof N.default?null:"text/plain;charset=UTF-8",Lt=t=>{let{body:e}=t[h];return e===null?0:me(e)?e.size:B.Buffer.isBuffer(e)?e.length:e&&typeof e.getLengthSync=="function"&&e.hasKnownLength&&e.hasKnownLength()?e.getLengthSync():null},Vt=async(t,{body:e})=>{e===null?t.end():await Xa(e,t)};var st=require("node:util"),Ae=D(require("node:http"),1),je=typeof Ae.default.validateHeaderName=="function"?Ae.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let e=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),e}},pt=typeof Ae.default.validateHeaderValue=="function"?Ae.default.validateHeaderValue:(t,e)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(e)){let a=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},O=class t extends URLSearchParams{constructor(e){let a=[];if(e instanceof t){let r=e.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(i=>[n,i]))}else if(e!=null)if(typeof e=="object"&&!st.types.isBoxedPrimitive(e)){let r=e[Symbol.iterator];if(r==null)a.push(...Object.entries(e));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...e].map(n=>{if(typeof n!="object"||st.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(je(r),pt(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(i,p)=>(je(i),pt(i,String(p)),URLSearchParams.prototype[n].call(r,String(i).toLowerCase(),String(p)));case"delete":case"has":case"getAll":return i=>(je(i),URLSearchParams.prototype[n].call(r,String(i).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(e){let a=this.getAll(e);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(e)&&(r=r.toLowerCase()),r}forEach(e,a=void 0){for(let r of this.keys())Reflect.apply(e,a,[this.get(r),r,this])}*values(){for(let e of this.keys())yield this.get(e)}*entries(){for(let e of this.keys())yield[e,this.get(e)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((e,a)=>(e[a]=this.getAll(a),e),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((e,a)=>{let r=this.getAll(a);return a==="host"?e[a]=r[0]:e[a]=r.length>1?r:r[0],e},{})}};Object.defineProperties(O.prototype,["get","entries","forEach","values"].reduce((t,e)=>(t[e]={enumerable:!0},t),{}));function Nt(t=[]){return new O(t.reduce((e,a,r,n)=>(r%2===0&&e.push(n.slice(r,r+2)),e),[]).filter(([e,a])=>{try{return je(e),pt(e,String(a)),!0}catch{return!1}}))}var tr=new Set([301,302,303,307,308]),ke=t=>tr.has(t);var j=Symbol("Response internals"),q=class t extends z{constructor(e=null,a={}){super(e,a);let r=a.status!=null?a.status:200,n=new O(a.headers);if(e!==null&&!n.has("Content-Type")){let o=Fe(e,this);o&&n.append("Content-Type",o)}this[j]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[j].type}get url(){return this[j].url||""}get status(){return this[j].status}get ok(){return this[j].status>=200&&this[j].status<300}get redirected(){return this[j].counter>0}get statusText(){return this[j].statusText}get headers(){return this[j].headers}get highWaterMark(){return this[j].highWaterMark}clone(){return new t(pe(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(e,a=302){if(!ke(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(e).toString()},status:a})}static error(){let e=new t(null,{status:0,statusText:""});return e[j].type="error",e}static json(e=void 0,a={}){let r=JSON.stringify(e);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new O(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(q.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var $t=require("node:url"),Wt=require("node:util");var qt=t=>{if(t.search)return t.search;let e=t.href.length-1,a=t.hash||(t.href[e]==="#"?"#":"");return t.href[e-a.length]==="?"?"?":""};var jt=require("node:net");function Ft(t,e=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",e&&(t.pathname="",t.search=""),t)}var kt=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),zt="strict-origin-when-cross-origin";function Gt(t){if(!kt.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function ar(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let e=t.host.replace(/(^\[)|(]$)/g,""),a=(0,jt.isIP)(e);return a===4&&/^127\./.test(e)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(e)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function le(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:ar(t)}function Ht(t,{referrerURLCallback:e,referrerOriginCallback:a}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=Ft(n),i=Ft(n,!0);o.toString().length>4096&&(o=i),e&&(o=e(o)),a&&(i=a(i));let p=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return le(o)&&!le(p)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===p.origin?o:le(o)&&!le(p)?"no-referrer":i;case"same-origin":return o.origin===p.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===p.origin?o:i;case"no-referrer-when-downgrade":return le(o)&&!le(p)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Qt(t){let e=(t.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of e)r&&kt.has(r)&&(a=r);return a}var x=Symbol("Request internals"),Ee=t=>typeof t=="object"&&typeof t[x]=="object",rr=(0,Wt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ie=class t extends z{constructor(e,a={}){let r;if(Ee(e)?r=new URL(e.url):(r=new URL(e),e={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||e.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Ee(a)&&"data"in a&&rr(),(a.body!=null||Ee(e)&&e.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Ee(e)&&e.body!==null?pe(e):null;super(o,{size:a.size||e.size||0});let i=new O(a.headers||e.headers||{});if(o!==null&&!i.has("Content-Type")){let u=Fe(o,this);u&&i.set("Content-Type",u)}let p=Ee(e)?e.signal:null;if("signal"in a&&(p=a.signal),p!=null&&!_t(p))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?e.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let u=new URL(s);s=/^about:(\/\/)?client$/.test(u)?"client":u}else s=void 0;this[x]={method:n,redirect:a.redirect||e.redirect||"follow",headers:i,parsedURL:r,signal:p,referrer:s},this.follow=a.follow===void 0?e.follow===void 0?20:e.follow:a.follow,this.compress=a.compress===void 0?e.compress===void 0?!0:e.compress:a.compress,this.counter=a.counter||e.counter||0,this.agent=a.agent||e.agent,this.highWaterMark=a.highWaterMark||e.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||e.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||e.referrerPolicy||""}get method(){return this[x].method}get url(){return(0,$t.format)(this[x].parsedURL)}get headers(){return this[x].headers}get redirect(){return this[x].redirect}get signal(){return this[x].signal}get referrer(){if(this[x].referrer==="no-referrer")return"";if(this[x].referrer==="client")return"about:client";if(this[x].referrer)return this[x].referrer.toString()}get referrerPolicy(){return this[x].referrerPolicy}set referrerPolicy(e){this[x].referrerPolicy=Gt(e)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ie.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Kt=t=>{let{parsedURL:e}=t[x],a=new O(t[x].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let p=Lt(t);typeof p=="number"&&!Number.isNaN(p)&&(r=String(p))}r&&a.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=zt),t.referrer&&t.referrer!=="no-referrer"?t[x].referrer=Ht(t):t[x].referrer="no-referrer",t[x].referrer instanceof URL&&a.set("Referer",t.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),t.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(e));let o=qt(e),i={path:e.pathname+o,method:t.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:e,options:i}};var ze=class extends ${constructor(e,a="aborted"){super(e,a)}};Le();ot();var nr=new Set(["data:","http:","https:"]);async function Ge(t,e){return new Promise((a,r)=>{let n=new ie(t,e),{parsedURL:o,options:i}=Kt(n);if(!nr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let c=(0,Be.default)(n.url),g=new q(c,{headers:{"Content-Type":c.typeFull}});a(g);return}let p=(o.protocol==="https:"?Zt.default:Yt.default).request,{signal:s}=n,u=null,l=()=>{let c=new ze("The operation was aborted.");r(c),n.body&&n.body instanceof L.default.Readable&&n.body.destroy(c),!(!u||!u.body)&&u.body.emit("error",c)};if(s&&s.aborted){l();return}let M=()=>{l(),b()},S=p(o.toString(),i);s&&s.addEventListener("abort",M);let b=()=>{S.abort(),s&&s.removeEventListener("abort",M)};S.on("error",c=>{r(new v(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),b()}),or(S,c=>{u&&u.body&&u.body.destroy(c)}),process.version<"v14"&&S.on("socket",c=>{let g;c.prependListener("end",()=>{g=c._eventsCount}),c.prependListener("close",I=>{if(u&&g<c._eventsCount&&!I){let d=new Error("Premature close");d.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",d)}})}),S.on("response",c=>{S.setTimeout(0);let g=Nt(c.rawHeaders);if(ke(c.statusCode)){let m=g.get("Location"),E=null;try{E=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new v(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),b();return}}switch(n.redirect){case"error":r(new v(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),b();return;case"manual":break;case"follow":{if(E===null)break;if(n.counter>=n.follow){r(new v(`maximum redirect reached at: ${n.url}`,"max-redirect")),b();return}let R={headers:new O(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:pe(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!vt(n.url,E)||!ht(n.url,E))for(let Se of["authorization","www-authenticate","cookie","cookie2"])R.headers.delete(Se);if(c.statusCode!==303&&n.body&&e.body instanceof L.default.Readable){r(new v("Cannot follow redirect with body being a readable stream","unsupported-redirect")),b();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(R.method="GET",R.body=void 0,R.headers.delete("content-length"));let T=Qt(g);T&&(R.referrerPolicy=T),a(Ge(new ie(E,R))),b();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&c.once("end",()=>{s.removeEventListener("abort",M)});let I=(0,L.pipeline)(c,new L.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&c.on("aborted",M);let d={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:g,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},A=g.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||c.statusCode===204||c.statusCode===304){u=new q(I,d),a(u);return}let C={flush:ue.default.Z_SYNC_FLUSH,finishFlush:ue.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){I=(0,L.pipeline)(I,ue.default.createGunzip(C),m=>{m&&r(m)}),u=new q(I,d),a(u);return}if(A==="deflate"||A==="x-deflate"){let m=(0,L.pipeline)(c,new L.PassThrough,E=>{E&&r(E)});m.once("data",E=>{(E[0]&15)===8?I=(0,L.pipeline)(I,ue.default.createInflate(),R=>{R&&r(R)}):I=(0,L.pipeline)(I,ue.default.createInflateRaw(),R=>{R&&r(R)}),u=new q(I,d),a(u)}),m.once("end",()=>{u||(u=new q(I,d),a(u))});return}if(A==="br"){I=(0,L.pipeline)(I,ue.default.createBrotliDecompress(),m=>{m&&r(m)}),u=new q(I,d),a(u);return}u=new q(I,d),a(u)}),Vt(S,n).catch(r)})}function or(t,e){let a=Pe.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",i=>{let{headers:p}=i;r=p["transfer-encoding"]==="chunked"&&!p["content-length"]}),t.on("socket",i=>{let p=()=>{if(r&&!n){let u=new Error("Premature close");u.code="ERR_STREAM_PREMATURE_CLOSE",e(u)}},s=u=>{n=Pe.Buffer.compare(u.slice(-5),a)===0,!n&&o&&(n=Pe.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Pe.Buffer.compare(u.slice(-2),a.slice(3))===0),o=u};i.prependListener("close",p),i.on("data",s),t.on("close",()=>{i.removeListener("close",p),i.removeListener("data",s)})})}var y=D(require("graphql-tag")),fe=y.default`
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
`,ir=y.default`
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
  ${fe}
`,G=y.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ce=y.default`
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
`,He=y.default`
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
  ${Ce}
  ${fe}
  ${G}
`,ur=y.default`
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
  ${Ce}
  ${fe}
  ${G}
`,sr=y.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Jt=y.default`
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
  ${Ce}
  ${sr}
`,Xt=y.default`
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
  ${fe}
  ${Ce}
  ${G}
`,pr=y.default`
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
  ${fe}
  ${Ce}
  ${G}
`,lr=y.default`
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
`,ea=y.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,lt=y.default`
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
`,cr=y.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,yr=y.default`
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
`,dr=y.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Sr=y.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,br=y.default`
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
  ${ir}
`,Ir=y.default`
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
`,Mr=y.default`
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
`,gr=y.default`
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
`,mr=y.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ur}
`,Rr=y.default`
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
  ${He}
`,Ar=y.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${He}
`,Er=y.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Pr=y.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,fr=y.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Cr=y.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Dr=y.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,xr=y.default`
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
  ${He}
`,Ur=y.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,_r=y.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Jt}
`,vr=y.default`
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
  ${Xt}
`,hr=y.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${pr}
`,Tr=y.default`
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
`,wr=y.default`
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
`,Br=y.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${lr}
`,Or=y.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Lr=y.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Vr=y.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Nr=y.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,qr=y.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Fr=y.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,jr=y.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,kr=y.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,zr=y.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Gr=y.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Hr=y.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Qr=y.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,$r=y.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wr=y.default`
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
`,Kr=y.default`
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
  ${Xt}
`,Yr=y.default`
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
  ${lt}
`,Zr=y.default`
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
  ${lt}
`,Jr=y.default`
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
`,Xr=y.default`
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
`,en=y.default`
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
  ${ea}
  ${G}
`,tn=y.default`
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
  ${ea}
`,an=y.default`
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
  ${He}
`,rn=y.default`
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
  ${cr}
`,nn=y.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,on=y.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,un=y.default`
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
  ${lt}
`,sn=y.default`
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
  ${Jt}
`,pn=y.default`
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
`,ln=y.default`
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
`,cn=(t,e,a,r)=>t();function ta(t,e=cn){return{createLinkedBranch(a,r,n){return e(o=>t.request({document:yr,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return e(o=>t.request({document:dr,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return e(o=>t.request({document:Sr,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return e(o=>t.request({document:br,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return e(o=>t.request({document:Ir,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return e(o=>t.request({document:Mr,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return e(o=>t.request({document:gr,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return e(o=>t.request({document:mr,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return e(o=>t.request({document:Rr,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return e(o=>t.request({document:Ar,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return e(o=>t.request({document:Er,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return e(o=>t.request({document:Pr,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return e(o=>t.request({document:fr,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return e(o=>t.request({document:Cr,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return e(o=>t.request({document:Dr,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return e(o=>t.request({document:xr,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},changeProjectStatus(a,r,n){return e(o=>t.request({document:Ur,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return e(o=>t.request({document:_r,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return e(o=>t.request({document:vr,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return e(o=>t.request({document:hr,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return e(o=>t.request({document:Tr,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return e(o=>t.request({document:wr,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return e(o=>t.request({document:Br,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return e(o=>t.request({document:Or,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return e(o=>t.request({document:Lr,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return e(o=>t.request({document:Vr,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return e(o=>t.request({document:Nr,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return e(o=>t.request({document:qr,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return e(o=>t.request({document:Fr,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return e(o=>t.request({document:jr,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return e(o=>t.request({document:kr,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return e(o=>t.request({document:zr,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return e(o=>t.request({document:Gr,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return e(o=>t.request({document:Hr,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return e(o=>t.request({document:Qr,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return e(o=>t.request({document:$r,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return e(o=>t.request({document:Wr,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return e(o=>t.request({document:Kr,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return e(o=>t.request({document:Yr,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return e(o=>t.request({document:Zr,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return e(o=>t.request({document:Jr,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return e(o=>t.request({document:Xr,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return e(o=>t.request({document:en,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return e(o=>t.request({document:tn,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return e(o=>t.request({document:an,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return e(o=>t.request({document:rn,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return e(o=>t.request({document:nn,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return e(o=>t.request({document:on,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return e(o=>t.request({document:un,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return e(o=>t.request({document:sn,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return e(o=>t.request({document:pn,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return e(o=>t.request({document:ln,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var ct=null,yt=null,ia=null,yn=(0,ra.getPreferenceValues)();function dn({token:t,type:e}){let a=e==="personal"?`token ${t}`:`bearer ${t}`;ia=t,ct=ta(new oa.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:a}})),yt=new aa.Octokit({auth:t,request:{fetch:Ge}})}var ua=na.OAuthService.github({personalAccessToken:yn.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:dn});function sa(){if(!ct||!yt)throw new Error("GitHub clients not initialized");return{github:ct,octokit:yt,token:ia}}var _e=D(require("fs")),Et=require("fs/promises"),_a=D(require("os")),J=D(require("path")),va=require("stream/promises"),ha=D(xa());function Cn(t){let a=new URL(t).pathname.split("/").filter(Boolean),r=a[0],n=a[1],o="root",i,p;if(a.length>2){let s=a[2];s==="tree"?(o="tree",i=a[3],a.length>4&&(p=a.slice(4).join("/"))):s==="blob"&&(o="blob",i=a[3],a.length>4&&(p=a.slice(4).join("/")))}return{owner:r,repo:n,type:o,ref:i,path:p}}async function Ua(t,e,a){await new Promise((r,n)=>{let o=_e.default.createWriteStream(e);o.on("finish",r),o.on("error",n);let i=t.getReader();(async()=>{try{let p=!1;for(;!p;){let{done:s,value:u}=await i.read();p=s,u&&(a?.(u),o.write(Buffer.from(u))||await new Promise(l=>o.once("drain",l)))}o.end()}catch(p){o.destroy(),n(p)}})()})}async function Ta(t,e,a,r){let n=Cn(t),{owner:o,repo:i,type:p}=n,{ref:s}=n,{path:u}=n,l={Accept:"application/vnd.github.v3+json"};a&&(l.Authorization=`token ${a}`),r("Checking repository access...");let M=await fetch(`https://api.github.com/repos/${o}/${i}`,{headers:l});if(!M.ok)throw M.status===404?new Error("Repository not found. Ensure you have the correct permissions."):M.status===403?new Error("Access denied. Please check your GitHub token permissions."):new Error(`GitHub API Error: ${M.statusText}`);let S=await M.json();if(s||(s=S.default_branch||"main"),p==="blob"&&u){let d=J.default.basename(u),A=J.default.join(e,d);r(`Downloading file: ${d}...`);let C=`https://api.github.com/repos/${o}/${i}/contents/${u}?ref=${s}`,m={...l,Accept:"application/vnd.github.v3.raw"},E=await fetch(C,{headers:m});if(!E.ok)throw new Error(`Failed to download file: ${E.statusText}`);if(!E.body)throw new Error("Empty response body");return await Ua(E.body,A),A}r("Downloading archive...");let b=`https://api.github.com/repos/${o}/${i}/zipball/${s}`,c=_a.default.tmpdir(),g=i.replace(/[^a-zA-Z0-9._-]/g,"_"),I=J.default.join(c,`${g}-${Date.now()}.zip`);try{let d=await fetch(b,{headers:l});if(!d.ok)throw new Error(`Failed to download archive: ${d.statusText}`);if(!d.body)throw new Error("Empty response body");let A=d.body,C=Number(d.headers.get("content-length"))||void 0,m=C?(C/(1024*1024)).toFixed(1):void 0,E=0;await Ua(A,I,Se=>{E+=Se.length;let be=`Downloading... ${(E/(1024*1024)).toFixed(1)} MB`;if(C&&m){let F=Math.min(Math.round(E/C*100),100);be+=` / ${m} MB (${F}%)`}r(be)}),r("Extracting files...");let R=u?J.default.basename(u):i,T=J.default.join(e,R);return await(0,Et.mkdir)(T,{recursive:!0}),await new Promise((Se,ne)=>{ha.default.open(I,{lazyEntries:!0},(be,F)=>{if(be)return ne(be);let Ct=0,ve="";F.readEntry(),F.on("entry",Ie=>{ve||(ve=Ie.fileName.split("/")[0]+"/");let Dt=u?`${ve}${u}/`:ve;if(Ie.fileName.endsWith("/"))F.readEntry();else if(Ie.fileName.startsWith(Dt)){let La=Ie.fileName.substring(Dt.length),at=J.default.join(T,La);if(!at.startsWith(T+J.default.sep)){F.readEntry();return}let Va=J.default.dirname(at);(0,Et.mkdir)(Va,{recursive:!0}).then(()=>{F.openReadStream(Ie,(xt,Na)=>{if(xt)return ne(xt);let qa=_e.default.createWriteStream(at);(0,va.pipeline)(Na,qa).then(()=>{Ct++,F.readEntry()}).catch(ne)})}).catch(ne)}else F.readEntry()}),F.on("end",()=>{Ct===0?ne(new Error(`No files found in '${u||"repository"}'`)):Se()}),F.on("error",ne)})}),T}finally{_e.default.existsSync(I)&&_e.default.unlinkSync(I)}}var wa=require("@raycast/utils");var Ba=(0,wa.withAccessToken)(ua);var X=require("react/jsx-runtime");function Dn(){let[t,e]=(0,re.useState)([]),[a,r]=(0,re.useState)(""),[n,o]=(0,re.useState)(!1),[i,p]=(0,re.useState)(),[s,u]=(0,re.useState)(!1);(0,re.useEffect)(()=>{async function b(){let c=await f.LocalStorage.getItem("lastDownloadPath");if(c&&Pt.default.existsSync(c))e([c]);else{let I=Oa.default.homedir(),d=ft.default.join(I,"Downloads");Pt.default.existsSync(d)&&e([d])}let g=await f.Clipboard.readText();g&&l(g)&&r(g),u(!0)}b()},[]);function l(b){try{return new URL(b).hostname==="github.com"}catch{return!1}}function M(b){if(!b)return"GitHub URL is required";try{let c=new URL(b);if(c.hostname!=="github.com")return"Must be a valid GitHub URL (github.com)";if(c.pathname.split("/").filter(Boolean).length<2)return"Invalid repository URL (needs owner/repo)"}catch{return"Invalid URL format"}}async function S(b){let c=M(b.url);if(c){p(c);return}if(!b.downloadPath||b.downloadPath.length===0){await(0,f.showToast)({style:f.Toast.Style.Failure,title:"Please select a download location"});return}o(!0);let g=await(0,f.showToast)({style:f.Toast.Style.Animated,title:"Starting Download..."});try{let{token:I}=sa(),d=b.downloadPath[0];await f.LocalStorage.setItem("lastDownloadPath",d);let A=await Ta(b.url,d,I,C=>{g.message=C});g.style=f.Toast.Style.Success,g.title="Download Complete",g.message=`Saved to ${ft.default.basename(A)}`,g.primaryAction={title:"Open in Finder",onAction:()=>(0,f.open)(A)}}catch(I){g.style=f.Toast.Style.Failure,g.title="Download Failed",g.message=I instanceof Error?I.message:"Unknown error"}finally{o(!1)}}return s?(0,X.jsxs)(f.Form,{navigationTitle:"Download Repository as ZIP",isLoading:n,actions:(0,X.jsx)(f.ActionPanel,{children:(0,X.jsx)(f.Action.SubmitForm,{title:"Download ZIP",onSubmit:S})}),children:[(0,X.jsx)(f.Form.Description,{title:"ZIP Download",text:"Downloads GitHub content as an archive. This does not create a Git repository or use the Default Clone Path."}),(0,X.jsx)(f.Form.TextField,{id:"url",title:"GitHub URL",placeholder:"https://github.com/owner/repo/tree/main/folder",value:a,error:i,onChange:b=>{r(b),i&&p(void 0)}}),(0,X.jsx)(f.Form.FilePicker,{id:"downloadPath",title:"Download Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,value:t,onChange:e})]}):(0,X.jsx)(f.Form,{isLoading:!0})}var xn=Ba(Dn);
