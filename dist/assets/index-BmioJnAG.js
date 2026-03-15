(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="183",Au=0,al=1,Ru=2,vs=1,kh=2,br=3,hi=0,tn=1,gn=2,kn=0,Ji=1,ol=2,cl=3,ll=4,Cu=5,yi=100,Pu=101,Iu=102,Du=103,Lu=104,Fu=200,Uu=201,Nu=202,Ou=203,Ka=204,Ja=205,Bu=206,zu=207,Hu=208,Gu=209,Vu=210,ku=211,Wu=212,ju=213,Xu=214,$a=0,Za=1,Qa=2,Zi=3,to=4,eo=5,no=6,io=7,Wh=0,qu=1,Yu=2,bn=0,jh=1,Xh=2,qh=3,Yh=4,Kh=5,Jh=6,$h=7,Zh=300,Ti=301,Qi=302,ra=303,sa=304,Hs=306,ro=1e3,Vn=1001,so=1002,Le=1003,Ku=1004,Gr=1005,He=1006,aa=1007,ci=1008,sn=1009,Qh=1010,td=1011,Mr=1012,ac=1013,In=1014,An=1015,Xn=1016,oc=1017,cc=1018,Er=1020,ed=35902,nd=35899,id=1021,rd=1022,wn=1023,qn=1026,Mi=1027,lc=1028,hc=1029,tr=1030,dc=1031,uc=1033,xs=33776,ys=33777,Ss=33778,Ms=33779,ao=35840,oo=35841,co=35842,lo=35843,ho=36196,uo=37492,fo=37496,_o=37488,po=37489,mo=37490,go=37491,wo=37808,bo=37809,vo=37810,xo=37811,yo=37812,So=37813,Mo=37814,Eo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Io=37821,Do=36492,Lo=36494,Fo=36495,Uo=36283,No=36284,Oo=36285,Bo=36286,Ju=3200,fc=0,$u=1,oi="",Ze="srgb",er="srgb-linear",As="linear",le="srgb",Li=7680,hl=519,Zu=512,Qu=513,tf=514,_c=515,ef=516,nf=517,pc=518,rf=519,dl=35044,ul="300 es",Rn=2e3,Tr=2001;function sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){const i=Rs("canvas");return i.style.display="block",i}const fl={};function _l(...i){const t="THREE."+i.shift();console.log(t,...i)}function sd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=sd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=sd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){const t=i.join(" ");t in fl||(fl[t]=!0,Ot(...i))}function of(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const cf={[$a]:Za,[Qa]:no,[to]:io,[Zi]:eo,[Za]:$a,[no]:Qa,[io]:to,[eo]:Zi};class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,zo=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function lf(i,t){return(i%t+t)%t}function oa(i,t,e){return(1-e)*i+e*t}function hr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ri=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3],u=s[a+0],m=s[a+1],w=s[a+2],y=s[a+3];if(f!==y||c!==u||l!==m||d!==w){let g=c*u+l*m+d*w+f*y;g<0&&(u=-u,m=-m,w=-w,y=-y,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,c=c*p+u*o,l=l*p+m*o,d=d*p+w*o,f=f*p+y*o}else{c=c*p+u*o,l=l*p+m*o,d=d*p+w*o,f=f*p+y*o;const x=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=x,l*=x,d*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=s[a],u=s[a+1],m=s[a+2],w=s[a+3];return t[e]=o*w+d*f+c*m-l*u,t[e+1]=c*w+d*u+l*f-o*m,t[e+2]=l*w+d*m+o*u-c*f,t[e+3]=d*w-o*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),f=o(s/2),u=c(n/2),m=c(r/2),w=c(s/2);switch(a){case"XYZ":this._x=u*d*f+l*m*w,this._y=l*m*f-u*d*w,this._z=l*d*w+u*m*f,this._w=l*d*f-u*m*w;break;case"YXZ":this._x=u*d*f+l*m*w,this._y=l*m*f-u*d*w,this._z=l*d*w-u*m*f,this._w=l*d*f+u*m*w;break;case"ZXY":this._x=u*d*f-l*m*w,this._y=l*m*f+u*d*w,this._z=l*d*w+u*m*f,this._w=l*d*f-u*m*w;break;case"ZYX":this._x=u*d*f-l*m*w,this._y=l*m*f+u*d*w,this._z=l*d*w-u*m*f,this._w=l*d*f+u*m*w;break;case"YZX":this._x=u*d*f+l*m*w,this._y=l*m*f+u*d*w,this._z=l*d*w-u*m*f,this._w=l*d*f-u*m*w;break;case"XZY":this._x=u*d*f-l*m*w,this._y=l*m*f-u*d*w,this._z=l*d*w+u*m*f,this._w=l*d*f+u*m*w;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],f=e[10],u=n+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class ad{constructor(t=0,e=0,n=0){ad.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),d=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*d,this.y=n+c*d+o*l-s*f,this.z=r+c*f+s*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ca=new U,pl=new Ri;class Ht{constructor(t,e,n,r,s,a,o,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],m=n[5],w=n[8],y=r[0],g=r[3],p=r[6],x=r[1],T=r[4],E=r[7],P=r[2],R=r[5],I=r[8];return s[0]=a*y+o*x+c*P,s[3]=a*g+o*T+c*R,s[6]=a*p+o*E+c*I,s[1]=l*y+d*x+f*P,s[4]=l*g+d*T+f*R,s[7]=l*p+d*E+f*I,s[2]=u*y+m*x+w*P,s[5]=u*g+m*T+w*R,s[8]=u*p+m*E+w*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=d*a-o*l,u=o*c-d*s,m=l*s-a*c,w=e*f+n*u+r*m;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=f*y,t[1]=(r*l-d*n)*y,t[2]=(o*n-r*a)*y,t[3]=u*y,t[4]=(d*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ht,ml=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===le&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?As:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:t,whitePoint:n,transfer:As,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:le,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const ee=hf();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Rs("canvas")),Fi.width=t.width,Fi.height=t.height;const r=Fi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ha(r[a].image)):s.push(ha(r[a]))}else s=ha(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let ff=0;const da=new U;class Xe extends sr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Vn,r=Vn,s=He,a=ci,o=wn,c=sn,l=Xe.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Lr(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Zh;Xe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],d=c[4],f=c[8],u=c[1],m=c[5],w=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-y)<.01&&Math.abs(w-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+y)<.1&&Math.abs(w+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(m+1)/2,P=(p+1)/2,R=(d+u)/4,I=(f+y)/4,v=(w+g)/4;return T>E&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=I/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=v/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=I/s,r=v/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-w)*(g-w)+(f-y)*(f-y)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-w)/x,this.y=(f-y)/x,this.z=(u-d)/x,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends sr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Xe(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new mc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends _f{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class od extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ye{constructor(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y,g){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y,g)}set(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=m,p[7]=w,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*d,m=a*f,w=o*d,y=o*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=m+w*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=w+m*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*d,m=c*f,w=l*d,y=l*f;e[0]=u+y*o,e[4]=w*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=m*o-w,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*d,m=c*f,w=l*d,y=l*f;e[0]=u-y*o,e[4]=-a*f,e[8]=w+m*o,e[1]=m+w*o,e[5]=a*d,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*d,m=a*f,w=o*d,y=o*f;e[0]=c*d,e[4]=w*l-m,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=m*l-w,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,w=o*c,y=o*l;e[0]=c*d,e[4]=y-u*f,e[8]=w*f+m,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=m*f+w,e[10]=u-y*f}else if(t.order==="XZY"){const u=a*c,m=a*l,w=o*c,y=o*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=u*f+y,e[5]=a*d,e[9]=m*f-w,e[2]=w*f-m,e[6]=o*d,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){const r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ti.crossVectors(n,nn),ti.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ti.crossVectors(n,nn)),ti.normalize(),Vr.crossVectors(nn,ti),r[0]=ti.x,r[4]=Vr.x,r[8]=nn.x,r[1]=ti.y,r[5]=Vr.y,r[9]=nn.y,r[2]=ti.z,r[6]=Vr.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],m=n[13],w=n[2],y=n[6],g=n[10],p=n[14],x=n[3],T=n[7],E=n[11],P=n[15],R=r[0],I=r[4],v=r[8],M=r[12],V=r[1],D=r[5],H=r[9],k=r[13],Y=r[2],j=r[6],G=r[10],q=r[14],rt=r[3],it=r[7],mt=r[11],ot=r[15];return s[0]=a*R+o*V+c*Y+l*rt,s[4]=a*I+o*D+c*j+l*it,s[8]=a*v+o*H+c*G+l*mt,s[12]=a*M+o*k+c*q+l*ot,s[1]=d*R+f*V+u*Y+m*rt,s[5]=d*I+f*D+u*j+m*it,s[9]=d*v+f*H+u*G+m*mt,s[13]=d*M+f*k+u*q+m*ot,s[2]=w*R+y*V+g*Y+p*rt,s[6]=w*I+y*D+g*j+p*it,s[10]=w*v+y*H+g*G+p*mt,s[14]=w*M+y*k+g*q+p*ot,s[3]=x*R+T*V+E*Y+P*rt,s[7]=x*I+T*D+E*j+P*it,s[11]=x*v+T*H+E*G+P*mt,s[15]=x*M+T*k+E*q+P*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],f=t[6],u=t[10],m=t[14],w=t[3],y=t[7],g=t[11],p=t[15],x=c*m-l*u,T=o*m-l*f,E=o*u-c*f,P=a*m-l*d,R=a*u-c*d,I=a*f-o*d;return e*(y*x-g*T+p*E)-n*(w*x-g*P+p*R)+r*(w*T-y*P+p*I)-s*(w*E-y*R+g*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=t[9],u=t[10],m=t[11],w=t[12],y=t[13],g=t[14],p=t[15],x=e*o-n*a,T=e*c-r*a,E=e*l-s*a,P=n*c-r*o,R=n*l-s*o,I=r*l-s*c,v=d*y-f*w,M=d*g-u*w,V=d*p-m*w,D=f*g-u*y,H=f*p-m*y,k=u*p-m*g,Y=x*k-T*H+E*D+P*V-R*M+I*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/Y;return t[0]=(o*k-c*H+l*D)*j,t[1]=(r*H-n*k-s*D)*j,t[2]=(y*I-g*R+p*P)*j,t[3]=(u*R-f*I-m*P)*j,t[4]=(c*V-a*k-l*M)*j,t[5]=(e*k-r*V+s*M)*j,t[6]=(g*E-w*I-p*T)*j,t[7]=(d*I-u*E+m*T)*j,t[8]=(a*H-o*V+l*v)*j,t[9]=(n*V-e*H-s*v)*j,t[10]=(w*R-y*E+p*x)*j,t[11]=(f*E-d*R-m*x)*j,t[12]=(o*M-a*D-c*v)*j,t[13]=(e*D-n*M+r*v)*j,t[14]=(y*T-w*P-g*x)*j,t[15]=(d*P-f*T+u*x)*j,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,d=a+a,f=o+o,u=s*l,m=s*d,w=s*f,y=a*d,g=a*f,p=o*f,x=c*l,T=c*d,E=c*f,P=n.x,R=n.y,I=n.z;return r[0]=(1-(y+p))*P,r[1]=(m+E)*P,r[2]=(w-T)*P,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(u+p))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(w+T)*I,r[9]=(g-x)*I,r[10]=(1-(u+y))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),c=Ui.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const l=1/a,d=1/o,f=1/c;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=d,dn.elements[5]*=d,dn.elements[6]*=d,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=Rn,c=!1){const l=this.elements,d=2*s/(e-t),f=2*s/(n-r),u=(e+t)/(e-t),m=(n+r)/(n-r);let w,y;if(c)w=s/(a-s),y=a*s/(a-s);else if(o===Rn)w=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Tr)w=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=w,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Rn,c=!1){const l=this.elements,d=2/(e-t),f=2/(n-r),u=-(e+t)/(e-t),m=-(n+r)/(n-r);let w,y;if(c)w=1/(a-s),y=a/(a-s);else if(o===Rn)w=-2/(a-s),y=-(a+s)/(a-s);else if(o===Tr)w=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=w,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new U,dn=new ye,mf=new U(0,0,0),gf=new U(1,1,1),ti=new U,Vr=new U,nn=new U,wl=new ye,bl=new Ri;class Dn{constructor(t=0,e=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wf=0;const vl=new U,Ni=new Ri,Nn=new ye,kr=new U,dr=new U,bf=new U,vf=new Ri,xl=new U(1,0,0),yl=new U(0,1,0),Sl=new U(0,0,1),Ml={type:"added"},xf={type:"removed"},Oi={type:"childadded",child:null},ua={type:"childremoved",child:null};class Ve extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new U,e=new Dn,n=new Ri,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ht}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(Sl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(Sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(dr,kr,this.up):Nn.lookAt(kr,dr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),w=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new U(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,w=.005;l.inputState.pinching&&u>m+w?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-w&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},jr={h:0,s:0,l:0};function _a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=lf(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=_a(a,s,t+1/3),this.g=_a(a,s,t),this.b=_a(a,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ee.workingToColorSpace(je.copy(this),t),Math.round(Zt(je.r*255,0,255))*65536+Math.round(Zt(je.g*255,0,255))*256+Math.round(Zt(je.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(je.copy(this),e);const n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ze){ee.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,r=je.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(jr);const n=oa(ei.h,jr.h,e),r=oa(ei.s,jr.s,e),s=oa(ei.l,jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Wt;Wt.NAMES=ld;class Sf extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const un=new U,On=new U,pa=new U,Bn=new U,Bi=new U,zi=new U,El=new U,ma=new U,ga=new U,wa=new U,ba=new Me,va=new Me,xa=new Me;let Yi=class Ki{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),On.subVectors(n,e),pa.subVectors(t,e);const a=un.dot(un),o=un.dot(On),c=un.dot(pa),l=On.dot(On),d=On.dot(pa),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(l*c-o*d)*u,w=(a*d-o*c)*u;return s.set(1-m-w,w,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return ba.setScalar(0),va.setScalar(0),xa.setScalar(0),ba.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(va,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),On.subVectors(t,e),un.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ki.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ki.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,n),zi.subVectors(s,n),ma.subVectors(t,n);const c=Bi.dot(ma),l=zi.dot(ma);if(c<=0&&l<=0)return e.copy(n);ga.subVectors(t,r);const d=Bi.dot(ga),f=zi.dot(ga);if(d>=0&&f<=d)return e.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Bi,a);wa.subVectors(t,s);const m=Bi.dot(wa),w=zi.dot(wa);if(w>=0&&m<=w)return e.copy(s);const y=m*l-c*w;if(y<=0&&l>=0&&w<=0)return o=l/(l-w),e.copy(n).addScaledVector(zi,o);const g=d*w-m*f;if(g<=0&&f-d>=0&&m-w>=0)return El.subVectors(s,r),o=(f-d)/(f-d+(m-w)),e.copy(r).addScaledVector(El,o);const p=1/(g+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};class Fr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),qr.subVectors(this.max,ur),Hi.subVectors(t.a,ur),Gi.subVectors(t.b,ur),Vi.subVectors(t.c,ur),ni.subVectors(Gi,Hi),ii.subVectors(Vi,Gi),pi.subVectors(Hi,Vi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-pi.z,pi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,pi.z,0,-pi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-pi.y,pi.x,0];return!ya(e,Hi,Gi,Vi,qr)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,Hi,Gi,Vi,qr))?!1:(Yr.crossVectors(ni,ii),e=[Yr.x,Yr.y,Yr.z],ya(e,Hi,Gi,Vi,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],fn=new U,Xr=new Fr,Hi=new U,Gi=new U,Vi=new U,ni=new U,ii=new U,pi=new U,ur=new U,qr=new U,Yr=new U,mi=new U;function ya(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mi.fromArray(i,s);const o=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),d=n.dot(mi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Pe=new U,Kr=new Kt;let Mf=0;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class hd extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dd extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ef=new Fr,fr=new U,Sa=new U;class Gs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Sa)),this.expandByPoint(fr.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Tf=0;const on=new ye,Ma=new Ve,ki=new U,rn=new Fr,_r=new Fr,Oe=new U;class Je extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?dd:hd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(rn.min,_r.min),rn.expandByPoint(Oe),Oe.addVectors(rn.max,_r.max),rn.expandByPoint(Oe)):(rn.expandByPoint(_r.min),rn.expandByPoint(_r.max))}rn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Oe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Oe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Oe.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(t,l),Oe.add(ki)),r=Math.max(r,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new U,c[v]=new U;const l=new U,d=new U,f=new U,u=new Kt,m=new Kt,w=new Kt,y=new U,g=new U;function p(v,M,V){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,V),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,M),w.fromBufferAttribute(s,V),d.sub(l),f.sub(l),m.sub(u),w.sub(u);const D=1/(m.x*w.y-w.x*m.y);isFinite(D)&&(y.copy(d).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-w.x).multiplyScalar(D),o[v].add(y),o[M].add(y),o[V].add(y),c[v].add(g),c[M].add(g),c[V].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,M=x.length;v<M;++v){const V=x[v],D=V.start,H=V.count;for(let k=D,Y=D+H;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new U,E=new U,P=new U,R=new U;function I(v){P.fromBufferAttribute(r,v),R.copy(P);const M=o[v];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(R,M);const D=E.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,M=x.length;v<M;++v){const V=x[v],D=V.start,H=V.count;for(let k=D,Y=D+H;k<Y;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,d=new U,f=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){const w=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(d),c.add(d),l.add(d),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let m=0,w=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*d;for(let p=0;p<d;p++)u[w++]=l[m++]}return new Pn(u,d,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];d.push(m.toJSON(t.data))}d.length>0&&(r[c]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Af=0;class Ci extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ji,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Ja,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hn=new U,Ea=new U,Jr=new U,ri=new U,Ta=new U,$r=new U,Aa=new U;class ud{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ea.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ea);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=ri.dot(this.direction),c=-ri.dot(Jr),l=ri.lengthSq(),d=Math.abs(1-a*a);let f,u,m,w;if(d>0)if(f=a*c-o,u=a*o-c,w=s*d,f>=0)if(u>=-w)if(u<=w){const y=1/d;f*=y,u*=y,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-w?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=w?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ea).addScaledVector(Jr,u),m}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),d>=0?(s=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,r,s){Ta.subVectors(e,t),$r.subVectors(n,t),Aa.crossVectors(Ta,$r);let a=this.direction.dot(Aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);const c=o*this.direction.dot($r.crossVectors(ri,$r));if(c<0)return null;const l=o*this.direction.dot(Ta.cross(ri));if(l<0||c+l>a)return null;const d=-o*ri.dot(Aa);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fd extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tl=new ye,gi=new ud,Zr=new Gs,Al=new U,Qr=new U,ts=new U,es=new U,Ra=new U,ns=new U,Rl=new U,is=new U;class Qe extends Ve{constructor(t=new Je,e=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(Ra.fromBufferAttribute(f,t),a?ns.addScaledVector(Ra,d):ns.addScaledVector(Ra.sub(e),d))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(Zr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Zr,Al)===null||gi.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(Tl.copy(s).invert(),gi.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,y=u.length;w<y;w++){const g=u[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const R=o.getX(E),I=o.getX(E+1),v=o.getX(E+2);r=rs(this,p,t,n,l,d,f,R,I,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=o.getX(g),T=o.getX(g+1),E=o.getX(g+2);r=rs(this,a,t,n,l,d,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let w=0,y=u.length;w<y;w++){const g=u[w],p=a[g.materialIndex],x=Math.max(g.start,m.start),T=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=T;E<P;E+=3){const R=E,I=E+1,v=E+2;r=rs(this,p,t,n,l,d,f,R,I,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=w,p=y;g<p;g+=3){const x=g,T=g+1,E=g+2;r=rs(this,a,t,n,l,d,f,x,T,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Rf(i,t,e,n,r,s,a,o){let c;if(t.side===tn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===hi,o),c===null)return null;is.copy(o),is.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(is);return l<e.near||l>e.far?null:{distance:l,point:is.clone(),object:i}}function rs(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Qr),i.getVertexPosition(c,ts),i.getVertexPosition(l,es);const d=Rf(i,t,e,n,Qr,ts,es,Rl);if(d){const f=new U;Yi.getBarycoord(Rl,Qr,ts,es,f),r&&(d.uv=Yi.getInterpolatedAttribute(r,o,c,l,f,new Kt)),s&&(d.uv1=Yi.getInterpolatedAttribute(s,o,c,l,f,new Kt)),a&&(d.normal=Yi.getInterpolatedAttribute(a,o,c,l,f,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};Yi.getNormal(Qr,ts,es,u.normal),d.face=u,d.barycoord=f}return d}class _d extends Xe{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Le,d=Le,f,u){super(null,a,o,c,l,d,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ca=new U,Cf=new U,Pf=new Ht;class xi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ca.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),r=this.coplanarPoint(Ca).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Gs,If=new Kt(.5,.5),ss=new U;class gc{constructor(t=new xi,e=new xi,n=new xi,r=new xi,s=new xi,a=new xi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],m=s[7],w=s[8],y=s[9],g=s[10],p=s[11],x=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,m-d,p-w,P-x).normalize(),r[1].setComponents(l+a,m+d,p+w,P+x).normalize(),r[2].setComponents(l+o,m+f,p+y,P+T).normalize(),r[3].setComponents(l-o,m-f,p-y,P-T).normalize(),n)r[4].setComponents(c,u,g,E).normalize(),r[5].setComponents(l-c,m-u,p-g,P-E).normalize();else if(r[4].setComponents(l-c,m-u,p-g,P-E).normalize(),e===Rn)r[5].setComponents(l+c,m+u,p+g,P+E).normalize();else if(e===Tr)r[5].setComponents(c,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=If.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ss.x=r.normal.x>0?t.max.x:t.min.x,ss.y=r.normal.y>0?t.max.y:t.min.y,ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pd extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new U,Is=new U,Cl=new ye,pr=new ud,as=new Gs,Pa=new U,Pl=new U;class Df extends Ve{constructor(t=new Je,e=new pd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ps.fromBufferAttribute(e,r-1),Is.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ps.distanceTo(Is);t.setAttribute("lineDistance",new ve(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;Cl.copy(r).invert(),pr.copy(t.ray).applyMatrix4(Cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=l){const p=d.getX(y),x=d.getX(y+1),T=os(this,t,pr,c,p,x,y);T&&e.push(T)}if(this.isLineLoop){const y=d.getX(w-1),g=d.getX(m),p=os(this,t,pr,c,y,g,w-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),w=Math.min(u.count,a.start+a.count);for(let y=m,g=w-1;y<g;y+=l){const p=os(this,t,pr,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=os(this,t,pr,c,w-1,m,w-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function os(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Ps.fromBufferAttribute(o,r),Is.fromBufferAttribute(o,s),e.distanceSqToSegment(Ps,Is,Pa,Pl)>n)return;Pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:Pl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Il=new U,Dl=new U;class Lf extends Df{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Il.fromBufferAttribute(e,r),Dl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Il.distanceTo(Dl);t.setAttribute("lineDistance",new ve(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class md extends Xe{constructor(t=[],e=Ti,n,r,s,a,o,c,l,d){super(t,e,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends Xe{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ar extends Xe{constructor(t,e,n=In,r,s,a,o=Le,c=Le,l,d=qn,f=1){if(d!==qn&&d!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uf extends Ar{constructor(t,e=In,n=Ti,r,s,a=Le,o=Le,c,l=qn){const d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gd extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ar extends Je{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],f=[];let u=0,m=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function w(y,g,p,x,T,E,P,R,I,v,M){const V=E/I,D=P/v,H=E/2,k=P/2,Y=R/2,j=I+1,G=v+1;let q=0,rt=0;const it=new U;for(let mt=0;mt<G;mt++){const ot=mt*D-k;for(let ct=0;ct<j;ct++){const Et=ct*V-H;it[y]=Et*x,it[g]=ot*T,it[p]=Y,l.push(it.x,it.y,it.z),it[y]=0,it[g]=0,it[p]=R>0?1:-1,d.push(it.x,it.y,it.z),f.push(ct/I),f.push(1-mt/v),q+=1}}for(let mt=0;mt<v;mt++)for(let ot=0;ot<I;ot++){const ct=u+ot+j*mt,Et=u+ot+j*(mt+1),Qt=u+(ot+1)+j*(mt+1),ne=u+(ot+1)+j*mt;c.push(ct,Et,ne),c.push(Et,Qt,ne),rt+=6}o.addGroup(m,rt,M),m+=rt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wc extends Je{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new U,d=new Kt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const m=n+f/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/t+1)/2,d.y=(a[u+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ds extends Je{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],m=[];let w=0;const y=[],g=n/2;let p=0;x(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(m,2));function x(){const E=new U,P=new U;let R=0;const I=(e-t)/n;for(let v=0;v<=s;v++){const M=[],V=v/s,D=V*(e-t)+t;for(let H=0;H<=r;H++){const k=H/r,Y=k*c+o,j=Math.sin(Y),G=Math.cos(Y);P.x=D*j,P.y=-V*n+g,P.z=D*G,f.push(P.x,P.y,P.z),E.set(j,I,G).normalize(),u.push(E.x,E.y,E.z),m.push(k,1-V),M.push(w++)}y.push(M)}for(let v=0;v<r;v++)for(let M=0;M<s;M++){const V=y[M][v],D=y[M+1][v],H=y[M+1][v+1],k=y[M][v+1];(t>0||M!==0)&&(d.push(V,D,k),R+=3),(e>0||M!==s-1)&&(d.push(D,H,k),R+=3)}l.addGroup(p,R,0),p+=R}function T(E){const P=w,R=new Kt,I=new U;let v=0;const M=E===!0?t:e,V=E===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,g*V,0),u.push(0,V,0),m.push(.5,.5),w++;const D=w;for(let H=0;H<=r;H++){const Y=H/r*c+o,j=Math.cos(Y),G=Math.sin(Y);I.x=M*G,I.y=g*V,I.z=M*j,f.push(I.x,I.y,I.z),u.push(0,V,0),R.x=j*.5+.5,R.y=G*.5*V+.5,m.push(R.x,R.y),w++}for(let H=0;H<r;H++){const k=P+H,Y=D+H;E===!0?d.push(Y,Y+1,k):d.push(Y+1,Y,k),v+=3}l.addGroup(p,v,E===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class or extends Je{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),d(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new U,E=new U,P=new U;for(let R=0;R<e.length;R+=3)m(e[R+0],T),m(e[R+1],E),m(e[R+2],P),c(T,E,P,x)}function c(x,T,E,P){const R=P+1,I=[];for(let v=0;v<=R;v++){I[v]=[];const M=x.clone().lerp(E,v/R),V=T.clone().lerp(E,v/R),D=R-v;for(let H=0;H<=D;H++)H===0&&v===R?I[v][H]=M:I[v][H]=M.clone().lerp(V,H/D)}for(let v=0;v<R;v++)for(let M=0;M<2*(R-v)-1;M++){const V=Math.floor(M/2);M%2===0?(u(I[v][V+1]),u(I[v+1][V]),u(I[v][V])):(u(I[v][V+1]),u(I[v+1][V+1]),u(I[v+1][V]))}}function l(x){const T=new U;for(let E=0;E<s.length;E+=3)T.x=s[E+0],T.y=s[E+1],T.z=s[E+2],T.normalize().multiplyScalar(x),s[E+0]=T.x,s[E+1]=T.y,s[E+2]=T.z}function d(){const x=new U;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];const E=g(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;a.push(E,1-P)}w(),f()}function f(){for(let x=0;x<a.length;x+=6){const T=a[x+0],E=a[x+2],P=a[x+4],R=Math.max(T,E,P),I=Math.min(T,E,P);R>.9&&I<.1&&(T<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function m(x,T){const E=x*3;T.x=t[E+0],T.y=t[E+1],T.z=t[E+2]}function w(){const x=new U,T=new U,E=new U,P=new U,R=new Kt,I=new Kt,v=new Kt;for(let M=0,V=0;M<s.length;M+=9,V+=6){x.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),R.set(a[V+0],a[V+1]),I.set(a[V+2],a[V+3]),v.set(a[V+4],a[V+5]),P.copy(x).add(T).add(E).divideScalar(3);const D=g(P);y(R,V+0,x,D),y(I,V+2,T,D),y(v,V+4,E,D)}}function y(x,T,E,P){P<0&&x.x===1&&(a[T]=x.x-1),E.x===0&&E.z===0&&(a[T]=P/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.vertices,t.indices,t.radius,t.detail)}}class bc extends or{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bc(t.radius,t.detail)}}const cs=new U,ls=new U,Ia=new U,hs=new Yi;class Nf extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Es*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],d=["a","b","c"],f=new Array(3),u={},m=[];for(let w=0;w<c;w+=3){a?(l[0]=a.getX(w),l[1]=a.getX(w+1),l[2]=a.getX(w+2)):(l[0]=w,l[1]=w+1,l[2]=w+2);const{a:y,b:g,c:p}=hs;if(y.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),hs.getNormal(Ia),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const T=(x+1)%3,E=f[x],P=f[T],R=hs[d[x]],I=hs[d[T]],v=`${E}_${P}`,M=`${P}_${E}`;M in u&&u[M]?(Ia.dot(u[M].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(I.x,I.y,I.z)),u[M]=null):v in u||(u[v]={index0:l[x],index1:l[T],normal:Ia.clone()})}}for(const w in u)if(u[w]){const{index0:y,index1:g}=u[w];cs.fromBufferAttribute(o,y),ls.fromBufferAttribute(o,g),m.push(cs.x,cs.y,cs.z),m.push(ls.x,ls.y,ls.z)}this.setAttribute("position",new ve(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vc extends or{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vc(t.radius,t.detail)}}class xc extends or{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xc(t.radius,t.detail)}}class Vs extends Je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,f=t/o,u=e/c,m=[],w=[],y=[],g=[];for(let p=0;p<d;p++){const x=p*u-a;for(let T=0;T<l;T++){const E=T*f-s;w.push(E,-x,0),y.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const T=x+l*p,E=x+l*(p+1),P=x+1+l*(p+1),R=x+1+l*p;m.push(T,E,R),m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new ve(w,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.widthSegments,t.heightSegments)}}class yc extends or{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yc(t.radius,t.detail)}}class Sc extends Je{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],d=[],f=[],u=new U,m=new U,w=new U;for(let y=0;y<=n;y++){const g=a+y/n*o;for(let p=0;p<=r;p++){const x=p/r*s;m.x=(t+e*Math.cos(g))*Math.cos(x),m.y=(t+e*Math.cos(g))*Math.sin(x),m.z=e*Math.sin(g),l.push(m.x,m.y,m.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),w.subVectors(m,u).normalize(),d.push(w.x,w.y,w.z),f.push(p/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=r;g++){const p=(r+1)*y+g-1,x=(r+1)*(y-1)+g-1,T=(r+1)*(y-1)+g,E=(r+1)*y+g;c.push(p,x,E),c.push(x,T,E)}this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const r in n)t[r]=n[r]}return t}function Of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Bf={clone:nr,merge:qe};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gf extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ds extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vf extends Ci{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class kf extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wf extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bd extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Da=new ye,Ll=new U,Fl=new U;class jf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Tr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const us=new U,fs=new Ri,Sn=new U;class vd extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(us,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(us,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new U,Ul=new Kt,Nl=new Kt;class cn extends vd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Ul,Nl),e.subVectors(Nl,Ul)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Mc extends vd{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xf extends jf{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends bd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Xf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class qf extends bd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wi=-90,ji=1;class Yf extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Wi,ji,t,e);r.layers=this.layers,this.add(r);const s=new cn(Wi,ji,t,e);s.layers=this.layers,this.add(s);const a=new cn(Wi,ji,t,e);a.layers=this.layers,this.add(a);const o=new cn(Wi,ji,t,e);o.layers=this.layers,this.add(o);const c=new cn(Wi,ji,t,e);c.layers=this.layers,this.add(c);const l=new cn(Wi,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,u,m),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class Kf extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Bl(i,t,e,n){const r=Jf(n);switch(e){case id:return i*t;case lc:return i*t/r.components*r.byteLength;case hc:return i*t/r.components*r.byteLength;case tr:return i*t*2/r.components*r.byteLength;case dc:return i*t*2/r.components*r.byteLength;case rd:return i*t*3/r.components*r.byteLength;case wn:return i*t*4/r.components*r.byteLength;case uc:return i*t*4/r.components*r.byteLength;case xs:case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:case lo:return Math.max(i,16)*Math.max(t,8)/4;case ao:case co:return Math.max(i,8)*Math.max(t,8)/2;case ho:case uo:case _o:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Do:case Lo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jf(i){switch(i){case sn:case Qh:return{byteLength:1,components:1};case Mr:case td:case Xn:return{byteLength:2,components:1};case oc:case cc:return{byteLength:2,components:4};case In:case ac:case An:return{byteLength:4,components:1};case ed:case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xd(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function $f(i){const t=new WeakMap;function e(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((m,w)=>m.start-w.start);let u=0;for(let m=1;m<f.length;m++){const w=f[u],y=f[m];y.start<=w.start+w.count+1?w.count=Math.max(w.count,y.start+y.count-w.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,w=f.length;m<w;m++){const y=f[m];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Zf,alphahash_pars_fragment:Qf,alphamap_fragment:t_,alphamap_pars_fragment:e_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:r_,aomap_pars_fragment:s_,batching_pars_vertex:a_,batching_vertex:o_,begin_vertex:c_,beginnormal_vertex:l_,bsdfs:h_,iridescence_fragment:d_,bumpmap_pars_fragment:u_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:g_,color_pars_fragment:w_,color_pars_vertex:b_,color_vertex:v_,common:x_,cube_uv_reflection_fragment:y_,defaultnormal_vertex:S_,displacementmap_pars_vertex:M_,displacementmap_vertex:E_,emissivemap_fragment:T_,emissivemap_pars_fragment:A_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:P_,envmap_common_pars_fragment:I_,envmap_pars_fragment:D_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:W_,envmap_vertex:F_,fog_vertex:U_,fog_pars_vertex:N_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_pars_fragment:H_,lights_lambert_fragment:G_,lights_lambert_pars_fragment:V_,lights_pars_begin:k_,lights_toon_fragment:j_,lights_toon_pars_fragment:X_,lights_phong_fragment:q_,lights_phong_pars_fragment:Y_,lights_physical_fragment:K_,lights_physical_pars_fragment:J_,lights_fragment_begin:$_,lights_fragment_maps:Z_,lights_fragment_end:Q_,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:ap,map_particle_pars_fragment:op,metalnessmap_fragment:cp,metalnessmap_pars_fragment:lp,morphinstance_vertex:hp,morphcolor_vertex:dp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:_p,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:wp,normal_vertex:bp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Mp,opaque_fragment:Ep,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Fp,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:Hp,specularmap_fragment:Gp,specularmap_pars_fragment:Vp,tonemapping_fragment:kp,tonemapping_pars_fragment:Wp,transmission_fragment:jp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Kp,worldpos_vertex:Jp,background_vert:$p,background_frag:Zp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:rm,distance_vert:sm,distance_frag:am,equirect_vert:om,equirect_frag:cm,linedashed_vert:lm,linedashed_frag:hm,meshbasic_vert:dm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:_m,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:wm,meshphong_vert:bm,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:Sm,meshtoon_frag:Mm,points_vert:Em,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},ft={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Tn={basic:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:qe([ft.common,ft.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:qe([ft.lights,ft.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Tn.physical={uniforms:qe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const _s={r:0,b:0,g:0},bi=new Dn,Im=new ye;function Dm(i,t,e,n,r,s){const a=new Wt(0);let o=r===!0?0:1,c,l,d=null,f=0,u=null;function m(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const E=x.backgroundBlurriness>0;T=t.get(T,E)}return T}function w(x){let T=!1;const E=m(x);E===null?g(a,o):E&&E.isColor&&(g(E,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===Hs)?(l===void 0&&(l=new Qe(new ar(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:nr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),bi.copy(T.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(bi)),l.material.toneMapped=ee.getTransfer(E.colorSpace)!==le,(d!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qe(new Vs(2,2),new Ln({name:"BackgroundMaterial",uniforms:nr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ee.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,T){x.getRGB(_s,wd(i)),e.buffers.color.setClear(_s.r,_s.g,_s.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:w,addToRenderList:y,dispose:p}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(D,H,k,Y,j){let G=!1;const q=f(D,Y,k,H);s!==q&&(s=q,l(s.object)),G=m(D,Y,k,j),G&&w(D,Y,k,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(D,H,k,Y),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function f(D,H,k,Y){const j=Y.wireframe===!0;let G=n[H.id];G===void 0&&(G={},n[H.id]=G);const q=D.isInstancedMesh===!0?D.id:0;let rt=G[q];rt===void 0&&(rt={},G[q]=rt);let it=rt[k.id];it===void 0&&(it={},rt[k.id]=it);let mt=it[j];return mt===void 0&&(mt=u(c()),it[j]=mt),mt}function u(D){const H=[],k=[],Y=[];for(let j=0;j<e;j++)H[j]=0,k[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:Y,object:D,attributes:{},index:null}}function m(D,H,k,Y){const j=s.attributes,G=H.attributes;let q=0;const rt=k.getAttributes();for(const it in rt)if(rt[it].location>=0){const ot=j[it];let ct=G[it];if(ct===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),ot===void 0||ot.attribute!==ct||ct&&ot.data!==ct.data)return!0;q++}return s.attributesNum!==q||s.index!==Y}function w(D,H,k,Y){const j={},G=H.attributes;let q=0;const rt=k.getAttributes();for(const it in rt)if(rt[it].location>=0){let ot=G[it];ot===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor));const ct={};ct.attribute=ot,ot&&ot.data&&(ct.data=ot.data),j[it]=ct,q++}s.attributes=j,s.attributesNum=q,s.index=Y}function y(){const D=s.newAttributes;for(let H=0,k=D.length;H<k;H++)D[H]=0}function g(D){p(D,0)}function p(D,H){const k=s.newAttributes,Y=s.enabledAttributes,j=s.attributeDivisors;k[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),j[D]!==H&&(i.vertexAttribDivisor(D,H),j[D]=H)}function x(){const D=s.newAttributes,H=s.enabledAttributes;for(let k=0,Y=H.length;k<Y;k++)H[k]!==D[k]&&(i.disableVertexAttribArray(k),H[k]=0)}function T(D,H,k,Y,j,G,q){q===!0?i.vertexAttribIPointer(D,H,k,j,G):i.vertexAttribPointer(D,H,k,Y,j,G)}function E(D,H,k,Y){y();const j=Y.attributes,G=k.getAttributes(),q=H.defaultAttributeValues;for(const rt in G){const it=G[rt];if(it.location>=0){let mt=j[rt];if(mt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){const ot=mt.normalized,ct=mt.itemSize,Et=t.get(mt);if(Et===void 0)continue;const Qt=Et.buffer,ne=Et.type,tt=Et.bytesPerElement,K=ne===i.INT||ne===i.UNSIGNED_INT||mt.gpuType===ac;if(mt.isInterleavedBufferAttribute){const $=mt.data,xt=$.stride,wt=mt.offset;if($.isInstancedInterleavedBuffer){for(let Dt=0;Dt<it.locationSize;Dt++)p(it.location+Dt,$.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Dt=0;Dt<it.locationSize;Dt++)g(it.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Dt=0;Dt<it.locationSize;Dt++)T(it.location+Dt,ct/it.locationSize,ne,ot,xt*tt,(wt+ct/it.locationSize*Dt)*tt,K)}else{if(mt.isInstancedBufferAttribute){for(let $=0;$<it.locationSize;$++)p(it.location+$,mt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $=0;$<it.locationSize;$++)g(it.location+$);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let $=0;$<it.locationSize;$++)T(it.location+$,ct/it.locationSize,ne,ot,ct*tt,ct/it.locationSize*$*tt,K)}}else if(q!==void 0){const ot=q[rt];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(it.location,ot);break;case 3:i.vertexAttrib3fv(it.location,ot);break;case 4:i.vertexAttrib4fv(it.location,ot);break;default:i.vertexAttrib1fv(it.location,ot)}}}}x()}function P(){M();for(const D in n){const H=n[D];for(const k in H){const Y=H[k];for(const j in Y){const G=Y[j];for(const q in G)d(G[q].object),delete G[q];delete Y[j]}}delete n[D]}}function R(D){if(n[D.id]===void 0)return;const H=n[D.id];for(const k in H){const Y=H[k];for(const j in Y){const G=Y[j];for(const q in G)d(G[q].object),delete G[q];delete Y[j]}}delete n[D.id]}function I(D){for(const H in n){const k=n[H];for(const Y in k){const j=k[Y];if(j[D.id]===void 0)continue;const G=j[D.id];for(const q in G)d(G[q].object),delete G[q];delete j[D.id]}}}function v(D){for(const H in n){const k=n[H],Y=D.isInstancedMesh===!0?D.id:0,j=k[Y];if(j!==void 0){for(const G in j){const q=j[G];for(const rt in q)d(q[rt].object),delete q[rt];delete j[G]}delete k[Y],Object.keys(k).length===0&&delete n[H]}}}function M(){V(),a=!0,s!==r&&(s=r,l(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function Fm(i,t,e){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function a(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),e.update(d,n,f))}function o(l,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let m=0;for(let w=0;w<f;w++)m+=d[w];e.update(m,n,1)}function c(l,d,f,u){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let w=0;w<l.length;w++)a(l[w],d[w],u[w]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,f);let w=0;for(let y=0;y<f;y++)w+=d[y]*u[y];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Um(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const v=I===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==An&&!v)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(Ot("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:w,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:E,maxSamples:P,samples:R}}function Nm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new xi,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=d(f,u,0)},this.setState=function(f,u,m){const w=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||w===null||w.length===0||s&&!g)s?d(null):l();else{const x=s?0:n,T=x*4;let E=p.clippingState||null;c.value=E,E=d(w,u,T,m);for(let P=0;P!==T;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,u,m,w){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,w!==!0||g===null){const p=m+y*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=m;T!==y;++T,E+=4)a.copy(f[T]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const li=4,zl=[.125,.215,.35,.446,.526,.582],Si=20,Om=256,mr=new Mc,Hl=new Wt;let La=null,Fa=0,Ua=0,Na=!1;const Bm=new U;class Gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Bm}=s;La=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Fa,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,Xi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Xn,format:wn,colorSpace:er,depthBuffer:!1},r=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zm(s)),this._blurMaterial=Gm(s,t,e),this._ggxMaterial=Hm(s,t,e)}return r}_compileMaterial(t){const e=new Qe(new Je,t);this._renderer.compile(e,mr)}_sceneToCubeUV(t,e,n,r,s){const c=new cn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Hl),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new ar,new fd({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Hl),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[T]));const P=this._cubeSize;Xi(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),p&&f.render(y,c),f.render(t,c)}f.toneMapping=m,f.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ti||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Xi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),u=0+l*1.25,m=f*u,{_lodMax:w}=this,y=this._sizeLods[n],g=3*y*(n>w-li?n-w+li:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=w-e,Xi(s,g,p,3*y,2*y),r.setRenderTarget(s),r.render(o,mr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=w-n,Xi(t,g,p,3*y,2*y),r.setRenderTarget(t),r.render(o,mr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,m=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),y=s/w,g=isFinite(s)?1+Math.floor(d*y):Si;g>Si&&Ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);const p=[];let x=0;for(let I=0;I<Si;++I){const v=I/y,M=Math.exp(-v*v/2);p.push(M),I===0?x+=M:I<g&&(x+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=w,u.mipInt.value=T-n;const E=this._sizeLods[r],P=3*E*(r>T-li?r-T+li:0),R=4*(this._cubeSize-E);Xi(e,P,R,3*E,2*E),c.setRenderTarget(e),c.render(f,mr)}}function zm(i){const t=[],e=[],n=[];let r=i;const s=i-li+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-li?c=zl[a-i+li-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),d=-l,f=1+l,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,w=6,y=3,g=2,p=1,x=new Float32Array(y*w*m),T=new Float32Array(g*w*m),E=new Float32Array(p*w*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,v=R>2?0:-1,M=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];x.set(M,y*w*R),T.set(u,g*w*R);const V=[R,R,R,R,R,R];E.set(V,p*w*R)}const P=new Je;P.setAttribute("position",new Pn(x,y)),P.setAttribute("uv",new Pn(T,g)),P.setAttribute("faceIndex",new Pn(E,p)),n.push(new Qe(P,null)),r>li&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vl(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Hm(i,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){const n=new Float32Array(Si),r=new U(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function kl(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wl(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yd extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new md(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:kn});s.uniforms.tEquirect.value=e;const a=new Qe(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=He),new Yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function Vm(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===ra||m===sa)if(t.has(u)){const w=t.get(u).texture;return o(w,u.mapping)}else{const w=u.image;if(w&&w.height>0){const y=new yd(w.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,w=m===ra||m===sa,y=m===Ti||m===Qi;if(w||y){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Gl(i)),g=w?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return w&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new Gl(i)),g=w?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,m){return m===ra?u.mapping=Ti:m===sa&&(u.mapping=Qi),u}function c(u){let m=0;const w=6;for(let y=0;y<w;y++)u[y]!==void 0&&m++;return m===w}function l(u){const m=u.target;m.removeEventListener("dispose",l);const w=t.get(m);w!==void 0&&(t.delete(m),w.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const w=e.get(m);w!==void 0&&(e.delete(m),w.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Cs("WebGLRenderer: "+n+" extension not supported."),r}}}function Wm(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const w in u.attributes)t.remove(u.attributes[w]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER)}function l(f){const u=[],m=f.index,w=f.attributes.position;let y=0;if(w===void 0)return;if(m!==null){const x=m.array;y=m.version;for(let T=0,E=x.length;T<E;T+=3){const P=x[T+0],R=x[T+1],I=x[T+2];u.push(P,R,R,I,I,P)}}else{const x=w.array;y=w.version;for(let T=0,E=x.length/3-1;T<E;T+=3){const P=T+0,R=T+1,I=T+2;u.push(P,R,R,I,I,P)}}const g=new(w.count>=65535?dd:hd)(u,1);g.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function d(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function jm(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,m){i.drawElements(n,m,s,u*a),e.update(m,n,1)}function l(u,m,w){w!==0&&(i.drawElementsInstanced(n,m,s,u*a,w),e.update(m,n,w))}function d(u,m,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,w);let g=0;for(let p=0;p<w;p++)g+=m[p];e.update(g,n,1)}function f(u,m,w,y){if(w===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/a,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,y,0,w);let p=0;for(let x=0;x<w;x++)p+=m[x]*y[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qm(i,t,e){const n=new WeakMap,r=new Me;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),w===!0&&(T=2),y===!0&&(T=3);let E=o.attributes.position.count*T,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*P*4*f),I=new od(R,E,P,f);I.type=An,I.needsUpdate=!0;const v=T*4;for(let V=0;V<f;V++){const D=g[V],H=p[V],k=x[V],Y=E*P*4*V;for(let j=0;j<D.count;j++){const G=j*v;m===!0&&(r.fromBufferAttribute(D,j),R[Y+G+0]=r.x,R[Y+G+1]=r.y,R[Y+G+2]=r.z,R[Y+G+3]=0),w===!0&&(r.fromBufferAttribute(H,j),R[Y+G+4]=r.x,R[Y+G+5]=r.y,R[Y+G+6]=r.z,R[Y+G+7]=0),y===!0&&(r.fromBufferAttribute(k,j),R[Y+G+8]=r.x,R[Y+G+9]=r.y,R[Y+G+10]=r.z,R[Y+G+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:I,size:new Kt(E,P)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];const w=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Ym(i,t,e,n,r){let s=new WeakMap;function a(l){const d=r.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const Km={[jh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function Jm(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Cn(t,e,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),o=new Je;o.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ve([0,2,0,0,2,0],2));const c=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Qe(o,c),d=new Mc(-1,1,1,-1,0,1);let f=null,u=null,m=!1,w,y=null,g=[],p=!1;this.setSize=function(x,T){s.setSize(x,T),a.setSize(x,T);for(let E=0;E<g.length;E++){const P=g[E];P.setSize&&P.setSize(x,T)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const T=s.width,E=s.height;for(let P=0;P<g.length;P++){const R=g[P];R.setSize&&R.setSize(T,E)}},this.begin=function(x,T){if(m||x.toneMapping===bn&&g.length===0)return!1;if(y=T,T!==null){const E=T.width,P=T.height;(s.width!==E||s.height!==P)&&this.setSize(E,P)}return p===!1&&x.setRenderTarget(s),w=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(x,T){x.toneMapping=w,m=!0;let E=s,P=a;for(let R=0;R<g.length;R++){const I=g[R];if(I.enabled!==!1&&(I.render(x,P,E,T),I.needsSwap!==!1)){const v=E;E=P,P=v}}if(f!==x.outputColorSpace||u!==x.toneMapping){f=x.outputColorSpace,u=x.toneMapping,c.defines={},ee.getTransfer(f)===le&&(c.defines.SRGB_TRANSFER="");const R=Km[u];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(y),x.render(l,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Sd=new Xe,Ho=new Ar(1,1),Md=new od,Ed=new pf,Td=new md,jl=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),Kl=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=jl[r];if(s===void 0&&(s=new Float32Array(r),jl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ws(i,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Ue(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Ue(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Ue(e,n)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function ug(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=e.isReversedDepthBuffer()?pc:_c,s=Ho):s=Sd,e.setTexture2D(t||s,r)}function fg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ed,r)}function _g(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Td,r)}function pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Md,r)}function mg(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Qm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function bg(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yg(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sg(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ho:a=Sd;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Lg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ed,s[a])}function Fg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Td,s[a])}function Ug(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Md,s[a])}function Ng(i){switch(i){case 5126:return gg;case 35664:return wg;case 35665:return bg;case 35666:return vg;case 35674:return xg;case 35675:return yg;case 35676:return Sg;case 5124:case 35670:return Mg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Jl(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){const n=i.name,r=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),a=Oa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Jl(e,l===void 0?new Og(o,i,t):new Bg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new zg(o),Jl(e,f)),e=f}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Hg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function $l(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gg=37297;let Vg=0;function kg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Zl=new Ht;function Wg(i){ee._getMatrix(Zl,ee.workingColorSpace,i);const t=`mat3( ${Zl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case As:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+kg(i.getShaderSource(t),o)}else return s}function jg(i,t){const e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Xg={[jh]:"Linear",[Xh]:"Reinhard",[qh]:"Cineon",[Yh]:"ACESFilmic",[Jh]:"AgX",[$h]:"Neutral",[Kh]:"Custom"};function qg(i,t){const e=Xg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new U;function Yg(){ee.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Jg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vr(i){return i!==""}function th(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(Zg,tw)}const Qg=new Map;function tw(i,t){let e=Vt[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=Vt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(ew,nw)}function nw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const iw={[vs]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function rw(i){return iw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sw={[Ti]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function aw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ow={[Qi]:"ENVMAP_MODE_REFRACTION"};function cw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ow[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[qu]:"ENVMAP_BLENDING_MIX",[Yu]:"ENVMAP_BLENDING_ADD"};function hw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lw[i.combine]||"ENVMAP_BLENDING_NONE"}function dw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function uw(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=rw(e),l=aw(e),d=cw(e),f=hw(e),u=dw(e),m=Kg(e),w=Jg(s),y=r.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(vr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(g=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==bn?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=Go(a),a=th(a,e),a=eh(a,e),o=Go(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+g+a,E=x+p+o,P=$l(r,r.VERTEX_SHADER,T),R=$l(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,R),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(D){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(P)||"",Y=r.getShaderInfoLog(R)||"",j=H.trim(),G=k.trim(),q=Y.trim();let rt=!0,it=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,P,R);else{const mt=Ql(r,P,"vertex"),ot=Ql(r,R,"fragment");se("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+mt+`
`+ot)}else j!==""?Ot("WebGLProgram: Program Info Log:",j):(G===""||q==="")&&(it=!1);it&&(D.diagnostics={runnable:rt,programLog:j,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:p}})}r.deleteShader(P),r.deleteShader(R),v=new Ts(r,y),M=$g(r,y)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(y,Gg)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}let fw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pw(t),e.set(t,n)),n}}class pw{constructor(t){this.id=fw++,this.code=t,this.usedTimes=0}}function mw(i,t,e,n,r,s){const a=new cd,o=new _w,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,M,V,D,H){const k=D.fog,Y=H.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=t.get(v.envMap||j,G),rt=q&&q.mapping===Hs?q.image.height:null,it=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=mt!==void 0?mt.length:0;let ct=0;Y.morphAttributes.position!==void 0&&(ct=1),Y.morphAttributes.normal!==void 0&&(ct=2),Y.morphAttributes.color!==void 0&&(ct=3);let Et,Qt,ne,tt;if(it){const ce=Tn[it];Et=ce.vertexShader,Qt=ce.fragmentShader}else Et=v.vertexShader,Qt=v.fragmentShader,o.update(v),ne=o.getVertexShaderID(v),tt=o.getFragmentShaderID(v);const K=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),xt=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,Dt=!!v.map,he=!!v.matcap,Yt=!!q,te=!!v.aoMap,ie=!!v.lightMap,jt=!!v.bumpMap,Ee=!!v.normalMap,L=!!v.displacementMap,Ce=!!v.emissiveMap,ae=!!v.metalnessMap,me=!!v.roughnessMap,Rt=v.anisotropy>0,A=v.clearcoat>0,b=v.dispersion>0,B=v.iridescence>0,et=v.sheen>0,nt=v.transmission>0,Q=Rt&&!!v.anisotropyMap,yt=A&&!!v.clearcoatMap,dt=A&&!!v.clearcoatNormalMap,Ft=A&&!!v.clearcoatRoughnessMap,Nt=B&&!!v.iridescenceMap,st=B&&!!v.iridescenceThicknessMap,lt=et&&!!v.sheenColorMap,St=et&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,gt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,N=nt&&!!v.transmissionMap,ut=nt&&!!v.thicknessMap,ht=!!v.gradientMap,vt=!!v.alphaMap,at=v.alphaTest>0,Z=!!v.alphaHash,Mt=!!v.extensions;let Bt=bn;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ge={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:Et,fragmentShader:Qt,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:xt,instancingColor:xt&&H.instanceColor!==null,instancingMorph:xt&&H.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:er,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:he,envMap:Yt,envMapMode:Yt&&q.mapping,envMapCubeUVHeight:rt,aoMap:te,lightMap:ie,bumpMap:jt,normalMap:Ee,displacementMap:L,emissiveMap:Ce,normalMapObjectSpace:Ee&&v.normalMapType===$u,normalMapTangentSpace:Ee&&v.normalMapType===fc,metalnessMap:ae,roughnessMap:me,anisotropy:Rt,anisotropyMap:Q,clearcoat:A,clearcoatMap:yt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ft,dispersion:b,iridescence:B,iridescenceMap:Nt,iridescenceThicknessMap:st,sheen:et,sheenColorMap:lt,sheenRoughnessMap:St,specularMap:Tt,specularColorMap:gt,specularIntensityMap:Xt,transmission:nt,transmissionMap:N,thicknessMap:ut,gradientMap:ht,opaque:v.transparent===!1&&v.blending===Ji&&v.alphaToCoverage===!1,alphaMap:vt,alphaTest:at,alphaHash:Z,combine:v.combine,mapUv:Dt&&w(v.map.channel),aoMapUv:te&&w(v.aoMap.channel),lightMapUv:ie&&w(v.lightMap.channel),bumpMapUv:jt&&w(v.bumpMap.channel),normalMapUv:Ee&&w(v.normalMap.channel),displacementMapUv:L&&w(v.displacementMap.channel),emissiveMapUv:Ce&&w(v.emissiveMap.channel),metalnessMapUv:ae&&w(v.metalnessMap.channel),roughnessMapUv:me&&w(v.roughnessMap.channel),anisotropyMapUv:Q&&w(v.anisotropyMap.channel),clearcoatMapUv:yt&&w(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&w(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&w(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&w(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&w(v.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&w(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&w(v.sheenRoughnessMap.channel),specularMapUv:Tt&&w(v.specularMap.channel),specularColorMapUv:gt&&w(v.specularColorMap.channel),specularIntensityMapUv:Xt&&w(v.specularIntensityMap.channel),transmissionMapUv:N&&w(v.transmissionMap.channel),thicknessMapUv:ut&&w(v.thicknessMap.channel),alphaMapUv:vt&&w(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ee||Rt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Dt||vt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&Ee===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:$,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Ce&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Mt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)M.push(V),M.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(p(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=m[v.type];let V;if(M){const D=Tn[M];V=Bf.clone(D.uniforms)}else V=v.uniforms;return V}function E(v,M){let V=d.get(M);return V!==void 0?++V.usedTimes:(V=new uw(i,M,v,r),l.push(V),d.set(M,V)),V}function P(v){if(--v.usedTimes===0){const M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:P,releaseShaderCache:R,programs:l,dispose:I}}function gw(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ww(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,w,y,g,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:m,material:w,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=m,x.material=w,x.materialVariant=a(u),x.groupOrder=y,x.renderOrder=u.renderOrder,x.z=g,x.group=p),t++,x}function c(u,m,w,y,g,p){const x=o(u,m,w,y,g,p);w.transmission>0?n.push(x):w.transparent===!0?r.push(x):e.push(x)}function l(u,m,w,y,g,p){const x=o(u,m,w,y,g,p);w.transmission>0?n.unshift(x):w.transparent===!0?r.unshift(x):e.unshift(x)}function d(u,m){e.length>1&&e.sort(u||ww),n.length>1&&n.sort(m||rh),r.length>1&&r.sort(m||rh)}function f(){for(let u=t,m=i.length;u<m;u++){const w=i[u];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:d}}function bw(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new sh,i.set(n,[a])):r>=s.length?(a=new sh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function xw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yw=0;function Sw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mw(i){const t=new vw,e=xw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,s=new ye,a=new ye;function o(l){let d=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,w=0,y=0,g=0,p=0,x=0,T=0,E=0,P=0,R=0,I=0;l.sort(Sw);for(let M=0,V=l.length;M<V;M++){const D=l[M],H=D.color,k=D.intensity,Y=D.distance;let j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===tr?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=H.r*k,f+=H.g*k,u+=H.b*k;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],k);I++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=D.shadow.matrix,x++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(H).multiplyScalar(k),G.distance=Y,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[y]=G;const q=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,q.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[y]=q.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=j,E++}y++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(H).multiplyScalar(k),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=G,g++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const q=D.shadow,rt=e.get(D);rt.shadowIntensity=q.intensity,rt.shadowBias=q.bias,rt.shadowNormalBias=q.normalBias,rt.shadowRadius=q.radius,rt.shadowMapSize=q.mapSize,rt.shadowCameraNear=q.camera.near,rt.shadowCameraFar=q.camera.far,n.pointShadow[w]=rt,n.pointShadowMap[w]=j,n.pointShadowMatrix[w]=D.shadow.matrix,T++}n.point[w]=G,w++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(k),G.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==m||v.pointLength!==w||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==T||v.numSpotShadows!==E||v.numSpotMaps!==P||v.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=g,n.point.length=w,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,v.directionalLength=m,v.pointLength=w,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=T,v.numSpotShadows=E,v.numSpotMaps=P,v.numLightProbes=I,n.version=yw++)}function c(l,d){let f=0,u=0,m=0,w=0,y=0;const g=d.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const T=l[p];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const E=n.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:o,setupView:c,state:n}}function ah(i){const t=new Mw(i),e=[],n=[];function r(d){l.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ew(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ah(i),t.set(r,[o])):s>=a.length?(o=new ah(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rw=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Cw=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],oh=new ye,gr=new U,Ba=new U;function Pw(i,t,e){let n=new gc;const r=new Kt,s=new Kt,a=new Me,o=new kf,c=new Wf,l={},d=e.maxTextureSize,f={[hi]:tn,[tn]:hi,[gn]:gn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Tw,fragmentShader:Aw}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const w=new Je;w.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qe(w,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let p=this.type;this.render=function(R,I,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===kh&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vs);const M=i.getRenderTarget(),V=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(kn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==this.type;k&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(j=>j.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,j=R.length;Y<j;Y++){const G=R[Y],q=G.shadow;if(q===void 0){Ot("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const rt=q.getFrameExtents();r.multiply(rt),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/rt.x),r.x=s.x*rt.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/rt.y),r.y=s.y*rt.y,q.mapSize.y=s.y));const it=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=it,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===br){if(G.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Cn(r.x,r.y,{format:tr,type:Xn,minFilter:He,magFilter:He,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new Ar(r.x,r.y,An),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=qn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Le,q.map.depthTexture.magFilter=Le}else G.isPointLight?(q.map=new yd(r.x),q.map.depthTexture=new Uf(r.x,In)):(q.map=new Cn(r.x,r.y),q.map.depthTexture=new Ar(r.x,r.y,In)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=qn,this.type===vs?(q.map.depthTexture.compareFunction=it?pc:_c,q.map.depthTexture.minFilter=He,q.map.depthTexture.magFilter=He):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Le,q.map.depthTexture.magFilter=Le);q.camera.updateProjectionMatrix()}const mt=q.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<mt;ot++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(q.map),i.clear());const ct=q.getViewport(ot);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),H.viewport(a)}if(G.isPointLight){const ct=q.camera,Et=q.matrix,Qt=G.distance||ct.far;Qt!==ct.far&&(ct.far=Qt,ct.updateProjectionMatrix()),gr.setFromMatrixPosition(G.matrixWorld),ct.position.copy(gr),Ba.copy(ct.position),Ba.add(Rw[ot]),ct.up.copy(Cw[ot]),ct.lookAt(Ba),ct.updateMatrixWorld(),Et.makeTranslation(-gr.x,-gr.y,-gr.z),oh.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),q._frustum.setFromProjectionMatrix(oh,ct.coordinateSystem,ct.reversedDepth)}else q.updateMatrices(G);n=q.getFrustum(),E(I,v,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===br&&x(q,v),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,V,D)};function x(R,I){const v=t.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cn(r.x,r.y,{format:tr,type:Xn})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,v,u,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,v,m,y,null)}function T(R,I,v,M){let V=null;const D=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)V=D;else if(V=v.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=V.uuid,k=I.uuid;let Y=l[H];Y===void 0&&(Y={},l[H]=Y);let j=Y[k];j===void 0&&(j=V.clone(),Y[k]=j,I.addEventListener("dispose",P)),V=j}if(V.visible=I.visible,V.wireframe=I.wireframe,M===br?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:f[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const H=i.properties.get(V);H.light=v}return V}function E(R,I,v,M,V){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===br)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Y=R.material;if(Array.isArray(Y)){const j=k.groups;for(let G=0,q=j.length;G<q;G++){const rt=j[G],it=Y[rt.materialIndex];if(it&&it.visible){const mt=T(R,it,M,V);R.onBeforeShadow(i,R,I,v,k,mt,rt),i.renderBufferDirect(v,null,k,mt,R,rt),R.onAfterShadow(i,R,I,v,k,mt,rt)}}}else if(Y.visible){const j=T(R,Y,M,V);R.onBeforeShadow(i,R,I,v,k,j,null),i.renderBufferDirect(v,null,k,j,R,null),R.onAfterShadow(i,R,I,v,k,j,null)}}const H=R.children;for(let k=0,Y=H.length;k<Y;k++)E(H[k],I,v,M,V)}function P(R){R.target.removeEventListener("dispose",P);for(const v in l){const M=l[v],V=R.target.uuid;V in M&&(M[V].dispose(),delete M[V])}}}function Iw(i,t){function e(){let N=!1;const ut=new Me;let ht=null;const vt=new Me(0,0,0,0);return{setMask:function(at){ht!==at&&!N&&(i.colorMask(at,at,at,at),ht=at)},setLocked:function(at){N=at},setClear:function(at,Z,Mt,Bt,ge){ge===!0&&(at*=Bt,Z*=Bt,Mt*=Bt),ut.set(at,Z,Mt,Bt),vt.equals(ut)===!1&&(i.clearColor(at,Z,Mt,Bt),vt.copy(ut))},reset:function(){N=!1,ht=null,vt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,ht=null,vt=null,at=null;return{setReversed:function(Z){if(ut!==Z){const Mt=t.get("EXT_clip_control");Z?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),ut=Z;const Bt=at;at=null,this.setClear(Bt)}},getReversed:function(){return ut},setTest:function(Z){Z?K(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Z){ht!==Z&&!N&&(i.depthMask(Z),ht=Z)},setFunc:function(Z){if(ut&&(Z=cf[Z]),vt!==Z){switch(Z){case $a:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Z}},setLocked:function(Z){N=Z},setClear:function(Z){at!==Z&&(at=Z,ut&&(Z=1-Z),i.clearDepth(Z))},reset:function(){N=!1,ht=null,vt=null,at=null,ut=!1}}}function r(){let N=!1,ut=null,ht=null,vt=null,at=null,Z=null,Mt=null,Bt=null,ge=null;return{setTest:function(ce){N||(ce?K(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!N&&(i.stencilMask(ce),ut=ce)},setFunc:function(ce,Fn,Un){(ht!==ce||vt!==Fn||at!==Un)&&(i.stencilFunc(ce,Fn,Un),ht=ce,vt=Fn,at=Un)},setOp:function(ce,Fn,Un){(Z!==ce||Mt!==Fn||Bt!==Un)&&(i.stencilOp(ce,Fn,Un),Z=ce,Mt=Fn,Bt=Un)},setLocked:function(ce){N=ce},setClear:function(ce){ge!==ce&&(i.clearStencil(ce),ge=ce)},reset:function(){N=!1,ut=null,ht=null,vt=null,at=null,Z=null,Mt=null,Bt=null,ge=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},f={},u=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,R=null,I=new Wt(0,0,0),v=0,M=!1,V=null,D=null,H=null,k=null,Y=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(rt)[1]),G=q>=1):rt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),G=q>=2);let it=null,mt={};const ot=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Et=new Me().fromArray(ot),Qt=new Me().fromArray(ct);function ne(N,ut,ht,vt){const at=new Uint8Array(4),Z=i.createTexture();i.bindTexture(N,Z),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<ht;Mt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ut+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Z}const tt={};tt[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Zi),jt(!1),Ee(al),K(i.CULL_FACE),te(kn);function K(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function $(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function xt(N,ut){return f[N]!==ut?(i.bindFramebuffer(N,ut),f[N]=ut,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function wt(N,ut){let ht=m,vt=!1;if(N){ht=u.get(ut),ht===void 0&&(ht=[],u.set(ut,ht));const at=N.textures;if(ht.length!==at.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Mt=at.length;Z<Mt;Z++)ht[Z]=i.COLOR_ATTACHMENT0+Z;ht.length=at.length,vt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ht)}function Dt(N){return w!==N?(i.useProgram(N),w=N,!0):!1}const he={[yi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};he[Du]=i.MIN,he[Lu]=i.MAX;const Yt={[Fu]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(N,ut,ht,vt,at,Z,Mt,Bt,ge,ce){if(N===kn){y===!0&&($(i.BLEND),y=!1);return}if(y===!1&&(K(i.BLEND),y=!0),N!==Cu){if(N!==g||ce!==M){if((p!==yi||E!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,E=yi),ce)switch(N){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",N);break}else switch(N){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",N);break}x=null,T=null,P=null,R=null,I.set(0,0,0),v=0,g=N,M=ce}return}at=at||ut,Z=Z||ht,Mt=Mt||vt,(ut!==p||at!==E)&&(i.blendEquationSeparate(he[ut],he[at]),p=ut,E=at),(ht!==x||vt!==T||Z!==P||Mt!==R)&&(i.blendFuncSeparate(Yt[ht],Yt[vt],Yt[Z],Yt[Mt]),x=ht,T=vt,P=Z,R=Mt),(Bt.equals(I)===!1||ge!==v)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ge),I.copy(Bt),v=ge),g=N,M=!1}function ie(N,ut){N.side===gn?$(i.CULL_FACE):K(i.CULL_FACE);let ht=N.side===tn;ut&&(ht=!ht),jt(ht),N.blending===Ji&&N.transparent===!1?te(kn):te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const vt=N.stencilWrite;o.setTest(vt),vt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(N){V!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),V=N)}function Ee(N){N!==Au?(K(i.CULL_FACE),N!==D&&(N===al?i.cullFace(i.BACK):N===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),D=N}function L(N){N!==H&&(G&&i.lineWidth(N),H=N)}function Ce(N,ut,ht){N?(K(i.POLYGON_OFFSET_FILL),(k!==ut||Y!==ht)&&(k=ut,Y=ht,a.getReversed()&&(ut=-ut),i.polygonOffset(ut,ht))):$(i.POLYGON_OFFSET_FILL)}function ae(N){N?K(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function me(N){N===void 0&&(N=i.TEXTURE0+j-1),it!==N&&(i.activeTexture(N),it=N)}function Rt(N,ut,ht){ht===void 0&&(it===null?ht=i.TEXTURE0+j-1:ht=it);let vt=mt[ht];vt===void 0&&(vt={type:void 0,texture:void 0},mt[ht]=vt),(vt.type!==N||vt.texture!==ut)&&(it!==ht&&(i.activeTexture(ht),it=ht),i.bindTexture(N,ut||tt[N]),vt.type=N,vt.texture=ut)}function A(){const N=mt[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function et(){try{i.texSubImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function nt(){try{i.texSubImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function dt(){try{i.texStorage2D(...arguments)}catch(N){se("WebGLState:",N)}}function Ft(){try{i.texStorage3D(...arguments)}catch(N){se("WebGLState:",N)}}function Nt(){try{i.texImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function st(){try{i.texImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function lt(N){Et.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function St(N){Qt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Qt.copy(N))}function Tt(N,ut){let ht=l.get(ut);ht===void 0&&(ht=new WeakMap,l.set(ut,ht));let vt=ht.get(N);vt===void 0&&(vt=i.getUniformBlockIndex(ut,N.name),ht.set(N,vt))}function gt(N,ut){const vt=l.get(ut).get(N);c.get(ut)!==vt&&(i.uniformBlockBinding(ut,vt,N.__bindingPointIndex),c.set(ut,vt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,mt={},f={},u=new WeakMap,m=[],w=null,y=!1,g=null,p=null,x=null,T=null,E=null,P=null,R=null,I=new Wt(0,0,0),v=0,M=!1,V=null,D=null,H=null,k=null,Y=null,Et.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:$,bindFramebuffer:xt,drawBuffers:wt,useProgram:Dt,setBlending:te,setMaterial:ie,setFlipSided:jt,setCullFace:Ee,setLineWidth:L,setPolygonOffset:Ce,setScissorTest:ae,activeTexture:me,bindTexture:Rt,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Nt,texImage3D:st,updateUBOMapping:Tt,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:Ft,texSubImage2D:et,texSubImage3D:nt,compressedTexSubImage2D:Q,compressedTexSubImage3D:yt,scissor:lt,viewport:St,reset:Xt}}function Dw(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,d=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,b){return m?new OffscreenCanvas(A,b):Rs("canvas")}function y(A,b,B){let et=1;const nt=Rt(A);if((nt.width>B||nt.height>B)&&(et=B/Math.max(nt.width,nt.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(et*nt.width),yt=Math.floor(et*nt.height);f===void 0&&(f=w(Q,yt));const dt=b?w(Q,yt):f;return dt.width=Q,dt.height=yt,dt.getContext("2d").drawImage(A,0,0,Q,yt),Ot("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+yt+")."),dt}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,b,B,et,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=b;if(b===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){const yt=nt?As:ee.getTransfer(et);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=yt===le?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function E(A,b){let B;return A?b===null||b===In||b===Er?B=i.DEPTH24_STENCIL8:b===An?B=i.DEPTH32F_STENCIL8:b===Mr&&(B=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===In||b===Er?B=i.DEPTH_COMPONENT24:b===An?B=i.DEPTH_COMPONENT32F:b===Mr&&(B=i.DEPTH_COMPONENT16),B}function P(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==He?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),v(b),b.isVideoTexture&&d.delete(b)}function I(A){const b=A.target;b.removeEventListener("dispose",I),V(b)}function v(A){const b=n.get(A);if(b.__webglInit===void 0)return;const B=A.source,et=u.get(B);if(et){const nt=et[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(A),Object.keys(et).length===0&&u.delete(B)}n.remove(A)}function M(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const B=A.source,et=u.get(B);delete et[b.__cacheKey],a.memory.textures--}function V(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let nt=0;nt<b.__webglFramebuffer[et].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[et][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)i.deleteFramebuffer(b.__webglFramebuffer[et]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=A.textures;for(let et=0,nt=B.length;et<nt;et++){const Q=n.get(B[et]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(B[et])}n.remove(A)}let D=0;function H(){D=0}function k(){const A=D;return A>=r.maxTextures&&Ot("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function Y(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function j(A,b){const B=n.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const et=A.image;if(et===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(B,A,b);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function G(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){tt(B,A,b);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function q(A,b){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){tt(B,A,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function rt(A,b){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){K(B,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const it={[ro]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},mt={[Le]:i.NEAREST,[Ku]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},ot={[Zu]:i.NEVER,[rf]:i.ALWAYS,[Qu]:i.LESS,[_c]:i.LEQUAL,[tf]:i.EQUAL,[pc]:i.GEQUAL,[ef]:i.GREATER,[nf]:i.NOTEQUAL};function ct(A,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===He||b.magFilter===aa||b.magFilter===Gr||b.magFilter===ci||b.minFilter===He||b.minFilter===aa||b.minFilter===Gr||b.minFilter===ci)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,it[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,it[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,it[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==Gr&&b.minFilter!==ci||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Et(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const et=b.source;let nt=u.get(et);nt===void 0&&(nt={},u.set(et,nt));const Q=Y(b);if(Q!==A.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),nt[Q].usedTimes++;const yt=nt[A.__cacheKey];yt!==void 0&&(nt[A.__cacheKey].usedTimes--,yt.usedTimes===0&&M(b)),A.__cacheKey=Q,A.__webglTexture=nt[Q].texture}return B}function Qt(A,b,B){return Math.floor(Math.floor(A/B)/b)}function ne(A,b,B,et){const Q=A.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,B,et,b.data);else{Q.sort((st,lt)=>st.start-lt.start);let yt=0;for(let st=1;st<Q.length;st++){const lt=Q[yt],St=Q[st],Tt=lt.start+lt.count,gt=Qt(St.start,b.width,4),Xt=Qt(lt.start,b.width,4);St.start<=Tt+1&&gt===Xt&&Qt(St.start+St.count-1,b.width,4)===gt?lt.count=Math.max(lt.count,St.start+St.count-lt.start):(++yt,Q[yt]=St)}Q.length=yt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Ft=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let st=0,lt=Q.length;st<lt;st++){const St=Q[st],Tt=Math.floor(St.start/4),gt=Math.ceil(St.count/4),Xt=Tt%b.width,N=Math.floor(Tt/b.width),ut=gt,ht=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Xt,N,ut,ht,B,et,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function tt(A,b,B){let et=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=i.TEXTURE_3D);const nt=Et(A,b),Q=b.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+B);const yt=n.get(Q);if(Q.version!==yt.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);const dt=ee.getPrimaries(ee.workingColorSpace),Ft=b.colorSpace===oi?null:ee.getPrimaries(b.colorSpace),Nt=b.colorSpace===oi||dt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let st=y(b.image,!1,r.maxTextureSize);st=me(b,st);const lt=s.convert(b.format,b.colorSpace),St=s.convert(b.type);let Tt=T(b.internalFormat,lt,St,b.colorSpace,b.isVideoTexture);ct(et,b);let gt;const Xt=b.mipmaps,N=b.isVideoTexture!==!0,ut=yt.__version===void 0||nt===!0,ht=Q.dataReady,vt=P(b,st);if(b.isDepthTexture)Tt=E(b.format===Mi,b.type),ut&&(N?e.texStorage2D(i.TEXTURE_2D,1,Tt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,lt,St,null));else if(b.isDataTexture)if(Xt.length>0){N&&ut&&e.texStorage2D(i.TEXTURE_2D,vt,Tt,Xt[0].width,Xt[0].height);for(let at=0,Z=Xt.length;at<Z;at++)gt=Xt[at],N?ht&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,gt.width,gt.height,lt,St,gt.data):e.texImage2D(i.TEXTURE_2D,at,Tt,gt.width,gt.height,0,lt,St,gt.data);b.generateMipmaps=!1}else N?(ut&&e.texStorage2D(i.TEXTURE_2D,vt,Tt,st.width,st.height),ht&&ne(b,st,lt,St)):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,lt,St,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Tt,Xt[0].width,Xt[0].height,st.depth);for(let at=0,Z=Xt.length;at<Z;at++)if(gt=Xt[at],b.format!==wn)if(lt!==null)if(N){if(ht)if(b.layerUpdates.size>0){const Mt=Bl(gt.width,gt.height,b.format,b.type);for(const Bt of b.layerUpdates){const ge=gt.data.subarray(Bt*Mt/gt.data.BYTES_PER_ELEMENT,(Bt+1)*Mt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Bt,gt.width,gt.height,1,lt,ge)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,st.depth,lt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Tt,gt.width,gt.height,st.depth,0,gt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,st.depth,lt,St,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Tt,gt.width,gt.height,st.depth,0,lt,St,gt.data)}else{N&&ut&&e.texStorage2D(i.TEXTURE_2D,vt,Tt,Xt[0].width,Xt[0].height);for(let at=0,Z=Xt.length;at<Z;at++)gt=Xt[at],b.format!==wn?lt!==null?N?ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,gt.width,gt.height,lt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Tt,gt.width,gt.height,0,gt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ht&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,gt.width,gt.height,lt,St,gt.data):e.texImage2D(i.TEXTURE_2D,at,Tt,gt.width,gt.height,0,lt,St,gt.data)}else if(b.isDataArrayTexture)if(N){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Tt,st.width,st.height,st.depth),ht)if(b.layerUpdates.size>0){const at=Bl(st.width,st.height,b.format,b.type);for(const Z of b.layerUpdates){const Mt=st.data.subarray(Z*at/st.data.BYTES_PER_ELEMENT,(Z+1)*at/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,st.width,st.height,1,lt,St,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,lt,St,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,st.width,st.height,st.depth,0,lt,St,st.data);else if(b.isData3DTexture)N?(ut&&e.texStorage3D(i.TEXTURE_3D,vt,Tt,st.width,st.height,st.depth),ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,lt,St,st.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,st.width,st.height,st.depth,0,lt,St,st.data);else if(b.isFramebufferTexture){if(ut)if(N)e.texStorage2D(i.TEXTURE_2D,vt,Tt,st.width,st.height);else{let at=st.width,Z=st.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Tt,at,Z,0,lt,St,null),at>>=1,Z>>=1}}else if(Xt.length>0){if(N&&ut){const at=Rt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Tt,at.width,at.height)}for(let at=0,Z=Xt.length;at<Z;at++)gt=Xt[at],N?ht&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,lt,St,gt):e.texImage2D(i.TEXTURE_2D,at,Tt,lt,St,gt);b.generateMipmaps=!1}else if(N){if(ut){const at=Rt(st);e.texStorage2D(i.TEXTURE_2D,vt,Tt,at.width,at.height)}ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,St,st)}else e.texImage2D(i.TEXTURE_2D,0,Tt,lt,St,st);g(b)&&p(et),yt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function K(A,b,B){if(b.image.length!==6)return;const et=Et(A,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const Q=n.get(nt);if(nt.version!==Q.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const yt=ee.getPrimaries(ee.workingColorSpace),dt=b.colorSpace===oi?null:ee.getPrimaries(b.colorSpace),Ft=b.colorSpace===oi||yt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Nt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!Nt&&!st?lt[Z]=y(b.image[Z],!0,r.maxCubemapSize):lt[Z]=st?b.image[Z].image:b.image[Z],lt[Z]=me(b,lt[Z]);const St=lt[0],Tt=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Xt=T(b.internalFormat,Tt,gt,b.colorSpace),N=b.isVideoTexture!==!0,ut=Q.__version===void 0||et===!0,ht=nt.dataReady;let vt=P(b,St);ct(i.TEXTURE_CUBE_MAP,b);let at;if(Nt){N&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Xt,St.width,St.height);for(let Z=0;Z<6;Z++){at=lt[Z].mipmaps;for(let Mt=0;Mt<at.length;Mt++){const Bt=at[Mt];b.format!==wn?Tt!==null?N?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Bt.width,Bt.height,Tt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Xt,Bt.width,Bt.height,0,Bt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Bt.width,Bt.height,Tt,gt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Xt,Bt.width,Bt.height,0,Tt,gt,Bt.data)}}}else{if(at=b.mipmaps,N&&ut){at.length>0&&vt++;const Z=Rt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(st){N?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,Tt,gt,lt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,lt[Z].width,lt[Z].height,0,Tt,gt,lt[Z].data);for(let Mt=0;Mt<at.length;Mt++){const ge=at[Mt].image[Z].image;N?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,ge.width,ge.height,Tt,gt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Xt,ge.width,ge.height,0,Tt,gt,ge.data)}}else{N?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,gt,lt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Tt,gt,lt[Z]);for(let Mt=0;Mt<at.length;Mt++){const Bt=at[Mt];N?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,Tt,gt,Bt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Xt,Tt,gt,Bt.image[Z])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function $(A,b,B,et,nt,Q){const yt=s.convert(B.format,B.colorSpace),dt=s.convert(B.type),Ft=T(B.internalFormat,yt,dt,B.colorSpace),Nt=n.get(b),st=n.get(B);if(st.__renderTarget=b,!Nt.__hasExternalTextures){const lt=Math.max(1,b.width>>Q),St=Math.max(1,b.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,Ft,lt,St,b.depth,0,yt,dt,null):e.texImage2D(nt,Q,Ft,lt,St,0,yt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ce(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,nt,st.__webglTexture,0,L(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,nt,st.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const et=b.depthTexture,nt=et&&et.isDepthTexture?et.type:null,Q=E(b.stencilBuffer,nt),yt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),Q,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{const et=b.textures;for(let nt=0;nt<et.length;nt++){const Q=et[nt],yt=s.convert(Q.format,Q.colorSpace),dt=s.convert(Q.type),Ft=T(Q.internalFormat,yt,dt,Q.colorSpace);Ce(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(b),Ft,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(b),Ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(A,b,B){const et=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(b.depthTexture);if(nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),et){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b.depthTexture);const Nt=s.convert(b.depthTexture.format),st=s.convert(b.depthTexture.type);let lt;b.depthTexture.format===qn?lt=i.DEPTH_COMPONENT24:b.depthTexture.format===Mi&&(lt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,lt,b.width,b.height,0,Nt,st,null)}}else j(b.depthTexture,0);const Q=nt.__webglTexture,yt=L(b),dt=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Ft=b.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===qn)Ce(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ft,dt,Q,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,Ft,dt,Q,0);else if(b.depthTexture.format===Mi)Ce(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ft,dt,Q,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,Ft,dt,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(A){const b=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",nt)};et.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=et}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let et=0;et<6;et++)wt(b.__webglFramebuffer[et],A,et);else{const et=A.texture.mipmaps;et&&et.length>0?wt(b.__webglFramebuffer[0],A,0):wt(b.__webglFramebuffer,A,0)}else if(B){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=i.createRenderbuffer(),xt(b.__webglDepthbuffer[et],A,!1);else{const nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else{const et=A.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),xt(b.__webglDepthbuffer,A,!1);else{const nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(A,b,B){const et=n.get(A);b!==void 0&&$(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(A)}function Yt(A){const b=A.texture,B=n.get(A),et=n.get(b);A.addEventListener("dispose",I);const nt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,yt=nt.length>1;if(yt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=b.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)B.__webglFramebuffer[dt][Ft]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let dt=0,Ft=nt.length;dt<Ft;dt++){const Nt=n.get(nt[dt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ce(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const Ft=nt[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Nt=s.convert(Ft.format,Ft.colorSpace),st=s.convert(Ft.type),lt=T(Ft.internalFormat,Nt,st,Ft.colorSpace,A.isXRRenderTarget===!0),St=L(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)$(B.__webglFramebuffer[dt][Ft],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft);else $(B.__webglFramebuffer[dt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let dt=0,Ft=nt.length;dt<Ft;dt++){const Nt=nt[dt],st=n.get(Nt);let lt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,st.__webglTexture),ct(lt,Nt),$(B.__webglFramebuffer,A,Nt,i.COLOR_ATTACHMENT0+dt,lt,0),g(Nt)&&p(lt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),ct(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)$(B.__webglFramebuffer[Ft],A,b,i.COLOR_ATTACHMENT0,dt,Ft);else $(B.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}A.depthBuffer&&Dt(A)}function te(A){const b=A.textures;for(let B=0,et=b.length;B<et;B++){const nt=b[B];if(g(nt)){const Q=x(A),yt=n.get(nt).__webglTexture;e.bindTexture(Q,yt),p(Q),e.unbindTexture()}}}const ie=[],jt=[];function Ee(A){if(A.samples>0){if(Ce(A)===!1){const b=A.textures,B=A.width,et=A.height;let nt=i.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),dt=b.length>1;if(dt)for(let Nt=0;Nt<b.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const Ft=A.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Nt=0;Nt<b.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Nt]);const st=n.get(b[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,B,et,0,0,B,et,nt,i.NEAREST),c===!0&&(ie.length=0,jt.length=0,ie.push(i.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(Q),jt.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Nt=0;Nt<b.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Nt]);const st=n.get(b[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function L(A){return Math.min(r.maxSamples,A.samples)}function Ce(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(A){const b=a.render.frame;d.get(A)!==b&&(d.set(A,b),A.update())}function me(A,b){const B=A.colorSpace,et=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==er&&B!==oi&&(ee.getTransfer(B)===le?(et!==wn||nt!==sn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",B)),b}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=rt,this.rebindTextures=he,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lw(i,t){function e(n,r=oi){let s;const a=ee.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===td)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===id)return i.ALPHA;if(n===rd)return i.RGB;if(n===wn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===tr)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===xs||n===ys||n===Ss||n===Ms)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===co||n===lo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo||n===_o||n===po||n===mo||n===go)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ho||n===uo)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===_o)return s.COMPRESSED_R11_EAC;if(n===po)return s.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return s.COMPRESSED_RG11_EAC;if(n===go)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===bo||n===vo||n===xo||n===yo||n===So||n===Mo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Lo||n===Fo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Do)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Oo||n===Bo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:Fw,fragmentShader:Uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends sr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,m=null,w=null;const y=typeof XRWebGLBinding<"u",g=new Nw,p={},x=e.getContextAttributes();let T=null,E=null;const P=[],R=[],I=new Kt;let v=null;const M=new cn;M.viewport=new Me;const V=new cn;V.viewport=new Me;const D=[M,V],H=new Kf;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let K=P[tt];return K===void 0&&(K=new fa,P[tt]=K),K.getTargetRaySpace()},this.getControllerGrip=function(tt){let K=P[tt];return K===void 0&&(K=new fa,P[tt]=K),K.getGripSpace()},this.getHand=function(tt){let K=P[tt];return K===void 0&&(K=new fa,P[tt]=K),K.getHandSpace()};function j(tt){const K=R.indexOf(tt.inputSource);if(K===-1)return;const $=P[K];$!==void 0&&($.update(tt.inputSource,tt.frame,l||a),$.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let tt=0;tt<P.length;tt++){const K=R[tt];K!==null&&(R[tt]=null,P[tt].disconnect(K))}k=null,Y=null,g.reset();for(const tt in p)delete p[tt];t.setRenderTarget(T),m=null,u=null,f=null,r=null,E=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,xt=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?Mi:qn,xt=x.stencil?Er:In);const Dt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Dt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Cn(u.textureWidth,u.textureHeight,{format:wn,type:sn,depthTexture:new Ar(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const $={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,$),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Cn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(tt){for(let K=0;K<tt.removed.length;K++){const $=tt.removed[K],xt=R.indexOf($);xt>=0&&(R[xt]=null,P[xt].disconnect($))}for(let K=0;K<tt.added.length;K++){const $=tt.added[K];let xt=R.indexOf($);if(xt===-1){for(let Dt=0;Dt<P.length;Dt++)if(Dt>=R.length){R.push($),xt=Dt;break}else if(R[Dt]===null){R[Dt]=$,xt=Dt;break}if(xt===-1)break}const wt=P[xt];wt&&wt.connect($)}}const rt=new U,it=new U;function mt(tt,K,$){rt.setFromMatrixPosition(K.matrixWorld),it.setFromMatrixPosition($.matrixWorld);const xt=rt.distanceTo(it),wt=K.projectionMatrix.elements,Dt=$.projectionMatrix.elements,he=wt[14]/(wt[10]-1),Yt=wt[14]/(wt[10]+1),te=(wt[9]+1)/wt[5],ie=(wt[9]-1)/wt[5],jt=(wt[8]-1)/wt[0],Ee=(Dt[8]+1)/Dt[0],L=he*jt,Ce=he*Ee,ae=xt/(-jt+Ee),me=ae*-jt;if(K.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(me),tt.translateZ(ae),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),wt[10]===-1)tt.projectionMatrix.copy(K.projectionMatrix),tt.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Rt=he+ae,A=Yt+ae,b=L-me,B=Ce+(xt-me),et=te*Yt/A*Rt,nt=ie*Yt/A*Rt;tt.projectionMatrix.makePerspective(b,B,et,nt,Rt,A),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ot(tt,K){K===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(K.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;let K=tt.near,$=tt.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&($=g.depthFar)),H.near=V.near=M.near=K,H.far=V.far=M.far=$,(k!==H.near||Y!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,Y=H.far),H.layers.mask=tt.layers.mask|6,M.layers.mask=H.layers.mask&-5,V.layers.mask=H.layers.mask&-3;const xt=tt.parent,wt=H.cameras;ot(H,xt);for(let Dt=0;Dt<wt.length;Dt++)ot(wt[Dt],xt);wt.length===2?mt(H,M,V):H.projectionMatrix.copy(M.projectionMatrix),ct(tt,H,xt)};function ct(tt,K,$){$===null?tt.matrix.copy(K.matrixWorld):(tt.matrix.copy($.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(K.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(K.projectionMatrix),tt.projectionMatrixInverse.copy(K.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=zo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(tt){c=tt,u!==null&&(u.fixedFoveation=tt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(tt){return p[tt]};let Et=null;function Qt(tt,K){if(d=K.getViewerPose(l||a),w=K,d!==null){const $=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let xt=!1;$.length!==H.cameras.length&&(H.cameras.length=0,xt=!0);for(let Yt=0;Yt<$.length;Yt++){const te=$[Yt];let ie=null;if(m!==null)ie=m.getViewport(te);else{const Ee=f.getViewSubImage(u,te);ie=Ee.viewport,Yt===0&&(t.setRenderTargetTextures(E,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(E))}let jt=D[Yt];jt===void 0&&(jt=new cn,jt.layers.enable(Yt),jt.viewport=new Me,D[Yt]=jt),jt.matrix.fromArray(te.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(te.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ie.x,ie.y,ie.width,ie.height),Yt===0&&(H.matrix.copy(jt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),xt===!0&&H.cameras.push(jt)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const Yt=f.getDepthInformation($[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,r.renderState)}if(wt&&wt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Yt=0;Yt<$.length;Yt++){const te=$[Yt].camera;if(te){let ie=p[te];ie||(ie=new gd,p[te]=ie);const jt=f.getCameraImage(te);ie.sourceTexture=jt}}}}for(let $=0;$<P.length;$++){const xt=R[$],wt=P[$];xt!==null&&wt!==void 0&&wt.update(xt,K,l||a)}Et&&Et(tt,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),w=null}const ne=new xd;ne.setAnimationLoop(Qt),this.setAnimationLoop=function(tt){Et=tt},this.dispose=function(){}}}const vi=new Dn,Bw=new ye;function zw(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,T,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),w(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),T=x.envMap,E=x.envMapRotation;T&&(g.envMap.value=T,vi.copy(E),vi.x*=-1,vi.y*=-1,vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(vi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hw(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,T){const E=T.program;n.uniformBlockBinding(x,E)}function l(x,T){let E=r[x.id];E===void 0&&(w(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",g));const P=T.program;n.updateUBOMapping(x,P);const R=t.render.frame;s[x.id]!==R&&(u(x),s[x.id]=R)}function d(x){const T=f();x.__bindingPointIndex=T;const E=i.createBuffer(),P=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const T=r[x.id],E=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,I=E.length;R<I;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,V=v.length;M<V;M++){const D=v[M];if(m(D,R,M,P)===!0){const H=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let j=0;j<k.length;j++){const G=k[j],q=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,T,E,P){const R=x.value,I=T+"_"+E;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{const v=P[I];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return P[I]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function w(x){const T=x.uniforms;let E=0;const P=16;for(let I=0,v=T.length;I<v;I++){const M=Array.isArray(T[I])?T[I]:[T[I]];for(let V=0,D=M.length;V<D;V++){const H=M[V],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,j=k.length;Y<j;Y++){const G=k[Y],q=y(G),rt=E%P,it=rt%q.boundary,mt=rt+it;E+=it,mt!==0&&P-mt<q.storage&&(E+=P-mt),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=q.storage}}}const R=E%P;return R>0&&(E+=P-R),x.__size=E,x.__cache={},this}function y(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ot("WebGLRenderer: Unsupported uniform value type.",x),T}function g(x){const T=x.target;T.removeEventListener("dispose",g);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function Vw(){return Mn===null&&(Mn=new _d(Gw,16,16,tr,Xn),Mn.name="DFG_LUT",Mn.minFilter=He,Mn.magFilter=He,Mn.wrapS=Vn,Mn.wrapT=Vn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class kw{constructor(t={}){const{canvas:e=af(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=sn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;const y=m,g=new Set([uc,dc,hc]),p=new Set([sn,In,Mr,Er,oc,cc]),x=new Uint32Array(4),T=new Int32Array(4);let E=null,P=null;const R=[],I=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let V=!1;this._outputColorSpace=Ze;let D=0,H=0,k=null,Y=-1,j=null;const G=new Me,q=new Me;let rt=null;const it=new Wt(0);let mt=0,ot=e.width,ct=e.height,Et=1,Qt=null,ne=null;const tt=new Me(0,0,ot,ct),K=new Me(0,0,ot,ct);let $=!1;const xt=new gc;let wt=!1,Dt=!1;const he=new ye,Yt=new U,te=new Me,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Ee(){return k===null?Et:1}let L=n;function Ce(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",ge,!1),L===null){const z="webgl2";if(L=Ce(z,S),L===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw se("WebGLRenderer: "+S.message),S}let ae,me,Rt,A,b,B,et,nt,Q,yt,dt,Ft,Nt,st,lt,St,Tt,gt,Xt,N,ut,ht,vt;function at(){ae=new km(L),ae.init(),ut=new Lw(L,ae),me=new Um(L,ae,t,ut),Rt=new Iw(L,ae),me.reversedDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),A=new Xm(L),b=new gw,B=new Dw(L,ae,Rt,b,me,ut,A),et=new Vm(M),nt=new $f(L),ht=new Lm(L,nt),Q=new Wm(L,nt,A,ht),yt=new Ym(L,Q,nt,ht,A),gt=new qm(L,me,B),lt=new Nm(b),dt=new mw(M,et,ae,me,ht,lt),Ft=new zw(M,b),Nt=new bw,st=new Ew(ae),Tt=new Dm(M,et,Rt,yt,w,c),St=new Pw(M,yt,me),vt=new Hw(L,A,me,Rt),Xt=new Fm(L,ae,A),N=new jm(L,ae,A),A.programs=dt.programs,M.capabilities=me,M.extensions=ae,M.properties=b,M.renderLists=Nt,M.shadowMap=St,M.state=Rt,M.info=A}at(),y!==sn&&(v=new Jm(y,e.width,e.height,r,s));const Z=new Ow(M,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(S){S!==void 0&&(Et=S,this.setSize(ot,ct,!1))},this.getSize=function(S){return S.set(ot,ct)},this.setSize=function(S,z,J=!0){if(Z.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=S,ct=z,e.width=Math.floor(S*Et),e.height=Math.floor(z*Et),J===!0&&(e.style.width=S+"px",e.style.height=z+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(ot*Et,ct*Et).floor()},this.setDrawingBufferSize=function(S,z,J){ot=S,ct=z,Et=J,e.width=Math.floor(S*J),e.height=Math.floor(z*J),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(y===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(tt)},this.setViewport=function(S,z,J,X){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,z,J,X),Rt.viewport(G.copy(tt).multiplyScalar(Et).round())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,z,J,X){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,z,J,X),Rt.scissor(q.copy(K).multiplyScalar(Et).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){Rt.setScissorTest($=S)},this.setOpaqueSort=function(S){Qt=S},this.setTransparentSort=function(S){ne=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,J=!0){let X=0;if(S){let W=!1;if(k!==null){const _t=k.texture.format;W=g.has(_t)}if(W){const _t=k.texture.type,bt=p.has(_t),pt=Tt.getClearColor(),At=Tt.getClearAlpha(),Pt=pt.r,zt=pt.g,qt=pt.b;bt?(x[0]=Pt,x[1]=zt,x[2]=qt,x[3]=At,L.clearBufferuiv(L.COLOR,0,x)):(T[0]=Pt,T[1]=zt,T[2]=qt,T[3]=At,L.clearBufferiv(L.COLOR,0,T))}else X|=L.COLOR_BUFFER_BIT}z&&(X|=L.DEPTH_BUFFER_BIT),J&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),Tt.dispose(),Nt.dispose(),st.dispose(),b.dispose(),et.dispose(),yt.dispose(),ht.dispose(),vt.dispose(),dt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Zc),Z.removeEventListener("sessionend",Qc),fi.stop()};function Mt(S){S.preventDefault(),_l("WebGLRenderer: Context Lost."),V=!0}function Bt(){_l("WebGLRenderer: Context Restored."),V=!1;const S=A.autoReset,z=St.enabled,J=St.autoUpdate,X=St.needsUpdate,W=St.type;at(),A.autoReset=S,St.enabled=z,St.autoUpdate=J,St.needsUpdate=X,St.type=W}function ge(S){se("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ce(S){const z=S.target;z.removeEventListener("dispose",ce),Fn(z)}function Fn(S){Un(S),b.remove(S)}function Un(S){const z=b.get(S).programs;z!==void 0&&(z.forEach(function(J){dt.releaseProgram(J)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,J,X,W,_t){z===null&&(z=ie);const bt=W.isMesh&&W.matrixWorld.determinant()<0,pt=xu(S,z,J,X,W);Rt.setMaterial(X,bt);let At=J.index,Pt=1;if(X.wireframe===!0){if(At=Q.getWireframeAttribute(J),At===void 0)return;Pt=2}const zt=J.drawRange,qt=J.attributes.position;let It=zt.start*Pt,de=(zt.start+zt.count)*Pt;_t!==null&&(It=Math.max(It,_t.start*Pt),de=Math.min(de,(_t.start+_t.count)*Pt)),At!==null?(It=Math.max(It,0),de=Math.min(de,At.count)):qt!=null&&(It=Math.max(It,0),de=Math.min(de,qt.count));const Te=de-It;if(Te<0||Te===1/0)return;ht.setup(W,X,pt,J,At);let Se,ue=Xt;if(At!==null&&(Se=nt.get(At),ue=N,ue.setIndex(Se)),W.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*Ee()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(W.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),Rt.setLineWidth(ke*Ee()),W.isLineSegments?ue.setMode(L.LINES):W.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else W.isPoints?ue.setMode(L.POINTS):W.isSprite&&ue.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Cs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ue.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Ct=W._multiDrawCounts,en=W._multiDrawCount,re=At?nt.get(At).bytesPerElement:1,hn=b.get(X).currentProgram.getUniforms();for(let yn=0;yn<en;yn++)hn.setValue(L,"_gl_DrawID",yn),ue.render(ke[yn]/re,Ct[yn])}else if(W.isInstancedMesh)ue.renderInstances(It,Te,W.count);else if(J.isInstancedBufferGeometry){const ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,ke);ue.renderInstances(It,Te,Ct)}else ue.render(It,Te)};function $c(S,z,J){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Hr(S,z,J),S.side=hi,S.needsUpdate=!0,Hr(S,z,J),S.side=gn):Hr(S,z,J)}this.compile=function(S,z,J=null){J===null&&(J=S),P=st.get(J),P.init(z),I.push(P),J.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(P.pushLight(W),W.castShadow&&P.pushShadow(W))}),S!==J&&S.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(P.pushLight(W),W.castShadow&&P.pushShadow(W))}),P.setupLights();const X=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const pt=_t[bt];$c(pt,J,W),X.add(pt)}else $c(_t,J,W),X.add(_t)}),P=I.pop(),X},this.compileAsync=function(S,z,J=null){const X=this.compile(S,z,J);return new Promise(W=>{function _t(){if(X.forEach(function(bt){b.get(bt).currentProgram.isReady()&&X.delete(bt)}),X.size===0){W(S);return}setTimeout(_t,10)}ae.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let na=null;function vu(S){na&&na(S)}function Zc(){fi.stop()}function Qc(){fi.start()}const fi=new xd;fi.setAnimationLoop(vu),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){na=S,Z.setAnimationLoop(S),S===null?fi.stop():fi.start()},Z.addEventListener("sessionstart",Zc),Z.addEventListener("sessionend",Qc),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const J=Z.enabled===!0&&Z.isPresenting===!0,X=v!==null&&(k===null||J)&&v.begin(M,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,k),P=st.get(S,I.length),P.init(z),I.push(P),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xt.setFromProjectionMatrix(he,Rn,z.reversedDepth),Dt=this.localClippingEnabled,wt=lt.init(this.clippingPlanes,Dt),E=Nt.get(S,R.length),E.init(),R.push(E),Z.enabled===!0&&Z.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&ia(bt,z,-1/0,M.sortObjects)}ia(S,z,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Qt,ne),jt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,jt&&Tt.addToRenderList(E,S),this.info.render.frame++,wt===!0&&lt.beginShadows();const W=P.state.shadowsArray;if(St.render(W,S,z),wt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&v.hasRenderPass())===!1){const bt=E.opaque,pt=E.transmissive;if(P.setupLights(),z.isArrayCamera){const At=z.cameras;if(pt.length>0)for(let Pt=0,zt=At.length;Pt<zt;Pt++){const qt=At[Pt];el(bt,pt,S,qt)}jt&&Tt.render(S);for(let Pt=0,zt=At.length;Pt<zt;Pt++){const qt=At[Pt];tl(E,S,qt,qt.viewport)}}else pt.length>0&&el(bt,pt,S,z),jt&&Tt.render(S),tl(E,S,z)}k!==null&&H===0&&(B.updateMultisampleRenderTarget(k),B.updateRenderTargetMipmap(k)),X&&v.end(M),S.isScene===!0&&S.onAfterRender(M,S,z),ht.resetDefaultState(),Y=-1,j=null,I.pop(),I.length>0?(P=I[I.length-1],wt===!0&&lt.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function ia(S,z,J,X){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)P.pushLight(S),S.castShadow&&P.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||xt.intersectsSprite(S)){X&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const bt=yt.update(S),pt=S.material;pt.visible&&E.push(S,bt,pt,J,te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||xt.intersectsObject(S))){const bt=yt.update(S),pt=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),te.copy(bt.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(pt)){const At=bt.groups;for(let Pt=0,zt=At.length;Pt<zt;Pt++){const qt=At[Pt],It=pt[qt.materialIndex];It&&It.visible&&E.push(S,bt,It,J,te.z,qt)}}else pt.visible&&E.push(S,bt,pt,J,te.z,null)}}const _t=S.children;for(let bt=0,pt=_t.length;bt<pt;bt++)ia(_t[bt],z,J,X)}function tl(S,z,J,X){const{opaque:W,transmissive:_t,transparent:bt}=S;P.setupLightsView(J),wt===!0&&lt.setGlobalState(M.clippingPlanes,J),X&&Rt.viewport(G.copy(X)),W.length>0&&zr(W,z,J),_t.length>0&&zr(_t,z,J),bt.length>0&&zr(bt,z,J),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function el(S,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[X.id]===void 0){const It=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[X.id]=new Cn(1,1,{generateMipmaps:!0,type:It?Xn:sn,minFilter:ci,samples:Math.max(4,me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const _t=P.state.transmissionRenderTarget[X.id],bt=X.viewport||G;_t.setSize(bt.z*M.transmissionResolutionScale,bt.w*M.transmissionResolutionScale);const pt=M.getRenderTarget(),At=M.getActiveCubeFace(),Pt=M.getActiveMipmapLevel();M.setRenderTarget(_t),M.getClearColor(it),mt=M.getClearAlpha(),mt<1&&M.setClearColor(16777215,.5),M.clear(),jt&&Tt.render(J);const zt=M.toneMapping;M.toneMapping=bn;const qt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),P.setupLightsView(X),wt===!0&&lt.setGlobalState(M.clippingPlanes,X),zr(S,J,X),B.updateMultisampleRenderTarget(_t),B.updateRenderTargetMipmap(_t),ae.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let de=0,Te=z.length;de<Te;de++){const Se=z[de],{object:ue,geometry:ke,material:Ct,group:en}=Se;if(Ct.side===gn&&ue.layers.test(X.layers)){const re=Ct.side;Ct.side=tn,Ct.needsUpdate=!0,nl(ue,J,X,ke,Ct,en),Ct.side=re,Ct.needsUpdate=!0,It=!0}}It===!0&&(B.updateMultisampleRenderTarget(_t),B.updateRenderTargetMipmap(_t))}M.setRenderTarget(pt,At,Pt),M.setClearColor(it,mt),qt!==void 0&&(X.viewport=qt),M.toneMapping=zt}function zr(S,z,J){const X=z.isScene===!0?z.overrideMaterial:null;for(let W=0,_t=S.length;W<_t;W++){const bt=S[W],{object:pt,geometry:At,group:Pt}=bt;let zt=bt.material;zt.allowOverride===!0&&X!==null&&(zt=X),pt.layers.test(J.layers)&&nl(pt,z,J,At,zt,Pt)}}function nl(S,z,J,X,W,_t){S.onBeforeRender(M,z,J,X,W,_t),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(M,z,J,X,S,_t),W.transparent===!0&&W.side===gn&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,M.renderBufferDirect(J,z,X,W,S,_t),W.side=hi,W.needsUpdate=!0,M.renderBufferDirect(J,z,X,W,S,_t),W.side=gn):M.renderBufferDirect(J,z,X,W,S,_t),S.onAfterRender(M,z,J,X,W,_t)}function Hr(S,z,J){z.isScene!==!0&&(z=ie);const X=b.get(S),W=P.state.lights,_t=P.state.shadowsArray,bt=W.state.version,pt=dt.getParameters(S,W.state,_t,z,J),At=dt.getProgramCacheKey(pt);let Pt=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=et.get(S.envMap||X.environment,zt),X.envMapRotation=X.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",ce),Pt=new Map,X.programs=Pt);let qt=Pt.get(At);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===bt)return rl(S,pt),qt}else pt.uniforms=dt.getUniforms(S),S.onBeforeCompile(pt,M),qt=dt.acquireProgram(pt,At),Pt.set(At,qt),X.uniforms=pt.uniforms;const It=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=lt.uniform),rl(S,pt),X.needsLights=Su(S),X.lightsStateVersion=bt,X.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function il(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function rl(S,z){const J=b.get(S);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function xu(S,z,J,X,W){z.isScene!==!0&&(z=ie),B.resetTextureUnits();const _t=z.fog,bt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,pt=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:er,At=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Pt=et.get(X.envMap||bt,At),zt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,Te=!!J.morphAttributes.color;let Se=bn;X.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Se=M.toneMapping);const ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ke=ue!==void 0?ue.length:0,Ct=b.get(X),en=P.state.lights;if(wt===!0&&(Dt===!0||S!==j)){const Ne=S===j&&X.id===Y;lt.setState(X,S,Ne)}let re=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==en.state.version||Ct.outputColorSpace!==pt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Pt||X.fog===!0&&Ct.fog!==_t||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==zt||Ct.vertexTangents!==qt||Ct.morphTargets!==It||Ct.morphNormals!==de||Ct.morphColors!==Te||Ct.toneMapping!==Se||Ct.morphTargetsCount!==ke)&&(re=!0):(re=!0,Ct.__version=X.version);let hn=Ct.currentProgram;re===!0&&(hn=Hr(X,z,W));let yn=!1,_i=!1,Ii=!1;const pe=hn.getUniforms(),Ge=Ct.uniforms;if(Rt.useProgram(hn.program)&&(yn=!0,_i=!0,Ii=!0),X.id!==Y&&(Y=X.id,_i=!0),yn||j!==S){Rt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",S.projectionMatrix),pe.setValue(L,"viewMatrix",S.matrixWorldInverse);const Qn=pe.map.cameraPosition;Qn!==void 0&&Qn.setValue(L,Yt.setFromMatrixPosition(S.matrixWorld)),me.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,_i=!0,Ii=!0)}if(Ct.needsLights&&(en.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,B),en.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",en.state.spotShadowMap,B),en.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",en.state.pointShadowMap,B)),W.isSkinnedMesh){pe.setOptional(L,W,"bindMatrix"),pe.setOptional(L,W,"bindMatrixInverse");const Ne=W.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),pe.setValue(L,"boneTexture",Ne.boneTexture,B))}W.isBatchedMesh&&(pe.setOptional(L,W,"batchingTexture"),pe.setValue(L,"batchingTexture",W._matricesTexture,B),pe.setOptional(L,W,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",W._indirectTexture,B),pe.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",W._colorsTexture,B));const Zn=J.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&gt.update(W,J,hn),(_i||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,pe.setValue(L,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Ge.envMapIntensity.value=z.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Vw()),_i&&(pe.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&yu(Ge,Ii),_t&&X.fog===!0&&Ft.refreshFogUniforms(Ge,_t),Ft.refreshMaterialUniforms(Ge,X,Et,ct,P.state.transmissionRenderTarget[S.id]),Ts.upload(L,il(Ct),Ge,B)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ts.upload(L,il(Ct),Ge,B),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(L,"center",W.center),pe.setValue(L,"modelViewMatrix",W.modelViewMatrix),pe.setValue(L,"normalMatrix",W.normalMatrix),pe.setValue(L,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ne=X.uniformsGroups;for(let Qn=0,Di=Ne.length;Qn<Di;Qn++){const sl=Ne[Qn];vt.update(sl,hn),vt.bind(sl,hn)}}return hn}function yu(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Su(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,z,J){const X=b.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=z,b.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const J=b.get(S);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const Mu=L.createFramebuffer();this.setRenderTarget=function(S,z=0,J=0){k=S,D=z,H=J;let X=null,W=!1,_t=!1;if(S){const pt=b.get(S);if(pt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(L.FRAMEBUFFER,pt.__webglFramebuffer),G.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest,Rt.viewport(G),Rt.scissor(q),Rt.setScissorTest(rt),Y=-1;return}else if(pt.__webglFramebuffer===void 0)B.setupRenderTarget(S);else if(pt.__hasExternalTextures)B.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const zt=S.depthTexture;if(pt.__boundDepthTexture!==zt){if(zt!==null&&b.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(S)}}const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const Pt=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[z])?X=Pt[z][J]:X=Pt[z],W=!0):S.samples>0&&B.useMultisampledRTT(S)===!1?X=b.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?X=Pt[J]:X=Pt,G.copy(S.viewport),q.copy(S.scissor),rt=S.scissorTest}else G.copy(tt).multiplyScalar(Et).floor(),q.copy(K).multiplyScalar(Et).floor(),rt=$;if(J!==0&&(X=Mu),Rt.bindFramebuffer(L.FRAMEBUFFER,X)&&Rt.drawBuffers(S,X),Rt.viewport(G),Rt.scissor(q),Rt.setScissorTest(rt),W){const pt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,pt.__webglTexture,J)}else if(_t){const pt=z;for(let At=0;At<S.textures.length;At++){const Pt=b.get(S.textures[At]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+At,Pt.__webglTexture,J,pt)}}else if(S!==null&&J!==0){const pt=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,J)}Y=-1},this.readRenderTargetPixels=function(S,z,J,X,W,_t,bt,pt=0){if(!(S&&S.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){Rt.bindFramebuffer(L.FRAMEBUFFER,At);try{const Pt=S.textures[pt],zt=Pt.format,qt=Pt.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!me.textureFormatReadable(zt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(qt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-X&&J>=0&&J<=S.height-W&&L.readPixels(z,J,X,W,ut.convert(zt),ut.convert(qt),_t)}finally{const Pt=k!==null?b.get(k).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,z,J,X,W,_t,bt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At)if(z>=0&&z<=S.width-X&&J>=0&&J<=S.height-W){Rt.bindFramebuffer(L.FRAMEBUFFER,At);const Pt=S.textures[pt],zt=Pt.format,qt=Pt.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!me.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(z,J,X,W,ut.convert(zt),ut.convert(qt),0);const de=k!==null?b.get(k).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,de);const Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await of(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(It),L.deleteSync(Te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,J=0){const X=Math.pow(2,-J),W=Math.floor(S.image.width*X),_t=Math.floor(S.image.height*X),bt=z!==null?z.x:0,pt=z!==null?z.y:0;B.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,bt,pt,W,_t),Rt.unbindTexture()};const Eu=L.createFramebuffer(),Tu=L.createFramebuffer();this.copyTextureToTexture=function(S,z,J=null,X=null,W=0,_t=0){let bt,pt,At,Pt,zt,qt,It,de,Te;const Se=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(J!==null)bt=J.max.x-J.min.x,pt=J.max.y-J.min.y,At=J.isBox3?J.max.z-J.min.z:1,Pt=J.min.x,zt=J.min.y,qt=J.isBox3?J.min.z:0;else{const Ge=Math.pow(2,-W);bt=Math.floor(Se.width*Ge),pt=Math.floor(Se.height*Ge),S.isDataArrayTexture?At=Se.depth:S.isData3DTexture?At=Math.floor(Se.depth*Ge):At=1,Pt=0,zt=0,qt=0}X!==null?(It=X.x,de=X.y,Te=X.z):(It=0,de=0,Te=0);const ue=ut.convert(z.format),ke=ut.convert(z.type);let Ct;z.isData3DTexture?(B.setTexture3D(z,0),Ct=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Ct=L.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const en=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),_i=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Ii=S.isDataArrayTexture||S.isData3DTexture,pe=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const Ge=b.get(S),Zn=b.get(z),Ne=b.get(Ge.__renderTarget),Qn=b.get(Zn.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Di=0;Di<At;Di++)Ii&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(S).__webglTexture,W,qt+Di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(z).__webglTexture,_t,Te+Di)),L.blitFramebuffer(Pt,zt,bt,pt,It,de,bt,pt,L.DEPTH_BUFFER_BIT,L.NEAREST);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||b.has(S)){const Ge=b.get(S),Zn=b.get(z);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,Eu),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tu);for(let Ne=0;Ne<At;Ne++)Ii?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,W,qt+Ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,W),pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,_t,Te+Ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,_t),W!==0?L.blitFramebuffer(Pt,zt,bt,pt,It,de,bt,pt,L.COLOR_BUFFER_BIT,L.NEAREST):pe?L.copyTexSubImage3D(Ct,_t,It,de,Te+Ne,Pt,zt,bt,pt):L.copyTexSubImage2D(Ct,_t,It,de,Pt,zt,bt,pt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ct,_t,It,de,Te,bt,pt,At,ue,ke,Se.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,_t,It,de,Te,bt,pt,At,ue,Se.data):L.texSubImage3D(Ct,_t,It,de,Te,bt,pt,At,ue,ke,Se):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,It,de,bt,pt,ue,ke,Se.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,It,de,Se.width,Se.height,ue,Se.data):L.texSubImage2D(L.TEXTURE_2D,_t,It,de,bt,pt,ue,ke,Se);L.pixelStorei(L.UNPACK_ROW_LENGTH,en),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_i),_t===0&&z.generateMipmaps&&L.generateMipmap(Ct),Rt.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&B.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B.setTextureCube(S,0):S.isData3DTexture?B.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B.setTexture2DArray(S,0):B.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){D=0,H=0,k=null,Rt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const ch=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Ww={4:4,6:6,8:8,12:12,20:20},jw={4:1,6:2,8:1,12:3,20:1},Xw={4:.72,6:.68,8:.89,12:.7,20:.85};function qw(i){const t=new Wt(i),e={h:0,s:0,l:0};t.getHSL(e);const n=new Wt().setHSL(e.h,Math.min(1,e.s*1.3),Math.min(.68,e.l+.14)),r=new Wt().setHSL(e.h,Math.min(1,e.s*1.36),Math.min(.58,e.l+.06)),s=new Wt().setHSL(e.h,Math.min(1,e.s*1.2),Math.max(.24,e.l-.16));return{hi:`#${n.getHexString()}`,mid:`#${r.getHexString()}`,lo:`#${s.getHexString()}`}}const Yw={x:.5,y:.3},Kw={x:.7,y:.74},Jw={x:.3,y:.74},lh={x:.5,y:.41},Vo={x:.5,y:.94},ko={x:.15,y:.26},Wo={x:.85,y:.26},hh={x:(Vo.x+ko.x+Wo.x)/3,y:(Vo.y+ko.y+Wo.y)/3},dh={x:hh.x,y:hh.y},$w=(()=>{const i=new Uint8Array([48,128,204,255]),t=new _d(i,4,1,lc);return t.needsUpdate=!0,t.minFilter=Le,t.magFilter=Le,t.generateMipmaps=!1,t})(),uh=new Map,fh=new Map,jo=new U(0,1,0),Zw=new U(1,0,0),_h=new Ri,Qw=new U,t0=new Set([6,8,12,20]),ph=new Map;function e0(i){const t=i.length,e=[];for(let o=0;o<t;o++)for(let c=o+1;c<t;c++)e.push({i:o,j:c,dot:i[o].dot(i[c])});e.sort((o,c)=>o.dot!==c.dot?o.dot-c.dot:o.i!==c.i?o.i-c.i:o.j-c.j);const n=new Array(t).fill(!1),r=[];for(const o of e)n[o.i]||n[o.j]||(n[o.i]=!0,n[o.j]=!0,r.push({a:o.i,b:o.j}));r.sort((o,c)=>{const l=Math.min(o.a,o.b),d=Math.min(c.a,c.b);if(l!==d)return l-d;const f=Math.max(o.a,o.b),u=Math.max(c.a,c.b);return f-u});const s=new Array(t).fill(1);let a=1;for(const o of r)s[o.a]=a,s[o.b]=t+1-a,a++;return s}function n0(i){let t=ph.get(i);return t||(t=e0(Rd(i).faceNormals),ph.set(i,t)),t}function Ad(i,t){return t0.has(i)?n0(i)[t]??1:t+1}function i0(i,t,e,n){const r=i.measureText(t),s=r.actualBoundingBoxLeft??r.width*.5,a=r.actualBoundingBoxRight??r.width*.5,o=r.actualBoundingBoxAscent??0,c=r.actualBoundingBoxDescent??0,l=e+(s-a)*.5,d=n+(o-c)*.5;return i.fillText(t,l,d),{drawX:l,drawY:d,left:s,right:a,ascent:o,descent:c}}function r0(i,t,e){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=qw(t);s.fillStyle=a.mid,s.fillRect(0,0,256,256);const o=e===20?i>=10?46:56:e===8?i>=10?66:86:e===12?i>=10?118:161:e===6?i>=10?104:161:i>=10?90:140;s.font=`bold ${o}px Arial, sans-serif`,s.textAlign="left",s.textBaseline="alphabetic";const c=e===20?256*lh.x:e===8?256*dh.x:256/2,l=e===20?256*lh.y:e===8?256*dh.y:256/2;s.fillStyle="#0a0a0a";const d=String(i),f=i0(s,d,c,l);if(e>=9&&(i===6||i===9)){const w=(e===20?6:10)*.9,y=e===20?1:2,g=e===20?1:2,p=f.drawX+f.right,x=f.drawY+f.descent,T=Math.min(256-w-6,p+y),E=Math.min(256-w-6,x+g);s.fillStyle="#0a0a0a",s.beginPath(),s.arc(T,E,w,0,Math.PI*2),s.fill()}const u=new Ff(r);return u.colorSpace=Ze,u.generateMipmaps=e!==20,u.minFilter=e===20?He:ci,u.magFilter=He,u.anisotropy=1,u}function s0(i,t,e){const n=`${e}|${t}|${i}`;let r=fh.get(n);return r||(r=r0(i,t,e),fh.set(n,r)),r}function a0(i,t,e){const n=e*3;for(let r=0;r<t;r++)i.addGroup(r*n,n,r)}function mh(i,t,e,n,r,s){if(e!==1||!i.attributes.uv)return;const a=i.attributes.uv;for(let o=0;o<t;o++){const c=o*3;a.setXY(c,n.x,n.y),a.setXY(c+1,r.x,r.y),a.setXY(c+2,s.x,s.y)}a.needsUpdate=!0}function o0(i,t,e){if(!i.attributes.uv||e<1)return;const n=i.attributes.position,r=i.attributes.uv,s=e*3,a=new U,o=new U,c=new U,l=new U,d=new U,f=new U,u=new U;for(let m=0;m<t;m++){const w=m*s;a.fromBufferAttribute(n,w),o.fromBufferAttribute(n,w+1),c.fromBufferAttribute(n,w+2),l.crossVectors(o.clone().sub(a),c.clone().sub(a)).normalize();const y=Math.abs(l.dot(jo))>.92?Zw:jo;d.crossVectors(y,l).normalize(),f.crossVectors(l,d).normalize();let g=1/0,p=-1/0,x=1/0,T=-1/0;for(let R=0;R<s;R++){u.fromBufferAttribute(n,w+R);const I=u.dot(d),v=u.dot(f);I<g&&(g=I),I>p&&(p=I),v<x&&(x=v),v>T&&(T=v)}const E=Math.max(1e-6,p-g),P=Math.max(1e-6,T-x);for(let R=0;R<s;R++){u.fromBufferAttribute(n,w+R);const I=u.dot(d),v=u.dot(f),M=(I-g)/E,V=(v-x)/P;r.setXY(w+R,M,V)}}r.needsUpdate=!0}function c0(i,t,e){const n=i.attributes.position,r=e*3,s=[];for(let a=0;a<t;a++){const o=new U;for(let c=0;c<e;c++){const l=a*r+c*3,d=new U().fromBufferAttribute(n,l),f=new U().fromBufferAttribute(n,l+1),u=new U().fromBufferAttribute(n,l+2);o.add(new U().crossVectors(f.clone().sub(d),u.clone().sub(d)).normalize())}s.push(o.normalize())}return s}function Rd(i){const t=uh.get(i);if(t)return t;const e=Ww[i],n=jw[i],r=Xw[i];let s;i===4?s=new yc(r):i===6?s=new ar(r*1.72,r*1.72,r*1.72):i===8?s=new xc(r*1.08):i===12?s=new bc(r*1.06):s=new vc(r*1.08,0);const a=new Float32Array(s.attributes.position.array),o=s.index?s.toNonIndexed():s.clone();s.dispose(),o.groups.length===0&&a0(o,e,n),i===12&&o0(o,e,n),i===8&&mh(o,e,n,Vo,ko,Wo),i===20&&mh(o,e,n,Yw,Kw,Jw),o.computeVertexNormals();const c=new Nf(o),l=c0(o,e,n),d={geometry:o,edgesGeometry:c,faceNormals:l,physPositions:new Float32Array(o.attributes.position.array),physHullPositions:a,physRadius:r,numFaces:e};return uh.set(i,d),d}function l0(i,t,e){const n=e??ch[t%ch.length],r=Rd(i),{numFaces:s}=r,a=Array.from({length:s},(l,d)=>new Vf({map:s0(Ad(i,d),n,i),color:16777215,gradientMap:$w,emissive:new Wt(n),emissiveIntensity:.08})),o=new Qe(r.geometry,a);o.castShadow=!0,o.receiveShadow=!0;const c=new Lf(r.edgesGeometry,new pd({color:328965,transparent:!0,opacity:.92,depthWrite:!1}));return c.renderOrder=2,o.add(c),{mesh:o,faceNormals:r.faceNormals,physPositions:r.physPositions,physHullPositions:r.physHullPositions,sides:i,physRadius:r.physRadius}}function h0(i){(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>e.dispose()),i.children.forEach(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>r.dispose())})}function d0(i,t){_h.set(t.x,t.y,t.z,t.w);let e=-1/0,n=0;for(let r=0;r<i.length;r++){const s=Qw.copy(i[r]).applyQuaternion(_h).dot(jo);s>e&&(e=s,n=r)}return{index:n,alignment:e}}const gh=["#FF7D2D","#FAC846","#A0C382","#5F9B8C"],u0=[6,8,12,20],Ur={trayScale:{minDice:1,maxDice:24,minScale:.7,maxScale:1,baseHalfSize:6.5},flash:{relandDurationMs:2e3},simulation:{maxSteps:500,minStableFrames:24,minRollSteps:40,linearStopSpeed:.08,angularStopSpeed:.18,verticalStopSpeed:.07,settleHeight:1.25,faceLandAlignmentMin:.9,surfaceLandHeightFactor:1.14,surfaceLandHeightMin:.78},reland:{maxAttempts:8,badLanding:{verticalLift:0,upwardImpulseBase:28,upwardImpulseJitterScale:0,lateralImpulse:0,torqueImpulse:14,torqueImpulseJitterScale:0,tiltMinDeg:10,tiltMaxDeg:22},userReroll:{verticalLift:0,upwardImpulseBase:40,upwardImpulseJitterScale:.25,lateralImpulse:20,torqueImpulse:20.8,torqueImpulseJitterScale:.25,tiltMinDeg:15,tiltMaxDeg:30}},physics:{dt:1/60,dice:{linearDamping:0,angularDamping:0,friction:.005,restitution:.35,density:2.5},world:{gravityY:-15,wallThickness:.5,wallHalfHeight:1e3,wallRestitution:.7,wallFriction:0,floorRestitution:.5,floorFriction:.5,wallSegments:64},launch:{dropHeightBaseMin:2,dropHeightBaseMax:4,dropHeightRandomMin:.5,dropHeightRandomMax:.5,boundaryInset:1.35,impulseOffset:.5,torqueStrength:20,centerImpulseStrength:4,upwardImpulseBase:8,upwardImpulseJitter:.35,upwardVelocityBase:4.5,upwardVelocityJitter:.05}}},Ke=Ur.trayScale,f0=Ur.flash,ln=Ur.simulation,Ec=Ur.reland,_0=Ec.badLanding,Cd=Ec.userReroll,oe=Ur.physics,p0=ln.linearStopSpeed*ln.linearStopSpeed,m0=ln.angularStopSpeed*ln.angularStopSpeed;function g0(i){const e=(Math.min(Ke.maxDice,Math.max(Ke.minDice,i))-Ke.minDice)/(Ke.maxDice-Ke.minDice);return Ke.minScale+(Ke.maxScale-Ke.minScale)*e}function Pd(i){return Ke.baseHalfSize*g0(i)}const w0="/assets/rapier_wasm3d_bg-bb0TTxsO.wasm",b0=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(r,i)}else{const n=await fetch(t),r=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const s=await n.arrayBuffer();e=await WebAssembly.instantiate(s,i)}}return e.instance.exports};let h;function v0(i){h=i}const $t=new Array(128).fill(void 0);$t.push(void 0,null,!0,!1);function Jt(i){return $t[i]}let xr=$t.length;function _e(i){xr===$t.length&&$t.push($t.length+1);const t=xr;return xr=$t[t],$t[t]=i,t}function js(i,t){try{return i.apply(this,t)}catch(e){h.__wbindgen_export_0(_e(e))}}const x0=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Id=new x0("utf-8",{ignoreBOM:!0,fatal:!0});Id.decode();let ms=null;function y0(){return(ms===null||ms.byteLength===0)&&(ms=new Uint8Array(h.memory.buffer)),ms}function Dd(i,t){return i=i>>>0,Id.decode(y0().subarray(i,i+t))}function Ut(i){return i==null}let qi=null;function ze(){return(qi===null||qi.buffer.detached===!0||qi.buffer.detached===void 0&&qi.buffer!==h.memory.buffer)&&(qi=new DataView(h.memory.buffer)),qi}function S0(i){i<132||($t[i]=xr,xr=i)}function Rr(i){const t=Jt(i);return S0(i),t}function C(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}let fe=128;function be(i){if(fe==1)throw new Error("out of js stack");return $t[--fe]=i,fe}let gs=null;function M0(){return(gs===null||gs.byteLength===0)&&(gs=new Int32Array(h.memory.buffer)),gs}function E0(i,t){return i=i>>>0,M0().subarray(i/4,i/4+t)}let ws=null;function Ld(){return(ws===null||ws.byteLength===0)&&(ws=new Float32Array(h.memory.buffer)),ws}function wh(i,t){return i=i>>>0,Ld().subarray(i/4,i/4+t)}let bs=null;function Fd(){return(bs===null||bs.byteLength===0)&&(bs=new Uint32Array(h.memory.buffer)),bs}function T0(i,t){return i=i>>>0,Fd().subarray(i/4,i/4+t)}let Ye=0;function wr(i,t){const e=t(i.length*4,4)>>>0;return Fd().set(i,e/4),Ye=i.length,e}function ai(i,t){const e=t(i.length*4,4)>>>0;return Ld().set(i,e/4),Ye=i.length,e}const Xs=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),mn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Be=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),za=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawbroadphase_free(i>>>0,1));class Yn{static __wrap(t){t=t>>>0;const e=Object.create(Yn.prototype);return e.__wbg_ptr=t,za.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,za.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawbroadphase_free(t,0)}constructor(){const t=h.rawbroadphase_new();return this.__wbg_ptr=t>>>0,za.register(this,this.__wbg_ptr,this),this}castRay(t,e,n,r,s,a,o,c,l,d,f,u){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,F);const m=h.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,Ut(l)?4294967297:l>>>0,!Ut(d),Ut(d)?0:d,!Ut(f),Ut(f)?0:f,be(u));return m===0?void 0:Pc.__wrap(m)}finally{$t[fe++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,d,f,u){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,F);const m=h.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,c,Ut(l)?4294967297:l>>>0,!Ut(d),Ut(d)?0:d,!Ut(f),Ut(f)?0:f,be(u));return m===0?void 0:Ks.__wrap(m)}finally{$t[fe++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,c,l,d,f,u,m){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,F),h.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o,be(c),l,Ut(d)?4294967297:d>>>0,!Ut(f),Ut(f)?0:f,!Ut(u),Ut(u)?0:u,be(m))}finally{$t[fe++]=void 0,$t[fe++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,c,l,d,f){try{const w=h.__wbindgen_add_to_stack_pointer(-16);C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,kt),C(a,Lt),h.rawbroadphase_intersectionWithShape(w,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,Ut(c)?4294967297:c>>>0,!Ut(l),Ut(l)?0:l,!Ut(d),Ut(d)?0:d,be(f));var u=ze().getInt32(w+0,!0),m=ze().getFloat64(w+8,!0);return u===0?void 0:m}finally{h.__wbindgen_add_to_stack_pointer(16),$t[fe++]=void 0}}projectPoint(t,e,n,r,s,a,o,c,l,d){try{C(t,Ie),C(e,we),C(n,xe),C(r,F);const f=h.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,Ut(o)?4294967297:o>>>0,!Ut(c),Ut(c)?0:c,!Ut(l),Ut(l)?0:l,be(d));return f===0?void 0:Ls.__wrap(f)}finally{$t[fe++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){try{C(t,Ie),C(e,we),C(n,xe),C(r,F);const d=h.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,Ut(a)?4294967297:a>>>0,!Ut(o),Ut(o)?0:o,!Ut(c),Ut(c)?0:c,be(l));return d===0?void 0:Ls.__wrap(d)}finally{$t[fe++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,d){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),h.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,be(s),a,Ut(o)?4294967297:o>>>0,!Ut(c),Ut(c)?0:c,!Ut(l),Ut(l)?0:l,be(d))}finally{$t[fe++]=void 0,$t[fe++]=void 0}}castShape(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,kt),C(a,F),C(o,Lt);const g=h.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,d,f,Ut(u)?4294967297:u>>>0,!Ut(m),Ut(m)?0:m,!Ut(w),Ut(w)?0:w,be(y));return g===0?void 0:qs.__wrap(g)}finally{$t[fe++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,c,l,d,f,u){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,kt),C(a,Lt),h.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,be(o),c,Ut(l)?4294967297:l>>>0,!Ut(d),Ut(d)?0:d,!Ut(f),Ut(f)?0:f,be(u))}finally{$t[fe++]=void 0,$t[fe++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){try{C(t,Ie),C(e,we),C(n,xe),C(r,F),C(s,F),h.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,be(a))}finally{$t[fe++]=void 0}}}const bh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawccdsolver_free(i>>>0,1));class Xo{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,bh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawccdsolver_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,bh.register(this,this.__wbg_ptr,this),this}}const vh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcharactercollision_free(i>>>0,1));class Ud{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,vh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcharactercollision_free(t,0)}constructor(){const t=h.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,vh.register(this,this.__wbg_ptr,this),this}handle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}translationDeltaRemaining(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}toi(){return h.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=h.rawcharactercollision_worldWitness1(this.__wbg_ptr);return F.__wrap(t)}worldWitness2(){const t=h.rawcharactercollision_worldWitness2(this.__wbg_ptr);return F.__wrap(t)}worldNormal1(){const t=h.rawcharactercollision_worldNormal1(this.__wbg_ptr);return F.__wrap(t)}worldNormal2(){const t=h.rawcharactercollision_worldNormal2(this.__wbg_ptr);return F.__wrap(t)}}const Ha=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcolliderset_free(i>>>0,1));class xe{static __wrap(t){t=t>>>0;const e=Object.create(xe.prototype);return e.__wbg_ptr=t,Ha.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ha.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcolliderset_free(t,0)}coTranslation(t){const e=h.rawcolliderset_coTranslation(this.__wbg_ptr,t);return F.__wrap(e)}coRotation(t){const e=h.rawcolliderset_coRotation(this.__wbg_ptr,t);return kt.__wrap(e)}coTranslationWrtParent(t){const e=h.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coRotationWrtParent(t){const e=h.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t);return e===0?void 0:kt.__wrap(e)}coSetTranslation(t,e,n,r){h.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){h.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){h.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){h.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return h.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return h.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=h.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHalfExtents(t){const e=h.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetHalfExtents(t,e){C(e,F),h.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){const e=h.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRadius(t,e){h.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){const e=h.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetHalfHeight(t,e){h.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){const e=h.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRoundRadius(t,e){h.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVoxelData(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVoxelData(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=E0(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){const e=h.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coSetVoxel(t,e,n,r,s){h.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,n,r,s)}coPropagateVoxelChange(t,e,n,r,s,a,o,c){h.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,n,r,s,a,o,c)}coCombineVoxelStates(t,e,n,r,s){h.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,n,r,s)}coVertices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=wh(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=T0(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){const e=h.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightFieldFlags(t){const e=h.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldHeights(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getInt32(r+4,!0);let s;return e!==0&&(s=wh(e,n).slice(),h.__wbindgen_export_1(e,n*4,4)),s}finally{h.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=h.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}coHeightfieldNRows(t){const e=h.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldNCols(t){const e=h.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===4294967297?void 0:e}coParent(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){h.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return h.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){h.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return h.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return h.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return h.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return h.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return h.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return h.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return h.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return h.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return h.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return h.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return h.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return h.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return C(e,F),h.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,c,l){C(e,F),C(n,Lt),C(r,F),C(s,kt),C(a,F);const d=h.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,c,l);return d===0?void 0:$s.__wrap(d)}coCastCollider(t,e,n,r,s,a,o){C(e,F),C(r,F);const c=h.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return c===0?void 0:qs.__wrap(c)}coIntersectsShape(t,e,n,r){return C(e,Lt),C(n,F),C(r,kt),h.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){C(e,Lt),C(n,F),C(r,kt);const a=h.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:Cr.__wrap(a)}coContactCollider(t,e,n){const r=h.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:Cr.__wrap(r)}coProjectPoint(t,e,n){C(e,F);const r=h.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Ys.__wrap(r)}coIntersectsRay(t,e,n,r){return C(e,F),C(n,F),h.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return C(e,F),C(n,F),h.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){C(e,F),C(n,F);const a=h.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:Js.__wrap(a)}coSetSensor(t,e){h.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){h.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){h.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return h.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){h.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return h.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){h.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){h.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){h.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){h.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){h.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){h.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){C(e,Lt),h.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){h.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){h.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){h.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){C(n,F),C(r,F),C(s,kt),h.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=h.rawcolliderset_new();return this.__wbg_ptr=t>>>0,Ha.register(this,this.__wbg_ptr,this),this}len(){return h.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y,g,p,x,T,E,P,R,I,v,M){try{const H=h.__wbindgen_add_to_stack_pointer(-16);C(e,Lt),C(n,F),C(r,kt),C(o,F),C(c,F),C(l,kt),C(M,we),h.rawcolliderset_createCollider(H,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,d,f,u,m,w,y,g,p,x,T,E,P,R,I,v,M.__wbg_ptr);var V=ze().getInt32(H+0,!0),D=ze().getFloat64(H+8,!0);return V===0?void 0:D}finally{h.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){C(e,Jn),C(n,we),h.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return h.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{h.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}}const xh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcollidershapecasthit_free(i>>>0,1));class qs{static __wrap(t){t=t>>>0;const e=Object.create(qs.prototype);return e.__wbg_ptr=t,xh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(t)}}const yh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactforceevent_free(i>>>0,1));class Tc{static __wrap(t){t=t>>>0;const e=Object.create(Tc.prototype);return e.__wbg_ptr=t,yh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactforceevent_free(t,0)}collider1(){return h.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return h.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}total_force_magnitude(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const t=h.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return F.__wrap(t)}max_force_magnitude(){return h.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const Sh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactmanifold_free(i>>>0,1));class Ac{static __wrap(t){t=t>>>0;const e=Object.create(Ac.prototype);return e.__wbg_ptr=t,Sh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactmanifold_free(t,0)}normal(){const t=h.rawcontactmanifold_normal(this.__wbg_ptr);return F.__wrap(t)}local_n1(){const t=h.rawcontactmanifold_local_n1(this.__wbg_ptr);return F.__wrap(t)}local_n2(){const t=h.rawcontactmanifold_local_n2(this.__wbg_ptr);return F.__wrap(t)}subshape1(){return h.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return h.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return h.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=h.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_local_p2(t){const e=h.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}contact_dist(t){return h.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return h.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return h.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return h.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return h.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return h.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return h.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=h.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}solver_contact_dist(t){return h.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return h.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return h.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=h.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return F.__wrap(e)}}const Mh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawcontactpair_free(i>>>0,1));class Rc{static __wrap(t){t=t>>>0;const e=Object.create(Rc.prototype);return e.__wbg_ptr=t,Mh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Mh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawcontactpair_free(t,0)}collider1(){return h.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return h.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return h.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=h.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:Ac.__wrap(e)}}const Eh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdebugrenderpipeline_free(i>>>0,1));class A0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Eh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdebugrenderpipeline_free(t,0)}constructor(){const t=h.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,Eh.register(this,this.__wbg_ptr,this),this}vertices(){const t=h.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return Rr(t)}colors(){const t=h.rawdebugrenderpipeline_colors(this.__wbg_ptr);return Rr(t)}render(t,e,n,r,s,a,o){try{C(t,we),C(e,xe),C(n,Kn),C(r,$n),C(s,Ie),h.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,be(o))}finally{$t[fe++]=void 0}}}const Th=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdeserializedworld_free(i>>>0,1));class Cc{static __wrap(t){t=t>>>0;const e=Object.create(Cc.prototype);return e.__wbg_ptr=t,Th.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Th.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdeserializedworld_free(t,0)}takeGravity(){const t=h.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:F.__wrap(t)}takeIntegrationParameters(){const t=h.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Ai.__wrap(t)}takeIslandManager(){const t=h.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:Jn.__wrap(t)}takeBroadPhase(){const t=h.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:Yn.__wrap(t)}takeNarrowPhase(){const t=h.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Ie.__wrap(t)}takeBodies(){const t=h.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:we.__wrap(t)}takeColliders(){const t=h.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:xe.__wrap(t)}takeImpulseJoints(){const t=h.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Kn.__wrap(t)}takeMultibodyJoints(){const t=h.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:$n.__wrap(t)}}const Ah=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0,1));class R0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ah.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}constructor(t){const e=h.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,Ah.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return h.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return h.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return h.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){h.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){C(t,F),C(e,F),C(n,F),h.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return h.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o,c){try{C(e,Yn),C(n,Ie),C(r,we),C(s,xe),h.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,Ut(o)?4294967297:o>>>0,be(c))}finally{$t[fe++]=void 0}}wheel_chassis_connection_point_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){C(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_rest_length(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_travel(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_radius(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_compression(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_relaxation(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_brake(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_steering(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_engine_force(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_direction_cs(t,e){C(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}set_wheel_axle_cs(t,e){C(e,F),h.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_friction_slip(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_side_friction_stiffness(t,e){h.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_forward_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_side_impulse(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_suspension_force(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_contact_normal_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_contact_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_suspension_length(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_hard_point_ws(t){const e=h.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:F.__wrap(e)}wheel_is_in_contact(t){return h.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=h.__wbindgen_add_to_stack_pointer(-16);h.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=ze().getInt32(r+0,!0),n=ze().getFloat64(r+8,!0);return e===0?void 0:n}finally{h.__wbindgen_add_to_stack_pointer(16)}}}const Rh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_raweventqueue_free(i>>>0,1));class C0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_raweventqueue_free(t,0)}constructor(t){const e=h.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,Rh.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(t){try{h.raweventqueue_drainCollisionEvents(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}drainContactForceEvents(t){try{h.raweventqueue_drainContactForceEvents(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}clear(){h.raweventqueue_clear(this.__wbg_ptr)}}const Ch=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawgenericjoint_free(i>>>0,1));class _n{static __wrap(t){t=t>>>0;const e=Object.create(_n.prototype);return e.__wbg_ptr=t,Ch.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ch.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawgenericjoint_free(t,0)}static generic(t,e,n,r){C(t,F),C(e,F),C(n,F);const s=h.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:_n.__wrap(s)}static spring(t,e,n,r,s){C(r,F),C(s,F);const a=h.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return _n.__wrap(a)}static rope(t,e,n){C(e,F),C(n,F);const r=h.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return _n.__wrap(r)}static spherical(t,e){C(t,F),C(e,F);const n=h.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return _n.__wrap(n)}static prismatic(t,e,n,r,s,a){C(t,F),C(e,F),C(n,F);const o=h.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:_n.__wrap(o)}static fixed(t,e,n,r){C(t,F),C(e,kt),C(n,F),C(r,kt);const s=h.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return _n.__wrap(s)}static revolute(t,e,n){C(t,F),C(e,F),C(n,F);const r=h.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:_n.__wrap(r)}}const Ga=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawimpulsejointset_free(i>>>0,1));class Kn{static __wrap(t){t=t>>>0;const e=Object.create(Kn.prototype);return e.__wbg_ptr=t,Ga.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ga.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawimpulsejointset_free(t,0)}jointType(t){return h.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return h.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return h.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointSetAnchor1(t,e){C(e,F),h.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){C(e,F),h.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return h.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){h.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){h.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){h.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){h.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){h.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=h.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,Ga.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return C(t,_n),h.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return h.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,be(e))}finally{$t[fe++]=void 0}}}const Va=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawintegrationparameters_free(i>>>0,1));class Ai{static __wrap(t){t=t>>>0;const e=Object.create(Ai.prototype);return e.__wbg_ptr=t,Va.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Va.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawintegrationparameters_free(t,0)}constructor(){const t=h.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,Va.register(this,this.__wbg_ptr,this),this}get dt(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return h.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return h.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return h.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return h.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return h.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return h.rawintegrationparameters_minIslandSize(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return h.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return h.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){h.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){h.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){h.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){h.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numInternalPgsIterations(t){h.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set minIslandSize(t){h.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){h.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){h.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}}const ka=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawislandmanager_free(i>>>0,1));class Jn{static __wrap(t){t=t>>>0;const e=Object.create(Jn.prototype);return e.__wbg_ptr=t,ka.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ka.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawislandmanager_free(t,0)}constructor(){const t=h.rawislandmanager_new();return this.__wbg_ptr=t>>>0,ka.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(t){try{h.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}}const Ph=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawkinematiccharactercontroller_free(i>>>0,1));class P0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ph.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawkinematiccharactercontroller_free(t,0)}constructor(t){const e=h.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,Ph.register(this,this.__wbg_ptr,this),this}up(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}setUp(t){C(t,F),h.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return h.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){h.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setOffset(t){h.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return h.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){h.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){const t=h.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===4294967297?void 0:t}autostepMinWidth(){const t=h.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===4294967297?void 0:t}autostepIncludesDynamicBodies(){const t=h.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return h.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){h.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){h.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){h.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return h.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){h.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){const t=h.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===4294967297?void 0:t}enableSnapToGround(t){h.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){h.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return h.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,c,l,d,f,u){try{C(e,Yn),C(n,Ie),C(r,we),C(s,xe),C(o,F),h.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,o.__wbg_ptr,c,Ut(l)?4294967297:Math.fround(l),d,Ut(f)?4294967297:f>>>0,be(u))}finally{$t[fe++]=void 0}}computedMovement(){const t=h.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return F.__wrap(t)}computedGrounded(){return h.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return h.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return C(e,Ud),h.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const Wa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawmultibodyjointset_free(i>>>0,1));class $n{static __wrap(t){t=t>>>0;const e=Object.create($n.prototype);return e.__wbg_ptr=t,Wa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Wa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawmultibodyjointset_free(t,0)}jointType(t){return h.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=h.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return kt.__wrap(e)}jointFrameX2(t){const e=h.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return kt.__wrap(e)}jointAnchor1(t){const e=h.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return F.__wrap(e)}jointAnchor2(t){const e=h.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return F.__wrap(e)}jointContactsEnabled(t){return h.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){h.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return h.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return h.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return h.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=h.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,Wa.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return C(t,_n),h.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){h.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return h.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{h.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{h.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,be(e))}finally{$t[fe++]=void 0}}}const ja=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawnarrowphase_free(i>>>0,1));class Ie{static __wrap(t){t=t>>>0;const e=Object.create(Ie.prototype);return e.__wbg_ptr=t,ja.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ja.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawnarrowphase_free(t,0)}constructor(){const t=h.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,ja.register(this,this.__wbg_ptr,this),this}contact_pairs_with(t,e){h.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,_e(e))}contact_pair(t,e){const n=h.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:Rc.__wrap(n)}intersection_pairs_with(t,e){h.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,_e(e))}intersection_pair(t,e){return h.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const Ih=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawphysicspipeline_free(i>>>0,1));class I0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ih.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawphysicspipeline_free(t,0)}constructor(){const t=h.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,Ih.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){h.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}is_profiler_enabled(){return h.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}timing_step(){return h.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_collision_detection(){return h.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_broad_phase(){return h.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_narrow_phase(){return h.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return h.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_velocity_assembly(){return h.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return h.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return h.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return h.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}timing_ccd(){return h.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_toi_computation(){return h.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_ccd_broad_phase(){return h.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return h.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return h.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_island_construction(){return h.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_user_changes(){return h.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}step(t,e,n,r,s,a,o,c,l,d){C(t,F),C(e,Ai),C(n,Jn),C(r,Yn),C(s,Ie),C(a,we),C(o,xe),C(c,Kn),C(l,$n),C(d,Xo),h.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,d.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,c,l,d,f,u,m,w){C(t,F),C(e,Ai),C(n,Jn),C(r,Yn),C(s,Ie),C(a,we),C(o,xe),C(c,Kn),C(l,$n),C(d,Xo),C(f,C0),h.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,d.__wbg_ptr,f.__wbg_ptr,_e(u),_e(m),_e(w))}}const Dh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpidcontroller_free(i>>>0,1));class D0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Dh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpidcontroller_free(t,0)}constructor(t,e,n,r){const s=h.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s>>>0,Dh.register(this,this.__wbg_ptr,this),this}set_kp(t,e){h.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}set_ki(t,e){h.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kd(t,e){h.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_axes_mask(t){h.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}reset_integrals(){h.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){C(e,we),C(r,F),C(s,F),h.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_angular_correction(t,e,n,r,s){C(e,we),C(r,kt),C(s,F),h.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s){C(e,we),C(r,F),C(s,F);const a=h.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}angular_correction(t,e,n,r,s){C(e,we),C(r,kt),C(s,F);const a=h.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return F.__wrap(a)}}const Lh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointcolliderprojection_free(i>>>0,1));class Ls{static __wrap(t){t=t>>>0;const e=Object.create(Ls.prototype);return e.__wbg_ptr=t,Lh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Lh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=h.rawpointcolliderprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Fh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawpointprojection_free(i>>>0,1));class Ys{static __wrap(t){t=t>>>0;const e=Object.create(Ys.prototype);return e.__wbg_ptr=t,Fh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Fh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawpointprojection_free(t,0)}point(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}isInside(){return h.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const Uh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderhit_free(i>>>0,1));class Pc{static __wrap(t){t=t>>>0;const e=Object.create(Pc.prototype);return e.__wbg_ptr=t,Uh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Uh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return h.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const Nh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawraycolliderintersection_free(i>>>0,1));class Ks{static __wrap(t){t=t>>>0;const e=Object.create(Ks.prototype);return e.__wbg_ptr=t,Nh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Nh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return h.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Oh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrayintersection_free(i>>>0,1));class Js{static __wrap(t){t=t>>>0;const e=Object.create(Js.prototype);return e.__wbg_ptr=t,Oh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Oh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrayintersection_free(t,0)}normal(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}time_of_impact(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return h.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=h.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Xa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrigidbodyset_free(i>>>0,1));class we{static __wrap(t){t=t>>>0;const e=Object.create(we.prototype);return e.__wbg_ptr=t,Xa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Xa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrigidbodyset_free(t,0)}rbTranslation(t){const e=h.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbRotation(t){const e=h.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSleep(t){h.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return h.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return h.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=h.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return F.__wrap(e)}rbNextRotation(t){const e=h.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return kt.__wrap(e)}rbSetTranslation(t,e,n,r,s){h.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){h.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){C(e,F),h.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){C(e,F),h.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){h.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){h.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){C(e,xe),h.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){h.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){C(n,F),C(r,F),C(s,kt),h.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=h.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return F.__wrap(e)}rbAngvel(t){const e=h.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return F.__wrap(e)}rbVelocityAtPoint(t,e){C(e,F);const n=h.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr);return F.__wrap(n)}rbLockTranslations(t,e,n){h.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){h.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){h.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return h.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){h.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){h.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){h.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return h.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return h.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=h.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return F.__wrap(e)}rbLocalCom(t){const e=h.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return F.__wrap(e)}rbWorldCom(t){const e=h.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return F.__wrap(e)}rbInvPrincipalInertia(t){const e=h.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=h.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return kt.__wrap(e)}rbPrincipalInertia(t){const e=h.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return F.__wrap(e)}rbEffectiveWorldInvInertia(t){const e=h.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t);return Fs.__wrap(e)}rbEffectiveAngularInertia(t){const e=h.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return Fs.__wrap(e)}rbWakeUp(t){h.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return h.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return h.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return h.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return h.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return h.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){h.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return h.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return h.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return h.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return h.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return h.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){h.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){h.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){h.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return h.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return h.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){h.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){h.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){h.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){C(e,F),h.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){C(e,F),h.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){C(e,F),h.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){C(e,F),h.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){C(e,F),C(n,F),h.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){C(e,F),C(n,F),h.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return h.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){h.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return h.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){h.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=h.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return F.__wrap(e)}rbUserTorque(t){const e=h.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return F.__wrap(e)}constructor(){const t=h.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,Xa.register(this,this.__wbg_ptr,this),this}createRigidBody(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y,g,p,x,T,E,P,R,I,v,M,V){return C(e,F),C(n,kt),C(o,F),C(c,F),C(l,F),C(d,F),C(f,kt),h.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,d.__wbg_ptr,f.__wbg_ptr,u,m,w,y,g,p,x,T,E,P,R,I,v,M,V)}remove(t,e,n,r,s){C(e,Jn),C(n,xe),C(r,Kn),C(s,$n),h.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return h.rawrigidbodyset_len(this.__wbg_ptr)>>>0}contains(t){return h.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{h.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,be(t))}finally{$t[fe++]=void 0}}propagateModifiedBodyPositionsToColliders(t){C(t,xe),h.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const qa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawrotation_free(i>>>0,1));class kt{static __wrap(t){t=t>>>0;const e=Object.create(kt.prototype);return e.__wbg_ptr=t,qa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,qa.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawrotation_free(t,0)}constructor(t,e,n,r){const s=h.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,qa.register(this,this.__wbg_ptr,this),this}static identity(){const t=h.rawrotation_identity();return kt.__wrap(t)}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return h.rawrotation_w(this.__wbg_ptr)}}const Bh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawsdpmatrix3_free(i>>>0,1));class Fs{static __wrap(t){t=t>>>0;const e=Object.create(Fs.prototype);return e.__wbg_ptr=t,Bh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Bh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawsdpmatrix3_free(t,0)}elements(){const t=h.rawsdpmatrix3_elements(this.__wbg_ptr);return Rr(t)}}const zh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawserializationpipeline_free(i>>>0,1));class L0{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,zh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawserializationpipeline_free(t,0)}constructor(){const t=h.rawccdsolver_new();return this.__wbg_ptr=t>>>0,zh.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,a,o,c,l){C(t,F),C(e,Ai),C(n,Jn),C(r,Yn),C(s,Ie),C(a,we),C(o,xe),C(c,Kn),C(l,$n);const d=h.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr);return Rr(d)}deserializeAll(t){const e=h.rawserializationpipeline_deserializeAll(this.__wbg_ptr,_e(t));return e===0?void 0:Cc.__wrap(e)}}const Hh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshape_free(i>>>0,1));class Lt{static __wrap(t){t=t>>>0;const e=Object.create(Lt.prototype);return e.__wbg_ptr=t,Hh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Hh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshape_free(t,0)}static cuboid(t,e,n){const r=h.rawshape_cuboid(t,e,n);return Lt.__wrap(r)}static roundCuboid(t,e,n,r){const s=h.rawshape_roundCuboid(t,e,n,r);return Lt.__wrap(s)}static ball(t){const e=h.rawshape_ball(t);return Lt.__wrap(e)}static halfspace(t){C(t,F);const e=h.rawshape_halfspace(t.__wbg_ptr);return Lt.__wrap(e)}static capsule(t,e){const n=h.rawshape_capsule(t,e);return Lt.__wrap(n)}static cylinder(t,e){const n=h.rawshape_cylinder(t,e);return Lt.__wrap(n)}static roundCylinder(t,e,n){const r=h.rawshape_roundCylinder(t,e,n);return Lt.__wrap(r)}static cone(t,e){const n=h.rawshape_cone(t,e);return Lt.__wrap(n)}static roundCone(t,e,n){const r=h.rawshape_roundCone(t,e,n);return Lt.__wrap(r)}static voxels(t,e){C(t,F);const n=wr(e,h.__wbindgen_export_2),r=Ye,s=h.rawshape_voxels(t.__wbg_ptr,n,r);return Lt.__wrap(s)}static voxelsFromPoints(t,e){C(t,F);const n=ai(e,h.__wbindgen_export_2),r=Ye,s=h.rawshape_voxelsFromPoints(t.__wbg_ptr,n,r);return Lt.__wrap(s)}static polyline(t,e){const n=ai(t,h.__wbindgen_export_2),r=Ye,s=wr(e,h.__wbindgen_export_2),a=Ye,o=h.rawshape_polyline(n,r,s,a);return Lt.__wrap(o)}static trimesh(t,e,n){const r=ai(t,h.__wbindgen_export_2),s=Ye,a=wr(e,h.__wbindgen_export_2),o=Ye,c=h.rawshape_trimesh(r,s,a,o,n);return c===0?void 0:Lt.__wrap(c)}static heightfield(t,e,n,r,s){const a=ai(n,h.__wbindgen_export_2),o=Ye;C(r,F);const c=h.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return Lt.__wrap(c)}static segment(t,e){C(t,F),C(e,F);const n=h.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return Lt.__wrap(n)}static triangle(t,e,n){C(t,F),C(e,F),C(n,F);const r=h.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return Lt.__wrap(r)}static roundTriangle(t,e,n,r){C(t,F),C(e,F),C(n,F);const s=h.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Lt.__wrap(s)}static convexHull(t){const e=ai(t,h.__wbindgen_export_2),n=Ye,r=h.rawshape_convexHull(e,n);return r===0?void 0:Lt.__wrap(r)}static roundConvexHull(t,e){const n=ai(t,h.__wbindgen_export_2),r=Ye,s=h.rawshape_roundConvexHull(n,r,e);return s===0?void 0:Lt.__wrap(s)}static convexMesh(t,e){const n=ai(t,h.__wbindgen_export_2),r=Ye,s=wr(e,h.__wbindgen_export_2),a=Ye,o=h.rawshape_convexMesh(n,r,s,a);return o===0?void 0:Lt.__wrap(o)}static roundConvexMesh(t,e,n){const r=ai(t,h.__wbindgen_export_2),s=Ye,a=wr(e,h.__wbindgen_export_2),o=Ye,c=h.rawshape_roundConvexMesh(r,s,a,o,n);return c===0?void 0:Lt.__wrap(c)}castShape(t,e,n,r,s,a,o,c,l,d){C(t,F),C(e,kt),C(n,F),C(r,Lt),C(s,F),C(a,kt),C(o,F);const f=h.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,d);return f===0?void 0:$s.__wrap(f)}intersectsShape(t,e,n,r,s){return C(t,F),C(e,kt),C(n,Lt),C(r,F),C(s,kt),h.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){C(t,F),C(e,kt),C(n,Lt),C(r,F),C(s,kt);const o=h.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:Cr.__wrap(o)}containsPoint(t,e,n){return C(t,F),C(e,kt),C(n,F),h.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){C(t,F),C(e,kt),C(n,F);const s=h.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Ys.__wrap(s)}intersectsRay(t,e,n,r,s){return C(t,F),C(e,kt),C(n,F),C(r,F),h.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return C(t,F),C(e,kt),C(n,F),C(r,F),h.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){C(t,F),C(e,kt),C(n,F),C(r,F);const o=h.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:Js.__wrap(o)}}const Gh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecasthit_free(i>>>0,1));class $s{static __wrap(t){t=t>>>0;const e=Object.create($s.prototype);return e.__wbg_ptr=t,Gh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Gh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecasthit_free(t,0)}time_of_impact(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}witness1(){const t=h.rawshapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}witness2(){const t=h.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawshapecasthit_normal1(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawshapecasthit_normal2(this.__wbg_ptr);return F.__wrap(t)}}const Vh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawshapecontact_free(i>>>0,1));class Cr{static __wrap(t){t=t>>>0;const e=Object.create(Cr.prototype);return e.__wbg_ptr=t,Vh.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Vh.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawshapecontact_free(t,0)}distance(){return h.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=h.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(t)}point2(){const t=h.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(t)}normal1(){const t=h.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(t)}normal2(){const t=h.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(t)}}const Ya=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>h.__wbg_rawvector_free(i>>>0,1));class F{static __wrap(t){t=t>>>0;const e=Object.create(F.prototype);return e.__wbg_ptr=t,Ya.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ya.unregister(this),t}free(){const t=this.__destroy_into_raw();h.__wbg_rawvector_free(t,0)}static zero(){const t=h.rawvector_zero();return F.__wrap(t)}constructor(t,e,n){const r=h.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,Ya.register(this,this.__wbg_ptr,this),this}get x(){return h.rawintegrationparameters_dt(this.__wbg_ptr)}set x(t){h.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get y(){return h.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}set y(t){h.rawvector_set_y(this.__wbg_ptr,t)}get z(){return h.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){h.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=h.rawvector_xyz(this.__wbg_ptr);return F.__wrap(t)}yxz(){const t=h.rawvector_yxz(this.__wbg_ptr);return F.__wrap(t)}zxy(){const t=h.rawvector_zxy(this.__wbg_ptr);return F.__wrap(t)}xzy(){const t=h.rawvector_xzy(this.__wbg_ptr);return F.__wrap(t)}yzx(){const t=h.rawvector_yzx(this.__wbg_ptr);return F.__wrap(t)}zyx(){const t=h.rawvector_zyx(this.__wbg_ptr);return F.__wrap(t)}}function F0(i,t,e,n){const r=Jt(i).bind(Jt(t),Jt(e),Jt(n));return _e(r)}function U0(i){const t=Jt(i).buffer;return _e(t)}function N0(){return js(function(i,t){const e=Jt(i).call(Jt(t));return _e(e)},arguments)}function O0(){return js(function(i,t,e){const n=Jt(i).call(Jt(t),Jt(e));return _e(n)},arguments)}function B0(){return js(function(i,t,e,n){const r=Jt(i).call(Jt(t),Jt(e),Jt(n));return _e(r)},arguments)}function z0(){return js(function(i,t,e,n,r){const s=Jt(i).call(Jt(t),Jt(e),Jt(n),Jt(r));return _e(s)},arguments)}function H0(i){return Jt(i).length}function G0(i){return Jt(i).length}function V0(i){const t=new Uint8Array(Jt(i));return _e(t)}function k0(i,t){const e=new Function(Dd(i,t));return _e(e)}function W0(i,t,e){const n=new Uint8Array(Jt(i),t>>>0,e>>>0);return _e(n)}function j0(i,t,e){const n=new Float32Array(Jt(i),t>>>0,e>>>0);return _e(n)}function X0(i){const t=new Float32Array(i>>>0);return _e(t)}function q0(i){return Jt(i).now()}function Y0(i){const t=Jt(i).performance;return _e(t)}function K0(i){const t=Tc.__wrap(i);return _e(t)}function J0(i){const t=Ks.__wrap(i);return _e(t)}function $0(i,t,e){Jt(i).set(Jt(t),e>>>0)}function Z0(i,t,e){Jt(i).set(Jt(t),e>>>0)}function Q0(){const i=typeof global>"u"?null:global;return Ut(i)?0:_e(i)}function tb(){const i=typeof globalThis>"u"?null:globalThis;return Ut(i)?0:_e(i)}function eb(){const i=typeof self>"u"?null:self;return Ut(i)?0:_e(i)}function nb(){const i=typeof window>"u"?null:window;return Ut(i)?0:_e(i)}function ib(i){const t=Jt(i);return typeof t=="boolean"?t?1:0:2}function rb(i){return typeof Jt(i)=="function"}function sb(i){return Jt(i)===void 0}function ab(){const i=h.memory;return _e(i)}function ob(i,t){const e=Jt(t),n=typeof e=="number"?e:void 0;ze().setFloat64(i+8,Ut(n)?0:n,!0),ze().setInt32(i+0,!Ut(n),!0)}function cb(i){return _e(i)}function lb(i){const t=Jt(i);return _e(t)}function hb(i){Rr(i)}function db(i,t){throw new Error(Dd(i,t))}URL=globalThis.URL;const _=await b0({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:cb,__wbindgen_boolean_get:ib,__wbindgen_object_drop_ref:hb,__wbindgen_number_get:ob,__wbindgen_is_function:rb,__wbg_rawraycolliderintersection_new:J0,__wbg_rawcontactforceevent_new:K0,__wbg_performance_7a3ffd0b17f663ad:Y0,__wbindgen_is_undefined:sb,__wbg_now_2c95c9de01293173:q0,__wbindgen_object_clone_ref:lb,__wbg_newnoargs_105ed471475aaf50:k0,__wbg_call_672a4d21634d4a24:N0,__wbg_call_7cccdd69e0791ae2:O0,__wbg_call_833bed5770ea2041:B0,__wbg_call_b8adc8b1d0a0d8eb:z0,__wbg_bind_c8359b1cba058168:F0,__wbg_buffer_609cc3eee51ed158:U0,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:tb,__wbg_static_accessor_SELF_37c5d418e4bf5819:eb,__wbg_static_accessor_WINDOW_5de37043a91a9c40:nb,__wbg_static_accessor_GLOBAL_88a902d13a557d07:Q0,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:W0,__wbg_new_a12002a7f91c75be:V0,__wbg_set_65595bdd868b3009:Z0,__wbg_length_a446193dc22c12f8:G0,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:j0,__wbg_set_10bad9bee0e9c58b:$0,__wbg_length_3b4f022188ae8db6:H0,__wbg_newwithlength_5a5efe313cfd59f1:X0,__wbindgen_throw:db,__wbindgen_memory:ab}},w0),ub=_.memory,fb=_.version,_b=_.__wbg_rawkinematiccharactercontroller_free,pb=_.rawkinematiccharactercontroller_new,mb=_.rawkinematiccharactercontroller_setUp,gb=_.rawkinematiccharactercontroller_normalNudgeFactor,wb=_.rawkinematiccharactercontroller_setNormalNudgeFactor,bb=_.rawkinematiccharactercontroller_offset,vb=_.rawkinematiccharactercontroller_setOffset,xb=_.rawkinematiccharactercontroller_slideEnabled,yb=_.rawkinematiccharactercontroller_setSlideEnabled,Sb=_.rawkinematiccharactercontroller_autostepMaxHeight,Mb=_.rawkinematiccharactercontroller_autostepMinWidth,Eb=_.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,Tb=_.rawkinematiccharactercontroller_autostepEnabled,Ab=_.rawkinematiccharactercontroller_enableAutostep,Rb=_.rawkinematiccharactercontroller_disableAutostep,Cb=_.rawkinematiccharactercontroller_maxSlopeClimbAngle,Pb=_.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,Ib=_.rawkinematiccharactercontroller_minSlopeSlideAngle,Db=_.rawkinematiccharactercontroller_setMinSlopeSlideAngle,Lb=_.rawkinematiccharactercontroller_snapToGroundDistance,Fb=_.rawkinematiccharactercontroller_enableSnapToGround,Ub=_.rawkinematiccharactercontroller_disableSnapToGround,Nb=_.rawkinematiccharactercontroller_snapToGroundEnabled,Ob=_.rawkinematiccharactercontroller_computeColliderMovement,Bb=_.rawkinematiccharactercontroller_computedMovement,zb=_.rawkinematiccharactercontroller_computedGrounded,Hb=_.rawkinematiccharactercontroller_numComputedCollisions,Gb=_.rawkinematiccharactercontroller_computedCollision,Vb=_.__wbg_rawcharactercollision_free,kb=_.rawcharactercollision_new,Wb=_.rawcharactercollision_handle,jb=_.rawcharactercollision_translationDeltaApplied,Xb=_.rawcharactercollision_translationDeltaRemaining,qb=_.rawcharactercollision_toi,Yb=_.rawcharactercollision_worldWitness1,Kb=_.rawcharactercollision_worldWitness2,Jb=_.rawcharactercollision_worldNormal1,$b=_.rawcharactercollision_worldNormal2,Zb=_.__wbg_rawpidcontroller_free,Qb=_.rawpidcontroller_new,tv=_.rawpidcontroller_set_kp,ev=_.rawpidcontroller_set_ki,nv=_.rawpidcontroller_set_kd,iv=_.rawpidcontroller_set_axes_mask,rv=_.rawpidcontroller_reset_integrals,sv=_.rawpidcontroller_apply_linear_correction,av=_.rawpidcontroller_apply_angular_correction,ov=_.rawpidcontroller_linear_correction,cv=_.rawpidcontroller_angular_correction,lv=_.__wbg_rawdynamicraycastvehiclecontroller_free,hv=_.rawdynamicraycastvehiclecontroller_new,dv=_.rawdynamicraycastvehiclecontroller_current_vehicle_speed,uv=_.rawdynamicraycastvehiclecontroller_chassis,fv=_.rawdynamicraycastvehiclecontroller_index_up_axis,_v=_.rawdynamicraycastvehiclecontroller_set_index_up_axis,pv=_.rawdynamicraycastvehiclecontroller_index_forward_axis,mv=_.rawdynamicraycastvehiclecontroller_set_index_forward_axis,gv=_.rawdynamicraycastvehiclecontroller_add_wheel,wv=_.rawdynamicraycastvehiclecontroller_num_wheels,bv=_.rawdynamicraycastvehiclecontroller_update_vehicle,vv=_.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,xv=_.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,yv=_.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,Sv=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,Mv=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,Ev=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,Tv=_.rawdynamicraycastvehiclecontroller_wheel_radius,Av=_.rawdynamicraycastvehiclecontroller_set_wheel_radius,Rv=_.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,Cv=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,Pv=_.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,Iv=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,Dv=_.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,Lv=_.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,Fv=_.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,Uv=_.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,Nv=_.rawdynamicraycastvehiclecontroller_wheel_brake,Ov=_.rawdynamicraycastvehiclecontroller_set_wheel_brake,Bv=_.rawdynamicraycastvehiclecontroller_wheel_steering,zv=_.rawdynamicraycastvehiclecontroller_set_wheel_steering,Hv=_.rawdynamicraycastvehiclecontroller_wheel_engine_force,Gv=_.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,Vv=_.rawdynamicraycastvehiclecontroller_wheel_direction_cs,kv=_.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,Wv=_.rawdynamicraycastvehiclecontroller_wheel_axle_cs,jv=_.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,Xv=_.rawdynamicraycastvehiclecontroller_wheel_friction_slip,qv=_.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,Yv=_.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,Kv=_.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,Jv=_.rawdynamicraycastvehiclecontroller_wheel_rotation,$v=_.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,Zv=_.rawdynamicraycastvehiclecontroller_wheel_side_impulse,Qv=_.rawdynamicraycastvehiclecontroller_wheel_suspension_force,tx=_.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,ex=_.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,nx=_.rawdynamicraycastvehiclecontroller_wheel_suspension_length,ix=_.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,rx=_.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,sx=_.rawdynamicraycastvehiclecontroller_wheel_ground_object,ax=_.__wbg_rawccdsolver_free,ox=_.rawimpulsejointset_jointType,cx=_.rawimpulsejointset_jointBodyHandle1,lx=_.rawimpulsejointset_jointBodyHandle2,hx=_.rawimpulsejointset_jointFrameX1,dx=_.rawimpulsejointset_jointFrameX2,ux=_.rawimpulsejointset_jointAnchor1,fx=_.rawimpulsejointset_jointAnchor2,_x=_.rawimpulsejointset_jointSetAnchor1,px=_.rawimpulsejointset_jointSetAnchor2,mx=_.rawimpulsejointset_jointContactsEnabled,gx=_.rawimpulsejointset_jointSetContactsEnabled,wx=_.rawimpulsejointset_jointLimitsEnabled,bx=_.rawimpulsejointset_jointLimitsMin,vx=_.rawimpulsejointset_jointLimitsMax,xx=_.rawimpulsejointset_jointSetLimits,yx=_.rawimpulsejointset_jointConfigureMotorModel,Sx=_.rawimpulsejointset_jointConfigureMotorVelocity,Mx=_.rawimpulsejointset_jointConfigureMotorPosition,Ex=_.rawimpulsejointset_jointConfigureMotor,Tx=_.__wbg_rawimpulsejointset_free,Ax=_.rawimpulsejointset_new,Rx=_.rawimpulsejointset_createJoint,Cx=_.rawimpulsejointset_remove,Px=_.rawimpulsejointset_len,Ix=_.rawimpulsejointset_contains,Dx=_.rawimpulsejointset_forEachJointHandle,Lx=_.rawimpulsejointset_forEachJointAttachedToRigidBody,Fx=_.__wbg_rawintegrationparameters_free,Ux=_.rawintegrationparameters_new,Nx=_.rawintegrationparameters_dt,Ox=_.rawintegrationparameters_contact_erp,Bx=_.rawintegrationparameters_normalizedAllowedLinearError,zx=_.rawintegrationparameters_normalizedPredictionDistance,Hx=_.rawintegrationparameters_numSolverIterations,Gx=_.rawintegrationparameters_minIslandSize,Vx=_.rawintegrationparameters_maxCcdSubsteps,kx=_.rawintegrationparameters_set_dt,Wx=_.rawintegrationparameters_set_contact_natural_frequency,jx=_.rawintegrationparameters_set_normalizedAllowedLinearError,Xx=_.rawintegrationparameters_set_normalizedPredictionDistance,qx=_.rawintegrationparameters_set_numSolverIterations,Yx=_.rawintegrationparameters_set_minIslandSize,Kx=_.rawintegrationparameters_set_maxCcdSubsteps,Jx=_.rawintegrationparameters_set_lengthUnit,$x=_.__wbg_rawislandmanager_free,Zx=_.rawislandmanager_new,Qx=_.rawislandmanager_forEachActiveRigidBodyHandle,ty=_.__wbg_rawgenericjoint_free,ey=_.rawgenericjoint_generic,ny=_.rawgenericjoint_spring,iy=_.rawgenericjoint_rope,ry=_.rawgenericjoint_spherical,sy=_.rawgenericjoint_prismatic,ay=_.rawgenericjoint_fixed,oy=_.rawgenericjoint_revolute,cy=_.rawmultibodyjointset_jointType,ly=_.rawmultibodyjointset_jointFrameX1,hy=_.rawmultibodyjointset_jointFrameX2,dy=_.rawmultibodyjointset_jointAnchor1,uy=_.rawmultibodyjointset_jointAnchor2,fy=_.rawmultibodyjointset_jointContactsEnabled,_y=_.rawmultibodyjointset_jointSetContactsEnabled,py=_.rawmultibodyjointset_jointLimitsEnabled,my=_.rawmultibodyjointset_jointLimitsMin,gy=_.rawmultibodyjointset_jointLimitsMax,wy=_.__wbg_rawmultibodyjointset_free,by=_.rawmultibodyjointset_new,vy=_.rawmultibodyjointset_createJoint,xy=_.rawmultibodyjointset_remove,yy=_.rawmultibodyjointset_contains,Sy=_.rawmultibodyjointset_forEachJointHandle,My=_.rawmultibodyjointset_forEachJointAttachedToRigidBody,Ey=_.rawrigidbodyset_rbTranslation,Ty=_.rawrigidbodyset_rbRotation,Ay=_.rawrigidbodyset_rbSleep,Ry=_.rawrigidbodyset_rbIsSleeping,Cy=_.rawrigidbodyset_rbIsMoving,Py=_.rawrigidbodyset_rbNextTranslation,Iy=_.rawrigidbodyset_rbNextRotation,Dy=_.rawrigidbodyset_rbSetTranslation,Ly=_.rawrigidbodyset_rbSetRotation,Fy=_.rawrigidbodyset_rbSetLinvel,Uy=_.rawrigidbodyset_rbSetAngvel,Ny=_.rawrigidbodyset_rbSetNextKinematicTranslation,Oy=_.rawrigidbodyset_rbSetNextKinematicRotation,By=_.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,zy=_.rawrigidbodyset_rbSetAdditionalMass,Hy=_.rawrigidbodyset_rbSetAdditionalMassProperties,Gy=_.rawrigidbodyset_rbLinvel,Vy=_.rawrigidbodyset_rbAngvel,ky=_.rawrigidbodyset_rbVelocityAtPoint,Wy=_.rawrigidbodyset_rbLockTranslations,jy=_.rawrigidbodyset_rbSetEnabledTranslations,Xy=_.rawrigidbodyset_rbLockRotations,qy=_.rawrigidbodyset_rbSetEnabledRotations,Yy=_.rawrigidbodyset_rbDominanceGroup,Ky=_.rawrigidbodyset_rbSetDominanceGroup,Jy=_.rawrigidbodyset_rbEnableCcd,$y=_.rawrigidbodyset_rbSetSoftCcdPrediction,Zy=_.rawrigidbodyset_rbMass,Qy=_.rawrigidbodyset_rbInvMass,tS=_.rawrigidbodyset_rbEffectiveInvMass,eS=_.rawrigidbodyset_rbLocalCom,nS=_.rawrigidbodyset_rbWorldCom,iS=_.rawrigidbodyset_rbInvPrincipalInertia,rS=_.rawrigidbodyset_rbPrincipalInertiaLocalFrame,sS=_.rawrigidbodyset_rbPrincipalInertia,aS=_.rawrigidbodyset_rbEffectiveWorldInvInertia,oS=_.rawrigidbodyset_rbEffectiveAngularInertia,cS=_.rawrigidbodyset_rbWakeUp,lS=_.rawrigidbodyset_rbIsCcdEnabled,hS=_.rawrigidbodyset_rbSoftCcdPrediction,dS=_.rawrigidbodyset_rbNumColliders,uS=_.rawrigidbodyset_rbCollider,fS=_.rawrigidbodyset_rbBodyType,_S=_.rawrigidbodyset_rbSetBodyType,pS=_.rawrigidbodyset_rbIsFixed,mS=_.rawrigidbodyset_rbIsKinematic,gS=_.rawrigidbodyset_rbIsDynamic,wS=_.rawrigidbodyset_rbLinearDamping,bS=_.rawrigidbodyset_rbAngularDamping,vS=_.rawrigidbodyset_rbSetLinearDamping,xS=_.rawrigidbodyset_rbSetAngularDamping,yS=_.rawrigidbodyset_rbSetEnabled,SS=_.rawrigidbodyset_rbIsEnabled,MS=_.rawrigidbodyset_rbGravityScale,ES=_.rawrigidbodyset_rbSetGravityScale,TS=_.rawrigidbodyset_rbResetForces,AS=_.rawrigidbodyset_rbResetTorques,RS=_.rawrigidbodyset_rbAddForce,CS=_.rawrigidbodyset_rbApplyImpulse,PS=_.rawrigidbodyset_rbAddTorque,IS=_.rawrigidbodyset_rbApplyTorqueImpulse,DS=_.rawrigidbodyset_rbAddForceAtPoint,LS=_.rawrigidbodyset_rbApplyImpulseAtPoint,FS=_.rawrigidbodyset_rbAdditionalSolverIterations,US=_.rawrigidbodyset_rbSetAdditionalSolverIterations,NS=_.rawrigidbodyset_rbUserData,OS=_.rawrigidbodyset_rbSetUserData,BS=_.rawrigidbodyset_rbUserForce,zS=_.rawrigidbodyset_rbUserTorque,HS=_.__wbg_rawrigidbodyset_free,GS=_.rawrigidbodyset_new,VS=_.rawrigidbodyset_createRigidBody,kS=_.rawrigidbodyset_remove,WS=_.rawrigidbodyset_len,jS=_.rawrigidbodyset_contains,XS=_.rawrigidbodyset_forEachRigidBodyHandle,qS=_.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,YS=_.__wbg_rawbroadphase_free,KS=_.rawbroadphase_new,JS=_.rawbroadphase_castRay,$S=_.rawbroadphase_castRayAndGetNormal,ZS=_.rawbroadphase_intersectionsWithRay,QS=_.rawbroadphase_intersectionWithShape,tM=_.rawbroadphase_projectPoint,eM=_.rawbroadphase_projectPointAndGetFeature,nM=_.rawbroadphase_intersectionsWithPoint,iM=_.rawbroadphase_castShape,rM=_.rawbroadphase_intersectionsWithShape,sM=_.rawbroadphase_collidersWithAabbIntersectingAabb,aM=_.rawcolliderset_coTranslation,oM=_.rawcolliderset_coRotation,cM=_.rawcolliderset_coTranslationWrtParent,lM=_.rawcolliderset_coRotationWrtParent,hM=_.rawcolliderset_coSetTranslation,dM=_.rawcolliderset_coSetTranslationWrtParent,uM=_.rawcolliderset_coSetRotation,fM=_.rawcolliderset_coSetRotationWrtParent,_M=_.rawcolliderset_coIsSensor,pM=_.rawcolliderset_coShapeType,mM=_.rawcolliderset_coHalfspaceNormal,gM=_.rawcolliderset_coHalfExtents,wM=_.rawcolliderset_coSetHalfExtents,bM=_.rawcolliderset_coRadius,vM=_.rawcolliderset_coSetRadius,xM=_.rawcolliderset_coHalfHeight,yM=_.rawcolliderset_coSetHalfHeight,SM=_.rawcolliderset_coRoundRadius,MM=_.rawcolliderset_coSetRoundRadius,EM=_.rawcolliderset_coVoxelData,TM=_.rawcolliderset_coVoxelSize,AM=_.rawcolliderset_coSetVoxel,RM=_.rawcolliderset_coPropagateVoxelChange,CM=_.rawcolliderset_coCombineVoxelStates,PM=_.rawcolliderset_coVertices,IM=_.rawcolliderset_coIndices,DM=_.rawcolliderset_coTriMeshFlags,LM=_.rawcolliderset_coHeightFieldFlags,FM=_.rawcolliderset_coHeightfieldHeights,UM=_.rawcolliderset_coHeightfieldScale,NM=_.rawcolliderset_coHeightfieldNRows,OM=_.rawcolliderset_coHeightfieldNCols,BM=_.rawcolliderset_coParent,zM=_.rawcolliderset_coSetEnabled,HM=_.rawcolliderset_coIsEnabled,GM=_.rawcolliderset_coSetContactSkin,VM=_.rawcolliderset_coContactSkin,kM=_.rawcolliderset_coFriction,WM=_.rawcolliderset_coRestitution,jM=_.rawcolliderset_coDensity,XM=_.rawcolliderset_coMass,qM=_.rawcolliderset_coVolume,YM=_.rawcolliderset_coCollisionGroups,KM=_.rawcolliderset_coSolverGroups,JM=_.rawcolliderset_coActiveHooks,$M=_.rawcolliderset_coActiveCollisionTypes,ZM=_.rawcolliderset_coActiveEvents,QM=_.rawcolliderset_coContactForceEventThreshold,tE=_.rawcolliderset_coContainsPoint,eE=_.rawcolliderset_coCastShape,nE=_.rawcolliderset_coCastCollider,iE=_.rawcolliderset_coIntersectsShape,rE=_.rawcolliderset_coContactShape,sE=_.rawcolliderset_coContactCollider,aE=_.rawcolliderset_coProjectPoint,oE=_.rawcolliderset_coIntersectsRay,cE=_.rawcolliderset_coCastRay,lE=_.rawcolliderset_coCastRayAndGetNormal,hE=_.rawcolliderset_coSetSensor,dE=_.rawcolliderset_coSetRestitution,uE=_.rawcolliderset_coSetFriction,fE=_.rawcolliderset_coFrictionCombineRule,_E=_.rawcolliderset_coSetFrictionCombineRule,pE=_.rawcolliderset_coRestitutionCombineRule,mE=_.rawcolliderset_coSetRestitutionCombineRule,gE=_.rawcolliderset_coSetCollisionGroups,wE=_.rawcolliderset_coSetSolverGroups,bE=_.rawcolliderset_coSetActiveHooks,vE=_.rawcolliderset_coSetActiveEvents,xE=_.rawcolliderset_coSetActiveCollisionTypes,yE=_.rawcolliderset_coSetShape,SE=_.rawcolliderset_coSetContactForceEventThreshold,ME=_.rawcolliderset_coSetDensity,EE=_.rawcolliderset_coSetMass,TE=_.rawcolliderset_coSetMassProperties,AE=_.__wbg_rawcolliderset_free,RE=_.rawcolliderset_new,CE=_.rawcolliderset_len,PE=_.rawcolliderset_contains,IE=_.rawcolliderset_createCollider,DE=_.rawcolliderset_remove,LE=_.rawcolliderset_forEachColliderHandle,FE=_.__wbg_rawshapecontact_free,UE=_.__wbg_rawnarrowphase_free,NE=_.rawnarrowphase_new,OE=_.rawnarrowphase_contact_pairs_with,BE=_.rawnarrowphase_contact_pair,zE=_.rawnarrowphase_intersection_pairs_with,HE=_.rawnarrowphase_intersection_pair,GE=_.__wbg_rawcontactmanifold_free,VE=_.rawcontactpair_collider1,kE=_.rawcontactpair_collider2,WE=_.rawcontactpair_numContactManifolds,jE=_.rawcontactpair_contactManifold,XE=_.rawcontactmanifold_normal,qE=_.rawcontactmanifold_local_n1,YE=_.rawcontactmanifold_local_n2,KE=_.rawcontactmanifold_subshape1,JE=_.rawcontactmanifold_subshape2,$E=_.rawcontactmanifold_num_contacts,ZE=_.rawcontactmanifold_contact_local_p1,QE=_.rawcontactmanifold_contact_local_p2,tT=_.rawcontactmanifold_contact_dist,eT=_.rawcontactmanifold_contact_fid1,nT=_.rawcontactmanifold_contact_fid2,iT=_.rawcontactmanifold_contact_impulse,rT=_.rawcontactmanifold_contact_tangent_impulse_x,sT=_.rawcontactmanifold_contact_tangent_impulse_y,aT=_.rawcontactmanifold_num_solver_contacts,oT=_.rawcontactmanifold_solver_contact_point,cT=_.rawcontactmanifold_solver_contact_dist,lT=_.rawcontactmanifold_solver_contact_friction,hT=_.rawcontactmanifold_solver_contact_restitution,dT=_.rawcontactmanifold_solver_contact_tangent_velocity,uT=_.__wbg_rawpointprojection_free,fT=_.rawpointprojection_point,_T=_.rawpointprojection_isInside,pT=_.__wbg_rawpointcolliderprojection_free,mT=_.rawpointcolliderprojection_colliderHandle,gT=_.rawpointcolliderprojection_point,wT=_.rawpointcolliderprojection_isInside,bT=_.rawpointcolliderprojection_featureType,vT=_.rawpointcolliderprojection_featureId,xT=_.__wbg_rawrayintersection_free,yT=_.__wbg_rawraycolliderhit_free,ST=_.__wbg_rawshape_free,MT=_.rawshape_cuboid,ET=_.rawshape_roundCuboid,TT=_.rawshape_ball,AT=_.rawshape_halfspace,RT=_.rawshape_capsule,CT=_.rawshape_cylinder,PT=_.rawshape_roundCylinder,IT=_.rawshape_cone,DT=_.rawshape_roundCone,LT=_.rawshape_voxels,FT=_.rawshape_voxelsFromPoints,UT=_.rawshape_polyline,NT=_.rawshape_trimesh,OT=_.rawshape_heightfield,BT=_.rawshape_segment,zT=_.rawshape_triangle,HT=_.rawshape_roundTriangle,GT=_.rawshape_convexHull,VT=_.rawshape_roundConvexHull,kT=_.rawshape_convexMesh,WT=_.rawshape_roundConvexMesh,jT=_.rawshape_castShape,XT=_.rawshape_intersectsShape,qT=_.rawshape_contactShape,YT=_.rawshape_containsPoint,KT=_.rawshape_projectPoint,JT=_.rawshape_intersectsRay,$T=_.rawshape_castRay,ZT=_.rawshape_castRayAndGetNormal,QT=_.__wbg_rawshapecasthit_free,tA=_.rawshapecasthit_witness1,eA=_.rawshapecasthit_normal1,nA=_.rawshapecasthit_normal2,iA=_.__wbg_rawcollidershapecasthit_free,rA=_.rawcollidershapecasthit_time_of_impact,sA=_.rawcollidershapecasthit_witness1,aA=_.rawcollidershapecasthit_witness2,oA=_.rawrotation_new,cA=_.rawrotation_identity,lA=_.rawrotation_w,hA=_.rawvector_zero,dA=_.rawvector_new,uA=_.rawvector_set_y,fA=_.rawvector_set_z,_A=_.rawvector_xyz,pA=_.rawvector_yxz,mA=_.rawvector_zxy,gA=_.rawvector_xzy,wA=_.rawvector_yzx,bA=_.rawvector_zyx,vA=_.rawsdpmatrix3_elements,xA=_.__wbg_rawdebugrenderpipeline_free,yA=_.rawdebugrenderpipeline_new,SA=_.rawdebugrenderpipeline_vertices,MA=_.rawdebugrenderpipeline_colors,EA=_.rawdebugrenderpipeline_render,TA=_.__wbg_raweventqueue_free,AA=_.__wbg_rawcontactforceevent_free,RA=_.rawcontactforceevent_collider2,CA=_.rawcontactforceevent_total_force,PA=_.rawcontactforceevent_total_force_magnitude,IA=_.rawcontactforceevent_max_force_direction,DA=_.rawcontactforceevent_max_force_magnitude,LA=_.raweventqueue_new,FA=_.raweventqueue_drainCollisionEvents,UA=_.raweventqueue_drainContactForceEvents,NA=_.raweventqueue_clear,OA=_.__wbg_rawphysicspipeline_free,BA=_.rawphysicspipeline_new,zA=_.rawphysicspipeline_set_profiler_enabled,HA=_.rawphysicspipeline_is_profiler_enabled,GA=_.rawphysicspipeline_timing_step,VA=_.rawphysicspipeline_timing_collision_detection,kA=_.rawphysicspipeline_timing_broad_phase,WA=_.rawphysicspipeline_timing_narrow_phase,jA=_.rawphysicspipeline_timing_solver,XA=_.rawphysicspipeline_timing_velocity_assembly,qA=_.rawphysicspipeline_timing_velocity_resolution,YA=_.rawphysicspipeline_timing_velocity_update,KA=_.rawphysicspipeline_timing_velocity_writeback,JA=_.rawphysicspipeline_timing_ccd,$A=_.rawphysicspipeline_timing_ccd_toi_computation,ZA=_.rawphysicspipeline_timing_ccd_broad_phase,QA=_.rawphysicspipeline_timing_ccd_narrow_phase,tR=_.rawphysicspipeline_timing_ccd_solver,eR=_.rawphysicspipeline_timing_island_construction,nR=_.rawphysicspipeline_timing_user_changes,iR=_.rawphysicspipeline_step,rR=_.rawphysicspipeline_stepWithEvents,sR=_.__wbg_rawdeserializedworld_free,aR=_.rawdeserializedworld_takeGravity,oR=_.rawdeserializedworld_takeIntegrationParameters,cR=_.rawdeserializedworld_takeIslandManager,lR=_.rawdeserializedworld_takeBroadPhase,hR=_.rawdeserializedworld_takeNarrowPhase,dR=_.rawdeserializedworld_takeBodies,uR=_.rawdeserializedworld_takeColliders,fR=_.rawdeserializedworld_takeImpulseJoints,_R=_.rawdeserializedworld_takeMultibodyJoints,pR=_.rawserializationpipeline_serializeAll,mR=_.rawserializationpipeline_deserializeAll,gR=_.rawcolliderset_isHandleValid,wR=_.rawrayintersection_featureId,bR=_.rawraycolliderintersection_featureId,vR=_.rawintegrationparameters_set_numInternalPgsIterations,xR=_.rawvector_set_x,yR=_.reserve_memory,SR=_.rawkinematiccharactercontroller_up,MR=_.rawshapecontact_normal2,ER=_.rawshapecontact_point1,TR=_.rawshapecontact_point2,AR=_.rawrayintersection_normal,RR=_.rawraycolliderintersection_normal,CR=_.rawshapecontact_normal1,PR=_.rawcollidershapecasthit_normal1,IR=_.rawcollidershapecasthit_normal2,DR=_.rawshapecasthit_witness2,LR=_.rawintegrationparameters_numInternalPgsIterations,FR=_.rawshapecontact_distance,UR=_.rawrayintersection_featureType,NR=_.rawraycolliderintersection_colliderHandle,OR=_.rawrayintersection_time_of_impact,BR=_.rawraycolliderintersection_featureType,zR=_.rawraycolliderhit_colliderHandle,HR=_.rawraycolliderintersection_time_of_impact,GR=_.rawshapecasthit_time_of_impact,VR=_.rawcollidershapecasthit_colliderHandle,kR=_.rawraycolliderhit_timeOfImpact,WR=_.rawrotation_x,jR=_.rawrotation_y,XR=_.rawrotation_z,qR=_.rawvector_x,YR=_.rawvector_y,KR=_.rawvector_z,JR=_.rawcontactforceevent_collider1,$R=_.rawintegrationparameters_lengthUnit,ZR=_.__wbg_rawcontactpair_free,QR=_.__wbg_rawraycolliderintersection_free,t1=_.__wbg_rawrotation_free,e1=_.__wbg_rawvector_free,n1=_.__wbg_rawsdpmatrix3_free,i1=_.__wbg_rawserializationpipeline_free,r1=_.rawccdsolver_new,s1=_.rawserializationpipeline_new,a1=_.__wbindgen_export_0,o1=_.__wbindgen_add_to_stack_pointer,c1=_.__wbindgen_export_1,l1=_.__wbindgen_export_2,h1=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:YS,__wbg_rawccdsolver_free:ax,__wbg_rawcharactercollision_free:Vb,__wbg_rawcolliderset_free:AE,__wbg_rawcollidershapecasthit_free:iA,__wbg_rawcontactforceevent_free:AA,__wbg_rawcontactmanifold_free:GE,__wbg_rawcontactpair_free:ZR,__wbg_rawdebugrenderpipeline_free:xA,__wbg_rawdeserializedworld_free:sR,__wbg_rawdynamicraycastvehiclecontroller_free:lv,__wbg_raweventqueue_free:TA,__wbg_rawgenericjoint_free:ty,__wbg_rawimpulsejointset_free:Tx,__wbg_rawintegrationparameters_free:Fx,__wbg_rawislandmanager_free:$x,__wbg_rawkinematiccharactercontroller_free:_b,__wbg_rawmultibodyjointset_free:wy,__wbg_rawnarrowphase_free:UE,__wbg_rawphysicspipeline_free:OA,__wbg_rawpidcontroller_free:Zb,__wbg_rawpointcolliderprojection_free:pT,__wbg_rawpointprojection_free:uT,__wbg_rawraycolliderhit_free:yT,__wbg_rawraycolliderintersection_free:QR,__wbg_rawrayintersection_free:xT,__wbg_rawrigidbodyset_free:HS,__wbg_rawrotation_free:t1,__wbg_rawsdpmatrix3_free:n1,__wbg_rawserializationpipeline_free:i1,__wbg_rawshape_free:ST,__wbg_rawshapecasthit_free:QT,__wbg_rawshapecontact_free:FE,__wbg_rawvector_free:e1,__wbindgen_add_to_stack_pointer:o1,__wbindgen_export_0:a1,__wbindgen_export_1:c1,__wbindgen_export_2:l1,memory:ub,rawbroadphase_castRay:JS,rawbroadphase_castRayAndGetNormal:$S,rawbroadphase_castShape:iM,rawbroadphase_collidersWithAabbIntersectingAabb:sM,rawbroadphase_intersectionWithShape:QS,rawbroadphase_intersectionsWithPoint:nM,rawbroadphase_intersectionsWithRay:ZS,rawbroadphase_intersectionsWithShape:rM,rawbroadphase_new:KS,rawbroadphase_projectPoint:tM,rawbroadphase_projectPointAndGetFeature:eM,rawccdsolver_new:r1,rawcharactercollision_handle:Wb,rawcharactercollision_new:kb,rawcharactercollision_toi:qb,rawcharactercollision_translationDeltaApplied:jb,rawcharactercollision_translationDeltaRemaining:Xb,rawcharactercollision_worldNormal1:Jb,rawcharactercollision_worldNormal2:$b,rawcharactercollision_worldWitness1:Yb,rawcharactercollision_worldWitness2:Kb,rawcolliderset_coActiveCollisionTypes:$M,rawcolliderset_coActiveEvents:ZM,rawcolliderset_coActiveHooks:JM,rawcolliderset_coCastCollider:nE,rawcolliderset_coCastRay:cE,rawcolliderset_coCastRayAndGetNormal:lE,rawcolliderset_coCastShape:eE,rawcolliderset_coCollisionGroups:YM,rawcolliderset_coCombineVoxelStates:CM,rawcolliderset_coContactCollider:sE,rawcolliderset_coContactForceEventThreshold:QM,rawcolliderset_coContactShape:rE,rawcolliderset_coContactSkin:VM,rawcolliderset_coContainsPoint:tE,rawcolliderset_coDensity:jM,rawcolliderset_coFriction:kM,rawcolliderset_coFrictionCombineRule:fE,rawcolliderset_coHalfExtents:gM,rawcolliderset_coHalfHeight:xM,rawcolliderset_coHalfspaceNormal:mM,rawcolliderset_coHeightFieldFlags:LM,rawcolliderset_coHeightfieldHeights:FM,rawcolliderset_coHeightfieldNCols:OM,rawcolliderset_coHeightfieldNRows:NM,rawcolliderset_coHeightfieldScale:UM,rawcolliderset_coIndices:IM,rawcolliderset_coIntersectsRay:oE,rawcolliderset_coIntersectsShape:iE,rawcolliderset_coIsEnabled:HM,rawcolliderset_coIsSensor:_M,rawcolliderset_coMass:XM,rawcolliderset_coParent:BM,rawcolliderset_coProjectPoint:aE,rawcolliderset_coPropagateVoxelChange:RM,rawcolliderset_coRadius:bM,rawcolliderset_coRestitution:WM,rawcolliderset_coRestitutionCombineRule:pE,rawcolliderset_coRotation:oM,rawcolliderset_coRotationWrtParent:lM,rawcolliderset_coRoundRadius:SM,rawcolliderset_coSetActiveCollisionTypes:xE,rawcolliderset_coSetActiveEvents:vE,rawcolliderset_coSetActiveHooks:bE,rawcolliderset_coSetCollisionGroups:gE,rawcolliderset_coSetContactForceEventThreshold:SE,rawcolliderset_coSetContactSkin:GM,rawcolliderset_coSetDensity:ME,rawcolliderset_coSetEnabled:zM,rawcolliderset_coSetFriction:uE,rawcolliderset_coSetFrictionCombineRule:_E,rawcolliderset_coSetHalfExtents:wM,rawcolliderset_coSetHalfHeight:yM,rawcolliderset_coSetMass:EE,rawcolliderset_coSetMassProperties:TE,rawcolliderset_coSetRadius:vM,rawcolliderset_coSetRestitution:dE,rawcolliderset_coSetRestitutionCombineRule:mE,rawcolliderset_coSetRotation:uM,rawcolliderset_coSetRotationWrtParent:fM,rawcolliderset_coSetRoundRadius:MM,rawcolliderset_coSetSensor:hE,rawcolliderset_coSetShape:yE,rawcolliderset_coSetSolverGroups:wE,rawcolliderset_coSetTranslation:hM,rawcolliderset_coSetTranslationWrtParent:dM,rawcolliderset_coSetVoxel:AM,rawcolliderset_coShapeType:pM,rawcolliderset_coSolverGroups:KM,rawcolliderset_coTranslation:aM,rawcolliderset_coTranslationWrtParent:cM,rawcolliderset_coTriMeshFlags:DM,rawcolliderset_coVertices:PM,rawcolliderset_coVolume:qM,rawcolliderset_coVoxelData:EM,rawcolliderset_coVoxelSize:TM,rawcolliderset_contains:PE,rawcolliderset_createCollider:IE,rawcolliderset_forEachColliderHandle:LE,rawcolliderset_isHandleValid:gR,rawcolliderset_len:CE,rawcolliderset_new:RE,rawcolliderset_remove:DE,rawcollidershapecasthit_colliderHandle:VR,rawcollidershapecasthit_normal1:PR,rawcollidershapecasthit_normal2:IR,rawcollidershapecasthit_time_of_impact:rA,rawcollidershapecasthit_witness1:sA,rawcollidershapecasthit_witness2:aA,rawcontactforceevent_collider1:JR,rawcontactforceevent_collider2:RA,rawcontactforceevent_max_force_direction:IA,rawcontactforceevent_max_force_magnitude:DA,rawcontactforceevent_total_force:CA,rawcontactforceevent_total_force_magnitude:PA,rawcontactmanifold_contact_dist:tT,rawcontactmanifold_contact_fid1:eT,rawcontactmanifold_contact_fid2:nT,rawcontactmanifold_contact_impulse:iT,rawcontactmanifold_contact_local_p1:ZE,rawcontactmanifold_contact_local_p2:QE,rawcontactmanifold_contact_tangent_impulse_x:rT,rawcontactmanifold_contact_tangent_impulse_y:sT,rawcontactmanifold_local_n1:qE,rawcontactmanifold_local_n2:YE,rawcontactmanifold_normal:XE,rawcontactmanifold_num_contacts:$E,rawcontactmanifold_num_solver_contacts:aT,rawcontactmanifold_solver_contact_dist:cT,rawcontactmanifold_solver_contact_friction:lT,rawcontactmanifold_solver_contact_point:oT,rawcontactmanifold_solver_contact_restitution:hT,rawcontactmanifold_solver_contact_tangent_velocity:dT,rawcontactmanifold_subshape1:KE,rawcontactmanifold_subshape2:JE,rawcontactpair_collider1:VE,rawcontactpair_collider2:kE,rawcontactpair_contactManifold:jE,rawcontactpair_numContactManifolds:WE,rawdebugrenderpipeline_colors:MA,rawdebugrenderpipeline_new:yA,rawdebugrenderpipeline_render:EA,rawdebugrenderpipeline_vertices:SA,rawdeserializedworld_takeBodies:dR,rawdeserializedworld_takeBroadPhase:lR,rawdeserializedworld_takeColliders:uR,rawdeserializedworld_takeGravity:aR,rawdeserializedworld_takeImpulseJoints:fR,rawdeserializedworld_takeIntegrationParameters:oR,rawdeserializedworld_takeIslandManager:cR,rawdeserializedworld_takeMultibodyJoints:_R,rawdeserializedworld_takeNarrowPhase:hR,rawdynamicraycastvehiclecontroller_add_wheel:gv,rawdynamicraycastvehiclecontroller_chassis:uv,rawdynamicraycastvehiclecontroller_current_vehicle_speed:dv,rawdynamicraycastvehiclecontroller_index_forward_axis:pv,rawdynamicraycastvehiclecontroller_index_up_axis:fv,rawdynamicraycastvehiclecontroller_new:hv,rawdynamicraycastvehiclecontroller_num_wheels:wv,rawdynamicraycastvehiclecontroller_set_index_forward_axis:mv,rawdynamicraycastvehiclecontroller_set_index_up_axis:_v,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:jv,rawdynamicraycastvehiclecontroller_set_wheel_brake:Ov,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:xv,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:kv,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:Gv,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:qv,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:Uv,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:Ev,rawdynamicraycastvehiclecontroller_set_wheel_radius:Av,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:Kv,rawdynamicraycastvehiclecontroller_set_wheel_steering:zv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:Iv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:Lv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:Sv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:Cv,rawdynamicraycastvehiclecontroller_update_vehicle:bv,rawdynamicraycastvehiclecontroller_wheel_axle_cs:Wv,rawdynamicraycastvehiclecontroller_wheel_brake:Nv,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:vv,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:tx,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:ex,rawdynamicraycastvehiclecontroller_wheel_direction_cs:Vv,rawdynamicraycastvehiclecontroller_wheel_engine_force:Hv,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:$v,rawdynamicraycastvehiclecontroller_wheel_friction_slip:Xv,rawdynamicraycastvehiclecontroller_wheel_ground_object:sx,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:ix,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:rx,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:Fv,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:Mv,rawdynamicraycastvehiclecontroller_wheel_radius:Tv,rawdynamicraycastvehiclecontroller_wheel_rotation:Jv,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:Yv,rawdynamicraycastvehiclecontroller_wheel_side_impulse:Zv,rawdynamicraycastvehiclecontroller_wheel_steering:Bv,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:Pv,rawdynamicraycastvehiclecontroller_wheel_suspension_force:Qv,rawdynamicraycastvehiclecontroller_wheel_suspension_length:nx,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:Dv,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:yv,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:Rv,raweventqueue_clear:NA,raweventqueue_drainCollisionEvents:FA,raweventqueue_drainContactForceEvents:UA,raweventqueue_new:LA,rawgenericjoint_fixed:ay,rawgenericjoint_generic:ey,rawgenericjoint_prismatic:sy,rawgenericjoint_revolute:oy,rawgenericjoint_rope:iy,rawgenericjoint_spherical:ry,rawgenericjoint_spring:ny,rawimpulsejointset_contains:Ix,rawimpulsejointset_createJoint:Rx,rawimpulsejointset_forEachJointAttachedToRigidBody:Lx,rawimpulsejointset_forEachJointHandle:Dx,rawimpulsejointset_jointAnchor1:ux,rawimpulsejointset_jointAnchor2:fx,rawimpulsejointset_jointBodyHandle1:cx,rawimpulsejointset_jointBodyHandle2:lx,rawimpulsejointset_jointConfigureMotor:Ex,rawimpulsejointset_jointConfigureMotorModel:yx,rawimpulsejointset_jointConfigureMotorPosition:Mx,rawimpulsejointset_jointConfigureMotorVelocity:Sx,rawimpulsejointset_jointContactsEnabled:mx,rawimpulsejointset_jointFrameX1:hx,rawimpulsejointset_jointFrameX2:dx,rawimpulsejointset_jointLimitsEnabled:wx,rawimpulsejointset_jointLimitsMax:vx,rawimpulsejointset_jointLimitsMin:bx,rawimpulsejointset_jointSetAnchor1:_x,rawimpulsejointset_jointSetAnchor2:px,rawimpulsejointset_jointSetContactsEnabled:gx,rawimpulsejointset_jointSetLimits:xx,rawimpulsejointset_jointType:ox,rawimpulsejointset_len:Px,rawimpulsejointset_new:Ax,rawimpulsejointset_remove:Cx,rawintegrationparameters_contact_erp:Ox,rawintegrationparameters_dt:Nx,rawintegrationparameters_lengthUnit:$R,rawintegrationparameters_maxCcdSubsteps:Vx,rawintegrationparameters_minIslandSize:Gx,rawintegrationparameters_new:Ux,rawintegrationparameters_normalizedAllowedLinearError:Bx,rawintegrationparameters_normalizedPredictionDistance:zx,rawintegrationparameters_numInternalPgsIterations:LR,rawintegrationparameters_numSolverIterations:Hx,rawintegrationparameters_set_contact_natural_frequency:Wx,rawintegrationparameters_set_dt:kx,rawintegrationparameters_set_lengthUnit:Jx,rawintegrationparameters_set_maxCcdSubsteps:Kx,rawintegrationparameters_set_minIslandSize:Yx,rawintegrationparameters_set_normalizedAllowedLinearError:jx,rawintegrationparameters_set_normalizedPredictionDistance:Xx,rawintegrationparameters_set_numInternalPgsIterations:vR,rawintegrationparameters_set_numSolverIterations:qx,rawislandmanager_forEachActiveRigidBodyHandle:Qx,rawislandmanager_new:Zx,rawkinematiccharactercontroller_autostepEnabled:Tb,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:Eb,rawkinematiccharactercontroller_autostepMaxHeight:Sb,rawkinematiccharactercontroller_autostepMinWidth:Mb,rawkinematiccharactercontroller_computeColliderMovement:Ob,rawkinematiccharactercontroller_computedCollision:Gb,rawkinematiccharactercontroller_computedGrounded:zb,rawkinematiccharactercontroller_computedMovement:Bb,rawkinematiccharactercontroller_disableAutostep:Rb,rawkinematiccharactercontroller_disableSnapToGround:Ub,rawkinematiccharactercontroller_enableAutostep:Ab,rawkinematiccharactercontroller_enableSnapToGround:Fb,rawkinematiccharactercontroller_maxSlopeClimbAngle:Cb,rawkinematiccharactercontroller_minSlopeSlideAngle:Ib,rawkinematiccharactercontroller_new:pb,rawkinematiccharactercontroller_normalNudgeFactor:gb,rawkinematiccharactercontroller_numComputedCollisions:Hb,rawkinematiccharactercontroller_offset:bb,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:Pb,rawkinematiccharactercontroller_setMinSlopeSlideAngle:Db,rawkinematiccharactercontroller_setNormalNudgeFactor:wb,rawkinematiccharactercontroller_setOffset:vb,rawkinematiccharactercontroller_setSlideEnabled:yb,rawkinematiccharactercontroller_setUp:mb,rawkinematiccharactercontroller_slideEnabled:xb,rawkinematiccharactercontroller_snapToGroundDistance:Lb,rawkinematiccharactercontroller_snapToGroundEnabled:Nb,rawkinematiccharactercontroller_up:SR,rawmultibodyjointset_contains:yy,rawmultibodyjointset_createJoint:vy,rawmultibodyjointset_forEachJointAttachedToRigidBody:My,rawmultibodyjointset_forEachJointHandle:Sy,rawmultibodyjointset_jointAnchor1:dy,rawmultibodyjointset_jointAnchor2:uy,rawmultibodyjointset_jointContactsEnabled:fy,rawmultibodyjointset_jointFrameX1:ly,rawmultibodyjointset_jointFrameX2:hy,rawmultibodyjointset_jointLimitsEnabled:py,rawmultibodyjointset_jointLimitsMax:gy,rawmultibodyjointset_jointLimitsMin:my,rawmultibodyjointset_jointSetContactsEnabled:_y,rawmultibodyjointset_jointType:cy,rawmultibodyjointset_new:by,rawmultibodyjointset_remove:xy,rawnarrowphase_contact_pair:BE,rawnarrowphase_contact_pairs_with:OE,rawnarrowphase_intersection_pair:HE,rawnarrowphase_intersection_pairs_with:zE,rawnarrowphase_new:NE,rawphysicspipeline_is_profiler_enabled:HA,rawphysicspipeline_new:BA,rawphysicspipeline_set_profiler_enabled:zA,rawphysicspipeline_step:iR,rawphysicspipeline_stepWithEvents:rR,rawphysicspipeline_timing_broad_phase:kA,rawphysicspipeline_timing_ccd:JA,rawphysicspipeline_timing_ccd_broad_phase:ZA,rawphysicspipeline_timing_ccd_narrow_phase:QA,rawphysicspipeline_timing_ccd_solver:tR,rawphysicspipeline_timing_ccd_toi_computation:$A,rawphysicspipeline_timing_collision_detection:VA,rawphysicspipeline_timing_island_construction:eR,rawphysicspipeline_timing_narrow_phase:WA,rawphysicspipeline_timing_solver:jA,rawphysicspipeline_timing_step:GA,rawphysicspipeline_timing_user_changes:nR,rawphysicspipeline_timing_velocity_assembly:XA,rawphysicspipeline_timing_velocity_resolution:qA,rawphysicspipeline_timing_velocity_update:YA,rawphysicspipeline_timing_velocity_writeback:KA,rawpidcontroller_angular_correction:cv,rawpidcontroller_apply_angular_correction:av,rawpidcontroller_apply_linear_correction:sv,rawpidcontroller_linear_correction:ov,rawpidcontroller_new:Qb,rawpidcontroller_reset_integrals:rv,rawpidcontroller_set_axes_mask:iv,rawpidcontroller_set_kd:nv,rawpidcontroller_set_ki:ev,rawpidcontroller_set_kp:tv,rawpointcolliderprojection_colliderHandle:mT,rawpointcolliderprojection_featureId:vT,rawpointcolliderprojection_featureType:bT,rawpointcolliderprojection_isInside:wT,rawpointcolliderprojection_point:gT,rawpointprojection_isInside:_T,rawpointprojection_point:fT,rawraycolliderhit_colliderHandle:zR,rawraycolliderhit_timeOfImpact:kR,rawraycolliderintersection_colliderHandle:NR,rawraycolliderintersection_featureId:bR,rawraycolliderintersection_featureType:BR,rawraycolliderintersection_normal:RR,rawraycolliderintersection_time_of_impact:HR,rawrayintersection_featureId:wR,rawrayintersection_featureType:UR,rawrayintersection_normal:AR,rawrayintersection_time_of_impact:OR,rawrigidbodyset_contains:jS,rawrigidbodyset_createRigidBody:VS,rawrigidbodyset_forEachRigidBodyHandle:XS,rawrigidbodyset_len:WS,rawrigidbodyset_new:GS,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:qS,rawrigidbodyset_rbAddForce:RS,rawrigidbodyset_rbAddForceAtPoint:DS,rawrigidbodyset_rbAddTorque:PS,rawrigidbodyset_rbAdditionalSolverIterations:FS,rawrigidbodyset_rbAngularDamping:bS,rawrigidbodyset_rbAngvel:Vy,rawrigidbodyset_rbApplyImpulse:CS,rawrigidbodyset_rbApplyImpulseAtPoint:LS,rawrigidbodyset_rbApplyTorqueImpulse:IS,rawrigidbodyset_rbBodyType:fS,rawrigidbodyset_rbCollider:uS,rawrigidbodyset_rbDominanceGroup:Yy,rawrigidbodyset_rbEffectiveAngularInertia:oS,rawrigidbodyset_rbEffectiveInvMass:tS,rawrigidbodyset_rbEffectiveWorldInvInertia:aS,rawrigidbodyset_rbEnableCcd:Jy,rawrigidbodyset_rbGravityScale:MS,rawrigidbodyset_rbInvMass:Qy,rawrigidbodyset_rbInvPrincipalInertia:iS,rawrigidbodyset_rbIsCcdEnabled:lS,rawrigidbodyset_rbIsDynamic:gS,rawrigidbodyset_rbIsEnabled:SS,rawrigidbodyset_rbIsFixed:pS,rawrigidbodyset_rbIsKinematic:mS,rawrigidbodyset_rbIsMoving:Cy,rawrigidbodyset_rbIsSleeping:Ry,rawrigidbodyset_rbLinearDamping:wS,rawrigidbodyset_rbLinvel:Gy,rawrigidbodyset_rbLocalCom:eS,rawrigidbodyset_rbLockRotations:Xy,rawrigidbodyset_rbLockTranslations:Wy,rawrigidbodyset_rbMass:Zy,rawrigidbodyset_rbNextRotation:Iy,rawrigidbodyset_rbNextTranslation:Py,rawrigidbodyset_rbNumColliders:dS,rawrigidbodyset_rbPrincipalInertia:sS,rawrigidbodyset_rbPrincipalInertiaLocalFrame:rS,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:By,rawrigidbodyset_rbResetForces:TS,rawrigidbodyset_rbResetTorques:AS,rawrigidbodyset_rbRotation:Ty,rawrigidbodyset_rbSetAdditionalMass:zy,rawrigidbodyset_rbSetAdditionalMassProperties:Hy,rawrigidbodyset_rbSetAdditionalSolverIterations:US,rawrigidbodyset_rbSetAngularDamping:xS,rawrigidbodyset_rbSetAngvel:Uy,rawrigidbodyset_rbSetBodyType:_S,rawrigidbodyset_rbSetDominanceGroup:Ky,rawrigidbodyset_rbSetEnabled:yS,rawrigidbodyset_rbSetEnabledRotations:qy,rawrigidbodyset_rbSetEnabledTranslations:jy,rawrigidbodyset_rbSetGravityScale:ES,rawrigidbodyset_rbSetLinearDamping:vS,rawrigidbodyset_rbSetLinvel:Fy,rawrigidbodyset_rbSetNextKinematicRotation:Oy,rawrigidbodyset_rbSetNextKinematicTranslation:Ny,rawrigidbodyset_rbSetRotation:Ly,rawrigidbodyset_rbSetSoftCcdPrediction:$y,rawrigidbodyset_rbSetTranslation:Dy,rawrigidbodyset_rbSetUserData:OS,rawrigidbodyset_rbSleep:Ay,rawrigidbodyset_rbSoftCcdPrediction:hS,rawrigidbodyset_rbTranslation:Ey,rawrigidbodyset_rbUserData:NS,rawrigidbodyset_rbUserForce:BS,rawrigidbodyset_rbUserTorque:zS,rawrigidbodyset_rbVelocityAtPoint:ky,rawrigidbodyset_rbWakeUp:cS,rawrigidbodyset_rbWorldCom:nS,rawrigidbodyset_remove:kS,rawrotation_identity:cA,rawrotation_new:oA,rawrotation_w:lA,rawrotation_x:WR,rawrotation_y:jR,rawrotation_z:XR,rawsdpmatrix3_elements:vA,rawserializationpipeline_deserializeAll:mR,rawserializationpipeline_new:s1,rawserializationpipeline_serializeAll:pR,rawshape_ball:TT,rawshape_capsule:RT,rawshape_castRay:$T,rawshape_castRayAndGetNormal:ZT,rawshape_castShape:jT,rawshape_cone:IT,rawshape_contactShape:qT,rawshape_containsPoint:YT,rawshape_convexHull:GT,rawshape_convexMesh:kT,rawshape_cuboid:MT,rawshape_cylinder:CT,rawshape_halfspace:AT,rawshape_heightfield:OT,rawshape_intersectsRay:JT,rawshape_intersectsShape:XT,rawshape_polyline:UT,rawshape_projectPoint:KT,rawshape_roundCone:DT,rawshape_roundConvexHull:VT,rawshape_roundConvexMesh:WT,rawshape_roundCuboid:ET,rawshape_roundCylinder:PT,rawshape_roundTriangle:HT,rawshape_segment:BT,rawshape_triangle:zT,rawshape_trimesh:NT,rawshape_voxels:LT,rawshape_voxelsFromPoints:FT,rawshapecasthit_normal1:eA,rawshapecasthit_normal2:nA,rawshapecasthit_time_of_impact:GR,rawshapecasthit_witness1:tA,rawshapecasthit_witness2:DR,rawshapecontact_distance:FR,rawshapecontact_normal1:CR,rawshapecontact_normal2:MR,rawshapecontact_point1:ER,rawshapecontact_point2:TR,rawvector_new:dA,rawvector_set_x:xR,rawvector_set_y:uA,rawvector_set_z:fA,rawvector_x:qR,rawvector_xyz:_A,rawvector_xzy:gA,rawvector_y:YR,rawvector_yxz:pA,rawvector_yzx:wA,rawvector_z:KR,rawvector_zero:hA,rawvector_zxy:mA,rawvector_zyx:bA,reserve_memory:yR,version:fb},Symbol.toStringTag,{value:"Module"}));v0(h1);class Nd{constructor(t,e,n){this.x=t,this.y=e,this.z=n}}class O{static new(t,e,n){return new Nd(t,e,n)}static intoRaw(t){return new F(t.x,t.y,t.z)}static zeros(){return O.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=O.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}class qo{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}}class Gt{static identity(){return new qo(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new qo(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new kt(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class Od{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}}class Yo{static fromRaw(t){const e=new Od(t.elements());return t.free(),e}}var pn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(pn||(pn={}));class Ko{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return O.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return Gt.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return O.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return Gt.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=O.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return O.fromRaw(this.rawSet.rbLinvel(this.handle))}velocityAtPoint(t){const e=O.intoRaw(t);let n=O.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle,e));return e.free(),n}angvel(){return O.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return O.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return O.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return O.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertia(){return O.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle))}principalInertia(){return O.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Gt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertia(){return Yo.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle))}effectiveAngularInertia(){return Yo.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=O.intoRaw(e),o=O.intoRaw(n),c=Gt.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,c,s),a.free(),o.free(),c.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=O.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=O.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=O.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=O.intoRaw(t),s=O.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return O.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return O.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class En{constructor(t){this.enabled=!0,this.status=t,this.translation=O.zeros(),this.rotation=Gt.identity(),this.gravityScale=1,this.linvel=O.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=O.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=O.zeros(),this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new En(pn.Dynamic)}static kinematicPositionBased(){return new En(pn.KinematicPositionBased)}static kinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static fixed(){return new En(pn.Fixed)}static newDynamic(){return new En(pn.Dynamic)}static newKinematicPositionBased(){return new En(pn.KinematicPositionBased)}static newKinematicVelocityBased(){return new En(pn.KinematicVelocityBased)}static newStatic(){return new En(pn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return O.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class Zs{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class Bd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new we,this.map=new Zs,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new Ko(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=O.intoRaw(e.translation),r=Gt.intoRaw(e.rotation),s=O.intoRaw(e.linvel),a=O.intoRaw(e.centerOfMass),o=O.intoRaw(e.angvel),c=O.intoRaw(e.principalAngularInertia),l=Gt.intoRaw(e.angularInertiaLocalFrame),d=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,c,l,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),c.free(),l.free();const f=new Ko(this.raw,t,d);return f.userData=e.userData,this.map.set(d,f),f}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class zd{constructor(t){this.raw=t||new Ai}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}}var Jo;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(Jo||(Jo={}));var $o;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})($o||($o={}));var Zo;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(Zo||(Zo={}));class vn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case mn.Revolute:return new Wd(t,e,n);case mn.Prismatic:return new kd(t,e,n);case mn.Fixed:return new Hd(t,e,n);case mn.Spring:return new Vd(t,e,n);case mn.Rope:return new Gd(t,e,n);case mn.Spherical:return new Xd(t,e,n);case mn.Generic:return new jd(t,e,n);default:return new vn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Gt.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Gt.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return O.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return O.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=O.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ic extends vn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class Hd extends vn{}class Gd extends vn{}class Vd extends vn{}class kd extends Ic{rawAxis(){return Xs.LinX}}class Wd extends Ic{rawAxis(){return Xs.AngX}}class jd extends vn{}class Xd extends vn{}class qd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Kn,this.map=new Zs,t&&t.forEachJointHandle(e=>{this.map.set(e,vn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let c=vn.newTyped(this.raw,t,o);return this.map.set(o,c),c}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class di{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case mn.Revolute:return new Jd(t,e);case mn.Prismatic:return new Kd(t,e);case mn.Fixed:return new Yd(t,e);case mn.Spherical:return new $d(t,e);default:return new di(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Dc extends di{}class Yd extends di{}class Kd extends Dc{rawAxis(){return Xs.LinX}}class Jd extends Dc{rawAxis(){return Xs.AngX}}class $d extends di{}class Zd{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new $n,this.map=new Zs,t&&t.forEachJointHandle(e=>{this.map.set(e,di.newTyped(this.raw,e))})}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=di.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var Pr;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Pr||(Pr={}));class Qd{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Xo}}class tu{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Jn}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}var ir;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(ir||(ir={}));class Nr{constructor(t,e,n,r){this.featureType=ir.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Nr(t.time_of_impact(),O.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class Ir{constructor(t,e,n,r,s){this.featureType=ir.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Ir(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class Qs{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new Qs(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class Or{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new Or(O.fromRaw(t.point()),t.isInside());return t.free(),e}}class Dr{constructor(t,e,n,r,s){this.featureType=ir.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new Dr(t.get(e.colliderHandle()),O.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class lr{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new lr(e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class Br extends lr{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new Br(t.get(e.colliderHandle()),e.time_of_impact(),O.fromRaw(e.witness1()),O.fromRaw(e.witness2()),O.fromRaw(e.normal1()),O.fromRaw(e.normal2()));return e.free(),n}}class eu{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Yn}castRay(t,e,n,r,s,a,o,c,l,d,f){let u=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=Qs.fromRaw(n,this.raw.castRay(t.raw,e.raw,n.raw,u,m,s,a,o,c,l,d,f));return u.free(),m.free(),w}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,d,f){let u=O.intoRaw(r.origin),m=O.intoRaw(r.dir),w=Ir.fromRaw(n,this.raw.castRayAndGetNormal(t.raw,e.raw,n.raw,u,m,s,a,o,c,l,d,f));return u.free(),m.free(),w}intersectionsWithRay(t,e,n,r,s,a,o,c,l,d,f,u){let m=O.intoRaw(r.origin),w=O.intoRaw(r.dir),y=g=>o(Ir.fromRaw(n,g));this.raw.intersectionsWithRay(t.raw,e.raw,n.raw,m,w,s,a,y,c,l,d,f,u),m.free(),w.free()}intersectionWithShape(t,e,n,r,s,a,o,c,l,d,f){let u=O.intoRaw(r),m=Gt.intoRaw(s),w=a.intoRaw(),y=this.raw.intersectionWithShape(t.raw,e.raw,n.raw,u,m,w,o,c,l,d,f);return u.free(),m.free(),w.free(),y}projectPoint(t,e,n,r,s,a,o,c,l,d){let f=O.intoRaw(r),u=Dr.fromRaw(n,this.raw.projectPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,d));return f.free(),u}projectPointAndGetFeature(t,e,n,r,s,a,o,c,l){let d=O.intoRaw(r),f=Dr.fromRaw(n,this.raw.projectPointAndGetFeature(t.raw,e.raw,n.raw,d,s,a,o,c,l));return d.free(),f}intersectionsWithPoint(t,e,n,r,s,a,o,c,l,d){let f=O.intoRaw(r);this.raw.intersectionsWithPoint(t.raw,e.raw,n.raw,f,s,a,o,c,l,d),f.free()}castShape(t,e,n,r,s,a,o,c,l,d,f,u,m,w,y){let g=O.intoRaw(r),p=Gt.intoRaw(s),x=O.intoRaw(a),T=o.intoRaw(),E=Br.fromRaw(n,this.raw.castShape(t.raw,e.raw,n.raw,g,p,x,T,c,l,d,f,u,m,w,y));return g.free(),p.free(),x.free(),T.free(),E}intersectionsWithShape(t,e,n,r,s,a,o,c,l,d,f,u){let m=O.intoRaw(r),w=Gt.intoRaw(s),y=a.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,n.raw,m,w,y,o,c,l,d,f,u),m.free(),w.free(),y.free()}collidersWithAabbIntersectingAabb(t,e,n,r,s,a){let o=O.intoRaw(r),c=O.intoRaw(s);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,n.raw,o,c,a),o.free(),c.free()}}class nu{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Ie,this.tempManifold=new iu(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class iu{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t}normal(){return O.fromRaw(this.raw.normal())}localNormal1(){return O.fromRaw(this.raw.local_n1())}localNormal2(){return O.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return O.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return O.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return O.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return O.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class rr{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new rr(t.distance(),O.fromRaw(t.point1()),O.fromRaw(t.point2()),O.fromRaw(t.normal1()),O.fromRaw(t.normal2()));return t.free(),e}}class De{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,c,l,d;switch(n){case Be.Ball:return new Lc(t.coRadius(e));case Be.Cuboid:return r=t.coHalfExtents(e),new Fc(r.x,r.y,r.z);case Be.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new Uc(r.x,r.y,r.z,s);case Be.Capsule:return c=t.coHalfHeight(e),l=t.coRadius(e),new Nc(c,l);case Be.Segment:return a=t.coVertices(e),new Oc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]));case Be.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new Hc(a,o);case Be.Triangle:return a=t.coVertices(e),new Bc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]));case Be.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new zc(O.new(a[0],a[1],a[2]),O.new(a[3],a[4],a[5]),O.new(a[6],a[7],a[8]),s);case Be.HalfSpace:return d=O.fromRaw(t.coHalfspaceNormal(e)),new ru(d);case Be.Voxels:const f=t.coVoxelData(e),u=t.coVoxelSize(e);return new Gc(f,u);case Be.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const m=t.coTriMeshFlags(e);return new Vc(a,o,m);case Be.HeightField:const w=t.coHeightfieldScale(e),y=t.coHeightfieldHeights(e),g=t.coHeightfieldNRows(e),p=t.coHeightfieldNCols(e),x=t.coHeightFieldFlags(e);return new kc(g,p,y,w,x);case Be.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new Us(a,o);case Be.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Ns(a,o,s);case Be.Cylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),new Wc(c,l);case Be.RoundCylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new jc(c,l,s);case Be.Cone:return c=t.coHalfHeight(e),l=t.coRadius(e),new Xc(c,l);case Be.RoundCone:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new qc(c,l,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,c,l,d){let f=O.intoRaw(t),u=Gt.intoRaw(e),m=O.intoRaw(n),w=O.intoRaw(s),y=Gt.intoRaw(a),g=O.intoRaw(o),p=this.intoRaw(),x=r.intoRaw(),T=lr.fromRaw(null,p.castShape(f,u,m,x,w,y,g,c,l,d));return f.free(),u.free(),m.free(),w.free(),y.free(),g.free(),p.free(),x.free(),T}intersectsShape(t,e,n,r,s){let a=O.intoRaw(t),o=Gt.intoRaw(e),c=O.intoRaw(r),l=Gt.intoRaw(s),d=this.intoRaw(),f=n.intoRaw(),u=d.intersectsShape(a,o,f,c,l);return a.free(),o.free(),c.free(),l.free(),d.free(),f.free(),u}contactShape(t,e,n,r,s,a){let o=O.intoRaw(t),c=Gt.intoRaw(e),l=O.intoRaw(r),d=Gt.intoRaw(s),f=this.intoRaw(),u=n.intoRaw(),m=rr.fromRaw(f.contactShape(o,c,u,l,d,a));return o.free(),c.free(),l.free(),d.free(),f.free(),u.free(),m}containsPoint(t,e,n){let r=O.intoRaw(t),s=Gt.intoRaw(e),a=O.intoRaw(n),o=this.intoRaw(),c=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),c}projectPoint(t,e,n,r){let s=O.intoRaw(t),a=Gt.intoRaw(e),o=O.intoRaw(n),c=this.intoRaw(),l=Or.fromRaw(c.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),c.free(),l}intersectsRay(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=O.intoRaw(t.origin),c=O.intoRaw(t.dir),l=this.intoRaw(),d=l.intersectsRay(s,a,o,c,r);return s.free(),a.free(),o.free(),c.free(),l.free(),d}castRay(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),c=O.intoRaw(t.origin),l=O.intoRaw(t.dir),d=this.intoRaw(),f=d.castRay(a,o,c,l,r,s);return a.free(),o.free(),c.free(),l.free(),d.free(),f}castRayAndGetNormal(t,e,n,r,s){let a=O.intoRaw(e),o=Gt.intoRaw(n),c=O.intoRaw(t.origin),l=O.intoRaw(t.dir),d=this.intoRaw(),f=Nr.fromRaw(d.castRayAndGetNormal(a,o,c,l,r,s));return a.free(),o.free(),c.free(),l.free(),d.free(),f}}var Re;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace",i[i.Voxels=18]="Voxels"})(Re||(Re={}));var Qo;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(Qo||(Qo={}));var tc;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES"})(tc||(tc={}));class Lc extends De{constructor(t){super(),this.type=Re.Ball,this.radius=t}intoRaw(){return Lt.ball(this.radius)}}class ru extends De{constructor(t){super(),this.type=Re.HalfSpace,this.normal=t}intoRaw(){let t=O.intoRaw(this.normal),e=Lt.halfspace(t);return t.free(),e}}class Fc extends De{constructor(t,e,n){super(),this.type=Re.Cuboid,this.halfExtents=O.new(t,e,n)}intoRaw(){return Lt.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Uc extends De{constructor(t,e,n,r){super(),this.type=Re.RoundCuboid,this.halfExtents=O.new(t,e,n),this.borderRadius=r}intoRaw(){return Lt.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Nc extends De{constructor(t,e){super(),this.type=Re.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return Lt.capsule(this.halfHeight,this.radius)}}class Oc extends De{constructor(t,e){super(),this.type=Re.Segment,this.a=t,this.b=e}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=Lt.segment(t,e);return t.free(),e.free(),n}}class Bc extends De{constructor(t,e,n){super(),this.type=Re.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Lt.triangle(t,e,n);return t.free(),e.free(),n.free(),r}}class zc extends De{constructor(t,e,n,r){super(),this.type=Re.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=O.intoRaw(this.a),e=O.intoRaw(this.b),n=O.intoRaw(this.c),r=Lt.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class Hc extends De{constructor(t,e){super(),this.type=Re.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return Lt.polyline(this.vertices,this.indices)}}class Gc extends De{constructor(t,e){super(),this.type=Re.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t=O.intoRaw(this.voxelSize),e;return this.data instanceof Int32Array?e=Lt.voxels(t,this.data):e=Lt.voxelsFromPoints(t,this.data),t.free(),e}}class Vc extends De{constructor(t,e,n){super(),this.type=Re.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return Lt.trimesh(this.vertices,this.indices,this.flags)}}class Us extends De{constructor(t,e){super(),this.type=Re.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?Lt.convexMesh(this.vertices,this.indices):Lt.convexHull(this.vertices)}}class Ns extends De{constructor(t,e,n){super(),this.type=Re.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?Lt.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Lt.roundConvexHull(this.vertices,this.borderRadius)}}class kc extends De{constructor(t,e,n,r,s){super(),this.type=Re.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=O.intoRaw(this.scale),e=Lt.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class Wc extends De{constructor(t,e){super(),this.type=Re.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return Lt.cylinder(this.halfHeight,this.radius)}}class jc extends De{constructor(t,e,n){super(),this.type=Re.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return Lt.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Xc extends De{constructor(t,e){super(),this.type=Re.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return Lt.cone(this.halfHeight,this.radius)}}class qc extends De{constructor(t,e,n){super(),this.type=Re.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return Lt.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class su{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new I0}step(t,e,n,r,s,a,o,c,l,d,f,u){let m=O.intoRaw(t);f?this.raw.stepWithEvents(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,d.raw,f.raw,u,u?u.filterContactPair:null,u?u.filterIntersectionPair:null):this.raw.step(m,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,d.raw),m.free()}}class ec{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new L0}serializeAll(t,e,n,r,s,a,o,c,l){let d=O.intoRaw(t);const f=this.raw.serializeAll(d,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw);return d.free(),f}deserializeAll(t){return ta.fromRaw(this.raw.deserializeAll(t))}}class au{constructor(t,e){this.vertices=t,this.colors=e}}class ou{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new A0}render(t,e,n,r,s,a,o){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw,a,e.castClosure(o)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class cu{}class lu{constructor(t,e,n,r,s,a){this.params=e,this.bodies=s,this.colliders=a,this.broadPhase=n,this.narrowPhase=r,this.raw=new P0(t),this.rawCharacterCollision=new Ud,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=O.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=O.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return O.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new cu,e.translationDeltaApplied=O.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=O.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=O.fromRaw(n.worldWitness1()),e.witness2=O.fromRaw(n.worldWitness2()),e.normal1=O.fromRaw(n.worldNormal1()),e.normal2=O.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}var nc;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(nc||(nc={}));class hu{constructor(t,e,n,r,s,a){this.params=t,this.bodies=e,this.raw=new D0(n,r,s,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n){let r=O.intoRaw(e),s=O.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}angularCorrection(t,e,n){let r=Gt.intoRaw(e),s=O.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),O.fromRaw(a)}}class du{constructor(t,e,n,r,s){this.raw=new R0(t.handle),this.broadPhase=e,this.narrowPhase=n,this.bodies=r,this.colliders=s,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=O.intoRaw(t),o=O.intoRaw(e),c=O.intoRaw(n);this.raw.add_wheel(a,o,c,r,s),a.free(),o.free(),c.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return O.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return O.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return O.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=O.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return O.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return O.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return O.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class ta{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,a,o,c,l,d,f,u,m){this.gravity=t,this.integrationParameters=new zd(e),this.islands=new tu(n),this.broadPhase=new eu(r),this.narrowPhase=new nu(s),this.bodies=new Bd(a),this.colliders=new uu(o),this.impulseJoints=new qd(c),this.multibodyJoints=new Zd(l),this.ccdSolver=new Qd(d),this.physicsPipeline=new su(f),this.serializationPipeline=new ec(u),this.debugRenderPipeline=new ou(m),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new ta(O.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new ec().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new au(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new lu(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new hu(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new du(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,c){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}castRayAndGetNormal(t,e,n,r,s,a,o,c){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}intersectionsWithRay(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}intersectionWithShape(t,e,n,r,s,a,o,c){let l=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c));return l!=null?this.colliders.get(l):null}projectPoint(t,e,n,r,s,a,o){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,c,l,d,f,u){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,r,s,a,o,c,l,d?d.handle:null,f?f.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(t,e,n,r,s,a,o,c,l){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}collidersWithAabbIntersectingAabb(t,e,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}}var Os;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Os||(Os={}));var Bs;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Bs||(Bs={}));var ic;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(ic||(ic={}));var zs;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(zs||(zs={}));class rc{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=De.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return O.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}translationWrtParent(){return O.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle))}rotation(){return Gt.fromRaw(this.colliderSet.raw.coRotation(this.handle))}rotationWrtParent(){return Gt.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=O.intoRaw(e),a=O.intoRaw(n),o=Gt.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return O.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=O.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,n,r){this.colliderSet.raw.coSetVoxel(this.handle,t,e,n,r),this._shape=null}propagateVoxelChange(t,e,n,r,s,a,o){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,n,r,s,a,o),this._shape=null}combineVoxelStates(t,e,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return O.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=O.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=O.intoRaw(t),r=Or.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=O.intoRaw(t.origin),r=O.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,c){let l=O.intoRaw(t),d=O.intoRaw(n),f=Gt.intoRaw(r),u=O.intoRaw(s),m=e.intoRaw(),w=lr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,m,d,f,u,a,o,c));return l.free(),d.free(),f.free(),u.free(),m.free(),w}castCollider(t,e,n,r,s,a){let o=O.intoRaw(t),c=O.intoRaw(n),l=Br.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,c,r,s,a));return o.free(),c.free(),l}intersectsShape(t,e,n){let r=O.intoRaw(e),s=Gt.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=O.intoRaw(e),a=Gt.intoRaw(n),o=t.intoRaw(),c=rr.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),c}contactCollider(t,e){return rr.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=O.intoRaw(t.origin),s=O.intoRaw(t.dir),a=Nr.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var Ei;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Ei||(Ei={}));class Ae{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Ei.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Gt.identity(),this.translation=O.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Pr.Average,this.restitutionCombineRule=Pr.Average,this.activeCollisionTypes=zs.DEFAULT,this.activeEvents=Os.NONE,this.activeHooks=Bs.NONE,this.mass=0,this.centerOfMass=O.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=O.zeros(),this.angularInertiaLocalFrame=Gt.identity()}static ball(t){const e=new Lc(t);return new Ae(e)}static capsule(t,e){const n=new Nc(t,e);return new Ae(n)}static segment(t,e){const n=new Oc(t,e);return new Ae(n)}static triangle(t,e,n){const r=new Bc(t,e,n);return new Ae(r)}static roundTriangle(t,e,n,r){const s=new zc(t,e,n,r);return new Ae(s)}static polyline(t,e){const n=new Hc(t,e);return new Ae(n)}static voxels(t,e){const n=new Gc(t,e);return new Ae(n)}static trimesh(t,e,n){const r=new Vc(t,e,n);return new Ae(r)}static cuboid(t,e,n){const r=new Fc(t,e,n);return new Ae(r)}static roundCuboid(t,e,n,r){const s=new Uc(t,e,n,r);return new Ae(s)}static heightfield(t,e,n,r,s){const a=new kc(t,e,n,r,s);return new Ae(a)}static cylinder(t,e){const n=new Wc(t,e);return new Ae(n)}static roundCylinder(t,e,n){const r=new jc(t,e,n);return new Ae(r)}static cone(t,e){const n=new Xc(t,e);return new Ae(n)}static roundCone(t,e,n){const r=new qc(t,e,n);return new Ae(r)}static convexHull(t){const e=new Us(t,null);return new Ae(e)}static convexMesh(t,e){const n=new Us(t,e);return new Ae(n)}static roundConvexHull(t,e){const n=new Ns(t,null,e);return new Ae(n)}static roundConvexMesh(t,e,n){const r=new Ns(t,e,n);return new Ae(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return Gt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Ei.Density,this.density=t,this}setMass(t){return this.massPropsMode=Ei.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=Ei.MassProps,this.mass=t,O.copy(this.centerOfMass,e),O.copy(this.principalAngularInertia,n),Gt.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class uu{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new xe,this.map=new Zs,t&&t.forEachColliderHandle(e=>{this.map.set(e,new rc(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=O.intoRaw(e.translation),o=Gt.intoRaw(e.rotation),c=O.intoRaw(e.centerOfMass),l=O.intoRaw(e.principalAngularInertia),d=Gt.intoRaw(e.angularInertiaLocalFrame),f=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,c,l,d,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),c.free(),l.free(),d.free();let u=r?t.get(n):null,m=new rc(this,f,u,e.shape);return this.map.set(f,m),m}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return zs},get ActiveEvents(){return Os},get ActiveHooks(){return Bs},Ball:Lc,BroadPhase:eu,CCDSolver:Qd,Capsule:Nc,CharacterCollision:cu,get CoefficientCombineRule(){return Pr},Collider:rc,ColliderDesc:Ae,ColliderSet:uu,ColliderShapeCastHit:Br,Cone:Xc,ConvexPolyhedron:Us,Cuboid:Fc,Cylinder:Wc,DebugRenderBuffers:au,DebugRenderPipeline:ou,DynamicRayCastVehicleController:du,get FeatureType(){return ir},FixedImpulseJoint:Hd,FixedMultibodyJoint:Yd,GenericImpulseJoint:jd,HalfSpace:ru,get HeightFieldFlags(){return Qo},Heightfield:kc,ImpulseJoint:vn,ImpulseJointSet:qd,IntegrationParameters:zd,IslandManager:tu,get JointAxesMask(){return Zo},get JointType(){return Jo},KinematicCharacterController:lu,get MassPropsMode(){return Ei},get MotorModel(){return $o},MultibodyJoint:di,MultibodyJointSet:Zd,NarrowPhase:nu,PhysicsPipeline:su,get PidAxesMask(){return nc},PidController:hu,PointColliderProjection:Dr,PointProjection:Or,Polyline:Hc,PrismaticImpulseJoint:kd,PrismaticMultibodyJoint:Kd,Quaternion:qo,RayColliderHit:Qs,RayColliderIntersection:Ir,RayIntersection:Nr,RevoluteImpulseJoint:Wd,RevoluteMultibodyJoint:Jd,RigidBody:Ko,RigidBodyDesc:En,RigidBodySet:Bd,get RigidBodyType(){return pn},RopeImpulseJoint:Gd,RotationOps:Gt,RoundCone:qc,RoundConvexPolyhedron:Ns,RoundCuboid:Uc,RoundCylinder:jc,RoundTriangle:zc,SdpMatrix3:Od,SdpMatrix3Ops:Yo,Segment:Oc,SerializationPipeline:ec,Shape:De,ShapeCastHit:lr,ShapeContact:rr,get ShapeType(){return Re},get SolverFlags(){return ic},SphericalImpulseJoint:Xd,SphericalMultibodyJoint:$d,SpringImpulseJoint:Vd,TempContactManifold:iu,TriMesh:Vc,get TriMeshFlags(){return tc},Triangle:Bc,UnitImpulseJoint:Ic,UnitMultibodyJoint:Dc,Vector3:Nd,VectorOps:O,Voxels:Gc,World:ta},Symbol.toStringTag,{value:"Module"}));function d1(i){const t=(Math.max(Ke.minDice,i)-Ke.minDice)/Math.max(1,Ke.maxDice-Ke.minDice);return{base:oe.launch.dropHeightBaseMin+(oe.launch.dropHeightBaseMax-oe.launch.dropHeightBaseMin)*t,random:oe.launch.dropHeightRandomMin+(oe.launch.dropHeightRandomMax-oe.launch.dropHeightRandomMin)*t}}function fu(i,t=0){let e=Math.random()*2-1,n=Math.random()*2-1,r=Math.random()*2-1,s=Math.hypot(e,n,r);s<1e-4&&(e=1,n=0,r=0,s=1);const a=Math.max(.1,i+(Math.random()*2-1)*t);return{x:e/s*a,y:n/s*a,z:r/s*a}}function u1(i){const t=new Gn.World({x:0,y:oe.world.gravityY,z:0});t.integrationParameters.dt=oe.dt;const e=oe.world.wallThickness,n=oe.world.wallHalfHeight,r=i,s=t.createRigidBody(Gn.RigidBodyDesc.fixed().setTranslation(0,-.05,0));t.createCollider(Gn.ColliderDesc.cuboid(r,.1,r).setRestitution(oe.world.floorRestitution).setFriction(oe.world.floorFriction),s);for(let a=0;a<oe.world.wallSegments;a++){const o=a/oe.world.wallSegments*Math.PI*2,c=Math.cos(o)*r,l=Math.sin(o)*r,d=t.createRigidBody(Gn.RigidBodyDesc.fixed().setTranslation(c,n-.05,l));t.createCollider(Gn.ColliderDesc.cylinder(n,e).setRestitution(oe.world.wallRestitution).setFriction(oe.world.wallFriction),d)}return t}function f1(i,t,e){const n=Math.max(.75,t-e),r=Math.random()*Math.PI*2,s=Math.PI*2/Math.max(1,i);return Array.from({length:i},(a,o)=>{const c=r+o*s,l=n*(.8+Math.random()*.2);return{x:Math.cos(c)*l,z:Math.sin(c)*l}})}function _1(i,t,e,n){const{x:r,z:s}=n,{base:a,random:o}=d1(e),c=a+Math.random()*o,l=Gn.RigidBodyDesc.dynamic().setTranslation(r,c,s).setLinearDamping(oe.dice.linearDamping).setAngularDamping(oe.dice.angularDamping);typeof l.setCcdEnabled=="function"&&l.setCcdEnabled(!0);const d=i.createRigidBody(l);typeof d.enableCcd=="function"&&d.enableCcd(!0);let f;if(t.sides===6){const p=t.physRadius*.82;f=Gn.ColliderDesc.cuboid(p,p,p)}else f=Gn.ColliderDesc.convexHull(t.physHullPositions)??Gn.ColliderDesc.ball(t.physRadius*.88);f.setRestitution(oe.dice.restitution).setFriction(oe.dice.friction).setDensity(oe.dice.density),i.createCollider(f,d),d.setAngvel(fu(oe.launch.torqueStrength,oe.launch.impulseOffset),!0);const u=Math.max(0,oe.launch.upwardVelocityBase+(Math.random()*2-1)*oe.launch.upwardVelocityJitter);d.setLinvel({x:0,y:u,z:0},!0);const m=Math.hypot(r,s),w=Math.max(0,oe.launch.upwardImpulseBase+(Math.random()*2-1)*oe.launch.upwardImpulseJitter),y=m>1e-4?-r/m*oe.launch.centerImpulseStrength*m:0,g=m>1e-4?-s/m*oe.launch.centerImpulseStrength*m:0;return d.applyImpulse({x:y,y:w,z:g},!0),d}function p1(i){return Math.max(ln.surfaceLandHeightMin,i.physRadius*ln.surfaceLandHeightFactor)}function _u(i){return i.map(t=>{const e=t.body.rotation(),n=d0(t.faceNormals,e),r=Ad(t.sides,n.index),a=t.body.translation().y<=p1(t),o=n.alignment>=ln.faceLandAlignmentMin;return{entity:t,topFaceIdx:n.index,value:r,onSurface:a,faceLanded:o,valid:a&&o}})}function Yc(i,t,{resetHighlights:e=!1,applyVerticalLift:n=!0,applyUpwardImpulse:r=!0,shouldApplyUpwardImpulse:s=null,onResetHighlights:a=null}={}){i.forEach(o=>{const c=o.body.translation(),l=n?Math.max(t.verticalLift,o.physRadius*.45):0,d=Math.random()*Math.PI*2,u=(t.tiltMinDeg+Math.random()*(t.tiltMaxDeg-t.tiltMinDeg))*Math.PI/180,m=t.upwardImpulseBase*(1+(Math.random()*2-1)*(t.upwardImpulseJitterScale??0)),w=r&&(typeof s=="function"?s(o,c):!0),y=m*Math.tan(u),g=Math.max(t.lateralImpulse,y),p=t.torqueImpulse*(t.torqueImpulseJitterScale??0);e&&typeof a=="function"&&a(o),o.body.setTranslation({x:c.x,y:c.y+l,z:c.z},!0),o.body.setLinvel({x:0,y:0,z:0},!0),o.body.setAngvel({x:0,y:0,z:0},!0),typeof o.body.wakeUp=="function"&&o.body.wakeUp(),o.body.applyImpulse({x:Math.cos(d)*g,y:w?m:0,z:Math.sin(d)*g},!0),o.body.setAngvel(fu(t.torqueImpulse,p),!0)})}function m1(i){const t=i.getBoundingClientRect(),e=t.width>10?t.width:window.innerWidth-304,n=t.height>10?t.height:window.innerHeight-52,r=new kw({antialias:!0});r.setSize(e,n),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.type=kh,r.toneMapping=bn,r.toneMappingExposure=1,r.outputColorSpace=Ze,r.domElement.style.display="block",i.appendChild(r.domElement);const s=new Sf;s.background=new Wt(0);const a=new ds({color:5592405,roughness:.94,metalness:.04}),o=new Qe(new wc(1,96),a);o.rotation.x=-Math.PI/2,o.position.y=.001,o.receiveShadow=!0,s.add(o);const l=.68*1.72*2,d=.12,f=new ds({color:3815994,roughness:.9,metalness:.04,side:gn}),u=new ds({color:3289650,roughness:.92,metalness:.03,side:gn}),m=new ds({color:5592405,roughness:.82,metalness:.05}),w=new Qe(new Ds(1,1,l,96,1,!0),f),y=new Qe(new Ds(1,1,l,96,1,!0),u),g=new Qe(new Sc(1,d*.5,20,96),m);w.position.y=l*.5,y.position.y=l*.5,g.rotation.x=Math.PI/2,g.position.y=l,w.castShadow=!0,w.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0,g.castShadow=!0,g.receiveShadow=!0,s.add(w,y,g);const p=new cn(52,e/n,.1,140);let x=6.5;const T=-.45,E=new U(0,T,0),P=new U(0,16,10).normalize(),R=.998,I=1.07,v=[new U,new U,new U,new U,new U,new U,new U,new U],M=new U;function V(){const ot=Math.PI*2/v.length;for(let ct=0;ct<v.length;ct++){const Et=ct*ot;v[ct].set(Math.cos(Et)*x,0,Math.sin(Et)*x)}}function D(){o.scale.set(x,x,1)}function H(){const ot=x+d*.5,ct=Math.max(.1,x-d*.5),Et=Math.max(.1,x);w.scale.set(ot,1,ot),y.scale.set(ct,1,ct),g.scale.set(Et,Et,1)}function k(ot){p.position.copy(P).multiplyScalar(ot).add(E),p.lookAt(E),p.updateMatrixWorld(!0)}function Y(ot){k(ot);let ct=0,Et=0;for(let Qt=0;Qt<v.length;Qt++)M.copy(v[Qt]).project(p),ct=Math.max(ct,Math.abs(M.x)),Et=Math.max(Et,Math.abs(M.y));return ct<=R&&Et<=R}function j(ot,ct){const Et=Math.max(1,ct);p.aspect=Math.max(1,ot)/Et,p.updateProjectionMatrix(),V();let Qt=.1,ne=300;for(let tt=0;tt<28;tt++){const K=(Qt+ne)*.5;Y(K)?ne=K:Qt=K}k(ne*I)}j(e,n),D(),H(),s.add(new qf(16777215,1));const G=new Ol(16777215,1);G.position.set(5,11,6),G.castShadow=!0,G.shadow.mapSize.set(1024,1024),G.shadow.bias=-8e-5,G.shadow.normalBias=.02,G.shadow.camera.near=.5,G.shadow.camera.far=60,G.shadow.camera.left=-12,G.shadow.camera.right=12,G.shadow.camera.top=12,G.shadow.camera.bottom=-12,s.add(G);const q=new Ol(8956671,.05);q.position.set(-5,8,-4),s.add(q);function rt(){const ot=Math.max(8,x*1.35);G.shadow.camera.left=-ot,G.shadow.camera.right=ot,G.shadow.camera.top=ot,G.shadow.camera.bottom=-ot,G.shadow.camera.far=Math.max(50,l+x*3),G.shadow.camera.updateProjectionMatrix()}rt();function it(){const ot=i.getBoundingClientRect(),ct=ot.width>10?ot.width:window.innerWidth-304,Et=ot.height>10?ot.height:window.innerHeight-52;r.setSize(ct,Et),j(ct,Et)}function mt(ot){x=Math.max(2,Number(ot)||6.5),D(),H(),rt(),it()}return new ResizeObserver(()=>{it()}).observe(i),{scene:s,camera:p,renderer:r,setTrayHalfSize:mt}}function g1({onDiceConfigurationChanged:i,onDiceCountChanged:t,onRequestRoll:e}={}){const n=document.querySelector("#dice-count"),r=document.querySelector("#dice-configs"),s=document.querySelector("#set-all-d6"),a=document.querySelector("#set-all-d8"),o=document.querySelector("#set-all-d12"),c=document.querySelector("#set-all-d20"),l=document.querySelector("#canvas-container"),d=document.querySelector(".side-panel");let f=[],u=null,m=null;const w=document.createElement("button");w.type="button",w.className="canvas-overlay-btn canvas-menu-btn",w.textContent="☰",w.setAttribute("aria-label","Toggle settings panel"),w.setAttribute("aria-expanded","true");const y=document.createElement("button");y.type="button",y.className="canvas-overlay-btn canvas-fs-btn",y.textContent="Fullscreen";const g=document.createElement("div");g.className="canvas-result-popup";const p=document.createElement("div");p.className="canvas-total-flash";const x=document.createElement("div");x.className="canvas-reroll-flash",x.textContent="Re-roll";const T=document.createElement("dialog");T.className="color-picker-dialog",T.innerHTML=`
    <div class="color-picker-shell">
      <div class="color-picker-title">Choose Color</div>
      <div class="color-picker-palette" role="radiogroup" aria-label="Color palette"></div>
      <button type="button" class="color-picker-close">Close</button>
    </div>
  `,document.body.appendChild(T);const E=T.querySelector(".color-picker-palette"),P=T.querySelector(".color-picker-close");function R(K,$){K.style.backgroundColor=$}function I(K){E.querySelectorAll("button[data-color]").forEach($=>{const xt=$.dataset.color===K;$.classList.toggle("is-active",xt),$.setAttribute("aria-checked",xt?"true":"false")})}function v(){T.open&&T.close(),m=null}function M(K,$){m={index:K,triggerButton:$},I(f[K]),T.open||T.showModal()}function V(){typeof i=="function"&&i()}function D(){return document.fullscreenElement===l}function H(K){document.body.classList.toggle("panel-hidden",K),w.setAttribute("aria-expanded",String(!K)),w.textContent=K?"☰":"☰ Close",w.setAttribute("aria-label",K?"Open settings panel":"Close settings panel")}function k(K){l.classList.toggle("roll-disabled",K)}function Y(){u&&(clearTimeout(u),u=null),x.classList.remove("show")}function j(){p.classList.remove("show"),g.classList.remove("show"),g.innerHTML=""}function G(K){p.textContent=`Total: ${K}`,p.classList.remove("show"),p.offsetWidth,p.classList.add("show")}function q(){Y(),x.offsetWidth,x.classList.add("show"),u=setTimeout(()=>{x.classList.remove("show"),u=null},f0.relandDurationMs)}function rt(K,$){const xt=$.map(wt=>`<div class="canvas-result-line">${wt}</div>`).join("");g.innerHTML=`<div class="canvas-result-total">Total: ${K}</div>${xt}`,g.classList.add("show"),G(K)}function it(K){const $=[];for(;$.length<K;){const xt=[...gh];for(let wt=xt.length-1;wt>0;wt--){const Dt=Math.floor(Math.random()*(wt+1));[xt[wt],xt[Dt]]=[xt[Dt],xt[wt]]}$.push(...xt)}return $.slice(0,K)}function mt(){return Array.from(document.querySelectorAll('select[data-die-type="true"]')).map(K=>Number(K.value))}function ot(){return Number(n.value)}function ct(){const K=ot();f=it(K),r.innerHTML="";for(let $=0;$<K;$++){const xt=document.createElement("div");xt.className="die-config";const wt=document.createElement("label");wt.setAttribute("for",`die-type-${$}`),wt.textContent=`Die ${$+1}`;const Dt=document.createElement("select");Dt.id=`die-type-${$}`,Dt.dataset.dieType="true",Dt.className="die-type-select",u0.forEach(te=>{const ie=document.createElement("option");ie.value=String(te),ie.textContent=`D${te}`,te===6&&(ie.selected=!0),Dt.appendChild(ie)});const he=document.createElement("button");he.type="button",he.id=`die-color-${$}`,he.dataset.dieColor="true",he.className="die-color-trigger",he.setAttribute("aria-label",`Choose color for Die ${$+1}`),R(he,f[$]),he.addEventListener("click",()=>{M($,he)});const Yt=document.createElement("div");Yt.className="die-controls",Yt.append(Dt,he),xt.append(wt,Yt),r.appendChild(xt)}}function Et(K){document.querySelectorAll('select[data-die-type="true"]').forEach($=>{$.value=String(K)})}function Qt(){V(),ct(),typeof t=="function"&&t(ot())}function ne(K={forceRestart:!0}){typeof e=="function"&&e(K)}gh.forEach(K=>{const $=document.createElement("button");$.type="button",$.className="color-picker-swatch",$.dataset.color=K,$.style.backgroundColor=K,$.setAttribute("role","radio"),$.setAttribute("aria-label",`Choose ${K.toUpperCase()}`),$.setAttribute("aria-checked","false"),$.addEventListener("click",()=>{if(!m)return;const{index:xt,triggerButton:wt}=m;f[xt]!==K&&(f[xt]=K,R(wt,K),V()),v()}),E.appendChild($)}),P.addEventListener("click",v),T.addEventListener("cancel",()=>{m=null}),T.addEventListener("close",()=>{m=null}),s.addEventListener("click",()=>{Et(6),V()}),a.addEventListener("click",()=>{Et(8),V()}),o.addEventListener("click",()=>{Et(12),V()}),c.addEventListener("click",()=>{Et(20),V()}),r.addEventListener("change",K=>{const $=K.target;$ instanceof HTMLSelectElement&&$.dataset.dieType==="true"&&V()}),y.addEventListener("click",async()=>{try{D()?await document.exitFullscreen():await l.requestFullscreen()}catch{}}),l.addEventListener("click",K=>{const $=K.target;$ instanceof Element&&($.closest(".canvas-overlay-btn")||$.closest(".canvas-result-popup")||$.closest(".side-panel")||ne({forceRestart:!0}))}),document.addEventListener("fullscreenchange",()=>{const K=D();l.classList.toggle("is-fullscreen",K),y.textContent=K?"Exit Fullscreen":"Fullscreen",K||j()}),w.addEventListener("click",()=>{const K=!document.body.classList.contains("panel-hidden");H(K)}),n.addEventListener("change",Qt),window.addEventListener("keydown",K=>{if(!(K.code==="Space"||K.key===" "||K.key==="Spacebar")||K.repeat)return;const wt=document.activeElement?.tagName;wt==="INPUT"||wt==="TEXTAREA"||wt==="SELECT"||(K.preventDefault(),ne({forceRestart:!0}))}),d&&l.append(d),l.append(w,y,g),l.append(x,p);function tt(){for(let K=Ke.minDice;K<=Ke.maxDice;K++){const $=document.createElement("option");$.value=String(K),$.textContent=String(K),K===2&&($.selected=!0),n.appendChild($)}ct(),H(document.body.classList.contains("panel-hidden")),typeof t=="function"&&t(ot())}return{canvasContainer:l,initialize:tt,clearRelandFlash:Y,hideCanvasResultPopup:j,showCanvasResultPopup:rt,triggerRelandFlash:q,setRollInteractionDisabled:k,getSelectedDiceSides:mt,getDieColors:()=>[...f],getDiceCount:ot,hasVisibleResultPopup:()=>g.classList.contains("show")}}let pu=!1;const an=g1({onDiceConfigurationChanged:wu,onDiceCountChanged:i=>{mu(Pd(i))},onRequestRoll:i=>{x1(i)}}),{scene:Kc,camera:w1,renderer:b1,setTrayHalfSize:mu}=m1(an.canvasContainer);an.initialize();function Pi(i,t){pu=i,an.setRollInteractionDisabled(i)}function v1(){return!pu&&!ui}function x1({forceRestart:i=!1}={}){return i&&ui?(E1(),!0):v1()?(A1(),!0):!1}function ea({active:i=!1}={}){yr=0,Sr=0,Jc=0,ui=i}function gu(i){(Array.isArray(i.mesh.material)?i.mesh.material:[i.mesh.material]).forEach(e=>{e.emissive.setHex(i.baseEmissiveHex),e.emissiveIntensity=.08})}Pi(!1);let jn=null,xn=[],ui=!1,yr=0,Sr=0,Jc=0;function y1(i=null){let t=0;const e=[];(i??_u(xn)).forEach(({entity:r,value:s,topFaceIdx:a},o)=>{const{mesh:c}=r;t+=s;const l=Array.isArray(c.material)?c.material:[c.material];l[a]&&(l[a].emissive.setHex(16766720),l[a].emissiveIntensity=.28),e.push(`D${o+1}: ${s}`)}),Pi(!1),an.showCanvasResultPopup(t,e)}function S1(i){Jc+=1,an.triggerRelandFlash();const t=i.map(e=>e.entity);Yc(t,_0),yr=0,Sr=0,ui=!0,Pi(!0)}function M1({showFlash:i=!1}={}){return!jn||xn.length===0?!1:(i&&an.triggerRelandFlash(),an.hideCanvasResultPopup(),Yc(xn,Cd,{resetHighlights:!0,onResetHighlights:gu}),ea({active:!0}),Pi(!0),!0)}function E1(){return!jn||xn.length===0||!ui?!1:(an.hideCanvasResultPopup(),Yc(xn,Cd,{applyVerticalLift:!1,applyUpwardImpulse:!0,shouldApplyUpwardImpulse:(i,t)=>t.y<=i.physRadius*2,onResetHighlights:gu}),ea({active:!0}),Pi(!0),!0)}function T1(){return xn.length>0&&!ui&&an.hasVisibleResultPopup()}function wu(){an.clearRelandFlash(),xn.forEach(i=>{Kc.remove(i.mesh),h0(i.mesh)}),xn=[],an.hideCanvasResultPopup(),jn&&(jn.free(),jn=null),ea({active:!1}),Pi(!1)}function A1(){if(T1()&&M1({showFlash:!1}))return;wu();const i=an.getSelectedDiceSides(),t=Pd(i.length);mu(t),jn=u1(t),ea({active:!0}),Pi(!0);const e=an.getDieColors(),n=i.map((a,o)=>l0(a,o,e[o])),r=n.reduce((a,o)=>Math.max(a,o.physRadius),0),s=f1(i.length,t,oe.launch.boundaryInset+r*.9);n.forEach((a,o)=>{const c=_1(jn,a,i.length,s[o]);Kc.add(a.mesh);const l=a.mesh.material[0]?.emissive?.getHex?.()??0;xn.push({body:c,mesh:a.mesh,faceNormals:a.faceNormals,sides:a.sides,physRadius:a.physRadius,baseEmissiveHex:l})})}function bu(){if(requestAnimationFrame(bu),ui&&jn){jn.step(),yr++;let i=!0,t=!0,e=!0;for(const{body:r,mesh:s}of xn){const a=r.translation(),o=r.rotation(),c=r.linvel(),l=r.angvel();s.position.set(a.x,a.y,a.z),s.quaternion.set(o.x,o.y,o.z,o.w),r.isSleeping()||(i=!1),a.y<=ln.settleHeight&&Math.abs(c.y)<ln.verticalStopSpeed||(t=!1);const d=c.x*c.x+c.y*c.y+c.z*c.z,f=l.x*l.x+l.y*l.y+l.z*l.z;d<p0&&f<m0||(e=!1)}if(Sr=yr>=ln.minRollSteps&&t&&e?Sr+1:0,i&&t||Sr>=ln.minStableFrames||yr>=ln.maxSteps){const r=_u(xn),s=r.filter(a=>!a.valid);s.length>0&&Jc<Ec.maxAttempts?S1(s):(ui=!1,y1(r))}}b1.render(Kc,w1)}bu();
